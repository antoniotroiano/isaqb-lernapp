"use strict";
const LS_KEY = "isaqb_trainer_v1";
let store = loadStore();
function loadStore(){
  try{ return JSON.parse(localStorage.getItem(LS_KEY)) || {stats:{},settings:{}}; }
  catch(e){ return {stats:{},settings:{}}; }
}
function saveStore(){ try{ localStorage.setItem(LS_KEY, JSON.stringify(store)); }catch(e){} }
function qStat(id){ return store.stats[id] || (store.stats[id]={seen:0,correct:0,wrong:0,streak:0,bm:false}); }
function recordRecent(ids){ const CAP=60; const r=(store.recent||[]).concat(ids); store.recent = r.length>CAP ? r.slice(r.length-CAP) : r; saveStore(); }

let ui = {
  mode:"practice",
  chapters:new Set([1,2,3,4,5,6]),
  rlevels:new Set(["R1","R2"]),
  onlyBookmarks:false,
  onlyWrong:false,
  spacedRep:true,
  shuffleOpts:true,
  num:20
};
let session = null;
let timerId = null;

/* ============================================================
   Helpers
   ============================================================ */
