"use strict";
const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));
function show(id){ ["home","quiz","result","stats","review","data","flash","browse","reference","conceptmap","mockexam"].forEach(s=>$("#"+s).classList.toggle("hidden", s!==id)); $("#quizBar").classList.toggle("hidden", id!=="quiz"); $("#flashBar").classList.toggle("hidden", id!=="flash"); window.scrollTo(0,0); }
function lzLink(lzStr){ if(!lzStr) return ""; const n=String(lzStr).replace(/^LZ\s*/,""); return "<span class='lzlink' data-lz='"+n+"' title='Zum Lernstoff'>"+escapeHtml(lzStr)+"</span>"; }
function shuffle(arr){ const a=arr.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(pseudoRandom()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
// deterministic-ish RNG seeded by time isn't available offline reliably; Math.random is fine here in the browser
function pseudoRandom(){ return Math.random(); }
function eqSet(a,b){ if(a.length!==b.length) return false; const s=new Set(a); return b.every(x=>s.has(x)); }
function round1(x){ return Math.round(x*10)/10; }

/* ---- Offizielle iSAQB-Bewertung: A-, P- und K-Fragen ----
   A (n=1): richtig = volle Punkte, sonst 0.
   P ("wähle n"): je richtiges Kreuz +Punkte/n, je falsches -Punkte/n, min 0; mehr als n angekreuzt → 0.
   K (Zuordnung, m Zeilen): je richtige Zeile +Punkte/m, je falsche -Punkte/m, min 0; leere Zeile 0. */
function questionPoints(q){ return q.points || (q.type==="k" ? 2 : (q.correct.length>1 ? 2 : 1)); }
function scoreQuestion(q, selected){
  const pts=questionPoints(q);
  if(q.type==="k"){
    const m=q.rows.length; let corr=0, wrong=0;
    (selected||[]).forEach((c,i)=>{ if(c==null) return; if(c===q.rows[i].cat) corr++; else wrong++; });
    return Math.max(0, (corr-wrong)*(pts/m));
  }
  const n=q.correct.length;
  if(!selected || selected.length===0) return 0;
  if(selected.length>n) return 0;                    // mehr als gefordert angekreuzt → 0
  const cset=new Set(q.correct); let corr=0, wrong=0;
  selected.forEach(i=>{ if(cset.has(i)) corr++; else wrong++; });
  return Math.max(0, (corr-wrong)*(pts/n));
}
function isCorrect(q, sel){ return q.type==="k" ? q.rows.every((r,i)=> sel[i]===r.cat) : eqSet(sel, q.correct); }
function hasSelection(it){ return it.q.type==="k" ? it.selected.some(x=>x!=null) : it.selected.length>0; }

/* ---- Unterbrochene Runde speichern / fortsetzen ---- */
function persistSession(){
  if(!session) return;
  store.session={ mode:session.mode, mock:!!session.mock, idx:session.idx,
    items:session.items.map(it=>({id:it.q.id, order:it.order, selected:it.selected, submitted:it.submitted, correct:it.correct})) };
  if(session.mode==="exam" && session.endsAt){ store.session.durationMs=session.durationMs; store.session.remainingMs=Math.max(0, session.endsAt-Date.now()); }
  saveStore();
}
function clearSession(){ if(store.session){ delete store.session; saveStore(); } }
function restoreSession(){
  const s=store.session; if(!s||!s.items) return false;
  const srcPool = (s.mock && typeof MOCKEXAM!=="undefined") ? MOCKEXAM.questions : QUESTIONS;
  const items=[];
  for(const it of s.items){
    const q=srcPool.find(x=>x.id===it.id); if(!q) continue;
    const defOrder = q.options ? q.options.map((_,i)=>i) : [];
    items.push({ q, order:(it.order&&q.options&&it.order.length===q.options.length)?it.order:defOrder,
      selected:it.selected||(q.type==="k"?new Array(q.rows.length).fill(null):[]), submitted:!!it.submitted, correct:(it.correct===undefined?null:it.correct) });
  }
  if(!items.length){ clearSession(); return false; }
  session={ mode:s.mode||"practice", mock:!!s.mock, items, idx:Math.min(s.idx||0, items.length-1) };
  if(session.mode==="exam"){ session.durationMs=s.durationMs||Math.max(3,Math.round(items.length*75/40))*60000; session.endsAt=Date.now()+(s.remainingMs!=null?s.remainingMs:session.durationMs); }
  return true;
}
function updateResumeBanner(){
  const s=store.session, card=$("#resumeCard");
  if(!card) return;
  if(s&&s.items&&s.items.length){
    const done=s.items.filter(x=>x.submitted).length;
    card.style.display="";
    $("#resumeInfo").textContent=(s.mock?T("Musterprüfung","Mock exam"):(s.mode==="exam"?T("Prüfung","Exam"):T("Übung","Practice")))+T(" · bei Frage "," · at question ")+((s.idx||0)+1)+T(" von "," of ")+s.items.length+" ("+done+T(" beantwortet)"," answered)");
  } else { card.style.display="none"; }
}

/* ============================================================
   Home screen wiring
   ============================================================ */
function buildChapterChips(){
  const box = $("#chapterChips"); box.innerHTML="";
  Object.keys(CHAPTERS).forEach(n=>{
    const el=document.createElement("span");
    el.className="chip"+(ui.chapters.has(+n)?" active":"");
    el.textContent = n+" · "+chapName(+n);
    el.onclick=()=>{ if(ui.chapters.has(+n)) ui.chapters.delete(+n); else ui.chapters.add(+n); el.classList.toggle("active"); updatePool(); };
    box.appendChild(el);
  });
}
function poolQuestions(){
  let pool = QUESTIONS.filter(q=>ui.chapters.has(q.chapter) && ui.rlevels.has(q.r));
  if(ui.onlyBookmarks) pool = pool.filter(q=>qStat(q.id).bm);
  if(ui.onlyWrong) pool = pool.filter(q=>{ const s=qStat(q.id); return s.seen>0 && s.wrong>0 && s.streak===0; });
  return pool;
}
function dueQuestions(){ const now=Date.now(); return poolQuestions().filter(q=>{ const s=store.stats[q.id]; return s && s.seen>0 && (s.due||0)<=now; }); }
function updatePool(){
  const pool = poolQuestions();
  $("#poolTotal").textContent = pool.length;
  $("#startBtn").disabled = pool.length===0;
  const r = $("#numRange"); r.max = Math.max(5, pool.length);
  if(ui.num>pool.length){ ui.num = pool.length; r.value=Math.max(5,pool.length); $("#numLabel").textContent = pool.length; }
  $("#chapCount").textContent = "("+ui.chapters.size+T("/6 gewählt","/6 selected")+")";
  const d=dueQuestions().length, sb=$("#srsBtn"); if(sb){ sb.textContent=T("🔁 Wiederholen (","🔁 Repeat (")+d+")"; sb.disabled=(d===0); }
}

/* ============================================================
   Session build (with spaced repetition weighting)
   ============================================================ */
function buildSession(subset){
  let pool = subset || poolQuestions();
  if(!subset){
    // Fragen der letzten Runden möglichst meiden -> mehr Abwechslung
    const recent = store.recent||[];
    const maxAvoid = Math.max(0, pool.length - ui.num);
    const avoid = new Set(recent.slice(Math.max(0, recent.length - maxAvoid)));
    const base = pool.filter(q=>!avoid.has(q.id));   // >= ui.num frische Fragen garantiert
    if(ui.spacedRep){
      // ungesehene und zuvor falsche Fragen bekommen mehr Gewicht
      const weighted=[];
      base.forEach(q=>{ const s=qStat(q.id); let w=1;
        if(s.seen===0) w=2; if(s.wrong>s.correct) w=3; if(s.streak>=3) w=0.5;
        for(let i=0;i<Math.max(1,Math.round(w));i++) weighted.push(q); });
      const picked=[]; const used=new Set(); const wshuf=shuffle(weighted);
      for(const q of wshuf){ if(!used.has(q.id)){ used.add(q.id); picked.push(q);} if(picked.length>=ui.num) break; }
      pool=picked;
    } else {
      pool = shuffle(base).slice(0, ui.num);
    }
  } else {
    pool = shuffle(pool).slice(0, ui.num);
  }
  session={
    mode:ui.mode,
    items:pool.map(q=>{
      let order = q.options ? q.options.map((_,i)=>i) : [];
      if(ui.shuffleOpts && q.options) order=shuffle(order);
      return {q, order, selected: q.type==="k" ? new Array(q.rows.length).fill(null) : [], submitted:false, correct:null};
    }),
    idx:0
  };
  if(!subset) recordRecent(session.items.map(it=>it.q.id));
  if(session.mode==="exam"){ session.durationMs=Math.max(3, Math.round(session.items.length*75/40))*60000; session.endsAt=Date.now()+session.durationMs; }
  show("quiz");
  renderQuestion();
  startExamTimer();
}

function startMockExam(){
  if(typeof MOCKEXAM==="undefined" || !MOCKEXAM.questions.length){ alert(T("Musterprüfung nicht verfügbar.","Mock exam not available.")); return; }
  const qs = MOCKEXAM.questions;   // feste offizielle Reihenfolge, keine Mischung
  session = {
    mode:"exam", mock:true,
    items: qs.map(q=>({
      q,
      order: q.options ? q.options.map((_,i)=>i) : [],   // Optionen NICHT mischen (originalgetreu)
      selected: q.type==="k" ? new Array(q.rows.length).fill(null) : [],
      submitted:false, correct:null
    })),
    idx:0
  };
  session.durationMs = (MOCKEXAM.durationMin||75)*60000;
  session.endsAt = Date.now()+session.durationMs;
  persistSession();
  show("quiz");
  renderQuestion();
  startExamTimer();
}

/* ============================================================
   Quiz rendering
   ============================================================ */
function renderQuestion(){
  const it=session.items[session.idx];
  const q=it.q;
  const total=session.items.length;
  $("#qCounter").textContent = T("Frage","Question")+" "+(session.idx+1)+"/"+total;
  $("#progBar").style.width = ((session.idx)/total*100)+"%";
  const correctSoFar = session.items.filter(x=>x.correct===true).length;
  const answered = session.items.filter(x=>x.submitted).length;
  if(session.mode==="exam"){ updateTimerDisplay(); }
  else { $("#qScore").textContent = answered>0 ? ("✓ "+correctSoFar+"/"+answered) : ""; }

  const badge=$("#qBadge"); if(q.r){ badge.style.display=""; badge.textContent=q.r; badge.className="badge "+q.r.toLowerCase(); } else { badge.style.display="none"; }
  $("#qChapter").textContent = session.mock ? "" : ((q.chapter?(T("Kap. ","Ch. ")+q.chapter+" · "+chapName(q.chapter)):"")+(q.lz?(" · "+q.lz):""));
  $("#qText").textContent = Lq(q);
  const qPts=$("#qPts");
  if(session.mode==="exam"){ qPts.style.display=""; qPts.textContent=questionPoints(q)+T(" P."," pts"); }
  else { qPts.style.display="none"; }
  if(q.type==="k"){ $("#qType").textContent = T("Ordnen Sie jede Zeile einer Kategorie zu.","Assign each row to a category."); }
  else { const n=q.correct.length; $("#qType").textContent = T("Wählen Sie "+n+" Antwort"+(n>1?"en":"")+".","Select "+n+" answer"+(n>1?"s":"")+"."); }

  const bm=$("#qBookmark"); const isBm=qStat(q.id).bm;
  bm.textContent = isBm?"★":"☆"; bm.classList.toggle("on", isBm);
  bm.onclick=()=>{ const s=qStat(q.id); s.bm=!s.bm; saveStore(); renderQuestion(); };

  const list=$("#optList"); list.innerHTML="";
  if(q.type==="k"){ renderKRows(it, list); }
  else it.order.forEach(optIdx=>{
    const reveal = it.submitted && session.mode!=="exam";   // Prüfungsmodus deckt erst am Ende auf
    const el=document.createElement("div");
    el.className="opt";
    const isSel=it.selected.includes(optIdx);
    if(isSel) el.classList.add("selected");
    if(reveal){
      el.classList.add("disabled");
      if(q.correct.includes(optIdx)) el.classList.add("correct");
      else if(isSel) el.classList.add("wrong");
    }
    const mark=document.createElement("span"); mark.className="mark";
    mark.textContent = reveal ? (q.correct.includes(optIdx)?"✓":(isSel?"✕":"")) : (isSel?"✓":"");
    const body=document.createElement("div"); body.className="optbody";
    const txt=document.createElement("div"); txt.textContent=Lopts(q)[optIdx];
    body.appendChild(txt);
    const oe=LoptExpl(q);
    if(reveal && oe && oe[optIdx]){
      const why=document.createElement("div"); why.className="optwhy"; why.textContent=oe[optIdx];
      body.appendChild(why);
    }
    el.appendChild(mark); el.appendChild(body);
    if(!reveal){
      el.onclick=()=>{
        const i=it.selected.indexOf(optIdx); if(i>=0) it.selected.splice(i,1); else it.selected.push(optIdx);
        renderQuestion();
      };
    }
    list.appendChild(el);
  });

  const ex=$("#explainBox"); ex.innerHTML="";
  if(it.submitted && session.mode==="practice"){
    const d=document.createElement("div"); d.className="explain";
    d.innerHTML="<b>"+(it.correct?T("Richtig ✓","Correct ✓"):T("Nicht ganz ✕","Not quite ✕"))+"</b>"+escapeHtml(Lexpl(q))+
      "<div class='lz'>"+(q.r?q.r+" · ":"")+lzLink(q.lz)+" · "+T("Kapitel","Chapter")+" "+q.chapter+"</div>";
    ex.appendChild(d);
  }

  // primary button
  const pb=$("#primaryBtn");
  const last = session.idx===total-1;
  if(session.mode==="exam"){
    pb.textContent = last ? T("Abgeben & Auswerten","Submit & evaluate") : T("Weiter →","Next →");
    pb.disabled = false;
  } else if(!it.submitted){
    pb.textContent = T("Prüfen","Check");
    pb.disabled = !hasSelection(it);
  } else {
    pb.textContent = last ? T("Ergebnis anzeigen","Show result") : T("Nächste Frage →","Next question →");
    pb.disabled = false;
  }
  const prev=$("#prevBtn");
  if(prev){ prev.classList.toggle("hidden", session.idx===0); prev.textContent=T("← Zurück","← Back"); }
  persistSession();
}

function escapeHtml(s){ return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }

/* ---- K-Fragen: Matrix aus Zeilen mit je zwei Kategorien ---- */
function renderKRows(it, list){
  const q=it.q;
  const reveal = it.submitted && session.mode!=="exam";   // Prüfungsmodus deckt erst am Ende auf
  q.rows.forEach((row,ri)=>{
    const wrap=document.createElement("div"); wrap.className="krow";
    const st=document.createElement("div"); st.className="kstmt"; st.textContent=Lrow(row);
    const cats=document.createElement("div"); cats.className="kcats";
    Lcats(q).forEach((label,ci)=>{
      const b=document.createElement("button"); b.className="kcat"; b.textContent=label;
      const sel=it.selected[ri];
      if(!reveal){
        if(sel===ci) b.classList.add("sel");
        b.onclick=()=>{ it.selected[ri]=(it.selected[ri]===ci?null:ci); renderQuestion(); };
      } else {
        b.disabled=true;
        if(ci===row.cat) b.classList.add(sel===ci?"correct":"miss");
        else if(sel===ci) b.classList.add("wrong");
      }
      cats.appendChild(b);
    });
    wrap.appendChild(st); wrap.appendChild(cats); list.appendChild(wrap);
  });
}

/* ---- Prüfungs-Countdown ---- */
function fmtTime(ms){ const t=Math.max(0,ms); const m=Math.floor(t/60000), s=Math.floor((t%60000)/1000); return m+":"+(s<10?"0":"")+s; }
function updateTimerDisplay(){
  if(!session||session.mode!=="exam"||!session.endsAt) return;
  const rem=Math.max(0, session.endsAt-Date.now());
  $("#qScore").innerHTML="<span class='timer"+(rem<5*60000?" warn":"")+"'>⏱ "+fmtTime(rem)+"</span>";
}
function startExamTimer(){
  stopExamTimer();
  if(!session||session.mode!=="exam") return;
  updateTimerDisplay();
  timerId=setInterval(()=>{
    if(!session||session.mode!=="exam"){ stopExamTimer(); return; }
    updateTimerDisplay();
    if(session.endsAt-Date.now()<=0){ stopExamTimer(); alert("Zeit abgelaufen – die Prüfung wird ausgewertet."); finishQuiz(); }
  },1000);
}
function stopExamTimer(){ if(timerId){ clearInterval(timerId); timerId=null; } }

function goPrev(){
  if(session && session.idx>0){ session.idx--; renderQuestion(); }
}
function onPrimary(){
  const it=session.items[session.idx];
  const total=session.items.length;
  if(session.mode==="exam"){
    // leere Auswahl erlaubt (zählt 0 Punkte) – wie in der echten Prüfung
    it.submitted=true;
    it.correct = isCorrect(it.q, it.selected);
    if(session.idx<total-1){ session.idx++; renderQuestion(); }
    else finishQuiz();
    return;
  }
  // practice mode
  if(!it.submitted){
    if(!hasSelection(it)) return;
    it.submitted=true;
    it.correct = isCorrect(it.q, it.selected);
    recordStat(it);
    renderQuestion();
  } else {
    if(session.idx<total-1){ session.idx++; renderQuestion(); }
    else finishQuiz();
  }
}
/* ---- Spaced Repetition (Leitner) ---- */
