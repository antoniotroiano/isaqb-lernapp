# -*- coding: utf-8 -*-
import os,glob,re,json,xml.etree.ElementTree as ET
SP=os.environ['SP']
files=sorted(glob.glob(SP+'/mockxml/mock-*.xml'), key=lambda p:int(re.search(r'mock-(\d+)',p).group(1)))
NS='{https://www.isaqb.org/ns/exam/foundation/v1}'
XL='{http://www.w3.org/XML/1998/namespace}lang'
def L(el): return el.tag.split('}')[-1]
def tx(parent,lang):
    if parent is None: return ''
    for t in parent.findall(NS+'text'):
        if t.get(XL)==lang: return re.sub(r'\s+',' ',(t.text or '').strip())
    return ''
out=[]
for f in files:
    root=ET.parse(f).getroot(); tag=L(root); qid=root.get('id'); pts=int(root.get('points','1'))
    lg=None; ref=root.find(NS+'refersToLgs')
    if ref is not None:
        for lge in ref.findall(NS+'lg'):
            if lge.get('curriculumVersion')=='2025.1': lg=lge.get('lg')
    chapter=int(lg.split('-')[0]) if lg else 0
    stem=root.find(NS+'stem'); ex=root.find(NS+'explanation')
    q={'id':qid,'chapter':chapter,'lz':('LZ '+lg) if lg else '','points':pts,
       'q':tx(stem,'de'),'q_en':tx(stem,'en')}
    if ex is not None:
        q['explanation']=tx(ex,'de'); q['explanation_en']=tx(ex,'en')
    if tag=='pickQuestion':
        opts=root.find(NS+'pickOptions').findall(NS+'option')
        q['options']=[tx(o,'de') for o in opts]
        q['options_en']=[tx(o,'en') for o in opts]
        q['correct']=[i for i,o in enumerate(opts) if o.get('correct')=='correct']
        q['type']='single' if len(q['correct'])==1 else 'multi'
    else:
        cs=root.find(NS+'categoryStatements'); cats=cs.find(NS+'categories').findall(NS+'category')
        labels=[c.get('label') for c in cats]
        q['type']='k'
        q['categories']=[tx(c,'de') for c in cats]
        q['categories_en']=[tx(c,'en') for c in cats]
        q['rows']=[{'text':tx(s,'de'),'text_en':tx(s,'en'),'cat':labels.index(s.get('correctCategory'))} for s in cs.find(NS+'statements').findall(NS+'statement')]
    # reorder keys: type after lz
    ordered={k:q[k] for k in ['id','chapter','lz','type','points','q','q_en'] if k in q}
    for k in ['options','options_en','correct','categories','categories_en','rows','explanation','explanation_en']:
        if k in q: ordered[k]=q[k]
    out.append(ordered)
data={"documentVersion":"2026.2","date":"2026-03-27","curriculum":"2025.1-rev2",
  "source":"iSAQB® e. V. — CPSA-F® Beispielprüfung","url":"https://public.isaqb.org/foundation-exam-questions/mock-de.pdf",
  "durationMin":75,"passPct":60,"maxPoints":sum(q['points'] for q in out),"questions":out}
open('js/mockexam.js','w',encoding='utf-8').write("const MOCKEXAM = "+json.dumps(data,ensure_ascii=False,indent=1)+";\n")
# checks
missing_en=[q['id'] for q in out if not q['q_en']]
print("N",len(out),"maxPoints",data['maxPoints'],"fehlende EN-Stems:",missing_en)
