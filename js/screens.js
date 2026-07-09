"use strict";
const SRS_DAY=86400000;
const SRS_INT=[0, SRS_DAY, 3*SRS_DAY, 7*SRS_DAY, 16*SRS_DAY, 35*SRS_DAY];
function gradeStat(id, ok){
  const s=qStat(id); s.seen++;
  if(ok){ s.correct++; s.streak++; s.box=Math.min(5,(s.box||0)+1); }
  else { s.wrong++; s.streak=0; s.box=0; }
  s.due = Date.now() + SRS_INT[s.box||0];
  saveStore();
}
function recordStat(it){ gradeStat(it.q.id, it.correct); }

/* ============================================================
   Results
   ============================================================ */
function finishQuiz(){
  stopExamTimer();
  clearSession();
  const exam = session.mode==="exam";
  if(exam){ session.items.forEach(it=>{ if(it.submitted) recordStat(it); }); }
  const total=session.items.length;
  const box=$("#resByChapter"); box.innerHTML="";

  if(exam){
    let earned=0, maxpts=0; const byCh={};
    session.items.forEach(it=>{
      const p=questionPoints(it.q), sc=scoreQuestion(it.q, it.submitted?it.selected:[]);
      earned+=sc; maxpts+=p;
      const c=it.q.chapter; (byCh[c]=byCh[c]||{e:0,m:0}); byCh[c].e+=sc; byCh[c].m+=p;
    });
    const pct = maxpts? Math.round(earned/maxpts*100):0;
    $("#resScore").textContent = pct+"%";
    const pass = pct>=60;
    const pe=$("#resPass"); pe.textContent = pass?"Bestanden (≥ 60 %)":"Nicht bestanden (< 60 %)"; pe.className="pass "+(pass?"ok":"no");
    const usedMs = session.durationMs ? Math.min(session.durationMs, session.durationMs-Math.max(0, session.endsAt-Date.now())) : 0;
    $("#resDetail").textContent = round1(earned)+" von "+maxpts+" Punkten · Zeit: "+fmtTime(usedMs)+" min · 60 % nötig (offizielle iSAQB-Bewertung).";
    store.examHistory=(store.examHistory||[]); store.examHistory.push({d:Date.now(),earned:round1(earned),max:maxpts,pct,passed:pass,n:total,usedMs}); if(store.examHistory.length>50) store.examHistory=store.examHistory.slice(-50); saveStore();
    Object.keys(byCh).sort().forEach(c=>{ const o=byCh[c]; const p=o.m?Math.round(o.e/o.m*100):0; box.appendChild(barRow("K"+c, p, round1(o.e)+"/"+o.m+" P.")); });
  } else {
    const correct=session.items.filter(x=>x.correct===true).length;
    const pct=Math.round(correct/total*100);
    $("#resScore").textContent = pct+"%";
    const pass=pct>=60;
    const pe=$("#resPass"); pe.textContent=pass?"Bestanden-Niveau (≥ 60 %)":"Noch unter 60 %"; pe.className="pass "+(pass?"ok":"no");
    $("#resDetail").textContent = correct+" von "+total+" Fragen komplett richtig. (Übungsmodus – ohne Punktewertung; für die echte Simulation den Prüfungsmodus nutzen.)";
    const byCh={};
    session.items.forEach(it=>{ const c=it.q.chapter; (byCh[c]=byCh[c]||{t:0,c:0}); byCh[c].t++; if(it.correct) byCh[c].c++; });
    Object.keys(byCh).sort().forEach(c=>{ const o=byCh[c]; const p=Math.round(o.c/o.t*100); box.appendChild(barRow("K"+c, p, o.c+"/"+o.t)); });
  }
  show("result");
}
function barRow(name,pct,right){
  const row=document.createElement("div"); row.className="bar-row";
  row.innerHTML="<span class='name'>"+name+"</span><span class='bar'><i style='width:"+pct+"%'></i></span><span class='pct'>"+(right||pct+"%")+"</span>";
  return row;
}

/* ============================================================
   Stats screen
   ============================================================ */
