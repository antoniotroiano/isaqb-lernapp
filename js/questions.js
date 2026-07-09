"use strict";
const CHAPTERS = {
  1:"Grundlegende Konzepte",
  2:"Anforderungen & Randbedingungen",
  3:"Entwurf & Entwicklung",
  4:"Spezifikation & Kommunikation",
  5:"Analyse & Bewertung",
  6:"Beispiele"
};

const QUESTIONS = [
/* ===== Kapitel 1 ===== */
{id:"c1q1",chapter:1,lz:"LZ 01-01",r:"R1",type:"multi",
 q:"Welche Aussagen beschreiben Softwarearchitektur zutreffend?",
 options:[
  "Sie umfasst die Bausteine eines Systems und deren Beziehungen zueinander.",
  "Sie umfasst die grundlegenden, oft folgenreichen Entwurfsentscheidungen.",
  "Sie ist im Wesentlichen die Summe des Quellcodes aller Klassen.",
  "Sie legt vor allem die konkrete Implementierung jeder einzelnen Methode fest.",
  "Sie ist gleichbedeutend mit der Dokumentation des Systems in Form von Diagrammen."
 ],
 correct:[0,1],
 optExpl:[
  "Bausteine und ihre Beziehungen sind der Kern jeder Architekturdefinition.",
  "Gerade die tragenden, folgenreichen Entscheidungen machen Architektur aus.",
  "Der Quellcode ist das Ergebnis der Umsetzung, nicht die Architektur selbst.",
  "Einzelne Methoden festzulegen ist Detailentwurf, nicht Architektur.",
  "Diagramme dokumentieren die Architektur, sind aber nicht die Architektur selbst."
 ],
 explanation:"Architektur = Bausteine + Beziehungen + tragende Entwurfsentscheidungen. Sie ist nicht der Code selbst und legt nicht jede Methode im Detail fest (das ist Detailentwurf)."},
{id:"c1q2",chapter:1,lz:"LZ 01-01",r:"R1",type:"multi",
 q:"Welche Aussagen kennzeichnen eine Komponente (Baustein) zutreffend?",
 options:[
  "Sie kapselt Funktionalität hinter einer klar definierten Schnittstelle.",
  "Sie ist über ihre Schnittstelle austauschbar, ohne dass Nutzer ihre Interna kennen müssen.",
  "Sie ist im Wesentlichen eine Gruppe von Klassen im selben Paket, auch ohne gemeinsame Schnittstelle.",
  "Sie ist stets identisch mit einem zur Laufzeit gestarteten Betriebssystemprozess.",
  "Sie ist immer genau einer einzelnen Klasse zugeordnet, die ihre gesamte Logik enthält."
 ],
 correct:[0,1],
 optExpl:[
  "Kapselung hinter einer klaren Schnittstelle ist das Kernmerkmal.",
  "Genau diese Austauschbarkeit (Blackbox-Nutzung) zeichnet sie aus.",
  "Bloße Paketzugehörigkeit ohne gemeinsame Schnittstelle genügt nicht.",
  "Ein Betriebssystemprozess ist eine Laufzeiteinheit, keine Komponente.",
  "Eine Komponente kann aus mehreren Klassen bestehen, nicht nur einer."
 ],
 explanation:"Eine Komponente kapselt Funktionalität hinter einer definierten Schnittstelle und ist darüber austauschbar (Blackbox-Nutzung). Bloße Paketzugehörigkeit oder die Gleichsetzung mit einem Laufzeitprozess treffen das Kennzeichen nicht."},
{id:"c1q3",chapter:1,lz:"LZ 01-01",r:"R2",type:"single",
 q:"Was unterscheidet eine Blackbox- von einer Whitebox-Beschreibung eines Bausteins?",
 options:[
  "Blackbox zeigt nur Schnittstelle und Verantwortung von außen; Whitebox zeigt zusätzlich den inneren Aufbau.",
  "Whitebox verbirgt die inneren Bausteine, Blackbox legt sie offen.",
  "Blackbox bezieht sich auf die Laufzeitsicht, Whitebox auf die Verteilungssicht.",
  "Der Unterschied betrifft nur die Detailtiefe der Benennung, nicht die Sichtbarkeit der Interna."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Blackbox = Außensicht, Whitebox = zusätzlich der innere Aufbau.",
  "Vertauscht – die Whitebox zeigt die Interna, die Blackbox verbirgt sie.",
  "Es geht um die Sichtbarkeit der Interna, nicht um Laufzeit-/Verteilungssicht.",
  "Entscheidend ist die Sichtbarkeit der Interna, nicht die Benennungstiefe."
 ],
 explanation:"Blackbox = Außensicht (Schnittstelle/Verantwortung), Whitebox = Innensicht (enthaltene Bausteine). Die Begriffe sind nicht vertauscht und nicht an Laufzeit-/Verteilungssicht gebunden."},
{id:"c1q4",chapter:1,lz:"LZ 01-01",r:"R1",type:"multi",
 q:"Welche der folgenden gehören zu den typischen Architektursichten?",
 options:[
  "Bausteinsicht (statische Zerlegung in Bausteine)",
  "Laufzeitsicht (Zusammenspiel der Bausteine zur Laufzeit)",
  "Quellcode-Dateisicht (Ordner- und Dateistruktur im Repository)",
  "Priorisierungssicht (Reihenfolge der Umsetzung von Features)",
  "Kostensicht (Aufwands- und Budgetverteilung der einzelnen Bausteine)"
 ],
 correct:[0,1],
 optExpl:[
  "Die Bausteinsicht (statische Zerlegung) ist eine Kern-Architektursicht.",
  "Die Laufzeitsicht (dynamisches Zusammenspiel) ist ebenfalls eine Kernsicht.",
  "Die Ordner-/Dateistruktur im Repository ist keine Architektursicht.",
  "Eine „Priorisierungssicht“ gibt es als Architektursicht nicht.",
  "Eine Kostensicht gehört nicht zu den etablierten Architektursichten."
 ],
 explanation:"Baustein- und Laufzeitsicht sind Kern-Architektursichten (ebenso Kontext- und Verteilungssicht). Datei-/Repository-Struktur oder eine 'Priorisierungssicht' sind keine Architektursichten."},
{id:"c1q5",chapter:1,lz:"LZ 01-04",r:"R2",type:"multi",
 q:"Welche Aufgaben gehören typischerweise zur Rolle der Softwarearchitekt:innen?",
 options:[
  "Anforderungen, besonders Qualitätsanforderungen, klären und beeinflussen.",
  "Tragende Architekturentscheidungen treffen und begründen.",
  "Die Umsetzung begleiten und dem Team Rückmeldung geben.",
  "Die endgültige Priorisierung des Produkt-Backlogs allein verantworten.",
  "Den Quellcode aller kritischen Module eigenständig und allein implementieren."
 ],
 correct:[0,1,2],
 optExpl:[
  "Anforderungen (v. a. Qualitätsanforderungen) klären ist Kernaufgabe.",
  "Tragende Entscheidungen treffen und begründen gehört klar dazu.",
  "Die Umsetzung begleiten und Feedback geben ebenfalls.",
  "Die Backlog-Priorisierung verantwortet die Produktrolle (z. B. PO), nicht allein die Architektur.",
  "Das Implementieren aller Module ist Teamaufgabe, nicht allein die der Architektur."
 ],
 explanation:"Architekt:innen klären Anforderungen, treffen/begründen Entscheidungen und begleiten die Umsetzung. Die Backlog-Priorisierung liegt bei der Produktverantwortung (z. B. Product Owner)."},
{id:"c1q6",chapter:1,lz:"LZ 01-01",r:"R2",type:"multi",
 q:"Welche Aussagen zu interner und externer Qualität treffen zu?",
 options:[
  "Externe Qualität ist von außen wahrnehmbar (z. B. Performanz, Zuverlässigkeit).",
  "Interne Qualität betrifft die innere Struktur (z. B. Wartbarkeit, Verständlichkeit).",
  "Interne Qualität ist für Endnutzer direkt spürbar, externe nur für Entwickler.",
  "Interne Qualität ist unbedeutend, solange die externe Qualität stimmt.",
  "Interne und externe Qualität sind voneinander unabhängig und beeinflussen sich nicht.",
  "Interne Qualität lässt sich allein durch Black-Box-Tests des fertigen Produkts messen."
 ],
 correct:[0,1],
 optExpl:[
  "Externe Qualität ist von außen wahrnehmbar (z. B. Performanz).",
  "Interne Qualität betrifft die innere Struktur (z. B. Wartbarkeit).",
  "Vertauscht: interne Qualität spüren v. a. Entwickler, nicht direkt Endnutzer.",
  "Interne Qualität ist wichtig – sie bestimmt z. B. die Wartbarkeit.",
  "Schlechte interne Qualität verschlechtert langfristig auch die externe Qualität.",
  "Interne Qualität zeigt sich in der Struktur, nicht in Black-Box-Tests."
 ],
 explanation:"Externe Qualität ist von außen sichtbar, interne betrifft die Struktur. Die Zuordnung ist nicht vertauscht, und interne Qualität ist keineswegs unbedeutend (sie bestimmt z. B. die Wartbarkeit)."},
{id:"c1q7",chapter:1,lz:"LZ 01-02",r:"R2",type:"single",
 q:"Warum werden Architekturentscheidungen oft iterativ und unter Unsicherheit getroffen?",
 options:[
  "Weil zu Beginn Wissen und Anforderungen unvollständig sind und sich im Verlauf verfeinern.",
  "Weil solche Entscheidungen ohnehin jederzeit ohne nennenswerten Aufwand änderbar sind.",
  "Weil erst nach vollständiger Implementierung genügend Informationen vorliegen.",
  "Weil sich Unsicherheit durch ein ausreichend detailliertes Vorab-Design vollständig vermeiden lässt."
 ],
 correct:[0],
 optExpl:[
  "Richtig: zu Beginn ist Wissen unvollständig, daher iterativ verfeinern.",
  "Architekturentscheidungen sind oft gerade nicht billig änderbar.",
  "Erst nach der Implementierung zu entscheiden wäre viel zu spät.",
  "Kein Vorab-Design beseitigt die anfängliche Unsicherheit vollständig."
 ],
 explanation:"Zu Projektbeginn ist Wissen unvollständig; Entscheidungen werden schrittweise verfeinert. Sie sind oft gerade NICHT beliebig billig änderbar, und ein Vorab-Design beseitigt die Unsicherheit nicht."},
{id:"c1q8",chapter:1,lz:"LZ 01-02",r:"R1",type:"multi",
 q:"Welche Aussagen zum Verhältnis von Architektur und Anforderungen treffen zu?",
 options:[
  "Besonders Qualitätsanforderungen treiben zentrale Architekturentscheidungen.",
  "Architektur und Anforderungen beeinflussen sich wechselseitig und werden iterativ geschärft.",
  "Ausschließlich funktionale Anforderungen bestimmen die Architektur.",
  "Die Architektur wird unabhängig festgelegt und die Anforderungen passen sich ihr danach an.",
  "Anforderungen müssen vollständig und final feststehen, bevor die Architekturarbeit beginnt."
 ],
 correct:[0,1],
 optExpl:[
  "Qualitätsanforderungen sind die stärksten Architekturtreiber.",
  "Architektur und Anforderungen schärfen sich wechselseitig und iterativ.",
  "Nicht nur funktionale – gerade Qualitätsanforderungen prägen die Architektur.",
  "Anforderungen richten sich nicht nachträglich nach einer fixen Architektur.",
  "Architekturarbeit beginnt iterativ, nicht erst nach final fixierten Anforderungen."
 ],
 explanation:"Vor allem Qualitätsanforderungen treiben die Architektur, und beide schärfen sich wechselseitig. Nicht nur funktionale Anforderungen zählen, und die Reihenfolge ist nicht umgekehrt."},
{id:"c1q9",chapter:1,lz:"LZ 01-04",r:"R2",type:"single",
 q:"Welche Tätigkeit ist KEINE zentrale Aufgabe der Architekturrolle?",
 options:[
  "Die kaufmännische Budget- und Vertragsverhandlung mit dem Kunden verantworten.",
  "Übergreifende Querschnittskonzepte (z. B. Persistenz, Sicherheit) festlegen.",
  "Architekturentscheidungen dokumentieren und kommunizieren.",
  "Qualitätsanforderungen gemeinsam mit Stakeholdern klären."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Budget-/Vertragsverhandlung ist keine Architekturaufgabe.",
  "Querschnittskonzepte festzulegen ist sehr wohl Architekturaufgabe.",
  "Entscheidungen dokumentieren und kommunizieren gehört klar dazu.",
  "Qualitätsanforderungen mit Stakeholdern klären ist Kernaufgabe."
 ],
 explanation:"Budget-/Vertragsverhandlung ist keine Architekturaufgabe. Querschnittskonzepte, Dokumentation/Kommunikation und Anforderungsklärung gehören dagegen klar zur Rolle."},
{id:"k5",chapter:1,lz:"LZ 01-01",r:"R1",type:"k",points:2,
 q:"Bewerten Sie jede Aussage: richtig oder falsch?",
 categories:["Richtig","Falsch"],
 rows:[
  {text:"Lose Kopplung und hohe Kohäsion sind erstrebenswert.",cat:0},
  {text:"Ein Architekt muss den gesamten Produktivcode selbst schreiben.",cat:1},
  {text:"Qualitätsanforderungen beeinflussen die Architektur stark.",cat:0},
  {text:"Einmal getroffene Architekturentscheidungen dürfen nie geändert werden.",cat:1}
 ],
 explanation:"Lose Kopplung/hohe Kohäsion und der starke Einfluss von Qualitätsanforderungen sind zentrale, richtige Prinzipien. Der Architekt schreibt nicht allen Code, und Entscheidungen werden iterativ angepasst."},
{id:"c1q10",chapter:1,lz:"LZ 01-02",r:"R1",type:"single",
 q:"Welches ist das zentrale Ziel von Softwarearchitektur?",
 options:[
  "Komplexität beherrschbar machen und das Erreichen der Qualitätsziele unterstützen.",
  "Die spätere Notwendigkeit von Refactorings vollständig ausschließen.",
  "Für jede erdenkliche zukünftige Anforderung schon heute eine Lösung vorhalten.",
  "Die Entwicklungszeit unabhängig von der Qualität minimieren."
 ],
 correct:[0],
 optExpl:[
  "Kern: Komplexität beherrschen und Qualitätsziele erreichen.",
  "Refactorings lassen sich nie ganz ausschließen – kein realistisches Ziel.",
  "„Alles auf Vorrat“ widerspricht YAGNI und ist kein Ziel.",
  "Tempo auf Kosten der Qualität ist kein Architekturziel."
 ],
 explanation:"Ziel ist beherrschbare Komplexität und das Erreichen der Qualitätsziele. Refactorings ganz zu vermeiden, alles auf Vorrat zu bauen (gegen YAGNI) oder Qualität der Geschwindigkeit zu opfern sind keine tragfähigen Ziele."},
{id:"c1q11",chapter:1,lz:"LZ 01-06",r:"R1",type:"multi",
 q:"Welche Aussagen über Stakeholder einer Architektur treffen zu?",
 options:[
  "Stakeholder sind alle Personen/Gruppen mit berechtigtem Interesse am System.",
  "Auch Betrieb, Auftraggeber und Wartungsteam zählen dazu, nicht nur Endnutzer.",
  "Nur Personen mit vertraglicher Zahlungspflicht sind Stakeholder.",
  "Stakeholder sind ausschließlich die Mitglieder des Entwicklungsteams.",
  "Externe Stakeholder wie Behörden oder Gesetzgeber zählen grundsätzlich nicht dazu."
 ],
 correct:[0,1],
 optExpl:[
  "Stakeholder sind alle mit berechtigtem Interesse am System.",
  "Auch Betrieb, Auftraggeber und Wartung zählen dazu, nicht nur Endnutzer.",
  "Zahlungspflicht ist kein Kriterium für Stakeholder-Sein.",
  "Das Entwicklungsteam ist nur eine von vielen Stakeholder-Gruppen.",
  "Auch externe Parteien wie Behörden können ein berechtigtes Interesse haben."
 ],
 explanation:"Stakeholder = alle mit berechtigten Belangen (Nutzer, Betrieb, Auftraggeber, Wartung, Entwicklung …). Weder auf Zahlende noch auf das Entwicklungsteam beschränkt."},
{id:"c1q12",chapter:1,lz:"LZ 01-01",r:"R1",type:"multi",
 q:"Welche Eigenschaften kennzeichnen einen gut geschnittenen Baustein?",
 options:[
  "Hohe Kohäsion – er bündelt zusammengehörige Aufgaben.",
  "Lose Kopplung über eine klar definierte Schnittstelle.",
  "Er teilt seinen internen Zustand direkt mit Nachbarbausteinen, um Umwege zu sparen.",
  "Er bündelt möglichst viele unterschiedliche Zuständigkeiten, um wiederverwendbar zu sein.",
  "Er ist möglichst feingranular, sodass jede einzelne Methode einen eigenen Baustein bildet."
 ],
 correct:[0,1],
 optExpl:[
  "Hohe Kohäsion (zusammengehörige Aufgaben gebündelt) ist erwünscht.",
  "Lose Kopplung über eine klar definierte Schnittstelle ebenfalls.",
  "Interna direkt zu teilen bricht die Kapselung und erhöht die Kopplung.",
  "Viele gemischte Zuständigkeiten bedeuten niedrige Kohäsion – unerwünscht.",
  "Übermäßige Zerteilung erhöht die Kopplung; Granularität allein ist kein Gütemaß."
 ],
 explanation:"Gut geschnitten = hohe Kohäsion und lose Kopplung über klare Schnittstellen. Direktes Teilen von Interna (bricht die Kapselung) und viele gemischte Zuständigkeiten (niedrige Kohäsion) sind Anti-Muster."},
{id:"c1q13",chapter:1,lz:"LZ 01-01",r:"R1",type:"multi",
 q:"Welche Aussagen zur Schnittstelle (Interface) eines Bausteins treffen zu?",
 options:[
  "Sie legt den nach außen sichtbaren Vertrag fest (angebotene bzw. benötigte Operationen).",
  "Sie verbirgt die interne Realisierung, sodass diese austauschbar bleibt.",
  "Sie schreibt die konkrete interne Datenstruktur des Bausteins verbindlich vor.",
  "Sie muss sich zwangsläufig mitändern, sobald die interne Implementierung angepasst wird.",
  "Sie enthält stets die vollständige Implementierung der angebotenen Operationen.",
  "Ein Baustein darf nach außen höchstens eine einzige Schnittstelle anbieten."
 ],
 correct:[0,1],
 optExpl:[
  "Die Schnittstelle ist der nach außen sichtbare Vertrag.",
  "Sie verbirgt die Realisierung, die dadurch austauschbar bleibt.",
  "Sie schreibt keine interne Datenstruktur vor (das wären Interna).",
  "Sie soll gerade stabil bleiben, wenn sich die Implementierung ändert.",
  "Die Schnittstelle definiert nur den Vertrag, nicht die Implementierung.",
  "Ein Baustein kann mehrere Schnittstellen für verschiedene Nutzer anbieten."
 ],
 explanation:"Die Schnittstelle ist der Vertrag und verbirgt die Interna (die dadurch austauschbar bleiben). Sie schreibt keine interne Datenstruktur vor und sollte bei internen Änderungen gerade stabil bleiben."},
{id:"c1q14",chapter:1,lz:"LZ 01-01",r:"R1",type:"single",
 q:"Was versteht man unter der Verantwortlichkeit (Responsibility) eines Bausteins?",
 options:[
  "Die klar umrissene Aufgabe, für die er zuständig ist (das WAS).",
  "Die konkrete technische Umsetzung, mit der er seine Aufgabe erfüllt (das WIE).",
  "Die Menge aller Bausteine, von denen er abhängt.",
  "Die Position, die er in der Schichtenhierarchie einnimmt."
 ],
 correct:[0],
 optExpl:[
  "Verantwortlichkeit = die klar umrissene Aufgabe (das WAS).",
  "Die konkrete Umsetzung ist das WIE, nicht die Verantwortlichkeit.",
  "Die Menge der Abhängigkeiten ist etwas anderes.",
  "Die Schichtposition beschreibt nicht die Verantwortlichkeit."
 ],
 explanation:"Verantwortlichkeit = die klar umrissene Aufgabe (das WAS). Die Umsetzung (das WIE), die Abhängigkeiten oder die Schichtposition sind etwas anderes."},
{id:"c1q15",chapter:1,lz:"LZ 01-02",r:"R1",type:"single",
 q:"Warum ist eine Architektur nur dann wirksam, wenn sie in der Implementierung eingehalten wird?",
 options:[
  "Weil die angestrebten Eigenschaften (z. B. Wartbarkeit) nur entstehen, wenn der Code der Struktur folgt.",
  "Weil die Architektur den passenden Code automatisch generiert, sobald sie dokumentiert ist.",
  "Weil Abweichungen im Code die Diagramme automatisch mit aktualisieren.",
  "Weil das Programm ohne exakte Einhaltung gar nicht kompiliert."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Qualitäten entstehen nur, wenn der Code der Struktur folgt.",
  "Dokumentation erzeugt keinen Code – Architektur setzt sich nicht selbst um.",
  "Diagramme aktualisieren sich bei Code-Abweichungen nicht automatisch.",
  "Abweichungen verhindern kein Kompilieren – der Code läuft trotzdem."
 ],
 explanation:"Nur wenn der Code der Architektur folgt, stellen sich deren Qualitäten ein (sonst Architekturerosion). Code entsteht nicht automatisch, Diagramme aktualisieren sich nicht selbst, und Abweichungen verhindern keine Kompilierung."},
{id:"c1q16",chapter:1,lz:"LZ 01-01",r:"R2",type:"single",
 q:"Auf welchen Ebenen beschreibt Softwarearchitektur Strukturen?",
 options:[
  "Auf mehreren Abstraktionsebenen – vom Gesamtsystem über Subsysteme bis zu einzelnen Bausteinen.",
  "Nur auf der obersten Ebene des Gesamtsystems; alles Feinere ist reine Programmierung ohne Architekturbezug.",
  "Ausschließlich auf Ebene einzelner Klassen und Methoden.",
  "Nur auf Ebene der eingesetzten Infrastruktur und Server."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Strukturen auf mehreren Ebenen (System → Subsysteme → Bausteine).",
  "Auch feinere Ebenen haben Architekturbezug, nicht nur die oberste.",
  "Nur Klassen/Methoden greift zu tief und zu eng.",
  "Infrastruktur ist nur eine Ebene, nicht die einzige."
 ],
 explanation:"Architektur betrachtet Strukturen hierarchisch auf mehreren Ebenen. Die anderen Optionen greifen jeweils zu kurz (nur oben, nur unten oder nur Infrastruktur)."},
{id:"c1q17",chapter:1,lz:"LZ 01-02",r:"R1",type:"multi",
 q:"Welche Aussagen über den Nutzen von Softwarearchitektur treffen zu?",
 options:[
  "Sie hilft, Komplexität beherrschbar zu machen.",
  "Sie ermöglicht arbeitsteilige Entwicklung im Team.",
  "Sie schafft eine gemeinsame Grundlage für die Kommunikation der Stakeholder.",
  "Sie stellt die Korrektheit der Implementierung sicher, sodass Tests entfallen können.",
  "Sie garantiert, dass das Projekt im geplanten Budget- und Zeitrahmen bleibt."
 ],
 correct:[0,1,2],
 optExpl:[
  "Komplexität beherrschbar machen ist ein Kernnutzen.",
  "Arbeitsteilige Entwicklung wird erst durch Struktur möglich.",
  "Sie schafft eine gemeinsame Kommunikationsgrundlage.",
  "Korrektheit garantiert sie nicht – Tests bleiben nötig.",
  "Budget- und Termintreue hängen von vielen Faktoren ab, nicht nur von der Architektur."
 ],
 explanation:"Architektur beherrscht Komplexität, ermöglicht Arbeitsteilung und Kommunikation. Sie garantiert aber keine korrekte Implementierung – Tests bleiben nötig."},
{id:"c1q18",chapter:1,lz:"LZ 01-02",r:"R2",type:"single",
 q:"Wie entsteht eine Softwarearchitektur in einem iterativen Vorgehen typischerweise?",
 options:[
  "Schrittweise: tragende Entscheidungen früh, Details werden über Iterationen verfeinert.",
  "Vollständig und endgültig vor Implementierungsbeginn, ohne spätere Anpassung.",
  "Rein zufällig-emergent, ganz ohne bewusste übergreifende Entscheidungen.",
  "Erst nachträglich, als reine Dokumentation des bereits fertigen Codes."
 ],
 correct:[0],
 optExpl:[
  "Richtig: tragende Entscheidungen früh, Details über Iterationen.",
  "Ein vollständiges Vorab-Design (BDUF) ohne Anpassung ist untypisch.",
  "Rein zufällig-emergent ohne bewusste Entscheidungen ist kein Ziel.",
  "Architektur ist mehr als nachträgliche Doku des fertigen Codes."
 ],
 explanation:"Iterativ heißt: wichtige Entscheidungen früh, Verfeinerung über die Zeit – weder komplettes Vorab-Design (BDUF) noch planlos noch erst am Ende dokumentiert."},
{id:"c1q19",chapter:1,lz:"LZ 01-01",r:"R2",type:"single",
 q:"Worin unterscheiden sich Architektur und Detailentwurf (Design)?",
 options:[
  "Architektur trifft die übergreifenden, weitreichenden Strukturentscheidungen; der Detailentwurf konkretisiert innerhalb dieser Vorgaben.",
  "Die Grenze ist scharf und formal definiert: Ab einer festgelegten Bausteingröße beginnt zwingend der Detailentwurf.",
  "Der Detailentwurf entsteht zuerst und wird anschließend zur Architektur zusammengefasst.",
  "Beide bezeichnen dasselbe, nur in unterschiedlichen Projektphasen."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Architektur = weitreichende Struktur, Detailentwurf verfeinert darin.",
  "Die Grenze ist fließend und kontextabhängig, nicht formal an einer Größe.",
  "Die Reihenfolge stimmt nicht – Architektur rahmt den Detailentwurf.",
  "Beide sind nicht dasselbe, sondern verschiedene Abstraktionsebenen."
 ],
 explanation:"Architektur = große, folgenreiche Strukturentscheidungen; der Detailentwurf verfeinert innerhalb dieser. Die Grenze ist fließend und kontextabhängig, nicht formal an einer Größe festgemacht; die Reihenfolge ist nicht umgekehrt, und identisch sind beide auch nicht."},
{id:"c1q20",chapter:1,lz:"LZ 01-06",r:"R1",type:"single",
 q:"Warum ist Kommunikation eine Kernkompetenz von Softwarearchitekt:innen?",
 options:[
  "Weil sie zwischen Stakeholdern vermitteln und Entscheidungen nachvollziehbar begründen müssen.",
  "Weil sie die Architektur ausschließlich mündlich statt schriftlich weitergeben sollen.",
  "Weil die technische Qualität zweitrangig ist, solange die Architektur gut präsentiert wird.",
  "Weil gute Kommunikation Architekturdokumentation vollständig überflüssig macht."
 ],
 correct:[0],
 optExpl:[
  "Richtig: zwischen Stakeholdern vermitteln und Entscheidungen begründen.",
  "Nicht nur mündlich – Wichtiges gehört auch dokumentiert.",
  "Technische Qualität bleibt zentral, nicht nur die Präsentation.",
  "Kommunikation ersetzt Dokumentation nicht."
 ],
 explanation:"Architektur lebt von gemeinsamem Verständnis: vermitteln und begründen. Mündlich-only, Präsentation über Substanz oder 'Reden ersetzt Doku' sind falsch."},
{id:"c1q21",chapter:1,lz:"LZ 01-02",r:"R2",type:"single",
 q:"Wozu dient ein früher Durchstich (Prototyp/Proof of Concept) beim Architekturentwurf?",
 options:[
  "Zentrale technische Risiken und die Machbarkeit früh zu überprüfen.",
  "Eine erste, bereits produktionsreife Version an die Nutzer auszuliefern.",
  "Die vollständige Fachlichkeit end-to-end fertig zu implementieren.",
  "Den Gesamtaufwand verbindlich und abschließend zu schätzen."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Machbarkeit und zentrale technische Risiken früh prüfen.",
  "Ein Durchstich ist bewusst nicht produktionsreif.",
  "Er implementiert nicht die vollständige Fachlichkeit.",
  "Eine verbindliche Endaufwandsschätzung liefert er nicht."
 ],
 explanation:"Ein Durchstich prüft riskante Annahmen/Machbarkeit früh. Er ist bewusst nicht produktionsreif, nicht fachlich vollständig und liefert keine verbindliche Endaufwandsschätzung."},
{id:"c1q22",chapter:1,lz:"LZ 01-01",r:"R1",type:"multi",
 q:"Was kennzeichnet eine 'gute' Softwarearchitektur?",
 options:[
  "Sie erfüllt die geforderten Qualitätsziele unter den gegebenen Randbedingungen.",
  "Sie ist so einfach und verständlich wie möglich (aber nicht einfacher).",
  "Sie setzt möglichst viele aktuelle Technologien ein, um zukunftssicher zu wirken.",
  "Sie ist maximal flexibel und für jede denkbare künftige Anforderung vorbereitet.",
  "Sie orientiert sich strikt an einem allgemeingültigen Referenzmodell, unabhängig vom Projektkontext."
 ],
 correct:[0,1],
 optExpl:[
  "Gut = die geforderten Qualitätsziele unter den Randbedingungen erfüllt.",
  "So einfach wie möglich (aber nicht einfacher) ist ein Gütemerkmal.",
  "Technologievielfalt um ihrer selbst willen ist kein Gütekriterium.",
  "Über-Flexibilität auf Vorrat widerspricht YAGNI.",
  "Gute Architektur ist kontextabhängig, nicht durch ein starres Referenzmodell bestimmt."
 ],
 explanation:"Gut = Qualitätsziele erfüllt und angemessen einfach. Technologievielfalt um ihrer selbst willen und Über-Flexibilität auf Vorrat (gegen YAGNI) sind keine Gütekriterien."},
{id:"c1q23",chapter:1,lz:"LZ 01-01",r:"R2",type:"single",
 q:"Wie grenzt man die Begriffe „Baustein“ und „Komponente“ am besten ab?",
 options:[
  "„Baustein“ ist der konzeptionelle Oberbegriff; eine Komponente ist ein konkreter Baustein mit klar definierten Schnittstellen.",
  "Ein Baustein ist stets eine Laufzeiteinheit, eine Komponente stets eine reine Entwurfszeiteinheit.",
  "Die Begriffe sind exakt synonym und unterscheiden sich nur sprachlich.",
  "Ein Baustein ist immer größer als eine Komponente und enthält mehrere davon."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Baustein = Oberbegriff, Komponente = konkreter Baustein mit Schnittstellen.",
  "Es ist keine Laufzeit-/Entwurfszeit-Unterscheidung.",
  "Sie sind nicht exakt synonym – Komponente ist spezifischer.",
  "Es ist keine Größenfrage."
 ],
 explanation:"„Baustein“ ist der allgemeine, eher konzeptionelle Begriff (Problemraum); eine Komponente ist dessen konkretere Ausprägung mit definierten Schnittstellen (Lösungsraum). Es ist keine reine Laufzeit-/Entwurfszeit- oder Größenfrage und nicht bloß synonym."},
{id:"c1q24",chapter:1,lz:"LZ 01-05",r:"R2",type:"single",
 q:"Warum verzichtet der CPSA-Foundation-Lehrplan bewusst auf eine einzige, verbindliche Definition von „Softwarearchitektur“?",
 options:[
  "Weil zahlreiche etablierte Definitionen existieren und man sich auf deren gemeinsame Kernaspekte (Bausteine, Beziehungen, Entscheidungen) stützt.",
  "Weil Softwarearchitektur ein zu junges Feld ist, um überhaupt definiert werden zu können.",
  "Weil eine Definition den Prüfungsstoff unnötig vereinfachen würde.",
  "Weil sich Fachleute grundsätzlich nicht über den Nutzen von Architektur einig sind."
 ],
 correct:[0],
 optExpl:[
  "Richtig: viele etablierte Definitionen → man nutzt deren gemeinsame Kernaspekte.",
  "Architektur ist kein zu junges Feld – es ist gut erforscht.",
  "Eine Definition würde den Stoff nicht „unnötig vereinfachen“.",
  "Über den Nutzen herrscht weitgehend Einigkeit."
 ],
 explanation:"Es gibt viele anerkannte Definitionen; der Lehrplan nutzt deren Schnittmenge (Bausteine, Beziehungen, tragende Entscheidungen). Weder mangelnde Reife noch fehlende Einigkeit über den Nutzen sind der Grund."},
{id:"c1q25",chapter:1,lz:"LZ 01-05",r:"R3",type:"single",
 q:"Auf welche Ebene zielt der CPSA-Foundation-Stoff in erster Linie?",
 options:[
  "Auf die Softwarearchitektur eines einzelnen Systems.",
  "Auf die unternehmensweite Enterprise-Architektur über alle Systeme hinweg.",
  "Auf die physische Netzwerk- und Rechenzentrumsinfrastruktur.",
  "Auf die Geschäftsprozess- und Organisationsarchitektur des Unternehmens."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Foundation zielt auf die Architektur eines einzelnen Systems.",
  "Enterprise-Architektur (alle Systeme) liegt oberhalb dieser Ebene.",
  "Netz-/Rechenzentrumsinfrastruktur ist eine andere, tiefere Ebene.",
  "Geschäftsprozess-/Organisationsarchitektur ist nicht der Fokus."
 ],
 explanation:"Foundation behandelt die Architektur eines einzelnen Systems. Enterprise-, Infrastruktur- und Geschäftsprozessarchitektur liegen ober- bzw. unterhalb dieser Ebene."},
{id:"c1q26",chapter:1,lz:"LZ 01-01",r:"R2",type:"multi",
 q:"Welche Aussagen zum Strukturbegriff in der Softwarearchitektur treffen zu?",
 options:[
  "Ein System hat immer mindestens eine Struktur – notfalls eine ungeplante.",
  "Architektur umfasst neben statischen Strukturen auch das Verhalten zur Laufzeit.",
  "Ein gut entworfenes System besitzt genau eine einzige relevante Struktur.",
  "Strukturen bestehen ausschließlich aus Bausteinen; Beziehungen spielen keine Rolle.",
  "Nur explizit dokumentierte Strukturen existieren tatsächlich im System.",
  "Verschiedene Sichten auf ein System müssen stets dieselbe Struktur zeigen."
 ],
 correct:[0,1],
 optExpl:[
  "Richtig: jedes System hat mindestens eine (ggf. ungeplante) Struktur.",
  "Architektur schließt auch das Laufzeitverhalten ein, nicht nur Statik.",
  "Systeme haben typischerweise mehrere Strukturen/Sichten, nicht nur eine.",
  "Beziehungen sind zwingender Teil von Strukturen.",
  "Auch undokumentierte, implizite Strukturen sind real vorhanden.",
  "Unterschiedliche Sichten zeigen bewusst verschiedene Strukturen des Systems."
 ],
 explanation:"Jedes System hat mindestens eine (ggf. ungewollte) Struktur, und Architektur schließt das Laufzeitverhalten ein. Systeme haben typischerweise mehrere Sichten/Strukturen, und Beziehungen gehören zwingend dazu."},
{id:"c1q27",chapter:1,lz:"LZ 01-07",r:"R2",type:"single",
 q:"Welche Rolle spielen Daten und Datenmodelle für die Softwarearchitektur?",
 options:[
  "Das Datenmodell ist eine tragende Architekturentscheidung – oft langlebig und nachträglich schwer zu ändern.",
  "Daten sind ein reines Implementierungsdetail ohne Einfluss auf die Architektur.",
  "Das Datenmodell wird sinnvollerweise erst nach Fertigstellung der Architektur festgelegt.",
  "Datenmodelle betreffen ausschließlich die Benutzeroberfläche."
 ],
 correct:[0],
 optExpl:[
  "Richtig: das Datenmodell ist eine tragende, langlebige Entscheidung.",
  "Daten sind kein bloßes Detail – sie prägen die Architektur stark.",
  "Das Datenmodell wird nicht erst nach der Architektur festgelegt.",
  "Datenmodelle betreffen weit mehr als die Oberfläche."
 ],
 explanation:"Das Datenmodell prägt die Architektur stark und ist meist langlebig und teuer zu ändern (vergleichbar der „Statik“ eines Gebäudes). Es ist kein bloßes Detail, keine nachgelagerte Entscheidung und nicht auf die UI beschränkt."},
{id:"c1q28",chapter:1,lz:"LZ 01-07",r:"R2",type:"single",
 q:"Auf welchen Abstraktionsebenen werden Datenmodelle typischerweise beschrieben?",
 options:[
  "Konzeptionell, logisch und physisch.",
  "Ausschließlich physisch (konkrete Tabellen und Spalten).",
  "Nur als UML-Klassendiagramm, sonst gar nicht.",
  "Auf Kontext-, Baustein- und Laufzeitebene."
 ],
 correct:[0],
 optExpl:[
  "Richtig: konzeptionell, logisch und physisch.",
  "Nicht nur physisch – die fachliche/logische Ebene fehlt dann.",
  "Ein UML-Klassendiagramm ist nur eine mögliche Darstellung.",
  "Kontext/Baustein/Laufzeit sind Architektursichten, keine Datenmodell-Ebenen."
 ],
 explanation:"Datenmodelle werden konzeptionell (fachlich), logisch (strukturiert, technologieneutral) und physisch (konkrete Umsetzung) beschrieben. Kontext-, Baustein- und Laufzeit sind Architektursichten, keine Datenmodell-Ebenen."},
{id:"c1q29",chapter:1,lz:"LZ 01-07",r:"R2",type:"multi",
 q:"Welche Aussagen zum Zusammenhang von Datenmodell und Architektur treffen zu?",
 options:[
  "Wer welche Daten besitzt und ändern darf (Datenhoheit), beeinflusst den fachlichen Schnitt der Bausteine.",
  "Ein gemeinsames, von allen Bausteinen direkt genutztes Datenmodell kann die Kopplung stark erhöhen.",
  "Das Datenmodell ist unabhängig vom Schnitt der Bausteine frei wählbar.",
  "Datenhoheit ist für Microservices irrelevant.",
  "Das Datenmodell sollte grundsätzlich erst nach Fertigstellung der Architektur entworfen werden."
 ],
 correct:[0,1],
 optExpl:[
  "Richtig: Datenhoheit beeinflusst den fachlichen Bausteinschnitt.",
  "Ein geteiltes, direkt genutztes Datenmodell erhöht die Kopplung stark.",
  "Datenmodell und Schnitt hängen zusammen – nicht frei wählbar.",
  "Gerade bei Microservices ist Datenhoheit zentral (eigene DB je Service).",
  "Datenmodell und Architektur entstehen wechselseitig, nicht streng nacheinander."
 ],
 explanation:"Datenhoheit prägt den Bausteinschnitt, und ein geteiltes, direkt genutztes Datenmodell koppelt stark (bei Microservices deshalb eigene Datenhaltung je Service). Datenmodell und Schnitt hängen also zusammen."},
/* ===== Kapitel 2 ===== */
{id:"c2q1",chapter:2,lz:"LZ 02-02",r:"R1",type:"multi",
 q:"Welche Aussagen ordnen die Anforderungsbegriffe korrekt zu?",
 options:[
  "Eine Randbedingung schränkt den Lösungsraum ein, ohne selbst Funktion oder Qualität zu sein.",
  "Eine Qualitätsanforderung beschreibt, WIE GUT etwas sein soll (z. B. die Antwortzeit).",
  "Eine funktionale Anforderung legt die einzuhaltende Antwortzeit fest.",
  "Eine Randbedingung ist lediglich eine besonders wichtige funktionale Anforderung.",
  "Eine Qualitätsanforderung legt fest, welche Funktionen das System bereitstellt."
 ],
 correct:[0,1],
 optExpl:[
  "Randbedingungen grenzen den Lösungsraum ein, sind selbst weder Funktion noch Qualität.",
  "Qualitätsanforderungen beschreiben das WIE GUT, etwa die geforderte Antwortzeit.",
  "Antwortzeit ist eine Qualitätsanforderung, keine funktionale Anforderung.",
  "Eine Randbedingung ist keine besonders wichtige funktionale Anforderung.",
  "Welche Funktionen bereitstehen, beschreibt eine funktionale Anforderung, nicht die Qualität."
 ],
 explanation:"Randbedingungen grenzen den Lösungsraum ein; Qualitätsanforderungen beschreiben das WIE GUT. Antwortzeit ist keine funktionale Anforderung, und eine Randbedingung ist keine 'wichtige' funktionale Anforderung."},
{id:"c2q2",chapter:2,lz:"LZ 02-03",r:"R1",type:"multi",
 q:"Welche Aussagen zur Bedeutung von Qualitätsanforderungen für die Architektur treffen zu?",
 options:[
  "Sie sind maßgebliche Architektur-Treiber und prägen Strukturentscheidungen stark.",
  "Sie sollten früh geklärt werden, da spätere Änderungen teuer sind.",
  "Sie werden erst nach der funktionalen Fertigstellung betrachtet.",
  "Sie betreffen fast ausschließlich die Gestaltung der Benutzeroberfläche.",
  "Ihre Erfüllung liegt allein in der Verantwortung des Testteams, nicht der Architektur.",
  "Sie sind für die Architektur weniger bedeutsam als die funktionalen Anforderungen."
 ],
 correct:[0,1],
 optExpl:[
  "Qualitätsanforderungen sind zentrale Architektur-Treiber und prägen Strukturentscheidungen stark.",
  "Frühe Klärung lohnt sich, weil spätere Änderungen teuer werden.",
  "Sie erst nach der Funktionalität zu betrachten wäre zu spät.",
  "Sie betreffen die gesamte Architektur, nicht nur die Oberfläche.",
  "Die Architektur muss Qualitätsmerkmale ermöglichen – nicht nur nachträglich prüfen.",
  "Qualitätsanforderungen sind die maßgeblichen Architektur-Treiber, nicht die Funktionen."
 ],
 explanation:"Qualitätsanforderungen treiben die Architektur und sollten früh geklärt werden. Sie erst am Ende zu betrachten oder auf die Oberfläche zu reduzieren wäre falsch."},
{id:"c2q3",chapter:2,lz:"LZ 02-02",r:"R2",type:"multi",
 q:"Welche der folgenden sind Randbedingungen?",
 options:[
  "Eine vorgeschriebene Programmiersprache oder Zielplattform.",
  "Ein fest vorgegebener Liefertermin.",
  "Eine geforderte maximale Antwortzeit der Suche.",
  "Die Möglichkeit, Berichte als PDF zu exportieren.",
  "Eine geforderte Verfügbarkeit von 99,9 Prozent im Jahresmittel."
 ],
 correct:[0,1],
 optExpl:[
  "Technologievorgaben wie Sprache oder Plattform sind klassische Randbedingungen.",
  "Ein fester Liefertermin ist eine organisatorische Randbedingung.",
  "Eine geforderte Antwortzeit ist eine Qualitätsanforderung, keine Randbedingung.",
  "PDF-Export beschreibt eine Funktion, also eine funktionale Anforderung.",
  "Eine geforderte Verfügbarkeit ist eine Qualitätsanforderung, keine Randbedingung."
 ],
 explanation:"Technologie- und Terminvorgaben sind Randbedingungen. Eine geforderte Antwortzeit ist eine Qualitätsanforderung, der PDF-Export eine funktionale Anforderung."},
{id:"c2q4",chapter:2,lz:"LZ 02-04",r:"R1",type:"single",
 q:"Wie macht man eine vage Qualitätsanforderung wie 'Das System soll schnell sein' überprüfbar?",
 options:[
  "Durch ein Qualitätsszenario mit Auslöser, Kontext und messbarem Antwortmaß.",
  "Indem man verbindlich festlegt, dass 'schnell' subjektiv vom Team beurteilt wird.",
  "Indem man sie in eine Randbedingung zur Wahl einer schnellen Programmiersprache umwandelt.",
  "Indem man die Präzisierung vertagt, bis erste Performancemessungen im Betrieb vorliegen."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Ein Qualitätsszenario mit Auslöser, Kontext und messbarem Antwortmaß macht sie überprüfbar.",
  "Ein subjektives Urteil bleibt vage und ist gerade nicht messbar.",
  "Eine Technologie-Randbedingung macht die Anforderung nicht messbar.",
  "Späte Messungen im Betrieb präzisieren die Anforderung nicht vorab."
 ],
 explanation:"Überprüfbar wird sie durch ein Qualitätsszenario mit messbarem Antwortmaß (z. B. '95 % der Suchen unter 1 s'). Subjektive Urteile, eine Technologie-Randbedingung oder späte Messungen machen sie nicht messbar."},
{id:"c2q5",chapter:2,lz:"LZ 02-01",r:"R2",type:"single",
 q:"Wer ist für das Klären und Verstehen der Anforderungen mitverantwortlich?",
 options:[
  "Auch die Architekt:innen – sie hinterfragen und schärfen Anforderungen aktiv mit.",
  "Allein die Stakeholder; die Architektur übernimmt die Anforderungen unverändert.",
  "Ausschließlich die Business-Analyst:innen, ohne Beteiligung der Technik.",
  "Niemand gezielt, da vollständige Anforderungen bereits zu Projektbeginn vorliegen."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Architekt:innen hinterfragen und schärfen Anforderungen aktiv mit.",
  "Die Architektur übernimmt Anforderungen nicht unverändert, sondern klärt aktiv mit.",
  "Auch die Technik muss beteiligt sein, nicht nur die Analyst:innen.",
  "Anforderungen liegen zu Projektbeginn selten vollständig vor."
 ],
 explanation:"Architekt:innen sind aktiv an der Klärung beteiligt (keine bloßen Empfänger). Anforderungen liegen zu Beginn selten vollständig vor, und die Technik gehört einbezogen."},
{id:"c2q6",chapter:2,lz:"LZ 02-03",r:"R2",type:"single",
 q:"Welches der folgenden ist ein Hauptmerkmal (Top-Level) der Produktqualität nach ISO/IEC 25010?",
 options:[
  "Wartbarkeit (Maintainability)",
  "Skalierbarkeit (Scalability)",
  "Testabdeckung (Code Coverage)",
  "Wirtschaftlichkeit (Projektkosten)"
 ],
 correct:[0],
 optExpl:[
  "Richtig: Wartbarkeit ist ein Hauptmerkmal der ISO 25010.",
  "Skalierbarkeit ist nur ein Unteraspekt, kein eigenständiges Hauptmerkmal.",
  "Testabdeckung ist kein Produktqualitätsmerkmal der ISO 25010.",
  "Projektkosten sind kein Produktqualitätsmerkmal, sondern wirtschaftlicher Natur."
 ],
 explanation:"Wartbarkeit ist ein Hauptmerkmal der ISO 25010. Skalierbarkeit ist nur ein Unteraspekt (u. a. der „Flexibilität“), kein eigenständiges Hauptmerkmal; Testabdeckung und Projektkosten sind gar keine Produktqualitätsmerkmale."},
{id:"c2q7",chapter:2,lz:"LZ 02-02",r:"R1",type:"single",
 q:"Welche der folgenden ist eine funktionale Anforderung?",
 options:[
  "Der Nutzer kann Rechnungen als PDF exportieren.",
  "Antworten erscheinen in unter 200 ms.",
  "Das System ist rund um die Uhr zu 99,9 % verfügbar.",
  "Für die Umsetzung ist die Sprache Java vorgeschrieben."
 ],
 correct:[0],
 optExpl:[
  "Richtig: PDF-Export beschreibt, WAS das System tut – eine Funktion.",
  "Eine Antwortzeit beschreibt WIE GUT – eine Qualitätsanforderung.",
  "Verfügbarkeit ist eine Qualitätsanforderung, keine Funktion.",
  "Eine vorgeschriebene Sprache ist eine Randbedingung."
 ],
 explanation:"Funktionale Anforderungen beschreiben, WAS das System tut (PDF-Export). Antwortzeit und Verfügbarkeit sind Qualitätsanforderungen; die Java-Vorgabe ist eine Randbedingung."},
{id:"k1",chapter:2,lz:"LZ 02-03",r:"R1",type:"k",points:2,
 q:"Ordnen Sie jede Aussage zu: funktionale Anforderung oder Qualitätsanforderung?",
 categories:["Funktionale Anforderung","Qualitätsanforderung"],
 rows:[
  {text:"Der Nutzer kann Rechnungen als PDF exportieren.",cat:0},
  {text:"Die Suche liefert Ergebnisse in unter 1 Sekunde.",cat:1},
  {text:"Das System ist zu 99,9 % verfügbar.",cat:1},
  {text:"Ein Administrator kann neue Benutzer anlegen.",cat:0}
 ],
 explanation:"Funktionale Anforderungen beschreiben, WAS das System tut (PDF-Export, Benutzerverwaltung). Antwortzeit und Verfügbarkeit sind Qualitätsanforderungen."},
{id:"k2",chapter:2,lz:"LZ 02-02",r:"R1",type:"k",points:2,
 q:"Ordnen Sie jede Vorgabe zu: Randbedingung oder Qualitätsanforderung?",
 categories:["Randbedingung","Qualitätsanforderung"],
 rows:[
  {text:"Es muss die Programmiersprache Java verwendet werden.",cat:0},
  {text:"Die Antwortzeit liegt unter 200 ms.",cat:1},
  {text:"Fester Liefertermin zum Ende des 1. Quartals.",cat:0},
  {text:"Eine neue Zahlart ist in unter 2 Personentagen integrierbar.",cat:1}
 ],
 explanation:"Randbedingungen (vorgeschriebene Technologie, Termin) begrenzen den Lösungsraum. Antwortzeit (Performanz) und leichte Erweiterbarkeit (Wartbarkeit) sind Qualitätsanforderungen."},
{id:"c2q8",chapter:2,lz:"LZ 02-03",r:"R1",type:"multi",
 q:"Welche gehören zu den Produktqualitätsmerkmalen der ISO/IEC 25010?",
 options:[
  "Zuverlässigkeit (Reliability)",
  "Informationssicherheit (Security)",
  "Testabdeckung (Code Coverage)",
  "Einhaltung des Projektbudgets",
  "Skalierbarkeit (Scalability)"
 ],
 correct:[0,1],
 optExpl:[
  "Zuverlässigkeit ist ein Produktqualitätsmerkmal der ISO 25010.",
  "Informationssicherheit ist ein Produktqualitätsmerkmal der ISO 25010.",
  "Testabdeckung ist messbar, aber kein ISO-25010-Qualitätsmerkmal.",
  "Budgeteinhaltung ist kein Produktqualitätsmerkmal nach ISO 25010.",
  "Skalierbarkeit ist kein eigenständiges Produktqualitätsmerkmal der ISO 25010."
 ],
 explanation:"Zuverlässigkeit und Informationssicherheit sind ISO-25010-Produktqualitätsmerkmale. Testabdeckung und Budgeteinhaltung sind zwar messbar, aber keine Produktqualitätsmerkmale nach ISO 25010 (das Modell wurde 2023 überarbeitet; Portabilität ging z. B. in „Flexibilität“ auf)."},
{id:"c2q9",chapter:2,lz:"LZ 02-03",r:"R1",type:"single",
 q:"Warum sollten Qualitätsanforderungen möglichst früh geklärt werden?",
 options:[
  "Weil sie die Architektur maßgeblich prägen und nachträgliche Strukturänderungen teuer sind.",
  "Weil sie nach dem ersten Release nicht mehr geändert werden dürfen.",
  "Weil sie andernfalls automatisch zu funktionalen Anforderungen werden.",
  "Weil sie ausschließlich die Testphase betreffen und dort früh gebraucht werden."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Sie prägen die Architektur, und späte Strukturänderungen sind teuer.",
  "Qualitätsanforderungen sind nach dem Release nicht eingefroren.",
  "Sie werden nicht automatisch zu funktionalen Anforderungen.",
  "Sie betreffen die gesamte Architektur, nicht nur die Testphase."
 ],
 explanation:"Früh geklärt, weil sie die Architektur treiben und späte Änderungen teuer sind. Sie sind nicht 'eingefroren', werden nicht zu funktionalen Anforderungen und betreffen nicht nur die Tests."},
{id:"c2q10",chapter:2,lz:"LZ 02-03",r:"R1",type:"single",
 q:"Ein Stakeholder fordert: 'Das System muss auch von sehbehinderten Nutzern bedienbar sein.' Um welche Art Anforderung handelt es sich?",
 options:[
  "Um eine Qualitätsanforderung (Benutzbarkeit/Barrierefreiheit).",
  "Um eine funktionale Anforderung, da eine konkrete Funktion beschrieben wird.",
  "Um eine Randbedingung, da sie die technische Umsetzung vorschreibt.",
  "Um ein Nicht-Ziel, das den Umfang begrenzt."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Barrierefreiheit ist ein Aspekt der Benutzbarkeit – eine Qualitätsanforderung.",
  "Es wird keine konkrete Funktion beschrieben, sondern eine Qualität.",
  "Sie schreibt keine Technik vor, ist also keine Randbedingung.",
  "Sie schließt nichts aus, ist also kein Nicht-Ziel."
 ],
 explanation:"Barrierefreiheit ist ein Aspekt der Benutzbarkeit – also eine Qualitätsanforderung. Sie beschreibt keine konkrete Funktion, schreibt keine Technik vor und ist kein Nicht-Ziel."},
{id:"c2q11",chapter:2,lz:"LZ 02-02",r:"R1",type:"multi",
 q:"Welche Aussagen zur Priorisierung von Anforderungen treffen zu?",
 options:[
  "Zeit und Budget sind begrenzt – nicht alles ist gleich wichtig.",
  "Anforderungen können einander widersprechen und müssen abgewogen werden.",
  "Niedriger priorisierte Anforderungen dürfen danach ersatzlos ignoriert werden.",
  "Die Priorisierung richtet sich allein nach dem technischen Umsetzungsaufwand.",
  "Eine einmal festgelegte Priorisierung bleibt über das gesamte Projekt hinweg unverändert."
 ],
 correct:[0,1],
 optExpl:[
  "Begrenzte Ressourcen erzwingen Prioritäten – nicht alles ist gleich wichtig.",
  "Widersprüchliche Anforderungen müssen gegeneinander abgewogen werden.",
  "Niedrig Priorisiertes ist nicht automatisch ersatzlos gestrichen.",
  "Neben dem Aufwand zählen auch Wert und Risiko.",
  "Prioritäten ändern sich im Projektverlauf und müssen fortlaufend überprüft werden."
 ],
 explanation:"Priorisiert wird, weil Ressourcen begrenzt sind und Anforderungen konkurrieren. Niedrig Priorisiertes ist nicht automatisch gestrichen, und der Aufwand ist nicht das alleinige Kriterium (auch Wert und Risiko zählen)."},
{id:"c2q12",chapter:2,lz:"LZ 02-03",r:"R1",type:"single",
 q:"Was gilt typischerweise für das Verhältnis verschiedener Qualitätsanforderungen zueinander?",
 options:[
  "Sie stehen oft in Zielkonflikt (Trade-off) und müssen gegeneinander abgewogen werden.",
  "Sie sind bei guter Architektur alle gleichzeitig maximal erfüllbar.",
  "Sie sind voneinander unabhängig und beeinflussen sich nie.",
  "Es ist stets nur eine einzige Qualitätsanforderung gleichzeitig relevant."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Qualitätsmerkmale konkurrieren oft und müssen abgewogen werden.",
  "Sie sind selten alle gleichzeitig maximal erfüllbar.",
  "Sie sind nicht unabhängig, sondern beeinflussen sich gegenseitig.",
  "Meist sind mehrere Qualitätsanforderungen zugleich relevant."
 ],
 explanation:"Qualitätsmerkmale konkurrieren häufig (Trade-offs) und müssen abgewogen werden. Sie sind selten gleichzeitig maximierbar, nicht unabhängig und nicht einzeln-exklusiv."},
{id:"c2q13",chapter:2,lz:"LZ 02-05",r:"R2",type:"multi",
 q:"Welche Aussagen zu einer Annahme (Assumption) im Architekturkontext treffen zu?",
 options:[
  "Sie ist ein als gegeben unterstellter, aber nicht gesicherter Sachverhalt.",
  "Sie sollte explizit festgehalten und als Risiko behandelt werden, falls sie nicht zutrifft.",
  "Sie ist eine verbindliche Vorgabe, die den Lösungsraum einschränkt.",
  "Sie ist eine gemessene Kennzahl über das bestehende System.",
  "Sie ist eine getroffene Entscheidung, die den Architekturentwurf verbindlich festlegt.",
  "Einmal getroffen, darf sie im weiteren Projektverlauf nicht mehr hinterfragt werden."
 ],
 correct:[0,1],
 optExpl:[
  "Eine Annahme ist unterstellt, aber nicht gesichert.",
  "Sie sollte dokumentiert und als Risiko verfolgt werden.",
  "Eine verbindliche, einschränkende Vorgabe ist eine Randbedingung.",
  "Eine gemessene Kennzahl ist keine unbestätigte Annahme.",
  "Eine verbindliche Festlegung ist eine Entscheidung, keine unbestätigte Annahme.",
  "Annahmen müssen laufend überprüft und bei Bedarf revidiert werden."
 ],
 explanation:"Eine Annahme ist unbestätigt und sollte dokumentiert sowie als Risiko verfolgt werden. Eine verbindliche, einschränkende Vorgabe ist dagegen eine Randbedingung; eine gemessene Kennzahl ist etwas anderes."},
{id:"c2q14",chapter:2,lz:"LZ 02-03",r:"R1",type:"multi",
 q:"Welche der folgenden sind Qualitätsanforderungen (nicht funktionale)?",
 options:[
  "Die Anwendung verarbeitet 1000 Anfragen pro Sekunde (Performanz).",
  "Sensible Daten werden verschlüsselt gespeichert (Sicherheit).",
  "Neue Entwickler finden sich in unter einem Tag zurecht (Wartbarkeit).",
  "Der Nutzer kann eine Rechnung stornieren.",
  "Das System versendet nach jeder Bestellung eine Bestätigungs-E-Mail."
 ],
 correct:[0,1,2],
 optExpl:[
  "Performanz beschreibt WIE GUT – eine Qualitätsanforderung.",
  "Verschlüsselte Speicherung betrifft Sicherheit – eine Qualitätsanforderung.",
  "Schnelle Einarbeitung betrifft Wartbarkeit – eine Qualitätsanforderung.",
  "Rechnung stornieren beschreibt eine Funktion – funktionale Anforderung.",
  "Das Versenden einer E-Mail beschreibt eine Funktion – funktionale Anforderung."
 ],
 explanation:"Performanz, Sicherheit und Wartbarkeit sind Qualitätsanforderungen. 'Rechnung stornieren' beschreibt eine Funktion – also eine funktionale Anforderung."},
{id:"c2q15",chapter:2,lz:"LZ 02-02",r:"R2",type:"single",
 q:"Welches ist ein Beispiel für eine organisatorische (nicht technische) Randbedingung?",
 options:[
  "Das Projekt muss bis Jahresende mit dem bestehenden Team abgeschlossen sein.",
  "Die Datenhaltung muss in einer relationalen Datenbank erfolgen.",
  "Die Kommunikation zwischen den Diensten läuft über HTTPS.",
  "Die Antwortzeit muss unter 300 ms liegen."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Termin und Teamzusammensetzung sind organisatorische Randbedingungen.",
  "Eine Datenbankvorgabe ist eine technische, keine organisatorische Randbedingung.",
  "Eine Protokollvorgabe wie HTTPS ist eine technische Randbedingung.",
  "Die Antwortzeit ist eine Qualitätsanforderung, keine Randbedingung."
 ],
 explanation:"Termin und Teamzusammensetzung sind organisatorische Randbedingungen. Datenbank-/Protokollvorgaben sind technische Randbedingungen; die Antwortzeit ist eine Qualitätsanforderung."},
{id:"c2q16",chapter:2,lz:"LZ 02-03",r:"R1",type:"multi",
 q:"Woraus leiten sich Qualitätsanforderungen typischerweise ab?",
 options:[
  "Aus den Geschäftszielen des Auftraggebers.",
  "Aus den Bedürfnissen und Belangen der Stakeholder.",
  "Aus der bereits gewählten Programmiersprache.",
  "Aus der Anzahl der verfügbaren Entwickler.",
  "Aus dem gewählten Vorgehensmodell (z. B. Scrum oder Wasserfall)."
 ],
 correct:[0,1],
 optExpl:[
  "Geschäftsziele des Auftraggebers sind eine zentrale Quelle.",
  "Bedürfnisse und Belange der Stakeholder liefern Qualitätsanforderungen.",
  "Die Technologiewahl ist keine Quelle von Qualitätsanforderungen.",
  "Die Teamgröße erzeugt keine Qualitätsanforderungen.",
  "Das Vorgehensmodell bestimmt den Prozess, nicht die Qualitätsanforderungen."
 ],
 explanation:"Qualitätsanforderungen entstehen aus Geschäftszielen und Stakeholder-Belangen. Die Technologiewahl oder die Teamgröße sind keine Quelle von Qualitätsanforderungen."},
{id:"c2q17",chapter:2,lz:"LZ 02-02",r:"R2",type:"single",
 q:"Was unterscheidet eine Anforderung von einer Lösung?",
 options:[
  "Eine Anforderung beschreibt, WAS bzw. WIE GUT etwas sein soll – nicht die konkrete Umsetzung.",
  "Eine Anforderung legt bereits die konkrete Technologie zur Umsetzung fest.",
  "Eine Anforderung ist eine bereits getroffene Entwurfsentscheidung.",
  "Anforderung und Lösung unterscheiden sich nur im Detaillierungsgrad."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Anforderungen sagen WAS oder WIE GUT, nicht das konkrete Wie.",
  "Eine Anforderung schreibt keine konkrete Technologie zur Umsetzung vor.",
  "Eine Anforderung ist keine bereits getroffene Entwurfsentscheidung.",
  "Der Unterschied ist grundsätzlich, nicht nur der Detaillierungsgrad."
 ],
 explanation:"Anforderungen sagen, was bzw. wie gut – die Lösung (Architektur) legt das Wie fest. Eine Anforderung schreibt keine Technologie vor, ist keine Entwurfsentscheidung und mehr als nur 'weniger detailliert'."},
{id:"c2q18",chapter:2,lz:"LZ 02-02",r:"R2",type:"single",
 q:"Wozu ist es sinnvoll, auch Nicht-Ziele (bewusst ausgeschlossene Punkte) festzuhalten?",
 options:[
  "Um den Umfang (Scope) zu klären und falsche Erwartungen zu vermeiden.",
  "Um damit die funktionalen Anforderungen vollständig zu ersetzen.",
  "Um dem Team verbindlich Aufgaben für spätere Releases zuzuweisen.",
  "Um die Architektur unabhängig von den Zielen zu machen."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Nicht-Ziele klären den Umfang und vermeiden falsche Erwartungen.",
  "Nicht-Ziele ersetzen keine funktionalen Anforderungen.",
  "Sie sind keine verbindliche Aufgabenplanung für spätere Releases.",
  "Sie entkoppeln die Architektur nicht von den Zielen."
 ],
 explanation:"Nicht-Ziele grenzen den Umfang ab und steuern Erwartungen. Sie ersetzen keine Anforderungen, sind keine Release-Planung und entkoppeln die Architektur nicht von den Zielen."},
{id:"c2q19",chapter:2,lz:"LZ 02-04",r:"R1",type:"multi",
 q:"Welche Angaben helfen, eine Qualitätsanforderung überprüfbar zu machen?",
 options:[
  "Ein konkreter Auslöser/Stimulus.",
  "Der Kontext bzw. die Umgebung.",
  "Ein messbares Antwortmaß.",
  "Eine grobe verbale Einschätzung ohne Zahlenwert.",
  "Die geschätzten Entwicklungskosten für die Umsetzung."
 ],
 correct:[0,1,2],
 optExpl:[
  "Ein konkreter Auslöser gehört zum überprüfbaren Qualitätsszenario.",
  "Der Kontext bzw. die Umgebung macht die Anforderung überprüfbar.",
  "Ein messbares Antwortmaß erlaubt die eindeutige Überprüfung.",
  "Eine grobe verbale Einschätzung ohne Zahlen ist nicht überprüfbar.",
  "Geschätzte Kosten sagen nichts über die Überprüfbarkeit der Anforderung aus."
 ],
 explanation:"Überprüfbar wird eine Qualitätsanforderung durch Auslöser, Kontext und ein messbares Antwortmaß. Eine grobe verbale Einschätzung ohne Zahlen ist gerade nicht überprüfbar."},
{id:"c2q20",chapter:2,lz:"LZ 02-01",r:"R2",type:"single",
 q:"Was ist bei konkurrierenden Interessen verschiedener Stakeholder nötig?",
 options:[
  "Ein bewusstes Abwägen und Priorisieren der widersprüchlichen Belange.",
  "Jeden genannten Wunsch unverändert und vollständig umsetzen.",
  "Die Entscheidung allein dem technisch lautesten Stakeholder überlassen.",
  "Konflikte ausklammern, bis sie sich im Betrieb von selbst lösen."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Widersprüchliche Belange erfordern bewusstes Abwägen und Priorisieren.",
  "Alle Wünsche unverändert und vollständig umzusetzen ist unmöglich.",
  "Einen einzelnen Stakeholder zu bevorzugen ist unausgewogen.",
  "Aussitzen löst die Konflikte nicht von selbst."
 ],
 explanation:"Konkurrierende Belange erfordern bewusstes Abwägen und Priorisieren. Alles umzusetzen ist unmöglich, Einzelne zu bevorzugen unausgewogen, und Aussitzen löst Konflikte nicht."},
{id:"c2q21",chapter:2,lz:"LZ 02-03",r:"R2",type:"single",
 q:"Was hat sich mit der Revision 2023 am Produktqualitätsmodell der ISO/IEC 25010 geändert?",
 options:[
  "„Betriebssicherheit“ (Safety) kam als eigenständiges Merkmal hinzu, und „Gebrauchstauglichkeit“ heißt nun „Interaktionsfähigkeit“.",
  "Die Anzahl der Hauptmerkmale wurde auf drei reduziert.",
  "Qualitätsmerkmale wurden vollständig durch funktionale Anforderungen ersetzt.",
  "„Zuverlässigkeit“ und „Wartbarkeit“ wurden ersatzlos gestrichen."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Safety kam hinzu, Usability wurde zu „Interaktionsfähigkeit“ umbenannt.",
  "Die Zahl der Hauptmerkmale wurde nicht auf drei reduziert.",
  "Qualitätsmerkmale wurden nicht durch funktionale Anforderungen ersetzt.",
  "Zuverlässigkeit und Wartbarkeit bestehen weiterhin fort."
 ],
 explanation:"2023 wurde u. a. Betriebssicherheit (Safety) als eigenes Merkmal ergänzt und „Usability“ in „Interaktionsfähigkeit“ umbenannt (Portabilität ging in „Flexibilität“ auf). Zuverlässigkeit und Wartbarkeit bestehen weiterhin."},
{id:"c2q22",chapter:2,lz:"LZ 02-01",r:"R1",type:"multi",
 q:"Wie geht man beim Identifizieren von Stakeholdern sinnvoll vor?",
 options:[
  "Das Umfeld schichtweise abtasten – vom System über das Geschäftssystem bis zur weiteren Umgebung.",
  "Bereits bekannte Stakeholder nach weiteren Betroffenen fragen (Schneeballprinzip).",
  "Ausschließlich die zahlenden Auftraggeber berücksichtigen.",
  "Nur Stakeholder mit positiver Grundhaltung zum Projekt aufnehmen.",
  "Die Stakeholderliste einmalig zu Projektbeginn erstellen und danach nicht mehr anpassen."
 ],
 correct:[0,1],
 optExpl:[
  "Das Umfeld schichtweise abtasten (Alexanders „Zwiebel“) findet Stakeholder.",
  "Das Schneeballprinzip erschließt über Bekannte weitere Betroffene.",
  "Auch nicht zahlende Betroffene können relevante Stakeholder sein.",
  "Auch kritisch eingestellte Betroffene sind relevante Stakeholder.",
  "Die Stakeholderliste muss laufend fortgeschrieben, nicht nur einmal erstellt werden."
 ],
 explanation:"Man betrachtet das Umfeld schichtweise (Alexanders „Zwiebel“) und erweitert per Schneeballprinzip. Auch nicht zahlende und kritisch eingestellte Betroffene können relevante Stakeholder sein."},
{id:"c2q23",chapter:2,lz:"LZ 02-02",r:"R2",type:"single",
 q:"Was besagt Conways Gesetz im Kontext von Softwarearchitektur?",
 options:[
  "Die Struktur eines Systems spiegelt tendenziell die Kommunikationsstrukturen der entwickelnden Organisation wider.",
  "Die Systemleistung wächst linear mit der Zahl der eingesetzten Server.",
  "Jede Architektur erodiert im Laufe der Zeit unweigerlich.",
  "Die Zahl der Schnittstellen sollte der Zahl der Entwickler entsprechen."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Systemstrukturen spiegeln die Kommunikationswege der Organisation wider.",
  "Lineare Leistungssteigerung mit Servern ist nicht Conways Aussage.",
  "Architekturerosion ist ein anderes Phänomen, nicht Conways Gesetz.",
  "Schnittstellenzahl gleich Entwicklerzahl ist frei erfunden."
 ],
 explanation:"Conways Gesetz: Systemstrukturen spiegeln die Kommunikationswege der Organisation wider (und beeinflussen diese umgekehrt). Die übrigen Aussagen betreffen Skalierung bzw. Erosion oder sind frei erfunden."},
{id:"c2q24",chapter:2,lz:"LZ 02-05",r:"R2",type:"single",
 q:"Was gilt erfahrungsgemäß für implizite (unausgesprochene) Anforderungen?",
 options:[
  "Sie betreffen häufig Qualitätsanforderungen und sollten aktiv explizit gemacht werden.",
  "Sie sind meist funktionaler Natur und ohnehin vollständig dokumentiert.",
  "Sie können ignoriert werden, weil sie für die Architektur unwichtig sind.",
  "Sie werden vom Auftraggeber stets von sich aus klar benannt."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Implizite Erwartungen betreffen oft Qualität und müssen explizit gemacht werden.",
  "Sie sind oft qualitativ und gerade nicht vollständig dokumentiert.",
  "Sie prägen die Architektur stark und dürfen nicht ignoriert werden.",
  "Unausgesprochene Erwartungen werden selten von selbst klar benannt."
 ],
 explanation:"Implizite Erwartungen betreffen oft Qualitätsanforderungen und prägen die Architektur stark – man muss sie aktiv herausarbeiten. Gerade weil sie unausgesprochen sind, werden sie leicht übersehen."},
{id:"c2q25",chapter:2,lz:"LZ 02-01",r:"R2",type:"single",
 q:"Worin unterscheidet sich ein Sachkonflikt von einem Interessenkonflikt?",
 options:[
  "Ein Sachkonflikt dreht sich um Fakten bzw. Lösungswege, ein Interessenkonflikt um unvereinbare Ziele der Beteiligten.",
  "Ein Sachkonflikt betrifft nur Personen, ein Interessenkonflikt nur Technik.",
  "Beide sind identisch und werden nur unterschiedlich benannt.",
  "Ein Interessenkonflikt lässt sich immer allein durch mehr Fakten auflösen."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Sachkonflikt betrifft Fakten/Lösung, Interessenkonflikt unvereinbare Ziele.",
  "Die Zuordnung „Personen versus Technik“ ist falsch.",
  "Beide Konfliktarten sind nicht identisch.",
  "Interessenkonflikte lassen sich selten allein durch Fakten lösen."
 ],
 explanation:"Sachkonflikt = Streit über Fakten/Lösung (oft durch Transparenz lösbar); Interessenkonflikt = unvereinbare Ziele (Ausgleich/Kompromiss nötig, Fakten allein genügen selten)."},
{id:"c2q26",chapter:2,lz:"LZ 02-02",r:"R1",type:"single",
 q:"Was kennzeichnet eine Randbedingung (Constraint) gegenüber einer normalen Anforderung?",
 options:[
  "Sie ist eine vorgegebene Grenze, die das Team kaum oder gar nicht beeinflussen kann.",
  "Sie ist jederzeit vom Architekturteam frei verhandelbar und leicht änderbar.",
  "Sie ist stets eine rein funktionale Vorgabe.",
  "Sie muss im Gegensatz zu Anforderungen nicht dokumentiert werden."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Randbedingungen sind vorgegebene, kaum beeinflussbare Grenzen.",
  "Sie sind gerade nicht frei verhandelbar oder leicht änderbar.",
  "Sie sind nicht rein funktional, sondern auch technisch oder organisatorisch.",
  "Auch Randbedingungen sollten dokumentiert werden."
 ],
 explanation:"Randbedingungen sind vorgegebene, kaum beeinflussbare Grenzen (technisch, organisatorisch, rechtlich). Sie sind gerade nicht frei verhandelbar, nicht per se funktional und ebenfalls zu dokumentieren."},
{id:"c2q27",chapter:2,lz:"LZ 02-01",r:"R3",type:"single",
 q:"Was beschreibt das Kano-Modell im Umgang mit Anforderungen?",
 options:[
  "Es unterscheidet Basis-, Leistungs- und Begeisterungsmerkmale nach ihrer Wirkung auf die Zufriedenheit.",
  "Es priorisiert Anforderungen ausschließlich nach Umsetzungskosten.",
  "Es ordnet Anforderungen den ISO-25010-Merkmalen zu.",
  "Es misst die technische Komplexität einer Anforderung."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Kano unterscheidet Basis-, Leistungs- und Begeisterungsmerkmale nach Zufriedenheitswirkung.",
  "Kano priorisiert nicht ausschließlich nach den Umsetzungskosten.",
  "Kano ordnet Anforderungen nicht den ISO-25010-Merkmalen zu.",
  "Kano misst nicht die technische Komplexität einer Anforderung."
 ],
 explanation:"Kano klassifiziert nach Wirkung auf die Zufriedenheit: Basis- (Muss, fällt nur negativ auf), Leistungs- (je mehr, desto besser) und Begeisterungsmerkmale (unerwartet erfreulich). Es geht nicht primär um Kosten, ISO-Zuordnung oder Komplexität."},
/* ===== Kapitel 3 ===== */
{id:"c3q1",chapter:3,lz:"LZ 03-06",r:"R1",type:"multi",
 q:"Welche Aussagen zu Kopplung und Kohäsion im Entwurf treffen zu?",
 options:[
  "Lose Kopplung zwischen Bausteinen ist erstrebenswert.",
  "Hohe Kohäsion innerhalb eines Bausteins ist erstrebenswert.",
  "Hohe Kopplung erleichtert unabhängige Änderungen einzelner Bausteine.",
  "Niedrige Kohäsion verbessert die Wiederverwendbarkeit eines Bausteins.",
  "Kopplung und Kohäsion bezeichnen im Kern dasselbe Qualitätsmerkmal.",
  "Kohäsion misst die Stärke der Abhängigkeiten zwischen verschiedenen Bausteinen."
 ],
 correct:[0,1],
 optExpl:[
  "Lose Kopplung senkt Abhängigkeiten und erleichtert isolierte Änderungen.",
  "Hohe Kohäsion bündelt Zusammengehöriges und verbessert die Verständlichkeit.",
  "Hohe Kopplung erschwert isolierte Änderungen, statt sie zu erleichtern.",
  "Niedrige Kohäsion verschlechtert Verständlichkeit und Wiederverwendung, statt sie zu verbessern.",
  "Kopplung und Kohäsion sind verschiedene, sich ergänzende Konzepte, nicht dasselbe.",
  "Abhängigkeiten zwischen Bausteinen beschreibt die Kopplung, nicht die Kohäsion."
 ],
 explanation:"Ziel ist lose Kopplung und hohe Kohäsion. Hohe Kopplung erschwert isolierte Änderungen, niedrige Kohäsion verschlechtert Verständlichkeit und Wiederverwendung."},
{id:"c3q2",chapter:3,lz:"LZ 03-04",r:"R1",type:"single",
 q:"Was besagt das Prinzip 'Information Hiding' (Geheimnisprinzip)?",
 options:[
  "Interne Implementierungsdetails werden hinter einer stabilen Schnittstelle verborgen.",
  "Alle Attribute werden öffentlich gemacht, damit andere Bausteine direkt zugreifen können.",
  "Die Schnittstelle wird bei jeder internen Änderung zwangsläufig mit angepasst.",
  "Der Quellcode wird verschlüsselt abgelegt."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Interna liegen hinter stabiler Schnittstelle, interne Änderungen betreffen Nutzer nicht.",
  "Öffentliche Attribute widersprechen dem Verbergen von Implementierungsdetails.",
  "Eine stabile Schnittstelle soll gerade nicht bei jeder Änderung mitwandern.",
  "Information Hiding meint Kapselung, nicht Verschlüsselung des Quellcodes."
 ],
 explanation:"Information Hiding verbirgt Interna hinter einer stabilen Schnittstelle, sodass interne Änderungen die Nutzer nicht betreffen. Es geht nicht um öffentliche Attribute, mitgeänderte Schnittstellen oder Verschlüsselung."},
{id:"c3q3",chapter:3,lz:"LZ 03-04",r:"R3",type:"single",
 q:"Wofür steht das 'S' in den SOLID-Prinzipien?",
 options:[
  "Single Responsibility Principle – ein Baustein hat genau eine Verantwortlichkeit (einen Änderungsgrund).",
  "Separation of Concerns – Belange werden getrennt.",
  "Stateless Principle – Bausteine halten keinen Zustand.",
  "Substitution Principle – Subtypen ersetzen ihre Basistypen."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Das S steht für Single Responsibility – ein Änderungsgrund pro Baustein.",
  "Separation of Concerns ist ein eigenes Prinzip, nicht Teil von SOLID.",
  "Ein „Stateless Principle“ gehört nicht zu den SOLID-Prinzipien.",
  "Substituierbarkeit ist das L (Liskov), nicht das S."
 ],
 explanation:"Das S steht für Single Responsibility. Separation of Concerns ist ein anderes Prinzip (nicht Teil von SOLID), und Substituierbarkeit ist das L (Liskov)."},
{id:"c3q4",chapter:3,lz:"LZ 03-08",r:"R1",type:"multi",
 q:"Welche Aussagen zur Schichtenarchitektur (Layers) treffen zu?",
 options:[
  "Höhere Schichten nutzen Dienste tieferliegender Schichten.",
  "Die geordnete Abhängigkeitsrichtung erleichtert Austausch und Verständnis.",
  "Innerhalb einer Schicht werden bewusst sehr unterschiedliche Abstraktionsniveaus gebündelt.",
  "Zur Performanceoptimierung sollten tiefere Schichten regelmäßig höhere Schichten aufrufen.",
  "Die Anzahl der Schichten ist fest auf genau drei vorgeschrieben."
 ],
 correct:[0,1],
 optExpl:[
  "Obere Schichten greifen auf definierte Dienste darunterliegender Schichten zu.",
  "Die geordnete Abhängigkeitsrichtung schafft Struktur und erleichtert Austausch und Verständnis.",
  "Eine Schicht bündelt möglichst ein ähnliches, nicht unterschiedliches Abstraktionsniveau.",
  "Aufrufe von unten nach oben erzeugen unerwünschte Zyklen.",
  "Die Schichtenzahl ist nicht fest; drei ist nur ein häufiges Beispiel."
 ],
 explanation:"Obere Schichten nutzen definierte Dienste darunter; die geordnete Richtung schafft Struktur. Eine Schicht bündelt möglichst ein ähnliches Abstraktionsniveau, und Aufrufe von unten nach oben erzeugen unerwünschte Zyklen."},
{id:"c3q5",chapter:3,lz:"LZ 03-08",r:"R3",type:"multi",
 q:"Welche Aussagen zu Ports & Adapters (hexagonale Architektur) treffen zu?",
 options:[
  "Die fachliche Kernlogik wird von Technik und Infrastruktur entkoppelt.",
  "Äußere Belange (UI, DB, APIs) werden über austauschbare Adapter angebunden.",
  "Die Fachlogik hängt direkt von der konkreten Datenbanktechnologie ab.",
  "Ziel ist die Bündelung von UI, Logik und Persistenz in einer Schicht.",
  "Die Abhängigkeiten zeigen von der Fachlogik nach außen zu Technik und Infrastruktur."
 ],
 correct:[0,1],
 optExpl:[
  "Ports & Adapters isoliert die Domänenlogik von Technik und Infrastruktur.",
  "Äußere Belange werden über austauschbare Adapter angebunden.",
  "Eine direkte DB-Abhängigkeit der Fachlogik widerspricht der Entkopplung.",
  "Das Bündeln aller Belange widerspricht der Trennung von Kern und Technik.",
  "Die Abhängigkeiten zeigen nach innen zur Fachlogik, nicht von ihr nach außen."
 ],
 explanation:"Ports & Adapters isoliert die Domänenlogik von Technik und bindet Äußeres über austauschbare Adapter an. Eine direkte DB-Abhängigkeit oder das Bündeln aller Belange widerspricht dem."},
{id:"c3q6",chapter:3,lz:"LZ 03-08",r:"R2",type:"multi",
 q:"Welche Aussagen treffen typischerweise auf Microservices zu?",
 options:[
  "Sie sind unabhängig deploybar und fachlich geschnitten.",
  "Sie erhöhen die betriebliche Komplexität (Verteilung, Monitoring).",
  "Sie teilen sich zwingend eine gemeinsame Datenbank.",
  "Sie kommunizieren ausschließlich über direkte In-Process-Aufrufe.",
  "Sie müssen alle in derselben Programmiersprache implementiert sein."
 ],
 correct:[0,1],
 optExpl:[
  "Microservices sind unabhängig deploybar und fachlich geschnitten.",
  "Verteilung und Monitoring erhöhen die betriebliche Komplexität.",
  "Eine gemeinsame Datenbank widerspricht der Unabhängigkeit der Services.",
  "Services kommunizieren über das Netz, nicht nur In-Process.",
  "Microservices erlauben verschiedene Sprachen; eine einheitliche ist nicht nötig."
 ],
 explanation:"Microservices sind unabhängig deploybar und fachlich geschnitten und erhöhen die Betriebskomplexität. Eine gemeinsame DB oder reine In-Process-Aufrufe widersprechen dem Ansatz (Kommunikation über das Netz)."},
{id:"c3q7",chapter:3,lz:"LZ 03-04",r:"R1",type:"multi",
 q:"Welche gehören zu den grundlegenden Entwurfsprinzipien?",
 options:[
  "Trennung der Zuständigkeiten (Separation of Concerns).",
  "Abstraktion.",
  "Modularisierung und Kapselung.",
  "Frühzeitige Optimierung um jeden Preis.",
  "Möglichst viele Verantwortlichkeiten in einer Klasse zusammenfassen.",
  "Bevorzugung von Copy-and-Paste zur schnellen Wiederverwendung von Code."
 ],
 correct:[0,1,2],
 optExpl:[
  "Separation of Concerns ist ein grundlegendes Entwurfsprinzip.",
  "Abstraktion gehört zu den grundlegenden Entwurfsprinzipien.",
  "Modularisierung und Kapselung sind grundlegende Entwurfsprinzipien.",
  "„Premature Optimization“ ist ein bekanntes Anti-Muster, kein Prinzip.",
  "Viele Verantwortlichkeiten in einer Klasse widersprechen dem Prinzip der Einzelverantwortung (SRP).",
  "Copy-and-Paste verletzt DRY und ist ein Anti-Muster, kein Prinzip."
 ],
 explanation:"SoC, Abstraktion und Modularisierung sind grundlegende Prinzipien. 'Premature Optimization' ist dagegen ein bekanntes Anti-Muster."},
{id:"c3q8",chapter:3,lz:"LZ 03-10",r:"R1",type:"multi",
 q:"Welche der folgenden sind typische Querschnittskonzepte (Cross-Cutting Concerns)?",
 options:[
  "Persistenz.",
  "Sicherheit und Authentifizierung.",
  "Logging und Fehlerbehandlung.",
  "Die Berechnung des fachlichen Rechnungsbetrags.",
  "Das Layout eines einzelnen Eingabeformulars in der Benutzeroberfläche."
 ],
 correct:[0,1,2],
 optExpl:[
  "Persistenz betrifft viele Bausteine übergreifend, ist also ein Querschnittskonzept.",
  "Sicherheit und Authentifizierung wirken quer über viele Bausteine.",
  "Logging und Fehlerbehandlung betreffen das gesamte System übergreifend.",
  "Die Betragsberechnung ist eine spezifische Fachfunktion, kein Querschnittskonzept.",
  "Das Layout eines einzelnen Formulars ist lokal, kein systemweites Querschnittskonzept."
 ],
 explanation:"Persistenz, Sicherheit und Logging/Fehlerbehandlung betreffen viele Bausteine übergreifend. Die Betragsberechnung ist eine spezifische Fachfunktion, kein Querschnittskonzept."},
{id:"c3q9",chapter:3,lz:"LZ 03-03",r:"R2",type:"single",
 q:"Worin unterscheiden sich Top-down- und Bottom-up-Entwurf?",
 options:[
  "Top-down zerlegt vom Ganzen ins Detail; Bottom-up setzt aus vorhandenen Detailbausteinen zusammen.",
  "Top-down beginnt bei den Detailbausteinen, Bottom-up beim Gesamtsystem.",
  "Beide Vorgehensweisen schließen sich gegenseitig aus und dürfen nie kombiniert werden.",
  "Top-down betrifft nur die Datenbank, Bottom-up nur die Oberfläche."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Top-down geht vom Ganzen ins Detail, Bottom-up umgekehrt.",
  "Die Begriffe sind hier vertauscht; Top-down beginnt beim Ganzen.",
  "Beide Vorgehensweisen werden in der Praxis oft kombiniert.",
  "Beide sind nicht auf Datenbank oder Oberfläche beschränkt."
 ],
 explanation:"Top-down = vom Ganzen ins Detail, Bottom-up = umgekehrt; beide werden oft kombiniert. Die Begriffe sind hier nicht vertauscht und nicht auf DB/UI beschränkt."},
{id:"c3q10",chapter:3,lz:"LZ 03-04",r:"R2",type:"single",
 q:"Was ist der Nutzen von Abstraktion und Modularisierung im Entwurf?",
 options:[
  "Sie machen Komplexität beherrschbar und ermöglichen unabhängige Entwicklung und Änderung.",
  "Sie steigern garantiert die Laufzeitperformanz jedes Systems.",
  "Sie machen Schnittstellen zwischen Bausteinen überflüssig.",
  "Sie erhöhen bewusst die Kopplung, um Aufrufe zu beschleunigen."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Sie beherrschen Komplexität und erlauben unabhängiges Arbeiten und Ändern.",
  "Sie garantieren keine bessere Laufzeitperformanz jedes Systems.",
  "Schnittstellen bleiben nötig und werden nicht überflüssig.",
  "Sie senken die Kopplung, statt sie bewusst zu erhöhen."
 ],
 explanation:"Abstraktion und Modularisierung beherrschen Komplexität und erlauben unabhängiges Arbeiten. Sie garantieren keine Performance, machen Schnittstellen nicht überflüssig und erhöhen nicht die Kopplung."},
{id:"c3q11",chapter:3,lz:"LZ 03-08",r:"R2",type:"single",
 q:"Für welches Szenario eignet sich das Muster „Pipes and Filters“ am besten?",
 options:[
  "Eine mehrstufige Datenverarbeitung, bei der die Ausgabe eines Schritts die Eingabe des nächsten ist.",
  "Ein stark interaktiver Dialog, in dem der Nutzer laufend zwischen Teilschritten hin- und herspringt.",
  "Ein System, in dem alle Schritte gemeinsam einen zentralen, veränderlichen Zustand pflegen.",
  "Eine Verarbeitung, deren Schritte zur Laufzeit in stark wechselnder Reihenfolge neu verdrahtet werden."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Feste, mehrstufige Kette, Ausgabe wird Eingabe des nächsten Schritts.",
  "Für stark interaktive Dialoge ist Pipes and Filters nicht gedacht.",
  "Ein geteilter zentraler, veränderlicher Zustand passt nicht zum Filter-Konzept.",
  "Ständig wechselnde Verdrahtung widerspricht der festen Verarbeitungskette."
 ],
 explanation:"Pipes and Filters passt zu einer festen, mehrstufigen Verarbeitungskette (Ausgabe → Eingabe). Für stark interaktive Dialoge, einen geteilten globalen Zustand oder ständig wechselnde Verdrahtung ist es nicht gedacht."},
{id:"c3q12",chapter:3,lz:"LZ 03-06",r:"R3",type:"single",
 q:"Was ist ein zentraler Unterschied zwischen synchroner und asynchroner Kommunikation?",
 options:[
  "Bei synchroner Kommunikation wartet der Aufrufer auf die Antwort, bei asynchroner nicht.",
  "Asynchrone Kommunikation ist grundsätzlich immer schneller als synchrone.",
  "Synchrone Kommunikation funktioniert nur lokal, asynchrone nur über das Netzwerk.",
  "Bei asynchroner Kommunikation blockiert der Aufrufer bis zur Antwort."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Synchron wartet der Aufrufer, asynchron ist er zeitlich entkoppelt.",
  "Asynchron ist nicht pauschal schneller als synchron.",
  "Beide funktionieren sowohl lokal als auch über das Netzwerk.",
  "Blockieren bis zur Antwort ist gerade synchrones Verhalten."
 ],
 explanation:"Synchron = Aufrufer wartet (blockiert), asynchron = zeitlich entkoppelt. Asynchron ist nicht pauschal schneller, beide gehen lokal wie im Netz, und Blockieren ist gerade synchron."},
{id:"c3q13",chapter:3,lz:"LZ 03-04",r:"R2",type:"multi",
 q:"Welche Aussagen zu technischen Schulden (Technical Debt) treffen zu?",
 options:[
  "Es sind aufgeschobene Kompromisse oder Mängel in Code bzw. Architektur.",
  "Unbehandelt erschweren und verteuern sie künftige Änderungen.",
  "Es handelt sich um die Lizenz- und Betriebskosten der eingesetzten Software.",
  "Sie verschwinden mit der Zeit von selbst, ohne Zutun des Teams.",
  "Technische Schulden entstehen ausschließlich durch bewusste, geplante Entscheidungen des Teams."
 ],
 correct:[0,1],
 optExpl:[
  "Technische Schulden sind aufgeschobene Kompromisse oder Mängel in Code und Architektur.",
  "Unbehandelt verteuern und erschweren sie spätere Änderungen.",
  "Sie sind keine Lizenz- oder Betriebskosten der eingesetzten Software.",
  "Sie lösen sich nicht von selbst auf, sondern brauchen aktives Handeln.",
  "Technische Schulden entstehen auch unbewusst, nicht nur durch geplante Entscheidungen."
 ],
 explanation:"Technische Schulden sind aufgeschobene Mängel, die spätere Änderungen verteuern. Sie sind keine Lizenz-/Betriebskosten und lösen sich nicht von selbst auf."},
{id:"c3q14",chapter:3,lz:"LZ 03-04",r:"R2",type:"single",
 q:"Was fordert das Dependency-Inversion-Prinzip?",
 options:[
  "High-Level- und Low-Level-Module sollen von Abstraktionen abhängen, nicht von konkreten Implementierungen.",
  "Low-Level-Module sollen direkt von den High-Level-Modulen abhängen.",
  "Abhängigkeiten sollen ganz vermieden werden, indem keine Schnittstellen genutzt werden.",
  "Details sollen von anderen Details abhängen, um Umwege zu vermeiden."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Beide Ebenen hängen von Abstraktionen ab, nicht von Implementierungen.",
  "Nicht direkte Kopplung, sondern Abhängigkeit von Abstraktionen ist gefordert.",
  "Schnittstellen werden gerade genutzt, nicht weggelassen.",
  "Details sollen nicht von Details abhängen, sondern von Abstraktionen."
 ],
 explanation:"Dependency Inversion: beide Ebenen hängen von Abstraktionen ab, nicht Details von Details. Es geht nicht um direkte High-/Low-Kopplung oder das Weglassen von Schnittstellen."},
{id:"k3",chapter:3,lz:"LZ 03-08",r:"R2",type:"k",points:2,
 q:"Ordnen Sie jeden Begriff zu: Architekturmuster oder Entwurfsprinzip?",
 categories:["Architekturmuster","Entwurfsprinzip"],
 rows:[
  {text:"Schichten (Layers)",cat:0},
  {text:"Single Responsibility Principle",cat:1},
  {text:"Ports & Adapters (Hexagonal)",cat:0},
  {text:"Information Hiding",cat:1}
 ],
 explanation:"Layers und Ports & Adapters sind Architekturmuster (Struktur des Gesamtsystems). SRP und Information Hiding sind Entwurfsprinzipien (Leitlinien für guten Entwurf)."},
{id:"c3q15",chapter:3,lz:"LZ 03-04",r:"R1",type:"multi",
 q:"Welche Aussagen zu „Separation of Concerns“ (Trennung der Zuständigkeiten) treffen zu?",
 options:[
  "Unterschiedliche Belange werden in getrennten, jeweils zuständigen Bausteinen behandelt.",
  "Sie fördert lose Kopplung und hohe Kohäsion und erleichtert so Änderungen und Tests.",
  "Möglichst viele Belange werden in einem Baustein gebündelt, um Aufrufe zu sparen.",
  "Belange werden nach Entwickler-Zuständigkeit statt nach Sachthema getrennt.",
  "Trennung der Zuständigkeiten lässt sich nur durch physische Aufteilung in getrennte Dateien erreichen."
 ],
 correct:[0,1],
 optExpl:[
  "Jeder Belang wird in einem eigenen, jeweils zuständigen Baustein behandelt.",
  "SoC fördert lose Kopplung und hohe Kohäsion, erleichtert Änderungen und Tests.",
  "Viele Belange zu bündeln widerspricht der Trennung der Zuständigkeiten.",
  "Getrennt wird nach Sachthema, nicht nach Entwickler-Zuständigkeit.",
  "SoC ist ein Konzept auf vielen Ebenen, nicht nur physische Dateitrennung."
 ],
 explanation:"SoC trennt Belange in eigene Bausteine und begünstigt lose Kopplung/hohe Kohäsion (bessere Änder- und Testbarkeit). Das Bündeln vieler Belange oder eine Trennung nach Person widersprechen dem Prinzip."},
{id:"c3q16",chapter:3,lz:"LZ 03-04",r:"R3",type:"single",
 q:"Wofür steht das Prinzip DRY?",
 options:[
  "Wissen bzw. Logik soll nicht dupliziert, sondern an einer einzigen Stelle geführt werden.",
  "Jede Funktionalität soll aus Sicherheitsgründen an mehreren Stellen redundant implementiert werden.",
  "Zwei zufällig ähnliche Codestellen müssen immer sofort zusammengeführt werden.",
  "Das Prinzip betrifft ausschließlich doppelte Kommentare, nicht doppelte Logik."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Wissen bzw. Logik wird an einer einzigen Stelle geführt, nicht dupliziert.",
  "Bewusste Redundanz als „Sicherheit“ widerspricht DRY.",
  "Nur zufällig ähnliche Stellen zwingend zu vereinen trifft den Kern nicht.",
  "DRY betrifft doppelte Logik, nicht nur doppelte Kommentare."
 ],
 explanation:"DRY führt Wissen/Logik an einer Stelle, damit Änderungen zentral erfolgen. Redundanz als 'Sicherheit', das Zusammenführen zufällig ähnlicher Stellen oder eine Beschränkung auf Kommentare treffen den Kern nicht."},
{id:"c3q17",chapter:3,lz:"LZ 03-04",r:"R3",type:"single",
 q:"Was besagt das Prinzip YAGNI?",
 options:[
  "Keine Funktionalität auf Vorrat bauen, die aktuell (noch) nicht gebraucht wird.",
  "Möglichst viele Erweiterungspunkte vorab einbauen, um zukunftssicher zu sein.",
  "Jede Anforderung von Anfang an maximal generisch umsetzen.",
  "Einmal umgesetzte Funktionen dürfen nie wieder entfernt werden."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Nur bauen, was aktuell gebraucht wird, nichts auf Vorrat.",
  "Erweiterungspunkte auf Vorrat einzubauen widerspricht YAGNI.",
  "Alles vorab maximal generisch umzusetzen widerspricht YAGNI.",
  "Das Entfernen von Funktionen ist ein anderes Thema als YAGNI."
 ],
 explanation:"YAGNI: nur bauen, was aktuell gebraucht wird. Erweiterungspunkte oder Generik auf Vorrat widersprechen ihm; das Entfernen von Funktionen ist ein anderes Thema."},
{id:"c3q18",chapter:3,lz:"LZ 03-08",r:"R1",type:"multi",
 q:"Welche Aussagen zu Architekturmustern treffen zu?",
 options:[
  "Sie sind bewährte, wiederverwendbare Lösungsschablonen für wiederkehrende Strukturprobleme.",
  "Sie schaffen eine gemeinsame Sprache und müssen zum konkreten Problem passen.",
  "Sie sind konkrete, nur einmal verwendbare Code-Ausschnitte.",
  "Ihr Einsatz garantiert unabhängig vom Kontext die beste Lösung.",
  "Sie schreiben die konkrete Technologie- und Frameworkwahl verbindlich vor."
 ],
 correct:[0,1],
 optExpl:[
  "Muster sind bewährte, wiederverwendbare Schablonen für wiederkehrende Strukturprobleme.",
  "Sie schaffen eine gemeinsame Sprache, müssen aber zum konkreten Problem passen.",
  "Muster sind keine konkreten, nur einmal verwendbaren Code-Ausschnitte.",
  "Muster garantieren nicht kontextunabhängig die beste Lösung.",
  "Muster sind technologieunabhängig und schreiben keine konkrete Framework-Wahl vor."
 ],
 explanation:"Architekturmuster sind bewährte, wiederverwendbare Schablonen und eine gemeinsame Sprache – müssen aber passen. Sie sind kein Einmal-Code und garantieren nicht kontextunabhängig die beste Lösung."},
{id:"c3q19",chapter:3,lz:"LZ 03-08",r:"R3",type:"single",
 q:"Was trennt das Muster Model-View-Controller (MVC)?",
 options:[
  "Datenmodell, Darstellung (View) und Steuerung/Interaktion (Controller).",
  "Präsentations-, Anwendungs- und Datenbankschicht (drei technische Schichten).",
  "Es fasst Modell und View bewusst in einer Komponente zusammen.",
  "Die drei Phasen Compile, Verify und Commit."
 ],
 correct:[0],
 optExpl:[
  "Richtig: MVC trennt Datenmodell, View und Controller.",
  "Technische Schichten sind nicht dasselbe wie Modell, View und Controller.",
  "MVC trennt Modell und View, führt sie nicht zusammen.",
  "Compile, Verify und Commit haben nichts mit MVC zu tun."
 ],
 explanation:"MVC trennt Modell, View und Controller. Das ist nicht dasselbe wie technische Schichten, führt Modell/View nicht zusammen und hat nichts mit Compile/Verify/Commit zu tun."},
{id:"c3q20",chapter:3,lz:"LZ 03-06",r:"R1",type:"multi",
 q:"Welche Maßnahmen fördern lose Kopplung?",
 options:[
  "Kommunikation über klar definierte Schnittstellen bzw. Abstraktionen.",
  "Ereignisbasierte (asynchrone) Kommunikation zwischen Bausteinen.",
  "Direkter Zugriff auf interne Felder anderer Bausteine für kürzere Wege.",
  "Gemeinsame globale, veränderliche Variablen für den Datenaustausch.",
  "Vererbung aus konkreten Klassen anderer Bausteine, um deren Verhalten direkt zu übernehmen.",
  "Wechselseitige (bidirektionale) Referenzen zwischen zwei Bausteinen einführen."
 ],
 correct:[0,1],
 optExpl:[
  "Klar definierte Schnittstellen und Abstraktionen senken die Kopplung.",
  "Ereignisbasierte, asynchrone Kommunikation entkoppelt Sender und Empfänger.",
  "Direkter Zugriff auf Interna anderer Bausteine erhöht die Kopplung.",
  "Globale veränderliche Variablen erhöhen die Kopplung, statt sie zu senken.",
  "Vererbung aus konkreten Fremdklassen erhöht die Kopplung an deren Interna.",
  "Wechselseitige Referenzen erzeugen enge, zyklische Kopplung statt sie zu senken."
 ],
 explanation:"Schnittstellen/Abstraktionen und ereignisbasierte Kommunikation senken die Kopplung. Direkter Zugriff auf Interna und globale veränderliche Variablen erhöhen sie."},
{id:"c3q21",chapter:3,lz:"LZ 03-06",r:"R2",type:"single",
 q:"Warum sollten zyklische Abhängigkeiten zwischen Bausteinen vermieden werden?",
 options:[
  "Sie erschweren Verständnis, isoliertes Testen sowie unabhängige Änderung und Wiederverwendung.",
  "Sie sind in Schichtenarchitekturen ausdrücklich vorgesehen und erwünscht.",
  "Sie verbessern die Performance, weil Bausteine sich gegenseitig direkt aufrufen.",
  "Sie betreffen nur die Kompilierzeit, nicht die Wartbarkeit."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Zyklen erschweren Verständnis, Testen, Änderung und Wiederverwendung.",
  "In Schichtenarchitekturen sind Zyklen unerwünscht, nicht vorgesehen.",
  "Zyklen bringen keinen Performancevorteil.",
  "Zyklen betreffen sehr wohl die Wartbarkeit, nicht nur die Kompilierzeit."
 ],
 explanation:"Zyklen koppeln Bausteine gegenseitig fest und erschweren Tests und Änderungen. Sie sind in Schichten unerwünscht, kein Performancevorteil und betreffen sehr wohl die Wartbarkeit."},
{id:"c3q22",chapter:3,lz:"LZ 03-04",r:"R2",type:"multi",
 q:"Welche Aussagen zu Refactoring treffen zu?",
 options:[
  "Es verbessert die interne Struktur des Codes.",
  "Das nach außen beobachtbare Verhalten bleibt dabei unverändert.",
  "Dabei werden gezielt neue fachliche Funktionen ergänzt.",
  "Der Code wird vollständig gelöscht und von Grund auf neu geschrieben.",
  "Dabei werden gezielt gemeldete Fehler behoben und das fachliche Verhalten korrigiert."
 ],
 correct:[0,1],
 optExpl:[
  "Refactoring verbessert die interne Struktur des Codes.",
  "Das nach außen beobachtbare Verhalten bleibt dabei unverändert.",
  "Neue fachliche Funktionen zu ergänzen ist Feature-Arbeit, kein Refactoring.",
  "Alles von Grund auf neu zu schreiben ist ein Rewrite, kein Refactoring.",
  "Fehler zu beheben ändert das Verhalten und ist damit kein Refactoring."
 ],
 explanation:"Refactoring verbessert die innere Struktur bei gleichem äußeren Verhalten. Neue Funktionen zu ergänzen ist Feature-Arbeit, alles neu zu schreiben ist ein Rewrite – beides ist kein Refactoring."},
{id:"c3q23",chapter:3,lz:"LZ 03-06",r:"R1",type:"multi",
 q:"Warum programmiert man bevorzugt gegen Schnittstellen statt gegen konkrete Implementierungen?",
 options:[
  "Konkrete Implementierungen lassen sich dadurch leichter austauschen.",
  "Die Kopplung an Implementierungsdetails sinkt.",
  "Aufrufe über eine Schnittstelle sind zur Laufzeit grundsätzlich schneller.",
  "Dadurch werden zusätzliche Tests überflüssig.",
  "Konkrete Implementierungen werden dadurch überflüssig und müssen nicht mehr geschrieben werden."
 ],
 correct:[0,1],
 optExpl:[
  "Schnittstellen machen konkrete Implementierungen leichter austauschbar.",
  "Die Kopplung an Implementierungsdetails sinkt.",
  "Ein pauschaler Laufzeit-Performancevorteil besteht nicht.",
  "Tests werden dadurch nicht überflüssig.",
  "Konkrete Implementierungen bleiben nötig; die Schnittstelle ersetzt sie nicht."
 ],
 explanation:"Schnittstellen entkoppeln und machen Implementierungen austauschbar. Ein pauschaler Performancevorteil besteht nicht, und Tests werden dadurch nicht überflüssig."},
{id:"k6",chapter:3,lz:"LZ 03-06",r:"R1",type:"k",points:2,
 q:"Ordnen Sie zu: erhöht die Kopplung oder reduziert die Kopplung?",
 categories:["Erhöht Kopplung","Reduziert Kopplung"],
 rows:[
  {text:"Direkter Zugriff auf interne Details eines anderen Bausteins",cat:0},
  {text:"Kommunikation nur über eine klar definierte Schnittstelle",cat:1},
  {text:"Gemeinsame globale, veränderliche Variablen",cat:0},
  {text:"Dependency Injection statt fester Instanziierung",cat:1}
 ],
 explanation:"Direkter Zugriff auf Interna und globale veränderliche Zustände erhöhen die Kopplung. Klare Schnittstellen und Dependency Injection verringern sie."},
{id:"k8",chapter:3,lz:"LZ 03-04",r:"R3",type:"k",points:2,
 q:"Gehört das jeweilige Prinzip zu SOLID?",
 categories:["Teil von SOLID","Nicht Teil von SOLID"],
 rows:[
  {text:"Single Responsibility Principle",cat:0},
  {text:"Open/Closed Principle",cat:0},
  {text:"Dependency Inversion Principle",cat:0},
  {text:"Don't Repeat Yourself (DRY)",cat:1}
 ],
 explanation:"SOLID = SRP, OCP, LSP, ISP, DIP. DRY ist ein wichtiges Prinzip, gehört aber nicht zu SOLID."},
{id:"c3q24",chapter:3,lz:"LZ 03-04",r:"R1",type:"multi",
 q:"Welche Aussagen zum Open/Closed-Prinzip (OCP) treffen zu?",
 options:[
  "Bausteine sollen offen für Erweiterung, aber geschlossen für Änderung sein.",
  "Neues Verhalten wird bevorzugt über Abstraktionen/Polymorphie ergänzt, statt erprobten Code zu ändern.",
  "Bereits getesteter Code soll für neues Verhalten möglichst direkt geändert werden.",
  "Alle Klassen sollen als final deklariert und niemals erweitert werden.",
  "OCP verlangt, dass jede Klasse genau eine einzige Verantwortung besitzt."
 ],
 correct:[0,1],
 optExpl:[
  "OCP: Bausteine offen für Erweiterung, geschlossen für Änderung.",
  "Neues Verhalten über Abstraktionen ergänzen, ohne erprobten Code zu ändern.",
  "Erprobten Code direkt zu ändern widerspricht dem OCP.",
  "Pauschal „alles final“ widerspricht der Offenheit für Erweiterung.",
  "Genau eine Verantwortung pro Klasse ist das SRP, nicht das OCP."
 ],
 explanation:"OCP: offen für Erweiterung, geschlossen für Änderung – neues Verhalten über Abstraktionen ergänzen, ohne erprobten Code anzufassen. Direktes Ändern oder pauschales „alles final“ widersprechen dem Prinzip."},
{id:"c3q25",chapter:3,lz:"LZ 03-04",r:"R3",type:"single",
 q:"Was empfiehlt das Interface-Segregation-Prinzip (ISP)?",
 options:[
  "Schmale, rollenspezifische Schnittstellen, damit Clients nur von dem abhängen, was sie wirklich nutzen.",
  "Möglichst viele Methoden in einer zentralen Schnittstelle bündeln, um Konsistenz zu sichern.",
  "Schnittstellen nach technischen Schichten statt nach Client-Rollen schneiden.",
  "Konkrete Implementierungen direkt ansprechen, um Umwege über Schnittstellen zu vermeiden."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Schmale, rollenspezifische Schnittstellen, keine Abhängigkeit von ungenutzten Methoden.",
  "Eine große Sammel-Schnittstelle ist genau das Gegenteil von ISP.",
  "ISP schneidet nach Client-Rollen, nicht nach technischen Schichten.",
  "Implementierungen direkt anzusprechen widerspricht dem Schnittstellengedanken."
 ],
 explanation:"ISP: keine Abhängigkeit von ungenutzten Methoden → schmale, rollenspezifische Schnittstellen. Eine große Sammel-Schnittstelle ist genau das Gegenteil."},
{id:"c3q26",chapter:3,lz:"LZ 03-04",r:"R3",type:"single",
 q:"Was fordert das Liskovsche Substitutionsprinzip (LSP)?",
 options:[
  "Objekte eines Subtyps müssen anstelle ihres Basistyps verwendbar sein, ohne die Korrektheit zu brechen.",
  "Ein Subtyp darf die Vorbedingungen seiner Methoden gegenüber dem Basistyp verschärfen.",
  "Basistypen müssen von ihren Subtypen ableiten, nicht umgekehrt.",
  "Vererbung soll grundsätzlich durch Kopieren von Code ersetzt werden."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Ein Subtyp muss den Basistyp ersetzen können, ohne die Korrektheit zu brechen.",
  "Vorbedingungen zu verschärfen bricht das LSP.",
  "Die Ableitungsrichtung ist nicht umgekehrt; Subtypen leiten vom Basistyp ab.",
  "LSP hat nichts mit dem Kopieren von Code zu tun."
 ],
 explanation:"LSP: ein Subtyp muss den Basistyp überall ersetzen können. Vorbedingungen zu verschärfen bricht LSP; die Ableitungsrichtung ist nicht umgekehrt; mit Code-Kopieren hat es nichts zu tun."},
{id:"c3q27",chapter:3,lz:"LZ 03-08",r:"R3",type:"single",
 q:"Was kennzeichnet ein ereignisgetriebenes (Publish/Subscribe-)Muster?",
 options:[
  "Sender veröffentlichen Ereignisse, ohne die Empfänger zu kennen; Empfänger reagieren darauf – lose gekoppelt.",
  "Jeder Sender kennt und ruft seine Empfänger direkt und synchron auf.",
  "Es darf pro Ereignis immer nur genau einen Empfänger geben.",
  "Empfänger fragen den Sender in festen Intervallen aktiv ab (Polling)."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Sender und Empfänger sind über Ereignisse lose gekoppelt.",
  "Direktes, synchrones Aufrufen der Empfänger widerspricht der Entkopplung.",
  "Pro Ereignis sind auch mehrere Empfänger möglich.",
  "Polling beschreibt nicht das ereignisgetriebene Publish/Subscribe-Muster."
 ],
 explanation:"Bei Publish/Subscribe sind Sender und Empfänger über Ereignisse entkoppelt (auch mehrere Empfänger möglich). Direkter Aufruf, Ein-Empfänger-Zwang oder Polling beschreiben es nicht."},
{id:"c3q28",chapter:3,lz:"LZ 03-08",r:"R3",type:"single",
 q:"Was beschreibt das Client-Server-Muster?",
 options:[
  "Anfragende Clients nutzen Dienste eines bereitstellenden Servers über eine definierte Schnittstelle.",
  "Alle Knoten sind gleichrangig und bieten sich gegenseitig dieselben Dienste an (Peer-to-Peer).",
  "Der Server initiiert von sich aus alle Anfragen an die Clients.",
  "Client und Server müssen zwingend auf demselben Rechner laufen."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Clients fordern Dienste beim Server über eine definierte Schnittstelle an.",
  "Gleichrangige Knoten beschreiben Peer-to-Peer, nicht Client-Server.",
  "Der Client initiiert die Anfragen, nicht der Server.",
  "Client und Server können auf getrennten Rechnern laufen."
 ],
 explanation:"Im Client-Server-Muster fordert der Client Dienste beim Server an. Gleichrangige Knoten sind Peer-to-Peer; der Server initiiert nicht die Anfragen; getrennte Rechner sind möglich."},
{id:"c3q29",chapter:3,lz:"LZ 03-04",r:"R1",type:"multi",
 q:"Welche Aussagen zur Heuristik „Komposition vor Vererbung“ treffen zu?",
 options:[
  "Verhalten wird oft besser durch Zusammensetzen von Objekten erreicht als durch tiefe Vererbung.",
  "Komposition vermeidet die enge Bindung und Fragilität tiefer Vererbungshierarchien.",
  "Vererbung ist grundsätzlich verboten und muss immer vermieden werden.",
  "Tiefe Vererbungshierarchien sind generell flexibler als Komposition.",
  "Komposition macht das Laufzeitverhalten grundsätzlich schneller als Vererbung.",
  "Bei Komposition erbt das umschließende Objekt automatisch alle Methoden seiner Bestandteile."
 ],
 correct:[0,1],
 optExpl:[
  "Zusammensetzen von Objekten ist oft flexibler als tiefe Vererbung.",
  "Komposition vermeidet enge Bindung und Fragilität tiefer Vererbungshierarchien.",
  "Es ist eine Heuristik, kein grundsätzliches Verbot von Vererbung.",
  "Tiefe Vererbungshierarchien sind nicht generell flexibler als Komposition.",
  "Es geht um Flexibilität, nicht um einen pauschalen Laufzeit-Vorteil.",
  "Komposition erbt nichts automatisch; Aufrufe müssen explizit delegiert werden."
 ],
 explanation:"Komposition ist meist flexibler und weniger fragil als tiefe Vererbung – eine Heuristik, kein Verbot. Vererbung ist nicht generell verboten, und tiefe Hierarchien sind nicht flexibler."},
{id:"c3q30",chapter:3,lz:"LZ 03-08",r:"R3",type:"multi",
 q:"Welche Aussagen zu zustandslosen (stateless) Diensten treffen zu?",
 options:[
  "Anfragen können auf beliebige, gleichwertige Instanzen verteilt werden.",
  "Das erleichtert horizontale Skalierung und Lastverteilung.",
  "Zustandslose Dienste können grundsätzlich keine Daten verarbeiten.",
  "Der Sitzungszustand wird fest an eine bestimmte Instanz gebunden.",
  "Zustandslose Dienste dürfen keine externe Datenbank und keinen Cache nutzen."
 ],
 correct:[0,1],
 optExpl:[
  "Ohne gebundenen Zustand kann jede gleichwertige Instanz jede Anfrage bearbeiten.",
  "Das erleichtert horizontale Skalierung und Lastverteilung.",
  "Zustandslose Dienste verarbeiten sehr wohl Daten.",
  "Feste Instanz-Bindung wäre gerade zustandsbehaftet, nicht zustandslos.",
  "Externen Zustand in DB oder Cache auszulagern ist gerade typisch für stateless."
 ],
 explanation:"Ohne gebundenen Sitzungszustand kann jede Instanz jede Anfrage bearbeiten → einfache Skalierung. Sie verarbeiten sehr wohl Daten, und feste Instanz-Bindung wäre gerade zustandsbehaftet."},
{id:"c3q31",chapter:3,lz:"LZ 03-06",r:"R1",type:"multi",
 q:"Welche Eigenschaften fördern die Wartbarkeit/Änderbarkeit eines Systems?",
 options:[
  "Modularisierung in überschaubare Bausteine.",
  "Klar definierte, stabile Schnittstellen.",
  "Geringe Kopplung zwischen den Bausteinen.",
  "Möglichst viele geteilte globale Variablen für kurzen Datenaustausch.",
  "Umfangreiche Duplizierung von Code an vielen verschiedenen Stellen."
 ],
 correct:[0,1,2],
 optExpl:[
  "Modularisierung in überschaubare Bausteine fördert die Wartbarkeit.",
  "Klar definierte, stabile Schnittstellen erleichtern Änderungen.",
  "Geringe Kopplung erleichtert unabhängige Änderungen.",
  "Geteilte globale Variablen erhöhen die Kopplung und erschweren Änderungen.",
  "Code-Duplizierung erschwert Änderungen, da man an vielen Stellen anpassen muss."
 ],
 explanation:"Modularität, stabile Schnittstellen und geringe Kopplung fördern die Wartbarkeit. Geteilte globale Variablen erhöhen dagegen die Kopplung und erschweren Änderungen."},
{id:"c3q32",chapter:3,lz:"LZ 03-10",r:"R3",type:"single",
 q:"Wozu dienen Resilienz-Muster wie Timeout, Retry oder Circuit Breaker?",
 options:[
  "Zum robusten Umgang mit Fehlern und Ausfällen, besonders in verteilten Systemen.",
  "Zur spürbaren Beschleunigung fehlerfreier Aufrufe im Normalbetrieb.",
  "Um zu garantieren, dass entfernte Aufrufe nie fehlschlagen.",
  "Um die Notwendigkeit, Fehler überhaupt zu behandeln, zu ersetzen."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Sie helfen, mit Fehlern und Ausfällen robust umzugehen.",
  "Sie beschleunigen fehlerfreie Aufrufe im Normalbetrieb nicht.",
  "Sie garantieren keine Fehlerfreiheit entfernter Aufrufe.",
  "Sie ersetzen die Fehlerbehandlung nicht, sondern ergänzen sie."
 ],
 explanation:"Timeout/Retry/Circuit Breaker helfen, mit Fehlern und Ausfällen umzugehen. Sie beschleunigen den Normalfall nicht, garantieren keine Fehlerfreiheit und ersetzen die Fehlerbehandlung nicht."},
{id:"k9",chapter:3,lz:"LZ 03-06",r:"R3",type:"k",points:2,
 q:"Synchrone oder asynchrone Kommunikation?",
 categories:["Synchron","Asynchron"],
 rows:[
  {text:"Der Aufrufer wartet blockierend auf die Antwort.",cat:0},
  {text:"Eine Nachricht wird in eine Queue gelegt, der Sender macht sofort weiter.",cat:1},
  {text:"Direkter, blockierender Methoden-/Funktionsaufruf.",cat:0},
  {text:"Ein Ereignis wird veröffentlicht, Empfänger reagieren später.",cat:1}
 ],
 explanation:"Synchron = der Aufrufer wartet blockierend auf die Antwort. Asynchron = Sender und Empfänger sind zeitlich entkoppelt (Queue/Events)."},
{id:"c3q33",chapter:3,lz:"LZ 03-09",r:"R3",type:"single",
 q:"Wozu dient das Fassaden-Muster (Facade)?",
 options:[
  "Es bietet einen vereinfachten, einheitlichen Zugang zu einem komplexeren Subsystem.",
  "Es übersetzt zwischen zwei zueinander inkompatiblen Schnittstellen.",
  "Es erzeugt für jeden Aufruf ein neues Objekt einer Produktfamilie.",
  "Es legt den internen Aufbau des Subsystems für alle Nutzer offen."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Eine Fassade bietet vereinfachten, einheitlichen Zugang zu einem komplexeren Subsystem.",
  "Das Übersetzen inkompatibler Schnittstellen ist Aufgabe des Adapters.",
  "Objekte einer Produktfamilie erzeugt die Fabrik, nicht die Fassade.",
  "Eine Fassade verbirgt den internen Aufbau, statt ihn offenzulegen."
 ],
 explanation:"Eine Fassade vereinfacht den Zugang zu einem Subsystem und verbirgt dessen Komplexität. Das Übersetzen inkompatibler Schnittstellen ist der Adapter; Objekte erzeugen ist die Fabrik."},
{id:"c3q34",chapter:3,lz:"LZ 03-04",r:"R1",type:"single",
 q:"Was ist ein Modul (Baustein) im Sinne der Modularisierung?",
 options:[
  "Eine in sich geschlossene Einheit mit klar umrissener Aufgabe und definierter Schnittstelle.",
  "Eine beliebige Gruppierung von Dateien im selben Verzeichnis, ohne gemeinsame Aufgabe.",
  "Eine einzelne Funktion, die genau eine Berechnung ausführt.",
  "Ein laufender Prozess auf einem Server."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Ein Modul bündelt zusammengehörige Aufgaben hinter einer klaren Schnittstelle.",
  "Ein bloßes Verzeichnis ohne gemeinsame Aufgabe ist kein echtes Modul.",
  "Eine einzelne Funktion ist zu klein für ein ganzes Modul.",
  "Ein Laufzeitprozess ist ein Betriebsbegriff, kein Baustein der Modularisierung."
 ],
 explanation:"Ein Modul bündelt zusammengehörige Funktionalität (hohe Kohäsion) hinter einer Schnittstelle. Ein Verzeichnis, eine Einzelfunktion oder ein Laufzeitprozess sind etwas anderes."},
{id:"c3q35",chapter:3,lz:"LZ 03-08",r:"R2",type:"multi",
 q:"Welche Aussagen zum Trade-off zwischen Monolith und Microservices treffen zu?",
 options:[
  "Ein Monolith ist meist einfacher zu betreiben und end-to-end zu testen.",
  "Microservices sind unabhängig deploy- und skalierbar, aber betrieblich komplexer.",
  "Microservices sind in jeder Hinsicht und in jedem Projekt die bessere Wahl.",
  "Ein Monolith kann grundsätzlich nicht in Module gegliedert werden.",
  "Ein Monolith kann grundsätzlich nicht horizontal skaliert werden."
 ],
 correct:[0,1],
 optExpl:[
  "Richtig, ein Monolith läuft und testet sich als Ganzes einfacher.",
  "Richtig, unabhängiges Deployment und Skalierung erkauft man mit höherer Betriebskomplexität.",
  "Microservices sind nicht pauschal besser – es bleibt eine Abwägung.",
  "Auch ein Monolith lässt sich sehr wohl modular gliedern.",
  "Auch ein Monolith lässt sich als Ganzes über mehrere Instanzen skalieren."
 ],
 explanation:"Monolith = einfacherer Betrieb/Test; Microservices = unabhängige Skalierung/Deployment bei höherer Betriebskomplexität. Microservices sind nicht pauschal besser, und Monolithen können sehr wohl modular sein."},
{id:"c3q36",chapter:3,lz:"LZ 03-08",r:"R1",type:"single",
 q:"Warum nutzt man bewährte Architektur-/Entwurfsmuster, statt jede Lösung neu zu erfinden?",
 options:[
  "Weil sie erprobt sind, Risiko senken und über bekannte Begriffe die Kommunikation erleichtern.",
  "Weil ein einmal gewähltes Muster unabhängig vom Problem immer passt.",
  "Weil der Einsatz von Mustern eigene Entwurfsentscheidungen überflüssig macht.",
  "Weil möglichst viele Muster gleichzeitig ein System automatisch verbessern."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Erprobte Muster senken Risiko und schaffen eine gemeinsame Sprache.",
  "Kein Muster passt immer – es muss zum Problem passen.",
  "Muster ersetzen keine eigenen Entwurfsentscheidungen.",
  "Die bloße Menge an Mustern verbessert ein System nicht automatisch."
 ],
 explanation:"Muster bündeln bewährtes Wissen und schaffen eine gemeinsame Sprache – müssen aber zum Problem passen. Sie ersetzen keine Entscheidungen, und ihre bloße Menge verbessert nichts."},
{id:"c3q37",chapter:3,lz:"LZ 03-03",r:"R3",type:"single",
 q:"Was empfiehlt ein fachlich orientierter Schnitt (z. B. bei Domain-Driven Design)?",
 options:[
  "Bausteine entlang fachlicher Grenzen/Domänen schneiden, nicht nur nach technischen Schichten.",
  "Bausteine strikt nach technischen Schichten (UI/Logik/DB) statt nach Fachlichkeit schneiden.",
  "Die gesamte Fachlichkeit in einem einzigen zentralen Modul bündeln.",
  "Den Schnitt an der Ordnerstruktur des Repositories ausrichten."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Bausteine entlang Domänen bzw. Bounded Contexts schneiden.",
  "Rein technische Schichten sind gerade kein fachlicher Schnitt.",
  "Ein einziges zentrales Fach-Modul bildet keine fachlichen Grenzen ab.",
  "Die Ordnerstruktur ist kein Kriterium für einen fachlichen Schnitt."
 ],
 explanation:"Ein fachlicher Schnitt orientiert sich an Domänen bzw. Bounded Contexts, nicht rein an technischen Schichten. Ein zentrales Fach-Modul oder die Ordnerstruktur sind kein fachlicher Schnitt."},
{id:"c3q38",chapter:3,lz:"LZ 03-04",r:"R2",type:"multi",
 q:"Welche Aussagen zur Kapselung (Encapsulation) treffen zu?",
 options:[
  "Daten und die zugehörigen Operationen werden zu einer Einheit gebündelt.",
  "Der interne Zustand ist nur über eine definierte Schnittstelle zugänglich (verborgen).",
  "Es bedeutet vor allem, zusammengehörige Klassen im selben Paket zu gruppieren.",
  "Es bezeichnet das Verschlüsseln des Quellcodes gegen unbefugtes Auslesen.",
  "Es bedeutet, sämtliche Attribute einer Klasse öffentlich zugänglich zu machen.",
  "Es bezeichnet das Zusammenführen mehrerer Objekte zu einem einzigen Prozess."
 ],
 correct:[0,1],
 optExpl:[
  "Richtig, Kapselung bündelt Daten mit ihren zugehörigen Operationen.",
  "Richtig, der innere Zustand bleibt hinter einer Schnittstelle verborgen.",
  "Klassen in ein Paket zu legen ist nur Paketierung.",
  "Kapselung meint nicht das Verschlüsseln von Quellcode.",
  "Öffentliche Attribute durchbrechen die Kapselung, statt sie herzustellen.",
  "Objekte in einen Prozess zu legen ist Deployment, keine Kapselung."
 ],
 explanation:"Kapselung bündelt Daten und Verhalten und verbirgt den inneren Zustand hinter einer Schnittstelle. Paketierung und Verschlüsselung sind jeweils andere Konzepte."},
{id:"c3q39",chapter:3,lz:"LZ 03-09",r:"R3",type:"single",
 q:"Wozu dient das Adapter-Muster?",
 options:[
  "Es verbindet zwei zueinander inkompatible Schnittstellen, sodass sie zusammenarbeiten können.",
  "Es bietet einen vereinfachten Zugang zu einem komplexen Subsystem.",
  "Es entkoppelt Sender und Empfänger vollständig über Ereignisse.",
  "Es stellt sicher, dass es von einer Klasse nur eine einzige Instanz gibt."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Ein Adapter übersetzt zwischen erwarteter und vorhandener Schnittstelle.",
  "Vereinfachter Zugang zu einem Subsystem beschreibt die Fassade.",
  "Ereignisbasierte Entkopplung ist Publish/Subscribe, nicht der Adapter.",
  "Genau eine Instanz sicherzustellen ist das Singleton-Muster."
 ],
 explanation:"Ein Adapter übersetzt zwischen einer erwarteten und einer vorhandenen Schnittstelle. Vereinfachter Zugang = Fassade; Ereignis-Entkopplung = Publish/Subscribe; Ein-Instanz = Singleton."},
{id:"c3q40",chapter:3,lz:"LZ 03-04",r:"R1",type:"multi",
 q:"Welche gehören zu den Zielen der Modularisierung?",
 options:[
  "Unabhängige Entwicklung einzelner Teile.",
  "Wiederverwendbarkeit von Bausteinen.",
  "Begrenzte Auswirkung von Änderungen (lokale Änderbarkeit).",
  "Eine möglichst enge Verflechtung der Bausteine untereinander.",
  "Die vollständige Beseitigung aller Schnittstellen zwischen den Bausteinen."
 ],
 correct:[0,1,2],
 optExpl:[
  "Richtig, Module lassen sich unabhängig voneinander entwickeln.",
  "Richtig, klar geschnittene Bausteine sind wiederverwendbar.",
  "Richtig, Änderungen bleiben lokal begrenzt und wirken nicht überall.",
  "Enge Verflechtung bedeutet hohe Kopplung – das Gegenteil des Ziels.",
  "Module brauchen Schnittstellen zur Zusammenarbeit; ganz ohne geht es nicht."
 ],
 explanation:"Modularisierung ermöglicht unabhängige Entwicklung, Wiederverwendung und lokal begrenzte Änderungen. Enge Verflechtung (hohe Kopplung) ist gerade das Gegenteil des Ziels."},
{id:"c3q41",chapter:3,lz:"LZ 03-06",r:"R2",type:"multi",
 q:"Welche Aussagen zum Trade-off bei starker Wiederverwendung treffen zu?",
 options:[
  "Wiederverwendbare Bausteine werden oft allgemeiner und dadurch komplexer.",
  "Viele Nutzer eines Bausteins können die Kopplung an ihn erhöhen.",
  "Wiederverwendung hat ausschließlich Vorteile und keinerlei Kosten.",
  "Wiederverwendung ist im Sinne von DRY grundsätzlich zu vermeiden.",
  "Änderungen an einem breit genutzten Baustein bleiben stets folgenlos für seine Nutzer."
 ],
 correct:[0,1],
 optExpl:[
  "Richtig, breit nutzbare Bausteine werden allgemeiner und dadurch komplexer.",
  "Richtig, viele Nutzer eines Bausteins erhöhen die Kopplung an ihn.",
  "Wiederverwendung ist nicht kostenlos, sie hat auch Nachteile.",
  "DRY spricht für Wiederverwendung, nicht dagegen.",
  "Änderungen an breit genutzten Bausteinen wirken auf viele Nutzer, nicht folgenlos."
 ],
 explanation:"Wiederverwendung kann Bausteine allgemeiner/komplexer machen und die Kopplung an sie erhöhen – daher abwägen. Sie ist nicht kostenlos, aber auch nicht zu vermeiden (DRY spricht sogar dafür)."},
{id:"k12",chapter:3,lz:"LZ 03-06",r:"R1",type:"k",points:2,
 q:"Fördert das Merkmal die Wartbarkeit oder schadet es ihr?",
 categories:["Fördert Wartbarkeit","Schadet Wartbarkeit"],
 rows:[
  {text:"Klar definierte, stabile Schnittstellen",cat:0},
  {text:"Hohe Kopplung zwischen vielen Bausteinen",cat:1},
  {text:"Hohe Kohäsion innerhalb der Bausteine",cat:0},
  {text:"Viel duplizierter Code (Verletzung von DRY)",cat:1}
 ],
 explanation:"Klare Schnittstellen und hohe Kohäsion fördern die Wartbarkeit. Hohe Kopplung und Duplizierung erschweren Änderungen."},
{id:"c3q42",chapter:3,lz:"LZ 03-03",r:"R1",type:"single",
 q:"Was empfiehlt sich beim Entwurf hinsichtlich fachlicher und technischer Architektur?",
 options:[
  "Zuerst den fachlichen Schnitt (Problemraum) verstehen und die technische Lösung darauf aufbauen.",
  "Zuerst die technische Infrastruktur vollständig festlegen; die Fachlichkeit ergibt sich daraus.",
  "Fachliche und technische Architektur sind identisch und müssen nicht getrennt betrachtet werden.",
  "Der fachliche Schnitt ist zweitrangig, solange die Technik performant ist."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Erst den Problemraum verstehen, dann die Technik darauf ausrichten.",
  "Technik zuerst festzulegen führt zu schlecht geschnittenen Systemen.",
  "Fachliche und technische Architektur sind getrennt zu betrachten.",
  "Der fachliche Schnitt ist zentral, nicht der Performance nachgeordnet."
 ],
 explanation:"Erst den Problemraum/fachlichen Schnitt verstehen, dann die Technik darauf ausrichten („Technik folgt der Fachlichkeit“). Technik-zuerst oder das Ignorieren der Fachlichkeit führt zu schlecht geschnittenen Systemen."},
{id:"c3q43",chapter:3,lz:"LZ 03-03",r:"R2",type:"single",
 q:"Worauf weist die „Millersche Zahl“ (7±2) beim Strukturieren einer Architektur hin?",
 options:[
  "Die Zahl gleichzeitig überblickbarer Elemente ist begrenzt – Bausteine sollten pro Ebene überschaubar bleiben.",
  "Ein System sollte aus exakt sieben Schichten bestehen.",
  "Jede Komponente darf höchstens neun Codezeilen enthalten.",
  "Nach sieben Iterationen ist eine Architektur zwingend fertig."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Nur wenige Elemente sind gleichzeitig fassbar – pro Ebene überschaubar bleiben.",
  "Miller schreibt keine feste Zahl von genau sieben Schichten vor.",
  "Die Zahl begrenzt nicht die Codezeilen pro Komponente.",
  "Miller sagt nichts über eine Anzahl von Iterationen aus."
 ],
 explanation:"Miller beschreibt die begrenzte Zahl gleichzeitig fassbarer „Chunks“ (~7±2) – ein Argument für überschaubare Zerlegung pro Ebene. Es ist keine feste Vorschrift für Schichten, Codezeilen oder Iterationen."},
{id:"c3q44",chapter:3,lz:"LZ 03-03",r:"R2",type:"single",
 q:"Welche Aussage über das Vorgehen beim Architekturentwurf trifft zu?",
 options:[
  "Eine Architektur lässt sich nicht rein linear aus den Anforderungen ableiten; der Entwurf verläuft iterativ.",
  "Es gibt ein universelles Standardverfahren, das in jedem Projekt die optimale Architektur liefert.",
  "Steht das Anforderungsdokument, ergibt sich die Architektur eindeutig und automatisch.",
  "Entwurfsentscheidungen dürfen nach Projektbeginn nicht mehr revidiert werden."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Architektur entsteht iterativ, nicht als lineare Ableitung aus Anforderungen.",
  "Es gibt kein Standardverfahren, das in jedem Projekt optimal passt.",
  "Aus dem Anforderungsdokument ergibt sich keine Architektur automatisch.",
  "Entscheidungen werden bei neuem Wissen sehr wohl angepasst."
 ],
 explanation:"Architektur entsteht iterativ und explorativ, nicht als lineare Ableitung. Es gibt keine „Silver Bullet“, keine automatische Ableitung, und Entscheidungen werden bei neuem Wissen angepasst."},
{id:"c3q45",chapter:3,lz:"LZ 03-06",r:"R1",type:"single",
 q:"Wie ist das Ziel „lose Kopplung“ richtig einzuordnen?",
 options:[
  "Kopplung soll so gering wie möglich, aber so stark wie fachlich nötig sein – ganz ohne Kopplung gäbe es keine Zusammenarbeit.",
  "Kopplung sollte grundsätzlich auf null reduziert werden, egal um welchen Preis.",
  "Je mehr Kopplung, desto besser lässt sich ein System warten.",
  "Kopplung und Kohäsion bezeichnen dasselbe Phänomen."
 ],
 correct:[0],
 optExpl:[
  "Richtig: So wenig Kopplung wie möglich, so viel wie fachlich nötig.",
  "Null Kopplung verhindert jede Zusammenarbeit der Bausteine.",
  "Mehr Kopplung erschwert die Wartung, statt sie zu erleichtern.",
  "Kopplung und Kohäsion sind verschiedene Konzepte."
 ],
 explanation:"Lose Kopplung ist kein Selbstzweck: Bausteine müssen zusammenarbeiten, also braucht es ein angemessenes Maß. Null Kopplung verhindert Funktionalität; mehr Kopplung erschwert die Wartung; Kopplung ist nicht dasselbe wie Kohäsion."},
{id:"c3q46",chapter:3,lz:"LZ 03-06",r:"R2",type:"single",
 q:"Welche Art der Beziehung erzeugt tendenziell die stärkste Kopplung zwischen Bausteinen?",
 options:[
  "Implementierungsvererbung (die Ableitung hängt von internen Details der Basis ab).",
  "Kommunikation über eine schmale, klar definierte Schnittstelle.",
  "Lose, ereignisbasierte (asynchrone) Benachrichtigung.",
  "Delegation an ein über ein Interface referenziertes Objekt."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Implementierungsvererbung bindet stark an die Interna der Basisklasse.",
  "Eine schmale, klar definierte Schnittstelle koppelt nur lose.",
  "Asynchrone, ereignisbasierte Benachrichtigung koppelt besonders locker.",
  "Delegation über ein Interface hält die Kopplung gering."
 ],
 explanation:"Implementierungsvererbung koppelt sehr stark an die Interna der Basisklasse. Schnittstellen, Ereignisse und Delegation über Interfaces koppeln deutlich lockerer – daher „Komposition vor Vererbung“."},
{id:"c3q47",chapter:3,lz:"LZ 03-06",r:"R2",type:"single",
 q:"Bedeutet dynamische (erst zur Laufzeit aufgelöste) Kopplung automatisch „lose“ Kopplung?",
 options:[
  "Nein – die Abhängigkeit wird oft nur verschoben oder versteckt, nicht wirklich verringert.",
  "Ja – sobald etwas zur Laufzeit aufgelöst wird, ist die Kopplung immer minimal.",
  "Ja – dynamische Kopplung entfernt jede Abhängigkeit vollständig.",
  "Nein – dynamische Kopplung ist immer stärker als jede statische Kopplung."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Die Abhängigkeit wird oft nur verlagert oder verborgen, nicht verringert.",
  "Laufzeit-Auflösung macht die Kopplung nicht automatisch minimal.",
  "Dynamische Kopplung entfernt keine Abhängigkeit vollständig.",
  "Dynamische Kopplung ist nicht generell stärker als statische."
 ],
 explanation:"Dynamische Auflösung (z. B. per Konfiguration/Reflection) verlagert oder verbirgt Abhängigkeiten häufig nur; sie ist nicht per se lose. Umgekehrt ist sie auch nicht generell stärker als statische Kopplung."},
{id:"c3q48",chapter:3,lz:"LZ 03-06",r:"R2",type:"multi",
 q:"Welche Aussagen zu ein- und ausgehenden Abhängigkeiten (afferent/efferent) treffen zu?",
 options:[
  "Viele eingehende Abhängigkeiten (afferent) machen einen Baustein „stabil“ – Änderungen daran wirken breit.",
  "Viele ausgehende Abhängigkeiten (efferent) machen einen Baustein tendenziell „instabil“ bzw. änderungsanfällig.",
  "Eingehende Abhängigkeiten haben keinerlei Einfluss auf die Änderbarkeit.",
  "Ein Baustein ganz ohne Abhängigkeiten ist grundsätzlich schlecht entworfen.",
  "Viele eingehende Abhängigkeiten (afferent) machen einen Baustein besonders leicht änderbar.",
  "Afferente und efferente Abhängigkeiten bezeichnen dasselbe und sind austauschbar."
 ],
 correct:[0,1],
 optExpl:[
  "Richtig, viele eingehende Abhängigkeiten machen einen Baustein stabil und änderungsriskant.",
  "Richtig, viele ausgehende Abhängigkeiten machen einen Baustein tendenziell instabil.",
  "Eingehende Abhängigkeiten beeinflussen die Änderbarkeit sehr wohl.",
  "Ein Baustein ganz ohne Abhängigkeiten ist nicht per se schlecht.",
  "Viele eingehende Abhängigkeiten erschweren sichere Änderungen, statt sie zu erleichtern.",
  "Afferent (eingehend) und efferent (ausgehend) bezeichnen entgegengesetzte Richtungen."
 ],
 explanation:"Viele eingehende Abhängigkeiten = „stabil“ (Änderungen sind riskant, weil viele darauf bauen); viele ausgehende = „instabil“. Eingehende Abhängigkeiten beeinflussen die Änderbarkeit sehr wohl, und Unabhängigkeit ist nicht per se schlecht."},
{id:"c3q49",chapter:3,lz:"LZ 03-10",r:"R1",type:"single",
 q:"Was ist charakteristisch für ein Querschnittskonzept?",
 options:[
  "Es betrifft viele Bausteine übergreifend und lässt sich nicht sauber in einem einzelnen Baustein kapseln.",
  "Es lässt sich vollständig in genau einer fachlichen Komponente einschließen.",
  "Es ist immer eine rein organisatorische Governance-Vorgabe.",
  "Es betrifft ausschließlich die Benutzeroberfläche."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Es wirkt systemweit über viele Bausteine und ist nicht lokal kapselbar.",
  "Gerade nicht – es lässt sich nicht in eine Komponente einschließen.",
  "Querschnittskonzepte sind technischer Natur, keine bloße Governance.",
  "Sie betreffen viele Bausteine, nicht nur die Benutzeroberfläche."
 ],
 explanation:"Querschnittskonzepte (z. B. Persistenz, Sicherheit, Logging) wirken systemweit über viele Bausteine und sind gerade nicht lokal kapselbar. Sie sind technischer Natur, keine bloße Governance und nicht auf die UI beschränkt."},
{id:"c3q50",chapter:3,lz:"LZ 03-10",r:"R3",type:"single",
 q:"Wie unterscheiden sich ACID und BASE als Konsistenzansätze bei der Persistenz?",
 options:[
  "ACID betont strikte Konsistenz (klassisch relational); BASE bevorzugt Verfügbarkeit und eventuelle Konsistenz (häufig NoSQL).",
  "ACID gehört zu NoSQL-Datenbanken, BASE zu relationalen Datenbanken.",
  "Beide garantieren jederzeit sofortige, starke Konsistenz über verteilte Knoten.",
  "BASE steht für strengere Transaktionsgarantien als ACID."
 ],
 correct:[0],
 optExpl:[
  "Richtig: ACID betont strikte Konsistenz, BASE Verfügbarkeit und eventuelle Konsistenz.",
  "Die Zuordnung ist vertauscht: ACID ist relational, BASE eher NoSQL.",
  "BASE garantiert gerade keine jederzeit sofortige starke Konsistenz.",
  "BASE lockert die Garantien bewusst, ist also nicht strenger."
 ],
 explanation:"ACID = strikte Transaktionskonsistenz (typisch relational), BASE = Verfügbarkeit + eventuelle Konsistenz (typisch NoSQL/verteilt). Die Zuordnung ist nicht vertauscht, und BASE lockert die Garantien bewusst."},
{id:"c3q51",chapter:3,lz:"LZ 03-10",r:"R3",type:"single",
 q:"Was besagt das CAP-Theorem für verteilte Datenhaltung?",
 options:[
  "Bei einer Netzwerkpartition muss man zwischen Konsistenz und Verfügbarkeit abwägen – nicht alle drei Ziele sind gleichzeitig voll erreichbar.",
  "Konsistenz, Verfügbarkeit und Partitionstoleranz sind jederzeit vollständig gleichzeitig garantierbar.",
  "Verteilte Systeme müssen grundsätzlich auf Verfügbarkeit verzichten.",
  "CAP beschreibt drei aufeinanderfolgende Phasen eines Datenbank-Deployments."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Bei einer Partition muss man Konsistenz gegen Verfügbarkeit abwägen.",
  "Alle drei Eigenschaften sind nicht gleichzeitig voll garantierbar.",
  "CAP erzwingt keinen generellen Verzicht auf Verfügbarkeit.",
  "CAP ist kein Phasenmodell eines Deployments."
 ],
 explanation:"CAP: Bei einer Partition ist ein Kompromiss zwischen Konsistenz und Verfügbarkeit nötig – man kann nicht alle drei Eigenschaften gleichzeitig voll garantieren. Es ist kein Phasenmodell und erzwingt keinen generellen Verfügbarkeitsverzicht."},
{id:"c3q52",chapter:3,lz:"LZ 03-08",r:"R2",type:"single",
 q:"Was bezeichnet man bei Schichtenarchitekturen als „Layer-Bridge“ (Überspringen einer Schicht)?",
 options:[
  "Das gezielte Umgehen einer Zwischenschicht – im gelockerten Ansatz erlaubt, erzeugt aber zusätzliche Abhängigkeiten und sollte dokumentiert werden.",
  "Eine Schicht, die alle anderen Schichten automatisch synchronisiert.",
  "Die strikte Regel, dass niemals eine Schicht übersprungen werden darf.",
  "Eine Erlaubnis für untere Schichten, obere aufzurufen."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Eine Zwischenschicht wird bewusst übersprungen – erlaubt, aber zu dokumentieren.",
  "Eine Layer-Bridge synchronisiert keine Schichten automatisch.",
  "Sie ist kein Verbot, sondern gerade das erlaubte Überspringen.",
  "Aufrufe von unten nach oben bleiben tabu und erzeugen Zyklen."
 ],
 explanation:"Eine Layer-Bridge überspringt eine Schicht (im „relaxed“/gelockerten Modell erlaubt), schafft aber zusätzliche Abhängigkeiten – daher bewusst dokumentieren. Im strengen Modell ist Überspringen unzulässig; Aufrufe von unten nach oben bleiben tabu (Zyklus)."},
{id:"c3q53",chapter:3,lz:"LZ 03-08",r:"R1",type:"multi",
 q:"Welche Regeln gelten idealtypisch für eine strenge Schichtenarchitektur?",
 options:[
  "Aufrufe erfolgen nur von oben nach unten; der umgekehrte Weg erzeugt einen unerwünschten Zyklus.",
  "Bausteine einer Schicht liegen möglichst auf einem ähnlichen Abstraktionsniveau.",
  "Jede Schicht darf beliebig auf jede andere Schicht zugreifen.",
  "Zwei Bausteine mit wechselseitiger Abhängigkeit gehören bewusst in verschiedene Schichten.",
  "In der strengen Variante darf jede Schicht beliebig viele darunterliegende Schichten überspringen."
 ],
 correct:[0,1],
 optExpl:[
  "Richtig, Aufrufe erfolgen nur nach unten – sonst entsteht ein Zyklus.",
  "Richtig, Bausteine einer Schicht liegen auf ähnlichem Abstraktionsniveau.",
  "Beliebiger Zugriff auf jede Schicht widerspricht dem Muster.",
  "Wechselseitig abhängige Bausteine gehören eher in dieselbe Schicht.",
  "Die strenge Variante verbietet das Überspringen von Schichten."
 ],
 explanation:"Strenge Schichtung: nur Aufrufe nach unten (sonst Zyklus) und ein einheitliches Abstraktionsniveau je Schicht. Beliebiger Zugriff widerspricht dem Muster; wechselseitig abhängige Bausteine gehören eher in dieselbe Schicht."},
{id:"c3q54",chapter:3,lz:"LZ 03-08",r:"R2",type:"single",
 q:"Welcher Nachteil ist für tief geschachtelte Schichtenarchitekturen typisch?",
 options:[
  "Das Durchreichen von Aufrufen durch viele Schichten kann Performance kosten, und Änderungen ziehen sich oft durch mehrere Schichten.",
  "Schichten verhindern grundsätzlich jede Form von Wiederverwendung.",
  "Eine Schichtung macht das System zwangsläufig unverständlich.",
  "Schichten schließen den Einsatz definierter Schnittstellen aus."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Aufrufe durchzureichen kostet Performance, und Änderungen ziehen sich durch viele Schichten.",
  "Schichtung fördert Wiederverwendung, statt sie zu verhindern.",
  "Schichten machen ein System eher verständlicher, nicht unverständlich.",
  "Schichten schließen definierte Schnittstellen keineswegs aus."
 ],
 explanation:"Viele Schichten kosten beim Durchreichen Performance, und Änderungen (z. B. an einem Datenfeld) wirken quer durch die Schichten. Schichtung fördert – nicht verhindert – Wiederverwendung, Verständlichkeit und Schnittstellen."},
{id:"c3q55",chapter:3,lz:"LZ 03-08",r:"R2",type:"single",
 q:"Was unterscheidet aktive von passiven Filtern in einer Pipes-and-Filters-Architektur?",
 options:[
  "Aktive Filter holen bzw. schieben Daten selbst; passive Filter werden von außen mit Daten versorgt bzw. ausgelesen.",
  "Aktive Filter verändern Daten, passive Filter lassen sie unverändert durch.",
  "Aktive Filter kennen einander, passive Filter sind isoliert.",
  "Aktive Filter laufen nur sequenziell, passive nur parallel."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Aktive Filter treiben den Datenfluss selbst an, passive werden versorgt.",
  "Der Unterschied betrifft die Kontrolle, nicht das Verändern der Daten.",
  "Filter kennen einander generell nicht, unabhängig von aktiv oder passiv.",
  "Aktiv oder passiv sagt nichts über sequenzielle oder parallele Ausführung."
 ],
 explanation:"Der Unterschied liegt in der Kontrolle des Datenflusses: aktive Filter treiben den Transport selbst an, passive warten auf Zulieferung/Abholung. Beide verarbeiten Daten und kennen einander nicht."},
{id:"c3q56",chapter:3,lz:"LZ 03-08",r:"R2",type:"multi",
 q:"Welche Aussagen zu Pipes and Filters treffen zu?",
 options:[
  "Filter kennen einander nicht und sind über Pipes entkoppelt – dadurch gut austausch- und wiederverwendbar.",
  "Die Fehlerbehandlung ist anspruchsvoll, da ein Filter die Vorgeschichte der Daten nicht kennt.",
  "Filter teilen sich einen gemeinsamen globalen Zustand, um sich abzustimmen.",
  "Das Muster eignet sich besonders für stark interaktive Benutzerdialoge.",
  "Das Muster verhindert grundsätzlich eine parallele Verarbeitung der Filterstufen."
 ],
 correct:[0,1],
 optExpl:[
  "Richtig, über Pipes entkoppelte Filter sind gut austausch- und wiederverwendbar.",
  "Richtig, ohne Kenntnis der Datenhistorie ist die Fehlerbehandlung schwierig.",
  "Filter teilen keinen gemeinsamen globalen Zustand.",
  "Für stark interaktive Dialoge ist die feste Verarbeitungskette ungeeignet.",
  "Pipes and Filters ermöglicht gerade parallele Verarbeitung, statt sie zu verhindern."
 ],
 explanation:"Filter sind über Pipes entkoppelt (austauschbar) – aber die Fehlerbehandlung ist schwierig, weil ein Filter die Historie nicht kennt. Es gibt keinen gemeinsamen Zustand, und für interaktive Dialoge ist die feste Verarbeitungskette ungeeignet."},
{id:"c3q57",chapter:3,lz:"LZ 03-08",r:"R1",type:"single",
 q:"Nach welchem Kriterium sollten Microservices vorrangig geschnitten werden?",
 options:[
  "Nach fachlichen Gesichtspunkten (z. B. Bounded Context) – ein zu feiner Schnitt führt zu „Nano-Services“ mit hohem Overhead.",
  "Nach rein technischen Schichten (je ein UI-, Logik- und Datenbank-Service).",
  "So klein wie irgend möglich – je mehr Services, desto besser.",
  "Nach der zufälligen Verfügbarkeit einzelner Entwickler."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Fachlich schneiden nach Bounded Context; zu fein erzeugt teure Nano-Services.",
  "Ein rein technischer Schnitt in UI, Logik und DB ist ungeeignet.",
  "Immer kleiner ist nicht besser – der Overhead steigt stark.",
  "Die Verfügbarkeit von Entwicklern ist kein sinnvolles Schnittkriterium."
 ],
 explanation:"Der Schnitt erfolgt fachlich (z. B. Bounded Context). Ein rein technischer oder extrem feiner Schnitt („kleiner ist besser“) erzeugt Nano-Services mit unverhältnismäßigem Kommunikations- und Betriebsaufwand."},
{id:"c3q58",chapter:3,lz:"LZ 03-08",r:"R2",type:"multi",
 q:"Welche Herausforderungen bringen Microservices typischerweise mit sich?",
 options:[
  "Höherer Betriebs- und Deployment-Aufwand durch viele eigenständige Einheiten.",
  "Abhängigkeit vom Netzwerk mit zusätzlicher Latenz und neuen Fehlerquellen.",
  "Zwingend eine gemeinsame Datenbank und synchronisierte Releases aller Services.",
  "Die Unmöglichkeit, einzelne Services unabhängig zu skalieren.",
  "Der Wegfall jeglichen Bedarfs an Monitoring und zentralem Logging.",
  "Verteilte Transaktionen und Datenkonsistenz werden dadurch trivial lösbar."
 ],
 correct:[0,1],
 optExpl:[
  "Richtig, viele eigenständige Einheiten erhöhen den Betriebs- und Deployment-Aufwand.",
  "Richtig, die Netzwerkabhängigkeit bringt zusätzliche Latenz und neue Fehlerquellen.",
  "Gemeinsame Datenbank und gekoppelte Releases sind gerade nicht nötig.",
  "Unabhängige Skalierung ist möglich und sogar eine Stärke.",
  "Verteilte Systeme brauchen mehr Monitoring und Logging, nicht weniger.",
  "Verteilte Transaktionen und Konsistenz werden schwieriger, nicht trivial."
 ],
 explanation:"Verteilung bringt Betriebs-/Deployment-Overhead und Netzwerkabhängigkeit (Latenz, Teilausfälle). Unabhängiges Deployment und unabhängige Skalierung sind dagegen Stärken – keine gemeinsame DB oder gekoppelte Releases."},
{id:"c3q59",chapter:3,lz:"LZ 03-08",r:"R2",type:"single",
 q:"Welche Aussage zum Zusammenspiel von Microservices trifft zu?",
 options:[
  "Services sollten möglichst wenig voneinander abhängen und über technologieneutrale Schnittstellen kommunizieren.",
  "Services sollten so viel wie möglich synchron miteinander kommunizieren, um jederzeit konsistent zu sein.",
  "Jeder Service muss die interne Datenbank der anderen direkt lesen dürfen.",
  "Ein Service darf keine eigene Technologieauswahl treffen."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Geringe Kopplung und Kommunikation über technologieneutrale Schnittstellen.",
  "Viel synchroner Austausch koppelt zu stark und widerspricht dem Ansatz.",
  "Direkter Zugriff auf fremde Datenbanken verletzt die Kapselung.",
  "Services dürfen ihre Technologie durchaus selbst wählen."
 ],
 explanation:"Ziel sind geringe Kopplung und Kommunikation über technologieneutrale Schnittstellen (nur wo fachlich nötig). Viel synchroner Austausch, direkter Zugriff auf fremde Datenbanken oder erzwungene Einheitstechnologie widersprechen dem Ansatz."},
{id:"k14",chapter:3,lz:"LZ 03-08",r:"R1",type:"k",points:2,
 q:"Ordnen Sie jede Eigenschaft dem passenden Muster zu.",
 categories:["Schichtenarchitektur","Pipes & Filter"],
 rows:[
  {text:"Vertikale Anordnung; obere Ebenen nutzen Dienste der darunterliegenden.",cat:0},
  {text:"Unabhängige Verarbeitungsschritte, über Datenströme verkettet.",cat:1},
  {text:"Aufrufe erfolgen nur von oben nach unten, sonst entsteht ein Zyklus.",cat:0},
  {text:"Die Schritte kennen einander nicht und sind frei austauschbar.",cat:1},
  {text:"Gut geeignet für schrittweise Datenstrom- oder Batch-Verarbeitung.",cat:1},
  {text:"Änderungen an tiefen Ebenen können sich nach oben durchziehen.",cat:0}
 ],
 explanation:"Schichten: vertikale Hierarchie, Aufrufe nach unten, Änderungen ziehen sich durch. Pipes & Filter: entkoppelte, austauschbare Verarbeitungsschritte über Datenströme, ideal für Strom-/Batch-Verarbeitung."},
{id:"k15",chapter:3,lz:"LZ 03-10",r:"R1",type:"k",points:2,
 q:"Handelt es sich jeweils um ein Querschnittskonzept oder nicht?",
 categories:["Querschnittskonzept","Kein Querschnittskonzept"],
 rows:[
  {text:"Protokollierung (Logging) im gesamten System.",cat:0},
  {text:"Berechnung eines konkreten Rabatts im Warenkorb.",cat:1},
  {text:"Authentifizierung und Autorisierung.",cat:0},
  {text:"Persistenz bzw. einheitlicher Datenzugriff.",cat:0},
  {text:"Anzeige der Detailseite eines einzelnen Produkts.",cat:1},
  {text:"Einheitliche Fehlerbehandlung über Bausteine hinweg.",cat:0}
 ],
 explanation:"Logging, Sicherheit, Persistenz und Fehlerbehandlung wirken systemweit über viele Bausteine (Querschnittskonzepte). Rabattberechnung und Produktdetailanzeige sind konkrete Fachfunktionen."},
{id:"c3q60",chapter:3,lz:"LZ 03-05",r:"R1",type:"single",
 q:"Wozu dienen kurze Feedback-Schleifen (z. B. Prototypen, frühe Integration, Tests) beim Architekturentwurf?",
 options:[
  "Annahmen und Risiken früh zu überprüfen und Entscheidungen bei neuem Wissen anzupassen.",
  "Die Architektur nach der ersten Festlegung unverändert einzufrieren.",
  "Architekturdokumentation vollständig zu ersetzen.",
  "Die Zahl der beteiligten Stakeholder zu reduzieren."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Sie prüfen Annahmen und Risiken früh und ermöglichen Anpassungen.",
  "Feedback-Schleifen frieren die Architektur nicht ein.",
  "Sie ersetzen die Architekturdokumentation nicht.",
  "Sie dienen nicht dazu, die Zahl der Stakeholder zu reduzieren."
 ],
 explanation:"Feedback-Schleifen liefern früh Erkenntnisse über Annahmen und Risiken, sodass man gegensteuern kann. Sie frieren nichts ein, ersetzen keine Doku und reduzieren keine Stakeholder."},
{id:"c3q61",chapter:3,lz:"LZ 03-05",r:"R3",type:"single",
 q:"Was kennzeichnet eine „evolutionäre Architektur“ mit Fitnessfunktionen?",
 options:[
  "Automatisierte Kriterien prüfen laufend, ob wichtige Qualitätsmerkmale bei Änderungen erhalten bleiben.",
  "Die Architektur wird einmalig festgelegt und danach nie wieder verändert.",
  "Fitnessfunktionen messen ausschließlich die Geschwindigkeit des Teams.",
  "Evolutionäre Architektur verzichtet bewusst auf jede Qualitätssicherung."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Fitnessfunktionen prüfen laufend automatisiert, ob Qualitätsmerkmale erhalten bleiben.",
  "Evolutionäre Architektur wird weiterentwickelt, nicht einmalig eingefroren.",
  "Fitnessfunktionen messen Qualitätsmerkmale, nicht die Teamgeschwindigkeit.",
  "Sie verzichtet nicht auf Qualitätssicherung, sondern automatisiert sie."
 ],
 explanation:"Evolutionäre Architektur unterstützt geführte, inkrementelle Weiterentwicklung; Fitnessfunktionen prüfen (oft automatisiert) fortlaufend wichtige Qualitätsmerkmale. Es geht weder um Einfrieren, Teamgeschwindigkeit noch um Verzicht auf QS."},
{id:"c3q62",chapter:3,lz:"LZ 03-05",r:"R2",type:"multi",
 q:"Welche Aussagen zum Zusammenhang von Feedback und Risiko im Entwurf treffen zu?",
 options:[
  "Je später Rückmeldung kommt, desto teurer werden Korrekturen tendenziell.",
  "Riskante oder unsichere Entscheidungen sollten früh mit Feedback abgesichert werden (risikogetrieben).",
  "Feedback ist erst am Projektende sinnvoll.",
  "Risiken verschwinden von selbst, wenn man sie ignoriert.",
  "Alle Entscheidungen sind gleich riskant und in fester Reihenfolge abzuarbeiten."
 ],
 correct:[0,1],
 optExpl:[
  "Richtig, je später die Rückmeldung, desto teurer werden Korrekturen.",
  "Richtig, riskante Entscheidungen sollten früh durch Feedback abgesichert werden.",
  "Feedback erst am Projektende käme viel zu spät.",
  "Ignorierte Risiken verschwinden nicht von selbst.",
  "Risikogetrieben priorisiert nach Risiko, statt alle gleich zu behandeln."
 ],
 explanation:"Späte Rückmeldung verteuert Korrekturen, daher sichert man riskante Entscheidungen früh ab (risikogetriebenes Vorgehen). Feedback nur am Ende oder das Ignorieren von Risiken ist das Gegenteil."},
{id:"c3q63",chapter:3,lz:"LZ 03-07",r:"R1",type:"single",
 q:"Was ist beim Entwurf einer Schnittstelle das zentrale Prinzip?",
 options:[
  "Sie legt einen stabilen „Vertrag“ fest (das WAS) und verbirgt die interne Umsetzung (das WIE).",
  "Sie sollte möglichst viele interne Details offenlegen, damit Nutzer flexibel sind.",
  "Sie muss für jeden Aufrufer individuell anders gestaltet sein.",
  "Sie sollte sich mit jeder internen Änderung ebenfalls ändern."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Sie ist ein stabiler Vertrag (das WAS) und verbirgt das WIE.",
  "Interne Details offenzulegen widerspricht dem Information Hiding.",
  "Eine Schnittstelle muss nicht pro Aufrufer individuell gestaltet sein.",
  "Sie sollte stabil bleiben, nicht bei jeder internen Änderung mitwandern."
 ],
 explanation:"Eine gute Schnittstelle ist ein stabiler Vertrag und verbirgt die Interna (Information Hiding). Interna offenlegen, pro Aufrufer variieren oder bei jeder internen Änderung mitändern widerspricht dem Zweck."},
{id:"c3q64",chapter:3,lz:"LZ 03-07",r:"R2",type:"single",
 q:"Welcher Trade-off besteht bei der Granularität von Schnittstellen?",
 options:[
  "Feingranulare Schnittstellen sind flexibel, erzeugen aber viele (bei Remote teure) Aufrufe; grobgranulare bündeln, sind aber weniger flexibel.",
  "Feingranulare Schnittstellen sind in jeder Hinsicht überlegen.",
  "Die Granularität hat keinen Einfluss auf Performance oder Kopplung.",
  "Grobgranulare Schnittstellen erzeugen bei Remote-Aufrufen immer mehr Netzlast."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Feingranular ist flexibel, aber ruf-intensiv; grobgranular bündelt, ist aber unflexibler.",
  "Feingranulare Schnittstellen sind nicht in jeder Hinsicht überlegen.",
  "Granularität beeinflusst Performance und Kopplung sehr wohl.",
  "Grobgranular reduziert Remote-Aufrufe eher, statt sie zu erhöhen."
 ],
 explanation:"Feingranular = flexibel, aber viele (bei Remote teure) Aufrufe; grobgranular = weniger „Chattiness“, aber unflexibler. Granularität wirkt sehr wohl auf Performance/Kopplung; grobgranular reduziert Remote-Aufrufe eher."},
{id:"c3q65",chapter:3,lz:"LZ 03-07",r:"R2",type:"multi",
 q:"Welche Aussagen zum Entwurf robuster, langlebiger Schnittstellen treffen zu?",
 options:[
  "Änderungen sollten möglichst rückwärtskompatibel sein; sonst braucht es eine Versionierung.",
  "Beim Senden strikt und beim Empfangen tolerant zu sein, erhöht die Robustheit (Robustheitsprinzip).",
  "Öffentliche Schnittstellen dürfen jederzeit ohne Rücksicht auf Konsumenten geändert werden.",
  "Versionierung ist bei Schnittstellen grundsätzlich überflüssig.",
  "Je mehr Operationen und Parameter eine Schnittstelle anbietet, desto stabiler ist sie."
 ],
 correct:[0,1],
 optExpl:[
  "Richtig, Änderungen sollten rückwärtskompatibel sein, sonst braucht es eine Versionierung.",
  "Richtig, streng senden und tolerant empfangen erhöht die Robustheit.",
  "Öffentliche Schnittstellen ohne Rücksicht zu brechen ist riskant.",
  "Versionierung ist bei Schnittstellen keineswegs überflüssig.",
  "Eine große Schnittstellenfläche erschwert Stabilität, statt sie zu erhöhen."
 ],
 explanation:"Rückwärtskompatibilität bzw. Versionierung schützt Konsumenten; „streng senden, tolerant empfangen“ (Robustheitsprinzip nach Postel) erhöht die Robustheit. Öffentliche Schnittstellen einfach zu brechen oder Versionierung zu verwerfen ist riskant."},
{id:"c3q66",chapter:3,lz:"LZ 03-01",r:"R1",type:"single",
 q:"Wie erfüllt eine Architektur gezielt eine Qualitätsanforderung wie „hohe Verfügbarkeit“?",
 options:[
  "Durch bewusste Entwurfsentscheidungen bzw. Taktiken (z. B. Redundanz, Ausfallübernahme), die auf das Qualitätsziel einzahlen.",
  "Allein dadurch, dass die Anforderung im Dokument steht.",
  "Ausschließlich durch die Wahl einer schnelleren Programmiersprache.",
  "Indem man die Anforderung dem Testteam überlässt."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Gezielte Taktiken wie Redundanz und Failover erfüllen das Qualitätsziel.",
  "Eine bloß notierte Anforderung erfüllt sich nicht von allein.",
  "Eine schnellere Programmiersprache allein sichert keine hohe Verfügbarkeit.",
  "Verfügbarkeit lässt sich nicht ans Testteam delegieren."
 ],
 explanation:"Qualitätsziele werden durch gezielte Entwurfsentscheidungen/Taktiken erreicht (z. B. Redundanz und Failover für Verfügbarkeit). Das bloße Notieren, eine Sprachwahl allein oder das Delegieren ans Testteam erfüllt sie nicht."},
/* ===== Kapitel 4 ===== */
{id:"c4q1",chapter:4,lz:"LZ 04-01",r:"R1",type:"multi",
 q:"Welche sind zentrale Zwecke von Architekturdokumentation?",
 options:[
  "Kommunikation und gemeinsames Verständnis unter den Stakeholdern.",
  "Grundlage für Einarbeitung, Wartung und fundierte Entscheidungen.",
  "Nachvollziehbarkeit wichtiger Architekturentscheidungen – auch später noch.",
  "Sie ersetzt den Quellcode als maßgebliche Quelle des tatsächlichen Systemverhaltens.",
  "Sie macht die laufende Abstimmung im Team überflüssig, da alles Wichtige schriftlich vorliegt."
 ],
 correct:[0,1,2],
 optExpl:[
  "Kommunikation und gemeinsames Verständnis sind ein Kernzweck der Doku.",
  "Doku unterstützt Einarbeitung, Wartung und fundierte Entscheidungen.",
  "Doku macht wichtige Entscheidungen auch später noch nachvollziehbar.",
  "Das tatsächliche Verhalten steckt im Code – Doku ersetzt ihn nicht.",
  "Doku unterstützt die Abstimmung, macht sie aber nicht überflüssig."
 ],
 explanation:"Doku dient Kommunikation, Einarbeitung/Wartung und Nachvollziehbarkeit von Entscheidungen. Sie ersetzt aber nicht den Code – das tatsächliche Verhalten steckt im Code."},
{id:"c4q2",chapter:4,lz:"LZ 04-02",r:"R2",type:"single",
 q:"Was ist arc42?",
 options:[
  "Ein bewährtes Template bzw. Gliederungsschema zur Dokumentation von Softwarearchitekturen.",
  "Ein Vorgehensmodell, das die Reihenfolge der Architekturentscheidungen verbindlich vorschreibt.",
  "Ein konkretes Architekturmuster für verteilte Systeme.",
  "Ein Werkzeug, das Architekturdiagramme automatisch aus dem Code erzeugt."
 ],
 correct:[0],
 optExpl:[
  "Richtig: arc42 ist eine gliedernde Vorlage mit zwölf Abschnitten.",
  "arc42 schreibt keine verbindliche Reihenfolge der Entscheidungen vor.",
  "arc42 ist eine Doku-Vorlage, kein Architekturmuster.",
  "arc42 generiert keine Diagramme automatisch aus dem Code."
 ],
 explanation:"arc42 ist eine gliedernde Vorlage (12 Abschnitte) für Architekturdokumentation – kein verbindliches Vorgehensmodell, kein Architekturmuster und kein Code-Generator."},
{id:"c4q3",chapter:4,lz:"LZ 04-05",r:"R1",type:"multi",
 q:"Welche Aussagen zur Kontextabgrenzung (Kontextsicht) treffen zu?",
 options:[
  "Sie zeigt das System als Ganzes mit seinen externen Nachbarn (Nutzer, Fremdsysteme).",
  "Sie stellt die Schnittstellen des Systems zu seiner Umgebung dar.",
  "Sie zeigt die interne Zerlegung des Systems in seine Bausteine.",
  "Sie bildet die zeitliche Abfolge der internen Methodenaufrufe ab.",
  "Sie beschreibt querschnittliche Konzepte wie Sicherheit, Logging und Fehlerbehandlung."
 ],
 correct:[0,1],
 optExpl:[
  "Die Kontextsicht zeigt das System mit seinen externen Nachbarn.",
  "Sie stellt die Schnittstellen des Systems zur Umgebung dar.",
  "Die interne Zerlegung ist die Bausteinsicht, nicht die Kontextsicht.",
  "Zeitliche Abläufe zeigt die Laufzeitsicht, nicht die Kontextsicht.",
  "Querschnittliche Konzepte bilden einen eigenen Teil, nicht die Kontextsicht."
 ],
 explanation:"Die Kontextsicht grenzt das System von seiner Umgebung ab (externe Nachbarn und Schnittstellen). Die interne Zerlegung ist die Bausteinsicht, zeitliche Abläufe die Laufzeitsicht."},
{id:"c4q4",chapter:4,lz:"LZ 04-05",r:"R1",type:"multi",
 q:"Welche Aussagen zur Bausteinsicht treffen zu?",
 options:[
  "Sie zeigt die statische Zerlegung des Systems in Bausteine.",
  "Sie kann Bausteine hierarchisch verfeinern (Whitebox der enthaltenen Bausteine).",
  "Sie zeigt das dynamische Zusammenspiel der Bausteine zur Laufzeit.",
  "Sie ordnet die Bausteine den Ausführungsknoten (Hardware) zu.",
  "Sie beschreibt das System mit seinen externen Nachbarn und Schnittstellen."
 ],
 correct:[0,1],
 optExpl:[
  "Die Bausteinsicht zeigt die statische Zerlegung in Bausteine.",
  "Sie verfeinert Bausteine hierarchisch als Whitebox der Teile.",
  "Dynamisches Zusammenspiel zur Laufzeit zeigt die Laufzeitsicht.",
  "Die Zuordnung zu Hardware ist die Verteilungssicht.",
  "Externe Nachbarn und Schnittstellen zeigt die Kontextsicht."
 ],
 explanation:"Die Bausteinsicht zeigt die statische Struktur und verfeinert Bausteine hierarchisch. Dynamisches Zusammenspiel = Laufzeitsicht; Zuordnung zu Hardware = Verteilungssicht."},
{id:"c4q5",chapter:4,lz:"LZ 04-05",r:"R2",type:"single",
 q:"Was beschreibt die Laufzeitsicht?",
 options:[
  "Das dynamische Zusammenspiel von Bausteinen zur Laufzeit (Abläufe, Szenarien).",
  "Die statische Ordnerstruktur des Quellcode-Repositories.",
  "Die hierarchische Zerlegung des Systems in Bausteine.",
  "Die Zuordnung von Software zu Servern und Umgebungen."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Die Laufzeitsicht zeigt dynamische Abläufe und Szenarien.",
  "Die Ordnerstruktur des Repositories ist nicht die Laufzeitsicht.",
  "Die hierarchische Zerlegung in Bausteine ist die Bausteinsicht.",
  "Die Zuordnung von Software zu Servern ist die Verteilungssicht."
 ],
 explanation:"Die Laufzeitsicht zeigt dynamisches Verhalten (z. B. Szenarien, Sequenzen). Statische Struktur = Bausteinsicht; Zuordnung zu Servern = Verteilungssicht."},
{id:"c4q6",chapter:4,lz:"LZ 04-05",r:"R2",type:"single",
 q:"Was zeigt die Verteilungssicht (Deployment)?",
 options:[
  "Die Abbildung der Software auf Infrastruktur/Knoten und deren Kommunikationswege.",
  "Die interne fachliche Zerlegung des Systems in Module.",
  "Die Reihenfolge der Nachrichten in einem Anwendungsfall.",
  "Die Vererbungsbeziehungen zwischen Klassen."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Sie bildet Software auf Knoten und Kommunikationswege ab.",
  "Die fachliche Zerlegung in Module ist die Bausteinsicht.",
  "Die Nachrichtenreihenfolge im Anwendungsfall zeigt die Laufzeitsicht.",
  "Vererbungsbeziehungen zwischen Klassen zeigt das Klassendiagramm."
 ],
 explanation:"Die Verteilungssicht zeigt, auf welche Knoten/Umgebungen die Software verteilt ist und wie diese kommunizieren. Die anderen beschreiben Baustein-, Laufzeit- bzw. Klassenaspekte."},
{id:"c4q7",chapter:4,lz:"LZ 04-09",r:"R3",type:"single",
 q:"Was regelt der Standard ISO/IEC/IEEE 42010?",
 options:[
  "Konzepte für die Architekturbeschreibung (Stakeholder, Belange, Sichten/Viewpoints).",
  "Die konkrete Gliederung einer Architekturdoku in 12 Abschnitten.",
  "Ein Reifegradmodell zur Bewertung von Entwicklungsprozessen.",
  "Die Notation der einzelnen UML-Diagrammtypen."
 ],
 correct:[0],
 optExpl:[
  "Richtig: 42010 definiert Stakeholder, Belange und Sichten.",
  "Die Gliederung in zwölf Abschnitten ist arc42, nicht 42010.",
  "42010 ist kein Reifegradmodell zur Prozessbewertung.",
  "Die Notation der UML-Diagrammtypen regelt 42010 nicht."
 ],
 explanation:"ISO/IEC/IEEE 42010 beschreibt Rahmen und Begriffe für Architekturbeschreibungen (Stakeholder, Belange, Sichten). Die 12-Abschnitt-Gliederung ist arc42; Reifegrade und UML-Notation regelt es nicht. (R3.)"},
{id:"c4q8",chapter:4,lz:"LZ 04-03",r:"R2",type:"single",
 q:"Wofür wird ein UML-Sequenzdiagramm typischerweise verwendet?",
 options:[
  "Für zeitliche Abläufe und den Nachrichtenaustausch zwischen Objekten/Bausteinen.",
  "Für die statischen Beziehungen zwischen Klassen (Assoziation, Vererbung).",
  "Für die Verteilung von Artefakten auf Ausführungsknoten.",
  "Für die Zerlegung des Systems in fachliche Bausteine."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Sequenzdiagramme zeigen den zeitlichen Nachrichtenaustausch zwischen Objekten.",
  "Statische Klassenbeziehungen zeigt das Klassendiagramm.",
  "Die Verteilung auf Ausführungsknoten zeigt das Verteilungsdiagramm.",
  "Die Zerlegung in fachliche Bausteine zeigt die Bausteinsicht."
 ],
 explanation:"Sequenzdiagramme zeigen den zeitlichen Nachrichtenaustausch (Laufzeitsicht). Statische Klassenbeziehungen, Verteilung oder Bausteinzerlegung sind andere Diagramme bzw. Sichten."},
{id:"c4q9",chapter:4,lz:"LZ 04-08",r:"R2",type:"single",
 q:"Wozu dient ein Architecture Decision Record (ADR)?",
 options:[
  "Eine getroffene Architekturentscheidung samt Kontext, betrachteten Alternativen und Konsequenzen festzuhalten.",
  "Alle offenen Aufgaben und ihren Bearbeitungsstand zu verfolgen.",
  "Aufgetretene Laufzeitfehler zentral zu protokollieren.",
  "Die Anforderungen des Auftraggebers vollständig zu erfassen."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Ein ADR hält Entscheidung, Kontext, Alternativen und Konsequenzen fest.",
  "Offene Aufgaben verfolgt ein Backlog, nicht ein ADR.",
  "Laufzeitfehler protokolliert das Logging, nicht ein ADR.",
  "Anforderungserfassung ist keine Aufgabe eines ADR."
 ],
 explanation:"Ein ADR dokumentiert eine Entscheidung mit Kontext, Alternativen und Konsequenzen. Aufgabenverfolgung, Fehlerprotokolle oder Anforderungserfassung sind etwas anderes."},
{id:"c4q10",chapter:4,lz:"LZ 04-01",r:"R1",type:"single",
 q:"Was bedeutet 'zielgruppengerechte' Dokumentation?",
 options:[
  "Inhalt, Detailgrad und Notation werden am Informationsbedarf der jeweiligen Stakeholder ausgerichtet.",
  "Für alle Leser wird ein einziges Dokument mit maximalem Detailgrad erstellt.",
  "Die Dokumentation wird bewusst ausschließlich für Entwickler geschrieben.",
  "Alle Sichten werden für jede Zielgruppe vollständig wiederholt."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Inhalt, Detailgrad und Notation richten sich nach dem Leserbedarf.",
  "Ein Maximal-Dokument für alle ist gerade nicht zielgruppengerecht.",
  "Doku richtet sich an viele Rollen, nicht nur an Entwickler.",
  "Alle Sichten für jede Zielgruppe zu wiederholen ist unnötig."
 ],
 explanation:"Zielgruppengerecht heißt: Inhalt, Detailgrad und Notation am Bedarf der jeweiligen Leser ausrichten – nicht ein Maximal-Dokument für alle, nicht nur für Entwickler und keine Wiederholung aller Sichten."},
{id:"k4",chapter:4,lz:"LZ 04-03",r:"R1",type:"k",points:2,
 q:"Ordnen Sie jede Sicht/Notation zu: statisch (Struktur) oder dynamisch (Verhalten)?",
 categories:["Statisch (Struktur)","Dynamisch (Verhalten)"],
 rows:[
  {text:"Bausteinsicht",cat:0},
  {text:"Laufzeitsicht",cat:1},
  {text:"Klassendiagramm",cat:0},
  {text:"Sequenzdiagramm",cat:1}
 ],
 explanation:"Baustein- und Klassensicht zeigen die statische Struktur. Laufzeitsicht und Sequenzdiagramm zeigen dynamisches Verhalten (Abläufe zur Laufzeit)."},
{id:"c4q11",chapter:4,lz:"LZ 04-05",r:"R1",type:"single",
 q:"Was unterscheidet fachlichen und technischen Kontext in der Kontextabgrenzung?",
 options:[
  "Der fachliche Kontext zeigt Nachbarn/Schnittstellen fachlich, der technische die konkreten Kanäle und Protokolle.",
  "Der fachliche Kontext beschreibt die interne Fachlogik, der technische den internen Code.",
  "Beide zeigen dasselbe; der Unterschied liegt nur im Diagrammtyp.",
  "Der technische Kontext listet die Qualitätsanforderungen auf."
 ],
 correct:[0],
 optExpl:[
  "Richtig: fachlich meint Partner und Daten, technisch Kanäle und Protokolle.",
  "Beide betreffen die Systemgrenze, nicht die internen Details.",
  "Sie zeigen unterschiedliche Aspekte, nicht nur einen anderen Diagrammtyp.",
  "Qualitätsanforderungen sind nicht Teil des technischen Kontexts."
 ],
 explanation:"Die Kontextsicht kann fachlich (welche Partner/Daten) und technisch (über welche Kanäle/Protokolle) dargestellt werden – beide betreffen die Systemgrenze, nicht die Interna oder die Qualitätsanforderungen."},
{id:"c4q12",chapter:4,lz:"LZ 04-03",r:"R2",type:"single",
 q:"Was stellt ein UML-Komponentendiagramm primär dar?",
 options:[
  "Komponenten/Bausteine und ihre angebotenen bzw. benötigten Schnittstellen.",
  "Den zeitlichen Ablauf von Methodenaufrufen zwischen Objekten.",
  "Die Zuordnung von Komponenten zu physischen Servern.",
  "Die einzelnen Attribute und Methoden jeder Klasse im Detail."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Komponentendiagramme zeigen Bausteine und ihre Schnittstellen.",
  "Den zeitlichen Ablauf von Aufrufen zeigt das Sequenzdiagramm.",
  "Die Server-Zuordnung zeigt das Verteilungsdiagramm.",
  "Attribute und Methoden im Detail zeigt das Klassendiagramm."
 ],
 explanation:"Komponentendiagramme zeigen Bausteine und ihre Schnittstellen (Bausteinsicht). Zeitlicher Ablauf = Sequenzdiagramm; Server-Zuordnung = Verteilungsdiagramm; Attribute/Methoden = Klassendiagramm."},
{id:"c4q13",chapter:4,lz:"LZ 04-05",r:"R1",type:"multi",
 q:"Warum werden Architekturen mit mehreren Sichten beschrieben?",
 options:[
  "Weil verschiedene Sichten unterschiedliche Fragen und Stakeholder adressieren.",
  "Weil keine einzelne Sicht alle relevanten Aspekte zeigen kann.",
  "Weil jede Sicht dieselbe Information nur in anderer Farbe wiederholt.",
  "Weil eine Mindestanzahl an Diagrammen gesetzlich vorgeschrieben ist.",
  "Weil die Anzahl der Sichten den Reifegrad der Architektur unmittelbar belegt."
 ],
 correct:[0,1],
 optExpl:[
  "Verschiedene Sichten adressieren unterschiedliche Fragen und Stakeholder.",
  "Keine einzelne Sicht kann alle relevanten Aspekte zeigen.",
  "Die Sichten wiederholen nicht dieselbe Information in anderer Farbe.",
  "Eine gesetzliche Mindestzahl an Diagrammen gibt es nicht.",
  "Die Zahl der Sichten belegt keinen Reifegrad der Architektur."
 ],
 explanation:"Mehrere Sichten adressieren verschiedene Fragen und Adressaten, weil keine einzelne alles zeigt. Sie wiederholen nicht dieselbe Information, und eine gesetzliche Mindestzahl gibt es nicht."},
{id:"c4q14",chapter:4,lz:"LZ 04-01",r:"R1",type:"multi",
 q:"Welche Eigenschaften machen Architekturdokumentation besonders nützlich?",
 options:[
  "Sie ist aktuell und wird bei relevanten Änderungen mitgepflegt.",
  "Sie ist auf die jeweilige Zielgruppe zugeschnitten.",
  "Sie ist so knapp wie möglich und so ausführlich wie nötig.",
  "Sie ist so umfangreich wie möglich – Aktualität ist dabei zweitrangig.",
  "Sie ist für alle Leser identisch gehalten, damit niemand einen anderen Stand hat.",
  "Sie nutzt möglichst viele Fachbegriffe, um höchste Präzision sicherzustellen."
 ],
 correct:[0,1,2],
 optExpl:[
  "Aktuelle, mitgepflegte Doku bleibt verlässlich und nützlich.",
  "Auf die Zielgruppe zugeschnittene Doku trifft den Informationsbedarf.",
  "Angemessen knappe Doku ist gut lesbar und pflegbar.",
  "Maximaler Umfang auf Kosten der Aktualität ist gerade schädlich.",
  "Einheitliche Doku für alle widerspricht dem Zuschnitt auf Zielgruppen.",
  "Zu viel Fachjargon schadet der Verständlichkeit, statt zu nutzen."
 ],
 explanation:"Nützliche Doku ist aktuell, zielgruppengerecht und angemessen knapp. Maximale Vollständigkeit auf Kosten der Aktualität ist gerade nicht das Ziel."},
{id:"c4q15",chapter:4,lz:"LZ 04-03",r:"R2",type:"single",
 q:"Welchen Vorteil bietet eine standardisierte Notation (z. B. UML) gegenüber beliebigen 'Kästchen und Pfeilen'?",
 options:[
  "Eine eindeutigere, für andere nachvollziehbare Bedeutung der Diagrammelemente.",
  "Sie garantiert automatisch, dass die dargestellte Architektur korrekt ist.",
  "Sie macht erklärende Legenden und Dokumentation vollständig überflüssig.",
  "Sie verbietet jede informelle Skizze im Entwurfsprozess."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Standardnotation gibt Elementen eine vereinbarte, klare Bedeutung.",
  "Eine Notation garantiert keine korrekte Architektur.",
  "Erklärende Legenden und Doku werden dadurch nicht überflüssig.",
  "Informelle Skizzen bleiben im Entwurf weiterhin erlaubt."
 ],
 explanation:"Standardnotationen geben Elementen eine vereinbarte Bedeutung (bessere Verständlichkeit). Sie garantieren keine Korrektheit, ersetzen nicht jede Erklärung und verbieten informelle Skizzen nicht."},
{id:"c4q16",chapter:4,lz:"LZ 04-05",r:"R1",type:"single",
 q:"Du möchtest zeigen, wie ein Bestellvorgang zur Laufzeit zwischen mehreren Bausteinen abläuft. Welche Sicht passt am besten?",
 options:[
  "Die Laufzeitsicht (z. B. als Sequenzdiagramm).",
  "Die Bausteinsicht, da alle beteiligten Bausteine aufgelistet werden.",
  "Die Verteilungssicht, da mehrere Bausteine beteiligt sind.",
  "Die Kontextsicht, da ein fachlicher Vorgang gezeigt wird."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Zeitliche Abläufe zwischen Bausteinen zeigt die Laufzeitsicht.",
  "Die Bausteinsicht listet Bausteine, zeigt aber keinen Ablauf.",
  "Die Verteilungssicht betrifft Server, nicht den zeitlichen Ablauf.",
  "Die Kontextsicht zeigt die Systemgrenze, nicht interne Abläufe."
 ],
 explanation:"Ein zeitlicher Ablauf zwischen Bausteinen gehört in die Laufzeitsicht (z. B. Sequenzdiagramm). Baustein-, Verteilungs- und Kontextsicht beantworten andere Fragen."},
{id:"c4q17",chapter:4,lz:"LZ 04-02",r:"R1",type:"multi",
 q:"Welche Inhalte gehören typischerweise in eine Architekturdokumentation (z. B. nach arc42)?",
 options:[
  "Die Kontextabgrenzung des Systems.",
  "Die Qualitätsanforderungen bzw. Qualitätsszenarien.",
  "Die vollständige, zeilenweise Erläuterung des gesamten Quellcodes.",
  "Das Sitzungsprotokoll jedes einzelnen Daily Standups.",
  "Die tagesaktuellen Last- und Monitoring-Kennzahlen aus dem laufenden Produktivbetrieb."
 ],
 correct:[0,1],
 optExpl:[
  "Die Kontextabgrenzung ist ein fester Bestandteil von arc42.",
  "Qualitätsanforderungen gehören ausdrücklich in die Architekturdoku.",
  "Eine zeilenweise Code-Erläuterung gehört nicht in die Doku.",
  "Standup-Protokolle sind kein Teil der Architekturdoku.",
  "Laufende Betriebskennzahlen gehören ins Monitoring, nicht in die Architekturdoku."
 ],
 explanation:"Kontextabgrenzung und Qualitätsanforderungen gehören in die Architekturdoku (arc42). Eine zeilenweise Code-Erläuterung oder Standup-Protokolle gehören nicht dazu."},
{id:"k7",chapter:4,lz:"LZ 04-05",r:"R1",type:"k",points:2,
 q:"Ordnen Sie jede Frage der passenden Sicht zu.",
 categories:["Bausteinsicht","Verteilungssicht"],
 rows:[
  {text:"In welche Module/Komponenten ist das System zerlegt?",cat:0},
  {text:"Auf welche Server/Knoten ist die Software verteilt?",cat:1},
  {text:"Wie ist ein Subsystem intern aufgebaut?",cat:0},
  {text:"Über welche Netzwerkwege kommunizieren die Rechner?",cat:1}
 ],
 explanation:"Zerlegung in Bausteine und deren interne Struktur = Bausteinsicht. Zuordnung zu Hardware/Knoten und Kommunikationswege = Verteilungssicht."},
{id:"c4q18",chapter:4,lz:"LZ 04-03",r:"R2",type:"multi",
 q:"Welche Aussagen zum UML-Klassendiagramm treffen zu?",
 options:[
  "Es zeigt Typen/Klassen und ihre Beziehungen (z. B. Assoziation, Vererbung).",
  "Es gehört zur statischen Struktursicht.",
  "Es stellt primär den zeitlichen Ablauf von Nachrichten zwischen Objekten dar.",
  "Es bildet die Verteilung von Artefakten auf Ausführungsknoten ab.",
  "Es stellt primär die Zustandsübergänge eines Objekts über seine Lebensdauer dar."
 ],
 correct:[0,1],
 optExpl:[
  "Klassendiagramme zeigen Typen und ihre Beziehungen.",
  "Sie gehören zur statischen Struktursicht.",
  "Zeitlichen Nachrichtenablauf zeigt das Sequenzdiagramm.",
  "Die Verteilung von Artefakten auf Knoten zeigt das Verteilungsdiagramm.",
  "Zustandsübergänge über die Lebensdauer zeigt das Zustandsdiagramm."
 ],
 explanation:"Klassendiagramme zeigen statische Struktur (Typen + Beziehungen). Zeitlicher Nachrichtenablauf = Sequenzdiagramm; Verteilung auf Knoten = Verteilungsdiagramm."},
{id:"c4q19",chapter:4,lz:"LZ 04-08",r:"R1",type:"multi",
 q:"Welche Entscheidungen gehören typischerweise in ein Architecture Decision Record (ADR)?",
 options:[
  "Die Wahl eines Architekturmusters mit weitreichenden Folgen.",
  "Eine schwer umkehrbare technologische Grundsatzentscheidung.",
  "Die Umbenennung einer internen Methode zur besseren Lesbarkeit.",
  "Die konkrete Code-Formatierung (Einrückung, Zeilenlänge).",
  "Die Festlegung der Reihenfolge von Import-Anweisungen in einer Quelldatei."
 ],
 correct:[0,1],
 optExpl:[
  "Die Wahl eines Musters mit weitreichenden Folgen ist ADR-würdig.",
  "Schwer umkehrbare Grundsatzentscheidungen gehören ins ADR.",
  "Eine triviale Methodenumbenennung ist keine ADR-Entscheidung.",
  "Reine Code-Formatierung ist zu trivial für ein ADR.",
  "Die Reihenfolge von Imports ist zu trivial für ein ADR."
 ],
 explanation:"ADRs halten weitreichende, folgenreiche und schwer umkehrbare Entscheidungen fest. Triviale Umbenennungen oder Formatierungsfragen gehören nicht dazu."},
{id:"c4q20",chapter:4,lz:"LZ 04-03",r:"R2",type:"single",
 q:"Was zeigt ein UML-Verteilungsdiagramm (Deployment Diagram)?",
 options:[
  "Knoten (Hardware bzw. Ausführungsumgebungen) und die darauf ausgeführten Artefakte.",
  "Die zeitliche Abfolge von Methodenaufrufen zwischen Objekten.",
  "Die statische Zerlegung des Systems in fachliche Bausteine.",
  "Die Vererbungs- und Assoziationsbeziehungen der Klassen."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Es zeigt Knoten und die darauf ausgeführten Artefakte.",
  "Die zeitliche Abfolge von Aufrufen zeigt das Sequenzdiagramm.",
  "Die statische Zerlegung in Bausteine zeigt die Bausteinsicht.",
  "Vererbungs- und Assoziationsbeziehungen zeigt das Klassendiagramm."
 ],
 explanation:"Verteilungsdiagramme zeigen Knoten und die darauf platzierten Artefakte (Verteilungssicht). Zeitliche Abläufe, Bausteinzerlegung oder Klassenbeziehungen sind andere Diagramme."},
{id:"c4q21",chapter:4,lz:"LZ 04-01",r:"R1",type:"single",
 q:"Wie hält man Architekturdokumentation am ehesten aktuell?",
 options:[
  "Sie knapp halten, nah am Code bzw. versioniert pflegen und bei relevanten Änderungen mitziehen.",
  "Sie einmal sehr ausführlich schreiben, damit spätere Änderungen unnötig werden.",
  "Sie getrennt vom Projekt in einem separaten Archiv ablegen.",
  "Ausschließlich automatisch generierte Diagramme verwenden und nichts erklären."
 ],
 correct:[0],
 optExpl:[
  "Richtig: schlank, versioniert und Teil der Änderungsroutine bleibt aktuell.",
  "Ein einmaliges Groß-Dokument veraltet trotzdem schnell.",
  "Ein separates Archiv erschwert die Pflege, statt sie zu sichern.",
  "Rein generierte Diagramme ohne Erklärung reichen nicht aus."
 ],
 explanation:"Aktuell bleibt Doku, wenn sie schlank, nah am Prozess (versioniert) und Teil der Änderungsroutine ist. Ein einmaliges Groß-Dokument, ein separates Archiv oder rein generierte Diagramme ohne Erklärung helfen nicht."},
{id:"c4q22",chapter:4,lz:"LZ 04-01",r:"R2",type:"single",
 q:"Wozu dient ein Glossar bzw. eine einheitliche Begriffswelt in der Dokumentation?",
 options:[
  "Zu einem gemeinsamen, eindeutigen Verständnis der Fachbegriffe – weniger Missverständnisse.",
  "Zu einer vollständigen Liste aller Klassennamen im Quellcode.",
  "Zur Übersetzung der Benutzeroberfläche in mehrere Sprachen.",
  "Zu einem Verzeichnis aller offenen Fehler im System."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Ein Glossar schafft eine gemeinsame, eindeutige Fachsprache.",
  "Ein Glossar ist keine Liste aller Klassennamen im Code.",
  "Die Oberflächen-Übersetzung ist nicht Aufgabe eines Glossars.",
  "Ein Verzeichnis offener Fehler ist etwas anderes als ein Glossar."
 ],
 explanation:"Ein Glossar sorgt für eine gemeinsame, eindeutige Fachsprache. Es ist keine Klassenliste, keine Oberflächen-Übersetzung und kein Fehlerverzeichnis."},
{id:"c4q23",chapter:4,lz:"LZ 04-01",r:"R1",type:"multi",
 q:"Was macht einen Architekturüberblick für neue Teammitglieder wertvoll?",
 options:[
  "Das große Ganze (Kontext und Ziele).",
  "Die wichtigsten Bausteine und ihre Aufgaben.",
  "Zentrale Architekturentscheidungen und ihre Gründe.",
  "Eine zeilenweise Erläuterung jeder einzelnen Methode.",
  "Die lückenlose Auflistung aller je behobenen Fehler und Tickets.",
  "Die vollständigen Konfigurationswerte sämtlicher Umgebungen im Detail."
 ],
 correct:[0,1,2],
 optExpl:[
  "Kontext und Ziele geben Neulingen das große Ganze.",
  "Die wichtigsten Bausteine und ihre Aufgaben schaffen Orientierung.",
  "Zentrale Entscheidungen und ihre Gründe erklären das Warum.",
  "Eine zeilenweise Erläuterung jeder Methode ist zu detailliert.",
  "Eine vollständige Fehlerhistorie überfrachtet den Überblick, statt zu orientieren.",
  "Detaillierte Konfigurationswerte sind für einen Überblick zu kleinteilig."
 ],
 explanation:"Ein guter Überblick vermittelt Kontext/Ziele, die Hauptbausteine und die Kernentscheidungen. Eine zeilenweise Methoden-Erläuterung ist für einen Überblick zu detailliert."},
{id:"c4q24",chapter:4,lz:"LZ 04-05",r:"R2",type:"single",
 q:"Warum sollten verschiedene Architektursichten zueinander konsistent sein?",
 options:[
  "Weil sie dasselbe System aus verschiedenen Blickwinkeln zeigen – Widersprüche würden in die Irre führen.",
  "Weil jede Sicht exakt dieselben Elemente in identischer Detailtiefe enthalten muss.",
  "Weil die Diagramme sonst nicht kompilieren.",
  "Weil eine einzige Sicht ohnehin ausreichen würde."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Alle Sichten zeigen dasselbe System, Widersprüche führen in die Irre.",
  "Konsistenz heißt nicht identischer Inhalt und Detailgrad.",
  "Diagramme werden nicht kompiliert; das ist kein Grund.",
  "Eine einzige Sicht allein genügt gerade nicht."
 ],
 explanation:"Alle Sichten beschreiben dasselbe System; dieselben Bausteine müssen widerspruchsfrei auftauchen. Konsistenz heißt nicht identischer Inhalt/Detailgrad, hat nichts mit Kompilieren zu tun, und eine Sicht allein genügt nicht."},
{id:"k11",chapter:4,lz:"LZ 04-01",r:"R2",type:"k",points:2,
 q:"Gehört der Inhalt in eine Architekturdokumentation?",
 categories:["Sinnvoller Doku-Inhalt","Gehört nicht hinein"],
 rows:[
  {text:"Kontextabgrenzung des Systems",cat:0},
  {text:"Zentrale Architekturentscheidungen (ADRs)",cat:0},
  {text:"Qualitätsanforderungen und Szenarien",cat:0},
  {text:"Der vollständige Quellcode Zeile für Zeile",cat:1}
 ],
 explanation:"Kontext, Entscheidungen und Qualitätsszenarien gehören in die Architekturdoku. Personenbezogene Organisationsdaten wie Urlaubsplanung nicht."},
{id:"c4q25",chapter:4,lz:"LZ 04-05",r:"R2",type:"single",
 q:"Was zeigt eine Whitebox-Beschreibung eines Bausteins in der Bausteinsicht?",
 options:[
  "Die innere Zerlegung des Bausteins in seine enthaltenen (Unter-)Bausteine.",
  "Nur die nach außen sichtbare Schnittstelle des Bausteins (Blackbox).",
  "Die zeitliche Reihenfolge seiner Aufrufe zur Laufzeit.",
  "Die Serverumgebung, in der der Baustein betrieben wird."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Eine Whitebox öffnet den Baustein und zeigt die inneren Teile.",
  "Nur die sichtbare Schnittstelle zu zeigen wäre die Blackbox.",
  "Die zeitliche Reihenfolge der Aufrufe gehört in die Laufzeitsicht.",
  "Die Serverumgebung gehört in die Verteilungssicht."
 ],
 explanation:"Eine Whitebox öffnet den Baustein und zeigt seine inneren Bausteine. Nur die Schnittstelle wäre die Blackbox; Ablauf bzw. Umgebung sind Laufzeit- bzw. Verteilungssicht."},
{id:"c4q26",chapter:4,lz:"LZ 04-06",r:"R2",type:"multi",
 q:"Was sollte eine Schnittstellenbeschreibung typischerweise festlegen?",
 options:[
  "Die angebotenen Operationen und ihre Parameter bzw. Datenformate.",
  "Das Verhalten im Fehlerfall (Fehler- bzw. Ausnahmefälle).",
  "Die interne Implementierung, mit der die Operationen umgesetzt sind.",
  "Die konkrete Serverhardware, auf der der Anbieter betrieben wird.",
  "Die personelle Zuständigkeit und den Bereitschaftsdienst des Betreiberteams."
 ],
 correct:[0,1],
 optExpl:[
  "Angebotene Operationen mit Parametern und Datenformaten gehören in den Vertrag.",
  "Das Verhalten im Fehler- bzw. Ausnahmefall muss festgelegt werden.",
  "Die interne Implementierung wird gerade bewusst verborgen.",
  "Die Serverhardware gehört zur Verteilung, nicht zur Schnittstelle.",
  "Personelle Zuständigkeiten gehören zum Betrieb, nicht zur Schnittstelle."
 ],
 explanation:"Ein Schnittstellenvertrag legt Operationen/Datenformate und das Fehlerverhalten fest. Die interne Implementierung wird gerade verborgen, und die Hardware gehört zur Verteilung."},
{id:"c4q27",chapter:4,lz:"LZ 04-01",r:"R1",type:"single",
 q:"Warum sollte man nicht „alles“ dokumentieren?",
 options:[
  "Weil zu viel Doku Aufwand kostet und schnell veraltet – sinnvoll ist das Entscheidungsrelevante.",
  "Weil zusätzliche Dokumentation die Qualität der Architektur selbst verschlechtert.",
  "Weil sich eine Architektur ohnehin vollständig aus dem Quellcode erschließen lässt.",
  "Weil Dokumentation nur für externe Stakeholder, nie für das Team nützlich ist."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Man dokumentiert gezielt Entscheidungsrelevantes, da zu viel veraltet.",
  "Zusätzliche Doku verschlechtert nicht die Architektur selbst.",
  "Der Code allein erklärt Entscheidungen und Ziele nicht vollständig.",
  "Doku nützt auch dem eigenen Team, nicht nur Externen."
 ],
 explanation:"Man dokumentiert gezielt das Entscheidungsrelevante, weil zu viel Doku Aufwand macht und veraltet. Doku verschlechtert nicht die Architektur, der Code allein erklärt Entscheidungen und Qualitätsziele nicht, und Doku nützt auch dem Team."},
{id:"c4q28",chapter:4,lz:"LZ 04-03",r:"R2",type:"multi",
 q:"Welche Aussagen zum UML-Aktivitätsdiagramm treffen zu?",
 options:[
  "Es stellt Abläufe mit Aktionen und Verzweigungen dar.",
  "Es kann nebenläufige (parallele) Abläufe abbilden.",
  "Es zeigt primär die statische Struktur von Klassen und ihren Beziehungen.",
  "Es ordnet Softwarebausteine den Ausführungsknoten (Hardware) zu.",
  "Es bildet in erster Linie die Zustände eines Objekts und deren Übergänge ab."
 ],
 correct:[0,1],
 optExpl:[
  "Aktivitätsdiagramme zeigen Abläufe mit Aktionen und Verzweigungen.",
  "Sie können auch nebenläufige, parallele Abläufe abbilden.",
  "Die statische Struktur von Klassen zeigt das Klassendiagramm.",
  "Die Zuordnung zu Ausführungsknoten zeigt das Verteilungsdiagramm.",
  "Zustände und ihre Übergänge zeigt das Zustandsdiagramm."
 ],
 explanation:"Aktivitätsdiagramme zeigen Abläufe inkl. Nebenläufigkeit (dynamisches Verhalten). Statische Klassenstruktur = Klassendiagramm; Zuordnung zu Hardware = Verteilungsdiagramm."},
{id:"c4q29",chapter:4,lz:"LZ 04-02",r:"R2",type:"single",
 q:"Welchen Abschnitt sieht das arc42-Template u. a. ausdrücklich vor?",
 options:[
  "Einen Abschnitt für Qualitätsanforderungen bzw. Qualitätsszenarien.",
  "Einen Pflichtabschnitt mit dem vollständigen Quellcode des Systems.",
  "Einen Pflichtabschnitt mit dem detaillierten Projektbudget.",
  "Einen verbindlichen Testfallkatalog für jede einzelne Methode."
 ],
 correct:[0],
 optExpl:[
  "Richtig: arc42 sieht ausdrücklich einen Abschnitt für Qualitätsanforderungen vor.",
  "Einen Quellcode-Pflichtabschnitt gibt es in arc42 nicht.",
  "Ein detailliertes Projektbudget ist kein arc42-Abschnitt.",
  "Einen verbindlichen Testfallkatalog sieht arc42 nicht vor."
 ],
 explanation:"arc42 sieht u. a. Kontext, Lösungsstrategie, Bausteinsicht, Laufzeit-/Verteilungssicht, Querschnittskonzepte und Qualitätsanforderungen vor – aber keinen Quellcode-, Budget- oder Testfall-Pflichtabschnitt."},
{id:"c4q30",chapter:4,lz:"LZ 04-03",r:"R1",type:"multi",
 q:"Welche Aussagen zu UML als Notation treffen zu?",
 options:[
  "UML bietet standardisierte Diagrammtypen mit vereinbarter Bedeutung.",
  "Für Architektur sind u. a. Komponenten-, Verteilungs- und Sequenzdiagramme nützlich.",
  "UML schreibt eine bestimmte Architektur oder Technologie vor.",
  "UML-Diagramme müssen stets alle Details des Systems vollständig zeigen.",
  "UML ist an eine bestimmte Programmiersprache gebunden und setzt diese voraus.",
  "Ein UML-Modell lässt sich stets vollständig automatisch in lauffähigen Code übersetzen."
 ],
 correct:[0,1],
 optExpl:[
  "UML bietet standardisierte Diagrammtypen mit vereinbarter Bedeutung.",
  "Komponenten-, Verteilungs- und Sequenzdiagramme sind für Architektur nützlich.",
  "UML schreibt keine bestimmte Architektur oder Technologie vor.",
  "UML-Diagramme müssen nicht alle Details vollständig zeigen.",
  "UML ist unabhängig von einer konkreten Programmiersprache.",
  "Vollständige automatische Codegenerierung aus UML ist nicht gewährleistet."
 ],
 explanation:"UML ist eine standardisierte Notation mit vielen Diagrammtypen; für Architektur sind u. a. Komponenten-, Verteilungs- und Sequenzdiagramme nützlich. UML schreibt keine Architektur/Technologie vor und muss nicht alles zeigen."},
{id:"c4q31",chapter:4,lz:"LZ 04-05",r:"R1",type:"single",
 q:"Ein Betriebsteam möchte wissen, auf welchen Servern welche Teile laufen. Welche Sicht hilft am meisten?",
 options:[
  "Die Verteilungssicht.",
  "Die Bausteinsicht, da sie alle Komponenten zeigt.",
  "Die Laufzeitsicht, da der Betrieb Abläufe beobachtet.",
  "Das Klassendiagramm, da es die Struktur zeigt."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Fragen zu Servern und Knoten beantwortet die Verteilungssicht.",
  "Die Bausteinsicht zeigt Komponenten, aber nicht ihre Server.",
  "Die Laufzeitsicht zeigt Abläufe, nicht die Server-Zuordnung.",
  "Das Klassendiagramm zeigt Struktur, nicht die Server."
 ],
 explanation:"Fragen des Betriebs zu Servern/Knoten und Kommunikationswegen beantwortet die Verteilungssicht. Baustein-, Laufzeitsicht und Klassendiagramm adressieren andere Aspekte."},
{id:"k13",chapter:4,lz:"LZ 04-05",r:"R1",type:"k",points:2,
 q:"Laufzeitsicht oder Verteilungssicht?",
 categories:["Laufzeitsicht","Verteilungssicht"],
 rows:[
  {text:"Zeitliche Interaktion der Bausteine bei einem Anwendungsfall",cat:0},
  {text:"Auf welchem Server/Knoten welche Komponente läuft",cat:1},
  {text:"Reihenfolge der ausgetauschten Nachrichten",cat:0},
  {text:"Netzwerkverbindungen zwischen Rechenzentren",cat:1}
 ],
 explanation:"Interaktionen/Abläufe zur Laufzeit = Laufzeitsicht. Zuordnung zu Hardware/Knoten und deren Kommunikationswege = Verteilungssicht."},
{id:"c4q32",chapter:4,lz:"LZ 04-01",r:"R1",type:"multi",
 q:"Welche Aussagen zu guter Architekturdokumentation treffen zu?",
 options:[
  "Verständlichkeit lässt sich letztlich nur aus Sicht der jeweiligen Zielgruppe beurteilen.",
  "Angemessenheit bedeutet: so viel wie nötig, so wenig wie möglich.",
  "Mehr Dokumentation ist grundsätzlich besser als weniger.",
  "Korrektheit ist verzichtbar, solange die Doku umfangreich genug ist.",
  "Die Qualität guter Doku bemisst sich vor allem an der Anzahl der enthaltenen Diagramme."
 ],
 correct:[0,1],
 optExpl:[
  "Verständlichkeit lässt sich nur aus Sicht der Zielgruppe beurteilen.",
  "Angemessenheit heißt: so viel wie nötig, so wenig wie möglich.",
  "Mehr Dokumentation ist nicht grundsätzlich besser als weniger.",
  "Korrektheit ist unverzichtbar; Umfang ersetzt sie nicht.",
  "Die Menge an Diagrammen ist kein Maß für gute Doku."
 ],
 explanation:"Verständlichkeit ist zielgruppenabhängig (subjektiv), Angemessenheit meint das rechte Maß. „Viel = gut“ ist ein Trugschluss, und Korrektheit ist unverzichtbar."},
{id:"c4q33",chapter:4,lz:"LZ 04-08",r:"R2",type:"single",
 q:"Worin unterscheidet sich die Entscheidungsdokumentation nach arc42 tendenziell von einem Architecture Decision Record (ADR)?",
 options:[
  "arc42 rückt Weg und Alternativen in den Vordergrund; ein ADR fokussiert das Ergebnis und den Status der Entscheidung.",
  "Ein ADR darf ausschließlich in arc42-Projekten verwendet werden.",
  "arc42 verbietet das Festhalten von Entscheidungen ausdrücklich.",
  "Beide dürfen den Kontext einer Entscheidung nicht enthalten."
 ],
 correct:[0],
 optExpl:[
  "Richtig: arc42 betont Weg und Alternativen, ein ADR Ergebnis und Status.",
  "Ein ADR ist unabhängig und nicht auf arc42 beschränkt.",
  "arc42 verbietet das Festhalten von Entscheidungen nicht.",
  "Beide halten den Kontext einer Entscheidung sehr wohl fest."
 ],
 explanation:"Grobe Faustregel: die arc42-Entscheidungsdoku betont Weg/Alternativen, ein ADR das Ergebnis und den Status. Beide halten den Kontext fest und sind unabhängig voneinander kombinierbar."},
{id:"c4q34",chapter:4,lz:"LZ 04-08",r:"R2",type:"single",
 q:"Welche Angaben gehören typischerweise in ein Architecture Decision Record (ADR)?",
 options:[
  "Kontext, die getroffene Entscheidung, deren Status und die Konsequenzen.",
  "Eine detaillierte Implementierungsanleitung für jede betroffene Methode.",
  "Die vollständige Anforderungsspezifikation des Gesamtsystems.",
  "Eine verbindliche Aufwands- und Kostenkalkulation des Projekts."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Ein ADR nennt Kontext, Entscheidung, Status und Konsequenzen.",
  "Eine detaillierte Implementierungsanleitung gehört nicht ins ADR.",
  "Die vollständige Anforderungsspezifikation ist kein ADR-Inhalt.",
  "Eine Aufwands- und Kostenkalkulation gehört nicht ins ADR."
 ],
 explanation:"Ein ADR hält knapp Titel, Kontext, Entscheidung, Status und Konsequenzen fest – es ist kein vollständiges Implementierungs-, Anforderungs- oder Kostendokument."},
{id:"c4q35",chapter:4,lz:"LZ 04-06",r:"R2",type:"single",
 q:"Was gilt für die Dokumentation von Schnittstellen?",
 options:[
  "Externe Schnittstellen werden meist früher und ausführlicher dokumentiert, weil sie einen „Vertrag“ mit Dritten bilden.",
  "Interne Schnittstellen müssen stets detaillierter dokumentiert werden als externe.",
  "Schnittstellen brauchen keine Angaben zu Datenformaten oder Fehlerverhalten.",
  "Eine Schnittstellenbeschreibung sollte die interne Implementierung offenlegen."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Externe Schnittstellen sind ein Vertrag mit Dritten, daher früh und ausführlich.",
  "Interne Schnittstellen sind nicht grundsätzlich detaillierter als externe.",
  "Datenformate und Fehlerverhalten gehören sehr wohl dazu.",
  "Die interne Implementierung bleibt bewusst verborgen (Blackbox)."
 ],
 explanation:"Externe Schnittstellen sind ein Vertrag mit Dritten und werden früh/ausführlich festgelegt (Datenformate, Protokolle, Fehler- und Versionierungsverhalten). Die interne Implementierung bleibt bewusst außen vor (Blackbox)."},
{id:"c4q36",chapter:4,lz:"LZ 04-07",r:"R2",type:"single",
 q:"Warum werden Querschnittskonzepte (z. B. Fehlerbehandlung, Sicherheit) zentral dokumentiert?",
 options:[
  "Damit sie systemweit einheitlich umgesetzt werden und nicht in jedem Baustein neu erfunden/erklärt werden müssen.",
  "Weil sie nur einen einzigen Baustein betreffen und ausschließlich dort beschrieben werden.",
  "Weil sie ausschließlich für externe Prüfer relevant sind.",
  "Weil sie keinen Einfluss auf Qualitätsmerkmale haben."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Zentrale Doku sichert eine einheitliche, redundanzarme Umsetzung.",
  "Querschnittskonzepte betreffen viele Bausteine, nicht nur einen.",
  "Sie sind nicht ausschließlich für externe Prüfer relevant.",
  "Sie beeinflussen Qualitätsmerkmale sehr wohl."
 ],
 explanation:"Eine zentrale Beschreibung sichert die einheitliche, redundanzarme Umsetzung querschnittlicher Themen. Sie betreffen viele Bausteine (nicht einen), sind nicht nur für Prüfer gedacht und wirken sehr wohl auf Qualitätsmerkmale."},
/* ===== Kapitel 5 ===== */
{id:"c5q1",chapter:5,lz:"LZ 05-02",r:"R1",type:"multi",
 q:"Aus welchen Bestandteilen besteht ein Qualitätsszenario typischerweise?",
 options:[
  "Ein Auslöser/Stimulus (was das Szenario auslöst).",
  "Die Umgebung bzw. der Kontext (unter welchen Bedingungen).",
  "Eine Reaktion mit messbarem Antwortmaß (Response/Measure).",
  "Eine Schätzung des Umsetzungsaufwands in Personentagen.",
  "Eine konkrete technische Lösung, die den Auslöser behandelt."
 ],
 correct:[0,1,2],
 optExpl:[
  "Der Auslöser (Stimulus) ist fester Bestandteil eines Qualitätsszenarios.",
  "Die Umgebung bzw. der Kontext beschreibt die Bedingungen des Szenarios.",
  "Die Reaktion mit messbarem Antwortmaß macht das Ziel prüfbar.",
  "Eine Aufwandsschätzung in Personentagen gehört nicht zum Qualitätsszenario.",
  "Ein Szenario beschreibt gefordertes Verhalten, nicht die technische Lösung."
 ],
 explanation:"Ein Qualitätsszenario nennt Auslöser, Umgebung/Kontext und eine Reaktion mit messbarem Antwortmaß. Eine Aufwandsschätzung gehört nicht dazu."},
{id:"c5q2",chapter:5,lz:"LZ 05-02",r:"R3",type:"single",
 q:"Was ist ATAM?",
 options:[
  "Eine szenariobasierte Methode zur qualitativen Architekturbewertung.",
  "Ein automatisches Werkzeug, das Metriken aus dem Code berechnet.",
  "Ein Architekturmuster für fehlertolerante Systeme.",
  "Ein Reifegradmodell für Entwicklungsprozesse."
 ],
 correct:[0],
 optExpl:[
  "Richtig: ATAM bewertet Architektur szenariobasiert und qualitativ.",
  "ATAM ist kein automatisches Werkzeug zur Metrikberechnung aus Code.",
  "ATAM ist eine Bewertungsmethode, kein Architekturmuster.",
  "ATAM ist kein Reifegradmodell für Entwicklungsprozesse."
 ],
 explanation:"ATAM (Architecture Tradeoff Analysis Method) bewertet Architektur qualitativ anhand von Szenarien. Es ist kein Metrik-Tool, kein Architekturmuster und kein Reifegradmodell."},
{id:"c5q3",chapter:5,lz:"LZ 05-02",r:"R1",type:"multi",
 q:"Welche Aussagen zu qualitativer vs. quantitativer Architekturbewertung treffen zu?",
 options:[
  "Qualitative Bewertung arbeitet szenario- bzw. expertenbasiert (z. B. ATAM, Reviews).",
  "Quantitative Bewertung stützt sich auf messbare Kennzahlen bzw. Metriken.",
  "Qualitative Bewertung liefert stets objektivere Ergebnisse als quantitative.",
  "Quantitative Metriken lassen sich immer ohne Interpretation eindeutig bewerten.",
  "Qualitative und quantitative Bewertung schließen einander grundsätzlich aus."
 ],
 correct:[0,1],
 optExpl:[
  "Qualitative Bewertung arbeitet szenario- und expertenbasiert, etwa mit ATAM.",
  "Quantitative Bewertung beruht auf messbaren Kennzahlen und Metriken.",
  "Qualitativ ist nicht pauschal objektiver als quantitativ.",
  "Metriken brauchen stets Interpretation und sind nie eindeutig.",
  "Beide Ansätze lassen sich kombinieren und ergänzen einander."
 ],
 explanation:"Qualitativ = szenario-/expertenbasiert, quantitativ = metrikbasiert. Qualitativ ist nicht pauschal objektiver, und Metriken brauchen Interpretation im Kontext."},
{id:"c5q4",chapter:5,lz:"LZ 05-02",r:"R2",type:"multi",
 q:"Welche der folgenden sind quantitative (metrikbasierte) Angaben?",
 options:[
  "Der Kopplungsgrad zwischen Modulen.",
  "Die zyklomatische Komplexität.",
  "Die Einschätzung eines Experten im Architektur-Review.",
  "Das Ergebnis eines szenariobasierten Workshops (ATAM).",
  "Die Einstufung eines Risikos als hoch, mittel oder gering.",
  "Die verbale Beschreibung erkannter Architekturschwachstellen."
 ],
 correct:[0,1],
 optExpl:[
  "Der Kopplungsgrad ist eine messbare, quantitative Metrik.",
  "Zyklomatische Komplexität ist eine zählbare, quantitative Kennzahl.",
  "Eine Experteneinschätzung ist qualitativ, nicht metrikbasiert.",
  "Ein ATAM-Workshop ist ein qualitatives Verfahren, keine Metrik.",
  "Eine grobe Hoch/Mittel/Gering-Einstufung ist qualitativ, keine Metrik.",
  "Eine verbale Beschreibung ist qualitativ und nicht metrikbasiert."
 ],
 explanation:"Kopplungsgrad und zyklomatische Komplexität sind quantitative Metriken. Experteneinschätzung und ATAM-Workshops sind qualitative Verfahren."},
{id:"c5q5",chapter:5,lz:"LZ 05-02",r:"R3",type:"single",
 q:"Was ist der Zweck eines Qualitätsbaums (Utility Tree)?",
 options:[
  "Qualitätsziele und zugehörige Szenarien strukturieren und priorisieren, um die Bewertung zu fokussieren.",
  "Die Vererbungshierarchie der Klassen als Baum darstellen.",
  "Die Aufrufreihenfolge der Bausteine zur Laufzeit abbilden.",
  "Die Ordnerstruktur des Projekts visualisieren."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Er strukturiert und priorisiert Qualitätsziele und zugehörige Szenarien.",
  "Der Utility Tree zeigt keine Klassen-Vererbungshierarchie.",
  "Die Laufzeit-Aufrufreihenfolge bildet der Qualitätsbaum nicht ab.",
  "Ordnerstrukturen haben mit dem Qualitätsbaum nichts zu tun."
 ],
 explanation:"Ein Qualitätsbaum ordnet und priorisiert Qualitätsmerkmale und Szenarien, um die Bewertung zu fokussieren. Mit Klassenhierarchie, Laufzeitabläufen oder Ordnern hat er nichts zu tun."},
{id:"c5q6",chapter:5,lz:"LZ 05-01",r:"R1",type:"multi",
 q:"Warum bewertet man Architekturen überhaupt?",
 options:[
  "Um Risiken und Schwachstellen bezüglich der Qualitätsziele früh zu erkennen.",
  "Um Trade-offs zwischen Qualitätsmerkmalen sichtbar zu machen.",
  "Um zu garantieren, dass die spätere Implementierung fehlerfrei ist.",
  "Um die Anzahl der benötigten Entwickler exakt zu bestimmen.",
  "Um bereits getroffene Architekturentscheidungen nachträglich zu rechtfertigen."
 ],
 correct:[0,1],
 optExpl:[
  "Frühes Erkennen von Risiken und Schwachstellen ist zentrales Bewertungsziel.",
  "Bewertung macht Trade-offs zwischen Qualitätsmerkmalen sichtbar.",
  "Bewertung garantiert keine fehlerfreie spätere Implementierung.",
  "Personalplanung ist kein Zweck der Architekturbewertung.",
  "Bewertung soll Entscheidungen kritisch prüfen, nicht nachträglich rechtfertigen."
 ],
 explanation:"Bewertung deckt Risiken/Schwachstellen und Trade-offs früh auf. Sie garantiert keine fehlerfreie Implementierung und dient nicht der Personalplanung."},
{id:"c5q7",chapter:5,lz:"LZ 05-02",r:"R3",type:"single",
 q:"Was drückt eine hohe Kopplung eines Moduls tendenziell aus?",
 options:[
  "Viele ein- und ausgehende Abhängigkeiten – oft ein Hinweis auf schwerere isolierte Änderbarkeit.",
  "Dass das Modul besonders performant ist.",
  "Dass das Modul keine Schnittstellen benötigt.",
  "Dass das Modul besonders gut getestet ist."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Viele Abhängigkeiten erschweren die isolierte Änderbarkeit.",
  "Kopplung sagt nichts über die Performance des Moduls.",
  "Hohe Kopplung bedeutet viele Schnittstellen, nicht keine.",
  "Kopplung sagt nichts über die Testgüte des Moduls."
 ],
 explanation:"Hohe Kopplung bedeutet viele Abhängigkeiten und erschwert isolierte Änderungen und Tests. Sie sagt nichts über Performance, Schnittstellenbedarf oder Testgüte. (R3.)"},
{id:"c5q8",chapter:5,lz:"LZ 05-02",r:"R2",type:"single",
 q:"Was misst die zyklomatische Komplexität?",
 options:[
  "Die Anzahl linear unabhängiger Pfade durch den Kontrollfluss (Verzweigungen).",
  "Die Anzahl der Abhängigkeiten eines Moduls zu anderen Modulen.",
  "Die Verschachtelungstiefe der Vererbungshierarchie.",
  "Den Codeumfang, gemessen in Zeilen (LOC)."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Sie zählt linear unabhängige Pfade durch den Kontrollfluss.",
  "Modulabhängigkeiten misst die Kopplung, nicht diese Metrik.",
  "Die Vererbungstiefe ist eine ganz andere Metrik.",
  "Codezeilen (LOC) messen den Umfang, nicht die Pfade."
 ],
 explanation:"Zyklomatische Komplexität zählt unabhängige Kontrollfluss-Pfade. Modulabhängigkeiten (Kopplung), Vererbungstiefe und LOC sind jeweils andere Metriken."},
{id:"c5q9",chapter:5,lz:"LZ 05-02",r:"R1",type:"multi",
 q:"Welche Aussagen zum Nutzen von Qualitätsszenarien bei der Bewertung treffen zu?",
 options:[
  "Sie machen abstrakte Qualitätsziele konkret und überprüfbar.",
  "Sie dienen als Maßstab, an dem Architekturentscheidungen bewertet werden.",
  "Sie ersetzen die Erhebung der funktionalen Anforderungen.",
  "Sie garantieren, dass die genannten Qualitätsziele auch tatsächlich erreicht werden.",
  "Sie sind nur für Performance-Anforderungen sinnvoll einsetzbar."
 ],
 correct:[0,1],
 optExpl:[
  "Szenarien machen abstrakte Qualitätsziele konkret und überprüfbar.",
  "Sie liefern den Maßstab zum Bewerten von Architekturentscheidungen.",
  "Szenarien ersetzen nicht die Erhebung funktionaler Anforderungen.",
  "Szenarien machen Ziele prüfbar, garantieren ihre Erreichung aber nicht.",
  "Szenarien eignen sich für alle Qualitätsmerkmale, nicht nur Performance."
 ],
 explanation:"Szenarien konkretisieren Qualitätsziele und liefern einen Bewertungsmaßstab. Sie ersetzen keine funktionalen Anforderungen und garantieren nichts – sie machen nur prüfbar."},
{id:"c5q10",chapter:5,lz:"LZ 05-02",r:"R2",type:"single",
 q:"Was ist ein Architektur-Review (bzw. Walkthrough) als Bewertungsmethode?",
 options:[
  "Eine qualitative, expertengestützte Durchsicht der Architektur anhand von Zielen und Szenarien.",
  "Eine automatische Messung von Metriken ganz ohne Beteiligung von Menschen.",
  "Ein Lasttest zur Ermittlung der maximalen Antwortzeit.",
  "Das Zusammenführen paralleler Entwicklungszweige im Code."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Eine qualitative Durchsicht durch Experten anhand von Szenarien.",
  "Automatische Metrikmessung ist quantitativ, kein Review.",
  "Ein Lasttest misst Antwortzeiten, ist aber kein Review.",
  "Das Zusammenführen von Zweigen ist Versionsverwaltung, kein Review."
 ],
 explanation:"Reviews/Walkthroughs sind qualitative, expertengestützte Verfahren gegen Ziele und Szenarien. Automatische Messung ist quantitativ; Lasttest und Merge sind etwas anderes."},
{id:"c5q11",chapter:5,lz:"LZ 05-02",r:"R2",type:"multi",
 q:"Welche der folgenden sind qualitative Bewertungsmethoden?",
 options:[
  "Szenariobasierte Analyse (z. B. ATAM).",
  "Architektur-Review durch Experten.",
  "Automatisches Zählen der Codezeilen (LOC).",
  "Messung des Kopplungsgrades zwischen Modulen.",
  "Berechnung der zyklomatischen Komplexität je Komponente.",
  "Ermittlung der Testabdeckung als Prozentwert."
 ],
 correct:[0,1],
 optExpl:[
  "Szenariobasierte Analyse wie ATAM ist ein qualitatives Verfahren.",
  "Ein Experten-Review ist eine qualitative Bewertungsmethode.",
  "LOC-Zählung liefert eine Metrik und ist damit quantitativ.",
  "Kopplungsmessung ist metrikbasiert und damit quantitativ.",
  "Zyklomatische Komplexität ist eine Metrik und damit quantitativ.",
  "Eine prozentuale Testabdeckung ist eine Kennzahl und damit quantitativ."
 ],
 explanation:"ATAM und Experten-Reviews sind qualitativ. LOC-Zählung und Kopplungsmessung sind quantitative (metrikbasierte) Verfahren."},
{id:"c5q12",chapter:5,lz:"LZ 05-01",r:"R1",type:"single",
 q:"Wann sollte eine Architektur bewertet werden?",
 options:[
  "Früh und wiederholt, begleitend zu wichtigen Entscheidungen.",
  "Möglichst spät, wenn viel Code vorliegt, damit die Bewertung auf Fakten statt Annahmen beruht.",
  "Nur einmalig, gebündelt zur Abnahme durch den Auftraggeber.",
  "Ausschließlich reaktiv, sobald im Betrieb Probleme auftreten."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Früh und wiederholt, begleitend zu wichtigen Entscheidungen.",
  "Spät zu warten macht nötige Korrekturen unnötig teuer.",
  "Einmalig zur Abnahme ist für Korrekturen zu spät.",
  "Rein reaktiv bei Betriebsproblemen ist deutlich zu spät."
 ],
 explanation:"Bewertung ist am wertvollsten früh und wiederholt, solange Korrekturen günstig sind. Auf viel Code zu warten klingt plausibel, macht Korrekturen aber teuer; einmalig zur Abnahme oder rein reaktiv ist zu spät."},
{id:"c5q13",chapter:5,lz:"LZ 05-02",r:"R2",type:"single",
 q:"Welche Grenze haben metrik-basierte (quantitative) Bewertungen?",
 options:[
  "Zahlen allein liefern noch keine Bewertung – sie brauchen Kontext und Interpretation.",
  "Metriken sind grundsätzlich wertlos und sollten nie erhoben werden.",
  "Ein hoher Metrikwert ist immer eindeutig schlecht.",
  "Metriken ersetzen vollständig jede fachliche Beurteilung."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Zahlen brauchen Kontext und Interpretation, um zu bewerten.",
  "Metriken sind nicht wertlos, sondern liefern nützliche Hinweise.",
  "Ein hoher Metrikwert ist nicht automatisch eindeutig schlecht.",
  "Metriken ersetzen keine fachliche Beurteilung im Kontext."
 ],
 explanation:"Metriken geben Hinweise, müssen aber im Kontext interpretiert werden. Sie sind nicht wertlos, nicht automatisch gut oder schlecht und ersetzen keine fachliche Beurteilung."},
{id:"c5q14",chapter:5,lz:"LZ 05-02",r:"R1",type:"single",
 q:"Was ist ein typisches Ergebnis einer Architekturbewertung?",
 options:[
  "Erkannte Risiken, Schwachstellen und Trade-offs sowie konkrete Verbesserungsvorschläge.",
  "Ein verbindlicher Nachweis, dass das System fehlerfrei ist.",
  "Die endgültige Freigabe ohne jede weitere Auflage.",
  "Eine reine Sammlung neuer Diagramme ohne Aussagen."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Risiken, Schwachstellen, Trade-offs und konkrete Verbesserungsvorschläge.",
  "Eine Bewertung beweist keine Fehlerfreiheit des Systems.",
  "Sie liefert keine bedingungslose endgültige Freigabe.",
  "Neue Diagramme ohne Aussagen sind kein Bewertungsergebnis."
 ],
 explanation:"Eine Bewertung liefert Risiken, Trade-offs und Empfehlungen. Sie ist kein Fehlerfreiheits-Nachweis, keine bedingungslose Freigabe und nicht bloß neue Diagramme."},
{id:"k10",chapter:5,lz:"LZ 05-02",r:"R2",type:"k",points:2,
 q:"Qualitative oder quantitative Bewertungsmethode?",
 categories:["Qualitativ","Quantitativ"],
 rows:[
  {text:"Szenariobasierte Analyse (ATAM)",cat:0},
  {text:"Messung der Kopplung zwischen Modulen",cat:1},
  {text:"Experten-Review / Walkthrough",cat:0},
  {text:"Zählen der Codezeilen (LOC)",cat:1}
 ],
 explanation:"Szenarioanalysen und Reviews sind qualitativ (experten-/szenariobasiert). Kopplungsmaße und LOC sind quantitativ (messbare Kennzahlen)."},
{id:"c5q15",chapter:5,lz:"LZ 05-01",r:"R1",type:"single",
 q:"Warum sind klar formulierte Qualitätsziele Voraussetzung für eine sinnvolle Architekturbewertung?",
 options:[
  "Weil ohne Ziele der Maßstab fehlt, gegen den man die Architektur bewerten könnte.",
  "Weil Qualitätsziele die Bewertung überflüssig machen.",
  "Weil sich Bewertung ausschließlich auf den Quellcode stützt.",
  "Weil Ziele erst nach der Bewertung formuliert werden sollten."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Ohne Ziele fehlt der Maßstab für die Bewertung.",
  "Ziele machen die Bewertung nicht überflüssig, sondern erst möglich.",
  "Bewertung stützt sich nicht ausschließlich auf den Quellcode.",
  "Qualitätsziele gehören vor die Bewertung, nicht danach."
 ],
 explanation:"Bewertung misst gegen die Qualitätsziele – fehlen sie, gibt es keinen Maßstab. Sie machen Bewertung nicht überflüssig, stützen sich nicht nur auf Code und werden nicht erst danach formuliert."},
{id:"c5q16",chapter:5,lz:"LZ 05-02",r:"R2",type:"single",
 q:"Wozu dienen Werkzeuge der statischen Code-/Architekturanalyse?",
 options:[
  "Zum (teil-)automatisierten Prüfen von Metriken und Regeln, z. B. Abhängigkeiten oder Komplexität.",
  "Zum Ausführen des Systems mit echten Nutzern unter Last.",
  "Zum Erheben qualitativer Experteneinschätzungen in Workshops.",
  "Zum automatischen Beheben aller gefundenen Schwachstellen."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Sie prüft Metriken und Regeln (teil-)automatisiert ohne Ausführung.",
  "Statische Analyse führt das System nicht unter Last aus.",
  "Experten-Workshops sind qualitativ und keine statische Analyse.",
  "Statische Analyse findet Schwachstellen, behebt sie aber nicht."
 ],
 explanation:"Statische Analyse prüft Code/Struktur ohne Ausführung (Metriken, Regeln, Abhängigkeiten). Sie ist kein Lasttest, kein Workshop und behebt Schwachstellen nicht automatisch."},
{id:"c5q17",chapter:5,lz:"LZ 05-02",r:"R3",type:"single",
 q:"Was ist ein Trade-off-Punkt bei der Architekturbewertung (z. B. in ATAM)?",
 options:[
  "Eine Entscheidung, die mehrere Qualitätsmerkmale gegensätzlich beeinflusst.",
  "Eine Entscheidung, die genau ein einzelnes Qualitätsmerkmal beeinflusst.",
  "Ein Punkt, an dem alle Qualitätsziele gleichzeitig optimal erfüllt sind.",
  "Ein erkanntes Risiko ohne jeden Bezug zu Qualitätsmerkmalen."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Er beeinflusst mehrere Qualitätsmerkmale gegensätzlich.",
  "Wirkt sie nur auf eines, ist es ein Sensitivitätspunkt.",
  "Ein gleichzeitiges Optimum aller Qualitätsziele gibt es nicht.",
  "Ein Trade-off-Punkt bezieht sich gerade auf Qualitätsmerkmale."
 ],
 explanation:"Ein Trade-off-Punkt wirkt auf mehrere Qualitätsmerkmale gegensätzlich. Wirkt eine Entscheidung nur auf genau eines, ist es ein Sensitivitätspunkt – nicht dasselbe."},
{id:"c5q18",chapter:5,lz:"LZ 05-02",r:"R2",type:"single",
 q:"Worauf sollte sich eine Architekturbewertung mit begrenzter Zeit konzentrieren?",
 options:[
  "Auf die wichtigsten Qualitätsziele und die größten Risiken.",
  "Auf möglichst viele nebensächliche Details, um vollständig zu sein.",
  "Auf die Bausteine mit den meisten Codezeilen, unabhängig vom Risiko.",
  "Auf die zuletzt committeten Änderungen, unabhängig von den Zielen."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Auf die wichtigsten Qualitätsziele und die größten Risiken.",
  "Nebensächliche Details lohnen sich bei knapper Zeit nicht.",
  "Reine Codegröße sagt nichts über das Risiko aus.",
  "Die zuletzt committeten Änderungen sind kein sinnvolles Auswahlkriterium."
 ],
 explanation:"Mit begrenzter Zeit fokussiert man die priorisierten Qualitätsziele und die größten Risiken – nicht Nebensächlichkeiten, reine Codegröße oder die letzten Commits."},
{id:"c5q19",chapter:5,lz:"LZ 05-02",r:"R2",type:"multi",
 q:"Welche Aussagen zur Architekturbewertung treffen zu?",
 options:[
  "Sie deckt Risiken und Schwachstellen frühzeitig auf.",
  "Sie braucht klare Qualitätsziele als Maßstab.",
  "Sie kann qualitativ oder quantitativ erfolgen.",
  "Sie ist nur einmalig ganz am Ende des Projekts sinnvoll.",
  "Sie darf ausschließlich von unabhängigen externen Gutachtern durchgeführt werden."
 ],
 correct:[0,1,2],
 optExpl:[
  "Bewertung deckt Risiken und Schwachstellen frühzeitig auf.",
  "Ohne klare Qualitätsziele fehlt der Bewertungsmaßstab.",
  "Bewertung kann qualitativ oder quantitativ erfolgen.",
  "Sie ist früh und wiederholt sinnvoll, nicht nur am Ende.",
  "Bewertung kann auch intern erfolgen, nicht nur durch Externe."
 ],
 explanation:"Bewertung deckt Risiken auf, braucht Qualitätsziele und kann qualitativ oder quantitativ sein. Sie ist nicht nur am Projektende sinnvoll, sondern früh und wiederholt."},
{id:"c5q20",chapter:5,lz:"LZ 05-02",r:"R3",type:"single",
 q:"Was ist ein Sensitivitätspunkt bei einer Architekturbewertung (z. B. in ATAM)?",
 options:[
  "Eine Entscheidung bzw. Eigenschaft, die für genau ein Qualitätsmerkmal besonders ausschlaggebend ist.",
  "Eine Entscheidung, die mehrere Qualitätsmerkmale gegensätzlich beeinflusst.",
  "Ein Punkt, an dem alle Qualitätsziele automatisch erfüllt sind.",
  "Ein Risiko, das keinerlei Qualitätsmerkmal berührt."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Er ist für genau ein Qualitätsmerkmal ausschlaggebend.",
  "Gegensätzliche Wirkung auf mehrere Merkmale ist ein Trade-off-Punkt.",
  "Ein automatisches Optimum aller Qualitätsziele gibt es nicht.",
  "Ein Sensitivitätspunkt betrifft gerade ein Qualitätsmerkmal."
 ],
 explanation:"Ein Sensitivitätspunkt ist für ein einzelnes Qualitätsmerkmal entscheidend. Wirkt eine Entscheidung gegensätzlich auf mehrere Merkmale, ist es ein Trade-off-Punkt."},
{id:"c5q21",chapter:5,lz:"LZ 05-02",r:"R3",type:"multi",
 q:"Welche Ergebnistypen liefert eine szenariobasierte Bewertung wie ATAM?",
 options:[
  "Risiken und ausdrücklich benannte Nicht-Risiken.",
  "Sensitivitäts- und Trade-off-Punkte.",
  "Eine verbindliche Terminplanung für das Projekt.",
  "Den fertigen Quellcode der kritischen Komponenten.",
  "Eine vollständige Testfallspezifikation für die spätere Abnahme."
 ],
 correct:[0,1],
 optExpl:[
  "ATAM benennt Risiken und ausdrücklich auch Nicht-Risiken.",
  "Sensitivitäts- und Trade-off-Punkte sind typische ATAM-Ergebnisse.",
  "Eine verbindliche Terminplanung liefert die Architekturbewertung nicht.",
  "Fertiger Quellcode ist kein Ergebnis einer Bewertung.",
  "Testfallspezifikationen sind kein Ergebnis einer szenariobasierten Bewertung."
 ],
 explanation:"ATAM liefert u. a. Risiken, Nicht-Risiken sowie Sensitivitäts- und Trade-off-Punkte. Projektterminpläne oder Quellcode sind keine Ergebnisse einer Architekturbewertung."},
{id:"c5q22",chapter:5,lz:"LZ 05-02",r:"R3",type:"single",
 q:"Wie lässt sich ATAM methodisch einordnen?",
 options:[
  "Als szenariobasierte, überwiegend qualitative Bewertungsmethode.",
  "Als rein quantitatives Verfahren, das ausschließlich mit Metriken arbeitet.",
  "Als automatisiertes Werkzeug, das ohne Beteiligte auskommt.",
  "Als Verfahren, das nur nach Fertigstellung des Systems anwendbar ist."
 ],
 correct:[0],
 optExpl:[
  "Richtig: ATAM ist szenariobasiert und überwiegend qualitativ.",
  "ATAM arbeitet nicht ausschließlich mit Metriken.",
  "ATAM braucht Beteiligte und ist nicht vollautomatisch.",
  "ATAM ist gerade früh im Lebenszyklus sinnvoll."
 ],
 explanation:"ATAM ist szenariobasiert und qualitativ (moderierte Analyse mit Stakeholdern anhand von Qualitätsszenarien). Es ist nicht rein metrisch, nicht vollautomatisch und gerade früh im Lebenszyklus sinnvoll."},
{id:"c5q23",chapter:5,lz:"LZ 05-02",r:"R3",type:"single",
 q:"Welche Review-Form hat den höchsten Formalisierungsgrad?",
 options:[
  "Die Inspektion – mit Vorbereitung, Protokoll und unabhängigem Moderator.",
  "Der Walkthrough, bei dem der Autor locker durch den Entwurf führt.",
  "Das informelle Review ohne feste Rollen und Protokoll.",
  "Die automatisierte Metrikmessung durch ein Analysewerkzeug."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Die Inspektion ist am formalsten, mit Protokoll und Moderator.",
  "Der Walkthrough ist lockerer und weniger formal als die Inspektion.",
  "Ein informelles Review hat kaum Rollen und Formalisierung.",
  "Automatische Metrikmessung ist gar kein Review-Format."
 ],
 explanation:"Der Formalisierungsgrad steigt: informell → Walkthrough → Inspektion. Die Inspektion ist am formalsten (Vorbereitung, Protokoll, unabhängiger Moderator). Automatisierte Metrikmessung ist gar kein Review-Format."},
{id:"c5q24",chapter:5,lz:"LZ 05-02",r:"R2",type:"single",
 q:"Worauf konzentriert sich das Risikomanagement aus Architektursicht vor allem?",
 options:[
  "Auf Produktrisiken – am häufigsten mindert man sie, indem man ihre Eintrittswahrscheinlichkeit senkt.",
  "Auf Projektrisiken wie Termin- und Budgetplanung, die der Architekt allein verantwortet.",
  "Ausschließlich darauf, jedes Risiko vollständig zu vermeiden.",
  "Darauf, Risiken zu ignorieren, solange das System noch läuft."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Produktrisiken, meist durch Senken der Eintrittswahrscheinlichkeit.",
  "Termin- und Budgetrisiken liegen primär bei der Projektleitung.",
  "Vollständige Vermeidung jedes Risikos ist selten möglich.",
  "Risiken zu ignorieren ist kein Risikomanagement."
 ],
 explanation:"Architektonisch stehen Produktrisiken im Fokus; die häufigste Minderung senkt die Eintrittswahrscheinlichkeit (die Auswirkung zu senken ist oft teurer, vollständige Vermeidung selten möglich). Projektrisiken liegen primär bei der Projektleitung."},
{id:"c5q25",chapter:5,lz:"LZ 05-03",r:"R2",type:"single",
 q:"Was beschreibt der Begriff „Architekturerosion“?",
 options:[
  "Das schleichende Abweichen der real umgesetzten Architektur von der beabsichtigten – die „Unordnung“ nimmt über die Zeit zu.",
  "Das bewusste, dokumentierte Weiterentwickeln der Architektur nach Plan.",
  "Den einmaligen Austausch einer Technologie im Betrieb.",
  "Die automatische Verbesserung der Struktur durch längere Laufzeit."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Die Ist-Architektur driftet schleichend von der Soll-Architektur ab.",
  "Geplantes, dokumentiertes Weiterentwickeln nach Plan ist keine Erosion.",
  "Ein einmaliger Technologiewechsel im Betrieb ist keine Erosion.",
  "Die Struktur verbessert sich nicht von allein mit der Zeit."
 ],
 explanation:"Erosion = die Ist-Architektur driftet ungewollt von der Soll-Architektur ab; die Struktur verschlechtert sich schleichend. Sie ist kein geplanter Umbau und verbessert sich nicht von selbst – man muss aktiv gegensteuern (früh und laufend bewerten)."},
{id:"c5q26",chapter:5,lz:"LZ 05-03",r:"R2",type:"single",
 q:"Was prüft eine Konformitäts- bzw. Konsistenzanalyse der Architektur?",
 options:[
  "Ob die tatsächlich umgesetzte Architektur (Ist) mit der beabsichtigten (Soll) übereinstimmt.",
  "Ob die Anforderungen vollständig erhoben wurden.",
  "Ob das Team die vereinbarten Arbeitszeiten einhält.",
  "Ob die Benutzeroberfläche den Nutzern gefällt."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Sie vergleicht die umgesetzte Ist- mit der Soll-Architektur.",
  "Die Vollständigkeit der Anforderungen prüft sie nicht.",
  "Die Arbeitszeiten des Teams sind kein Gegenstand dieser Analyse.",
  "Der UI-Geschmack der Nutzer gehört nicht dazu."
 ],
 explanation:"Eine Konformitätsanalyse vergleicht Ist- und Soll-Architektur und deckt so Erosion bzw. Abweichungen auf. Anforderungserhebung, Zeiterfassung oder UI-Geschmack sind etwas anderes."},
{id:"c5q27",chapter:5,lz:"LZ 05-03",r:"R2",type:"single",
 q:"Womit lässt sich die Einhaltung geplanter Abhängigkeits- bzw. Schichtregeln am ehesten überprüfen?",
 options:[
  "Mit statischer Analyse bzw. Werkzeugen, die Abhängigkeiten gegen definierte Regeln prüfen.",
  "Ausschließlich durch Befragung einzelner Entwickler nach Gefühl.",
  "Durch Zählen der Codezeilen pro Datei.",
  "Allein durch Messung der Antwortzeiten im Betrieb."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Statische Analyse prüft Abhängigkeiten gegen definierte Regeln.",
  "Bauchgefühl einzelner Entwickler prüft keine Strukturregeln zuverlässig.",
  "LOC-Zählung sagt nichts über Abhängigkeitsregeln aus.",
  "Reine Laufzeit-Antwortzeiten prüfen keine Strukturkonformität der Architektur."
 ],
 explanation:"Verbotene Abhängigkeiten (z. B. zwischen Schichten/Modulen) findet man zuverlässig mit statischer Analyse/Abhängigkeitsprüfung. Bauchgefühl, LOC-Zählung oder Laufzeitmessung prüfen keine Strukturkonformität."},
/* ===== Kapitel 6 ===== */
{id:"c6q1",chapter:6,lz:"LZ 06-01",r:"R3",type:"single",
 q:"Welchen Zweck hat das Kapitel 'Beispiele für Softwarearchitekturen' im Curriculum?",
 options:[
  "Das Gelernte an konkreten Beispielen nachvollziehbar anzuwenden und zu veranschaulichen.",
  "Neue, verbindliche Architekturregeln einzuführen, die die Prüfung dominieren.",
  "Die vorangegangenen Kapitel inhaltlich zu ersetzen.",
  "Eine bestimmte Technologie als verbindlichen Standard vorzuschreiben."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Beispiele wenden das Gelernte konkret an und veranschaulichen es nachvollziehbar.",
  "Beispiele führen keine neuen Regeln ein und dominieren die Prüfung nicht.",
  "Beispiele ergänzen die Kapitel zur Veranschaulichung, ersetzen sie aber nicht.",
  "Kein Beispiel schreibt eine bestimmte Technologie als verbindlichen Standard vor."
 ],
 explanation:"Die Beispiele veranschaulichen die Anwendung des Gelernten. Sie führen keine neuen Regeln ein, ersetzen keine Kapitel und schreiben keine Technologie vor. (R3.)"},
{id:"c6q2",chapter:6,lz:"LZ 06-02",r:"R3",type:"single",
 q:"Was sollte man an einem durchgängigen Architekturbeispiel v. a. erkennen können?",
 options:[
  "Wie Anforderungen zu Entscheidungen, Strukturen und Sichten führen.",
  "Ausschließlich die eingesetzten Technologien und Frameworks.",
  "Nur den reinen Umfang des Quellcodes.",
  "Die persönliche Arbeitsweise der einzelnen Entwickler."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Es zeigt den roten Faden von Anforderung zu Struktur und Sichten.",
  "Technologien allein greifen zu kurz; der rote Faden bleibt entscheidend.",
  "Reiner Codeumfang sagt nichts über Anforderungen, Entscheidungen und Strukturen aus.",
  "Individuelle Arbeitsweisen der Entwickler sind nicht der Lernzweck eines Architekturbeispiels."
 ],
 explanation:"Ein gutes Beispiel zeigt den roten Faden von Anforderungen über Entscheidungen zu Struktur und Sichten – nicht nur Technologien, Codeumfang oder Arbeitsweisen. (R3.)"},
{id:"c6q3",chapter:6,lz:"LZ 06-01",r:"R3",type:"single",
 q:"Wie ist die Prüfungsrelevanz von Kapitel 6 (Beispiele) einzuordnen?",
 options:[
  "Überwiegend R3 – zur Veranschaulichung, aber nicht unmittelbarer Prüfungsstoff.",
  "R1 – die Beispiele sind das wichtigste Prüfungskapitel.",
  "Es ist die einzige Grundlage, die in der Prüfung abgefragt wird.",
  "Es ist gar nicht Teil des Curriculums."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Kapitel 6 ist überwiegend R3 und dient der Veranschaulichung.",
  "Die Beispiele sind nicht R1 und nicht das wichtigste Prüfungskapitel.",
  "Kapitel 6 ist keineswegs die einzige in der Prüfung abgefragte Grundlage.",
  "Kapitel 6 gehört sehr wohl zum Curriculum, nur als R3."
 ],
 explanation:"Kapitel 6 ist überwiegend R3: Teil des Curriculums zur Veranschaulichung, aber nicht unmittelbarer Prüfungsstoff. Es ist weder R1 noch die einzige Grundlage noch außerhalb des Curriculums."},
{id:"c6q4",chapter:6,lz:"LZ 06-02",r:"R3",type:"single",
 q:"Was lässt sich an einem durchgängigen Architekturbeispiel besonders gut lernen?",
 options:[
  "Wie Konzepte, Muster und Entscheidungen im Zusammenhang zusammenwirken.",
  "Eine auswendig zu lernende Musterlösung für die Prüfung.",
  "Die exakte Projektlaufzeit und das Budget.",
  "Eine allgemeingültige Blaupause, die für jedes System passt."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Es zeigt das Zusammenspiel von Konzepten, Mustern und Entscheidungen.",
  "Ein Beispiel ist keine auswendig zu lernende Musterlösung für die Prüfung.",
  "Projektlaufzeit und Budget sind nicht der Lernzweck eines Architekturbeispiels.",
  "Es gibt keine allgemeingültige Blaupause, die für jedes System passt."
 ],
 explanation:"Ein durchgängiges Beispiel zeigt das Zusammenspiel von Konzepten, Mustern und Entscheidungen. Es ist keine auswendig zu lernende Musterlösung und keine für alle passende Blaupause. (R3.)"},
{id:"c6q5",chapter:6,lz:"LZ 06-01",r:"R3",type:"single",
 q:"Welchen Nutzen hat das Studium mehrerer unterschiedlicher Architekturbeispiele?",
 options:[
  "Man lernt eine Bandbreite an Lösungen und Mustern kennen und kann sie auf eigene Probleme übertragen.",
  "Man erhält eine fertige Lösung, die man nur noch kopieren muss.",
  "Man muss danach keine eigenen Entscheidungen mehr treffen.",
  "Man lernt vor allem die jeweils verwendete Programmiersprache."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Mehrere Beispiele erweitern das Lösungsrepertoire und schulen das Übertragen.",
  "Beispiele liefern keine fertige Kopiervorlage für die eigenen Probleme.",
  "Eigene Entscheidungen bleiben trotz vieler studierter Beispiele weiterhin nötig.",
  "Der Lernwert liegt in Lösungen und Mustern, nicht in Programmiersprachen."
 ],
 explanation:"Mehrere Beispiele erweitern das Lösungsrepertoire und schulen das Übertragen. Sie liefern keine Kopiervorlage, ersparen keine eigenen Entscheidungen und dienen nicht dem Sprachenlernen. (R3.)"},
{id:"c6q6",chapter:6,lz:"LZ 06-02",r:"R3",type:"single",
 q:"Warum werden in Architekturbeispielen bewusst auch getroffene Trade-offs betrachtet?",
 options:[
  "Weil es selten die eine perfekte Lösung gibt – nur begründete Kompromisse.",
  "Weil Trade-offs ein Zeichen einer fehlerhaften Architektur sind.",
  "Weil man die schlechteste Option zu Lernzwecken hervorheben will.",
  "Weil Kompromisse in der Praxis grundsätzlich vermeidbar sind."
 ],
 correct:[0],
 optExpl:[
  "Richtig: Architektur besteht aus bewussten, begründeten Kompromissen statt einer perfekten Lösung.",
  "Trade-offs sind kein Fehler, sondern normaler Bestandteil jeder Architektur.",
  "Ziel ist nicht das Hervorheben der schlechtesten Option zu Lernzwecken.",
  "Kompromisse lassen sich in der Praxis nicht grundsätzlich vermeiden."
 ],
 explanation:"Beispiele zeigen, dass Architektur aus bewussten Abwägungen besteht – Trade-offs sind kein Fehler und nicht vermeidbar. Das Verständnis der Kompromisse ist der Lernwert. (R3.)"}
];

/* ============================================================
   State & Persistence
   ============================================================ */
