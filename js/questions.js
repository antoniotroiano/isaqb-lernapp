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
   "Sie ist die Menge aller Strukturen, die sich vollständig und eindeutig aus dem vorhandenen Quellcode ableiten lässt.",
   "Sie umfasst alle Entwurfsentscheidungen eines Systems, unabhängig davon, wie leicht sie sich später ändern lassen.",
   "Sie umfasst die Struktur(en) eines Systems aus Bausteinen samt deren Beziehungen und nach außen sichtbaren Eigenschaften.",
   "Zu ihr gehören die grundlegenden Entwurfsentscheidungen, deren spätere Änderung typischerweise teuer wäre.",
   "Sie entsteht erst durch ihre Dokumentation; ein System ohne dokumentierte Architektur hat noch keine."
  ],
  "correct": [
   2,
   3
  ],
  "optExpl": [
   "Falsch: Der Code zeigt nur das Ergebnis vieler Entscheidungen, nicht deren Begründung, verworfene Alternativen oder Annahmen. Auch Laufzeit- und Verteilungsaspekte sind oft gar nicht im Quellcode sichtbar, daher lässt sich Architektur nie vollständig daraus rekonstruieren.",
   "Falsch: Architektur umfasst nicht jede Kleinentscheidung, sondern die tragenden, folgenreichen Entscheidungen. Leicht änderbare Details wie Variablennamen oder lokale Algorithmen gehören zum Detailentwurf bzw. zur Implementierung.",
   "Richtig: Bausteine, ihre Beziehungen und ihre nach außen sichtbaren Eigenschaften bilden den Kern der gängigen Architekturdefinition (etwa nach ISO/IEC/IEEE 42010). Damit beschreibt Architektur die Struktur, auf der alle weiteren Entscheidungen aufbauen.",
   "Richtig: Architektur besteht gerade aus den grundlegenden Entscheidungen, deren spätere Änderung viel Aufwand verursachen würde, etwa die Wahl des Architekturstils oder der Verteilung. Weil sie so folgenreich sind, verdienen sie besondere Sorgfalt und Begründung.",
   "Falsch: Jedes System hat eine Architektur, auch wenn sie nie aufgeschrieben wurde. Dokumentation beschreibt eine bestehende Architektur und macht sie kommunizierbar, sie erzeugt sie aber nicht."
  ],
  "explanation": "Architektur = Bausteine + Beziehungen + Eigenschaften + tragende (teuer änderbare) Entscheidungen. Sie ist nicht restlos aus dem Code ableitbar, umfasst nicht jede Kleinentscheidung und existiert auch ohne Dokumentation."
 },
 {
  "id": "c1q2",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen über eine Komponente (Baustein) treffen zu?",
  "options": [
   "Sie kann selbst wieder aus mehreren feineren Bausteinen zusammengesetzt sein.",
   "Zwei Komponenten mit identischer Schnittstellensignatur sind stets ohne Weiteres gegeneinander austauschbar, unabhängig von ihren zugesicherten Eigenschaften.",
   "Sie entspricht auf der Zielplattform stets genau einem deploybaren Artefakt (z. B. einer Datei bzw. Bibliothek).",
   "Der Begriff Komponente bezeichnet immer eine Laufzeiteinheit, im Gegensatz zum reinen Entwurfsbegriff Baustein.",
   "Sie kapselt ihre Realisierung und wird über ihre Schnittstelle(n) genutzt (Blackbox-Prinzip)."
  ],
  "correct": [
   0,
   4
  ],
  "optExpl": [
   "Richtig: Bausteine sind hierarchisch aufgebaut – eine Komponente kann in ihrer Whitebox-Sicht aus feineren Bausteinen bestehen. Diese schrittweise Verfeinerung ist die Grundlage der Bausteinsicht mit ihren Ebenen.",
   "Falsch: Die Signatur legt nur Namen und Typen fest, nicht die Semantik oder zugesicherte Eigenschaften wie Antwortzeit oder Fehlerverhalten. Austauschbar sind Komponenten erst, wenn der gesamte Kontrakt übereinstimmt.",
   "Falsch: Hier werden Bausteinsicht und Verteilungssicht vermengt. Ein Baustein kann auf mehrere Artefakte verteilt sein, und ein Artefakt kann mehrere Bausteine enthalten.",
   "Falsch: Baustein und Komponente unterscheiden sich nicht nach Laufzeit und Entwurfszeit. Komponente ist eine Art von Baustein, beide sind in erster Linie Strukturbegriffe der statischen Zerlegung.",
   "Richtig: Kapselung ist das Kernmerkmal einer Komponente – sie verbirgt ihre Realisierung und wird nur über ihre Schnittstellen genutzt. Dadurch kann man das Innere ändern, ohne Nutzer anpassen zu müssen."
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
   "Die Whitebox ersetzt die Blackbox: Sobald die innere Struktur beschrieben ist, ist die separate Außensicht redundant.",
   "Blackbox und Whitebox unterscheiden sich darin, dass die Blackbox die Laufzeitsicht und die Whitebox die Bausteinsicht darstellt.",
   "Die Blackbox beschreibt die angebotenen Schnittstellen; die benötigten Schnittstellen gehören dagegen erst in die Whitebox."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Die Blackbox ist die Außensicht mit Schnittstellen, Verantwortung und zugesicherten Eigenschaften. Die Whitebox öffnet den Baustein und zeigt zusätzlich, aus welchen inneren Bausteinen er besteht und wie diese zusammenwirken.",
   "Falsch: Die Blackbox hat einen eigenständigen Nutzen – wer einen Baustein nur verwendet, braucht genau diese Außensicht und keine Interna. Whitebox und Blackbox ergänzen sich, die eine macht die andere nicht überflüssig.",
   "Falsch: Blackbox und Whitebox unterscheiden sich im Grad der Sichtbarkeit von Interna, nicht in der Zuordnung zu Sichten. Beide Darstellungsformen kommen innerhalb der Bausteinsicht vor.",
   "Falsch: Auch benötigte Schnittstellen sind Teil der Außensicht, denn sie zeigen, wovon der Baustein abhängt. Wer ihn einsetzen will, muss diese Abhängigkeiten kennen – daher gehören sie in die Blackbox."
  ],
  "explanation": "Blackbox = Außensicht mit angebotenen und benötigten Schnittstellen, Verantwortung und Zusicherungen; Whitebox = zusätzlich die enthaltenen Bausteine. Beide sind nützlich und ersetzen einander nicht."
 },
 {
  "id": "c1q4",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zu Architektursichten treffen zu?",
  "options": [
   "Die Verteilungssicht bildet Bausteine bzw. Artefakte auf Hardware- und Ausführungsknoten ab.",
   "Sichten entstehen möglichst unabhängig voneinander; Widersprüche zwischen ihnen sind wegen der unterschiedlichen Perspektiven unvermeidbar.",
   "Die Kontextsicht ist eine Verfeinerung der Verteilungssicht und zeigt die Kommunikationskanäle zwischen den Knoten.",
   "Die Bausteinsicht zeigt die statische Zerlegung des Systems in Bausteine und deren Beziehungen.",
   "Die Laufzeitsicht beschreibt das dynamische Zusammenspiel der Bausteine in konkreten Szenarien."
  ],
  "correct": [
   0,
   3,
   4
  ],
  "optExpl": [
   "Richtig: Die Verteilungssicht zeigt, auf welchen Hardware- und Ausführungsknoten die Bausteine bzw. Artefakte laufen. So werden Fragen zu Infrastruktur, Betrieb und physischer Verteilung beantwortet.",
   "Falsch: Sichten beleuchten zwar unterschiedliche Aspekte, beschreiben aber dasselbe System. Deshalb müssen sie konsistent und widerspruchsfrei zueinander sein – Widersprüche deuten auf Fehler in der Dokumentation oder im Entwurf hin.",
   "Falsch: Die Kontextsicht zeigt das System als Blackbox mit seinen externen Nachbarn und Schnittstellen nach außen. Sie ist eine eigenständige Abgrenzungssicht und keine Verfeinerung der Verteilungssicht.",
   "Richtig: Die Bausteinsicht zeigt die statische Zerlegung des Systems in Bausteine und deren Beziehungen, meist hierarchisch über mehrere Ebenen. Sie ist die zentrale Strukturansicht einer Architektur.",
   "Richtig: Die Laufzeitsicht beschreibt, wie Bausteine in konkreten Szenarien dynamisch zusammenarbeiten, etwa als Sequenzdiagramm. Damit werden Abläufe sichtbar, die die statische Struktur allein nicht zeigt."
  ],
  "explanation": "Kontext-, Baustein-, Laufzeit- und Verteilungssicht beleuchten unterschiedliche Aspekte desselben Systems. Die Kontextsicht grenzt das System nach außen ab; alle Sichten müssen widerspruchsfrei sein."
 },
 {
  "id": "c1q5",
  "chapter": 1,
  "lz": "LZ 01-04",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aufgaben gehören zum Kern der Rolle von Softwarearchitekt:innen?",
  "options": [
   "Projektplanung, Aufwandsschätzung und Terminverantwortung für die Umsetzung übernehmen.",
   "Tragende Entwurfsentscheidungen treffen, begründen und dokumentieren.",
   "Die Umsetzung begleiten und prüfen, ob Code und Architektur zusammenpassen.",
   "Qualitätsanforderungen gemeinsam mit Stakeholdern klären und schärfen.",
   "Die fachliche Priorisierung des Produkt-Backlogs eigenverantwortlich festlegen."
  ],
  "correct": [
   1,
   2,
   3
  ],
  "optExpl": [
   "Falsch: Architekt:innen liefern wertvollen Input zu Aufwänden und technischen Risiken, tragen aber keine Planungs- und Terminverantwortung. Diese liegt beim Projektmanagement bzw. der Projektleitung.",
   "Richtig: Tragende Entwurfsentscheidungen zu treffen, zu begründen und zu dokumentieren ist der Kern der Architekturrolle. Nur begründete und festgehaltene Entscheidungen bleiben später nachvollziehbar und überprüfbar.",
   "Richtig: Architektur endet nicht mit dem Entwurf – Architekt:innen begleiten die Umsetzung und prüfen, ob Code und Architektur zusammenpassen. So wird verhindert, dass die tatsächliche Struktur schleichend von der geplanten abweicht.",
   "Richtig: Qualitätsanforderungen sind die wichtigsten Architekturtreiber, sind anfangs aber oft vage. Sie gemeinsam mit den Stakeholdern zu klären und messbar zu machen, ist daher eine Kernaufgabe.",
   "Falsch: Die fachliche Priorisierung des Backlogs verantwortet der Product Owner bzw. der Fachbereich. Architekt:innen beraten dazu, etwa zu technischen Abhängigkeiten oder Risiken, entscheiden aber nicht eigenverantwortlich."
  ],
  "explanation": "Kern der Rolle: Qualitätsanforderungen klären, tragende Entscheidungen treffen und begründen, Umsetzung begleiten. Fachliche Priorisierung (PO) und Termin-/Planungsverantwortung (Projektleitung) liegen bei anderen Rollen."
 },
 {
  "id": "c1q6",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zu interner und externer Softwarequalität treffen zu?",
  "options": [
   "Wartbarkeit ist eine externe Qualität, weil sie den Nutzer über Ausfallzeiten indirekt betrifft.",
   "Interne Qualität lässt sich vollständig über Blackbox-Tests des ausgelieferten Systems messen.",
   "Interne und externe Qualität sind voneinander unabhängig; man kann die eine optimieren, ohne die andere zu beeinflussen.",
   "Externe Qualität zeigt sich im Betrieb des fertigen Systems (z. B. Performanz, Zuverlässigkeit) und ist für Nutzer wahrnehmbar.",
   "Niedrige interne Qualität (z. B. schlechte Wartbarkeit) verschlechtert langfristig oft auch die extern wahrnehmbare Qualität."
  ],
  "correct": [
   3,
   4
  ],
  "optExpl": [
   "Falsch: Wartbarkeit betrifft die innere Struktur des Systems und ist daher eine interne Qualität. Dass sie sich indirekt auf Nutzer auswirken kann, macht sie nicht zur externen Qualität – das gilt für fast jede interne Eigenschaft.",
   "Falsch: Blackbox-Tests prüfen nur das von außen beobachtbare Verhalten. Interne Qualität wie Wartbarkeit oder Verständlichkeit zeigt sich in der Struktur und erfordert z. B. Code-Analysen oder Reviews.",
   "Falsch: Interne und externe Qualität hängen zusammen. Eine schlechte innere Struktur führt über die Zeit zu mehr Fehlern und langsameren Änderungen, was Nutzer dann auch von außen bemerken.",
   "Richtig: Externe Qualität ist die im Betrieb wahrnehmbare Qualität, etwa Performanz, Zuverlässigkeit oder Benutzbarkeit. Sie lässt sich am laufenden System beobachten und messen.",
   "Richtig: Mängel in der internen Qualität wirken sich langfristig auch extern aus, etwa durch häufigere Fehler oder verzögerte Features. Deshalb lohnt es sich, in interne Qualität zu investieren, auch wenn Nutzer sie nicht direkt sehen."
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
   "Frühe Entscheidungen unter Unsicherheit lassen sich vermeiden, indem man vorab ein ausreichend detailliertes Gesamtdesign erstellt.",
   "Man sollte mit allen tragenden Entscheidungen warten, bis die Anforderungen vollständig und final vorliegen.",
   "Weil Wissen und Anforderungen anfangs unvollständig sind, werden Entscheidungen bewusst unter Unsicherheit getroffen und iterativ verfeinert.",
   "Das ist unproblematisch, sofern die Entscheidungen in einem ADR dokumentiert sind, da sie sich dann jederzeit nachvollziehbar revidieren lassen."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Auch ein sehr detailliertes Vorab-Design (Big Design Up Front) beruht auf unvollständigem Wissen. Es verlagert die Unsicherheit nur in einen Plan, der später mit hoher Wahrscheinlichkeit korrigiert werden muss.",
   "Falsch: Anforderungen sind praktisch nie vollständig und final. Wer auf diesen Zustand wartet, verzögert das Projekt und verschiebt Risiken nur nach hinten, statt sie früh zu adressieren.",
   "Richtig: Architekturarbeit findet zwangsläufig unter Unsicherheit statt, weil Wissen und Anforderungen anfangs unvollständig sind. Entscheidungen werden daher bewusst getroffen, ihre Annahmen festgehalten und iterativ überprüft und verfeinert.",
   "Falsch: Ein ADR macht eine Entscheidung nachvollziehbar, aber nicht billiger umkehrbar. Tragende Entscheidungen bleiben teuer zu ändern – Dokumentation ersetzt nicht den bewussten Umgang mit Unsicherheit."
  ],
  "explanation": "Architekturentscheidungen fallen typischerweise unter Unsicherheit und werden iterativ verfeinert. Dokumentation (ADR) macht sie nachvollziehbar, aber nicht billig umkehrbar; Warten oder Big Design Up Front beseitigen die Unsicherheit nicht."
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
   "Architekturentscheidungen können ihrerseits neue Anforderungen oder Randbedingungen nach sich ziehen.",
   "Architektur und Anforderungen beeinflussen sich wechselseitig und werden iterativ geschärft.",
   "Qualitätsanforderungen wirken vor allem auf den Detailentwurf; die Grobstruktur ergibt sich aus den funktionalen Anforderungen.",
   "Randbedingungen wie vorgegebene Technologien sind keine Anforderungen und werden daher erst nach dem Architekturentwurf berücksichtigt."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Funktionale Anforderungen lassen sich mit vielen Strukturen erfüllen, erst Qualitätsanforderungen wie Performanz oder Sicherheit schränken die Lösungen wirklich ein. Deshalb treiben sie die tragenden Architekturentscheidungen.",
   "Richtig: Entscheidungen erzeugen oft Folgeanforderungen. Wer sich etwa für Cloud-Betrieb entscheidet, muss plötzlich neue Betriebs-, Sicherheits- und Kostenanforderungen berücksichtigen.",
   "Richtig: Anforderungen beeinflussen die Architektur, und Erkenntnisse aus dem Entwurf wirken auf die Anforderungen zurück, etwa wenn sich ein Ziel als zu teuer erweist. Beide werden daher iterativ gemeinsam geschärft.",
   "Falsch: Es ist umgekehrt – gerade Qualitätsanforderungen prägen die Grobstruktur, etwa wenn Verfügbarkeit eine verteilte, redundante Architektur erzwingt. Funktionale Anforderungen allein bestimmen die Struktur kaum.",
   "Falsch: Randbedingungen wie vorgegebene Technologien schränken den Lösungsraum ein und müssen deshalb von Anfang an berücksichtigt werden. Wer sie erst nach dem Entwurf beachtet, riskiert eine Architektur, die so gar nicht umsetzbar ist."
  ],
  "explanation": "Qualitätsanforderungen treiben die tragenden Entscheidungen und prägen die Grobstruktur. Architektur und Anforderungen beeinflussen sich wechselseitig – Entscheidungen können neue Anforderungen erzeugen. Randbedingungen gehören von Beginn an in den Entwurf."
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
   "Richtig: Das detaillierte Interaktions- und Oberflächendesign verantwortet die UX-/UI-Gestaltung, nicht die Architekturrolle. Die Architektur legt die Benutzeroberfläche höchstens als Querschnittskonzept grob fest, etwa Technologie und Struktur, gestaltet sie aber nicht im Detail – diese Tätigkeit gehört also am wenigsten zum Kern.",
   "Falsch: Diese Tätigkeit ist Kernaufgabe der Architektur. Querschnittskonzepte wie Persistenz, Sicherheit oder Fehlerbehandlung betreffen viele Bausteine zugleich und sorgen für Konsistenz im ganzen System.",
   "Falsch: Diese Tätigkeit ist Kernaufgabe der Architektur. Entscheidungen samt Begründung zu dokumentieren und zu kommunizieren schafft gemeinsames Verständnis und macht sie später nachvollziehbar.",
   "Falsch: Diese Tätigkeit ist Kernaufgabe der Architektur. Die Umsetzung zu begleiten, die Einhaltung zu prüfen und das Team zu beraten verhindert, dass Code und Architektur auseinanderlaufen."
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
    "text": "Gute Architekturentscheidungen erkennt man daran, dass sie später nicht mehr verfeinert werden müssen.",
    "cat": 1
   },
   {
    "text": "Komponenten sind Laufzeiteinheiten, Bausteine dagegen Einheiten des Entwurfs.",
    "cat": 1
   },
   {
    "text": "Eine Schnittstelle beschreibt den Vertrag eines Bausteins, nicht dessen interne Realisierung.",
    "cat": 0
   },
   {
    "text": "Hohe Kohäsion erreicht man, indem man möglichst viele Aufgaben in einem Baustein bündelt.",
    "cat": 1
   }
  ],
  "explanation": "Richtig: Lose Kopplung + hohe Kohäsion ergänzen sich; die Schnittstelle ist der Vertrag, nicht die Realisierung. Falsch: Kohäsion bedeutet fachliche Zusammengehörigkeit, nicht möglichst viele Aufgaben; Baustein/Komponente ist keine Laufzeit-/Entwurfsunterscheidung; auch gute Entscheidungen werden iterativ verfeinert."
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
   "Die einheitliche Umsetzung im Code durch detaillierte Programmierrichtlinien sicherstellen.",
   "Möglichst viele denkbare künftige Anforderungen vorab berücksichtigen, damit die Architektur langfristig stabil bleibt.",
   "Sie schafft ein gemeinsames Verständnis des Systems bei den Stakeholdern.",
   "Vor allem festlegen, welche Technologien und Frameworks im Projekt eingesetzt werden."
  ],
  "correct": [
   0,
   3
  ],
  "optExpl": [
   "Richtig: Architektur soll die Komplexität eines Systems durch Strukturierung beherrschbar halten und das Erreichen der Qualitätsziele unter den gegebenen Randbedingungen ermöglichen. Das sind zentrale Ziele des Fachs.",
   "Falsch: Programmierrichtlinien können die Umsetzung unterstützen, sind aber eine Maßnahme und kein Ziel von Architektur. Sie betreffen zudem eher die Implementierungsebene als die tragende Struktur.",
   "Falsch: Möglichst viele denkbare Zukunftsanforderungen vorwegzunehmen führt zu Überkonstruktion (YAGNI) und unnötiger Komplexität. Ziel ist eine angemessene Änderbarkeit für wahrscheinliche Änderungen, nicht das Vorwegnehmen aller Eventualitäten.",
   "Richtig: Architektur schafft ein gemeinsames Verständnis des Systems bei den Stakeholdern und dient als Kommunikationsgrundlage. Ohne dieses Verständnis würden Entscheidungen und Umsetzung leicht auseinanderlaufen.",
   "Falsch: Technologie- und Frameworkentscheidungen sind Mittel, um die Architekturziele zu erreichen, nicht das Ziel selbst. Eine Architektur ist weit mehr als eine Technologieliste."
  ],
  "explanation": "Kernziele: Komplexität beherrschen, Qualitätsziele unter Randbedingungen ermöglichen, gemeinsames Verständnis schaffen. Technologiewahl und Richtlinien sind Mittel; spekulatives Vorwegnehmen ist Überkonstruktion."
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
   "Stakeholder sind die Personen mit Entscheidungsbefugnis über das Projekt, etwa Auftraggeber und Management.",
   "Die Menge der Stakeholder ist nach der Anforderungsphase in der Regel stabil; neue kommen danach kaum hinzu.",
   "Auch Betrieb, Wartung, Auftraggeber und ggf. Behörden gehören dazu, nicht nur Endnutzer.",
   "Widersprüchliche Stakeholder-Interessen löst die Architektin selbst auf, indem sie nach technischer Machbarkeit entscheidet."
  ],
  "correct": [
   0,
   3
  ],
  "optExpl": [
   "Richtig: Stakeholder sind alle Personen und Gruppen mit einem berechtigten Interesse am System oder seiner Entwicklung. Diese breite Definition stellt sicher, dass keine relevanten Anforderungen und Randbedingungen übersehen werden.",
   "Falsch: Diese Definition ist zu eng. Auch Betrieb, Entwicklung, Nutzer oder Behörden sind Stakeholder, obwohl sie keine Entscheidungsbefugnis über das Projekt haben.",
   "Falsch: Die Menge der Stakeholder verändert sich im Projektverlauf, etwa durch einen neuen Betreiber oder neue Regulierung. Die Stakeholder-Liste wird deshalb fortlaufend gepflegt und nicht nach der Anforderungsphase eingefroren.",
   "Richtig: Neben Endnutzern haben auch Betrieb, Wartung, Auftraggeber und gegebenenfalls Behörden berechtigte Interessen am System. Gerade diese Gruppen bringen oft wichtige Qualitätsanforderungen und Randbedingungen ein.",
   "Falsch: Zielkonflikte zwischen Stakeholdern macht die Architektur transparent und klärt sie gemeinsam mit den Betroffenen. Eine Entscheidung allein nach technischer Machbarkeit würde berechtigte fachliche oder wirtschaftliche Interessen übergehen."
  ],
  "explanation": "Stakeholder = alle mit berechtigtem Interesse, nicht nur Entscheider oder Endnutzer. Konflikte macht man transparent und klärt sie gemeinsam; die Stakeholder-Liste wird über das Projekt hinweg gepflegt."
 },
 {
  "id": "c1q12",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R1",
  "type": "multi",
  "q": "Welche Eigenschaften kennzeichnen einen gut geschnittenen Baustein?",
  "options": [
   "Er ist möglichst feingranular geschnitten, da kleine Bausteine automatisch eine hohe Kohäsion haben.",
   "Lose Kopplung – Abhängigkeiten laufen über wenige, klar definierte Schnittstellen.",
   "Er stellt seine internen Daten über öffentliche Getter und Setter für alle Felder bereit, damit Nachbarbausteine flexibel darauf zugreifen können.",
   "Hohe Kohäsion – zusammengehörige Aufgaben sind gebündelt.",
   "Er umfasst alle Aufgaben, die ein bestimmtes Team bearbeitet, unabhängig von ihrer fachlichen Zusammengehörigkeit."
  ],
  "correct": [
   1,
   3
  ],
  "optExpl": [
   "Falsch: Kleinheit erzeugt keine Kohäsion. Zu feine Schnitte reißen fachlich Zusammengehöriges auseinander, sodass die vielen kleinen Bausteine stark miteinander kommunizieren müssen – die Kopplung steigt.",
   "Richtig: Lose Kopplung bedeutet, dass Abhängigkeiten über wenige, klar definierte Schnittstellen laufen. Dann wirken sich Änderungen an einem Baustein kaum auf andere aus.",
   "Falsch: Öffentliche Getter und Setter für alle Felder legen die Interna offen und brechen die Kapselung. Nachbarbausteine hängen dann von der internen Datenstruktur ab, wodurch die Kopplung steigt.",
   "Richtig: Hohe Kohäsion heißt, dass fachlich zusammengehörige Aufgaben in einem Baustein gebündelt sind. Ein solcher Baustein hat eine klare Verantwortung und Änderungen bleiben meist lokal.",
   "Falsch: Maßgeblich für einen guten Schnitt ist die fachliche Zusammengehörigkeit, nicht die Teamzuordnung. Ein reiner Team-Schnitt kann unzusammenhängende Aufgaben bündeln und damit die Kohäsion senken."
  ],
  "explanation": "Gut geschnittene Bausteine haben hohe Kohäsion und lose Kopplung über klare Schnittstellen. Offengelegte Interna, beliebig feine Schnitte oder ein Schnitt nur nach Teams ohne fachlichen Zusammenhang verschlechtern beides."
 },
 {
  "id": "c1q13",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zur Schnittstelle (Interface) eines Bausteins treffen zu?",
  "options": [
   "Ein Baustein kann mehrere Schnittstellen anbieten, etwa je nach Nutzergruppe (Rollen-Schnittstellen).",
   "Sie definiert den nach außen sichtbaren Vertrag: angebotene und/oder benötigte Operationen samt Zusicherungen.",
   "Ändert sich die interne Implementierung, muss sich zwangsläufig auch die Schnittstelle ändern.",
   "Zu einer vollständigen Schnittstellenbeschreibung gehört auch die konkrete interne Datenstruktur, mit der der Baustein arbeitet.",
   "Eine Schnittstelle umfasst nur die Signaturen; fachliche Vor- und Nachbedingungen (Kontrakt) sind kein Bestandteil."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Richtig: Ein Baustein kann mehrere Schnittstellen anbieten, etwa getrennt nach Nutzergruppen oder Rollen. So sieht jeder Nutzer nur den Teil, den er wirklich braucht (vgl. Interface Segregation).",
   "Richtig: Die Schnittstelle ist der nach außen sichtbare Vertrag eines Bausteins. Sie legt angebotene und/oder benötigte Operationen samt Zusicherungen fest, auf die sich Nutzer verlassen können.",
   "Falsch: Gerade das soll eine Schnittstelle verhindern – sie bleibt stabil, während sich die Implementierung dahinter ändern darf. Das ist der Kern von Kapselung und Information Hiding.",
   "Falsch: Die interne Datenstruktur ist ein Internum des Bausteins und gehört nicht zum Vertrag. Würde sie Teil der Schnittstelle, wären Nutzer an die Implementierung gekoppelt.",
   "Falsch: Signaturen allein reichen nicht, denn sie sagen nichts über die Bedeutung der Operationen aus. Zum Kontrakt gehören auch Semantik sowie Vor- und Nachbedingungen."
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
   "Sie ergibt sich vollständig aus der Summe der öffentlich angebotenen Schnittstellenoperationen.",
   "Sie legt fest, mit welcher Technologie oder Bibliothek der Baustein umgesetzt wird (das WIE).",
   "Sie beschreibt die klar umrissene Aufgabe, für die der Baustein zuständig ist (das WAS).",
   "Überlappende Verantwortlichkeiten zweier Bausteine erhöhen die Ausfallsicherheit.",
   "Idealerweise ist sie kohäsiv und klar von anderen Bausteinen abgegrenzt."
  ],
  "correct": [
   2,
   4
  ],
  "optExpl": [
   "Falsch: Die Schnittstellenoperationen beschreiben, WIE der Baustein genutzt wird, nicht wofür er zuständig ist. Die Verantwortlichkeit ist die übergeordnete Aufgabe, aus der sich die Operationen erst ableiten.",
   "Falsch: Die Wahl von Technologie oder Bibliothek ist das WIE der Umsetzung und damit eine Implementierungsentscheidung. Die Verantwortlichkeit beschreibt dagegen das WAS, also die Aufgabe des Bausteins.",
   "Richtig: Die Verantwortlichkeit beschreibt die klar umrissene Aufgabe, für die der Baustein zuständig ist – das WAS. Eine präzise formulierte Verantwortlichkeit erleichtert es, Funktionalität eindeutig zuzuordnen.",
   "Falsch: Überlappende Verantwortlichkeiten führen zu doppelter Logik und unklaren Zuständigkeiten, was Wartung und Konsistenz erschwert. Ausfallsicherheit erreicht man durch bewusste Redundanz in der Verteilung, nicht durch fachliche Überschneidung.",
   "Richtig: Eine gute Verantwortlichkeit ist kohäsiv, bündelt also Zusammengehöriges, und ist klar von anderen Bausteinen abgegrenzt. So bleiben Änderungen lokal und Zuständigkeiten eindeutig."
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
   "Solange alle automatisierten Tests grün sind, ist die Abweichung unkritisch, da die Funktionalität erhalten bleibt.",
   "Reviews oder toolgestützte Abhängigkeitsprüfungen können solche Abweichungen aufdecken.",
   "Man passt grundsätzlich die Dokumentation an den Code an, da der Code die tatsächliche Architektur darstellt.",
   "Es droht Architekturerosion – Soll und Ist driften auseinander."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Qualitäten wie Wartbarkeit sind in der geplanten Struktur angelegt, wirken aber nur, wenn der Code ihr tatsächlich folgt. Umgeht der Code etwa die Schichtung, gehen die erhofften Vorteile verloren.",
   "Falsch: Grüne Tests sichern die Funktionalität, sagen aber wenig über Qualitäten wie Wartbarkeit oder Änderbarkeit aus. Gerade diese leiden unter Erosion, auch wenn das System fachlich weiterhin korrekt arbeitet.",
   "Richtig: Code-Reviews und toolgestützte Abhängigkeitsanalysen machen Abweichungen zwischen Soll- und Ist-Struktur sichtbar. Automatisierte Prüfungen, etwa in der Build-Pipeline, erkennen unerlaubte Abhängigkeiten früh.",
   "Falsch: Pauschal die Doku an den Code anzupassen würde jede Erosion nachträglich legitimieren. Man entscheidet je Abweichung: unbeabsichtigte Abweichungen führt man zurück, bewusste Änderungen zieht man in der Dokumentation nach.",
   "Richtig: Wenn Soll- und Ist-Architektur schleichend auseinanderdriften, spricht man von Architekturerosion. Sie bleibt oft lange unbemerkt und macht das System nach und nach schwerer änderbar."
  ],
  "explanation": "Weicht der Code von der Architektur ab, droht Erosion, und die geplanten Qualitäten gehen verloren – auch wenn die Tests grün sind. Abweichungen deckt man mit Reviews/Abhängigkeitsprüfungen auf und entscheidet je Fall, ob man den Code zurückführt oder die Doku bewusst anpasst."
 },
 {
  "id": "c1q16",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R2",
  "type": "multi",
  "q": "Wie verhält sich Softwarearchitektur zu den verschiedenen Abstraktionsebenen eines Systems?",
  "options": [
   "Die Ebenen sind strikt getrennt: Entscheidungen einer Ebene haben keine Auswirkungen auf tiefere Ebenen.",
   "Architekturrelevant ist nur die oberste Systemebene; jede feinere Zerlegung zählt ausschließlich zum Detailentwurf.",
   "Auf jeder Ebene lässt sich ein Baustein wieder als Blackbox oder Whitebox betrachten.",
   "Sie beschreibt Strukturen auf mehreren, ineinander geschachtelten Ebenen (System, Subsysteme, Bausteine); Prinzipien wie Kohäsion und Kopplung greifen dabei rekursiv.",
   "Die Abstraktionsebenen entsprechen den Architektursichten: Kontext, Bausteine, Laufzeit und Verteilung."
  ],
  "correct": [
   2,
   3
  ],
  "optExpl": [
   "Falsch: Die Ebenen hängen zusammen – Entscheidungen auf höheren Ebenen setzen Vorgaben und Randbedingungen für tiefere Ebenen. Wer etwa einen Architekturstil festlegt, bestimmt damit auch, wie Bausteine darunter geschnitten werden.",
   "Falsch: Auch tiefere Zerlegungsebenen können tragende, teuer änderbare Entscheidungen enthalten, etwa zentrale Schnittstellen eines Subsystems. Ob etwas Architektur ist, hängt von der Tragweite ab, nicht allein von der Ebene.",
   "Richtig: Das Blackbox/Whitebox-Prinzip ist auf jeder Ebene anwendbar. Ein Baustein, der auf einer Ebene als Whitebox geöffnet wird, enthält Bausteine, die selbst wieder als Blackbox betrachtet und später verfeinert werden können.",
   "Richtig: Architektur beschreibt Strukturen über mehrere geschachtelte Ebenen hinweg, vom System über Subsysteme bis zu Bausteinen. Prinzipien wie hohe Kohäsion und lose Kopplung gelten dabei rekursiv auf jeder Ebene.",
   "Falsch: Hier werden Abstraktionsebenen mit Sichten verwechselt. Sichten zeigen verschiedene Aspekte des Systems, Abstraktionsebenen beschreiben dagegen die Verfeinerungstiefe, etwa die Ebenen innerhalb der Bausteinsicht."
  ],
  "explanation": "Architektur beschreibt geschachtelte Ebenen; Prinzipien greifen rekursiv, und jeder Baustein kann als Black- oder Whitebox betrachtet werden. Ebenen sind nicht dasselbe wie Sichten und auch nicht strikt voneinander getrennt."
 },
 {
  "id": "c1q17",
  "chapter": 1,
  "lz": "LZ 01-02",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen über den Nutzen von Softwarearchitektur treffen zu?",
  "options": [
   "Sie senkt den Aufwand jeder künftigen Änderung, unabhängig davon, ob diese bei der Strukturierung vorhergesehen wurde.",
   "Sie macht Komplexität beherrschbar und unterstützt arbeitsteiliges Arbeiten im Team.",
   "Sie schafft eine gemeinsame Grundlage für die Kommunikation zwischen den Stakeholdern.",
   "Sie unterstützt das gezielte Erreichen von Qualitätszielen, indem sie tragende Entscheidungen bewusst macht.",
   "Ihr Nutzen zeigt sich vor allem bis zur Erstauslieferung; in der Wartungsphase tritt sie in den Hintergrund."
  ],
  "correct": [
   1,
   2,
   3
  ],
  "optExpl": [
   "Falsch: Eine Architektur erleichtert vor allem die Änderungen, auf die sie bewusst ausgelegt wurde. Unvorhergesehene Änderungen können trotzdem tragende Strukturen treffen und entsprechend teuer werden.",
   "Richtig: Eine klare Struktur zerlegt das System in überschaubare Teile und macht so Komplexität beherrschbar. Gleichzeitig ermöglicht sie, dass verschiedene Teams parallel an unterschiedlichen Bausteinen arbeiten.",
   "Richtig: Architektur liefert eine gemeinsame Sprache und ein gemeinsames Bild des Systems. Das erleichtert die Kommunikation zwischen Fachbereich, Entwicklung, Betrieb und weiteren Stakeholdern.",
   "Richtig: Indem Architektur tragende Entscheidungen bewusst trifft und begründet, werden Qualitätsziele gezielt adressiert statt dem Zufall überlassen. So lässt sich auch nachvollziehen, welche Entscheidung welches Ziel unterstützt.",
   "Falsch: Der Nutzen einer Architektur zeigt sich gerade über die Lebensdauer des Systems, also bei Wartung, Erweiterung und Betrieb. Diese Phase ist meist viel länger als die Entwicklung bis zur Erstauslieferung."
  ],
  "explanation": "Architektur macht Komplexität beherrschbar, schafft eine Kommunikationsgrundlage und macht Qualitätsziele erreichbar. Ihr Nutzen wächst über die Lebensdauer; sie macht aber nicht jede unvorhergesehene Änderung billig."
 },
 {
  "id": "c1q18",
  "chapter": 1,
  "lz": "LZ 01-02",
  "r": "R2",
  "type": "single",
  "q": "Was kennzeichnet ein iteratives (evolutionäres) Vorgehen bei der Architekturarbeit?",
  "options": [
   "Die Architektur wird zu Beginn vollständig festgelegt (Big Design Up Front) und danach nicht mehr angetastet.",
   "Die Architektur ergibt sich rein emergent aus dem Code, ohne bewusste übergreifende Entscheidungen.",
   "Tragende Entscheidungen werden früh getroffen, aber über Iterationen anhand neuer Erkenntnisse überprüft und verfeinert.",
   "Iteratives Vorgehen bedeutet, tragende Entscheidungen möglichst lange aufzuschieben, bis maximale Sicherheit besteht."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Das beschreibt Big Design Up Front, also gerade das Gegenteil von iterativem Vorgehen. Eine einmal festgeschriebene, nicht mehr angepasste Architektur kann neue Erkenntnisse nicht aufnehmen.",
   "Falsch: Rein emergente Architektur ohne bewusste übergreifende Entscheidungen führt zu einer ungeplanten, oft inkonsistenten Struktur. Iterativ heißt nicht planlos – tragende Entscheidungen werden weiterhin bewusst getroffen.",
   "Richtig: Beim iterativen Vorgehen werden tragende Entscheidungen früh getroffen, damit das Team eine Grundlage hat. Anschließend werden sie in jeder Iteration anhand neuer Erkenntnisse überprüft und bei Bedarf verfeinert.",
   "Falsch: Maximale Sicherheit stellt sich nie ein, und ohne tragende Entscheidungen fehlt dem Team die Grundlage für die Umsetzung. Iterativ bedeutet, früh zu entscheiden und dann zu überprüfen, nicht Entscheidungen beliebig aufzuschieben."
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
   "Detailentwurf ist qualitativ weniger anspruchsvoll und für die Zielerreichung des Systems unerheblich.",
   "Architektur trifft die übergreifenden, weitreichenden Strukturentscheidungen; der Detailentwurf konkretisiert innerhalb dieser Vorgaben.",
   "Der Unterschied liegt allein im Zeitpunkt: Architektur entsteht in einer frühen Phase, der Detailentwurf zwingend erst danach.",
   "Die Grenze ist formal und projektunabhängig festgelegt: Unterhalb einer bestimmten Bausteingröße beginnt zwingend der Detailentwurf."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Auch der Detailentwurf ist anspruchsvoll und trägt wesentlich dazu bei, ob das System seine Ziele erreicht. Eine gute Architektur nützt wenig, wenn die Bausteine darin schlecht entworfen sind.",
   "Richtig: Architektur trifft die übergreifenden, weitreichenden Strukturentscheidungen, die teuer zu ändern sind. Der Detailentwurf konkretisiert innerhalb dieser Vorgaben, etwa die interne Gestaltung einzelner Bausteine.",
   "Falsch: Architektur und Detailentwurf sind nicht rein zeitlich getrennt, sondern verzahnen sich. Erkenntnisse aus dem Detailentwurf können Architekturentscheidungen beeinflussen, und Architekturarbeit läuft über das ganze Projekt.",
   "Falsch: Die Grenze zwischen Architektur und Detailentwurf ist fließend und hängt vom Kontext ab. Maßgeblich ist die Tragweite einer Entscheidung, nicht eine formale Bausteingröße."
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
   "Kommunikation ist vor allem beim Präsentieren der fertigen Architektur wichtig; während des Entwurfs zählt primär die technische Arbeit.",
   "Kommunikation richtet sich vor allem an das Entwicklungsteam; fachliche Stakeholder werden über das Produktmanagement erreicht.",
   "Sie sind zentral, um zwischen Stakeholdern zu vermitteln und Entscheidungen adressatengerecht zu begründen.",
   "Mündliche Abstimmung ist der schriftlichen Begründung vorzuziehen, weil sie schneller ist und Missverständnisse direkt klärt.",
   "Sie sind über den gesamten Entwurf hinweg wichtig – nicht erst beim Präsentieren der fertigen Architektur."
  ],
  "correct": [
   2,
   4
  ],
  "optExpl": [
   "Falsch: Kommunikation ist gerade während des Entwurfs entscheidend, um Anliegen der Stakeholder zu klären und früh Feedback einzuholen. Wer erst die fertige Architektur präsentiert, entdeckt Missverständnisse zu spät.",
   "Falsch: Architekt:innen kommunizieren direkt mit allen relevanten Stakeholdern, auch mit Fachbereich, Betrieb oder Management. Nur über das Produktmanagement vermittelt gingen wichtige Qualitätsanforderungen leicht verloren.",
   "Richtig: Architekt:innen vermitteln zwischen Stakeholdern mit unterschiedlichen Interessen und begründen Entscheidungen adressatengerecht. Ein Management braucht andere Argumente als ein Entwicklungsteam.",
   "Falsch: Mündliche Abstimmung ist hilfreich, aber flüchtig und später nicht nachvollziehbar. Tragende Entscheidungen brauchen eine dauerhafte schriftliche Begründung, etwa in einem ADR.",
   "Richtig: Kommunikation begleitet den gesamten Entwurf – vom Klären der Anforderungen über das Abstimmen von Zielkonflikten bis zur Begleitung der Umsetzung. Sie ist nicht nur ein Schritt am Ende."
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
   "Den Gesamtaufwand des Projekts verbindlich und abschließend zu schätzen.",
   "Eine bereits produktionsreife erste Version der wichtigsten Features an die Nutzer auszuliefern.",
   "Die fachliche Vollständigkeit des Systems end-to-end nachzuweisen.",
   "Zentrale technische Risiken und die Machbarkeit tragender Entscheidungen früh zu überprüfen."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Ein Durchstich kann Schätzungen verbessern, weil er technische Unsicherheiten reduziert. Eine verbindliche, abschließende Aufwandsschätzung für das gesamte Projekt liefert er aber nicht.",
   "Falsch: Das beschreibt eher ein produktives Inkrement oder MVP. Ein Durchstich ist bewusst nicht produktionsreif, sondern dient dem schnellen Lernen über technische Risiken.",
   "Falsch: Ein Durchstich implementiert nur einen schmalen Pfad durch die Architektur, nicht die vollständige Fachlichkeit. Er soll technische Machbarkeit zeigen, nicht fachliche Vollständigkeit.",
   "Richtig: Ein Durchstich bzw. Proof of Concept prüft früh, ob riskante Annahmen und tragende Entscheidungen in der Praxis funktionieren. So erkennt man Probleme, solange eine Kurskorrektur noch günstig ist."
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
   "Sie ist so gestaltet, dass alle relevanten Qualitätsmerkmale gleichzeitig bestmöglich erfüllt werden.",
   "Sie erfüllt die geforderten Qualitätsziele unter den gegebenen Randbedingungen.",
   "Sie ist für möglichst viele absehbare künftige Anforderungen bereits vorbereitet.",
   "Sie ist so einfach und verständlich wie möglich – aber nicht einfacher, als die Aufgabe es zulässt.",
   "Sie folgt einem etablierten Architekturmuster, da bewährte Muster die Qualität einer Architektur sicherstellen."
  ],
  "correct": [
   1,
   3
  ],
  "optExpl": [
   "Falsch: Qualitätsmerkmale konkurrieren häufig miteinander, etwa Sicherheit und Benutzbarkeit oder Performanz und Änderbarkeit. Eine gute Architektur wägt diese Zielkonflikte bewusst ab, statt alle gleichzeitig zu maximieren.",
   "Richtig: Ob eine Architektur gut ist, bemisst sich an ihren Zielen und Randbedingungen. Sie ist dann gut, wenn sie die geforderten Qualitätsziele im gegebenen Rahmen aus Budget, Technik und Organisation erfüllt.",
   "Falsch: Vorratshaltung für viele mögliche Zukunftsanforderungen führt leicht zu Überkonstruktion (YAGNI). Das erhöht Komplexität und Kosten, ohne dass klar ist, ob die Anforderungen je eintreten.",
   "Richtig: Einfachheit und Verständlichkeit sind wichtige Qualitätsmerkmale, weil sie Wartung und Kommunikation erleichtern. Die Architektur sollte aber nicht so stark vereinfacht werden, dass sie die Aufgabe nicht mehr angemessen löst.",
   "Falsch: Muster sind bewährte Lösungsideen, helfen aber nur, wenn sie zu Problem und Kontext passen. Ein unpassend eingesetztes Muster verschlechtert die Architektur sogar, statt ihre Qualität sicherzustellen."
  ],
  "explanation": "Eine gute Architektur erfüllt die Qualitätsziele unter den Randbedingungen und ist so einfach wie möglich. Muster garantieren keine Qualität, Vorratshaltung ist Überkonstruktion, und Qualitätsmerkmale müssen gegeneinander abgewogen werden."
 },
 {
  "id": "c1q23",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R2",
  "type": "single",
  "q": "Wie grenzt man die Begriffe „Baustein“ und „Komponente“ am besten ab?",
  "options": [
   "Eine Komponente ist definitionsgemäß größer als ein Baustein und fasst mehrere Bausteine zusammen.",
   "Ein Baustein ist stets eine Entwurfszeiteinheit, eine Komponente stets eine Laufzeiteinheit.",
   "Die Begriffe sind vollständig synonym und lediglich unterschiedliche Übersetzungen desselben Konzepts.",
   "„Baustein“ ist der Oberbegriff; eine Komponente ist ein spezieller Baustein mit vertraglich definierten Schnittstellen."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Die Abgrenzung ist keine Frage der Größe. Ein Baustein kann beliebig groß oder klein sein, und eine Komponente ist eine spezielle Art von Baustein, nicht zwingend eine größere Einheit.",
   "Falsch: Baustein und Komponente unterscheiden sich nicht nach Entwurfs- und Laufzeit. Beide sind in erster Linie Begriffe der statischen Struktur, Laufzeitaspekte beschreibt die Laufzeitsicht.",
   "Falsch: Die Begriffe sind nicht exakt synonym. „Baustein“ ist allgemeiner, „Komponente“ bezeichnet eine spezifischere Ausprägung mit definierten Schnittstellen.",
   "Richtig: „Baustein“ ist der Oberbegriff für alle Strukturelemente einer Architektur, etwa Module, Pakete oder Klassen. Eine Komponente ist ein spezieller Baustein, der seine Realisierung kapselt und über vertraglich definierte Schnittstellen genutzt wird."
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
   "Weil Definitionen je nach Programmiersprache unterschiedlich ausfallen müssen.",
   "Weil zahlreiche etablierte Definitionen existieren und man deren gemeinsame Kernaspekte (Bausteine, Beziehungen, Entscheidungen) nutzt.",
   "Weil die Definition dem jeweiligen Zertifizierungslevel überlassen wird.",
   "Weil eine verbindliche Definition den Lösungsraum einengen und Innovation behindern würde."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Der Architekturbegriff ist unabhängig von der Programmiersprache. Bausteine, Beziehungen und tragende Entscheidungen gibt es in jedem System, egal in welcher Sprache es umgesetzt ist.",
   "Richtig: Es existieren zahlreiche anerkannte Definitionen, etwa von ISO/IEC/IEEE 42010 oder aus der Fachliteratur. Der Lehrplan nutzt deren gemeinsame Kernaspekte wie Bausteine, Beziehungen und tragende Entscheidungen, statt eine einzelne Definition festzuschreiben.",
   "Falsch: Die Definition hängt nicht vom Zertifizierungslevel ab. Foundation und Advanced Level bauen auf demselben Grundverständnis von Architektur auf.",
   "Falsch: Das klingt plausibel, ist aber nicht der Grund. Der Lehrplan verzichtet auf eine einzige Definition, weil es bereits viele etablierte gibt, deren gemeinsamer Kern ausreicht."
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
   "Auf die Architektur einzelner Klassen und Methoden im Detailentwurf.",
   "Auf die Auswahl und Konfiguration konkreter Cloud- und Netzinfrastruktur.",
   "Auf die Architektur eines einzelnen Softwaresystems.",
   "Auf die unternehmensweite Enterprise-Architektur, die alle Systeme und Geschäftsprozesse integriert."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Klassen und Methoden gehören zum Detailentwurf und liegen unterhalb des Foundation-Fokus. Sie werden nur gestreift, etwa bei Entwurfsprinzipien, sind aber nicht die Zielebene.",
   "Falsch: Die konkrete Auswahl und Konfiguration von Cloud- und Netzinfrastruktur ist Aufgabe von Betrieb und Infrastrukturplanung. Foundation behandelt Verteilung nur auf Ebene der Verteilungssicht, nicht im Detail.",
   "Richtig: CPSA-Foundation zielt auf die Architektur eines einzelnen Softwaresystems. Hier werden Bausteine, Schnittstellen, Sichten und tragende Entscheidungen für ein System betrachtet.",
   "Falsch: Enterprise-Architektur betrachtet die gesamte Systemlandschaft samt Geschäftsprozessen und liegt damit oberhalb der Foundation-Ebene. Sie ist kein Schwerpunkt des CPSA-F-Lehrplans."
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
   "Eine Struktur besteht aus den Bausteinen; ihre Beziehungen werden erst in der Laufzeitsicht beschrieben.",
   "Strukturen entstehen erst durch bewussten Architekturentwurf; ohne ihn hat ein System keine Struktur im Sinne der Architektur.",
   "Zur Architektur gehören sowohl statische Strukturen als auch das Verhalten zur Laufzeit.",
   "Ein System hat typischerweise mehrere Strukturen, die durch unterschiedliche Sichten beleuchtet werden.",
   "Jedes System besitzt mindestens eine Struktur – notfalls eine ungeplante, gewachsene."
  ],
  "correct": [
   2,
   3,
   4
  ],
  "optExpl": [
   "Falsch: Eine Struktur besteht immer aus Bausteinen UND ihren Beziehungen, auch in der statischen Bausteinsicht. Ohne Beziehungen wäre es nur eine Liste von Teilen, keine Struktur.",
   "Falsch: Jedes System hat eine Struktur, ob sie bewusst entworfen wurde oder nicht. Ohne bewussten Entwurf entsteht sie nur ungesteuert und ist dann oft schwer verständlich und änderbar.",
   "Richtig: Architektur umfasst sowohl die statische Zerlegung in Bausteine als auch deren Verhalten und Zusammenspiel zur Laufzeit. Beides wird in eigenen Sichten beschrieben, etwa der Baustein- und der Laufzeitsicht.",
   "Richtig: Ein System hat typischerweise mehrere Strukturen, etwa die Code-Struktur, die Laufzeitstruktur und die Verteilungsstruktur. Jede Sicht beleuchtet eine davon, keine allein zeigt das ganze System.",
   "Richtig: Auch ein System, das ohne bewussten Entwurf gewachsen ist, hat eine Struktur. Sie ist dann eben ungeplant entstanden – oft mit hoher Kopplung und unklaren Verantwortlichkeiten."
  ],
  "explanation": "Jedes System hat Strukturen – geplant oder gewachsen –, statisch wie dynamisch, beleuchtet über mehrere Sichten. Beziehungen zwischen Bausteinen gehören immer zur Struktur."
 },
 {
  "id": "c1q27",
  "chapter": 1,
  "lz": "LZ 01-07",
  "r": "R2",
  "type": "single",
  "q": "Welche Rolle spielen Daten und Datenmodelle für die Softwarearchitektur?",
  "options": [
   "Das Datenmodell wird sinnvollerweise erst festgelegt, nachdem die Architektur vollständig steht.",
   "Das Datenmodell ist beliebig austauschbar, weil moderne ORMs es vollständig von der Architektur entkoppeln.",
   "Das Datenmodell ist eine tragende Architekturentscheidung – meist langlebig und nachträglich teuer zu ändern.",
   "Das Datenmodell ist ein reines Implementierungsdetail der Persistenzschicht ohne Einfluss auf den Bausteinschnitt."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Datenmodell und Architektur beeinflussen sich wechselseitig und entstehen nicht streng nacheinander. Das Datenmodell prägt etwa den Bausteinschnitt und muss daher früh mitgedacht werden.",
   "Falsch: ORMs kapseln den technischen Datenbankzugriff, entkoppeln aber nicht das fachliche Datenmodell von der Architektur. Strukturen, Beziehungen und Datenhoheit bleiben tragend, egal welches Werkzeug den Zugriff übernimmt.",
   "Richtig: Das Datenmodell ist eine tragende Entscheidung, die meist deutlich langlebiger ist als der Code darüber. Spätere Änderungen erfordern oft Datenmigrationen und Anpassungen in vielen Bausteinen und sind entsprechend teuer.",
   "Falsch: Das Datenmodell ist kein bloßes Detail der Persistenzschicht. Es prägt den Bausteinschnitt stark, etwa über die Frage, welcher Baustein welche Daten besitzt und ändern darf."
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
   "Nur logisch und physisch; eine konzeptionelle Ebene gibt es beim Datenmodell nicht.",
   "Konzeptionell (fachlich), logisch (technologieneutral strukturiert) und physisch (konkrete Umsetzung).",
   "Auf Kontext-, Baustein- und Verteilungsebene – analog zu den Architektursichten.",
   "Konzeptionell, logisch und normalisiert – wobei „physisch“ nur ein anderes Wort für „logisch“ ist."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Die konzeptionelle Ebene existiert sehr wohl und ist sogar der Ausgangspunkt. Sie beschreibt die fachlichen Begriffe und Zusammenhänge, bevor über technische Strukturen entschieden wird.",
   "Richtig: Datenmodelle werden konzeptionell (fachliche Begriffe und Beziehungen), logisch (technologieneutral strukturiert, z. B. Entitäten und Attribute) und physisch (konkrete Umsetzung in einer Datenbank) beschrieben. Jede Ebene konkretisiert die vorherige.",
   "Falsch: Kontext-, Baustein- und Verteilungssicht sind Architektursichten auf das ganze System. Sie sind keine Abstraktionsebenen eines Datenmodells.",
   "Falsch: Normalisierung ist eine Technik auf der logischen Ebene, um Redundanzen zu vermeiden. „Physisch“ ist kein Synonym für „logisch“, sondern beschreibt die konkrete technische Umsetzung, etwa Tabellen, Indizes und Speicherformate."
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
   "Ein von vielen Bausteinen direkt gemeinsam genutztes Datenmodell kann die Kopplung stark erhöhen.",
   "Bei Microservices genügt es, wenn jeder Service ein eigenes Schema in derselben Datenbank hat, auch wenn alle Services lesend auf alle Schemata zugreifen.",
   "Datenhoheit (wer welche Daten besitzt und ändern darf) beeinflusst den fachlichen Schnitt der Bausteine.",
   "Unterschiedliche Bausteine können für dasselbe fachliche Objekt (z. B. Kunde) eigene, auf ihre Aufgabe zugeschnittene Modelle haben.",
   "Ein gemeinsames zentrales Datenmodell senkt die Kopplung, da alle Bausteine dieselben Datentypen verwenden und keine Übersetzung nötig ist."
  ],
  "correct": [
   0,
   2,
   3
  ],
  "optExpl": [
   "Richtig: Nutzen viele Bausteine direkt dasselbe Datenmodell, wirkt sich jede Änderung daran auf alle Nutzer aus. Das Datenmodell wird so zu einer versteckten, sehr starken Kopplung.",
   "Falsch: Getrennte Schemata helfen nur, wenn sie auch respektiert werden. Greifen Services lesend direkt auf fremde Schemata zu, umgehen sie die Schnittstellen und sind über die Datenstruktur eng gekoppelt.",
   "Richtig: Die Frage, wer welche Daten besitzt und ändern darf, prägt die Bausteingrenzen maßgeblich. Ein Baustein mit klarer Datenhoheit kann seine Daten kapseln und nur über Schnittstellen bereitstellen.",
   "Richtig: Verschiedene Bausteine dürfen dasselbe fachliche Objekt unterschiedlich modellieren, zugeschnitten auf ihre Aufgabe – etwa im Sinne von Bounded Contexts. Das hält die Modelle schlank und reduziert die Kopplung.",
   "Falsch: Ein gemeinsames zentrales Modell spart zwar Übersetzungen, koppelt aber jeden Baustein an jede Modelländerung. Damit steigt die Kopplung, statt zu sinken."
  ],
  "explanation": "Datenhoheit prägt den Bausteinschnitt; direkt geteilte Datenmodelle oder Schemazugriffe erhöhen die Kopplung, auch wenn sie bequem wirken. Aufgabenbezogene eigene Modelle je Baustein sind legitim und entkoppeln."
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
   "Funktionale Anforderungen beschreiben, WAS das System leistet; Qualitätsanforderungen, WIE GUT es das tut.",
   "Eine Vorgabe mit konkretem Zahlenwert (z. B. „unter 2 s“) ist eine Randbedingung, weil sie nicht verhandelbar ist.",
   "Eine Randbedingung ist eine besonders verbindliche funktionale Anforderung und wird deshalb höher priorisiert.",
   "Qualitätsanforderungen und Randbedingungen können sich auf dieselbe Eigenschaft beziehen: „schnell reagieren“ ist eine Qualitätsanforderung, „auf vorhandener 5-Jahre-alter Hardware laufen“ eine Randbedingung."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Richtig: Eine Randbedingung ist eine Vorgabe, die die möglichen Lösungen begrenzt – etwa eine vorgeschriebene Plattform oder ein festes Budget. Sie beschreibt weder, was das System tut, noch wie gut es das tut, sondern nur, in welchem Rahmen entschieden werden darf.",
   "Richtig: Das ist die Grundunterscheidung: Funktionale Anforderungen benennen die Leistungen des Systems (z. B. „Bestellung stornieren“), Qualitätsanforderungen deren Güte (z. B. „in unter 2 s“). Beide zusammen beschreiben, was gebaut werden soll.",
   "Falsch: Ein Zahlenwert macht eine Anforderung messbar und damit überprüfbar, ändert aber nicht ihre Art. „Unter 2 s“ beschreibt, wie gut das System reagiert, und bleibt eine Qualitätsanforderung – Verbindlichkeit allein macht noch keine Randbedingung.",
   "Falsch: Hier werden zwei Kategorien vermischt. Randbedingungen sind keine Funktionen, sondern Einschränkungen des Lösungsraums; sie werden nicht „höher priorisiert“, sondern sind schlicht einzuhalten.",
   "Richtig: Dieselbe Eigenschaft – hier die Performanz – kann als Ziel und als Einschränkung auftauchen. „Schnell reagieren“ ist ein Qualitätsziel, die Pflicht zur vorhandenen Alt-Hardware begrenzt dagegen die möglichen Lösungen und ist damit eine Randbedingung."
  ],
  "explanation": "Funktional = WAS, Qualität = WIE GUT, Randbedingung = Einschränkung des Lösungsraums. Ein konkreter Zahlenwert macht eine Qualitätsanforderung messbar, nicht zur Randbedingung."
 },
 {
  "id": "c2q2",
  "chapter": 2,
  "lz": "LZ 02-03",
  "r": "R1",
  "type": "multi",
  "q": "Ein Team betrachtet Qualitätsanforderungen zunächst als „nachgelagert“ und will sie erst nach der funktionalen Umsetzung angehen. Welche Aussagen treffen zu?",
  "options": [
   "Das Vorgehen ist vertretbar, wenn die Qualitätsanforderungen in einem späteren Release durch gezielte Optimierung einzelner Bausteine nachgezogen werden.",
   "Qualitätsanforderungen sind maßgebliche Architektur-Treiber; werden sie spät berücksichtigt, sind Strukturänderungen oft teuer oder kaum noch möglich.",
   "Bei agilem Vorgehen ist das unkritisch, da Qualitätsanforderungen ohnehin erst über Nutzerfeedback entstehen.",
   "Qualitätsanforderungen, die nicht explizit genannt werden, müssen später trotzdem erfüllt werden – etwa selbstverständliche Erwartungen an Sicherheit.",
   "Ob eine Qualitätsanforderung erfüllbar ist, hängt wesentlich davon ab, ob die Architektur sie ermöglicht – nicht nur davon, ob am Ende getestet wird."
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Falsch: Viele Qualitäten wie Skalierbarkeit oder Verfügbarkeit hängen an der Grundstruktur – an Verteilung, Schnitt und Kommunikation der Bausteine. Das lässt sich nicht durch lokale Optimierung einzelner Bausteine nachrüsten, sondern erfordert oft einen teuren Umbau.",
   "Richtig: Qualitätsanforderungen sind die stärksten Architekturtreiber, weil sie die grundlegenden Strukturentscheidungen bestimmen. Werden sie spät entdeckt, steht die Struktur bereits und muss mit hohem Aufwand umgebaut werden.",
   "Falsch: Auch im agilen Vorgehen müssen die wesentlichen Qualitätsanforderungen früh geklärt werden, weil sie die Architektur prägen. Nutzerfeedback schärft und ergänzt sie, ersetzt aber nicht die frühe Klärung.",
   "Richtig: Implizite Qualitätserwartungen gelten auch dann, wenn niemand sie aufschreibt – kein Kunde akzeptiert ein unsicheres System, nur weil Sicherheit nicht gefordert war. Deshalb sollten Architekt:innen sie früh explizit machen.",
   "Richtig: Testen stellt nur fest, ob eine Qualität erreicht wurde; ermöglichen muss sie die Architektur. Ein System, dessen Struktur keine Lastverteilung erlaubt, wird auch durch noch so viele Lasttests nicht skalierbar."
  ],
  "explanation": "Qualitätsanforderungen sind die stärksten Architekturtreiber und gehören früh geklärt – auch agil. Viele lassen sich nicht nachträglich durch lokale Optimierung nachrüsten, und implizite Erwartungen gelten auch unausgesprochen."
 },
 {
  "id": "c2q3",
  "chapter": 2,
  "lz": "LZ 02-02",
  "r": "R2",
  "type": "multi",
  "q": "Welche der folgenden Vorgaben sind Randbedingungen (Constraints)?",
  "options": [
   "Die Suche muss 95 % der Anfragen in unter einer Sekunde beantworten.",
   "Berichte müssen als PDF exportierbar sein.",
   "Das Projektbudget ist auf einen fixen Betrag gedeckelt.",
   "Aus rechtlichen Gründen müssen personenbezogene Daten in einem Rechenzentrum innerhalb der EU gespeichert werden.",
   "Es ist die im Unternehmen bereits lizenzierte relationale Datenbank zu verwenden."
  ],
  "correct": [
   2,
   3,
   4
  ],
  "optExpl": [
   "Falsch: Eine geforderte Antwortzeit beschreibt, wie gut das System reagieren soll – das ist eine Qualitätsanforderung (Performanz). Sie schränkt nicht die Lösungsmittel ein, sondern legt ein Ziel fest, das die Lösung erreichen muss.",
   "Falsch: Der PDF-Export beschreibt eine Leistung des Systems, also WAS es tut. Damit ist er eine funktionale Anforderung und keine Einschränkung des Lösungsraums.",
   "Richtig: Ein gedeckeltes Budget ist eine organisatorische Randbedingung. Es sagt nichts über Funktionen oder Qualitäten, begrenzt aber, welche Lösungen überhaupt finanzierbar sind.",
   "Richtig: Eine gesetzlich vorgeschriebene Speicherung in der EU ist eine rechtliche bzw. regulatorische Randbedingung. Sie schließt z. B. bestimmte Cloud-Regionen aus und engt so den Lösungsraum verbindlich ein.",
   "Richtig: Eine vorgeschriebene, bereits vorhandene Technologie ist eine technische Randbedingung. Die Architektur muss mit dieser Datenbank auskommen, auch wenn eine andere Lösung fachlich vielleicht besser passen würde."
  ],
  "explanation": "Regulatorische Speicherorts-Vorgaben, vorgeschriebene Technologien und ein fixes Budget sind Randbedingungen (rechtlich, technisch, organisatorisch). Eine geforderte Antwortzeit ist eine Qualitätsanforderung, der PDF-Export eine funktionale Anforderung."
 },
 {
  "id": "c2q4",
  "chapter": 2,
  "lz": "LZ 02-04",
  "r": "R1",
  "type": "multi",
  "q": "Ein Stakeholder fordert: „Das System soll schnell sein.“ Wodurch wird diese Anforderung überprüfbar?",
  "options": [
   "Durch die Angabe einer konkreten Messgröße mit Zielwert (z. B. Antwortzeit unter 2 s im 95. Perzentil).",
   "Durch ein Qualitätsszenario mit Auslöser, Umgebung/Kontext und einem messbaren Antwortmaß (z. B. „95 % der Suchen unter 1 s bei Volllast“).",
   "Indem man festlegt, dass das System schneller sein muss als das bisherige Altsystem.",
   "Indem man die Anforderung als Randbedingung formuliert, z. B. „Es ist eine In-Memory-Datenbank einzusetzen“.",
   "Indem man ein pauschales Antwortmaß von „unter 1 Sekunde“ festlegt, ohne Auslöser und Betriebszustand zu benennen."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Richtig: Erst eine Messgröße mit Zielwert macht aus dem vagen „schnell“ etwas Prüfbares. Das 95. Perzentil legt zudem fest, dass nicht jeder Ausreißer zählt, sondern das typische Verhalten der allermeisten Anfragen.",
   "Richtig: Ein Qualitätsszenario verbindet Auslöser, Umgebung und messbares Antwortmaß und macht damit eindeutig, wann und unter welchen Bedingungen der Wert gelten soll. So lässt sich „schnell“ gezielt testen und gegen die Architektur bewerten.",
   "Falsch: „Schneller als das Altsystem“ ist ein relativer Vergleich ohne konkreten Zielwert und ohne Messbedingungen. Schon eine Millisekunde Verbesserung würde die Anforderung formal erfüllen – ob das dem Stakeholder genügt, bleibt offen.",
   "Falsch: Eine Technologievorgabe beschreibt eine Lösung und nicht die Anforderung. Eine In-Memory-Datenbank garantiert keine bestimmte Antwortzeit und verschiebt die Frage nur, statt sie überprüfbar zu machen.",
   "Falsch: Ein Zahlenwert allein reicht nicht, wenn offen bleibt, wofür und unter welchen Bedingungen er gilt. Ob „unter 1 Sekunde“ für eine einfache Abfrage im Leerlauf oder für einen Report unter Volllast gemeint ist, macht einen großen Unterschied."
  ],
  "explanation": "Überprüfbar wird „schnell“ durch messbare Zielwerte, am besten eingebettet in ein Qualitätsszenario (Auslöser, Kontext, Antwortmaß). Technologievorgaben oder relative Vergleiche ohne Zielwert machen nichts prüfbar."
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
   "Sie formulieren fehlende Anforderungen selbst und nehmen sie verbindlich auf, wenn die Fachseite nicht rechtzeitig liefert.",
   "Die Verantwortung für die fachliche Priorisierung der Anforderungen liegt letztlich beim Auftraggeber bzw. den fachlichen Stakeholdern.",
   "Sie beschränken sich bei der Klärung auf Qualitätsanforderungen, da funktionale Anforderungen die Architektur kaum beeinflussen."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Richtig: Anforderungen sind selten vollständig und widerspruchsfrei. Architekt:innen erkennen aus technischer Sicht Lücken und Konflikte und helfen, sie gemeinsam mit den Stakeholdern zu schärfen.",
   "Richtig: Gerade Qualitätsanforderungen bleiben oft unausgesprochen, weil sie für Stakeholder selbstverständlich sind. Architekt:innen machen sie explizit, weil sie die Architektur maßgeblich prägen.",
   "Falsch: Architekt:innen dürfen Lücken nicht eigenmächtig mit verbindlichen Anforderungen füllen. Sie treffen stattdessen dokumentierte Annahmen und lassen sie von der Fachseite bestätigen, die die Anforderungen verantwortet.",
   "Richtig: Welche fachlichen Anforderungen wichtiger sind, entscheiden Auftraggeber und fachliche Stakeholder. Architekt:innen liefern dafür die Entscheidungsgrundlage, etwa Aufwand, Risiken und Trade-offs.",
   "Falsch: Auch funktionale Anforderungen beeinflussen die Architektur, etwa den fachlichen Schnitt der Bausteine. Architekt:innen klären deshalb beide Arten von Anforderungen mit, auch wenn Qualitäten oft die stärkeren Treiber sind."
  ],
  "explanation": "Architekt:innen hinterfragen und schärfen Anforderungen und machen implizite Qualitäten explizit; Priorisierung und verbindliche Festlegung bleiben bei der Fachseite. Fehlendes überbrückt man mit dokumentierten Annahmen, nicht mit selbst gesetzten Anforderungen."
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
   "Performanz (Performance Efficiency) ist ein Unteraspekt der Zuverlässigkeit.",
   "Skalierbarkeit (Scalability) ist ein eigenständiges Hauptmerkmal.",
   "Portabilität (Portability) ist in der 2023-Fassung weiterhin ein eigenständiges Hauptmerkmal."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Wartbarkeit (Maintainability) ist eines der Hauptmerkmale der ISO/IEC 25010:2023 – neben u. a. Performanz, Kompatibilität, Zuverlässigkeit, Sicherheit, Flexibilität und Safety. Untermerkmale wie Modularität oder Testbarkeit sind ihr zugeordnet.",
   "Falsch: Performanz (Performance Efficiency) ist selbst ein Hauptmerkmal und kein Teil der Zuverlässigkeit. Zuverlässigkeit beschreibt, ob das System korrekt und verfügbar arbeitet, Performanz dagegen Zeitverhalten und Ressourcenverbrauch.",
   "Falsch: Skalierbarkeit ist in der Praxis sehr wichtig, aber in der ISO/IEC 25010:2023 kein eigenständiges Hauptmerkmal. Sie ist dort ein Untermerkmal der Flexibilität – die Wichtigkeit einer Qualität sagt nichts über ihre Stellung im Modell.",
   "Falsch: In der 2023-Fassung wurde Portabilität in das breitere Hauptmerkmal Flexibilität überführt, das u. a. Anpassbarkeit, Skalierbarkeit und Installierbarkeit umfasst. Unter dem alten Namen gibt es sie als Hauptmerkmal nicht mehr."
  ],
  "explanation": "Wartbarkeit ist ein Hauptmerkmal der ISO/IEC 25010:2023. Performanz ist ebenfalls ein eigenes Hauptmerkmal und kein Unteraspekt der Zuverlässigkeit. Skalierbarkeit ist nur ein Untermerkmal, und Portabilität ging 2023 im neuen Hauptmerkmal Flexibilität auf."
 },
 {
  "id": "c2q7",
  "chapter": 2,
  "lz": "LZ 02-02",
  "r": "R1",
  "type": "multi",
  "q": "Welche der folgenden Aussagen beschreiben funktionale Anforderungen?",
  "options": [
   "Ein Sachbearbeiter kann eine Bestellung stornieren.",
   "Das System ist rund um die Uhr zu 99,9 % verfügbar.",
   "Der Nutzer kann Rechnungen als PDF exportieren.",
   "Antworten der Suche erscheinen in unter 200 ms.",
   "Das System versendet nach jeder Bestellung eine Bestätigungs-E-Mail."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Das Stornieren einer Bestellung ist eine Leistung, die das System erbringt. Es beschreibt WAS das System tut und ist damit eine funktionale Anforderung.",
   "Falsch: 99,9 % Verfügbarkeit beschreibt, wie zuverlässig das System seine Funktionen erbringt, nicht welche. Das ist eine Qualitätsanforderung (Zuverlässigkeit/Verfügbarkeit).",
   "Richtig: Der PDF-Export ist eine konkrete Funktion, die Nutzer:innen aufrufen können. Er beschreibt WAS das System leistet – eine funktionale Anforderung.",
   "Falsch: Die Antwortzeit beschreibt, WIE GUT die Suche funktioniert, nicht dass es sie gibt. Das ist eine Qualitätsanforderung (Performanz); die Suche selbst wäre die zugehörige Funktion.",
   "Richtig: Das Versenden einer Bestätigungs-E-Mail ist eine Reaktion des Systems auf ein fachliches Ereignis. Damit beschreibt es eine Funktion und ist eine funktionale Anforderung."
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
    "text": "Unbefugte Zugriffsversuche werden protokolliert und der Nutzer nach fünf Fehlversuchen gesperrt.",
    "cat": 0
   },
   {
    "text": "Eine neue Sprachversion der Oberfläche lässt sich ohne Codeänderung ergänzen.",
    "cat": 1
   },
   {
    "text": "Nach einem Serverausfall nimmt das System den Betrieb innerhalb von 30 Sekunden wieder auf.",
    "cat": 1
   },
   {
    "text": "Der Nutzer kann seine Bestellhistorie nach Datum filtern.",
    "cat": 0
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
    "text": "Die Lösung muss die Barrierefreiheits-Richtlinie WCAG 2.1 AA erfüllen.",
    "cat": 0
   },
   {
    "text": "Aufgrund einer Konzernvorgabe darf ausschließlich der bereitgestellte Cloud-Anbieter genutzt werden.",
    "cat": 0
   },
   {
    "text": "Das System bleibt auch bei Ausfall eines von drei Knoten verfügbar.",
    "cat": 1
   },
   {
    "text": "Eine neue Zahlart ist von einem Entwickler in unter zwei Personentagen integrierbar.",
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
   "Informationssicherheit (Security)",
   "Testbarkeit (Testability)",
   "Skalierbarkeit (Scalability)",
   "Kompatibilität (Compatibility)",
   "Zuverlässigkeit (Reliability)"
  ],
  "correct": [
   0,
   3,
   4
  ],
  "optExpl": [
   "Richtig: Informationssicherheit (Security) ist ein Hauptmerkmal der ISO/IEC 25010:2023. Ihr sind Untermerkmale wie Vertraulichkeit, Integrität und Authentizität zugeordnet.",
   "Falsch: Testbarkeit ist eine wichtige Qualität, im Modell aber ein Untermerkmal der Wartbarkeit. Wer sie für ein Hauptmerkmal hält, verwechselt die Ebenen des Qualitätsmodells.",
   "Falsch: Skalierbarkeit ist in der 2023-Fassung ein Untermerkmal der Flexibilität und kein eigenes Hauptmerkmal. Gerade weil sie in Architekturdiskussionen so präsent ist, wird sie hier leicht falsch eingeordnet.",
   "Richtig: Kompatibilität (Compatibility) ist ein Hauptmerkmal. Sie beschreibt, wie gut ein System mit anderen Systemen Informationen austauschen und neben ihnen betrieben werden kann.",
   "Richtig: Zuverlässigkeit (Reliability) ist ein Hauptmerkmal. Ihr gehören Untermerkmale wie Verfügbarkeit, Fehlertoleranz und Wiederherstellbarkeit an."
  ],
  "explanation": "Hauptmerkmale der ISO/IEC 25010:2023 sind u. a. Zuverlässigkeit, Sicherheit, Kompatibilität, Wartbarkeit, Flexibilität und Safety. Falle: Skalierbarkeit und Testbarkeit sind wichtige Qualitäten, aber nur Untermerkmale."
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
   "Weil früh geklärte Qualitätsanforderungen im weiteren Projektverlauf nicht mehr angepasst werden müssen.",
   "Weil sich aus ihnen direkt die Reihenfolge der umzusetzenden Features ableiten lässt.",
   "Weil eine frühe Klärung hilft, Zielkonflikte zwischen Qualitätsmerkmalen rechtzeitig abzuwägen.",
   "Weil sie oft implizit bleiben und andernfalls erst spät – etwa im Betrieb – schmerzhaft sichtbar werden."
  ],
  "correct": [
   0,
   3,
   4
  ],
  "optExpl": [
   "Richtig: Qualitätsanforderungen bestimmen grundlegende Entscheidungen wie Verteilung, Schichtung oder Datenhaltung. Diese Entscheidungen sind später nur mit hohem Aufwand änderbar, deshalb müssen ihre Treiber früh bekannt sein.",
   "Falsch: Auch früh geklärte Qualitätsanforderungen werden im Projektverlauf iterativ geschärft und können sich ändern. Früh klären heißt nicht, sie einzufrieren, sondern rechtzeitig eine belastbare Grundlage zu haben.",
   "Falsch: Die Reihenfolge der Features ergibt sich aus der fachlichen Priorisierung nach Wert, Risiko und Aufwand. Qualitätsanforderungen beeinflussen vor allem die Struktur, nicht direkt den Umsetzungsplan.",
   "Richtig: Qualitäten wie Sicherheit und Benutzbarkeit oder Performanz und Wartbarkeit stehen oft im Zielkonflikt. Früh erkannt, kann man sie bewusst abwägen, statt später von einem Konflikt überrascht zu werden.",
   "Richtig: Viele Qualitätserwartungen werden nicht ausgesprochen, weil sie als selbstverständlich gelten. Werden sie nicht früh explizit gemacht, zeigen sie sich oft erst im Betrieb – dann ist die Korrektur besonders teuer."
  ],
  "explanation": "Qualitätsanforderungen früh klären, weil sie die Grundstruktur prägen, oft implizit sind und Zielkonflikte früh abgewogen werden müssen. Sie bleiben trotzdem veränderlich und bestimmen nicht die Feature-Reihenfolge."
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
   "Es ist ein Nicht-Ziel, das den Umfang begrenzt.",
   "Es ist eine funktionale Anforderung, weil eine konkrete Bedienfunktion („Vorlesefunktion“) beschrieben wird.",
   "Es ist eine Randbedingung, da sie eine unveränderbare externe Vorgabe darstellt."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Die Forderung beschreibt, WIE GUT das System für eine bestimmte Nutzergruppe bedienbar ist – ein Aspekt der Benutzbarkeit bzw. Barrierefreiheit. Als Qualitätsanforderung kann sie die Architektur prägen, etwa die Trennung von Darstellung und Logik.",
   "Falsch: Ein Nicht-Ziel schließt etwas ausdrücklich aus dem Umfang aus. Diese Forderung schließt nichts aus, sondern erweitert die Ansprüche an das System.",
   "Falsch: Die Forderung nennt keine konkrete Funktion, sondern eine Qualität. Eine Vorlesefunktion wäre nur eine mögliche Lösung, um die Bedienbarkeit zu erreichen – Anforderung und Lösung dürfen nicht verwechselt werden.",
   "Falsch: Eine Randbedingung entsteht erst, wenn z. B. eine bestimmte Norm oder WCAG-Stufe verbindlich vorgeschrieben ist. Die bloße Forderung nach Bedienbarkeit beschreibt eine Qualität, keine Einschränkung des Lösungsraums."
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
   "Anforderungen können einander widersprechen; die Priorisierung zwingt zu bewussten Abwägungen.",
   "Architektonisch riskante Anforderungen sollten möglichst spät umgesetzt werden, damit bis dahin mehr Wissen vorliegt.",
   "Weil Zeit und Budget begrenzt sind, muss abgewogen werden, was zuerst und was womöglich gar nicht umgesetzt wird.",
   "Neben dem Umsetzungsaufwand sollten auch Geschäftswert und Risiko in die Priorisierung einfließen.",
   "Die Priorisierung der Qualitätsanforderungen legen die Architekt:innen fest, da sie deren technische Auswirkungen am besten kennen."
  ],
  "correct": [
   0,
   2,
   3
  ],
  "optExpl": [
   "Richtig: Anforderungen können sich widersprechen, etwa maximale Sicherheit gegen minimale Bedienhürden. Die Priorisierung zwingt dazu, solche Konflikte bewusst zu entscheiden, statt sie offen zu lassen.",
   "Falsch: Architektonisch riskante Anforderungen geht man eher früh an, z. B. mit einem Prototyp oder Durchstich. So zeigt sich rechtzeitig, ob die Architektur trägt – spät entdeckte Risiken sind deutlich teurer.",
   "Richtig: Zeit und Budget sind immer begrenzt, also kann nicht alles sofort oder überhaupt umgesetzt werden. Priorisierung entscheidet, was zuerst kommt und was im Zweifel entfällt.",
   "Richtig: Aufwand allein ist ein schlechter Maßstab, weil er nichts über den Nutzen sagt. Erst zusammen mit Geschäftswert und Risiko entsteht eine sinnvolle Reihenfolge.",
   "Falsch: Architekt:innen zeigen technische Auswirkungen und Trade-offs auf, die Priorität legen aber die Stakeholder fest. Sie entscheiden, welche Qualität ihnen im Konfliktfall wichtiger ist."
  ],
  "explanation": "Priorisierung wägt Wert, Risiko und Aufwand ab und löst Widersprüche bewusst auf. Riskantes geht man früh an; die Priorität setzen die Stakeholder, Architekt:innen liefern die Entscheidungsgrundlage."
 },
 {
  "id": "c2q12",
  "chapter": 2,
  "lz": "LZ 02-03",
  "r": "R1",
  "type": "multi",
  "q": "Was gilt typischerweise für das Verhältnis verschiedener Qualitätsanforderungen zueinander?",
  "options": [
   "Sie stehen häufig in Zielkonflikt (Trade-off) und müssen bewusst gegeneinander abgewogen werden.",
   "Eine einzelne Anforderung kann zudem mehrere Qualitäten gleichzeitig betreffen.",
   "Sie verstärken sich in der Regel gegenseitig, sodass die Verbesserung einer meist auch andere verbessert.",
   "Manche Qualitäten unterstützen sich auch gegenseitig, etwa Wartbarkeit und Testbarkeit.",
   "Zielkonflikte zwischen Qualitäten lassen sich durch eine geeignete Technologiewahl in der Regel vollständig auflösen."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Richtig: Qualitäten konkurrieren häufig, etwa Performanz gegen Wartbarkeit oder Sicherheit gegen Benutzbarkeit. Solche Zielkonflikte müssen bewusst abgewogen und als Entscheidung festgehalten werden.",
   "Richtig: Eine einzelne Anforderung kann mehrere Qualitäten zugleich berühren. Eine verschlüsselte Datenübertragung betrifft z. B. Sicherheit, wirkt sich aber auch auf die Performanz aus.",
   "Falsch: Gegenseitige Verstärkung kommt vor, ist aber nicht die Regel. Häufiger verbessert man eine Qualität auf Kosten einer anderen – deshalb sind Trade-off-Analysen ein Kern der Architekturarbeit.",
   "Richtig: Es gibt auch unterstützende Beziehungen: Ein gut modularisiertes, wartbares System lässt sich meist auch leichter testen. Solche Synergien sollte man kennen und gezielt nutzen.",
   "Falsch: Technologien verschieben Zielkonflikte meist nur, statt sie aufzulösen. Ein Cache verbessert z. B. die Performanz, bringt aber Fragen der Aktualität und Komplexität mit sich."
  ],
  "explanation": "Qualitäten stehen häufig in Zielkonflikt, können sich aber auch gegenseitig stützen; eine Anforderung kann mehrere Qualitäten betreffen. Weder ist gegenseitige Verstärkung die Regel, noch löst Technologie Trade-offs auf."
 },
 {
  "id": "c2q13",
  "chapter": 2,
  "lz": "LZ 02-05",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zu einer Annahme (Assumption) im Architekturkontext treffen zu?",
  "options": [
   "Sie sollte explizit dokumentiert und als Risiko verfolgt werden, falls sie nicht zutrifft.",
   "Annahmen sollte man in der Architekturdokumentation vermeiden, da sie die Verbindlichkeit der Entscheidungen schwächen.",
   "Sie ist ein als gegeben unterstellter, aber nicht gesicherter Sachverhalt.",
   "Sie ist eine vom Auftraggeber vorgegebene Einschränkung, die den Lösungsraum verbindlich begrenzt.",
   "Trifft eine dokumentierte Annahme nachweislich zu, kann sie zu einer bestätigten Randbedingung oder Tatsache werden."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Eine Annahme kann sich als falsch herausstellen, und dann stehen darauf aufbauende Entscheidungen in Frage. Deshalb dokumentiert man sie explizit und verfolgt sie wie ein Risiko, bis sie bestätigt oder widerlegt ist.",
   "Falsch: Entscheidungen beruhen fast immer auch auf Annahmen – das lässt sich nicht vermeiden. Verschwiegene Annahmen sind das größere Risiko; dokumentiert machen sie Entscheidungen erst nachvollziehbar und überprüfbar.",
   "Richtig: Eine Annahme ist ein Sachverhalt, von dem man ausgeht, ohne dass er gesichert ist – etwa „die Nutzerzahl verdoppelt sich höchstens in drei Jahren“. Man arbeitet damit, weil man sonst nicht entscheiden könnte.",
   "Falsch: Das beschreibt eine Randbedingung, also eine verbindliche Vorgabe. Eine Annahme ist gerade nicht vorgegeben und nicht gesichert, sondern eine unterstellte Grundlage.",
   "Richtig: Wird eine Annahme bestätigt, verliert sie ihren unsicheren Charakter. Sie wird dann zur gesicherten Tatsache oder, wenn sie den Lösungsraum einschränkt, zur bestätigten Randbedingung."
  ],
  "explanation": "Eine Annahme ist ein unterstellter, nicht gesicherter Sachverhalt – anders als eine vorgegebene Randbedingung. Man dokumentiert sie explizit und verfolgt sie als Risiko; bestätigt wird sie zur Tatsache."
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
   "Eine typische Änderung ist von neuen Entwickler:innen in unter einem Tag umsetzbar.",
   "Sensible Daten werden nach dem Stand der Technik verschlüsselt gespeichert.",
   "Nutzer:innen können eine Rechnung stornieren und erhalten eine Bestätigung.",
   "Das System muss die bereits vorhandene Oracle-Datenbank des Kunden weiterverwenden."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Durchsatz und Antwortzeit beschreiben, WIE GUT das System Anfragen verarbeitet. Die messbaren Zielwerte machen daraus eine prüfbare Qualitätsanforderung (Performanz).",
   "Richtig: Wie schnell sich eine typische Änderung umsetzen lässt, beschreibt die Wartbarkeit bzw. Änderbarkeit. Die Formulierung mit Zielgröße macht diese Qualität sogar messbar.",
   "Richtig: Verschlüsselte Speicherung beschreibt, wie gut das System Daten schützt – eine Qualitätsanforderung (Sicherheit). Es wird keine neue Funktion für Nutzer:innen beschrieben, sondern eine Eigenschaft der Datenhaltung.",
   "Falsch: Eine Rechnung stornieren und eine Bestätigung erhalten beschreibt, WAS das System tut. Das ist eine funktionale Anforderung, keine Qualitätsanforderung.",
   "Falsch: Die Pflicht, eine vorhandene Datenbank weiterzuverwenden, schränkt den Lösungsraum ein. Das ist eine technische Randbedingung und beschreibt keine Qualität des Systems."
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
   "Die Antwortzeit muss unter 300 ms liegen.",
   "Die Entwicklung erfolgt nach dem im Unternehmen vorgeschriebenen Vorgehensmodell.",
   "Die Kommunikation zwischen den Diensten muss über HTTPS laufen.",
   "Die Datenhaltung muss in einer relationalen Datenbank erfolgen.",
   "Das Projekt muss bis Jahresende mit dem bestehenden, festen Team abgeschlossen sein."
  ],
  "correct": [
   1,
   4
  ],
  "optExpl": [
   "Falsch: Eine geforderte Antwortzeit beschreibt, wie gut das System reagiert, und ist eine Qualitätsanforderung. Sie ist überhaupt keine Randbedingung, also auch keine organisatorische.",
   "Richtig: Ein im Unternehmen vorgeschriebenes Vorgehensmodell regelt, wie das Projekt arbeitet. Das ist eine organisatorische Randbedingung, weil sie aus der Organisation und nicht aus Technik oder Gesetz stammt.",
   "Falsch: Eine Protokollvorgabe wie HTTPS legt ein technisches Mittel fest. Das ist eine technische Randbedingung, keine organisatorische.",
   "Falsch: Die Vorgabe einer relationalen Datenbank betrifft die eingesetzte Technologie. Damit ist sie eine technische Randbedingung – wer sie als organisatorisch einordnet, verwechselt die Kategorien.",
   "Richtig: Termin und feste Teamzusammensetzung sind typische organisatorische Randbedingungen. Sie begrenzen, was in welcher Zeit mit welchen Fähigkeiten umsetzbar ist."
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
   "Aus den bereits gewählten Technologien und Frameworks.",
   "Aus dem gewählten Vorgehensmodell (z. B. Scrum oder Wasserfall).",
   "Aus rechtlichen und regulatorischen Vorgaben, die das System erfüllen muss.",
   "Aus den Geschäftszielen des Auftraggebers.",
   "Aus den Bedürfnissen und Belangen der verschiedenen Stakeholder."
  ],
  "correct": [
   2,
   3,
   4
  ],
  "optExpl": [
   "Falsch: Technologien und Frameworks sind Teil der Lösung und sollten aus den Anforderungen folgen, nicht umgekehrt. Wer Qualitätsanforderungen aus der gewählten Technik ableitet, dreht Ursache und Wirkung um.",
   "Falsch: Das Vorgehensmodell bestimmt, wie das Team arbeitet, nicht welche Qualitäten das System haben muss. Ob Scrum oder Wasserfall – die geforderte Verfügbarkeit bleibt dieselbe.",
   "Richtig: Gesetze und Regulatorik erzeugen oft konkrete Qualitätsanforderungen, etwa an Datenschutz, Nachvollziehbarkeit oder Sicherheit. Das System muss diese erfüllen, unabhängig von Vorlieben der Beteiligten.",
   "Richtig: Geschäftsziele sind eine Hauptquelle von Qualitätsanforderungen. Will ein Unternehmen z. B. schnell neue Produkte anbieten, folgt daraus eine hohe Anforderung an die Änderbarkeit.",
   "Richtig: Unterschiedliche Stakeholder haben unterschiedliche Belange – Nutzer:innen wollen Benutzbarkeit, der Betrieb Überwachbarkeit, die Entwicklung Wartbarkeit. Aus diesen Belangen leiten sich Qualitätsanforderungen ab."
  ],
  "explanation": "Qualitätsanforderungen stammen aus Geschäftszielen, Stakeholder-Belangen und Regulatorik. Sie leiten sich nicht aus gewählten Technologien (Lösung) oder dem Vorgehensmodell ab."
 },
 {
  "id": "c2q17",
  "chapter": 2,
  "lz": "LZ 02-02",
  "r": "R2",
  "type": "single",
  "q": "Ein Anforderungsdokument enthält den Satz: „Zur Datenhaltung ist PostgreSQL zu verwenden.“ Was trifft am ehesten zu?",
  "options": [
   "Das ist eine funktionale Anforderung, weil es das Verhalten der Datenspeicherung festlegt.",
   "Das ist eine Qualitätsanforderung, weil Datenbanken die Performanz bestimmen.",
   "Das ist streng genommen eine Lösungs-/Technologievorgabe und wirkt als Randbedingung – eine reine Anforderung würde nur das WAS/WIE GUT beschreiben.",
   "Anforderung und Lösung sind hier ohnehin dasselbe, nur unterschiedlich detailliert."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Der Satz beschreibt kein fachliches Verhalten, also nichts, was das System für seine Nutzer:innen tut. Er schreibt eine Technologie vor – das betrifft das WIE der Lösung, nicht das WAS.",
   "Falsch: Eine Datenbank kann die Performanz beeinflussen, aber die Wahl eines Produkts ist selbst kein Qualitätsziel. Eine Qualitätsanforderung wäre etwa eine geforderte Antwortzeit, die man dann mit PostgreSQL oder anders erreicht.",
   "Richtig: Die Festlegung auf ein konkretes Produkt greift dem Entwurf vor und schränkt den Lösungsraum ein – sie wirkt daher als technische Randbedingung. Eine reine Anforderung würde nur beschreiben, WAS das System leisten und WIE GUT es das tun soll.",
   "Falsch: Anforderung und Lösung unterscheiden sich grundsätzlich, nicht nur im Detailgrad. Die Anforderung beschreibt das Problem (WAS/WIE GUT), die Lösung den Weg dorthin (WIE) – eine Anforderung kann meist auf mehrere Arten gelöst werden."
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
   "Nicht-Ziele sollten nur intern im Team festgehalten werden, um Stakeholder nicht zu verunsichern.",
   "Sie klären den Umfang (Scope) und beugen falschen Erwartungen vor.",
   "Sie erleichtern spätere Entscheidungen, weil dokumentiert ist, was bewusst nicht verfolgt wird.",
   "Ein Nicht-Ziel kann sich im Projektverlauf ändern und später doch zum Ziel werden.",
   "Nicht-Ziele sind eine Form von Randbedingungen, da sie den Lösungsraum verbindlich einschränken."
  ],
  "correct": [
   1,
   2,
   3
  ],
  "optExpl": [
   "Falsch: Nicht-Ziele sollen gerade gegenüber den Stakeholdern Erwartungen klären. Bleiben sie im Team verborgen, entstehen genau die falschen Erwartungen, die man vermeiden wollte – sie gehören in die gemeinsame Dokumentation.",
   "Richtig: Ein ausdrücklich genanntes Nicht-Ziel zeigt, was das System bewusst nicht leisten wird. Das schärft den Umfang und verhindert, dass Stakeholder stillschweigend etwas anderes erwarten.",
   "Richtig: Ist dokumentiert, was bewusst nicht verfolgt wird, muss diese Frage nicht immer wieder neu diskutiert werden. Spätere Entscheidungen lassen sich dann schneller und nachvollziehbar treffen.",
   "Richtig: Auch Nicht-Ziele sind Entscheidungen auf Zeit. Ändern sich Geschäftsziele oder Rahmenbedingungen, kann ein früheres Nicht-Ziel später doch zum Ziel werden – dann muss man es bewusst neu bewerten.",
   "Falsch: Nicht-Ziele grenzen den Umfang ab, also WAS gebaut wird. Randbedingungen schränken dagegen die Lösung ein, also WIE gebaut werden darf – das sind unterschiedliche Kategorien."
  ],
  "explanation": "Nicht-Ziele klären den Scope, beugen falschen Erwartungen vor und erleichtern Entscheidungen; sie können sich ändern. Sie sind keine Randbedingungen und gehören transparent zu den Stakeholdern."
 },
 {
  "id": "c2q19",
  "chapter": 2,
  "lz": "LZ 02-04",
  "r": "R1",
  "type": "multi",
  "q": "Ein Qualitätsszenario soll eine Qualitätsanforderung überprüfbar machen. Welche Bestandteile gehören zu einem solchen Szenario?",
  "options": [
   "Die vorgesehene Architekturtaktik, mit der die Reaktion erreicht wird (z. B. „durch Caching“).",
   "Ein messbares Antwortmaß (z. B. „95 % in unter 1 s“).",
   "Die Umgebung/der Betriebszustand, in dem das Szenario gilt (z. B. „unter Volllast“).",
   "Der Baustein, der für die Umsetzung der Reaktion verantwortlich ist.",
   "Ein konkreter Auslöser/Stimulus (z. B. „1000 gleichzeitige Anfragen treffen ein“)."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Falsch: Ein Qualitätsszenario beschreibt das geforderte Verhalten (WAS), nicht die Lösung (WIE). Taktiken wie Caching sind Entwurfsentscheidungen, die erst gegen das Szenario bewertet werden – stünden sie schon darin, wäre keine unabhängige Prüfung mehr möglich.",
   "Richtig: Erst ein messbares Antwortmaß macht das Szenario überprüfbar. Ohne „95 % in unter 1 s“ bliebe offen, wann die geforderte Reaktion gut genug ist.",
   "Richtig: Die Umgebung legt fest, unter welchen Bedingungen das Szenario gilt. Dieselbe Anfrage kann im Normalbetrieb und unter Volllast sehr unterschiedliche Anforderungen an die Architektur bedeuten.",
   "Falsch: Welcher Baustein die Reaktion umsetzt, wird im Entwurf entschieden und gehört nicht zur Anforderung. Das Szenario betrachtet das System von außen und lässt offen, wie es intern gelöst wird.",
   "Richtig: Der Auslöser (Stimulus) ist das Ereignis, auf das das System reagieren muss. Ohne ihn wäre unklar, welche Situation das Szenario überhaupt beschreibt."
  ],
  "explanation": "Ein Qualitätsszenario besteht aus Auslöser, Kontext/Umgebung, Reaktion und messbarem Antwortmaß. Lösungsbestandteile wie Taktiken oder verantwortliche Bausteine gehören nicht hinein."
 },
 {
  "id": "c2q20",
  "chapter": 2,
  "lz": "LZ 02-01",
  "r": "R2",
  "type": "multi",
  "q": "Zwei wichtige Stakeholder vertreten unvereinbare Ziele (maximale Sicherheit vs. maximaler Bedienkomfort). Welche Vorgehensweisen sind angemessen?",
  "options": [
   "Die Architektur so konfigurierbar gestalten, dass beide Ziele jeweils maximal erreichbar sind, um den Konflikt zu vermeiden.",
   "Eine begründete Priorisierung bzw. einen tragfähigen Kompromiss herbeiführen und dokumentieren.",
   "Die widersprüchlichen Belange transparent machen und bewusst gegeneinander abwägen.",
   "Die Entscheidung an die dafür verantwortliche Instanz (z. B. Auftraggeber/Produktverantwortung) eskalieren, wenn kein Ausgleich gelingt.",
   "Als Architekt:in die Entscheidung selbst treffen, da sie letztlich eine technische Frage ist."
  ],
  "correct": [
   1,
   2,
   3
  ],
  "optExpl": [
   "Falsch: Konfigurierbarkeit verschiebt den Zielkonflikt nur in die Betriebs- oder Einstellungsphase und erhöht zugleich die Komplexität. Ein echter Konflikt zwischen Sicherheit und Komfort bleibt bestehen und muss abgewogen werden.",
   "Richtig: Ziel ist eine begründete Priorisierung oder ein tragfähiger Kompromiss, den die Beteiligten mittragen. Die Dokumentation macht später nachvollziehbar, warum so entschieden wurde.",
   "Richtig: Ein Konflikt lässt sich nur lösen, wenn er offen auf dem Tisch liegt. Architekt:innen machen die widersprüchlichen Belange und ihre Folgen sichtbar, damit bewusst abgewogen werden kann.",
   "Richtig: Gelingt kein Ausgleich zwischen den Stakeholdern, muss die verantwortliche Instanz entscheiden, etwa Auftraggeber oder Produktverantwortung. Architekt:innen bereiten diese Entscheidung mit Optionen und Auswirkungen vor.",
   "Falsch: Ein Zielkonflikt zwischen Stakeholdern ist keine rein technische Frage, sondern eine Frage der Prioritäten und Interessen. Architekt:innen liefern die Entscheidungsgrundlage, die Entscheidung selbst treffen die Verantwortlichen."
  ],
  "explanation": "Zielkonflikte zwischen Stakeholdern: transparent machen, abwägen, begründet priorisieren oder Kompromiss dokumentieren, notfalls eskalieren. Sie lassen sich weder durch Konfigurierbarkeit wegdesignen noch rein technisch entscheiden."
 },
 {
  "id": "c2q21",
  "chapter": 2,
  "lz": "LZ 02-03",
  "r": "R2",
  "type": "single",
  "q": "Ein Kollege behauptet mehrere Dinge über die Revision der ISO/IEC 25010 aus dem Jahr 2023. Welche Aussage ist korrekt?",
  "options": [
   "„Usability“ wurde unter diesem Namen unverändert beibehalten.",
   "„Portabilität“ wurde ersatzlos gestrichen und hat keinen Nachfolger im Modell.",
   "„Safety“ (Betriebssicherheit) wurde als eigenständiges Hauptmerkmal aufgenommen.",
   "Die Zahl der Hauptmerkmale wurde auf drei reduziert."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: „Usability“ wurde 2023 in „Interaktionsfähigkeit (Interaction Capability)“ umbenannt und inhaltlich erweitert. Unter dem alten Namen gibt es das Hauptmerkmal daher nicht mehr.",
   "Falsch: Portabilität wurde nicht ersatzlos gestrichen, sondern in das breitere Hauptmerkmal „Flexibilität“ überführt. Die Inhalte leben dort weiter, ergänzt u. a. um Skalierbarkeit.",
   "Richtig: Mit der Revision 2023 wurde Safety (Betriebssicherheit) als eigenständiges Hauptmerkmal aufgenommen. Es beschreibt, dass das System keine Gefahr für Menschen, Umwelt oder Sachwerte darstellt – nicht zu verwechseln mit Security (Informationssicherheit).",
   "Falsch: Das Modell wurde nicht auf drei Hauptmerkmale reduziert, sondern umfasst in der 2023-Fassung neun. Die Revision hat Merkmale umbenannt, zusammengeführt und ergänzt, aber nicht drastisch verkleinert."
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
   "Die Stakeholder aus dem Organigramm des Auftraggebers ableiten, da dort alle relevanten Rollen abgebildet sind.",
   "Bereits bekannte Stakeholder nach weiteren Betroffenen fragen (Schneeballprinzip).",
   "Das Umfeld schichtweise abtasten – vom System über das Geschäftssystem bis zur weiteren Umgebung (Zwiebelmodell).",
   "Sich auf die Stakeholder mit dem größten Einfluss konzentrieren, da die übrigen die Architektur kaum prägen.",
   "Auch nicht zahlende, indirekt Betroffene und kritisch eingestellte Personen berücksichtigen."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Falsch: Ein Organigramm zeigt nur interne Rollen des Auftraggebers. Externe Stakeholder wie Behörden, Partner, Endkund:innen oder der Betrieb eines Dienstleisters fehlen dort und würden übersehen.",
   "Richtig: Bereits bekannte Stakeholder kennen oft weitere Betroffene, die man selbst nicht im Blick hat. Durch gezieltes Nachfragen (Schneeballprinzip) wächst die Liste schrittweise und vollständiger.",
   "Richtig: Das Zwiebelmodell tastet das Umfeld schichtweise ab – vom System über das umgebende Geschäftssystem bis zur weiteren Umgebung. So geht man systematisch vor und übersieht weniger Stakeholder.",
   "Falsch: Auch Stakeholder mit wenig Einfluss, etwa Betrieb oder Support, können wichtige Qualitätsanforderungen haben. Wer sie ignoriert, entdeckt deren Anforderungen oft erst spät und teuer.",
   "Richtig: Stakeholder ist jede Person oder Gruppe, die vom System betroffen ist oder es beeinflusst – nicht nur, wer bezahlt. Gerade indirekt Betroffene und Kritiker bringen Anforderungen und Risiken ein, die sonst fehlen würden."
  ],
  "explanation": "Stakeholder findet man systematisch (Zwiebelmodell), über Nachfragen (Schneeball) und unter Einbezug indirekt Betroffener und Kritiker. Sich nur auf Einflussreiche oder das Organigramm zu stützen, übersieht wichtige Stakeholder."
 },
 {
  "id": "c2q23",
  "chapter": 2,
  "lz": "LZ 02-02",
  "r": "R2",
  "type": "single",
  "q": "Ein Architekturteam ist entlang der Organisationsstruktur in getrennte Abteilungen aufgeteilt und stellt fest, dass das System dieselben Grenzen abbildet. Welche Aussage beschreibt Conways Gesetz zutreffend?",
  "options": [
   "Wird ein verspätetes Softwareprojekt personell aufgestockt, verzögert es sich tendenziell weiter.",
   "Ein genutztes System muss sich fortlaufend verändern, sonst wird es mit der Zeit immer weniger nützlich.",
   "Die Struktur eines Systems spiegelt tendenziell die Kommunikationsstrukturen der entwickelnden Organisation wider.",
   "Sei streng in dem, was du sendest, und tolerant in dem, was du annimmst."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Das ist Brooks’ Law: Zusätzliches Personal verzögert ein verspätetes Projekt meist weiter, weil Einarbeitung und Abstimmung Zeit kosten. Mit dem Zusammenhang zwischen Organisation und Systemstruktur hat es nichts zu tun.",
   "Falsch: Das entspricht Lehmans Gesetzen der Softwareevolution, die beschreiben, dass genutzte Systeme sich ständig verändern müssen. Conways Gesetz macht dagegen eine Aussage über Organisation und Systemstruktur.",
   "Richtig: Das ist Conways Gesetz: Teams bauen Schnittstellen dort, wo sie miteinander kommunizieren müssen, und so spiegelt die Systemstruktur die Kommunikationsstruktur der Organisation. Genau das beobachtet das Team im Szenario.",
   "Falsch: Das ist das Robustheitsprinzip (Postel’s Law) für Schnittstellen. Es betrifft den Umgang mit Ein- und Ausgaben, nicht den Zusammenhang zwischen Organisations- und Systemstruktur."
  ],
  "explanation": "Conways Gesetz: Systemstruktur spiegelt die Kommunikationsstruktur der Organisation. Nicht verwechseln mit Brooks’ Law (Personal in verspäteten Projekten), Postel’s Law (Robustheit von Schnittstellen) und Lehmans Gesetzen (Softwareevolution)."
 },
 {
  "id": "c2q24",
  "chapter": 2,
  "lz": "LZ 02-05",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zu impliziten (unausgesprochenen) Anforderungen treffen zu?",
  "options": [
   "Sie beruhen oft auf selbstverständlichen Erwartungen, die der Auftraggeber gar nicht erst erwähnt.",
   "Für sie ist allein der Auftraggeber verantwortlich, da er sie hätte nennen müssen.",
   "Sie betreffen häufig Qualitätsanforderungen und sollten aktiv explizit gemacht werden.",
   "Sie gelten erst, nachdem sie schriftlich in das Anforderungsdokument aufgenommen wurden.",
   "Werden sie übersehen, zeigt sich das oft erst spät und verursacht hohe Korrekturkosten."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Implizite Anforderungen beruhen auf Erwartungen, die für den Auftraggeber so selbstverständlich sind, dass er sie gar nicht erwähnt. Beispiel: Niemand fordert ausdrücklich, dass Passwörter nicht im Klartext gespeichert werden.",
   "Falsch: Architekt:innen tragen Mitverantwortung, solche Erwartungen aktiv aufzudecken. Auf den Auftraggeber zu verweisen hilft nicht, wenn das System die Erwartung am Ende trotzdem erfüllen muss.",
   "Richtig: Unausgesprochen bleiben vor allem Qualitätsanforderungen wie Sicherheit, Verfügbarkeit oder Benutzbarkeit. Da sie die Architektur stark prägen, sollten Architekt:innen sie gezielt erfragen und explizit machen.",
   "Falsch: Die Erwartung besteht auch ohne schriftliche Dokumentation, und das System wird daran gemessen. Gerade deshalb macht man implizite Anforderungen früh explizit, statt auf ihre Aufnahme ins Dokument zu warten.",
   "Richtig: Übersehene implizite Anforderungen zeigen sich oft erst spät, etwa in der Abnahme oder im Betrieb. Dann steht die Struktur bereits, und die Korrektur wird besonders teuer."
  ],
  "explanation": "Implizite Anforderungen sind oft Qualitätsanforderungen, beruhen auf Selbstverständlichkeiten und werden spät teuer. Architekt:innen decken sie aktiv auf; sie gelten auch dann, wenn niemand sie aufgeschrieben hat."
 },
 {
  "id": "c2q25",
  "chapter": 2,
  "lz": "LZ 02-01",
  "r": "R2",
  "type": "single",
  "q": "Zwei Stakeholder streiten. Worin unterscheidet sich ein Sachkonflikt von einem Interessenkonflikt am ehesten?",
  "options": [
   "Ein Interessenkonflikt lässt sich in der Regel durch zusätzliche Fakten auflösen, ein Sachkonflikt nur durch einen Kompromiss.",
   "Ein Sachkonflikt dreht sich um Fakten bzw. Lösungswege, ein Interessenkonflikt um unvereinbare Ziele der Beteiligten.",
   "Ein Sachkonflikt dreht sich um unvereinbare Ziele der Beteiligten, ein Interessenkonflikt um unterschiedliche Lösungswege.",
   "Ein Sachkonflikt entsteht zwischen Fachbereichen, ein Interessenkonflikt zwischen Fachbereich und IT."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Hier sind die Lösungswege vertauscht. Sachkonflikte lassen sich oft durch zusätzliche Fakten klären, Interessenkonflikte dagegen nicht – sie brauchen eine Abwägung oder einen Kompromiss.",
   "Richtig: Beim Sachkonflikt streitet man über Fakten oder den richtigen Lösungsweg, was sich oft durch Information oder Prototypen klären lässt. Beim Interessenkonflikt verfolgen die Beteiligten unvereinbare Ziele, und Fakten allein lösen ihn nicht.",
   "Falsch: Diese Option vertauscht die beiden Begriffe. Unvereinbare Ziele kennzeichnen den Interessenkonflikt, unterschiedliche Lösungswege den Sachkonflikt.",
   "Falsch: Die Konfliktart hängt vom Gegenstand des Streits ab, nicht davon, wer beteiligt ist. Zwischen Fachbereich und IT kann es ebenso Sachkonflikte geben wie zwischen zwei Fachbereichen Interessenkonflikte."
  ],
  "explanation": "Sachkonflikt: Streit über Fakten oder Lösungswege, oft durch Information lösbar. Interessenkonflikt: unvereinbare Ziele, braucht Abwägung/Kompromiss. Die Art hängt vom Gegenstand ab, nicht von den Beteiligten."
 },
 {
  "id": "c2q26",
  "chapter": 2,
  "lz": "LZ 02-02",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen kennzeichnen eine Randbedingung (Constraint) zutreffend?",
  "options": [
   "Sie ist immer schriftlich vom Auftraggeber vorgegeben; ungeschriebene Vorgaben sind keine Randbedingungen.",
   "Sie kann technischer, organisatorischer oder rechtlicher Natur sein.",
   "Sie sollte ebenso dokumentiert werden wie andere Anforderungen, da sie den Entwurf beeinflusst.",
   "Sie ist eine vorgegebene Grenze, die das Team kaum oder gar nicht beeinflussen kann.",
   "Eine einmal festgestellte Randbedingung gilt für die gesamte Lebensdauer des Systems unverändert."
  ],
  "correct": [
   1,
   2,
   3
  ],
  "optExpl": [
   "Falsch: Auch ungeschriebene Vorgaben wirken als Randbedingungen, etwa eine vorhandene Infrastruktur, Unternehmensstandards oder das Know-how des Teams. Entscheidend ist, dass sie den Lösungsraum einschränken, nicht ob sie schriftlich vorliegen.",
   "Richtig: Randbedingungen gibt es in mehreren Arten: technisch (z. B. vorgeschriebene Plattform), organisatorisch (z. B. Budget, Termin, Team) und rechtlich (z. B. Datenschutz). Alle schränken den Lösungsraum ein.",
   "Richtig: Randbedingungen beeinflussen den Entwurf genauso stark wie Anforderungen und erklären viele Entscheidungen. Deshalb gehören sie in die Architekturdokumentation, damit Entscheidungen nachvollziehbar bleiben.",
   "Richtig: Eine Randbedingung ist eine vorgegebene Grenze, die das Team kaum oder gar nicht verändern kann. Es muss mit ihr arbeiten, statt sie wie eine Entwurfsentscheidung frei zu wählen.",
   "Falsch: Randbedingungen können sich ändern, etwa durch neue Gesetze, Budgetänderungen oder auslaufende Technologien. Dann müssen sie und die darauf beruhenden Entscheidungen neu bewertet werden."
  ],
  "explanation": "Randbedingungen sind kaum beeinflussbare Vorgaben technischer, organisatorischer oder rechtlicher Art und gehören dokumentiert. Sie müssen nicht schriftlich vorliegen und können sich über die Zeit ändern."
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
   "Es bewertet Anforderungen nach Eintrittswahrscheinlichkeit und Auswirkung, um die riskantesten zuerst umzusetzen.",
   "Es ordnet jede Anforderung genau einem ISO-25010-Qualitätsmerkmal zu.",
   "Es sortiert Anforderungen in Must, Should, Could und Won’t, wie das MoSCoW-Verfahren."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Das Kano-Modell unterscheidet Merkmale nach ihrer Wirkung auf die Zufriedenheit: Basismerkmale werden vorausgesetzt, Leistungsmerkmale steigern die Zufriedenheit proportional, Begeisterungsmerkmale überraschen positiv. Fehlende Basismerkmale erzeugen starke Unzufriedenheit.",
   "Falsch: Eintrittswahrscheinlichkeit und Auswirkung sind die Dimensionen einer Risikobewertung. Das Kano-Modell fragt dagegen, wie ein Merkmal die Zufriedenheit der Kund:innen beeinflusst.",
   "Falsch: Das Kano-Modell hat mit dem ISO-25010-Qualitätsmodell nichts zu tun. Es klassifiziert Merkmale nach Kundenzufriedenheit, nicht nach Qualitätsmerkmalen eines Produkts.",
   "Falsch: Must/Should/Could/Won’t ist das MoSCoW-Verfahren, eine andere Priorisierungstechnik. Kano unterscheidet nicht nach Dringlichkeit, sondern nach der Wirkung eines Merkmals auf die Zufriedenheit."
  ],
  "explanation": "Kano-Modell: Basis-, Leistungs- und Begeisterungsmerkmale nach Wirkung auf die Zufriedenheit. Abgrenzen: MoSCoW (Must/Should/Could/Won’t), Risikobewertung, ISO 25010."
 },
 {
  "id": "c3q1",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zu Kopplung und Kohäsion treffen zu?",
  "options": [
   "Kohäsion misst die Anzahl und Stärke der Abhängigkeiten zwischen verschiedenen Bausteinen.",
   "Lose Kopplung und hohe Kohäsion sind komplementäre Ziele: Erstere betrifft die Beziehungen zwischen Bausteinen, Letztere den inneren Zusammenhalt eines Bausteins.",
   "Je höher die Kohäsion eines Bausteins, desto höher ist auch die Kopplung zu seinen Nachbarbausteinen.",
   "Werden zwei Bausteine statt über gemeinsame veränderliche Datenstrukturen über eine schmale, stabile Schnittstelle verbunden, sinkt tendenziell ihre Kopplung.",
   "Ein Baustein mit hoher Kohäsion bündelt Elemente, die derselben Verantwortlichkeit dienen."
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Falsch: Anzahl und Stärke der Abhängigkeiten zwischen Bausteinen beschreibt die Kopplung, nicht die Kohäsion. Kohäsion misst dagegen, wie stark die Elemente innerhalb eines einzelnen Bausteins zusammengehören.",
   "Richtig: Kopplung und Kohäsion betrachten zwei verschiedene Ebenen – die Beziehungen zwischen Bausteinen bzw. den inneren Zusammenhalt eines Bausteins. Man verfolgt beide Ziele gleichzeitig, weil sie sich gegenseitig ergänzen.",
   "Falsch: Kohäsion und Kopplung sind unabhängige Dimensionen, zwischen denen es keinen solchen Automatismus gibt. Im Gegenteil: Wer Zusammengehöriges in einem Baustein bündelt, braucht meist weniger Beziehungen nach außen.",
   "Richtig: Gemeinsame veränderliche Datenstrukturen koppeln Bausteine an Interna und an jede Änderung dieser Strukturen. Eine schmale, stabile Schnittstelle legt dagegen nur einen kleinen Vertrag offen, sodass sich beide Seiten unabhängiger ändern können.",
   "Richtig: Hohe Kohäsion heißt, dass die Bestandteile eines Bausteins einer gemeinsamen Verantwortlichkeit dienen. Ein Baustein „Rechnungsstellung“ enthält dann z. B. nur Rechnungslogik und keine Benutzerverwaltung."
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
   "Interne Datenstrukturen dürfen von anderen Bausteinen genutzt werden, solange sie dokumentiert sind.",
   "Jeder Baustein besitzt genau eine fachliche Verantwortlichkeit und damit nur einen Änderungsgrund.",
   "Entwurfsentscheidungen, die sich voraussichtlich ändern, werden hinter einer stabilen Schnittstelle verborgen, sodass Änderungen lokal bleiben.",
   "Ziel ist, dass sich voraussichtliche Änderungen auf einen einzelnen Baustein beschränken (lokale Änderbarkeit).",
   "Sensible Felder werden verschlüsselt abgelegt, um unbefugten Datenzugriff zu verhindern."
  ],
  "correct": [
   2,
   3
  ],
  "optExpl": [
   "Falsch: Dokumentation ändert nichts daran, dass andere Bausteine von den internen Strukturen abhängig werden. Jede Änderung dieser Interna würde dann alle Nutzer treffen – genau das will Information Hiding verhindern.",
   "Falsch: Das beschreibt das Single Responsibility Principle (ein Änderungsgrund pro Baustein), nicht Information Hiding. Parnas geht es darum, veränderliche Entwurfsentscheidungen hinter Schnittstellen zu verbergen.",
   "Richtig: Parnas schlägt vor, Bausteine entlang der Entwurfsentscheidungen zu schneiden, die sich wahrscheinlich ändern, und diese hinter einer stabilen Schnittstelle zu verbergen. Ändert sich z. B. das Speicherformat, bleibt die Änderung im zuständigen Baustein.",
   "Richtig: Der Zweck des Geheimnisprinzips ist lokale Änderbarkeit – eine voraussichtliche Änderung soll nur einen Baustein betreffen. Die Nutzer kennen nur die Schnittstelle und müssen deshalb nicht angepasst werden.",
   "Falsch: Information Hiding ist ein Entwurfsprinzip zur Kapselung von Entwurfsentscheidungen, kein Sicherheitsmechanismus. Verschlüsselung schützt Daten vor unbefugtem Zugriff und gehört zum Thema Sicherheit."
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
   "Das „S“ steht für Separation of Concerns, das übergeordnete Prinzip hinter SOLID.",
   "Single Responsibility Principle: Eine Klasse darf nur eine einzige öffentliche Methode besitzen.",
   "Das „S“ steht für Substitutability: Subtypen müssen ihre Basistypen ersetzen können.",
   "Single Responsibility Principle: Ein Baustein sollte nur einen einzigen Grund haben, sich zu ändern."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Separation of Concerns ist ein verwandtes, allgemeineres Entwurfsprinzip, aber nicht Teil von SOLID. Das „S“ steht für das Single Responsibility Principle.",
   "Falsch: Das ist eine verbreitete Fehldeutung des SRP. „Eine Verantwortlichkeit“ bedeutet einen Änderungsgrund – eine Klasse kann dafür durchaus viele Methoden besitzen.",
   "Falsch: Substituierbarkeit von Subtypen ist das Liskovsche Substitutionsprinzip und damit das „L“ in SOLID. Das „S“ steht für das Single Responsibility Principle.",
   "Richtig: Das Single Responsibility Principle verlangt, dass ein Baustein nur einen Grund hat, sich zu ändern. Vermischt eine Klasse z. B. Berechnung und Formatierung, ändert sie sich aus zwei Gründen und sollte geteilt werden."
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
   "Eine tiefere Schicht darf höhere Schichten über eine von ihr selbst definierte Callback-Schnittstelle benachrichtigen, ohne die Schichtung zu verletzen.",
   "Abhängigkeiten von einer tieferen zu einer höheren Schicht gelten als Schichtungsverletzung.",
   "In der strikten (closed) Variante darf eine Schicht eine tieferliegende Schicht überspringen, wenn das die Performance verbessert.",
   "Zusätzliche Schichten bringen Indirektion und können zu Lasten der Laufzeit-Performance gehen.",
   "Höhere Schichten nutzen Dienste tieferliegender Schichten; die Abhängigkeiten verlaufen in eine Richtung."
  ],
  "correct": [
   0,
   1,
   3,
   4
  ],
  "optExpl": [
   "Richtig: Die Callback-Schnittstelle gehört zur tieferen Schicht, die höhere Schicht implementiert sie. Die Abhängigkeit im Code zeigt also weiterhin nach unten, nur der Aufruf läuft zur Laufzeit nach oben – etwa beim Observer-Muster.",
   "Richtig: Schichtung bedeutet, dass Abhängigkeiten nur von oben nach unten zeigen. Kennt eine tiefere Schicht eine höhere, entsteht eine Rückwärtsabhängigkeit, die die Schichten aneinander bindet und die Schichtung verletzt.",
   "Falsch: Das Überspringen von Schichten ist gerade das Merkmal der offenen (relaxed) Schichtung. In der strikten Variante darf eine Schicht nur die unmittelbar darunterliegende nutzen – auch aus Performancegründen nicht anders.",
   "Richtig: Jede Schicht fügt eine Indirektion hinzu, durch die Aufrufe und Daten durchgereicht werden müssen. Das kann Laufzeit kosten – ein typischer Trade-off der Schichtenarchitektur gegenüber ihrer besseren Änderbarkeit.",
   "Richtig: Das ist das Grundprinzip der Schichtenarchitektur: Höhere Schichten nutzen Dienste der tieferen, die Abhängigkeiten verlaufen nur in eine Richtung. Dadurch lassen sich tiefere Schichten unabhängig von den höheren verstehen und austauschen."
  ],
  "explanation": "Schichten: Abhängigkeiten nur nach unten, Rückwärtsabhängigkeiten sind Verletzungen, Indirektion kostet Laufzeit. Strikte Schichtung verbietet das Überspringen. Callbacks über eine Schnittstelle der tieferen Schicht sind erlaubt, weil die Abhängigkeitsrichtung erhalten bleibt."
 },
 {
  "id": "c3q5",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R3",
  "type": "multi",
  "q": "Welche Aussagen zu Ports & Adapters (hexagonale Architektur) treffen zu?",
  "options": [
   "Die Abhängigkeiten sind so gerichtet, dass die Fachlogik die konkreten Adapter nicht kennen muss (Abhängigkeitsumkehr an den Ports).",
   "Die fachliche Kernlogik wird von Technik und Infrastruktur entkoppelt.",
   "Äußere Belange (UI, DB, externe APIs) werden über austauschbare Adapter angebunden.",
   "Ports and Adapters setzt voraus, dass die Anwendung als Menge eigenständiger Microservices betrieben wird.",
   "Ein Port ist die konkrete, technologiespezifische Implementierung, etwa der JDBC-Datenbankzugriff."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Die Fachlogik definiert die Ports als Schnittstellen, und die Adapter hängen von diesen Ports ab. Durch diese Abhängigkeitsumkehr kennt der Kern keine konkrete Technik, etwa keinen bestimmten Datenbanktreiber.",
   "Richtig: Ziel des Musters ist, die fachliche Kernlogik von UI, Datenbank und Infrastruktur zu entkoppeln. So lässt sich die Fachlogik ohne Technik testen und Technik austauschen, ohne die Fachlogik anzufassen.",
   "Richtig: Äußere Belange werden über Adapter an die Ports angebunden. Weil die Adapter nur den Port-Vertrag erfüllen müssen, kann man z. B. eine relationale Datenbank durch eine In-Memory-Variante für Tests ersetzen.",
   "Falsch: Ports and Adapters strukturiert eine Anwendung intern und ist unabhängig vom Deployment-Stil. Das Muster funktioniert in einem Monolithen genauso wie innerhalb eines einzelnen Microservice.",
   "Falsch: Hier sind Port und Adapter vertauscht. Der Port ist die technologieneutrale Schnittstelle des Kerns; der JDBC-Zugriff wäre ein konkreter Adapter, der diesen Port implementiert."
  ],
  "explanation": "Ports and Adapters entkoppelt die Fachlogik von Technik: Ports sind technologieneutrale Schnittstellen des Kerns, Adapter die konkreten Anbindungen. Das Muster ist unabhängig vom Deployment-Stil."
 },
 {
  "id": "c3q6",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen treffen typischerweise auf Microservices zu?",
  "options": [
   "Da jeder Service klein ist, sinkt gegenüber einem Monolithen der Gesamtaufwand für Test und Betrieb.",
   "Der fachliche Schnitt in Services entspricht direkt dem Schnitt in technische Schichten (je ein UI-, Logik- und Datenservice).",
   "Sie erhöhen die betriebliche Komplexität (Verteilung, Monitoring, Ausfallszenarien).",
   "Sie sind unabhängig deploybar und fachlich geschnitten.",
   "Jeder Service verwaltet seine eigenen Daten und kapselt sie hinter seiner Schnittstelle."
  ],
  "correct": [
   2,
   3,
   4
  ],
  "optExpl": [
   "Falsch: Der einzelne Service ist zwar klein, aber das Gesamtsystem wird verteilt. Integrationstests über Servicegrenzen, Monitoring, Deployment-Pipelines und Fehlerbehandlung im Netz erhöhen den Gesamtaufwand für Test und Betrieb tendenziell.",
   "Falsch: Microservices werden fachlich (vertikal) geschnitten, jeder Service umfasst seine eigene UI-, Logik- und Datenhaltung für einen fachlichen Bereich. Ein Schnitt in UI-, Logik- und Datenservice wäre ein verteilter Schichtenmonolith und gilt als Anti-Muster.",
   "Richtig: Mit der Verteilung kommen Netzwerkfehler, Latenzen, verteiltes Monitoring und Tracing sowie viele Deployments hinzu. Diese betriebliche Komplexität ist der zentrale Preis für die Unabhängigkeit der Services.",
   "Richtig: Kernmerkmale von Microservices sind der fachliche Schnitt und die unabhängige Deploybarkeit. Ein Team kann so seinen Service ändern und ausliefern, ohne andere Services mitzudeployen.",
   "Richtig: Jeder Service hat die Hoheit über seine Daten und gibt sie nur über seine Schnittstelle heraus. Eine gemeinsame Datenbank würde die Services wieder über das Schema koppeln und die unabhängige Änderbarkeit zerstören."
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
   "Konzeptionelle Integrität – gleichartige Probleme werden im System auf gleichartige Weise gelöst.",
   "Trennung der Zuständigkeiten (Separation of Concerns).",
   "Vollständige Konfigurierbarkeit – möglichst alle Entscheidungen werden in Konfigurationsdateien ausgelagert.",
   "Abstraktion.",
   "Maximale Wiederverwendung – Gemeinsamkeiten werden immer in gemeinsame Bausteine ausgelagert, auch über Fachgrenzen hinweg."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Richtig: Konzeptionelle Integrität bedeutet, dass gleichartige Probleme im ganzen System auf gleichartige Weise gelöst werden. Wer z. B. Fehlerbehandlung überall gleich umsetzt, macht das System leichter verständlich und wartbar.",
   "Richtig: Separation of Concerns trennt unterschiedliche Belange in getrennte Bausteine. Es ist ein Grundprinzip, weil es lose Kopplung und hohe Kohäsion fördert und Änderungen lokal hält.",
   "Falsch: Übermäßige Konfigurierbarkeit verlagert Komplexität nur in Konfigurationsdateien, wo sie schwer zu testen und zu überblicken ist. Sie ist kein Entwurfsprinzip, sondern muss im Einzelfall durch echte Variabilitätsanforderungen begründet sein.",
   "Richtig: Abstraktion blendet unwichtige Details aus und hebt das Wesentliche hervor. Sie ist ein Grundprinzip, weil sie Komplexität beherrschbar macht und die Grundlage für Schnittstellen und Modularisierung bildet.",
   "Falsch: Wiederverwendung um jeden Preis koppelt Bausteine, die fachlich nichts miteinander zu tun haben – jede Änderung am gemeinsamen Baustein betrifft dann alle. DRY bezieht sich auf dasselbe Wissen, nicht auf zufällige Ähnlichkeit über Fachgrenzen hinweg."
  ],
  "explanation": "Grundlegende Entwurfsprinzipien sind u. a. Abstraktion, Modularisierung (Information Hiding, SoC, lose Kopplung, hohe Kohäsion) und konzeptionelle Integrität. Maximale Konfigurierbarkeit und Wiederverwendung um jeden Preis klingen nach Prinzipien, erhöhen aber Komplexität und Kopplung."
 },
 {
  "id": "c3q8",
  "chapter": 3,
  "lz": "LZ 03-10",
  "r": "R1",
  "type": "multi",
  "q": "Welche der folgenden sind typische Querschnittskonzepte (Cross-Cutting Concerns)?",
  "options": [
   "Die Berechnung der Versandkosten, auch wenn mehrere Dialoge das Ergebnis anzeigen.",
   "Die Validierung der Bestelldaten im Bestellmodul.",
   "Authentifizierung und Autorisierung.",
   "Nebenläufigkeit (z. B. ein einheitliches Sperr- und Threading-Konzept).",
   "Protokollierung (Logging) und Nachvollziehbarkeit."
  ],
  "correct": [
   2,
   3,
   4
  ],
  "optExpl": [
   "Falsch: Die Versandkostenberechnung ist eine fachliche Aufgabe mit klarer Zuständigkeit. Dass mehrere Dialoge das Ergebnis anzeigen, macht sie nicht zum Querschnittsthema – sie gehört in einen zuständigen Baustein, den die Dialoge nutzen.",
   "Falsch: Die fachliche Validierung einer Bestellung betrifft nur das Bestellmodul und ist dort lokal gut aufgehoben. Querschnittsthemen zeichnen sich dagegen dadurch aus, dass sie viele Bausteine gleichermaßen betreffen.",
   "Richtig: Authentifizierung und Autorisierung betreffen praktisch alle Zugriffe auf das System. Ohne ein einheitliches Sicherheitskonzept würde jeder Baustein es anders lösen, was Lücken und Inkonsistenzen erzeugt.",
   "Richtig: Nebenläufigkeit betrifft viele Bausteine, die gemeinsam auf Ressourcen zugreifen. Ein systemweit einheitliches Sperr- und Threading-Konzept verhindert, dass unterschiedliche Lösungen zu Deadlocks oder Inkonsistenzen führen.",
   "Richtig: Logging betrifft nahezu jeden Baustein und braucht einheitliche Regeln für Format, Level und Inhalte. Nur dann lassen sich Abläufe über Bausteingrenzen hinweg nachvollziehen."
  ],
  "explanation": "Querschnittsthemen wie Logging, Sicherheit oder Nebenläufigkeit betreffen viele Bausteine und brauchen ein einheitliches Konzept. Fachliche Logik bleibt lokal – auch wenn ihr Ergebnis an mehreren Stellen angezeigt wird."
 },
 {
  "id": "c3q9",
  "chapter": 3,
  "lz": "LZ 03-03",
  "r": "R2",
  "type": "single",
  "q": "Ein Team beginnt mit der Gesamtsystemsicht, zerlegt sie in Subsysteme und verfeinert diese schrittweise zu Bausteinen. Welche Aussage trifft zu?",
  "options": [
   "Das ist ein Bottom-up-Vorgehen, weil zuerst die Struktur und erst danach die Details entstehen.",
   "In der Praxis wählt man genau eine der beiden Richtungen und hält sie konsequent durch, um Widersprüche zu vermeiden.",
   "Bottom-up eignet sich besser, wenn das Gesamtproblem noch unklar ist und zuerst grob strukturiert werden muss.",
   "Das ist ein Top-down-Vorgehen; Bottom-up würde umgekehrt vorhandene Detailbausteine zu größeren Einheiten zusammenfügen."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Hier sind die Begriffe vertauscht. Wer vom Gesamtsystem ausgeht und es schrittweise zerlegt, arbeitet top-down; bottom-up würde bei vorhandenen Detailbausteinen beginnen.",
   "Falsch: In der Praxis kombiniert man beide Richtungen iterativ, je nach Wissensstand. Man strukturiert z. B. top-down grob vor und integriert bottom-up vorhandene Bibliotheken oder Altsysteme.",
   "Falsch: Ein unklares Gesamtproblem grob zu strukturieren ist gerade die Stärke von Top-down. Bottom-up passt eher, wenn bereits Bausteine vorhanden sind, aus denen man größere Einheiten zusammensetzt.",
   "Richtig: Vom Ganzen ausgehend in Subsysteme und dann in Bausteine zu verfeinern ist Top-down. Bottom-up geht umgekehrt vor und setzt vorhandene Detailbausteine zu größeren Einheiten zusammen."
  ],
  "explanation": "Top-down zerlegt vom Ganzen ins Detail, Bottom-up setzt aus vorhandenen Teilen zusammen. In der Praxis werden beide iterativ kombiniert."
 },
 {
  "id": "c3q10",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zum Nutzen von Abstraktion und Modularisierung im Entwurf treffen zu?",
  "options": [
   "Sie verringern die Zahl der nötigen Schnittstellen, da jeder Baustein intern mehr selbst erledigt.",
   "Jede zusätzliche Abstraktionsschicht erhöht die Änderbarkeit, unabhängig davon, ob dahinter je eine zweite Implementierung entsteht.",
   "Sie machen Komplexität beherrschbar und erlauben, Bausteine unabhängig zu entwickeln und zu ändern.",
   "Sie ermöglichen, eine Implementierung hinter einer Abstraktion auszutauschen, ohne die Nutzer zu beeinträchtigen.",
   "Zu viele oder ungünstig gewählte Abstraktionen können ein System schwerer verständlich machen."
  ],
  "correct": [
   2,
   3,
   4
  ],
  "optExpl": [
   "Falsch: Modularisierung führt gerade zu expliziten Schnittstellen, über die die Module zusammenarbeiten. Ihr Nutzen liegt nicht in weniger Schnittstellen, sondern darin, dass diese klar definiert sind und Interna verbergen.",
   "Falsch: Abstraktionen ohne absehbaren Nutzen kosten Verständlichkeit und Aufwand, ohne die Änderbarkeit zu verbessern. Nach YAGNI führt man eine Abstraktion erst ein, wenn Austausch, Tests oder Variabilität sie tatsächlich rechtfertigen.",
   "Richtig: Zerlegt man ein System in Module mit klaren Schnittstellen, muss man jeweils nur einen Teil verstehen. Teams können dadurch Bausteine unabhängig voneinander entwickeln und ändern.",
   "Richtig: Nutzer hängen nur von der Abstraktion ab, nicht von der konkreten Implementierung. Diese lässt sich deshalb austauschen – etwa ein anderer Zahlungsanbieter hinter derselben Schnittstelle –, ohne die Nutzer anzupassen.",
   "Richtig: Abstraktion hat auch Kosten, denn jede zusätzliche Ebene muss verstanden werden. Zu viele oder ungünstig geschnittene Abstraktionen verschleiern, was das System eigentlich tut."
  ],
  "explanation": "Abstraktion und Modularisierung machen Komplexität beherrschbar und Implementierungen austauschbar – über explizite Schnittstellen. Zu viele oder unnötige Abstraktionen schaden aber Verständlichkeit und Aufwand."
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
   "Ein interaktiver Workflow, in dem der Nutzer den Ablauf zwischen den Schritten laufend frei verzweigt.",
   "Eine Verarbeitung mit komplexer, zustandsbehafteter Rückkopplung, bei der ein Schritt frühere Schritte gezielt beeinflusst.",
   "Eine Verarbeitung, in der alle Schritte fortlaufend einen gemeinsamen, veränderlichen Zustand lesen und schreiben."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Pipes and Filters ist für eine gerichtete Kette unabhängiger Verarbeitungsschritte gedacht, bei der die Ausgabe eines Filters die Eingabe des nächsten ist. Ein typisches Beispiel ist eine Importstrecke aus Einlesen, Validieren, Umwandeln und Speichern.",
   "Falsch: Das Muster beschreibt eine fest verdrahtete, gerichtete Verarbeitungskette. Für interaktive Abläufe, in denen der Nutzer frei zwischen Schritten verzweigt, eignen sich eher dialog- oder workfloworientierte Ansätze.",
   "Falsch: Zustandsbehaftete Rückkopplungen, bei denen ein Schritt frühere Schritte beeinflusst, passen nicht zur gerichteten, weitgehend zustandslosen Kette. Sie würden die Filter voneinander abhängig machen und ihre Austauschbarkeit aufheben.",
   "Falsch: Ein von allen Schritten gelesener und geschriebener gemeinsamer Zustand widerspricht der Unabhängigkeit der Filter. Das entspräche eher einem Blackboard- oder Shared-Repository-Ansatz als Pipes and Filters."
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
   "Asynchrone Kommunikation koppelt Sender und Empfänger zeitlich enger, da beide gleichzeitig verfügbar sein müssen.",
   "Bei synchroner Kommunikation ist der Aufrufer bis zur Antwort blockiert; asynchron entkoppelt das Absenden vom Verarbeiten zeitlich.",
   "Asynchrone Kommunikation ist verlässlicher, weil Nachrichten dabei nicht verloren gehen können.",
   "Ob ein Aufruf synchron oder asynchron ist, hängt allein davon ab, ob er lokal oder über das Netzwerk erfolgt."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Hier sind die Merkmale vertauscht. Dass Sender und Empfänger gleichzeitig verfügbar sein müssen, kennzeichnet synchrone Kommunikation; asynchrone Kommunikation entkoppelt beide gerade zeitlich.",
   "Richtig: Synchron wartet der Aufrufer blockierend auf die Antwort, z. B. bei einem REST-Aufruf. Asynchron schickt er etwa eine Nachricht in eine Queue und arbeitet weiter, während der Empfänger sie später verarbeitet.",
   "Falsch: Asynchrone Kommunikation garantiert für sich genommen keinen Nachrichtenerhalt. Ob Nachrichten verloren gehen können, hängt von der Infrastruktur ab, etwa von persistenten Queues und Zustellgarantien.",
   "Falsch: Synchron und asynchron beschreiben das Warteverhalten des Aufrufers, nicht den Ort des Aufrufs. Auch ein Netzwerkaufruf kann synchron sein, und ein lokaler Aufruf kann asynchron über eine Ereigniswarteschlange laufen."
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
   "Unbehandelt erschweren und verteuern sie künftige Änderungen.",
   "Sie entstehen vor allem durch mangelnde Fähigkeiten im Team und lassen sich daher durch Schulungen weitgehend vermeiden.",
   "Sie können sowohl bewusst (bekannte Abkürzung unter Termindruck) als auch unbewusst (fehlendes Wissen) entstehen.",
   "Es sind aufgeschobene Kompromisse oder Mängel in Code bzw. Architektur.",
   "Sie sollten vollständig abgebaut sein, bevor neue Features umgesetzt werden."
  ],
  "correct": [
   0,
   2,
   3
  ],
  "optExpl": [
   "Richtig: Wie bei finanziellen Schulden fallen „Zinsen“ an: Jede Änderung am betroffenen Code dauert länger und ist fehleranfälliger. Je länger die Schulden bestehen, desto teurer werden künftige Anpassungen.",
   "Falsch: Mangelndes Wissen ist nur eine von mehreren Ursachen. Technische Schulden entstehen auch durch bewusste Abkürzungen unter Termindruck oder dadurch, dass sich Anforderungen ändern und eine früher gute Lösung nicht mehr passt – das verhindern Schulungen nicht.",
   "Richtig: Technische Schulden können bewusst eingegangen werden, etwa als bekannte Abkürzung für einen Termin, oder unbewusst aus fehlendem Wissen entstehen. Bewusst eingegangene Schulden sollten dokumentiert und ihr Abbau eingeplant werden.",
   "Richtig: Technische Schulden sind aufgeschobene Kompromisse oder Mängel in Code oder Architektur. Sie funktionieren vorerst, erschweren aber die weitere Entwicklung, bis sie abgebaut werden.",
   "Falsch: Technische Schulden werden bewusst gemanagt und nach Nutzen und Risiko priorisiert. Ein vollständiger Abbau vor jedem neuen Feature ist weder nötig noch realistisch und würde die Lieferung von Mehrwert blockieren."
  ],
  "explanation": "Technische Schulden sind aufgeschobene Kompromisse, entstehen bewusst oder unbewusst und verteuern künftige Änderungen. Man managt und priorisiert sie, statt sie pauschal vor jedem Feature komplett abzubauen."
 },
 {
  "id": "c3q14",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen treffen auf das Dependency-Inversion-Prinzip (DIP) zu?",
  "options": [
   "Dadurch werden konkrete Implementierungen leicht austauschbar (z. B. per Dependency Injection).",
   "Das DIP ist erfüllt, sobald ein Framework für Dependency Injection eingesetzt wird.",
   "High-Level- und Low-Level-Module hängen von gemeinsamen Abstraktionen ab; Abstraktionen hängen nicht von Details ab, sondern Details von Abstraktionen.",
   "Objekte sollen ihre Abhängigkeiten von außen übergeben bekommen, statt sie selbst zu erzeugen.",
   "Die Abstraktion gehört fachlich zum Low-Level-Modul, da dieses sie implementiert."
  ],
  "correct": [
   0,
   2
  ],
  "optExpl": [
   "Richtig: Weil das High-Level-Modul nur von einer Abstraktion abhängt, kann man die konkrete Implementierung dahinter austauschen. Dependency Injection ist dafür eine typische Technik, etwa um im Test eine Fake-Implementierung einzusetzen.",
   "Falsch: Ein DI-Framework verdrahtet nur Objekte miteinander. Hängt das High-Level-Modul trotzdem direkt von konkreten Klassen ab, ist das DIP verletzt – entscheidend ist die Richtung der Abhängigkeiten, nicht das Werkzeug.",
   "Richtig: Das ist die Kernaussage des DIP. Statt dass die Fachlogik direkt von der Datenbankklasse abhängt, hängen beide von einer gemeinsamen Abstraktion ab, und die Detailklasse richtet sich nach dieser Abstraktion.",
   "Falsch: Das beschreibt Dependency Injection, also eine Technik, mit der man Abhängigkeiten von außen übergibt. DI unterstützt das DIP, ist aber nicht das Prinzip selbst – das DIP betrifft die Richtung der Abhängigkeiten zwischen Abstraktionen und Details.",
   "Falsch: Gerade umgekehrt: Die Abstraktion wird von der nutzenden High-Level-Seite definiert bzw. ihr zugeordnet. Das Low-Level-Modul implementiert sie nur – erst so zeigt die Abhängigkeit vom Detail zur Abstraktion und wird tatsächlich umgekehrt."
  ],
  "explanation": "DIP: Beide Ebenen hängen von Abstraktionen ab, die zur nutzenden High-Level-Seite gehören; Details hängen von Abstraktionen ab. Dependency Injection ist eine Technik, die das unterstützt – ein DI-Framework allein erfüllt das Prinzip nicht."
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
    "text": "Microservices",
    "cat": 0
   },
   {
    "text": "Pipes and Filters",
    "cat": 0
   },
   {
    "text": "Dependency Inversion Principle",
    "cat": 1
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
   "SoC ist nur ein anderer Name für das Single Responsibility Principle.",
   "Fachliche und technische Belange (z. B. Geschäftsregeln und Persistenz) zu trennen ist eine typische Anwendung.",
   "Sie fördert lose Kopplung und hohe Kohäsion und erleichtert so Änderungen und Tests.",
   "Unterschiedliche Belange werden in getrennten, jeweils zuständigen Bausteinen behandelt.",
   "SoC bedeutet, dass jeder Belang in einer eigenen technischen Schicht umgesetzt werden muss."
  ],
  "correct": [
   1,
   2,
   3
  ],
  "optExpl": [
   "Falsch: SoC ist das allgemeinere Prinzip und gilt auf allen Ebenen, vom System bis zur Klasse. Das SRP ist eine spezifischere Ausprägung auf Klassen- bzw. Bausteinebene, die über Änderungsgründe argumentiert.",
   "Richtig: Geschäftsregeln und Persistenz ändern sich aus unterschiedlichen Gründen und in unterschiedlichem Tempo. Trennt man sie, kann man z. B. die Datenbank wechseln, ohne die Fachlogik anzufassen.",
   "Richtig: Wenn jeder Baustein nur einen Belang behandelt, ist er in sich zusammenhängend (hohe Kohäsion) und braucht wenig Wissen über andere (lose Kopplung). Änderungen bleiben dadurch lokal, und Bausteine lassen sich isoliert testen.",
   "Richtig: Das ist der Kern von SoC: Jeder Belang wird in einem dafür zuständigen Baustein behandelt. So weiß man, wo eine Änderung vorzunehmen ist, und vermischt keine unabhängigen Themen.",
   "Falsch: Technische Schichten sind nur eine mögliche Umsetzung von SoC. Belange lassen sich genauso über Module, Klassen, Komponenten oder Services trennen, etwa auch fachlich statt technisch."
  ],
  "explanation": "SoC trennt unterschiedliche Belange in zuständige Bausteine, etwa Fachliches von Technischem. Es ist allgemeiner als SRP und nicht an Schichten gebunden."
 },
 {
  "id": "c3q16",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R3",
  "type": "single",
  "q": "Welche Aussage beschreibt das Prinzip DRY am genauesten?",
  "options": [
   "Zwei syntaktisch gleiche Codeabschnitte müssen immer zusammengeführt werden, auch wenn sie unterschiedliche fachliche Gründe haben.",
   "DRY verlangt, jede Duplikation zu beseitigen, auch wenn zwei unabhängige Bausteine dadurch über einen gemeinsamen Hilfsbaustein gekoppelt werden.",
   "Jedes Stück Wissen bzw. jede Entscheidung hat eine einzige, eindeutige, autoritative Repräsentation im System.",
   "DRY bezieht sich nur auf Code; doppelte Information in Konfiguration oder Dokumentation ist davon nicht betroffen."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Syntaktisch gleicher Code mit unterschiedlichen fachlichen Gründen ist kein doppeltes Wissen, sondern zufällige Ähnlichkeit. Führt man ihn zusammen, koppelt man fachlich Unabhängiges, das sich später getrennt ändern muss.",
   "Falsch: DRY ist gegen andere Prinzipien wie lose Kopplung abzuwägen. Wird jede Duplikation über einen gemeinsamen Hilfsbaustein beseitigt, entstehen Abhängigkeiten, die mehr schaden können als die Duplikation selbst.",
   "Richtig: DRY zielt darauf, dass jedes Stück Wissen genau eine autoritative Repräsentation hat. Ist z. B. eine Steuerregel nur an einer Stelle definiert, muss sie bei einer Änderung auch nur dort angepasst werden.",
   "Falsch: DRY betrifft jede Repräsentation von Wissen, nicht nur Code. Doppelt gepflegte Informationen in Konfiguration, Datenbankschemata oder Dokumentation laufen genauso auseinander und führen zu Widersprüchen."
  ],
  "explanation": "DRY: jedes Wissen hat genau eine autoritative Repräsentation – in Code, Konfiguration oder Doku. Es geht um dasselbe Wissen, nicht um zufällig gleichen Code, und ist gegen lose Kopplung abzuwägen."
 },
 {
  "id": "c3q17",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R3",
  "type": "single",
  "q": "Was besagt das Prinzip YAGNI?",
  "options": [
   "Bereits vorhandene, aber ungenutzte Funktionen dürfen aus Stabilitätsgründen nicht entfernt werden.",
   "Jede Anforderung von Beginn an maximal generisch und konfigurierbar umsetzen.",
   "Möglichst viele Erweiterungspunkte vorab vorsehen, um spätere Änderungen billig zu halten.",
   "Keine Funktionalität auf Vorrat bauen, die aktuell (noch) nicht gebraucht wird."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Ob ungenutzte Funktionen entfernt werden dürfen, ist eine andere Frage als YAGNI. YAGNI betrifft das Bauen neuer Funktionalität auf Vorrat – ungenutzter Code wird im Sinne einfacher Wartung eher entfernt als bewahrt.",
   "Falsch: Vorsorgliche Maximal-Generik ist genau das, wovor YAGNI warnt. Sie kostet Entwicklungszeit und Verständlichkeit für Variabilität, die oft nie benötigt wird.",
   "Falsch: Erweiterungspunkte auf Vorrat sind spekulative Generalisierung. Sie erhöhen die Komplexität sofort, während ihr Nutzen ungewiss ist – YAGNI empfiehlt, sie erst einzuführen, wenn eine konkrete Anforderung sie verlangt.",
   "Richtig: YAGNI („You Ain't Gonna Need It“) heißt, nur zu bauen, was aktuell tatsächlich gebraucht wird. Das hält das System einfach; wird später mehr benötigt, ergänzt man es dann gezielt."
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
   "Sie haben neben Vorteilen auch Nachteile, die man beim Einsatz bewusst abwägen muss.",
   "Sie beschreiben die Lösung so konkret, dass sie ohne Anpassung auf jedes System übertragbar ist.",
   "Ein System sollte möglichst nur ein einziges Architekturmuster verwenden, um die konzeptionelle Integrität zu wahren."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Architekturmuster beschreiben bewährte Lösungen für Strukturprobleme, die immer wieder auftreten. Man muss diese Lösungen nicht neu erfinden, sondern kann auf gesammelte Erfahrung zurückgreifen.",
   "Richtig: Ein Mustername wie „Schichten“ oder „Pipes and Filters“ transportiert in einem Wort eine ganze Struktur und erleichtert so die Kommunikation. Ein Muster hilft aber nur, wenn es zum konkreten Problem und Kontext passt.",
   "Richtig: Jedes Muster bringt Trade-offs mit sich – Schichten kosten z. B. Indirektion, Microservices erhöhen die Betriebskomplexität. Diese Nachteile müssen bewusst gegen die Vorteile abgewogen werden.",
   "Falsch: Muster sind abstrakte Lösungsschablonen, keine fertigen Bauanleitungen. Sie müssen an den jeweiligen Kontext, die Anforderungen und Randbedingungen angepasst werden.",
   "Falsch: Systeme kombinieren häufig mehrere Muster, etwa Microservices, die intern geschichtet sind und über Publish/Subscribe kommunizieren. Konzeptionelle Integrität bedeutet Konsistenz der Lösungen, nicht die Beschränkung auf ein einziges Muster."
  ],
  "explanation": "Architekturmuster sind bewährte, abstrakte Lösungsschablonen mit gemeinsamem Vokabular, Vor- und Nachteilen. Sie müssen zum Kontext passen und angepasst werden; Systeme kombinieren oft mehrere Muster."
 },
 {
  "id": "c3q19",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R3",
  "type": "single",
  "q": "Was trennt das Muster Model-View-Controller (MVC)?",
  "options": [
   "Es entspricht exakt den drei technischen Schichten Präsentation, Anwendung und Datenhaltung.",
   "Es verschmilzt Modell und View bewusst zu einer gemeinsamen Komponente.",
   "Die View greift ausschließlich über den Controller auf das Modell zu und kennt das Modell nie direkt.",
   "Datenmodell, Darstellung (View) und Steuerung/Interaktion (Controller)."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: MVC und die Drei-Schichten-Architektur sind unterschiedliche Sichten. MVC strukturiert vor allem die Interaktion mit der Benutzungsoberfläche und liegt typischerweise innerhalb der Präsentationsschicht, statt ihr 1:1 zu entsprechen.",
   "Falsch: MVC trennt Modell und View gerade, damit sich Daten und Darstellung unabhängig ändern lassen. Dasselbe Modell kann so z. B. in mehreren Views angezeigt werden.",
   "Falsch: In der klassischen MVC-Ausprägung darf die View das Modell direkt kennen und beobachten, um sich bei Änderungen zu aktualisieren. Ein Zugriff ausschließlich über den Controller ist eine mögliche Variante, aber keine Definitionsvoraussetzung.",
   "Richtig: MVC trennt die Zuständigkeiten Daten und Fachzustand (Model), Darstellung (View) sowie Steuerung bzw. Verarbeitung von Benutzereingaben (Controller). So lassen sich Darstellung und Interaktion ändern, ohne das Modell anzufassen."
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
   "Gemeinsame Nutzung eines Datenbankschemas, sodass Bausteine Daten direkt untereinander austauschen können.",
   "Feingranulare, „gesprächige“ Schnittstellen, über die Bausteine viele kleine Einzelaufrufe austauschen.",
   "Kommunikation über klar definierte Schnittstellen bzw. Abstraktionen.",
   "Abhängigkeiten von außen injizieren (Dependency Injection), statt Bausteine selbst instanziieren zu lassen.",
   "Eine zentrale Utility-Bibliothek, von der alle Bausteine abhängen, um Duplikation zu vermeiden.",
   "Ereignisbasierte (asynchrone) Kommunikation zwischen Bausteinen."
  ],
  "correct": [
   2,
   3,
   5
  ],
  "optExpl": [
   "Falsch: Ein gemeinsames Datenbankschema koppelt alle beteiligten Bausteine an dessen Struktur. Jede Schemaänderung kann dann alle Nutzer brechen, und die Bausteine lassen sich nicht mehr unabhängig ändern.",
   "Falsch: Gesprächige Schnittstellen legen viele Interna und Ablaufdetails offen, die der Aufrufer kennen und in der richtigen Reihenfolge nutzen muss. Grobgranulare, fachlich geschnittene Operationen koppeln loser und sind über das Netz zudem effizienter.",
   "Richtig: Klar definierte Schnittstellen bzw. Abstraktionen sind die Grundlage loser Kopplung. Bausteine kennen nur den Vertrag und nicht die Implementierung, sodass sich diese unabhängig ändern kann.",
   "Richtig: Erzeugt ein Baustein seine Abhängigkeiten nicht selbst, sondern bekommt sie übergeben, kennt er nur deren Abstraktion. Die konkrete Implementierung kann dadurch ausgetauscht werden, etwa im Test durch ein Testdouble.",
   "Falsch: Eine Utility-Bibliothek, von der alle Bausteine abhängen, wird zum zentralen Kopplungsknoten. Jede Änderung daran betrifft alle Bausteine – das Vermeiden von Duplikation erkauft man hier mit hoher Kopplung.",
   "Richtig: Bei ereignisbasierter Kommunikation kennt der Sender die Empfänger nicht und muss nicht auf sie warten. Das entkoppelt die Bausteine sowohl zeitlich als auch in ihrer gegenseitigen Kenntnis."
  ],
  "explanation": "Lose Kopplung fördern klare Schnittstellen, ereignisbasierte Kommunikation und Dependency Injection. Gemeinsame Schemata, zentrale Allzweck-Bibliotheken und gesprächige Schnittstellen erhöhen die Kopplung, auch wenn sie bequem oder DRY wirken."
 },
 {
  "id": "c3q21",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R2",
  "type": "multi",
  "q": "In einem System referenzieren sich die Bausteine A und B gegenseitig (zyklische Abhängigkeit). Welche Aussagen treffen zu?",
  "options": [
   "Der Zyklus ist unproblematisch, solange A und B vom selben Team gepflegt werden.",
   "Der Zyklus erschwert isoliertes Testen und unabhängiges Ändern; A und B lassen sich kaum getrennt verstehen oder wiederverwenden.",
   "Gehören A und B fachlich eng zusammen, kann auch das Zusammenlegen zu einem Baustein eine sinnvolle Lösung sein.",
   "In einer strengen Schichtenarchitektur ist ein solcher Zyklus zulässig, solange beide Bausteine in derselben Schicht liegen.",
   "Der Zyklus sollte aufgebrochen werden – etwa durch eine gemeinsame Abstraktion oder das Umkehren einer Abhängigkeit."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Falsch: Ein Zyklus ist ein strukturelles Problem, das unabhängig davon besteht, wer die Bausteine pflegt. Auch im selben Team lassen sich A und B nicht isoliert testen, ändern oder wiederverwenden.",
   "Richtig: Durch den Zyklus verschmelzen A und B faktisch zu einer Einheit: Wer A ändert oder testet, braucht immer auch B und umgekehrt. Getrennt verstehen oder in einem anderen Kontext wiederverwenden lassen sie sich kaum.",
   "Richtig: Ein Zyklus kann ein Hinweis darauf sein, dass der Schnitt falsch ist und A und B eigentlich eine Verantwortlichkeit bilden. Dann ist das Zusammenlegen zu einem Baustein eine legitime Lösung.",
   "Falsch: Schichtung regelt nur die Beziehungen zwischen Schichten, nicht die innerhalb einer Schicht. Auch dort erschweren Zyklen Testen, Ändern und Wiederverwenden und sind deshalb problematisch.",
   "Richtig: Ein Zyklus lässt sich aufbrechen, indem man eine gemeinsame Abstraktion einführt oder eine der Abhängigkeiten umkehrt, etwa per Dependency Inversion oder Callback. Danach zeigt die Abhängigkeit nur noch in eine Richtung."
  ],
  "explanation": "Zyklische Abhängigkeiten erschweren Testen, Ändern und Wiederverwenden – auch innerhalb einer Schicht und im selben Team. Lösungen: gemeinsame Abstraktion, Abhängigkeitsumkehr oder, wenn fachlich zusammengehörig, Zusammenlegen."
 },
 {
  "id": "c3q22",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zu Refactoring treffen zu?",
  "options": [
   "Refactoring plant man am besten als eigene Projektphase nach der Fertigstellung aller Features ein.",
   "Das nach außen beobachtbare Verhalten bleibt dabei unverändert.",
   "Es verbessert die interne Struktur des Codes.",
   "Automatisierte Tests sind eine wichtige Absicherung, um ungewollte Verhaltensänderungen früh zu erkennen.",
   "Auch das Umbenennen einer öffentlich genutzten API-Operation ist für deren Aufrufer folgenlos, solange die Funktion gleich bleibt."
  ],
  "correct": [
   1,
   2,
   3
  ],
  "optExpl": [
   "Falsch: Refactoring erfolgt kontinuierlich in kleinen Schritten als Teil der normalen Entwicklung. Schiebt man es in eine eigene Phase auf, wachsen die technischen Schulden weiter, und diese Phase wird unter Zeitdruck oft gestrichen.",
   "Richtig: Refactoring ändert per Definition nur die interne Struktur, nicht das nach außen beobachtbare Verhalten. Ändert sich das Verhalten, handelt es sich um eine funktionale Änderung und nicht mehr um Refactoring.",
   "Richtig: Ziel des Refactorings ist eine bessere interne Struktur, etwa verständlichere Namen, kleinere Methoden oder weniger Duplikation. Das senkt technische Schulden und erleichtert künftige Änderungen.",
   "Richtig: Weil das Verhalten gleich bleiben muss, braucht man eine Möglichkeit, das zu überprüfen. Automatisierte Tests zeigen nach jedem kleinen Schritt sofort, ob versehentlich etwas kaputtgegangen ist.",
   "Falsch: Eine öffentlich genutzte Operation umzubenennen bricht alle Aufrufer, auch wenn die Funktion gleich bleibt. Bei öffentlichen Schnittstellen braucht man Versionierung oder Übergangslösungen wie eine veraltete Alias-Operation."
  ],
  "explanation": "Refactoring verbessert die interne Struktur ohne Verhaltensänderung, abgesichert durch Tests, und erfolgt kontinuierlich. Öffentliche Schnittstellen zu ändern betrifft deren Nutzer und ist kein folgenloses internes Refactoring."
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
   "Es lohnt sich für jede Klasse, auch wenn absehbar nur eine einzige Implementierung existiert.",
   "Der Aufrufer muss die Semantik der Operation nicht mehr kennen, nur noch ihre Signatur."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Der Aufrufer kennt nur die Schnittstelle, nicht die konkrete Klasse dahinter. Deshalb lässt sich die Implementierung austauschen, etwa ein anderer Speicherdienst, ohne den Aufrufer anzupassen.",
   "Richtig: Wer gegen eine Schnittstelle programmiert, hängt nur vom Vertrag ab und nicht von internen Details der Implementierung. Änderungen hinter der Schnittstelle wirken sich deshalb nicht auf die Nutzer aus.",
   "Richtig: Hängt ein Baustein nur von einer Schnittstelle ab, kann man im Test statt der echten Abhängigkeit ein Testdouble (Mock, Stub) einsetzen. So lässt sich der Baustein ohne Datenbank oder externe Dienste prüfen.",
   "Falsch: Eine Schnittstelle ohne absehbaren Nutzen ist unnötige Abstraktion und widerspricht YAGNI. Sie lohnt sich dort, wo Austauschbarkeit, Testbarkeit oder eine Bausteingrenze sie rechtfertigen.",
   "Falsch: Eine Schnittstelle ist mehr als ihre Signatur; ihre Semantik mit Vor- und Nachbedingungen ist Teil des Vertrags. Der Aufrufer muss wissen, was eine Operation bewirkt, nur nicht, wie sie es umsetzt."
  ],
  "explanation": "Gegen Schnittstellen zu programmieren macht Implementierungen austauschbar, senkt die Kopplung und erleichtert Tests. Die Semantik bleibt Teil des Vertrags, und nicht jede Klasse braucht eine eigene Schnittstelle."
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
    "text": "Ereignisbasierte Kommunikation über einen Publish/Subscribe-Kanal",
    "cat": 1
   },
   {
    "text": "Ein Baustein erbt von einer konkreten Klasse eines anderen Bausteins",
    "cat": 0
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
    "text": "Separation of Concerns",
    "cat": 1
   },
   {
    "text": "Interface Segregation Principle",
    "cat": 0
   },
   {
    "text": "Liskov Substitution Principle",
    "cat": 0
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
   "OCP verlangt, dass jede Klasse genau eine einzige Verantwortlichkeit besitzt.",
   "Neues Verhalten wird bevorzugt über Abstraktionen/Polymorphie ergänzt, statt erprobten Code zu ändern.",
   "OCP schützt nur gegen vorhergesehene Arten von Änderungen; bei unvorhergesehenen muss man auch erprobten Code anpassen.",
   "OCP bedeutet, dass bestehender Code nach dem ersten Release nicht mehr geändert werden darf, auch nicht zur Fehlerbehebung.",
   "Bausteine sollen offen für Erweiterung, aber geschlossen für Änderung sein."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Falsch: Eine einzige Verantwortlichkeit pro Klasse fordert das Single Responsibility Principle, nicht das OCP. Das OCP betrifft, wie Bausteine erweitert werden können, ohne bestehenden Code zu ändern.",
   "Richtig: Neues Verhalten wird über Abstraktionen und Polymorphie ergänzt, etwa durch eine neue Implementierung einer bestehenden Schnittstelle. Der erprobte Code bleibt dabei unverändert und muss nicht erneut riskant angepasst werden.",
   "Richtig: Erweiterungspunkte lassen sich nur für Änderungen vorsehen, die man vorhergesehen hat. Kommt eine unerwartete Art von Änderung, muss man auch erprobten Code anpassen – eine bekannte Grenze des OCP.",
   "Falsch: Das OCP ist ein Entwurfsziel für Erweiterungen, kein Änderungsverbot. Fehlerbehebungen und Refactorings am bestehenden Code bleiben selbstverständlich möglich.",
   "Richtig: Das ist die Kernaussage des OCP: Bausteine sollen erweiterbar sein, ohne dass man ihren bestehenden Code ändern muss. Ein Beispiel ist eine Zahlungsabwicklung, der man eine neue Zahlungsart als zusätzliche Implementierung hinzufügt."
  ],
  "explanation": "OCP: offen für Erweiterung, geschlossen für Änderung – neues Verhalten über Abstraktionen. Es ist kein Änderungsverbot und wirkt nur für vorhergesehene Variationen; nicht verwechseln mit SRP."
 },
 {
  "id": "c3q25",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R3",
  "type": "single",
  "q": "Was empfiehlt das Interface-Segregation-Prinzip (ISP)?",
  "options": [
   "Clients sollen nur von Abstraktionen statt von konkreten Klassen abhängen.",
   "Schmale, rollenspezifische Schnittstellen, damit Clients nicht von Methoden abhängen, die sie gar nicht nutzen.",
   "Schnittstellen nach technischen Schichten statt nach den Bedürfnissen der Clients schneiden.",
   "Möglichst viele Operationen in einer zentralen Schnittstelle bündeln, um Konsistenz zu sichern."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Die Abhängigkeit von Abstraktionen statt von konkreten Klassen ist das Dependency-Inversion-Prinzip. Das ISP fragt dagegen, wie breit eine Schnittstelle ist und ob ein Client von Methoden abhängt, die er nicht nutzt.",
   "Richtig: Das ISP empfiehlt schmale, auf die Rolle des Clients zugeschnittene Schnittstellen. Ein Client, der nur lesen muss, hängt dann z. B. nicht von Schreibmethoden ab und ist von deren Änderungen nicht betroffen.",
   "Falsch: Das ISP schneidet Schnittstellen nach den Rollen und Bedürfnissen der Clients, nicht nach technischen Schichten. Ein Schnitt nach Schichten würde Clients weiterhin an Methoden binden, die sie nicht brauchen.",
   "Falsch: Eine große Sammel-Schnittstelle ist das Gegenteil des ISP. Jeder Client hängt dann von allen Operationen ab und kann durch Änderungen an Methoden betroffen sein, die er gar nicht nutzt."
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
   "LSP ist bereits erfüllt, sobald der Subtyp syntaktisch von der Basisklasse erbt und die Signaturen passen.",
   "Objekte eines Subtyps müssen anstelle ihres Basistyps verwendbar sein, ohne die Korrektheit des Programms zu brechen.",
   "LSP fordert, Vererbung generell durch Komposition zu ersetzen.",
   "Ein Subtyp darf die Vorbedingungen seiner Methoden verschärfen und die Nachbedingungen abschwächen."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Passende Signaturen sichern nur die syntaktische Kompatibilität. Das LSP ist eine Verhaltensfrage: Der Subtyp muss sich auch so verhalten, wie es Nutzer des Basistyps erwarten – das klassische Gegenbeispiel ist ein Quadrat, das von Rechteck erbt.",
   "Richtig: Das LSP verlangt, dass ein Subtyp seinen Basistyp überall verhaltenskonform ersetzen kann. Code, der mit dem Basistyp korrekt arbeitet, muss also auch mit jedem Subtyp korrekt arbeiten.",
   "Falsch: Das LSP regelt, unter welchen Bedingungen ein Subtyp seinen Basistyp ersetzen darf. Die Entwurfsfrage „Vererbung oder Komposition“ ist ein anderes Thema – Verletzungen des LSP können zwar ein Hinweis auf Komposition sein, das Prinzip fordert sie aber nicht.",
   "Falsch: Genau umgekehrt: Ein Subtyp darf Vorbedingungen nicht verschärfen und Nachbedingungen nicht abschwächen. Sonst würden Aufrufer, die sich auf den Vertrag des Basistyps verlassen, beim Subtyp scheitern."
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
   "Sender und Empfänger sind eng gekoppelt, da der Sender jeden registrierten Empfänger direkt und synchron aufruft.",
   "Sender veröffentlichen Ereignisse, ohne die Empfänger zu kennen; beliebig viele Empfänger können darauf reagieren – lose gekoppelt.",
   "Der Empfänger muss jede Ereignismeldung synchron quittieren, bevor der Sender fortfahren darf.",
   "Empfänger fragen den Sender in festen Intervallen aktiv ab (Polling)."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Ruft der Sender jeden Empfänger direkt und synchron auf, muss er alle Empfänger kennen und auf sie warten. Das ist enge Kopplung und widerspricht der Entkopplung, die Publish/Subscribe gerade erreichen will.",
   "Richtig: Bei Publish/Subscribe veröffentlicht der Sender Ereignisse, ohne zu wissen, wer sie empfängt. Beliebig viele Empfänger können sich dafür registrieren, und neue lassen sich hinzufügen, ohne den Sender zu ändern.",
   "Falsch: Eine erzwungene synchrone Quittierung würde den Sender wieder an die Empfänger binden und ihn bis zu deren Antwort blockieren. Das ist untypisch für Publish/Subscribe, das Sender und Empfänger gerade zeitlich entkoppelt.",
   "Falsch: Beim Polling fragen Empfänger aktiv und regelmäßig nach, ob es Neues gibt. Ereignisgetriebene Muster arbeiten umgekehrt: Ereignisse werden veröffentlicht und den Empfängern zugestellt, sobald sie eintreten."
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
   "Client und Server müssen im selben Prozess auf demselben Rechner ausgeführt werden.",
   "Der Server nimmt von sich aus Verbindungen zu den Clients auf und stößt die Interaktion an.",
   "Anfragende Clients nutzen Dienste eines bereitstellenden Servers über eine definierte Schnittstelle.",
   "Alle Knoten sind gleichrangig und bieten sich gegenseitig dieselben Dienste an."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Client und Server laufen typischerweise in getrennten Prozessen und häufig auf verschiedenen Rechnern, die über ein Netzwerk kommunizieren. Gerade diese Trennung ist ein Grund für das Muster – etwa um einen zentralen Dienst vielen Clients bereitzustellen.",
   "Falsch: Im Client-Server-Muster verhält sich der Server reaktiv: Er wartet auf Anfragen und beantwortet sie. Die Interaktion geht vom Client aus – ein Server, der selbst Verbindungen aufbaut, kehrt die Rollen um.",
   "Richtig: Der Kern des Musters ist die Rollenverteilung: Clients fordern Dienste an, der Server stellt sie über eine definierte Schnittstelle bereit. Ein Webbrowser, der Seiten von einem Webserver abruft, ist das klassische Beispiel.",
   "Falsch: Gleichrangige Knoten, die sich gegenseitig dieselben Dienste anbieten, beschreiben das Peer-to-Peer-Muster. Client-Server lebt dagegen gerade von der asymmetrischen Rollenverteilung zwischen anfragendem Client und bereitstellendem Server."
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
   "Komposition ist vor allem dann vorzuziehen, wenn zwischen den Typen eine echte „ist-ein“-Beziehung besteht.",
   "Komposition vermeidet die enge Bindung und Fragilität tiefer Vererbungshierarchien.",
   "Bei Komposition erbt das umschließende Objekt automatisch alle Methoden seiner Bestandteile.",
   "Verhalten lässt sich oft besser durch das Zusammensetzen von Objekten erreichen als durch tiefe Vererbung.",
   "Komposition erlaubt, Verhalten zur Laufzeit auszutauschen (z. B. über das Strategy-Muster)."
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Falsch: Hier sind die Fälle vertauscht. Eine echte „ist-ein“-Beziehung ist gerade der Fall, in dem Vererbung angemessen sein kann; Komposition passt zu „hat-ein“- bzw. „nutzt-ein“-Beziehungen.",
   "Richtig: Tiefe Vererbungshierarchien koppeln Unterklassen eng an die Interna ihrer Basisklassen – eine Änderung oben kann unten unerwartet brechen (fragile base class). Komposition bindet nur an die Schnittstelle des Bestandteils und vermeidet diese Fragilität.",
   "Falsch: Bei Komposition wird nichts automatisch geerbt – das wäre Vererbung. Das umschließende Objekt delegiert explizit an seine Bestandteile und entscheidet selbst, welche Funktionalität es nach außen anbietet.",
   "Richtig: Kleine, spezialisierte Objekte lassen sich flexibel kombinieren, statt jede Verhaltensvariante in eine eigene Unterklasse zu gießen. So vermeidet man die „Klassenexplosion“, die tiefe Vererbung bei vielen Kombinationen erzeugt.",
   "Richtig: Weil der Bestandteil nur über eine Schnittstelle angesprochen wird, lässt er sich zur Laufzeit austauschen. Beim Strategy-Muster wird etwa ein Sortier- oder Preisberechnungsverfahren je nach Situation eingesetzt – mit Vererbung ist dieses Verhalten fest zur Übersetzungszeit gebunden."
  ],
  "explanation": "Komposition vor Vererbung: Zusammensetzen ist flexibler, loser gekoppelt und zur Laufzeit austauschbar. Vererbung bleibt bei echten „ist-ein“-Beziehungen legitim; bei Komposition wird explizit delegiert, nicht geerbt."
 },
 {
  "id": "c3q30",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R3",
  "type": "multi",
  "q": "Welche Aussagen zu zustandslosen (stateless) Diensten treffen zu?",
  "options": [
   "Das erleichtert horizontale Skalierung und Lastverteilung.",
   "Anfragen können auf beliebige, gleichwertige Instanzen verteilt werden.",
   "Zustand, der über eine einzelne Anfrage hinaus nötig ist, wird bewusst nach außen ausgelagert (z. B. Datenbank, Cache, Token).",
   "Für Anwendungen mit Benutzersitzungen sind zustandslose Dienste ungeeignet, da sie keinen Sitzungszustand nutzen können.",
   "Der Sitzungszustand wird fest an die Instanz gebunden, die die erste Anfrage bearbeitet hat (Sticky Sessions als Wesensmerkmal)."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Da keine Instanz einen eigenen Zustand hält, kann man bei steigender Last einfach weitere Instanzen hinzufügen. Ein Load Balancer muss dabei nicht berücksichtigen, welche Instanz welche Daten kennt.",
   "Richtig: Ohne Instanzzustand ist jede Instanz gleichwertig, sodass jede Anfrage von jeder Instanz bearbeitet werden kann. Fällt eine Instanz aus, übernehmen die anderen ohne Datenverlust.",
   "Richtig: Zustandslos heißt nicht, dass es keinen Zustand gibt, sondern dass er nicht in der Dienstinstanz liegt. Er wird bewusst in eine Datenbank, einen verteilten Cache oder ein vom Client mitgeschicktes Token ausgelagert.",
   "Falsch: Sitzungszustand lässt sich auslagern, etwa in ein Token (z. B. JWT) oder einen verteilten Cache. Sitzungen sind daher auch mit zustandslosen Diensten problemlos möglich – nur liegt der Zustand eben nicht in der Instanz.",
   "Falsch: Sticky Sessions binden den Zustand an eine bestimmte Instanz und sind damit das Gegenteil von zustandslos. Sie erschweren Skalierung und Ausfallsicherheit, weil Anfragen nicht mehr frei verteilt werden können."
  ],
  "explanation": "Zustandslose Dienste halten keinen Zustand in der Instanz; benötigter Zustand wird ausgelagert. Das erleichtert Skalierung und funktioniert auch für Sitzungen – Sticky Sessions sind das Gegenmodell."
 },
 {
  "id": "c3q31",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R1",
  "type": "multi",
  "q": "Welche Eigenschaften fördern strukturell die Wartbarkeit bzw. Änderbarkeit eines Systems?",
  "options": [
   "Ein zentraler Steuerungsbaustein, der alle Abläufe koordiniert und dafür alle anderen Bausteine direkt kennt.",
   "Hohe Kohäsion je Baustein (zusammengehörige Aufgaben sind gebündelt).",
   "Gemeinsame Basisklassen, von denen möglichst viele Bausteine erben, um Code zu sparen.",
   "Geringe Kopplung zwischen den Bausteinen.",
   "Klar definierte, stabile Schnittstellen, hinter denen die Implementierung austauschbar bleibt."
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Falsch: Ein allwissender Steuerungsbaustein wird zum Kopplungsknoten, weil er alle anderen Bausteine direkt kennt. Jede Änderung irgendwo im System betrifft ihn – das ist das Gegenteil von lokal begrenzten Änderungen.",
   "Richtig: Hohe Kohäsion bündelt zusammengehörige Aufgaben in einem Baustein. Eine fachliche Änderung betrifft dann meist nur diesen einen Baustein, statt über viele verstreut zu sein.",
   "Falsch: Breite Implementierungsvererbung spart zwar Code, koppelt aber viele Bausteine an die Interna der Basisklasse (fragile base class). Eine Änderung an der Basisklasse kann dann alle Erben gleichzeitig brechen – Code-Ersparnis ist kein Maß für Änderbarkeit.",
   "Richtig: Je weniger Bausteine voneinander abhängen, desto weniger breitet sich eine Änderung aus. Geringe Kopplung ist damit neben hoher Kohäsion der zentrale strukturelle Hebel für Wartbarkeit.",
   "Richtig: Stabile Schnittstellen trennen das „Was“ vom „Wie“: Nutzer verlassen sich nur auf den Vertrag, nicht auf die Implementierung. Diese lässt sich dann austauschen oder umbauen, ohne dass Nutzer angepasst werden müssen."
  ],
  "explanation": "Wartbarkeit fördern hohe Kohäsion, stabile Schnittstellen und geringe Kopplung. Zentrale Allwissende-Steuerung und breite Implementierungsvererbung erhöhen die Kopplung, auch wenn sie Code sparen."
 },
 {
  "id": "c3q32",
  "chapter": 3,
  "lz": "LZ 03-10",
  "r": "R3",
  "type": "single",
  "q": "Wozu dienen Resilienz-Muster wie Timeout, Retry oder Circuit Breaker?",
  "options": [
   "Retry ist für jede Operation unbedenklich, da ein wiederholter Aufruf dasselbe Ergebnis liefert wie der erste.",
   "Zum robusten Umgang mit Fehlern und Ausfällen, besonders in verteilten Systemen.",
   "Retry sollte so konfiguriert werden, dass fehlgeschlagene Aufrufe möglichst oft und ohne Pause sofort wiederholt werden.",
   "Ein Circuit Breaker beschleunigt fehlerfreie Aufrufe, indem er deren Ergebnisse zwischenspeichert (Caching)."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Retry ist nur bei idempotenten Operationen unbedenklich, also wenn eine Wiederholung denselben Effekt hat wie ein einzelner Aufruf. Bei nicht idempotenten Operationen drohen z. B. doppelte Buchungen oder Bestellungen.",
   "Richtig: Timeout, Retry und Circuit Breaker sind Resilienz-Muster für den robusten Umgang mit Fehlern und Ausfällen. Gerade in verteilten Systemen, in denen Netzwerk oder Nachbardienste jederzeit gestört sein können, verhindern sie, dass sich ein Fehler kaskadenartig ausbreitet.",
   "Falsch: Sofortige, unbegrenzte Wiederholungen können einen ohnehin angeschlagenen Dienst zusätzlich überlasten und den Ausfall verschlimmern. Üblich sind eine begrenzte Anzahl Versuche und ein Backoff, also wachsende Wartezeiten zwischen den Versuchen.",
   "Falsch: Hier wird der Circuit Breaker mit Caching verwechselt. Ein Circuit Breaker unterbricht nach gehäuften Fehlern Aufrufe an einen gestörten Dienst, damit dieser sich erholen kann und der Aufrufer schnell scheitert statt zu blockieren."
  ],
  "explanation": "Timeout, Retry und Circuit Breaker erhöhen die Robustheit verteilter Systeme. Retry braucht Idempotenz und Backoff; ein Circuit Breaker schützt vor Folgefehlern und ist kein Cache."
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
    "text": "Ein Ereignis wird publiziert; Empfänger verarbeiten es zu einem späteren Zeitpunkt.",
    "cat": 1
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
    "text": "Der Aufrufer blockiert, bis das Ergebnis vorliegt.",
    "cat": 0
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
   "Es kapselt den Zugriff auf ein Objekt und kontrolliert ihn stellvertretend (z. B. Lazy Loading, Zugriffsschutz).",
   "Es übersetzt zwischen zwei zueinander inkompatiblen Schnittstellen, damit sie zusammenarbeiten.",
   "Es verhindert, dass Clients bei Bedarf weiterhin direkt auf einzelne Klassen des Subsystems zugreifen.",
   "Es bietet einen vereinfachten, einheitlichen Zugang zu einem komplexeren Subsystem."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Das beschreibt den Proxy, nicht die Fassade. Ein Proxy steht mit derselben Schnittstelle stellvertretend vor genau einem Objekt und kontrolliert den Zugriff, etwa für Lazy Loading oder Zugriffsschutz.",
   "Falsch: Das beschreibt den Adapter. Er übersetzt zwischen zwei inkompatiblen Schnittstellen, während eine Fassade eine neue, vereinfachte Schnittstelle vor ein ganzes Subsystem setzt.",
   "Falsch: Eine Fassade bietet einen bequemen Zugang, schließt den direkten Zugriff auf das Subsystem aber nicht zwingend aus. Clients mit Spezialbedarf können weiterhin die einzelnen Klassen nutzen.",
   "Richtig: Eine Fassade bündelt die Komplexität eines Subsystems hinter einer einfachen, einheitlichen Schnittstelle. Clients müssen dann nicht mehr viele einzelne Klassen und ihr Zusammenspiel kennen, was die Kopplung an das Subsystem senkt."
  ],
  "explanation": "Fassade = vereinfachter Zugang zu einem Subsystem. Abgrenzen: Adapter (übersetzt Schnittstellen), Proxy (Stellvertreter mit gleicher Schnittstelle). Eine Fassade schließt direkten Zugriff nicht zwingend aus."
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
   "Ein Modul entspricht immer genau einem deploybaren Artefakt.",
   "Module können ihrerseits aus weiteren Modulen bestehen (hierarchische Zerlegung).",
   "Module sollten möglichst klein sein; eine Klasse pro Modul ist der Idealfall."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Richtig: Ein Modul fasst fachlich oder technisch Zusammengehöriges zusammen und macht es nur über eine definierte Schnittstelle zugänglich. Diese hohe Kohäsion sorgt dafür, dass das Modul eine klar umrissene Verantwortung hat.",
   "Richtig: Die Schnittstelle ist der Vertrag mit den Nutzern; alles dahinter ist Implementierungsdetail. Solange der Vertrag stabil bleibt, kann der interne Aufbau umgebaut werden, ohne dass Nutzer etwas merken.",
   "Falsch: Modul und Artefakt sind verschiedene Konzepte: Das Modul gehört zur Bausteinsicht, das deploybare Artefakt zur Verteilungssicht. Mehrere Module können in einem Artefakt liegen – etwa die Module eines modularen Monolithen.",
   "Richtig: Modularisierung ist hierarchisch: Ein Modul kann wiederum aus Untermodulen bestehen, die man bei Bedarf weiter verfeinert. Genau so entsteht die Ebenenstruktur der Bausteinsicht mit Black- und Whitebox-Darstellungen.",
   "Falsch: Die Größe eines Moduls ergibt sich aus seiner Verantwortung, nicht aus einer Faustregel wie „eine Klasse pro Modul“. Zu kleine Module zerstückeln zusammengehörige Logik und erhöhen dadurch die Kopplung zwischen ihnen."
  ],
  "explanation": "Ein Modul bündelt Zusammengehöriges hinter einer stabilen Schnittstelle und kann selbst aus Modulen bestehen. Es ist kein Synonym für Artefakt, und seine Größe richtet sich nach der Verantwortung."
 },
 {
  "id": "c3q35",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zum Trade-off zwischen Monolith und Microservices treffen zu?",
  "options": [
   "Microservices können unabhängig deployt und skaliert werden, erhöhen aber die Betriebskomplexität.",
   "Ein modularer Monolith kann intern klare Baustein-Grenzen haben, wird aber weiterhin als eine Einheit deployt.",
   "Microservices vereinfachen die Datenkonsistenz, da jeder Service nur noch seine eigenen Daten verwaltet.",
   "Ein modularer Monolith lässt sich später kaum in Services aufteilen, da seine Bausteine im selben Prozess laufen.",
   "Ein Monolith lässt sich meist einfacher end-to-end testen und als Ganzes betreiben."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Richtig: Microservices lassen sich einzeln deployen und gezielt dort skalieren, wo Last anfällt. Erkauft wird das mit Betriebskomplexität: viele Deployments, Netzwerkkommunikation, verteiltes Monitoring und Fehlersuche über Servicegrenzen hinweg.",
   "Richtig: Ein modularer Monolith trennt fachliche Bausteine intern sauber, bleibt aber eine einzige Deployment-Einheit. Er verbindet damit klare Strukturen mit dem einfachen Betrieb eines Monolithen.",
   "Falsch: Getrennte Datenhaltung erschwert gerade die Konsistenz über Servicegrenzen hinweg. Geschäftsvorgänge, die mehrere Services betreffen, erfordern verteilte Abstimmung oder führen zu Eventual Consistency.",
   "Falsch: Das Gegenteil ist der Fall: Klare Modulgrenzen machen eine spätere Aufteilung leichter, weil die Schnittlinien schon existieren. Der modulare Monolith gilt deshalb als typischer Ausgangspunkt auf dem Weg zu Microservices.",
   "Richtig: Ein Monolith läuft als ein Prozess, sodass End-to-End-Tests, lokale Ausführung und Betrieb deutlich einfacher sind. Netzwerkfehler zwischen Bausteinen, verteilte Transaktionen und viele Deployments fallen weg."
  ],
  "explanation": "Monolith: einfacher zu testen und zu betreiben. Microservices: unabhängig deploybar, aber betrieblich komplexer und mit schwierigerer Konsistenz. Ein modularer Monolith hat klare Grenzen und ist ein guter Ausgangspunkt für eine spätere Aufteilung."
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
   "Muster lassen sich unabhängig von den Qualitätszielen auswählen, da sie allgemein bewährt sind.",
   "Ein Muster ist stets im Kontext seiner Trade-offs zu bewerten; ein falsch gewähltes Muster kann schaden.",
   "Je mehr Muster ein Entwurf kombiniert, desto robuster und zukunftssicherer wird er.",
   "Sie schaffen ein gemeinsames Vokabular, das die Kommunikation im Team erleichtert."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Muster beschreiben Lösungen, die sich für wiederkehrende Probleme in vielen Projekten bewährt haben. Wer sie nutzt, muss nicht jedes Problem neu lösen und vermeidet bekannte Fallstricke.",
   "Falsch: Muster sind nicht pauschal „gut“, sondern fördern bestimmte Qualitäten und schwächen andere. Ein Cache verbessert z. B. Performanz, erschwert aber Konsistenz – deshalb richtet sich die Auswahl nach den Qualitätszielen.",
   "Richtig: Jedes Muster hat Vor- und Nachteile und passt nur zu bestimmten Problemen und Kontexten. Ein falsch gewähltes Muster bringt die Nachteile, ohne dass man den Nutzen braucht – etwa Microservices für ein kleines Team mit einfacher Domäne.",
   "Falsch: Unnötige Muster erhöhen die Komplexität, ohne ein konkretes Problem zu lösen. Man setzt ein Muster ein, wo es ein tatsächliches Problem adressiert – nicht, um möglichst viele zu kombinieren.",
   "Richtig: Ein Mustername wie „Adapter“ oder „Pipes and Filters“ transportiert in einem Wort eine ganze Lösungsidee samt Trade-offs. Das macht Diskussionen und Dokumentation im Team kürzer und präziser."
  ],
  "explanation": "Muster bündeln Erfahrung und schaffen Vokabular, haben aber Trade-offs. Man wählt sie passend zu Problem und Qualitätszielen – viele Muster zu kombinieren macht einen Entwurf nicht automatisch besser."
 },
 {
  "id": "c3q37",
  "chapter": 3,
  "lz": "LZ 03-03",
  "r": "R3",
  "type": "multi",
  "q": "Welche Aussagen zu einem fachlich orientierten Schnitt (z. B. Bounded Contexts im DDD) treffen zu?",
  "options": [
   "Ein Begriff wie „Kunde“ muss in allen Bounded Contexts dieselbe Bedeutung und dieselben Attribute haben.",
   "Fachliche Grenzen können quer zu technischen Schichten verlaufen.",
   "Bausteine werden entlang fachlicher Grenzen/Domänen geschnitten, nicht primär nach technischen Schichten.",
   "Jeder Bounded Context muss als eigener Microservice umgesetzt werden.",
   "Ein Bounded Context grenzt ein Modell mit eigener, in sich konsistenter Sprache (Ubiquitous Language) ab."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Falsch: Gerade der Kern des Bounded-Context-Konzepts ist, dass ein Begriff je Kontext unterschiedlich modelliert sein darf. „Kunde“ kann im Vertrieb andere Attribute haben als in der Buchhaltung – ein einheitliches Modell für alle würde unübersichtlich und stark gekoppelt.",
   "Richtig: Ein fachlicher Baustein wie „Bestellung“ enthält typischerweise eigene Anteile aus UI, Logik und Persistenz. Die fachliche Grenze verläuft also senkrecht durch die technischen Schichten, statt mit ihnen zusammenzufallen.",
   "Richtig: Beim fachlichen Schnitt orientieren sich die Bausteine an Domänen und Geschäftsfähigkeiten, nicht an Technik wie „UI“, „Logik“, „Datenbank“. Fachliche Änderungen bleiben so meist auf einen Baustein begrenzt.",
   "Falsch: Bounded Contexts sind ein fachliches Konzept, keine Deployment-Vorgabe. Man kann sie ebenso als Module eines (modularen) Monolithen umsetzen; Microservices sind nur eine mögliche Umsetzung.",
   "Richtig: Innerhalb eines Bounded Context haben alle Begriffe eine eindeutige, konsistente Bedeutung, die Fachleute und Entwickler gemeinsam nutzen (Ubiquitous Language). Der Kontext markiert die Grenze, innerhalb der dieses Modell gilt."
  ],
  "explanation": "Fachlicher Schnitt: Bausteine entlang von Domänen, quer zu technischen Schichten; jeder Bounded Context hat seine eigene Sprache und darf Begriffe anders modellieren. Die Umsetzung als Microservice ist möglich, aber nicht zwingend."
 },
 {
  "id": "c3q38",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zur Kapselung (Encapsulation) treffen zu?",
  "options": [
   "Der interne Zustand ist nur über eine definierte Schnittstelle zugänglich; Interna bleiben verborgen.",
   "Daten und die auf ihnen operierenden Funktionen werden zu einer Einheit zusammengefasst.",
   "Kapselung und Information Hiding sind identisch; beide beziehen sich ausschließlich auf das Verbergen von Daten.",
   "Kapselung erlaubt, die interne Repräsentation zu ändern, ohne Nutzer der Schnittstelle zu brechen.",
   "Kapselung ist erreicht, sobald alle Felder privat sind und über öffentliche Getter und Setter zugänglich gemacht werden."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Richtig: Bei Kapselung greifen Nutzer nur über die definierte Schnittstelle auf ein Objekt oder Modul zu. Die internen Details bleiben verborgen, sodass niemand von ihnen abhängig werden kann.",
   "Richtig: Kapselung fasst Daten und die Operationen, die auf ihnen arbeiten, zu einer Einheit zusammen. So bleibt die Logik, die die Daten konsistent hält, an einer Stelle statt über das System verstreut.",
   "Falsch: Die Begriffe hängen eng zusammen, sind aber nicht identisch. Information Hiding (Parnas) verbirgt jede änderungsanfällige Entwurfsentscheidung – auch Algorithmen oder Formate, nicht nur Daten; Kapselung ist ein Mittel, das umzusetzen.",
   "Richtig: Weil Nutzer nur die Schnittstelle kennen, kann die interne Repräsentation geändert werden – etwa von einer Liste auf eine Map. Solange sich die Schnittstelle nicht ändert, bleiben alle Nutzer funktionsfähig.",
   "Falsch: Private Felder mit Gettern und Settern für jedes Feld legen die interne Repräsentation trotzdem offen. Formal ist alles privat, faktisch hängen die Nutzer an der Datenstruktur – echte Kapselung bietet fachliche Operationen statt Feldzugriffen."
  ],
  "explanation": "Kapselung bündelt Daten und Operationen und erlaubt Zugriff nur über eine Schnittstelle, sodass die Repräsentation änderbar bleibt. Pauschale Getter/Setter unterlaufen das; Information Hiding geht über Daten hinaus."
 },
 {
  "id": "c3q39",
  "chapter": 3,
  "lz": "LZ 03-09",
  "r": "R3",
  "type": "single",
  "q": "Ein bestehender Zahlungsdienstleister bietet eine Schnittstelle, die nicht zu der von Ihrem System erwarteten passt. Welches Muster ist hier einschlägig?",
  "options": [
   "Proxy – er stellt einen Stellvertreter mit gleicher Schnittstelle vor das eigentliche Objekt.",
   "Fassade – sie bietet einen vereinfachten Zugang zu einem komplexen Subsystem.",
   "Adapter – er übersetzt zwischen erwarteter und vorhandener Schnittstelle, ohne beide zu ändern.",
   "Publish/Subscribe – es entkoppelt Sender und Empfänger vollständig über Ereignisse."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Ein Proxy hat dieselbe Schnittstelle wie das Zielobjekt und kontrolliert nur den Zugriff darauf. Das Problem hier ist aber gerade eine abweichende Schnittstelle – die löst ein Proxy nicht.",
   "Falsch: Eine Fassade vereinfacht den Zugang zu einem komplexen Subsystem. Sie zielt auf Vereinfachung, nicht darauf, eine vorhandene Schnittstelle an eine fest erwartete Signatur anzupassen.",
   "Richtig: Der Adapter überbrückt genau die Inkompatibilität zweier Schnittstellen: Er bietet die von Ihrem System erwartete Schnittstelle an und übersetzt die Aufrufe auf die des Zahlungsdienstleisters. Keine der beiden Seiten muss geändert werden.",
   "Falsch: Publish/Subscribe entkoppelt Sender und Empfänger über Ereignisse. Es ändert aber nichts daran, dass die Schnittstelle des Dienstleisters nicht zur erwarteten passt – die Übersetzung wäre weiterhin nötig."
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
   "Wiederverwendbarkeit klar geschnittener Bausteine.",
   "Lokale Begrenzung der Auswirkung von Änderungen.",
   "Unabhängige Entwicklung einzelner Teile durch verschiedene Personen/Teams.",
   "Bausteine möglichst generisch auslegen, um maximale Wiederverwendung zu erreichen.",
   "Bessere Laufzeitperformance durch weniger Aufrufe zwischen Bausteinen."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Ein Baustein mit klarer Verantwortung und sauberer Schnittstelle lässt sich auch in anderem Kontext einsetzen. Wiederverwendbarkeit ist damit eine Folge guter Modularisierung.",
   "Richtig: Wenn Interna hinter Schnittstellen verborgen sind, bleibt eine Änderung meist auf das betroffene Modul begrenzt. Das ist eines der Kernziele der Modularisierung.",
   "Richtig: Klar abgegrenzte Module mit definierten Schnittstellen können parallel von verschiedenen Personen oder Teams entwickelt werden. Man muss sich nur über die Schnittstellen abstimmen, nicht über jedes Detail.",
   "Falsch: Übergeneralisierung erhöht die Komplexität und erzeugt oft Funktionen, die niemand braucht. Wiederverwendbarkeit folgt aus einem klaren Schnitt, nicht aus maximaler Generik – Letztere ist eher ein Risiko.",
   "Falsch: Modularisierung führt eher zu mehr Aufrufen über Schnittstellen, nicht zu weniger. Performance ist daher kein Ziel der Modularisierung, sondern bei Bedarf ein Trade-off, den man bewusst abwägt."
  ],
  "explanation": "Ziele der Modularisierung: unabhängige Entwicklung, Wiederverwendbarkeit und lokale Änderungen. Performance ist eher ein Trade-off, und maximale Generik ist kein Ziel, sondern ein Risiko."
 },
 {
  "id": "c3q41",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zum Trade-off bei starker Wiederverwendung treffen zu?",
  "options": [
   "Wiederverwendung senkt die Kopplung, da gemeinsame Funktionalität nur noch an einer Stelle existiert.",
   "Breit wiederverwendbare Bausteine werden oft allgemeiner und dadurch komplexer.",
   "Ein Baustein sollte für Wiederverwendung möglichst früh generalisiert werden, noch bevor konkrete weitere Nutzer feststehen.",
   "Viele Nutzer eines Bausteins erhöhen die (afferente) Kopplung an ihn und erschweren Änderungen.",
   "Ein wiederverwendbarer Baustein braucht stabile, gut versionierte Schnittstellen."
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Falsch: Wiederverwendung vermeidet zwar Duplikation, senkt aber nicht die Kopplung. Im Gegenteil: Alle Nutzer hängen nun an demselben Baustein, und jede Änderung daran betrifft sie alle.",
   "Richtig: Damit ein Baustein für viele Nutzer passt, muss er deren unterschiedliche Bedürfnisse abdecken, etwa über Konfiguration, Parameter oder Erweiterungspunkte. Diese Allgemeinheit kostet Komplexität in Entwicklung und Nutzung.",
   "Falsch: Vorzeitige Generalisierung ohne konkreten Bedarf ist Überkonstruktion (YAGNI – „You Ain't Gonna Need It“). Man ahnt dabei oft die falschen Variationspunkte voraus; sinnvoller ist es, erst bei konkreten weiteren Nutzern zu generalisieren.",
   "Richtig: Jeder Nutzer ist eine eingehende (afferente) Abhängigkeit auf den Baustein. Je mehr es sind, desto mehr Stellen muss man bei einer Änderung berücksichtigen – der Baustein wird schwer änderbar.",
   "Richtig: Weil viele Nutzer von einem wiederverwendeten Baustein abhängen, darf sich seine Schnittstelle nicht ständig ändern. Saubere Versionierung erlaubt Weiterentwicklung, ohne alle Nutzer gleichzeitig zur Anpassung zu zwingen."
  ],
  "explanation": "Starke Wiederverwendung hat Kosten: mehr Allgemeinheit und Komplexität, höhere afferente Kopplung, Bedarf an stabilen Schnittstellen. Sie vermeidet Duplikation, senkt aber nicht die Kopplung; vorzeitiges Generalisieren ist YAGNI-Verstoß."
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
    "text": "Breit gestreuter, duplizierter Code (Verletzung von DRY)",
    "cat": 1
   },
   {
    "text": "Zyklische Abhängigkeiten zwischen mehreren Bausteinen",
    "cat": 1
   },
   {
    "text": "Klar definierte, stabile Schnittstellen zwischen Bausteinen",
    "cat": 0
   },
   {
    "text": "Hohe Kohäsion innerhalb der Bausteine",
    "cat": 0
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
   "Zuerst den technischen Schnitt (Frameworks, Schichten) festlegen, da er die Grenzen für den fachlichen Schnitt vorgibt.",
   "Fachlichen und technischen Schnitt identisch halten, sodass jede fachliche Komponente genau einer technischen Schicht entspricht.",
   "Zuerst den fachlichen Schnitt (Problemraum) verstehen und die technische Lösung darauf ausrichten.",
   "Den fachlichen Schnitt an den Tabellen des bestehenden Datenbankschemas ausrichten, da die Daten am stabilsten sind."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Wer zuerst die Technik festlegt, zwingt die Fachlichkeit in technische Grenzen. Eine fachliche Änderung verteilt sich dann über viele Bausteine, statt lokal zu bleiben.",
   "Falsch: Fachliche Komponenten verlaufen typischerweise quer zu den technischen Schichten, denn eine Komponente wie „Bestellung“ braucht Anteile in UI, Logik und Persistenz. Beide Schnitte gleichzusetzen, zerreißt die Fachlichkeit über die Schichten.",
   "Richtig: Der fachliche Schnitt orientiert sich am Problemraum und bleibt meist länger stabil als die Technik. Richtet man die technische Lösung darauf aus, bleiben fachliche Änderungen lokal, und die Technik dient der Fachlichkeit statt umgekehrt.",
   "Falsch: Ein bestehendes Datenbankschema spiegelt oft historische oder technische Entscheidungen wider, nicht die fachlichen Verantwortlichkeiten. Ein Schnitt nach Tabellen übernimmt diese Altlasten und führt zu datengetriebenen statt verantwortungsorientierten Bausteinen."
  ],
  "explanation": "Erst den fachlichen Schnitt verstehen, dann die Technik darauf ausrichten. Technik-first, ein Schnitt nach Datenbanktabellen oder das Gleichsetzen von Fachkomponente und Schicht führen zu schlecht änderbaren Strukturen."
 },
 {
  "id": "c3q43",
  "chapter": 3,
  "lz": "LZ 03-03",
  "r": "R2",
  "type": "single",
  "q": "Worauf weist die „Millersche Zahl“ (7±2) beim Strukturieren einer Architektur hin?",
  "options": [
   "7±2 gibt die ideale Anzahl von Schnittstellenoperationen pro Baustein an.",
   "Die Zahl gleichzeitig überblickbarer Elemente ist begrenzt – die Zerlegung pro Ebene sollte überschaubar bleiben.",
   "7±2 ist eine empirisch belegte Obergrenze für die optimale Teamgröße im Entwurf.",
   "Miller schreibt vor, dass ein System aus höchstens sieben Modulen bestehen darf."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Millers Zahl trifft keine Aussage über die Zahl von Schnittstellenoperationen. Sie beschreibt die begrenzte Kapazität des Kurzzeitgedächtnisses für gleichzeitig fassbare Informationseinheiten.",
   "Richtig: Menschen können nur etwa 7±2 Informationseinheiten („Chunks“) gleichzeitig überblicken. Für die Architektur heißt das: Pro Zerlegungsebene sollte es nur überschaubar viele Bausteine geben – wird es mehr, gruppiert man sie hierarchisch.",
   "Falsch: Hier wird die Zahl auf einen anderen Bereich übertragen. Miller bezieht sich auf gleichzeitig fassbare Informationseinheiten, nicht auf Teamgrößen.",
   "Falsch: 7±2 ist keine harte Obergrenze für die Modulanzahl eines Systems, sondern eine kognitive Faustregel pro Darstellungsebene. Ein großes System kann viele Module haben, wenn sie hierarchisch gegliedert sind."
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
   "Der Entwurf sollte möglichst vollständig sein, bevor erstes Feedback (z. B. über Prototypen) eingeholt wird, damit dieses auf einer stabilen Grundlage beruht.",
   "Entwurfsentscheidungen sollte man nur revidieren, wenn sich Anforderungen ändern – neue Erkenntnisse allein sind kein ausreichender Grund.",
   "Bei Verwendung eines bewährten Referenzmodells kann man auf eigene Abwägungen weitgehend verzichten."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Anforderungen sind oft unvollständig, widersprüchlich oder ändern sich, und viele Konsequenzen einer Entscheidung zeigen sich erst später. Deshalb verläuft der Entwurf iterativ: entwerfen, bewerten, Feedback einholen und bei Bedarf zurückgehen.",
   "Falsch: Frühes Feedback, etwa über Prototypen, ist gerade der Zweck iterativen Vorgehens. Wer erst einen vollständigen Entwurf erstellt, entdeckt Fehlannahmen spät – dann sind Korrekturen besonders teuer.",
   "Falsch: Nicht nur geänderte Anforderungen, auch neue Erkenntnisse, etwa aus Prototypen, Tests oder dem Betrieb, können eine Revision rechtfertigen. Eine Entscheidung trotz besseren Wissens beizubehalten, erhöht das Risiko.",
   "Falsch: Referenzmodelle sind Startpunkte, keine fertigen Lösungen. Sie müssen an den konkreten Kontext und die Qualitätsziele angepasst werden – die Abwägung der Trade-offs bleibt Aufgabe der Architektur."
  ],
  "explanation": "Architekturentwurf ist iterativ und explorativ: früh Feedback einholen, Referenzmodelle anpassen und Entscheidungen auch aufgrund neuer Erkenntnisse revidieren."
 },
 {
  "id": "c3q45",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R1",
  "type": "multi",
  "q": "Wie ist das Ziel „lose Kopplung“ richtig einzuordnen?",
  "options": [
   "Geringere Kopplung senkt die Auswirkung von Änderungen und erleichtert isoliertes Testen.",
   "Kopplung soll so gering wie möglich, aber so stark wie fachlich nötig sein – ohne Kopplung gäbe es keine Zusammenarbeit.",
   "Lose Kopplung erreicht man vor allem, indem man die Bausteine auf verschiedene Server verteilt.",
   "Lose Kopplung und hohe Kohäsion bezeichnen dasselbe Ziel, nur anders benannt.",
   "Ideal ist ein System, in dem möglichst kein Baustein von einem anderen abhängt."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Richtig: Je weniger ein Baustein über andere weiß, desto seltener zieht eine Änderung an ihnen Änderungen bei ihm nach sich. Zudem lässt er sich isoliert testen, weil man wenige Abhängigkeiten durch Test-Doubles ersetzen muss.",
   "Richtig: Bausteine müssen zusammenarbeiten, und dafür braucht es Abhängigkeiten. Ziel ist daher keine Null-Kopplung, sondern so wenig Kopplung wie möglich bei so viel wie fachlich nötig.",
   "Falsch: Verteilung auf Server ändert nichts an der fachlichen Abhängigkeit zwischen Bausteinen. Sie fügt sogar neue Kopplungsarten hinzu, etwa an Netzwerk, Verfügbarkeit und Datenformate.",
   "Falsch: Die beiden Begriffe sind verwandt, aber verschieden: Kopplung beschreibt die Beziehungen zwischen Bausteinen, Kohäsion den Zusammenhalt innerhalb eines Bausteins. Man strebt beides an – lose Kopplung und hohe Kohäsion.",
   "Falsch: Ohne Abhängigkeiten könnten Bausteine nicht zusammenarbeiten und das System keine Gesamtfunktion erbringen. Ziel ist angemessene, nicht keine Kopplung."
  ],
  "explanation": "Lose Kopplung heißt: so gering wie möglich, so stark wie fachlich nötig. Sie ist nicht dasselbe wie hohe Kohäsion und entsteht nicht durch Verteilung auf Server, sondern durch guten Schnitt und klare Schnittstellen."
 },
 {
  "id": "c3q46",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R2",
  "type": "single",
  "q": "Welche Art der Beziehung erzeugt tendenziell die stärkste Kopplung zwischen Bausteinen?",
  "options": [
   "Delegation an ein über ein Interface referenziertes Objekt.",
   "Kommunikation über eine schmale, klar definierte Schnittstelle.",
   "Implementierungsvererbung (die Ableitung hängt von internen Details der Basisklasse ab).",
   "Lose, ereignisbasierte (asynchrone) Benachrichtigung."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Delegation an ein Objekt, das nur über ein Interface bekannt ist, hält die Kopplung gering. Der Aufrufer hängt nur am Vertrag, nicht an der konkreten Implementierung, die austauschbar bleibt.",
   "Falsch: Eine schmale, klar definierte Schnittstelle koppelt nur lose, weil die Bausteine nur wenig voneinander wissen müssen. Das ist gerade das Ideal, nicht die stärkste Form der Kopplung.",
   "Richtig: Bei Implementierungsvererbung hängt die abgeleitete Klasse von internen Details der Basisklasse ab, etwa geschützten Feldern oder der Aufrufreihenfolge von Methoden. Ändert sich die Basis, kann die Ableitung unbemerkt brechen (fragile base class) – daher „Komposition vor Vererbung“.",
   "Falsch: Asynchrone, ereignisbasierte Benachrichtigung koppelt besonders locker, da der Sender den Empfänger nicht kennen und nicht auf ihn warten muss. Gemeinsam bleiben nur Ereignisformat und Bedeutung."
  ],
  "explanation": "Implementierungsvererbung koppelt sehr stark an die Interna der Basisklasse. Schnittstellen, Ereignisse und Delegation über Interfaces koppeln deutlich lockerer – daher „Komposition vor Vererbung“."
 },
 {
  "id": "c3q47",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R2",
  "type": "multi",
  "q": "Was gilt für dynamische (erst zur Laufzeit aufgelöste) Kopplung?",
  "options": [
   "Sie ist mit statischen Analysewerkzeugen oft schwerer zu erkennen als statische Kopplung.",
   "Sie macht Bausteine voneinander unabhängig, da sie sich zur Übersetzungszeit nicht mehr kennen.",
   "Kommunizieren Sender und Empfänger über einen Message-Broker, hängen sie fachlich nicht mehr voneinander ab.",
   "Entscheidend ist die zugrunde liegende fachliche Abhängigkeit, nicht der Zeitpunkt ihrer Auflösung.",
   "Die Abhängigkeit wird oft nur verschoben oder versteckt, nicht wirklich verringert."
  ],
  "correct": [
   0,
   3,
   4
  ],
  "optExpl": [
   "Richtig: Dynamische Kopplung entsteht erst zur Laufzeit, etwa über Nachrichten, Konfiguration oder Reflection. Deshalb taucht sie in statischen Code-Abhängigkeitsanalysen oft nicht auf und bleibt leicht unbemerkt.",
   "Falsch: Dass sich Bausteine zur Übersetzungszeit nicht kennen, heißt nicht, dass sie fachlich unabhängig sind. Wer eine bestimmte Antwort oder Datenstruktur erwartet, hängt weiterhin vom anderen Baustein ab – nur weniger sichtbar.",
   "Falsch: Ein Message-Broker entkoppelt zeitlich und technisch, aber nicht fachlich. Nachrichtenformat und fachliche Erwartung bleiben gemeinsame Abhängigkeiten – ändert der Sender das Format, bricht der Empfänger trotzdem.",
   "Richtig: Für die Bewertung der Kopplung zählt, wie stark ein Baustein fachlich auf einen anderen angewiesen ist. Ob diese Abhängigkeit zur Übersetzungs- oder zur Laufzeit aufgelöst wird, ändert ihre Stärke nicht.",
   "Richtig: Dynamische Kopplung verschiebt die Abhängigkeit oft nur aus dem Code in Konfiguration oder Nachrichten, statt sie zu verringern. Weil sie dadurch versteckt ist, kann sie bei Änderungen sogar riskanter sein als offensichtliche statische Kopplung."
  ],
  "explanation": "Dynamische Kopplung (z. B. über Nachrichten oder Reflection) verringert die zugrunde liegende fachliche Abhängigkeit nicht zwangsläufig, sondern versteckt sie oft – und ist statisch schwerer zu erkennen. Auch über einen Broker bleiben Format und Semantik gemeinsame Abhängigkeiten."
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
   "Ein Baustein mit vielen ausgehenden Abhängigkeiten ist stabil, weil er auf viele bewährte Bausteine zurückgreift.",
   "Ein Baustein mit vielen eingehenden Abhängigkeiten sollte möglichst konkret sein, da er häufig direkt genutzt wird."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Viele eingehende (afferente) Abhängigkeiten bedeuten viele Nutzer, die von jeder Änderung betroffen wären. Der Baustein ist daher „stabil“ in dem Sinne, dass man ihn nur mit großem Aufwand ändern kann.",
   "Richtig: Ein Baustein mit vielen ausgehenden (efferenten) Abhängigkeiten ist von Änderungen vieler anderer Bausteine betroffen. Er gilt deshalb als „instabil“, also änderungsanfällig.",
   "Richtig: „Stabil“ beschreibt hier nur, wie schwer ein Baustein wegen seiner Nutzer zu ändern ist. Über Qualität, Fehlerfreiheit oder Reife sagt die Metrik nichts aus.",
   "Falsch: Hier wird „stabil“ als „zuverlässig“ missverstanden. Viele ausgehende Abhängigkeiten machen einen Baustein instabil, weil ihn Änderungen an jedem dieser Bausteine treffen können – egal, wie bewährt sie sind.",
   "Falsch: Stabile, viel genutzte Bausteine sollten eher abstrakt sein, etwa Schnittstellen. So lassen sie sich durch neue Implementierungen erweitern, ohne sie selbst ändern zu müssen – ein konkreter, stark genutzter Baustein ist dagegen schwer weiterzuentwickeln."
  ],
  "explanation": "Afferent (eingehend) = viele Nutzer → stabil, also schwer änderbar; solche Bausteine sollten eher abstrakt sein. Efferent (ausgehend) = viele eigene Abhängigkeiten → instabil, also anfällig für Änderungen anderer."
 },
 {
  "id": "c3q49",
  "chapter": 3,
  "lz": "LZ 03-10",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zu Querschnittskonzepten treffen zu?",
  "options": [
   "Querschnittskonzepte legt man am besten erst fest, wenn die ersten Bausteine fertig sind, um aus der Praxis zu lernen.",
   "Beispiele sind u. a. Persistenz, Sicherheit, Logging und Fehlerbehandlung.",
   "Sie sollten systemweit einheitlich/konsistent gelöst werden, um Wildwuchs zu vermeiden.",
   "Sie wirken übergreifend auf viele Bausteine und lassen sich nicht sauber in einem einzelnen Baustein kapseln.",
   "Ein Querschnittskonzept ist erst dann nötig, wenn ein Thema in wirklich allen Bausteinen vorkommt."
  ],
  "correct": [
   1,
   2,
   3
  ],
  "optExpl": [
   "Falsch: Wer Querschnittskonzepte spät festlegt, findet in den ersten Bausteinen bereits eigene, uneinheitliche Lösungen vor. Dann droht eine teure Vereinheitlichung – deshalb legt man sie früh fest und verfeinert sie iterativ.",
   "Richtig: Persistenz, Sicherheit, Logging und Fehlerbehandlung sind typische Querschnittsthemen. Sie betreffen viele Bausteine gleichzeitig, statt zu einem einzelnen fachlichen Baustein zu gehören.",
   "Richtig: Löst jeder Baustein ein Querschnittsthema anders, entsteht Wildwuchs: uneinheitliche Logformate, verschiedene Fehlerbehandlungen, Sicherheitslücken. Ein einheitliches Konzept sorgt für Konsistenz und erleichtert Wartung und Betrieb.",
   "Richtig: Querschnittsthemen ziehen sich durch viele Bausteine und lassen sich nicht sauber in einem einzelnen kapseln. Darum beschreibt man sie in einem eigenen Konzept (in arc42 Abschnitt 8), statt bei jedem Baustein separat.",
   "Falsch: Ein Konzept lohnt sich schon, wenn ein Thema viele Bausteine betrifft und einheitlich gelöst werden soll. Wer auf „wirklich alle“ wartet, nimmt uneinheitliche Einzellösungen in Kauf."
  ],
  "explanation": "Querschnittskonzepte betreffen viele Bausteine und werden früh und einheitlich festgelegt (z. B. Persistenz, Sicherheit, Logging). Werden sie spät festgelegt, entstehen uneinheitliche Einzellösungen."
 },
 {
  "id": "c3q50",
  "chapter": 3,
  "lz": "LZ 03-10",
  "r": "R3",
  "type": "single",
  "q": "Wie unterscheiden sich ACID und BASE als Konsistenzansätze bei der Persistenz?",
  "options": [
   "BASE bedeutet, dass Daten verloren gehen dürfen, solange das System verfügbar bleibt.",
   "ACID gehört zu NoSQL-Datenbanken, BASE zu relationalen Datenbanken.",
   "BASE steht für strengere Transaktionsgarantien als ACID.",
   "ACID betont strikte Konsistenz (klassisch relational); BASE bevorzugt Verfügbarkeit und eventuelle Konsistenz (häufig NoSQL)."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Eventual Consistency heißt, dass Replikate verzögert einen konsistenten Zustand erreichen, nicht dass Daten verloren gehen dürfen. BASE lockert den Zeitpunkt der Konsistenz, nicht die Dauerhaftigkeit der Daten.",
   "Falsch: Das vertauscht die typischen Zuordnungen. ACID ist klassisch für relationale Datenbanken, BASE für viele verteilte NoSQL-Systeme.",
   "Falsch: Es ist umgekehrt: BASE lockert die Konsistenzgarantien gegenüber ACID. Dafür gewinnt man Verfügbarkeit und Skalierbarkeit in verteilten Systemen.",
   "Richtig: ACID (Atomicity, Consistency, Isolation, Durability) garantiert strikte Transaktionskonsistenz, wie in relationalen Datenbanken üblich. BASE (Basically Available, Soft state, Eventual consistency) bevorzugt Verfügbarkeit und nimmt eine zeitweise Inkonsistenz in Kauf, wie oft bei NoSQL-Systemen."
  ],
  "explanation": "ACID: strikte Transaktionskonsistenz, klassisch relational. BASE: Verfügbarkeit und schlussendliche (eventual) Konsistenz, häufig NoSQL. Eventual consistency bedeutet verzögerte Konsistenz, keinen Datenverlust."
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
   "Man muss sich generell und dauerhaft für zwei der drei Eigenschaften entscheiden, auch wenn gerade keine Netzwerkpartition vorliegt.",
   "Mit ausreichend redundanter Hardware lassen sich auch während einer Partition alle drei Eigenschaften gleichzeitig erreichen.",
   "CAP beschreibt die Abwägung zwischen Kosten, Verfügbarkeit und Performance verteilter Systeme."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Kommt es zu einer Netzwerkpartition, können getrennte Knoten sich nicht abstimmen. Dann muss das System entweder Anfragen ablehnen, um konsistent zu bleiben, oder antworten und dabei veraltete Daten riskieren – Konsistenz und Verfügbarkeit sind nicht gleichzeitig voll erreichbar.",
   "Falsch: Die Abwägung wird erst durch eine Partition erzwungen. Solange das Netzwerk funktioniert, können Konsistenz und Verfügbarkeit gemeinsam erreicht werden – die verkürzte Lesart „wähle zwei von drei“ ist irreführend.",
   "Falsch: CAP beschreibt eine grundsätzliche Grenze verteilter Systeme, die sich nicht durch Hardware aufheben lässt. Redundanz verringert die Wahrscheinlichkeit von Partitionen, ändert aber nichts an der Abwägung, wenn eine auftritt.",
   "Falsch: Die Buchstaben sind falsch aufgelöst. C steht für Consistency, A für Availability und P für Partition Tolerance – Kosten und Performance sind nicht Gegenstand des Theorems."
  ],
  "explanation": "CAP: Während einer Netzwerkpartition muss man zwischen Konsistenz und Verfügbarkeit wählen. Ohne Partition ist beides möglich; Hardware hebt die Grenze nicht auf."
 },
 {
  "id": "c3q52",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R2",
  "type": "single",
  "q": "Was bezeichnet man bei Schichtenarchitekturen als „Layer-Bridge“ (Überspringen einer Schicht)?",
  "options": [
   "Ein Aufruf von einer unteren in eine obere Schicht über eine Callback-Schnittstelle.",
   "Ein Baustein, der zwei Schichten verbindet, indem er beiden gleichzeitig angehört.",
   "Die strikte Regel, dass niemals eine Schicht übersprungen werden darf.",
   "Das gezielte Umgehen einer Zwischenschicht – im gelockerten Ansatz erlaubt, erzeugt aber zusätzliche Abhängigkeiten und sollte dokumentiert werden."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Ein Aufruf von unten nach oben über eine Callback-Schnittstelle ist ein Rückruf, etwa nach dem Observer-Muster. Er dient dazu, Aufwärtsabhängigkeiten zu vermeiden, und überspringt keine Schicht.",
   "Falsch: Ein Baustein sollte genau einer Schicht angehören, sonst verwischen die Schichtgrenzen. Mit dem Überspringen einer Schicht hat das nichts zu tun.",
   "Falsch: Das beschreibt die strikte Schichtung, also gerade das Verbot des Bridgings. Layer-Bridging ist die Ausnahme davon.",
   "Richtig: Beim Layer-Bridging greift eine Schicht unter Umgehung einer Zwischenschicht direkt auf eine tiefere zu, etwa aus Performancegründen. Im gelockerten Schichtenmodell ist das erlaubt, erzeugt aber zusätzliche Abhängigkeiten und sollte deshalb bewusst entschieden und dokumentiert werden."
  ],
  "explanation": "Layer-Bridging = gezieltes Überspringen einer Zwischenschicht; im gelockerten Schichtenmodell erlaubt, erhöht aber die Abhängigkeiten und sollte dokumentiert werden. Nicht verwechseln mit Callbacks nach oben."
 },
 {
  "id": "c3q53",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "multi",
  "q": "Welche Regeln gelten idealtypisch für eine strenge Schichtenarchitektur?",
  "options": [
   "In der strengen Variante darf eine Schicht nur die unmittelbar darunterliegende Schicht nutzen (kein Überspringen).",
   "Aufrufe erfolgen nur von oben nach unten; der umgekehrte Weg erzeugt einen unerwünschten Zyklus.",
   "Zwei wechselseitig voneinander abhängige Bausteine verteilt man auf zwei Schichten, um den Zyklus aufzulösen.",
   "In der strengen Variante darf eine Schicht alle tieferliegenden Schichten nutzen, solange keine Aufwärtsabhängigkeiten entstehen.",
   "Bausteine einer Schicht liegen möglichst auf einem ähnlichen Abstraktionsniveau."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Richtig: In der strengen Schichtung kennt jede Schicht nur die unmittelbar darunterliegende. Dadurch bleiben Änderungen an einer Schicht auf ihre direkte Nachbarschaft begrenzt, und jede Schicht lässt sich leichter austauschen.",
   "Richtig: Abhängigkeiten zeigen nur nach unten. Würde eine untere Schicht eine obere aufrufen, entstünde ein Zyklus, und die Schichten wären nicht mehr unabhängig voneinander austauschbar oder testbar.",
   "Falsch: Durch das Verteilen auf zwei Schichten verschwindet der Zyklus nicht; er wird zur Schichtungsverletzung, weil eine Abhängigkeit dann nach oben zeigt. Man löst ihn über Abstraktion (z. B. Schnittstelle), Abhängigkeitsumkehr oder Zusammenlegen der Bausteine.",
   "Falsch: Das beschreibt die gelockerte (relaxed) Variante, in der eine Schicht auf alle tieferen zugreifen darf. In der strengen Variante ist nur die direkt darunterliegende Schicht erlaubt.",
   "Richtig: Schichten bündeln Bausteine mit ähnlichem Abstraktionsniveau, etwa Präsentation, Fachlogik oder Infrastruktur. Das macht die Struktur verständlich und ermöglicht, jede Schicht für sich zu betrachten."
  ],
  "explanation": "Strenge Schichtung: Abhängigkeiten nur nach unten, nur zur direkt darunterliegenden Schicht, ähnliches Abstraktionsniveau je Schicht. Das Nutzen aller tieferen Schichten ist die gelockerte Variante; Zyklen löst man nicht durch Verteilen auf Schichten."
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
   "Jede Schicht muss auf einem eigenen Server betrieben werden, was den Betrieb verteuert.",
   "Schichtenarchitekturen lassen sich nicht mit einem fachlichen Schnitt kombinieren.",
   "Obere Schichten müssen die Implementierungsdetails der unteren Schichten kennen, um sie aufzurufen."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Jede Schicht ist eine zusätzliche Indirektion, durch die Aufrufe hindurchgereicht werden – das kann Performance kosten. Zudem ziehen sich fachliche Änderungen, etwa ein neues Datenfeld, oft durch mehrere Schichten.",
   "Falsch: Hier werden logische Schichten (Layers) mit physischen Ebenen (Tiers) verwechselt. Schichten sind eine logische Struktur; ob und wie man sie auf Server verteilt, ist eine eigene Entscheidung der Verteilungssicht.",
   "Falsch: Schichten und fachlicher Schnitt schließen sich nicht aus. Man kann fachliche Komponenten intern schichten oder Schichten fachlich unterteilen.",
   "Falsch: Obere Schichten nutzen die Schnittstellen der unteren, nicht deren Implementierungsdetails. Gerade dieses Verbergen ermöglicht es, eine Schicht auszutauschen, ohne die darüberliegende zu ändern."
  ],
  "explanation": "Tiefe Schichtung kostet Indirektion und lässt Änderungen oft durch mehrere Schichten laufen. Schichten sind logische Strukturen – nicht an Server gebunden und mit fachlichem Schnitt kombinierbar."
 },
 {
  "id": "c3q55",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R2",
  "type": "single",
  "q": "Was unterscheidet aktive von passiven Filtern in einer Pipes-and-Filters-Architektur?",
  "options": [
   "Aktive Filter laufen nur sequenziell, passive nur parallel.",
   "Aktive Filter kennen einander, passive Filter sind isoliert.",
   "Aktive Filter verändern Daten, passive Filter lassen sie unverändert durch.",
   "Aktive Filter holen bzw. schieben Daten selbst; passive Filter werden von außen mit Daten versorgt bzw. ausgelesen."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Ob ein Filter aktiv oder passiv ist, sagt nichts über sequenzielle oder parallele Ausführung aus. Die Unterscheidung betrifft allein, wer den Datentransport anstößt; Nebenläufigkeit ist mit beiden Varianten möglich.",
   "Falsch: Filter kennen einander in Pipes and Filters grundsätzlich nicht – egal ob aktiv oder passiv. Sie sind nur über Pipes verbunden; genau diese Isolation macht sie austauschbar.",
   "Falsch: Hier wird Datenverarbeitung mit Datenflusskontrolle verwechselt. Sowohl aktive als auch passive Filter transformieren Daten; der Unterschied liegt darin, wer den Fluss antreibt.",
   "Richtig: Ein aktiver Filter treibt den Datenfluss selbst an, indem er Daten aus der Pipe holt (pull) oder weiterschiebt (push). Ein passiver Filter wartet, bis er von außen beliefert oder ausgelesen wird."
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
   "Die Filterstufen können parallel/nebenläufig arbeiten, da sie nur über Datenströme verbunden sind.",
   "Die Fehlerbehandlung ist anspruchsvoll, da ein Filter die Vorgeschichte der Daten nicht kennt.",
   "Das Muster eignet sich besonders für stark interaktive Benutzerdialoge.",
   "Das Muster eignet sich besonders, wenn die Schritte häufig auf Zwischenergebnisse anderer, nicht benachbarter Schritte zugreifen müssen."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Ein Filter kennt nur sein Eingangs- und Ausgangsformat, nicht seine Nachbarn. Weil die Verbindung ausschließlich über Pipes läuft, lässt sich ein Filter austauschen oder in einer anderen Kette wiederverwenden.",
   "Richtig: Da die Stufen nur über Datenströme verbunden sind, kann jede Stufe arbeiten, sobald Daten anliegen. So verarbeitet etwa ein Filter schon den nächsten Datensatz, während der folgende noch den vorigen bearbeitet.",
   "Richtig: Ein Filter sieht nur seinen Eingangsstrom und weiß nicht, was vorher passiert ist. Tritt ein Fehler mitten in der Kette auf, ist es deshalb schwer, ihn sinnvoll zu behandeln oder bereits Verarbeitetes zurückzunehmen.",
   "Falsch: Pipes and Filters passt zu linearen, stapel- oder stromartigen Verarbeitungen. Interaktive Dialoge mit wechselndem Ablauf und Rückfragen lassen sich in einer festen Filterkette kaum abbilden.",
   "Falsch: Jeder Filter verarbeitet nur seinen Eingangsstrom; der Zugriff auf Zwischenergebnisse entfernter Stufen widerspricht dem Muster. Wer solche Querzugriffe braucht, ist mit einem Repository- oder Blackboard-Ansatz besser bedient."
  ],
  "explanation": "Pipes and Filters: unabhängige, über Datenströme verbundene Filter – gut austauschbar und nebenläufig, aber mit schwieriger Fehlerbehandlung. Ungeeignet, wenn Schritte fremde Zwischenergebnisse brauchen oder der Ablauf interaktiv ist."
 },
 {
  "id": "c3q57",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "multi",
  "q": "Was sollte beim fachlichen Schnitt von Microservices beachtet werden?",
  "options": [
   "Entlang der Tabellen des bestehenden Datenmodells, also je Tabelle ein Service.",
   "Jeder Service sollte unabhängig deploybar sein und einen klar abgegrenzten fachlichen Verantwortungsbereich haben.",
   "Nach fachlichen Gesichtspunkten (z. B. Bounded Context) – ein zu feiner Schnitt führt zu „Nano-Services“ mit hohem Overhead.",
   "Entlang der bestehenden Team-/Organisationsstruktur, unabhängig von fachlichen Grenzen.",
   "So klein, dass jeder Service genau eine Operation anbietet, um maximale Unabhängigkeit zu erreichen."
  ],
  "correct": [
   1,
   2
  ],
  "optExpl": [
   "Falsch: Ein Schnitt nach Tabellen orientiert sich an der technischen Datenstruktur, nicht an der Fachlichkeit. Fachliche Abläufe brauchen dann viele Services gleichzeitig – das Ergebnis sind zerrissene, stark gekoppelte Services.",
   "Richtig: Ein Service soll ohne Abstimmung mit anderen geändert und ausgeliefert werden können. Das gelingt nur, wenn er einen klar abgegrenzten fachlichen Verantwortungsbereich hat und nicht ständig mit anderen mitgeändert werden muss.",
   "Richtig: Fachliche Grenzen wie Bounded Contexts sorgen für hohe Kohäsion innerhalb und lose Kopplung zwischen Services. Wird zu fein geschnitten, entstehen „Nano-Services“, deren Kommunikations- und Betriebsaufwand den Nutzen übersteigt.",
   "Falsch: Nach Conway beeinflusst die Teamstruktur die Systemstruktur, und das sollte man beim Schnitt berücksichtigen. Ignoriert man dabei aber die fachlichen Grenzen, entstehen Services, die für jede fachliche Änderung gemeinsam angepasst werden müssen.",
   "Falsch: Ein Service pro Operation maximiert nicht die Unabhängigkeit, sondern die Zahl der Schnittstellen. Fachlich zusammengehörige Operationen müssen dann ständig miteinander kommunizieren – Kopplung und Overhead steigen."
  ],
  "explanation": "Microservices schneidet man fachlich (z. B. nach Bounded Contexts), unabhängig deploybar und mit klarer Verantwortung. Schnitte nach Tabellen, nach Einzeloperationen oder nur nach Teamstruktur führen zu Kopplung und Overhead."
 },
 {
  "id": "c3q58",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R2",
  "type": "multi",
  "q": "Welche Herausforderungen bringen Microservices typischerweise mit sich?",
  "options": [
   "Datenkonsistenz über Servicegrenzen hinweg (verteilte Transaktionen) wird schwieriger.",
   "Höherer Betriebs- und Deployment-Aufwand durch viele eigenständige Einheiten.",
   "Abhängigkeit vom Netzwerk mit zusätzlicher Latenz und neuen (Teil-)Fehlerquellen.",
   "Gemeinsam genutzte Bibliotheken sind ausgeschlossen, da Services keinerlei Code teilen dürfen.",
   "Die fachliche Komplexität der Domäne sinkt, da sie auf viele Services verteilt wird."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Jeder Service verwaltet seine eigenen Daten, eine einfache lokale Transaktion über mehrere Services gibt es nicht. Konsistenz muss daher z. B. über Sagas oder eventual consistency hergestellt werden, was deutlich aufwendiger ist.",
   "Richtig: Viele eigenständig deploybare Einheiten brauchen jeweils Build-Pipeline, Monitoring, Logging und Betrieb. Ohne hohe Automatisierung wächst der Betriebsaufwand mit der Zahl der Services.",
   "Richtig: Aufrufe, die im Monolithen lokal waren, laufen nun über das Netzwerk. Das bringt Latenz und Teilausfälle mit sich, die man mit Timeouts, Retries oder Circuit Breakern behandeln muss.",
   "Falsch: Gemeinsame Bibliotheken sind nicht verboten, etwa für technische Querschnittsthemen. Sie erhöhen aber die Kopplung, weil Versionswechsel mehrere Services betreffen – deshalb setzt man sie bewusst und sparsam ein.",
   "Falsch: Die fachliche Komplexität der Domäne bleibt gleich, egal wie sie verteilt wird. Hinzu kommt sogar die Komplexität der Verteilung selbst – Kommunikation, Konsistenz und Betrieb."
  ],
  "explanation": "Microservices bringen Betriebsaufwand, Netzwerkrisiken und schwierigere Konsistenz. Die fachliche Komplexität verschwindet nicht durch Verteilung; geteilte Bibliotheken sind möglich, aber eine bewusste Kopplungsentscheidung."
 },
 {
  "id": "c3q59",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R2",
  "type": "single",
  "q": "Welche Aussage zum Zusammenspiel von Microservices trifft zu?",
  "options": [
   "Services sollten möglichst viel synchron kommunizieren, um jederzeit starke Konsistenz zu garantieren.",
   "Services sollten lose gekoppelt sein und über technologieneutrale Schnittstellen kommunizieren.",
   "Services sollten Daten über eine gemeinsame Datenbank austauschen, da so Konsistenz ohne verteilte Transaktionen möglich ist.",
   "Alle Services sollten für ihre interne Persistenz dasselbe Datenformat verwenden, um die Integration zu erleichtern."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Viel synchrone Kommunikation koppelt Services zeitlich: Fällt einer aus oder ist langsam, sind die Aufrufer mitbetroffen. Starke Konsistenz über Services hinweg erkauft man so mit geringerer Verfügbarkeit und Unabhängigkeit.",
   "Richtig: Lose Kopplung erlaubt es, Services unabhängig zu ändern, zu deployen und zu skalieren. Technologieneutrale Schnittstellen wie HTTP/REST oder Messaging sorgen dafür, dass jeder Service seine eigene Technologie wählen kann.",
   "Falsch: Eine gemeinsame Datenbank spart zwar verteilte Transaktionen, koppelt die Services aber über das gemeinsame Schema. Eine Schemaänderung trifft dann alle Services, womit die unabhängige Änderbarkeit verloren geht.",
   "Falsch: Wie ein Service intern speichert, ist ein Implementierungsdetail und bleibt seine eigene Entscheidung. Vereinbart werden nur die Formate an den Schnittstellen; ein einheitliches internes Format würde die Services unnötig koppeln."
  ],
  "explanation": "Microservices kommunizieren lose gekoppelt über technologieneutrale Schnittstellen. Eine gemeinsame Datenbank löst zwar Konsistenzprobleme, zerstört aber die Unabhängigkeit; interne Formate bleiben Sache des Services."
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
    "text": "Gut geeignet für schrittweise Datenstrom- oder Batch-Verarbeitung.",
    "cat": 1
   },
   {
    "text": "Die Schritte kennen einander nicht und sind frei austauschbar.",
    "cat": 1
   },
   {
    "text": "Vertikale Anordnung; obere Ebenen nutzen Dienste der darunterliegenden.",
    "cat": 0
   },
   {
    "text": "Änderungen an tiefen Ebenen können sich nach oben durchziehen.",
    "cat": 0
   },
   {
    "text": "Unabhängige Verarbeitungsschritte, über Datenströme verkettet.",
    "cat": 1
   },
   {
    "text": "Aufrufe erfolgen nur von oben nach unten, sonst entsteht ein Zyklus.",
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
    "text": "Anzeige der Detailseite eines einzelnen Produkts.",
    "cat": 1
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
    "text": "Einheitliche Fehlerbehandlung über Bausteine hinweg.",
    "cat": 0
   },
   {
    "text": "Protokollierung (Logging) im gesamten System.",
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
   "Ein Prototyp kann bewusst als „Wegwerf“-Artefakt dienen, nur um eine Annahme zu prüfen.",
   "Sie sind besonders für unsichere/riskante Entscheidungen wertvoll (risikogetrieben).",
   "Sie überprüfen Annahmen und Risiken früh und ermöglichen Anpassungen bei neuem Wissen.",
   "Wegwerf-Prototypen lohnen sich vor allem dann, wenn sie später als Grundgerüst für den Produktionscode dienen.",
   "Feedback-Schleifen ersetzen eine Architekturbewertung, da Prototypen die relevanten Risiken ohnehin aufdecken."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Ein Wegwerf-Prototyp beantwortet gezielt eine offene Frage, etwa ob eine Technologie die geforderte Last trägt. Sein Wert liegt in der Erkenntnis, nicht im Code – danach wird er bewusst verworfen.",
   "Richtig: Feedback-Schleifen kosten Aufwand, daher setzt man sie dort ein, wo eine Fehlentscheidung am teuersten wäre. Riskante oder unsichere Entscheidungen werden so früh abgesichert, bevor viel darauf aufgebaut wird.",
   "Richtig: Früh eingeholtes Feedback zeigt, ob Annahmen über Technik, Last oder Anforderungen stimmen. Solange noch wenig darauf aufbaut, lässt sich der Entwurf bei neuem Wissen günstig anpassen.",
   "Falsch: Ein Wegwerf-Prototyp ist auf schnelle Erkenntnis optimiert und enthält bewusst Abkürzungen. Wird er zum Grundgerüst des Produktionscodes, übernimmt man diese Schwächen – dann wäre ein evolutionärer Prototyp von Anfang an die richtige Wahl gewesen.",
   "Falsch: Prototypen prüfen einzelne, gezielt ausgewählte Annahmen. Eine Architekturbewertung betrachtet die Architektur systematisch gegen alle wichtigen Qualitätsziele – beide ergänzen sich, keines ersetzt das andere."
  ],
  "explanation": "Kurze Feedback-Schleifen prüfen Annahmen früh und risikogetrieben; Wegwerf-Prototypen klären gezielt eine Frage und werden danach verworfen. Sie ergänzen eine Architekturbewertung, ersetzen sie aber nicht."
 },
 {
  "id": "c3q61",
  "chapter": 3,
  "lz": "LZ 03-05",
  "r": "R3",
  "type": "single",
  "q": "Was kennzeichnet eine „evolutionäre Architektur“ mit Fitnessfunktionen?",
  "options": [
   "Evolutionäre Architektur verzichtet auf vorab definierte Qualitätsziele; die Struktur ergibt sich aus den Fitnessfunktionen.",
   "Automatisierte Kriterien (Fitnessfunktionen) prüfen laufend, ob wichtige Qualitätsmerkmale bei Änderungen erhalten bleiben.",
   "Fitnessfunktionen ersetzen jede Form von manueller Architekturbewertung oder Review.",
   "Fitnessfunktionen sind manuelle Checklisten, die das Architekturteam vor jedem Release abarbeitet."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Fitnessfunktionen werden aus den Qualitätszielen abgeleitet – sie machen diese Ziele automatisiert prüfbar. Ohne vorab definierte Ziele gäbe es nichts, wogegen eine Fitnessfunktion prüfen könnte.",
   "Richtig: Fitnessfunktionen sind automatisierte Prüfungen, etwa Architekturtests auf verbotene Abhängigkeiten oder Lasttests in der Pipeline. Sie laufen bei jeder Änderung mit und zeigen sofort, wenn ein wichtiges Qualitätsmerkmal verloren geht.",
   "Falsch: Fitnessfunktionen prüfen nur messbare, automatisierbare Kriterien. Qualitative Aspekte wie die Angemessenheit von Entscheidungen oder neue Risiken erfordern weiterhin Reviews und Bewertungen durch Menschen.",
   "Falsch: Eine manuelle Checkliste vor dem Release ist gerade keine Fitnessfunktion. Kennzeichnend ist die Automatisierung, z. B. im Build oder in der CI-Pipeline, damit die Prüfung laufend und ohne Zusatzaufwand erfolgt."
  ],
  "explanation": "Evolutionäre Architektur sichert wichtige Qualitäten mit automatisierten Fitnessfunktionen, die aus den Qualitätszielen abgeleitet sind. Sie ergänzen manuelle Reviews, ersetzen sie aber nicht."
 },
 {
  "id": "c3q62",
  "chapter": 3,
  "lz": "LZ 03-05",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zum Zusammenhang von Feedback und Risiko im Entwurf treffen zu?",
  "options": [
   "Die Reihenfolge der Entscheidungen sollte sich am Risiko orientieren, nicht am reinen Bauplan-Fortschritt.",
   "Prototypen oder Durchstiche zur frühen Risikoabsicherung lohnen sich erst bei sehr großen Projekten.",
   "Am effizientesten setzt man zuerst die einfachen, gut verstandenen Teile um, um schnell sichtbaren Fortschritt zu erzielen.",
   "Je später Rückmeldung kommt, desto teurer werden Korrekturen tendenziell.",
   "Riskante oder unsichere Entscheidungen sollten früh mit Feedback abgesichert werden (risikogetrieben)."
  ],
  "correct": [
   0,
   3,
   4
  ],
  "optExpl": [
   "Richtig: Wer zuerst die riskantesten Fragen klärt, erfährt früh, ob der Entwurf trägt. Ein reiner Bauplan-Fortschritt kann dagegen viel Arbeit auf einer Annahme aufbauen, die sich später als falsch erweist.",
   "Falsch: Ob sich ein Durchstich lohnt, hängt vom Risiko ab, nicht von der Projektgröße. Trägt eine unsichere Annahme die Architektur, ist ein kleiner Durchstich auch in kleinen Projekten die günstigste Absicherung.",
   "Falsch: Das erzeugt zwar schnell sichtbaren Fortschritt, schiebt die Risiken aber nach hinten. Gerade dort, wo Korrekturen am teuersten sind, treten die eigentlichen Probleme dann zutage.",
   "Richtig: Je mehr bereits auf einer Entscheidung aufbaut, desto mehr muss bei einer Korrektur geändert werden. Deshalb sind späte Korrekturen tendenziell teurer als frühe.",
   "Richtig: Risikogetriebenes Vorgehen sichert unsichere Entscheidungen früh ab, etwa durch Prototypen, Durchstiche oder Messungen. So bleibt die Korrektur günstig, falls sich eine Annahme als falsch herausstellt."
  ],
  "explanation": "Feedback früh und risikogetrieben einholen: Riskantes zuerst absichern, weil späte Korrekturen teuer sind. Einfaches zuerst zu bauen schiebt Risiken nach hinten; Durchstiche lohnen sich auch in kleineren Projekten."
 },
 {
  "id": "c3q63",
  "chapter": 3,
  "lz": "LZ 03-07",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen treffen auf den Entwurf einer guten Schnittstelle zu?",
  "options": [
   "Sie sollte möglichst viele Operationen anbieten, damit sie für alle denkbaren künftigen Nutzer ausreicht.",
   "Der Vertrag umfasst nur die Signaturen; Vor-/Nachbedingungen und Fehlerverhalten gehören nicht dazu.",
   "Sie legt einen stabilen „Vertrag“ fest (das WAS) und verbirgt die interne Umsetzung (das WIE).",
   "Eine gute Schnittstelle bildet die interne Datenstruktur des Anbieters möglichst 1:1 ab.",
   "Eine gute Schnittstelle ist leicht korrekt zu nutzen und schwer zu missbrauchen."
  ],
  "correct": [
   2,
   4
  ],
  "optExpl": [
   "Falsch: Eine auf Vorrat aufgeblähte Schnittstelle ist schwerer zu verstehen, zu nutzen und zu ändern, weil jede Operation gepflegt werden muss. Sie sollte für ihre tatsächlichen Nutzer funktional vollständig sein, aber nicht spekulativ.",
   "Falsch: Signaturen allein legen nur die Syntax fest. Zum Vertrag gehören auch die Semantik – Vor- und Nachbedingungen, Fehlerverhalten und ggf. Qualitätseigenschaften –, sonst wissen Nutzer nicht, worauf sie sich verlassen können.",
   "Richtig: Die Schnittstelle beschreibt, WAS ein Baustein leistet, und verbirgt, WIE er es umsetzt (Information Hiding). Solange der Vertrag stabil bleibt, kann die Implementierung geändert werden, ohne Nutzer zu beeinträchtigen.",
   "Falsch: Bildet die Schnittstelle die internen Datenstrukturen 1:1 ab, hängen Nutzer direkt an der Implementierung. Jede interne Änderung wird dann zur Schnittstellenänderung – das Gegenteil von Information Hiding.",
   "Richtig: Eine gute Schnittstelle führt Nutzer zur korrekten Verwendung, etwa durch klare Namen, sinnvolle Defaults und Typen, die falsche Aufrufe gar nicht erst zulassen. So entstehen weniger Fehler auf Nutzerseite."
  ],
  "explanation": "Eine gute Schnittstelle ist ein stabiler Vertrag inklusive Semantik und Fehlerverhalten, verbirgt die Umsetzung und ist leicht korrekt, schwer falsch nutzbar. Weder Vorratshaltung von Operationen noch 1:1-Abbildung der Interna."
 },
 {
  "id": "c3q64",
  "chapter": 3,
  "lz": "LZ 03-07",
  "r": "R2",
  "type": "single",
  "q": "Welcher Trade-off besteht bei der Granularität von Schnittstellen?",
  "options": [
   "Bei lokalen Aufrufen sind grobgranulare Schnittstellen genauso vorteilhaft wie bei Remote-Aufrufen, da der Overhead pro Aufruf gleich ist.",
   "Feingranulare Schnittstellen sind flexibel, erzeugen aber viele (bei Remote teure) Aufrufe; grobgranulare bündeln, sind aber weniger flexibel.",
   "Die richtige Granularität ergibt sich allein aus der internen Datenstruktur des Anbieters.",
   "Feingranulare Schnittstellen koppeln Aufrufer loser, da jede Operation nur wenig tut."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Der Overhead pro Aufruf ist keineswegs gleich: Remote-Aufrufe kosten durch Netzwerk und Serialisierung um Größenordnungen mehr als lokale. Deshalb lohnt grobe Granularität vor allem bei Remote-Schnittstellen.",
   "Richtig: Feine Operationen lassen sich flexibel kombinieren, erfordern aber viele Aufrufe – über das Netzwerk wird das teuer. Grobe Operationen bündeln Arbeit in wenige Aufrufe, passen dafür aber weniger flexibel zu unterschiedlichen Anwendungsfällen.",
   "Falsch: Die interne Datenstruktur ist ein Implementierungsdetail und sollte die Schnittstelle gerade nicht bestimmen. Die passende Granularität richtet sich nach den Anwendungsfällen der Nutzer und nach dem Kommunikationsweg.",
   "Falsch: Viele feine Aufrufe zwingen den Aufrufer oft, Ablauf und Reihenfolge der Operationen beim Anbieter zu kennen. Dadurch steigt die Kopplung eher, statt zu sinken."
  ],
  "explanation": "Feine Schnittstellen sind flexibel, erzeugen aber viele Aufrufe – bei Remote-Kommunikation teuer – und koppeln oft an Abläufe. Grobe bündeln, sind weniger flexibel. Die Wahl richtet sich nach Nutzung und Kommunikationsweg."
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
   "Das Robustheitsprinzip bedeutet, eingehende Daten ohne Validierung zu akzeptieren, solange sie sich verarbeiten lassen.",
   "Neue optionale Felder sind meist rückwärtskompatibel; das Entfernen/Umbenennen bestehender Felder in der Regel nicht.",
   "Versionierung ist nur bei externen Schnittstellen sinnvoll, nicht bei teamübergreifend genutzten internen Schnittstellen."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Richtig: Rückwärtskompatible Änderungen erlauben bestehenden Nutzern, unverändert weiterzuarbeiten. Ist ein Bruch unvermeidbar, ermöglicht eine Versionierung, alte und neue Version eine Zeit lang parallel anzubieten.",
   "Richtig: Das Robustheitsprinzip (nach Postel) besagt: selbst nur korrekte, spezifikationskonforme Daten senden, beim Empfang aber z. B. unbekannte Zusatzfelder verkraften. So bricht die Kommunikation nicht bei jeder kleinen Abweichung.",
   "Falsch: Tolerant empfangen heißt, unbekannte oder optionale Teile zu verkraften, nicht auf Validierung zu verzichten. Ungeprüft übernommene Eingaben wären ein Sicherheits- und Korrektheitsrisiko.",
   "Richtig: Ein neues optionales Feld können alte Nutzer einfach ignorieren, daher sind additive Änderungen meist kompatibel. Wird ein Feld entfernt oder umbenannt, finden Nutzer, die es erwarten, es nicht mehr und brechen.",
   "Falsch: Entscheidend ist nicht, ob eine Schnittstelle extern oder intern ist, sondern ob mehrere unabhängige Nutzer sie verwenden. Auch interne, teamübergreifend genutzte Schnittstellen brauchen oft Versionierung oder Übergangsregeln."
  ],
  "explanation": "Robuste Schnittstellen sind rückwärtskompatibel oder versioniert, ändern sich additiv und folgen dem Robustheitsprinzip. Tolerant empfangen heißt nicht ungeprüft akzeptieren; Versionierung kann auch intern nötig sein."
 },
 {
  "id": "c3q66",
  "chapter": 3,
  "lz": "LZ 03-01",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen treffen zu, wenn eine Architektur gezielt eine Qualitätsanforderung wie „hohe Verfügbarkeit“ erfüllen soll?",
  "options": [
   "Solche Taktiken bringen Trade-offs mit sich (z. B. erhöht Redundanz Kosten und Komplexität), die bewusst abzuwägen sind.",
   "Durch bewusste Entwurfsentscheidungen bzw. Taktiken (z. B. Redundanz, Ausfallübernahme), die auf das Qualitätsziel einzahlen.",
   "Durch redundante Instanzen der Anwendungsbausteine; gemeinsam genutzte Komponenten wie Datenbank oder Netzwerk spielen dafür keine Rolle.",
   "Hauptsächlich durch ausführliche Tests vor dem Go-live, die mögliche Ausfälle aufdecken.",
   "Durch eine Microservice-Architektur, da sie Ausfälle von selbst auf einzelne Services begrenzt."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Richtig: Jede Taktik hat ihren Preis: Redundanz erhöht etwa Kosten, Betriebsaufwand und Komplexität, z. B. durch Datensynchronisation. Diese Trade-offs müssen bewusst gegen andere Qualitätsziele abgewogen werden.",
   "Richtig: Qualitätsanforderungen erreicht man über gezielte Entwurfsentscheidungen bzw. Taktiken, die auf das Ziel einzahlen. Für Verfügbarkeit sind das etwa Redundanz, Ausfallübernahme (Failover) oder Überwachung mit automatischem Neustart.",
   "Falsch: Gemeinsam genutzte Komponenten wie Datenbank oder Netzwerk sind oft Single Points of Failure. Redundante Anwendungsinstanzen nützen wenig, wenn alle von derselben einzelnen Datenbank abhängen.",
   "Falsch: Tests können Schwachstellen aufdecken, erzeugen aber selbst keine Verfügbarkeit. Die Fähigkeit, Ausfälle zu verkraften, muss die Architektur durch geeignete Strukturen ermöglichen.",
   "Falsch: Ein Architekturstil begrenzt Ausfälle nicht von selbst. Ohne Resilienzmaßnahmen wie Timeouts oder Circuit Breaker können sich Ausfälle über Service-Aufrufe sogar kaskadenartig ausbreiten."
  ],
  "explanation": "Hohe Verfügbarkeit erreicht man durch gezielte Taktiken wie Redundanz und Ausfallübernahme – inklusive der gemeinsam genutzten Komponenten – und wägt deren Kosten ab. Tests oder ein Architekturstil allein liefern keine Verfügbarkeit."
 },
 {
  "id": "c4q1",
  "chapter": 4,
  "lz": "LZ 04-01",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zu den zentralen Zwecken von Architekturdokumentation treffen zu?",
  "options": [
   "Sie macht wichtige Architekturentscheidungen samt Begründung auch später noch nachvollziehbar.",
   "Sie sollte vor allem den Ist-Zustand abbilden; Begründungen und verworfene Alternativen lenken davon ab und gehören nicht hinein.",
   "Sie schafft Kommunikation und gemeinsames Verständnis unter den Stakeholdern.",
   "Sie unterstützt Einarbeitung, Wartung und fundierte weitere Entscheidungen.",
   "Sie liefert den verbindlichen Nachweis, dass die geforderten Qualitätsanforderungen tatsächlich erfüllt sind."
  ],
  "correct": [
   0,
   2,
   3
  ],
  "optExpl": [
   "Richtig: Code zeigt, WAS gebaut wurde, aber nicht, WARUM. Dokumentierte Entscheidungen mit Begründung verhindern, dass später jemand eine bewusste Entscheidung unwissentlich rückgängig macht oder dieselbe Diskussion erneut führt.",
   "Falsch: Den Ist-Zustand kann man zur Not auch aus dem Code rekonstruieren – Begründungen und verworfene Alternativen dagegen nicht. Gerade sie machen Architekturdokumentation wertvoll, weil sie das Wissen festhalten, das sonst mit den Köpfen verloren geht.",
   "Richtig: Dokumentation ist vor allem ein Kommunikationsmittel. Sie gibt allen Stakeholdern eine gemeinsame Grundlage und ein gemeinsames Vokabular, sodass Missverständnisse früh sichtbar werden.",
   "Richtig: Neue Teammitglieder finden sich schneller zurecht, und bei Wartung und Weiterentwicklung kann man Änderungen gegen bestehende Strukturen und Entscheidungen abgleichen. So werden weitere Entscheidungen fundiert statt aus dem Bauch getroffen.",
   "Falsch: Dokumentation beschreibt die Architektur und die beabsichtigten Lösungsansätze, sie beweist aber nicht deren Wirkung. Ob Qualitätsanforderungen erfüllt sind, zeigen erst Architekturbewertung, Tests und Messungen."
  ],
  "explanation": "Architekturdokumentation dient Kommunikation, Nachvollziehbarkeit (inkl. Begründungen und verworfener Alternativen), Einarbeitung und Wartung. Sie ist kein Nachweis der Qualitätserfüllung."
 },
 {
  "id": "c4q2",
  "chapter": 4,
  "lz": "LZ 04-02",
  "r": "R2",
  "type": "single",
  "q": "Wie lässt sich arc42 am treffendsten einordnen?",
  "options": [
   "Als Standard, der die verbindlichen Belange, Stakeholder und Viewpoints einer Architekturbeschreibung normiert.",
   "Als bewährtes Template bzw. Gliederungsschema mit zwölf Abschnitten für die Dokumentation von Softwarearchitekturen.",
   "Als Methode, die aus den Qualitätszielen systematisch die passenden Architekturentscheidungen ableitet.",
   "Als kuratierte Sammlung bewährter Architektur- und Entwurfsmuster für verteilte Systeme."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Das beschreibt ISO/IEC/IEEE 42010, die den begrifflichen Rahmen (Stakeholder, Belange, Viewpoints) normiert. arc42 ist kein Standard, sondern eine pragmatische Vorlage, die man nach Bedarf befüllt.",
   "Richtig: arc42 ist ein frei verfügbares, bewährtes Gliederungsschema mit zwölf Abschnitten – von Einführung und Zielen über Kontext und Bausteinsicht bis zu Risiken und Glossar. Man füllt nur die Abschnitte, die für das jeweilige System relevant sind.",
   "Falsch: Das systematische Ableiten von Entscheidungen aus Qualitätszielen ist eine Entwurfsmethode (z. B. Attribute-Driven Design). arc42 sagt, WO man Entscheidungen festhält, aber nicht, WIE man zu ihnen kommt.",
   "Falsch: Eine Mustersammlung (z. B. POSA oder GoF) liefert Lösungsbausteine für den Entwurf. arc42 enthält keine Muster, sondern gibt nur die Struktur der Dokumentation vor."
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
   "Sie enthält nur technische Schnittstellen; fachliche Kommunikationsbeziehungen beschreibt die Anforderungsdokumentation.",
   "Sie behandelt das System bewusst als Blackbox und zeigt seine interne Bausteinstruktur nicht.",
   "Sie stellt die fachlichen und/oder technischen Schnittstellen des Systems zu seiner Umgebung dar.",
   "Sie zeigt neben den externen Nachbarn auch die wichtigsten internen Subsysteme, damit die Schnittstellen zugeordnet werden können.",
   "Sie zeigt das System als Ganzes (Blackbox) mit seinen externen Nachbarn (Nutzer, Fremdsysteme)."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Falsch: Die Kontextabgrenzung umfasst einen fachlichen und einen technischen Kontext. Welche Partner welche Daten fachlich austauschen, ist ein zentraler Teil der Architekturdokumentation und wird nicht an die Anforderungsdokumentation ausgelagert.",
   "Richtig: Die Kontextsicht betrachtet das System bewusst von außen. Indem sie die Interna ausblendet, lenkt sie den Blick auf die Systemgrenze und die Verantwortung des Systems gegenüber seiner Umgebung.",
   "Richtig: Sie beschreibt, was über die Systemgrenze fließt – fachlich (welche Informationen mit wem) und/oder technisch (über welche Kanäle und Protokolle). Das klärt früh, wofür das System verantwortlich ist und wofür nicht.",
   "Falsch: Interne Subsysteme gehören in die Bausteinsicht (Ebene 1 und tiefer), nicht in die Kontextsicht. Die Zuordnung von externen Schnittstellen zu internen Bausteinen erfolgt dort, die Kontextsicht bleibt auf Blackbox-Ebene.",
   "Richtig: Die Kontextsicht zeigt das System als eine einzige Blackbox, umgeben von seinen Nachbarn wie Nutzern und Fremdsystemen. Sie ist damit die höchste Abstraktionsebene der Architekturdokumentation."
  ],
  "explanation": "Die Kontextsicht zeigt das System als Blackbox mit seinen externen Nachbarn und Schnittstellen – fachlich und technisch. Interne Subsysteme gehören in die Bausteinsicht."
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
   "Sie beschreibt je Baustein dessen Verantwortlichkeit und seine Schnittstellen.",
   "Sie zeigt, auf welchen Knoten die einzelnen Bausteine betrieben werden.",
   "Sie verfeinert Bausteine hierarchisch als Whitebox der jeweils enthaltenen Bausteine.",
   "Sie legt die zeitliche Reihenfolge der Aufrufe zwischen den Bausteinen fest."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Richtig: Die Bausteinsicht beschreibt die statische Struktur – aus welchen Bausteinen das System besteht. Jeder Baustein wird zunächst als Blackbox und bei Bedarf als Whitebox mit seinem Innenleben dargestellt.",
   "Richtig: Zu jedem Baustein gehört, wofür er verantwortlich ist und welche Schnittstellen er anbietet bzw. benötigt. Erst damit wird die Zerlegung verständlich und lassen sich Bausteine unabhängig voneinander entwickeln.",
   "Falsch: Die Zuordnung von Software zu Rechnerknoten ist Gegenstand der Verteilungssicht. Die Bausteinsicht ist bewusst unabhängig von der Infrastruktur, damit dieselbe Struktur unterschiedlich verteilt werden kann.",
   "Richtig: Die Bausteinsicht ist hierarchisch: Die Whitebox eines Bausteins zeigt die enthaltenen Bausteine, die ihrerseits wieder als Blackbox beschrieben und weiter verfeinert werden können. So kann jeder Leser auf der für ihn passenden Ebene einsteigen.",
   "Falsch: Zeitliche Abläufe und Aufrufreihenfolgen gehören in die Laufzeitsicht. Die Bausteinsicht zeigt nur, welche Bausteine es gibt und wie sie strukturell verbunden sind, nicht wann sie miteinander interagieren."
  ],
  "explanation": "Die Bausteinsicht zeigt die statische, hierarchisch verfeinerte Zerlegung mit Verantwortlichkeiten und Schnittstellen. Abläufe gehören in die Laufzeit-, die Knotenzuordnung in die Verteilungssicht."
 },
 {
  "id": "c4q5",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen beschreiben die Laufzeitsicht zutreffend?",
  "options": [
   "Den Ablauf innerhalb eines einzelnen Bausteins (z. B. dessen Algorithmus), nicht das Zusammenspiel mehrerer Bausteine.",
   "Die Zuordnung der Bausteine zu physischen Ausführungsknoten.",
   "Die statische Zerlegung des Systems in seine Bausteine und deren Schnittstellen.",
   "Das dynamische Zusammenspiel von Bausteinen in ausgewählten konkreten Szenarien.",
   "Neben fachlichen Abläufen auch Start-, Fehler- oder Betriebsszenarien, wenn diese architekturrelevant sind."
  ],
  "correct": [
   3,
   4
  ],
  "optExpl": [
   "Falsch: Die Laufzeitsicht zeigt gerade das Zusammenspiel mehrerer Bausteine. Interne Algorithmen eines einzelnen Bausteins sind Detailentwurf und gehören allenfalls in dessen Whitebox-Beschreibung.",
   "Falsch: Die Zuordnung von Bausteinen bzw. Artefakten zu physischen Knoten ist die Verteilungssicht. Die Laufzeitsicht beschreibt Verhalten, nicht Infrastruktur.",
   "Falsch: Die statische Zerlegung mit Schnittstellen ist die Bausteinsicht. Die Laufzeitsicht nutzt diese Bausteine, zeigt aber deren dynamisches Verhalten über die Zeit.",
   "Richtig: Die Laufzeitsicht zeigt anhand ausgewählter, architekturrelevanter Szenarien, wie Bausteine zur Laufzeit zusammenarbeiten. Man wählt bewusst wenige wichtige Abläufe aus, statt alle denkbaren zu dokumentieren.",
   "Richtig: Neben fachlichen Abläufen können auch Systemstart, Fehlerbehandlung oder Betriebsabläufe architekturrelevant sein. Gerade solche Szenarien zeigen oft, wie Qualitätsziele wie Verfügbarkeit oder Robustheit umgesetzt werden."
  ],
  "explanation": "Die Laufzeitsicht zeigt das Zusammenspiel von Bausteinen in ausgewählten Szenarien – fachlich, aber auch Start, Fehlerfall oder Betrieb. Statische Zerlegung, interne Algorithmen und Knotenzuordnung gehören anderswohin."
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
   "Die Zuordnung der Bausteine zu den Teams, die sie entwickeln und betreiben.",
   "Die Reihenfolge, in der die Komponenten beim Systemstart hochgefahren werden.",
   "Die logische Zerlegung des Systems in seine fachlichen Bausteine."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Die Verteilungssicht zeigt, welche Software-Artefakte auf welchen Knoten (Server, Container, Geräte) laufen und über welche Kanäle diese kommunizieren. Häufig wird sie für mehrere Umgebungen wie Test und Produktion dargestellt.",
   "Falsch: Die Zuordnung von Bausteinen zu Teams ist eine organisatorische Frage, keine technische Infrastruktur. Sie kann zwar architekturrelevant sein (Stichwort Conway), ist aber nicht Gegenstand der Verteilungssicht.",
   "Falsch: Die Startreihenfolge ist dynamisches Verhalten und wird als Laufzeitszenario beschrieben. Die Verteilungssicht ist statisch und zeigt nur, wo etwas läuft, nicht in welcher Reihenfolge es hochfährt.",
   "Falsch: Die logische Zerlegung in fachliche Bausteine ist die Bausteinsicht. Die Verteilungssicht bildet die daraus entstehenden Artefakte erst auf die Infrastruktur ab."
  ],
  "explanation": "Die Verteilungssicht bildet Artefakte auf Knoten ab und zeigt die Kommunikationskanäle – ggf. für mehrere Umgebungen. Bausteinzerlegung, Team-Zuordnung oder Startablauf gehören nicht dazu."
 },
 {
  "id": "c4q7",
  "chapter": 4,
  "lz": "LZ 04-09",
  "r": "R3",
  "type": "single",
  "q": "Was regelt der Standard ISO/IEC/IEEE 42010?",
  "options": [
   "Eine konkrete Dokumentationsvorlage mit zwölf fest vorgegebenen Abschnitten.",
   "Verbindliche Vorgaben, welche Sichten ein System mindestens dokumentieren muss.",
   "Einen Katalog von Qualitätsmerkmalen wie Wartbarkeit, Performanz und Sicherheit.",
   "Konzepte und Begriffe der Architekturbeschreibung (Stakeholder, Belange/Concerns, Viewpoints/Views)."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Die Vorlage mit zwölf Abschnitten ist arc42. ISO/IEC/IEEE 42010 gibt keine konkrete Gliederung vor, sondern definiert Begriffe und Anforderungen an Architekturbeschreibungen.",
   "Falsch: 42010 schreibt keine festen Pflicht-Sichten vor. Sie verlangt vielmehr, dass man Sichten passend zu den Belangen der Stakeholder auswählt und über Viewpoints festlegt, wie sie aussehen.",
   "Falsch: Ein Katalog von Qualitätsmerkmalen wie Wartbarkeit oder Sicherheit ist ISO/IEC 25010. Die beiden Normen werden leicht verwechselt, behandeln aber völlig unterschiedliche Themen.",
   "Richtig: 42010 liefert den begrifflichen Rahmen: Stakeholder haben Belange (Concerns), Viewpoints legen fest, wie Sichten (Views) diese Belange adressieren. So lassen sich Architekturbeschreibungen einheitlich verstehen und vergleichen."
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
   "Das Aktivitätsdiagramm für die parallele Verzweigung von Aktivitäten im Geschäftsprozess.",
   "Das Sequenzdiagramm.",
   "Das Zustandsdiagramm für die Zustände, die ein einzelnes Objekt durchläuft.",
   "Das Klassendiagramm für die statischen Assoziationen der beteiligten Klassen."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Das Aktivitätsdiagramm zeigt Kontroll- und Datenfluss einschließlich Verzweigungen und Nebenläufigkeit. Die zeitlich geordneten Nachrichten zwischen benannten Objekten stellt es aber nicht in den Mittelpunkt.",
   "Richtig: Das Sequenzdiagramm ordnet die Beteiligten nebeneinander an und zeigt entlang ihrer Lebenslinien von oben nach unten, wer wann welche Nachricht an wen sendet. Genau das ist der zeitlich geordnete Nachrichtenaustausch.",
   "Falsch: Das Zustandsdiagramm beschreibt die Zustände und Übergänge eines einzelnen Objekts. Das Zusammenspiel mehrerer Objekte und die Reihenfolge ihrer Nachrichten zeigt es nicht.",
   "Falsch: Das Klassendiagramm ist ein statisches Strukturdiagramm. Es zeigt Klassen und ihre Beziehungen, aber keinerlei zeitlichen Ablauf."
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
   "Alle Architekturentscheidungen des Projekts gebündelt in einem einzigen großen Dokument zu führen.",
   "Die noch offenen, künftig zu treffenden Entscheidungen samt ihren Deadlines zu verwalten.",
   "Eine spätere Revision als neues ADR festzuhalten, das das alte ablöst, statt das alte zu überschreiben.",
   "Die Entscheidung so festzuhalten, dass sie im weiteren Projektverlauf nicht mehr geändert werden darf.",
   "Die getroffene Entscheidung mit Kontext, betrachteten Alternativen und Konsequenzen festzuhalten."
  ],
  "correct": [
   2,
   4
  ],
  "optExpl": [
   "Falsch: ADRs sind bewusst kurze Einzeldokumente – je Entscheidung eines. Ein großes Sammeldokument wäre schwer zu pflegen und würde den Vorteil verlieren, einzelne Entscheidungen gezielt referenzieren und ablösen zu können.",
   "Falsch: Ein ADR dokumentiert eine getroffene (oder gerade zu treffende) Entscheidung samt Begründung. Offene Punkte mit Fristen zu verwalten ist Aufgabe von Backlog oder Projektplanung, nicht eines Entscheidungsprotokolls.",
   "Richtig: Wird eine Entscheidung revidiert, legt man ein neues ADR an und markiert das alte als „superseded“. So bleibt nachvollziehbar, was früher galt und warum man es geändert hat.",
   "Falsch: Ein ADR friert Entscheidungen nicht ein; Architektur darf sich mit neuen Erkenntnissen weiterentwickeln. Das ADR macht nur nachvollziehbar, was wann aus welchen Gründen entschieden wurde.",
   "Richtig: Kontext, betrachtete Alternativen und Konsequenzen sind die Kernbestandteile eines ADR. Im Beispiel hielte es fest, warum der Message-Broker gewählt wurde, warum REST verworfen wurde und welche Folgen (z. B. eventuelle Konsistenz) man in Kauf nimmt."
  ],
  "explanation": "Ein ADR hält je Entscheidung Kontext, Alternativen und Konsequenzen fest. Revisionen dokumentiert man als neues ADR, das das alte ablöst – so bleibt die Historie erhalten. ADRs sind weder Sammeldokument noch Terminplaner noch ein Änderungsverbot."
 },
 {
  "id": "c4q10",
  "chapter": 4,
  "lz": "LZ 04-01",
  "r": "R1",
  "type": "multi",
  "q": "Ein Architekt dokumentiert dasselbe System für Management, Betrieb und Entwicklung. Welche Aussagen zu zielgruppengerechter Dokumentation treffen zu?",
  "options": [
   "Zielgruppengerecht heißt vor allem, die Notation zu wechseln (z. B. UML für Entwicklung, Prosa für Management); der Inhalt bleibt derselbe.",
   "Inhalt, Detailgrad und Notation richten sich am Informationsbedarf der jeweiligen Zielgruppe aus.",
   "Für das Management genügt oft eine Übersicht, während die Entwicklung detaillierte Bausteinbeschreibungen braucht.",
   "Jede Zielgruppe erhält ein eigenes, inhaltlich unabhängiges Modell des Systems.",
   "Verschiedene Zielgruppen benötigen häufig unterschiedliche Sichten bzw. Abstraktionsebenen desselben Systems."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Falsch: Eine andere Notation allein reicht nicht. Das Management braucht andere Inhalte und einen anderen Detailgrad als die Entwicklung – etwa Kosten, Risiken und Übersicht statt Schnittstellendetails.",
   "Richtig: Ausgangspunkt zielgruppengerechter Dokumentation ist der Informationsbedarf der Leser. Daraus ergibt sich, welche Inhalte, wie viel Detail und welche Darstellungsform sinnvoll sind.",
   "Richtig: Das Management will Überblick, Ziele und Risiken, die Entwicklung braucht präzise Bausteinbeschreibungen mit Schnittstellen. Dieselbe Detailtiefe für alle würde die einen überfordern und die anderen unterversorgen.",
   "Falsch: Alle Darstellungen beschreiben dasselbe System und müssen widerspruchsfrei zueinander sein. Unabhängige Modelle würden auseinanderlaufen und zu widersprüchlichen Aussagen führen.",
   "Richtig: Betrieb interessiert sich z. B. vor allem für die Verteilungssicht, die Entwicklung für Bausteine und Laufzeitverhalten. Unterschiedliche Sichten und Abstraktionsebenen auf dasselbe System bedienen diese Bedarfe gezielt."
  ],
  "explanation": "Zielgruppengerechte Doku passt Inhalt, Detailgrad und Notation an den Informationsbedarf an – mit unterschiedlichen, aber widerspruchsfreien Sichten auf dasselbe System. Nur die Notation zu wechseln reicht nicht."
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
    "text": "Sequenzdiagramm",
    "cat": 1
   },
   {
    "text": "Zustandsdiagramm",
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
   "Beide gehören zur Kontextsicht, die das System als Ganzes von seiner Umgebung abgrenzt.",
   "Der fachliche Kontext gehört in die Anforderungsdokumentation, der technische in die Architekturdokumentation.",
   "Beide unterscheiden sich nur durch die verwendete Notation, nicht durch den dargestellten Inhalt.",
   "Der technische Kontext zeigt bereits die interne technische Bausteinstruktur des Systems."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Richtig: Der fachliche Kontext beantwortet, mit wem das System welche Informationen austauscht, der technische Kontext, über welche Kanäle und Protokolle das geschieht. Beispiel: fachlich „Bestellung an Lieferant“, technisch „REST über HTTPS“.",
   "Richtig: Fachlicher und technischer Kontext sind zwei Ausprägungen derselben Kontextsicht. Beide grenzen das System als Ganzes von seiner Umgebung ab und betrachten nur die Systemgrenze.",
   "Falsch: Beide sind Teil der Kontextsicht in der Architekturdokumentation (in arc42 Abschnitt 3). Die Trennung verläuft nach Betrachtungsebene – fachlich vs. technisch –, nicht nach Dokumentart.",
   "Falsch: Der Unterschied liegt im Inhalt, nicht in der Darstellung. Der fachliche Kontext zeigt Partner und ausgetauschte Informationen, der technische Kontext zeigt Kanäle, Protokolle und ggf. Hardware.",
   "Falsch: Auch der technische Kontext bleibt an der Systemgrenze und behandelt das System als Blackbox. Die interne Struktur gehört in die Bausteinsicht, die technische Ausführungsumgebung in die Verteilungssicht."
  ],
  "explanation": "Beide Darstellungen betreffen die Systemgrenze: fachlich (welche Partner/Daten) vs. technisch (welche Kanäle/Protokolle). Sie zeigen keine Interna, unterscheiden sich inhaltlich (nicht nur notationell) und sind beide Teil der Kontextsicht."
 },
 {
  "id": "c4q12",
  "chapter": 4,
  "lz": "LZ 04-03",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen über ein UML-Komponentendiagramm treffen zu?",
  "options": [
   "Komponenten/Bausteine und ihre angebotenen bzw. benötigten Schnittstellen.",
   "Die Reihenfolge, in der die Komponenten zur Laufzeit instanziiert und aufgerufen werden.",
   "Es zeigt die statische Struktur, nicht das zeitliche Ablaufverhalten.",
   "Physische Rechnerknoten und die darauf ausgeführten Artefakte.",
   "Die vollständige Signatur jeder Operation samt Parametertypen und Sichtbarkeiten."
  ],
  "correct": [
   0,
   2
  ],
  "optExpl": [
   "Richtig: Komponentendiagramme zeigen Bausteine sowie ihre angebotenen und benötigten Schnittstellen (Lollipop- und Socket-Notation). Damit eignen sie sich gut für die Bausteinsicht.",
   "Falsch: Die zeitliche Reihenfolge von Instanziierung und Aufrufen ist dynamisches Verhalten. Dafür nutzt man Sequenz- oder andere Interaktionsdiagramme in der Laufzeitsicht.",
   "Richtig: Das Komponentendiagramm ist ein Strukturdiagramm und zeigt, welche Teile es gibt und wie sie über Schnittstellen verbunden sind. Wie sie sich im Zeitverlauf verhalten, zeigt es nicht.",
   "Falsch: Physische Knoten und die darauf ausgeführten Artefakte zeigt das Verteilungsdiagramm. Komponentendiagramme bleiben auf der logischen Ebene der Software-Bausteine.",
   "Falsch: Vollständige Operationssignaturen mit Parametertypen und Sichtbarkeiten sind Sache des Klassendiagramms. Komponentendiagramme abstrahieren davon und zeigen Schnittstellen als Ganzes."
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
   "Keine einzelne Sicht kann alle relevanten Aspekte gleichzeitig darstellen.",
   "Dieselben Bausteine können in mehreren Sichten mit jeweils anderem Fokus auftauchen.",
   "Mehrere Sichten braucht man vor allem bei verteilten Systemen; ein Monolith lässt sich in einer Sicht vollständig beschreiben.",
   "Jede Sicht ist ein eigenständiges Modell und wird unabhängig von den anderen konsistent gehalten.",
   "Verschiedene Sichten adressieren unterschiedliche Fragen und Stakeholder."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Richtig: Struktur, Laufzeitverhalten und Verteilung lassen sich nicht sinnvoll in einem Diagramm vereinen, ohne dass es unlesbar wird. Jede Sicht blendet bewusst Aspekte aus, um andere klar darzustellen.",
   "Richtig: Ein Baustein taucht z. B. in der Bausteinsicht mit seinen Schnittstellen, in der Laufzeitsicht in einem Ablauf und in der Verteilungssicht als Artefakt auf einem Knoten auf. Die Sichten beleuchten dasselbe Element aus verschiedenen Blickwinkeln.",
   "Falsch: Auch ein Monolith hat eine innere Struktur, ein Laufzeitverhalten und eine Verteilung auf Infrastruktur. Diese Aspekte beantworten unterschiedliche Fragen, daher reicht eine Sicht auch hier nicht.",
   "Falsch: Sichten sind keine unabhängigen Modelle, sondern verschiedene Blickwinkel auf dasselbe System. Sie müssen deshalb untereinander konsistent sein – ein Baustein darf nicht in jeder Sicht etwas anderes bedeuten.",
   "Richtig: Entwickler fragen nach Struktur und Schnittstellen, Betrieb nach Knoten und Kanälen, Fachseite nach Abläufen. Jede Sicht adressiert die Belange bestimmter Stakeholder."
  ],
  "explanation": "Mehrere Sichten sind nötig, weil keine Sicht alle Aspekte und Stakeholder-Fragen abdeckt – das gilt für jedes System, auch einen Monolithen. Sichten müssen untereinander konsistent sein."
 },
 {
  "id": "c4q15",
  "chapter": 4,
  "lz": "LZ 04-03",
  "r": "R2",
  "type": "multi",
  "q": "Welche Vorteile bietet eine standardisierte Notation (z. B. UML) gegenüber beliebigen „Kästchen und Pfeilen“?",
  "options": [
   "Die Diagrammelemente haben eine vereinbarte, für andere eindeutig nachvollziehbare Bedeutung.",
   "Standardnotation erzwingt einen einheitlichen Detailgrad über alle Diagramme hinweg.",
   "Sie erleichtert die eindeutige Kommunikation zwischen verschiedenen Stakeholdern und Werkzeugen.",
   "Diagramme in Standardnotation bleiben automatisch konsistent mit dem Code.",
   "Eine Legende ist bei UML-Diagrammen überflüssig, da die Bedeutung aller Elemente standardisiert ist."
  ],
  "correct": [
   0,
   2
  ],
  "optExpl": [
   "Richtig: Bei UML ist festgelegt, was ein Element oder eine Pfeilart bedeutet – etwa Abhängigkeit, Vererbung oder Komposition. Bei frei gezeichneten Kästchen und Pfeilen muss der Leser die Bedeutung dagegen raten.",
   "Falsch: Die Notation legt die Bedeutung der Elemente fest, nicht den Detailgrad. Wie detailliert ein Diagramm ist, wählt man je nach Zweck und Zielgruppe – UML erlaubt grobe Übersichten ebenso wie feine Details.",
   "Richtig: Eine gemeinsame Notation schafft eine gemeinsame Sprache zwischen Stakeholdern und ermöglicht den Austausch zwischen Werkzeugen. Das reduziert Missverständnisse beim Lesen fremder Diagramme.",
   "Falsch: Auch UML-Diagramme veralten, sobald sich der Code ändert und niemand sie nachzieht. Konsistenz mit dem Code entsteht nur durch Pflege oder Generierung, nicht durch die Notation.",
   "Falsch: Eigene Stereotypen, Farben oder Abkürzungen erklärt der Standard nicht, und nicht jeder Leser kennt UML im Detail. Eine Legende bleibt daher auch bei UML-Diagrammen sinnvoll."
  ],
  "explanation": "Standardnotation gibt Elementen eine vereinbarte Bedeutung und erleichtert Kommunikation und Werkzeugnutzung. Sie hält Diagramme nicht automatisch aktuell, ersetzt nicht jede Legende und legt keinen Detailgrad fest."
 },
 {
  "id": "c4q16",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R1",
  "type": "single",
  "q": "Du möchtest zeigen, wie ein Bestellvorgang zur Laufzeit zwischen mehreren Bausteinen abläuft. Welche Sicht passt am besten?",
  "options": [
   "Die Verteilungssicht, da der Vorgang mehrere Knoten durchläuft.",
   "Die Bausteinsicht, da sie alle beteiligten Bausteine und deren Schnittstellen zeigt.",
   "Die Laufzeitsicht (z. B. als Sequenz- oder Aktivitätsdiagramm).",
   "Die Kontextsicht, da eine Bestellung ein fachlicher Anwendungsfall ist."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Die Verteilungssicht zeigt, auf welchen Knoten die Artefakte laufen, nicht in welcher Reihenfolge Bausteine bei einem Vorgang zusammenarbeiten. Dass der Ablauf mehrere Knoten berührt, macht ihn noch nicht zum Thema der Verteilungssicht.",
   "Falsch: Die Bausteinsicht zeigt die beteiligten Bausteine und Schnittstellen statisch. Wer wann wen aufruft, ist dynamisches Verhalten und gehört in die Laufzeitsicht.",
   "Richtig: Die Laufzeitsicht beschreibt das Zusammenspiel von Bausteinen in konkreten Szenarien wie einem Bestellvorgang. Typische Darstellungen sind Sequenz- oder Aktivitätsdiagramme.",
   "Falsch: Die Kontextsicht zeigt das System als Blackbox mit seinen Nachbarn. Interne Abläufe zwischen Bausteinen sind dort bewusst ausgeblendet, auch wenn die Bestellung ein fachlicher Anwendungsfall ist."
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
   "Wireframes bzw. Entwürfe für jeden Dialog der Benutzeroberfläche.",
   "Die Architekturentscheidungen mit ihren Begründungen.",
   "Der Projekt- und Releaseplan mit Meilensteinen und Ressourcen.",
   "Risiken und technische Schulden."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Die Kontextabgrenzung ist ein eigener arc42-Abschnitt (Abschnitt 3). Sie zeigt das System mit seinen fachlichen und technischen Schnittstellen zur Umgebung.",
   "Falsch: Wireframes und Dialogentwürfe gehören zum UX- bzw. UI-Design. arc42 dokumentiert die Architektur, also Strukturen, Entscheidungen und Konzepte, nicht die Gestaltung einzelner Masken.",
   "Richtig: Architekturentscheidungen mit Begründungen haben in arc42 einen eigenen Abschnitt (Abschnitt 9). Hier passen z. B. ADRs hinein.",
   "Falsch: Projekt- und Releaseplanung mit Meilensteinen und Ressourcen ist Aufgabe des Projektmanagements. arc42 enthält zwar Randbedingungen, aber keinen Projektplan.",
   "Richtig: Risiken und technische Schulden sind ein eigener arc42-Abschnitt (Abschnitt 11). Sie sichtbar zu machen ist eine wichtige Aufgabe der Architekturdokumentation."
  ],
  "explanation": "arc42 umfasst u. a. Kontextabgrenzung, Qualitätsanforderungen, Architekturentscheidungen sowie Risiken und technische Schulden. UI-Wireframes und Projektpläne gehören nicht dazu."
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
    "text": "Über welche Netzwerkprotokolle kommunizieren die Rechner?",
    "cat": 1
   },
   {
    "text": "Auf welchen Knoten läuft welche Komponente in welcher Umgebung?",
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
   "Es bildet die Verteilung von Artefakten auf Ausführungsknoten ab.",
   "Es gehört zur statischen Struktursicht.",
   "Es stellt primär die Zustandsübergänge eines Objekts über seine Lebensdauer dar.",
   "Es stellt primär den zeitlichen Ablauf von Nachrichten zwischen Objekten dar.",
   "Es zeigt Typen/Klassen und ihre Beziehungen (z. B. Assoziation, Vererbung)."
  ],
  "correct": [
   1,
   4
  ],
  "optExpl": [
   "Falsch: Die Verteilung von Artefakten auf Ausführungsknoten zeigt das Verteilungsdiagramm. Das Klassendiagramm bleibt auf der Ebene von Typen und ihren Beziehungen.",
   "Richtig: Das Klassendiagramm ist ein Strukturdiagramm und beschreibt, was es gibt, nicht was wann passiert. Es gehört damit zur statischen Sicht auf das System.",
   "Falsch: Zustandsübergänge eines Objekts über seine Lebensdauer zeigt das Zustandsdiagramm. Das Klassendiagramm kennt keine Zustände oder Übergänge.",
   "Falsch: Den zeitlichen Nachrichtenablauf zwischen Objekten zeigt das Sequenzdiagramm. Das Klassendiagramm beschreibt nur die statischen Beziehungen, über die solche Nachrichten möglich sind.",
   "Richtig: Klassendiagramme zeigen Klassen bzw. Typen mit Attributen und Operationen sowie ihre Beziehungen wie Assoziation, Aggregation oder Vererbung. Sie eignen sich z. B. für Domänenmodelle oder den Detailentwurf."
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
   "Eine Entscheidung sollte erst dann als ADR festgehalten werden, wenn sie sich in der Praxis bewährt hat.",
   "Die Wahl eines Architektur- oder Integrationsmusters mit weitreichenden Konsequenzen ist ADR-würdig.",
   "Möglichst jede Detailentscheidung im Code sollte ein eigenes ADR erhalten, um lückenlose Nachvollziehbarkeit zu sichern.",
   "Ein ADR ist der Ort für die vollständige, stets aktuell gehaltene Beschreibung der Ist-Architektur.",
   "Eine schwer umkehrbare Technologie-Grundsatzentscheidung sollte samt der erwogenen und verworfenen Alternativen als ADR festgehalten werden."
  ],
  "correct": [
   1,
   4
  ],
  "optExpl": [
   "Falsch: Ein ADR wird zum Entscheidungszeitpunkt geschrieben und hält den damaligen Kontext und die damaligen Gründe fest. Wartet man auf die Bewährung, sind genau diese Informationen oft schon verloren.",
   "Richtig: Die Wahl eines Architektur- oder Integrationsmusters prägt große Teile des Systems und ist teuer zu ändern. Solche Entscheidungen mit weitreichenden Konsequenzen sind typische ADR-Kandidaten.",
   "Falsch: ADRs sind für architekturrelevante Entscheidungen gedacht. Wer jede Kleinigkeit dokumentiert, erzeugt hohen Aufwand und lässt die wirklich wichtigen Entscheidungen in der Masse untergehen.",
   "Falsch: Ein ADR beschreibt eine einzelne Entscheidung zu einem bestimmten Zeitpunkt und wird danach nicht laufend umgeschrieben. Die Gesamtarchitektur beschreiben die Sichten (z. B. Baustein-, Laufzeit- und Verteilungssicht).",
   "Richtig: Schwer umkehrbare Grundsatzentscheidungen, z. B. für eine Datenbanktechnologie, haben langfristige Folgen. Werden die verworfenen Alternativen mitdokumentiert, muss man die Diskussion später nicht erneut führen."
  ],
  "explanation": "ADRs sind für tragende, schwer umkehrbare Entscheidungen und werden zum Entscheidungszeitpunkt mit Kontext und Alternativen geschrieben. Sie sind weder für jede Kleinigkeit noch eine Gesamtbeschreibung der Architektur."
 },
 {
  "id": "c4q20",
  "chapter": 4,
  "lz": "LZ 04-03",
  "r": "R2",
  "type": "single",
  "q": "Was zeigt ein UML-Verteilungsdiagramm (Deployment Diagram)?",
  "options": [
   "Die logische Zerlegung des Systems in Komponenten und deren angebotene bzw. benötigte Schnittstellen.",
   "Die Zustände eines Objekts und die auslösenden Übergänge zwischen ihnen.",
   "Knoten (Hardware bzw. Ausführungsumgebungen), die darauf ausgeführten Artefakte und die Kommunikationswege zwischen den Knoten.",
   "Den zeitlichen Nachrichtenaustausch zwischen Objekten für einen konkreten Ablauf."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Die logische Zerlegung in Komponenten mit angebotenen und benötigten Schnittstellen zeigt das Komponentendiagramm. Das Verteilungsdiagramm geht einen Schritt weiter und zeigt, wo diese Software physisch läuft.",
   "Falsch: Zustände eines Objekts und die Übergänge zwischen ihnen zeigt das Zustandsdiagramm. Das Verteilungsdiagramm enthält kein Verhalten, sondern nur die Infrastrukturstruktur.",
   "Richtig: Das Verteilungsdiagramm zeigt Knoten wie Server, Container oder Laufzeitumgebungen, die darauf platzierten Artefakte und die Kommunikationswege zwischen den Knoten. Es ist die typische Notation für die Verteilungssicht.",
   "Falsch: Den zeitlichen Nachrichtenaustausch für einen konkreten Ablauf zeigt das Sequenzdiagramm. Das Verteilungsdiagramm ist statisch und beschreibt keine Abläufe."
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
   "Das Mitziehen der Doku bei relevanten Änderungen fest in der Definition of Done verankern.",
   "Die Doku schlank halten und versioniert nah am Code (z. B. im Repository) pflegen.",
   "Möglichst viele Details (z. B. alle Klassen) dokumentieren, damit Abweichungen schneller auffallen.",
   "Übersichten und Diagramme dort, wo sinnvoll, aus dem Code generieren, statt sie manuell nachzuführen.",
   "Die Pflege einer zentralen Dokumentationsverantwortlichen übertragen, damit die Entwicklung entlastet wird."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Richtig: Steht die Aktualisierung der Doku in der Definition of Done, gilt eine relevante Änderung erst als fertig, wenn auch die Doku nachgezogen ist. So wird Pflege zur Routine statt zur lästigen Nacharbeit.",
   "Richtig: Schlanke Doku hat wenig, was veralten kann, und liegt sie versioniert im Repository, wird sie zusammen mit dem Code geändert und reviewt. Beides senkt die Hürde, sie aktuell zu halten.",
   "Falsch: Mehr Details bedeuten mehr Stellen, die bei jeder Änderung veralten, und damit mehr Pflegeaufwand. Die Doku wird so eher schneller veraltet als aktueller.",
   "Richtig: Was aus dem Code generiert wird, etwa Abhängigkeitsübersichten oder API-Dokumentation, stimmt automatisch mit dem Code überein. Manuelle Pflege ist dann nur noch für Begründungen und Konzepte nötig.",
   "Falsch: Wird die Pflege von den Personen getrennt, die die Änderungen machen, erfährt die Dokuverantwortliche oft zu spät davon. Die Doku hinkt dann typischerweise dauerhaft hinterher."
  ],
  "explanation": "Doku bleibt aktuell, wenn sie schlank, versioniert, nah am Code, Teil der DoD und wo möglich generiert ist. Eine von den Änderungen getrennte Pflege oder viele Details lassen sie schneller veralten."
 },
 {
  "id": "c4q22",
  "chapter": 4,
  "lz": "LZ 04-01",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zu einem Glossar bzw. einer gemeinsamen Begriffswelt in der Dokumentation treffen zu?",
  "options": [
   "Es sollte vor allem technische Begriffe (z. B. Framework-Namen) erklären, da die Fachbegriffe allen Beteiligten ohnehin bekannt sind.",
   "Es unterstützt eine konsistente, durchgängige Begriffsverwendung zwischen Fachbereich und Entwicklung.",
   "Es wird am besten von der Entwicklung allein gepflegt, da sie die Begriffe im Code verwendet.",
   "Es hilft auch, gleichlautende Begriffe mit unterschiedlicher Bedeutung in verschiedenen Fachbereichen sichtbar zu machen.",
   "Es schafft ein gemeinsames, eindeutiges Verständnis der Fachbegriffe und reduziert Missverständnisse."
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Falsch: Gerade Fachbegriffe sind oft mehrdeutig oder werden von verschiedenen Beteiligten unterschiedlich verstanden. Ein Glossar soll vor allem diese Begriffe klären, technische Begriffe allenfalls ergänzend.",
   "Richtig: Ein Glossar sorgt dafür, dass Fachbereich und Entwicklung dieselben Begriffe in derselben Bedeutung verwenden – in Gesprächen, Dokumenten und idealerweise auch im Code. Das entspricht der Idee einer gemeinsamen Sprache (Ubiquitous Language).",
   "Falsch: Wird das Glossar nur von der Entwicklung gepflegt, spiegelt es lediglich deren Verständnis wider. Die Bedeutung von Fachbegriffen muss gemeinsam mit dem Fachbereich geklärt werden.",
   "Richtig: Derselbe Begriff kann in verschiedenen Fachbereichen Unterschiedliches bedeuten – etwa „Kunde“ im Vertrieb und in der Buchhaltung. Ein Glossar macht solche Homonyme sichtbar, bevor sie zu Fehlern führen.",
   "Richtig: Klar definierte Fachbegriffe verhindern, dass Beteiligte aneinander vorbeireden. Missverständnisse werden so früh vermieden, statt erst im fertigen System aufzufallen."
  ],
  "explanation": "Ein Glossar klärt gerade die oft mehrdeutigen Fachbegriffe, sorgt für konsistente Sprache zwischen Fachbereich und Entwicklung und deckt Homonyme auf. Es wird gemeinsam gepflegt."
 },
 {
  "id": "c4q23",
  "chapter": 4,
  "lz": "LZ 04-01",
  "r": "R1",
  "type": "multi",
  "q": "Was macht einen Architekturüberblick für neue Teammitglieder besonders wertvoll?",
  "options": [
   "Eine chronologische Liste aller bisherigen Änderungen am System.",
   "Das große Ganze: Systemkontext, Ziele und die wichtigsten Randbedingungen.",
   "Die wichtigsten Bausteine und ihre Verantwortlichkeiten.",
   "Eine detaillierte Beschreibung der Build- und Deployment-Skripte, damit Neue zuerst lauffähig werden.",
   "Zentrale Architekturentscheidungen und ihre Begründungen."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Falsch: Eine Änderungshistorie liefert viele Details aus der Vergangenheit, aber kein Bild der aktuellen Struktur und ihrer Gründe. Neue Teammitglieder brauchen zuerst Orientierung, nicht eine Chronik.",
   "Richtig: Systemkontext, Ziele und Randbedingungen erklären, wozu das System da ist und in welchem Rahmen es entworfen wurde. Ohne dieses große Ganze lassen sich Details kaum einordnen.",
   "Richtig: Die wichtigsten Bausteine mit ihren Verantwortlichkeiten zeigen die Grobstruktur des Systems. Damit wissen Neue, wo welche Funktionalität zu finden ist.",
   "Falsch: Eine Build- und Deployment-Anleitung hilft beim Einrichten der Arbeitsumgebung, ist aber kein Architekturüberblick. Sie erklärt weder Struktur noch Entscheidungen des Systems.",
   "Richtig: Begründete zentrale Entscheidungen erklären, warum das System so aufgebaut ist, wie es ist. Das verhindert, dass Neue bewusste Entscheidungen unwissentlich unterlaufen."
  ],
  "explanation": "Ein guter Architekturüberblick vermittelt das große Ganze: Kontext, Ziele, Randbedingungen, wichtigste Bausteine und zentrale Entscheidungen samt Begründung. Änderungshistorien oder Build-Details gehören nicht in den Überblick."
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
   "Konsistenz lässt sich nur sicherstellen, wenn alle Sichten aus einem gemeinsamen Modellierungswerkzeug generiert werden.",
   "Bei einem Widerspruch ist grundsätzlich die Bausteinsicht maßgeblich, da sie die Struktur festlegt.",
   "Konsistenz heißt, dass jeder Baustein der Bausteinsicht auch in der Laufzeit- und der Verteilungssicht vorkommen muss.",
   "Sichten dürfen unterschiedliche Aspekte und Detailtiefen zeigen, müssen aber widerspruchsfrei zueinander sein."
  ],
  "correct": [
   0,
   4
  ],
  "optExpl": [
   "Richtig: Sichten sind verschiedene Blickwinkel auf ein und dasselbe System. Taucht ein Baustein in mehreren Sichten auf, muss er dort zusammenpassen – etwa denselben Namen und dieselbe Verantwortung haben.",
   "Falsch: Ein gemeinsames Modellierungswerkzeug kann Konsistenz erleichtern, ist aber nicht die einzige Möglichkeit. Auch Reviews, klare Namenskonventionen und Querverweise sichern widerspruchsfreie Sichten.",
   "Falsch: Keine Sicht hat automatisch Vorrang. Ein Widerspruch zeigt, dass mindestens eine Sicht falsch oder veraltet ist – und das kann gerade die Bausteinsicht sein, daher muss man ihn klären.",
   "Falsch: Die Laufzeitsicht zeigt nur ausgewählte Szenarien und die Verteilungssicht nur Artefakte auf Knoten. Nicht jeder Baustein muss überall vorkommen – Konsistenz bedeutet Widerspruchsfreiheit, nicht Vollständigkeit.",
   "Richtig: Jede Sicht darf ihren eigenen Fokus und Detailgrad wählen, solange die Aussagen zusammenpassen. Unterschiedliche Abstraktion ist erwünscht, Widersprüche nicht."
  ],
  "explanation": "Sichten zeigen dasselbe System mit unterschiedlichem Fokus und Detailgrad und müssen widerspruchsfrei sein. Nicht jeder Baustein muss in jeder Sicht vorkommen; Widersprüche klärt man, statt einer Sicht pauschal Vorrang zu geben."
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
    "text": "Eine Beschreibung jeder einzelnen Klasse mit allen Methoden",
    "cat": 1
   },
   {
    "text": "Querschnittskonzept zur Fehlerbehandlung",
    "cat": 0
   },
   {
    "text": "Der Sprint-Plan mit den Aufgaben der nächsten Iteration",
    "cat": 1
   },
   {
    "text": "Zentrale Architekturentscheidungen samt Begründung",
    "cat": 0
   },
   {
    "text": "Kontextabgrenzung des Systems",
    "cat": 0
   }
  ],
  "explanation": "In die Architekturdokumentation gehören Kontext, Entscheidungen samt Begründung und Querschnittskonzepte. Klassen- und Methodendetails sind Detailentwurf/Code, Sprint-Pläne sind Projektplanung."
 },
 {
  "id": "c4q25",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R2",
  "type": "single",
  "q": "Was zeigt eine Whitebox-Beschreibung eines Bausteins in der Bausteinsicht?",
  "options": [
   "Die Zuordnung der inneren Bausteine zu konkreten Ausführungsknoten (Servern).",
   "Die innere Zerlegung des Bausteins in seine enthaltenen (Unter-)Bausteine samt deren Zusammenspiel.",
   "Den zeitlichen Ablauf der Aufrufe zwischen den inneren Bausteinen zur Laufzeit.",
   "Ausschließlich die nach außen angebotenen Schnittstellen und Verantwortlichkeiten des Bausteins."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Welche inneren Bausteine auf welchen Servern laufen, beschreibt die Verteilungssicht. Die Whitebox bleibt in der logischen Struktur der Bausteinsicht.",
   "Richtig: Die Whitebox öffnet den Baustein und zeigt, aus welchen Unterbausteinen er besteht und wie diese zusammenhängen. Die Unterbausteine werden dann ihrerseits als Blackbox beschrieben und ggf. weiter verfeinert.",
   "Falsch: Der zeitliche Ablauf von Aufrufen ist dynamisches Verhalten und gehört in die Laufzeitsicht. Die Whitebox zeigt die inneren Bausteine und ihre Beziehungen statisch.",
   "Falsch: Nur die nach außen angebotenen Schnittstellen und Verantwortlichkeiten zu zeigen, ist gerade die Blackbox-Beschreibung. Die Whitebox geht darüber hinaus und zeigt das Innenleben."
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
   "Qualitätszusagen wie Antwortzeit oder Verfügbarkeit, sofern sie für Nutzer relevant sind.",
   "Das Kommunikationsprotokoll bzw. die Art der Interaktion (z. B. synchron oder asynchron).",
   "Die Liste der Bausteine, die die Schnittstelle derzeit nutzen, als verbindlicher Bestandteil der Spezifikation.",
   "Das Verhalten in Fehler- und Ausnahmefällen.",
   "Die angebotenen Operationen mit ihren Parametern, Datenformaten und deren Bedeutung."
  ],
  "correct": [
   0,
   1,
   3,
   4
  ],
  "optExpl": [
   "Richtig: Zugesicherte Qualitäten wie Antwortzeit oder Verfügbarkeit sind Teil des Vertrags, auf den sich Nutzer verlassen. Ohne sie kann ein Nutzer nicht beurteilen, ob die Schnittstelle für seinen Zweck taugt.",
   "Richtig: Ob eine Schnittstelle synchron oder asynchron arbeitet und über welches Protokoll sie erreichbar ist, bestimmt maßgeblich, wie Nutzer sie einbinden müssen. Diese Angaben gehören daher in die Beschreibung.",
   "Falsch: Eine Schnittstellenspezifikation beschreibt den Vertrag unabhängig davon, wer ihn gerade nutzt. Die aktuellen Nutzer kann man gesondert erfassen, etwa für eine Auswirkungsanalyse, sie sind aber kein Teil der Spezifikation.",
   "Richtig: Nutzer müssen wissen, wie sich die Schnittstelle bei Fehlern, ungültigen Eingaben oder Überlast verhält. Nur dann können sie solche Fälle zuverlässig behandeln.",
   "Richtig: Operationen, Parameter, Datenformate und deren Bedeutung (Semantik) bilden den Kern des Schnittstellenvertrags. Erst die Semantik macht klar, was ein Aufruf tatsächlich bewirkt."
  ],
  "explanation": "Eine Schnittstellenbeschreibung legt den Vertrag fest: Operationen, Datenformate, Semantik, Fehlerverhalten, Protokoll und zugesicherte Qualitäten. Die aktuellen Nutzer sind kein Bestandteil des Vertrags."
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
   "Dokumentation ist vor allem in der Anfangsphase nötig; sobald Code existiert, übernimmt dieser ihre Aufgabe.",
   "Die Architektur lässt sich ohnehin vollständig und eindeutig allein aus dem Quellcode ableiten.",
   "Was keine Zielgruppe tatsächlich benötigt, stiftet keinen Nutzen, verursacht aber Aufwand."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Richtig: Jede dokumentierte Information muss bei Änderungen nachgezogen werden. Je mehr Umfang, desto höher der Pflegeaufwand und desto größer das Risiko, dass Teile veralten und Vertrauen in die Doku verloren geht.",
   "Richtig: Dokumentieren sollte man vor allem, was für Entscheidungen und Verständnis wichtig ist und nicht ohnehin im Code steht. Redundanz zum Code verdoppelt den Pflegeaufwand, ohne Mehrwert zu schaffen.",
   "Falsch: Dokumentation wird über den gesamten Lebenszyklus gebraucht, etwa für Einarbeitung, Wartung und Weiterentwicklung. Der Code kann sie nicht ersetzen, weil er Begründungen und Zusammenhänge nicht enthält.",
   "Falsch: Aus dem Code lässt sich zwar die Struktur teilweise ablesen, nicht aber Begründungen, verworfene Alternativen oder Qualitätsziele. Gerade diese Informationen muss die Dokumentation festhalten.",
   "Richtig: Angemessene Dokumentation orientiert sich am tatsächlichen Bedarf der Zielgruppen. Was niemand liest oder braucht, kostet nur Pflegeaufwand."
  ],
  "explanation": "Nicht alles dokumentieren, weil Umfang Pflegeaufwand erzeugt und veraltet; man beschränkt sich auf Entscheidungsrelevantes für echte Zielgruppen. Doku bleibt aber über den ganzen Lebenszyklus nötig, da der Code Begründungen nicht enthält."
 },
 {
  "id": "c4q28",
  "chapter": 4,
  "lz": "LZ 04-03",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zum UML-Aktivitätsdiagramm treffen zu?",
  "options": [
   "Es bildet in erster Linie die Zustände eines Objekts und deren Übergänge ab.",
   "Es kann nebenläufige (parallele) Abläufe abbilden.",
   "Es zeigt primär die statische Struktur von Klassen und ihren Beziehungen.",
   "Es stellt Abläufe mit Aktionen und Verzweigungen dar.",
   "Es ordnet Softwarebausteine den Ausführungsknoten (Hardware) zu."
  ],
  "correct": [
   1,
   3
  ],
  "optExpl": [
   "Falsch: Zustände eines Objekts und ihre Übergänge zeigt das Zustandsdiagramm. Das Aktivitätsdiagramm beschreibt dagegen einen Ablauf von Aktionen, nicht den Lebenszyklus eines einzelnen Objekts.",
   "Richtig: Mit Gabelungen (Fork) und Vereinigungen (Join) lassen sich parallele Abläufe darstellen. Das ist eine besondere Stärke des Aktivitätsdiagramms gegenüber einfachen Ablaufbeschreibungen.",
   "Falsch: Die statische Struktur von Klassen und ihren Beziehungen zeigt das Klassendiagramm. Das Aktivitätsdiagramm ist ein Verhaltensdiagramm und beschreibt Dynamik.",
   "Richtig: Aktionen, Entscheidungen bzw. Verzweigungen und Kontrollfluss sind die Kernelemente des Aktivitätsdiagramms. Damit lassen sich Geschäftsprozesse ebenso wie technische Abläufe darstellen.",
   "Falsch: Die Zuordnung von Software zu Ausführungsknoten zeigt das Verteilungsdiagramm. Das Aktivitätsdiagramm kennt zwar Partitionen (Swimlanes), beschreibt aber keine Infrastruktur."
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
   "Querschnittliche Konzepte.",
   "Einen Abschnitt zur Kostenplanung für Betrieb und Lizenzen.",
   "Einen Abschnitt zur Projektorganisation mit Rollen und Verantwortlichkeiten des Teams.",
   "Randbedingungen (Constraints).",
   "Qualitätsanforderungen (z. B. Qualitätsbaum und Qualitätsszenarien)."
  ],
  "correct": [
   0,
   3,
   4
  ],
  "optExpl": [
   "Richtig: Querschnittliche Konzepte sind ein eigener arc42-Abschnitt (Abschnitt 8). Dort werden Themen wie Sicherheit, Fehlerbehandlung oder Logging beschrieben, die viele Bausteine betreffen.",
   "Falsch: Eine Kostenplanung für Betrieb und Lizenzen ist kein arc42-Abschnitt. Kosten können als Randbedingung oder Entscheidungskriterium auftauchen, eine Planung gehört aber ins Projekt- bzw. Budgetmanagement.",
   "Falsch: Projektorganisation mit Rollen und Verantwortlichkeiten ist Projektmanagement und gehört nicht zu den zwölf arc42-Abschnitten. Organisatorische Vorgaben können allenfalls als Randbedingungen erscheinen.",
   "Richtig: Randbedingungen sind ein eigener arc42-Abschnitt (Abschnitt 2). Sie halten technische, organisatorische und rechtliche Vorgaben fest, die den Lösungsspielraum einschränken.",
   "Richtig: Qualitätsanforderungen haben in arc42 einen eigenen Abschnitt (Abschnitt 10), typischerweise mit Qualitätsbaum und Qualitätsszenarien. Sie konkretisieren die Qualitätsziele aus der Einführung."
  ],
  "explanation": "arc42 sieht u. a. Randbedingungen, Querschnittliche Konzepte und Qualitätsanforderungen vor. Projektorganisation und Kostenplanung gehören nicht zu den zwölf Abschnitten."
 },
 {
  "id": "c4q30",
  "chapter": 4,
  "lz": "LZ 04-03",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zu UML als Notation treffen zu?",
  "options": [
   "UML eignet sich nur für objektorientierte Systeme; für Microservices oder Infrastruktur ist es ungeeignet.",
   "Ein ausreichend detailliertes UML-Modell kann die textuelle Architekturdokumentation vollständig ersetzen.",
   "Für Architektur sind u. a. Komponenten-, Verteilungs- und Sequenzdiagramme nützlich.",
   "UML lässt sich auch skizzenhaft und informell einsetzen, solange die Bedeutung klar bleibt.",
   "UML bietet standardisierte Diagrammtypen mit vereinbarter Bedeutung."
  ],
  "correct": [
   2,
   3,
   4
  ],
  "optExpl": [
   "Falsch: UML stammt zwar aus der Objektorientierung, doch Komponenten-, Verteilungs- und Sequenzdiagramme eignen sich auch gut für Services und Infrastruktur. Microservices lassen sich z. B. als Komponenten mit Schnittstellen und als Artefakte auf Knoten darstellen.",
   "Falsch: Diagramme zeigen Strukturen und Abläufe, aber Begründungen, Ziele und Kontext lassen sich darin kaum festhalten. Ein UML-Modell braucht deshalb immer ergänzenden Text.",
   "Richtig: Komponentendiagramme passen zur Bausteinsicht, Verteilungsdiagramme zur Verteilungssicht und Sequenzdiagramme zur Laufzeitsicht. Damit deckt UML die zentralen Architektursichten ab.",
   "Richtig: UML muss nicht formal vollständig verwendet werden. Als Skizze ist es legitim und nützlich, solange die verwendeten Elemente für die Leser verständlich bleiben.",
   "Richtig: UML definiert eine Reihe von Diagrammtypen mit vereinbarter Bedeutung der Elemente. Das macht Diagramme über Personen und Werkzeuge hinweg einheitlich lesbar."
  ],
  "explanation": "UML bietet standardisierte Diagrammtypen, von denen Komponenten-, Verteilungs- und Sequenzdiagramme für Architektur besonders nützlich sind – auch für Services und skizzenhaft. Diagramme ersetzen aber nicht die textuelle Begründung."
 },
 {
  "id": "c4q31",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R1",
  "type": "single",
  "q": "Ein Betriebsteam möchte wissen, auf welchen Servern welche Teile laufen und wie diese kommunizieren. Welche Sicht hilft am meisten?",
  "options": [
   "Die Laufzeitsicht, da der Betrieb vor allem Abläufe beobachtet.",
   "Die Bausteinsicht, da sie alle Komponenten und ihre Verantwortlichkeiten zeigt.",
   "Das Klassendiagramm, da es die statische Struktur zeigt.",
   "Die Verteilungssicht."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Die Laufzeitsicht zeigt, wie Bausteine in Szenarien zusammenarbeiten, aber nicht, auf welchen Servern sie laufen. Die Frage des Betriebsteams zielt auf Infrastruktur, nicht auf Abläufe.",
   "Falsch: Die Bausteinsicht zeigt die logischen Komponenten und ihre Verantwortlichkeiten, ist aber bewusst unabhängig von der Infrastruktur. Wo die Komponenten laufen, beantwortet sie nicht.",
   "Falsch: Das Klassendiagramm zeigt die statische Feinstruktur des Codes. Mit Servern und Kommunikationswegen hat es nichts zu tun.",
   "Richtig: Die Verteilungssicht zeigt, welche Artefakte auf welchen Knoten laufen und über welche Kanäle diese kommunizieren. Sie ist damit die typische Sicht für den Betrieb."
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
    "text": "Netzwerkverbindungen zwischen Rechenzentren",
    "cat": 1
   },
   {
    "text": "Auf welchem Server/Knoten welche Komponente läuft",
    "cat": 1
   },
   {
    "text": "Zeitliche Interaktion der Bausteine bei einem Anwendungsfall",
    "cat": 0
   },
   {
    "text": "Reihenfolge der ausgetauschten Nachrichten",
    "cat": 0
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
   "Aktualität ist zweitrangig, solange die Begründungen der Entscheidungen enthalten sind.",
   "Angemessenheit bedeutet: so viel wie nötig, so wenig wie möglich.",
   "Verständlichkeit lässt sich letztlich nur aus Sicht der jeweiligen Zielgruppe beurteilen.",
   "Eine einheitliche Gliederung (z. B. ein Template) erleichtert es, Informationen wiederzufinden.",
   "Gute Dokumentation ist vor allem vollständig: Jeder Baustein wird bis zur untersten Ebene beschrieben."
  ],
  "correct": [
   1,
   2,
   3
  ],
  "optExpl": [
   "Falsch: Veraltete Dokumentation führt in die Irre, auch wenn sie gute Begründungen enthält. Korrektheit und Aktualität sind zentrale Qualitätsmerkmale guter Doku – sonst verliert sie das Vertrauen der Leser.",
   "Richtig: Angemessen heißt, genau so viel zu dokumentieren, wie die Zielgruppen brauchen – nicht mehr. Das hält Pflegeaufwand und Veralterungsrisiko gering.",
   "Richtig: Ob ein Text verständlich ist, hängt vom Vorwissen der Leser ab. Was für Entwickler klar ist, kann für das Management unverständlich sein, daher muss man Verständlichkeit aus Sicht der Zielgruppe beurteilen.",
   "Richtig: Eine einheitliche Gliederung wie arc42 sorgt dafür, dass Informationen immer an derselben Stelle stehen. Leser finden sich auch in fremden Dokumentationen schnell zurecht.",
   "Falsch: Vollständigkeit bis zur untersten Ebene ist teuer, veraltet schnell und überfordert Leser. Gute Dokumentation ist angemessen, nicht maximal vollständig."
  ],
  "explanation": "Gute Doku ist zielgruppengerecht verständlich, angemessen, korrekt und aktuell und einheitlich gegliedert. Vollständigkeit bis ins letzte Detail ist kein Qualitätsziel; veraltete Doku schadet auch mit guten Begründungen."
 },
 {
  "id": "c4q33",
  "chapter": 4,
  "lz": "LZ 04-08",
  "r": "R2",
  "type": "single",
  "q": "Worin unterscheidet sich die Entscheidungsdokumentation nach arc42 tendenziell von einem einzelnen Architecture Decision Record (ADR)?",
  "options": [
   "arc42 dokumentiert vor allem offene Entscheidungen, ADRs dagegen nur bereits getroffene.",
   "arc42 bettet Entscheidungen in die Gesamtdoku ein; ein ADR ist ein eigenständiges Einzeldokument je Entscheidung mit Status.",
   "arc42 hält nur die gewählte Lösung fest; Alternativen und Begründungen werden ausschließlich in ADRs erfasst.",
   "ADRs sind ein fester Bestandteil von arc42 und dürfen nur innerhalb des Entscheidungsabschnitts verwendet werden."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Beide dokumentieren in erster Linie getroffene Entscheidungen samt Begründung. Der Unterschied liegt nicht im Status der Entscheidungen, sondern in der Form der Dokumentation.",
   "Richtig: arc42 sammelt Entscheidungen in einem Abschnitt innerhalb der Gesamtdokumentation. Ein ADR ist dagegen ein eigenständiges, fokussiertes Einzeldokument je Entscheidung mit Status wie „akzeptiert“ oder „abgelöst“ – beide Ansätze lassen sich kombinieren.",
   "Falsch: Auch arc42 sieht ausdrücklich vor, Entscheidungen mit Begründung und ggf. Alternativen festzuhalten. Begründungen sind kein Alleinstellungsmerkmal von ADRs.",
   "Falsch: ADRs sind ein eigenständiges Format, das auch ohne arc42 genutzt werden kann. In einer arc42-Dokumentation kann man sie im Entscheidungsabschnitt verlinken, sie sind aber kein fester Bestandteil des Templates."
  ],
  "explanation": "arc42 ordnet Entscheidungen in einem Abschnitt in die Gesamtdoku ein; ADRs sind eigenständige, fokussierte Einzeldokumente mit Status. Beide halten getroffene Entscheidungen mit Begründung fest und lassen sich kombinieren."
 },
 {
  "id": "c4q34",
  "chapter": 4,
  "lz": "LZ 04-08",
  "r": "R2",
  "type": "multi",
  "q": "Welche Angaben gehören typischerweise in ein Architecture Decision Record (ADR)?",
  "options": [
   "Die getroffene Entscheidung samt Status (z. B. vorgeschlagen, akzeptiert, abgelöst).",
   "Die konkrete Umsetzung im Code, z. B. als Code-Ausschnitte für jede betroffene Klasse.",
   "Der Kontext bzw. das Problem, das die Entscheidung auslöst.",
   "Die Konsequenzen der Entscheidung und die erwogenen Alternativen.",
   "Eine fortlaufend aktualisierte Beschreibung, wie sich die Entscheidung im Betrieb bewährt."
  ],
  "correct": [
   0,
   2,
   3
  ],
  "optExpl": [
   "Richtig: Die getroffene Entscheidung ist der Kern des ADR, und der Status (z. B. vorgeschlagen, akzeptiert, abgelöst) zeigt, ob sie noch gilt. So erkennt man auch später, welche Entscheidungen aktuell maßgeblich sind.",
   "Falsch: Ein ADR dokumentiert die Entscheidung und ihre Gründe, nicht ihre Implementierung. Code-Ausschnitte würden schnell veralten und vom Wesentlichen ablenken.",
   "Richtig: Der Kontext beschreibt das Problem und die Rahmenbedingungen, die eine Entscheidung erforderlich machen. Ohne ihn ist eine Entscheidung später kaum nachvollziehbar oder bewertbar.",
   "Richtig: Konsequenzen zeigen, welche Vor- und Nachteile man in Kauf nimmt, und die erwogenen Alternativen zeigen, was bewusst verworfen wurde. Beides macht die Entscheidung nachvollziehbar.",
   "Falsch: Ein ADR wird zum Entscheidungszeitpunkt geschrieben und danach nicht fortlaufend fortgeschrieben. Zeigen sich im Betrieb neue Erkenntnisse, führt das ggf. zu einem neuen ADR, das das alte ablöst."
  ],
  "explanation": "Ein ADR enthält Kontext, Entscheidung mit Status, Konsequenzen und Alternativen. Implementierungsdetails oder eine fortlaufende Betriebsbewertung gehören nicht hinein."
 },
 {
  "id": "c4q35",
  "chapter": 4,
  "lz": "LZ 04-06",
  "r": "R2",
  "type": "single",
  "q": "Was gilt für die Dokumentation von Schnittstellen?",
  "options": [
   "Interne Schnittstellen zwischen Bausteinen desselben Teams muss man nicht dokumentieren, da der Code sie vollständig beschreibt.",
   "Eine maschinenlesbare Spezifikation (z. B. OpenAPI) macht die Beschreibung von Semantik und Fehlerverhalten überflüssig.",
   "Interne Schnittstellen müssen grundsätzlich detaillierter dokumentiert werden als externe.",
   "Externe Schnittstellen sind Verträge mit Dritten und werden daher meist früher, formeller und versioniert dokumentiert."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Der Code zeigt nur die Signatur, nicht Verantwortung, Zusicherungen oder Fehlerverhalten. Auch interne Schnittstellen brauchen daher eine angemessene, wenn auch oft schlankere Beschreibung.",
   "Falsch: Maschinenlesbare Spezifikationen wie OpenAPI beschreiben vor allem die Syntax – Endpunkte, Parameter, Datentypen. Was ein Aufruf fachlich bedeutet und wie sich die Schnittstelle bei Fehlern verhält, muss zusätzlich festgehalten werden.",
   "Falsch: Typischerweise ist es umgekehrt: Externe Schnittstellen brauchen mehr Formalität, weil Dritte von ihnen abhängen und Änderungen schwer abzustimmen sind. Interne Schnittstellen lassen sich leichter gemeinsam anpassen.",
   "Richtig: Externe Schnittstellen sind Verträge mit Dritten, die man nicht einfach mitändern kann. Deshalb dokumentiert man sie früh, formell und versioniert, damit Nutzer sich verlässlich darauf einstellen können."
  ],
  "explanation": "Externe Schnittstellen sind Verträge mit Dritten und werden früh, formell und versioniert dokumentiert. Auch interne Schnittstellen brauchen eine angemessene Beschreibung; maschinenlesbare Specs ersetzen keine Semantik."
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
   "Sie machen eine Laufzeitsicht überflüssig, da sie das Verhalten systemweit festlegen.",
   "Querschnittskonzepte beschreibt man am besten in jedem betroffenen Baustein separat, damit sie nah an der Umsetzung sind.",
   "Querschnittskonzepte betreffen typischerweise mehrere Bausteine und wirken auf Qualitätsmerkmale.",
   "Querschnittskonzepte betreffen nur technische Themen; fachliche Konzepte wie ein übergreifendes Domänenmodell zählen nicht dazu."
  ],
  "correct": [
   0,
   3
  ],
  "optExpl": [
   "Richtig: Wird ein Konzept wie Fehlerbehandlung einmal zentral beschrieben, setzen alle Bausteine es auf dieselbe Weise um. Das vermeidet Redundanz und uneinheitliche Einzellösungen.",
   "Falsch: Querschnittskonzepte legen Regeln fest, die viele Bausteine betreffen, zeigen aber keine konkreten Abläufe. Sie ergänzen die Sichten, ersetzen die Laufzeitsicht also nicht.",
   "Falsch: Wird ein Querschnittskonzept in jedem Baustein separat beschrieben, entstehen Redundanz und schleichende Abweichungen. Genau das soll die zentrale Beschreibung (in arc42 Abschnitt 8) verhindern.",
   "Richtig: Querschnittskonzepte betreffen per Definition mehrere Bausteine und haben oft großen Einfluss auf Qualitätsmerkmale – etwa ein Sicherheitskonzept auf die Sicherheit oder ein Logging-Konzept auf die Wartbarkeit.",
   "Falsch: Auch fachliche Themen können querschnittlich sein, etwa ein übergreifendes Domänenmodell oder fachliche Validierungsregeln. Querschnittlich bedeutet „betrifft viele Bausteine“, nicht „technisch“."
  ],
  "explanation": "Querschnittskonzepte betreffen viele Bausteine und werden zentral beschrieben, um einheitliche, redundanzarme Umsetzung zu sichern. Sie können technisch oder fachlich sein und ergänzen die Sichten, statt sie zu ersetzen."
 },
 {
  "id": "c5q1",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R1",
  "type": "multi",
  "q": "Welche Bestandteile gehören zu einem vollständig formulierten Qualitätsszenario?",
  "options": [
   "Eine konkrete technische Umsetzung (das WIE), mit der die geforderte Reaktion sichergestellt wird.",
   "Die Priorität des Szenarios sowie der geschätzte Umsetzungsaufwand als verpflichtende Bestandteile jedes Szenarios.",
   "Ein Auslöser (Stimulus) – etwa ein Ereignis, eine Anfrage oder eine Änderung, auf die das System reagieren soll.",
   "Die Quelle des Auslösers und die Umgebung bzw. der Kontext, in der bzw. dem das Szenario gilt (z. B. Normalbetrieb, Lastspitze).",
   "Die erwartete Reaktion zusammen mit einem messbaren Antwortmaß (z. B. Antwortzeit unter 200 ms)."
  ],
  "correct": [
   2,
   3,
   4
  ],
  "optExpl": [
   "Falsch: Ein Qualitätsszenario beschreibt, WAS das System unter bestimmten Bedingungen leisten soll, nicht WIE es das technisch erreicht. Die Lösung entsteht erst im Entwurf und wird dann gegen das Szenario geprüft – stünde sie schon im Szenario, könnte man sie nicht mehr unabhängig bewerten.",
   "Falsch: Szenarien werden zwar häufig priorisiert (etwa im Utility Tree), doch Priorität ist eine Zusatzinformation für die Bewertung, kein Strukturbestandteil. Ein Umsetzungsaufwand gehört überhaupt nicht ins Szenario, weil das Szenario die Anforderung und nicht die Lösung beschreibt.",
   "Richtig: Der Auslöser (Stimulus) ist das Ereignis, auf das das System reagieren muss – etwa eine Anfrage, ein Ausfall oder eine Änderungsanforderung. Ohne Stimulus wäre unklar, welche Situation das Szenario überhaupt beschreibt.",
   "Richtig: Quelle und Umgebung legen fest, wer den Stimulus auslöst und unter welchen Bedingungen das Szenario gilt. Dieselbe Anfrage kann im Normalbetrieb und bei Lastspitze ganz unterschiedliche Anforderungen bedeuten.",
   "Richtig: Erst die erwartete Reaktion zusammen mit einem messbaren Antwortmaß macht das Szenario überprüfbar. Ohne Maß bliebe offen, wann das Ziel erfüllt ist – „schnell“ lässt sich nicht testen, „unter 200 ms“ schon."
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
   "Eine Metrik-Suite, die Kopplung und Komplexität automatisiert aus dem Quellcode berechnet.",
   "Eine szenariobasierte, überwiegend qualitative Methode, die Architekturentscheidungen gegen Qualitätsszenarien analysiert und dabei Trade-offs sichtbar macht.",
   "Eine Methode, die den wirtschaftlichen Nutzen von Architekturentscheidungen in Geldeinheiten quantifiziert und gegen ihre Kosten stellt.",
   "Ein Reifegradmodell, das den Architektur- und Entwicklungsprozess in definierte Stufen einordnet."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: ATAM ist kein Werkzeug, das Metriken aus dem Code berechnet. Es ist eine moderierte Workshop-Methode, in der Architekten und Stakeholder Entscheidungen gemeinsam gegen Szenarien analysieren – Code ist dafür nicht einmal nötig.",
   "Richtig: ATAM spielt priorisierte Qualitätsszenarien gegen die Architekturentscheidungen durch und beurteilt die Ergebnisse durch Experteneinschätzung, also überwiegend qualitativ. Sein besonderer Nutzen liegt darin, Trade-offs, Sensitivitätspunkte und Risiken explizit zu machen.",
   "Falsch: Die Bewertung in Geldeinheiten beschreibt CBAM (Cost Benefit Analysis Method), das auf ATAM aufbauen kann. ATAM selbst fragt, wie Entscheidungen die Qualitätsziele beeinflussen, nicht, was sie wirtschaftlich bringen.",
   "Falsch: Reifegradmodelle wie CMMI stufen Prozesse einer Organisation ein. ATAM bewertet dagegen keine Prozesse, sondern konkrete Architekturentscheidungen eines Systems."
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
   "Qualitative Verfahren sind besonders früh sinnvoll, wenn noch kein lauffähiger Code vorliegt.",
   "Qualitative und quantitative Verfahren ergänzen einander und werden häufig kombiniert eingesetzt.",
   "Sobald Code vorliegt, lösen quantitative Verfahren die qualitativen ab, da Messwerte objektiver sind als Experteneinschätzungen.",
   "Quantitative Verfahren setzen ein analysierbares Artefakt voraus, etwa Code, ein ausführbares Modell oder ein laufendes System.",
   "Szenariobasierte Bewertungen wie ATAM zählen zu den quantitativen Verfahren, weil ihre Szenarien messbare Antwortmaße enthalten."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Richtig: Reviews und Szenarioanalysen arbeiten mit Entwürfen, Modellen und Expertenwissen, sie brauchen kein ausführbares Artefakt. Deshalb sind sie gerade in frühen Phasen das Mittel der Wahl, wenn Korrekturen noch billig sind.",
   "Richtig: Beide Verfahrensarten beantworten unterschiedliche Fragen und ergänzen sich daher. Typisch ist, dass Metriken Auffälligkeiten liefern, die dann im Review qualitativ eingeordnet werden.",
   "Falsch: Messwerte sind zwar objektiv, aber nicht jede Qualität ist messbar und jede Zahl braucht Interpretation. Auch mit Code bleiben qualitative Verfahren nötig, etwa um Trade-offs oder Zukunftsszenarien zu beurteilen.",
   "Richtig: Messen kann man nur, was als analysierbares Artefakt vorliegt – Code für statische Analyse, ein laufendes System für Lasttests. Diese Voraussetzung ist der Grund, warum quantitative Verfahren meist erst später einsetzbar sind.",
   "Falsch: ATAM-Szenarien enthalten zwar messbare Antwortmaße, die Bewertung selbst erfolgt aber durch Experteneinschätzung im Workshop. Dass das Szenario Zahlen nennt, macht das Bewertungsverfahren noch nicht quantitativ."
  ],
  "explanation": "Qualitative Verfahren (Reviews, ATAM) funktionieren schon ohne Code; quantitative brauchen ein analysierbares Artefakt. Beide ergänzen sich. Falle: Dass ATAM-Szenarien Messgrößen enthalten, macht ATAM nicht zu einem quantitativen Verfahren."
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
   "Die Priorisierung von Qualitätsszenarien als hoch/mittel/gering im Utility Tree.",
   "Die zyklomatische Komplexität einer Komponente.",
   "Die Instabilität I = Ce / (Ca + Ce) nach R. C. Martin.",
   "Die Einstufung eines Trade-offs als kritisch im Rahmen eines ATAM-Workshops."
  ],
  "correct": [
   0,
   2,
   3
  ],
  "optExpl": [
   "Richtig: Efferente und afferente Kopplung werden durch Zählen der aus- bzw. eingehenden Abhängigkeiten ermittelt. Es sind also objektiv berechnete Kennzahlen und damit quantitative Größen.",
   "Falsch: Eine Einstufung als hoch, mittel oder gering ist eine Einschätzung der Beteiligten, kein gemessener Wert. Solche groben Skalen sind typisch für qualitative Verfahren wie den Utility Tree.",
   "Richtig: Die zyklomatische Komplexität wird aus dem Kontrollflussgraphen berechnet, im Wesentlichen aus der Zahl der Verzweigungen. Sie ist damit eine klassische Code-Metrik.",
   "Richtig: Die Instabilität nach R. C. Martin wird aus den Kopplungswerten berechnet und liegt zwischen 0 (stabil) und 1 (instabil). Als Formelwert ist sie eindeutig quantitativ.",
   "Falsch: Ob ein Trade-off als kritisch gilt, entscheiden die Teilnehmenden im ATAM-Workshop durch Diskussion und Experteneinschätzung. Das Ergebnis ist ein Urteil, keine Messung – also qualitativ."
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
   "Er dokumentiert getroffene Architekturentscheidungen samt Begründung und verworfenen Alternativen.",
   "Er stellt die Zerlegung des Systems in Bausteine und deren Verantwortlichkeiten dar.",
   "Er ordnet erkannte Risiken nach Eintrittswahrscheinlichkeit und Schadenshöhe in einer Matrix an.",
   "Er ordnet Qualitätsmerkmale hierarchisch bis hinunter zu priorisierten, konkreten Qualitätsszenarien und fokussiert so die Bewertung."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Getroffene Entscheidungen mit Begründung und verworfenen Alternativen dokumentiert man in Architecture Decision Records (ADRs). Der Utility Tree enthält keine Entscheidungen, sondern die Qualitätsanforderungen, gegen die Entscheidungen geprüft werden.",
   "Falsch: Die Zerlegung in Bausteine mit ihren Verantwortlichkeiten zeigt die Bausteinsicht. Der Utility Tree beschreibt nicht die Struktur der Lösung, sondern die geforderten Qualitäten.",
   "Falsch: Eine Anordnung nach Eintrittswahrscheinlichkeit und Schadenshöhe ist eine Risikomatrix aus dem Risikomanagement. Im Utility Tree werden Szenarien zwar nach Wichtigkeit und Schwierigkeit priorisiert, er ordnet aber Qualitätsmerkmale, nicht Risiken.",
   "Richtig: Der Utility Tree verfeinert abstrakte Qualitätsmerkmale schrittweise bis zu konkreten, priorisierten Szenarien. So weiß das Bewertungsteam, welche Szenarien es mit seiner begrenzten Zeit zuerst analysieren muss."
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
   "Trade-offs zwischen konkurrierenden Qualitätsmerkmalen explizit machen, um bewusst zu entscheiden.",
   "Aufwand und Termine für die weitere Umsetzung auf Basis der bewerteten Architektur verbindlich festlegen.",
   "Prüfen, ob die Architektur die geforderten Qualitätsziele voraussichtlich tragen kann.",
   "Für jedes Qualitätsziel nachweisen, dass es erreicht wird, bevor mit der Implementierung begonnen wird.",
   "Risiken und Schwachstellen bezüglich der Qualitätsziele früh erkennen, solange Korrekturen noch günstig sind."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Qualitätsmerkmale konkurrieren oft – mehr Sicherheit kostet etwa Performanz. Die Bewertung macht solche Zielkonflikte sichtbar, damit sie bewusst und nicht zufällig entschieden werden.",
   "Falsch: Aufwände und Termine festzulegen ist Aufgabe der Projektplanung. Bewertungsergebnisse können zwar in die Planung einfließen, das Ziel einer Architekturbewertung ist aber die Beurteilung der Architektur gegenüber den Qualitätszielen.",
   "Richtig: Kern jeder Bewertung ist die Frage, ob die gewählten Strukturen und Entscheidungen die geforderten Qualitätsziele voraussichtlich erreichen. Das Ergebnis ist eine begründete Einschätzung, keine Garantie.",
   "Falsch: Eine Bewertung liefert Einschätzungen und Risiken, keinen Beweis. Vor der Implementierung lässt sich die Zielerreichung grundsätzlich nicht nachweisen, sondern nur plausibel machen.",
   "Richtig: Je früher ein Risiko erkannt wird, desto günstiger ist die Korrektur, weil weniger darauf aufgebaut wurde. Frühes Aufdecken von Schwachstellen ist deshalb ein Hauptzweck der Bewertung."
  ],
  "explanation": "Architekturbewertung soll Risiken früh finden, Trade-offs sichtbar machen und abschätzen, ob die Qualitätsziele tragbar sind. Sie ist kein Nachweis der Zielerreichung und kein Planungsinstrument für Aufwand und Termine."
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
   "Eine niedrige Kohäsion – hohe Kopplung und niedrige Kohäsion bezeichnen dieselbe Eigenschaft aus zwei Blickwinkeln.",
   "Eine geringe Wiederverwendbarkeit, die sich unmittelbar in der zyklomatischen Komplexität niederschlägt.",
   "Eine hohe fachliche Zusammengehörigkeit der Elemente innerhalb des Moduls."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Kopplung misst, wie stark ein Modul von anderen abhängt bzw. andere von ihm. Viele Abhängigkeiten bedeuten, dass Änderungen sich leicht fortpflanzen und das Modul nur schwer isoliert getestet oder ausgetauscht werden kann.",
   "Falsch: Hohe Kopplung und niedrige Kohäsion treten oft gemeinsam auf, beschreiben aber verschiedene Dinge. Kopplung betrifft die Beziehungen zwischen Modulen, Kohäsion den Zusammenhalt der Elemente innerhalb eines Moduls.",
   "Falsch: Die zyklomatische Komplexität misst die Verzweigungen im Kontrollfluss einer Komponente, nicht deren Abhängigkeiten zu anderen Modulen. Zwischen beiden Größen besteht kein unmittelbarer Zusammenhang.",
   "Falsch: Hohe fachliche Zusammengehörigkeit innerhalb eines Moduls ist die Definition hoher Kohäsion. Sie ist sogar erwünscht und geht idealerweise mit niedriger Kopplung einher."
  ],
  "explanation": "Hohe Kopplung = viele Abhängigkeiten zu anderen Modulen; das erschwert isoliertes Ändern und Testen. Kohäsion (Zusammenhalt innerhalb eines Moduls) korreliert oft damit, ist aber eine eigene Eigenschaft."
 },
 {
  "id": "c5q8",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R2",
  "type": "single",
  "q": "Was misst die zyklomatische Komplexität?",
  "options": [
   "Den Codeumfang, gemessen in Zeilen (LOC).",
   "Die Anzahl der Abhängigkeiten eines Moduls zu anderen Modulen.",
   "Die Anzahl linear unabhängiger Pfade durch den Kontrollfluss, im Wesentlichen bestimmt durch die Verzweigungen.",
   "Die Verschachtelungstiefe der Vererbungshierarchie einer Klasse."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Lines of Code messen nur den Umfang. Ein langer, geradliniger Code hat viele Zeilen, aber eine niedrige zyklomatische Komplexität, weil er kaum Verzweigungen enthält.",
   "Falsch: Abhängigkeiten zwischen Modulen erfasst die Kopplung (Ca/Ce). Die zyklomatische Komplexität betrachtet dagegen den Kontrollfluss innerhalb eines Code-Stücks.",
   "Richtig: Die zyklomatische Komplexität (nach McCabe) zählt die linear unabhängigen Pfade durch den Kontrollflussgraphen; jede Verzweigung erhöht sie. Sie gibt damit auch einen Hinweis, wie viele Testfälle für eine Pfadabdeckung nötig sind.",
   "Falsch: Die Tiefe der Vererbungshierarchie ist eine eigene objektorientierte Metrik (Depth of Inheritance Tree). Sie beschreibt Klassenstrukturen, nicht die Pfade im Kontrollfluss."
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
   "Sie beschreiben, mit welcher technischen Lösung eine Qualitätsanforderung umgesetzt werden soll.",
   "Sie eignen sich vor allem für Laufzeitqualitäten wie Performanz; Wartbarkeit lässt sich damit kaum beschreiben.",
   "Sie dienen als Maßstab, an dem Architekturentscheidungen bewertet werden.",
   "Sie helfen, Qualitätsziele zu priorisieren, da nicht alle Szenarien gleich wichtig sind.",
   "Sie machen abstrakte Qualitätsziele konkret, messbar und damit überprüfbar."
  ],
  "correct": [
   2,
   3,
   4
  ],
  "optExpl": [
   "Falsch: Szenarien formulieren das geforderte Verhalten (WAS), nicht die Lösung (WIE). Gerade weil sie lösungsneutral sind, kann man verschiedene Architekturentscheidungen daran messen.",
   "Falsch: Szenarien funktionieren auch für Entwicklungszeit-Qualitäten. Wartbarkeit beschreibt man über Änderungsszenarien, z. B. „Eine neue Zahlart ist in zwei Personentagen integrierbar“.",
   "Richtig: Ein Szenario sagt konkret, was das System leisten muss; Architekturentscheidungen werden daraufhin geprüft, ob sie dieses Verhalten ermöglichen. Damit sind Szenarien der Maßstab der Bewertung.",
   "Richtig: Weil nicht alle Szenarien gleich wichtig oder gleich riskant sind, werden sie priorisiert, etwa im Utility Tree. So konzentriert sich die Bewertung auf das, was für die Stakeholder wirklich zählt.",
   "Richtig: Abstrakte Ziele wie „hohe Verfügbarkeit“ sind nicht prüfbar. Erst ein Szenario mit Stimulus, Umgebung und messbarem Antwortmaß macht daraus eine überprüfbare Aussage."
  ],
  "explanation": "Qualitätsszenarien machen Ziele überprüfbar, dienen als Bewertungsmaßstab und lassen sich priorisieren. Sie beschreiben das geforderte Verhalten, nicht die Lösung – und funktionieren als Änderungsszenarien auch für Wartbarkeit."
 },
 {
  "id": "c5q10",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R2",
  "type": "single",
  "q": "Was kennzeichnet ein Architektur-Review (bzw. Walkthrough) als Bewertungsmethode?",
  "options": [
   "Eine qualitative Methode: Fachleute gehen den Entwurf gemeinsam durch und beurteilen ihn anhand der Qualitätsziele – auch schon vor der Implementierung.",
   "Eine Methode, die einen Implementierungsstand voraussetzt, weil Entwurfsmodelle allein für eine Durchsicht nicht konkret genug sind.",
   "Eine formale Methode mit festen Rollen, unabhängigem Moderator und Protokoll – darin unterscheidet sich ein Walkthrough nicht von einer Inspektion.",
   "Eine quantitative Methode, da im Review Kennzahlen wie Kopplungsgrad und Komplexität erhoben und gegen Schwellwerte geprüft werden."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Im Review beurteilen Fachleute den Entwurf anhand ihrer Erfahrung und der Qualitätsziele – das ist eine qualitative Bewertung. Da kein Code nötig ist, kann man Entwürfe schon vor der Implementierung prüfen, wenn Änderungen noch günstig sind.",
   "Falsch: Reviews funktionieren gerade auch auf Entwürfen, Modellen und Skizzen. Dass kein Implementierungsstand nötig ist, ist ein wesentlicher Vorteil gegenüber quantitativen Verfahren.",
   "Falsch: Hier werden zwei Review-Formen gleichgesetzt. Feste Rollen, unabhängiger Moderator und Protokoll kennzeichnen die Inspektion; beim Walkthrough führt der Autor selbst durch den Entwurf und das Vorgehen ist deutlich weniger formal.",
   "Falsch: Metriken können als Input in ein Review einfließen, das Verfahren selbst bleibt aber eine Experteneinschätzung. Entscheidend ist, wie bewertet wird – durch Urteil, nicht durch Messung."
  ],
  "explanation": "Ein Architektur-Review ist eine qualitative, expertengestützte Durchsicht – auch ohne Code möglich. Metriken können einfließen, machen es aber nicht quantitativ. Walkthrough (Autor führt) ist weniger formal als die Inspektion."
 },
 {
  "id": "c5q11",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R2",
  "type": "multi",
  "q": "Welche der folgenden Verfahren sind qualitative Bewertungsmethoden?",
  "options": [
   "Ermittlung der Testabdeckung als Prozentwert.",
   "Automatisches Zählen der Codezeilen (LOC).",
   "Berechnung der zyklomatischen Komplexität je Komponente.",
   "Messung des Kopplungsgrades zwischen Modulen.",
   "Architektur-Review bzw. Inspektion durch Experten.",
   "Szenariobasierte Analyse (z. B. ATAM)."
  ],
  "correct": [
   4,
   5
  ],
  "optExpl": [
   "Falsch: Die Testabdeckung wird als Prozentwert gemessen, der angibt, wie viel Code durch Tests ausgeführt wird. Ein gemessener Kennwert ist per Definition quantitativ.",
   "Falsch: Das Zählen von Codezeilen ist eine automatische Messung und damit ein quantitatives Verfahren. Es liefert eine Zahl, aber kein Urteil über die Architektur.",
   "Falsch: Die zyklomatische Komplexität wird aus dem Kontrollfluss berechnet. Als berechnete Metrik gehört sie zu den quantitativen Verfahren.",
   "Falsch: Der Kopplungsgrad entsteht durch Zählen von Abhängigkeiten zwischen Modulen. Auch das ist eine metrikbasierte, also quantitative Bewertung.",
   "Richtig: Bei Reviews und Inspektionen beurteilen Fachleute den Entwurf anhand ihres Wissens und der Qualitätsziele. Das Ergebnis entsteht durch Urteil, nicht durch Messung – deshalb ist es ein qualitatives Verfahren.",
   "Richtig: Bei ATAM werden Szenarien moderiert gegen die Architektur durchgespielt und die Folgen von Experten eingeschätzt. Auch wenn Szenarien Messgrößen enthalten, ist die Analyse selbst qualitativ."
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
   "Begleitend nach Umsetzungsschritten, um die Ist- gegen die Soll-Architektur und erkannte Risiken zu prüfen.",
   "Auch bei bestehenden Systemen, z. B. vor einer größeren Erweiterung oder Migration.",
   "Einmal pro Release als fester Meilenstein, da zwischen den Releases laufende Änderungen die Ergebnisse entwerten.",
   "Erst wenn die Architektur vollständig ausgearbeitet ist, da die Bewertung von Teilentwürfen zu unzuverlässigen Aussagen führt."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Früh bewertet man, weil Korrekturen dann noch günstig sind; wiederholt, weil sich Architektur und Anforderungen weiterentwickeln. Wichtige Entscheidungen sind dabei natürliche Anlässe für eine Bewertung.",
   "Richtig: Nach Umsetzungsschritten zeigt ein Soll-Ist-Abgleich, ob die Implementierung der geplanten Architektur folgt. So werden Abweichungen und beginnende Erosion erkannt, bevor sie sich verfestigen.",
   "Richtig: Bewertung ist nicht auf Neuentwicklungen beschränkt. Vor einer größeren Erweiterung oder Migration klärt sie, ob die bestehende Architektur die neuen Anforderungen tragen kann und wo Risiken liegen.",
   "Falsch: Ein fester Release-Takt hat mit dem Bewertungsbedarf nichts zu tun. Bewertet wird anlassbezogen – etwa bei wichtigen Entscheidungen oder Qualitätsproblemen – und laufende Änderungen sind gerade ein Grund, wiederholt zu bewerten.",
   "Falsch: Wer auf die vollständige Architektur wartet, findet Probleme erst, wenn Korrekturen teuer sind. Auch Teilentwürfe lassen sich sinnvoll gegen die Qualitätsziele prüfen."
  ],
  "explanation": "Bewerten: früh, wiederholt, begleitend zu wichtigen Entscheidungen, nach Umsetzungsschritten (Soll-Ist) und auch bei Bestandssystemen vor größeren Änderungen. Warten auf eine vollständige Architektur oder ein starrer Release-Takt sind keine sinnvollen Kriterien."
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
   "Metriken wie die zyklomatische Komplexität sind unabhängig von Programmiersprache und Systemkontext direkt zwischen Systemen vergleichbar.",
   "Metriken eignen sich besonders für frühe Entwurfsphasen, weil sie sich ohne vorhandenen Code aus den Anforderungen ableiten lassen.",
   "Manche Qualitätsmerkmale (z. B. Wartbarkeit oder Sicherheit) lassen sich nur teilweise durch Metriken abbilden.",
   "Werden Metriken zum Ziel erhoben, optimieren Beteiligte leicht auf die Zahl statt auf die eigentliche Qualität."
  ],
  "correct": [
   0,
   3,
   4
  ],
  "optExpl": [
   "Richtig: Ein Metrikwert sagt für sich allein wenig – eine hohe Komplexität kann in einem Parser angemessen und in einer Datenklasse ein Warnsignal sein. Erst die Interpretation im Kontext macht aus der Zahl eine Bewertung.",
   "Falsch: Programmiersprache, Domäne, Codestil und Werkzeug beeinflussen Metrikwerte erheblich. Werte verschiedener Systeme direkt zu vergleichen, führt deshalb leicht zu falschen Schlüssen.",
   "Falsch: Metriken brauchen ein analysierbares Artefakt wie Code oder ein ausführbares Modell. Aus Anforderungen allein lassen sie sich nicht ermitteln; in frühen Phasen helfen daher eher qualitative Verfahren.",
   "Richtig: Wartbarkeit oder Sicherheit hängen von vielen Faktoren ab, die keine einzelne Kennzahl vollständig erfasst. Metriken liefern Indizien, die durch qualitative Bewertung ergänzt werden müssen.",
   "Richtig: Wird eine Kennzahl zum Ziel, optimieren Beteiligte auf die Zahl statt auf die eigentliche Qualität (Goodhart’s Law). Ein Beispiel ist hohe Testabdeckung durch Tests ohne aussagekräftige Prüfungen."
  ],
  "explanation": "Grenzen von Metriken: Sie brauchen Kontext und Interpretation, bilden Qualitäten nur teilweise ab, setzen ein Artefakt voraus und verlieren ihren Wert, wenn sie selbst zum Ziel werden (Goodhart’s Law). Systemübergreifende Vergleiche sind heikel."
 },
 {
  "id": "c5q14",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R1",
  "type": "multi",
  "q": "Welche Ergebnisse sind typisch für eine Architekturbewertung?",
  "options": [
   "Aufgedeckte Sensitivitäts- und Trade-off-Punkte, an denen einzelne Qualitätsmerkmale besonders beeinflusst werden.",
   "Auch Nicht-Risiken, also Entscheidungen, die als unkritisch bestätigt wurden.",
   "Eine Kennzahl, die die Gesamtqualität der Architektur in einem einzigen Wert zusammenfasst.",
   "Erkannte Risiken, Schwachstellen und Trade-offs samt priorisierter Verbesserungsvorschläge.",
   "Eine überarbeitete Zielarchitektur, die das Bewertungsteam anstelle der bisherigen ausarbeitet."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Richtig: Sensitivitätspunkte zeigen, wo eine Entscheidung ein Qualitätsmerkmal maßgeblich beeinflusst, Trade-off-Punkte, wo sie mehrere gegensätzlich beeinflusst. Diese Stellen verdienen bei weiteren Änderungen besondere Aufmerksamkeit.",
   "Richtig: Eine Bewertung bestätigt auch, welche Entscheidungen unkritisch sind. Solche Nicht-Risiken sind wertvoll, weil sie Sicherheit geben und den Aufwand auf die echten Problemstellen lenken.",
   "Falsch: Architekturqualität lässt sich nicht sinnvoll in einer einzigen Zahl ausdrücken, weil Qualitätsziele unterschiedlich und teils gegensätzlich sind. Eine Bewertung liefert deshalb differenzierte Befunde je Qualitätsziel.",
   "Richtig: Das Kernergebnis sind die gefundenen Risiken, Schwachstellen und Trade-offs. Priorisierte Empfehlungen machen daraus handlungsfähige Informationen für Architekten und Management.",
   "Falsch: Das Bewertungsteam analysiert und empfiehlt, es entwirft aber nicht neu. Die Verantwortung für die Architektur und deren Überarbeitung bleibt bei den Architekten des Systems."
  ],
  "explanation": "Typische Ergebnisse: Risiken, Nicht-Risiken, Sensitivitäts- und Trade-off-Punkte sowie priorisierte Empfehlungen. Keine Gesamtnote und keine vom Bewertungsteam neu ausgearbeitete Architektur."
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
    "text": "Moderierter Walkthrough durch den Architekturentwurf",
    "cat": 0
   },
   {
    "text": "Experten-Inspektion mit Protokoll und unabhängigem Moderator",
    "cat": 0
   },
   {
    "text": "Instabilität I = Ce / (Ca + Ce) nach R. C. Martin",
    "cat": 1
   },
   {
    "text": "Zyklomatische Komplexität je Methode",
    "cat": 1
   },
   {
    "text": "Prozentuale Testabdeckung",
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
  "type": "multi",
  "q": "Warum sind klar formulierte, priorisierte Qualitätsziele Voraussetzung für eine sinnvolle Architekturbewertung?",
  "options": [
   "Weil sich der Umfang einer Bewertung erst aus den funktionalen Anforderungen ableiten lässt.",
   "Ohne priorisierte Qualitätsziele fehlt der Maßstab, gegen den Architekturentscheidungen überhaupt bewertet werden könnten.",
   "Die Priorisierung fokussiert die Bewertung auf die wichtigsten und riskantesten Punkte.",
   "Weil Qualitätsziele festlegen, welche konkreten Technologien im System eingesetzt werden müssen.",
   "Weil eine Bewertung nur Qualitätsziele prüfen kann, die bereits als quantitative Metriken vorliegen."
  ],
  "correct": [
   1,
   2
  ],
  "optExpl": [
   "Falsch: Funktionale Anforderungen sagen, was das System tun soll, nicht wie gut. Maßstab und Umfang einer Architekturbewertung ergeben sich vor allem aus den Qualitätszielen, weil diese die Architektur am stärksten prägen.",
   "Richtig: Bewerten heißt, etwas an einem Maßstab zu messen. Ohne klare Qualitätsziele ließe sich nicht sagen, ob eine Entscheidung gut oder schlecht ist – sie wäre nur anders.",
   "Richtig: Eine Bewertung hat begrenzte Zeit und kann nicht alles prüfen. Die Priorisierung lenkt den Aufwand auf die wichtigsten Ziele und die riskantesten Entscheidungen.",
   "Falsch: Qualitätsziele beschreiben geforderte Eigenschaften wie Verfügbarkeit oder Änderbarkeit. Welche Technologien diese erfüllen, ist eine nachgelagerte Entwurfsentscheidung und nicht Teil des Ziels.",
   "Falsch: Qualitätsziele müssen nicht als Metriken vorliegen. Sie werden über Szenarien konkretisiert und können qualitativ, etwa per ATAM oder Review, bewertet werden."
  ],
  "explanation": "Priorisierte Qualitätsziele sind Maßstab und Fokus jeder Bewertung. Sie müssen nicht als Metriken vorliegen – Szenarien und qualitative Bewertung genügen – und legen keine Technologien fest."
 },
 {
  "id": "c5q16",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R2",
  "type": "multi",
  "q": "Wozu dienen Werkzeuge der statischen Code- bzw. Architekturanalyse?",
  "options": [
   "Zum Nachweis, dass die Architektur die geforderten Qualitätsziele wie Performanz oder Verfügbarkeit erfüllt.",
   "Zum (teil-)automatisierten Prüfen von Code und Struktur ohne Ausführung – etwa Metriken sowie Namens- und Abhängigkeitsregeln.",
   "Sie können Abhängigkeits- und Schichtungsregeln automatisiert auf Verstöße prüfen.",
   "Zum Messen des Laufzeitverhaltens (Antwortzeiten, Speicherverbrauch) unter realer Last.",
   "Zum Erheben qualitativer Experteneinschätzungen in moderierten Workshops."
  ],
  "correct": [
   1,
   2
  ],
  "optExpl": [
   "Falsch: Statische Analyse betrachtet Code und Struktur, ohne das Programm auszuführen. Laufzeitqualitäten wie Performanz oder Verfügbarkeit zeigen sich aber erst im Betrieb und lassen sich so nicht nachweisen.",
   "Richtig: Statische Analysewerkzeuge untersuchen Quelltext und Struktur, ohne das System zu starten. Sie berechnen Metriken und prüfen Regeln, etwa zu Namen oder Abhängigkeiten, wiederholbar und teilautomatisiert.",
   "Richtig: Ein Hauptnutzen ist die Konformitätsprüfung: Das Werkzeug vergleicht die tatsächlichen Abhängigkeiten mit den Architekturregeln, z. B. „UI darf nicht direkt auf die Datenbank zugreifen“. So werden Verstöße automatisch, etwa im Build, sichtbar.",
   "Falsch: Antwortzeiten und Speicherverbrauch unter Last misst man dynamisch, also am laufenden System mit Lasttests, Profiling oder Monitoring. Statische Analyse führt den Code gerade nicht aus.",
   "Falsch: Moderierte Workshops mit Experteneinschätzungen sind qualitative Verfahren wie Reviews oder ATAM. Analysewerkzeuge liefern dagegen automatisiert ermittelte Befunde."
  ],
  "explanation": "Statische Analyse prüft Code und Struktur ohne Ausführung (Metriken, Namens-, Abhängigkeits- und Schichtregeln). Laufzeitqualitäten wie Performanz oder Verfügbarkeit kann sie nicht nachweisen – dafür braucht man dynamische Messungen."
 },
 {
  "id": "c5q17",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R3",
  "type": "single",
  "q": "Was ist ein Trade-off-Punkt bei der Architekturbewertung (z. B. in ATAM)?",
  "options": [
   "Eine Entscheidung, die für genau ein einzelnes Qualitätsmerkmal ausschlaggebend ist.",
   "Ein Risiko, das aus einer noch nicht getroffenen Architekturentscheidung entsteht.",
   "Ein Szenario im Utility Tree, das zugleich hohe Wichtigkeit und hohes Umsetzungsrisiko hat.",
   "Eine Entscheidung bzw. Eigenschaft, die mehrere Qualitätsmerkmale gegensätzlich beeinflusst."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Eine Entscheidung, die für genau ein Qualitätsmerkmal ausschlaggebend ist, heißt Sensitivitätspunkt. Ein Trade-off-Punkt liegt erst vor, wenn dieselbe Entscheidung mehrere Merkmale in entgegengesetzte Richtungen beeinflusst.",
   "Falsch: Offene oder ungeklärte Entscheidungen können ein Risiko darstellen. Ein Trade-off-Punkt ist dagegen eine konkrete Entscheidung, bei der der Gewinn bei einem Merkmal mit einem Verlust bei einem anderen erkauft wird.",
   "Falsch: Hohe Wichtigkeit und hohe Schwierigkeit (H,H) beschreiben die Priorität eines Szenarios im Utility Tree. Das sagt aus, was zuerst analysiert wird, nicht wie eine Entscheidung Qualitäten gegeneinander abwägt.",
   "Richtig: Ein Trade-off-Punkt verbessert ein Qualitätsmerkmal auf Kosten eines anderen, z. B. Verschlüsselung erhöht Sicherheit, senkt aber Performanz. Er ist damit immer auch ein Sensitivitätspunkt für mehrere Merkmale zugleich."
  ],
  "explanation": "Trade-off-Punkt = Entscheidung, die mehrere Qualitätsmerkmale gegensätzlich beeinflusst. Abgrenzen: Sensitivitätspunkt (genau ein Merkmal), Risiko (z. B. offene Entscheidung), (H,H)-Szenario (Priorisierung im Utility Tree)."
 },
 {
  "id": "c5q18",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R2",
  "type": "single",
  "q": "Worauf sollte sich eine Architekturbewertung mit stark begrenzter Zeit konzentrieren?",
  "options": [
   "Auf die Bausteine mit der höchsten Änderungsrate laut Versionsverwaltung.",
   "Auf die technisch neuesten Komponenten, weil dort das Team-Wissen am geringsten ist.",
   "Auf eine möglichst vollständige Prüfung aller Bausteine, um nichts zu übersehen.",
   "Auf die höchstpriorisierten Qualitätsziele und die Szenarien mit dem größten Risiko."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Eine hohe Änderungsrate kann auf Probleme hinweisen, sagt aber nichts darüber, ob dort wichtige Qualitätsziele gefährdet sind. Bei knapper Zeit ist sie höchstens ein ergänzendes Indiz, kein primäres Auswahlkriterium.",
   "Falsch: Wie neu eine Technologie ist, sagt nichts über ihre Bedeutung für die Qualitätsziele aus. Fehlendes Team-Wissen kann ein Risiko sein, aber die Auswahl muss sich an Priorität und Risiko für die Ziele orientieren.",
   "Falsch: Bei knapper Zeit ist eine vollständige Prüfung schlicht nicht leistbar und würde oberflächlich ausfallen. Eine Bewertung wird wertvoller, wenn sie wenige wichtige Punkte gründlich statt alles flüchtig untersucht.",
   "Richtig: Eine Bewertung soll vor allem die Risiken finden, die die wichtigsten Ziele gefährden. Deshalb konzentriert man sich auf hoch priorisierte Qualitätsziele und Szenarien mit großem Risiko – genau das leistet die Priorisierung im Utility Tree."
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
   "Ihr Ergebnis ist vor allem eine Gesamtnote, mit der sich Architekturen verschiedener Systeme vergleichen lassen.",
   "Sie setzt voraus, dass die Architektur in einer formalen Notation (z. B. UML) dokumentiert vorliegt.",
   "Sie kann qualitativ oder quantitativ – oder kombiniert – erfolgen."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Richtig: Der Hauptnutzen einer Bewertung ist, Risiken und Schwachstellen zu finden, solange man noch günstig gegensteuern kann. Später eingebaute Fehlentscheidungen sind deutlich teurer zu beheben.",
   "Richtig: Ob eine Architektur gut ist, lässt sich nur relativ zu ihren Zielen beurteilen. Priorisierte Qualitätsziele sind daher der Maßstab, ohne den keine Bewertung möglich ist.",
   "Falsch: Eine Bewertung liefert differenzierte Befunde wie Risiken und Trade-offs bezogen auf die eigenen Ziele. Da verschiedene Systeme unterschiedliche Ziele haben, wäre eine vergleichbare Gesamtnote weder sinnvoll noch Ziel des Verfahrens.",
   "Falsch: Eine formale Notation ist hilfreich, aber keine Voraussetzung. Bewertet werden kann auch auf Basis von Skizzen, Gesprächen mit dem Team oder dem vorhandenen Code.",
   "Richtig: Qualitative Verfahren wie Reviews und ATAM sowie quantitative wie Metriken und Messungen ergänzen sich. Welche man einsetzt, hängt von der Fragestellung und den verfügbaren Artefakten ab."
  ],
  "explanation": "Architekturbewertung deckt Risiken früh auf, braucht priorisierte Qualitätsziele und kann qualitativ, quantitativ oder kombiniert erfolgen. Sie braucht keine formale Notation und liefert keine Gesamtnote."
 },
 {
  "id": "c5q20",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R3",
  "type": "single",
  "q": "Was ist ein Sensitivitätspunkt bei einer Architekturbewertung (z. B. in ATAM)?",
  "options": [
   "Eine Entscheidung, die mehrere Qualitätsmerkmale gegensätzlich beeinflusst.",
   "Ein Baustein mit besonders vielen eingehenden Abhängigkeiten, dessen Änderung viele andere Bausteine betrifft.",
   "Eine Entscheidung bzw. Eigenschaft, die für genau ein Qualitätsmerkmal besonders ausschlaggebend ist.",
   "Eine Stelle, an der Stakeholder unterschiedliche Prioritäten für dasselbe Qualitätsmerkmal angeben."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Eine Entscheidung, die mehrere Qualitätsmerkmale gegensätzlich beeinflusst, ist ein Trade-off-Punkt. Der Sensitivitätspunkt betrachtet nur die starke Wirkung auf ein einzelnes Merkmal.",
   "Falsch: Viele eingehende Abhängigkeiten beschreiben eine hohe afferente Kopplung – eine Code-Metrik. Der Sensitivitätspunkt ist dagegen ein ATAM-Begriff für eine Entscheidung mit starker Wirkung auf ein Qualitätsmerkmal.",
   "Richtig: Ein Sensitivitätspunkt ist eine Entscheidung oder Eigenschaft, von der ein Qualitätsmerkmal maßgeblich abhängt, z. B. die Thread-Pool-Größe für die Antwortzeit. Ändert man sie, ändert sich diese Qualität spürbar.",
   "Falsch: Unterschiedliche Prioritäten verschiedener Stakeholder sind ein Zielkonflikt bei der Priorisierung. Ein Sensitivitätspunkt bezieht sich dagegen auf eine Architekturentscheidung, nicht auf Meinungsunterschiede."
  ],
  "explanation": "Sensitivitätspunkt = Entscheidung, von der ein Qualitätsmerkmal maßgeblich abhängt. Nicht verwechseln mit Trade-off-Punkt (mehrere Merkmale gegensätzlich), Stakeholder-Konflikten oder hoher afferenter Kopplung."
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
   "Eine quantitative Gesamtbewertung, die das System mit Referenzarchitekturen vergleicht.",
   "Einen priorisierten Qualitätsbaum (Utility Tree) der relevanten Szenarien.",
   "Risikothemen, die mehrere zusammenhängende Einzelrisiken bündeln."
  ],
  "correct": [
   0,
   1,
   3,
   4
  ],
  "optExpl": [
   "Richtig: ATAM benennt Risiken, also problematische Entscheidungen, und ausdrücklich auch Nicht-Risiken, also als tragfähig bestätigte Entscheidungen. Beides zusammen zeigt, wo Handlungsbedarf besteht und wo nicht.",
   "Richtig: Sensitivitäts- und Trade-off-Punkte entstehen, wenn Szenarien gegen die Entscheidungen durchgespielt werden. Sie zeigen, an welchen Stellen Qualitäten besonders empfindlich reagieren oder gegeneinander abgewogen werden.",
   "Falsch: ATAM ist überwiegend qualitativ und misst das System an seinen eigenen Qualitätszielen. Eine quantitative Gesamtnote oder ein Vergleich mit Referenzarchitekturen ist nicht Teil der Methode.",
   "Richtig: Im Verlauf von ATAM wird ein Utility Tree erstellt und priorisiert, der die relevanten Szenarien ordnet. Er ist zugleich Arbeitsgrundlage und dokumentiertes Ergebnis der Bewertung.",
   "Richtig: ATAM fasst zusammenhängende Einzelrisiken zu Risikothemen zusammen. Damit wird sichtbar, welche systematischen Schwächen bestehen, und das Management kann sie gezielt adressieren."
  ],
  "explanation": "ATAM liefert Utility Tree, Risiken, Nicht-Risiken, Sensitivitäts- und Trade-off-Punkte sowie gebündelte Risikothemen. Es ist überwiegend qualitativ – keine quantitative Gesamtnote."
 },
 {
  "id": "c5q22",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R3",
  "type": "single",
  "q": "Ein Team möchte eine Architektur bereits vor der Implementierung bewerten und dabei Stakeholder einbeziehen. Wie ist ATAM in diesem Zusammenhang einzuordnen?",
  "options": [
   "Als moderierte Workshop-Methode, in der die Stakeholder per Abstimmung die beste Architekturalternative auswählen.",
   "Als qualitative Methode, die jedoch eine weitgehend fertige Implementierung voraussetzt, weil die Szenarien gegen das laufende System durchgespielt werden.",
   "Als Methode zur Kosten-Nutzen-Bewertung von Architekturalternativen, die vorrangig mit Geldwerten arbeitet.",
   "Als szenariobasierte, überwiegend qualitative Methode, die moderiert mit Stakeholdern und damit auch früh im Lebenszyklus einsetzbar ist."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: ATAM analysiert, welche Risiken und Trade-offs eine Architektur mit sich bringt; es ist kein Abstimmungsverfahren. Stakeholder bringen Szenarien und Prioritäten ein, die Entscheidung über Alternativen ist aber nicht der Kern der Methode.",
   "Falsch: Die Szenarien werden gegen die Architekturentscheidungen und den Entwurf durchgespielt, nicht gegen ein laufendes System. Genau deshalb kann ATAM bereits vor der Implementierung eingesetzt werden.",
   "Falsch: Die Kosten-Nutzen-Bewertung in Geldwerten beschreibt CBAM, das auf ATAM-Ergebnissen aufbauen kann. ATAM selbst bewertet die Wirkung von Entscheidungen auf Qualitätsziele.",
   "Richtig: ATAM nutzt priorisierte Szenarien und die Einschätzung von Stakeholdern und Architekten in moderierten Workshops. Da kein Code nötig ist, passt es genau zur Situation, früh und unter Einbeziehung der Stakeholder zu bewerten."
  ],
  "explanation": "ATAM ist szenariobasiert, überwiegend qualitativ, moderiert mit Stakeholdern und vor der Implementierung einsetzbar. Abgrenzen: CBAM (Kosten-Nutzen), kein Durchspielen gegen ein laufendes System, keine Abstimmung über Alternativen."
 },
 {
  "id": "c5q23",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R3",
  "type": "single",
  "q": "Welche Review-Form hat den höchsten Formalisierungsgrad?",
  "options": [
   "Das informelle Review ohne feste Rollen und ohne Protokoll.",
   "Der Walkthrough, bei dem der Autor die Beteiligten durch den Entwurf führt.",
   "Die Inspektion – mit Vorbereitung, definierten Rollen, Protokoll und unabhängigem Moderator.",
   "Das Pair-Programming, bei dem zwei Entwickler gemeinsam am Code arbeiten."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Das informelle Review ist die am wenigsten formale Form, gerade weil es ohne feste Rollen und Protokoll auskommt. Es ist schnell und günstig, bietet aber die geringste Verbindlichkeit.",
   "Falsch: Beim Walkthrough führt der Autor die Beteiligten durch seinen Entwurf. Er ist damit strukturierter als ein informelles Review, aber weniger formal als die Inspektion, weil Moderation und Rollenverteilung fehlen.",
   "Richtig: Die Inspektion ist die formalste Review-Form: Die Teilnehmenden bereiten sich vor, haben definierte Rollen, ein unabhängiger Moderator leitet und die Befunde werden protokolliert. Diese Strenge macht sie aufwendig, aber besonders gründlich.",
   "Falsch: Pair-Programming ist eine Entwicklungspraktik, bei der zwei Personen gemeinsam Code schreiben. Es enthält zwar eine Art fortlaufender Durchsicht, ist aber kein formalisiertes Review-Format."
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
   "Auf Projektrisiken wie Termin- und Budgetplanung, die der Architekt allein verantwortet.",
   "Darauf, Risiken bewusst zu akzeptieren und erst bei Eintritt zu reagieren.",
   "Auf Produktrisiken – am häufigsten mindert man sie, indem man ihre Eintrittswahrscheinlichkeit senkt.",
   "Auf Produktrisiken – am häufigsten mindert man sie, indem man die Schadenshöhe bei Eintritt begrenzt."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Termin- und Budgetrisiken sind Projektrisiken und liegen primär in der Verantwortung des Projektmanagements. Architekten tragen dazu bei, ihr Schwerpunkt sind aber Risiken, die das Produkt selbst betreffen.",
   "Falsch: Risiken bewusst zu akzeptieren ist eine legitime Option für einzelne, geringe Risiken. Als Grundhaltung widerspräche es dem Ziel des Risikomanagements, Risiken vorausschauend zu mindern.",
   "Richtig: Aus Architektursicht stehen Produktrisiken im Vordergrund, etwa dass das System Last oder Ausfälle nicht verkraftet. Am häufigsten begegnet man ihnen, indem man ihre Eintrittswahrscheinlichkeit senkt, z. B. durch Prototypen, Redundanz oder frühe Tests.",
   "Falsch: Der Fokus auf Produktrisiken stimmt, aber die Schadensbegrenzung ist nicht die häufigste Maßnahme. Meist versucht man zuerst, den Eintritt unwahrscheinlicher zu machen; Schadensbegrenzung ist eine ergänzende Strategie."
  ],
  "explanation": "Aus Architektursicht stehen Produktrisiken im Mittelpunkt; am häufigsten senkt man ihre Eintrittswahrscheinlichkeit. Schadensbegrenzung und Akzeptanz sind weitere, seltener gewählte Strategien."
 },
 {
  "id": "c5q25",
  "chapter": 5,
  "lz": "LZ 05-03",
  "r": "R2",
  "type": "multi",
  "q": "In einem langlaufenden System weicht die tatsächlich umgesetzte Struktur zunehmend von der dokumentierten Soll-Architektur ab. Welche Aussagen treffen zu?",
  "options": [
   "Erosion tritt vor allem bei schlecht dokumentierten Systemen auf; eine vollständige Dokumentation verhindert sie weitgehend.",
   "Man spricht von Architekturerosion; ohne Gegensteuern nimmt die „Unordnung“ über die Zeit zu.",
   "Erosion entsteht in erster Linie durch veraltete Technologien und lässt sich daher durch regelmäßige Framework-Updates beheben.",
   "Regelmäßige Konformitätsprüfungen (z. B. Abhängigkeitsanalyse) helfen, solche Abweichungen früh sichtbar zu machen.",
   "Die geplanten Qualitäten sind nur dann verlässlich zu erwarten, wenn die Umsetzung der beabsichtigten Struktur folgt."
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Falsch: Dokumentation beschreibt nur das Soll, sie erzwingt es nicht. Auch gut dokumentierte Systeme erodieren, wenn im Alltag Abkürzungen genommen und die Umsetzung nicht regelmäßig gegen die Architektur geprüft wird.",
   "Richtig: Das zunehmende Auseinanderlaufen von beabsichtigter und umgesetzter Struktur heißt Architekturerosion. Ohne aktives Gegensteuern nimmt sie durch viele kleine Abweichungen stetig zu.",
   "Falsch: Erosion betrifft die Struktur, etwa verbotene Abhängigkeiten oder verwischte Verantwortlichkeiten. Veraltete Technologien sind ein anderes Problem; Framework-Updates ändern nichts daran, dass Bausteine falsch voneinander abhängen.",
   "Richtig: Konformitätsprüfungen, etwa automatisierte Abhängigkeitsanalysen im Build, vergleichen Ist und Soll laufend. Abweichungen werden so früh sichtbar, solange sie noch einfach zu beheben sind.",
   "Richtig: Die Qualitäten einer Architektur entstehen aus ihrer Struktur. Weicht die Umsetzung davon ab, gelten die Annahmen nicht mehr, auf denen etwa Änderbarkeit oder Testbarkeit beruhen."
  ],
  "explanation": "Architekturerosion = Ist-Struktur entfernt sich vom Soll; damit sind die geplanten Qualitäten gefährdet. Gegenmittel sind regelmäßige Konformitätsprüfungen. Weder gute Dokumentation noch Framework-Updates verhindern Erosion."
 },
 {
  "id": "c5q26",
  "chapter": 5,
  "lz": "LZ 05-03",
  "r": "R2",
  "type": "single",
  "q": "Was prüft eine Konformitäts- bzw. Konsistenzanalyse der Architektur?",
  "options": [
   "Ob die Architekturdokumentation in sich widerspruchsfrei und vollständig verfasst ist.",
   "Ob die eingesetzten Bibliotheken auf dem aktuellen Versionsstand sind.",
   "Ob die umgesetzte Ist-Architektur der beabsichtigten Soll-Architektur entspricht.",
   "Ob die erhobenen Anforderungen die Qualitätsziele vollständig abdecken."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Ob die Dokumentation in sich stimmig und vollständig ist, klärt ein Dokumentations-Review. Die Konformitätsanalyse vergleicht dagegen die Dokumentation bzw. das Soll mit dem, was tatsächlich umgesetzt wurde.",
   "Falsch: Aktuelle Bibliotheksversionen sind eine Frage des Dependency- bzw. Release-Managements. Mit der Übereinstimmung von geplanter und umgesetzter Struktur hat das nichts zu tun.",
   "Richtig: Die Konformitätsanalyse prüft, ob die umgesetzte Ist-Architektur der geplanten Soll-Architektur entspricht, etwa ob nur erlaubte Abhängigkeiten existieren. So wird Architekturerosion erkannt.",
   "Falsch: Ob die Anforderungen die Qualitätsziele vollständig abdecken, ist eine Frage des Requirements Engineering. Die Konformitätsanalyse setzt später an und vergleicht Entwurf und Umsetzung."
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
   "Mit Laufzeit-Monitoring, das die im Betrieb tatsächlich aufgerufenen Module protokolliert.",
   "Mit einem manuellen Code-Review, bei dem stichprobenartig einzelne Klassen gesichtet werden.",
   "Mit verbindlichen Namenskonventionen, an die sich alle Teams halten sollen."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Statische Analysewerkzeuge ermitteln alle tatsächlichen Abhängigkeiten aus dem Code und prüfen sie gegen die definierten Regeln. Das geschieht vollständig, wiederholbar und automatisiert, z. B. bei jedem Build – deshalb ist es am zuverlässigsten.",
   "Falsch: Laufzeit-Monitoring sieht nur die Pfade, die im Betrieb tatsächlich durchlaufen werden. Eine verbotene Abhängigkeit in selten genutztem Code bleibt so unentdeckt, obwohl sie im Code vorhanden ist.",
   "Falsch: Ein manuelles Review kann Verstöße finden, prüft aber nur Stichproben und hängt von der Aufmerksamkeit der Prüfenden ab. Für eine vollständige und wiederholbare Kontrolle ist es deutlich weniger zuverlässig als ein Werkzeug.",
   "Falsch: Namenskonventionen drücken eine Absicht aus, prüfen aber nichts. Ob sich alle daran halten und die Abhängigkeiten tatsächlich regelkonform sind, bleibt ohne Prüfung offen."
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
   "Es dient primär dazu, bevorzugte Referenzarchitekturen und Technologiestacks für typische Domänen vorzustellen.",
   "Es fasst die zentralen Definitionen der vorherigen Kapitel prüfungsrelevant zusammen und ersetzt so deren gesonderte Wiederholung.",
   "Es wendet die Inhalte der vorherigen Kapitel an konkreten Fällen an und macht Zusammenhänge nachvollziehbar, ohne neuen Prüfungsstoff einzuführen.",
   "Es leitet aus den Beispielen verallgemeinerbare Regeln ab, die als Ergänzung zu den vorherigen Lernzielen zu lernen sind."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Das Curriculum ist bewusst technologieneutral und schreibt weder Referenzarchitekturen noch Technologiestacks vor. Die Beispiele zeigen, wie Entscheidungen aus dem jeweiligen Kontext entstehen – ein Stack ist dort nur ein Ergebnis unter bestimmten Randbedingungen, keine Empfehlung.",
   "Falsch: Kapitel 6 ist keine Zusammenfassung der Definitionen und ersetzt die Fachkapitel nicht. Prüfungsrelevant sind die R1/R2-Lernziele der Kapitel 1–5; die Beispiele setzen dieses Wissen voraus, statt es zu bündeln.",
   "Richtig: Die Beispiele wenden Anforderungsklärung, Entwurf, Dokumentation und Bewertung an konkreten Systemen an und machen so sichtbar, wie die Inhalte zusammenspielen. Als R3-Kapitel bringt es keinen neuen Prüfungsstoff, vertieft aber das Verständnis des bereits Gelernten.",
   "Falsch: Aus den Beispielen entstehen keine zusätzlichen Lernziele oder Regeln zum Auswendiglernen. Sie sind kontextgebunden; der Erkenntnisgewinn liegt im Nachvollziehen der Begründungen, nicht in neuen verallgemeinerten Vorgaben."
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
   "Welche Implementierungsdetails (z. B. Klassen und Methoden) die Entscheidungen konkret umsetzen.",
   "Wie Qualitätsanforderungen und Randbedingungen die zentralen Entwurfsentscheidungen beeinflussen.",
   "Welche Lösung sich als allgemeingültige Referenz auf andere Systeme übertragen lässt.",
   "Welche Alternativen erwogen und aus welchen Gründen sie verworfen wurden.",
   "Wie eine Entscheidung die Struktur prägt und in verschiedenen Sichten sichtbar wird."
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Falsch: Klassen und Methoden liegen unterhalb der Architekturebene und zeigen nicht, warum eine Struktur gewählt wurde. Der rote Faden verbindet Anforderungen mit Architekturentscheidungen; Implementierungsdetails tragen dazu kaum etwas bei.",
   "Richtig: Qualitätsanforderungen und Randbedingungen sind die eigentlichen Treiber der Architektur. Ein gutes Beispiel macht nachvollziehbar, wie etwa eine Verfügbarkeitsanforderung oder eine Vorgabe zur Plattform eine zentrale Entscheidung erzwingt.",
   "Falsch: Architekturlösungen sind kontextabhängig und lassen sich nicht als allgemeingültige Referenz auf beliebige Systeme übertragen. Ein Beispiel zeigt eine passende Lösung für seine Randbedingungen, keine Schablone für andere Kontexte.",
   "Richtig: Erst die erwogenen und verworfenen Alternativen samt Begründung machen eine Entscheidung nachvollziehbar. Genau das dokumentiert man auch in Architekturentscheidungen (ADRs): Ohne Alternativen bliebe offen, warum gerade diese Lösung gewählt wurde.",
   "Richtig: Eine wichtige Entscheidung prägt die Struktur und wird in mehreren Sichten sichtbar – etwa als Baustein in der Bausteinsicht, als Interaktion in der Laufzeitsicht und als Knoten in der Verteilungssicht. So erkennt man den Zusammenhang zwischen Entscheidung und Dokumentation."
  ],
  "explanation": "Ein durchgängiges Beispiel zeigt, wie Anforderungen und Randbedingungen Entscheidungen prägen, wie diese in den Sichten erscheinen und welche Alternativen warum verworfen wurden. Implementierungsdetails oder eine allgemeingültige Referenzlösung sind nicht das Ziel."
 },
 {
  "id": "c6q3",
  "chapter": 6,
  "lz": "LZ 06-01",
  "r": "R3",
  "type": "single",
  "q": "Wie ist die Rolle von Kapitel 6 (Beispiele) im Verhältnis zur CPSA-F-Prüfung korrekt einzuordnen?",
  "options": [
   "Es ist R1: die durchgängigen Beispiele bilden einen Schwerpunkt der Prüfungsfragen.",
   "Es ist R2: nicht direkt geprüft, aber die Beispiele muss man als Referenzlösungen kennen.",
   "Es ist überwiegend R3: Teil des Curriculums zur Veranschaulichung, aber nicht unmittelbarer Prüfungsgegenstand.",
   "Es steht außerhalb des Curriculums und ist rein optionales Zusatzmaterial."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: R1-Inhalte sind die Kernthemen, die mit hoher Wahrscheinlichkeit geprüft werden. Kapitel 6 gehört nicht dazu und bildet keinen Schwerpunkt der Prüfungsfragen.",
   "Falsch: R2 bedeutet „kann geprüft werden“, und die Beispiele sind nicht in dieser Stufe eingeordnet. Sie müssen auch nicht als Referenzlösungen beherrscht werden, weil sie Veranschaulichung und keine Vorlage sind.",
   "Richtig: R3 kennzeichnet Inhalte, die zum Curriculum gehören und das Verständnis fördern, aber nicht unmittelbar geprüft werden. Genau diese Rolle hat Kapitel 6: Es veranschaulicht die prüfungsrelevanten Inhalte der Kapitel 1–5.",
   "Falsch: Kapitel 6 ist offizieller Bestandteil des Curriculums und wird in Schulungen behandelt. Dass es nicht unmittelbar geprüft wird (R3), macht es nicht zu externem Zusatzmaterial."
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
   "Dass sich durch den Vergleich der beiden Lösungen die objektiv überlegene ermitteln lässt.",
   "Dass sich daraus eine allgemeingültige Musterlösung ableiten lässt, die künftige Entscheidungen vorwegnimmt.",
   "Dass die Unterschiede vor allem auf die unterschiedliche Erfahrung der beteiligten Teams zurückgehen.",
   "Dass Entwurfsentscheidungen kontextabhängig sind und dieselbe Anforderung je nach Randbedingungen unterschiedlich sinnvoll gelöst werden kann."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Ohne Bezug auf Kontext, Qualitätsziele und Randbedingungen gibt es keine objektiv überlegene Lösung. Jeder Ansatz kann in seinem Umfeld angemessen sein; der Vergleich zeigt Abwägungen, keinen Sieger.",
   "Falsch: Gerade weil die Lösungen verschieden ausfallen, lässt sich keine allgemeingültige Musterlösung ableiten. Künftige Entscheidungen müssen wieder aus dem jeweiligen Kontext begründet werden.",
   "Falsch: Teamerfahrung ist zwar eine mögliche Randbedingung, aber nicht der zentrale Lerngewinn. Entscheidend ist, dass unterschiedliche Anforderungen, Qualitätsziele und Randbedingungen zu unterschiedlichen, jeweils sinnvollen Lösungen führen.",
   "Richtig: Architekturentscheidungen sind kontextabhängig – dieselbe fachliche Anforderung kann je nach Qualitätszielen, Budget, Organisation oder technischen Vorgaben unterschiedlich gut gelöst werden. Der Vergleich trainiert, Lösungen immer an ihren Randbedingungen zu messen."
  ],
  "explanation": "Der Vergleich zeigt, dass Architekturentscheidungen kontextabhängig sind: Dieselbe Anforderung kann unter anderen Randbedingungen anders sinnvoll gelöst werden."
 },
 {
  "id": "c6q5",
  "chapter": 6,
  "lz": "LZ 06-01",
  "r": "R3",
  "type": "multi",
  "q": "Welchen Nutzen bringt das Studium mehrerer unterschiedlicher Architekturbeispiele? (Mehrfachauswahl)",
  "options": [
   "Man lernt, welche Technologien sich am Markt als Standard durchgesetzt haben.",
   "Man kann bewährte Lösungen unverändert übernehmen, sofern die Domäne dieselbe ist.",
   "Man erweitert das eigene Repertoire an Lösungsmustern und trainiert, sie auf neue Probleme zu übertragen.",
   "Man schärft den Blick dafür, welche Randbedingungen welche Entscheidungen begründen.",
   "Man erkennt wiederkehrende Muster und lernt zugleich deren Grenzen und Kontextabhängigkeit einzuschätzen."
  ],
  "correct": [
   2,
   3,
   4
  ],
  "optExpl": [
   "Falsch: Architekturbeispiele sind keine Marktübersicht über Technologien; das Curriculum ist bewusst technologieneutral. Gelernt werden Abwägungen und Begründungen, nicht welche Produkte sich durchgesetzt haben.",
   "Falsch: Auch in derselben Domäne unterscheiden sich Qualitätsziele, Randbedingungen und Organisation oft erheblich. Bewährte Lösungen sind deshalb Anregung, müssen aber für den eigenen Kontext geprüft und angepasst werden.",
   "Richtig: Jedes Beispiel zeigt Lösungsansätze und Muster im Einsatz und erweitert so das eigene Repertoire. Zugleich übt man, diese Ansätze auf neue Problemstellungen zu übertragen, statt sie nur zu kennen.",
   "Richtig: Beispiele machen sichtbar, welche Randbedingungen welche Entscheidungen begründen – etwa warum eine strenge Datenschutzvorgabe eine bestimmte Verteilung erzwingt. Dieser Blick hilft, eigene Entscheidungen fundiert zu begründen.",
   "Richtig: Über mehrere Beispiele hinweg erkennt man wiederkehrende Muster, sieht aber auch, wann sie nicht passen. Muster sind kontextabhängig; ihr Nutzen und ihre Grenzen zeigen sich erst im konkreten Einsatz."
  ],
  "explanation": "Mehrere Beispiele erweitern das Lösungsrepertoire, schärfen den Blick für begründende Randbedingungen und zeigen Muster samt Grenzen. Sie liefern weder Kopiervorlagen – auch nicht innerhalb einer Domäne – noch eine Technologieübersicht."
 },
 {
  "id": "c6q6",
  "chapter": 6,
  "lz": "LZ 06-02",
  "r": "R3",
  "type": "single",
  "q": "In einem Architekturbeispiel wird eine Entscheidung ausdrücklich mit ihren Nachteilen dokumentiert. Warum ist gerade das Betrachten solcher Trade-offs lehrreich?",
  "options": [
   "Weil die dokumentierten Nachteile belegen, dass an dieser Stelle eine bessere, nachteilsfreie Lösung übersehen wurde.",
   "Weil Architekturentscheidungen konkurrierende Qualitätsziele gegeneinander abwägen und der bewusste, begründete Kompromiss den Kern der Entscheidung bildet.",
   "Weil das Offenlegen von Nachteilen vor allem der späteren Absicherung gegen Kritik dient und weniger dem Entwurf selbst.",
   "Weil ein guter Entwurf so lange überarbeitet werden sollte, bis keine Nachteile mehr verbleiben."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Dokumentierte Nachteile sind kein Hinweis auf einen übersehenen Idealzustand, denn nachteilsfreie Lösungen gibt es in der Regel nicht. Jede Entscheidung, die ein Qualitätsziel stärkt, kostet meist an anderer Stelle – etwa Performance gegen Wartbarkeit.",
   "Richtig: Qualitätsziele konkurrieren häufig miteinander, etwa Sicherheit und Benutzbarkeit oder Flexibilität und Performance. Der bewusste, begründete Kompromiss ist der Kern einer Architekturentscheidung – wer die Nachteile kennt, versteht, warum die Entscheidung trotzdem getroffen wurde.",
   "Falsch: Nachteile werden offengelegt, damit die Abwägung nachvollziehbar ist und Risiken bewusst getragen werden, nicht in erster Linie zur Absicherung gegen Kritik. Sie sind Teil des Entwurfswissens und helfen, die Entscheidung später zu überprüfen oder zu revidieren.",
   "Falsch: Ein Entwurf lässt sich nicht so lange überarbeiten, bis keine Nachteile mehr bleiben, weil konkurrierende Qualitätsziele immer Kompromisse erzwingen. Ziel ist eine angemessene Lösung mit bewusst akzeptierten Nachteilen, nicht eine perfekte."
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
    "text": "Ihr vereinbart ein gemeinsames Dokumentationstemplate (z. B. arc42) für alle Teams.",
    "cat": 0
   },
   {
    "text": "Schnittstellen zwischen den Teams werden erst festgelegt, wenn alle Teams ihre Bausteine implementiert haben.",
    "cat": 1
   },
   {
    "text": "Jedes Team wählt sein eigenes Dokumentationsformat, solange es in sich konsistent ist.",
    "cat": 1
   },
   {
    "text": "Du gibst die übergreifende Struktur und die Schnittstellen zwischen den Teams zentral vor, überlässt aber die interne Struktur der Bausteine den Teams.",
    "cat": 0
   },
   {
    "text": "Du gibst auch die interne Struktur jedes Teambausteins detailliert vor, damit alles einheitlich ist.",
    "cat": 1
   },
   {
    "text": "Du dokumentierst die übergreifenden Architekturentscheidungen zentral; teamspezifische Details dokumentieren die Teams selbst.",
    "cat": 0
   }
  ],
  "explanation": "Sinnvoll: Übergreifende Struktur und Schnittstellen zentral, Interna bei den Teams, gemeinsames Template, übergreifende Entscheidungen zentral dokumentiert. Nicht sinnvoll: Interna aller Teams zentral vorschreiben (Engpass, keine Autonomie), Schnittstellen erst nachträglich klären oder je Team eigene Formate ohne gemeinsame Struktur."
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
    "text": "Sie schafft ein gemeinsames Verständnis bei den Stakeholdern.",
    "cat": 0
   },
   {
    "text": "Sie senkt in jedem Fall die Kosten der Erstentwicklung.",
    "cat": 1
   },
   {
    "text": "Sie unterstützt das Erreichen von Qualitätszielen wie Wartbarkeit und Sicherheit.",
    "cat": 0
   },
   {
    "text": "Sie legt fest, welche Features das System haben soll.",
    "cat": 1
   },
   {
    "text": "Sie sorgt dafür, dass alle Qualitätsziele ohne Kompromisse gleichzeitig maximal erfüllt werden.",
    "cat": 1
   },
   {
    "text": "Sie hilft, die Komplexität des Systems beherrschbar zu halten.",
    "cat": 0
   }
  ],
  "explanation": "Architektur macht Komplexität beherrschbar, unterstützt Qualitätsziele und schafft gemeinsames Verständnis. Sie senkt nicht zwingend die Erstentwicklungskosten (Architekturarbeit kostet), legt nicht den Funktionsumfang fest und erfordert Kompromisse zwischen Qualitätszielen."
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
    "text": "Nutzer sollen Berichte als PDF exportieren können.",
    "cat": 0
   },
   {
    "text": "Das System muss Zahlungen per Kreditkarte abwickeln können.",
    "cat": 0
   },
   {
    "text": "Die Entwicklung ist verpflichtend in Java durchzuführen.",
    "cat": 1
   },
   {
    "text": "Antworten sollen im Mittel unter zwei Sekunden erfolgen.",
    "cat": 0
   },
   {
    "text": "Das Projektbudget ist auf 200 Personentage begrenzt.",
    "cat": 1
   },
   {
    "text": "Es muss die bereits vorhandene Oracle-Datenbank weiterverwenden.",
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
    "text": "Eine neue Zahlart lässt sich in weniger als fünf Personentagen integrieren.",
    "cat": 1
   },
   {
    "text": "Nutzer melden sich mit E-Mail und Passwort an.",
    "cat": 0
   },
   {
    "text": "Aus einer Bestellung wird eine Rechnung als PDF erzeugt.",
    "cat": 0
   },
   {
    "text": "Die Oberfläche ist ohne Schulung in unter zehn Minuten bedienbar.",
    "cat": 1
   },
   {
    "text": "Das System unterstützt Deutsch und Englisch.",
    "cat": 0
   },
   {
    "text": "Das System ist zu 99,9 % der Zeit verfügbar.",
    "cat": 1
   }
  ],
  "explanation": "Funktionale Anforderungen sagen, WAS das System tut (Anmeldung, Rechnung, Sprachen); Qualitätsanforderungen sagen, WIE GUT (Verfügbarkeit, Änderbarkeit, Bedienbarkeit) – LZ 02-03."
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
    "text": "In einer strengen Schichtung darf eine höhere Schicht beliebige tiefere Schichten überspringen.",
    "cat": 1
   },
   {
    "text": "Microservices verringern gegenüber einem Monolithen die betriebliche Komplexität.",
    "cat": 1
   },
   {
    "text": "Microservices sind fachlich geschnitten und unabhängig voneinander deploybar.",
    "cat": 0
   },
   {
    "text": "Eine Schichtenarchitektur fördert Austauschbarkeit, kann aber zusätzliche Latenz kosten.",
    "cat": 0
   },
   {
    "text": "Pipes & Filter eignen sich gut für schrittweise Datenverarbeitung.",
    "cat": 0
   },
   {
    "text": "Pipes & Filter eignen sich gut, wenn die Filter einen gemeinsamen veränderlichen Zustand teilen.",
    "cat": 1
   }
  ],
  "explanation": "Richtig: Schichten fördern Austauschbarkeit (kosten aber Latenz), Pipes & Filter passen zu schrittweiser Datenverarbeitung, Microservices sind fachlich geschnitten und unabhängig deploybar. Falsch: Microservices erhöhen die Betriebskomplexität, Filter teilen keinen Zustand, und strenge Schichtung verbietet das Überspringen."
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
    "text": "Fehlerbehandlung.",
    "cat": 0
   },
   {
    "text": "Das Layout eines einzelnen Dialogfensters.",
    "cat": 1
   },
   {
    "text": "Authentifizierung und Autorisierung (Sicherheit).",
    "cat": 0
   },
   {
    "text": "Die konkrete Berechnung der Rechnungssumme im Bestellmodul.",
    "cat": 1
   },
   {
    "text": "Persistenz bzw. Datenzugriff.",
    "cat": 0
   },
   {
    "text": "Protokollierung (Logging).",
    "cat": 0
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
    "text": "Fachliche und technische Belange bewusst trennen.",
    "cat": 0
   },
   {
    "text": "Rückmeldung des Betriebs erst einholen, wenn die Verteilungssicht vollständig dokumentiert ist.",
    "cat": 1
   },
   {
    "text": "Architektur früh mit einem Prototyp gegen die größten Risiken absichern.",
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
    "text": "Den Entwurf zunächst vollständig ausarbeiten und erst danach mit Prototypen validieren.",
    "cat": 1
   }
  ],
  "explanation": "Sinnvoll: früh risikogetrieben prototypen, Fachliches und Technisches trennen, Blackbox → Whitebox verfeinern. Nicht sinnvoll: erst vollständig entwerfen und dann validieren, Technologie vor den Qualitätsanforderungen festlegen oder Feedback erst nach fertiger Doku einholen."
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
    "text": "Die Konsequenzen (Vor- und Nachteile) der Entscheidung.",
    "cat": 0
   },
   {
    "text": "Der Kontext bzw. das zugrunde liegende Problem.",
    "cat": 0
   },
   {
    "text": "Die betrachteten Alternativen.",
    "cat": 0
   },
   {
    "text": "Eine fortlaufend aktualisierte Beschreibung des aktuellen Systemzustands.",
    "cat": 1
   },
   {
    "text": "Eine detaillierte Implementierungsanleitung für die Entwickler.",
    "cat": 1
   },
   {
    "text": "Die getroffene Entscheidung.",
    "cat": 0
   }
  ],
  "explanation": "Ein ADR enthält Kontext, Entscheidung, Alternativen und Konsequenzen. Implementierungsanleitungen und eine laufend gepflegte Systembeschreibung gehören nicht hinein – ein ADR hält eine Entscheidung zu ihrem Zeitpunkt fest."
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
    "text": "Nutzerumfrage zur Bedienbarkeit.",
    "cat": 1
   },
   {
    "text": "Zählen ein- und ausgehender Abhängigkeiten (Kopplungsmetrik).",
    "cat": 0
   },
   {
    "text": "Experten-Interview zur Architektur.",
    "cat": 1
   },
   {
    "text": "Messung der Antwortzeiten unter Last.",
    "cat": 0
   },
   {
    "text": "Messen von LOC und zyklomatischer Komplexität.",
    "cat": 0
   },
   {
    "text": "Szenariobasierte Bewertung in einem Workshop.",
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
    "text": "Architektur-Review gegen die dokumentierten Vorgaben.",
    "cat": 0
   },
   {
    "text": "Lasttests gegen das Gesamtsystem fahren.",
    "cat": 1
   },
   {
    "text": "Statische Analyse der Abhängigkeits- und Schichtungsregeln im Build.",
    "cat": 0
   },
   {
    "text": "Automatischer Soll-Ist-Abgleich der erlaubten Schichtzugriffe.",
    "cat": 0
   },
   {
    "text": "Die Unit-Test-Abdeckung auf über 80 % erhöhen.",
    "cat": 1
   },
   {
    "text": "Fitness-Funktionen, die eine Architekturregel dauerhaft überwachen.",
    "cat": 0
   }
  ],
  "explanation": "Soll-Ist-Abweichungen der Struktur decken statische Abhängigkeitsanalyse, Reviews gegen die Vorgaben und Fitness-Funktionen auf. Hohe Testabdeckung und Lasttests prüfen Funktion bzw. Laufzeitverhalten – verbotene Abhängigkeiten bleiben dabei unentdeckt."
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
    "text": "Trennt Schnittstelle und Implementierung, sodass die Umsetzung austauschbar bleibt.",
    "cat": 0
   },
   {
    "text": "Aus Nutzersicht funktional vollständig.",
    "cat": 0
   },
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
    "text": "Bricht bei nahezu jeder internen Änderung der Implementierung.",
    "cat": 1
   }
  ],
  "explanation": "Gute Schnittstellen sind leicht nutzbar, schwer missbrauchbar, funktional vollständig und trennen Schnittstelle von Implementierung (austauschbar) – LZ 03-07. Interne Details offenzulegen oder bei jeder Änderung zu brechen ist unerwünscht (zu enge Kopplung)."
 },
 {
  "id": "c3q67",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R1",
  "type": "multi",
  "q": "Was passiert typischerweise, wenn zwischen Bausteinen eine hohe, enge Kopplung besteht?",
  "options": [
   "Die Wiederverwendbarkeit einzelner Bausteine sinkt.",
   "Änderungen an einem Baustein pflanzen sich auf viele andere fort.",
   "Die Kohäsion der beteiligten Bausteine steigt, da sie eng zusammenarbeiten.",
   "Die Bausteine lassen sich leichter parallel von verschiedenen Teams entwickeln, da sie eng abgestimmt sind.",
   "Bausteine lassen sich schlecht isoliert testen."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Richtig: Ein eng gekoppelter Baustein lässt sich nicht allein herauslösen, weil er seine Partner gleich mitbringt. Wer ihn wiederverwenden will, muss die ganzen Abhängigkeiten mitnehmen.",
   "Richtig: Hängen viele Bausteine eng an einem anderen, erzwingt eine Änderung dort Anpassungen bei allen Abhängigen. Dieser Ripple-Effekt macht Änderungen teuer und riskant.",
   "Falsch: Hier werden Kopplung und Kohäsion verwechselt. Kohäsion beschreibt den Zusammenhalt innerhalb eines Bausteins, Kopplung die Abhängigkeiten zwischen Bausteinen – enge Kopplung erhöht die Kohäsion nicht, oft geht sie sogar mit geringer Kohäsion einher.",
   "Falsch: Enge Kopplung erzwingt ständige Abstimmung, weil Änderungen eines Teams die Bausteine der anderen betreffen. Gerade lose Kopplung ist die Voraussetzung, dass Teams unabhängig und parallel arbeiten können.",
   "Richtig: Um einen eng gekoppelten Baustein zu testen, müssen seine Partner mitlaufen oder aufwendig ersetzt werden. Isolierte Unit-Tests werden dadurch schwierig."
  ],
  "explanation": "Enge Kopplung lässt Änderungen sich ausbreiten, erschwert isoliertes Testen, Wiederverwendung und parallele Entwicklung. Sie ist kein Zeichen hoher Kohäsion."
 },
 {
  "id": "c3q68",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R1",
  "type": "multi",
  "q": "Ein Baustein legt seine internen Implementierungsdetails offen (kein Information Hiding). Was sind die Folgen?",
  "options": [
   "Der Baustein wird flexibler nutzbar, und der Pflegeaufwand für Schnittstellen sinkt dauerhaft.",
   "Solange die Interna gut dokumentiert sind, bleiben Änderungen daran für die Nutzer folgenlos.",
   "Die Implementierung lässt sich schlechter austauschen.",
   "Die Kopplung an den Baustein steigt.",
   "Nutzer binden sich an Interna – Änderungen daran brechen sie."
  ],
  "correct": [
   2,
   3,
   4
  ],
  "optExpl": [
   "Falsch: Kurzfristig wirkt der direkte Zugriff auf Interna flexibel. Langfristig wird aber jede interne Änderung zur Schnittstellenänderung, weil Nutzer davon abhängen – der Pflegeaufwand steigt, statt zu sinken.",
   "Falsch: Dokumentation macht die Abhängigkeit von Interna sichtbar, beseitigt sie aber nicht. Ändert sich ein dokumentiertes Internum, müssen alle Nutzer, die es verwenden, trotzdem angepasst werden.",
   "Richtig: Wenn Nutzer auf interne Details zugreifen, muss eine neue Implementierung genau diese Details nachbilden. Information Hiding ist gerade die Voraussetzung dafür, die Implementierung hinter einer stabilen Schnittstelle austauschen zu können.",
   "Richtig: Nutzer hängen nicht mehr nur von der Schnittstelle ab, sondern auch von internen Strukturen. Damit gibt es mehr und stärkere Abhängigkeiten – die Kopplung steigt.",
   "Richtig: Wer Interna nutzt, verlässt sich auf Details, die der Baustein eigentlich frei ändern dürfen sollte. Jede solche Änderung bricht dann die Nutzer, obwohl sich der eigentliche Vertrag nicht geändert hat."
  ],
  "explanation": "Ohne Information Hiding hängen Nutzer an Interna: Kopplung steigt, Austauschbarkeit sinkt, jede interne Änderung wird zur Schnittstellenänderung. Dokumentation ändert daran nichts."
 },
 {
  "id": "c3q69",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R1",
  "type": "multi",
  "q": "Was passiert, wenn ein Baustein eine geringe Kohäsion hat (er bündelt Unzusammenhängendes)?",
  "options": [
   "Er ist als Ganzes schlecht wiederverwendbar.",
   "Er ist besonders gut wiederverwendbar, da er viele verschiedene Funktionen anbietet.",
   "Er muss aus mehreren, unabhängigen Gründen geändert werden.",
   "Er ist schwerer zu verstehen und zu testen.",
   "Er hat tendenziell weniger Abhängigkeiten zu anderen Bausteinen, da er viele Aufgaben selbst erledigt."
  ],
  "correct": [
   0,
   2,
   3
  ],
  "optExpl": [
   "Richtig: Wer nur einen Teil der Funktionalität braucht, muss den ganzen Sammelbaustein samt seiner Abhängigkeiten übernehmen. Das macht ihn als Ganzes schlecht wiederverwendbar.",
   "Falsch: Viele Funktionen klingen nach breiter Einsetzbarkeit, doch Unzusammenhängendes erschwert gerade die Wiederverwendung. Gut wiederverwendbar sind Bausteine mit einer klar umrissenen, zusammenhängenden Aufgabe.",
   "Richtig: Bündelt ein Baustein unzusammenhängende Aufgaben, betrifft ihn jede Änderung an einer davon. Er hat also mehrere unabhängige Änderungsgründe, und Änderungen an einem Teil gefährden die anderen.",
   "Richtig: Ohne gemeinsamen Zweck fehlt dem Baustein eine klare Idee, die ihn verständlich macht. Tests müssen viele unabhängige Aspekte und deren Wechselwirkungen abdecken, was sie aufwendig macht.",
   "Falsch: Ein Sammelbaustein wird typischerweise von vielen anderen genutzt und nutzt selbst vieles. Geringe Kohäsion zieht daher eher mehr Abhängigkeiten an – die Kopplung steigt, statt zu sinken."
  ],
  "explanation": "Geringe Kohäsion macht Bausteine schwer verständlich und testbar, sie ändern sich aus mehreren Gründen und sind schlecht wiederverwendbar. Sie ziehen eher mehr Abhängigkeiten an, statt weniger."
 },
 {
  "id": "c3q70",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R1",
  "type": "multi",
  "q": "In einem System wird die Trennung der Belange (Separation of Concerns) missachtet – z. B. steckt Datenbankzugriff direkt im UI-Code. Was folgt daraus?",
  "options": [
   "Betroffen ist nur der UI-Baustein; der Rest des Systems bleibt davon unberührt.",
   "Der Austausch der Technik (z. B. der Datenbank) wird erschwert.",
   "Die Teile lassen sich schlecht einzeln testen und wiederverwenden.",
   "Eine Änderung an einem Belang zwingt zu Änderungen an anderen.",
   "Die Performance steigt, da Aufrufe über Schichtgrenzen entfallen – das wiegt die Nachteile in der Regel auf."
  ],
  "correct": [
   1,
   2,
   3
  ],
  "optExpl": [
   "Falsch: Die Folgen reichen über den UI-Baustein hinaus. Andere Bausteine, die dieselben Daten brauchen, können die Logik nicht nutzen und duplizieren sie, und Schemaänderungen erzwingen plötzlich UI-Änderungen.",
   "Richtig: Steckt der Datenbankzugriff verstreut im UI-Code, gibt es keine Stelle, an der man die Technik austauschen könnte. Ein Datenbankwechsel trifft dann auch die Oberfläche.",
   "Richtig: Vermischte Belange lassen sich nicht getrennt herauslösen. Um die UI zu testen, braucht man eine Datenbank, und die Datenzugriffslogik ist an die Oberfläche gebunden und anderswo nicht wiederverwendbar.",
   "Richtig: Wenn Belange vermischt sind, ändern sie sich gemeinsam. Eine Änderung am Datenmodell zieht Änderungen an der Oberfläche nach sich und umgekehrt – genau das soll Separation of Concerns verhindern.",
   "Falsch: Ein eingesparter Aufruf über eine Schichtgrenze bringt meist nur einen geringen Performancegewinn. Die Nachteile für Wartbarkeit, Testbarkeit und Austauschbarkeit wiegen in der Regel deutlich schwerer."
  ],
  "explanation": "Vermischte Belange koppeln Änderungen, erschweren Tests, Wiederverwendung und Technikwechsel – mit Folgen über den UI-Baustein hinaus. Ein kleiner Performancegewinn rechtfertigt das selten."
 },
 {
  "id": "c3q71",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R3",
  "type": "multi",
  "q": "Was passiert, wenn das DRY-Prinzip verletzt wird (dieselbe Entscheidung/Logik ist mehrfach dupliziert)?",
  "options": [
   "Es entsteht eine versteckte (logische) Kopplung: Die Kopien müssen gemeinsam geändert werden, obwohl kein Baustein vom anderen abhängt.",
   "Eine Änderung muss an mehreren Stellen konsistent nachgezogen werden.",
   "Das Problem betrifft nur duplizierte Logik, nicht duplizierte Konstanten oder Konfigurationswerte.",
   "Der Pflegeaufwand und die Fehleranfälligkeit steigen.",
   "Es entsteht das Risiko, dass Kopien auseinanderlaufen (Inkonsistenz)."
  ],
  "correct": [
   0,
   1,
   3,
   4
  ],
  "optExpl": [
   "Richtig: Die Kopien sind über das gemeinsame Wissen verbunden, auch wenn im Code keine Abhängigkeit zu sehen ist. Ändert sich die Regel, müssen alle Kopien mitgeändert werden – eine versteckte, logische Kopplung.",
   "Richtig: Dieselbe Entscheidung steckt an mehreren Stellen, also muss jede Änderung überall konsistent nachgezogen werden. Wer eine Stelle übersieht, erzeugt ein widersprüchliches Verhalten.",
   "Falsch: DRY bezieht sich auf jedes duplizierte Wissen, nicht nur auf Logik. Auch doppelt gepflegte Konstanten oder Konfigurationswerte laufen auseinander, wenn nur eine Stelle angepasst wird.",
   "Richtig: Jede Änderung muss mehrfach umgesetzt und getestet werden, was den Pflegeaufwand erhöht. Mit der Zahl der Kopien steigt zugleich die Chance, dass irgendwo ein Fehler entsteht.",
   "Richtig: Werden Kopien unabhängig voneinander geändert, verhalten sie sich irgendwann unterschiedlich. Das System wird inkonsistent, etwa wenn ein Rabatt an zwei Stellen verschieden berechnet wird."
  ],
  "explanation": "Verletztes DRY erzwingt mehrfache Änderungen, riskiert Inkonsistenz, erhöht Pflegeaufwand und erzeugt eine unsichtbare logische Kopplung. Das gilt für Logik genauso wie für Konstanten und Konfiguration."
 },
 {
  "id": "c3q72",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "multi",
  "q": "In einer eigentlich strikten Schichtenarchitektur werden Schichten übersprungen und es gibt Rückwärts-Aufrufe (untere ruft obere). Was folgt daraus?",
  "options": [
   "Es entstehen unkontrollierte, schwer nachvollziehbare Abhängigkeiten.",
   "Solange die Abweichungen nur vereinzelt aus Performancegründen auftreten, sind sie unkritisch.",
   "Austauschbarkeit und isolierte Testbarkeit der Schichten leiden.",
   "Die Architektur ist damit faktisch eine gelockerte Schichtung, die der strikten gleichwertig ist.",
   "Die Architektur erodiert schleichend gegenüber dem geplanten Entwurf."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Die Schichtregeln sollen Abhängigkeiten in eine klare Richtung lenken. Übersprungene Schichten und Rückwärtsaufrufe erzeugen kreuz und quer laufende Abhängigkeiten, die sich kaum noch nachvollziehen lassen.",
   "Falsch: Gerade vereinzelte, undokumentierte Ausnahmen summieren sich schleichend zur Erosion. Ist eine Abweichung wirklich nötig, muss sie bewusst entschieden und dokumentiert werden, etwa in einer ADR.",
   "Richtig: Eine Schicht lässt sich nur austauschen oder isoliert testen, wenn sie ausschließlich die Schnittstelle der darunterliegenden Schicht nutzt. Querzugriffe und Rückwärtsaufrufe binden Schichten an weitere Schichten.",
   "Falsch: Gelockerte Schichtung erlaubt zwar, nach unten Schichten zu überspringen, aber keine Aufrufe von unten nach oben. Rückwärtsaufrufe bleiben auch dort Verletzungen und erzeugen zyklische Abhängigkeiten.",
   "Richtig: Jede nicht vorgesehene Abhängigkeit entfernt die tatsächliche Struktur ein Stück weiter vom geplanten Entwurf. Diese schleichende Architekturerosion bemerkt man oft erst, wenn Änderungen unerwartet teuer werden."
  ],
  "explanation": "Übersprungene Schichten und Rückwärtsaufrufe in einer strikten Schichtung erzeugen unkontrollierte Abhängigkeiten und Erosion. Auch vereinzelte Ausnahmen müssen bewusst entschieden werden; Rückwärtsaufrufe sind auch in gelockerter Schichtung Verletzungen."
 },
 {
  "id": "c1q30",
  "chapter": 1,
  "lz": "LZ 01-04",
  "r": "R1",
  "type": "multi",
  "q": "Du bist Softwarearchitekt:in für ein Kernbanken-System. Worauf musst du in dieser Rolle besonders achten?",
  "options": [
   "Die Qualitätsanforderungen (z. B. Sicherheit, Nachvollziehbarkeit, Verfügbarkeit) klären und schärfen.",
   "Regulatorische Randbedingungen und Compliance früh berücksichtigen.",
   "Die regulatorischen Vorgaben im Detail juristisch auslegen und für das Projekt verbindlich interpretieren.",
   "Risiken früh erkennen und tragende Entscheidungen begründet dokumentieren.",
   "Konflikte zwischen Sicherheit und Benutzbarkeit eigenständig zugunsten der Sicherheit entscheiden, da im Bankumfeld Sicherheit immer Vorrang hat."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Richtig: In einer kritischen Domäne wie dem Kernbanking prägen Qualitätsanforderungen wie Sicherheit, Nachvollziehbarkeit und Verfügbarkeit die Architektur maßgeblich. Sie früh zu klären und messbar zu machen ist daher zentral.",
   "Richtig: Regulatorische Vorgaben sind im Bankumfeld eine wesentliche Randbedingung, etwa zu Datenschutz, Aufbewahrung oder Prüfbarkeit. Werden sie spät entdeckt, können sie tragende Entscheidungen nachträglich infrage stellen.",
   "Falsch: Die juristische Auslegung regulatorischer Vorgaben ist Aufgabe der Rechts- bzw. Compliance-Abteilung. Architekt:innen berücksichtigen deren Ergebnisse als Randbedingungen, legen sie aber nicht selbst verbindlich aus.",
   "Richtig: Risiken früh zu erkennen und tragende Entscheidungen begründet zu dokumentieren ist Kernaufgabe der Rolle. Gerade in regulierten Umgebungen ist diese Nachvollziehbarkeit oft auch für Prüfungen wichtig.",
   "Falsch: Auch im Bankumfeld hat Sicherheit nicht automatisch immer Vorrang. Zielkonflikte zwischen Qualitätsmerkmalen werden mit den Stakeholdern abgewogen und priorisiert, nicht von Architekt:innen allein pauschal entschieden."
  ],
  "explanation": "Auch im Kernbankensystem gilt: Qualitätsanforderungen klären, Regulatorik früh einbeziehen, Risiken erkennen, Entscheidungen begründen. Zielkonflikte wägt man mit den Stakeholdern ab; die juristische Auslegung liegt bei Recht/Compliance."
 },
 {
  "id": "c1q33",
  "chapter": 1,
  "lz": "LZ 01-06",
  "r": "R1",
  "type": "multi",
  "q": "Wie arbeiten Softwarearchitekt:innen mit anderen Stakeholdern zusammen?",
  "options": [
   "Sie klären mit PO/Requirements die fachlichen Ziele und Anliegen.",
   "Sie liefern der Entwicklung tragfähige, verständliche Vorgaben.",
   "Sie stellen dem Management die Architektur vor allem über detaillierte UML-Diagramme vor, da diese am präzisesten sind.",
   "Sie übernehmen die Kommunikation mit den Fachbereichen, damit sich das Product Ownership auf die Backlog-Pflege konzentrieren kann.",
   "Sie stimmen sich mit dem Betrieb zu Deployment und Betreibbarkeit ab."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Richtig: Architekt:innen klären gemeinsam mit Product Owner und Requirements Engineering die fachlichen Ziele und Anliegen. Nur so lassen sich die daraus folgenden Qualitätsanforderungen und Randbedingungen richtig ableiten.",
   "Richtig: Die Entwicklung braucht tragfähige und verständliche Vorgaben, etwa zu Struktur, Schnittstellen und Querschnittskonzepten. Sind diese unklar, wird die Architektur in der Umsetzung leicht unterlaufen.",
   "Falsch: Kommunikation muss zielgruppengerecht sein. Für das Management sind Überblick, Risiken, Kosten und Auswirkungen wichtiger als detaillierte UML-Diagramme, die eher die Entwicklung adressieren.",
   "Falsch: Architekt:innen arbeiten mit PO und Fachbereichen zusammen, übernehmen aber nicht deren Kommunikationsrolle. Die fachliche Abstimmung bleibt Aufgabe des Product Ownership.",
   "Richtig: Die Abstimmung mit dem Betrieb zu Deployment, Monitoring und Betreibbarkeit gehört zur Rolle. Viele Qualitätsanforderungen wie Verfügbarkeit lassen sich nur gemeinsam mit dem Betrieb erfüllen."
  ],
  "explanation": "Architekt:innen arbeiten mit Entwicklung, Betrieb und PO/Requirements zusammen. Sie ersetzen dabei keine anderen Rollen und kommunizieren zielgruppengerecht – dem Management eher Überblick und Risiken als Detail-UML."
 },
 {
  "id": "c1q34",
  "chapter": 1,
  "lz": "LZ 01-02",
  "r": "R1",
  "type": "multi",
  "q": "Welche Eigenschaften eines Systems kann die Softwarearchitektur maßgeblich beeinflussen?",
  "options": [
   "Die Betriebs- und Infrastrukturkosten.",
   "Die fachlichen Anforderungen selbst (was das System können soll).",
   "Sicherheit und Zuverlässigkeit.",
   "Performanz und Skalierbarkeit.",
   "Wartbarkeit und Änderbarkeit."
  ],
  "correct": [
   0,
   2,
   3,
   4
  ],
  "optExpl": [
   "Richtig: Entscheidungen zu Verteilung, Skalierungskonzept und Technologie bestimmen die Betriebs- und Infrastrukturkosten maßgeblich mit. Eine stark verteilte Architektur verursacht z. B. ganz andere Kosten als ein einzelner Server.",
   "Falsch: Die fachlichen Anforderungen stammen von den Stakeholdern und beschreiben, was das System leisten soll. Die Architektur muss sie erfüllbar machen, legt sie aber nicht selbst fest.",
   "Richtig: Sicherheit und Zuverlässigkeit sind klassische Architekturthemen. Sie hängen etwa von Schutzmaßnahmen an Schnittstellen, Redundanz und Fehlerbehandlungskonzepten ab.",
   "Richtig: Performanz und Skalierbarkeit werden stark durch Architekturentscheidungen geprägt, etwa durch Verteilung, Caching oder Kommunikationsart. Später lassen sie sich oft nur noch mit großem Aufwand verbessern.",
   "Richtig: Wartbarkeit und Änderbarkeit hängen direkt von der Struktur ab, insbesondere von Kopplung, Kohäsion und klaren Schnittstellen. Eine gut geschnittene Architektur hält Änderungen lokal."
  ],
  "explanation": "Architektur beeinflusst Qualitätseigenschaften wie Wartbarkeit, Performanz, Sicherheit und Zuverlässigkeit – und damit auch die Betriebskosten. Die fachlichen Anforderungen selbst legt sie nicht fest."
 },
 {
  "id": "c2q28",
  "chapter": 2,
  "lz": "LZ 02-02",
  "r": "R1",
  "type": "multi",
  "q": "Welche Faktoren beeinflussen die Softwarearchitektur (Einflussfaktoren und Randbedingungen)?",
  "options": [
   "Regulatorische Vorgaben (Recht, Datenschutz, Compliance).",
   "Die konkrete Implementierung der Algorithmen innerhalb der Bausteine.",
   "Technologische Vorgaben (vorhandene Infrastruktur, Frameworks, Sprachen).",
   "Funktionale Anforderungen und Qualitätsanforderungen.",
   "Organisatorische Faktoren wie Teamstruktur, Qualifikation und Budget (u. a. Conway's Law)."
  ],
  "correct": [
   0,
   2,
   3,
   4
  ],
  "optExpl": [
   "Richtig: Gesetze, Datenschutz und Compliance-Vorgaben schränken die möglichen Lösungen ein, etwa beim Speicherort von Daten oder bei Protokollierungspflichten. Sie sind damit wichtige Einflussfaktoren und Randbedingungen.",
   "Falsch: Die konkrete Implementierung von Algorithmen folgt aus Architektur und Detailentwurf, sie ist also ein Ergebnis und keine Eingangsgröße. Einflussfaktoren wirken von außen auf die Architektur, bevor sie entsteht.",
   "Richtig: Vorhandene Infrastruktur, vorgeschriebene Frameworks oder Programmiersprachen sind technische Randbedingungen. Die Architektur muss sich in diesen Rahmen einfügen.",
   "Richtig: Funktionale Anforderungen prägen den fachlichen Schnitt, Qualitätsanforderungen die grundlegenden Strukturentscheidungen. Zusammen sind sie die zentralen Einflussfaktoren der Architektur.",
   "Richtig: Teamstruktur, Qualifikation und Budget prägen, welche Architektur realistisch umsetzbar ist. Nach Conways Gesetz spiegelt sich die Teamstruktur sogar direkt in der Systemstruktur wider."
  ],
  "explanation": "Einflussfaktoren: Anforderungen (funktional, Qualität), technologische, organisatorische und regulatorische Randbedingungen. Die konkrete Implementierung folgt aus der Architektur und beeinflusst sie nicht als Eingangsgröße."
 },
 {
  "id": "c3q73",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R2",
  "type": "multi",
  "q": "Welche der folgenden sind in der Praxis verbreitete Architektur- bzw. Entwurfsansätze?",
  "options": [
   "Ports and Adapters (Hexagonal).",
   "Schichtenarchitektur.",
   "Domain-Driven Design (DDD).",
   "ISO/IEC 25010 als Architekturmuster für die Strukturierung von Qualitätsbausteinen.",
   "Microservices."
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Ports and Adapters (hexagonale Architektur) ist ein verbreitetes Architekturmuster. Die Fachlogik steht im Zentrum und kommuniziert über Ports; Technik wie UI oder Datenbank wird über austauschbare Adapter angebunden.",
   "Richtig: Die Schichtenarchitektur ist eines der verbreitetsten Architekturmuster. Sie gliedert das System in Schichten mit klarer Abhängigkeitsrichtung, z. B. Präsentation, Fachlogik und Persistenz.",
   "Richtig: Domain-Driven Design ist ein verbreiteter Entwurfsansatz, der die Fachdomäne ins Zentrum stellt. Mit Konzepten wie Bounded Context und Ubiquitous Language liefert er Kriterien für fachliche Schnitte.",
   "Falsch: ISO/IEC 25010 ist ein Qualitätsmodell, das Qualitätsmerkmale wie Zuverlässigkeit oder Wartbarkeit gliedert. Es hilft, Qualitätsanforderungen zu beschreiben, ist aber weder Architekturmuster noch Entwurfsansatz.",
   "Richtig: Microservices sind ein verbreiteter Architekturstil, bei dem das System aus kleinen, unabhängig deploybaren Services besteht. Jeder Service verantwortet einen fachlichen Bereich und kommuniziert über das Netzwerk."
  ],
  "explanation": "Schichten, Microservices, DDD und Ports and Adapters sind verbreitete Architektur- bzw. Entwurfsansätze. ISO/IEC 25010 ist dagegen ein Qualitätsmodell – nicht verwechseln."
 },
 {
  "id": "c3q74",
  "chapter": 3,
  "lz": "LZ 03-03",
  "r": "R1",
  "type": "multi",
  "q": "Welche Vorgehensweisen bzw. Heuristiken sind beim Architekturentwurf gängig?",
  "options": [
   "Bottom-up (aus Details größere Strukturen bilden).",
   "Sichtenbasiertes Erarbeiten über verschiedene Sichten.",
   "Iteratives/evolutionäres Vorgehen mit Feedback.",
   "Den Entwurf strikt aus einem Referenz-Vorgehensmodell ableiten, das Schritte und Ergebnisse für jedes Projekt verbindlich festlegt.",
   "Top-down (vom Groben ins Feine)."
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Bottom-up setzt bei bekannten Details an, etwa vorhandenen Komponenten oder Technologien, und fügt sie zu größeren Strukturen zusammen. Das ist besonders nützlich, wenn Bestehendes integriert werden muss.",
   "Richtig: Beim sichtenbasierten Vorgehen betrachtet man das System nacheinander aus verschiedenen Sichten, z. B. Kontext-, Baustein-, Laufzeit- und Verteilungssicht. Jede Sicht beleuchtet andere Aspekte und deckt Lücken in den anderen auf.",
   "Richtig: Iteratives, evolutionäres Vorgehen entwickelt die Architektur in Schritten weiter und nutzt Feedback aus Prototypen, Tests oder Betrieb. So lassen sich Annahmen prüfen und der Entwurf bei neuem Wissen anpassen.",
   "Falsch: Es gibt kein universelles Kochrezept, das Schritte und Ergebnisse für jedes Projekt verbindlich festlegt. Vorgehensweisen werden je nach Kontext kombiniert und angepasst, etwa Top-down mit Bottom-up.",
   "Richtig: Top-down zerlegt das System schrittweise vom Groben ins Feine, ausgehend vom Kontext bis zu einzelnen Bausteinen. So bleibt die Gesamtstruktur von Beginn an im Blick."
  ],
  "explanation": "Gängig sind Top-down, Bottom-up, iteratives und sichtenbasiertes Vorgehen – meist kombiniert. Ein starres, für jedes Projekt verbindliches Vorgehensmodell gibt es nicht."
 },
 {
  "id": "c3q75",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "multi",
  "q": "Welche Vorteile bietet eine Schichtenarchitektur?",
  "options": [
   "Fachliche Änderungen lassen sich typischerweise auf eine einzige Schicht begrenzen.",
   "Klare Trennung von Belangen über die Schichten.",
   "Gute Verständlichkeit und Testbarkeit durch geordnete Struktur.",
   "Einzelne Schichten lassen sich austauschen, ohne alles zu ändern.",
   "Jede Schicht kann bei Bedarf flexibel auf alle anderen Schichten zugreifen."
  ],
  "correct": [
   1,
   2,
   3
  ],
  "optExpl": [
   "Falsch: Schichten trennen technische Belange, nicht fachliche. Eine fachliche Änderung wie ein neues Feld zieht sich daher oft durch alle Schichten – von der Oberfläche über die Fachlogik bis zur Persistenz. Das ist eine bekannte Schwäche des Musters.",
   "Richtig: Jede Schicht übernimmt einen klar umrissenen Belang, etwa Präsentation, Fachlogik oder Datenzugriff. Diese Trennung erleichtert es, sich beim Entwickeln auf einen Aspekt zu konzentrieren.",
   "Richtig: Die feste Ordnung der Schichten und die klare Abhängigkeitsrichtung machen die Struktur leicht verständlich. Weil jede Schicht nur die darunterliegende nutzt, lässt sie sich mit einem Ersatz für diese gut testen.",
   "Richtig: Solange die Schnittstelle einer Schicht stabil bleibt, kann ihre Implementierung ausgetauscht werden, etwa eine andere Persistenztechnik. Die darüberliegenden Schichten sind davon nicht betroffen.",
   "Falsch: Gerade die eingeschränkte Zugriffsrichtung ist der Kern des Musters. Dürfte jede Schicht beliebig auf alle anderen zugreifen, gingen Trennung, Austauschbarkeit und Verständlichkeit verloren."
  ],
  "explanation": "Schichten bringen Trennung der Belange, Austauschbarkeit und Verständlichkeit. Ihre Zugriffsregeln sind gerade der Kern; fachliche Änderungen gehen dagegen oft durch alle Schichten."
 },
 {
  "id": "c3q76",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "multi",
  "q": "Welche Nachteile oder Grenzen hat eine strikte Schichtenarchitektur?",
  "options": [
   "Es kann viel gleichförmiger Weiterreich-Code (Boilerplate) entstehen.",
   "Änderungen ziehen sich oft durch mehrere Schichten.",
   "Sie lässt sich nicht mit anderen Mustern wie Microservices kombinieren.",
   "Das Durchreichen von Aufrufen durch viele Schichten kann Latenz kosten.",
   "Sie verhindert, dass einzelne Schichten ausgetauscht werden können."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Richtig: In strikter Schichtung darf jede Schicht nur die direkt darunterliegende nutzen. Braucht die oberste Schicht etwas von ganz unten, müssen die Zwischenschichten den Aufruf durchreichen – es entsteht gleichförmiger Weiterreich-Code.",
   "Richtig: Weil Schichten nach technischen Belangen schneiden, betrifft eine fachliche Änderung oft jede Schicht. Ein neues Feld muss etwa in Oberfläche, Fachlogik und Persistenz ergänzt werden.",
   "Falsch: Schichten lassen sich gut mit anderen Mustern kombinieren. Typisch ist etwa, dass jeder Microservice intern geschichtet ist.",
   "Richtig: Jeder Übergang zwischen Schichten kostet etwas Zeit, z. B. durch Aufrufe oder Datenumwandlungen. Bei vielen Schichten kann sich das spürbar summieren.",
   "Falsch: Hier wird ein Vorteil als Nachteil ausgegeben. Die Austauschbarkeit einzelner Schichten hinter stabilen Schnittstellen ist gerade eine Stärke des Musters."
  ],
  "explanation": "Strikte Schichtung kostet Latenz, lässt Änderungen durch mehrere Schichten laufen und erzeugt Boilerplate. Sie ist mit anderen Mustern kombinierbar und fördert die Austauschbarkeit."
 },
 {
  "id": "c4q38",
  "chapter": 4,
  "lz": "LZ 04-02",
  "r": "R1",
  "type": "multi",
  "q": "Was gilt für zielgruppengerechtes Dokumentieren und Kommunizieren von Architektur?",
  "options": [
   "Schriftliche Dokumentation sollte mündliche Abstimmung weitgehend ersetzen, da sie verbindlicher ist.",
   "Management und Entwicklung brauchen unterschiedlich aufbereitete Inhalte.",
   "Template-basierte Dokumentation (z. B. arc42) bringt Nutzen.",
   "Für das Management genügt dieselbe Dokumentation wie für die Entwicklung, nur gekürzt.",
   "Mündliche und schriftliche Kommunikation sind zu balancieren."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Falsch: Mündliche Abstimmung klärt Fragen schnell, baut Verständnis auf und deckt Missverständnisse direkt auf. Schriftliche Dokumentation ergänzt sie, kann sie aber nicht ersetzen.",
   "Richtig: Das Management interessiert sich etwa für Ziele, Risiken und Kosten, die Entwicklung für Bausteine, Schnittstellen und Konzepte. Inhalte müssen deshalb je Zielgruppe unterschiedlich aufbereitet werden.",
   "Richtig: Ein Template wie arc42 gibt eine bewährte Struktur vor, sodass man nichts Wichtiges vergisst und Informationen schnell wiederfindet. Das senkt auch den Aufwand, mit der Dokumentation anzufangen.",
   "Falsch: Das Management braucht andere Inhalte, nicht nur weniger davon. Eine gekürzte Entwicklerdoku enthält immer noch technische Details, aber kaum Aussagen zu Risiken, Kosten oder Zielerreichung.",
   "Richtig: Mündliche Kommunikation ist schnell und interaktiv, schriftliche ist dauerhaft und nachlesbar. Gute Architekturkommunikation nutzt beide Formen dort, wo sie ihre Stärken haben."
  ],
  "explanation": "Zielgruppengerecht heißt: unterschiedliche Inhalte je Zielgruppe, nützliche Templates und eine Balance aus mündlicher und schriftlicher Kommunikation. Gekürzte Entwicklerdoku reicht dem Management nicht."
 },
 {
  "id": "k29",
  "chapter": 1,
  "lz": "LZ 01-04",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Aussagen zur Rolle und Verantwortung von Softwarearchitekt:innen – richtig oder falsch?",
  "categories": [
   "Richtig",
   "Falsch"
  ],
  "rows": [
   {
    "text": "Sie legen bei Zielkonflikten eigenständig fest, welches Qualitätsziel Vorrang hat.",
    "cat": 1
   },
   {
    "text": "Sie klären die Qualitätsanforderungen mit den Stakeholdern.",
    "cat": 0
   },
   {
    "text": "Sie treffen und begründen tragende Strukturentscheidungen.",
    "cat": 0
   },
   {
    "text": "Sie geben die fachliche Reihenfolge der Features vor.",
    "cat": 1
   },
   {
    "text": "Sie verantworten Projektbudget und Termine.",
    "cat": 1
   },
   {
    "text": "Sie begleiten die Umsetzung und beraten das Team.",
    "cat": 0
   }
  ],
  "explanation": "Richtig: Qualitätsanforderungen klären, tragende Entscheidungen treffen und begründen, Umsetzung begleiten. Falsch: Budget/Termine (Projektleitung) und fachliche Reihenfolge (PO) liegen bei anderen Rollen; die Priorität von Qualitätszielen legen die Stakeholder fest – Architekt:innen machen die Trade-offs transparent."
 },
 {
  "id": "k30",
  "chapter": 4,
  "lz": "LZ 04-01",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Aussagen zur Architekturdokumentation – richtig oder falsch?",
  "categories": [
   "Richtig",
   "Falsch"
  ],
  "rows": [
   {
    "text": "Sie sollte korrekt und aktuell sein.",
    "cat": 0
   },
   {
    "text": "Sie richtet sich nach der Zielgruppe.",
    "cat": 0
   },
   {
    "text": "Ein ADR hält Entscheidungen samt Begründung fest.",
    "cat": 0
   },
   {
    "text": "Sie sollte jeden Baustein möglichst vollständig bis auf Klassenebene beschreiben.",
    "cat": 1
   },
   {
    "text": "Ändert sich eine Entscheidung, wird das zugehörige ADR überschrieben.",
    "cat": 1
   },
   {
    "text": "UML-Diagramme brauchen keine Legende, da ihre Notation standardisiert ist.",
    "cat": 1
   }
  ],
  "explanation": "Richtig: zielgruppengerecht, korrekt und aktuell, ADRs mit Begründung. Falsch: Vollständigkeit bis Klassenebene ist nicht angemessen; geänderte Entscheidungen bekommen ein neues ADR, das das alte ablöst; auch UML-Diagramme brauchen eine Legende für eigene Stereotypen, Farben oder Abkürzungen."
 },
 {
  "id": "k31",
  "chapter": 5,
  "lz": "LZ 05-01",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Aussagen zur Analyse und Bewertung von Architektur – richtig oder falsch?",
  "categories": [
   "Richtig",
   "Falsch"
  ],
  "rows": [
   {
    "text": "Ohne priorisierte Qualitätsziele fehlt der Bewertungsmaßstab.",
    "cat": 0
   },
   {
    "text": "Eine Bewertung setzt eine vollständig dokumentierte Architektur voraus.",
    "cat": 1
   },
   {
    "text": "Typische Ergebnisse sind erkannte Risiken und Trade-offs.",
    "cat": 0
   },
   {
    "text": "Auch bestätigte Nicht-Risiken sind ein Ergebnis der Bewertung.",
    "cat": 0
   },
   {
    "text": "ATAM liefert als Hauptergebnis eine Empfehlung, welche Technologien einzusetzen sind.",
    "cat": 1
   },
   {
    "text": "Man sollte früh und wiederholt bewerten.",
    "cat": 0
   }
  ],
  "explanation": "Richtig: früh und wiederholt bewerten, Nicht-Risiken als Ergebnis, Qualitätsziele als Maßstab, Risiken und Trade-offs als Ergebnis. Falsch: Eine Bewertung braucht keine vollständige Dokumentation, und ATAM liefert keine Technologieempfehlung, sondern Risiken und Trade-offs."
 },
 {
  "id": "k32",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Aussagen zu Entwurfsprinzipien – richtig oder falsch?",
  "categories": [
   "Richtig",
   "Falsch"
  ],
  "rows": [
   {
    "text": "DRY verlangt, zufällig gleich aussehenden Code stets zusammenzuführen.",
    "cat": 1
   },
   {
    "text": "Lose Kopplung bedeutet, dass Bausteine keinerlei Abhängigkeiten haben.",
    "cat": 1
   },
   {
    "text": "Open/Closed: offen für Erweiterung, geschlossen für Änderung.",
    "cat": 0
   },
   {
    "text": "Information Hiding verbirgt Änderliches hinter einer Schnittstelle.",
    "cat": 0
   },
   {
    "text": "Information Hiding bedeutet, den Quellcode vor anderen Teams unzugänglich zu machen.",
    "cat": 1
   },
   {
    "text": "Hohe Kohäsion je Baustein ist erwünscht.",
    "cat": 0
   }
  ],
  "explanation": "Richtig: hohe Kohäsion, Information Hiding verbirgt Änderliches, OCP. Falsch: Lose Kopplung heißt angemessene, nicht null Abhängigkeiten; DRY betrifft dasselbe Wissen, nicht zufällig gleichen Code; Information Hiding verbirgt Entwurfsentscheidungen hinter Schnittstellen, nicht Quellcode vor Teams."
 },
 {
  "id": "k33",
  "chapter": 2,
  "lz": "LZ 02-04",
  "r": "R2",
  "type": "k",
  "points": 2,
  "q": "Aussagen zu Qualitätsanforderungen – richtig oder falsch?",
  "categories": [
   "Richtig",
   "Falsch"
  ],
  "rows": [
   {
    "text": "Ein Qualitätsszenario beschreibt, mit welcher Taktik die Qualität erreicht wird.",
    "cat": 1
   },
   {
    "text": "„95 % der Suchen in unter 1 s“ ist bereits ein vollständiges Qualitätsszenario.",
    "cat": 1
   },
   {
    "text": "Ein Qualitätsszenario hat Kontext, Stimulus, Reaktion und Messung.",
    "cat": 0
   },
   {
    "text": "Eine Anforderung kann mehrere Qualitäten gleichzeitig betreffen.",
    "cat": 0
   },
   {
    "text": "Skalierbarkeit ist ein Hauptmerkmal der ISO/IEC 25010.",
    "cat": 1
   },
   {
    "text": "Qualitäten stehen häufig in Zielkonflikt zueinander.",
    "cat": 0
   }
  ],
  "explanation": "Richtig: Szenario = Kontext, Stimulus, Reaktion, Messung; Anforderungen können mehrere Qualitäten betreffen; Zielkonflikte sind häufig. Falsch: Szenarien beschreiben das WAS, nicht die Taktik; Skalierbarkeit ist nur Untermerkmal; ein Antwortmaß ohne Stimulus und Kontext ist noch kein vollständiges Szenario."
 },
 {
  "id": "c1q35",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R1",
  "type": "single",
  "q": "Ein Nutzer der Komponente „Zahlungsabwicklung“ fragt: „Welche Dienste bietet diese Komponente an?“ Aus welcher Sicht wird diese Frage beantwortet – und wodurch?",
  "options": [
   "Aus der Blackbox-Sicht: über die nach außen angebotenen Schnittstellen bzw. Dienste samt zugesicherter Eigenschaften – ohne die innere Realisierung offenzulegen.",
   "Aus der Whitebox-Sicht: die angebotenen Dienste lassen sich erst benennen, wenn die enthaltenen Unterbausteine und ihre Algorithmen bekannt sind.",
   "Aus der Kontextsicht, da sie die Schnittstellen jedes Bausteins zu seinen Nachbarbausteinen zeigt.",
   "Aus der Laufzeitsicht: welche Dienste eine Komponente anbietet, zeigt sich erst im Zusammenspiel konkreter Szenarien."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Welche Dienste eine Komponente anbietet, ist genau ihre Außensicht, also die Blackbox. Sie beschreibt die angebotenen Schnittstellen samt zugesicherter Eigenschaften, ohne die innere Realisierung offenzulegen.",
   "Falsch: Um die angebotenen Dienste zu kennen, muss man die Interna gerade nicht kennen – das ist der Kern des Blackbox-Prinzips. Die Whitebox beantwortet die Frage, WIE die Dienste realisiert werden.",
   "Falsch: Die Kontextsicht zeigt das Gesamtsystem als Blackbox mit seinen externen Nachbarn. Die Schnittstellen einzelner interner Bausteine stehen in deren Blackbox-Beschreibung innerhalb der Bausteinsicht.",
   "Falsch: Szenarien in der Laufzeitsicht zeigen, wie Dienste im Zusammenspiel genutzt werden. Welche Dienste eine Komponente überhaupt anbietet, steht dagegen in ihrer Blackbox-Beschreibung."
  ],
  "explanation": "Welche Dienste eine Komponente anbietet, beschreibt ihre Blackbox: angebotene Schnittstellen samt Zusicherungen, ohne Interna. Laufzeitsicht (Nutzung in Szenarien) und Kontextsicht (Gesamtsystem nach außen) beantworten andere Fragen."
 },
 {
  "id": "c1q36",
  "chapter": 1,
  "lz": "LZ 01-02",
  "r": "R2",
  "type": "multi",
  "q": "Die Anforderungen stehen zu Projektbeginn noch nicht vollständig fest. Was beachtet man beim Architekturentwurf sinnvollerweise?",
  "options": [
   "Weitreichende, teuer umkehrbare Entscheidungen trifft man möglichst spät, aber noch verantwortbar (last responsible moment).",
   "Man verzichtet zunächst auf tragende Entscheidungen und lässt die Struktur aus dem Code entstehen, bis die Anforderungen feststehen.",
   "Man hält die Architektur änderbar und vermeidet unnötige Vorab-Festlegungen (YAGNI).",
   "Getroffene Annahmen werden explizit dokumentiert und später überprüft.",
   "Man arbeitet iterativ und inkrementell und lässt die Architektur mit dem wachsenden Wissen mitwachsen."
  ],
  "correct": [
   0,
   2,
   3,
   4
  ],
  "optExpl": [
   "Richtig: Weitreichende, schwer umkehrbare Entscheidungen trifft man so spät wie verantwortbar (last responsible moment). Dann ist mehr Wissen vorhanden, ohne dass das Warten bereits selbst Schaden anrichtet.",
   "Falsch: Ganz auf tragende Entscheidungen zu verzichten führt zu einer ungesteuert gewachsenen Struktur. „So spät wie verantwortbar“ heißt nicht „gar nicht“ – das Team braucht trotzdem eine tragfähige Grundlage.",
   "Richtig: Eine änderbar gehaltene Architektur ohne unnötige Vorab-Festlegungen (YAGNI) senkt das Risiko, dass frühe Annahmen sich als falsch herausstellen. Änderungen bleiben dann lokal und bezahlbar.",
   "Richtig: Wenn Wissen fehlt, muss man Annahmen treffen. Werden sie explizit dokumentiert, kann man sie später gezielt überprüfen und betroffene Entscheidungen rechtzeitig anpassen.",
   "Richtig: Bei unsicheren Anforderungen ist iteratives und inkrementelles Vorgehen angemessen. Die Architektur wächst mit dem Wissen und wird in jeder Iteration überprüft und verfeinert."
  ],
  "explanation": "Bei unvollständigen Anforderungen entwirft man iterativ, verschiebt teure Entscheidungen bis zum last responsible moment, dokumentiert Annahmen und hält die Architektur änderbar. Auf tragende Entscheidungen ganz zu verzichten, führt zu ungesteuert gewachsener Struktur."
 },
 {
  "id": "c2q29",
  "chapter": 2,
  "lz": "LZ 02-02",
  "r": "R2",
  "type": "single",
  "q": "Eine Organisation richtet ihre Teams bewusst so zu, dass daraus die gewünschte Zielarchitektur entsteht, und wendet Conways Gesetz damit gezielt an. Welche Aussage trifft am ehesten zu?",
  "options": [
   "Da die Systemstruktur die Kommunikationsstruktur widerspiegelt, kann ein passender Team-Zuschnitt den gewünschten Architekturschnitt begünstigen („Inverse Conway Maneuver“) – das erfordert aber, die Organisation tatsächlich zu verändern.",
   "Damit wird bewusste Architekturarbeit weitgehend entbehrlich, da sich die Zielstruktur aus dem Team-Zuschnitt ergibt.",
   "Der neue Team-Zuschnitt wirkt nur auf neu entstehende Systeme; bestehende Systeme behalten ihre Struktur unabhängig von der Organisation.",
   "Dafür schneidet man die Teams am besten nach technischen Schichten (UI, Logik, Datenbank), da so die gewünschte Schichtenarchitektur entsteht."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Weil die Systemstruktur die Kommunikationsstruktur widerspiegelt, kann man Conways Gesetz umkehren und die Teams passend zum gewünschten Schnitt aufstellen (Inverse Conway Maneuver). Das wirkt aber nur, wenn die Organisation tatsächlich umgebaut wird und nicht nur auf dem Papier.",
   "Falsch: Der Team-Zuschnitt begünstigt eine Struktur, ersetzt aber nicht die bewusste Gestaltung von Schnittstellen, Verantwortlichkeiten und Entscheidungen. Architekturarbeit bleibt nötig, sie wird durch die Organisation nur unterstützt.",
   "Falsch: Auch bestehende Systeme werden unter der neuen Kommunikationsstruktur weiterentwickelt und passen sich ihr mit der Zeit an. Conways Gesetz wirkt fortlaufend, nicht nur beim Neubau.",
   "Falsch: Teams nach technischen Schichten erzeugen Schichtgrenzen, also eine Struktur, die man meist gerade vermeiden will. Für fachlich geschnittene Zielarchitekturen schneidet man die Teams fachlich, damit jedes Team einen fachlichen Baustein verantwortet."
  ],
  "explanation": "Inverse Conway Maneuver: Teams so zuschneiden, dass der gewünschte Systemschnitt begünstigt wird – mit echter Organisationsänderung. Es wirkt auch auf bestehende Systeme, ersetzt keine Architekturarbeit, und fachliche Zielschnitte erfordern meist fachlich geschnittene Teams."
 },
 {
  "id": "c2q30",
  "chapter": 2,
  "lz": "LZ 02-03",
  "r": "R2",
  "type": "multi",
  "q": "Für ein System ist „hohe Benutzerfreundlichkeit (Usability)“ ein wichtiges Qualitätsziel. Welche Aussagen zur Absicherung dieses Ziels treffen zu?",
  "options": [
   "Usability ist ein Qualitätsmerkmal (u. a. der ISO/IEC 25010) und sollte über konkrete, überprüfbare Qualitätsszenarien greifbar gemacht werden.",
   "Am zuverlässigsten wird sie durch Abnahme beim Auftraggeber geprüft, da dieser die Anforderungen am besten kennt.",
   "Sie wird vor allem durch Usability-Tests mit echten bzw. repräsentativen Nutzern, Prototypen und heuristische Evaluationen geprüft.",
   "Da Usability vor allem die Oberfläche betrifft, kann sie unabhängig von der übrigen Architektur spät im Projekt optimiert werden.",
   "Das Qualitätsziel beeinflusst Architekturentscheidungen (z. B. Antwortzeiten, Fehlermeldungen, Bedienabläufe) und ist nicht rein kosmetisch."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Usability ist ein Qualitätsmerkmal – in der ISO/IEC 25010:2023 unter dem Namen Interaktionsfähigkeit. Greifbar wird sie erst über konkrete Szenarien mit Nutzergruppe, Aufgabe und messbarem Ergebnis.",
   "Falsch: Der Auftraggeber ist oft nicht der Endnutzer und kann die Bedienbarkeit im Alltag nur begrenzt beurteilen. Usability prüft man deshalb mit echten bzw. repräsentativen Nutzer:innen.",
   "Richtig: Ob ein System benutzerfreundlich ist, zeigt sich am Verhalten der Nutzer:innen. Usability-Tests, Prototypen und heuristische Evaluationen sind daher die typischen Mittel, um das Ziel abzusichern.",
   "Falsch: Usability betrifft nicht nur die Oberfläche, sondern hängt auch an Antwortzeiten, Fehlerbehandlung und Abläufen – und damit an der Architektur. Spät im Projekt lässt sie sich deshalb kaum noch nachrüsten.",
   "Richtig: Ein Usability-Ziel wirkt auf Architekturentscheidungen zurück, etwa auf Antwortzeiten, Fehlermeldungen oder die Gestaltung von Bedienabläufen. Es ist daher kein kosmetisches Thema, sondern ein echter Architekturtreiber."
  ],
  "explanation": "Benutzerfreundlichkeit ist eine Qualitätsanforderung, die man über Szenarien messbar macht und mit Nutzertests, Prototypen und heuristischer Evaluation sichert. Sie hängt an der Architektur und wird mit echten Nutzern geprüft, nicht nur bei der Abnahme durch den Auftraggeber."
 },
 {
  "id": "c3q77",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R2",
  "type": "multi",
  "q": "Ein Baustein bindet eine externe Fremdkomponente (z. B. einen Cloud-Dienst eines Drittanbieters) direkt ein. Welche Folgen hat das typischerweise?",
  "options": [
   "Eine Kapselung hinter einer eigenen Schnittstelle bzw. einem Adapter reduziert die Kopplung und macht das Fremdsystem austauschbarer.",
   "Die Einbindung ist unkritisch, wenn der Drittanbieter eine hohe Verfügbarkeit vertraglich zusichert.",
   "Die Kopplung an das Fremdsystem steigt; Änderungen dort können Anpassungen im eigenen System erzwingen.",
   "Es entsteht eine Abhängigkeit von einem extern kontrollierten, potenziell volatilen Element – Versionswechsel, API-Änderungen oder Verfügbarkeit wirken zurück.",
   "Die Kopplung entsteht nur zur Laufzeit; zur Entwicklungszeit bleibt das eigene System davon unabhängig."
  ],
  "correct": [
   0,
   2,
   3
  ],
  "optExpl": [
   "Richtig: Ein eigener Adapter übersetzt zwischen dem eigenen Modell und der Fremd-API, sodass nur er das Fremdsystem kennt. Ändert sich die Fremd-API oder wechselt man den Anbieter, muss nur der Adapter angepasst werden.",
   "Falsch: Ein SLA sichert allenfalls die Verfügbarkeit zu. Es schützt nicht vor API-Änderungen, Versionswechseln oder der fachlichen Abhängigkeit vom Anbieter, die alle auf das eigene System zurückwirken.",
   "Richtig: Ruft der Baustein die Fremd-API direkt auf, hängt sein Code von deren Struktur und Verhalten ab. Jede Änderung beim Anbieter kann damit Anpassungen im eigenen System erzwingen.",
   "Richtig: Das Fremdsystem wird von einem anderen kontrolliert, der Zeitpunkt und Art von Änderungen bestimmt. Versionswechsel, API-Änderungen oder Ausfälle wirken direkt auf das eigene System zurück, ohne dass man sie steuern kann.",
   "Falsch: Der eigene Code verwendet die Fremd-API direkt, also besteht die Kopplung bereits im Quellcode. Ändert sich die API, muss der eigene Code angepasst werden – das ist Kopplung zur Entwicklungszeit, nicht nur zur Laufzeit."
  ],
  "explanation": "Direkt eingebundene Fremdkomponenten koppeln das System an ein volatiles, fremdkontrolliertes Element – zur Laufzeit und zur Entwicklungszeit. Ein SLA deckt nur die Verfügbarkeit ab; Kapselung hinter einem Adapter reduziert die Kopplung."
 },
 {
  "id": "c3q78",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R2",
  "type": "single",
  "q": "Die Entwickler möchten das System als Microservices bauen, der Betrieb bevorzugt aus Betriebsgründen einen Monolithen. Wie geht man mit diesem Zielkonflikt architektonisch am sinnvollsten um?",
  "options": [
   "Man startet mit Microservices und führt sie bei Betriebsproblemen später zu einem Monolithen zusammen, da das risikoärmer ist.",
   "Man macht die zugrunde liegenden Qualitätsziele und Trade-offs (unabhängige Deploybarkeit/Skalierung vs. Betriebseinfachheit) explizit und entscheidet anhand der Anforderungen – ein modularer Monolith kann ein tragfähiger Kompromiss sein.",
   "Man folgt dem Betrieb, da die Betriebskosten über die Lebensdauer meist den größten Kostenanteil ausmachen.",
   "Man folgt den Entwicklern, da diejenigen, die das System bauen, seine Struktur am besten beurteilen können."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Verteilte Services wieder zu einem Monolithen zusammenzuführen ist meist aufwendiger, als einen modularen Monolithen später entlang klarer Modulgrenzen aufzuteilen. Der Weg ist also nicht risikoärmer, sondern eher umgekehrt.",
   "Richtig: Hinter den Positionen stehen unterschiedliche Qualitätsziele, etwa unabhängige Deploybarkeit und Skalierung gegenüber Betriebseinfachheit. Macht man diese Trade-offs explizit, lässt sich anforderungsbasiert entscheiden – ein modularer Monolith kann beide Seiten teilweise bedienen.",
   "Falsch: Betriebskosten sind ein wichtiges Kriterium, aber nicht das einzige. Ohne Abwägung gegen die übrigen Qualitätsziele, etwa Änderbarkeit oder Skalierbarkeit, ist die Entscheidung nicht begründet.",
   "Falsch: Die Sicht der Entwickler ist wichtig, aber nur eine von mehreren Stakeholder-Perspektiven. Maßgeblich sind die Qualitätsziele aller relevanten Stakeholder, nicht die Vorliebe einer einzelnen Gruppe."
  ],
  "explanation": "Zielkonflikte zwischen Stakeholdern löst man über die Qualitätsziele und Trade-offs, nicht über die Perspektive einer Gruppe. Ein modularer Monolith ist oft ein guter Kompromiss und lässt sich später leichter aufteilen als Services zusammenzuführen."
 },
 {
  "id": "c4q39",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R2",
  "type": "multi",
  "q": "Welche Angaben gehören typischerweise zur Whitebox-Beschreibung eines Bausteins?",
  "options": [
   "Die enthaltenen (Unter-)Bausteine und ihre Beziehungen.",
   "Intern verwendete Algorithmen und Datenstrukturen, sofern sie den inneren Aufbau erklären.",
   "Die Zuordnung der inneren Bausteine zu konkreten Servern (Ausführungsknoten).",
   "Das Zusammenspiel der inneren Bausteine, soweit es für das Verständnis nötig ist.",
   "Die juristischen Verträge und Lizenzen der Lieferanten der eingesetzten Fremdbausteine."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Richtig: Die innere Zerlegung in Unterbausteine samt ihrer Beziehungen ist der Kern jeder Whitebox. Sie zeigt, wie der Baustein intern aufgebaut ist.",
   "Richtig: Wichtige intern verwendete Algorithmen oder Datenstrukturen können den inneren Aufbau erklären und gehören dann in die Whitebox. Entscheidend ist, dass sie zum Verständnis des Bausteins beitragen.",
   "Falsch: Welche inneren Bausteine auf welchen Servern laufen, ist Gegenstand der Verteilungssicht. Die Whitebox bleibt in der logischen Struktur der Bausteinsicht.",
   "Richtig: Soweit es für das Verständnis nötig ist, beschreibt die Whitebox auch, wie die inneren Bausteine zusammenspielen. Ausführliche Abläufe kann man ergänzend in der Laufzeitsicht darstellen.",
   "Falsch: Verträge und Lizenzen von Zulieferern sind ein Beschaffungs- und Rechtsthema. Sie sagen nichts über den inneren Aufbau eines Bausteins aus und gehören daher nicht in die Whitebox."
  ],
  "explanation": "Die Whitebox zeigt den inneren Aufbau: enthaltene Bausteine, ihr Zusammenspiel und die intern verwendeten Algorithmen/Datenstrukturen. Juristische Lieferantenverträge (Beschaffung/Recht) und die Zuordnung zu Knoten (Verteilungssicht) gehören ausdrücklich nicht dazu."
 },
 {
  "id": "c5q28",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R2",
  "type": "multi",
  "q": "Ein Stakeholder meldet: „Das System ist zu langsam.“ Wie untersucht man ein solches Performanz-/Effizienzproblem methodisch fundiert?",
  "options": [
   "Man macht das Ziel mit konkreten, messbaren Qualitätsszenarien greifbar (z. B. Antwortzeit für Vorgang X bei Last Y).",
   "Man erhöht zunächst die Hardware-Ressourcen; bleibt das Problem bestehen, liegt die Ursache in der Architektur.",
   "Man misst quantitativ – etwa mit Lasttests, Monitoring, Profiling und Benchmarks.",
   "Man misst auf Entwicklerrechnern, weil dort Störeinflüsse aus dem Betrieb ausgeschlossen und die Werte damit aussagekräftiger sind.",
   "Man identifiziert anhand der Messungen die Engstellen (Hotspots) und optimiert dann gezielt."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: „Zu langsam“ ist subjektiv und nicht prüfbar. Erst ein Szenario mit konkretem Vorgang, Lastsituation und messbarem Zielwert legt fest, wann das Problem gelöst ist.",
   "Falsch: Mehr Hardware kann Symptome überdecken, ohne die Ursache zu klären. Bleibt das Problem bestehen, folgt daraus auch nicht automatisch ein Architekturfehler – die Ursache muss gemessen und nicht erraten werden.",
   "Richtig: Performanz ist eine Laufzeitqualität und lässt sich nur am laufenden System zuverlässig beurteilen. Lasttests, Monitoring, Profiling und Benchmarks liefern die Messwerte, auf die sich die Analyse stützt.",
   "Falsch: Entwicklerrechner haben andere Hardware, Datenmengen und Lastmuster als der Betrieb. Aussagekräftig sind Messungen unter realistischen Bedingungen, weil Performanzprobleme oft genau durch diese Bedingungen entstehen.",
   "Richtig: Messungen zeigen, wo die Zeit tatsächlich verloren geht. Erst wenn die Engstellen bekannt sind, lohnt sich gezielte Optimierung – alles andere wäre verfrühte Optimierung an der falschen Stelle."
  ],
  "explanation": "Performanzprobleme untersucht man messbasiert: Ziel als Szenario formulieren, unter realistischen Bedingungen messen, Engstellen identifizieren, gezielt optimieren. Hardware-Aufrüstung ersetzt keine Ursachenanalyse."
 },
 {
  "id": "k34",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R2",
  "type": "k",
  "points": 2,
  "q": "Ordne die Angaben zu: Gehören sie in die Blackbox-Beschreibung (Außensicht) oder in die Whitebox-Beschreibung (Innensicht) eines Bausteins?",
  "categories": [
   "Blackbox (Außensicht)",
   "Whitebox (Innensicht)"
  ],
  "rows": [
   {
    "text": "Das Zusammenspiel der inneren Bausteine.",
    "cat": 1
   },
   {
    "text": "Die zugesicherten Eigenschaften (z. B. Verantwortung, Antwortzeit).",
    "cat": 0
   },
   {
    "text": "Die benötigten (geforderten) Schnittstellen nach außen.",
    "cat": 0
   },
   {
    "text": "Die intern verwendeten Algorithmen und Datenstrukturen.",
    "cat": 1
   },
   {
    "text": "Die enthaltenen Unterbausteine und ihre Beziehungen.",
    "cat": 1
   },
   {
    "text": "Die angebotenen (bereitgestellten) Schnittstellen und Dienste.",
    "cat": 0
   }
  ],
  "explanation": "Die Blackbox-Sicht beschreibt die Außensicht (angebotene und benötigte Schnittstellen, zugesicherte Eigenschaften) ohne Interna. Die Whitebox-Sicht ergänzt den inneren Aufbau: enthaltene Bausteine, ihre Beziehungen, ihr Zusammenspiel sowie intern verwendete Algorithmen/Datenstrukturen (LZ 01-01)."
 },
 {
  "id": "k35",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R2",
  "type": "k",
  "points": 2,
  "q": "Verteilungssicht: Ordne jedes Element zu – ist es ein Ausführungs-/Hardware-Knoten oder ein darauf verteiltes Artefakt?",
  "categories": [
   "Knoten (Node)",
   "Artefakt (Deployment-Artefakt)"
  ],
  "rows": [
   {
    "text": "Eine mit ausgelieferte Konfigurationsdatei.",
    "cat": 1
   },
   {
    "text": "Ein physischer oder virtueller Rechner (VM).",
    "cat": 0
   },
   {
    "text": "Ein ausführbares Container-Image bzw. eine .jar-Datei der Anwendung.",
    "cat": 1
   },
   {
    "text": "Ein Datenbank-Server als Ausführungsumgebung.",
    "cat": 0
   },
   {
    "text": "Ein Applikationsserver (Laufzeitumgebung).",
    "cat": 0
   },
   {
    "text": "Eine deploybare Web-Anwendung (z. B. WAR-Datei).",
    "cat": 1
   }
  ],
  "explanation": "Die Verteilungssicht bildet Artefakte auf Knoten ab: Knoten sind Ausführungsumgebungen bzw. Hardware (Server, VM, DB-Server), Artefakte sind die darauf installierten/ausgeführten Dateien (Container-Image, JAR/WAR, Konfiguration) (LZ 04-05)."
 },
 {
  "id": "c1q37",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R2",
  "type": "multi",
  "q": "Welche Angaben haben in einer guten Blackbox-Beschreibung eines Bausteins Vorrang (gehören also zwingend hinein)?",
  "options": [
   "Die angebotenen (bereitgestellten) Schnittstellen und Dienste.",
   "Die benötigten (geforderten) Schnittstellen bzw. Abhängigkeiten nach außen.",
   "Die Zuordnung des Bausteins zu den Ausführungsknoten, auf denen er betrieben wird.",
   "Die intern verwendeten Algorithmen und Datenstrukturen des Bausteins.",
   "Die Verantwortung/Aufgabe des Bausteins und seine zugesicherten Eigenschaften (z. B. Qualitätszusagen)."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Richtig: Die angebotenen Schnittstellen und Dienste sind der Kern der Außensicht. Sie sagen Nutzern, was der Baustein leistet und wie man ihn anspricht.",
   "Richtig: Auch die benötigten Schnittstellen gehören zur Außensicht, denn sie zeigen die Abhängigkeiten des Bausteins nach außen. Wer ihn einsetzen will, muss wissen, was er dafür voraussetzt.",
   "Falsch: Die Zuordnung zu Ausführungsknoten gehört in die Verteilungssicht. Die Blackbox beschreibt, was ein Baustein leistet, nicht wo er betrieben wird.",
   "Falsch: Interne Algorithmen und Datenstrukturen sind Whitebox-Informationen und werden in der Blackbox bewusst verborgen. Gerade dadurch kann man sie ändern, ohne Nutzer anzupassen.",
   "Richtig: Verantwortung und zugesicherte Eigenschaften, etwa Qualitätszusagen wie Antwortzeiten, machen den Baustein für Nutzer verlässlich verwendbar. Sie gehören deshalb zwingend in die Blackbox."
  ],
  "explanation": "Vorrang in der Blackbox haben die Außensicht-Angaben: angebotene und benötigte Schnittstellen, Verantwortung und zugesicherte Eigenschaften. Interna sind Whitebox; die Knotenzuordnung gehört in die Verteilungssicht."
 },
 {
  "id": "c1q38",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R1",
  "type": "single",
  "q": "Eine Entwicklerin will einen bestehenden Baustein lediglich verwenden (aufrufen), nicht verändern. Welche Beschreibung benötigt sie dafür in erster Linie?",
  "options": [
   "Die Whitebox-Beschreibung, da sie neben den Schnittstellen auch deren Zusicherungen (Vor-/Nachbedingungen) enthält, die in der Blackbox fehlen.",
   "Die Laufzeitsicht, da sie zeigt, in welcher Reihenfolge der Baustein intern seine Unterbausteine aufruft.",
   "Die Verteilungssicht, da sie zeigt, auf welchem Knoten und über welches Protokoll der Baustein erreichbar ist.",
   "Die Blackbox-Beschreibung: Schnittstellen, Verantwortung und zugesicherte Eigenschaften genügen zum Nutzen."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Zusicherungen wie Vor- und Nachbedingungen sind Teil des Vertrags und gehören gerade in die Blackbox. Die Whitebox ergänzt nur den inneren Aufbau, den eine reine Nutzerin nicht braucht.",
   "Falsch: Der interne Aufrufablauf zwischen Unterbausteinen ist ein Internum. Für die reine Nutzung ist er irrelevant und gehört zur Whitebox- bzw. inneren Laufzeitbetrachtung.",
   "Falsch: Knoten und Protokoll können für Betrieb und Anbindung relevant sein, beschreiben aber nicht, was der Baustein leistet und wie man ihn korrekt verwendet. Dafür ist die Blackbox zuständig.",
   "Richtig: Zum reinen Nutzen genügt die Blackbox mit Schnittstellen, Verantwortung und zugesicherten Eigenschaften. Genau das ist der Sinn der Kapselung: Nutzer brauchen keine Kenntnis der Interna."
  ],
  "explanation": "Zum bloßen Nutzen eines Bausteins reicht die Blackbox: Schnittstellen, Verantwortung und Zusicherungen. Interne Abläufe (Whitebox/Laufzeit) braucht nur, wer den Baustein ändert; die Verteilungssicht beantwortet Betriebsfragen."
 },
 {
  "id": "c4q40",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R2",
  "type": "single",
  "q": "Welche Angabe gehört am wenigsten in die Whitebox-Beschreibung eines Bausteins?",
  "options": [
   "Intern verwendete Algorithmen und Datenstrukturen, die den Aufbau erklären.",
   "Die enthaltenen Unterbausteine und ihre Beziehungen.",
   "Die juristischen Liefer- und Lizenzbedingungen der zugekauften Fremdbibliotheken.",
   "Das für das Verständnis nötige Zusammenspiel der inneren Bausteine."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Intern verwendete Algorithmen und Datenstrukturen, die den Aufbau erklären, gehören durchaus in die Whitebox. Gesucht ist aber die Angabe, die am wenigsten hineingehört.",
   "Falsch: Die enthaltenen Unterbausteine und ihre Beziehungen sind der Kern jeder Whitebox. Sie gehören also ganz sicher hinein und sind damit nicht die gesuchte Antwort.",
   "Richtig: Liefer- und Lizenzbedingungen von Fremdbibliotheken sind ein Beschaffungs- und Rechtsthema. Sie beschreiben nicht den inneren Aufbau des Bausteins und gehören deshalb am wenigsten in die Whitebox.",
   "Falsch: Das für das Verständnis nötige Zusammenspiel der inneren Bausteine ist fester Bestandteil der Whitebox. Es gehört also hinein und ist nicht die gesuchte Antwort."
  ],
  "explanation": "Die Whitebox zeigt den inneren Aufbau (enthaltene Bausteine, Zusammenspiel, interne Algorithmen/Datenstrukturen). Juristische Liefer- und Lizenzbedingungen der Zulieferer sind Beschaffung/Recht und gehören nicht hinein."
 },
 {
  "id": "c2q31",
  "chapter": 2,
  "lz": "LZ 02-02",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zu Conways Gesetz und seinen Folgen treffen zu?",
  "options": [
   "Man kann das Gesetz bewusst als organisatorische Randbedingung nutzen und Teams passend zum gewünschten Schnitt zuschneiden.",
   "Die Struktur eines Systems tendiert dazu, die Kommunikationsstrukturen der entwickelnden Organisation abzubilden.",
   "Es besagt, dass Teams ihre Kommunikationsstruktur an die vorhandene Systemstruktur anpassen sollten.",
   "Es gilt vor allem für große Organisationen; in kleinen Teams spielt die Kommunikationsstruktur für den Systemschnitt keine Rolle.",
   "Getrennte, wenig kommunizierende Teams erzeugen tendenziell entsprechende Grenzen und Schnittstellen im System."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Richtig: Wer Conways Gesetz kennt, kann es gezielt nutzen und die Teams passend zum gewünschten Systemschnitt zuschneiden. Das ist die Idee des Inverse Conway Maneuver; die Organisation wirkt dann als bewusst gestaltete Randbedingung.",
   "Richtig: Das ist die Kernaussage von Conways Gesetz. Teams bauen Schnittstellen dort, wo ihre Kommunikation verläuft, sodass die Systemstruktur die Organisationsstruktur abbildet.",
   "Falsch: Conway beschreibt die umgekehrte Wirkrichtung: Die Organisation prägt das System, nicht umgekehrt. Außerdem ist das Gesetz eine Beobachtung und keine Handlungsempfehlung.",
   "Falsch: Der Effekt tritt auch in kleinen Organisationen auf, etwa zwischen zwei Teams oder zwischen einem Team und einem externen Dienstleister. Überall, wo Kommunikation an Grenzen stößt, entstehen auch Systemgrenzen.",
   "Richtig: Teams, die wenig miteinander sprechen, stimmen ihre Arbeit über klar definierte Schnittstellen ab. Diese Teamgrenzen schlagen sich typischerweise als Baustein- und Systemgrenzen nieder."
  ],
  "explanation": "Conways Gesetz: Die Systemstruktur bildet die Kommunikationsstruktur der Organisation ab; Teamgrenzen werden zu Systemgrenzen. Es ist eine Beobachtung (Organisation → System), die man gezielt nutzen kann – unabhängig von der Organisationsgröße."
 },
 {
  "id": "c3q79",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R2",
  "type": "multi",
  "q": "Ein System ist auf eine volatile externe Fremdkomponente angewiesen (häufige API-Änderungen, schwankende Verfügbarkeit). Welche Maßnahmen halten die Auswirkungen beherrschbar?",
  "options": [
   "Das Fremdsystem hinter einer eigenen, stabilen Abstraktion (Adapter/Fassade, ggf. Anti-Corruption-Layer) kapseln.",
   "Die API-Version des Fremdsystems im eigenen Code bewusst nicht festlegen, um automatisch von Verbesserungen zu profitieren.",
   "Jeder Baustein, der das Fremdsystem nutzt, kapselt es mit einem eigenen kleinen Adapter.",
   "Verfügbarkeitsprobleme mit Mustern wie Timeout, Retry und Circuit Breaker abfedern.",
   "Nur an dieser einen Stelle gegen das Fremdsystem programmieren, statt dessen API im ganzen System zu verteilen."
  ],
  "correct": [
   0,
   3,
   4
  ],
  "optExpl": [
   "Richtig: Eine eigene, stabile Abstraktion entkoppelt das System von der volatilen Fremd-API. Ein Anti-Corruption-Layer übersetzt zusätzlich das fremde Modell ins eigene, damit dessen Begriffe und Änderungen nicht ins System eindringen.",
   "Falsch: Eine nicht festgelegte Version lässt unangekündigte, möglicherweise inkompatible Änderungen ungeprüft durchschlagen. Versionen pinnt man daher und aktualisiert sie bewusst nach einem Test.",
   "Falsch: Viele verstreute Adapter duplizieren die Übersetzungslogik, sodass eine API-Änderung doch wieder alle Stellen trifft. Wirksam ist erst eine zentrale Abstraktion, die alle Nutzer gemeinsam verwenden.",
   "Richtig: Resilienzmuster fangen schwankende Verfügbarkeit ab: Timeouts verhindern endloses Warten, Retries überbrücken kurze Störungen, und ein Circuit Breaker stoppt Aufrufe bei anhaltendem Ausfall. So breiten sich Probleme des Fremdsystems nicht ungebremst aus.",
   "Richtig: Ist die Abhängigkeit an einer Stelle gebündelt, betrifft eine API-Änderung nur diese Stelle. Der Rest des Systems kennt nur die eigene Abstraktion und bleibt unverändert."
  ],
  "explanation": "Volatile Fremdabhängigkeiten bündelt man hinter einer zentralen, stabilen Abstraktion, federt Ausfälle mit Resilienzmustern ab und pinnt Versionen bewusst. Verstreute Adapter oder ungepinnte Versionen verteilen das Risiko im System."
 },
 {
  "id": "c2q32",
  "chapter": 2,
  "lz": "LZ 02-04",
  "r": "R2",
  "type": "single",
  "q": "Ein Stakeholder fordert: „Das System soll benutzerfreundlich sein.“ Wie macht man diese Qualitätsanforderung überprüfbar?",
  "options": [
   "Durch ein konkretes Qualitätsszenario, z. B.: „Ein neuer Nutzer schließt die Bestellung ohne fremde Hilfe in unter 3 Minuten mit einer Erfolgsquote von ≥ 90 % ab.“",
   "Indem man die Einhaltung eines anerkannten Styleguides (z. B. eines Design-Systems) verbindlich vorschreibt.",
   "Durch die Vorgabe, dass jeder Dialog höchstens drei Eingabefelder haben darf.",
   "Durch eine Zufriedenheitsumfrage unter den Nutzern nach dem Go-live."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Das Szenario benennt Nutzergruppe, Aufgabe, Bedingung und ein messbares Ergebnis aus Zeit und Erfolgsquote. Damit lässt sich in einem Usability-Test eindeutig prüfen, ob das Ziel erreicht ist.",
   "Falsch: Ein Styleguide ist eine Gestaltungsvorgabe und wirkt eher als Randbedingung für die Lösung. Ob Nutzer:innen mit dem System tatsächlich gut zurechtkommen, misst er nicht.",
   "Falsch: Die Regel ist zwar prüfbar, aber sie ist eine Gestaltungsvorgabe und kein Maß für Benutzerfreundlichkeit. Auch Dialoge mit drei Feldern können unverständlich sein – gemessen werden muss, ob Nutzer:innen ihre Aufgaben gut erledigen.",
   "Falsch: Eine Umfrage nach dem Go-live kommt erst nach der Umsetzung und hat ohne vorab definierten Zielwert keinen Maßstab. Eine überprüfbare Anforderung muss schon vor dem Entwurf festlegen, was als erfüllt gilt."
  ],
  "explanation": "Vage Ziele wie „benutzerfreundlich“ macht man mit Qualitätsszenarien messbar (Nutzer, Aufgabe, Kontext, messbares Ergebnis). Styleguides oder Gestaltungsregeln sind Lösungsvorgaben, nachträgliche Umfragen ohne Zielwert keine überprüfbare Anforderung."
 },
 {
  "id": "c5q29",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R2",
  "type": "single",
  "q": "Ein Team vermutet die Ursache einer langsamen Anwendung in einem bestimmten Modul. Welches Vorgehen ist methodisch am besten begründet?",
  "options": [
   "Das vermutete Modul per Code-Review auf ineffiziente Algorithmen prüfen und diese optimieren, da Laufzeitmessungen durch Last- und Umgebungsschwankungen ohnehin ungenau sind.",
   "Den Engpass zuerst durch Messung unter realistischen Bedingungen belegen (z. B. Profiling, Monitoring) und erst dann gezielt optimieren.",
   "Mit statischer Analyse das Modul mit der höchsten zyklomatischen Komplexität ermitteln und dieses zuerst optimieren.",
   "Zunächst einen Cache vor das vermutete Modul schalten, da Caching bei Performanzproblemen die wirksamste Standardmaßnahme ist."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Schwankende Messwerte sind ein Grund, mehrfach und unter realistischen Bedingungen zu messen, nicht, auf Messung zu verzichten. Ein Code-Review kann ineffiziente Stellen finden, belegt aber nicht, dass genau dort der Engpass liegt.",
   "Richtig: Vermutungen über Performanz-Ursachen liegen erfahrungsgemäß oft daneben. Deshalb belegt man den Engpass zuerst durch Profiling oder Monitoring unter realistischen Bedingungen und optimiert dann gezielt dort, wo es wirkt.",
   "Falsch: Die zyklomatische Komplexität misst die Verzweigungen im Code, nicht dessen Laufzeit. Ein komplexes Modul kann schnell und ein einfaches langsam sein, etwa wegen einer teuren Datenbankabfrage.",
   "Falsch: Caching kann wirksam sein, setzt aber voraus, dass man die Ursache kennt und sie sich durch Caching beheben lässt. Ohne Messung behandelt man womöglich das falsche Modul und handelt sich zusätzlich Konsistenzprobleme ein."
  ],
  "explanation": "Performanz optimiert man messbasiert: Engpass unter realistischen Bedingungen belegen, dann gezielt optimieren. Code-Reviews, Komplexitätsmetriken oder pauschales Caching ersetzen die Messung nicht."
 },
 {
  "id": "c1q39",
  "chapter": 1,
  "lz": "LZ 01-02",
  "r": "R2",
  "type": "single",
  "q": "In einem Projekt mit anfangs unklaren Anforderungen ändert sich spät eine zentrale Anforderung. Das Team kann die Änderung mit überschaubarem Aufwand umsetzen. Worauf ist das am ehesten zurückzuführen?",
  "options": [
   "Auf ein vorab ausgearbeitetes Detaildesign, das alle denkbaren Varianten der Anforderung bereits berücksichtigte.",
   "Auf eine bewusst änderbar gehaltene Architektur (Modularität, lose Kopplung), die späte Anpassungen billig macht.",
   "Auf eine besonders vollständige Architekturdokumentation, durch die die betroffenen Stellen schnell auffindbar waren.",
   "Auf den Einsatz von Microservices, da diese Änderungen grundsätzlich auf einen einzelnen Service begrenzen."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Bei unklaren Anforderungen lassen sich nicht alle Varianten vorab berücksichtigen. Der Versuch führt zu Überkonstruktion und trifft die tatsächliche Änderung trotzdem oft nicht.",
   "Richtig: Modularität und lose Kopplung sorgen dafür, dass sich Änderungen auf wenige Bausteine beschränken. Eine bewusst änderbar gehaltene Architektur macht so auch späte Anpassungen bezahlbar.",
   "Falsch: Gute Dokumentation hilft, betroffene Stellen schnell zu finden, macht die Änderung selbst aber nicht billiger. Entscheidend für den Änderungsaufwand ist die Struktur, nicht ihre Beschreibung.",
   "Falsch: Microservices begrenzen Änderungen nicht grundsätzlich auf einen Service. Passt der fachliche Schnitt nicht, verteilt sich eine Änderung über mehrere Services und wird sogar teurer."
  ],
  "explanation": "Späte Änderungen bleiben günstig, wenn die Architektur bewusst änderbar gehalten wurde (Modularität, lose Kopplung). Dokumentation, Vorab-Detaildesign oder ein bestimmter Architekturstil allein garantieren das nicht."
 },
 {
  "id": "c4q41",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R1",
  "type": "single",
  "q": "Was unterscheidet in der Verteilungssicht einen Knoten von einem Artefakt?",
  "options": [
   "Ein Knoten ist eine deploybare Datei; ein Artefakt ist der Rechner, auf dem sie läuft.",
   "Ein Artefakt ist ein Baustein der Bausteinsicht; der Knoten ist die Komponente, die ihn zur Laufzeit ausführt.",
   "Knoten sind immer physische Hardware; virtuelle Maschinen und Container-Laufzeitumgebungen zählen zu den Artefakten.",
   "Ein Knoten ist eine Ausführungsumgebung bzw. Hardware (z. B. Server, VM); ein Artefakt ist eine darauf installierte/ausgeführte Einheit (z. B. Container-Image, JAR/WAR, Konfigurationsdatei)."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Hier sind die Begriffe genau vertauscht. Der Knoten ist die Ausführungsumgebung bzw. der Rechner, das Artefakt die deploybare Einheit, die darauf läuft.",
   "Falsch: Artefakte sind physische Einheiten wie Dateien oder Images, die einen oder mehrere Bausteine enthalten können, aber nicht selbst Bausteine der Bausteinsicht. Knoten sind Ausführungsumgebungen, keine Software-Komponenten.",
   "Falsch: Auch virtuelle Maschinen und Container-Laufzeitumgebungen sind Knoten, denn sie sind Ausführungsumgebungen. Ein Knoten muss nicht physische Hardware sein.",
   "Richtig: Ein Knoten ist eine Umgebung, in der etwas ausgeführt wird – physisch oder virtuell, etwa Server, VM oder Container-Runtime. Ein Artefakt ist die konkrete Einheit, die darauf verteilt wird, z. B. ein Container-Image, ein JAR/WAR oder eine Konfigurationsdatei."
  ],
  "explanation": "Knoten sind Ausführungsumgebungen – physisch oder virtuell (Server, VM, Container-Runtime). Artefakte sind die darauf verteilten Einheiten (Image, JAR/WAR, Konfiguration), die Bausteine enthalten können."
 },
 {
  "id": "k36",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R2",
  "type": "k",
  "points": 2,
  "q": "Ordne zu: Spricht der Aspekt eher für einen (modularen) Monolithen oder eher für Microservices?",
  "categories": [
   "Eher Monolith",
   "Eher Microservices"
  ],
  "rows": [
   {
    "text": "Verschiedene Teile sollen bewusst unterschiedliche Technologien nutzen dürfen.",
    "cat": 1
   },
   {
    "text": "Viele autonome Teams sollen weitgehend unabhängig voneinander entwickeln.",
    "cat": 1
   },
   {
    "text": "Das System lässt sich einfach als Ganzes end-to-end testen und betreiben.",
    "cat": 0
   },
   {
    "text": "Strenge, unmittelbare Transaktionskonsistenz über den gesamten Datenbestand ist zwingend.",
    "cat": 0
   },
   {
    "text": "Einzelne Teile sollen unabhängig voneinander deployt und skaliert werden.",
    "cat": 1
   },
   {
    "text": "Kleines Team, ein überschaubarer fachlicher Kontext, geringe Betriebskomplexität gewünscht.",
    "cat": 0
   }
  ],
  "explanation": "Für einen Monolithen sprechen einfacher Gesamttest/Betrieb, kleine Teams/Kontexte und starke Konsistenzanforderungen. Für Microservices sprechen unabhängiges Deployment/Skalieren, viele autonome Teams und heterogene Technologiewahl – erkauft mit höherer Betriebskomplexität (LZ 03-08)."
 }
];