function renderReview(){
  if(!session||!session.items){ show("result"); return; }
  const box=$("#reviewList"); box.innerHTML="";
  const wrong=session.items.filter(x=>x.correct!==true);
  $("#reviewTitle").textContent="Antworten durchsehen — "+wrong.length+" von "+session.items.length+" offen";
  if(wrong.length===0){ box.innerHTML="<div class='card'><p class='hint'>Alle Fragen vollständig richtig – super! 🎉</p></div>"; show("review"); return; }
  wrong.forEach(it=>{
    const q=it.q; const card=document.createElement("div"); card.className="card";
    let h="<div class='qmeta' style='margin-bottom:6px'><span><span class='badge "+q.r.toLowerCase()+"'>"+q.r+"</span> <span class='lz' style='margin:0'>Kap. "+q.chapter+" · "+lzLink(q.lz)+"</span></span></div>";
    h+="<div class='qtext' style='font-size:1rem'>"+escapeHtml(q.q)+"</div>";
    if(q.type==="k"){
      q.rows.forEach((row,ri)=>{ const sel=it.selected[ri]; const ok=sel===row.cat;
        h+="<div class='revrow'>"+escapeHtml(row.text)+"<br><span class='"+(ok?"revok":"revno")+"'>"+(ok?"✓":"✗")+" Deine Zuordnung: "+(sel==null?"—":escapeHtml(q.categories[sel]))+"</span>"+(ok?"":" · <span class='revok'>Richtig: "+escapeHtml(q.categories[row.cat])+"</span>")+"</div>";
      });
    } else {
      h+="<div class='qtype'>Wählen Sie "+q.correct.length+" Antwort"+(q.correct.length>1?"en":"")+".</div>";
      q.options.forEach((opt,oi)=>{ const isC=q.correct.includes(oi); const isS=it.selected.includes(oi);
        const cls=isC?"revok":(isS?"revno":""); const pre=isC?"✓ ":(isS?"✗ ":"○ ");
        const suf=isS&&!isC?" — deine Wahl (falsch)":(isC&&!isS?" — richtig (fehlte)":"");
        const why=(q.optExpl&&q.optExpl[oi])?"<div class='revwhy'>"+escapeHtml(q.optExpl[oi])+"</div>":"";
        h+="<div class='revopt "+cls+"'>"+pre+escapeHtml(opt)+suf+why+"</div>";
      });
    }
    h+="<div class='explain' style='margin-top:10px'><b>Erklärung</b>"+escapeHtml(q.explanation)+"</div>";
    card.innerHTML=h; box.appendChild(card);
  });
  show("review");
}
function barColor(p){ return p>=80?"var(--correct)":(p>=50?"var(--r2)":"var(--wrong)"); }
function statBar(name,pct,right){
  const row=document.createElement("div"); row.className="bar-row";
  row.innerHTML="<span class='name'>"+name+"</span><span class='bar'><i style='width:"+pct+"%;background:"+barColor(pct)+"'></i></span><span class='pct'>"+(right||pct+"%")+"</span>";
  return row;
}
function renderStats(){
  const total=QUESTIONS.length;
  let seen=0,correct=0,wrong=0,mastered=0,bm=0;
  QUESTIONS.forEach(q=>{ const s=store.stats[q.id]; if(!s)return; if(s.seen>0)seen++; correct+=s.correct; wrong+=s.wrong; if(s.streak>=3)mastered++; if(s.bm)bm++; });
  $("#stSeen").textContent=seen;
  $("#stAcc").textContent = (correct+wrong)>0 ? Math.round(correct/(correct+wrong)*100)+"%" : "–";
  $("#stMastered").textContent=mastered;
  $("#stBookmarks").textContent=bm;

  // Prüfungsreife (Trefferquote auf R1/R2)
  let ec=0,ew=0; QUESTIONS.forEach(q=>{ if(q.r==="R3")return; const s=store.stats[q.id]; if(!s)return; ec+=s.correct; ew+=s.wrong; });
  const ans=ec+ew, rd=$("#readiness");
  if(ans<25){ rd.innerHTML="<p class='hint'>Noch zu wenig Daten – beantworte mehr R1/R2-Fragen für eine Einschätzung.</p>"; }
  else { const p=Math.round(ec/ans*100); const v=p>=60?"<span class='pill ok'>wahrscheinlich bestanden</span>":(p>=50?"<span class='pill mid'>grenzwertig</span>":"<span class='pill no'>noch nicht bereit</span>");
    rd.innerHTML="<div style='font-size:2.2rem;font-weight:800'>"+p+"%</div><div class='lbl'>Trefferquote auf R1/R2 ("+ans+" beantwortet) &nbsp;"+v+"</div><p class='hint'>Grobe, eher konservative Schätzung (zählt nur komplett richtige Antworten; die echte Prüfung vergibt auch Teilpunkte). 60 % zum Bestehen.</p>"; }

  // Abdeckung
  const cov=$("#statCoverage"); cov.innerHTML="";
  cov.appendChild(statBar("Ges.", Math.round(seen/total*100), seen+"/"+total));
  cov.appendChild(statBar("Sich.", Math.round(mastered/total*100), mastered+"/"+total));

  // nach R-Level
  const byR={}; QUESTIONS.forEach(q=>{ const s=store.stats[q.id]; if(!s)return; (byR[q.r]=byR[q.r]||{c:0,w:0}); byR[q.r].c+=s.correct; byR[q.r].w+=s.wrong; });
  const rbox=$("#statByR"); rbox.innerHTML="";
  ["R1","R2","R3"].forEach(r=>{ const o=byR[r]; if(!o)return; const t=o.c+o.w; if(!t)return; const p=Math.round(o.c/t*100); rbox.appendChild(statBar(r,p,p+"%")); });
  if(!rbox.children.length) rbox.innerHTML="<p class='hint'>Noch keine Daten.</p>";

  // nach Fragetyp
  const tlbl={single:"A",multi:"P",k:"K"};
  const byT={}; QUESTIONS.forEach(q=>{ const s=store.stats[q.id]; if(!s)return; (byT[q.type]=byT[q.type]||{c:0,w:0}); byT[q.type].c+=s.correct; byT[q.type].w+=s.wrong; });
  const tbox=$("#statByType"); tbox.innerHTML="";
  ["single","multi","k"].forEach(ty=>{ const o=byT[ty]; if(!o)return; const t=o.c+o.w; if(!t)return; const p=Math.round(o.c/t*100); tbox.appendChild(statBar(tlbl[ty],p,p+"%")); });
  if(!tbox.children.length) tbox.innerHTML="<p class='hint'>Noch keine Daten.</p>";

  // pro Kapitel
  const byCh={};
  QUESTIONS.forEach(q=>{ const s=store.stats[q.id]; if(s&&s.seen>0){ (byCh[q.chapter]=byCh[q.chapter]||{c:0,w:0}); byCh[q.chapter].c+=s.correct; byCh[q.chapter].w+=s.wrong; } });
  const cbox=$("#statByChapter"); cbox.innerHTML="";
  if(!Object.keys(byCh).length){ cbox.innerHTML="<p class='hint'>Noch keine Daten – starte eine Runde.</p>"; }
  Object.keys(byCh).sort().forEach(c=>{ const o=byCh[c]; const t=o.c+o.w; const p=t?Math.round(o.c/t*100):0; cbox.appendChild(statBar("K"+c,p,p+"%")); });

  // schwächste Kapitel
  const weak=Object.keys(byCh).map(c=>{ const o=byCh[c]; const t=o.c+o.w; return {c:+c,t,p:t?o.c/t:1}; }).filter(x=>x.t>=3).sort((a,b)=>a.p-b.p).slice(0,3);
  const wbox=$("#statWeak"); wbox.innerHTML="";
  if(!weak.length){ wbox.innerHTML="<p class='hint'>Noch zu wenig Daten (mind. 3 Antworten pro Kapitel).</p>"; }
  else weak.forEach(x=>{ const row=document.createElement("div"); row.className="weakrow";
    const sp=document.createElement("span"); sp.innerHTML="K"+x.c+" · "+escapeHtml(CHAPTERS[x.c])+" · <b>"+Math.round(x.p*100)+"%</b>";
    const b=document.createElement("button"); b.textContent="üben"; b.onclick=()=>drillChapter(x.c);
    row.appendChild(sp); row.appendChild(b); wbox.appendChild(row); });

  // Prüfungshistorie
  const hist=(store.examHistory||[]).slice().reverse().slice(0,8);
  const hbox=$("#statExamHist"); hbox.innerHTML="";
  if(!hist.length){ hbox.innerHTML="<p class='hint'>Noch keine Prüfungssimulation absolviert.</p>"; }
  else hist.forEach(h=>{ const row=document.createElement("div"); row.className="histrow";
    const d=new Date(h.d), ds=d.toLocaleDateString("de-DE")+" "+d.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"});
    row.innerHTML="<span>"+ds+" · "+h.pct+"% ("+round1(h.earned)+"/"+h.max+" P.)</span><span class='pill "+(h.passed?"ok":"no")+"'>"+(h.passed?"bestanden":"nicht best.")+"</span>";
    hbox.appendChild(row); });

  show("stats");
}
function drillChapter(ch){
  ui.mode="practice";
  $$("#modeSeg button").forEach(x=>x.classList.toggle("active", x.dataset.mode==="practice"));
  $("#modeHint").textContent="Üben: sofortiges Feedback mit Erklärung nach jeder Frage.";
  ui.chapters=new Set([ch]); ui.onlyWrong=false; ui.onlyBookmarks=false;
  buildChapterChips();
  const pool=poolQuestions().length; ui.num=Math.min(Math.max(ui.num,10), Math.max(5,pool));
  buildSession();
}
/* ---- Export / Import ---- */
function openData(){ try{ $("#exportArea").value=JSON.stringify(store); }catch(e){ $("#exportArea").value=""; } $("#importArea").value=""; show("data"); }
function copyExport(){ const t=$("#exportArea"); t.focus(); t.select(); let ok=false; try{ if(navigator.clipboard&&navigator.clipboard.writeText){ navigator.clipboard.writeText(t.value); ok=true; } }catch(e){} if(!ok){ try{ document.execCommand("copy"); ok=true; }catch(e){} } alert(ok?"In die Zwischenablage kopiert.":"Bitte den markierten Text manuell kopieren."); }
function downloadExport(){ try{ const blob=new Blob([$("#exportArea").value],{type:"application/json"}); const url=URL.createObjectURL(blob); const a=document.createElement("a"); a.href=url; a.download="isaqb-fortschritt.json"; document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(url),1000); }catch(e){ alert("Download nicht möglich – bitte den Text kopieren."); } }
function doImport(){
  const raw=($("#importArea").value||"").trim();
  if(!raw){ alert("Bitte zuerst einen gesicherten Text einfügen."); return; }
  let obj; try{ obj=JSON.parse(raw); }catch(e){ alert("Ungültiges Format (kein gültiges JSON)."); return; }
  if(!obj||typeof obj!=="object"||!obj.stats){ alert("Das sieht nicht nach einem Fortschritts-Backup aus (kein 'stats')."); return; }
  if(!confirm("Aktuellen Fortschritt durch den importierten ersetzen?")) return;
  store={ stats:obj.stats||{}, settings:obj.settings||{}, examHistory:obj.examHistory||[], recent:obj.recent||[] };
  if(obj.session) store.session=obj.session;
  saveStore(); alert("Fortschritt importiert."); location.reload();
}

