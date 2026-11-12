"use strict";
function applyTheme(){
  const t=store.settings.theme;
  if(t) document.documentElement.setAttribute("data-theme",t);
  else document.documentElement.removeAttribute("data-theme");
}
function cycleTheme(){
  const cur=store.settings.theme;
  store.settings.theme = cur==="dark" ? "light" : (cur==="light" ? undefined : "dark");
  if(store.settings.theme===undefined) delete store.settings.theme;
  saveStore(); applyTheme();
}

/* ============================================================
   Wiring
   ============================================================ */
function initHome(){
  buildChapterChips();
  // R chips
  $$("#rChips .chip").forEach(c=>c.onclick=()=>{
    const r=c.dataset.r;
    if(ui.rlevels.has(r)) ui.rlevels.delete(r); else ui.rlevels.add(r);
    c.classList.toggle("active"); updatePool();
  });
  // option chips
  $("#onlyBookmarks").onclick=e=>{ ui.onlyBookmarks=!ui.onlyBookmarks; e.target.classList.toggle("active"); updatePool(); };
  $("#spacedRep").onclick=e=>{ ui.spacedRep=!ui.spacedRep; e.target.classList.toggle("active"); };
  $("#shuffleOpts").onclick=e=>{ ui.shuffleOpts=!ui.shuffleOpts; e.target.classList.toggle("active"); };
  $("#numRange").oninput=e=>{ ui.num=+e.target.value; $("#numLabel").textContent=e.target.value; updateSelSummary(); };
  $("#startBtn").onclick=()=>{
    if(poolQuestions().length===0) return;
    if(store.session && !confirm(T("Es gibt eine unterbrochene Runde. Neue Runde starten und die alte verwerfen?","There is an interrupted round. Start a new round and discard the old one?"))) return;
    buildSession();
  };
  $("#resetBtn").onclick=()=>{ if(confirm(T("Gesamten Lernfortschritt und Lesezeichen löschen?","Delete all learning progress and bookmarks?"))){ store={stats:{},settings:store.settings}; saveStore(); alert(T("Fortschritt zurückgesetzt.","Progress reset.")); updatePool(); updateResumeBanner(); } };
  updatePool();
  updateResumeBanner();
}

/* Browser-Verlauf (History API): Zurück/Vor im Browser, Android-Zurücktaste, Wischgeste.
   Jeder Bereichswechsel erzeugt einen Verlaufseintrag (#stats, #quiz, …). Zustand liegt nur im Speicher
   (laufende Runde, Ergebnis …) – diese Bereiche werden beim Zurück/Vor nicht wiederhergestellt: eine laufende
   Runde wird pausiert (wie „Pause“) und man landet auf der Startseite. */
let navPop=false;
const NAV_OPEN={stats:"statsBtn",data:"dataBtn",browse:"browseBtn",conceptmap:"cmBtn",glossary:"glossaryBtn",mockexam:"mockBtn",reference:"refBtn"};
const NAV_IDS=["home","quiz","result","stats","review","data","flash","browse","reference","conceptmap","glossary","mockexam"];
function navState(){ return history.state && history.state.screen ? history.state : {screen:"home",depth:0}; }
function navSync(id){
  if(navPop) return;
  const st=navState();
  if(st.screen===id) return;
  if(id==="home"){ if(st.depth>0) history.go(-st.depth); return; }   // zurück zur Startseite = Verlauf bis zur Basis abbauen
  history.pushState({screen:id,depth:st.depth+1},"","#"+id);
}
window.addEventListener("popstate", e=>{
  const fresh=!(e.state&&e.state.screen);   // z. B. Enter in der Adresszeile bei gleicher #-URL (kein Reload, aber Anker-Navigation)
  const st=(e.state&&e.state.screen)?e.state:{screen:"home",depth:0};
  let cur=NAV_IDS.find(id=>!$("#"+id).classList.contains("hidden"));
  if($("#modal")) return;
  navPop=true;
  try{
    if(cur==="reference" && refReturn && st.screen!=="reference"){ $("#refBackBtn").click(); return; }   // Lernstoff wurde aus Quiz/Concept Map/Glossar geöffnet: dorthin zurück
    if(cur==="quiz"){ $("#quitBtn").click(); cur="home"; }                  // pausiert & zeigt Startseite
    if(cur===st.screen) return;
    if(st.screen==="home"&&cur==="home") return;
    if(NAV_OPEN[st.screen]) $("#"+NAV_OPEN[st.screen]).click();
    else if(cur!=="home"){ updatePool(); show("home"); }
    if(st.screen!=="home" && !NAV_OPEN[st.screen] && !fresh){   // nicht wiederherstellbarer Eintrag (Quiz/Ergebnis/…): bis zur Startseite durchreichen
      if(st.depth>0) history.go(-st.depth); else history.replaceState({screen:"home",depth:0},"",location.pathname+location.search);
    }
  } finally {
    if(fresh) history.replaceState({screen:"home",depth:0},"",location.pathname+location.search);   // Adresse bereinigen
    navPop=false;
  }
});
history.replaceState({screen:"home",depth:0},"",location.pathname+location.search);
try{ history.scrollRestoration="manual"; }catch(e){}   // Scrollposition steuert die App selbst (z. B. Quiz nach Lernstoff)

