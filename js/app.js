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
  // mode
  $$("#modeSeg button").forEach(b=>b.onclick=()=>{
    $$("#modeSeg button").forEach(x=>x.classList.remove("active"));
    b.classList.add("active"); ui.mode=b.dataset.mode;
    $("#modeHint").textContent = ui.mode==="practice"
      ? "Üben: sofortiges Feedback mit Erklärung nach jeder Frage."
      : "Prüfung: 40 Fragen · 75 Min · 60 % zum Bestehen · Punkte & offizielle iSAQB-Bewertung.";
    if(ui.mode==="exam"){ const p=poolQuestions().length; ui.num=Math.min(40, p||5); const r=$("#numRange"); r.value=ui.num; $("#numLabel").textContent=ui.num; }
  });
  // R chips
  $$("#rChips .chip").forEach(c=>c.onclick=()=>{
    const r=c.dataset.r;
    if(ui.rlevels.has(r)) ui.rlevels.delete(r); else ui.rlevels.add(r);
    c.classList.toggle("active"); updatePool();
  });
  // option chips
  $("#onlyBookmarks").onclick=e=>{ ui.onlyBookmarks=!ui.onlyBookmarks; e.target.classList.toggle("active"); updatePool(); };
  $("#onlyWrong").onclick=e=>{ ui.onlyWrong=!ui.onlyWrong; e.target.classList.toggle("active"); updatePool(); };
  $("#spacedRep").onclick=e=>{ ui.spacedRep=!ui.spacedRep; e.target.classList.toggle("active"); };
  $("#shuffleOpts").onclick=e=>{ ui.shuffleOpts=!ui.shuffleOpts; e.target.classList.toggle("active"); };
  $("#numRange").oninput=e=>{ ui.num=+e.target.value; $("#numLabel").textContent=e.target.value; };
  $("#startBtn").onclick=()=>{
    if(poolQuestions().length===0) return;
    if(store.session && !confirm("Es gibt eine unterbrochene Runde. Neue Runde starten und die alte verwerfen?")) return;
    buildSession();
  };
  $("#resetBtn").onclick=()=>{ if(confirm("Gesamten Lernfortschritt und Lesezeichen löschen?")){ store={stats:{},settings:store.settings}; saveStore(); alert("Fortschritt zurückgesetzt."); updatePool(); updateResumeBanner(); } };
  updatePool();
  updateResumeBanner();
}

$("#primaryBtn").onclick=onPrimary;
$("#quitBtn").onclick=()=>{ stopExamTimer(); persistSession(); updateResumeBanner(); updatePool(); show("home"); };
$("#statsBtn").onclick=renderStats;
$("#statsHomeBtn").onclick=()=>show("home");
$("#dataBtn").onclick=openData;
$("#dataHomeBtn").onclick=renderStats;
$("#copyExportBtn").onclick=copyExport;
$("#downloadExportBtn").onclick=downloadExport;
$("#importBtn").onclick=doImport;
$("#srsBtn").onclick=()=>{ const d=dueQuestions(); if(!d.length){ alert("Aktuell keine Fragen fällig. 🎉"); return; } if(store.session && !confirm("Es gibt eine unterbrochene Runde. Neue Runde starten und die alte verwerfen?")) return; ui.mode="practice"; $$("#modeSeg button").forEach(x=>x.classList.toggle("active", x.dataset.mode==="practice")); $("#modeHint").textContent="Üben: sofortiges Feedback mit Erklärung nach jeder Frage."; clearSession(); buildSession(d); };
$("#flashBtn").onclick=startFlash;
$("#browseBtn").onclick=renderBrowse;
$("#browseHomeBtn").onclick=()=>{ updatePool(); show("home"); };
$("#refBtn").onclick=()=>{ refReturn=null; updateRefBackBtn(); renderReference(""); show("reference"); };
$("#refHomeBtn").onclick=()=>show("home");
$("#refBackBtn").onclick=()=>{ const r=refReturn; if(r&&r.kind==="cm"){ renderConceptMap(); show("conceptmap"); if(r.id) cmSelect(r.id); } else if(r&&r.kind==="quiz"){ show("quiz"); } };
$("#cmBtn").onclick=()=>{ renderConceptMap(); show("conceptmap"); };
$("#cmHomeBtn").onclick=()=>show("home");
(function(){ const rs=$("#refSearch"); if(rs) rs.oninput=()=>renderReference(rs.value); })();
document.addEventListener("click", e=>{ const el=e.target.closest && e.target.closest(".lzlink"); if(el){ const inQuiz=!$("#quiz").classList.contains("hidden"); openReference(el.dataset.lz, inQuiz?"quiz":undefined); } });
$("#themeBtn").onclick=cycleTheme;
$("#againBtn").onclick=()=>buildSession();
$("#homeBtn").onclick=()=>{ updatePool(); updateResumeBanner(); show("home"); };
$("#reviewWrongBtn").onclick=()=>{
  const wrong=session.items.filter(x=>x.correct!==true).map(x=>x.q);
  if(wrong.length===0){ alert("Alles komplett richtig – super!"); return; }
  ui.mode="practice";
  $$("#modeSeg button").forEach(x=>x.classList.toggle("active", x.dataset.mode==="practice"));
  $("#modeHint").textContent="Üben: sofortiges Feedback mit Erklärung nach jeder Frage.";
  ui.num=wrong.length; buildSession(wrong);
};
$("#resumeBtn").onclick=()=>{ if(restoreSession()){ show("quiz"); renderQuestion(); startExamTimer(); } else { updateResumeBanner(); } };
$("#discardBtn").onclick=()=>{ if(confirm("Unterbrochene Runde wirklich verwerfen?")){ clearSession(); updateResumeBanner(); } };

$("#reviewAnswersBtn").onclick=renderReview;
$("#reviewBackBtn").onclick=()=>show("result");

applyTheme();
initHome();
show("home");