/* ============================================================
   Karteikarten · Durchblättern · Lösungsanzeige
   ============================================================ */
function mkBtn(txt,cls,fn){ const b=document.createElement("button"); b.className=cls; b.textContent=txt; b.style.marginTop="0"; b.onclick=fn; return b; }
function solutionHtml(q){
  let h="";
  if(q.type==="k"){
    q.rows.forEach(row=>{ h+="<div class='revrow'>"+escapeHtml(row.text)+"<br><span class='revok'>→ "+escapeHtml(q.categories[row.cat])+"</span></div>"; });
  } else {
    h+="<div class='qtype'>Wählen Sie "+q.correct.length+" Antwort"+(q.correct.length>1?"en":"")+".</div>";
    q.options.forEach((opt,oi)=>{ const isC=q.correct.includes(oi); const why=(q.optExpl&&q.optExpl[oi])?"<div class='revwhy'>"+escapeHtml(q.optExpl[oi])+"</div>":""; h+="<div class='revopt "+(isC?"revok":"")+"'>"+(isC?"✓ ":"○ ")+escapeHtml(opt)+why+"</div>"; });
  }
  h+="<div class='explain' style='margin-top:10px'><b>Erklärung</b>"+escapeHtml(q.explanation)+"</div>";
  return h;
}
let flash=null;
function startFlash(){
  const pool=poolQuestions().filter(q=>q.type!=="k"); // Zuordnungsfragen (K) eignen sich nicht als Karteikarten
  if(!pool.length){ alert("Keine Karteikarten im aktuellen Filter (Zuordnungsfragen sind hier ausgenommen)."); return; }
  flash={ items:shuffle(pool).slice(0, ui.num), idx:0, revealed:false, known:0 };
  renderFlash(); show("flash");
}
function renderFlash(){
  const q=flash.items[flash.idx], total=flash.items.length;
  $("#flashCounter").textContent="Karte "+(flash.idx+1)+"/"+total;
  $("#flashScore").textContent = flash.idx>0 ? ("gewusst "+flash.known+"/"+flash.idx) : "";
  $("#flashProg").style.width=(flash.idx/total*100)+"%";
  const b=$("#flashBadge"); b.textContent=q.r; b.className="badge "+q.r.toLowerCase();
  $("#flashChapter").textContent="Kap. "+q.chapter+" · "+CHAPTERS[q.chapter]+" · "+q.lz;
  $("#flashQ").textContent=q.q;
  const body=$("#flashBody"), act=$("#flashActions"); act.innerHTML="";
  if(!flash.revealed){
    body.innerHTML = q.type==="k" ? "<p class='hint'>Ordne im Kopf jede Zeile zu – dann aufdecken.</p>" : "<p class='hint'>Überlege die Antwort ("+q.correct.length+" richtig) – dann aufdecken.</p>";
    const quit=mkBtn("Beenden","btn secondary",()=>{ show("home"); updatePool(); }); quit.style.flex="0 0 90px";
    act.appendChild(quit); act.appendChild(mkBtn("Antwort zeigen","btn",()=>{ flash.revealed=true; renderFlash(); }));
  } else {
    body.innerHTML=solutionHtml(q);
    act.appendChild(mkBtn("✗ Nicht gewusst","btn secondary",()=>rateFlash(false)));
    act.appendChild(mkBtn("✓ Gewusst","btn",()=>rateFlash(true)));
  }
}
function rateFlash(ok){
  const q=flash.items[flash.idx]; gradeStat(q.id, ok); if(ok) flash.known++;
  flash.idx++; flash.revealed=false;
  if(flash.idx>=flash.items.length){ alert("Karteikarten fertig: "+flash.known+"/"+flash.items.length+" gewusst."); updatePool(); show("home"); return; }
  renderFlash();
}
function renderBrowse(){
  const box=$("#browseList"); box.innerHTML="";
  const pool=QUESTIONS.filter(q=>ui.chapters.has(q.chapter) && ui.rlevels.has(q.r));
  $("#browseTitle").textContent="Fragen durchblättern ("+pool.length+")";
  if(!pool.length){ box.innerHTML="<div class='card'><p class='hint'>Keine Fragen im aktuellen Filter – Kapitel/Prüfungsrelevanz auf der Startseite anpassen.</p></div>"; show("browse"); return; }
  let cur=0;
  pool.forEach(q=>{
    if(q.chapter!==cur){ cur=q.chapter; const hd=document.createElement("div"); hd.className="browsehd"; hd.textContent="Kapitel "+cur+" · "+CHAPTERS[cur]; box.appendChild(hd); }
    const card=document.createElement("div"); card.className="card browsecard";
    const head=document.createElement("div"); head.className="browsehead";
    head.innerHTML="<span class='badge "+q.r.toLowerCase()+"'>"+q.r+"</span> <span class='lz' style='margin:0'>"+q.lz+"</span><div class='qtext' style='font-size:.98rem;margin-top:4px'>"+escapeHtml(q.q)+"</div>";
    const sol=document.createElement("div"); sol.style.display="none"; sol.style.marginTop="10px"; let built=false;
    head.onclick=()=>{ if(!built){ sol.innerHTML=solutionHtml(q); built=true; } sol.style.display=(sol.style.display==="none"?"":"none"); };
    card.appendChild(head); card.appendChild(sol); box.appendChild(card);
  });
  show("browse");
}

