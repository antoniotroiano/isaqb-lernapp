/* ============================================================
   i18n – Deutsch/Englisch (Phase 1: UI + offizielle Musterprüfung)
   Fragen/Lernstoff ohne EN fallen auf Deutsch zurück.
   ============================================================ */
let LANG = "de";

/* Inline-Helfer für dynamisch erzeugte Strings in JS. */
function T(de, en){ return (LANG==="en" && en!=null) ? en : de; }

/* Kapitelnamen (die eigenen deutschen Titel, faithful übersetzt). */
const CHAP_EN = {
  1:"Basic concepts", 2:"Requirements & constraints", 3:"Design & development",
  4:"Specification & communication", 5:"Analysis & evaluation", 6:"Examples"
};
function chapName(n){ return (LANG==="en" && CHAP_EN[n]) ? CHAP_EN[n] : (CHAPTERS[n]||""); }

/* Lokalisierte Frage-Zugriffe: EN wenn vorhanden, sonst Deutsch. */
function Lq(q){ return (LANG==="en" && q.q_en) ? q.q_en : q.q; }
function Lopts(q){ return (LANG==="en" && q.options_en) ? q.options_en : (q.options||[]); }
function Lexpl(q){ return (LANG==="en" && q.explanation_en) ? q.explanation_en : (q.explanation||""); }
function Lcats(q){ return (LANG==="en" && q.categories_en) ? q.categories_en : (q.categories||[]); }
function Lrow(r){ return (LANG==="en" && r.text_en) ? r.text_en : r.text; }
function LoptExpl(q){ return (LANG==="en" && q.optExpl_en) ? q.optExpl_en : (q.optExpl||null); }
/* Generischer EN-Feld-Zugriff mit DE-Fallback (Lernstoff/Concept Map). */
function LE(o,f){ return (o && LANG==="en" && o[f+"_en"]!=null) ? o[f+"_en"] : (o?o[f]:undefined); }

/* EN-Übersetzungen des Katalogs (js/questions_en.js) auf die Fragen-Objekte mergen,
   damit dieselben L*-Accessors für Katalog UND Musterprüfung greifen. */
function mergeEN(){
  if(typeof QUESTIONS==="undefined" || typeof QUESTIONS_EN==="undefined") return;
  QUESTIONS.forEach(q=>{
    const e=QUESTIONS_EN[q.id]; if(!e) return;
    if(e.q) q.q_en=e.q;
    if(e.options) q.options_en=e.options;
    if(e.optExpl) q.optExpl_en=e.optExpl;
    if(e.explanation) q.explanation_en=e.explanation;
    if(e.categories) q.categories_en=e.categories;
    if(e.rows && q.rows) e.rows.forEach((txt,i)=>{ if(q.rows[i]) q.rows[i].text_en=txt; });
  });
  // Lernstoff / Reference
  if(typeof REFERENCE!=="undefined" && typeof REFERENCE_EN!=="undefined"){
    if(REFERENCE_EN.intro) REFERENCE.intro_en=REFERENCE_EN.intro;
    if(REFERENCE_EN.sources) REFERENCE.sources_en=REFERENCE_EN.sources;
    (REFERENCE.chapters||[]).forEach(c=>{ const ec=REFERENCE_EN.chapters&&REFERENCE_EN.chapters[c.num]; if(!ec)return;
      if(ec.title)c.title_en=ec.title; if(ec.intro)c.intro_en=ec.intro;
      (c.lzs||[]).forEach(e=>{ const el=ec.lzs&&ec.lzs[e.lz]; if(!el)return; if(el.title)e.title_en=el.title; if(el.body)e.body_en=el.body; });
    });
  }
  // Concept Map
  if(typeof CMAP!=="undefined" && typeof CMAP_EN!=="undefined"){
    (CMAP.chapters||[]).forEach(ch=>{ const ec=CMAP_EN.chapters&&CMAP_EN.chapters[ch.num]; if(!ec)return; if(ec.title)ch.title_en=ec.title; if(ec.sub)ch.sub_en=ec.sub; });
    Object.keys(CMAP.lz||{}).forEach(id=>{ const e=CMAP_EN.lz&&CMAP_EN.lz[id]; if(!e)return; if(e.name)CMAP.lz[id].name_en=e.name; if(e.desc)CMAP.lz[id].desc_en=e.desc; });
    if(CMAP_EN.reasons) CMAP.reasons_en=CMAP_EN.reasons;
  }
}