/* Desktop-Startseite: Prüfungs-Kacheln wandern in die linke Spalte (alles zum Üben der Prüfung), rechts bleibt Lernen & Nachschlagen.
   Auf dem Smartphone bleibt die DOM-Reihenfolge unverändert. */
{ const mq=window.matchMedia("(min-width:900px)");
  const main=document.querySelector(".home-main"), learn=document.querySelector(".home-learn");
  const tiles=["origMixBtn","mockBtn"].map(id=>document.getElementById(id));
  const place=()=>{ if(!main||!learn||tiles.some(t=>!t)) return; tiles.forEach(t=>(mq.matches?main:learn).appendChild(t)); };
  place(); if(mq.addEventListener) mq.addEventListener("change",place); else if(mq.addListener) mq.addListener(place); }

/* Tastaturkürzel Quiz & Karteikarten (Desktop) */
document.addEventListener("keydown", e=>{
  if(e.ctrlKey||e.metaKey||e.altKey||e.defaultPrevented) return;
  if(e.target && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
  if($("#modal")) return;
  const vis=id=>!$("#"+id).classList.contains("hidden");
  const enter=e.key==="Enter"||e.key===" ";
  const onBtn=e.target && e.target.tagName==="BUTTON";   // fokussierter Button löst Enter/Space selbst aus
  if(vis("quiz")){
    const pb=$("#primaryBtn");
    if(e.key===" " && e.target && e.target.classList && e.target.classList.contains("opt")){ e.preventDefault(); e.target.click(); return; }   // Leertaste auf fokussierter Antwort = auswählen
    if(enter){ if(onBtn) return; e.preventDefault(); if(!pb.disabled) pb.click(); }
    else if(e.key==="ArrowLeft"){ const pv=$("#prevBtn"); if(pv && !pv.classList.contains("hidden")){ e.preventDefault(); pv.click(); } }
    else if(e.key==="g"||e.key==="G"){ const gb=$("#guessBtn"); if(gb && !gb.classList.contains("hidden")){ e.preventDefault(); gb.click(); } }
    else if(session && session.items[session.idx].q.type==="k"){
      // K-Fragen: ↑/↓ wechselt die markierte Zeile, 1/2 wählt die Kategorie und springt zur nächsten Zeile
      const it=session.items[session.idx], rows=$$("#optList .krow");
      if(e.key==="ArrowUp"||e.key==="ArrowDown"){
        const n=rows.length; if(!n || !rows.some(r=>r.classList.contains("kactive"))) return;
        e.preventDefault(); it.ka=(it.ka+(e.key==="ArrowDown"?1:n-1))%n;
        rows.forEach((r,i)=>r.classList.toggle("kactive",i===it.ka)); rows[it.ka].scrollIntoView({block:"nearest"});
      } else if(/^[1-9]$/.test(e.key) && rows[it.ka]){
        const b=rows[it.ka].querySelectorAll(".kcat")[+e.key-1];
        if(b && !b.disabled){ e.preventDefault(); const wasSel=b.classList.contains("sel"); b.click();
          if(!wasSel && it.ka<rows.length-1){ it.ka++; renderQuestion(); } }   // beim Abwählen in der Zeile bleiben
      }
    }
    else if(/^[1-9]$/.test(e.key)){ const o=$$("#optList .opt")[+e.key-1]; if(o && !o.classList.contains("disabled")){ e.preventDefault(); o.click(); } }
  } else if(vis("flash")){
    const btns=$$("#flashActions .btn");
    if(btns.length===2 && !flash.revealed){ if(enter && !onBtn){ e.preventDefault(); btns[1].click(); } }
    else if(flash.revealed && btns.length===2){
      if(e.key==="1"){ e.preventDefault(); btns[0].click(); }
      else if(e.key==="2"||(enter&&!onBtn)){ e.preventDefault(); btns[1].click(); }
    }
  }
});

$("#qNavHead").onclick=()=>{ const n=$("#qNav"); const o=n.classList.toggle("open"); $("#qNavHead").setAttribute("aria-expanded",o?"true":"false"); };
$("#qNavGrid").onclick=e=>{ const b=e.target.closest&&e.target.closest(".qn"); if(!b) return;
  jumpTo(+b.dataset.i);
  if(!window.matchMedia("(min-width:1200px)").matches){ $("#qNav").classList.remove("open"); $("#qNavHead").setAttribute("aria-expanded","false"); } };   // Streifen nach dem Sprung einklappen, Frage sichtbar
$("#primaryBtn").onclick=onPrimary;
$("#prevBtn").onclick=goPrev;
$("#quitBtn").onclick=()=>{ stopExamTimer(); persistSession(); updateResumeBanner(); updatePool(); show("home"); };
$("#statsBtn").onclick=renderStats;
$("#statsHomeBtn").onclick=()=>show("home");
$("#dataBtn").onclick=openData;
$("#dataHomeBtn").onclick=renderStats;
$("#copyExportBtn").onclick=copyExport;
$("#downloadExportBtn").onclick=downloadExport;
$("#importBtn").onclick=doImport;
$("#srsBtn").onclick=()=>{ const d=dueQuestions(); if(!d.length){ alert(T("Aktuell keine Fragen fällig. 🎉","No questions due right now. 🎉")); return; } if(store.session && !confirm(T("Es gibt eine unterbrochene Runde. Neue Runde starten und die alte verwerfen?","There is an interrupted round. Start a new round and discard the old one?"))) return; ui.mode="practice"; clearSession(); buildSession(d); };
$("#flashBtn").onclick=startFlash;
$("#browseBtn").onclick=renderBrowse;
$("#browseHomeBtn").onclick=()=>{ updatePool(); show("home"); };
$("#refBtn").onclick=()=>{ refReturn=null; updateRefBackBtn(); renderReference(""); show("reference"); };
$("#refHomeBtn").onclick=()=>show("home");
$("#refBackBtn").onclick=()=>{ const r=refReturn; if(r&&r.kind==="cm"){ renderConceptMap(); show("conceptmap"); if(r.id) cmSelect(r.id); } else if(r&&r.kind==="quiz"){ show("quiz"); window.scrollTo(0, r.y||0); } else if(r&&r.kind==="glossary"){ show("glossary"); window.scrollTo(0, glStudy?0:(r.y||0)); } };
/* „← Zurück zu …“ im Lernstoff: im Verlauf einen Schritt zurück (der popstate-Handler stellt dann Quiz/Concept Map/Glossar wieder her) */
{ const refBackRestore=$("#refBackBtn").onclick;
  $("#refBackBtn").onclick=()=>{ if(!navPop && navState().screen==="reference" && navState().depth>0) history.back(); else refBackRestore(); }; }
$("#cmBtn").onclick=()=>{ renderConceptMap(); show("conceptmap"); };
$("#cmHomeBtn").onclick=()=>show("home");
$("#glossaryBtn").onclick=()=>{ endGlossaryStudy(); renderGlossary(""); show("glossary"); };
$("#glHomeBtn").onclick=()=>show("home");
$("#glStudyBtn").onclick=()=>startGlossaryStudy();
(function(){ const gs=$("#glSearch"); if(gs) gs.oninput=()=>renderGlossary(gs.value); })();
(function(){ $$("#glFilter .chip.r").forEach(ch=>{ ch.onclick=()=>{ const r=ch.getAttribute("data-r"); if(glFilter.has(r)&&glFilter.size>1) glFilter.delete(r); else glFilter.add(r); renderGlossary($("#glSearch")?$("#glSearch").value:""); }; }); })();
$("#mockBtn").onclick=()=>{ renderMockExam(); show("mockexam"); };
$("#origMixBtn").onclick=()=>{ if(store.session && !confirm(T("Es gibt eine unterbrochene Runde. Prüfung starten und die alte verwerfen?","There is an interrupted round. Start the exam and discard the old one?"))) return; clearSession(); startOriginalMix(); };
$("#mockHomeBtn").onclick=()=>{ updateResumeBanner(); show("home"); };
$("#mockStartBtn").onclick=()=>{ if(store.session && !confirm(T("Es gibt eine unterbrochene Runde. Musterprüfung starten und die alte verwerfen?","There is an interrupted round. Start the mock exam and discard the old one?"))) return; clearSession(); startMockExam(); };
(function(){ const rs=$("#refSearch"); if(rs) rs.oninput=()=>renderReference(rs.value); })();
document.addEventListener("click", e=>{ const el=e.target.closest && e.target.closest(".lzlink"); if(el){ const inQuiz=!$("#quiz").classList.contains("hidden"); const inGl=!$("#glossary").classList.contains("hidden"); openReference(el.dataset.lz, inQuiz?"quiz":(inGl?"glossary":undefined)); } });
$("#themeBtn").onclick=cycleTheme;
$("#againBtn").onclick=()=>buildSession();
$("#homeBtn").onclick=()=>{ updatePool(); updateResumeBanner(); show("home"); };
$("#reviewWrongBtn").onclick=()=>{
  const wrong=session.items.filter(x=>x.correct!==true).map(x=>x.q);
  if(wrong.length===0){ alert(T("Alles komplett richtig – super!","Everything fully correct – great!")); return; }
  ui.mode="practice";
  ui.num=wrong.length; buildSession(wrong);
};
$("#resumeBtn").onclick=()=>{ if(restoreSession()){ show("quiz"); renderQuestion(); startExamTimer(); } else { updateResumeBanner(); } };
$("#discardBtn").onclick=()=>{ if(confirm(T("Unterbrochene Runde wirklich verwerfen?","Really discard the interrupted round?"))){ clearSession(); updateResumeBanner(); } };

$("#reviewAnswersBtn").onclick=renderReview;
$("#reviewBackBtn").onclick=()=>show("result");
$("#langBtn").onclick=cycleLang;
$("#navBack").onclick=()=>{ const vis=["stats","data","browse","conceptmap","glossary","mockexam","review","result","flash","reference"].find(id=>!$("#"+id).classList.contains("hidden")); if(!vis) return; const t=navBackTarget(vis); if(t) $("#"+t).click(); else { updatePool(); show("home"); } };

/* Nach Sprachwechsel: sichtbaren Screen neu rendern (statische Texte macht applyLang). */
function rerenderCurrent(){
  buildChapterChips(); updatePool(); updateResumeBanner();
  const vis = id => !$("#"+id).classList.contains("hidden");
  if(vis("quiz") && session) renderQuestion();
  else if(vis("review")) renderReview();
  else if(vis("stats")) renderStats();
  else if(vis("mockexam")) renderMockExam();
  else if(vis("flash") && flash) renderFlash();
  else if(vis("browse")) renderBrowse();
  else if(vis("conceptmap")) renderConceptMap();
  else if(vis("glossary")){ if(typeof glStudy!=="undefined" && glStudy) renderGlossaryStudy(); else renderGlossary($("#glSearch")?$("#glSearch").value:""); }
  else if(vis("reference")) renderReference($("#refSearch")?$("#refSearch").value:"");
}

mergeEN();
applyTheme();
applyLang();
initHome();
show("home");
