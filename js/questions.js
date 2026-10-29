/* Fragenkatalog (DE). CHAPTERS + QUESTIONS. Bulk-Edits via scratchpad-Patch → reserialize. */
const CHAPTERS = {
 "1": "Grundlegende Konzepte",
 "2": "Anforderungen & Randbedingungen",
 "3": "Entwurf & Entwicklung",
 "4": "Spezifikation & Kommunikation",
 "5": "Analyse & Bewertung",
 "6": "Beispiele"
};

const QUESTIONS = [
 {
  "id": "c1q1",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zum Begriff Softwarearchitektur treffen im Sinne des CPSA-F zu?",
  "options": [
   "Jedes System hat eine, auch ohne bewussten Entwurf.",
   "Sie umfasst sämtliche Entwurfsentscheidungen eines Systems.",
   "Sie umfasst Bausteine samt Schnittstellen und Beziehungen.",
   "Querschnittsthemen und Prinzipien gehören dazu.",
   "Sie ist gleichbedeutend mit dem gewählten Architekturstil."
  ],
  "correct": [
   0,
   2,
   3
  ],
  "optExpl": [
   "Richtig: Architektur existiert immer – auch wenn sie nie geplant oder dokumentiert wurde. Dokumentation beschreibt sie nur.",
   "Falsch: Übergeneralisierung: Gemeint sind die tragenden, systemweit wirksamen Entscheidungen, nicht jede leicht änderbare Detailentscheidung.",
   "Richtig: Das ist der gemeinsame Kern der Architekturdefinitionen: Bausteine allein ohne ihre Beziehungen beschreiben noch keine Architektur.",
   "Richtig: Das Curriculum zählt Strukturen, Querschnittsthemen (z. B. Persistenz, Fehlerbehandlung) und Prinzipien ausdrücklich zum Kern.",
   "Falsch: Begriffsverwechslung: Ein Stil (z. B. Schichten) prägt die Architektur, umfasst aber nicht Bausteine, Querschnittsthemen und Entscheidungen insgesamt."
  ],
  "explanation": "Kern: Bausteine mit Schnittstellen und Beziehungen, Strukturen, Querschnittsthemen, Prinzipien und tragende Entscheidungen. Falle: nicht jede Entscheidung zählt, und ein Architekturstil ist nur ein Teil davon."
 },
 {
  "id": "c1q2",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen über eine Komponente treffen im Sinne des CPSA-F zu?",
  "options": [
   "Sie kann selbst aus feineren Bausteinen bestehen.",
   "Sie darf keine Abhängigkeiten zu anderen Bausteinen haben.",
   "Sie entspricht genau einem Verteilungsartefakt.",
   "Sie wird über Schnittstellen genutzt; ihr Inneres bleibt verborgen.",
   "Bei gleicher Schnittstellensignatur ist sie austauschbar.",
   "Sie kann mehrere Schnittstellen anbieten."
  ],
  "correct": [
   0,
   3,
   5
  ],
  "optExpl": [
   "Richtig: Bausteine sind hierarchisch; in der Whitebox-Sicht kann eine Komponente aus feineren Bausteinen zusammengesetzt sein.",
   "Falsch: Übergeneralisierung von loser Kopplung: Komponenten dürfen benötigte Schnittstellen haben – Abhängigkeiten sollen klar definiert, nicht ausgeschlossen sein.",
   "Falsch: Vermengt Baustein- und Verteilungssicht: Ein Artefakt kann mehrere Bausteine enthalten und umgekehrt.",
   "Richtig: Das Blackbox-Prinzip: Nutzer kennen nur den Vertrag, die Realisierung lässt sich ändern, ohne sie anzupassen.",
   "Falsch: Die Signatur deckt nur Namen und Typen ab; Austauschbarkeit verlangt denselben Kontrakt inkl. Semantik und Zusicherungen.",
   "Richtig: Ein Baustein darf mehrere Schnittstellen haben, etwa für unterschiedliche Nutzergruppen."
  ],
  "explanation": "Eine Komponente ist ein Baustein: hierarchisch, gekapselt, ggf. mit mehreren Schnittstellen. Fallen: lose Kopplung heißt nicht „keine Abhängigkeiten“, Signatur ≠ Kontrakt, Baustein ≠ Artefakt."
 },
 {
  "id": "c1q3",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R2",
  "type": "single",
  "q": "In einer Architekturdokumentation wird ein Subsystem an einer Stelle als Blackbox, an anderer als Whitebox beschrieben. Was trifft am ehesten zu?",
  "options": [
   "Die Blackbox beschreibt die angebotenen Schnittstellen; die benötigten Schnittstellen gehören dagegen erst in die Whitebox.",
   "Die Whitebox zeigt die enthaltenen Bausteine; deren Blackbox-Beschreibungen gehören jedoch erst auf die nächste Verfeinerungsebene, nicht in diese Whitebox.",
   "Die Whitebox darf zusätzliche externe Schnittstellen einführen, die in der Blackbox nicht vorkommen, weil sie detaillierter ist.",
   "Die Whitebox muss zur Blackbox passen: Sie zeigt die inneren Bausteine, ihr Zusammenspiel und wie die Schnittstellen der Blackbox intern bedient werden."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Auch benötigte Schnittstellen sind Teil der Außensicht, denn sie zeigen, wovon der Baustein abhängt. Wer ihn einsetzen will, muss diese Abhängigkeiten kennen – daher gehören sie in die Blackbox.",
   "Falsch: Eine Whitebox beschreibt ihre enthaltenen Bausteine gerade als Blackboxes (Verantwortung, Schnittstellen). Erst wenn man einen davon öffnet, folgt auf der nächsten Ebene dessen eigene Whitebox.",
   "Falsch: Mehr Detail heißt nicht mehr Außenkontakt: Externe Schnittstellen, die nur in der Whitebox auftauchen, machen beide Sichten inkonsistent. Die Whitebox verfeinert, sie erweitert die Außensicht nicht.",
   "Richtig: Die Whitebox ist die Innensicht desselben Bausteins und muss zu dessen Außensicht konsistent sein. Sie zeigt die enthaltenen Bausteine, ihr Zusammenspiel und welche davon die äußeren Schnittstellen realisieren."
  ],
  "explanation": "Blackbox = Außensicht mit angebotenen UND benötigten Schnittstellen und Verantwortung. Whitebox = Innensicht, konsistent zur Blackbox; ihre inneren Bausteine beschreibt sie selbst wieder als Blackboxes."
 },
 {
  "id": "c1q4",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zu Architektursichten treffen zu?",
  "options": [
   "Sichten dürfen sich widersprechen, da sie verschiedene Zielgruppen bedienen.",
   "Die Bausteinsicht zeigt, welche Bausteine wann kommunizieren.",
   "Die Verteilungssicht ordnet Artefakte Infrastrukturknoten zu.",
   "Die Laufzeitsicht zeigt das Zusammenwirken von Bausteinen in Szenarien.",
   "Die Kontextsicht zeigt die oberste Zerlegungsebene des Systems."
  ],
  "correct": [
   2,
   3
  ],
  "optExpl": [
   "Falsch: Sichten zeigen verschiedene Aspekte desselben Systems und müssen daher konsistent sein; Widersprüche sind Fehler.",
   "Falsch: Das „wann“ ist Laufzeitsicht. Die Bausteinsicht zeigt die statische Zerlegung und Abhängigkeiten.",
   "Richtig: Sie zeigt, auf welchen Knoten die Artefakte laufen und über welche Kanäle diese verbunden sind.",
   "Richtig: Sie beschreibt das dynamische Verhalten, etwa als Sequenzdiagramm für einen konkreten Ablauf.",
   "Falsch: Verwechslung mit Ebene 1 der Bausteinsicht: Die Kontextsicht zeigt das System als Blackbox mit seinen externen Nachbarn."
  ],
  "explanation": "Laufzeitsicht = dynamisches Zusammenspiel, Verteilungssicht = Artefakte auf Knoten. Falle: Kontextsicht ist keine Zerlegungsebene, und das zeitliche Verhalten gehört nicht in die Bausteinsicht."
 },
 {
  "id": "c1q5",
  "chapter": 1,
  "lz": "LZ 01-04",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aufgaben ordnet das Curriculum Softwarearchitekt:innen zu?",
  "options": [
   "Konsequenzen von Entscheidungen gegenüber Stakeholdern argumentieren.",
   "Konsistenz von Quellcode und Architektur sicherstellen.",
   "Anforderungen und Randbedingungen hinterfragen.",
   "Budget und Personalplanung des Projekts verantworten.",
   "Die Reihenfolge der Features im Backlog festlegen.",
   "Systemzerlegung, Abhängigkeiten und Schnittstellen festlegen."
  ],
  "correct": [
   0,
   1,
   2,
   5
  ],
  "optExpl": [
   "Richtig: Das Curriculum verlangt, Konsequenzen zu erkennen, aufzuzeigen und gegenüber Stakeholdern zu vertreten.",
   "Richtig: Zur Begleitung der Umsetzung gehört, die Übereinstimmung von Code und Architektur zu prüfen und sicherzustellen.",
   "Richtig: Klären und Hinterfragen von Anforderungen und Randbedingungen samt Abstimmung mit Stakeholdern ist eine explizite Aufgabe.",
   "Falsch: Termine, Budget und Personal verantwortet die Projektleitung; Architekt:innen liefern die technischen Konsequenzen dazu.",
   "Falsch: Die fachliche Priorisierung liegt beim Product Owner; Architekt:innen beraten etwa zu technischen Abhängigkeiten.",
   "Richtig: Strukturentscheidungen zur Bausteinstruktur, zu Abhängigkeiten und Schnittstellen sind eine Kernaufgabe."
  ],
  "explanation": "Architekt:innen verantworten die Lösung: Anforderungen klären, strukturieren, Konsistenz sichern, Konsequenzen vertreten. Falle: Budget/Personal (Projektleitung) und Backlog-Reihenfolge (PO) gehören nicht dazu."
 },
 {
  "id": "c1q6",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zu interner und externer Softwarequalität treffen zu?",
  "options": [
   "Externe Qualität ist für Nutzer im Betrieb wahrnehmbar.",
   "Wartbarkeit zählt zur externen Qualität.",
   "Hohe externe Qualität belegt eine gute interne Struktur.",
   "Interne Qualität lässt sich über Blackbox-Tests messen.",
   "Schwache interne Qualität kann langfristig die externe senken."
  ],
  "correct": [
   0,
   4
  ],
  "optExpl": [
   "Richtig: Performanz, Zuverlässigkeit oder Benutzbarkeit zeigen sich am laufenden System.",
   "Falsch: Wartbarkeit betrifft die innere Struktur und ist intern – auch wenn sie sich indirekt auf Nutzer auswirkt.",
   "Falsch: Ursache und Wirkung verdreht: Ein System kann heute gut funktionieren und trotzdem kaum wartbar sein.",
   "Falsch: Blackbox-Tests prüfen nur beobachtbares Verhalten; interne Qualität erfordert z. B. Code-Analysen oder Reviews.",
   "Richtig: Schlechte Struktur führt über die Zeit zu mehr Fehlern und langsameren Änderungen, was Nutzer dann bemerken."
  ],
  "explanation": "Extern = im Betrieb wahrnehmbar, intern = Struktur; schwache interne Qualität schlägt langfristig nach außen durch. Falle: Der Umkehrschluss gilt nicht – gute externe Qualität beweist keine gute Struktur."
 },
 {
  "id": "c1q7",
  "chapter": 1,
  "lz": "LZ 01-02",
  "r": "R2",
  "type": "single",
  "q": "Ein Team muss den Architekturstil festlegen, obwohl wichtige Anforderungen noch offen sind. Was ist am ehesten angemessen?",
  "options": [
   "Zuerst ein detailliertes Feindesign aller Bausteine erstellen.",
   "Ein ADR schreiben, damit die Entscheidung günstig umkehrbar bleibt.",
   "Entscheiden, sobald alle Anforderungen abgenommen sind.",
   "Entscheiden, Annahmen festhalten und später überprüfen."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Big Design Up Front beruht auf demselben unvollständigen Wissen und verlagert die Unsicherheit nur in einen Plan.",
   "Falsch: Ein ADR macht die Entscheidung nachvollziehbar, aber nicht billiger umkehrbar – ein Stilwechsel bleibt teuer.",
   "Falsch: Anforderungen sind praktisch nie vollständig; Warten verschiebt Risiken nur nach hinten.",
   "Richtig: Architekturarbeit geschieht unter Unsicherheit; explizite Annahmen machen spätere Überprüfung und Iteration möglich."
  ],
  "explanation": "Unter Unsicherheit bewusst entscheiden, Annahmen dokumentieren und iterativ prüfen. Falle: Ein ADR schafft Nachvollziehbarkeit, keine billige Umkehrbarkeit."
 },
 {
  "id": "c1q8",
  "chapter": 1,
  "lz": "LZ 01-02",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zum Verhältnis von Architektur und Anforderungen treffen zu?",
  "options": [
   "Die Architektur legt fest, welche Features das System bietet.",
   "Randbedingungen schränken den Lösungsraum von Beginn an ein.",
   "Architekturentscheidungen können neue Anforderungen erzeugen.",
   "Qualitätsanforderungen prägen vor allem die Grobstruktur.",
   "Funktionale Anforderungen legen die Bausteinstruktur eindeutig fest."
  ],
  "correct": [
   1,
   2,
   3
  ],
  "optExpl": [
   "Falsch: Die Features bestimmen die Stakeholder; Architektur macht geforderte Funktionen und Qualitäten erreichbar.",
   "Richtig: Vorgaben wie Technologien oder Budget müssen von Anfang an in den Entwurf einfließen.",
   "Richtig: Wer sich etwa für Cloud-Betrieb entscheidet, bekommt neue Betriebs-, Sicherheits- und Kostenanforderungen.",
   "Richtig: Funktionen lassen sich mit vielen Strukturen umsetzen; erst Qualitätsanforderungen schränken die Lösung wirklich ein.",
   "Falsch: Dieselbe Funktionalität lässt viele Strukturen zu; eindeutig festgelegt wird die Struktur dadurch nicht."
  ],
  "explanation": "Qualitätsanforderungen und Randbedingungen prägen die Struktur, und Entscheidungen wirken auf Anforderungen zurück. Falle: Architektur bestimmt nicht den Funktionsumfang."
 },
 {
  "id": "c1q9",
  "chapter": 1,
  "lz": "LZ 01-04",
  "r": "R1",
  "type": "single",
  "q": "Welche Tätigkeit gehört laut Curriculum am wenigsten zu den Aufgaben von Softwarearchitekt:innen?",
  "options": [
   "Über das GUI-Konzept als Querschnittsthema entscheiden.",
   "Selbstständig erkennen, wann eine weitere Iteration nötig ist.",
   "Die Architektur hinsichtlich Risiken analysieren und bewerten.",
   "Das Layout einzelner Bildschirmmasken gestalten."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Das Curriculum nennt GUI ausdrücklich neben Persistenz und Kommunikation als Querschnittsthema, über das Architekt:innen entscheiden.",
   "Falsch: Das Curriculum verlangt bei allen Aufgaben, den Bedarf an Iterationen zu erkennen und Rückmeldung zu ermöglichen.",
   "Falsch: Analysieren und Bewerten, insbesondere bezüglich Risiken für die Anforderungen, ist eine genannte Aufgabe.",
   "Richtig: Detailliertes Oberflächendesign verantwortet die UX-/UI-Gestaltung; die Architektur legt die GUI nur als Querschnittsthema fest."
  ],
  "explanation": "Das GUI-Konzept als Querschnittsthema gehört zur Architektur, das Layout einzelner Masken nicht. Falle: „GUI“ klingt nach UX, ist aber explizit ein Querschnittsthema."
 },
 {
  "id": "k5",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Ein Kollege fasst Kernbegriffe der Softwarearchitektur zusammen. Bewerten Sie jede Aussage: richtig oder falsch?",
  "categories": [
   "Richtig",
   "Falsch"
  ],
  "rows": [
   {
    "text": "Eine Liste der Bausteine samt ihren Schnittstellen beschreibt bereits die Architektur.",
    "cat": 1
   },
   {
    "text": "Jede Komponente ist ein Baustein, aber nicht jeder Baustein ist eine Komponente.",
    "cat": 0
   },
   {
    "text": "Auch ein System, dessen Architektur nie bewusst entworfen wurde, hat eine Architektur.",
    "cat": 0
   },
   {
    "text": "Komponente ist der Oberbegriff, Baustein eine spezielle Ausprägung davon.",
    "cat": 1
   },
   {
    "text": "Eine Schnittstelle kann neben angebotenen auch benötigte Operationen beschreiben.",
    "cat": 0
   },
   {
    "text": "Die Architektur eines Systems lässt sich vollständig aus seinem Quellcode ablesen.",
    "cat": 1
   }
  ],
  "explanation": "Baustein ist der Oberbegriff, Komponente eine Ausprägung – die Umkehrung ist die Falle. Ohne Beziehungen zwischen den Bausteinen ist noch keine Architektur beschrieben, und Entscheidungen samt Begründungen stehen nicht im Code."
 },
 {
  "id": "c1q10",
  "chapter": 1,
  "lz": "LZ 01-02",
  "r": "R1",
  "type": "multi",
  "q": "Welche drei Aussagen beschreiben laut CPSA-F-Curriculum Ziele von Softwarearchitektur?",
  "options": [
   "Sicherstellen, dass auch die funktionalen Anforderungen erreichbar sind.",
   "Die Bausteine so detailliert vorgeben, dass die Implementierung keine eigenen Entwurfsentscheidungen mehr treffen muss.",
   "Ein gemeinsames Verständnis der Strukturen und Konzepte bei allen relevanten Stakeholdern sicherstellen.",
   "Architekturrelevante Richtlinien für Implementierung und Betrieb spezifizieren.",
   "Das System so flexibel auslegen, dass künftige Anforderungen ohne Strukturänderungen umsetzbar sind.",
   "Die Qualitätsanforderungen festlegen, die das System erfüllen muss."
  ],
  "correct": [
   0,
   2,
   3
  ],
  "optExpl": [
   "Richtig: Architektur dient nicht nur den Qualitäten: Laut Curriculum soll sie auch die Erfüllbarkeit der funktionalen Anforderungen sicherstellen. Die Struktur muss die Funktionen tragen können.",
   "Falsch: Architektur legt die tragenden Strukturen fest, nicht jedes Detail. Detailentwurf innerhalb der Bausteine bleibt Aufgabe der Entwicklung – alles vorzugeben wäre weder möglich noch sinnvoll.",
   "Richtig: Architektur ist auch Kommunikationsmittel: Sie sorgt dafür, dass alle relevanten Stakeholder dasselbe Bild vom System haben. Sonst laufen Entscheidungen und Umsetzung auseinander.",
   "Richtig: Das nennt das Curriculum ausdrücklich als Ziel: Architektur legt Richtlinien fest, die für Struktur und Qualitäten wichtig sind, etwa zur Fehlerbehandlung oder zum Betrieb. Gemeint sind keine Stilregeln für jede Codezeile.",
   "Falsch: Das klingt nach Wartbarkeit, ist aber Überkonstruktion: Unbekannte Zukunftsanforderungen kann niemand vollständig vorwegnehmen. Ziel ist angemessene Änderbarkeit, nicht Änderungsfreiheit.",
   "Falsch: Qualitätsanforderungen kommen von den Stakeholdern. Architektur soll sie erreichen und dabei hinterfragen und klären – festlegen tut sie sie nicht."
  ],
  "explanation": "Ziele laut Curriculum u. a.: Erfüllbarkeit funktionaler Anforderungen, Erreichen der Qualitätsanforderungen, gemeinsames Verständnis, Komplexität reduzieren, architekturrelevante Richtlinien für Implementierung und Betrieb. Anforderungen festlegen, alles vorab flexibel machen oder jedes Detail vorgeben gehört nicht dazu."
 },
 {
  "id": "c1q11",
  "chapter": 1,
  "lz": "LZ 01-06",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen über Stakeholder einer Softwarearchitektur treffen zu?",
  "options": [
   "Stakeholder sind die Personen mit Entscheidungsbefugnis.",
   "Interessenkonflikte zwischen ihnen klärt man gemeinsam mit ihnen.",
   "Das Entwicklungsteam zählt nicht dazu, da es umsetzt.",
   "Ihr Kreis steht nach der Anforderungsphase fest.",
   "Auch der IT-Betrieb kann ein Stakeholder sein.",
   "Bei eingebetteten Systemen zählt die Hardwareentwicklung dazu."
  ],
  "correct": [
   1,
   4,
   5
  ],
  "optExpl": [
   "Falsch: Zu eng: Stakeholder sind alle mit berechtigtem Interesse am System, nicht nur Auftraggeber oder Management.",
   "Richtig: Verantwortung heißt nicht Alleinentscheidung: Konflikte werden transparent gemacht und mit den Stakeholdern gelöst.",
   "Falsch: Die Entwicklung ist ausdrücklich ein Stakeholder – sie muss die Architektur verstehen und umsetzen können.",
   "Falsch: Im Lauf des Projekts kommen oft neue Stakeholder hinzu; die Liste wird gepflegt.",
   "Richtig: Betrieb, Rechenzentren und Produktion zählt das Curriculum ausdrücklich zu den Partnern der Architekturrolle.",
   "Richtig: Gerade bei hardwarenahen Systemen nennt das Curriculum Hardwareentwicklung und Systemarchitektur als Stakeholder."
  ],
  "explanation": "Stakeholder sind alle mit berechtigtem Interesse – inkl. Betrieb, Entwicklung und ggf. Hardwareentwicklung. Falle: nicht nur Entscheider, und der Kreis ist nicht statisch."
 },
 {
  "id": "c1q12",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R1",
  "type": "multi",
  "q": "Welche Eigenschaften kennzeichnen am ehesten einen gut geschnittenen Baustein?",
  "options": [
   "Lose Kopplung zu anderen Bausteinen.",
   "Hohe Kohäsion zwischen benachbarten Bausteinen.",
   "Möglichst feine Granularität.",
   "Möglichst viele öffentliche Operationen für Flexibilität.",
   "Hohe Kohäsion innerhalb des Bausteins."
  ],
  "correct": [
   0,
   4
  ],
  "optExpl": [
   "Richtig: Wenige, klar definierte Abhängigkeiten über Schnittstellen begrenzen die Auswirkungen von Änderungen.",
   "Falsch: Begriffsverwechslung: Kohäsion bezieht sich auf das Innere eines Bausteins; enge Verflechtung zwischen Bausteinen ist Kopplung.",
   "Falsch: Kleine Bausteine sind nicht automatisch kohäsiv; zu feine Schnitte erhöhen oft die Kopplung.",
   "Falsch: Breite Schnittstellen legen Interna offen und erhöhen die Kopplung der Nutzer an den Baustein.",
   "Richtig: Zusammengehörige Aufgaben sind gebündelt; Änderungen bleiben dadurch lokal."
  ],
  "explanation": "Gut geschnitten = hohe Kohäsion innen, lose Kopplung nach außen. Falle: Kohäsion gilt im Baustein, nicht zwischen Bausteinen, und „klein“ ist nicht gleich „kohäsiv“."
 },
 {
  "id": "c1q13",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zur Schnittstelle eines Bausteins treffen zu?",
  "options": [
   "Sie umfasst die Signaturen, nicht aber Zusicherungen.",
   "Sie kann angebotene und benötigte Operationen umfassen.",
   "Sie kann stabil bleiben, wenn sich die Implementierung ändert.",
   "Sie wird stets von genau einem Baustein genutzt.",
   "Sie beschreibt die interne Datenstruktur des Bausteins."
  ],
  "correct": [
   1,
   2
  ],
  "optExpl": [
   "Falsch: Zu eng: Zum Vertrag gehören auch Zusicherungen wie Vor- und Nachbedingungen oder Fehlerverhalten.",
   "Richtig: Die Schnittstelle ist der nach außen sichtbare Vertrag – angebotene und ggf. benötigte Operationen samt Zusicherungen.",
   "Richtig: Genau das ist der Zweck der Kapselung: Interna ändern sich, der Vertrag bleibt.",
   "Falsch: Eine Schnittstelle kann beliebig viele Nutzer haben; das ist oft der Grund für ihre Stabilitätsanforderung.",
   "Falsch: Interne Datenstrukturen sind Implementierungsdetail; die Schnittstelle soll sie gerade verbergen."
  ],
  "explanation": "Die Schnittstelle ist ein Vertrag aus angebotenen/benötigten Operationen und Zusicherungen und verbirgt die Interna. Falle: Signatur allein ist noch kein vollständiger Vertrag."
 },
 {
  "id": "c1q14",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R1",
  "type": "single",
  "q": "Welche Aussage beschreibt die Verantwortlichkeit eines Bausteins am zutreffendsten?",
  "options": [
   "Die abgegrenzte Aufgabe, für die er zuständig ist.",
   "Die Technologie, mit der er umgesetzt wird.",
   "Die Summe seiner öffentlichen Operationen.",
   "Das Team, das ihn entwickelt und betreibt."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Verantwortlichkeit ist das WAS: eine klar umrissene, kohäsive Aufgabe, abgegrenzt von anderen Bausteinen.",
   "Falsch: Das ist das WIE der Realisierung, nicht das WAS, für das der Baustein steht.",
   "Falsch: Die Operationen realisieren die Verantwortlichkeit nach außen, definieren sie aber nicht vollständig.",
   "Falsch: Verwechslung mit organisatorischer Zuständigkeit: Gemeint ist die fachlich-technische Aufgabe des Bausteins."
  ],
  "explanation": "Verantwortlichkeit = das WAS, eine abgegrenzte, kohäsive Aufgabe. Falle: weder die Operationsliste noch Technologie noch Team-Zuständigkeit."
 },
 {
  "id": "c1q15",
  "chapter": 1,
  "lz": "LZ 01-02",
  "r": "R1",
  "type": "multi",
  "q": "In einem Projekt weicht der Code mit der Zeit von der dokumentierten Architektur ab. Welche Aussagen treffen zu?",
  "options": [
   "Der Code ist maßgeblich; die Dokumentation wird nachgezogen.",
   "Es droht Architekturerosion.",
   "Reviews und Abhängigkeitsprüfungen können Abweichungen aufdecken.",
   "Grüne Tests zeigen, dass die Abweichung unkritisch ist.",
   "Je Abweichung entscheiden: Code zurückführen oder Architektur anpassen."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Falsch: Übergeneralisierung: Pauschales Nachziehen legalisiert auch ungewollte Verstöße und gibt Ziele stillschweigend auf.",
   "Richtig: Soll- und Ist-Architektur driften auseinander; die geplanten Qualitäten gehen schleichend verloren.",
   "Richtig: Manuelle Reviews und toolgestützte Prüfungen von Abhängigkeiten machen Verstöße sichtbar.",
   "Falsch: Tests prüfen Funktionalität, nicht Struktur; Wartbarkeit kann trotz grüner Tests leiden.",
   "Richtig: Manche Abweichungen sind Fehler, andere berechtigte Erkenntnisse – das muss bewusst entschieden werden."
  ],
  "explanation": "Abweichungen bedeuten Erosionsgefahr; man deckt sie auf und entscheidet je Fall bewusst. Falle: grüne Tests sagen nichts über die Struktur aus."
 },
 {
  "id": "c1q16",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R2",
  "type": "multi",
  "q": "Wie verhält sich Softwarearchitektur zu den Abstraktionsebenen eines Systems?",
  "options": [
   "Architekturrelevant ist nur die oberste Zerlegungsebene.",
   "Kohäsion und Kopplung gelten auf jeder Zerlegungsebene.",
   "Die Ebenen entsprechen Kontext-, Baustein-, Laufzeit- und Verteilungssicht.",
   "Entscheidungen einer Ebene wirken nicht auf tiefere Ebenen.",
   "Jeder Baustein lässt sich als Black- oder Whitebox betrachten."
  ],
  "correct": [
   1,
   4
  ],
  "optExpl": [
   "Falsch: Auch tiefere Ebenen können tragende Entscheidungen enthalten; die Bausteinsicht hat bewusst mehrere Ebenen.",
   "Richtig: Die Entwurfsprinzipien greifen rekursiv – vom Gesamtsystem bis zu feinen Bausteinen.",
   "Falsch: Verwechslung von Ebenen und Sichten: Sichten sind Perspektiven, Ebenen die Verfeinerungstiefe innerhalb einer Sicht.",
   "Falsch: Übergeordnete Entscheidungen setzen den Rahmen für die Verfeinerung; die Ebenen sind nicht voneinander isoliert.",
   "Richtig: Auf jeder Ebene kann man einen Baustein von außen (Blackbox) oder in seiner inneren Zerlegung (Whitebox) zeigen."
  ],
  "explanation": "Architektur beschreibt geschachtelte Ebenen; Prinzipien und Black-/Whitebox-Betrachtung gelten auf jeder davon. Falle: Ebenen sind keine Sichten."
 },
 {
  "id": "c1q17",
  "chapter": 1,
  "lz": "LZ 01-02",
  "r": "R1",
  "type": "multi",
  "q": "Welche der folgenden Punkte nennt das Curriculum als Ziele von Softwarearchitektur?",
  "options": [
   "Verständnis bei den relevanten Stakeholdern sicherstellen.",
   "Komplexität systematisch reduzieren.",
   "Den Funktionsumfang des Systems festlegen.",
   "Richtlinien für Implementierung und Betrieb festlegen.",
   "Einhaltung von Budget und Terminen sicherstellen.",
   "Künftige Änderungen jeder Art günstig machen."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Richtig: Strukturen und Konzepte sollen allen relevanten Stakeholdern verständlich sein.",
   "Richtig: Durch Zerlegung, Abstraktion und klare Zuständigkeiten – eines der sechs Ziele.",
   "Falsch: Den Funktionsumfang bestimmen die Stakeholder; Architektur stellt sicher, dass er sich umsetzen lässt.",
   "Richtig: Leicht übersehen: Architekturrelevante Richtlinien für Implementierung und Betrieb sind ein eigenes Ziel.",
   "Falsch: Architektur kann Planung unterstützen, garantiert aber weder Budget- noch Termintreue.",
   "Falsch: Nur vorhergesehene Änderungen lassen sich gezielt erleichtern; Architektur macht nicht jede Änderung billig."
  ],
  "explanation": "Ziele: Umsetzung unterstützen, Funktionen und Qualitäten erreichen, Verständnis, Komplexität reduzieren, Richtlinien. Falle: keine Budget-/Termingarantie und keine Festlegung der Features."
 },
 {
  "id": "c1q18",
  "chapter": 1,
  "lz": "LZ 01-02",
  "r": "R2",
  "type": "single",
  "q": "Was kennzeichnet am ehesten ein iteratives Vorgehen bei der Architekturarbeit?",
  "options": [
   "Tragende Entscheidungen bis zur letzten Iteration aufschieben.",
   "Die Architektur rein emergent aus dem Code entstehen lassen.",
   "Früh entscheiden und anhand neuer Erkenntnisse verfeinern.",
   "Die Architektur in jeder Iteration neu entwerfen."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Aufschieben verschiebt nur Risiken; iterativ heißt nicht, Entscheidungen zu vermeiden.",
   "Falsch: Ohne bewusste übergreifende Entscheidungen fehlt die Ausrichtung auf Qualitätsziele.",
   "Richtig: Tragende Entscheidungen fallen früh und werden über Iterationen überprüft und angepasst.",
   "Falsch: Iterationen verfeinern und korrigieren; ein Neuentwurf je Iteration würde tragende Entscheidungen entwerten."
  ],
  "explanation": "Iterativ = früh entscheiden, dann überprüfen und verfeinern. Falle: weder Aufschieben noch rein emergente Architektur noch ständiger Neuentwurf."
 },
 {
  "id": "c1q19",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R2",
  "type": "single",
  "q": "Worin unterscheiden sich Softwarearchitektur und Detailentwurf am ehesten?",
  "options": [
   "Architektur umfasst die übergreifenden, schwer änderbaren Entscheidungen.",
   "Architektur entsteht vor, Detailentwurf nach einem festen Meilenstein.",
   "Ab einer festen Bausteingröße beginnt der Detailentwurf.",
   "Architektur beschreibt die Struktur, Detailentwurf das Verhalten."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Architektur trifft die systemweit tragenden Entscheidungen; der Detailentwurf konkretisiert innerhalb dieser Vorgaben.",
   "Falsch: Beide entwickeln sich iterativ und parallel. Ein fester Phasenübergang widerspricht dem iterativen Vorgehen.",
   "Falsch: Die Grenze ist projektabhängig und ergibt sich aus der Tragweite einer Entscheidung, nicht aus einer Größe.",
   "Falsch: Beide umfassen Struktur und Verhalten – auch Architektur hat z. B. eine Laufzeitsicht. Der Unterschied liegt in der Tragweite der Entscheidungen."
  ],
  "explanation": "Architektur = übergreifende, schwer änderbare Entscheidungen; Detailentwurf = Konkretisierung innerhalb dieser Vorgaben. Die Grenze ist weder zeitlich noch über eine Größe festgelegt, und beide umfassen Struktur wie Verhalten."
 },
 {
  "id": "c1q20",
  "chapter": 1,
  "lz": "LZ 01-06",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aspekte guter Kommunikation erwartet das Curriculum von Softwarearchitekt:innen?",
  "options": [
   "Primär die Entwicklung adressieren; Fachbereiche erreicht der PO.",
   "Aktiv zuhören, um Anliegen zu verstehen.",
   "Vor allem das fertige Ergebnis überzeugend präsentieren.",
   "Mündlich abstimmen, statt Entscheidungen schriftlich zu begründen.",
   "Zwischen Stakeholdern vermitteln.",
   "Entscheidungen zielgruppengerecht begründen."
  ],
  "correct": [
   1,
   4,
   5
  ],
  "optExpl": [
   "Falsch: Zu eng: Architekt:innen kommunizieren selbst mit allen relevanten Stakeholdern, auch mit der Fachseite.",
   "Richtig: Kommunikation ist keine Einbahnstraße; Zuhören gehört laut Curriculum ausdrücklich dazu.",
   "Falsch: Kommunikation ist während des gesamten Entwurfs zentral, nicht erst am Ende.",
   "Falsch: Mündliche Abstimmung ergänzt, ersetzt aber nicht die dokumentierte, nachvollziehbare Begründung.",
   "Richtig: Architekt:innen stehen zwischen Fachseite, Entwicklung, Betrieb und Management und müssen Interessen ausgleichen.",
   "Richtig: Dieselbe Entscheidung wird dem Management anders erklärt als der Entwicklung – Inhalt gleich, Darstellung angepasst."
  ],
  "explanation": "Vermitteln, zuhören, zielgruppengerecht begründen – laufend während des Entwurfs. Falle: Kommunikation ist kein Abschlussvortrag und kein Ersatz für Dokumentation."
 },
 {
  "id": "c1q21",
  "chapter": 1,
  "lz": "LZ 01-02",
  "r": "R2",
  "type": "single",
  "q": "Ein Team ist unsicher, ob das gewählte Messaging-Produkt die geforderte Last trägt. Wozu dient ein früher Proof of Concept hier am ehesten?",
  "options": [
   "Das technische Risiko und die Machbarkeit früh prüfen.",
   "Den Gesamtaufwand des Projekts verbindlich festlegen.",
   "Eine erste produktionsreife Version ausliefern.",
   "Alle Fachfunktionen einmal end-to-end umsetzen."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Ein PoC prüft gezielt eine riskante Annahme einer tragenden Entscheidung, bevor viel darauf aufgebaut wird.",
   "Falsch: Ein PoC liefert Erkenntnisse für Schätzungen, aber keine verbindliche Aufwandsfestlegung.",
   "Falsch: Verwechslung mit MVP/Inkrement: Ein PoC ist bewusst nicht produktionsreif.",
   "Falsch: Ein PoC zielt auf ein konkretes Risiko, nicht auf fachliche Vollständigkeit."
  ],
  "explanation": "Ein PoC prüft früh riskante Annahmen tragender Entscheidungen. Falle: Er ist weder ein MVP noch fachlich vollständig noch eine verbindliche Schätzung."
 },
 {
  "id": "c1q22",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R1",
  "type": "multi",
  "q": "Was kennzeichnet eine „gute“ Softwarearchitektur am ehesten?",
  "options": [
   "Sie optimiert alle Qualitätsmerkmale gleichzeitig.",
   "Sie ist so einfach wie möglich, aber nicht einfacher.",
   "Sie erfüllt die Qualitätsziele unter den gegebenen Randbedingungen.",
   "Sie ist auf möglichst viele künftige Anforderungen vorbereitet.",
   "Ihre Güte ergibt sich aus den eingesetzten bewährten Mustern."
  ],
  "correct": [
   1,
   2
  ],
  "optExpl": [
   "Falsch: Qualitätsmerkmale konkurrieren (z. B. Sicherheit ↔ Benutzbarkeit); gute Architektur wägt bewusst ab.",
   "Richtig: Unnötige Komplexität erschwert Verständnis und Wartung; zu starke Vereinfachung verfehlt die Anforderungen.",
   "Richtig: Güte ist relativ zu Zielen und Randbedingungen – es gibt keine kontextfrei beste Architektur.",
   "Falsch: Vorratshaltung ohne konkreten Bedarf ist Überkonstruktion und erhöht die Komplexität.",
   "Falsch: Muster sind Werkzeuge; ob sie passen, entscheidet der Kontext – sie garantieren keine Qualität."
  ],
  "explanation": "Gut = Ziele unter Randbedingungen erreicht und so einfach wie möglich. Falle: Muster, Vorratshaltung oder „alles maximal“ machen eine Architektur nicht gut."
 },
 {
  "id": "c1q23",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R2",
  "type": "single",
  "q": "Wie grenzt man die Begriffe „Baustein“ und „Komponente“ am zutreffendsten ab?",
  "options": [
   "Eine Komponente fasst stets mehrere Bausteine zusammen.",
   "Baustein ist der Oberbegriff, Komponente eine spezielle Ausprägung.",
   "Baustein ist eine Entwurfs-, Komponente eine Laufzeiteinheit.",
   "Komponente ist der Oberbegriff, Baustein eine spezielle Ausprägung."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Keine Größenfrage: Auch ein einzelner, feiner Baustein kann eine Komponente sein.",
   "Richtig: Jede Komponente ist ein Baustein, aber nicht jeder Baustein eine Komponente.",
   "Falsch: Der Unterschied liegt nicht in Entwurfs- vs. Laufzeit; beide sind primär Strukturbegriffe.",
   "Falsch: Genau vertauscht – eine klassische Prüfungsfalle."
  ],
  "explanation": "Baustein = Oberbegriff, Komponente = spezieller Baustein. Falle: Es geht weder um Laufzeit vs. Entwurf noch um Größe."
 },
 {
  "id": "c1q24",
  "chapter": 1,
  "lz": "LZ 01-05",
  "r": "R2",
  "type": "single",
  "q": "Warum legt das CPSA-F-Curriculum keine einzelne verbindliche Definition von Softwarearchitektur fest?",
  "options": [
   "Es gibt viele Definitionen; vermittelt wird ihr gemeinsamer Kern.",
   "Eine verbindliche Definition folgt erst im Advanced Level.",
   "Die Definition hängt vom gewählten Architekturstil ab.",
   "Eine feste Definition würde den Lösungsraum einengen."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Das Curriculum verweist auf zahlreiche Definitionen und arbeitet deren gemeinsame Aspekte heraus.",
   "Falsch: Verwechslung der Ebenen: Auch das Advanced Level setzt auf denselben Kern statt einer Einzeldefinition.",
   "Falsch: Ein Stil ist eine Lösungsentscheidung; der Architekturbegriff selbst ist stilunabhängig.",
   "Falsch: Definitionen beschreiben den Begriff, nicht Lösungen; der Lösungsraum wird durch Anforderungen und Randbedingungen eingeschränkt."
  ],
  "explanation": "Viele anerkannte Definitionen – das Curriculum nutzt ihren gemeinsamen Kern. Falle: Lösungsraum und Architekturstil haben mit dem Begriff nichts zu tun."
 },
 {
  "id": "c1q25",
  "chapter": 1,
  "lz": "LZ 01-05",
  "r": "R3",
  "type": "single",
  "q": "Worauf liegt der Fokus des CPSA-F laut Curriculum in erster Linie?",
  "options": [
   "Technische Infrastruktur wie Hardware und Netze.",
   "Die Struktur ganzer Anwendungslandschaften.",
   "Systemübergreifende Struktur und Nutzung von Daten.",
   "Strukturen und Konzepte einzelner Softwaresysteme."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Das ist Infrastruktur- bzw. Technologiearchitektur, ebenfalls nicht im Fokus.",
   "Falsch: Das ist Unternehmens-IT-Architektur – eine eigene Domäne außerhalb des Fokus.",
   "Falsch: Das beschreibt die Informationsarchitektur, die das Curriculum nur abgrenzt.",
   "Richtig: Der Foundation Level behandelt die Architektur einzelner Softwaresysteme."
  ],
  "explanation": "Fokus: einzelne Softwaresysteme. Falle: Unternehmens-, Informations- und Infrastrukturarchitektur sind benachbarte Domänen, die nur abgegrenzt werden."
 },
 {
  "id": "c1q26",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zum Strukturbegriff in der Softwarearchitektur treffen zu?",
  "options": [
   "Die Struktur ergibt sich eindeutig aus der Paketstruktur des Codes.",
   "Ein System hat meist mehrere Strukturen.",
   "Beziehungen zwischen Bausteinen zeigt erst die Laufzeitsicht.",
   "Strukturen werden in der Bausteinsicht beschrieben, nicht in anderen Sichten.",
   "Auch das Zusammenspiel zur Laufzeit ist eine Struktur."
  ],
  "correct": [
   1,
   4
  ],
  "optExpl": [
   "Falsch: Die Paketstruktur ist nur ein Ausschnitt; Laufzeit-, Verteilungsaspekte und Begründungen stehen nicht darin.",
   "Richtig: Statische und dynamische Strukturen existieren nebeneinander und werden über verschiedene Sichten beschrieben.",
   "Falsch: Statische Abhängigkeiten gehören bereits zur Bausteinsicht; Bausteine ohne Beziehungen sind keine Struktur.",
   "Falsch: Zu eng: Auch Laufzeit- und Verteilungssicht beschreiben Strukturen des Systems.",
   "Richtig: Dynamische Strukturen – wie Bausteine zur Laufzeit zusammenwirken – gehören ebenso zur Architektur."
  ],
  "explanation": "Systeme haben mehrere Strukturen, statische wie dynamische. Falle: Beziehungen gehören schon zur statischen Struktur, und Strukturen sind nicht auf eine Sicht oder die Paketstruktur beschränkt."
 },
 {
  "id": "c1q27",
  "chapter": 1,
  "lz": "LZ 01-07",
  "r": "R2",
  "type": "single",
  "q": "Welche Aussage zur Rolle von Datenmodellen in der Architektur trifft am ehesten zu?",
  "options": [
   "Sie werden sinnvollerweise nach der Architektur festgelegt.",
   "Ihr Einfluss beschränkt sich auf die Persistenzschicht.",
   "Sie sind oft langlebig und nachträglich teuer zu ändern.",
   "Ein ORM entkoppelt sie vollständig von der Architektur."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Datenmodelle prägen die Architektur und werden daher mit ihr, nicht nachgelagert entworfen.",
   "Falsch: Daten wirken auf Bausteinschnitt, Sicherheit, Skalierbarkeit und Performance.",
   "Richtig: Daten überdauern oft mehrere Anwendungsgenerationen; ein ungünstiger Schnitt ist teuer zu korrigieren.",
   "Falsch: Ein ORM entkoppelt allenfalls die Speicherrepräsentation, nicht das fachliche Modell von der Struktur."
  ],
  "explanation": "Datenmodelle sind architekturprägend und langlebig. Falle: Ein ORM trennt nur die Repräsentation, nicht den Einfluss der Daten auf die Architektur."
 },
 {
  "id": "c1q28",
  "chapter": 1,
  "lz": "LZ 01-07",
  "r": "R2",
  "type": "single",
  "q": "Auf welchen Abstraktionsebenen werden Datenmodelle typischerweise beschrieben?",
  "options": [
   "Fachlich, logisch und als Übertragungsformat.",
   "Konzeptionell, logisch und physisch.",
   "Konzeptionell, logisch und normalisiert.",
   "Kontext-, Baustein- und Verteilungsebene."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Halbwahrheit: Übertragungsformate wie JSON sind eine Repräsentation, von der das Datenmodell gerade entkoppelt sein soll.",
   "Richtig: Fachliches Modell, technologieneutrale Struktur und konkrete Umsetzung in einem Speicher – die klassische Dreiteilung.",
   "Falsch: Normalisierung ist eine Technik auf logischer Ebene, keine eigene Abstraktionsebene.",
   "Falsch: Verwechslung mit den Architektursichten, die Systemstrukturen beschreiben, nicht Datenmodelle."
  ],
  "explanation": "Konzeptionell – logisch – physisch. Falle: Normalisierung ist eine Technik und ein Übertragungsformat nur eine Repräsentation, keine Modellebene."
 },
 {
  "id": "c1q29",
  "chapter": 1,
  "lz": "LZ 01-07",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zum Zusammenhang von Datenmodell und Architektur treffen zu?",
  "options": [
   "Ein von vielen Bausteinen direkt geteiltes Datenmodell erhöht die Kopplung.",
   "Ein Summentyp lässt beliebige Kombinationen seiner Varianten zu.",
   "Bausteine dürfen für dasselbe Fachobjekt eigene Modelle haben.",
   "Das Datenbankschema sollte dem Fachmodell 1:1 entsprechen.",
   "Ein Schema je Service genügt, auch bei gegenseitigem Lesezugriff.",
   "Datenhoheit beeinflusst den fachlichen Schnitt der Bausteine."
  ],
  "correct": [
   0,
   2,
   5
  ],
  "optExpl": [
   "Richtig: Jede Änderung am gemeinsamen Modell trifft alle Nutzer – die Bausteine sind über die Daten eng verbunden.",
   "Falsch: Vertauscht mit Produkt: Eine Summe ist genau eine der Varianten (ODER); so lassen sich ungültige Kombinationen ausschließen.",
   "Richtig: Ein „Kunde“ kann im Vertrieb anders modelliert sein als in der Buchhaltung; das entkoppelt die Bausteine.",
   "Falsch: Das Curriculum betont die Entkopplung des Modells von seiner Repräsentation in Datenbanken und Formaten.",
   "Falsch: Getrennte Schemata helfen nicht, wenn alle Services trotzdem direkt auf fremde Daten zugreifen – die Kopplung bleibt.",
   "Richtig: Wer welche Daten besitzt und ändern darf, ist ein wesentliches Kriterium für die Zerlegung."
  ],
  "explanation": "Datenhoheit und geteilte Modelle bestimmen Schnitt und Kopplung; eigene Modelle je Baustein sind legitim. Fallen: getrennte Schemata ohne getrennten Zugriff, 1:1-Schema, Summe ≠ Produkt."
 },
 {
  "id": "c2q1",
  "chapter": 2,
  "lz": "LZ 02-02",
  "r": "R1",
  "type": "multi",
  "q": "In einem Workshop werden Aussagen gesammelt und sofort eingeordnet. Welche Einordnungen treffen zu?",
  "options": [
   "„Betrieb auf der vorhandenen Kubernetes-Plattform“ – Randbedingung.",
   "„Go-live bis 30. Juni“ – Qualitätsanforderung.",
   "„Kunden können Bestellungen stornieren“ – funktionale Anforderung.",
   "„Personendaten verbleiben in der EU“ – funktionale Anforderung.",
   "„Antwort in unter 2 s“ – Randbedingung.",
   "„Neue Zahlungsart in 5 Personentagen ergänzbar“ – Qualitätsanforderung."
  ],
  "correct": [
   0,
   2,
   5
  ],
  "optExpl": [
   "Richtig: Die Vorgabe schränkt den Lösungsraum ein (bestehende Infrastruktur), beschreibt aber weder eine Funktion noch eine Qualität.",
   "Falsch: Ein Termin ist keine Eigenschaft des Produkts, sondern eine organisatorische Randbedingung (Zeit, Budget, Personal).",
   "Richtig: Beschreibt eine Leistung des Systems, also WAS es tut.",
   "Falsch: Datenschutzvorgaben sind regulatorische Randbedingungen. Sie begrenzen z. B. die Wahl von Cloud-Region und Anbieter, sind aber keine Systemfunktion.",
   "Falsch: Ein Zahlenwert macht eine Anforderung messbar, nicht zur Randbedingung. Die Antwortzeit beschreibt, wie gut das System reagiert – eine Qualitätsanforderung.",
   "Richtig: Die Aussage beschreibt, wie gut sich das System ändern lässt (Wartbarkeit/Flexibilität), nicht eine neue Funktion."
  ],
  "explanation": "Funktional = WAS, Qualität = WIE GUT, Randbedingung = Einschränkung des Lösungsraums. Falle: Zahlenwerte machen nichts zur Randbedingung, und Termine oder Datenschutz sind keine Produktanforderungen."
 },
 {
  "id": "c2q2",
  "chapter": 2,
  "lz": "LZ 02-03",
  "r": "R1",
  "type": "multi",
  "q": "Ein Team will Qualitätsanforderungen erst nach der funktionalen Umsetzung betrachten. Welche Aussagen dazu treffen am ehesten zu?",
  "options": [
   "Qualitäten werden maßgeblich durch die Architektur geprägt.",
   "In agilen Projekten entstehen Qualitätsanforderungen erst durch Nutzerfeedback.",
   "Ein Teil der späteren Änderungen betrifft dann tragende Entscheidungen.",
   "Fehlende Qualitäten lassen sich durch Tuning einzelner Bausteine nachrüsten.",
   "Ein Lasttest vor dem Go-live stellt die nötige Performanz sicher.",
   "Auch nie genannte Qualitätserwartungen müssen später erfüllt werden."
  ],
  "correct": [
   0,
   2,
   5
  ],
  "optExpl": [
   "Richtig: Verteilung, Schnitt und Kommunikation der Bausteine bestimmen, welche Qualitäten erreichbar sind – das steht früh fest.",
   "Falsch: Feedback schärft Qualitätsanforderungen, ersetzt aber nicht ihre frühe Klärung – auch agil prägen sie die ersten Strukturentscheidungen.",
   "Richtig: Treiber wie Verfügbarkeit oder Sicherheit wirken auf Verteilung, Datenhaltung und Schnittstellen – also auf Entscheidungen, deren Änderung teuer ist.",
   "Falsch: Lokales Tuning hilft bei lokalen Engpässen. Qualitäten wie Verfügbarkeit oder Skalierbarkeit hängen aber an der Grundstruktur und erfordern oft einen Umbau.",
   "Falsch: Ein Test stellt nur fest, ob eine Qualität erreicht ist. Ermöglichen muss sie die Architektur – ein Test macht ein schlecht geschnittenes System nicht schneller.",
   "Richtig: Implizite Erwartungen, etwa an Sicherheit, gelten auch unausgesprochen. Wer sie spät entdeckt, zahlt für die Korrektur."
  ],
  "explanation": "Qualitäten entstehen durch die Architektur, nicht durch spätes Tuning oder Testen. Falle: Tests und Feedback stellen Qualität fest bzw. schärfen sie, ermöglichen sie aber nicht."
 },
 {
  "id": "c2q3",
  "chapter": 2,
  "lz": "LZ 02-02",
  "r": "R2",
  "type": "multi",
  "q": "Welche der folgenden Vorgaben sind Randbedingungen?",
  "options": [
   "Das Projektbudget ist fest gedeckelt.",
   "Das Team hat nur Erfahrung mit Java.",
   "Das System muss rund um die Uhr verfügbar sein.",
   "Die Suche antwortet in 95 % der Fälle unter 1 s.",
   "Die bereits lizenzierte Datenbank ist zu verwenden.",
   "Personenbezogene Daten müssen in der EU gespeichert werden."
  ],
  "correct": [
   0,
   1,
   4,
   5
  ],
  "optExpl": [
   "Richtig: Budget ist eine organisatorische Randbedingung: Sie begrenzt, welche Lösungen überhaupt möglich sind.",
   "Richtig: Auch Verfügbarkeit und Qualifikation der Mitarbeitenden sind laut Curriculum organisatorische Randbedingungen.",
   "Falsch: Das ist eine Qualitätsanforderung (Verfügbarkeit): Sie beschreibt, wie gut das System sein soll, und schränkt nicht den Lösungsweg ein.",
   "Falsch: Eine messbare Qualitätsanforderung (Performanz) – keine Vorgabe zum Lösungsweg.",
   "Richtig: Eine technische Randbedingung: Die Architektur muss sich an die vorhandene Infrastruktur anpassen.",
   "Richtig: Eine regulatorische Randbedingung, die den Lösungsraum einschränkt – etwa bei der Wahl des Rechenzentrums."
  ],
  "explanation": "Randbedingungen schränken den Lösungsraum ein: Budget, Regulatorik, vorhandene Technik, Team-Know-how. Verfügbarkeit oder Antwortzeiten sind Qualitätsanforderungen – auch wenn sie streng klingen."
 },
 {
  "id": "c2q4",
  "chapter": 2,
  "lz": "LZ 02-04",
  "r": "R1",
  "type": "multi",
  "q": "Ein Stakeholder fordert: „Das System soll schnell sein.“ Was macht diese Anforderung am ehesten überprüfbar?",
  "options": [
   "Die Vorgabe, eine In-Memory-Datenbank einzusetzen.",
   "Die Zuordnung zum ISO-25010-Merkmal Performanz.",
   "Ein Szenario aus Kontext, Stimulus, Reaktion und Messung.",
   "Festlegen, mit welcher Analysemethode die Erfüllung geprüft wird.",
   "Der Zielwert „unter 1 s“ ohne Angabe von Kontext und Stimulus."
  ],
  "correct": [
   2,
   3
  ],
  "optExpl": [
   "Falsch: Eine Technologievorgabe beschreibt eine Lösung (WIE), nicht das geforderte Verhalten. Sie garantiert auch keine bestimmte Antwortzeit.",
   "Falsch: Die Einordnung in eine Taxonomie klärt, um welche Qualität es geht, macht sie aber nicht messbar – ein Zielwert fehlt weiterhin.",
   "Richtig: Das sind die vier Bestandteile eines Qualitätsszenarios laut Curriculum. Erst damit ist klar, unter welchen Bedingungen welcher Wert gelten soll.",
   "Richtig: Das Curriculum fordert, dass eine Qualitätsanforderung eine Analysemethode spezifiziert – etwa Messung im Lasttest oder Modellrechnung.",
   "Falsch: Ein bloßes Antwortmaß ist noch kein vollständiges Szenario: Offen bleibt, für welche Operation und unter welcher Last der Wert gilt."
  ],
  "explanation": "Überprüfbar wird „schnell“ durch ein vollständiges Qualitätsszenario plus festgelegte Analysemethode. Falle: Ein nackter Zahlenwert, eine Technologievorgabe oder eine Einordnung ins Qualitätsmodell reichen nicht."
 },
 {
  "id": "c2q5",
  "chapter": 2,
  "lz": "LZ 02-01",
  "r": "R2",
  "type": "multi",
  "q": "Eine Architektin ist neu im Projekt und soll bei der Klärung der Anforderungen mitwirken. Welche Aufgaben gehören dazu?",
  "options": [
   "Implizite Qualitätserwartungen explizit machen.",
   "Die fachliche Priorisierung der Anforderungen verantworten.",
   "Technische Konsequenzen für die Priorisierung aufzeigen.",
   "Lücken und Widersprüche in Anforderungen aufdecken.",
   "Fehlende Anforderungen selbst verbindlich festlegen.",
   "Anliegen, aus denen keine Anforderung wird, nicht weiter verfolgen."
  ],
  "correct": [
   0,
   2,
   3
  ],
  "optExpl": [
   "Richtig: Qualitätserwartungen bleiben oft unausgesprochen, prägen aber die Architektur. Deshalb gehören sie auf den Tisch.",
   "Falsch: Hier wird Mitwirkung mit Verantwortung verwechselt: Die fachliche Priorisierung liegt bei Auftraggeber bzw. Product Owner.",
   "Richtig: Aufwand, Risiken und Trade-offs sind die Entscheidungsgrundlage, die Architekt:innen liefern.",
   "Richtig: Architekt:innen hinterfragen Anforderungen aus technischer Sicht und stimmen Verfeinerungen mit den Stakeholdern ab.",
   "Falsch: Lücken überbrückt man mit dokumentierten Annahmen, die die Fachseite bestätigt. Verbindlich festlegen dürfen das die verantwortlichen Stakeholder.",
   "Falsch: Nicht jedes Anliegen wird zu einer Anforderung, muss aber trotzdem berücksichtigt werden – etwa zum Validieren von Anforderungen."
  ],
  "explanation": "Architekt:innen hinterfragen, decken Lücken auf, machen Implizites explizit und liefern die technische Entscheidungsgrundlage. Falle: Priorisieren und verbindlich festlegen bleibt bei der Fachseite."
 },
 {
  "id": "c2q6",
  "chapter": 2,
  "lz": "LZ 02-03",
  "r": "R2",
  "type": "single",
  "q": "Ein Team ordnet bekannte Qualitäten dem Produktqualitätsmodell der ISO/IEC 25010:2023 zu. Welche Zuordnung ist korrekt?",
  "options": [
   "Verfügbarkeit ist ein Untermerkmal der Sicherheit.",
   "Skalierbarkeit ist ein Untermerkmal der Performanz.",
   "Modularität ist ein Untermerkmal der Flexibilität.",
   "Skalierbarkeit ist ein Untermerkmal der Flexibilität."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Verfügbarkeit gehört zur Zuverlässigkeit. Sicherheit (Security) umfasst u. a. Vertraulichkeit, Integrität und Authentizität.",
   "Falsch: Naheliegend, weil Skalierung oft der Leistung dient. Im Modell ist sie aber der Flexibilität zugeordnet.",
   "Falsch: Modularität gehört zur Wartbarkeit, zusammen mit u. a. Testbarkeit und Analysierbarkeit.",
   "Richtig: In der 2023-Fassung gehört Skalierbarkeit zu Flexibilität, neben u. a. Anpassbarkeit und Installierbarkeit."
  ],
  "explanation": "Skalierbarkeit gehört in ISO/IEC 25010:2023 zur Flexibilität, Modularität zur Wartbarkeit, Verfügbarkeit zur Zuverlässigkeit. Falle: Die naheliegende inhaltliche Nähe entscheidet nicht über die Einordnung im Modell."
 },
 {
  "id": "c2q7",
  "chapter": 2,
  "lz": "LZ 02-02",
  "r": "R1",
  "type": "multi",
  "q": "Aus einem Lastenheft für ein Bestellsystem: Welche der folgenden Aussagen sind funktionale Anforderungen?",
  "options": [
   "Der Ausfall eines Servers bleibt für Nutzer unbemerkt.",
   "Nach jeder Bestellung wird eine Bestätigung per E-Mail versendet.",
   "Die Suche liefert Treffer in unter 200 ms.",
   "Monatlich wird ein Umsatzbericht pro Filiale erstellt.",
   "Kunden können Rechnungen als PDF herunterladen.",
   "Die Oberfläche ist vollständig per Tastatur bedienbar."
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Falsch: Beschreibt Fehlertoleranz, also wie zuverlässig das System seine Funktionen erbringt – eine Qualitätsanforderung.",
   "Richtig: Eine Reaktion des Systems auf ein fachliches Ereignis – also eine Funktion.",
   "Falsch: Die Suche selbst wäre die Funktion. Die Antwortzeit beschreibt, WIE GUT sie arbeitet – eine Qualitätsanforderung.",
   "Richtig: Auch zeitgesteuerte Abläufe sind Leistungen des Systems und damit funktionale Anforderungen.",
   "Richtig: Beschreibt eine Leistung, die Nutzer:innen aufrufen können – WAS das System tut.",
   "Falsch: Klingt nach Funktion, beschreibt aber die Bedienbarkeit für bestimmte Nutzergruppen – eine Qualität (Interaktionsfähigkeit/Barrierefreiheit)."
  ],
  "explanation": "Funktionale Anforderungen beschreiben Leistungen des Systems, auch zeitgesteuerte. Falle: Bedienbarkeit per Tastatur und unbemerkte Ausfälle klingen konkret, beschreiben aber WIE GUT – Qualitäten."
 },
 {
  "id": "k1",
  "chapter": 2,
  "lz": "LZ 02-03",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Ein Lastenheft eines Online-Shops enthält folgende Sätze. Ordnen Sie zu: funktionale Anforderung oder Qualitätsanforderung?",
  "categories": [
   "Funktionale Anforderung",
   "Qualitätsanforderung"
  ],
  "rows": [
   {
    "text": "Fällt ein Server aus, übernimmt ein anderer innerhalb von 30 Sekunden.",
    "cat": 1
   },
   {
    "text": "24 Stunden vor Fälligkeit verschickt das System eine Erinnerungs-E-Mail.",
    "cat": 0
   },
   {
    "text": "Nach fünf Fehlversuchen wird das Benutzerkonto für 15 Minuten gesperrt.",
    "cat": 0
   },
   {
    "text": "Eine neue Sprachversion der Oberfläche lässt sich ohne Codeänderung ergänzen.",
    "cat": 1
   },
   {
    "text": "Neue Mitarbeitende erfassen ohne Schulung eine Bestellung in unter 3 Minuten.",
    "cat": 1
   },
   {
    "text": "Das System zeigt Preise wahlweise in Euro oder US-Dollar an.",
    "cat": 0
   }
  ],
  "explanation": "Zahlen allein machen keine Qualitätsanforderung: Sperre nach fünf Versuchen und Erinnerung nach 24 Stunden beschreiben, WAS das System tut. Ausfallübernahme, Erweiterbarkeit und Erlernbarkeit beschreiben, WIE GUT es etwas tut."
 },
 {
  "id": "k2",
  "chapter": 2,
  "lz": "LZ 02-02",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Für ein neues Kundenportal liegen diese Vorgaben vor. Ordnen Sie zu: Randbedingung oder Qualitätsanforderung?",
  "categories": [
   "Randbedingung",
   "Qualitätsanforderung"
  ],
  "rows": [
   {
    "text": "Das erste Release muss zur Fachmesse im März live sein.",
    "cat": 0
   },
   {
    "text": "Der Betrieb erfolgt im Rechenzentrum eines vertraglich gebundenen Partners.",
    "cat": 0
   },
   {
    "text": "Eine neue Zahlart ist von einem Entwickler in unter zwei Personentagen integrierbar.",
    "cat": 1
   },
   {
    "text": "Personenbezogene Daten dürfen laut Datenschutzvorgabe die EU nicht verlassen.",
    "cat": 0
   },
   {
    "text": "Unbefugte Zugriffe auf Kundendaten werden innerhalb von 5 Minuten erkannt.",
    "cat": 1
   },
   {
    "text": "Fällt einer von drei Knoten aus, bemerken Nutzer keine Unterbrechung.",
    "cat": 1
   }
  ],
  "explanation": "Rechtliche Vorgaben, Termine und Partnerschaften schränken den Lösungsraum ein – Randbedingungen. Die Falle: Auch Sicherheitsthemen sind Qualitätsanforderungen, solange sie ein gefordertes Systemverhalten (WIE GUT) beschreiben und keine Vorgabe von außen."
 },
 {
  "id": "c2q8",
  "chapter": 2,
  "lz": "LZ 02-03",
  "r": "R1",
  "type": "multi",
  "q": "Welche der folgenden sind Hauptmerkmale (nicht Untermerkmale) des Produktqualitätsmodells der ISO/IEC 25010:2023?",
  "options": [
   "Funktionale Eignung.",
   "Verfügbarkeit.",
   "Testbarkeit.",
   "Kompatibilität.",
   "Zuverlässigkeit.",
   "Wiederverwendbarkeit."
  ],
  "correct": [
   0,
   3,
   4
  ],
  "optExpl": [
   "Richtig: Überraschend für viele: ISO 25010 führt Funktionalität selbst als Qualitätsmerkmal – anders als z. B. IREB, das Funktion und Qualität trennt.",
   "Falsch: Ein Untermerkmal der Zuverlässigkeit, kein eigenes Hauptmerkmal.",
   "Falsch: Wichtig für Architekt:innen, im Modell aber ein Untermerkmal der Wartbarkeit.",
   "Richtig: Ein Hauptmerkmal: Austausch mit anderen Systemen und Koexistenz neben ihnen.",
   "Richtig: Ein Hauptmerkmal mit Untermerkmalen wie Verfügbarkeit, Fehlertoleranz und Wiederherstellbarkeit.",
   "Falsch: Gehört als Untermerkmal zur Wartbarkeit."
  ],
  "explanation": "Kompatibilität, Zuverlässigkeit und Funktionale Eignung sind Hauptmerkmale. Falle: Testbarkeit, Verfügbarkeit und Wiederverwendbarkeit sind prominente Qualitäten, aber nur Untermerkmale."
 },
 {
  "id": "c2q9",
  "chapter": 2,
  "lz": "LZ 02-03",
  "r": "R1",
  "type": "multi",
  "q": "Ein Projektleiter fragt, warum Qualitätsanforderungen schon in der ersten Iteration geklärt werden sollen. Welche Begründungen treffen zu?",
  "options": [
   "Aus ihnen ergibt sich die Reihenfolge der umzusetzenden Features.",
   "Oft sind sie implizit und zeigen sich sonst erst im Betrieb.",
   "Zielkonflikte zwischen Qualitäten lassen sich früh bewusst abwägen.",
   "Sie prägen Strukturentscheidungen, die später teuer zu ändern sind.",
   "Früh geklärt, bleiben sie für den Rest des Projekts stabil.",
   "Sie legen fest, welche Funktionen das System anbieten muss."
  ],
  "correct": [
   1,
   2,
   3
  ],
  "optExpl": [
   "Falsch: Die Feature-Reihenfolge folgt aus fachlicher Priorisierung nach Wert, Risiko und Aufwand. Qualitäten wirken vor allem auf die Struktur.",
   "Richtig: Selbstverständliche Erwartungen werden selten ausgesprochen. Spät entdeckt, ist ihre Korrektur besonders teuer.",
   "Richtig: Etwa Sicherheit ↔ Benutzbarkeit oder Speicherbedarf ↔ Leistungseffizienz: früh erkannt, kann man sie gezielt entscheiden.",
   "Richtig: Verteilung, Schichtung oder Datenhaltung hängen an Qualitäten. Ihre Treiber müssen daher früh bekannt sein.",
   "Falsch: Früh klären heißt nicht einfrieren: Qualitätsanforderungen werden iterativ geschärft und können sich ändern.",
   "Falsch: Hier werden Funktion und Qualität verwechselt: Qualitäten beschreiben, WIE GUT Funktionen erbracht werden, nicht welche."
  ],
  "explanation": "Früh klären, weil Qualitäten die teure Grundstruktur prägen, oft implizit sind und Trade-offs früh entschieden werden müssen. Falle: Sie bleiben veränderlich und bestimmen weder Feature-Reihenfolge noch Funktionsumfang."
 },
 {
  "id": "c2q10",
  "chapter": 2,
  "lz": "LZ 02-03",
  "r": "R1",
  "type": "single",
  "q": "Ein Stakeholder fordert: „Das System muss auch von sehbehinderten Nutzern bedienbar sein.“ Wie ist das am ehesten einzuordnen?",
  "options": [
   "Als funktionale Anforderung „Vorlesefunktion“.",
   "Als regulatorische Randbedingung nach WCAG.",
   "Als Qualitätsanforderung (Interaktionsfähigkeit/Barrierefreiheit).",
   "Als Stakeholder-Anliegen, das keine Anforderung ist."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Eine Vorlesefunktion wäre eine mögliche Lösung. Gefordert ist eine Qualität – Anforderung und Lösung werden hier verwechselt.",
   "Falsch: Eine Randbedingung entstünde erst, wenn eine Norm oder Stufe verbindlich vorgeschrieben wäre. Davon ist in der Forderung keine Rede.",
   "Richtig: Die Forderung beschreibt, WIE GUT das System für eine Nutzergruppe bedienbar ist. Als Qualität kann sie die Architektur prägen, z. B. die Trennung von Darstellung und Logik.",
   "Falsch: Nicht jedes Anliegen wird zur Anforderung – hier wird aber ausdrücklich etwas gefordert, das das System erfüllen muss."
  ],
  "explanation": "Bedienbarkeit für eine Nutzergruppe ist eine Qualitätsanforderung. Falle: Eine Vorlesefunktion ist eine Lösung, und eine Randbedingung entsteht erst durch eine verbindlich vorgeschriebene Norm."
 },
 {
  "id": "c2q11",
  "chapter": 2,
  "lz": "LZ 02-02",
  "r": "R1",
  "type": "multi",
  "q": "Ein Team muss Anforderungen für die nächsten Releases priorisieren. Welche Aussagen zur Priorisierung treffen zu?",
  "options": [
   "Einmal festgelegt, gilt die Reihenfolge bis zum Release.",
   "Neben dem Aufwand fließen Geschäftswert und Risiko ein.",
   "Qualitätsanforderungen stehen hinter funktionalen zurück.",
   "Architektonisch riskante Anforderungen möglichst spät umsetzen.",
   "Widersprüchliche Anforderungen erzwingen bewusste Abwägungen."
  ],
  "correct": [
   1,
   4
  ],
  "optExpl": [
   "Falsch: Prioritäten werden bei neuen Erkenntnissen angepasst. Eine eingefrorene Reihenfolge ignoriert Feedback und veränderte Risiken.",
   "Richtig: Aufwand allein sagt nichts über den Nutzen. Erst mit Wert und Risiko entsteht eine sinnvolle Reihenfolge.",
   "Falsch: Qualitäten sind oft die stärkeren Architekturtreiber. Eine pauschale Nachrangigkeit führt zu teuren Strukturänderungen.",
   "Falsch: Umgekehrt: Riskantes geht man früh an, z. B. per Prototyp oder Durchstich. Spät entdeckte Risiken sind teurer.",
   "Richtig: Etwa maximale Sicherheit gegen minimale Bedienhürden: Die Priorisierung macht solche Konflikte entscheidbar, statt sie offen zu lassen."
  ],
  "explanation": "Priorisierung wägt Wert, Risiko und Aufwand ab und löst Widersprüche bewusst auf. Falle: Riskantes kommt früh, Qualitäten sind nicht pauschal nachrangig, und Prioritäten bleiben anpassbar."
 },
 {
  "id": "c2q12",
  "chapter": 2,
  "lz": "LZ 02-03",
  "r": "R1",
  "type": "multi",
  "q": "Was gilt laut Curriculum für das Verhältnis verschiedener Qualitäten eines Systems zueinander?",
  "options": [
   "Eine einzelne Anforderung kann mehrere Qualitäten betreffen.",
   "Jede Anforderung gehört zu genau einem Qualitätsmerkmal.",
   "Zielkonflikte lassen sich meist durch die passende Technologie auflösen.",
   "Mehr Konfigurierbarkeit kann die Zuverlässigkeit senken.",
   "Caching verbessert die Performanz ohne Folgen für andere Qualitäten.",
   "Die Änderung einer Qualität kann andere Qualitäten beeinflussen."
  ],
  "correct": [
   0,
   3,
   5
  ],
  "optExpl": [
   "Richtig: „Anmeldung mit 2FA in unter 5 s“ betrifft Sicherheit, Benutzbarkeit und Performanz zugleich.",
   "Falsch: Widerspricht dem Curriculum: Eine Anforderung kann sich auf mehrere Qualitäten gleichzeitig beziehen.",
   "Falsch: Technologie kann einen Konflikt abmildern, aber nicht wegzaubern. Die Abwägung bleibt eine bewusste Entscheidung.",
   "Richtig: Viele Schalter bedeuten viele ungetestete Kombinationen – ein Beispiel aus dem Curriculum.",
   "Falsch: Caching erkauft Leistungseffizienz mit mehr Speicherbedarf und ggf. veralteten Daten – ein klassischer Trade-off.",
   "Richtig: Qualitäten hängen zusammen, deshalb sind Abwägungen nötig – etwa Sicherheit ↔ Benutzbarkeit."
  ],
  "explanation": "Qualitäten beeinflussen sich gegenseitig, und eine Anforderung kann mehrere betreffen. Falle: Auch scheinbar reine Verbesserungen wie Caching haben Kosten, und Technologie ersetzt keine Abwägung."
 },
 {
  "id": "c2q13",
  "chapter": 2,
  "lz": "LZ 02-05",
  "r": "R2",
  "type": "multi",
  "q": "Im Entwurf steht: „Der Partnerdienst ist zu 99,9 % verfügbar.“ Niemand hat das bestätigt. Welche Aussagen zu dieser Annahme treffen zu?",
  "options": [
   "Sie ist eine Vorgabe, die den Lösungsraum verbindlich begrenzt.",
   "Solange das System läuft, muss sie nicht weiter beachtet werden.",
   "Erweist sie sich als falsch, zeigt sie, welche Entscheidung zu prüfen ist.",
   "Sie ist ein unterstellter, aber nicht gesicherter Sachverhalt.",
   "Man meidet sie in der Doku, da sie Entscheidungen angreifbar macht.",
   "Sie sollte explizit festgehalten und geprüft werden."
  ],
  "correct": [
   2,
   3,
   5
  ],
  "optExpl": [
   "Falsch: Das beschreibt eine Randbedingung. Eine Annahme ist gerade nicht verbindlich vorgegeben, sondern unsicher.",
   "Falsch: Eine Annahme kann sich jederzeit als falsch erweisen, etwa bei Lastspitzen. Sie bleibt ein Risiko, bis sie bestätigt ist.",
   "Richtig: Weil die Annahme dokumentiert ist, weiß man, welche Entscheidung auf ihr beruhte – etwa der Verzicht auf eine Warteschlange.",
   "Richtig: Genau das kennzeichnet eine Annahme – sie wird angenommen, ist aber nicht bestätigt.",
   "Falsch: Umgekehrt: Das Curriculum verlangt, Annahmen explizit darzustellen. Verschwiegene Annahmen sind das eigentliche Risiko.",
   "Richtig: Explizite Annahmen lassen sich hinterfragen und z. B. beim Betreiber verifizieren; implizite führen zu Missverständnissen."
  ],
  "explanation": "Annahmen sind unsichere Sachverhalte und gehören explizit dokumentiert, damit man sie prüfen und betroffene Entscheidungen finden kann. Falle: Eine Annahme ist keine Randbedingung."
 },
 {
  "id": "c2q14",
  "chapter": 2,
  "lz": "LZ 02-03",
  "r": "R1",
  "type": "multi",
  "q": "Welche der folgenden Aussagen aus einem Anforderungskatalog sind Qualitätsanforderungen?",
  "options": [
   "Ein Report über 10 Mio. Datensätze ist in 30 s fertig.",
   "Administratoren können Benutzerkonten sperren.",
   "Die vorhandene Oracle-Datenbank ist weiterzuverwenden.",
   "Neue Entwickler setzen eine typische Änderung in einem Tag um.",
   "Unbefugte können Kundendaten weder lesen noch verändern."
  ],
  "correct": [
   0,
   3,
   4
  ],
  "optExpl": [
   "Richtig: Beschreibt das Zeitverhalten einer Funktion – Performanz, also WIE GUT.",
   "Falsch: Klingt nach Sicherheit, beschreibt aber eine Leistung des Systems – eine funktionale Anforderung.",
   "Falsch: Eine Vorgabe zur bestehenden Infrastruktur ist eine technologische Randbedingung, keine Qualität.",
   "Richtig: Beschreibt die Änderbarkeit des Systems – eine Wartbarkeitsanforderung.",
   "Richtig: Vertraulichkeit und Integrität sind Untermerkmale der Sicherheit – eine Qualität."
  ],
  "explanation": "Qualitätsanforderungen beschreiben WIE GUT: Zeitverhalten, Änderbarkeit, Vertraulichkeit. Falle: Eine sicherheitsnahe Funktion wie „Konten sperren“ bleibt funktional, eine Datenbankvorgabe ist eine Randbedingung."
 },
 {
  "id": "c2q15",
  "chapter": 2,
  "lz": "LZ 02-02",
  "r": "R2",
  "type": "multi",
  "q": "Welche der folgenden Einflussfaktoren zählt das Curriculum zu den organisatorischen Randbedingungen?",
  "options": [
   "Die Dienste kommunizieren ausschließlich über HTTPS.",
   "Ein Rahmenvertrag mit einem festen Entwicklungspartner.",
   "Das Team hat bisher nur Erfahrung mit Java.",
   "Ein vorgeschriebener Freigabeprozess für Releases.",
   "Gesetzliche Aufbewahrungsfristen für Rechnungen.",
   "Eine vom Konzern vorgegebene Referenzarchitektur."
  ],
  "correct": [
   1,
   2,
   3
  ],
  "optExpl": [
   "Falsch: Eine Protokollvorgabe ist eine technologische Randbedingung.",
   "Richtig: Partnerschaften und Kooperationen nennt das Curriculum ausdrücklich als organisatorische Randbedingung (R2).",
   "Richtig: Verfügbarkeit und Qualifikation der Mitarbeitenden sind organisatorisch, auch wenn es um eine Technologie geht.",
   "Richtig: Normen, Richtlinien und Prozessmodelle, z. B. Genehmigungs- und Freigabeprozesse, sind organisatorisch.",
   "Falsch: Rechtliche Vorgaben sind regulatorische Randbedingungen, keine organisatorischen.",
   "Falsch: Klingt nach Konzernvorgabe, Referenzarchitekturen zählt das Curriculum aber zu den technologischen Randbedingungen."
  ],
  "explanation": "Organisatorisch sind u. a. Partnerschaften, Freigabeprozesse sowie Verfügbarkeit und Qualifikation des Teams. Falle: Eine Referenzarchitektur ist technologisch, auch wenn der Konzern sie vorgibt."
 },
 {
  "id": "c2q16",
  "chapter": 2,
  "lz": "LZ 02-03",
  "r": "R1",
  "type": "multi",
  "q": "Ein Team sammelt Qualitätsanforderungen für ein neues Portal. Woraus leiten sie sich typischerweise ab?",
  "options": [
   "Aus rechtlichen Vorgaben, etwa zum Datenschutz.",
   "Aus der Bausteinsicht des Zielsystems.",
   "Aus den Geschäftszielen des Auftraggebers.",
   "Aus den Anliegen der Stakeholder, etwa des Betriebs.",
   "Aus den bereits gewählten Frameworks.",
   "Aus dem gewählten Vorgehensmodell, etwa Scrum."
  ],
  "correct": [
   0,
   2,
   3
  ],
  "optExpl": [
   "Richtig: Datenschutzvorgaben wirken als Randbedingung und ziehen oft Sicherheitsanforderungen nach sich.",
   "Falsch: Ursache und Wirkung vertauscht: Die Bausteinstruktur ist ein Ergebnis, das die Qualitätsanforderungen erfüllen soll.",
   "Richtig: Geschäftsziele wie „Markteinführung in neuen Ländern“ führen z. B. zu Anforderungen an Skalierbarkeit oder Anpassbarkeit.",
   "Richtig: Stakeholder-Anliegen wie einfache Überwachung oder isolierte Testbarkeit sind eine Hauptquelle von Qualitätsanforderungen.",
   "Falsch: Frameworks sind Lösungen bzw. Randbedingungen. Qualitätsanforderungen sollen sie begründen, nicht aus ihnen folgen.",
   "Falsch: Das Vorgehensmodell bestimmt, wie gearbeitet wird, nicht wie gut das Produkt sein muss."
  ],
  "explanation": "Qualitätsanforderungen stammen aus Geschäftszielen, Stakeholder-Anliegen und rechtlichen Vorgaben. Falle: Frameworks und Bausteinstruktur sind Ergebnisse bzw. Lösungen, keine Quellen."
 },
 {
  "id": "c2q17",
  "chapter": 2,
  "lz": "LZ 02-02",
  "r": "R2",
  "type": "single",
  "q": "Ein Anforderungsdokument des Kunden enthält den Satz: „Zur Datenhaltung ist PostgreSQL zu verwenden.“ Wie ist das am ehesten einzuordnen?",
  "options": [
   "Als Qualitätsanforderung an die Datenhaltung.",
   "Als funktionale Anforderung an die Persistenz.",
   "Als technologische Randbedingung.",
   "Als Architekturentscheidung des Teams."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Eine Datenbank kann Qualitäten beeinflussen, die Vorgabe beschreibt aber kein WIE GUT, sondern ein WOMIT.",
   "Falsch: Speichern mag eine Funktion sein, die Wahl des Produkts aber nicht – sie beschreibt keine Leistung des Systems.",
   "Richtig: Die Vorgabe legt eine Lösung fest und schränkt den Lösungsraum ein – Software-Infrastruktur ist eine technologische Randbedingung.",
   "Falsch: Die Vorgabe kommt vom Kunden und ist für das Team nicht verhandelbar. Eine Architekturentscheidung trifft das Team selbst."
  ],
  "explanation": "Eine extern vorgegebene Technologie ist eine technologische Randbedingung. Falle: Dass sie Qualitäten oder Persistenz berührt, macht sie weder zur Qualitäts- noch zur funktionalen Anforderung."
 },
 {
  "id": "c2q18",
  "chapter": 2,
  "lz": "LZ 02-02",
  "r": "R2",
  "type": "multi",
  "q": "Ein Team hält im Projektauftrag bewusst ausgeschlossene Punkte als Nicht-Ziele fest. Welche Aussagen dazu treffen zu?",
  "options": [
   "Ein Nicht-Ziel kann im Verlauf doch noch zum Ziel werden.",
   "Sie sind eine Form von Randbedingung für den Entwurf.",
   "Sie gehören nur in die teaminterne Dokumentation.",
   "Sie ersetzen eine Priorisierung der übrigen Anforderungen.",
   "Sie grenzen den Umfang ab und beugen falschen Erwartungen vor."
  ],
  "correct": [
   0,
   4
  ],
  "optExpl": [
   "Richtig: Nicht-Ziele sind Festlegungen auf Zeit. Ändern sich Prioritäten, wird neu entschieden – idealerweise wieder dokumentiert.",
   "Falsch: Ein Nicht-Ziel begrenzt den Umfang, nicht den Lösungsraum. Randbedingungen schränken ein, WIE gelöst werden darf.",
   "Falsch: Gerade für Stakeholder sind sie wichtig. Versteckte Nicht-Ziele erzeugen genau die falschen Erwartungen, die sie verhindern sollen.",
   "Falsch: Nicht-Ziele sagen nur, was entfällt. Die Reihenfolge der verbleibenden Anforderungen muss weiterhin festgelegt werden.",
   "Richtig: Was ausdrücklich nicht geliefert wird, muss niemand erraten – das schafft Klarheit bei allen Stakeholdern."
  ],
  "explanation": "Nicht-Ziele klären den Umfang für alle Stakeholder und können sich ändern. Falle: Sie sind keine Randbedingung und ersetzen keine Priorisierung."
 },
 {
  "id": "c2q19",
  "chapter": 2,
  "lz": "LZ 02-04",
  "r": "R1",
  "type": "multi",
  "q": "Aus welchen Teilen besteht ein Qualitätsszenario laut CPSA-F?",
  "options": [
   "Umsetzungsaufwand (z. B. 5 Personentage).",
   "Reaktion (z. B. Ergebnisliste wird angezeigt).",
   "Lösungstaktik (z. B. Caching).",
   "Kontext (z. B. unter Volllast).",
   "Messung (z. B. 95 % in unter 1 s).",
   "Stimulus (z. B. 1000 gleichzeitige Anfragen)."
  ],
  "correct": [
   1,
   3,
   4,
   5
  ],
  "optExpl": [
   "Falsch: Der Aufwand ist eine Planungsgröße, kein Teil der Qualitätsanforderung.",
   "Richtig: Was das System auf den Stimulus hin tut.",
   "Falsch: Ein Szenario beschreibt die Anforderung, nicht die Lösung. Wie sie erreicht wird, entscheidet erst der Entwurf.",
   "Richtig: Der Betriebszustand bzw. die Umgebung, in der das Szenario gilt.",
   "Richtig: Erst das Maß macht das Szenario überprüfbar.",
   "Richtig: Der Auslöser, auf den das System reagieren muss."
  ],
  "explanation": "Qualitätsszenario = Kontext · Stimulus · Reaktion · Messung. Lösungstaktik und Aufwand gehören nicht dazu – das Szenario beschreibt die Anforderung, nicht ihre Umsetzung."
 },
 {
  "id": "c2q20",
  "chapter": 2,
  "lz": "LZ 02-01",
  "r": "R2",
  "type": "multi",
  "q": "Der Fachbereich will schnelle Features, der Betrieb maximale Stabilität – beide Ziele sind unvereinbar. Wie gehen Architekt:innen angemessen vor?",
  "options": [
   "Den Konflikt nach technischer Machbarkeit selbst entscheiden.",
   "Beide Ziele per Konfiguration maximal erfüllbar machen.",
   "Eine begründete Priorisierung oder einen Kompromiss dokumentieren.",
   "Die relevanten Stakeholder in die Lösung einbeziehen.",
   "Kurzfristige Projektziele grundsätzlich vorziehen.",
   "Die widersprüchlichen Anliegen transparent machen."
  ],
  "correct": [
   2,
   3,
   5
  ],
  "optExpl": [
   "Falsch: Genau die Prüfungsfalle: Es geht um Stakeholder-Ziele, nicht nur um Technik. Architekt:innen liefern Konsequenzen, entscheiden aber nicht allein.",
   "Falsch: Klingt elegant, verschiebt den Konflikt aber nur und erkauft ihn mit Komplexität und ungetesteten Kombinationen.",
   "Richtig: Dokumentiert bleibt nachvollziehbar, warum wie entschieden wurde – wichtig, wenn sich Rahmenbedingungen ändern.",
   "Richtig: Laut Curriculum löst man solche Konflikte gemeinsam mit den relevanten Stakeholdern, nicht im Alleingang.",
   "Falsch: Konflikte zwischen kurz- und langfristigen Zielen sind abzuwägen, nicht pauschal zu entscheiden – sonst leidet z. B. die Wartbarkeit dauerhaft.",
   "Richtig: Erst ein sichtbarer Konflikt lässt sich bewusst entscheiden. Verdeckte Konflikte brechen später unkontrolliert auf."
  ],
  "explanation": "Stakeholder-Konflikte macht man sichtbar, löst sie mit den Beteiligten und dokumentiert die Entscheidung. Falle: Architekt:innen entscheiden nicht allein nach Technik, und Konfigurierbarkeit löst keinen Zielkonflikt."
 },
 {
  "id": "c2q21",
  "chapter": 2,
  "lz": "LZ 02-03",
  "r": "R2",
  "type": "single",
  "q": "Ein Kollege fasst die Revision der ISO/IEC 25010 von 2023 zusammen. Welche seiner Aussagen ist korrekt?",
  "options": [
   "Safety (Betriebssicherheit) kam als Hauptmerkmal hinzu.",
   "Security wurde in die Zuverlässigkeit integriert.",
   "Funktionale Eignung wurde aus dem Modell entfernt.",
   "Usability blieb unter diesem Namen ein Hauptmerkmal."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Safety ist in der 2023-Fassung ein eigenständiges Hauptmerkmal neben Security.",
   "Falsch: Security ist weiterhin ein eigenes Hauptmerkmal mit u. a. Vertraulichkeit und Integrität.",
   "Falsch: Naheliegend, weil z. B. IREB Funktion und Qualität trennt – ISO 25010 führt Funktionale Eignung aber weiterhin als Hauptmerkmal.",
   "Falsch: Das Merkmal heißt nun Interaktionsfähigkeit (Interaction Capability)."
  ],
  "explanation": "2023 kam Safety als Hauptmerkmal hinzu, Usability heißt jetzt Interaktionsfähigkeit. Falle: Security und Funktionale Eignung bestehen als Hauptmerkmale fort."
 },
 {
  "id": "c2q22",
  "chapter": 2,
  "lz": "LZ 02-01",
  "r": "R1",
  "type": "multi",
  "q": "Zu Beginn eines Projekts sollen die Stakeholder identifiziert werden. Welche Vorgehensweisen sind sinnvoll?",
  "options": [
   "Die Stakeholder einmalig zu Projektbeginn abschließend ermitteln.",
   "Auch indirekt Betroffene wie Betrieb oder Support einbeziehen.",
   "Bekannte Stakeholder nach weiteren Betroffenen fragen.",
   "Sich auf Stakeholder mit Budgetverantwortung beschränken.",
   "Die Rollen aus dem Organigramm des Auftraggebers übernehmen."
  ],
  "correct": [
   1,
   2
  ],
  "optExpl": [
   "Falsch: Stakeholder und ihre Anliegen ändern sich im Verlauf. Die Analyse wird daher wiederholt, nicht einmalig abgeschlossen.",
   "Richtig: Betrieb, Support oder QS nutzen das System nicht fachlich, haben aber Anliegen, die die Architektur prägen.",
   "Richtig: Jeder Stakeholder kennt weitere Beteiligte (Schneeballprinzip) – so findet man auch Rollen, die in keiner Liste stehen.",
   "Falsch: Einfluss auf das Budget sagt nichts über architekturrelevante Anliegen – etwa die des Betriebs.",
   "Falsch: Ein guter Startpunkt, aber unvollständig: Externe, Partner oder Behörden stehen dort nicht."
  ],
  "explanation": "Stakeholder findet man durch Nachfragen und indem man auch indirekt Betroffene berücksichtigt. Falle: Organigramm, Budgetverantwortung oder eine einmalige Erhebung liefern kein vollständiges Bild."
 },
 {
  "id": "c2q23",
  "chapter": 2,
  "lz": "LZ 02-02",
  "r": "R2",
  "type": "single",
  "q": "Ein Team bemerkt, dass die Bausteingrenzen seines Systems genau den Abteilungsgrenzen entsprechen. Welche Aussage beschreibt Conways Gesetz zutreffend?",
  "options": [
   "Systemstrukturen spiegeln die Kommunikationsstrukturen der Organisation.",
   "Genutzte Systeme müssen sich ändern, sonst verlieren sie an Nutzen.",
   "Mehr Personal verzögert ein verspätetes Projekt weiter.",
   "Teams passen ihre Kommunikation an die Systemstruktur an."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Das ist Conways Gesetz: Die Struktur eines Systems spiegelt tendenziell die Kommunikationsstrukturen der entwickelnden Organisation wider.",
   "Falsch: Das beschreibt Lehmans Gesetze der Softwareevolution.",
   "Falsch: Das ist Brooks' Law über Projektpersonal, nicht Conways Gesetz.",
   "Falsch: Die Wirkrichtung ist vertauscht: Laut Conway prägt die Organisation das System, nicht umgekehrt."
  ],
  "explanation": "Conways Gesetz: Die Organisation prägt die Systemstruktur. Falle: Die umgekehrte Wirkrichtung sowie Brooks' Law und Lehmans Gesetze sind etwas anderes."
 },
 {
  "id": "c2q24",
  "chapter": 2,
  "lz": "LZ 02-05",
  "r": "R2",
  "type": "multi",
  "q": "Nach dem Go-live beschweren sich Nutzer über Dinge, die nie jemand gefordert hat. Welche Aussagen zu solchen impliziten Anforderungen treffen zu?",
  "options": [
   "Sie gelten erst, wenn sie schriftlich festgehalten sind.",
   "Ihre Klärung liegt allein in der Verantwortung des Auftraggebers.",
   "Sie betreffen überwiegend funktionale Anforderungen.",
   "Sie beruhen oft auf Erwartungen, die als selbstverständlich gelten.",
   "Sie führen leicht zu Missverständnissen zwischen Stakeholdern."
  ],
  "correct": [
   3,
   4
  ],
  "optExpl": [
   "Falsch: Nutzer erwarten sie trotzdem. Das Aufschreiben macht sie prüfbar, aber nicht erst gültig.",
   "Falsch: Architekt:innen sollen Annahmen und Erwartungen aktiv explizit machen, statt auf Vollständigkeit der Vorgaben zu hoffen.",
   "Falsch: Umgekehrt: Gerade Qualitäten wie Sicherheit oder Antwortzeit bleiben oft unausgesprochen.",
   "Richtig: Was für Stakeholder selbstverständlich ist, erwähnen sie nicht – es gilt trotzdem.",
   "Richtig: Das Curriculum betont: Implizite Annahmen werden von jedem anders interpretiert."
  ],
  "explanation": "Implizite Anforderungen beruhen auf Selbstverständlichkeiten, betreffen oft Qualitäten und erzeugen Missverständnisse. Falle: Sie gelten auch ungeschrieben, und ihre Klärung ist auch Aufgabe der Architekt:innen."
 },
 {
  "id": "c2q25",
  "chapter": 2,
  "lz": "LZ 02-01",
  "r": "R2",
  "type": "single",
  "q": "Zwei Stakeholder streiten. Worin unterscheidet sich ein Sachkonflikt am ehesten von einem Interessenkonflikt?",
  "options": [
   "Sachkonflikte entstehen in der IT, Interessenkonflikte im Fachbereich.",
   "Sachkonflikt: Fakten oder Lösungswege – Interessenkonflikt: unvereinbare Ziele.",
   "Interessenkonflikte lösen sich meist durch zusätzliche Fakten.",
   "Sachkonflikt: unvereinbare Ziele – Interessenkonflikt: Lösungswege."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Die Art des Konflikts hängt vom Gegenstand ab, nicht davon, wer beteiligt ist.",
   "Richtig: Ein Sachkonflikt lässt sich oft durch Information klären, ein Interessenkonflikt braucht Abwägung oder Kompromiss.",
   "Falsch: Das gilt für Sachkonflikte. Unterschiedliche Ziele bleiben auch mit mehr Fakten bestehen.",
   "Falsch: Die Begriffe sind genau vertauscht."
  ],
  "explanation": "Sachkonflikte drehen sich um Fakten oder Lösungswege, Interessenkonflikte um unvereinbare Ziele. Falle: Mehr Fakten lösen keinen Interessenkonflikt, und die Beteiligten bestimmen nicht die Konfliktart."
 },
 {
  "id": "c2q26",
  "chapter": 2,
  "lz": "LZ 02-02",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen kennzeichnen Randbedingungen im Sinne des Curriculums zutreffend?",
  "options": [
   "Sie wirken auch auf die Architekturarbeit selbst, nicht nur auf den Entwurf.",
   "Sie gelten nur, wenn der Auftraggeber sie schriftlich vorgibt.",
   "Architekturentscheidungen können keine neuen Randbedingungen erzeugen.",
   "Sie sind besonders verbindliche Qualitätsanforderungen.",
   "Sie können technologisch, organisatorisch oder regulatorisch sein.",
   "Ändert sich eine Randbedingung, kann das bestehende Entscheidungen kippen."
  ],
  "correct": [
   0,
   4,
   5
  ],
  "optExpl": [
   "Richtig: Randbedingungen wie Freigabeprozesse oder Teamverfügbarkeit prägen auch den Entwicklungsprozess (R2).",
   "Falsch: Auch ungeschriebene Vorgaben wie die Qualifikation des Teams oder die Unternehmenskultur wirken als Randbedingung.",
   "Falsch: Doch: Entscheidungen erzeugen Folgeanforderungen, z. B. schafft Messaging neue Anforderungen an Betrieb und Monitoring.",
   "Falsch: Qualitätsanforderungen sind produktbezogene Anforderungen, Randbedingungen schränken dagegen den Lösungsraum ein.",
   "Richtig: Das Curriculum unterscheidet genau diese Arten, ergänzt um Trends als weiteren Einflussfaktor.",
   "Richtig: Etwa eine neue Datenschutzvorgabe, die die Wahl der Cloud-Region ändert – solche Folgen sollen Architekt:innen erläutern können."
  ],
  "explanation": "Randbedingungen sind technologisch, organisatorisch oder regulatorisch, wirken auch auf den Prozess und können sich ändern. Falle: Sie müssen nicht schriftlich vorliegen und sind keine Qualitätsanforderungen."
 },
 {
  "id": "c2q27",
  "chapter": 2,
  "lz": "LZ 02-01",
  "r": "R3",
  "type": "single",
  "q": "Ein Product Owner will Anforderungen mit dem Kano-Modell einordnen. Was beschreibt das Kano-Modell zutreffend?",
  "options": [
   "Basis-, Leistungs- und Begeisterungsmerkmale nach Wirkung auf Zufriedenheit.",
   "Geschäftswert und Aufwand in einer Vier-Felder-Matrix.",
   "Eintrittswahrscheinlichkeit und Auswirkung von Anforderungsrisiken.",
   "Must, Should, Could und Won't nach Dringlichkeit."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Kano unterscheidet Merkmale danach, wie ihr Vorhandensein bzw. Fehlen die Kundenzufriedenheit beeinflusst.",
   "Falsch: Eine Wert-Aufwand-Matrix ist ein eigenes Priorisierungswerkzeug; Kano betrachtet die Wirkung auf die Zufriedenheit.",
   "Falsch: Das beschreibt eine Risikobewertung, kein Zufriedenheitsmodell.",
   "Falsch: Das ist MoSCoW, ein Priorisierungsverfahren – nicht Kano."
  ],
  "explanation": "Kano ordnet Merkmale nach ihrer Wirkung auf die Zufriedenheit in Basis-, Leistungs- und Begeisterungsmerkmale. Falle: MoSCoW, Risikobewertung und Wert-Aufwand-Matrix sind andere Werkzeuge."
 },
 {
  "id": "c3q1",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zu Kopplung und Kohäsion von Bausteinen treffen zu?",
  "options": [
   "Auch Vererbung und Erzeugung sind Arten der Kopplung.",
   "Efferente Kopplung: Andere Bausteine nutzen diesen Baustein.",
   "Events statt direkter Aufrufe beseitigen die fachliche Kopplung.",
   "Kohäsion misst, wie stark ein Baustein von anderen abhängt.",
   "Hohe Kohäsion: Ein Baustein dient einem klar umrissenen Zweck.",
   "Viele afferente Abhängigkeiten machen Änderungen am Baustein riskant."
  ],
  "correct": [
   0,
   4,
   5
  ],
  "optExpl": [
   "Richtig: Das Curriculum zählt neben Benutzung und Nachrichten ausdrücklich auch Vererbung, Erzeugung, Komposition und zeitliche Kopplung auf.",
   "Falsch: Vertauscht: efferent ist ausgehend (dieser Baustein nutzt andere), eingehende Abhängigkeiten sind afferent.",
   "Falsch: Laut Curriculum reduziert dynamische Kopplung die Kopplung nicht notwendigerweise: Nachrichtenformat und Bedeutung bleiben gemeinsame Abhängigkeiten.",
   "Falsch: Das beschreibt Kopplung. Kohäsion betrifft den inneren Zusammenhalt der Elemente eines Bausteins.",
   "Richtig: Was fachlich zusammengehört, liegt zusammen – genau das bedeutet hohe Kohäsion.",
   "Richtig: Afferent heißt eingehend: Viele andere hängen von diesem Baustein ab, also wirkt sich jede Änderung an ihm breit aus."
  ],
  "explanation": "Kopplung betrifft Beziehungen zwischen Bausteinen, Kohäsion den inneren Zusammenhalt. Fallen: efferent/afferent vertauscht und die Annahme, Events würden die fachliche Kopplung beseitigen."
 },
 {
  "id": "c3q2",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen beschreiben das Geheimnisprinzip (Information Hiding) nach Parnas zutreffend?",
  "options": [
   "Veränderliche Entwurfsentscheidungen hinter einer Schnittstelle verbergen.",
   "Das Speicherformat ändern, ohne die Nutzer anpassen zu müssen.",
   "Interna offenlegen ist zulässig, sofern sie dokumentiert sind.",
   "Daten und die Operationen darauf zu einer Einheit bündeln.",
   "Ziel: Voraussichtliche Änderungen bleiben lokal in einem Baustein."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Richtig: Kern des Prinzips: Was sich wahrscheinlich ändert, wird hinter einer stabilen Schnittstelle verborgen.",
   "Richtig: Ein typisches Beispiel: Das Format ist ein verborgenes Geheimnis des Bausteins, nach außen sichtbar ist nur die Schnittstelle.",
   "Falsch: Dokumentation ändert nichts daran, dass Nutzer an die Interna gekoppelt werden. Genau das soll das Prinzip verhindern.",
   "Falsch: Das ist Kapselung – das Mittel, mit dem man Information Hiding umsetzt, nicht das Prinzip selbst.",
   "Richtig: Information Hiding soll lokale Änderbarkeit erreichen; Nutzer des Bausteins bleiben unberührt."
  ],
  "explanation": "Information Hiding verbirgt veränderliche Entscheidungen, damit Änderungen lokal bleiben. Die Falle ist die Verwechslung mit Kapselung, die nur das Mittel dazu ist."
 },
 {
  "id": "c3q3",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R3",
  "type": "single",
  "q": "Wofür steht das „S“ in den SOLID-Prinzipien?",
  "options": [
   "Segregation: kleine, nutzerspezifische Schnittstellen schneiden.",
   "Substitution: Subtypen müssen ihre Basistypen ersetzen können.",
   "Single Responsibility: pro Klasse nur eine öffentliche Methode.",
   "Single Responsibility: nur ein Grund, sich zu ändern."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Das beschreibt das Interface Segregation Principle – das „I“ in SOLID.",
   "Falsch: Das ist das Liskov'sche Substitutionsprinzip – das „L“ in SOLID.",
   "Falsch: Der Name stimmt, die Deutung nicht: Es geht um den Änderungsgrund, nicht um die Anzahl der Methoden.",
   "Richtig: Das SRP fordert, dass ein Baustein nur eine Verantwortlichkeit und damit nur einen Änderungsgrund hat."
  ],
  "explanation": "„S“ = Single Responsibility Principle: ein Änderungsgrund pro Baustein. Fallen sind die Deutung „eine Methode“ sowie die Buchstaben L (Substitution) und I (Segregation)."
 },
 {
  "id": "c3q4",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zur Schichtenarchitektur (Layers) treffen zu?",
  "options": [
   "In der strikten (closed) Variante darf eine Schicht eine tieferliegende Schicht überspringen, wenn das die Performance verbessert.",
   "In der offenen (relaxed) Variante darf eine Schicht auch weiter unten liegende Schichten direkt nutzen.",
   "Eine tiefere Schicht darf höhere Schichten über eine von ihr selbst definierte Callback-Schnittstelle benachrichtigen, ohne die Schichtung zu verletzen.",
   "Jede Schicht entspricht typischerweise einem eigenen Tier, daher bringt jede zusätzliche Schicht zusätzliche Netzwerkkommunikation mit sich.",
   "Abhängigkeiten von einer tieferen zu einer höheren Schicht gelten als Schichtungsverletzung.",
   "Zusätzliche Schichten bringen Indirektion und können zu Lasten der Laufzeit-Performance gehen."
  ],
  "correct": [
   1,
   2,
   4,
   5
  ],
  "optExpl": [
   "Falsch: Das Überspringen ist gerade das Merkmal der offenen (relaxed) Schichtung. In der strikten Variante darf eine Schicht nur die unmittelbar darunterliegende nutzen – auch aus Performancegründen nicht anders.",
   "Richtig: Offene Schichtung erlaubt das Überspringen von Schichten, die Abhängigkeiten zeigen aber weiter nur nach unten. Man gewinnt Performance und Einfachheit, verliert aber etwas Austauschbarkeit.",
   "Richtig: Die Callback-Schnittstelle gehört zur tieferen Schicht, die höhere implementiert sie. Die Abhängigkeit im Code zeigt also weiter nach unten, nur der Aufruf läuft zur Laufzeit nach oben – etwa beim Observer-Muster.",
   "Falsch: Schichten sind eine logische Gliederung, Tiers eine physische Verteilung. Mehrere Schichten können problemlos im selben Prozess laufen – eine neue Schicht bedeutet nicht automatisch Netzwerkaufrufe.",
   "Richtig: Schichtung bedeutet, dass Abhängigkeiten nur von oben nach unten zeigen. Kennt eine tiefere Schicht eine höhere, entsteht eine Rückwärtsabhängigkeit, die die Schichtung verletzt.",
   "Richtig: Jede Schicht fügt eine Indirektion hinzu, durch die Aufrufe und Daten durchgereicht werden. Das kann Laufzeit kosten – ein typischer Trade-off gegenüber der besseren Änderbarkeit."
  ],
  "explanation": "Schichten: Abhängigkeiten nur nach unten; Callbacks über eine Schnittstelle der tieferen Schicht sind erlaubt. Strikt = nur die direkt darunterliegende Schicht, offen = Überspringen erlaubt. Schichten sind logisch – nicht jede Schicht ist ein eigenes Tier."
 },
 {
  "id": "c3q5",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R3",
  "type": "multi",
  "q": "Ein Team strukturiert seine Anwendung nach Ports and Adapters. Welche Aussagen treffen auf dieses Muster zu?",
  "options": [
   "Onion und Clean Architecture gelten als verwandte Varianten.",
   "Der fachliche Kern definiert die Ports.",
   "Der Fachkern ruft die Adapterklassen direkt auf.",
   "Adapter binden Datenbank oder UI an die Ports an.",
   "Setzt einen Betrieb als Microservices voraus.",
   "Ein Port ist die konkrete JDBC-Implementierung."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Richtig: Das Curriculum nennt Onion, Hexagonal und Clean Architecture als Synonyme bzw. Varianten von Ports and Adapters.",
   "Richtig: Ports sind technologieneutrale Schnittstellen, die der Fachkern aus seiner Sicht vorgibt.",
   "Falsch: Dann hinge die Fachlogik von der Technik ab. Die Abhängigkeit zeigt vom Adapter zum Port, nicht umgekehrt.",
   "Richtig: Adapter sind die konkreten, technologiespezifischen Anbindungen und lassen sich austauschen.",
   "Falsch: Das Muster strukturiert die Abhängigkeiten im Inneren und funktioniert genauso in einem Monolithen.",
   "Falsch: Verwechslung: Die konkrete Implementierung ist der Adapter; der Port ist die abstrakte Schnittstelle."
  ],
  "explanation": "Ports gehören zum Fachkern, Adapter sind die austauschbare Technik. Fallen: Port und Adapter vertauscht und die Annahme, das Muster erfordere Microservices."
 },
 {
  "id": "c3q6",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen treffen typischerweise auf Microservices zu?",
  "options": [
   "Der Gesamtaufwand für Test und Betrieb sinkt.",
   "Transaktionen über Services sind so einfach wie im Monolithen.",
   "Jeder Service ist unabhängig deploybar.",
   "Die betriebliche Komplexität steigt.",
   "Je Schicht ein Service: UI, Logik, Daten.",
   "Jeder Service verwaltet seine eigenen Daten."
  ],
  "correct": [
   2,
   3,
   5
  ],
  "optExpl": [
   "Falsch: Einzelne Services sind kleiner, das Gesamtsystem wird aber aufwendiger zu testen und zu betreiben.",
   "Falsch: Verteilte Transaktionen sind deutlich schwieriger; meist arbeitet man mit eventueller Konsistenz oder Sagas.",
   "Richtig: Unabhängiges Deployment ist ein Kernmerkmal – Services können getrennt ausgeliefert werden.",
   "Richtig: Verteilung bringt Monitoring, Netzfehler und Ausfallszenarien mit sich, die ein Monolith so nicht hat.",
   "Falsch: Microservices werden fachlich geschnitten, nicht nach technischen Schichten. Ein Schichtenschnitt erzeugt eng gekoppelte Services.",
   "Richtig: Eigene Datenhaltung hinter der Schnittstelle verhindert Kopplung über eine gemeinsame Datenbank."
  ],
  "explanation": "Microservices: fachlich geschnitten, unabhängig deploybar, eigene Daten – um den Preis höherer betrieblicher Komplexität und schwierigerer Konsistenz über Servicegrenzen."
 },
 {
  "id": "c3q7",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R1",
  "type": "multi",
  "q": "Welche der folgenden zählen laut CPSA-F-Curriculum zu den grundlegenden Entwurfsprinzipien?",
  "options": [
   "Erwarte Fehler (Robustheitsgrundsatz).",
   "Maximale Wiederverwendung.",
   "Offen/geschlossen-Prinzip.",
   "Abstraktion.",
   "Konfiguration statt Code.",
   "Konzeptionelle Integrität."
  ],
  "correct": [
   0,
   2,
   3,
   5
  ],
  "optExpl": [
   "Richtig: Leicht übersehen: „Erwarte Fehler“ als Verallgemeinerung von Postel's Law steht im Curriculum.",
   "Falsch: Klingt nach Prinzip, ist aber keins: Wiederverwendung über Fachgrenzen hinweg erhöht oft die Kopplung.",
   "Richtig: Das OCP gehört als Teil der Modularisierung zu den R1-Inhalten.",
   "Richtig: Zweckmäßige Verallgemeinerungen erarbeiten; Bausteine hängen von Abstraktionen ab.",
   "Falsch: Kein Entwurfsprinzip des Curriculums; übermäßige Konfigurierbarkeit erhöht Komplexität.",
   "Richtig: Gleichartige Probleme werden gleichartig gelöst – ein ausdrücklich genanntes Prinzip."
  ],
  "explanation": "Das Curriculum nennt u. a. Abstraktion, Modularisierung (inkl. OCP), konzeptionelle Integrität und „Erwarte Fehler“. Maximale Wiederverwendung und Konfigurierbarkeit klingen gut, sind aber keine dieser Prinzipien."
 },
 {
  "id": "c3q8",
  "chapter": 3,
  "lz": "LZ 03-10",
  "r": "R1",
  "type": "multi",
  "q": "Welche der folgenden sind typische Querschnittsthemen?",
  "options": [
   "Authentifizierung und Autorisierung.",
   "Versandkosten, die mehrere Dialoge anzeigen.",
   "Nebenläufigkeit.",
   "Validierung der Bestelldaten im Bestellmodul.",
   "Energieeffizienz.",
   "Fehlerbehandlung."
  ],
  "correct": [
   0,
   2,
   4,
   5
  ],
  "optExpl": [
   "Richtig: Zugriffsschutz betrifft nahezu alle Bausteine und Schnittstellen.",
   "Falsch: Mehrfache Anzeige macht es nicht querschnittlich: Die Berechnung gehört fachlich in einen Baustein.",
   "Richtig: Threading- und Sperrkonzepte müssen systemweit einheitlich sein, sonst drohen Deadlocks und Inkonsistenzen.",
   "Falsch: Das betrifft nur einen Baustein und ist damit fachliche Logik. Querschnittlich wäre erst ein systemweites Validierungskonzept.",
   "Richtig: Das Curriculum nennt Energieeffizienz ausdrücklich als Querschnittsthema.",
   "Richtig: Fehler entstehen in allen Bausteinen; ein einheitliches Konzept verhindert, dass jeder anders reagiert."
  ],
  "explanation": "Querschnittsthemen betreffen viele Bausteine: u. a. Fehlerbehandlung, Sicherheit, Nebenläufigkeit, Persistenz, Energieeffizienz. Fachlogik bleibt fachlich – auch wenn ihr Ergebnis an mehreren Stellen angezeigt wird."
 },
 {
  "id": "c3q9",
  "chapter": 3,
  "lz": "LZ 03-03",
  "r": "R2",
  "type": "single",
  "q": "Sie sollen eine vorhandene Zahlungsbibliothek und einen Altsystem-Kern zu größeren Strukturen kombinieren. Welche Aussage trifft am ehesten zu?",
  "options": [
   "Sichtenbasiert: Die vorhandenen Teile bilden die Verteilungssicht.",
   "Bottom-up: Vorhandenes zu größeren Einheiten zusammensetzen.",
   "Bottom-up; danach darf nicht mehr top-down gearbeitet werden.",
   "Top-down: vorgegebene Teile schrittweise verfeinern."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Bibliothek und Altsystem sind Bausteine, keine Verteilungssicht; zudem beschreibt das nicht die Entwurfsrichtung.",
   "Richtig: Bottom-up eignet sich, wenn viel Bestehendes genutzt werden muss.",
   "Falsch: Der Zusatz stimmt nicht: In der Praxis werden beide Richtungen kombiniert und iterativ gewechselt.",
   "Falsch: Top-down zerlegt das Ganze in Teile; vorhandene Teile zusammenzusetzen ist die umgekehrte Richtung."
  ],
  "explanation": "Aus Vorhandenem zusammensetzen ist Bottom-up, vom Ganzen zerlegen Top-down. Die Falle: Man muss sich nicht auf eine Richtung festlegen – beide werden kombiniert."
 },
 {
  "id": "c3q10",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zum Nutzen von Abstraktion und Modularisierung im Entwurf treffen zu?",
  "options": [
   "Die Zahl der Schnittstellen sinkt, da Bausteine mehr selbst erledigen.",
   "Unnötige Abstraktionen können die Verständlichkeit senken.",
   "Sie machen Komplexität beherrschbar.",
   "Jede zusätzliche Schicht erhöht die Änderbarkeit.",
   "Implementierungen lassen sich hinter Schnittstellen austauschen."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Falsch: Umgekehrt: Modularisierung schafft gerade explizite Schnittstellen zwischen den Bausteinen.",
   "Richtig: Das Curriculum nennt diese Grenze ausdrücklich: Zu viele Abstraktionen machen ein System schwerer verständlich.",
   "Richtig: Zerlegung in Bausteine mit klaren Schnittstellen erlaubt, Teile getrennt zu verstehen und zu ändern.",
   "Falsch: Übergeneralisierung: Eine Schicht ohne Bedarf kostet Aufwand und Verständlichkeit, ohne Änderungen zu erleichtern.",
   "Richtig: Schnittstellen sind Abstraktionen; Nutzer hängen nicht von der konkreten Implementierung ab."
  ],
  "explanation": "Abstraktion und Modularisierung machen Komplexität beherrschbar und Implementierungen austauschbar. Falle: Mehr Abstraktion ist nicht automatisch besser."
 },
 {
  "id": "c3q11",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R2",
  "type": "single",
  "q": "Für welches Szenario eignet sich das Muster Pipes and Filters am ehesten?",
  "options": [
   "Fachmodule lösen ein Problem über einen gemeinsamen Wissensspeicher.",
   "ETL-Strecke: importieren, bereinigen, anreichern, exportieren.",
   "Assistent, in dem Nutzer frei zwischen Schritten springen.",
   "Getrennte Modelle für Schreib- und Lesezugriffe."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Das beschreibt das Blackboard-Muster; Filter teilen gerade keinen gemeinsamen Zustand.",
   "Richtig: Unabhängige Verarbeitungsschritte, die Daten weiterreichen – ein klassischer Fall für Pipes and Filters.",
   "Falsch: Interaktive, frei verzweigende Abläufe passen schlecht zu einer gerichteten Verarbeitungskette.",
   "Falsch: Das ist CQRS – ein anderes Muster, das Schreiben und Lesen trennt."
  ],
  "explanation": "Pipes and Filters passt zu gerichteten, mehrstufigen Verarbeitungsketten mit unabhängigen Filtern. Fallen sind interaktive Abläufe und Verwechslungen mit Blackboard oder CQRS."
 },
 {
  "id": "c3q12",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R3",
  "type": "single",
  "q": "Welche Aussage zum Unterschied zwischen synchroner und asynchroner Kommunikation trifft zu?",
  "options": [
   "Asynchron entfällt die fachliche Abhängigkeit zum Empfänger.",
   "Asynchron müssen Sender und Empfänger gleichzeitig verfügbar sein.",
   "Lokale Aufrufe sind synchron, entfernte asynchron.",
   "Synchron wartet der Aufrufer auf die Antwort, asynchron nicht."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Nur die zeitliche Kopplung sinkt; Nachrichtenformat und Bedeutung bleiben gemeinsame Abhängigkeiten.",
   "Falsch: Vertauscht: Gleichzeitige Verfügbarkeit ist ein Merkmal synchroner Kommunikation.",
   "Falsch: lokal/remote und synchron/asynchron sind unabhängige Charakteristika; auch entfernte Aufrufe sind oft synchron (z. B. RPC).",
   "Richtig: Asynchron entkoppelt das Absenden zeitlich vom Verarbeiten; synchron blockiert der Aufrufer bis zur Antwort."
  ],
  "explanation": "Synchron heißt blockierend warten, asynchron entkoppelt zeitlich. Fallen: Asynchronität beseitigt nicht die fachliche Abhängigkeit und hängt nicht von lokal/remote ab."
 },
 {
  "id": "c3q13",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R2",
  "type": "multi",
  "q": "Ein Team diskutiert den Umgang mit technischen Schulden. Welche Aussagen treffen zu?",
  "options": [
   "Sie betreffen den Code, nicht die Architektur.",
   "Sie entstehen fast ausschließlich durch fehlende Teamkompetenz.",
   "Unbehandelt verteuern sie künftige Änderungen.",
   "Sie sollten sichtbar gemacht und priorisiert werden.",
   "Vor jedem neuen Feature sollten sie vollständig abgebaut sein.",
   "Sie können bewusst oder unbewusst entstehen."
  ],
  "correct": [
   2,
   3,
   5
  ],
  "optExpl": [
   "Falsch: Auch Architekturentscheidungen können aufgeschobene Kompromisse sein – oft die teuersten Schulden.",
   "Falsch: Zu eng: Auch bewusste Kompromisse und veränderte Anforderungen erzeugen technische Schulden.",
   "Richtig: Wie Zinsen: Jede weitere Änderung an belastetem Code oder belasteter Architektur wird aufwendiger.",
   "Richtig: Nur bekannte Schulden lassen sich gegen andere Ziele abwägen und gezielt abbauen.",
   "Falsch: Übergeneralisierung: Schulden werden priorisiert und gezielt abgebaut, nicht pauschal vor jeder Erweiterung.",
   "Richtig: Bewusst etwa als Abkürzung unter Termindruck, unbewusst durch fehlendes Wissen."
  ],
  "explanation": "Technische Schulden sind aufgeschobene Kompromisse in Code und Architektur, bewusst oder unbewusst entstanden. Man macht sie sichtbar und priorisiert sie, statt sie pauschal vor jedem Feature abzubauen."
 },
 {
  "id": "c3q14",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R2",
  "type": "multi",
  "q": "Die Fachlogik soll Kundendaten speichern, ohne von der Datenbanktechnik abzuhängen. Welche Aussagen zum DIP treffen zu?",
  "options": [
   "Die Abstraktion gehört zum Modul, das sie implementiert.",
   "Die Abstraktion gehört zur nutzenden Fachlogik.",
   "Abhängigkeiten von außen übergeben, statt sie selbst zu erzeugen.",
   "Ein DI-Framework erfüllt das Prinzip automatisch.",
   "Fachlogik und DB-Adapter hängen von einer Abstraktion ab."
  ],
  "correct": [
   1,
   4
  ],
  "optExpl": [
   "Falsch: Dann hinge die Fachlogik weiter vom Technikmodul ab – die Umkehr fände nicht statt.",
   "Richtig: Die Fachlogik definiert die Schnittstelle; so zeigt die Abhängigkeit von der Technik zur Fachlogik.",
   "Falsch: Das definiert Dependency Injection, nicht das DIP. DIP betrifft die Richtung der Abhängigkeit.",
   "Falsch: DI ist eine Technik, die das DIP unterstützen kann. Ein Framework kann auch konkrete Klassen injizieren.",
   "Richtig: Beide Seiten hängen von der Schnittstelle (z. B. „Kundenablage“) ab, nicht die Fachlogik vom Detail."
  ],
  "explanation": "DIP: Beide Seiten hängen von einer Abstraktion ab, die der nutzenden Seite gehört. Die Falle ist die Gleichsetzung mit Dependency Injection, die nur eine unterstützende Technik ist."
 },
 {
  "id": "k3",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R2",
  "type": "k",
  "points": 2,
  "q": "In einem Architektur-Review fallen folgende Begriffe. Ordnen Sie zu: Architekturmuster oder Entwurfsprinzip?",
  "categories": [
   "Architekturmuster",
   "Entwurfsprinzip"
  ],
  "rows": [
   {
    "text": "Geheimnisprinzip (Information Hiding)",
    "cat": 1
   },
   {
    "text": "Dependency Injection",
    "cat": 0
   },
   {
    "text": "Broker",
    "cat": 0
   },
   {
    "text": "Dependency Inversion Principle",
    "cat": 1
   },
   {
    "text": "CQRS",
    "cat": 0
   }
  ],
  "explanation": "Die Falle sind ähnliche Namen: Dependency Inversion ist ein Prinzip, Dependency Injection ein Muster, das man u. a. zu seiner Umsetzung nutzt. Broker und CQRS sind Muster (konkrete Lösungsschablonen), Information Hiding ist eine Leitlinie."
 },
 {
  "id": "c3q15",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zur Trennung von Verantwortlichkeiten (Separation of Concerns) treffen zu?",
  "options": [
   "Unterschiedliche Belange in getrennten Bausteinen behandeln.",
   "Geschäftsregeln und Persistenz liegen in getrennten Bausteinen.",
   "SoC ist ein anderer Name für das SRP.",
   "Jeder Belang braucht eine eigene technische Schicht.",
   "Fachlogik lässt sich ohne Technik testen."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Richtig: Das ist die Definition des Prinzips im Curriculum.",
   "Richtig: Eine typische Anwendung: Fachliches und Technisches ändern sich aus unterschiedlichen Gründen.",
   "Falsch: SoC ist allgemeiner; das SRP ist eine spezielle Ausprägung auf Klassenebene.",
   "Falsch: SoC ist nicht an Schichten gebunden; Belange können auch fachlich oder per Modul getrennt werden.",
   "Richtig: Eine Folge der Trennung: Die Fachlogik ist ohne Datenbank oder UI prüfbar."
  ],
  "explanation": "SoC behandelt unterschiedliche Belange in getrennten Bausteinen, etwa Fachliches und Technisches. Fallen: SoC mit SRP gleichsetzen oder an technische Schichten binden."
 },
 {
  "id": "c3q16",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R3",
  "type": "single",
  "q": "Welche Aussage beschreibt das Prinzip DRY am genauesten?",
  "options": [
   "Syntaktisch gleicher Code wird immer zusammengeführt.",
   "Gilt für Quellcode, nicht für Konfiguration oder Doku.",
   "Jedes Wissen hat genau eine autoritative Repräsentation.",
   "Lösungen so einfach wie möglich halten."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Zufällig gleicher Code mit unterschiedlichen fachlichen Gründen ist kein doppeltes Wissen; Zusammenführen koppelt unnötig.",
   "Falsch: Zu eng: Auch doppelt gepflegte Konfigurationswerte oder Dokumentation verletzen DRY.",
   "Richtig: DRY zielt auf Wissen und Entscheidungen – in Code, Konfiguration oder Dokumentation.",
   "Falsch: Das beschreibt KISS – verwandt im Motiv der Komplexitätsreduktion, aber ein anderes Prinzip."
  ],
  "explanation": "DRY: jedes Wissen genau einmal autoritativ repräsentiert. Falle: DRY auf textgleichen Code oder nur auf Quellcode zu reduzieren."
 },
 {
  "id": "c3q17",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R3",
  "type": "single",
  "q": "Ein Entwickler schlägt vor, „für alle Fälle“ schon jetzt mehrere Erweiterungspunkte einzubauen. Welches Prinzip spricht am ehesten dagegen?",
  "options": [
   "YAGNI: keine Funktionalität auf Vorrat bauen.",
   "Information Hiding: veränderliche Entscheidungen verbergen.",
   "OCP: offen für Erweiterung, geschlossen für Änderung.",
   "Konzeptionelle Integrität: Gleiches gleich lösen."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Spekulative Erweiterungspunkte sind Funktionalität auf Vorrat, die aktuell niemand braucht.",
   "Falsch: Information Hiding betrifft das Verbergen absehbarer Änderungen, nicht den Verzicht auf vorsorgliche Funktionalität.",
   "Falsch: Das OCP wird oft als Begründung für solche Erweiterungspunkte angeführt – es spricht nicht dagegen.",
   "Falsch: Einheitlichkeit sagt nichts darüber, ob Funktionalität vorab gebaut werden soll."
  ],
  "explanation": "YAGNI richtet sich gegen spekulative Generalisierung auf Vorrat. Falle: OCP klingt passend, wird aber eher als Argument für Erweiterungspunkte genutzt."
 },
 {
  "id": "c3q18",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zu Architekturmustern treffen zu?",
  "options": [
   "Architektur- und Entwurfsmuster sind Synonyme.",
   "Jedes Muster hat neben Vorteilen auch Nachteile.",
   "Sie helfen, bestimmte Qualitäten in einem Kontext zu erreichen.",
   "Bewährte Lösungsschablonen für wiederkehrende Strukturprobleme.",
   "Ein System sollte nur ein Architekturmuster verwenden.",
   "Sie sind ohne Anpassung auf jedes System übertragbar."
  ],
  "correct": [
   1,
   2,
   3
  ],
  "optExpl": [
   "Falsch: Das Curriculum unterscheidet Musterkategorien; Entwurfsmuster wie Adapter wirken meist feiner granular.",
   "Richtig: Darum muss man beim Einsatz bewusst abwägen.",
   "Richtig: Muster sind ein Weg zu Qualitäten – aber nur für gegebene Probleme in einem gegebenen Kontext.",
   "Richtig: So definiert das Curriculum Architekturmuster.",
   "Falsch: Reale Systeme kombinieren oft mehrere Muster, z. B. Microservices, die intern geschichtet sind.",
   "Falsch: Muster sind abstrakte Schablonen und müssen an das konkrete Problem angepasst werden."
  ],
  "explanation": "Architekturmuster sind bewährte, kontextabhängige Lösungsschablonen mit Vor- und Nachteilen. Fallen: ein Muster pro System, Übertragung ohne Anpassung, Gleichsetzung mit Entwurfsmustern."
 },
 {
  "id": "c3q19",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R3",
  "type": "single",
  "q": "Welche Elemente trennt das Muster Model-View-Controller (MVC)?",
  "options": [
   "Präsentations-, Anwendungs- und Datenhaltungsschicht.",
   "Fachkern, Ports und technische Adapter.",
   "Schreibmodell, Lesemodell und Ereignisspeicher.",
   "Datenmodell, Darstellung und Steuerung der Interaktion."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Das ist eine Drei-Schichten-Architektur. MVC trennt Belange der Benutzeroberfläche, nicht Systemschichten.",
   "Falsch: Das sind die Elemente von Ports and Adapters.",
   "Falsch: Das mischt CQRS und Event Sourcing – andere Muster.",
   "Richtig: MVC trennt Daten (Model), Darstellung (View) und Interaktionssteuerung (Controller)."
  ],
  "explanation": "MVC trennt Model, View und Controller innerhalb der Benutzeroberfläche. Falle ist vor allem die Gleichsetzung mit den drei technischen Schichten."
 },
 {
  "id": "c3q20",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R1",
  "type": "multi",
  "q": "Welche Maßnahmen fördern lose Kopplung zwischen Bausteinen?",
  "options": [
   "Feingranulare Schnittstellen mit vielen Einzelaufrufen.",
   "Kommunikation über klar definierte Schnittstellen.",
   "Fachlich Zusammengehöriges im selben Baustein bündeln.",
   "Zentrale Utility-Bibliothek, von der alle Bausteine abhängen.",
   "Abhängigkeiten per Dependency Injection übergeben.",
   "Gemeinsames Datenbankschema für direkten Datenaustausch."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Falsch: „Gesprächige“ Schnittstellen legen viele Details offen und erhöhen die Abhängigkeit.",
   "Richtig: Nutzer hängen nur vom Vertrag ab, nicht von Interna.",
   "Richtig: Hohe Kohäsion senkt den Bedarf an Beziehungen nach außen.",
   "Falsch: Wirkt DRY, schafft aber eine Abhängigkeit, über die sich Änderungen überallhin ausbreiten.",
   "Richtig: Externalisierung: Die konkrete Abhängigkeit wird erst zur Installations- oder Laufzeit festgelegt.",
   "Falsch: Bequem, koppelt aber alle Beteiligten an dieselben Strukturen; jede Schemaänderung trifft alle."
  ],
  "explanation": "Lose Kopplung entsteht über klare Schnittstellen, externalisierte Abhängigkeiten und hohe Kohäsion. Gemeinsame Schemata, zentrale Allzweck-Bibliotheken und gesprächige Schnittstellen erhöhen sie."
 },
 {
  "id": "c3q21",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R2",
  "type": "multi",
  "q": "Die Bausteine A und B referenzieren sich gegenseitig (zyklische Abhängigkeit). Welche Aussagen treffen zu?",
  "options": [
   "Unproblematisch, solange ein Team beide pflegt.",
   "Aufbrechen, indem eine Abhängigkeit über eine Abstraktion umgekehrt wird.",
   "Bei engem fachlichem Bezug: zu einem Baustein zusammenlegen.",
   "In strikter Schichtung zulässig, wenn beide in einer Schicht liegen.",
   "Events statt Aufrufe beseitigen den Zyklus samt fachlicher Abhängigkeit.",
   "Isoliertes Testen und Ändern wird erschwert."
  ],
  "correct": [
   1,
   2,
   5
  ],
  "optExpl": [
   "Falsch: Die Organisation ändert nichts an der technischen Kopplung; die Nachteile bleiben.",
   "Richtig: Definiert A eine Schnittstelle, die B implementiert, zeigen beide Abhängigkeiten in dieselbe Richtung.",
   "Richtig: Gehören A und B fachlich zusammen, ist Zusammenlegen eine legitime Lösung – das erhöht die Kohäsion.",
   "Falsch: Die Schichtregel betrifft Aufrufe zwischen Schichten; ein Zyklus innerhalb einer Schicht bleibt trotzdem problematisch.",
   "Falsch: Die technische Referenz verschwindet, die fachliche Abhängigkeit über Nachrichten und deren Bedeutung bleibt bestehen.",
   "Richtig: A und B lassen sich kaum getrennt verstehen, testen oder wiederverwenden; Änderungen breiten sich in beide Richtungen aus."
  ],
  "explanation": "Zyklen erschweren Testen, Ändern und Wiederverwenden. Lösungen sind Abhängigkeitsumkehr oder Zusammenlegen; Teamzugehörigkeit, Schichtlage oder Events beseitigen das Problem nicht."
 },
 {
  "id": "c3q22",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R2",
  "type": "multi",
  "q": "Ein Team plant ein Refactoring eines gewachsenen Bausteins. Welche Aussagen zu Refactoring treffen zu?",
  "options": [
   "Eine öffentliche API-Operation umbenennen ist für Aufrufer folgenlos.",
   "Refactoring dient in erster Linie der Fehlerbehebung.",
   "Automatisierte Tests sichern gegen ungewollte Änderungen ab.",
   "Die interne Struktur wird verbessert.",
   "Am besten als eigene Phase nach allen Features einplanen.",
   "Das beobachtbare Verhalten bleibt unverändert."
  ],
  "correct": [
   2,
   3,
   5
  ],
  "optExpl": [
   "Falsch: Externe Aufrufer müssen angepasst werden; das ist eine Schnittstellenänderung, kein folgenloses internes Refactoring.",
   "Falsch: Fehlerbehebung ändert Verhalten. Refactoring verbessert Struktur, kann Fehler aber leichter auffindbar machen.",
   "Richtig: Tests zeigen früh, wenn sich das Verhalten unbeabsichtigt verändert.",
   "Richtig: Ziel ist bessere Verständlichkeit und Änderbarkeit des Codes.",
   "Falsch: Refactoring erfolgt kontinuierlich in kleinen Schritten; eine Schlussphase lässt Schulden lange wachsen.",
   "Richtig: Genau das unterscheidet Refactoring von funktionalen Änderungen."
  ],
  "explanation": "Refactoring verbessert die interne Struktur bei gleichem Verhalten, abgesichert durch Tests und kontinuierlich. Fallen: Fehlerbehebung oder Änderung öffentlicher Schnittstellen als Refactoring ansehen."
 },
 {
  "id": "c3q23",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R1",
  "type": "multi",
  "q": "Warum programmiert man gegen Schnittstellen statt gegen konkrete Implementierungen?",
  "options": [
   "Die Kopplung an Implementierungsdetails sinkt.",
   "Die statische Kopplung verschwindet vollständig.",
   "Implementierungen werden austauschbar.",
   "Abhängigkeiten lassen sich im Test ersetzen.",
   "Es lohnt sich für jede Klasse.",
   "Aufrufer müssen nur die Signatur kennen."
  ],
  "correct": [
   0,
   2,
   3
  ],
  "optExpl": [
   "Richtig: Nutzer hängen nur noch vom Vertrag ab, nicht von Interna der Implementierung.",
   "Falsch: Die Abhängigkeit zur Schnittstelle bleibt. Sie ist nur loser, weil sie nicht mehr an Implementierungsdetails hängt.",
   "Richtig: Solange der Vertrag gilt, lässt sich die Implementierung ersetzen, ohne Nutzer zu ändern.",
   "Richtig: Hinter einer Schnittstelle kann im Test ein Testdouble stehen; das erleichtert isoliertes Testen.",
   "Falsch: Für Klassen mit absehbar nur einer Implementierung bringt eine Schnittstelle oft nur Indirektion ohne Nutzen.",
   "Falsch: Die Semantik bleibt Teil des Vertrags. Ohne sie weiß der Aufrufer nicht, was ein Aufruf bewirkt."
  ],
  "explanation": "Gegen Schnittstellen zu programmieren senkt die Kopplung an Details, macht Implementierungen austauschbar und erleichtert Tests. Die Abhängigkeit zur Schnittstelle bleibt, die Semantik muss man weiter kennen, und nicht jede Klasse braucht eine Schnittstelle."
 },
 {
  "id": "k6",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Sie prüfen Entwurfsvarianten für ein Bestellsystem. Erhöht oder reduziert die jeweilige Maßnahme die Kopplung zwischen Bausteinen?",
  "categories": [
   "Erhöht Kopplung",
   "Reduziert Kopplung"
  ],
  "rows": [
   {
    "text": "Die konkrete Implementierung wird erst zur Laufzeit per Dependency Injection übergeben.",
    "cat": 1
   },
   {
    "text": "Der Aufrufer hängt nur von einer Schnittstelle ab, nicht von deren Implementierung.",
    "cat": 1
   },
   {
    "text": "Ein Baustein erbt von einer konkreten Klasse eines anderen Bausteins.",
    "cat": 0
   },
   {
    "text": "Zwei Bausteine lesen und schreiben dieselben Tabellen einer gemeinsamen Datenbank.",
    "cat": 0
   },
   {
    "text": "Ein Adapter kapselt die Fremdbibliothek, statt sie überall direkt zu verwenden.",
    "cat": 1
   },
   {
    "text": "Ein Baustein arbeitet nur, solange der aufgerufene Dienst gleichzeitig erreichbar ist.",
    "cat": 0
   }
  ],
  "explanation": "Gemeinsame Datenbanktabellen, Vererbung aus Fremdklassen und zeitliche Abhängigkeit sind Kopplungsarten, die oft übersehen werden. Externalisierte Abhängigkeiten (DI), Schnittstellen und Adapter reduzieren die Kopplung."
 },
 {
  "id": "k8",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R3",
  "type": "k",
  "points": 2,
  "q": "Ein Team möchte seine Code-Richtlinien an SOLID ausrichten. Gehört das jeweilige Prinzip zu SOLID?",
  "categories": [
   "Teil von SOLID",
   "Nicht Teil von SOLID"
  ],
  "rows": [
   {
    "text": "Dependency Injection",
    "cat": 1
   },
   {
    "text": "Dependency Inversion Principle",
    "cat": 0
   },
   {
    "text": "Interface Segregation Principle",
    "cat": 0
   },
   {
    "text": "Separation of Concerns",
    "cat": 1
   },
   {
    "text": "Single Responsibility Principle",
    "cat": 0
   },
   {
    "text": "Law of Demeter",
    "cat": 1
   }
  ],
  "explanation": "SOLID = SRP, OCP, LSP, ISP, DIP. Die Fallen sind Verwandte: Separation of Concerns ähnelt SRP, Dependency Injection klingt wie DIP – beide gehören nicht zu SOLID, ebenso wenig das Law of Demeter."
 },
 {
  "id": "c3q24",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R1",
  "type": "multi",
  "q": "Ein Shop soll künftig weitere Zahlarten unterstützen. Welche Aussagen zum Offen/geschlossen-Prinzip (OCP) treffen zu?",
  "options": [
   "Eine bestehende if-Kette um einen weiteren Fall ergänzen.",
   "Offen für Erweiterung, geschlossen für Änderung.",
   "Neue Zahlart als weitere Implementierung einer Schnittstelle.",
   "Jede Klasse hat genau eine Verantwortlichkeit.",
   "Nach dem ersten Release darf Code nicht mehr geändert werden."
  ],
  "correct": [
   1,
   2
  ],
  "optExpl": [
   "Falsch: Gerade das vermeidet das OCP: Hier wird erprobter Code geändert statt erweitert.",
   "Richtig: Die Kernformulierung des Prinzips.",
   "Richtig: So wird Verhalten ergänzt, ohne erprobten Code zu ändern.",
   "Falsch: Das ist das Single Responsibility Principle, nicht das OCP.",
   "Falsch: Übertreibung: OCP ist kein Änderungsverbot; Fehlerbehebungen bleiben selbstverständlich möglich."
  ],
  "explanation": "OCP: Neues Verhalten über zusätzliche Implementierungen hinter Abstraktionen. Fallen: OCP als Änderungsverbot missverstehen oder mit dem SRP verwechseln."
 },
 {
  "id": "c3q25",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R3",
  "type": "single",
  "q": "Eine Schnittstelle „Kundenservice“ hat 40 Operationen, die meisten Clients nutzen nur drei. Was empfiehlt das Interface-Segregation-Prinzip?",
  "options": [
   "Alle Operationen zentral bündeln, um Konsistenz zu sichern.",
   "Schmale, rollenspezifische Schnittstellen für die Clients.",
   "Clients von Abstraktionen statt von Klassen abhängig machen.",
   "Die Schnittstelle nach technischen Schichten aufteilen."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Das ist der Ausgangszustand, den das ISP auflösen will.",
   "Richtig: Clients sollen nicht von Operationen abhängen, die sie nicht nutzen.",
   "Falsch: Das beschreibt das DIP; die Schnittstelle bliebe so breit wie zuvor.",
   "Falsch: Das ISP schneidet nach den Bedürfnissen der Clients, nicht nach Schichten."
  ],
  "explanation": "ISP: Kein Client soll von ungenutzten Operationen abhängen – also schmale, rollenspezifische Schnittstellen. Falle: Verwechslung mit dem DIP."
 },
 {
  "id": "c3q26",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R3",
  "type": "single",
  "q": "Was fordert das Liskov'sche Substitutionsprinzip (LSP)?",
  "options": [
   "Subtypen sind verhaltenskonform anstelle des Basistyps nutzbar.",
   "Erfüllt, sobald der Subtyp erbt und die Signaturen passen.",
   "Subtypen dürfen Vorbedingungen verschärfen.",
   "Vererbung grundsätzlich durch Komposition ersetzen."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Wo der Basistyp erwartet wird, muss der Subtyp funktionieren, ohne das Verhalten zu brechen.",
   "Falsch: Syntaktische Kompatibilität reicht nicht; das Verhalten muss die Erwartungen an den Basistyp erfüllen.",
   "Falsch: Umgekehrt: Verschärfte Vorbedingungen brechen Aufrufer, die sich auf den Basistyp verlassen.",
   "Falsch: Das ist die Heuristik „Komposition vor Vererbung“ – und auch die verlangt keinen generellen Ersatz."
  ],
  "explanation": "LSP verlangt verhaltenskonforme Ersetzbarkeit des Basistyps durch Subtypen. Falle: Passende Signaturen allein genügen nicht."
 },
 {
  "id": "c3q27",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R3",
  "type": "single",
  "q": "Was kennzeichnet ein Publish/Subscribe-Muster am zutreffendsten?",
  "options": [
   "Empfänger fragen den Sender regelmäßig nach Neuem ab.",
   "Sender veröffentlichen Ereignisse, ohne die Empfänger zu kennen.",
   "Jedes Ereignis hat genau einen festgelegten Empfänger.",
   "Empfänger quittieren synchron, bevor der Sender fortfährt."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Das ist Polling. Bei Pub/Sub werden Ereignisse an die Abonnenten zugestellt.",
   "Richtig: Beliebig viele Abonnenten können reagieren; der Sender kennt sie nicht.",
   "Falsch: Das beschreibt Punkt-zu-Punkt-Kommunikation; Pub/Sub ist Multipunkt.",
   "Falsch: Eine solche Rückkopplung macht den Sender wieder vom Empfänger abhängig und widerspricht dem Muster."
  ],
  "explanation": "Bei Pub/Sub veröffentlicht der Sender Ereignisse an unbekannte, beliebig viele Abonnenten. Fallen: Punkt-zu-Punkt, Polling oder synchrone Quittierung."
 },
 {
  "id": "c3q28",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R3",
  "type": "single",
  "q": "Welche Aussage beschreibt das Client-Server-Muster am zutreffendsten?",
  "options": [
   "Alle Knoten sind gleichrangig und bieten dieselben Dienste.",
   "Client und Server laufen zwingend auf getrennten Rechnern.",
   "Ein Vermittler verbindet Clients und Server, die sich nicht kennen.",
   "Clients nutzen Dienste eines Servers über eine Schnittstelle."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Das beschreibt Peer-to-Peer, nicht Client-Server.",
   "Falsch: Getrennte Rechner sind üblich, aber nicht nötig; das Muster beschreibt Rollen, nicht die Verteilung.",
   "Falsch: Das ist das Broker-Muster, das zusätzlich einen Vermittler einführt.",
   "Richtig: Der Client fordert an, der Server stellt Dienste bereit und reagiert auf Anfragen."
  ],
  "explanation": "Client-Server trennt anfragende Clients von bereitstellenden Servern. Fallen: Verwechslung mit Peer-to-Peer oder Broker und die Gleichsetzung von Rollen mit Rechnern."
 },
 {
  "id": "c3q29",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zur Heuristik „Komposition vor Vererbung“ treffen zu?",
  "options": [
   "Vermeidet die Fragilität tiefer Vererbungshierarchien.",
   "Das umschließende Objekt erbt alle Methoden seiner Teile.",
   "Vererbung ist damit grundsätzlich zu vermeiden.",
   "Verhalten lässt sich zur Laufzeit austauschen, etwa per Strategy.",
   "Vor allem bei echter „ist-ein“-Beziehung vorzuziehen."
  ],
  "correct": [
   0,
   3
  ],
  "optExpl": [
   "Richtig: Änderungen an Basisklassen schlagen auf alle Unterklassen durch; Komposition koppelt loser.",
   "Falsch: Bei Komposition wird explizit delegiert, nicht geerbt.",
   "Falsch: Übergeneralisierung: Es ist eine Heuristik mit Vorrang, kein Verbot.",
   "Richtig: Das Strategy-Muster nutzt Komposition, um Algorithmen austauschbar zu machen.",
   "Falsch: Umgekehrt: Bei einer echten „ist-ein“-Beziehung bleibt Vererbung legitim."
  ],
  "explanation": "Komposition ist flexibler, loser gekoppelt und zur Laufzeit austauschbar. Falle: Die Heuristik als generelles Vererbungsverbot lesen."
 },
 {
  "id": "c3q30",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R3",
  "type": "multi",
  "q": "Ein Webdienst soll zustandslos (stateless) betrieben werden. Welche Aussagen treffen zu?",
  "options": [
   "Benötigter Zustand liegt extern, z. B. in DB, Cache oder Token.",
   "Anfragen lassen sich auf beliebige Instanzen verteilen.",
   "Für Anwendungen mit Benutzersitzungen ungeeignet.",
   "Erleichtert horizontale Skalierung.",
   "Sticky Sessions sind ein Wesensmerkmal.",
   "Fällt eine Instanz aus, geht kein Sitzungszustand verloren."
  ],
  "correct": [
   0,
   1,
   3,
   5
  ],
  "optExpl": [
   "Richtig: Zustand über eine Anfrage hinaus wird bewusst ausgelagert.",
   "Richtig: Jede gleichwertige Instanz kann jede Anfrage bearbeiten.",
   "Falsch: Sitzungen funktionieren, wenn der Sitzungszustand extern oder im Token liegt.",
   "Richtig: Neue Instanzen lassen sich hinzufügen, ohne Zustand übertragen zu müssen.",
   "Falsch: Sticky Sessions binden Zustand an eine Instanz – das Gegenmodell zu zustandslosen Diensten.",
   "Richtig: Da die Instanz keinen Zustand hält, übernimmt eine andere die folgenden Anfragen."
  ],
  "explanation": "Zustandslose Dienste halten keinen Zustand in der Instanz; das erleichtert Skalierung und Ausfallsicherheit. Falle: Sitzungen sind trotzdem möglich, Sticky Sessions sind das Gegenmodell."
 },
 {
  "id": "c3q31",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R1",
  "type": "multi",
  "q": "Ein System soll langfristig gut änderbar bleiben. Welche strukturellen Eigenschaften fördern das?",
  "options": [
   "Ein zentraler Steuerbaustein, der alle anderen direkt kennt.",
   "Hohe Kohäsion je Baustein.",
   "Geringe Kopplung zwischen den Bausteinen.",
   "Stabile Schnittstellen mit austauschbarer Implementierung.",
   "Breite Basisklassen, von denen viele Bausteine erben.",
   "Wenige große Bausteine, um Schnittstellen einzusparen."
  ],
  "correct": [
   1,
   2,
   3
  ],
  "optExpl": [
   "Falsch: Wirkt übersichtlich, bündelt aber alle Abhängigkeiten an einer Stelle – fast jede Änderung trifft ihn.",
   "Richtig: Zusammengehörige Aufgaben liegen beieinander, Änderungen bleiben eher lokal.",
   "Richtig: Je weniger Abhängigkeiten, desto weniger Wege, über die sich Änderungen ausbreiten.",
   "Richtig: Nutzer hängen nur vom Vertrag ab; das Innere lässt sich ändern.",
   "Falsch: Spart Code, koppelt aber viele Bausteine eng an die Basisklasse.",
   "Falsch: Weniger Schnittstellen heißt hier meist geringere Kohäsion und größere Änderungsauswirkungen."
  ],
  "explanation": "Änderbarkeit fördern hohe Kohäsion, geringe Kopplung und stabile Schnittstellen. Zentrale Steuerbausteine, breite Vererbung und wenige Großbausteine sparen kurzfristig Aufwand, erhöhen aber die Kopplung."
 },
 {
  "id": "c3q32",
  "chapter": 3,
  "lz": "LZ 03-10",
  "r": "R3",
  "type": "single",
  "q": "Ein Dienst ruft einen entfernten, gelegentlich überlasteten Partnerdienst auf. Wozu dienen dabei Timeout, Retry und Circuit Breaker?",
  "options": [
   "Der Circuit Breaker beschleunigt Aufrufe durch Zwischenspeichern.",
   "Robuster Umgang mit Fehlern und Ausfällen entfernter Aufrufe.",
   "Retry ist für jede Operation ohne Weiteres unbedenklich.",
   "Sie sorgen dafür, dass der Partnerdienst weniger Last erhält."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Verwechslung mit einem Cache: Der Circuit Breaker unterbricht Aufrufe an einen gestörten Dienst.",
   "Richtig: Sie begrenzen Wartezeiten, fangen vorübergehende Fehler ab und verhindern Folgefehler.",
   "Falsch: Nur idempotente Operationen lassen sich gefahrlos wiederholen; sonst drohen z. B. doppelte Buchungen.",
   "Falsch: Ein Nebeneffekt des Circuit Breakers, aber nicht der Zweck aller drei; Retry erhöht die Last sogar."
  ],
  "explanation": "Timeout, Retry und Circuit Breaker dienen dem robusten Umgang mit Fehlern entfernter Aufrufe. Fallen: Retry ohne Idempotenz und Circuit Breaker als Cache."
 },
 {
  "id": "k9",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R3",
  "type": "k",
  "points": 2,
  "q": "Sie dokumentieren die Kommunikation zwischen Bausteinen. Ist der beschriebene Ablauf synchron oder asynchron?",
  "categories": [
   "Synchron",
   "Asynchron"
  ],
  "rows": [
   {
    "text": "Ein Ereignis wird publiziert; Abonnenten verarbeiten es, sobald sie bereit sind.",
    "cat": 1
   },
   {
    "text": "Der Aufrufer registriert einen Callback und arbeitet sofort weiter.",
    "cat": 1
   },
   {
    "text": "Ein REST-Aufruf, bei dem der Client auf die HTTP-Antwort wartet.",
    "cat": 0
   },
   {
    "text": "Der aufgerufene Dienst arbeitet intern parallel, der Aufrufer blockiert bis zur Antwort.",
    "cat": 0
   },
   {
    "text": "Der Client erhält sofort eine Auftragsnummer und fragt den Status später ab.",
    "cat": 1
   },
   {
    "text": "Ein entfernter Prozeduraufruf (RPC), dessen Ergebnis der Aufrufer abwartet.",
    "cat": 0
   }
  ],
  "explanation": "Entscheidend ist, ob der Aufrufer auf das Ergebnis wartet – nicht die Technologie (REST, RPC) und nicht, ob der Dienst intern parallel arbeitet. Auftragsnummer mit späterer Abfrage, Callback und Publish/Subscribe sind asynchron."
 },
 {
  "id": "c3q33",
  "chapter": 3,
  "lz": "LZ 03-09",
  "r": "R3",
  "type": "single",
  "q": "Wozu dient das Entwurfsmuster Fassade (Facade)?",
  "options": [
   "Austauschbare Algorithmen hinter einer gemeinsamen Schnittstelle.",
   "Vereinfachter, einheitlicher Zugang zu einem Subsystem.",
   "Stellvertreter mit gleicher Schnittstelle, der den Zugriff kontrolliert.",
   "Neue Operationen auf einer Objektstruktur, ohne deren Klassen zu ändern."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Das beschreibt das Strategy-Muster.",
   "Richtig: Die Fassade bündelt die Nutzung eines komplexen Subsystems hinter einer einfachen Schnittstelle.",
   "Falsch: Das ist der Proxy – er bietet dieselbe, nicht eine vereinfachte Schnittstelle.",
   "Falsch: Das beschreibt das Visitor-Muster."
  ],
  "explanation": "Fassade = vereinfachter Zugang zu einem Subsystem. Falle: Verwechslung mit dem Proxy, der die gleiche Schnittstelle anbietet."
 },
 {
  "id": "c3q34",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zu einem Modul im Sinne der Modularisierung treffen zu?",
  "options": [
   "Interna sind änderbar, solange die Schnittstelle stabil bleibt.",
   "Idealerweise genau eine Klasse pro Modul.",
   "Legt Datenstrukturen offen, damit Nutzer effizient zugreifen.",
   "Bündelt Zusammengehöriges hinter einer definierten Schnittstelle.",
   "Kann selbst aus weiteren Modulen bestehen.",
   "Entspricht immer genau einem deploybaren Artefakt."
  ],
  "correct": [
   0,
   3,
   4
  ],
  "optExpl": [
   "Richtig: Das ist der Kern von Information Hiding und Kapselung.",
   "Falsch: Die Größe richtet sich nach der Verantwortung, nicht nach der Klassenzahl.",
   "Falsch: Das koppelt Nutzer an Interna und widerspricht dem Geheimnisprinzip.",
   "Richtig: Ein Modul hat einen klar umrissenen Zweck und eine Schnittstelle nach außen.",
   "Richtig: Zerlegung ist hierarchisch: Ein Baustein wird als Whitebox in weitere Bausteine verfeinert.",
   "Falsch: Module sind Strukturelemente; mehrere Module können in einem Artefakt landen und umgekehrt."
  ],
  "explanation": "Ein Modul bündelt Zusammengehöriges hinter einer stabilen Schnittstelle und kann hierarchisch zerlegt werden. Fallen: Gleichsetzung mit Artefakten und Größe nach Klassenzahl."
 },
 {
  "id": "c3q35",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R2",
  "type": "multi",
  "q": "Ein Team wägt zwischen modularem Monolith und Microservices ab. Welche Aussagen treffen zu?",
  "options": [
   "Microservices vereinfachen die Datenkonsistenz.",
   "Modularer Monolith: klare interne Grenzen, ein Deployment.",
   "Ein Monolith ist meist einfacher zu testen und zu betreiben.",
   "Microservices: unabhängig deploybar, aber betrieblich komplexer.",
   "Microservices senken die Gesamtkomplexität des Systems."
  ],
  "correct": [
   1,
   2,
   3
  ],
  "optExpl": [
   "Falsch: Umgekehrt: Konsistenz über Servicegrenzen hinweg ist schwieriger, da jeder Dienst eigene Daten hält.",
   "Richtig: Er kann intern sauber gegliedert sein und wird dennoch als Einheit ausgeliefert.",
   "Richtig: Ein Deployment, ein Prozess, keine verteilten Fehlerfälle – das vereinfacht Test und Betrieb.",
   "Richtig: Unabhängige Releases und Skalierung erkauft man mit mehr Betriebsaufwand und Netzwerk als Fehlerquelle.",
   "Falsch: Sie verlagern Komplexität in Betrieb und Kommunikation, statt sie zu beseitigen."
  ],
  "explanation": "Microservices bringen unabhängige Releases, aber mehr Betriebskomplexität und schwierigere Konsistenz. Falle: Sie senken die Komplexität nicht, sondern verlagern sie."
 },
 {
  "id": "c3q36",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "multi",
  "q": "Ein Team will für ein neues System Architekturmuster auswählen. Welche Aussagen treffen zu?",
  "options": [
   "Ein bewährtes Muster passt unabhängig vom Kontext.",
   "Die Auswahl richtet sich nach Qualitätszielen und Kontext.",
   "Domänenspezifische Musterquellen können Alternativen liefern.",
   "Je mehr Muster kombiniert werden, desto robuster der Entwurf.",
   "Muster schaffen ein gemeinsames Vokabular im Team.",
   "Ein unpassendes Muster kann Qualitäten verschlechtern."
  ],
  "correct": [
   1,
   2,
   4,
   5
  ],
  "optExpl": [
   "Falsch: Bewährt heißt nicht universell: Ohne passenden Kontext kann ein Muster schaden.",
   "Richtig: Muster sind Wege zu bestimmten Qualitäten in einem gegebenen Kontext.",
   "Richtig: Leicht übersehen: Das Curriculum nennt neben allgemeinen Katalogen auch domänenspezifische Musterquellen.",
   "Falsch: Jedes Muster bringt Nachteile und Komplexität mit; Kombinieren ist kein Selbstzweck.",
   "Richtig: Ein Name wie „Pipes and Filters“ transportiert eine ganze Lösungsidee.",
   "Richtig: Muster haben Trade-offs; falsch gewählt, überwiegen die Nachteile."
  ],
  "explanation": "Muster werden passend zu Qualitätszielen und Kontext gewählt; sie schaffen Vokabular, haben aber Trade-offs. Falle: „bewährt“ oder „viele Muster“ als Qualitätsgarantie zu lesen."
 },
 {
  "id": "c3q37",
  "chapter": 3,
  "lz": "LZ 03-03",
  "r": "R3",
  "type": "multi",
  "q": "Ein Team schneidet sein System nach Bounded Contexts (DDD). Welche Aussagen treffen zu?",
  "options": [
   "Ein Bounded Context grenzt ein Modell mit eigener Fachsprache ab.",
   "„Kunde“ muss in allen Contexts gleich modelliert sein.",
   "Jeder Bounded Context wird als eigener Microservice umgesetzt.",
   "Bounded Contexts entsprechen den Schichten der Anwendung.",
   "Fachliche Grenzen können quer zu technischen Schichten verlaufen."
  ],
  "correct": [
   0,
   4
  ],
  "optExpl": [
   "Richtig: Innerhalb des Kontexts gilt eine konsistente, gemeinsame Sprache (Ubiquitous Language).",
   "Falsch: Gerade nicht: Jeder Kontext darf Begriffe anders modellieren – das ist der Sinn der Abgrenzung.",
   "Falsch: Möglich, aber nicht zwingend; auch ein modularer Monolith kann nach Contexts geschnitten sein.",
   "Falsch: Verwechslung: Schichten sind ein technischer Schnitt, Bounded Contexts ein fachlicher.",
   "Richtig: Der Schnitt folgt der Domäne; ein Kontext kann eigene UI-, Logik- und Datenteile umfassen."
  ],
  "explanation": "Bounded Contexts grenzen fachliche Modelle mit eigener Sprache ab, quer zu technischen Schichten. Fallen: einheitliche Begriffe überall erzwingen und Context = Microservice setzen."
 },
 {
  "id": "c3q38",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zur Kapselung (Encapsulation) treffen zu?",
  "options": [
   "Kapselung und Information Hiding sind dasselbe Prinzip.",
   "Kapselung ist ein Mittel, um Information Hiding umzusetzen.",
   "Erreicht, sobald alle Felder private sind und Getter/Setter haben.",
   "Zugriff auf den Zustand nur über die Schnittstelle.",
   "Die interne Repräsentation bleibt änderbar."
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Falsch: Eng verwandt, aber nicht identisch: Information Hiding verbirgt veränderliche Entwurfsentscheidungen, nicht nur Daten.",
   "Richtig: Information Hiding ist das Prinzip, Kapselung das Mittel dazu.",
   "Falsch: Pauschale Getter und Setter legen die interne Struktur doch wieder offen.",
   "Richtig: Interna sind von außen nicht direkt erreichbar.",
   "Richtig: Solange die Schnittstelle gleich bleibt, merken Nutzer eine geänderte Repräsentation nicht."
  ],
  "explanation": "Kapselung beschränkt den Zugriff auf die Schnittstelle und ist das Mittel für Information Hiding. Fallen: Getter/Setter für alles und Gleichsetzung beider Begriffe."
 },
 {
  "id": "c3q39",
  "chapter": 3,
  "lz": "LZ 03-09",
  "r": "R3",
  "type": "single",
  "q": "Ein Zahlungsdienstleister bietet eine Schnittstelle, die nicht zu der von Ihrem System erwarteten passt. Welches Muster ist einschlägig?",
  "options": [
   "Strategy.",
   "Proxy.",
   "Fassade.",
   "Adapter."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Strategy macht Algorithmen austauschbar; die Inkompatibilität der Schnittstelle bliebe bestehen.",
   "Falsch: Ein Proxy bietet dieselbe Schnittstelle wie das Original – er passt sie nicht an.",
   "Falsch: Eine Fassade vereinfacht ein komplexes Subsystem, löst aber keine Inkompatibilität zu einer erwarteten Schnittstelle.",
   "Richtig: Er übersetzt zwischen erwarteter und vorhandener Schnittstelle, ohne eine von beiden zu ändern."
  ],
  "explanation": "Inkompatible Schnittstellen löst der Adapter. Fallen: Fassade vereinfacht, Proxy behält die Schnittstelle bei, Strategy tauscht Algorithmen."
 },
 {
  "id": "c3q40",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R1",
  "type": "multi",
  "q": "Ein Team zerlegt einen gewachsenen Monolithen in Module. Welche Ziele verfolgt Modularisierung dabei?",
  "options": [
   "Klar geschnittene Teile lassen sich wiederverwenden.",
   "Weniger Aufrufe zwischen Bausteinen.",
   "Bausteine möglichst generisch auslegen.",
   "Teile können parallel entwickelt werden.",
   "Änderungen bleiben auf wenige Bausteine begrenzt."
  ],
  "correct": [
   0,
   3,
   4
  ],
  "optExpl": [
   "Richtig: Ein Baustein mit klarem Zweck und sauberer Schnittstelle passt auch in andere Kontexte – Wiederverwendbarkeit folgt aus gutem Schnitt.",
   "Falsch: Modularisierung erzeugt eher mehr Aufrufe über Schnittstellen. Performance ist ein abzuwägender Trade-off, kein Ziel der Modularisierung.",
   "Falsch: Übergeneralisierung erhöht die Komplexität und baut auf Vorrat (YAGNI). Wiederverwendbarkeit entsteht durch klaren Schnitt, nicht durch maximale Generik.",
   "Richtig: Klar abgegrenzte Module mit definierten Schnittstellen erlauben getrennte Arbeit; abgestimmt werden muss nur der Vertrag.",
   "Richtig: Verbirgt jedes Modul seine Interna hinter einer Schnittstelle, wirkt eine Änderung meist nur lokal – ein Kernziel der Modularisierung."
  ],
  "explanation": "Modularisierung zielt auf lokale Änderungen, parallele Entwicklung und Wiederverwendbarkeit. Falle: maximale Generik und weniger Aufrufe klingen nach Qualität, sind aber kein Ziel."
 },
 {
  "id": "c3q41",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R2",
  "type": "multi",
  "q": "Eine Logging-Bibliothek wird von 40 Bausteinen genutzt. Was gilt für diese starke Wiederverwendung am ehesten?",
  "options": [
   "Die Kopplung im System sinkt durch weniger Duplikate.",
   "Ihre Schnittstelle sollte stabil und versioniert sein.",
   "Sie sollte möglichst konkret implementiert sein.",
   "Vorab für künftige Nutzer generalisieren.",
   "Sie wird oft allgemeiner und dadurch komplexer.",
   "Die afferente Kopplung an die Bibliothek ist hoch."
  ],
  "correct": [
   1,
   4,
   5
  ],
  "optExpl": [
   "Falsch: Wiederverwendung vermeidet Duplikation, senkt aber nicht die Kopplung – alle Nutzer hängen nun am selben Baustein.",
   "Richtig: Viele Abhängige vertragen keine häufigen Vertragsänderungen; Versionierung erlaubt Weiterentwicklung ohne Zwangsanpassung aller.",
   "Falsch: Viel genutzte, stabile Bausteine sollten eher abstrakt sein, damit man sie erweitern kann, ohne sie zu ändern.",
   "Falsch: Generalisieren ohne konkreten Bedarf verstößt gegen YAGNI; man errät dabei oft die falschen Variationspunkte.",
   "Richtig: Um viele Nutzer zu bedienen, braucht ein Baustein Konfiguration und Erweiterungspunkte. Diese Allgemeinheit kostet Komplexität.",
   "Richtig: Jeder Nutzer ist eine eingehende Abhängigkeit. Viele Nutzer machen die Bibliothek schwer änderbar."
  ],
  "explanation": "Starke Wiederverwendung erhöht afferente Kopplung und Allgemeinheit und verlangt stabile Schnittstellen. Falle: „weniger Duplikate = weniger Kopplung“ verwechselt DRY mit Entkopplung."
 },
 {
  "id": "k12",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Bei der Analyse eines gewachsenen Systems fallen diese Merkmale auf. Fördern sie die Wartbarkeit oder schaden sie ihr?",
  "categories": [
   "Fördert Wartbarkeit",
   "Schadet Wartbarkeit"
  ],
  "rows": [
   {
    "text": "Ein Baustein, von dem fast alle anderen abhängen und der sich häufig ändert.",
    "cat": 1
   },
   {
    "text": "Eine Schnittstelle, die interne Datenstrukturen 1:1 nach außen abbildet.",
    "cat": 1
   },
   {
    "text": "Jeder Baustein hat einen klar umrissenen fachlichen Zweck.",
    "cat": 0
   },
   {
    "text": "Codestellen, die nur zufällig gleich aussehen, bleiben bewusst getrennt.",
    "cat": 0
   },
   {
    "text": "Zwei Bausteine, die sich gegenseitig direkt aufrufen.",
    "cat": 1
   },
   {
    "text": "Fachlogik, die sich ohne Datenbank und Oberfläche testen lässt.",
    "cat": 0
   }
  ],
  "explanation": "Viele afferente Abhängigkeiten auf einen instabilen Baustein, Zyklen und durchgereichte Interna verbreiten Änderungen. Überraschend: Zufällig gleichen Code getrennt zu lassen ist kein DRY-Verstoß, denn DRY betrifft dasselbe Wissen."
 },
 {
  "id": "c3q42",
  "chapter": 3,
  "lz": "LZ 03-03",
  "r": "R1",
  "type": "single",
  "q": "Für ein neues Versicherungssystem stehen fachliche und technische Strukturierung an. Welches Vorgehen ist am ehesten zu empfehlen?",
  "options": [
   "Fachlich schneiden, die Technik darauf ausrichten.",
   "Erst Frameworks und Schichten wählen, dann die Fachlichkeit einpassen.",
   "Jede Fachkomponente genau einer Schicht zuordnen.",
   "Die Bausteine nach dem vorhandenen Datenbankschema schneiden."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Der fachliche Schnitt folgt dem Problemraum und ist meist langlebiger. Getrennt von der Technik bleibt die Fachlogik testbar, die Technik austauschbar.",
   "Falsch: Technik-first zwingt die Fachlichkeit in technische Grenzen; fachliche Änderungen verteilen sich dann über viele Bausteine.",
   "Falsch: Fachkomponenten verlaufen quer zu den Schichten – „Vertrag“ braucht UI-, Logik- und Persistenzanteile. Gleichsetzen zerreißt die Fachlichkeit.",
   "Falsch: Ein gewachsenes Schema spiegelt oft historische und technische Entscheidungen. Der Schnitt nach Tabellen ergibt datengetriebene statt verantwortungsorientierte Bausteine."
  ],
  "explanation": "Fachliches und Technisches werden getrennt, und die Technik dient der Fachlichkeit. Falle: Ein Schnitt nach Tabellen klingt fachlich, ist aber technisch-historisch geprägt."
 },
 {
  "id": "c3q43",
  "chapter": 3,
  "lz": "LZ 03-03",
  "r": "R2",
  "type": "single",
  "q": "Ein Architekt verweist beim Zerlegen auf die „Millersche Zahl“ (7±2). Was lässt sich daraus am ehesten ableiten?",
  "options": [
   "Ein Baustein sollte etwa 7±2 Operationen anbieten.",
   "Je Zerlegungsebene nur überschaubar viele Elemente.",
   "Ein Entwurfsteam sollte höchstens 7±2 Personen umfassen.",
   "Ein System sollte höchstens 7±2 Module enthalten."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Miller trifft keine Aussage zu Schnittstellenoperationen, sondern zur begrenzten Kapazität des Kurzzeitgedächtnisses.",
   "Richtig: Menschen erfassen nur etwa 7±2 Informationseinheiten gleichzeitig. Werden es mehr, gruppiert man hierarchisch.",
   "Falsch: Die Zahl wird hier auf Teamgrößen übertragen. Miller bezieht sich auf gleichzeitig fassbare Informationseinheiten.",
   "Falsch: Es ist keine Obergrenze für das Gesamtsystem, sondern eine Faustregel pro Darstellungsebene; hierarchisch gegliedert sind viele Module möglich."
  ],
  "explanation": "7±2 ist eine kognitive Faustregel je Ebene, ein Argument für hierarchische Zerlegung. Falle: Die Zahl als harte Grenze für Module, Teams oder Operationen zu lesen."
 },
 {
  "id": "c3q44",
  "chapter": 3,
  "lz": "LZ 03-03",
  "r": "R2",
  "type": "single",
  "q": "Welche Aussage zum Vorgehen beim Architekturentwurf trifft am ehesten zu?",
  "options": [
   "Feedback ist erst sinnvoll, wenn der Entwurf stabil ist.",
   "Entwurf und Anforderungsklärung beeinflussen sich gegenseitig.",
   "Entscheidungen revidiert man nur bei geänderten Anforderungen.",
   "Ein Referenzmodell ersetzt eigene Abwägungen weitgehend."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Gerade frühes Feedback, z. B. über Prototypen, deckt falsche Annahmen auf, solange Korrekturen noch günstig sind.",
   "Richtig: Entwurfsideen werfen neue Fragen an die Anforderungen auf, und geklärte Anforderungen verändern den Entwurf. Beides verläuft iterativ.",
   "Falsch: Auch neue Erkenntnisse – etwa aus Prototypen oder Messungen – können eine Entscheidung kippen, ohne dass sich Anforderungen ändern.",
   "Falsch: Ein Referenzmodell ist ein Ausgangspunkt. Ob es zu Anforderungen und Randbedingungen passt, muss man trotzdem selbst abwägen."
  ],
  "explanation": "Architekturentwurf ist iterativ: Entwurf und Anforderungen beeinflussen sich gegenseitig, Feedback kommt früh, und neue Erkenntnisse sind ein legitimer Grund für Revisionen. Ein Referenzmodell ersetzt das eigene Abwägen nicht."
 },
 {
  "id": "c3q45",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R1",
  "type": "multi",
  "q": "In einem Review heißt es: „Wir brauchen lose Kopplung.“ Welche Aussagen ordnen dieses Ziel zutreffend ein?",
  "options": [
   "Ideal ist ein System ohne Abhängigkeiten.",
   "So lose wie möglich, so eng wie fachlich nötig.",
   "Sie ist ein anderer Name für hohe Kohäsion.",
   "Sie entsteht durch Verteilung auf mehrere Server.",
   "Sie erleichtert das isolierte Testen von Bausteinen."
  ],
  "correct": [
   1,
   4
  ],
  "optExpl": [
   "Falsch: Ohne Abhängigkeiten erbringt das System keine Gesamtfunktion. Das Ideal ist angemessene, nicht keine Kopplung.",
   "Richtig: Ohne Abhängigkeiten gäbe es keine Zusammenarbeit. Ziel ist angemessene, funktional ausreichende Kopplung.",
   "Falsch: Verwandt, aber verschieden: Kopplung betrifft Beziehungen zwischen Bausteinen, Kohäsion den Zusammenhalt innerhalb eines Bausteins.",
   "Falsch: Verteilung ändert die fachliche Abhängigkeit nicht und fügt neue Kopplungsarten hinzu (Netzwerk, Verfügbarkeit, Formate).",
   "Richtig: Wenige Abhängigkeiten lassen sich leicht durch Test-Doubles ersetzen; der Baustein ist isoliert prüfbar."
  ],
  "explanation": "Lose Kopplung heißt funktional ausreichend, nicht null; sie erleichtert Änderungen und Tests. Falle: Verwechslung mit Kohäsion oder mit physischer Verteilung."
 },
 {
  "id": "c3q46",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R2",
  "type": "single",
  "q": "Welche Beziehung zwischen zwei Klassen führt tendenziell zur stärksten Kopplung?",
  "options": [
   "Delegation an ein Objekt hinter einem Interface.",
   "Benachrichtigung über asynchrone Ereignisse.",
   "Ableitung von einer konkreten Basisklasse.",
   "Aufruf über eine schmale, stabile Schnittstelle."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Der Aufrufer kennt nur den Vertrag; die Implementierung bleibt austauschbar – eher lose Kopplung.",
   "Falsch: Der Sender kennt den Empfänger nicht und wartet nicht. Gemeinsam bleiben nur Format und Bedeutung der Ereignisse.",
   "Richtig: Implementierungsvererbung bindet an Interna der Basis (geschützte Felder, Aufrufreihenfolge); Änderungen dort brechen Ableitungen (fragile base class).",
   "Falsch: Eine schmale Schnittstelle verlangt wenig Wissen übereinander – das Ideal loser Kopplung."
  ],
  "explanation": "Implementierungsvererbung koppelt am stärksten, weil sie an Interna der Basisklasse bindet. Falle: Vererbung wirkt „objektorientiert sauber“, ist aber enger als Delegation oder Ereignisse."
 },
 {
  "id": "c3q47",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R2",
  "type": "multi",
  "q": "Ein Team ersetzt direkte Methodenaufrufe durch Nachrichten über einen Broker. Was gilt für diese dynamische Kopplung?",
  "options": [
   "Sender und Empfänger sind nun fachlich unabhängig.",
   "Formatänderungen betreffen nur noch den Broker.",
   "Die fachliche Abhängigkeit bleibt bestehen.",
   "Sie ist in statischen Codeanalysen schwerer zu sehen.",
   "Die Kopplung sinkt, weil kein Import mehr nötig ist."
  ],
  "correct": [
   2,
   3
  ],
  "optExpl": [
   "Falsch: Der Broker entkoppelt zeitlich und technisch, nicht fachlich: Format und Bedeutung der Nachricht bleiben gemeinsame Abhängigkeit.",
   "Falsch: Ändert der Sender das Format, bricht der Empfänger trotzdem – der Broker leitet nur weiter.",
   "Richtig: Wer bestimmte Daten oder Reaktionen erwartet, hängt weiter vom anderen ab – egal, wann die Abhängigkeit aufgelöst wird.",
   "Richtig: Die Abhängigkeit entsteht erst zur Laufzeit über Nachrichten oder Konfiguration und taucht in Importen nicht auf.",
   "Falsch: Fehlende Importe beseitigen nur die statische Sicht auf die Abhängigkeit. Dynamisch statt statisch senkt Kopplung nicht notwendigerweise."
  ],
  "explanation": "Dynamische Kopplung verlagert oder versteckt Abhängigkeiten, statt sie zwingend zu verringern. Falle: „Ereignisbasiert = entkoppelt“ stimmt nur technisch."
 },
 {
  "id": "c3q48",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R2",
  "type": "single",
  "q": "Baustein A wird von zwölf anderen genutzt und nutzt selbst keinen. Was trifft auf A am ehesten zu?",
  "options": [
   "A ist instabil, da er von vielen abhängt.",
   "A gilt als ausgereift und weitgehend fehlerfrei.",
   "A sollte möglichst konkret implementiert sein.",
   "A ist stabil: Änderungen an A sind riskant."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Vertauscht: A nutzt keinen anderen Baustein, hat also keine efferenten Abhängigkeiten. Instabil machen ausgehende Abhängigkeiten.",
   "Falsch: „Stabil“ ist hier eine Kopplungsaussage, keine Qualitätsaussage. Über Reife oder Fehlerfreiheit sagt die Metrik nichts.",
   "Falsch: Viel genutzte, stabile Bausteine sollten eher abstrakt sein, damit sie erweiterbar sind, ohne sie zu ändern.",
   "Richtig: Viele eingehende (afferente) Abhängigkeiten heißen: Jede Änderung trifft zwölf Nutzer. „Stabil“ meint hier schwer änderbar."
  ],
  "explanation": "Afferent = eingehend = viele Nutzer → stabil im Sinne von schwer änderbar. Falle: afferent und efferent vertauschen oder „stabil“ als „fehlerfrei“ lesen."
 },
 {
  "id": "c3q49",
  "chapter": 3,
  "lz": "LZ 03-10",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zu Querschnittskonzepten treffen laut Curriculum zu?",
  "options": [
   "Energieeffizienz kann Gegenstand eines Querschnittskonzepts sein.",
   "Sie sind erst nötig, wenn alle Bausteine betroffen sind.",
   "Man legt sie fest, nachdem die Bausteine fertig sind.",
   "Sie können systemübergreifend wiederverwendet werden.",
   "Ein Rabatt, der auf vielen Seiten erscheint, ist eines.",
   "Querschnittskonzepte beeinflussen sich gegenseitig."
  ],
  "correct": [
   0,
   3,
   5
  ],
  "optExpl": [
   "Richtig: Das Curriculum nennt Energieeffizienz ausdrücklich neben Persistenz, Kommunikation, GUI, Fehlerbehandlung und Nebenläufigkeit.",
   "Falsch: Ein Konzept lohnt sich, sobald viele Bausteine ein Thema einheitlich lösen sollen. Wer auf „alle“ wartet, erntet Wildwuchs.",
   "Falsch: Später finden sich bereits uneinheitliche Einzellösungen, und die Vereinheitlichung wird teuer.",
   "Richtig: Das Curriculum hält fest, dass Querschnittskonzepte über Systemgrenzen hinweg wiederverwendbar sein können, etwa ein Logging-Konzept.",
   "Falsch: Eine fachliche Einzelaufgabe wird nicht zum Querschnittsthema, nur weil ihr Ergebnis an mehreren Stellen angezeigt wird.",
   "Richtig: Sicherheit, Fehlerbehandlung und Protokollierung hängen zusammen, etwa: Was darf in einer Fehlermeldung oder im Log stehen?"
  ],
  "explanation": "Querschnittskonzepte lösen viele Bausteine betreffende Themen einheitlich, auch Energieeffizienz; sie wirken aufeinander und sind wiederverwendbar. Falle: fachliche Einzelaufgaben als Querschnitt einordnen."
 },
 {
  "id": "c3q50",
  "chapter": 3,
  "lz": "LZ 03-10",
  "r": "R3",
  "type": "single",
  "q": "Ein Team wählt für den Produktkatalog einen BASE-orientierten Datenspeicher statt eines ACID-Systems. Was bedeutet das am ehesten?",
  "options": [
   "Strengere Transaktionsgarantien als mit ACID.",
   "Verfügbarkeit vor sofortiger Konsistenz aller Replikate.",
   "Datenverlust wird zugunsten der Verfügbarkeit toleriert.",
   "Der Wechsel von NoSQL auf eine relationale Datenbank."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Umgekehrt: ACID bietet die strikteren Garantien (Atomarität, Isolation …); BASE lockert sie bewusst.",
   "Richtig: BASE (Basically Available, Soft state, Eventually consistent) nimmt kurzzeitig abweichende Lesestände in Kauf, um verfügbar zu bleiben.",
   "Falsch: Eventual consistency heißt verzögerte Konsistenz: Replikate gleichen sich später an, Daten gehen dadurch nicht verloren.",
   "Falsch: Vertauscht: ACID ist typisch für relationale Systeme, BASE häufig für NoSQL-Speicher."
  ],
  "explanation": "ACID = strikte Transaktionskonsistenz, BASE = Verfügbarkeit mit schlussendlicher Konsistenz. Falle: „eventual“ als Datenverlust deuten oder die Zuordnung relational/NoSQL vertauschen."
 },
 {
  "id": "c3q51",
  "chapter": 3,
  "lz": "LZ 03-10",
  "r": "R3",
  "type": "single",
  "q": "Ein verteiltes Buchungssystem soll auch bei Netzwerkpartitionen funktionieren. Was folgt laut CAP-Theorem am ehesten?",
  "options": [
   "Während einer Partition: Konsistenz oder Verfügbarkeit wählen.",
   "Dauerhaft genau zwei der drei Eigenschaften festlegen.",
   "Genug Redundanz sichert alle drei Eigenschaften zugleich.",
   "Kosten, Verfügbarkeit und Performance abwägen."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Tritt eine Partition auf, kann man nicht gleichzeitig alle Knoten konsistent und jede Anfrage beantwortbar halten – man muss abwägen.",
   "Falsch: Die Abwägung wird erst bei einer Partition erzwungen. Ohne Partition sind Konsistenz und Verfügbarkeit gemeinsam erreichbar.",
   "Falsch: Redundanz hebt die Grenze nicht auf: Während der Partition können die getrennten Teile sich nicht abstimmen.",
   "Falsch: CAP steht für Consistency, Availability, Partition tolerance. Kosten und Performance gehören nicht dazu."
  ],
  "explanation": "CAP erzwingt bei einer Netzwerkpartition die Wahl zwischen Konsistenz und Verfügbarkeit. Falle: „immer zwei aus drei“ – ohne Partition gibt es diesen Zwang nicht."
 },
 {
  "id": "c3q52",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R2",
  "type": "single",
  "q": "In einer gelockerten Schichtenarchitektur ruft die UI direkt die Datenzugriffsschicht auf (Layer-Bridging). Was trifft am ehesten zu?",
  "options": [
   "Das ist ein Aufruf nach oben über einen Callback.",
   "Der Aufruf macht die Fachschicht austauschbarer.",
   "Erlaubt, erzeugt aber zusätzliche Abhängigkeiten.",
   "Damit ist die Architektur nicht mehr geschichtet."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Bridging überspringt eine Schicht nach unten. Callbacks von unten nach oben sind etwas anderes.",
   "Falsch: Eher umgekehrt: Austauschbar wird die Datenzugriffsschicht schwerer, weil sie nun von zwei Schichten genutzt wird.",
   "Richtig: Gelockerte Schichtung erlaubt das Überspringen; die UI hängt dann an zwei Schichten, was bewusst entschieden und dokumentiert werden sollte.",
   "Falsch: Auch die gelockerte Variante ist eine Schichtenarchitektur; verboten bleiben Aufrufe nach oben."
  ],
  "explanation": "Layer-Bridging = Überspringen einer Zwischenschicht nach unten; in der gelockerten Variante erlaubt, aber mit mehr Abhängigkeiten. Falle: Verwechslung mit Callbacks nach oben."
 },
 {
  "id": "c3q53",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "multi",
  "q": "Ein Team will eine streng geschichtete Architektur. Welche Regeln gehören idealtypisch dazu?",
  "options": [
   "Eine Schicht darf alle tieferen Schichten nutzen.",
   "Ähnliches Abstraktionsniveau innerhalb einer Schicht.",
   "Eine Schicht nutzt nur die direkt darunterliegende.",
   "Zyklen auflösen, indem man die Bausteine auf Schichten verteilt.",
   "Jede Schicht läuft in einem eigenen Prozess.",
   "Keine Aufrufe von unten nach oben."
  ],
  "correct": [
   1,
   2,
   5
  ],
  "optExpl": [
   "Falsch: Das beschreibt die gelockerte Schichtung, nicht die strikte.",
   "Richtig: Bausteine einer Schicht sollen auf vergleichbarer Ebene liegen, damit die Schicht eine klare Rolle hat.",
   "Richtig: Das ist der Kern der strikten Variante: kein Überspringen von Schichten.",
   "Falsch: Wechselseitige Abhängigkeit bleibt bestehen; verteilt man die Bausteine, entsteht ein verbotener Aufruf nach oben.",
   "Falsch: Schichten sind logische Strukturen; physische Trennung beschreibt Tiers.",
   "Richtig: Aufwärtsabhängigkeiten würden Zyklen erzeugen und die Schichtung aufheben."
  ],
  "explanation": "Strikt geschichtet: nur nach unten, nur zur Nachbarschicht, ähnliches Abstraktionsniveau. Falle: Nutzung aller tieferen Schichten ist die gelockerte Variante; Schichten sind keine Tiers."
 },
 {
  "id": "c3q54",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R2",
  "type": "single",
  "q": "Ein System hat sieben strikt übereinanderliegende Schichten. Welcher Nachteil ist dafür am ehesten typisch?",
  "options": [
   "Jede Schicht benötigt einen eigenen Server.",
   "Obere Schichten müssen Interna der unteren kennen.",
   "Durchreichen kostet Latenz und erzeugt Boilerplate.",
   "Ein fachlicher Schnitt ist nicht mehr möglich."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Schichten sind logisch, nicht physisch – die Zuordnung zu Servern ist eine Verteilungsentscheidung.",
   "Falsch: Gerade nicht: Obere Schichten nutzen nur die Schnittstelle der darunterliegenden Schicht.",
   "Richtig: Jede Schicht leitet Aufrufe weiter, auch wenn sie nichts hinzufügt; das kostet Laufzeit und gleichförmigen Code.",
   "Falsch: Schichten lassen sich mit fachlichen Komponenten kombinieren, etwa Schichten je Fachmodul."
  ],
  "explanation": "Tiefe strikte Schichtung kostet Latenz durch Durchreichen und erzeugt Weiterreich-Code. Falle: Schichten mit Servern (Tiers) gleichsetzen."
 },
 {
  "id": "c3q55",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R2",
  "type": "single",
  "q": "In einer Pipes-and-Filters-Verarbeitung unterscheidet man aktive und passive Filter. Worin liegt der Unterschied?",
  "options": [
   "Aktive Filter holen oder schieben Daten selbst.",
   "Aktive Filter laufen sequenziell, passive parallel.",
   "Aktive Filter transformieren, passive reichen durch.",
   "Aktive Filter kennen ihre Nachbarfilter."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Aktive Filter treiben den Transport an (pull/push); passive werden von außen beliefert bzw. ausgelesen.",
   "Falsch: Nebenläufigkeit hängt nicht an dieser Unterscheidung; beide Arten können nebenläufig oder sequenziell betrieben werden.",
   "Falsch: Beide Arten verarbeiten Daten; die Unterscheidung betrifft den Antrieb des Datenflusses.",
   "Falsch: Filter kennen einander grundsätzlich nicht; sie sind nur über Pipes verbunden."
  ],
  "explanation": "Aktiv/passiv beschreibt, wer den Datenfluss antreibt. Falle: Verwechslung mit Transformation, Parallelität oder Kenntnis der Nachbarn."
 },
 {
  "id": "c3q56",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R2",
  "type": "multi",
  "q": "Für einen nächtlichen Import (lesen, bereinigen, anreichern, speichern) wird Pipes and Filters erwogen. Was trifft zu?",
  "options": [
   "Die Stufen können nebenläufig arbeiten.",
   "Einzelne Filter lassen sich austauschen.",
   "Auch für dialogorientierte Abläufe gut geeignet.",
   "Gemeinsamer Zustand vereinfacht die Abstimmung der Filter.",
   "Die Fehlerbehandlung ist anspruchsvoll."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Richtig: Da die Filter nur über Datenströme verbunden sind, kann jede Stufe arbeiten, sobald Daten anliegen.",
   "Richtig: Filter kennen einander nicht und sind nur über Pipes verbunden; ein Schritt kann ersetzt werden, ohne die anderen zu ändern.",
   "Falsch: Interaktive Abläufe mit Rückfragen passen schlecht zu einem gerichteten Datenstrom.",
   "Falsch: Pipes and Filters hat gerade keinen gemeinsamen Zustand; das ist eine der Grenzen des Musters.",
   "Richtig: Ein Filter kennt die Vorgeschichte der Daten nicht; Fehler zu melden oder Teilergebnisse zurückzurollen ist aufwendig."
  ],
  "explanation": "Pipes and Filters: austauschbare, nebenläufige Stufen, aber schwierige Fehlerbehandlung und kein gemeinsamer Zustand. Falle: Eignung für interaktive Abläufe annehmen."
 },
 {
  "id": "c3q57",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "multi",
  "q": "Ein Onlinehändler schneidet sein System in Microservices. Worauf sollte er beim Schnitt achten?",
  "options": [
   "Fachliche Grenzen, etwa Bounded Contexts.",
   "Jeder Service bietet genau eine Operation an.",
   "Schnitt nach Technikschichten (UI-, Logik-, DB-Service).",
   "Jeder Service verwaltet seine eigenen Daten.",
   "Jeder Service ist unabhängig deploybar.",
   "Je Datenbanktabelle ein Service."
  ],
  "correct": [
   0,
   3,
   4
  ],
  "optExpl": [
   "Richtig: Microservices sind fachlich geschnitten; Bounded Contexts liefern dafür tragfähige Grenzen.",
   "Falsch: Ein zu feiner Schnitt führt zu „Nano-Services“ mit hohem Kommunikations- und Betriebsaufwand.",
   "Falsch: Ein technischer Schnitt verteilt jede fachliche Änderung auf mehrere Services und widerspricht dem fachlichen Schnitt.",
   "Richtig: Eigene Datenhaltung gehört laut Curriculum zu Microservices; geteilte Datenbanken koppeln die Services.",
   "Richtig: Unabhängige Deploybarkeit ist ein Kernmerkmal von Microservices und ermöglicht unabhängige Releases.",
   "Falsch: Ein Schnitt nach Tabellen ergibt datengetriebene Services, die für fachliche Abläufe ständig miteinander reden müssen."
  ],
  "explanation": "Microservices: fachlich geschnitten, unabhängig deploybar, mit eigener Datenhaltung. Falle: Schnitt nach Tabellen, Technikschichten oder Einzeloperationen."
 },
 {
  "id": "c3q58",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R2",
  "type": "multi",
  "q": "Ein Team migriert von einem Monolithen zu Microservices. Welche Herausforderungen sind typischerweise zu erwarten?",
  "options": [
   "Konsistenz über Servicegrenzen wird schwieriger.",
   "Höherer Betriebs- und Deploymentaufwand.",
   "Die fachliche Komplexität der Domäne sinkt.",
   "Geteilte Bibliotheken sind nicht mehr erlaubt.",
   "Das Netzwerk wird zur Fehlerquelle."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Richtig: Mit eigener Datenhaltung je Service fehlen gemeinsame Transaktionen; man braucht z. B. eventual consistency oder Sagas.",
   "Richtig: Viele eigenständige Einheiten müssen überwacht, ausgerollt und betrieben werden.",
   "Falsch: Die Domäne bleibt gleich komplex; Microservices verlagern Komplexität in Betrieb und Kommunikation.",
   "Falsch: Gemeinsame Bibliotheken sind möglich, aber eine bewusste Kopplungsentscheidung – kein Verbot.",
   "Richtig: Aufrufe über das Netz bringen Latenz und Teilausfälle, die lokal nicht auftreten."
  ],
  "explanation": "Microservices bringen Konsistenz-, Betriebs- und Netzwerkherausforderungen. Falle: Sie senken die fachliche Komplexität nicht, sondern verlagern sie."
 },
 {
  "id": "c3q59",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R2",
  "type": "single",
  "q": "Zwei Microservices eines Shops sollen Bestelldaten austauschen. Welche Gestaltung entspricht am ehesten dem Muster?",
  "options": [
   "Gleiches internes Persistenzformat in allen Services.",
   "Lose gekoppelt über technologieneutrale Schnittstellen.",
   "Möglichst synchron kommunizieren für starke Konsistenz.",
   "Austausch über eine gemeinsam genutzte Datenbank."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Interne Formate sind Sache des Services; vereinheitlicht wird höchstens der Vertrag der Schnittstelle.",
   "Richtig: So bleiben die Services unabhängig deploybar und intern frei in der Technikwahl.",
   "Falsch: Viel synchrone Kommunikation erzeugt zeitliche Kopplung und Ausfallketten; Microservices nehmen oft eventual consistency in Kauf.",
   "Falsch: Löst Konsistenzprobleme, koppelt die Services aber über das Schema und zerstört die eigene Datenhaltung."
  ],
  "explanation": "Microservices kommunizieren lose gekoppelt über technologieneutrale Schnittstellen. Falle: Die gemeinsame Datenbank wirkt praktisch, hebt aber die Unabhängigkeit auf."
 },
 {
  "id": "k14",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Sie vergleichen zwei Pflichtmuster des Curriculums. Welchem Muster ist die Eigenschaft am ehesten zuzuordnen?",
  "categories": [
   "Schichtenarchitektur",
   "Pipes & Filter"
  ],
  "rows": [
   {
    "text": "Einzelne Verarbeitungsschritte lassen sich gut parallelisieren.",
    "cat": 1
   },
   {
    "text": "Fachliche Änderungen ziehen sich oft durch mehrere Ebenen.",
    "cat": 0
   },
   {
    "text": "Für interaktive, dialogorientierte Abläufe eher ungeeignet.",
    "cat": 1
   },
   {
    "text": "In der gelockerten Variante dürfen auch tiefer liegende Ebenen direkt genutzt werden.",
    "cat": 0
   },
   {
    "text": "Das Durchreichen von Aufrufen über mehrere Ebenen kostet Latenz.",
    "cat": 0
   },
   {
    "text": "Eine einheitliche Fehlerbehandlung über alle Schritte ist schwierig.",
    "cat": 1
   }
  ],
  "explanation": "Parallelisierbarkeit, schwierige Fehlerbehandlung und Ungeeignetheit für Dialoge sind typisch für Pipes & Filter. Gelockerte Schichtung, durchgehende fachliche Änderungen und Latenz durch Durchreichen gehören zu Schichten."
 },
 {
  "id": "k15",
  "chapter": 3,
  "lz": "LZ 03-10",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Ein Team sammelt Kandidaten für übergreifende Konzepte. Handelt es sich um ein Querschnittskonzept oder nicht?",
  "categories": [
   "Querschnittskonzept",
   "Kein Querschnittskonzept"
  ],
  "rows": [
   {
    "text": "Der Export eines Monatsberichts als CSV-Datei.",
    "cat": 1
   },
   {
    "text": "Die Bonitätsprüfung eines Kunden vor der Bestellung.",
    "cat": 1
   },
   {
    "text": "Einheitlicher Umgang mit Nebenläufigkeit und gleichzeitigen Zugriffen.",
    "cat": 0
   },
   {
    "text": "Gemeinsame Gestaltungsregeln für alle Dialoge der Oberfläche.",
    "cat": 0
   },
   {
    "text": "Die Rabattberechnung, deren Ergebnis an mehreren Stellen angezeigt wird.",
    "cat": 1
   },
   {
    "text": "Einheitliche Regeln zur Energieeffizienz, z. B. zum Schonen des Akkus mobiler Clients.",
    "cat": 0
   }
  ],
  "explanation": "Energieeffizienz, Nebenläufigkeit und GUI stehen ausdrücklich in der Curriculum-Liste. Die Falle: Eine fachliche Einzelfunktion wird nicht zum Querschnittskonzept, nur weil ihr Ergebnis an mehreren Stellen erscheint."
 },
 {
  "id": "c3q60",
  "chapter": 3,
  "lz": "LZ 03-05",
  "r": "R1",
  "type": "multi",
  "q": "Ob eine neue Messaging-Technologie die Lastanforderungen trägt, ist unklar. Welche Aussagen zu kurzen Feedback-Schleifen treffen hier zu?",
  "options": [
   "Feedback erst nach fertigem Gesamtentwurf einholen.",
   "Ein Wegwerf-Prototyp kann die Annahme gezielt prüfen.",
   "Der Prototyp ersetzt eine spätere Architekturbewertung.",
   "Der Prototyp sollte das Grundgerüst des Produktivcodes werden.",
   "Iterationen erhöhen die Prognostizierbarkeit."
  ],
  "correct": [
   1,
   4
  ],
  "optExpl": [
   "Falsch: Gerade bei unsicheren Entscheidungen gehört Feedback an den Anfang; spät entdeckte Fehler sind teuer.",
   "Richtig: Ein Prototyp darf bewusst nur eine Frage klären und danach verworfen werden.",
   "Falsch: Ein Prototyp beantwortet eine Einzelfrage; die Bewertung der Gesamtarchitektur gegen die Qualitätsziele bleibt nötig.",
   "Falsch: Ein Wegwerf-Prototyp ist auf Erkenntnis optimiert, nicht auf Qualität; ihn zu übernehmen schleppt Abkürzungen ins Produkt.",
   "Richtig: Jede Iteration liefert Fakten statt Vermutungen; laut Curriculum senken Iterationen das Risiko und verbessern Vorhersagen."
  ],
  "explanation": "Feedback-Schleifen prüfen unsichere Annahmen früh und erhöhen die Prognostizierbarkeit. Falle: Wegwerf-Prototypen in Produktion übernehmen oder als Ersatz für Bewertung sehen."
 },
 {
  "id": "c3q61",
  "chapter": 3,
  "lz": "LZ 03-05",
  "r": "R3",
  "type": "single",
  "q": "Ein Team arbeitet nach dem Ansatz „evolutionäre Architektur“. Was kennzeichnet ihn am ehesten?",
  "options": [
   "Fitnessfunktionen machen Architekturreviews überflüssig.",
   "Qualitätsziele ergeben sich erst aus den Fitnessfunktionen.",
   "Automatisierte Prüfungen sichern Qualitäten bei Änderungen.",
   "Eine Checkliste, die das Team vor jedem Release abarbeitet."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Sie ergänzen Reviews; schwer messbare Qualitäten und Trade-offs brauchen weiterhin menschliche Bewertung.",
   "Falsch: Umgekehrt: Fitnessfunktionen werden aus vorhandenen Qualitätszielen abgeleitet.",
   "Richtig: Fitnessfunktionen prüfen laufend, etwa in der Build-Pipeline, ob wichtige Qualitätsmerkmale erhalten bleiben.",
   "Falsch: Kennzeichnend ist gerade die Automatisierung; eine manuelle Checkliste wäre ein Review-Hilfsmittel."
  ],
  "explanation": "Evolutionäre Architektur wächst schrittweise und sichert Qualitäten mit automatisierten Fitnessfunktionen. Falle: Diese ersetzen weder Qualitätsziele noch Reviews."
 },
 {
  "id": "c3q62",
  "chapter": 3,
  "lz": "LZ 03-05",
  "r": "R2",
  "type": "multi",
  "q": "Ein Projekt plant die Reihenfolge seiner Architekturentscheidungen. Welche Aussagen zu Feedback und Risiko treffen zu?",
  "options": [
   "Durchstiche lohnen sich nur in Großprojekten.",
   "Riskante Entscheidungen früh durch Feedback absichern.",
   "Feedback erst einholen, wenn der Entwurf stabil ist.",
   "Zuerst die gut verstandenen Teile umsetzen.",
   "Feedback systematisch organisieren, nicht zufällig."
  ],
  "correct": [
   1,
   4
  ],
  "optExpl": [
   "Falsch: Auch kleine Projekte haben unsichere Entscheidungen; ein Durchstich ist oft schon mit wenig Aufwand möglich.",
   "Richtig: Feedback ist ein Werkzeug des Risikomanagements; das Unsicherste wird zuerst geprüft.",
   "Falsch: Gerade instabile, unsichere Entwürfe brauchen früh Rückmeldung; danach ist Umsteuern teurer.",
   "Falsch: Das erzeugt schnell sichtbaren Fortschritt, schiebt aber die Risiken nach hinten, wo Korrekturen teurer sind.",
   "Richtig: Geplante Reviews, Demos, Prototypen und Messwerte – das Curriculum fordert systematisches Einholen von Rückmeldung."
  ],
  "explanation": "Reihenfolge nach Risiko, Feedback früh und systematisch. Falle: „Einfaches zuerst“ wirkt effizient, verschiebt aber die teuren Überraschungen ans Ende."
 },
 {
  "id": "c3q63",
  "chapter": 3,
  "lz": "LZ 03-07",
  "r": "R1",
  "type": "multi",
  "q": "Ein Team entwirft die Schnittstelle eines Zahlungsbausteins. Welche Eigenschaften nennt das Curriculum als wünschenswert?",
  "options": [
   "Bildet die internen Datenstrukturen 1:1 ab.",
   "Der Vertrag umfasst nur die Signaturen.",
   "Schwer zu missbrauchen.",
   "Funktional vollständig aus Sicht der Nutzer.",
   "Möglichst viele Operationen für künftige Nutzer.",
   "Leicht zu erlernen und zu erweitern."
  ],
  "correct": [
   2,
   3,
   5
  ],
  "optExpl": [
   "Falsch: Das koppelt die Nutzer an die Implementierung; sie ist dann nicht mehr austauschbar.",
   "Falsch: Zum Vertrag gehören auch Semantik, Vor-/Nachbedingungen und Fehlerverhalten.",
   "Richtig: Eine gute Schnittstelle macht falsche Nutzung schwer, etwa durch klare Typen und eindeutige Semantik.",
   "Richtig: Die Nutzer sollen alles erreichen können, was sie brauchen – gemessen an ihrem Bedarf, nicht an allen denkbaren Fällen.",
   "Falsch: Vollständigkeit bezieht sich auf den Bedarf der Nutzer. Operationen auf Vorrat vergrößern die Schnittstelle unnötig (YAGNI).",
   "Richtig: Das Curriculum nennt einfach zu erlernen, zu benutzen und zu erweitern als wünschenswerte Eigenschaften."
  ],
  "explanation": "Wünschenswert: leicht zu lernen, nutzen, erweitern, schwer zu missbrauchen, vollständig für die Nutzer. Falle: „vollständig“ mit „Operationen auf Vorrat“ verwechseln."
 },
 {
  "id": "c3q64",
  "chapter": 3,
  "lz": "LZ 03-07",
  "r": "R2",
  "type": "single",
  "q": "Ein Frontend lädt Kundendaten über ein entferntes API. Welcher Trade-off der Schnittstellengranularität trifft am ehesten zu?",
  "options": [
   "Fein ist flexibel, erzeugt aber viele teure Aufrufe.",
   "Feingranulare Schnittstellen koppeln immer loser.",
   "Granularität ist lokal wie remote gleich wichtig.",
   "Die Granularität folgt den internen Datenstrukturen."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Feingranulare Operationen sind vielseitig kombinierbar, führen remote aber zu vielen Roundtrips; grobe bündeln, sind aber starrer.",
   "Falsch: Viele kleine Operationen binden den Aufrufer oft an Abläufe und Reihenfolgen des Anbieters.",
   "Falsch: Bei lokalen Aufrufen ist der Overhead pro Aufruf gering; remote kostet jeder Aufruf Latenz.",
   "Falsch: Sie richtet sich nach Nutzung und Kommunikationsweg; Interna abzubilden koppelt die Nutzer an die Implementierung."
  ],
  "explanation": "Feine Schnittstellen: flexibel, aber remote teuer; grobe: effizient, aber starrer. Falle: Granularität unabhängig vom Kommunikationsweg zu bewerten."
 },
 {
  "id": "c3q65",
  "chapter": 3,
  "lz": "LZ 03-07",
  "r": "R2",
  "type": "multi",
  "q": "Eine öffentliche REST-Schnittstelle wird von unbekannt vielen Partnern genutzt. Welche Aussagen zur Weiterentwicklung treffen zu?",
  "options": [
   "Externe Schnittstellen brauchen mehr Stabilität als interne.",
   "Ein Feld umzubenennen ist rückwärtskompatibel.",
   "Streng senden, tolerant empfangen.",
   "Tolerant empfangen heißt: Eingaben ungeprüft annehmen.",
   "Versionierung ist nur bei externen Schnittstellen nötig.",
   "Ein neues optionales Feld ist meist rückwärtskompatibel."
  ],
  "correct": [
   0,
   2,
   5
  ],
  "optExpl": [
   "Richtig: Laut Curriculum haben externe Schnittstellen mehr, oft unbekannte Nutzer und brauchen mehr Stabilität, Formalität und Versionierung.",
   "Falsch: Nutzer, die den alten Namen erwarten, brechen; das braucht eine neue Version oder eine Übergangsphase.",
   "Richtig: So formuliert Postels Robustheitsprinzip, das das Curriculum unter „Erwarte Fehler“ nennt.",
   "Falsch: Das Robustheitsprinzip erlaubt Toleranz bei Abweichungen, ersetzt aber keine Validierung.",
   "Falsch: Auch intern, z. B. teamübergreifend, kann Versionierung nötig sein, wenn Nutzer nicht gleichzeitig mitziehen.",
   "Richtig: Bestehende Nutzer können das Feld ignorieren; additive Änderungen brechen sie in der Regel nicht."
  ],
  "explanation": "Externe Schnittstellen ändert man additiv oder versioniert und folgt dem Robustheitsprinzip. Falle: Toleranz mit fehlender Validierung verwechseln."
 },
 {
  "id": "c3q66",
  "chapter": 3,
  "lz": "LZ 03-01",
  "r": "R1",
  "type": "multi",
  "q": "Ein Bestellsystem soll hochverfügbar sein. Welche Aussagen zum architektonischen Vorgehen treffen zu?",
  "options": [
   "Redundante App-Instanzen; die Datenbank ist dafür egal.",
   "Die Kosten der Redundanz bewusst abwägen.",
   "Vor allem ausführliche Tests vor dem Go-live.",
   "Microservices begrenzen Ausfälle von selbst.",
   "Gezielte Taktiken wie Redundanz und Failover wählen."
  ],
  "correct": [
   1,
   4
  ],
  "optExpl": [
   "Falsch: Eine einzelne gemeinsame Datenbank bleibt ein Single Point of Failure; auch geteilte Komponenten müssen betrachtet werden.",
   "Richtig: Jede Maßnahme hat einen Preis: Redundanz erhöht Kosten und Komplexität und muss gegen den Nutzen abgewogen werden.",
   "Falsch: Tests decken Fehler auf, machen das System aber nicht ausfallsicher; Verfügbarkeit ist eine Struktureigenschaft.",
   "Falsch: Ohne Timeouts, Circuit Breaker o. Ä. können sich Ausfälle über Service-Aufrufe sogar fortpflanzen.",
   "Richtig: Architekturentscheidungen sollen gezielt auf das Qualitätsziel einzahlen; Redundanz und Ausfallübernahme sind typische Mittel."
  ],
  "explanation": "Verfügbarkeit entsteht durch gezielte Taktiken, deren Trade-offs man abwägt. Falle: Ein Stil oder Tests allein liefern keine Verfügbarkeit, und gemeinsame Komponenten bleiben Risiken."
 },
 {
  "id": "c4q1",
  "chapter": 4,
  "lz": "LZ 04-01",
  "r": "R1",
  "type": "multi",
  "q": "Sie sollen einem neuen Kunden erklären, wozu Architekturdokumentation dient. Welche Zwecke treffen am ehesten zu?",
  "options": [
   "Die Einarbeitung neuer Teammitglieder erleichtern.",
   "Die Implementierung bis auf Klassenebene verbindlich vorgeben.",
   "Den Ist-Stand festhalten, verworfene Alternativen weglassen.",
   "Nachweisen, dass die Qualitätsanforderungen erfüllt sind.",
   "Ein gemeinsames Verständnis der Stakeholder schaffen.",
   "Entscheidungen samt Begründung nachvollziehbar halten."
  ],
  "correct": [
   0,
   4,
   5
  ],
  "optExpl": [
   "Richtig: Neue Mitglieder finden sich schneller zurecht, und Wartung und Weiterentwicklung können sich an bestehenden Strukturen orientieren.",
   "Falsch: Das wäre Detailentwurf. Architekturdokumentation konzentriert sich auf tragende Strukturen und Entscheidungen, nicht auf jede Klasse.",
   "Falsch: Gerade verworfene Alternativen und Begründungen lassen sich nicht aus dem Code rekonstruieren – sie machen Dokumentation wertvoll.",
   "Falsch: Dokumentation beschreibt beabsichtigte Lösungsansätze, beweist aber nicht ihre Wirkung. Das leisten Bewertung, Tests und Messungen.",
   "Richtig: Dokumentation ist vor allem Kommunikationsmittel: Sie gibt allen eine gemeinsame Grundlage und macht Missverständnisse früh sichtbar.",
   "Richtig: Der Code zeigt, was gebaut wurde, aber nicht warum. Dokumentierte Begründungen verhindern, dass bewusste Entscheidungen später unwissentlich gekippt werden."
  ],
  "explanation": "Architekturdokumentation dient Kommunikation, Nachvollziehbarkeit von Entscheidungen und Einarbeitung. Falle: Sie ist weder Qualitätsnachweis noch Klassen-Detailentwurf, und Alternativen gehören hinein."
 },
 {
  "id": "c4q2",
  "chapter": 4,
  "lz": "LZ 04-02",
  "r": "R2",
  "type": "single",
  "q": "Ein Kollege fragt, was arc42 eigentlich ist. Welche Einordnung trifft am ehesten zu?",
  "options": [
   "Norm für Begriffe wie Stakeholder, Concerns und Viewpoints.",
   "Modell mit vier Zoomstufen von Context bis Code.",
   "Pragmatisches Template zur Gliederung von Architekturdoku.",
   "Methode, um aus Qualitätszielen Entscheidungen abzuleiten."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Das ist ISO/IEC/IEEE 42010. arc42 ist keine Norm, sondern eine pragmatische Vorlage.",
   "Falsch: Das beschreibt C4 (Context, Container, Component, Code). arc42 ist eine Gliederung, kein Zoomstufenmodell.",
   "Richtig: arc42 gibt zwölf Abschnitte vor, von Einführung und Zielen bis Glossar; man füllt die, die für das System relevant sind.",
   "Falsch: Das wäre eine Entwurfsmethode. arc42 sagt, wo man Entscheidungen festhält, nicht wie man zu ihnen kommt."
  ],
  "explanation": "arc42 ist ein Dokumentations-Template mit zwölf Abschnitten. Falle: Verwechslung mit der Norm 42010, mit Entwurfsmethoden oder mit den Zoomstufen von C4."
 },
 {
  "id": "c4q3",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R1",
  "type": "multi",
  "q": "Sie erstellen die Kontextabgrenzung für ein Buchungssystem. Welche Aussagen dazu treffen zu?",
  "options": [
   "Sie zeigt das System als Blackbox mit seinen Nachbarn.",
   "Sie kann fachlichen und technischen Kontext unterscheiden.",
   "Sie ordnet die Nachbarsysteme ihren Ausführungsknoten zu.",
   "Sie beschränkt sich auf technische Kanäle und Protokolle.",
   "Sie zeigt die Subsysteme, die externe Schnittstellen bedienen.",
   "Sie macht sichtbar, wofür das System nicht zuständig ist."
  ],
  "correct": [
   0,
   1,
   5
  ],
  "optExpl": [
   "Richtig: Die Kontextsicht betrachtet das System von außen, umgeben von Nutzern und Fremdsystemen; Interna bleiben verborgen.",
   "Richtig: Bei Bedarf wird unterschieden: fachlich (wer tauscht was aus?) und technisch (über welche Kanäle und Protokolle?).",
   "Falsch: Knoten und die Abbildung von Software auf Infrastruktur sind Thema der Verteilungssicht, nicht der Kontextsicht.",
   "Falsch: Zu kurz gegriffen: Der fachliche Kontext – welche Informationen mit wem ausgetauscht werden – gehört ebenfalls dazu.",
   "Falsch: Interne Subsysteme gehören in die Bausteinsicht. Die Kontextsicht bleibt auf Blackbox-Ebene.",
   "Richtig: Durch die klare Systemgrenze wird früh geklärt, welche Verantwortung beim System liegt und welche bei den Nachbarn."
  ],
  "explanation": "Die Kontextsicht zeigt das System als Blackbox mit Nachbarn und Schnittstellen, fachlich und/oder technisch. Falle: interne Subsysteme oder Knotenzuordnung hineinpacken."
 },
 {
  "id": "c4q4",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zur Bausteinsicht (auch Komponentensicht) treffen zu?",
  "options": [
   "Sie wird hierarchisch von Blackbox zu Whitebox verfeinert.",
   "Sie zeigt die statische Zerlegung des Systems in Bausteine.",
   "Sie ordnet die Bausteine ihren Ausführungsknoten zu.",
   "Sie beschreibt je Baustein Verantwortlichkeit und Schnittstellen.",
   "Blackbox gehört zur Bausteinsicht, Whitebox zur Laufzeitsicht."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Richtig: Ein Baustein wird erst als Blackbox beschrieben, dann als Whitebox geöffnet; dessen Teile sind wieder Blackboxes.",
   "Richtig: Die Bausteinsicht beschreibt, aus welchen Softwarebausteinen das System aufgebaut ist und wie sie strukturell verbunden sind.",
   "Falsch: Die Abbildung von Software auf Knoten ist Gegenstand der Verteilungssicht.",
   "Richtig: Erst mit Verantwortlichkeit und angebotenen bzw. benötigten Schnittstellen wird die Zerlegung verständlich.",
   "Falsch: Blackbox/Whitebox unterscheidet die Detailtiefe innerhalb der Bausteinsicht, nicht zwei verschiedene Sichten."
  ],
  "explanation": "Die Bausteinsicht zeigt die statische, hierarchisch verfeinerte Zerlegung mit Verantwortlichkeiten und Schnittstellen. Falle: Blackbox/Whitebox ist eine Frage der Detailtiefe, keine Sichtengrenze."
 },
 {
  "id": "c4q5",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R1",
  "type": "multi",
  "q": "Ein Team plant den Inhalt seiner Laufzeitsicht. Welche Inhalte passen dorthin?",
  "options": [
   "Interne Algorithmen einzelner Bausteine im Detail.",
   "Start-, Fehler- oder Betriebsszenarien.",
   "Möglichst alle Anwendungsfälle vollständig.",
   "Die Abbildung der Bausteine auf Verteilungsartefakte.",
   "Zustandsmodelle.",
   "Zusammenspiel von Bausteinen in ausgewählten Szenarien."
  ],
  "correct": [
   1,
   4,
   5
  ],
  "optExpl": [
   "Falsch: Das ist Detailentwurf eines Bausteins. Die Laufzeitsicht zeigt das Zusammenspiel mehrerer Bausteine.",
   "Richtig: Neben fachlichen Abläufen sind auch Systemstart, Fehlerbehandlung oder Betrieb oft architekturrelevant.",
   "Falsch: Übergeneralisierung: Man wählt bewusst wenige architekturrelevante Szenarien, statt alles zu dokumentieren.",
   "Falsch: Welcher Code in welchem Artefakt steckt, gehört zur Verteilungssicht.",
   "Richtig: Wenig bekannt: Das Curriculum nennt bei der Laufzeitsicht ausdrücklich auch Zustandsmodelle.",
   "Richtig: Die Laufzeitsicht zeigt an architekturrelevanten Szenarien, wie Bausteine zur Laufzeit zusammenarbeiten."
  ],
  "explanation": "Die Laufzeitsicht zeigt das Zusammenspiel in ausgewählten Szenarien, auch Start, Fehlerfall, Betrieb und Zustandsmodelle. Falle: Vollständigkeitsanspruch oder Artefaktzuordnung."
 },
 {
  "id": "c4q6",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R2",
  "type": "single",
  "q": "Was beschreibt die Verteilungssicht?",
  "options": [
   "In welcher Reihenfolge Bausteine zur Laufzeit interagieren.",
   "Welche Artefakte auf welchen Knoten laufen.",
   "Welche Teams welche Bausteine verantworten.",
   "Welche externen Systeme über welche Kanäle angebunden sind."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Das zeigt die Laufzeitsicht, etwa als Sequenzdiagramm.",
   "Richtig: Die Verteilungssicht bildet Software über Verteilungsartefakte auf Knoten ab und zeigt die Kanäle zwischen den Knoten.",
   "Falsch: Die Zuordnung zu Teams ist organisatorisch und gehört nicht in die Verteilungssicht.",
   "Falsch: Das ist der technische Kontext in der Kontextsicht. Die Verteilungssicht zeigt die eigene Infrastruktur und was darauf läuft."
  ],
  "explanation": "Verteilungssicht = Knoten, Kanäle und die Abbildung der Verteilungsartefakte darauf. Externe Kanäle zu Nachbarsystemen zeigt der technische Kontext, Abläufe die Laufzeitsicht."
 },
 {
  "id": "c4q7",
  "chapter": 4,
  "lz": "LZ 04-09",
  "r": "R3",
  "type": "single",
  "q": "In einer Ausschreibung wird eine Architekturbeschreibung „gemäß ISO/IEC/IEEE 42010“ gefordert. Was regelt diese Norm am ehesten?",
  "options": [
   "Ein Qualitätsmodell mit Merkmalen wie Wartbarkeit.",
   "Begriffe wie Stakeholder, Concerns, Viewpoints und Views.",
   "Ein Template mit zwölf Abschnitten zur Gliederung.",
   "Eine Mindestmenge an Pflichtsichten für jedes System."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Das ist ISO/IEC 25010. Die beiden Normen werden leicht verwechselt.",
   "Richtig: 42010 liefert den begrifflichen Rahmen: Stakeholder haben Anliegen, Viewpoints legen fest, wie Views sie adressieren.",
   "Falsch: Die Vorlage mit zwölf Abschnitten ist arc42. 42010 gibt keine konkrete Gliederung vor.",
   "Falsch: 42010 schreibt keine festen Sichten vor, sondern verlangt, Sichten passend zu den Belangen der Stakeholder zu wählen."
  ],
  "explanation": "42010 normiert die Begriffe der Architekturbeschreibung, keine Vorlage und keine Pflichtsichten (R3). Falle: Verwechslung mit arc42 oder ISO 25010."
 },
 {
  "id": "c4q8",
  "chapter": 4,
  "lz": "LZ 04-03",
  "r": "R2",
  "type": "single",
  "q": "Sie wollen zeigen, in welcher Reihenfolge Warenkorb, Lager und Zahlung beim Checkout Nachrichten austauschen. Welches UML-Diagramm ist dafür am typischsten?",
  "options": [
   "Aktivitätsdiagramm.",
   "Zustandsdiagramm.",
   "Sequenzdiagramm.",
   "Komponentendiagramm."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Es zeigt Aktionen, Verzweigungen und Nebenläufigkeit, also den Kontrollfluss – die Nachrichtenfolge zwischen benannten Beteiligten steht nicht im Mittelpunkt.",
   "Falsch: Es beschreibt Zustände und Übergänge eines einzelnen Objekts, nicht den Austausch zwischen mehreren.",
   "Richtig: Entlang der Lebenslinien zeigt es von oben nach unten, wer wann welche Nachricht an wen sendet.",
   "Falsch: Es zeigt die Bausteine und ihre Schnittstellen statisch, aber keine zeitliche Reihenfolge."
  ],
  "explanation": "Zeitlich geordneter Nachrichtenaustausch zwischen mehreren Beteiligten = Sequenzdiagramm. Falle: Das Aktivitätsdiagramm ist auch dynamisch, fokussiert aber den Kontrollfluss."
 },
 {
  "id": "c4q9",
  "chapter": 4,
  "lz": "LZ 04-08",
  "r": "R2",
  "type": "multi",
  "q": "Ein Team will festhalten, warum es einen Message-Broker statt synchroner REST-Aufrufe gewählt hat. Was gilt für ein ADR dazu?",
  "options": [
   "Es dient dem Team als Implementierungsanleitung.",
   "Es hält Kontext, Entscheidung und Konsequenzen fest.",
   "Eine spätere Revision wird als neues ADR erfasst.",
   "Es führt einen Status wie „akzeptiert“ oder „abgelöst“.",
   "Es friert die Entscheidung für das restliche Projekt ein.",
   "Es bündelt alle Projektentscheidungen in einem Dokument."
  ],
  "correct": [
   1,
   2,
   3
  ],
  "optExpl": [
   "Falsch: Ein ADR begründet eine Entscheidung; wie sie umzusetzen ist, beschreibt es nicht im Detail.",
   "Richtig: Das sind Kernbestandteile nach Nygard; hier etwa, warum der Broker gewählt wurde und welche Folgen man in Kauf nimmt.",
   "Richtig: Das alte ADR wird nicht überschrieben, sondern als abgelöst markiert – so bleibt die Historie erhalten.",
   "Richtig: Der Status gehört zu den Feldern eines ADR und zeigt, ob die Entscheidung gilt.",
   "Falsch: ADRs verbieten keine Änderung; sie machen nachvollziehbar, was wann warum entschieden wurde.",
   "Falsch: ADRs sind bewusst kurze Einzeldokumente – je Entscheidung eines."
  ],
  "explanation": "Ein ADR ist ein kurzes Einzeldokument mit Status, Kontext, Entscheidung und Konsequenzen; Revisionen lösen es durch ein neues ab. Falle: Sammeldokument, Bauanleitung oder Änderungsverbot."
 },
 {
  "id": "c4q10",
  "chapter": 4,
  "lz": "LZ 04-01",
  "r": "R1",
  "type": "multi",
  "q": "Ein Architekt dokumentiert dasselbe System für Management, Betrieb und Entwicklung. Welche Aussagen dazu treffen zu?",
  "options": [
   "Die Verständlichkeit von einem Review-Gremium prüfen lassen.",
   "Für die Zielgruppen unterschiedliche Sichten nutzen.",
   "Je Zielgruppe ein eigenständiges Systemmodell pflegen.",
   "Nur die Notation wechseln, der Inhalt bleibt gleich.",
   "Inhalt, Detailgrad und Form je Zielgruppe anpassen."
  ],
  "correct": [
   1,
   4
  ],
  "optExpl": [
   "Falsch: Ob Dokumentation verständlich ist, kann letztlich nur ihre Zielgruppe beurteilen – nicht Autor oder Gremium.",
   "Richtig: Der Betrieb braucht z. B. vor allem die Verteilungssicht, die Entwicklung Baustein- und Laufzeitsicht.",
   "Falsch: Alle Darstellungen beschreiben dasselbe System und müssen konsistent sein; unabhängige Modelle laufen auseinander.",
   "Falsch: Eine andere Notation allein reicht nicht – das Management braucht andere Inhalte, etwa Überblick und Risiken.",
   "Richtig: Form, Inhalt und Detailgrad richten sich am Informationsbedarf der jeweiligen Leser aus."
  ],
  "explanation": "Zielgruppengerecht heißt: Inhalt, Detailgrad und Form passend zum Bedarf, mit konsistenten Sichten auf dasselbe System. Falle: Verständlichkeit beurteilt die Zielgruppe, kein Gremium."
 },
 {
  "id": "k4",
  "chapter": 4,
  "lz": "LZ 04-03",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Sie wählen Diagramme für die Architekturdokumentation. Beschreibt das Mittel eher statische Struktur oder dynamisches Verhalten?",
  "categories": [
   "Statisch (Struktur)",
   "Dynamisch (Verhalten)"
  ],
  "rows": [
   {
    "text": "Zustandsdiagramm",
    "cat": 1
   },
   {
    "text": "Nummerierte Schrittliste eines Laufzeitszenarios",
    "cat": 1
   },
   {
    "text": "Kompositionsstrukturdiagramm",
    "cat": 0
   },
   {
    "text": "Paketdiagramm",
    "cat": 0
   },
   {
    "text": "Aktivitätsdiagramm",
    "cat": 1
   },
   {
    "text": "Verteilungsdiagramm",
    "cat": 0
   }
  ],
  "explanation": "Verteilungsdiagramme werden oft für dynamisch gehalten, zeigen aber die Zuordnung von Artefakten zu Knoten – also Struktur. Abläufe lassen sich auch ohne UML dynamisch darstellen, etwa als nummerierte Liste."
 },
 {
  "id": "c4q11",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R1",
  "type": "multi",
  "q": "Ein Onlineshop schickt Bestellungen per SFTP-Datei an einen Lieferanten. Welche Aussagen zur Darstellung im fachlichen und technischen Kontext treffen zu?",
  "options": [
   "Der technische Kontext zeigt, welcher Baustein die Datei erzeugt.",
   "Der technische Kontext ersetzt die Verteilungssicht.",
   "„SFTP-Dateitransfer“ gehört in den technischen Kontext.",
   "„Bestellung an Lieferant“ gehört in den fachlichen Kontext.",
   "Beide Darstellungen behandeln den Shop als Blackbox.",
   "Der fachliche Kontext gehört in die Anforderungsdoku."
  ],
  "correct": [
   2,
   3,
   4
  ],
  "optExpl": [
   "Falsch: Welcher interne Baustein beteiligt ist, gehört in die Bausteinsicht; der technische Kontext bleibt außen.",
   "Falsch: Er zeigt Kanäle zu Nachbarn, nicht die eigene Infrastruktur und die Abbildung der Software auf Knoten.",
   "Richtig: Der technische Kontext zeigt die Kanäle und Protokolle, über die der Austausch läuft.",
   "Richtig: Der fachliche Kontext zeigt, welche Informationen mit welchem Partner ausgetauscht werden.",
   "Richtig: Fachlicher wie technischer Kontext bleiben an der Systemgrenze und zeigen keine Interna.",
   "Falsch: Beide Kontexte sind Teil der Kontextsicht in der Architekturdokumentation; getrennt wird nach Betrachtungsebene, nicht nach Dokument."
  ],
  "explanation": "Fachlich = wer tauscht was aus, technisch = über welchen Kanal; beide sehen das System als Blackbox. Falle: interne Bausteine oder die Verteilungssicht im technischen Kontext vermuten."
 },
 {
  "id": "c4q12",
  "chapter": 4,
  "lz": "LZ 04-03",
  "r": "R2",
  "type": "multi",
  "q": "Ein Architekt will die Bausteinsicht mit einem UML-Komponentendiagramm darstellen. Welche Aussagen zu diesem Diagramm treffen zu?",
  "options": [
   "Es zeigt Knoten und die darauf laufenden Artefakte.",
   "Es zeigt Zustände und Übergänge einer Komponente.",
   "Es zeigt angebotene und benötigte Schnittstellen.",
   "Es zeigt statische Struktur, typisch für die Bausteinsicht.",
   "Es zeigt die Aufrufreihenfolge zwischen Komponenten."
  ],
  "correct": [
   2,
   3
  ],
  "optExpl": [
   "Falsch: Knoten und Artefakte sind Elemente des Verteilungsdiagramms.",
   "Falsch: Zustände und Übergänge beschreibt das Zustandsdiagramm.",
   "Richtig: Komponenten werden mit ihren bereitgestellten und benötigten Schnittstellen und deren Verbindungen dargestellt.",
   "Richtig: Wie Klassen- und Paketdiagramm ist es ein Strukturdiagramm und passt damit zur Bausteinsicht.",
   "Falsch: Zeitliche Reihenfolgen zeigen Sequenz- oder Aktivitätsdiagramme in der Laufzeitsicht."
  ],
  "explanation": "Das Komponentendiagramm zeigt Bausteine mit angebotenen und benötigten Schnittstellen – statische Struktur. Falle: Abläufe, Knoten oder Zustände gehören in andere Diagrammtypen."
 },
 {
  "id": "c4q13",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R1",
  "type": "multi",
  "q": "Ein Product Owner fragt, warum die Architektur nicht in einem einzigen Diagramm beschrieben wird. Welche Begründungen treffen zu?",
  "options": [
   "Sichten bedienen unterschiedliche Stakeholder-Anliegen.",
   "Jede Sicht wird als unabhängiges Modell gepflegt.",
   "Bei einem Monolithen reicht meist eine einzige Sicht.",
   "Keine einzelne Sicht zeigt alle relevanten Aspekte.",
   "Derselbe Baustein kann in mehreren Sichten auftauchen."
  ],
  "correct": [
   0,
   3,
   4
  ],
  "optExpl": [
   "Richtig: Betrieb, Entwicklung und Fachbereich stellen verschiedene Fragen; jede Sicht beantwortet bestimmte davon.",
   "Falsch: Alle Sichten beschreiben dasselbe System und müssen zueinander konsistent sein.",
   "Falsch: Auch ein Monolith hat Struktur, Laufzeitverhalten und Infrastruktur – die Vielfalt der Fragen bleibt gleich.",
   "Richtig: Struktur, Abläufe und Infrastruktur lassen sich nicht sinnvoll in einem Bild vereinen.",
   "Richtig: Ein Baustein erscheint z. B. in der Bausteinsicht als Struktur und in der Laufzeitsicht als Akteur eines Szenarios."
  ],
  "explanation": "Mehrere Sichten sind nötig, weil keine Sicht alle Aspekte und Anliegen abdeckt – bei jedem System. Falle: Sichten als unabhängige Modelle oder Monolithen als Ausnahme betrachten."
 },
 {
  "id": "c4q15",
  "chapter": 4,
  "lz": "LZ 04-03",
  "r": "R2",
  "type": "multi",
  "q": "Ein Team zeichnet bisher freie „Kästchen und Pfeile“ und überlegt, auf UML umzusteigen. Welche Vorteile bringt eine standardisierte Notation am ehesten?",
  "options": [
   "Austausch zwischen Stakeholdern und Werkzeugen wird leichter.",
   "Sie hält Diagramme konsistent mit dem Code.",
   "Sie macht die Legende im Diagramm entbehrlich.",
   "Diagrammelemente haben eine vereinbarte Bedeutung.",
   "Sie legt einen einheitlichen Detailgrad fest."
  ],
  "correct": [
   0,
   3
  ],
  "optExpl": [
   "Richtig: Eine gemeinsame Notation ist über Teams und Modellierungswerkzeuge hinweg verständlich.",
   "Falsch: Auch UML-Diagramme veralten, wenn man sie nicht pflegt oder generiert.",
   "Falsch: Auch bei UML helfen Legenden, z. B. für Farben, Stereotypen oder vereinfachte Darstellung.",
   "Richtig: Leser müssen nicht raten, was ein Pfeil oder Kasten bedeutet – die Semantik ist festgelegt.",
   "Falsch: Wie detailliert ein Diagramm ist, entscheidet man nach Zielgruppe; die Notation gibt das nicht vor."
  ],
  "explanation": "Standardnotation gibt Elementen eine vereinbarte Bedeutung und erleichtert Kommunikation und Werkzeugnutzung. Falle: Sie sorgt weder für Aktualität noch für einheitlichen Detailgrad."
 },
 {
  "id": "c4q16",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R1",
  "type": "single",
  "q": "Ein Review ergab: Niemand versteht, wie Warenkorb, Zahlung und Versand bei einer Bestellung zusammenwirken. Welche Sicht sollte man am ehesten ergänzen?",
  "options": [
   "Bausteinsicht.",
   "Kontextsicht.",
   "Verteilungssicht.",
   "Laufzeitsicht."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Sie nennt die beteiligten Bausteine und ihre Schnittstellen, zeigt aber nicht das dynamische Zusammenwirken.",
   "Falsch: Sie zeigt das System als Blackbox mit seinen Nachbarn; interne Bausteine wie Warenkorb oder Zahlung kommen dort nicht vor.",
   "Falsch: Sie zeigt, wo Software läuft und wie Knoten verbunden sind – nicht, in welcher Abfolge Bausteine zusammenarbeiten.",
   "Richtig: Sie zeigt das Zusammenspiel der Bausteine in einem konkreten Szenario, etwa als Sequenzdiagramm."
  ],
  "explanation": "Das Zusammenwirken von Bausteinen in einem Ablauf zeigt die Laufzeitsicht. Falle: Die Bausteinsicht nennt die Beteiligten, aber nicht ihr Zusammenspiel."
 },
 {
  "id": "c4q17",
  "chapter": 4,
  "lz": "LZ 04-02",
  "r": "R1",
  "type": "multi",
  "q": "Sie richten für ein neues Projekt eine arc42-Dokumentation ein. Welche Inhalte sieht arc42 typischerweise vor?",
  "options": [
   "Projekt- und Releaseplan mit Meilensteinen.",
   "Architekturentscheidungen.",
   "UI-Entwürfe für jeden Dialog.",
   "Kontextabgrenzung.",
   "Risiken und technische Schulden.",
   "Vollständige API-Referenz aller Klassen."
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Falsch: Projektplanung ist Projektmanagement und gehört nicht zu den Abschnitten von arc42.",
   "Richtig: Abschnitt 9 hält wichtige Entscheidungen samt Begründung fest.",
   "Falsch: Wireframes sind Teil von UX-Design oder Anforderungen, nicht der Architekturdokumentation nach arc42.",
   "Richtig: Abschnitt 3 grenzt das System gegenüber Nutzern und Nachbarsystemen ab.",
   "Richtig: Abschnitt 11 macht bekannte Risiken und technische Schulden sichtbar.",
   "Falsch: Eine Klassenreferenz wäre Code-Dokumentation und widerspricht dem Prinzip, nur Architekturrelevantes festzuhalten."
  ],
  "explanation": "arc42 enthält u. a. Kontextabgrenzung, Architekturentscheidungen sowie Risiken und technische Schulden. Falle: Projektplanung, UI-Entwürfe oder Klassenreferenzen gehören nicht dazu."
 },
 {
  "id": "k7",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Ein neues Teammitglied stellt Fragen zum System. In welcher Sicht findet es die Antwort am ehesten?",
  "categories": [
   "Bausteinsicht",
   "Verteilungssicht"
  ],
  "rows": [
   {
    "text": "Wie viele Instanzen des Bestelldienstes laufen in Produktion?",
    "cat": 1
   },
   {
    "text": "Über welche Kanäle und Protokolle sind die Server verbunden?",
    "cat": 1
   },
   {
    "text": "Aus welchen Teilen besteht das Subsystem Abrechnung im Inneren?",
    "cat": 0
   },
   {
    "text": "Welche Schnittstellen bietet das Modul Kundenverwaltung an?",
    "cat": 0
   },
   {
    "text": "Von welchen anderen Modulen hängt das Modul Rechnung ab?",
    "cat": 0
   },
   {
    "text": "Welche Bausteine sind in welchem Container-Image enthalten?",
    "cat": 1
   }
  ],
  "explanation": "Die Falle: Auch die Abbildung von Bausteinen auf Verteilungsartefakte (Container-Image) gehört zur Verteilungssicht, nicht zur Bausteinsicht. Innere Zerlegung, Schnittstellen und Abhängigkeiten zwischen Modulen zeigt die Bausteinsicht."
 },
 {
  "id": "c4q18",
  "chapter": 4,
  "lz": "LZ 04-03",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zum UML-Klassendiagramm in der Architekturdokumentation treffen zu?",
  "options": [
   "Es ist laut Curriculum nur R3 und nicht prüfungsrelevant.",
   "Es zählt wie das Paketdiagramm zu den Strukturdiagrammen.",
   "Es lässt sich in der Bausteinsicht einsetzen.",
   "Es eignet sich für Abläufe in der Laufzeitsicht.",
   "Es ist die vorgeschriebene Notation der Bausteinsicht.",
   "Es zeigt Klassen und Beziehungen wie Assoziation."
  ],
  "correct": [
   1,
   2,
   5
  ],
  "optExpl": [
   "Falsch: Das Klassendiagramm ist R2. Nur Zustands- und Kompositionsstrukturdiagramm sind R3.",
   "Richtig: Klassen-, Paket- und Komponentendiagramm zeigen statische Struktur.",
   "Richtig: Als statisches Diagramm eignet es sich typischerweise für die Bausteinsicht.",
   "Falsch: Es zeigt keinen zeitlichen Ablauf; dafür nutzt man Sequenz- oder Aktivitätsdiagramme.",
   "Falsch: Das Curriculum schreibt keine bestimmte Notation pro Sicht vor.",
   "Richtig: Typen und ihre Beziehungen wie Assoziation oder Vererbung sind sein Inhalt."
  ],
  "explanation": "Das Klassendiagramm (R2) zeigt statische Struktur und passt zur Bausteinsicht. Falle: Es ist weder R3 noch Pflichtnotation, und für Abläufe taugt es nicht."
 },
 {
  "id": "c4q19",
  "chapter": 4,
  "lz": "LZ 04-08",
  "r": "R1",
  "type": "multi",
  "q": "Ein Team legt fest, welche Entscheidungen es als Architecture Decision Record (ADR) festhält. Welche Aussagen treffen zu?",
  "options": [
   "Eine Entscheidung, die Folgeentscheidungen nach sich zieht.",
   "Erst wenn sich die Entscheidung in der Praxis bewährt hat.",
   "Als laufend gepflegte Gesamtbeschreibung der Architektur.",
   "Eine schwer umkehrbare Technologiegrundsatzentscheidung.",
   "Jede Detailentscheidung im Code.",
   "Die Wahl eines Integrationsmusters mit großer Tragweite."
  ],
  "correct": [
   0,
   3,
   5
  ],
  "optExpl": [
   "Richtig: Abhängigkeiten zwischen Entscheidungen sollen erkannt und dokumentiert werden; der Auslöser gehört festgehalten.",
   "Falsch: ADRs entstehen zum Entscheidungszeitpunkt, solange Kontext und Alternativen noch präsent sind.",
   "Falsch: Ein ADR betrifft genau eine Entscheidung und ist keine Gesamtbeschreibung der Ist-Architektur.",
   "Richtig: Gerade teure, schwer änderbare Entscheidungen braucht man später samt Alternativen und Begründung.",
   "Falsch: Übergeneralisierung: ADRs sind für tragende Entscheidungen; zu viele verwässern ihren Nutzen.",
   "Richtig: Weitreichende Strukturentscheidungen sind typische ADR-Kandidaten."
  ],
  "explanation": "ADR-würdig sind tragende, schwer umkehrbare Entscheidungen und solche mit Folgeentscheidungen – festgehalten zum Entscheidungszeitpunkt. Falle: jede Kleinigkeit oder eine Gesamtbeschreibung."
 },
 {
  "id": "c4q20",
  "chapter": 4,
  "lz": "LZ 04-03",
  "r": "R2",
  "type": "single",
  "q": "Was stellt ein UML-Verteilungsdiagramm (Deployment Diagram) am ehesten dar?",
  "options": [
   "Komponenten und ihre angebotenen Schnittstellen.",
   "Zeitlich geordnete Nachrichten zwischen Objekten.",
   "Pakete und ihre Abhängigkeiten untereinander.",
   "Knoten, Artefakte und Kommunikationswege."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Das ist das Komponentendiagramm der Bausteinsicht.",
   "Falsch: Das ist das Sequenzdiagramm der Laufzeitsicht.",
   "Falsch: Das zeigt das Paketdiagramm – eine statische Gliederung, keine Infrastruktur.",
   "Richtig: Es zeigt Ausführungsumgebungen, die darauf verteilten Artefakte und die Verbindungen zwischen den Knoten."
  ],
  "explanation": "Das Verteilungsdiagramm zeigt Knoten, Artefakte und Kommunikationswege (Verteilungssicht). Falle: Komponenten- und Paketdiagramm wirken ähnlich technisch, zeigen aber Struktur."
 },
 {
  "id": "c4q21",
  "chapter": 4,
  "lz": "LZ 04-01",
  "r": "R1",
  "type": "multi",
  "q": "Die Architekturdokumentation Ihres Projekts weicht zunehmend vom Code ab. Welche Maßnahmen helfen am ehesten, sie dauerhaft aktuell zu halten?",
  "options": [
   "Die Doku gesammelt nur zu großen Releases aktualisieren.",
   "Die Pflege an eine zentrale Doku-Rolle delegieren.",
   "Übersichten, wo sinnvoll, aus dem Code generieren.",
   "Doku-Pflege in der Definition of Done verankern.",
   "Schlank und versioniert im Repository pflegen.",
   "Möglichst viele Details erfassen, um Abweichungen zu sehen."
  ],
  "correct": [
   2,
   3,
   4
  ],
  "optExpl": [
   "Falsch: Sammelaktualisierungen lassen die Doku zwischen Releases veralten und vergessen Details.",
   "Falsch: Wer weit weg von den Änderungen sitzt, erfährt zu spät davon; die Doku läuft hinterher.",
   "Richtig: Generierte Diagramme bleiben automatisch synchron, z. B. über Diagrams-as-Code.",
   "Richtig: Wird die Doku bei relevanten Änderungen mitgezogen, veraltet sie nicht unbemerkt.",
   "Richtig: Nah am Code und mit wenig Umfang ist die Pflege günstig und Änderungen bleiben nachvollziehbar.",
   "Falsch: Mehr Details erhöhen den Pflegeaufwand – die Doku veraltet dadurch eher schneller."
  ],
  "explanation": "Aktuell bleibt Doku, wenn sie schlank, versioniert, nah am Code, Teil der DoD und wo möglich generiert ist. Falle: mehr Details, zentrale Pflege oder Sammelupdates."
 },
 {
  "id": "c4q22",
  "chapter": 4,
  "lz": "LZ 04-01",
  "r": "R2",
  "type": "multi",
  "q": "Fachbereich und Entwicklung verstehen unter „Vertrag“ unterschiedliche Dinge. Welche Aussagen zu einem Glossar in der Dokumentation treffen zu?",
  "options": [
   "Es macht gleichlautende Begriffe mit anderer Bedeutung sichtbar.",
   "Es wird am besten allein von der Entwicklung gepflegt.",
   "Es wird überflüssig, sobald ein Domänenmodell existiert.",
   "Es sorgt für konsistente Begriffe zwischen Fachbereich und IT.",
   "Es konzentriert sich auf technische Begriffe wie Frameworks."
  ],
  "correct": [
   0,
   3
  ],
  "optExpl": [
   "Richtig: Gerade Homonyme wie „Vertrag“ werden durch eindeutige Definitionen aufgedeckt.",
   "Falsch: Begriffe müssen von Fachbereich und Entwicklung gemeinsam abgestimmt werden, sonst fehlt die fachliche Sicht.",
   "Falsch: Ein Domänenmodell zeigt Strukturen, ersetzt aber nicht die textuelle Definition der Begriffe.",
   "Richtig: Ein gemeinsames Vokabular reduziert Missverständnisse und wird durchgängig in Doku und Gesprächen verwendet.",
   "Falsch: Die Fachbegriffe sind oft die mehrdeutigen – sie gehören gerade hinein."
  ],
  "explanation": "Ein Glossar schafft eine gemeinsame, konsistente Begriffswelt und deckt Homonyme auf. Falle: Es geht vor allem um Fachbegriffe, und gepflegt wird es gemeinsam."
 },
 {
  "id": "c4q23",
  "chapter": 4,
  "lz": "LZ 04-01",
  "r": "R1",
  "type": "multi",
  "q": "Drei neue Entwicklerinnen starten nächste Woche im Projekt. Was sollte ein Architekturüberblick für sie am ehesten enthalten?",
  "options": [
   "Systemkontext, Ziele und wichtigste Randbedingungen.",
   "Wichtigste Bausteine und ihre Verantwortlichkeiten.",
   "Eine detaillierte Beschreibung der Build-Skripte.",
   "Eine chronologische Liste aller bisherigen Änderungen.",
   "Zentrale Entscheidungen samt Begründung."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Richtig: Das große Ganze ordnet alles Weitere ein: wofür das System da ist und was es einschränkt.",
   "Richtig: Eine grobe Bausteinsicht zeigt, wo was liegt, ohne in Details abzutauchen.",
   "Falsch: Für die lokale Einrichtung nützlich, gehört aber in eine Entwickleranleitung, nicht in den Architekturüberblick.",
   "Falsch: Eine Änderungshistorie liefert Details, aber keinen Überblick über die Architektur.",
   "Richtig: Wer die Gründe kennt, macht tragende Entscheidungen nicht versehentlich rückgängig."
  ],
  "explanation": "Ein Architekturüberblick vermittelt Kontext, Ziele, Randbedingungen, Hauptbausteine und zentrale Entscheidungen. Falle: Änderungshistorie oder Build-Details sind nützlich, aber kein Überblick."
 },
 {
  "id": "c4q24",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R2",
  "type": "multi",
  "q": "Im Review fällt auf, dass ein Baustein in Baustein- und Laufzeitsicht verschieden benannt ist. Welche Aussagen zur Konsistenz von Sichten treffen zu?",
  "options": [
   "Unterschiedliche Detailtiefen je Sicht sind zulässig.",
   "Konsistenz erfordert ein gemeinsames Modellierungswerkzeug.",
   "Jeder Baustein muss in jeder Sicht vorkommen.",
   "Derselbe Baustein darf sich in Sichten nicht widersprechen.",
   "Bei Widerspruch gilt grundsätzlich die Bausteinsicht."
  ],
  "correct": [
   0,
   3
  ],
  "optExpl": [
   "Richtig: Sichten zeigen verschiedene Aspekte und Abstraktionsebenen; widerspruchsfrei müssen sie trotzdem sein.",
   "Falsch: Ein Werkzeug kann helfen, ist aber keine Voraussetzung; Reviews und Konventionen reichen oft.",
   "Falsch: Die Laufzeitsicht zeigt nur ausgewählte Szenarien; nicht jeder Baustein taucht dort auf.",
   "Richtig: Alle Sichten beschreiben dasselbe System; abweichende Namen oder Verantwortungen verwirren die Leser.",
   "Falsch: Keine Sicht hat pauschal Vorrang; Widersprüche klärt man inhaltlich."
  ],
  "explanation": "Sichten dürfen unterschiedlich detailliert sein, müssen aber widerspruchsfrei sein. Falle: Konsistenz heißt nicht „jeder Baustein überall“ oder „Bausteinsicht gewinnt“."
 },
 {
  "id": "k11",
  "chapter": 4,
  "lz": "LZ 04-01",
  "r": "R2",
  "type": "k",
  "points": 2,
  "q": "Sie überarbeiten eine Architekturdokumentation nach dem Kriterium Angemessenheit. Gehört der Inhalt hinein?",
  "categories": [
   "Sinnvoller Doku-Inhalt",
   "Gehört nicht hinein"
  ],
  "rows": [
   {
    "text": "Der Sprint-Plan mit den Aufgaben der nächsten Iteration",
    "cat": 1
   },
   {
    "text": "Eine vollständige Kopie der Anforderungsspezifikation",
    "cat": 1
   },
   {
    "text": "Bekannte Risiken und technische Schulden",
    "cat": 0
   },
   {
    "text": "Eine Beschreibung jeder einzelnen Klasse mit allen Methoden",
    "cat": 1
   },
   {
    "text": "Verworfene Alternativen zu einer zentralen Entscheidung",
    "cat": 0
   },
   {
    "text": "Die priorisierten Qualitätsziele des Systems",
    "cat": 0
   }
  ],
  "explanation": "Qualitätsziele, Risiken und auch verworfene Alternativen helfen Lesern, die Architektur zu verstehen. Klassendetails, Projektplanung und kopierte Anforderungen blähen die Doku auf – verweisen statt kopieren."
 },
 {
  "id": "c4q25",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R2",
  "type": "single",
  "q": "Sie öffnen den Baustein „Abrechnung“ in der Bausteinsicht als Whitebox. Was zeigt diese Beschreibung am ehesten?",
  "options": [
   "Die Einbettung der Abrechnung in den Systemkontext.",
   "Die enthaltenen Bausteine und ihre Beziehungen.",
   "Die Aufrufreihenfolge der inneren Bausteine.",
   "Die angebotenen und benötigten Schnittstellen der Abrechnung."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Die Umgebung des Gesamtsystems zeigt die Kontextsicht; die Whitebox blickt nach innen.",
   "Richtig: Die Whitebox zeigt den inneren Aufbau: aus welchen Bausteinen die Abrechnung besteht und wie sie verbunden sind.",
   "Falsch: Zeitliche Abläufe gehören in die Laufzeitsicht, nicht in die statische Whitebox.",
   "Falsch: Das ist die Außensicht, also die Blackbox-Beschreibung des Bausteins."
  ],
  "explanation": "Die Whitebox öffnet einen Baustein und zeigt statisch seine inneren Bausteine und Beziehungen. Falle: Schnittstellen sind Blackbox, Abläufe Laufzeitsicht."
 },
 {
  "id": "c4q26",
  "chapter": 4,
  "lz": "LZ 04-06",
  "r": "R2",
  "type": "multi",
  "q": "Was sollte die Beschreibung einer extern genutzten Schnittstelle typischerweise festlegen?",
  "options": [
   "Das Verhalten in Fehler- und Ausnahmefällen.",
   "Die interne Datenstruktur, in der der Anbieter die übergebenen Daten speichert, damit Nutzer Seiteneffekte abschätzen können.",
   "Programmiersprache und Frameworks der Implementierung, damit Nutzer kompatible Bibliotheken wählen können.",
   "Versionierung und Regeln zur Rückwärtskompatibilität.",
   "Zugesicherte Qualitäten wie Antwortzeit oder Verfügbarkeit, sofern sie für Nutzer relevant sind.",
   "Die angebotenen Operationen mit Parametern, Datenformaten und deren Bedeutung."
  ],
  "correct": [
   0,
   3,
   4,
   5
  ],
  "optExpl": [
   "Richtig: Nutzer müssen wissen, wie sich die Schnittstelle bei Fehlern, ungültigen Eingaben oder Überlast verhält. Nur dann können sie solche Fälle zuverlässig behandeln.",
   "Falsch: Das verletzt Information Hiding: Die interne Speicherung ist Implementierungsdetail und soll austauschbar bleiben. Relevante Seiteneffekte beschreibt man fachlich als Verhalten, nicht über interne Strukturen.",
   "Falsch: Schnittstelle und Implementierung sind gerade getrennt, damit die Implementierung austauschbar bleibt. Nutzer brauchen Protokoll und Datenformate, nicht die Technologie hinter der Schnittstelle.",
   "Richtig: Externe Nutzer lassen sich nicht im Gleichschritt mitändern. Deshalb muss die Beschreibung klarstellen, wie Versionen gekennzeichnet werden und welche Änderungen kompatibel bleiben.",
   "Richtig: Zugesicherte Qualitäten sind Teil des Vertrags, auf den sich Nutzer verlassen. Ohne sie kann niemand beurteilen, ob die Schnittstelle für seinen Zweck taugt.",
   "Richtig: Operationen, Parameter, Datenformate und ihre Semantik bilden den Kern des Vertrags. Erst die Semantik macht klar, was ein Aufruf tatsächlich bewirkt."
  ],
  "explanation": "Eine Schnittstellenbeschreibung legt den Vertrag fest: Operationen und Semantik, Fehlerverhalten, zugesicherte Qualitäten und – gerade extern – Versionierung. Interne Datenstrukturen und die Implementierungstechnologie gehören nicht hinein (Trennung Schnittstelle/Implementierung)."
 },
 {
  "id": "c4q27",
  "chapter": 4,
  "lz": "LZ 04-01",
  "r": "R1",
  "type": "multi",
  "q": "Ein Projektleiter fordert, „einfach alles“ zu dokumentieren. Welche Argumente sprechen am ehesten dagegen?",
  "options": [
   "Die Architektur lässt sich vollständig aus dem Code ableiten.",
   "Was keine Zielgruppe braucht, stiftet keinen Nutzen.",
   "Unnötige Redundanz zum Code sollte vermieden werden.",
   "Sobald Code existiert, übernimmt er die Aufgabe der Doku.",
   "Umfangreiche Doku erzeugt Pflegeaufwand und veraltet schnell."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Falsch: Strukturen lassen sich teils rekonstruieren, Begründungen und verworfene Alternativen aber nicht.",
   "Richtig: Angemessenheit heißt: so viel wie nötig, so wenig wie möglich – gemessen am Bedarf der Leser.",
   "Richtig: Was der Code eindeutig zeigt, muss nicht doppelt gepflegt werden; die Doku ergänzt Begründungen und Überblick.",
   "Falsch: Der Code enthält keine Begründungen und Alternativen; Dokumentation bleibt über den ganzen Lebenszyklus nötig.",
   "Richtig: Je mehr Inhalt, desto mehr muss bei jeder Änderung nachgezogen werden – sonst wird sie falsch."
  ],
  "explanation": "Gegen „alles dokumentieren“ sprechen Pflegeaufwand, Redundanz zum Code und fehlender Nutzen. Falle: Daraus folgt nicht, dass Code die Doku ersetzt."
 },
 {
  "id": "c4q28",
  "chapter": 4,
  "lz": "LZ 04-03",
  "r": "R2",
  "type": "multi",
  "q": "Sie wollen einen Freigabeprozess mit parallelen Prüfschritten in der Laufzeitsicht darstellen. Welche Aussagen zum UML-Aktivitätsdiagramm treffen zu?",
  "options": [
   "Es zeigt in erster Linie die Zustände eines Objekts.",
   "Es kann nebenläufige Abläufe darstellen.",
   "Es zeigt Aktionen, Verzweigungen und Zusammenführungen.",
   "Es ordnet Bausteine ihren Ausführungsknoten zu.",
   "Es eignet sich für die Laufzeitsicht."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Falsch: Zustände und Übergänge eines Objekts beschreibt das Zustandsdiagramm.",
   "Richtig: Über Gabelungen und Vereinigungen lassen sich parallele Prüfschritte abbilden.",
   "Richtig: Aktionen, Entscheidungen und deren Zusammenführung bilden den Kontrollfluss ab.",
   "Falsch: Die Zuordnung zu Knoten zeigt das Verteilungsdiagramm.",
   "Richtig: Wie das Sequenzdiagramm zeigt es Abläufe und passt daher zur Laufzeitsicht."
  ],
  "explanation": "Das Aktivitätsdiagramm zeigt Abläufe mit Verzweigung und Nebenläufigkeit und passt zur Laufzeitsicht. Falle: Verwechslung mit dem Zustandsdiagramm."
 },
 {
  "id": "c4q29",
  "chapter": 4,
  "lz": "LZ 04-02",
  "r": "R2",
  "type": "multi",
  "q": "Welche der folgenden Abschnitte sieht das arc42-Template ausdrücklich vor?",
  "options": [
   "Teststrategie und Testplanung.",
   "Querschnittliche Konzepte.",
   "Randbedingungen.",
   "Lösungsstrategie.",
   "Betriebs- und Lizenzkosten.",
   "Qualitätsanforderungen."
  ],
  "correct": [
   1,
   2,
   3,
   5
  ],
  "optExpl": [
   "Falsch: Klingt nach Qualitätssicherung, ist aber kein eigener arc42-Abschnitt; Testkonzepte können allenfalls als Querschnittskonzept auftauchen.",
   "Richtig: Abschnitt 8 beschreibt übergreifende Konzepte wie Persistenz oder Fehlerbehandlung zentral.",
   "Richtig: Abschnitt 2 hält Vorgaben fest, die den Lösungsraum einschränken.",
   "Richtig: Abschnitt 4 fasst die grundlegenden Entscheidungen und Lösungsansätze kurz zusammen.",
   "Falsch: Kostenplanung ist Projekt- bzw. Betriebsmanagement und kein Abschnitt von arc42.",
   "Richtig: Abschnitt 10 enthält z. B. Qualitätsbaum und Qualitätsszenarien."
  ],
  "explanation": "arc42 sieht u. a. Randbedingungen, Lösungsstrategie, Querschnittliche Konzepte und Qualitätsanforderungen vor. Falle: Teststrategie und Kosten klingen plausibel, sind aber keine Abschnitte."
 },
 {
  "id": "c4q30",
  "chapter": 4,
  "lz": "LZ 04-03",
  "r": "R2",
  "type": "multi",
  "q": "Ein Team diskutiert, ob es UML für seine Microservice-Architektur nutzen soll. Welche Aussagen zu UML als Notation treffen zu?",
  "options": [
   "Das Curriculum schreibt UML für jede Sicht vor.",
   "UML eignet sich nur für objektorientierte Systeme.",
   "Alternativen wie C4 oder ArchiMate sind ebenfalls möglich.",
   "UML lässt sich auch skizzenhaft einsetzen.",
   "Komponenten-, Verteilungs- und Sequenzdiagramme sind nützlich.",
   "Ein detailliertes UML-Modell ersetzt die Textdoku."
  ],
  "correct": [
   2,
   3,
   4
  ],
  "optExpl": [
   "Falsch: Das Curriculum schreibt keine bestimmte Notation pro Sicht vor.",
   "Falsch: Komponenten- und Verteilungsdiagramme sind nicht an Objektorientierung gebunden.",
   "Richtig: Das Curriculum nennt Alternativen zu UML (R3); es gibt keine Pflichtnotation.",
   "Richtig: Solange die Bedeutung klar bleibt, darf UML informell genutzt werden; Formalität ist anpassbar.",
   "Richtig: Diese Diagrammtypen bilden Bausteine, Infrastruktur und Abläufe ab – auch bei Services.",
   "Falsch: Diagramme zeigen Struktur und Abläufe, aber keine Begründungen und Abwägungen."
  ],
  "explanation": "UML bietet nützliche Diagrammtypen, auch skizzenhaft und für Services; Alternativen sind zulässig. Falle: UML ist weder Pflicht noch Ersatz für textuelle Begründungen."
 },
 {
  "id": "c4q31",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R1",
  "type": "single",
  "q": "Das Betriebsteam will wissen, welche Teile des Systems auf welchen Servern laufen und wie diese verbunden sind. Welche Sicht hilft am ehesten?",
  "options": [
   "Verteilungssicht.",
   "Bausteinsicht.",
   "Technischer Kontext.",
   "Laufzeitsicht."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Sie zeigt Knoten, Kanäle und welche Artefakte auf welchen Knoten laufen.",
   "Falsch: Sie zeigt die Softwarestruktur bewusst unabhängig von der Infrastruktur.",
   "Falsch: Er zeigt Kanäle zu externen Nachbarn, behandelt das System aber als Blackbox – die eigenen Server sieht man nicht.",
   "Falsch: Sie zeigt das Zusammenspiel in Szenarien, aber nicht, wo die Software installiert ist."
  ],
  "explanation": "Server, Verbindungen und die Abbildung der Software darauf zeigt die Verteilungssicht. Falle: Der technische Kontext zeigt Kanäle, aber nur zu externen Nachbarn."
 },
 {
  "id": "k13",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Sie verteilen Inhalte auf die Kapitel einer arc42-Dokumentation. Laufzeitsicht oder Verteilungssicht?",
  "categories": [
   "Laufzeitsicht",
   "Verteilungssicht"
  ],
  "rows": [
   {
    "text": "Welche Knoten die Test- und welche die Produktionsumgebung umfasst",
    "cat": 1
   },
   {
    "text": "Die Zustandsübergänge einer Bestellung von „neu“ bis „versendet“",
    "cat": 0
   },
   {
    "text": "Welches Artefakt auf welchem Knoten installiert ist",
    "cat": 1
   },
   {
    "text": "Wie die Bausteine im Fehlerfall zusammenspielen",
    "cat": 0
   },
   {
    "text": "Der Ablauf beim Hochfahren und Initialisieren des Systems",
    "cat": 0
   }
  ],
  "explanation": "Start- und Fehlerabläufe sowie Zustandsmodelle gehören in die Laufzeitsicht. Umgebungen und Installationsorte von Artefakten gehören in die Verteilungssicht."
 },
 {
  "id": "c4q32",
  "chapter": 4,
  "lz": "LZ 04-01",
  "r": "R1",
  "type": "multi",
  "q": "Ihr Team erstellt Kriterien für gute Architekturdokumentation. Welche Kriterien sind im Sinne des Curriculums zutreffend?",
  "options": [
   "Vollständig bis zur untersten Bausteinebene.",
   "Angemessen: so viel wie nötig, so wenig wie möglich.",
   "Effizient: Leser finden das Gesuchte schnell.",
   "Wartbar: lässt sich mit dem System aktuell halten.",
   "Aktualität ist zweitrangig, wenn Begründungen stimmen.",
   "Verständlich: das beurteilt letztlich die Zielgruppe."
  ],
  "correct": [
   1,
   2,
   3,
   5
  ],
  "optExpl": [
   "Falsch: Vollständigkeit bis ins Detail ist kein Kriterium; sie widerspricht der Angemessenheit.",
   "Richtig: Angemessenheit ist eines der genannten Qualitätskriterien technischer Dokumentation.",
   "Richtig: Effizienz umfasst schnelles Auffinden und vertretbaren Aufwand für Erstellung und Pflege.",
   "Richtig: Wartbarkeit sorgt dafür, dass die Dokumentation bei Änderungen nachgezogen werden kann.",
   "Falsch: Korrektheit verlangt Übereinstimmung mit dem System; veraltete Doku schadet trotz guter Begründungen.",
   "Richtig: Nicht Autor oder Gremium, sondern die Leser entscheiden, ob sie verstehen, was gemeint ist."
  ],
  "explanation": "Kriterien sind Verständlichkeit, Korrektheit, Effizienz, Angemessenheit und Wartbarkeit. Falle: Vollständigkeit bis ins Detail ist kein Ziel."
 },
 {
  "id": "c4q33",
  "chapter": 4,
  "lz": "LZ 04-08",
  "r": "R2",
  "type": "single",
  "q": "Ein Team nutzt arc42 und überlegt, zusätzlich ADRs einzuführen. Worin unterscheiden sich beide bei Entscheidungen am ehesten?",
  "options": [
   "ADRs dürfen nur innerhalb von arc42 verwendet werden.",
   "arc42 bettet sie in die Gesamtdoku ein, ADRs sind Einzeldokumente.",
   "arc42 erfasst offene, ADRs nur getroffene Entscheidungen.",
   "Nur ADRs halten Alternativen und Begründungen fest."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: ADRs sind unabhängig von arc42 nutzbar; man kann sie aber gut im Entscheidungsabschnitt referenzieren.",
   "Richtig: arc42 ordnet Entscheidungen in einem Abschnitt ein; ein ADR ist ein eigenständiges Dokument je Entscheidung mit Status.",
   "Falsch: Beide halten vor allem getroffene Entscheidungen fest; ein ADR kann zudem den Status „vorgeschlagen“ haben.",
   "Falsch: Auch arc42 sieht Begründungen und Alternativen vor; ADRs sind nur eine andere Form."
  ],
  "explanation": "arc42 bettet Entscheidungen in die Gesamtdoku ein, ADRs sind eigenständige Einzeldokumente mit Status; beides lässt sich kombinieren. Falle: Begründungen gibt es in beiden."
 },
 {
  "id": "c4q34",
  "chapter": 4,
  "lz": "LZ 04-08",
  "r": "R2",
  "type": "multi",
  "q": "Welche Angaben enthält ein Architecture Decision Record (ADR) nach Michael Nygard?",
  "options": [
   "Die Entscheidung selbst.",
   "Konsequenzen.",
   "Laufend fortgeschriebene Erfahrungen aus dem Betrieb.",
   "Eine Aufwandsschätzung für die Umsetzung.",
   "Status (z. B. akzeptiert, abgelöst).",
   "Kontext."
  ],
  "correct": [
   0,
   1,
   4,
   5
  ],
  "optExpl": [
   "Richtig: Kern des ADR: die konkret getroffene Entscheidung.",
   "Richtig: Die Folgen – positive wie negative – machen die Entscheidung später nachvollziehbar.",
   "Falsch: ADRs werden nicht fortlaufend umgeschrieben. Ändert sich etwas, entsteht ein neues ADR, das das alte ablöst.",
   "Falsch: Aufwand ist Projektplanung. Ein ADR hält fest, was warum entschieden wurde.",
   "Richtig: Der Status zeigt, ob eine Entscheidung vorgeschlagen, gültig oder durch eine neuere ersetzt ist.",
   "Richtig: Der Kontext beschreibt die Kräfte und das Problem, das die Entscheidung auslöst."
  ],
  "explanation": "Nygard-ADR: Titel, Status, Kontext, Entscheidung, Konsequenzen. Aufwand gehört nicht hinein, und statt ein ADR fortzuschreiben, löst man es durch ein neues ab."
 },
 {
  "id": "c4q35",
  "chapter": 4,
  "lz": "LZ 04-06",
  "r": "R2",
  "type": "single",
  "q": "Ihr Team bietet Partnerfirmen eine REST-API an und hat zusätzlich interne Schnittstellen zwischen Bausteinen. Was gilt für deren Dokumentation am ehesten?",
  "options": [
   "Interne Schnittstellen beschreibt der Code hinreichend.",
   "Interne Schnittstellen werden detaillierter beschrieben.",
   "Eine OpenAPI-Spezifikation deckt Syntax und Semantik ab.",
   "Externe werden meist früher, formeller und versioniert dokumentiert."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Der Code zeigt nur die Signatur, nicht Zusicherungen und Fehlerverhalten; auch interne brauchen eine angemessene Beschreibung.",
   "Falsch: Umgekehrt: Externe Schnittstellen haben mehr und oft unbekannte Nutzer und brauchen mehr Formalität.",
   "Falsch: OpenAPI beschreibt vor allem die Syntax; Bedeutung und Fehlerverhalten müssen zusätzlich festgehalten werden.",
   "Richtig: Externe Schnittstellen sind Verträge mit Dritten, schwer zu ändern und brauchen daher Stabilität und Versionierung."
  ],
  "explanation": "Externe Schnittstellen sind Verträge mit Dritten und werden früher, formeller und versioniert dokumentiert; interne brauchen eine angemessene Beschreibung. Falle: OpenAPI liefert nur die Syntax."
 },
 {
  "id": "c4q36",
  "chapter": 4,
  "lz": "LZ 04-07",
  "r": "R2",
  "type": "multi",
  "q": "Ein Team soll sein Konzept für Fehlerbehandlung und Logging dokumentieren und kommunizieren. Welche Aussagen dazu treffen zu?",
  "options": [
   "Auch über Beispielimplementierungen vermitteln.",
   "In jedem betroffenen Baustein separat beschreiben.",
   "Erst nach Abschluss der Implementierung dokumentieren.",
   "Zentral an einer Stelle beschreiben, z. B. in arc42 Abschnitt 8.",
   "Anlass, Regeln, Begründung und ein Beispiel festhalten.",
   "Damit wird die Laufzeitsicht für Fehlerfälle überflüssig."
  ],
  "correct": [
   0,
   3,
   4
  ],
  "optExpl": [
   "Richtig: Beispielcode, Walkthroughs oder Vorlagen helfen, das Konzept in die Bausteine zu tragen.",
   "Falsch: Klingt nah an der Umsetzung, führt aber zu Redundanz und auseinanderlaufenden Varianten.",
   "Falsch: Ein Querschnittskonzept soll die einheitliche Umsetzung leiten – nachträglich kommt es zu spät.",
   "Richtig: Zentral dokumentiert wird das Konzept in vielen Bausteinen einheitlich umgesetzt.",
   "Richtig: So verstehen Leser nicht nur die Regel, sondern auch warum und wie sie anzuwenden ist.",
   "Falsch: Konzepte ergänzen die Sichten; ein architekturrelevantes Fehlerszenario kann weiterhin in die Laufzeitsicht gehören."
  ],
  "explanation": "Querschnittskonzepte werden zentral mit Anlass, Regeln, Begründung und Beispiel dokumentiert und z. B. über Beispielcode vermittelt. Falle: pro Baustein separat beschreiben."
 },
 {
  "id": "c5q1",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R1",
  "type": "multi",
  "q": "Ihr Team formuliert Qualitätsanforderungen als Szenarien. Welche Bestandteile gehören laut CPSA-F-Curriculum zu einem Qualitätsszenario?",
  "options": [
   "Reaktion des Systems.",
   "Die Priorität im Qualitätsbaum.",
   "Die gewählte Taktik bzw. Lösungsstrategie.",
   "Stimulus, also das auslösende Ereignis.",
   "Kontext bzw. Umgebung (z. B. Normalbetrieb).",
   "Messung bzw. Antwortmaß."
  ],
  "correct": [
   0,
   3,
   4,
   5
  ],
  "optExpl": [
   "Richtig: Die Reaktion beschreibt, was das System auf den Stimulus hin tut – das geforderte Verhalten.",
   "Falsch: Szenarien werden zwar oft priorisiert, etwa im Utility Tree, die Priorität ist aber Zusatzinformation für die Bewertung und kein Bestandteil des Szenarios selbst.",
   "Falsch: Das Szenario beschreibt das WAS, nicht das WIE. Die Lösung entsteht im Entwurf und wird anschließend gegen das Szenario geprüft.",
   "Richtig: Der Stimulus ist das Ereignis, auf das das System reagieren soll, etwa eine Anfrage, ein Ausfall oder eine Änderungsanforderung.",
   "Richtig: Der Kontext legt fest, unter welchen Umständen das Szenario gilt – dieselbe Anfrage bedeutet bei Lastspitze etwas anderes als im Normalbetrieb.",
   "Richtig: Erst ein Maß wie „in unter 2 s im 95. Perzentil“ macht das Szenario überprüfbar."
  ],
  "explanation": "Das Curriculum nennt vier Bestandteile: Kontext, Stimulus, Reaktion, Messung. Falle: Lösungsstrategie (WIE) und Priorität sind keine Bestandteile des Szenarios."
 },
 {
  "id": "c5q2",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R3",
  "type": "single",
  "q": "Ein Kunde fragt, was ATAM (Architecture Tradeoff Analysis Method) leistet. Welche Charakterisierung trifft am ehesten zu?",
  "options": [
   "Prüft, ob der Code den Schichtregeln des Entwurfs folgt.",
   "Misst Kopplung und Komplexität werkzeuggestützt im Code.",
   "Szenariobasiert, überwiegend qualitativ, macht Trade-offs sichtbar.",
   "Bewertet Alternativen nach Kosten und Nutzen in Geldwerten."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Das ist eine Konformitätsanalyse (LZ 05-03). ATAM bewertet Entscheidungen gegen Qualitätsziele, nicht die Umsetzung gegen den Entwurf.",
   "Falsch: Das sind quantitative Metrik-Analysen. ATAM ist eine moderierte Workshop-Methode und braucht nicht einmal Code.",
   "Richtig: ATAM spielt priorisierte Qualitätsszenarien gegen die Architekturentscheidungen durch und macht Trade-offs, Sensitivitätspunkte und Risiken explizit.",
   "Falsch: Das beschreibt eine Kosten-Nutzen-Analyse wie CBAM, die auf ATAM aufbauen kann. ATAM selbst fragt nach der Wirkung auf die Qualitätsziele."
  ],
  "explanation": "ATAM ist szenariobasiert und überwiegend qualitativ und macht Trade-offs explizit. Falle: Kosten-Nutzen-Bewertung (CBAM), Metrik-Messung und Konformitätsprüfung sind andere Verfahren."
 },
 {
  "id": "c5q3",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R1",
  "type": "multi",
  "q": "Ein Projekt steht kurz vor Entwurfsende, Code gibt es noch nicht. Welche Aussagen zu qualitativer und quantitativer Bewertung treffen zu?",
  "options": [
   "Beide Verfahrensarten ergänzen sich und werden kombiniert.",
   "ATAM ist quantitativ, da Szenarien Antwortmaße enthalten.",
   "Sobald Code vorliegt, ersetzen Metriken die Experten-Reviews.",
   "Qualitative Verfahren sind auch ohne lauffähigen Code einsetzbar.",
   "Lasttests sind qualitativ, da ihr Ergebnis interpretiert wird."
  ],
  "correct": [
   0,
   3
  ],
  "optExpl": [
   "Richtig: Metriken liefern Auffälligkeiten, die im Review qualitativ eingeordnet werden; Szenarien können wiederum Messungen anstoßen.",
   "Falsch: Die Szenarien enthalten Messgrößen, die Bewertung erfolgt aber durch Experteneinschätzung. Szenariobasierte Bewertung bleibt qualitativ.",
   "Falsch: Nicht jede Qualität ist messbar, und jede Zahl braucht Interpretation. Auch mit Code bleiben qualitative Verfahren nötig.",
   "Richtig: Reviews und Szenarioanalysen arbeiten mit Entwürfen, Modellen und Expertenwissen – gerade früh, wenn Korrekturen noch billig sind.",
   "Falsch: Lasttests messen Laufzeitverhalten und sind damit quantitativ. Dass Messwerte interpretiert werden müssen, macht das Verfahren nicht qualitativ."
  ],
  "explanation": "Qualitative Verfahren funktionieren ohne Code, quantitative brauchen ein analysierbares Artefakt; beide ergänzen sich. Falle: Messgrößen im Szenario machen ATAM nicht quantitativ, Interpretation macht Lasttests nicht qualitativ."
 },
 {
  "id": "c5q4",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R2",
  "type": "multi",
  "q": "Sie stellen für ein Architektur-Review Kennzahlen zusammen. Welche der folgenden Angaben sind quantitative (metrikbasierte) Größen?",
  "options": [
   "Afferente und efferente Kopplung eines Moduls.",
   "Antwortzeit unter Last im 95. Perzentil.",
   "Ergebnis einer Nutzerbefragung zur Bedienbarkeit.",
   "Einstufung eines Trade-offs als kritisch im ATAM-Workshop.",
   "Priorität „hoch“ eines Szenarios im Utility Tree.",
   "Zyklomatische Komplexität einer Komponente."
  ],
  "correct": [
   0,
   1,
   5
  ],
  "optExpl": [
   "Richtig: Ein- und ausgehende Abhängigkeiten werden gezählt – eine klassische Kopplungsmetrik.",
   "Richtig: Laufzeitverhalten quantitativ zu messen nennt das Curriculum ausdrücklich als Analysemethode.",
   "Falsch: Interviews und Umfragen nennt das Curriculum als qualitative Auswertung, auch wenn Antworten auf einer Skala erfasst werden.",
   "Falsch: Ob ein Trade-off kritisch ist, entscheidet die Diskussion im Workshop – ein qualitatives Ergebnis.",
   "Falsch: Die Einstufung hoch/mittel/gering ist ein Urteil der Beteiligten, kein gemessener Wert.",
   "Richtig: Sie wird aus dem Kontrollflussgraphen berechnet und ist eine quelltextbezogene Metrik."
  ],
  "explanation": "Kopplungsgrade, zyklomatische Komplexität und gemessene Antwortzeiten sind quantitativ. Falle: Prioritäten, Workshop-Einstufungen und Befragungen sind qualitative Urteile, auch wenn sie wie Kennzahlen wirken."
 },
 {
  "id": "c5q5",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R3",
  "type": "single",
  "q": "In einem ATAM-Workshop erstellt das Team einen Qualitätsbaum (Utility Tree). Wozu dient er am ehesten?",
  "options": [
   "Qualitätsmerkmale bis zu priorisierten Szenarien verfeinern.",
   "Bausteine hierarchisch bis zur Klassenebene zerlegen.",
   "Getroffene Entscheidungen samt Alternativen festhalten.",
   "Risiken nach Wahrscheinlichkeit und Schaden ordnen."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Der Baum verfeinert abstrakte Qualitätsmerkmale schrittweise bis zu konkreten, priorisierten Szenarien und fokussiert so die Bewertung.",
   "Falsch: Die hierarchische Zerlegung in Bausteine zeigt die Bausteinsicht. Der Utility Tree gliedert Qualitäten, nicht die Lösungsstruktur.",
   "Falsch: Das leisten Architecture Decision Records. Der Utility Tree enthält die Anforderungen, gegen die Entscheidungen geprüft werden.",
   "Falsch: Das ist eine Risikomatrix. Im Utility Tree werden Szenarien nach Wichtigkeit und Schwierigkeit priorisiert, nicht Risiken eingeordnet."
  ],
  "explanation": "Der Utility Tree gliedert Qualitätsmerkmale bis zu priorisierten Szenarien. Falle: Hierarchie und Priorisierung gibt es auch in Bausteinsicht und Risikomatrix – dort aber für andere Dinge."
 },
 {
  "id": "c5q6",
  "chapter": 5,
  "lz": "LZ 05-01",
  "r": "R1",
  "type": "multi",
  "q": "Die Projektleitung fragt, wozu eine Architekturanalyse gut ist. Welche Gründe für eine Analyse nennt das CPSA-F-Curriculum?",
  "options": [
   "Die Zielerreichung vor Implementierungsbeginn nachweisen.",
   "Prüfen, ob Stakeholder-Anliegen berücksichtigt sind.",
   "Prüfen, ob die Implementierung zu den Entscheidungen passt.",
   "Feststellen, ob der Entwurf die Anforderungen erfüllen wird.",
   "Risiken im Entwurf finden – auch nach der Implementierung.",
   "Aufwand und Termine der Umsetzung verbindlich festlegen."
  ],
  "correct": [
   1,
   2,
   3,
   4
  ],
  "optExpl": [
   "Falsch: Eine Analyse liefert begründete Einschätzungen und Risiken, aber keinen Beweis, dass Qualitätsziele erreicht werden.",
   "Richtig: Das Curriculum nennt ausdrücklich, inwiefern architekturrelevante Anliegen der Stakeholder berücksichtigt sind.",
   "Richtig: Auch die Übereinstimmung von Implementierung und Architekturentscheidungen ist laut Curriculum ein Analysegrund.",
   "Richtig: Ob der Entwurf die Anforderungen erfüllt oder erfüllen wird, ist ein Kernzweck der Analyse.",
   "Richtig: Das Curriculum nennt Risiken und Verbesserungen ausdrücklich vor, während und nach der Implementierung, nicht nur in frühen Phasen.",
   "Falsch: Das ist Aufgabe der Projektplanung. Ergebnisse können einfließen, sind aber nicht Zweck der Analyse."
  ],
  "explanation": "Gründe laut Curriculum: Risiken finden (vor, während, nach der Implementierung), Anforderungserfüllung, Passung der Implementierung, Stakeholder-Anliegen. Falle: Eine Analyse ist kein Nachweis und kein Planungsinstrument."
 },
 {
  "id": "c5q7",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R3",
  "type": "single",
  "q": "Eine Metrik-Auswertung zeigt für ein Modul eine sehr hohe Kopplung. Was drückt dieser Befund am ehesten aus?",
  "options": [
   "Starken fachlichen Zusammenhalt innerhalb des Moduls.",
   "Niedrige Kohäsion – beides ist dieselbe Eigenschaft.",
   "Viele Abhängigkeiten; Änderungen pflanzen sich leicht fort.",
   "Viele Verzweigungen im Kontrollfluss des Moduls."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Das ist hohe Kohäsion – eine Eigenschaft im Inneren des Moduls, die sogar erwünscht ist.",
   "Falsch: Beides tritt oft gemeinsam auf, ist aber verschieden: Kopplung betrifft Beziehungen zwischen Modulen, Kohäsion den Zusammenhalt im Modul.",
   "Richtig: Kopplung misst die Abhängigkeiten zu anderen Modulen. Viele davon erschweren isoliertes Ändern, Testen und Austauschen.",
   "Falsch: Verzweigungen misst die zyklomatische Komplexität. Sie sagt nichts über Abhängigkeiten zu anderen Modulen aus."
  ],
  "explanation": "Hohe Kopplung bedeutet viele Abhängigkeiten zu anderen Modulen. Falle: Kohäsion (Zusammenhalt im Modul) und zyklomatische Komplexität (Verzweigungen) sind eigene Größen."
 },
 {
  "id": "c5q8",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R1",
  "type": "single",
  "q": "Ein Analysewerkzeug meldet für eine Methode eine zyklomatische Komplexität von 14. Was wird damit gemessen?",
  "options": [
   "Anzahl linear unabhängiger Pfade durch den Kontrollfluss.",
   "Anzahl der Abhängigkeiten zu anderen Modulen.",
   "Verschachtelungstiefe der Vererbungshierarchie.",
   "Anzahl der Anweisungen in der Methode."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Die zyklomatische Komplexität wird aus dem Kontrollflussgraphen berechnet und wächst im Wesentlichen mit den Verzweigungen.",
   "Falsch: Das ist Kopplung (afferent/efferent). Sie betrifft Beziehungen zwischen Modulen, nicht den Kontrollfluss.",
   "Falsch: Das ist die Vererbungstiefe einer Klasse – eine andere objektorientierte Metrik.",
   "Falsch: Das kommt Lines of Code nahe. Eine lange Methode ohne Verzweigungen hat trotzdem eine niedrige zyklomatische Komplexität."
  ],
  "explanation": "Zyklomatische Komplexität zählt unabhängige Kontrollflusspfade. Falle: Umfang (LOC), Kopplung und Vererbungstiefe sind andere Metriken."
 },
 {
  "id": "c5q9",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R1",
  "type": "multi",
  "q": "Ein Team formuliert seine Qualitätsziele als Szenarien, bevor es den Entwurf bewertet. Welchen Nutzen haben die Szenarien dabei?",
  "options": [
   "Sie dienen als Maßstab für Architekturentscheidungen.",
   "Sie lassen sich nur gegen ein laufendes System prüfen.",
   "Sie legen fest, mit welcher Lösung ein Ziel erreicht wird.",
   "Sie eignen sich kaum für Ziele wie Wartbarkeit.",
   "Sie machen abstrakte Qualitätsziele überprüfbar."
  ],
  "correct": [
   0,
   4
  ],
  "optExpl": [
   "Richtig: Entscheidungen werden gegen die Szenarien durchgespielt – so wird sichtbar, ob und wie gut sie die Ziele unterstützen.",
   "Falsch: Szenarien lassen sich gerade auch gegen Entwürfe und Modelle durchspielen – das ist der Kern szenariobasierter Analyse.",
   "Falsch: Szenarien beschreiben das geforderte Verhalten (WAS), nicht die technische Lösung (WIE).",
   "Falsch: Auch Wartbarkeit lässt sich als Änderungsszenario formulieren, z. B. „neue Zahlungsart in zwei Personentagen“.",
   "Richtig: „Performant“ ist nicht prüfbar, ein Szenario mit Kontext, Stimulus, Reaktion und Messung schon."
  ],
  "explanation": "Szenarien machen Ziele überprüfbar und dienen als Maßstab für Entscheidungen. Falle: Sie beschreiben keine Lösung, brauchen kein laufendes System und funktionieren als Änderungsszenarien auch für Wartbarkeit."
 },
 {
  "id": "c5q10",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R2",
  "type": "single",
  "q": "Ein Team lässt seinen Entwurf vor dem ersten Sprint von Kollegen in einem Walkthrough prüfen. Was kennzeichnet diese Bewertungsform am ehesten?",
  "options": [
   "Quantitativ, da Kopplung und Komplexität erhoben werden.",
   "Formal wie eine Inspektion, mit unabhängigem Moderator.",
   "Setzt Code voraus, da Modelle zu abstrakt sind.",
   "Qualitativ; auch ohne Implementierung am Entwurf möglich."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Metriken können in ein Review einfließen, das Urteil entsteht aber durch Experteneinschätzung. Das Review bleibt qualitativ.",
   "Falsch: Beim Walkthrough führt der Autor durch den Entwurf; er ist weniger formal als eine Inspektion mit festen Rollen und Moderator.",
   "Falsch: Reviews arbeiten gerade auch mit Dokumentation und Entwurfsmodellen, die das Curriculum als Informationsquellen nennt.",
   "Richtig: Fachleute gehen Entwurf und Modelle gemeinsam durch und beurteilen sie anhand der Qualitätsziele – Code ist dafür nicht nötig."
  ],
  "explanation": "Ein Walkthrough ist eine qualitative, expertengestützte Durchsicht, die schon vor der Implementierung möglich ist. Falle: Einfließende Metriken machen ihn nicht quantitativ, und er ist weniger formal als eine Inspektion."
 },
 {
  "id": "c5q11",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R2",
  "type": "multi",
  "q": "Sie planen die Analyse eines Online-Shops. Welche der folgenden Verfahren zählen laut Curriculum zu den qualitativen Analysemethoden?",
  "options": [
   "Szenariobasierte Analyse, z. B. ATAM.",
   "Zyklomatische Komplexität je Komponente.",
   "Architektur-Review durch Experten.",
   "Penetrationstest der Bestellschnittstelle.",
   "Antwortzeiten unter realistischer Last messen.",
   "Testabdeckung als Prozentwert ermitteln."
  ],
  "correct": [
   0,
   2,
   3
  ],
  "optExpl": [
   "Richtig: Die Architektur wird gegen Szenarien durchgespielt und durch Experteneinschätzung beurteilt.",
   "Falsch: Eine quelltextbezogene Metrik – quantitativ.",
   "Richtig: Fachleute beurteilen den Entwurf anhand der Qualitätsziele – ein Urteil, keine Messung.",
   "Richtig: Das Curriculum nennt Penetrationstests ausdrücklich neben Interviews und Umfragen als qualitative Auswertung.",
   "Falsch: Laufzeitverhalten zu messen ist laut Curriculum eine quantitative Methode.",
   "Falsch: Testabdeckung ist ein berechneter Wert und damit eine quantitative Größe."
  ],
  "explanation": "Reviews, Szenarioanalysen und – leicht übersehen – Penetrationstests zählen laut Curriculum zur qualitativen Analyse. Testabdeckung, Komplexitätsmetriken und Lastmessungen sind quantitativ."
 },
 {
  "id": "c5q12",
  "chapter": 5,
  "lz": "LZ 05-01",
  "r": "R1",
  "type": "multi",
  "q": "Zu welchen Zeitpunkten ist eine Architekturanalyse sinnvoll?",
  "options": [
   "Hauptsächlich vor der Implementierung, da spätere Analysen nur noch die Konformität und nicht mehr die Anforderungserfüllung prüfen können.",
   "Vor allem nach Abschluss der Implementierung, weil erst dann belastbare Messwerte vorliegen.",
   "Während der Implementierung, um zu prüfen, ob die Umsetzung zu Entwurf und Architekturentscheidungen passt.",
   "Nur bei konkretem Anlass wie Qualitätsproblemen; ohne Anlass bindet eine Analyse Kapazität, die im Entwurf fehlt.",
   "Bereits vor der Implementierung, um Risiken im Entwurf zu finden, solange Korrekturen noch günstig sind.",
   "Bei bestehenden Systemen, z. B. vor einer größeren Erweiterung oder Migration."
  ],
  "correct": [
   2,
   4,
   5
  ],
  "optExpl": [
   "Falsch: Auch spätere Analysen können prüfen, ob die Anforderungen erfüllt sind – etwa über Messungen, Lasttests oder Akzeptanztests. Die Einschränkung auf Konformität ist falsch.",
   "Falsch: Messwerte gibt es tatsächlich erst später – aber wer erst dann analysiert, findet Entwurfsrisiken zu spät. Das Curriculum nennt Analyse vor, während und nach der Implementierung, nicht vor allem danach.",
   "Richtig: Begleitend zur Umsetzung zeigt ein Soll-Ist-Abgleich, ob der Code der geplanten Architektur folgt. So wird Erosion erkannt, bevor sie sich verfestigt.",
   "Falsch: Anlassbezogene Analysen sind sinnvoll, aber nicht nur: Begleitende Analysen sollen Risiken finden, bevor sie zu Problemen werden. Wer auf Probleme wartet, analysiert zu spät.",
   "Richtig: Schon ein Entwurf lässt sich gegen Qualitätsszenarien prüfen. Gefundene Risiken sind dann noch billig zu beheben.",
   "Richtig: Analyse ist nicht auf Neuentwicklungen beschränkt. Vor einer Erweiterung oder Migration klärt sie, ob die bestehende Architektur die neuen Anforderungen tragen kann."
  ],
  "explanation": "Laut Curriculum dient Analyse dazu, Risiken vor, während und nach der Implementierung zu finden – also früh, begleitend und bei Bestandssystemen. Fallen: „vor allem danach“, „nur bei Anlass“, „später nur noch Konformität“."
 },
 {
  "id": "c5q13",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R2",
  "type": "multi",
  "q": "Ein Manager will Teams künftig allein über Code-Metriken steuern. Welche Grenzen metrikbasierter Bewertung sollten Sie ihm nennen?",
  "options": [
   "Als Ziel gesetzte Metriken verlieren an Aussagekraft.",
   "Werte sind sprachunabhängig zwischen Systemen vergleichbar.",
   "Metrikwerte brauchen Kontext und Interpretation.",
   "Manche Qualitäten lassen sich nur teilweise messen.",
   "Quelltext-Metriken liegen schon vor der Implementierung vor."
  ],
  "correct": [
   0,
   2,
   3
  ],
  "optExpl": [
   "Richtig: Wird eine Metrik zum Ziel, optimieren Beteiligte auf die Zahl statt auf die Qualität (Goodhart’s Law).",
   "Falsch: Gerade das ist heikel: Sprache, Domäne und Systemkontext beeinflussen die Werte, ein direkter Vergleich trügt leicht.",
   "Richtig: Ein Schwellenwert allein ist keine Bewertung – ob ein Wert problematisch ist, hängt vom Baustein und seiner Rolle ab.",
   "Richtig: Wartbarkeit oder Sicherheit bilden Metriken nur ausschnittsweise ab; qualitative Verfahren bleiben nötig.",
   "Falsch: Quelltextmetriken setzen Code voraus. Früh im Entwurf helfen eher qualitative Verfahren."
  ],
  "explanation": "Metriken brauchen Kontext, bilden Qualitäten nur teilweise ab und verlieren als Zielvorgabe ihre Aussagekraft. Falle: Systemübergreifende Vergleiche sind heikel, und Code-Metriken setzen Code voraus."
 },
 {
  "id": "c5q14",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R1",
  "type": "multi",
  "q": "Welche Ergebnisse liefert eine Architekturbewertung typischerweise?",
  "options": [
   "Einen Nachweis, dass alle Qualitätsziele erfüllt sind.",
   "Risiken und Nicht-Risiken.",
   "Eine vom Bewertungsteam erstellte Zielarchitektur.",
   "Eine Gesamtnote der Architektur.",
   "Sensitivitäts- und Trade-off-Punkte.",
   "Priorisierte Maßnahmenvorschläge."
  ],
  "correct": [
   1,
   4,
   5
  ],
  "optExpl": [
   "Falsch: Eine Bewertung zeigt Risiken auf, sie beweist nichts. Ob Ziele erreicht werden, zeigt sich endgültig erst im Betrieb.",
   "Richtig: Bewertungen benennen problematische Entscheidungen (Risiken) und ausdrücklich auch tragfähige (Nicht-Risiken).",
   "Falsch: Das Bewertungsteam bewertet und empfiehlt. Den Entwurf verantworten weiterhin die Architekt:innen des Systems.",
   "Falsch: Bewertungen sind überwiegend qualitativ und messen gegen die eigenen Ziele. Eine einzelne Note würde die Risiken verdecken.",
   "Richtig: Sie zeigen, an welchen Entscheidungen Qualitäten besonders empfindlich hängen oder gegeneinander abgewogen werden.",
   "Richtig: Aus den Risiken leiten sich priorisierte Empfehlungen ab, was zuerst angegangen werden sollte."
  ],
  "explanation": "Typische Ergebnisse: Risiken, Nicht-Risiken, Sensitivitäts- und Trade-off-Punkte, priorisierte Maßnahmen. Keine Gesamtnote, kein Erfüllungsnachweis und keine vom Bewertungsteam entworfene neue Architektur."
 },
 {
  "id": "k10",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R2",
  "type": "k",
  "points": 2,
  "q": "Sie planen eine Analyse der Architektur. Ist das jeweilige Vorgehen eher qualitativ oder quantitativ?",
  "categories": [
   "Qualitativ",
   "Quantitativ"
  ],
  "rows": [
   {
    "text": "Penetrationstest durch externe Sicherheitsfachleute",
    "cat": 0
   },
   {
    "text": "Interviews mit Entwickler:innen zu bekannten Schwachstellen",
    "cat": 0
   },
   {
    "text": "Änderungsrate je Komponente aus der Revisionshistorie",
    "cat": 1
   },
   {
    "text": "Anzahl gemeldeter Fehler je Komponente aus dem Ticketsystem",
    "cat": 1
   },
   {
    "text": "Szenariobewertung mit Szenarien, die Messgrößen wie „unter 2 s“ enthalten",
    "cat": 0
   },
   {
    "text": "Grad der ein- und ausgehenden Abhängigkeiten je Baustein",
    "cat": 1
   }
  ],
  "explanation": "Szenariobasierte Bewertung bleibt qualitativ, auch wenn die Szenarien Messgrößen enthalten; Penetrationstests zählen ebenfalls zu den qualitativen Verfahren. Fehlerzahlen, Änderungsraten und Kopplungsgrade sind gezählte Kennzahlen."
 },
 {
  "id": "c5q15",
  "chapter": 5,
  "lz": "LZ 05-01",
  "r": "R1",
  "type": "multi",
  "q": "Vor einem geplanten Architektur-Review stellt sich heraus, dass keine priorisierten Qualitätsziele vorliegen. Warum ist das ein Problem?",
  "options": [
   "Es fehlt der Maßstab für die Bewertung.",
   "Bewertbar sind nur Ziele, die als Metrik vorliegen.",
   "Der Bewertungsumfang folgt aus den funktionalen Anforderungen.",
   "Erst Qualitätsziele legen die Technologien fest.",
   "Ohne Priorität fehlt der Fokus auf das Wichtigste."
  ],
  "correct": [
   0,
   4
  ],
  "optExpl": [
   "Richtig: Entscheidungen lassen sich nur gegen Ziele bewerten; ohne Qualitätsziele bleibt offen, was „gut“ bedeutet.",
   "Falsch: Szenarien und qualitative Verfahren genügen; Ziele müssen nicht als Metrik formuliert sein.",
   "Falsch: Funktionen sind wichtig, Maßstab einer Architekturbewertung sind aber vor allem die Qualitätsziele.",
   "Falsch: Qualitätsziele beeinflussen Entscheidungen, schreiben aber keine Technologien vor – das wäre bereits Lösung.",
   "Richtig: Die Zeit für eine Bewertung ist begrenzt; die Priorisierung lenkt sie auf die wichtigsten und riskantesten Punkte."
  ],
  "explanation": "Priorisierte Qualitätsziele sind Maßstab und Fokus jeder Bewertung. Falle: Sie müssen nicht als Metriken vorliegen und legen keine Technologien fest."
 },
 {
  "id": "c5q16",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R2",
  "type": "multi",
  "q": "Wofür eignen sich Werkzeuge der statischen Code- und Architekturanalyse?",
  "options": [
   "Kopplungs- und Komplexitätsmetriken ermitteln.",
   "Zyklische Abhängigkeiten zwischen Bausteinen aufdecken.",
   "Nachweisen, dass Performanzziele erfüllt sind.",
   "Antwortzeiten unter Produktionslast messen.",
   "Verstöße gegen Schichtungsregeln finden.",
   "Die Kohäsion fachlich zuverlässig bewerten."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Richtig: Solche Metriken lassen sich ohne Ausführung direkt aus dem Code berechnen.",
   "Richtig: Zyklen sind in der statischen Struktur sichtbar und lassen sich automatisch erkennen.",
   "Falsch: Performanz zeigt sich erst zur Laufzeit. Statische Analyse kann Hinweise geben, aber nichts nachweisen.",
   "Falsch: Das erfordert eine Ausführung des Systems, also eine dynamische Analyse oder Lasttests.",
   "Richtig: Erlaubte und verbotene Abhängigkeiten lassen sich als Regeln hinterlegen und automatisch prüfen.",
   "Falsch: Tools liefern Näherungswerte. Ob Elemente fachlich zusammengehören, kann ein Werkzeug nicht zuverlässig beurteilen."
  ],
  "explanation": "Statische Analyse prüft Code und Struktur ohne Ausführung: Metriken, Schichtungsregeln, Zyklen. Laufzeiteigenschaften wie Performanz lassen sich so weder messen noch nachweisen, und fachliche Kohäsion beurteilt kein Tool zuverlässig."
 },
 {
  "id": "c5q17",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R3",
  "type": "single",
  "q": "Im ATAM-Workshop zeigt sich: Jede Nachricht zu verschlüsseln erhöht die Sicherheit, verlängert aber die Antwortzeit. Wie nennt ATAM eine solche Entscheidung?",
  "options": [
   "Risiko.",
   "Szenario mit hoher Wichtigkeit und Schwierigkeit.",
   "Trade-off-Punkt.",
   "Sensitivitätspunkt."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Ein Risiko ist eine potenziell problematische, z. B. noch offene Entscheidung. Ein bewusst abgewogener Zielkonflikt ist nicht automatisch ein Risiko.",
   "Falsch: Das ist eine Priorisierung im Utility Tree (H,H) und beschreibt ein Szenario, keine Entscheidung.",
   "Richtig: Die Entscheidung beeinflusst mehrere Qualitätsmerkmale gegensätzlich – Sicherheit steigt, Performanz sinkt.",
   "Falsch: Ein Sensitivitätspunkt ist für ein Qualitätsmerkmal ausschlaggebend. Hier werden aber zwei Merkmale gegenläufig berührt."
  ],
  "explanation": "Eine Entscheidung, die mehrere Qualitätsmerkmale gegensätzlich beeinflusst, ist ein Trade-off-Punkt. Falle: Sensitivitätspunkt (ein Merkmal), Risiko und (H,H)-Szenario sind andere ATAM-Begriffe."
 },
 {
  "id": "c5q18",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R2",
  "type": "single",
  "q": "Für eine Architekturbewertung steht nur ein halber Tag zur Verfügung. Worauf konzentrieren Sie sich am ehesten?",
  "options": [
   "Auf die wichtigsten Qualitätsziele und riskantesten Szenarien.",
   "Auf die Bausteine mit der höchsten Änderungsrate.",
   "Auf eine Stichprobe über alle Bausteine.",
   "Auf die Bausteine mit den meisten bekannten Fehlern."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Bei knapper Zeit bewertet man dort, wo ein Verfehlen am meisten schadet: bei den höchstpriorisierten Zielen und den riskantesten Szenarien.",
   "Falsch: Die Änderungsrate kann ein Hinweis sein, sagt aber nichts darüber, ob die wichtigsten Qualitätsziele gefährdet sind.",
   "Falsch: Eine breite Stichprobe verteilt die knappe Zeit gleichmäßig – auch auf Unkritisches. Priorisieren ist wirksamer.",
   "Falsch: Fehlerhäufungen deuten auf Probleme im Code hin. Ob sie die wichtigsten Qualitätsziele betreffen, ist damit nicht gesagt."
  ],
  "explanation": "Bei knapper Zeit priorisiert man nach Qualitätszielen und Risiko. Änderungsrate und Fehlerhäufungen sind nützliche Hinweise, aber kein Ersatz für die Ausrichtung an den wichtigsten Zielen."
 },
 {
  "id": "c5q19",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zur Bewertung einer Softwarearchitektur treffen zu?",
  "options": [
   "Sie ist auch ohne lauffähiges System möglich.",
   "Sie braucht priorisierte Qualitätsziele als Maßstab.",
   "Sie erfolgt ohne das Entwicklungsteam, um unabhängig zu bleiben.",
   "Sie setzt eine Dokumentation in UML voraus.",
   "Sie kann Messwerte und Experteneinschätzungen kombinieren.",
   "Sie liefert eine Gesamtnote, die Systeme vergleichbar macht."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Richtig: Schon Entwürfe lassen sich, etwa szenariobasiert, gegen Qualitätsziele prüfen – gerade dann sind Korrekturen noch günstig.",
   "Richtig: Ohne Maßstab lässt sich nicht beurteilen, ob eine Architektur gut genug ist – die priorisierten Qualitätsziele liefern ihn.",
   "Falsch: Das Team kennt Entscheidungen, Annahmen und Schwachstellen am besten. Externe Bewerter können helfen, das Team auszuschließen schadet aber.",
   "Falsch: Bewertet werden kann jede ausreichend verständliche Beschreibung, auch Skizzen oder Gespräche. Eine bestimmte Notation ist nicht nötig.",
   "Richtig: Quantitative Daten wie Metriken oder Logs und qualitative Einschätzungen ergänzen sich – beides ist laut Curriculum Teil der Analyse.",
   "Falsch: Bewertet wird gegen die eigenen Qualitätsziele des Systems. Eine systemübergreifend vergleichbare Note ist nicht das Ziel."
  ],
  "explanation": "Architekturbewertung misst gegen priorisierte Qualitätsziele, ist schon am Entwurf möglich und kombiniert Messungen mit Einschätzungen. Sie braucht weder UML noch liefert sie eine vergleichbare Gesamtnote – und das Team gehört dazu."
 },
 {
  "id": "c5q20",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R3",
  "type": "single",
  "q": "Im ATAM-Workshop zeigt sich: Die Antwortzeit hängt maßgeblich von der Größe des Verbindungspools ab, andere Qualitäten kaum. Wie nennt ATAM das?",
  "options": [
   "Baustein mit hoher afferenter Kopplung.",
   "Sensitivitätspunkt.",
   "Nicht-Risiko.",
   "Trade-off-Punkt."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Viele eingehende Abhängigkeiten sind eine Kopplungsmetrik, kein ATAM-Begriff für die Wirkung auf ein Qualitätsmerkmal.",
   "Richtig: Eine Eigenschaft, von der ein einzelnes Qualitätsmerkmal maßgeblich abhängt, ist ein Sensitivitätspunkt.",
   "Falsch: Ein Nicht-Risiko ist eine als unkritisch beurteilte Entscheidung. Die starke Abhängigkeit selbst ist noch keine solche Einstufung.",
   "Falsch: Ein Trade-off-Punkt beeinflusst mehrere Merkmale gegensätzlich. Hier ist im Wesentlichen nur eines betroffen."
  ],
  "explanation": "Hängt ein Qualitätsmerkmal maßgeblich von einer Entscheidung ab, ist das ein Sensitivitätspunkt. Falle: Trade-off-Punkt betrifft mehrere Merkmale gegensätzlich; Nicht-Risiko ist eine Einstufung."
 },
 {
  "id": "c5q21",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R3",
  "type": "multi",
  "q": "Welche Ergebnistypen liefert eine szenariobasierte Bewertung wie ATAM typischerweise?",
  "options": [
   "Eine gewichtete Gesamtnote je Qualitätsmerkmal, aus der sich die Abnahme der Architektur ableiten lässt.",
   "Identifizierte Risiken und ausdrücklich benannte Nicht-Risiken.",
   "Sensitivitäts- und Trade-off-Punkte.",
   "Risikothemen, die mehrere zusammenhängende Einzelrisiken bündeln.",
   "Einen priorisierten Qualitätsbaum (Utility Tree) der relevanten Szenarien.",
   "Eine Rangfolge der Architekturalternativen nach ihrem Kosten-Nutzen-Verhältnis."
  ],
  "correct": [
   1,
   2,
   3,
   4
  ],
  "optExpl": [
   "Falsch: ATAM ist überwiegend qualitativ und liefert keine Noten. Es zeigt Risiken und Abwägungen auf; über das weitere Vorgehen entscheiden die Stakeholder.",
   "Richtig: ATAM benennt Risiken, also problematische Entscheidungen, und ausdrücklich auch Nicht-Risiken, also als tragfähig bestätigte Entscheidungen.",
   "Richtig: Sie entstehen, wenn Szenarien gegen die Entscheidungen durchgespielt werden, und zeigen, wo Qualitäten empfindlich reagieren oder gegeneinander abgewogen werden.",
   "Richtig: ATAM fasst zusammenhängende Einzelrisiken zu Risikothemen zusammen. Damit werden systematische Schwächen sichtbar, die das Management gezielt adressieren kann.",
   "Richtig: Im Verlauf von ATAM wird ein Utility Tree erstellt und priorisiert. Er ist zugleich Arbeitsgrundlage und dokumentiertes Ergebnis.",
   "Falsch: Kosten und Nutzen von Alternativen bewertet die Kosten-Nutzen-Analyse (CBAM), die auf ATAM aufsetzen kann. ATAM selbst bewertet die Architektur gegen ihre Qualitätsziele, nicht nach Kosten."
  ],
  "explanation": "ATAM liefert Utility Tree, Risiken, Nicht-Risiken, Sensitivitäts- und Trade-off-Punkte sowie Risikothemen. Es ist qualitativ: keine Noten, keine Kosten-Nutzen-Rangfolge (das ist CBAM)."
 },
 {
  "id": "c5q22",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R3",
  "type": "single",
  "q": "Ein Team will seine Architektur schon vor der Implementierung gemeinsam mit Stakeholdern bewerten. Wie ist ATAM dafür am ehesten einzuordnen?",
  "options": [
   "Moderiert mit Stakeholdern, auch vor der Implementierung.",
   "Workshop, in dem Stakeholder die beste Alternative wählen.",
   "Qualitativ, setzt aber ein lauffähiges System voraus.",
   "Review-Form wie die Inspektion, ohne Stakeholder."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: ATAM arbeitet mit Szenarien und Experteneinschätzung im moderierten Workshop – ein laufendes System ist nicht nötig.",
   "Falsch: ATAM macht Trade-offs und Risiken sichtbar; eine Abstimmung über Alternativen ist nicht sein Ergebnis.",
   "Falsch: Qualitativ ja, aber die Szenarien werden gegen Entwurf und Entscheidungen durchgespielt, nicht gegen ein laufendes System.",
   "Falsch: ATAM bezieht Stakeholder ausdrücklich ein, etwa beim Priorisieren der Szenarien."
  ],
  "explanation": "ATAM ist eine moderierte, szenariobasierte Methode mit Stakeholdern und früh einsetzbar. Falle: Es braucht kein laufendes System und endet nicht mit einer Abstimmung."
 },
 {
  "id": "c5q23",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R3",
  "type": "single",
  "q": "Der Entwurf einer sicherheitskritischen Komponente soll mit Vorbereitung, festen Rollen, Protokoll und unabhängigem Moderator geprüft werden. Welche Review-Form ist das?",
  "options": [
   "Informelles Review.",
   "Inspektion.",
   "Walkthrough mit Protokoll.",
   "Pair-Review am Arbeitsplatz."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Das informelle Review kommt ohne feste Rollen und Protokoll aus – das Gegenteil des beschriebenen Vorgehens.",
   "Richtig: Die Inspektion ist die formalste Review-Form: definierte Rollen, Vorbereitung, Protokoll und ein vom Autor unabhängiger Moderator.",
   "Falsch: Auch ein Walkthrough kann protokolliert werden, er wird aber vom Autor geführt und ist weniger formal als eine Inspektion.",
   "Falsch: Zwei Personen sehen sich gemeinsam einen Entwurf an – nützlich, aber ohne Moderator und definierte Rollen."
  ],
  "explanation": "Der Formalisierungsgrad steigt von informell über Walkthrough zur Inspektion. Falle: Ein Protokoll allein macht einen Walkthrough noch nicht zur Inspektion – entscheidend sind Rollen und unabhängiger Moderator."
 },
 {
  "id": "c5q24",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R2",
  "type": "single",
  "q": "Ein Architekt soll das Risikomanagement im Projekt unterstützen. Worauf konzentriert er sich aus Architektursicht am ehesten?",
  "options": [
   "Projektrisiken wie Termine, die er allein verantwortet.",
   "Produktrisiken; meist durch Senken der Eintrittswahrscheinlichkeit.",
   "Risiken akzeptieren und erst bei Eintritt reagieren.",
   "Produktrisiken; meist durch Begrenzen der Schadenshöhe."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Termin- und Budgetrisiken liegen vor allem bei der Projektleitung; der Architekt verantwortet sie nicht allein.",
   "Richtig: Aus Architektursicht stehen Risiken des Produkts im Vordergrund; am häufigsten mindert man sie, indem man ihren Eintritt unwahrscheinlicher macht.",
   "Falsch: Akzeptanz ist eine mögliche Strategie für einzelne Risiken, aber kein Schwerpunkt des Risikomanagements.",
   "Falsch: Der Fokus auf Produktrisiken stimmt. Schadensbegrenzung ist aber eine weitere, seltener gewählte Strategie als das Senken der Wahrscheinlichkeit."
  ],
  "explanation": "Aus Architektursicht stehen Produktrisiken im Mittelpunkt, meist gemindert durch geringere Eintrittswahrscheinlichkeit. Falle: Die Option mit Schadensbegrenzung nennt den richtigen Fokus, aber die seltenere Strategie."
 },
 {
  "id": "c5q25",
  "chapter": 5,
  "lz": "LZ 05-03",
  "r": "R2",
  "type": "multi",
  "q": "In einem langlaufenden System weicht die umgesetzte Struktur zunehmend von der dokumentierten Soll-Architektur ab. Welche Aussagen treffen zu?",
  "options": [
   "Regelmäßige Framework-Updates beheben die Ursache.",
   "Vollständige Dokumentation verhindert Erosion weitgehend.",
   "Die geplanten Qualitäten sind nicht mehr verlässlich zu erwarten.",
   "Man spricht von Architekturerosion.",
   "Die Doku an den Ist-Stand anzupassen, löst das Problem.",
   "Abhängigkeitsanalysen machen die Abweichungen sichtbar."
  ],
  "correct": [
   2,
   3,
   5
  ],
  "optExpl": [
   "Falsch: Veraltete Technik ist ein anderes Problem. Erosion betrifft die Struktur und Abhängigkeiten, die ein Update nicht korrigiert.",
   "Falsch: Erosion entsteht im Code, etwa durch Zeitdruck oder Abkürzungen – auch bei sehr guter Dokumentation.",
   "Richtig: Die Qualitätseigenschaften wurden für die Soll-Struktur entworfen. Weicht der Code ab, gilt diese Planung nicht mehr sicher.",
   "Richtig: Das schleichende Auseinanderlaufen von Soll und Ist heißt Erosion; ohne Gegensteuern nimmt es zu.",
   "Falsch: Damit verschwindet nur die sichtbare Abweichung. Ob die Ist-Struktur die Qualitätsziele noch trägt, ist damit nicht geklärt.",
   "Richtig: Toolgestützte Analysen zeigen, wo der Code verbotene Abhängigkeiten enthält – laut Curriculum ein Mittel der Konformitätsprüfung."
  ],
  "explanation": "Soll-Ist-Abweichung = Architekturerosion. Sie gefährdet die geplanten Qualitäten und wird per Konformitätsprüfung (z. B. Abhängigkeitsanalyse) sichtbar. Weder Doku-Anpassung noch gute Doku oder Updates beheben sie."
 },
 {
  "id": "c5q26",
  "chapter": 5,
  "lz": "LZ 05-03",
  "r": "R2",
  "type": "single",
  "q": "Nach zwei Jahren Entwicklung wird eine Konformitätsanalyse der Architektur beauftragt. Was prüft sie am ehesten?",
  "options": [
   "Ob die Architekturdokumentation widerspruchsfrei ist.",
   "Ob der Entwurf die Qualitätsszenarien erfüllen wird.",
   "Ob die Anforderungen die Qualitätsziele abdecken.",
   "Ob die Implementierung dem Architekturentwurf entspricht."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Eine in sich stimmige Dokumentation ist wünschenswert, die Konformitätsanalyse vergleicht aber Implementierung und Entwurf.",
   "Falsch: Das ist der Zweck einer Qualitätsanalyse, etwa szenariobasiert. Konformität fragt nach der Übereinstimmung von Code und Entwurf.",
   "Falsch: Das ist eine Prüfung der Anforderungen, nicht der Übereinstimmung von Implementierung und Architektur.",
   "Richtig: Die Konformitätsanalyse vergleicht umgesetzte und beabsichtigte Architektur samt getroffenen Entscheidungen und deckt so Erosion auf."
  ],
  "explanation": "Konformität = stimmt die Implementierung mit Entwurf und Entscheidungen überein? Falle: Ob der Entwurf die Qualitätsziele trägt, ist eine andere Analysefrage."
 },
 {
  "id": "c5q27",
  "chapter": 5,
  "lz": "LZ 05-03",
  "r": "R2",
  "type": "single",
  "q": "Ein Schichtenmodell verbietet Zugriffe der Datenschicht auf die Präsentationsschicht. Womit prüfen Sie die Einhaltung am zuverlässigsten?",
  "options": [
   "Verbindliche Namenskonventionen für Pakete.",
   "Stichprobenartiges manuelles Code-Review.",
   "Laufzeit-Monitoring der aufgerufenen Module.",
   "Statische Abhängigkeitsanalyse gegen definierte Regeln."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Konventionen machen Schichten erkennbar, weisen aber nicht nach, dass keine verbotenen Zugriffe existieren.",
   "Falsch: Reviews sind eine genannte Methode, finden als Stichprobe aber nicht zuverlässig jede verbotene Abhängigkeit.",
   "Falsch: Monitoring sieht nur die Pfade, die im Betrieb tatsächlich durchlaufen werden; selten genutzte Verstöße bleiben unentdeckt.",
   "Richtig: Werkzeuge prüfen alle tatsächlichen Abhängigkeiten im Code automatisiert gegen die Schichtregeln – vollständig und wiederholbar."
  ],
  "explanation": "Schichtregeln prüft man am zuverlässigsten mit statischer Abhängigkeitsanalyse. Falle: Monitoring sieht nur durchlaufene Pfade, Stichproben sind lückenhaft, Konventionen sind kein Nachweis."
 },
 {
  "id": "c6q1",
  "chapter": 6,
  "lz": "LZ 06-01",
  "r": "R3",
  "type": "single",
  "q": "Ein Kollege hält Kapitel 6 („Beispiele für Softwarearchitekturen“) für entbehrlich, da es „nichts Neues“ enthalte. Wie lässt sich sein Zweck am ehesten einordnen?",
  "options": [
   "Prüfungsrelevante Zusammenfassung der Kapitel 1 bis 5.",
   "Zusätzliche Regeln, die aus Beispielen abzuleiten sind.",
   "Den Weg von Anforderungen zur Lösung an Beispielen nachvollziehen.",
   "Empfohlene Referenzarchitekturen für typische Domänen."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Kapitel 6 fasst nicht zusammen, sondern wendet an – und ist laut Curriculum gerade nicht prüfungsrelevant.",
   "Falsch: Kapitel 6 führt keine neuen Regeln oder Lernziele über die vorherigen Kapitel hinaus ein.",
   "Richtig: Kapitel 6 macht an mindestens einem Beispiel greifbar, wie Anforderungen und Randbedingungen zu Entscheidungen und Strukturen führen.",
   "Falsch: Die Beispiele veranschaulichen Zusammenhänge; sie sind keine Empfehlung für bestimmte Architekturen oder Technologien."
  ],
  "explanation": "Kapitel 6 wendet das Gelernte an Beispielen an und macht den Weg Anforderung → Entscheidung → Struktur nachvollziehbar. Falle: Es ist weder Zusammenfassung noch Referenzkatalog und nicht prüfungsrelevant."
 },
 {
  "id": "c6q2",
  "chapter": 6,
  "lz": "LZ 06-02",
  "r": "R3",
  "type": "multi",
  "q": "Ein durchgängiges Architekturbeispiel soll den „roten Faden“ von den Anforderungen bis zur Umsetzung zeigen. Was sollte man daran vor allem erkennen können?",
  "options": [
   "Wie Querschnittskonzepte technisch umgesetzt sind.",
   "Eine allgemeingültige Referenzlösung für andere Systeme.",
   "Wie Qualitätsziele und Randbedingungen Entscheidungen prägen.",
   "Welche Alternativen erwogen und warum verworfen wurden.",
   "Welche Technologien sich am Markt durchgesetzt haben."
  ],
  "correct": [
   0,
   2,
   3
  ],
  "optExpl": [
   "Richtig: LZ 06-02 zielt auf die technische Umsetzung: Implementierung, technische Konzepte, Produkte und Lösungsstrategien.",
   "Falsch: Die Lösung gilt für den Kontext des Beispiels; unter anderen Randbedingungen kann eine andere sinnvoll sein.",
   "Richtig: Das ist der Kern von LZ 06-01: nachvollziehen, warum die Architektur so aussieht, wie sie aussieht.",
   "Richtig: Verworfene Alternativen samt Gründen machen nachvollziehbar, warum gerade diese Lösung gewählt wurde.",
   "Falsch: Produkte im Beispiel zeigen eine konkrete Umsetzung, aber keine Marktübersicht oder Technologieempfehlung."
  ],
  "explanation": "Ein durchgängiges Beispiel zeigt, wie Anforderungen Entscheidungen prägen, wie diese technisch umgesetzt sind und welche Alternativen verworfen wurden. Falle: Es liefert keine allgemeingültige Referenz und keine Marktübersicht."
 },
 {
  "id": "c6q3",
  "chapter": 6,
  "lz": "LZ 06-01",
  "r": "R3",
  "type": "single",
  "q": "Wie ist die Rolle von Kapitel 6 (Beispiele) im Verhältnis zur CPSA-F-Prüfung am zutreffendsten eingeordnet?",
  "options": [
   "R1; die Beispiele sind ein Prüfungsschwerpunkt.",
   "R2; die Beispiele sind als Referenzlösungen zu kennen.",
   "R3; laut Curriculum nicht prüfungsrelevant.",
   "Nicht Teil des Curriculums, nur Zusatzmaterial."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: R1-Inhalte werden geprüft, Kapitel 6 gehört aber ausdrücklich nicht dazu.",
   "Falsch: Die Beispiele sind keine Referenzlösungen, und das Kapitel ist R3, nicht R2.",
   "Richtig: Beide Lernziele 06-01 und 06-02 sind R3; das Curriculum vermerkt ausdrücklich, dass das Kapitel nicht geprüft wird.",
   "Falsch: Kapitel 6 ist Teil des Curriculums mit eigenen Lernzielen – nur eben nicht prüfungsrelevant."
  ],
  "explanation": "Kapitel 6 gehört zum Curriculum, ist aber R3 und nicht prüfungsrelevant. Falle: „Nicht prüfungsrelevant“ heißt nicht „außerhalb des Curriculums“."
 },
 {
  "id": "c6q4",
  "chapter": 6,
  "lz": "LZ 06-02",
  "r": "R3",
  "type": "single",
  "q": "Zwei Beispiele lösen eine ähnliche Anforderung mit unterschiedlichen Architekturansätzen. Worin liegt der eigentliche Lerngewinn am ehesten?",
  "options": [
   "Unterschiedliche Lösungen deuten auf einen Entwurfsfehler hin.",
   "Daraus lässt sich eine allgemeingültige Musterlösung ableiten.",
   "Entscheidungen hängen von Kontext und Randbedingungen ab.",
   "Der Vergleich zeigt objektiv die überlegene Lösung."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Verschiedene Lösungen für ähnliche Anforderungen sind normal und meist durch unterschiedliche Randbedingungen begründet.",
   "Falsch: Beispiele zeigen Muster samt ihren Grenzen, nehmen künftige Entscheidungen aber nicht vorweg.",
   "Richtig: Dieselbe Anforderung kann unter anderen Randbedingungen anders sinnvoll gelöst werden – Architektur ist kontextabhängig.",
   "Falsch: Ohne gemeinsamen Kontext gibt es keine objektiv überlegene Lösung; jede ist an ihren Randbedingungen zu messen."
  ],
  "explanation": "Der Vergleich zeigt, dass Architekturentscheidungen kontextabhängig sind. Falle: Es gibt weder eine objektiv beste noch eine allgemeingültige Lösung."
 },
 {
  "id": "c6q5",
  "chapter": 6,
  "lz": "LZ 06-01",
  "r": "R3",
  "type": "multi",
  "q": "Eine Kollegin studiert zur Vorbereitung mehrere unterschiedliche Architekturbeispiele. Welchen Nutzen bringt ihr das am ehesten?",
  "options": [
   "Muster finden, die unabhängig vom Kontext passen.",
   "Bewährte Lösungen bei gleicher Domäne unverändert übernehmen.",
   "Erkennen, welche Randbedingungen Entscheidungen begründen.",
   "Das eigene Repertoire an Lösungsansätzen erweitern.",
   "Einen Überblick über marktübliche Technologiestacks gewinnen."
  ],
  "correct": [
   2,
   3
  ],
  "optExpl": [
   "Falsch: Muster haben Grenzen; gerade mehrere Beispiele zeigen, dass ihre Eignung vom Kontext abhängt.",
   "Falsch: Auch in derselben Domäne können Qualitätsziele und Randbedingungen abweichen; Lösungen sind anzupassen, nicht zu kopieren.",
   "Richtig: Der Vergleich schärft den Blick dafür, warum eine Entscheidung in ihrem Kontext sinnvoll war.",
   "Richtig: Wer viele Lösungen gesehen hat, kann Ansätze leichter auf neue Probleme übertragen.",
   "Falsch: Die Beispiele enthalten Produkte, zielen aber auf den Zusammenhang von Anforderungen und Lösung, nicht auf eine Marktübersicht."
  ],
  "explanation": "Mehrere Beispiele erweitern das Lösungsrepertoire und schärfen den Blick für begründende Randbedingungen. Falle: Sie liefern keine Kopiervorlagen – auch nicht in derselben Domäne – und keine kontextfreien Muster."
 },
 {
  "id": "c6q6",
  "chapter": 6,
  "lz": "LZ 06-02",
  "r": "R3",
  "type": "single",
  "q": "In einem Architekturbeispiel ist eine Entscheidung ausdrücklich mit ihren Nachteilen dokumentiert. Warum ist gerade das lehrreich?",
  "options": [
   "Architektur wägt konkurrierende Qualitätsziele bewusst ab.",
   "Nachteile zeigen, dass eine bessere Lösung übersehen wurde.",
   "Offengelegte Nachteile dienen vor allem der Absicherung.",
   "Ein guter Entwurf wird überarbeitet, bis keine Nachteile bleiben."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Der begründete Kompromiss zwischen konkurrierenden Zielen ist der Kern einer Architekturentscheidung – Nachteile gehören dazu.",
   "Falsch: Nahezu jede Entscheidung hat Nachteile; ihr Vorhandensein beweist keine übersehene, nachteilsfreie Alternative.",
   "Falsch: Dokumentierte Nachteile machen die Abwägung nachvollziehbar und helfen späteren Entscheidungen, nicht vorrangig der Absicherung.",
   "Falsch: Trade-offs lassen sich nicht wegoptimieren; wer jeden Nachteil beseitigen will, verschiebt ihn meist nur an eine andere Stelle."
  ],
  "explanation": "Trade-offs sind lehrreich, weil Architektur konkurrierende Qualitätsziele abwägt und der begründete Kompromiss den Kern der Entscheidung bildet. Falle: Nachteile sind kein Fehlerbeweis und lassen sich nicht wegoptimieren."
 },
 {
  "id": "k16",
  "chapter": 4,
  "lz": "LZ 04-02",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Sie verantworten die Architektur eines Systems, das drei Teams mit eigenen Architekt:innen bauen. Wie sinnvoll ist das Vorgehen für die Dokumentation?",
  "categories": [
   "Sinnvoll",
   "Nicht sinnvoll"
  ],
  "rows": [
   {
    "text": "Für das Management wird die Entwicklerdokumentation einfach gekürzt.",
    "cat": 1
   },
   {
    "text": "Ein gemeinsames Template (z. B. arc42) für alle Teams vereinbaren.",
    "cat": 0
   },
   {
    "text": "Die Beiträge der Teams stilistisch und inhaltlich harmonisieren.",
    "cat": 0
   },
   {
    "text": "Die regelmäßige mündliche Abstimmung ersetzt die übergreifende Dokumentation.",
    "cat": 1
   },
   {
    "text": "Ergebnisse aus Abstimmungsmeetings in die Dokumentation zurückführen.",
    "cat": 0
   },
   {
    "text": "Jedes Team wählt sein eigenes Format, solange es in sich konsistent ist.",
    "cat": 1
   }
  ],
  "explanation": "Unterschiedliche Autorengruppen zu harmonisieren und mündliche mit schriftlicher Kommunikation abzugleichen, ist ausdrücklich Aufgabe. Die Falle: Mündliches ergänzt die Doku nur, und das Management braucht andere Inhalte statt einer Kurzfassung."
 },
 {
  "id": "k17",
  "chapter": 1,
  "lz": "LZ 01-02",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Ein Stakeholder fragt, was bewusste Architekturarbeit dem Projekt bringt. Trifft die Aussage über Ziele und Nutzen zu?",
  "categories": [
   "Trifft zu",
   "Trifft nicht zu"
  ],
  "rows": [
   {
    "text": "Ein sorgfältiger Entwurf macht spätere Iterationen der Architektur überflüssig.",
    "cat": 1
   },
   {
    "text": "Sie schafft bei relevanten Stakeholdern Verständnis für Strukturen und Konzepte.",
    "cat": 0
   },
   {
    "text": "Sie legt fest, welche Features das System anbieten soll.",
    "cat": 1
   },
   {
    "text": "Sie hilft, die geforderte Funktionalität überhaupt umsetzbar zu machen.",
    "cat": 0
   },
   {
    "text": "Sie trägt zum Erreichen von Qualitäten wie Energieeffizienz bei.",
    "cat": 0
   },
   {
    "text": "Ihr Hauptnutzen liegt in geringeren Kosten der Erstentwicklung.",
    "cat": 1
   }
  ],
  "explanation": "Architektur macht Funktionalität umsetzbar, prägt Qualitäten (auch Energieeffizienz) und schafft Verständnis. Die Falle: Den Funktionsumfang legen die Stakeholder fest, Architekturarbeit kostet zunächst, und sie bleibt iterativ."
 },
 {
  "id": "k18",
  "chapter": 2,
  "lz": "LZ 02-02",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Für ein neues System liegen folgende Vorgaben vor. Ordnen Sie zu: Anforderung (funktional oder qualitativ) oder Randbedingung?",
  "categories": [
   "Anforderung",
   "Randbedingung"
  ],
  "rows": [
   {
    "text": "Die vorhandene Oracle-Datenbank ist weiter zu nutzen.",
    "cat": 1
   },
   {
    "text": "Jede Produktivsetzung braucht die Freigabe des Change Advisory Boards.",
    "cat": 1
   },
   {
    "text": "Das Entwicklungsteam hat bisher keine Erfahrung mit Cloud-Technologien.",
    "cat": 1
   },
   {
    "text": "Nutzer können Berichte als PDF exportieren.",
    "cat": 0
   },
   {
    "text": "Antworten erfolgen im 95. Perzentil in unter zwei Sekunden.",
    "cat": 0
   },
   {
    "text": "Das System muss 10.000 gleichzeitige Nutzer bedienen können.",
    "cat": 0
   }
  ],
  "explanation": "Qualifikation der Mitarbeitenden und Freigabeprozesse sind organisatorische Randbedingungen, auch wenn sie nicht wie Vorgaben klingen. Ein „muss“ macht eine Lastanforderung nicht zur Randbedingung – sie bleibt eine Qualitätsanforderung."
 },
 {
  "id": "k19",
  "chapter": 2,
  "lz": "LZ 02-03",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Ordnen Sie jede Anforderung eines Buchungssystems zu: beschreibt sie, WAS das System tut, oder WIE GUT?",
  "categories": [
   "Funktionale Anforderung",
   "Qualitätsanforderung"
  ],
  "rows": [
   {
    "text": "Ein Wechsel des Zahlungsanbieters betrifft höchstens ein Modul.",
    "cat": 1
   },
   {
    "text": "Administratoren können Rollen anlegen und ihnen Rechte zuweisen.",
    "cat": 0
   },
   {
    "text": "Das System ist im Monatsmittel zu 99,9 % verfügbar.",
    "cat": 1
   },
   {
    "text": "Die App läuft ohne Anpassung unter Android und iOS.",
    "cat": 1
   },
   {
    "text": "Die Oberfläche steht auf Deutsch und Englisch zur Verfügung.",
    "cat": 0
   }
  ],
  "explanation": "Mehrsprachigkeit und Rechteverwaltung klingen nach Qualität, sind aber angebotene Funktionen (WAS). Verfügbarkeit, Änderbarkeit und Portabilität beschreiben, WIE GUT das System ist."
 },
 {
  "id": "k21",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Aussagen zu den Pflichtmustern Schichten, Pipes & Filter und Microservices – richtig oder falsch?",
  "categories": [
   "Richtig",
   "Falsch"
  ],
  "rows": [
   {
    "text": "In gelockerter Schichtung darf eine Schicht auch nicht direkt darunterliegende nutzen.",
    "cat": 0
   },
   {
    "text": "Die Phasen eines Compilers sind ein typisches Beispiel für Pipes & Filter.",
    "cat": 0
   },
   {
    "text": "Microservices teilen sich üblicherweise eine gemeinsame Datenbank.",
    "cat": 1
   },
   {
    "text": "Microservices werden vorrangig nach technischen Schichten geschnitten.",
    "cat": 1
   },
   {
    "text": "Microservices erhöhen gegenüber einem Monolithen meist Betriebskomplexität und -kosten.",
    "cat": 0
   },
   {
    "text": "Ein modularer Monolith lässt sich intern nicht klar in Bausteine gliedern.",
    "cat": 1
   }
  ],
  "explanation": "Microservices sind fachlich geschnitten und haben eine eigene Datenhaltung; ihr Preis ist höhere Betriebskomplexität. Die Falle beim Monolithen: Auch er kann intern sauber modular gegliedert sein."
 },
 {
  "id": "k22",
  "chapter": 3,
  "lz": "LZ 03-10",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Ein Architekturteam sammelt Themen für Kapitel 8 der arc42-Doku. Handelt es sich um ein Querschnittsthema (betrifft viele Bausteine)?",
  "categories": [
   "Querschnittsthema",
   "Kein Querschnittsthema"
  ],
  "rows": [
   {
    "text": "Das Layout des Dialogs zur Adresseingabe.",
    "cat": 1
   },
   {
    "text": "Die Sortierung der Produktliste nach Preis.",
    "cat": 1
   },
   {
    "text": "Wie Bausteine miteinander kommunizieren, etwa Formate und Protokolle.",
    "cat": 0
   },
   {
    "text": "Die Plausibilitätsprüfung der Postleitzahl im Adressformular.",
    "cat": 1
   },
   {
    "text": "Was in Fehlermeldungen und Logs stehen darf, ohne Sicherheitsregeln zu verletzen.",
    "cat": 0
   },
   {
    "text": "Wie fachliche Objekte gespeichert und wieder geladen werden.",
    "cat": 0
   }
  ],
  "explanation": "Kommunikation, Persistenz und das Zusammenspiel von Sicherheit, Fehlerbehandlung und Logging betreffen viele Bausteine. Einzelne Dialoge, Feldprüfungen oder Sortierungen sind lokale Aufgaben."
 },
 {
  "id": "k23",
  "chapter": 3,
  "lz": "LZ 03-02",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Sie beginnen den Entwurf einer neuen Architektur. Wie sinnvoll ist das jeweilige Vorgehen?",
  "categories": [
   "Sinnvoll",
   "Nicht sinnvoll"
  ],
  "rows": [
   {
    "text": "Konsequenzen für den Quellcode ableiten, z. B. Paketstruktur und Aufrufregeln.",
    "cat": 0
   },
   {
    "text": "Einen Baustein erst als Blackbox beschreiben und bei Bedarf als Whitebox öffnen.",
    "cat": 0
   },
   {
    "text": "Die Technologie festlegen, bevor die Qualitätsanforderungen geklärt sind.",
    "cat": 1
   },
   {
    "text": "Fachlogik und Technik in getrennte Bausteine legen.",
    "cat": 0
   },
   {
    "text": "Alle Bausteine sofort bis zur untersten Ebene als Whitebox ausarbeiten.",
    "cat": 1
   },
   {
    "text": "Risiken von Architekturentscheidungen früh identifizieren.",
    "cat": 0
   }
  ],
  "explanation": "Fachliches und Technisches trennen, schrittweise verfeinern, Code-Konsequenzen und Risiken früh benennen gehört zum Entwurf. Die Falle: Verfeinert wird nur bei Bedarf, nicht flächendeckend bis zur untersten Ebene."
 },
 {
  "id": "k24",
  "chapter": 4,
  "lz": "LZ 04-08",
  "r": "R2",
  "type": "k",
  "points": 2,
  "q": "Ihr Team führt Architecture Decision Records (ADR) nach Nygard ein. Gehört der Inhalt in ein ADR?",
  "categories": [
   "Gehört ins ADR",
   "Gehört nicht hinein"
  ],
  "rows": [
   {
    "text": "Die Konsequenzen der Entscheidung, auch die negativen.",
    "cat": 0
   },
   {
    "text": "Der Status, z. B. vorgeschlagen, akzeptiert oder abgelöst.",
    "cat": 0
   },
   {
    "text": "Eine laufend aktualisierte Gesamtbeschreibung der Architektur.",
    "cat": 1
   },
   {
    "text": "Eine Schritt-für-Schritt-Anleitung zur Implementierung.",
    "cat": 1
   },
   {
    "text": "Spätere Änderungen der Entscheidung, direkt in den ursprünglichen Text eingearbeitet.",
    "cat": 1
   },
   {
    "text": "Der Kontext, der die Entscheidung nötig gemacht hat.",
    "cat": 0
   }
  ],
  "explanation": "Nygard-ADRs enthalten Titel, Status, Kontext, Entscheidung und Konsequenzen. Die Falle: Eine geänderte Entscheidung bekommt ein neues ADR, das das alte ablöst – überschrieben wird nicht."
 },
 {
  "id": "k25",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Sie wollen Qualitäten eines Systems analysieren. Liefert die Methode vor allem Messwerte (quantitativ) oder Einschätzungen (qualitativ)?",
  "categories": [
   "Quantitative Methode",
   "Qualitative Methode"
  ],
  "rows": [
   {
    "text": "Nutzerumfrage mit einer Bewertungsskala von 1 bis 5 zur Bedienbarkeit.",
    "cat": 1
   },
   {
    "text": "Lines of Code und zyklomatische Komplexität ermitteln.",
    "cat": 0
   },
   {
    "text": "Antwortzeiten unter realistischer Last messen.",
    "cat": 0
   },
   {
    "text": "Expertengespräch zur Einschätzung technischer Risiken.",
    "cat": 1
   },
   {
    "text": "Zyklische Abhängigkeiten per Analysewerkzeug zählen.",
    "cat": 0
   }
  ],
  "explanation": "Laufzeitmessung und Code- bzw. Abhängigkeitsmetriken liefern Messwerte. Die Falle: Eine Umfrage bleibt qualitativ, auch wenn die Antworten als Zahlen auf einer Skala erfasst werden."
 },
 {
  "id": "k26",
  "chapter": 5,
  "lz": "LZ 05-03",
  "r": "R2",
  "type": "k",
  "points": 2,
  "q": "Es soll geprüft werden, ob die Implementierung noch zu den Architekturentscheidungen passt. Deckt der Ansatz Abweichungen auf?",
  "categories": [
   "Deckt Abweichung auf",
   "Dafür ungeeignet"
  ],
  "rows": [
   {
    "text": "Statische Analyse, die tatsächliche Abhängigkeiten gegen Schichtregeln prüft.",
    "cat": 0
   },
   {
    "text": "Lasttests gegen das Gesamtsystem fahren.",
    "cat": 1
   },
   {
    "text": "Die Unit-Test-Abdeckung auf über 80 % erhöhen.",
    "cat": 1
   },
   {
    "text": "Die Akzeptanztests der Fachabteilung erfolgreich abschließen.",
    "cat": 1
   },
   {
    "text": "Code-Review mit Blick auf die Einhaltung der in ADRs getroffenen Entscheidungen.",
    "cat": 0
   },
   {
    "text": "Ein Architekturtest im Build, der verbotene Paketzugriffe meldet.",
    "cat": 0
   }
  ],
  "explanation": "Konformität prüft man mit Reviews und toolgestützter Abhängigkeitsanalyse – auch gegen getroffene Entscheidungen, nicht nur gegen die Struktur. Last-, Unit- und Akzeptanztests können grün sein, obwohl verbotene Abhängigkeiten bestehen."
 },
 {
  "id": "k27",
  "chapter": 3,
  "lz": "LZ 03-07",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Sie entwerfen die Schnittstelle eines Zahlungsbausteins, den auch externe Partner nutzen. Ist die Eigenschaft wünschenswert?",
  "categories": [
   "Wünschenswert",
   "Nicht wünschenswert"
  ],
  "rows": [
   {
    "text": "Schwer falsch zu benutzen.",
    "cat": 0
   },
   {
    "text": "Bildet die interne Datenstruktur 1:1 ab, damit Nutzer flexibel zugreifen können.",
    "cat": 1
   },
   {
    "text": "Funktional vollständig aus Sicht der nutzenden Bausteine.",
    "cat": 0
   },
   {
    "text": "Stabiler, formeller und versionierter als eine rein interne Schnittstelle.",
    "cat": 0
   },
   {
    "text": "Wird ohne neue Version geändert, sobald die Implementierung es erfordert.",
    "cat": 1
   },
   {
    "text": "Leicht erweiterbar, ohne bestehende Nutzer anpassen zu müssen.",
    "cat": 0
   }
  ],
  "explanation": "Leicht erweiterbar, schwer missbrauchbar und funktional vollständig sind Zielmerkmale; externe Schnittstellen brauchen zusätzlich mehr Stabilität und Versionierung. Die Falle: 1:1 abgebildete Interna wirken flexibel, koppeln Nutzer aber an die Implementierung."
 },
 {
  "id": "c3q67",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R1",
  "type": "multi",
  "q": "Eine Analyse zeigt zwischen Rechnungs- und Kundenmodul sehr enge Kopplung. Welche Folgen sind typisch?",
  "options": [
   "Die Kohäsion beider Module steigt.",
   "Parallele Entwicklung durch zwei Teams wird leichter.",
   "Änderungen am einen Modul erzwingen Änderungen am anderen.",
   "Die Module lassen sich schlecht isoliert testen.",
   "Die Performance verschlechtert sich zwangsläufig."
  ],
  "correct": [
   2,
   3
  ],
  "optExpl": [
   "Falsch: Kohäsion betrifft den Zusammenhalt innerhalb eines Moduls; enge Kopplung zwischen Modulen deutet eher auf einen schlechten Schnitt.",
   "Falsch: Eng gekoppelte Module erfordern ständige Abstimmung; parallele Arbeit wird schwerer.",
   "Richtig: Jede Abhängigkeit ist ein Weg, über den sich Änderungen ausbreiten.",
   "Richtig: Viele Abhängigkeiten müssen für einen Test ersetzt oder mitgestartet werden.",
   "Falsch: Kopplung ist vor allem ein Wartbarkeitsthema; ein Performanceverlust folgt daraus nicht zwangsläufig."
  ],
  "explanation": "Enge Kopplung breitet Änderungen aus und erschwert isoliertes Testen und parallele Arbeit. Falle: Kopplung mit Kohäsion verwechseln oder pauschal Performancefolgen annehmen."
 },
 {
  "id": "c3q68",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R1",
  "type": "multi",
  "q": "Ein Baustein legt seine Implementierungsdetails offen (kein Information Hiding). Welche Folgen sind am ehesten zu erwarten?",
  "options": [
   "Die Kopplung sinkt, weil Nutzer weniger Umwege brauchen.",
   "Änderungen ziehen Anpassungen in mehr Bausteinen nach sich.",
   "Die Implementierung lässt sich schwerer austauschen.",
   "Gut dokumentierte Interna machen Änderungen folgenlos.",
   "Die Laufzeit-Performance sinkt durch die direkten Zugriffe.",
   "Nutzer binden sich an Details, die nie zugesichert wurden."
  ],
  "correct": [
   1,
   2,
   5
  ],
  "optExpl": [
   "Falsch: Direkter Zugriff auf Interna erhöht die Kopplung. Weniger Indirektion heißt hier mehr Abhängigkeit.",
   "Richtig: Weil viele Nutzer an Interna hängen, bleibt eine Änderung nicht mehr lokal.",
   "Richtig: Nutzer hängen von Details ab, die bei einem Austausch wegfallen würden.",
   "Falsch: Dokumentation verhindert nicht, dass Nutzer von den Interna abhängen. Ändern sie sich, sind die Nutzer trotzdem betroffen.",
   "Falsch: Wenn überhaupt, sind direkte Zugriffe eher schneller. Das Problem ist die Änderbarkeit, nicht die Performance.",
   "Richtig: Was offenliegt, wird genutzt – auch ohne Vertrag. Spätere Änderungen daran brechen diese Nutzer."
  ],
  "explanation": "Ohne Information Hiding steigt die Kopplung: Nutzer hängen an nicht zugesicherten Details, Änderungen bleiben nicht lokal, Implementierungen sind schwer austauschbar. Doku hilft dagegen nicht, und Performance ist nicht das Problem."
 },
 {
  "id": "c3q69",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R1",
  "type": "multi",
  "q": "Ein Baustein „Utils“ enthält Datumsformatierung, PDF-Export und Rabattlogik. Was folgt aus dieser geringen Kohäsion?",
  "options": [
   "Er ist besonders gut wiederverwendbar.",
   "Er ändert sich aus mehreren unabhängigen Gründen.",
   "Seine Kopplung zu anderen Bausteinen sinkt.",
   "Er hat eher weniger Abhängigkeiten.",
   "Er ist schwerer zu verstehen und zu testen."
  ],
  "correct": [
   1,
   4
  ],
  "optExpl": [
   "Falsch: Wer nur die Datumsformatierung braucht, holt PDF-Export und Rabattlogik mit ins Haus – Wiederverwendung wird schwerer.",
   "Richtig: Jeder Belang hat eigene Änderungsgründe; jede Änderung trifft den ganzen Baustein.",
   "Falsch: Da vieles an einer Stelle liegt, wirkt das lokal, doch die Zahl ein- und ausgehender Abhängigkeiten steigt.",
   "Falsch: Eher umgekehrt: Jeder Belang bringt eigene ausgehende Abhängigkeiten mit, etwa eine PDF-Bibliothek.",
   "Richtig: Ohne klaren Zweck muss man viele unzusammenhängende Teile durchdringen; Tests brauchen entsprechend viele Ausgangssituationen."
  ],
  "explanation": "Geringe Kohäsion: mehrere Änderungsgründe, schlechte Wiederverwendbarkeit, mehr statt weniger Abhängigkeiten. Falle: „viele Funktionen = gut wiederverwendbar“."
 },
 {
  "id": "c3q70",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R1",
  "type": "multi",
  "q": "In einem Altsystem stecken SQL-Abfragen direkt im UI-Code. Welche Folgen hat diese Missachtung der Trennung der Belange?",
  "options": [
   "Es verletzt vor allem das Liskov-Prinzip.",
   "Die Folgen bleiben auf den UI-Baustein beschränkt.",
   "Der Performancegewinn rechtfertigt das meist.",
   "Ein Datenbankwechsel betrifft auch die Oberfläche.",
   "Die Logik ist ohne UI kaum testbar."
  ],
  "correct": [
   3,
   4
  ],
  "optExpl": [
   "Falsch: LSP betrifft die Ersetzbarkeit von Subtypen; vermischte Belange verletzen Separation of Concerns.",
   "Falsch: Das Datenbankschema ist nun mit der UI gekoppelt; Schemaänderungen strahlen auf sie aus und umgekehrt.",
   "Falsch: Ein möglicher kleiner Gewinn wiegt die schlechtere Änderbarkeit und Testbarkeit selten auf.",
   "Richtig: Weil Persistenz und UI vermischt sind, zieht ein Technikwechsel Änderungen in der Oberfläche nach sich.",
   "Richtig: Fachliche und Persistenzlogik lassen sich nicht getrennt von der Oberfläche prüfen."
  ],
  "explanation": "Vermischte Belange koppeln Technik und Oberfläche und erschweren Tests und Technikwechsel. Falle: Die Folgen auf einen Baustein begrenzt sehen oder das falsche Prinzip benennen."
 },
 {
  "id": "c3q71",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R3",
  "type": "multi",
  "q": "Welche Aussagen zum DRY-Prinzip und zu seiner Verletzung (dieselbe Entscheidung/Logik ist mehrfach dupliziert) treffen zu?",
  "options": [
   "Die Bausteine mit den Kopien sind dadurch statisch stärker gekoppelt, was eine Abhängigkeitsanalyse zuverlässig anzeigt.",
   "Das Problem betrifft nur duplizierte Logik, nicht duplizierte Konstanten oder Konfigurationswerte.",
   "Es entsteht das Risiko, dass Kopien auseinanderlaufen (Inkonsistenz).",
   "Gleich aussehender Code darf dupliziert bleiben, wenn die Kopien fachlich verschiedenes Wissen darstellen und sich unabhängig ändern sollen.",
   "Es entsteht eine versteckte (logische) Kopplung: Die Kopien müssen gemeinsam geändert werden, obwohl kein Baustein vom anderen abhängt.",
   "Eine Änderung muss an mehreren Stellen konsistent nachgezogen werden."
  ],
  "correct": [
   2,
   3,
   4,
   5
  ],
  "optExpl": [
   "Falsch: Gerade nicht: Die Kopien hängen im Code nicht voneinander ab, deshalb sieht eine statische Abhängigkeitsanalyse nichts. Die Kopplung ist logisch und damit versteckt.",
   "Falsch: DRY bezieht sich auf jedes duplizierte Wissen. Auch doppelt gepflegte Konstanten oder Konfigurationswerte laufen auseinander, wenn nur eine Stelle angepasst wird.",
   "Richtig: Werden Kopien unabhängig geändert, verhalten sie sich irgendwann unterschiedlich – etwa wenn ein Rabatt an zwei Stellen verschieden berechnet wird.",
   "Richtig: DRY bezieht sich auf Wissen, nicht auf Textgleichheit. Zufällig gleicher Code, der fachlich Verschiedenes bedeutet, würde durch Zusammenlegen erst gekoppelt.",
   "Richtig: Die Kopien sind über das gemeinsame Wissen verbunden, auch wenn im Code keine Abhängigkeit zu sehen ist. Ändert sich die Regel, müssen alle mitgeändert werden.",
   "Richtig: Dieselbe Entscheidung steckt an mehreren Stellen, also muss jede Änderung überall nachgezogen werden. Wer eine Stelle übersieht, erzeugt widersprüchliches Verhalten."
  ],
  "explanation": "Verletztes DRY erzwingt mehrfache Änderungen, riskiert Inkonsistenz und erzeugt eine unsichtbare logische Kopplung – für Logik wie für Konstanten. DRY meint Wissen, nicht gleich aussehenden Code."
 },
 {
  "id": "c3q72",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "multi",
  "q": "In einer als strikt geplanten Schichtenarchitektur findet ein Review Schichtsprünge und Aufrufe nach oben. Was trifft zu?",
  "options": [
   "Vereinzelte Abweichungen sind grundsätzlich unkritisch.",
   "Nun liegt einfach eine gelockerte Schichtung vor.",
   "Die Implementierung weicht vom Entwurf ab (Erosion).",
   "Die Schichten sind schwerer austauschbar.",
   "Aufrufe nach oben sind über Callbacks immer verboten."
  ],
  "correct": [
   2,
   3
  ],
  "optExpl": [
   "Falsch: Auch einzelne Ausnahmen erzeugen Abhängigkeiten und sollten bewusst entschieden und dokumentiert werden.",
   "Falsch: Gelockert erlaubt nur Sprünge nach unten; Aufrufe nach oben verletzen auch die gelockerte Variante.",
   "Richtig: Unbeabsichtigte Abweichungen vom geplanten Entwurf sind ein typisches Zeichen schleichender Architekturerosion.",
   "Richtig: Durch zusätzliche Abhängigkeiten hängen mehr Schichten voneinander ab; Austausch und isolierte Tests leiden.",
   "Falsch: Ein Callback über eine von der unteren Schicht definierte Schnittstelle kehrt die Abhängigkeit um und ist zulässig."
  ],
  "explanation": "Ungeplante Sprünge und Aufwärtsaufrufe sind Erosion und verschlechtern Austauschbarkeit. Falle: Das als „gelockerte Schichtung“ umdeuten – Aufrufe nach oben sind auch dort nicht erlaubt."
 },
 {
  "id": "c1q30",
  "chapter": 1,
  "lz": "LZ 01-04",
  "r": "R1",
  "type": "multi",
  "q": "Sie sind Softwarearchitekt:in für ein Kernbankensystem. Worauf müssen Sie in dieser Rolle besonders achten?",
  "options": [
   "Regulatorische Vorgaben verbindlich juristisch auslegen.",
   "Sicherheit, Nachvollziehbarkeit und Verfügbarkeit mit Stakeholdern schärfen.",
   "Risiken für die Erreichung der Anforderungen bewerten.",
   "Bei Zielkonflikten die Sicherheit grundsätzlich vorrangig festlegen.",
   "Regulatorische Randbedingungen von Beginn an einbeziehen."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Falsch: Die rechtliche Auslegung liegt bei Recht/Compliance; Architekt:innen setzen die Vorgaben technisch um.",
   "Richtig: Qualitätsanforderungen klären und mit den Stakeholdern präzisieren ist Kernaufgabe – hier besonders kritisch.",
   "Richtig: Analysieren und Bewerten hinsichtlich Risiken ist eine im Curriculum genannte Aufgabe.",
   "Falsch: Zielkonflikte wägt man mit den Stakeholdern ab; auch im Bankumfeld gibt es keinen pauschalen Vorrang.",
   "Richtig: Regulatorik schränkt den Lösungsraum ein und muss deshalb früh berücksichtigt werden."
  ],
  "explanation": "Qualitätsanforderungen schärfen, Regulatorik früh einbeziehen, Risiken bewerten. Falle: keine juristische Auslegung und kein Alleinentscheid über Zielkonflikte."
 },
 {
  "id": "c1q33",
  "chapter": 1,
  "lz": "LZ 01-06",
  "r": "R1",
  "type": "multi",
  "q": "Wie arbeiten Softwarearchitekt:innen am ehesten mit anderen Stakeholdern zusammen?",
  "options": [
   "Dem Management die Architektur über detaillierte UML-Diagramme erläutern.",
   "Mit dem IT-Betrieb Deployment und Betreibbarkeit abstimmen.",
   "Mit QS und Test die Prüfbarkeit der Qualitätsziele abstimmen.",
   "Die Abstimmung mit den Fachbereichen anstelle des PO übernehmen.",
   "Mit PO und Anforderungsanalyse die fachlichen Ziele klären."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Falsch: Nicht zielgruppengerecht: Das Management braucht eher Überblick, Risiken und Konsequenzen.",
   "Richtig: Der Betrieb ist ausdrücklich Partner, vor allem bei Informationssystemen.",
   "Richtig: Qualitätssicherung und Test nennt das Curriculum als Stakeholder; Qualitätsziele müssen überprüfbar sein.",
   "Falsch: Architekt:innen ergänzen andere Rollen, ersetzen sie aber nicht; Fachkommunikation bleibt beim PO.",
   "Richtig: Produktmanagement und Anforderungsanalyse liefern das „Was“; Architekt:innen klären Ziele und Qualitätsanforderungen mit ihnen."
  ],
  "explanation": "Zusammenarbeit mit PO/Anforderungsanalyse, Betrieb und QS – zielgruppengerecht. Falle: Architekt:innen ersetzen keine Rolle und überfordern das Management nicht mit Details."
 },
 {
  "id": "c1q34",
  "chapter": 1,
  "lz": "LZ 01-02",
  "r": "R1",
  "type": "multi",
  "q": "Welche Eigenschaften eines Systems werden maßgeblich durch die Softwarearchitektur beeinflusst?",
  "options": [
   "Testbarkeit einzelner Bausteine.",
   "Betriebs- und Infrastrukturkosten.",
   "Qualifikation des Entwicklungsteams.",
   "Wie schnell sich neue Features ausliefern lassen.",
   "Der fachliche Funktionsumfang.",
   "Energieeffizienz."
  ],
  "correct": [
   0,
   1,
   3,
   5
  ],
  "optExpl": [
   "Richtig: Ob sich Bausteine isoliert testen lassen, hängt direkt von Kopplung und Schnittstellen ab – also von der Architektur.",
   "Richtig: Verteilung, Skalierungskonzept und Technologiewahl legen fest, welche Infrastruktur nötig ist und was der Betrieb kostet.",
   "Falsch: Die Qualifikation ist eine Randbedingung, die auf die Architektur wirkt – nicht umgekehrt. Die Architektur muss zum Team passen.",
   "Richtig: Eine Struktur, in der Änderungen lokal bleiben, verkürzt die Zeit bis zur Auslieferung. Starke Kopplung bremst dagegen jede Erweiterung.",
   "Falsch: Welche Funktionen das System bieten soll, legen die Stakeholder fest. Die Architektur muss sie erfüllbar machen, bestimmt sie aber nicht.",
   "Richtig: Das Curriculum nennt Energieeffizienz ausdrücklich: Verteilung, Kommunikationsart und Ressourcennutzung bestimmen den Verbrauch mit."
  ],
  "explanation": "Architektur prägt Qualitäten wie Testbarkeit und Energieeffizienz, die Betriebskosten und wie schnell Änderungen ausgeliefert werden können. Funktionsumfang und Teamqualifikation sind Eingangsgrößen, keine Ergebnisse der Architektur."
 },
 {
  "id": "c2q28",
  "chapter": 2,
  "lz": "LZ 02-02",
  "r": "R1",
  "type": "multi",
  "q": "Welche der folgenden Punkte sind Einflussfaktoren bzw. Randbedingungen, die auf die Architektur wirken?",
  "options": [
   "Rechtliche Vorgaben wie Datenschutz oder Aufbewahrungspflichten.",
   "Verfügbarkeit, Qualifikation und Engagement der Mitarbeitenden.",
   "Architekturentscheidungen früherer Releases desselben Systems – allerdings nur, wenn sie dokumentiert sind.",
   "Die Gliederung der Architekturdokumentation nach arc42, da sie festlegt, welche Strukturen entworfen werden.",
   "Vorgegebene Referenzarchitekturen, Bibliotheken oder Frameworks.",
   "Partnerschaften und Kooperationen des Unternehmens."
  ],
  "correct": [
   0,
   1,
   4,
   5
  ],
  "optExpl": [
   "Richtig: Regulatorische Randbedingungen schränken die Lösung ein, etwa beim Speicherort von Daten oder bei Lösch- und Protokollierungspflichten.",
   "Richtig: Das Curriculum nennt das ausdrücklich als organisatorische Randbedingung (R1). Eine Architektur, die das Team nicht beherrscht, ist kaum umsetzbar.",
   "Falsch: Bestehende Strukturen wirken auf neue Entscheidungen, egal ob sie dokumentiert sind oder nicht. Gerade undokumentierte Entscheidungen sind ein Risiko, verschwinden aber nicht als Einflussfaktor.",
   "Falsch: arc42 ist eine Vorlage für die Dokumentation, kein Einflussfaktor auf den Entwurf. Welche Strukturen nötig sind, folgt aus Anforderungen und Randbedingungen – nicht aus den Kapiteln eines Templates.",
   "Richtig: Technische Vorgaben wie Referenzarchitekturen oder Frameworks begrenzen den Lösungsraum (R1). Die Architektur muss sich in diesen Rahmen einfügen.",
   "Richtig: Auch das gehört laut Curriculum zu den organisatorischen Einflussfaktoren (R2): Vereinbarungen mit Partnern können etwa Schnittstellen, Produkte oder Datenformate vorgeben."
  ],
  "explanation": "Einflussfaktoren sind u. a. organisatorisch (Personal, Budget, Partnerschaften, Conway), technisch (Infrastruktur, Referenzarchitekturen, Frameworks) und regulatorisch. Ein Doku-Template ist kein Einflussfaktor, und bestehende Entscheidungen wirken auch undokumentiert."
 },
 {
  "id": "c3q73",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R2",
  "type": "multi",
  "q": "Welche der folgenden sind Architekturmuster bzw. Entwurfsansätze?",
  "options": [
   "Ports and Adapters (Hexagonal).",
   "Domain-Driven Design (DDD).",
   "arc42 – ein Architekturstil, der die Bausteine eines Systems in zwölf Bereiche gliedert.",
   "C4 – ein Architekturmuster mit den vier Schichten Context, Container, Component und Code.",
   "Microservices.",
   "Pipes und Filter."
  ],
  "correct": [
   0,
   1,
   4,
   5
  ],
  "optExpl": [
   "Richtig: Ein verbreitetes Architekturmuster: Die Fachlogik steht im Zentrum, Technik wie UI oder Datenbank wird über austauschbare Adapter an Ports angebunden.",
   "Richtig: DDD ist ein Entwurfsansatz, der die Fachdomäne ins Zentrum stellt. Mit Bounded Contexts liefert er Kriterien für fachliche Schnitte.",
   "Falsch: arc42 ist eine Vorlage für die Architekturdokumentation mit zwölf Abschnitten. Sie gliedert die Doku, nicht das System – über die Struktur der Bausteine sagt sie nichts.",
   "Falsch: C4 ist ein Modell für Architekturdiagramme mit vier Zoomstufen, kein Strukturmuster. Context, Container, Component und Code sind Detailstufen der Darstellung, keine Schichten des Systems.",
   "Richtig: Microservices sind ein R1-Architekturmuster: kleine, unabhängig deploybare Dienste, die je einen fachlichen Bereich verantworten.",
   "Richtig: Pipes und Filter ist ein R1-Architekturmuster: Verarbeitungsschritte (Filter) werden über Datenströme (Pipes) verkettet."
  ],
  "explanation": "Pipes und Filter, Microservices, Ports and Adapters sowie DDD sind Architekturmuster bzw. Entwurfsansätze. C4 (Diagramm-Modell) und arc42 (Doku-Vorlage) sind Hilfsmittel der Dokumentation – trotz „vier Ebenen“ bzw. „zwölf Bereichen“ keine Strukturmuster."
 },
 {
  "id": "c3q74",
  "chapter": 3,
  "lz": "LZ 03-03",
  "r": "R1",
  "type": "multi",
  "q": "Welche der folgenden Ansätze zur Architekturentwicklung nennt das CPSA-F-Curriculum?",
  "options": [
   "Code first: Struktur ausschließlich aus dem Quellcode ableiten.",
   "Domain-Driven Design.",
   "Sichtenbasierte Architekturentwicklung.",
   "Top-down-Entwurf.",
   "Bottom-up-Entwurf.",
   "Technologiegetriebener Entwurf (Framework zuerst)."
  ],
  "correct": [
   1,
   2,
   3,
   4
  ],
  "optExpl": [
   "Falsch: Klingt nach Bottom-up, ist es aber nicht: Bottom-up setzt vorhandene Bausteine bewusst zu Strukturen zusammen, statt die Architektur nur nachträglich aus Code abzulesen.",
   "Richtig: DDD ist im Curriculum als (R3-)Ansatz genannt: Die Struktur folgt der Fachdomäne.",
   "Richtig: Ein R1-Vorgehen: Die Architektur wird über Kontext-, Baustein-, Laufzeit- und Verteilungssicht erarbeitet.",
   "Richtig: Vom Groben ins Feine – ein R1-Vorgehen laut Curriculum.",
   "Richtig: Aus vorhandenen Details oder Komponenten größere Strukturen bilden – ebenfalls R1.",
   "Falsch: Kommt in der Praxis vor, ist aber kein Entwurfsansatz des Curriculums: Die Technologie soll den Anforderungen folgen, nicht die Struktur vorgeben."
  ],
  "explanation": "Das Curriculum nennt Top-down, Bottom-up und sichtenbasiertes Vorgehen (R1) sowie u. a. DDD, evolutionäre Architektur und globale Analyse (R3). „Framework zuerst“ und „Code first“ sind keine Entwurfsansätze."
 },
 {
  "id": "c3q75",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "multi",
  "q": "Für eine Verwaltungsanwendung wird eine Schichtenarchitektur vorgeschlagen. Welche Vorteile lassen sich damit am ehesten begründen?",
  "options": [
   "Schichten skalieren unabhängig voneinander.",
   "Trennung der Belange über die Schichten.",
   "Fachliche Änderungen bleiben in einer Schicht.",
   "Wenig Latenz durch kurze Aufrufwege.",
   "Einzelne Schichten sind austauschbar."
  ],
  "correct": [
   1,
   4
  ],
  "optExpl": [
   "Falsch: Unabhängige Skalierung ist ein Merkmal von Microservices; Schichten sind logische, keine Betriebseinheiten.",
   "Richtig: Oberfläche, Fachlogik und Datenzugriff liegen in getrennten Schichten – ein Kernvorteil des Musters.",
   "Falsch: Gerade nicht: Ein neues Fachfeld zieht sich oft durch UI, Logik und Persistenz.",
   "Falsch: Das Durchreichen durch Schichten kostet eher Latenz; das ist ein Nachteil des Musters.",
   "Richtig: Solange die Schnittstelle gleich bleibt, kann z. B. die Datenzugriffsschicht ersetzt werden."
  ],
  "explanation": "Schichten bringen Trennung der Belange und Austauschbarkeit. Falle: Vorteile anderer Muster (unabhängige Skalierung) oder lokale fachliche Änderungen unterstellen."
 },
 {
  "id": "c3q76",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "multi",
  "q": "Ein Team erwägt, die strikte Schichtung seines Systems beizubehalten. Welche Nachteile oder Grenzen sollte es kennen?",
  "options": [
   "Ein neues Fachattribut betrifft oft alle Schichten.",
   "Schichten können nicht ausgetauscht werden.",
   "Jede Schicht muss als eigenes Deployment laufen.",
   "Zwischenschichten reichen Aufrufe oft nur weiter.",
   "Sie lässt sich nicht mit Microservices kombinieren."
  ],
  "correct": [
   0,
   3
  ],
  "optExpl": [
   "Richtig: Fachliche Änderungen verlaufen quer zu den technischen Schichten und ziehen sich durch UI, Logik und Persistenz.",
   "Falsch: Austauschbarkeit ist gerade ein Vorteil der Schichtung, solange die Schnittstellen stabil bleiben.",
   "Falsch: Schichten sind logisch; ob sie gemeinsam oder getrennt deployt werden, ist eine Verteilungsentscheidung.",
   "Richtig: Ohne eigene Logik entsteht gleichförmiger Weiterreich-Code, der Latenz und Pflegeaufwand kostet.",
   "Falsch: Ein Microservice kann intern geschichtet sein; Muster lassen sich kombinieren."
  ],
  "explanation": "Strikte Schichtung: Fachänderungen laufen durch mehrere Schichten, Durchreichen erzeugt Boilerplate. Falle: Austauschbarkeit oder Kombinierbarkeit als Nachteil sehen."
 },
 {
  "id": "c4q38",
  "chapter": 4,
  "lz": "LZ 04-02",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zum Beschreiben und Kommunizieren von Softwarearchitektur treffen laut Curriculum zu?",
  "options": [
   "Mündliche und schriftliche Kommunikation ausbalancieren.",
   "Für das Management genügt gekürzte Entwicklerdoku.",
   "Schriftliche Doku ersetzt mündliche Abstimmung weitgehend.",
   "Management und Entwicklung brauchen andere Inhalte.",
   "Beiträge verschiedener Autoren harmonisieren.",
   "Templates erleichtern das Wiederfinden von Inhalten."
  ],
  "correct": [
   0,
   3,
   4,
   5
  ],
  "optExpl": [
   "Richtig: Z. B. Walkthroughs auf Basis der Doku und Meeting-Ergebnisse zurück in die Doku führen.",
   "Falsch: Kürzen ändert nicht den Inhalt – das Management braucht andere Informationen, nicht weniger derselben.",
   "Falsch: Beides ergänzt sich; schriftliche Dokumentation macht Gespräche nicht überflüssig.",
   "Richtig: Das Management braucht z. B. Überblick, Risiken und Kosten, die Entwicklung Bausteine und Schnittstellen.",
   "Richtig: Das Curriculum nennt ausdrücklich, Beiträge unterschiedlicher Autorengruppen stilistisch und inhaltlich zu konsolidieren.",
   "Richtig: Eine einheitliche Struktur hilft beim Suchen und wirkt zugleich als Vollständigkeits-Checkliste."
  ],
  "explanation": "Zielgruppen brauchen unterschiedliche Inhalte; Templates helfen, Kommunikationsformen werden ausbalanciert und Autorenbeiträge harmonisiert. Falle: gekürzte Entwicklerdoku fürs Management."
 },
 {
  "id": "k29",
  "chapter": 1,
  "lz": "LZ 01-04",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Aussagen zu Aufgaben und Verantwortung von Softwarearchitekt:innen – richtig oder falsch?",
  "categories": [
   "Richtig",
   "Falsch"
  ],
  "rows": [
   {
    "text": "Sie verantworten Budget, Termine und Personal des Projekts.",
    "cat": 1
   },
   {
    "text": "Sie zeigen Konsequenzen ihrer Entscheidungen gegenüber Stakeholdern auf.",
    "cat": 0
   },
   {
    "text": "Sie prüfen, ob Quellcode und Architektur konsistent sind.",
    "cat": 0
   },
   {
    "text": "Sie priorisieren das fachliche Backlog.",
    "cat": 1
   },
   {
    "text": "Sie erkennen selbstständig, wann eine weitere Iteration nötig ist.",
    "cat": 0
   },
   {
    "text": "Bei Zielkonflikten legen sie den Vorrang eines Qualitätsziels allein fest.",
    "cat": 1
   }
  ],
  "explanation": "Architekt:innen begleiten die Umsetzung, steuern Iterationen und argumentieren Konsequenzen. Die Falle: Budget und Termine liegen bei der Projektleitung, das Backlog beim Product Owner, und Zielkonflikte löst man mit den Stakeholdern."
 },
 {
  "id": "k30",
  "chapter": 4,
  "lz": "LZ 04-01",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Aussagen zu Qualitätskriterien technischer Dokumentation – richtig oder falsch?",
  "categories": [
   "Richtig",
   "Falsch"
  ],
  "rows": [
   {
    "text": "Effizienz betrifft auch den Aufwand für Erstellung und Pflege der Doku.",
    "cat": 0
   },
   {
    "text": "Ob die Doku verständlich ist, kann letztlich nur ihre Zielgruppe beurteilen.",
    "cat": 0
   },
   {
    "text": "Je ausführlicher die Doku, desto besser erfüllt sie das Kriterium Korrektheit.",
    "cat": 1
   },
   {
    "text": "Wartbarkeit der Doku bedeutet, dass sie möglichst selten geändert werden muss.",
    "cat": 1
   },
   {
    "text": "Form, Inhalt und Detailgrad richten sich nach der Zielgruppe.",
    "cat": 0
   },
   {
    "text": "Ein Review-Gremium stellt die Verständlichkeit für alle Zielgruppen verbindlich fest.",
    "cat": 1
   }
  ],
  "explanation": "Verständlichkeit beurteilt die Zielgruppe, Effizienz schließt den Pflegeaufwand ein. Die Falle: Korrektheit heißt Übereinstimmung mit dem System, nicht Umfang, und Wartbarkeit heißt, die Doku mit dem System aktuell halten zu können."
 },
 {
  "id": "k31",
  "chapter": 5,
  "lz": "LZ 05-01",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Aussagen zu den Gründen für eine Architekturanalyse – richtig oder falsch?",
  "categories": [
   "Richtig",
   "Falsch"
  ],
  "rows": [
   {
    "text": "Ohne vollständig dokumentierte Architektur ist keine Analyse möglich.",
    "cat": 1
   },
   {
    "text": "Sie kann erheben, ob die Implementierung zu den Architekturentscheidungen passt.",
    "cat": 0
   },
   {
    "text": "Maßstab sind die priorisierten Qualitätsziele bzw. Anforderungen.",
    "cat": 0
   },
   {
    "text": "Sinnvoll ist sie erst, wenn eine lauffähige Implementierung vorliegt.",
    "cat": 1
   },
   {
    "text": "Eine Analyse ist vor, während und nach der Implementierung sinnvoll.",
    "cat": 0
   },
   {
    "text": "Sie prüft, ob architekturrelevante Anliegen der Stakeholder berücksichtigt sind.",
    "cat": 0
   }
  ],
  "explanation": "Analyse dient Risikovorsorge, Anforderungs- und Konformitätsprüfung sowie der Prüfung von Stakeholder-Anliegen – in allen Phasen. Die Falle: Sie braucht weder lauffähigen Code noch eine vollständige Dokumentation."
 },
 {
  "id": "k32",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Aussagen zu Entwurfsprinzipien der Modularisierung – richtig oder falsch?",
  "categories": [
   "Richtig",
   "Falsch"
  ],
  "rows": [
   {
    "text": "Lose Kopplung heißt: so wenige Abhängigkeiten wie möglich, so viele wie nötig.",
    "cat": 0
   },
   {
    "text": "Information Hiding verbirgt Entscheidungen, die sich wahrscheinlich ändern.",
    "cat": 0
   },
   {
    "text": "Hohe Kohäsion bedeutet, dass Bausteine untereinander viele Abhängigkeiten haben.",
    "cat": 1
   },
   {
    "text": "Entwurfsprinzipien wendet man unabhängig von den konkreten Anforderungen an.",
    "cat": 1
   },
   {
    "text": "Kapselung ist ein Mittel, um Information Hiding umzusetzen.",
    "cat": 0
   },
   {
    "text": "Information Hiding und Kapselung sind zwei Namen für dasselbe Prinzip.",
    "cat": 1
   }
  ],
  "explanation": "Kapselung ist das Mittel, Information Hiding das Ziel – die Gleichsetzung ist die Falle. Kohäsion beschreibt den Zusammenhalt innerhalb eines Bausteins, und Prinzipien wendet man abhängig von den Anforderungen bewusst an."
 },
 {
  "id": "k33",
  "chapter": 2,
  "lz": "LZ 02-04",
  "r": "R2",
  "type": "k",
  "points": 2,
  "q": "Aussagen zum Formulieren von Qualitätsanforderungen – richtig oder falsch?",
  "categories": [
   "Richtig",
   "Falsch"
  ],
  "rows": [
   {
    "text": "Qualitätsszenarien dienen auch als Input für Architekturbewertungen.",
    "cat": 0
   },
   {
    "text": "Eine Qualitätsanforderung sollte festlegen, wie ihre Erfüllung geprüft wird.",
    "cat": 0
   },
   {
    "text": "Ein Qualitätsszenario nennt die Taktik, mit der die Qualität erreicht wird.",
    "cat": 1
   },
   {
    "text": "Für vage Ziele wie Benutzerfreundlichkeit lassen sich keine messbaren Szenarien bilden.",
    "cat": 1
   },
   {
    "text": "Eine zum Ziel erhobene Metrik kann dadurch ihre Aussagekraft verlieren.",
    "cat": 0
   },
   {
    "text": "„95 % der Suchen in unter 1 s“ ist bereits ein vollständiges Szenario.",
    "cat": 1
   }
  ],
  "explanation": "Qualitätsanforderungen sollen ihre Prüfmethode mitliefern; Szenarien beschreiben das WAS mit Kontext, Stimulus, Reaktion und Messung. Die Falle: Ein Antwortmaß allein ist kein Szenario, und auch Benutzerfreundlichkeit lässt sich messbar formulieren."
 },
 {
  "id": "c1q35",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R1",
  "type": "single",
  "q": "Ein Nutzer der Komponente „Zahlungsabwicklung“ fragt: „Welche Dienste bietet sie an?“ Wodurch wird diese Frage beantwortet?",
  "options": [
   "Whitebox-Sicht: enthaltene Unterbausteine und ihr Zusammenspiel.",
   "Blackbox-Sicht: angebotene Schnittstellen samt Zusicherungen.",
   "Kontextsicht: Schnittstellen der Komponente zu ihren Nachbarn.",
   "Laufzeitsicht: Nutzung der Komponente in konkreten Szenarien."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Die Whitebox zeigt das Innere; sie braucht, wer den Baustein ändert, nicht wer ihn nutzt.",
   "Richtig: Die Blackbox beschreibt, was der Baustein nach außen bietet, ohne die Realisierung offenzulegen.",
   "Falsch: Die Kontextsicht zeigt das Gesamtsystem mit seinen externen Nachbarn, nicht einzelne interne Komponenten.",
   "Falsch: Szenarien zeigen, wie Dienste in Abläufen genutzt werden, nicht welche angeboten werden."
  ],
  "explanation": "Angebotene Dienste beschreibt die Blackbox. Falle: Die Kontextsicht betrifft das Gesamtsystem, die Laufzeitsicht die Nutzung in Abläufen."
 },
 {
  "id": "c1q36",
  "chapter": 1,
  "lz": "LZ 01-02",
  "r": "R2",
  "type": "multi",
  "q": "Die Anforderungen stehen zu Projektbeginn noch nicht vollständig fest. Was ist beim Architekturentwurf am ehesten sinnvoll?",
  "options": [
   "Tragende Entscheidungen zurückstellen, bis die Anforderungen vollständig sind.",
   "Schwer umkehrbare Entscheidungen so spät wie verantwortbar treffen.",
   "Erweiterungspunkte vorsorglich überall vorsehen.",
   "Annahmen explizit festhalten und später überprüfen.",
   "Die riskantesten Annahmen früh mit Prototypen prüfen.",
   "Iterativ vorgehen und die Architektur mit dem Wissen weiterentwickeln."
  ],
  "correct": [
   1,
   3,
   4,
   5
  ],
  "optExpl": [
   "Falsch: Vollständige Anforderungen gibt es selten. „So spät wie verantwortbar“ heißt nicht „erst wenn alles feststeht“ – sonst wächst die Struktur ungesteuert.",
   "Richtig: Last responsible moment: Dann ist mehr Wissen vorhanden, ohne dass das Warten selbst schon schadet.",
   "Falsch: Flexibilität auf Vorrat erzeugt Komplexität für Anforderungen, die vielleicht nie kommen (YAGNI).",
   "Richtig: Fehlt Wissen, muss man annehmen. Festgehaltene Annahmen lassen sich gezielt prüfen und betroffene Entscheidungen rechtzeitig anpassen.",
   "Richtig: Prototypen liefern früh Rückmeldung genau dort, wo eine falsche Annahme am teuersten wäre.",
   "Richtig: Bei unsicheren Anforderungen wächst die Architektur mit dem Wissen und wird in jeder Iteration überprüft."
  ],
  "explanation": "Bei unvollständigen Anforderungen: iterativ arbeiten, Annahmen festhalten, riskante Annahmen früh prüfen, schwer umkehrbare Entscheidungen bis zum last responsible moment aufschieben. Fallen: alles vorsorglich flexibel machen – oder auf vollständige Anforderungen warten."
 },
 {
  "id": "c2q29",
  "chapter": 2,
  "lz": "LZ 02-02",
  "r": "R2",
  "type": "single",
  "q": "Eine Organisation schneidet ihre Teams gezielt so zu, dass die gewünschte Zielarchitektur entsteht. Welche Aussage trifft am ehesten zu?",
  "options": [
   "Bewusste Architekturarbeit wird dadurch weitgehend entbehrlich.",
   "Das wirkt nur auf neue Systeme, nicht auf bestehende.",
   "Ein passender Team-Zuschnitt kann den gewünschten Systemschnitt begünstigen.",
   "Für fachlich geschnittene Services schneidet man Teams nach Schichten."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Der Team-Zuschnitt begünstigt nur einen Schnitt. Schnittstellen, Querschnittsthemen und Qualitäten müssen weiterhin entworfen werden.",
   "Falsch: Auch bestehende Systeme werden von den Teams weiterentwickelt, die sie pflegen – ihre Struktur passt sich mit der Zeit an.",
   "Richtig: Weil Systemstrukturen Kommunikationsstrukturen folgen, lässt sich Conways Gesetz bewusst nutzen – das erfordert eine echte Änderung der Organisation.",
   "Falsch: Schichtteams (UI, Logik, Datenbank) begünstigen laut Conway Schichtgrenzen im System, nicht fachliche Schnitte."
  ],
  "explanation": "Wer Teams passend zur Zielarchitektur schneidet, nutzt Conways Gesetz gezielt – mit echter Organisationsänderung. Falle: Das ersetzt keine Architekturarbeit, und Schichtteams erzeugen Schichtgrenzen."
 },
 {
  "id": "c2q30",
  "chapter": 2,
  "lz": "LZ 02-03",
  "r": "R2",
  "type": "multi",
  "q": "Für ein Kundenportal ist hohe Benutzbarkeit ein Top-Qualitätsziel. Welche Aussagen zur Absicherung dieses Ziels treffen zu?",
  "options": [
   "Die Abnahme durch den Auftraggeber genügt als Nachweis.",
   "Bedienabläufe früh mit Prototypen erproben.",
   "Das Ziel kann Architekturentscheidungen prägen, z. B. zu Antwortzeiten.",
   "Ein einheitliches Design-System stellt die Benutzbarkeit sicher.",
   "Usability-Tests mit repräsentativen Nutzern durchführen.",
   "Benutzbarkeit lässt sich spät unabhängig von der Architektur optimieren."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Falsch: Der Auftraggeber ist meist nicht der typische Nutzer. Seine Abnahme ersetzt keine Prüfung mit echten Nutzergruppen.",
   "Richtig: Prototypen machen Schwächen sichtbar, bevor teure Strukturentscheidungen feststehen.",
   "Richtig: Benutzbarkeit hängt auch an Antwortzeiten, Fehlerbehandlung oder Offline-Fähigkeit – also an der Architektur.",
   "Falsch: Ein Design-System sorgt für Konsistenz, ist aber eine Lösungsvorgabe – ob Nutzer ihre Aufgaben erledigen, beweist es nicht.",
   "Richtig: Ob ein System benutzbar ist, zeigt sich bei denen, die es tatsächlich bedienen sollen.",
   "Falsch: Oberflächendetails ja, aber träge Antworten oder fehlende Fehlertoleranz lassen sich nicht spät wegpolieren."
  ],
  "explanation": "Benutzbarkeit sichert man mit echten Nutzern und frühen Prototypen ab; sie hängt auch an der Architektur. Falle: Abnahme durch den Auftraggeber oder ein Design-System sind kein Nachweis."
 },
 {
  "id": "c3q77",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R2",
  "type": "multi",
  "q": "Ein Baustein ruft das API eines externen Kartendienstes an vielen Stellen direkt auf. Welche Folgen sind typisch?",
  "options": [
   "Die afferente Kopplung des Bausteins steigt.",
   "Ausfälle des Dienstes wirken direkt zurück.",
   "API-Änderungen des Anbieters erzwingen eigene Änderungen.",
   "Ein SLA des Anbieters macht die Einbindung unkritisch.",
   "Die Kopplung besteht nur zur Laufzeit.",
   "Ein Anbieterwechsel wird aufwendig."
  ],
  "correct": [
   1,
   2,
   5
  ],
  "optExpl": [
   "Falsch: Die Abhängigkeit geht vom Baustein zum Dienst – sie ist ausgehend (efferent), nicht eingehend.",
   "Richtig: Ohne Abfederung (Timeout, Fallback) schlägt ein Ausfall des Fremddienstes auf die eigene Funktion durch.",
   "Richtig: Der Baustein hängt an einem extern kontrollierten Element; Änderungen dort wirken auf den eigenen Code zurück.",
   "Falsch: Ein SLA deckt höchstens Verfügbarkeit ab, nicht API-Änderungen, Versionswechsel oder Abkündigungen.",
   "Falsch: Auch zur Entwicklungszeit hängt der Code an Datentypen und Aufrufkonventionen des Anbieters.",
   "Richtig: Ist das fremde API im Code verstreut, muss jede Aufrufstelle angepasst werden."
  ],
  "explanation": "Direkt und verstreut eingebundene Fremddienste koppeln das System an ein volatiles, fremdkontrolliertes Element. Falle: SLA als Lösung ansehen oder afferent/efferent vertauschen."
 },
 {
  "id": "c3q78",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R2",
  "type": "single",
  "q": "Die Entwicklung will Microservices, der Betrieb einen Monolithen. Wie geht man mit dem Zielkonflikt am ehesten um?",
  "options": [
   "Mit Microservices starten, später ggf. zusammenführen.",
   "Der Entwicklung folgen, da sie das System baut.",
   "Dem Betrieb folgen, da er die meisten Kosten trägt.",
   "Qualitätsziele explizit machen, danach entscheiden."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Verteilte Services wieder zusammenzuführen ist meist aufwendiger, als einen modularen Monolithen später aufzuteilen.",
   "Falsch: Die Perspektive einer Gruppe entscheidet nicht; maßgeblich sind die Anforderungen aller Stakeholder.",
   "Falsch: Kostenanteile sind ein Argument, ersetzen aber nicht die Abwägung aller Qualitätsziele.",
   "Richtig: Der Konflikt wird über Anforderungen und Trade-offs gelöst; ein modularer Monolith kann ein tragfähiger Kompromiss sein."
  ],
  "explanation": "Stakeholder-Konflikte löst man über explizite Qualitätsziele und Trade-offs, nicht über Gruppenzugehörigkeit. Falle: ein plausibles Einzelargument (Kosten, Know-how) als Entscheidung ausgeben."
 },
 {
  "id": "c4q39",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R2",
  "type": "multi",
  "q": "Sie beschreiben die Whitebox des Bausteins „Zahlungsabwicklung“, der auch Fremdbausteine nutzt. Welche Angaben gehören typischerweise hinein?",
  "options": [
   "Die enthaltenen Bausteine und ihre Beziehungen.",
   "Die juristischen Verträge der Lieferanten der Fremdbausteine.",
   "Die Zuordnung der inneren Bausteine zu Servern.",
   "Das Zusammenspiel der inneren Bausteine, soweit nötig.",
   "Eine Begründung für die gewählte Zerlegung."
  ],
  "correct": [
   0,
   3,
   4
  ],
  "optExpl": [
   "Richtig: Das ist der Kern jeder Whitebox: der innere Aufbau des Bausteins.",
   "Falsch: Klingt nach „Innenleben“, ist aber Sache von Einkauf und Recht; die Whitebox beschreibt den technischen Aufbau.",
   "Falsch: Welche Teile wo laufen, gehört in die Verteilungssicht, nicht in die Whitebox.",
   "Richtig: Ein knapper Überblick über das Zusammenwirken hilft, den inneren Aufbau zu verstehen.",
   "Richtig: Die Whitebox erklärt auch, warum der Baustein so zerlegt wurde – das macht den Entwurf nachvollziehbar."
  ],
  "explanation": "Die Whitebox zeigt den Innenaufbau: enthaltene Bausteine, ihr Zusammenspiel und die Begründung der Zerlegung. Fallen: Lieferantenverträge (juristisch, nicht Architektur) und Serverzuordnung (Verteilungssicht)."
 },
 {
  "id": "c5q28",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R2",
  "type": "multi",
  "q": "Ein Stakeholder meldet: „Das System ist zu langsam.“ Welche Schritte sind für eine methodisch fundierte Untersuchung sinnvoll?",
  "options": [
   "Auf Entwicklerrechnern messen, um Störeinflüsse zu meiden.",
   "Antwortzeiten unter realistischer Last messen.",
   "Laufzeit-Logs und -Metriken aus dem Betrieb auswerten.",
   "Mit Nutzerinterviews die Ursache der Langsamkeit klären.",
   "Zuerst Hardware aufrüsten, um die Architektur auszuschließen.",
   "Ziel als messbares Qualitätsszenario formulieren."
  ],
  "correct": [
   1,
   2,
   5
  ],
  "optExpl": [
   "Falsch: Entwicklerrechner bilden Last, Daten und Infrastruktur des Betriebs nicht ab – die Werte sind gerade nicht aussagekräftig.",
   "Richtig: Laufzeitverhalten quantitativ unter realistischen Bedingungen zu messen ist die passende Methode für Performanz.",
   "Richtig: Das Curriculum nennt Laufzeit-Logs und -Metriken ausdrücklich als Informationsquelle für die Analyse.",
   "Falsch: Interviews helfen, das Problem einzugrenzen, sind aber qualitativ. Die Ursache eines Performanzproblems belegt man durch Messung.",
   "Falsch: Mehr Hardware kann Symptome verdecken, ersetzt aber keine Ursachenanalyse und schließt Architekturprobleme nicht aus.",
   "Richtig: „Zu langsam“ ist nicht prüfbar; erst ein Szenario mit Kontext, Stimulus und Antwortmaß legt fest, was erreicht werden soll."
  ],
  "explanation": "Performanzprobleme untersucht man messbasiert: Ziel als Szenario fassen, unter realistischer Last messen, Betriebsdaten auswerten. Falle: Hardware-Aufrüstung, Messung auf Entwicklerrechnern und Befragungen ersetzen keine Messung im realistischen Umfeld."
 },
 {
  "id": "k34",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R2",
  "type": "k",
  "points": 2,
  "q": "Sie beschreiben den Baustein „Tarifrechner“. Gehört die Angabe in die Blackbox-Beschreibung (Außensicht) oder die Whitebox-Beschreibung (Innensicht)?",
  "categories": [
   "Blackbox (Außensicht)",
   "Whitebox (Innensicht)"
  ],
  "rows": [
   {
    "text": "Zugesicherte Qualitäten wie die maximale Antwortzeit.",
    "cat": 0
   },
   {
    "text": "Die Verantwortung des Bausteins in einem Satz.",
    "cat": 0
   },
   {
    "text": "Die enthaltenen Unterbausteine und ihre Beziehungen.",
    "cat": 1
   },
   {
    "text": "Das Zusammenspiel der inneren Bausteine bei einer Anfrage.",
    "cat": 1
   },
   {
    "text": "Wie die äußeren Schnittstellen auf innere Bausteine abgebildet werden.",
    "cat": 1
   },
   {
    "text": "Die benötigten Schnittstellen zu anderen Bausteinen.",
    "cat": 0
   }
  ],
  "explanation": "Zur Außensicht gehören neben angebotenen auch die benötigten Schnittstellen sowie Verantwortung und Zusicherungen. Die Falle: Welcher innere Baustein eine äußere Schnittstelle realisiert, ist bereits Innensicht."
 },
 {
  "id": "k35",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R2",
  "type": "k",
  "points": 2,
  "q": "Sie modellieren die Verteilungssicht eines Bestellsystems. Ist das Element ein Knoten oder ein darauf verteiltes Artefakt?",
  "categories": [
   "Knoten (Node)",
   "Artefakt (Deployment-Artefakt)"
  ],
  "rows": [
   {
    "text": "Ein SQL-Skript, das das Datenbankschema anlegt.",
    "cat": 1
   },
   {
    "text": "Eine mit ausgelieferte Konfigurationsdatei.",
    "cat": 1
   },
   {
    "text": "Das Container-Image des Bestelldienstes.",
    "cat": 1
   },
   {
    "text": "Eine Container-Laufzeitumgebung auf einem Host.",
    "cat": 0
   },
   {
    "text": "Eine virtuelle Maschine in der Cloud.",
    "cat": 0
   },
   {
    "text": "Der Datenbankserver, auf dem das Schema eingerichtet wird.",
    "cat": 0
   }
  ],
  "explanation": "Knoten sind Ausführungsumgebungen bzw. Hardware – auch virtuell oder als Container-Laufzeit. Die Falle: Das Container-Image ist kein Knoten, sondern ein ausgeliefertes Artefakt, ebenso Konfigurations- und Schema-Dateien."
 },
 {
  "id": "c1q37",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R2",
  "type": "multi",
  "q": "Welche Angaben gehören vorrangig in die Blackbox-Beschreibung eines Bausteins?",
  "options": [
   "Die enthaltenen Unterbausteine und ihre Beziehungen.",
   "Die benötigten Schnittstellen nach außen.",
   "Verantwortlichkeit und zugesicherte Eigenschaften.",
   "Die Zuordnung zu Ausführungsknoten.",
   "Die angebotenen Schnittstellen.",
   "Die intern verwendeten Algorithmen."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Falsch: Die innere Zerlegung ist genau das, was erst die Whitebox zeigt.",
   "Richtig: Auch Abhängigkeiten nach außen sind von außen sichtbar und für Nutzer relevant.",
   "Richtig: Aufgabe und Qualitätszusagen legen fest, wofür und unter welchen Bedingungen man den Baustein nutzt.",
   "Falsch: Das gehört in die Verteilungssicht, nicht in die Blackbox der Bausteinsicht.",
   "Richtig: Was der Baustein nach außen bereitstellt, ist der Kern der Blackbox.",
   "Falsch: Interna sind Whitebox-Inhalt und bleiben in der Blackbox verborgen."
  ],
  "explanation": "Blackbox = angebotene und benötigte Schnittstellen, Verantwortlichkeit, Zusicherungen. Falle: Knotenzuordnung ist Verteilungssicht, Unterbausteine und Algorithmen sind Whitebox."
 },
 {
  "id": "c1q38",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R1",
  "type": "single",
  "q": "Eine Entwicklerin will einen bestehenden Baustein nur aufrufen, nicht verändern. Welche Beschreibung braucht sie in erster Linie?",
  "options": [
   "Die Verteilungssicht mit Knoten und Protokollen.",
   "Die Whitebox-Beschreibung des Bausteins.",
   "Laufzeitszenarien seiner internen Abläufe.",
   "Die Blackbox-Beschreibung des Bausteins."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Sie beantwortet Betriebsfragen, beschreibt aber nicht, welche Dienste der Baustein mit welchen Zusagen bietet.",
   "Falsch: Die innere Struktur braucht, wer den Baustein ändert; Zusicherungen stehen bereits in der Blackbox.",
   "Falsch: Interne Abläufe sind für die reine Nutzung nicht nötig und würden Interna offenlegen.",
   "Richtig: Schnittstellen, Verantwortlichkeit und Zusicherungen genügen, um einen Baustein korrekt zu nutzen."
  ],
  "explanation": "Zum Nutzen reicht die Blackbox. Falle: Zusicherungen gehören schon zur Blackbox; Whitebox und interne Abläufe braucht nur, wer ändert."
 },
 {
  "id": "c4q40",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R2",
  "type": "single",
  "q": "Welche Angabe gehört am wenigsten in die Whitebox-Beschreibung eines Bausteins?",
  "options": [
   "Die enthaltenen Unterbausteine und ihre Beziehungen.",
   "Wichtige Schnittstellen zwischen den Unterbausteinen.",
   "Die Zuordnung der Unterbausteine zu Servern.",
   "Eine Begründung für die gewählte Zerlegung."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Das ist der Kern einer Whitebox.",
   "Falsch: Die internen Schnittstellen zeigen, wie die Unterbausteine zusammenarbeiten – sie gehören in die Whitebox.",
   "Richtig: Auf welchen Knoten etwas läuft, zeigt die Verteilungssicht. Die Whitebox in der Bausteinsicht beschreibt den statischen Aufbau.",
   "Falsch: Gehört dazu: Die Whitebox erklärt auch, warum der Baustein so zerlegt wurde."
  ],
  "explanation": "Eine Whitebox zeigt Unterbausteine, ihre Beziehungen und Schnittstellen sowie die Begründung der Zerlegung. Die Zuordnung zu Servern gehört in die Verteilungssicht."
 },
 {
  "id": "c2q31",
  "chapter": 2,
  "lz": "LZ 02-02",
  "r": "R2",
  "type": "multi",
  "q": "Ein Konzern diskutiert Conways Gesetz. Welche Aussagen dazu treffen zu?",
  "options": [
   "Es gilt nur für verteilte Systeme wie Microservices.",
   "Es verpflichtet dazu, Teams nach der Architektur zu schneiden.",
   "In kleinen Teams spielt es für den Systemschnitt keine Rolle.",
   "Wenig kommunizierende Teams erzeugen tendenziell Systemgrenzen.",
   "Das Curriculum ordnet es den organisatorischen Randbedingungen zu."
  ],
  "correct": [
   3,
   4
  ],
  "optExpl": [
   "Falsch: Die Beobachtung betrifft jede Systemstruktur, auch die Module eines Monolithen.",
   "Falsch: Conways Gesetz ist eine Beobachtung, keine Vorschrift. Man kann es bewusst nutzen, muss aber nicht.",
   "Falsch: Auch kleine Organisationen haben Kommunikationsstrukturen, die sich im System niederschlagen – nur weniger auffällig.",
   "Richtig: Wo Teams kaum miteinander reden, entstehen bevorzugt Schnittstellen zwischen ihren Systemteilen.",
   "Richtig: Conway steht im Curriculum bei der Organisationsstruktur von Teams und Auftraggebenden – nicht bei Technologie."
  ],
  "explanation": "Conways Gesetz ist eine organisatorische Randbedingung: Teamgrenzen werden tendenziell zu Systemgrenzen. Falle: Es gilt unabhängig von Größe und Architekturstil und ist keine Pflicht."
 },
 {
  "id": "c3q79",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R2",
  "type": "multi",
  "q": "Ein System nutzt ein externes Versand-API mit häufigen Änderungen und schwankender Verfügbarkeit. Was hält die Folgen beherrschbar?",
  "options": [
   "Das API hinter einer eigenen Abstraktion kapseln.",
   "Jeder nutzende Baustein erhält einen eigenen Adapter.",
   "Die API-Version bewusst nicht festlegen.",
   "Timeout, Retry und Circuit Breaker einsetzen.",
   "Die Datentypen des Anbieters im Fachmodell nutzen."
  ],
  "correct": [
   0,
   3
  ],
  "optExpl": [
   "Richtig: Ein Adapter bzw. Anti-Corruption-Layer bündelt die Abhängigkeit; Änderungen bleiben an einer Stelle.",
   "Falsch: Verstreute Adapter verteilen die Abhängigkeit wieder; eine Änderung muss an vielen Stellen nachgezogen werden.",
   "Falsch: So schlägt jede Anbieteränderung ungeplant durch; Versionen pinnt man bewusst und migriert kontrolliert.",
   "Richtig: Diese Muster federn schwankende Verfügbarkeit ab und verhindern Ausfallketten.",
   "Falsch: Das zieht fremde Strukturen ins eigene Modell; ein Anti-Corruption-Layer übersetzt sie gerade."
  ],
  "explanation": "Volatile Fremddienste kapselt man zentral hinter einer eigenen Abstraktion und sichert Ausfälle mit Resilienzmustern ab. Falle: verstreute Adapter oder Fremdtypen im Fachmodell."
 },
 {
  "id": "c2q32",
  "chapter": 2,
  "lz": "LZ 02-04",
  "r": "R2",
  "type": "single",
  "q": "Ein Stakeholder fordert: „Das System soll benutzerfreundlich sein.“ Welche Formulierung macht das am ehesten überprüfbar?",
  "options": [
   "„Mindestens 80 % der Nutzer sind nach dem Go-live zufrieden.“",
   "„Die Oberfläche folgt dem Design-System des Unternehmens.“",
   "„Jeder Dialog enthält höchstens drei Eingabefelder.“",
   "„Neue Nutzer schließen eine Bestellung ohne Hilfe in < 3 min ab (≥ 90 %).“"
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Klingt messbar, nennt aber weder Aufgabe noch Kontext und lässt sich erst nach dem Go-live prüfen.",
   "Falsch: Das ist eine Lösungsvorgabe. Man kann ihre Einhaltung prüfen, aber nicht, ob das System benutzerfreundlich ist.",
   "Falsch: Eine Gestaltungsregel ist eine Lösungsidee. Sie sagt nichts darüber, ob Nutzer ihre Aufgaben gut erledigen.",
   "Richtig: Ein Qualitätsszenario mit Kontext (neue Nutzer), Stimulus, Reaktion und Messung – so wird ein vages Ziel prüfbar."
  ],
  "explanation": "Vage Ziele wie „benutzerfreundlich“ werden über Qualitätsszenarien mit konkreter Aufgabe, Kontext und Messung prüfbar. Falle: Gestaltungsregeln sind Lösungen, eine Zufriedenheitsquote ohne Kontext ist kein vollständiges Szenario."
 },
 {
  "id": "c5q29",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R2",
  "type": "single",
  "q": "Ein Team vermutet die Ursache einer langsamen Anwendung in einem bestimmten Modul. Welches Vorgehen ist methodisch am besten begründet?",
  "options": [
   "Engpass erst durch Messung belegen, dann gezielt optimieren.",
   "Das Modul mit der höchsten Kopplung zuerst optimieren.",
   "Vorsorglich einen Cache vor das Modul schalten.",
   "Das Modul per Review auf ineffiziente Algorithmen prüfen."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Erst Profiling oder Monitoring unter realistischen Bedingungen zeigt, ob die Vermutung stimmt – sonst optimiert man womöglich die falsche Stelle.",
   "Falsch: Kopplung sagt etwas über Änderbarkeit aus, nicht darüber, wo Laufzeit verloren geht.",
   "Falsch: Caching ist eine mögliche Taktik, bringt aber Komplexität und Konsistenzfragen mit sich und ist ohne belegten Engpass verfrüht.",
   "Falsch: Ein Review kann Hinweise liefern, belegt aber nicht, dass das Modul tatsächlich der Engpass ist."
  ],
  "explanation": "Erst messen, dann optimieren: Der Engpass muss unter realistischen Bedingungen belegt sein. Falle: Reviews, Kopplungsmetriken oder pauschales Caching ersetzen die Messung nicht."
 },
 {
  "id": "c1q39",
  "chapter": 1,
  "lz": "LZ 01-02",
  "r": "R2",
  "type": "single",
  "q": "In einem Projekt mit anfangs unklaren Anforderungen ändert sich spät eine zentrale Anforderung, und das Team setzt sie mit wenig Aufwand um. Worauf ist das am ehesten zurückzuführen?",
  "options": [
   "Ein Vorab-Detaildesign aller denkbaren Varianten.",
   "Der Einsatz von Microservices als Architekturstil.",
   "Eine bewusst änderbar gehaltene, modulare Struktur.",
   "Eine besonders vollständige Architekturdokumentation."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Big Design Up Front kann unbekannte Änderungen nicht vorwegnehmen und erzeugt Überkonstruktion.",
   "Falsch: Ein Stil garantiert keine Änderbarkeit; schlecht geschnittene Services verteilen Änderungen sogar über viele Services.",
   "Richtig: Modularität und lose Kopplung halten Änderungen lokal – das macht späte Anpassungen günstig.",
   "Falsch: Dokumentation hilft beim Finden betroffener Stellen, senkt aber nicht den Änderungsaufwand selbst."
  ],
  "explanation": "Späte Änderungen bleiben günstig durch bewusst änderbare, lose gekoppelte Strukturen. Falle: Doku, Vorab-Design oder ein Stil allein bewirken das nicht."
 },
 {
  "id": "c4q41",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R1",
  "type": "single",
  "q": "In der Verteilungssicht tauchen Knoten und Verteilungsartefakte auf. Was unterscheidet beide am zutreffendsten?",
  "options": [
   "Knoten führt aus (z. B. VM), Artefakt wird verteilt (z. B. JAR).",
   "Ein Artefakt ist ein Baustein, der Knoten die ausführende Komponente.",
   "Knoten sind nur physische Hardware, VMs zählen zu Artefakten.",
   "Ein Knoten ist eine deploybare Datei, ein Artefakt der Rechner."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Knoten sind Ausführungsumgebungen, Artefakte die ausgelieferten Einheiten wie JAR, Image oder Konfigurationsdatei.",
   "Falsch: Bausteine werden auf Artefakte abgebildet, sind aber nicht dasselbe; ein Knoten ist Infrastruktur, keine Komponente.",
   "Falsch: Knoten können auch virtuell sein, etwa VMs oder Container-Laufzeitumgebungen.",
   "Falsch: Vertauscht: Der Knoten führt aus, das Artefakt wird ausgeliefert und darauf installiert."
  ],
  "explanation": "Knoten sind physische oder virtuelle Ausführungsumgebungen, Artefakte die darauf verteilten Einheiten. Falle: Artefakt mit Baustein gleichsetzen oder VMs nicht als Knoten zählen."
 },
 {
  "id": "k36",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R2",
  "type": "k",
  "points": 2,
  "q": "Ein Start-up plant sein erstes Produkt. Spricht der Aspekt eher für einen (modularen) Monolithen oder eher für Microservices?",
  "categories": [
   "Eher Monolith",
   "Eher Microservices"
  ],
  "rows": [
   {
    "text": "Mehrere Teams sollen ihre Teile unabhängig voneinander releasen.",
    "cat": 1
   },
   {
    "text": "Die fachlichen Grenzen sind noch unklar und verschieben sich häufig.",
    "cat": 0
   },
   {
    "text": "Ein Teilbereich soll bewusst eine andere Technologie nutzen dürfen.",
    "cat": 1
   },
   {
    "text": "Sofortige Transaktionskonsistenz über den gesamten Datenbestand ist zwingend.",
    "cat": 0
   },
   {
    "text": "Ein kleines Team soll mit geringer Betriebskomplexität auskommen.",
    "cat": 0
   },
   {
    "text": "Ein Teilbereich muss bei Lastspitzen unabhängig vom Rest skaliert werden.",
    "cat": 1
   }
  ],
  "explanation": "Unabhängiges Skalieren und Releasen sowie Technologievielfalt sprechen für Microservices. Unklare fachliche Schnitte, strenge Konsistenz und geringe Betriebskomplexität sprechen eher für einen modularen Monolithen."
 }
];
