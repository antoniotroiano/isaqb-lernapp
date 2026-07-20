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
  "q": "Welche Aussagen über den Begriff Softwarearchitektur treffen im Sinne des CPSA-F zu?",
  "options": [
   "Sie umfasst die Struktur(en) eines Systems aus Bausteinen samt deren Beziehungen und nach außen sichtbaren Eigenschaften.",
   "Zu ihr gehören die grundlegenden Entwurfsentscheidungen, deren spätere Änderung typischerweise teuer wäre.",
   "Sie ist die Menge aller Strukturen, die sich vollständig und eindeutig aus dem vorhandenen Quellcode ableiten lässt.",
   "Sie betrifft ausschließlich statische Strukturen; das Laufzeitverhalten gehört zum Detailentwurf.",
   "Ein System besitzt genau eine Architektur, die immer auch dokumentiert vorliegt."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Richtig: Bausteine, Beziehungen und nach außen sichtbare Eigenschaften bilden den Kern jeder Architekturdefinition.",
   "Richtig: gerade die tragenden, folgenreichen (teuer änderbaren) Entscheidungen machen Architektur aus.",
   "Falsch: Architektur enthält u. a. Entwurfsentscheidungen und deren Begründung, die sich nicht vollständig aus dem Code rekonstruieren lassen.",
   "Falsch: das dynamische Zusammenspiel zur Laufzeit ist sehr wohl Teil der Architektur (Laufzeitsicht).",
   "Falsch: ein System hat typischerweise mehrere Strukturen/Sichten, die auch implizit und undokumentiert existieren können."
  ],
  "explanation": "Architektur = Bausteine + Beziehungen + Eigenschaften + tragende Entscheidungen. Sie ist nicht restlos aus dem Code ableitbar (Rationale fehlt dort), schließt Laufzeitverhalten ein und existiert auch als mehrere, teils undokumentierte Strukturen."
 },
 {
  "id": "c1q2",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen über eine Komponente (Baustein) treffen zu?",
  "options": [
   "Sie kapselt ihre Realisierung und wird über ihre Schnittstelle(n) genutzt (Blackbox-Prinzip).",
   "Sie kann selbst wieder aus mehreren feineren Bausteinen zusammengesetzt sein.",
   "Sie entspricht auf der Zielplattform stets genau einem deploybaren Artefakt (z. B. einer Datei bzw. Bibliothek).",
   "Der Begriff Komponente bezeichnet immer eine Laufzeiteinheit, im Gegensatz zum reinen Entwurfsbegriff Baustein.",
   "Zwei Komponenten mit identischer Schnittstellensignatur sind stets ohne Weiteres gegeneinander austauschbar, unabhängig von ihren zugesicherten Eigenschaften."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Richtig: Kapselung und Nutzung über die Schnittstelle sind das Kernmerkmal.",
   "Richtig: Bausteine sind hierarchisch, eine Komponente kann feinere Bausteine enthalten (Whitebox).",
   "Falsch: die Gleichsetzung mit genau einem Deployment-Artefakt vermengt Baustein- und Verteilungssicht.",
   "Falsch: die Baustein/Komponente-Abgrenzung ist keine Laufzeit-/Entwurfszeit-Unterscheidung.",
   "Falsch: gleiche Signatur genügt nicht; der Kontrakt inklusive zugesicherter Eigenschaften (Semantik, Qualitäten) muss passen."
  ],
  "explanation": "Eine Komponente kapselt ihre Realisierung hinter Schnittstellen und kann selbst aus feineren Bausteinen bestehen. Sie ist nicht per se ein einzelnes Deployment-Artefakt, keine reine Laufzeiteinheit, und Austauschbarkeit setzt gleichen Kontrakt (nicht nur gleiche Signatur) voraus."
 },
 {
  "id": "c1q3",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R2",
  "type": "single",
  "q": "In einer Architekturdokumentation wird ein Subsystem an einer Stelle als Blackbox, an anderer als Whitebox beschrieben. Was trifft am ehesten zu?",
  "options": [
   "Die Blackbox nennt Schnittstellen, Verantwortung und zugesicherte Eigenschaften; die Whitebox zeigt zusätzlich die enthaltenen Bausteine und ihr Zusammenspiel.",
   "Blackbox und Whitebox unterscheiden sich darin, dass die Blackbox die Laufzeitsicht und die Whitebox die Bausteinsicht darstellt.",
   "Die Whitebox ist die eigentlich verbindliche Beschreibung; die Blackbox ist nur eine vereinfachte Vorstufe ohne eigenständigen Nutzen.",
   "Die Blackbox verbirgt die Schnittstelle des Bausteins, während die Whitebox sie offenlegt."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Blackbox = Außensicht (Schnittstelle/Verantwortung/Eigenschaften), Whitebox = zusätzlich der innere Aufbau.",
   "Falsch: es geht um die Sichtbarkeit der Interna, nicht um die Zuordnung zu Laufzeit- vs. Bausteinsicht.",
   "Falsch: die Blackbox hat eigenständigen Nutzen – Nutzer benötigen genau diese Außensicht.",
   "Falsch: die Blackbox legt die Schnittstelle offen und verbirgt nur die Interna."
  ],
  "explanation": "Blackbox = Außensicht (Schnittstelle, Verantwortung, zugesicherte Eigenschaften), Whitebox = zusätzlich die enthaltenen Bausteine. Beides ist nutzbringend; es ist keine Laufzeit-/Bausteinsicht-Frage, und die Schnittstelle wird gerade nicht verborgen."
 },
 {
  "id": "c1q4",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zu Architektursichten treffen zu?",
  "options": [
   "Die Bausteinsicht zeigt die statische Zerlegung des Systems in Bausteine und deren Beziehungen.",
   "Die Laufzeitsicht beschreibt das dynamische Zusammenspiel der Bausteine in konkreten Szenarien.",
   "Die Verteilungssicht bildet Bausteine bzw. Artefakte auf Hardware- und Ausführungsknoten ab.",
   "Sobald das System implementiert ist, ersetzt die Laufzeitsicht die Bausteinsicht.",
   "Jede Sicht muss alle Bausteine des Systems in identischer Detailtiefe enthalten."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Bausteinsicht = statische Zerlegung samt Beziehungen.",
   "Richtig: Laufzeitsicht = dynamisches Zusammenspiel in Szenarien.",
   "Richtig: Verteilungssicht = Abbildung auf Hardware-/Ausführungsknoten.",
   "Falsch: Sichten ergänzen einander und bestehen nebeneinander – keine ersetzt eine andere.",
   "Falsch: Sichten zeigen bewusst unterschiedliche Aspekte und Detailtiefen; sie müssen nur widerspruchsfrei sein."
  ],
  "explanation": "Architektur wird über mehrere sich ergänzende Sichten beschrieben (Kontext-, Baustein-, Laufzeit-, Verteilungssicht). Sie beleuchten unterschiedliche Aspekte desselben Systems und ersetzen einander nicht."
 },
 {
  "id": "c1q5",
  "chapter": 1,
  "lz": "LZ 01-04",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aufgaben gehören zum Kern der Rolle von Softwarearchitekt:innen?",
  "options": [
   "Qualitätsanforderungen gemeinsam mit Stakeholdern klären und schärfen.",
   "Tragende Entwurfsentscheidungen treffen, begründen und dokumentieren.",
   "Die Umsetzung begleiten und prüfen, ob Code und Architektur zusammenpassen.",
   "Die fachliche Priorisierung des Produkt-Backlogs eigenverantwortlich festlegen.",
   "Detaillierte Implementierungsvorgaben bis auf Methodenebene verbindlich vorschreiben, um Konsistenz zu sichern."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: das Klären von (v. a. Qualitäts-)Anforderungen ist Kernaufgabe.",
   "Richtig: tragende Entscheidungen treffen, begründen und dokumentieren gehört klar dazu.",
   "Richtig: die Umsetzung begleiten und Konsistenz prüfen ist Kernaufgabe.",
   "Falsch: die Backlog-Priorisierung verantwortet die Produktrolle (z. B. Product Owner); Architekt:innen beraten nur.",
   "Falsch: Vorgaben bis auf Methodenebene sind Überregulierung; der Detailentwurf bleibt beim Team."
  ],
  "explanation": "Architekt:innen klären Anforderungen, treffen/begründen Entscheidungen und begleiten die Umsetzung. Sie verantworten weder die fachliche Backlog-Priorisierung noch schreiben sie jede Methode vor."
 },
 {
  "id": "c1q6",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zu interner und externer Softwarequalität treffen zu?",
  "options": [
   "Externe Qualität zeigt sich im Betrieb des fertigen Systems (z. B. Performanz, Zuverlässigkeit) und ist für Nutzer wahrnehmbar.",
   "Niedrige interne Qualität (z. B. schlechte Wartbarkeit) verschlechtert langfristig oft auch die extern wahrnehmbare Qualität.",
   "Interne Qualität lässt sich vollständig über Blackbox-Tests des ausgelieferten Systems messen.",
   "Wartbarkeit ist eine externe Qualität, weil sie den Nutzer über Ausfallzeiten indirekt betrifft.",
   "Interne und externe Qualität sind voneinander unabhängig; man kann die eine optimieren, ohne die andere zu beeinflussen."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Richtig: externe Qualität ist von außen wahrnehmbar (z. B. Performanz, Zuverlässigkeit).",
   "Richtig: interne Mängel wirken sich über die Zeit auch extern aus (z. B. mehr Fehler, langsamere Änderungen).",
   "Falsch: interne Qualität zeigt sich in der Struktur (z. B. Wartbarkeit) und ist per Blackbox-Test nicht vollständig messbar.",
   "Falsch: Wartbarkeit ist eine interne Qualität; die indirekte Nutzerwirkung macht sie nicht zur externen.",
   "Falsch: beide beeinflussen sich – schlechte Struktur schlägt langfristig auf die Außensicht durch."
  ],
  "explanation": "Externe Qualität ist von außen wahrnehmbar, interne betrifft die Struktur. Beide sind gekoppelt: schlechte interne Qualität verschlechtert langfristig auch die externe. Interne Qualität ist nicht per Blackbox-Test vollständig messbar, und Wartbarkeit ist intern."
 },
 {
  "id": "c1q7",
  "chapter": 1,
  "lz": "LZ 01-02",
  "r": "R2",
  "type": "single",
  "q": "Ein Team trifft zentrale Architekturentscheidungen früh, obwohl noch nicht alle Anforderungen feststehen. Welche Aussage trifft am ehesten zu?",
  "options": [
   "Weil Wissen und Anforderungen anfangs unvollständig sind, werden Entscheidungen bewusst unter Unsicherheit getroffen und iterativ verfeinert.",
   "Das ist unkritisch, weil Architekturentscheidungen später ohne nennenswerten Aufwand revidierbar sind.",
   "Man sollte mit allen tragenden Entscheidungen warten, bis die Anforderungen vollständig und final vorliegen.",
   "Frühe Entscheidungen unter Unsicherheit lassen sich vermeiden, indem man vorab ein ausreichend detailliertes Gesamtdesign erstellt."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Wissen ist anfangs unvollständig, daher werden Entscheidungen früh, aber revidierbar getroffen und verfeinert.",
   "Falsch: tragende Architekturentscheidungen sind gerade oft teuer zu ändern.",
   "Falsch: auf vollständige Anforderungen zu warten (BDUF) ist unrealistisch und riskant.",
   "Falsch: ein detailliertes Vorab-Design beseitigt die anfängliche Unsicherheit nicht."
  ],
  "explanation": "Zu Beginn ist Wissen unvollständig; wichtige Entscheidungen werden früh getroffen und iterativ verfeinert. Sie sind meist nicht billig änderbar, das Warten auf finale Anforderungen ist untauglich, und ein Vorab-Design beseitigt Unsicherheit nicht."
 },
 {
  "id": "c1q8",
  "chapter": 1,
  "lz": "LZ 01-02",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zum Verhältnis von Architektur und Anforderungen treffen zu?",
  "options": [
   "Vor allem Qualitätsanforderungen (z. B. Performanz, Sicherheit) treiben tragende Architekturentscheidungen.",
   "Architektur und Anforderungen beeinflussen sich wechselseitig und werden iterativ geschärft.",
   "Funktionale Anforderungen bestimmen die Architektur weitgehend allein; Qualitätsanforderungen sind nachrangig.",
   "Randbedingungen (Constraints) wie vorgegebene Technologien sind für die Architektur unerheblich, solange die Anforderungen erfüllt sind.",
   "Erst wenn die Anforderungen vollständig und abgenommen sind, darf die Architekturarbeit beginnen."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Richtig: Qualitätsanforderungen sind die stärksten Architekturtreiber.",
   "Richtig: beide schärfen sich wechselseitig und iterativ.",
   "Falsch: gerade Qualitätsanforderungen prägen die Architektur stark, nicht nur funktionale.",
   "Falsch: Randbedingungen schränken den Lösungsraum spürbar ein und sind sehr wohl relevant.",
   "Falsch: Architekturarbeit beginnt iterativ, nicht erst nach final abgenommenen Anforderungen."
  ],
  "explanation": "Vor allem Qualitätsanforderungen treiben die Architektur, und beide schärfen sich wechselseitig. Funktionale Anforderungen allein genügen nicht, Randbedingungen sind relevant, und die Arbeit wartet nicht auf finale Anforderungen."
 },
 {
  "id": "c1q9",
  "chapter": 1,
  "lz": "LZ 01-04",
  "r": "R2",
  "type": "single",
  "q": "Welche der folgenden Tätigkeiten gehört am wenigsten zum Kern der Architekturrolle?",
  "options": [
   "Das detaillierte Interaktions- und Oberflächendesign (UX) der Benutzeroberflächen ausarbeiten.",
   "Übergreifende Querschnittskonzepte (z. B. Persistenz, Sicherheit, Fehlerbehandlung) festlegen.",
   "Architekturentscheidungen und deren Begründung dokumentieren und kommunizieren.",
   "Die Einhaltung der Architektur in der Implementierung prüfen und das Team beraten."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: das detaillierte UX-/Interaktionsdesign ist Aufgabe der UX-/UI-Gestaltung; die Architektur legt die GUI allenfalls als Querschnittskonzept grob fest, gestaltet sie aber nicht im Detail.",
   "Falsch (ist Kernaufgabe): Querschnittskonzepte festzulegen gehört klar zur Architekturrolle.",
   "Falsch (ist Kernaufgabe): Entscheidungen dokumentieren und kommunizieren ist zentral.",
   "Falsch (ist Kernaufgabe): die Umsetzung prüfen und beraten gehört dazu."
  ],
  "explanation": "Das detaillierte Oberflächen- und Interaktionsdesign verantwortet die UX-/UI-Gestaltung, nicht die Architekturrolle – diese legt die GUI höchstens als Querschnittskonzept grob fest. Querschnittskonzepte, Dokumentation/Kommunikation und die Umsetzungsbegleitung gehören dagegen dazu."
 },
 {
  "id": "k5",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Bewerten Sie jede Aussage: richtig oder falsch?",
  "categories": [
   "Richtig",
   "Falsch"
  ],
  "rows": [
   {
    "text": "Lose Kopplung und hohe Kohäsion sind gleichzeitig anzustrebende, einander ergänzende Ziele.",
    "cat": 0
   },
   {
    "text": "Eine Schnittstelle beschreibt den Vertrag eines Bausteins, nicht dessen interne Realisierung.",
    "cat": 0
   },
   {
    "text": "Der Begriff Komponente bezeichnet ausschließlich eine Laufzeiteinheit, nie einen Entwurfsbaustein.",
    "cat": 1
   },
   {
    "text": "Architekturentscheidungen stehen mit ihrer ersten Fassung endgültig fest und werden nicht mehr verfeinert.",
    "cat": 1
   },
   {
    "text": "Qualitätsanforderungen sind für die Architektur grundsätzlich nachrangig gegenüber funktionalen Anforderungen.",
    "cat": 1
   }
  ],
  "explanation": "Lose Kopplung/hohe Kohäsion sind ergänzende Ziele, und eine Schnittstelle beschreibt den Vertrag (nicht die Interna). Komponente ist keine reine Laufzeiteinheit, Entscheidungen werden iterativ verfeinert, und Qualitätsanforderungen sind gerade die stärksten Architekturtreiber."
 },
 {
  "id": "c1q10",
  "chapter": 1,
  "lz": "LZ 01-02",
  "r": "R1",
  "type": "multi",
  "q": "Welche zwei Aussagen beschreiben Kernziele von Softwarearchitektur?",
  "options": [
   "Komplexität beherrschbar halten und das Erreichen der geforderten Qualitätsziele unter den Randbedingungen unterstützen.",
   "Möglichst viele zukünftige Anforderungen bereits heute vorwegnehmen, damit später keine Änderungen mehr nötig sind.",
   "Vor allem festlegen, welche Technologien und Frameworks im Projekt eingesetzt werden.",
   "Primär die funktionale Vollständigkeit des Systems sicherstellen; Qualitätsmerkmale sind nachrangig.",
   "Sie schafft ein gemeinsames Verständnis des Systems bei den Stakeholdern."
  ],
  "correct": [
   0,
   4
  ],
  "optExpl": [
   "Richtig: beherrschbare Komplexität und das Erreichen der Qualitätsziele sind der Kern.",
   "Falsch: Vorwegnahme aller künftigen Anforderungen widerspricht YAGNI und ist kein Ziel.",
   "Falsch: die Technologieauswahl ist eine mögliche Folge von Architekturentscheidungen, nicht ihr Kernziel – Architektur ist nicht gleich Werkzeugauswahl.",
   "Falsch: funktionale Vollständigkeit allein greift zu kurz – gerade die Qualitätsziele stehen im Fokus.",
   "Richtig: gemeinsames Verständnis bei den Stakeholdern ist ein zentrales Ziel von Architektur."
  ],
  "explanation": "Ziel ist beherrschbare Komplexität und das Erreichen der Qualitätsziele unter Randbedingungen. „Alles auf Vorrat“ (gegen YAGNI), die bloße Technologieauswahl oder rein funktionale Vollständigkeit sind keine tragfähigen Kernziele."
 },
 {
  "id": "c1q11",
  "chapter": 1,
  "lz": "LZ 01-06",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen über Stakeholder einer Architektur treffen zu?",
  "options": [
   "Stakeholder sind alle Personen und Gruppen mit berechtigtem Interesse am System oder seiner Entwicklung.",
   "Auch Betrieb, Wartung, Auftraggeber und ggf. Behörden gehören dazu, nicht nur Endnutzer.",
   "Stakeholder sind nur diejenigen, die aktiv mit der Software arbeiten (die Endnutzer).",
   "Stakeholder mit widersprüchlichen Interessen kann es nicht geben; sonst wäre das Projekt nicht durchführbar.",
   "Die Ermittlung der Stakeholder ist einmalig zu Projektbeginn abgeschlossen und danach unveränderlich."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Richtig: entscheidend ist das berechtigte Interesse am System.",
   "Richtig: auch Betrieb, Wartung, Auftraggeber und externe Parteien zählen dazu.",
   "Falsch: Endnutzer sind nur eine von vielen Stakeholder-Gruppen.",
   "Falsch: widersprüchliche Interessen sind der Normalfall und müssen ausbalanciert werden.",
   "Falsch: Stakeholder-Ermittlung ist ein fortlaufender Vorgang, nicht einmalig abgeschlossen."
  ],
  "explanation": "Stakeholder sind alle mit berechtigten Belangen (Nutzer, Betrieb, Wartung, Auftraggeber, Behörden …). Sie sind nicht auf Endnutzer beschränkt, haben oft widersprüchliche Interessen, und ihre Ermittlung ist fortlaufend."
 },
 {
  "id": "c1q12",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R1",
  "type": "multi",
  "q": "Welche Eigenschaften kennzeichnen einen gut geschnittenen Baustein?",
  "options": [
   "Hohe Kohäsion – zusammengehörige Aufgaben sind gebündelt.",
   "Lose Kopplung – Abhängigkeiten laufen über wenige, klar definierte Schnittstellen.",
   "Er greift bei Bedarf direkt auf interne Datenstrukturen der Nachbarbausteine zu, um Umwege über Schnittstellen zu sparen.",
   "Je feingranularer der Schnitt (idealerweise ein Baustein je Klasse oder Methode), desto besser die Architektur.",
   "Er ist von möglichst vielen anderen Bausteinen abhängig, um deren Funktionalität breit wiederzuverwenden."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Richtig: hohe Kohäsion (zusammengehörige Aufgaben gebündelt) ist erwünscht.",
   "Richtig: lose Kopplung über klare Schnittstellen ebenfalls.",
   "Falsch: der direkte Zugriff auf Interna bricht die Kapselung und erhöht die Kopplung.",
   "Falsch: Granularität allein ist kein Gütemaß; Überzerteilung erhöht die Kopplung.",
   "Falsch: viele Abhängigkeiten bedeuten hohe Kopplung – Wiederverwendung rechtfertigt das nicht."
  ],
  "explanation": "Gut geschnitten = hohe Kohäsion und lose Kopplung über klare Schnittstellen. Direktzugriff auf Interna, maximale Feingranularität und viele Abhängigkeiten sind Anti-Muster (Kapselungsbruch bzw. hohe Kopplung)."
 },
 {
  "id": "c1q13",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zur Schnittstelle (Interface) eines Bausteins treffen zu?",
  "options": [
   "Sie definiert den nach außen sichtbaren Vertrag: angebotene und/oder benötigte Operationen samt Zusicherungen.",
   "Ein Baustein kann mehrere Schnittstellen anbieten, etwa je nach Nutzergruppe (Rollen-Schnittstellen).",
   "Zu einer vollständigen Schnittstellenbeschreibung gehört auch die konkrete interne Datenstruktur, mit der der Baustein arbeitet.",
   "Ändert sich die interne Implementierung, muss sich zwangsläufig auch die Schnittstelle ändern.",
   "Eine Schnittstelle umfasst nur die Signaturen; fachliche Vor- und Nachbedingungen (Kontrakt) sind kein Bestandteil."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Richtig: die Schnittstelle ist der nach außen sichtbare Vertrag.",
   "Richtig: ein Baustein kann mehrere (rollen-/nutzerspezifische) Schnittstellen anbieten.",
   "Falsch: die interne Datenstruktur ist ein Internum, kein Bestandteil des Vertrags.",
   "Falsch: die Schnittstelle soll gerade stabil bleiben, wenn sich die Implementierung ändert.",
   "Falsch: zum Kontrakt gehören auch Semantik sowie Vor- und Nachbedingungen, nicht nur Signaturen."
  ],
  "explanation": "Die Schnittstelle ist der Vertrag (angebotene/benötigte Operationen samt Zusicherungen); ein Baustein kann mehrere davon anbieten. Sie schreibt keine Interna vor, bleibt bei internen Änderungen stabil und umfasst mehr als reine Signaturen."
 },
 {
  "id": "c1q14",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zur Verantwortlichkeit (Responsibility) eines Bausteins treffen zu?",
  "options": [
   "Sie beschreibt die klar umrissene Aufgabe, für die der Baustein zuständig ist (das WAS).",
   "Idealerweise ist sie kohäsiv und klar von anderen Bausteinen abgegrenzt.",
   "Sie ergibt sich vollständig aus der Summe der öffentlich angebotenen Schnittstellenoperationen.",
   "Sie legt fest, mit welcher Technologie oder Bibliothek der Baustein umgesetzt wird (das WIE).",
   "Überlappende Verantwortlichkeiten zweier Bausteine erhöhen die Ausfallsicherheit."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Richtig: Verantwortlichkeit = die klar umrissene Aufgabe (das WAS).",
   "Richtig: sie sollte kohäsiv und klar abgegrenzt sein.",
   "Falsch: die Schnittstellenoperationen sind das WIE der Nutzung, nicht die Verantwortlichkeit selbst.",
   "Falsch: die Technologiewahl ist das WIE, nicht die Verantwortlichkeit.",
   "Falsch: überlappende Verantwortlichkeiten erzeugen Redundanz und Wartungsprobleme, keine Ausfallsicherheit."
  ],
  "explanation": "Verantwortlichkeit = die klar umrissene, kohäsive Aufgabe (das WAS). Sie ist nicht die Summe der Schnittstellenoperationen, nicht die technische Umsetzung (WIE), und Überlappungen sind schädlich, nicht nützlich."
 },
 {
  "id": "c1q15",
  "chapter": 1,
  "lz": "LZ 01-02",
  "r": "R1",
  "type": "multi",
  "q": "In einem Projekt weicht der Code mit der Zeit von der dokumentierten Architektur ab. Welche Aussagen treffen zu?",
  "options": [
   "Angestrebte Qualitäten (z. B. Wartbarkeit) entstehen nur, wenn der Code der Struktur folgt.",
   "Es droht Architekturerosion – Soll und Ist driften auseinander.",
   "Reviews oder toolgestützte Abhängigkeitsprüfungen können solche Abweichungen aufdecken.",
   "Solange die Dokumentation aktuell gehalten wird, sind Code-Abweichungen unkritisch.",
   "Abweichungen sind unkritisch, da eine Architektur nur eine unverbindliche Empfehlung ist."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: die Qualitäten stellen sich nur ein, wenn der Code der Struktur folgt.",
   "Richtig: das Auseinanderdriften von Soll und Ist ist genau die Architekturerosion.",
   "Richtig: Reviews und Abhängigkeitsanalysen decken solche Abweichungen auf.",
   "Falsch: aktuelle Doku hilft nicht, wenn der Code der Struktur nicht folgt.",
   "Falsch: Architektur ist verbindlich; Abweichungen untergraben die Zielerreichung."
  ],
  "explanation": "Qualitäten entstehen nur, wenn der Code der Architektur folgt; sonst droht Architekturerosion, die durch Reviews/Tooling aufdeckbar ist. Weder aktuelle Doku noch die Sicht auf Architektur als bloße Empfehlung machen Abweichungen unkritisch."
 },
 {
  "id": "c1q16",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R2",
  "type": "single",
  "q": "Wie verhält sich Softwarearchitektur zu den verschiedenen Abstraktionsebenen eines Systems?",
  "options": [
   "Sie beschreibt Strukturen auf mehreren, ineinander geschachtelten Ebenen (System, Subsysteme, Bausteine); Prinzipien wie Kohäsion und Kopplung greifen dabei rekursiv.",
   "Architekturrelevant ist nur die oberste Systemebene; jede feinere Zerlegung zählt ausschließlich zum Detailentwurf.",
   "Die Ebenen sind strikt getrennt: Entscheidungen einer Ebene haben keine Auswirkungen auf tiefere Ebenen.",
   "Die Anzahl der Abstraktionsebenen ist durch den Lehrplan fest auf drei vorgegeben."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Strukturen werden auf mehreren geschachtelten Ebenen betrachtet, dieselben Prinzipien greifen rekursiv.",
   "Falsch: die Grenze zwischen Architektur und Detailentwurf ist fließend, nicht auf die oberste Ebene beschränkt.",
   "Falsch: Entscheidungen höherer Ebenen rahmen und beeinflussen die tieferen.",
   "Falsch: es gibt keine fest vorgegebene Ebenenzahl."
  ],
  "explanation": "Architektur betrachtet Strukturen hierarchisch auf mehreren Ebenen, wobei Kohäsion/Kopplung rekursiv gelten. Die Grenze zum Detailentwurf ist fließend, Ebenen beeinflussen sich, und die Ebenenzahl ist nicht fix vorgegeben."
 },
 {
  "id": "c1q17",
  "chapter": 1,
  "lz": "LZ 01-02",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen über den Nutzen von Softwarearchitektur treffen zu?",
  "options": [
   "Sie macht Komplexität beherrschbar und unterstützt arbeitsteiliges Arbeiten im Team.",
   "Sie schafft eine gemeinsame Grundlage für die Kommunikation zwischen den Stakeholdern.",
   "Sie unterstützt das gezielte Erreichen von Qualitätszielen, indem sie tragende Entscheidungen bewusst macht.",
   "Sie stellt sicher, dass jede künftige Anforderung ohne strukturelle Änderung umsetzbar bleibt.",
   "Sie macht Detailentwurf und Codierung weitgehend überflüssig, da die tragenden Entscheidungen bereits feststehen."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Komplexität beherrschen und Arbeitsteilung ermöglichen sind Kernnutzen.",
   "Richtig: sie schafft eine gemeinsame Kommunikationsgrundlage.",
   "Richtig: durch bewusste tragende Entscheidungen werden Qualitätsziele gezielt adressiert.",
   "Falsch: keine Architektur nimmt jede künftige Änderung strukturfrei auf – das wäre Über-Flexibilität und widerspricht YAGNI.",
   "Falsch: Architektur liefert Leitplanken, ersetzt aber weder Detailentwurf noch Implementierung."
  ],
  "explanation": "Architektur beherrscht Komplexität, ermöglicht Arbeitsteilung und Kommunikation und unterstützt das Erreichen von Qualitätszielen. Sie kann aber weder jede künftige Änderung strukturfrei auffangen noch Detailentwurf und Implementierung ersetzen."
 },
 {
  "id": "c1q18",
  "chapter": 1,
  "lz": "LZ 01-02",
  "r": "R2",
  "type": "single",
  "q": "Was kennzeichnet ein iteratives (evolutionäres) Vorgehen bei der Architekturarbeit?",
  "options": [
   "Tragende Entscheidungen werden früh getroffen, aber über Iterationen anhand neuer Erkenntnisse überprüft und verfeinert.",
   "Die Architektur wird zu Beginn vollständig festgelegt (Big Design Up Front) und danach nicht mehr angetastet.",
   "Die Architektur ergibt sich rein emergent aus dem Code, ohne bewusste übergreifende Entscheidungen.",
   "Iteratives Vorgehen bedeutet, tragende Entscheidungen möglichst lange aufzuschieben, bis maximale Sicherheit besteht."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: wichtige Entscheidungen früh, dann Verfeinerung über die Iterationen.",
   "Falsch: ein vollständiges, unveränderliches Vorab-Design (BDUF) ist gerade nicht gemeint.",
   "Falsch: rein emergent ohne bewusste Entscheidungen führt zu ungeplanter Struktur.",
   "Falsch: tragende Entscheidungen werden früh getroffen, nicht bis zur maximalen Sicherheit aufgeschoben."
  ],
  "explanation": "Iterativ heißt: tragende Entscheidungen früh, danach Überprüfung und Verfeinerung. Weder komplettes Vorab-Design (BDUF) noch rein emergentes Wachstum noch das Hinauszögern aller Entscheidungen entsprechen dem."
 },
 {
  "id": "c1q19",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R2",
  "type": "single",
  "q": "Worin unterscheiden sich Architektur und Detailentwurf (Design)?",
  "options": [
   "Architektur trifft die übergreifenden, weitreichenden Strukturentscheidungen; der Detailentwurf konkretisiert innerhalb dieser Vorgaben.",
   "Die Grenze ist formal und projektunabhängig festgelegt: Unterhalb einer bestimmten Bausteingröße beginnt zwingend der Detailentwurf.",
   "Der Unterschied liegt allein im Zeitpunkt: Architektur entsteht in einer frühen Phase, der Detailentwurf zwingend erst danach.",
   "Detailentwurf ist qualitativ weniger anspruchsvoll und für die Zielerreichung des Systems unerheblich."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Architektur = weitreichende Strukturentscheidungen, Detailentwurf verfeinert innerhalb dieser.",
   "Falsch: die Grenze ist fließend und kontextabhängig, nicht formal an einer Größe.",
   "Falsch: beide verzahnen sich, es ist keine reine Frage der Reihenfolge.",
   "Falsch: der Detailentwurf ist anspruchsvoll und für die Zielerreichung durchaus relevant."
  ],
  "explanation": "Architektur trifft große, folgenreiche Strukturentscheidungen; der Detailentwurf konkretisiert darin. Die Grenze ist fließend/kontextabhängig, nicht rein zeitlich getrennt, und der Detailentwurf ist keineswegs unerheblich."
 },
 {
  "id": "c1q20",
  "chapter": 1,
  "lz": "LZ 01-06",
  "r": "R1",
  "type": "multi",
  "q": "Welche Rolle spielen Kommunikationsfähigkeiten für Softwarearchitekt:innen?",
  "options": [
   "Sie sind zentral, um zwischen Stakeholdern zu vermitteln und Entscheidungen adressatengerecht zu begründen.",
   "Kommunikation ist vor allem beim Präsentieren der fertigen Architektur wichtig; während des Entwurfs zählt primär die technische Arbeit.",
   "Mündliche Abstimmung ist der schriftlichen Begründung vorzuziehen, weil sie schneller ist und Missverständnisse direkt klärt.",
   "Kommunikation richtet sich vor allem an das Entwicklungsteam; fachliche Stakeholder werden über das Produktmanagement erreicht.",
   "Sie sind über den gesamten Entwurf hinweg wichtig – nicht erst beim Präsentieren der fertigen Architektur."
  ],
  "correct": [
   0,
   4
  ],
  "optExpl": [
   "Richtig: früh und laufend vermitteln und adressatengerecht begründen sind Kernkompetenzen.",
   "Falsch: Kommunikation ist gerade während des Entwurfs entscheidend (Anliegen klären, Feedback einholen), nicht erst bei der Präsentation.",
   "Falsch: mündliche Abstimmung ist flüchtig; tragende Entscheidungen brauchen nachvollziehbare, dauerhafte schriftliche Begründung.",
   "Falsch: Architekt:innen kommunizieren direkt mit allen relevanten Stakeholdern, nicht nur mittelbar über das Produktmanagement.",
   "Richtig: Kommunikation ist gerade früh und laufend entscheidend, nicht nur am Ende."
  ],
  "explanation": "Kommunikation ist früh und laufend zentral, um zwischen allen Stakeholdern zu vermitteln und Entscheidungen zu begründen. Sie findet nicht erst bei der Präsentation statt, ersetzt die schriftliche Begründung nicht und beschränkt sich nicht auf das Team."
 },
 {
  "id": "c1q21",
  "chapter": 1,
  "lz": "LZ 01-02",
  "r": "R2",
  "type": "single",
  "q": "Wozu dient ein früher Durchstich bzw. Proof of Concept in der Architekturarbeit?",
  "options": [
   "Zentrale technische Risiken und die Machbarkeit tragender Entscheidungen früh zu überprüfen.",
   "Eine bereits produktionsreife erste Version der wichtigsten Features an die Nutzer auszuliefern.",
   "Den Gesamtaufwand des Projekts verbindlich und abschließend zu schätzen.",
   "Die fachliche Vollständigkeit des Systems end-to-end nachzuweisen."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: ein Durchstich prüft riskante Annahmen und die Machbarkeit früh.",
   "Falsch: das beschreibt eher ein produktives Inkrement/MVP; ein Durchstich ist bewusst nicht produktionsreif.",
   "Falsch: eine verbindliche Endaufwandsschätzung liefert er nicht.",
   "Falsch: er implementiert nicht die vollständige Fachlichkeit."
  ],
  "explanation": "Ein Durchstich prüft riskante Annahmen und die Machbarkeit tragender Entscheidungen früh. Er ist bewusst nicht produktionsreif (anders als ein MVP/Inkrement), nicht fachlich vollständig und liefert keine verbindliche Aufwandsschätzung."
 },
 {
  "id": "c1q22",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R1",
  "type": "multi",
  "q": "Was kennzeichnet eine „gute“ Softwarearchitektur?",
  "options": [
   "Sie erfüllt die geforderten Qualitätsziele unter den gegebenen Randbedingungen.",
   "Sie ist so einfach und verständlich wie möglich – aber nicht einfacher, als die Aufgabe es zulässt.",
   "Sie setzt möglichst aktuelle Technologien ein, um zukunftssicher zu wirken.",
   "Sie ist maximal flexibel und für jede denkbare künftige Anforderung vorbereitet.",
   "Sie ist objektiv und projektunabhängig gut, sobald sie einem anerkannten Muster (z. B. Schichten) folgt."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Richtig: die geforderten Qualitätsziele unter den Randbedingungen zu erfüllen ist das Maß.",
   "Richtig: angemessene Einfachheit ist ein Gütemerkmal.",
   "Falsch: Technologievielfalt um ihrer selbst willen ist kein Gütekriterium.",
   "Falsch: Über-Flexibilität auf Vorrat widerspricht YAGNI.",
   "Falsch: gute Architektur ist kontextabhängig; ein Muster allein macht sie nicht gut."
  ],
  "explanation": "Gut = Qualitätsziele unter Randbedingungen erfüllt und angemessen einfach. Modernste Technik, Über-Flexibilität auf Vorrat (gegen YAGNI) oder das bloße Befolgen eines Musters sind keine Gütekriterien – Güte ist kontextabhängig."
 },
 {
  "id": "c1q23",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R2",
  "type": "single",
  "q": "Wie grenzt man die Begriffe „Baustein“ und „Komponente“ am besten ab?",
  "options": [
   "„Baustein“ ist der konzeptionelle Oberbegriff; eine Komponente ist ein konkreter Baustein mit klar definierten, vertraglich beschriebenen Schnittstellen.",
   "Ein Baustein ist stets eine Entwurfszeiteinheit, eine Komponente stets eine Laufzeiteinheit.",
   "Die Begriffe sind vollständig synonym und lediglich unterschiedliche Übersetzungen desselben Konzepts.",
   "Eine Komponente ist definitionsgemäß größer als ein Baustein und fasst mehrere Bausteine zusammen."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Baustein = Oberbegriff, Komponente = konkreter Baustein mit definierten Schnittstellen.",
   "Falsch: es ist keine Laufzeit-/Entwurfszeit-Unterscheidung.",
   "Falsch: sie sind nicht exakt synonym – Komponente ist spezifischer.",
   "Falsch: es ist keine Frage der Größe."
  ],
  "explanation": "„Baustein“ ist der allgemeine, konzeptionelle Oberbegriff; eine Komponente ist dessen konkretere Ausprägung mit definierten Schnittstellen. Es ist weder eine Laufzeit-/Entwurfszeit- noch eine Größenfrage und nicht bloß synonym."
 },
 {
  "id": "c1q24",
  "chapter": 1,
  "lz": "LZ 01-05",
  "r": "R2",
  "type": "single",
  "q": "Warum verzichtet der CPSA-Foundation-Lehrplan bewusst auf eine einzige, verbindliche Definition von „Softwarearchitektur“?",
  "options": [
   "Weil zahlreiche etablierte Definitionen existieren und man deren gemeinsame Kernaspekte (Bausteine, Beziehungen, Entscheidungen) nutzt.",
   "Weil eine verbindliche Definition den Lösungsraum einengen und Innovation behindern würde.",
   "Weil Definitionen je nach Programmiersprache unterschiedlich ausfallen müssen.",
   "Weil die Definition dem jeweiligen Zertifizierungslevel überlassen wird."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: viele anerkannte Definitionen existieren; genutzt wird deren gemeinsame Schnittmenge.",
   "Falsch: eine Definition würde den Lösungsraum nicht in relevanter Weise einengen – das ist nicht der Grund.",
   "Falsch: der Architekturbegriff ist nicht programmiersprachenabhängig.",
   "Falsch: die Definition ist nicht dem Zertifizierungslevel überlassen."
  ],
  "explanation": "Es gibt viele anerkannte Definitionen; der Lehrplan nutzt deren gemeinsame Kernaspekte (Bausteine, Beziehungen, tragende Entscheidungen). Weder Innovationsschutz, Sprachabhängigkeit noch Levelbindung sind der Grund."
 },
 {
  "id": "c1q25",
  "chapter": 1,
  "lz": "LZ 01-05",
  "r": "R3",
  "type": "single",
  "q": "Auf welche Ebene zielt der CPSA-Foundation-Stoff in erster Linie?",
  "options": [
   "Auf die Architektur eines einzelnen Softwaresystems.",
   "Auf die unternehmensweite Enterprise-Architektur, die alle Systeme und Geschäftsprozesse integriert.",
   "Auf die Architektur einzelner Klassen und Methoden im Detailentwurf.",
   "Auf die Auswahl und Konfiguration konkreter Cloud- und Netzinfrastruktur."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Foundation zielt auf die Architektur eines einzelnen Systems.",
   "Falsch: Enterprise-Architektur (über alle Systeme) liegt oberhalb dieser Ebene.",
   "Falsch: Klassen/Methoden gehören zum Detailentwurf, nicht zum Fokus von Foundation.",
   "Falsch: konkrete Infrastruktur-Auswahl ist nicht der primäre Fokus."
  ],
  "explanation": "Foundation behandelt die Architektur eines einzelnen Systems. Enterprise-Architektur, Detailentwurf (Klassen/Methoden) und konkrete Infrastruktur liegen ober- bzw. unterhalb dieses Fokus."
 },
 {
  "id": "c1q26",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zum Strukturbegriff in der Softwarearchitektur treffen zu?",
  "options": [
   "Jedes System besitzt mindestens eine Struktur – notfalls eine ungeplante, gewachsene.",
   "Zur Architektur gehören sowohl statische Strukturen als auch das Verhalten zur Laufzeit.",
   "Ein System hat typischerweise mehrere Strukturen, die durch unterschiedliche Sichten beleuchtet werden.",
   "Nur die explizit dokumentierten Strukturen existieren real im System.",
   "Eine Struktur besteht allein aus Bausteinen; deren Beziehungen sind für den Strukturbegriff unerheblich."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: jedes System hat mindestens eine (ggf. ungeplante) Struktur.",
   "Richtig: Architektur schließt statische Struktur und Laufzeitverhalten ein.",
   "Richtig: typischerweise gibt es mehrere Strukturen, dargestellt über verschiedene Sichten.",
   "Falsch: auch undokumentierte, implizite Strukturen sind real vorhanden.",
   "Falsch: Beziehungen sind zwingender Teil jeder Struktur."
  ],
  "explanation": "Jedes System hat mindestens eine (ggf. ungewollte) Struktur; Architektur schließt Laufzeitverhalten ein, und Systeme haben mehrere Strukturen/Sichten. Auch undokumentierte Strukturen existieren, und Beziehungen gehören zwingend dazu."
 },
 {
  "id": "c1q27",
  "chapter": 1,
  "lz": "LZ 01-07",
  "r": "R2",
  "type": "single",
  "q": "Welche Rolle spielen Daten und Datenmodelle für die Softwarearchitektur?",
  "options": [
   "Das Datenmodell ist eine tragende Architekturentscheidung – meist langlebig und nachträglich teuer zu ändern.",
   "Das Datenmodell ist ein reines Implementierungsdetail der Persistenzschicht ohne Einfluss auf den Bausteinschnitt.",
   "Das Datenmodell wird sinnvollerweise erst festgelegt, nachdem die Architektur vollständig steht.",
   "Das Datenmodell ist beliebig austauschbar, weil moderne ORMs es vollständig von der Architektur entkoppeln."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: das Datenmodell ist tragend, langlebig und teuer zu ändern.",
   "Falsch: es prägt die Architektur und den Bausteinschnitt stark, ist kein bloßes Detail.",
   "Falsch: Datenmodell und Architektur entstehen wechselseitig, nicht streng nacheinander.",
   "Falsch: ORMs kapseln den Zugriff, entkoppeln aber nicht das prägende Datenmodell von der Architektur."
  ],
  "explanation": "Das Datenmodell ist eine tragende, langlebige Entscheidung (vergleichbar der „Statik“ eines Gebäudes). Es ist kein bloßes Persistenzdetail, keine nachgelagerte Entscheidung und wird von ORMs nicht wirklich von der Architektur entkoppelt."
 },
 {
  "id": "c1q28",
  "chapter": 1,
  "lz": "LZ 01-07",
  "r": "R2",
  "type": "single",
  "q": "Auf welchen Abstraktionsebenen werden Datenmodelle typischerweise beschrieben?",
  "options": [
   "Konzeptionell (fachlich), logisch (technologieneutral strukturiert) und physisch (konkrete Umsetzung).",
   "Konzeptionell, logisch und normalisiert – wobei „physisch“ nur ein anderes Wort für „logisch“ ist.",
   "Nur logisch und physisch; eine konzeptionelle Ebene gibt es beim Datenmodell nicht.",
   "Auf Kontext-, Baustein- und Verteilungsebene – analog zu den Architektursichten."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: die drei üblichen Ebenen sind konzeptionell, logisch und physisch.",
   "Falsch: Normalisierung ist eine Technik auf der logischen Ebene, kein Ersatz für „physisch“.",
   "Falsch: die konzeptionelle (fachliche) Ebene existiert sehr wohl.",
   "Falsch: Kontext/Baustein/Verteilung sind Architektursichten, keine Datenmodell-Ebenen."
  ],
  "explanation": "Datenmodelle werden konzeptionell (fachlich), logisch (technologieneutral) und physisch (konkrete Umsetzung) beschrieben. Normalisierung ist eine logische Technik, die konzeptionelle Ebene existiert, und Architektursichten sind etwas anderes."
 },
 {
  "id": "c1q29",
  "chapter": 1,
  "lz": "LZ 01-07",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zum Zusammenhang von Datenmodell und Architektur treffen zu?",
  "options": [
   "Datenhoheit (wer welche Daten besitzt und ändern darf) beeinflusst den fachlichen Schnitt der Bausteine.",
   "Ein von vielen Bausteinen direkt gemeinsam genutztes Datenmodell kann die Kopplung stark erhöhen.",
   "Der Bausteinschnitt und das Datenmodell lassen sich unabhängig voneinander frei wählen.",
   "Bei Microservices ist Datenhoheit unwichtig, solange alle Services dieselbe zentrale Datenbank nutzen.",
   "Ein normalisiertes zentrales Schema entkoppelt die Bausteine grundsätzlich besser als getrennte Datenhaltung."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Richtig: Datenhoheit prägt den fachlichen Bausteinschnitt.",
   "Richtig: ein geteiltes, direkt genutztes Datenmodell koppelt die Bausteine stark.",
   "Falsch: Datenmodell und Schnitt hängen zusammen und sind nicht unabhängig frei wählbar.",
   "Falsch: gerade bei Microservices ist Datenhoheit zentral (eigene Datenhaltung je Service); eine geteilte DB ist ein Anti-Muster.",
   "Falsch: ein geteiltes zentrales Schema koppelt eher stärker; getrennte Datenhaltung entkoppelt besser."
  ],
  "explanation": "Datenhoheit prägt den Bausteinschnitt, und ein geteiltes, direkt genutztes Datenmodell koppelt stark. Schnitt und Datenmodell hängen zusammen; bei Microservices ist eigene Datenhaltung je Service maßgeblich, ein zentrales Schema entkoppelt nicht besser."
 },
 {
  "id": "c2q1",
  "chapter": 2,
  "lz": "LZ 02-02",
  "r": "R1",
  "type": "multi",
  "q": "In einem Projekt werden folgende Aussagen zur Abgrenzung von funktionalen Anforderungen, Qualitätsanforderungen und Randbedingungen gemacht. Welche treffen zu?",
  "options": [
   "Eine Randbedingung schränkt den Lösungsraum ein, ist selbst aber weder eine Funktion noch eine Qualität des Systems.",
   "Qualitätsanforderungen und Randbedingungen können sich auf dieselbe Eigenschaft beziehen: „schnell reagieren“ ist eine Qualitätsanforderung, „auf vorhandener 5-Jahre-alter Hardware laufen“ eine Randbedingung.",
   "Ob eine Vorgabe funktionale Anforderung oder Qualitätsanforderung ist, hängt allein davon ab, wie wichtig sie dem Auftraggeber ist.",
   "Eine Randbedingung ist eine besonders verbindliche funktionale Anforderung und wird deshalb höher priorisiert.",
   "Funktionale Anforderungen beschreiben, WAS das System leistet; Qualitätsanforderungen, WIE GUT es das tut."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Richtig: Randbedingungen grenzen den Lösungsraum ein, sind selbst weder Funktion noch Qualität.",
   "Richtig: Dieselbe Eigenschaft kann als Qualitätsanforderung (gefordertes Verhalten) und als Randbedingung (unveränderbare Vorgabe) auftreten – die Unterscheidung liegt in der Beeinflussbarkeit, nicht im Thema.",
   "Falsch (Near-Miss): Die Zuordnung folgt der Art (WAS vs. WIE GUT), nicht der Wichtigkeit; auch unwichtige Vorgaben behalten ihre Kategorie.",
   "Falsch: Eine Randbedingung ist keine funktionale Anforderung, sondern eine vorgegebene Grenze; Priorität ist ein anderes Konzept.",
   "Richtig: Genau diese WAS/WIE-GUT-Trennung unterscheidet funktionale von Qualitätsanforderungen."
  ],
  "explanation": "Randbedingungen grenzen den Lösungsraum ein und sind weder Funktion noch Qualität; dieselbe Eigenschaft kann als Qualitätsanforderung und (als unveränderbare Vorgabe) als Randbedingung auftreten. Die Zuordnung folgt der Art (WAS vs. WIE GUT), nicht der Wichtigkeit, und eine Randbedingung ist keine „wichtige“ funktionale Anforderung."
 },
 {
  "id": "c2q2",
  "chapter": 2,
  "lz": "LZ 02-03",
  "r": "R1",
  "type": "multi",
  "q": "Ein Team betrachtet Qualitätsanforderungen zunächst als „nachgelagert“ und will sie erst nach der funktionalen Umsetzung angehen. Welche Aussagen treffen zu?",
  "options": [
   "Qualitätsanforderungen sind maßgebliche Architektur-Treiber; werden sie spät berücksichtigt, sind Strukturänderungen oft teuer oder kaum noch möglich.",
   "Ob eine Qualitätsanforderung erfüllbar ist, hängt wesentlich davon ab, ob die Architektur sie ermöglicht – nicht nur davon, ob am Ende getestet wird.",
   "Funktionale Anforderungen und Qualitätsanforderungen sind gleichrangig wichtig; welche die Architektur stärker prägt, hängt vom konkreten System ab.",
   "Solange alle funktionalen Anforderungen erfüllt sind, ergeben sich die Qualitätsmerkmale von selbst.",
   "Qualitätsanforderungen betreffen im Wesentlichen die Benutzeroberfläche und sind daher spät ausreichend adressierbar."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Qualitätsanforderungen treiben Strukturentscheidungen; spätes Nachrüsten ist teuer.",
   "Richtig: Erfüllbarkeit hängt an der Struktur – Testen allein erzeugt keine Qualität.",
   "Richtig (subtil): Beide Anforderungsarten sind wichtig; die stärkere Architekturprägung geht in der Praxis oft, aber nicht zwingend von den Qualitätsanforderungen aus – das ist systemabhängig.",
   "Falsch (Trap): Qualitätsmerkmale ergeben sich nicht automatisch aus erfüllter Funktionalität, sondern müssen gezielt entworfen werden.",
   "Falsch: Qualitätsanforderungen betreffen die gesamte Architektur, nicht vorwiegend die Oberfläche."
  ],
  "explanation": "Qualitätsanforderungen prägen die Architektur maßgeblich und müssen früh berücksichtigt werden, weil spätes Nachrüsten teuer ist; ihre Erfüllbarkeit hängt an der Struktur. Sie ergeben sich nicht von selbst aus Funktionalität und betreffen nicht nur die Oberfläche. Die Aussage, beide Anforderungsarten seien wichtig und die stärkere Prägung sei systemabhängig, ist korrekt und differenzierter als ein pauschales „Qualität schlägt Funktion“."
 },
 {
  "id": "c2q3",
  "chapter": 2,
  "lz": "LZ 02-02",
  "r": "R2",
  "type": "multi",
  "q": "Welche der folgenden Vorgaben sind Randbedingungen (Constraints)?",
  "options": [
   "Aus rechtlichen Gründen müssen personenbezogene Daten in einem Rechenzentrum innerhalb der EU gespeichert werden.",
   "Es ist die im Unternehmen bereits lizenzierte relationale Datenbank zu verwenden.",
   "Die Suche muss 95 % der Anfragen in unter einer Sekunde beantworten.",
   "Berichte müssen als PDF exportierbar sein.",
   "Das Projektbudget ist auf einen fixen Betrag gedeckelt."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Richtig: Eine rechtlich/regulatorisch vorgeschriebene Speicherorts-Vorgabe ist eine Randbedingung.",
   "Richtig: Eine vorgeschriebene, bereits vorhandene Technologie ist eine technische Randbedingung.",
   "Falsch (Near-Miss): Eine geforderte Antwortzeit ist eine Qualitätsanforderung (Performanz), keine Randbedingung.",
   "Falsch: PDF-Export beschreibt eine Funktion – funktionale Anforderung.",
   "Richtig: Ein fixes Budget ist eine organisatorische Randbedingung."
  ],
  "explanation": "Regulatorische Speicherorts-Vorgaben, vorgeschriebene Technologien und ein fixes Budget sind Randbedingungen (rechtlich, technisch, organisatorisch). Eine geforderte Antwortzeit ist eine Qualitätsanforderung, der PDF-Export eine funktionale Anforderung."
 },
 {
  "id": "c2q4",
  "chapter": 2,
  "lz": "LZ 02-04",
  "r": "R1",
  "type": "single",
  "q": "Ein Stakeholder fordert: „Das System soll schnell sein.“ Wie macht man diese Anforderung am ehesten überprüfbar?",
  "options": [
   "Durch ein Qualitätsszenario mit Auslöser, Umgebung/Kontext und einem messbaren Antwortmaß (z. B. „95 % der Suchen unter 1 s bei Volllast“).",
   "Indem man ein pauschales Antwortmaß von „unter 1 Sekunde“ festlegt, ohne Auslöser und Betriebszustand zu benennen.",
   "Indem man die Anforderung als Randbedingung „performante Programmiersprache verwenden“ formuliert.",
   "Indem man vereinbart, dass das Team „schnell“ nach eigenem Ermessen bewertet."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Ein vollständiges Qualitätsszenario (Auslöser, Kontext, messbares Antwortmaß) macht die Anforderung eindeutig prüfbar.",
   "Falsch (Near-Miss): Eine bloße Zahl ohne Auslöser und Lastkontext ist nur scheinbar präzise – „unter 1 s“ ist ohne definierte Bedingungen nicht eindeutig prüfbar.",
   "Falsch: Eine Technologie-Randbedingung präzisiert die Qualitätsanforderung nicht und legt eine Lösung fest.",
   "Falsch: Ein subjektives Urteil bleibt vage und ist gerade nicht messbar."
  ],
  "explanation": "Überprüfbar wird die Anforderung erst durch ein vollständiges Qualitätsszenario mit Auslöser, Umgebung und messbarem Antwortmaß. Eine nackte Zahl ohne Kontext ist nur scheinbar präzise, eine Technologie-Randbedingung verwechselt Anforderung und Lösung, und ein subjektives Urteil ist nicht messbar."
 },
 {
  "id": "c2q5",
  "chapter": 2,
  "lz": "LZ 02-01",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zur Rolle der Architekt:innen bei der Klärung von Anforderungen treffen zu?",
  "options": [
   "Architekt:innen hinterfragen Anforderungen aktiv, decken Lücken und Widersprüche auf und schärfen sie mit.",
   "Sie machen implizite Erwartungen und Qualitätsanforderungen explizit, die im Anforderungsdokument oft fehlen.",
   "Die Verantwortung für die fachliche Priorisierung der Anforderungen liegt letztlich beim Auftraggeber bzw. den fachlichen Stakeholdern.",
   "Sie übernehmen die vorgelegten Anforderungen unverändert, da deren Klärung ausschließlich Sache der Business-Analyse ist.",
   "Da vollständige Anforderungen zu Projektbeginn vorliegen, ist eine spätere Klärung nicht erforderlich."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Aktives Hinterfragen und Schärfen gehört zur Architekturrolle.",
   "Richtig: Gerade implizite Qualitätsanforderungen müssen von der Architektur herausgearbeitet werden.",
   "Richtig (subtil): Architekt:innen beraten und liefern Grundlagen, doch die fachliche Priorisierung verantworten letztlich die fachlichen Stakeholder/der Auftraggeber.",
   "Falsch (Trap): Die Architektur übernimmt Anforderungen nicht passiv; Klärung ist eine geteilte Verantwortung.",
   "Falsch: Anforderungen liegen zu Beginn selten vollständig vor und werden fortlaufend geklärt."
  ],
  "explanation": "Architekt:innen klären Anforderungen aktiv mit und machen implizites, oft qualitätsbezogenes Wissen explizit; die fachliche Priorisierung verantworten aber die fachlichen Stakeholder. Anforderungen werden nicht passiv übernommen und liegen selten vollständig vor."
 },
 {
  "id": "c2q6",
  "chapter": 2,
  "lz": "LZ 02-03",
  "r": "R2",
  "type": "single",
  "q": "Ein Team diskutiert, welche der genannten Eigenschaften ein Hauptmerkmal (Top-Level-Characteristic) des Produktqualitätsmodells der ISO/IEC 25010:2023 ist. Was trifft zu?",
  "options": [
   "Wartbarkeit (Maintainability) ist ein Hauptmerkmal.",
   "Skalierbarkeit (Scalability) ist ein eigenständiges Hauptmerkmal.",
   "Performanz (Performance Efficiency) ist ein Unteraspekt der Zuverlässigkeit.",
   "Portabilität (Portability) ist in der 2023-Fassung weiterhin ein eigenständiges Hauptmerkmal."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Wartbarkeit ist eines der Hauptmerkmale der ISO 25010.",
   "Falsch (Near-Miss): Skalierbarkeit ist kein eigenständiges Hauptmerkmal, sondern ein Aspekt (u. a. der Performanz-/Flexibilitätsbetrachtung).",
   "Falsch: Performanz (Performance Efficiency) ist selbst ein Hauptmerkmal, kein Unteraspekt der Zuverlässigkeit.",
   "Falsch: Portabilität wurde 2023 in das breitere Hauptmerkmal „Flexibilität“ überführt und existiert nicht mehr eigenständig unter diesem Namen."
  ],
  "explanation": "Wartbarkeit ist ein Hauptmerkmal der ISO 25010. Skalierbarkeit ist kein eigenständiges Hauptmerkmal; Performanz (Performance Efficiency) ist selbst ein Hauptmerkmal und kein Unteraspekt der Zuverlässigkeit; Kompatibilität besteht weiterhin."
 },
 {
  "id": "c2q7",
  "chapter": 2,
  "lz": "LZ 02-02",
  "r": "R1",
  "type": "multi",
  "q": "Welche der folgenden Aussagen beschreiben funktionale Anforderungen?",
  "options": [
   "Der Nutzer kann Rechnungen als PDF exportieren.",
   "Das System versendet nach jeder Bestellung eine Bestätigungs-E-Mail.",
   "Antworten der Suche erscheinen in unter 200 ms.",
   "Das System ist rund um die Uhr zu 99,9 % verfügbar.",
   "Ein Sachbearbeiter kann eine Bestellung stornieren."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Richtig: PDF-Export beschreibt, WAS das System tut – eine Funktion.",
   "Richtig: Das Versenden einer E-Mail ist eine beschriebene Funktion.",
   "Falsch (Near-Miss): Eine Antwortzeit beschreibt WIE GUT – Qualitätsanforderung (Performanz).",
   "Falsch: Verfügbarkeit ist eine Qualitätsanforderung, keine Funktion.",
   "Richtig: Stornieren ist eine vom System bereitgestellte Funktion."
  ],
  "explanation": "PDF-Export, E-Mail-Versand und Stornieren beschreiben, WAS das System tut – funktionale Anforderungen. Antwortzeit und Verfügbarkeit beschreiben, WIE GUT – Qualitätsanforderungen."
 },
 {
  "id": "k1",
  "chapter": 2,
  "lz": "LZ 02-03",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Ordnen Sie jede Aussage zu: funktionale Anforderung oder Qualitätsanforderung?",
  "categories": [
   "Funktionale Anforderung",
   "Qualitätsanforderung"
  ],
  "rows": [
   {
    "text": "Nach einem Serverausfall nimmt das System den Betrieb innerhalb von 30 Sekunden wieder auf.",
    "cat": 1
   },
   {
    "text": "Der Nutzer kann seine Bestellhistorie nach Datum filtern.",
    "cat": 0
   },
   {
    "text": "Unbefugte Zugriffsversuche werden protokolliert und der Nutzer nach fünf Fehlversuchen gesperrt.",
    "cat": 0
   },
   {
    "text": "Eine neue Sprachversion der Oberfläche lässt sich ohne Codeänderung ergänzen.",
    "cat": 1
   }
  ],
  "explanation": "Wiederaufnahme innerhalb einer Zeitschranke (Zuverlässigkeit/Wiederherstellbarkeit) und die codeänderungsfreie Erweiterbarkeit (Wartbarkeit/Flexibilität) sind Qualitätsanforderungen – sie beschreiben WIE GUT. Filtern der Historie und das konkrete Sperren nach fünf Fehlversuchen sind beschriebene Funktionen (WAS); Achtung: dass überhaupt gesperrt wird, ist eine Funktion, „wie sicher“ das System insgesamt ist, wäre die Qualitätsanforderung."
 },
 {
  "id": "k2",
  "chapter": 2,
  "lz": "LZ 02-02",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Ordnen Sie jede Vorgabe zu: Randbedingung oder Qualitätsanforderung?",
  "categories": [
   "Randbedingung",
   "Qualitätsanforderung"
  ],
  "rows": [
   {
    "text": "Aufgrund einer Konzernvorgabe darf ausschließlich der bereitgestellte Cloud-Anbieter genutzt werden.",
    "cat": 0
   },
   {
    "text": "Eine neue Zahlart ist von einem Entwickler in unter zwei Personentagen integrierbar.",
    "cat": 1
   },
   {
    "text": "Die Lösung muss die Barrierefreiheits-Richtlinie WCAG 2.1 AA erfüllen.",
    "cat": 0
   },
   {
    "text": "Das System bleibt auch bei Ausfall eines von drei Knoten verfügbar.",
    "cat": 1
   }
  ],
  "explanation": "Die verpflichtende Cloud-Vorgabe (organisatorisch/technisch) und die vorgeschriebene Einhaltung einer konkreten Richtlinie (WCAG 2.1 AA als regulatorische/normative Vorgabe) begrenzen den Lösungsraum – Randbedingungen. Leichte Erweiterbarkeit (Wartbarkeit) und die Ausfalltoleranz (Verfügbarkeit) beschreiben WIE GUT – Qualitätsanforderungen. Hinweis: „barrierefrei sein“ als Ziel wäre eine Qualitätsanforderung; die Pflicht, eine bestimmte Norm einzuhalten, ist die Randbedingung."
 },
 {
  "id": "c2q8",
  "chapter": 2,
  "lz": "LZ 02-03",
  "r": "R1",
  "type": "multi",
  "q": "Welche der folgenden gehören zu den Hauptmerkmalen des Produktqualitätsmodells der ISO/IEC 25010:2023?",
  "options": [
   "Zuverlässigkeit (Reliability)",
   "Informationssicherheit (Security)",
   "Testabdeckung (Code Coverage)",
   "Kompatibilität (Compatibility)",
   "Einhaltung des Projektbudgets"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Richtig: Zuverlässigkeit ist ein Hauptmerkmal der ISO 25010.",
   "Richtig: Informationssicherheit ist ein Hauptmerkmal der ISO 25010.",
   "Falsch (Trap): Testabdeckung ist messbar, aber kein Produktqualitätsmerkmal der ISO 25010.",
   "Richtig: Kompatibilität ist ein Hauptmerkmal der ISO 25010.",
   "Falsch: Budgeteinhaltung ist ein Projekt-/Wirtschaftsaspekt, kein Produktqualitätsmerkmal."
  ],
  "explanation": "Zuverlässigkeit, Informationssicherheit und Kompatibilität sind Hauptmerkmale der ISO 25010:2023. Testabdeckung ist zwar messbar, aber kein Produktqualitätsmerkmal; Budgeteinhaltung ist ein wirtschaftlicher Projektaspekt."
 },
 {
  "id": "c2q9",
  "chapter": 2,
  "lz": "LZ 02-03",
  "r": "R1",
  "type": "multi",
  "q": "Warum sollten Qualitätsanforderungen möglichst früh geklärt werden? Welche Begründungen treffen zu?",
  "options": [
   "Weil sie die grundlegenden Strukturentscheidungen prägen, die sich später nur mit hohem Aufwand ändern lassen.",
   "Weil sie oft implizit bleiben und andernfalls erst spät – etwa im Betrieb – schmerzhaft sichtbar werden.",
   "Weil eine frühe Klärung hilft, Zielkonflikte zwischen Qualitätsmerkmalen rechtzeitig abzuwägen.",
   "Weil sich Qualitätsanforderungen nach dem ersten Release grundsätzlich nicht mehr messbar formulieren lassen.",
   "Weil eine frühe Klärung garantiert, dass später gar keine Zielkonflikte zwischen Qualitäten mehr auftreten."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Qualitätsanforderungen treiben Strukturentscheidungen; späte Änderungen sind teuer.",
   "Richtig: Implizite Qualitätsanforderungen werden sonst erst spät sichtbar.",
   "Richtig: Frühe Klärung erlaubt rechtzeitiges Abwägen von Trade-offs.",
   "Falsch: Qualitätsanforderungen lassen sich auch später (messbar) formulieren – nur teurer umzusetzen; eingefroren sind sie nicht.",
   "Falsch: Frühe Klärung hilft, Zielkonflikte rechtzeitig abzuwägen, beseitigt sie aber nicht garantiert."
  ],
  "explanation": "Frühe Klärung lohnt, weil Qualitätsanforderungen die Struktur treiben, oft implizit bleiben und Zielkonflikte rechtzeitig abgewogen werden müssen. Sie lassen sich auch später noch messbar formulieren (nur teurer) und werden durch frühe Klärung nicht konfliktfrei garantiert."
 },
 {
  "id": "c2q10",
  "chapter": 2,
  "lz": "LZ 02-03",
  "r": "R1",
  "type": "single",
  "q": "Ein Stakeholder fordert: „Das System muss auch von sehbehinderten Nutzern bedienbar sein.“ Was trifft am ehesten zu?",
  "options": [
   "Es ist eine Qualitätsanforderung (Aspekt der Benutzbarkeit/Barrierefreiheit), die die Architektur prägen kann.",
   "Es ist eine funktionale Anforderung, weil eine konkrete Bedienfunktion („Vorlesefunktion“) beschrieben wird.",
   "Es ist eine Randbedingung, da sie eine unveränderbare externe Vorgabe darstellt.",
   "Es ist ein Nicht-Ziel, das den Umfang begrenzt."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Barrierefreiheit ist ein Aspekt der Benutzbarkeit – eine Qualitätsanforderung.",
   "Falsch (Near-Miss): Es wird keine konkrete Funktion benannt, sondern eine Qualität; eine „Vorlesefunktion“ wäre eine mögliche Lösung, nicht die Anforderung.",
   "Falsch: Erst wenn eine bestimmte Norm (z. B. WCAG-Stufe) verbindlich vorgeschrieben ist, entsteht daraus eine Randbedingung; die bloße Bedienbarkeitsforderung ist es nicht.",
   "Falsch: Sie schließt nichts aus, ist also kein Nicht-Ziel."
  ],
  "explanation": "Bedienbarkeit für sehbehinderte Nutzer ist ein Aspekt der Benutzbarkeit – eine Qualitätsanforderung. Sie benennt keine konkrete Funktion; erst eine verpflichtend vorgeschriebene Norm würde eine Randbedingung ergeben. Ein Nicht-Ziel ist sie nicht."
 },
 {
  "id": "c2q11",
  "chapter": 2,
  "lz": "LZ 02-02",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zur Priorisierung von Anforderungen treffen zu?",
  "options": [
   "Weil Zeit und Budget begrenzt sind, muss abgewogen werden, was zuerst und was womöglich gar nicht umgesetzt wird.",
   "Anforderungen können einander widersprechen; die Priorisierung zwingt zu bewussten Abwägungen.",
   "Neben dem Umsetzungsaufwand sollten auch Geschäftswert und Risiko in die Priorisierung einfließen.",
   "Niedrig priorisierte Anforderungen dürfen danach ersatzlos und ohne erneute Prüfung ignoriert werden.",
   "Eine einmal festgelegte Priorisierung bleibt über das gesamte Projekt hinweg unverändert."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Begrenzte Ressourcen erzwingen Auswahl und Reihenfolge.",
   "Richtig: Widersprüchliche Anforderungen erfordern bewusste Abwägung.",
   "Richtig: Wert und Risiko gehören neben dem Aufwand zu den Kriterien.",
   "Falsch (Trap): Niedrige Priorität heißt nicht automatisch dauerhaft gestrichen.",
   "Falsch: Prioritäten ändern sich im Verlauf und sind fortlaufend zu überprüfen."
  ],
  "explanation": "Priorisiert wird, weil Ressourcen begrenzt sind und Anforderungen konkurrieren; Kriterien sind Aufwand, Wert und Risiko. Niedrig Priorisiertes ist nicht automatisch endgültig gestrichen, und Prioritäten sind im Verlauf fortzuschreiben."
 },
 {
  "id": "c2q12",
  "chapter": 2,
  "lz": "LZ 02-03",
  "r": "R1",
  "type": "single",
  "q": "Was gilt typischerweise für das Verhältnis verschiedener Qualitätsanforderungen zueinander?",
  "options": [
   "Sie stehen häufig in Zielkonflikt (Trade-off) und müssen bewusst gegeneinander abgewogen werden.",
   "Sie verstärken sich in der Regel gegenseitig, sodass die Verbesserung einer meist auch andere verbessert.",
   "Sie sind grundsätzlich voneinander unabhängig und beeinflussen sich nicht.",
   "Es ist zu jedem Zeitpunkt nur eine einzige Qualitätsanforderung relevant."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Qualitätsmerkmale konkurrieren oft (z. B. Sicherheit vs. Bedienbarkeit) und müssen abgewogen werden.",
   "Falsch (Near-Miss): Manche Qualitäten harmonieren zwar, aber „in der Regel gegenseitige Verstärkung“ ist falsch – Konflikte sind typisch.",
   "Falsch: Sie sind nicht unabhängig, sondern beeinflussen sich häufig.",
   "Falsch: Meist sind mehrere Qualitätsanforderungen zugleich relevant."
  ],
  "explanation": "Qualitätsmerkmale stehen häufig in Zielkonflikt und müssen abgewogen werden. Sie verstärken sich nicht in der Regel gegenseitig, sind nicht unabhängig und selten einzeln-exklusiv."
 },
 {
  "id": "c2q13",
  "chapter": 2,
  "lz": "LZ 02-05",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zu einer Annahme (Assumption) im Architekturkontext treffen zu?",
  "options": [
   "Sie ist ein als gegeben unterstellter, aber nicht gesicherter Sachverhalt.",
   "Sie sollte explizit dokumentiert und als Risiko verfolgt werden, falls sie nicht zutrifft.",
   "Trifft eine dokumentierte Annahme nachweislich zu, kann sie zu einer bestätigten Randbedingung oder Tatsache werden.",
   "Sie ist von vornherein eine verbindliche Vorgabe, die den Lösungsraum einschränkt.",
   "Einmal getroffen, darf sie im weiteren Projektverlauf nicht mehr hinterfragt werden."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Eine Annahme ist unterstellt, aber nicht gesichert.",
   "Richtig: Sie ist zu dokumentieren und als Risiko zu verfolgen.",
   "Richtig (subtil): Bestätigt sich eine Annahme, verliert sie ihren Unsicherheitscharakter und kann als Fakt/Randbedingung behandelt werden.",
   "Falsch (Near-Miss): Eine von vornherein verbindliche, einschränkende Vorgabe ist eine Randbedingung, keine Annahme.",
   "Falsch: Annahmen müssen laufend überprüft und bei Bedarf revidiert werden."
  ],
  "explanation": "Eine Annahme ist unbestätigt, muss dokumentiert und als Risiko verfolgt und laufend überprüft werden; bestätigt sie sich, kann sie zur Tatsache/Randbedingung werden. Eine von Beginn an verbindliche, einschränkende Vorgabe ist dagegen eine Randbedingung."
 },
 {
  "id": "c2q14",
  "chapter": 2,
  "lz": "LZ 02-03",
  "r": "R1",
  "type": "multi",
  "q": "Welche der folgenden sind Qualitätsanforderungen (nicht funktionale Anforderungen)?",
  "options": [
   "Die Anwendung verarbeitet 1000 Anfragen pro Sekunde bei einer Antwortzeit unter 200 ms.",
   "Sensible Daten werden nach dem Stand der Technik verschlüsselt gespeichert.",
   "Eine typische Änderung ist von neuen Entwickler:innen in unter einem Tag umsetzbar.",
   "Das System muss die bereits vorhandene Oracle-Datenbank des Kunden weiterverwenden.",
   "Nutzer:innen können eine Rechnung stornieren und erhalten eine Bestätigung."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: messbare Performanz-Anforderung (wie gut).",
   "Richtig: Sicherheit – eine Qualitätsanforderung.",
   "Richtig: Wartbarkeit/Änderbarkeit – eine Qualitätsanforderung.",
   "Falsch: Das ist eine <em>Randbedingung</em> (einschränkende Vorgabe), keine Qualitätsanforderung.",
   "Falsch: Das beschreibt eine <em>funktionale</em> Anforderung (WAS das System tut)."
  ],
  "explanation": "Qualitätsanforderungen beschreiben, WIE GUT ein System etwas tut (Performanz, Sicherheit, Wartbarkeit …). Eine funktionale Anforderung beschreibt WAS es tut; eine Randbedingung ist eine einschränkende Vorgabe – beide sind keine Qualitätsanforderungen."
 },
 {
  "id": "c2q15",
  "chapter": 2,
  "lz": "LZ 02-02",
  "r": "R2",
  "type": "multi",
  "q": "Welche der folgenden sind organisatorische Randbedingungen (im Unterschied zu technischen oder regulatorischen)?",
  "options": [
   "Das Projekt muss bis Jahresende mit dem bestehenden, festen Team abgeschlossen sein.",
   "Die Entwicklung erfolgt nach dem im Unternehmen vorgeschriebenen Vorgehensmodell.",
   "Die Datenhaltung muss in einer relationalen Datenbank erfolgen.",
   "Die Kommunikation zwischen den Diensten muss über HTTPS laufen.",
   "Die Antwortzeit muss unter 300 ms liegen."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Richtig: Termin und Teamzusammensetzung sind organisatorische Randbedingungen.",
   "Richtig: Ein vorgeschriebenes Vorgehensmodell ist eine organisatorische Randbedingung.",
   "Falsch (Near-Miss): Eine Datenbankvorgabe ist eine technische Randbedingung.",
   "Falsch: Eine Protokollvorgabe (HTTPS) ist eine technische Randbedingung.",
   "Falsch: Die Antwortzeit ist eine Qualitätsanforderung, keine Randbedingung."
  ],
  "explanation": "Termin/Team und ein vorgeschriebenes Vorgehensmodell sind organisatorische Randbedingungen. Datenbank- und Protokollvorgaben sind technische Randbedingungen; die Antwortzeit ist eine Qualitätsanforderung."
 },
 {
  "id": "c2q16",
  "chapter": 2,
  "lz": "LZ 02-03",
  "r": "R1",
  "type": "multi",
  "q": "Woraus leiten sich Qualitätsanforderungen typischerweise ab?",
  "options": [
   "Aus den Geschäftszielen des Auftraggebers.",
   "Aus den Bedürfnissen und Belangen der verschiedenen Stakeholder.",
   "Aus rechtlichen und regulatorischen Vorgaben, die das System erfüllen muss.",
   "Aus der Anzahl der verfügbaren Entwickler.",
   "Aus dem gewählten Vorgehensmodell (z. B. Scrum oder Wasserfall)."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Geschäftsziele sind eine zentrale Quelle von Qualitätsanforderungen.",
   "Richtig: Stakeholder-Belange liefern Qualitätsanforderungen.",
   "Richtig: Rechtliche/regulatorische Vorgaben können Qualitätsanforderungen (z. B. Sicherheit, Datenschutz) begründen.",
   "Falsch (Trap): Die Teamgröße ist eine (organisatorische) Randbedingung, keine Quelle von Qualitätsanforderungen.",
   "Falsch: Das Vorgehensmodell bestimmt den Prozess, nicht die Qualitätsanforderungen."
  ],
  "explanation": "Qualitätsanforderungen entstehen aus Geschäftszielen, Stakeholder-Belangen und rechtlichen/regulatorischen Vorgaben. Teamgröße (eine Randbedingung) und Vorgehensmodell sind keine Quelle von Qualitätsanforderungen."
 },
 {
  "id": "c2q17",
  "chapter": 2,
  "lz": "LZ 02-02",
  "r": "R2",
  "type": "single",
  "q": "Ein Anforderungsdokument enthält den Satz: „Zur Datenhaltung ist PostgreSQL zu verwenden.“ Was trifft am ehesten zu?",
  "options": [
   "Das ist streng genommen eine Lösungs-/Technologievorgabe und wirkt als Randbedingung – eine reine Anforderung würde nur das WAS/WIE GUT beschreiben.",
   "Das ist eine funktionale Anforderung, weil es das Verhalten der Datenspeicherung festlegt.",
   "Das ist eine Qualitätsanforderung, weil Datenbanken die Performanz bestimmen.",
   "Anforderung und Lösung sind hier ohnehin dasselbe, nur unterschiedlich detailliert."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Eine konkrete Technologiefestlegung greift dem Lösungsraum vor und wirkt als Randbedingung; eine Anforderung nennt WAS/WIE GUT, nicht das konkrete WIE.",
   "Falsch (Near-Miss): Es wird kein fachliches Verhalten beschrieben, sondern eine Technologie vorgeschrieben.",
   "Falsch: Nicht die Datenbankwahl selbst, sondern etwaige Performanzziele wären die Qualitätsanforderung.",
   "Falsch: Anforderung (WAS/WIE GUT) und Lösung (WIE) unterscheiden sich grundsätzlich, nicht nur im Detailgrad."
  ],
  "explanation": "Eine konkrete Technologievorgabe beschreibt nicht WAS/WIE GUT, sondern legt eine Lösung fest und wirkt daher als Randbedingung. Sie ist weder funktionale noch Qualitätsanforderung, und Anforderung und Lösung unterscheiden sich grundsätzlich."
 },
 {
  "id": "c2q18",
  "chapter": 2,
  "lz": "LZ 02-02",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zum Festhalten von Nicht-Zielen (bewusst ausgeschlossenen Punkten) treffen zu?",
  "options": [
   "Sie klären den Umfang (Scope) und beugen falschen Erwartungen vor.",
   "Sie erleichtern spätere Entscheidungen, weil dokumentiert ist, was bewusst nicht verfolgt wird.",
   "Ein Nicht-Ziel kann sich im Projektverlauf ändern und später doch zum Ziel werden.",
   "Sie ersetzen die funktionalen Anforderungen und machen deren Erhebung überflüssig.",
   "Sie entkoppeln die Architektur von den Zielen des Systems."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Nicht-Ziele grenzen den Umfang ab und steuern Erwartungen.",
   "Richtig: Dokumentierte Ausschlüsse erleichtern spätere Entscheidungen und Diskussionen.",
   "Richtig (subtil): Nicht-Ziele sind nicht in Stein gemeißelt und können sich im Verlauf wandeln.",
   "Falsch (Trap): Nicht-Ziele ersetzen keine funktionalen Anforderungen.",
   "Falsch: Sie entkoppeln die Architektur nicht von den Zielen."
  ],
  "explanation": "Nicht-Ziele klären den Scope, steuern Erwartungen, erleichtern spätere Entscheidungen und können sich im Verlauf ändern. Sie ersetzen keine funktionalen Anforderungen und entkoppeln die Architektur nicht von den Zielen."
 },
 {
  "id": "c2q19",
  "chapter": 2,
  "lz": "LZ 02-04",
  "r": "R1",
  "type": "multi",
  "q": "Ein Qualitätsszenario soll eine Qualitätsanforderung überprüfbar machen. Welche Bestandteile gehören zu einem solchen Szenario?",
  "options": [
   "Ein konkreter Auslöser/Stimulus (z. B. „1000 gleichzeitige Anfragen treffen ein“).",
   "Die Umgebung/der Betriebszustand, in dem das Szenario gilt (z. B. „unter Volllast“).",
   "Ein messbares Antwortmaß (z. B. „95 % in unter 1 s“).",
   "Die geschätzten Entwicklungskosten der Umsetzung.",
   "Die Festlegung der einzusetzenden Programmiersprache."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Der Auslöser ist ein Kernbestandteil des Szenarios.",
   "Richtig: Umgebung/Betriebszustand gehören dazu, da Verhalten kontextabhängig ist.",
   "Richtig: Ein messbares Antwortmaß erlaubt die eindeutige Überprüfung.",
   "Falsch (Trap): Kosten gehören nicht zum Szenario und sagen nichts über Überprüfbarkeit aus.",
   "Falsch: Die Sprachwahl ist eine Lösungsentscheidung/Randbedingung, kein Szenariobestandteil."
  ],
  "explanation": "Ein Qualitätsszenario besteht u. a. aus Auslöser, Umgebung/Kontext und messbarem Antwortmaß. Entwicklungskosten und die Wahl der Programmiersprache gehören nicht dazu."
 },
 {
  "id": "c2q20",
  "chapter": 2,
  "lz": "LZ 02-01",
  "r": "R2",
  "type": "multi",
  "q": "Zwei wichtige Stakeholder vertreten unvereinbare Ziele (maximale Sicherheit vs. maximaler Bedienkomfort). Welche Vorgehensweisen sind angemessen?",
  "options": [
   "Die widersprüchlichen Belange transparent machen und bewusst gegeneinander abwägen.",
   "Eine begründete Priorisierung bzw. einen tragfähigen Kompromiss herbeiführen und dokumentieren.",
   "Die Entscheidung an die dafür verantwortliche Instanz (z. B. Auftraggeber/Produktverantwortung) eskalieren, wenn kein Ausgleich gelingt.",
   "Jeden genannten Wunsch unverändert und vollständig umsetzen.",
   "Die Entscheidung dem hierarchisch oder rhetorisch stärksten Stakeholder überlassen."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Transparenz und bewusstes Abwägen sind der erste Schritt.",
   "Richtig: Priorisierung/Kompromiss samt Dokumentation der Entscheidung ist angemessen.",
   "Richtig: Bei nicht auflösbarem Konflikt ist die Eskalation an die verantwortliche Instanz sinnvoll.",
   "Falsch (Trap): Unvereinbare Ziele lassen sich nicht alle vollständig erfüllen.",
   "Falsch: Der „lauteste“ Stakeholder entscheiden zu lassen ist unausgewogen und sachfremd."
  ],
  "explanation": "Konkurrierende Belange erfordern Transparenz, bewusstes Abwägen, eine begründete Priorisierung/einen Kompromiss und ggf. Eskalation an die verantwortliche Instanz. Alle Wünsche vollständig zu erfüllen ist unmöglich, und dem stärksten Stakeholder zu folgen unausgewogen."
 },
 {
  "id": "c2q21",
  "chapter": 2,
  "lz": "LZ 02-03",
  "r": "R2",
  "type": "single",
  "q": "Ein Kollege behauptet mehrere Dinge über die Revision der ISO/IEC 25010 aus dem Jahr 2023. Welche Aussage ist korrekt?",
  "options": [
   "„Safety“ (Betriebssicherheit) wurde als eigenständiges Hauptmerkmal aufgenommen.",
   "Die Zahl der Hauptmerkmale wurde auf drei reduziert.",
   "„Portabilität“ wurde ersatzlos gestrichen und hat keinen Nachfolger im Modell.",
   "„Usability“ wurde unter diesem Namen unverändert beibehalten."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Safety wurde 2023 als eigenständiges Hauptmerkmal aufgenommen.",
   "Falsch (Trap): Die Zahl der Hauptmerkmale wurde nicht auf drei reduziert (es sind neun).",
   "Falsch (Near-Miss): Portabilität wurde nicht ersatzlos gestrichen, sondern in „Flexibilität“ überführt.",
   "Falsch: „Usability“ wurde 2023 zu „Interaktionsfähigkeit (Interaction Capability)“ umbenannt und erweitert."
  ],
  "explanation": "2023 kam u. a. Safety als eigenständiges Hauptmerkmal hinzu; das Modell hat weiterhin mehrere (neun) Hauptmerkmale. Portabilität wurde nicht gestrichen, sondern in „Flexibilität“ überführt, und Zuverlässigkeit/Wartbarkeit bestehen fort."
 },
 {
  "id": "c2q22",
  "chapter": 2,
  "lz": "LZ 02-01",
  "r": "R1",
  "type": "multi",
  "q": "Wie geht man beim Identifizieren von Stakeholdern sinnvoll vor?",
  "options": [
   "Das Umfeld schichtweise abtasten – vom System über das Geschäftssystem bis zur weiteren Umgebung (Zwiebelmodell).",
   "Bereits bekannte Stakeholder nach weiteren Betroffenen fragen (Schneeballprinzip).",
   "Auch nicht zahlende, indirekt Betroffene und kritisch eingestellte Personen berücksichtigen.",
   "Die Stakeholderliste ausschließlich einmalig zu Projektbeginn erstellen und danach einfrieren.",
   "Nur solche Stakeholder aufnehmen, die aktiv am Entwicklungsprozess mitarbeiten."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Das schichtweise Abtasten (Zwiebelmodell) findet Stakeholder systematisch.",
   "Richtig: Das Schneeballprinzip erschließt über Bekannte weitere Betroffene.",
   "Richtig: Auch indirekt Betroffene und Kritiker sind relevante Stakeholder.",
   "Falsch (Trap): Die Liste ist fortzuschreiben, nicht einzufrieren.",
   "Falsch (Near-Miss): Betroffenheit, nicht aktive Mitarbeit, entscheidet über Stakeholder-Eigenschaft; auch Nicht-Mitarbeitende zählen."
  ],
  "explanation": "Man tastet das Umfeld schichtweise ab (Zwiebelmodell), erweitert per Schneeballprinzip und berücksichtigt auch indirekt Betroffene und Kritiker. Die Liste ist fortzuschreiben, und maßgeblich ist Betroffenheit, nicht aktive Mitarbeit."
 },
 {
  "id": "c2q23",
  "chapter": 2,
  "lz": "LZ 02-02",
  "r": "R2",
  "type": "single",
  "q": "Ein Architekturteam ist entlang der Organisationsstruktur in getrennte Abteilungen aufgeteilt und stellt fest, dass das System dieselben Grenzen abbildet. Welche Aussage beschreibt Conways Gesetz zutreffend?",
  "options": [
   "Die Struktur eines Systems spiegelt tendenziell die Kommunikationsstrukturen der entwickelnden Organisation wider.",
   "Systeme erodieren mit der Zeit unweigerlich, wenn die Dokumentation nicht gepflegt wird.",
   "Die Systemleistung wächst linear mit der Zahl der eingesetzten Server.",
   "Die Zahl der Schnittstellen sollte der Zahl der beteiligten Entwickler entsprechen."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Conways Gesetz besagt genau diese Spiegelung von Kommunikationswegen in der Systemstruktur.",
   "Falsch (Near-Miss): Das beschreibt Architekturerosion, nicht Conways Gesetz.",
   "Falsch: Lineare Skalierung mit Servern ist nicht Conways Aussage.",
   "Falsch: Schnittstellenzahl gleich Entwicklerzahl ist frei erfunden."
  ],
  "explanation": "Conways Gesetz: Systemstrukturen spiegeln die Kommunikationswege der entwickelnden Organisation wider. Die anderen Optionen betreffen Erosion, Skalierung oder sind erfunden."
 },
 {
  "id": "c2q24",
  "chapter": 2,
  "lz": "LZ 02-05",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zu impliziten (unausgesprochenen) Anforderungen treffen zu?",
  "options": [
   "Sie betreffen häufig Qualitätsanforderungen und sollten aktiv explizit gemacht werden.",
   "Sie beruhen oft auf selbstverständlichen Erwartungen, die der Auftraggeber gar nicht erst erwähnt.",
   "Werden sie übersehen, zeigt sich das oft erst spät und verursacht hohe Korrekturkosten.",
   "Sie sind meist funktionaler Natur und in der Regel bereits vollständig dokumentiert.",
   "Sie können ignoriert werden, weil sie für die Architektur unwichtig sind."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Implizite Erwartungen sind häufig qualitätsbezogen und müssen herausgearbeitet werden.",
   "Richtig: Sie bleiben oft unerwähnt, weil sie als selbstverständlich gelten.",
   "Richtig: Übersehene implizite Anforderungen werden spät und teuer sichtbar.",
   "Falsch (Trap): Sie sind oft qualitativ und gerade nicht vollständig dokumentiert.",
   "Falsch: Sie prägen die Architektur stark und dürfen nicht ignoriert werden."
  ],
  "explanation": "Implizite Anforderungen sind oft qualitätsbezogen, bleiben als vermeintlich Selbstverständliches unerwähnt und werden bei Nichtbeachtung spät und teuer sichtbar; man muss sie aktiv explizit machen. Sie sind nicht überwiegend dokumentiert und keineswegs unwichtig."
 },
 {
  "id": "c2q25",
  "chapter": 2,
  "lz": "LZ 02-01",
  "r": "R2",
  "type": "single",
  "q": "Zwei Stakeholder streiten. Worin unterscheidet sich ein Sachkonflikt von einem Interessenkonflikt am ehesten?",
  "options": [
   "Ein Sachkonflikt dreht sich um Fakten bzw. Lösungswege, ein Interessenkonflikt um unvereinbare Ziele der Beteiligten.",
   "Ein Sachkonflikt betrifft ausschließlich technische Fragen, ein Interessenkonflikt ausschließlich zwischenmenschliche.",
   "Ein Sachkonflikt lässt sich nie, ein Interessenkonflikt stets durch mehr Informationen auflösen.",
   "Beide sind im Kern identisch und unterscheiden sich nur in der Benennung."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Sachkonflikt = Streit über Fakten/Lösungsweg; Interessenkonflikt = unvereinbare Ziele.",
   "Falsch (Near-Miss): Sachkonflikte sind nicht rein technisch und Interessenkonflikte nicht rein zwischenmenschlich.",
   "Falsch: Eher lässt sich ein Sachkonflikt durch Fakten/Transparenz lösen, ein Interessenkonflikt gerade nicht allein dadurch.",
   "Falsch: Beide Konfliktarten sind nicht identisch."
  ],
  "explanation": "Ein Sachkonflikt betrifft Fakten/Lösungswege (oft durch Transparenz lösbar), ein Interessenkonflikt unvereinbare Ziele (Ausgleich/Kompromiss nötig, Fakten allein genügen selten). Die Zuordnung technisch/zwischenmenschlich ist falsch, und die Konfliktarten sind nicht identisch."
 },
 {
  "id": "c2q26",
  "chapter": 2,
  "lz": "LZ 02-02",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen kennzeichnen eine Randbedingung (Constraint) zutreffend?",
  "options": [
   "Sie ist eine vorgegebene Grenze, die das Team kaum oder gar nicht beeinflussen kann.",
   "Sie kann technischer, organisatorischer oder rechtlicher Natur sein.",
   "Sie sollte ebenso dokumentiert werden wie andere Anforderungen, da sie den Entwurf beeinflusst.",
   "Sie ist stets eine rein funktionale Vorgabe.",
   "Sie ist vom Architekturteam jederzeit frei verhandelbar und leicht änderbar."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Randbedingungen sind vorgegebene, kaum beeinflussbare Grenzen.",
   "Richtig: Sie können technisch, organisatorisch oder rechtlich sein.",
   "Richtig: Auch Randbedingungen sind zu dokumentieren, da sie den Entwurf prägen.",
   "Falsch (Near-Miss): Sie sind nicht rein funktional, sondern verschiedenster Natur.",
   "Falsch (Trap): Randbedingungen sind gerade nicht frei verhandelbar oder leicht änderbar."
  ],
  "explanation": "Randbedingungen sind vorgegebene, kaum beeinflussbare Grenzen (technisch, organisatorisch, rechtlich) und sollten dokumentiert werden, weil sie den Entwurf prägen. Sie sind nicht rein funktional und nicht frei verhandelbar."
 },
 {
  "id": "c2q27",
  "chapter": 2,
  "lz": "LZ 02-01",
  "r": "R3",
  "type": "single",
  "q": "Ein Produktverantwortlicher will Anforderungen mit dem Kano-Modell einordnen. Was beschreibt das Kano-Modell zutreffend?",
  "options": [
   "Es unterscheidet Basis-, Leistungs- und Begeisterungsmerkmale nach ihrer Wirkung auf die Zufriedenheit.",
   "Es priorisiert Anforderungen ausschließlich nach ihren Umsetzungskosten.",
   "Es ordnet jede Anforderung genau einem ISO-25010-Qualitätsmerkmal zu.",
   "Es sortiert Anforderungen streng nach dem Geschäftswert wie das MoSCoW-Verfahren."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Kano klassifiziert nach Wirkung auf die Zufriedenheit (Basis-, Leistungs-, Begeisterungsmerkmale).",
   "Falsch: Kano priorisiert nicht primär nach Kosten.",
   "Falsch (Near-Miss): Kano ist kein Qualitätsmodell und ordnet nichts ISO-25010-Merkmalen zu.",
   "Falsch (Near-Miss): Wert-Priorisierung nach Muss/Soll/Kann ist MoSCoW, nicht Kano."
  ],
  "explanation": "Kano klassifiziert nach Wirkung auf die Zufriedenheit: Basis- (Muss, fällt nur negativ auf), Leistungs- (je mehr, desto besser) und Begeisterungsmerkmale (unerwartet erfreulich). Es geht nicht um Kosten, keine ISO-Zuordnung und ist nicht MoSCoW."
 },
 {
  "id": "c3q1",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zu Kopplung und Kohäsion treffen zu?",
  "options": [
   "Lose Kopplung und hohe Kohäsion sind komplementäre Ziele: Erstere betrifft die Beziehungen zwischen Bausteinen, Letztere den inneren Zusammenhalt eines Bausteins.",
   "Ein Baustein mit hoher Kohäsion bündelt Elemente, die derselben Verantwortlichkeit dienen.",
   "Werden zwei Bausteine statt über gemeinsame veränderliche Datenstrukturen über eine schmale, stabile Schnittstelle verbunden, sinkt tendenziell ihre Kopplung.",
   "Kohäsion misst die Anzahl und Stärke der Abhängigkeiten zwischen verschiedenen Bausteinen.",
   "Je höher die Kohäsion eines Bausteins, desto höher ist auch die Kopplung zu seinen Nachbarbausteinen."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Kopplung und Kohäsion sind unterschiedliche, sich ergänzende Dimensionen – zwischen Bausteinen bzw. innerhalb eines Bausteins.",
   "Richtig: Hohe Kohäsion bedeutet, dass die Bestandteile eines Bausteins einer gemeinsamen Aufgabe dienen.",
   "Richtig: Der Austausch über eine definierte, stabile Schnittstelle senkt die Kopplung gegenüber geteiltem veränderlichem Zustand.",
   "Near-Miss: Abhängigkeiten zwischen Bausteinen beschreibt die Kopplung, nicht die Kohäsion.",
   "Falsch: Kohäsion und Kopplung sind unabhängige Dimensionen; hohe Kohäsion zieht keine hohe Kopplung nach sich."
  ],
  "explanation": "Kopplung (Beziehungen zwischen Bausteinen) und Kohäsion (innerer Zusammenhalt) sind verschiedene, komplementäre Dimensionen. Ziel ist lose Kopplung bei hoher Kohäsion. Die Zahl/Stärke der Abhängigkeiten zwischen Bausteinen ist gerade die Kopplung, und hohe Kohäsion erzwingt keine hohe Kopplung."
 },
 {
  "id": "c3q2",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen beschreiben Information Hiding (Geheimnisprinzip) nach Parnas zutreffend?",
  "options": [
   "Entwurfsentscheidungen, die sich voraussichtlich ändern, werden hinter einer stabilen Schnittstelle verborgen, sodass Änderungen lokal bleiben.",
   "Jeder Baustein besitzt genau eine fachliche Verantwortlichkeit und damit nur einen Änderungsgrund.",
   "Interne Datenstrukturen dürfen von anderen Bausteinen genutzt werden, solange sie dokumentiert sind.",
   "Sensible Felder werden verschlüsselt abgelegt, um unbefugten Datenzugriff zu verhindern.",
   "Ziel ist, dass sich voraussichtliche Änderungen auf einen einzelnen Baustein beschränken (lokale Änderbarkeit)."
  ],
  "correct": [
   0,
   4
  ],
  "optExpl": [
   "Richtig: Parnas verbirgt gerade die änderungswahrscheinlichen Entwurfsentscheidungen hinter einer stabilen Schnittstelle.",
   "Near-Miss: Das beschreibt das Single Responsibility Principle, nicht Information Hiding.",
   "Falsch: Offengelegte interne Strukturen widersprechen dem Verbergen von Implementierungsdetails, auch wenn sie dokumentiert sind.",
   "Falsch: Information Hiding meint Kapselung von Entwurfsentscheidungen, nicht Verschlüsselung von Daten.",
   "Richtig: gerade die Begrenzung der Änderungsauswirkung ist der Zweck des Geheimnisprinzips."
  ],
  "explanation": "Information Hiding verbirgt die voraussichtlich veränderlichen Entwurfsentscheidungen hinter einer stabilen Schnittstelle, damit Änderungen lokal bleiben. Es ist weder das SRP noch Datenverschlüsselung, und das Offenlegen dokumentierter Interna widerspricht dem Prinzip."
 },
 {
  "id": "c3q3",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R3",
  "type": "single",
  "q": "Welche Aussage zum „S“ in den SOLID-Prinzipien trifft zu?",
  "options": [
   "Single Responsibility Principle: Ein Baustein sollte nur einen einzigen Grund haben, sich zu ändern.",
   "Single Responsibility Principle: Eine Klasse darf nur eine einzige öffentliche Methode besitzen.",
   "Das „S“ steht für Separation of Concerns, das übergeordnete Prinzip hinter SOLID.",
   "Das „S“ steht für Substitutability: Subtypen müssen ihre Basistypen ersetzen können."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Das SRP formuliert genau einen Änderungsgrund pro Baustein.",
   "Near-Miss: Eine Verantwortlichkeit bedeutet nicht nur eine einzige Methode; das ist eine Fehldeutung des SRP.",
   "Falsch: Separation of Concerns ist verwandt, aber nicht Teil von SOLID und nicht das „S“.",
   "Near-Miss: Substituierbarkeit ist das „L“ (Liskov), nicht das „S“."
  ],
  "explanation": "Das „S“ ist das Single Responsibility Principle – ein Änderungsgrund pro Baustein. Es fordert nicht nur eine Methode. Separation of Concerns ist ein anderes (nicht in SOLID enthaltenes) Prinzip, Substituierbarkeit ist das „L“."
 },
 {
  "id": "c3q4",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zur Schichtenarchitektur (Layers) treffen zu?",
  "options": [
   "Höhere Schichten nutzen Dienste tieferliegender Schichten; die Abhängigkeiten verlaufen in eine Richtung.",
   "Aufrufe von einer tieferen zu einer höheren Schicht (Rückwärtsabhängigkeit) gelten als Schichtungsverletzung.",
   "Zusätzliche Schichten bringen Indirektion und können zu Lasten der Laufzeit-Performance gehen.",
   "In der strikten (closed) Variante darf eine Schicht eine tieferliegende Schicht überspringen, wenn das die Performance verbessert.",
   "Da Schichten technische Belange trennen, gehört die fachliche Logik grundsätzlich in die unterste Schicht."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Abhängigkeiten verlaufen von oben nach unten.",
   "Richtig: Rückwärtsabhängigkeiten verletzen die Schichtung.",
   "Richtig: Die zusätzliche Indirektion kann Performance kosten – ein bewusster Trade-off.",
   "Falsch: Das Überspringen von Schichten ist gerade die <em>relaxed/open</em> Variante; die strikte Variante verbietet es.",
   "Falsch: Die fachliche Logik liegt typischerweise nicht in der untersten (Datenzugriffs-)Schicht."
  ],
  "explanation": "Schichten ordnen Abhängigkeiten in eine Richtung (oben nutzt unten); Rückwärtsaufrufe sind Verletzungen. Striktes Layering verbietet das Überspringen (relaxed erlaubt es). Mehr Schichten = mehr Indirektion, ggf. auf Kosten der Performance."
 },
 {
  "id": "c3q5",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R3",
  "type": "multi",
  "q": "Welche Aussagen zu Ports & Adapters (hexagonale Architektur) treffen zu?",
  "options": [
   "Die fachliche Kernlogik wird von Technik und Infrastruktur entkoppelt.",
   "Äußere Belange (UI, DB, externe APIs) werden über austauschbare Adapter angebunden.",
   "Die Abhängigkeiten sind so gerichtet, dass die Fachlogik die konkreten Adapter nicht kennen muss (Abhängigkeitsumkehr an den Ports).",
   "Ein Port ist die konkrete, technologiespezifische Implementierung, etwa der JDBC-Datenbankzugriff.",
   "Die Fachlogik ruft die Datenbank über deren konkrete Treiber-API auf, um Übersetzungsschichten einzusparen."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Die Isolation der Domänenlogik von Technik ist der Kern des Musters.",
   "Richtig: Äußeres wird über austauschbare Adapter angebunden.",
   "Richtig: Die Abhängigkeiten zeigen nach innen zur Fachlogik; Ports sind Abstraktionen, die der Kern definiert.",
   "Near-Miss: Der Port ist die Abstraktion; die technologiespezifische Implementierung ist der Adapter.",
   "Falsch: Eine direkte Treiber-Abhängigkeit der Fachlogik widerspricht der Entkopplung."
  ],
  "explanation": "Ports & Adapters isoliert die Domänenlogik von Technik, bindet Äußeres über austauschbare Adapter an und richtet die Abhängigkeiten nach innen (Ports als Abstraktionen des Kerns). Der Port ist die Abstraktion, nicht die konkrete Implementierung; ein direkter Treiberzugriff der Fachlogik widerspricht dem Muster."
 },
 {
  "id": "c3q6",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen treffen typischerweise auf Microservices zu?",
  "options": [
   "Sie sind unabhängig deploybar und fachlich geschnitten.",
   "Sie erhöhen die betriebliche Komplexität (Verteilung, Monitoring, Ausfallszenarien).",
   "Jeder Service verwaltet seine eigenen Daten und kapselt sie hinter seiner Schnittstelle.",
   "Der fachliche Schnitt in Services entspricht direkt dem Schnitt in technische Schichten (je ein UI-, Logik- und Datenservice).",
   "Da jeder Service klein ist, sinkt gegenüber einem Monolithen der Gesamtaufwand für Test und Betrieb."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Unabhängige Deploybarkeit und fachlicher Schnitt sind Kernmerkmale.",
   "Richtig: Verteilung und Betrieb erhöhen die operative Komplexität.",
   "Richtig: Eigene Datenhoheit je Service (keine geteilte Datenbank) ist typisch.",
   "Near-Miss: Microservices werden fachlich (vertikal) geschnitten; ein Schnitt entlang technischer Schichten ist gerade ein Anti-Muster.",
   "Falsch: Verteilte Tests und der Betrieb vieler Services erhöhen den Gesamtaufwand tendenziell."
  ],
  "explanation": "Microservices sind unabhängig deploybar, fachlich geschnitten, halten eigene Daten und erhöhen die Betriebskomplexität. Ein Schnitt entlang technischer Schichten widerspricht dem fachlichen Schnitt, und der verteilte Betrieb senkt den Gesamtaufwand nicht."
 },
 {
  "id": "c3q7",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R1",
  "type": "multi",
  "q": "Welche gehören zu den grundlegenden Entwurfsprinzipien?",
  "options": [
   "Trennung der Zuständigkeiten (Separation of Concerns).",
   "Abstraktion.",
   "Kapselung bzw. Information Hiding.",
   "„Big Design Up Front“ – den gesamten Entwurf vollständig vor Implementierungsbeginn festlegen.",
   "„Premature Generalization“ – Bausteine vorsorglich möglichst generisch halten, auch ohne konkreten Bedarf."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Separation of Concerns ist ein grundlegendes Entwurfsprinzip.",
   "Richtig: Abstraktion gehört zu den grundlegenden Entwurfsprinzipien.",
   "Richtig: Kapselung/Information Hiding ist ein grundlegendes Entwurfsprinzip.",
   "Falsch: „Big Design Up Front“ ist ein Vorgehens-Antimuster, kein Entwurfsprinzip – es widerspricht iterativem Vorgehen und dem Aufschieben von Entscheidungen.",
   "Falsch: vorsorgliche Generalisierung ohne Bedarf (Premature Generalization) erhöht die Komplexität – Abstraktion meint zweckmäßige, nicht maximale Generalisierung."
  ],
  "explanation": "Separation of Concerns, Abstraktion und Kapselung sind grundlegende Entwurfsprinzipien. „Big Design Up Front“ und vorsorgliche Übergeneralisierung klingen verwandt, sind aber Antimuster – keine Prinzipien."
 },
 {
  "id": "c3q8",
  "chapter": 3,
  "lz": "LZ 03-10",
  "r": "R1",
  "type": "multi",
  "q": "Welche der folgenden sind typische Querschnittskonzepte (Cross-Cutting Concerns)?",
  "options": [
   "Protokollierung (Logging) und Nachvollziehbarkeit.",
   "Authentifizierung und Autorisierung.",
   "Transaktions- und Fehlerbehandlung.",
   "Die Berechnung von Rabattstufen im Bestellprozess.",
   "Die konkrete Anordnung der Felder in einem einzelnen Dialog."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Logging betrifft nahezu alle Bausteine übergreifend.",
   "Richtig: Sicherheit wirkt quer über viele Bausteine.",
   "Richtig: Transaktions- und Fehlerbehandlung sind klassische Querschnittskonzepte.",
   "Falsch: Die Rabattberechnung ist eine spezifische Fachfunktion, kein Querschnittskonzept.",
   "Falsch: Die Feldanordnung eines einzelnen Dialogs ist lokal, kein systemweites Querschnittskonzept."
  ],
  "explanation": "Logging, Sicherheit sowie Transaktions- und Fehlerbehandlung betreffen viele Bausteine übergreifend. Die Rabattberechnung ist eine lokale Fachfunktion, und die Feldanordnung eines Dialogs ist eine lokale UI-Frage – beide sind keine Querschnittskonzepte."
 },
 {
  "id": "c3q9",
  "chapter": 3,
  "lz": "LZ 03-03",
  "r": "R2",
  "type": "single",
  "q": "Ein Team beginnt mit der Gesamtsystemsicht, zerlegt sie in Subsysteme und verfeinert diese schrittweise zu Bausteinen. Welche Aussage trifft zu?",
  "options": [
   "Das ist ein Top-down-Vorgehen; Bottom-up würde umgekehrt vorhandene Detailbausteine zu größeren Einheiten zusammenfügen.",
   "Das ist ein Bottom-up-Vorgehen, weil zuerst die Struktur und erst danach die Details entstehen.",
   "Bottom-up eignet sich besser, wenn das Gesamtproblem noch unklar ist und zuerst grob strukturiert werden muss.",
   "Beide Ansätze führen bei sorgfältiger Anwendung zwingend zur selben Architektur."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Vom Ganzen ins Detail ist Top-down; Bottom-up setzt vorhandene Detailbausteine zusammen.",
   "Near-Miss: Richtiges Merkmal (erst Struktur, dann Detail), aber falsches Etikett – das ist Top-down, nicht Bottom-up.",
   "Falsch: Für ein noch unklares Gesamtproblem passt eher Top-down; Bottom-up braucht bereits tragfähige Bausteine.",
   "Falsch: Beide Vorgehensweisen können zu unterschiedlichen Strukturen führen und werden oft kombiniert."
  ],
  "explanation": "Das beschriebene Vorgehen (Ganzes → Detail) ist Top-down; Bottom-up fügt umgekehrt vorhandene Detailbausteine zusammen. Ein noch unklares Gesamtproblem spricht eher für Top-down, und beide Ansätze liefern nicht zwingend dieselbe Architektur."
 },
 {
  "id": "c3q10",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zum Nutzen von Abstraktion und Modularisierung im Entwurf treffen zu?",
  "options": [
   "Sie machen Komplexität beherrschbar und erlauben, Bausteine unabhängig zu entwickeln und zu ändern.",
   "Sie ermöglichen, eine Implementierung hinter einer Abstraktion auszutauschen, ohne die Nutzer zu beeinträchtigen.",
   "Sie machen explizite Schnittstellen zwischen Bausteinen überflüssig.",
   "Zusätzliche Abstraktionsschichten verbessern in der Regel auch die Laufzeitperformanz.",
   "Feingranulare Modularisierung senkt die Gesamtkomplexität stets, unabhängig von der Zahl der Schnittstellen."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Richtig: Beherrschung der Komplexität und unabhängiges Arbeiten sind zentrale Vorteile.",
   "Richtig: Abstraktionen erlauben den Austausch von Implementierungen hinter stabilen Schnittstellen.",
   "Falsch: Schnittstellen sind gerade das Mittel der Modularisierung und bleiben nötig.",
   "Falsch: Zusätzliche Abstraktion kann Overhead erzeugen; ein Performancevorteil ist nicht die Regel.",
   "Near-Miss: Zu feine Aufteilung erhöht über viele Schnittstellen die Integrationskomplexität – nicht in jedem Fall sinkt sie."
  ],
  "explanation": "Abstraktion und Modularisierung beherrschen Komplexität und erlauben unabhängiges Arbeiten sowie den Austausch von Implementierungen. Sie machen Schnittstellen nicht überflüssig, verbessern nicht generell die Performanz und senken bei zu feiner Granularität nicht zwangsläufig die Gesamtkomplexität."
 },
 {
  "id": "c3q11",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R2",
  "type": "single",
  "q": "Für welches Szenario eignet sich das Muster „Pipes and Filters“ am besten?",
  "options": [
   "Eine mehrstufige Datenverarbeitung, bei der jeder Schritt sein Ergebnis an den nächsten weitergibt und die Filter voneinander unabhängig sind.",
   "Eine Verarbeitung, in der alle Schritte fortlaufend einen gemeinsamen, veränderlichen Zustand lesen und schreiben.",
   "Eine Verarbeitung mit komplexer, zustandsbehafteter Rückkopplung, bei der ein Schritt frühere Schritte gezielt beeinflusst.",
   "Ein interaktiver Workflow, in dem der Nutzer den Ablauf zwischen den Schritten laufend frei verzweigt."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Eine unabhängige, mehrstufige Kette mit Ausgabe → Eingabe ist der Kern von Pipes and Filters.",
   "Near-Miss: Ein geteilter veränderlicher Zustand widerspricht der Unabhängigkeit der Filter.",
   "Falsch: Zustandsbehaftete Rückkopplungen passen nicht zur gerichteten, weitgehend zustandslosen Kette.",
   "Falsch: Für frei verzweigende, interaktive Abläufe ist das Muster nicht gedacht."
  ],
  "explanation": "Pipes and Filters passt zu einer gerichteten, mehrstufigen Verarbeitungskette mit voneinander unabhängigen Filtern (Ausgabe → Eingabe). Geteilter veränderlicher Zustand, komplexe Rückkopplung oder frei verzweigende Interaktion widersprechen dem Muster."
 },
 {
  "id": "c3q12",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R3",
  "type": "single",
  "q": "Welche Aussage zum Unterschied zwischen synchroner und asynchroner Kommunikation trifft zu?",
  "options": [
   "Bei synchroner Kommunikation ist der Aufrufer bis zur Antwort blockiert; asynchron entkoppelt das Absenden vom Verarbeiten zeitlich.",
   "Asynchrone Kommunikation koppelt Sender und Empfänger zeitlich enger, da beide gleichzeitig verfügbar sein müssen.",
   "Asynchrone Kommunikation ist verlässlicher, weil Nachrichten dabei nicht verloren gehen können.",
   "Ob ein Aufruf synchron oder asynchron ist, hängt allein davon ab, ob er lokal oder über das Netzwerk erfolgt."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Blockieren bis zur Antwort ist synchron; zeitliche Entkopplung ist asynchron.",
   "Near-Miss: Die gleichzeitige Verfügbarkeit ist gerade ein Merkmal synchroner Kommunikation.",
   "Falsch: Zuverlässigkeit hängt von der Infrastruktur ab; asynchron garantiert für sich keinen Nachrichtenerhalt.",
   "Falsch: Synchron/asynchron beschreibt das Warteverhalten, nicht den Ort (lokal vs. Netz)."
  ],
  "explanation": "Synchron heißt: der Aufrufer wartet blockierend; asynchron entkoppelt Absenden und Verarbeiten zeitlich. Die gleichzeitige Verfügbarkeit ist ein synchrones Merkmal, Zuverlässigkeit ist keine automatische Eigenschaft asynchroner Kommunikation, und der Ort (lokal/Netz) entscheidet nicht über sync/async."
 },
 {
  "id": "c3q13",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zu technischen Schulden (Technical Debt) treffen zu?",
  "options": [
   "Es sind aufgeschobene Kompromisse oder Mängel in Code bzw. Architektur.",
   "Unbehandelt erschweren und verteuern sie künftige Änderungen.",
   "Sie können sowohl bewusst (bekannte Abkürzung unter Termindruck) als auch unbewusst (fehlendes Wissen) entstehen.",
   "Technische Schulden sind gleichbedeutend mit den Lizenz- und Betriebskosten der eingesetzten Software.",
   "Solange keine neuen Features geplant sind, verursachen technische Schulden keine Kosten."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Technische Schulden sind aufgeschobene Kompromisse oder Mängel.",
   "Richtig: Unbehandelt steigern sie den Aufwand künftiger Änderungen.",
   "Richtig: Sie entstehen bewusst wie unbewusst (vgl. Technical-Debt-Quadrant).",
   "Near-Miss: Lizenz- und Betriebskosten sind laufende Kosten, keine technischen Schulden.",
   "Falsch: Auch ohne neue Features erhöhen sie Wartungs-, Fehler- und Verständniskosten."
  ],
  "explanation": "Technische Schulden sind aufgeschobene Mängel, die spätere Änderungen verteuern und sowohl bewusst als auch unbewusst entstehen. Sie sind keine Lizenz-/Betriebskosten und verursachen auch ohne neue Features Kosten."
 },
 {
  "id": "c3q14",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R2",
  "type": "single",
  "q": "Was fordert das Dependency-Inversion-Prinzip (DIP)?",
  "options": [
   "High-Level- und Low-Level-Module hängen von gemeinsamen Abstraktionen ab; Abstraktionen hängen nicht von Details ab, sondern Details von Abstraktionen.",
   "Objekte sollen ihre Abhängigkeiten von außen übergeben bekommen, statt sie selbst zu erzeugen.",
   "High-Level-Module sollen direkt von den konkreten Low-Level-Modulen abhängen, um Umwege zu vermeiden.",
   "Die Aufrufrichtung zwischen Modulen muss stets der Übersetzungsabhängigkeit entsprechen."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Beide Ebenen hängen von Abstraktionen ab; Details hängen von Abstraktionen, nicht umgekehrt.",
   "Near-Miss: Das beschreibt Dependency Injection (eine Technik), nicht das DIP (ein Prinzip).",
   "Falsch: Eine direkte Abhängigkeit von konkreten Low-Level-Modulen ist genau das, was das DIP vermeidet.",
   "Falsch: Das DIP kehrt die Quell-/Übersetzungsabhängigkeit gegenüber der Aufrufrichtung gerade um."
  ],
  "explanation": "Das DIP verlangt, dass beide Ebenen von Abstraktionen abhängen und Details von Abstraktionen, nicht umgekehrt. Dependency Injection ist eine Umsetzungstechnik, nicht das Prinzip selbst; eine direkte Abhängigkeit von Low-Level-Modulen widerspricht dem DIP."
 },
 {
  "id": "k3",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R2",
  "type": "k",
  "points": 2,
  "q": "Ordnen Sie jeden Begriff zu: Architekturmuster oder Entwurfsprinzip?",
  "categories": [
   "Architekturmuster",
   "Entwurfsprinzip"
  ],
  "rows": [
   {
    "text": "Pipes and Filters",
    "cat": 0
   },
   {
    "text": "Dependency Inversion Principle",
    "cat": 1
   },
   {
    "text": "Microservices",
    "cat": 0
   },
   {
    "text": "Separation of Concerns",
    "cat": 1
   }
  ],
  "explanation": "Pipes and Filters und Microservices sind Architekturmuster/-stile (Struktur des Gesamtsystems). Dependency Inversion und Separation of Concerns sind Entwurfsprinzipien (Leitlinien für guten Entwurf)."
 },
 {
  "id": "c3q15",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zu „Separation of Concerns“ (Trennung der Zuständigkeiten) treffen zu?",
  "options": [
   "Unterschiedliche Belange werden in getrennten, jeweils zuständigen Bausteinen behandelt.",
   "Sie fördert lose Kopplung und hohe Kohäsion und erleichtert so Änderungen und Tests.",
   "SoC bedeutet, aus Performancegründen möglichst viele Belange in einem einzigen Baustein zu bündeln.",
   "SoC und das Single Responsibility Principle sind identisch und beliebig austauschbar.",
   "SoC lässt sich ausschließlich durch physische Aufteilung in getrennte Dateien erreichen."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Richtig: Jeder Belang wird in einem eigenen, zuständigen Baustein behandelt.",
   "Richtig: SoC begünstigt lose Kopplung und hohe Kohäsion und damit Änder- und Testbarkeit.",
   "Falsch: Belange zu bündeln widerspricht der Trennung der Zuständigkeiten.",
   "Near-Miss: SoC ist ein breites Konzept; das SRP ist die klassenbezogene SOLID-Ausprägung – verwandt, aber nicht identisch.",
   "Falsch: SoC wirkt auf vielen Ebenen, nicht nur über physische Dateitrennung."
  ],
  "explanation": "SoC trennt Belange in eigene, zuständige Bausteine und begünstigt lose Kopplung/hohe Kohäsion. Belange zu bündeln widerspricht dem Prinzip; SoC ist breiter als das SRP und nicht auf physische Dateitrennung beschränkt."
 },
 {
  "id": "c3q16",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R3",
  "type": "single",
  "q": "Welche Aussage beschreibt das Prinzip DRY am genauesten?",
  "options": [
   "Jedes Stück Wissen bzw. jede Entscheidung hat eine einzige, eindeutige, autoritative Repräsentation im System.",
   "Zwei syntaktisch gleiche Codeabschnitte müssen immer zusammengeführt werden, auch wenn sie unterschiedliche fachliche Gründe haben.",
   "Kritische Logik wird sicherheitshalber an mehreren Stellen redundant implementiert.",
   "Das Prinzip betrifft ausschließlich doppelte Kommentare und Dokumentation, nicht doppelte Logik."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: DRY zielt auf eine einzige, autoritative Repräsentation jedes Wissens.",
   "Near-Miss: Zufällig gleicher Code aus verschiedenen fachlichen Gründen (zufällige Duplizierung) sollte gerade nicht erzwungen zusammengeführt werden.",
   "Falsch: Bewusste Redundanz als „Sicherheit“ widerspricht DRY.",
   "Falsch: DRY betrifft dupliziertes Wissen/Logik, nicht nur Kommentare."
  ],
  "explanation": "DRY fordert eine einzige, eindeutige Repräsentation jedes Wissens. Es zwingt nicht dazu, zufällig gleichen Code mit verschiedenen fachlichen Gründen zu vereinen, verlangt keine sicherheitshalber redundante Logik und betrifft nicht nur Kommentare."
 },
 {
  "id": "c3q17",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R3",
  "type": "single",
  "q": "Was besagt das Prinzip YAGNI?",
  "options": [
   "Keine Funktionalität auf Vorrat bauen, die aktuell (noch) nicht gebraucht wird.",
   "Möglichst viele Erweiterungspunkte vorab vorsehen, um spätere Änderungen billig zu halten.",
   "Jede Anforderung von Beginn an maximal generisch und konfigurierbar umsetzen.",
   "Bereits vorhandene, aber ungenutzte Funktionen dürfen aus Stabilitätsgründen nicht entfernt werden."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Nur bauen, was aktuell gebraucht wird, nichts auf Vorrat.",
   "Near-Miss: Erweiterungspunkte auf Vorrat sind spekulative Generalisierung – genau das, was YAGNI vermeidet.",
   "Falsch: Vorsorgliche Maximal-Generik widerspricht YAGNI.",
   "Falsch: Das Entfernen ungenutzter Funktionen ist ein anderes Thema als YAGNI."
  ],
  "explanation": "YAGNI heißt: nur bauen, was aktuell gebraucht wird. Vorsorgliche Erweiterungspunkte oder Maximal-Generik sind spekulative Generalisierung und widersprechen dem Prinzip; das Entfernen ungenutzter Funktionen ist ein anderes Thema."
 },
 {
  "id": "c3q18",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zu Architekturmustern treffen zu?",
  "options": [
   "Sie sind bewährte, wiederverwendbare Lösungsschablonen für wiederkehrende Strukturprobleme.",
   "Sie schaffen eine gemeinsame Sprache und müssen zum konkreten Problem passen.",
   "Sie sind fertige, wiederverwendbare Code-Bibliotheken, die man unverändert einbindet.",
   "Der Einsatz eines etablierten Musters garantiert unabhängig vom Kontext die beste Lösung.",
   "Sie geben die konkrete Technologie- und Frameworkwahl verbindlich vor."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Richtig: Muster sind bewährte, wiederverwendbare Schablonen.",
   "Richtig: Sie schaffen eine gemeinsame Sprache, müssen aber zum Problem passen.",
   "Near-Miss: Muster sind Lösungsschablonen/Konzepte, keine einzubindenden Code-Bibliotheken oder Frameworks.",
   "Falsch: Kein Muster garantiert kontextunabhängig die beste Lösung.",
   "Falsch: Muster sind technologieunabhängig und schreiben keine Framework-Wahl vor."
  ],
  "explanation": "Architekturmuster sind bewährte, wiederverwendbare Schablonen und eine gemeinsame Sprache, müssen aber zum Problem passen. Sie sind keine Code-Bibliotheken, garantieren nicht kontextunabhängig die beste Lösung und geben keine Technologie vor."
 },
 {
  "id": "c3q19",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R3",
  "type": "single",
  "q": "Was trennt das Muster Model-View-Controller (MVC)?",
  "options": [
   "Datenmodell, Darstellung (View) und Steuerung/Interaktion (Controller).",
   "Es entspricht exakt den drei technischen Schichten Präsentation, Anwendung und Datenhaltung.",
   "Die View greift ausschließlich über den Controller auf das Modell zu und kennt das Modell nie direkt.",
   "Es verschmilzt Modell und View bewusst zu einer gemeinsamen Komponente."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: MVC trennt die Zuständigkeiten Daten, Darstellung und Steuerung.",
   "Near-Miss: Technische Schichten sind eine andere Sicht; MVC ist keine 1:1-Entsprechung der Drei-Schichten-Architektur.",
   "Falsch: In der klassischen MVC-Ausprägung darf die View das Modell direkt beobachten; das ist keine Definitionsvoraussetzung.",
   "Falsch: MVC trennt Modell und View gerade, statt sie zu verschmelzen."
  ],
  "explanation": "MVC trennt Modell, View und Controller. Das ist nicht dasselbe wie die drei technischen Schichten, verlangt keinen ausschließlichen View-Zugriff über den Controller und verschmilzt Modell und View nicht."
 },
 {
  "id": "c3q20",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R1",
  "type": "multi",
  "q": "Welche Maßnahmen fördern lose Kopplung?",
  "options": [
   "Kommunikation über klar definierte Schnittstellen bzw. Abstraktionen.",
   "Ereignisbasierte (asynchrone) Kommunikation zwischen Bausteinen.",
   "Abhängigkeiten von außen injizieren (Dependency Injection), statt Bausteine selbst instanziieren zu lassen.",
   "Direkter Zugriff auf interne Felder anderer Bausteine für kürzere Wege.",
   "Gemeinsame globale, veränderliche Variablen für den Datenaustausch.",
   "Vererbung aus konkreten Klassen anderer Bausteine, um deren Verhalten direkt zu übernehmen."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Definierte Schnittstellen/Abstraktionen senken die Kopplung.",
   "Richtig: Ereignisbasierte, asynchrone Kommunikation entkoppelt Sender und Empfänger.",
   "Richtig: Dependency Injection löst die feste Bindung an konkrete Erzeugung auf.",
   "Falsch: Direkter Zugriff auf Interna erhöht die Kopplung.",
   "Falsch: Globale veränderliche Variablen erhöhen die Kopplung.",
   "Falsch: Vererbung aus konkreten Fremdklassen koppelt eng an deren Interna."
  ],
  "explanation": "Definierte Schnittstellen, ereignisbasierte Kommunikation und Dependency Injection senken die Kopplung. Direkter Zugriff auf Interna, globale veränderliche Variablen und Vererbung aus konkreten Fremdklassen erhöhen sie."
 },
 {
  "id": "c3q21",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R2",
  "type": "single",
  "q": "In einem System referenzieren sich die Bausteine A und B gegenseitig (zyklische Abhängigkeit). Welche Aussage trifft zu?",
  "options": [
   "Der Zyklus erschwert isoliertes Testen und unabhängiges Ändern; A und B lassen sich kaum getrennt verstehen oder wiederverwenden.",
   "In einer strengen Schichtenarchitektur ist ein solcher Zyklus zulässig, solange beide Bausteine in derselben Schicht liegen.",
   "Der Zyklus betrifft nur die Übersetzungs-/Buildzeit und hat keine Auswirkung auf die Wartbarkeit.",
   "Die gegenseitigen Referenzen verbessern die Performance, weil Umwege über dritte Bausteine entfallen."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Der Zyklus bindet A und B fest aneinander und erschwert Test, Änderung und Wiederverwendung.",
   "Near-Miss: Zyklen sind auch innerhalb einer Schicht unerwünscht und kein zulässiges Merkmal der Schichtung.",
   "Falsch: Zyklen wirken sich sehr wohl auf Verständnis und Wartbarkeit aus.",
   "Falsch: Zyklen bringen keinen Performancevorteil, erhöhen aber die Kopplung."
  ],
  "explanation": "Zyklen koppeln A und B gegenseitig fest und erschweren Verständnis, isoliertes Testen, Änderung und Wiederverwendung. Sie sind auch innerhalb einer Schicht unerwünscht, betreffen die Wartbarkeit und bringen keinen Performancevorteil."
 },
 {
  "id": "c3q22",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zu Refactoring treffen zu?",
  "options": [
   "Es verbessert die interne Struktur des Codes.",
   "Das nach außen beobachtbare Verhalten bleibt dabei unverändert.",
   "Automatisierte Tests sind eine wichtige Absicherung, um ungewollte Verhaltensänderungen früh zu erkennen.",
   "Beim Refactoring werden gezielt neue fachliche Funktionen ergänzt.",
   "Refactoring behebt gemeldete Fehler und korrigiert damit das fachliche Verhalten."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Refactoring verbessert die innere Struktur.",
   "Richtig: Das beobachtbare Verhalten bleibt gleich.",
   "Richtig: Tests sichern das unveränderte Verhalten während der Umstrukturierung ab.",
   "Near-Miss: Neue Funktionen zu ergänzen ist Feature-Arbeit, kein Refactoring.",
   "Falsch: Fehlerbehebung ändert das Verhalten und ist damit kein Refactoring."
  ],
  "explanation": "Refactoring verbessert die innere Struktur bei gleichem äußeren Verhalten und wird durch automatisierte Tests abgesichert. Neue Funktionen zu ergänzen ist Feature-Arbeit, und Fehler zu beheben ändert das Verhalten – beides ist kein Refactoring."
 },
 {
  "id": "c3q23",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R1",
  "type": "multi",
  "q": "Warum programmiert man bevorzugt gegen Schnittstellen statt gegen konkrete Implementierungen?",
  "options": [
   "Konkrete Implementierungen lassen sich dadurch leichter austauschen.",
   "Die Kopplung an Implementierungsdetails sinkt.",
   "Das isolierte Testen wird erleichtert, weil Abhängigkeiten durch Testdoubles ersetzt werden können.",
   "Aufrufe über eine Schnittstelle sind zur Laufzeit grundsätzlich schneller.",
   "Man benötigt dadurch keine bewusste Verwaltung der Abhängigkeiten mehr (z. B. Dependency Injection entfällt)."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Schnittstellen machen Implementierungen austauschbar.",
   "Richtig: Die Kopplung an konkrete Details sinkt.",
   "Richtig: Testdoubles lassen sich hinter Schnittstellen leicht einsetzen.",
   "Falsch: Ein pauschaler Laufzeit-Performancevorteil besteht nicht.",
   "Falsch: Die Bindung an eine konkrete Implementierung muss weiterhin bewusst erfolgen (z. B. per Dependency Injection) – Schnittstellen nehmen einem das nicht ab."
  ],
  "explanation": "Gegen Schnittstellen zu programmieren macht Implementierungen austauschbar, senkt die Kopplung an Details und erleichtert das isolierte Testen. Ein pauschaler Performancevorteil besteht nicht, und konkrete Implementierungen bleiben nötig."
 },
 {
  "id": "k6",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Ordnen Sie zu: erhöht die Kopplung oder reduziert die Kopplung?",
  "categories": [
   "Erhöht Kopplung",
   "Reduziert Kopplung"
  ],
  "rows": [
   {
    "text": "Bausteine tauschen Daten über gemeinsame, veränderliche globale Variablen aus",
    "cat": 0
   },
   {
    "text": "Kommunikation ausschließlich über eine schmale, stabile Schnittstelle",
    "cat": 1
   },
   {
    "text": "Ein Baustein erbt von einer konkreten Klasse eines anderen Bausteins",
    "cat": 0
   },
   {
    "text": "Ereignisbasierte Kommunikation über einen Publish/Subscribe-Kanal",
    "cat": 1
   }
  ],
  "explanation": "Geteilte globale veränderliche Variablen und Vererbung aus konkreten Fremdklassen binden Bausteine eng an fremde Interna und erhöhen die Kopplung. Eine schmale, stabile Schnittstelle und ereignisbasierte Publish/Subscribe-Kommunikation entkoppeln und verringern sie."
 },
 {
  "id": "k8",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R3",
  "type": "k",
  "points": 2,
  "q": "Gehört das jeweilige Prinzip zu SOLID?",
  "categories": [
   "Teil von SOLID",
   "Nicht Teil von SOLID"
  ],
  "rows": [
   {
    "text": "Interface Segregation Principle",
    "cat": 0
   },
   {
    "text": "Liskov Substitution Principle",
    "cat": 0
   },
   {
    "text": "Separation of Concerns",
    "cat": 1
   },
   {
    "text": "Law of Demeter",
    "cat": 1
   }
  ],
  "explanation": "SOLID = SRP, OCP, LSP, ISP, DIP – dazu zählen Interface Segregation und Liskov Substitution. Separation of Concerns und das Law of Demeter sind wichtige, aber eigenständige Prinzipien außerhalb von SOLID."
 },
 {
  "id": "c3q24",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zum Open/Closed-Prinzip (OCP) treffen zu?",
  "options": [
   "Bausteine sollen offen für Erweiterung, aber geschlossen für Änderung sein.",
   "Neues Verhalten wird bevorzugt über Abstraktionen/Polymorphie ergänzt, statt erprobten Code zu ändern.",
   "OCP verlangt, dass jede Klasse genau eine einzige Verantwortlichkeit besitzt.",
   "Der vom OCP bevorzugte Weg, neues Verhalten einzubauen, ist das direkte Ändern des erprobten Codes.",
   "OCP wird erreicht, indem alle Klassen versiegelt (final) und damit nicht mehr erweiterbar gemacht werden."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Richtig: Offen für Erweiterung, geschlossen für Änderung ist der Kern des OCP.",
   "Richtig: Neues Verhalten über Abstraktionen ergänzen, ohne erprobten Code zu ändern.",
   "Near-Miss: Genau eine Verantwortlichkeit pro Klasse ist das SRP, nicht das OCP.",
   "Falsch: Erprobten Code direkt zu ändern widerspricht dem OCP.",
   "Falsch: Alles zu versiegeln verhindert gerade die Offenheit für Erweiterung."
  ],
  "explanation": "Das OCP will Bausteine offen für Erweiterung und geschlossen für Änderung – neues Verhalten wird über Abstraktionen ergänzt. „Eine Verantwortlichkeit pro Klasse“ ist das SRP; direktes Ändern oder pauschales Versiegeln widersprechen dem Prinzip."
 },
 {
  "id": "c3q25",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R3",
  "type": "single",
  "q": "Was empfiehlt das Interface-Segregation-Prinzip (ISP)?",
  "options": [
   "Schmale, rollenspezifische Schnittstellen, damit Clients nicht von Methoden abhängen, die sie gar nicht nutzen.",
   "Clients sollen nur von Abstraktionen statt von konkreten Klassen abhängen.",
   "Möglichst viele Operationen in einer zentralen Schnittstelle bündeln, um Konsistenz zu sichern.",
   "Schnittstellen nach technischen Schichten statt nach den Bedürfnissen der Clients schneiden."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: ISP fordert schmale, rollenspezifische Schnittstellen ohne unnötige Abhängigkeiten.",
   "Near-Miss: Die Abhängigkeit von Abstraktionen statt konkreten Klassen ist das DIP, nicht das ISP.",
   "Falsch: Eine große Sammel-Schnittstelle ist das Gegenteil von ISP.",
   "Falsch: ISP schneidet nach Client-Rollen, nicht nach technischen Schichten."
  ],
  "explanation": "ISP: keine Abhängigkeit von ungenutzten Methoden – also schmale, rollenspezifische Schnittstellen. Die Abhängigkeit von Abstraktionen ist das DIP; eine große Sammel-Schnittstelle oder ein Schnitt nach Schichten widersprechen dem ISP."
 },
 {
  "id": "c3q26",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R3",
  "type": "single",
  "q": "Was fordert das Liskovsche Substitutionsprinzip (LSP)?",
  "options": [
   "Objekte eines Subtyps müssen anstelle ihres Basistyps verwendbar sein, ohne die Korrektheit des Programms zu brechen.",
   "Ein Subtyp darf die Vorbedingungen seiner Methoden verschärfen und die Nachbedingungen abschwächen.",
   "LSP ist bereits erfüllt, sobald der Subtyp syntaktisch von der Basisklasse erbt und die Signaturen passen.",
   "LSP fordert, Vererbung generell durch Komposition zu ersetzen."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Ein Subtyp muss den Basistyp überall verhaltenskonform ersetzen können.",
   "Near-Miss: Genau umgekehrt – Vorbedingungen dürfen nicht verschärft, Nachbedingungen nicht abgeschwächt werden.",
   "Falsch: LSP ist eine Verhaltensfrage; Signaturkompatibilität allein genügt nicht.",
   "Falsch: LSP betrifft die Ersetzbarkeit von Subtypen, nicht die Wahl zwischen Vererbung und Komposition."
  ],
  "explanation": "LSP verlangt, dass ein Subtyp den Basistyp verhaltenskonform ersetzen kann. Vorbedingungen dürfen nicht verschärft und Nachbedingungen nicht abgeschwächt werden; syntaktische Vererbung allein genügt nicht, und mit dem Ersatz von Vererbung durch Komposition hat es nichts zu tun."
 },
 {
  "id": "c3q27",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R3",
  "type": "single",
  "q": "Was kennzeichnet ein ereignisgetriebenes (Publish/Subscribe-)Muster?",
  "options": [
   "Sender veröffentlichen Ereignisse, ohne die Empfänger zu kennen; beliebig viele Empfänger können darauf reagieren – lose gekoppelt.",
   "Sender und Empfänger sind eng gekoppelt, da der Sender jeden registrierten Empfänger direkt und synchron aufruft.",
   "Der Empfänger muss jede Ereignismeldung synchron quittieren, bevor der Sender fortfahren darf.",
   "Empfänger fragen den Sender in festen Intervallen aktiv ab (Polling)."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Sender und Empfänger sind über Ereignisse entkoppelt, mehrere Empfänger sind möglich.",
   "Falsch: Ein direkter, synchroner Aufruf widerspricht der Entkopplung.",
   "Near-Miss: Eine synchrone Quittierung würde Sender und Empfänger wieder koppeln – untypisch für Publish/Subscribe.",
   "Falsch: Polling beschreibt nicht das ereignisgetriebene Publish/Subscribe-Muster."
  ],
  "explanation": "Bei Publish/Subscribe sind Sender und Empfänger über Ereignisse entkoppelt, und mehrere Empfänger sind möglich. Ein direkter/synchroner Aufruf, eine erzwungene synchrone Quittierung oder Polling widersprechen dem Muster."
 },
 {
  "id": "c3q28",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R3",
  "type": "single",
  "q": "Was beschreibt das Client-Server-Muster?",
  "options": [
   "Anfragende Clients nutzen Dienste eines bereitstellenden Servers über eine definierte Schnittstelle.",
   "Alle Knoten sind gleichrangig und bieten sich gegenseitig dieselben Dienste an.",
   "Der Server nimmt von sich aus Verbindungen zu den Clients auf und stößt die Interaktion an.",
   "Client und Server müssen im selben Prozess auf demselben Rechner ausgeführt werden."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Der Client fordert Dienste beim Server über eine definierte Schnittstelle an.",
   "Near-Miss: Gleichrangige Knoten beschreiben Peer-to-Peer, nicht Client-Server.",
   "Falsch: Der Server verhält sich reaktiv; die Interaktion geht vom Client aus.",
   "Falsch: Client und Server laufen typischerweise in getrennten Prozessen, oft auf verschiedenen Rechnern."
  ],
  "explanation": "Im Client-Server-Muster fordert der Client Dienste beim Server über eine definierte Schnittstelle an. Gleichrangige Knoten sind Peer-to-Peer; der Server ist reaktiv, nicht initiierend; und getrennte Prozesse/Rechner sind der Normalfall."
 },
 {
  "id": "c3q29",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zur Heuristik „Komposition vor Vererbung“ treffen zu?",
  "options": [
   "Verhalten lässt sich oft besser durch das Zusammensetzen von Objekten erreichen als durch tiefe Vererbung.",
   "Komposition vermeidet die enge Bindung und Fragilität tiefer Vererbungshierarchien.",
   "Komposition und Vererbung sind austauschbare Techniken, deren Wahl keine Auswirkung auf die Kopplung hat.",
   "Bei Komposition erbt das umschließende Objekt automatisch alle Methoden seiner Bestandteile.",
   "Komposition ist zur Laufzeit grundsätzlich schneller als Vererbung."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Richtig: Zusammensetzen ist oft flexibler als tiefe Vererbung.",
   "Richtig: Komposition vermeidet die Fragilität tiefer Hierarchien.",
   "Falsch: Die Wahl beeinflusst die Kopplung sehr wohl – Vererbung koppelt enger an die Basisklasse.",
   "Near-Miss: Bei Komposition wird nichts automatisch geerbt; Aufrufe müssen explizit delegiert werden.",
   "Falsch: Es geht um Flexibilität und Kopplung, nicht um einen pauschalen Laufzeitvorteil."
  ],
  "explanation": "Komposition ist meist flexibler und weniger fragil als tiefe Vererbung – eine Heuristik, kein Verbot. Die Wahl beeinflusst die Kopplung, bei Komposition wird nichts automatisch geerbt (explizite Delegation), und ein pauschaler Laufzeitvorteil besteht nicht."
 },
 {
  "id": "c3q30",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R3",
  "type": "multi",
  "q": "Welche Aussagen zu zustandslosen (stateless) Diensten treffen zu?",
  "options": [
   "Anfragen können auf beliebige, gleichwertige Instanzen verteilt werden.",
   "Das erleichtert horizontale Skalierung und Lastverteilung.",
   "Zustand, der über eine einzelne Anfrage hinaus nötig ist, wird bewusst nach außen ausgelagert (z. B. Datenbank, Cache, Token).",
   "Der Sitzungszustand wird fest an die Instanz gebunden, die die erste Anfrage bearbeitet hat (Sticky Sessions als Wesensmerkmal).",
   "Zustandslose Dienste können weder Daten verarbeiten noch persistieren."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Ohne gebundenen Zustand kann jede gleichwertige Instanz jede Anfrage bearbeiten.",
   "Richtig: Das erleichtert horizontale Skalierung und Lastverteilung.",
   "Richtig: Übergreifender Zustand wird nach außen ausgelagert – typisch für stateless.",
   "Near-Miss: Feste Instanz-Bindung (Sticky Session) ist gerade zustandsbehaftetes Verhalten.",
   "Falsch: Zustandslose Dienste verarbeiten sehr wohl Daten und können externen Zustand persistieren."
  ],
  "explanation": "Ohne gebundenen Sitzungszustand kann jede Instanz jede Anfrage bearbeiten, was Skalierung und Lastverteilung erleichtert; übergreifender Zustand wird nach außen ausgelagert. Sticky Sessions sind zustandsbehaftet, und stateless bedeutet nicht, dass keine Daten verarbeitet werden."
 },
 {
  "id": "c3q31",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R1",
  "type": "multi",
  "q": "Welche Eigenschaften fördern strukturell die Wartbarkeit bzw. Änderbarkeit eines Systems?",
  "options": [
   "Hohe Kohäsion je Baustein (zusammengehörige Aufgaben sind gebündelt).",
   "Klar definierte, stabile Schnittstellen, hinter denen die Implementierung austauschbar bleibt.",
   "Geringe Kopplung zwischen den Bausteinen.",
   "Möglichst wenige, dafür sehr große Bausteine, um die Zahl der Schnittstellen klein zu halten.",
   "Ein global geteiltes Datenmodell, auf das alle Bausteine direkt zugreifen."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Hohe Kohäsion hält Zusammengehöriges beisammen und erleichtert lokale Änderungen.",
   "Richtig: Stabile Schnittstellen entkoppeln Nutzung von Implementierung – die Umsetzung bleibt austauschbar.",
   "Richtig: Geringe Kopplung erlaubt unabhängiges Ändern und Testen.",
   "Falsch: Sehr große Bausteine senken die Kohäsion und bündeln Unzusammenhängendes – trotz weniger Schnittstellen schlechter wartbar.",
   "Falsch: Ein global direkt genutztes Datenmodell erzeugt starke Kopplung; Änderungen daran wirken sich überall aus."
  ],
  "explanation": "Strukturell zahlen hohe Kohäsion, stabile Schnittstellen und geringe Kopplung auf die Wartbarkeit ein. Wenige sehr große Bausteine (geringe Kohäsion) und ein global geteiltes Datenmodell (starke Kopplung) klingen einfach, verschlechtern die Änderbarkeit aber."
 },
 {
  "id": "c3q32",
  "chapter": 3,
  "lz": "LZ 03-10",
  "r": "R3",
  "type": "single",
  "q": "Wozu dienen Resilienz-Muster wie Timeout, Retry oder Circuit Breaker?",
  "options": [
   "Zum robusten Umgang mit Fehlern und Ausfällen, besonders in verteilten Systemen.",
   "Ein Circuit Breaker beschleunigt fehlerfreie Aufrufe, indem er deren Ergebnisse zwischenspeichert (Caching).",
   "Retry garantiert, dass ein zunächst fehlgeschlagener entfernter Aufruf am Ende erfolgreich ist.",
   "Ein Timeout ersetzt die eigentliche Fehlerbehandlung vollständig."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Diese Muster helfen, mit Fehlern und Ausfällen robust umzugehen.",
   "Near-Miss: Ergebnis-Zwischenspeicherung ist Caching; ein Circuit Breaker unterbindet nur Aufrufe an einen ausgefallenen Dienst.",
   "Falsch: Retry erhöht die Erfolgschance, garantiert aber keinen Erfolg.",
   "Falsch: Ein Timeout begrenzt Wartezeiten, ersetzt aber die Fehlerbehandlung nicht."
  ],
  "explanation": "Timeout, Retry und Circuit Breaker helfen, mit Fehlern und Ausfällen umzugehen. Ein Circuit Breaker ist kein Cache, Retry garantiert keinen Erfolg, und ein Timeout ersetzt die Fehlerbehandlung nicht, sondern ergänzt sie."
 },
 {
  "id": "k9",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R3",
  "type": "k",
  "points": 2,
  "q": "Synchrone oder asynchrone Kommunikation?",
  "categories": [
   "Synchron",
   "Asynchron"
  ],
  "rows": [
   {
    "text": "Der Aufrufer blockiert, bis das Ergebnis vorliegt.",
    "cat": 0
   },
   {
    "text": "Der Sender legt eine Nachricht in eine Queue und fährt sofort fort.",
    "cat": 1
   },
   {
    "text": "Ein Aufruf, dessen Antwort im selben Request/Response abgewartet wird.",
    "cat": 0
   },
   {
    "text": "Ein Ereignis wird publiziert; Empfänger verarbeiten es zu einem späteren Zeitpunkt.",
    "cat": 1
   }
  ],
  "explanation": "Synchron heißt: der Aufrufer wartet blockierend auf die Antwort (auch beim abgewarteten Request/Response). Asynchron entkoppelt Sender und Empfänger zeitlich – über Queues oder später verarbeitete Ereignisse."
 },
 {
  "id": "c3q33",
  "chapter": 3,
  "lz": "LZ 03-09",
  "r": "R3",
  "type": "single",
  "q": "Wozu dient das Fassaden-Muster (Facade)?",
  "options": [
   "Es bietet einen vereinfachten, einheitlichen Zugang zu einem komplexeren Subsystem.",
   "Es übersetzt zwischen zwei zueinander inkompatiblen Schnittstellen, damit sie zusammenarbeiten.",
   "Es kapselt den Zugriff auf ein Objekt und kontrolliert ihn stellvertretend (z. B. Lazy Loading, Zugriffsschutz).",
   "Es legt den internen Aufbau des Subsystems vollständig offen, damit Clients direkt darauf zugreifen."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Eine Fassade bietet vereinfachten, einheitlichen Zugang zu einem komplexeren Subsystem.",
   "Near-Miss: Das Übersetzen inkompatibler Schnittstellen ist Aufgabe des Adapters.",
   "Near-Miss: Stellvertretende Zugriffskontrolle beschreibt den Proxy, nicht die Fassade.",
   "Falsch: Eine Fassade verbirgt den internen Aufbau, statt ihn offenzulegen."
  ],
  "explanation": "Eine Fassade vereinfacht den Zugang zu einem Subsystem und verbirgt dessen Komplexität. Das Übersetzen inkompatibler Schnittstellen ist der Adapter, die stellvertretende Zugriffskontrolle der Proxy; das Offenlegen der Interna widerspricht dem Muster."
 },
 {
  "id": "c3q34",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zu einem Modul (Baustein) im Sinne der Modularisierung treffen zu?",
  "options": [
   "Es bündelt zusammengehörige Funktionalität hinter einer definierten Schnittstelle (hohe Kohäsion).",
   "Sein interner Aufbau darf geändert werden, ohne Nutzer zu brechen, solange die Schnittstelle stabil bleibt.",
   "Ein Modul ist stets deckungsgleich mit genau einem Laufzeitprozess.",
   "Die Modulgrenze ergibt sich zwingend aus der physischen Verzeichnisstruktur des Projekts.",
   "Ein Modul ist grundsätzlich dasselbe wie eine einzelne Klasse oder Funktion."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Richtig: Ein Modul kapselt zusammengehörige Aufgaben hinter einer klaren Schnittstelle.",
   "Richtig: Genau das ermöglicht Information Hiding – Interna sind austauschbar, solange der Vertrag hält.",
   "Baustein (Entwurf) und Laufzeitprozess (Betrieb) sind verschiedene Sichten; ein Modul kann anders deployt werden.",
   "Die Verzeichnisstruktur ist eine mögliche Abbildung, aber kein zwingendes Kriterium der Modulgrenze.",
   "Das verwechselt Granularitätsebenen: ein Modul ist meist gröber als eine einzelne Klasse/Funktion."
  ],
  "explanation": "Ein Modul bündelt Funktionalität hinter einer Schnittstelle (hohe Kohäsion) und erlaubt den Austausch seiner Interna bei stabilem Vertrag. Es ist nicht per se ein Prozess, nicht durch die Ordnerstruktur definiert und nicht mit einer einzelnen Klasse/Funktion gleichzusetzen."
 },
 {
  "id": "c3q35",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zum Trade-off zwischen Monolith und Microservices treffen zu?",
  "options": [
   "Ein Monolith lässt sich meist einfacher end-to-end testen und als Ganzes betreiben.",
   "Microservices können unabhängig deployt und skaliert werden, erhöhen aber die Betriebskomplexität.",
   "Ein modularer Monolith kann intern klare Baustein-Grenzen haben, wird aber weiterhin als eine Einheit deployt.",
   "Microservices vermeiden verteilte Fehlerquellen, weil die Kommunikation im selben Prozess bleibt.",
   "Der Wechsel zu Microservices senkt automatisch die Kopplung zwischen den fachlichen Bereichen."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Als eine Einheit ist der Monolith einfacher zu integrieren und zu testen.",
   "Richtig: Unabhängiges Deployment/Skalierung erkauft man mit höherer Betriebskomplexität.",
   "Richtig: Modularität ist eine Frage der internen Struktur, nicht der Deployment-Granularität.",
   "Falsch: Microservices verlagern Kommunikation ins Netz und schaffen dadurch gerade neue (Teil-)Fehlerquellen.",
   "Falsch: Ein schlechter fachlicher Schnitt bleibt auch verteilt eng gekoppelt – die Technik allein entkoppelt nicht."
  ],
  "explanation": "Monolith = einfacherer Betrieb/Test; Microservices = unabhängige Skalierung/Deployment bei höherer Betriebskomplexität; ein modularer Monolith ist möglich. Verteilung beseitigt keine Fehlerquellen (sie schafft neue) und entkoppelt nicht automatisch – die Kopplung entscheidet der fachliche Schnitt."
 },
 {
  "id": "c3q36",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zum Einsatz bewährter Architektur- und Entwurfsmuster treffen zu?",
  "options": [
   "Sie bündeln erprobtes Lösungswissen und senken so Entwurfsrisiken.",
   "Sie schaffen ein gemeinsames Vokabular, das die Kommunikation im Team erleichtert.",
   "Ein Muster ist stets im Kontext seiner Trade-offs zu bewerten; ein falsch gewähltes Muster kann schaden.",
   "Ein bekanntes Muster ist auch dann die beste Wahl, wenn ein einfacherer, musterfreier Entwurf ausreichen würde.",
   "Ein einmal gewähltes Muster ist unverändert zu übernehmen; eine Anpassung an den Kontext ist nicht nötig."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Muster kondensieren bewährtes Wissen und senken das Risiko, das Rad neu zu erfinden.",
   "Richtig: Bekannte Musternamen bilden eine gemeinsame Sprache.",
   "Richtig: Jedes Muster hat Kontextbedingungen und Konsequenzen; falsch angewandt schadet es.",
   "Falsch: Der einfachste tragfähige Entwurf ist vorzuziehen; ein Muster nur um seiner selbst willen ist Over-Engineering.",
   "Falsch: Muster sind an ihren Kontext anzupassen – die unveränderte Übernahme passt selten exakt."
  ],
  "explanation": "Muster senken Risiko, schaffen ein gemeinsames Vokabular und sind anhand ihrer Trade-offs auszuwählen. Ein Muster nur um seiner selbst willen (statt des einfachsten tragfähigen Entwurfs) oder die unangepasste Übernahme sind Fehlanwendungen."
 },
 {
  "id": "c3q37",
  "chapter": 3,
  "lz": "LZ 03-03",
  "r": "R3",
  "type": "multi",
  "q": "Welche Aussagen zu einem fachlich orientierten Schnitt (z. B. Bounded Contexts im DDD) treffen zu?",
  "options": [
   "Bausteine werden entlang fachlicher Grenzen/Domänen geschnitten, nicht primär nach technischen Schichten.",
   "Ein Bounded Context grenzt ein Modell mit eigener, in sich konsistenter Sprache (Ubiquitous Language) ab.",
   "Fachliche Grenzen können quer zu technischen Schichten verlaufen.",
   "Ein rein technischer Schichtenschnitt (UI/Logik/DB) ist die empfohlene Umsetzung eines fachlichen Schnitts.",
   "Bei fachlichem Schnitt teilen sich alle Kontexte zwingend ein einziges, globales Domänenmodell."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Der fachliche Schnitt folgt Domänen/Bounded Contexts, nicht rein technischen Schichten.",
   "Richtig: Der Bounded Context grenzt Gültigkeit von Modell und Sprache ab.",
   "Richtig: Ein Kontext umfasst i. d. R. mehrere Schichten – die Grenze verläuft fachlich, nicht horizontal.",
   "Falsch: Der technische Schichtenschnitt ist gerade kein fachlicher Schnitt.",
   "Falsch: Das widerspricht dem Kern von Bounded Contexts – Modelle dürfen sich je Kontext unterscheiden."
  ],
  "explanation": "Ein fachlicher Schnitt orientiert sich an Domänen/Bounded Contexts mit eigener Ubiquitous Language und kann quer zu technischen Schichten liegen. Ein technischer Schichtenschnitt ist kein fachlicher Schnitt, und ein einziges globales Modell widerspricht der Idee der Bounded Contexts."
 },
 {
  "id": "c3q38",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zur Kapselung (Encapsulation) treffen zu?",
  "options": [
   "Daten und die auf ihnen operierenden Funktionen werden zu einer Einheit zusammengefasst.",
   "Der interne Zustand ist nur über eine definierte Schnittstelle zugänglich; Interna bleiben verborgen.",
   "Kapselung erlaubt, die interne Repräsentation zu ändern, ohne Nutzer der Schnittstelle zu brechen.",
   "Kapselung bedeutet in erster Linie, zusammengehörige Klassen im selben Paket abzulegen.",
   "Kapselung ist gleichbedeutend mit dem Verbergen des Quellcodes vor unbefugtem Lesen (Obfuskation)."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Kapselung bündelt Daten mit ihrem Verhalten.",
   "Richtig: Der innere Zustand bleibt hinter der Schnittstelle verborgen (Information Hiding).",
   "Richtig: Genau darin liegt der Nutzen – die Implementierung ist austauschbar.",
   "Paketierung ist nur eine strukturelle Gruppierung und stellt für sich keine Kapselung her.",
   "Kapselung ist ein Entwurfskonzept, nicht das Verschlüsseln/Verschleiern von Quellcode."
  ],
  "explanation": "Kapselung bündelt Daten und Verhalten, verbirgt den inneren Zustand hinter einer Schnittstelle und macht die Implementierung austauschbar. Paketierung und Obfuskation sind jeweils andere Konzepte."
 },
 {
  "id": "c3q39",
  "chapter": 3,
  "lz": "LZ 03-09",
  "r": "R3",
  "type": "single",
  "q": "Ein bestehender Zahlungsdienstleister bietet eine Schnittstelle, die nicht zu der von Ihrem System erwarteten passt. Welches Muster ist hier einschlägig?",
  "options": [
   "Adapter – er übersetzt zwischen erwarteter und vorhandener Schnittstelle, ohne beide zu ändern.",
   "Fassade – sie bietet einen vereinfachten Zugang zu einem komplexen Subsystem.",
   "Proxy – er stellt einen Stellvertreter mit gleicher Schnittstelle vor das eigentliche Objekt.",
   "Publish/Subscribe – es entkoppelt Sender und Empfänger vollständig über Ereignisse."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Der Adapter überbrückt genau die Inkompatibilität zweier Schnittstellen.",
   "Die Fassade vereinfacht den Zugang, verändert aber nicht eine inkompatible Schnittstellensignatur.",
   "Der Proxy hat dieselbe Schnittstelle wie das Zielobjekt – er löst gerade kein Kompatibilitätsproblem.",
   "Pub/Sub entkoppelt über Ereignisse, adressiert aber nicht das Anpassen einer festen Signatur."
  ],
  "explanation": "Bei inkompatiblen Schnittstellen ist der Adapter das passende Muster. Fassade (Vereinfachung), Proxy (gleiche Schnittstelle, Stellvertretung) und Publish/Subscribe (Ereignisentkopplung) lösen andere Probleme – hier sind sie plausible, aber falsche Kandidaten."
 },
 {
  "id": "c3q40",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R1",
  "type": "multi",
  "q": "Welche gehören zu den Zielen der Modularisierung?",
  "options": [
   "Unabhängige Entwicklung einzelner Teile durch verschiedene Personen/Teams.",
   "Wiederverwendbarkeit klar geschnittener Bausteine.",
   "Lokale Begrenzung der Auswirkung von Änderungen.",
   "Die Gesamtzahl der Bausteine möglichst gering halten, um die Übersicht zu wahren.",
   "Bausteine möglichst generisch auslegen, um maximale Wiederverwendung zu erreichen."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Klar getrennte Module lassen sich parallel entwickeln.",
   "Richtig: Gut geschnittene Bausteine sind wiederverwendbar.",
   "Richtig: Änderungen bleiben lokal begrenzt und wirken nicht überall.",
   "Falsch: die Bausteinzahl zu minimieren ist kein Ziel der Modularisierung – zu grobe Bausteine senken die Kohäsion und erschweren die Zerlegung.",
   "Near-Miss: Wiederverwendung ist ein Ziel, aber „möglichst generisch“ auf die Spitze getrieben senkt die Kohäsion und erhöht die Komplexität – kein Kernziel."
  ],
  "explanation": "Modularisierung zielt auf unabhängige Entwicklung, Wiederverwendung und lokal begrenzte Änderungen. Weder die bloße Minimierung der Bausteinzahl noch maximale Übergeneralisierung sind Ziele – beide können die Kohäsion senken."
 },
 {
  "id": "c3q41",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zum Trade-off bei starker Wiederverwendung treffen zu?",
  "options": [
   "Breit wiederverwendbare Bausteine werden oft allgemeiner und dadurch komplexer.",
   "Viele Nutzer eines Bausteins erhöhen die (afferente) Kopplung an ihn und erschweren Änderungen.",
   "Ein wiederverwendbarer Baustein braucht stabile, gut versionierte Schnittstellen.",
   "Wiederverwendung reduziert immer die Gesamtkosten, da Entwicklungsaufwand nur einmal anfällt.",
   "DRY verlangt, jede denkbare Funktionalität sofort möglichst generisch wiederverwendbar zu machen."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Verallgemeinerung erhöht die Komplexität wiederverwendbarer Bausteine.",
   "Richtig: Viele abhängige Nutzer machen Änderungen riskant.",
   "Richtig: Ohne stabile/versionierte Schnittstellen bricht Wiederverwendung leicht.",
   "Der Aufwand für Verallgemeinerung, Pflege und Abstimmung kann die Ersparnis übersteigen.",
   "DRY zielt auf das Vermeiden von Duplikation, nicht auf vorauseilende Über-Generalisierung."
  ],
  "explanation": "Wiederverwendung macht Bausteine allgemeiner/komplexer, erhöht die Kopplung durch viele Nutzer und erfordert stabile, versionierte Schnittstellen. Sie ist nicht automatisch billiger, und DRY rechtfertigt keine voreilige Über-Generalisierung."
 },
 {
  "id": "k12",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Fördert das Merkmal die Wartbarkeit oder schadet es ihr?",
  "categories": [
   "Fördert Wartbarkeit",
   "Schadet Wartbarkeit"
  ],
  "rows": [
   {
    "text": "Klar definierte, stabile Schnittstellen zwischen Bausteinen",
    "cat": 0
   },
   {
    "text": "Zyklische Abhängigkeiten zwischen mehreren Bausteinen",
    "cat": 1
   },
   {
    "text": "Hohe Kohäsion innerhalb der Bausteine",
    "cat": 0
   },
   {
    "text": "Breit gestreuter, duplizierter Code (Verletzung von DRY)",
    "cat": 1
   }
  ],
  "explanation": "Klare Schnittstellen und hohe Kohäsion fördern die Wartbarkeit. Zyklische Abhängigkeiten und Duplizierung erschweren Änderungen und verletzen lose Kopplung bzw. DRY."
 },
 {
  "id": "c3q42",
  "chapter": 3,
  "lz": "LZ 03-03",
  "r": "R1",
  "type": "single",
  "q": "Was empfiehlt sich beim Entwurf hinsichtlich fachlicher und technischer Architektur?",
  "options": [
   "Zuerst den fachlichen Schnitt (Problemraum) verstehen und die technische Lösung darauf ausrichten.",
   "Fachlichen und technischen Schnitt strikt getrennt und unabhängig voneinander entwerfen, ohne sie aufeinander abzustimmen.",
   "Den technischen Schnitt vorrangig am Organigramm der Entwicklungsteams ausrichten.",
   "Den fachlichen Schnitt erst festlegen, nachdem alle nichtfunktionalen Anforderungen (z. B. Performance) vollständig erfüllt sind."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Erst den Problemraum verstehen, dann die Technik darauf ausrichten.",
   "Near-Miss: Beide Sichten sind zu unterscheiden, müssen aber aufeinander abgestimmt sein – ein völlig unabhängiger Entwurf passt nicht zusammen.",
   "Falsch: Sich allein am Organigramm auszurichten ist ein Conway-Fehlschluss – maßgeblich ist der fachliche Schnitt, nicht die Teamstruktur.",
   "Falsch: Der fachliche Schnitt bestimmt die Struktur maßgeblich; NFRs wie Performance rechtfertigen keinen an der Fachlichkeit vorbei gewählten Schnitt."
  ],
  "explanation": "Erst den fachlichen Schnitt/Problemraum verstehen, dann die Technik darauf ausrichten. Ein völlig unabhängiger Technik-/Fachschnitt, die Ausrichtung am Organigramm oder das Nachordnen der Fachlichkeit hinter NFRs führen zu schlecht geschnittenen Systemen."
 },
 {
  "id": "c3q43",
  "chapter": 3,
  "lz": "LZ 03-03",
  "r": "R2",
  "type": "single",
  "q": "Worauf weist die „Millersche Zahl“ (7±2) beim Strukturieren einer Architektur hin?",
  "options": [
   "Die Zahl gleichzeitig überblickbarer Elemente ist begrenzt – die Zerlegung pro Ebene sollte überschaubar bleiben.",
   "Miller schreibt vor, dass ein System aus höchstens sieben Modulen bestehen darf.",
   "7±2 ist eine empirisch belegte Obergrenze für die optimale Teamgröße im Entwurf.",
   "7±2 gibt die ideale Anzahl von Schnittstellenoperationen pro Baustein an."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Nur wenige „Chunks“ sind gleichzeitig fassbar – deshalb pro Ebene überschaubar zerlegen.",
   "Es ist keine harte Obergrenze für die Modulanzahl, sondern eine kognitive Faustregel.",
   "Miller bezieht sich auf gleichzeitig fassbare Informationseinheiten, nicht auf Teamgrößen.",
   "Die Zahl trifft keine Aussage über die Zahl von Schnittstellenoperationen."
  ],
  "explanation": "Miller beschreibt die begrenzte Zahl gleichzeitig fassbarer Chunks (~7±2) – ein Argument für überschaubare Zerlegung je Ebene. Es ist keine feste Obergrenze für Module, keine Teamgröße und keine Vorgabe für Schnittstellenoperationen."
 },
 {
  "id": "c3q44",
  "chapter": 3,
  "lz": "LZ 03-03",
  "r": "R2",
  "type": "single",
  "q": "Welche Aussage über das Vorgehen beim Architekturentwurf trifft zu?",
  "options": [
   "Eine Architektur lässt sich nicht rein linear aus den Anforderungen ableiten; der Entwurf verläuft iterativ und explorativ.",
   "Es existiert ein universelles Standardverfahren, das in jedem Projekt die optimale Architektur liefert.",
   "Steht das Anforderungsdokument fest, ergibt sich die Architektur eindeutig und automatisch.",
   "Einmal getroffene Entwurfsentscheidungen sollten nach Projektbeginn nicht mehr revidiert werden, um Stabilität zu sichern."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Architektur entsteht iterativ, nicht als lineare Ableitung.",
   "Es gibt keine „Silver Bullet“, die in jedem Kontext optimal passt.",
   "Aus Anforderungen ergibt sich keine eindeutige Architektur automatisch.",
   "Entscheidungen werden bei neuem Wissen bewusst revidiert – Einfrieren ist gerade kein guter Entwurf."
  ],
  "explanation": "Architektur entsteht iterativ und explorativ, nicht als lineare Ableitung. Es gibt kein Standardverfahren, keine automatische Ableitung, und Entscheidungen sollen bei neuem Wissen revidierbar bleiben."
 },
 {
  "id": "c3q45",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R1",
  "type": "multi",
  "q": "Wie ist das Ziel „lose Kopplung“ richtig einzuordnen?",
  "options": [
   "Kopplung soll so gering wie möglich, aber so stark wie fachlich nötig sein – ohne Kopplung gäbe es keine Zusammenarbeit.",
   "Kopplung sollte auf null reduziert werden; Bausteine sollten möglichst gar nicht voneinander abhängen.",
   "Lose Kopplung und hohe Kohäsion bezeichnen dasselbe Ziel, nur anders benannt.",
   "Lose Kopplung bedeutet, Abhängigkeiten bevorzugt über konkrete Klassen statt über Schnittstellen zu führen.",
   "Geringere Kopplung senkt die Auswirkung von Änderungen und erleichtert isoliertes Testen."
  ],
  "correct": [
   0,
   4
  ],
  "optExpl": [
   "Richtig: So wenig Kopplung wie möglich, so viel wie fachlich nötig.",
   "Null Kopplung verhindert jede Zusammenarbeit; ein angemessenes Maß ist nötig.",
   "Kopplung (Beziehungen zwischen Bausteinen) und Kohäsion (Zusammenhalt in einem Baustein) sind verschieden.",
   "Umgekehrt: Kopplung über Schnittstellen/Abstraktionen ist loser als über konkrete Klassen.",
   "Richtig: das ist der wesentliche Nutzen loser Kopplung."
  ],
  "explanation": "Lose Kopplung ist kein Selbstzweck: Bausteine müssen zusammenarbeiten, also braucht es ein angemessenes Maß. Null Kopplung verhindert Funktionalität, Kopplung ist nicht dasselbe wie Kohäsion, und Abstraktionen koppeln loser als konkrete Klassen."
 },
 {
  "id": "c3q46",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R2",
  "type": "single",
  "q": "Welche Art der Beziehung erzeugt tendenziell die stärkste Kopplung zwischen Bausteinen?",
  "options": [
   "Implementierungsvererbung (die Ableitung hängt von internen Details der Basisklasse ab).",
   "Kommunikation über eine schmale, klar definierte Schnittstelle.",
   "Lose, ereignisbasierte (asynchrone) Benachrichtigung.",
   "Delegation an ein über ein Interface referenziertes Objekt."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Implementierungsvererbung bindet die Ableitung stark an die Interna der Basis.",
   "Eine schmale, klar definierte Schnittstelle koppelt nur lose.",
   "Asynchrone, ereignisbasierte Benachrichtigung koppelt besonders locker.",
   "Delegation über ein Interface hält die Kopplung gering."
  ],
  "explanation": "Implementierungsvererbung koppelt sehr stark an die Interna der Basisklasse. Schnittstellen, Ereignisse und Delegation über Interfaces koppeln deutlich lockerer – daher „Komposition vor Vererbung“."
 },
 {
  "id": "c3q47",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R2",
  "type": "single",
  "q": "Bedeutet dynamische (erst zur Laufzeit aufgelöste) Kopplung automatisch „lose“ Kopplung?",
  "options": [
   "Nein – die Abhängigkeit wird oft nur verschoben oder versteckt, nicht wirklich verringert.",
   "Ja – sobald etwas zur Laufzeit aufgelöst wird, ist die Kopplung immer minimal.",
   "Ja – dynamische Kopplung entfernt jede Abhängigkeit vollständig.",
   "Nein – dynamische Kopplung ist grundsätzlich stärker als jede statische Kopplung."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Die Abhängigkeit wird häufig nur verlagert oder verborgen, nicht verringert.",
   "Laufzeit-Auflösung macht die Kopplung nicht automatisch minimal.",
   "Dynamische Kopplung entfernt keine Abhängigkeit vollständig.",
   "Dynamische Kopplung ist nicht generell stärker als statische."
  ],
  "explanation": "Dynamische Auflösung (z. B. per Konfiguration/Reflection) verlagert oder verbirgt Abhängigkeiten häufig nur; sie ist nicht per se lose. Umgekehrt ist sie auch nicht generell stärker als statische Kopplung."
 },
 {
  "id": "c3q48",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zu ein- und ausgehenden Abhängigkeiten (afferent/efferent) treffen zu?",
  "options": [
   "Viele eingehende (afferente) Abhängigkeiten machen einen Baustein „stabil“ – Änderungen an ihm sind riskant.",
   "Viele ausgehende (efferente) Abhängigkeiten machen einen Baustein tendenziell „instabil“ bzw. änderungsanfällig.",
   "„Stabil“ im Sinne dieser Metrik heißt schwer änderbar, nicht fehlerfrei oder fertig.",
   "Eingehende Abhängigkeiten haben keinen Einfluss auf das Änderungsrisiko eines Bausteins.",
   "„Afferent“ und „efferent“ bezeichnen dieselbe Richtung und sind austauschbar."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Viele darauf bauende Nutzer machen einen Baustein stabil und änderungsriskant.",
   "Richtig: Viele ausgehende Abhängigkeiten machen einen Baustein tendenziell instabil.",
   "Richtig: „Stabil“ ist hier eine Struktur-Metrik (Änderungswiderstand), keine Aussage über Qualität/Fertigstellung.",
   "Falsch: Gerade eingehende Abhängigkeiten erhöhen das Änderungsrisiko.",
   "Falsch: Afferent (eingehend) und efferent (ausgehend) sind entgegengesetzte Richtungen."
  ],
  "explanation": "Viele eingehende Abhängigkeiten = „stabil“ (Änderungen riskant), viele ausgehende = „instabil“. „Stabil“ meint schwer änderbar, nicht fehlerfrei. Eingehende Abhängigkeiten beeinflussen die Änderbarkeit sehr wohl, und afferent/efferent sind Gegenrichtungen."
 },
 {
  "id": "c3q49",
  "chapter": 3,
  "lz": "LZ 03-10",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zu Querschnittskonzepten treffen zu?",
  "options": [
   "Sie wirken übergreifend auf viele Bausteine und lassen sich nicht sauber in einem einzelnen Baustein kapseln.",
   "Sie sollten systemweit einheitlich/konsistent gelöst werden, um Wildwuchs zu vermeiden.",
   "Beispiele sind u. a. Persistenz, Sicherheit, Logging und Fehlerbehandlung.",
   "Ein Querschnittskonzept ist stets eine rein organisatorische Governance-Vorgabe ohne technischen Gehalt.",
   "Ein Querschnittskonzept lässt sich immer restlos in genau einer fachlichen Komponente einschließen."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Querschnittskonzepte betreffen viele Bausteine und sind nicht lokal kapselbar.",
   "Richtig: Einheitliche Lösungen verhindern uneinheitliche Insellösungen.",
   "Richtig: Das sind typische Querschnittskonzepte.",
   "Falsch: Querschnittskonzepte sind technischer Natur, nicht bloße Governance.",
   "Falsch: Gerade das Nicht-Kapselbare in einer Komponente macht sie zu Querschnittskonzepten."
  ],
  "explanation": "Querschnittskonzepte (Persistenz, Sicherheit, Logging, Fehlerbehandlung …) wirken systemweit, sind nicht lokal kapselbar und sollten einheitlich gelöst werden. Sie sind technischer Natur und lassen sich nicht in eine einzelne Komponente einschließen."
 },
 {
  "id": "c3q50",
  "chapter": 3,
  "lz": "LZ 03-10",
  "r": "R3",
  "type": "single",
  "q": "Wie unterscheiden sich ACID und BASE als Konsistenzansätze bei der Persistenz?",
  "options": [
   "ACID betont strikte Konsistenz (klassisch relational); BASE bevorzugt Verfügbarkeit und eventuelle Konsistenz (häufig NoSQL).",
   "ACID gehört zu NoSQL-Datenbanken, BASE zu relationalen Datenbanken.",
   "Beide garantieren jederzeit sofortige, starke Konsistenz über verteilte Knoten.",
   "BASE steht für strengere Transaktionsgarantien als ACID."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: ACID betont strikte Konsistenz, BASE Verfügbarkeit und eventuelle Konsistenz.",
   "Die Zuordnung ist vertauscht: ACID ist relational, BASE eher NoSQL.",
   "BASE garantiert gerade keine jederzeit sofortige starke Konsistenz.",
   "BASE lockert die Garantien bewusst, ist also nicht strenger."
  ],
  "explanation": "ACID = strikte Transaktionskonsistenz (typisch relational), BASE = Verfügbarkeit + eventuelle Konsistenz (typisch NoSQL/verteilt). Die Zuordnung ist nicht vertauscht, und BASE lockert die Garantien bewusst."
 },
 {
  "id": "c3q51",
  "chapter": 3,
  "lz": "LZ 03-10",
  "r": "R3",
  "type": "single",
  "q": "Was besagt das CAP-Theorem für verteilte Datenhaltung?",
  "options": [
   "Bei einer Netzwerkpartition muss man zwischen Konsistenz und Verfügbarkeit abwägen – nicht alle drei Ziele sind gleichzeitig voll erreichbar.",
   "Konsistenz, Verfügbarkeit und Partitionstoleranz sind jederzeit vollständig gleichzeitig garantierbar.",
   "Verteilte Systeme müssen grundsätzlich auf Verfügbarkeit verzichten.",
   "CAP beschreibt drei aufeinanderfolgende Phasen eines Datenbank-Deployments."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Bei einer Partition muss man Konsistenz gegen Verfügbarkeit abwägen.",
   "Alle drei Eigenschaften sind nicht gleichzeitig voll garantierbar.",
   "CAP erzwingt keinen generellen Verzicht auf Verfügbarkeit.",
   "CAP ist kein Phasenmodell eines Deployments."
  ],
  "explanation": "CAP: Bei einer Partition ist ein Kompromiss zwischen Konsistenz und Verfügbarkeit nötig – man kann nicht alle drei Eigenschaften gleichzeitig voll garantieren. Es ist kein Phasenmodell und erzwingt keinen generellen Verfügbarkeitsverzicht."
 },
 {
  "id": "c3q52",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R2",
  "type": "single",
  "q": "Was bezeichnet man bei Schichtenarchitekturen als „Layer-Bridge“ (Überspringen einer Schicht)?",
  "options": [
   "Das gezielte Umgehen einer Zwischenschicht – im gelockerten Ansatz erlaubt, erzeugt aber zusätzliche Abhängigkeiten und sollte dokumentiert werden.",
   "Eine Schicht, die alle anderen Schichten automatisch synchronisiert.",
   "Die strikte Regel, dass niemals eine Schicht übersprungen werden darf.",
   "Eine generelle Erlaubnis für untere Schichten, obere aufzurufen."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Eine Zwischenschicht wird bewusst übersprungen – erlaubt, aber zu dokumentieren.",
   "Eine Layer-Bridge synchronisiert keine Schichten automatisch.",
   "Sie ist kein Verbot, sondern gerade das erlaubte Überspringen.",
   "Aufrufe von unten nach oben bleiben tabu und erzeugen Zyklen – das meint die Layer-Bridge nicht."
  ],
  "explanation": "Eine Layer-Bridge überspringt eine Schicht (im gelockerten Modell erlaubt), schafft aber zusätzliche Abhängigkeiten – daher bewusst dokumentieren. Im strengen Modell ist Überspringen unzulässig; Aufrufe von unten nach oben bleiben tabu (Zyklus)."
 },
 {
  "id": "c3q53",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "multi",
  "q": "Welche Regeln gelten idealtypisch für eine strenge Schichtenarchitektur?",
  "options": [
   "Aufrufe erfolgen nur von oben nach unten; der umgekehrte Weg erzeugt einen unerwünschten Zyklus.",
   "Bausteine einer Schicht liegen möglichst auf einem ähnlichen Abstraktionsniveau.",
   "In der strengen Variante darf eine Schicht nur die unmittelbar darunterliegende Schicht nutzen (kein Überspringen).",
   "Jede Schicht darf beliebig auf jede andere Schicht zugreifen.",
   "Zwei wechselseitig voneinander abhängige Bausteine gehören bewusst in verschiedene Schichten."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Aufrufe erfolgen nur nach unten – sonst entsteht ein Zyklus.",
   "Richtig: Eine Schicht bündelt Bausteine ähnlichen Abstraktionsniveaus.",
   "Richtig: Die strenge Variante verbietet das Überspringen von Schichten.",
   "Beliebiger Zugriff auf jede Schicht widerspricht dem Muster.",
   "Wechselseitig abhängige Bausteine gehören eher in dieselbe Schicht, sonst entsteht ein Zyklus über Schichtgrenzen."
  ],
  "explanation": "Strenge Schichtung: nur Aufrufe nach unten (sonst Zyklus), einheitliches Abstraktionsniveau je Schicht und kein Überspringen von Schichten. Beliebiger Zugriff widerspricht dem Muster; wechselseitig abhängige Bausteine gehören in dieselbe Schicht."
 },
 {
  "id": "c3q54",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R2",
  "type": "single",
  "q": "Welcher Nachteil ist für tief geschachtelte Schichtenarchitekturen typisch?",
  "options": [
   "Das Durchreichen von Aufrufen durch viele Schichten kann Performance kosten, und Änderungen ziehen sich oft durch mehrere Schichten.",
   "Obere Schichten müssen die Implementierungsdetails der unteren Schichten kennen, um sie aufzurufen.",
   "Eine strikte Schichtung verhindert grundsätzlich den parallelen Betrieb mehrerer Instanzen.",
   "Zusätzliche Schichten reduzieren zwangsläufig die Zahl der benötigten Schnittstellen."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Aufrufe durchzureichen kostet Performance, und Änderungen ziehen sich durch viele Schichten.",
   "Falsch: Obere Schichten nutzen die Schnittstellen unterer Schichten, gerade nicht deren Interna.",
   "Falsch: Schichtung sagt nichts über horizontale Skalierung/Instanzbetrieb aus.",
   "Falsch: Mehr Schichten bedeuten eher mehr Schnittstellen, nicht weniger."
  ],
  "explanation": "Viele Schichten kosten beim Durchreichen Performance, und Änderungen (z. B. an einem Datenfeld) wirken quer durch die Schichten. Interna bleiben verborgen, Skalierung ist unabhängig, und zusätzliche Schichten reduzieren Schnittstellen nicht."
 },
 {
  "id": "c3q55",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R2",
  "type": "single",
  "q": "Was unterscheidet aktive von passiven Filtern in einer Pipes-and-Filters-Architektur?",
  "options": [
   "Aktive Filter holen bzw. schieben Daten selbst; passive Filter werden von außen mit Daten versorgt bzw. ausgelesen.",
   "Aktive Filter verändern Daten, passive Filter lassen sie unverändert durch.",
   "Aktive Filter kennen einander, passive Filter sind isoliert.",
   "Aktive Filter laufen nur sequenziell, passive nur parallel."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Aktive Filter treiben den Datenfluss selbst an, passive werden versorgt.",
   "Der Unterschied betrifft die Kontrolle des Datenflusses, nicht das Verändern der Daten.",
   "Filter kennen einander generell nicht, unabhängig von aktiv oder passiv.",
   "Aktiv/passiv sagt nichts über sequenzielle oder parallele Ausführung aus."
  ],
  "explanation": "Der Unterschied liegt in der Kontrolle des Datenflusses: aktive Filter treiben den Transport selbst an, passive warten auf Zulieferung/Abholung. Beide verarbeiten Daten und kennen einander nicht."
 },
 {
  "id": "c3q56",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zu Pipes and Filters treffen zu?",
  "options": [
   "Filter kennen einander nicht und sind über Pipes entkoppelt – dadurch gut austausch- und wiederverwendbar.",
   "Die Fehlerbehandlung ist anspruchsvoll, da ein Filter die Vorgeschichte der Daten nicht kennt.",
   "Die Filterstufen können parallel/nebenläufig arbeiten, da sie nur über Datenströme verbunden sind.",
   "Filter stimmen sich über einen gemeinsamen globalen Zustand ab.",
   "Das Muster eignet sich besonders für stark interaktive Benutzerdialoge."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Über Pipes entkoppelte Filter sind gut austausch- und wiederverwendbar.",
   "Richtig: Ohne Kenntnis der Datenhistorie ist die Fehlerbehandlung schwierig.",
   "Richtig: Die Entkopplung über Datenströme erlaubt parallele Verarbeitung der Stufen.",
   "Falsch: Filter teilen keinen gemeinsamen globalen Zustand.",
   "Falsch: Für stark interaktive Dialoge ist die feste Verarbeitungskette ungeeignet."
  ],
  "explanation": "Filter sind über Pipes entkoppelt (austauschbar, parallelisierbar), aber die Fehlerbehandlung ist schwierig, weil ein Filter die Historie nicht kennt. Es gibt keinen gemeinsamen Zustand, und für interaktive Dialoge ist die feste Kette ungeeignet."
 },
 {
  "id": "c3q57",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "multi",
  "q": "Was sollte beim fachlichen Schnitt von Microservices beachtet werden?",
  "options": [
   "Nach fachlichen Gesichtspunkten (z. B. Bounded Context) – ein zu feiner Schnitt führt zu „Nano-Services“ mit hohem Overhead.",
   "Nach rein technischen Schichten – je ein separater UI-, Logik- und Datenbank-Service.",
   "So klein wie möglich, denn mehr Services bedeuten pauschal bessere Skalierbarkeit.",
   "Entlang der bestehenden Team-/Organisationsstruktur, unabhängig von fachlichen Grenzen.",
   "Jeder Service sollte unabhängig deploybar sein und einen klar abgegrenzten fachlichen Verantwortungsbereich haben."
  ],
  "correct": [
   0,
   4
  ],
  "optExpl": [
   "Richtig: Fachlich schneiden nach Bounded Context; zu fein erzeugt teure Nano-Services.",
   "Ein rein technischer Schnitt in UI, Logik und DB koppelt fachlich zusammengehörige Änderungen über Services.",
   "Immer kleiner ist nicht besser – Kommunikations- und Betriebs-Overhead steigen stark.",
   "Team-Struktur allein ist kein fachliches Kriterium; ein rein daran ausgerichteter Schnitt kann fachliche Grenzen verletzen.",
   "Richtig: unabhängige Deploybarkeit und klarer fachlicher Zuschnitt sind Kernmerkmale von Microservices."
  ],
  "explanation": "Der Schnitt erfolgt fachlich (z. B. Bounded Context). Ein rein technischer, ein extrem feiner oder ein allein an der Org-Struktur ausgerichteter Schnitt erzeugt schlecht abgegrenzte oder Nano-Services mit unverhältnismäßigem Overhead."
 },
 {
  "id": "c3q58",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R2",
  "type": "multi",
  "q": "Welche Herausforderungen bringen Microservices typischerweise mit sich?",
  "options": [
   "Höherer Betriebs- und Deployment-Aufwand durch viele eigenständige Einheiten.",
   "Abhängigkeit vom Netzwerk mit zusätzlicher Latenz und neuen (Teil-)Fehlerquellen.",
   "Datenkonsistenz über Servicegrenzen hinweg (verteilte Transaktionen) wird schwieriger.",
   "Zwingend eine gemeinsame Datenbank und synchronisierte Releases aller Services.",
   "Der Wegfall jeglichen Bedarfs an Monitoring und zentralem Logging."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Viele eigenständige Einheiten erhöhen den Betriebs- und Deployment-Aufwand.",
   "Richtig: Die Netzwerkabhängigkeit bringt Latenz und neue Fehlerquellen (Teilausfälle).",
   "Richtig: Konsistenz über Servicegrenzen (z. B. Sagas statt Transaktionen) wird anspruchsvoll.",
   "Falsch: Gemeinsame DB und gekoppelte Releases sind gerade nicht das Ziel – sie widersprechen dem Ansatz.",
   "Falsch: Verteilte Systeme brauchen mehr Monitoring/Logging, nicht weniger."
  ],
  "explanation": "Verteilung bringt Betriebs-/Deployment-Overhead, Netzwerkabhängigkeit (Latenz, Teilausfälle) und erschwerte verteilte Konsistenz. Eine gemeinsame DB/gekoppelte Releases widersprechen dem Ansatz, und der Bedarf an Monitoring/Logging steigt."
 },
 {
  "id": "c3q59",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R2",
  "type": "single",
  "q": "Welche Aussage zum Zusammenspiel von Microservices trifft zu?",
  "options": [
   "Services sollten lose gekoppelt sein und über technologieneutrale Schnittstellen kommunizieren.",
   "Services sollten möglichst viel synchron kommunizieren, um jederzeit starke Konsistenz zu garantieren.",
   "Jeder Service sollte direkt auf die interne Datenbank der anderen zugreifen dürfen, um Latenz zu sparen.",
   "Alle Services müssen dieselbe Programmiersprache und dasselbe Framework verwenden."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Geringe Kopplung und Kommunikation über technologieneutrale Schnittstellen.",
   "Viel synchroner Austausch koppelt zeitlich stark und untergräbt die Unabhängigkeit der Services.",
   "Direkter Zugriff auf fremde Datenbanken verletzt die Kapselung und koppelt die Services eng.",
   "Freie Technologiewahl je Service ist gerade eine Stärke des Ansatzes."
  ],
  "explanation": "Ziel sind geringe Kopplung und Kommunikation über technologieneutrale Schnittstellen (nur wo fachlich nötig). Viel synchroner Austausch, direkter Zugriff auf fremde Datenbanken oder erzwungene Einheitstechnologie widersprechen dem Ansatz."
 },
 {
  "id": "k14",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Ordnen Sie jede Eigenschaft dem passenden Muster zu.",
  "categories": [
   "Schichtenarchitektur",
   "Pipes & Filter"
  ],
  "rows": [
   {
    "text": "Vertikale Anordnung; obere Ebenen nutzen Dienste der darunterliegenden.",
    "cat": 0
   },
   {
    "text": "Unabhängige Verarbeitungsschritte, über Datenströme verkettet.",
    "cat": 1
   },
   {
    "text": "Aufrufe erfolgen nur von oben nach unten, sonst entsteht ein Zyklus.",
    "cat": 0
   },
   {
    "text": "Die Schritte kennen einander nicht und sind frei austauschbar.",
    "cat": 1
   },
   {
    "text": "Gut geeignet für schrittweise Datenstrom- oder Batch-Verarbeitung.",
    "cat": 1
   },
   {
    "text": "Änderungen an tiefen Ebenen können sich nach oben durchziehen.",
    "cat": 0
   }
  ],
  "explanation": "Schichten: vertikale Hierarchie, Aufrufe nach unten, Änderungen ziehen sich durch. Pipes & Filter: entkoppelte, austauschbare Verarbeitungsschritte über Datenströme, ideal für Strom-/Batch-Verarbeitung."
 },
 {
  "id": "k15",
  "chapter": 3,
  "lz": "LZ 03-10",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Handelt es sich jeweils um ein Querschnittskonzept oder nicht?",
  "categories": [
   "Querschnittskonzept",
   "Kein Querschnittskonzept"
  ],
  "rows": [
   {
    "text": "Protokollierung (Logging) im gesamten System.",
    "cat": 0
   },
   {
    "text": "Berechnung eines konkreten Rabatts im Warenkorb.",
    "cat": 1
   },
   {
    "text": "Authentifizierung und Autorisierung.",
    "cat": 0
   },
   {
    "text": "Persistenz bzw. einheitlicher Datenzugriff.",
    "cat": 0
   },
   {
    "text": "Anzeige der Detailseite eines einzelnen Produkts.",
    "cat": 1
   },
   {
    "text": "Einheitliche Fehlerbehandlung über Bausteine hinweg.",
    "cat": 0
   }
  ],
  "explanation": "Logging, Sicherheit, Persistenz und Fehlerbehandlung wirken systemweit über viele Bausteine (Querschnittskonzepte). Rabattberechnung und Produktdetailanzeige sind konkrete Fachfunktionen."
 },
 {
  "id": "c3q60",
  "chapter": 3,
  "lz": "LZ 03-05",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zu kurzen Feedback-Schleifen (Prototypen, frühe Integration, Tests) im Architekturentwurf treffen zu?",
  "options": [
   "Sie überprüfen Annahmen und Risiken früh und ermöglichen Anpassungen bei neuem Wissen.",
   "Sie sind besonders für unsichere/riskante Entscheidungen wertvoll (risikogetrieben).",
   "Ein Prototyp kann bewusst als „Wegwerf“-Artefakt dienen, nur um eine Annahme zu prüfen.",
   "Ein Wegwerf-Prototyp sollte immer direkt zum Produktionscode weiterentwickelt werden, um Aufwand zu sparen.",
   "Frühe Feedback-Schleifen sind nur bei agilem Vorgehen sinnvoll, in plangetriebenen Projekten nicht."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Feedback prüft Annahmen und Risiken früh und ermöglicht Kurskorrekturen.",
   "Richtig: Gerade unsichere Entscheidungen profitieren von frühem Feedback.",
   "Richtig: Ein Prototyp darf nach der Erkenntnisgewinnung verworfen werden.",
   "Falsch: Ein Wegwerf-Prototyp dient der Erkenntnis und wird danach verworfen – ihn zu Produktionscode zu machen, übernimmt seine Abkürzungen und Schulden.",
   "Falsch: Frühes Feedback zur Risikominderung ist vorgehensunabhängig sinnvoll, nicht nur agil."
  ],
  "explanation": "Feedback-Schleifen prüfen Annahmen und Risiken früh (auch per Wegwerf-Prototyp) und sind bei unsicheren Entscheidungen besonders wertvoll. Ein Wegwerf-Prototyp wird verworfen (nicht zu Produktionscode), und frühes Feedback ist vorgehensunabhängig nützlich."
 },
 {
  "id": "c3q61",
  "chapter": 3,
  "lz": "LZ 03-05",
  "r": "R3",
  "type": "single",
  "q": "Was kennzeichnet eine „evolutionäre Architektur“ mit Fitnessfunktionen?",
  "options": [
   "Automatisierte Kriterien (Fitnessfunktionen) prüfen laufend, ob wichtige Qualitätsmerkmale bei Änderungen erhalten bleiben.",
   "Fitnessfunktionen sind ausschließlich Performance-Benchmarks und sagen nichts über andere Qualitäten aus.",
   "Evolutionäre Architektur legt die Struktur einmalig fest und schließt spätere Änderungen aus.",
   "Fitnessfunktionen ersetzen jede Form von manueller Architekturbewertung oder Review."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Fitnessfunktionen prüfen fortlaufend (oft automatisiert), ob Qualitätsmerkmale erhalten bleiben.",
   "Fitnessfunktionen können viele Qualitätsmerkmale prüfen (z. B. Abhängigkeitsregeln), nicht nur Performance.",
   "Evolutionäre Architektur unterstützt gerade die geführte Weiterentwicklung, kein Einfrieren.",
   "Sie ergänzen menschliche Bewertung/Reviews, ersetzen sie aber nicht vollständig."
  ],
  "explanation": "Evolutionäre Architektur unterstützt geführte, inkrementelle Weiterentwicklung; Fitnessfunktionen prüfen fortlaufend (oft automatisiert) wichtige Qualitätsmerkmale. Sie sind nicht auf Performance beschränkt, frieren nichts ein und ersetzen keine Reviews vollständig."
 },
 {
  "id": "c3q62",
  "chapter": 3,
  "lz": "LZ 03-05",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zum Zusammenhang von Feedback und Risiko im Entwurf treffen zu?",
  "options": [
   "Je später Rückmeldung kommt, desto teurer werden Korrekturen tendenziell.",
   "Riskante oder unsichere Entscheidungen sollten früh mit Feedback abgesichert werden (risikogetrieben).",
   "Die Reihenfolge der Entscheidungen sollte sich am Risiko orientieren, nicht am reinen Bauplan-Fortschritt.",
   "Risiken sollten erst dann adressiert werden, wenn sie im Betrieb tatsächlich auftreten (rein reaktiv).",
   "Prototypen oder Durchstiche zur frühen Risikoabsicherung lohnen sich erst ab sehr großen Projekten."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: späte Rückmeldung = teurere Korrekturen.",
   "Richtig: Unsicheres früh absichern (risikogetrieben).",
   "Richtig: Entscheidungsreihenfolge am Risiko ausrichten.",
   "Falsch: Rein reaktives Abwarten widerspricht dem risikogetriebenen Vorgehen und macht Korrekturen teurer.",
   "Falsch: Frühe Risikoabsicherung (z. B. Durchstich/Prototyp) lohnt sich unabhängig von der Projektgröße."
  ],
  "explanation": "Feedback früh und risikogetrieben einholen: unsichere/riskante Entscheidungen zuerst absichern, Reihenfolge am Risiko ausrichten. Spätes oder rein reaktives Vorgehen verteuert Korrekturen."
 },
 {
  "id": "c3q63",
  "chapter": 3,
  "lz": "LZ 03-07",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen treffen auf den Entwurf einer guten Schnittstelle zu?",
  "options": [
   "Sie legt einen stabilen „Vertrag“ fest (das WAS) und verbirgt die interne Umsetzung (das WIE).",
   "Sie sollte möglichst viele Interna offenlegen, damit Nutzer flexibel darauf zugreifen können.",
   "Eine gute Schnittstelle bildet die interne Datenstruktur des Anbieters möglichst 1:1 ab.",
   "Der Vertrag umfasst nur die Signaturen; Vor-/Nachbedingungen und Fehlerverhalten gehören nicht dazu.",
   "Eine gute Schnittstelle ist leicht korrekt zu nutzen und schwer zu missbrauchen."
  ],
  "correct": [
   0,
   4
  ],
  "optExpl": [
   "Richtig: Sie ist ein stabiler Vertrag (das WAS) und verbirgt das WIE.",
   "Interna offenzulegen widerspricht dem Information Hiding und koppelt Nutzer an Details.",
   "Ein 1:1-Abbild der Interna macht die Schnittstelle brüchig und koppelt an die Implementierung.",
   "Zum Vertrag gehören auch Semantik, Vor-/Nachbedingungen und Fehlerverhalten, nicht nur Signaturen.",
   "Richtig: leichte korrekte Nutzung und Missbrauchssicherheit sind zentrale Entwurfsziele."
  ],
  "explanation": "Eine gute Schnittstelle ist ein stabiler Vertrag (inkl. Semantik, Vor-/Nachbedingungen, Fehlerverhalten) und verbirgt die Interna (Information Hiding). Interna offenlegen, 1:1 abbilden oder den Vertrag auf Signaturen verkürzen widerspricht dem Zweck."
 },
 {
  "id": "c3q64",
  "chapter": 3,
  "lz": "LZ 03-07",
  "r": "R2",
  "type": "single",
  "q": "Welcher Trade-off besteht bei der Granularität von Schnittstellen?",
  "options": [
   "Feingranulare Schnittstellen sind flexibel, erzeugen aber viele (bei Remote teure) Aufrufe; grobgranulare bündeln, sind aber weniger flexibel.",
   "Feingranulare Schnittstellen sind in jeder Hinsicht überlegen.",
   "Die Granularität hat keinen Einfluss auf Performance oder Kopplung.",
   "Grobgranulare Schnittstellen erzeugen bei Remote-Aufrufen immer mehr Netzlast."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Feingranular ist flexibel, aber ruf-intensiv; grobgranular bündelt, ist aber unflexibler.",
   "Feingranulare Schnittstellen sind nicht in jeder Hinsicht überlegen (Chattiness bei Remote).",
   "Granularität beeinflusst Performance und Kopplung sehr wohl.",
   "Grobgranular reduziert Remote-Aufrufe eher, statt sie zu erhöhen."
  ],
  "explanation": "Feingranular = flexibel, aber viele (bei Remote teure) Aufrufe; grobgranular = weniger „Chattiness“, aber unflexibler. Granularität wirkt sehr wohl auf Performance/Kopplung; grobgranular reduziert Remote-Aufrufe eher."
 },
 {
  "id": "c3q65",
  "chapter": 3,
  "lz": "LZ 03-07",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zum Entwurf robuster, langlebiger Schnittstellen treffen zu?",
  "options": [
   "Änderungen sollten möglichst rückwärtskompatibel sein; sonst braucht es eine Versionierung.",
   "Beim Senden strikt und beim Empfangen tolerant zu sein, erhöht die Robustheit (Robustheitsprinzip).",
   "Neue optionale Felder sind meist rückwärtskompatibel; das Entfernen/Umbenennen bestehender Felder in der Regel nicht.",
   "Öffentliche Schnittstellen dürfen jederzeit ohne Rücksicht auf Konsumenten geändert werden.",
   "Je mehr Operationen und Parameter eine Schnittstelle anbietet, desto stabiler ist sie."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Rückwärtskompatibilität bzw. Versionierung schützt Konsumenten.",
   "Richtig: „Streng senden, tolerant empfangen“ (nach Postel) erhöht die Robustheit.",
   "Richtig: Additive Änderungen sind meist verträglich, entfernende/umbenennende brechen Konsumenten.",
   "Falsch: Öffentliche Schnittstellen ohne Rücksicht zu brechen ist riskant.",
   "Falsch: Eine große Schnittstellenfläche erhöht die Änderungswahrscheinlichkeit und erschwert Stabilität."
  ],
  "explanation": "Rückwärtskompatibilität/Versionierung und das Robustheitsprinzip schützen Konsumenten; additive Änderungen sind meist verträglich, entfernende/umbenennende nicht. Öffentliche Schnittstellen einfach zu brechen oder die Fläche aufzublähen ist riskant."
 },
 {
  "id": "c3q66",
  "chapter": 3,
  "lz": "LZ 03-01",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen treffen zu, wenn eine Architektur gezielt eine Qualitätsanforderung wie „hohe Verfügbarkeit“ erfüllen soll?",
  "options": [
   "Durch bewusste Entwurfsentscheidungen bzw. Taktiken (z. B. Redundanz, Ausfallübernahme), die auf das Qualitätsziel einzahlen.",
   "Allein dadurch, dass die Anforderung im Anforderungsdokument dokumentiert ist.",
   "Ausschließlich durch die Wahl einer performanteren Programmiersprache oder Hardware.",
   "Verfügbarkeit ergibt sich automatisch, sobald das System sauber modularisiert ist.",
   "Solche Taktiken bringen Trade-offs mit sich (z. B. erhöht Redundanz Kosten und Komplexität), die bewusst abzuwägen sind."
  ],
  "correct": [
   0,
   4
  ],
  "optExpl": [
   "Richtig: Gezielte Taktiken wie Redundanz und Failover erfüllen das Qualitätsziel.",
   "Eine bloß notierte Anforderung erfüllt sich nicht von allein.",
   "Sprach-/Hardwarewahl adressiert eher Performance, nicht zwingend Verfügbarkeit.",
   "Modularisierung hilft der Wartbarkeit, garantiert aber keine Verfügbarkeit (z. B. gegen Ausfälle).",
   "Richtig: Taktiken für ein Qualitätsziel wirken meist auf andere Qualitäten zurück – Abwägen gehört dazu."
  ],
  "explanation": "Qualitätsziele werden durch gezielte Entwurfsentscheidungen/Taktiken erreicht (z. B. Redundanz und Failover für Verfügbarkeit). Das bloße Notieren, eine Sprach-/Hardwarewahl allein oder gute Modularisierung erfüllen Verfügbarkeit nicht automatisch."
 },
 {
  "id": "c4q1",
  "chapter": 4,
  "lz": "LZ 04-01",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zu den zentralen Zwecken von Architekturdokumentation treffen zu?",
  "options": [
   "Sie schafft Kommunikation und gemeinsames Verständnis unter den Stakeholdern.",
   "Sie macht wichtige Architekturentscheidungen samt Begründung auch später noch nachvollziehbar.",
   "Sie unterstützt Einarbeitung, Wartung und fundierte weitere Entscheidungen.",
   "Ihr wichtigstes Ziel ist Vollständigkeit: je mehr dokumentiert ist, desto besser erfüllt sie ihren Zweck.",
   "Sie liefert den verbindlichen Nachweis, dass die geforderten Qualitätsanforderungen tatsächlich erfüllt sind."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Kommunikation und gemeinsames Verständnis sind ein Kernzweck der Doku.",
   "Nachvollziehbarkeit von Entscheidungen (Kontext, Alternativen, Konsequenzen) ist ein zentraler Zweck.",
   "Einarbeitung, Wartung und Entscheidungsgrundlage gehören zu den Kernzwecken.",
   "Nicht Vollständigkeit ist das Ziel, sondern angemessene, zielgruppengerechte Doku – zu viel Umfang schadet Pflegbarkeit und Aktualität.",
   "Der Nachweis der Erfüllung erfolgt durch Tests, Messungen und Reviews; die Doku beschreibt Lösung und Ziele, belegt deren Erfüllung aber nicht selbst."
  ],
  "explanation": "Zwecke sind Kommunikation, Nachvollziehbarkeit von Entscheidungen und Grundlage für Einarbeitung/Wartung. Maximale Vollständigkeit ist kein Selbstzweck, und die Doku ist kein Erfüllungsnachweis für Qualitätsanforderungen (das leisten Tests/Messungen)."
 },
 {
  "id": "c4q2",
  "chapter": 4,
  "lz": "LZ 04-02",
  "r": "R2",
  "type": "single",
  "q": "Wie lässt sich arc42 am treffendsten einordnen?",
  "options": [
   "Als bewährtes Template bzw. Gliederungsschema mit zwölf Abschnitten für die Dokumentation von Softwarearchitekturen.",
   "Als Standard, der die verbindlichen Belange, Stakeholder und Viewpoints einer Architekturbeschreibung normiert.",
   "Als Methode, die aus den Qualitätszielen systematisch die passenden Architekturentscheidungen ableitet.",
   "Als kuratierte Sammlung bewährter Architektur- und Entwurfsmuster für verteilte Systeme."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: arc42 ist eine gliedernde Vorlage mit zwölf Abschnitten, füllbar nach Bedarf.",
   "Die Normierung von Belangen, Stakeholdern und Viewpoints leistet ISO/IEC/IEEE 42010, nicht arc42.",
   "Ein methodisches Ableiten von Entscheidungen aus Qualitätszielen ist ein Entwurfsansatz (z. B. ADD), keine Doku-Vorlage.",
   "Eine Sammlung von Mustern (z. B. POSA/GoF) ist etwas anderes als eine Doku-Gliederung."
  ],
  "explanation": "arc42 ist eine gliedernde Dokumentationsvorlage (12 Abschnitte). Die konzeptionelle Normierung (Belange/Viewpoints) leistet 42010; das Ableiten von Entscheidungen ist Aufgabe von Entwurfsmethoden; Mustersammlungen sind wieder etwas anderes."
 },
 {
  "id": "c4q3",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zur Kontextabgrenzung (Kontextsicht) treffen zu?",
  "options": [
   "Sie zeigt das System als Ganzes (Blackbox) mit seinen externen Nachbarn (Nutzer, Fremdsysteme).",
   "Sie stellt die fachlichen und/oder technischen Schnittstellen des Systems zu seiner Umgebung dar.",
   "Sie behandelt das System bewusst als Blackbox und zeigt seine interne Bausteinstruktur nicht.",
   "Sie legt fest, welche der externen Nachbarsysteme künftig durch eigene Bausteine ersetzt werden sollen.",
   "Sie priorisiert die externen Schnittstellen nach ihren Qualitätsanforderungen."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Die Kontextsicht zeigt das System als Blackbox mit seinen externen Nachbarn.",
   "Sie stellt die Schnittstellen zur Umgebung fachlich und/oder technisch dar.",
   "Richtig und subtil: Die Kontextsicht zeigt gerade nicht die Interna, sondern grenzt nach außen ab.",
   "Über den künftigen Ersatz externer Systeme trifft die Kontextsicht keine Aussage; das wäre eine Scope-/Migrationsentscheidung.",
   "Eine Priorisierung nach Qualitätsanforderungen gehört zu den Qualitätsanforderungen, nicht zur Kontextabgrenzung."
  ],
  "explanation": "Die Kontextsicht grenzt das System als Blackbox von seiner Umgebung ab (externe Nachbarn + Schnittstellen) und zeigt keine Interna. Sie priorisiert nicht nach Qualität und entscheidet nicht über den Ersatz externer Systeme."
 },
 {
  "id": "c4q4",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zur Bausteinsicht treffen zu?",
  "options": [
   "Sie zeigt die statische Zerlegung des Systems in Bausteine (Black-/Whitebox).",
   "Sie verfeinert Bausteine hierarchisch als Whitebox der jeweils enthaltenen Bausteine.",
   "Sie beschreibt je Baustein dessen Verantwortlichkeit und seine Schnittstellen.",
   "Sie legt die zeitliche Reihenfolge der Aufrufe zwischen den Bausteinen fest.",
   "Jede Verfeinerungsebene muss zwingend dieselbe Notation und denselben Detailgrad verwenden."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Die Bausteinsicht zeigt die statische Zerlegung in Bausteine.",
   "Sie verfeinert Bausteine hierarchisch (Whitebox der Teile).",
   "Richtig und subtil: Zur Blackbox-Beschreibung gehören Verantwortlichkeit und Schnittstellen des Bausteins.",
   "Zeitliche Reihenfolgen von Aufrufen zeigt die Laufzeitsicht, nicht die Bausteinsicht.",
   "Detailgrad und Notation dürfen sich je Ebene und Zielgruppe unterscheiden; eine solche Pflicht gibt es nicht."
  ],
  "explanation": "Die Bausteinsicht zeigt statische Struktur, verfeinert hierarchisch und beschreibt Verantwortlichkeiten/Schnittstellen. Zeitliche Abläufe gehören in die Laufzeitsicht; ein einheitlicher Detailgrad über alle Ebenen ist nicht vorgeschrieben."
 },
 {
  "id": "c4q5",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen beschreiben die Laufzeitsicht zutreffend?",
  "options": [
   "Das dynamische Zusammenspiel von Bausteinen in ausgewählten konkreten Szenarien.",
   "Die statische Zerlegung des Systems in seine Bausteine und deren Schnittstellen.",
   "Sämtliche theoretisch möglichen Ausführungspfade des Systems, vollständig und lückenlos.",
   "Die endgültige Zuordnung der Bausteine zu physischen Ausführungsknoten.",
   "Sie wird typischerweise anhand ausgewählter Szenarien dargestellt, nicht für alle denkbaren Abläufe."
  ],
  "correct": [
   0,
   4
  ],
  "optExpl": [
   "Richtig: Die Laufzeitsicht zeigt dynamische Abläufe anhand ausgewählter, aussagekräftiger Szenarien.",
   "Statische Zerlegung und Schnittstellen zeigt die Bausteinsicht.",
   "Vollständigkeit ist nicht das Ziel: Man wählt bewusst wenige, relevante Szenarien – nicht alle Pfade.",
   "Die Zuordnung zu Knoten ist die Verteilungssicht.",
   "Richtig: die Laufzeitsicht beleuchtet ausgewählte, relevante Szenarien statt sämtlicher Abläufe."
  ],
  "explanation": "Die Laufzeitsicht zeigt dynamisches Verhalten anhand ausgewählter Szenarien – nicht vollständig alle Pfade. Statische Struktur = Bausteinsicht; Zuordnung zu Knoten = Verteilungssicht."
 },
 {
  "id": "c4q6",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R2",
  "type": "single",
  "q": "Was zeigt die Verteilungssicht (Deployment)?",
  "options": [
   "Die Abbildung der Software-Artefakte auf Infrastruktur/Knoten und deren Kommunikationskanäle.",
   "Die logische Zerlegung des Systems in seine fachlichen Bausteine.",
   "Ausschließlich die Produktionsumgebung; Test- und Entwicklungsumgebungen bleiben außen vor.",
   "Die Netzwerktopologie muss stets bis zur physischen Verkabelung hinunter detailliert werden."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Sie bildet Artefakte auf Knoten/Umgebungen ab und zeigt deren Kommunikationskanäle.",
   "Die logische fachliche Zerlegung ist die Bausteinsicht.",
   "Die Verteilungssicht kann durchaus mehrere Umgebungen (Test, Staging, Produktion) abbilden.",
   "Der Detailgrad richtet sich am Bedarf aus; eine Pflicht zur Verkabelungsebene besteht nicht."
  ],
  "explanation": "Die Verteilungssicht zeigt die Zuordnung der Software auf Knoten/Umgebungen und die Kommunikationswege. Sie ist nicht auf Produktion beschränkt und schreibt keinen bestimmten physischen Detailgrad vor; die fachliche Zerlegung ist die Bausteinsicht."
 },
 {
  "id": "c4q7",
  "chapter": 4,
  "lz": "LZ 04-09",
  "r": "R3",
  "type": "single",
  "q": "Was regelt der Standard ISO/IEC/IEEE 42010?",
  "options": [
   "Konzepte und Begriffe der Architekturbeschreibung (Stakeholder, Belange/Concerns, Viewpoints/Views).",
   "Einen Katalog von Qualitätsmerkmalen wie Wartbarkeit, Performanz und Sicherheit.",
   "Eine konkrete Dokumentationsvorlage mit zwölf fest vorgegebenen Abschnitten.",
   "Verbindliche Vorgaben, welche Sichten ein System mindestens dokumentieren muss."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: 42010 definiert den begrifflichen Rahmen (Stakeholder, Belange, Viewpoints/Views).",
   "Ein Katalog von Qualitätsmerkmalen ist ISO/IEC 25010, nicht 42010.",
   "Die 12-Abschnitt-Vorlage ist arc42.",
   "42010 gibt einen Rahmen vor, schreibt aber keine konkreten Pflicht-Sichten je System vor."
  ],
  "explanation": "42010 liefert den konzeptionellen Rahmen für Architekturbeschreibungen (Stakeholder, Concerns, Viewpoints/Views). Qualitätsmerkmale kommen aus 25010; die 12-Abschnitt-Vorlage ist arc42; feste Pflicht-Sichten schreibt 42010 nicht vor. (R3.)"
 },
 {
  "id": "c4q8",
  "chapter": 4,
  "lz": "LZ 04-03",
  "r": "R2",
  "type": "single",
  "q": "Ein Kollege will den zeitlich geordneten Nachrichtenaustausch zwischen mehreren Objekten in einem Anwendungsfall darstellen. Welches UML-Diagramm ist dafür typisch?",
  "options": [
   "Das Sequenzdiagramm.",
   "Das Klassendiagramm für die statischen Assoziationen der beteiligten Klassen.",
   "Das Zustandsdiagramm für die Zustände, die ein einzelnes Objekt durchläuft.",
   "Das Aktivitätsdiagramm für die parallele Verzweigung von Aktivitäten im Geschäftsprozess."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Sequenzdiagramme zeigen den zeitlich geordneten Nachrichtenaustausch zwischen Objekten/Bausteinen.",
   "Das Klassendiagramm zeigt statische Beziehungen, nicht den zeitlichen Ablauf.",
   "Das Zustandsdiagramm zeigt die Zustände eines einzelnen Objekts, nicht das Zusammenspiel mehrerer.",
   "Das Aktivitätsdiagramm zeigt Kontroll-/Datenfluss und Nebenläufigkeit, betont aber nicht die Nachrichtenreihenfolge zwischen benannten Objekten."
  ],
  "explanation": "Für den zeitlich geordneten Nachrichtenaustausch zwischen mehreren Objekten ist das Sequenzdiagramm typisch. Klassen- (statisch), Zustands- (ein Objekt) und Aktivitätsdiagramm (Kontrollfluss) beantworten andere Fragen."
 },
 {
  "id": "c4q9",
  "chapter": 4,
  "lz": "LZ 04-08",
  "r": "R2",
  "type": "multi",
  "q": "Ein Team möchte nachvollziehbar festhalten, warum es sich für einen Message-Broker statt für synchrone REST-Aufrufe entschieden hat. Wozu dient dafür ein Architecture Decision Record (ADR)?",
  "options": [
   "Die getroffene Entscheidung mit Kontext, betrachteten Alternativen und Konsequenzen festzuhalten.",
   "Alle Architekturentscheidungen des Projekts gebündelt in einem einzigen großen Dokument zu führen.",
   "Erst nach Projektende die endgültig gewählten Lösungen rückblickend zu dokumentieren.",
   "Die noch offenen, künftig zu treffenden Entscheidungen samt ihren Deadlines zu verwalten.",
   "Die Entscheidung dauerhaft und für spätere Nachvollziehbarkeit begründet festzuhalten."
  ],
  "correct": [
   0,
   4
  ],
  "optExpl": [
   "Richtig: Ein ADR hält je Entscheidung Kontext, Alternativen und Konsequenzen fest.",
   "ADRs werden typischerweise je Entscheidung geführt (eins pro Thema), nicht als ein einziges Sammeldokument.",
   "ADRs entstehen, wenn die Entscheidung getroffen wird, nicht erst rückblickend nach Projektende.",
   "Offene, künftige Aufgaben verwaltet ein Backlog; das ADR dokumentiert bereits getroffene Entscheidungen.",
   "Richtig: ein ADR bewahrt Entscheidung und Begründung dauerhaft nachvollziehbar."
  ],
  "explanation": "Ein ADR dokumentiert eine getroffene Entscheidung mit Kontext, Alternativen und Konsequenzen – meist eins pro Entscheidung, zeitnah zur Entscheidung. Es ist kein Sammeldokument, keine Rückschau erst am Projektende und kein Backlog offener Aufgaben."
 },
 {
  "id": "c4q10",
  "chapter": 4,
  "lz": "LZ 04-01",
  "r": "R1",
  "type": "multi",
  "q": "Ein Architekt dokumentiert dasselbe System für Management, Betrieb und Entwicklung. Welche Aussagen zu zielgruppengerechter Dokumentation treffen zu?",
  "options": [
   "Inhalt, Detailgrad und Notation richten sich am Informationsbedarf der jeweiligen Zielgruppe aus.",
   "Verschiedene Zielgruppen benötigen häufig unterschiedliche Sichten bzw. Abstraktionsebenen desselben Systems.",
   "Für das Management genügt oft eine Übersicht, während die Entwicklung detaillierte Bausteinbeschreibungen braucht.",
   "Jede Zielgruppe erhält ein eigenes, inhaltlich unabhängiges Modell des Systems.",
   "Zielgruppengerecht bedeutet, sicherheitshalber allen Lesern den maximalen Detailgrad bereitzustellen."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Inhalt, Detailgrad und Notation orientieren sich am Bedarf der jeweiligen Leser.",
   "Richtig: Unterschiedliche Zielgruppen brauchen unterschiedliche Sichten/Abstraktionsebenen.",
   "Richtig und subtil: Management-Übersicht vs. detaillierte Bausteinsicht für Entwickler ist ein typisches Beispiel.",
   "Es bleibt dasselbe System/Architekturmodell – dargestellt in verschiedenen Sichten, nicht als unabhängige Modelle.",
   "Maximaler Detailgrad für alle ist gerade nicht zielgruppengerecht."
  ],
  "explanation": "Zielgruppengerecht heißt: Inhalt, Detailgrad und Notation am Leserbedarf ausrichten, ggf. verschiedene Sichten desselben Systems liefern. Es entstehen keine unabhängigen Modelle je Gruppe, und ein Maximaldokument für alle ist gerade das Gegenteil."
 },
 {
  "id": "k4",
  "chapter": 4,
  "lz": "LZ 04-03",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Ordnen Sie jede Sicht/Notation zu: statisch (Struktur) oder dynamisch (Verhalten)?",
  "categories": [
   "Statisch (Struktur)",
   "Dynamisch (Verhalten)"
  ],
  "rows": [
   {
    "text": "Komponentendiagramm",
    "cat": 0
   },
   {
    "text": "Verteilungssicht (Deployment)",
    "cat": 0
   },
   {
    "text": "Zustandsdiagramm",
    "cat": 1
   },
   {
    "text": "Sequenzdiagramm",
    "cat": 1
   }
  ],
  "explanation": "Komponentendiagramm und Verteilungssicht beschreiben statische Struktur (Bausteine/Schnittstellen bzw. Zuordnung auf Knoten) – die Verteilungssicht wird oft fälschlich als dynamisch eingeordnet. Zustands- und Sequenzdiagramm zeigen dynamisches Verhalten (Zustandsübergänge bzw. zeitliche Abläufe)."
 },
 {
  "id": "c4q11",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen treffen auf fachlichen und technischen Kontext in der Kontextabgrenzung zu?",
  "options": [
   "Der fachliche Kontext zeigt Kommunikationspartner und ausgetauschte Daten fachlich; der technische die konkreten Kanäle und Protokolle.",
   "Der fachliche Kontext gehört in die Anforderungsdokumentation, der technische in die Architekturdokumentation.",
   "Der technische Kontext zeigt bereits die interne technische Bausteinstruktur des Systems.",
   "Beide unterscheiden sich nur durch die verwendete Notation, nicht durch den dargestellten Inhalt.",
   "Beide gehören zur Kontextsicht, die das System als Ganzes von seiner Umgebung abgrenzt."
  ],
  "correct": [
   0,
   4
  ],
  "optExpl": [
   "Richtig: fachlich = Partner und Daten fachlich; technisch = konkrete Kanäle/Protokolle – beide an der Systemgrenze.",
   "Beide sind Teil der Kontextsicht der Architekturdoku; die Trennung verläuft nicht entlang Anforderungs- vs. Architekturdoku.",
   "Auch der technische Kontext bleibt an der Systemgrenze (Blackbox) und zeigt keine Interna.",
   "Der Unterschied liegt im dargestellten Inhalt (fachlich vs. technisch), nicht bloß in der Notation.",
   "Richtig: fachlicher und technischer Kontext sind zwei Ausprägungen der Kontextsicht."
  ],
  "explanation": "Beide Darstellungen betreffen die Systemgrenze: fachlich (welche Partner/Daten) vs. technisch (welche Kanäle/Protokolle). Sie zeigen keine Interna, unterscheiden sich inhaltlich (nicht nur notationell) und sind beide Teil der Kontextsicht."
 },
 {
  "id": "c4q12",
  "chapter": 4,
  "lz": "LZ 04-03",
  "r": "R2",
  "type": "single",
  "q": "Was stellt ein UML-Komponentendiagramm primär dar?",
  "options": [
   "Komponenten/Bausteine und ihre angebotenen bzw. benötigten Schnittstellen.",
   "Physische Rechnerknoten und die darauf ausgeführten Artefakte.",
   "Die vollständige Signatur jeder Operation samt Parametertypen und Sichtbarkeiten.",
   "Die Reihenfolge, in der die Komponenten zur Laufzeit instanziiert und aufgerufen werden."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Komponentendiagramme zeigen Bausteine und ihre angebotenen/benötigten Schnittstellen.",
   "Knoten und darauf ausgeführte Artefakte zeigt das Verteilungsdiagramm.",
   "Detaillierte Operationssignaturen je Klasse zeigt das Klassendiagramm; Komponenten zeigen Schnittstellen, nicht jede Signatur.",
   "Die zeitliche Reihenfolge von Instanziierung/Aufrufen zeigt das Sequenz-/Laufzeitdiagramm."
  ],
  "explanation": "Komponentendiagramme zeigen Bausteine mit angebotenen/benötigten Schnittstellen (statische Struktur). Knoten+Artefakte = Verteilungsdiagramm; volle Signaturen = Klassendiagramm; zeitliche Reihenfolge = Sequenzdiagramm."
 },
 {
  "id": "c4q13",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R1",
  "type": "multi",
  "q": "Warum werden Architekturen mit mehreren Sichten beschrieben? Welche Aussagen treffen zu?",
  "options": [
   "Verschiedene Sichten adressieren unterschiedliche Fragen und Stakeholder.",
   "Keine einzelne Sicht kann alle relevanten Aspekte gleichzeitig darstellen.",
   "Dieselben Bausteine können in mehreren Sichten mit jeweils anderem Fokus auftauchen.",
   "Jede Sicht ist ein eigenständiges Modell und wird unabhängig von den anderen konsistent gehalten.",
   "Mehr Sichten bedeuten grundsätzlich eine bessere Architekturdokumentation."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Verschiedene Sichten adressieren unterschiedliche Fragen und Adressaten.",
   "Keine einzelne Sicht zeigt alle Aspekte – daher mehrere.",
   "Richtig und subtil: Bausteine erscheinen oft mehrfach, jeweils mit anderem Fokus (z. B. statisch vs. Laufzeit).",
   "Near-Miss: Sichten sind gerade nicht unabhängig – sie müssen untereinander konsistent bleiben und beschreiben dasselbe System.",
   "Nicht die Anzahl entscheidet; zu viele Sichten können schaden. Es zählt die Angemessenheit."
  ],
  "explanation": "Mehrere Sichten adressieren verschiedene Fragen/Adressaten, weil keine einzelne alles zeigt, und dieselben Bausteine tauchen mehrfach auf. Sichten sind aber nicht unabhängig (Konsistenzpflicht), und mehr Sichten sind nicht per se besser."
 },
 {
  "id": "c4q14",
  "chapter": 4,
  "lz": "LZ 04-01",
  "r": "R1",
  "type": "multi",
  "q": "Welche Eigenschaften machen Architekturdokumentation besonders nützlich?",
  "options": [
   "Sie ist aktuell und wird bei relevanten Änderungen mitgepflegt.",
   "Sie ist auf die jeweilige Zielgruppe zugeschnitten.",
   "Sie ist so knapp wie möglich und so ausführlich wie nötig.",
   "Sie ist so umfangreich wie möglich; die Aktualität ist dabei zweitrangig.",
   "Sie wird möglichst vollständig aus dem Code generiert, denn generierte Doku ist automatisch nützlich."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Aktuelle, mitgepflegte Doku bleibt verlässlich und nützlich.",
   "Auf die Zielgruppe zugeschnittene Doku trifft den Informationsbedarf.",
   "Angemessen knappe Doku ist gut lesbar und pflegbar.",
   "Maximaler Umfang auf Kosten der Aktualität ist gerade schädlich.",
   "Near-Miss: Code-Generierung kann Struktur-Doku aktuell halten, ersetzt aber nicht Entscheidungen/Rationale und macht Doku nicht automatisch nützlich."
  ],
  "explanation": "Nützliche Doku ist aktuell, zielgruppengerecht und angemessen knapp. Maximaler Umfang auf Kosten der Aktualität schadet, und generierte Doku ist nicht per se nützlich (Rationale/Entscheidungen lassen sich nicht generieren)."
 },
 {
  "id": "c4q15",
  "chapter": 4,
  "lz": "LZ 04-03",
  "r": "R2",
  "type": "single",
  "q": "Welchen Vorteil bietet eine standardisierte Notation (z. B. UML) gegenüber beliebigen „Kästchen und Pfeilen“?",
  "options": [
   "Die Diagrammelemente haben eine vereinbarte, für andere eindeutig nachvollziehbare Bedeutung.",
   "Diagramme lassen sich von Werkzeugen prüfen und teils in Code umsetzen, wodurch Entwurfsfehler ausgeschlossen werden.",
   "Eine erklärende Legende ist nicht mehr nötig, da die Notation vollständig selbsterklärend ist.",
   "Standardnotation erzwingt einen einheitlichen Detailgrad über alle Diagramme hinweg."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Standardnotation gibt den Elementen eine vereinbarte, klare Bedeutung.",
   "Near-Miss: Werkzeugunterstützung/Codegenerierung gibt es, sie schließt fachliche Entwurfsfehler aber nicht aus.",
   "Auch bei Standardnotation bleiben Erklärungen/Legenden je nach Leser sinnvoll.",
   "Ein einheitlicher Detailgrad wird durch die Notation nicht erzwungen."
  ],
  "explanation": "Standardnotationen geben Elementen eine vereinbarte Bedeutung und damit bessere Verständlichkeit. Sie schließen keine Entwurfsfehler aus, ersetzen nicht jede Erklärung und erzwingen keinen einheitlichen Detailgrad."
 },
 {
  "id": "c4q16",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R1",
  "type": "single",
  "q": "Du möchtest zeigen, wie ein Bestellvorgang zur Laufzeit zwischen mehreren Bausteinen abläuft. Welche Sicht passt am besten?",
  "options": [
   "Die Laufzeitsicht (z. B. als Sequenz- oder Aktivitätsdiagramm).",
   "Die Bausteinsicht, da sie alle beteiligten Bausteine und deren Schnittstellen zeigt.",
   "Die Verteilungssicht, da der Vorgang mehrere Knoten durchläuft.",
   "Die Kontextsicht, da eine Bestellung ein fachlicher Anwendungsfall ist."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Den zeitlichen Ablauf zwischen Bausteinen zeigt die Laufzeitsicht.",
   "Die Bausteinsicht zeigt die beteiligten Bausteine statisch, aber nicht den zeitlichen Ablauf.",
   "Die Verteilungssicht zeigt die Zuordnung auf Knoten, nicht den zeitlichen Ablauf.",
   "Die Kontextsicht zeigt die Systemgrenze, nicht die internen Abläufe."
  ],
  "explanation": "Ein zeitlicher Ablauf zwischen Bausteinen gehört in die Laufzeitsicht (z. B. Sequenzdiagramm). Baustein-, Verteilungs- und Kontextsicht beantworten andere Fragen, auch wenn sie beteiligte Bausteine/Knoten benennen."
 },
 {
  "id": "c4q17",
  "chapter": 4,
  "lz": "LZ 04-02",
  "r": "R1",
  "type": "multi",
  "q": "Welche Inhalte gehören typischerweise in eine Architekturdokumentation nach arc42?",
  "options": [
   "Die Kontextabgrenzung des Systems.",
   "Die Qualitätsanforderungen bzw. Qualitätsszenarien.",
   "Die Architekturentscheidungen mit ihren Begründungen.",
   "Die vollständige, zeilenweise Erläuterung des gesamten Quellcodes.",
   "Der detaillierte Projekt- und Meilensteinplan samt Ressourcenzuteilung."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Die Kontextabgrenzung ist ein fester arc42-Abschnitt.",
   "Qualitätsanforderungen/-szenarien gehören ausdrücklich hinein.",
   "Richtig und subtil: Architekturentscheidungen mit Begründung sind ein eigener arc42-Abschnitt.",
   "Eine zeilenweise Code-Erläuterung gehört nicht in die Architekturdoku.",
   "Near-Miss: Projekt-/Meilensteinplanung ist Projektmanagement, nicht Teil der Architekturdokumentation."
  ],
  "explanation": "Kontextabgrenzung, Qualitätsanforderungen und Architekturentscheidungen (mit Begründung) gehören in arc42. Eine zeilenweise Code-Erläuterung und die Projektplanung gehören nicht dazu."
 },
 {
  "id": "k7",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Ordnen Sie jede Frage der passenden Sicht zu.",
  "categories": [
   "Bausteinsicht",
   "Verteilungssicht"
  ],
  "rows": [
   {
    "text": "In welche Module/Komponenten ist das System zerlegt?",
    "cat": 0
   },
   {
    "text": "Welche Verantwortlichkeit und welche Schnittstellen hat ein Subsystem?",
    "cat": 0
   },
   {
    "text": "Auf welchen Knoten läuft welche Komponente in welcher Umgebung?",
    "cat": 1
   },
   {
    "text": "Über welche Netzwerkprotokolle kommunizieren die Rechner?",
    "cat": 1
   }
  ],
  "explanation": "Zerlegung in Bausteine sowie Verantwortlichkeiten/Schnittstellen eines Subsystems = Bausteinsicht. Zuordnung von Komponenten zu Knoten/Umgebungen und die Kommunikationswege/-protokolle = Verteilungssicht."
 },
 {
  "id": "c4q18",
  "chapter": 4,
  "lz": "LZ 04-03",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zum UML-Klassendiagramm treffen zu?",
  "options": [
   "Es zeigt Typen/Klassen und ihre Beziehungen (z. B. Assoziation, Vererbung).",
   "Es gehört zur statischen Struktursicht.",
   "Es stellt primär den zeitlichen Ablauf von Nachrichten zwischen Objekten dar.",
   "Es bildet die Verteilung von Artefakten auf Ausführungsknoten ab.",
   "Es stellt primär die Zustandsübergänge eines Objekts über seine Lebensdauer dar."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Klassendiagramme zeigen Typen und ihre Beziehungen.",
   "Sie gehören zur statischen Struktursicht.",
   "Zeitlichen Nachrichtenablauf zeigt das Sequenzdiagramm.",
   "Die Verteilung von Artefakten auf Knoten zeigt das Verteilungsdiagramm.",
   "Zustandsübergänge über die Lebensdauer zeigt das Zustandsdiagramm."
  ],
  "explanation": "Klassendiagramme zeigen statische Struktur (Typen + Beziehungen). Zeitlicher Nachrichtenablauf = Sequenzdiagramm; Verteilung auf Knoten = Verteilungsdiagramm."
 },
 {
  "id": "c4q19",
  "chapter": 4,
  "lz": "LZ 04-08",
  "r": "R1",
  "type": "multi",
  "q": "In einem Projekt soll entschieden werden, welche Entscheidungen als Architecture Decision Record (ADR) festgehalten werden. Welche Aussagen treffen zu?",
  "options": [
   "Eine schwer umkehrbare Technologie-Grundsatzentscheidung sollte samt der erwogenen und verworfenen Alternativen als ADR festgehalten werden.",
   "Die Wahl eines Architektur- oder Integrationsmusters mit weitreichenden Konsequenzen ist ADR-würdig.",
   "Möglichst jede Detailentscheidung im Code sollte ein eigenes ADR erhalten, um lückenlose Nachvollziehbarkeit zu sichern.",
   "Rein lokale Refactorings ohne Auswirkung auf Struktur oder Qualitätsmerkmale gehören in ein ADR.",
   "Ein ADR ist der Ort für die vollständige, stets aktuell gehaltene Beschreibung der Ist-Architektur."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Richtig: Schwer umkehrbare, folgenreiche Grundsatzentscheidungen sind der Kern eines ADR, und gerade die verworfenen Alternativen machen die Entscheidung nachvollziehbar.",
   "Richtig: Muster mit weitreichenden Folgen sind typische ADR-Kandidaten.",
   "Trugschluss: ADRs halten bewusst nur die entscheidungsrelevanten, weitreichenden Punkte fest; jede Detailentscheidung zu dokumentieren erzeugt Aufwand und veraltet schnell.",
   "Folgenlose lokale Refactorings sind keine architektonisch relevanten Entscheidungen und gehören nicht ins ADR.",
   "Verwechslung: Die laufende Beschreibung der Ist-Architektur ist Aufgabe der Architekturdokumentation; ein ADR hält eine punktuelle Entscheidung fest."
  ],
  "explanation": "ADRs halten weitreichende, folgenreiche und schwer umkehrbare Entscheidungen samt Kontext und verworfenen Alternativen fest. Sie sind weder ein Protokoll jeder Detailentscheidung noch eine fortlaufende Gesamtbeschreibung der Architektur."
 },
 {
  "id": "c4q20",
  "chapter": 4,
  "lz": "LZ 04-03",
  "r": "R2",
  "type": "single",
  "q": "Was zeigt ein UML-Verteilungsdiagramm (Deployment Diagram)?",
  "options": [
   "Knoten (Hardware bzw. Ausführungsumgebungen), die darauf ausgeführten Artefakte und die Kommunikationswege zwischen den Knoten.",
   "Die logische Zerlegung des Systems in Komponenten und deren angebotene bzw. benötigte Schnittstellen.",
   "Den zeitlichen Nachrichtenaustausch zwischen Objekten für einen konkreten Ablauf.",
   "Die Zustände eines Objekts und die auslösenden Übergänge zwischen ihnen."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Knoten, darauf platzierte Artefakte und deren Verbindungen sind der Inhalt eines Verteilungsdiagramms.",
   "Near-Miss: Die logische Zerlegung in Komponenten und Schnittstellen zeigt das Komponentendiagramm, nicht die Verteilung auf Hardware.",
   "Den zeitlichen Nachrichtenaustausch zeigt das Sequenzdiagramm.",
   "Zustände und ihre Übergänge zeigt das Zustandsdiagramm."
  ],
  "explanation": "Verteilungsdiagramme ordnen Artefakte physischen bzw. logischen Knoten zu und zeigen deren Kommunikationswege (Verteilungssicht). Komponentenzerlegung, zeitliche Abläufe oder Objektzustände sind andere Diagrammtypen."
 },
 {
  "id": "c4q21",
  "chapter": 4,
  "lz": "LZ 04-01",
  "r": "R1",
  "type": "multi",
  "q": "Eine Architekturdokumentation veraltet zunehmend gegenüber dem tatsächlichen Code. Welche Maßnahmen helfen am ehesten, sie dauerhaft aktuell zu halten?",
  "options": [
   "Die Doku schlank halten und versioniert nah am Code (z. B. im Repository) pflegen.",
   "Das Mitziehen der Doku bei relevanten Änderungen fest in der Definition of Done verankern.",
   "Übersichten und Diagramme dort, wo sinnvoll, aus dem Code generieren, statt sie manuell nachzuführen.",
   "Einmalig eine sehr umfangreiche Doku erstellen, um spätere Änderungen überflüssig zu machen.",
   "Die Doku in einem separaten, vom Projekt getrennten Archiv ablegen, damit sie unangetastet bleibt."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Schlanke, versionierte und codenahe Doku lässt sich zusammen mit dem Code fortschreiben.",
   "Richtig: Ist das Aktualisieren Teil der Änderungsroutine, driftet die Doku nicht weg.",
   "Richtig: Generierte Artefakte reduzieren manuellen Pflegeaufwand und bleiben mit dem Code synchron; sie ersetzen aber nicht den erklärenden Text.",
   "Trugschluss: Auch ein einmaliges Großdokument veraltet, sobald sich das System ändert.",
   "Ein separates Archiv entkoppelt die Doku vom Änderungsfluss und begünstigt gerade das Veralten."
  ],
  "explanation": "Aktuell bleibt Doku, wenn sie schlank, versioniert und Teil der Änderungsroutine ist und wo möglich aus dem Code abgeleitet wird. Ein einmaliges Großdokument oder ein abgekoppeltes Archiv verhindern das Veralten nicht."
 },
 {
  "id": "c4q22",
  "chapter": 4,
  "lz": "LZ 04-01",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zu einem Glossar bzw. einer gemeinsamen Begriffswelt in der Dokumentation treffen zu?",
  "options": [
   "Es schafft ein gemeinsames, eindeutiges Verständnis der Fachbegriffe und reduziert Missverständnisse.",
   "Es unterstützt eine konsistente, durchgängige Begriffsverwendung zwischen Fachbereich und Entwicklung.",
   "Es ist in erster Linie eine vollständige Liste aller Klassen- und Variablennamen des Quellcodes.",
   "Es dient primär der Übersetzung der Benutzeroberfläche in mehrere Sprachen.",
   "Es ersetzt eine eigenständige Beschreibung der Qualitätsanforderungen."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Richtig: Eindeutige Fachbegriffe sind der Kernzweck eines Glossars.",
   "Richtig: Eine durchgängig genutzte, gemeinsame Sprache verbindet Fachlichkeit und Umsetzung.",
   "Verwechslung: Ein Glossar erklärt Fachbegriffe, es ist kein Verzeichnis technischer Bezeichner.",
   "Oberflächen-Übersetzung ist Aufgabe der Lokalisierung, nicht des Glossars.",
   "Near-Miss: Qualitätsanforderungen werden separat beschrieben; ein Glossar ersetzt sie nicht."
  ],
  "explanation": "Ein Glossar sorgt für eine gemeinsame, eindeutige Fachsprache über Rollen hinweg. Es ist weder eine Liste technischer Bezeichner noch ein Übersetzungswerkzeug und ersetzt keine Qualitätsanforderungen."
 },
 {
  "id": "c4q23",
  "chapter": 4,
  "lz": "LZ 04-01",
  "r": "R1",
  "type": "multi",
  "q": "Was macht einen Architekturüberblick für neue Teammitglieder besonders wertvoll?",
  "options": [
   "Das große Ganze: Systemkontext, Ziele und die wichtigsten Randbedingungen.",
   "Die wichtigsten Bausteine und ihre Verantwortlichkeiten.",
   "Zentrale Architekturentscheidungen und ihre Begründungen.",
   "Eine vollständige, detailtiefe Beschreibung sämtlicher Schnittstellen und Datenmodelle.",
   "Eine vollständige Referenz aller öffentlichen Methoden mit ihren Signaturen."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Kontext, Ziele und Randbedingungen vermitteln das große Ganze.",
   "Richtig: Hauptbausteine und ihre Aufgaben schaffen schnelle Orientierung.",
   "Richtig: Die Gründe hinter den Kernentscheidungen erklären das Warum.",
   "Near-Miss: Vollständige Schnittstellen- und Datenmodelldetails sind nützlich, aber für einen Überblick zu tief und überfrachten ihn.",
   "Eine vollständige Methodenreferenz ist Detailwissen und gehört nicht in einen Überblick."
  ],
  "explanation": "Ein guter Überblick vermittelt Kontext/Ziele, die Hauptbausteine und die Kernentscheidungen mit Begründung. Vollständige Schnittstellen-, Datenmodell- oder Methodendetails sind für einen Überblick zu kleinteilig."
 },
 {
  "id": "c4q24",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zur Konsistenz verschiedener Architektursichten treffen zu?",
  "options": [
   "Alle Sichten beschreiben dasselbe System; derselbe Baustein darf in verschiedenen Sichten nicht widersprüchlich dargestellt sein.",
   "Sichten dürfen unterschiedliche Aspekte und Detailtiefen zeigen, müssen aber widerspruchsfrei zueinander sein.",
   "Konsistenz bedeutet, dass jede Sicht exakt dieselben Elemente in identischer Detailtiefe enthält.",
   "Bei einem Widerspruch zwischen zwei Sichten genügt es, die weniger wichtige Sicht zu entfernen.",
   "Eine einzige, alles umfassende Sicht ist grundsätzlich vorzuziehen, um Konsistenzprobleme zu vermeiden."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Richtig: dasselbe System – keine widersprüchliche Darstellung desselben Bausteins.",
   "Richtig: unterschiedliche Aspekte/Detailtiefen sind ok, solange sie widerspruchsfrei sind.",
   "Falsch: Sichten zeigen bewusst Unterschiedliches; identische Elemente/Detailtiefe sind nicht gefordert.",
   "Falsch: Ein Widerspruch wird aufgelöst, indem man die Ursache klärt – nicht, indem man eine Sicht wegwirft.",
   "Falsch: Eine einzige Sicht überfordert die Adressaten; mehrere abgestimmte Sichten sind gerade der Zweck."
  ],
  "explanation": "Verschiedene Sichten zeigen unterschiedliche Aspekte desselben Systems in unterschiedlicher Tiefe – müssen aber zueinander widerspruchsfrei sein. Widersprüche löst man durch Klärung, nicht durch Weglassen; eine einzige Allsicht ist kein Ziel."
 },
 {
  "id": "k11",
  "chapter": 4,
  "lz": "LZ 04-01",
  "r": "R2",
  "type": "k",
  "points": 2,
  "q": "Gehört der Inhalt in eine Architekturdokumentation?",
  "categories": [
   "Sinnvoller Doku-Inhalt",
   "Gehört nicht hinein"
  ],
  "rows": [
   {
    "text": "Kontextabgrenzung des Systems",
    "cat": 0
   },
   {
    "text": "Zentrale Architekturentscheidungen samt Begründung",
    "cat": 0
   },
   {
    "text": "Querschnittskonzept zur Fehlerbehandlung",
    "cat": 0
   },
   {
    "text": "Der vollständige Quellcode Zeile für Zeile",
    "cat": 1
   },
   {
    "text": "Die persönliche Urlaubs- und Abwesenheitsplanung des Teams",
    "cat": 1
   }
  ],
  "explanation": "Kontextabgrenzung, begründete Architekturentscheidungen und Querschnittskonzepte gehören in die Architekturdoku. Der komplette Quellcode (das Doku-Ziel ist Erklärung, nicht Duplikation) und personenbezogene Organisationsdaten wie Urlaubsplanung gehören nicht hinein."
 },
 {
  "id": "c4q25",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R2",
  "type": "single",
  "q": "Was zeigt eine Whitebox-Beschreibung eines Bausteins in der Bausteinsicht?",
  "options": [
   "Die innere Zerlegung des Bausteins in seine enthaltenen (Unter-)Bausteine samt deren Zusammenspiel.",
   "Ausschließlich die nach außen angebotenen Schnittstellen und Verantwortlichkeiten des Bausteins.",
   "Den zeitlichen Ablauf der Aufrufe zwischen den inneren Bausteinen zur Laufzeit.",
   "Die Zuordnung der inneren Bausteine zu konkreten Ausführungsknoten (Servern)."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Eine Whitebox öffnet den Baustein und zeigt seine inneren Teile und deren Beziehungen.",
   "Near-Miss: Nur die äußere Schnittstelle zu zeigen ist gerade die Blackbox-Sicht.",
   "Near-Miss: Der zeitliche Ablauf der inneren Aufrufe gehört in die Laufzeitsicht, nicht in die statische Whitebox.",
   "Die Zuordnung zu Ausführungsknoten gehört in die Verteilungssicht."
  ],
  "explanation": "Eine Whitebox öffnet den Baustein und zeigt statisch seine inneren Bausteine und deren Beziehungen. Nur die Schnittstelle wäre die Blackbox; zeitliche Abläufe bzw. die Hardwarezuordnung sind Laufzeit- bzw. Verteilungssicht."
 },
 {
  "id": "c4q26",
  "chapter": 4,
  "lz": "LZ 04-06",
  "r": "R2",
  "type": "multi",
  "q": "Was sollte eine Schnittstellenbeschreibung typischerweise festlegen?",
  "options": [
   "Die angebotenen Operationen mit ihren Parametern, Datenformaten und deren Bedeutung.",
   "Das Verhalten in Fehler- und Ausnahmefällen.",
   "Das Kommunikationsprotokoll bzw. die Art der Interaktion (z. B. synchron oder asynchron).",
   "Die interne Implementierung, mit der die Operationen umgesetzt sind.",
   "Die konkrete Serverhardware und Netzwerktopologie des Anbieters."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Operationen, Parameter und Datenformate mit ihrer Semantik sind der Kern des Schnittstellenvertrags.",
   "Richtig: Das Verhalten im Fehler- bzw. Ausnahmefall muss festgelegt sein.",
   "Richtig: Protokoll und Interaktionsart (synchron/asynchron) gehören zum Vertrag zwischen den Partnern.",
   "Die interne Implementierung wird bei einer Schnittstelle bewusst verborgen (Blackbox).",
   "Serverhardware und Netzwerktopologie sind Teil der Verteilungssicht, nicht der Schnittstellenbeschreibung."
  ],
  "explanation": "Ein Schnittstellenvertrag legt Operationen/Datenformate, das Fehlerverhalten und das Kommunikationsprotokoll fest. Die interne Implementierung wird gerade verborgen, und die Hardware gehört zur Verteilung."
 },
 {
  "id": "c4q27",
  "chapter": 4,
  "lz": "LZ 04-01",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen begründen, warum man nicht „alles“ dokumentieren sollte?",
  "options": [
   "Zu umfangreiche Doku verursacht Pflegeaufwand und veraltet schnell.",
   "Sinnvoll ist das Entscheidungsrelevante; unnötige Redundanz zum Code sollte vermieden werden.",
   "Zusätzliche Dokumentation verschlechtert unmittelbar die Qualität der Architektur selbst.",
   "Die Architektur lässt sich ohnehin vollständig und eindeutig allein aus dem Quellcode ableiten.",
   "Dokumentation ist grundsätzlich nur für externe Stakeholder von Nutzen, nie für das eigene Team."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Richtig: Übermäßige Doku bindet Aufwand und läuft dem System hinterher.",
   "Richtig: Man dokumentiert gezielt das Entscheidungsrelevante und vermeidet Doppelung mit dem Code.",
   "Trugschluss: Doku beschreibt die Architektur, sie verschlechtert diese nicht.",
   "Trugschluss: Der Code zeigt das Wie, nicht die Gründe, Ziele und verworfenen Alternativen.",
   "Doku nützt gerade auch dem eigenen Team, nicht nur Externen."
  ],
  "explanation": "Man dokumentiert gezielt das Entscheidungsrelevante, weil zu viel Doku Aufwand macht und veraltet. Doku verschlechtert nicht die Architektur, der Code allein erklärt Gründe und Ziele nicht, und Doku nützt auch dem Team."
 },
 {
  "id": "c4q28",
  "chapter": 4,
  "lz": "LZ 04-03",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zum UML-Aktivitätsdiagramm treffen zu?",
  "options": [
   "Es stellt Abläufe mit Aktionen und Verzweigungen dar.",
   "Es kann nebenläufige (parallele) Abläufe abbilden.",
   "Es zeigt primär die statische Struktur von Klassen und ihren Beziehungen.",
   "Es ordnet Softwarebausteine den Ausführungsknoten (Hardware) zu.",
   "Es bildet in erster Linie die Zustände eines Objekts und deren Übergänge ab."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Richtig: Aktionen und Verzweigungen sind Kernelemente des Aktivitätsdiagramms.",
   "Richtig: Über Fork/Join lassen sich parallele Abläufe darstellen.",
   "Die statische Struktur von Klassen zeigt das Klassendiagramm.",
   "Die Zuordnung zu Ausführungsknoten zeigt das Verteilungsdiagramm.",
   "Zustände und ihre Übergänge zeigt das Zustandsdiagramm."
  ],
  "explanation": "Aktivitätsdiagramme zeigen Abläufe inkl. Nebenläufigkeit (dynamisches Verhalten). Statische Klassenstruktur = Klassendiagramm; Hardwarezuordnung = Verteilungsdiagramm; Objektzustände = Zustandsdiagramm."
 },
 {
  "id": "c4q29",
  "chapter": 4,
  "lz": "LZ 04-02",
  "r": "R2",
  "type": "multi",
  "q": "Welche Abschnitte sieht das arc42-Template ausdrücklich vor?",
  "options": [
   "Qualitätsanforderungen (z. B. Qualitätsbaum und Qualitätsszenarien).",
   "Querschnittliche Konzepte.",
   "Randbedingungen (Constraints).",
   "Einen Pflichtabschnitt mit dem vollständigen Quellcode des Systems.",
   "Einen verbindlichen Testfallkatalog für jede einzelne Methode."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: arc42 enthält einen eigenen Abschnitt für Qualitätsanforderungen.",
   "Richtig: Querschnittliche Konzepte sind ein eigener arc42-Abschnitt.",
   "Richtig: Randbedingungen sind ein früher arc42-Abschnitt.",
   "Einen Quellcode-Abschnitt sieht arc42 nicht vor; Doku soll erklären, nicht den Code duplizieren.",
   "Einen verbindlichen Testfallkatalog je Methode kennt arc42 nicht."
  ],
  "explanation": "arc42 gliedert u. a. in Kontext, Randbedingungen, Lösungsstrategie, Bausteinsicht, Laufzeit-/Verteilungssicht, Querschnittliche Konzepte, Architekturentscheidungen und Qualitätsanforderungen. Quellcode oder ein Testfallkatalog sind keine arc42-Abschnitte."
 },
 {
  "id": "c4q30",
  "chapter": 4,
  "lz": "LZ 04-03",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zu UML als Notation treffen zu?",
  "options": [
   "UML bietet standardisierte Diagrammtypen mit vereinbarter Bedeutung.",
   "Für Architektur sind u. a. Komponenten-, Verteilungs- und Sequenzdiagramme nützlich.",
   "UML schreibt eine bestimmte Architektur oder Technologie vor.",
   "Ein UML-Modell lässt sich stets vollständig automatisch in lauffähigen Code übersetzen.",
   "UML ist an eine bestimmte Programmiersprache gebunden und setzt diese voraus."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Richtig: UML ist eine standardisierte Notation mit definierter Semantik der Diagrammtypen.",
   "Richtig: Diese Diagrammtypen sind für Architekturarbeit besonders hilfreich.",
   "UML ist eine Notation und schreibt keine Architektur oder Technologie vor.",
   "Vollständige automatische Codegenerierung aus UML ist nicht gewährleistet.",
   "UML ist unabhängig von einer konkreten Programmiersprache."
  ],
  "explanation": "UML ist eine standardisierte, sprachunabhängige Notation mit vielen Diagrammtypen; für Architektur sind u. a. Komponenten-, Verteilungs- und Sequenzdiagramme nützlich. Sie schreibt weder Architektur/Technologie vor noch garantiert sie vollständige Codegenerierung."
 },
 {
  "id": "c4q31",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R1",
  "type": "single",
  "q": "Ein Betriebsteam möchte wissen, auf welchen Servern welche Teile laufen und wie diese kommunizieren. Welche Sicht hilft am meisten?",
  "options": [
   "Die Verteilungssicht.",
   "Die Bausteinsicht, da sie alle Komponenten und ihre Verantwortlichkeiten zeigt.",
   "Die Laufzeitsicht, da der Betrieb vor allem Abläufe beobachtet.",
   "Das Klassendiagramm, da es die statische Struktur zeigt."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Fragen zu Servern, Knoten und Kommunikationswegen beantwortet die Verteilungssicht.",
   "Near-Miss: Die Bausteinsicht zeigt die logischen Komponenten, aber nicht ihre Zuordnung zu Servern.",
   "Near-Miss: Die Laufzeitsicht zeigt zeitliche Abläufe, nicht die Hardware-Zuordnung.",
   "Das Klassendiagramm zeigt die statische Feinstruktur, nicht die Verteilung auf Server."
  ],
  "explanation": "Fragen des Betriebs zu Servern/Knoten und Kommunikationswegen beantwortet die Verteilungssicht. Baustein-, Laufzeitsicht und Klassendiagramm adressieren andere Aspekte."
 },
 {
  "id": "k13",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Laufzeitsicht oder Verteilungssicht?",
  "categories": [
   "Laufzeitsicht",
   "Verteilungssicht"
  ],
  "rows": [
   {
    "text": "Zeitliche Interaktion der Bausteine bei einem Anwendungsfall",
    "cat": 0
   },
   {
    "text": "Auf welchem Server/Knoten welche Komponente läuft",
    "cat": 1
   },
   {
    "text": "Reihenfolge der ausgetauschten Nachrichten",
    "cat": 0
   },
   {
    "text": "Netzwerkverbindungen zwischen Rechenzentren",
    "cat": 1
   }
  ],
  "explanation": "Interaktionen/Abläufe zur Laufzeit = Laufzeitsicht. Zuordnung zu Hardware/Knoten und deren Kommunikationswege = Verteilungssicht."
 },
 {
  "id": "c4q32",
  "chapter": 4,
  "lz": "LZ 04-01",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zu guter Architekturdokumentation treffen zu?",
  "options": [
   "Verständlichkeit lässt sich letztlich nur aus Sicht der jeweiligen Zielgruppe beurteilen.",
   "Angemessenheit bedeutet: so viel wie nötig, so wenig wie möglich.",
   "Mehr Dokumentation ist grundsätzlich besser als weniger.",
   "Korrektheit ist verzichtbar, solange die Doku umfangreich genug ist.",
   "Die Qualität guter Doku bemisst sich vor allem an der Anzahl der enthaltenen Diagramme."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Richtig: Ob etwas verständlich ist, entscheidet die Zielgruppe, nicht der Autor.",
   "Richtig: Angemessenheit meint das rechte Maß, nicht Maximalumfang.",
   "Trugschluss: Mehr Doku bedeutet mehr Pflege und schnelleres Veralten, nicht automatisch mehr Wert.",
   "Korrektheit ist unverzichtbar; Umfang kann sie nicht ersetzen.",
   "Die reine Menge an Diagrammen ist kein Qualitätsmaß."
  ],
  "explanation": "Verständlichkeit ist zielgruppenabhängig, Angemessenheit meint das rechte Maß. „Viel = gut“ ist ein Trugschluss, Korrektheit ist unverzichtbar, und die Diagrammanzahl misst keine Qualität."
 },
 {
  "id": "c4q33",
  "chapter": 4,
  "lz": "LZ 04-08",
  "r": "R2",
  "type": "single",
  "q": "Worin unterscheidet sich die Entscheidungsdokumentation nach arc42 tendenziell von einem einzelnen Architecture Decision Record (ADR)?",
  "options": [
   "arc42 ordnet Entscheidungen in einem eigenen Abschnitt in den Gesamtkontext ein; ein ADR ist ein eigenständiges, je Entscheidung fokussiertes Format mit eigenem Status.",
   "Ein ADR ersetzt zwingend den arc42-Entscheidungsabschnitt und darf nicht daneben bestehen.",
   "ADRs erfassen im Gegensatz zu arc42 grundsätzlich keinen Kontext und keine Alternativen.",
   "arc42 sieht das Festhalten von Architekturentscheidungen gar nicht vor."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: arc42 bettet Entscheidungen in die Gesamtdoku ein, während ein ADR eine einzelne Entscheidung eigenständig mit Status dokumentiert.",
   "Trugschluss: ADRs und der arc42-Abschnitt lassen sich kombinieren; das eine ersetzt das andere nicht zwingend.",
   "Falsch: Gerade ADRs halten Kontext und erwogene Alternativen fest.",
   "Falsch: arc42 hat einen eigenen Abschnitt für Architekturentscheidungen."
  ],
  "explanation": "Faustregel: arc42 bettet Entscheidungen in die Gesamtdokumentation ein, ein ADR fokussiert eine einzelne Entscheidung mit eigenem Status. Beide halten Kontext und Alternativen fest und sind kombinierbar."
 },
 {
  "id": "c4q34",
  "chapter": 4,
  "lz": "LZ 04-08",
  "r": "R2",
  "type": "multi",
  "q": "Welche Angaben gehören typischerweise in ein Architecture Decision Record (ADR)?",
  "options": [
   "Der Kontext bzw. das Problem, das die Entscheidung auslöst.",
   "Die getroffene Entscheidung samt Status (z. B. vorgeschlagen, akzeptiert, abgelöst).",
   "Die Konsequenzen der Entscheidung und die erwogenen Alternativen.",
   "Eine detaillierte Implementierungs- und Testanleitung für jede betroffene Komponente.",
   "Die vollständige Anforderungsspezifikation und Kostenkalkulation des Gesamtsystems."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Der Kontext macht nachvollziehbar, warum überhaupt entschieden wurde.",
   "Richtig: Entscheidung und Status sind Kernbestandteile eines ADR.",
   "Richtig: Konsequenzen und Alternativen gehören zur nachvollziehbaren Entscheidung.",
   "Eine detaillierte Implementierungs-/Testanleitung ist kein ADR-Inhalt.",
   "Anforderungsspezifikation und Kostenkalkulation sind eigene Dokumente, kein ADR-Inhalt."
  ],
  "explanation": "Ein ADR hält knapp Kontext, Entscheidung, Status, Konsequenzen und erwogene Alternativen fest. Es ist kein Implementierungs-, Anforderungs- oder Kostendokument."
 },
 {
  "id": "c4q35",
  "chapter": 4,
  "lz": "LZ 04-06",
  "r": "R2",
  "type": "single",
  "q": "Was gilt für die Dokumentation von Schnittstellen?",
  "options": [
   "Externe Schnittstellen bilden einen „Vertrag“ mit Dritten und werden daher meist früher, formeller und ausführlicher dokumentiert – inklusive Versionierung.",
   "Interne Schnittstellen müssen grundsätzlich detaillierter dokumentiert werden als externe.",
   "Eine Schnittstellenbeschreibung sollte auch die interne Implementierung offenlegen, um Missverständnisse zu vermeiden.",
   "Für Schnittstellen genügt die Signatur; Datenformate und Fehlerverhalten sind verzichtbar."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Weil Dritte sich darauf verlassen, werden externe Schnittstellen früh, formell und mit Versionierung dokumentiert.",
   "Trugschluss: Interne Schnittstellen sind nicht per se detaillierter; der Detailgrad richtet sich nach Bedarf.",
   "Near-Miss: Gerade die interne Implementierung bleibt bewusst verborgen (Blackbox).",
   "Datenformate und Fehlerverhalten gehören zwingend zur Schnittstellenbeschreibung."
  ],
  "explanation": "Externe Schnittstellen sind ein Vertrag mit Dritten und werden früh, formell und ausführlich dokumentiert (Datenformate, Protokolle, Fehler- und Versionierungsverhalten). Die interne Implementierung bleibt bewusst außen vor (Blackbox); Datenformate und Fehlerverhalten sind Pflichtbestandteile."
 },
 {
  "id": "c4q36",
  "chapter": 4,
  "lz": "LZ 04-07",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zur zentralen Dokumentation von Querschnittskonzepten (z. B. Sicherheit, Fehlerbehandlung, Logging) treffen zu?",
  "options": [
   "Sie fördert eine systemweit einheitliche, redundanzarme Umsetzung über viele Bausteine hinweg.",
   "Querschnittskonzepte betreffen typischerweise mehrere Bausteine und wirken auf Qualitätsmerkmale.",
   "Ein Querschnittskonzept betrifft definitionsgemäß nur einen einzelnen Baustein und wird ausschließlich dort beschrieben.",
   "Querschnittskonzepte sind ausschließlich für externe Prüfer und Audits relevant.",
   "Sie ersetzen die Bausteinsicht, da sie das System bereits vollständig beschreiben."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Richtig: Eine zentrale Beschreibung verhindert, dass jedes Team das Thema neu und unterschiedlich löst.",
   "Richtig: Querschnittskonzepte durchziehen mehrere Bausteine und beeinflussen Qualitätsmerkmale.",
   "Trugschluss: Gerade weil sie viele Bausteine betreffen, werden sie zentral beschrieben.",
   "Falsch: Sie sind vor allem für das Entwicklungsteam relevant, nicht nur für Prüfer.",
   "Falsch: Sie ergänzen die Bausteinsicht, ersetzen sie aber nicht."
  ],
  "explanation": "Eine zentrale Beschreibung sichert die einheitliche, redundanzarme Umsetzung querschnittlicher Themen, die viele Bausteine betreffen und auf Qualitätsmerkmale wirken. Sie sind nicht auf einen Baustein beschränkt, nicht nur für Prüfer gedacht und ersetzen keine andere Sicht."
 },
 {
  "id": "c5q1",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R1",
  "type": "multi",
  "q": "Welche Bestandteile gehören zu einem vollständig formulierten Qualitätsszenario?",
  "options": [
   "Ein Auslöser (Stimulus) – etwa ein Ereignis, eine Anfrage oder eine Änderung, auf die das System reagieren soll.",
   "Die Quelle des Auslösers und die Umgebung bzw. der Kontext, in der bzw. dem das Szenario gilt (z. B. Normalbetrieb, Lastspitze).",
   "Die erwartete Reaktion zusammen mit einem messbaren Antwortmaß (z. B. Antwortzeit unter 200 ms).",
   "Die Priorität des Szenarios sowie der geschätzte Umsetzungsaufwand als verpflichtende Bestandteile jedes Szenarios.",
   "Eine konkrete technische Umsetzung (das WIE), mit der die geforderte Reaktion sichergestellt wird."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Der Auslöser (Stimulus) ist fester Bestandteil und beschreibt, worauf reagiert wird.",
   "Quelle und Umgebung/Kontext legen fest, unter welchen Bedingungen das Szenario gilt.",
   "Erwartete Reaktion plus messbares Antwortmaß machen das Szenario überhaupt erst prüfbar.",
   "Eine Priorität wird Szenarien zwar oft zugeordnet (z. B. im Utility Tree), ein Aufwandswert ist aber kein Bestandteil des Szenarios – die Kombination als Pflichtbestandteile ist falsch.",
   "Ein Szenario beschreibt gefordertes Verhalten (das WAS), nicht die technische Lösung (das WIE)."
  ],
  "explanation": "Ein Qualitätsszenario nennt Auslöser, Quelle/Umgebung sowie die erwartete Reaktion mit messbarem Antwortmaß. Aufwandsschätzungen gehören nicht dazu, und die technische Umsetzung (WIE) ist gerade nicht Teil des Szenarios."
 },
 {
  "id": "c5q2",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R3",
  "type": "single",
  "q": "Wie lässt sich ATAM (Architecture Tradeoff Analysis Method) am treffendsten charakterisieren?",
  "options": [
   "Eine szenariobasierte, überwiegend qualitative Methode, die Architekturentscheidungen gegen Qualitätsszenarien analysiert und dabei Trade-offs sichtbar macht.",
   "Eine Methode, die den wirtschaftlichen Nutzen von Architekturentscheidungen in Geldeinheiten quantifiziert und gegen ihre Kosten stellt.",
   "Eine Metrik-Suite, die Kopplung und Komplexität automatisiert aus dem Quellcode berechnet.",
   "Ein Reifegradmodell, das den Architektur- und Entwicklungsprozess in definierte Stufen einordnet."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: ATAM ist szenariobasiert, überwiegend qualitativ und stellt insbesondere Trade-offs heraus.",
   "Das beschreibt CBAM (Cost Benefit Analysis Method), nicht ATAM – eine naheliegende, aber falsche Verwechslung.",
   "ATAM ist kein automatisches Metrik-Werkzeug; es lebt von der moderierten Analyse mit Stakeholdern.",
   "Ein Reifegradmodell (z. B. CMMI) bewertet Prozesse, nicht Architekturentscheidungen."
  ],
  "explanation": "ATAM bewertet Architektur szenariobasiert und qualitativ und macht Trade-offs explizit. Die ökonomische Quantifizierung ist CBAM; Metrik-Suiten und Reifegradmodelle sind etwas ganz anderes."
 },
 {
  "id": "c5q3",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zum Verhältnis von qualitativer und quantitativer Architekturbewertung treffen zu?",
  "options": [
   "Qualitative Verfahren (z. B. ATAM, Reviews) sind besonders früh sinnvoll, wenn noch kein lauffähiger Code oder detailliertes Modell vorliegt.",
   "Quantitative Verfahren setzen ein analysierbares Artefakt (Code, Modell) voraus und liefern messbare Kennzahlen.",
   "Qualitative Ergebnisse sind grundsätzlich objektiver als quantitative, weil Experten beteiligt sind.",
   "Ein quantitativer Metrikwert ist schon ohne Interpretation im Kontext eine fertige Bewertung.",
   "Qualitative und quantitative Verfahren ergänzen einander und werden häufig kombiniert eingesetzt."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Richtig: Szenario- und expertenbasierte Verfahren funktionieren auch ohne fertiges Artefakt und damit früh.",
   "Richtig: Metriken brauchen etwas Messbares und liefern zählbare Kennzahlen.",
   "Falsch: Expertenbeteiligung bringt Subjektivität mit – qualitativ ist nicht pauschal objektiver.",
   "Falsch: Ein Zahlenwert bewertet nichts, solange Schwellen und Bedeutung nicht im Kontext interpretiert werden.",
   "Richtig: Beide Ansätze ergänzen sich und werden oft gemeinsam genutzt."
  ],
  "explanation": "Qualitative Verfahren sind früh und ohne Artefakt einsetzbar, quantitative brauchen Messbares; beide ergänzen sich. Qualitativ ist nicht automatisch objektiver, und Metriken sind ohne Interpretation keine Bewertung."
 },
 {
  "id": "c5q4",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R2",
  "type": "multi",
  "q": "Welche der folgenden Angaben sind quantitative (metrikbasierte) Größen?",
  "options": [
   "Der efferente bzw. afferente Kopplungsgrad eines Moduls (Ce/Ca).",
   "Die zyklomatische Komplexität einer Komponente.",
   "Die Instabilität I = Ce / (Ca + Ce) nach R. C. Martin.",
   "Die Einstufung eines Trade-offs als kritisch im Rahmen eines ATAM-Workshops.",
   "Die Priorisierung von Qualitätsszenarien als hoch/mittel/gering im Utility Tree."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Kopplungsgrade sind gezählte, messbare Kennzahlen – quantitativ.",
   "Zyklomatische Komplexität zählt Kontrollflusspfade – quantitativ.",
   "Die Instabilität ist ein berechneter Kennwert zwischen 0 und 1 – quantitativ.",
   "Die Einstufung im ATAM-Workshop entsteht in einer moderierten, expertenbasierten Analyse – qualitativ.",
   "Eine grobe Hoch/Mittel/Gering-Priorisierung ist eine qualitative Einschätzung, keine Metrik."
  ],
  "explanation": "Kopplungsgrade, zyklomatische Komplexität und die Instabilität nach Martin sind berechnete Metriken. ATAM-Einstufungen und die grobe Szenario-Priorisierung sind qualitative Urteile."
 },
 {
  "id": "c5q5",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R3",
  "type": "single",
  "q": "Wozu dient ein Qualitätsbaum (Utility Tree) in einer szenariobasierten Bewertung?",
  "options": [
   "Er ordnet Qualitätsmerkmale hierarchisch bis hinunter zu priorisierten, konkreten Qualitätsszenarien und fokussiert so die Bewertung.",
   "Er ordnet erkannte Risiken nach Eintrittswahrscheinlichkeit und Schadenshöhe in einer Matrix an.",
   "Er stellt die Zerlegung des Systems in Bausteine und deren Verantwortlichkeiten dar.",
   "Er dokumentiert getroffene Architekturentscheidungen samt Begründung und verworfenen Alternativen."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Der Utility Tree strukturiert Qualitätsmerkmale bis zu priorisierten Szenarien und lenkt den Fokus.",
   "Das beschreibt eine Risikomatrix, nicht den Utility Tree.",
   "Die Zerlegung in Bausteine und Verantwortlichkeiten leistet die Bausteinsicht.",
   "Begründete Entscheidungen samt Alternativen hält ein Architecture Decision Record (ADR) fest."
  ],
  "explanation": "Ein Qualitätsbaum gliedert Qualitätsmerkmale hierarchisch bis zu priorisierten Szenarien und fokussiert die Bewertung. Risikomatrix, Bausteinsicht und ADR sind je andere Artefakte."
 },
 {
  "id": "c5q6",
  "chapter": 5,
  "lz": "LZ 05-01",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen beschreiben zutreffend die Ziele einer Architekturbewertung?",
  "options": [
   "Risiken und Schwachstellen bezüglich der Qualitätsziele früh erkennen, solange Korrekturen noch günstig sind.",
   "Trade-offs zwischen konkurrierenden Qualitätsmerkmalen explizit machen, um bewusst zu entscheiden.",
   "Prüfen, ob die Architektur die geforderten Qualitätsziele voraussichtlich tragen kann.",
   "Nachweisen, dass die spätere Implementierung fehlerfrei sein wird.",
   "Belegen, dass ohne eine formale Bewertung grundsätzlich keine tragfähige Architektur entstehen kann."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Frühes Erkennen von Risiken senkt die Korrekturkosten – ein Kernziel.",
   "Richtig: Bewertung macht Trade-offs sichtbar und ermöglicht bewusste Entscheidungen.",
   "Richtig: Ein zentrales Ziel ist die Einschätzung, ob die Architektur die Qualitätsziele trägt.",
   "Falsch: Bewertung reduziert Risiko, garantiert aber keine fehlerfreie Implementierung.",
   "Falsch: Bewertung ist wertvoll, aber tragfähige Architekturen entstehen auch ohne formales Bewertungsverfahren – die Aussage überzeichnet."
  ],
  "explanation": "Bewertung deckt Risiken und Trade-offs früh auf und prüft die Tragfähigkeit gegenüber den Qualitätszielen. Sie garantiert keine Fehlerfreiheit und ist keine zwingende Existenzbedingung tragfähiger Architektur."
 },
 {
  "id": "c5q7",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R3",
  "type": "single",
  "q": "Was drückt eine hohe Kopplung eines Moduls tendenziell aus?",
  "options": [
   "Viele ein- und ausgehende Abhängigkeiten – tendenziell schwerer isoliert änder- und testbar und anfälliger für die Fortpflanzung von Änderungen.",
   "Eine hohe fachliche Zusammengehörigkeit der Elemente innerhalb des Moduls.",
   "Eine hohe Instabilität, die stets ein Architekturfehler ist und beseitigt werden muss.",
   "Eine geringe Wiederverwendbarkeit, die sich unmittelbar in der zyklomatischen Komplexität niederschlägt."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Viele Abhängigkeiten erschweren isolierte Änderungen und Tests und lassen Änderungen leichter fortpflanzen.",
   "Das beschreibt hohe Kohäsion (Zusammenhalt), nicht Kopplung – eine klassische Verwechslung.",
   "Kopplung hängt zwar mit Instabilität zusammen, hohe Kopplung ist aber nicht automatisch ein Fehler (z. B. bewusst instabile, änderbare Randmodule).",
   "Kopplung sagt nichts direkt über die zyklomatische Komplexität aus – das sind verschiedene Metriken."
  ],
  "explanation": "Hohe Kopplung bedeutet viele Abhängigkeiten und erschwert isolierte Änder-/Testbarkeit. Innerer Zusammenhalt ist Kohäsion; hohe Kopplung ist nicht per se ein Fehler und nicht dasselbe wie zyklomatische Komplexität."
 },
 {
  "id": "c5q8",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R2",
  "type": "single",
  "q": "Was misst die zyklomatische Komplexität?",
  "options": [
   "Die Anzahl linear unabhängiger Pfade durch den Kontrollfluss, im Wesentlichen bestimmt durch die Verzweigungen.",
   "Die Anzahl der Abhängigkeiten eines Moduls zu anderen Modulen.",
   "Die Verschachtelungstiefe der Vererbungshierarchie einer Klasse.",
   "Den Codeumfang, gemessen in Zeilen (LOC)."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Sie zählt die linear unabhängigen Kontrollflusspfade und steigt mit den Verzweigungen.",
   "Modulabhängigkeiten erfasst die Kopplung, nicht diese Metrik.",
   "Die Vererbungstiefe (Depth of Inheritance Tree) ist eine andere Metrik.",
   "LOC misst den Umfang, nicht die Anzahl der Pfade."
  ],
  "explanation": "Zyklomatische Komplexität zählt unabhängige Kontrollflusspfade. Kopplung, Vererbungstiefe und LOC sind jeweils andere, leicht zu verwechselnde Metriken."
 },
 {
  "id": "c5q9",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zum Nutzen von Qualitätsszenarien bei der Bewertung treffen zu?",
  "options": [
   "Sie machen abstrakte Qualitätsziele konkret, messbar und damit überprüfbar.",
   "Sie dienen als Maßstab, an dem Architekturentscheidungen bewertet werden.",
   "Sie helfen, Qualitätsziele zu priorisieren, da nicht alle Szenarien gleich wichtig sind.",
   "Sie garantieren, dass die genannten Qualitätsziele im fertigen System auch erreicht werden.",
   "Sie ersetzen die Erhebung der funktionalen Anforderungen."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Szenarien konkretisieren abstrakte Ziele und machen sie prüfbar.",
   "Richtig: Sie liefern den Bewertungsmaßstab für Architekturentscheidungen.",
   "Richtig: Über die Priorisierung von Szenarien lassen sich Ziele gewichten.",
   "Falsch: Szenarien machen Ziele prüfbar, garantieren deren Erreichung aber nicht.",
   "Falsch: Szenarien betreffen Qualitätsanforderungen und ersetzen nicht die funktionalen Anforderungen."
  ],
  "explanation": "Szenarien konkretisieren und priorisieren Qualitätsziele und liefern einen Bewertungsmaßstab. Sie garantieren keine Zielerreichung und ersetzen keine funktionalen Anforderungen."
 },
 {
  "id": "c5q10",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R2",
  "type": "single",
  "q": "Was kennzeichnet ein Architektur-Review (bzw. Walkthrough) als Bewertungsmethode?",
  "options": [
   "Eine qualitative, expertengestützte Durchsicht der Architektur anhand von Qualitätszielen und Szenarien.",
   "Ein moderiertes Verfahren, dessen Ergebnis primär aus automatisch gemessenen Code-Metriken besteht.",
   "Eine rein checklistenbasierte Abnahme ohne Bezug zu priorisierten Qualitätszielen oder Szenarien.",
   "Ein Verfahren, das ausschließlich fertigen Code prüfen kann und für Entwurfsmodelle ungeeignet ist."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Ein Review ist eine qualitative, expertengestützte Durchsicht gegen Qualitätsziele und Szenarien.",
   "Near-Miss: Reviews können Metriken heranziehen, ihr Kern ist aber die menschliche Beurteilung – nicht primär die Messung.",
   "Near-Miss: Eine gute Bewertung orientiert sich an priorisierten Qualitätszielen und Szenarien; eine reine Checkliste ohne diesen Bezug greift zu kurz.",
   "Falsch: Reviews sind gerade früh, auf Modell-/Entwurfsebene wertvoll – nicht erst bei fertigem Code."
  ],
  "explanation": "Reviews/Walkthroughs sind qualitative, expertengestützte Verfahren gegen priorisierte Qualitätsziele und Szenarien – auch früh auf Modellebene einsetzbar. Reine Metrikmessung, eine checklistenbasierte Abnahme ohne Szenariobezug oder die Beschränkung auf fertigen Code greifen zu kurz."
 },
 {
  "id": "c5q11",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R2",
  "type": "multi",
  "q": "Welche der folgenden Verfahren sind qualitative Bewertungsmethoden?",
  "options": [
   "Szenariobasierte Analyse (z. B. ATAM).",
   "Architektur-Review bzw. Inspektion durch Experten.",
   "Automatisches Zählen der Codezeilen (LOC).",
   "Messung des Kopplungsgrades zwischen Modulen.",
   "Berechnung der zyklomatischen Komplexität je Komponente.",
   "Ermittlung der Testabdeckung als Prozentwert."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Szenariobasierte Analyse wie ATAM ist qualitativ (moderiert, expertenbasiert).",
   "Ein Experten-Review/eine Inspektion ist ein qualitatives Verfahren.",
   "LOC-Zählung liefert eine Kennzahl und ist quantitativ.",
   "Kopplungsmessung ist metrikbasiert und damit quantitativ.",
   "Zyklomatische Komplexität ist eine Metrik und damit quantitativ.",
   "Eine prozentuale Testabdeckung ist eine Kennzahl und damit quantitativ."
  ],
  "explanation": "Szenarioanalysen und Experten-Reviews sind qualitativ. LOC, Kopplung, zyklomatische Komplexität und Testabdeckung sind quantitative (metrikbasierte) Größen."
 },
 {
  "id": "c5q12",
  "chapter": 5,
  "lz": "LZ 05-01",
  "r": "R1",
  "type": "multi",
  "q": "Wann sollte eine Architektur bewertet werden?",
  "options": [
   "Früh und wiederholt, begleitend zu wichtigen Architekturentscheidungen.",
   "Möglichst spät, wenn viel Code vorliegt, damit die Bewertung auf Fakten statt Annahmen beruht.",
   "Nur einmalig, gebündelt zur Abnahme durch den Auftraggeber.",
   "Ausschließlich reaktiv, sobald im Betrieb Probleme auftreten.",
   "Auch begleitend nach Umsetzungsschritten, um die Ist- gegen die Soll-Architektur und erkannte Risiken zu prüfen."
  ],
  "correct": [
   0,
   4
  ],
  "optExpl": [
   "Richtig: Früh und wiederholt, solange Korrekturen noch günstig sind.",
   "Klingt plausibel, ist aber falsch: spät zu warten macht nötige Korrekturen unnötig teuer.",
   "Einmalig zur Abnahme ist für Korrekturen zu spät.",
   "Rein reaktiv bei Betriebsproblemen ist deutlich zu spät.",
   "Richtig: Bewertung ist auch während und nach der Implementierung sinnvoll (Soll-Ist, Risiken)."
  ],
  "explanation": "Bewertung ist am wertvollsten früh und wiederholt. Auf viel Code zu warten klingt faktenbasiert, macht Korrekturen aber teuer; einmalig zur Abnahme oder rein reaktiv ist zu spät."
 },
 {
  "id": "c5q13",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen beschreiben Grenzen metrikbasierter (quantitativer) Bewertung zutreffend?",
  "options": [
   "Metrikwerte müssen im Kontext interpretiert werden; ein Schwellenwert allein ist noch keine Bewertung.",
   "Manche Qualitätsmerkmale (z. B. Wartbarkeit oder Sicherheit) lassen sich nur teilweise durch Metriken abbilden.",
   "Ein hoher Wert einer Metrik ist stets ein eindeutiger Mangel, unabhängig vom Kontext.",
   "Metriken ersetzen die fachliche Beurteilung durch Experten vollständig.",
   "Da Metriken subjektiv sind, sind sie für die Bewertung grundsätzlich ungeeignet."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Richtig: Erst Kontext und Interpretation machen aus einer Zahl eine Bewertung.",
   "Richtig: Viele Qualitätsmerkmale sind nur teilweise metrisch fassbar.",
   "Falsch: Ob ein hoher Wert problematisch ist, hängt vom Kontext ab.",
   "Falsch: Metriken liefern Hinweise, ersetzen aber keine fachliche Beurteilung.",
   "Falsch: Metriken sind gerade objektiv/reproduzierbar; ihre Grenze ist die nötige Interpretation, nicht Subjektivität."
  ],
  "explanation": "Metriken brauchen kontextabhängige Interpretation und decken manche Qualitäten nur teilweise ab. Sie sind nicht automatisch schlecht bei hohem Wert, ersetzen keine Experten und sind gerade nicht subjektiv."
 },
 {
  "id": "c5q14",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R1",
  "type": "multi",
  "q": "Welche Ergebnisse sind typisch für eine Architekturbewertung?",
  "options": [
   "Erkannte Risiken, Schwachstellen und Trade-offs samt priorisierter Verbesserungsvorschläge.",
   "Ein formaler Nachweis, dass das System frei von Fehlern ist.",
   "Eine verbindliche Freigabe der Architektur, die weitere Nacharbeiten grundsätzlich ausschließt.",
   "Eine vollständige, neu ausgearbeitete Zielarchitektur, welche die bisherige ersetzt.",
   "Aufgedeckte Sensitivitäts- und Trade-off-Punkte, an denen einzelne Qualitätsmerkmale besonders beeinflusst werden."
  ],
  "correct": [
   0,
   4
  ],
  "optExpl": [
   "Richtig: Risiken, Schwachstellen, Trade-offs und priorisierte Empfehlungen sind typische Ergebnisse.",
   "Eine Bewertung beweist keine Fehlerfreiheit.",
   "Sie liefert keine bedingungslose Freigabe, die Nacharbeiten ausschließt.",
   "Sie identifiziert Probleme und empfiehlt Maßnahmen, erarbeitet aber nicht als Ergebnis eine komplett neue Zielarchitektur.",
   "Richtig: das Identifizieren von Sensitivitäts- und Trade-off-Punkten ist ein typisches Bewertungsergebnis."
  ],
  "explanation": "Eine Bewertung liefert Risiken, Trade-offs und priorisierte Empfehlungen. Sie ist kein Fehlerfreiheits-Nachweis, keine bedingungslose Freigabe und produziert nicht als Ergebnis eine vollständige neue Architektur."
 },
 {
  "id": "k10",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R2",
  "type": "k",
  "points": 2,
  "q": "Ordne jede Methode bzw. Kennzahl korrekt zu: qualitatives oder quantitatives Verfahren?",
  "categories": [
   "Qualitativ",
   "Quantitativ"
  ],
  "rows": [
   {
    "text": "Szenariobasierte Analyse mit Stakeholdern (ATAM)",
    "cat": 0
   },
   {
    "text": "Instabilität I = Ce / (Ca + Ce) nach R. C. Martin",
    "cat": 1
   },
   {
    "text": "Experten-Inspektion mit Protokoll und unabhängigem Moderator",
    "cat": 0
   },
   {
    "text": "Prozentuale Testabdeckung",
    "cat": 1
   },
   {
    "text": "Moderierter Walkthrough durch den Architekturentwurf",
    "cat": 0
   },
   {
    "text": "Zyklomatische Komplexität je Methode",
    "cat": 1
   }
  ],
  "explanation": "ATAM, Inspektion und Walkthrough sind qualitativ (experten-/szenariobasiert). Instabilität, Testabdeckung und zyklomatische Komplexität sind quantitativ (berechnete Kennzahlen)."
 },
 {
  "id": "c5q15",
  "chapter": 5,
  "lz": "LZ 05-01",
  "r": "R1",
  "type": "single",
  "q": "Warum sind klar formulierte, priorisierte Qualitätsziele Voraussetzung für eine sinnvolle Architekturbewertung?",
  "options": [
   "Ohne priorisierte Qualitätsziele fehlt der Maßstab, gegen den Architekturentscheidungen überhaupt bewertet werden könnten.",
   "Weil sich der Umfang einer Bewertung erst aus den funktionalen Anforderungen ableiten lässt.",
   "Weil ohne dokumentierte Qualitätsziele grundsätzlich keine gültige Architektur existieren kann.",
   "Weil Qualitätsziele festlegen, welche konkreten Technologien im System eingesetzt werden müssen."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Bewertung misst gegen die Qualitätsziele – ohne sie fehlt der Maßstab.",
   "Falsch: Der Fokus der Bewertung ergibt sich aus den Qualitätszielen, nicht primär aus den funktionalen Anforderungen.",
   "Falsch: Architektur kann auch ohne dokumentierte Ziele existieren – sie lässt sich nur nicht sinnvoll bewerten.",
   "Falsch: Qualitätsziele beschreiben Anforderungen (WAS), nicht die konkrete Technologiewahl (WIE)."
  ],
  "explanation": "Bewertung misst gegen priorisierte Qualitätsziele; fehlen sie, gibt es keinen Maßstab. Sie hängen nicht am Umfang funktionaler Anforderungen, sind keine Existenzbedingung für Architektur und legen keine Technologien fest."
 },
 {
  "id": "c5q16",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R2",
  "type": "single",
  "q": "Wozu dienen Werkzeuge der statischen Code- bzw. Architekturanalyse?",
  "options": [
   "Zum (teil-)automatisierten Prüfen von Code und Struktur ohne Ausführung – etwa Metriken sowie Namens- und Abhängigkeitsregeln.",
   "Zum Messen des Laufzeitverhaltens (Antwortzeiten, Speicherverbrauch) unter realer Last.",
   "Zum Erheben qualitativer Experteneinschätzungen in moderierten Workshops.",
   "Zum automatischen Beheben aller gefundenen Regelverstöße im Code."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Statische Analyse prüft Code/Struktur ohne Ausführung gegen Metriken und Regeln.",
   "Das ist dynamische Analyse (Messung zur Laufzeit) – naheliegend, aber falsch.",
   "Experten-Workshops sind qualitativ und keine statische Analyse.",
   "Statische Analyse findet Verstöße, behebt sie aber nicht automatisch."
  ],
  "explanation": "Statische Analyse prüft Code/Struktur ohne Ausführung (Metriken, Regeln, Abhängigkeiten). Laufzeitmessung ist dynamisch, Workshops sind qualitativ, und Behebung erfolgt nicht automatisch."
 },
 {
  "id": "c5q17",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R3",
  "type": "single",
  "q": "Was ist ein Trade-off-Punkt bei der Architekturbewertung (z. B. in ATAM)?",
  "options": [
   "Eine Entscheidung bzw. Eigenschaft, die mehrere Qualitätsmerkmale gegensätzlich beeinflusst.",
   "Eine Entscheidung, die für genau ein einzelnes Qualitätsmerkmal ausschlaggebend ist.",
   "Ein Punkt, an dem alle relevanten Qualitätsziele gleichzeitig optimal erfüllt sind.",
   "Ein erkanntes Risiko, das keinerlei Bezug zu Qualitätsmerkmalen hat."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Ein Trade-off-Punkt wirkt gegensätzlich auf mehrere Qualitätsmerkmale.",
   "Wirkt eine Entscheidung nur auf genau eines, ist es ein Sensitivitätspunkt – nicht dasselbe.",
   "Ein gleichzeitiges Optimum aller Qualitätsziele ist gerade das, was Trade-offs verhindern.",
   "Ein Trade-off-Punkt bezieht sich definitionsgemäß auf Qualitätsmerkmale."
  ],
  "explanation": "Ein Trade-off-Punkt beeinflusst mehrere Qualitätsmerkmale gegensätzlich. Wirkt eine Entscheidung nur auf eines, ist es ein Sensitivitätspunkt."
 },
 {
  "id": "c5q18",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R2",
  "type": "single",
  "q": "Worauf sollte sich eine Architekturbewertung mit stark begrenzter Zeit konzentrieren?",
  "options": [
   "Auf die höchstpriorisierten Qualitätsziele und die Szenarien mit dem größten Risiko.",
   "Auf eine möglichst vollständige Prüfung aller Bausteine, um nichts zu übersehen.",
   "Auf die Bausteine mit der höchsten Änderungsrate laut Versionsverwaltung.",
   "Auf die technisch neuesten Komponenten, weil dort das Team-Wissen am geringsten ist."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Bei knapper Zeit zählen priorisierte Qualitätsziele und die größten Risiken.",
   "Vollständigkeit ist bei knapper Zeit gerade nicht leistbar – Fokussierung schlägt Vollständigkeit.",
   "Änderungsrate ist ein Hinweis, aber kein primäres Auswahlkriterium gegenüber Ziel und Risiko.",
   "Der Neuheitsgrad einer Komponente ist kein risikoorientiertes Auswahlkriterium."
  ],
  "explanation": "Mit begrenzter Zeit fokussiert man priorisierte Qualitätsziele und die größten Risiken. Vollständigkeit, reine Änderungsrate oder Neuheitsgrad sind nachrangige bzw. untaugliche Kriterien."
 },
 {
  "id": "c5q19",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zur Architekturbewertung treffen zu?",
  "options": [
   "Sie deckt Risiken und Schwachstellen frühzeitig auf.",
   "Sie braucht klare, priorisierte Qualitätsziele als Maßstab.",
   "Sie kann qualitativ oder quantitativ – oder kombiniert – erfolgen.",
   "Sie ist nur einmalig ganz am Ende des Projekts sinnvoll.",
   "Sie darf ausschließlich von unabhängigen externen Gutachtern durchgeführt werden."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Frühes Aufdecken von Risiken ist ein Kernnutzen.",
   "Richtig: Ohne priorisierte Qualitätsziele fehlt der Bewertungsmaßstab.",
   "Richtig: Qualitative und quantitative Verfahren sind möglich und kombinierbar.",
   "Falsch: Sinnvoll ist sie früh und wiederholt, nicht nur am Projektende.",
   "Falsch: Auch interne Reviews sind zulässig; Externe sind nicht zwingend."
  ],
  "explanation": "Bewertung deckt Risiken früh auf, braucht priorisierte Qualitätsziele und kann qualitativ wie quantitativ erfolgen. Sie ist nicht auf das Projektende beschränkt und nicht Externen vorbehalten."
 },
 {
  "id": "c5q20",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R3",
  "type": "single",
  "q": "Was ist ein Sensitivitätspunkt bei einer Architekturbewertung (z. B. in ATAM)?",
  "options": [
   "Eine Entscheidung bzw. Eigenschaft, die für genau ein Qualitätsmerkmal besonders ausschlaggebend ist.",
   "Eine Entscheidung, die mehrere Qualitätsmerkmale gegensätzlich beeinflusst.",
   "Ein Punkt, an dem alle Qualitätsziele automatisch erfüllt sind.",
   "Ein Risiko, das keinerlei Qualitätsmerkmal berührt."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Ein Sensitivitätspunkt ist für genau ein Qualitätsmerkmal ausschlaggebend.",
   "Gegensätzliche Wirkung auf mehrere Merkmale kennzeichnet einen Trade-off-Punkt.",
   "Ein automatisches Optimum aller Qualitätsziele gibt es nicht.",
   "Ein Sensitivitätspunkt betrifft gerade ein Qualitätsmerkmal."
  ],
  "explanation": "Ein Sensitivitätspunkt ist für ein einzelnes Qualitätsmerkmal entscheidend. Gegensätzliche Wirkung auf mehrere Merkmale macht ihn zum Trade-off-Punkt."
 },
 {
  "id": "c5q21",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R3",
  "type": "multi",
  "q": "Welche Ergebnistypen liefert eine szenariobasierte Bewertung wie ATAM typischerweise?",
  "options": [
   "Identifizierte Risiken und ausdrücklich benannte Nicht-Risiken.",
   "Sensitivitäts- und Trade-off-Punkte.",
   "Einen priorisierten Qualitätsbaum (Utility Tree) der relevanten Szenarien.",
   "Eine verbindliche Termin- und Aufwandsplanung für die Umsetzung.",
   "Den refaktorierten Quellcode der kritischen Komponenten."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "ATAM benennt Risiken und ausdrücklich auch Nicht-Risiken.",
   "Sensitivitäts- und Trade-off-Punkte sind typische ATAM-Ergebnisse.",
   "Der priorisierte Utility Tree entsteht im Verlauf und ist ein zentrales Zwischen-/Ergebnis.",
   "Eine verbindliche Termin-/Aufwandsplanung liefert die Bewertung nicht.",
   "Quellcode ist kein Ergebnis einer Architekturbewertung."
  ],
  "explanation": "ATAM liefert Risiken, Nicht-Risiken, Sensitivitäts- und Trade-off-Punkte sowie einen priorisierten Utility Tree. Terminpläne oder Quellcode gehören nicht dazu."
 },
 {
  "id": "c5q22",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R3",
  "type": "single",
  "q": "Ein Team möchte eine Architektur bereits vor der Implementierung bewerten und dabei Stakeholder einbeziehen. Wie ist ATAM in diesem Zusammenhang einzuordnen?",
  "options": [
   "Als szenariobasierte, überwiegend qualitative Methode, die moderiert mit Stakeholdern und damit auch früh im Lebenszyklus einsetzbar ist.",
   "Als rein quantitatives Verfahren, das ausschließlich aus dem vorhandenen Code Metriken ableitet.",
   "Als vollautomatisiertes Werkzeug, das ohne Beteiligte auskommt.",
   "Als Verfahren, das erst nach Fertigstellung und Inbetriebnahme des Systems anwendbar ist."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: ATAM ist szenariobasiert, qualitativ und moderiert – dadurch gerade früh, ohne fertigen Code, geeignet.",
   "ATAM arbeitet nicht ausschließlich mit Code-Metriken.",
   "ATAM braucht Beteiligte und ist nicht vollautomatisch.",
   "ATAM ist gerade früh sinnvoll und nicht auf fertige Systeme beschränkt."
  ],
  "explanation": "ATAM ist szenariobasiert, qualitativ und moderiert und damit ideal für eine frühe Bewertung mit Stakeholdern. Es ist weder rein metrisch noch vollautomatisch noch auf fertige Systeme beschränkt."
 },
 {
  "id": "c5q23",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R3",
  "type": "single",
  "q": "Welche Review-Form hat den höchsten Formalisierungsgrad?",
  "options": [
   "Die Inspektion – mit Vorbereitung, definierten Rollen, Protokoll und unabhängigem Moderator.",
   "Der Walkthrough, bei dem der Autor die Beteiligten durch den Entwurf führt.",
   "Das informelle Review ohne feste Rollen und ohne Protokoll.",
   "Das Pair-Programming, bei dem zwei Entwickler gemeinsam am Code arbeiten."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Die Inspektion ist am formalsten (Vorbereitung, Rollen, Protokoll, unabhängiger Moderator).",
   "Der Walkthrough ist lockerer und autorengeführt – weniger formal als die Inspektion.",
   "Ein informelles Review hat kaum Rollen und keine feste Formalisierung.",
   "Pair-Programming ist eine Entwicklungspraktik, kein formalisiertes Review-Format."
  ],
  "explanation": "Der Formalisierungsgrad steigt: informell → Walkthrough → Inspektion. Die Inspektion ist am formalsten; Pair-Programming ist gar kein Review-Format."
 },
 {
  "id": "c5q24",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R2",
  "type": "single",
  "q": "Worauf konzentriert sich das Risikomanagement aus Architektursicht vor allem?",
  "options": [
   "Auf Produktrisiken – am häufigsten mindert man sie, indem man ihre Eintrittswahrscheinlichkeit senkt.",
   "Auf Projektrisiken wie Termin- und Budgetplanung, die der Architekt allein verantwortet.",
   "Ausschließlich darauf, jedes identifizierte Risiko vollständig zu vermeiden.",
   "Darauf, Risiken bewusst zu akzeptieren und erst bei Eintritt zu reagieren."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Produktrisiken stehen im Fokus; die häufigste Minderung senkt die Eintrittswahrscheinlichkeit.",
   "Termin- und Budgetrisiken liegen primär bei der Projektleitung, nicht allein beim Architekten.",
   "Vollständige Vermeidung jedes Risikos ist selten möglich und selten wirtschaftlich.",
   "Reine Akzeptanz und reaktives Handeln ist eine Strategie für Restrisiken, aber nicht der Schwerpunkt aktiver Architekturarbeit."
  ],
  "explanation": "Architektonisch stehen Produktrisiken im Fokus; meist senkt man die Eintrittswahrscheinlichkeit. Projektrisiken liegen bei der Projektleitung, vollständige Vermeidung ist selten möglich, und reine Akzeptanz ist nur für Restrisiken sinnvoll."
 },
 {
  "id": "c5q25",
  "chapter": 5,
  "lz": "LZ 05-03",
  "r": "R2",
  "type": "multi",
  "q": "In einem langlaufenden System weicht die tatsächlich umgesetzte Struktur zunehmend von der dokumentierten Soll-Architektur ab. Welche Aussagen treffen zu?",
  "options": [
   "Man spricht von Architekturerosion; ohne Gegensteuern nimmt die „Unordnung“ über die Zeit zu.",
   "Die geplanten Qualitäten sind nur dann verlässlich zu erwarten, wenn die Umsetzung der beabsichtigten Struktur folgt.",
   "Regelmäßige Konformitätsprüfungen (z. B. Abhängigkeitsanalyse) helfen, solche Abweichungen früh sichtbar zu machen.",
   "Solange die Dokumentation aktuell gehalten wird, ist die Abweichung unkritisch.",
   "Da die Ziel-Architektur ohnehin nur eine unverbindliche Empfehlung ist, besteht kein Handlungsbedarf."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Das schleichende Auseinanderdriften von Ist und Soll ist Architekturerosion.",
   "Richtig: Nur wenn der Code der Struktur folgt, tragen die strukturellen Qualitäten verlässlich.",
   "Richtig: Konformitäts-/Abhängigkeitsprüfungen decken Abweichungen früh auf.",
   "Falsch: Aktuelle Doku ändert nichts daran, dass die Ist-Struktur von der Soll-Struktur abweicht.",
   "Falsch: Die Ziel-Architektur ist verbindlicher Maßstab, nicht bloß eine Empfehlung – Erosion muss aktiv gegengesteuert werden."
  ],
  "explanation": "Das schleichende Abweichen von Ist und Soll ist Architekturerosion; strukturelle Qualitäten tragen nur, wenn der Code der Struktur folgt, und Konformitätsprüfungen machen Abweichungen früh sichtbar. Aktuelle Doku oder das Abtun der Ziel-Architektur als Empfehlung heilen die Erosion nicht."
 },
 {
  "id": "c5q26",
  "chapter": 5,
  "lz": "LZ 05-03",
  "r": "R2",
  "type": "single",
  "q": "Was prüft eine Konformitäts- bzw. Konsistenzanalyse der Architektur?",
  "options": [
   "Ob die tatsächlich umgesetzte (Ist-)Architektur mit der beabsichtigten (Soll-)Architektur übereinstimmt.",
   "Ob die Architekturdokumentation in sich widerspruchsfrei und vollständig verfasst ist.",
   "Ob die erhobenen Anforderungen die Qualitätsziele vollständig abdecken.",
   "Ob die eingesetzten Bibliotheken auf dem aktuellen Versionsstand sind."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Sie vergleicht die umgesetzte Ist- mit der geplanten Soll-Architektur.",
   "Die innere Qualität der Dokumentation zu prüfen ist ein Dokumentations-Review, kein Ist-Soll-Abgleich.",
   "Die Abdeckung der Qualitätsziele durch Anforderungen ist Gegenstand des Requirements-Engineerings.",
   "Der Versionsstand von Bibliotheken ist eine Frage des Dependency-Managements, nicht der Konformitätsanalyse."
  ],
  "explanation": "Eine Konformitätsanalyse vergleicht Ist- und Soll-Architektur und deckt so Erosion auf. Dokumentationsqualität, Anforderungsabdeckung und Bibliotheksversionen sind je andere Prüfungen."
 },
 {
  "id": "c5q27",
  "chapter": 5,
  "lz": "LZ 05-03",
  "r": "R2",
  "type": "single",
  "q": "Womit lässt sich die Einhaltung geplanter Abhängigkeits- bzw. Schichtregeln am zuverlässigsten überprüfen?",
  "options": [
   "Mit statischer Analyse bzw. Werkzeugen, die tatsächliche Abhängigkeiten gegen definierte Regeln prüfen.",
   "Mit einem manuellen Code-Review, bei dem stichprobenartig einzelne Klassen gesichtet werden.",
   "Mit Laufzeit-Monitoring, das die im Betrieb tatsächlich aufgerufenen Module protokolliert.",
   "Mit verbindlichen Namenskonventionen, an die sich alle Teams halten sollen."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Statische Analyse prüft die realen Abhängigkeiten systematisch und vollständig gegen die Soll-Regeln – automatisiert im Build.",
   "Near-Miss: Ein manuelles Review deckt Verstöße auf, prüft aber stichprobenhaft und fehleranfällig – nicht so zuverlässig und vollständig wie ein Werkzeug.",
   "Falsch: Laufzeit-Monitoring erfasst nur tatsächlich durchlaufene Pfade, nicht alle (auch verbotenen) statischen Abhängigkeiten.",
   "Falsch: Konventionen sind eine Absicht, kein Nachweis – sie prüfen die Einhaltung nicht."
  ],
  "explanation": "Verbotene Abhängigkeiten (z. B. zwischen Schichten) findet man am zuverlässigsten mit statischer Abhängigkeitsanalyse – automatisiert und vollständig. Manuelle Reviews (stichprobenhaft), Laufzeit-Monitoring (nur durchlaufene Pfade) oder bloße Namenskonventionen (kein Nachweis) sind weniger verlässlich."
 },
 {
  "id": "c6q1",
  "chapter": 6,
  "lz": "LZ 06-01",
  "r": "R3",
  "type": "single",
  "q": "Ein Kollege argumentiert, Kapitel 6 („Beispiele für Softwarearchitekturen“) sei entbehrlich, weil es „nichts Neues“ enthalte. Wie lässt sich der Zweck des Kapitels treffend einordnen?",
  "options": [
   "Es wendet die Inhalte der vorherigen Kapitel an konkreten Fällen an und macht Zusammenhänge nachvollziehbar, ohne neuen Prüfungsstoff einzuführen.",
   "Es fasst die zentralen Definitionen der vorherigen Kapitel prüfungsrelevant zusammen und ersetzt so deren gesonderte Wiederholung.",
   "Es leitet aus den Beispielen verallgemeinerbare Regeln ab, die als Ergänzung zu den vorherigen Lernzielen zu lernen sind.",
   "Es dient primär dazu, bevorzugte Referenzarchitekturen und Technologiestacks für typische Domänen vorzustellen."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Die Beispiele veranschaulichen das bereits Gelernte an konkreten Fällen; sie sind R3 und kein neuer Prüfungsstoff.",
   "Verlockend, aber falsch: Das Kapitel liefert keine prüfungsrelevante Zusammenfassung und ersetzt die Fachkapitel nicht.",
   "Falsch: Aus den Beispielen werden keine zusätzlich zu lernenden Regeln abgeleitet – der Erkenntnisgewinn liegt im Nachvollziehen, nicht im Auswendiglernen.",
   "Falsch: Es geht um das Veranschaulichen von Vorgehen und Zusammenhängen, nicht um das Vorschreiben bevorzugter Stacks."
  ],
  "explanation": "Kapitel 6 wendet das Gelernte an Beispielen an und macht Zusammenhänge nachvollziehbar (R3). Es ist kein neuer Prüfungsstoff, keine prüfungsrelevante Zusammenfassung, leitet keine zusätzlichen Regeln ab und schreibt keine Technologien vor."
 },
 {
  "id": "c6q2",
  "chapter": 6,
  "lz": "LZ 06-02",
  "r": "R3",
  "type": "multi",
  "q": "Ein durchgängiges Architekturbeispiel soll den „roten Faden“ von den Anforderungen bis zur Lösung zeigen. Welche Aspekte sollte man daran vor allem erkennen können? (Mehrfachauswahl)",
  "options": [
   "Wie Qualitätsanforderungen und Randbedingungen die zentralen Entwurfsentscheidungen beeinflussen.",
   "Wie eine Entscheidung die Struktur prägt und in verschiedenen Sichten sichtbar wird.",
   "Welche Alternativen erwogen und aus welchen Gründen sie verworfen wurden.",
   "Die vollständige, produktionsreife Implementierung inklusive aller Konfigurationsdateien.",
   "Eine Rangliste der eingesetzten Frameworks nach ihrer Marktverbreitung."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Der Bezug von Qualitätsanforderungen und Randbedingungen zu den Entscheidungen ist der Kern des roten Fadens.",
   "Richtig: Nachvollziehbar wird eine Architektur erst, wenn Entscheidungen sich in Struktur und Sichten wiederfinden.",
   "Richtig: Auch verworfene Alternativen und ihre Begründung gehören zum lehrreichen Kern eines Beispiels.",
   "Falsch: Eine vollständige, produktionsreife Implementierung ist nicht der Lernzweck – Beispiele veranschaulichen Zusammenhänge.",
   "Falsch: Die Marktverbreitung der Frameworks ist für den roten Faden irrelevant."
  ],
  "explanation": "Der rote Faden zeigt, wie Anforderungen und Randbedingungen zu Entscheidungen führen, wie diese Struktur und Sichten prägen und welche Alternativen mit welcher Begründung verworfen wurden. Vollständige Implementierung oder Framework-Ranglisten sind nicht der Zweck. (R3.)"
 },
 {
  "id": "c6q3",
  "chapter": 6,
  "lz": "LZ 06-01",
  "r": "R3",
  "type": "single",
  "q": "Wie ist die Rolle von Kapitel 6 (Beispiele) im Verhältnis zur CPSA-F-Prüfung korrekt einzuordnen?",
  "options": [
   "Es ist überwiegend R3: Teil des Curriculums zur Veranschaulichung, aber nicht unmittelbarer Prüfungsgegenstand.",
   "Es ist R2: nicht direkt geprüft, aber die Beispiele muss man als Referenzlösungen kennen.",
   "Es ist R1: die durchgängigen Beispiele bilden einen Schwerpunkt der Prüfungsfragen.",
   "Es steht außerhalb des Curriculums und ist rein optionales Zusatzmaterial."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Kapitel 6 ist überwiegend R3 – curricularer Bestandteil zur Veranschaulichung, aber nicht unmittelbar prüfungsrelevant.",
   "Falsch: Die Beispiele sind nicht R2 und müssen nicht als Referenzlösungen beherrscht werden.",
   "Falsch: Kapitel 6 ist nicht R1 und bildet keinen Prüfungsschwerpunkt.",
   "Falsch: Das Kapitel gehört zum Curriculum – es ist R3, nicht außerhalb davon."
  ],
  "explanation": "Kapitel 6 ist überwiegend R3: Teil des Curriculums zur Veranschaulichung, aber nicht unmittelbarer Prüfungsstoff. Es ist weder R2 noch R1 und liegt nicht außerhalb des Curriculums."
 },
 {
  "id": "c6q4",
  "chapter": 6,
  "lz": "LZ 06-02",
  "r": "R3",
  "type": "single",
  "q": "Zwei Beispiele lösen eine ähnliche Anforderung mit unterschiedlichen Architekturansätzen. Was ist daran der eigentliche Lerngewinn?",
  "options": [
   "Dass Entwurfsentscheidungen kontextabhängig sind und dieselbe Anforderung je nach Randbedingungen unterschiedlich sinnvoll gelöst werden kann.",
   "Dass eines der beiden Beispiele die objektiv überlegene Lösung darstellt, die man künftig bevorzugen sollte.",
   "Dass sich aus dem Vergleich eine allgemeingültige Musterlösung ableiten lässt, die man für die Prüfung auswendig lernt.",
   "Dass die Wahl des Ansatzes letztlich Geschmackssache ist und kaum von Anforderungen abhängt."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Der Vergleich zeigt, dass Entscheidungen vom Kontext und den Randbedingungen abhängen – es gibt nicht die eine richtige Lösung.",
   "Falsch: Ohne Kontext gibt es keine objektiv überlegene Lösung; beide können in ihrem Umfeld angemessen sein.",
   "Falsch: Es gibt keine allgemeingültige, auswendig zu lernende Musterlösung.",
   "Falsch: Die Wahl ist gerade nicht beliebig, sondern durch Anforderungen und Randbedingungen begründet."
  ],
  "explanation": "Der Vergleich unterschiedlicher Ansätze für dieselbe Anforderung zeigt die Kontextabhängigkeit von Entscheidungen. Weder ist eine Lösung kontextfrei überlegen, noch gibt es eine auswendig zu lernende Blaupause, noch ist die Wahl beliebig. (R3.)"
 },
 {
  "id": "c6q5",
  "chapter": 6,
  "lz": "LZ 06-01",
  "r": "R3",
  "type": "multi",
  "q": "Welchen Nutzen bringt das Studium mehrerer unterschiedlicher Architekturbeispiele? (Mehrfachauswahl)",
  "options": [
   "Man erweitert das eigene Repertoire an Lösungsmustern und trainiert, sie auf neue Probleme zu übertragen.",
   "Man schärft den Blick dafür, welche Randbedingungen welche Entscheidungen begründen.",
   "Man erhält für die eigenen Projekte eine fertige Kopiervorlage, die eigene Entscheidungen entbehrlich macht.",
   "Man erkennt wiederkehrende Muster und lernt zugleich deren Grenzen und Kontextabhängigkeit einzuschätzen.",
   "Man gelangt zu einer einzigen, generell überlegenen Referenzarchitektur für künftige Systeme."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Richtig: Mehrere Beispiele erweitern das Lösungsrepertoire und schulen das Übertragen auf eigene Probleme.",
   "Richtig: Der Vergleich schärft das Verständnis, wie Randbedingungen Entscheidungen begründen.",
   "Falsch: Beispiele liefern keine Kopiervorlage und ersparen keine eigenen Entscheidungen.",
   "Richtig: Man erkennt wiederkehrende Muster ebenso wie deren Grenzen und Kontextabhängigkeit.",
   "Falsch: Es gibt keine generell überlegene Referenzarchitektur für alle künftigen Systeme."
  ],
  "explanation": "Mehrere Beispiele erweitern das Repertoire, schulen das Übertragen, schärfen den Blick für die begründende Wirkung von Randbedingungen und zeigen Muster samt ihren Grenzen. Sie sind keine Kopiervorlage und liefern keine universell überlegene Referenzarchitektur. (R3.)"
 },
 {
  "id": "c6q6",
  "chapter": 6,
  "lz": "LZ 06-02",
  "r": "R3",
  "type": "single",
  "q": "In einem Architekturbeispiel wird eine Entscheidung ausdrücklich mit ihren Nachteilen dokumentiert. Warum ist gerade das Betrachten solcher Trade-offs lehrreich?",
  "options": [
   "Weil Architekturentscheidungen konkurrierende Qualitätsziele gegeneinander abwägen und der bewusste, begründete Kompromiss den Kern der Entscheidung bildet.",
   "Weil die dokumentierten Nachteile belegen, dass an dieser Stelle eine bessere, nachteilsfreie Lösung übersehen wurde.",
   "Weil ein guter Entwurf so lange überarbeitet werden sollte, bis keine Nachteile mehr verbleiben.",
   "Weil das Offenlegen von Nachteilen vor allem der späteren Absicherung gegen Kritik dient und weniger dem Entwurf selbst."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Architektur wägt konkurrierende Qualitätsziele ab; der begründete Kompromiss ist der eigentliche Kern der Entscheidung.",
   "Falsch: Dokumentierte Nachteile sind kein Beleg für eine übersehene, nachteilsfreie Lösung – solche gibt es in der Regel nicht.",
   "Falsch: Ein Entwurf lässt sich nicht auf Nachteilsfreiheit hin optimieren; Kompromisse bleiben unvermeidlich.",
   "Falsch: Das Offenlegen dient der Nachvollziehbarkeit der Abwägung, nicht primär der Absicherung gegen Kritik."
  ],
  "explanation": "Trade-offs sind lehrreich, weil Architektur konkurrierende Qualitätsziele abwägt und der begründete Kompromiss den Kern jeder Entscheidung bildet. Nachteile belegen keine übersehene Ideallösung, lassen sich nicht wegoptimieren und werden nicht zur bloßen Absicherung dokumentiert. (R3.)"
 },
 {
  "id": "k16",
  "chapter": 4,
  "lz": "LZ 04-02",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Du bist Architekt:in eines komplexen Systems, das von drei Teams mit jeweils eigenen Architekt:innen entwickelt wird. Ordne die Aussagen zur Struktur- und Dokumentations-Governance ein.",
  "categories": [
   "Sinnvoll",
   "Nicht sinnvoll"
  ],
  "rows": [
   {
    "text": "Du gibst die übergreifende Struktur und die Schnittstellen zwischen den Teams zentral vor, überlässt aber die interne Struktur der Bausteine den Teams.",
    "cat": 0
   },
   {
    "text": "Jedes Team gestaltet seine Struktur völlig frei; gemeinsame Vorgaben oder Schnittstellen-Absprachen gibt es nicht.",
    "cat": 1
   },
   {
    "text": "Das Team, das zuerst mit der Umsetzung beginnt, legt die Struktur für alle anderen verbindlich fest.",
    "cat": 1
   },
   {
    "text": "Ihr vereinbart ein gemeinsames Dokumentationstemplate (z. B. arc42) für alle Teams.",
    "cat": 0
   },
   {
    "text": "Du dokumentierst die übergreifenden Architekturentscheidungen zentral; teamspezifische Details dokumentieren die Teams selbst.",
    "cat": 0
   },
   {
    "text": "Die Beiträge der Teams werden nie konsolidiert – widersprüchliche Darstellungen bleiben nebeneinander stehen.",
    "cat": 1
   }
  ],
  "explanation": "Bei mehreren Teams gibt man übergreifende Struktur/Schnittstellen und ein gemeinsames Template zentral vor, überlässt interne Details den Teams und konsolidiert die Beiträge (LZ 04-02). Völlige Beliebigkeit, „wer zuerst kommt“ oder fehlende Konsolidierung sind nicht tragfähig."
 },
 {
  "id": "k17",
  "chapter": 1,
  "lz": "LZ 01-02",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Ein Stakeholder fragt, was die bewusste Architekturarbeit dem Projekt bringt. Ordne die Aussagen über Ziele und Nutzen von Softwarearchitektur ein.",
  "categories": [
   "Trifft zu",
   "Trifft nicht zu"
  ],
  "rows": [
   {
    "text": "Sie hilft, die Komplexität des Systems beherrschbar zu halten.",
    "cat": 0
   },
   {
    "text": "Sie garantiert die Einhaltung von Budget und Terminen.",
    "cat": 1
   },
   {
    "text": "Sie unterstützt das Erreichen von Qualitätszielen wie Wartbarkeit und Sicherheit.",
    "cat": 0
   },
   {
    "text": "Sie macht systematisches Testen überflüssig.",
    "cat": 1
   },
   {
    "text": "Sie schafft ein gemeinsames Verständnis bei den Stakeholdern.",
    "cat": 0
   },
   {
    "text": "Sie nimmt alle künftigen Anforderungen vorweg, sodass nie wieder Änderungen nötig sind.",
    "cat": 1
   }
  ],
  "explanation": "Architektur senkt Komplexität, ermöglicht Qualitätsziele und schafft gemeinsames Verständnis (LZ 01-02). Sie garantiert weder Budget/Termine, macht Testen nicht überflüssig und kann nicht alle künftigen Anforderungen vorwegnehmen."
 },
 {
  "id": "k18",
  "chapter": 2,
  "lz": "LZ 02-02",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Ein neues System soll gebaut werden. Ordne jede Vorgabe ein: (fachliche/qualitative) Anforderung oder (einschränkende) Randbedingung?",
  "categories": [
   "Anforderung",
   "Randbedingung"
  ],
  "rows": [
   {
    "text": "Das System muss Zahlungen per Kreditkarte abwickeln können.",
    "cat": 0
   },
   {
    "text": "Es muss die bereits vorhandene Oracle-Datenbank weiterverwenden.",
    "cat": 1
   },
   {
    "text": "Antworten sollen im Mittel unter zwei Sekunden erfolgen.",
    "cat": 0
   },
   {
    "text": "Die Entwicklung ist verpflichtend in Java durchzuführen.",
    "cat": 1
   },
   {
    "text": "Nutzer sollen Berichte als PDF exportieren können.",
    "cat": 0
   },
   {
    "text": "Das Projektbudget ist auf 200 Personentage begrenzt.",
    "cat": 1
   }
  ],
  "explanation": "Anforderungen beschreiben, was das System leisten soll – funktional (Kreditkarte, PDF) oder qualitativ (Antwortzeit). Randbedingungen schränken den Lösungsraum ein (vorgegebene DB, Sprache, Budget) – LZ 02-02."
 },
 {
  "id": "k19",
  "chapter": 2,
  "lz": "LZ 02-03",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Ordne jede Anforderung ein: beschreibt sie, WAS das System tun soll (funktional), oder WIE GUT (Qualität)?",
  "categories": [
   "Funktionale Anforderung",
   "Qualitätsanforderung"
  ],
  "rows": [
   {
    "text": "Nutzer melden sich mit E-Mail und Passwort an.",
    "cat": 0
   },
   {
    "text": "Das System ist zu 99,9 % der Zeit verfügbar.",
    "cat": 1
   },
   {
    "text": "Aus einer Bestellung wird eine Rechnung als PDF erzeugt.",
    "cat": 0
   },
   {
    "text": "Eine neue Zahlart lässt sich in weniger als fünf Personentagen integrieren.",
    "cat": 1
   },
   {
    "text": "Die Oberfläche ist ohne Schulung in unter zehn Minuten bedienbar.",
    "cat": 1
   },
   {
    "text": "Das System unterstützt Deutsch und Englisch.",
    "cat": 0
   }
  ],
  "explanation": "Funktionale Anforderungen sagen, WAS das System tut (Anmeldung, Rechnung, Sprachen); Qualitätsanforderungen sagen, WIE GUT (Verfügbarkeit, Änderbarkeit, Bedienbarkeit) – LZ 02-03."
 },
 {
  "id": "k20",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "In einem System soll die Wartbarkeit verbessert werden. Ordne die folgenden Eigenschaften ein.",
  "categories": [
   "Fördert Wartbarkeit",
   "Schadet Wartbarkeit"
  ],
  "rows": [
   {
    "text": "Hohe Kohäsion innerhalb der Bausteine.",
    "cat": 0
   },
   {
    "text": "Enge, weitreichende Kopplung zwischen vielen Bausteinen.",
    "cat": 1
   },
   {
    "text": "Klar definierte, stabile Schnittstellen.",
    "cat": 0
   },
   {
    "text": "Viele geteilte, global veränderliche Zustände.",
    "cat": 1
   },
   {
    "text": "Information Hiding: interne Details sind gekapselt.",
    "cat": 0
   },
   {
    "text": "Zyklische Abhängigkeiten zwischen Modulen.",
    "cat": 1
   }
  ],
  "explanation": "Hohe Kohäsion, stabile Schnittstellen und Information Hiding senken die Kopplung und erleichtern Änderungen (LZ 03-06/03-04). Enge Kopplung, globaler veränderlicher Zustand und Zyklen erschweren Änderungen."
 },
 {
  "id": "k21",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Ordne die Aussagen zu den prüfungsrelevanten Architekturmustern (Schichten, Pipes & Filter, Microservices) ein.",
  "categories": [
   "Richtig",
   "Falsch"
  ],
  "rows": [
   {
    "text": "Eine Schichtenarchitektur fördert Austauschbarkeit, kann aber zusätzliche Latenz kosten.",
    "cat": 0
   },
   {
    "text": "Microservices verringern gegenüber einem Monolithen die betriebliche Komplexität.",
    "cat": 1
   },
   {
    "text": "Pipes & Filter eignen sich gut für schrittweise Datenverarbeitung.",
    "cat": 0
   },
   {
    "text": "Microservices sind fachlich geschnitten und unabhängig voneinander deploybar.",
    "cat": 0
   },
   {
    "text": "Je kleiner und je mehr Microservices, desto besser – eine Untergrenze gibt es nicht.",
    "cat": 1
   },
   {
    "text": "In einer strengen Schichtung darf eine höhere Schicht beliebige tiefere Schichten überspringen.",
    "cat": 1
   }
  ],
  "explanation": "Schichten fördern Austauschbarkeit (ggf. Latenz), strikt ohne Überspringen; Pipes & Filter passen zu Datenpipelines; Microservices sind fachlich geschnitten/unabhängig deploybar, erhöhen aber die betriebliche Komplexität, und zu feine Schnitte (Nano-Services) schaden – LZ 03-08."
 },
 {
  "id": "k22",
  "chapter": 3,
  "lz": "LZ 03-10",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Ordne ein, ob es sich typischerweise um ein Querschnittsthema handelt (betrifft viele Bausteine) oder um eine lokale, fachliche Aufgabe.",
  "categories": [
   "Querschnittsthema",
   "Kein Querschnittsthema"
  ],
  "rows": [
   {
    "text": "Protokollierung (Logging).",
    "cat": 0
   },
   {
    "text": "Die konkrete Berechnung der Rechnungssumme im Bestellmodul.",
    "cat": 1
   },
   {
    "text": "Fehlerbehandlung.",
    "cat": 0
   },
   {
    "text": "Authentifizierung und Autorisierung (Sicherheit).",
    "cat": 0
   },
   {
    "text": "Persistenz bzw. Datenzugriff.",
    "cat": 0
   },
   {
    "text": "Das Layout eines einzelnen Dialogfensters.",
    "cat": 1
   }
  ],
  "explanation": "Querschnittsthemen betreffen viele/alle Bausteine und brauchen ein einheitliches Konzept (Logging, Fehlerbehandlung, Sicherheit, Persistenz) – LZ 03-10. Eine einzelne fachliche Berechnung oder ein einzelnes Dialog-Layout sind lokal."
 },
 {
  "id": "k23",
  "chapter": 3,
  "lz": "LZ 03-02",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Du beginnst den Entwurf einer neuen Architektur. Ordne die Vorgehensweisen ein.",
  "categories": [
   "Sinnvoll",
   "Nicht sinnvoll"
  ],
  "rows": [
   {
    "text": "Architektur früh mit einem Prototyp gegen die größten Risiken absichern.",
    "cat": 0
   },
   {
    "text": "Alle Entscheidungen zu Projektbeginn endgültig festlegen und nicht mehr iterieren.",
    "cat": 1
   },
   {
    "text": "Fachliche und technische Belange bewusst trennen.",
    "cat": 0
   },
   {
    "text": "Bausteine schrittweise von der Blackbox zur Whitebox verfeinern.",
    "cat": 0
   },
   {
    "text": "Die Technologie endgültig festlegen, bevor die Qualitätsanforderungen geklärt sind.",
    "cat": 1
   },
   {
    "text": "Rückmeldung von QS und Betrieb erst nach der Fertigstellung einholen.",
    "cat": 1
   }
  ],
  "explanation": "Guter Entwurf ist iterativ, risikogetrieben (früher Prototyp), trennt Fachliches/Technisches und verfeinert Blackbox→Whitebox mit laufendem Feedback (LZ 03-02/03-05). Alles vorab final festzulegen, Technologie vor Qualitätsklärung zu fixieren oder Feedback erst am Ende einzuholen ist riskant."
 },
 {
  "id": "k24",
  "chapter": 4,
  "lz": "LZ 04-08",
  "r": "R2",
  "type": "k",
  "points": 2,
  "q": "Welche Inhalte gehören in ein Architecture Decision Record (ADR)?",
  "categories": [
   "Gehört ins ADR",
   "Gehört nicht hinein"
  ],
  "rows": [
   {
    "text": "Der Kontext bzw. das zugrunde liegende Problem.",
    "cat": 0
   },
   {
    "text": "Die getroffene Entscheidung.",
    "cat": 0
   },
   {
    "text": "Der vollständige Quellcode der Lösung.",
    "cat": 1
   },
   {
    "text": "Die betrachteten Alternativen.",
    "cat": 0
   },
   {
    "text": "Die Konsequenzen (Vor- und Nachteile) der Entscheidung.",
    "cat": 0
   },
   {
    "text": "Die detaillierte Termin- und Ressourcenplanung des Projekts.",
    "cat": 1
   }
  ],
  "explanation": "Ein ADR hält Kontext, Entscheidung, Status, Konsequenzen und betrachtete Alternativen fest (LZ 04-08). Quellcode oder Projekt-Terminplanung gehören nicht hinein – ein ADR dokumentiert Entscheidung und Begründung, nicht Implementierung oder Projektmanagement."
 },
 {
  "id": "k25",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Ordne die Analysemethoden ein: liefern sie vor allem Messwerte (quantitativ) oder Einschätzungen (qualitativ)?",
  "categories": [
   "Quantitative Methode",
   "Qualitative Methode"
  ],
  "rows": [
   {
    "text": "Messung der Antwortzeiten unter Last.",
    "cat": 0
   },
   {
    "text": "Experten-Interview zur Architektur.",
    "cat": 1
   },
   {
    "text": "Zählen ein- und ausgehender Abhängigkeiten (Kopplungsmetrik).",
    "cat": 0
   },
   {
    "text": "Szenariobasierte Bewertung in einem Workshop.",
    "cat": 1
   },
   {
    "text": "Messen von LOC und zyklomatischer Komplexität.",
    "cat": 0
   },
   {
    "text": "Nutzerumfrage zur Bedienbarkeit.",
    "cat": 1
   }
  ],
  "explanation": "Quantitative Methoden liefern Messwerte (Laufzeit, Kopplungs-/Code-Metriken); qualitative liefern Einschätzungen (Interviews, szenariobasierte Bewertung, Umfragen) – LZ 05-02. Beides ergänzt sich."
 },
 {
  "id": "k26",
  "chapter": 5,
  "lz": "LZ 05-03",
  "r": "R2",
  "type": "k",
  "points": 2,
  "q": "Es soll geprüft werden, ob die Implementierung noch zu den Architekturvorgaben passt (Soll-Ist-Abgleich). Ordne die Ansätze ein.",
  "categories": [
   "Deckt Abweichung auf",
   "Dafür ungeeignet"
  ],
  "rows": [
   {
    "text": "Statische Analyse der Abhängigkeits- und Schichtungsregeln im Build.",
    "cat": 0
   },
   {
    "text": "Architektur-Review gegen die dokumentierten Vorgaben.",
    "cat": 0
   },
   {
    "text": "Fitness-Funktionen, die eine Architekturregel dauerhaft überwachen.",
    "cat": 0
   },
   {
    "text": "Mehr Inline-Kommentare in den Code schreiben.",
    "cat": 1
   },
   {
    "text": "Automatischer Soll-Ist-Abgleich der erlaubten Schichtzugriffe.",
    "cat": 0
   },
   {
    "text": "Ausschließlich die Oberfläche manuell durchklicken.",
    "cat": 1
   }
  ],
  "explanation": "Konformität und Erosion deckt man über statische Abhängigkeitsanalyse, Reviews gegen Vorgaben, Fitness-Funktionen und automatisierte Soll-Ist-Abgleiche auf (LZ 05-03). Mehr Kommentare oder reines UI-Durchklicken prüfen die Struktur nicht."
 },
 {
  "id": "k27",
  "chapter": 3,
  "lz": "LZ 03-07",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Ordne die Eigenschaften einer entworfenen Schnittstelle ein.",
  "categories": [
   "Wünschenswert",
   "Nicht wünschenswert"
  ],
  "rows": [
   {
    "text": "Schwer missbrauchbar – Fehlbenutzung fällt schwer.",
    "cat": 0
   },
   {
    "text": "Leicht erlernbar und nutzbar.",
    "cat": 0
   },
   {
    "text": "Legt interne Implementierungsdetails offen.",
    "cat": 1
   },
   {
    "text": "Aus Nutzersicht funktional vollständig.",
    "cat": 0
   },
   {
    "text": "Bricht bei nahezu jeder internen Änderung der Implementierung.",
    "cat": 1
   },
   {
    "text": "Trennt Schnittstelle und Implementierung, sodass die Umsetzung austauschbar bleibt.",
    "cat": 0
   }
  ],
  "explanation": "Gute Schnittstellen sind leicht nutzbar, schwer missbrauchbar, funktional vollständig und trennen Schnittstelle von Implementierung (austauschbar) – LZ 03-07. Interne Details offenzulegen oder bei jeder Änderung zu brechen ist unerwünscht (zu enge Kopplung)."
 }
];
