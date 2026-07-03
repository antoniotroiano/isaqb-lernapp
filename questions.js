/* iSAQB CPSA-F Trainer — Fragen (getrennt vom Code).
   Wird von index.html via <script src="questions.js"></script> geladen –
   MUSS vor dem Haupt-Script stehen. Für die Einzeldatei-Variante siehe isaqb-trainer.html. */
const QUESTIONS = [
/* ===== Kapitel 1 ===== */
{id:"c1q1",chapter:1,lz:"LZ 1-1",r:"R1",type:"multi",
 q:"Welche Aussagen beschreiben Softwarearchitektur zutreffend?",
 options:[
  "Sie umfasst die Bausteine eines Systems und deren Beziehungen zueinander.",
  "Sie umfasst die grundlegenden, oft folgenreichen Entwurfsentscheidungen.",
  "Sie ist im Wesentlichen die Summe des Quellcodes aller Klassen.",
  "Sie legt vor allem die konkrete Implementierung jeder einzelnen Methode fest."
 ],
 correct:[0,1],
 explanation:"Architektur = Bausteine + Beziehungen + tragende Entwurfsentscheidungen. Sie ist nicht der Code selbst und legt nicht jede Methode im Detail fest (das ist Detailentwurf)."},
{id:"c1q2",chapter:1,lz:"LZ 1-1",r:"R1",type:"single",
 q:"Was kennzeichnet eine Komponente (Baustein) am besten?",
 options:[
  "Eine Einheit mit gekapselter Funktionalität und klar definierter Schnittstelle.",
  "Eine Gruppe von Klassen im selben Paket, auch ohne gemeinsame Schnittstelle.",
  "Ein zur Laufzeit gestarteter Prozess des Betriebssystems.",
  "Eine Sammlung fachlich verwandter Datenbanktabellen."
 ],
 correct:[0],
 explanation:"Eine Komponente kapselt Funktionalität hinter einer definierten Schnittstelle. Bloße Paket-Zugehörigkeit, ein Laufzeitprozess oder Tabellen erfüllen dieses Kennzeichen nicht."},
{id:"c1q3",chapter:1,lz:"LZ 1-2",r:"R2",type:"single",
 q:"Was unterscheidet eine Blackbox- von einer Whitebox-Beschreibung eines Bausteins?",
 options:[
  "Blackbox zeigt nur Schnittstelle und Verantwortung von außen; Whitebox zeigt zusätzlich den inneren Aufbau.",
  "Whitebox verbirgt die inneren Bausteine, Blackbox legt sie offen.",
  "Blackbox bezieht sich auf die Laufzeitsicht, Whitebox auf die Verteilungssicht.",
  "Der Unterschied betrifft nur die Detailtiefe der Benennung, nicht die Sichtbarkeit der Interna."
 ],
 correct:[0],
 explanation:"Blackbox = Außensicht (Schnittstelle/Verantwortung), Whitebox = Innensicht (enthaltene Bausteine). Die Begriffe sind nicht vertauscht und nicht an Laufzeit-/Verteilungssicht gebunden."},
{id:"c1q4",chapter:1,lz:"LZ 1-8",r:"R1",type:"multi",
 q:"Welche der folgenden gehören zu den typischen Architektursichten?",
 options:[
  "Bausteinsicht (statische Zerlegung in Bausteine)",
  "Laufzeitsicht (Zusammenspiel der Bausteine zur Laufzeit)",
  "Quellcode-Dateisicht (Ordner- und Dateistruktur im Repository)",
  "Priorisierungssicht (Reihenfolge der Umsetzung von Features)"
 ],
 correct:[0,1],
 explanation:"Baustein- und Laufzeitsicht sind Kern-Architektursichten (ebenso Kontext- und Verteilungssicht). Datei-/Repository-Struktur oder eine 'Priorisierungssicht' sind keine Architektursichten."},
{id:"c1q5",chapter:1,lz:"LZ 1-4",r:"R2",type:"multi",
 q:"Welche Aufgaben gehören typischerweise zur Rolle der Softwarearchitekt:innen?",
 options:[
  "Anforderungen, besonders Qualitätsanforderungen, klären und beeinflussen.",
  "Tragende Architekturentscheidungen treffen und begründen.",
  "Die Umsetzung begleiten und dem Team Rückmeldung geben.",
  "Die endgültige Priorisierung des Produkt-Backlogs allein verantworten."
 ],
 correct:[0,1,2],
 explanation:"Architekt:innen klären Anforderungen, treffen/begründen Entscheidungen und begleiten die Umsetzung. Die Backlog-Priorisierung liegt bei der Produktverantwortung (z. B. Product Owner)."},
{id:"c1q6",chapter:1,lz:"LZ 1-5",r:"R2",type:"multi",
 q:"Welche Aussagen zu interner und externer Qualität treffen zu?",
 options:[
  "Externe Qualität ist von außen wahrnehmbar (z. B. Performanz, Zuverlässigkeit).",
  "Interne Qualität betrifft die innere Struktur (z. B. Wartbarkeit, Verständlichkeit).",
  "Interne Qualität ist für Endnutzer direkt spürbar, externe nur für Entwickler.",
  "Interne Qualität ist unbedeutend, solange die externe Qualität stimmt."
 ],
 correct:[0,1],
 explanation:"Externe Qualität ist von außen sichtbar, interne betrifft die Struktur. Die Zuordnung ist nicht vertauscht, und interne Qualität ist keineswegs unbedeutend (sie bestimmt z. B. die Wartbarkeit)."},
{id:"c1q7",chapter:1,lz:"LZ 1-7",r:"R2",type:"single",
 q:"Warum werden Architekturentscheidungen oft iterativ und unter Unsicherheit getroffen?",
 options:[
  "Weil zu Beginn Wissen und Anforderungen unvollständig sind und sich im Verlauf verfeinern.",
  "Weil solche Entscheidungen ohnehin jederzeit ohne nennenswerten Aufwand änderbar sind.",
  "Weil erst nach vollständiger Implementierung genügend Informationen vorliegen.",
  "Weil sich Unsicherheit durch ein ausreichend detailliertes Vorab-Design vollständig vermeiden lässt."
 ],
 correct:[0],
 explanation:"Zu Projektbeginn ist Wissen unvollständig; Entscheidungen werden schrittweise verfeinert. Sie sind oft gerade NICHT beliebig billig änderbar, und ein Vorab-Design beseitigt die Unsicherheit nicht."},
{id:"c1q8",chapter:1,lz:"LZ 1-6",r:"R1",type:"multi",
 q:"Welche Aussagen zum Verhältnis von Architektur und Anforderungen treffen zu?",
 options:[
  "Besonders Qualitätsanforderungen treiben zentrale Architekturentscheidungen.",
  "Architektur und Anforderungen beeinflussen sich wechselseitig und werden iterativ geschärft.",
  "Ausschließlich funktionale Anforderungen bestimmen die Architektur.",
  "Die Architektur wird unabhängig festgelegt und die Anforderungen passen sich ihr danach an."
 ],
 correct:[0,1],
 explanation:"Vor allem Qualitätsanforderungen treiben die Architektur, und beide schärfen sich wechselseitig. Nicht nur funktionale Anforderungen zählen, und die Reihenfolge ist nicht umgekehrt."},
{id:"c1q9",chapter:1,lz:"LZ 1-4",r:"R2",type:"single",
 q:"Welche Tätigkeit ist KEINE zentrale Aufgabe der Architekturrolle?",
 options:[
  "Die kaufmännische Budget- und Vertragsverhandlung mit dem Kunden verantworten.",
  "Übergreifende Querschnittskonzepte (z. B. Persistenz, Sicherheit) festlegen.",
  "Architekturentscheidungen dokumentieren und kommunizieren.",
  "Qualitätsanforderungen gemeinsam mit Stakeholdern klären."
 ],
 correct:[0],
 explanation:"Budget-/Vertragsverhandlung ist keine Architekturaufgabe. Querschnittskonzepte, Dokumentation/Kommunikation und Anforderungsklärung gehören dagegen klar zur Rolle."},
{id:"k5",chapter:1,lz:"LZ 1-1",r:"R1",type:"k",points:2,
 q:"Bewerten Sie jede Aussage: richtig oder falsch?",
 categories:["Richtig","Falsch"],
 rows:[
  {text:"Lose Kopplung und hohe Kohäsion sind erstrebenswert.",cat:0},
  {text:"Ein Architekt muss den gesamten Produktivcode selbst schreiben.",cat:1},
  {text:"Qualitätsanforderungen beeinflussen die Architektur stark.",cat:0},
  {text:"Einmal getroffene Architekturentscheidungen dürfen nie geändert werden.",cat:1}
 ],
 explanation:"Lose Kopplung/hohe Kohäsion und der starke Einfluss von Qualitätsanforderungen sind zentrale, richtige Prinzipien. Der Architekt schreibt nicht allen Code, und Entscheidungen werden iterativ angepasst."},
{id:"c1q10",chapter:1,lz:"LZ 1-3",r:"R1",type:"single",
 q:"Welches ist das zentrale Ziel von Softwarearchitektur?",
 options:[
  "Komplexität beherrschbar machen und das Erreichen der Qualitätsziele unterstützen.",
  "Die spätere Notwendigkeit von Refactorings vollständig ausschließen.",
  "Für jede erdenkliche zukünftige Anforderung schon heute eine Lösung vorhalten.",
  "Die Entwicklungszeit unabhängig von der Qualität minimieren."
 ],
 correct:[0],
 explanation:"Ziel ist beherrschbare Komplexität und das Erreichen der Qualitätsziele. Refactorings ganz zu vermeiden, alles auf Vorrat zu bauen (gegen YAGNI) oder Qualität der Geschwindigkeit zu opfern sind keine tragfähigen Ziele."},
{id:"c1q11",chapter:1,lz:"LZ 1-4",r:"R1",type:"multi",
 q:"Welche Aussagen über Stakeholder einer Architektur treffen zu?",
 options:[
  "Stakeholder sind alle Personen/Gruppen mit berechtigtem Interesse am System.",
  "Auch Betrieb, Auftraggeber und Wartungsteam zählen dazu, nicht nur Endnutzer.",
  "Nur Personen mit vertraglicher Zahlungspflicht sind Stakeholder.",
  "Stakeholder sind ausschließlich die Mitglieder des Entwicklungsteams."
 ],
 correct:[0,1],
 explanation:"Stakeholder = alle mit berechtigten Belangen (Nutzer, Betrieb, Auftraggeber, Wartung, Entwicklung …). Weder auf Zahlende noch auf das Entwicklungsteam beschränkt."},
{id:"c1q12",chapter:1,lz:"LZ 1-1",r:"R1",type:"multi",
 q:"Welche Eigenschaften kennzeichnen einen gut geschnittenen Baustein?",
 options:[
  "Hohe Kohäsion – er bündelt zusammengehörige Aufgaben.",
  "Lose Kopplung über eine klar definierte Schnittstelle.",
  "Er teilt seinen internen Zustand direkt mit Nachbarbausteinen, um Umwege zu sparen.",
  "Er bündelt möglichst viele unterschiedliche Zuständigkeiten, um wiederverwendbar zu sein."
 ],
 correct:[0,1],
 explanation:"Gut geschnitten = hohe Kohäsion und lose Kopplung über klare Schnittstellen. Direktes Teilen von Interna (bricht die Kapselung) und viele gemischte Zuständigkeiten (niedrige Kohäsion) sind Anti-Muster."},
{id:"c1q13",chapter:1,lz:"LZ 1-1",r:"R1",type:"multi",
 q:"Welche Aussagen zur Schnittstelle (Interface) eines Bausteins treffen zu?",
 options:[
  "Sie legt den nach außen sichtbaren Vertrag fest (angebotene bzw. benötigte Operationen).",
  "Sie verbirgt die interne Realisierung, sodass diese austauschbar bleibt.",
  "Sie schreibt die konkrete interne Datenstruktur des Bausteins verbindlich vor.",
  "Sie muss sich zwangsläufig mitändern, sobald die interne Implementierung angepasst wird."
 ],
 correct:[0,1],
 explanation:"Die Schnittstelle ist der Vertrag und verbirgt die Interna (die dadurch austauschbar bleiben). Sie schreibt keine interne Datenstruktur vor und sollte bei internen Änderungen gerade stabil bleiben."},
{id:"c1q14",chapter:1,lz:"LZ 1-1",r:"R1",type:"single",
 q:"Was versteht man unter der Verantwortlichkeit (Responsibility) eines Bausteins?",
 options:[
  "Die klar umrissene Aufgabe, für die er zuständig ist (das WAS).",
  "Die konkrete technische Umsetzung, mit der er seine Aufgabe erfüllt (das WIE).",
  "Die Menge aller Bausteine, von denen er abhängt.",
  "Die Position, die er in der Schichtenhierarchie einnimmt."
 ],
 correct:[0],
 explanation:"Verantwortlichkeit = die klar umrissene Aufgabe (das WAS). Die Umsetzung (das WIE), die Abhängigkeiten oder die Schichtposition sind etwas anderes."},
{id:"c1q15",chapter:1,lz:"LZ 1-2",r:"R1",type:"single",
 q:"Warum ist eine Architektur nur dann wirksam, wenn sie in der Implementierung eingehalten wird?",
 options:[
  "Weil die angestrebten Eigenschaften (z. B. Wartbarkeit) nur entstehen, wenn der Code der Struktur folgt.",
  "Weil die Architektur den passenden Code automatisch generiert, sobald sie dokumentiert ist.",
  "Weil Abweichungen im Code die Diagramme automatisch mit aktualisieren.",
  "Weil das Programm ohne exakte Einhaltung gar nicht kompiliert."
 ],
 correct:[0],
 explanation:"Nur wenn der Code der Architektur folgt, stellen sich deren Qualitäten ein (sonst Architekturerosion). Code entsteht nicht automatisch, Diagramme aktualisieren sich nicht selbst, und Abweichungen verhindern keine Kompilierung."},
{id:"c1q16",chapter:1,lz:"LZ 1-2",r:"R2",type:"single",
 q:"Auf welchen Ebenen beschreibt Softwarearchitektur Strukturen?",
 options:[
  "Auf mehreren Abstraktionsebenen – vom Gesamtsystem über Subsysteme bis zu einzelnen Bausteinen.",
  "Nur auf der obersten Ebene des Gesamtsystems; alles Feinere ist reine Programmierung ohne Architekturbezug.",
  "Ausschließlich auf Ebene einzelner Klassen und Methoden.",
  "Nur auf Ebene der eingesetzten Infrastruktur und Server."
 ],
 correct:[0],
 explanation:"Architektur betrachtet Strukturen hierarchisch auf mehreren Ebenen. Die anderen Optionen greifen jeweils zu kurz (nur oben, nur unten oder nur Infrastruktur)."},
{id:"c1q17",chapter:1,lz:"LZ 1-3",r:"R1",type:"multi",
 q:"Welche Aussagen über den Nutzen von Softwarearchitektur treffen zu?",
 options:[
  "Sie hilft, Komplexität beherrschbar zu machen.",
  "Sie ermöglicht arbeitsteilige Entwicklung im Team.",
  "Sie schafft eine gemeinsame Grundlage für die Kommunikation der Stakeholder.",
  "Sie stellt die Korrektheit der Implementierung sicher, sodass Tests entfallen können."
 ],
 correct:[0,1,2],
 explanation:"Architektur beherrscht Komplexität, ermöglicht Arbeitsteilung und Kommunikation. Sie garantiert aber keine korrekte Implementierung – Tests bleiben nötig."},
{id:"c1q18",chapter:1,lz:"LZ 1-7",r:"R2",type:"single",
 q:"Wie entsteht eine Softwarearchitektur in einem iterativen Vorgehen typischerweise?",
 options:[
  "Schrittweise: tragende Entscheidungen früh, Details werden über Iterationen verfeinert.",
  "Vollständig und endgültig vor Implementierungsbeginn, ohne spätere Anpassung.",
  "Rein zufällig-emergent, ganz ohne bewusste übergreifende Entscheidungen.",
  "Erst nachträglich, als reine Dokumentation des bereits fertigen Codes."
 ],
 correct:[0],
 explanation:"Iterativ heißt: wichtige Entscheidungen früh, Verfeinerung über die Zeit – weder komplettes Vorab-Design (BDUF) noch planlos noch erst am Ende dokumentiert."},
{id:"c1q19",chapter:1,lz:"LZ 1-2",r:"R2",type:"single",
 q:"Worin unterscheiden sich Architektur und Detailentwurf (Design)?",
 options:[
  "Architektur trifft die übergreifenden, weitreichenden Strukturentscheidungen; der Detailentwurf konkretisiert innerhalb dieser Vorgaben.",
  "Architektur betrifft ausschließlich die Wahl der Programmiersprache, der Detailentwurf alles Übrige.",
  "Der Detailentwurf entsteht zuerst und wird anschließend zur Architektur zusammengefasst.",
  "Beide bezeichnen dasselbe, nur in unterschiedlichen Projektphasen."
 ],
 correct:[0],
 explanation:"Architektur = große, folgenreiche Strukturentscheidungen; der Detailentwurf verfeinert innerhalb dieser. Es geht nicht nur um die Sprachwahl, die Reihenfolge ist nicht umgekehrt, und identisch sind beide auch nicht."},
{id:"c1q20",chapter:1,lz:"LZ 1-4",r:"R1",type:"single",
 q:"Warum ist Kommunikation eine Kernkompetenz von Softwarearchitekt:innen?",
 options:[
  "Weil sie zwischen Stakeholdern vermitteln und Entscheidungen nachvollziehbar begründen müssen.",
  "Weil sie die Architektur ausschließlich mündlich statt schriftlich weitergeben sollen.",
  "Weil die technische Qualität zweitrangig ist, solange die Architektur gut präsentiert wird.",
  "Weil gute Kommunikation Architekturdokumentation vollständig überflüssig macht."
 ],
 correct:[0],
 explanation:"Architektur lebt von gemeinsamem Verständnis: vermitteln und begründen. Mündlich-only, Präsentation über Substanz oder 'Reden ersetzt Doku' sind falsch."},
{id:"c1q21",chapter:1,lz:"LZ 1-7",r:"R2",type:"single",
 q:"Wozu dient ein früher Durchstich (Prototyp/Proof of Concept) beim Architekturentwurf?",
 options:[
  "Zentrale technische Risiken und die Machbarkeit früh zu überprüfen.",
  "Eine erste, bereits produktionsreife Version an die Nutzer auszuliefern.",
  "Die vollständige Fachlichkeit end-to-end fertig zu implementieren.",
  "Den Gesamtaufwand verbindlich und abschließend zu schätzen."
 ],
 correct:[0],
 explanation:"Ein Durchstich prüft riskante Annahmen/Machbarkeit früh. Er ist bewusst nicht produktionsreif, nicht fachlich vollständig und liefert keine verbindliche Endaufwandsschätzung."},
{id:"c1q22",chapter:1,lz:"LZ 1-3",r:"R1",type:"multi",
 q:"Was kennzeichnet eine 'gute' Softwarearchitektur?",
 options:[
  "Sie erfüllt die geforderten Qualitätsziele unter den gegebenen Randbedingungen.",
  "Sie ist so einfach und verständlich wie möglich (aber nicht einfacher).",
  "Sie setzt möglichst viele aktuelle Technologien ein, um zukunftssicher zu wirken.",
  "Sie ist maximal flexibel und für jede denkbare künftige Anforderung vorbereitet."
 ],
 correct:[0,1],
 explanation:"Gut = Qualitätsziele erfüllt und angemessen einfach. Technologievielfalt um ihrer selbst willen und Über-Flexibilität auf Vorrat (gegen YAGNI) sind keine Gütekriterien."},
/* ===== Kapitel 2 ===== */
{id:"c2q1",chapter:2,lz:"LZ 2-1",r:"R1",type:"multi",
 q:"Welche Aussagen ordnen die Anforderungsbegriffe korrekt zu?",
 options:[
  "Eine Randbedingung schränkt den Lösungsraum ein, ohne selbst Funktion oder Qualität zu sein.",
  "Eine Qualitätsanforderung beschreibt, WIE GUT etwas sein soll (z. B. die Antwortzeit).",
  "Eine funktionale Anforderung legt die einzuhaltende Antwortzeit fest.",
  "Eine Randbedingung ist lediglich eine besonders wichtige funktionale Anforderung."
 ],
 correct:[0,1],
 explanation:"Randbedingungen grenzen den Lösungsraum ein; Qualitätsanforderungen beschreiben das WIE GUT. Antwortzeit ist keine funktionale Anforderung, und eine Randbedingung ist keine 'wichtige' funktionale Anforderung."},
{id:"c2q2",chapter:2,lz:"LZ 2-2",r:"R1",type:"multi",
 q:"Welche Aussagen zur Bedeutung von Qualitätsanforderungen für die Architektur treffen zu?",
 options:[
  "Sie sind maßgebliche Architektur-Treiber und prägen Strukturentscheidungen stark.",
  "Sie sollten früh geklärt werden, da spätere Änderungen teuer sind.",
  "Sie werden erst nach der funktionalen Fertigstellung betrachtet.",
  "Sie betreffen fast ausschließlich die Gestaltung der Benutzeroberfläche."
 ],
 correct:[0,1],
 explanation:"Qualitätsanforderungen treiben die Architektur und sollten früh geklärt werden. Sie erst am Ende zu betrachten oder auf die Oberfläche zu reduzieren wäre falsch."},
{id:"c2q3",chapter:2,lz:"LZ 2-3",r:"R2",type:"multi",
 q:"Welche der folgenden sind Randbedingungen?",
 options:[
  "Eine vorgeschriebene Programmiersprache oder Zielplattform.",
  "Ein fest vorgegebener Liefertermin.",
  "Eine geforderte maximale Antwortzeit der Suche.",
  "Die Möglichkeit, Berichte als PDF zu exportieren."
 ],
 correct:[0,1],
 explanation:"Technologie- und Terminvorgaben sind Randbedingungen. Eine geforderte Antwortzeit ist eine Qualitätsanforderung, der PDF-Export eine funktionale Anforderung."},
{id:"c2q4",chapter:2,lz:"LZ 2-2",r:"R1",type:"single",
 q:"Wie macht man eine vage Qualitätsanforderung wie 'Das System soll schnell sein' überprüfbar?",
 options:[
  "Durch ein Qualitätsszenario mit Auslöser, Kontext und messbarem Antwortmaß.",
  "Indem man verbindlich festlegt, dass 'schnell' subjektiv vom Team beurteilt wird.",
  "Indem man sie in eine Randbedingung zur Wahl einer schnellen Programmiersprache umwandelt.",
  "Indem man die Präzisierung vertagt, bis erste Performancemessungen im Betrieb vorliegen."
 ],
 correct:[0],
 explanation:"Überprüfbar wird sie durch ein Qualitätsszenario mit messbarem Antwortmaß (z. B. '95 % der Suchen unter 1 s'). Subjektive Urteile, eine Technologie-Randbedingung oder späte Messungen machen sie nicht messbar."},
{id:"c2q5",chapter:2,lz:"LZ 2-4",r:"R2",type:"single",
 q:"Wer ist für das Klären und Verstehen der Anforderungen mitverantwortlich?",
 options:[
  "Auch die Architekt:innen – sie hinterfragen und schärfen Anforderungen aktiv mit.",
  "Allein die Stakeholder; die Architektur übernimmt die Anforderungen unverändert.",
  "Ausschließlich die Business-Analyst:innen, ohne Beteiligung der Technik.",
  "Niemand gezielt, da vollständige Anforderungen bereits zu Projektbeginn vorliegen."
 ],
 correct:[0],
 explanation:"Architekt:innen sind aktiv an der Klärung beteiligt (keine bloßen Empfänger). Anforderungen liegen zu Beginn selten vollständig vor, und die Technik gehört einbezogen."},
{id:"c2q6",chapter:2,lz:"LZ 2-2",r:"R2",type:"single",
 q:"Welches ist ein Qualitätsmerkmal nach ISO 25010?",
 options:[
  "Wartbarkeit (Maintainability)",
  "Testabdeckung (Code Coverage)",
  "Wirtschaftlichkeit (Projektkosten)",
  "Entwicklungsgeschwindigkeit des Teams"
 ],
 correct:[0],
 explanation:"Wartbarkeit ist ein ISO-25010-Merkmal. Testabdeckung, Wirtschaftlichkeit und Entwicklungsgeschwindigkeit sind zwar messbar, aber keine ISO-25010-Produktqualitätsmerkmale."},
{id:"c2q7",chapter:2,lz:"LZ 2-1",r:"R1",type:"single",
 q:"Welche der folgenden ist eine funktionale Anforderung?",
 options:[
  "Der Nutzer kann Rechnungen als PDF exportieren.",
  "Antworten erscheinen in unter 200 ms.",
  "Das System ist rund um die Uhr zu 99,9 % verfügbar.",
  "Für die Umsetzung ist die Sprache Java vorgeschrieben."
 ],
 correct:[0],
 explanation:"Funktionale Anforderungen beschreiben, WAS das System tut (PDF-Export). Antwortzeit und Verfügbarkeit sind Qualitätsanforderungen; die Java-Vorgabe ist eine Randbedingung."},
{id:"k1",chapter:2,lz:"LZ 2-1",r:"R1",type:"k",points:2,
 q:"Ordnen Sie jede Aussage zu: funktionale Anforderung oder Qualitätsanforderung?",
 categories:["Funktionale Anforderung","Qualitätsanforderung"],
 rows:[
  {text:"Der Nutzer kann Rechnungen als PDF exportieren.",cat:0},
  {text:"Die Suche liefert Ergebnisse in unter 1 Sekunde.",cat:1},
  {text:"Das System ist zu 99,9 % verfügbar.",cat:1},
  {text:"Ein Administrator kann neue Benutzer anlegen.",cat:0}
 ],
 explanation:"Funktionale Anforderungen beschreiben, WAS das System tut (PDF-Export, Benutzerverwaltung). Antwortzeit und Verfügbarkeit sind Qualitätsanforderungen."},
{id:"k2",chapter:2,lz:"LZ 2-3",r:"R1",type:"k",points:2,
 q:"Ordnen Sie jede Vorgabe zu: Randbedingung oder Qualitätsanforderung?",
 categories:["Randbedingung","Qualitätsanforderung"],
 rows:[
  {text:"Es muss die Programmiersprache Java verwendet werden.",cat:0},
  {text:"Die Antwortzeit liegt unter 200 ms.",cat:1},
  {text:"Fester Liefertermin zum Ende des 1. Quartals.",cat:0},
  {text:"Eine neue Zahlart ist in unter 2 Personentagen integrierbar.",cat:1}
 ],
 explanation:"Randbedingungen (vorgeschriebene Technologie, Termin) begrenzen den Lösungsraum. Antwortzeit (Performanz) und leichte Erweiterbarkeit (Wartbarkeit) sind Qualitätsanforderungen."},
{id:"c2q8",chapter:2,lz:"LZ 2-2",r:"R1",type:"multi",
 q:"Welche gehören zu den Qualitätsmerkmalen nach ISO 25010?",
 options:[
  "Zuverlässigkeit (Reliability)",
  "Portabilität (Portability)",
  "Testabdeckung (Code Coverage)",
  "Termintreue des Projekts"
 ],
 correct:[0,1],
 explanation:"Zuverlässigkeit und Portabilität sind ISO-25010-Merkmale. Testabdeckung und Termintreue sind messbar, aber keine ISO-25010-Produktqualitätsmerkmale."},
{id:"c2q9",chapter:2,lz:"LZ 2-2",r:"R1",type:"single",
 q:"Warum sollten Qualitätsanforderungen möglichst früh geklärt werden?",
 options:[
  "Weil sie die Architektur maßgeblich prägen und nachträgliche Strukturänderungen teuer sind.",
  "Weil sie nach dem ersten Release nicht mehr geändert werden dürfen.",
  "Weil sie andernfalls automatisch zu funktionalen Anforderungen werden.",
  "Weil sie ausschließlich die Testphase betreffen und dort früh gebraucht werden."
 ],
 correct:[0],
 explanation:"Früh geklärt, weil sie die Architektur treiben und späte Änderungen teuer sind. Sie sind nicht 'eingefroren', werden nicht zu funktionalen Anforderungen und betreffen nicht nur die Tests."},
{id:"c2q10",chapter:2,lz:"LZ 2-1",r:"R1",type:"single",
 q:"Ein Stakeholder fordert: 'Das System muss auch von sehbehinderten Nutzern bedienbar sein.' Um welche Art Anforderung handelt es sich?",
 options:[
  "Um eine Qualitätsanforderung (Benutzbarkeit/Barrierefreiheit).",
  "Um eine funktionale Anforderung, da eine konkrete Funktion beschrieben wird.",
  "Um eine Randbedingung, da sie die technische Umsetzung vorschreibt.",
  "Um ein Nicht-Ziel, das den Umfang begrenzt."
 ],
 correct:[0],
 explanation:"Barrierefreiheit ist ein Aspekt der Benutzbarkeit – also eine Qualitätsanforderung. Sie beschreibt keine konkrete Funktion, schreibt keine Technik vor und ist kein Nicht-Ziel."},
{id:"c2q11",chapter:2,lz:"LZ 2-4",r:"R1",type:"multi",
 q:"Welche Aussagen zur Priorisierung von Anforderungen treffen zu?",
 options:[
  "Zeit und Budget sind begrenzt – nicht alles ist gleich wichtig.",
  "Anforderungen können einander widersprechen und müssen abgewogen werden.",
  "Niedriger priorisierte Anforderungen dürfen danach ersatzlos ignoriert werden.",
  "Die Priorisierung richtet sich allein nach dem technischen Umsetzungsaufwand."
 ],
 correct:[0,1],
 explanation:"Priorisiert wird, weil Ressourcen begrenzt sind und Anforderungen konkurrieren. Niedrig Priorisiertes ist nicht automatisch gestrichen, und der Aufwand ist nicht das alleinige Kriterium (auch Wert und Risiko zählen)."},
{id:"c2q12",chapter:2,lz:"LZ 2-2",r:"R1",type:"single",
 q:"Was gilt typischerweise für das Verhältnis verschiedener Qualitätsanforderungen zueinander?",
 options:[
  "Sie stehen oft in Zielkonflikt (Trade-off) und müssen gegeneinander abgewogen werden.",
  "Sie sind bei guter Architektur alle gleichzeitig maximal erfüllbar.",
  "Sie sind voneinander unabhängig und beeinflussen sich nie.",
  "Es ist stets nur eine einzige Qualitätsanforderung gleichzeitig relevant."
 ],
 correct:[0],
 explanation:"Qualitätsmerkmale konkurrieren häufig (Trade-offs) und müssen abgewogen werden. Sie sind selten gleichzeitig maximierbar, nicht unabhängig und nicht einzeln-exklusiv."},
{id:"c2q13",chapter:2,lz:"LZ 2-3",r:"R2",type:"single",
 q:"Was ist eine Annahme (Assumption) im Architekturkontext?",
 options:[
  "Ein als gegeben unterstellter, aber nicht gesicherter Sachverhalt – ein Risiko, falls er nicht zutrifft.",
  "Eine verbindliche Vorgabe, die den Lösungsraum einschränkt.",
  "Eine gemessene Kennzahl über das bestehende System.",
  "Eine bereits umgesetzte funktionale Anforderung."
 ],
 correct:[0],
 explanation:"Eine Annahme ist unbestätigt und risikobehaftet. Eine verbindliche, einschränkende Vorgabe ist dagegen eine Randbedingung – nicht dasselbe."},
{id:"c2q14",chapter:2,lz:"LZ 2-1",r:"R1",type:"multi",
 q:"Welche der folgenden sind Qualitätsanforderungen (nicht funktionale)?",
 options:[
  "Die Anwendung verarbeitet 1000 Anfragen pro Sekunde (Performanz).",
  "Sensible Daten werden verschlüsselt gespeichert (Sicherheit).",
  "Neue Entwickler finden sich in unter einem Tag zurecht (Wartbarkeit).",
  "Der Nutzer kann eine Rechnung stornieren."
 ],
 correct:[0,1,2],
 explanation:"Performanz, Sicherheit und Wartbarkeit sind Qualitätsanforderungen. 'Rechnung stornieren' beschreibt eine Funktion – also eine funktionale Anforderung."},
{id:"c2q15",chapter:2,lz:"LZ 2-3",r:"R2",type:"single",
 q:"Welches ist ein Beispiel für eine organisatorische (nicht technische) Randbedingung?",
 options:[
  "Das Projekt muss bis Jahresende mit dem bestehenden Team abgeschlossen sein.",
  "Die Datenhaltung muss in einer relationalen Datenbank erfolgen.",
  "Die Kommunikation zwischen den Diensten läuft über HTTPS.",
  "Die Antwortzeit muss unter 300 ms liegen."
 ],
 correct:[0],
 explanation:"Termin und Teamzusammensetzung sind organisatorische Randbedingungen. Datenbank-/Protokollvorgaben sind technische Randbedingungen; die Antwortzeit ist eine Qualitätsanforderung."},
{id:"c2q16",chapter:2,lz:"LZ 2-2",r:"R1",type:"multi",
 q:"Woraus leiten sich Qualitätsanforderungen typischerweise ab?",
 options:[
  "Aus den Geschäftszielen des Auftraggebers.",
  "Aus den Bedürfnissen und Belangen der Stakeholder.",
  "Aus der bereits gewählten Programmiersprache.",
  "Aus der Anzahl der verfügbaren Entwickler."
 ],
 correct:[0,1],
 explanation:"Qualitätsanforderungen entstehen aus Geschäftszielen und Stakeholder-Belangen. Die Technologiewahl oder die Teamgröße sind keine Quelle von Qualitätsanforderungen."},
{id:"c2q17",chapter:2,lz:"LZ 2-1",r:"R2",type:"single",
 q:"Was unterscheidet eine Anforderung von einer Lösung?",
 options:[
  "Eine Anforderung beschreibt, WAS bzw. WIE GUT etwas sein soll – nicht die konkrete Umsetzung.",
  "Eine Anforderung legt bereits die konkrete Technologie zur Umsetzung fest.",
  "Eine Anforderung ist eine bereits getroffene Entwurfsentscheidung.",
  "Anforderung und Lösung unterscheiden sich nur im Detaillierungsgrad."
 ],
 correct:[0],
 explanation:"Anforderungen sagen, was bzw. wie gut – die Lösung (Architektur) legt das Wie fest. Eine Anforderung schreibt keine Technologie vor, ist keine Entwurfsentscheidung und mehr als nur 'weniger detailliert'."},
{id:"c2q18",chapter:2,lz:"LZ 2-4",r:"R2",type:"single",
 q:"Wozu ist es sinnvoll, auch Nicht-Ziele (bewusst ausgeschlossene Punkte) festzuhalten?",
 options:[
  "Um den Umfang (Scope) zu klären und falsche Erwartungen zu vermeiden.",
  "Um damit die funktionalen Anforderungen vollständig zu ersetzen.",
  "Um dem Team verbindlich Aufgaben für spätere Releases zuzuweisen.",
  "Um die Architektur unabhängig von den Zielen zu machen."
 ],
 correct:[0],
 explanation:"Nicht-Ziele grenzen den Umfang ab und steuern Erwartungen. Sie ersetzen keine Anforderungen, sind keine Release-Planung und entkoppeln die Architektur nicht von den Zielen."},
{id:"c2q19",chapter:2,lz:"LZ 2-2",r:"R1",type:"multi",
 q:"Welche Angaben helfen, eine Qualitätsanforderung überprüfbar zu machen?",
 options:[
  "Ein konkreter Auslöser/Stimulus.",
  "Der Kontext bzw. die Umgebung.",
  "Ein messbares Antwortmaß.",
  "Eine grobe verbale Einschätzung ohne Zahlenwert."
 ],
 correct:[0,1,2],
 explanation:"Überprüfbar wird eine Qualitätsanforderung durch Auslöser, Kontext und ein messbares Antwortmaß. Eine grobe verbale Einschätzung ohne Zahlen ist gerade nicht überprüfbar."},
{id:"c2q20",chapter:2,lz:"LZ 2-4",r:"R2",type:"single",
 q:"Was ist bei konkurrierenden Interessen verschiedener Stakeholder nötig?",
 options:[
  "Ein bewusstes Abwägen und Priorisieren der widersprüchlichen Belange.",
  "Jeden genannten Wunsch unverändert und vollständig umsetzen.",
  "Die Entscheidung allein dem technisch lautesten Stakeholder überlassen.",
  "Konflikte ausklammern, bis sie sich im Betrieb von selbst lösen."
 ],
 correct:[0],
 explanation:"Konkurrierende Belange erfordern bewusstes Abwägen und Priorisieren. Alles umzusetzen ist unmöglich, Einzelne zu bevorzugen unausgewogen, und Aussitzen löst Konflikte nicht."},
/* ===== Kapitel 3 ===== */
{id:"c3q1",chapter:3,lz:"LZ 3-3",r:"R1",type:"multi",
 q:"Welche Aussagen zu Kopplung und Kohäsion im Entwurf treffen zu?",
 options:[
  "Lose Kopplung zwischen Bausteinen ist erstrebenswert.",
  "Hohe Kohäsion innerhalb eines Bausteins ist erstrebenswert.",
  "Hohe Kopplung erleichtert unabhängige Änderungen einzelner Bausteine.",
  "Niedrige Kohäsion verbessert die Wiederverwendbarkeit eines Bausteins."
 ],
 correct:[0,1],
 explanation:"Ziel ist lose Kopplung und hohe Kohäsion. Hohe Kopplung erschwert isolierte Änderungen, niedrige Kohäsion verschlechtert Verständlichkeit und Wiederverwendung."},
{id:"c3q2",chapter:3,lz:"LZ 3-3",r:"R1",type:"single",
 q:"Was besagt das Prinzip 'Information Hiding' (Geheimnisprinzip)?",
 options:[
  "Interne Implementierungsdetails werden hinter einer stabilen Schnittstelle verborgen.",
  "Alle Attribute werden öffentlich gemacht, damit andere Bausteine direkt zugreifen können.",
  "Die Schnittstelle wird bei jeder internen Änderung zwangsläufig mit angepasst.",
  "Der Quellcode wird verschlüsselt abgelegt."
 ],
 correct:[0],
 explanation:"Information Hiding verbirgt Interna hinter einer stabilen Schnittstelle, sodass interne Änderungen die Nutzer nicht betreffen. Es geht nicht um öffentliche Attribute, mitgeänderte Schnittstellen oder Verschlüsselung."},
{id:"c3q3",chapter:3,lz:"LZ 3-3",r:"R2",type:"single",
 q:"Wofür steht das 'S' in den SOLID-Prinzipien?",
 options:[
  "Single Responsibility Principle – ein Baustein hat genau eine Verantwortlichkeit (einen Änderungsgrund).",
  "Separation of Concerns – Belange werden getrennt.",
  "Stateless Principle – Bausteine halten keinen Zustand.",
  "Substitution Principle – Subtypen ersetzen ihre Basistypen."
 ],
 correct:[0],
 explanation:"Das S steht für Single Responsibility. Separation of Concerns ist ein anderes Prinzip (nicht Teil von SOLID), und Substituierbarkeit ist das L (Liskov)."},
{id:"c3q4",chapter:3,lz:"LZ 3-4",r:"R1",type:"multi",
 q:"Welche Aussagen zur Schichtenarchitektur (Layers) treffen zu?",
 options:[
  "Höhere Schichten nutzen Dienste tieferliegender Schichten.",
  "Die geordnete Abhängigkeitsrichtung erleichtert Austausch und Verständnis.",
  "Jede Schicht darf beliebig auf jede andere Schicht zugreifen.",
  "Tiefere Schichten rufen bevorzugt höhere Schichten auf."
 ],
 correct:[0,1],
 explanation:"Obere Schichten nutzen definierte Dienste darunter; die geordnete Richtung schafft Struktur. Beliebige oder umgekehrte Zugriffe widersprechen dem Muster."},
{id:"c3q5",chapter:3,lz:"LZ 3-4",r:"R2",type:"multi",
 q:"Welche Aussagen zu Ports & Adapters (hexagonale Architektur) treffen zu?",
 options:[
  "Die fachliche Kernlogik wird von Technik und Infrastruktur entkoppelt.",
  "Äußere Belange (UI, DB, APIs) werden über austauschbare Adapter angebunden.",
  "Die Fachlogik hängt direkt von der konkreten Datenbanktechnologie ab.",
  "Ziel ist die Bündelung von UI, Logik und Persistenz in einer Schicht."
 ],
 correct:[0,1],
 explanation:"Ports & Adapters isoliert die Domänenlogik von Technik und bindet Äußeres über austauschbare Adapter an. Eine direkte DB-Abhängigkeit oder das Bündeln aller Belange widerspricht dem."},
{id:"c3q6",chapter:3,lz:"LZ 3-4",r:"R2",type:"multi",
 q:"Welche Aussagen treffen typischerweise auf Microservices zu?",
 options:[
  "Sie sind unabhängig deploybar und fachlich geschnitten.",
  "Sie erhöhen die betriebliche Komplexität (Verteilung, Monitoring).",
  "Sie teilen sich zwingend eine gemeinsame Datenbank.",
  "Sie kommunizieren ausschließlich über direkte In-Process-Aufrufe."
 ],
 correct:[0,1],
 explanation:"Microservices sind unabhängig deploybar und fachlich geschnitten und erhöhen die Betriebskomplexität. Eine gemeinsame DB oder reine In-Process-Aufrufe widersprechen dem Ansatz (Kommunikation über das Netz)."},
{id:"c3q7",chapter:3,lz:"LZ 3-3",r:"R1",type:"multi",
 q:"Welche gehören zu den grundlegenden Entwurfsprinzipien?",
 options:[
  "Trennung der Zuständigkeiten (Separation of Concerns).",
  "Abstraktion.",
  "Modularisierung und Kapselung.",
  "Frühzeitige Optimierung um jeden Preis."
 ],
 correct:[0,1,2],
 explanation:"SoC, Abstraktion und Modularisierung sind grundlegende Prinzipien. 'Premature Optimization' ist dagegen ein bekanntes Anti-Muster."},
{id:"c3q8",chapter:3,lz:"LZ 3-2",r:"R1",type:"multi",
 q:"Welche der folgenden sind typische Querschnittskonzepte (Cross-Cutting Concerns)?",
 options:[
  "Persistenz.",
  "Sicherheit und Authentifizierung.",
  "Logging und Fehlerbehandlung.",
  "Die Berechnung des fachlichen Rechnungsbetrags."
 ],
 correct:[0,1,2],
 explanation:"Persistenz, Sicherheit und Logging/Fehlerbehandlung betreffen viele Bausteine übergreifend. Die Betragsberechnung ist eine spezifische Fachfunktion, kein Querschnittskonzept."},
{id:"c3q9",chapter:3,lz:"LZ 3-1",r:"R2",type:"single",
 q:"Worin unterscheiden sich Top-down- und Bottom-up-Entwurf?",
 options:[
  "Top-down zerlegt vom Ganzen ins Detail; Bottom-up setzt aus vorhandenen Detailbausteinen zusammen.",
  "Top-down beginnt bei den Detailbausteinen, Bottom-up beim Gesamtsystem.",
  "Beide Vorgehensweisen schließen sich gegenseitig aus und dürfen nie kombiniert werden.",
  "Top-down betrifft nur die Datenbank, Bottom-up nur die Oberfläche."
 ],
 correct:[0],
 explanation:"Top-down = vom Ganzen ins Detail, Bottom-up = umgekehrt; beide werden oft kombiniert. Die Begriffe sind hier nicht vertauscht und nicht auf DB/UI beschränkt."},
{id:"c3q10",chapter:3,lz:"LZ 3-1",r:"R2",type:"single",
 q:"Was ist der Nutzen von Abstraktion und Modularisierung im Entwurf?",
 options:[
  "Sie machen Komplexität beherrschbar und ermöglichen unabhängige Entwicklung und Änderung.",
  "Sie steigern garantiert die Laufzeitperformanz jedes Systems.",
  "Sie machen Schnittstellen zwischen Bausteinen überflüssig.",
  "Sie erhöhen bewusst die Kopplung, um Aufrufe zu beschleunigen."
 ],
 correct:[0],
 explanation:"Abstraktion und Modularisierung beherrschen Komplexität und erlauben unabhängiges Arbeiten. Sie garantieren keine Performance, machen Schnittstellen nicht überflüssig und erhöhen nicht die Kopplung."},
{id:"c3q11",chapter:3,lz:"LZ 3-4",r:"R2",type:"single",
 q:"Wofür eignet sich das Muster 'Pipes and Filters'?",
 options:[
  "Für Datenverarbeitung in Schritten, bei der die Ausgabe eines Filters die Eingabe des nächsten ist.",
  "Für einen zentralen Filter, der über die Zugriffsrechte aller Nutzer entscheidet.",
  "Dafür, dass alle Schritte gemeinsam auf einen geteilten globalen Zustand zugreifen.",
  "Dafür, dass die Schritte zwingend rückwärts vom Ergebnis zur Eingabe laufen."
 ],
 correct:[0],
 explanation:"Pipes and Filters verkettet unabhängige Verarbeitungsschritte über Datenströme (Ausgabe wird Eingabe). Es geht nicht um Zugriffsrechte, geteilten globalen Zustand oder Rückwärtslauf."},
{id:"c3q12",chapter:3,lz:"LZ 3-4",r:"R2",type:"single",
 q:"Was ist ein zentraler Unterschied zwischen synchroner und asynchroner Kommunikation?",
 options:[
  "Bei synchroner Kommunikation wartet der Aufrufer auf die Antwort, bei asynchroner nicht.",
  "Asynchrone Kommunikation ist grundsätzlich immer schneller als synchrone.",
  "Synchrone Kommunikation funktioniert nur lokal, asynchrone nur über das Netzwerk.",
  "Bei asynchroner Kommunikation blockiert der Aufrufer bis zur Antwort."
 ],
 correct:[0],
 explanation:"Synchron = Aufrufer wartet (blockiert), asynchron = zeitlich entkoppelt. Asynchron ist nicht pauschal schneller, beide gehen lokal wie im Netz, und Blockieren ist gerade synchron."},
{id:"c3q13",chapter:3,lz:"LZ 3-3",r:"R2",type:"multi",
 q:"Welche Aussagen zu technischen Schulden (Technical Debt) treffen zu?",
 options:[
  "Es sind aufgeschobene Kompromisse oder Mängel in Code bzw. Architektur.",
  "Unbehandelt erschweren und verteuern sie künftige Änderungen.",
  "Es handelt sich um die Lizenz- und Betriebskosten der eingesetzten Software.",
  "Sie verschwinden mit der Zeit von selbst, ohne Zutun des Teams."
 ],
 correct:[0,1],
 explanation:"Technische Schulden sind aufgeschobene Mängel, die spätere Änderungen verteuern. Sie sind keine Lizenz-/Betriebskosten und lösen sich nicht von selbst auf."},
{id:"c3q14",chapter:3,lz:"LZ 3-3",r:"R2",type:"single",
 q:"Was fordert das Dependency-Inversion-Prinzip?",
 options:[
  "High-Level- und Low-Level-Module sollen von Abstraktionen abhängen, nicht von konkreten Implementierungen.",
  "Low-Level-Module sollen direkt von den High-Level-Modulen abhängen.",
  "Abhängigkeiten sollen ganz vermieden werden, indem keine Schnittstellen genutzt werden.",
  "Details sollen von anderen Details abhängen, um Umwege zu vermeiden."
 ],
 correct:[0],
 explanation:"Dependency Inversion: beide Ebenen hängen von Abstraktionen ab, nicht Details von Details. Es geht nicht um direkte High-/Low-Kopplung oder das Weglassen von Schnittstellen."},
{id:"k3",chapter:3,lz:"LZ 3-4",r:"R2",type:"k",points:2,
 q:"Ordnen Sie jeden Begriff zu: Architekturmuster oder Entwurfsprinzip?",
 categories:["Architekturmuster","Entwurfsprinzip"],
 rows:[
  {text:"Schichten (Layers)",cat:0},
  {text:"Single Responsibility Principle",cat:1},
  {text:"Ports & Adapters (Hexagonal)",cat:0},
  {text:"Information Hiding",cat:1}
 ],
 explanation:"Layers und Ports & Adapters sind Architekturmuster (Struktur des Gesamtsystems). SRP und Information Hiding sind Entwurfsprinzipien (Leitlinien für guten Entwurf)."},
{id:"c3q15",chapter:3,lz:"LZ 3-3",r:"R1",type:"single",
 q:"Was besagt das Prinzip 'Separation of Concerns' (Trennung der Zuständigkeiten)?",
 options:[
  "Unterschiedliche Belange werden in getrennten, jeweils zuständigen Bausteinen behandelt.",
  "Möglichst viele Belange werden in einem Baustein gebündelt, um Aufrufe zu sparen.",
  "Belange werden nach Entwickler-Zuständigkeit statt nach Sachthema getrennt.",
  "Fachlogik und Technik werden bewusst vermischt, um Schichten zu sparen."
 ],
 correct:[0],
 explanation:"SoC trennt verschiedene Belange (Fachlogik, Persistenz, UI …) in eigene Bausteine. Bündeln, Trennung nach Person oder Vermischen widersprechen dem Prinzip."},
{id:"c3q16",chapter:3,lz:"LZ 3-3",r:"R1",type:"single",
 q:"Wofür steht das Prinzip DRY?",
 options:[
  "Wissen bzw. Logik soll nicht dupliziert, sondern an einer einzigen Stelle geführt werden.",
  "Jede Funktionalität soll aus Sicherheitsgründen an mehreren Stellen redundant implementiert werden.",
  "Zwei zufällig ähnliche Codestellen müssen immer sofort zusammengeführt werden.",
  "Das Prinzip betrifft ausschließlich doppelte Kommentare, nicht doppelte Logik."
 ],
 correct:[0],
 explanation:"DRY führt Wissen/Logik an einer Stelle, damit Änderungen zentral erfolgen. Redundanz als 'Sicherheit', das Zusammenführen zufällig ähnlicher Stellen oder eine Beschränkung auf Kommentare treffen den Kern nicht."},
{id:"c3q17",chapter:3,lz:"LZ 3-3",r:"R2",type:"single",
 q:"Was besagt das Prinzip YAGNI?",
 options:[
  "Keine Funktionalität auf Vorrat bauen, die aktuell (noch) nicht gebraucht wird.",
  "Möglichst viele Erweiterungspunkte vorab einbauen, um zukunftssicher zu sein.",
  "Jede Anforderung von Anfang an maximal generisch umsetzen.",
  "Einmal umgesetzte Funktionen dürfen nie wieder entfernt werden."
 ],
 correct:[0],
 explanation:"YAGNI: nur bauen, was aktuell gebraucht wird. Erweiterungspunkte oder Generik auf Vorrat widersprechen ihm; das Entfernen von Funktionen ist ein anderes Thema."},
{id:"c3q18",chapter:3,lz:"LZ 3-4",r:"R1",type:"multi",
 q:"Welche Aussagen zu Architekturmustern treffen zu?",
 options:[
  "Sie sind bewährte, wiederverwendbare Lösungsschablonen für wiederkehrende Strukturprobleme.",
  "Sie schaffen eine gemeinsame Sprache und müssen zum konkreten Problem passen.",
  "Sie sind konkrete, nur einmal verwendbare Code-Ausschnitte.",
  "Ihr Einsatz garantiert unabhängig vom Kontext die beste Lösung."
 ],
 correct:[0,1],
 explanation:"Architekturmuster sind bewährte, wiederverwendbare Schablonen und eine gemeinsame Sprache – müssen aber passen. Sie sind kein Einmal-Code und garantieren nicht kontextunabhängig die beste Lösung."},
{id:"c3q19",chapter:3,lz:"LZ 3-4",r:"R2",type:"single",
 q:"Was trennt das Muster Model-View-Controller (MVC)?",
 options:[
  "Datenmodell, Darstellung (View) und Steuerung/Interaktion (Controller).",
  "Präsentations-, Anwendungs- und Datenbankschicht (drei technische Schichten).",
  "Es fasst Modell und View bewusst in einer Komponente zusammen.",
  "Die drei Phasen Compile, Verify und Commit."
 ],
 correct:[0],
 explanation:"MVC trennt Modell, View und Controller. Das ist nicht dasselbe wie technische Schichten, führt Modell/View nicht zusammen und hat nichts mit Compile/Verify/Commit zu tun."},
{id:"c3q20",chapter:3,lz:"LZ 3-3",r:"R1",type:"multi",
 q:"Welche Maßnahmen fördern lose Kopplung?",
 options:[
  "Kommunikation über klar definierte Schnittstellen bzw. Abstraktionen.",
  "Ereignisbasierte (asynchrone) Kommunikation zwischen Bausteinen.",
  "Direkter Zugriff auf interne Felder anderer Bausteine für kürzere Wege.",
  "Gemeinsame globale, veränderliche Variablen für den Datenaustausch."
 ],
 correct:[0,1],
 explanation:"Schnittstellen/Abstraktionen und ereignisbasierte Kommunikation senken die Kopplung. Direkter Zugriff auf Interna und globale veränderliche Variablen erhöhen sie."},
{id:"c3q21",chapter:3,lz:"LZ 3-3",r:"R2",type:"single",
 q:"Warum sollten zyklische Abhängigkeiten zwischen Bausteinen vermieden werden?",
 options:[
  "Sie erschweren Verständnis, isoliertes Testen sowie unabhängige Änderung und Wiederverwendung.",
  "Sie sind in Schichtenarchitekturen ausdrücklich vorgesehen und erwünscht.",
  "Sie verbessern die Performance, weil Bausteine sich gegenseitig direkt aufrufen.",
  "Sie betreffen nur die Kompilierzeit, nicht die Wartbarkeit."
 ],
 correct:[0],
 explanation:"Zyklen koppeln Bausteine gegenseitig fest und erschweren Tests und Änderungen. Sie sind in Schichten unerwünscht, kein Performancevorteil und betreffen sehr wohl die Wartbarkeit."},
{id:"c3q22",chapter:3,lz:"LZ 3-3",r:"R2",type:"multi",
 q:"Welche Aussagen zu Refactoring treffen zu?",
 options:[
  "Es verbessert die interne Struktur des Codes.",
  "Das nach außen beobachtbare Verhalten bleibt dabei unverändert.",
  "Dabei werden gezielt neue fachliche Funktionen ergänzt.",
  "Der Code wird vollständig gelöscht und von Grund auf neu geschrieben."
 ],
 correct:[0,1],
 explanation:"Refactoring verbessert die innere Struktur bei gleichem äußeren Verhalten. Neue Funktionen zu ergänzen ist Feature-Arbeit, alles neu zu schreiben ist ein Rewrite – beides ist kein Refactoring."},
{id:"c3q23",chapter:3,lz:"LZ 3-3",r:"R1",type:"multi",
 q:"Warum programmiert man bevorzugt gegen Schnittstellen statt gegen konkrete Implementierungen?",
 options:[
  "Konkrete Implementierungen lassen sich dadurch leichter austauschen.",
  "Die Kopplung an Implementierungsdetails sinkt.",
  "Aufrufe über eine Schnittstelle sind zur Laufzeit grundsätzlich schneller.",
  "Dadurch werden zusätzliche Tests überflüssig."
 ],
 correct:[0,1],
 explanation:"Schnittstellen entkoppeln und machen Implementierungen austauschbar. Ein pauschaler Performancevorteil besteht nicht, und Tests werden dadurch nicht überflüssig."},
{id:"k6",chapter:3,lz:"LZ 3-3",r:"R1",type:"k",points:2,
 q:"Ordnen Sie zu: erhöht die Kopplung oder reduziert die Kopplung?",
 categories:["Erhöht Kopplung","Reduziert Kopplung"],
 rows:[
  {text:"Direkter Zugriff auf interne Details eines anderen Bausteins",cat:0},
  {text:"Kommunikation nur über eine klar definierte Schnittstelle",cat:1},
  {text:"Gemeinsame globale, veränderliche Variablen",cat:0},
  {text:"Dependency Injection statt fester Instanziierung",cat:1}
 ],
 explanation:"Direkter Zugriff auf Interna und globale veränderliche Zustände erhöhen die Kopplung. Klare Schnittstellen und Dependency Injection verringern sie."},
{id:"k8",chapter:3,lz:"LZ 3-3",r:"R2",type:"k",points:2,
 q:"Gehört das jeweilige Prinzip zu SOLID?",
 categories:["Teil von SOLID","Nicht Teil von SOLID"],
 rows:[
  {text:"Single Responsibility Principle",cat:0},
  {text:"Open/Closed Principle",cat:0},
  {text:"Dependency Inversion Principle",cat:0},
  {text:"Don't Repeat Yourself (DRY)",cat:1}
 ],
 explanation:"SOLID = SRP, OCP, LSP, ISP, DIP. DRY ist ein wichtiges Prinzip, gehört aber nicht zu SOLID."},
{id:"c3q24",chapter:3,lz:"LZ 3-3",r:"R1",type:"single",
 q:"Was besagt das Open/Closed-Prinzip (OCP)?",
 options:[
  "Bausteine sollen offen für Erweiterung, aber geschlossen für Änderung sein.",
  "Bestehender Code soll für neues Verhalten möglichst direkt geändert werden.",
  "Alle Klassen sollen als final/geschlossen deklariert und nie erweitert werden.",
  "Der Quellcode soll öffentlich (offen) einsehbar sein."
 ],
 correct:[0],
 explanation:"OCP: neues Verhalten durch Erweiterung, ohne bestehenden erprobten Code zu ändern. Es meint weder direktes Ändern, noch 'alles final', noch offenen Quellcode."},
{id:"c3q25",chapter:3,lz:"LZ 3-3",r:"R2",type:"single",
 q:"Was empfiehlt das Interface-Segregation-Prinzip (ISP)?",
 options:[
  "Schmale, rollenspezifische Schnittstellen, damit Clients nur von dem abhängen, was sie wirklich nutzen.",
  "Möglichst viele Methoden in einer zentralen Schnittstelle bündeln, um Konsistenz zu sichern.",
  "Schnittstellen nach technischen Schichten statt nach Client-Rollen schneiden.",
  "Konkrete Implementierungen direkt ansprechen, um Umwege über Schnittstellen zu vermeiden."
 ],
 correct:[0],
 explanation:"ISP: keine Abhängigkeit von ungenutzten Methoden → schmale, rollenspezifische Schnittstellen. Eine große Sammel-Schnittstelle ist genau das Gegenteil."},
{id:"c3q26",chapter:3,lz:"LZ 3-3",r:"R2",type:"single",
 q:"Was fordert das Liskovsche Substitutionsprinzip (LSP)?",
 options:[
  "Objekte eines Subtyps müssen anstelle ihres Basistyps verwendbar sein, ohne die Korrektheit zu brechen.",
  "Ein Subtyp darf die Vorbedingungen seiner Methoden gegenüber dem Basistyp verschärfen.",
  "Basistypen müssen von ihren Subtypen ableiten, nicht umgekehrt.",
  "Vererbung soll grundsätzlich durch Kopieren von Code ersetzt werden."
 ],
 correct:[0],
 explanation:"LSP: ein Subtyp muss den Basistyp überall ersetzen können. Vorbedingungen zu verschärfen bricht LSP; die Ableitungsrichtung ist nicht umgekehrt; mit Code-Kopieren hat es nichts zu tun."},
{id:"c3q27",chapter:3,lz:"LZ 3-4",r:"R2",type:"single",
 q:"Was kennzeichnet ein ereignisgetriebenes (Publish/Subscribe-)Muster?",
 options:[
  "Sender veröffentlichen Ereignisse, ohne die Empfänger zu kennen; Empfänger reagieren darauf – lose gekoppelt.",
  "Jeder Sender kennt und ruft seine Empfänger direkt und synchron auf.",
  "Es darf pro Ereignis immer nur genau einen Empfänger geben.",
  "Empfänger fragen den Sender in festen Intervallen aktiv ab (Polling)."
 ],
 correct:[0],
 explanation:"Bei Publish/Subscribe sind Sender und Empfänger über Ereignisse entkoppelt (auch mehrere Empfänger möglich). Direkter Aufruf, Ein-Empfänger-Zwang oder Polling beschreiben es nicht."},
{id:"c3q28",chapter:3,lz:"LZ 3-4",r:"R2",type:"single",
 q:"Was beschreibt das Client-Server-Muster?",
 options:[
  "Anfragende Clients nutzen Dienste eines bereitstellenden Servers über eine definierte Schnittstelle.",
  "Alle Knoten sind gleichrangig und bieten sich gegenseitig dieselben Dienste an (Peer-to-Peer).",
  "Der Server initiiert von sich aus alle Anfragen an die Clients.",
  "Client und Server müssen zwingend auf demselben Rechner laufen."
 ],
 correct:[0],
 explanation:"Im Client-Server-Muster fordert der Client Dienste beim Server an. Gleichrangige Knoten sind Peer-to-Peer; der Server initiiert nicht die Anfragen; getrennte Rechner sind möglich."},
{id:"c3q29",chapter:3,lz:"LZ 3-3",r:"R1",type:"single",
 q:"Was bedeutet die Heuristik 'Komposition vor Vererbung'?",
 options:[
  "Verhalten wird oft besser durch Zusammensetzen von Objekten erreicht als durch tiefe Vererbungshierarchien.",
  "Vererbung ist grundsätzlich verboten und muss immer vermieden werden.",
  "Tiefe Vererbungshierarchien sind flexibler als Komposition.",
  "Komposition bedeutet, Basisklassen möglichst tief zu verschachteln."
 ],
 correct:[0],
 explanation:"Komposition ist meist flexibler und weniger fragil als tiefe Vererbung – eine Heuristik, kein Verbot. Tiefe Vererbung ist nicht flexibler, und Komposition ist nicht 'tiefe Basisklassen'."},
{id:"c3q30",chapter:3,lz:"LZ 3-4",r:"R2",type:"multi",
 q:"Welche Aussagen zu zustandslosen (stateless) Diensten treffen zu?",
 options:[
  "Anfragen können auf beliebige, gleichwertige Instanzen verteilt werden.",
  "Das erleichtert horizontale Skalierung und Lastverteilung.",
  "Zustandslose Dienste können grundsätzlich keine Daten verarbeiten.",
  "Der Sitzungszustand wird fest an eine bestimmte Instanz gebunden."
 ],
 correct:[0,1],
 explanation:"Ohne gebundenen Sitzungszustand kann jede Instanz jede Anfrage bearbeiten → einfache Skalierung. Sie verarbeiten sehr wohl Daten, und feste Instanz-Bindung wäre gerade zustandsbehaftet."},
{id:"c3q31",chapter:3,lz:"LZ 3-3",r:"R1",type:"multi",
 q:"Welche Eigenschaften fördern die Wartbarkeit/Änderbarkeit eines Systems?",
 options:[
  "Modularisierung in überschaubare Bausteine.",
  "Klar definierte, stabile Schnittstellen.",
  "Geringe Kopplung zwischen den Bausteinen.",
  "Möglichst viele geteilte globale Variablen für kurzen Datenaustausch."
 ],
 correct:[0,1,2],
 explanation:"Modularität, stabile Schnittstellen und geringe Kopplung fördern die Wartbarkeit. Geteilte globale Variablen erhöhen dagegen die Kopplung und erschweren Änderungen."},
{id:"c3q32",chapter:3,lz:"LZ 3-2",r:"R2",type:"single",
 q:"Wozu dienen Resilienz-Muster wie Timeout, Retry oder Circuit Breaker?",
 options:[
  "Zum robusten Umgang mit Fehlern und Ausfällen, besonders in verteilten Systemen.",
  "Zur spürbaren Beschleunigung fehlerfreier Aufrufe im Normalbetrieb.",
  "Um zu garantieren, dass entfernte Aufrufe nie fehlschlagen.",
  "Um die Notwendigkeit, Fehler überhaupt zu behandeln, zu ersetzen."
 ],
 correct:[0],
 explanation:"Timeout/Retry/Circuit Breaker helfen, mit Fehlern und Ausfällen umzugehen. Sie beschleunigen den Normalfall nicht, garantieren keine Fehlerfreiheit und ersetzen die Fehlerbehandlung nicht."},
{id:"k9",chapter:3,lz:"LZ 3-4",r:"R2",type:"k",points:2,
 q:"Synchrone oder asynchrone Kommunikation?",
 categories:["Synchron","Asynchron"],
 rows:[
  {text:"Der Aufrufer wartet blockierend auf die Antwort.",cat:0},
  {text:"Eine Nachricht wird in eine Queue gelegt, der Sender macht sofort weiter.",cat:1},
  {text:"Direkter, blockierender Methoden-/Funktionsaufruf.",cat:0},
  {text:"Ein Ereignis wird veröffentlicht, Empfänger reagieren später.",cat:1}
 ],
 explanation:"Synchron = der Aufrufer wartet blockierend auf die Antwort. Asynchron = Sender und Empfänger sind zeitlich entkoppelt (Queue/Events)."},
{id:"c3q33",chapter:3,lz:"LZ 3-4",r:"R2",type:"single",
 q:"Wozu dient das Fassaden-Muster (Facade)?",
 options:[
  "Es bietet einen vereinfachten, einheitlichen Zugang zu einem komplexeren Subsystem.",
  "Es übersetzt zwischen zwei zueinander inkompatiblen Schnittstellen.",
  "Es erzeugt für jeden Aufruf ein neues Objekt einer Produktfamilie.",
  "Es legt den internen Aufbau des Subsystems für alle Nutzer offen."
 ],
 correct:[0],
 explanation:"Eine Fassade vereinfacht den Zugang zu einem Subsystem und verbirgt dessen Komplexität. Das Übersetzen inkompatibler Schnittstellen ist der Adapter; Objekte erzeugen ist die Fabrik."},
{id:"c3q34",chapter:3,lz:"LZ 3-1",r:"R1",type:"single",
 q:"Was ist ein Modul (Baustein) im Sinne der Modularisierung?",
 options:[
  "Eine in sich geschlossene Einheit mit klar umrissener Aufgabe und definierter Schnittstelle.",
  "Eine beliebige Gruppierung von Dateien im selben Verzeichnis, ohne gemeinsame Aufgabe.",
  "Eine einzelne Funktion, die genau eine Berechnung ausführt.",
  "Ein laufender Prozess auf einem Server."
 ],
 correct:[0],
 explanation:"Ein Modul bündelt zusammengehörige Funktionalität (hohe Kohäsion) hinter einer Schnittstelle. Ein Verzeichnis, eine Einzelfunktion oder ein Laufzeitprozess sind etwas anderes."},
{id:"c3q35",chapter:3,lz:"LZ 3-4",r:"R2",type:"multi",
 q:"Welche Aussagen zum Trade-off zwischen Monolith und Microservices treffen zu?",
 options:[
  "Ein Monolith ist meist einfacher zu betreiben und end-to-end zu testen.",
  "Microservices sind unabhängig deploy- und skalierbar, aber betrieblich komplexer.",
  "Microservices sind in jeder Hinsicht und in jedem Projekt die bessere Wahl.",
  "Ein Monolith kann grundsätzlich nicht in Module gegliedert werden."
 ],
 correct:[0,1],
 explanation:"Monolith = einfacherer Betrieb/Test; Microservices = unabhängige Skalierung/Deployment bei höherer Betriebskomplexität. Microservices sind nicht pauschal besser, und Monolithen können sehr wohl modular sein."},
{id:"c3q36",chapter:3,lz:"LZ 3-4",r:"R1",type:"single",
 q:"Warum nutzt man bewährte Architektur-/Entwurfsmuster, statt jede Lösung neu zu erfinden?",
 options:[
  "Weil sie erprobt sind, Risiko senken und über bekannte Begriffe die Kommunikation erleichtern.",
  "Weil ein einmal gewähltes Muster unabhängig vom Problem immer passt.",
  "Weil der Einsatz von Mustern eigene Entwurfsentscheidungen überflüssig macht.",
  "Weil möglichst viele Muster gleichzeitig ein System automatisch verbessern."
 ],
 correct:[0],
 explanation:"Muster bündeln bewährtes Wissen und schaffen eine gemeinsame Sprache – müssen aber zum Problem passen. Sie ersetzen keine Entscheidungen, und ihre bloße Menge verbessert nichts."},
{id:"c3q37",chapter:3,lz:"LZ 3-1",r:"R2",type:"single",
 q:"Was empfiehlt ein fachlich orientierter Schnitt (z. B. bei Domain-Driven Design)?",
 options:[
  "Bausteine entlang fachlicher Grenzen/Domänen schneiden, nicht nur nach technischen Schichten.",
  "Bausteine strikt nach technischen Schichten (UI/Logik/DB) statt nach Fachlichkeit schneiden.",
  "Die gesamte Fachlichkeit in einem einzigen zentralen Modul bündeln.",
  "Den Schnitt an der Ordnerstruktur des Repositories ausrichten."
 ],
 correct:[0],
 explanation:"Ein fachlicher Schnitt orientiert sich an Domänen bzw. Bounded Contexts, nicht rein an technischen Schichten. Ein zentrales Fach-Modul oder die Ordnerstruktur sind kein fachlicher Schnitt."},
{id:"c3q38",chapter:3,lz:"LZ 3-3",r:"R2",type:"single",
 q:"Was bedeutet Kapselung (Encapsulation)?",
 options:[
  "Daten und die zugehörigen Operationen bündeln und den internen Zustand nur über eine Schnittstelle zugänglich machen.",
  "Zusammengehörige Klassen in einem gemeinsamen Paket bzw. Namensraum gruppieren.",
  "Den Quellcode gegen unbefugtes Auslesen verschlüsseln.",
  "Eine gemeinsame Oberklasse für verwandte Typen einführen."
 ],
 correct:[0],
 explanation:"Kapselung bündelt Daten und Verhalten und verbirgt den inneren Zustand. Paketierung, Verschlüsselung und Vererbung sind jeweils andere Konzepte."},
{id:"c3q39",chapter:3,lz:"LZ 3-4",r:"R2",type:"single",
 q:"Wozu dient das Adapter-Muster?",
 options:[
  "Es verbindet zwei zueinander inkompatible Schnittstellen, sodass sie zusammenarbeiten können.",
  "Es bietet einen vereinfachten Zugang zu einem komplexen Subsystem.",
  "Es entkoppelt Sender und Empfänger vollständig über Ereignisse.",
  "Es stellt sicher, dass es von einer Klasse nur eine einzige Instanz gibt."
 ],
 correct:[0],
 explanation:"Ein Adapter übersetzt zwischen einer erwarteten und einer vorhandenen Schnittstelle. Vereinfachter Zugang = Fassade; Ereignis-Entkopplung = Publish/Subscribe; Ein-Instanz = Singleton."},
{id:"c3q40",chapter:3,lz:"LZ 3-1",r:"R1",type:"multi",
 q:"Welche gehören zu den Zielen der Modularisierung?",
 options:[
  "Unabhängige Entwicklung einzelner Teile.",
  "Wiederverwendbarkeit von Bausteinen.",
  "Begrenzte Auswirkung von Änderungen (lokale Änderbarkeit).",
  "Eine möglichst enge Verflechtung der Bausteine untereinander."
 ],
 correct:[0,1,2],
 explanation:"Modularisierung ermöglicht unabhängige Entwicklung, Wiederverwendung und lokal begrenzte Änderungen. Enge Verflechtung (hohe Kopplung) ist gerade das Gegenteil des Ziels."},
{id:"c3q41",chapter:3,lz:"LZ 3-3",r:"R2",type:"multi",
 q:"Welche Aussagen zum Trade-off bei starker Wiederverwendung treffen zu?",
 options:[
  "Wiederverwendbare Bausteine werden oft allgemeiner und dadurch komplexer.",
  "Viele Nutzer eines Bausteins können die Kopplung an ihn erhöhen.",
  "Wiederverwendung hat ausschließlich Vorteile und keinerlei Kosten.",
  "Wiederverwendung ist im Sinne von DRY grundsätzlich zu vermeiden."
 ],
 correct:[0,1],
 explanation:"Wiederverwendung kann Bausteine allgemeiner/komplexer machen und die Kopplung an sie erhöhen – daher abwägen. Sie ist nicht kostenlos, aber auch nicht zu vermeiden (DRY spricht sogar dafür)."},
{id:"k12",chapter:3,lz:"LZ 3-3",r:"R1",type:"k",points:2,
 q:"Fördert das Merkmal die Wartbarkeit oder schadet es ihr?",
 categories:["Fördert Wartbarkeit","Schadet Wartbarkeit"],
 rows:[
  {text:"Klar definierte, stabile Schnittstellen",cat:0},
  {text:"Hohe Kopplung zwischen vielen Bausteinen",cat:1},
  {text:"Hohe Kohäsion innerhalb der Bausteine",cat:0},
  {text:"Viel duplizierter Code (Verletzung von DRY)",cat:1}
 ],
 explanation:"Klare Schnittstellen und hohe Kohäsion fördern die Wartbarkeit. Hohe Kopplung und Duplizierung erschweren Änderungen."},
/* ===== Kapitel 4 ===== */
{id:"c4q1",chapter:4,lz:"LZ 4-1",r:"R1",type:"multi",
 q:"Welche sind zentrale Zwecke von Architekturdokumentation?",
 options:[
  "Kommunikation und gemeinsames Verständnis unter den Stakeholdern.",
  "Grundlage für Einarbeitung, Wartung und fundierte Entscheidungen.",
  "Nachvollziehbarkeit wichtiger Architekturentscheidungen – auch später noch.",
  "Sie ersetzt den Quellcode als maßgebliche Quelle des tatsächlichen Systemverhaltens."
 ],
 correct:[0,1,2],
 explanation:"Doku dient Kommunikation, Einarbeitung/Wartung und Nachvollziehbarkeit von Entscheidungen. Sie ersetzt aber nicht den Code – das tatsächliche Verhalten steckt im Code."},
{id:"c4q2",chapter:4,lz:"LZ 4-2",r:"R2",type:"single",
 q:"Was ist arc42?",
 options:[
  "Ein bewährtes Template bzw. Gliederungsschema zur Dokumentation von Softwarearchitekturen.",
  "Eine Programmiersprache für die Beschreibung von Schnittstellen.",
  "Ein konkretes Architekturmuster für verteilte Systeme.",
  "Ein Werkzeug, das Architekturdiagramme automatisch aus dem Code erzeugt."
 ],
 correct:[0],
 explanation:"arc42 ist eine gliedernde Vorlage (12 Abschnitte) für Architekturdokumentation – keine Programmiersprache, kein Architekturmuster und kein Code-Generator."},
{id:"c4q3",chapter:4,lz:"LZ 4-4",r:"R1",type:"multi",
 q:"Welche Aussagen zur Kontextabgrenzung (Kontextsicht) treffen zu?",
 options:[
  "Sie zeigt das System als Ganzes mit seinen externen Nachbarn (Nutzer, Fremdsysteme).",
  "Sie stellt die Schnittstellen des Systems zu seiner Umgebung dar.",
  "Sie zeigt die interne Zerlegung des Systems in seine Bausteine.",
  "Sie bildet die zeitliche Abfolge der internen Methodenaufrufe ab."
 ],
 correct:[0,1],
 explanation:"Die Kontextsicht grenzt das System von seiner Umgebung ab (externe Nachbarn und Schnittstellen). Die interne Zerlegung ist die Bausteinsicht, zeitliche Abläufe die Laufzeitsicht."},
{id:"c4q4",chapter:4,lz:"LZ 4-5",r:"R1",type:"multi",
 q:"Welche Aussagen zur Bausteinsicht treffen zu?",
 options:[
  "Sie zeigt die statische Zerlegung des Systems in Bausteine.",
  "Sie kann Bausteine hierarchisch verfeinern (Whitebox der enthaltenen Bausteine).",
  "Sie zeigt das dynamische Zusammenspiel der Bausteine zur Laufzeit.",
  "Sie ordnet die Bausteine den Ausführungsknoten (Hardware) zu."
 ],
 correct:[0,1],
 explanation:"Die Bausteinsicht zeigt die statische Struktur und verfeinert Bausteine hierarchisch. Dynamisches Zusammenspiel = Laufzeitsicht; Zuordnung zu Hardware = Verteilungssicht."},
{id:"c4q5",chapter:4,lz:"LZ 4-5",r:"R2",type:"single",
 q:"Was beschreibt die Laufzeitsicht?",
 options:[
  "Das dynamische Zusammenspiel von Bausteinen zur Laufzeit (Abläufe, Szenarien).",
  "Die statische Ordnerstruktur des Quellcode-Repositories.",
  "Die hierarchische Zerlegung des Systems in Bausteine.",
  "Die Zuordnung von Software zu Servern und Umgebungen."
 ],
 correct:[0],
 explanation:"Die Laufzeitsicht zeigt dynamisches Verhalten (z. B. Szenarien, Sequenzen). Statische Struktur = Bausteinsicht; Zuordnung zu Servern = Verteilungssicht."},
{id:"c4q6",chapter:4,lz:"LZ 4-5",r:"R2",type:"single",
 q:"Was zeigt die Verteilungssicht (Deployment)?",
 options:[
  "Die Abbildung der Software auf Infrastruktur/Knoten und deren Kommunikationswege.",
  "Die interne fachliche Zerlegung des Systems in Module.",
  "Die Reihenfolge der Nachrichten in einem Anwendungsfall.",
  "Die Vererbungsbeziehungen zwischen Klassen."
 ],
 correct:[0],
 explanation:"Die Verteilungssicht zeigt, auf welche Knoten/Umgebungen die Software verteilt ist und wie diese kommunizieren. Die anderen beschreiben Baustein-, Laufzeit- bzw. Klassenaspekte."},
{id:"c4q7",chapter:4,lz:"LZ 4-1",r:"R3",type:"single",
 q:"Was regelt der Standard ISO/IEC/IEEE 42010?",
 options:[
  "Konzepte für die Architekturbeschreibung (Stakeholder, Belange, Sichten/Viewpoints).",
  "Die konkrete Gliederung einer Architekturdoku in 12 Abschnitten.",
  "Ein Reifegradmodell zur Bewertung von Entwicklungsprozessen.",
  "Die Notation der einzelnen UML-Diagrammtypen."
 ],
 correct:[0],
 explanation:"ISO/IEC/IEEE 42010 beschreibt Rahmen und Begriffe für Architekturbeschreibungen (Stakeholder, Belange, Sichten). Die 12-Abschnitt-Gliederung ist arc42; Reifegrade und UML-Notation regelt es nicht. (R3.)"},
{id:"c4q8",chapter:4,lz:"LZ 4-3",r:"R2",type:"single",
 q:"Wofür wird ein UML-Sequenzdiagramm typischerweise verwendet?",
 options:[
  "Für zeitliche Abläufe und den Nachrichtenaustausch zwischen Objekten/Bausteinen.",
  "Für die statischen Beziehungen zwischen Klassen (Assoziation, Vererbung).",
  "Für die Verteilung von Artefakten auf Ausführungsknoten.",
  "Für die Zerlegung des Systems in fachliche Bausteine."
 ],
 correct:[0],
 explanation:"Sequenzdiagramme zeigen den zeitlichen Nachrichtenaustausch (Laufzeitsicht). Statische Klassenbeziehungen, Verteilung oder Bausteinzerlegung sind andere Diagramme bzw. Sichten."},
{id:"c4q9",chapter:4,lz:"LZ 4-1",r:"R2",type:"single",
 q:"Wozu dient ein Architecture Decision Record (ADR)?",
 options:[
  "Eine getroffene Architekturentscheidung samt Kontext, betrachteten Alternativen und Konsequenzen festzuhalten.",
  "Alle offenen Aufgaben und ihren Bearbeitungsstand zu verfolgen.",
  "Aufgetretene Laufzeitfehler zentral zu protokollieren.",
  "Die Anforderungen des Auftraggebers vollständig zu erfassen."
 ],
 correct:[0],
 explanation:"Ein ADR dokumentiert eine Entscheidung mit Kontext, Alternativen und Konsequenzen. Aufgabenverfolgung, Fehlerprotokolle oder Anforderungserfassung sind etwas anderes."},
{id:"c4q10",chapter:4,lz:"LZ 4-1",r:"R1",type:"single",
 q:"Was bedeutet 'zielgruppengerechte' Dokumentation?",
 options:[
  "Inhalt, Detailgrad und Notation werden am Informationsbedarf der jeweiligen Stakeholder ausgerichtet.",
  "Für alle Leser wird ein einziges Dokument mit maximalem Detailgrad erstellt.",
  "Die Dokumentation wird bewusst ausschließlich für Entwickler geschrieben.",
  "Alle Sichten werden für jede Zielgruppe vollständig wiederholt."
 ],
 correct:[0],
 explanation:"Zielgruppengerecht heißt: Inhalt, Detailgrad und Notation am Bedarf der jeweiligen Leser ausrichten – nicht ein Maximal-Dokument für alle, nicht nur für Entwickler und keine Wiederholung aller Sichten."},
{id:"k4",chapter:4,lz:"LZ 4-5",r:"R1",type:"k",points:2,
 q:"Ordnen Sie jede Sicht/Notation zu: statisch (Struktur) oder dynamisch (Verhalten)?",
 categories:["Statisch (Struktur)","Dynamisch (Verhalten)"],
 rows:[
  {text:"Bausteinsicht",cat:0},
  {text:"Laufzeitsicht",cat:1},
  {text:"Klassendiagramm",cat:0},
  {text:"Sequenzdiagramm",cat:1}
 ],
 explanation:"Baustein- und Klassensicht zeigen die statische Struktur. Laufzeitsicht und Sequenzdiagramm zeigen dynamisches Verhalten (Abläufe zur Laufzeit)."},
{id:"c4q11",chapter:4,lz:"LZ 4-4",r:"R1",type:"single",
 q:"Was unterscheidet fachlichen und technischen Kontext in der Kontextabgrenzung?",
 options:[
  "Der fachliche Kontext zeigt Nachbarn/Schnittstellen fachlich, der technische die konkreten Kanäle und Protokolle.",
  "Der fachliche Kontext beschreibt die interne Fachlogik, der technische den internen Code.",
  "Beide zeigen dasselbe; der Unterschied liegt nur im Diagrammtyp.",
  "Der technische Kontext listet die Qualitätsanforderungen auf."
 ],
 correct:[0],
 explanation:"Die Kontextsicht kann fachlich (welche Partner/Daten) und technisch (über welche Kanäle/Protokolle) dargestellt werden – beide betreffen die Systemgrenze, nicht die Interna oder die Qualitätsanforderungen."},
{id:"c4q12",chapter:4,lz:"LZ 4-3",r:"R2",type:"single",
 q:"Was stellt ein UML-Komponentendiagramm primär dar?",
 options:[
  "Komponenten/Bausteine und ihre angebotenen bzw. benötigten Schnittstellen.",
  "Den zeitlichen Ablauf von Methodenaufrufen zwischen Objekten.",
  "Die Zuordnung von Komponenten zu physischen Servern.",
  "Die einzelnen Attribute und Methoden jeder Klasse im Detail."
 ],
 correct:[0],
 explanation:"Komponentendiagramme zeigen Bausteine und ihre Schnittstellen (Bausteinsicht). Zeitlicher Ablauf = Sequenzdiagramm; Server-Zuordnung = Verteilungsdiagramm; Attribute/Methoden = Klassendiagramm."},
{id:"c4q13",chapter:4,lz:"LZ 4-5",r:"R1",type:"multi",
 q:"Warum werden Architekturen mit mehreren Sichten beschrieben?",
 options:[
  "Weil verschiedene Sichten unterschiedliche Fragen und Stakeholder adressieren.",
  "Weil keine einzelne Sicht alle relevanten Aspekte zeigen kann.",
  "Weil jede Sicht dieselbe Information nur in anderer Farbe wiederholt.",
  "Weil eine Mindestanzahl an Diagrammen gesetzlich vorgeschrieben ist."
 ],
 correct:[0,1],
 explanation:"Mehrere Sichten adressieren verschiedene Fragen und Adressaten, weil keine einzelne alles zeigt. Sie wiederholen nicht dieselbe Information, und eine gesetzliche Mindestzahl gibt es nicht."},
{id:"c4q14",chapter:4,lz:"LZ 4-1",r:"R1",type:"multi",
 q:"Welche Eigenschaften machen Architekturdokumentation besonders nützlich?",
 options:[
  "Sie ist aktuell und wird bei relevanten Änderungen mitgepflegt.",
  "Sie ist auf die jeweilige Zielgruppe zugeschnitten.",
  "Sie ist so knapp wie möglich und so ausführlich wie nötig.",
  "Sie ist so umfangreich wie möglich – Aktualität ist dabei zweitrangig."
 ],
 correct:[0,1,2],
 explanation:"Nützliche Doku ist aktuell, zielgruppengerecht und angemessen knapp. Maximale Vollständigkeit auf Kosten der Aktualität ist gerade nicht das Ziel."},
{id:"c4q15",chapter:4,lz:"LZ 4-3",r:"R2",type:"single",
 q:"Welchen Vorteil bietet eine standardisierte Notation (z. B. UML) gegenüber beliebigen 'Kästchen und Pfeilen'?",
 options:[
  "Eine eindeutigere, für andere nachvollziehbare Bedeutung der Diagrammelemente.",
  "Sie garantiert automatisch, dass die dargestellte Architektur korrekt ist.",
  "Sie macht erklärende Legenden und Dokumentation vollständig überflüssig.",
  "Sie verbietet jede informelle Skizze im Entwurfsprozess."
 ],
 correct:[0],
 explanation:"Standardnotationen geben Elementen eine vereinbarte Bedeutung (bessere Verständlichkeit). Sie garantieren keine Korrektheit, ersetzen nicht jede Erklärung und verbieten informelle Skizzen nicht."},
{id:"c4q16",chapter:4,lz:"LZ 4-5",r:"R1",type:"single",
 q:"Du möchtest zeigen, wie ein Bestellvorgang zur Laufzeit zwischen mehreren Bausteinen abläuft. Welche Sicht passt am besten?",
 options:[
  "Die Laufzeitsicht (z. B. als Sequenzdiagramm).",
  "Die Bausteinsicht, da alle beteiligten Bausteine aufgelistet werden.",
  "Die Verteilungssicht, da mehrere Bausteine beteiligt sind.",
  "Die Kontextsicht, da ein fachlicher Vorgang gezeigt wird."
 ],
 correct:[0],
 explanation:"Ein zeitlicher Ablauf zwischen Bausteinen gehört in die Laufzeitsicht (z. B. Sequenzdiagramm). Baustein-, Verteilungs- und Kontextsicht beantworten andere Fragen."},
{id:"c4q17",chapter:4,lz:"LZ 4-2",r:"R1",type:"multi",
 q:"Welche Inhalte gehören typischerweise in eine Architekturdokumentation (z. B. nach arc42)?",
 options:[
  "Die Kontextabgrenzung des Systems.",
  "Die Qualitätsanforderungen bzw. Qualitätsszenarien.",
  "Die vollständige, zeilenweise Erläuterung des gesamten Quellcodes.",
  "Das Sitzungsprotokoll jedes einzelnen Daily Standups."
 ],
 correct:[0,1],
 explanation:"Kontextabgrenzung und Qualitätsanforderungen gehören in die Architekturdoku (arc42). Eine zeilenweise Code-Erläuterung oder Standup-Protokolle gehören nicht dazu."},
{id:"k7",chapter:4,lz:"LZ 4-5",r:"R1",type:"k",points:2,
 q:"Ordnen Sie jede Frage der passenden Sicht zu.",
 categories:["Bausteinsicht","Verteilungssicht"],
 rows:[
  {text:"In welche Module/Komponenten ist das System zerlegt?",cat:0},
  {text:"Auf welche Server/Knoten ist die Software verteilt?",cat:1},
  {text:"Wie ist ein Subsystem intern aufgebaut?",cat:0},
  {text:"Über welche Netzwerkwege kommunizieren die Rechner?",cat:1}
 ],
 explanation:"Zerlegung in Bausteine und deren interne Struktur = Bausteinsicht. Zuordnung zu Hardware/Knoten und Kommunikationswege = Verteilungssicht."},
{id:"c4q18",chapter:4,lz:"LZ 4-3",r:"R2",type:"multi",
 q:"Welche Aussagen zum UML-Klassendiagramm treffen zu?",
 options:[
  "Es zeigt Typen/Klassen und ihre Beziehungen (z. B. Assoziation, Vererbung).",
  "Es gehört zur statischen Struktursicht.",
  "Es stellt primär den zeitlichen Ablauf von Nachrichten zwischen Objekten dar.",
  "Es bildet die Verteilung von Artefakten auf Ausführungsknoten ab."
 ],
 correct:[0,1],
 explanation:"Klassendiagramme zeigen statische Struktur (Typen + Beziehungen). Zeitlicher Nachrichtenablauf = Sequenzdiagramm; Verteilung auf Knoten = Verteilungsdiagramm."},
{id:"c4q19",chapter:4,lz:"LZ 4-1",r:"R1",type:"multi",
 q:"Welche Entscheidungen gehören typischerweise in ein Architecture Decision Record (ADR)?",
 options:[
  "Die Wahl eines Architekturmusters mit weitreichenden Folgen.",
  "Eine schwer umkehrbare technologische Grundsatzentscheidung.",
  "Die Umbenennung einer internen Methode zur besseren Lesbarkeit.",
  "Die konkrete Code-Formatierung (Einrückung, Zeilenlänge)."
 ],
 correct:[0,1],
 explanation:"ADRs halten weitreichende, folgenreiche und schwer umkehrbare Entscheidungen fest. Triviale Umbenennungen oder Formatierungsfragen gehören nicht dazu."},
{id:"c4q20",chapter:4,lz:"LZ 4-5",r:"R2",type:"single",
 q:"Was zeigt ein UML-Verteilungsdiagramm (Deployment Diagram)?",
 options:[
  "Knoten (Hardware bzw. Ausführungsumgebungen) und die darauf ausgeführten Artefakte.",
  "Die zeitliche Abfolge von Methodenaufrufen zwischen Objekten.",
  "Die statische Zerlegung des Systems in fachliche Bausteine.",
  "Die Vererbungs- und Assoziationsbeziehungen der Klassen."
 ],
 correct:[0],
 explanation:"Verteilungsdiagramme zeigen Knoten und die darauf platzierten Artefakte (Verteilungssicht). Zeitliche Abläufe, Bausteinzerlegung oder Klassenbeziehungen sind andere Diagramme."},
{id:"c4q21",chapter:4,lz:"LZ 4-1",r:"R1",type:"single",
 q:"Wie hält man Architekturdokumentation am ehesten aktuell?",
 options:[
  "Sie knapp halten, nah am Code bzw. versioniert pflegen und bei relevanten Änderungen mitziehen.",
  "Sie einmal sehr ausführlich schreiben, damit spätere Änderungen unnötig werden.",
  "Sie getrennt vom Projekt in einem separaten Archiv ablegen.",
  "Ausschließlich automatisch generierte Diagramme verwenden und nichts erklären."
 ],
 correct:[0],
 explanation:"Aktuell bleibt Doku, wenn sie schlank, nah am Prozess (versioniert) und Teil der Änderungsroutine ist. Ein einmaliges Groß-Dokument, ein separates Archiv oder rein generierte Diagramme ohne Erklärung helfen nicht."},
{id:"c4q22",chapter:4,lz:"LZ 4-1",r:"R2",type:"single",
 q:"Wozu dient ein Glossar bzw. eine einheitliche Begriffswelt in der Dokumentation?",
 options:[
  "Zu einem gemeinsamen, eindeutigen Verständnis der Fachbegriffe – weniger Missverständnisse.",
  "Zu einer vollständigen Liste aller Klassennamen im Quellcode.",
  "Zur Übersetzung der Benutzeroberfläche in mehrere Sprachen.",
  "Zu einem Verzeichnis aller offenen Fehler im System."
 ],
 correct:[0],
 explanation:"Ein Glossar sorgt für eine gemeinsame, eindeutige Fachsprache. Es ist keine Klassenliste, keine Oberflächen-Übersetzung und kein Fehlerverzeichnis."},
{id:"c4q23",chapter:4,lz:"LZ 4-1",r:"R1",type:"multi",
 q:"Was macht einen Architekturüberblick für neue Teammitglieder wertvoll?",
 options:[
  "Das große Ganze (Kontext und Ziele).",
  "Die wichtigsten Bausteine und ihre Aufgaben.",
  "Zentrale Architekturentscheidungen und ihre Gründe.",
  "Eine zeilenweise Erläuterung jeder einzelnen Methode."
 ],
 correct:[0,1,2],
 explanation:"Ein guter Überblick vermittelt Kontext/Ziele, die Hauptbausteine und die Kernentscheidungen. Eine zeilenweise Methoden-Erläuterung ist für einen Überblick zu detailliert."},
{id:"c4q24",chapter:4,lz:"LZ 4-5",r:"R2",type:"single",
 q:"Warum sollten verschiedene Architektursichten zueinander konsistent sein?",
 options:[
  "Weil sie dasselbe System aus verschiedenen Blickwinkeln zeigen – Widersprüche würden in die Irre führen.",
  "Weil jede Sicht exakt dieselben Elemente in identischer Detailtiefe enthalten muss.",
  "Weil die Diagramme sonst nicht kompilieren.",
  "Weil eine einzige Sicht ohnehin ausreichen würde."
 ],
 correct:[0],
 explanation:"Alle Sichten beschreiben dasselbe System; dieselben Bausteine müssen widerspruchsfrei auftauchen. Konsistenz heißt nicht identischer Inhalt/Detailgrad, hat nichts mit Kompilieren zu tun, und eine Sicht allein genügt nicht."},
{id:"k11",chapter:4,lz:"LZ 4-1",r:"R2",type:"k",points:2,
 q:"Gehört der Inhalt in eine Architekturdokumentation?",
 categories:["Sinnvoller Doku-Inhalt","Gehört nicht hinein"],
 rows:[
  {text:"Kontextabgrenzung des Systems",cat:0},
  {text:"Zentrale Architekturentscheidungen (ADRs)",cat:0},
  {text:"Qualitätsanforderungen und Szenarien",cat:0},
  {text:"Der vollständige Quellcode Zeile für Zeile",cat:1}
 ],
 explanation:"Kontext, Entscheidungen und Qualitätsszenarien gehören in die Architekturdoku. Personenbezogene Organisationsdaten wie Urlaubsplanung nicht."},
{id:"c4q25",chapter:4,lz:"LZ 4-5",r:"R2",type:"single",
 q:"Was zeigt eine Whitebox-Beschreibung eines Bausteins in der Bausteinsicht?",
 options:[
  "Die innere Zerlegung des Bausteins in seine enthaltenen (Unter-)Bausteine.",
  "Nur die nach außen sichtbare Schnittstelle des Bausteins (Blackbox).",
  "Die zeitliche Reihenfolge seiner Aufrufe zur Laufzeit.",
  "Die Serverumgebung, in der der Baustein betrieben wird."
 ],
 correct:[0],
 explanation:"Eine Whitebox öffnet den Baustein und zeigt seine inneren Bausteine. Nur die Schnittstelle wäre die Blackbox; Ablauf bzw. Umgebung sind Laufzeit- bzw. Verteilungssicht."},
{id:"c4q26",chapter:4,lz:"LZ 4-3",r:"R2",type:"multi",
 q:"Was sollte eine Schnittstellenbeschreibung typischerweise festlegen?",
 options:[
  "Die angebotenen Operationen und ihre Parameter bzw. Datenformate.",
  "Das Verhalten im Fehlerfall (Fehler- bzw. Ausnahmefälle).",
  "Die interne Implementierung, mit der die Operationen umgesetzt sind.",
  "Die konkrete Serverhardware, auf der der Anbieter betrieben wird."
 ],
 correct:[0,1],
 explanation:"Ein Schnittstellenvertrag legt Operationen/Datenformate und das Fehlerverhalten fest. Die interne Implementierung wird gerade verborgen, und die Hardware gehört zur Verteilung."},
{id:"c4q27",chapter:4,lz:"LZ 4-1",r:"R1",type:"single",
 q:"Warum sollte man nicht 'alles' dokumentieren?",
 options:[
  "Weil zu viel Doku Aufwand kostet und schnell veraltet – sinnvoll ist das Entscheidungsrelevante.",
  "Weil Dokumentation generell keinen Nutzen hat.",
  "Weil ausschließlich mündliche Absprachen zählen.",
  "Weil vollständige Dokumentation gesetzlich verboten ist."
 ],
 correct:[0],
 explanation:"Man dokumentiert gezielt das Entscheidungsrelevante, weil zu viel Doku Aufwand macht und veraltet. Doku ist nicht nutzlos, mündliche Absprachen genügen nicht, und ein Verbot gibt es nicht."},
{id:"c4q28",chapter:4,lz:"LZ 4-3",r:"R2",type:"multi",
 q:"Welche Aussagen zum UML-Aktivitätsdiagramm treffen zu?",
 options:[
  "Es stellt Abläufe mit Aktionen und Verzweigungen dar.",
  "Es kann nebenläufige (parallele) Abläufe abbilden.",
  "Es zeigt primär die statische Struktur von Klassen und ihren Beziehungen.",
  "Es ordnet Softwarebausteine den Ausführungsknoten (Hardware) zu."
 ],
 correct:[0,1],
 explanation:"Aktivitätsdiagramme zeigen Abläufe inkl. Nebenläufigkeit (dynamisches Verhalten). Statische Klassenstruktur = Klassendiagramm; Zuordnung zu Hardware = Verteilungsdiagramm."},
{id:"c4q29",chapter:4,lz:"LZ 4-2",r:"R2",type:"single",
 q:"Welchen Abschnitt sieht das arc42-Template u. a. ausdrücklich vor?",
 options:[
  "Einen Abschnitt für Qualitätsanforderungen bzw. Qualitätsszenarien.",
  "Einen Pflichtabschnitt mit dem vollständigen Quellcode des Systems.",
  "Einen Pflichtabschnitt mit dem detaillierten Projektbudget.",
  "Einen verbindlichen Testfallkatalog für jede einzelne Methode."
 ],
 correct:[0],
 explanation:"arc42 sieht u. a. Kontext, Lösungsstrategie, Bausteinsicht, Laufzeit-/Verteilungssicht, Querschnittskonzepte und Qualitätsanforderungen vor – aber keinen Quellcode-, Budget- oder Testfall-Pflichtabschnitt."},
{id:"c4q30",chapter:4,lz:"LZ 4-3",r:"R1",type:"multi",
 q:"Welche Aussagen zu UML als Notation treffen zu?",
 options:[
  "UML bietet standardisierte Diagrammtypen mit vereinbarter Bedeutung.",
  "Für Architektur sind u. a. Komponenten-, Verteilungs- und Sequenzdiagramme nützlich.",
  "UML schreibt eine bestimmte Architektur oder Technologie vor.",
  "UML-Diagramme müssen stets alle Details des Systems vollständig zeigen."
 ],
 correct:[0,1],
 explanation:"UML ist eine standardisierte Notation mit vielen Diagrammtypen; für Architektur sind u. a. Komponenten-, Verteilungs- und Sequenzdiagramme nützlich. UML schreibt keine Architektur/Technologie vor und muss nicht alles zeigen."},
{id:"c4q31",chapter:4,lz:"LZ 4-5",r:"R1",type:"single",
 q:"Ein Betriebsteam möchte wissen, auf welchen Servern welche Teile laufen. Welche Sicht hilft am meisten?",
 options:[
  "Die Verteilungssicht.",
  "Die Bausteinsicht, da sie alle Komponenten zeigt.",
  "Die Laufzeitsicht, da der Betrieb Abläufe beobachtet.",
  "Das Klassendiagramm, da es die Struktur zeigt."
 ],
 correct:[0],
 explanation:"Fragen des Betriebs zu Servern/Knoten und Kommunikationswegen beantwortet die Verteilungssicht. Baustein-, Laufzeitsicht und Klassendiagramm adressieren andere Aspekte."},
{id:"k13",chapter:4,lz:"LZ 4-5",r:"R1",type:"k",points:2,
 q:"Laufzeitsicht oder Verteilungssicht?",
 categories:["Laufzeitsicht","Verteilungssicht"],
 rows:[
  {text:"Zeitliche Interaktion der Bausteine bei einem Anwendungsfall",cat:0},
  {text:"Auf welchem Server/Knoten welche Komponente läuft",cat:1},
  {text:"Reihenfolge der ausgetauschten Nachrichten",cat:0},
  {text:"Netzwerkverbindungen zwischen Rechenzentren",cat:1}
 ],
 explanation:"Interaktionen/Abläufe zur Laufzeit = Laufzeitsicht. Zuordnung zu Hardware/Knoten und deren Kommunikationswege = Verteilungssicht."},
/* ===== Kapitel 5 ===== */
{id:"c5q1",chapter:5,lz:"LZ 5-2",r:"R1",type:"multi",
 q:"Aus welchen Bestandteilen besteht ein Qualitätsszenario typischerweise?",
 options:[
  "Ein Auslöser/Stimulus (was das Szenario auslöst).",
  "Die Umgebung bzw. der Kontext (unter welchen Bedingungen).",
  "Eine Reaktion mit messbarem Antwortmaß (Response/Measure).",
  "Eine Schätzung des Umsetzungsaufwands in Personentagen."
 ],
 correct:[0,1,2],
 explanation:"Ein Qualitätsszenario nennt Auslöser, Umgebung/Kontext und eine Reaktion mit messbarem Antwortmaß. Eine Aufwandsschätzung gehört nicht dazu."},
{id:"c5q2",chapter:5,lz:"LZ 5-1",r:"R2",type:"single",
 q:"Was ist ATAM?",
 options:[
  "Eine szenariobasierte Methode zur qualitativen Architekturbewertung.",
  "Ein automatisches Werkzeug, das Metriken aus dem Code berechnet.",
  "Ein Architekturmuster für fehlertolerante Systeme.",
  "Ein Reifegradmodell für Entwicklungsprozesse."
 ],
 correct:[0],
 explanation:"ATAM (Architecture Tradeoff Analysis Method) bewertet Architektur qualitativ anhand von Szenarien. Es ist kein Metrik-Tool, kein Architekturmuster und kein Reifegradmodell."},
{id:"c5q3",chapter:5,lz:"LZ 5-1",r:"R1",type:"multi",
 q:"Welche Aussagen zu qualitativer vs. quantitativer Architekturbewertung treffen zu?",
 options:[
  "Qualitative Bewertung arbeitet szenario- bzw. expertenbasiert (z. B. ATAM, Reviews).",
  "Quantitative Bewertung stützt sich auf messbare Kennzahlen bzw. Metriken.",
  "Qualitative Bewertung liefert stets objektivere Ergebnisse als quantitative.",
  "Quantitative Metriken lassen sich immer ohne Interpretation eindeutig bewerten."
 ],
 correct:[0,1],
 explanation:"Qualitativ = szenario-/expertenbasiert, quantitativ = metrikbasiert. Qualitativ ist nicht pauschal objektiver, und Metriken brauchen Interpretation im Kontext."},
{id:"c5q4",chapter:5,lz:"LZ 5-3",r:"R2",type:"multi",
 q:"Welche der folgenden sind quantitative (metrikbasierte) Angaben?",
 options:[
  "Der Kopplungsgrad zwischen Modulen.",
  "Die zyklomatische Komplexität.",
  "Die Einschätzung eines Experten im Architektur-Review.",
  "Das Ergebnis eines szenariobasierten Workshops (ATAM)."
 ],
 correct:[0,1],
 explanation:"Kopplungsgrad und zyklomatische Komplexität sind quantitative Metriken. Experteneinschätzung und ATAM-Workshops sind qualitative Verfahren."},
{id:"c5q5",chapter:5,lz:"LZ 5-2",r:"R2",type:"single",
 q:"Was ist der Zweck eines Qualitätsbaums (Utility Tree)?",
 options:[
  "Qualitätsziele und zugehörige Szenarien strukturieren und priorisieren, um die Bewertung zu fokussieren.",
  "Die Vererbungshierarchie der Klassen als Baum darstellen.",
  "Die Aufrufreihenfolge der Bausteine zur Laufzeit abbilden.",
  "Die Ordnerstruktur des Projekts visualisieren."
 ],
 correct:[0],
 explanation:"Ein Qualitätsbaum ordnet und priorisiert Qualitätsmerkmale und Szenarien, um die Bewertung zu fokussieren. Mit Klassenhierarchie, Laufzeitabläufen oder Ordnern hat er nichts zu tun."},
{id:"c5q6",chapter:5,lz:"LZ 5-1",r:"R1",type:"multi",
 q:"Warum bewertet man Architekturen überhaupt?",
 options:[
  "Um Risiken und Schwachstellen bezüglich der Qualitätsziele früh zu erkennen.",
  "Um Trade-offs zwischen Qualitätsmerkmalen sichtbar zu machen.",
  "Um zu garantieren, dass die spätere Implementierung fehlerfrei ist.",
  "Um die Anzahl der benötigten Entwickler exakt zu bestimmen."
 ],
 correct:[0,1],
 explanation:"Bewertung deckt Risiken/Schwachstellen und Trade-offs früh auf. Sie garantiert keine fehlerfreie Implementierung und dient nicht der Personalplanung."},
{id:"c5q7",chapter:5,lz:"LZ 5-3",r:"R3",type:"single",
 q:"Was drückt eine hohe Kopplung eines Moduls tendenziell aus?",
 options:[
  "Viele ein- und ausgehende Abhängigkeiten – oft ein Hinweis auf schwerere isolierte Änderbarkeit.",
  "Dass das Modul besonders performant ist.",
  "Dass das Modul keine Schnittstellen benötigt.",
  "Dass das Modul besonders gut getestet ist."
 ],
 correct:[0],
 explanation:"Hohe Kopplung bedeutet viele Abhängigkeiten und erschwert isolierte Änderungen und Tests. Sie sagt nichts über Performance, Schnittstellenbedarf oder Testgüte. (R3.)"},
{id:"c5q8",chapter:5,lz:"LZ 5-3",r:"R2",type:"single",
 q:"Was misst die zyklomatische Komplexität?",
 options:[
  "Die Anzahl linear unabhängiger Pfade durch den Kontrollfluss (Verzweigungen).",
  "Die Anzahl der Abhängigkeiten eines Moduls zu anderen Modulen.",
  "Die Verschachtelungstiefe der Vererbungshierarchie.",
  "Den Codeumfang, gemessen in Zeilen (LOC)."
 ],
 correct:[0],
 explanation:"Zyklomatische Komplexität zählt unabhängige Kontrollfluss-Pfade. Modulabhängigkeiten (Kopplung), Vererbungstiefe und LOC sind jeweils andere Metriken."},
{id:"c5q9",chapter:5,lz:"LZ 5-2",r:"R1",type:"multi",
 q:"Welche Aussagen zum Nutzen von Qualitätsszenarien bei der Bewertung treffen zu?",
 options:[
  "Sie machen abstrakte Qualitätsziele konkret und überprüfbar.",
  "Sie dienen als Maßstab, an dem Architekturentscheidungen bewertet werden.",
  "Sie ersetzen die Erhebung der funktionalen Anforderungen.",
  "Sie garantieren, dass die genannten Qualitätsziele auch tatsächlich erreicht werden."
 ],
 correct:[0,1],
 explanation:"Szenarien konkretisieren Qualitätsziele und liefern einen Bewertungsmaßstab. Sie ersetzen keine funktionalen Anforderungen und garantieren nichts – sie machen nur prüfbar."},
{id:"c5q10",chapter:5,lz:"LZ 5-1",r:"R2",type:"single",
 q:"Was ist ein Architektur-Review (bzw. Walkthrough) als Bewertungsmethode?",
 options:[
  "Eine qualitative, expertengestützte Durchsicht der Architektur anhand von Zielen und Szenarien.",
  "Eine automatische Messung von Metriken ganz ohne Beteiligung von Menschen.",
  "Ein Lasttest zur Ermittlung der maximalen Antwortzeit.",
  "Das Zusammenführen paralleler Entwicklungszweige im Code."
 ],
 correct:[0],
 explanation:"Reviews/Walkthroughs sind qualitative, expertengestützte Verfahren gegen Ziele und Szenarien. Automatische Messung ist quantitativ; Lasttest und Merge sind etwas anderes."},
{id:"c5q11",chapter:5,lz:"LZ 5-1",r:"R2",type:"multi",
 q:"Welche der folgenden sind qualitative Bewertungsmethoden?",
 options:[
  "Szenariobasierte Analyse (z. B. ATAM).",
  "Architektur-Review durch Experten.",
  "Automatisches Zählen der Codezeilen (LOC).",
  "Messung des Kopplungsgrades zwischen Modulen."
 ],
 correct:[0,1],
 explanation:"ATAM und Experten-Reviews sind qualitativ. LOC-Zählung und Kopplungsmessung sind quantitative (metrikbasierte) Verfahren."},
{id:"c5q12",chapter:5,lz:"LZ 5-1",r:"R1",type:"single",
 q:"Wann sollte eine Architektur bewertet werden?",
 options:[
  "Früh und wiederholt, begleitend zu wichtigen Entscheidungen.",
  "Erst wenn die Implementierung vollständig abgeschlossen ist.",
  "Nur einmalig bei der Abnahme durch den Auftraggeber.",
  "Ausschließlich dann, wenn bereits Probleme im Betrieb aufgetreten sind."
 ],
 correct:[0],
 explanation:"Bewertung ist am wertvollsten früh und wiederholt, solange Korrekturen günstig sind. Erst am Ende, nur zur Abnahme oder rein reaktiv ist zu spät."},
{id:"c5q13",chapter:5,lz:"LZ 5-3",r:"R2",type:"single",
 q:"Welche Grenze haben metrik-basierte (quantitative) Bewertungen?",
 options:[
  "Zahlen allein liefern noch keine Bewertung – sie brauchen Kontext und Interpretation.",
  "Metriken sind grundsätzlich wertlos und sollten nie erhoben werden.",
  "Ein hoher Metrikwert ist immer eindeutig schlecht.",
  "Metriken ersetzen vollständig jede fachliche Beurteilung."
 ],
 correct:[0],
 explanation:"Metriken geben Hinweise, müssen aber im Kontext interpretiert werden. Sie sind nicht wertlos, nicht automatisch gut oder schlecht und ersetzen keine fachliche Beurteilung."},
{id:"c5q14",chapter:5,lz:"LZ 5-1",r:"R1",type:"single",
 q:"Was ist ein typisches Ergebnis einer Architekturbewertung?",
 options:[
  "Erkannte Risiken, Schwachstellen und Trade-offs sowie konkrete Verbesserungsvorschläge.",
  "Ein verbindlicher Nachweis, dass das System fehlerfrei ist.",
  "Die endgültige Freigabe ohne jede weitere Auflage.",
  "Eine reine Sammlung neuer Diagramme ohne Aussagen."
 ],
 correct:[0],
 explanation:"Eine Bewertung liefert Risiken, Trade-offs und Empfehlungen. Sie ist kein Fehlerfreiheits-Nachweis, keine bedingungslose Freigabe und nicht bloß neue Diagramme."},
{id:"k10",chapter:5,lz:"LZ 5-1",r:"R2",type:"k",points:2,
 q:"Qualitative oder quantitative Bewertungsmethode?",
 categories:["Qualitativ","Quantitativ"],
 rows:[
  {text:"Szenariobasierte Analyse (ATAM)",cat:0},
  {text:"Messung der Kopplung zwischen Modulen",cat:1},
  {text:"Experten-Review / Walkthrough",cat:0},
  {text:"Zählen der Codezeilen (LOC)",cat:1}
 ],
 explanation:"Szenarioanalysen und Reviews sind qualitativ (experten-/szenariobasiert). Kopplungsmaße und LOC sind quantitativ (messbare Kennzahlen)."},
{id:"c5q15",chapter:5,lz:"LZ 5-1",r:"R1",type:"single",
 q:"Warum sind klar formulierte Qualitätsziele Voraussetzung für eine sinnvolle Architekturbewertung?",
 options:[
  "Weil ohne Ziele der Maßstab fehlt, gegen den man die Architektur bewerten könnte.",
  "Weil Qualitätsziele die Bewertung überflüssig machen.",
  "Weil sich Bewertung ausschließlich auf den Quellcode stützt.",
  "Weil Ziele erst nach der Bewertung formuliert werden sollten."
 ],
 correct:[0],
 explanation:"Bewertung misst gegen die Qualitätsziele – fehlen sie, gibt es keinen Maßstab. Sie machen Bewertung nicht überflüssig, stützen sich nicht nur auf Code und werden nicht erst danach formuliert."},
{id:"c5q16",chapter:5,lz:"LZ 5-3",r:"R2",type:"single",
 q:"Wozu dienen Werkzeuge der statischen Code-/Architekturanalyse?",
 options:[
  "Zum (teil-)automatisierten Prüfen von Metriken und Regeln, z. B. Abhängigkeiten oder Komplexität.",
  "Zum Ausführen des Systems mit echten Nutzern unter Last.",
  "Zum Erheben qualitativer Experteneinschätzungen in Workshops.",
  "Zum automatischen Beheben aller gefundenen Schwachstellen."
 ],
 correct:[0],
 explanation:"Statische Analyse prüft Code/Struktur ohne Ausführung (Metriken, Regeln, Abhängigkeiten). Sie ist kein Lasttest, kein Workshop und behebt Schwachstellen nicht automatisch."},
{id:"c5q17",chapter:5,lz:"LZ 5-1",r:"R2",type:"single",
 q:"Was ist ein Trade-off-Punkt bei der Architekturbewertung (z. B. in ATAM)?",
 options:[
  "Eine Entscheidung, die mehrere Qualitätsmerkmale gegensätzlich beeinflusst.",
  "Eine Entscheidung, die genau ein einzelnes Qualitätsmerkmal beeinflusst.",
  "Ein Punkt, an dem alle Qualitätsziele gleichzeitig optimal erfüllt sind.",
  "Ein erkanntes Risiko ohne jeden Bezug zu Qualitätsmerkmalen."
 ],
 correct:[0],
 explanation:"Ein Trade-off-Punkt wirkt auf mehrere Qualitätsmerkmale gegensätzlich. Wirkt eine Entscheidung nur auf genau eines, ist es ein Sensitivitätspunkt – nicht dasselbe."},
{id:"c5q18",chapter:5,lz:"LZ 5-1",r:"R2",type:"single",
 q:"Worauf sollte sich eine Architekturbewertung mit begrenzter Zeit konzentrieren?",
 options:[
  "Auf die wichtigsten Qualitätsziele und die größten Risiken.",
  "Auf möglichst viele nebensächliche Details, um vollständig zu sein.",
  "Auf die Bausteine mit den meisten Codezeilen, unabhängig vom Risiko.",
  "Auf die zuletzt committeten Änderungen, unabhängig von den Zielen."
 ],
 correct:[0],
 explanation:"Mit begrenzter Zeit fokussiert man die priorisierten Qualitätsziele und die größten Risiken – nicht Nebensächlichkeiten, reine Codegröße oder die letzten Commits."},
{id:"c5q19",chapter:5,lz:"LZ 5-1",r:"R2",type:"multi",
 q:"Welche Aussagen zur Architekturbewertung treffen zu?",
 options:[
  "Sie deckt Risiken und Schwachstellen frühzeitig auf.",
  "Sie braucht klare Qualitätsziele als Maßstab.",
  "Sie kann qualitativ oder quantitativ erfolgen.",
  "Sie ist nur einmalig ganz am Ende des Projekts sinnvoll."
 ],
 correct:[0,1,2],
 explanation:"Bewertung deckt Risiken auf, braucht Qualitätsziele und kann qualitativ oder quantitativ sein. Sie ist nicht nur am Projektende sinnvoll, sondern früh und wiederholt."},
/* ===== Kapitel 6 ===== */
{id:"c6q1",chapter:6,lz:"LZ 6-1",r:"R3",type:"single",
 q:"Welchen Zweck hat das Kapitel 'Beispiele für Softwarearchitekturen' im Curriculum?",
 options:[
  "Das Gelernte an konkreten Beispielen nachvollziehbar anzuwenden und zu veranschaulichen.",
  "Neue, verbindliche Architekturregeln einzuführen, die die Prüfung dominieren.",
  "Die vorangegangenen Kapitel inhaltlich zu ersetzen.",
  "Eine bestimmte Technologie als verbindlichen Standard vorzuschreiben."
 ],
 correct:[0],
 explanation:"Die Beispiele veranschaulichen die Anwendung des Gelernten. Sie führen keine neuen Regeln ein, ersetzen keine Kapitel und schreiben keine Technologie vor. (R3.)"},
{id:"c6q2",chapter:6,lz:"LZ 6-2",r:"R3",type:"single",
 q:"Was sollte man an einem durchgängigen Architekturbeispiel v. a. erkennen können?",
 options:[
  "Wie Anforderungen zu Entscheidungen, Strukturen und Sichten führen.",
  "Ausschließlich die eingesetzten Technologien und Frameworks.",
  "Nur den reinen Umfang des Quellcodes.",
  "Die persönliche Arbeitsweise der einzelnen Entwickler."
 ],
 correct:[0],
 explanation:"Ein gutes Beispiel zeigt den roten Faden von Anforderungen über Entscheidungen zu Struktur und Sichten – nicht nur Technologien, Codeumfang oder Arbeitsweisen. (R3.)"},
{id:"c6q3",chapter:6,lz:"LZ 6-1",r:"R3",type:"single",
 q:"Wie ist die Prüfungsrelevanz von Kapitel 6 (Beispiele) einzuordnen?",
 options:[
  "Überwiegend R3 – zur Veranschaulichung, aber nicht unmittelbarer Prüfungsstoff.",
  "R1 – die Beispiele sind das wichtigste Prüfungskapitel.",
  "Es ist die einzige Grundlage, die in der Prüfung abgefragt wird.",
  "Es ist gar nicht Teil des Curriculums."
 ],
 correct:[0],
 explanation:"Kapitel 6 ist überwiegend R3: Teil des Curriculums zur Veranschaulichung, aber nicht unmittelbarer Prüfungsstoff. Es ist weder R1 noch die einzige Grundlage noch außerhalb des Curriculums."},
{id:"c6q4",chapter:6,lz:"LZ 6-2",r:"R3",type:"single",
 q:"Was lässt sich an einem durchgängigen Architekturbeispiel besonders gut lernen?",
 options:[
  "Wie Konzepte, Muster und Entscheidungen im Zusammenhang zusammenwirken.",
  "Eine auswendig zu lernende Musterlösung für die Prüfung.",
  "Die exakte Projektlaufzeit und das Budget.",
  "Eine allgemeingültige Blaupause, die für jedes System passt."
 ],
 correct:[0],
 explanation:"Ein durchgängiges Beispiel zeigt das Zusammenspiel von Konzepten, Mustern und Entscheidungen. Es ist keine auswendig zu lernende Musterlösung und keine für alle passende Blaupause. (R3.)"},
{id:"c6q5",chapter:6,lz:"LZ 6-1",r:"R3",type:"single",
 q:"Welchen Nutzen hat das Studium mehrerer unterschiedlicher Architekturbeispiele?",
 options:[
  "Man lernt eine Bandbreite an Lösungen und Mustern kennen und kann sie auf eigene Probleme übertragen.",
  "Man erhält eine fertige Lösung, die man nur noch kopieren muss.",
  "Man muss danach keine eigenen Entscheidungen mehr treffen.",
  "Man lernt vor allem die jeweils verwendete Programmiersprache."
 ],
 correct:[0],
 explanation:"Mehrere Beispiele erweitern das Lösungsrepertoire und schulen das Übertragen. Sie liefern keine Kopiervorlage, ersparen keine eigenen Entscheidungen und dienen nicht dem Sprachenlernen. (R3.)"},
{id:"c6q6",chapter:6,lz:"LZ 6-2",r:"R3",type:"single",
 q:"Warum werden in Architekturbeispielen bewusst auch getroffene Trade-offs betrachtet?",
 options:[
  "Weil es selten die eine perfekte Lösung gibt – nur begründete Kompromisse.",
  "Weil Trade-offs ein Zeichen einer fehlerhaften Architektur sind.",
  "Weil man die schlechteste Option zu Lernzwecken hervorheben will.",
  "Weil Kompromisse in der Praxis grundsätzlich vermeidbar sind."
 ],
 correct:[0],
 explanation:"Beispiele zeigen, dass Architektur aus bewussten Abwägungen besteht – Trade-offs sind kein Fehler und nicht vermeidbar. Das Verständnis der Kompromisse ist der Lernwert. (R3.)"}
];
