"use strict";
/* ============================================================
   Updates: (1) neue App-Version erkennen (version.json), (2) überarbeitete Fragen erkennen
   ============================================================ */
function appVersion(){ const el=$("#appVersion"); return el?el.textContent.trim():""; }
function verNum(v){ return String(v).split(".").map(n=>parseInt(n,10)||0); }
function verNewer(a,b){ const x=verNum(a), y=verNum(b); for(let i=0;i<Math.max(x.length,y.length);i++){ const d=(x[i]||0)-(y[i]||0); if(d) return d>0; } return false; }

function showModal(title, text, buttons){
  const old=$("#modal"); if(old) old.remove();
  const m=document.createElement("div"); m.id="modal"; m.className="modal";
  const box=document.createElement("div"); box.className="modalbox";
  const h=document.createElement("h2"); h.textContent=title; box.appendChild(h);
  const p=document.createElement("p"); p.textContent=text; box.appendChild(p);
  buttons.forEach(b=>{ const btn=document.createElement("button"); btn.className="btn "+(b.cls||""); btn.textContent=b.label; btn.onclick=()=>{ m.remove(); if(b.fn) b.fn(); }; box.appendChild(btn); });
  m.appendChild(box); document.body.appendChild(m);
}

/* ---- (1) neue App-Version ---- */
function checkAppUpdate(){
  if(location.protocol!=="http:"&&location.protocol!=="https:") return;      // lokale Datei: kein Server
  if(!navigator.onLine||typeof fetch!=="function") return;
  fetch("version.json?t="+Date.now(),{cache:"no-store"}).then(r=>r.ok?r.json():null).then(j=>{
    if(!j||!j.version||!verNewer(j.version,appVersion())) return;
    if(sessionStorage.getItem("isaqb_update_later")===j.version) return;
    showModal(T("Neue Version verfügbar","New version available"),
      T("Version "+j.version+" ist da (neue Funktionen oder überarbeitete Fragen). Dein Fortschritt bleibt erhalten.","Version "+j.version+" is available (new features or revised questions). Your progress is kept."),
      [{label:T("Jetzt aktualisieren","Update now"), fn:()=>{ location.replace(location.pathname+"?v="+encodeURIComponent(j.version)+location.hash); }},
       {label:T("Später","Later"), cls:"ghost", fn:()=>{ try{ sessionStorage.setItem("isaqb_update_later",j.version); }catch(e){} }}]);
  }).catch(()=>{});
}

/* ---- (2) überarbeitete Fragen ---- */
function qHash(q){
  const s=JSON.stringify([q.q,q.options,q.correct,q.categories,(q.rows||[]).map(r=>[r.text,r.cat])]);
  let h=2166136261; for(let i=0;i<s.length;i++){ h^=s.charCodeAt(i); h=Math.imul(h,16777619); }
  return (h>>>0).toString(36);
}
function checkChangedQuestions(){
  const cur={}; QUESTIONS.forEach(q=>cur[q.id]=qHash(q));
  if(!store.qhash){ store.qhash=cur; saveStore(); return; }            // erster Start mit dieser Version: nur Ausgangsstand merken
  const changed=QUESTIONS.filter(q=>store.qhash[q.id] && store.qhash[q.id]!==cur[q.id] && store.stats[q.id] && store.stats[q.id].seen>0).map(q=>q.id);
  const sync=()=>{ store.qhash=cur; saveStore(); };
  if(!changed.length){ sync(); return; }
  showModal(changed.length===1?T("1 Frage überarbeitet","1 question revised"):T(changed.length+" Fragen überarbeitet",changed.length+" questions revised"),
    T("Bereits beantwortete Fragen wurden inhaltlich geändert. Soll ihre Statistik zurückgesetzt werden, damit sie wieder frisch bei dir ankommen? Der Rest deines Fortschritts bleibt erhalten.","Questions you have already answered were changed in content. Reset their statistics so they come up fresh again? The rest of your progress is kept."),
    [{label:T("Statistik dieser Fragen zurücksetzen","Reset statistics of these questions"), fn:()=>{ changed.forEach(id=>{ const b=store.stats[id].bm; store.stats[id]={seen:0,correct:0,wrong:0,streak:0,bm:!!b}; }); sync(); updatePool(); }},
     {label:T("Behalten","Keep"), cls:"ghost", fn:sync}]);
}

checkChangedQuestions();
checkAppUpdate();
