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
   "Sie umfasst jede beliebige Entscheidung im Projekt, auch Namen von Variablen.",
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
   "Richtig: Architektur existiert immer, auch wenn sie nie bewusst geplant oder dokumentiert wurde. Jedes System hat Bausteine und Beziehungen; Dokumentation beschreibt diese Architektur nur, sie erschafft sie nicht.",
   "Falsch: Übergeneralisierung: Gemeint sind die tragenden, systemweit wirksamen und schwer änderbaren Entscheidungen. Detailentscheidungen wie Variablennamen oder lokale Algorithmen gehören nicht zur Architektur.",
   "Richtig: Das ist der gemeinsame Kern der gängigen Architekturdefinitionen (R1). Bausteine allein ohne ihre Schnittstellen und Beziehungen beschreiben noch keine Architektur, erst das Zusammenspiel macht sie aus.",
   "Richtig: Das Curriculum zählt neben Strukturen auch Querschnittsthemen wie Persistenz, Logging oder Fehlerbehandlung sowie übergreifende Prinzipien ausdrücklich zur Architektur. Sie wirken über viele Bausteine hinweg.",
   "Falsch: Begriffsverwechslung: Ein Stil wie Schichten oder Microservices prägt die Architektur, ist aber nur ein Teil davon. Bausteine, Querschnittsthemen und tragende Entscheidungen gehen weit über den Stil hinaus."
  ],
  "explanation": "Architektur umfasst Bausteine mit Schnittstellen und Beziehungen, Querschnittsthemen, Prinzipien und tragende Entscheidungen, und jedes System hat eine. Fallen: Nicht jede Entscheidung ist Architektur, und der Architekturstil ist nur ein Teil davon."
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
   "Richtig: Bausteine sind hierarchisch aufgebaut: In der Whitebox-Sicht zeigt man, aus welchen feineren Bausteinen sich eine Komponente zusammensetzt. Ein Bestellmodul kann z. B. Warenkorb, Preisberechnung und Zahlung enthalten.",
   "Falsch: Hier wird lose Kopplung übergeneralisiert. Komponenten dürfen benötigte Schnittstellen haben und andere Bausteine nutzen; entscheidend ist, dass Abhängigkeiten bewusst, klar definiert und möglichst gering sind, nicht dass sie fehlen.",
   "Falsch: Das vermengt Baustein- und Verteilungssicht. Ein Verteilungsartefakt (z. B. ein JAR oder Container-Image) kann mehrere Bausteine enthalten, und ein Baustein kann auf mehrere Artefakte verteilt sein. Die Zuordnung zeigt erst die Verteilungssicht.",
   "Richtig: Das ist das Blackbox-Prinzip bzw. Information Hiding: Nutzer kennen nur den Vertrag der Schnittstelle. Dadurch lässt sich die Realisierung ändern, ohne dass die Aufrufer angepasst werden müssen.",
   "Falsch: Die Signatur deckt nur Namen, Parameter und Typen ab. Austauschbarkeit verlangt denselben Kontrakt einschließlich Semantik, Vor- und Nachbedingungen sowie Qualitätszusicherungen wie Antwortzeit oder Fehlerverhalten.",
   "Richtig: Ein Baustein darf mehrere angebotene Schnittstellen haben, etwa eine für Endkunden-Clients und eine für die Administration. So lassen sich unterschiedliche Nutzergruppen mit passenden, schlanken Verträgen bedienen."
  ],
  "explanation": "Eine Komponente ist ein Baustein: hierarchisch zerlegbar, gekapselt hinter Schnittstellen und gegebenenfalls mit mehreren davon. Fallen: Lose Kopplung heißt nicht „keine Abhängigkeiten“, Signatur ist nicht gleich Kontrakt, und Baustein ist nicht gleich Verteilungsartefakt."
 },
 {
  "id": "c1q3",
  "chapter": 3,
  "lz": "LZ 03-02",
  "r": "R1",
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
   "Falsch: Auch benötigte Schnittstellen gehören zur Außensicht, denn sie zeigen, wovon der Baustein abhängt. Wer ihn einsetzen oder austauschen will, muss diese Abhängigkeiten kennen – deshalb beschreibt die Blackbox angebotene UND benötigte Schnittstellen.",
   "Falsch: Eine Whitebox beschreibt ihre enthaltenen Bausteine gerade als Blackboxes, also mit Verantwortung und Schnittstellen. Erst wenn man einen dieser Bausteine öffnet, folgt auf der nächsten Verfeinerungsebene dessen eigene Whitebox.",
   "Falsch: Mehr Detail bedeutet nicht mehr Außenkontakt: Externe Schnittstellen, die nur in der Whitebox auftauchen, machen beide Sichten inkonsistent. Die Whitebox verfeinert die Außensicht, sie erweitert sie nicht – fehlt eine Schnittstelle, ist die Blackbox zu korrigieren.",
   "Richtig: Die Whitebox ist die Innensicht desselben Bausteins und muss zu dessen Außensicht konsistent sein. Sie zeigt die enthaltenen Bausteine, ihr Zusammenspiel und welche davon die äußeren Schnittstellen realisieren, z. B. welcher Teil die REST-API bedient."
  ],
  "explanation": "Blackbox = Außensicht mit Verantwortung sowie angebotenen UND benötigten Schnittstellen. Whitebox = Innensicht, konsistent zur Blackbox; ihre inneren Bausteine beschreibt sie selbst wieder als Blackboxes. Fallen: benötigte Schnittstellen in die Whitebox schieben oder dort neue externe Schnittstellen erfinden."
 },
 {
  "id": "c1q4",
  "chapter": 4,
  "lz": "LZ 04-05",
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
   "Falsch: Sichten zeigen verschiedene Aspekte desselben Systems und müssen deshalb zueinander konsistent sein. Unterschiedliche Zielgruppen rechtfertigen andere Schwerpunkte und Detailgrade, aber keine Widersprüche – die wären ein Dokumentationsfehler.",
   "Falsch: Das „wann“ gehört in die Laufzeitsicht. Die Bausteinsicht zeigt die statische Zerlegung des Systems in Bausteine mit ihren Schnittstellen und Abhängigkeiten, nicht deren zeitliches Zusammenspiel in konkreten Abläufen.",
   "Richtig: Die Verteilungssicht zeigt, auf welchen Infrastrukturknoten (Server, Container, Geräte) welche Artefakte laufen und über welche Kanäle die Knoten verbunden sind. Beispiel: das Web-Archiv läuft auf zwei Applikationsservern hinter einem Load Balancer.",
   "Richtig: Die Laufzeitsicht beschreibt das dynamische Verhalten: Wie wirken Bausteine in einem konkreten Szenario zusammen? Typisch sind Sequenz- oder Aktivitätsdiagramme, etwa für den Ablauf „Bestellung aufgeben“ oder den Systemstart.",
   "Falsch: Hier wird die Kontextsicht mit Ebene 1 der Bausteinsicht verwechselt. Die Kontextsicht zeigt das System als Blackbox mit seinen externen Nachbarn (Nutzer, Fremdsysteme) und Schnittstellen; die erste Zerlegung gehört in die Bausteinsicht."
  ],
  "explanation": "Laufzeitsicht = dynamisches Zusammenspiel in Szenarien, Verteilungssicht = Artefakte auf Knoten. Fallen: Die Kontextsicht ist keine Zerlegungsebene, das zeitliche Verhalten gehört nicht in die Bausteinsicht, und Sichten müssen konsistent sein."
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
   "Richtig: Das Curriculum (LZ 01-04) verlangt, Konsequenzen von Architekturentscheidungen zu erkennen, aufzuzeigen und gegenüber Stakeholdern zu vertreten. Beispiel: erklären, warum ein Message-Broker mehr Betriebsaufwand, aber bessere Entkopplung bringt.",
   "Richtig: Zur Begleitung der Umsetzung gehört, die Übereinstimmung von Quellcode und Architektur zu prüfen und sicherzustellen. Sonst entsteht Architekturerosion: Der Code entfernt sich schleichend von den getroffenen Entscheidungen.",
   "Richtig: Anforderungen und Randbedingungen zu klären, zu hinterfragen und mit Stakeholdern abzustimmen ist eine explizite Aufgabe im Curriculum. Unklare oder widersprüchliche Anforderungen werden so früh erkannt, bevor sie teure Strukturentscheidungen prägen.",
   "Falsch: Rollenverwechslung: Termine, Budget und Personal verantwortet die Projektleitung. Architekt:innen liefern dazu die technischen Konsequenzen, etwa Aufwandsschätzungen oder Risiken, tragen aber nicht die Budgetverantwortung.",
   "Falsch: Die fachliche Priorisierung des Backlogs liegt beim Product Owner bzw. dem Fachbereich. Architekt:innen beraten zu technischen Abhängigkeiten und Risiken, legen die Reihenfolge der Features aber nicht selbst fest.",
   "Richtig: Strukturentscheidungen zur Systemzerlegung, zu Abhängigkeiten und Schnittstellen sind eine Kernaufgabe von Architekt:innen. Sie bestimmen die Bausteinstruktur und damit, wie gut das System Qualitätsanforderungen wie Änderbarkeit erfüllt."
  ],
  "explanation": "Architekt:innen verantworten die technische Lösung: Anforderungen hinterfragen, das System zerlegen, Konsistenz von Code und Architektur sichern und Konsequenzen vertreten. Falle: Budget und Personal (Projektleitung) sowie die Backlog-Reihenfolge (Product Owner) gehören nicht zu ihren Aufgaben."
 },
 {
  "id": "c1q6",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R3",
  "extra": true,
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
   "Richtig: Externe Qualität zeigt sich am laufenden System: Performanz, Zuverlässigkeit oder Benutzbarkeit erleben Nutzer direkt im Betrieb. Sie ist von außen beobachtbar, ohne dass man den Code kennen muss.",
   "Falsch: Wartbarkeit betrifft die innere Struktur des Systems und ist damit eine interne Qualität. Nutzer spüren sie höchstens indirekt, etwa wenn neue Funktionen lange dauern; sichtbar im Betrieb ist sie nicht.",
   "Falsch: Hier sind Ursache und Wirkung verdreht. Ein System kann heute gut funktionieren und trotzdem intern verworren und kaum wartbar sein. Gute externe Qualität ist daher kein Beleg für eine gute Struktur.",
   "Falsch: Blackbox-Tests prüfen nur das beobachtbare Verhalten an der Schnittstelle. Interne Qualität wie Kopplung oder Verständlichkeit erfasst man stattdessen mit Code-Analysen, Metriken oder Reviews.",
   "Richtig: Schlechte Struktur führt über die Zeit zu mehr Fehlern, längeren Änderungszyklen und Seiteneffekten. Das bemerken Nutzer irgendwann als sinkende Zuverlässigkeit oder ausbleibende Funktionen."
  ],
  "explanation": "Externe Qualität ist im Betrieb wahrnehmbar, interne Qualität betrifft die Struktur; schwache interne Qualität schlägt langfristig nach außen durch. Falle: Der Umkehrschluss gilt nicht – gute externe Qualität beweist keine gute Struktur, und Wartbarkeit ist intern."
 },
 {
  "id": "c1q7",
  "chapter": 3,
  "lz": "LZ 03-05",
  "r": "R1",
  "type": "single",
  "q": "Ein Team muss den Architekturstil festlegen, obwohl wichtige Anforderungen noch offen sind. Was ist am ehesten angemessen?",
  "options": [
   "Zuerst ein detailliertes Feindesign aller Bausteine erstellen.",
   "Ein ADR schreiben, damit die Entscheidung günstig umkehrbar bleibt.",
   "Entscheiden, sobald die Anforderungen abgenommen sind.",
   "Entscheiden, Annahmen festhalten und später überprüfen."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Big Design Up Front beruht auf demselben unvollständigen Wissen wie die offene Stilentscheidung. Ein detailliertes Feindesign verlagert die Unsicherheit nur in einen umfangreichen Plan, der bei geklärten Anforderungen wieder umgeworfen werden muss.",
   "Falsch: Ein ADR macht die Entscheidung samt Kontext und Begründung nachvollziehbar, macht sie aber nicht billiger umkehrbar. Ein Wechsel des Architekturstils bleibt teuer, egal wie gut er dokumentiert ist – Doku und Reversibilität sind zwei verschiedene Dinge.",
   "Falsch: Anforderungen sind in der Praxis nie vollständig und stabil; auf eine komplette Abnahme zu warten blockiert das Projekt. Das Warten verschiebt Risiken nur nach hinten, statt sie früh durch bewusste Entscheidungen sichtbar zu machen.",
   "Richtig: Architekturarbeit geschieht laut Curriculum unter Unsicherheit und ist iterativ. Wer entscheidet und die zugrunde liegenden Annahmen explizit festhält, kann sie später gezielt überprüfen und die Entscheidung bei Bedarf anpassen, etwa nach einem Spike."
  ],
  "explanation": "Unter Unsicherheit entscheidet man bewusst, dokumentiert die Annahmen und überprüft sie iterativ. Fallen: Warten auf vollständige Anforderungen verschiebt nur Risiken, und ein ADR schafft Nachvollziehbarkeit, aber keine billige Umkehrbarkeit."
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
   "Die Architektur muss sicherstellen, dass die funktionalen Anforderungen erfüllbar sind.",
   "Qualitätsanforderungen prägen vor allem die Grobstruktur.",
   "Die Anforderungen stehen zu Projektbeginn fest, daher bleibt die Architektur danach stabil.",
   "Funktionale Anforderungen legen die Bausteinstruktur eindeutig fest."
  ],
  "correct": [
   1,
   2,
   3,
   4
  ],
  "optExpl": [
   "Falsch: Rollentausch: Welche Features ein System bietet, legen Stakeholder und Anforderungen fest. Die Architektur sorgt dafür, dass die geforderten Funktionen und Qualitäten unter den Randbedingungen erreichbar werden.",
   "Richtig: Randbedingungen wie vorgegebene Technologien, Budget, Termine oder Organisationsstrukturen sind nicht verhandelbar. Sie müssen von Anfang an in den Entwurf einfließen, sonst droht teure Nacharbeit.",
   "Richtig: Architektur und Anforderungen beeinflussen sich wechselseitig. Wer sich etwa für Cloud-Betrieb entscheidet, bekommt neue Anforderungen an Betrieb, Sicherheit und Kostenkontrolle, die vorher niemand formuliert hatte.",
   "Richtig: Das Curriculum nennt als Ziel von Architektur, funktionale Anforderungen zu erreichen bzw. deren Erfüllbarkeit sicherzustellen.",
   "Richtig: Funktionen lassen sich mit sehr vielen Strukturen umsetzen. Erst Qualitätsanforderungen wie Performanz, Verfügbarkeit oder Änderbarkeit schränken die Lösung wirklich ein und prägen damit die Grobstruktur.",
   "Falsch: Anforderungen ändern sich, und Entscheidungen können neue Anforderungen erzeugen. Die Architektur entwickelt sich deshalb iterativ weiter.",
   "Falsch: Dieselbe Funktionalität lässt sich als Monolith, in Schichten oder als Microservices umsetzen. Funktionale Anforderungen legen die Bausteinstruktur deshalb nicht eindeutig fest; das tun eher Qualitäten und Randbedingungen."
  ],
  "explanation": "Qualitätsanforderungen und Randbedingungen prägen die Struktur, und Architekturentscheidungen wirken auf die Anforderungen zurück. Fallen: Die Architektur bestimmt nicht den Funktionsumfang, und Funktionen allein legen keine Struktur eindeutig fest."
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
   "Falsch: Das Curriculum nennt die GUI ausdrücklich neben Persistenz, Kommunikation und Sicherheit als Querschnittsthema, über das Architekt:innen entscheiden. Gemeint ist das Konzept (z. B. Web vs. Rich Client, Zustandshaltung), nicht das Maskenlayout.",
   "Falsch: Das Curriculum verlangt bei allen Architekturaufgaben, den Bedarf an Iterationen selbstständig zu erkennen und Rückmeldung einzuholen. Architekturarbeit ist iterativ; zu merken, wann eine Annahme nicht trägt, ist Kernaufgabe.",
   "Falsch: Architekturen hinsichtlich Risiken für die Anforderungen zu analysieren und zu bewerten, ist eine im Curriculum ausdrücklich genannte Aufgabe (vgl. Kapitel 5). Ohne Bewertung bliebe offen, ob die Lösung die Qualitätsziele erreicht.",
   "Richtig: Das detaillierte Oberflächendesign einzelner Masken verantworten UX-/UI-Gestalter:innen. Die Architektur legt nur übergreifende Entscheidungen zur GUI als Querschnittsthema fest, etwa Technologie, Interaktionsmuster oder Anbindung an das Backend."
  ],
  "explanation": "Das GUI-Konzept als Querschnittsthema gehört zur Architektur, das Layout einzelner Masken dagegen nicht. Falle: „GUI“ klingt nach UX-Detailarbeit, ist im Curriculum aber ausdrücklich ein Querschnittsthema; Iterationen erkennen und Risiken bewerten sind ebenfalls genannte Aufgaben."
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
    "text": "Eine Schnittstelle kann neben angebotenen auch benötigte Operationen beschreiben.",
    "cat": 0
   },
   {
    "text": "Die Architektur eines Systems lässt sich vollständig aus seinem Quellcode ablesen.",
    "cat": 1
   }
  ],
  "rowExpl": [
   "Bausteine mit Schnittstellen zeigen nur einen Teil der Struktur. Erst Beziehungen, Querschnittsthemen, Prinzipien und Entscheidungen mit ihren Auswirkungen machen daraus eine Architektur, deshalb ist die Aussage falsch.",
   "Baustein ist der Oberbegriff für abgegrenzte Systemteile, eine Komponente ist eine Art Baustein. Die Aussage gilt nur in diese Richtung und ist richtig; umgekehrt wäre sie falsch.",
   "Jedes System hat Bausteine und Beziehungen und damit eine Architektur, auch wenn sie nie bewusst entworfen wurde. Dokumentation beschreibt sie nur, sie erschafft sie nicht. Die Aussage ist deshalb richtig.",
   "Eine Schnittstelle ist der nach außen sichtbare Vertrag: Sie beschreibt angebotene und, wo nötig, auch benötigte Operationen. Sie auf angebotene Operationen zu beschränken wäre zu eng, daher ist die Aussage richtig.",
   "Der Code zeigt, was gebaut wurde, aber nicht warum. Begründungen, Zielkonflikte und verworfene Alternativen stehen nicht darin, deshalb lässt sich die Architektur nicht vollständig aus dem Quellcode ablesen."
  ],
  "explanation": "Bausteine samt Schnittstellen sind noch keine Architektur, es fehlen Beziehungen, Querschnittsthemen und Entscheidungen (falsch). Jede Komponente ist ein Baustein, aber nicht umgekehrt (richtig). Jedes System hat eine Architektur, auch ungeplant (richtig). Schnittstellen beschreiben angebotene und benötigte Operationen (richtig). Begründungen stehen nicht im Code, daher ist die Architektur nicht vollständig daraus ablesbar (falsch)."
 },
 {
  "id": "c1q11",
  "chapter": 2,
  "lz": "LZ 02-01",
  "r": "R1",
  "type": "multi",
  "q": "Zu Beginn eines Projekts für ein neues Kundenportal sammelt das Team alle Personen und Gruppen, die ein Interesse am System haben, und überlegt, wie diese die Architektur beeinflussen. Welche Aussagen über Stakeholder einer Softwarearchitektur treffen zu?",
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
   "Falsch: Zu eng gefasst: Stakeholder sind alle Personen oder Gruppen mit berechtigtem Interesse am System oder an seiner Architektur – nicht nur Auftraggeber oder Management. Auch Nutzer, Entwicklung, Betrieb oder Tester gehören dazu.",
   "Richtig: Architekt:innen tragen Verantwortung, entscheiden Konflikte aber nicht im Alleingang. Sie machen Zielkonflikte transparent, zeigen Optionen und Konsequenzen auf und klären sie gemeinsam mit den betroffenen Stakeholdern.",
   "Falsch: Die Entwicklung ist ausdrücklich ein Stakeholder: Sie muss die Architektur verstehen, umsetzen und mit ihr leben. Gerade ihr Feedback zu Umsetzbarkeit und Aufwand ist für Architekturentscheidungen wichtig.",
   "Falsch: Der Stakeholder-Kreis ist nicht statisch. Im Projektverlauf kommen neue hinzu (z. B. Betrieb kurz vor dem Go-live, neue Partner), andere fallen weg – die Stakeholder-Liste muss deshalb laufend gepflegt werden.",
   "Richtig: Der IT-Betrieb muss das System installieren, überwachen und am Laufen halten und hat entsprechende Anforderungen. Das Curriculum zählt Betrieb, Rechenzentren und Produktion ausdrücklich zu den Partnern der Architekturrolle.",
   "Richtig: Bei eingebetteten und hardwarenahen Systemen beeinflusst die Hardware die Softwarearchitektur stark, etwa über Speicher, Rechenleistung oder Schnittstellen. Das Curriculum nennt Hardwareentwicklung und Systemarchitektur hier ausdrücklich als Stakeholder."
  ],
  "explanation": "Stakeholder sind alle mit berechtigtem Interesse – inklusive Entwicklung, Betrieb und bei eingebetteten Systemen der Hardwareentwicklung. Fallen: Es sind nicht nur Entscheider, der Kreis ist nicht statisch, und Konflikte werden gemeinsam statt im Alleingang geklärt."
 },
 {
  "id": "c1q12",
  "chapter": 3,
  "lz": "LZ 03-06",
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
   "Richtig: Wenige, klar definierte Abhängigkeiten über Schnittstellen begrenzen die Auswirkungen von Änderungen. Ändert sich ein Baustein intern, bleiben lose gekoppelte Nachbarn unberührt – ein zentrales Entwurfsprinzip im Curriculum.",
   "Falsch: Begriffsverwechslung: Kohäsion beschreibt den Zusammenhalt im Inneren eines Bausteins. Enge Verflechtung zwischen benachbarten Bausteinen ist Kopplung – und die soll gerade niedrig sein.",
   "Falsch: Kleine Bausteine sind nicht automatisch kohäsiv. Zu feine Schnitte zerreißen zusammengehörige Logik und erhöhen die Zahl der Abhängigkeiten, also die Kopplung. Die richtige Größe ergibt sich aus der Verantwortung, nicht aus einem Minimum.",
   "Falsch: Breite Schnittstellen legen Interna offen und verletzen das Geheimnisprinzip. Je mehr Operationen Nutzer verwenden, desto stärker sind sie an den Baustein gekoppelt und desto schwerer wird er änderbar.",
   "Richtig: Hohe Kohäsion bedeutet: Zusammengehörige Aufgaben sind in einem Baustein gebündelt. Änderungen an einer fachlichen Verantwortung bleiben dadurch lokal, statt sich über viele Bausteine zu verteilen."
  ],
  "explanation": "Ein gut geschnittener Baustein hat hohe Kohäsion im Inneren und lose Kopplung nach außen über schmale Schnittstellen. Fallen: Kohäsion gilt innerhalb, nicht zwischen Bausteinen; „möglichst klein“ ist nicht gleich kohäsiv, und viele öffentliche Operationen erhöhen die Kopplung."
 },
 {
  "id": "c1q13",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R1",
  "type": "multi",
  "q": "Zwei Teams entwickeln getrennt voneinander Bausteine, die später zusammenarbeiten sollen. Vor dem Start klären sie, was die Schnittstelle eines Bausteins ausmacht und was sie festlegen sollte. Welche Aussagen zur Schnittstelle eines Bausteins treffen zu?",
  "options": [
   "Sie umfasst die Signaturen, nicht aber Zusicherungen.",
   "Sie kann angebotene und benötigte Operationen umfassen.",
   "Sie kann stabil bleiben, wenn sich die Implementierung ändert.",
   "Sie entspricht der Klasse, die den Baustein implementiert.",
   "Sie ist die Grundlage dafür, dass Teams ihre Bausteine getrennt entwickeln können.",
   "Sie wird stets von genau einem Baustein genutzt.",
   "Sie beschreibt die interne Datenstruktur des Bausteins."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Falsch: Zu eng gefasst: Eine Signatur sagt nur, wie man aufruft. Zum Vertrag einer Schnittstelle gehören auch Zusicherungen wie Vor- und Nachbedingungen, Fehlerverhalten oder Qualitätseigenschaften.",
   "Richtig: Die Schnittstelle ist der nach außen sichtbare Vertrag. Sie kann angebotene Operationen enthalten und ebenso benötigte, also das, was der Baustein von seiner Umgebung erwartet – jeweils samt Zusicherungen.",
   "Richtig: Genau das ist der Zweck von Kapselung und Information Hiding: Die Interna dürfen sich ändern, solange der Vertrag eingehalten wird. So bleiben Nutzer des Bausteins von internen Änderungen unberührt.",
   "Falsch: Eine Schnittstelle ist ein Vertrag, keine Klasse. Dieselbe Schnittstelle kann von verschiedenen Klassen oder Bausteinen implementiert werden.",
   "Richtig: Wenn der Vertrag zwischen Bausteinen steht, können Teams unabhängig voneinander arbeiten und später integrieren.",
   "Falsch: Eine Schnittstelle kann beliebig viele Nutzer haben, etwa eine öffentliche API mit vielen Clients. Gerade die Zahl der Nutzer ist oft der Grund, warum sie besonders stabil bleiben muss.",
   "Falsch: Interne Datenstrukturen sind ein Implementierungsdetail. Die Schnittstelle soll sie gerade verbergen, damit sie sich ändern können, ohne dass Nutzer des Bausteins angepasst werden müssen."
  ],
  "explanation": "Eine Schnittstelle ist ein Vertrag aus angebotenen bzw. benötigten Operationen und Zusicherungen; sie verbirgt die Interna und kann trotz Implementierungsänderungen stabil bleiben. Fallen: Signatur allein ist kein vollständiger Vertrag, und eine Schnittstelle kann viele Nutzer haben."
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
   "Richtig: Verantwortlichkeit beschreibt das WAS: eine klar umrissene, kohäsive Aufgabe, die den Baustein von anderen abgrenzt. Beispiel: „Der Baustein Preisberechnung ermittelt Endpreise inklusive Rabatten“ – unabhängig von Technik oder Team.",
   "Falsch: Die Technologie beschreibt das WIE der Realisierung, nicht die Aufgabe, für die der Baustein steht. Dieselbe Verantwortlichkeit könnte mit Java oder Go umgesetzt werden, ohne sich inhaltlich zu ändern.",
   "Falsch: Die öffentlichen Operationen realisieren die Verantwortlichkeit nach außen, definieren sie aber nicht vollständig. Eine bloße Liste von Methoden sagt nichts über den Zweck aus, der die Operationen zusammenhält – das ist eine typische Verwechslung von Schnittstelle und Aufgabe.",
   "Falsch: Hier wird organisatorische Zuständigkeit mit der fachlich-technischen Aufgabe verwechselt. Wer einen Baustein entwickelt oder betreibt, kann wechseln, ohne dass sich seine Verantwortlichkeit im System ändert."
  ],
  "explanation": "Die Verantwortlichkeit eines Bausteins ist das WAS: eine abgegrenzte, kohäsive Aufgabe. Fallen: Weder die Liste der öffentlichen Operationen noch die Implementierungstechnologie noch das zuständige Team definieren sie."
 },
 {
  "id": "c1q15",
  "chapter": 5,
  "lz": "LZ 05-03",
  "r": "R2",
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
   "Falsch: Übergeneralisierung: Pauschales Nachziehen der Dokumentation legalisiert auch ungewollte Verstöße. Damit werden Architekturziele stillschweigend aufgegeben, statt bewusst zu entscheiden, ob die Abweichung gewollt ist.",
   "Richtig: Wenn Soll- und Ist-Architektur auseinanderdriften, spricht man von Architekturerosion. Geplante Qualitäten wie Wartbarkeit gehen dabei schleichend verloren, oft ohne dass es lange jemand bemerkt.",
   "Richtig: Manuelle Code- und Architektur-Reviews sowie toolgestützte Abhängigkeitsprüfungen, etwa Regeln für erlaubte Schichtzugriffe, machen Verstöße sichtbar. Sie gehören zu den Aufgaben der Architekturarbeit während der Umsetzung.",
   "Falsch: Tests prüfen das Verhalten, nicht die Struktur. Ein System kann alle Tests bestehen und trotzdem verbotene Abhängigkeiten enthalten, die Wartbarkeit und Änderbarkeit langfristig verschlechtern.",
   "Richtig: Manche Abweichungen sind Fehler, andere berechtigte Erkenntnisse aus der Umsetzung. Architekt:innen entscheiden je Fall bewusst, ob der Code zurückgeführt oder die Architektur samt Dokumentation angepasst wird."
  ],
  "explanation": "Abweichungen zwischen Code und dokumentierter Architektur bedeuten Erosionsgefahr; man deckt sie durch Reviews und Abhängigkeitsprüfungen auf und entscheidet je Fall bewusst. Fallen: Grüne Tests sagen nichts über die Struktur aus, und pauschales Nachdokumentieren gibt Ziele auf."
 },
 {
  "id": "c1q16",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R1",
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
   "Falsch: Auch tiefere Zerlegungsebenen können tragende, schwer änderbare Entscheidungen enthalten, etwa ein zentrales Datenmodell in einem Teilbaustein. Deshalb hat die Bausteinsicht bewusst mehrere Ebenen, die man so tief verfeinert wie nötig.",
   "Richtig: Entwurfsprinzipien wie hohe Kohäsion und lose Kopplung greifen rekursiv: Sie gelten für die Aufteilung des Gesamtsystems in Subsysteme ebenso wie für Module, Pakete oder Klassen innerhalb eines Bausteins.",
   "Falsch: Hier werden Ebenen und Sichten verwechselt. Sichten sind unterschiedliche Perspektiven auf dasselbe System; Ebenen beschreiben die Verfeinerungstiefe innerhalb einer Sicht, z. B. Ebene 1 und 2 der Bausteinsicht.",
   "Falsch: Übergeordnete Entscheidungen setzen den Rahmen für die Verfeinerung, etwa ein gewählter Architekturstil oder Technologievorgaben. Die Ebenen sind also nicht isoliert, sondern beeinflussen sich – auch Erkenntnisse von unten können oben Änderungen auslösen.",
   "Richtig: Auf jeder Ebene kann man einen Baustein von außen als Blackbox (Verantwortung, Schnittstellen) oder in seiner inneren Zerlegung als Whitebox zeigen. Die Whitebox einer Ebene besteht aus Blackboxes der nächsten Ebene."
  ],
  "explanation": "Architektur beschreibt geschachtelte Abstraktionsebenen; Entwurfsprinzipien und die Black-/Whitebox-Betrachtung gelten auf jeder davon, und Entscheidungen wirken über Ebenen hinweg. Fallen: Ebenen sind keine Sichten, und Architekturrelevanz endet nicht auf der obersten Ebene."
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
   "Künftige Änderungen auch unvorhergesehener Art günstig machen."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Richtig: Strukturen und Konzepte sollen allen relevanten Stakeholdern verständlich sein – das ist eines der Ziele laut Curriculum. Nur wer das System versteht, kann Entscheidungen mittragen, umsetzen oder betreiben.",
   "Richtig: Komplexität systematisch zu reduzieren ist eines der Ziele laut Curriculum. Das geschieht durch Zerlegung, Abstraktion und klare Zuständigkeiten, sodass man Teile des Systems unabhängig verstehen und ändern kann.",
   "Falsch: Den Funktionsumfang bestimmen die Stakeholder über die Anforderungen. Architektur stellt sicher, dass er sich umsetzen lässt, legt ihn aber nicht fest – hier werden Anforderungs- und Lösungsseite verwechselt.",
   "Richtig: Leicht übersehen: Architekturrelevante Richtlinien für Implementierung und Betrieb sind ein eigenes Ziel im Curriculum. Beispiele sind Vorgaben zu Fehlerbehandlung, Logging oder Deployment, die die Struktur und die Qualitäten absichern.",
   "Falsch: Architektur kann Planung und Aufwandsschätzung unterstützen, garantiert aber weder Budget- noch Termintreue. Das ist Aufgabe des Projektmanagements; im Curriculum steht es nicht unter den Zielen von Architektur.",
   "Falsch: Nur vorhergesehene Änderungen lassen sich gezielt erleichtern, etwa durch Kapselung volatiler Teile. Jede beliebige Änderung billig zu machen ist unmöglich und würde zu Überkonstruktion führen."
  ],
  "explanation": "Ziele laut Curriculum: Umsetzung unterstützen, Funktionen und Qualitäten erreichen, Verständnis sichern, Komplexität reduzieren, Richtlinien für Implementierung und Betrieb festlegen. Fallen: keine Budget-/Termingarantie, keine Festlegung der Features und keine Billig-Änderbarkeit für alles."
 },
 {
  "id": "c1q18",
  "chapter": 3,
  "lz": "LZ 03-05",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen kennzeichnen ein iteratives Vorgehen bei der Architekturarbeit?",
  "options": [
   "Tragende Entscheidungen bis zur letzten Iteration aufschieben.",
   "Früh entscheiden und anhand neuer Erkenntnisse verfeinern.",
   "Die Architektur rein emergent aus dem Code entstehen lassen.",
   "Rückmeldungen aus einer Iteration fließen in die nächsten Entscheidungen ein.",
   "Die Architektur zu Beginn der Iterationen von Grund auf neu entwerfen.",
   "Iterationen erhöhen die Prognostizierbarkeit und senken das Risiko bei Entscheidungen unter Unsicherheit."
  ],
  "correct": [
   1,
   3,
   5
  ],
  "optExpl": [
   "Falsch: Aufschieben verschiebt nur Risiken nach hinten, wo Änderungen teurer werden. Iterativ heißt nicht, Entscheidungen zu vermeiden, sondern sie früh genug auf Basis des aktuellen Wissens zu treffen und dann zu überprüfen.",
   "Richtig: Tragende Entscheidungen fallen früh, weil sie die weitere Arbeit prägen, werden aber in jeder Iteration anhand von Feedback, Messungen und neuen Anforderungen überprüft und bei Bedarf verfeinert oder korrigiert.",
   "Falsch: Rein emergente Architektur verzichtet auf bewusste, übergreifende Entscheidungen. Dann fehlt die Ausrichtung auf Qualitätsziele und Randbedingungen; querschnittliche Themen wie Sicherheit oder Skalierbarkeit entstehen nicht zufällig aus dem Code.",
   "Richtig: Iterativ arbeiten heißt, Rückmeldungen von Stakeholdern, Messungen und Tests systematisch zu nutzen. So werden Annahmen schrittweise durch Fakten ersetzt.",
   "Falsch: Iterationen verfeinern und korrigieren die Architektur schrittweise. Ein Neuentwurf in jeder Iteration würde getroffene tragende Entscheidungen entwerten, enorme Kosten verursachen und keine stabile Grundlage für die Umsetzung bieten.",
   "Richtig: Das Curriculum nennt den Einfluss iterativen Vorgehens auf Risiken und Prognostizierbarkeit ausdrücklich. Kurze Zyklen decken Fehlannahmen früh auf."
  ],
  "explanation": "Iterativ heißt: früh entscheiden, dann anhand von Rückmeldungen und neuen Erkenntnissen überprüfen und verfeinern; das erhöht die Prognostizierbarkeit und senkt Risiken. Fallen: Weder das Aufschieben bis zum Ende noch eine rein emergente Architektur noch ein kompletter Neuentwurf pro Iteration entspricht diesem Vorgehen."
 },
 {
  "id": "c1q19",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zur Abgrenzung von Softwarearchitektur und Detailentwurf treffen zu?",
  "options": [
   "Architektur entsteht vor, Detailentwurf nach einem festen Meilenstein.",
   "Architektur umfasst die übergreifenden, schwer änderbaren Entscheidungen.",
   "Ab einer festen Bausteingröße beginnt der Detailentwurf.",
   "Der Detailentwurf konkretisiert innerhalb der Vorgaben der Architektur.",
   "Architektur beschreibt die Struktur, Detailentwurf das Verhalten.",
   "Ob eine Entscheidung zur Architektur zählt, zeigt sich an ihrer Reichweite und den Änderungskosten, nicht am Zeitpunkt."
  ],
  "correct": [
   1,
   3,
   5
  ],
  "optExpl": [
   "Falsch: Architektur und Detailentwurf entwickeln sich iterativ und oft parallel. Ein fester Meilenstein als Phasenübergang entspricht einem Wasserfalldenken und widerspricht dem iterativen Vorgehen, das das Curriculum betont.",
   "Richtig: Architektur umfasst die systemweit tragenden Entscheidungen, die später nur mit hohem Aufwand änderbar sind, etwa Zerlegung oder Technologiewahl. Der Detailentwurf konkretisiert innerhalb dieser Vorgaben, z. B. Klassen innerhalb eines Bausteins.",
   "Falsch: Es gibt keine feste Bausteingröße, ab der Detailentwurf beginnt. Die Grenze ist projektabhängig und ergibt sich aus der Tragweite einer Entscheidung: Was systemweit wirkt oder schwer änderbar ist, gehört zur Architektur.",
   "Richtig: Der Detailentwurf füllt den von der Architektur gesetzten Rahmen aus, z. B. Klassen innerhalb eines Bausteins. Er ändert die tragenden Entscheidungen nicht.",
   "Falsch: Beide umfassen Struktur und Verhalten. Auch Architektur beschreibt Verhalten, etwa in der Laufzeitsicht. Der Unterschied liegt in der Tragweite der Entscheidungen, nicht in Struktur gegen Verhalten.",
   "Richtig: Was systemweit wirkt oder später nur mit hohem Aufwand änderbar ist, gehört zur Architektur – unabhängig davon, wann es entschieden wird."
  ],
  "explanation": "Architektur umfasst übergreifende, schwer änderbare Entscheidungen; der Detailentwurf konkretisiert innerhalb dieser Vorgaben. Fallen: Die Grenze ist weder ein fester Meilenstein noch eine Bausteingröße, und beide Ebenen beschreiben Struktur wie Verhalten."
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
   "Falsch: Zu eng: Architekt:innen kommunizieren laut Curriculum selbst mit allen relevanten Stakeholdern, auch mit der Fachseite. Sie können diese Aufgabe nicht an den Product Owner abschieben.",
   "Richtig: Kommunikation ist keine Einbahnstraße. Aktives Zuhören hilft, die eigentlichen Anliegen der Stakeholder zu verstehen, und gehört laut Curriculum ausdrücklich zu den Fähigkeiten von Architekt:innen.",
   "Falsch: Kommunikation ist während des gesamten Entwurfs zentral, nicht erst am Ende. Wer nur ein fertiges Ergebnis präsentiert, erfährt Einwände zu spät und verpasst die Abstimmung mit den Stakeholdern.",
   "Falsch: Mündliche Abstimmung ist wertvoll, ersetzt aber nicht die dokumentierte, nachvollziehbare Begründung. Ohne schriftliche Festhaltung gehen Gründe verloren und Entscheidungen werden später angezweifelt.",
   "Richtig: Architekt:innen stehen zwischen Fachseite, Entwicklung, Betrieb und Management. Sie müssen unterschiedliche Interessen ausgleichen und tragfähige Kompromisse herbeiführen.",
   "Richtig: Dieselbe Entscheidung wird dem Management anders erklärt als der Entwicklung: Der Inhalt bleibt gleich, die Darstellung passt sich an Wissen und Interessen der Zielgruppe an."
  ],
  "explanation": "Gute Kommunikation heißt: vermitteln, aktiv zuhören und Entscheidungen zielgruppengerecht begründen – laufend während des Entwurfs und gegenüber allen Stakeholdern. Fallen: Kommunikation ist kein Abschlussvortrag, nicht auf die Entwicklung beschränkt und kein Ersatz für Dokumentation."
 },
 {
  "id": "c1q22",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R1",
  "type": "multi",
  "q": "Was kennzeichnet eine „gute“ Softwarearchitektur am ehesten?",
  "options": [
   "Sie maximiert Sicherheit, Performanz und Benutzbarkeit zugleich.",
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
   "Falsch: Qualitätsmerkmale konkurrieren miteinander, etwa Sicherheit gegen Benutzbarkeit oder Performanz gegen Änderbarkeit. Gute Architektur optimiert nicht alles gleichzeitig, sondern wägt bewusst nach Prioritäten ab.",
   "Richtig: Unnötige Komplexität erschwert Verständnis, Test und Wartung. Zu starke Vereinfachung verfehlt dagegen die Anforderungen. Das Prinzip der Einfachheit gehört zu den zentralen Entwurfsprinzipien im Curriculum.",
   "Richtig: Die Güte einer Architektur ist relativ: Sie misst sich daran, ob die Qualitätsziele unter den gegebenen Randbedingungen erreicht werden. Eine kontextfrei beste Architektur gibt es nicht.",
   "Falsch: Vorratshaltung für spekulative künftige Anforderungen ist Überkonstruktion. Sie erhöht Komplexität und Kosten, ohne sicheren Nutzen; sinnvoll ist Flexibilität nur dort, wo Änderungen wahrscheinlich sind.",
   "Falsch: Muster sind Werkzeuge, keine Qualitätsgarantie. Ob ein Muster passt, entscheidet der Kontext; falsch eingesetzt erzeugt auch ein bewährtes Muster unnötige Komplexität oder verfehlt die Ziele."
  ],
  "explanation": "Eine gute Architektur erreicht die Qualitätsziele unter den gegebenen Randbedingungen und ist so einfach wie möglich. Fallen: Weder viele bewährte Muster noch Vorratshaltung noch das gleichzeitige Maximieren aller Qualitäten machen eine Architektur gut."
 },
 {
  "id": "c1q24",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen erklären, warum das Curriculum keine einzelne verbindliche Definition von Softwarearchitektur festlegt?",
  "options": [
   "Die Definition hängt vom gewählten Architekturstil ab.",
   "Es gibt viele anerkannte Definitionen von Softwarearchitektur.",
   "Eine einzelne Definition würde für Informationssysteme passen, für andere Systeme nicht.",
   "Vermittelt wird der gemeinsame Kern der Definitionen (Bausteine, Schnittstellen, Beziehungen, Querschnittsthemen).",
   "Eine feste Definition würde den Lösungsraum einengen."
  ],
  "correct": [
   1,
   3
  ],
  "optExpl": [
   "Falsch: Ein Architekturstil wie Schichten oder Microservices ist eine Lösungsentscheidung für ein konkretes System. Der Architekturbegriff selbst ist stilunabhängig und gilt für jedes System gleichermaßen.",
   "Richtig: Das Curriculum verweist auf zahlreiche anerkannte Definitionen und arbeitet deren gemeinsame Aspekte heraus: Bausteine, Beziehungen, Schnittstellen, Prinzipien und Entscheidungen. Dieser Kern ist für die Prüfung relevant, nicht eine Einzeldefinition.",
   "Falsch: Die gängigen Definitionen gelten für Softwaresysteme allgemein. Ein Informationssystem ist nur eine Art von System; der Architekturbegriff ist davon unabhängig.",
   "Richtig: Das Curriculum arbeitet die gemeinsamen Aspekte der gängigen Definitionen heraus. So bleiben Teilnehmende unabhängig davon, welcher Definition sie später begegnen.",
   "Falsch: Definitionen beschreiben einen Begriff, nicht konkrete Lösungen. Den Lösungsraum schränken Anforderungen, Randbedingungen und Entscheidungen ein, nicht die Wahl einer Definition."
  ],
  "explanation": "Es gibt viele anerkannte Definitionen von Softwarearchitektur; das Curriculum vermittelt ihren gemeinsamen Kern (Bausteine, Beziehungen, Entscheidungen). Fallen: eine Beschränkung auf Informationssysteme, die Abhängigkeit vom Architekturstil oder eine angebliche Einengung des Lösungsraums."
 },
 {
  "id": "c1q25",
  "chapter": 1,
  "lz": "LZ 01-05",
  "r": "R3",
  "extra": true,
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
   "Falsch: Hardware, Netze und Rechenzentren gehören zur Infrastruktur- bzw. Technologiearchitektur. Das Curriculum grenzt diese Domäne nur ab; der CPSA-F betrachtet Infrastruktur lediglich, soweit sie die Softwarearchitektur beeinflusst (Verteilungssicht).",
   "Falsch: Die Struktur ganzer Anwendungslandschaften ist Gegenstand der Unternehmens-IT-Architektur (Enterprise Architecture). Sie ist eine eigene Domäne, die das Curriculum nur abgrenzt und nicht im Detail behandelt.",
   "Falsch: Systemübergreifende Struktur und Nutzung von Daten beschreibt die Informations- bzw. Datenarchitektur. Auch sie ist eine benachbarte Disziplin, die das Curriculum nur zur Abgrenzung nennt (R3-Inhalt, nicht prüfungsrelevant im Detail).",
   "Richtig: Der Foundation Level behandelt die Architektur einzelner Softwaresysteme: deren Strukturen, Bausteine, Schnittstellen und übergreifende Konzepte. Benachbarte Architekturdomänen werden nur zur Abgrenzung erwähnt."
  ],
  "explanation": "Der Fokus des CPSA-F liegt auf Strukturen und Konzepten einzelner Softwaresysteme. Falle: Unternehmens-, Informations- und Infrastrukturarchitektur sind benachbarte Domänen, die das Curriculum nur abgrenzt – sie klingen relevant, sind aber nicht der Schwerpunkt."
 },
 {
  "id": "c1q26",
  "chapter": 1,
  "lz": "LZ 01-01",
  "r": "R1",
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
   "Falsch: Die Paketstruktur zeigt nur einen statischen Ausschnitt. Laufzeitverhalten, Verteilung auf Infrastruktur und die Begründungen der Entscheidungen stehen nicht darin, und Pakete spiegeln die beabsichtigte Architektur oft nur unvollständig wider.",
   "Richtig: Statische und dynamische Strukturen existieren nebeneinander, etwa Bausteinstruktur, Laufzeitinteraktionen und Verteilung. Deshalb beschreibt man Architektur über mehrere Sichten, die jeweils eine Struktur zeigen.",
   "Falsch: Statische Abhängigkeiten gehören bereits zur Bausteinsicht; Struktur besteht immer aus Elementen und ihren Beziehungen. Bausteine ohne Beziehungen wären bloß eine Liste. Die Laufzeitsicht zeigt zusätzlich das dynamische Zusammenspiel.",
   "Falsch: Zu eng gefasst: Auch Laufzeit- und Verteilungssicht beschreiben Strukturen des Systems. Die Bausteinsicht zeigt die statische Struktur, ist aber nur eine von mehreren Sichten.",
   "Richtig: Dynamische Strukturen – wie Bausteine zur Laufzeit zusammenwirken, etwa ein Ablauf beim Bestellvorgang – gehören ebenso zur Architektur. Sie werden in der Laufzeitsicht dokumentiert."
  ],
  "explanation": "Ein System hat mehrere Strukturen: statische (Bausteine und Abhängigkeiten) und dynamische (Zusammenspiel zur Laufzeit), beschrieben in verschiedenen Sichten. Fallen: Beziehungen gehören schon zur statischen Struktur, und Strukturen sind weder auf die Bausteinsicht noch auf die Paketstruktur beschränkt."
 },
 {
  "id": "c1q27",
  "chapter": 1,
  "lz": "LZ 01-07",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zur Bedeutung von Datenmodellen für die Architektur treffen zu?",
  "options": [
   "Sie werden sinnvollerweise nach der Architektur festgelegt.",
   "Sie sind oft langlebig und nachträglich teuer zu ändern.",
   "Ihr Einfluss beschränkt sich auf die Persistenzschicht.",
   "Das Datenmodell sollte unabhängig von seiner Repräsentation (Datenbank, Datei, Übertragungsprotokoll) betrachtet werden.",
   "Ein ORM entkoppelt sie von der Architektur.",
   "Daten wirken auf Entscheidungen zu Speicherung, Sicherheit, Skalierbarkeit und Performance."
  ],
  "correct": [
   1,
   3,
   5
  ],
  "optExpl": [
   "Falsch: Datenmodelle prägen die Architektur, etwa den Bausteinschnitt oder die Verteilung. Sie werden daher zusammen mit ihr entworfen, nicht nachgelagert, sonst passt die Struktur später nicht zu den Daten.",
   "Richtig: Daten überdauern oft mehrere Anwendungsgenerationen, und viele Systeme hängen an ihnen. Ein ungünstiger Schnitt des Datenmodells ist deshalb nachträglich nur mit hohem Aufwand, etwa Migrationen, zu korrigieren.",
   "Falsch: Daten wirken weit über die Persistenzschicht hinaus: auf Bausteinschnitt, Schnittstellen, Sicherheit, Skalierbarkeit und Performance. Wer sie auf die Datenbank reduziert, unterschätzt ihren Einfluss.",
   "Richtig: Das Curriculum betont die Entkopplung von Datenmodell und Repräsentation. So lässt sich das Modell durchdenken, ohne sich früh an ein Speicherformat zu binden.",
   "Falsch: Ein ORM entkoppelt allenfalls die Speicherrepräsentation von Objekten. Das fachliche Modell und dessen Einfluss auf Bausteinstruktur und Schnittstellen bleiben bestehen.",
   "Richtig: Welche Daten es gibt, wie viele und wie sensibel sie sind, prägt viele Architekturentscheidungen. Das nennt das Curriculum ausdrücklich."
  ],
  "explanation": "Datenmodelle sind architekturprägend und langlebig; ihre Änderung ist teuer, deshalb gehören sie in den Architekturentwurf. Fallen: Sie wirken nicht nur auf die Persistenz, und ein ORM trennt nur die Repräsentation, nicht den Einfluss der Daten auf die Architektur."
 },
 {
  "id": "c1q28",
  "chapter": 1,
  "lz": "LZ 01-07",
  "r": "R3",
  "extra": true,
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
   "Falsch: Halbwahrheit: Fachlich und logisch passen, aber ein Übertragungsformat wie JSON oder XML ist eine Repräsentation der Daten. Das Datenmodell soll gerade von solchen Formaten entkoppelt sein; die dritte Ebene ist die physische Speicherung.",
   "Richtig: Das ist die klassische Dreiteilung: konzeptionell (fachliche Begriffe und Beziehungen), logisch (technologieneutrale Struktur, etwa Tabellen und Schlüssel) und physisch (konkrete Umsetzung in einer Datenbank mit Indizes und Datentypen).",
   "Falsch: Normalisierung ist eine Technik, die auf der logischen Ebene angewendet wird, um Redundanzen zu vermeiden. Sie ist keine eigene Abstraktionsebene; die dritte Ebene neben konzeptionell und logisch ist die physische.",
   "Falsch: Hier werden Architektursichten mit Modellebenen verwechselt. Kontext-, Baustein- und Verteilungssicht beschreiben Strukturen des Systems, nicht die Abstraktionsstufen eines Datenmodells."
  ],
  "explanation": "Datenmodelle beschreibt man typischerweise konzeptionell, logisch und physisch. Fallen: Normalisierung ist eine Technik auf logischer Ebene, ein Übertragungsformat nur eine Repräsentation, und Kontext/Baustein/Verteilung sind Architektursichten."
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
   "Richtig: Teilen viele Bausteine direkt dasselbe Datenmodell, trifft jede Änderung daran alle Nutzer. Die Bausteine sind über die Daten eng gekoppelt, auch wenn ihre Schnittstellen sauber getrennt aussehen.",
   "Falsch: Verwechslung mit dem Produkttyp: Ein Summentyp ist genau eine seiner Varianten (ODER), ein Produkt kombiniert Felder (UND). Summentypen helfen gerade, ungültige Kombinationen auszuschließen.",
   "Richtig: Ein „Kunde“ darf im Vertrieb anders modelliert sein als in der Buchhaltung. Eigene Modelle je Baustein entkoppeln die Bausteine, weil jeder nur die für ihn relevanten Aspekte abbildet.",
   "Falsch: Das Curriculum betont die Entkopplung des Fachmodells von seiner Repräsentation in Datenbanken und Austauschformaten. Ein 1:1-Abbild bindet das Fachmodell an technische Details der Persistenz.",
   "Falsch: Getrennte Schemata helfen nicht, wenn alle Services trotzdem direkt in fremde Daten greifen. Die Kopplung bleibt bestehen; nötig ist Zugriff nur über die Schnittstelle des datenbesitzenden Service.",
   "Richtig: Wer welche Daten besitzt und ändern darf, ist ein wesentliches Kriterium für die Zerlegung. Datenhoheit bestimmt mit, welche Bausteine fachlich zusammengehören und wo Schnittstellen verlaufen."
  ],
  "explanation": "Datenhoheit und gemeinsam genutzte Modelle bestimmen Schnitt und Kopplung; eigene Modelle je Baustein für dasselbe Fachobjekt sind legitim. Fallen: getrennte Schemata bei gegenseitigem Direktzugriff, ein 1:1-Datenbankschema und die Verwechslung von Summe und Produkt."
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
   "Richtig: Verteilung, Schnitt und Kommunikation der Bausteine bestimmen, welche Qualitäten überhaupt erreichbar sind. Diese Entscheidungen fallen früh – wer Qualitäten erst danach betrachtet, findet sie bereits durch die Struktur vorgeprägt.",
   "Falsch: Nutzerfeedback schärft Qualitätsanforderungen, ersetzt aber nicht ihre frühe Klärung. Auch in agilen Projekten prägen sie die ersten Strukturentscheidungen, z. B. ob ein System verteilt wird.",
   "Richtig: Treiber wie Verfügbarkeit oder Sicherheit wirken auf Verteilung, Datenhaltung und Schnittstellen – also auf tragende Entscheidungen. Werden sie spät entdeckt, müssen genau diese teuer zu ändernden Entscheidungen revidiert werden.",
   "Falsch: Lokales Tuning hilft bei lokalen Engpässen, etwa einer langsamen Abfrage. Qualitäten wie Verfügbarkeit oder Skalierbarkeit hängen aber an der Grundstruktur und erfordern oft einen Umbau statt Feinschliff.",
   "Falsch: Ein Lasttest stellt nur fest, ob eine Qualität erreicht ist. Ermöglichen muss sie die Architektur – ein Test macht ein schlecht geschnittenes System nicht schneller, er deckt das Problem nur kurz vor dem Go-live auf.",
   "Richtig: Implizite Erwartungen, etwa an Sicherheit oder Antwortzeiten, gelten auch unausgesprochen. Wer sie spät entdeckt, zahlt für die Korrektur – deshalb sollte man sie früh aktiv erfragen."
  ],
  "explanation": "Qualitäten entstehen durch die Architektur, nicht durch spätes Tuning oder Testen; spät entdeckte Qualitätstreiber treffen tragende Entscheidungen. Fallen: Tests und Feedback stellen Qualität fest bzw. schärfen sie, ermöglichen sie aber nicht; implizite Erwartungen gelten trotzdem."
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
   "Das System verarbeitet bis zu 10.000 Bestellungen pro Stunde.",
   "Kund:innen können Bestellungen bis zum Versand stornieren.",
   "Die bereits lizenzierte Datenbank ist zu verwenden.",
   "Personenbezogene Daten müssen in der EU gespeichert werden.",
   "Das System erzeugt monatlich einen Umsatzbericht."
  ],
  "correct": [
   0,
   1,
   4,
   5
  ],
  "optExpl": [
   "Richtig: Ein fest gedeckeltes Budget ist eine organisatorische Randbedingung. Es begrenzt, welche Lösungen überhaupt möglich sind, z. B. ob teure Lizenzen, zusätzliche Infrastruktur oder externe Spezialisten in Frage kommen.",
   "Richtig: Verfügbarkeit und Qualifikation der Mitarbeitenden zählt das Curriculum zu den organisatorischen Randbedingungen. Wer nur Java-Erfahrung hat, wird eine Lösung in einer fremden Sprache nur mit Risiko und Einarbeitungsaufwand umsetzen.",
   "Falsch: Das ist eine Qualitätsanforderung (Leistung bzw. Lastverhalten). Die konkrete Zahl wirkt wie eine Vorgabe, beschreibt aber ein Ziel und keinen vorgeschriebenen Lösungsweg.",
   "Falsch: Das ist eine funktionale Anforderung: Sie beschreibt, was das System leisten soll, und schränkt den Lösungsraum nicht von außen ein.",
   "Richtig: Eine technische Randbedingung: Die vorhandene, bereits lizenzierte Datenbank ist gesetzt, und die Architektur muss sich an diese Infrastruktur anpassen, statt frei ein Datenbankprodukt zu wählen.",
   "Richtig: Eine regulatorische bzw. rechtliche Randbedingung (z. B. aus der DSGVO). Sie schränkt den Lösungsraum ein, etwa bei der Wahl des Cloud-Anbieters, der Region oder des Rechenzentrums.",
   "Falsch: Auch das ist eine funktionale Anforderung – eine gewünschte Leistung, keine Einschränkung der Lösungsmöglichkeiten."
  ],
  "explanation": "Randbedingungen schränken den Lösungsraum ein: Budget, Team-Know-how, vorhandene Technik und Regulatorik. Fallen: Lastvorgaben wie 10.000 Bestellungen pro Stunde sind Qualitätsanforderungen, Stornierung und Berichte funktionale Anforderungen – sie beschreiben Ziele und Leistungen, keinen vorgeschriebenen Lösungsweg."
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
   "Die Anforderung als „sehr schnell“ mit hoher Priorität kennzeichnen."
  ],
  "correct": [
   2,
   3
  ],
  "optExpl": [
   "Falsch: Eine Technologievorgabe beschreibt eine Lösung (das WIE), nicht das geforderte Verhalten. Sie garantiert keine bestimmte Antwortzeit und macht „schnell“ daher nicht überprüfbar; zudem schränkt sie den Lösungsraum unnötig ein.",
   "Falsch: Die Einordnung in eine Taxonomie wie ISO 25010 klärt, um welche Qualität es geht, macht sie aber nicht messbar. Ein Zielwert und die Bedingungen, unter denen er gelten soll, fehlen weiterhin.",
   "Richtig: Kontext, Stimulus, Reaktion und Messung sind laut Curriculum die Bestandteile eines Qualitätsszenarios. Beispiel: Bei 500 gleichzeitigen Nutzern (Kontext) startet jemand eine Suche (Stimulus), das System liefert Treffer (Reaktion) in unter 1 s (Messung).",
   "Richtig: Das Curriculum fordert, dass zu einer Qualitätsanforderung auch die Analysemethode festgelegt wird, etwa Messung im Lasttest oder eine Modellrechnung. Erst dann ist klar, wie die Erfüllung nachgewiesen wird.",
   "Falsch: Eine Priorisierung sagt, wie wichtig die Anforderung ist, nicht, wie sich ihre Erfüllung prüfen lässt. „Sehr schnell“ bleibt ohne Zielwert, Kontext und Analysemethode unbestimmt."
  ],
  "explanation": "„Schnell“ wird überprüfbar durch ein vollständiges Qualitätsszenario (Kontext, Stimulus, Reaktion, Messung) plus eine festgelegte Analysemethode. Fallen: Eine Priorisierung, eine Technologievorgabe oder die bloße Einordnung ins Qualitätsmodell reichen nicht."
 },
 {
  "id": "c2q5",
  "chapter": 2,
  "lz": "LZ 02-01",
  "r": "R1",
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
   "Richtig: Qualitätserwartungen wie Antwortzeiten oder Verfügbarkeit bleiben oft unausgesprochen, prägen aber die Architektur stark. Architekt:innen bringen sie deshalb auf den Tisch und lassen sie bestätigen.",
   "Falsch: Hier wird Mitwirkung mit Verantwortung verwechselt. Die fachliche Priorisierung liegt bei Auftraggeber bzw. Product Owner; Architekt:innen liefern dafür nur die technische Entscheidungsgrundlage.",
   "Richtig: Aufwand, Risiken und Trade-offs einzelner Anforderungen sind wichtige Entscheidungsgrundlagen. Diese technischen Konsequenzen aufzuzeigen, ist ein klarer Beitrag der Architektur zur Priorisierung.",
   "Richtig: Architekt:innen hinterfragen Anforderungen aus technischer Sicht, decken Lücken und Widersprüche auf und stimmen nötige Verfeinerungen mit den Stakeholdern ab, wie im Curriculum (LZ 02-01) beschrieben.",
   "Falsch: Lücken überbrückt man mit dokumentierten Annahmen, die die Fachseite bestätigt. Verbindlich festlegen dürfen Anforderungen nur die verantwortlichen Stakeholder, nicht die Architektin allein.",
   "Falsch: Nicht jedes Anliegen wird zur Anforderung, muss aber trotzdem berücksichtigt werden – etwa um Anforderungen zu validieren oder Risiken zu erkennen. Es einfach fallen zu lassen, verschenkt wichtige Hinweise."
  ],
  "explanation": "Architekt:innen hinterfragen Anforderungen, decken Lücken und Widersprüche auf, machen implizite Qualitätserwartungen explizit und liefern technische Konsequenzen als Entscheidungsgrundlage. Falle: Priorisieren und verbindlich festlegen bleibt bei der Fachseite, und auch Anliegen ohne Anforderung bleiben relevant."
 },
 {
  "id": "c2q6",
  "chapter": 2,
  "lz": "LZ 02-03",
  "r": "R3",
  "extra": true,
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
   "Falsch: Verfügbarkeit gehört in ISO/IEC 25010 zur Zuverlässigkeit, zusammen mit Fehlertoleranz und Wiederherstellbarkeit. Sicherheit (Security) umfasst dagegen u. a. Vertraulichkeit, Integrität und Authentizität – die Verwechslung entsteht durch das CIA-Dreieck.",
   "Falsch: Naheliegend, weil Skalierung oft der Leistung dient. In der 2023-Fassung ist Skalierbarkeit aber der Flexibilität zugeordnet; Performanz umfasst Zeitverhalten, Ressourcennutzung und Kapazität.",
   "Falsch: Modularität gehört zur Wartbarkeit, zusammen mit u. a. Wiederverwendbarkeit, Analysierbarkeit, Modifizierbarkeit und Testbarkeit. Flexibilität umfasst dagegen Anpassbarkeit, Skalierbarkeit, Installierbarkeit und Ersetzbarkeit.",
   "Richtig: In ISO/IEC 25010:2023 wurde Portabilität zur Flexibilität umbenannt und um Skalierbarkeit ergänzt. Skalierbarkeit steht dort neben Anpassbarkeit, Installierbarkeit und Ersetzbarkeit."
  ],
  "explanation": "In ISO/IEC 25010:2023 gehört Skalierbarkeit zur Flexibilität, Modularität zur Wartbarkeit und Verfügbarkeit zur Zuverlässigkeit. Falle: Die inhaltliche Nähe, etwa Skalierung und Performanz, entscheidet nicht über die Einordnung im Modell."
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
   "Falsch: Beschreibt Fehlertoleranz, also wie zuverlässig das System seine Funktionen erbringt. Das ist eine Qualitätsanforderung (Zuverlässigkeit/Verfügbarkeit), auch wenn sie sehr konkret formuliert ist.",
   "Richtig: Eine Reaktion des Systems auf ein fachliches Ereignis, hier die Bestellung, ist eine Leistung des Systems. Sie beschreibt WAS das System tut und ist damit eine funktionale Anforderung.",
   "Falsch: Die Suche selbst wäre die Funktion. Die Antwortzeit von 200 ms beschreibt, WIE GUT die Suche arbeitet, also das Zeitverhalten als Teil der Performanz und damit eine Qualitätsanforderung.",
   "Richtig: Auch zeitgesteuerte Abläufe ohne Benutzeraktion sind Leistungen des Systems. Ein monatlicher Umsatzbericht beschreibt WAS geliefert wird und ist daher eine funktionale Anforderung.",
   "Richtig: Beschreibt eine Leistung, die Kund:innen direkt aufrufen können, also WAS das System tut. Das Format PDF präzisiert die Funktion, macht daraus aber keine Qualitätsanforderung.",
   "Falsch: Klingt nach einer Funktion, beschreibt aber die Bedienbarkeit für bestimmte Nutzergruppen. Das ist eine Qualität, in ISO 25010:2023 unter Interaktionsfähigkeit bzw. Barrierefreiheit eingeordnet."
  ],
  "explanation": "Funktionale Anforderungen beschreiben Leistungen des Systems, auch zeitgesteuerte wie Berichte. Fallen: Tastaturbedienbarkeit, Antwortzeiten und unbemerkte Serverausfälle klingen konkret, beschreiben aber WIE GUT das System arbeitet und sind damit Qualitätsanforderungen."
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
  "rowExpl": [
   "Die Übernahme innerhalb von 30 Sekunden beschreibt, wie gut das System bei Ausfällen funktioniert (Zuverlässigkeit). Es ist keine angebotene Funktion, deshalb eine Qualitätsanforderung.",
   "Die Erinnerungs-E-Mail ist ein Verhalten, das das System anbietet, also das WAS. Dass eine Zeitangabe (24 Stunden) vorkommt, macht sie nicht zur Qualitätsanforderung.",
   "Neue Sprachen ohne Codeänderung zu ergänzen, beschreibt, wie leicht sich das System ändern lässt (Änderbarkeit). Das ist eine Eigenschaft und keine eigene Funktion, daher Qualitätsanforderung.",
   "Eine Bestellung ohne Schulung in unter 3 Minuten betrifft, wie gut sich das System erlernen lässt (Erlernbarkeit). Es geht um das WIE GUT, nicht um eine Funktion.",
   "Die Preisanzeige in Euro oder US-Dollar ist eine angebotene Funktion, also das WAS. Dass Zahlen oder Währungen genannt werden, macht sie nicht zur Qualitätsanforderung."
  ],
  "explanation": "Funktional (WAS): Erinnerungs-E-Mail und Währungsanzeige – Zahlen darin machen sie nicht zur Qualität. Qualität (WIE GUT): Übernahme in 30 s (Zuverlässigkeit), neue Sprache ohne Codeänderung (Änderbarkeit), Bestellung ohne Schulung (Erlernbarkeit)."
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
   }
  ],
  "rowExpl": [
   "Der Messetermin ist eine Vorgabe von außen, die den Spielraum einschränkt. Er sagt nichts darüber, wie gut das System sein soll, deshalb eine Randbedingung.",
   "Der Betrieb beim vertraglich gebundenen Partner ist durch einen Vertrag vorgegeben und schränkt die Lösungsmöglichkeiten ein. Eine Randbedingung, keine geforderte Eigenschaft.",
   "Eine neue Zahlart in unter zwei Personentagen zu integrieren, beschreibt, wie gut sich das System ändern lässt (Änderbarkeit). Das ist gefordertes Verhalten, keine Vorgabe von außen.",
   "Die Datenschutzvorgabe, personenbezogene Daten in der EU zu halten, kommt von außen und ist nicht verhandelbar. Sie ist eine Randbedingung und keine Qualitätsanforderung.",
   "Unbefugte Zugriffe innerhalb von 5 Minuten zu erkennen, beschreibt, wie gut das System Sicherheit leistet. Hier ist Sicherheit gefordertes Verhalten und keine Vorgabe, also eine Qualitätsanforderung."
  ],
  "explanation": "Randbedingungen sind Vorgaben von außen: der Messetermin, der vertraglich gebundene RZ-Partner und die Datenschutzvorgabe zur EU. Qualitätsanforderungen beschreiben, WIE GUT das System sein soll: Zahlart in unter zwei Personentagen (Änderbarkeit) und Erkennung unbefugter Zugriffe in 5 Minuten (Sicherheit). Falle: Sicherheit ist hier gefordertes Verhalten, keine Vorgabe."
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
   "Richtig: Für viele überraschend: ISO/IEC 25010 führt Funktionale Eignung selbst als Hauptmerkmal der Produktqualität – anders als etwa IREB, das funktionale Anforderungen und Qualitätsanforderungen trennt. Untermerkmale sind z. B. Vollständigkeit und Korrektheit.",
   "Falsch: Verfügbarkeit ist ein Untermerkmal der Zuverlässigkeit, kein eigenes Hauptmerkmal. Sie wird oft so prominent diskutiert, dass man sie fälschlich auf die oberste Ebene des Modells setzt.",
   "Falsch: Testbarkeit ist für Architekt:innen sehr wichtig, im Modell aber ein Untermerkmal der Wartbarkeit, zusammen mit Modularität, Analysierbarkeit und Modifizierbarkeit. Wichtigkeit ist nicht gleich Hierarchiestufe.",
   "Richtig: Kompatibilität ist ein Hauptmerkmal: Sie umfasst Interoperabilität, also den Informationsaustausch mit anderen Systemen, und Koexistenz, also den störungsfreien Betrieb neben anderen Produkten in derselben Umgebung.",
   "Richtig: Zuverlässigkeit ist ein Hauptmerkmal mit Untermerkmalen wie Verfügbarkeit, Fehlertoleranz und Wiederherstellbarkeit. Sie beschreibt, ob das System unter festgelegten Bedingungen über einen Zeitraum wie gefordert funktioniert.",
   "Falsch: Wiederverwendbarkeit gehört als Untermerkmal zur Wartbarkeit. Sie klingt nach eigenständigem Qualitätsziel, ist in der Norm aber nur ein Aspekt davon, wie leicht sich das Produkt weiterentwickeln lässt."
  ],
  "explanation": "Funktionale Eignung, Kompatibilität und Zuverlässigkeit sind Hauptmerkmale der ISO/IEC 25010:2023. Falle: Testbarkeit, Verfügbarkeit und Wiederverwendbarkeit sind prominente Qualitäten, stehen im Modell aber nur als Untermerkmale unter Wartbarkeit bzw. Zuverlässigkeit."
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
   "Falsch: Die Feature-Reihenfolge folgt aus fachlicher Priorisierung nach Wert, Risiko und Aufwand, etwa im Product Backlog. Qualitäten wirken vor allem auf die Struktur des Systems, nicht auf die Release-Planung.",
   "Richtig: Selbstverständliche Erwartungen wie Datensicherheit oder akzeptable Antwortzeiten werden selten ausgesprochen. Bleiben sie ungeklärt, zeigen sie sich erst im Betrieb – und ihre Korrektur ist dann besonders teuer.",
   "Richtig: Qualitäten stehen oft im Konflikt, etwa Sicherheit ↔ Benutzbarkeit oder Speicherbedarf ↔ Leistungseffizienz. Früh erkannt, kann man diese Zielkonflikte bewusst mit den Stakeholdern abwägen und entscheiden.",
   "Richtig: Verteilung, Schichtung oder Datenhaltung hängen an Qualitätsanforderungen. Weil diese Strukturentscheidungen später teuer zu ändern sind, müssen ihre Treiber früh bekannt sein.",
   "Falsch: Früh klären heißt nicht einfrieren: Qualitätsanforderungen werden iterativ geschärft und können sich durch neue Erkenntnisse oder Geschäftsziele ändern. Architektur muss solche Änderungen weiter verfolgen.",
   "Falsch: Hier werden Funktion und Qualität verwechselt: Funktionale Anforderungen legen fest, WAS das System tut, Qualitäten beschreiben, WIE GUT es diese Funktionen erbringt."
  ],
  "explanation": "Qualitätsanforderungen früh klären, weil sie die teure Grundstruktur prägen, oft implizit sind und Zielkonflikte früh entschieden werden müssen. Fallen: Sie bleiben veränderlich und bestimmen weder die Feature-Reihenfolge noch den Funktionsumfang."
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
   "Falsch: Eine Vorlesefunktion wäre eine mögliche Lösung, um die Anforderung zu erfüllen. Gefordert ist aber eine Qualität – nämlich wie gut das System für eine Nutzergruppe bedienbar ist. Hier werden Anforderung und Lösung verwechselt.",
   "Falsch: Eine Randbedingung entstünde erst, wenn eine Norm oder Konformitätsstufe verbindlich vorgeschrieben wäre, etwa per Gesetz oder Vertrag. In der Forderung ist davon keine Rede – sie beschreibt nur das gewünschte Qualitätsziel.",
   "Richtig: Die Forderung beschreibt, WIE GUT das System für eine Nutzergruppe bedienbar ist – also eine Qualität (Interaktionsfähigkeit/Barrierefreiheit nach ISO 25010). Sie kann die Architektur prägen, z. B. durch Trennung von Darstellung und Logik.",
   "Falsch: Nicht jedes Anliegen wird zur Anforderung – hier wird aber ausdrücklich etwas gefordert, das das System erfüllen muss. Damit ist es eine Anforderung, und zwar eine Qualitätsanforderung, die konkretisiert werden sollte."
  ],
  "explanation": "Bedienbarkeit für eine Nutzergruppe ist eine Qualitätsanforderung (Interaktionsfähigkeit/Barrierefreiheit). Fallen: Eine Vorlesefunktion ist schon eine Lösung, und eine Randbedingung entsteht erst, wenn eine Norm verbindlich vorgeschrieben ist."
 },
 {
  "id": "c2q11",
  "chapter": 2,
  "lz": "LZ 02-02",
  "r": "R3",
  "extra": true,
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
   "Falsch: Prioritäten sind nicht eingefroren: Neue Erkenntnisse, Feedback oder veränderte Risiken erfordern eine Anpassung. Eine bis zum Release starre Reihenfolge widerspricht dem iterativen Vorgehen und ignoriert Lernfortschritt.",
   "Richtig: Aufwand allein sagt nichts über den Nutzen. Erst wenn Geschäftswert und Risiko mit einfließen, entsteht eine sinnvolle Reihenfolge, etwa: hoher Wert bei geringem Aufwand zuerst, riskante Punkte früh absichern.",
   "Falsch: Qualitätsanforderungen sind oft die stärkeren Architekturtreiber. Wer sie pauschal hinter funktionale Anforderungen stellt, riskiert teure Strukturänderungen, wenn sich später zeigt, dass z. B. Performanz oder Sicherheit nicht erreicht werden.",
   "Falsch: Umgekehrt: Architektonisch riskante Anforderungen geht man früh an, etwa per Prototyp oder Durchstich. Spät entdeckte Risiken sind deutlich teurer zu beheben, weil dann schon viel auf den falschen Annahmen aufbaut.",
   "Richtig: Widersprüche wie maximale Sicherheit gegen minimale Bedienhürden lassen sich nicht beide voll erfüllen. Die Priorisierung macht solche Konflikte bewusst entscheidbar, statt sie offen zu lassen und den Zufall entscheiden zu lassen."
  ],
  "explanation": "Priorisierung wägt Geschäftswert, Risiko und Aufwand ab und löst Widersprüche bewusst auf. Fallen: Riskantes kommt früh statt spät, Qualitätsanforderungen sind nicht pauschal nachrangig, und Prioritäten bleiben bei neuen Erkenntnissen anpassbar."
 },
 {
  "id": "c2q12",
  "chapter": 2,
  "lz": "LZ 02-03",
  "r": "R1",
  "type": "multi",
  "q": "Bei der Planung eines Online-Shops wünscht sich der Auftraggeber gleichzeitig höchste Sicherheit, beste Performanz und größte Flexibilität. Das Team diskutiert, wie sich solche Qualitäten zueinander verhalten. Was gilt laut Curriculum für das Verhältnis verschiedener Qualitäten eines Systems zueinander?",
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
   "Richtig: Eine Anforderung kann mehrere Qualitäten zugleich betreffen. „Anmeldung mit 2FA in unter 5 s“ berührt Sicherheit, Benutzbarkeit und Performanz – genau so beschreibt es das Curriculum.",
   "Falsch: Das widerspricht dem Curriculum: Anforderungen lassen sich nicht immer sauber einem Merkmal zuordnen. Eine strikte Eins-zu-eins-Zuordnung blendet die Wechselwirkungen zwischen Qualitäten aus.",
   "Falsch: Technologie kann einen Zielkonflikt abmildern, aber nicht auflösen. Die Abwägung, welche Qualität Vorrang hat, bleibt eine bewusste Architekturentscheidung, die begründet werden muss.",
   "Richtig: Viele Konfigurationsschalter bedeuten viele, oft ungetestete Kombinationen und damit mehr Fehlerquellen. Das Curriculum nennt dies als Beispiel dafür, wie eine Qualität eine andere schwächt.",
   "Falsch: Caching erkauft Leistungseffizienz mit mehr Speicherbedarf, zusätzlicher Komplexität und ggf. veralteten Daten. Es ist ein klassischer Trade-off, keine kostenlose Verbesserung.",
   "Richtig: Qualitäten hängen zusammen: Mehr Sicherheit kann die Benutzbarkeit senken, mehr Flexibilität die Performanz. Deshalb sind bewusste Abwägungen eine Kernaufgabe der Architektur."
  ],
  "explanation": "Qualitäten beeinflussen sich gegenseitig, und eine Anforderung kann mehrere Qualitäten betreffen; deshalb sind Abwägungen nötig. Fallen: Auch scheinbar reine Verbesserungen wie Caching haben Kosten, und Technologie ersetzt keine bewusste Entscheidung zwischen Zielen."
 },
 {
  "id": "c2q13",
  "chapter": 2,
  "lz": "LZ 02-05",
  "r": "R1",
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
   "Falsch: Das beschreibt eine Randbedingung, die den Lösungsraum verbindlich einschränkt. Eine Annahme ist gerade nicht vorgegeben, sondern ein unsicherer Sachverhalt, der sich als falsch herausstellen kann.",
   "Falsch: Eine Annahme kann sich jederzeit als falsch erweisen, etwa bei Lastspitzen oder einem Ausfall beim Partner. Dass das System gerade läuft, bestätigt sie nicht; sie bleibt ein Risiko, bis sie belegt ist.",
   "Richtig: Weil die Annahme dokumentiert ist, weiß man, welche Entscheidung auf ihr beruht – etwa der Verzicht auf eine Warteschlange oder einen Circuit Breaker. Fällt sie, lässt sich die betroffene Entscheidung gezielt überprüfen.",
   "Richtig: Genau das kennzeichnet eine Annahme: Ein Sachverhalt wird für den Entwurf unterstellt, ist aber nicht gesichert. Hier hat niemand die 99,9 % bestätigt, also ist es keine Tatsache und keine Vorgabe.",
   "Falsch: Umgekehrt: Das Curriculum verlangt, Annahmen explizit darzustellen. Verschwiegene Annahmen sind das eigentliche Risiko, weil später niemand mehr weiß, worauf eine Entscheidung beruhte.",
   "Richtig: Explizite Annahmen lassen sich hinterfragen und verifizieren, etwa durch Nachfrage beim Betreiber oder Prüfung des SLA. Implizite Annahmen führen dagegen zu Missverständnissen zwischen Stakeholdern."
  ],
  "explanation": "Annahmen sind unterstellte, nicht gesicherte Sachverhalte und gehören explizit dokumentiert, damit man sie prüfen und die abhängigen Entscheidungen finden kann. Fallen: Eine Annahme ist keine verbindliche Randbedingung, und Verschweigen erhöht das Risiko."
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
   "Richtig: Beschreibt das Zeitverhalten einer Funktion bei großer Datenmenge, also Performanz. Die Anforderung sagt nicht WAS der Report tut, sondern WIE GUT er arbeitet, und ist damit eine Qualitätsanforderung.",
   "Falsch: Klingt nach Sicherheit, beschreibt aber eine Leistung, die Administratoren aufrufen können. Das ist eine funktionale Anforderung, auch wenn sie einem Sicherheitsziel dient.",
   "Falsch: Eine Vorgabe zur bestehenden Infrastruktur schränkt den Lösungsraum ein und ist nicht verhandelbar. Sie ist eine technische Randbedingung, keine Qualitätsanforderung.",
   "Richtig: Beschreibt, wie leicht sich das System ändern lässt, also Änderbarkeit als Teil der Wartbarkeit. Die messbare Zeitangabe macht daraus eine gut prüfbare Qualitätsanforderung.",
   "Richtig: Vertraulichkeit und Integrität sind Untermerkmale der Sicherheit nach ISO 25010. Die Aussage beschreibt eine Eigenschaft des Systems und damit eine Qualitätsanforderung."
  ],
  "explanation": "Qualitätsanforderungen beschreiben WIE GUT ein System arbeitet: Zeitverhalten, Änderbarkeit, Vertraulichkeit und Integrität. Fallen: Eine sicherheitsnahe Funktion wie „Konten sperren“ bleibt funktional, und eine Datenbankvorgabe ist eine Randbedingung."
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
   "Falsch: Eine Vorgabe zu Kommunikationsprotokollen ist eine technologische Randbedingung. Sie legt fest, welche Technik eingesetzt werden muss, und betrifft nicht Organisation, Prozesse oder Personal.",
   "Richtig: Partnerschaften und Kooperationen nennt das Curriculum ausdrücklich als organisatorische Randbedingung (R2). Ein Rahmenvertrag legt etwa fest, wer welche Teile entwickelt, und beeinflusst so Schnittstellen und Bausteinzuschnitt.",
   "Richtig: Verfügbarkeit und Qualifikation der Mitarbeitenden sind organisatorische Faktoren, auch wenn es inhaltlich um eine Technologie geht. Die Erfahrung des Teams kann die Technologiewahl stark einschränken.",
   "Richtig: Normen, Richtlinien und Prozessmodelle, z. B. Genehmigungs- und Freigabeprozesse, zählen zu den organisatorischen Randbedingungen. Ein aufwendiger Release-Prozess kann etwa die Release-Frequenz und den Deployment-Zuschnitt beeinflussen.",
   "Falsch: Gesetzliche Vorgaben wie Aufbewahrungsfristen sind regulatorische bzw. rechtliche Randbedingungen, keine organisatorischen. Sie stammen von außen und gelten unabhängig davon, wie das Unternehmen organisiert ist.",
   "Falsch: Klingt nach Konzernvorgabe und damit organisatorisch, doch das Curriculum zählt Referenzarchitekturen zu den technologischen Randbedingungen. Entscheidend ist der Inhalt der Vorgabe, nicht wer sie erlässt."
  ],
  "explanation": "Organisatorisch sind u. a. Partnerschaften, Freigabeprozesse sowie Verfügbarkeit und Qualifikation des Teams. Fallen: Eine Referenzarchitektur ist technologisch, auch wenn der Konzern sie vorgibt, und gesetzliche Fristen sind regulatorische Randbedingungen."
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
   "Richtig: Gesetze wie die DSGVO wirken als Randbedingung und ziehen oft konkrete Qualitätsanforderungen nach sich, z. B. Verschlüsselung, Zugriffsschutz oder Löschfristen. Rechtliche Vorgaben sind damit eine typische Quelle.",
   "Falsch: Hier sind Ursache und Wirkung vertauscht: Die Bausteinsicht ist ein Ergebnis des Entwurfs, das die Qualitätsanforderungen erfüllen soll. Sie kann sie nicht begründen, sondern muss sich an ihnen messen lassen.",
   "Richtig: Geschäftsziele wie „Markteinführung in neuen Ländern“ führen z. B. zu Anforderungen an Skalierbarkeit, Mehrsprachigkeit oder Anpassbarkeit. Sie sind eine zentrale Quelle von Qualitätsanforderungen.",
   "Richtig: Stakeholder-Anliegen wie einfache Überwachung durch den Betrieb oder isolierte Testbarkeit für die QS sind eine Hauptquelle von Qualitätsanforderungen. Deshalb gehört die Stakeholder-Analyse früh ins Projekt.",
   "Falsch: Frameworks sind Lösungsbausteine oder allenfalls Randbedingungen. Qualitätsanforderungen sollen ihre Auswahl begründen, nicht aus ihnen folgen – sonst wird die Lösung zur Anforderung erklärt.",
   "Falsch: Das Vorgehensmodell bestimmt, wie im Projekt gearbeitet wird, nicht wie gut das Produkt sein muss. Scrum liefert keine Aussagen zu Verfügbarkeit, Sicherheit oder Performanz des Systems."
  ],
  "explanation": "Qualitätsanforderungen stammen aus Geschäftszielen, Stakeholder-Anliegen und rechtlichen bzw. regulatorischen Vorgaben. Fallen: Frameworks und Bausteinstruktur sind Lösungen bzw. Ergebnisse, keine Quellen; das Vorgehensmodell betrifft den Prozess, nicht das Produkt."
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
   "Falsch: Eine Datenbank kann Qualitäten wie Performanz oder Zuverlässigkeit beeinflussen. Die Vorgabe beschreibt aber kein WIE GUT, sondern ein WOMIT – sie legt ein Produkt fest, statt ein messbares Qualitätsziel zu formulieren.",
   "Falsch: Daten zu speichern mag eine Funktion sein, die Wahl eines bestimmten Produkts ist es nicht. Sie beschreibt keine fachliche Leistung des Systems für Nutzer, sondern ein vorgegebenes technisches Mittel.",
   "Richtig: Die Vorgabe legt eine Lösung fest und schränkt so den Lösungsraum ein. Vorgegebene Software-Infrastruktur wie Datenbanken, Frameworks oder Betriebssysteme zählt das Curriculum zu den technischen bzw. technologischen Randbedingungen.",
   "Falsch: Die Vorgabe kommt vom Kunden und ist für das Team nicht verhandelbar. Eine Architekturentscheidung trifft das Team selbst und wägt dabei Alternativen ab – hier gibt es nichts mehr abzuwägen."
  ],
  "explanation": "Eine extern vorgegebene Technologie ist eine technologische Randbedingung. Fallen: Dass sie Qualitäten oder die Persistenz berührt, macht sie weder zur Qualitäts- noch zur funktionalen Anforderung – und weil sie vorgegeben ist, ist sie auch keine eigene Architekturentscheidung."
 },
 {
  "id": "c2q19",
  "chapter": 2,
  "lz": "LZ 02-04",
  "r": "R1",
  "type": "multi",
  "q": "Aus welchen Teilen besteht ein Qualitätsszenario laut CPSA-F?",
  "options": [
   "Qualitätsmerkmal (z. B. Leistungseffizienz nach ISO 25010).",
   "Reaktion (z. B. Ergebnisliste wird angezeigt).",
   "Lösungstaktik (z. B. Caching).",
   "Kontext (z. B. unter Volllast).",
   "Messung (z. B. 95 % in unter 1 s).",
   "Stimulus (z. B. 1000 gleichzeitige Anfragen).",
   "Priorität (z. B. hoch)."
  ],
  "correct": [
   1,
   3,
   4,
   5
  ],
  "optExpl": [
   "Falsch: Das Qualitätsmerkmal ordnet die Anforderung in ein Qualitätsmodell ein, ist aber kein Bestandteil des Szenarios. Das Szenario konkretisiert das Merkmal erst über Kontext, Stimulus, Reaktion und Messung.",
   "Richtig: Die Reaktion beschreibt, was das System auf den Stimulus hin tut, etwa die Ergebnisliste anzeigen. Sie ist ein fester Bestandteil jedes Qualitätsszenarios.",
   "Falsch: Ein Szenario beschreibt die Anforderung, nicht die Lösung. Ob Caching oder eine andere Taktik eingesetzt wird, entscheidet erst der Entwurf; sonst würde die Lösung vorweggenommen.",
   "Richtig: Der Kontext beschreibt den Betriebszustand bzw. die Umgebung, in der das Szenario gilt, etwa Volllast oder Normalbetrieb. Dasselbe Verhalten kann je nach Kontext unterschiedlich gefordert sein.",
   "Richtig: Erst die Messung macht das Szenario überprüfbar, etwa „95 % in unter 1 s“. Ohne messbares Kriterium bliebe die Anforderung vage und ließe sich nicht testen oder bewerten.",
   "Richtig: Der Stimulus ist der Auslöser, auf den das System reagieren muss, etwa 1000 gleichzeitige Anfragen oder ein Änderungswunsch. Er gehört zu den Kernteilen eines Szenarios.",
   "Falsch: Die Priorität sagt, wie wichtig die Anforderung ist, nicht, wie sie überprüft wird. Sie wird oft zusätzlich erfasst, gehört aber nicht zu den Bestandteilen des Szenarios."
  ],
  "explanation": "Ein Qualitätsszenario besteht aus Kontext, Stimulus, Reaktion und Messung. Fallen: Lösungstaktik, Qualitätsmerkmal und Priorität gehören nicht dazu – das Szenario beschreibt die Anforderung und ihr Prüfkriterium, nicht ihre Umsetzung, Einordnung oder Wichtigkeit."
 },
 {
  "id": "c2q20",
  "chapter": 2,
  "lz": "LZ 02-01",
  "r": "R1",
  "type": "multi",
  "q": "Der Fachbereich will schnelle Features, der Betrieb maximale Stabilität – beide Ziele sind unvereinbar. Wie gehen Architekt:innen angemessen vor?",
  "options": [
   "Den Konflikt nach technischer Machbarkeit selbst entscheiden.",
   "Beide Ziele per Konfiguration maximal erfüllbar machen.",
   "Eine begründete Priorisierung oder einen Kompromiss dokumentieren.",
   "Die relevanten Stakeholder in die Lösung einbeziehen.",
   "Im Konflikt die kurzfristigen Projektziele vorziehen, weil sie messbar sind.",
   "Die widersprüchlichen Anliegen transparent machen."
  ],
  "correct": [
   2,
   3,
   5
  ],
  "optExpl": [
   "Falsch: Genau die Prüfungsfalle: Es geht um widersprüchliche Ziele von Stakeholdern, nicht nur um Technik. Architekt:innen zeigen Konsequenzen und Optionen auf, entscheiden solche Zielkonflikte aber nicht allein.",
   "Falsch: Klingt elegant, verschiebt den Konflikt aber nur in die Konfiguration. Er wird mit zusätzlicher Komplexität und ungetesteten Kombinationen erkauft, und am Ende muss trotzdem jemand priorisieren.",
   "Richtig: Eine dokumentierte, begründete Priorisierung oder ein Kompromiss bleibt nachvollziehbar, etwa in einem ADR. Das ist wichtig, wenn sich Rahmenbedingungen ändern und die Entscheidung neu bewertet werden muss.",
   "Richtig: Laut Curriculum werden Zielkonflikte gemeinsam mit den relevanten Stakeholdern gelöst, nicht im Alleingang. Fachbereich und Betrieb müssen die Abwägung mittragen, damit sie später akzeptiert wird.",
   "Falsch: Konflikte zwischen kurz- und langfristigen Zielen sind im Einzelfall abzuwägen, nicht pauschal zu entscheiden. Wer kurzfristige Ziele immer vorzieht, schädigt etwa die Wartbarkeit dauerhaft und baut technische Schulden auf.",
   "Richtig: Erst ein sichtbarer Konflikt lässt sich bewusst entscheiden. Werden die widersprüchlichen Anliegen verdeckt, bricht der Konflikt später unkontrolliert auf, etwa als Eskalation im Betrieb."
  ],
  "explanation": "Stakeholder-Konflikte macht man transparent, löst sie gemeinsam mit den Beteiligten und dokumentiert die begründete Entscheidung. Fallen: Architekt:innen entscheiden nicht allein nach Technik, Konfigurierbarkeit löst keinen Zielkonflikt, und pauschale Regeln ersetzen keine Abwägung."
 },
 {
  "id": "c2q21",
  "chapter": 2,
  "lz": "LZ 02-03",
  "r": "R3",
  "extra": true,
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
   "Richtig: In der Fassung von 2023 ist Safety (Betriebssicherheit, Schutz vor Gefährdung von Menschen und Umwelt) ein eigenständiges Hauptmerkmal neben Security. Das ist eine der wichtigsten Neuerungen.",
   "Falsch: Security bleibt ein eigenes Hauptmerkmal mit Untermerkmalen wie Vertraulichkeit, Integrität und Authentizität. Die Verwechslung mit Zuverlässigkeit liegt nahe, ist aber falsch.",
   "Falsch: Naheliegend, weil z. B. IREB Funktion und Qualität trennt. ISO 25010 führt Funktionale Eignung aber weiterhin als Hauptmerkmal, also wie vollständig und korrekt Funktionen erbracht werden.",
   "Falsch: Das Merkmal wurde umbenannt und heißt nun Interaktionsfähigkeit (Interaction Capability). Die Inhalte sind ähnlich, der alte Name Usability gilt in der 2023-Fassung aber nicht mehr."
  ],
  "explanation": "Mit der Revision 2023 kam Safety als Hauptmerkmal hinzu, und Usability heißt jetzt Interaktionsfähigkeit. Fallen: Security und Funktionale Eignung bestehen weiterhin als eigenständige Hauptmerkmale fort."
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
   "Falsch: Stakeholder und ihre Anliegen ändern sich im Projektverlauf, etwa durch neue Partner, Reorganisationen oder neue Regulierung. Die Stakeholderanalyse wird daher regelmäßig wiederholt und nicht einmalig abgeschlossen.",
   "Richtig: Betrieb, Support oder Qualitätssicherung nutzen das System nicht fachlich, haben aber Anliegen wie Monitoring, Deployment oder Fehleranalyse, die die Architektur prägen. Werden sie übersehen, fehlen wichtige Qualitätsanforderungen.",
   "Richtig: Jeder Stakeholder kennt weitere Beteiligte (Schneeballprinzip). So findet man auch Rollen, die in keiner Liste stehen, etwa externe Dienstleister oder Fachabteilungen, die Daten liefern.",
   "Falsch: Budgetverantwortung sagt nichts darüber aus, wer architekturrelevante Anliegen hat. Gerade Betrieb, Entwickler:innen oder Behörden haben oft keinen Budgeteinfluss, stellen aber entscheidende Anforderungen.",
   "Falsch: Das Organigramm ist ein guter Startpunkt, aber unvollständig. Externe Partner, Kunden, Behörden oder Nachbarsysteme stehen dort nicht, und Rollen im Organigramm entsprechen nicht immer den tatsächlichen Anliegen."
  ],
  "explanation": "Stakeholder findet man durch Nachfragen bei bekannten Beteiligten und indem man auch indirekt Betroffene wie Betrieb oder Support einbezieht. Fallen: Organigramm, Budgetverantwortung oder eine einmalige Erhebung liefern kein vollständiges Bild – die Analyse ist fortlaufend."
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
   "Die Systemstruktur entsteht unabhängig von der Organisation allein aus den technischen Anforderungen."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Das ist Conways Gesetz: Die Struktur eines Systems spiegelt tendenziell die Kommunikationsstrukturen der entwickelnden Organisation wider. Bausteingrenzen entlang von Abteilungsgrenzen sind ein typisches Symptom dafür.",
   "Falsch: Das beschreibt Lehmans Gesetze der Softwareevolution: Genutzte Systeme müssen sich laufend anpassen, sonst sinkt ihr Nutzen. Mit dem Zusammenhang zwischen Organisation und Systemstruktur hat das nichts zu tun.",
   "Falsch: Das ist Brooks' Law aus „The Mythical Man-Month“ über Projektpersonal: Neue Leute brauchen Einarbeitung und erhöhen den Kommunikationsaufwand. Conways Gesetz betrifft dagegen die Systemstruktur.",
   "Falsch: Conways Gesetz sagt gerade das Gegenteil: Die Systemstruktur entsteht nicht losgelöst, sondern spiegelt tendenziell die Kommunikationsstrukturen der Organisation. Die bewusste Steuerung in der Gegenrichtung – Teams passend zur gewünschten Architektur schneiden – heißt Inverse Conway Maneuver."
  ],
  "explanation": "Conways Gesetz: Die Kommunikationsstruktur der Organisation prägt die Systemstruktur. Fallen: die Annahme, die Systemstruktur sei von der Organisation unabhängig, sowie die Verwechslung mit Brooks' Law und Lehmans Gesetzen. Die bewusste Steuerung in der Gegenrichtung heißt Inverse Conway Maneuver."
 },
 {
  "id": "c2q24",
  "chapter": 2,
  "lz": "LZ 02-05",
  "r": "R1",
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
   "Falsch: Implizite Anforderungen gelten auch ungeschrieben: Nutzer erwarten sie trotzdem und beschweren sich, wenn sie fehlen. Das Aufschreiben macht sie explizit und prüfbar, aber nicht erst gültig.",
   "Falsch: Architekt:innen sollen Annahmen und Erwartungen aktiv erfragen und explizit machen, statt auf vollständige Vorgaben zu hoffen. Die Klärung ist eine gemeinsame Aufgabe, nicht allein die des Auftraggebers.",
   "Falsch: Umgekehrt: Gerade Qualitäten wie Sicherheit, Antwortzeit oder Bedienbarkeit bleiben oft unausgesprochen, weil sie als selbstverständlich gelten. Funktionen werden dagegen meist explizit genannt.",
   "Richtig: Was für Stakeholder selbstverständlich ist, erwähnen sie nicht – es gilt trotzdem. Beispiel: Niemand fordert, dass eine Suche nicht mehrere Minuten braucht, aber jeder erwartet es.",
   "Richtig: Das Curriculum betont: Implizite Annahmen werden von verschiedenen Beteiligten unterschiedlich interpretiert. Ohne Klärung baut das Team etwas anderes, als die Nutzer erwarten – die Beschwerden nach dem Go-live sind die Folge."
  ],
  "explanation": "Implizite Anforderungen beruhen auf Selbstverständlichkeiten, betreffen oft Qualitäten und führen leicht zu Missverständnissen. Fallen: Sie gelten auch ungeschrieben, und sie explizit zu machen ist auch Aufgabe der Architekt:innen, nicht nur des Auftraggebers."
 },
 {
  "id": "c2q25",
  "chapter": 2,
  "lz": "LZ 02-01",
  "r": "R3",
  "extra": true,
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
   "Falsch: Die Art des Konflikts hängt vom Gegenstand ab, nicht davon, wer beteiligt ist. Auch zwei IT-Teams können unvereinbare Ziele haben, und Fachbereiche können über Fakten streiten.",
   "Richtig: Ein Sachkonflikt dreht sich um Fakten oder den besten Lösungsweg und lässt sich oft durch Information, Messung oder Prototyp klären. Ein Interessenkonflikt beruht auf unvereinbaren Zielen und braucht Abwägung oder Kompromiss.",
   "Falsch: Das gilt für Sachkonflikte. Unterschiedliche Ziele – etwa Kostensenkung gegen maximale Verfügbarkeit – bleiben auch mit mehr Fakten bestehen und müssen ausgehandelt werden.",
   "Falsch: Die Begriffe sind genau vertauscht. Unvereinbare Ziele kennzeichnen den Interessenkonflikt, Streit um Fakten oder Lösungswege den Sachkonflikt."
  ],
  "explanation": "Sachkonflikte drehen sich um Fakten oder Lösungswege und lassen sich oft durch Information klären; Interessenkonflikte beruhen auf unvereinbaren Zielen und brauchen Abwägung. Fallen: Mehr Fakten lösen keinen Interessenkonflikt, und die Beteiligten bestimmen nicht die Konfliktart."
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
   "Sie müssen vom Auftraggeber schriftlich vorgegeben sein, um zu gelten.",
   "Randbedingungen müssen im Entwurf nie hinterfragt werden, da sie fest vorgegeben sind.",
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
   "Richtig: Randbedingungen wie Freigabeprozesse, Budget oder Teamverfügbarkeit prägen nicht nur die Lösung, sondern auch den Entwicklungs- und Architekturprozess selbst (R2-Aspekt im Curriculum).",
   "Falsch: Auch ungeschriebene Vorgaben wie Qualifikation des Teams, Unternehmenskultur oder etablierte Betriebsplattformen wirken als Randbedingung. Schriftform ist keine Voraussetzung.",
   "Falsch: Anforderungen und Randbedingungen zu klären und zu hinterfragen gehört zur Architekturarbeit. Randbedingungen sind nicht immer unverrückbar, sie können verhandelbar sein oder sich ändern.",
   "Falsch: Begriffsverwechslung: Qualitätsanforderungen beschreiben gewünschte Eigenschaften des Produkts. Randbedingungen schränken dagegen den Lösungsraum ein, etwa vorgegebene Technologien oder Gesetze.",
   "Richtig: Das Curriculum unterscheidet technologische, organisatorische und regulatorische Randbedingungen und nennt Trends als weiteren Einflussfaktor. Beispiele: Zielplattform, Teamstruktur, DSGVO.",
   "Richtig: Randbedingungen sind nicht unveränderlich. Eine neue Datenschutzvorgabe kann etwa die Wahl der Cloud-Region kippen; solche Folgen sollen Architekt:innen erkennen und erläutern können."
  ],
  "explanation": "Randbedingungen sind technologisch, organisatorisch oder regulatorisch, wirken auch auf den Prozess und können sich ändern. Fallen: Sie müssen nicht schriftlich vorliegen, sind keine besonders verbindlichen Qualitätsanforderungen und dürfen im Entwurf durchaus hinterfragt werden."
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
   "Richtig: Das Curriculum zählt neben Benutzung und Nachrichtenaustausch ausdrücklich auch Vererbung, Erzeugung, Komposition und zeitliche Kopplung als Arten der Kopplung auf. Eine Unterklasse hängt etwa stark von ihrer Basisklasse ab.",
   "Falsch: Vertauscht: Efferent heißt ausgehend, also dieser Baustein nutzt andere. Wenn andere Bausteine diesen nutzen, sind das eingehende, also afferente Abhängigkeiten.",
   "Falsch: Laut Curriculum reduziert dynamische Kopplung über Events die Kopplung nicht notwendigerweise. Nachrichtenformat und fachliche Bedeutung der Events bleiben gemeinsame Abhängigkeiten von Sender und Empfänger.",
   "Falsch: Das beschreibt Kopplung, also Abhängigkeiten zwischen Bausteinen. Kohäsion betrifft dagegen den inneren Zusammenhalt: wie gut die Elemente innerhalb eines Bausteins zusammengehören.",
   "Richtig: Was fachlich oder technisch zusammengehört, liegt zusammen, und der Baustein verfolgt einen klar umrissenen Zweck. Genau das bedeutet hohe Kohäsion; sie erleichtert Verständnis und gezielte Änderungen.",
   "Richtig: Afferent heißt eingehend: Viele andere Bausteine hängen von diesem ab. Jede Änderung an seiner Schnittstelle wirkt sich deshalb breit aus und ist entsprechend riskant und abstimmungsintensiv."
  ],
  "explanation": "Kopplung beschreibt Beziehungen zwischen Bausteinen, Kohäsion den inneren Zusammenhalt eines Bausteins; Vererbung und Erzeugung sind ebenfalls Kopplung. Fallen: efferent und afferent vertauschen und annehmen, Events würden die fachliche Kopplung beseitigen."
 },
 {
  "id": "c3q2",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R1",
  "type": "multi",
  "q": "In einem Code-Review fällt auf, dass mehrere Bausteine direkt auf die interne Datenstruktur eines Preisberechnungsmoduls zugreifen. Die Architektin erinnert an das Geheimnisprinzip nach Parnas. Welche Aussagen beschreiben das Geheimnisprinzip (Information Hiding) nach Parnas zutreffend?",
  "options": [
   "Veränderliche Entwurfsentscheidungen hinter einer Schnittstelle verbergen.",
   "Information Hiding bedeutet, den Quellcode vor Außenstehenden geheim zu halten.",
   "Das Speicherformat ändern, ohne die Nutzer anpassen zu müssen.",
   "Interna offenlegen ist zulässig, sofern sie dokumentiert sind.",
   "Nutzer:innen müssen nur den Vertrag der Schnittstelle kennen, nicht die verborgenen Entscheidungen.",
   "Daten und die Operationen darauf zu einer Einheit bündeln.",
   "Ziel: Voraussichtliche Änderungen bleiben lokal in einem Baustein."
  ],
  "correct": [
   0,
   2,
   4,
   6
  ],
  "optExpl": [
   "Richtig: Das ist der Kern des Prinzips nach Parnas: Entwurfsentscheidungen, die sich wahrscheinlich ändern, werden als „Geheimnis“ eines Bausteins hinter einer stabilen Schnittstelle verborgen. Zerlegt wird also entlang erwarteter Änderungen.",
   "Falsch: Es geht nicht um Geheimhaltung von Code, sondern darum, Entwurfsentscheidungen hinter einer Schnittstelle zu verbergen, damit Nutzer nicht von ihnen abhängen.",
   "Richtig: Ein typisches Beispiel: Das Speicherformat (etwa CSV statt XML oder eine andere Tabellenstruktur) ist ein verborgenes Geheimnis des Bausteins. Nach außen sichtbar ist nur die Schnittstelle, daher bleiben Nutzer bei einem Formatwechsel unberührt.",
   "Falsch: Dokumentation ändert nichts daran, dass Nutzer sich an offengelegte Interna koppeln und bei deren Änderung angepasst werden müssen. Genau diese Kopplung soll Information Hiding verhindern; gut dokumentierte Interna bleiben Interna.",
   "Richtig: Was hinter der Schnittstelle liegt, darf sich ändern. Nutzer verlassen sich auf den Vertrag, deshalb bleiben Änderungen lokal.",
   "Falsch: Das beschreibt Kapselung – das sprachliche Mittel, mit dem man Information Hiding umsetzen kann, nicht das Prinzip selbst. Man kann Daten und Operationen bündeln und trotzdem über öffentliche Getter alle Interna preisgeben.",
   "Richtig: Ziel von Information Hiding ist lokale Änderbarkeit: Voraussichtliche Änderungen betreffen nur einen Baustein, dessen Nutzer unberührt bleiben. Das senkt Änderungsaufwand und Risiko und fördert lose Kopplung."
  ],
  "explanation": "Information Hiding verbirgt veränderliche Entwurfsentscheidungen hinter stabilen Schnittstellen, damit Änderungen lokal bleiben. Fallen: die Verwechslung mit Kapselung, die nur das Mittel dazu ist, und die Annahme, dokumentierte Interna dürften offengelegt werden."
 },
 {
  "id": "c3q4",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "multi",
  "q": "Ein Team baut eine Verwaltungsanwendung für ein Versicherungsunternehmen und diskutiert, ob es die Anwendung nach dem Muster der Schichtenarchitektur strukturiert. Im Gespräch fallen unterschiedliche Aussagen zu Zweck, Regeln und Nebenwirkungen des Musters. Welche Aussagen zur Schichtenarchitektur (Layers) treffen zu?",
  "options": [
   "In der strikten (closed) Variante darf eine Schicht eine tieferliegende Schicht überspringen, wenn das die Performance verbessert.",
   "In der offenen (relaxed) Variante darf eine Schicht auch weiter unten liegende Schichten direkt nutzen.",
   "Eine tiefere Schicht darf höhere Schichten über eine von ihr selbst definierte Callback-Schnittstelle benachrichtigen, ohne die Schichtung zu verletzen.",
   "Schichten entsprechen typischerweise eigenen Tiers, daher bringt eine zusätzliche Schicht zusätzliche Netzwerkkommunikation mit sich.",
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
   "Falsch: Das Überspringen von Schichten ist gerade das Merkmal der offenen (relaxed) Schichtung. In der strikten Variante darf eine Schicht nur die unmittelbar darunterliegende nutzen – auch Performancegründe ändern daran nichts, sonst wäre es keine strikte Schichtung mehr.",
   "Richtig: Offene Schichtung erlaubt das Überspringen von Schichten, die Abhängigkeiten zeigen aber weiterhin nur nach unten. Man gewinnt Performance und Einfachheit, verliert aber etwas Austauschbarkeit, weil höhere Schichten mehr tiefere kennen.",
   "Richtig: Die Callback-Schnittstelle gehört zur tieferen Schicht, die höhere implementiert sie. Die Abhängigkeit im Code zeigt also weiter nach unten, nur der Aufruf läuft zur Laufzeit nach oben – etwa beim Observer-Muster.",
   "Falsch: Schichten sind eine logische Gliederung, Tiers eine physische Verteilung. Mehrere Schichten können problemlos im selben Prozess laufen – eine zusätzliche Schicht bedeutet daher nicht automatisch zusätzliche Netzwerkaufrufe.",
   "Richtig: Schichtung bedeutet, dass Abhängigkeiten nur von oben nach unten zeigen. Kennt eine tiefere Schicht eine höhere direkt, entsteht eine Rückwärtsabhängigkeit, oft sogar ein Zyklus, der die Schichtung verletzt.",
   "Richtig: Jede Schicht fügt eine Indirektion hinzu, durch die Aufrufe und Daten durchgereicht werden. Das kann Laufzeit kosten – ein typischer Trade-off zugunsten besserer Änderbarkeit und Verständlichkeit."
  ],
  "explanation": "Schichten: Abhängigkeiten zeigen nur nach unten; Callbacks über eine Schnittstelle der tieferen Schicht sind erlaubt. Strikt = nur die direkt darunterliegende Schicht, offen = Überspringen erlaubt. Fallen: Schichten sind logisch, nicht jede ist ein eigenes Tier."
 },
 {
  "id": "c3q5",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R3",
  "extra": true,
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
   "Richtig: Das Curriculum nennt Hexagonal, Onion und Clean Architecture als Synonyme bzw. eng verwandte Varianten von Ports and Adapters. Gemeinsam ist allen: Der fachliche Kern steht in der Mitte, Technik hängt von ihm ab, nicht umgekehrt.",
   "Richtig: Ports sind technologieneutrale Schnittstellen, die der Fachkern aus seiner eigenen Sicht vorgibt, etwa ein Interface „Bestellungen speichern“. So bleibt die Fachlogik frei von Datenbank- oder UI-Details.",
   "Falsch: Ruft der Fachkern Adapterklassen direkt auf, hängt die Fachlogik von der Technik ab und das Muster ist ausgehebelt. Die Abhängigkeit zeigt vom Adapter zum Port (Dependency Inversion), nicht umgekehrt.",
   "Richtig: Adapter sind die konkreten, technologiespezifischen Anbindungen, etwa ein JDBC-Repository oder ein REST-Controller. Sie implementieren bzw. nutzen die Ports und lassen sich austauschen, ohne den Fachkern zu ändern.",
   "Falsch: Ports and Adapters strukturiert die Abhängigkeiten im Inneren einer Anwendung. Es funktioniert genauso in einem Monolithen wie in einem einzelnen Microservice; eine verteilte Betriebsform ist keine Voraussetzung.",
   "Falsch: Verwechslung von Port und Adapter: Die konkrete JDBC-Implementierung ist ein Adapter. Der Port ist die abstrakte, technikfreie Schnittstelle, die der Fachkern definiert."
  ],
  "explanation": "Bei Ports and Adapters definiert der Fachkern die Ports, austauschbare Adapter binden Technik wie Datenbank oder UI an; Onion und Clean Architecture sind verwandte Varianten. Fallen: Port und Adapter vertauschen, Abhängigkeit vom Kern zur Technik und die Annahme, das Muster erfordere Microservices."
 },
 {
  "id": "c3q6",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "multi",
  "q": "Ein Onlinehändler will sein monolithisches System in Microservices zerlegen. Welche Aussagen zu Microservices treffen typischerweise zu?",
  "options": [
   "Der Gesamtaufwand für Test und Betrieb sinkt.",
   "Transaktionen über Services sind so einfach wie im Monolithen.",
   "Jeder Service ist unabhängig deploybar.",
   "Die betriebliche Komplexität steigt.",
   "Je Schicht ein Service: UI, Logik, Daten.",
   "Jeder Service verwaltet seine eigenen Daten.",
   "Teams können Services unabhängig voneinander weiterentwickeln.",
   "Services teilen sich zur einfacheren Konsistenz eine zentrale Datenbank."
  ],
  "correct": [
   2,
   3,
   5,
   6
  ],
  "optExpl": [
   "Falsch: Einzelne Services sind kleiner und überschaubarer, das Gesamtsystem wird aber aufwendiger: Integrationstests über Servicegrenzen, Deployment-Pipelines und Monitoring vieler Prozesse kosten zusätzlich.",
   "Falsch: Verteilte Transaktionen sind deutlich schwieriger als lokale. Meist verzichtet man auf sie und arbeitet mit eventueller Konsistenz, Sagas oder Ausgleichsaktionen statt einer gemeinsamen Datenbanktransaktion.",
   "Richtig: Unabhängiges Deployment ist ein Kernmerkmal von Microservices: Ein Service kann ausgeliefert werden, ohne die anderen neu zu deployen. Das ermöglicht autonome Teams und kurze Release-Zyklen.",
   "Richtig: Verteilung bringt Netzwerkfehler, Latenzen, verteiltes Monitoring und Tracing sowie neue Ausfallszenarien mit sich. Diese betriebliche Komplexität hat ein Monolith so nicht.",
   "Falsch: Microservices werden fachlich geschnitten, etwa nach Bounded Contexts, nicht nach technischen Schichten. Ein Schichtenschnitt erzeugt eng gekoppelte Services, die bei jeder Fachänderung gemeinsam angepasst werden müssen.",
   "Richtig: Jeder Service hält seine Daten hinter der eigenen Schnittstelle. Das verhindert versteckte Kopplung über eine gemeinsame Datenbank und erlaubt, Schema und Technologie unabhängig zu ändern.",
   "Richtig: Fachlich geschnittene Services mit eigener Schnittstelle erlauben autonomen Teams, ihren Service unabhängig zu ändern und auszuliefern, solange die Schnittstelle stabil bleibt.",
   "Falsch: Eine gemeinsame Datenbank koppelt die Services versteckt über das Schema und widerspricht dem Prinzip, dass jeder Service seine eigenen Daten verwaltet. Konsistenz wird stattdessen über Schnittstellen und Ereignisse gelöst."
  ],
  "explanation": "Microservices sind fachlich geschnitten, unabhängig deploybar und verwalten eigene Daten – um den Preis höherer betrieblicher Komplexität. Fallen: Gesamtaufwand für Test und Betrieb sinkt nicht, Konsistenz über Servicegrenzen ist schwierig, und ein Schnitt nach Schichten ist kein Microservice-Schnitt."
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
   "Richtig: Leicht übersehen: „Erwarte Fehler“ als Verallgemeinerung des Robustheitsgrundsatzes (Postel's Law) steht ausdrücklich im Curriculum. Systeme sollen mit fehlerhaften Eingaben und Ausfällen rechnen und robust darauf reagieren.",
   "Falsch: Klingt nach Prinzip, ist aber keins des Curriculums. Wiederverwendung um jeden Preis, besonders über Fachgrenzen hinweg, erhöht oft die Kopplung, weil viele Bausteine vom selben gemeinsamen Code abhängen.",
   "Richtig: Das Offen/geschlossen-Prinzip gehört als Teil der Modularisierung zu den R1-Inhalten. Bausteine sollen offen für Erweiterungen, aber geschlossen gegenüber Änderungen sein, etwa durch Erweiterung über Schnittstellen.",
   "Richtig: Abstraktion ist ein grundlegendes Entwurfsprinzip: zweckmäßige Verallgemeinerungen erarbeiten und Details verbergen. Bausteine sollen von Abstraktionen statt von konkreten Implementierungen abhängen.",
   "Falsch: „Konfiguration statt Code“ ist kein Entwurfsprinzip des Curriculums. Übermäßige Konfigurierbarkeit erhöht sogar die Komplexität und die Zahl ungetesteter Kombinationen.",
   "Richtig: Konzeptionelle Integrität ist ein ausdrücklich genanntes Prinzip: Gleichartige Probleme werden im ganzen System gleichartig gelöst. Das macht die Architektur verständlicher und leichter wartbar."
  ],
  "explanation": "Das Curriculum nennt u. a. Abstraktion, Modularisierung inklusive OCP, konzeptionelle Integrität und „Erwarte Fehler“ als Entwurfsprinzipien. Fallen: Maximale Wiederverwendung und „Konfiguration statt Code“ klingen nach Best Practice, sind aber keine dieser Prinzipien."
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
   "Richtig: Zugriffsschutz betrifft nahezu alle Bausteine und Schnittstellen. Ohne einheitliches Sicherheitskonzept würde jeder Baustein Authentifizierung und Autorisierung anders umsetzen, mit Lücken als Folge. Das Curriculum nennt Sicherheit nicht namentlich, seine Liste der Querschnittsthemen ist aber nur beispielhaft („unter anderem“); Authentifizierung und Autorisierung sind ein klassisches weiteres Beispiel.",
   "Falsch: Dass mehrere Dialoge denselben Wert anzeigen, macht ihn nicht querschnittlich. Die Versandkostenberechnung ist Fachlogik und gehört in einen fachlichen Baustein, den die Dialoge nutzen. Das Curriculum nennt als Querschnittsthemen technische Belange wie Persistenz, Kommunikation, GUI, Fehlerbehandlung, Nebenläufigkeit und Energieeffizienz, keine fachlichen Funktionen.",
   "Richtig: Threading- und Sperrkonzepte müssen systemweit einheitlich sein. Behandelt jeder Baustein Nebenläufigkeit anders, drohen Deadlocks, Race Conditions und inkonsistente Daten.",
   "Falsch: Das betrifft nur einen Baustein und ist fachliche Logik des Bestellmoduls. Querschnittlich wäre erst ein systemweites Validierungskonzept, das festlegt, wie und wo alle Bausteine validieren.",
   "Richtig: Das Curriculum nennt Energieeffizienz ausdrücklich als Querschnittsthema. Energieverbrauch entsteht durch Entscheidungen in vielen Bausteinen, etwa Polling, Caching oder Datenübertragung.",
   "Richtig: Fehler entstehen in allen Bausteinen. Ein einheitliches Konzept für Fehlerbehandlung verhindert, dass jeder Baustein anders reagiert, protokolliert oder Fehler an Aufrufer weitergibt."
  ],
  "explanation": "Querschnittsthemen betreffen viele Bausteine; das Curriculum nennt unter anderem Persistenz, Kommunikation, GUI, Fehlerbehandlung, Nebenläufigkeit und Energieeffizienz, Sicherheit ist ein weiteres klassisches Beispiel. Falle: Fachlogik wie Versandkosten oder Bestellvalidierung bleibt fachlich, auch wenn ihr Ergebnis an mehreren Stellen angezeigt wird."
 },
 {
  "id": "c3q9",
  "chapter": 3,
  "lz": "LZ 03-03",
  "r": "R1",
  "type": "multi",
  "q": "Sie sollen eine vorhandene Zahlungsbibliothek und einen Altsystem-Kern zu größeren Strukturen kombinieren. Welche Aussagen treffen zu?",
  "options": [
   "Sichtenbasiert: Die vorhandenen Teile bilden die Verteilungssicht.",
   "Bottom-up: Vorhandenes zu größeren Einheiten zusammensetzen.",
   "Bottom-up bietet sich an, wenn vorhandene Bausteine wiederverwendet werden müssen.",
   "Bottom-up; danach darf nicht mehr top-down gearbeitet werden.",
   "Top-down verfeinert ein Gesamtbild schrittweise und passt weniger, wenn viele Teile bereits feststehen.",
   "Top-down: vorgegebene Teile schrittweise verfeinern."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Falsch: Bibliothek und Altsystem-Kern sind Bausteine, nicht die Verteilungssicht; diese zeigt Infrastruktur und die Zuordnung von Artefakten zu Knoten. Außerdem beschreibt eine Sicht keine Entwurfsrichtung wie top-down oder bottom-up.",
   "Richtig: Bottom-up setzt vorhandene oder zuerst entworfene Teile zu größeren Einheiten zusammen. Das eignet sich besonders, wenn viel Bestehendes wie Bibliotheken oder Altsysteme genutzt werden muss.",
   "Richtig: Wenn Bibliotheken oder ein Altsystem-Kern feststehen, ist es natürlich, von diesen Teilen aus zu größeren Einheiten aufzubauen.",
   "Falsch: Der erste Teil stimmt, der Zusatz nicht: In der Praxis werden top-down und bottom-up kombiniert und iterativ gewechselt. Eine Richtung schließt die andere nicht aus; das Curriculum betont dieses Wechselspiel.",
   "Richtig: Top-down geht vom Ganzen aus. Sind wesentliche Teile vorgegeben, muss der Entwurf diese einbeziehen, statt sie erst durch Zerlegung zu erzeugen.",
   "Falsch: Top-down zerlegt das Ganze schrittweise in Teile. Bereits vorhandene Teile zu größeren Strukturen zusammenzusetzen, ist die umgekehrte Richtung; die Formulierung „vorgegebene Teile verfeinern“ verdreht das."
  ],
  "explanation": "Aus Vorhandenem größere Einheiten zusammensetzen ist Bottom-up, das Ganze schrittweise zerlegen ist Top-down. Fallen: Man muss sich nicht dauerhaft auf eine Richtung festlegen – beide werden kombiniert –, und Entwurfsrichtungen sind keine Architektursichten."
 },
 {
  "id": "c3q10",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R2",
  "type": "multi",
  "q": "In einem Architekturworkshop für ein wachsendes Bestellsystem streitet das Team darüber, wie viel Abstraktion und Modularisierung angemessen ist. Einige befürchten Überengineering, andere wollen früh vorsorgen. Welche Aussagen zum Nutzen von Abstraktion und Modularisierung im Entwurf treffen zu?",
  "options": [
   "Die Zahl der Schnittstellen sinkt, da Bausteine mehr selbst erledigen.",
   "Unnötige Abstraktionen können die Verständlichkeit senken.",
   "Sie machen Komplexität beherrschbar.",
   "Zusätzliche Schichten erhöhen die Änderbarkeit.",
   "Modularisierung erlaubt, Teile getrennt zu verstehen und zu ändern.",
   "Mehr Abstraktion senkt den Aufwand, den Code zu verstehen.",
   "Implementierungen lassen sich hinter Schnittstellen austauschen."
  ],
  "correct": [
   1,
   2,
   4,
   6
  ],
  "optExpl": [
   "Falsch: Umgekehrt: Modularisierung schafft gerade explizite Schnittstellen zwischen den Bausteinen. Gerade diese klar definierten Schnittstellen sind der Gewinn, weil sie Abhängigkeiten sichtbar und kontrollierbar machen.",
   "Richtig: Das Curriculum nennt diese Grenze ausdrücklich: Zu viele oder unnötige Abstraktionen machen ein System schwerer verständlich. Jede Indirektion muss man beim Lesen erst auflösen, ohne dass sie einen Nutzen bringt.",
   "Richtig: Die Zerlegung in Bausteine mit klaren Schnittstellen erlaubt, Teile getrennt zu verstehen, zu entwickeln und zu ändern. So wird ein großes System in überschaubare Einheiten aufgeteilt – das ist der Kernnutzen.",
   "Falsch: Übergeneralisierung: Eine Schicht ohne konkreten Bedarf kostet Aufwand, Performanz und Verständlichkeit, ohne Änderungen zu erleichtern. Abstraktion lohnt sich nur dort, wo tatsächlich Variabilität erwartet wird.",
   "Richtig: Überschaubare Module mit klaren Grenzen begrenzen, was man gleichzeitig im Kopf behalten muss, und halten Änderungen lokal.",
   "Falsch: Abstraktionen kosten Verständnisaufwand, wenn sie keinen konkreten Bedarf erfüllen. Sie sind ein Mittel, nicht automatisch ein Gewinn.",
   "Richtig: Schnittstellen sind Abstraktionen: Nutzer hängen nur vom Vertrag ab, nicht von der konkreten Implementierung. Dadurch lässt sich z. B. eine Datenbankanbindung austauschen, ohne die Aufrufer zu ändern."
  ],
  "explanation": "Abstraktion und Modularisierung machen Komplexität beherrschbar und Implementierungen hinter Schnittstellen austauschbar. Fallen: Mehr Abstraktion bzw. mehr Schichten sind nicht automatisch besser, und Modularisierung erzeugt Schnittstellen statt sie einzusparen."
 },
 {
  "id": "c3q11",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "multi",
  "q": "Für welche Szenarien eignet sich das Muster Pipes and Filters?",
  "options": [
   "Fachmodule lösen ein Problem über einen gemeinsamen Wissensspeicher.",
   "ETL-Strecke: importieren, bereinigen, anreichern, exportieren.",
   "Assistent, in dem Nutzer frei zwischen Schritten springen.",
   "Stufenweise Verarbeitung von Logdaten (parsen, filtern, aggregieren).",
   "Getrennte Modelle für Schreib- und Lesezugriffe.",
   "Bildverarbeitungskette aus aufeinanderfolgenden Verarbeitungsschritten."
  ],
  "correct": [
   1,
   3,
   5
  ],
  "optExpl": [
   "Falsch: Ein gemeinsamer Wissensspeicher, an dem Fachmodule schrittweise ein Problem lösen, beschreibt das Blackboard-Muster. Filter in Pipes and Filters teilen gerade keinen gemeinsamen Zustand, sondern reichen Daten nur weiter.",
   "Richtig: Eine ETL-Strecke besteht aus unabhängigen Verarbeitungsschritten, die Daten der Reihe nach weiterreichen – ein klassischer Fall für Pipes and Filters. Filter lassen sich einzeln austauschen, neu kombinieren oder parallelisieren.",
   "Falsch: Interaktive Abläufe, in denen Nutzer frei zwischen Schritten springen, passen schlecht zu einer gerichteten Verarbeitungskette. Pipes and Filters setzt einen festen Datenfluss in eine Richtung voraus, ohne Rücksprünge.",
   "Richtig: Jede Stufe nimmt Daten entgegen, verarbeitet sie und gibt sie weiter. Das ist die typische Struktur einer Pipes-and-Filters-Verarbeitung.",
   "Falsch: Getrennte Modelle für Schreib- und Lesezugriffe beschreiben CQRS (Command Query Responsibility Segregation). Das ist ein anderes Muster mit anderem Ziel, etwa unabhängige Optimierung von Lesen und Schreiben.",
   "Richtig: Unabhängige Filter wie Skalieren, Schärfen oder Komprimieren lassen sich zu Ketten kombinieren und neu anordnen."
  ],
  "explanation": "Pipes and Filters passt zu gerichteten, mehrstufigen Verarbeitungsketten aus unabhängigen Filtern, etwa ETL-Strecken. Fallen: interaktive, frei verzweigende Abläufe sowie Verwechslungen mit Blackboard (gemeinsamer Speicher) oder CQRS (getrennte Lese-/Schreibmodelle)."
 },
 {
  "id": "c3q12",
  "chapter": 3,
  "lz": "LZ 03-07",
  "r": "R3",
  "extra": true,
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
   "Falsch: Asynchronität senkt nur die zeitliche Kopplung. Nachrichtenformat und fachliche Bedeutung bleiben gemeinsame Abhängigkeiten: Erwartet der Empfänger andere Daten, funktioniert das Zusammenspiel trotzdem nicht.",
   "Falsch: Vertauscht: Gleichzeitige Verfügbarkeit ist ein Merkmal synchroner Kommunikation. Asynchron kann der Sender eine Nachricht absetzen, auch wenn der Empfänger gerade nicht läuft, etwa über eine Warteschlange.",
   "Falsch: Lokal/entfernt und synchron/asynchron sind unabhängige Merkmale. Entfernte Aufrufe sind oft synchron (z. B. REST oder RPC), und auch lokal gibt es asynchrone Mechanismen wie Events oder Futures.",
   "Richtig: Synchron blockiert der Aufrufer, bis die Antwort da ist. Asynchron entkoppelt das Absenden zeitlich vom Verarbeiten: Der Aufrufer arbeitet weiter und erhält ein Ergebnis gegebenenfalls später, etwa per Callback."
  ],
  "explanation": "Synchron heißt: Der Aufrufer wartet blockierend auf die Antwort; asynchron entkoppelt Senden und Verarbeiten zeitlich. Fallen: Asynchronität beseitigt nicht die fachliche Abhängigkeit, erfordert keine gleichzeitige Verfügbarkeit und hat nichts mit lokal oder entfernt zu tun."
 },
 {
  "id": "c3q14",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R1",
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
   "Falsch: Gehört die Abstraktion zum implementierenden Technikmodul, hängt die Fachlogik weiterhin von diesem Modul ab. Die Abhängigkeitsrichtung bliebe unverändert, die beabsichtigte Umkehr fände also gar nicht statt.",
   "Richtig: Die nutzende Fachlogik definiert die Schnittstelle, etwa „Kundenablage“, nach ihrem eigenen Bedarf. Der DB-Adapter implementiert sie, sodass die Abhängigkeit von der Technik zur Fachlogik zeigt.",
   "Falsch: Das ist die Definition von Dependency Injection, nicht des DIP. Das DIP betrifft die Richtung der Abhängigkeit zu Abstraktionen; DI ist nur eine Technik, die Instanzen von außen bereitstellt.",
   "Falsch: DI ist eine Technik, die das DIP unterstützen kann, aber nicht garantiert. Ein Framework kann ebenso gut konkrete Klassen injizieren, und dann hängt die Fachlogik weiterhin direkt von der Datenbanktechnik ab.",
   "Richtig: Kern des DIP: Höher- und niedrigerstufige Module hängen beide von einer Abstraktion ab, nicht das eine vom Detail des anderen. Fachlogik und DB-Adapter kennen nur die Schnittstelle „Kundenablage“."
  ],
  "explanation": "Beim DIP hängen beide Seiten von einer Abstraktion ab, die der nutzenden Fachlogik gehört. Fallen: Gleichsetzung mit Dependency Injection, die nur eine unterstützende Technik ist, und die Annahme, ein DI-Framework erfülle das Prinzip automatisch."
 },
 {
  "id": "k3",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
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
    "text": "Schichtenarchitektur (Layers)",
    "cat": 0
   },
   {
    "text": "Pipes und Filter",
    "cat": 0
   },
   {
    "text": "Dependency Inversion Principle",
    "cat": 1
   },
   {
    "text": "Microservices",
    "cat": 0
   }
  ],
  "rowExpl": [
   "Änderliches hinter einer stabilen Schnittstelle zu verbergen, ist eine allgemeine Leitlinie für Entwürfe. Es schreibt keine konkrete Struktur vor wie ein Muster, daher ist es ein Entwurfsprinzip.",
   "Schichten sind eine konkrete, wiederverwendbare Lösungsschablone für die Struktur eines Systems mit geregelter Nutzungsrichtung. Ein Prinzip wäre nur die dahinterliegende Leitlinie, z. B. die Trennung von Zuständigkeiten.",
   "Pipes und Filter beschreiben eine konkrete Struktur: Verarbeitungsschritte (Filter), verbunden durch Datenströme (Pipes). Das ist eine Lösungsschablone, also ein Muster, und keine allgemeine Leitlinie.",
   "Das Dependency Inversion Principle verlangt, Abhängigkeiten über Schnittstellen umzukehren, sodass die Technik von der Fachlogik abhängt. Es ist eine Leitlinie und kein Muster. Dependency Injection ist nur eine Technik, die es unterstützt.",
   "Microservices teilen ein System in klein geschnittene, unabhängig auslieferbare Dienste. Das ist eine konkrete Lösungsschablone mit festen Strukturmerkmalen, also ein Architekturmuster und kein Prinzip."
  ],
  "explanation": "Information Hiding und das Dependency Inversion Principle sind Entwurfsprinzipien, also Leitlinien. Schichten, Pipes und Filter und Microservices sind Architekturmuster, d. h. konkrete Lösungsschablonen. Falle: Das DIP klingt nach einer konkreten Technik, ist aber ein Prinzip – Dependency Injection ist nur eine Technik, die es unterstützt."
 },
 {
  "id": "c3q15",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R1",
  "type": "multi",
  "q": "Ein Entwicklungsteam räumt ein gewachsenes System auf: Oberflächenlogik, Fachregeln und Datenzugriff sind stark vermischt, und jede Änderung zieht viele Anpassungen nach sich. Die Architektin verweist auf die Trennung von Verantwortlichkeiten. Welche Aussagen zur Trennung von Verantwortlichkeiten (Separation of Concerns) treffen zu?",
  "options": [
   "Unterschiedliche Belange in getrennten Bausteinen behandeln.",
   "Geschäftsregeln und Persistenz liegen in getrennten Bausteinen.",
   "Die Trennung erhöht die Kopplung, weil mehr Bausteine zusammenarbeiten müssen.",
   "SoC ist ein anderer Name für das SRP.",
   "Ein Belang kann auch fachlich geschnitten sein, etwa nach Subdomänen.",
   "Jeder Belang braucht eine eigene technische Schicht.",
   "Fachlogik lässt sich ohne Technik testen."
  ],
  "correct": [
   0,
   1,
   4,
   6
  ],
  "optExpl": [
   "Richtig: Das ist die Definition des Prinzips im Curriculum: Unterschiedliche Belange werden in getrennten Bausteinen behandelt. So lassen sie sich unabhängig verstehen, ändern und testen.",
   "Richtig: Eine typische Anwendung: Fachliches und Technisches ändern sich aus unterschiedlichen Gründen. Getrennt kann man etwa die Datenbank wechseln, ohne Geschäftsregeln anzufassen.",
   "Falsch: Getrennte Belange mit klaren Schnittstellen senken die Abhängigkeit von Details. Dass Bausteine zusammenarbeiten, heißt nicht, dass die Kopplung steigt.",
   "Falsch: SoC ist das allgemeinere Prinzip auf allen Ebenen. Das Single-Responsibility-Prinzip ist eine spezielle Ausprägung, die sich auf einzelne Klassen bzw. Bausteine und ihre Änderungsgründe bezieht.",
   "Richtig: Belange müssen nicht technisch getrennt werden. Fachliche Schnitte, etwa nach Subdomänen, sind ebenso eine Trennung von Verantwortlichkeiten.",
   "Falsch: SoC ist nicht an Schichten gebunden. Belange können auch fachlich, etwa nach Subdomänen, oder per Modul getrennt werden; Schichten sind nur eine mögliche Umsetzung.",
   "Richtig: Eine direkte Folge der Trennung: Ist die Fachlogik frei von Datenbank- und UI-Code, lässt sie sich isoliert und schnell mit Unit-Tests prüfen."
  ],
  "explanation": "Separation of Concerns behandelt unterschiedliche Belange in getrennten Bausteinen, etwa Fachliches und Technisches, was u. a. isolierte Tests ermöglicht. Fallen: SoC mit dem spezielleren SRP gleichsetzen oder zwingend an technische Schichten binden."
 },
 {
  "id": "c3q16",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R3",
  "extra": true,
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
   "Falsch: Zufällig gleicher Code, der sich aus unterschiedlichen fachlichen Gründen ändert, ist kein doppeltes Wissen. Ihn zusammenzuführen, koppelt unabhängige Teile unnötig – ändert sich ein Grund, bricht der andere Nutzer.",
   "Falsch: Diese Sicht ist zu eng: DRY bezieht sich auf Wissen, nicht nur auf Quellcode. Auch doppelt gepflegte Konfigurationswerte, Datenbankschemata oder Dokumentation verletzen DRY, weil sie auseinanderlaufen können.",
   "Richtig: So formulieren Hunt und Thomas DRY: Jedes Stück Wissen hat genau eine eindeutige, autoritative Repräsentation im System – in Code, Konfiguration oder Dokumentation. Ändert es sich, muss man es nur an einer Stelle anpassen (R3).",
   "Falsch: Das beschreibt KISS („Keep it simple, stupid“). Es ist im Motiv der Komplexitätsreduktion verwandt, aber ein eigenes Prinzip, das sich auf Einfachheit statt auf die Vermeidung von Wissensduplikaten bezieht."
  ],
  "explanation": "DRY bedeutet: Jedes Wissen hat genau eine autoritative Repräsentation, egal ob in Code, Konfiguration oder Dokumentation. Fallen: DRY auf textgleichen Code zu reduzieren (zufällige Gleichheit ist kein doppeltes Wissen), es nur auf Quellcode zu beziehen oder es mit KISS zu verwechseln."
 },
 {
  "id": "c3q17",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R3",
  "extra": true,
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
   "Richtig: YAGNI („You Ain't Gonna Need It“) richtet sich gegen Funktionalität auf Vorrat. Spekulative Erweiterungspunkte „für alle Fälle“ kosten Aufwand und Komplexität, obwohl sie aktuell niemand braucht und sie oft nie genutzt werden.",
   "Falsch: Information Hiding verbirgt absehbar veränderliche Entwurfsentscheidungen hinter Schnittstellen. Es sagt nichts darüber aus, ob man vorsorglich Funktionalität bauen soll, und spricht deshalb nicht gegen den Vorschlag.",
   "Falsch: Das OCP wird oft gerade als Begründung für solche Erweiterungspunkte angeführt, weil es Erweiterung ohne Änderung fordert. Es spricht also eher dafür als dagegen – richtig eingesetzt aber nur für erwartete Variabilität.",
   "Falsch: Konzeptionelle Integrität fordert, Gleiches gleich zu lösen, also Einheitlichkeit im Entwurf. Sie sagt nichts darüber, ob Funktionalität vorab gebaut werden soll, und passt deshalb nicht zur Frage."
  ],
  "explanation": "YAGNI richtet sich gegen spekulative Generalisierung und Funktionalität auf Vorrat. Falle: Das OCP klingt passend, wird aber eher als Argument FÜR Erweiterungspunkte genutzt; Information Hiding und konzeptionelle Integrität betreffen andere Fragen."
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
   "Ein System sollte sich auf ein Architekturmuster beschränken, um konsistent zu bleiben.",
   "Sie lassen sich unverändert auf andere Systeme übertragen."
  ],
  "correct": [
   1,
   2,
   3
  ],
  "optExpl": [
   "Falsch: Das Curriculum unterscheidet Architekturmuster (z. B. Schichten, Pipes and Filters) von Entwurfsmustern (z. B. Adapter, Observer). Entwurfsmuster wirken meist feiner granular innerhalb von Bausteinen, Architekturmuster prägen die Gesamtstruktur.",
   "Richtig: Kein Muster ist kostenlos: Schichten bringen Indirektion, Microservices Verteilungskomplexität. Darum muss man beim Einsatz Vor- und Nachteile bewusst gegen die Qualitätsziele abwägen.",
   "Richtig: Muster sind ein Weg zu Qualitäten wie Änderbarkeit oder Skalierbarkeit – aber nur für gegebene Probleme in einem gegebenen Kontext. Außerhalb dieses Kontexts können sie mehr schaden als nützen.",
   "Richtig: So definiert das Curriculum Architekturmuster: bewährte Lösungsschablonen für wiederkehrende Strukturprobleme. Sie bündeln Erfahrung und schaffen gemeinsames Vokabular im Team.",
   "Falsch: Reale Systeme kombinieren oft mehrere Muster, z. B. Microservices, die intern geschichtet sind und über Ereignisse kommunizieren. Die Beschränkung auf ein einziges Muster ist keine Regel des Curriculums.",
   "Falsch: Muster sind abstrakte Schablonen und müssen an das konkrete Problem, die Randbedingungen und die Qualitätsziele angepasst werden. Wer sie ungeprüft überträgt, riskiert unpassende Lösungen."
  ],
  "explanation": "Architekturmuster sind bewährte, kontextabhängige Lösungsschablonen mit Vor- und Nachteilen, die man abwägen muss. Fallen: nur ein Muster pro System, Übertragung ohne Anpassung und die Gleichsetzung mit (feiner granularen) Entwurfsmustern."
 },
 {
  "id": "c3q19",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R3",
  "extra": true,
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
   "Falsch: Präsentations-, Anwendungs- und Datenhaltungsschicht beschreiben eine Drei-Schichten-Architektur. MVC trennt dagegen Belange innerhalb der Benutzeroberfläche, nicht die Schichten eines Gesamtsystems.",
   "Falsch: Fachkern, Ports und Adapter sind die Elemente des Musters Ports and Adapters (Hexagonal). Dieses Muster schützt die Fachlogik vor Technik, MVC organisiert dagegen die Interaktion mit der Oberfläche.",
   "Falsch: Schreib- und Lesemodell stammen aus CQRS, der Ereignisspeicher aus Event Sourcing. Das sind eigenständige Muster zur Datenhaltung und haben mit der Trennung in MVC nichts zu tun.",
   "Richtig: MVC trennt das Datenmodell (Model), dessen Darstellung (View) und die Steuerung der Benutzerinteraktion (Controller). So lassen sich z. B. mehrere Darstellungen desselben Modells umsetzen."
  ],
  "explanation": "MVC trennt innerhalb der Benutzeroberfläche Model (Daten), View (Darstellung) und Controller (Interaktionssteuerung). Fallen: Gleichsetzung mit den drei technischen Schichten sowie Verwechslung mit Ports and Adapters oder CQRS/Event Sourcing."
 },
 {
  "id": "c3q21",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R1",
  "type": "multi",
  "q": "Die Bausteine A und B referenzieren sich gegenseitig (zyklische Abhängigkeit). Welche Aussagen treffen zu?",
  "options": [
   "Unproblematisch, solange ein Team beide pflegt.",
   "Aufbrechen, indem eine Abhängigkeit über eine Abstraktion umgekehrt wird.",
   "Bei engem fachlichem Bezug: zu einem Baustein zusammenlegen.",
   "Liegen beide Bausteine in derselben Schicht, ist der Zyklus unproblematisch.",
   "Events statt Aufrufe beseitigen den Zyklus samt fachlicher Abhängigkeit.",
   "Isoliertes Testen und Ändern wird erschwert."
  ],
  "correct": [
   1,
   2,
   5
  ],
  "optExpl": [
   "Falsch: Die Organisation ändert nichts an der technischen Kopplung. Auch wenn ein Team beide Bausteine pflegt, lassen sie sich weiterhin nicht getrennt testen, ändern oder wiederverwenden.",
   "Richtig: Definiert A eine Schnittstelle, die B implementiert, hängt B von A ab statt umgekehrt. Damit zeigen beide Abhängigkeiten in dieselbe Richtung und der Zyklus ist aufgelöst – eine Anwendung des DIP.",
   "Richtig: Gehören A und B fachlich eng zusammen, ist das Zusammenlegen eine legitime Lösung. Der Zyklus zeigt dann oft nur, dass der Schnitt falsch war; ein gemeinsamer Baustein erhöht die Kohäsion.",
   "Falsch: Die Schichtregel betrifft Aufrufe zwischen Schichten. Ein Zyklus innerhalb einer Schicht bleibt trotzdem problematisch, weil A und B weiterhin nicht unabhängig voneinander verstanden und geändert werden können.",
   "Falsch: Mit Events verschwindet zwar die direkte technische Referenz, die fachliche Abhängigkeit bleibt aber bestehen. A und B hängen weiter von Struktur und Bedeutung der Nachrichten des jeweils anderen ab.",
   "Richtig: A und B lassen sich kaum getrennt verstehen, testen oder wiederverwenden. Änderungen breiten sich in beide Richtungen aus, und für einen Test von A braucht man immer auch B."
  ],
  "explanation": "Zyklische Abhängigkeiten erschweren isoliertes Testen, Ändern und Wiederverwenden. Lösungen sind Abhängigkeitsumkehr über eine Abstraktion oder Zusammenlegen; Fallen: Teamzugehörigkeit, gemeinsame Schicht oder Events beseitigen das Problem nicht."
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
   "Die statische Kopplung entfällt, weil zur Laufzeit gebunden wird.",
   "Implementierungen werden austauschbar.",
   "Abhängigkeiten lassen sich im Test ersetzen.",
   "Die Zahl der Klassen sinkt, weil Implementierungen zusammengelegt werden.",
   "Die Signatur genügt Aufrufern, um die Schnittstelle korrekt zu nutzen.",
   "Neue Implementierungen lassen sich ergänzen, ohne die Aufrufer zu ändern."
  ],
  "correct": [
   0,
   2,
   3,
   6
  ],
  "optExpl": [
   "Richtig: Nutzer hängen nur noch vom Vertrag der Schnittstelle ab, nicht von Interna der Implementierung wie Datenstrukturen oder Hilfsklassen. Änderungen hinter der Schnittstelle wirken sich so nicht auf die Aufrufer aus.",
   "Falsch: Die statische Abhängigkeit zur Schnittstelle bleibt bestehen; sie ist nur loser, weil sie nicht mehr an Implementierungsdetails hängt. Ändert sich die Schnittstelle selbst, müssen die Aufrufer weiterhin angepasst werden.",
   "Richtig: Solange der Vertrag eingehalten wird, lässt sich die Implementierung ersetzen, ohne Nutzer zu ändern – etwa eine In-Memory-Ablage durch eine Datenbankanbindung. Das ist die Grundlage für Erweiterbarkeit und das Dependency-Inversion-Prinzip.",
   "Richtig: Hinter einer Schnittstelle kann im Test ein Testdouble wie ein Mock oder Stub stehen. Das erleichtert isoliertes, schnelles Testen ohne echte Datenbank oder externe Dienste und verbessert so die Testbarkeit.",
   "Falsch: Gegen Schnittstellen zu programmieren führt eher zu zusätzlichen Typen, weil Schnittstelle und Implementierung getrennt sind. Der Nutzen liegt in der Entkopplung, nicht in weniger Klassen.",
   "Falsch: Die Signatur allein reicht nicht: Die Semantik – was ein Aufruf bewirkt, Vor- und Nachbedingungen, Fehlerverhalten – ist Teil des Vertrags. Ohne sie weiß der Aufrufer nicht, wie er die Schnittstelle korrekt nutzt.",
   "Richtig: Solange eine neue Implementierung den Vertrag der Schnittstelle erfüllt, bleiben Aufrufer unverändert. Das entspricht dem Offen/geschlossen-Prinzip."
  ],
  "explanation": "Gegen Schnittstellen zu programmieren senkt die Kopplung an Details, macht Implementierungen austauschbar, erleichtert Tests mit Testdoubles und erlaubt Erweiterungen ohne Änderung der Aufrufer. Fallen: Die statische Abhängigkeit zur Schnittstelle bleibt auch bei Bindung zur Laufzeit, die Semantik muss man weiter kennen, und die Zahl der Klassen sinkt nicht."
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
    "text": "Ein Baustein arbeitet nur, solange der aufgerufene Dienst gleichzeitig erreichbar ist.",
    "cat": 0
   }
  ],
  "rowExpl": [
   "Weil die konkrete Implementierung erst zur Laufzeit übergeben wird, kennt der Baustein sie zur Entwurfszeit nicht. Das lockert die Bindung und reduziert die Kopplung; feste Verdrahtung im Code würde sie erhöhen.",
   "Wer nur eine Schnittstelle kennt, ist von der Implementierung entkoppelt und bleibt von deren Änderungen unberührt. Das reduziert die Kopplung, die Abhängigkeit von einer konkreten Klasse wäre dagegen enger.",
   "Vererbung von einer konkreten Fremdklasse bindet den Baustein an deren Interna und Änderungen. Das erhöht die Kopplung deutlich, statt sie über eine Schnittstelle zu reduzieren.",
   "Gemeinsam genutzte Tabellen machen die Datenstruktur zur versteckten Schnittstelle: Eine Änderung an einer Stelle wirkt auf beide Bausteine. Das erhöht die Kopplung und reduziert sie nicht.",
   "Das ist zeitliche Kopplung: Der Baustein ist darauf angewiesen, dass der Dienst genau jetzt erreichbar ist. Diese oft übersehene Kopplungsart erhöht die Kopplung, auch ohne direkte Codeabhängigkeit."
  ],
  "explanation": "Dependency Injection und die Abhängigkeit nur von Schnittstellen reduzieren die Kopplung. Erhöht wird sie durch Vererbung von einer konkreten Fremdklasse, gemeinsam genutzte Datenbanktabellen und zeitliche Abhängigkeit von einem gleichzeitig erreichbaren Dienst – Kopplungsarten, die oft übersehen werden."
 },
 {
  "id": "k8",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R3",
  "extra": true,
  "type": "k",
  "points": 2,
  "q": "Ein Team möchte seine Code-Richtlinien an SOLID ausrichten. Gehört das jeweilige Prinzip zu SOLID?",
  "categories": [
   "Teil von SOLID",
   "Nicht Teil von SOLID"
  ],
  "rows": [
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
   }
  ],
  "rowExpl": [
   "Das Dependency Inversion Principle ist das „D“ in SOLID. Es verlangt, Abhängigkeiten über Schnittstellen umzukehren, und gehört damit eindeutig zu SOLID.",
   "Das Interface Segregation Principle ist das „I“ in SOLID und gehört deshalb dazu. Es ist eines der fünf Prinzipien, die das Akronym bilden.",
   "Separation of Concerns ähnelt dem Single Responsibility Principle, ist aber ein eigenständiges Prinzip und kein Bestandteil von SOLID. SOLID umfasst nur SRP, OCP, LSP, ISP und DIP.",
   "Das Single Responsibility Principle ist das „S“ in SOLID und gehört dazu. Es darf nicht mit Separation of Concerns verwechselt werden, das nicht zu SOLID zählt."
  ],
  "explanation": "SOLID umfasst SRP, OCP, LSP, ISP und DIP – Dependency Inversion, Interface Segregation und Single Responsibility gehören also dazu. Falle ist ein Verwandter: Separation of Concerns ähnelt SRP, ist aber ein eigenes Prinzip."
 },
 {
  "id": "c3q24",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R1",
  "type": "multi",
  "q": "Ein Shop soll künftig weitere Zahlarten unterstützen. Welche der folgenden Aussagen bzw. Vorgehensweisen entsprechen dem Offen/geschlossen-Prinzip (OCP)?",
  "options": [
   "Neue Zahlart: die bestehende if-Kette um einen weiteren Fall ergänzen.",
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
   "Falsch: Das entspricht gerade nicht dem OCP: Eine if-Kette zu erweitern ändert erprobten Code, und mit jeder Zahlart wächst die Gefahr von Seiteneffekten. OCP-konform wäre eine neue Implementierung hinter einer Abstraktion.",
   "Richtig: Das ist die Kernformulierung des Prinzips nach Meyer: Bausteine sollen für Erweiterungen offen sein, ihr bestehender, erprobter Code aber für Änderungen geschlossen. Neues Verhalten kommt hinzu, statt Altes umzubauen.",
   "Richtig: Eine neue Zahlart als weitere Implementierung einer Schnittstelle wie „PaymentMethod“ ergänzt Verhalten, ohne erprobten Code zu ändern. Das ist die typische Umsetzung des OCP über Abstraktion und Polymorphie.",
   "Falsch: Genau eine Verantwortlichkeit pro Klasse fordert das Single Responsibility Principle, nicht das OCP. Beide Prinzipien ergänzen sich, beschreiben aber unterschiedliche Aspekte.",
   "Falsch: Übertreibung: Das OCP ist kein Änderungsverbot. Fehlerbehebungen und Refactorings bleiben selbstverständlich möglich; es geht darum, neue Anforderungen möglichst durch Erweiterung umzusetzen."
  ],
  "explanation": "OCP: offen für Erweiterung, geschlossen für Änderung – neues Verhalten wie eine weitere Zahlart kommt über zusätzliche Implementierungen hinter einer Abstraktion. Fallen: OCP als absolutes Änderungsverbot missverstehen, mit dem SRP verwechseln oder if-Ketten erweitern."
 },
 {
  "id": "c3q25",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R3",
  "extra": true,
  "type": "single",
  "q": "Eine Schnittstelle „Kundenservice“ hat 40 Operationen, die meisten Clients nutzen nur drei. Was empfiehlt das Interface-Segregation-Prinzip?",
  "options": [
   "Die Operationen zentral bündeln, um Konsistenz zu sichern.",
   "Schmale, rollenspezifische Schnittstellen für die Clients.",
   "Clients von Abstraktionen statt von Klassen abhängig machen.",
   "Die Schnittstelle nach technischen Schichten aufteilen."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Alle Operationen zentral zu bündeln ist genau der Ausgangszustand, den das ISP auflösen will. Eine breite Schnittstelle zwingt Clients, von Operationen abzuhängen, die sie nie nutzen – Änderungen daran betreffen sie trotzdem.",
   "Richtig: Das Interface-Segregation-Prinzip fordert, dass Clients nicht von Operationen abhängen, die sie nicht nutzen. Also teilt man die Schnittstelle in schmale, rollenspezifische Schnittstellen, z. B. „Kundensuche“ oder „Adressänderung“.",
   "Falsch: Abhängigkeit von Abstraktionen statt konkreten Klassen beschreibt das Dependency-Inversion-Prinzip. Die Schnittstelle bliebe dabei so breit wie zuvor – das eigentliche Problem der 40 Operationen wäre nicht gelöst.",
   "Falsch: Das ISP schneidet Schnittstellen nach den Bedürfnissen der Clients, nicht nach technischen Schichten. Eine Aufteilung nach Schichten würde Clients weiterhin mit vielen ungenutzten Operationen belasten."
  ],
  "explanation": "ISP: Kein Client soll von Operationen abhängen, die er nicht nutzt – deshalb schmale, rollenspezifische Schnittstellen. Fallen: Verwechslung mit dem DIP (Abstraktionen statt Klassen) und ein Schnitt nach technischen Schichten statt nach Client-Bedürfnissen."
 },
 {
  "id": "c3q26",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R3",
  "extra": true,
  "type": "single",
  "q": "Was fordert das Liskov'sche Substitutionsprinzip (LSP)?",
  "options": [
   "Subtypen sind verhaltenskonform anstelle des Basistyps nutzbar.",
   "Erfüllt, sobald der Subtyp erbt und die Signaturen passen.",
   "Subtypen dürfen Vorbedingungen verschärfen.",
   "Vererbung durch Komposition ersetzen."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Wo der Basistyp erwartet wird, muss jeder Subtyp funktionieren, ohne das erwartete Verhalten zu brechen. Klassisches Gegenbeispiel: Ein Quadrat als Subtyp von Rechteck, bei dem das Setzen der Breite unerwartet die Höhe ändert.",
   "Falsch: Syntaktische Kompatibilität reicht nicht. Erben und passende Signaturen erlaubt nur das Kompilieren; LSP verlangt, dass auch das Verhalten die Erwartungen an den Basistyp erfüllt (Verträge, Invarianten).",
   "Falsch: Umgekehrt: Subtypen dürfen Vorbedingungen nur abschwächen und Nachbedingungen nur verschärfen. Verschärfte Vorbedingungen brechen Aufrufer, die sich auf den Vertrag des Basistyps verlassen.",
   "Falsch: Das ist die Heuristik „Komposition vor Vererbung“, nicht LSP – und auch sie verlangt keinen generellen Ersatz. LSP regelt, wie sich Subtypen verhalten müssen, wenn Vererbung eingesetzt wird."
  ],
  "explanation": "LSP verlangt, dass Subtypen verhaltenskonform überall dort einsetzbar sind, wo der Basistyp erwartet wird. Fallen: Passende Signaturen allein genügen nicht, Vorbedingungen dürfen nicht verschärft werden, und LSP ist nicht dasselbe wie „Komposition vor Vererbung“."
 },
 {
  "id": "c3q27",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R3",
  "extra": true,
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
   "Falsch: Das beschreibt Polling: Empfänger fragen aktiv und wiederholt nach. Bei Publish/Subscribe dagegen werden Ereignisse über einen Vermittler an die Abonnenten zugestellt, sobald sie auftreten.",
   "Richtig: Der Sender veröffentlicht Ereignisse, ohne die Empfänger zu kennen; beliebig viele Abonnenten können darauf reagieren. Neue Empfänger lassen sich hinzufügen, ohne den Sender zu ändern – das entkoppelt beide Seiten.",
   "Falsch: Ein fest vorgegebener einzelner Empfänger ist Punkt-zu-Punkt-Kommunikation, etwa über eine Queue. Publish/Subscribe ist dagegen Multipunkt: Ein Ereignis kann viele Abonnenten erreichen.",
   "Falsch: Eine synchrone Quittierung würde den Sender wieder von den Empfängern abhängig machen und ihn blockieren. Das widerspricht der zeitlichen und logischen Entkopplung, die Pub/Sub gerade bieten soll."
  ],
  "explanation": "Bei Publish/Subscribe veröffentlicht der Sender Ereignisse an unbekannte, beliebig viele Abonnenten; das entkoppelt Sender und Empfänger. Fallen: Verwechslung mit Punkt-zu-Punkt-Kommunikation, Polling oder synchroner Quittierung, die den Sender wieder abhängig macht."
 },
 {
  "id": "c3q28",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R3",
  "extra": true,
  "type": "single",
  "q": "Welche Aussage beschreibt das Client-Server-Muster am zutreffendsten?",
  "options": [
   "Alle Knoten sind gleichrangig und bieten dieselben Dienste.",
   "Client und Server müssen auf getrennten Rechnern laufen.",
   "Ein Vermittler verbindet Clients und Server, die sich nicht kennen.",
   "Clients nutzen Dienste eines Servers über eine Schnittstelle."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Gleichrangige Knoten, die dieselben Dienste anbieten und nutzen, beschreiben das Peer-to-Peer-Muster. Bei Client-Server sind die Rollen dagegen klar verteilt: einer fragt an, der andere stellt bereit.",
   "Falsch: Getrennte Rechner sind üblich, aber nicht nötig. Das Muster beschreibt Rollen, nicht die Verteilung; Client und Server können auch im selben Prozess oder auf demselben Rechner laufen.",
   "Falsch: Ein Vermittler zwischen Parteien, die sich nicht kennen, ist das Broker-Muster. Es baut zwar auf Client-Server auf, führt aber zusätzlich eine vermittelnde Instanz ein.",
   "Richtig: Der Client fordert Dienste an, der Server stellt sie über eine Schnittstelle bereit und reagiert auf Anfragen. Beispiel: Ein Browser ruft Seiten von einem Webserver ab."
  ],
  "explanation": "Client-Server trennt anfragende Clients von bereitstellenden Servern über eine Schnittstelle. Fallen: Verwechslung mit Peer-to-Peer oder Broker und die Gleichsetzung von Rollen mit getrennten Rechnern; das Thema ist R3."
 },
 {
  "id": "c3q29",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R3",
  "extra": true,
  "type": "multi",
  "q": "Welche Aussagen zur Heuristik „Komposition vor Vererbung“ treffen zu?",
  "options": [
   "Vermeidet die Fragilität tiefer Vererbungshierarchien.",
   "Das umschließende Objekt erbt alle Methoden seiner Teile.",
   "Vererbung ist damit zu vermeiden.",
   "Verhalten lässt sich zur Laufzeit austauschen, etwa per Strategy.",
   "Vor allem bei echter „ist-ein“-Beziehung vorzuziehen."
  ],
  "correct": [
   0,
   3
  ],
  "optExpl": [
   "Richtig: Änderungen an Basisklassen schlagen auf alle Unterklassen durch (fragile base class). Komposition koppelt loser, weil nur die öffentliche Schnittstelle des Teils genutzt wird.",
   "Falsch: Bei Komposition wird nichts geerbt: Das umschließende Objekt delegiert explizit an seine Teile und bietet nur die Operationen an, die es bewusst weiterreicht.",
   "Falsch: Übergeneralisierung: Die Heuristik gibt Komposition Vorrang, verbietet Vererbung aber nicht. Bei echten Spezialisierungen bleibt Vererbung ein legitimes Mittel.",
   "Richtig: Das Strategy-Muster nutzt Komposition: Ein Objekt hält eine austauschbare Strategie, etwa verschiedene Preisberechnungen, die sich zur Laufzeit wechseln lassen. Mit Vererbung ist das Verhalten fest.",
   "Falsch: Umgekehrt: Bei einer echten „ist-ein“-Beziehung bleibt Vererbung legitim. Komposition empfiehlt sich gerade dort, wo eher eine „hat-ein“- oder „nutzt“-Beziehung vorliegt."
  ],
  "explanation": "Komposition ist flexibler und loser gekoppelt als Vererbung und erlaubt den Austausch von Verhalten zur Laufzeit, etwa per Strategy. Fallen: die Heuristik als generelles Vererbungsverbot lesen oder annehmen, bei Komposition würden Methoden geerbt."
 },
 {
  "id": "c3q30",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R3",
  "extra": true,
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
   "Richtig: Zustand, der über eine einzelne Anfrage hinaus benötigt wird, wird bewusst ausgelagert – in eine Datenbank, einen verteilten Cache oder ein signiertes Token beim Client. Die Dienstinstanz selbst hält keinen Sitzungszustand.",
   "Richtig: Weil keine Instanz Zustand hält, kann jede gleichwertige Instanz jede Anfrage bearbeiten. Ein Load Balancer kann Anfragen daher frei verteilen, ohne einen Nutzer an eine bestimmte Instanz zu binden.",
   "Falsch: Benutzersitzungen funktionieren auch mit zustandslosen Diensten, wenn der Sitzungszustand extern (z. B. Redis) oder im Token (z. B. JWT) liegt. Zustandslos bezieht sich auf die Instanz, nicht auf die Anwendung insgesamt.",
   "Richtig: Neue Instanzen lassen sich einfach hinzufügen oder entfernen, ohne Zustand übertragen oder synchronisieren zu müssen. Das macht horizontale Skalierung, etwa per Autoscaling in Kubernetes, deutlich leichter.",
   "Falsch: Sticky Sessions binden einen Nutzer und seinen Zustand an eine bestimmte Instanz. Sie sind damit das Gegenmodell zu zustandslosen Diensten und werden gerade dann nötig, wenn Zustand in der Instanz liegt.",
   "Richtig: Da die Instanz keinen Zustand hält, geht bei ihrem Ausfall kein Sitzungszustand verloren; eine andere Instanz übernimmt die folgenden Anfragen. Das verbessert Verfügbarkeit und Fehlertoleranz."
  ],
  "explanation": "Zustandslose Dienste halten keinen Zustand in der Instanz, sondern lagern ihn aus; das erleichtert horizontale Skalierung und Ausfallsicherheit. Fallen: Benutzersitzungen sind trotzdem möglich, und Sticky Sessions sind gerade das Gegenmodell, kein Wesensmerkmal."
 },
 {
  "id": "c3q32",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R3",
  "extra": true,
  "type": "single",
  "q": "Ein Dienst ruft einen entfernten, gelegentlich überlasteten Partnerdienst auf. Wozu dienen dabei Timeout, Retry und Circuit Breaker?",
  "options": [
   "Der Circuit Breaker beschleunigt Aufrufe durch Zwischenspeichern.",
   "Robuster Umgang mit Fehlern und Ausfällen entfernter Aufrufe.",
   "Retry ist auch für nicht idempotente Operationen unbedenklich.",
   "Sie sorgen dafür, dass der Partnerdienst weniger Last erhält."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Hier wird der Circuit Breaker mit einem Cache verwechselt. Ein Circuit Breaker speichert nichts zwischen, sondern unterbricht nach wiederholten Fehlern die Aufrufe an einen gestörten Dienst und schlägt sofort fehl, bis der Dienst sich erholt hat.",
   "Richtig: Alle drei dienen dem robusten Umgang mit Fehlern entfernter Aufrufe: Timeouts begrenzen Wartezeiten, Retries fangen vorübergehende Fehler ab, und der Circuit Breaker verhindert Folgefehler und blockierte Ressourcen.",
   "Falsch: Nur idempotente Operationen lassen sich gefahrlos wiederholen. Bei nicht idempotenten Aufrufen drohen z. B. doppelte Buchungen, wenn die erste Anfrage doch angekommen ist und nur die Antwort verloren ging.",
   "Falsch: Entlastung des Partners ist höchstens ein Nebeneffekt des Circuit Breakers, aber nicht der Zweck aller drei Mechanismen. Retries erhöhen die Last sogar – deshalb kombiniert man sie mit Backoff und Begrenzungen."
  ],
  "explanation": "Timeout, Retry und Circuit Breaker dienen dem robusten Umgang mit Fehlern und Ausfällen entfernter Aufrufe. Fallen: Retry ist nur bei idempotenten Operationen unbedenklich, der Circuit Breaker ist kein Cache, und Lastreduktion ist nicht der gemeinsame Zweck."
 },
 {
  "id": "k9",
  "chapter": 3,
  "lz": "LZ 03-07",
  "r": "R3",
  "extra": true,
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
    "text": "Der Client erhält sofort eine Auftragsnummer und fragt den Status später ab.",
    "cat": 1
   }
  ],
  "rowExpl": [
   "Beim Publizieren eines Ereignisses wartet der Sender nicht auf die Verarbeitung; Abonnenten arbeiten, sobald sie bereit sind. Der Sender wartet nicht auf ein Ergebnis, daher asynchron.",
   "Der Aufrufer registriert den Callback und arbeitet sofort weiter, statt auf das Ergebnis zu warten. Das Ergebnis kommt später zurück, deshalb ist der Ablauf asynchron und nicht synchron.",
   "Der Client wartet auf die HTTP-Antwort und ist bis dahin blockiert. Dieses Warten auf das Ergebnis macht den Ablauf synchron; dass es sich um eine Technologie wie REST handelt, ist dafür unerheblich.",
   "Die sofortige Auftragsnummer ist nur eine Quittung; das eigentliche Ergebnis wird später per Statusabfrage geholt. Der Client wartet nicht auf das Ergebnis, daher asynchron."
  ],
  "explanation": "Entscheidend ist, ob der Aufrufer auf das Ergebnis wartet. Synchron ist der REST-Aufruf mit Warten auf die Antwort. Asynchron sind Publish/Subscribe, Callback und Auftragsnummer mit späterer Statusabfrage. Falle: Die Technologie entscheidet nicht, sondern das Warten auf das Ergebnis."
 },
 {
  "id": "c3q33",
  "chapter": 3,
  "lz": "LZ 03-09",
  "r": "R3",
  "extra": true,
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
   "Falsch: Austauschbare Algorithmen hinter einer gemeinsamen Schnittstelle beschreiben das Strategy-Muster. Es kapselt Varianten eines Verhaltens, vereinfacht aber nicht den Zugang zu einem Subsystem.",
   "Richtig: Die Fassade bündelt die Nutzung eines komplexen Subsystems hinter einer einfachen Schnittstelle. Beispiel: Eine Methode „bestellen()“ koordiniert intern Lager, Zahlung und Versand; Nutzer müssen die Einzelteile nicht kennen.",
   "Falsch: Ein Stellvertreter mit gleicher Schnittstelle, der den Zugriff kontrolliert, ist der Proxy. Er bietet dieselbe Schnittstelle wie das Original, die Fassade dagegen eine neue, vereinfachte.",
   "Falsch: Neue Operationen auf einer Objektstruktur, ohne deren Klassen zu ändern, beschreiben das Visitor-Muster. Mit der Vereinfachung eines Subsystemzugangs hat es nichts zu tun."
  ],
  "explanation": "Eine Fassade bietet einen vereinfachten, einheitlichen Zugang zu einem komplexen Subsystem. Fallen: Verwechslung mit dem Proxy (gleiche Schnittstelle, Zugriffskontrolle), mit Strategy (austauschbare Algorithmen) oder mit Visitor (neue Operationen)."
 },
 {
  "id": "c3q34",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R1",
  "type": "multi",
  "q": "Für ein neues Logistiksystem legt das Team seine Bausteingrenzen fest und spricht dabei von Modulen. Es will vorab klären, was ein Modul im Sinne der Modularisierung ausmacht und welche Eigenschaften es haben sollte. Welche Aussagen zu einem Modul im Sinne der Modularisierung treffen zu?",
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
   "Richtig: Das ist der Kern von Information Hiding und Kapselung: Nutzer hängen nur von der Schnittstelle ab. Solange diese stabil bleibt, darf sich die Implementierung frei ändern.",
   "Falsch: Die Größe eines Moduls richtet sich nach seiner Verantwortung, nicht nach der Klassenzahl. Ein Modul kann viele Klassen umfassen; eine starre Ein-Klassen-Regel verfehlt den Zweck der Modularisierung.",
   "Falsch: Offengelegte Datenstrukturen koppeln Nutzer an Interna und widersprechen dem Geheimnisprinzip. Effizienz rechtfertigt das selten; jede interne Änderung würde dann alle Nutzer treffen.",
   "Richtig: Ein Modul hat einen klar umrissenen Zweck und bündelt Zusammengehöriges hinter einer definierten Schnittstelle. Das sorgt für hohe Kohäsion innen und kontrollierte Abhängigkeiten nach außen.",
   "Richtig: Zerlegung ist hierarchisch: Ein Baustein wird als Whitebox in weitere Bausteine verfeinert. Ein Modul kann also selbst aus Untermodulen bestehen, wie es auch die Bausteinsicht zeigt.",
   "Falsch: Module sind Strukturelemente des Quellcodes, Artefakte Einheiten der Auslieferung. Mehrere Module können in einem Artefakt landen und umgekehrt; die Abbildung zeigt erst die Verteilungssicht."
  ],
  "explanation": "Ein Modul bündelt Zusammengehöriges hinter einer stabilen Schnittstelle, verbirgt seine Interna und kann hierarchisch in Untermodule zerlegt werden. Fallen: Gleichsetzung mit deploybaren Artefakten, Größe nach Klassenzahl und offengelegte Datenstrukturen."
 },
 {
  "id": "c3q35",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
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
   "Falsch: Umgekehrt: Konsistenz über Servicegrenzen hinweg ist schwieriger, weil jeder Dienst seine eigenen Daten hält. Statt einer lokalen Transaktion braucht man etwa Sagas und muss mit eventueller Konsistenz leben.",
   "Richtig: Ein modularer Monolith kann intern sauber in fachliche Module mit klaren Grenzen gegliedert sein. Trotzdem wird er als eine Einheit gebaut und ausgeliefert – ein Gegenpol zu Microservices mit vielen Vorteilen der Modularität.",
   "Richtig: Ein Deployment, ein Prozess und keine verteilten Fehlerfälle vereinfachen Test und Betrieb deutlich. Netzwerkausfälle, Versionskompatibilität zwischen Diensten oder verteiltes Tracing entfallen.",
   "Richtig: Unabhängige Releases und gezielte Skalierung einzelner Dienste sind der Hauptnutzen. Erkauft wird er mit mehr Betriebsaufwand, Monitoring über viele Dienste und dem Netzwerk als zusätzlicher Fehlerquelle.",
   "Falsch: Microservices verlagern Komplexität in Betrieb, Kommunikation und Datenhaltung, statt sie zu beseitigen. Der einzelne Dienst wird einfacher, das Gesamtsystem aber eher komplexer."
  ],
  "explanation": "Microservices bringen unabhängige Deployments, aber mehr Betriebskomplexität und schwierigere Datenkonsistenz; ein modularer Monolith bietet klare Grenzen bei einem Deployment. Falle: Microservices senken die Gesamtkomplexität nicht, sie verlagern sie."
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
   "Ein Muster beschreibt ein wiederkehrendes Problem in einem Kontext samt einer bewährten Lösung.",
   "Ein unpassendes Muster kann Qualitäten verschlechtern."
  ],
  "correct": [
   1,
   2,
   4,
   5
  ],
  "optExpl": [
   "Falsch: Bewährt heißt nicht universell: Jedes Muster löst ein Problem in einem bestimmten Kontext. Passt der Kontext nicht, bringt es nur seine Nachteile und Komplexität mit.",
   "Richtig: Muster sind Wege zu bestimmten Qualitäten in einem gegebenen Kontext. Die Auswahl richtet sich daher nach den priorisierten Qualitätszielen und Randbedingungen des Systems.",
   "Richtig: Leicht übersehen: Das Curriculum nennt neben allgemeinen Musterkatalogen auch domänenspezifische Quellen, etwa für eingebettete Systeme oder Integration. Sie liefern oft passendere Alternativen.",
   "Falsch: Jedes Muster bringt eigene Nachteile und Komplexität mit. Viele Muster zu kombinieren ist kein Selbstzweck und macht einen Entwurf eher schwerer verständlich als robuster.",
   "Richtig: Muster beschreiben Problem, Kontext und Lösung; sie werden in der Praxis gefunden statt erfunden und sind nicht automatisch ideal.",
   "Richtig: Muster haben Trade-offs: Microservices verbessern etwa die unabhängige Auslieferung, verschlechtern aber Performanz und Betriebsaufwand. Falsch gewählt, überwiegen die Nachteile."
  ],
  "explanation": "Muster werden passend zu Qualitätszielen und Kontext gewählt, auch aus domänenspezifischen Quellen; sie beschreiben Problem, Kontext und Lösung, haben aber Trade-offs. Fallen: „bewährt“ oder „viele Muster kombiniert“ als Qualitätsgarantie lesen."
 },
 {
  "id": "c3q37",
  "chapter": 3,
  "lz": "LZ 03-03",
  "r": "R3",
  "extra": true,
  "type": "multi",
  "q": "Ein Team schneidet sein System nach Bounded Contexts (DDD). Welche Aussagen treffen zu?",
  "options": [
   "Ein Bounded Context grenzt ein Modell mit eigener Fachsprache ab.",
   "„Kunde“ muss in den Contexts einheitlich modelliert sein.",
   "Bounded Contexts erzwingen eine Umsetzung als eigene Microservices.",
   "Bounded Contexts entsprechen den Schichten der Anwendung.",
   "Fachliche Grenzen können quer zu technischen Schichten verlaufen."
  ],
  "correct": [
   0,
   4
  ],
  "optExpl": [
   "Richtig: Ein Bounded Context grenzt ein fachliches Modell ab, innerhalb dessen eine konsistente, gemeinsame Sprache gilt (Ubiquitous Language). Begriffe haben dort eine eindeutige Bedeutung, die Fachleute und Entwickler:innen teilen.",
   "Falsch: Gerade nicht: Jeder Kontext darf Begriffe anders modellieren. „Kunde“ hat im Vertrieb andere Attribute als in der Buchhaltung oder im Versand – genau diese Unterschiede macht die Abgrenzung beherrschbar.",
   "Falsch: Das ist möglich, aber nicht zwingend. Auch ein modularer Monolith kann nach Bounded Contexts geschnitten sein, und ein Kontext kann aus mehreren Diensten bestehen. Bounded Context ist ein fachliches, kein Deployment-Konzept.",
   "Falsch: Hier werden Schnittarten verwechselt: Schichten sind ein technischer Schnitt (UI, Logik, Daten), Bounded Contexts ein fachlicher. Ein Kontext umfasst typischerweise Anteile mehrerer Schichten.",
   "Richtig: Der Schnitt folgt der Domäne, nicht der Technik. Ein Kontext wie „Bestellung“ kann eigene UI-, Logik- und Datenanteile umfassen und verläuft damit quer zu technischen Schichten (vertikaler Schnitt)."
  ],
  "explanation": "Bounded Contexts grenzen fachliche Modelle mit eigener Fachsprache ab und verlaufen quer zu technischen Schichten. Fallen: überall einheitliche Begriffe erzwingen, Bounded Context mit Microservice gleichsetzen oder fachliche Kontexte mit technischen Schichten verwechseln (R3)."
 },
 {
  "id": "c3q38",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R1",
  "type": "multi",
  "q": "Ein Team gestaltet die Klassen eines neuen Bausteins und möchte dessen interne Struktur vor den Nutzern des Bausteins schützen, damit sie später ohne Folgen für andere geändert werden kann. Welche Aussagen zur Kapselung (Encapsulation) treffen zu?",
  "options": [
   "Kapselung heißt, dass der Quellcode eines Bausteins für andere Teams nicht lesbar sein darf.",
   "Kapselung ist ein Mittel, um Information Hiding umzusetzen.",
   "Der Zustand eines Bausteins wird nur über definierte Operationen verändert, so bleibt er konsistent.",
   "Erreicht, sobald die Felder private sind und Getter/Setter haben.",
   "Zugriff auf den Zustand nur über die Schnittstelle.",
   "Kapselung verhindert, dass Bausteine miteinander kommunizieren.",
   "Die interne Repräsentation bleibt änderbar."
  ],
  "correct": [
   1,
   2,
   4,
   6
  ],
  "optExpl": [
   "Falsch: Kapselung beschränkt den Zugriff auf Zustand und Interna auf die Schnittstelle. Sie verbietet nicht, den Quellcode zu lesen; ob andere Teams ihn einsehen dürfen, ist eine organisatorische Frage.",
   "Richtig: In der üblichen Lesart ist Information Hiding das Prinzip und Kapselung das Mittel dazu: Durch Sichtbarkeitsregeln und Schnittstellen wird verhindert, dass Nutzer von verborgenen Details abhängen. So lässt sich das Prinzip konkret umsetzen.",
   "Richtig: Wer den Zustand nur über die Schnittstelle ändert, kann Regeln zur Konsistenz an einer Stelle durchsetzen.",
   "Falsch: Pauschale Getter und Setter für alle Felder legen die interne Struktur doch wieder offen. Formal ist alles private, faktisch hängen Nutzer aber an der Repräsentation – echte Kapselung bietet fachliche Operationen.",
   "Richtig: Bei Kapselung ist der Zustand von außen nicht direkt erreichbar, sondern nur über die Schnittstelle. So kann der Baustein z. B. Invarianten prüfen und Inkonsistenzen verhindern.",
   "Falsch: Kapselung regelt, worüber Bausteine kommunizieren: über die Schnittstelle statt über Interna. Kommunikation selbst bleibt möglich.",
   "Richtig: Solange die Schnittstelle gleich bleibt, merken Nutzer eine geänderte interne Repräsentation nicht – etwa der Wechsel von einer Liste zu einer Map. Genau das ist der Nutzen von Kapselung."
  ],
  "explanation": "Kapselung beschränkt den Zugriff auf den Zustand auf die Schnittstelle und ist das Mittel, um Information Hiding umzusetzen; die Repräsentation bleibt dadurch änderbar. Fallen: Getter/Setter für alles gelten nicht als Kapselung, und Kapselung bedeutet nicht, den Quellcode zu verstecken."
 },
 {
  "id": "c3q39",
  "chapter": 3,
  "lz": "LZ 03-09",
  "r": "R3",
  "extra": true,
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
   "Falsch: Strategy macht Algorithmen hinter einer gemeinsamen Schnittstelle austauschbar, etwa verschiedene Berechnungsverfahren. Die Inkompatibilität zwischen erwarteter und angebotener Schnittstelle bliebe damit bestehen.",
   "Falsch: Ein Proxy bietet dieselbe Schnittstelle wie das Original und steuert den Zugriff darauf, etwa für Caching, Zugriffsschutz oder Remote-Aufrufe. Er passt keine Schnittstelle an – genau das wäre hier aber nötig.",
   "Falsch: Eine Fassade bietet eine vereinfachte Schnittstelle zu einem komplexen Subsystem. Sie löst aber nicht gezielt die Inkompatibilität zu einer vom Client bereits erwarteten Schnittstelle – dafür ist der Adapter gedacht.",
   "Richtig: Der Adapter übersetzt zwischen der von Ihrem System erwarteten und der vom Zahlungsdienstleister angebotenen Schnittstelle, ohne eine von beiden zu ändern. Zugleich kapselt er die Fremdabhängigkeit an einer Stelle."
  ],
  "explanation": "Inkompatible Schnittstellen löst der Adapter, indem er zwischen erwarteter und vorhandener Schnittstelle übersetzt. Fallen: Die Fassade vereinfacht ein Subsystem, der Proxy behält die Schnittstelle bei, und Strategy tauscht Algorithmen aus."
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
   "Richtig: Ein Baustein mit klarem Zweck und sauberer Schnittstelle passt auch in andere Kontexte. Wiederverwendbarkeit ist ein Ziel der Modularisierung und folgt aus einem guten Schnitt, nicht aus nachträglicher Verallgemeinerung.",
   "Falsch: Modularisierung erzeugt eher mehr Aufrufe über Schnittstellen statt weniger. Performance ist dabei ein abzuwägender Trade-off, aber kein Ziel der Modularisierung.",
   "Falsch: Übergeneralisierung erhöht die Komplexität und baut auf Vorrat (YAGNI). Wiederverwendbarkeit entsteht durch einen klaren Schnitt entlang von Verantwortungen, nicht durch maximale Generik.",
   "Richtig: Klar abgegrenzte Module mit definierten Schnittstellen erlauben getrennte, parallele Arbeit mehrerer Teams. Abgestimmt werden muss nur der Schnittstellenvertrag, nicht jedes interne Detail.",
   "Richtig: Verbirgt jedes Modul seine Interna hinter einer Schnittstelle (Geheimnisprinzip), wirkt eine Änderung meist nur lokal. Das ist ein Kernziel der Modularisierung und verbessert die Wartbarkeit."
  ],
  "explanation": "Modularisierung zielt auf lokal begrenzte Änderungen, parallele Entwicklung und Wiederverwendbarkeit durch klare Schnitte. Fallen: Maximale Generik (YAGNI) und weniger Aufrufe klingen nach Qualität, sind aber keine Ziele – Modularisierung erzeugt eher mehr Schnittstellenaufrufe."
 },
 {
  "id": "c3q41",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R1",
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
   "Falsch: Wiederverwendung vermeidet Duplikation, senkt aber nicht die Kopplung. Im Gegenteil: Alle 40 Nutzer hängen nun am selben Baustein, und Änderungen an ihm betreffen sie alle.",
   "Richtig: Viele Abhängige vertragen keine häufigen Vertragsänderungen. Eine stabile, versionierte Schnittstelle erlaubt Weiterentwicklung, ohne alle Nutzer gleichzeitig zur Anpassung zu zwingen.",
   "Falsch: Viel genutzte, stabile Bausteine sollten eher abstrakt sein (Stable-Abstractions-Gedanke). So lassen sie sich erweitern, ohne sie selbst zu ändern; eine konkrete Implementierung wäre schwer anpassbar.",
   "Falsch: Generalisieren ohne konkreten Bedarf verstößt gegen YAGNI. Man errät dabei oft die falschen Variationspunkte und erhöht die Komplexität, ohne dass künftige Nutzer davon profitieren.",
   "Richtig: Um viele Nutzer zu bedienen, braucht ein Baustein Konfiguration, Varianten und Erweiterungspunkte. Diese Allgemeinheit kostet Komplexität – ein bekannter Preis starker Wiederverwendung.",
   "Richtig: Jeder Nutzer ist eine eingehende (afferente) Abhängigkeit. Bei 40 Nutzern ist die afferente Kopplung hoch, was die Bibliothek stabil im Sinne von schwer änderbar macht."
  ],
  "explanation": "Starke Wiederverwendung erhöht die afferente Kopplung und meist die Allgemeinheit und Komplexität; sie verlangt stabile, versionierte Schnittstellen. Fallen: „weniger Duplikate = weniger Kopplung“ verwechselt DRY mit Entkopplung, und vorsorgliches Generalisieren verstößt gegen YAGNI."
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
    "text": "Abhängigkeiten zeigen nur in eine Richtung und bilden keine Zyklen.",
    "cat": 0
   },
   {
    "text": "Zwei Bausteine, die sich gegenseitig direkt aufrufen.",
    "cat": 1
   }
  ],
  "rowExpl": [
   "Ein zentraler, häufig geänderter Baustein verbreitet jede Änderung auf fast alle abhängigen Bausteine. Das macht Änderungen aufwendig und riskant und schadet der Wartbarkeit.",
   "Werden interne Datenstrukturen 1:1 nach außen abgebildet, verletzt das das Geheimnisprinzip: Nutzer hängen an Interna, und jede interne Änderung schlägt nach außen durch. Das schadet der Wartbarkeit.",
   "Ein klarer fachlicher Zweck je Baustein bedeutet hohe Kohäsion. Änderungen bleiben lokal und der Baustein ist leichter zu verstehen, das fördert die Wartbarkeit.",
   "Abhängigkeiten in nur einer Richtung ohne Zyklen halten Änderungen und Tests beherrschbar, weil Bausteine einzeln verstanden und geprüft werden können. Das fördert die Wartbarkeit.",
   "Gegenseitige Direktaufrufe bilden einen Zyklus: Die beiden Bausteine lassen sich nur gemeinsam ändern und testen. Das schadet der Wartbarkeit und ist das Gegenteil zyklenfreier Abhängigkeiten."
  ],
  "explanation": "Ein häufig geänderter Baustein, von dem fast alle abhängen, verbreitet Änderungen breit (schadet). Nach außen abgebildete Interna verletzen das Geheimnisprinzip (schadet), und gegenseitige Direktaufrufe bilden einen Zyklus (schadet). Klarer Zweck je Baustein bedeutet hohe Kohäsion (fördert). Abhängigkeiten ohne Zyklen halten Änderungen und Tests beherrschbar (fördert)."
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
   "Fachkomponenten jeweils einer einzelnen Schicht zuordnen.",
   "Die Bausteine nach dem vorhandenen Datenbankschema schneiden."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Der fachliche Schnitt folgt dem Problemraum und ist meist langlebiger als jede Technologie. Wird die Technik daran ausgerichtet und davon getrennt, bleibt die Fachlogik testbar und die Technik austauschbar.",
   "Falsch: Technik-first zwingt die Fachlichkeit in technische Grenzen, die mit dem Problem nichts zu tun haben. Fachliche Änderungen, etwa an der Tarifberechnung, verteilen sich dann über viele Bausteine.",
   "Falsch: Fachkomponenten verlaufen quer zu den Schichten: „Vertrag“ braucht UI-, Logik- und Persistenzanteile. Wer jede Fachkomponente genau einer Schicht zuordnet, zerreißt die Fachlichkeit oder vermischt beide Strukturierungen.",
   "Falsch: Ein gewachsenes Datenbankschema spiegelt oft historische und technische Entscheidungen wider. Ein Schnitt nach Tabellen klingt fachlich, ergibt aber datengetriebene statt verantwortungsorientierte Bausteine."
  ],
  "explanation": "Fachliches und Technisches werden getrennt, der Schnitt erfolgt fachlich und die Technik dient der Fachlichkeit. Fallen: Technik-first, die Gleichsetzung von Fachkomponenten mit Schichten und ein Schnitt nach Tabellen, der nur fachlich klingt."
 },
 {
  "id": "c3q43",
  "chapter": 3,
  "lz": "LZ 03-03",
  "r": "R3",
  "extra": true,
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
   "Falsch: Miller trifft keine Aussage über Schnittstellenoperationen. Seine Beobachtung betrifft die begrenzte Kapazität des Kurzzeitgedächtnisses; Schnittstellen schneidet man nach fachlichem Zweck.",
   "Richtig: Menschen erfassen nur etwa 7±2 Informationseinheiten gleichzeitig. Pro Zerlegungsebene sollten deshalb überschaubar viele Elemente stehen; werden es mehr, gruppiert man hierarchisch.",
   "Falsch: Hier wird die Zahl auf Teamgrößen übertragen. Miller bezieht sich auf gleichzeitig fassbare Informationseinheiten, nicht auf Organisationsfragen wie die Größe von Entwurfsteams.",
   "Falsch: Es ist keine Obergrenze für das Gesamtsystem, sondern eine Faustregel pro Darstellungsebene. Hierarchisch gegliedert kann ein System sehr viele Module enthalten und trotzdem verständlich bleiben."
  ],
  "explanation": "7±2 ist eine kognitive Faustregel je Darstellungs- bzw. Zerlegungsebene und damit ein Argument für hierarchische Zerlegung. Falle: die Zahl als harte Grenze für Module im Gesamtsystem, Teamgrößen oder Schnittstellenoperationen lesen."
 },
 {
  "id": "c3q44",
  "chapter": 3,
  "lz": "LZ 03-05",
  "r": "R2",
  "type": "multi",
  "q": "Ein Team beginnt den Entwurf eines neuen Systems, obwohl die Anforderungen noch nicht abschließend geklärt sind. Welche Aussagen zum Vorgehen treffen zu?",
  "options": [
   "Feedback ist erst sinnvoll, wenn der Entwurf stabil ist.",
   "Entwurf und Anforderungsklärung beeinflussen sich gegenseitig.",
   "Feedback kann schon zu einem unfertigen Entwurf eingeholt werden und reduziert so das Risiko.",
   "Entscheidungen werden revidiert, wenn sich Anforderungen ändern; neue technische Erkenntnisse sind dafür kein Grund.",
   "Neue Erkenntnisse sind ein legitimer Grund, getroffene Entscheidungen zu revidieren.",
   "Ein Referenzmodell ersetzt eigene Abwägungen weitgehend."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Falsch: Gerade frühes Feedback, z. B. über Prototypen, Spikes oder Reviews, deckt falsche Annahmen auf, solange Korrekturen noch günstig sind. Wer bis zur Stabilität wartet, zementiert womöglich Fehler, die später teuer werden.",
   "Richtig: Entwurfsideen werfen neue Fragen an die Anforderungen auf, und geklärte Anforderungen verändern den Entwurf. Beides verläuft iterativ und verzahnt – das Curriculum betont dieses Wechselspiel ausdrücklich.",
   "Richtig: Frühe Rückmeldung, etwa durch Reviews oder Prototypen, deckt falsche Annahmen auf, solange Korrekturen günstig sind. Das senkt das Risiko von Entscheidungen unter Unsicherheit.",
   "Falsch: Auch neue Erkenntnisse ohne geänderte Anforderungen, etwa aus Prototypen, Lasttests oder Erfahrungen mit einer Technologie, können eine Entscheidung kippen. Entscheidungen beruhen auf Annahmen, und die können sich als falsch erweisen.",
   "Richtig: Entscheidungen beruhen auf Annahmen. Zeigen Prototypen, Messungen oder Erfahrungen, dass sie nicht tragen, ist eine Revision die richtige Konsequenz.",
   "Falsch: Ein Referenzmodell oder eine Referenzarchitektur ist ein nützlicher Ausgangspunkt. Ob es zu den konkreten Anforderungen und Randbedingungen passt, muss man trotzdem selbst prüfen und abwägen."
  ],
  "explanation": "Architekturentwurf ist iterativ: Entwurf und Anforderungen beeinflussen sich gegenseitig, Feedback kommt früh, und neue Erkenntnisse sind ein legitimer Grund für Revisionen. Fallen: auf einen stabilen Entwurf warten, Revisionen nur bei geänderten Anforderungen zulassen und annehmen, ein Referenzmodell nehme das eigene Abwägen ab."
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
   "Falsch: Ohne Abhängigkeiten könnten Bausteine nicht zusammenarbeiten, und das System erbrächte keine Gesamtfunktion. Das Ideal ist angemessene, nicht fehlende Kopplung.",
   "Richtig: Ohne Abhängigkeiten gäbe es keine Zusammenarbeit. Ziel ist deshalb eine Kopplung, die so lose wie möglich und so eng wie fachlich nötig ist – also funktional ausreichend und bewusst gewählt.",
   "Falsch: Verwandt, aber verschieden: Kopplung betrifft die Beziehungen zwischen Bausteinen, Kohäsion den Zusammenhalt innerhalb eines Bausteins. Hohe Kohäsion begünstigt zwar lose Kopplung, ist aber ein eigenes Kriterium.",
   "Falsch: Verteilung auf mehrere Server ändert die fachliche Abhängigkeit nicht. Sie fügt sogar neue Kopplungsarten hinzu, etwa über Netzwerk, Verfügbarkeit und Datenformate – ein „verteilter Monolith“ ist eng gekoppelt.",
   "Richtig: Ein Baustein mit wenigen Abhängigkeiten lässt sich leicht isoliert testen, weil diese wenigen Abhängigkeiten durch Test-Doubles wie Mocks oder Stubs ersetzt werden können."
  ],
  "explanation": "Lose Kopplung heißt funktional ausreichend, nicht null: so lose wie möglich, so eng wie nötig. Sie erleichtert Änderungen und isolierte Tests. Fallen: Verwechslung mit Kohäsion oder die Annahme, physische Verteilung entkopple automatisch."
 },
 {
  "id": "c3q46",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Führt die jeweilige Beziehung eher zu enger oder zu loser Kopplung?",
  "categories": [
   "Eher enge Kopplung",
   "Eher lose Kopplung"
  ],
  "rows": [
   {
    "text": "Ableitung von einer konkreten Basisklasse.",
    "cat": 0
   },
   {
    "text": "Delegation an ein Objekt hinter einer Schnittstelle.",
    "cat": 1
   },
   {
    "text": "Direkter Zugriff auf die Datenbanktabellen eines anderen Bausteins.",
    "cat": 0
   },
   {
    "text": "Aufruf über eine schmale, stabile Schnittstelle.",
    "cat": 1
   },
   {
    "text": "Annahme einer festen Aufrufreihenfolge zwischen zwei Bausteinen (zeitliche Kopplung).",
    "cat": 0
   }
  ],
  "rowExpl": [
   "Implementierungsvererbung bindet die Unterklasse an die Interna der Basisklasse. Änderungen dort wirken direkt durch, das ist enge Kopplung und keine lose über eine Schnittstelle.",
   "Der Aufrufer kennt nur die Schnittstelle, nicht die konkrete Implementierung. Er verlangt wenig Wissen über das Objekt dahinter und ist deshalb lose gekoppelt.",
   "Der Zugriff auf fremde Datenstrukturen bindet an Interna des anderen Bausteins. Jede Änderung am Schema schlägt durch, das ist enge Kopplung und keine lose.",
   "Eine schmale, stabile Schnittstelle begrenzt, was beide Seiten voneinander wissen müssen. Änderungen dahinter bleiben unsichtbar, deshalb ist die Kopplung eher lose.",
   "Die Annahme einer festen Aufrufreihenfolge bindet an zeitliches Verhalten des anderen Bausteins. Das ist zeitliche Kopplung und damit eng, auch wenn im Code keine direkte Abhängigkeit sichtbar ist."
  ],
  "explanation": "Implementierungsvererbung, Zugriff auf fremde Datenstrukturen und Annahmen über Aufrufreihenfolgen koppeln eng, weil sie an Interna oder an zeitliches Verhalten binden. Delegation hinter einer Schnittstelle und Aufrufe über schmale, stabile Schnittstellen verlangen wenig Wissen übereinander und koppeln lose."
 },
 {
  "id": "c3q47",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R1",
  "type": "multi",
  "q": "Ein Team ersetzt direkte Methodenaufrufe durch Nachrichten über einen Broker. Was gilt für diese dynamische Kopplung?",
  "options": [
   "Sender und Empfänger sind nun fachlich unabhängig.",
   "Formatänderungen sind Sache des Brokers.",
   "Die fachliche Abhängigkeit bleibt bestehen.",
   "Sie ist in statischen Codeanalysen schwerer zu sehen.",
   "Die Kopplung sinkt, weil kein Import mehr nötig ist."
  ],
  "correct": [
   2,
   3
  ],
  "optExpl": [
   "Falsch: Der Broker entkoppelt zeitlich und technisch, aber nicht fachlich. Format und Bedeutung der Nachricht bleiben eine gemeinsame Abhängigkeit: Ein Empfänger, der Bestellungen verarbeitet, braucht weiterhin die erwarteten Bestelldaten.",
   "Falsch: Ändert der Sender das Nachrichtenformat, bricht der Empfänger trotzdem. Der Broker leitet Nachrichten nur weiter und übersetzt sie nicht; die Formatabhängigkeit besteht weiter zwischen Sender und Empfänger.",
   "Richtig: Wer bestimmte Daten oder Reaktionen erwartet, hängt weiter vom anderen ab – egal, ob die Abhängigkeit zur Compile- oder zur Laufzeit aufgelöst wird. Dynamische Kopplung ändert den Mechanismus, nicht die fachliche Beziehung.",
   "Richtig: Die Abhängigkeit entsteht erst zur Laufzeit über Nachrichten, Topics oder Konfiguration und taucht in Importen nicht auf. Statische Analysewerkzeuge übersehen sie daher leicht; sie muss explizit dokumentiert werden.",
   "Falsch: Fehlende Importe beseitigen nur die statische Sicht auf die Abhängigkeit. Dynamisch statt statisch gekoppelt zu sein senkt die Kopplung nicht notwendigerweise, sondern macht sie oft nur unsichtbarer."
  ],
  "explanation": "Dynamische Kopplung über einen Broker verlagert Abhängigkeiten in die Laufzeit und versteckt sie vor statischer Analyse, statt sie zwingend zu verringern. Fallen: „Ereignisbasiert = entkoppelt“ stimmt nur zeitlich und technisch; fachliche und Formatabhängigkeiten bleiben."
 },
 {
  "id": "c3q48",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R1",
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
   "Falsch: Afferent und efferent sind vertauscht: A nutzt keinen anderen Baustein, hat also keine ausgehenden (efferenten) Abhängigkeiten. Instabil machen gerade viele ausgehende Abhängigkeiten, nicht viele Nutzer.",
   "Falsch: „Stabil“ ist hier eine Kopplungsaussage, keine Qualitätsaussage. Die Metrik sagt nichts über Reife oder Fehlerfreiheit; ein viel genutzter Baustein kann trotzdem voller Fehler sein.",
   "Falsch: Viel genutzte, stabile Bausteine sollten eher abstrakt sein, damit man sie erweitern kann, ohne sie zu ändern. Eine konkrete Implementierung erschwert notwendige Anpassungen bei zwölf Nutzern.",
   "Richtig: Zwölf eingehende (afferente) Abhängigkeiten bedeuten: Jede Änderung an A kann zwölf Nutzer treffen. „Stabil“ meint hier schwer änderbar, weshalb Änderungen an A riskant sind."
  ],
  "explanation": "Afferent heißt eingehend: Viele Nutzer machen einen Baustein stabil im Sinne von schwer änderbar, weshalb er eher abstrakt sein sollte. Fallen: afferent und efferent vertauschen oder „stabil“ als „ausgereift und fehlerfrei“ lesen."
 },
 {
  "id": "c3q49",
  "chapter": 3,
  "lz": "LZ 03-10",
  "r": "R1",
  "type": "multi",
  "q": "In einem Projekt stellen die Teams fest, dass Fehlerbehandlung, Protokollierung und Zugriffsschutz in jedem Baustein anders gelöst sind. Die Architektin schlägt vor, dafür Querschnittskonzepte zu erarbeiten. Welche Aussagen zu Querschnittskonzepten treffen laut Curriculum zu?",
  "options": [
   "Energieeffizienz kann Gegenstand eines Querschnittskonzepts sein.",
   "Sie sind erst nötig, wenn die meisten Bausteine betroffen sind.",
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
   "Richtig: Das Curriculum nennt Energieeffizienz ausdrücklich als mögliches Thema eines Querschnittskonzepts, neben Persistenz, Kommunikation, GUI, Fehlerbehandlung und Nebenläufigkeit. Gerade weil es leicht übersehen wird, ist es eine beliebte Prüfungsfrage.",
   "Falsch: Ein Konzept lohnt sich, sobald mehrere oder viele Bausteine ein Thema einheitlich lösen sollen. Wer wartet, bis wirklich alle betroffen sind, erntet Wildwuchs mit vielen unterschiedlichen Einzellösungen.",
   "Falsch: Querschnittskonzepte sollte man früh festlegen. Später finden sich bereits uneinheitliche Einzellösungen in den Bausteinen, und die nachträgliche Vereinheitlichung wird teuer.",
   "Richtig: Das Curriculum hält fest, dass Querschnittskonzepte über Systemgrenzen hinweg wiederverwendbar sein können. Beispiel: Ein unternehmensweites Logging- oder Security-Konzept gilt für mehrere Systeme.",
   "Falsch: Eine fachliche Einzelaufgabe wird nicht zum Querschnittsthema, nur weil ihr Ergebnis an mehreren Stellen angezeigt wird. Die Rabattberechnung gehört in einen Fachbaustein; querschnittlich ist ein technisches Thema wie Fehlerbehandlung.",
   "Richtig: Querschnittskonzepte hängen zusammen und beeinflussen sich gegenseitig. Beispiel: Sicherheit, Fehlerbehandlung und Protokollierung – was darf in einer Fehlermeldung oder im Log stehen, ohne vertrauliche Daten preiszugeben?"
  ],
  "explanation": "Querschnittskonzepte lösen Themen, die viele Bausteine betreffen, einheitlich – auch Energieeffizienz; sie beeinflussen sich gegenseitig und sind systemübergreifend wiederverwendbar. Fallen: zu spät festlegen und fachliche Einzelaufgaben als Querschnitt einordnen."
 },
 {
  "id": "c3q50",
  "chapter": 3,
  "lz": "LZ 03-12",
  "r": "R3",
  "extra": true,
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
   "Falsch: Umgekehrt: ACID bietet die strikteren Garantien wie Atomarität, Konsistenz, Isolation und Dauerhaftigkeit. BASE lockert diese bewusst zugunsten von Verfügbarkeit und Skalierbarkeit.",
   "Richtig: BASE (Basically Available, Soft state, Eventually consistent) nimmt kurzzeitig abweichende Lesestände zwischen Replikaten in Kauf, um verfügbar zu bleiben. Für einen Produktkatalog ist das meist vertretbar.",
   "Falsch: Eventual consistency bedeutet verzögerte, nicht verlorene Konsistenz: Replikate gleichen sich später an. Geschriebene Daten gehen dadurch nicht verloren, sie sind nur kurz nicht überall sichtbar.",
   "Falsch: Vertauscht: ACID ist typisch für relationale Datenbanken, BASE häufig für verteilte NoSQL-Speicher. Die Entscheidung für BASE deutet also eher in Richtung NoSQL."
  ],
  "explanation": "ACID steht für strikte Transaktionskonsistenz, BASE für Verfügbarkeit mit schlussendlicher Konsistenz der Replikate. Fallen: „eventually consistent“ als Datenverlust deuten oder die typische Zuordnung relational/ACID und NoSQL/BASE vertauschen."
 },
 {
  "id": "c3q51",
  "chapter": 3,
  "lz": "LZ 03-12",
  "r": "R3",
  "extra": true,
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
   "Richtig: Tritt eine Netzwerkpartition auf, kann ein verteiltes System nicht zugleich alle Knoten konsistent halten und jede Anfrage beantworten. Man muss abwägen: Anfragen ablehnen (Konsistenz) oder mit möglicherweise veralteten Daten antworten (Verfügbarkeit).",
   "Falsch: Die populäre Formel „wähle zwei aus drei“ ist irreführend. Die Abwägung wird erst bei einer Partition erzwungen; ohne Partition sind Konsistenz und Verfügbarkeit gemeinsam erreichbar.",
   "Falsch: Redundanz hebt die Grenze nicht auf: Während einer Partition können die getrennten Teile sich nicht abstimmen, egal wie viele Replikate es gibt. Mehr Knoten können sogar mehr Partitionsmöglichkeiten schaffen.",
   "Falsch: CAP steht für Consistency, Availability und Partition tolerance. Kosten und Performance gehören nicht dazu; die Abwägung zwischen Latenz und Konsistenz beschreibt eher die Erweiterung PACELC."
  ],
  "explanation": "Das CAP-Theorem erzwingt bei einer Netzwerkpartition die Wahl zwischen Konsistenz und Verfügbarkeit. Fallen: das vereinfachte „immer zwei aus drei“ – ohne Partition gibt es diesen Zwang nicht –, der Glaube, Redundanz löse das Problem, und falsche Buchstabenbedeutungen (R3)."
 },
 {
  "id": "c3q52",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
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
   "Falsch: Layer-Bridging überspringt eine Zwischenschicht nach unten, hier die Fachschicht. Callbacks von unten nach oben sind ein anderer Mechanismus, um Aufrufe nach oben ohne direkte Abhängigkeit zu ermöglichen.",
   "Falsch: Eher umgekehrt: Die Datenzugriffsschicht wird schwerer austauschbar, weil sie nun von zwei Schichten genutzt wird. Die Fachschicht wird umgangen, ihre Austauschbarkeit gewinnt dadurch nichts.",
   "Richtig: Gelockerte Schichtung erlaubt das Überspringen von Schichten nach unten. Die UI hängt dann aber an zwei Schichten, was Abhängigkeiten erhöht und bewusst entschieden und dokumentiert werden sollte, z. B. für reine Lesezugriffe.",
   "Falsch: Auch die gelockerte Variante ist eine Schichtenarchitektur. Verboten bleiben Aufrufe nach oben; das Überspringen nach unten ist gerade das Merkmal der gelockerten gegenüber der strikten Schichtung."
  ],
  "explanation": "Layer-Bridging = Überspringen einer Zwischenschicht nach unten; in der gelockerten Schichtenarchitektur erlaubt, aber mit zusätzlichen Abhängigkeiten. Fallen: Verwechslung mit Callbacks nach oben und die Annahme, die Architektur sei dadurch nicht mehr geschichtet."
 },
 {
  "id": "c3q53",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "multi",
  "q": "Ein Team will eine streng geschichtete Architektur. Welche Regeln gehören idealtypisch dazu?",
  "options": [
   "Eine Schicht darf die tieferen Schichten überspringen und direkt nutzen.",
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
   "Falsch: Dass eine Schicht alle tieferen Schichten nutzen darf, beschreibt die gelockerte (offene) Schichtung. Bei strenger Schichtung ist das Überspringen ausdrücklich verboten, um die Austauschbarkeit einzelner Schichten zu sichern.",
   "Richtig: Bausteine einer Schicht sollen auf vergleichbarer Abstraktionsebene liegen, z. B. fachliche Logik in der Domänenschicht, technische Details darunter. So hat jede Schicht eine klare, verständliche Rolle.",
   "Richtig: Das ist der Kern der strikten Variante: Jede Schicht nutzt nur die unmittelbar darunterliegende, ohne Schichten zu überspringen. Dadurch lässt sich eine Schicht austauschen, ohne höhere Schichten anzupassen.",
   "Falsch: Ein Zyklus verschwindet nicht durch Umverteilung: Die wechselseitige Abhängigkeit bleibt bestehen, und einer der Bausteine müsste dann eine höhere Schicht aufrufen – ein verbotener Aufruf nach oben. Zyklen löst man z. B. per Dependency Inversion auf.",
   "Falsch: Schichten sind logische Strukturen; ob sie in einem oder mehreren Prozessen laufen, ist eine Frage der Verteilung (Tiers). Eine strenge Schichtung verlangt keine physische Trennung.",
   "Richtig: Aufwärtsabhängigkeiten würden Zyklen erzeugen und die Schichtung aufheben. Benachrichtigungen nach oben laufen deshalb über Callbacks oder Ereignisse, deren Schnittstelle die tiefere Schicht definiert."
  ],
  "explanation": "Strikt geschichtet heißt: Abhängigkeiten nur nach unten, nur zur direkt darunterliegenden Schicht, ähnliches Abstraktionsniveau innerhalb einer Schicht. Fallen: Die Nutzung aller tieferen Schichten ist die gelockerte Variante, Schichten sind keine Tiers, und Zyklen löst Umverteilen nicht."
 },
 {
  "id": "c3q54",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "single",
  "q": "Ein System hat sieben strikt übereinanderliegende Schichten. Welcher Nachteil ist dafür am ehesten typisch?",
  "options": [
   "Die Schichten müssen auf getrennten Servern betrieben werden.",
   "Obere Schichten müssen Interna der unteren kennen.",
   "Durchreichen kostet Latenz und erzeugt Boilerplate.",
   "Ein fachlicher Schnitt ist nicht mehr möglich."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Schichten sind logisch, nicht physisch. Die Zuordnung zu Servern (Tiers) ist eine separate Verteilungsentscheidung; sieben Schichten können problemlos in einem einzigen Prozess laufen.",
   "Falsch: Gerade nicht: Obere Schichten nutzen nur die Schnittstelle der direkt darunterliegenden Schicht. Das Verbergen der Interna ist ja der Vorteil strikter Schichtung.",
   "Richtig: Bei strikter Schichtung muss jede Schicht Aufrufe weiterleiten, auch wenn sie nichts hinzufügt. Bei sieben Schichten kostet das spürbar Laufzeit und erzeugt viel gleichförmigen Durchreich-Code.",
   "Falsch: Schichten lassen sich mit fachlichen Schnitten kombinieren, etwa eigene Schichten je Fachmodul oder vertikale Slices. Tiefe Schichtung verhindert einen fachlichen Schnitt also nicht."
  ],
  "explanation": "Tiefe strikte Schichtung kostet Latenz durch Durchreichen und erzeugt viel Weiterreich-Code, auch wenn Schichten nichts hinzufügen. Fallen: Schichten mit Servern (Tiers) gleichsetzen und übersehen, dass obere Schichten gerade keine Interna kennen müssen."
 },
 {
  "id": "c3q55",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
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
   "Richtig: Aktive Filter treiben den Datentransport selbst an: Sie holen Daten aus der eingehenden Pipe (pull) oder schieben Ergebnisse weiter (push). Passive Filter werden dagegen von außen beliefert bzw. ausgelesen.",
   "Falsch: Nebenläufigkeit hängt nicht an dieser Unterscheidung. Sowohl aktive als auch passive Filter können sequenziell oder nebenläufig betrieben werden; aktiv/passiv betrifft nur den Antrieb des Datenflusses.",
   "Falsch: Beide Filterarten verarbeiten bzw. transformieren Daten – das ist der Zweck jedes Filters. Die Unterscheidung betrifft nicht die Verarbeitung, sondern wer den Datenfluss antreibt.",
   "Falsch: Filter kennen einander grundsätzlich nicht; sie sind nur über Pipes verbunden. Das macht sie austauschbar und neu kombinierbar – unabhängig davon, ob sie aktiv oder passiv sind."
  ],
  "explanation": "Aktiv oder passiv beschreibt bei Pipes and Filters, wer den Datenfluss antreibt: Aktive Filter holen bzw. schieben Daten selbst, passive werden bedient. Fallen: Verwechslung mit Transformation, Parallelität oder Kenntnis der Nachbarfilter – Filter kennen einander nie."
 },
 {
  "id": "c3q56",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
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
   "Richtig: Da die Filter nur über Datenströme verbunden sind, kann jede Stufe arbeiten, sobald Daten anliegen. Während ein Datensatz angereichert wird, kann der nächste bereits bereinigt werden – das erlaubt Nebenläufigkeit.",
   "Richtig: Filter kennen einander nicht und sind nur über Pipes mit einem vereinbarten Datenformat verbunden. Ein Schritt, etwa die Bereinigung, kann ersetzt werden, ohne die anderen zu ändern.",
   "Falsch: Interaktive Abläufe mit Rückfragen und Verzweigungen passen schlecht zu einem gerichteten Datenstrom. Pipes and Filters eignet sich für Stapel- und Stromverarbeitung wie diesen Import, nicht für Dialoge.",
   "Falsch: Pipes and Filters kommt gerade ohne gemeinsamen Zustand aus; das ist Stärke und Grenze zugleich. Gemeinsamer Zustand würde die Filter koppeln und ihre Austauschbarkeit und Nebenläufigkeit zerstören.",
   "Richtig: Ein Filter kennt die Vorgeschichte der Daten nicht. Fehler sinnvoll zu melden, fehlerhafte Datensätze zuzuordnen oder Teilergebnisse zurückzurollen ist deshalb aufwendig."
  ],
  "explanation": "Pipes and Filters bietet austauschbare, nebenläufig arbeitende Stufen, hat aber eine anspruchsvolle Fehlerbehandlung und keinen gemeinsamen Zustand. Fallen: Eignung für interaktive Abläufe annehmen und gemeinsamen Zustand für einen Vorteil halten."
 },
 {
  "id": "c3q59",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "multi",
  "q": "Zwei Microservices eines Shops sollen Bestelldaten austauschen. Welche Gestaltungen entsprechen den Microservice-Prinzipien?",
  "options": [
   "Austausch über eine gemeinsam genutzte Datenbank.",
   "Lose gekoppelt über technologieneutrale Schnittstellen.",
   "Eine gemeinsame Bibliothek mit den Domänenobjekten beider Services, die beide direkt verwenden.",
   "Jeder Service behält seine Daten und gibt sie nur über seine Schnittstelle heraus.",
   "Ein einheitliches internes Persistenzformat für die Services.",
   "Asynchrone Ereignisse nutzen, wenn der Aufrufer kein sofortiges Ergebnis braucht."
  ],
  "correct": [
   1,
   3,
   5
  ],
  "optExpl": [
   "Falsch: Eine gemeinsam genutzte Datenbank löst scheinbar Konsistenzprobleme, koppelt die Services aber eng über das Schema. Jede Schemaänderung betrifft alle, und die eigene Datenhaltung pro Service geht verloren.",
   "Richtig: Lose gekoppelt über technologieneutrale Schnittstellen wie HTTP/REST oder Messaging bleiben die Services unabhängig deploybar und intern frei in der Technikwahl. Das ist ein Kernmerkmal des Microservice-Stils.",
   "Falsch: Eine gemeinsame Domänenbibliothek koppelt die Services über Typen und Release-Zyklen. Änderungen daran erzwingen koordinierte Auslieferungen und heben die Unabhängigkeit auf.",
   "Richtig: Wer seine Daten hinter der eigenen Schnittstelle hält, kann Schema und Technologie unabhängig ändern. Das ist ein Kernprinzip der Muster.",
   "Falsch: Interne Formate wie das Persistenzschema sind Sache des jeweiligen Services und sollen frei wählbar bleiben. Vereinheitlicht wird höchstens der Vertrag der Schnittstelle – sonst koppelt man die Services über ihre Interna.",
   "Richtig: Asynchrone Ereignisse vermeiden zeitliche Kopplung und Ausfallketten. Wo kein sofortiges Ergebnis nötig ist, sind sie eine passende Form des Austauschs."
  ],
  "explanation": "Microservices tauschen Daten lose gekoppelt über technologieneutrale Schnittstellen aus und behalten ihre eigene Datenhaltung. Fallen: Die gemeinsame Datenbank, einheitliche interne Formate und gemeinsam genutzte Domänenbibliotheken wirken praktisch, heben aber die Unabhängigkeit auf."
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
  "rowExpl": [
   "Filter sind unabhängige Verarbeitungsschritte, die über Datenströme verbunden sind und deshalb gut parallel laufen können. Das ist eine Stärke von Pipes & Filter, nicht der Schichten.",
   "In Schichten verteilt sich ein fachliches Konzept auf mehrere Ebenen, sodass eine fachliche Änderung oft jede davon berührt. Das ist ein typischer Nachteil der Schichtenarchitektur, nicht von Pipes & Filter.",
   "Pipes & Filter sind auf durchlaufende Datenverarbeitung ausgelegt, nicht auf Dialoge mit Rückfragen. Für interaktive Abläufe sind sie eher ungeeignet, anders als eine Schichtenarchitektur.",
   "Die gelockerte Schichtung erlaubt Zugriffe auch auf tiefer liegende Ebenen, nicht nur auf die direkt darunter. Das Konzept gibt es nur bei Schichten, Pipes & Filter kennen keine Ebenen.",
   "Aufrufe werden Ebene für Ebene durchgereicht, jede Ebene kostet Zeit. Die Latenz entsteht hier durch das Durchreichen und nicht durch eine Pipeline, deshalb gehört sie zur Schichtenarchitektur.",
   "Fehler können in jedem Schritt der Kette auftreten, und die Schritte sind unabhängig voneinander. Eine einheitliche Fehlerbehandlung ist darum schwierig, ein typischer Nachteil von Pipes & Filter."
  ],
  "explanation": "Pipes & Filter: Schritte gut parallelisierbar, für interaktive Dialoge eher ungeeignet, einheitliche Fehlerbehandlung schwierig. Schichten: fachliche Änderungen ziehen sich durch mehrere Ebenen, Durchreichen kostet Latenz, gelockerte Variante erlaubt Zugriff auf tiefere Ebenen. Falle: Latenz klingt nach Pipeline, entsteht hier aber durchs Durchreichen."
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
    "text": "Einheitlicher Umgang mit Nebenläufigkeit und gleichzeitigen Zugriffen.",
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
  "rowExpl": [
   "Der CSV-Export eines Monatsberichts ist eine einzelne fachliche Funktion und betrifft nicht viele Bausteine einheitlich. Deshalb ist er kein Querschnittskonzept.",
   "Nebenläufigkeit betrifft viele Bausteine und braucht einheitliche Regeln. Das Curriculum nennt sie ausdrücklich als Querschnittsthema, daher ist sie ein Querschnittskonzept.",
   "Die Rabattberechnung ist eine fachliche Einzelfunktion. Dass ihr Ergebnis an mehreren Stellen angezeigt wird, macht sie nicht zum Querschnittskonzept, deshalb gehört sie nicht hierher.",
   "Energieeffizienz, etwa das Schonen des Akkus, betrifft viele Bausteine und braucht einheitliche Regeln. Das Curriculum nennt sie ausdrücklich als Querschnittsthema, daher ist sie ein Querschnittskonzept."
  ],
  "explanation": "Querschnittskonzepte regeln Themen, die viele Bausteine einheitlich betreffen. Das Curriculum nennt unter anderem Nebenläufigkeit und Energieeffizienz ausdrücklich als Querschnittsthemen; CSV-Export und Rabattberechnung sind dagegen fachliche Einzelfunktionen und stehen nicht in dieser Liste. Falle: Die Rabattberechnung wird nicht zum Querschnittskonzept, nur weil ihr Ergebnis an mehreren Stellen erscheint."
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
   "Falsch: Gerade bei unsicheren Entscheidungen wie einer neuen Messaging-Technologie gehört Feedback an den Anfang. Erst nach dem Gesamtentwurf entdeckte Fehler sind teuer, weil darauf bereits viele weitere Entscheidungen aufbauen.",
   "Richtig: Ein Wegwerf-Prototyp darf bewusst nur eine Frage klären – hier: trägt die Technologie die Last? – und wird danach verworfen. So erhält man schnell belastbare Fakten, statt sich auf Herstellerangaben zu verlassen.",
   "Falsch: Ein Prototyp beantwortet eine Einzelfrage unter vereinfachten Bedingungen. Die Bewertung der Gesamtarchitektur gegen alle Qualitätsziele, etwa per Szenarien, bleibt trotzdem nötig.",
   "Falsch: Ein Wegwerf-Prototyp ist auf schnelle Erkenntnis optimiert, nicht auf Wartbarkeit oder Robustheit. Ihn zum Grundgerüst des Produktivcodes zu machen, schleppt bewusste Abkürzungen ins Produkt.",
   "Richtig: Jede Iteration liefert Fakten statt Vermutungen, etwa Messwerte oder Nutzerfeedback. Laut Curriculum senken kurze Iterationen das Risiko und verbessern Vorhersagen über Aufwand und Machbarkeit."
  ],
  "explanation": "Kurze Feedback-Schleifen prüfen unsichere Annahmen früh, z. B. per Wegwerf-Prototyp, und erhöhen die Prognostizierbarkeit. Fallen: Feedback erst am Ende einholen, Wegwerf-Prototypen in Produktion übernehmen oder sie als Ersatz für eine Architekturbewertung sehen."
 },
 {
  "id": "c3q61",
  "chapter": 3,
  "lz": "LZ 03-03",
  "r": "R3",
  "extra": true,
  "type": "single",
  "q": "Ein Team arbeitet nach dem Ansatz „evolutionäre Architektur“. Was kennzeichnet ihn am ehesten?",
  "options": [
   "Fitnessfunktionen machen Architekturreviews überflüssig.",
   "Qualitätsziele ergeben sich erst aus den Fitnessfunktionen.",
   "Automatisierte Prüfungen sichern Qualitäten bei Änderungen.",
   "Eine Checkliste, die das Team vor Releases abarbeitet."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Fitnessfunktionen ergänzen Reviews, ersetzen sie aber nicht. Schwer messbare Qualitäten, Trade-offs und neue Entscheidungen brauchen weiterhin menschliche Bewertung, etwa in einem szenariobasierten Review.",
   "Falsch: Umgekehrt: Fitnessfunktionen werden aus vorhandenen Qualitätszielen abgeleitet. Erst wenn klar ist, was wichtig ist (z. B. Antwortzeit unter 200 ms), kann man eine automatisierte Prüfung dafür bauen.",
   "Richtig: Fitnessfunktionen prüfen laufend, etwa in der Build-Pipeline, ob wichtige Qualitätsmerkmale erhalten bleiben – z. B. Abhängigkeitsregeln oder Lasttests. So kann sich die Architektur schrittweise weiterentwickeln, ohne unbemerkt zu erodieren.",
   "Falsch: Kennzeichnend ist gerade die Automatisierung und kontinuierliche Ausführung. Eine manuelle Checkliste vor dem Release wäre ein Review-Hilfsmittel und fängt Verschlechterungen erst spät ab."
  ],
  "explanation": "Evolutionäre Architektur entwickelt sich schrittweise weiter und sichert wichtige Qualitäten mit automatisierten Fitnessfunktionen bei jeder Änderung (R3-Thema). Fallen: Fitnessfunktionen ersetzen keine Reviews, folgen aus den Qualitätszielen statt sie zu definieren und sind keine manuelle Checkliste."
 },
 {
  "id": "c3q62",
  "chapter": 3,
  "lz": "LZ 03-05",
  "r": "R2",
  "type": "multi",
  "q": "Ein Projekt plant die Reihenfolge seiner Architekturentscheidungen. Welche Aussagen zu Feedback und Risiko treffen zu?",
  "options": [
   "Durchstiche lohnen sich in Großprojekten, in kleinen kaum.",
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
   "Falsch: Auch kleine Projekte haben unsichere Entscheidungen, etwa eine neue Bibliothek oder eine unbekannte Schnittstelle. Ein Durchstich ist oft schon mit wenig Aufwand möglich und senkt das Risiko früh.",
   "Richtig: Feedback ist ein Werkzeug des Risikomanagements: Das Unsicherste wird zuerst geprüft, etwa per Prototyp oder Durchstich. Erweist sich eine Entscheidung als falsch, ist Umsteuern früh noch billig.",
   "Falsch: Gerade instabile, unsichere Entwürfe brauchen früh Rückmeldung. Wartet man, bis der Entwurf stabil ist, sind Fehlentscheidungen bereits verbaut und Korrekturen deutlich teurer.",
   "Falsch: Gut verstandene Teile zuerst umzusetzen, erzeugt schnell sichtbaren Fortschritt, schiebt aber die Risiken nach hinten. Dort sind Überraschungen am teuersten, weil schon viel darauf aufbaut.",
   "Richtig: Das Curriculum fordert, Rückmeldung systematisch einzuholen: geplante Reviews, Demos, Prototypen und Messwerte. Zufälliges Feedback deckt Risiken nur lückenhaft und zu spät auf."
  ],
  "explanation": "Architekturentscheidungen werden nach Risiko geordnet: Das Unsicherste zuerst, abgesichert durch frühes und systematisch organisiertes Feedback. Fallen: „Einfaches zuerst“ wirkt effizient, verschiebt aber teure Überraschungen ans Ende, und Durchstiche lohnen sich auch in kleinen Projekten."
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
   "Der Vertrag beschränkt sich auf die Signaturen.",
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
   "Falsch: Bildet die Schnittstelle die internen Datenstrukturen 1:1 ab, sind die Nutzer an die Implementierung gekoppelt. Jede interne Änderung schlägt dann auf alle Aufrufer durch, und der Baustein ist nicht mehr austauschbar.",
   "Falsch: Zum Vertrag gehören neben den Signaturen auch Semantik, Vor- und Nachbedingungen und das Fehlerverhalten. Beispiel: Was passiert bei doppelter Zahlung oder unzureichender Deckung?",
   "Richtig: Eine gute Schnittstelle macht falsche Nutzung schwer, etwa durch klare Typen wie „Betrag mit Währung“ statt einer nackten Zahl und eindeutige Semantik. Das Curriculum nennt diese Eigenschaft ausdrücklich.",
   "Richtig: Die Nutzer sollen über die Schnittstelle alles erreichen können, was sie für ihre Aufgabe brauchen. Gemessen wird das an ihrem tatsächlichen Bedarf, nicht an allen denkbaren Fällen.",
   "Falsch: Vollständigkeit bezieht sich auf den Bedarf der Nutzer, nicht auf Vorrat. Operationen für hypothetische künftige Nutzer vergrößern die Schnittstelle unnötig und erschweren Lernen und Pflege (YAGNI).",
   "Richtig: Das Curriculum nennt leicht zu erlernen, zu benutzen und zu erweitern als wünschenswerte Eigenschaften von Schnittstellen. Eine verständliche Schnittstelle senkt Einarbeitungsaufwand und Fehlbenutzung."
  ],
  "explanation": "Wünschenswert sind Schnittstellen, die leicht zu erlernen, zu nutzen und zu erweitern, schwer zu missbrauchen und aus Nutzersicht funktional vollständig sind. Fallen: „vollständig“ mit Operationen auf Vorrat verwechseln und den Vertrag auf Signaturen reduzieren."
 },
 {
  "id": "c3q64",
  "chapter": 3,
  "lz": "LZ 03-07",
  "r": "R3",
  "extra": true,
  "type": "single",
  "q": "Ein Frontend lädt Kundendaten über ein entferntes API. Welcher Trade-off der Schnittstellengranularität trifft am ehesten zu?",
  "options": [
   "Fein ist flexibel, erzeugt aber viele teure Aufrufe.",
   "Feingranulare Schnittstellen koppeln loser.",
   "Granularität ist lokal wie remote gleich wichtig.",
   "Die Granularität folgt den internen Datenstrukturen."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Feingranulare Operationen sind vielseitig kombinierbar, führen bei entfernten Aufrufen aber zu vielen Roundtrips mit jeweils Netzwerklatenz. Grobe Operationen bündeln Daten effizient, sind dafür starrer.",
   "Falsch: Viele kleine Operationen binden den Aufrufer oft an Abläufe und Reihenfolgen des Anbieters. Er muss wissen, welche Aufrufe in welcher Folge nötig sind; das ist eher stärkere als losere Kopplung.",
   "Falsch: Bei lokalen Aufrufen im selben Prozess ist der Overhead pro Aufruf gering. Remote kostet jeder Aufruf Latenz und Serialisierung, deshalb ist die Granularität dort deutlich wichtiger.",
   "Falsch: Die Granularität richtet sich nach Nutzung und Kommunikationsweg. Interne Datenstrukturen nach außen abzubilden koppelt die Nutzer an die Implementierung und verletzt das Geheimnisprinzip."
  ],
  "explanation": "Feingranulare Schnittstellen sind flexibel, aber remote wegen vieler Roundtrips teuer; grobgranulare sind effizient, aber starrer. Fallen: Granularität unabhängig vom Kommunikationsweg bewerten, feine Schnittstellen pauschal für lose gekoppelt halten oder Interna abbilden."
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
   "Versionierung ist bei externen Schnittstellen nötig, bei internen verzichtbar.",
   "Ein neues optionales Feld ist meist rückwärtskompatibel."
  ],
  "correct": [
   0,
   2,
   5
  ],
  "optExpl": [
   "Richtig: Laut Curriculum haben externe Schnittstellen mehr und oft unbekannte Nutzer, die man nicht koordiniert mitziehen kann. Sie brauchen daher mehr Stabilität, Formalität und Versionierung als interne Schnittstellen.",
   "Falsch: Nutzer, die den alten Feldnamen erwarten, brechen beim Umbenennen. Das ist eine inkompatible Änderung und braucht eine neue Version oder eine Übergangsphase, in der beide Namen geliefert werden.",
   "Richtig: So lautet Postels Robustheitsprinzip, das das Curriculum im Kontext „Erwarte Fehler“ nennt: Selbst strikt spezifikationskonform senden, bei Eingaben aber tolerant gegenüber unerwarteten Abweichungen wie zusätzlichen Feldern sein.",
   "Falsch: Das Robustheitsprinzip erlaubt Toleranz gegenüber harmlosen Abweichungen, etwa unbekannten Feldern. Es ersetzt aber keine Validierung: Ungeprüfte Eingaben gefährden Korrektheit und Sicherheit.",
   "Falsch: Auch interne Schnittstellen, z. B. zwischen Teams, brauchen Versionierung, wenn die Nutzer nicht gleichzeitig mitziehen können. Entscheidend ist die Koordinierbarkeit der Nutzer, nicht nur die Grenze intern/extern.",
   "Richtig: Bestehende Nutzer können ein neues optionales Feld ignorieren, besonders wenn sie tolerant empfangen. Additive Änderungen brechen sie daher in der Regel nicht und sind der bevorzugte Weg, Schnittstellen weiterzuentwickeln."
  ],
  "explanation": "Externe Schnittstellen entwickelt man additiv oder versioniert weiter und folgt dem Robustheitsprinzip „streng senden, tolerant empfangen“. Fallen: Toleranz mit fehlender Validierung verwechseln, Umbenennungen für kompatibel halten und Versionierung auf externe Schnittstellen beschränken."
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
   "Falsch: Redundante App-Instanzen helfen wenig, wenn alle an einer einzelnen Datenbank hängen: Sie bleibt ein Single Point of Failure. Für Hochverfügbarkeit müssen auch geteilte Komponenten wie Datenbank oder Netzwerk betrachtet werden.",
   "Richtig: Jede Maßnahme hat einen Preis: Redundanz erhöht Infrastrukturkosten, Betriebsaufwand und Komplexität, etwa bei der Datensynchronisation. Diese Kosten müssen bewusst gegen den Nutzen der höheren Verfügbarkeit abgewogen werden.",
   "Falsch: Tests decken Fehler auf, machen das System aber nicht ausfallsicher. Verfügbarkeit ist eine Struktureigenschaft, die durch Entwurfsentscheidungen wie Redundanz entsteht; Tests prüfen sie nur.",
   "Falsch: Ein Stil allein liefert keine Qualität: Ohne Timeouts, Circuit Breaker oder Bulkheads können sich Ausfälle über Service-Aufrufe sogar fortpflanzen. Fehlerisolation muss gezielt entworfen werden.",
   "Richtig: Architekturentscheidungen sollen gezielt auf das Qualitätsziel einzahlen. Redundanz und Failover sind typische Taktiken für Verfügbarkeit: Fällt eine Instanz aus, übernimmt eine andere."
  ],
  "explanation": "Verfügbarkeit entsteht durch gezielt gewählte Taktiken wie Redundanz und Failover, deren Kosten und Trade-offs man bewusst abwägt. Fallen: Ein Stil wie Microservices oder Tests allein liefern keine Verfügbarkeit, und geteilte Komponenten wie die Datenbank bleiben Single Points of Failure."
 },
 {
  "id": "c4q1",
  "chapter": 4,
  "lz": "LZ 04-02",
  "r": "R1",
  "type": "multi",
  "q": "Sie sollen einem neuen Kunden erklären, wozu Architekturdokumentation dient. Welche Zwecke treffen am ehesten zu?",
  "options": [
   "Die Einarbeitung neuer Teammitglieder erleichtern.",
   "Die Implementierung bis auf Klassenebene verbindlich vorgeben.",
   "Den Ist-Stand festhalten, verworfene Alternativen weglassen.",
   "Die Dokumentation ersetzt Tests und Messungen als Beleg für erfüllte Qualitätsanforderungen.",
   "Ein gemeinsames Verständnis der Stakeholder schaffen.",
   "Entscheidungen samt Begründung nachvollziehbar halten."
  ],
  "correct": [
   0,
   4,
   5
  ],
  "optExpl": [
   "Richtig: Neue Teammitglieder finden sich mit einer guten Architekturdokumentation schneller zurecht. Auch Wartung und Weiterentwicklung können sich an bestehenden Strukturen und Konzepten orientieren, statt alles aus dem Code zu rekonstruieren.",
   "Falsch: Eine Vorgabe bis auf Klassenebene wäre Detailentwurf. Architekturdokumentation konzentriert sich auf tragende Strukturen, Schnittstellen und Entscheidungen und lässt dem Team Spielraum für die Umsetzung.",
   "Falsch: Gerade verworfene Alternativen und Begründungen lassen sich nicht aus dem Code rekonstruieren. Sie machen Dokumentation wertvoll, weil sie verhindern, dass dieselben Optionen später erneut diskutiert oder unbedacht gewählt werden.",
   "Falsch: Dokumentation beschreibt die beabsichtigten Lösungsansätze und kann Nachweise, etwa gegenüber Regulatorik, stützen. Sie ersetzt aber weder Tests noch Messungen oder eine Architekturbewertung, die zeigen, dass Qualitätsanforderungen tatsächlich erfüllt sind.",
   "Richtig: Dokumentation ist vor allem ein Kommunikationsmittel: Sie gibt allen Stakeholdern eine gemeinsame Grundlage und macht unterschiedliche Vorstellungen und Missverständnisse früh sichtbar.",
   "Richtig: Der Code zeigt, was gebaut wurde, aber nicht warum. Dokumentierte Entscheidungen samt Begründung, etwa als ADRs, verhindern, dass bewusste Entscheidungen später unwissentlich gekippt werden."
  ],
  "explanation": "Architekturdokumentation dient der Kommunikation, der Nachvollziehbarkeit von Entscheidungen und der Einarbeitung. Fallen: Sie ersetzt keine Tests oder Messungen als Qualitätsbeleg und ist kein Detailentwurf bis auf Klassenebene; verworfene Alternativen gehören ausdrücklich hinein."
 },
 {
  "id": "c4q2",
  "chapter": 4,
  "lz": "LZ 04-09",
  "r": "R3",
  "extra": true,
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
   "Falsch: Eine Norm für Begriffe wie Stakeholder, Concerns und Viewpoints ist ISO/IEC/IEEE 42010. arc42 ist keine Norm, sondern eine frei verfügbare, pragmatische Vorlage für die Gliederung von Architekturdokumentation.",
   "Falsch: Vier Zoomstufen von Context über Container und Component bis Code beschreiben das C4-Modell. arc42 ist eine Gliederung in Abschnitte, kein Zoomstufenmodell; beide lassen sich aber gut kombinieren.",
   "Richtig: arc42 gibt zwölf Abschnitte vor, von Einführung und Zielen über Kontext, Bausteinsicht und Entscheidungen bis zum Glossar. Man füllt pragmatisch nur die Abschnitte, die für das jeweilige System relevant sind.",
   "Falsch: Eine Methode, um aus Qualitätszielen Entscheidungen abzuleiten, wäre eine Entwurfsmethode. arc42 sagt, wo man Entscheidungen festhält (Abschnitt 9), nicht wie man zu ihnen kommt."
  ],
  "explanation": "arc42 ist ein pragmatisches Template mit zwölf Abschnitten zur Gliederung von Architekturdokumentation. Fallen: Verwechslung mit der Norm ISO/IEC/IEEE 42010, mit den vier Zoomstufen von C4 oder mit einer Entwurfsmethode."
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
   "Richtig: Die Kontextabgrenzung betrachtet das System von außen, umgeben von Nutzern und Fremdsystemen. Interna bleiben verborgen; im Mittelpunkt stehen die Schnittstellen zur Umgebung.",
   "Richtig: Bei Bedarf unterscheidet man den fachlichen Kontext (wer tauscht welche Informationen aus?) und den technischen Kontext (über welche Kanäle und Protokolle?). Beide Varianten sind im Curriculum vorgesehen.",
   "Falsch: Ausführungsknoten und die Abbildung von Software auf Infrastruktur sind Thema der Verteilungssicht. Die Kontextsicht zeigt Nachbarn und Schnittstellen, nicht deren Infrastruktur.",
   "Falsch: Zu kurz gegriffen: Der fachliche Kontext – welche Informationen mit wem ausgetauscht werden – gehört ebenfalls dazu und ist oft für Fachleute die wichtigere Darstellung.",
   "Falsch: Interne Subsysteme gehören in die Bausteinsicht. Die Kontextsicht bleibt auf Blackbox-Ebene und zeigt nicht, welcher interne Baustein eine externe Schnittstelle bedient.",
   "Richtig: Durch die klare Systemgrenze wird früh geklärt, welche Verantwortung beim System liegt und welche bei den Nachbarn, etwa ob Zahlungen selbst abgewickelt oder an einen Dienstleister delegiert werden."
  ],
  "explanation": "Die Kontextabgrenzung zeigt das System als Blackbox mit Nachbarn und Schnittstellen, fachlich und/oder technisch, und klärt so die Systemgrenze. Fallen: Interne Subsysteme gehören in die Bausteinsicht, Knotenzuordnung in die Verteilungssicht, und der fachliche Kontext darf nicht fehlen."
 },
 {
  "id": "c4q4",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R1",
  "type": "multi",
  "q": "Ein neues Teammitglied soll sich in ein bestehendes System einarbeiten und bittet um eine Übersicht über dessen Aufbau. Das Team verweist auf die Bausteinsicht, die manchmal auch Komponentensicht genannt wird. Welche Aussagen zur Bausteinsicht (auch Komponentensicht) treffen zu?",
  "options": [
   "Sie wird hierarchisch von Blackbox zu Whitebox verfeinert.",
   "Sie zeigt die statische Zerlegung des Systems in Bausteine.",
   "Sie zeigt, in welcher Reihenfolge Bausteine zur Laufzeit interagieren.",
   "Sie ordnet die Bausteine ihren Ausführungsknoten zu.",
   "Sie kann neben der Struktur auch die Beziehungen und Abhängigkeiten zwischen den Bausteinen zeigen.",
   "Sie beschreibt je Baustein Verantwortlichkeit und Schnittstellen.",
   "Blackbox gehört zur Bausteinsicht, Whitebox zur Laufzeitsicht."
  ],
  "correct": [
   0,
   1,
   4,
   5
  ],
  "optExpl": [
   "Richtig: Ein Baustein wird zuerst als Blackbox mit Verantwortlichkeit und Schnittstellen beschrieben und dann als Whitebox geöffnet. Dessen Teile sind wieder Blackboxes, die bei Bedarf weiter verfeinert werden – so entsteht die Hierarchie der Ebenen.",
   "Richtig: Die Bausteinsicht beschreibt, aus welchen Softwarebausteinen das System aufgebaut ist und wie sie strukturell zusammenhängen. Sie ist statisch: Ablauf und Interaktion zur Laufzeit zeigt dagegen die Laufzeitsicht.",
   "Falsch: Abläufe zeigt die Laufzeitsicht. Die Bausteinsicht ist statisch und beschreibt Struktur und Beziehungen.",
   "Falsch: Die Abbildung von Softwarebausteinen bzw. Artefakten auf Ausführungsknoten ist Gegenstand der Verteilungssicht. Die Bausteinsicht abstrahiert gerade von der Infrastruktur, auf der die Bausteine laufen.",
   "Richtig: Zur statischen Struktur gehören nicht nur die Bausteine, sondern auch ihre Beziehungen, etwa Abhängigkeiten und Schnittstellennutzung.",
   "Richtig: Erst mit Verantwortlichkeit sowie angebotenen und benötigten Schnittstellen wird die Zerlegung verständlich. Ein bloßes Kästchendiagramm ohne diese Angaben sagt kaum etwas über die Aufgabenverteilung aus.",
   "Falsch: Blackbox und Whitebox unterscheiden die Detailtiefe innerhalb der Bausteinsicht, nicht zwei verschiedene Sichten. Die Laufzeitsicht ist eine eigene Sicht, die dynamische Abläufe zwischen Bausteinen zeigt."
  ],
  "explanation": "Die Bausteinsicht zeigt die statische, hierarchisch von Blackbox zu Whitebox verfeinerte Zerlegung mit Verantwortlichkeiten und Schnittstellen. Fallen: Blackbox/Whitebox ist eine Frage der Detailtiefe, keine Sichtengrenze, und die Knotenzuordnung gehört in die Verteilungssicht."
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
   "Eine breite Auswahl der Anwendungsfälle des Systems.",
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
   "Falsch: Das ist Detailentwurf innerhalb eines Bausteins. Die Laufzeitsicht zeigt dagegen das Zusammenspiel mehrerer Bausteine; interne Algorithmen sind dafür meist nicht architekturrelevant.",
   "Richtig: Neben fachlichen Abläufen sind oft auch Systemstart, Fehlerbehandlung oder Betriebsabläufe architekturrelevant. Gerade dort zeigen sich Abhängigkeiten, die in der statischen Sicht verborgen bleiben.",
   "Falsch: Übergeneralisierung: Man wählt bewusst wenige architekturrelevante Szenarien aus. Alle Anwendungsfälle vollständig zu dokumentieren wäre unangemessen aufwändig und kaum zu pflegen.",
   "Falsch: Welche Bausteine in welchem Artefakt stecken und auf welchem Knoten laufen, beschreibt die Verteilungssicht. Die Laufzeitsicht zeigt das dynamische Verhalten, nicht die Zuordnung zur Infrastruktur.",
   "Richtig: Wenig bekannt: Das Curriculum nennt bei der Laufzeitsicht ausdrücklich auch Zustandsmodelle. Sie zeigen etwa, welche Zustände eine Bestellung durchläuft und welche Ereignisse Übergänge auslösen.",
   "Richtig: Die Laufzeitsicht zeigt an ausgewählten, architekturrelevanten Szenarien, wie Bausteine zur Laufzeit zusammenarbeiten, z. B. als Sequenz- oder Aktivitätsdiagramm."
  ],
  "explanation": "Die Laufzeitsicht zeigt das Zusammenspiel von Bausteinen in ausgewählten Szenarien, auch Start, Fehlerfall und Betrieb, sowie Zustandsmodelle. Fallen: Vollständigkeitsanspruch über alle Anwendungsfälle, Detailalgorithmen oder die Zuordnung zu Artefakten (Verteilungssicht)."
 },
 {
  "id": "c4q6",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zur Verteilungssicht treffen zu?",
  "options": [
   "Sie zeigt, in welcher Reihenfolge Bausteine zur Laufzeit interagieren.",
   "Sie zeigt, welche Artefakte auf welchen Knoten laufen.",
   "Sie zeigt die Knoten und Kanäle der Laufzeitumgebung.",
   "Sie zeigt, welche Teams welche Bausteine verantworten.",
   "Sie macht sichtbar, auf welchem Knoten ein Baustein läuft, und unterstützt damit Gespräche mit dem IT-Betrieb.",
   "Sie zeigt, welche externen Systeme über welche Kanäle angebunden sind."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Falsch: Die Reihenfolge der Interaktionen zur Laufzeit zeigt die Laufzeitsicht, etwa als Sequenz- oder Aktivitätsdiagramm. Die Verteilungssicht ist statisch und beschreibt Infrastruktur, nicht Abläufe.",
   "Richtig: Die Verteilungssicht zeigt die technische Infrastruktur mit Knoten (z. B. Server, Container) und Kanälen und bildet die Software über Verteilungsartefakte darauf ab. So wird sichtbar, was wo läuft.",
   "Richtig: Knoten (z. B. Server, Container) und die Kanäle zwischen ihnen bilden die technische Infrastruktur ab, auf der das System läuft.",
   "Falsch: Die Zuordnung von Teams zu Bausteinen ist eine organisatorische Information. Sie kann in der Doku an anderer Stelle stehen, gehört aber nicht in die Verteilungssicht, die technische Infrastruktur beschreibt.",
   "Richtig: Die Verteilungssicht ist für Betriebs- und Infrastrukturfragen die gemeinsame Grundlage. Der IT-Betrieb ist laut Curriculum ein relevantes Gegenüber der Architekt:innen (primär bei Informationssystemen).",
   "Falsch: Externe Systeme und die Kanäle zu ihnen zeigt der technische Kontext in der Kontextsicht. Die Verteilungssicht beschreibt dagegen die eigene Infrastruktur und was darauf läuft."
  ],
  "explanation": "Die Verteilungssicht zeigt Knoten, Kanäle und die Abbildung der Verteilungsartefakte darauf. Fallen: Kanäle zu Nachbarsystemen gehören in den technischen Kontext, Abläufe in die Laufzeitsicht und Teamzuordnungen sind organisatorisch, nicht Teil der Verteilungssicht."
 },
 {
  "id": "c4q7",
  "chapter": 4,
  "lz": "LZ 04-09",
  "r": "R3",
  "extra": true,
  "type": "single",
  "q": "In einer Ausschreibung wird eine Architekturbeschreibung „gemäß ISO/IEC/IEEE 42010“ gefordert. Was regelt diese Norm am ehesten?",
  "options": [
   "Ein Qualitätsmodell mit Merkmalen wie Wartbarkeit.",
   "Begriffe wie Stakeholder, Concerns, Viewpoints und Views.",
   "Ein Template mit zwölf Abschnitten zur Gliederung.",
   "Eine Mindestmenge an Pflichtsichten für Systeme dieser Art."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Ein Qualitätsmodell mit Merkmalen wie Wartbarkeit, Zuverlässigkeit oder Sicherheit definiert ISO/IEC 25010. Die beiden Normen werden wegen der ähnlichen Nummern leicht verwechselt.",
   "Richtig: ISO/IEC/IEEE 42010 liefert den begrifflichen Rahmen für Architekturbeschreibungen: Stakeholder haben Anliegen (Concerns), Viewpoints legen fest, wie Views diese adressieren. Eine Beschreibung „gemäß 42010“ nutzt diese Begriffe konsistent.",
   "Falsch: Die Vorlage mit zwölf Abschnitten ist arc42, ein frei verfügbares Template. ISO 42010 gibt keine konkrete Gliederung vor, sondern beschreibt nur, welche Elemente eine Architekturbeschreibung enthalten soll.",
   "Falsch: 42010 schreibt keine festen Pflichtsichten vor. Stattdessen verlangt die Norm, Sichten passend zu den Anliegen der Stakeholder zu wählen und über Viewpoints zu begründen."
  ],
  "explanation": "ISO/IEC/IEEE 42010 normiert die Begriffe der Architekturbeschreibung (Stakeholder, Concerns, Viewpoints, Views), aber keine Vorlage und keine Pflichtsichten; das Thema ist R3. Fallen: Verwechslung mit arc42 (Template) oder ISO 25010 (Qualitätsmodell)."
 },
 {
  "id": "c4q8",
  "chapter": 4,
  "lz": "LZ 04-03",
  "r": "R2",
  "type": "multi",
  "q": "Sie wollen in der Laufzeitsicht den Ablauf des Checkouts darstellen, bei dem Warenkorb, Lager und Zahlung Nachrichten austauschen. Welche UML-Diagramme eignen sich dafür?",
  "options": [
   "Zustandsdiagramm.",
   "Sequenzdiagramm.",
   "Klassendiagramm.",
   "Aktivitätsdiagramm.",
   "Komponentendiagramm.",
   "Verteilungsdiagramm."
  ],
  "correct": [
   1,
   3
  ],
  "optExpl": [
   "Falsch: Das Zustandsdiagramm beschreibt die Zustände und Übergänge eines einzelnen Objekts oder Bausteins, etwa einer Bestellung von „offen“ bis „versendet“. Den Nachrichtenaustausch zwischen mehreren Beteiligten zeigt es nicht.",
   "Richtig: Entlang der Lebenslinien zeigt das Sequenzdiagramm von oben nach unten, wer wann welche Nachricht an wen sendet. Damit ist es das typische Mittel der Laufzeitsicht für Abläufe wie den Checkout.",
   "Falsch: Das Klassendiagramm zeigt Typen und ihre Beziehungen, also statische Struktur. Eine zeitliche Abfolge von Nachrichten ist daraus nicht ablesbar.",
   "Richtig: Das Aktivitätsdiagramm zeigt Aktionen, Verzweigungen und Nebenläufigkeit, also den Kontrollfluss eines Ablaufs. Es ist wie das Sequenzdiagramm für Abläufe in der Laufzeitsicht geeignet.",
   "Falsch: Das Komponentendiagramm zeigt Bausteine und ihre Schnittstellen statisch. Welche Komponenten verbunden sind, ist sichtbar, nicht aber, in welcher zeitlichen Reihenfolge sie Nachrichten austauschen.",
   "Falsch: Das Verteilungsdiagramm zeigt, welche Artefakte auf welchen Knoten laufen. Eine Reihenfolge von Interaktionen zeigt es nicht."
  ],
  "explanation": "Ein zeitlich geordneter Nachrichtenaustausch wird typischerweise als Sequenzdiagramm dargestellt; das Aktivitätsdiagramm eignet sich für Abläufe mit Verzweigungen und Nebenläufigkeit. Fallen: Zustands-, Komponenten-, Klassen- und Verteilungsdiagramm zeigen keine Abläufe zwischen Beteiligten."
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
   "Es bündelt die Projektentscheidungen in einem Dokument."
  ],
  "correct": [
   1,
   2,
   3
  ],
  "optExpl": [
   "Falsch: Ein ADR begründet eine Entscheidung, beschreibt aber nicht im Detail, wie sie umzusetzen ist. Konkrete Implementierungsschritte gehören in Code, Tickets oder technische Konzepte.",
   "Richtig: Kontext, Entscheidung und Konsequenzen sind Kernbestandteile nach Nygard. Hier etwa: Warum wurde der Broker gewählt (Lastspitzen, Entkopplung) und welche Folgen nimmt man in Kauf (Betriebsaufwand, eventuelle Konsistenz)?",
   "Richtig: Wird die Entscheidung später revidiert, entsteht ein neues ADR. Das alte wird nicht überschrieben, sondern als abgelöst markiert – so bleibt die Entscheidungshistorie nachvollziehbar.",
   "Richtig: Der Status wie „vorgeschlagen“, „akzeptiert“ oder „abgelöst“ gehört zu den Feldern eines ADR. Er zeigt Lesern sofort, ob die Entscheidung aktuell gilt.",
   "Falsch: ADRs verbieten keine Änderung. Sie machen nachvollziehbar, was wann warum entschieden wurde; ändern sich die Rahmenbedingungen, wird die Entscheidung bewusst durch ein neues ADR ersetzt.",
   "Falsch: ADRs sind bewusst kurze Einzeldokumente – je Entscheidung eines. Ein Sammeldokument für alle Entscheidungen wäre schwer pflegbar und würde die Historie einzelner Entscheidungen verwischen."
  ],
  "explanation": "Ein ADR ist ein kurzes Einzeldokument je Entscheidung mit Status, Kontext, Entscheidung und Konsequenzen; Revisionen werden als neues ADR erfasst, das alte gilt als abgelöst. Fallen: ADRs sind weder Sammeldokument noch Bauanleitung, und sie frieren Entscheidungen nicht ein."
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
   "Die Notation wechseln, der Inhalt bleibt gleich.",
   "Inhalt, Detailgrad und Form je Zielgruppe anpassen."
  ],
  "correct": [
   1,
   4
  ],
  "optExpl": [
   "Falsch: Ob Dokumentation verständlich ist, kann letztlich nur ihre Zielgruppe beurteilen. Ein Review-Gremium oder der Autor kennen das Thema zu gut und übersehen, was Lesern fehlt.",
   "Richtig: Unterschiedliche Sichten bedienen unterschiedliche Interessen: Der Betrieb braucht vor allem die Verteilungssicht, die Entwicklung Baustein- und Laufzeitsicht, das Management eher Kontext und Überblick.",
   "Falsch: Alle Darstellungen beschreiben dasselbe System und müssen konsistent sein. Getrennt gepflegte Modelle laufen schnell auseinander; besser sind verschiedene Sichten auf ein gemeinsames Modell.",
   "Falsch: Eine andere Notation allein reicht nicht. Das Management braucht andere Inhalte, etwa Überblick, Kosten und Risiken, während Entwickler Details zu Schnittstellen und Strukturen benötigen.",
   "Richtig: Form, Inhalt und Detailgrad richten sich am Informationsbedarf der jeweiligen Leser aus. Das ist der Kern zielgruppengerechter Dokumentation, wie sie das Curriculum (LZ 04-01) fordert."
  ],
  "explanation": "Zielgruppengerecht heißt: Inhalt, Detailgrad und Form passend zum Bedarf, mit unterschiedlichen, aber konsistenten Sichten auf dasselbe System. Fallen: Verständlichkeit beurteilt die Zielgruppe, kein Gremium; ein reiner Notationswechsel reicht nicht, und getrennte Modelle laufen auseinander."
 },
 {
  "id": "k4",
  "chapter": 4,
  "lz": "LZ 04-03",
  "r": "R2",
  "type": "k",
  "points": 2,
  "q": "Sie wählen Diagramme für die Architekturdokumentation. Beschreibt das Mittel eher statische Struktur oder dynamisches Verhalten?",
  "categories": [
   "Statisch (Struktur)",
   "Dynamisch (Verhalten)"
  ],
  "rows": [
   {
    "text": "Sequenzdiagramm",
    "cat": 1
   },
   {
    "text": "Komponentendiagramm",
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
  "rowExpl": [
   "Ein Sequenzdiagramm zeigt, in welcher Reihenfolge Nachrichten zwischen Beteiligten ausgetauscht werden. Es beschreibt einen Ablauf und damit Verhalten (Laufzeitsicht), keine feste Struktur.",
   "Es zeigt Komponenten, ihre Schnittstellen und Abhängigkeiten. Das ist statische Struktur (Bausteinsicht) und beschreibt keinen zeitlichen Ablauf.",
   "Pakete gruppieren Elemente und zeigen deren Abhängigkeiten. Das ist eine statische Gliederung (Bausteinsicht), kein Verhalten.",
   "Es beschreibt Abläufe mit Schritten, Verzweigungen und Parallelität. Damit zeigt es Verhalten (Laufzeitsicht) und keine Struktur.",
   "Es ordnet Artefakte Knoten zu und zeigt Kommunikationswege (Verteilungssicht). Das ist eine statische Zuordnung ohne Ablauf; es zählt deshalb zur Struktur, auch wenn es um die Laufzeitumgebung geht."
  ],
  "explanation": "Sequenz- und Aktivitätsdiagramm beschreiben Verhalten. Paket-, Komponenten- und Verteilungsdiagramm zeigen Struktur. Falle: Das Verteilungsdiagramm ordnet Artefakte statisch Knoten zu und beschreibt keinen Ablauf."
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
   "Falsch: Welcher interne Baustein die Datei erzeugt, gehört in die Bausteinsicht. Der technische Kontext bleibt an der Systemgrenze und zeigt nur Kanäle und Protokolle zu den Nachbarsystemen.",
   "Falsch: Der technische Kontext zeigt die Kanäle zu Nachbarn, nicht die eigene Infrastruktur. Die Abbildung der Software auf Knoten, Server und Netze beschreibt weiterhin die Verteilungssicht.",
   "Richtig: Der technische Kontext zeigt die Kanäle und Protokolle, über die der Austausch läuft. „SFTP-Dateitransfer“ beschreibt genau so einen technischen Kanal zwischen Shop und Lieferant.",
   "Richtig: Der fachliche Kontext zeigt, welche Informationen mit welchem Partner ausgetauscht werden, unabhängig vom Übertragungsweg. „Bestellung an Lieferant“ ist so ein fachlicher Informationsfluss.",
   "Richtig: Fachlicher wie technischer Kontext bleiben an der Systemgrenze und zeigen keine Interna. Der Shop erscheint in beiden als eine Blackbox, umgeben von seinen Nachbarsystemen und Akteuren.",
   "Falsch: Beide Kontexte sind Teil der Kontextsicht in der Architekturdokumentation, etwa in arc42-Abschnitt 3. Getrennt wird nach Betrachtungsebene – fachlich oder technisch –, nicht nach Dokument."
  ],
  "explanation": "Der fachliche Kontext zeigt, wer was austauscht, der technische Kontext, über welchen Kanal; beide behandeln das System als Blackbox. Fallen: interne Bausteine oder die Verteilungssicht im technischen Kontext vermuten und den fachlichen Kontext in die Anforderungsdoku verschieben."
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
   "Falsch: Knoten und die darauf installierten Artefakte sind Elemente des Verteilungsdiagramms. Sie gehören in die Verteilungssicht, nicht in die Bausteinsicht mit dem Komponentendiagramm.",
   "Falsch: Zustände und Übergänge beschreibt das Zustandsdiagramm, ein Verhaltensdiagramm. Das Komponentendiagramm zeigt dagegen statische Struktur ohne zeitliche oder zustandsbezogene Aspekte.",
   "Richtig: Komponenten werden mit ihren bereitgestellten (Lollipop) und benötigten (Socket) Schnittstellen sowie deren Verbindungen dargestellt. Das macht Abhängigkeiten zwischen Bausteinen explizit.",
   "Richtig: Wie Klassen- und Paketdiagramm ist das Komponentendiagramm ein Strukturdiagramm. Damit passt es gut zur Bausteinsicht, die die statische Zerlegung des Systems beschreibt.",
   "Falsch: Zeitliche Reihenfolgen von Aufrufen zeigen Sequenz- oder Aktivitätsdiagramme in der Laufzeitsicht. Ein Komponentendiagramm zeigt nur, wer mit wem über welche Schnittstelle verbunden ist."
  ],
  "explanation": "Das UML-Komponentendiagramm zeigt Bausteine mit angebotenen und benötigten Schnittstellen, also statische Struktur, und passt damit zur Bausteinsicht. Fallen: Aufrufreihenfolgen, Knoten mit Artefakten oder Zustände gehören in Sequenz-, Verteilungs- bzw. Zustandsdiagramme."
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
   "Die Sichten werden als unabhängige Modelle gepflegt.",
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
   "Richtig: Betrieb, Entwicklung und Fachbereich stellen unterschiedliche Fragen an die Architektur: Wo läuft was? Wie ist der Code strukturiert? Wie läuft ein Geschäftsvorfall ab? Jede Sicht beantwortet bestimmte dieser Anliegen.",
   "Falsch: Alle Sichten beschreiben dasselbe System und müssen zueinander konsistent sein. Ein Baustein in der Bausteinsicht muss etwa in Laufzeit- und Verteilungssicht wiedererkennbar sein; unabhängig gepflegte Modelle laufen auseinander.",
   "Falsch: Auch ein Monolith hat Struktur, Laufzeitverhalten und Infrastruktur. Die Vielfalt der Stakeholder-Fragen bleibt gleich; ein einzelnes Diagramm kann sie auch hier nicht alle beantworten.",
   "Richtig: Struktur, dynamische Abläufe und Infrastruktur lassen sich nicht sinnvoll in einem Bild vereinen, ohne es zu überladen. Jede Sicht blendet bewusst Aspekte aus, um andere verständlich darzustellen.",
   "Richtig: Ein Baustein erscheint z. B. in der Bausteinsicht als Strukturelement, in der Laufzeitsicht als Beteiligter eines Szenarios und in der Verteilungssicht als Teil eines Artefakts. Das verbindet die Sichten miteinander."
  ],
  "explanation": "Mehrere Sichten sind bei jedem System nötig, weil keine einzelne Sicht alle Aspekte und Stakeholder-Anliegen abdeckt; derselbe Baustein taucht in mehreren Sichten auf. Fallen: Sichten als unabhängige Modelle zu pflegen oder Monolithen als Ausnahme zu betrachten."
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
   "Richtig: Eine gemeinsame Notation wie UML ist über Teams, Organisationen und Modellierungswerkzeuge hinweg verständlich. Modelle lassen sich so leichter austauschen und von neuen Beteiligten lesen.",
   "Falsch: Auch UML-Diagramme veralten, wenn man sie nicht pflegt oder aus dem Code generiert. Die Notation regelt die Bedeutung der Elemente, nicht die Aktualität des Inhalts.",
   "Falsch: Auch bei UML helfen Legenden, etwa für Farben, eigene Stereotypen oder bewusst vereinfachte Darstellungen. Eine Standardnotation reduziert den Bedarf, macht Legenden aber nicht grundsätzlich entbehrlich.",
   "Richtig: Bei freien „Kästchen und Pfeilen“ müssen Leser raten, was ein Pfeil bedeutet – Aufruf, Abhängigkeit oder Datenfluss? In UML ist die Semantik der Elemente festgelegt, das vermeidet Fehlinterpretationen.",
   "Falsch: Wie detailliert ein Diagramm ist, entscheidet man nach Zielgruppe und Zweck. Die Notation gibt das nicht vor – man kann mit UML grobe Überblicke und feine Detaildiagramme zeichnen."
  ],
  "explanation": "Eine Standardnotation wie UML gibt Diagrammelementen eine vereinbarte Bedeutung und erleichtert den Austausch zwischen Stakeholdern und Werkzeugen. Fallen: Sie hält Diagramme weder automatisch aktuell noch legt sie den Detailgrad fest oder macht Legenden überflüssig."
 },
 {
  "id": "c4q16",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R1",
  "type": "multi",
  "q": "Ein Review ergab: Niemand versteht, wie Warenkorb, Zahlung und Versand bei einer Bestellung zusammenwirken. Welche Maßnahmen helfen?",
  "options": [
   "Die Bausteinsicht in noch kleinere Bausteine verfeinern.",
   "Eine Laufzeitsicht für das Szenario „Bestellung“ ergänzen.",
   "Eine Kontextsicht ergänzen.",
   "Den Ablauf als Sequenzdiagramm oder nummerierte Liste darstellen.",
   "Eine Verteilungssicht ergänzen.",
   "Die beteiligten Bausteine mit den Namen aus der Bausteinsicht benennen, damit beide Sichten zusammenpassen."
  ],
  "correct": [
   1,
   3,
   5
  ],
  "optExpl": [
   "Falsch: Feinere Bausteine zeigen mehr Struktur, aber nicht, wie sie in einem Ablauf zusammenwirken. Die Bausteinsicht bleibt statisch.",
   "Richtig: Die Laufzeitsicht zeigt das Zusammenspiel der Bausteine in einem konkreten Szenario, etwa „Bestellung aufgeben“ als Sequenzdiagramm. Genau dieses Verständnis fehlt laut Review.",
   "Falsch: Die Kontextsicht zeigt das System als Blackbox mit seinen externen Nachbarn. Interne Bausteine wie Warenkorb oder Zahlung kommen dort gar nicht vor – sie kann das Problem also nicht lösen.",
   "Richtig: Für Laufzeitsichten nennt das Curriculum Sequenzdiagramme, aber auch Flussdiagramme, nummerierte Listen oder BPMN. Wichtig ist, dass die Reihenfolge der Interaktionen erkennbar ist.",
   "Falsch: Die Verteilungssicht zeigt, auf welchen Knoten die Software läuft und wie Knoten verbunden sind. In welcher Abfolge Bausteine bei einer Bestellung zusammenarbeiten, beantwortet sie nicht.",
   "Richtig: Konsistente Namen machen die Sichten verknüpfbar: Wer das Zusammenspiel versteht, findet die Bausteine in der Struktur wieder."
  ],
  "explanation": "Das Zusammenwirken von Bausteinen in einem konkreten Ablauf zeigt die Laufzeitsicht. Falle: Die Bausteinsicht nennt die Beteiligten, aber nicht ihr Zusammenspiel; Kontext- und Verteilungssicht beantworten ganz andere Fragen."
 },
 {
  "id": "c4q17",
  "chapter": 4,
  "lz": "LZ 04-09",
  "r": "R3",
  "extra": true,
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
   "Falsch: Projekt- und Releasepläne mit Meilensteinen sind Projektmanagement. Sie ändern sich häufig und gehören nicht zu den zwölf Abschnitten von arc42, die die Architektur des Systems beschreiben.",
   "Richtig: Abschnitt 9 von arc42 hält wichtige, folgenreiche Architekturentscheidungen samt Begründung fest, etwa als Liste von ADRs. So bleibt nachvollziehbar, warum das System so gebaut ist.",
   "Falsch: Wireframes und UI-Entwürfe für jeden Dialog sind Teil von UX-Design oder Anforderungen. In der Architekturdokumentation nach arc42 haben sie keinen eigenen Abschnitt.",
   "Richtig: Abschnitt 3 grenzt das System gegenüber Nutzern und Nachbarsystemen ab, fachlich und technisch. Die Kontextabgrenzung zeigt, was zum System gehört und welche Schnittstellen es nach außen hat.",
   "Richtig: Abschnitt 11 macht bekannte Risiken und technische Schulden sichtbar. Das hilft, sie bewusst zu priorisieren und Stakeholdern transparent zu machen, statt sie zu verschweigen.",
   "Falsch: Eine vollständige Klassen- oder API-Referenz wäre Code-Dokumentation und lässt sich besser generieren. Sie widerspricht dem Prinzip, in der Architekturdoku nur Architekturrelevantes festzuhalten."
  ],
  "explanation": "arc42 sieht u. a. Kontextabgrenzung (Abschnitt 3), Architekturentscheidungen (9) sowie Risiken und technische Schulden (11) vor. Fallen: Projekt- und Releaseplanung, UI-Entwürfe und vollständige Klassenreferenzen gehören nicht zur Architekturdokumentation."
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
  "rowExpl": [
   "Die Anzahl laufender Instanzen in Produktion betrifft die Infrastruktur, nicht die innere Struktur. Das zeigt die Verteilungssicht, deshalb nicht die Bausteinsicht.",
   "Kanäle und Protokolle zwischen Servern gehören zur Infrastruktur und zur Technik der Verbindung. Das zeigt die Verteilungssicht; die Bausteinsicht beschreibt Bausteine und ihre Beziehungen.",
   "Die innere Zerlegung eines Subsystems in seine Teile ist die Kernaufgabe der Bausteinsicht. Die Verteilungssicht sagt nichts darüber, woraus ein Baustein im Inneren besteht.",
   "Angebotene Schnittstellen eines Moduls gehören zur Beschreibung der Bausteine. Das zeigt die Bausteinsicht, nicht die Verteilungssicht.",
   "Abhängigkeiten zwischen Modulen sind Beziehungen zwischen Bausteinen und stehen daher in der Bausteinsicht. Die Verteilungssicht zeigt Infrastruktur, keine Modulabhängigkeiten.",
   "Das ist die Falle: Die Abbildung von Bausteinen auf Artefakte wie Container-Images gehört zur Verteilungssicht, auch wenn Bausteine genannt werden. Die Bausteinsicht zeigt keine Auslieferungseinheiten."
  ],
  "explanation": "Die Bausteinsicht zeigt die innere Zerlegung (Abrechnung), angebotene Schnittstellen (Kundenverwaltung) und Abhängigkeiten zwischen Modulen (Rechnung). Die Verteilungssicht zeigt Instanzen in Produktion, Kanäle und Protokolle zwischen Servern – und, die Falle, auch die Abbildung von Bausteinen auf Artefakte wie Container-Images."
 },
 {
  "id": "c4q18",
  "chapter": 4,
  "lz": "LZ 04-03",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zum UML-Klassendiagramm in der Architekturdokumentation treffen zu?",
  "options": [
   "Es stellt die Verteilung von Bausteinen auf Knoten und Kanäle dar.",
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
   "Falsch: Das beschreibt das Verteilungsdiagramm mit Knoten, Artefakten und Kanälen. Das Klassendiagramm zeigt Typen und ihre Beziehungen, nicht die Zuordnung zur Infrastruktur.",
   "Richtig: Klassen-, Paket- und Komponentendiagramm zählen zu den Strukturdiagrammen der UML. Sie zeigen statische Struktur, also Elemente und ihre Beziehungen unabhängig vom zeitlichen Ablauf.",
   "Richtig: Als statisches Diagramm eignet es sich typischerweise für die Bausteinsicht, etwa um die Struktur eines Bausteins auf feiner Ebene oder ein Domänenmodell darzustellen.",
   "Falsch: Ein Klassendiagramm zeigt keinen zeitlichen Ablauf. Für Abläufe in der Laufzeitsicht nutzt man Sequenz- oder Aktivitätsdiagramme, die die Reihenfolge von Interaktionen darstellen.",
   "Falsch: Das Curriculum schreibt keine bestimmte Notation pro Sicht vor. Für die Bausteinsicht eignen sich etwa auch Komponenten- oder Paketdiagramme oder informelle Box-and-Line-Darstellungen mit Legende.",
   "Richtig: Inhalt des Klassendiagramms sind Typen bzw. Klassen und ihre Beziehungen wie Assoziation, Aggregation, Vererbung oder Abhängigkeit, ggf. mit Attributen und Operationen."
  ],
  "explanation": "Das Klassendiagramm (R2) ist ein Strukturdiagramm, zeigt Klassen und Beziehungen und passt zur Bausteinsicht. Fallen: Es ist weder Verteilungsdiagramm noch Pflichtnotation für eine Sicht, und für Abläufe der Laufzeitsicht taugt es nicht – dafür gibt es Sequenz- und Aktivitätsdiagramme."
 },
 {
  "id": "c4q19",
  "chapter": 4,
  "lz": "LZ 04-08",
  "r": "R2",
  "type": "multi",
  "q": "Ein Team legt fest, welche Entscheidungen es als Architecture Decision Record (ADR) festhält. Welche Aussagen treffen zu?",
  "options": [
   "Eine Entscheidung, die Folgeentscheidungen nach sich zieht.",
   "Erst wenn sich die Entscheidung in der Praxis bewährt hat.",
   "Als laufend gepflegte Gesamtbeschreibung der Architektur.",
   "Eine schwer umkehrbare Technologiegrundsatzentscheidung.",
   "Detailentscheidungen im Code.",
   "Die Wahl eines Integrationsmusters mit großer Tragweite."
  ],
  "correct": [
   0,
   3,
   5
  ],
  "optExpl": [
   "Richtig: Abhängigkeiten zwischen Entscheidungen sollen erkannt und dokumentiert werden. Eine Entscheidung, die Folgeentscheidungen auslöst, gehört festgehalten, damit später nachvollziehbar ist, warum die Folgeentscheidungen so ausfielen.",
   "Falsch: ADRs entstehen zum Entscheidungszeitpunkt, solange Kontext, Alternativen und Begründung noch präsent sind. Wer wartet, bis sich die Entscheidung bewährt hat, hat diese Informationen oft schon vergessen.",
   "Falsch: Ein ADR betrifft genau eine Entscheidung und wird danach nicht laufend umgeschrieben, sondern höchstens durch ein neues ADR abgelöst. Eine Gesamtbeschreibung der Architektur ist Aufgabe der übrigen Dokumentation, etwa arc42.",
   "Richtig: Gerade teure, schwer änderbare Entscheidungen wie die Wahl der Datenbank oder Plattform braucht man später samt Alternativen und Begründung. Sie sind klassische ADR-Kandidaten.",
   "Falsch: Übergeneralisierung: ADRs sind für tragende, architekturrelevante Entscheidungen gedacht. Wer jede Detailentscheidung im Code als ADR festhält, verwässert ihren Nutzen, und die wichtigen Entscheidungen gehen in der Masse unter.",
   "Richtig: Weitreichende Strukturentscheidungen wie die Wahl zwischen synchroner Kommunikation und Messaging sind typische ADR-Kandidaten. Sie betreffen viele Bausteine und sind später nur mit großem Aufwand zu ändern."
  ],
  "explanation": "ADR-würdig sind tragende, schwer umkehrbare Entscheidungen und solche mit Folgeentscheidungen, festgehalten zum Entscheidungszeitpunkt. Fallen: jede Kleinigkeit dokumentieren, erst nach Bewährung schreiben oder ADRs als laufend gepflegte Gesamtbeschreibung verstehen."
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
   "Falsch: Komponenten mit angebotenen und benötigten Schnittstellen zeigt das Komponentendiagramm der Bausteinsicht. Es beschreibt statische Struktur, nicht die technische Infrastruktur.",
   "Falsch: Zeitlich geordnete Nachrichten zwischen Objekten zeigt das Sequenzdiagramm, typisch für die Laufzeitsicht. Ein Verteilungsdiagramm enthält keine zeitliche Abfolge.",
   "Falsch: Pakete und ihre Abhängigkeiten zeigt das Paketdiagramm. Es ist eine statische Gliederung von Modell- oder Codeelementen und beschreibt keine Rechner, Ausführungsumgebungen oder Netzverbindungen.",
   "Richtig: Das Verteilungsdiagramm zeigt Knoten (Hardware oder Ausführungsumgebungen), die darauf verteilten Artefakte und die Kommunikationswege zwischen den Knoten. Es ist das typische Diagramm der Verteilungssicht."
  ],
  "explanation": "Das UML-Verteilungsdiagramm zeigt Knoten, darauf verteilte Artefakte und Kommunikationswege und gehört zur Verteilungssicht. Falle: Komponenten- und Paketdiagramm wirken ähnlich technisch, zeigen aber statische Struktur; das Sequenzdiagramm zeigt Abläufe."
 },
 {
  "id": "c4q21",
  "chapter": 4,
  "lz": "LZ 04-01",
  "r": "R1",
  "type": "multi",
  "q": "Die Architekturdokumentation Ihres Projekts weicht zunehmend vom Code ab. Welche Maßnahmen helfen am ehesten, sie dauerhaft aktuell zu halten?",
  "options": [
   "Die Doku gesammelt zu großen Releases aktualisieren.",
   "Die Pflege einer zentralen Doku-Rolle überlassen, die an den Änderungen nicht beteiligt ist.",
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
   "Falsch: Sammelaktualisierungen lassen die Doku zwischen den Releases veralten, und bis dahin sind viele Details und Begründungen vergessen. Besser ist es, die Doku kontinuierlich mit den Änderungen mitzuziehen.",
   "Falsch: Wer nicht an den Änderungen beteiligt ist, erfährt zu spät davon und versteht die Hintergründe oft nicht. Die Doku läuft dann hinterher. Koordination durch die leitende Architekt:in ist sinnvoll, die inhaltliche Pflege gehört aber zu denen, die die Änderungen machen.",
   "Richtig: Aus dem Code generierte Übersichten, etwa Abhängigkeitsgraphen oder Diagrams-as-Code, bleiben automatisch synchron. Das eignet sich besonders für Details, die sich häufig ändern und sich aus dem Code ableiten lassen.",
   "Richtig: Wird die Doku-Pflege in der Definition of Done verankert, zieht das Team sie bei relevanten Änderungen mit. Dadurch veraltet sie nicht unbemerkt, und Doku wird Teil der normalen Arbeit statt einer Sonderaufgabe.",
   "Richtig: Schlanke Doku nah am Code, versioniert im selben Repository (Docs-as-Code), ist günstig zu pflegen. Änderungen bleiben über die Versionshistorie nachvollziehbar und lassen sich mit Code-Änderungen gemeinsam reviewen.",
   "Falsch: Mehr Details erhöhen den Pflegeaufwand erheblich, und die Doku veraltet dadurch eher schneller. Architekturdoku sollte sich auf Wesentliches konzentrieren; Details, die der Code ohnehin zeigt, gehören nicht hinein."
  ],
  "explanation": "Architekturdoku bleibt aktuell, wenn sie schlank, versioniert und nah am Code ist, ihre Pflege Teil der Definition of Done ist und Übersichten wo möglich generiert werden. Fallen: mehr Details, zentrale Pflege durch eine entfernte Rolle oder seltene Sammelupdates verschlimmern das Veralten."
 },
 {
  "id": "c4q22",
  "chapter": 4,
  "lz": "LZ 04-01",
  "r": "R1",
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
   "Richtig: Gerade Homonyme wie „Vertrag“ – für den Fachbereich ein Kundenvertrag, für die Entwicklung ein Schnittstellenvertrag – werden durch eindeutige Definitionen im Glossar aufgedeckt. Erst dann fällt auf, dass beide Seiten aneinander vorbeireden.",
   "Falsch: Begriffe müssen von Fachbereich und Entwicklung gemeinsam abgestimmt werden. Pflegt die Entwicklung allein, fehlt die fachliche Sicht, und das Glossar verfehlt seinen Zweck als gemeinsames Vokabular.",
   "Falsch: Ein Domänenmodell zeigt Strukturen und Beziehungen der Fachobjekte, ersetzt aber nicht die textuelle Definition der Begriffe. Beide ergänzen sich: Das Glossar erklärt, was ein Begriff bedeutet.",
   "Richtig: Ein gemeinsames Vokabular reduziert Missverständnisse zwischen Fachbereich und IT. Es wird durchgängig in Dokumentation, Code und Gesprächen verwendet, ähnlich der Ubiquitous Language im DDD.",
   "Falsch: Gerade die Fachbegriffe sind oft mehrdeutig und gehören deshalb ins Glossar. Technische Begriffe wie Framework-Namen sind meist anderweitig gut dokumentiert und selten die Ursache von Missverständnissen."
  ],
  "explanation": "Ein Glossar schafft eine gemeinsame, konsistente Begriffswelt zwischen Fachbereich und IT und deckt Homonyme wie „Vertrag“ auf. Fallen: Es geht vor allem um Fachbegriffe, es wird gemeinsam gepflegt und durch ein Domänenmodell nicht ersetzt."
 },
 {
  "id": "c4q23",
  "chapter": 4,
  "lz": "LZ 04-02",
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
   "Richtig: Das große Ganze ordnet alles Weitere ein: wofür das System da ist, mit wem es interagiert und was den Lösungsraum einschränkt. Ohne diesen Rahmen bleiben Details für Neue schwer verständlich.",
   "Richtig: Eine grobe Bausteinsicht zeigt, welche Teile es gibt und wofür sie verantwortlich sind, ohne in Details abzutauchen. So wissen die Neuen, wo sie Funktionalität finden und wo Änderungen hingehören.",
   "Falsch: Build-Skripte sind für die lokale Einrichtung nützlich, gehören aber in eine Entwickleranleitung oder ein README. Ein Architekturüberblick vermittelt Strukturen und Entscheidungen, keine Werkzeugdetails.",
   "Falsch: Eine chronologische Änderungshistorie liefert viele Details, aber keinen Überblick über die aktuelle Architektur. Dafür gibt es Versionskontrolle und Changelogs; relevante Entscheidungen werden gezielt dokumentiert.",
   "Richtig: Wer die Gründe hinter zentralen Entscheidungen kennt, macht sie nicht versehentlich rückgängig. Begründungen erklären auch, warum das System so aussieht, wie es aussieht – etwa als kurze ADR-Liste."
  ],
  "explanation": "Ein Architekturüberblick vermittelt Kontext, Ziele, Randbedingungen, Hauptbausteine und zentrale Entscheidungen samt Begründung. Falle: Änderungshistorie oder Build-Details sind nützlich, gehören aber in andere Dokumente und liefern keinen Überblick."
 },
 {
  "id": "c4q24",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R1",
  "type": "multi",
  "q": "Im Review fällt auf, dass ein Baustein in Baustein- und Laufzeitsicht verschieden benannt ist. Welche Aussagen zur Konsistenz von Sichten treffen zu?",
  "options": [
   "Unterschiedliche Detailtiefen je Sicht sind zulässig.",
   "Konsistenz erfordert ein gemeinsames Modellierungswerkzeug.",
   "Bausteine müssen in Baustein-, Laufzeit- und Verteilungssicht vorkommen.",
   "Derselbe Baustein darf sich in Sichten nicht widersprechen.",
   "Bei Widerspruch gilt die Bausteinsicht."
  ],
  "correct": [
   0,
   3
  ],
  "optExpl": [
   "Richtig: Sichten zeigen verschiedene Aspekte und Abstraktionsebenen, also darf ihre Detailtiefe variieren. Die Laufzeitsicht kann z. B. gröber sein als die Bausteinsicht – widerspruchsfrei müssen beide trotzdem sein.",
   "Falsch: Ein gemeinsames Modellierungswerkzeug kann Konsistenz erleichtern, ist aber keine Voraussetzung. Oft reichen Konventionen, ein Glossar und Reviews, um Sichten widerspruchsfrei zu halten.",
   "Falsch: Die Laufzeitsicht zeigt nur ausgewählte, wichtige Szenarien, und die Verteilungssicht zeigt Artefakte statt Bausteine. Nicht jeder Baustein muss in jeder Sicht auftauchen.",
   "Richtig: Alle Sichten beschreiben dasselbe System. Abweichende Namen oder Verantwortungen für denselben Baustein verwirren die Leser und deuten auf Fehler oder veraltete Doku hin – wie im Review-Fall der Frage.",
   "Falsch: Keine Sicht hat pauschal Vorrang. Ein Widerspruch zeigt, dass mindestens eine Sicht falsch oder veraltet ist; er wird inhaltlich geklärt und dann in allen betroffenen Sichten korrigiert."
  ],
  "explanation": "Sichten dürfen unterschiedlich detailliert sein, müssen aber widerspruchsfrei sein – derselbe Baustein braucht überall denselben Namen und dieselbe Verantwortung. Fallen: Konsistenz heißt nicht „jeder Baustein in jeder Sicht“, „Bausteinsicht gewinnt“ oder „nur mit Werkzeug“."
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
  "rowExpl": [
   "Eine kopierte Anforderungsspezifikation bläht die Doku auf und muss doppelt gepflegt werden. Besser auf die Anforderungen verweisen, statt sie zu kopieren, deshalb gehört sie nicht hinein.",
   "Bekannte Risiken und technische Schulden helfen Leser:innen, die Architektur und ihre Schwächen einzuschätzen. Das ist sinnvoller Inhalt und kein Ballast.",
   "Eine Beschreibung jeder Klasse mit allen Methoden ist zu detailliert und bläht die Doku auf. Die Architekturdoku beschreibt Wesentliches, deshalb gehört das nicht hinein.",
   "Verworfene Alternativen machen nachvollziehbar, warum eine zentrale Entscheidung so getroffen wurde. Sie erklären die Gründe der Architektur und gehören deshalb in die Doku.",
   "Priorisierte Qualitätsziele erklären, wonach sich die Architektur richtet und warum Entscheidungen so ausfielen. Das ist sinnvoller Inhalt für Leser:innen und gehört in die Doku."
  ],
  "explanation": "Priorisierte Qualitätsziele, bekannte Risiken und technische Schulden sowie verworfene Alternativen helfen Lesern, die Architektur und ihre Gründe zu verstehen. Eine Beschreibung jeder Klasse und eine kopierte Anforderungsspezifikation blähen die Doku auf – besser verweisen statt kopieren."
 },
 {
  "id": "c4q26",
  "chapter": 4,
  "lz": "LZ 04-06",
  "r": "R1",
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
   "Richtig: Nutzer müssen wissen, wie sich die Schnittstelle bei Fehlern, ungültigen Eingaben oder Überlast verhält. Nur dann können sie solche Fälle zuverlässig behandeln, etwa durch Wiederholung oder eine Fehlermeldung.",
   "Falsch: Das verletzt Information Hiding: Die interne Speicherung ist ein Implementierungsdetail und soll austauschbar bleiben. Relevante Seiteneffekte beschreibt man fachlich als Verhalten, nicht über interne Strukturen.",
   "Falsch: Schnittstelle und Implementierung sind gerade getrennt, damit die Implementierung austauschbar bleibt. Nutzer brauchen Protokoll und Datenformate, nicht die Programmiersprache oder Frameworks hinter der Schnittstelle.",
   "Richtig: Externe Nutzer lassen sich nicht im Gleichschritt mitändern. Deshalb muss die Beschreibung klarstellen, wie Versionen gekennzeichnet werden und welche Änderungen rückwärtskompatibel bleiben.",
   "Richtig: Zugesicherte Qualitäten wie Antwortzeit oder Verfügbarkeit sind Teil des Vertrags, auf den sich Nutzer verlassen. Ohne sie kann niemand beurteilen, ob die Schnittstelle für den eigenen Zweck taugt.",
   "Richtig: Operationen, Parameter, Datenformate und ihre Semantik bilden den Kern des Vertrags. Erst die Semantik macht klar, was ein Aufruf tatsächlich bewirkt, etwa ob eine Buchung sofort oder verzögert erfolgt."
  ],
  "explanation": "Eine Schnittstellenbeschreibung legt den Vertrag fest: Operationen mit Semantik, Fehlerverhalten, zugesicherte Qualitäten und – gerade extern – Versionierung. Fallen: Interne Datenstrukturen und Implementierungstechnologie gehören nicht hinein, auch wenn sie mit Nutzerbedürfnissen begründet werden."
 },
 {
  "id": "c4q27",
  "chapter": 4,
  "lz": "LZ 04-01",
  "r": "R1",
  "type": "multi",
  "q": "Ein Projektleiter fordert, „einfach alles“ zu dokumentieren. Welche Argumente sprechen am ehesten dagegen?",
  "options": [
   "Die Architektur lässt sich aus dem Code ableiten.",
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
   "Falsch: Strukturen lassen sich teilweise aus dem Code rekonstruieren, Begründungen, verworfene Alternativen und Qualitätsziele aber nicht. Die Architektur ist daher nicht vollständig aus dem Code ableitbar.",
   "Richtig: Angemessenheit heißt: so viel wie nötig, so wenig wie möglich, gemessen am Bedarf der Zielgruppen. Inhalte, die niemand liest oder braucht, kosten nur Aufwand.",
   "Richtig: Was der Code eindeutig zeigt, etwa einzelne Klassen oder Methoden, muss nicht doppelt gepflegt werden. Die Dokumentation ergänzt Überblick, Begründungen und Zusammenhänge.",
   "Falsch: Der Code enthält weder Begründungen noch Alternativen oder Qualitätsziele. Architekturdokumentation bleibt deshalb über den ganzen Lebenszyklus nötig, auch wenn Code existiert.",
   "Richtig: Je mehr Inhalt, desto mehr muss bei jeder Änderung nachgezogen werden. Wird das versäumt, veraltet die Dokumentation und wird irreführend; Aktualität ist eine zentrale Anforderung an gute Doku."
  ],
  "explanation": "Gegen „alles dokumentieren“ sprechen Pflegeaufwand, schnelles Veralten, unnötige Redundanz zum Code und fehlender Nutzen für die Zielgruppen. Falle: Daraus folgt nicht, dass Code die Dokumentation ersetzt, denn Begründungen und Alternativen stehen nicht im Code."
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
   "Falsch: Zustände eines Objekts und die Übergänge zwischen ihnen beschreibt das Zustandsdiagramm (State Machine). Das Aktivitätsdiagramm zeigt dagegen den Ablauf von Aktionen, also den Kontroll- bzw. Datenfluss.",
   "Richtig: Über Gabelungen (Fork) und Vereinigungen (Join) lassen sich parallele Prüfschritte abbilden. Gerade für Abläufe mit Nebenläufigkeit ist das Aktivitätsdiagramm daher gut geeignet.",
   "Richtig: Aktionen, Entscheidungsknoten und deren Zusammenführung bilden den Kontrollfluss ab. So lassen sich etwa alternative Pfade wie „Freigabe erteilt“ oder „Nacharbeit nötig“ übersichtlich darstellen.",
   "Falsch: Die Zuordnung von Bausteinen bzw. Artefakten zu Ausführungsknoten zeigt das Verteilungsdiagramm in der Verteilungssicht. Das Aktivitätsdiagramm beschreibt Abläufe, keine Infrastruktur.",
   "Richtig: Wie das Sequenzdiagramm zeigt das Aktivitätsdiagramm dynamisches Verhalten und passt daher zur Laufzeitsicht. Mit Partitionen (Swimlanes) kann man zusätzlich zeigen, welcher Baustein welche Aktion ausführt."
  ],
  "explanation": "Das UML-Aktivitätsdiagramm zeigt Abläufe mit Aktionen, Verzweigungen und Nebenläufigkeit und eignet sich für die Laufzeitsicht. Fallen: die Verwechslung mit dem Zustandsdiagramm (Objektzustände) und mit dem Verteilungsdiagramm (Zuordnung zu Knoten)."
 },
 {
  "id": "c4q29",
  "chapter": 4,
  "lz": "LZ 04-09",
  "r": "R3",
  "extra": true,
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
   "Falsch: Klingt nach Qualitätssicherung, ist aber kein eigener arc42-Abschnitt. Testkonzepte können allenfalls als Querschnittskonzept in Abschnitt 8 auftauchen; die Testplanung selbst gehört nicht in die Architekturdoku.",
   "Richtig: Abschnitt 8 beschreibt übergreifende Konzepte wie Persistenz, Fehlerbehandlung, Logging oder Sicherheit zentral an einer Stelle. So werden sie in vielen Bausteinen einheitlich umgesetzt.",
   "Richtig: Abschnitt 2 hält technische, organisatorische und rechtliche Vorgaben fest, die den Lösungsraum einschränken, etwa eine vorgegebene Programmiersprache oder Betriebsplattform.",
   "Richtig: Abschnitt 4 fasst die grundlegenden Entscheidungen und Lösungsansätze kurz zusammen, etwa Technologiewahl, Zerlegungsansatz oder Ansätze zum Erreichen der wichtigsten Qualitätsziele.",
   "Falsch: Kostenplanung ist Aufgabe von Projekt- bzw. Betriebsmanagement und kein Abschnitt von arc42. Kosten können zwar eine Randbedingung sein, haben aber keinen eigenen Abschnitt.",
   "Richtig: Abschnitt 10 konkretisiert die Qualitätsanforderungen, z. B. mit Qualitätsbaum und messbaren Qualitätsszenarien. Die wichtigsten Qualitätsziele stehen zusätzlich schon in Abschnitt 1."
  ],
  "explanation": "arc42 sieht u. a. Randbedingungen (2), Lösungsstrategie (4), Querschnittliche Konzepte (8) und Qualitätsanforderungen (10) als eigene Abschnitte vor. Fallen: Teststrategie und Betriebs-/Lizenzkosten klingen plausibel, sind aber keine arc42-Abschnitte."
 },
 {
  "id": "c4q30",
  "chapter": 4,
  "lz": "LZ 04-03",
  "r": "R2",
  "type": "multi",
  "q": "Ein Team diskutiert, ob es UML für seine Microservice-Architektur nutzen soll. Welche Aussagen zu UML als Notation treffen zu?",
  "options": [
   "Das Curriculum schreibt UML für die Sichten vor.",
   "UML ist auf objektorientierte Systeme beschränkt.",
   "Eine beliebige Notation kann genügen, wenn sie z. B. durch eine Legende erläutert wird.",
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
   "Falsch: Das Curriculum schreibt keine bestimmte Notation pro Sicht vor. Es empfiehlt, eine für die Zielgruppe verständliche und konsistente Notation zu wählen; UML ist dabei verbreitet, aber nicht Pflicht.",
   "Falsch: UML ist nicht auf Objektorientierung beschränkt. Komponenten-, Verteilungs- und Sequenzdiagramme lassen sich ebenso für Services, Container oder Nachrichtenflüsse nutzen.",
   "Richtig: Das Curriculum schreibt keine Pflichtnotation vor. Eine beliebige Notation kann genügen, solange ihre Bedeutung z. B. durch eine Legende erklärt ist; entscheidend ist Verständlichkeit.",
   "Richtig: Solange die Bedeutung der Elemente klar bleibt, darf UML informell und skizzenhaft genutzt werden. Der Grad an Formalität lässt sich an Zweck und Zielgruppe anpassen.",
   "Richtig: Komponentendiagramme bilden Bausteine ab, Verteilungsdiagramme die Infrastruktur und Sequenzdiagramme Abläufe. Diese Diagrammtypen sind auch für Microservice-Architekturen gut geeignet.",
   "Falsch: Diagramme zeigen Strukturen und Abläufe, aber keine Begründungen, Abwägungen oder verworfenen Alternativen. Dafür braucht es weiterhin erklärenden Text, etwa in ADRs."
  ],
  "explanation": "UML bietet nützliche Diagrammtypen, ist auch skizzenhaft und für Microservices einsetzbar, und eine beliebige erläuterte Notation ist zulässig. Fallen: UML ist weder vom Curriculum vorgeschrieben noch auf OO beschränkt noch ein Ersatz für textuelle Begründungen."
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
  "rowExpl": [
   "Welche Knoten Test- und Produktionsumgebung bilden, ist Infrastruktur und kein Ablauf. Das gehört in die Verteilungssicht, nicht in die Laufzeitsicht.",
   "Die Zustandsübergänge einer Bestellung beschreiben dynamisches Verhalten über die Zeit. Das gehört in die Laufzeitsicht; die Verteilungssicht zeigt keine Abläufe.",
   "Welches Artefakt auf welchem Knoten installiert ist, ist eine statische Zuordnung zur Infrastruktur. Das ist Verteilungssicht und kein Ablauf der Laufzeitsicht.",
   "Das Zusammenspiel der Bausteine im Fehlerfall ist dynamisches Verhalten und damit Laufzeitsicht. Die Verteilungssicht zeigt dazu nichts.",
   "Der Ablauf beim Hochfahren und Initialisieren ist ein Ablauf über die Zeit und gehört damit in die Laufzeitsicht. Mit der Infrastruktur der Verteilungssicht hat er nichts zu tun."
  ],
  "explanation": "Laufzeitsicht: Zustandsübergänge der Bestellung, das Zusammenspiel im Fehlerfall und der Start- und Initialisierungsablauf – alles dynamisches Verhalten. Verteilungssicht: welche Knoten Test- und Produktionsumgebung bilden und welches Artefakt wo installiert ist. Falle: Umgebungen wirken wie Abläufe, sind aber Infrastruktur."
 },
 {
  "id": "c4q32",
  "chapter": 4,
  "lz": "LZ 04-01",
  "r": "R1",
  "type": "multi",
  "q": "Ihr Team erstellt Kriterien für gute Architekturdokumentation. Welche Kriterien sind im Sinne des Curriculums zutreffend?",
  "options": [
   "Bis zur untersten Bausteinebene ausgearbeitet.",
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
   "Falsch: Vollständigkeit bis zur untersten Ebene ist kein Qualitätskriterium; sie widerspricht der Angemessenheit. Zu viel Detail ist teuer zu pflegen, veraltet schnell und verdeckt das Wesentliche.",
   "Richtig: Angemessenheit – so viel wie nötig, so wenig wie möglich – ist eines der im Curriculum genannten Qualitätskriterien technischer Dokumentation. Maßstab ist der Bedarf der Leser.",
   "Richtig: Effizienz umfasst, dass Leser das Gesuchte schnell finden, etwa durch eine feste Gliederung wie arc42, und dass Erstellung und Pflege mit vertretbarem Aufwand möglich sind.",
   "Richtig: Wartbarkeit sorgt dafür, dass die Dokumentation bei Systemänderungen mit vertretbarem Aufwand nachgezogen werden kann. Sonst veraltet sie und verliert ihren Nutzen.",
   "Falsch: Korrektheit verlangt Übereinstimmung mit dem tatsächlichen System. Veraltete Dokumentation führt Leser in die Irre – auch gute Begründungen helfen dann nicht mehr.",
   "Richtig: Nicht Autor oder Gremium, sondern die Leser entscheiden, ob sie verstehen, was gemeint ist. Deshalb holt man Feedback der Zielgruppe ein."
  ],
  "explanation": "Kriterien guter Architekturdokumentation sind Verständlichkeit (beurteilt durch die Zielgruppe), Korrektheit, Effizienz, Angemessenheit und Wartbarkeit. Fallen: Vollständigkeit bis ins Detail ist kein Ziel, und Aktualität ist nicht zweitrangig – veraltete Doku ist nicht korrekt."
 },
 {
  "id": "c4q33",
  "chapter": 4,
  "lz": "LZ 04-08",
  "r": "R2",
  "type": "single",
  "q": "Ein Team nutzt arc42 und überlegt, zusätzlich ADRs einzuführen. Worin unterscheiden sich beide bei Entscheidungen am ehesten?",
  "options": [
   "ADRs dürfen nicht außerhalb von arc42 verwendet werden.",
   "arc42 bettet sie in die Gesamtdoku ein, ADRs sind Einzeldokumente.",
   "arc42 erfasst offene, ADRs nur getroffene Entscheidungen.",
   "ADRs halten Alternativen und Begründungen fest, arc42 nicht."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: ADRs sind ein eigenständiges Format und unabhängig von arc42 nutzbar, etwa als Markdown-Dateien im Repository. Man kann sie aber gut im arc42-Abschnitt zu Architekturentscheidungen referenzieren.",
   "Richtig: arc42 ordnet Entscheidungen in einem Abschnitt der Gesamtdokumentation ein. Ein ADR ist dagegen ein eigenständiges, kurzes Dokument je Entscheidung mit Status, Kontext und Konsequenzen – beides lässt sich kombinieren.",
   "Falsch: Beide halten vor allem getroffene Entscheidungen fest. Ein ADR kann zudem den Status „vorgeschlagen“ haben, erfasst also gerade auch noch offene Entscheidungen – die Zuordnung ist hier verdreht.",
   "Falsch: Auch arc42 sieht Begründungen und betrachtete Alternativen für Entscheidungen vor. ADRs sind nur eine andere, stärker formalisierte Form, dieselben Informationen festzuhalten."
  ],
  "explanation": "arc42 bettet Entscheidungen in die Gesamtdokumentation ein, ADRs sind eigenständige Einzeldokumente mit Status; beides lässt sich kombinieren. Fallen: Begründungen und Alternativen gibt es in beiden, und ADRs sind nicht an arc42 gebunden."
 },
 {
  "id": "c4q34",
  "chapter": 4,
  "lz": "LZ 04-08",
  "r": "R2",
  "type": "multi",
  "q": "Welche Angaben enthält ein Architecture Decision Record (ADR) nach Michael Nygard?",
  "options": [
   "Einen Titel (kurze Bezeichnung der Entscheidung).",
   "Die Entscheidung selbst.",
   "Konsequenzen.",
   "Laufend fortgeschriebene Erfahrungen aus dem Betrieb.",
   "Eine Aufwandsschätzung für die Umsetzung.",
   "Status (z. B. akzeptiert, abgelöst).",
   "Kontext.",
   "Eine Zeiterfassung der Entscheidungsfindung je beteiligter Person."
  ],
  "correct": [
   0,
   1,
   2,
   5,
   6
  ],
  "optExpl": [
   "Richtig: Nygards Vorlage beginnt mit einem kurzen Titel, der die Entscheidung benennt. Er macht ADRs in einer Liste auffindbar.",
   "Richtig: Kern jedes ADR ist die konkret getroffene Entscheidung, meist in aktiver Formulierung („Wir verwenden …“). Ohne sie wäre der Datensatz nur eine Problembeschreibung.",
   "Richtig: Die Folgen, positive wie negative, machen die Entscheidung später nachvollziehbar. Sie zeigen, welche Trade-offs bewusst in Kauf genommen wurden und was sich dadurch ändert.",
   "Falsch: ADRs werden nicht fortlaufend umgeschrieben. Ändert sich die Lage, entsteht ein neues ADR, das das alte ablöst; so bleibt die Entscheidungshistorie nachvollziehbar.",
   "Falsch: Aufwandsschätzungen gehören zur Projektplanung. Ein ADR hält fest, was warum entschieden wurde; Aufwand kann höchstens als Kontext oder Konsequenz anklingen, ist aber kein Nygard-Feld.",
   "Richtig: Der Status zeigt, ob eine Entscheidung vorgeschlagen, akzeptiert, verworfen oder durch eine neuere abgelöst ist. So erkennt man ohne Umschreiben, welche Entscheidungen aktuell gelten.",
   "Richtig: Der Kontext beschreibt das Problem und die Kräfte, etwa Anforderungen und Randbedingungen, die die Entscheidung auslösen. Er erklärt späteren Leser:innen, warum überhaupt entschieden werden musste.",
   "Falsch: Ein ADR hält fest, was warum entschieden wurde, nicht wer wie viel Zeit investiert hat. Zeiterfassung gehört zur Projektsteuerung."
  ],
  "explanation": "Ein ADR nach Nygard enthält Titel, Status, Kontext, Entscheidung und Konsequenzen. Fallen: Eine Aufwandsschätzung gehört nicht hinein, und statt ein ADR mit Betriebserfahrungen fortzuschreiben, löst man es durch ein neues ab."
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
   "Falsch: Der Code zeigt nur Signaturen, nicht Zusicherungen, Fehlerverhalten oder Qualitätseigenschaften. Auch interne Schnittstellen brauchen daher eine angemessene, wenn auch weniger formale Beschreibung.",
   "Falsch: Es ist umgekehrt: Externe Schnittstellen haben mehr und oft unbekannte Nutzer, die nicht einfach nachfragen können. Sie brauchen daher mehr Formalität und Detail als interne Schnittstellen.",
   "Falsch: OpenAPI beschreibt vor allem die Syntax: Endpunkte, Parameter, Datentypen. Bedeutung, Vor- und Nachbedingungen, Fehlerverhalten und Qualitätszusicherungen müssen zusätzlich festgehalten werden.",
   "Richtig: Externe Schnittstellen sind Verträge mit Dritten und nach Veröffentlichung schwer zu ändern. Sie werden daher meist früher, formeller und versioniert dokumentiert, damit Partner verlässlich darauf aufbauen können."
  ],
  "explanation": "Externe Schnittstellen sind Verträge mit Dritten und werden früher, formeller und versioniert dokumentiert; interne brauchen eine angemessene, schlankere Beschreibung. Fallen: Code oder OpenAPI decken nur die Syntax ab, nicht Semantik und Fehlerverhalten, und interne Schnittstellen sind nicht detaillierter zu beschreiben."
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
   "In den betroffenen Bausteinen separat beschreiben.",
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
   "Richtig: Beispielcode, Walkthroughs oder Vorlagen helfen, das Konzept in die Bausteine zu tragen. Entwickler übernehmen ein gutes Beispiel oft schneller als eine abstrakte Regel – das fördert einheitliche Umsetzung.",
   "Falsch: Klingt nah an der Umsetzung, führt aber zu Redundanz: Jeder Baustein bekommt seine eigene Beschreibung, die mit der Zeit auseinanderläuft. Querschnittskonzepte gehören gerade zentral an eine Stelle.",
   "Falsch: Ein Querschnittskonzept soll die einheitliche Umsetzung leiten. Wird es erst nach der Implementierung dokumentiert, kommt es zu spät – bis dahin hat jedes Team eigene Varianten gebaut.",
   "Richtig: Zentral dokumentiert, etwa in arc42 Abschnitt 8, wird das Konzept in vielen Bausteinen einheitlich umgesetzt. Bausteine können darauf verweisen, statt es zu wiederholen.",
   "Richtig: Wer Anlass, Regeln, Begründung und ein Beispiel festhält, ermöglicht Lesern, nicht nur die Regel zu kennen, sondern auch zu verstehen, warum und wie sie anzuwenden ist – auch in nicht vorhergesehenen Fällen.",
   "Falsch: Konzepte ergänzen die Sichten, ersetzen sie aber nicht. Ein architekturrelevantes Fehlerszenario, etwa der Ausfall eines Fremdsystems, kann weiterhin in die Laufzeitsicht gehören."
  ],
  "explanation": "Querschnittskonzepte wie Fehlerbehandlung werden zentral (z. B. arc42 Abschnitt 8) mit Anlass, Regeln, Begründung und Beispiel dokumentiert und zusätzlich über Beispielcode vermittelt. Fallen: pro Baustein separat beschreiben, erst nachträglich dokumentieren oder die Laufzeitsicht für überflüssig halten."
 },
 {
  "id": "c5q2",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R3",
  "extra": true,
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
   "Falsch: Zu prüfen, ob der Code Schichtregeln folgt, ist eine Konformitätsanalyse (LZ 05-03). ATAM bewertet Architekturentscheidungen gegen Qualitätsziele, nicht die Umsetzung gegen den Entwurf.",
   "Falsch: Kopplung und Komplexität werkzeuggestützt zu messen sind quantitative Metrik-Analysen. ATAM ist dagegen eine moderierte Workshop-Methode und braucht nicht einmal Code.",
   "Richtig: ATAM spielt priorisierte Qualitätsszenarien gegen die Architekturentscheidungen durch, überwiegend qualitativ im Workshop. Es macht Trade-offs, Sensitivitätspunkte und Risiken explizit – daher auch der Name.",
   "Falsch: Alternativen nach Kosten und Nutzen in Geldwerten zu bewerten beschreibt eine Kosten-Nutzen-Analyse wie CBAM, die auf ATAM aufbauen kann. ATAM selbst fragt nach der Wirkung auf die Qualitätsziele."
  ],
  "explanation": "ATAM ist eine szenariobasierte, überwiegend qualitative Bewertungsmethode, die Trade-offs, Sensitivitätspunkte und Risiken explizit macht (R3). Fallen: Kosten-Nutzen-Bewertung (CBAM), Metrik-Messung und Konformitätsprüfung im Code sind andere Verfahren."
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
   "Eine szenariobasierte Analyse ist quantitativ, da Szenarien Antwortmaße enthalten.",
   "Sobald Code vorliegt, ersetzen Metriken die Experten-Reviews.",
   "Qualitative Verfahren sind auch ohne lauffähigen Code einsetzbar.",
   "Lasttests sind qualitativ, da ihr Ergebnis interpretiert wird."
  ],
  "correct": [
   0,
   3
  ],
  "optExpl": [
   "Richtig: Beide Verfahrensarten ergänzen sich: Metriken liefern Auffälligkeiten, die im Review qualitativ eingeordnet werden; Szenarioanalysen können wiederum gezielte Messungen anstoßen.",
   "Falsch: Die Szenarien enthalten zwar Messgrößen, die Bewertung erfolgt aber durch Experteneinschätzung der Architektur. Szenariobasierte Bewertung bleibt daher qualitativ.",
   "Falsch: Nicht jede Qualität ist messbar, und jede Zahl braucht Interpretation. Auch wenn Code vorliegt, bleiben qualitative Verfahren nötig, etwa um Entscheidungen und Trade-offs zu bewerten.",
   "Richtig: Reviews und Szenarioanalysen arbeiten mit Entwürfen, Modellen und Expertenwissen. Sie sind gerade früh einsetzbar, wenn noch kein Code existiert und Korrekturen noch billig sind.",
   "Falsch: Lasttests messen Laufzeitverhalten wie Antwortzeiten und Durchsatz und sind damit quantitativ. Dass Messwerte interpretiert werden müssen, macht das Verfahren nicht qualitativ."
  ],
  "explanation": "Qualitative Verfahren wie Reviews und Szenarioanalysen funktionieren ohne Code, quantitative wie Metriken oder Lasttests brauchen ein analysierbares Artefakt; beide ergänzen sich. Fallen: Messgrößen im Szenario machen die Analyse nicht quantitativ, und Interpretation macht Lasttests nicht qualitativ."
 },
 {
  "id": "c5q4",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R1",
  "type": "multi",
  "q": "Sie stellen für ein Architektur-Review Kennzahlen zusammen. Welche der folgenden Angaben sind quantitative (metrikbasierte) Größen?",
  "options": [
   "Afferente und efferente Kopplung eines Moduls.",
   "Antwortzeit unter Last im 95. Perzentil.",
   "Ergebnis einer Nutzerbefragung zur Bedienbarkeit.",
   "Einstufung eines Trade-offs als kritisch im Bewertungsworkshop.",
   "Priorität „hoch“ eines Szenarios in der Szenarioliste.",
   "Zyklomatische Komplexität einer Komponente."
  ],
  "correct": [
   0,
   1,
   5
  ],
  "optExpl": [
   "Richtig: Ein- und ausgehende Abhängigkeiten eines Moduls werden gezählt – eine klassische Kopplungsmetrik. Daraus lässt sich etwa die Instabilität eines Moduls berechnen; laut Curriculum gehört sie zu den quantitativen Analysen.",
   "Richtig: Laufzeitverhalten quantitativ zu messen nennt das Curriculum ausdrücklich als Analysemethode. Das 95. Perzentil der Antwortzeit ist ein gemessener Zahlenwert, kein Urteil.",
   "Falsch: Interviews und Umfragen nennt das Curriculum als qualitative Auswertung. Auch wenn Antworten auf einer Skala erfasst und gemittelt werden, bleibt es eine Einschätzung von Personen, keine Messung am System.",
   "Falsch: Ob ein Trade-off kritisch ist, entscheidet die Diskussion der Beteiligten im Bewertungsworkshop. Das ist ein qualitatives Ergebnis, auch wenn es später in einer Liste mit Kennzeichnung auftaucht.",
   "Falsch: Die Einstufung eines Szenarios als hoch, mittel oder gering ist ein Urteil der Stakeholder, kein gemessener Wert. Sie dient der Priorisierung, wirkt wie eine Kennzahl, ist aber qualitativ.",
   "Richtig: Die zyklomatische Komplexität wird aus dem Kontrollflussgraphen berechnet und ist eine quelltextbezogene Metrik. Sie zählt die unabhängigen Pfade und ist damit eindeutig quantitativ."
  ],
  "explanation": "Kopplungsgrade, zyklomatische Komplexität und gemessene Antwortzeiten sind quantitative Größen. Fallen: Prioritäten in der Szenarioliste, Workshop-Einstufungen und Nutzerbefragungen sind qualitative Urteile, auch wenn sie wie Kennzahlen aussehen."
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
   "Falsch: Eine Analyse liefert begründete Einschätzungen, Risiken und Kompromisse, aber keinen Beweis, dass die Qualitätsziele erreicht werden. Ob sie tatsächlich erfüllt sind, zeigt sich erst im laufenden System.",
   "Richtig: Das Curriculum nennt ausdrücklich zu prüfen, inwiefern architekturrelevante Anliegen der Stakeholder berücksichtigt sind. Übersehene Anliegen, etwa des Betriebs, sind eine häufige Ursache späterer Probleme.",
   "Richtig: Auch die Übereinstimmung von Implementierung und Architekturentscheidungen ist laut Curriculum ein Analysegrund. So erkennt man Architekturerosion, etwa unerlaubte Abhängigkeiten zwischen Schichten.",
   "Richtig: Ob der Entwurf die funktionalen und Qualitätsanforderungen erfüllt oder erfüllen wird, ist ein Kernzweck der Analyse. Szenariobasierte Verfahren prüfen dies anhand von Qualitätsszenarien.",
   "Richtig: Das Curriculum nennt das Finden von Risiken und Verbesserungsmöglichkeiten ausdrücklich vor, während und nach der Implementierung. Analyse ist also nicht auf frühe Phasen beschränkt, sondern auch bei bestehenden Systemen sinnvoll.",
   "Falsch: Aufwand und Termine verbindlich festzulegen, ist Aufgabe der Projektplanung. Analyseergebnisse wie identifizierte Risiken können in die Planung einfließen, sind aber nicht der Zweck der Architekturanalyse."
  ],
  "explanation": "Gründe laut Curriculum: Risiken finden (vor, während und nach der Implementierung), Anforderungserfüllung prüfen, Passung der Implementierung zu den Entscheidungen und Berücksichtigung der Stakeholder-Anliegen. Fallen: Eine Analyse ist weder ein Nachweis der Zielerreichung noch ein Planungsinstrument für Aufwand und Termine."
 },
 {
  "id": "c5q7",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R1",
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
   "Falsch: Starker fachlicher Zusammenhalt innerhalb des Moduls ist hohe Kohäsion – eine Eigenschaft im Inneren des Moduls, die sogar erwünscht ist. Hohe Kopplung beschreibt dagegen die Beziehungen nach außen.",
   "Falsch: Beides tritt oft gemeinsam auf, ist aber verschieden: Kopplung betrifft Beziehungen zwischen Modulen, Kohäsion den Zusammenhalt im Modul. Man misst sie getrennt und kann sie nicht gleichsetzen.",
   "Richtig: Kopplung misst die Abhängigkeiten zu anderen Modulen, etwa über afferente und efferente Beziehungen. Viele davon erschweren isoliertes Ändern, Testen und Austauschen, weil sich Änderungen leicht fortpflanzen.",
   "Falsch: Die Zahl der Verzweigungen im Kontrollfluss misst die zyklomatische Komplexität. Sie beschreibt die innere Komplexität eines Moduls und sagt nichts über seine Abhängigkeiten zu anderen Modulen aus."
  ],
  "explanation": "Hohe Kopplung bedeutet viele Abhängigkeiten zu anderen Modulen, sodass sich Änderungen leicht fortpflanzen. Fallen: Kohäsion (Zusammenhalt im Modul) und zyklomatische Komplexität (Verzweigungen im Kontrollfluss) sind eigene Metriken und nicht dasselbe wie Kopplung."
 },
 {
  "id": "c5q8",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R1",
  "type": "multi",
  "q": "Ein Analysewerkzeug meldet für eine Methode eine zyklomatische Komplexität von 14. Welche Aussagen dazu treffen zu?",
  "options": [
   "Sie zählt die Abhängigkeiten zu anderen Modulen.",
   "Sie misst die Zahl linear unabhängiger Pfade durch den Kontrollfluss.",
   "Sie misst die Tiefe der Vererbungshierarchie.",
   "Ein hoher Wert deutet auf schwer verständlichen und aufwendig zu testenden Code hin.",
   "Sie entspricht der Zahl der Anweisungen der Methode.",
   "Sie ist eine quelltextbezogene Metrik, die das Curriculum als Informationsquelle der Qualitätsanalyse nennt."
  ],
  "correct": [
   1,
   3,
   5
  ],
  "optExpl": [
   "Falsch: Die Anzahl der Abhängigkeiten zu anderen Modulen misst Kopplung, z. B. als afferente oder efferente Kopplung. Sie betrifft Beziehungen zwischen Modulen, nicht den Kontrollfluss innerhalb einer Methode.",
   "Richtig: Die zyklomatische Komplexität nach McCabe wird aus dem Kontrollflussgraphen berechnet und zählt die linear unabhängigen Pfade. Sie wächst im Wesentlichen mit jeder Verzweigung (if, Schleife, case) und gibt Hinweise auf Test- und Verständnisaufwand.",
   "Falsch: Die Verschachtelungstiefe der Vererbungshierarchie ist die Vererbungstiefe (Depth of Inheritance Tree) – eine andere objektorientierte Metrik, die sich auf Klassen, nicht auf Methoden bezieht.",
   "Richtig: Mit jedem zusätzlichen unabhängigen Pfad steigt die Zahl der nötigen Testfälle und der Aufwand, den Ablauf zu überblicken.",
   "Falsch: Die Anzahl der Anweisungen kommt Lines of Code nahe und misst den Umfang. Eine lange Methode ganz ohne Verzweigungen hat trotzdem eine zyklomatische Komplexität von nur 1.",
   "Richtig: Quelltextbezogene Metriken wie Lines of Code oder zyklomatische Komplexität zählen laut Curriculum (R1) zu den Informationsquellen."
  ],
  "explanation": "Die zyklomatische Komplexität zählt linear unabhängige Pfade durch den Kontrollfluss und steigt mit den Verzweigungen. Fallen: Umfang (LOC/Anweisungen), Kopplung zwischen Modulen und Vererbungstiefe sind andere Metriken."
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
   "Sie lassen sich gegen ein laufendes System prüfen, nicht gegen einen Entwurf.",
   "Sie legen fest, mit welcher Lösung ein Ziel erreicht wird.",
   "Sie eignen sich kaum für Ziele wie Wartbarkeit.",
   "Sie machen abstrakte Qualitätsziele überprüfbar."
  ],
  "correct": [
   0,
   4
  ],
  "optExpl": [
   "Richtig: Architekturentscheidungen werden gegen die Szenarien durchgespielt. So wird sichtbar, ob und wie gut eine Entscheidung die Qualitätsziele unterstützt und wo Risiken oder Trade-offs liegen.",
   "Falsch: Szenarien lassen sich gerade auch gegen Entwürfe und Modelle durchspielen, lange bevor ein System läuft. Das ist der Kern szenariobasierter, qualitativer Analyse.",
   "Falsch: Szenarien beschreiben das geforderte Verhalten (das WAS), nicht die technische Lösung (das WIE). Welche Lösung das Ziel erreicht, ist eine separate Entwurfsentscheidung.",
   "Falsch: Auch Wartbarkeit lässt sich als Änderungsszenario formulieren, z. B. „Eine neue Zahlungsart ist in zwei Personentagen eingebaut“. Szenarien eignen sich also ausdrücklich auch für solche Ziele.",
   "Richtig: „Performant“ allein ist nicht prüfbar, ein Szenario mit Kontext, Stimulus, Reaktion und Messung schon. Szenarien machen abstrakte Qualitätsziele konkret und überprüfbar."
  ],
  "explanation": "Qualitätsszenarien machen abstrakte Ziele überprüfbar und dienen als Maßstab, gegen den Architekturentscheidungen bewertet werden. Fallen: Sie beschreiben keine Lösung, brauchen kein laufendes System und funktionieren als Änderungsszenarien auch für Wartbarkeit."
 },
 {
  "id": "c5q10",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R1",
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
   "Falsch: Metriken wie Kopplung oder Komplexität können in ein Review einfließen, das Urteil entsteht aber durch Experteneinschätzung. Ein Walkthrough bleibt daher ein qualitatives Verfahren.",
   "Falsch: Beim Walkthrough führt der Autor selbst durch den Entwurf und erläutert ihn. Er ist weniger formal als eine Inspektion, die feste Rollen, Checklisten und einen unabhängigen Moderator vorsieht.",
   "Falsch: Reviews arbeiten gerade auch mit Dokumentation und Entwurfsmodellen, die das Curriculum als Informationsquellen der Bewertung nennt. Code ist keine Voraussetzung.",
   "Richtig: Fachleute gehen Entwurf und Modelle gemeinsam durch und beurteilen sie anhand der Qualitätsziele. Das ist qualitativ und schon vor der Implementierung möglich, wenn Korrekturen noch günstig sind."
  ],
  "explanation": "Ein Walkthrough ist eine qualitative, expertengestützte Durchsicht, bei der der Autor durch den Entwurf führt; er ist schon vor der Implementierung möglich. Fallen: Einfließende Metriken machen ihn nicht quantitativ, und er ist weniger formal als eine moderierte Inspektion."
 },
 {
  "id": "c5q11",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R1",
  "type": "multi",
  "q": "Sie planen die Analyse eines Online-Shops. Welche der folgenden Verfahren zählen typischerweise zu den qualitativen Analysemethoden?",
  "options": [
   "Szenariobasierte Analyse (Architektur gegen Qualitätsszenarien durchspielen).",
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
   "Richtig: Bei szenariobasierter Analyse wird die Architektur gegen konkrete Qualitätsszenarien durchgespielt. Das Ergebnis beruht auf der Einschätzung der Beteiligten, nicht auf Messungen – daher qualitativ.",
   "Falsch: Die zyklomatische Komplexität wird aus dem Kontrollfluss des Quelltexts berechnet. Sie ist eine Metrik und gehört damit zu den quantitativen Methoden.",
   "Richtig: Bei einem Architektur-Review beurteilen Fachleute den Entwurf anhand der Qualitätsziele. Das Ergebnis ist ein begründetes Urteil, keine Messung, und zählt deshalb zu den qualitativen Methoden.",
   "Richtig: Leicht übersehen: Das Curriculum nennt Penetrationstests ausdrücklich neben Interviews und Umfragen als qualitative Auswertung. Sie liefern Befunde über Schwachstellen, keine Messwerte.",
   "Falsch: Laufzeitverhalten wie Antwortzeiten unter Last zu messen ist laut Curriculum eine quantitative Methode. Das Ergebnis sind Zahlenwerte, etwa Millisekunden im 95. Perzentil.",
   "Falsch: Testabdeckung ist ein berechneter Prozentwert und damit eine quantitative Größe. Sie sagt zudem wenig über die Qualität der Tests aus, ist aber eindeutig messbar."
  ],
  "explanation": "Reviews, Szenarioanalysen und – leicht übersehen – Penetrationstests zählen zur qualitativen Analyse – Penetrationstests nennt das Curriculum ausdrücklich so, Szenarioanalysen gelten auch in der offiziellen Musterprüfung als qualitativ. Falle: Testabdeckung, Komplexitätsmetriken und Lastmessungen sind quantitativ, weil sie Zahlenwerte liefern."
 },
 {
  "id": "c5q12",
  "chapter": 5,
  "lz": "LZ 05-01",
  "r": "R1",
  "type": "multi",
  "q": "Ein Unternehmen betreibt ein System seit mehreren Jahren und möchte die Architekturanalyse künftig nicht mehr als einmaliges Ereignis, sondern gezielt zu geeigneten Zeitpunkten im Lebenszyklus einsetzen. Zu welchen Zeitpunkten ist eine Architekturanalyse sinnvoll?",
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
   "Falsch: Auch spätere Analysen können prüfen, ob die Anforderungen erfüllt sind, etwa über Messungen, Lasttests oder Akzeptanztests. Die Einschränkung auf reine Konformitätsprüfung ist falsch.",
   "Falsch: Messwerte liegen tatsächlich erst später vor, aber wer erst dann analysiert, findet Entwurfsrisiken zu spät und teuer. Das Curriculum nennt Analyse vor, während und nach der Implementierung, nicht vor allem danach.",
   "Richtig: Begleitend zur Umsetzung zeigt ein Soll-Ist-Abgleich, ob der Code der geplanten Architektur und den getroffenen Entscheidungen folgt. So wird Erosion erkannt, bevor sie sich verfestigt.",
   "Falsch: Anlassbezogene Analysen sind sinnvoll, aber nicht die einzigen. Begleitende Analysen sollen Risiken finden, bevor sie zu Problemen werden; wer erst auf Probleme wartet, analysiert zu spät.",
   "Richtig: Schon ein Entwurf lässt sich gegen Qualitätsszenarien prüfen, etwa in einem szenariobasierten Workshop. Gefundene Risiken sind dann noch günstig zu beheben, weil kaum Code betroffen ist.",
   "Richtig: Analyse ist nicht auf Neuentwicklungen beschränkt. Vor einer Erweiterung oder Migration klärt sie, ob die bestehende Architektur die neuen Anforderungen tragen kann und wo Risiken liegen."
  ],
  "explanation": "Laut Curriculum dient Architekturanalyse dazu, Risiken vor, während und nach der Implementierung zu finden, also früh am Entwurf, begleitend zur Umsetzung und bei Bestandssystemen. Fallen: „vor allem danach“, „nur bei Anlass“ und „später nur noch Konformität“."
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
   "Richtig: Wird eine Metrik zum Ziel, optimieren Beteiligte auf die Zahl statt auf die eigentliche Qualität (Goodhart’s Law). Beispiel: Testabdeckung steigt durch Tests ohne sinnvolle Assertions, ohne dass die Qualität besser wird.",
   "Falsch: Gerade das ist heikel: Programmiersprache, Domäne, Werkzeug und Systemkontext beeinflussen Metrikwerte stark. Ein direkter Vergleich zwischen Systemen trügt daher leicht; sinnvoller ist der Trend innerhalb eines Systems.",
   "Richtig: Ein Schwellenwert allein ist keine Bewertung. Ob ein Wert problematisch ist, hängt vom Baustein und seiner Rolle ab – eine hohe Komplexität kann in einem Parser angemessen, in einem einfachen Controller dagegen ein Warnsignal sein.",
   "Richtig: Qualitäten wie Wartbarkeit oder Sicherheit bilden Metriken nur ausschnittsweise ab. Qualitative Verfahren wie Reviews oder szenariobasierte Bewertung bleiben nötig, um ein vollständiges Bild zu erhalten.",
   "Falsch: Quelltextmetriken wie Kopplung oder zyklomatische Komplexität setzen vorhandenen Code voraus. Früh im Entwurf helfen eher qualitative Verfahren, etwa szenariobasierte Bewertungen oder Reviews von Entwürfen."
  ],
  "explanation": "Metriken brauchen Kontext und Interpretation, bilden Qualitäten nur teilweise ab und verlieren als Zielvorgabe ihre Aussagekraft (Goodhart’s Law). Fallen: Systemübergreifende Vergleiche sind heikel, und Quelltextmetriken setzen vorhandenen Code voraus – im frühen Entwurf helfen qualitative Verfahren."
 },
 {
  "id": "c5q14",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R1",
  "type": "multi",
  "q": "Welche Ergebnisse liefert eine Architekturbewertung typischerweise?",
  "options": [
   "Einen Nachweis, dass die Qualitätsziele erfüllt sind.",
   "Identifizierte Risiken für die Erreichung der Anforderungen.",
   "Eine vom Bewertungsteam erstellte Zielarchitektur.",
   "Eine Gesamtnote der Architektur.",
   "Sichtbar gemachte Zielkonflikte zwischen Qualitäten.",
   "Priorisierte Maßnahmenvorschläge."
  ],
  "correct": [
   1,
   4,
   5
  ],
  "optExpl": [
   "Falsch: Eine Bewertung zeigt Risiken auf, sie beweist nichts. Sie prüft Entscheidungen gegen Szenarien auf dem Papier; ob die Qualitätsziele tatsächlich erreicht werden, zeigt sich endgültig erst in Messung und Betrieb.",
   "Richtig: Eine Bewertung benennt Entscheidungen, die die Erreichung von Anforderungen gefährden, als Risiken. So wird sichtbar, wo gehandelt werden muss.",
   "Falsch: Das Bewertungsteam bewertet und gibt Empfehlungen. Den Entwurf verantworten weiterhin die Architekt:innen des Systems – eine fertige Zielarchitektur zu liefern ist nicht Aufgabe der Bewertung.",
   "Falsch: Bewertungen sind überwiegend qualitativ und messen die Architektur gegen die eigenen Qualitätsziele. Eine einzelne Gesamtnote würde die konkreten Risiken verdecken und wäre zwischen Systemen ohnehin nicht vergleichbar.",
   "Richtig: Entscheidungen verbessern oft eine Qualität zulasten einer anderen. Eine Bewertung macht solche Abwägungen sichtbar und damit diskutierbar.",
   "Richtig: Aus den gefundenen Risiken leiten sich priorisierte Empfehlungen ab, was zuerst angegangen werden sollte. So wird die Bewertung zur Grundlage konkreter Verbesserungen statt zu einem reinen Befund."
  ],
  "explanation": "Typische Ergebnisse einer Architekturbewertung: Risiken für die Erreichung der Anforderungen, sichtbar gemachte Zielkonflikte zwischen Qualitäten und priorisierte Maßnahmen. Fallen: keine Gesamtnote, kein Nachweis der Zielerfüllung und keine vom Bewertungsteam entworfene neue Architektur."
 },
 {
  "id": "k10",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R1",
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
  "rowExpl": [
   "Penetrationstests beruhen auf der Einschätzung von Fachleuten, die Angriffe versuchen. Es entsteht eine Bewertung von Schwachstellen und keine laufend gemessene Kennzahl, deshalb gilt das Vorgehen als qualitativ.",
   "Interviews und Umfragen sammeln Einschätzungen und Erfahrungswissen von Beteiligten. Das Ergebnis ist eine Bewertung und keine gezählte oder gemessene Zahl, also qualitativ.",
   "Die Änderungshäufigkeit je Komponente lässt sich aus der Revisionshistorie zählen. Das ist eine gemessene Kennzahl und damit quantitativ.",
   "Fehlermeldungen je Komponente werden im Ticketsystem gezählt. Das ist eine messbare Kennzahl und damit quantitativ; sie zeigt Problemschwerpunkte.",
   "Bei der szenariobasierten Analyse wird im Workshop eingeschätzt, ob die Architektur das Szenario erfüllt. Messgrößen wie „unter 2 s“ ändern daran nichts: Es wird bewertet, nicht gemessen. Quantitativ wäre erst ein Lasttest.",
   "Fan-in und Fan-out zählen die ein- und ausgehenden Abhängigkeiten je Baustein. Das ist eine berechnete Kennzahl (Kopplungsmetrik) und damit quantitativ."
  ],
  "explanation": "Qualitativ sind Penetrationstests durch Fachleute, Interviews zu Schwachstellen und szenariobasierte Bewertungen; Letztere bleiben qualitativ, auch wenn die Szenarien Messgrößen wie „unter 2 s“ enthalten. Quantitativ sind gezählte oder gemessene Kennzahlen: Änderungsraten aus der Revisionshistorie, Fehlerzahlen aus dem Ticketsystem und Kopplungsgrade je Baustein. Falle: Zahlen im Szenario machen das Verfahren nicht quantitativ."
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
   "Bewertbar sind Ziele, die als Metrik vorliegen; qualitative Ziele nicht.",
   "Der Bewertungsumfang folgt aus den funktionalen Anforderungen.",
   "Erst Qualitätsziele legen die Technologien fest.",
   "Ohne Priorität fehlt der Fokus auf das Wichtigste."
  ],
  "correct": [
   0,
   4
  ],
  "optExpl": [
   "Richtig: Architekturentscheidungen lassen sich nur gegen Ziele bewerten. Ohne Qualitätsziele bleibt offen, was „gut“ bedeutet – ein Review könnte dann nur Meinungen sammeln, aber keine Risiken oder Abweichungen begründet feststellen.",
   "Falsch: Ziele müssen nicht als Metrik vorliegen, um bewertbar zu sein. Qualitative Verfahren wie szenariobasierte Bewertung arbeiten mit konkreten Szenarien und Experteneinschätzung statt mit Kennzahlen.",
   "Falsch: Funktionale Anforderungen sind wichtig, prägen eine Architektur aber weniger stark als Qualitätsziele. Maßstab einer Architekturbewertung sind vor allem die Qualitätsziele und die daraus abgeleiteten Szenarien.",
   "Falsch: Qualitätsziele beeinflussen Entscheidungen, schreiben aber keine Technologien vor – eine Technologie wäre bereits Teil der Lösung. Außerdem erklärt das nicht, warum ihr Fehlen speziell für das Review ein Problem ist.",
   "Richtig: Die Zeit für eine Bewertung ist begrenzt. Die Priorisierung lenkt sie auf die wichtigsten und riskantesten Qualitätsziele; ohne sie wird alles gleich behandelt, und Wesentliches geht im Detail unter."
  ],
  "explanation": "Priorisierte Qualitätsziele sind Maßstab und Fokus jeder Architekturbewertung. Fallen: Sie müssen nicht als Metriken vorliegen, funktionale Anforderungen ersetzen sie nicht als Maßstab, und sie legen keine Technologien fest."
 },
 {
  "id": "c5q16",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R1",
  "type": "multi",
  "q": "Wofür eignen sich Werkzeuge der statischen Code- und Architekturanalyse?",
  "options": [
   "Kopplungs- und Komplexitätsmetriken ermitteln.",
   "Zyklische Abhängigkeiten zwischen Bausteinen aufdecken.",
   "Nachweisen, dass Performanzziele erfüllt sind.",
   "Antwortzeiten unter Produktionslast messen.",
   "Verstöße gegen Schichtungsregeln finden.",
   "Unerwünschte Abhängigkeiten zu bestimmten Bibliotheken oder Frameworks erkennen.",
   "Die Kohäsion fachlich zuverlässig bewerten."
  ],
  "correct": [
   0,
   1,
   4,
   5
  ],
  "optExpl": [
   "Richtig: Kopplungs- und Komplexitätsmetriken wie Fan-in/Fan-out oder zyklomatische Komplexität lassen sich ohne Ausführung direkt aus dem Code berechnen. Sie liefern Hinweise auf problematische Stellen in der Struktur.",
   "Richtig: Zyklische Abhängigkeiten zwischen Bausteinen sind in der statischen Struktur sichtbar und lassen sich automatisch erkennen. Solche Zyklen erschweren Änderungen und Tests und sind ein typischer Befund statischer Analyse.",
   "Falsch: Performanz zeigt sich erst zur Laufzeit unter realer Last. Statische Analyse kann Hinweise geben, etwa auf ineffiziente Schleifen, aber die Erfüllung von Performanzzielen nicht nachweisen.",
   "Falsch: Antwortzeiten unter Produktionslast zu messen erfordert, das System auszuführen – also dynamische Analyse, Monitoring oder Lasttests. Statische Werkzeuge betrachten nur den Code.",
   "Richtig: Erlaubte und verbotene Abhängigkeiten lassen sich als Regeln hinterlegen und automatisch prüfen, z. B. „UI darf nicht direkt auf Persistenz zugreifen“. So werden Verstöße gegen die Schichtung früh sichtbar.",
   "Richtig: Abhängigkeiten lassen sich statisch aus dem Code ermitteln und gegen Regeln prüfen, etwa „Domänenlogik darf keine UI-Bibliothek verwenden“.",
   "Falsch: Werkzeuge liefern nur Näherungswerte für Kohäsion, etwa über gemeinsam genutzte Attribute. Ob Elemente fachlich zusammengehören, erfordert Domänenverständnis und kann kein Tool zuverlässig beurteilen."
  ],
  "explanation": "Statische Analyse prüft Code und Struktur ohne Ausführung: Kopplungs- und Komplexitätsmetriken, Schichtungsregeln und Zyklen. Fallen: Laufzeiteigenschaften wie Performanz oder Antwortzeiten lassen sich so weder messen noch nachweisen, und fachliche Kohäsion beurteilt kein Tool zuverlässig."
 },
 {
  "id": "c5q18",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R1",
  "type": "multi",
  "q": "Für eine Architekturbewertung steht nur ein halber Tag zur Verfügung; die Qualitätsziele des Systems sind bekannt und priorisiert. Welche Schwerpunkte sind am sinnvollsten?",
  "options": [
   "Auf die höchstpriorisierten Qualitätsziele und die dazu riskantesten Szenarien.",
   "Auf Bausteine mit auffälliger Änderungsrate oder Fehlerhäufung, soweit sie die priorisierten Qualitätsziele betreffen.",
   "Auf eine gleichmäßige Stichprobe über alle Bausteine.",
   "Auf die Bausteine mit den meisten bekannten Fehlern, unabhängig von den Qualitätszielen.",
   "Auf eine Durchsicht der gesamten Dokumentation auf Vollständigkeit.",
   "Auf die Qualitätsmerkmale, die sich mit vorhandenen Werkzeugen am schnellsten messen lassen."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Richtig: Bei knapper Zeit bewertet man dort, wo ein Verfehlen am meisten schadet: bei den höchstpriorisierten Qualitätszielen und den dazu riskantesten Szenarien. So liefert ein halber Tag die wertvollsten Erkenntnisse.",
   "Richtig: Fehlerhäufungen sind laut Curriculum eine Informationsquelle der Qualitätsanalyse, und auch die Änderungsrate gibt Hinweise auf Hotspots. Sie lenken die knappe Zeit gezielt, sofern sie die priorisierten Qualitätsziele betreffen; sie ergänzen die Ausrichtung an den Zielen, ersetzen sie aber nicht.",
   "Falsch: Eine gleichmäßige Stichprobe verteilt die knappe Zeit auch auf Unkritisches. Gezieltes Priorisieren nach Qualitätszielen und Risiken ist bei begrenzter Zeit deutlich wirksamer.",
   "Falsch: Fehlerhäufungen deuten auf Probleme im Code hin, etwa schlechte Testbarkeit. Verfolgt man sie unabhängig von den Qualitätszielen, bewertet man womöglich Unwichtiges – die Bewertung richtet sich nach den Zielen, nicht nach Fehlerzahlen.",
   "Falsch: Eine Vollständigkeitsprüfung der Dokumentation sagt wenig darüber, ob die wichtigsten Qualitätsziele erreicht werden, und kostet bei knapper Zeit viel Aufwand für wenig Erkenntnis.",
   "Falsch: Was sich leicht messen lässt, ist nicht zwingend das Wichtigste. Wer nach Messbarkeit statt nach Zielen und Risiken auswählt, prüft womöglich die falschen Qualitäten."
  ],
  "explanation": "Bei knapper Zeit priorisiert man die Bewertung nach den wichtigsten Qualitätszielen und den größten Risiken; Hotspots wie Fehlerhäufungen oder hohe Änderungsraten helfen dabei, soweit sie diese Ziele betreffen. Fallen: gleichmäßige Stichproben, Fehlerzahlen ohne Zielbezug, Vollständigkeitsprüfungen und die Auswahl nach reiner Messbarkeit."
 },
 {
  "id": "c5q19",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zur Bewertung einer Softwarearchitektur treffen zu?",
  "options": [
   "Sie ist auch ohne lauffähiges System möglich.",
   "Sie kann Testergebnisse, Metriken und Fehlerhäufungen als Informationsquellen heranziehen.",
   "Sie wird aussagekräftiger, wenn das Entwicklungsteam nicht beteiligt ist, weil es sonst befangen ist.",
   "Sie ist erst nach Abschluss der Implementierung sinnvoll, weil erst dann Messwerte vorliegen.",
   "Sie braucht priorisierte Qualitätsziele als Maßstab.",
   "Gegenstand ist der Quellcode; Dokumentation und Entwurfsmodelle zählen nicht dazu.",
   "Sie kann Messwerte und Experteneinschätzungen kombinieren.",
   "Ergebnisse unterschiedlicher Systeme lassen sich bei einheitlichem Prozess ohne Weiteres vergleichen."
  ],
  "correct": [
   0,
   1,
   4,
   6
  ],
  "optExpl": [
   "Richtig: Schon Entwürfe lassen sich, etwa szenariobasiert, gegen Qualitätsziele prüfen. Gerade dann sind Korrekturen noch günstig; ein lauffähiges System ist dafür nicht nötig.",
   "Richtig: Das Curriculum nennt unter anderem Testfälle und ihre Ergebnisse, Quelltextmetriken, Fehler und ihre Verteilung (Fehlercluster) als Informationsquellen der Qualitätsanalyse (R1).",
   "Falsch: Das Team kennt Entscheidungen, Annahmen und Schwachstellen am besten. Externe Bewerter:innen können den Blick schärfen, das Team auszuschließen nimmt der Bewertung aber wichtiges Wissen.",
   "Falsch: Messwerte sind eine mögliche Quelle, aber nicht die einzige. Szenariobasierte Bewertungen und Reviews funktionieren schon am Entwurf, wenn Korrekturen noch günstig sind.",
   "Richtig: Ohne Maßstab lässt sich nicht beurteilen, ob eine Architektur gut genug ist. Die priorisierten Qualitätsziele, oft als Szenarien konkretisiert, liefern diesen Maßstab.",
   "Falsch: Als Informationsquellen nennt das Curriculum auch Anforderungs- und Architekturdokumentation sowie Entwurfsmodelle, nicht nur den Quelltext. Bewertet wird die Architektur, nicht allein der Code.",
   "Richtig: Quantitative Daten wie Metriken, Logs oder Lasttests und qualitative Einschätzungen von Expert:innen ergänzen sich. Beides ist laut Curriculum Teil der Analyse.",
   "Falsch: Bewertet wird gegen die eigenen, priorisierten Qualitätsziele des Systems. Eine systemübergreifend vergleichbare Gesamtnote ist nicht das Ziel; Ergebnis sind Risiken, Trade-offs und Empfehlungen."
  ],
  "explanation": "Architekturbewertung misst gegen priorisierte Qualitätsziele, ist schon am Entwurf möglich, kombiniert Messwerte mit Experteneinschätzungen und nutzt vorhandene Informationsquellen wie Tests, Metriken und Fehlerhäufungen. Fallen: Sie braucht nicht erst eine fertige Implementierung, liefert keine vergleichbare Gesamtnote, und das Entwicklungsteam gehört dazu."
 },
 {
  "id": "c5q21",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R3",
  "extra": true,
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
   "Falsch: ATAM ist überwiegend qualitativ und liefert keine gewichteten Noten. Es zeigt Risiken und Abwägungen auf; über Abnahme oder weiteres Vorgehen entscheiden anschließend die Stakeholder selbst.",
   "Richtig: ATAM benennt Risiken, also problematische Architekturentscheidungen, und ausdrücklich auch Nicht-Risiken, also als tragfähig bestätigte Entscheidungen. Beide werden im Abschlussbericht dokumentiert.",
   "Richtig: Sensitivitäts- und Trade-off-Punkte entstehen, wenn Szenarien gegen die Entscheidungen durchgespielt werden. Sie zeigen, wo Qualitäten empfindlich reagieren oder gegeneinander abgewogen werden.",
   "Richtig: ATAM fasst zusammenhängende Einzelrisiken zu Risikothemen zusammen. Dadurch werden systematische Schwächen sichtbar, etwa fehlende Fehlertoleranz, die das Management gezielt adressieren kann.",
   "Richtig: Im Verlauf von ATAM wird ein Utility Tree erstellt, der Qualitätsziele über Szenarien konkretisiert und nach Wichtigkeit und Schwierigkeit priorisiert. Er ist zugleich Arbeitsgrundlage und dokumentiertes Ergebnis.",
   "Falsch: Kosten und Nutzen von Alternativen bewertet die Cost Benefit Analysis Method (CBAM), die auf ATAM aufsetzen kann. ATAM selbst bewertet die Architektur gegen ihre Qualitätsziele, nicht nach Kosten."
  ],
  "explanation": "ATAM (R3) liefert Utility Tree, Risiken, Nicht-Risiken, Sensitivitäts- und Trade-off-Punkte sowie Risikothemen. Fallen: Es ist qualitativ, liefert also keine Noten für eine Abnahme, und keine Kosten-Nutzen-Rangfolge von Alternativen – das wäre CBAM."
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
   "Die geplanten Qualitäten sind nicht mehr verlässlich zu erwarten.",
   "Die Abweichung ist unproblematisch, solange die Tests bestehen.",
   "Man spricht von Architekturerosion.",
   "Die Dokumentation an den Ist-Stand anzupassen beseitigt die Abweichung und damit das Problem.",
   "Abhängigkeitsanalysen machen die Abweichungen sichtbar.",
   "Die Konformität mit den Architekturentscheidungen sollte regelmäßig geprüft werden, z. B. durch Reviews oder Werkzeuge."
  ],
  "correct": [
   1,
   3,
   5,
   6
  ],
  "optExpl": [
   "Falsch: Veraltete Technik ist ein anderes Problem als Erosion. Erosion betrifft Struktur und Abhängigkeiten im Code, etwa verbotene Zugriffe zwischen Bausteinen – ein Framework-Update korrigiert davon nichts.",
   "Richtig: Die Qualitätseigenschaften wurden für die Soll-Struktur entworfen, etwa Austauschbarkeit durch klare Schichten. Weicht der Code davon ab, gilt diese Planung nicht mehr sicher, und Qualitätsziele können unbemerkt verfehlt werden.",
   "Falsch: Tests prüfen Verhalten, nicht die Einhaltung der Struktur. Eine erodierte Architektur kann alle Tests bestehen und trotzdem Qualitäten wie Änderbarkeit oder Austauschbarkeit untergraben.",
   "Richtig: Das schleichende Auseinanderlaufen von Soll- und Ist-Architektur heißt Architekturerosion. Ohne bewusstes Gegensteuern, etwa durch Refactoring, nimmt sie mit der Zeit zu.",
   "Falsch: Damit verschwindet nur die sichtbare Abweichung, nicht das eigentliche Problem. Ob die Ist-Struktur die Qualitätsziele noch trägt, ist damit nicht geklärt – man legitimiert die Erosion lediglich nachträglich.",
   "Richtig: Toolgestützte Abhängigkeitsanalysen zeigen, wo der Code verbotene Abhängigkeiten enthält, etwa Aufrufe an der Schichtung vorbei. Laut Curriculum sind sie ein Mittel der Konformitätsprüfung.",
   "Richtig: Konformität mit Architekturentscheidungen zu bewerten ist ein eigenes Lernziel. Regelmäßige Prüfungen, manuell im Review oder toolgestützt, machen Erosion früh sichtbar."
  ],
  "explanation": "Die zunehmende Soll-Ist-Abweichung ist Architekturerosion; sie gefährdet die geplanten Qualitäten und wird per Konformitätsprüfung, etwa Abhängigkeitsanalyse, sichtbar. Fallen: Doku-Anpassung oder Framework-Updates beheben sie nicht, und bestehende Tests sagen nichts über die Struktur."
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
   "Falsch: Eine in sich stimmige Dokumentation ist wünschenswert, aber das prüft ein Dokumentations-Review. Die Konformitätsanalyse vergleicht die Implementierung mit dem Entwurf.",
   "Falsch: Das ist der Zweck einer qualitativen Analyse, etwa szenariobasiert. Konformität fragt dagegen nach der Übereinstimmung von Code und beabsichtigter Architektur.",
   "Falsch: Das ist eine Prüfung der Anforderungen selbst, gehört also zur Anforderungsklärung. Mit der Übereinstimmung von Implementierung und Architektur hat sie nichts zu tun.",
   "Richtig: Die Konformitätsanalyse vergleicht umgesetzte und beabsichtigte Architektur samt getroffenen Entscheidungen, oft toolgestützt über Abhängigkeitsregeln. So deckt sie Erosion nach zwei Jahren Entwicklung auf."
  ],
  "explanation": "Eine Konformitätsanalyse prüft, ob die Implementierung mit Architekturentwurf und Entscheidungen übereinstimmt, und deckt so Erosion auf. Fallen: Ob der Entwurf die Qualitätsziele trägt, ob Anforderungen vollständig sind oder die Doku widerspruchsfrei ist, sind andere Prüffragen."
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
   "Falsch: Namenskonventionen machen Schichten im Code erkennbar und erleichtern die Orientierung. Sie weisen aber nicht nach, dass keine verbotenen Zugriffe existieren – ein falscher Import fällt dadurch nicht auf.",
   "Falsch: Code-Reviews sind eine im Curriculum genannte Methode, finden als Stichprobe aber nicht zuverlässig jede verbotene Abhängigkeit. Sie eignen sich eher für Fragen, die Werkzeuge nicht beantworten können.",
   "Falsch: Monitoring sieht nur die Pfade, die im Betrieb tatsächlich durchlaufen werden. Selten genutzte Verstöße, etwa in Fehlerbehandlungen, bleiben unentdeckt, und Verstöße fallen erst nach dem Deployment auf.",
   "Richtig: Werkzeuge wie ArchUnit oder jQAssistant prüfen alle tatsächlichen Abhängigkeiten im Code automatisiert gegen die definierten Schichtregeln. Das ist vollständig, wiederholbar und lässt sich in die Build-Pipeline integrieren."
  ],
  "explanation": "Schichtregeln prüft man am zuverlässigsten mit statischer Abhängigkeitsanalyse gegen definierte Regeln, idealerweise automatisiert im Build. Fallen: Monitoring sieht nur durchlaufene Pfade, stichprobenartige Reviews sind lückenhaft, und Namenskonventionen sind kein Nachweis."
 },
 {
  "id": "c6q2",
  "chapter": 6,
  "lz": "LZ 06-02",
  "r": "R3",
  "extra": true,
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
   "Richtig: LZ 06-02 zielt auf die technische Umsetzung: An einem Beispiel soll man Implementierung, technische Konzepte, eingesetzte Produkte und Lösungsstrategien nachvollziehen können – etwa wie Logging oder Sicherheit konkret umgesetzt sind.",
   "Falsch: Die Lösung im Beispiel gilt für dessen Kontext mit seinen Qualitätszielen und Randbedingungen. Unter anderen Bedingungen kann eine ganz andere Lösung sinnvoll sein – ein Beispiel ist keine allgemeingültige Referenzarchitektur.",
   "Richtig: Das ist der Kern von LZ 06-01: nachvollziehen, wie Qualitätsziele und Randbedingungen zu Entscheidungen führen und warum die Architektur so aussieht, wie sie aussieht. Genau das ist der rote Faden von den Anforderungen zur Lösung.",
   "Richtig: Verworfene Alternativen samt Gründen machen nachvollziehbar, warum gerade diese Lösung gewählt wurde. Ohne sie bliebe unklar, ob die Entscheidung bewusst getroffen oder nur übernommen wurde.",
   "Falsch: Produkte im Beispiel zeigen eine konkrete Umsetzung in einem bestimmten Kontext. Eine Marktübersicht oder Technologieempfehlung ist nicht das Lernziel und würde schnell veralten."
  ],
  "explanation": "Ein durchgängiges Beispiel zeigt, wie Qualitätsziele und Randbedingungen Entscheidungen prägen, wie diese technisch umgesetzt sind und welche Alternativen verworfen wurden (LZ 06-01/06-02, R3). Fallen: Es liefert weder eine allgemeingültige Referenz noch eine Marktübersicht."
 },
 {
  "id": "c6q4",
  "chapter": 6,
  "lz": "LZ 06-02",
  "r": "R3",
  "extra": true,
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
   "Falsch: Verschiedene Lösungen für ähnliche Anforderungen sind normal und meist durch unterschiedliche Randbedingungen, Qualitätsziele oder Teamsituationen begründet. Sie deuten nicht auf einen Fehler hin.",
   "Falsch: Beispiele zeigen Ansätze samt ihren Grenzen, nehmen künftige Entscheidungen aber nicht vorweg. Eine allgemeingültige Musterlösung gibt es nicht, weil jeder Kontext anders ist.",
   "Richtig: Dieselbe Anforderung kann unter anderen Randbedingungen anders sinnvoll gelöst werden. Der Vergleich zeigt, dass Architektur kontextabhängig ist und Entscheidungen begründet werden müssen.",
   "Falsch: Ohne gemeinsamen Kontext gibt es keine objektiv überlegene Lösung. Jede Lösung ist an ihren eigenen Randbedingungen und Qualitätszielen zu messen, nicht an einem absoluten Maßstab."
  ],
  "explanation": "Der Lerngewinn aus Beispielen liegt darin, dass Architekturentscheidungen von Kontext und Randbedingungen abhängen. Fallen: Es gibt weder eine objektiv beste noch eine allgemeingültige Lösung, und unterschiedliche Lösungen sind kein Hinweis auf Entwurfsfehler."
 },
 {
  "id": "c6q5",
  "chapter": 6,
  "lz": "LZ 06-01",
  "r": "R3",
  "extra": true,
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
   "Falsch: Muster haben Grenzen und Einsatzbedingungen. Gerade der Vergleich mehrerer Beispiele zeigt, dass ihre Eignung vom Kontext abhängt – ein Muster, das überall passt, gibt es nicht.",
   "Falsch: Auch in derselben Domäne können Qualitätsziele, Last oder Randbedingungen stark abweichen. Bewährte Lösungen sind deshalb anzupassen, nicht unverändert zu kopieren.",
   "Richtig: Der Vergleich schärft den Blick dafür, warum eine Entscheidung in ihrem Kontext sinnvoll war. So lernt man, welche Randbedingungen und Qualitätsziele eine Lösung tragen – übertragbar auf eigene Systeme.",
   "Richtig: Wer viele Lösungen gesehen hat, kann Ansätze leichter auf neue Probleme übertragen. Das eigene Repertoire wächst und erleichtert es, Alternativen zu erkennen und abzuwägen.",
   "Falsch: Die Beispiele enthalten zwar konkrete Produkte, zielen aber auf den Zusammenhang von Anforderungen und Lösung. Eine Marktübersicht über Technologiestacks ist nicht ihr Zweck und veraltet zudem schnell."
  ],
  "explanation": "Mehrere Architekturbeispiele erweitern das Lösungsrepertoire und schärfen den Blick für die Randbedingungen, die Entscheidungen begründen. Fallen: Sie liefern weder Kopiervorlagen, auch nicht in derselben Domäne, noch kontextfreie Muster oder Marktübersichten."
 },
 {
  "id": "c6q6",
  "chapter": 6,
  "lz": "LZ 06-02",
  "r": "R3",
  "extra": true,
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
   "Richtig: Der begründete Kompromiss zwischen konkurrierenden Qualitätszielen ist der Kern einer Architekturentscheidung. Dokumentierte Nachteile zeigen, was bewusst in Kauf genommen wurde, und machen die Abwägung lernbar.",
   "Falsch: Nahezu jede Entscheidung hat Nachteile. Ihr Vorhandensein beweist nicht, dass eine bessere, nachteilsfreie Alternative übersehen wurde; meist gibt es eine solche gar nicht.",
   "Falsch: Dokumentierte Nachteile machen die Abwägung nachvollziehbar und helfen bei späteren Entscheidungen, etwa wenn sich Prioritäten ändern. Absicherung ist nicht ihr vorrangiger Zweck.",
   "Falsch: Trade-offs lassen sich nicht wegoptimieren. Wer jeden Nachteil beseitigen will, verschiebt ihn meist nur an eine andere Stelle oder erhöht die Komplexität."
  ],
  "explanation": "Offen dokumentierte Nachteile sind lehrreich, weil Architektur konkurrierende Qualitätsziele bewusst abwägt und der begründete Kompromiss den Kern der Entscheidung bildet. Fallen: Nachteile sind kein Beweis für eine übersehene bessere Lösung und lassen sich nicht wegoptimieren."
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
    "text": "Jedes Team wählt sein eigenes Format, solange es in sich konsistent ist.",
    "cat": 1
   }
  ],
  "rowExpl": [
   "Das Management braucht andere Inhalte als Entwickler:innen. Eine bloß gekürzte Entwicklerdokumentation passt nicht zur Zielgruppe, deshalb ist das Vorgehen nicht sinnvoll.",
   "Ein gemeinsames Template wie arc42 gibt allen Teams dieselbe Struktur. Das erleichtert das Wiederfinden und macht die Doku des Gesamtsystems einheitlich, also sinnvoll.",
   "Beiträge mehrerer Teams werden stilistisch und inhaltlich harmonisiert, damit die Gesamtdokumentation einheitlich wirkt. Das ist sinnvoll, weil sonst Brüche entstehen.",
   "Mündliche Abstimmung und Dokumentation ergänzen sich, das eine ersetzt das andere nicht. Ohne übergreifende Doku fehlt die nachlesbare Grundlage, deshalb nicht sinnvoll.",
   "Eigene Formate je Team erschweren das Wiederfinden, auch wenn jedes für sich konsistent ist. Für ein gemeinsames System ist das deshalb nicht sinnvoll."
  ],
  "explanation": "Sinnvoll: gemeinsames Template wie arc42 und das Harmonisieren der Beiträge der Teams. Nicht sinnvoll: gekürzte Entwicklerdoku fürs Management (es braucht andere Inhalte), mündliche Abstimmung statt Doku (beides ergänzt sich) und eigene Formate je Team (erschwert Wiederfinden)."
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
    "text": "Sie trägt zum Erreichen von Qualitäten wie Energieeffizienz bei.",
    "cat": 0
   },
   {
    "text": "Ihr Hauptnutzen liegt in geringeren Kosten der Erstentwicklung.",
    "cat": 1
   }
  ],
  "rowExpl": [
   "Architektur bleibt iterativ, auch ein sorgfältiger Entwurf wird weiterentwickelt und überprüft. Deshalb macht er spätere Iterationen nicht überflüssig.",
   "Ein Nutzen von Architektur ist gemeinsames Verständnis: Strukturen und Konzepte werden für relevante Stakeholder nachvollziehbar. Die Aussage trifft deshalb zu.",
   "Den Funktionsumfang legen die Stakeholder fest, nicht die Architektur. Sie schafft die Struktur, in der die Features umgesetzt werden, und bestimmt sie nicht.",
   "Architektur trägt zum Erreichen von Qualitäten bei, etwa Energieeffizienz, weil Strukturentscheidungen sie wesentlich beeinflussen. Die Aussage trifft deshalb zu.",
   "Architekturarbeit kostet zunächst Aufwand, ihr Nutzen liegt nicht primär in billigerer Erstentwicklung. Die Aussage trifft deshalb nicht zu."
  ],
  "explanation": "Zutreffend: Architektur schafft Verständnis bei Stakeholdern und trägt zu Qualitäten wie Energieeffizienz bei. Nicht zutreffend: Architektur bleibt iterativ, auch ein sorgfältiger Entwurf wird weiterentwickelt; den Funktionsumfang legen die Stakeholder fest; und Architekturarbeit kostet zunächst Aufwand – ihr Nutzen liegt nicht primär in billigerer Erstentwicklung."
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
   }
  ],
  "rowExpl": [
   "Die vorhandene Oracle-Datenbank ist eine technische Vorgabe, die den Lösungsraum einschränkt. Sie beschreibt keine gewünschte Funktion oder Qualität, also eine Randbedingung.",
   "Die Freigabe durch das Change Advisory Board ist eine organisatorische Vorgabe für jede Produktivsetzung. Sie wird dem Projekt vorgegeben und ist keine Leistung des Systems, daher eine Randbedingung.",
   "Fehlende Cloud-Erfahrung im Team ist ein organisatorischer Umstand, der Lösungen einschränkt. Er ist vorgegeben und keine gewünschte Eigenschaft, also eine Randbedingung.",
   "Der PDF-Export ist eine Funktion, die Nutzer:innen nutzen können, also eine funktionale Anforderung. Eine Vorgabe von außen ist das nicht, daher zählt es zu den Anforderungen.",
   "Die Antwortzeit im 95. Perzentil beschreibt, wie gut das System arbeitet, und ist eine Qualitätsanforderung. Die konkrete Zahl macht sie nicht zur Randbedingung."
  ],
  "explanation": "Vorhandene Oracle-Datenbank (technisch), CAB-Freigabe und fehlende Cloud-Erfahrung (organisatorisch) sind Randbedingungen. PDF-Export ist eine funktionale Anforderung, die Antwortzeit im 95. Perzentil eine Qualitätsanforderung. Falle: Eine konkrete Zahl macht eine Qualitätsanforderung nicht zur Randbedingung."
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
    "text": "Kunden können eine Buchung stornieren und erhalten eine Bestätigung.",
    "cat": 0
   }
  ],
  "rowExpl": [
   "Dass ein Anbieterwechsel höchstens ein Modul betrifft, beschreibt, wie gut sich das System ändern lässt (Änderbarkeit). Es geht um das WIE GUT, nicht um eine Funktion.",
   "Rollen anlegen und Rechte zuweisen ist eine angebotene Funktion, also das WAS. Sie beschreibt keine Güte wie Verfügbarkeit oder Änderbarkeit und ist deshalb funktional.",
   "Die Verfügbarkeit von 99,9 % im Monatsmittel beschreibt, wie gut das System läuft, und ist keine Funktion. Deshalb eine Qualitätsanforderung.",
   "Die Lauffähigkeit unter Android und iOS ohne Anpassung beschreibt Portabilität und damit das WIE GUT. Eine eigene Funktion für Nutzer:innen ist es nicht.",
   "Eine Buchung stornieren und eine Bestätigung erhalten ist eine angebotene Funktion, also das WAS. Eine Qualitätsanforderung beschriebe dagegen, wie gut das System das tut."
  ],
  "explanation": "Rechteverwaltung und Stornierung sind angebotene Funktionen, also WAS das System tut. Begrenzte Auswirkung eines Anbieterwechsels (Änderbarkeit), 99,9 % Verfügbarkeit und Lauffähigkeit auf Android und iOS (Portabilität) beschreiben, WIE GUT das System ist."
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
  "rowExpl": [
   "Gelockerte Schichtung erlaubt Zugriffe auch auf tiefere, nicht direkt darunterliegende Schichten. Die Aussage stimmt, nur bei strenger Schichtung wäre sie falsch.",
   "Ein Compiler verarbeitet den Quelltext in aufeinanderfolgenden Phasen, die über Datenströme verbunden sind. Das ist ein klassisches Beispiel für Pipes & Filter, die Aussage ist richtig.",
   "Microservices haben üblicherweise eigene Datenhaltung statt einer gemeinsamen Datenbank. Gemeinsame Datenbank würde sie eng koppeln, deshalb ist die Aussage falsch.",
   "Microservices werden fachlich geschnitten, nicht nach technischen Schichten. Ein Schnitt nach Schichten widerspricht diesem Ansatz, daher ist die Aussage falsch.",
   "Viele eigenständige Dienste müssen betrieben, überwacht und ausgeliefert werden. Das erhöht gegenüber einem Monolithen meist Betriebskomplexität und -kosten, die Aussage stimmt.",
   "Auch ein Monolith kann intern sauber modular in Bausteine gegliedert sein. Die Aussage ist deshalb falsch; „Monolith“ heißt nicht „unstrukturiert“."
  ],
  "explanation": "Gelockerte Schichtung erlaubt Zugriffe auch auf tiefere Schichten, und Compiler-Phasen sind ein klassisches Pipes-and-Filters-Beispiel. Microservices sind fachlich geschnitten, haben eigene Datenhaltung statt gemeinsamer Datenbank und erhöhen die Betriebskomplexität. Falle: Auch ein Monolith kann intern sauber modular gegliedert sein."
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
    "text": "Die Sortierung der Produktliste nach Preis.",
    "cat": 1
   },
   {
    "text": "Wie Bausteine miteinander kommunizieren, etwa Formate und Protokolle.",
    "cat": 0
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
  "rowExpl": [
   "Die Sortierung der Produktliste nach Preis ist eine lokale Aufgabe eines einzelnen Bausteins. Dass das Ergebnis an vielen Stellen sichtbar ist, macht sie nicht zum Querschnittsthema.",
   "Kommunikation mit Formaten und Protokollen betrifft alle Bausteine, die miteinander sprechen. Sie braucht einheitliche Regeln und ist deshalb ein Querschnittsthema.",
   "Das Zusammenspiel von Sicherheit, Fehlermeldungen und Logging betrifft viele Bausteine und braucht einheitliche Regeln. Es ist damit ein Querschnittsthema und keine lokale Einzelaufgabe.",
   "Persistenz fachlicher Objekte betrifft viele Bausteine, die Daten speichern und laden, und braucht einheitliche Regeln. Sie ist deshalb ein Querschnittsthema und keine lokale Einzelaufgabe."
  ],
  "explanation": "Querschnittsthemen sind Kommunikation mit Formaten und Protokollen, Persistenz fachlicher Objekte und das Zusammenspiel von Sicherheit, Fehlermeldungen und Logging – sie betreffen viele Bausteine. Die Sortierung der Produktliste nach Preis ist eine lokale Aufgabe eines einzelnen Bausteins. Falle: Sichtbarkeit an vielen Stellen macht nichts zum Querschnitt."
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
  "rowExpl": [
   "Eine Architektur wirkt erst, wenn sie den Code prägt. Aus ihr abgeleitete Konsequenzen wie Paketstruktur und Aufrufregeln machen sie im Quellcode umsetzbar und prüfbar, das ist sinnvoll.",
   "Die Blackbox-Beschreibung hält die Sicht schlank und beschränkt sich auf Zweck und Schnittstelle. Nur bei Bedarf wird der Baustein als Whitebox geöffnet, das ist sinnvoll.",
   "Qualitätsanforderungen treiben die Technologieauswahl. Wer die Technologie vorher festlegt, entscheidet ohne Grundlage und riskiert Anforderungen zu verfehlen, daher nicht sinnvoll.",
   "Die Trennung von Fachlogik und Technik hält die fachlichen Bausteine unabhängig von technischen Änderungen und erleichtert Verständnis und Änderung. Das ist sinnvoll.",
   "Verfeinert wird nur dort, wo es nötig ist. Alles sofort bis zur untersten Ebene als Whitebox auszuarbeiten kostet Aufwand ohne Nutzen und ist deshalb nicht sinnvoll.",
   "Risiken von Entscheidungen früh zu erkennen erlaubt, rechtzeitig gegenzusteuern, solange Änderungen noch günstig sind. Das ist sinnvoll."
  ],
  "explanation": "Sinnvoll sind: Konsequenzen für den Code wie Paketstruktur und Aufrufregeln ableiten, Bausteine erst als Blackbox beschreiben und bei Bedarf öffnen, Fachlogik und Technik trennen sowie Risiken früh identifizieren. Nicht sinnvoll: Technologie festlegen, bevor die Qualitätsanforderungen geklärt sind, denn diese treiben die Auswahl. Falle: Verfeinert wird nur bei Bedarf, nicht flächendeckend bis zur untersten Ebene als Whitebox."
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
    "text": "Der Status, z. B. vorgeschlagen, akzeptiert oder abgelöst.",
    "cat": 0
   },
   {
    "text": "Eine laufend aktualisierte Gesamtbeschreibung der Architektur.",
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
  "rowExpl": [
   "Der Status (z. B. vorgeschlagen, akzeptiert oder abgelöst) gehört zu einem ADR nach Nygard. Er zeigt, ob eine Entscheidung gilt.",
   "Eine laufend aktualisierte Gesamtbeschreibung ist Aufgabe der Architekturdokumentation. Ein ADR hält dagegen eine einzelne Entscheidung fest, deshalb gehört das nicht hinein.",
   "Eine geänderte Entscheidung bekommt ein neues ADR, das das alte ablöst. Sie nachträglich in den ursprünglichen Text einzuarbeiten, würde die Historie verfälschen; es gehört nicht hinein.",
   "Der Kontext erklärt, warum die Entscheidung überhaupt nötig wurde. Er ist fester Bestandteil eines ADR nach Nygard und macht die Entscheidung nachvollziehbar."
  ],
  "explanation": "Ins ADR nach Nygard gehören der Kontext und der Status (vorgeschlagen, akzeptiert, abgelöst). Nicht hinein: eine laufend gepflegte Gesamtbeschreibung (dafür gibt es die Architekturdoku) und nachträglich eingearbeitete Änderungen – eine geänderte Entscheidung bekommt ein neues ADR, das das alte ablöst."
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
  "rowExpl": [
   "Die Umfrage erfasst Meinungen der Nutzer:innen zur Bedienbarkeit. Auch wenn die Antworten als Zahlen von 1 bis 5 vorliegen, misst sie nicht das System, deshalb ist sie qualitativ und nicht quantitativ.",
   "Lines of Code und zyklomatische Komplexität sind Metriken, die sich am Code direkt messen lassen. Es sind Messwerte statt Einschätzungen, deshalb ist die Methode quantitativ.",
   "Antwortzeiten unter Last sind konkrete Messwerte des Systems. Es wird gemessen und nicht eingeschätzt, daher ist die Methode quantitativ.",
   "Das Expertengespräch liefert Einschätzungen zu Risiken statt Messwerte. Es beruht auf Erfahrung und Urteil, deshalb ist die Methode qualitativ.",
   "Zyklische Abhängigkeiten lassen sich per Werkzeug zählen und ergeben eine Kennzahl. Das ist eine Messung und keine Einschätzung, deshalb ist die Methode quantitativ."
  ],
  "explanation": "Quantitativ sind Messungen und Metriken: Antwortzeiten unter Last, Lines of Code und zyklomatische Komplexität sowie gezählte zyklische Abhängigkeiten. Qualitativ sind Einschätzungen wie das Expertengespräch zu Risiken. Falle: Die Nutzerumfrage bleibt qualitativ, auch wenn die Antworten als Zahlen auf einer Skala von 1 bis 5 erfasst werden – sie misst Meinungen, nicht das System."
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
  "rowExpl": [
   "Die statische Analyse vergleicht die tatsächlichen Abhängigkeiten im Code mit den Schichtregeln. So werden Verstöße gegen die Architekturentscheidungen sichtbar, deshalb deckt sie Abweichungen auf.",
   "Lasttests prüfen Verhalten und Performance des Gesamtsystems, nicht die Struktur. Sie können bestehen, obwohl verbotene Abhängigkeiten existieren, deshalb sind sie dafür ungeeignet.",
   "Eine höhere Unit-Test-Abdeckung zeigt, wie viel Code getestet wird, nicht ob er die Architekturentscheidungen einhält. Tests können grün sein trotz verbotener Abhängigkeiten, deshalb ist sie dafür ungeeignet.",
   "Akzeptanztests prüfen, ob die Fachlichkeit erfüllt ist, nicht die Konformität zur Architektur. Sie bleiben bei Strukturverstößen oft grün, deshalb sind sie dafür ungeeignet.",
   "Im Code-Review lässt sich gezielt prüfen, ob die in ADRs festgehaltenen Entscheidungen umgesetzt wurden. Abweichungen fallen so auf, deshalb deckt der Ansatz sie auf.",
   "Ein Architekturtest im Build prüft automatisch Regeln wie erlaubte Paketzugriffe und meldet Verstöße. Er gleicht Implementierung und Entscheidungen laufend ab, deshalb deckt er Abweichungen auf."
  ],
  "explanation": "Statische Abhängigkeitsanalyse gegen Schichtregeln, Architekturtests im Build und Code-Reviews gegen ADR-Entscheidungen decken Abweichungen auf. Lasttests, höhere Unit-Test-Abdeckung und Akzeptanztests prüfen Verhalten und Qualität, nicht die Konformität – sie können grün sein, obwohl verbotene Abhängigkeiten bestehen."
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
  "rowExpl": [
   "Eine Schnittstelle, die schwer falsch zu benutzen ist, verhindert Fehler der Nutzer schon beim Entwurf. Das ist gerade bei externen Partnern wünschenswert.",
   "Wer interne Datenstrukturen 1:1 abbildet, wirkt flexibel, koppelt Nutzer aber an die Implementierung. Jede interne Änderung schlägt dann nach außen durch, deshalb nicht wünschenswert.",
   "Aus Sicht der nutzenden Bausteine müssen alle benötigten Funktionen verfügbar sein, sonst weichen Nutzer auf Umwege aus. Funktionale Vollständigkeit ist daher wünschenswert.",
   "Externe Partner können nicht kurzfristig angepasst werden und verlassen sich auf die Schnittstelle. Sie braucht daher mehr Stabilität, Formalität und Versionierung als eine interne. Das ist wünschenswert.",
   "Eine Änderung ohne neue Version bricht bestehende Partner, denn diese können sich nicht auf einen festen Vertrag verlassen. Das ist nicht wünschenswert; Änderungen gehören versioniert.",
   "Wenn sich die Schnittstelle erweitern lässt, ohne dass bestehende Nutzer angepasst werden müssen, bleibt sie für Partner stabil und trotzdem weiterentwickelbar. Das ist wünschenswert."
  ],
  "explanation": "Wünschenswert sind Schnittstellen, die schwer falsch zu benutzen, funktional vollständig und leicht erweiterbar sind; externe Schnittstellen brauchen zusätzlich mehr Stabilität, Formalität und Versionierung. Fallen: 1:1 abgebildete Interna wirken flexibel, koppeln Nutzer aber an die Implementierung, und Änderungen ohne neue Version brechen Partner."
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
   "Falsch: Kohäsion betrifft den Zusammenhalt innerhalb eines Moduls, Kopplung die Abhängigkeiten zwischen Modulen. Enge Kopplung zwischen zwei Modulen deutet eher auf einen schlechten Schnitt hin, bei dem Zusammengehöriges getrennt wurde.",
   "Falsch: Eng gekoppelte Module erfordern ständige Abstimmung zwischen den Teams, weil Änderungen des einen das andere betreffen. Parallele Arbeit wird dadurch schwerer, nicht leichter (vgl. Conway’s Law).",
   "Richtig: Jede Abhängigkeit ist ein Weg, über den sich Änderungen ausbreiten. Ändert sich etwa die Kundenstruktur, muss bei enger Kopplung auch das Rechnungsmodul angepasst werden – das senkt die Änderbarkeit.",
   "Richtig: Für einen Test des einen Moduls müssen viele Abhängigkeiten des anderen ersetzt oder mitgestartet werden. Isoliertes Testen wird dadurch aufwendig, und Tests werden langsamer und fragiler.",
   "Falsch: Kopplung ist vor allem ein Wartbarkeitsthema. Ein Performanceverlust folgt daraus nicht zwangsläufig; lokal eng gekoppelte Aufrufe können sogar schneller sein als lose gekoppelte über ein Netzwerk."
  ],
  "explanation": "Enge Kopplung breitet Änderungen über Modulgrenzen aus und erschwert isoliertes Testen sowie parallele Arbeit von Teams. Fallen: Kopplung mit Kohäsion verwechseln oder pauschal Performancefolgen annehmen – Kopplung betrifft vor allem die Wartbarkeit."
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
   "Die Testbarkeit verbessert sich, weil Tests interne Zustände direkt prüfen können.",
   "Die Laufzeit-Performance sinkt durch die direkten Zugriffe.",
   "Nutzer binden sich an Details, die nie zugesichert wurden."
  ],
  "correct": [
   1,
   2,
   5
  ],
  "optExpl": [
   "Falsch: Direkter Zugriff auf Interna erhöht die Kopplung: Weniger Indirektion heißt hier mehr Abhängigkeit von Details. Nutzer sparen zwar Umwege, hängen dafür aber an allem, was offenliegt.",
   "Richtig: Weil viele Nutzer an Interna hängen, bleibt eine Änderung nicht mehr lokal. Wird z. B. eine Datenstruktur umgebaut, müssen alle Bausteine angepasst werden, die direkt darauf zugreifen.",
   "Richtig: Nutzer hängen von Details ab, die bei einem Austausch der Implementierung wegfallen würden. Ein Austausch erfordert dann Änderungen bei allen Nutzern statt nur hinter einer stabilen Schnittstelle.",
   "Falsch: Tests, die interne Zustände direkt prüfen, binden sich an Details und brechen bei jeder Änderung der Implementierung. Information Hiding fördert die Testbarkeit über stabile Schnittstellen.",
   "Falsch: Wenn überhaupt, sind direkte Zugriffe eher schneller, weil Indirektionen entfallen. Das Problem fehlenden Information Hidings ist die Änderbarkeit, nicht die Laufzeit-Performance.",
   "Richtig: Was offenliegt, wird genutzt – auch ohne Vertrag (vgl. Hyrum's Law). Nutzer verlassen sich auf nie zugesicherte Details, und spätere Änderungen daran brechen diese Nutzer."
  ],
  "explanation": "Ohne Information Hiding steigt die Kopplung: Nutzer binden sich an nicht zugesicherte Details, Änderungen bleiben nicht lokal und Implementierungen sind schwer austauschbar. Fallen: Direkter Zugriff verbessert die Testbarkeit nicht nachhaltig, und die Performance ist nicht das eigentliche Problem."
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
   "Falsch: Wer nur die Datumsformatierung braucht, holt PDF-Export und Rabattlogik samt deren Abhängigkeiten mit ins Haus. Viele Funktionen in einem Baustein machen Wiederverwendung daher schwerer, nicht leichter.",
   "Richtig: Jeder Belang hat eigene Änderungsgründe: neues Datumsformat, neue PDF-Bibliothek, geänderte Rabattregeln. Jede dieser Änderungen trifft den ganzen Baustein und alle, die ihn nutzen – ein Verstoß gegen das Single-Responsibility-Prinzip.",
   "Falsch: Dass vieles an einer Stelle liegt, wirkt lokal übersichtlich, doch die Zahl ein- und ausgehender Abhängigkeiten steigt. Viele Bausteine hängen vom Utils-Baustein ab, und er selbst hängt von vielen Bibliotheken ab.",
   "Falsch: Eher umgekehrt: Jeder Belang bringt eigene ausgehende Abhängigkeiten mit, etwa eine PDF-Bibliothek oder das Preismodell. Ein unzusammenhängender Baustein sammelt so die Abhängigkeiten aller seiner Teile.",
   "Richtig: Ohne klaren Zweck muss man viele unzusammenhängende Teile durchdringen, um den Baustein zu verstehen. Tests brauchen entsprechend viele verschiedene Ausgangssituationen und Testdaten."
  ],
  "explanation": "Geringe Kohäsion bedeutet mehrere unabhängige Änderungsgründe, schlechtere Verständlichkeit und Testbarkeit sowie mehr statt weniger Abhängigkeiten. Falle: „Viele Funktionen an einer Stelle = gut wiederverwendbar und lose gekoppelt“ – das Gegenteil ist der Fall."
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
   "Falsch: LSP betrifft die verhaltenskonforme Ersetzbarkeit von Subtypen und hat mit SQL im UI nichts zu tun. Vermischte Belange wie Darstellung und Persistenz verletzen das Prinzip der Trennung der Belange (Separation of Concerns).",
   "Falsch: Die Folgen bleiben nicht lokal: Das Datenbankschema ist nun direkt mit der Oberfläche gekoppelt. Schemaänderungen strahlen auf die UI aus und UI-Änderungen können Datenzugriffe brechen.",
   "Falsch: Ein möglicher kleiner Performancegewinn durch weniger Indirektion wiegt die schlechtere Änderbarkeit und Testbarkeit selten auf. Zudem lässt sich Performanz meist auch mit sauberer Trennung erreichen.",
   "Richtig: Weil Persistenz und UI vermischt sind, zieht ein Technikwechsel, etwa ein anderes Datenbanksystem oder SQL-Dialekt, Änderungen in der Oberfläche nach sich. Mit getrennter Datenzugriffsschicht bliebe er lokal.",
   "Richtig: Fach- und Persistenzlogik lassen sich nicht getrennt von der Oberfläche prüfen. Tests müssen über die UI laufen, was sie langsam, fragil und aufwendig macht."
  ],
  "explanation": "Vermischte Belange koppeln Persistenz und Oberfläche: Ein Datenbankwechsel trifft auch die UI, und die Logik ist ohne UI kaum testbar. Fallen: Die Folgen auf einen Baustein begrenzt sehen, einen Performancegewinn als Rechtfertigung nehmen oder fälschlich LSP statt Separation of Concerns nennen."
 },
 {
  "id": "c3q71",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R3",
  "extra": true,
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
   "Falsch: Gerade nicht: Die Kopien hängen im Code nicht voneinander ab, daher zeigt eine statische Abhängigkeitsanalyse nichts. Die Kopplung ist logisch und damit versteckt.",
   "Falsch: DRY bezieht sich auf jedes duplizierte Wissen, nicht nur auf Logik. Auch doppelt gepflegte Konstanten oder Konfigurationswerte laufen auseinander, wenn nur eine Stelle angepasst wird.",
   "Richtig: Werden Kopien unabhängig geändert, verhalten sie sich irgendwann unterschiedlich – etwa wenn ein Rabatt an zwei Stellen verschieden berechnet wird. Solche Inkonsistenzen sind schwer zu finden.",
   "Richtig: DRY bezieht sich auf Wissen, nicht auf Textgleichheit. Zufällig gleicher Code, der fachlich Verschiedenes bedeutet, würde durch Zusammenlegen erst gekoppelt und könnte sich nicht mehr unabhängig entwickeln.",
   "Richtig: Die Kopien sind über das gemeinsame Wissen verbunden, auch wenn im Code keine Abhängigkeit sichtbar ist. Ändert sich die Regel, müssen alle Kopien gemeinsam geändert werden.",
   "Richtig: Dieselbe Entscheidung steckt an mehreren Stellen, also muss jede Änderung überall nachgezogen werden. Wer eine Stelle übersieht, erzeugt widersprüchliches Verhalten im System."
  ],
  "explanation": "Verletztes DRY erzwingt mehrfache Änderungen, riskiert Inkonsistenz und erzeugt eine unsichtbare logische Kopplung – für Logik ebenso wie für Konstanten. Fallen: Statische Analysen zeigen diese Kopplung nicht, und DRY meint Wissen, nicht gleich aussehenden Code."
 },
 {
  "id": "c3q72",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "multi",
  "q": "In einer als strikt geplanten Schichtenarchitektur findet ein Review Schichtsprünge und Aufrufe nach oben. Was trifft zu?",
  "options": [
   "Vereinzelte Abweichungen sind unkritisch.",
   "Nun liegt einfach eine gelockerte Schichtung vor.",
   "Die Implementierung weicht vom Entwurf ab (Erosion).",
   "Die Schichten sind schwerer austauschbar.",
   "Aufrufe nach oben sind über Callbacks verboten."
  ],
  "correct": [
   2,
   3
  ],
  "optExpl": [
   "Falsch: Auch einzelne Ausnahmen erzeugen zusätzliche Abhängigkeiten und sind oft der Anfang schleichender Erosion. Sie sollten bewusst entschieden und dokumentiert werden, statt pauschal als unkritisch zu gelten.",
   "Falsch: Gelockerte Schichtung erlaubt nur das Überspringen von Schichten nach unten. Aufrufe nach oben verletzen auch die gelockerte Variante – das Umdeuten verschleiert lediglich die Abweichung vom Entwurf.",
   "Richtig: Unbeabsichtigte Abweichungen der Implementierung vom geplanten Entwurf sind ein typisches Zeichen von Architekturerosion. Die strikte Schichtung existiert nur noch auf dem Papier.",
   "Richtig: Durch Schichtsprünge und Aufwärtsaufrufe hängen mehr Schichten voneinander ab. Eine Schicht lässt sich dann nicht mehr einfach austauschen oder isoliert testen, weil mehr Nachbarn betroffen sind.",
   "Falsch: Ein Callback über eine Schnittstelle, die die untere Schicht definiert, kehrt die Abhängigkeit um und ist zulässig. Zur Laufzeit fließt der Aufruf nach oben, die Quellcode-Abhängigkeit zeigt aber weiterhin nach unten."
  ],
  "explanation": "Ungeplante Schichtsprünge und Aufwärtsaufrufe sind Architekturerosion und verschlechtern die Austauschbarkeit der Schichten. Fallen: das als „gelockerte Schichtung“ umdeuten, obwohl Aufrufe nach oben auch dort verboten sind, und Callbacks pauschal verbieten."
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
   "Bei Zielkonflikten die Sicherheit vorrangig festlegen.",
   "Regulatorische Randbedingungen von Beginn an einbeziehen."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Falsch: Die rechtlich verbindliche Auslegung regulatorischer Vorgaben liegt bei Recht bzw. Compliance. Architekt:innen klären die Vorgaben mit diesen Stellen und setzen sie technisch um.",
   "Richtig: Qualitätsanforderungen klären, präzisieren und mit den Stakeholdern abstimmen ist eine Kernaufgabe der Rolle (R1). Bei einem Kernbankensystem sind Sicherheit, Nachvollziehbarkeit und Verfügbarkeit besonders kritisch.",
   "Richtig: Architekturen hinsichtlich Risiken zu analysieren und zu bewerten ist eine im Curriculum genannte Aufgabe. Gerade bei kritischen Systemen müssen Risiken für Anforderungen früh sichtbar werden.",
   "Falsch: Zielkonflikte wägt man gemeinsam mit den Stakeholdern ab und dokumentiert die Entscheidung. Auch im Bankumfeld gibt es keinen pauschalen Vorrang einer Qualität, etwa wenn Verfügbarkeit gesetzlich gefordert ist.",
   "Richtig: Regulatorik ist eine Randbedingung, die den Lösungsraum einschränkt. Sie muss deshalb von Beginn an in den Entwurf einfließen, sonst drohen teure Umbauten oder Zulassungsprobleme."
  ],
  "explanation": "Architekt:innen schärfen Qualitätsanforderungen mit den Stakeholdern, beziehen regulatorische Randbedingungen früh ein und bewerten Risiken. Fallen: Sie legen Vorschriften nicht juristisch verbindlich aus und entscheiden Zielkonflikte nicht pauschal zugunsten einer Qualität."
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
   "Falsch: Das ist nicht zielgruppengerecht: Das Management braucht eher Überblick, Risiken, Kosten und Konsequenzen von Entscheidungen. Detaillierte UML-Diagramme richten sich an Entwickler:innen und überfordern andere Zielgruppen.",
   "Richtig: Der IT-Betrieb ist laut Curriculum ausdrücklich Partner, vor allem bei Informationssystemen. Gemeinsam werden etwa Deployment, Monitoring, Skalierung und Betreibbarkeit abgestimmt, damit das System im Betrieb funktioniert.",
   "Richtig: Qualitätssicherung und Test nennt das Curriculum als Stakeholder. Qualitätsziele müssen überprüfbar sein; gemeinsam klärt man, wie etwa Performanz- oder Sicherheitsanforderungen getestet werden.",
   "Falsch: Architekt:innen ergänzen andere Rollen, ersetzen sie aber nicht. Die fachliche Abstimmung mit den Fachbereichen bleibt beim Product Owner; Architekt:innen unterstützen mit technischer Einschätzung.",
   "Richtig: Produktmanagement und Anforderungsanalyse liefern das „Was“. Architekt:innen klären mit ihnen fachliche Ziele, Prioritäten und Qualitätsanforderungen, um daraus tragfähige Architekturentscheidungen abzuleiten."
  ],
  "explanation": "Architekt:innen arbeiten zielgruppengerecht mit PO und Anforderungsanalyse, IT-Betrieb sowie QS und Test zusammen. Fallen: Sie ersetzen keine anderen Rollen wie den PO und überfordern das Management nicht mit detaillierten UML-Diagrammen."
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
   "Richtig: Ob sich Bausteine isoliert testen lassen, hängt direkt von Kopplung, Abhängigkeitsrichtung und Schnittstellen ab – also von der Architektur. Ein Baustein mit klarer Schnittstelle lässt sich leicht mit Test-Doubles prüfen.",
   "Richtig: Verteilung, Skalierungskonzept und Technologiewahl legen fest, welche Infrastruktur nötig ist und was der Betrieb kostet. Zehn separat betriebene Services kosten z. B. anders als ein Monolith.",
   "Falsch: Die Qualifikation des Teams ist eine Randbedingung, die auf die Architektur wirkt – nicht umgekehrt. Die Architektur muss zum Team passen, etwa bei der Technologiewahl.",
   "Richtig: Eine Struktur, in der Änderungen lokal bleiben, verkürzt die Zeit bis zur Auslieferung neuer Features. Starke Kopplung bremst dagegen jede Erweiterung, weil viele Bausteine angepasst und getestet werden müssen.",
   "Falsch: Welche Funktionen das System bieten soll, legen die Stakeholder über die Anforderungen fest. Die Architektur muss sie erfüllbar machen, bestimmt den Funktionsumfang aber nicht.",
   "Richtig: Das Curriculum nennt Energieeffizienz ausdrücklich: Verteilung, Kommunikationsart und Ressourcennutzung bestimmen den Energieverbrauch mit. Viele Netzwerkaufrufe oder ständiges Polling kosten z. B. messbar Energie."
  ],
  "explanation": "Architektur prägt Qualitäten wie Testbarkeit und Energieeffizienz, die Betriebs- und Infrastrukturkosten und wie schnell sich Änderungen ausliefern lassen. Fallen: Funktionsumfang und Teamqualifikation sind Eingangsgrößen (Anforderungen bzw. Randbedingungen), keine Ergebnisse der Architektur."
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
   "Richtig: Regulatorische Randbedingungen wie Datenschutz oder Aufbewahrungspflichten schränken die Lösung ein, etwa beim Speicherort von Daten oder bei Lösch- und Protokollierungspflichten. Sie sind nicht verhandelbar.",
   "Richtig: Das Curriculum nennt Verfügbarkeit, Qualifikation und Engagement der Mitarbeitenden ausdrücklich als organisatorische Randbedingung (R1). Eine Architektur, die das Team nicht beherrscht, ist kaum umsetzbar.",
   "Falsch: Bestehende Strukturen wirken auf neue Entscheidungen, egal ob sie dokumentiert sind oder nicht. Gerade undokumentierte Entscheidungen sind ein Risiko, verschwinden aber nicht als Einflussfaktor – die Einschränkung „nur wenn dokumentiert“ ist falsch.",
   "Falsch: arc42 ist eine Vorlage für die Dokumentation, kein Einflussfaktor auf den Entwurf. Welche Strukturen nötig sind, folgt aus Anforderungen und Randbedingungen – nicht aus den Kapiteln eines Templates.",
   "Richtig: Technische Vorgaben wie Referenzarchitekturen, Bibliotheken oder Frameworks begrenzen den Lösungsraum (R1). Die Architektur muss sich in diesen vorgegebenen Rahmen einfügen.",
   "Richtig: Laut Curriculum gehören Partnerschaften und Kooperationen zu den organisatorischen Einflussfaktoren (R2). Vereinbarungen mit Partnern können etwa Schnittstellen, Produkte oder Datenformate vorgeben."
  ],
  "explanation": "Einflussfaktoren sind u. a. organisatorisch (Personal, Budget, Partnerschaften), technisch (Infrastruktur, Referenzarchitekturen, Frameworks) und regulatorisch. Fallen: Ein Doku-Template wie arc42 ist kein Einflussfaktor, und frühere Entscheidungen wirken auch undokumentiert."
 },
 {
  "id": "c3q73",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R3",
  "extra": true,
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
   "Richtig: Ports and Adapters ist ein verbreitetes Architekturmuster: Die Fachlogik steht im Zentrum, Technik wie UI oder Datenbank wird über austauschbare Adapter an Ports angebunden. Es strukturiert also direkt das System.",
   "Richtig: DDD ist ein Entwurfsansatz, der die Fachdomäne ins Zentrum stellt. Mit Bounded Contexts und Ubiquitous Language liefert er Kriterien für fachliche Schnitte und beeinflusst so die Systemstruktur.",
   "Falsch: arc42 ist eine Vorlage für Architekturdokumentation mit zwölf Abschnitten. Sie gliedert die Doku, nicht das System, und sagt nichts darüber, wie Bausteine strukturiert werden sollen.",
   "Falsch: C4 ist ein Modell für Architekturdiagramme mit vier Zoomstufen, kein Strukturmuster. Context, Container, Component und Code sind Detailstufen der Darstellung, keine Schichten des Systems.",
   "Richtig: Microservices sind ein Architekturmuster: kleine, unabhängig deploybare Dienste, die je einen fachlichen Bereich verantworten. Sie bestimmen Zerlegung, Kommunikation und Verteilung des Systems.",
   "Richtig: Pipes und Filter ist ein klassisches Architekturmuster: Verarbeitungsschritte (Filter) werden über Datenströme (Pipes) verkettet, etwa in Batch-Verarbeitung oder Compilern. Filter lassen sich einzeln austauschen und kombinieren."
  ],
  "explanation": "Pipes und Filter, Microservices, Ports and Adapters sowie DDD sind Architekturmuster bzw. Entwurfsansätze, die die Systemstruktur prägen. Falle: C4 (Diagramm-Modell) und arc42 (Doku-Vorlage) sind Hilfsmittel der Dokumentation – trotz „vier Ebenen“ bzw. „zwölf Bereichen“ keine Strukturmuster."
 },
 {
  "id": "c3q74",
  "chapter": 3,
  "lz": "LZ 03-03",
  "r": "R3",
  "extra": true,
  "type": "multi",
  "q": "Welche der folgenden Ansätze zur Architekturentwicklung nennt das CPSA-F-Curriculum?",
  "options": [
   "Code first: Struktur aus dem Quellcode ableiten.",
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
   "Falsch: Klingt nach Bottom-up, ist es aber nicht: Bottom-up setzt vorhandene Bausteine bewusst zu Strukturen zusammen. Die Architektur nur nachträglich aus Code abzulesen, ist kein Entwurfsansatz.",
   "Richtig: Domain-Driven Design ist im Curriculum als (R3-)Ansatz genannt: Die Struktur folgt der Fachdomäne, etwa über Bounded Contexts und eine gemeinsame Fachsprache.",
   "Richtig: Sichtenbasierte Architekturentwicklung ist ein R1-Vorgehen: Die Architektur wird über Kontext-, Baustein-, Laufzeit- und Verteilungssicht schrittweise erarbeitet.",
   "Richtig: Top-down bedeutet, vom Groben ins Feine zu zerlegen, etwa vom Gesamtsystem über Subsysteme bis zu einzelnen Bausteinen. Das Curriculum nennt es als R1-Vorgehen.",
   "Richtig: Bottom-up bildet aus vorhandenen Details oder Komponenten größere Strukturen, etwa beim Einsatz bestehender Bibliotheken. Auch dieses Vorgehen ist im Curriculum R1.",
   "Falsch: Technologiegetriebener Entwurf kommt in der Praxis vor, ist aber kein Ansatz des Curriculums. Die Technologie soll den Anforderungen folgen, nicht die Struktur vorgeben."
  ],
  "explanation": "Das Curriculum nennt Top-down, Bottom-up und sichtenbasiertes Vorgehen (R1) sowie u. a. Domain-Driven Design, evolutionäre Architektur und globale Analyse (R3). Fallen: „Framework zuerst“ und „Code first“ klingen praxisnah, sind aber keine Entwurfsansätze des Curriculums."
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
   "Falsch: Unabhängige Skalierung ist ein Merkmal von Microservices oder verteilten Diensten. Schichten sind logische Strukturierungseinheiten, keine Betriebseinheiten, und werden meist gemeinsam deployt und skaliert.",
   "Richtig: Oberfläche, Fachlogik und Datenzugriff liegen in getrennten Schichten mit jeweils eigener Verantwortung. Diese Trennung der Belange macht das System verständlicher und ist ein Kernvorteil des Musters.",
   "Falsch: Gerade nicht: Ein neues Fachfeld, etwa ein zusätzliches Attribut am Antrag, zieht sich oft durch UI, Logik und Persistenz. Fachliche Änderungen betreffen in Schichtenarchitekturen typischerweise mehrere Schichten.",
   "Falsch: Das Durchreichen von Aufrufen durch mehrere Schichten kostet eher Latenz und Overhead. Kurze Aufrufwege sind also kein Vorteil, sondern im Gegenteil ein bekannter Nachteil des Musters.",
   "Richtig: Solange die Schnittstelle zur darüberliegenden Schicht gleich bleibt, kann eine Schicht ersetzt werden. Beispiel: Die Datenzugriffsschicht wird von einer relationalen auf eine dokumentenorientierte Datenbank umgestellt."
  ],
  "explanation": "Schichten bringen vor allem Trennung der Belange und Austauschbarkeit einzelner Schichten. Fallen: Vorteile anderer Muster wie unabhängige Skalierung unterstellen, lokale fachliche Änderungen erwarten oder geringe Latenz annehmen, obwohl das Durchreichen eher kostet."
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
   "Die Schichten müssen als eigene Deployments laufen.",
   "Zwischenschichten reichen Aufrufe oft nur weiter.",
   "Sie lässt sich nicht mit Microservices kombinieren."
  ],
  "correct": [
   0,
   3
  ],
  "optExpl": [
   "Richtig: Fachliche Änderungen verlaufen quer zu technischen Schichten. Ein neues Attribut muss oft in UI, Logik, Persistenz und Datenbank ergänzt werden, was Änderungen breit streut.",
   "Falsch: Austauschbarkeit ist gerade ein Vorteil der Schichtung: Solange die Schnittstelle stabil bleibt, lässt sich etwa die Persistenzschicht ersetzen, ohne höhere Schichten anzupassen.",
   "Falsch: Schichten sind eine logische Struktur. Ob sie gemeinsam in einem Artefakt oder getrennt deployt werden, ist eine eigene Verteilungsentscheidung und keine Pflicht der Schichtung.",
   "Richtig: Bei strikter Schichtung darf nur die direkt darunterliegende Schicht genutzt werden. Zwischenschichten ohne eigene Logik reichen Aufrufe dann nur weiter, was Boilerplate, Latenz und Pflegeaufwand kostet.",
   "Falsch: Muster lassen sich kombinieren: Ein einzelner Microservice kann intern durchaus geschichtet sein. Schichten und Microservices schließen sich also nicht aus."
  ],
  "explanation": "Strikte Schichtung hat Grenzen: Fachliche Änderungen ziehen sich durch mehrere Schichten, und Zwischenschichten reichen Aufrufe oft nur weiter. Fallen: Austauschbarkeit ist ein Vorteil, Schichten sind logisch statt Deployment-Einheiten und lassen sich mit Microservices kombinieren."
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
   "Richtig: Mündliche und schriftliche Kommunikation ergänzen sich. Beispiel: Walkthroughs auf Basis der Dokumentation durchführen und Ergebnisse aus Meetings zurück in die Doku führen, damit beides konsistent bleibt.",
   "Falsch: Kürzen ändert nicht die Art des Inhalts – das Management braucht andere Informationen, nicht weniger derselben. Gefragt sind etwa Überblick, Risiken und Kosten statt gekürzter Schnittstellendetails.",
   "Falsch: Beides ergänzt sich: Schriftliche Dokumentation macht Gespräche nicht überflüssig, etwa um Entscheidungen zu erklären, Feedback einzuholen oder Missverständnisse zu klären. Das Curriculum verlangt eine ausgewogene Balance.",
   "Richtig: Zielgruppen haben unterschiedliche Informationsbedürfnisse: Das Management braucht z. B. Überblick, Risiken und Kosten, die Entwicklung dagegen Bausteine, Schnittstellen und Konzepte. Doku muss stakeholdergerecht sein.",
   "Richtig: Das Curriculum nennt ausdrücklich, Beiträge unterschiedlicher Autorengruppen stilistisch und inhaltlich zu konsolidieren. Sonst entsteht eine uneinheitliche Doku, in der sich Leser:innen schwer zurechtfinden.",
   "Richtig: Eine einheitliche Struktur wie arc42 hilft beim Wiederfinden von Inhalten und wirkt zugleich als Vollständigkeits-Checkliste. Leser:innen wissen, wo sie etwa Qualitätsziele oder Entscheidungen finden."
  ],
  "explanation": "Zielgruppen brauchen unterschiedliche Inhalte; Templates erleichtern das Wiederfinden, mündliche und schriftliche Kommunikation werden ausbalanciert und Beiträge verschiedener Autoren harmonisiert. Fallen: gekürzte Entwicklerdoku fürs Management und die Annahme, schriftliche Doku ersetze Gespräche."
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
  "rowExpl": [
   "Budget, Termine und Personal liegen bei der Projektleitung. Architekt:innen liefern dafür Einschätzungen, übernehmen aber nicht die Verantwortung, deshalb ist die Aussage falsch.",
   "Architekt:innen zeigen Stakeholdern die Konsequenzen ihrer Entscheidungen auf, damit diese informiert mitentscheiden können. Das gehört zu ihren Aufgaben, die Aussage ist richtig.",
   "Zur Verantwortung gehört, dass Code und Architektur zusammenpassen, sonst driftet die Architektur vom Gebauten weg. Die Aussage ist deshalb richtig.",
   "Das fachliche Backlog priorisiert der Product Owner. Architekt:innen bringen architekturrelevante Aspekte ein, setzen aber nicht die fachlichen Prioritäten. Die Aussage ist falsch.",
   "Architektur ist iterativ, und Architekt:innen erkennen selbst, wann eine weitere Iteration nötig ist. Sie warten dafür nicht auf Vorgaben, die Aussage ist richtig.",
   "Zielkonflikte zwischen Qualitätszielen werden mit den Stakeholdern entschieden und nicht von Architekt:innen allein. Die Aussage ist deshalb falsch."
  ],
  "explanation": "Architekt:innen zeigen Konsequenzen ihrer Entscheidungen auf, prüfen die Konsistenz von Code und Architektur und erkennen selbst, wann eine weitere Iteration nötig ist. Fallen: Budget, Termine und Personal liegen bei der Projektleitung, das Backlog beim Product Owner, und Zielkonflikte werden mit den Stakeholdern entschieden."
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
    "text": "Ein Review-Gremium stellt die Verständlichkeit für alle Zielgruppen verbindlich fest.",
    "cat": 1
   }
  ],
  "rowExpl": [
   "Effizienz betrifft nicht nur die Lesbarkeit, sondern auch den Aufwand für Erstellung und Pflege der Doku. Die Aussage ist deshalb richtig.",
   "Verständlichkeit hängt davon ab, wer liest. Letztlich kann nur die Zielgruppe beurteilen, ob die Doku verständlich ist, deshalb ist die Aussage richtig.",
   "Korrektheit heißt Übereinstimmung mit dem System, nicht Ausführlichkeit. Eine ausführlichere Doku kann ebenso falsch sein, deshalb ist die Aussage falsch.",
   "Wartbarkeit heißt, die Doku mit vertretbarem Aufwand aktuell halten zu können, nicht, dass sie selten geändert wird. Die Aussage ist deshalb falsch.",
   "Kein Gremium kann Verständlichkeit stellvertretend für alle Zielgruppen verbindlich feststellen. Das kann nur die jeweilige Zielgruppe selbst, deshalb ist die Aussage falsch."
  ],
  "explanation": "Richtig: Effizienz schließt Erstellungs- und Pflegeaufwand ein, und Verständlichkeit beurteilt letztlich die Zielgruppe. Falsch: Korrektheit heißt Übereinstimmung mit dem System, nicht Ausführlichkeit; Wartbarkeit heißt, die Doku aktuell halten zu können, nicht seltene Änderungen; und kein Gremium kann Verständlichkeit stellvertretend feststellen."
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
  "rowExpl": [
   "Eine vollständig dokumentierte Architektur ist keine Voraussetzung. Auch Skizzen, Code und Interviews reichen als Grundlage, deshalb ist die Aussage falsch.",
   "Ein Ziel der Analyse ist zu prüfen, ob die Implementierung zu den getroffenen Architekturentscheidungen passt. Die Aussage ist deshalb richtig.",
   "Eine Analyse bewertet immer anhand eines Maßstabs, und das sind die priorisierten Qualitätsziele bzw. Anforderungen. Die Aussage ist deshalb richtig.",
   "Eine Analyse ist schon vor der Implementierung sinnvoll, etwa an Entwürfen, und nicht erst mit lauffähigem Code. Die Aussage ist deshalb falsch.",
   "Eine Architekturanalyse lohnt sich in allen Phasen: vor, während und nach der Implementierung. Die Aussage ist deshalb richtig.",
   "Die Analyse prüft auch, ob architekturrelevante Anliegen der Stakeholder berücksichtigt sind. Die Aussage ist deshalb richtig."
  ],
  "explanation": "Architekturanalyse ist vor, während und nach der Implementierung sinnvoll (richtig), also nicht erst mit lauffähigem Code (falsch). Sie misst an priorisierten Qualitätszielen (richtig), prüft die Konformität der Implementierung zu den Entscheidungen (richtig) und ob architekturrelevante Stakeholder-Anliegen berücksichtigt sind (richtig). Falle: Eine vollständig dokumentierte Architektur ist keine Voraussetzung, auch Skizzen, Code und Interviews reichen."
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
    "text": "Information Hiding bedeutet, Informationen vor den Stakeholdern des Projekts geheim zu halten.",
    "cat": 1
   }
  ],
  "rowExpl": [
   "Lose Kopplung heißt nicht „keine“ Abhängigkeiten, sondern so wenige wie möglich und so viele wie nötig. Die Formulierung trifft das Prinzip, deshalb ist die Aussage richtig.",
   "Information Hiding verbirgt Entscheidungen, die sich wahrscheinlich ändern, hinter einer stabilen Schnittstelle. Änderungen bleiben dadurch lokal, die Aussage ist richtig.",
   "Kohäsion meint den Zusammenhalt innerhalb eines Bausteins, nicht Abhängigkeiten zwischen Bausteinen. Viele Abhängigkeiten untereinander wären hohe Kopplung, deshalb ist die Aussage falsch.",
   "Prinzipien wendet man abhängig von den konkreten Anforderungen an und wägt sie gegeneinander ab. Eine Anwendung unabhängig davon ist kein sinnvolles Vorgehen, daher ist die Aussage falsch.",
   "Kapselung ist das Mittel, mit dem Information Hiding umgesetzt wird: Innere Details sind nur über die Schnittstelle erreichbar. Die Aussage ist deshalb richtig.",
   "Information Hiding hat nichts mit Geheimhaltung gegenüber Stakeholdern zu tun. Verborgen werden änderungswahrscheinliche Entscheidungen hinter einer stabilen Schnittstelle; die Aussage ist daher falsch."
  ],
  "explanation": "Richtig: Lose Kopplung heißt so wenige Abhängigkeiten wie möglich, so viele wie nötig; Information Hiding verbirgt änderungswahrscheinliche Entscheidungen; Kapselung ist das Mittel dazu. Falsch: Kohäsion meint Zusammenhalt innerhalb eines Bausteins, Prinzipien wendet man abhängig von Anforderungen an, und Information Hiding heißt nicht, Informationen vor Stakeholdern geheim zu halten, sondern änderungswahrscheinliche Entscheidungen hinter einer stabilen Schnittstelle zu verbergen."
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
  "rowExpl": [
   "Eine Qualitätsanforderung sollte festlegen, wie ihre Erfüllung geprüft wird, sonst bleibt offen, ob sie erreicht ist. Die Aussage ist deshalb richtig.",
   "Ein Qualitätsszenario beschreibt das WAS, also die geforderte Qualität, und nicht die Taktik, mit der sie erreicht wird. Die Taktik ist Teil der Lösung, die Aussage ist falsch.",
   "Auch vage Ziele wie Benutzerfreundlichkeit lassen sich in messbare Szenarien überführen. Die Aussage, das gehe nicht, ist daher falsch.",
   "Wird eine Metrik zum Ziel erhoben, wird sie oft nur noch optimiert und sagt weniger über die eigentliche Qualität aus (Goodhart). Die Aussage ist richtig.",
   "Ein Antwortmaß allein ist noch kein vollständiges Szenario, es fehlen Kontext, Stimulus und Reaktion. Die Aussage ist deshalb falsch."
  ],
  "explanation": "Richtig: Anforderungen sollen ihre Prüfmethode festlegen, und eine zum Ziel erhobene Metrik verliert an Aussagekraft (Goodhart). Falsch: Szenarien beschreiben das WAS, nicht die Taktik; auch Benutzerfreundlichkeit lässt sich messbar formulieren; und ein Antwortmaß allein ist noch kein vollständiges Szenario – es fehlen Kontext, Stimulus und Reaktion."
 },
 {
  "id": "c1q36",
  "chapter": 3,
  "lz": "LZ 03-05",
  "r": "R1",
  "type": "multi",
  "q": "Die Anforderungen stehen zu Projektbeginn noch nicht vollständig fest. Was ist beim Architekturentwurf am ehesten sinnvoll?",
  "options": [
   "Tragende Entscheidungen zurückstellen, bis die Anforderungen feststehen.",
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
   "Falsch: Vollständige Anforderungen gibt es selten, und auf sie zu warten blockiert das Projekt. „So spät wie verantwortbar“ heißt nicht „erst wenn alles feststeht“ – sonst wächst die Struktur ungesteuert.",
   "Richtig: Beim Last Responsible Moment trifft man schwer umkehrbare Entscheidungen erst dann, wenn mehr Wissen vorliegt, aber bevor das Warten selbst schadet. So sinkt das Risiko, sich früh falsch festzulegen.",
   "Falsch: Flexibilität auf Vorrat erzeugt Komplexität für Anforderungen, die vielleicht nie kommen (YAGNI). Erweiterungspunkte sollte man gezielt dort vorsehen, wo Änderungen wahrscheinlich sind.",
   "Richtig: Fehlt Wissen, muss man Annahmen treffen. Explizit festgehaltene Annahmen lassen sich gezielt überprüfen, und betroffene Entscheidungen können rechtzeitig angepasst werden, wenn sich eine Annahme als falsch erweist.",
   "Richtig: Prototypen liefern früh Rückmeldung genau dort, wo eine falsche Annahme am teuersten wäre. So wird Unsicherheit gezielt dort reduziert, wo das Risiko am größten ist.",
   "Richtig: Bei unsicheren Anforderungen wächst die Architektur mit dem Wissen und wird in jeder Iteration überprüft. Neue Erkenntnisse fließen so kontinuierlich in die Entscheidungen ein."
  ],
  "explanation": "Bei unvollständigen Anforderungen: iterativ arbeiten, Annahmen festhalten, riskante Annahmen früh per Prototyp prüfen und schwer umkehrbare Entscheidungen zum Last Responsible Moment treffen. Fallen: alles vorsorglich flexibel machen – oder auf vollständige Anforderungen warten."
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
   "Falsch: Der Team-Zuschnitt begünstigt nur einen bestimmten Systemschnitt. Schnittstellen, Querschnittsthemen und Qualitätsanforderungen müssen weiterhin bewusst entworfen werden; Architekturarbeit wird nicht entbehrlich.",
   "Falsch: Auch bestehende Systeme werden von den Teams weiterentwickelt, die sie pflegen. Ihre Struktur passt sich mit der Zeit an die Kommunikationsstrukturen an – das Inverse Conway Maneuver wirkt also auch dort, wenn auch langsamer.",
   "Richtig: Weil Systemstrukturen den Kommunikationsstrukturen der Organisation folgen (Conways Gesetz), lässt sich dieser Effekt bewusst nutzen: das Inverse Conway Maneuver. Das erfordert allerdings eine echte Änderung der Organisation.",
   "Falsch: Schichtteams (UI, Logik, Datenbank) begünstigen laut Conway Schichtgrenzen im System, nicht fachliche Schnitte. Für fachlich geschnittene Services braucht es cross-funktionale Teams je Fachbereich."
  ],
  "explanation": "Wer Teams passend zur Zielarchitektur schneidet, nutzt Conways Gesetz gezielt (Inverse Conway Maneuver) – das braucht eine echte Organisationsänderung. Fallen: Das ersetzt keine Architekturarbeit, wirkt auch auf bestehende Systeme, und Schichtteams erzeugen Schichtgrenzen statt fachlicher Schnitte."
 },
 {
  "id": "c2q30",
  "chapter": 2,
  "lz": "LZ 02-03",
  "r": "R1",
  "type": "multi",
  "q": "Für ein Kundenportal ist hohe Benutzbarkeit ein Top-Qualitätsziel. Welche Aussagen zur Absicherung dieses Ziels treffen zu?",
  "options": [
   "Die Abnahme durch den Auftraggeber genügt als Nachweis.",
   "Bedienabläufe früh mit Prototypen erproben.",
   "Das Ziel kann Architekturentscheidungen prägen, z. B. zu Antwortzeiten.",
   "Ein einheitliches Design-System stellt die Benutzbarkeit sicher.",
   "Repräsentative Nutzer befragen oder testen lassen.",
   "Benutzbarkeit lässt sich spät unabhängig von der Architektur optimieren."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Falsch: Der Auftraggeber ist meist nicht der typische Nutzer des Portals. Seine Abnahme ersetzt daher keine Prüfung mit echten Nutzergruppen, die ganz andere Erwartungen und Kenntnisse haben können.",
   "Richtig: Prototypen machen Schwächen in Bedienabläufen sichtbar, bevor teure Strukturentscheidungen feststehen. So lässt sich früh und günstig gegensteuern.",
   "Richtig: Benutzbarkeit hängt auch an Antwortzeiten, Fehlerbehandlung oder Offline-Fähigkeit – also an der Architektur. Ein solches Top-Qualitätsziel prägt deshalb Architekturentscheidungen.",
   "Falsch: Ein Design-System sorgt für Konsistenz, ist aber eine Lösungsvorgabe. Ob Nutzer ihre Aufgaben tatsächlich effizient erledigen können, beweist es nicht; dafür braucht es Tests.",
   "Richtig: Ob ein System benutzbar ist, zeigt sich bei denen, die es tatsächlich bedienen sollen. Interviews, Umfragen und Tests mit repräsentativen Nutzern liefern dafür belastbare Ergebnisse – das Curriculum nennt Interviews und Umfragen ausdrücklich als Analysemethode.",
   "Falsch: Oberflächendetails lassen sich spät verbessern, aber träge Antworten oder fehlende Fehlertoleranz lassen sich nicht nachträglich wegpolieren. Sie wurzeln in der Architektur."
  ],
  "explanation": "Benutzbarkeit sichert man durch Befragungen und Tests mit repräsentativen Nutzern und frühe Prototypen ab; als Top-Qualitätsziel prägt sie auch Architekturentscheidungen wie Antwortzeiten. Fallen: Abnahme durch den Auftraggeber oder ein Design-System sind kein Nachweis, und spät lässt sich nur die Oberfläche polieren."
 },
 {
  "id": "c3q77",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R1",
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
   "Falsch: Die Abhängigkeit geht vom Baustein zum Kartendienst, ist also ausgehend (efferent). Afferente Kopplung zählt dagegen, wie viele andere Bausteine von diesem Baustein abhängen – die Begriffe werden hier vertauscht.",
   "Richtig: Ohne Abfederung durch Timeout, Fallback oder Circuit Breaker schlägt ein Ausfall des Fremddienstes direkt auf die eigene Funktion durch. Bei vielen direkten Aufrufstellen ist das System an vielen Stellen verwundbar.",
   "Richtig: Der Baustein hängt an einem extern kontrollierten, volatilen Element. Ändert der Anbieter sein API oder kündigt eine Version ab, muss der eigene Code nachziehen – und zwar an jeder Aufrufstelle.",
   "Falsch: Ein SLA deckt höchstens Verfügbarkeit und Reaktionszeiten ab, nicht API-Änderungen, Versionswechsel oder Abkündigungen. Die strukturelle Kopplung an den Anbieter bleibt bestehen.",
   "Falsch: Auch zur Entwicklungszeit hängt der Code an Datentypen, Bibliotheken und Aufrufkonventionen des Anbieters. Die Kopplung zeigt sich also schon beim Kompilieren und Testen, nicht erst zur Laufzeit.",
   "Richtig: Ist das fremde API im Code verstreut, muss bei einem Anbieterwechsel jede Aufrufstelle angepasst werden. Ein Adapter bzw. eine Anti-Corruption Layer würde das an einer Stelle bündeln."
  ],
  "explanation": "Direkt und verstreut eingebundene Fremddienste koppeln das System an ein volatiles, fremdkontrolliertes Element: Ausfälle, API-Änderungen und Anbieterwechsel schlagen durch. Fallen: ein SLA für die Lösung halten, afferent und efferent vertauschen oder die Kopplung nur zur Laufzeit sehen."
 },
 {
  "id": "c3q78",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
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
   "Falsch: Verteilte Services wieder zusammenzuführen ist meist aufwendiger, als einen modularen Monolithen später entlang klarer Modulgrenzen aufzuteilen. Der Konflikt wird so nicht gelöst, sondern vertagt.",
   "Falsch: Die Perspektive einer einzelnen Gruppe entscheidet nicht. Maßgeblich sind die Anforderungen aller Stakeholder, auch des Betriebs, der das System langfristig betreiben muss.",
   "Falsch: Kostenanteile sind ein legitimes Argument, ersetzen aber nicht die Abwägung aller Qualitätsziele. Auch Änderbarkeit und unabhängige Auslieferung können geschäftlich wichtig sein.",
   "Richtig: Der Konflikt wird über explizite, priorisierte Qualitätsziele und deren Trade-offs gelöst. Ein modularer Monolith kann dabei ein tragfähiger Kompromiss sein, der sich später aufteilen lässt."
  ],
  "explanation": "Zielkonflikte zwischen Stakeholdern löst man über explizite Qualitätsziele und bewusste Trade-offs, etwa mit einem modularen Monolithen als Kompromiss. Falle: ein plausibles Einzelargument wie Kosten oder „wer baut, entscheidet“ als Begründung für eine Seite ausgeben."
 },
 {
  "id": "c5q28",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R1",
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
   "Falsch: Entwicklerrechner bilden Last, Datenmengen und Infrastruktur des Betriebs nicht ab. Störeinflüsse zu meiden klingt sauber, die Messwerte sind dann aber gerade nicht aussagekräftig für das reale Problem.",
   "Richtig: Laufzeitverhalten quantitativ unter realistischen Bedingungen zu messen ist die passende Methode für Performanz. Nur so zeigt sich, ob und wo die geforderten Antwortzeiten verfehlt werden.",
   "Richtig: Das Curriculum nennt Laufzeit-Logs und -Metriken ausdrücklich als Informationsquelle für die Analyse. Sie zeigen das Verhalten unter echter Last, z. B. langsame Anfragen oder Ressourcenengpässe.",
   "Falsch: Interviews helfen, das Problem einzugrenzen, etwa welche Funktionen betroffen sind. Sie sind aber qualitativ: Die technische Ursache eines Performanzproblems belegt man durch Messung, nicht durch Befragung.",
   "Falsch: Mehr Hardware kann Symptome verdecken, ersetzt aber keine Ursachenanalyse. Liegt das Problem z. B. in vielen sequenziellen Remote-Aufrufen, hilft schnellere Hardware kaum, und Architekturprobleme sind nicht ausgeschlossen.",
   "Richtig: „Zu langsam“ ist nicht prüfbar. Erst ein Qualitätsszenario mit Kontext, Stimulus und messbarem Antwortmaß, z. B. „95 % der Suchen unter 1 s bei 500 Nutzern“, legt fest, was erreicht werden soll."
  ],
  "explanation": "Performanzprobleme untersucht man messbasiert: Ziel als messbares Qualitätsszenario fassen, unter realistischer Last messen und Laufzeit-Logs und -Metriken aus dem Betrieb auswerten. Fallen: Hardware-Aufrüstung, Messung auf Entwicklerrechnern und Nutzerinterviews ersetzen keine Messung im realistischen Umfeld."
 },
 {
  "id": "k34",
  "chapter": 3,
  "lz": "LZ 03-02",
  "r": "R1",
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
  "rowExpl": [
   "Zugesicherte Qualitäten wie die maximale Antwortzeit sind Außensicht: Nutzer des Bausteins verlassen sich darauf. Wie sie intern erreicht werden, wäre Whitebox.",
   "Die Verantwortung in einem Satz sagt, was der Baustein leistet, ohne seinen Aufbau zu erklären. Das ist Außensicht und gehört damit in die Blackbox.",
   "Unterbausteine und ihre Beziehungen beschreiben den inneren Aufbau. Das ist Innensicht und gehört in die Whitebox, nicht in die Außenbeschreibung.",
   "Das Zusammenspiel der inneren Bausteine bei einer Anfrage zeigt, wie intern gearbeitet wird. Das ist Innensicht, also Whitebox, und nichts, was Nutzer des Bausteins wissen müssen.",
   "Welcher innere Baustein eine äußere Schnittstelle realisiert, ist schon Innensicht. Deshalb gehört diese Abbildung in die Whitebox, auch wenn es um äußere Schnittstellen geht.",
   "Die benötigten Schnittstellen zu anderen Bausteinen gehören zum nach außen sichtbaren Vertrag des Bausteins. Das ist Außensicht, also Blackbox, auch wenn sie nach „innen“ klingen."
  ],
  "explanation": "Zur Blackbox gehören Verantwortung, zugesicherte Qualitäten wie die Antwortzeit und die benötigten Schnittstellen. Unterbausteine, ihr Zusammenspiel bei einer Anfrage und die Abbildung äußerer Schnittstellen auf innere Bausteine sind Whitebox. Falle: Welcher innere Baustein eine Schnittstelle realisiert, ist schon Innensicht."
 },
 {
  "id": "k35",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Sie modellieren die Verteilungssicht eines Bestellsystems. Ist das Element ein Knoten oder ein darauf verteiltes Artefakt?",
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
    "text": "Das Container-Image des Bestelldienstes.",
    "cat": 1
   },
   {
    "text": "Eine Container-Laufzeitumgebung auf einem Host.",
    "cat": 0
   },
   {
    "text": "Der Datenbankserver, auf dem das Schema eingerichtet wird.",
    "cat": 0
   }
  ],
  "rowExpl": [
   "Eine mitgelieferte Konfigurationsdatei ist eine ausgelieferte Einheit, die auf einem Knoten installiert wird. Sie ist daher ein Artefakt und selbst keine Ausführungsumgebung.",
   "Das Container-Image ist die ausgelieferte Einheit, die auf einer Laufzeitumgebung installiert wird. Das ist die Falle: Es wirkt wie ein Ausführungsort, ist aber ein Artefakt und kein Knoten.",
   "Eine Container-Laufzeitumgebung auf einem Host ist eine Ausführungsumgebung, auf der Artefakte laufen. Sie ist deshalb ein Knoten und keine ausgelieferte Einheit.",
   "Der Datenbankserver ist die Ausführungsumgebung, auf der das Schema eingerichtet wird. Er ist deshalb ein Knoten; das Schema wäre die ausgelieferte Einheit."
  ],
  "explanation": "Knoten sind Ausführungsumgebungen: die Container-Laufzeit und der Datenbankserver. Artefakte sind ausgelieferte Einheiten, die darauf installiert werden: Konfigurationsdatei und Container-Image. Falle: Das Image ist kein Knoten, sondern ein Artefakt."
 },
 {
  "id": "c1q37",
  "chapter": 3,
  "lz": "LZ 03-02",
  "r": "R1",
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
   "Falsch: Die innere Zerlegung in Unterbausteine und deren Beziehungen ist genau das, was erst die Whitebox-Sicht zeigt. Die Blackbox verbirgt diese Interna bewusst, damit Nutzer sie nicht kennen müssen.",
   "Richtig: Auch benötigte Schnittstellen, also Abhängigkeiten nach außen, sind von außen sichtbar und für Nutzer relevant. Wer den Baustein einsetzt, muss wissen, was er dafür bereitstellen muss.",
   "Richtig: Verantwortlichkeit und zugesicherte Eigenschaften legen fest, wofür und unter welchen Bedingungen man den Baustein nutzt, etwa Aufgabe, Antwortzeit oder Verfügbarkeit. Sie bilden den Vertrag nach außen.",
   "Falsch: Die Zuordnung zu Ausführungsknoten gehört in die Verteilungssicht. Die Blackbox der Bausteinsicht beschreibt den Baustein logisch, unabhängig davon, wo er später läuft.",
   "Richtig: Was der Baustein nach außen bereitstellt, ist der Kern der Blackbox-Beschreibung. Über die angebotenen Schnittstellen nutzen andere den Baustein, ohne seine Interna zu kennen.",
   "Falsch: Intern verwendete Algorithmen sind Whitebox-Inhalt bzw. Implementierungsdetail und bleiben in der Blackbox verborgen. So lassen sie sich ändern, ohne Nutzer des Bausteins zu beeinflussen."
  ],
  "explanation": "Die Blackbox beschreibt angebotene und benötigte Schnittstellen, Verantwortlichkeit und zugesicherte Eigenschaften. Fallen: Die Knotenzuordnung gehört in die Verteilungssicht, Unterbausteine und Algorithmen in die Whitebox."
 },
 {
  "id": "c4q40",
  "chapter": 3,
  "lz": "LZ 03-02",
  "r": "R1",
  "type": "multi",
  "q": "Welche Angaben gehören in die Whitebox-Beschreibung eines Bausteins?",
  "options": [
   "Die enthaltenen Unterbausteine und ihre Beziehungen.",
   "Die Klassenstruktur der Unterbausteine bis zur Methodenebene.",
   "Wichtige Schnittstellen zwischen den Unterbausteinen.",
   "Die Zuordnung der Unterbausteine zu Servern.",
   "Terminplan und Personenzuordnung je Unterbaustein.",
   "Eine Begründung für die gewählte Zerlegung."
  ],
  "correct": [
   0,
   2,
   5
  ],
  "optExpl": [
   "Richtig: Das ist der Kern einer Whitebox. Genau dafür öffnet man einen Baustein: um seinen inneren Aufbau zu zeigen.",
   "Falsch: Das wäre Detailentwurf. Die Whitebox beschreibt Bausteine und ihre Beziehungen auf Architekturebene; feinere Ebenen entstehen durch weitere Verfeinerung.",
   "Richtig: Die internen Schnittstellen zeigen, wie die Unterbausteine zusammenarbeiten. Wichtige gehören in die Whitebox-Beschreibung, ggf. mit Verweis auf Details.",
   "Falsch: Auf welchen Knoten bzw. Servern etwas läuft, zeigt die Verteilungssicht. Die Whitebox in der Bausteinsicht beschreibt den statischen Aufbau, unabhängig von der Infrastruktur.",
   "Falsch: Das sind Informationen des Projektmanagements, kein Bestandteil der Architekturbeschreibung des Bausteins.",
   "Richtig: Die Whitebox erklärt auch, warum der Baustein so geschnitten wurde. Das macht die Struktur nachvollziehbar und später überprüfbar."
  ],
  "explanation": "Eine Whitebox zeigt Unterbausteine, ihre Beziehungen, wichtige interne Schnittstellen und die Begründung der Zerlegung. Fallen: Die Zuordnung zu Servern gehört in die Verteilungssicht, Klassenstrukturen bis zur Methodenebene sind Detailentwurf, Termine und Personen Projektmanagement."
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
   "Falsch: Conways Gesetz betrifft jede Systemstruktur, nicht nur verteilte Systeme. Auch die Module eines Monolithen spiegeln häufig die Kommunikationsstruktur der Teams wider, die sie bauen.",
   "Falsch: Conways Gesetz ist eine Beobachtung, keine Vorschrift. Man kann es bewusst nutzen, etwa mit dem Inverse Conway Maneuver, ist aber nicht verpflichtet, Teams nach der Architektur zu schneiden.",
   "Falsch: Auch kleine Organisationen haben Kommunikationsstrukturen, die sich im System niederschlagen – nur weniger auffällig. Schon zwei Entwicklerinnen, die kaum miteinander reden, erzeugen eher eine Schnittstelle zwischen ihren Teilen.",
   "Richtig: Wo Teams kaum miteinander kommunizieren, entstehen bevorzugt Schnittstellen und Systemgrenzen zwischen ihren Teilen. Das ist der Kern der Beobachtung: Systemstruktur folgt Kommunikationsstruktur.",
   "Richtig: Conway steht im Curriculum bei den organisatorischen Randbedingungen, also bei der Struktur von Teams und Auftraggebenden. Es ist keine technische Randbedingung, beeinflusst aber den Systemschnitt."
  ],
  "explanation": "Conways Gesetz ist eine organisatorische Randbedingung: Kommunikationsgrenzen zwischen Teams werden tendenziell zu Systemgrenzen. Fallen: Es gilt unabhängig von Organisationsgröße und Architekturstil und ist eine Beobachtung, keine Pflicht zum Teamschnitt."
 },
 {
  "id": "c3q79",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R3",
  "extra": true,
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
   "Richtig: Ein Adapter bzw. Anti-Corruption-Layer bündelt die Abhängigkeit vom externen API an einer Stelle. Ändert der Anbieter seine Schnittstelle, muss nur diese Abstraktion angepasst werden.",
   "Falsch: Verstreute Adapter verteilen die Abhängigkeit wieder über das System. Eine Änderung des Anbieters muss dann an vielen Stellen nachgezogen werden, was die Kapselung zunichtemacht.",
   "Falsch: Ohne festgelegte Version schlägt jede Änderung des Anbieters ungeplant durch. Versionen pinnt man bewusst und migriert kontrolliert, etwa nach Tests gegen die neue Version.",
   "Richtig: Timeouts begrenzen Wartezeiten, Retries überbrücken kurze Störungen, und ein Circuit Breaker stoppt Aufrufe an einen ausgefallenen Dienst. Zusammen verhindern sie Ausfallketten.",
   "Falsch: Fremde Datentypen im Fachmodell ziehen die Strukturen und Änderungen des Anbieters ins eigene System. Ein Anti-Corruption-Layer übersetzt sie gerade in das eigene Modell."
  ],
  "explanation": "Volatile externe Dienste kapselt man zentral hinter einer eigenen Abstraktion (Adapter, Anti-Corruption-Layer) und sichert schwankende Verfügbarkeit mit Resilienzmustern wie Timeout, Retry und Circuit Breaker ab. Fallen: verstreute Adapter, ungepinnte Versionen und Fremdtypen im Fachmodell."
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
   "Falsch: Klingt messbar, nennt aber weder Aufgabe noch Kontext oder Nutzergruppe. Zufriedenheit lässt sich zudem erst nach dem Go-live prüfen, sodass die Anforderung im Entwurf keine Orientierung bietet.",
   "Falsch: Das ist eine Lösungsvorgabe bzw. Randbedingung. Man kann prüfen, ob sie eingehalten wird, aber nicht, ob das System dadurch tatsächlich benutzerfreundlich ist und Nutzer ihre Aufgaben gut erledigen.",
   "Falsch: Eine Gestaltungsregel ist eine Lösungsidee, keine Qualitätsanforderung. Sie sagt nichts darüber, ob Nutzer ihre Aufgaben effizient erledigen – manche Aufgaben brauchen mehr Felder, ohne unbenutzbar zu sein.",
   "Richtig: Das ist ein Qualitätsszenario mit Kontext (neue Nutzer), Stimulus (Bestellung aufgeben), Reaktion (ohne Hilfe abgeschlossen) und Messgröße (< 3 min bei ≥ 90 %). So wird ein vages Ziel wie „benutzerfreundlich“ prüfbar."
  ],
  "explanation": "Vage Ziele wie „benutzerfreundlich“ werden über Qualitätsszenarien mit konkreter Aufgabe, Kontext, Reaktion und Messgröße prüfbar. Fallen: Gestaltungsregeln und Design-Systeme sind Lösungsvorgaben, und eine Zufriedenheitsquote ohne Aufgabe und Kontext ist kein vollständiges Szenario."
 },
 {
  "id": "c5q29",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R1",
  "type": "multi",
  "q": "Ein Team vermutet die Ursache einer langsamen Anwendung in einem bestimmten Modul. Welche Vorgehensweisen sind methodisch begründet?",
  "options": [
   "Das Modul mit der höchsten Kopplung zuerst optimieren.",
   "Den Engpass durch Messung (z. B. Profiling, Lasttest) belegen, bevor optimiert wird.",
   "Vorsorglich einen Cache vor das Modul schalten.",
   "Nach der Optimierung erneut messen, um die Wirkung zu belegen.",
   "Die Vermutung per Code-Review der Algorithmen als belegt ansehen und sofort umbauen.",
   "Unter realistischen Bedingungen messen (Kontext und Stimulus entsprechend dem Szenario)."
  ],
  "correct": [
   1,
   3,
   5
  ],
  "optExpl": [
   "Falsch: Kopplung sagt etwas über Änderbarkeit und Abhängigkeiten aus, nicht darüber, wo Laufzeit verloren geht. Ein stark gekoppeltes Modul kann durchaus schnell sein, ein lose gekoppeltes der Engpass.",
   "Richtig: Erst Profiling oder Monitoring unter realistischen Bedingungen zeigt, ob die Vermutung stimmt. Sonst optimiert man womöglich die falsche Stelle – Knuths Warnung vor „premature optimization“ zielt genau darauf.",
   "Falsch: Caching ist eine mögliche Performanztaktik, bringt aber Komplexität und Konsistenzfragen wie Invalidierung mit sich. Ohne belegten Engpass ist es verfrüht und hilft womöglich gar nicht.",
   "Richtig: Ohne Nachmessung bleibt offen, ob die Änderung die Antwortzeit tatsächlich verbessert hat oder nur Komplexität hinzugekommen ist.",
   "Falsch: Ein Review kann Hinweise auf ineffiziente Algorithmen liefern, belegt aber nicht, dass das Modul tatsächlich der Engpass ist. Die eigentliche Ursache kann ganz woanders liegen, etwa in Datenbank oder Netzwerk.",
   "Richtig: Messwerte unter unrealistischen Bedingungen führen zu falschen Schlüssen. Ein Szenario legt fest, unter welcher Last und mit welchem Stimulus gemessen wird."
  ],
  "explanation": "Erst messen, dann optimieren: Der Engpass muss unter realistischen Bedingungen durch Profiling oder Monitoring belegt sein, bevor man gezielt optimiert. Fallen: Reviews, Kopplungsmetriken oder vorsorgliches Caching ersetzen die Messung nicht."
 },
 {
  "id": "c1q39",
  "chapter": 1,
  "lz": "LZ 01-02",
  "r": "R1",
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
   "Falsch: Ein Vorab-Detaildesign aller Varianten (Big Design Up Front) kann unbekannte Änderungen nicht vorwegnehmen. Es erzeugt Überkonstruktion und macht gerade unvorhergesehene Änderungen eher teurer.",
   "Falsch: Ein Architekturstil garantiert keine Änderbarkeit. Schlecht geschnittene Microservices verteilen eine fachliche Änderung sogar über viele Services und erhöhen so den Aufwand.",
   "Richtig: Modularität und lose Kopplung halten Änderungen lokal: Eine geänderte Anforderung betrifft nur wenige Bausteine hinter stabilen Schnittstellen. Das macht späte Anpassungen günstig.",
   "Falsch: Dokumentation hilft, betroffene Stellen schneller zu finden, senkt aber nicht den eigentlichen Änderungsaufwand. Der hängt von der Struktur des Systems ab, nicht vom Umfang der Doku."
  ],
  "explanation": "Späte Änderungen bleiben günstig durch eine bewusst änderbar gehaltene, modulare und lose gekoppelte Struktur. Fallen: Vollständige Doku, ein Vorab-Detaildesign aller Varianten oder ein bestimmter Stil wie Microservices bewirken das allein nicht."
 },
 {
  "id": "c1q40",
  "chapter": 1,
  "lz": "LZ 01-07",
  "r": "R2",
  "type": "multi",
  "q": "Ein Team trennt sein Datenmodell bewusst von der Repräsentation in Datenbank und Schnittstellenformat. Welche Aussagen dazu treffen zu?",
  "options": [
   "Das Datenbankschema legt das Fachmodell verbindlich fest.",
   "Schemaänderungen erzwingen keine Änderung der Fachlogik.",
   "Datenbank, Datei und Protokoll sind nur Repräsentationen.",
   "Das Fachmodell wird erst nach der Wahl der Datenbank entworfen.",
   "Dadurch entfällt jede Abbildung zwischen Modell und Speicher.",
   "Der Preis ist zusätzlicher Abbildungsaufwand zwischen den Ebenen."
  ],
  "correct": [
   1,
   2,
   5
  ],
  "optExpl": [
   "Falsch: Das wäre die Umkehrung der Entkopplung. Wenn das Schema das Fachmodell diktiert, schlagen technische Änderungen direkt auf die Fachlichkeit durch – genau das soll die Trennung verhindern. Das Fachmodell wird aus der Domäne abgeleitet, nicht aus der Tabellenstruktur.",
   "Richtig: Das ist der Kern der Entkopplung. Ein geändertes Datenbankschema oder ein neues JSON-Format betrifft nur die Abbildung zwischen Modell und Repräsentation; Fachmodell und Fachlogik bleiben unverändert und müssen weder angepasst noch neu entworfen werden.",
   "Richtig: Das Curriculum nennt ausdrücklich Datenbanken, Dateien und Übertragungsprotokolle als Repräsentationen des Datenmodells. Sie können wechseln oder nebeneinander bestehen, während die fachliche Bedeutung der Daten gleich bleibt.",
   "Falsch: Die Reihenfolge ist umgekehrt gedacht. Das Datenmodell wird zuerst aus der Fachlichkeit entworfen und die Speichertechnologie danach passend gewählt. Wer mit der Datenbank beginnt, überträgt technische Zwänge unbemerkt in das Fachmodell.",
   "Falsch: Entkopplung beseitigt die Abbildung nicht, sie macht sie explizit. Zwischen Fachmodell und Speicher- oder Übertragungsformat gibt es weiterhin Abbildungscode, der gepflegt und getestet werden muss.",
   "Richtig: Entkopplung ist kein Selbstzweck, sondern eine Abwägung. Sie kostet Abbildungscode, zusätzliche Typen und etwas Laufzeit und lohnt sich besonders dort, wo Repräsentationen wechseln oder mehrere Formate bedient werden müssen."
  ],
  "explanation": "Entkoppelte Datenmodelle halten das Fachmodell stabil, während Datenbankschema, Dateiformate und Protokolle wechseln können; dafür braucht es eine explizite Abbildung, die Aufwand verursacht. Fallen: das Schema als Vorgabe für das Fachmodell zu sehen, die Datenbank zuerst zu wählen oder zu glauben, Entkopplung spare die Abbildung ein – sie macht sie nur sichtbar und austauschbar."
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
   "Richtig: Knoten sind Ausführungsumgebungen wie Server, VMs oder Container-Laufzeiten. Artefakte sind die ausgelieferten Einheiten, etwa JAR-Dateien, Container-Images oder Konfigurationsdateien, die auf Knoten installiert werden.",
   "Falsch: Bausteine werden auf Artefakte abgebildet, sind aber nicht dasselbe: Ein Artefakt kann mehrere Bausteine enthalten. Ein Knoten ist Infrastruktur, keine Softwarekomponente.",
   "Falsch: Knoten können physisch oder virtuell sein, etwa VMs oder Container-Laufzeitumgebungen. Eine VM führt Software aus und ist damit ein Knoten, kein Artefakt.",
   "Falsch: Die Begriffe sind vertauscht: Der Knoten führt aus, das Artefakt ist die deploybare Datei, die darauf ausgeliefert und installiert wird."
  ],
  "explanation": "Knoten sind physische oder virtuelle Ausführungsumgebungen (Server, VM, Container), Artefakte die darauf verteilten Einheiten (JAR, Image, Konfiguration). Fallen: Artefakt mit Baustein gleichsetzen, VMs nicht als Knoten zählen oder die Begriffe vertauschen."
 },
 {
  "id": "k36",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
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
  "rowExpl": [
   "Unabhängiges Releasen durch mehrere Teams setzt klar getrennte, einzeln auslieferbare Dienste voraus. Das spricht für Microservices; ein Monolith wird als Ganzes ausgeliefert.",
   "Bei unklaren, sich verschiebenden fachlichen Grenzen sind Änderungen innerhalb eines (modularen) Monolithen billiger. Dienstgrenzen, die später falsch liegen, wären teuer zu korrigieren.",
   "Wer einen Teilbereich bewusst mit anderer Technologie bauen will, braucht eigenständige Dienste. Das spricht für Microservices, weil ein Monolith meist eine gemeinsame Technologie voraussetzt.",
   "Zwingende sofortige Transaktionskonsistenz über alle Daten ist in einem Monolithen mit gemeinsamem Datenbestand einfacher. Verteilte Dienste machen sie schwieriger, deshalb eher Monolith.",
   "Ein kleines Team hat wenig Betriebskapazität. Ein Monolith hält die Betriebskomplexität gering, viele verteilte Dienste würden sie erhöhen, daher spricht das eher für den Monolithen.",
   "Wenn ein Teilbereich bei Lastspitzen unabhängig vom Rest skaliert werden muss, braucht er einen eigenen Dienst. Das spricht für Microservices; ein Monolith skaliert nur als Ganzes."
  ],
  "explanation": "Unabhängiges Releasen mehrerer Teams, Technologievielfalt und separates Skalieren bei Lastspitzen sprechen für Microservices. Unklare, sich verschiebende fachliche Grenzen, zwingende Transaktionskonsistenz und ein kleines Team mit wenig Betriebskapazität sprechen eher für einen modularen Monolithen."
 },
 {
  "id": "c3q80",
  "chapter": 3,
  "lz": "LZ 03-05",
  "r": "R2",
  "type": "multi",
  "q": "Ein Team muss früh entscheiden, wie es ein unbekanntes Fremdsystem anbindet. Welche Maßnahmen senken das Risiko dieser Architekturentscheidung?",
  "options": [
   "Die Anbindung früh in einem Prototyp erproben.",
   "Die Entscheidung aufschieben, bis die Anforderungen feststehen.",
   "Annahmen in kurzen Iterationen überprüfen und anpassen.",
   "Die Architektur erst ausarbeiten, dann Feedback einholen.",
   "Im Projektplan einen pauschalen Zeitpuffer einplanen.",
   "Stakeholder gezielt in Demos und Reviews einbinden."
  ],
  "correct": [
   0,
   2,
   5
  ],
  "optExpl": [
   "Richtig: Ein Prototyp oder Durchstich liefert Fakten statt Vermutungen. Er zeigt früh, ob Schnittstelle, Performance und Fehlerverhalten des Fremdsystems tragen – genau so senken Iterationen das Risiko einer Entscheidung unter Unsicherheit.",
   "Falsch: Ein pauschaler Aufschub bis „alle Anforderungen feststehen“ ist selten möglich und liefert keine neuen Fakten über das Fremdsystem. Das Risiko sinkt durch Erproben und Rückmeldung, nicht durch Warten.",
   "Richtig: Iteratives Vorgehen prüft Annahmen früh und erhöht die Prognostizierbarkeit, weil jede Iteration Fakten liefert. Falsche Annahmen lassen sich so günstig korrigieren, bevor sie sich in der Architektur verfestigen.",
   "Falsch: Das ist die klassische Falle. Wer erst alles ausarbeitet, holt Feedback zu spät, wenn Korrekturen teuer sind. Gerade bei unsicheren Entscheidungen gehört Feedback an den Anfang – es ist ein Werkzeug des Risikomanagements.",
   "Falsch: Ein Zeitpuffer mildert Terminrisiken im Projekt, ändert aber nichts am Risiko der Architekturentscheidung selbst. Er ersetzt keine Überprüfung der Annahmen am Fremdsystem.",
   "Richtig: Systematisch eingeholtes Feedback – geplante Reviews, Demos, Prototypen mit Stakeholdern – deckt Missverständnisse und Fehlannahmen früh auf. Das Curriculum nennt das ausdrücklich: Rückmeldungen nicht dem Zufall überlassen."
  ],
  "explanation": "Das Risiko einer Architekturentscheidung unter Unsicherheit sinkt durch Prototypen, kurze Iterationen und gezielt organisiertes Feedback, weil Annahmen früh durch Fakten ersetzt werden. Fallen: Entscheidungen bis zur Vollständigkeit aufschieben, erst fertig ausarbeiten und dann fragen oder einen Zeitpuffer als Antwort auf ein Entscheidungsrisiko verstehen."
 },
 {
  "id": "c3q81",
  "chapter": 3,
  "lz": "LZ 03-01",
  "r": "R1",
  "type": "multi",
  "q": "Für ein Buchungsportal ist die Änderbarkeit das wichtigste Qualitätsziel: Neue Zahlungsanbieter sollen innerhalb weniger Tage angebunden werden können. Gleichzeitig darf die Antwortzeit der Buchung nicht spürbar leiden. Welche Vorgehensweisen sind sinnvoll?",
  "options": [
   "Anbieterspezifische Details hinter einer gemeinsamen Schnittstelle kapseln (ein Adapter je Anbieter).",
   "Die Anbieterlogik direkt an den Stellen einbauen, wo sie gebraucht wird, um Aufrufe über Zwischenschichten zu sparen.",
   "Anbieterauswahl und -konfiguration außerhalb des Fachcodes halten (Konfiguration statt Verzweigungen im Code).",
   "Den Zielkonflikt benennen: Zusätzliche Indirektion verbessert die Änderbarkeit, kann aber Antwortzeit kosten; die Antwortzeit gezielt anhand eines Szenarios prüfen.",
   "Die Antwortzeit hat Vorrang; die Änderbarkeit wird zurückgestellt und später nachgerüstet.",
   "Pro Anbieter eine eigene Kopie des Buchungsablaufs pflegen, damit sich Änderungen nicht gegenseitig beeinflussen.",
   "Die Antwortzeit durch zusätzliche Server absichern; für die Änderbarkeit ist dann nichts weiter zu tun."
  ],
  "correct": [
   0,
   2,
   3
  ],
  "optExpl": [
   "Richtig: Ein neuer Anbieter erfordert dann nur einen neuen Adapter, die übrigen Bausteine bleiben unverändert. Das verbessert die Änderbarkeit gezielt dort, wo sie gefordert ist.",
   "Falsch: Das spart zwar Laufzeit, verstreut aber die Anbieterdetails über das System. Jeder neue Anbieter erzwingt dann Änderungen an vielen Stellen, und das wichtigste Qualitätsziel wird verfehlt.",
   "Richtig: Wenn neue Anbieter über Konfiguration hinzukommen, bleibt der erprobte Fachcode unangetastet. Das verkürzt die Anbindung und senkt das Änderungsrisiko.",
   "Richtig: Architekturentscheidungen verbessern meist eine Qualität auf Kosten einer anderen. Wer den Konflikt benennt und die kritische Qualität gezielt überprüft, kann Abwägung und Risiko gegenüber Stakeholdern begründen.",
   "Falsch: Die Aufgabenstellung nennt die Änderbarkeit als wichtigstes Ziel. Sie später nachzurüsten bedeutet in der Regel teure Eingriffe in bereits gewachsene Strukturen.",
   "Falsch: Kopien entkoppeln scheinbar, vervielfachen aber den Pflegeaufwand: Jede Änderung am Buchungsablauf muss in allen Kopien nachgezogen werden. Das verschlechtert die Änderbarkeit.",
   "Falsch: Zusätzliche Hardware kann die Antwortzeit stützen, sagt aber nichts über die Änderbarkeit aus. Beide Qualitäten brauchen eigene Entscheidungen."
  ],
  "explanation": "Wer ein Qualitätsziel erreichen will, wählt gezielt Entscheidungen dafür (Kapselung, Konfiguration) und schätzt ein, welche andere Qualität sie kosten kann. Fallen: Streuen der Anbieterlogik, Kopien des Ablaufs, Zurückstellen des Hauptziels oder Hardware als Antwort auf ein Strukturproblem."
 },
 {
  "id": "k37",
  "chapter": 3,
  "lz": "LZ 03-01",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Verbessert die jeweilige Entscheidung vor allem die Änderbarkeit oder die Leistungseffizienz?",
  "categories": [
   "Verbessert vor allem die Änderbarkeit",
   "Verbessert vor allem die Leistungseffizienz"
  ],
  "rows": [
   {
    "text": "Fachliche Logik in austauschbare Module mit stabilen Schnittstellen schneiden.",
    "cat": 0
   },
   {
    "text": "Häufig gelesene Daten im Hauptspeicher zwischenspeichern.",
    "cat": 1
   },
   {
    "text": "Konfigurierbare Regeln statt fest codierter Verzweigungen verwenden.",
    "cat": 0
   },
   {
    "text": "Rechenintensive Berichte vorab berechnen statt bei jeder Anfrage.",
    "cat": 1
   },
   {
    "text": "Abhängigkeiten über Schnittstellen statt über konkrete Klassen herstellen.",
    "cat": 0
   }
  ],
  "rowExpl": [
   "Ein Schnitt in austauschbare Module mit stabilen Schnittstellen hält Änderungen lokal. Das verbessert die Änderbarkeit, nicht primär die Laufzeit; zusätzliche Indirektion kann sogar Laufzeit kosten.",
   "Häufig gelesene Daten im Hauptspeicher zu halten spart wiederholte teure Zugriffe. Das verbessert die Leistungseffizienz, kostet aber Komplexität und birgt Konsistenzrisiko.",
   "Konfigurierbare Regeln lassen sich ändern, ohne den Code anzufassen. Das erhöht die Änderbarkeit und zielt nicht auf die Laufzeit.",
   "Vorab berechnete Berichte vermeiden Rechenaufwand bei jeder Anfrage. Das verbessert die Leistungseffizienz, erhöht aber die Komplexität und das Risiko veralteter Daten.",
   "Abhängigkeiten über Schnittstellen statt konkrete Klassen erleichtern späteren Austausch von Implementierungen. Das verbessert die Änderbarkeit; die Indirektion kann Laufzeit kosten."
  ],
  "explanation": "Modulschnitt, Konfiguration und Abhängigkeiten über Schnittstellen erleichtern spätere Änderungen. Caching und Vorberechnung verbessern die Leistungseffizienz. Beide Gruppen haben einen Preis: Mehr Indirektion kann Laufzeit kosten, Caches und Vorberechnung erhöhen Komplexität und Konsistenzrisiko."
 },
 {
  "id": "c3q82",
  "chapter": 3,
  "lz": "LZ 03-01",
  "r": "R1",
  "type": "multi",
  "q": "Ein Online-Banking-Portal verlangt künftig bei jeder Anmeldung eine Zwei-Faktor-Authentifizierung. Welche Aussagen zu den Auswirkungen dieser Entscheidung auf die Qualitäten treffen zu?",
  "options": [
   "Die Entscheidung wirkt sich auf die Sicherheit aus, andere Qualitäten bleiben unberührt.",
   "Die Sicherheit verbessert sich, weil gestohlene Passwörter allein nicht mehr ausreichen.",
   "Die Benutzbarkeit kann leiden, weil jede Anmeldung einen zusätzlichen Schritt erfordert.",
   "Die Entscheidung verbessert zugleich Sicherheit und Benutzbarkeit, weil Nutzer:innen sich sicherer fühlen.",
   "Das Team sollte die Abwägung samt Alternativen (z. B. zusätzliche Prüfung nur bei auffälligen Anmeldungen) mit den Stakeholdern besprechen und festhalten.",
   "Die Entscheidung betrifft vor allem die Portabilität des Systems."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Falsch: Qualitäten beeinflussen sich gegenseitig. Das Curriculum nennt Sicherheit gegenüber Benutzbarkeit ausdrücklich als typische Abwägung.",
   "Richtig: Ein zweiter Faktor erschwert den Missbrauch gestohlener Zugangsdaten deutlich. Das ist die beabsichtigte Verbesserung.",
   "Richtig: Mehr Sicherheit bedeutet hier mehr Aufwand für Nutzer:innen. Das ist der klassische Zielkonflikt zwischen Sicherheit und Benutzbarkeit.",
   "Falsch: Ein subjektives Sicherheitsgefühl ersetzt keinen messbaren Nutzen für die Benutzbarkeit. Der zusätzliche Schritt bleibt eine Hürde.",
   "Richtig: Abwägungen zwischen Qualitäten sind Entscheidungen der Stakeholder, nicht allein der Architektur. Alternativen und ihre Folgen machen die Entscheidung nachvollziehbar.",
   "Falsch: Portabilität hängt vom Verhältnis zu Plattformen und Umgebungen ab, nicht vom Anmeldeverfahren. Die relevanten Qualitäten sind Sicherheit und Benutzbarkeit."
  ],
  "explanation": "Eine Entscheidung verbessert meist eine Qualität und kostet eine andere. Hier steigt die Sicherheit, die Benutzbarkeit kann sinken; die Abwägung gehört samt Alternativen zu den Stakeholdern. Fallen: Entscheidungen isoliert sehen, einen Gewinn für beide Qualitäten annehmen oder die falsche Qualität betrachten."
 },
 {
  "id": "c3q83",
  "chapter": 3,
  "lz": "LZ 03-01",
  "r": "R1",
  "type": "multi",
  "q": "Ein Team will sein System über ein generisches, zur Laufzeit konfigurierbares Regelwerk sehr flexibel machen. Welche Aussagen zur Abwägung treffen zu?",
  "options": [
   "Die Laufzeitflexibilität steigt, weil Regeln ohne neue Auslieferung geändert werden können.",
   "Die Wartbarkeit kann sinken, weil Verhalten schwerer nachvollzogen und getestet werden kann.",
   "Mehr Flexibilität macht das System in der Regel auch wartbarer.",
   "Risiken wie Fehlkonfiguration und höherer Testaufwand sollten benannt und gegenüber den Stakeholdern kommuniziert werden.",
   "Abwägungen zwischen Qualitäten betreffen sicherheitskritische Systeme; bei anderen Systemen sind sie vernachlässigbar."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Richtig: Regeln lassen sich im Betrieb anpassen. Das ist der angestrebte Nutzen der Entscheidung.",
   "Richtig: Das Curriculum nennt Laufzeitflexibilität gegenüber Wartbarkeit als typische Abwägung. Konfigurierbares Verhalten steckt nicht mehr im Code und ist schwerer zu überblicken.",
   "Falsch: Qualitäten verbessern sich nicht automatisch gemeinsam. Gerade bei Flexibilität droht ein Verlust an Verständlichkeit und Testbarkeit.",
   "Richtig: Zur Verantwortung gehört, mögliche Abwägungen und die zugehörigen Risiken zu identifizieren und zu kommunizieren, bevor die Entscheidung fällt.",
   "Falsch: Zielkonflikte zwischen Qualitäten entstehen in jedem System, zum Beispiel zwischen Speicherbedarf und Leistungseffizienz oder Konfigurierbarkeit und Zuverlässigkeit."
  ],
  "explanation": "Mehr Laufzeitflexibilität kann zulasten der Wartbarkeit gehen; Fehlkonfiguration und Testaufwand sind die zugehörigen Risiken, die man benennt und kommuniziert. Fallen: Qualitäten als unabhängig betrachten oder Abwägungen auf Sonderfälle beschränken."
 },
 {
  "id": "c3q84",
  "chapter": 3,
  "lz": "LZ 03-01",
  "r": "R1",
  "type": "multi",
  "q": "Für ein internes Auftragssystem gilt: 200 gleichzeitige Nutzer:innen, Antwortzeit unter 2 Sekunden bei der Auftragssuche, Betrieb im Konzernrechenzentrum mit festen Technologievorgaben, ein Team aus sechs Entwickler:innen. Was sollte ein Architekturvorschlag berücksichtigen, damit er geeignet ist, die Anforderungen zu erfüllen?",
  "options": [
   "Die Qualitätsanforderungen (z. B. Last und Antwortzeit) als Treiber für Entwurfsentscheidungen nutzen.",
   "Den Entwurf an den aktuell beliebtesten Technologien ausrichten, damit er zukunftssicher wirkt.",
   "Die Technologievorgaben des Rechenzentrums und die Teamgröße als Randbedingungen einbeziehen.",
   "Die funktionalen Anforderungen genügen; Last und Antwortzeit lassen sich nach der Implementierung optimieren.",
   "Einschätzen, ob und wie sicher die Ziele erreichbar sind, und Unsicheres früh prüfen (z. B. per Lasttest-Prototyp).",
   "Die Technologievorgaben ignorieren, wenn das Team eine technisch elegantere Lösung kennt."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Architekturaktivitäten sollen davon geleitet werden, spezifische Qualitäten zu erreichen. Last und Antwortzeit sind hier die messbaren Ziele.",
   "Falsch: Beliebtheit ist kein Anforderungsbezug. Zudem engen die Technologievorgaben des Rechenzentrums die Auswahl ein.",
   "Richtig: Randbedingungen begrenzen den Lösungsraum. Ein Entwurf, der Betriebsvorgaben oder Teamkapazität ignoriert, ist nicht umsetzbar.",
   "Falsch: Leistungsanforderungen prägen Struktur und Technologiewahl und lassen sich nachträglich nur begrenzt erreichen.",
   "Richtig: Ein Vorschlag ist geeignet, wenn er begründet erwarten lässt, die Anforderungen zu erfüllen. Frühe Prüfung macht aus Annahmen Fakten.",
   "Falsch: Vorgaben sind Randbedingungen. Eine Abweichung ist eine Entscheidung, die man begründet und mit den Verantwortlichen klärt, nicht eine stille Ausnahme."
  ],
  "explanation": "Ein geeigneter Entwurf folgt den Qualitätsanforderungen, respektiert Randbedingungen und prüft Unsicheres früh. Fallen: Trendtechnologie, Beschränkung auf Funktionales, späte Optimierung und das Ignorieren von Vorgaben."
 },
 {
  "id": "c3q85",
  "chapter": 3,
  "lz": "LZ 03-01",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zum qualitätsgetriebenen Architekturentwurf treffen zu?",
  "options": [
   "Eine Qualität stellt sich ein, sobald bewährte Muster verwendet werden.",
   "Architekturaktivitäten sollten sich daran orientieren, spezifische Qualitäten zu erreichen oder zu verbessern.",
   "Die gewünschten Qualitäten werden erst nach der Implementierung festgelegt, wenn man das System kennt.",
   "Für eine Entscheidung sollte eingeschätzt werden, welche Qualitäten sie verbessert und welche sie beeinträchtigen kann.",
   "Qualitätsorientierter Entwurf ist bei kritischen Systemen nötig, bei gewöhnlichen Systemen verzichtbar."
  ],
  "correct": [
   1,
   3
  ],
  "optExpl": [
   "Falsch: Muster sind ein Weg, bestimmte Qualitäten in einem Kontext zu erreichen, aber keine Garantie. Ob sie passen, hängt von Anforderungen und Kontext ab.",
   "Richtig: So beschreibt es das Curriculum: Entwurf ohne Qualitätsbezug bleibt beliebig und lässt sich nicht begründen.",
   "Falsch: Qualitätsziele steuern den Entwurf und müssen früh bekannt sein. Nachträgliches Festlegen verschiebt Risiken in eine Phase, in der Änderungen teuer sind.",
   "Richtig: Entscheidungen haben Nebenwirkungen auf andere Qualitäten. Wer sie abschätzt, kann Abwägungen begründen.",
   "Falsch: Jedes System hat Qualitätsanforderungen, auch wenn sie unausgesprochen bleiben. Bei nicht kritischen Systemen ist der Aufwand lediglich geringer."
  ],
  "explanation": "Entwurf soll Qualitäten gezielt erreichen oder verbessern und abschätzen, welche andere Qualität darunter leiden kann. Fallen: Muster als Garantie, spätes Festlegen der Ziele, Qualitätsorientierung als Sonderfall."
 },
 {
  "id": "c3q86",
  "chapter": 3,
  "lz": "LZ 03-01",
  "r": "R1",
  "type": "multi",
  "q": "Das Management fragt, warum die geplante hochverfügbare Variante des Systems deutlich teurer ist als die einfache. Welche Inhalte gehören in Ihre Antwort als Architekt:in?",
  "options": [
   "Welche Alternativen betrachtet wurden und warum die gewählte Variante gewählt wurde.",
   "Technische Details auf Klassenebene, damit das Management die Komplexität selbst beurteilen kann.",
   "Welche Qualität verbessert wird (Verfügbarkeit) und welche Kosten dafür entstehen.",
   "Die Vorteile in den Vordergrund stellen, damit die Entscheidung nicht infrage gestellt wird.",
   "Welche anderen Qualitäten oder Anforderungen durch die Entscheidung beeinträchtigt werden können.",
   "Die persönliche Vorliebe des Teams für die eingesetzten Technologien.",
   "Welche Risiken bestehen, falls Annahmen (z. B. zur erwarteten Last) nicht zutreffen.",
   "Die Zusage, dass durch die Entscheidung keine Risiken mehr bestehen."
  ],
  "correct": [
   0,
   2,
   4,
   6
  ],
  "optExpl": [
   "Richtig: Nachvollziehbare Entscheidungen nennen Alternativen und Gründe. So können Stakeholder die Abwägung selbst beurteilen.",
   "Falsch: Zielgruppe ist das Management. Klassenebene verdeckt den Kern der Abwägung (Kosten gegen Verfügbarkeit) mehr, als dass sie ihn erklärt.",
   "Richtig: Der Nutzen der Entscheidung muss dem Preis gegenübergestellt werden. Ohne diesen Bezug lässt sich der Mehrpreis nicht bewerten.",
   "Falsch: Wer Nachteile verschweigt, verliert Vertrauen und entzieht Stakeholdern die Entscheidungsgrundlage. Abwägungen und Risiken gehören offen auf den Tisch.",
   "Richtig: Redundanz kann etwa Betriebsaufwand und Komplexität erhöhen. Auch diese Nebenwirkungen gehören zur ehrlichen Abwägung.",
   "Falsch: Vorlieben sind keine tragfähige Begründung. Entscheidungen werden über Anforderungen und Qualitäten begründet.",
   "Richtig: Entscheidungen beruhen auf Annahmen. Wer ihre Unsicherheit und die Folgen benennt, kommuniziert Risiken, wie es das Curriculum verlangt.",
   "Falsch: Eine solche Zusage ist unseriös. Auch hochverfügbare Systeme haben Restrisiken, die man benennen und nicht wegversprechen sollte."
  ],
  "explanation": "Gegenüber Stakeholdern kommuniziert man Alternativen, Nutzen, Preis, Nebenwirkungen und Risiken der Entscheidung. Fallen: Detailtiefe ohne Zielgruppenbezug, Schönfärberei, Vorlieben als Argument und Risikofreiheit als Versprechen."
 },
 {
  "id": "c3q87",
  "chapter": 3,
  "lz": "LZ 03-02",
  "r": "R1",
  "type": "multi",
  "q": "Das Team hat für ein Logistiksystem die Bausteine Auftragsverwaltung, Routenplanung und Tourenabrechnung festgelegt. Die Routenplanung darf von der Auftragsverwaltung nur über eine Schnittstelle genutzt werden. Welche Konsequenzen hat das für den Quellcode?",
  "options": [
   "Die Bausteingrenzen spiegeln sich in der Codestruktur wider (z. B. Module oder Pakete je Baustein).",
   "Die Routenplanung darf intern auf Datenstrukturen der Auftragsverwaltung zugreifen, solange das Ergebnis stimmt.",
   "Zugriffe der Auftragsverwaltung auf die Routenplanung laufen im Code nur über die vereinbarte Schnittstelle.",
   "Die Entscheidung betrifft die Dokumentation; im Quellcode ändert sich nichts.",
   "Verstöße gegen die Abhängigkeitsregel lassen sich im Code prüfen (z. B. mit Abhängigkeitsanalyse).",
   "Die drei Bausteine müssen als jeweils eigenständig deploybare Dienste umgesetzt werden."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Entscheidungen zur Systemzerlegung prägen den Code. Nur wenn die Struktur im Code erkennbar ist, bleibt die Architektur im Quellcode nachvollziehbar.",
   "Falsch: Das umgeht die vereinbarte Schnittstelle und koppelt die Bausteine an interne Details. Spätere Änderungen an der Auftragsverwaltung treffen dann die Routenplanung unbemerkt.",
   "Richtig: Die Regel gilt nur, wenn der Code sie einhält. Sie ist die direkte Konsequenz der Entscheidung für den Quellcode.",
   "Falsch: Eine Architekturentscheidung, die sich nicht im Code niederschlägt, bleibt wirkungslos. Konsequenzen für den Quellcode zu erklären, gehört zur Entwurfsaufgabe.",
   "Richtig: Konsistenz von Quellcode und Architektur zu prüfen gehört zu den Aufgaben von Architekt:innen. Eine klare Regel macht das möglich.",
   "Falsch: Ein Baustein ist kein Verteilungsartefakt. Bausteine lassen sich auch innerhalb einer Anwendung trennen; die Verteilung ist eine eigene Entscheidung."
  ],
  "explanation": "Strukturentscheidungen wirken bis in den Quellcode: Bausteine werden zu Code-Struktur, Schnittstellenregeln zu prüfbaren Abhängigkeitsregeln. Fallen: interne Zugriffe an der Schnittstelle vorbei, Architektur als reine Dokumentation, Baustein gleich Verteilungsartefakt."
 },
 {
  "id": "c3q88",
  "chapter": 3,
  "lz": "LZ 03-02",
  "r": "R1",
  "type": "multi",
  "q": "Ein Versicherer entwirft ein System zur Tarifberechnung. Das Team will die fachlichen Tarifregeln von technischen Aspekten wie Datenbankzugriff und Messaging trennen. Welche Aussagen begründen diese Trennung?",
  "options": [
   "Fachliche Regeln lassen sich ändern und testen, ohne technische Infrastruktur anzufassen oder bereitzustellen.",
   "Technische Bestandteile werden dadurch für das System überflüssig.",
   "Technische Entscheidungen (z. B. das Datenbankprodukt) lassen sich später ändern, ohne die Fachlogik umzuschreiben.",
   "Die Trennung lohnt sich erst bei verteilten Systemen, weil sie sonst Laufzeit kostet.",
   "Fachliche und technische Teams können dadurch unabhängig arbeiten, ohne Schnittstellen abzustimmen."
  ],
  "correct": [
   0,
   2
  ],
  "optExpl": [
   "Richtig: Fachlogik ohne Infrastrukturbezug ist leichter zu verstehen, zu ändern und isoliert zu testen.",
   "Falsch: Die Trennung verlagert technische Aspekte in eigene Bausteine, sie schafft sie nicht ab. Datenbankzugriff und Messaging werden weiterhin gebraucht.",
   "Richtig: Die Fachlogik hängt nicht von technischen Details ab, daher bleibt sie bei technischen Änderungen stabil.",
   "Falsch: Die Trennung ist eine logische Strukturierung und nicht an Verteilung gebunden. Der Laufzeitaufwand ist meist gering gegenüber dem Gewinn an Änderbarkeit.",
   "Falsch: Auch getrennte Bestandteile müssen über Schnittstellen zusammenarbeiten. Diese Schnittstellen müssen abgestimmt und stabil gehalten werden."
  ],
  "explanation": "Die Trennung fachlicher und technischer Bestandteile macht Fachlogik änderbar und testbar und erlaubt technische Änderungen ohne Eingriff in die Fachlogik. Fallen: Trennung als Abschaffung der Technik, als Frage der Verteilung oder als Ersatz für Schnittstellenabstimmung."
 },
 {
  "id": "c3q89",
  "chapter": 3,
  "lz": "LZ 03-02",
  "r": "R1",
  "type": "multi",
  "q": "Sie verfeinern die Architektur eines Warenwirtschaftssystems schrittweise vom Systemkontext über die erste Bausteinebene bis zu feineren Ebenen. Welche Aussagen zu diesem Vorgehen treffen zu?",
  "options": [
   "Auf jeder Ebene werden Bausteine zunächst als Blackbox beschrieben; bei Bedarf folgt ihre Whitebox auf der nächsten Ebene.",
   "Die Bausteine werden unabhängig von Risiko und Komplexität auf dieselbe Tiefe verfeinert, damit die Dokumentation einheitlich wirkt.",
   "Riskante oder komplexe Bausteine werden früher und tiefer verfeinert als einfache.",
   "Man beginnt bei den Klassen und fasst sie schrittweise zu größeren Bausteinen zusammen.",
   "Die Verfeinerung kann enden, sobald Bausteine so klar spezifiziert sind, dass Teams sie umsetzen können.",
   "Die Whitebox eines Bausteins ersetzt seine Blackbox-Beschreibung."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: So entsteht eine Hierarchie, in der jede Ebene verständlich bleibt. Die Blackbox-Beschreibung bleibt dabei erhalten.",
   "Falsch: Gleiche Tiefe erzeugt Aufwand dort, wo er wenig bringt. Verfeinert wird so weit, wie es für Verständnis, Umsetzung und Risikobeherrschung nötig ist.",
   "Richtig: Dort liegen die größten Unsicherheiten. Frühes Verfeinern macht Risiken sichtbar, solange Korrekturen noch günstig sind.",
   "Falsch: Das ist ein Bottom-up-Vorgehen. Schrittweise Verfeinerung geht umgekehrt vom Groben zum Feinen.",
   "Richtig: Ziel der Verfeinerung ist eine ausreichende Spezifikation, nicht maximale Detailtiefe.",
   "Falsch: Beide Sichten ergänzen sich: Die Blackbox dient Nutzer:innen des Bausteins, die Whitebox erklärt sein Inneres."
  ],
  "explanation": "Schrittweise Verfeinerung geht vom Groben zum Feinen, beschreibt Bausteine je Ebene als Blackbox und verfeinert nach Bedarf, vor allem bei Risiko und Komplexität. Fallen: gleiche Tiefe überall, Bottom-up als Verfeinerung, Whitebox statt Blackbox."
 },
 {
  "id": "c3q90",
  "chapter": 3,
  "lz": "LZ 03-02",
  "r": "R1",
  "type": "multi",
  "q": "Das Team wählt für ein System mit hohen Verfügbarkeitsanforderungen ein neues, kaum erprobtes Framework und eine einzelne zentrale Datenbank. Welche Aussagen zu den Risiken dieser Entscheidungen treffen zu?",
  "options": [
   "Die zentrale Datenbank ist ein möglicher Single Point of Failure für die Verfügbarkeit.",
   "Eine zentrale Datenbank vereinfacht den Betrieb und senkt dadurch die Verfügbarkeitsanforderungen.",
   "Fehlende Erfahrung mit dem Framework kann zu unerwartetem Verhalten und Fehlern im Betrieb führen.",
   "Das Framework betrifft die Entwicklungsgeschwindigkeit, nicht die Erreichung der Qualitätsanforderungen.",
   "Risiken von Entscheidungen lassen sich erst im Betrieb bewerten und gehören daher nicht in den Entwurf."
  ],
  "correct": [
   0,
   2
  ],
  "optExpl": [
   "Richtig: Fällt die einzelne Datenbank aus, steht das System. Das gefährdet direkt das geforderte Qualitätsziel.",
   "Falsch: Einfacherer Betrieb ändert die Anforderungen nicht. Die Anforderung bleibt bestehen, und die Entscheidung erschwert ihre Erfüllung.",
   "Richtig: Unreife Technologie erhöht die Wahrscheinlichkeit von Fehlern, die man erst spät bemerkt.",
   "Falsch: Technologieentscheidungen wirken auf Qualitäten wie Verfügbarkeit, Leistung und Wartbarkeit. Sie sind keine reine Frage der Produktivität.",
   "Falsch: Gerade im Entwurf sollen Risiken von Architekturentscheidungen identifiziert werden, solange man noch gegensteuern kann."
  ],
  "explanation": "Im Entwurf werden Risiken der Entscheidungen identifiziert: Hier der Single Point of Failure und die mangelnde Erfahrung mit dem Framework. Fallen: Vereinfachung als Senkung der Anforderung, Technologie als reine Produktivitätsfrage, Risikobewertung erst im Betrieb."
 },
 {
  "id": "k38",
  "chapter": 3,
  "lz": "LZ 03-02",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Ein Team zerlegt ein Bestellsystem. Ist der jeweilige Baustein vorrangig ein fachlicher oder ein technischer Bestandteil?",
  "categories": [
   "Fachlicher Bestandteil",
   "Technischer Bestandteil"
  ],
  "rows": [
   {
    "text": "Rabattberechnung für Bestellungen.",
    "cat": 0
   },
   {
    "text": "Datenzugriffsschicht, die Domänenobjekte auf Datenbanktabellen abbildet.",
    "cat": 1
   },
   {
    "text": "Lagerverwaltung mit Bestandsführung.",
    "cat": 0
   },
   {
    "text": "Adapter zur Anbindung eines Message-Brokers.",
    "cat": 1
   },
   {
    "text": "Warenkorb mit Regeln für Mengen und Preise.",
    "cat": 0
   }
  ],
  "rowExpl": [
   "Rabattberechnung ist Fachlogik des Bestellwesens. Sie hängt vom Geschäft ab, nicht von Infrastruktur, und ist deshalb ein fachlicher Bestandteil.",
   "Eine Datenzugriffsschicht, die Domänenobjekte auf Tabellen abbildet, löst ein Infrastrukturproblem. Sie ist technisch, auch wenn sie Fachobjekte transportiert.",
   "Lagerverwaltung mit Bestandsführung bildet einen Geschäftsbereich ab und ist damit ein fachlicher Bestandteil, kein reiner Technikbaustein.",
   "Ein Adapter zur Anbindung eines Message-Brokers kapselt Infrastruktur und enthält keine Fachlogik. Er ist ein technischer Bestandteil.",
   "Ein Warenkorb mit Regeln für Mengen und Preise bildet Geschäftsregeln ab. Das macht ihn zu einem fachlichen Bestandteil und nicht zu einem technischen."
  ],
  "explanation": "Rabatte, Lagerbestand und Warenkorbregeln sind fachliche Bestandteile; Datenzugriff und Broker-Adapter sind technisch. Die Trennung beider Arten macht Fachlogik änderbar und von Infrastrukturentscheidungen unabhängig."
 },
 {
  "id": "c4q42",
  "chapter": 4,
  "lz": "LZ 04-06",
  "r": "R1",
  "type": "multi",
  "q": "Die Schnittstelle eines Bausteins wird von drei weiteren Teams genutzt und soll um zusätzliche Felder erweitert werden. Welche Dokumentationsmaßnahmen helfen, die nutzenden Teams nicht zu überraschen?",
  "options": [
   "Änderungen an der Schnittstellenbeschreibung versionieren und den Änderungsverlauf nachvollziehbar halten.",
   "Den Quellcode ändern und die Beschreibung bei Gelegenheit nachziehen.",
   "In der Beschreibung festhalten, ob die Erweiterung kompatibel ist (z. B. optionale Felder).",
   "Die Beschreibung der bisherigen Version löschen, damit niemand veraltete Angaben nutzt.",
   "Die betroffenen Teams frühzeitig über die geplante Änderung informieren.",
   "Interne Implementierungsdetails ergänzen, damit die Änderung besser erklärbar ist."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Nutzende Teams müssen erkennen können, welche Version sie verwenden und was sich geändert hat.",
   "Falsch: Eine Beschreibung, die der Implementierung hinterherläuft, verliert ihren Wert als Vertrag. Nutzende Teams verlassen sich auf sie.",
   "Richtig: Kompatibilitätsaussagen entscheiden, ob Nutzer:innen anpassen müssen. Sie gehören deshalb zur Schnittstellenbeschreibung.",
   "Falsch: Solange Teams die alte Version einsetzen, brauchen sie deren Beschreibung. Besser ist, Versionen zu kennzeichnen und Abkündigungen anzukündigen.",
   "Richtig: Frühe Information gibt Teams Zeit zur Anpassung und gehört zur Kommunikation von Schnittstellenänderungen.",
   "Falsch: Interna binden Nutzer:innen an Details, die sich ändern dürfen. Eine Schnittstellenbeschreibung legt Außenverhalten fest, nicht die Implementierung."
  ],
  "explanation": "Schnittstellenänderungen werden versioniert, auf Kompatibilität bewertet und früh kommuniziert; die Beschreibung bleibt aktuell und beschreibt das Außenverhalten. Fallen: nachlaufende Doku, Löschen alter Versionen, Interna als Erklärung."
 },
 {
  "id": "c4q43",
  "chapter": 4,
  "lz": "LZ 04-06",
  "r": "R1",
  "type": "multi",
  "q": "Baustein A nutzt eine Schnittstelle, die Baustein B anbietet. Welche Aussagen zur Dokumentation dieser Schnittstellen treffen zu?",
  "options": [
   "Die Blackbox-Beschreibung eines Bausteins nennt seine angebotenen und seine benötigten Schnittstellen.",
   "Benötigte Schnittstellen gehören erst in die Whitebox-Beschreibung.",
   "Die Verbindung zwischen der benötigten Schnittstelle von A und der angebotenen von B sollte erkennbar sein, etwa in der Bausteinsicht.",
   "Es reicht, die Implementierungsklasse von B anzugeben; die Schnittstelle ergibt sich aus ihrem Code.",
   "Weicht die Erwartung von A an die Bedeutung einer Operation von der Beschreibung von B ab, sollte das früh geklärt werden.",
   "Angebotene Schnittstellen müssen dokumentiert werden; benötigte lassen sich daraus ableiten."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Beide Richtungen gehören zur Außensicht eines Bausteins. Erst zusammen zeigen sie, was der Baustein leistet und wovon er abhängt.",
   "Falsch: Abhängigkeiten zu anderen Bausteinen sind für Nutzer:innen und Architektur relevant und gehören in die Außensicht.",
   "Richtig: So wird die Abhängigkeitsrichtung sichtbar. Das hilft, Auswirkungen von Änderungen an der Schnittstelle abzuschätzen.",
   "Falsch: Dann bleibt unklar, was zugesichert ist und was nur zufällig so implementiert wurde. Schnittstelle und Implementierung sind zu trennen.",
   "Richtig: Die Schnittstellenbeschreibung ist die gemeinsame Grundlage beider Seiten. Abweichungen in der Semantik führen sonst erst bei der Integration zu Fehlern.",
   "Falsch: Aus den angebotenen Schnittstellen eines Bausteins lässt sich nicht ableiten, was er selbst von anderen benötigt."
  ],
  "explanation": "Die Außensicht eines Bausteins umfasst angebotene und benötigte Schnittstellen; ihre Verbindung und die vereinbarte Bedeutung sollten sichtbar und abgestimmt sein. Fallen: benötigte Schnittstellen in der Whitebox verstecken, Implementierungsklasse als Schnittstelle."
 },
 {
  "id": "c4q44",
  "chapter": 4,
  "lz": "LZ 04-06",
  "r": "R1",
  "type": "multi",
  "q": "In welchen Sichten der Architekturdokumentation tauchen Schnittstellen typischerweise auf?",
  "options": [
   "In der Kontextsicht als Schnittstellen zu Nachbarsystemen und Benutzer:innen.",
   "In der Laufzeitsicht, weil Schnittstellen erst zur Laufzeit existieren.",
   "In der Bausteinsicht als angebotene und benötigte Schnittstellen der Bausteine.",
   "In der Verteilungssicht ersetzen Schnittstellen die Knoten.",
   "In der Verteilungssicht als Kanäle und Protokolle zwischen Knoten.",
   "Schnittstellen werden außerhalb der Sichten in separaten Dokumenten beschrieben."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Die Kontextsicht zeigt die externen Schnittstellen des Systems. Sie ist der übliche Einstieg in die Schnittstellendokumentation.",
   "Falsch: Schnittstellen sind strukturelle Bestandteile und erscheinen in der Bausteinsicht. Die Laufzeitsicht zeigt, wie sie in Abläufen genutzt werden.",
   "Richtig: Dort wird sichtbar, welche Bausteine über welche Schnittstellen zusammenhängen.",
   "Falsch: Die Verteilungssicht zeigt Knoten, Artefakte und Kanäle. Schnittstellen ersetzen dort nichts.",
   "Richtig: Kanäle beschreiben, wie Knoten kommunizieren, z. B. über welches Protokoll. Das ergänzt die fachliche Schnittstelle um technische Aspekte.",
   "Falsch: Die Sichten zeigen Schnittstellen im Kontext der Architektur. Ausführliche Beschreibungen können zusätzlich separat stehen."
  ],
  "explanation": "Schnittstellen erscheinen in der Kontextsicht (extern), der Bausteinsicht (angeboten/benötigt) und der Verteilungssicht (Kanäle, Protokolle). Fallen: Schnittstellen als reines Laufzeitthema, als Ersatz für Knoten oder nur in Separatdokumenten."
 },
 {
  "id": "k39",
  "chapter": 4,
  "lz": "LZ 04-06",
  "r": "R2",
  "type": "k",
  "points": 2,
  "q": "Welche Aussage zur Dokumentation trifft besonders auf externe bzw. interne Schnittstellen zu?",
  "categories": [
   "Eher externe Schnittstelle",
   "Eher interne Schnittstelle"
  ],
  "rows": [
   {
    "text": "Versionierung und Regeln zur Ankündigung von Änderungen sind festzuhalten, weil nicht alle Nutzer:innen bekannt sind.",
    "cat": 0
   },
   {
    "text": "Das Team kennt die Nutzer:innen und kann Änderungen kurzfristig abstimmen; eine knappe Beschreibung im Repository reicht oft aus.",
    "cat": 1
   },
   {
    "text": "Fehlerverhalten und Qualitätszusagen (z. B. Antwortzeit) werden als Vertrag für Außenstehende beschrieben.",
    "cat": 0
   },
   {
    "text": "Die Beschreibung stützt sich stärker auf Bausteinbeziehungen und die Richtung von Abhängigkeiten.",
    "cat": 1
   },
   {
    "text": "Beispiele und Einstiegshilfen unterstützen Nutzer:innen ohne Projektwissen.",
    "cat": 0
   }
  ],
  "rowExpl": [
   "Bei externen Schnittstellen sind nicht alle Nutzer:innen bekannt, deshalb müssen Versionierung und Regeln zur Ankündigung von Änderungen festgehalten werden. Intern lässt sich das kurzfristig abstimmen.",
   "Intern kennt das Team die Nutzer:innen und stimmt Änderungen direkt ab. Deshalb reicht oft eine knappe Beschreibung im Repository; formeller Vertragsaufwand wie bei externen Schnittstellen ist nicht nötig.",
   "Wer außerhalb des Projekts steht, braucht Fehlerverhalten und Qualitätszusagen als verlässlichen Vertrag. Das ist bei externen Schnittstellen besonders wichtig, intern spricht man sich direkt ab.",
   "Interne Schnittstellen beschreibt man stärker über Bausteinbeziehungen und die Richtung von Abhängigkeiten. Für externe Nutzer:innen steht der Vertrag im Vordergrund, nicht die Struktur dahinter.",
   "Externe Nutzer:innen haben kein Projektwissen und sind auf Beispiele und Einstiegshilfen angewiesen. Intern lässt sich Wissen im Team direkt weitergeben, deshalb gilt das eher für externe Schnittstellen."
  ],
  "explanation": "Extern genutzte Schnittstellen brauchen die formellere Beschreibung als Vertrag mit Versionierung, Qualitätszusagen und Einstiegshilfen. Bei internen Schnittstellen sind Nutzer:innen bekannt, und Abstimmung ist einfacher. Das Curriculum fordert für beide Dokumentation und eine unterschiedliche Behandlung."
 },
 {
  "id": "c4q45",
  "chapter": 4,
  "lz": "LZ 04-07",
  "r": "R2",
  "type": "multi",
  "q": "Ein Team dokumentiert das Persistenzkonzept eines Systems mit zehn Bausteinen. Bisher steht Persistenz verstreut in den Beschreibungen einzelner Bausteine. Welche Maßnahmen sind geeignet?",
  "options": [
   "Das Konzept einmal zentral beschreiben (Ziele, Lösungsansatz, Regeln) und aus den Bausteinbeschreibungen darauf verweisen.",
   "Persistenz in den Beschreibungen der einzelnen Bausteine erneut ausführlich beschreiben, damit sie für sich lesbar bleiben.",
   "Die Gründe für den gewählten Ansatz gegenüber Alternativen festhalten.",
   "Die Datenbankprodukte und ihre Versionsnummern auflisten.",
   "Beschreiben, wie Bausteine das Konzept nutzen sollen (Regeln, Beispiele), damit es einheitlich angewendet wird.",
   "Auf Dokumentation verzichten, weil der Quelltext die Persistenz ohnehin zeigt."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Ein Querschnittskonzept betrifft viele Bausteine und wird deshalb einmal beschrieben. Verweise vermeiden Wiederholung und Widersprüche.",
   "Falsch: Wiederholungen driften auseinander und erhöhen den Pflegeaufwand. Besser ist ein zentrales Konzept mit Verweisen.",
   "Richtig: Begründungen machen das Konzept nachvollziehbar und verhindern, dass später dieselbe Diskussion neu geführt wird.",
   "Falsch: Das beschreibt Technologien, aber nicht das Konzept: Regeln, Muster und Begründungen fehlen.",
   "Richtig: Ein Querschnittskonzept entfaltet seinen Wert durch einheitliche Anwendung. Regeln und Beispiele machen sie leichter.",
   "Falsch: Der Code zeigt, wie etwas umgesetzt ist, nicht warum und nach welchen Regeln. Das Konzept lässt sich daraus nur mühsam rekonstruieren."
  ],
  "explanation": "Querschnittskonzepte werden zentral dokumentiert (Lösungsansatz, Regeln, Begründung, Anwendung) und aus den Bausteinen referenziert. Fallen: Wiederholung in jedem Baustein, Technologielisten, Verzicht auf Dokumentation."
 },
 {
  "id": "k40",
  "chapter": 4,
  "lz": "LZ 04-07",
  "r": "R2",
  "type": "k",
  "points": 2,
  "q": "Gehört die Information zentral in das dokumentierte Querschnittskonzept oder in die Beschreibung des jeweiligen Bausteins?",
  "categories": [
   "Zentral im Querschnittskonzept",
   "In der jeweiligen Bausteinbeschreibung"
  ],
  "rows": [
   {
    "text": "Regeln, wie Fehler im ganzen System klassifiziert und protokolliert werden.",
    "cat": 0
   },
   {
    "text": "Welche Fehlerarten ein einzelner Baustein tatsächlich auslösen kann.",
    "cat": 1
   },
   {
    "text": "Begründung, warum ein einheitliches Logformat gewählt wurde.",
    "cat": 0
   },
   {
    "text": "Welche Tabellen ein bestimmter Baustein für sich persistiert.",
    "cat": 1
   },
   {
    "text": "Vorgaben zu Transaktionsgrenzen für alle fachlichen Bausteine.",
    "cat": 0
   }
  ],
  "rowExpl": [
   "Regeln, die für das ganze System gelten, gehören zentral ins Querschnittskonzept. Sie sind kein Thema eines einzelnen Bausteins, deshalb nicht in dessen Beschreibung.",
   "Welche Fehlerarten ein einzelner Baustein auslösen kann, betrifft nur diesen Baustein. Das steht in dessen Beschreibung und verweist bei Bedarf auf das Konzept.",
   "Die Begründung für ein einheitliches Logformat gilt übergreifend und gehört zum Konzept. In jeder Bausteinbeschreibung wiederholt, würde sie mehrfach gepflegt werden müssen.",
   "Die Tabellen, die ein bestimmter Baustein für sich persistiert, betreffen nur diesen Baustein. Deshalb gehören sie in seine Beschreibung und nicht ins Querschnittskonzept.",
   "Vorgaben zu Transaktionsgrenzen für alle fachlichen Bausteine sind übergreifend. Sie gehören zentral ins Querschnittskonzept, statt in jedem Baustein einzeln zu stehen."
  ],
  "explanation": "Übergreifende Regeln, Begründungen und Vorgaben gehören ins zentrale Querschnittskonzept. Was nur einen Baustein betrifft, steht in dessen Beschreibung und verweist bei Bedarf auf das Konzept."
 },
 {
  "id": "c4q46",
  "chapter": 4,
  "lz": "LZ 04-07",
  "r": "R2",
  "type": "multi",
  "q": "Das Team hat ein UI-Konzept (einheitliche Bedienung, einheitliche Fehlermeldungen) erarbeitet. Wie sollte es dieses Querschnittskonzept dokumentieren und kommunizieren?",
  "options": [
   "Als kurze Beschreibung mit Regeln und Beispielen für die Entwickler:innen, die das Konzept umsetzen.",
   "In Code-Kommentaren der Dialogklassen verteilen.",
   "Für Fachbereich und Product-Owner verständlich darstellen, was das Konzept für die Bedienung bedeutet.",
   "Einmalig per E-Mail verschicken und danach nicht mehr pflegen.",
   "Bei Änderungen am Konzept die betroffenen Teams informieren.",
   "Screenshots ohne erläuternde Regeln ablegen."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Entwickler:innen sind die Hauptzielgruppe der Umsetzungsregeln. Beispiele machen die Anwendung greifbar.",
   "Falsch: Verstreute Kommentare erzeugen keinen Überblick und werden von Beteiligten außerhalb des Codes nicht gefunden.",
   "Richtig: Auch Stakeholder außerhalb der Entwicklung sind vom Konzept betroffen. Zielgruppengerechte Kommunikation schafft Verständnis und Akzeptanz.",
   "Falsch: Eine E-Mail ist kein auffindbarer Ort und veraltet unbemerkt. Das Konzept muss dauerhaft zugänglich und aktuell sein.",
   "Richtig: Querschnittskonzepte wirken auf viele Bausteine. Änderungen müssen deshalb dort ankommen, wo das Konzept angewendet wird.",
   "Falsch: Bilder zeigen ein Ergebnis, aber nicht, welche Regeln dahinterstehen und warum. Neue Dialoge lassen sich damit nicht einheitlich gestalten."
  ],
  "explanation": "Ein Querschnittskonzept wird zielgruppengerecht dokumentiert und kommuniziert: Regeln und Beispiele für Entwicklung, verständliche Darstellung für Fachseite, Information bei Änderungen. Fallen: verstreute Kommentare, einmalige Mails, Bilder ohne Regeln."
 },
 {
  "id": "c4q47",
  "chapter": 4,
  "lz": "LZ 04-07",
  "r": "R2",
  "type": "multi",
  "q": "Welche der folgenden Themen sind typische Querschnittsthemen, für die ein Lösungskonzept dokumentiert werden sollte?",
  "options": [
   "Persistenz.",
   "Die Berechnungsformel der Mehrwertsteuer in der Rechnungsstellung.",
   "Einheitliche Bedienung und Gestaltung der Benutzeroberfläche.",
   "Die Reihenfolge der Felder in einem einzelnen Bestellformular.",
   "Verteilung und Integration, z. B. wie Bausteine auf Knoten verteilt kommunizieren.",
   "Die Namenskonvention für Testmethoden eines einzelnen Moduls.",
   "Protokollierung (Logging).",
   "Die Liste der Pflichtfelder eines einzelnen Kundenformulars."
  ],
  "correct": [
   0,
   2,
   4,
   6
  ],
  "optExpl": [
   "Richtig: Datenhaltung betrifft viele Bausteine und steht beispielhaft im Curriculum.",
   "Falsch: Das ist fachliche Logik eines Bausteins, kein übergreifendes Thema.",
   "Richtig: Ein UI-Konzept sorgt für einheitliche Lösungen über viele Dialoge. Es wird im Curriculum als Beispiel genannt.",
   "Falsch: Das ist ein Detail eines einzelnen Dialogs und betrifft nicht viele Bausteine.",
   "Richtig: Wie Bausteine über Knoten hinweg zusammenarbeiten, prägt viele Teile des Systems. Das Curriculum nennt es ausdrücklich.",
   "Falsch: Das betrifft ein einzelnes Modul und ist eine Codierkonvention, kein Lösungskonzept für ein Querschnittsthema.",
   "Richtig: Alle Bausteine protokollieren. Ein einheitliches Konzept legt Format, Ebenen und Zuständigkeiten fest.",
   "Falsch: Das ist Fachlogik eines Dialogs. Ein Querschnittskonzept hingegen regelt, wie Validierung allgemein behandelt wird."
  ],
  "explanation": "Typische Querschnittsthemen sind Persistenz, UI, Verteilung/Integration und Protokollierung; ihr Lösungskonzept wird einmal dokumentiert. Fachliche Einzelheiten und Codierkonventionen einzelner Module sind keine Querschnittsthemen."
 },
 {
  "id": "c1q41",
  "chapter": 1,
  "lz": "LZ 01-04",
  "r": "R1",
  "type": "multi",
  "q": "Im Projekt wird diskutiert, ob für ein neues Reporting-Modul Standardsoftware gekauft oder selbst entwickelt wird. Als Softwarearchitekt:in sollen Sie die Entscheidung vorbereiten. Welche Tätigkeiten gehören dabei zu Ihrer Verantwortung?",
  "options": [
   "Anforderungen und Randbedingungen mit den Stakeholdern klären, die die Entscheidung beeinflussen.",
   "Die Konsequenzen beider Varianten (Qualität, Abhängigkeiten, Risiken) aufzeigen und gegenüber Stakeholdern argumentieren.",
   "Die Entscheidung unabhängig von Projektleitung und Fachbereich treffen und das Ergebnis mitteilen.",
   "Die Umsetzung begleiten und prüfen, ob Quellcode und Architektur konsistent bleiben.",
   "Die alleinige Gesamtverantwortung für Termine und Budget des Projekts übernehmen.",
   "Möglichkeiten für Rückmeldung aufzeigen, z. B. einen Prototyp mit Stakeholdern vor der Entscheidung."
  ],
  "correct": [
   0,
   1,
   3,
   5
  ],
  "optExpl": [
   "Richtig: Anforderungen und Randbedingungen zu klären und zu hinterfragen ist eine Kernaufgabe. Ohne sie fehlt der Entscheidung die Grundlage.",
   "Richtig: Konsequenzen von Architekturentscheidungen zu erkennen, aufzuzeigen und zu vertreten ist ausdrücklich Teil der Verantwortung.",
   "Falsch: Architekt:innen koordinieren ihre Verantwortung mit der Projektleitung und stimmen Verfeinerungen mit den Stakeholdern ab. Ein Alleingang widerspricht dem.",
   "Richtig: Das Begleiten der Umsetzung und das Prüfen der Konsistenz zwischen Code und Architektur gehören zu den Aufgaben, auch nach der Entscheidung.",
   "Falsch: Termine, Budget und Personal verantwortet die Projektleitung bzw. – je nach Vorgehensmodell – andere Rollen. Architekt:innen stimmen sich mit ihnen ab, ersetzen sie aber nicht.",
   "Richtig: Architekt:innen sollen die Notwendigkeit von Iterationen erkennen und Möglichkeiten für Rückmeldung aufzeigen. Ein Prototyp macht Annahmen überprüfbar."
  ],
  "explanation": "Architekt:innen klären Anforderungen, zeigen Konsequenzen auf und argumentieren sie, begleiten die Umsetzung und ermöglichen Rückmeldung; die Gesamtverantwortung für Termine und Budget liegt bei der Projektleitung bzw. je nach Vorgehensmodell bei anderen Rollen. Fallen: Alleinentscheidung und Übernahme der Projektleitung."
 },
 {
  "id": "c1q42",
  "chapter": 1,
  "lz": "LZ 01-04",
  "r": "R1",
  "type": "multi",
  "q": "Die Projektleitung möchte zusagen, dass eine geplante Änderung bis zum Quartalsende umgesetzt wird. Aus Architektursicht gefährdet die Änderung zwei Qualitätsziele. Wie verhalten Sie sich als Architekt:in?",
  "options": [
   "Ich zeige die Konsequenzen für die beiden Qualitätsziele auf und argumentiere sie gegenüber der Projektleitung.",
   "Ich gebe die Zusage, ohne die Folgen zu prüfen, um einen Konflikt zu vermeiden.",
   "Ich lege Alternativen vor (z. B. Umfang reduzieren oder schrittweise umsetzen) und benenne deren Auswirkungen.",
   "Ich lehne die Änderung ab, weil Termine nicht Sache der Architektur sind.",
   "Ich schlage vor, die kritische Annahme früh durch einen Prototyp oder eine Messung zu prüfen.",
   "Ich passe die Qualitätsziele stillschweigend an, damit der Termin hält."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Konsequenzen von Entscheidungen aufzuzeigen und gegenüber Stakeholdern zu vertreten, ist Teil der Verantwortung.",
   "Falsch: Das verschiebt Risiken in die Zukunft und lässt Stakeholder ohne Entscheidungsgrundlage. Probleme sollen benannt werden.",
   "Richtig: Alternativen mit Auswirkungen helfen der Projektleitung, eine fundierte Entscheidung zu treffen. Die Entscheidung über Termine bleibt dort.",
   "Falsch: Architekt:innen koordinieren ihre Verantwortung mit der Projektleitung. Pauschales Ablehnen verweigert diese Koordination.",
   "Richtig: Rückmeldung früh einzuholen reduziert Unsicherheit. Dann kann die Projektleitung auf Fakten statt auf Vermutungen bauen.",
   "Falsch: Qualitätsziele sind mit den Stakeholdern abgestimmte Anforderungen. Sie lassen sich nicht still ändern; eine Änderung ist eine offene Entscheidung."
  ],
  "explanation": "Architekt:innen zeigen Konsequenzen auf, bieten Alternativen und frühe Rückmeldung an und koordinieren sich mit der Projektleitung. Fallen: Zusage ohne Prüfung, pauschale Ablehnung und stille Anpassung von Qualitätszielen."
 },
 {
  "id": "c1q43",
  "chapter": 1,
  "lz": "LZ 01-04",
  "r": "R1",
  "type": "multi",
  "q": "Welche Situationen sind für Softwarearchitekt:innen ein Anlass, eine getroffene Architekturentscheidung zu überprüfen und gegebenenfalls zu überarbeiten?",
  "options": [
   "Eine neue Anforderung wirkt sich auf ein wichtiges Qualitätsziel aus.",
   "Die Dokumentation wirkt formal ordentlich.",
   "Entwickler:innen melden, dass der gewählte Schnittstellenzuschnitt die Umsetzung behindert.",
   "Die Entscheidung liegt schon mehrere Monate zurück.",
   "Ein Prototyp zeigt, dass eine zugrunde gelegte Annahme nicht zutrifft.",
   "Ein Teammitglied wünscht sich moderne Technologie, ohne dass sich ein Bezug zu den Anforderungen ergibt."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Entscheidungen wurden für bestimmte Anforderungen getroffen. Ändern sich diese, kann die Entscheidung ihre Grundlage verlieren.",
   "Falsch: Eine formal ordentliche Dokumentation sagt nichts darüber, ob die Entscheidung noch passt.",
   "Richtig: Rückmeldung aus der Umsetzung ist wertvoll und fließt bei Bedarf in die Architektur ein.",
   "Falsch: Das Alter allein ist kein Grund. Anlass sind veränderte Anforderungen, neue Erkenntnisse oder Rückmeldungen.",
   "Richtig: Faktenbasierte Rückmeldung ersetzt Vermutungen. Trifft eine Annahme nicht zu, muss die darauf beruhende Entscheidung geprüft werden.",
   "Falsch: Ein Wunsch ohne Anforderungsbezug begründet keine Überarbeitung. Entscheidungen werden über Anforderungen und Qualitäten begründet."
  ],
  "explanation": "Anlass zur Überprüfung sind veränderte Anforderungen, Rückmeldungen aus der Umsetzung und neue Fakten, etwa aus Prototypen. Fallen: formal ordentliche Dokumentation, Alter der Entscheidung und Technologiewünsche ohne Anforderungsbezug."
 },
 {
  "id": "k41",
  "chapter": 1,
  "lz": "LZ 01-04",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Gehört die Tätigkeit vorrangig zur Verantwortung der Softwarearchitekt:innen oder zur Gesamtverantwortung der Projektleitung?",
  "categories": [
   "Architekt:in",
   "Projektleitung"
  ],
  "rows": [
   {
    "text": "Systemzerlegung und Bausteinstruktur festlegen.",
    "cat": 0
   },
   {
    "text": "Über Querschnittsthemen wie Persistenz und Kommunikation entscheiden.",
    "cat": 0
   },
   {
    "text": "Gesamtterminplan und Projektbudget verantworten.",
    "cat": 1
   },
   {
    "text": "Konsistenz von Quellcode und Architektur prüfen.",
    "cat": 0
   }
  ],
  "rowExpl": [
   "Die Zerlegung des Systems und die Bausteinstruktur sind Strukturentscheidungen und damit Kernaufgabe der Architekt:innen. Die Projektleitung steuert das Projekt, nicht die Struktur.",
   "Querschnittsthemen wie Persistenz und Kommunikation betreffen viele Bausteine zugleich und sind Architekturentscheidungen. Die Projektleitung trifft sie nicht.",
   "Gesamttermine und Budget liegen in der Gesamtverantwortung der Projektleitung. Architekt:innen arbeiten zu, tragen sie aber nicht, deshalb nicht deren Aufgabe.",
   "Die Konsistenz von Quellcode und Architektur zu prüfen, gehört zu den Aufgaben der Architekt:innen. Die Projektleitung verantwortet dies nicht, sie koordiniert sich nur mit ihnen."
  ],
  "explanation": "Strukturentscheidungen, Querschnittsthemen und die Konsistenz von Code und Architektur gehören zu den Aufgaben der Architekt:innen. Die Gesamtverantwortung für Termine und Budget liegt bei der Projektleitung; beide koordinieren sich."
 },
 {
  "id": "k42",
  "chapter": 1,
  "lz": "LZ 01-06",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Welchem Gegenüber gilt der Beitrag der Architekt:innen vor allem: der Projektleitung oder der Qualitätssicherung/dem Test?",
  "categories": [
   "Projektleitung",
   "Qualitätssicherung / Test"
  ],
  "rows": [
   {
    "text": "Aufwands- und Risikoeinschätzung architekturrelevanter Entscheidungen für Termine und Budget liefern.",
    "cat": 0
   },
   {
    "text": "Qualitätsszenarien als Grundlage für Testfälle und Abnahmekriterien bereitstellen.",
    "cat": 1
   },
   {
    "text": "Abhängigkeiten zwischen Teams und Bausteinen aufzeigen, die den Projektplan beeinflussen.",
    "cat": 0
   },
   {
    "text": "Die Testbarkeit von Bausteinen und Schnittstellen im Entwurf berücksichtigen und mit den Testverantwortlichen abstimmen.",
    "cat": 1
   },
   {
    "text": "Abstimmen, wie Architekturentscheidungen im Projektverlauf mitgeteilt und freigegeben werden.",
    "cat": 0
   }
  ],
  "rowExpl": [
   "Aufwand und Risiken architekturrelevanter Entscheidungen braucht die Projektleitung für Termine und Budget. Für Qualitätssicherung oder Test ist das nicht der Kern des Beitrags.",
   "Qualitätsszenarien machen Qualitätsziele überprüfbar und sind damit Grundlage für Testfälle und Abnahmekriterien. Das nutzen Qualitätssicherung und Test, nicht primär die Projektleitung.",
   "Abhängigkeiten zwischen Teams und Bausteinen beeinflussen den Projektplan, den die Projektleitung steuert. Deshalb liefern Architekt:innen dies der Projektleitung und nicht dem Test.",
   "Die Testbarkeit von Bausteinen und Schnittstellen berücksichtigen Architekt:innen im Entwurf und stimmen sie mit den Testverantwortlichen ab. Der Beitrag richtet sich an Qualitätssicherung und Test.",
   "Wie Architekturentscheidungen mitgeteilt und freigegeben werden, ist eine Abstimmung im Projektablauf mit der Projektleitung. Für Qualitätssicherung und Test steht das nicht im Vordergrund."
  ],
  "explanation": "Der Projektleitung liefern Architekt:innen Aufwand, Risiken, Abhängigkeiten und Abstimmungswege. Der Qualitätssicherung und dem Test liefern sie Qualitätsszenarien und berücksichtigen die Testbarkeit im Entwurf."
 },
 {
  "id": "c1q44",
  "chapter": 1,
  "lz": "LZ 01-06",
  "r": "R1",
  "type": "multi",
  "q": "Für ein neues Informationssystem sollen Betriebsvorgaben früh berücksichtigt werden. Wie arbeiten Sie als Architekt:in mit dem IT-Betrieb zusammen?",
  "options": [
   "Betriebsanforderungen wie Überwachung, Deployment und Ressourcenbedarf früh erfragen und im Entwurf berücksichtigen.",
   "Betriebsfragen erst nach Fertigstellung des Systems klären.",
   "Die Verteilungssicht gemeinsam abstimmen.",
   "Den Betrieb über die Zerlegung des Systems in Bausteine entscheiden lassen.",
   "Konsequenzen von Architekturentscheidungen für den Betrieb aufzeigen.",
   "Betriebsanforderungen ignorieren, weil sie nicht Aufgabe der Architektur sind."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Der IT-Betrieb ist Stakeholder mit eigenen Anliegen. Frühe Abstimmung vermeidet teure Nacharbeit.",
   "Falsch: Dann sind Entscheidungen längst gefallen. Anforderungen des Betriebs lassen sich nachträglich nur teuer berücksichtigen.",
   "Richtig: Die Verteilungssicht zeigt Knoten und Kanäle der Betriebsumgebung. Sie ist eine ideale Gesprächsgrundlage mit dem Betrieb.",
   "Falsch: Strukturentscheidungen gehören zur Verantwortung der Architekt:innen. Der Betrieb liefert Anforderungen und Randbedingungen, entscheidet aber nicht über die Bausteinstruktur.",
   "Richtig: Der Betrieb muss das System laufen lassen. Er sollte früh wissen, was auf ihn zukommt.",
   "Falsch: Betriebsanforderungen beeinflussen Architekturentscheidungen. Der IT-Betrieb ist laut Curriculum ein relevanter Stakeholder der Rolle."
  ],
  "explanation": "Mit dem IT-Betrieb stimmen Architekt:innen Anforderungen, Verteilungssicht und Konsequenzen früh ab, entscheiden aber selbst über die Bausteinstruktur. Fallen: späte Klärung, Entscheidung durch den Betrieb, Ignorieren der Betriebsanforderungen."
 },
 {
  "id": "c1q45",
  "chapter": 1,
  "lz": "LZ 01-06",
  "r": "R1",
  "type": "multi",
  "q": "Ein Hersteller von Steuergeräten plant einen neuen Mikrocontroller. Welche Aussagen zur Zusammenarbeit der Software-Architekt:innen mit der Hardwareentwicklung treffen zu?",
  "options": [
   "Hardware-Randbedingungen wie Speicher und Rechenleistung sollten früh abgestimmt werden.",
   "Die Hardware ist Sache der Hardwareentwicklung; die Softwarearchitektur kann unabhängig davon festgelegt werden.",
   "Architekt:innen sollten aufzeigen, welche Auswirkungen Hardwareentscheidungen auf die Software haben.",
   "Die Zusammenarbeit mit der Hardwareentwicklung betrifft vor allem Informationssysteme in Rechenzentren.",
   "Die Hardwareentwicklung legt die Software-Bausteinstruktur fest."
  ],
  "correct": [
   0,
   2
  ],
  "optExpl": [
   "Richtig: Bei eingebetteten Systemen begrenzt die Hardware den Lösungsraum. Frühe Abstimmung verhindert böse Überraschungen.",
   "Falsch: Gerade bei hardwarenahen Systemen beeinflussen sich Hardware und Software. Das Curriculum nennt Hardwareentwicklung ausdrücklich als Gegenüber.",
   "Richtig: Konsequenzen von Entscheidungen aufzuzeigen und zu argumentieren ist Teil der Rolle, auch gegenüber der Hardwareentwicklung.",
   "Falsch: Das Curriculum nennt die Hardwareentwicklung primär für eingebettete und hardwarenahe Systeme. Informationssysteme haben eher den IT-Betrieb als Gegenüber.",
   "Falsch: Die Struktur der Software gehört in die Verantwortung der Architekt:innen. Hardware liefert Randbedingungen, keine Bausteinstruktur."
  ],
  "explanation": "Bei eingebetteten Systemen stimmen Architekt:innen Hardware-Randbedingungen früh ab und zeigen Auswirkungen von Hardwareentscheidungen auf die Software auf. Fallen: unabhängige Planung, Verwechslung mit dem IT-Betrieb, Hardware bestimmt Softwarestruktur."
 },
 {
  "id": "c1q46",
  "chapter": 1,
  "lz": "LZ 01-06",
  "r": "R1",
  "type": "multi",
  "q": "Das Produktmanagement fordert ein Feature, das einer Vorgabe des Architekturboards zur einheitlichen Technologieplattform widerspricht. Wie verhalten Sie sich als Architekt:in?",
  "options": [
   "Ich zeige die Konsequenzen der Optionen auf (Feature mit Abweichung, Feature innerhalb der Plattform, Verzicht).",
   "Ich setze das Feature wortlos um, weil das Produktmanagement die Priorität bestimmt.",
   "Soll abgewichen werden, begründe ich die Abweichung und stimme sie mit dem Architekturboard ab.",
   "Ich ignoriere die Vorgabe stillschweigend, weil das Feature wichtiger ist.",
   "Ich suche Alternativen, die das Anliegen des Produktmanagements innerhalb der Plattform erfüllen.",
   "Ich lehne das Feature ab, weil das Architekturboard übergeordnet ist.",
   "Ich überlasse die Entscheidung dem Entwicklungsteam."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Konsequenzen zu erkennen und zu vermitteln gehört zur Rolle und hilft beiden Seiten, fundiert zu entscheiden.",
   "Falsch: Dann bleiben Konsequenzen und die Verletzung der Plattformvorgabe unbemerkt. Architekt:innen haben diese Folgen aufzuzeigen.",
   "Richtig: Das Architekturboard ist ein Gegenüber der Rolle. Eine bewusste, begründete Abweichung ist eine Entscheidung, keine stille Ausnahme.",
   "Falsch: Vorgaben werden nicht still umgangen. Das untergräbt Vertrauen und die Plattformstrategie.",
   "Richtig: Ein Anliegen lässt sich oft auf mehrere Arten erfüllen. Alternativen verbinden Fachziel und Vorgabe.",
   "Falsch: Pauschales Ablehnen entzieht sich der Abwägung. Gefragt ist, Anliegen zu verstehen und Optionen mit Folgen aufzuzeigen.",
   "Falsch: Die Abwägung betrifft Produkt und Plattform. Das Entwicklungsteam sollte sie nicht allein tragen; Architekt:innen vermitteln."
  ],
  "explanation": "Zwischen Produktmanagement und Architekturboard zeigen Architekt:innen Konsequenzen und Alternativen auf und stimmen Abweichungen ab. Fallen: wortlose Umsetzung, stilles Ignorieren, pauschale Ablehnung, Delegation der Abwägung."
 },
 {
  "id": "c2q33",
  "chapter": 2,
  "lz": "LZ 02-05",
  "r": "R1",
  "type": "multi",
  "q": "In einem Workshop zur Architektur eines Terminbuchungssystems für Arztpraxen fällt der Satz: „Die Praxen haben natürlich alle schnelles Internet.“ Niemand widerspricht. Wie gehen Sie als Architekt:in damit um?",
  "options": [
   "Die Aussage als Annahme notieren, mit den Stakeholdern verifizieren und das Ergebnis dokumentieren.",
   "Die Aussage gilt als geklärt, weil niemand widersprochen hat.",
   "Prüfen, welche Entwurfsentscheidungen von der Annahme abhängen, und das Risiko bei Nichtzutreffen bewerten.",
   "Die Annahme implizit im Entwurf berücksichtigen (z. B. keine Offline-Funktion vorsehen) und später anpassen, falls es Beschwerden gibt.",
   "Dem Team offen sagen, dass die Annahme ungeprüft ist, damit alle denselben Kenntnisstand haben."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Explizit gemachte Annahmen können geprüft werden. So wird aus einer Vermutung eine belegte Grundlage.",
   "Falsch: Schweigen ist keine Bestätigung. Gerade stillschweigend akzeptierte Annahmen führen später zu Missverständnissen.",
   "Richtig: So lässt sich die Tragweite der Annahme beurteilen und entscheiden, wie viel Absicherung nötig ist.",
   "Falsch: Eine implizite Annahme bleibt für andere unsichtbar. Beschwerden treten dann erst auf, wenn Anpassungen teuer sind.",
   "Richtig: Implizite Annahmen bewirken Missverständnisse zwischen Beteiligten. Transparenz sorgt für einen gemeinsamen Stand."
  ],
  "explanation": "Annahmen werden explizit dargestellt, überprüft und auf ihre Auswirkungen hin bewertet. Fallen: Schweigen als Bestätigung, implizite Berücksichtigung im Entwurf."
 },
 {
  "id": "c2q34",
  "chapter": 2,
  "lz": "LZ 02-05",
  "r": "R1",
  "type": "multi",
  "q": "Zwei Teams entwickeln getrennt voneinander Bausteine, die über eine Schnittstelle zusammenarbeiten sollen. Beide gehen davon aus, dass Zeitangaben stets in UTC übertragen werden, aber niemand hat das festgehalten. Welche Folgen sind typisch für solche impliziten Annahmen?",
  "options": [
   "Die Teams können unterschiedliche Annahmen treffen, ohne es zu merken.",
   "Die Abstimmung wird dadurch beschleunigt, ohne dass Nachteile entstehen.",
   "Fehler zeigen sich oft erst bei der Integration oder im Betrieb, wenn die Korrektur teuer ist.",
   "Bei kleinen Teams sind implizite Annahmen unproblematisch.",
   "Die Annahme sollte als Teil der Schnittstellenbeschreibung explizit festgehalten werden.",
   "Dokumentierte Annahmen erhöhen den Aufwand ohne erkennbaren Nutzen."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Was nicht niedergeschrieben ist, kann von jedem anders verstanden werden. Das ist die Ursache vieler Schnittstellenfehler.",
   "Falsch: Kurzfristig spart es Zeit, die Rechnung folgt aber bei der Integration. Der Aufwand verschiebt sich nur nach hinten.",
   "Richtig: Diskrepanzen bleiben lange unentdeckt, weil jedes Team für sich konsistent ist.",
   "Falsch: Die Teamgröße schützt nicht vor unterschiedlichen Vorstellungen. Hier gibt es sogar zwei Teams mit getrennter Arbeit.",
   "Richtig: Eine explizite Aussage in der Schnittstellenbeschreibung macht die Vereinbarung prüfbar und für alle Beteiligten sichtbar.",
   "Falsch: Der Aufwand ist gering, der Nutzen groß: Missverständnisse werden vermieden, bevor sie Kosten verursachen."
  ],
  "explanation": "Implizite Annahmen führen zu unbemerkt abweichenden Vorstellungen und späten, teuren Fehlern; explizit festgehalten (z. B. in der Schnittstellenbeschreibung) werden sie prüfbar. Fallen: Zeitgewinn ohne Nachteil, Teamgröße als Schutz, Dokumentation als Overhead."
 },
 {
  "id": "k43",
  "chapter": 2,
  "lz": "LZ 02-05",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Handelt es sich um eine explizite Aussage oder um eine implizite Annahme?",
  "categories": [
   "Explizite Aussage",
   "Implizite Annahme"
  ],
  "rows": [
   {
    "text": "Im Anforderungsdokument steht: „Es sind höchstens 500 Nutzer:innen gleichzeitig aktiv (Annahme, mit dem Fachbereich bestätigt).“",
    "cat": 0
   },
   {
    "text": "Die Entwickler:innen gehen davon aus, dass alle Nutzer:innen in derselben Zeitzone arbeiten; aufgeschrieben hat das niemand.",
    "cat": 1
   },
   {
    "text": "Der Entwurf setzt voraus, dass der Partnerdienst fehlgeschlagene Aufrufe selbst wiederholt; erwähnt hat das bisher keiner.",
    "cat": 1
   },
   {
    "text": "In der Architekturdokumentation steht: „Annahme: Das Altsystem läuft bis 2027 weiter; Prüfung mit dem Betrieb noch offen.“",
    "cat": 0
   },
   {
    "text": "„Das ist doch klar, dass Kundendaten verschlüsselt werden müssen“ – so wird im Team gedacht, ohne dass es eine Anforderung gäbe.",
    "cat": 1
   }
  ],
  "rowExpl": [
   "Die Annahme steht im Anforderungsdokument und wurde mit dem Fachbereich bestätigt. Sie ist festgehalten und überprüfbar, deshalb explizit und nicht implizit.",
   "Die gemeinsame Zeitzone ist eine Annahme, die das Team stillschweigend trifft und nirgends festhält. Sie ist deshalb implizit und kann zu Missverständnissen führen.",
   "Dass der Partnerdienst Aufrufe selbst wiederholt, wird vom Entwurf vorausgesetzt, aber nie erwähnt. Eine unausgesprochene Voraussetzung ist implizit, nicht explizit.",
   "Auch eine noch offene Annahme ist explizit, solange sie in der Architekturdokumentation steht und geprüft werden kann. Entscheidend ist das Festhalten, nicht die Gewissheit.",
   "„Das ist doch klar“ steht für Wissen, das alle voraussetzen, ohne dass es eine Anforderung gibt oder es jemand festgehalten hat. Das ist implizit und birgt Missverständnisse."
  ],
  "explanation": "Explizit ist, was dokumentiert und überprüfbar ist, auch wenn es als offene Annahme geführt wird. Implizit ist, was alle ‚einfach wissen‘, aber niemand festgehalten hat; daraus entstehen Missverständnisse zwischen Beteiligten."
 },
 {
  "id": "c5q30",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R2",
  "prereq": true,
  "type": "multi",
  "q": "Ein Team diskutiert, wie viel Testaufwand für eine neue Komponente angemessen ist. Welche Aussagen zu Grundsätzen des Testens von Software treffen zu?",
  "options": [
   "Tests können die Existenz von Fehlern zeigen, nicht aber deren Abwesenheit.",
   "Ausreichend viele Tests zeigen, dass ein Programm fehlerfrei ist.",
   "In Komponenten mit vielen bereits gefundenen Fehlern sind weitere Fehler wahrscheinlich.",
   "Akzeptanztests ersetzen Unit-Tests, weil sie das Gesamtsystem prüfen.",
   "Unit-Tests prüfen einzelne Bausteine isoliert, Akzeptanztests das Verhalten aus Sicht der Fachseite.",
   "Wer sorgfältig programmiert, braucht keine automatisierten Tests."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Ein bestandener Test belegt nur, dass für diese Eingaben kein Fehler auftrat. Fehlerfreiheit lässt sich durch Testen nicht beweisen.",
   "Falsch: Auch sehr viele Tests decken nur einen Teil aller möglichen Eingaben und Abläufe ab. Fehlerfreiheit ist so nicht nachweisbar.",
   "Richtig: Fehler häufen sich oft in bestimmten Teilen, etwa wegen Komplexität oder schlechter Struktur. Dort lohnt sich zusätzlicher Testaufwand.",
   "Falsch: Beide ergänzen sich. Unit-Tests finden Fehler früh und lokal, Akzeptanztests prüfen, ob das System die Anforderungen der Fachseite erfüllt.",
   "Richtig: Diese Unterscheidung nennt das Curriculum bei den Voraussetzungen: Unit- und Akzeptanztests als typische Testarten.",
   "Falsch: Auch sorgfältige Entwickler:innen machen Fehler. Automatisierte Tests sichern das Verhalten bei späteren Änderungen ab."
  ],
  "explanation": "Testen zeigt Fehler, nicht Fehlerfreiheit; Fehler häufen sich in bestimmten Komponenten; Unit- und Akzeptanztests haben unterschiedliche Aufgaben. Fallen: Fehlerfreiheit durch Menge, Akzeptanztests als Ersatz, Verzicht durch Sorgfalt."
 },
 {
  "id": "k44",
  "chapter": 4,
  "lz": "LZ 04-03",
  "r": "R2",
  "type": "k",
  "points": 2,
  "q": "Welches UML-Diagramm stellt das jeweilige Element dar: das Klassendiagramm oder das Sequenzdiagramm?",
  "categories": [
   "Klassendiagramm",
   "Sequenzdiagramm"
  ],
  "rows": [
   {
    "text": "Vererbungsbeziehung zwischen zwei Klassen.",
    "cat": 0
   },
   {
    "text": "Aufruf einer Operation zwischen zwei Objekten in zeitlicher Reihenfolge.",
    "cat": 1
   },
   {
    "text": "Attribute und Operationen eines Typs.",
    "cat": 0
   },
   {
    "text": "Lebenslinie eines Objekts.",
    "cat": 1
   },
   {
    "text": "Assoziation mit Multiplizität.",
    "cat": 0
   }
  ],
  "rowExpl": [
   "Die Vererbung ist eine Beziehung zwischen Typen und damit statische Struktur. Das zeigt das Klassendiagramm; ein Sequenzdiagramm zeigt keine Typbeziehungen.",
   "Ein Aufruf zwischen Objekten in zeitlicher Reihenfolge ist eine Interaktion. Das zeigt das Sequenzdiagramm, während das Klassendiagramm keine zeitliche Abfolge darstellt.",
   "Attribute und Operationen eines Typs sind statische Struktur. Sie stehen im Klassendiagramm; das Sequenzdiagramm zeigt nur Nachrichten zwischen Beteiligten.",
   "Die Lebenslinie gehört zu den Interaktionen eines Sequenzdiagramms und zeigt ein Objekt über die Zeit. Im Klassendiagramm gibt es sie nicht.",
   "Assoziationen mit Multiplizität beschreiben, wie Typen zueinander in Beziehung stehen. Das ist statische Struktur und gehört ins Klassendiagramm, nicht ins Sequenzdiagramm."
  ],
  "explanation": "Das Klassendiagramm zeigt statische Struktur: Typen, ihre Attribute und Operationen sowie Beziehungen wie Vererbung und Assoziation. Das Sequenzdiagramm zeigt Interaktionen zwischen Beteiligten in zeitlicher Reihenfolge, mit Lebenslinien und Nachrichten."
 },
 {
  "id": "c3q91",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R2",
  "prereq": true,
  "type": "multi",
  "q": "In einem Altsystem lesen und schreiben viele Klassen dieselben globalen Variablen. Bei Änderungen treten unerklärliche Fehler auf, und Unit-Tests schlagen je nach Reihenfolge fehl. Welche Aussagen zu den Problemen von globalem Zustand treffen zu?",
  "options": [
   "Jede Stelle kann den Zustand ändern, daher sind die Wirkungen einer Änderung schwer überschaubar.",
   "Tests beeinflussen sich über den gemeinsamen Zustand und sind nicht mehr isoliert.",
   "Globaler Zustand ist unproblematisch, solange die Variablen dokumentiert sind.",
   "Abhängigkeiten sind versteckt, weil sie in keiner Signatur sichtbar werden.",
   "Das Problem tritt erst bei nebenläufigen Programmen auf."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Richtig: Wer eine globale Variable ändert, muss alle Stellen kennen, die sie nutzen. Das macht Änderungen riskant.",
   "Richtig: Der Zustand eines Tests bleibt für den nächsten sichtbar. Ergebnisse hängen dann von der Reihenfolge ab, wie in der Aufgabe beschrieben.",
   "Falsch: Dokumentation macht die Abhängigkeiten bewusster, beseitigt sie aber nicht. Änderungen und Tests bleiben gekoppelt.",
   "Richtig: Ein Aufruf zeigt nicht, welchen globalen Zustand er liest oder verändert. Die Kopplung ist dadurch unsichtbar.",
   "Falsch: Nebenläufigkeit verschärft es, aber auch in rein sequentiellen Programmen erschwert globaler Zustand Verständnis, Änderungen und Tests."
  ],
  "explanation": "Globaler Zustand verbirgt Abhängigkeiten, macht Änderungen schwer überschaubar und koppelt Tests. Fallen: Dokumentation als Lösung und die Beschränkung des Problems auf Nebenläufigkeit."
 },
 {
  "id": "k45",
  "chapter": 1,
  "lz": "LZ 01-07",
  "r": "R2",
  "prereq": true,
  "type": "k",
  "points": 2,
  "q": "Beschreibt die Aussage eher statische oder eher dynamische Typisierung?",
  "categories": [
   "Statische Typisierung",
   "Dynamische Typisierung"
  ],
  "rows": [
   {
    "text": "Typfehler werden bereits beim Übersetzen gemeldet.",
    "cat": 0
   },
   {
    "text": "Der Typ eines Werts wird erst zur Laufzeit geprüft.",
    "cat": 1
   },
   {
    "text": "Ein Aufruf mit falschem Argumenttyp fällt erst auf, wenn die Stelle ausgeführt wird.",
    "cat": 1
   },
   {
    "text": "Werkzeuge können Typverletzungen in der gesamten Codebasis ohne Ausführung finden.",
    "cat": 0
   }
  ],
  "rowExpl": [
   "Bei statischer Typisierung prüft der Compiler Typen vor der Ausführung, deshalb zeigen sich Typfehler schon beim Übersetzen. Bei dynamischer Typisierung wäre das erst zur Laufzeit der Fall.",
   "Wird der Typ eines Werts erst zur Laufzeit geprüft, ist das dynamische Typisierung. Bei statischer Typisierung stünde die Prüfung schon vor der Ausführung.",
   "Dass ein falscher Argumenttyp erst beim Ausführen der Stelle auffällt, ist typisch für dynamische Typisierung. Statisch würde der Fehler früher gemeldet.",
   "Weil bei statischer Typisierung Typen ohne Ausführung prüfbar sind, können Werkzeuge Typverletzungen in der gesamten Codebasis finden. Dynamisch wäre dafür die Ausführung nötig."
  ],
  "explanation": "Bei statischer Typisierung prüft der Compiler Typen vor der Ausführung, Fehler zeigen sich früh und werkzeugunterstützt. Bei dynamischer Typisierung werden Typen erst zur Laufzeit geprüft, Fehler zeigen sich daher erst, wenn die Stelle ausgeführt wird."
 },
 {
  "id": "c3q92",
  "chapter": 3,
  "lz": "LZ 03-10",
  "r": "R2",
  "prereq": true,
  "type": "multi",
  "q": "Eine Anwendung ruft für Zahlungen einen entfernten Dienst auf. Das Team entwirft ihre Fehler- und Ausnahmebehandlung. Welche Aussagen zu einem guten Umgang mit Fehlern und Ausnahmen treffen zu?",
  "options": [
   "Fehler sollten dort behandelt werden, wo sinnvoll reagiert werden kann; sonst werden sie an den Aufrufer weitergegeben.",
   "Ausnahmen sollten abgefangen und verschluckt werden, damit der Ablauf nicht unterbrochen wird.",
   "Fehlermeldungen und Logs sollten genug Kontext enthalten, um die Ursache zu finden.",
   "Fehler werden mit demselben generischen Text an Nutzer:innen weitergegeben, um Details zu verbergen.",
   "Ein einheitliches Konzept legt fest, welche Fehlerarten es gibt und wie sie behandelt werden.",
   "Ausnahmen eignen sich zur normalen Ablaufsteuerung, etwa zum Verlassen von Schleifen.",
   "Fehlerbehandlung ist Sache der Implementierung und braucht keine Absprache im Team."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Nur die Stelle mit genug Kontext kann entscheiden, ob wiederholt, ersetzt oder abgebrochen wird. Alle anderen leiten den Fehler weiter.",
   "Falsch: Verschluckte Fehler bleiben unbemerkt und führen später zu schwer erklärbaren Folgefehlern.",
   "Richtig: Ohne Kontext wie Auftrag, Eingabe oder beteiligter Dienst bleibt die Fehlersuche mühsam.",
   "Falsch: Nutzer:innen brauchen eine passende Rückmeldung, Betreiber brauchen Details im Log. Ein einziger Text erfüllt keines von beidem.",
   "Richtig: Fehlerbehandlung ist ein Querschnittsthema. Ein gemeinsames Konzept sorgt für vorhersagbares Verhalten über Bausteine hinweg.",
   "Falsch: Ausnahmen stehen für außergewöhnliche Situationen. Als Ablaufsteuerung machen sie den Code schwer lesbar und langsam.",
   "Falsch: Ohne Absprache behandelt jeder Baustein Fehler anders. Gerade das macht die Behandlung zum Architekturthema."
  ],
  "explanation": "Fehler werden dort behandelt, wo sinnvoll reagiert werden kann, mit aussagekräftigem Kontext und nach einem einheitlichen Konzept. Fallen: Verschlucken, generische Texte, Ausnahmen als Ablaufsteuerung und fehlende Absprache."
 },
 {
  "id": "c3q93",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R2",
  "prereq": true,
  "type": "multi",
  "q": "Ein Team organisiert den Code eines wachsenden Systems in Paketen bzw. Namensräumen und diskutiert, wie sich Sichtbarkeit und Gültigkeitsbereiche (Scope) auf den Entwurf auswirken. Welche Aussagen treffen zu?",
  "options": [
   "Pakete bzw. Namensräume gruppieren zusammengehörige Typen und vermeiden Namenskollisionen.",
   "Pakete garantieren bereits eine saubere Architektur.",
   "Ein enger gewählter Gültigkeitsbereich begrenzt, wo eine Variable unbeabsichtigt verwendet werden kann.",
   "Variablen sollten möglichst global deklariert werden, damit sie überall verfügbar sind.",
   "Nicht öffentlich sichtbare Typen eines Pakets lassen sich intern ändern, ohne andere Pakete zu beeinflussen.",
   "Namensräume bestimmen, auf welchen Servern der Code läuft."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Das ist ihre Grundfunktion. Sie bilden damit auch eine einfache Form der Modularisierung im Code.",
   "Falsch: Pakete sind ein Mittel. Ohne Regeln für Abhängigkeiten zwischen ihnen können sie trotzdem zyklisch und eng gekoppelt sein.",
   "Richtig: Je kleiner der Scope, desto weniger Stellen können eine Variable beeinflussen. Das erleichtert das Verständnis.",
   "Falsch: Verfügbarkeit überall bedeutet Abhängigkeit überall. Globaler Zustand erschwert Änderungen und Tests.",
   "Richtig: Sichtbarkeitsregeln setzen Information Hiding im Code um: Nur was öffentlich ist, bindet Nutzer.",
   "Falsch: Namensräume ordnen Namen im Code. Die Zuordnung zu Servern ist eine Frage der Verteilung."
  ],
  "explanation": "Pakete und Namensräume gruppieren und schützen Namen, enge Gültigkeitsbereiche begrenzen Wirkungen, und nicht öffentliche Typen lassen sich frei ändern. Fallen: Pakete als Garantie für Architektur, globale Variablen, Verwechslung mit Verteilung."
 },
 {
  "id": "k46",
  "chapter": 3,
  "lz": "LZ 03-07",
  "r": "R2",
  "prereq": true,
  "type": "k",
  "points": 2,
  "q": "Beschreibt die Aussage eher Call-by-Value oder Call-by-Reference?",
  "categories": [
   "Call-by-Value",
   "Call-by-Reference"
  ],
  "rows": [
   {
    "text": "Die aufgerufene Funktion arbeitet auf einer Kopie des Arguments; Änderungen sind für den Aufrufer nicht sichtbar.",
    "cat": 0
   },
   {
    "text": "Die aufgerufene Funktion kann den Wert der Variablen des Aufrufers verändern.",
    "cat": 1
   },
   {
    "text": "Beim Aufruf wird nur ein Verweis auf die Variable übergeben, nicht ihr Wert.",
    "cat": 1
   },
   {
    "text": "Eine Änderung des Parameters in der Funktion lässt die Originalvariable unberührt.",
    "cat": 0
   },
   {
    "text": "Der Wert wird beim Aufruf kopiert, bei großen Datenmengen kann das aufwendig sein.",
    "cat": 0
   }
  ],
  "rowExpl": [
   "Arbeitet die Funktion auf einer Kopie, bleiben Änderungen lokal und der Aufrufer sieht sie nicht. Das ist Call-by-Value; bei Call-by-Reference wäre das Original betroffen.",
   "Kann die Funktion den Wert der Variablen des Aufrufers verändern, arbeitet sie am Original. Das ist Call-by-Reference, bei Call-by-Value bliebe die Variable unverändert.",
   "Wird nur ein Verweis auf die Variable übergeben, greift die Funktion über diesen Verweis auf das Original zu. Das ist Call-by-Reference und keine Wertkopie.",
   "Bleibt die Originalvariable bei Änderung des Parameters unberührt, wurde eine Kopie übergeben. Das ist Call-by-Value; bei einer Referenz wäre die Änderung sichtbar.",
   "Der Wert wird beim Aufruf kopiert, was bei großen Datenmengen aufwendig sein kann. Dieser Kopieraufwand ist typisch für Call-by-Value, eine Referenz vermeidet ihn."
  ],
  "explanation": "Bei Call-by-Value erhält die Funktion eine Kopie, Änderungen bleiben lokal, und große Werte zu kopieren kann Aufwand bedeuten. Bei Call-by-Reference arbeitet die Funktion auf dem Original, Änderungen sind für den Aufrufer sichtbar. Das beeinflusst, wie Schnittstellen Seiteneffekte offenlegen."
 },
 {
  "id": "c1q47",
  "chapter": 1,
  "lz": "LZ 01-07",
  "r": "R2",
  "prereq": true,
  "type": "multi",
  "q": "Für eine Kundenverwaltung soll das System häufig einen Kunden anhand seiner Kundennummer finden. Außerdem soll eine Funktion alle Kunden in der Reihenfolge ihrer Anlage ausgeben. Welche Datenstrukturen eignen sich dafür?",
  "options": [
   "Eine Map bzw. ein Dictionary (HashTable) mit der Kundennummer als Schlüssel.",
   "Ein Stack, weil der zuletzt angelegte Kunde zuerst gebraucht wird.",
   "Eine Liste, die die Kunden in der Reihenfolge der Anlage hält.",
   "Eine Menge ohne Schlüssel, weil sie Duplikate verhindert.",
   "Ein Array fester Größe, das bei jedem neuen Kunden komplett neu angelegt wird."
  ],
  "correct": [
   0,
   2
  ],
  "optExpl": [
   "Richtig: Der Zugriff über einen Schlüssel ist genau dafür gedacht und im Normalfall sehr schnell. Die Kundennummer als Schlüssel deckt das häufige Finden eines Kunden ab, ohne die ganze Sammlung zu durchsuchen.",
   "Falsch: Fehlschluss von der Reihenfolge auf den Zugriff: Ein Stack liefert Elemente nur in umgekehrter Reihenfolge der Anlage und erlaubt keinen Zugriff über eine Kundennummer. Er erfüllt weder die Suche noch die Ausgabe in Anlagereihenfolge.",
   "Richtig: Eine Liste bewahrt die Einfügereihenfolge und lässt sich einfach in dieser Reihenfolge durchlaufen. Damit ist die zweite Anforderung, alle Kunden in der Reihenfolge ihrer Anlage auszugeben, direkt erfüllt.",
   "Falsch: Die Duplikatfreiheit ist hier nicht gefragt. Eine einfache Menge ohne Schlüssel ist weder gezielt nach Kundennummer durchsuchbar noch hält sie die Reihenfolge der Anlage; beide Zugriffsmuster bleiben unerfüllt.",
   "Falsch: Ein Array fester Größe, das bei jedem Kunden komplett neu angelegt wird, kopiert jedes Mal alle Daten. Es ist ineffizient und löst das Suchproblem über die Kundennummer nicht, da kein Schlüsselzugriff entsteht."
  ],
  "explanation": "Zugriff über einen Schlüssel verlangt eine Map, die Reihenfolge der Anlage eine Liste; passende Datenstrukturen folgen aus den Zugriffsmustern. Fallen: Stack, Menge ohne Schlüssel und ständiges Neuanlegen."
 },
 {
  "id": "c5q31",
  "chapter": 5,
  "lz": "LZ 05-03",
  "r": "R2",
  "type": "multi",
  "q": "Welche Faktoren führen in der Praxis am häufigsten dazu, dass die umgesetzte Architektur von der geplanten abweicht? Wählen Sie die am besten passenden Antworten aus.",
  "options": [
   "Zeitdruck und Abkürzungen bei der Umsetzung.",
   "Zu viele Architekturdiagramme in der Dokumentation.",
   "Die Konformität von Code und Architektur wird nicht regelmäßig geprüft.",
   "Die Verwendung einer statisch getypten Programmiersprache.",
   "Entwickler:innen kennen die Architekturentscheidungen und ihre Gründe nicht.",
   "Zu häufige Architekturreviews."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Unter Druck wird die schnellste statt der vorgesehenen Lösung gewählt. So entstehen verbotene Abhängigkeiten, die sich ansammeln.",
   "Falsch: Diagramme verursachen keine Abweichung im Code. Zu viele können die Pflege erschweren, sind aber nicht die typische Ursache.",
   "Richtig: Ohne Prüfung bleiben Abweichungen unbemerkt und wachsen. Regelmäßige Konformitätsprüfungen machen sie früh sichtbar.",
   "Falsch: Statische Typisierung hilft eher, Strukturregeln zu prüfen. Sie ist keine typische Ursache für Erosion.",
   "Richtig: Wer Entscheidungen und Gründe nicht kennt, verletzt sie unbeabsichtigt, etwa bei Teamwechseln oder fehlender Dokumentation.",
   "Falsch: Reviews decken Abweichungen auf, statt sie zu verursachen. Der Aufwand kann stören, ist aber nicht die Ursache der Abweichung."
  ],
  "explanation": "Abweichungen entstehen meist durch Zeitdruck, fehlende Konformitätsprüfung und unbekannte Entscheidungen. Fallen: Diagramme, Programmiersprache und Reviews sind keine typischen Ursachen."
 },
 {
  "id": "c1q48",
  "chapter": 1,
  "lz": "LZ 01-04",
  "r": "R1",
  "type": "multi",
  "q": "Ein neues Projekt startet. Welche Aufgaben sollten Architekt:innen in der Anfangsphase am ehesten priorisieren? Wählen Sie die passendsten Antworten aus.",
  "options": [
   "Die wichtigsten Qualitätsziele mit den Stakeholdern klären.",
   "Alle Bausteine bis auf Klassenebene entwerfen.",
   "Die bestehenden Randbedingungen erfassen.",
   "Den Technologiestack festlegen, bevor die Anforderungen bekannt sind.",
   "Risikoreiche Entscheidungen früh durch einen Prototyp absichern.",
   "Die Testfälle für das Gesamtsystem schreiben."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Qualitätsziele steuern den Entwurf. Ohne sie fehlt der Maßstab für Entscheidungen.",
   "Falsch: Das wäre Detailentwurf zu früh. Anfangs zählt die tragende Struktur, Details folgen iterativ.",
   "Richtig: Randbedingungen begrenzen den Lösungsraum von Beginn an. Wer sie spät entdeckt, muss Entscheidungen zurücknehmen.",
   "Falsch: Technologie sollte aus Anforderungen und Randbedingungen folgen. Eine frühe Festlegung ohne diese Basis schafft Risiko.",
   "Richtig: Unsicheres früh zu prüfen ist iteratives Vorgehen: Rückmeldung ersetzt Annahmen, solange Korrekturen günstig sind.",
   "Falsch: Das ist eine wichtige Aufgabe, aber nicht der Architekten, und sie hat in der Anfangsphase keine Priorität gegenüber der Klärung von Zielen und Risiken."
  ],
  "explanation": "Am Anfang klären Architekt:innen Qualitätsziele und Randbedingungen und sichern riskante Entscheidungen früh ab. Fallen: Detailentwurf zu früh, Technologie vor Anforderungen, Testfälle als Architekturaufgabe."
 },
 {
  "id": "c2q35",
  "chapter": 2,
  "lz": "LZ 02-02",
  "r": "R1",
  "type": "multi",
  "q": "Welche Arten von Randbedingungen können Architekturentscheidungen beeinflussen? Wählen Sie die zutreffenden Antworten aus.",
  "options": [
   "Organisatorische Randbedingungen wie Budget, Zeit und Teamgröße.",
   "Technische Randbedingungen wie vorhandene Infrastruktur und vorgegebene Technologien.",
   "Entscheidungen, die das Team im Entwurf selbst frei trifft.",
   "Regulatorische Randbedingungen wie Datenschutz und gesetzliche Vorgaben.",
   "Wünsche, die ein Stakeholder nur als Idee äußert, ohne dass sie vorgegeben sind."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Richtig: Das Curriculum nennt Verfügbarkeit von Ressourcen und Qualifikation der Mitarbeitenden ausdrücklich als organisatorische Randbedingungen.",
   "Richtig: Vorhandene Hardware und Software, Frameworks und Referenzarchitekturen sind typische technische Randbedingungen.",
   "Falsch: Selbst getroffene Entscheidungen sind Ergebnisse des Entwurfs, keine von außen gesetzten Randbedingungen.",
   "Richtig: Gesetze und Datenschutzvorgaben schränken den Lösungsraum ein, etwa beim Speicherort personenbezogener Daten. (Normen und Richtlinien zählt der Lernstoff dagegen zu den organisatorischen Randbedingungen.)",
   "Falsch: Ein bloßer Wunsch ist keine Vorgabe. Er kann eine Anforderung werden, ist aber noch keine Randbedingung."
  ],
  "explanation": "Organisatorische, technische und regulatorische Randbedingungen können Entscheidungen beeinflussen; sie kommen von außen und schränken den Lösungsraum ein. Fallen: eigene Entwurfsentscheidungen und bloße Wünsche."
 },
 {
  "id": "c4q48",
  "chapter": 4,
  "lz": "LZ 04-02",
  "r": "R1",
  "type": "multi",
  "q": "Sie sollen dem Management die Architektur eines Systems vorstellen, das aus vorhandenen und neu zu bauenden Komponenten besteht. Welche Inhalte sind am besten geeignet?",
  "options": [
   "Ein Überblick über Kontext und Grobstruktur des Systems.",
   "Klassendiagramme aller Bausteine.",
   "Qualitätsziele sowie Konsequenzen und Kosten wichtiger Entscheidungen.",
   "Quelltextauszüge der zentralen Klassen.",
   "Konfigurationsparameter der Server im Detail."
  ],
  "correct": [
   0,
   2
  ],
  "optExpl": [
   "Richtig: Das Management braucht den Gesamtzusammenhang, keine Details. Kontext und Grobstruktur geben ihn auf einer Seite.",
   "Falsch: Diese Detailtiefe richtet sich an Entwickler:innen. Für das Management verdeckt sie das Wesentliche.",
   "Richtig: Das Management entscheidet über Ressourcen und Prioritäten. Es braucht die Abwägungen hinter den Entscheidungen.",
   "Falsch: Quelltext spricht Entwickler:innen an. Er eignet sich nicht, um Management Struktur und Entscheidungen zu vermitteln.",
   "Falsch: Das ist Betriebsdetail. Der Betrieb braucht es, das Management nicht."
  ],
  "explanation": "Dem Management vermittelt man Kontext, Grobstruktur, Qualitätsziele und die Konsequenzen wichtiger Entscheidungen. Fallen: Entwicklerdetails wie Klassen, Quelltext oder Serverkonfiguration."
 },
 {
  "id": "c3q94",
  "chapter": 3,
  "lz": "LZ 03-02",
  "r": "R1",
  "type": "multi",
  "q": "Nach welchen Kriterien sollte ein Team ein System am ehesten in Bausteine zerlegen? Wählen Sie die am besten passenden Antworten aus.",
  "options": [
   "Fachliche Zusammengehörigkeit (hohe Kohäsion).",
   "Gleiche Größe der Bausteine in Codezeilen.",
   "Wenige und klare Abhängigkeiten zwischen den Bausteinen.",
   "Die Reihenfolge, in der die Klassen programmiert wurden.",
   "Gemeinsame Änderungsgründe: Was sich aus demselben Grund ändert, gehört zusammen.",
   "Alphabetische Ordnung der Bausteinnamen.",
   "Der Zweck eines Bausteins lässt sich in einem Satz beschreiben."
  ],
  "correct": [
   0,
   2,
   4,
   6
  ],
  "optExpl": [
   "Richtig: Was fachlich zusammengehört, sollte im selben Baustein liegen (hohe Kohäsion). Das hält Änderungen lokal und macht Verantwortlichkeiten nachvollziehbar.",
   "Falsch: Die Größe in Codezeilen ist kein Qualitätskriterium des Schnitts. Gleich große Teile können fachlich zerreißen, was zusammengehört, und erhöhen so Abhängigkeiten statt sie zu senken.",
   "Richtig: Ein guter Schnitt hält Kopplung gering und Schnittstellen schmal. Wenige, klare Abhängigkeiten machen Bausteine verständlich und getrennt änderbar.",
   "Falsch: Die Entstehungsgeschichte sagt nichts über Verantwortlichkeiten oder Abhängigkeiten aus. Ein historisch gewachsener Schnitt ist deshalb kein Maßstab für eine gute Zerlegung.",
   "Richtig: Das ist die Idee hinter Single Responsibility und Information Hiding: Was sich aus demselben Grund ändert, gehört zusammen, damit Änderungen auf einen Baustein begrenzt bleiben.",
   "Falsch: Namen ordnen Listen, nicht Systeme. Die alphabetische Reihenfolge hat keinen Bezug zu Fachlichkeit, Kopplung oder Änderungsgründen und ist für den Schnitt ohne Aussagekraft.",
   "Richtig: Lässt sich der Zweck eines Bausteins in einem Satz beschreiben, deutet das auf eine klar umrissene Verantwortung hin. Ein diffuser Zweck weist dagegen auf einen unsauberen Schnitt hin."
  ],
  "explanation": "Gute Bausteinschnitte folgen fachlicher Zusammengehörigkeit, geringer Kopplung, gemeinsamen Änderungsgründen und einem klaren Zweck. Fallen: Größe, Entstehungsreihenfolge, Alphabet."
 },
 {
  "id": "c4q49",
  "chapter": 4,
  "lz": "LZ 04-02",
  "r": "R1",
  "type": "multi",
  "q": "Welche Inhalte der Architekturdokumentation helfen neuen Teammitgliedern in den ersten Wochen am meisten? Wählen Sie die passendsten Antworten aus.",
  "options": [
   "Kontext und Bausteinübersicht des Systems.",
   "Eine Beschreibung aller Klassen und Methoden.",
   "Wichtige Entscheidungen mit Begründung.",
   "Die Protokolle der Projektmeetings.",
   "Querschnittskonzepte wie Fehlerbehandlung und Persistenz.",
   "Die Zeiterfassung der Entwickler:innen."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Beides vermittelt schnell, wo das System steht und woraus es besteht. Das ist der übliche Einstieg.",
   "Falsch: Das ist zu detailliert und veraltet schnell. Einsteiger finden darin das Wesentliche nicht.",
   "Richtig: Das Warum lässt sich aus dem Code nicht lesen. Einsteiger vermeiden damit, getroffene Entscheidungen unbewusst zu kippen.",
   "Falsch: Protokolle sind chronologisch und enthalten viel Nebensächliches. Sie ersetzen keine strukturierte Dokumentation.",
   "Richtig: Diese Regeln gelten in vielen Bausteinen. Wer sie kennt, schreibt von Anfang an passenden Code.",
   "Falsch: Das ist Projektsteuerung, nicht Architektur. Für das Verständnis des Systems bringt es nichts."
  ],
  "explanation": "Neueinsteiger profitieren von Kontext, Bausteinübersicht, begründeten Entscheidungen und Querschnittskonzepten. Fallen: Detailbeschreibungen, Meetingprotokolle, Zeiterfassung."
 },
 {
  "id": "c2q36",
  "chapter": 2,
  "lz": "LZ 02-04",
  "r": "R1",
  "type": "multi",
  "q": "Ein Stakeholder fordert für ein neues Buchungsportal, das System solle „robust“ sein. Im Workshop zeigt sich, dass die Beteiligten darunter Unterschiedliches verstehen: Ausfallsicherheit, Fehlertoleranz bei falschen Eingaben und schnelle Wiederherstellung. Wie gehen Sie vor, um daraus eine prüfbare Qualitätsanforderung zu machen?",
  "options": [
   "Für jede Lesart ein Szenario mit Kontext, Stimulus, Reaktion und Messung formulieren.",
   "„Robust“ in ein Antwortzeitziel übersetzen, weil sich das am leichtesten messen lässt.",
   "Mit den Stakeholdern klären, welche Lesart Priorität hat.",
   "Die Anforderung unverändert übernehmen, weil sie als Qualitätsziel bereits klar ist.",
   "Für jedes Szenario eine Analysemethode festlegen, z. B. einen Fehlerinjektionstest.",
   "Eine Technologie wie Container-Orchestrierung vorschreiben, die Robustheit sicherstellt."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: So wird aus einem vagen Begriff ein prüfbares Kriterium. Jede Lesart bekommt ihr eigenes, messbares Szenario.",
   "Falsch: Leicht messbar heißt nicht passend. Antwortzeit ist eine andere Qualität als Robustheit und würde das eigentliche Anliegen verfehlen.",
   "Richtig: Nicht jede Lesart ist gleich wichtig. Die Priorisierung gehört zu den Stakeholdern und steuert den Entwurf.",
   "Falsch: Der Workshop hat gezeigt, dass sie unterschiedlich verstanden wird. Unklare Anforderungen führen zu Streit bei der Abnahme.",
   "Richtig: Das Curriculum verlangt, dass eine Anforderung ihre Analysemethode benennt. Erst dann ist klar, wie die Erfüllung belegt wird.",
   "Falsch: Eine Technologie ist eine Lösung, keine Anforderung. Sie macht Robustheit weder überprüfbar noch ausreichend."
  ],
  "explanation": "Vage Qualitäten werden über Szenarien mit Kontext, Stimulus, Reaktion und Messung konkretisiert, priorisiert und mit einer Analysemethode versehen. Fallen: leicht Messbares statt Passendes, ungeklärte Übernahme, Technologie als Anforderung."
 },
 {
  "id": "c3q95",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R2",
  "type": "multi",
  "q": "In einem System, das drei Teams entwickeln, löst jedes Team die Anbindung externer Dienste anders: eigene Fehlerbehandlung, eigene Namensschemata und unterschiedliche Wiederholungsstrategien. Neue Entwickler:innen brauchen lange zur Einarbeitung, und das Fehlerverhalten ist schwer vorherzusagen. Welche Aussagen zur konzeptionellen Integrität treffen zu?",
  "options": [
   "Gleichartige Probleme sollten einheitlich gelöst werden (Einheitlichkeit, Konsistenz).",
   "Konzeptionelle Integrität heißt, dass alle Teams dieselbe Technologie einsetzen.",
   "Einheitliche Lösungen erleichtern die Einarbeitung und machen das Verhalten vorhersagbar.",
   "Die Teams sollten bewusst unterschiedlich lösen, um Innovation zu fördern.",
   "Ein gemeinsames Querschnittskonzept für die Anbindung externer Dienste ist ein geeigneter Weg.",
   "Einheitlichkeit entsteht von selbst, wenn die Teams gut kommunizieren."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Das Curriculum beschreibt konzeptionelle Integrität als Einheitlichkeit von Lösungen für ähnliche Probleme.",
   "Falsch: Es geht um einheitliche Lösungsansätze für ähnliche Probleme, nicht um eine einzige Technologie.",
   "Richtig: Wer ein Muster einmal verstanden hat, erkennt es überall wieder. Genau das fehlt im beschriebenen System.",
   "Falsch: Unterschiede ohne Grund erzeugen Aufwand und Unvorhersagbarkeit. Abweichungen sollten begründet sein, nicht Normalfall.",
   "Richtig: Ein einmal beschriebenes Konzept mit Regeln und Beispielen sorgt für gleichartige Lösungen in allen Teams.",
   "Falsch: Gute Kommunikation hilft, ersetzt aber keine ausdrückliche Vereinbarung. Ohne Konzept entstehen weiterhin eigene Lösungen."
  ],
  "explanation": "Konzeptionelle Integrität bedeutet einheitliche Lösungen für ähnliche Probleme; sie erleichtert Einarbeitung und macht Verhalten vorhersagbar und lässt sich über ein gemeinsames Konzept erreichen. Fallen: gleiche Technologie, gewollte Vielfalt, Einheitlichkeit von selbst."
 },
 {
  "id": "c4q50",
  "chapter": 4,
  "lz": "LZ 04-02",
  "r": "R1",
  "type": "multi",
  "q": "Drei Teams dokumentieren gemeinsam die Architektur eines Systems. Das Management möchte eine knappe Übersicht, die Entwicklung braucht Details zu Schnittstellen, der Betrieb will die Verteilung verstehen. Zudem unterscheiden sich Stil und Detailgrad der Beiträge deutlich. Welche Maßnahmen sind geeignet?",
  "options": [
   "Die Beiträge auf ein gemeinsames Template stützen.",
   "Eine einzige Gesamtbeschreibung für alle Zielgruppen im gleichen Detailgrad erstellen.",
   "Inhalte und Detailgrad je Zielgruppe wählen, z. B. über passende Sichten.",
   "Jedes Team dokumentiert nach eigenem Format, der Abgleich folgt später.",
   "Die Beiträge der Teams stilistisch und inhaltlich konsolidieren.",
   "Mündliche Abstimmung ersetzt die schriftliche Dokumentation.",
   "Ergebnisse aus Abstimmungen in die Dokumentation zurückführen."
  ],
  "correct": [
   0,
   2,
   4,
   6
  ],
  "optExpl": [
   "Richtig: Ein Template gibt Gliederung und Detailgrad vor und macht Beiträge vergleichbar. Das Curriculum nennt den Nutzen Template-basierter Dokumentation.",
   "Falsch: Zielgruppen brauchen unterschiedliche Inhalte und Detailgrade. Eine einheitliche Beschreibung überfordert die einen und genügt den anderen nicht.",
   "Richtig: Management, Entwicklung und Betrieb haben verschiedene Anliegen. Sichten bedienen sie jeweils passend.",
   "Falsch: Ein späterer Abgleich ist aufwendig und führt zu Brüchen. Einheitliche Vorgaben müssen am Anfang stehen.",
   "Richtig: Das Curriculum nennt die Konsolidierung und Harmonisierung der Beiträge mehrerer Autorengruppen als Aufgabe.",
   "Falsch: Beides ergänzt sich. Ohne schriftliche Dokumentation gehen Entscheidungen und Gründe verloren.",
   "Richtig: Mündliche und schriftliche Kommunikation sollen in Einklang stehen. Was besprochen wurde, gehört in die Dokumentation."
  ],
  "explanation": "Mehrere Teams und Zielgruppen verlangen ein gemeinsames Template, zielgruppengerechte Sichten, Konsolidierung der Beiträge und das Zurückführen mündlicher Absprachen. Fallen: Einheitsbeschreibung, Eigenformate, Mündlichkeit statt Dokumentation."
 },
 {
  "id": "c3q96",
  "chapter": 3,
  "lz": "LZ 03-10",
  "r": "R1",
  "type": "multi",
  "q": "Für eine mobile App soll der Akkuverbrauch gesenkt werden. Das Team stellt fest, dass Netzwerkzugriffe (Kommunikation), häufige Bildschirmaktualisierungen (GUI) und Hintergrundthreads (Nebenläufigkeit) den Verbrauch bestimmen. Welche Aussagen zum Vorgehen treffen zu?",
  "options": [
   "Energieeffizienz ist ein Querschnittsthema, das mehrere Bausteine betrifft.",
   "Energieeffizienz lässt sich in einem einzelnen Baustein lösen, ohne andere zu betreffen.",
   "Die Querschnittskonzepte Kommunikation, GUI und Nebenläufigkeit beeinflussen sich gegenseitig und sollten gemeinsam betrachtet werden.",
   "Energieeffizienz ist eine Frage der Hardware, die Software kaum beeinflusst.",
   "Ein Konzept mit Regeln (z. B. Netzwerkzugriffe bündeln) lässt sich in weiteren Apps wiederverwenden.",
   "Das Thema wird erst nach der Implementierung relevant."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Das Curriculum nennt Energieeffizienz ausdrücklich als Querschnittsthema. Der Verbrauch entsteht in vielen Bausteinen.",
   "Falsch: Kommunikation, GUI und Nebenläufigkeit liegen in verschiedenen Bausteinen. Eine Lösung in einem einzelnen reicht nicht.",
   "Richtig: Das Curriculum nennt mögliche wechselseitige Abhängigkeiten von Querschnittskonzepten. Gebündelte Netzwerkzugriffe ändern etwa auch die Aktualisierung der Oberfläche.",
   "Falsch: Software bestimmt über Netzwerk, Aktualisierung und Threads wesentlich mit, wie viel Energie verbraucht wird.",
   "Richtig: Das Curriculum weist darauf hin, dass Querschnittskonzepte systemübergreifend wiederverwendbar sein können.",
   "Falsch: Dann sind Kommunikationsmuster und Threads längst festgelegt. Querschnittskonzepte gehören in den Entwurf."
  ],
  "explanation": "Energieeffizienz ist ein Querschnittsthema, das mit Kommunikation, GUI und Nebenläufigkeit zusammenhängt und als wiederverwendbares Konzept entworfen wird. Fallen: Lösung in einem Baustein, Hardware als Ursache, späte Betrachtung."
 },
 {
  "id": "c3q97",
  "chapter": 3,
  "lz": "LZ 03-07",
  "r": "R1",
  "type": "multi",
  "q": "Ein Team stellt einen Preisberechnungsdienst bereit, den zwei interne Teams und externe Partnerfirmen nutzen. Die Implementierung soll im nächsten Quartal ausgetauscht werden. Welche Aussagen zum Schnittstellenentwurf treffen zu?",
  "options": [
   "Schnittstelle und Implementierung trennen, damit sich die Implementierung ohne Anpassung der Nutzer ersetzen lässt.",
   "Interne Datenstrukturen offenlegen, um den Nutzern maximale Flexibilität zu geben.",
   "Interne und externe Schnittstellen unterschiedlich behandeln, etwa bei Stabilität und Versionierung.",
   "Interne und externe Schnittstellen müssen gleich behandelt werden, damit niemand benachteiligt wird.",
   "Die Schnittstelle leicht erlernbar, schwer zu missbrauchen und aus Nutzersicht funktional vollständig gestalten.",
   "Die Schnittstelle eng an die aktuelle Implementierung anlehnen, damit der Austausch kaum auffällt.",
   "Zusicherungen wie Fehlerverhalten und Antwortzeit dokumentieren."
  ],
  "correct": [
   0,
   2,
   4,
   6
  ],
  "optExpl": [
   "Richtig: Das ist die Trennung von Schnittstelle und Implementierung aus dem Curriculum: Implementierungen können bei Bedarf ausgetauscht werden.",
   "Falsch: Offengelegte Interna binden Nutzer an Details, die sich beim Austausch ändern. Das macht den Austausch teuer.",
   "Richtig: Das Curriculum nennt die Notwendigkeit unterschiedlicher Behandlung interner und externer Schnittstellen. Externe Nutzer sind unbekannt und lassen sich nicht kurzfristig abstimmen.",
   "Falsch: Gleichbehandlung ignoriert unterschiedliche Anforderungen an Stabilität, Dokumentation und Änderungsprozess.",
   "Richtig: Das sind die wünschenswerten Eigenschaften aus dem Curriculum. Sie senken Fehlnutzung und Supportaufwand.",
   "Falsch: Die Nähe zur alten Implementierung bindet die Schnittstelle an deren Besonderheiten und erschwert gerade den Austausch.",
   "Richtig: Zur Schnittstelle gehören neben der Syntax auch Semantik und zugesicherte Qualitäten. Nur so bleibt der Austausch kompatibel."
  ],
  "explanation": "Gute Schnittstellen trennen Vertrag und Implementierung, unterscheiden intern und extern, sind leicht erlernbar und halten Zusicherungen fest. Fallen: Interna offenlegen, Gleichbehandlung, Anlehnung an die Implementierung."
 },
 {
  "id": "c5q32",
  "chapter": 5,
  "lz": "LZ 05-03",
  "r": "R2",
  "type": "multi",
  "q": "Ein System wird seit Jahren von wechselnden Teams weiterentwickelt. Die Architektur wurde in Entscheidungen (ADRs) festgehalten, die laut Stichproben im Code nicht mehr durchgängig eingehalten werden. Das Management fragt, wie sich die Konformität zwischen Code und Entscheidungen prüfen lässt. Welche Vorgehensweisen sind geeignet?",
  "options": [
   "Toolgestützte Abhängigkeitsanalyse gegen vereinbarte Regeln, z. B. Schichten.",
   "Die Unit-Test-Abdeckung als Maß für die Konformität verwenden.",
   "Code-Reviews mit Blick auf die Einhaltung der Architekturentscheidungen.",
   "Die Dokumentation an den Code anpassen und das Ergebnis als konform erklären.",
   "Architekturtests im Build, die verbotene Abhängigkeiten melden.",
   "Lasttests durchführen, um die Einhaltung der Struktur zu prüfen."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Der Code wird mit den Regeln verglichen und Verstöße werden gemeldet. Das ist ein Mittel der Konformitätsprüfung.",
   "Falsch: Tests prüfen Verhalten, nicht Struktur. Eine hohe Abdeckung sagt nichts darüber, ob Architekturentscheidungen eingehalten sind.",
   "Richtig: Menschen erkennen Verletzungen, die Werkzeuge nicht abdecken, und verbreiten das Wissen über Entscheidungen im Team.",
   "Falsch: Das beseitigt nur die sichtbare Abweichung. Ob der Code die Qualitätsziele noch trägt, bleibt ungeklärt.",
   "Richtig: Automatische Prüfungen im Build machen Verstöße sofort sichtbar, bevor sie sich ansammeln.",
   "Falsch: Lasttests prüfen Laufzeitverhalten. Sie zeigen nicht, ob Abhängigkeiten den Entscheidungen entsprechen."
  ],
  "explanation": "Konformität prüft man mit Abhängigkeitsanalysen, Reviews und Architekturtests im Build. Fallen: Testabdeckung, Anpassen der Doku und Lasttests ersetzen die Strukturprüfung nicht."
 },
 {
  "id": "c2q37",
  "chapter": 2,
  "lz": "LZ 02-01",
  "r": "R1",
  "type": "multi",
  "q": "Das Produktmanagement will ein neues Feature in zwei Monaten liefern, der IT-Betrieb fordert zusätzliche Monitoring- und Ausfallsicherheitsmaßnahmen, und das Entwicklungsteam sorgt sich um wachsende technische Schulden. Welche Aussagen zum Umgang mit diesen Anliegen treffen zu?",
  "options": [
   "Die Stakeholder, ihre Anliegen und deren Auswirkungen auf die Architektur identifizieren.",
   "Dem Anliegen des Stakeholders mit der höchsten Position folgen.",
   "Zielkonflikte und Konsequenzen sichtbar machen, kurz- und langfristige Ziele unterscheiden und mit den Stakeholdern abstimmen.",
   "Die Anliegen des Betriebs zurückstellen, weil sie nicht zur Funktionalität beitragen.",
   "Technische Schulden ausblenden, weil sie für Stakeholder keine Rolle spielen."
  ],
  "correct": [
   0,
   2
  ],
  "optExpl": [
   "Richtig: Das ist der erste Schritt: Wer will was, und wie beeinflusst es Architektur und Entwurfsprozess?",
   "Falsch: Position ersetzt keine Abwägung. Konflikte sind anhand von Anforderungen und Konsequenzen zu klären.",
   "Richtig: Termin, Betriebssicherheit und technische Schulden zielen auf verschiedene Zeithorizonte. Das offene Abwägen schafft tragfähige Entscheidungen.",
   "Falsch: Betriebsanforderungen betreffen Qualitäten wie Zuverlässigkeit und Beobachtbarkeit und beeinflussen den Entwurf.",
   "Falsch: Technische Schulden wirken auf Kosten, Änderbarkeit und Termine späterer Releases. Das betrifft auch das Produktmanagement."
  ],
  "explanation": "Anliegen werden identifiziert, Zielkonflikte und ihre Konsequenzen offen gemacht und kurz- gegen langfristige Ziele abgewogen. Fallen: Entscheidung nach Hierarchie, Betrieb und technische Schulden ausblenden."
 },
 {
  "id": "c3q98",
  "chapter": 3,
  "lz": "LZ 03-03",
  "r": "R1",
  "type": "multi",
  "q": "Ein Team soll eine neue Plattform entwerfen. Für Teile steht Technologie bereits fest (ein erprobter Authentifizierungsdienst und ein Altsystem-Kern), andere Teile sind fachlich noch offen. Welche Überlegungen zum Entwurfsvorgehen sind sinnvoll?",
  "options": [
   "Für Teile mit feststehenden Komponenten bietet sich ein Bottom-up-Vorgehen an.",
   "Man muss sich auf eine Richtung festlegen, Mischformen verwirren das Team.",
   "Für fachlich offene Teile bietet sich ein Top-down-Vorgehen an, um die Struktur aus den Anforderungen abzuleiten.",
   "Bottom-up heißt, ohne Kenntnis der Anforderungen zu beginnen.",
   "Beide Richtungen kombinieren und iterativ aufeinander abstimmen.",
   "Top-down eignet sich für kleine Systeme, für Plattformen ist es ungeeignet.",
   "Die Struktur schrittweise über Sichten (Baustein-, Laufzeit-, Verteilungssicht) konkretisieren und absichern.",
   "Vorhandene Komponenten ignorieren, um den Entwurf nicht einzuengen."
  ],
  "correct": [
   0,
   2,
   4,
   6
  ],
  "optExpl": [
   "Richtig: Vorhandene Bausteine werden zu größeren Einheiten zusammengesetzt. Das passt, wenn Teile vorgegeben sind.",
   "Falsch: In der Praxis werden beide Richtungen kombiniert und iterativ gewechselt. Eine starre Festlegung bringt keinen Vorteil.",
   "Richtig: Top-down zerlegt das Ganze schrittweise anhand der Anforderungen. Das hilft, wo noch nichts feststeht.",
   "Falsch: Auch Bottom-up muss sich an Anforderungen messen lassen. Es beschreibt die Richtung des Zusammensetzens, nicht das Ignorieren von Zielen.",
   "Richtig: Erkenntnisse aus festen Teilen beeinflussen den Gesamtentwurf und umgekehrt. Iteratives Abstimmen deckt Widersprüche früh auf.",
   "Falsch: Die Eignung hängt davon ab, ob und wie viel feststeht, nicht von der Größe.",
   "Richtig: Sichtenbasierte Architekturentwicklung ist ein im Curriculum genanntes Vorgehen und lässt sich mit beiden Richtungen verbinden.",
   "Falsch: Vorgegebene Komponenten sind Randbedingungen. Sie zu ignorieren führt zu einem Entwurf, der sich nicht umsetzen lässt."
  ],
  "explanation": "Bottom-up passt zu feststehenden Teilen, Top-down zu fachlich offenen; beide werden kombiniert und iterativ abgestimmt, ergänzt durch sichtenbasiertes Vorgehen. Fallen: starre Festlegung, Bottom-up ohne Anforderungen, Größe als Kriterium, Vorgaben ignorieren."
 },
 {
  "id": "c4q51",
  "chapter": 4,
  "lz": "LZ 04-08",
  "r": "R2",
  "type": "multi",
  "q": "Das Team hat sich nach langer Diskussion für einen Message-Broker entschieden. Ein halbes Jahr später zeigt sich, dass die Latenz für einen Anwendungsfall zu hoch ist, und das Team wechselt für diesen Fall zu direkten Aufrufen. Wie sollte das mit ADRs festgehalten werden?",
  "options": [
   "Das ursprüngliche ADR bleibt erhalten und erhält den Status „abgelöst“.",
   "Das ursprüngliche ADR wird überschrieben, damit nur der aktuelle Stand steht.",
   "Ein neues ADR hält Kontext (Latenzproblem), Entscheidung und Konsequenzen fest.",
   "Der Wechsel wird nur im Code vollzogen, das ADR bleibt unverändert.",
   "Das neue ADR verweist auf das abgelöste, damit der Zusammenhang erkennbar bleibt."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: So bleibt die Entscheidungshistorie nachvollziehbar. Der Status zeigt auf einen Blick, dass die Entscheidung nicht mehr gilt.",
   "Falsch: Dann gehen Kontext und Gründe der ersten Entscheidung verloren. Eine Änderung soll als neues ADR festgehalten werden.",
   "Richtig: Ein ADR nach Nygard enthält Kontext, Entscheidung und Konsequenzen. Das neue Wissen über die Latenz ist der Kontext der neuen Entscheidung.",
   "Falsch: Dann widerspricht die Dokumentation dem System, und Neueinsteiger folgen einer überholten Entscheidung.",
   "Richtig: Entscheidungen hängen voneinander ab. Der Verweis macht die Abhängigkeit zwischen alter und neuer Entscheidung sichtbar."
  ],
  "explanation": "Eine geänderte Entscheidung wird als neues ADR festgehalten, das auf das alte verweist, und das alte bekommt den Status „abgelöst“. Fallen: Überschreiben und reine Code-Änderung."
 },
 {
  "id": "c3q99",
  "chapter": 3,
  "lz": "LZ 03-05",
  "r": "R1",
  "type": "multi",
  "q": "Das Team muss entscheiden, ob es für einen Teil des Systems eine NoSQL-Datenbank einsetzt. Niemand im Team hat Erfahrung damit, und die erwartete Datenmenge ist unklar. Der Release-Termin in drei Monaten steht fest. Welche Vorgehensweisen reduzieren das Risiko?",
  "options": [
   "Einen kurzen Proof of Concept mit realistischen Datenmengen durchführen.",
   "Die Entscheidung bis kurz vor dem Release verschieben.",
   "In überschaubaren Iterationen entscheiden und die Entscheidung anhand der Ergebnisse bestätigen oder korrigieren.",
   "Die Datenbank einführen und Erfahrungen sammeln, ohne einen Rückfallplan.",
   "Die Datenhaltung hinter einer Schnittstelle kapseln, damit ein späterer Wechsel möglich bleibt.",
   "Dem Marktführer folgen, ohne die Anforderungen zu prüfen.",
   "Die Datenmenge schätzen und die Entscheidung dann endgültig festschreiben."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Er ersetzt Annahmen über Eignung und Menge durch Messwerte, solange der Termin noch Spielraum lässt.",
   "Falsch: Aufschieben verschiebt das Risiko in eine Phase, in der Korrekturen teuer sind, und liefert keine neuen Erkenntnisse.",
   "Richtig: Iteratives Vorgehen erhöht die Prognostizierbarkeit und verkleinert das Risiko von Entscheidungen unter Unsicherheit.",
   "Falsch: Ohne Rückfallplan trägt das Team das volle Risiko. Bei fester Frist wäre ein Scheitern kaum noch korrigierbar.",
   "Richtig: Kapselung begrenzt, was von der Entscheidung abhängt. Das senkt die Kosten einer Korrektur.",
   "Falsch: Beliebtheit ersetzt keine Eignungsprüfung für die eigenen Anforderungen und Randbedingungen.",
   "Falsch: Eine Schätzung bleibt Annahme. Eine endgültige Festlegung verhindert, aus Erkenntnissen zu lernen."
  ],
  "explanation": "Unsicherheit reduziert man durch frühe Prüfung (Proof of Concept), iteratives Entscheiden und Kapselung, damit Korrekturen günstig bleiben. Fallen: Aufschieben, Einführen ohne Rückfall, Modewahl, endgültige Festschreibung auf Schätzung."
 },
 {
  "id": "n1",
  "chapter": 3,
  "lz": "LZ 03-03",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Ein Team wählt das Vorgehen für den Entwurf. Spricht die Situation eher für Top-down oder eher für Bottom-up?",
  "categories": [
   "Eher Top-down",
   "Eher Bottom-up"
  ],
  "rows": [
   {
    "text": "Eine Neuentwicklung mit überblickbarem Gesamtproblem: erst die großen Bausteine, dann schrittweise Verfeinerung.",
    "cat": 0
   },
   {
    "text": "Eine vorhandene Bibliothek und ein gesetztes Framework bestimmen große Teile der Struktur.",
    "cat": 1
   },
   {
    "text": "Aus mehreren bestehenden Diensten soll eine neue Gesamtlösung zusammengesetzt werden.",
    "cat": 1
   },
   {
    "text": "Zuerst werden Kontext und erste Bausteinebene festgelegt, die Details folgen später.",
    "cat": 0
   },
   {
    "text": "Ein Altsystem liefert viele Teile, die weiterverwendet werden müssen.",
    "cat": 1
   }
  ],
  "rowExpl": [
   "Ist das Gesamtproblem überblickbar, etwa bei einer Neuentwicklung, geht man vom Ganzen zu den Teilen: erst große Bausteine, dann schrittweise Verfeinerung. Das ist Top-down.",
   "Wenn Bibliothek und Framework große Teile der Struktur vorgeben, baut man auf Vorhandenem auf und passt den Entwurf daran an. Das spricht für Bottom-up.",
   "Eine Gesamtlösung aus bestehenden Diensten zusammenzusetzen heißt, aus vorhandenen Teilen größere Strukturen zu bilden. Das ist typisch Bottom-up.",
   "Zuerst Kontext und erste Bausteinebene festzulegen und Details später zu klären, geht vom Ganzen zu den Teilen. Das ist Top-down, nicht Bottom-up.",
   "Liefert ein Altsystem viele Teile, die weiterverwendet werden müssen, bestimmt das Vorhandene den Entwurf. Das spricht für Bottom-up; in der Praxis kombiniert man beides."
  ],
  "explanation": "Top-down geht vom Ganzen zu den Teilen und passt, wenn das Gesamtproblem überblickbar ist, etwa bei Neuentwicklungen. Bottom-up setzt aus vorhandenen Teilen größere Strukturen zusammen und passt, wenn viel Bestehendes genutzt werden muss. In der Praxis kombiniert man beides iterativ."
 },
 {
  "id": "n2",
  "chapter": 3,
  "lz": "LZ 03-03",
  "r": "R1",
  "type": "multi",
  "q": "Ein Team beginnt einen Neuentwurf top-down, stößt aber auf ein gesetztes Framework, das große Teile der Struktur vorgibt. Welche Aussagen zum Vorgehen treffen zu?",
  "options": [
   "Das Team kann zusätzlich Sichten erarbeiten, um die Architektur aus mehreren Blickwinkeln zu entwickeln.",
   "Bottom-up ist nur für Altsysteme zulässig, bei Neuentwicklungen nicht.",
   "„Das Riskanteste zuerst klären“ ist eine Heuristik, die einen guten Startpunkt liefert.",
   "Heuristiken wie „Teile und herrsche“ liefern verbindliche Ergebnisse und ersetzen die Bewertung des Entwurfs.",
   "Die Richtung darf wechseln: Top-down und Bottom-up werden in der Praxis kombiniert und iterativ eingesetzt.",
   "Die einmal gewählte Richtung muss konsequent bis zum Ende beibehalten werden."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Sichtenbasiertes Vorgehen ist ein eigener Ansatz und lässt sich mit Top-down und Bottom-up verbinden. So entwickelt das Team die Architektur aus mehreren Blickwinkeln, auch wenn ein Framework Teile vorgibt.",
   "Falsch: Fehlende Verallgemeinerung: Bottom-up passt überall dort, wo viel Bestehendes genutzt werden muss, also auch in Neuentwicklungen, etwa bei einem gesetzten Framework. Es ist nicht auf Altsysteme beschränkt.",
   "Richtig: Unsicherheiten früh zu klären senkt das Risiko späterer, teurer Korrekturen. Die Heuristik „Das Riskanteste zuerst klären“ liefert deshalb einen guten Startpunkt für den Entwurf.",
   "Falsch: Heuristiken wie „Teile und herrsche“ sind Erfahrungsregeln und gute Startpunkte, liefern aber keine verbindlichen Ergebnisse. Sie ersetzen die Bewertung des Entwurfs nicht.",
   "Richtig: Man wechselt die Richtung je nach Wissensstand; Top-down und Bottom-up ergänzen sich und werden in der Praxis iterativ kombiniert, etwa wenn ein Framework die Struktur vorprägt.",
   "Falsch: „Genau eine Richtung konsequent“ ist ein Trugschluss. In der Praxis wird kombiniert und die Richtung bei neuem Wissen gewechselt; ein starres Festhalten verschenkt diese Flexibilität."
  ],
  "explanation": "Top-down, Bottom-up und sichtenbasiertes Vorgehen werden kombiniert und iterativ genutzt; Heuristiken wie „Riskantestes zuerst klären“ sind Startpunkte, keine Garantie. Fallen: eine Richtung bis zum Ende erzwingen und Heuristiken als Ergebnis lesen."
 },
 {
  "id": "n3",
  "chapter": 3,
  "lz": "LZ 03-03",
  "r": "R1",
  "type": "single",
  "q": "Das Team kennt eine Technologie nicht, von der der Entwurf stark abhängt. Welche Heuristik passt am ehesten, und was folgt daraus?",
  "options": [
   "„Bewährtes wiederverwenden“: Das Team nimmt die Technologie ohne Prüfung, weil sie verbreitet ist.",
   "„Das Riskanteste zuerst klären“: Das Team prüft die Technologie früh, etwa mit einem Prototyp.",
   "„Teile und herrsche“: Das Team zerlegt das Problem so lange, bis die Technologie unwichtig wird.",
   "Das Team klärt die Technologie erst nach dem vollständigen Entwurf."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Verwechslung von Wiederverwendung und Bewertung: Verbreitung ersetzt keine Prüfung. Heuristiken sind Startpunkte, keine Freibriefe, und eine unbekannte, stark prägende Technologie bleibt ein ungeklärtes Risiko.",
   "Richtig: Die größte Unsicherheit wird früh geklärt, bevor viele Entscheidungen darauf aufbauen. Ein Prototyp zeigt rechtzeitig, ob die Technologie den Entwurf trägt, und senkt das Risiko teurer Korrekturen.",
   "Falsch: Zerlegen allein beseitigt die Unsicherheit nicht. „Teile und herrsche“ strukturiert das Problem, aber die Technologie bleibt ein Risiko, solange sie nicht geprüft wurde.",
   "Falsch: Eine späte Klärung macht Korrekturen teuer: Erweist sich die Technologie nach dem vollständigen Entwurf als ungeeignet, müssen viele darauf aufbauende Entscheidungen zurückgenommen werden."
  ],
  "explanation": "„Das Riskanteste zuerst klären“ passt, wenn eine unbekannte Technologie den Entwurf stark prägt: Man prüft sie früh, etwa per Prototyp. Fallen: Zerlegen als Ersatz für Klärung, Verbreitung als Beleg und spätes Prüfen."
 },
 {
  "id": "n4",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R2",
  "type": "multi",
  "q": "Ein Dienst empfängt Nachrichten von vielen Partnern; manche senden zusätzliche, unbekannte Felder. Welche Aussagen zum Prinzip „streng senden, tolerant annehmen“ (Postel’s Law) treffen zu?",
  "options": [
   "Eigene Nachrichten halten den Schnittstellenvertrag strikt ein.",
   "Unbekannte zusätzliche Felder in empfangenen Nachrichten werden ignoriert, statt die Nachricht abzulehnen.",
   "Jede Abweichung eines Partners wird sofort mit einem Fehler abgelehnt.",
   "Notwendige Angaben werden dennoch geprüft; Toleranz bedeutet nicht, Offensichtlich-Falsches zu akzeptieren.",
   "Das Prinzip gilt nur für Eingaben; eigene Ausgaben dürfen vom Vertrag abweichen.",
   "Tolerant annehmen heißt, Eingaben ungeprüft zu übernehmen."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Richtig: „Streng senden“ heißt, selbst nur vertragskonforme Nachrichten zu erzeugen. Das ist die erste Hälfte von Postel’s Law und macht das eigene Verhalten für Partner verlässlich.",
   "Richtig: Das ist die Toleranz beim Annehmen: Unbekannte Zusatzfelder werden ignoriert, statt die Nachricht abzulehnen. Das erleichtert die Weiterentwicklung von Schnittstellen, weil Sender neue Felder ergänzen können.",
   "Falsch: Das wäre das Gegenteil von tolerantem Annehmen. Wer jede Abweichung sofort ablehnt, ist beim Empfang streng und bricht bei harmlosen Erweiterungen, die das Prinzip gerade erlauben will.",
   "Richtig: Toleranz gilt für Unwesentliches, notwendige Inhalte müssen stimmen. Offensichtlich Falsches oder fehlende Pflichtangaben werden also weiterhin geprüft und nicht einfach akzeptiert.",
   "Falsch: Einseitige Auslegung: Das Prinzip verlangt gerade strenges Senden. Eigene Ausgaben müssen den Vertrag einhalten; die Toleranz betrifft nur das, was man annimmt.",
   "Falsch: Begriffsverwechslung von Toleranz und Prüfungsverzicht: Tolerant annehmen heißt, Unwesentliches zu verzeihen, nicht Eingaben ungeprüft zu übernehmen. Notwendige Angaben müssen weiterhin validiert werden."
  ],
  "explanation": "Postel’s Law: streng in dem, was man sendet, tolerant in dem, was man annimmt. Toleranz heißt nicht „ungeprüft“. Fallen: Prüfungen weglassen, das Prinzip nur auf Eingaben beziehen und jede Abweichung ablehnen."
 },
 {
  "id": "n5",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R2",
  "type": "k",
  "points": 2,
  "q": "Welches Entwurfsprinzip beschreibt das jeweilige Beispiel am besten?",
  "categories": [
   "Abstraktion",
   "Einheitlichkeit"
  ],
  "rows": [
   {
    "text": "Alle Schnittstellen des Systems verwenden dieselbe Fehlerstruktur und dieselbe Benennung.",
    "cat": 1
   },
   {
    "text": "Die Fachlogik hängt von einer Speicher-Schnittstelle ab, nicht von einer konkreten Datenbankklasse.",
    "cat": 0
   },
   {
    "text": "Alle Dienste protokollieren im selben Format und mit denselben Pflichtfeldern.",
    "cat": 1
   },
   {
    "text": "Das Berichtsmodul nutzt eine Schnittstelle „Exporter“, statt direkt eine PDF-Klasse aufzurufen.",
    "cat": 0
   },
   {
    "text": "Gleichartige Aufgaben werden im ganzen System nach demselben Muster gelöst.",
    "cat": 1
   }
  ],
  "rowExpl": [
   "Gleiche Fehlerstruktur und Benennung über alle Schnittstellen bedeuten, Gleichartiges gleichartig zu lösen. Das ist Einheitlichkeit; Abstraktion würde von Implementierungen entkoppeln.",
   "Die Fachlogik hängt von einer Schnittstelle statt von einer konkreten Datenbankklasse ab. Das ist Abstraktion: Man hängt von Abstraktionen, nicht von Implementierungen ab.",
   "Dasselbe Logformat mit denselben Pflichtfeldern in allen Diensten löst Gleichartiges gleichartig. Das ist Einheitlichkeit, keine Entkopplung durch Abstraktion.",
   "Das Berichtsmodul nutzt die Schnittstelle „Exporter“ statt einer PDF-Klasse und hängt damit von einer Abstraktion ab, nicht von einer Implementierung. Das ist Abstraktion.",
   "Gleichartige Aufgaben im ganzen System nach demselben Muster zu lösen, ist die Definition von Einheitlichkeit. Mit Abhängigkeit von Schnittstellen hat das nichts zu tun."
  ],
  "explanation": "Abstraktion bedeutet, von Abstraktionen statt von Implementierungen abzuhängen. Einheitlichkeit bedeutet, Gleichartiges gleichartig zu lösen."
 },
 {
  "id": "n6",
  "chapter": 3,
  "lz": "LZ 03-10",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Ist die Aussage ein Querschnittsthema (das Problem) oder ein Querschnittskonzept (die Lösung)?",
  "categories": [
   "Querschnittsthema (Problem)",
   "Querschnittskonzept (Lösung)"
  ],
  "rows": [
   {
    "text": "Wie gehen alle Bausteine mit Netzwerkfehlern um?",
    "cat": 0
   },
   {
    "text": "Wiederholungen werden begrenzt, und Empfänger sind idempotent.",
    "cat": 1
   },
   {
    "text": "Wie bleibt die Oberfläche bei langen Aufgaben reaktionsfähig?",
    "cat": 0
   },
   {
    "text": "Lange Aufgaben laufen im Hintergrund, der Fortschritt wird gemeldet.",
    "cat": 1
   },
   {
    "text": "Wie werden Daten im ganzen System dauerhaft gespeichert?",
    "cat": 0
   }
  ],
  "rowExpl": [
   "Die Frage, wie alle Bausteine mit Netzwerkfehlern umgehen, benennt ein Problem, das viele Bausteine betrifft. Das ist ein Querschnittsthema; die Antwort darauf wäre das Konzept.",
   "Begrenzte Wiederholungen und idempotente Empfänger sind eine übergreifende, einheitliche Antwort auf Netzwerkfehler. Das ist ein Querschnittskonzept, kein Problem.",
   "Die Frage, wie die Oberfläche bei langen Aufgaben reaktionsfähig bleibt, benennt ein Problem. Das ist ein Querschnittsthema und noch keine Lösung.",
   "Lange Aufgaben im Hintergrund auszuführen und den Fortschritt zu melden, ist die Lösung für die Reaktionsfähigkeit. Das ist ein Querschnittskonzept, nicht das Thema selbst.",
   "Wie Daten im ganzen System dauerhaft gespeichert werden, ist als Frage formuliert und betrifft viele Bausteine. Das ist ein Querschnittsthema; erst die einheitliche Antwort wäre ein Konzept."
  ],
  "explanation": "Ein Querschnittsthema ist das Problem oder die Frage, die viele Bausteine betrifft. Das Querschnittskonzept ist die übergreifende, einheitliche Lösung dazu."
 },
 {
  "id": "n7",
  "chapter": 3,
  "lz": "LZ 03-10",
  "r": "R1",
  "type": "multi",
  "q": "Ein Team entscheidet, dass Bausteine asynchron über Nachrichten kommunizieren. Welche Wechselwirkungen mit anderen Querschnittsthemen müssen bedacht werden?",
  "options": [
   "Keine, denn asynchrone Kommunikation macht die Fehlerbehandlung überflüssig.",
   "Wechselwirkungen entstehen nur, wenn das System auf mehrere Server verteilt ist.",
   "Fehlerbehandlung: Nachrichten können verloren gehen oder doppelt ankommen, daher braucht es Wiederholungen und idempotente Empfänger.",
   "Persistenz: Der Zustand muss zwischen Nachrichten gültig bleiben, etwa durch Transaktionen oder Wiederaufnahme.",
   "Oberfläche: Rückmeldungen kommen verzögert, daher braucht es verständliche Statusanzeigen statt endlosen Wartens.",
   "Nur die Oberfläche ist betroffen, Persistenz und Fehlerbehandlung bleiben unberührt."
  ],
  "correct": [
   2,
   3,
   4
  ],
  "optExpl": [
   "Falsch: Fehlschluss: Auch bei asynchroner Kommunikation können Fehler auftreten; sie zeigen sich nur später und indirekter. Fehlerbehandlung wird dadurch nicht überflüssig, sondern anspruchsvoller.",
   "Falsch: Wechselwirkungen hängen an den Querschnittsthemen selbst, nicht an der Anzahl der Server. Schon innerhalb eines Systems beeinflussen sich Kommunikation, Persistenz, Fehlerbehandlung und Oberfläche.",
   "Richtig: Die Wahl bei der Kommunikation bestimmt, was die Fehlerbehandlung leisten muss. Nachrichten können verloren gehen oder doppelt ankommen, daher braucht es Wiederholungen und idempotente Empfänger.",
   "Richtig: Persistenz und Kommunikation hängen eng zusammen. Der Zustand muss zwischen Nachrichten gültig bleiben, etwa durch Transaktionen oder Wiederaufnahme nach Fehlern.",
   "Richtig: Asynchronität wirkt bis in die Gestaltung der Oberfläche. Rückmeldungen kommen verzögert, daher braucht es verständliche Statusanzeigen statt endlosen Wartens.",
   "Falsch: Verengung auf eine Einzelwirkung: Querschnittsthemen beeinflussen sich gegenseitig. Die Kommunikationsentscheidung wirkt auch auf Persistenz und Fehlerbehandlung, nicht nur auf die Oberfläche."
  ],
  "explanation": "Die Wahl bei der Kommunikation wirkt auf Fehlerbehandlung, Persistenz und Oberfläche. Fallen: Wechselwirkungen verneinen, einzelne Themen isoliert betrachten und sie an die Verteilung koppeln."
 },
 {
  "id": "n8",
  "chapter": 4,
  "lz": "LZ 04-02",
  "r": "R1",
  "type": "multi",
  "q": "Dieselbe Architektur soll dem Management und der Entwicklung vermittelt werden. Welche Aussagen zur Dokumentation und Kommunikation für diese Zielgruppen treffen zu?",
  "options": [
   "Das Management braucht vor allem Klassendiagramme, weil sie am genauesten sind.",
   "Beide Zielgruppen erhalten dasselbe vollständige Dokument, damit nichts verloren geht.",
   "Die Entwicklung braucht Bausteine, Schnittstellen und Konzepte.",
   "Inhalt, Form und Detailgrad richten sich an den Anliegen der jeweiligen Stakeholder aus.",
   "Dem Management genügt ein Überblick mit Risiken und Kosten."
  ],
  "correct": [
   2,
   3,
   4
  ],
  "optExpl": [
   "Falsch: Genauigkeit ist nicht das Kriterium für diese Zielgruppe. Zu viel Detail wie Klassendiagramme überfordert das Management, das einen Überblick mit Risiken und Kosten braucht.",
   "Falsch: Ein Dokument für alle ignoriert unterschiedliche Anliegen. Zielgruppengerecht heißt, Inhalt und Detailgrad je Zielgruppe anzupassen, statt alle mit demselben Gesamtwerk zu bedienen.",
   "Richtig: Das sind die Inhalte, mit denen Entwickler:innen arbeiten. Bausteine, Schnittstellen und Konzepte liefern ihnen die Vorgaben für die Umsetzung.",
   "Richtig: Das ist die Kernaussage zur zielgruppengerechten Kommunikation: Inhalt, Form und Detailgrad richten sich an den Anliegen der jeweiligen Stakeholder aus.",
   "Richtig: Das Management braucht Überblick, Risiken und Kosten, um Entscheidungen zu treffen. Technische Detailtiefe ist für diese Zielgruppe nicht nötig."
  ],
  "explanation": "Architektur wird entsprechend den Anliegen der Stakeholder dokumentiert: Management braucht Überblick, Risiken und Kosten, Entwicklung Bausteine, Schnittstellen und Konzepte. Fallen: ein Dokument für alle und zu viel Detail für das Management."
 },
 {
  "id": "n9",
  "chapter": 4,
  "lz": "LZ 04-02",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Aussagen zu mündlicher und schriftlicher Kommunikation von Architektur – richtig oder falsch?",
  "categories": [
   "Richtig",
   "Falsch"
  ],
  "rows": [
   {
    "text": "Präsentationen und Walkthroughs sollten auf der Dokumentation aufbauen.",
    "cat": 0
   },
   {
    "text": "Was in Meetings besprochen wird, muss nicht in die Dokumentation zurückfließen, wenn alle Beteiligten dabei waren.",
    "cat": 1
   },
   {
    "text": "Ein Template wirkt auch als Checkliste für die Vollständigkeit.",
    "cat": 0
   },
   {
    "text": "Beiträge mehrerer Autor:innen sollten stilistisch und inhaltlich konsolidiert werden.",
    "cat": 0
   },
   {
    "text": "Mündliche Kommunikation ersetzt bei kleinen Teams die schriftliche Dokumentation vollständig.",
    "cat": 1
   }
  ],
  "rowExpl": [
   "Mündliche Kommunikation soll auf der Dokumentation aufbauen, damit beides im Einklang bleibt. Die Aussage ist deshalb richtig.",
   "Auch wenn alle dabei waren: Ergebnisse aus Meetings müssen in die Dokumentation zurückfließen, sonst gehen sie verloren und Mündliches und Schriftliches laufen auseinander. Die Aussage ist falsch.",
   "Ein Template gibt Struktur und hilft zugleich zu prüfen, ob nichts fehlt. Die Aussage ist deshalb richtig.",
   "Mehrere Autor:innen schreiben oft unterschiedlich. Konsolidierte Beiträge machen die Dokumentation einheitlich lesbar, deshalb ist die Aussage richtig.",
   "Auch kleine Teams brauchen schriftliche Dokumentation, mündliche Absprache ersetzt sie nicht vollständig. Beides ergänzt sich, deshalb ist die Aussage falsch."
  ],
  "explanation": "Mündliche und schriftliche Kommunikation werden in Einklang gehalten: Präsentationen nutzen die Dokumentation, Ergebnisse aus Meetings fließen zurück. Templates geben Struktur und prüfen die Vollständigkeit, Beiträge werden konsolidiert. Falsch: Rückfluss weglassen und mündlich statt schriftlich."
 },
 {
  "id": "n10",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Gehört die Angabe zur Blackbox- oder zur Whitebox-Beschreibung eines Bausteins in der Bausteinsicht?",
  "categories": [
   "Blackbox",
   "Whitebox"
  ],
  "rows": [
   {
    "text": "Verantwortung des Bausteins sowie angebotene und benötigte Schnittstellen.",
    "cat": 0
   },
   {
    "text": "Die Unterbausteine und ihre Beziehungen untereinander.",
    "cat": 1
   },
   {
    "text": "Zusicherungen an der Schnittstelle, etwa zu Antwortzeit oder Fehlerverhalten.",
    "cat": 0
   },
   {
    "text": "Das Zusammenspiel der Unterbausteine bei der Erfüllung der Verantwortung.",
    "cat": 1
   },
   {
    "text": "Das, was Nutzer:innen des Bausteins ohne Kenntnis seines Inneren erwarten können.",
    "cat": 0
   }
  ],
  "rowExpl": [
   "Verantwortung sowie angebotene und benötigte Schnittstellen beschreiben den Baustein von außen. Das ist die Blackbox; die Whitebox zeigt das Innere.",
   "Unterbausteine und ihre Beziehungen untereinander zeigen das Innere des Bausteins. Das ist Whitebox; die Blackbox gibt es nur von außen sichtbar wieder.",
   "Zusicherungen an der Schnittstelle, etwa zu Antwortzeit oder Fehlerverhalten, sind aus Nutzersicht relevant. Sie gehören zur Blackbox, nicht zur inneren Struktur der Whitebox.",
   "Wie die Unterbausteine zusammenspielen, um die Verantwortung zu erfüllen, ist Innensicht. Das gehört in die Whitebox; die Blackbox sagt nur, was der Baustein leistet.",
   "Was Nutzer:innen ohne Kenntnis des Inneren erwarten können, beschreibt die Blackbox. Die Whitebox dagegen legt das Innere offen."
  ],
  "explanation": "Die Blackbox beschreibt Verantwortung, Schnittstellen und Zusicherungen aus Nutzersicht. Die Whitebox zeigt Unterbausteine, Beziehungen und Zusammenspiel; sie muss zur Blackbox konsistent sein und führt keine neuen externen Schnittstellen ein."
 },
 {
  "id": "n11",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R1",
  "type": "multi",
  "q": "Ein Team beschreibt Bausteinsicht, Verteilungssicht und Kontextsicht seines Systems. Welche Aussagen zur Konsistenz der Sichten treffen zu?",
  "options": [
   "Alle Sichten beschreiben dasselbe System und müssen zueinander konsistent sein.",
   "In der Verteilungssicht werden Bausteine Artefakten und Artefakte Knoten zugeordnet.",
   "Die Verteilungssicht ersetzt die Bausteinsicht, weil sie das reale System zeigt.",
   "Die Kontextsicht zeigt das Innenleben des Systems, damit die Nachbarn verständlich sind.",
   "Die Whitebox eines Bausteins darf keine neuen externen Schnittstellen einführen.",
   "Jede Sicht darf eigene Bausteine erfinden, solange sie für sich verständlich ist."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Richtig: Sichten sind unterschiedliche Blickwinkel auf dasselbe System. Deshalb dürfen sie sich nicht widersprechen, sondern müssen zueinander konsistent sein.",
   "Richtig: Das ist die Abbildung von Software auf Hardware bzw. Ausführungsumgebung: Bausteine werden Artefakten und Artefakte Knoten zugeordnet. So bleibt die Verteilungssicht mit der Bausteinsicht verknüpft.",
   "Falsch: Verwechslung von Ersatz und Ergänzung: Beide Sichten zeigen Verschiedenes, nämlich die Struktur der Bausteine bzw. die Abbildung auf Infrastruktur. Die Verteilungssicht ersetzt die Bausteinsicht nicht.",
   "Falsch: Begriffsverwechslung: Die Kontextsicht zeigt das System als Blackbox mit seinen Nachbarn. Das Innenleben gehört in die Bausteinsicht und nicht in den Kontext.",
   "Richtig: Die Whitebox muss zur Blackbox konsistent bleiben. Neue externe Schnittstellen in der Verfeinerung würden den Vertrag nach außen verändern und die Sichten widersprüchlich machen.",
   "Falsch: Erfundene Bausteine machen die Sichten widersprüchlich. Verständlichkeit für sich allein genügt nicht, weil alle Sichten dasselbe System beschreiben und dieselben Bausteine verwenden müssen."
  ],
  "explanation": "Sichten beschreiben dasselbe System konsistent: Die Whitebox hält sich an die Blackbox, die Verteilungssicht ordnet Bausteine Artefakten und Artefakte Knoten zu, die Kontextsicht zeigt das System als Blackbox. Fallen: eigene Bausteine je Sicht, Sichten als Ersatz füreinander und Innenleben im Kontext."
 },
 {
  "id": "n12",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Gehört die Angabe zum fachlichen oder zum technischen Kontext eines Bestellsystems?",
  "categories": [
   "Fachlicher Kontext",
   "Technischer Kontext"
  ],
  "rows": [
   {
    "text": "Die Bestellung geht vom Shop an das Lagersystem.",
    "cat": 0
   },
   {
    "text": "Die Bestellung wird per Message Queue im JSON-Format übertragen.",
    "cat": 1
   },
   {
    "text": "Der Zahlungsdienstleister liefert eine Zahlungsbestätigung.",
    "cat": 0
   },
   {
    "text": "Die Anbindung des Zahlungsdienstes erfolgt per REST über HTTPS.",
    "cat": 1
   },
   {
    "text": "Kund:innen geben ihre Lieferadresse ein.",
    "cat": 0
   }
  ],
  "rowExpl": [
   "Dass die Bestellung vom Shop an das Lagersystem geht, beschreibt, welche fachlichen Inhalte zwischen wem fließen. Das ist fachlicher Kontext; die Technik der Übertragung bleibt offen.",
   "Message Queue und JSON-Format sagen, über welchen Kanal und in welchem Format übertragen wird. Das ist technischer Kontext und keine fachliche Aussage.",
   "Die Zahlungsbestätigung ist ein fachlicher Inhalt, den der Dienstleister mit dem System austauscht. Wie sie übertragen wird, wäre technischer Kontext.",
   "REST über HTTPS nennt Protokoll und Technik der Anbindung. Das gehört in den technischen Kontext, nicht in den fachlichen.",
   "Dass Kund:innen ihre Lieferadresse eingeben, beschreibt fachlichen Austausch zwischen Nutzer:innen und System. Es nennt weder Kanal noch Protokoll, deshalb ist es fachlicher Kontext."
  ],
  "explanation": "Der fachliche Kontext zeigt, wer welche fachlichen Inhalte mit dem System austauscht. Der technische Kontext zeigt, über welche Kanäle, Protokolle und Formate das geschieht."
 },
 {
  "id": "n13",
  "chapter": 4,
  "lz": "LZ 04-08",
  "r": "R1",
  "type": "multi",
  "q": "Ein Team soll eine Grundsatzentscheidung zur Kommunikation zwischen Diensten vorbereiten. Welches Vorgehen ist sinnvoll?",
  "options": [
   "Problem und Einflussfaktoren klären, bevor Lösungen verglichen werden.",
   "Sofort die bekannteste Technologie wählen und die Begründung später nachliefern.",
   "Nur eine Alternative betrachten, um Zeit zu sparen.",
   "Mehrere Alternativen sammeln und an den Qualitätszielen bewerten.",
   "Die Entscheidung und ihre Gründe festhalten und kommunizieren."
  ],
  "correct": [
   0,
   3,
   4
  ],
  "optExpl": [
   "Richtig: Ohne klares Problem lassen sich Alternativen nicht sinnvoll bewerten. Erst wenn Problem und Einflussfaktoren geklärt sind, ist ein belastbarer Vergleich möglich.",
   "Falsch: Die Technologie zuerst zu wählen kehrt die Reihenfolge um. Die Begründung ist Teil der Entscheidung, nicht ein Nachtrag; sonst wird sie zur nachträglichen Rechtfertigung.",
   "Falsch: Mit nur einer Alternative gibt es keine Abwägung. Zeitersparnis ersetzt keine Entscheidung, und ohne Vergleich bleibt unklar, ob die Lösung zu den Zielen passt.",
   "Richtig: Bewertet wird anhand der priorisierten Qualitätsziele. Mehrere Alternativen zu sammeln macht die Abwägung erst möglich und zeigt, welche Lösung die Ziele am besten trägt.",
   "Richtig: So bleibt die Entscheidung nachvollziehbar und wird von den Beteiligten getragen. Festgehaltene Gründe helfen später, die Entscheidung zu verstehen und gegebenenfalls zu überprüfen."
  ],
  "explanation": "Entscheidungen trifft man systematisch: Problem und Einflussfaktoren klären, Alternativen sammeln, an den Qualitätszielen bewerten, entscheiden, festhalten und kommunizieren. Fallen: Technologie zuerst, Begründung später und nur eine Alternative."
 },
 {
  "id": "n14",
  "chapter": 4,
  "lz": "LZ 04-08",
  "r": "R1",
  "type": "multi",
  "q": "Ein Team entscheidet sich für eine Microservice-Architektur. Welche Folgeentscheidungen ziehen sich daraus typischerweise nach?",
  "options": [
   "Nur die Wahl der Programmiersprache ist betroffen.",
   "Wie die Services miteinander kommunizieren.",
   "Wo und wie die Daten der einzelnen Services gehalten werden.",
   "Keine, denn die Entscheidung betrifft nur die Struktur des Codes.",
   "Wie Betrieb, Deployment und Monitoring der vielen Services organisiert werden.",
   "Folgeentscheidungen müssen nicht festgehalten werden, weil sie sich aus der ersten Entscheidung ergeben."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Falsch: Verengung: Das Spektrum der Folgen ist breiter als die Sprachwahl. Eine Microservice-Entscheidung betrifft unter anderem Kommunikation, Datenhaltung und Betrieb.",
   "Richtig: Kommunikation muss neu entschieden werden, weil die Services nicht mehr im selben Prozess laufen. Protokolle und Muster der Interaktion sind eine typische Folgeentscheidung.",
   "Richtig: Jeder Service verwaltet typischerweise seine eigenen Daten. Daraus folgt die Entscheidung, wo und wie diese gehalten werden und wie sie zwischen Services konsistent bleiben.",
   "Falsch: Fehlschluss: Die Entscheidung betrifft nicht nur die Struktur des Codes. Entscheidungen hängen voneinander ab und ziehen Folgeentscheidungen nach sich, etwa zu Kommunikation und Betrieb.",
   "Richtig: Die Betriebskomplexität steigt mit der Zahl der Services und verlangt eigene Entscheidungen zu Organisation von Betrieb, Deployment und Monitoring.",
   "Falsch: Auch Folgeentscheidungen und ihre Abhängigkeiten sollten nachvollziehbar sein. Dass sie sich aus der ersten Entscheidung ergeben, ist kein Grund, sie nicht festzuhalten."
  ],
  "explanation": "Eine Microservice-Entscheidung erzwingt Folgeentscheidungen zu Kommunikation, Datenhaltung, Betrieb, Deployment und Monitoring. Abhängigkeiten zwischen Entscheidungen erkennt und dokumentiert man. Fallen: Folgen verneinen oder auf die Sprachwahl verengen."
 },
 {
  "id": "n15",
  "chapter": 4,
  "lz": "LZ 04-08",
  "r": "R2",
  "type": "k",
  "points": 2,
  "q": "Aussagen zu Architecture Decision Records (ADR) – richtig oder falsch?",
  "categories": [
   "Richtig",
   "Falsch"
  ],
  "rows": [
   {
    "text": "Ändert sich eine Entscheidung, wird das bestehende ADR überschrieben.",
    "cat": 1
   },
   {
    "text": "Ein ADR kann den Status „vorgeschlagen“ haben.",
    "cat": 0
   },
   {
    "text": "Ein ADR je Entscheidung, oft nah am Code versioniert, ist üblich.",
    "cat": 0
   },
   {
    "text": "Für jede Detailentscheidung im Code wird ein ADR geschrieben.",
    "cat": 1
   },
   {
    "text": "Eine abgelöste Entscheidung bleibt als ADR mit Status „abgelöst“ nachvollziehbar.",
    "cat": 0
   }
  ],
  "rowExpl": [
   "Eine geänderte Entscheidung bekommt ein neues ADR, das das alte ablöst. Das alte zu überschreiben, würde die Nachvollziehbarkeit zerstören, deshalb ist die Aussage falsch.",
   "Der Status eines ADR kann etwa „vorgeschlagen“, „akzeptiert“ oder „abgelöst“ sein. Ein ADR darf also noch offen sein, die Aussage ist richtig.",
   "Ein ADR je Entscheidung ist üblich, und es liegt oft nah am Code versioniert. So bleiben Entscheidung und Umsetzung zusammen nachvollziehbar, die Aussage ist richtig.",
   "ADR-würdig sind Entscheidungen mit erheblicher Wirkung, schwer umkehrbare oder solche mit Folgeentscheidungen. Nicht jede Detailentscheidung im Code braucht ein ADR, deshalb ist die Aussage falsch.",
   "Eine abgelöste Entscheidung wird nicht gelöscht, sondern bleibt als ADR mit Status „abgelöst“ nachvollziehbar. Die Aussage ist deshalb richtig."
  ],
  "explanation": "Ein ADR je Entscheidung mit Status, Kontext, Entscheidung und Konsequenzen; ein neues ADR löst ein altes ab, statt es zu überschreiben. ADR-würdig sind Entscheidungen mit erheblicher Wirkung, schwer umkehrbare oder solche mit Folgeentscheidungen, nicht jede Kleinigkeit."
 },
 {
  "id": "n16",
  "chapter": 1,
  "lz": "LZ 01-07",
  "r": "R2",
  "type": "k",
  "points": 2,
  "q": "Ist der Datentyp ein Produkt (UND) oder eine Summe (ODER)?",
  "categories": [
   "Produkt (UND)",
   "Summe (ODER)"
  ],
  "rows": [
   {
    "text": "Ein Kunde besteht aus Name, Adresse und Kundennummer.",
    "cat": 0
   },
   {
    "text": "Eine Zahlungsart ist genau eine von Kreditkarte, Lastschrift oder Gutschein.",
    "cat": 1
   },
   {
    "text": "Eine Adresse besteht aus Straße, Hausnummer, Postleitzahl und Ort.",
    "cat": 0
   },
   {
    "text": "Ein Zustellstatus ist entweder „versendet“, „zugestellt“ oder „retourniert“.",
    "cat": 1
   },
   {
    "text": "Ein Benutzerkonto hat Login, Passwort-Hash und Rolle.",
    "cat": 0
   }
  ],
  "rowExpl": [
   "Ein Kunde enthält Name, Adresse und Kundennummer gleichzeitig. Alle Bestandteile sind zusammen vorhanden (UND), deshalb ein Produkt und keine Summe.",
   "Eine Zahlungsart ist genau eine von mehreren Varianten, nie mehrere zugleich. Das ist ein ODER und damit eine Summe, kein Produkt.",
   "Eine Adresse besteht aus Straße, Hausnummer, Postleitzahl und Ort, und zwar alle zusammen (UND). Das ist ein Produkt, bei dem sich die Wertezahlen multiplizieren.",
   "Ein Zustellstatus hat zu jedem Zeitpunkt genau einen von drei Werten. Das ist ein ODER und damit eine Summe, deren Wertezahlen sich addieren.",
   "Ein Benutzerkonto hat Login, Passwort-Hash und Rolle zugleich (UND). Alle Bestandteile gehören zusammen, daher ein Produkt und keine Summe."
  ],
  "explanation": "Ein Produkt kombiniert alle Bestandteile (UND), die Zahl der möglichen Werte multipliziert sich. Eine Summe enthält genau eine von mehreren Varianten (ODER), die Zahl der möglichen Werte addiert sich."
 },
 {
  "id": "n17",
  "chapter": 2,
  "lz": "LZ 02-03",
  "r": "R1",
  "type": "multi",
  "q": "Ein Team diskutiert, was „Qualität“ bei Software bedeutet und wie sie sich zur Funktionalität verhält. Welche Aussagen treffen zu?",
  "options": [
   "Eine einzelne Anforderung betrifft immer genau eine Qualität.",
   "Qualitätsmodelle wie ISO 25010 gliedern Qualität in Qualitätsmerkmale.",
   "Die Veränderung einer Qualität kann andere beeinflussen, daher sind Abwägungen nötig.",
   "Architekt:innen können Qualitäten eines Systems nicht beeinflussen.",
   "Manche Kategorisierungen, etwa die des IREB, trennen Funktionalität und Qualität.",
   "Qualität bedeutet bei Software nur Fehlerfreiheit."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Falsch: Eine Anforderung kann mehrere Qualitäten berühren, etwa Sicherheit und Benutzbarkeit. Die Zuordnung „genau eine Qualität je Anforderung“ ist eine unzulässige Vereinfachung.",
   "Richtig: Die Hauptkategorien eines Qualitätsmodells wie ISO 25010 heißen Qualitätsmerkmale. Sie gliedern den vagen Begriff Qualität in benennbare Eigenschaften.",
   "Richtig: Die Veränderung einer Qualität kann andere beeinflussen, daher sind Abwägungen nötig. Beispiele sind Sicherheit gegen Benutzbarkeit oder Leistungseffizienz gegen Speicherbedarf.",
   "Falsch: Architekturentscheidungen prägen die Qualitäten eines Systems wesentlich. Architekt:innen können sie also sehr wohl beeinflussen, etwa über Struktur und Querschnittskonzepte.",
   "Richtig: Es gibt zwei Lesarten von Qualität, und die Trennung von Funktionalität und Qualität ist eine verbreitete, etwa in der Kategorisierung des IREB.",
   "Falsch: Begriffsverengung: Qualität umfasst viele Merkmale wie Änderbarkeit, Sicherheit oder Leistungseffizienz. Fehlerfreiheit ist nur ein Aspekt davon."
  ],
  "explanation": "Qualitätsmerkmale gliedern Qualität; manche Kategorisierungen trennen Funktionalität und Qualität. Qualitäten stehen in Wechselwirkung, und Architekt:innen beeinflussen sie. Fallen: Qualität gleich Fehlerfreiheit und ein Merkmal je Anforderung."
 },
 {
  "id": "n18",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R1",
  "type": "multi",
  "q": "Ein Team wertet Antwortzeiten aus: Der Mittelwert liegt bei 0,8 s, einzelne Nutzer:innen warten aber regelmäßig mehr als 5 s. Welche Aussagen treffen zu?",
  "options": [
   "Die Messung ersetzt jede qualitative Bewertung der Architektur.",
   "Ein Szenario sollte ein Perzentil nennen, z. B. „95 % der Anfragen unter 1 s“.",
   "Der Mittelwert kann Ausreißer verdecken und so ein falsches Bild vermitteln.",
   "Eine einzelne Metrik beweist, dass die Architektur gut ist.",
   "Neben dem Mittelwert sollten Perzentile betrachtet werden.",
   "Der Mittelwert genügt; Perzentile sind überflüssig."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Falsch: Qualitative und quantitative Verfahren ergänzen sich. Eine Messung liefert Zahlen, ersetzt aber nicht die qualitative Bewertung der Architektur, etwa durch Szenarien oder Reviews.",
   "Richtig: Ein Szenario mit Perzentil wie „95 % der Anfragen unter 1 s“ macht die Anforderung überprüfbar und berücksichtigt auch langsame Fälle, die der Mittelwert nicht erfasst.",
   "Richtig: Wenige sehr langsame Anfragen fallen im Mittelwert kaum auf. Er kann Ausreißer verdecken und so ein falsches Bild vermitteln, wie hier bei 0,8 s Mittel und regelmäßigen Wartezeiten über 5 s.",
   "Falsch: Eine einzelne Metrik ist nur ein Hinweis und beweist nicht, dass die Architektur gut ist. Aussagekräftig wird die Bewertung erst im Zusammenspiel mehrerer Befunde.",
   "Richtig: Perzentile zeigen, wie viele Anfragen eine Grenze überschreiten, und ergänzen den Mittelwert um die Verteilung. So werden die langsamen Fälle sichtbar.",
   "Falsch: Der Mittelwert kann Ausreißer verbergen, wie das Beispiel zeigt. Perzentile sind deshalb nicht überflüssig, sondern nötig, um die Nutzererfahrung realistisch zu beurteilen."
  ],
  "explanation": "Neben dem Mittelwert betrachtet man Perzentile, weil der Mittelwert Ausreißer verbirgt; Szenarien nennen daher oft ein Perzentil. Eine Metrik allein beweist nichts. Fallen: nur den Mittelwert nutzen und Messung als Ersatz für Bewertung."
 },
 {
  "id": "n19",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Beschreibt die Aussage Fan-in (eingehend) oder Fan-out (ausgehend)?",
  "categories": [
   "Fan-in (eingehend)",
   "Fan-out (ausgehend)"
  ],
  "rows": [
   {
    "text": "Wie viele andere Bausteine nutzen diesen Baustein?",
    "cat": 0
   },
   {
    "text": "Wie viele andere Bausteine braucht dieser Baustein?",
    "cat": 1
   },
   {
    "text": "Hoher Wert: Änderungen am Baustein sind riskant, weil viele davon betroffen sind.",
    "cat": 0
   },
   {
    "text": "Hoher Wert: Der Baustein braucht viel Wissen über andere Bausteine.",
    "cat": 1
   },
   {
    "text": "Das entspricht der afferenten Kopplung.",
    "cat": 0
   }
  ],
  "rowExpl": [
   "Gezählt werden die Bausteine, die diesen Baustein nutzen, also eingehende Abhängigkeiten. Das ist Fan-in, nicht Fan-out, das die selbst benötigten Bausteine zählt.",
   "Gezählt werden die Bausteine, die dieser Baustein selbst braucht, also ausgehende Abhängigkeiten. Das ist Fan-out, nicht Fan-in, das die Nutzer des Bausteins zählt.",
   "Ein hoher Fan-in heißt, dass viele Bausteine vom betrachteten abhängen. Änderungen wirken sich auf alle aus und sind riskant. Beim Fan-out ginge es dagegen um die eigenen Abhängigkeiten.",
   "Ein hoher Fan-out heißt, dass der Baustein viele andere braucht und daher viel über sie wissen muss. Das betrifft die eigenen ausgehenden Abhängigkeiten, nicht die Nutzer wie beim Fan-in.",
   "Afferente Kopplung zählt die eingehenden Abhängigkeiten, also die Nutzer des Bausteins. Das ist Fan-in; die efferente Kopplung entspräche dem Fan-out."
  ],
  "explanation": "Fan-in (afferent) zählt, wie viele Bausteine einen Baustein nutzen; Änderungen daran sind riskant. Fan-out (efferent) zählt, wie viele Bausteine er selbst braucht; ein hoher Wert bedeutet viel nötiges Wissen über andere."
 },
 {
  "id": "n20",
  "chapter": 5,
  "lz": "LZ 05-03",
  "r": "R2",
  "type": "k",
  "points": 2,
  "q": "Beschreibt die Aussage einen Walkthrough oder eine Inspektion?",
  "categories": [
   "Walkthrough",
   "Inspektion"
  ],
  "rows": [
   {
    "text": "Der Autor moderiert das gemeinsame Durchgehen in einer Sitzung.",
    "cat": 0
   },
   {
    "text": "Individuelle Vorbereitung, Protokoll und unabhängige Moderation.",
    "cat": 1
   },
   {
    "text": "Gut für frühe Machbarkeitsfragen und Wissenstransfer.",
    "cat": 0
   },
   {
    "text": "Höchster Formalisierungsgrad, für besonders kritische Situationen.",
    "cat": 1
   },
   {
    "text": "Der Autor hört zu und erklärt; ein unabhängiger Moderator leitet.",
    "cat": 1
   }
  ],
  "rowExpl": [
   "Beim Walkthrough führt der Autor die Beteiligten in einer gemeinsamen Sitzung durch das Material und moderiert selbst. Bei der Inspektion leitet dagegen ein unabhängiger Moderator.",
   "Individuelle Vorbereitung, Protokoll und unabhängige Moderation sind Kennzeichen des formalen Vorgehens. Das ist die Inspektion, nicht der lockerere Walkthrough.",
   "Der Walkthrough ist weniger formal und eignet sich für frühe Machbarkeitsfragen und Wissenstransfer. Die streng formale Inspektion wird dafür nicht gebraucht.",
   "Die Inspektion ist die am stärksten formalisierte Form und deshalb für besonders kritische Situationen gedacht. Der Walkthrough ist dafür zu informell.",
   "Bei der Inspektion hört der Autor zu und erklärt, während ein unabhängiger Moderator die Sitzung leitet. Beim Walkthrough moderiert der Autor dagegen selbst."
  ],
  "explanation": "Ein Walkthrough ist ein gemeinsames Durchgehen in einer Sitzung, der Autor moderiert; geeignet für frühe Machbarkeit und Wissenstransfer. Eine Inspektion ist am stärksten formalisiert, mit individueller Vorbereitung, Protokoll und unabhängigem Moderator."
 },
 {
  "id": "n21",
  "chapter": 5,
  "lz": "LZ 05-03",
  "r": "R2",
  "type": "multi",
  "q": "Welche Befunde einer Konformitätsprüfung gelten als Problemindikatoren?",
  "options": [
   "Viele Kommentare im Quelltext.",
   "Eine Vermischung fachlicher und technischer Aspekte in einem Baustein.",
   "Ein einheitliches Schichtenschema im ganzen System.",
   "Zyklen oder ungewollte Abhängigkeiten zwischen Bausteinen.",
   "Eine gut lesbare Dokumentation.",
   "Ein hoher Fan-out, also viele ausgehende Abhängigkeiten eines Bausteins."
  ],
  "correct": [
   1,
   3,
   5
  ],
  "optExpl": [
   "Falsch: Kommentare sind kein Indikator für Abweichungen von der Architektur. Eine Konformitätsprüfung sucht Verstöße gegen Struktur und Abhängigkeitsregeln, nicht die Menge an Kommentaren.",
   "Richtig: Eine Vermischung fachlicher und technischer Aspekte in einem Baustein deutet auf verletzte Trennungen hin und weicht vom beabsichtigten Entwurf ab.",
   "Falsch: Ein einheitliches Schichtenschema entspricht dem Entwurf, solange die Regeln eingehalten werden. Es ist daher kein Problemindikator, sondern ein Zeichen für Konformität.",
   "Richtig: Zyklen oder ungewollte Abhängigkeiten widersprechen typischen Abhängigkeitsregeln des Entwurfs. Sie sind klassische Befunde einer Konformitätsprüfung.",
   "Falsch: Eine gut lesbare Dokumentation ist erwünscht und kein Problem. Sie sagt nichts über Verstöße der Implementierung gegen die Architektur aus.",
   "Richtig: Ein hoher Fan-out, also viele ausgehende Abhängigkeiten eines Bausteins, bedeutet hohe Kopplung. Diese weist auf Probleme hin, weil der Baustein von vielen anderen abhängt und schwer änderbar wird."
  ],
  "explanation": "Typische Problemindikatoren sind Zyklen oder ungewollte Abhängigkeiten, vermischte fachliche und technische Aspekte und hohe Kopplung (Fan-out). Fallen: Kommentare oder gute Dokumentation als Problem lesen."
 },
 {
  "id": "n22",
  "chapter": 1,
  "lz": "LZ 01-02",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Kann Softwarearchitektur das leisten, oder liegt es außerhalb ihrer Reichweite?",
  "categories": [
   "Kann Architektur leisten",
   "Liegt außerhalb ihrer Reichweite"
  ],
  "rows": [
   {
    "text": "Strukturelle Voraussetzungen für die geforderten Qualitäten schaffen.",
    "cat": 0
   },
   {
    "text": "Budget- und Termintreue garantieren.",
    "cat": 1
   },
   {
    "text": "Komplexität beherrschbar halten und das Verständnis fördern.",
    "cat": 0
   },
   {
    "text": "Selbst festlegen, welche Features und Qualitätsanforderungen gewünscht sind.",
    "cat": 1
   },
   {
    "text": "Die Entwicklung durch Richtlinien lenken.",
    "cat": 0
   }
  ],
  "rowExpl": [
   "Architektur schafft die strukturellen Voraussetzungen für Funktion und Qualität, etwa durch Zerlegung und Querschnittskonzepte. Das gehört zu ihrem Kern, deshalb kann sie es leisten.",
   "Budget- und Termintreue hängen von Planung, Steuerung und vielen weiteren Faktoren ab. Architektur kann dazu beitragen, garantieren kann sie sie nicht, es liegt außerhalb ihrer Reichweite.",
   "Gute Strukturierung hält Komplexität beherrschbar und fördert das Verständnis aller Beteiligten. Das ist eine zentrale Leistung von Architektur und liegt in ihrer Reichweite.",
   "Welche Features und Qualitätsanforderungen gewünscht sind, legen die Stakeholder fest. Architektur setzt sie um und entscheidet sie nicht selbst, daher außerhalb ihrer Reichweite.",
   "Architektur gibt Richtlinien vor, an denen sich die Entwicklung orientiert, und lenkt sie so. Das ist ein Mittel, das ihr zur Verfügung steht, deshalb kann sie es leisten."
  ],
  "explanation": "Architektur schafft die strukturellen Voraussetzungen für Funktion und Qualität, hält Komplexität beherrschbar, fördert Verständnis und gibt Richtlinien vor. Budget, Termine und Features liegen außerhalb ihrer Reichweite."
 },
 {
  "id": "n23",
  "chapter": 2,
  "lz": "LZ 02-05",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Ist die Aussage eine Annahme (unterstellt, nicht gesichert) oder eine Randbedingung (vorgegeben)?",
  "categories": [
   "Annahme",
   "Randbedingung"
  ],
  "rows": [
   {
    "text": "Der Partnerdienst ist zu 99,9 % verfügbar, bestätigt hat das niemand.",
    "cat": 0
   },
   {
    "text": "Das Unternehmen schreibt PostgreSQL als Datenbank vor.",
    "cat": 1
   },
   {
    "text": "Die Nutzer:innen haben schnelle Verbindungen; geprüft wurde das nie.",
    "cat": 0
   },
   {
    "text": "Personenbezogene Daten müssen laut Gesetz in der EU gespeichert werden.",
    "cat": 1
   },
   {
    "text": "Das Team schätzt, dass das Lastvolumen im ersten Jahr unter 1000 Anfragen pro Minute bleibt.",
    "cat": 0
   }
  ],
  "rowExpl": [
   "Die Verfügbarkeit des Partnerdienstes wird unterstellt, aber nicht bestätigt. Ein unterstellter, nicht gesicherter Sachverhalt ist eine Annahme und sollte geprüft werden, keine Randbedingung.",
   "Dass das Unternehmen PostgreSQL vorschreibt, ist eine Vorgabe von außen. Sie ist gegeben und schränkt den Lösungsraum ein, daher eine Randbedingung und keine Annahme.",
   "Schnelle Verbindungen der Nutzer:innen werden angenommen, ohne dass sie geprüft wurden. Das ist ein unterstellter, nicht gesicherter Sachverhalt und damit eine Annahme.",
   "Die gesetzliche Pflicht, personenbezogene Daten in der EU zu speichern, ist vorgegeben und nicht verhandelbar. Sie schränkt den Lösungsraum ein und ist eine Randbedingung.",
   "Die Schätzung des Teams zum Lastvolumen ist nicht gesichert, sondern eine Einschätzung. Sie ist unterstellt statt vorgegeben, deshalb eine Annahme, die man explizit festhalten und prüfen sollte."
  ],
  "explanation": "Eine Annahme ist ein unterstellter, aber nicht gesicherter Sachverhalt und sollte explizit festgehalten und geprüft werden. Eine Randbedingung ist vorgegeben und schränkt den Lösungsraum ein."
 },
 {
  "id": "n24",
  "chapter": 3,
  "lz": "LZ 03-02",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Gehört die Angabe zur fachlichen oder zur technischen Architektur?",
  "categories": [
   "Fachliche Architektur",
   "Technische Architektur"
  ],
  "rows": [
   {
    "text": "Fachkontext und Fachmodell des Systems.",
    "cat": 0
   },
   {
    "text": "Wahl von Datenbank, Technologien und Deployment.",
    "cat": 1
   },
   {
    "text": "Welche Leistungen das System in der Domäne erbringt.",
    "cat": 0
   },
   {
    "text": "Realisierung durch Muster wie Schichten.",
    "cat": 1
   },
   {
    "text": "Das Datenmodell der Domäne.",
    "cat": 0
   }
  ],
  "rowExpl": [
   "Fachkontext und Fachmodell beschreiben, was das System in der Domäne leistet. Das gehört zur fachlichen Architektur, nicht zur technischen Realisierung.",
   "Datenbank, Technologien und Deployment beschreiben, wie das System realisiert wird. Das ist technische Architektur; die fachliche Architektur sagt nur, was geleistet wird.",
   "Welche Leistungen das System in der Domäne erbringt, beschreibt das Was und nicht das Wie. Das gehört zur fachlichen Architektur.",
   "Muster wie Schichten sind ein Mittel der Realisierung und gehören zur technischen Architektur. Sie sagen nichts über die fachlichen Leistungen aus.",
   "Das Datenmodell der Domäne bildet die fachlichen Begriffe und ihre Zusammenhänge ab. Es gehört zur fachlichen Architektur, nicht zur technischen Realisierung."
  ],
  "explanation": "Die fachliche Architektur beschreibt, was das System in der Domäne leistet (Fachkontext, Fachmodell, Datenmodell). Die technische Architektur beschreibt, wie es realisiert wird (Muster, Technologien, Datenbank, Deployment)."
 },
 {
  "id": "n25",
  "chapter": 3,
  "lz": "LZ 03-05",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Aussagen zu Iterationen und Feedback im Architekturentwurf – richtig oder falsch?",
  "categories": [
   "Richtig",
   "Falsch"
  ],
  "rows": [
   {
    "text": "Feedback sollte erst eingeholt werden, wenn der Entwurf vollständig ausgearbeitet ist.",
    "cat": 1
   },
   {
    "text": "Iterationen senken das Risiko, weil Annahmen früh überprüft werden.",
    "cat": 0
   },
   {
    "text": "Demos und Prototypen sind systematische Wege, Feedback zu holen.",
    "cat": 0
   },
   {
    "text": "Jede Iteration liefert Fakten statt Vermutungen.",
    "cat": 0
   },
   {
    "text": "Feedback sollte dem Zufall überlassen werden, damit es unvoreingenommen bleibt.",
    "cat": 1
   }
  ],
  "rowExpl": [
   "Feedback erst nach vollständiger Ausarbeitung kommt zu spät, Fehlannahmen wären dann teuer zu korrigieren. Man holt es früh ein, deshalb ist die Aussage falsch.",
   "Iterationen überprüfen Annahmen früh und senken so das Risiko, dass sich erst spät zeigt, dass der Entwurf nicht trägt. Die Aussage ist richtig.",
   "Demos und Prototypen gehören neben Reviews und Messwerten zu den systematischen Wegen, Feedback zu bekommen. Die Aussage ist deshalb richtig.",
   "Jede Iteration liefert durch Überprüfung Fakten, die Vermutungen ersetzen. Das ist der Kern des Nutzens von Iterationen, die Aussage ist richtig.",
   "Feedback wird früh und systematisch geholt, nicht dem Zufall überlassen. Zufälliges Feedback ist unzuverlässig und sichert keine Überprüfung der Annahmen, daher ist die Aussage falsch."
  ],
  "explanation": "Iterationen senken das Risiko, weil man Annahmen früh überprüft und Fakten statt Vermutungen erhält. Feedback holt man früh und systematisch (Reviews, Demos, Prototypen, Messwerte), nicht erst nach vollständiger Ausarbeitung und nicht zufällig."
 },
 {
  "id": "n26",
  "chapter": 4,
  "lz": "LZ 04-01",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Aussagen zur Qualität von Architekturdokumentation – richtig oder falsch?",
  "categories": [
   "Richtig",
   "Falsch"
  ],
  "rows": [
   {
    "text": "Ob die Dokumentation verständlich ist, beurteilt die Zielgruppe.",
    "cat": 0
   },
   {
    "text": "Je umfangreicher die Dokumentation, desto besser.",
    "cat": 1
   },
   {
    "text": "Form, Inhalt und Detailgrad richten sich an der Zielgruppe aus.",
    "cat": 0
   },
   {
    "text": "Angemessen heißt: so viel wie nötig, so wenig wie möglich.",
    "cat": 0
   },
   {
    "text": "Die Verständlichkeit beurteilt am besten der Autor selbst.",
    "cat": 1
   }
  ],
  "rowExpl": [
   "Verständlichkeit hängt davon ab, wer liest. Deshalb beurteilt die Zielgruppe, ob die Dokumentation verständlich ist, und die Aussage ist richtig.",
   "Umfang ist kein Qualitätsmaß. Eine umfangreichere Dokumentation ist nicht automatisch besser, sie kann angemessen verfehlen; die Aussage ist falsch.",
   "Form, Inhalt und Detailgrad richten sich nach der Zielgruppe, weil unterschiedliche Leser:innen Unterschiedliches brauchen. Die Aussage ist deshalb richtig.",
   "Angemessen bedeutet, nur so viel zu dokumentieren wie nötig. Das passt zum Qualitätsmerkmal Angemessenheit, deshalb ist die Aussage richtig.",
   "Der Autor kennt das System zu gut, um die Verständlichkeit für andere zu beurteilen. Das kann die Zielgruppe am besten, deshalb ist die Aussage falsch."
  ],
  "explanation": "Gute Dokumentation ist verständlich (beurteilt von der Zielgruppe), korrekt, effizient, angemessen und wartbar. Umfang ist kein Qualitätsmaß; Form, Inhalt und Detailgrad richten sich an der Zielgruppe aus."
 }
];