/* ============================================================
   Theme
   ============================================================ */

/* --- Lernstoff / Referenz --- */
function refBadgeClass(r){ if(/R1/.test(r)) return "r1"; if(/R2/.test(r)) return "r2"; return "r3"; }
function refItemHtml(e){
  return "<div class='refitem' id='ref-"+e.lz+"'>"+
    "<div class='refitem-head'><span class='refbadge "+refBadgeClass(e.r)+"'>"+escapeHtml(e.r||"–")+"</span>"+
    "<span class='rt'>"+escapeHtml(e.title)+"</span><span class='lznum'>LZ "+e.lz+"</span></div>"+
    "<div class='refbody hidden'>"+e.body+"</div></div>";
}
function renderReference(filter){
  const box=$("#refList"); if(!box||typeof REFERENCE==="undefined") return;
  $("#refIntro").innerHTML=REFERENCE.intro||"";
  const f=(filter||"").trim().toLowerCase().replace(/\s+/g," ");
  box.innerHTML="";
  REFERENCE.chapters.forEach(c=>{
    let items=c.lzs;
    const chapMatch = f && ("kapitel "+c.num+" "+c.title).toLowerCase().includes(f);
    if(f && !chapMatch) items=c.lzs.filter(e=>(("lz "+e.lz+" "+e.title+" "+e.body).toLowerCase().includes(f)));
    if(f && !items.length && !(chapMatch) && !(c.lzs.length===0 && chapMatch)) return;
    if(f && !items.length && c.lzs.length>0) return;
    const hd=document.createElement("div"); hd.className="refchap"; hd.id="refchap-"+c.num;
    hd.textContent="Kapitel "+c.num+" · "+c.title; box.appendChild(hd);
    if(c.lzs.length===0){ const d=document.createElement("div"); d.className="refitem"; d.innerHTML="<div class='refbody'>"+c.intro+"</div>"; box.appendChild(d); }
    items.forEach(e=>{ const w=document.createElement("div"); w.innerHTML=refItemHtml(e); box.appendChild(w.firstChild); });
  });
  box.querySelectorAll(".refitem-head").forEach(h=>h.onclick=()=>{ const b=h.nextElementSibling; if(b) b.classList.toggle("hidden"); h.parentElement.classList.toggle("open"); });
  if(f) box.querySelectorAll(".refbody").forEach(b=>b.classList.remove("hidden"));
  if(!f && REFERENCE.sources){ const s=document.createElement("div"); s.className="refbody"; s.style.marginTop="18px"; s.innerHTML="<div class='refchap' style='margin-top:0'>Quellen</div>"+REFERENCE.sources; box.appendChild(s); }
}
let refReturn=null;
function updateRefBackBtn(){ const b=$("#refBackBtn"); if(!b) return; if(!refReturn){ b.classList.add("hidden"); return; } b.classList.remove("hidden"); b.textContent = refReturn.kind==="cm" ? "← Zurück zur Concept Map" : "← Zurück zur Frage"; }
function openReference(lz,origin){
  refReturn = origin==="cm" ? {kind:"cm",id:lz} : (origin==="quiz" ? {kind:"quiz"} : null); updateRefBackBtn();
  const rs=$("#refSearch"); if(rs) rs.value="";
  renderReference(""); show("reference");
  const el=document.getElementById("ref-"+lz);
  if(el){ const b=el.querySelector(".refbody"); if(b) b.classList.remove("hidden"); el.classList.add("open"); el.classList.add("flash");
    el.scrollIntoView({behavior:"smooth",block:"start"}); setTimeout(()=>el.classList.remove("flash"),1300); }
  else { const ch=parseInt(String(lz).slice(0,2),10); const c=document.getElementById("refchap-"+ch); if(c) c.scrollIntoView({behavior:"smooth",block:"start"}); }
}