/* Statische UI-Strings (data-i18n / data-i18n-ph in index.html). */
const I18N = {
 de:{
  "hdr.stats":"Statistik","hdr.theme":"Design","hdr.lang":"Sprache",
  "home.resumeTitle":"⏸ Unterbrochene Runde","home.resume":"▶ Fortsetzen","home.discard":"Verwerfen",
  "home.mode":"Modus","mode.practice":"Üben","mode.exam":"Prüfung simulieren",
  "home.chapters":"Kapitel","home.relevance":"Prüfungsrelevanz",
  "r1.chip":"R1 · kommt sicher","r2.chip":"R2 · kann drankommen","r3.chip":"R3 · nicht prüfungsrelevant",
  "relevance.hint":"Standard: R1 + R2. R3 dient nur dem Verständnis.",
  "home.moreOptions":"Weitere Optionen",
  "opt.bookmarks":"☆ Nur Lesezeichen","opt.wrong":"✕ Nur falsch beantwortete","opt.spaced":"↻ Fehler bevorzugen","opt.shuffle":"🔀 Antworten mischen",
  "home.start":"Start","home.flash":"🃏 Karteikarten","home.ref":"📚 Lernstoff nachschlagen","home.cm":"🗺 Concept Map","home.browse":"📖 Fragen durchblättern","home.mock":"🎓 Offizielle Musterprüfung",
  "home.toolsHint":"🔁 <b>Wiederholen</b>: Fragen, die laut Lernplan (Spaced Repetition) heute dran sind · 🃏 <b>Karteikarten</b>: Antwort aufdecken &amp; selbst einschätzen · 📚 <b>Lernstoff</b>: Curriculum-Themen nachlesen · 🗺 <b>Concept Map</b>: Zusammenhänge der Lernziele · 📖 <b>Durchblättern</b>: alle Fragen mit Lösung nachschlagen.",
  "home.mockHint":"🎓 <b>Musterprüfung</b>: die offizielle iSAQB-Beispielprüfung (2026.2) als Generalprobe im Prüfungsformat — separat vom eigenen Fragenkatalog.",
  "home.numLabel":"Anzahl Fragen pro Runde:","home.of":"von","home.available":"verfügbaren",
  "home.reset":"Fortschritt zurücksetzen",
  "footer.disc":"Inoffizielles Lernwerkzeug. Nicht mit dem iSAQB® verbunden. Fragen sind eigenständig formuliert (keine Original-Prüfungsfragen) und dienen nur zur Übung. Bedeutung: <b>R1</b> kommt sicher dran · <b>R2</b> kann drankommen · <b>R3</b> nicht prüfungsrelevant.",
  "q.bookmark":"Lesezeichen",
  "result.byChapter":"Ergebnis pro Kapitel","result.review":"🔍 Antworten durchsehen","result.again":"Neue Runde","result.reviewWrong":"Falsche wiederholen","result.home":"Zur Startseite",
  "stats.total":"Gesamtfortschritt","stats.seen":"bearbeitet","stats.acc":"Trefferquote","stats.mastered":"sicher (3× richtig)","stats.bookmarks":"Lesezeichen",
  "stats.readiness":"Prüfungsreife (Schätzung)","stats.coverage":"Abdeckung","stats.byR":"Trefferquote nach Prüfungsrelevanz","stats.byType":"Trefferquote nach Fragetyp",
  "stats.typeHint":"A = Einfachauswahl · P = Mehrfachauswahl · K = Zuordnung","stats.byChapter":"Trefferquote pro Kapitel","stats.weak":"Schwächste Kapitel","stats.examHist":"Prüfungshistorie",
  "stats.data":"💾 Daten sichern / laden","common.back":"Zurück",
  "data.exportTitle":"Fortschritt sichern (Export)","data.exportHint":"Diesen Text kopieren oder als Datei speichern – als Backup oder um ihn auf einem anderen Gerät/Browser einzuspielen.",
  "data.copy":"Kopieren","data.asFile":"Als Datei","data.importTitle":"Fortschritt laden (Import)",
  "data.importHint":"Gesicherten Text einfügen und importieren. <b>Achtung:</b> ersetzt den aktuellen Fortschritt auf diesem Gerät.",
  "data.importPh":"Hier den gesicherten Text einfügen …","data.import":"Importieren","data.backToStats":"Zurück zur Statistik",
  "browse.title":"Fragen durchblättern","browse.hint":"Tippe eine Frage an, um die Lösung ein-/auszublenden. Nutzt die Filter (Kapitel & Prüfungsrelevanz) von der Startseite.",
  "ref.title":"📚 Lernstoff","ref.searchPh":"Suchen: Thema, Stichwort oder LZ-Nummer …",
  "cm.title":"🗺 Concept Map","cm.hint":"Zeigt Zusammenhänge zwischen den 38 Lernzielen. Lernziel antippen → Kurzbeschreibung, Verknüpfungen und „Im Lernstoff öffnen“.",
  "cm.r1":"R1 · wird geprüft","cm.r2":"R2 · kann geprüft werden","cm.r3":"R3 · nicht geprüft","cm.onlyR12":"Nur R1/R2",
  "cm.placeholder":"Wähle ein Lernziel aus der Übersicht, um Details und Verknüpfungen zu sehen.",
  "mock.title":"🎓 Offizielle Musterprüfung",
  "mock.desc":"Dies ist die offizielle <b>iSAQB®-CPSA-F®-Beispielprüfung</b> (Dokumentversion 2026.2) — dieselben 38 Fragen wie im offiziellen PDF, im echten Prüfungsformat mit Timer, Punkten und 60-%-Grenze. Ideal als Generalprobe kurz vor der echten Prüfung.",
  "mock.start":"Musterprüfung starten",
  "mock.source":"Quelle &amp; © <b>iSAQB® e. V.</b> — CPSA-F® Beispielprüfung 2026.2 (Curriculum 2025.1). Nutzung zur Prüfungsvorbereitung gemäß den Nutzungsbedingungen der Beispielprüfung. <a href=\"https://public.isaqb.org/foundation-exam-questions/mock-de.pdf\" target=\"_blank\" rel=\"noopener\">Original-PDF</a>",
  "review.title":"Antworten durchsehen","review.hint":"Falsch oder nur teilweise richtig beantwortete Fragen – mit deiner Wahl und der richtigen Lösung.","review.back":"Zurück zum Ergebnis",
  "bar.pause":"Pause"
 },
 en:{
  "hdr.stats":"Statistics","hdr.theme":"Theme","hdr.lang":"Language",
  "home.resumeTitle":"⏸ Interrupted round","home.resume":"▶ Resume","home.discard":"Discard",
  "home.mode":"Mode","mode.practice":"Practice","mode.exam":"Exam simulation",
  "home.chapters":"Chapters","home.relevance":"Exam relevance",
  "r1.chip":"R1 · will be tested","r2.chip":"R2 · may be tested","r3.chip":"R3 · not exam-relevant",
  "relevance.hint":"Default: R1 + R2. R3 is for understanding only.",
  "home.moreOptions":"More options",
  "opt.bookmarks":"☆ Bookmarks only","opt.wrong":"✕ Only answered wrong","opt.spaced":"↻ Prefer mistakes","opt.shuffle":"🔀 Shuffle answers",
  "home.start":"Start","home.flash":"🃏 Flashcards","home.ref":"📚 Study material","home.cm":"🗺 Concept map","home.browse":"📖 Browse questions","home.mock":"🎓 Official mock exam",
  "home.toolsHint":"🔁 <b>Repeat</b>: questions due today per the study plan (spaced repetition) · 🃏 <b>Flashcards</b>: reveal the answer &amp; self-assess · 📚 <b>Study material</b>: read up on curriculum topics · 🗺 <b>Concept map</b>: relationships between learning goals · 📖 <b>Browse</b>: look up all questions with solutions.",
  "home.mockHint":"🎓 <b>Mock exam</b>: the official iSAQB example exam (2026.2) as a dress rehearsal in exam format — separate from your own question catalogue.",
  "home.numLabel":"Questions per round:","home.of":"of","home.available":"available",
  "home.reset":"Reset progress",
  "footer.disc":"Unofficial study tool. Not affiliated with iSAQB®. Questions are written independently (no original exam questions) and are for practice only. Meaning: <b>R1</b> will be tested · <b>R2</b> may be tested · <b>R3</b> not exam-relevant.",
  "q.bookmark":"Bookmark",
  "result.byChapter":"Result per chapter","result.review":"🔍 Review answers","result.again":"New round","result.reviewWrong":"Repeat wrong ones","result.home":"To start page",
  "stats.total":"Overall progress","stats.seen":"answered","stats.acc":"Accuracy","stats.mastered":"mastered (3× correct)","stats.bookmarks":"Bookmarks",
  "stats.readiness":"Exam readiness (estimate)","stats.coverage":"Coverage","stats.byR":"Accuracy by exam relevance","stats.byType":"Accuracy by question type",
  "stats.typeHint":"A = single choice · P = multiple choice · K = assignment","stats.byChapter":"Accuracy per chapter","stats.weak":"Weakest chapters","stats.examHist":"Exam history",
  "stats.data":"💾 Back up / restore data","common.back":"Back",
  "data.exportTitle":"Back up progress (export)","data.exportHint":"Copy this text or save it as a file – as a backup or to load it on another device/browser.",
  "data.copy":"Copy","data.asFile":"As file","data.importTitle":"Load progress (import)",
  "data.importHint":"Paste the backed-up text and import it. <b>Caution:</b> replaces the current progress on this device.",
  "data.importPh":"Paste the backed-up text here …","data.import":"Import","data.backToStats":"Back to statistics",
  "browse.title":"Browse questions","browse.hint":"Tap a question to show/hide its solution. Uses the filters (chapters & exam relevance) from the start page.",
  "ref.title":"📚 Study material","ref.searchPh":"Search: topic, keyword or LG number …",
  "cm.title":"🗺 Concept map","cm.hint":"Shows the relationships between the 38 learning goals. Tap a learning goal → short description, links and “Open in study material”.",
  "cm.r1":"R1 · tested","cm.r2":"R2 · may be tested","cm.r3":"R3 · not tested","cm.onlyR12":"R1/R2 only",
  "cm.placeholder":"Pick a learning goal from the overview to see details and links.",
  "mock.title":"🎓 Official mock exam",
  "mock.desc":"This is the official <b>iSAQB® CPSA-F® example exam</b> (document version 2026.2) — the same 38 questions as in the official PDF, in real exam format with timer, points and a 60% pass mark. Ideal as a dress rehearsal shortly before the real exam.",
  "mock.start":"Start mock exam",
  "mock.source":"Source &amp; © <b>iSAQB® e. V.</b> — CPSA-F® example exam 2026.2 (curriculum 2025.1). Used for exam preparation in accordance with the example exam's terms of use. <a href=\"https://public.isaqb.org/foundation-exam-questions/mock-en.pdf\" target=\"_blank\" rel=\"noopener\">Original PDF</a>",
  "review.title":"Review answers","review.hint":"Questions answered wrong or only partially correct – with your choice and the correct solution.","review.back":"Back to result",
  "bar.pause":"Pause"
 }
};

function t(k){
  const d=I18N[LANG]||I18N.de;
  if(d && d[k]!=null) return d[k];
  return (I18N.de[k]!=null) ? I18N.de[k] : k;
}

function applyLang(){
  LANG = (store.settings && store.settings.lang) || "de";
  document.documentElement.lang = LANG;
  document.querySelectorAll("[data-i18n]").forEach(el=>{ const v=t(el.getAttribute("data-i18n")); if(v!=null) el.innerHTML=v; });
  document.querySelectorAll("[data-i18n-ph]").forEach(el=>{ const v=t(el.getAttribute("data-i18n-ph")); if(v!=null) el.setAttribute("placeholder",v); });
  document.querySelectorAll("[data-i18n-title]").forEach(el=>{ const v=t(el.getAttribute("data-i18n-title")); if(v!=null) el.setAttribute("title",v); });
  const lb=$("#langBtn"); if(lb) lb.textContent = (LANG==="de") ? "EN" : "DE";
}

function cycleLang(){
  store.settings = store.settings || {};
  store.settings.lang = (LANG==="de") ? "en" : "de";
  saveStore();
  applyLang();
  if(typeof rerenderCurrent==="function") rerenderCurrent();
}
