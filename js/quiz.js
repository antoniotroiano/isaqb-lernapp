"use strict";
/* Referenz der Prüfungssimulation: Länge und Dauer der offiziellen Beispielprüfung (nicht fest verdrahtet). */
const EXAM_BASE_N = (typeof MOCKEXAM!=="undefined" && MOCKEXAM.questions && MOCKEXAM.questions.length) || 38;
const EXAM_BASE_MIN = (typeof MOCKEXAM!=="undefined" && MOCKEXAM.durationMin) || 75;
const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));
function show(id){ ["home","quiz","result","stats","review","data","flash","browse","reference","conceptmap","glossary","mockexam"].forEach(s=>$("#"+s).classList.toggle("hidden", s!==id)); $("#quizBar").classList.toggle("hidden", id!=="quiz"); $("#flashBar").classList.toggle("hidden", id!=="flash"); updateNavBack(id); window.scrollTo(0,0); if(typeof navSync==="function") navSync(id); }
/* Sticky „← Zurück“ im Header: löst den Zurück-Button am Seitenende der langen Screens aus. */
function navBackTarget(id){ const m={stats:"statsHomeBtn",data:"dataHomeBtn",browse:"browseHomeBtn",conceptmap:"cmHomeBtn",glossary:"glHomeBtn",mockexam:"mockHomeBtn",review:"reviewBackBtn",result:"homeBtn",flash:null}; if(id==="reference") return $("#refBackBtn").classList.contains("hidden")?"refHomeBtn":"refBackBtn"; return m[id]; }
function updateNavBack(id){ const sub=id!=="home"&&id!=="quiz"; $("#navBack").classList.toggle("hidden",!sub);
  /* Im Lernstoff (aus Quiz/Concept Map/Glossar geöffnet) sagt der Header-Button, wohin es zurückgeht */
  $("#navBack").textContent = (id==="reference" && typeof refReturn!=="undefined" && refReturn) ? $("#refBackBtn").textContent : t("common.back"); document.querySelector("header.top").classList.toggle("sub",sub); }
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
  store.session={ mode:session.mode, mock:!!session.mock, orig:!!session.orig, idx:session.idx,
    items:session.items.map(it=>({id:it.q.id, order:it.order, selected:it.selected, submitted:it.submitted, correct:it.correct, guess:!!it.guess})) };
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
      selected:it.selected||(q.type==="k"?new Array(q.rows.length).fill(null):[]), submitted:!!it.submitted, correct:(it.correct===undefined?null:it.correct), guess:!!it.guess });
  }
  if(!items.length){ clearSession(); return false; }
  session={ mode:s.mode||"practice", mock:!!s.mock, orig:!!s.orig, items, idx:Math.min(s.idx||0, items.length-1) };
  if(session.mode==="exam"){ session.durationMs=s.durationMs||Math.max(3,Math.round(items.length*EXAM_BASE_MIN/EXAM_BASE_N))*60000; session.endsAt=Date.now()+(s.remainingMs!=null?s.remainingMs:session.durationMs); }
  return true;
}
function updateResumeBanner(){
  const s=store.session, card=$("#resumeCard");
  if(!card) return;
  if(s&&s.items&&s.items.length){
    const done=s.items.filter(x=>x.submitted).length;
    card.style.display="";
    $("#resumeInfo").textContent=(s.mock?T("Musterprüfung","Mock exam"):(s.orig?T("Prüfung (Original-Verteilung)","Exam (original mix)"):(s.mode==="exam"?T("Prüfung","Exam"):T("Übung","Practice"))))+T(" · bei Frage "," · at question ")+((s.idx||0)+1)+T(" von "," of ")+s.items.length+" ("+done+T(" beantwortet)"," answered)");
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
  return pool;
}
function dueQuestions(){ const now=Date.now(); return poolQuestions().filter(q=>{ const s=store.stats[q.id]; return s && s.seen>0 && (s.due||0)<=now; }); }
function updateSelSummary(){
  const el=$("#selSummary"); if(!el) return;
  const rl=["R1","R2","R3"].filter(r=>ui.rlevels.has(r)).join("+")||"–";
  const ch=ui.chapters.size>=6?T("alle Kapitel","all chapters"):T("Kap. ","Ch. ")+[...ui.chapters].sort().join(",");
  const n=Math.min(ui.num, poolQuestions().length);
  el.textContent=n+T(" Fragen · "," questions · ")+rl+" · "+ch+(ui.onlyBookmarks?" · ☆":"");
}
function updatePool(){
  const pool = poolQuestions();
  $("#poolTotal").textContent = pool.length;
  $("#startBtn").disabled = pool.length===0;
  const r = $("#numRange"); r.max = Math.max(5, pool.length);
  if(ui.num>pool.length){ ui.num = pool.length; r.value=Math.max(5,pool.length); $("#numLabel").textContent = pool.length; }
  $("#chapCount").textContent = "("+ui.chapters.size+T("/6 gewählt","/6 selected")+")";
  updateSelSummary();
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
  if(session.mode==="exam"){ session.durationMs=Math.max(3, Math.round(session.items.length*EXAM_BASE_MIN/EXAM_BASE_N))*60000; session.endsAt=Date.now()+session.durationMs; }
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

/* ---- Prüfung "wie im Original": Katalogfragen im Mix der offiziellen Beispielprüfung ----
   Kapitelverteilung und Anteil der Zuordnungsfragen (K) werden aus MOCKEXAM abgeleitet, nicht fest verdrahtet.
   Es werden nur prüfungsrelevante Fragen (R1/R2) gezogen; zuletzt gezeigte Fragen werden bevorzugt gemieden. */
function drawOriginalMix(){
  const quota={};
  MOCKEXAM.questions.forEach(m=>{ const key=m.chapter+(m.type==="k"?"k":"o"); quota[key]=(quota[key]||0)+1; });
  const want=MOCKEXAM.questions.length;
  const recent=new Set(store.recent||[]);
  const pool=QUESTIONS.filter(q=>q.r!=="R3");
  const picked=[], used=new Set();
  const take=(arr,n)=>{
    const c=shuffle(arr.filter(q=>!used.has(q.id)));
    c.sort((a,b)=>(recent.has(a.id)?1:0)-(recent.has(b.id)?1:0));
    c.slice(0,n).forEach(q=>{ used.add(q.id); picked.push(q); });
  };
  Object.keys(quota).forEach(key=>{
    const ch=+key.slice(0,-1), isK=key.slice(-1)==="k";
    take(pool.filter(q=>q.chapter===ch && (q.type==="k")===isK), quota[key]);
  });
  if(picked.length<want) take(pool, want-picked.length);   // Reserve, falls ein Kapitel zu wenige Fragen hat
  return shuffle(picked);
}
function startOriginalMix(){
  if(typeof MOCKEXAM==="undefined" || !MOCKEXAM.questions.length){ alert(T("Musterprüfung nicht verfügbar.","Mock exam not available.")); return; }
  const qs=drawOriginalMix();
  session={
    mode:"exam", orig:true,
    items: qs.map(q=>{
      let order = q.options ? q.options.map((_,i)=>i) : [];
      if(ui.shuffleOpts && q.options) order=shuffle(order);
      return {q, order, selected: q.type==="k" ? new Array(q.rows.length).fill(null) : [], submitted:false, correct:null};
    }),
    idx:0
  };
  session.durationMs=(MOCKEXAM.durationMin||75)*60000;
  session.endsAt=Date.now()+session.durationMs;
  recordRecent(session.items.map(it=>it.q.id));
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
  $("#qChapter").textContent = (session.mock||session.orig) ? "" : ((q.chapter?(T("Kap. ","Ch. ")+q.chapter+" · "+chapName(q.chapter)):"")+(q.lz?(" · "+q.lz):""));
  $("#qText").textContent = Lq(q);
  const qPts=$("#qPts");
  if(session.mode==="exam"){ qPts.style.display=""; qPts.textContent=questionPoints(q)+T(" P."," pts"); }
  else { qPts.style.display="none"; }
  if(q.type==="k"){ $("#qType").textContent = T("Ordnen Sie jede Zeile einer Kategorie zu.","Assign each row to a category."); }
  else { const n=q.correct.length; $("#qType").textContent = T("Wählen Sie "+n+" Antwort"+(n>1?"en":"")+".","Select "+n+" answer"+(n>1?"s":"")+"."); }

  const bm=$("#qBookmark"); const isBm=qStat(q.id).bm;
  bm.textContent = isBm?"★":"☆"; bm.classList.toggle("on", isBm);
  bm.onclick=()=>{ const s=qStat(q.id); s.bm=!s.bm; saveStore(); renderQuestion(); };

  const list=$("#optList");
  const focusIdx=$$("#optList .opt").indexOf(document.activeElement);   // Tastaturfokus über das Neu-Rendern retten
  list.innerHTML=""; list.setAttribute("role","group");
  if(q.type==="k"){ renderKRows(it, list); }
  else it.order.forEach((optIdx,pos)=>{
    const reveal = it.submitted && session.mode!=="exam";   // Prüfungsmodus deckt erst am Ende auf
    const el=document.createElement("div");
    el.className="opt";
    const isSel=it.selected.includes(optIdx);
    el.setAttribute("role","checkbox"); el.setAttribute("aria-checked",isSel?"true":"false");
    el.tabIndex = (it.submitted && session.mode!=="exam") ? -1 : 0;
    if(it.submitted && session.mode!=="exam") el.setAttribute("aria-disabled","true");
    if(isSel) el.classList.add("selected");
    if(reveal){
      el.classList.add("disabled");
      if(q.correct.includes(optIdx)) el.classList.add(isSel?"correct":"missed");
      else if(isSel) el.classList.add("wrong");
    }
    const mark=document.createElement("span"); mark.className="mark";
    mark.textContent = reveal ? (q.correct.includes(optIdx)?"✓":(isSel?"✕":"")) : (isSel?"✓":"");
    const body=document.createElement("div"); body.className="optbody";
    const txt=document.createElement("div");
    const let_=document.createElement("span"); let_.className="optletter"; let_.textContent=optLetter(pos);
    txt.appendChild(let_); txt.appendChild(document.createTextNode(Lopts(q)[optIdx]));
    body.appendChild(txt);
    el.appendChild(mark); el.appendChild(body);
    if(!reveal){
      el.onclick=()=>{
        const i=it.selected.indexOf(optIdx); if(i>=0) it.selected.splice(i,1); else it.selected.push(optIdx);
        renderQuestion();
      };
    }
    list.appendChild(el);
  });
  if(focusIdx>=0){ const f=$$("#optList .opt")[focusIdx]; if(f && f.tabIndex===0) f.focus(); }

  // Tastaturhinweis passend zum Fragetyp (K: zwei Kategorien pro Zeile; sonst Anzahl der Optionen)
  const kh=$("#kbdQuiz");
  if(kh){
    const tail=T(" · <kbd>Enter</kbd> Weiter · <kbd>←</kbd> Zurück"," · <kbd>Enter</kbd> Next · <kbd>←</kbd> Back")+(session.mode==="practice"?T(" · <kbd>G</kbd> Geraten"," · <kbd>G</kbd> Guessed"):"");
    kh.innerHTML = T("Tastatur: ","Keyboard: ") + (q.type==="k"
      ? Lcats(q).map((c,i)=>"<kbd>"+(i+1)+"</kbd> "+c).join(" · ")+T(" für markierte Zeile · <kbd>↑</kbd> <kbd>↓</kbd> Zeile wechseln"," for highlighted row · <kbd>↑</kbd> <kbd>↓</kbd> change row")
      : (q.options.length>1?"<kbd>1</kbd>–<kbd>"+q.options.length+"</kbd>":"<kbd>1</kbd>")+T(" Antwort wählen"," select answer")) + tail;
  }

  const ex=$("#explainBox"); ex.innerHTML="";
  if(it.submitted && session.mode==="practice"){
    if(it.guess && it.correct){ const n=document.createElement("p"); n.className="fbmeta"; n.textContent=T("🎲 Als geraten/auswendig markiert: zählt als richtig, die Frage steigt aber nicht in der Box und kommt früher wieder.","🎲 Marked as guessed/memorized: counts as correct, but the question does not move up a box and comes back sooner."); ex.appendChild(n); }
    const d=document.createElement("div");
    d.innerHTML=feedbackHtml(q, it.selected, it.order, it.correct)+
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
  if(prev){ prev.classList.toggle("hidden", session.idx===0); prev.innerHTML="← <span class='lbl'>"+T("Zurück","Back")+"</span>"; prev.setAttribute("aria-label",T("Zurück","Back")); }
  const gb=$("#guessBtn");
  if(gb){
    gb.classList.toggle("hidden", !(session.mode==="practice" && (!it.submitted || (it.correct && it.snap))));
    gb.classList.toggle("on", !!it.guess); gb.setAttribute("aria-pressed", it.guess?"true":"false");
    gb.innerHTML="🎲 <span class='lbl'>"+T("Geraten / auswendig","Guessed / memorized")+"</span>";
    gb.title=T("Geraten oder auswendig gewusst: Bei richtiger Antwort steigt die Frage nicht in der Box (Taste G).","Guessed or known by heart: if correct, the question does not move up a box (key G).");
    gb.setAttribute("aria-label",T("Geraten oder auswendig","Guessed or memorized"));
    gb.onclick=()=>{ it.guess=!it.guess; persistSession(); if(it.submitted){ regradeGuess(it); renderQuestion(); } else { gb.classList.toggle("on",!!it.guess); gb.setAttribute("aria-pressed",it.guess?"true":"false"); } };
  }
  renderQNav();
  persistSession();
}
/* ---- Fragenübersicht: Nummern mit Status, Klick springt zur Frage ---- */
function qnState(it){
  if(session.mode==="exam") return hasSelection(it) ? "done" : "";
  if(it.submitted) return it.correct ? "ok" : "bad";
  return hasSelection(it) ? "sel" : "";
}
function renderQNav(){
  const grid=$("#qNavGrid"); if(!grid||!session) return;
  const hadFocus = $("#qNav").contains(document.activeElement) && document.activeElement.classList.contains("qn");
  const exam=session.mode==="exam", total=session.items.length;
  let answered=0; grid.innerHTML="";
  session.items.forEach((it,i)=>{
    const st=qnState(it); if(st==="done"||st==="ok"||st==="bad") answered++;
    const bm=qStat(it.q.id).bm;
    const b=document.createElement("button"); b.type="button"; b.dataset.i=i; b.textContent=i+1;
    b.className="qn"+(st?" "+st:"")+(bm?" bm":"")+(i===session.idx?" cur":"");
    const stTxt = st==="ok"?T("richtig","correct") : st==="bad"?T("falsch","wrong") : st==="done"?T("beantwortet","answered") : st==="sel"?T("Auswahl noch nicht geprüft","selected, not checked") : T("offen","open");
    b.setAttribute("aria-label", T("Frage ","Question ")+(i+1)+", "+stTxt+(bm?", "+T("markiert","bookmarked"):""));
    if(i===session.idx) b.setAttribute("aria-current","step");
    grid.appendChild(b);
  });
  $("#qNavTitle").textContent=T("Fragenübersicht","Questions");
  $("#qNavSum").textContent=answered+"/"+total+" "+T("beantwortet","answered");
  $("#qNavLegend").textContent = exam ? T("Gefüllt = beantwortet · ★ markiert","Filled = answered · ★ bookmarked") : T("Grün = richtig · Rot = falsch · ★ markiert","Green = correct · Red = wrong · ★ bookmarked");
  if(hadFocus){ const c=grid.querySelector(".qn.cur"); if(c) c.focus(); }
}
function jumpTo(i){
  if(!session || i<0 || i>=session.items.length || i===session.idx) return;
  session.idx=i; renderQuestion(); window.scrollTo(0,0);
}
/* Auswerten – bei offenen Fragen vorher nachfragen (übersprungene Fragen zählen als nicht richtig) */
function tryFinish(){
  const open=[]; session.items.forEach((it,i)=>{ if(session.mode==="exam" ? !hasSelection(it) : !it.submitted) open.push(i); });
  if(open.length && !confirm(T("Noch offen: "+open.length+" von "+session.items.length+" Fragen. Sie zählen als nicht richtig. Trotzdem auswerten?","Still open: "+open.length+" of "+session.items.length+" questions. They count as not correct. Evaluate anyway?"))){
    session.idx=open[0]; renderQuestion(); window.scrollTo(0,0); return;
  }
  finishQuiz();
}

function escapeHtml(s){ return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }

/* ---- Feedback-Block nach dem Prüfen (Übungsmodus + „Antworten durchsehen“) ---- */
function optLetter(pos){ return "ABCDEFGH"[pos]||"?"; }
function stripVerdict(s){ const t=String(s||"").replace(/^\s*(Richtig|Falsch|Correct|Wrong)\s*[:–-]\s*/i,""); return t.charAt(0).toUpperCase()+t.slice(1); }
function joinLetters(ls){ return ls.length<2 ? ls.join("") : ls.slice(0,-1).join(", ")+T(" und "," and ")+ls[ls.length-1]; }
function feedbackHtml(q, selected, order, isRight, rowsShown){   // rowsShown: K-Zeilen stehen schon darüber (Durchsicht)
  const sec=(title,cls,body)=>"<div class='fbsec "+cls+"'><div class='fbtitle'>"+title+"</div>"+body+"</div>";
  const head="<div class='fbhead "+(isRight?"ok":"no")+"'>"+(isRight?T("Richtig ✓","Correct ✓"):T("Nicht ganz ✕","Not quite ✕"))+"</div>";
  const short=sec(T("Kurz gesagt","In short"),"sum","<p>"+escapeHtml(Lexpl(q))+"</p>");
  if(q.type==="k"){
    const rowsInfo=q.rows.map((r,ri)=>({r,ri,sel:selected[ri]}));
    const wrongRows=rowsInfo.filter(x=>x.sel!==x.r.cat), okRows=rowsInfo.filter(x=>x.sel===x.r.cat);
    const why=x=>{ const t=LrowExpl(q,x.ri); return t?"<br>"+escapeHtml(t):""; };
    let body="";
    if(wrongRows.length && !rowsShown){
      body=sec(T("Falsch zugeordnet","Assigned incorrectly"),"no",
        wrongRows.map(x=>"<p>„"+escapeHtml(Lrow(x.r))+"“<br><span class='fbmeta'>"+T("Deine Zuordnung: ","Your assignment: ")+(x.sel==null?"—":escapeHtml(Lcats(q)[x.sel]))+" · "+T("Korrekt wäre: ","Correct would be: ")+"<b>"+escapeHtml(Lcats(q)[x.r.cat])+"</b>"+"</span>"+why(x)+"</p>").join(""));
    }
    // Begründungen der übrigen Zeilen eingeklappt (bei Durchsicht stehen alle Zeilen schon oben, daher dann alle)
    const more = rowsShown ? rowsInfo : okRows;
    if(more.length && more.some(x=>LrowExpl(q,x.ri))){
      body+="<details class='fbmore'><summary>"+(rowsShown?T("Begründung je Zeile","Reasoning per row"):T("Warum die übrigen Zeilen stimmen","Why the other rows are right"))+" ("+more.length+")</summary>"+
        more.map(x=>"<p>„"+escapeHtml(Lrow(x.r))+"“<br><span class='fbmeta'>→ <b>"+escapeHtml(Lcats(q)[x.r.cat])+"</b></span>"+why(x)+"</p>").join("")+"</details>";
    }
    return "<div class='feedback'>"+head+body+short+"</div>";
  }
  const ord = (order&&order.length===q.options.length) ? order : q.options.map((_,i)=>i);
  const L=i=>optLetter(ord.indexOf(i));
  const oe=LoptExpl(q)||[]; const opts=Lopts(q);
  const byPos=a=>a.slice().sort((x,y)=>ord.indexOf(x)-ord.indexOf(y));
  const item=(i,extra)=>"<p><span class='fbletter'>"+L(i)+"</span>"+(extra?"<span class='fbtag'>"+extra+"</span>":"")+escapeHtml(stripVerdict(oe[i])||opts[i])+"</p>";
  const corr=byPos(q.correct), wrongSel=byPos(selected.filter(i=>!q.correct.includes(i)));
  const others=byPos(opts.map((_,i)=>i).filter(i=>!q.correct.includes(i)&&!selected.includes(i)));
  const many=corr.length>1;
  let h=head;
  h+=sec((many?T("Warum ","Why ")+joinLetters(corr.map(L))+T(" richtig sind"," are correct"):T("Warum ","Why ")+L(corr[0])+T(" richtig ist"," is correct")),"ok",
    corr.map(i=>item(i, selected.includes(i)?"":T("von dir übersehen","you missed this"))).join(""));
  if(wrongSel.length) h+=sec((wrongSel.length>1?T("Warum deine Auswahl ","Why your choices ")+joinLetters(wrongSel.map(L))+T(" falsch ist"," are wrong"):T("Warum deine Auswahl ","Why your choice ")+L(wrongSel[0])+T(" falsch ist"," is wrong")),"no",
    wrongSel.map(i=>item(i)).join(""));
  h+=short;
  if(others.length) h+="<details class='fbmore'><summary>"+T("Warum die übrigen Optionen falsch sind","Why the other options are wrong")+" ("+joinLetters(others.map(L))+")</summary>"+others.map(i=>item(i)).join("")+"</details>";
  return "<div class='feedback'>"+h+"</div>";
}

/* ---- K-Fragen: Matrix aus Zeilen mit je zwei Kategorien ---- */
function renderKRows(it, list){
  const q=it.q;
  const reveal = it.submitted && session.mode!=="exam";   // Prüfungsmodus deckt erst am Ende auf
  // Markierte Zeile für die Tastatur (nur Laufzeit, nicht gespeichert): zunächst die erste unbeantwortete
  if(it.ka==null || it.ka>=q.rows.length){ const f=q.rows.findIndex((_,i)=>it.selected[i]==null); it.ka=f>=0?f:0; }
  q.rows.forEach((row,ri)=>{
    const wrap=document.createElement("div"); wrap.className="krow"+(ri===it.ka&&!reveal?" kactive":"");
    const st=document.createElement("div"); st.className="kstmt"; st.textContent=Lrow(row);
    const cats=document.createElement("div"); cats.className="kcats";
    Lcats(q).forEach((label,ci)=>{
      const b=document.createElement("button"); b.className="kcat"; b.textContent=label;
      const sel=it.selected[ri];
      if(!reveal){
        if(sel===ci) b.classList.add("sel");
        b.onclick=()=>{ it.selected[ri]=(it.selected[ri]===ci?null:ci); it.ka=ri; renderQuestion(); };
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
    else tryFinish();
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
    else tryFinish();
  }
}
/* ---- Spaced Repetition (Leitner) ---- */