/* --- Concept Map --- */
function cmTier(tag){ return tag.includes("R1")?"r1":(tag.includes("R2")?"r2":"r3"); }
function cmPureR3(tag){ return tag.trim()==="R3"; }
function cmPairKey(a,b){ return [a,b].sort().join("_"); }
function renderConceptMap(){
  const grid=$("#cmGrid"); if(!grid||typeof CMAP==="undefined") return;
  grid.innerHTML="";
  CMAP.chapters.forEach(ch=>{
    const card=document.createElement("div");
    card.className="cm-card"+(ch.num===6?" cm-ch6":"");
    card.innerHTML="<h3>"+ch.num+". "+escapeHtml(ch.title)+"</h3><div class='cm-sub'>"+escapeHtml(ch.sub)+" · "+ch.lzs.length+" Lernziele</div><div class='cm-chips'></div>";
    const chipsEl=card.querySelector(".cm-chips");
    ch.lzs.forEach(id=>{ const d=CMAP.lz[id]; if(!d) return; const t=cmTier(d.tag);
      const btn=document.createElement("button"); btn.className="cm-chip tier-"+t; btn.dataset.id=id;
      btn.dataset.pure3=cmPureR3(d.tag)?"true":"false"; btn.title=id+" – "+d.name+" ("+d.tag+")";
      btn.textContent=id; btn.onclick=()=>cmSelect(id); chipsEl.appendChild(btn); });
    grid.appendChild(card);
  });
  const tog=$("#cmR3toggle"); if(tog&&tog.checked) cmToggleR3(true);
  cmReset();
}
function cmSelect(id){
  const d=CMAP.lz[id]; if(!d) return;
  const related=new Set(d.related||[]);
  Object.entries(CMAP.lz).forEach(([oid,od])=>{ if((od.related||[]).includes(id)) related.add(oid); });
  document.querySelectorAll("#cmGrid .cm-chip").forEach(c=>{ c.classList.remove("selected","related","dimmed");
    const cid=c.dataset.id; if(cid===id)c.classList.add("selected"); else if(related.has(cid))c.classList.add("related"); else c.classList.add("dimmed"); });
  const relHtml = related.size
    ? "<div class='cm-drel-label'>Verwandt mit</div><div class='cm-drel-list'>"+[...related].map(r=>"<div class='cm-drel-row'><button onclick=\"cmSelect('"+r+"')\">"+r+"</button><span>"+escapeHtml(CMAP.reasons[cmPairKey(id,r)]||"")+"</span></div>").join("")+"</div>"
    : "<div class='cm-drel-label'>Keine direkten Verknüpfungen hinterlegt.</div>";
  $("#cmDetail").innerHTML =
    "<div class='cm-dtitle'><span class='cm-dcode'>"+id+"</span><span class='cm-dname'>"+escapeHtml(d.name)+"</span>"+
    "<span class='cm-dtag refbadge "+cmTier(d.tag)+"'>"+escapeHtml(d.tag)+"</span>"+
    "<button class='cm-reset' onclick='cmReset()'>✕ Zurücksetzen</button></div>"+
    "<div class='cm-ddesc'>"+escapeHtml(d.desc)+"</div>"+
    "<button class='btn secondary' style='margin:2px 0 10px' onclick=\"openReference('"+id+"','cm')\">📖 Im Lernstoff öffnen</button>"+
    relHtml;
}
function cmReset(){
  document.querySelectorAll("#cmGrid .cm-chip").forEach(c=>c.classList.remove("selected","related","dimmed"));
  const dt=$("#cmDetail"); if(dt) dt.innerHTML="<div class='cm-placeholder'>Wähle ein Lernziel aus der Übersicht, um Details und Verknüpfungen zu sehen.</div>";
}
function cmToggleR3(only){ document.querySelectorAll('#cmGrid .cm-chip[data-pure3="true"]').forEach(c=>{ c.style.display=only?"none":""; }); }
