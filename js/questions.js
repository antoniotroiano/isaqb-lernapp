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
   "Sie entsteht erst durch ihre Dokumentation.",
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
   "Falsch: Architektur existiert unabhängig von ihrer Beschreibung. Dokumentation macht die vorhandene Architektur nur sichtbar und kommunizierbar, sie erschafft sie nicht.",
   "Richtig: Das ist der gemeinsame Kern der gängigen Architekturdefinitionen (R1). Bausteine allein ohne ihre Schnittstellen und Beziehungen beschreiben noch keine Architektur, erst das Zusammenspiel macht sie aus.",
   "Richtig: Das Curriculum zählt neben Strukturen auch Querschnittsthemen wie Persistenz, Logging oder Fehlerbehandlung sowie übergreifende Prinzipien ausdrücklich zur Architektur. Sie wirken über viele Bausteine hinweg.",
   "Falsch: Begriffsverwechslung: Ein Stil wie Schichten oder Microservices prägt die Architektur, ist aber nur ein Teil davon. Bausteine, Querschnittsthemen und tragende Entscheidungen gehen weit über den Stil hinaus."
  ],
  "explanation": "Architektur umfasst Bausteine mit Schnittstellen und Beziehungen, Querschnittsthemen, Prinzipien und tragende Entscheidungen, und jedes System hat eine. Fallen: Sie entsteht nicht erst durch Dokumentation, und der Architekturstil ist nur ein Teil davon."
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
  "q": "Was trifft auf das Verhältnis der Blackbox- und der Whitebox-Beschreibung eines Bausteins zu?",
  "options": [
   "Die Whitebox ersetzt die Blackbox-Beschreibung, sobald sie vorliegt, da sie alle Informationen der Außensicht enthält.",
   "Die Blackbox beschreibt die angebotenen Schnittstellen; die benötigten Schnittstellen gehören erst in die Whitebox.",
   "Die Whitebox zeigt, wie innere Bausteine zusammen Verantwortung und Schnittstellen der Blackbox erfüllen; sie darf ihr nicht widersprechen.",
   "Blackbox und Whitebox unterscheiden die Sichten: Die Blackbox gehört zur Bausteinsicht, die Whitebox zur Laufzeitsicht.",
   "In der Whitebox werden die enthaltenen Bausteine nur benannt; ihre Verantwortung und Schnittstellen entstehen erst mit deren eigener Whitebox."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Die Whitebox ergänzt die Blackbox. Verantwortung, Schnittstellen und Zusicherungen für Nutzer des Bausteins bleiben in der Blackbox beschrieben.",
   "Falsch: Auch die benötigten Schnittstellen gehören zur Außensicht. Die Blackbox verbirgt das Innere, nicht die Abhängigkeiten nach außen.",
   "Richtig: Die Whitebox verfeinert die Blackbox um die Innensicht. Beide beschreiben denselben Baustein und müssen konsistent sein.",
   "Falsch: Blackbox und Whitebox unterscheiden die Detailtiefe (Außen- bzw. Innensicht), nicht die Sicht. Beide kommen z. B. in der Bausteinsicht vor.",
   "Falsch: Jeder enthaltene Baustein hat seine Blackbox-Beschreibung (Verantwortung, Schnittstellen). Erst bei Bedarf wird er selbst als Whitebox geöffnet."
  ],
  "explanation": "Blackbox = Außensicht (WAS), Whitebox = Innensicht (WIE), beide konsistent und ergänzend. Fallen: Blackbox/Whitebox mit Bausteinsicht/Laufzeitsicht verwechseln, benötigte Schnittstellen der Whitebox zuschlagen, die Whitebox als Ersatz sehen."
 },
 {
  "id": "c1q4",
  "chapter": 4,
  "lz": "LZ 04-05",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zu Architektursichten treffen zu?",
  "options": [
   "Die Laufzeitsicht beschreibt, auf welchen Knoten die Bausteine betrieben werden.",
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
   "Falsch: Die Zuordnung von Bausteinen bzw. Artefakten zu Knoten ist Sache der Verteilungssicht. Die Laufzeitsicht beschreibt das Zusammenspiel der Bausteine in Szenarien.",
   "Falsch: Das „wann“ gehört in die Laufzeitsicht. Die Bausteinsicht zeigt die statische Zerlegung des Systems in Bausteine mit ihren Schnittstellen und Abhängigkeiten, nicht deren zeitliches Zusammenspiel in konkreten Abläufen.",
   "Richtig: Die Verteilungssicht zeigt, auf welchen Infrastrukturknoten (Server, Container, Geräte) welche Artefakte laufen und über welche Kanäle die Knoten verbunden sind. Beispiel: das Web-Archiv läuft auf zwei Applikationsservern hinter einem Load Balancer.",
   "Richtig: Die Laufzeitsicht beschreibt das dynamische Verhalten: Wie wirken Bausteine in einem konkreten Szenario zusammen? Typisch sind Sequenz- oder Aktivitätsdiagramme, etwa für den Ablauf „Bestellung aufgeben“ oder den Systemstart.",
   "Falsch: Hier wird die Kontextsicht mit Ebene 1 der Bausteinsicht verwechselt. Die Kontextsicht zeigt das System als Blackbox mit seinen externen Nachbarn (Nutzer, Fremdsysteme) und Schnittstellen; die erste Zerlegung gehört in die Bausteinsicht."
  ],
  "explanation": "Laufzeitsicht = dynamisches Zusammenspiel in Szenarien, Verteilungssicht = Artefakte auf Knoten. Fallen: Die Kontextsicht ist keine Zerlegungsebene, das zeitliche Verhalten gehört nicht in die Bausteinsicht, und die Zuordnung zu Knoten gehört nicht in die Laufzeitsicht."
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
  "q": "Wichtige Anforderungen sind noch offen, der Architekturstil muss aber festgelegt werden. Welches Vorgehen ist am ehesten angemessen?",
  "options": [
   "Den Stil so wählen, dass er möglichst alle denkbaren künftigen Anforderungen abdeckt.",
   "Die Entscheidung in einem ADR festhalten, damit sie später ohne Mehraufwand änderbar ist.",
   "Den Stil festlegen, die zugrunde liegenden Annahmen dokumentieren und die Entscheidung bei neuen Erkenntnissen überprüfen.",
   "Einen Prototyp des Stils bauen und diesen später zum Produktivsystem ausbauen.",
   "Die Entscheidung zurückstellen, bis der Auftraggeber die offenen Anforderungen abgenommen hat."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Ein Stil, der alles Denkbare abdeckt, ist meist komplex und teuer und trifft ohnehin nicht die tatsächlich eintretenden Anforderungen. Flexibilität sollte gezielt dort vorgesehen werden, wo Änderungen wahrscheinlich sind.",
   "Falsch: Ein ADR macht Entscheidung, Kontext und Begründung nachvollziehbar, senkt aber nicht die Kosten einer späteren Änderung. Dokumentation und Umkehrbarkeit sind zwei verschiedene Eigenschaften.",
   "Richtig: Architekturarbeit findet unter Unsicherheit statt und ist iterativ. Mit explizit dokumentierten Annahmen lässt sich später gezielt prüfen, ob die Entscheidung noch trägt, etwa nach einem Durchstich.",
   "Falsch: Prototypen sind auf schnelle Erkenntnis ausgelegt, nicht auf Robustheit und Wartbarkeit. Sie als Basis des Produktivsystems weiterzuverwenden, übernimmt bewusst eingegangene Abkürzungen ins Produkt.",
   "Falsch: Eine vollständige Abnahme ist in der Praxis selten und blockiert bis dahin das Projekt. Das Warten verschiebt Risiken nur nach hinten, statt sie früh durch bewusste Entscheidungen beherrschbar zu machen."
  ],
  "explanation": "Unter Unsicherheit entscheidet man bewusst, dokumentiert Annahmen und überprüft sie iterativ. Fallen: Alles abdecken wollen, Dokumentation mit Umkehrbarkeit verwechseln, Prototypen weiterverwenden oder auf Vollständigkeit warten."
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
   "Qualitätsanforderungen prägen wesentlich die Grobstruktur.",
   "Nichtfunktionale Anforderungen werden erst nach der Implementierung für die Architektur relevant.",
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
   "Falsch: Qualitätsanforderungen prägen die Grobstruktur von Beginn an. Werden sie spät berücksichtigt, lassen sie sich oft nur mit hohem Aufwand nachträglich erreichen.",
   "Falsch: Dieselbe Funktionalität lässt sich als Monolith, in Schichten oder als Microservices umsetzen. Funktionale Anforderungen legen die Bausteinstruktur deshalb nicht eindeutig fest; das tun eher Qualitäten und Randbedingungen."
  ],
  "explanation": "Qualitätsanforderungen und Randbedingungen prägen die Struktur, und Architekturentscheidungen wirken auf die Anforderungen zurück. Fallen: Die Architektur bestimmt nicht den Funktionsumfang, Qualitäten sind nicht erst nach der Implementierung relevant, und Funktionen allein legen keine Struktur eindeutig fest."
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
  "q": "Welche Aussagen zum Zuschnitt von Bausteinen treffen zu?",
  "options": [
   "Je feiner Bausteine geschnitten werden, desto geringer ist die Gesamtkopplung des Systems.",
   "Bei hoher Kohäsion bleiben Änderungen eines fachlichen Aspekts tendenziell auf einen Baustein beschränkt.",
   "Ein Baustein mit hoher Kohäsion kann trotzdem stark an andere Bausteine gekoppelt sein.",
   "Eine breite öffentliche Schnittstelle verringert die Kopplung, weil Nutzer weniger Umwege über andere Bausteine brauchen.",
   "Hohe Kohäsion bezeichnet den Grad der Abhängigkeiten zwischen benachbarten Bausteinen.",
   "Ein Zuschnitt nach fachlicher Verantwortung führt tendenziell zu hoher Kohäsion und geringer Kopplung."
  ],
  "correct": [
   1,
   2,
   5
  ],
  "optExpl": [
   "Falsch: Sehr feine Bausteine reißen Zusammengehöriges auseinander und erzeugen mehr Beziehungen zwischen Bausteinen. Die Kopplung steigt dann eher, als dass sie sinkt.",
   "Richtig: Was fachlich zusammengehört, liegt im selben Baustein. Eine Änderung an diesem Aspekt trifft dann wenige Bausteine.",
   "Richtig: Kohäsion (innen) und Kopplung (außen) sind unabhängige Kriterien. Ein in sich stimmiger Baustein kann viele Abhängigkeiten zu anderen haben.",
   "Falsch: Eine breite Schnittstelle legt Interna offen und lässt Nutzer von mehr Details abhängen. Das erhöht die Kopplung und verletzt Information Hiding.",
   "Falsch: Das beschreibt Kopplung. Kohäsion bezeichnet den inneren Zusammenhalt innerhalb eines Bausteins, nicht die Beziehungen zu Nachbarn.",
   "Richtig: Ein fachlich orientierter Schnitt bündelt Zusammengehöriges (Kohäsion) und braucht dadurch weniger Beziehungen zwischen den Bausteinen. Es ist eine Tendenz, keine Garantie."
  ],
  "explanation": "Gut geschnittene Bausteine haben hohe Kohäsion innen und lose Kopplung außen, orientiert an fachlicher Verantwortung. Beide Kriterien sind unabhängig. Fallen: Kohäsion und Kopplung verwechseln, feine Granularität als Entkopplung ansehen, breite Schnittstellen als Entkopplung deuten."
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
   "Die Qualität des Systems durch Tests nachweisen.",
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
   "Falsch: Der Nachweis der Qualität durch Tests gehört zu Test und Qualitätssicherung. Ziel der Architektur ist, die Qualitätsanforderungen auf nachvollziehbare Weise zu erreichen.",
   "Falsch: Nur vorhergesehene Änderungen lassen sich gezielt erleichtern, etwa durch Kapselung volatiler Teile. Jede beliebige Änderung billig zu machen ist unmöglich und würde zu Überkonstruktion führen."
  ],
  "explanation": "Ziele laut Curriculum: Umsetzung unterstützen, Funktionen und Qualitäten erreichen, Verständnis sichern, Komplexität reduzieren, Richtlinien für Implementierung und Betrieb festlegen. Fallen: keine Festlegung der Features, Qualitätsnachweis gehört zum Testen, keine Billig-Änderbarkeit für alles."
 },
 {
  "id": "c1q18",
  "chapter": 3,
  "lz": "LZ 03-05",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zum iterativen Vorgehen im Architekturentwurf treffen zu?",
  "options": [
   "Tragende Entscheidungen werden früh getroffen und in späteren Iterationen anhand neuer Erkenntnisse überprüft.",
   "Iterationen verkürzen die Rückkopplung und verbessern dadurch die Prognostizierbarkeit.",
   "Eine Iteration ist erst abgeschlossen, wenn die Architekturdokumentation vollständig abgenommen ist.",
   "Iteratives Vorgehen setzt stabile Anforderungen voraus, damit Feedback sinnvoll ausgewertet werden kann.",
   "Auch bei iterativem Vorgehen können frühere Entscheidungen revidiert werden, was Aufwand verursacht.",
   "Iteratives Vorgehen verzichtet auf eine frühe Architekturphase, weil sich die Architektur aus dem Code ergibt."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Richtig: Tragende Entscheidungen prägen die weitere Arbeit und werden deshalb früh getroffen. In jeder Iteration werden sie anhand von Feedback und neuem Wissen überprüft und bei Bedarf korrigiert.",
   "Richtig: Kurze Zyklen decken Fehlannahmen früh auf. Laut Curriculum beeinflusst iteratives Vorgehen Risiko und Prognostizierbarkeit positiv.",
   "Falsch: Dokumentation wächst iterativ mit und wird nicht als Abnahmekriterium jeder Iteration verlangt. Maßgeblich ist, dass die Ergebnisse als Feedback genutzt werden können.",
   "Falsch: Iteratives Vorgehen ist gerade die Antwort auf unsichere und sich ändernde Anforderungen. Feedback hilft, Anforderungen und Entwurf schrittweise zu klären.",
   "Richtig: Revision ist Teil des Konzepts, sie ist aber nicht kostenlos. Je tragender und je früher umgesetzt eine Entscheidung ist, desto teurer ist ihre Korrektur.",
   "Falsch: Auch iterativ braucht es früh bewusste, übergreifende Entscheidungen zu Qualitätszielen und Randbedingungen. Rein emergente Architektur deckt diese nicht zuverlässig ab."
  ],
  "explanation": "Iterativ heißt: früh bewusst entscheiden, mit Feedback prüfen, bei Bedarf revidieren (mit Kosten) und so Risiko und Prognostizierbarkeit verbessern. Fallen: stabile Anforderungen als Voraussetzung sehen, Dokumentationsabnahme als Iterationsende verstehen oder Architektur nur emergent entstehen lassen."
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
   "Sich auf die Kommunikation mit dem Entwicklungsteam konzentrieren, weil dort die Architektur umgesetzt wird.",
   "Aktiv zuhören, um Anliegen zu verstehen.",
   "Komplexe Sachverhalte mit einheitlicher Fachterminologie darstellen, unabhängig vom Publikum.",
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
   "Falsch: Architekt:innen kommunizieren laut Curriculum selbst mit allen relevanten Stakeholdern, auch mit der Fachseite und dem Management. Die Entwicklung ist nur ein Gegenüber unter mehreren.",
   "Richtig: Kommunikation ist keine Einbahnstraße. Aktives Zuhören hilft, die eigentlichen Anliegen der Stakeholder zu verstehen, und gehört laut Curriculum ausdrücklich zu den Fähigkeiten von Architekt:innen.",
   "Falsch: Gute Kommunikation passt Inhalt und Darstellung an Wissen und Interessen der Zielgruppe an. Eine einheitliche Fachsprache überfordert z. B. Management oder Fachseite.",
   "Falsch: Mündliche Abstimmung ist wertvoll, ersetzt aber nicht die dokumentierte, nachvollziehbare Begründung. Ohne schriftliche Festhaltung gehen Gründe verloren und Entscheidungen werden später angezweifelt.",
   "Richtig: Architekt:innen stehen zwischen Fachseite, Entwicklung, Betrieb und Management. Sie müssen unterschiedliche Interessen ausgleichen und tragfähige Kompromisse herbeiführen.",
   "Richtig: Dieselbe Entscheidung wird dem Management anders erklärt als der Entwicklung: Der Inhalt bleibt gleich, die Darstellung passt sich an Wissen und Interessen der Zielgruppe an."
  ],
  "explanation": "Gute Kommunikation heißt: vermitteln, aktiv zuhören und Entscheidungen zielgruppengerecht begründen – laufend während des Entwurfs und gegenüber allen Stakeholdern. Fallen: Kommunikation ist nicht auf die Entwicklung beschränkt, nicht publikumsunabhängig und kein Ersatz für Dokumentation."
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
   "Die Reihenfolge legt allein das Entwicklungsteam nach technischem Aufwand fest.",
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
   "Falsch: Die Reihenfolge wird mit den verantwortlichen Stakeholdern (z. B. Product Owner) nach Geschäftswert, Risiko und Aufwand festgelegt. Das Team liefert Aufwandsschätzungen und technische Konsequenzen, entscheidet aber nicht allein.",
   "Richtig: Aufwand allein sagt nichts über den Nutzen. Erst wenn Geschäftswert und Risiko mit einfließen, entsteht eine sinnvolle Reihenfolge, etwa: hoher Wert bei geringem Aufwand zuerst, riskante Punkte früh absichern.",
   "Falsch: Qualitätsanforderungen sind oft die stärkeren Architekturtreiber. Wer sie pauschal hinter funktionale Anforderungen stellt, riskiert teure Strukturänderungen, wenn sich später zeigt, dass z. B. Performanz oder Sicherheit nicht erreicht werden.",
   "Falsch: Umgekehrt: Architektonisch riskante Anforderungen geht man früh an, etwa per Prototyp oder Durchstich. Spät entdeckte Risiken sind deutlich teurer zu beheben, weil dann schon viel auf den falschen Annahmen aufbaut.",
   "Richtig: Widersprüche wie maximale Sicherheit gegen minimale Bedienhürden lassen sich nicht beide voll erfüllen. Die Priorisierung macht solche Konflikte bewusst entscheidbar, statt sie offen zu lassen und den Zufall entscheiden zu lassen."
  ],
  "explanation": "Priorisierung wägt Geschäftswert, Risiko und Aufwand ab und löst Widersprüche bewusst auf. Fallen: Riskantes kommt früh statt spät, Qualitätsanforderungen sind nicht pauschal nachrangig, und die Reihenfolge bestimmt nicht das Team allein nach Aufwand."
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
   "Sie wird zur Randbedingung, sobald das Team sie im Entwurf festhält.",
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
   "Falsch: Festhalten macht eine Annahme explizit und prüfbar, aber nicht zur Vorgabe. Eine Randbedingung ist von außen gegeben; die 99,9 % bleiben ein unbestätigter Sachverhalt.",
   "Richtig: Explizite Annahmen lassen sich hinterfragen und verifizieren, etwa durch Nachfrage beim Betreiber oder Prüfung des SLA. Implizite Annahmen führen dagegen zu Missverständnissen zwischen Stakeholdern."
  ],
  "explanation": "Annahmen sind unterstellte, nicht gesicherte Sachverhalte und gehören explizit dokumentiert, damit man sie prüfen und die abhängigen Entscheidungen finden kann. Fallen: Eine Annahme ist keine verbindliche Randbedingung, auch nicht durch Dokumentation, und läuft das System, ist sie damit nicht bestätigt."
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
   "Die Stakeholderanalyse dem Management überlassen, das die Liste verbindlich festlegt.",
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
   "Falsch: Stakeholder und ihre Anliegen ändern sich im Projektverlauf, und Architekt:innen müssen sie aktiv und fortlaufend ermitteln. Das Management kennt etwa Betrieb, Support oder externe Partner oft nicht vollständig.",
   "Richtig: Betrieb, Support oder Qualitätssicherung nutzen das System nicht fachlich, haben aber Anliegen wie Monitoring, Deployment oder Fehleranalyse, die die Architektur prägen. Werden sie übersehen, fehlen wichtige Qualitätsanforderungen.",
   "Richtig: Jeder Stakeholder kennt weitere Beteiligte (Schneeballprinzip). So findet man auch Rollen, die in keiner Liste stehen, etwa externe Dienstleister oder Fachabteilungen, die Daten liefern.",
   "Falsch: Budgetverantwortung sagt nichts darüber aus, wer architekturrelevante Anliegen hat. Gerade Betrieb, Entwickler:innen oder Behörden haben oft keinen Budgeteinfluss, stellen aber entscheidende Anforderungen.",
   "Falsch: Das Organigramm ist ein guter Startpunkt, aber unvollständig. Externe Partner, Kunden, Behörden oder Nachbarsysteme stehen dort nicht, und Rollen im Organigramm entsprechen nicht immer den tatsächlichen Anliegen."
  ],
  "explanation": "Stakeholder findet man durch Nachfragen bei bekannten Beteiligten und indem man auch indirekt Betroffene wie Betrieb oder Support einbezieht. Fallen: Organigramm, Budgetverantwortung oder eine Liste des Managements liefern kein vollständiges Bild – die Analyse ist fortlaufend."
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
   "Ein funktionierendes komplexes System entwickelt sich aus einem funktionierenden einfachen System."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Das ist Conways Gesetz: Die Struktur eines Systems spiegelt tendenziell die Kommunikationsstrukturen der entwickelnden Organisation wider. Bausteingrenzen entlang von Abteilungsgrenzen sind ein typisches Symptom dafür.",
   "Falsch: Das beschreibt Lehmans Gesetze der Softwareevolution: Genutzte Systeme müssen sich laufend anpassen, sonst sinkt ihr Nutzen. Mit dem Zusammenhang zwischen Organisation und Systemstruktur hat das nichts zu tun.",
   "Falsch: Das ist Brooks' Law aus „The Mythical Man-Month“ über Projektpersonal: Neue Leute brauchen Einarbeitung und erhöhen den Kommunikationsaufwand. Conways Gesetz betrifft dagegen die Systemstruktur.",
   "Falsch: Das ist Galls Gesetz über die Entstehung komplexer Systeme. Conways Gesetz betrifft dagegen den Zusammenhang zwischen Kommunikationsstruktur der Organisation und Systemstruktur."
  ],
  "explanation": "Conways Gesetz: Die Kommunikationsstruktur der Organisation prägt die Systemstruktur. Fallen: die Verwechslung mit Brooks' Law, Lehmans Gesetzen oder Galls Gesetz. Die bewusste Steuerung in der Gegenrichtung heißt Inverse Conway Maneuver."
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
   "Als Vorgaben des Auftraggebers sind sie im Entwurf nicht verhandelbar.",
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
  "explanation": "Randbedingungen sind technologisch, organisatorisch oder regulatorisch, wirken auch auf den Prozess und können sich ändern. Fallen: Sie müssen nicht schriftlich vorliegen, sind keine besonders verbindlichen Qualitätsanforderungen und sind nicht pauschal unverhandelbar."
 },
 {
  "id": "c3q1",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zu Kopplung und Kohäsion treffen zu?",
  "options": [
   "Efferente Kopplung zählt die Bausteine, die von diesem Baustein abhängen.",
   "Vererbung und Erzeugung von Objekten sind Arten von Kopplung.",
   "Kommunikation über Events beseitigt die Abhängigkeit vom Nachrichtenformat zwischen Sender und Empfänger.",
   "Hohe Kohäsion setzt voraus, dass ein Baustein keine Abhängigkeiten zu anderen Bausteinen hat.",
   "Viele afferente Abhängigkeiten machen Änderungen an der Schnittstelle eines Bausteins aufwendig.",
   "Hohe Kohäsion und lose Kopplung können im Zielkonflikt stehen, etwa wenn das Aufteilen zusammengehöriger Logik neue Abhängigkeiten schafft."
  ],
  "correct": [
   1,
   4,
   5
  ],
  "optExpl": [
   "Falsch: Vertauscht. Efferent heißt ausgehend: dieser Baustein hängt von anderen ab. Die Bausteine, die von ihm abhängen, bilden die afferente (eingehende) Kopplung.",
   "Richtig: Das Curriculum nennt neben Benutzung und Nachrichtenaustausch auch Vererbung, Erzeugung, Komposition und zeitliche Kopplung. Eine Unterklasse hängt stark von ihrer Basisklasse ab.",
   "Falsch: Events entkoppeln zeitlich und technisch, aber Sender und Empfänger teilen weiterhin Format und Bedeutung der Nachricht. Diese Abhängigkeit besteht fort.",
   "Falsch: Kohäsion beschreibt den inneren Zusammenhalt eines Bausteins, nicht seine Außenbeziehungen. Ein hochkohäsiver Baustein kann trotzdem Dienste anderer nutzen.",
   "Richtig: Afferent heißt eingehend: Viele Nutzer hängen vom Baustein ab. Eine Schnittstellenänderung betrifft alle und erfordert Abstimmung.",
   "Richtig: Beide Ziele ziehen nicht immer in dieselbe Richtung. Wer zusammengehörige Logik auf mehrere Bausteine verteilt, senkt womöglich die Größe, erzeugt aber zusätzliche Abhängigkeiten und reduziert die Kohäsion."
  ],
  "explanation": "Kopplung beschreibt Beziehungen zwischen Bausteinen (auch Vererbung, Erzeugung), Kohäsion den inneren Zusammenhalt. Beide Ziele können sich widersprechen. Fallen: afferent und efferent vertauschen, Events als Beseitigung der fachlichen Abhängigkeit sehen, Kohäsion mit Abhängigkeitsfreiheit gleichsetzen."
 },
 {
  "id": "c3q2",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zum Geheimnisprinzip (Information Hiding) nach Parnas treffen zu?",
  "options": [
   "Verborgen wird, was für die Nutzer eines Bausteins irrelevant ist, unabhängig davon, ob es sich ändern kann.",
   "Verborgen werden Entwurfsentscheidungen, die sich wahrscheinlich ändern.",
   "Information Hiding ist ein Merkmal objektorientierter Sprachen und in anderen Paradigmen nicht anwendbar.",
   "Die Schnittstelle darf keine Details der verborgenen Entscheidung preisgeben, sonst ist sie bei deren Änderung nicht stabil.",
   "Entwickler:innen anderer Bausteine dürfen sich nicht auf verborgene Details verlassen, auch wenn diese technisch zugänglich wären."
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Falsch: Das Kriterium nach Parnas ist die Änderungswahrscheinlichkeit einer Entwurfsentscheidung, nicht ihre Relevanz für Nutzer. Irrelevante, aber stabile Details müssen nicht verborgen werden.",
   "Richtig: Änderungsträchtige Entscheidungen, etwa das Speicherformat, liegen hinter einer stabilen Schnittstelle. Änderungen bleiben dadurch lokal im Baustein.",
   "Falsch: Es ist ein Entwurfsprinzip, unabhängig von der Sprache. Parnas formulierte es für Module, lange vor der Verbreitung der Objektorientierung.",
   "Richtig: Gibt etwa ein Rückgabetyp das Speicherformat preis, ist das Geheimnis nur scheinbar verborgen und die Schnittstelle bricht mit der Änderung.",
   "Richtig: Zugesichert ist nur der Vertrag der Schnittstelle. Wer sich auf unzugesicherte Interna stützt, macht sich von Details abhängig, die sich ohne Ankündigung ändern dürfen."
  ],
  "explanation": "Information Hiding verbirgt änderungswahrscheinliche Entscheidungen hinter einer stabilen Schnittstelle, die selbst nichts von ihnen preisgibt. Fallen: Relevanz statt Änderungswahrscheinlichkeit als Kriterium, Bindung an Objektorientierung und Schnittstellen, die Interna durchsickern lassen."
 },
 {
  "id": "c3q4",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zur Schichtenarchitektur (Layers) treffen zu?",
  "options": [
   "Schichten entsprechen typischerweise eigenen Tiers, daher bringt jede zusätzliche Schicht Netzwerkkommunikation mit sich.",
   "Eine Schicht fasst Bausteine mit ähnlichem Abstraktionsniveau zusammen und lässt sich ersetzen, solange ihre Schnittstelle erhalten bleibt.",
   "In der strikten Variante darf eine Schicht eine tiefere überspringen, wenn diese nur durchreicht.",
   "Eine tiefere Schicht darf höhere über eine von ihr selbst definierte Callback-Schnittstelle benachrichtigen, ohne die Schichtung zu verletzen.",
   "Zusätzliche Schichten bringen Indirektion und können zu Lasten der Laufzeit-Performance gehen.",
   "Durch die Schichtung sind auch zyklische Abhängigkeiten zwischen Bausteinen derselben Schicht ausgeschlossen."
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Falsch: Schichten sind eine logische Gliederung, Tiers eine physische Verteilung. Mehrere Schichten laufen oft im selben Prozess.",
   "Richtig: Das Abstraktionsniveau bestimmt den Schnitt; die Abhängigkeit zeigt nach unten auf die Schnittstelle der tieferen Schicht, was den Austausch erleichtert.",
   "Falsch: Überspringen kennzeichnet die offene (relaxed) Variante. In der strikten Variante nutzt eine Schicht nur die direkt darunterliegende, auch wenn diese bloß durchreicht.",
   "Richtig: Die Callback-Schnittstelle gehört der tieferen Schicht, die höhere implementiert sie. Die Abhängigkeit im Code zeigt weiter nach unten, nur der Aufruf läuft zur Laufzeit nach oben (z. B. Observer).",
   "Richtig: Jede Schicht ist eine Stufe, durch die Aufrufe und Daten durchgereicht werden, das kann Laufzeit kosten. Typischer Trade-off zugunsten besserer Änderbarkeit.",
   "Falsch: Schichtung regelt die Richtung zwischen Schichten, nicht die Abhängigkeiten innerhalb einer Schicht. Dort können Zyklen entstehen und müssen separat vermieden werden."
  ],
  "explanation": "Schichten: Abhängigkeiten zeigen nur nach unten; Callbacks über Schnittstellen der tieferen Schicht sind erlaubt. Strikt = nur die direkt darunterliegende, offen = Überspringen erlaubt. Fallen: Schichten sind logisch, nicht jede ist ein eigenes Tier; Zyklen innerhalb einer Schicht bleiben möglich."
 },
 {
  "id": "c3q5",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R3",
  "extra": true,
  "type": "multi",
  "q": "Welche Aussagen zu Ports and Adapters (hexagonale Architektur) treffen zu?",
  "options": [
   "Die Abhängigkeiten zeigen von den Adaptern zum Fachkern; der Kern kennt nur die von ihm definierten Ports.",
   "Ein Port beschreibt die technische Anbindung (z. B. JDBC), der Adapter enthält die Fachlogik.",
   "Man unterscheidet Ports für eingehende Aufrufe (Nutzung des Kerns) und für ausgehende Aufrufe (Nutzung externer Systeme).",
   "Die Fachlogik hängt wie bei klassischen Schichten von der Datenhaltung ab, nur mit zusätzlicher Indirektion.",
   "Der Fachkern lässt sich mit Testdoubles statt echter Adapter testen.",
   "Ausgehende Aufrufe des Kerns gehen direkt an die Adapterklassen; Ports dienen nur für eingehende Aufrufe."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Der Kern definiert, was er braucht und anbietet (Ports); Adapter implementieren sie. Die Abhängigkeit zeigt daher nach innen (Dependency Inversion).",
   "Falsch: Vertauscht: Der Port ist die fachlich formulierte Schnittstelle des Kerns, der Adapter übernimmt die technische Anbindung.",
   "Richtig: Eingehende Ports (z. B. Anwendungsfälle) werden vom Kern angeboten, ausgehende (z. B. Repository) vom Kern definiert und von Adaptern implementiert.",
   "Falsch: Gerade das wird umgekehrt: Der Kern definiert einen Port, die Datenhaltung implementiert ihn als Adapter. Die Abhängigkeit zeigt zum Kern, nicht zur Datenhaltung.",
   "Richtig: Weil der Kern nur Ports kennt, lassen sich Adapter für UI und Datenbank durch Testersatz austauschen. Das ist ein wesentlicher Vorteil.",
   "Falsch: Auch ausgehende Aufrufe laufen über Ports (z. B. ein Repository-Interface); sonst wäre der Kern an konkrete Technik gebunden."
  ],
  "explanation": "Ports and Adapters stellt den Fachkern ins Zentrum: Er definiert Ports, Adapter implementieren sie für UI, Datenbank oder externe Systeme, Abhängigkeiten zeigen nach innen. Fallen: Rollen von Port und Adapter vertauschen, Abhängigkeit von Kern zur Datenhaltung."
 },
 {
  "id": "c3q6",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zu Microservices treffen typischerweise zu?",
  "options": [
   "Geschnitten wird typischerweise entlang fachlicher Grenzen; ein Schnitt nach technischen Schichten führt dazu, dass jede Änderung mehrere Services betrifft.",
   "Serviceübergreifende Abfragen und Konsistenz sind einfacher als im Monolithen, weil jeder Service seine Daten selbst hält.",
   "Der Gesamtaufwand für Tests sinkt, weil jeder Service isoliert getestet werden kann.",
   "Teams können Services unabhängig weiterentwickeln, solange die Schnittstellenverträge kompatibel bleiben.",
   "Schnittstellenänderungen sind unkritisch, weil jeder Service unabhängig deployt werden kann.",
   "Betrieb und Monitoring werden aufwendiger, weil viele einzeln deploybare Einheiten verwaltet werden."
  ],
  "correct": [
   0,
   3,
   5
  ],
  "optExpl": [
   "Richtig: Fachliche Schnitte halten Änderungen lokal und ermöglichen unabhängige Teams. Technische Schnitte erzeugen enge Abhängigkeiten zwischen den Services.",
   "Falsch: Eigene Datenhaltung erschwert gerade serviceübergreifende Abfragen und atomare Konsistenz; sie wird für Unabhängigkeit in Kauf genommen.",
   "Falsch: Einzelne Services sind leichter zu testen, Integrations- und End-to-End-Tests über Servicegrenzen und Netzwerk werden aber aufwendiger. Netto sinkt der Aufwand typischerweise nicht.",
   "Richtig: Die Unabhängigkeit gilt nur innerhalb des vereinbarten Vertrags. Das ist die Voraussetzung für das Skalieren der Entwicklung über mehrere Teams.",
   "Falsch: Unabhängiges Deployment setzt kompatible Schnittstellen voraus. Inkompatible Änderungen zwingen Konsumenten zur gleichzeitigen Anpassung.",
   "Richtig: Mehr Deployment-Einheiten erfordern Automatisierung, verteiltes Logging und Tracing. Das ist der übliche Preis der Unabhängigkeit."
  ],
  "explanation": "Microservices tauschen Unabhängigkeit gegen verteilte Komplexität. Der Schnitt erfolgt fachlich, damit Änderungen lokal bleiben; Betrieb, Konsistenz und Tests über Servicegrenzen hinweg werden dagegen aufwendiger. Typische Falle: Annahme, dass unabhängiges Deployment Schnittstellenabstimmung überflüssig macht."
 },
 {
  "id": "c3q7",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R1",
  "type": "multi",
  "q": "Welche Zuordnungen von Entwurfsprinzip und Kernaussage sind zutreffend?",
  "options": [
   "Postel’s Law: Eingaben an Vertrauensgrenzen ungeprüft übernehmen, damit Partner flexibel bleiben.",
   "Erwarte Fehler: streng in dem sein, was man sendet, und tolerant in dem, was man annimmt.",
   "KISS: keine Funktionalität auf Vorrat bauen.",
   "Konzeptionelle Integrität: gleichartige Probleme im System gleichartig lösen.",
   "Abstraktion: Bausteine hängen von Abstraktionen statt von Implementierungen ab."
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Falsch: Tolerant annehmen heißt nicht, ungültige Eingaben ungeprüft zu akzeptieren. Eingaben an Vertrauensgrenzen müssen validiert werden; tolerant ist man etwa gegenüber unbekannten zusätzlichen Feldern.",
   "Richtig: Das ist die Aussage des Robustheitsgrundsatzes (Postel's Law), auf den „Erwarte Fehler“ zurückgeführt wird. Eingaben an Vertrauensgrenzen sind trotzdem zu validieren.",
   "Falsch: Das ist YAGNI. KISS fordert, Lösungen so einfach wie möglich zu halten.",
   "Richtig: Einheitlichkeit und Konsistenz sind ihr Kern. Das senkt die Einarbeitung und macht Verhalten vorhersagbar.",
   "Richtig: Schnittstellen sind Abstraktionen. Wer von ihnen abhängt, ist von konkreten Implementierungen entkoppelt."
  ],
  "explanation": "Typische Zuordnungsfallen: KISS und YAGNI vertauschen, Toleranz mit ungeprüfter Annahme gleichsetzen. Richtig zugeordnet sind Postel's Law (Erwarte Fehler), konzeptionelle Integrität (Einheitlichkeit) und Abstraktion (Abhängigkeit von Abstraktionen)."
 },
 {
  "id": "c3q8",
  "chapter": 3,
  "lz": "LZ 03-10",
  "r": "R1",
  "type": "multi",
  "q": "Welche der folgenden Themen sind typische Querschnittsthemen?",
  "options": [
   "Berechnung der Versandkosten, die mehrere Dialoge anzeigen",
   "Protokollierung (Logging)",
   "Die Entität Kunde, die von vielen Bausteinen gelesen wird",
   "Konfigurierbarkeit",
   "Internationalisierung",
   "Validierung der Bestelldaten im Bestellmodul"
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Falsch: Fachliche Funktion in einem Baustein, die von anderen genutzt wird. Sie ist kein Aspekt, den viele Bausteine selbst regeln müssen.",
   "Richtig: Alle Bausteine schreiben Logs; Format, Ebenen und Inhalte sollten einheitlich sein.",
   "Falsch: Ein fachliches Datenmodell, das häufig genutzt wird, ist ein gemeinsamer Fachbaustein, aber kein Querschnittsthema.",
   "Richtig: Wie Werte geladen, überschrieben und validiert werden, betrifft viele Bausteine und braucht einheitliche Regeln.",
   "Richtig: Sprachen, Formate und Zeichensätze betreffen alle Bausteine, die Texte oder Werte ausgeben.",
   "Falsch: Fachliche Regel mit lokalem Geltungsbereich. Querschnittlich wäre nur eine systemweite Strategie für Validierung."
  ],
  "explanation": "Querschnittsthemen betreffen viele Bausteine gleichermaßen und sind meist technischer oder qualitativer Natur (Internationalisierung, Protokollierung, Konfigurierbarkeit). Fachliche Berechnungen, Validierungen und Entitäten gehören dagegen in fachlich geschnittene Bausteine, auch wenn mehrere sie nutzen."
 },
 {
  "id": "c3q9",
  "chapter": 3,
  "lz": "LZ 03-03",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zu Top-down- und Bottom-up-Vorgehen beim Entwurf treffen zu?",
  "options": [
   "Bottom-up setzt größere Strukturen aus Vorhandenem zusammen und bietet sich an, wenn viel Bestehendes wiederverwendet werden muss.",
   "Bottom-up ist fachlich näher an den Stakeholdern, Top-down dagegen entwicklerfreundlicher.",
   "Top-down birgt das Risiko später Integration und kann vorhandene fertige Lösungen übersehen.",
   "Top-down liefert früh lauffähige Teile und schnelle Test- und Feedback-Ergebnisse.",
   "Wer bottom-up beginnt, kann später nicht mehr top-down vorgehen.",
   "Bottom-up birgt das Risiko fehlender Orientierung und enger Kopplung."
  ],
  "correct": [
   0,
   2,
   5
  ],
  "optExpl": [
   "Richtig: Bibliotheken, Altsysteme oder gesetzte Technologien prägen dann die Struktur; Bottom-up berücksichtigt diese Details früh.",
   "Falsch: Vertauscht. Top-down ist fachlich nah an Stakeholdern und schnittstellenorientiert, Bottom-up entwicklerfreundlich.",
   "Richtig: Das sind typische Nachteile, weil die Details erst spät in den Entwurf einfließen.",
   "Falsch: Das ist ein Vorteil von Bottom-up. Top-down liefert erst spät integrierbare Ergebnisse.",
   "Falsch: Die Ansätze werden kombiniert und iterativ eingesetzt; die Richtung kann je nach Wissensstand wechseln.",
   "Richtig: Ohne Gesamtbild fehlt das „Wozu?“, und vorhandene Teile prägen die Struktur und erhöhen die Kopplung."
  ],
  "explanation": "Top-down = vom Ganzen zu den Teilen (stakeholdernah, späte Integration); Bottom-up = aus Vorhandenem zusammensetzen (entwicklernah, schnelles Feedback, Gefahr fehlender Orientierung und enger Kopplung). Falle: Vorteile vertauschen."
 },
 {
  "id": "c3q10",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zu Abstraktion und Modularisierung im Entwurf treffen zu?",
  "options": [
   "Jede zusätzliche Abstraktionsebene verbessert die Verständlichkeit, weil sie weitere Details verbirgt.",
   "Modularisierung kann die Zahl der Schnittstellen und damit den Abstimmungsaufwand erhöhen.",
   "Modularisierung senkt die Komplexität des Gesamtsystems, ohne neue Abhängigkeiten zu erzeugen.",
   "Abstraktion erlaubt es, über einen Baustein zu urteilen, ohne seine Interna zu kennen.",
   "Abstraktion macht Bausteine wiederverwendbar, deshalb sollte jeder Baustein möglichst generisch ausgelegt werden.",
   "Eine Abstraktion senkt Änderungskosten nur dort, wo sie veränderliche Entscheidungen von ihren Nutzern trennt."
  ],
  "correct": [
   1,
   3,
   5
  ],
  "optExpl": [
   "Falsch: Abstraktion hilft nur, wenn sie wirklich Unwesentliches verbirgt. Zusätzliche Ebenen ohne Nutzen erzwingen Indirektionen und machen das System schwerer nachvollziehbar.",
   "Richtig: Jedes Modul braucht eine definierte Schnittstelle, die vereinbart und gepflegt werden muss. Der Gewinn an Beherrschbarkeit wird mit zusätzlichem Abstimmungsaufwand erkauft.",
   "Falsch: Beim Schneiden in Module entstehen Abhängigkeiten über Modulgrenzen hinweg, die vorher intern waren. Die Komplexität verschiebt sich teilweise auf die Schnittstellen.",
   "Richtig: Eine Abstraktion beschreibt, was ein Baustein leistet, nicht wie. Dadurch lässt sich das Zusammenspiel verstehen, ohne jedes Detail zu überblicken.",
   "Falsch: Übermäßige Generalisierung erzeugt Komplexität für Fälle, die nie eintreten. Der Nutzen einer Abstraktion hängt davon ab, ob sie tatsächlich benötigte Variabilität abdeckt.",
   "Richtig: An stabilen Stellen bringt eine zusätzliche Abstraktion keinen Änderbarkeitsgewinn, sondern nur Aufwand. Ihr Wert ergibt sich aus der erwarteten Änderungsrichtung."
  ],
  "explanation": "Abstraktion und Modularisierung machen Komplexität beherrschbar, haben aber Kosten: mehr Schnittstellen, Indirektion und Abstimmung. Fallen: Abstraktion als Selbstzweck, Generalisierung auf Vorrat und die Annahme, Modularisierung erzeuge keine neuen Abhängigkeiten."
 },
 {
  "id": "c3q11",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "multi",
  "q": "Für welche Aufgaben ist das Muster Pipes and Filters gut geeignet?",
  "options": [
   "Viele Fachkomponenten greifen in wechselnder Reihenfolge auf einen gemeinsamen Datenbestand zu und ergänzen ihn schrittweise.",
   "Ein Compiler zerlegt Quelltext in aufeinanderfolgenden Stufen: Lexer, Parser, Optimierer, Codegenerator.",
   "Eine zentrale Komponente nimmt Anfragen entgegen und verteilt sie an passende Fachkomponenten.",
   "Verarbeitungsschritte, bei denen späte Stufen frühere Stufen rückwirkend neu anstoßen.",
   "Eingehende Messwerte werden in unabhängigen Stufen normalisiert, validiert und angereichert."
  ],
  "correct": [
   1,
   4
  ],
  "optExpl": [
   "Falsch: Das beschreibt das Blackboard-Muster mit gemeinsamem Wissensspeicher. Pipes and Filters kennt keinen gemeinsamen Zustand, Daten fließen nur zwischen benachbarten Stufen.",
   "Richtig: Eine feste Folge von Transformationsschritten, die jeweils die Ausgabe des vorherigen verarbeitet, ist der Standardfall.",
   "Falsch: Das ist eine Vermittler- bzw. Broker-Struktur. Bei Pipes and Filters gibt es keine zentrale Steuerung, die Stufen sind über Pipes verkettet.",
   "Falsch: Rückkopplungen widersprechen der Idee unabhängiger, in eine Richtung verketteter Filter und machen Fehlerbehandlung und Nebenläufigkeit komplizierter.",
   "Richtig: Datenstrom, unabhängige Transformationsstufen und ein einheitliches Pipe-Format passen genau auf das Muster."
  ],
  "explanation": "Pipes and Filters passt, wenn ein Datenstrom in unabhängigen, linear verketteten Transformationsschritten verarbeitet wird. Abgrenzung: Blackboard (gemeinsamer Datenbestand), Broker/Mediator (zentrale Verteilung), Rückkopplung (kein reiner Fluss)."
 },
 {
  "id": "c3q12",
  "chapter": 3,
  "lz": "LZ 03-07",
  "r": "R3",
  "extra": true,
  "type": "single",
  "q": "Welche Aussage zu asynchroner Kommunikation zwischen Bausteinen trifft zu?",
  "options": [
   "Sie macht Sender und Empfänger fachlich unabhängig, weil der Sender nicht auf das Ergebnis wartet.",
   "Sie setzt voraus, dass Sender und Empfänger zum Zeitpunkt der Nachricht beide verfügbar sind.",
   "Sie senkt die zeitliche Kopplung, lässt aber die Abhängigkeit vom Nachrichtenformat bestehen.",
   "Sie entsteht erst durch Verteilung; innerhalb eines Prozesses sind Aufrufe synchron.",
   "Sie vereinfacht die Fehlerbehandlung, weil Fehler des Empfängers beim Sender als Ausnahme ankommen."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Der Sender wartet zwar nicht, aber Format und fachliche Bedeutung der Nachricht bleiben gemeinsame Abhängigkeiten. Erwartet der Empfänger andere Daten, scheitert die Interaktion trotzdem.",
   "Falsch: Vertauscht: Gleichzeitige Verfügbarkeit verlangt die synchrone Kommunikation. Asynchron kann der Sender senden, auch wenn der Empfänger gerade nicht läuft, etwa über eine Queue.",
   "Richtig: Asynchronität entkoppelt Senden und Verarbeiten zeitlich. Die fachliche und formale Abhängigkeit (Nachrichtenformat, Bedeutung) bleibt bestehen.",
   "Falsch: Auch innerhalb eines Prozesses gibt es asynchrone Mechanismen wie Events, Futures oder Callbacks. Lokal/entfernt und synchron/asynchron sind unabhängige Merkmale.",
   "Falsch: Das ist ein Merkmal synchroner Aufrufe. Asynchron erfährt der Sender von Fehlern des Empfängers nicht direkt; das erschwert die Fehlerbehandlung eher (Fehlerkanäle, Wiederholung, Dead-Letter-Queue)."
  ],
  "explanation": "Asynchrone Kommunikation entkoppelt Sender und Empfänger zeitlich, nicht aber fachlich. Fallen: Sie hängt nicht an Verteilung, verlangt keine gleichzeitige Verfügbarkeit und macht Fehlerbehandlung nicht einfacher."
 },
 {
  "id": "c3q14",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zum Dependency-Inversion-Prinzip (DIP) treffen zu?",
  "options": [
   "Die Abstraktion gehört zum nutzenden, höherstufigen Baustein und nicht zum implementierenden.",
   "Das DIP ist erfüllt, sobald Abhängigkeiten per Konstruktor übergeben werden.",
   "Das DIP kann zusätzliche Schnittstellen und Indirektion erzeugen, die sich vor allem bei veränderlichen Abhängigkeiten lohnen.",
   "Das DIP verringert die Abhängigkeit zur Laufzeit, weil Aufrufe nicht mehr direkt erfolgen.",
   "Die Abstraktion gehört zum aufgerufenen, niedrigstufigen Baustein, damit Aufrufer sie vorfinden.",
   "Dependency Injection ist eine Technik, die das DIP unterstützen kann, es aber nicht garantiert."
  ],
  "correct": [
   0,
   2,
   5
  ],
  "optExpl": [
   "Richtig: Der nutzende Baustein definiert die Schnittstelle nach eigenem Bedarf; der Adapter implementiert sie. Erst dadurch zeigt die Abhängigkeit von der Technik zur Fachlogik.",
   "Falsch: Das beschreibt Dependency Injection, eine Technik. Auch injizierte konkrete Klassen lassen die Fachlogik direkt von der Technik abhängen; das DIP betrifft die Richtung der Abhängigkeit zu Abstraktionen.",
   "Richtig: Jede Abstraktion kostet Aufwand und Verständlichkeit. Sie lohnt sich dort, wo die Abhängigkeit voraussichtlich wechselt oder isoliert werden soll.",
   "Falsch: Zur Laufzeit ruft die Fachlogik weiterhin den Adapter auf. Invertiert wird die Richtung der Quelltext-Abhängigkeit, nicht der Aufrufweg.",
   "Falsch: Dann bliebe die Fachlogik vom Technikmodul abhängig, die Richtung wäre nicht umgekehrt. Die Abstraktion liegt auf der Seite des Nutzers.",
   "Richtig: DI stellt Instanzen von außen bereit. Ob die Fachlogik dabei von einer Abstraktion oder einer konkreten Klasse abhängt, entscheidet erst der Entwurf."
  ],
  "explanation": "Beim DIP hängen Fachlogik und Technik von einer Abstraktion ab, die dem Nutzer gehört. Fallen: DIP mit Dependency Injection gleichsetzen, Inversion auf die Laufzeit beziehen und Abstraktionen ohne Bedarf einziehen."
 },
 {
  "id": "k3",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Handelt es sich um ein Architekturmuster oder ein Entwurfsprinzip?",
  "categories": [
   "Architekturmuster",
   "Entwurfsprinzip"
  ],
  "rows": [
   {
    "text": "Dependency Inversion Principle",
    "cat": 1
   },
   {
    "text": "Separation of Concerns",
    "cat": 1
   },
   {
    "text": "Schichtenarchitektur",
    "cat": 0
   },
   {
    "text": "Information Hiding",
    "cat": 1
   },
   {
    "text": "Pipes und Filter",
    "cat": 0
   },
   {
    "text": "Microservices",
    "cat": 0
   }
  ],
  "rowExpl": [
   "Leitlinie zur Richtung von Abhängigkeiten (Abstraktionen statt Details); Muster wie Ports and Adapters wenden sie an.",
   "Allgemeine Leitlinie zur Trennung von Belangen, ohne vorgegebene Bausteinarten.",
   "Konkrete Struktur aus Ebenen mit gerichteten Abhängigkeiten.",
   "Prinzip, interne Entscheidungen hinter einer Schnittstelle zu verbergen; unabhängig von einer konkreten Struktur.",
   "Muster mit Verarbeitungsschritten, die über Datenströme verbunden sind.",
   "Architekturstil mit unabhängig deploybaren, fachlich geschnittenen Services."
  ],
  "explanation": "Muster geben eine konkrete Struktur mit Bausteinarten und Beziehungen vor; Prinzipien sind Leitlinien, die in vielen Strukturen angewandt werden können. Ein Prinzip kann ein Muster begründen (z. B. Separation of Concerns die Schichtung), ist aber selbst keine Struktur."
 },
 {
  "id": "c3q15",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zur Trennung der Belange (Separation of Concerns) treffen zu?",
  "options": [
   "Belange können technisch geschnitten werden, etwa Persistenz, oder fachlich, etwa nach Subdomänen.",
   "SoC fordert, dass jede Klasse genau eine Aufgabe hat, und gilt nicht für größere Bausteine.",
   "Eine Trennung der Belange setzt eine Schichtenarchitektur voraus.",
   "Werden zusammengehörige Aspekte getrennt, kann die Kopplung steigen und die Kohäsion sinken.",
   "Querschnittliche Belange wie Logging lassen sich vollständig in einem Baustein kapseln, sodass kein anderer Baustein betroffen ist.",
   "Getrennte Belange lassen sich unabhängig ändern und testen, solange die Schnittstellen zwischen ihnen stabil bleiben."
  ],
  "correct": [
   0,
   3,
   5
  ],
  "optExpl": [
   "Richtig: Der Begriff Belang ist nicht auf technische Schichten beschränkt. Auch fachliche Schnitte trennen Belange und sind oft änderungsstabiler.",
   "Falsch: Das beschreibt das Single-Responsibility-Prinzip auf Klassenebene. SoC ist allgemeiner und gilt auf jeder Granularität, vom Modul bis zum Gesamtsystem.",
   "Falsch: Schichten sind nur eine von mehreren Strukturen, Belange zu trennen. Auch Komponenten, Subdomänen oder Pipes & Filter trennen Belange.",
   "Richtig: Ein falscher Schnitt verteilt Zusammengehöriges auf mehrere Bausteine, die dann viel miteinander abstimmen müssen. Trennung ist daher keine Garantie für lose Kopplung.",
   "Falsch: Querschnittliche Belange wirken per Definition in vielen Bausteinen. Ein zentraler Baustein kann die Umsetzung bündeln, die Aufrufstellen bleiben aber in den Nutzern.",
   "Richtig: Der Nutzen der Trennung hängt an stabilen Schnittstellen. Ändern sich diese, wirken Änderungen trotz Trennung über die Grenze."
  ],
  "explanation": "SoC trennt unterschiedliche Belange in eigene Bausteine, technisch oder fachlich, auf jeder Granularität. Fallen: SoC mit SRP gleichsetzen, an Schichten binden, Querschnittsbelange als vollständig kapselbar sehen und die Kopplungskosten schlechter Schnitte übersehen."
 },
 {
  "id": "c3q16",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R3",
  "extra": true,
  "type": "single",
  "q": "Welche Aussage zum DRY-Prinzip (Don't Repeat Yourself) trifft zu?",
  "options": [
   "DRY gilt für Quellcode, nicht für Dokumentation und Konfiguration.",
   "Das Zusammenführen duplizierter Logik verringert die Kopplung zwischen den Bausteinen, die vorher Kopien enthielten.",
   "DRY betrifft Wissen und Entscheidungen, nicht bloß gleich aussehenden Code.",
   "DRY fordert, gleichartigen Code syntaktisch zusammenzuführen, auch wenn er unterschiedlichen Zwecken dient."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: DRY bezieht sich auf Wissen und Entscheidungen, egal wo sie festgehalten sind. Auch doppelte Konfigurationswerte oder Dokumentation können auseinanderlaufen.",
   "Falsch: Gemeinsame Logik erzeugt eine Abhängigkeit aller Nutzer auf den gemeinsamen Baustein. DRY tauscht verteilte Kopien gegen explizite Kopplung, kann sie also erhöhen.",
   "Richtig: Entscheidend ist, ob dieselbe Entscheidung mehrfach festgehalten wird. Ähnlicher Code mit unterschiedlichem fachlichen Hintergrund verletzt DRY nicht.",
   "Falsch: Wer Code ohne gemeinsame fachliche Bedeutung zusammenführt, koppelt unabhängige Änderungsgründe. Das ist ein Missverständnis von DRY."
  ],
  "explanation": "DRY meint: Jede Entscheidung hat eine maßgebliche Repräsentation, in Code, Konfiguration und Dokumentation. Fallen: Zusammenführen nach Aussehen statt nach Bedeutung und die Annahme, Zusammenführen senke die Kopplung."
 },
 {
  "id": "c3q17",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R3",
  "extra": true,
  "type": "single",
  "q": "Ein Team baut vorsorglich mehrere Erweiterungspunkte für nur vermutete Anforderungen ein. Welches Prinzip spricht am ehesten dagegen?",
  "options": [
   "Offen/geschlossen-Prinzip",
   "Information Hiding",
   "Konzeptionelle Integrität",
   "YAGNI"
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Das OCP stützt Erweiterungspunkte eher, als dass es ihnen widerspricht. Es sagt aber nichts darüber, ob eine vermutete Erweiterung den Aufwand rechtfertigt.",
   "Falsch: Information Hiding verbirgt Entscheidungen, deren Änderung wahrscheinlich ist. Es begründet kein Bauen auf Vorrat, argumentiert aber auch nicht gegen spekulative Erweiterungspunkte.",
   "Falsch: Sie verlangt, Gleichartiges gleichartig zu lösen. Ob Funktionalität nötig ist, beantwortet sie nicht.",
   "Richtig: You Ain't Gonna Need It: Funktionalität, die nicht gebraucht wird, erhöht Komplexität und Wartungsaufwand, ohne Nutzen zu stiften. Vermutete Anforderungen rechtfertigen keine Vorleistung."
  ],
  "explanation": "YAGNI richtet sich gegen Funktionalität und Flexibilität auf Vorrat. Falle: OCP und Information Hiding klingen nach Erweiterbarkeit, rechtfertigen aber keine spekulativen Erweiterungspunkte."
 },
 {
  "id": "c3q18",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zu Architekturmustern treffen zu?",
  "options": [
   "Die Verbesserung einer Qualität durch ein Muster geht häufig zu Lasten einer anderen.",
   "Innerhalb eines Systems können für unterschiedliche Teile verschiedene Muster gelten.",
   "Ein Muster ist eine fertige Implementierung, die sich in andere Systeme übernehmen lässt.",
   "Architekturmuster betreffen typischerweise die Struktur des Gesamtsystems, Entwurfsmuster eher die einzelner Bausteine.",
   "Wird ein Muster an den Kontext angepasst, gilt es nicht mehr als Anwendung dieses Musters.",
   "Ein Muster garantiert die Qualitätsziele, für die es bekannt ist."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Richtig: Muster sind Kompromisse: Schichten verbessern Änderbarkeit auf Kosten der Laufzeit, Pipes and Filters Austauschbarkeit auf Kosten der Fehlerbehandlung.",
   "Richtig: Ein System kombiniert Muster, etwa Schichten im Innern und Publish/Subscribe zwischen Teilsystemen. Entscheidend ist, dass sie sich nicht widersprechen.",
   "Falsch: Ein Muster ist eine abstrakte Lösungsschablone, keine Implementierung. Sie muss je Kontext ausgeprägt werden.",
   "Richtig: Die Unterscheidung nach Wirkungsbereich ist üblich: Architekturmuster strukturieren das System, Entwurfsmuster wirken innerhalb von Bausteinen.",
   "Falsch: Muster werden regelmäßig angepasst (z. B. offene statt strikter Schichten). Entscheidend ist, dass die Grundidee und ihre Konsequenzen erhalten bleiben.",
   "Falsch: Ein Muster erhöht die Wahrscheinlichkeit, Qualitäten zu erreichen, garantiert sie aber nicht; Kontext und Umsetzung entscheiden."
  ],
  "explanation": "Muster sind Lösungsschablonen mit Vor- und Nachteilen, kombinierbar und anpassbar, aber keine Garantie und keine fertige Implementierung. Falle: Beschreibung der Struktur ist nicht gleichbedeutend mit Qualitätsnachweis."
 },
 {
  "id": "c3q19",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R3",
  "extra": true,
  "type": "single",
  "q": "Welche Aussage zum Muster Model-View-Controller (MVC) trifft zu?",
  "options": [
   "Die View verarbeitet Benutzereingaben und ändert direkt das Model; der Controller verwaltet nur die Darstellung.",
   "MVC trennt Präsentations-, Anwendungs- und Datenhaltungsschicht in drei Schichten, die nur nach unten abhängen.",
   "Der Controller enthält die Fachlogik, das Model nur die Daten.",
   "Das Model kennt die View nicht; die View bezieht ihre Daten vom Model und bildet sie ab.",
   "MVC ist ein Verteilungsmuster, das Bausteine auf Client und Server aufteilt."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Vertauscht: Der Controller nimmt Eingaben entgegen und steuert Model und View; die View stellt dar.",
   "Falsch: MVC trennt Aufgaben der Interaktion (Daten, Darstellung, Steuerung), nicht technische Schichten; View und Controller sind zudem eng verbunden.",
   "Falsch: Das Model enthält Daten und Fachlogik; der Controller vermittelt zwischen Eingabe, Model und View.",
   "Richtig: Das Model ist unabhängig von der Darstellung, dadurch lassen sich mehrere Views auf dasselbe Model setzen, ohne es zu ändern.",
   "Falsch: MVC strukturiert die Verantwortlichkeiten der Interaktion. Wo die Teile laufen (Client, Server), ist unabhängig davon."
  ],
  "explanation": "MVC trennt Model (Daten und Fachlogik), View (Darstellung) und Controller (Steuerung der Interaktion). Das Model kennt die View nicht. Fallen: Verwechslung mit Schichten, Vertauschen der Rollen von View und Controller."
 },
 {
  "id": "c3q21",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zu zyklischen Abhängigkeiten zwischen Bausteinen treffen zu?",
  "options": [
   "Bausteine in einem Zyklus lassen sich kaum unabhängig voneinander testen oder wiederverwenden.",
   "Zyklen innerhalb einer Schicht sind unkritisch, solange die Regeln zwischen den Schichten eingehalten werden.",
   "Ein Zyklus zwischen zwei Bausteinen lässt sich durch Umkehrung einer Abhängigkeit über eine Abstraktion auflösen.",
   "Ersetzt man direkte Aufrufe durch Events, besteht keine zyklische Abhängigkeit mehr.",
   "Zyklische Abhängigkeiten sind nur bei Aufrufen zur Laufzeit problematisch, nicht bei Abhängigkeiten zwischen Datentypen.",
   "Ein Zyklus kann auf einen unglücklichen Schnitt hindeuten; Zusammenlegen kann dann die sinnvollere Lösung sein."
  ],
  "correct": [
   0,
   2,
   5
  ],
  "optExpl": [
   "Richtig: Zum Testen von A braucht man B und umgekehrt. Änderungen breiten sich in beide Richtungen aus, und eine Wiederverwendung eines einzelnen Bausteins zieht den anderen mit.",
   "Falsch: Die Schichtenregel betrifft Abhängigkeiten zwischen Schichten. Innerhalb einer Schicht bleiben Bausteine im Zyklus voneinander abhängig und nur gemeinsam änderbar.",
   "Richtig: Definiert A eine Schnittstelle, die B implementiert, hängt B von A ab statt umgekehrt, und beide Abhängigkeiten zeigen in dieselbe Richtung (Dependency Inversion).",
   "Falsch: Events entfernen nur die direkte, statische Referenz. Fachlich bleiben A und B über Bedeutung und Struktur der Nachrichten voneinander abhängig, nur weniger sichtbar.",
   "Falsch: Auch Abhängigkeiten zwischen Datentypen oder Modulen zur Entwicklungszeit bilden Zyklen und erschweren Verständnis, Änderung und Test. Entscheidend ist die Abhängigkeitsstruktur.",
   "Richtig: Gehören A und B fachlich eng zusammen, spricht der Zyklus für einen falschen Schnitt. Zusammenlegen erhöht dann die Kohäsion, statt künstlich über Abstraktionen zu entkoppeln."
  ],
  "explanation": "Zyklen erschweren isoliertes Testen, Ändern und Wiederverwenden, unabhängig von Schicht oder Art der Abhängigkeit. Lösungen: Abhängigkeit über eine Abstraktion umkehren oder Bausteine zusammenlegen. Fallen: Events beseitigen die fachliche Abhängigkeit nicht, Schichtenzugehörigkeit relativiert den Zyklus nicht."
 },
 {
  "id": "c3q23",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zum Programmieren gegen Schnittstellen statt gegen konkrete Implementierungen treffen zu?",
  "options": [
   "Eine Schnittstelle zwischen Aufrufer und Implementierung beseitigt die Abhängigkeit des Aufrufers von der Semantik der Operationen.",
   "Aufrufer sind von Implementierungsdetails entkoppelt, nicht aber vom Vertrag der Schnittstelle.",
   "Implementierungen hinter derselben Schnittstelle sind austauschbar, sobald die Signaturen kompatibel sind.",
   "Testdoubles können anstelle realer Abhängigkeiten eingesetzt werden.",
   "Neue Implementierungen lassen sich ergänzen, ohne Aufrufer zu ändern, sofern sie den Vertrag der Schnittstelle einhalten.",
   "Wird die Implementierung erst zur Laufzeit gebunden, besteht für den Aufrufer keine Abhängigkeit zur Entwicklungszeit mehr.",
   "Zusätzliche Schnittstellen erhöhen die Zahl der Typen und führen Indirektion ein, auch wenn nie eine zweite Implementierung entsteht."
  ],
  "correct": [
   1,
   3,
   4,
   6
  ],
  "optExpl": [
   "Falsch: Die Semantik (Wirkung, Vor- und Nachbedingungen, Fehlerverhalten) gehört zum Vertrag. Der Aufrufer muss sie weiterhin kennen und ist davon abhängig.",
   "Richtig: Der Aufrufer hängt nur vom Vertrag ab, nicht von Datenstrukturen oder Hilfsklassen der Implementierung. Ändert sich der Vertrag selbst, müssen Aufrufer angepasst werden.",
   "Falsch: Kompatible Signaturen genügen nicht. Eine Implementierung muss auch die vereinbarte Semantik einhalten, sonst ist sie trotz passender Typen nicht substituierbar (Liskov).",
   "Richtig: Hinter der Schnittstelle kann im Test ein Mock oder Stub stehen. Das ermöglicht isolierte Tests ohne echte Datenbank oder externe Dienste.",
   "Richtig: Wer den Vertrag erfüllt, kann ergänzt werden, ohne dass Aufrufer sich ändern. Das entspricht dem Open/Closed-Principle.",
   "Falsch: Die Abhängigkeit zur Schnittstelle selbst besteht weiterhin schon zur Entwicklungszeit, nur die Zuordnung zur konkreten Implementierung erfolgt später.",
   "Richtig: Schnittstellen sind nicht kostenlos: Mehr Typen, mehr Indirektion und erschwerte Nachvollziehbarkeit. Ohne tatsächlichen Variationsbedarf ist das Aufwand ohne Nutzen."
  ],
  "explanation": "Gegen Schnittstellen zu programmieren entkoppelt von Implementierungsdetails, ermöglicht Austausch, Erweiterung und Testdoubles, hat aber Kosten (Indirektion, mehr Typen). Fallen: Die Abhängigkeit zur Schnittstelle bleibt statisch bestehen, und Signaturkompatibilität reicht ohne passende Semantik nicht für einen Austausch."
 },
 {
  "id": "k6",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Welche Dependency-Richtung beschreibt die Aussage aus Sicht des betrachteten Bausteins: efferent oder afferent?",
  "categories": [
   "Efferent",
   "Afferent"
  ],
  "rows": [
   {
    "text": "Der Baustein importiert Typen aus Lager, Versand und Rechnungswesen.",
    "cat": 0
   },
   {
    "text": "Zwölf andere Bausteine rufen die Schnittstelle dieses Bausteins auf.",
    "cat": 1
   },
   {
    "text": "Der Baustein lässt sich nur testen, wenn mehrere Nachbarbausteine bereitstehen.",
    "cat": 0
   },
   {
    "text": "Eine Änderung der Schnittstelle erzwingt Anpassungen in vielen anderen Bausteinen.",
    "cat": 1
   },
   {
    "text": "Ein Fehler im Baustein wirkt sich auf viele andere Bausteine aus.",
    "cat": 1
   }
  ],
  "rowExpl": [
   "Der Baustein nutzt andere, die Abhängigkeiten gehen von ihm aus: efferent (exit). Afferent wäre es, wenn andere Bausteine ihn nutzen würden.",
   "Viele Bausteine hängen vom betrachteten Baustein ab, die Abhängigkeiten kommen bei ihm an: afferent (arrival). Efferent wäre die umgekehrte Richtung, also was der Baustein selbst nutzt.",
   "Der Testaufwand entsteht, weil der Baustein viele andere benötigt – das sind ausgehende, efferente Abhängigkeiten. Viele afferente Abhängigkeiten erschweren dagegen die Änderung, nicht den isolierten Test.",
   "Die Anpassungen entstehen bei den Nutzern des Bausteins; es sind also eingehende, afferente Abhängigkeiten. Viele afferente Abhängigkeiten machen Änderungen riskant.",
   "Wer vom Baustein abhängt, ist von seinem Ausfall betroffen. Das sind eingehende, afferente Abhängigkeiten; Fehler im Baustein breiten sich entgegen der Abhängigkeitsrichtung aus."
  ],
  "explanation": "Efferent = ausgehend (der Baustein nutzt andere), afferent = eingehend (andere nutzen den Baustein). Viele efferente Abhängigkeiten erschweren Verständnis, Wiederverwendung und isolierten Test; viele afferente machen Änderungen riskant. Falle: Die Begriffe werden gern vertauscht – die Richtung gilt immer aus Sicht des betrachteten Bausteins."
 },
 {
  "id": "k8",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R3",
  "extra": true,
  "type": "k",
  "points": 2,
  "q": "Welche der folgenden Entwurfsprinzipien gehören zu den fünf SOLID-Prinzipien?",
  "categories": [
   "Teil von SOLID",
   "Nicht Teil von SOLID"
  ],
  "rows": [
   {
    "text": "Open/Closed-Principle",
    "cat": 0
   },
   {
    "text": "Information Hiding",
    "cat": 1
   },
   {
    "text": "Separation of Concerns",
    "cat": 1
   },
   {
    "text": "Liskov Substitution Principle",
    "cat": 0
   },
   {
    "text": "Dependency Inversion Principle",
    "cat": 0
   },
   {
    "text": "Law of Demeter",
    "cat": 1
   }
  ],
  "rowExpl": [
   "Das Open/Closed-Principle ist das „O“ in SOLID: Bausteine sollen für Erweiterungen offen, für Änderungen geschlossen sein. Es gehört dazu.",
   "Information Hiding ist ein allgemeines Entwurfsprinzip (Parnas) und verwandt mit Kapselung, aber keiner der fünf Buchstaben von SOLID.",
   "Separation of Concerns ähnelt dem Single Responsibility Principle, ist aber ein eigenständiges, übergeordnetes Prinzip und nicht Teil von SOLID.",
   "Das Liskov Substitution Principle ist das „L“ in SOLID: Subtypen müssen sich überall dort verwenden lassen, wo der Basistyp erwartet wird.",
   "Das Dependency Inversion Principle ist das „D“ in SOLID: Abstraktionen sollen nicht von Details abhängen, sondern Details von Abstraktionen.",
   "Das Law of Demeter (nur mit direkten Kollaborateuren sprechen) ist eine bekannte Kopplungsregel, gehört aber nicht zu SOLID."
  ],
  "explanation": "SOLID besteht aus SRP, OCP, LSP, ISP und DIP. Typische Falle: verwandte, ebenfalls bekannte Prinzipien (Separation of Concerns, Information Hiding, Law of Demeter) werden fälschlich zu SOLID gezählt, weil sie ähnliche Ziele wie SRP bzw. DIP verfolgen."
 },
 {
  "id": "c3q24",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zum Offen/geschlossen-Prinzip (OCP) treffen zu?",
  "options": [
   "OCP lässt sich über Polymorphie umsetzen, indem neue Varianten als weitere Implementierungen einer Schnittstelle hinzukommen.",
   "OCP verlangt, dass ausgelieferter Code nicht mehr geändert wird.",
   "OCP lässt sich nur über Vererbung realisieren, Komposition mit Schnittstellen fällt nicht darunter.",
   "Ein Baustein ist nur gegenüber den Änderungen geschlossen, die beim Entwurf vorhergesehen wurden.",
   "OCP ist ein Spezialfall des Liskov'schen Substitutionsprinzips."
  ],
  "correct": [
   0,
   3
  ],
  "optExpl": [
   "Richtig: Der nutzende Baustein bleibt unverändert, neue Varianten ergänzen nur. Strategy ist ein typisches Muster dafür.",
   "Falsch: Das Prinzip bezieht sich auf Erweiterungen, nicht auf ein Änderungsverbot. Fehler und neue Anforderungen außerhalb der vorgesehenen Variabilität erfordern weiterhin Änderungen.",
   "Falsch: Auch Komposition mit Delegation an austauschbare Implementierungen erfüllt das OCP, oft sogar flexibler als Vererbung.",
   "Richtig: Es gibt keine vollständige Geschlossenheit. Die Abstraktion muss die erwartete Änderungsrichtung treffen; eine Abstraktion für nie eintretende Erweiterungen ist Aufwand ohne Nutzen.",
   "Falsch: Das LSP betrifft die Verhaltenskonformität von Subtypen. Es unterstützt das OCP, ist aber ein eigenständiges Prinzip und nicht dessen Ursprung."
  ],
  "explanation": "OCP: Erweiterung durch Hinzufügen statt Ändern, bezogen auf erwartete Änderungsachsen. Fallen: OCP als Änderungsverbot, an Vererbung binden, mit LSP vermischen und Abstraktionen ohne Änderungsbedarf bauen."
 },
 {
  "id": "c3q25",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R3",
  "extra": true,
  "type": "single",
  "q": "Welche Aussage zum Interface-Segregation-Prinzip (ISP) trifft zu?",
  "options": [
   "Schnittstellen werden nach der Kohäsion der implementierenden Klasse geschnitten, nicht nach den Bedürfnissen der Clients.",
   "Clients sollen nicht von Operationen abhängen, die sie nicht nutzen; Schnittstellen werden deshalb nach Client-Rollen geschnitten.",
   "Jede Operation soll in einer eigenen Schnittstelle stehen.",
   "Clients sollen von Abstraktionen statt von konkreten Klassen abhängen.",
   "Das ISP führt zu weniger, dafür umfassenderen Schnittstellen."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Das ISP argumentiert von den Clients her. Ein Schnitt nach Implementierungssicht kann Clients weiter mit Operationen belasten, die sie nicht brauchen.",
   "Richtig: Schmale, rollenspezifische Schnittstellen verhindern, dass Änderungen an ungenutzten Operationen Clients betreffen. Eine Klasse kann mehrere davon implementieren.",
   "Falsch: Das wäre eine übertriebene Auslegung. Ziel sind rollenspezifische Gruppen zusammengehöriger Operationen, nicht Ein-Operation-Schnittstellen.",
   "Falsch: Das ist das Dependency-Inversion-Prinzip. Das ISP regelt, wie groß und wie zugeschnitten die Abstraktion ist.",
   "Falsch: Es führt typischerweise zu mehr und schmaleren Schnittstellen. Die Zahl der Schnittstellen steigt, die Abhängigkeit der einzelnen Clients sinkt."
  ],
  "explanation": "ISP: Clients hängen nur von dem ab, was sie nutzen; Schnittstellen sind rollenspezifisch geschnitten. Fallen: Schnitt nach Implementierungssicht, Verwechslung mit DIP und Übertreibung bis zur Ein-Operation-Schnittstelle."
 },
 {
  "id": "c3q26",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R3",
  "extra": true,
  "type": "single",
  "q": "Welche Aussage zum Liskov'schen Substitutionsprinzip (LSP) trifft zu?",
  "options": [
   "Ein Subtyp darf Nachbedingungen des Basistyps abschwächen, solange die Signaturen kompatibel sind.",
   "Ein Subtyp darf Vorbedingungen abschwächen und Nachbedingungen verschärfen.",
   "Das LSP ist erfüllt, wenn der Compiler die Subtyp-Beziehung akzeptiert.",
   "Das LSP betrifft Klassenvererbung; Implementierungen von Schnittstellen sind davon ausgenommen.",
   "Ein Subtyp muss alle Operationen des Basistyps unverändert übernehmen und darf nur ergänzen."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Nachbedingungen dürfen nur verschärft werden. Schwächt der Subtyp sie ab, kann ein Aufrufer sich nicht mehr auf die Zusagen des Basistyps verlassen.",
   "Richtig: Ein Subtyp darf mehr akzeptieren und mehr zusichern als der Basistyp. Dann bleibt jeder Aufrufer, der den Basistyp erwartet, korrekt bedient.",
   "Falsch: Compiler prüfen Signaturen, nicht Verhalten. Ein Subtyp kann typkorrekt sein und dennoch das erwartete Verhalten brechen.",
   "Falsch: Jede Subtyp-Beziehung ist betroffen, auch Schnittstellenimplementierungen. Ein Aufrufer darf sich auf den Vertrag der Schnittstelle verlassen.",
   "Falsch: Überschreiben ist erlaubt, solange das vertraglich zugesicherte Verhalten erhalten bleibt. Das LSP fordert Verhaltenskonformität, nicht Unveränderlichkeit."
  ],
  "explanation": "LSP: Ein Subtyp muss verhaltenskonform an die Stelle des Basistyps treten können; Vorbedingungen nicht verschärfen, Nachbedingungen nicht abschwächen. Fallen: Richtung vertauschen, Typkorrektheit mit Verhaltenskonformität gleichsetzen und das Prinzip auf Klassenvererbung beschränken."
 },
 {
  "id": "c3q27",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R3",
  "extra": true,
  "type": "single",
  "q": "Welche Aussage zu Publish/Subscribe trifft zu?",
  "options": [
   "Ein Ereignis wird von genau einem der registrierten Subscriber verarbeitet.",
   "Zwischen Publisher und Subscriber besteht keine Abhängigkeit.",
   "Publisher kennen ihre Subscriber nicht; gemeinsam bleiben Ereignistyp und -format.",
   "Der Publisher wartet auf die Verarbeitungsbestätigung der Subscriber, bevor er fortfährt."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Das beschreibt eine Queue mit konkurrierenden Empfängern (Punkt-zu-Punkt). Bei Publish/Subscribe erhalten alle interessierten Subscriber das Ereignis.",
   "Falsch: Die fachliche Abhängigkeit bleibt: Beide müssen sich über Ereignistypen, Format und Bedeutung einig sein. Nur die direkte Kenntnis entfällt.",
   "Richtig: Der Publisher veröffentlicht, ohne Empfänger zu adressieren; Kopplung besteht über das Ereignis als Vertrag.",
   "Falsch: Das wäre synchrone Kommunikation. Publish/Subscribe ist typischerweise asynchron, der Publisher setzt nach dem Veröffentlichen fort."
  ],
  "explanation": "Publish/Subscribe entkoppelt Sender und Empfänger bezüglich Kenntnis und Zeit, nicht bezüglich des Ereignisformats. Fallen: Gleichsetzung mit Punkt-zu-Punkt-Queues, völliger Wegfall der Abhängigkeit und synchrone Bestätigung."
 },
 {
  "id": "c3q28",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R3",
  "extra": true,
  "type": "single",
  "q": "Welche Aussage zum Client-Server-Muster trifft zu?",
  "options": [
   "Ein Baustein kann nicht zugleich Server und Client sein; die Rollen schließen sich aus.",
   "Die Initiative geht typischerweise vom Client aus; der Server muss seine Clients nicht im Voraus kennen.",
   "Client und Server müssen auf getrennten Rechnern laufen.",
   "Die Fachlogik muss im Server liegen, da Clients nur die Darstellung übernehmen."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Rollen beziehen sich auf eine Interaktion. Ein Baustein kann Server für seine Nutzer und zugleich Client eines anderen Dienstes sein, z. B. ein Webdienst mit Datenbank.",
   "Richtig: Clients rufen Dienste über die Schnittstelle des Servers auf; der Server reagiert und braucht keine Kenntnis seiner Clients.",
   "Falsch: Client und Server sind logische Rollen; sie können im selben Prozess oder auf demselben Rechner laufen. Verteilung ist eine Option, keine Voraussetzung.",
   "Falsch: Wie die Logik verteilt wird, legt das Muster nicht fest. Auch Clients können Fachlogik enthalten (Rich Client); das ist eine Abwägung."
  ],
  "explanation": "Client-Server beschreibt die Rollen bei einer Interaktion: Clients nutzen Dienste eines Servers über dessen Schnittstelle. Fallen: Rollen als feste Zuordnung oder Verteilung auf Rechner sowie Fachlogik nur auf dem Server."
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
   "Komposition koppelt an die öffentliche Schnittstelle der Teile, Vererbung zusätzlich an deren Interna.",
   "Komposition erfordert weniger Delegationscode als Vererbung.",
   "Vererbung bleibt sinnvoll, wenn der Subtyp den Basistyp verhaltenskonform ersetzen kann.",
   "Die Heuristik schließt Vererbung aus und verlangt, Subtyp-Beziehungen durch Schnittstellen zu ersetzen.",
   "Komposition mit Delegation verhindert Polymorphie, weil keine Basistyp-Beziehung besteht.",
   "Bei Komposition lässt sich Verhalten in der Regel zur Laufzeit austauschen, bei Vererbung ist es meist zur Übersetzungszeit festgelegt."
  ],
  "correct": [
   0,
   2,
   5
  ],
  "optExpl": [
   "Richtig: Eine Unterklasse sieht geschützte Details der Oberklasse und kann von ihnen abhängen (Whitebox-Wiederverwendung). Bei Komposition ist nur der Vertrag der Schnittstelle sichtbar.",
   "Falsch: Komposition verlangt, Aufrufe explizit an die Teile weiterzureichen, während Vererbung Methoden automatisch übernimmt. Mehr Delegationscode ist ein typischer Nachteil.",
   "Richtig: Die Heuristik ist eine Vorrangregel, kein Verbot. Wo eine echte Subtyp-Beziehung im Sinne des LSP besteht, ist Vererbung eine zulässige Wahl.",
   "Falsch: Vererbung wird nicht ausgeschlossen, sondern nur nachrangig behandelt. Auch Schnittstellen sind Subtyp-Beziehungen und können mit Komposition kombiniert werden.",
   "Falsch: Polymorphie entsteht über gemeinsame Schnittstellen. Ein komponiertes Teil kann hinter einer Schnittstelle ausgetauscht werden, auch ohne Vererbungsbeziehung.",
   "Richtig: Ein referenziertes Teil kann ersetzt werden, etwa per Strategy. Die Oberklasse einer Instanz steht dagegen mit der Klassendefinition fest."
  ],
  "explanation": "Komposition vor Vererbung heißt: Wiederverwendung bevorzugt über Zusammensetzung, weil sie schwächer koppelt und Laufzeitaustausch erlaubt; Preis ist mehr Delegationscode. Fallen: Vererbung als verboten ansehen und Polymorphie an Vererbung binden."
 },
 {
  "id": "c3q30",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R3",
  "extra": true,
  "type": "multi",
  "q": "Welche Aussagen zu einem zustandslosen (stateless) Dienst treffen zu?",
  "options": [
   "Mit Sticky Sessions bleibt ein Dienst zustandslos, solange Anfragen einer Sitzung bei derselben Instanz landen.",
   "Anfragen lassen sich auf beliebige Instanzen verteilen, was Lastverteilung und horizontale Skalierung erleichtert.",
   "Jede Anfrage trägt die für die Verarbeitung nötigen Informationen selbst oder verweist darauf.",
   "Zustandslosigkeit verringert das Nachrichtenvolumen, weil Anfragen kleiner werden.",
   "Zustandslosigkeit heißt, dass der Dienst keine Daten dauerhaft speichert.",
   "Der benötigte Zustand liegt außerhalb des Dienstes und kann dort zum Engpass oder Ausfallrisiko werden."
  ],
  "correct": [
   1,
   2,
   5
  ],
  "optExpl": [
   "Falsch: Sticky Sessions binden Zustand an eine Instanz; der Dienst ist dann zustandsbehaftet, mit den bekannten Nachteilen bei Ausfall und Skalierung.",
   "Richtig: Weil keine Instanz Sitzungswissen hält, kann jede jede Anfrage bearbeiten; Instanzen lassen sich hinzufügen oder ersetzen.",
   "Richtig: Informationen reisen mit der Anfrage (Token, IDs) oder werden aus externem Speicher geholt; die Instanz muss nichts über frühere Anfragen wissen.",
   "Falsch: Meist wird der Aufwand pro Anfrage größer, weil Kontext (Token, Parameter) jedes Mal mitgeschickt wird.",
   "Falsch: Der Dienst kann Daten persistieren (z. B. Datenbank); zustandslos bezieht sich auf Sitzungszustand zwischen Anfragen, nicht auf Speicherung.",
   "Richtig: Der Zustand wandert in Datenbank, Cache oder Client. Dort muss er verfügbar und skalierbar sein; die Verantwortung wird verlagert, nicht beseitigt."
  ],
  "explanation": "Zustandslose Dienste verlagern den Zustand nach außen und erleichtern Lastverteilung und Skalierung; dafür trägt der externe Speicher die Last. Fallen: Sticky Sessions, Gleichsetzung mit fehlender Persistenz und kleinere Nachrichten."
 },
 {
  "id": "c3q32",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R3",
  "extra": true,
  "type": "single",
  "q": "Welche Aussage zu Timeout, Retry und Circuit Breaker bei Aufrufen entfernter Dienste trifft zu?",
  "options": [
   "Ein Circuit Breaker wiederholt fehlgeschlagene Aufrufe automatisch, bis der Dienst antwortet.",
   "Ein Timeout macht Wiederholungen auch für nicht idempotente Operationen unkritisch.",
   "Ein geöffneter Circuit Breaker leitet Aufrufe weiter, um den Zustand des Partners zu testen.",
   "Wiederholungen ohne Begrenzung und Wartezeit können einen bereits überlasteten Partner zusätzlich belasten.",
   "Retry stellt sicher, dass ein fehlgeschlagener Aufruf höchstens einmal ausgeführt wird."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Das beschreibt Retry. Ein Circuit Breaker unterbricht Aufrufe an einen offensichtlich gestörten Dienst, damit er sich erholen kann und Aufrufer nicht blockiert werden.",
   "Falsch: Ein Timeout begrenzt nur die Wartezeit. Ob die Operation beim Partner doch ausgeführt wurde, bleibt unbekannt; eine Wiederholung nicht idempotenter Operationen kann sie doppelt auslösen.",
   "Falsch: Im offenen Zustand werden Aufrufe sofort abgewiesen (Fail Fast). Probeaufrufe erfolgen erst im halboffenen Zustand nach Ablauf einer Wartezeit.",
   "Richtig: Ungebremste Retries erzeugen zusätzliche Last und können eine Störung verschärfen. Deshalb werden sie mit Obergrenze, Wartezeit (Backoff) und oft einem Circuit Breaker kombiniert.",
   "Falsch: Retry führt eher zu mehrfacher Ausführung (mindestens einmal). Höchstens einmal würde bedeuten, nach einem Fehler nicht zu wiederholen."
  ],
  "explanation": "Timeout, Retry und Circuit Breaker gehen mit Fehlern entfernter Aufrufe um, haben aber Nebenwirkungen: Retries brauchen Idempotenz und Begrenzung, der Circuit Breaker weist im offenen Zustand ab. Fallen: Retry und Circuit Breaker vertauschen und Timeout mit Idempotenz-Schutz verwechseln."
 },
 {
  "id": "k9",
  "chapter": 3,
  "lz": "LZ 03-07",
  "r": "R3",
  "extra": true,
  "type": "k",
  "points": 2,
  "q": "Beschreibt die Aussage eher synchrone oder asynchrone Kommunikation zwischen Bausteinen?",
  "categories": [
   "Synchron",
   "Asynchron"
  ],
  "rows": [
   {
    "text": "Der Aufrufer erhält sofort ein Future-Objekt und wertet das Ergebnis später aus.",
    "cat": 1
   },
   {
    "text": "Sender und Empfänger müssen zum Zeitpunkt der Kommunikation beide laufen.",
    "cat": 0
   },
   {
    "text": "Der Empfänger darf beim Senden offline sein; die Nachricht wird später zugestellt.",
    "cat": 1
   },
   {
    "text": "Fällt der Empfänger aus, schlägt der Aufruf beim Sender sofort fehl.",
    "cat": 0
   },
   {
    "text": "Ein Client legt eine Nachricht in eine Queue und setzt seine Arbeit fort.",
    "cat": 1
   }
  ],
  "rowExpl": [
   "Der Aufrufer blockiert nicht, das Ergebnis liegt erst später vor. Aus Sicht des Aufrufers ist das asynchron, unabhängig davon, wie die Technik darunter arbeitet.",
   "Der Aufrufer wartet auf die direkte Antwort und braucht dafür einen erreichbaren Empfänger. Gleichzeitige Verfügbarkeit ist das Kennzeichen synchroner Kommunikation (zeitliche Kopplung).",
   "Eine Zwischenablage (Queue, Broker) entkoppelt Senden und Verarbeiten zeitlich, daher asynchron. Beim synchronen Aufruf wäre der Empfänger zwingend erreichbar.",
   "Der Sender erfährt den Ausfall unmittelbar, weil er auf die Antwort wartet. Das ist ein typisches Merkmal synchroner Aufrufe; asynchron bemerkt der Sender den Ausfall zunächst nicht.",
   "Der Client wartet nicht auf die Verarbeitung; das Einstellen in die Queue ist von ihr zeitlich entkoppelt. Das ist asynchron."
  ],
  "explanation": "Entscheidend ist, ob der Aufrufer auf das Ergebnis wartet und ob beide Seiten gleichzeitig verfügbar sein müssen. Synchron = Warten und zeitliche Kopplung; asynchron = Entkopplung in der Zeit, Ergebnis später. Falle: Die verwendete Technik entscheidet nicht, sondern das Warten aus Sicht des Aufrufers."
 },
 {
  "id": "c3q33",
  "chapter": 3,
  "lz": "LZ 03-09",
  "r": "R3",
  "extra": true,
  "type": "single",
  "q": "Welche Aussage zum Entwurfsmuster Fassade trifft zu?",
  "options": [
   "Sie ersetzt die Schnittstellen des Subsystems, sodass Clients dieses nicht mehr direkt nutzen können.",
   "Sie hat dieselbe Schnittstelle wie ihr Subsystemobjekt und kontrolliert den Zugriff darauf.",
   "Sie bietet Clients einen vereinfachten Zugang, schließt den direkten Zugriff auf das Subsystem aber nicht zwingend aus.",
   "Sie macht Algorithmen eines Subsystems zur Laufzeit austauschbar.",
   "Sie passt eine vorhandene Schnittstelle an eine vom Client erwartete Schnittstelle an."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Die Fassade ergänzt das Subsystem um einen bequemen Zugang; ein direkter Zugriff wird dadurch nicht technisch unterbunden.",
   "Falsch: Das beschreibt den Proxy. Die Fassade hat eine andere, meist einfachere Schnittstelle als die dahinterliegenden Klassen.",
   "Richtig: Die Fassade reduziert Komplexität und Abhängigkeiten der Clients vom Subsystem. Ob direkter Zugriff erlaubt ist, ist eine zusätzliche Regel.",
   "Falsch: Das beschreibt Strategy. Die Fassade bündelt Aufrufe, tauscht aber keine Verhaltensvarianten aus.",
   "Falsch: Das beschreibt den Adapter. Die Fassade definiert eine neue, einfachere Schnittstelle, ohne einen vorgegebenen Zielvertrag zu erfüllen."
  ],
  "explanation": "Die Fassade bietet einen vereinfachten, einheitlichen Zugang zu einem Subsystem. Sie ändert nicht dessen Schnittstelle zugunsten eines Zielvertrags (Adapter), kontrolliert keinen Zugriff (Proxy) und tauscht keine Algorithmen aus (Strategy). Der direkte Zugriff auf das Subsystem bleibt möglich."
 },
 {
  "id": "c3q34",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zu Modulen im Sinne der Modularisierung treffen zu?",
  "options": [
   "Ein Modul entspricht in objektorientierten Systemen genau einer Klasse.",
   "Ein Modul kapselt Entwurfsentscheidungen hinter seiner Schnittstelle.",
   "Ein Modul sollte so geschnitten werden, dass es von möglichst vielen anderen Modulen genutzt wird.",
   "Module können hierarchisch aus Untermodulen bestehen.",
   "Ein Modul ist immer eine eigenständig auslieferbare Einheit."
  ],
  "correct": [
   1,
   3
  ],
  "optExpl": [
   "Falsch: Ein Modul ist eine Einheit mit definierter Schnittstelle und kann viele Klassen umfassen. Die Gleichsetzung mit der Klasse verengt den Begriff.",
   "Richtig: Das Modul ist die Einheit, an der Information Hiding ansetzt: Nutzer kennen die Schnittstelle, die Entscheidungen dahinter dürfen sich ändern.",
   "Falsch: Maßgeblich für den Schnitt sind Zusammengehörigkeit und Änderungsgründe, nicht die Zahl der Nutzer. Ein stark genutztes Modul wird zum Änderungsrisiko für viele.",
   "Richtig: Modularisierung ist rekursiv anwendbar: Ein Modul kann intern wieder in Module gegliedert sein, die ihrerseits Schnittstellen haben.",
   "Falsch: Modularisierung betrifft die logische Gliederung. Mehrere Module können in einem Artefakt ausgeliefert werden, ein Modul kann sich auch über mehrere Artefakte erstrecken."
  ],
  "explanation": "Ein Modul bündelt Zusammengehöriges hinter einer Schnittstelle, kapselt Entscheidungen und kann selbst aus Modulen bestehen. Fallen: Modul gleich Klasse, Modul gleich Deployment-Einheit und Schnitt nach Nutzungshäufigkeit statt nach Zusammengehörigkeit."
 },
 {
  "id": "c3q35",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zur Abwägung zwischen modularem Monolith und Microservices treffen zu?",
  "options": [
   "Ein modularer Monolith mit klaren Modulgrenzen kann eine spätere Aufteilung in Services erleichtern.",
   "Die Komplexität einzelner Services sinkt, daher sinkt auch die Gesamtkomplexität des Systems.",
   "Transaktionen über Servicegrenzen sind aufwendiger als lokale Transaktionen im Monolithen.",
   "Microservices lassen sich nur dann unabhängig ändern, wenn sie sich eine gemeinsame Datenbank teilen.",
   "Microservices ermöglichen unabhängiges Deployment und Skalieren, verlagern aber Komplexität in Betrieb und Kommunikation.",
   "Die Einhaltung von Modulgrenzen spricht für Microservices, weil sie sich im Monolithen technisch nicht durchsetzen lässt."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Klare Modulgrenzen und Schnittstellen im Monolithen sind eine gute Vorbereitung, falls Teile später ausgelagert werden müssen.",
   "Falsch: Die Komplexität verschiebt sich in Verteilung, Netzwerk, Betrieb und Konsistenz. Die Gesamtkomplexität steigt typischerweise.",
   "Richtig: Lokal genügt eine ACID-Transaktion; über Services braucht man Muster wie Sagas oder akzeptiert Eventual Consistency, was die Fachlichkeit beeinflusst.",
   "Falsch: Eine gemeinsame Datenbank koppelt die Services über Daten und verhindert gerade unabhängige Änderungen.",
   "Richtig: Unabhängigkeit und gezielte Skalierung stehen höherem Aufwand für Betrieb, Monitoring, Versionierung und Fehlertoleranz gegenüber.",
   "Falsch: Modulgrenzen lassen sich auch im Monolithen durchsetzen, etwa durch Modulsysteme, Paketregeln und automatisierte Architekturprüfungen. Die Netzwerkgrenze ist nicht notwendig."
  ],
  "explanation": "Microservices tauschen Unabhängigkeit gegen Verteilungskomplexität und Konsistenzprobleme; ein modularer Monolith ist ein oft ausreichender Kompromiss. Fallen: Gesamtkomplexität sinkt nicht, gemeinsame Datenbank widerspricht Unabhängigkeit, Modulgrenzen sind auch ohne Netzwerk durchsetzbar."
 },
 {
  "id": "c3q36",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zur Auswahl und Kombination von Architekturmustern treffen zu?",
  "options": [
   "Ein erprobtes Muster senkt das Risiko so weit, dass seine Auswirkungen nicht mehr bewertet werden müssen.",
   "Muster adressieren oft gegenläufige Qualitäten; die Auswahl orientiert sich an den priorisierten Qualitätszielen.",
   "Muster lassen sich kombinieren, solange sich ihre Regeln nicht widersprechen.",
   "Hat ein Muster in vergleichbaren Systemen die Wartbarkeit verbessert, gilt das auch für das eigene System.",
   "Dasselbe Muster kann in einem Kontext eine Qualität verbessern und in einem anderen verschlechtern.",
   "Muster sollten gewählt werden, bevor die Qualitätsziele feststehen, um Spielraum zu behalten."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Falsch: Auch bewährte Muster haben Nachteile, deren Gewicht vom Kontext abhängt. Bewertung gegen die eigenen Anforderungen bleibt nötig.",
   "Richtig: Weil Muster Kompromisse sind, entscheiden die wichtigsten Qualitätsziele, welche Nachteile hinnehmbar sind.",
   "Richtig: Kombinationen sind üblich, z. B. Schichten innerhalb eines Services und Publish/Subscribe zwischen Services. Widersprüchliche Regeln (etwa Aufrufe nach oben bei strikten Schichten) schließen sich aus.",
   "Falsch: Der Kontext (Größe, Last, Team, Umgebung) kann abweichen; Erfahrungen aus anderen Systemen sind ein Hinweis, kein Beleg.",
   "Richtig: Ein Muster wirkt nur im passenden Kontext; ein unpassendes Muster, z. B. Schichten bei streng laufzeitkritischer Verarbeitung, verschlechtert Qualitäten.",
   "Falsch: Qualitätsziele sind die Entscheidungsgrundlage für die Musterwahl. Ohne sie lässt sich nicht beurteilen, welches Muster passt."
  ],
  "explanation": "Musterauswahl ist eine Abwägung gegen priorisierte Qualitätsziele im konkreten Kontext. Kombinieren ist üblich, aber nicht beliebig. Fallen: Bewährtheit ersetzt keine Bewertung, Erfahrungen sind nicht übertragbar, Muster vor Zielen wählen."
 },
 {
  "id": "c3q37",
  "chapter": 3,
  "lz": "LZ 03-03",
  "r": "R3",
  "extra": true,
  "type": "multi",
  "q": "Welche Aussagen zu Bounded Contexts im Domain-Driven Design treffen zu?",
  "options": [
   "Der Begriff „Kunde“ muss in allen Bounded Contexts identisch modelliert werden, damit das Gesamtsystem konsistent bleibt.",
   "Fachliche Grenzen können quer zu technischen Schichten verlaufen; ein Bounded Context umfasst oft Anteile mehrerer Schichten.",
   "Innerhalb eines Bounded Context hat die gemeinsame Fachsprache eine eindeutige Bedeutung; derselbe Begriff kann anderswo Anderes bedeuten.",
   "Bounded Contexts entsprechen den technischen Schichten der Anwendung (z. B. Präsentation, Anwendungslogik, Datenhaltung).",
   "Jeder Bounded Context muss als eigenständig deploybarer Microservice umgesetzt werden.",
   "An den Grenzen zwischen Bounded Contexts ist oft eine Übersetzung zwischen den jeweiligen Modellen erforderlich."
  ],
  "correct": [
   1,
   2,
   5
  ],
  "optExpl": [
   "Falsch: Gerade das Gegenteil: Derselbe Begriff darf in verschiedenen Contexts unterschiedlich modelliert sein; jeder Context hat sein eigenes Modell.",
   "Richtig: Der Schnitt folgt der Fachlichkeit, nicht der technischen Schichtung. Dadurch entstehen vertikale Schnitte.",
   "Richtig: Ein Bounded Context grenzt ein Modell samt Fachsprache ab, in dem die Begriffe eindeutig sind.",
   "Falsch: Schichten sind technische Gliederung, Bounded Contexts fachliche. Beide Aufteilungen stehen orthogonal zueinander.",
   "Falsch: Die Abgrenzung ist eine fachliche Strukturentscheidung. Umsetzung als Module einer Anwendung ist ebenso möglich.",
   "Richtig: Weil Begriffe unterschiedlich modelliert sein dürfen, müssen Daten und Bedeutungen an Context-Grenzen abgebildet werden."
  ],
  "explanation": "Bounded Context = fachlich abgegrenztes Modell mit eigener Fachsprache. Er verläuft quer zu Schichten, muss kein Microservice sein, und an seinen Grenzen wird übersetzt. Fallen: unternehmensweit einheitliche Begriffe, Gleichsetzung mit Schichten."
 },
 {
  "id": "c3q38",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zur Kapselung (Encapsulation) treffen zu?",
  "options": [
   "Kapselung bündelt Daten und Operationen und regelt den Zugriff auf den Zustand über eine Schnittstelle.",
   "Sobald alle Attribute nicht öffentlich sind, bleibt der Zustand von selbst konsistent.",
   "Spiegeln Getter und Setter die interne Struktur 1:1 nach außen, ist Information Hiding trotz privater Attribute weitgehend verfehlt.",
   "Kapselung verbietet es, dass Bausteine über Nachrichten oder Ereignisse kommunizieren.",
   "Kapselung lässt sich auf verschiedenen Granularitäten anwenden, nicht nur auf Klassen."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Das ist die Kernidee: Der Zustand wird nur über definierte Operationen verändert, die Konsistenzregeln durchsetzen können.",
   "Falsch: Verborgene Attribute verhindern nur direkten Zugriff. Konsistenz entsteht erst, wenn die Operationen Invarianten prüfen und durchsetzen.",
   "Richtig: Die Struktur ist dann Teil der Schnittstelle und kann nicht mehr ohne Folgen für Nutzer geändert werden. Kapselung ohne verborgene Entscheidung nützt wenig.",
   "Falsch: Kapselung regelt den Zugriff auf den Zustand, nicht die Kommunikationsform. Nachrichten und Ereignisse sind Schnittstellen und mit Kapselung vereinbar.",
   "Richtig: Auch Module, Komponenten oder Dienste kapseln ihren Zustand hinter einer Schnittstelle. Das Prinzip ist nicht an die Klassenebene gebunden."
  ],
  "explanation": "Kapselung ist das Mittel, Zustand und Operationen zu bündeln und nur über die Schnittstelle zugänglich zu machen; sie ist aber wirkungslos, wenn die Schnittstelle die Interna 1:1 spiegelt. Fallen: private Attribute mit Konsistenz gleichsetzen, Kapselung mit Kommunikationsverbot verwechseln und auf Klassen beschränken."
 },
 {
  "id": "c3q39",
  "chapter": 3,
  "lz": "LZ 03-09",
  "r": "R3",
  "extra": true,
  "type": "single",
  "q": "Worin unterscheiden sich Adapter und Fassade am ehesten?",
  "options": [
   "Der Adapter kontrolliert den Zugriff auf das angepasste Objekt, die Fassade nicht.",
   "Der Adapter erweitert ein Objekt dynamisch um Verantwortlichkeiten, die Fassade tut das nicht.",
   "Der Adapter erfüllt eine vorgegebene Zielschnittstelle, die Fassade definiert eine neue, vereinfachte Schnittstelle.",
   "Der Adapter bündelt mehrere Subsystem-Klassen zu einer einfachen Schnittstelle, die Fassade passt Schnittstellen an."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Zugriffskontrolle ist die Aufgabe des Proxys. Der Adapter passt nur die Schnittstelle an.",
   "Falsch: Das beschreibt den Decorator. Der Adapter ändert die Schnittstelle, nicht den Funktionsumfang.",
   "Richtig: Beim Adapter bestimmt der Client die erwartete Schnittstelle, bei der Fassade bestimmt der Anbieter eine bequeme Schnittstelle.",
   "Falsch: Die Rollen sind vertauscht: Bündeln und Vereinfachen ist die Aufgabe der Fassade, Anpassen die des Adapters."
  ],
  "explanation": "Der Adapter erfüllt eine vom Client erwartete Zielschnittstelle auf Basis einer vorhandenen, abweichenden Schnittstelle. Die Fassade definiert dagegen eine neue, vereinfachte Schnittstelle für ein Subsystem. Beide sind strukturell Hüllen; Unterschied ist die Absicht. Zugriffskontrolle (Proxy) und dynamische Erweiterung (Decorator) sind andere Muster."
 },
 {
  "id": "c3q40",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zu Zielen und Folgen der Modularisierung eines gewachsenen Systems treffen zu?",
  "options": [
   "Modularisierung hat zum Ziel, dass zwischen Bausteinen keine Abhängigkeiten mehr bestehen.",
   "Bei gutem Schnitt bleiben Änderungen auf wenige Bausteine begrenzt.",
   "Modularisierung dient vor allem dazu, Bausteine auf mehrere Prozesse oder Rechner zu verteilen.",
   "Modularisierung kann Laufzeitkosten verursachen, etwa durch zusätzliche Aufrufe über Schnittstellen.",
   "Teams können weitgehend unabhängig arbeiten, sobald die Schnittstellen zwischen den Modulen vereinbart sind."
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Falsch: Bausteine müssen zusammenarbeiten, also bleiben Abhängigkeiten nötig. Ziel ist, sie auf definierte Schnittstellen zu begrenzen und minimal zu halten.",
   "Richtig: Zusammengehörige Entscheidungen liegen in einem Modul, sodass Änderungen lokal wirken. Bei schlechtem Schnitt ziehen Änderungen dagegen viele Module nach sich.",
   "Falsch: Modularisierung ist eine logische Gliederung. Verteilung ist eine davon unabhängige Entscheidung, die Module nicht voraussetzt und die sie nicht ersetzt.",
   "Richtig: Indirektion über Schnittstellen und Aufrufe über Modulgrenzen können Performance kosten. Das ist ein Zielkonflikt zur Änderbarkeit.",
   "Richtig: Klar definierte Schnittstellen erlauben parallele Entwicklung. Die Abstimmung verlagert sich auf die Schnittstellen."
  ],
  "explanation": "Modularisierung begrenzt Änderungen, ermöglicht parallele Arbeit und Austauschbarkeit, kostet aber Schnittstellenaufwand und eventuell Laufzeit. Fallen: Abhängigkeitsfreiheit als Ziel und Modularisierung mit Verteilung verwechseln."
 },
 {
  "id": "c3q41",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R1",
  "type": "multi",
  "q": "Ein Baustein, etwa eine Logging-Bibliothek, wird von sehr vielen anderen Bausteinen genutzt. Welche Aussagen treffen zu?",
  "options": [
   "Der Baustein ist im Sinne der Stabilitätsmetrik instabil, weil er von vielen Bausteinen genutzt wird.",
   "Ersetzt man duplizierten Code durch einen gemeinsam genutzten Baustein, kann die Kopplung im System steigen.",
   "Die Verallgemeinerung für viele Nutzer erhöht tendenziell die Komplexität des Bausteins.",
   "Die efferente Kopplung des Bausteins ist hoch, weil viele Bausteine ihn nutzen.",
   "Ein viel genutzter Baustein sollte möglichst konkret implementiert sein, damit er sich leichter ändern lässt.",
   "Änderungen an der Schnittstelle des Bausteins sind aufwendig, weil sie alle Nutzer betreffen."
  ],
  "correct": [
   1,
   2,
   5
  ],
  "optExpl": [
   "Falsch: Viele Nutzer (hohe afferente Kopplung) machen einen Baustein stabil im Sinne von schwer änderbar. Instabil macht viele ausgehende Abhängigkeiten.",
   "Richtig: Weniger Duplikate bedeuten nicht weniger Kopplung. Alle Nutzer hängen nun am selben Baustein, und Änderungen an ihm betreffen sie gemeinsam.",
   "Richtig: Um unterschiedliche Nutzer zu bedienen, braucht ein Baustein Konfiguration, Varianten und Erweiterungspunkte. Diese Allgemeinheit kostet Komplexität.",
   "Falsch: Vertauscht. Dass viele Bausteine ihn nutzen, ist eingehende (afferente) Kopplung. Efferent zählt die Abhängigkeiten, die der Baustein selbst nach außen hat.",
   "Falsch: Gerade viel genutzte, stabile Bausteine sollten eher abstrakt sein, damit man sie erweitern kann, ohne sie zu ändern. Konkrete Implementierung erschwert Anpassungen bei vielen Nutzern.",
   "Richtig: Jede Änderung an Schnittstelle oder Vertrag erfordert Anpassungen oder Abstimmung bei allen Nutzern. Deshalb sollte die Schnittstelle stabil und versioniert sein."
  ],
  "explanation": "Starke Wiederverwendung erhöht die afferente Kopplung, verlangt stabile Schnittstellen und führt meist zu allgemeineren, komplexeren Bausteinen. Weniger Duplikate sind nicht gleichbedeutend mit weniger Kopplung. Fallen: efferent und afferent vertauschen, stabil mit unproblematisch verwechseln, konkret statt abstrakt."
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
    "text": "Ein viel genutzter Baustein, dessen Schnittstelle versioniert ist und selten geändert wird.",
    "cat": 0
   },
   {
    "text": "Eine Abstraktionsschicht, die nur einen Aufrufer hat und nie ausgetauscht wird.",
    "cat": 1
   },
   {
    "text": "Ein zentraler Baustein, von dem fast alle anderen abhängen und der sich häufig ändert.",
    "cat": 1
   },
   {
    "text": "Eine Schnittstelle, die in Fachbegriffen statt in internen Datenstrukturen formuliert ist.",
    "cat": 0
   },
   {
    "text": "Technische Hilfsfunktionen ohne erkennbaren Zusammenhang sind in einem Baustein „Util“ gebündelt.",
    "cat": 1
   },
   {
    "text": "Abhängigkeiten verlaufen entlang einer Schichtung nur nach unten.",
    "cat": 0
   }
  ],
  "rowExpl": [
   "Auch ein stark abhängiger Baustein ist beherrschbar, wenn seine Schnittstelle stabil und versioniert ist. Änderungen erreichen die Nutzer kontrolliert und selten, das fördert die Wartbarkeit.",
   "Eine Schicht ohne Variationsbedarf fügt Typen und Indirektion hinzu, ohne Änderungen zu erleichtern. Sie erschwert Verständnis und Nachvollziehbarkeit und schadet der Wartbarkeit.",
   "Jede Änderung eines zentralen, stark genutzten Bausteins wirkt auf fast alle Nutzer. Häufige Änderungen an genau dieser Stelle machen das System änderungsanfällig, das schadet.",
   "Fachbegriffe in der Schnittstelle verbergen interne Strukturen (Information Hiding). Interne Änderungen schlagen so nicht nach außen durch, das fördert die Wartbarkeit.",
   "Ein Sammelbaustein ohne inneren Zusammenhang hat niedrige Kohäsion. Änderungen betreffen unvorhersehbar viele Nutzer, und der Baustein wächst unkontrolliert, das schadet.",
   "Eine Abhängigkeitsrichtung ohne Zyklen erlaubt es, Bausteine einzeln zu verstehen, zu ändern und zu testen. Das fördert die Wartbarkeit."
  ],
  "explanation": "Stabile, versionierte Schnittstellen, fachlich formulierte Schnittstellen und zyklenfreie, gerichtete Abhängigkeiten fördern die Wartbarkeit. Ein häufig geänderter Zentralbaustein, Sammelbausteine mit niedriger Kohäsion und Abstraktion ohne Variationsbedarf schaden. Falle: Viele Nutzer allein sind kein Problem, entscheidend ist die Änderungsrate."
 },
 {
  "id": "c3q42",
  "chapter": 3,
  "lz": "LZ 03-03",
  "r": "R1",
  "type": "single",
  "q": "Welche Aussage zum Verhältnis von fachlicher und technischer Strukturierung eines Systems trifft am ehesten zu?",
  "options": [
   "Jeder fachliche Baustein gehört in genau eine technische Schicht; die fachliche Aufteilung folgt der Schichtung.",
   "Eine rein technische Aufteilung (Oberfläche, Logik, Daten) minimiert die Kopplung bei fachlichen Änderungen, weil Fachlichkeit je Schicht gebündelt liegt.",
   "Fachliche Bausteine verlaufen häufig quer zu technischen Schichten, sodass ein fachlicher Baustein Anteile mehrerer Schichten enthalten kann.",
   "Bei fachlichem Schnitt entfallen technische Strukturierungen wie Schichten, weil die Fachlichkeit die Struktur vollständig vorgibt.",
   "Die Bausteine sollten sich am vorhandenen Datenbankschema orientieren, weil dieses die Fachlichkeit bereits abbildet."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Fachliche Bausteine reichen typischerweise durch mehrere Schichten. Die Schichtung ist eine technische Gliederung und bildet die Fachlichkeit nicht ab.",
   "Falsch: Eine fachliche Änderung berührt dann meist alle Schichten. Fachlicher Schnitt bündelt zusammengehörige Änderungen in einem Baustein.",
   "Richtig: Beide Gliederungen stehen orthogonal. Typisch sind fachliche Schnitte, innerhalb derer technische Schichten oder Strukturen bei Bedarf wiederkehren.",
   "Falsch: Technische Anforderungen und Qualitäten erfordern weiterhin technische Strukturentscheidungen. Fachlich und technisch ergänzen sich.",
   "Falsch: Das Datenbankschema ist ein technisches Artefakt und bildet fachliche Zusammenhänge oft nur teilweise ab."
  ],
  "explanation": "Fachlicher Schnitt und technische Schichtung stehen orthogonal: Fachliche Bausteine gehen oft durch mehrere Schichten, technische Strukturen bleiben trotzdem nötig. Fallen: Gleichsetzen von Fachbausteinen mit Schichten und Schnitt nach Datenbankschema."
 },
 {
  "id": "c3q43",
  "chapter": 3,
  "lz": "LZ 03-03",
  "r": "R3",
  "extra": true,
  "type": "single",
  "q": "Wofür wird die Millersche Zahl (7±2) beim Zerlegen eines Systems am ehesten als Argument herangezogen?",
  "options": [
   "Ein System sollte höchstens 7±2 Bausteine enthalten.",
   "Eine Schnittstelle sollte höchstens 7±2 Operationen anbieten.",
   "Je Zerlegungs- bzw. Darstellungsebene sollten nur überschaubar viele Elemente vorkommen; sie ist ein Argument für hierarchische Zerlegung.",
   "Ein Entwurfsteam sollte höchstens 7±2 Personen umfassen.",
   "Ein Baustein mit mehr als neun Unterbausteinen ist nachweislich fehlerhaft entworfen."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Die Zahl begrenzt nicht das Gesamtsystem. Durch hierarchische Zerlegung kann ein System insgesamt viel mehr Bausteine enthalten.",
   "Falsch: Die Zahl betrifft die Überschaubarkeit je Betrachtungsebene, keine Obergrenze für Schnittstellenoperationen.",
   "Richtig: Das Kurzzeitgedächtnis erfasst nur wenige Elemente gleichzeitig; daher gliedert man hierarchisch. Es ist eine Faustregel, kein harter Grenzwert.",
   "Falsch: Die Zahl stammt aus der Kognitionspsychologie und betrifft Elemente im Kurzzeitgedächtnis, nicht die Teamgröße.",
   "Falsch: Es handelt sich um eine Faustregel, die selbst nicht als universell gilt. Mehr Unterbausteine können begründet sein."
  ],
  "explanation": "Die Millersche Zahl (7±2) ist eine Faustregel zur Überschaubarkeit je Ebene und ein Argument für hierarchische Zerlegung. Sie ist keine harte Grenze für Module, Operationen oder Teamgröße."
 },
 {
  "id": "c3q44",
  "chapter": 3,
  "lz": "LZ 03-05",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zum Wechselspiel von Entwurf und Anforderungen treffen zu?",
  "options": [
   "Entwurfsentscheidungen können Rückfragen an die Anforderungen auslösen und diese verändern.",
   "Feedback zu einem Entwurf ist erst belastbar, wenn alle Qualitätsanforderungen quantifiziert vorliegen.",
   "Auch ein unvollständiger Entwurf eignet sich für Feedback, wenn die offenen Punkte benannt sind.",
   "Eine Referenzarchitektur senkt den Klärungsbedarf bei den Anforderungen, weil sie bewährte Entscheidungen bereits enthält.",
   "Neue technische Erkenntnisse können Entscheidungen revidieren lassen, auch wenn sich die Anforderungen nicht geändert haben.",
   "Änderungen der Anforderungen nach Entwurfsbeginn zeigen, dass die Anforderungsanalyse unzureichend war."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Entwurf und Anforderungsklärung beeinflussen sich gegenseitig. Entwurfsideen decken Lücken oder Konflikte in den Anforderungen auf, und geklärte Anforderungen verändern den Entwurf.",
   "Falsch: Auch qualitative oder vorläufige Qualitätsanforderungen erlauben sinnvolles Feedback, etwa zu Szenarien oder Risiken. Auf Quantifizierung zu warten verzögert die Rückmeldung gerade dort, wo sie am meisten hilft.",
   "Richtig: Wenn klar ist, was noch offen ist, lässt sich auch zu einem unfertigen Entwurf gezielt Feedback einholen. Das senkt das Risiko, auf falschen Annahmen weiterzubauen.",
   "Falsch: Eine Referenzarchitektur ersetzt die Anforderungsklärung nicht. Ob sie zu Qualitätszielen und Randbedingungen passt, lässt sich nur mit den Anforderungen beurteilen.",
   "Richtig: Entscheidungen beruhen auf Annahmen. Zeigen Prototypen, Messungen oder Erfahrungen, dass sie nicht tragen, ist eine Revision berechtigt, auch ohne geänderte Anforderungen.",
   "Falsch: Anforderungen ändern sich in der Praxis auch bei guter Analyse, etwa durch Marktveränderungen oder neues Wissen. Ein Entwurf muss damit rechnen und Änderungen aufnehmen können."
  ],
  "explanation": "Architekturentwurf ist iterativ: Entwurf und Anforderungen beeinflussen sich, Feedback ist schon zu Unfertigem sinnvoll, und neue Erkenntnisse sind ein legitimer Revisionsgrund. Fallen: Quantifizierung als Voraussetzung für Feedback, Referenzarchitektur als Ersatz für Klärung, Anforderungsänderungen als Analysefehler."
 },
 {
  "id": "c3q45",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zum Ziel „lose Kopplung“ treffen zu?",
  "options": [
   "Lose Kopplung und hohe Kohäsion sind zwei Bezeichnungen für dasselbe Entwurfsziel.",
   "Lose Kopplung kann Kosten verursachen, etwa durch zusätzliche Indirektion und schwerer nachvollziehbare Abläufe.",
   "Lose Kopplung wird erreicht, indem Bausteine auf getrennten Servern betrieben werden.",
   "Lose Kopplung heißt, dass Bausteine möglichst wenig voneinander wissen müssen, nicht dass sie keine Beziehung haben.",
   "Lose Kopplung erleichtert das Testen von Bausteinen in Isolation.",
   "Jede zusätzliche Entkopplung verbessert die Änderbarkeit, ohne andere Qualitätsmerkmale zu beeinträchtigen."
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Falsch: Kopplung betrifft Beziehungen zwischen Bausteinen, Kohäsion den Zusammenhalt innerhalb eines Bausteins. Beide begünstigen sich häufig, sind aber getrennte Kriterien.",
   "Richtig: Entkopplung durch Schnittstellen, Vermittler oder Events kostet Aufwand, erzeugt Indirektion und macht Abläufe schwerer nachvollziehbar. Der Nutzen muss die Kosten rechtfertigen.",
   "Falsch: Physische Verteilung ändert nichts an der fachlichen Abhängigkeit und führt zusätzliche Kopplung ein, etwa über Netzwerk, Verfügbarkeit und Datenformate.",
   "Richtig: Ohne Beziehungen gäbe es keine Zusammenarbeit. Lose Kopplung begrenzt, was Bausteine voneinander kennen und annehmen müssen.",
   "Richtig: Wenige, gut definierte Abhängigkeiten lassen sich im Test durch Testdoubles ersetzen, sodass ein Baustein isoliert geprüft werden kann.",
   "Falsch: Zusätzliche Entkopplung geht meist zulasten von Einfachheit, Nachvollziehbarkeit oder Performance. Sie ist ein Zielkonflikt, kein Selbstzweck."
  ],
  "explanation": "Lose Kopplung heißt: wenig gegenseitiges Wissen, nicht keine Beziehung. Sie erleichtert Änderung und isoliertes Testen, kostet aber Indirektion und Nachvollziehbarkeit. Fallen: Verwechslung mit Kohäsion, physische Verteilung als Entkopplung, Entkopplung ohne Gegenwirkung."
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
    "text": "Zwei Bausteine tauschen Daten über eine gemeinsam genutzte Datenbanktabelle aus.",
    "cat": 0
   },
   {
    "text": "Ein Baustein erhält die benötigte Abhängigkeit als Schnittstelle von außen übergeben.",
    "cat": 1
   },
   {
    "text": "Ein Baustein instanziiert eine konkrete Klasse eines anderen Bausteins selbst.",
    "cat": 0
   },
   {
    "text": "Zwei Dienste tauschen Daten über ein versioniertes Nachrichtenformat aus, ohne gemeinsame Klassen zu nutzen.",
    "cat": 1
   },
   {
    "text": "Ein Baustein funktioniert nur, wenn ein anderer vorher initialisiert wurde.",
    "cat": 0
   },
   {
    "text": "Ein Baustein nutzt von einem anderen nur eine Operation einer schmalen, selbst definierten Schnittstelle.",
    "cat": 1
   }
  ],
  "rowExpl": [
   "Eine gemeinsame Tabelle macht das Schema zur geteilten Schnittstelle. Jede Schemaänderung wirkt auf beide Bausteine, und Interna sind nicht verborgen. Das ist enge Kopplung.",
   "Der Baustein kennt nur die Schnittstelle, nicht die konkrete Implementierung (Dependency Injection). Die Kopplung bleibt auf den Vertrag begrenzt und ist eher lose.",
   "Die Erzeugung einer konkreten Klasse bindet an deren Typ und Konstruktor. Das ist die Kopplungsart „Erzeugung“ und eher eng, auch wenn sie nur an einer Stelle steht.",
   "Das versionierte Nachrichtenformat ist der einzige gemeinsame Vertrag, Klassen und Interna werden nicht geteilt. Das ist eher lose, wenn auch nicht frei von Abhängigkeit.",
   "Die Annahme einer Initialisierungsreihenfolge ist zeitliche Kopplung. Sie ist im Code oft nicht sichtbar und bindet an das zeitliche Verhalten des anderen Bausteins.",
   "Eine schmale, selbst definierte Schnittstelle begrenzt, was der Baustein vom anderen wissen muss, und lässt sich leicht austauschen. Das ist eher lose Kopplung."
  ],
  "explanation": "Enge Kopplung entsteht durch geteilte Interna (gemeinsames Schema), Erzeugung konkreter Klassen und zeitliche Annahmen. Lose Kopplung entsteht, wenn Bausteine nur einen schmalen, expliziten Vertrag teilen. Falle: Eine einzige Instanziierung oder zeitliche Annahme wirkt harmlos, ist aber eine echte Abhängigkeit."
 },
 {
  "id": "c3q47",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R1",
  "type": "multi",
  "q": "Direkte Methodenaufrufe werden durch Nachrichten über einen Broker ersetzt. Welche Aussagen zur Kopplung treffen zu?",
  "options": [
   "Sender und Empfänger müssen nicht mehr gleichzeitig verfügbar sein, bleiben aber über das Nachrichtenformat gekoppelt.",
   "Der Broker übernimmt die Verantwortung für Änderungen des Nachrichtenformats, sodass Empfänger davon unberührt bleiben.",
   "Da der Sender die Empfänger nicht mehr kennt, kann er Nachrichten ohne Abstimmung semantisch ändern.",
   "Die Abhängigkeit wird in statischen Abhängigkeitsanalysen des Codes schlechter sichtbar.",
   "Die Kopplung wechselt von statisch zu dynamisch und sinkt damit.",
   "Der Broker als zusätzliche Komponente führt eine neue Laufzeitabhängigkeit ein."
  ],
  "correct": [
   0,
   3,
   5
  ],
  "optExpl": [
   "Richtig: Der Broker entkoppelt zeitlich (asynchrone Zustellung). Format und Bedeutung der Nachricht bleiben jedoch eine gemeinsame Abhängigkeit von Sender und Empfänger.",
   "Falsch: Ein Broker leitet Nachrichten weiter, übersetzt sie aber in der Regel nicht. Ändert der Sender das Format, bricht der Empfänger trotzdem.",
   "Falsch: Auch ohne direkte Kenntnis hängen Empfänger von der Bedeutung der Nachricht ab. Semantische Änderungen müssen daher abgestimmt oder abwärtskompatibel erfolgen.",
   "Richtig: Die Beziehung entsteht erst zur Laufzeit über Topics, Konfiguration oder Nachrichtenformate und fehlt in Importen und Aufrufgraphen. Sie muss deshalb explizit dokumentiert werden.",
   "Falsch: Dynamische Kopplung ist nicht automatisch geringer. Sie ist oft nur weniger sichtbar, die fachliche Abhängigkeit besteht fort.",
   "Richtig: Der Broker ist ein zusätzlicher Baustein, dessen Verfügbarkeit und Konfiguration nun für die Kommunikation vorausgesetzt werden. Das ist eine zusätzliche Laufzeitabhängigkeit."
  ],
  "explanation": "Ein Broker entkoppelt zeitlich und technisch, verlagert Abhängigkeiten aber in die Laufzeit und versteckt sie vor statischer Analyse; fachliche und Formatabhängigkeiten bleiben, zusätzlich entsteht eine Abhängigkeit vom Broker. Falle: „dynamisch“ mit „lose“ gleichsetzen."
 },
 {
  "id": "c3q48",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R1",
  "type": "single",
  "q": "Baustein A hat zwölf eingehende und keine ausgehenden Abhängigkeiten. Welche Aussage trifft am ehesten zu?",
  "options": [
   "A ist instabil, weil sich seine Schnittstelle wegen der vielen Nutzer häufig ändern muss.",
   "A hat eine hohe efferente Kopplung, weil er von vielen genutzt wird.",
   "A ist im Sinne der Stabilitätsmetrik stabil: Änderungen an seiner Schnittstelle sind aufwendig, weil sie zwölf Nutzer betreffen.",
   "A ist stabil, das heißt ausgereift und ausreichend getestet.",
   "A sollte möglichst konkret implementiert sein, damit Änderungen auf A beschränkt bleiben."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Instabilität entsteht durch viele ausgehende Abhängigkeiten. A hat keine und zwölf Nutzer, die sich eher gegen häufige Änderungen sperren.",
   "Falsch: Vertauscht. Eingehende Abhängigkeiten bilden die afferente Kopplung. A hat keine ausgehenden (efferenten) Abhängigkeiten.",
   "Richtig: Viele eingehende und keine ausgehenden Abhängigkeiten bedeuten maximale Stabilität im Sinne von schwer änderbar. Jede Schnittstellenänderung wirkt auf alle Nutzer.",
   "Falsch: „Stabil“ ist hier eine Aussage über die Kopplungsstruktur, nicht über Qualität oder Reife. Ein viel genutzter Baustein kann trotzdem fehlerhaft sein.",
   "Falsch: Gerade stabile Bausteine sollten eher abstrakt sein, damit sie erweiterbar bleiben, ohne geändert zu werden. Konkret implementiert erschweren sie notwendige Änderungen bei zwölf Nutzern."
  ],
  "explanation": "Afferent heißt eingehend: Viele Nutzer machen einen Baustein stabil im Sinne von schwer änderbar, weshalb er eher abstrakt sein sollte. Fallen: afferent und efferent vertauschen, „stabil“ als ausgereift lesen, konkrete statt abstrakte Gestaltung wählen."
 },
 {
  "id": "c3q49",
  "chapter": 3,
  "lz": "LZ 03-10",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zu Querschnittskonzepten treffen zu?",
  "options": [
   "Querschnittskonzepte stehen nicht isoliert, Entscheidungen in einem wirken auf andere.",
   "Querschnittskonzepte sollten erst festgelegt werden, wenn die ersten Bausteine implementiert sind, damit sie reale Anforderungen abbilden.",
   "Querschnittskonzepte verringern zwangsläufig die Kopplung zwischen den betroffenen Bausteinen.",
   "Ein fachliches Ergebnis, das an mehreren Stellen angezeigt wird, ist ein Querschnittskonzept.",
   "Ein erarbeitetes Konzept lässt sich in anderen Systemen wiederverwenden.",
   "Energieeffizienz kann Gegenstand eines Querschnittskonzepts sein."
  ],
  "correct": [
   0,
   4,
   5
  ],
  "optExpl": [
   "Richtig: Beispiel: Die Wahl asynchroner Kommunikation beeinflusst Fehlerbehandlung, Persistenz und GUI.",
   "Falsch: Späte Festlegung führt zu uneinheitlichen Lösungen und teurem Nacharbeiten. Konzepte werden früh abgestimmt und iterativ verfeinert.",
   "Falsch: Sie fördern Konsistenz, können aber neue gemeinsame Abhängigkeiten schaffen und die Kopplung sogar erhöhen.",
   "Falsch: Mehrfache Verwendung eines Ergebnisses macht keine übergreifende Regel; ein Querschnittskonzept regelt, wie viele Bausteine einen Aspekt umsetzen.",
   "Richtig: Konzepte sind unabhängig vom konkreten fachlichen Kontext und können zwischen Systemen übertragen werden.",
   "Richtig: Sie betrifft Kommunikation, GUI und Nebenläufigkeit gleichermaßen und braucht übergreifende Regeln."
  ],
  "explanation": "Querschnittskonzepte regeln wiederkehrende Aspekte einheitlich, hängen voneinander ab und sind projektübergreifend wiederverwendbar. Sie sollten früh festgelegt werden, verringern nicht automatisch die Kopplung, und ein fachliches Ergebnis, das an mehreren Stellen erscheint, macht noch kein Querschnittskonzept."
 },
 {
  "id": "c3q50",
  "chapter": 3,
  "lz": "LZ 03-12",
  "r": "R3",
  "extra": true,
  "type": "single",
  "q": "Was bedeutet die Wahl eines BASE-orientierten Datenspeichers statt eines ACID-Systems am ehesten?",
  "options": [
   "BASE verzichtet auf Dauerhaftigkeit, sodass bestätigte Schreibvorgänge verloren gehen dürfen.",
   "BASE ist das Konsistenzmodell relationaler Datenbanken, ACID das der NoSQL-Systeme.",
   "Die Anwendung muss zeitweise inkonsistente Lesewerte tolerieren, dafür bleibt der Speicher auch bei Knotenausfällen verfügbar.",
   "BASE bietet gegenüber ACID strengere Isolation, besonders bei verteilten Transaktionen."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Nicht Dauerhaftigkeit wird gelockert, sondern die Konsistenz zwischen Replikaten. Persistente Speicherung bleibt Ziel.",
   "Falsch: Begriffe vertauscht: ACID prägt klassische relationale Systeme, BASE viele verteilte NoSQL-Speicher.",
   "Richtig: Replikate gleichen sich erst nach einiger Zeit an (eventual consistency). Verfügbarkeit hat Vorrang vor sofortiger Konsistenz.",
   "Falsch: BASE lockert Konsistenz- und Isolationsgarantien zugunsten von Verfügbarkeit und Skalierbarkeit."
  ],
  "explanation": "BASE (basically available, soft state, eventually consistent) stellt Verfügbarkeit über sofortige Konsistenz. Die Anwendung muss zeitweise inkonsistente Lesewerte tolerieren. BASE ist weder strenger als ACID noch an NoSQL gebunden, und es verzichtet nicht grundsätzlich auf Dauerhaftigkeit."
 },
 {
  "id": "c3q51",
  "chapter": 3,
  "lz": "LZ 03-12",
  "r": "R3",
  "extra": true,
  "type": "single",
  "q": "Was besagt das CAP-Theorem für ein verteiltes System?",
  "options": [
   "Tritt eine Netzwerkpartition auf, muss das System zwischen Konsistenz und Verfügbarkeit wählen.",
   "CAP beschreibt den Zielkonflikt zwischen Latenz und Konsistenz auch im Normalbetrieb ohne Partition.",
   "Mit ausreichender Replikation und Redundanz lassen sich alle drei Eigenschaften zugleich garantieren.",
   "Konsistenz, Verfügbarkeit und Partitionstoleranz stehen dauerhaft in der Wahl von zwei Eigenschaften, unabhängig davon, ob eine Partition auftritt.",
   "Ein verteiltes System kann Partitionstoleranz abwählen und erhält dann Konsistenz und Verfügbarkeit gleichzeitig."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Entweder werden Anfragen abgelehnt (Konsistenz) oder mit eventuell veralteten Daten beantwortet (Verfügbarkeit). Ohne Partition entfällt der Konflikt.",
   "Falsch: Das beschreibt eine Erweiterung (PACELC). CAP betrifft das Verhalten während einer Partition.",
   "Falsch: Redundanz verringert Ausfälle, hebt aber den Zielkonflikt während einer Partition nicht auf.",
   "Falsch: Der Konflikt besteht nur während einer Partition; im Normalbetrieb sind Konsistenz und Verfügbarkeit erreichbar.",
   "Falsch: Partitionen treten im Netz unvermeidlich auf; Partitionstoleranz ist deshalb keine wählbare Eigenschaft."
  ],
  "explanation": "Netzwerkpartitionen lassen sich in verteilten Systemen nicht ausschließen. Tritt eine auf, muss man zwischen Konsistenz und Verfügbarkeit wählen; ohne Partition sind beide möglich. Typische Fallen: CA als reale Option, Redundanz als Lösung und die Verwechslung mit dem Zielkonflikt Latenz/Konsistenz (PACELC)."
 },
 {
  "id": "c3q52",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "single",
  "q": "Welche Aussage zum Überspringen einer Schicht (Layer Bridging) trifft zu?",
  "options": [
   "Es ist nur in strikten Schichten zulässig, weil dort jede Schicht ihre Nachbarn kennt.",
   "Es verletzt die Schichtung, weil dadurch Abhängigkeiten nach oben entstehen.",
   "Es verbessert die Austauschbarkeit der Datenzugriffsschicht, weil die UI direkt mit ihr arbeitet.",
   "In der offenen Variante zulässig; die höhere Schicht hängt dann von mehreren tieferen ab, was den Austausch der mittleren Schicht erschwert."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Vertauscht: Überspringen kennzeichnet die offene Variante; die strikte Variante verbietet es.",
   "Falsch: Die Abhängigkeit zeigt weiter nach unten. Eine Verletzung läge bei Abhängigkeiten von unten nach oben vor.",
   "Falsch: Je mehr Schichten die UI direkt kennt, desto stärker ist sie an die Datenzugriffsschicht gebunden; der Austausch wird eher schwerer.",
   "Richtig: Das Überspringen spart Durchreichen und Aufwand, erzeugt aber zusätzliche Abhängigkeiten. Die übersprungene Schicht lässt sich nicht mehr unabhängig ändern."
  ],
  "explanation": "Layer Bridging ist in der offenen (relaxed) Schichtung erlaubt und tauscht Einfachheit und Performance gegen zusätzliche Abhängigkeiten und geringere Austauschbarkeit. Falle: Es bleibt Schichtung, solange Abhängigkeiten nur nach unten zeigen."
 },
 {
  "id": "c3q53",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen gelten für eine strikte Schichtenarchitektur?",
  "options": [
   "Die Schichten werden nach Fachlichkeit geschnitten, z. B. Bestellung, Lager, Versand.",
   "Eine Schicht nutzt nur die unmittelbar darunterliegende.",
   "Zwischen den Schichten sind Abhängigkeiten in beide Richtungen zulässig, solange sie über Schnittstellen laufen.",
   "Eine Schicht darf Schichten überspringen, wenn dadurch keine Zyklen entstehen.",
   "Eine Schicht lässt sich ersetzen, ohne dass außer der direkt darüberliegenden weitere Schichten betroffen sind.",
   "Die Einhaltung der Regeln lässt sich mit Werkzeugen zur Abhängigkeitsanalyse prüfen."
  ],
  "correct": [
   1,
   4,
   5
  ],
  "optExpl": [
   "Falsch: Das ist ein fachlicher Schnitt (vertikal). Schichten schneiden nach technischem Abstraktionsniveau (horizontal).",
   "Richtig: Das ist die Kernregel der strikten Variante: Jede Schicht kennt nur die Schnittstelle der unmittelbar darunterliegenden.",
   "Falsch: Abhängigkeiten im Code zeigen nur nach unten. Aufrufe nach oben sind nur über eine von der tieferen Schicht definierte Callback-Schnittstelle möglich.",
   "Falsch: Überspringen ist das Merkmal der offenen Variante und hat mit Zyklen nichts zu tun; in der strikten Variante ist es ausgeschlossen.",
   "Richtig: Weil nur die direkt darüberliegende Schicht von ihr abhängt, bleiben Änderungen bei erhaltener Schnittstelle begrenzt.",
   "Richtig: Die Regeln sind formal (Richtung, Nachbarschaft) und deshalb mit Werkzeugen prüfbar, etwa als Architekturtests."
  ],
  "explanation": "Strikte Schichtung: technische, abstraktionsorientierte Schichten, Nutzung nur der direkt darunterliegenden Schicht, Abhängigkeiten nur nach unten. Fallen: fachlicher statt technischer Schnitt, Überspringen (offene Variante) und Abhängigkeit in beide Richtungen."
 },
 {
  "id": "c3q54",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "single",
  "q": "Welcher Nachteil ist für eine Architektur mit vielen strikt gestapelten Schichten am ehesten typisch?",
  "options": [
   "Zyklische Abhängigkeiten zwischen den Schichten sind unvermeidlich.",
   "Die Schichten lassen sich nicht mehr unabhängig testen.",
   "Die Austauschbarkeit einzelner Schichten sinkt mit jeder zusätzlichen Schicht.",
   "Einfache Anfragen werden durch alle Schichten durchgereicht, was Aufwand für Weiterleitung und Mapping erzeugt."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Strikte Schichtung lässt Abhängigkeiten nur nach unten zu; Zyklen zwischen Schichten sind damit ausgeschlossen, nicht unvermeidlich.",
   "Falsch: Weil jede Schicht nur die Schnittstelle der darunterliegenden kennt, lassen sie sich mit Testersatz isoliert testen.",
   "Falsch: Mehr Schichten ändern die Austauschbarkeit der einzelnen Schicht nicht grundsätzlich; entscheidend ist die Schnittstelle. Der typische Preis ist Aufwand, nicht Starrheit.",
   "Richtig: Jede strikte Schicht reicht Aufrufe weiter und wandelt ggf. Datenstrukturen um; das kostet Latenz und erzeugt Boilerplate-Code."
  ],
  "explanation": "Viele strikte Schichten erhöhen Indirektion: Durchreichen und Umwandeln kosten Laufzeit und Code. Gewonnen werden Änderbarkeit und Verständlichkeit. Fallen: Zyklen, Testbarkeit und Austauschbarkeit leiden nicht typischerweise unter der Zahl der Schichten."
 },
 {
  "id": "c3q55",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "single",
  "q": "Worin unterscheiden sich aktive und passive Filter bei Pipes and Filters?",
  "options": [
   "Aktive Filter kennen ihre Nachbarfilter und rufen sie direkt auf; passive kommunizieren nur über Pipes.",
   "Aktive Filter steuern den Datenfluss selbst (holen per Pull oder schieben per Push); passive werden von Pipe oder Nachbar aufgerufen.",
   "Aktive Filter werden vom Datenstrom ausgelöst (Push), passive holen sich ihre Daten selbst (Pull).",
   "Aktive Filter transformieren Daten, passive leiten sie nur unverändert weiter."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: Auch aktive Filter kommunizieren über Pipes und kennen ihre Nachbarn nicht; das ist gerade der Zweck der Pipes.",
   "Richtig: Der aktive Filter läuft mit eigenem Kontrollfluss und treibt den Datenfluss an. Ein passiver Filter wird aufgerufen, wenn Daten geschoben oder angefordert werden.",
   "Falsch: Pull und Push sind keine Frage der Passivität: Ein aktiver Filter kann selbst holen (Pull) oder selbst schieben (Push). Die Zuordnung ist halb richtig, aber vertauscht.",
   "Falsch: Beide Filterarten transformieren Daten. Der Unterschied liegt im Kontrollfluss, nicht in der Aufgabe."
  ],
  "explanation": "Aktive Filter haben eigenen Kontrollfluss und treiben den Datenfluss (Pull oder Push); passive werden aufgerufen. Alle Filter transformieren und kennen ihre Nachbarn nur über Pipes. Falle: Pull/Push nicht mit aktiv/passiv gleichsetzen."
 },
 {
  "id": "c3q56",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zu Pipes and Filters treffen zu?",
  "options": [
   "Die Stufen können nebenläufig arbeiten; die langsamste Stufe bestimmt den Durchsatz.",
   "Ein Filter muss die Implementierung des vorherigen Filters kennen, um dessen Ausgabe zu interpretieren.",
   "Zusätzliche Stufen erhöhen die Latenz einer einzelnen Verarbeitung nicht, solange sie nebenläufig arbeiten.",
   "Die Fehlerbehandlung ist aufwendig, weil Fehler in einer Stufe folgende Stufen betreffen und Teilergebnisse schon weitergegeben sein können.",
   "Das Muster eignet sich besonders, wenn späte Stufen frühe Stufen rückwirkend anpassen müssen.",
   "Filter lassen sich austauschen und neu kombinieren, wenn sie sich auf dasselbe Datenformat an den Pipes stützen."
  ],
  "correct": [
   0,
   3,
   5
  ],
  "optExpl": [
   "Richtig: Stufen können gleichzeitig verschiedene Datensätze verarbeiten. Wie in einer Fertigungsstraße begrenzt die langsamste Stufe den Durchsatz.",
   "Falsch: Filter sind über das Pipe-Format gekoppelt und kennen die Nachbarn nicht; die Implementierung des Vorgängers ist verborgen.",
   "Falsch: Jeder Datensatz durchläuft alle Stufen nacheinander; zusätzliche Stufen verlängern seine Durchlaufzeit, auch wenn der Durchsatz hoch bleibt.",
   "Richtig: Rollback, Wiederholung und Konsistenz über mehrere Stufen sind schwierig, weil jede Stufe nur ihren Ausschnitt kennt.",
   "Falsch: Rückkopplungen widersprechen der einseitigen Verkettung und machen Nebenläufigkeit und Fehlerbehandlung kompliziert; das Muster passt dafür schlecht.",
   "Richtig: Ein einheitliches Datenformat an den Pipes macht Filter austauschbar, wiederverwendbar und neu kombinierbar."
  ],
  "explanation": "Pipes and Filters: nebenläufig, austauschbar und kombinierbar durch ein einheitliches Pipe-Format; dafür aufwendige Fehlerbehandlung und höhere Latenz je Datensatz. Fallen: Durchsatz und Latenz verwechseln, Kenntnis der Nachbarn, Rückkopplung."
 },
 {
  "id": "c3q59",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zum Datenaustausch zwischen Microservices sind zutreffend?",
  "options": [
   "Ein gemeinsames Datenbankschema koppelt die Services auch dann, wenn sie sonst nur über Schnittstellen kommunizieren.",
   "Technologieneutrale Schnittstellen setzen voraus, dass alle Services dasselbe interne Persistenzformat verwenden.",
   "Synchrone Aufrufe zwischen Services sind in diesem Stil unzulässig, weil sie die Unabhängigkeit der Services aufheben.",
   "Jeder Service hält seine Daten selbst; andere Services greifen nur über dessen Schnittstelle darauf zu.",
   "Asynchrone Ereignisse entkoppeln Services zeitlich, verlagern aber Aufwand in Konsistenzsicherung und Fehlerbehandlung.",
   "Eine gemeinsam genutzte Bibliothek mit Domänenobjekten verringert die Kopplung, weil die Typen einheitlich definiert sind."
  ],
  "correct": [
   0,
   3,
   4
  ],
  "optExpl": [
   "Richtig: Eine Schemaänderung betrifft alle Nutzer, und Zugriffe am Vertrag vorbei sind möglich. Die Unabhängigkeit geht damit verloren.",
   "Falsch: Der Vertrag der Schnittstelle wird vereinheitlicht, nicht das interne Format. Gemeinsame Interna würden die Services gerade koppeln.",
   "Falsch: Synchrone Aufrufe sind erlaubt und verbreitet; sie erzeugen aber zeitliche Kopplung (Verfügbarkeit des Aufgerufenen) und sind deshalb ein Abwägungsthema, kein Verbot.",
   "Richtig: Nur so können Schema und Persistenztechnologie eines Services geändert werden, ohne andere zu beeinträchtigen. Das ist ein Kernprinzip des Stils.",
   "Richtig: Der Aufrufer muss nicht auf die Antwort warten; dafür ist nur eventuelle Konsistenz möglich und Duplikate oder Verlust müssen behandelt werden.",
   "Falsch: Die Bibliothek koppelt die Services über Typen und Release-Zyklen; Änderungen erzwingen abgestimmte Auslieferungen. Einheitlichkeit ist hier kein Entkopplungsgewinn."
  ],
  "explanation": "Microservices sollen unabhängig änderbar und deploybar bleiben. Jede Form gemeinsam genutzter Interna (Schema, Domänenbibliothek) koppelt die Services, auch wenn sie nach außen über Schnittstellen sprechen. Asynchrone Ereignisse entkoppeln zeitlich, verlagern aber Komplexität in Konsistenz und Fehlerbehandlung."
 },
 {
  "id": "k14",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Welchem der beiden Pflichtmuster ist die Aussage am ehesten zuzuordnen?",
  "categories": [
   "Schichtenarchitektur",
   "Pipes & Filter"
  ],
  "rows": [
   {
    "text": "Ein Wechsel der Persistenztechnologie bleibt idealerweise auf eine Ebene begrenzt.",
    "cat": 0
   },
   {
    "text": "Einfache Anfragen durchlaufen oft Ebenen, die nur weiterreichen.",
    "cat": 0
   },
   {
    "text": "Ein zusätzlicher Verarbeitungsschritt lässt sich einfügen, ohne die übrigen Schritte zu ändern, solange das Datenformat passt.",
    "cat": 1
   },
   {
    "text": "Die Abhängigkeiten verlaufen einseitig und richten sich nach der Abstraktionshöhe der Bausteine.",
    "cat": 0
   },
   {
    "text": "Ein Wechsel des Datenformats zwischen zwei Schritten betrifft beide angrenzenden Filter.",
    "cat": 1
   },
   {
    "text": "Ein Fehler in einem mittleren Schritt lässt sich schwer an den Auslöser der Kette zurückmelden.",
    "cat": 1
   }
  ],
  "rowExpl": [
   "Die Kapselung technischer Belange je Ebene ist das Ziel der Schichtung. Bei Pipes und Filter gibt es keine Ebenen mit Technikverantwortung.",
   "Das Durchreichen ist ein bekannter Nachteil strikter Schichtung. Filter in einer Pipeline tragen jeweils eine Verarbeitungsaufgabe.",
   "Filter kennen weder Vorgänger noch Nachfolger, nur das Datenformat der Pipes. Bei Schichten verändert ein neuer Schritt Schnittstellen.",
   "Höhere Ebenen nutzen tiefere, nie umgekehrt. Bei Pipes und Filter richtet sich die Abfolge nach dem Datenfluss.",
   "Das Format der Pipe ist die einzige Schnittstelle zwischen Filtern. Bei Schichten sind Schnittstellen dienstorientiert, nicht datenstromorientiert.",
   "Filter laufen entkoppelt, und es gibt keinen direkten Rückkanal. Bei Schichten kehren Fehler über den Aufrufpfad zurück."
  ],
  "explanation": "Schichten ordnen nach Abstraktionsebene mit einseitiger Abhängigkeit; die typischen Schwächen sind Durchreichen und querschnittliche Fachänderungen. Pipes und Filter strukturieren nach Verarbeitungsschritten; die typischen Schwächen sind das Datenformat zwischen Schritten und die Fehlerrückmeldung."
 },
 {
  "id": "k15",
  "chapter": 3,
  "lz": "LZ 03-10",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Handelt es sich um ein Querschnittskonzept oder nicht?",
  "categories": [
   "Querschnittskonzept",
   "Kein Querschnittskonzept"
  ],
  "rows": [
   {
    "text": "Die IBAN-Prüfung im Zahlungsbaustein.",
    "cat": 1
   },
   {
    "text": "Ein Algorithmus zur Rabattberechnung, den mehrere Dialoge aufrufen.",
    "cat": 1
   },
   {
    "text": "Vorgaben, wie alle Bausteine Konfigurationswerte laden und überschreiben.",
    "cat": 0
   },
   {
    "text": "Festlegung, wie Bausteine Transaktionsgrenzen setzen und Daten persistieren.",
    "cat": 0
   },
   {
    "text": "Das Datenmodell eines Kunden, das mehrere Bausteine lesen.",
    "cat": 1
   },
   {
    "text": "Vorgaben zur Mehrsprachigkeit von Texten und Formaten in allen Dialogen.",
    "cat": 0
   }
  ],
  "rowExpl": [
   "Fachliche Validierung mit lokalem Geltungsbereich, gehört zu genau einem Baustein.",
   "Fachliche Funktion mit klarem Zuhause in einem Baustein; sie wird nur genutzt, nicht von vielen Bausteinen selbst umgesetzt.",
   "Betrifft viele Bausteine gleichermaßen und braucht einheitliche Regeln.",
   "Persistenz ist ein klassisches Querschnittsthema mit Wechselwirkungen zu Fehlerbehandlung und Nebenläufigkeit.",
   "Gemeinsames Fachmodell, aber keine Regel dafür, wie ein Aspekt in allen Bausteinen umzusetzen ist.",
   "Internationalisierung betrifft jeden Baustein mit Ausgaben und muss einheitlich gelöst werden."
  ],
  "explanation": "Ein Querschnittskonzept regelt, wie viele Bausteine einen Aspekt einheitlich umsetzen. Fachliche Funktionen, Daten und Regeln mit klarem Zuhause sind keine, auch wenn mehrere Bausteine sie nutzen oder anzeigen."
 },
 {
  "id": "c3q60",
  "chapter": 3,
  "lz": "LZ 03-05",
  "r": "R1",
  "type": "multi",
  "q": "Ob eine Technologie die Lastanforderungen erfüllt, ist unklar. Welche Aussagen zu Prototypen als Feedback-Instrument treffen zu?",
  "options": [
   "Ein Wegwerf-Prototyp sollte nach erfolgreichem Test schrittweise zum Produktivcode ausgebaut werden, um Doppelarbeit zu vermeiden.",
   "Der Prototyp belegt die Machbarkeit einer Entscheidung, ersetzt aber keine Bewertung der Gesamtarchitektur.",
   "Der Aufwand für einen Prototyp ist gerechtfertigt, wenn die Entscheidung schwer umkehrbar und die Unsicherheit hoch ist.",
   "Lastprototypen sind nur aussagekräftig, wenn sie mit vollständiger Produktivfunktionalität gebaut werden.",
   "Besteht der Prototyp den Lasttest, ist garantiert, dass die Technologie im Gesamtsystem die Qualitätsziele erfüllt.",
   "Ein Prototyp liefert belastbare Aussagen nur für die untersuchte Frage unter den gewählten Randbedingungen."
  ],
  "correct": [
   1,
   2,
   5
  ],
  "optExpl": [
   "Falsch: Ein Wegwerf-Prototyp ist auf schnelle Erkenntnis optimiert, nicht auf Wartbarkeit und Robustheit. Ihn zum Produktivcode auszubauen, schleppt bewusste Abkürzungen ins Produkt.",
   "Richtig: Der Prototyp zeigt, dass eine Entscheidung grundsätzlich trägt. Ob die Gesamtarchitektur alle Qualitätsziele erfüllt, bleibt davon unberührt und wird separat bewertet, etwa mit Szenarien.",
   "Richtig: Prototypen kosten Zeit. Sie lohnen sich dort, wo ein Irrtum teuer wäre und Wissen fehlt, also bei schwer umkehrbaren, unsicheren Entscheidungen.",
   "Falsch: Ein Lastprototyp soll gerade nur die kritische Frage isolieren. Mit vollständiger Funktionalität wäre er kein schnelles Feedback mehr, sondern bereits ein Teil der Umsetzung.",
   "Falsch: Der Prototyp prüft eine Einzelfrage unter vereinfachten Bedingungen. Zusammenspiel mit anderen Bausteinen, Betriebsumgebung und andere Qualitätsziele können weiterhin Probleme zeigen.",
   "Richtig: Die Aussagekraft ist an Fragestellung und Randbedingungen des Prototyps gebunden. Was nicht untersucht wurde, etwa realistische Datenmengen oder Netzwerkbedingungen, bleibt unbelegt."
  ],
  "explanation": "Prototypen liefern früh Fakten zu einer gezielten Frage, vor allem bei schwer umkehrbaren, unsicheren Entscheidungen. Ihre Aussage ist begrenzt und ersetzt keine Gesamtbewertung. Fallen: Wegwerf-Prototyp zum Produkt machen, Vollständigkeit verlangen oder Garantien ableiten."
 },
 {
  "id": "c3q61",
  "chapter": 3,
  "lz": "LZ 03-03",
  "r": "R3",
  "extra": true,
  "type": "single",
  "q": "Welche Aussage zur evolutionären Architektur trifft am ehesten zu?",
  "options": [
   "Fitness-Funktionen machen manuelle Architekturreviews und Stakeholder-Feedback entbehrlich.",
   "Die Qualitätsziele ergeben sich erst aus den Fitness-Funktionen, die das Team formuliert.",
   "Die Architektur wird zu Beginn vollständig festgelegt und danach über Fitness-Funktionen gegen Änderungen abgesichert.",
   "Die Architektur entwickelt sich schrittweise weiter; automatisierte Prüfungen (Fitness-Funktionen) sichern dabei wichtige Qualitäten bei Änderungen."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Fitness-Funktionen prüfen nur das automatisiert Messbare. Reviews und Feedback bleiben für nicht automatisierbare Aspekte nötig.",
   "Falsch: Die Reihenfolge ist umgekehrt: Aus den Qualitätszielen werden Fitness-Funktionen abgeleitet, die deren Einhaltung prüfen.",
   "Falsch: Evolutionäre Architektur wächst schrittweise; Fitness-Funktionen sichern Qualitäten während der Weiterentwicklung, nicht einen eingefrorenen Anfangsentwurf.",
   "Richtig: Schrittweise Entwicklung wird mit automatisierten, wiederholbaren Prüfungen kombiniert, die Abweichungen von Qualitätszielen früh sichtbar machen."
  ],
  "explanation": "Evolutionäre Architektur = schrittweise Weiterentwicklung + automatisierte Prüfungen (Fitness-Funktionen) für wichtige Qualitäten. Fallen: Fitness-Funktionen als Ersatz für Reviews oder als Quelle der Qualitätsziele, Ansatz mit Big-Design-Up-Front verwechseln."
 },
 {
  "id": "c3q62",
  "chapter": 3,
  "lz": "LZ 03-05",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zu Feedback und Risiko bei der Reihenfolge von Architekturentscheidungen treffen zu?",
  "options": [
   "Das Risiko einer Entscheidung bemisst sich allein an der Wahrscheinlichkeit, dass sie sich als falsch herausstellt.",
   "Entscheidungen mit hohem Risiko und geringer Umkehrbarkeit sollten früh durch Feedback abgesichert werden.",
   "Feedback von Stakeholdern betrifft Anforderungen, nicht Entscheidungen zur Lösungsstruktur.",
   "Eine Entscheidung mit großer Tragweite für viele andere Entscheidungen sollte vor lokalen Detailentscheidungen getroffen werden.",
   "Ein Durchstich kann Feedback zu mehreren Entscheidungen gleichzeitig liefern.",
   "Beginnt man mit den risikoärmsten Entscheidungen, sinkt das Gesamtrisiko, weil früh Fortschritt sichtbar wird."
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Falsch: Risiko ergibt sich aus Eintrittswahrscheinlichkeit und Schadensausmaß. Eine unwahrscheinliche, aber sehr teure Fehlentscheidung kann riskanter sein als eine wahrscheinliche, billig korrigierbare.",
   "Richtig: Hohes Schadensausmaß und schwere Korrigierbarkeit rechtfertigen frühes Feedback, etwa per Prototyp. Wird die Entscheidung früh bestätigt oder revidiert, bleibt Umsteuern billig.",
   "Falsch: Stakeholder können auch Lösungsansätze bewerten, etwa Auswirkungen auf Betrieb, Kosten oder Bedienbarkeit. Rückmeldung zu Entscheidungen ist gerade ein Ziel von Reviews und Demos.",
   "Richtig: Je mehr Folgeentscheidungen von einer Entscheidung abhängen, desto teurer ist ihre spätere Änderung. Solche Entscheidungen gehören früh geklärt, lokale Details lassen sich später anpassen.",
   "Richtig: Ein vertikaler Durchstich durch alle Schichten prüft das Zusammenspiel mehrerer Entscheidungen, etwa zu Technologie, Schnittstellen und Deployment, auf einmal.",
   "Falsch: Mit dem Einfachen zu beginnen erzeugt Fortschritt, schiebt aber die unsicheren Entscheidungen nach hinten. Dort sind Überraschungen am teuersten, weil schon viel darauf aufbaut."
  ],
  "explanation": "Entscheidungen werden nach Risiko (Wahrscheinlichkeit und Schaden), Tragweite und Umkehrbarkeit geordnet; frühes, gezieltes Feedback, etwa über Durchstiche, sichert die riskanten ab. Fallen: Risiko nur als Wahrscheinlichkeit sehen, Stakeholder-Feedback auf Anforderungen begrenzen, Einfaches zuerst."
 },
 {
  "id": "c3q63",
  "chapter": 3,
  "lz": "LZ 03-07",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zum Entwurf von Schnittstellen treffen zu?",
  "options": [
   "Die Schnittstelle sollte die interne Datenhaltung abbilden, weil sich Implementierungsänderungen dann leichter nachvollziehen lassen.",
   "Die Schnittstelle sollte aus Sicht ihrer Nutzer funktional vollständig sein, ohne Interna des Bausteins offenzulegen.",
   "Eine Schnittstelle ist ausreichend beschrieben, wenn Operationen, Parameter und Rückgabetypen spezifiziert sind.",
   "Falsche Verwendung sollte schon durch Namensgebung, Typen und Vorbedingungen erschwert werden.",
   "Wer Erweiterbarkeit anstrebt, nimmt vorsorglich Operationen für denkbare künftige Anwendungsfälle auf.",
   "Leichte Erweiterbarkeit bedeutet, dass Funktionen ergänzt werden können, ohne bestehende Nutzer anzupassen."
  ],
  "correct": [
   1,
   3,
   5
  ],
  "optExpl": [
   "Falsch: Das koppelt Nutzer an die Implementierung; jede Änderung der Datenhaltung schlägt auf die Schnittstelle durch. Eine Schnittstelle soll aus Nutzersicht geschnitten sein.",
   "Richtig: Nutzer sollen ihre Aufgabe mit der Schnittstelle erledigen können, ohne Interna zu kennen. Vollständigkeit bezieht sich auf die Nutzersicht, nicht auf die interne Struktur.",
   "Falsch: Signaturen beschreiben nur die Syntax. Semantik, Fehlerverhalten, Vorbedingungen und zugesicherte Qualitäten gehören ebenfalls zum Vertrag.",
   "Richtig: Schwer zu missbrauchen heißt, Fehlbedienung durch den Entwurf zu erschweren, etwa durch sprechende Namen, enge Typen und geprüfte Vorbedingungen.",
   "Falsch: Vorsorgliche Operationen vergrößern die Schnittstelle, erschweren das Erlernen und müssen später gepflegt werden. Erweiterbarkeit heißt, später ergänzen zu können, nicht alles vorab anzubieten.",
   "Richtig: Erweiterbar im Sinne der Schnittstelle meint abwärtskompatible Ergänzungen, sodass bestehende Nutzer unverändert weiterarbeiten."
  ],
  "explanation": "Gute Schnittstellen sind leicht erlernbar, schwer zu missbrauchen, aus Nutzersicht funktional vollständig und abwärtskompatibel erweiterbar. Fallen: Abbild der internen Struktur, Beschreibung nur der Signaturen und Operationen auf Vorrat."
 },
 {
  "id": "c3q64",
  "chapter": 3,
  "lz": "LZ 03-07",
  "r": "R3",
  "extra": true,
  "type": "single",
  "q": "Welche Aussage zur Granularität von Schnittstellen trifft zu?",
  "options": [
   "Feingranulare Schnittstellen senken die Kopplung, weil jede Operation nur wenig Wissen über die Implementierung voraussetzt.",
   "Feingranulare Schnittstellen eignen sich vor allem für entfernte, grobgranulare für lokale Aufrufe.",
   "Grobgranulare Schnittstellen sparen bei entfernten Aufrufen Roundtrips, können Nutzer aber mit nicht benötigten Daten belasten.",
   "Die passende Granularität hängt nicht von den Anwendungsfällen ab, solange die Schnittstelle funktional vollständig ist.",
   "Bei lokalen Aufrufen ist die Granularität aus Performancesicht ebenso kritisch wie bei entfernten."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Viele kleine Operationen erhöhen die Zahl der Abhängigkeiten und erzwingen oft Aufrufreihenfolgen (zeitliche Kopplung). Die Kopplung sinkt dadurch nicht.",
   "Falsch: Vertauscht: Entfernte Aufrufe sind teuer und sprechen für grobe Granularität; lokal sind feine Aufrufe meist unproblematisch.",
   "Richtig: Ein gröberer Aufruf bündelt mehrere Schritte und spart Netzwerklatenz. Der Preis sind größere Nachrichten und weniger Flexibilität für Nutzer, die nur einen Teil brauchen.",
   "Falsch: Vollständigkeit legt die Granularität nicht fest. Wie viele Aufrufe ein Anwendungsfall braucht und wie teuer sie sind, bestimmt, ob fein oder grob sinnvoll ist.",
   "Falsch: Lokale Aufrufe kosten nur Nanosekunden bis Mikrosekunden; entfernte enthalten Netzwerklatenz, Serialisierung und mögliche Ausfälle. Lokal und entfernt verhalten sich nicht gleich."
  ],
  "explanation": "Granularität ist ein Zielkonflikt: fein = flexibel, aber viele (bei entfernten Aufrufen teure) Aufrufe; grob = weniger Roundtrips, aber größere Nachrichten und weniger Flexibilität. Falle: Lokale und entfernte Aufrufe sind nicht gleichzusetzen."
 },
 {
  "id": "c3q65",
  "chapter": 3,
  "lz": "LZ 03-07",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zur Weiterentwicklung einer öffentlichen Schnittstelle mit unbekannt vielen Nutzern treffen zu?",
  "options": [
   "Inkompatible Änderungen lassen sich über eine angekündigte Übergangszeit mit parallel verfügbarer alter Version planbar machen.",
   "Das Robustheitsprinzip verlangt, auch beim Senden tolerant zu sein, damit Empfänger möglichst alles verarbeiten können.",
   "Ohne Versionierung sind Änderungen vertretbar, wenn sie im Änderungsprotokoll veröffentlicht werden.",
   "Externe Schnittstellen brauchen mehr Stabilität als interne, weil Nutzer nicht koordiniert angepasst werden können.",
   "Eine Schnittstelle gilt als stabil, wenn ihre Signaturen gleich bleiben, auch wenn sich das Verhalten ändert.",
   "Tolerantes Empfangen erleichtert die Weiterentwicklung, kann aber Fehler verdecken und Verträge aufweichen."
  ],
  "correct": [
   0,
   3,
   5
  ],
  "optExpl": [
   "Richtig: Eine Deprecation-Phase mit paralleler Version macht Inkompatibilitäten planbar, weil Nutzer in ihrem eigenen Takt umstellen können.",
   "Falsch: Vertauscht: Das Prinzip lautet, beim Senden streng und beim Empfangen tolerant zu sein. Tolerantes Senden würde Empfängern uneindeutige Daten zumuten.",
   "Falsch: Ein Änderungsprotokoll zwingt unbekannte Nutzer nicht, es zu lesen. Ohne Versionierung brechen inkompatible Änderungen deren Systeme unvorhersehbar.",
   "Richtig: Bei externen Nutzern fehlt die Möglichkeit, Anpassungen abzustimmen und gleichzeitig auszurollen. Deshalb sind Stabilität, formelle Beschreibung und Versionierung dort wichtiger als intern.",
   "Falsch: Verhalten und Zusicherungen sind Teil des Vertrags. Ändert sich das Verhalten, ist die Schnittstelle für Nutzer nicht stabil, auch wenn der Compiler nichts bemerkt.",
   "Richtig: Tolerante Empfänger überstehen neue Felder oder Werte. Der Preis: Fehler und Abweichungen werden nicht erkannt, und die Schnittstelle wird faktisch ungenauer."
  ],
  "explanation": "Externe Schnittstellen verlangen höhere Stabilität, formelle Beschreibung und Versionierung; Übergangsfristen machen Brüche planbar. Tolerantes Empfangen hilft, hat aber Nebenwirkungen. Fallen: Stabilität ist mehr als gleiche Signaturen, und streng gesendet wird, tolerant empfangen."
 },
 {
  "id": "c3q66",
  "chapter": 3,
  "lz": "LZ 03-01",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zu architektonischen Maßnahmen für hohe Verfügbarkeit treffen zu?",
  "options": [
   "Mehrere Instanzen der Anwendung genügen, sobald der vorgeschaltete Lastverteiler selbst redundant ausgelegt ist.",
   "Redundanz verbessert die Verfügbarkeit, erhöht aber Betriebskosten und Komplexität, etwa durch die Synchronisation von Daten.",
   "Regelmäßige Sicherungen der Datenbank beseitigen deren Rolle als Single Point of Failure.",
   "Ein automatisches Failover wirkt nur, wenn Ausfälle zuverlässig erkannt werden und die übernehmende Instanz Zugriff auf den benötigten Zustand bzw. die Daten hat.",
   "Die Aufteilung in mehrere verteilte Dienste verbessert die Verfügbarkeit, weil die Ausfallwahrscheinlichkeit des Gesamtsystems dadurch sinkt."
  ],
  "correct": [
   1,
   3
  ],
  "optExpl": [
   "Falsch: Eine gemeinsam genutzte Datenbank bleibt dann weiterhin ein Single Point of Failure. Für die Verfügbarkeit des Gesamtsystems müssen alle gemeinsam genutzten Komponenten betrachtet werden.",
   "Richtig: Jede Taktik hat ihren Preis. Der Nutzen höherer Verfügbarkeit muss gegen Infrastrukturkosten, Betriebsaufwand und Architekturkomplexität abgewogen werden.",
   "Falsch: Backups ermöglichen die Wiederherstellung nach einem Ausfall, halten das System während des Ausfalls aber nicht verfügbar. Dafür braucht es Redundanz und Failover.",
   "Richtig: Failover ist keine isolierte Maßnahme: Ohne Fehlererkennung und verfügbare Daten bzw. Sitzungszustände nützt die zweite Instanz wenig.",
   "Falsch: Hängt eine Funktion von mehreren Diensten in Reihe ab, sinkt die Gesamtverfügbarkeit eher. Ausfallisolation muss gezielt entworfen werden (z. B. Timeouts, Circuit Breaker)."
  ],
  "explanation": "Verfügbarkeit entsteht durch gezielte Taktiken (Redundanz, Failover), die etwas kosten. Typische Fallen: nur die Anwendungsschicht redundant auslegen (die Datenbank bleibt Single Point of Failure), Backup mit Redundanz verwechseln und einem Architekturstil pauschal Ausfallsicherheit zuschreiben."
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
   "ADRs beschreiben Entscheidungen für Teilsysteme, arc42 nur systemweite Entscheidungen.",
   "arc42 bettet sie in die Gesamtdoku ein, ADRs sind Einzeldokumente.",
   "arc42 erfasst offene, ADRs nur getroffene Entscheidungen.",
   "ADRs halten Alternativen und Begründungen fest, arc42 nicht."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Falsch: arc42 (Abschnitt 9) kann Entscheidungen jeder Tragweite aufnehmen. Der Unterschied liegt in der Form: eingebettet in die Gesamtdoku versus Einzeldokument.",
   "Richtig: arc42 ordnet Entscheidungen in einem Abschnitt der Gesamtdokumentation ein. Ein ADR ist dagegen ein eigenständiges, kurzes Dokument je Entscheidung mit Status, Kontext und Konsequenzen – beides lässt sich kombinieren.",
   "Falsch: Beide halten vor allem getroffene Entscheidungen fest. Ein ADR kann zudem den Status „vorgeschlagen“ haben, erfasst also gerade auch noch offene Entscheidungen – die Zuordnung ist hier verdreht.",
   "Falsch: Auch arc42 sieht Begründungen und betrachtete Alternativen für Entscheidungen vor. ADRs sind nur eine andere, stärker formalisierte Form, dieselben Informationen festzuhalten."
  ],
  "explanation": "arc42 bettet Entscheidungen in die Gesamtdokumentation ein, ADRs sind eigenständige Einzeldokumente mit Status; beides lässt sich kombinieren. Fallen: Begründungen und Alternativen gibt es in beiden, ADRs sind nicht an arc42 gebunden, und arc42 ist nicht auf systemweite Entscheidungen beschränkt."
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
   "Eine Zuordnung der Verantwortlichen für die Umsetzung (RACI)."
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
   "Falsch: Nach Nygard bestehen ADRs aus Titel, Status, Kontext, Entscheidung und Konsequenzen. Eine Verantwortlichkeitsmatrix gehört nicht dazu."
  ],
  "explanation": "Ein ADR nach Nygard enthält Titel, Status, Kontext, Entscheidung und Konsequenzen. Fallen: Aufwandsschätzung und Verantwortlichkeitsmatrix gehören nicht hinein, und statt ein ADR mit Betriebserfahrungen fortzuschreiben, löst man es durch ein neues ab."
 },
 {
  "id": "c4q35",
  "chapter": 4,
  "lz": "LZ 04-06",
  "r": "R2",
  "type": "single",
  "q": "Ihr Team bietet Partnerfirmen eine REST-API an und hat zusätzlich interne Schnittstellen zwischen Bausteinen. Was gilt für deren Dokumentation am ehesten?",
  "options": [
   "Interne und externe Schnittstellen werden gleich formell und versioniert dokumentiert.",
   "Externe Schnittstellen werden erst nach der Implementierung aus dem Code dokumentiert.",
   "Eine OpenAPI-Spezifikation deckt Syntax und Semantik ab.",
   "Externe werden meist früher, formeller und versioniert dokumentiert."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Der Aufwand richtet sich nach Nutzerkreis und Änderungskosten. Bei internen Schnittstellen sind Abstimmung im Team und eine schlankere Beschreibung meist ausreichend; Formalität und Versionierung lohnen sich vor allem bei externen.",
   "Falsch: Partner bauen auf die Schnittstelle auf, bevor die Implementierung steht, und können nicht in den Code schauen. Externe Schnittstellen werden deshalb meist früher als Vertrag festgelegt, nicht nachträglich aus dem Code abgeleitet.",
   "Falsch: OpenAPI beschreibt vor allem die Syntax: Endpunkte, Parameter, Datentypen. Bedeutung, Vor- und Nachbedingungen, Fehlerverhalten und Qualitätszusicherungen müssen zusätzlich festgehalten werden.",
   "Richtig: Externe Schnittstellen sind Verträge mit Dritten und nach Veröffentlichung schwer zu ändern. Sie werden daher meist früher, formeller und versioniert dokumentiert, damit Partner verlässlich darauf aufbauen können."
  ],
  "explanation": "Externe Schnittstellen sind Verträge mit Dritten und werden früher, formeller und versioniert dokumentiert; interne brauchen eine angemessene, schlankere Beschreibung. Fallen: gleiche Formalität für alle Schnittstellen, nachträgliche Dokumentation aus dem Code und die Annahme, OpenAPI decke auch die Semantik ab."
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
   "Als Teil der Verteilungssicht beschreiben, da Fehler und Logs auf den Knoten entstehen."
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
   "Falsch: Die Verteilungssicht zeigt Knoten und Infrastruktur. Ein Konzept für Fehlerbehandlung und Logging gilt bausteinübergreifend und gehört zu den querschnittlichen Konzepten."
  ],
  "explanation": "Querschnittskonzepte wie Fehlerbehandlung werden zentral (z. B. arc42 Abschnitt 8) mit Anlass, Regeln, Begründung und Beispiel dokumentiert und zusätzlich über Beispielcode vermittelt. Fallen: pro Baustein separat beschreiben, erst nachträglich dokumentieren oder das Konzept der Verteilungssicht zuordnen."
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
   "Häufige Fehler im Modul, die sich unmittelbar aus dem Kopplungswert ablesen lassen.",
   "Viele Abhängigkeiten; Änderungen pflanzen sich leicht fort.",
   "Viele Verzweigungen im Kontrollfluss des Moduls."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Starker fachlicher Zusammenhalt innerhalb des Moduls ist hohe Kohäsion – eine Eigenschaft im Inneren des Moduls, die sogar erwünscht ist. Hohe Kopplung beschreibt dagegen die Beziehungen nach außen.",
   "Falsch: Kopplung zeigt Abhängigkeiten zu anderen Modulen, nicht die Zahl der Fehler. Hohe Kopplung erhöht das Risiko, dass sich Änderungen und Fehler fortpflanzen; die Fehlerhäufung selbst ist eine eigene Information, etwa aus dem Ticketsystem.",
   "Richtig: Kopplung misst die Abhängigkeiten zu anderen Modulen, etwa über afferente und efferente Beziehungen. Viele davon erschweren isoliertes Ändern, Testen und Austauschen, weil sich Änderungen leicht fortpflanzen.",
   "Falsch: Die Zahl der Verzweigungen im Kontrollfluss misst die zyklomatische Komplexität. Sie beschreibt die innere Komplexität eines Moduls und sagt nichts über seine Abhängigkeiten zu anderen Modulen aus."
  ],
  "explanation": "Hohe Kopplung bedeutet viele Abhängigkeiten zu anderen Modulen, sodass sich Änderungen leicht fortpflanzen. Fallen: Kohäsion (Zusammenhalt im Modul) und zyklomatische Komplexität (Verzweigungen im Kontrollfluss) sind eigene Metriken, und die Fehlerzahl liest man nicht aus der Kopplung ab."
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
   "Statisch und werkzeuggestützt: Ein Analysewerkzeug prüft das Modell automatisch auf Regelverstöße.",
   "Qualitativ; auch ohne Implementierung am Entwurf möglich."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Falsch: Metriken wie Kopplung oder Komplexität können in ein Review einfließen, das Urteil entsteht aber durch Experteneinschätzung. Ein Walkthrough bleibt daher ein qualitatives Verfahren.",
   "Falsch: Beim Walkthrough führt der Autor selbst durch den Entwurf und erläutert ihn. Er ist weniger formal als eine Inspektion, die feste Rollen, Checklisten und einen unabhängigen Moderator vorsieht.",
   "Falsch: Ein Walkthrough ist ein manuelles Verfahren, bei dem Menschen den Entwurf gemeinsam durchgehen. Werkzeuggestützte statische Analysen prüfen dagegen Code oder Modelle automatisch auf Regeln.",
   "Richtig: Fachleute gehen Entwurf und Modelle gemeinsam durch und beurteilen sie anhand der Qualitätsziele. Das ist qualitativ und schon vor der Implementierung möglich, wenn Korrekturen noch günstig sind."
  ],
  "explanation": "Ein Walkthrough ist eine qualitative, expertengestützte Durchsicht, bei der der Autor durch den Entwurf führt; er ist schon vor der Implementierung möglich. Fallen: Einfließende Metriken machen ihn nicht quantitativ, er ist weniger formal als eine moderierte Inspektion und er ist keine automatische Werkzeugprüfung."
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
   "Metriken zeigen, wo ein Problem liegt, und erklären zugleich dessen Ursache."
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
   "Falsch: Metriken liefern Hinweise auf auffällige Stellen, etwa hohe Kopplung oder Komplexität. Warum der Wert so ist und ob es ein Problem ist, klären erst Interpretation und weitere Analyse."
  ],
  "explanation": "Metriken brauchen Kontext und Interpretation, bilden Qualitäten nur teilweise ab und verlieren als Zielvorgabe ihre Aussagekraft (Goodhart’s Law). Fallen: Systemübergreifende Vergleiche sind heikel, und Metriken zeigen Auffälligkeiten, erklären aber nicht deren Ursache."
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
   "Ohne Qualitätsziele kann keine Konformitätsprüfung des Codes stattfinden.",
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
   "Falsch: Die Konformitätsprüfung vergleicht den Code mit Entwurf und Architekturentscheidungen, nicht mit den Qualitätszielen. Sie ist auch ohne priorisierte Ziele möglich; das Problem fehlender Ziele liegt im fehlenden Bewertungsmaßstab.",
   "Richtig: Die Zeit für eine Bewertung ist begrenzt. Die Priorisierung lenkt sie auf die wichtigsten und riskantesten Qualitätsziele; ohne sie wird alles gleich behandelt, und Wesentliches geht im Detail unter."
  ],
  "explanation": "Priorisierte Qualitätsziele sind Maßstab und Fokus jeder Architekturbewertung. Fallen: Sie müssen nicht als Metriken vorliegen, funktionale Anforderungen ersetzen sie nicht als Maßstab, und die Konformitätsprüfung des Codes hängt nicht von ihnen ab."
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
   "Mit einer Metrikauswertung der Komplexität lässt sich Erosion zuverlässig nachweisen.",
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
   "Falsch: Komplexitätsmetriken zeigen die innere Struktur einzelner Bausteine, nicht die Abweichung von der Soll-Architektur. Erosion macht man über Konformitätsprüfungen sichtbar, etwa Abhängigkeitsanalysen oder Reviews.",
   "Richtig: Die Qualitätseigenschaften wurden für die Soll-Struktur entworfen, etwa Austauschbarkeit durch klare Schichten. Weicht der Code davon ab, gilt diese Planung nicht mehr sicher, und Qualitätsziele können unbemerkt verfehlt werden.",
   "Falsch: Tests prüfen Verhalten, nicht die Einhaltung der Struktur. Eine erodierte Architektur kann alle Tests bestehen und trotzdem Qualitäten wie Änderbarkeit oder Austauschbarkeit untergraben.",
   "Richtig: Das schleichende Auseinanderlaufen von Soll- und Ist-Architektur heißt Architekturerosion. Ohne bewusstes Gegensteuern, etwa durch Refactoring, nimmt sie mit der Zeit zu.",
   "Falsch: Damit verschwindet nur die sichtbare Abweichung, nicht das eigentliche Problem. Ob die Ist-Struktur die Qualitätsziele noch trägt, ist damit nicht geklärt – man legitimiert die Erosion lediglich nachträglich.",
   "Richtig: Toolgestützte Abhängigkeitsanalysen zeigen, wo der Code verbotene Abhängigkeiten enthält, etwa Aufrufe an der Schichtung vorbei. Laut Curriculum sind sie ein Mittel der Konformitätsprüfung.",
   "Richtig: Konformität mit Architekturentscheidungen zu bewerten ist ein eigenes Lernziel. Regelmäßige Prüfungen, manuell im Review oder toolgestützt, machen Erosion früh sichtbar."
  ],
  "explanation": "Die zunehmende Soll-Ist-Abweichung ist Architekturerosion; sie gefährdet die geplanten Qualitäten und wird per Konformitätsprüfung, etwa Abhängigkeitsanalyse, sichtbar. Fallen: Doku-Anpassung beseitigt sie nicht, Komplexitätsmetriken weisen sie nicht nach, und bestehende Tests sagen nichts über die Struktur."
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
  "q": "Ordnen Sie jede Anforderung eines Buchungssystems zu: funktionale Anforderung oder Qualitätsanforderung?",
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
  "q": "Richtig oder falsch? Aussagen zu den Pflichtmustern Schichten, Pipes & Filter und Microservices.",
  "categories": [
   "Richtig",
   "Falsch"
  ],
  "rows": [
   {
    "text": "Microservices erhöhen gegenüber einem Monolithen typischerweise den Aufwand für Betrieb und Monitoring.",
    "cat": 0
   },
   {
    "text": "In Pipes und Filter ruft jeder Filter seinen Nachfolger direkt auf.",
    "cat": 1
   },
   {
    "text": "Weil Microservices unabhängig deploybar sind, dürfen Schnittstellenverträge ohne Abstimmung geändert werden.",
    "cat": 1
   },
   {
    "text": "Die strikte Schichtung erlaubt auch Aufrufe auf höhere Schichten, die gelockerte nur auf tiefere.",
    "cat": 1
   },
   {
    "text": "In gelockerter Schichtung dürfen Schichten auch nicht direkt benachbarte tiefere Schichten nutzen, nicht aber höhere.",
    "cat": 0
   },
   {
    "text": "Ein modularer Monolith kann klare interne Bausteingrenzen haben und trotzdem als ein Deployment-Artefakt laufen.",
    "cat": 0
   }
  ],
  "rowExpl": [
   "Viele Deployment-Einheiten erfordern Automatisierung, Tracing und verteiltes Logging.",
   "Filter kennen ihre Nachbarn nicht; die Verbindung läuft über Pipes bzw. den Datenstrom.",
   "Unabhängiges Deployment setzt kompatible Verträge voraus; inkompatible Änderungen erzwingen koordinierte Anpassung der Konsumenten.",
   "Aufrufe nach oben sind in beiden Varianten nicht vorgesehen. Der Unterschied liegt im Überspringen tieferer Schichten.",
   "Genau das unterscheidet die gelockerte von der strikten Variante.",
   "Modularität betrifft die interne Struktur, Deployment die Auslieferung. Beides ist unabhängig voneinander wählbar."
  ],
  "explanation": "Typische Fallen: gelockerte Schichtung erlaubt nur das Überspringen nach unten, Filter kennen ihre Nachbarn nicht, und unabhängiges Deployment macht Vertragsabstimmung nicht überflüssig."
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
    "text": "Wie Berechtigungen geprüft werden, wenn mehrere Bausteine geschützte Daten anbieten.",
    "cat": 0
   },
   {
    "text": "Wie die Rabattregeln für Neukunden berechnet werden.",
    "cat": 1
   },
   {
    "text": "Wie Konfigurationswerte je Umgebung bereitgestellt werden.",
    "cat": 0
   },
   {
    "text": "Welche Felder die Kundenmaske für die Adresserfassung enthält.",
    "cat": 1
   },
   {
    "text": "Wie Fehler einheitlich erfasst, protokolliert und gemeldet werden.",
    "cat": 0
   }
  ],
  "rowExpl": [
   "Berechtigungsprüfung stellt sich in jedem Baustein mit geschützten Daten. Das ist ein Querschnittsthema.",
   "Das ist eine fachliche Regel, die in einem Baustein umgesetzt wird. Sie betrifft nicht viele Bausteine und ist daher kein Querschnittsthema.",
   "Fast jeder Baustein liest Konfigurationswerte. Das ist ein Querschnittsthema.",
   "Das betrifft eine einzelne Oberfläche und kein übergreifendes Problem. Das ist kein Querschnittsthema.",
   "Fehler treten in allen Bausteinen auf und sollen einheitlich behandelt werden. Das ist ein Querschnittsthema."
  ],
  "explanation": "Ein Querschnittsthema betrifft viele Bausteine gleichzeitig und braucht eine übergreifende Regelung. Fachregeln oder Details einzelner Oberflächen liegen dagegen in einem Baustein."
 },
 {
  "id": "k23",
  "chapter": 3,
  "lz": "LZ 03-02",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Beurteilen Sie das Vorgehen beim Architekturentwurf. Wie sinnvoll ist es?",
  "categories": [
   "Sinnvoll",
   "Nicht sinnvoll"
  ],
  "rows": [
   {
    "text": "Bausteine mit neuer, kaum erprobter Technologie früher und tiefer verfeinern als einfache Bausteine.",
    "cat": 0
   },
   {
    "text": "Den Baustein-Zuschnitt an der bestehenden Teamstruktur ausrichten und Qualitätsanforderungen nur nachrangig berücksichtigen.",
    "cat": 1
   },
   {
    "text": "Die Verfeinerung eines Bausteins beenden, sobald Teams ihn anhand seiner Blackbox-Beschreibung umsetzen können.",
    "cat": 0
   },
   {
    "text": "Für alle Bausteine zunächst die Whitebox bis zur untersten Ebene ausarbeiten, bevor Risiken bewertet werden.",
    "cat": 1
   },
   {
    "text": "Aus der gewählten Schichtung Paketstruktur und Aufrufregeln für den Quellcode ableiten.",
    "cat": 0
   },
   {
    "text": "Die Datenbank- und Frameworkwahl festlegen, bevor die priorisierten Qualitätsziele geklärt sind.",
    "cat": 1
   }
  ],
  "rowExpl": [
   "Sinnvoll: Die Verfeinerungstiefe richtet sich nach Risiko und Komplexität. Unsichere Teile will man früh verstehen. Gleichmäßige Tiefe wäre dagegen nicht sinnvoll.",
   "Nicht sinnvoll: Die Zerlegung wird mit Qualitätsanforderungen und Fachlichkeit begründet. Teamstrukturen sind ein Faktor, aber kein Ersatz für die Begründung.",
   "Sinnvoll: Abbruchkriterium ist die Umsetzbarkeit. Weiteres Verfeinern erzeugt Aufwand ohne Nutzen.",
   "Nicht sinnvoll: Das verursacht Aufwand an unkritischen Stellen und verschiebt die Risikobewertung. Risiken werden früh bewertet, die Verfeinerung gezielt gesteuert.",
   "Sinnvoll: Architekturentscheidungen haben Konsequenzen für den Code, die man ableiten und prüfbar machen sollte.",
   "Nicht sinnvoll: Technologieentscheidungen sollen den Qualitätszielen dienen. Wer sie vorher festlegt, riskiert Entscheidungen ohne Begründung."
  ],
  "explanation": "Sinnvoll sind risikoorientierte Verfeinerung, Abbruch bei Umsetzbarkeit und das Ableiten von Code-Konsequenzen. Nicht sinnvoll: gleichmäßig tiefes Ausarbeiten, Zerlegung nach Teamstruktur statt Anforderungen und Technologiewahl vor den Qualitätszielen."
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
  "q": "Ist die Änderung an einer veröffentlichten Schnittstelle für bestehende Nutzer in der Regel abwärtskompatibel?",
  "categories": [
   "Abwärtskompatibel",
   "Nicht abwärtskompatibel"
  ],
  "rows": [
   {
    "text": "Ein neues optionales Feld in einer Antwort ergänzen.",
    "cat": 0
   },
   {
    "text": "Den Wertebereich eines Eingabeparameters einschränken.",
    "cat": 1
   },
   {
    "text": "Den Wertebereich eines Eingabeparameters erweitern.",
    "cat": 0
   },
   {
    "text": "Ein bestehendes Antwortfeld bei gleicher Bedeutung umbenennen.",
    "cat": 1
   },
   {
    "text": "Einen neuen Parameter ohne Standardwert zur Pflicht machen.",
    "cat": 1
   },
   {
    "text": "Eine zusätzliche Operation anbieten.",
    "cat": 0
   }
  ],
  "rowExpl": [
   "Bestehende Nutzer ignorieren das unbekannte Feld (toleranter Empfang) und arbeiten unverändert weiter. Inkompatibel wäre erst das Entfernen oder Umdeuten vorhandener Felder.",
   "Bisher gültige Aufrufe können nun abgelehnt werden. Wer Eingaben aus dem früheren Bereich sendet, wird abgewiesen; deshalb ist das Einschränken inkompatibel.",
   "Alle bisher gültigen Eingaben bleiben gültig; es kommen nur weitere hinzu. Bestehende Nutzer merken nichts, deshalb kompatibel.",
   "Nutzer lesen das Feld unter dem alten Namen; die Bedeutung bleibt gleich, aber der Name gehört zur Syntax des Vertrags. Das Umbenennen bricht bestehende Nutzer.",
   "Bestehende Aufrufe enthalten den neuen Parameter nicht und schlagen daher fehl. Mit Standardwert wäre die Änderung kompatibel, ohne nicht.",
   "Bestehende Nutzer rufen die neue Operation nicht auf und bleiben unberührt. Das Erweitern einer Schnittstelle um Neues ist typischerweise kompatibel."
  ],
  "explanation": "Kompatibel sind Änderungen, die bisher gültige Aufrufe und gelesene Daten unverändert lassen (Ergänzen, Erweitern). Inkompatibel sind Einschränken, Umbenennen, Entfernen und neue Pflichtangaben. Falle: Gleiche Bedeutung genügt nicht – auch Namen und Eingabebereiche gehören zum Vertrag."
 },
 {
  "id": "c3q67",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R1",
  "type": "multi",
  "q": "Zwischen Rechnungs- und Kundenmodul besteht sehr enge Kopplung. Welche Aussagen treffen zu?",
  "options": [
   "Enge Kopplung zwischen Modulen bedeutet, dass die Kohäsion innerhalb der Module niedrig ist.",
   "Eine Änderung in einem der Module kann Anpassungen im anderen nach sich ziehen.",
   "Zwei Teams können die Module trotzdem ohne Abstimmung parallel weiterentwickeln, solange die Schnittstelle dokumentiert ist.",
   "Enge Kopplung kann gerechtfertigt sein, wenn beide Module fachlich eng zusammengehören und meist gemeinsam geändert werden.",
   "Enge Kopplung führt zu schlechterer Laufzeitperformance."
  ],
  "correct": [
   1,
   3
  ],
  "optExpl": [
   "Falsch: Kopplung und Kohäsion sind unabhängige Kriterien. Zwei in sich stimmige Module können trotzdem eng gekoppelt sein.",
   "Richtig: Jede Abhängigkeit ist ein Weg, über den sich Änderungen ausbreiten. Ändert sich etwa die Kundenstruktur, kann auch das Rechnungsmodul betroffen sein.",
   "Falsch: Dokumentation nimmt die Abhängigkeit nicht weg. Ändert sich das eine Modul, ist das andere betroffen, deshalb bleibt Abstimmung zwischen den Teams nötig.",
   "Richtig: Gehören die Module fachlich eng zusammen und werden meist gemeinsam geändert, ist enge Kopplung unproblematischer. Eventuell ist dann sogar ein gemeinsamer Baustein der bessere Schnitt.",
   "Falsch: Kopplung ist vor allem ein Wartbarkeitsthema. Eng gekoppelte lokale Aufrufe können sogar schneller sein als lose gekoppelte Aufrufe über ein Netzwerk."
  ],
  "explanation": "Enge Kopplung breitet Änderungen über Modulgrenzen aus und erfordert Abstimmung; sie ist aber nicht per se falsch, wenn Module fachlich zusammengehören. Fallen: Kopplung mit Kohäsion gleichsetzen, Dokumentation als Entkopplung sehen, Kopplung mit Performance verwechseln."
 },
 {
  "id": "c3q68",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R1",
  "type": "multi",
  "q": "Welche Folgen sind zu erwarten, wenn ein Baustein seine Implementierungsdetails offenlegt?",
  "options": [
   "Die Kopplung bleibt unverändert, solange Nutzer die Details nur lesen und nicht verändern.",
   "Nutzer können sich auf Details verlassen, die nie zugesichert wurden.",
   "Der Baustein lässt sich leichter ersetzen, weil Nutzer seine Interna kennen.",
   "Tests gegen Interna werden einfacher, brechen aber bei jeder internen Änderung.",
   "Die Schnittstelle des Bausteins wird breiter und damit schwerer stabil zu halten."
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Falsch: Schon lesender Zugriff erzeugt eine Abhängigkeit von Details. Ändert sich die Struktur, brechen die lesenden Nutzer ebenso.",
   "Richtig: Nutzer verwenden, was sichtbar ist, auch ohne Zusicherung. Spätere interne Änderungen brechen dann scheinbar unbeteiligte Nutzer.",
   "Falsch: Gerade weil Nutzer von den Interna abhängen, muss ein Ersatz diese Details nachbilden. Der Austausch wird dadurch schwerer.",
   "Richtig: Direkter Zugriff auf Interna erleichtert das Prüfen, bindet die Tests aber an die Implementierung. Sie werden bei Refactorings zerbrechlich.",
   "Richtig: Alles, was offengelegt ist, wird faktisch Teil der Schnittstelle. Je mehr dazugehört, desto weniger kann der Baustein ohne Folgen für Nutzer geändert werden."
  ],
  "explanation": "Ohne Information Hiding wird jede Implementierungseinzelheit faktisch zur Schnittstelle: Nutzer binden sich daran, Änderungen und Austausch werden teurer, Tests werden zerbrechlicher. Fallen: lesenden Zugriff als unkritisch sehen und Offenheit als Erleichterung für den Austausch."
 },
 {
  "id": "c3q69",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R1",
  "type": "multi",
  "q": "Ein Baustein „Utils“ bündelt Datumsformatierung, PDF-Export und Rabattlogik. Welche Aussagen dazu treffen zu?",
  "options": [
   "Er hat mehrere voneinander unabhängige Änderungsgründe.",
   "Kohäsion misst die Abhängigkeiten zwischen Bausteinen, daher ist hier die Kopplung das eigentliche Problem.",
   "Nutzer koppeln sich auch an Funktionen, die sie nicht brauchen.",
   "Seine breite Verwendbarkeit gleicht die geringe Kohäsion aus.",
   "Geringe Kohäsion bedeutet, dass der Baustein viele Abhängigkeiten zu anderen Bausteinen hat.",
   "Eine Aufteilung erhöht die Kohäsion der Teile, kann aber die Zahl der Bausteine und Schnittstellen erhöhen."
  ],
  "correct": [
   0,
   2,
   5
  ],
  "optExpl": [
   "Richtig: Fachliche Rabattregeln, Dokumentformat und Datumsdarstellung ändern sich aus verschiedenen Anlässen. Ein Baustein, der sich aus mehreren Gründen ändert, hat geringe Kohäsion.",
   "Falsch: Kohäsion misst den Zusammenhalt innerhalb eines Bausteins; Abhängigkeiten zwischen Bausteinen betreffen die Kopplung. Hier ist die Kohäsion gering.",
   "Richtig: Wer nur die Datumsformatierung braucht, hängt vom ganzen Baustein ab und ist von Änderungen an PDF-Export und Rabattlogik betroffen.",
   "Falsch: Breite Verwendung erhöht eher den Schaden: Jede Änderung wirkt auf viele Nutzer. Kohäsion lässt sich nicht durch Wiederverwendung kompensieren.",
   "Falsch: Das verwechselt Kohäsion mit Kopplung. Ein Baustein kann gering kohäsiv sein und trotzdem wenige Abhängigkeiten haben.",
   "Richtig: Kleinere, fokussierte Bausteine sind kohäsiver. Dem stehen mehr Bausteine und Schnittstellen gegenüber, die gepflegt werden müssen."
  ],
  "explanation": "Geringe Kohäsion heißt: Ein Baustein bündelt Unzusammengehöriges und ändert sich aus mehreren Gründen; seine Nutzer koppeln sich an Unnötiges. Fallen: Kohäsion mit Kopplung vertauschen und Wiederverwendbarkeit als Ausgleich sehen."
 },
 {
  "id": "c3q70",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R1",
  "type": "multi",
  "q": "SQL-Abfragen stehen direkt im UI-Code. Welche Aussagen dazu treffen zu?",
  "options": [
   "Der Verstoß betrifft die Kohäsion des UI-Bausteins, nicht seine Kopplung.",
   "Ein Wechsel des Datenbankschemas erzwingt Änderungen am UI-Baustein.",
   "Die Logik ist ohne Datenbank kaum testbar.",
   "Das Problem tritt erst auf, wenn mehrere Oberflächen dieselben Abfragen verwenden.",
   "Ein eigener Persistenzbaustein kann Laufzeitkosten verursachen, was gegen die Änderbarkeit abzuwägen ist."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Falsch: Der UI-Baustein bündelt Unzusammengehöriges (geringe Kohäsion) und hängt zusätzlich direkt an Datenbankschema und -technik (enge Kopplung). Beides ist betroffen.",
   "Richtig: Ohne Trennung der Belange hängt die Oberfläche am Schema. Änderungen an der Persistenz wirken direkt auf den UI-Code.",
   "Richtig: Wer UI-Logik prüfen will, braucht dann die Datenbank mit. Getrennte Bausteine erlaubten Tests mit Testdoubles.",
   "Falsch: Die Kopplung an die Datenbank besteht schon bei einer einzigen Oberfläche. Mehrere Oberflächen verschärfen sie nur durch zusätzliche Duplikation.",
   "Richtig: Zusätzliche Indirektion kann Performance kosten. Das ist ein echter Zielkonflikt, der aber meist kein Grund ist, SQL in die Oberfläche zu legen."
  ],
  "explanation": "Fehlende Trennung der Belange koppelt Oberfläche an Datenbank und erschwert Tests; eine Trennung kostet etwas Laufzeit und Aufwand, was abzuwägen ist. Fallen: nur Kohäsion oder nur Kopplung zu sehen und das Problem erst bei Mehrfachverwendung zu vermuten."
 },
 {
  "id": "c3q71",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R3",
  "extra": true,
  "type": "multi",
  "q": "Welche Aussagen zu den Folgen duplizierter Entscheidungen oder Logik (Verletzung von DRY) treffen zu?",
  "options": [
   "Es entsteht logische Kopplung: Die Kopien müssen gemeinsam geändert werden, obwohl kein Baustein vom anderen abhängt.",
   "Das Problem betrifft duplizierte Logik, nicht aber duplizierte Konstanten oder Konfigurationswerte.",
   "Ähnlicher Code, der fachlich Unterschiedliches abbildet, darf getrennt bleiben, wenn beide sich unabhängig ändern sollen.",
   "Statische Abhängigkeitsanalysen zeigen die Kopplung zwischen den Kopien zuverlässig an.",
   "Das Risiko inkonsistenter Änderungen wächst mit der Zahl der Kopien."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Die Abhängigkeit steckt in der gemeinsamen Entscheidung, nicht in einem Aufruf. Sie ist im Code nicht als Abhängigkeit sichtbar und wird leicht übersehen.",
   "Falsch: DRY gilt für jede Form von Wissen. Ein mehrfach festgehaltener Grenzwert kann ebenso auseinanderlaufen wie kopierte Logik.",
   "Richtig: Zufällige Ähnlichkeit ist keine Duplikation von Wissen. Wer sie zusammenführt, koppelt unabhängige Änderungsgründe.",
   "Falsch: Zwischen den Kopien existiert keine statische Abhängigkeit. Gerade deshalb bleibt die logische Kopplung in solchen Analysen unsichtbar.",
   "Richtig: Jede Änderung muss an allen Stellen nachgezogen werden. Je mehr Kopien existieren, desto wahrscheinlicher wird, dass eine vergessen wird."
  ],
  "explanation": "Duplizierte Entscheidungen erzeugen verdeckte, logische Kopplung und Inkonsistenzrisiko. Fallen: nur Logik betrachten, statische Analysen für zuverlässig halten und Ähnliches blind zusammenführen."
 },
 {
  "id": "c3q72",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "multi",
  "q": "In einer als strikt geplanten Schichtenarchitektur finden sich Schichtsprünge und Aufrufe nach oben. Was trifft zu?",
  "options": [
   "Benachrichtigungen nach oben lassen sich über Callbacks oder Ereignisse realisieren, ohne die Schichtung zu verletzen.",
   "Die Implementierung weicht vom geplanten Entwurf ab (Erosion); eine Konformitätsprüfung kann das aufdecken.",
   "Aufrufe nach oben erzeugen zyklische Abhängigkeiten zwischen Schichten und mindern deren Austauschbarkeit.",
   "Schichtsprünge erhöhen die Kopplung, beeinträchtigen aber die Austauschbarkeit einzelner Schichten nicht.",
   "Damit liegt faktisch eine gelockerte Schichtung vor, in der auch Aufrufe nach oben erlaubt sind."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: Die untere Schicht kennt nur eine von ihr definierte abstrakte Schnittstelle, nicht die konkrete obere Schicht. Die Abhängigkeitsrichtung bleibt nach unten.",
   "Richtig: Soll-Ist-Abweichungen sind der Kern von Architekturerosion. Statische Analyse oder Regeln im Build machen sie sichtbar.",
   "Richtig: Kennt eine untere Schicht die obere, lässt sie sich nicht mehr unabhängig verstehen, testen oder ersetzen.",
   "Falsch: Wer eine Schicht überspringt, hängt von Details tieferer Schichten ab. Diese lassen sich dann nicht mehr austauschen, ohne auch die überspringenden Schichten anzupassen.",
   "Falsch: Die gelockerte Schichtung erlaubt nur das Überspringen darunterliegender Schichten, nicht Aufrufe nach oben. Diese bleiben in jeder Variante eine Verletzung."
  ],
  "explanation": "Strikte Schichtung erlaubt nur Zugriffe auf die direkt darunterliegende Schicht. Schichtsprünge gehören zur gelockerten Variante, Aufrufe nach oben sind in keiner Variante vorgesehen. Die Abweichung vom Entwurf ist Erosion und per Konformitätsprüfung erkennbar. Rückmeldungen nach oben bleiben über Callbacks oder Ereignisse konform möglich."
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
   "Mit dem IT-Betrieb festlegen, welche fachlichen Funktionen das System anbietet.",
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
   "Falsch: Die fachlichen Funktionen klären Product Owner und Anforderungsanalyse mit der Fachseite. Der IT-Betrieb bringt Anforderungen zu Deployment und Betreibbarkeit ein, nicht den fachlichen Funktionsumfang.",
   "Richtig: Produktmanagement und Anforderungsanalyse liefern das „Was“. Architekt:innen klären mit ihnen fachliche Ziele, Prioritäten und Qualitätsanforderungen, um daraus tragfähige Architekturentscheidungen abzuleiten."
  ],
  "explanation": "Architekt:innen arbeiten zielgruppengerecht mit PO und Anforderungsanalyse, IT-Betrieb sowie QS und Test zusammen. Fallen: Sie überfordern das Management nicht mit detaillierten UML-Diagrammen, und der fachliche Funktionsumfang wird mit PO und Anforderungsanalyse geklärt, nicht mit dem IT-Betrieb."
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
  "q": "Welche der folgenden Begriffe bezeichnen Architekturmuster bzw. Entwurfsansätze?",
  "options": [
   "Pipes und Filter",
   "Domain-Driven Design (DDD)",
   "ATAM",
   "Ports and Adapters (Hexagonale Architektur)",
   "C4",
   "arc42"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Richtig: Muster, das Verarbeitung in unabhängige Schritte zerlegt, die über Datenströme verbunden sind.",
   "Richtig: Entwurfsansatz, der die Struktur an fachlichen Kontexten und einem gemeinsamen Modell ausrichtet.",
   "Falsch: Methode zur Bewertung von Architekturen anhand von Qualitätsszenarien; kein Entwurfsmuster.",
   "Richtig: Muster, das den fachlichen Kern über Ports von technischen Adaptern trennt.",
   "Falsch: Modell zur Darstellung von Architektur auf vier Detailebenen; kein Strukturmuster und keine Schichtung des Systems.",
   "Falsch: Vorlage zur Dokumentation von Architekturen; sie schreibt keine Struktur des Systems vor."
  ],
  "explanation": "Muster und Ansätze (Pipes und Filter, Ports and Adapters, DDD) beschreiben, wie ein System strukturiert wird. arc42, C4 und ATAM unterstützen dagegen Dokumentation, Darstellung bzw. Bewertung, geben aber keine Systemstruktur vor."
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
   "Feature-Driven Architecture: die Struktur wird aus einzelnen Features abgeleitet.",
   "Globale Analyse: Einflussfaktoren systematisch analysieren und Lösungsstrategien ableiten.",
   "Sichtenbasierte Architekturentwicklung.",
   "Code first: die Struktur aus dem entstehenden Quellcode ableiten.",
   "Technologiegetriebener Entwurf: zuerst das Framework festlegen, dann die Struktur ableiten.",
   "Evolutionäre Architektur."
  ],
  "correct": [
   1,
   2,
   5
  ],
  "optExpl": [
   "Falsch: Ein derartiger Ansatz wird im Curriculum nicht genannt. Fachlich ausgerichtet ist dort Domain-Driven Design.",
   "Richtig: Die Globale Analyse gehört zu den im Curriculum genannten weiteren Ansätzen.",
   "Richtig: Die Architektur wird über mehrere Sichten erarbeitet, z. B. nach Kruchtens 4+1-Modell.",
   "Falsch: Das Curriculum nennt keinen Code-first-Ansatz. Die Struktur wird entworfen, nicht erst aus dem Code abgeleitet.",
   "Falsch: Das wird nicht als Ansatz genannt. Technologien sind Randbedingungen oder Entscheidungen, aber kein eigener Entwurfsansatz.",
   "Richtig: Die Architektur wächst schrittweise, wobei automatisierte Prüfungen Qualitäten absichern."
  ],
  "explanation": "Das Curriculum nennt u. a. Top-down, Bottom-up, sichtenbasiert, Domain-Driven Design, evolutionäre Architektur, Globale Analyse und modellbasierten Entwurf. „Code first“, „technologiegetrieben“ oder „Feature-Driven Architecture“ sind keine Curriculum-Ansätze."
 },
 {
  "id": "c3q75",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "multi",
  "q": "Welche Vorteile lassen sich für eine Schichtenarchitektur begründen?",
  "options": [
   "Die gerichtete Abhängigkeit nach unten (ohne Zyklen) erleichtert das Verständnis des Systems.",
   "Fachliche Änderungen bleiben in der Regel auf eine Schicht beschränkt.",
   "Jede Schicht lässt sich unabhängig von den anderen skalieren.",
   "Eine Schicht kann ersetzt werden, solange ihre Schnittstelle zur darüberliegenden Schicht erhalten bleibt.",
   "Die Antwortzeit verbessert sich, weil jede Schicht Zwischenergebnisse für die darüberliegende vorverarbeitet.",
   "Darstellung, Fachlogik und Datenzugriff lassen sich getrennt entwickeln und testen."
  ],
  "correct": [
   0,
   3,
   5
  ],
  "optExpl": [
   "Richtig: Zyklenfreie Abhängigkeiten erlauben es, Schichten von unten nach oben zu verstehen und zu testen.",
   "Falsch: Schichten schneiden nach technischen Belangen. Ein neues Fachattribut berührt typischerweise UI, Logik und Persistenz.",
   "Falsch: Schichten sind zunächst logische Strukturen. Unabhängige Skalierung erfordert getrennte Deployment-Einheiten, wie sie z. B. Microservices bieten.",
   "Richtig: Die obere Schicht kennt nur die Schnittstelle der unteren, nicht deren Realisierung. Damit ist der Austausch möglich.",
   "Falsch: Schichtung ist keine Performance-Maßnahme; das Durchreichen über mehrere Schichten kostet eher Laufzeit.",
   "Richtig: Trennung der Belange ist das Hauptmotiv der Schichtung; über definierte Schnittstellen lassen sich Schichten isoliert prüfen."
  ],
  "explanation": "Schichten trennen Belange nach Abstraktionsebene und geben eine gerichtete Abhängigkeit vor. Das fördert Verständlichkeit und Austauschbarkeit. Nicht begründbar sind Aussagen zu fachlicher Änderungslokalität und unabhängiger Skalierung: Fachliche Änderungen ziehen sich oft durch alle Schichten, und Schichten sind zunächst logische, nicht deploybare Einheiten."
 },
 {
  "id": "c3q76",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "multi",
  "q": "Welche Nachteile oder Grenzen hat eine strikte Schichtung?",
  "options": [
   "Strikte Schichtung führt zwangsläufig zu zyklischen Abhängigkeiten zwischen benachbarten Schichten.",
   "Zwischenschichten leiten Aufrufe häufig nur weiter und erzeugen Aufwand ohne eigene Funktion.",
   "Durch die Bindung jeder Schicht an ihre Nachbarschicht kann keine Schicht ausgetauscht werden.",
   "Die Schichten müssen als getrennte Prozesse oder Deployments betrieben werden.",
   "Ein neues fachliches Attribut muss typischerweise durch alle Schichten gereicht werden."
  ],
  "correct": [
   1,
   4
  ],
  "optExpl": [
   "Falsch: Strikte Schichtung erlaubt nur Abhängigkeiten nach unten und ist damit zyklenfrei. Zyklen entstehen erst durch Verstöße (Aufrufe nach oben).",
   "Richtig: In der strikten Variante darf eine Schicht nur die direkt darunterliegende nutzen; einfache Zugriffe durchlaufen deshalb jede Schicht.",
   "Falsch: Gerade die Bindung nur über definierte Schnittstellen macht den Austausch möglich. Das ist ein Vorteil, kein Nachteil der Schichtung.",
   "Falsch: Schichten sind logische Strukturen und können in einem einzigen Prozess laufen. Eine Verteilung ist eine eigene Entscheidung.",
   "Richtig: Schichten schneiden nach technischen Belangen, nicht nach Fachlichkeit. Fachliche Änderungen sind deshalb nicht lokal."
  ],
  "explanation": "Nachteile strikter Schichtung: Änderungen mit fachlichem Bezug durchlaufen alle Schichten, Zwischenschichten reichen Aufrufe oft nur durch. Schichten bleiben dennoch austauschbar, sie sind nicht zwingend getrennt deploybar und die Schichtung lässt sich mit anderen Stilen kombinieren, auch ohne zyklische Abhängigkeiten."
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
    "text": "Sie legen die fachlichen Anforderungen verbindlich fest, ohne sie zu hinterfragen.",
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
   "Anforderungen und Randbedingungen zu hinterfragen gehört laut Curriculum zu den Aufgaben der Architekt:innen. Die fachlichen Anforderungen verantwortet die Fachseite (z. B. der Product Owner), deshalb ist die Aussage falsch.",
   "Architekt:innen zeigen Stakeholdern die Konsequenzen ihrer Entscheidungen auf, damit diese informiert mitentscheiden können. Das gehört zu ihren Aufgaben, die Aussage ist richtig.",
   "Zur Verantwortung gehört, dass Code und Architektur zusammenpassen, sonst driftet die Architektur vom Gebauten weg. Die Aussage ist deshalb richtig.",
   "Das fachliche Backlog priorisiert der Product Owner. Architekt:innen bringen architekturrelevante Aspekte ein, setzen aber nicht die fachlichen Prioritäten. Die Aussage ist falsch.",
   "Architektur ist iterativ, und Architekt:innen erkennen selbst, wann eine weitere Iteration nötig ist. Sie warten dafür nicht auf Vorgaben, die Aussage ist richtig.",
   "Zielkonflikte zwischen Qualitätszielen werden mit den Stakeholdern entschieden und nicht von Architekt:innen allein. Die Aussage ist deshalb falsch."
  ],
  "explanation": "Architekt:innen zeigen Konsequenzen ihrer Entscheidungen auf, prüfen die Konsistenz von Code und Architektur und erkennen selbst, wann eine weitere Iteration nötig ist. Fallen: Anforderungen werden hinterfragt statt verbindlich festgelegt, das Backlog priorisiert der Product Owner, und Zielkonflikte werden mit den Stakeholdern entschieden."
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
    "text": "Vor der Implementierung lässt sich durch eine Analyse bereits nachweisen, dass die Qualitätsziele erreicht werden.",
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
   "Falsch: Vor der Implementierung kann eine Analyse nur Risiken im Entwurf aufdecken und einschätzen, ob die Anforderungen voraussichtlich erfüllt werden. Ein Nachweis der Zielerreichung ist erst am umgesetzten System möglich. Die Aussage ist deshalb falsch.",
   "Ein Ziel der Analyse ist zu prüfen, ob die Implementierung zu den getroffenen Architekturentscheidungen passt. Die Aussage ist deshalb richtig.",
   "Eine Analyse bewertet immer anhand eines Maßstabs, und das sind die priorisierten Qualitätsziele bzw. Anforderungen. Die Aussage ist deshalb richtig.",
   "Eine Analyse ist schon vor der Implementierung sinnvoll, etwa an Entwürfen, und nicht erst mit lauffähigem Code. Die Aussage ist deshalb falsch.",
   "Eine Architekturanalyse lohnt sich in allen Phasen: vor, während und nach der Implementierung. Die Aussage ist deshalb richtig.",
   "Die Analyse prüft auch, ob architekturrelevante Anliegen der Stakeholder berücksichtigt sind. Die Aussage ist deshalb richtig."
  ],
  "explanation": "Architekturanalyse ist vor, während und nach der Implementierung sinnvoll (richtig), also nicht erst mit lauffähigem Code (falsch). Sie misst an priorisierten Qualitätszielen (richtig), prüft die Konformität der Implementierung zu den Entscheidungen (richtig) und ob architekturrelevante Stakeholder-Anliegen berücksichtigt sind (richtig). Falle: Vor der Implementierung zeigt sie Risiken und Erfüllungswahrscheinlichkeit, aber keinen Nachweis der Zielerreichung."
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
    "text": "Hohe Kohäsion kann die Zahl der Abhängigkeiten zwischen Bausteinen senken, weil zusammengehörige Aufgaben nicht über Bausteingrenzen verteilt werden.",
    "cat": 0
   },
   {
    "text": "Lose Kopplung wird erreicht, indem Abhängigkeiten zwischen Bausteinen vollständig vermieden werden.",
    "cat": 1
   },
   {
    "text": "Abstraktion und Information Hiding sind dasselbe Prinzip unter verschiedenen Namen.",
    "cat": 1
   },
   {
    "text": "Wie streng ein Prinzip angewendet wird, hängt von Anforderungen und Qualitätszielen ab.",
    "cat": 0
   },
   {
    "text": "Ein Modulschnitt nach technischen Schichten stellt hohe fachliche Kohäsion sicher.",
    "cat": 1
   },
   {
    "text": "Kopplung zwischen zwei Bausteinen kann auch ohne direkte Aufrufe bestehen, etwa über gemeinsame Datenformate.",
    "cat": 0
   }
  ],
  "rowExpl": [
   "Was zusammengehört, kommuniziert intern statt über Bausteingrenzen. Eine hohe Kohäsion hilft daher meist, Abhängigkeiten zwischen Bausteinen zu verringern; die Aussage ist richtig.",
   "Bausteine müssen zusammenarbeiten, also sind Abhängigkeiten notwendig. Lose Kopplung heißt, sie auf das Nötige zu begrenzen; die Aussage ist falsch.",
   "Abstraktion bildet zweckmäßige Verallgemeinerungen, Information Hiding verbirgt änderungswahrscheinliche Entscheidungen. Sie ergänzen sich, sind aber nicht identisch; die Aussage ist falsch.",
   "Prinzipien sind Abwägungshilfen und keine Checkliste. Sie werden im Kontext der Anforderungen gewichtet; die Aussage ist richtig.",
   "Ein Schichtenschnitt verteilt fachlich Zusammengehöriges auf mehrere Module. Fachliche Kohäsion erfordert einen fachlich orientierten Schnitt; die Aussage ist falsch.",
   "Gemeinsame Annahmen über Datenformate oder Strukturen binden Bausteine aneinander, auch ohne Aufruf. Kopplung geht über Aufrufbeziehungen hinaus; die Aussage ist richtig."
  ],
  "explanation": "Richtig: Hohe Kohäsion senkt tendenziell Abhängigkeiten zwischen Bausteinen, Prinzipien werden anforderungsabhängig gewichtet, und Kopplung besteht auch ohne Aufrufe. Falsch: Lose Kopplung heißt nicht abhängigkeitsfrei, Abstraktion und Information Hiding sind verschiedene Prinzipien, und ein Schichtenschnitt sichert keine fachliche Kohäsion."
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
  "q": "Die Anforderungen sind unvollständig. Welche Aussagen zum Umgang mit Architekturentscheidungen treffen zu?",
  "options": [
   "Schwer umkehrbare Entscheidungen sollten so spät wie verantwortbar getroffen werden.",
   "Unbestätigte Annahmen gehören nicht in die Architekturdokumentation, da sie nur gesicherte Fakten enthalten soll.",
   "Je größer die Unsicherheit, desto detaillierter sollte der Entwurf vorab ausgearbeitet werden.",
   "Eine Entscheidung zu verschieben ist selbst eine Entscheidung, die Risiken birgt, etwa Verzögerungen oder unbeabsichtigte Festlegungen.",
   "Besonders riskante Annahmen werden am besten erst geprüft, wenn der Gesamtentwurf steht.",
   "Flexibilität an Stellen, an denen Änderungen erwartet werden, ist sinnvoll; pauschale Flexibilität erhöht Komplexität ohne Nutzen."
  ],
  "correct": [
   0,
   3,
   5
  ],
  "optExpl": [
   "Richtig: Je später eine schwer umkehrbare Entscheidung fällt, desto mehr Wissen liegt vor. „Verantwortbar“ heißt, dass das Warten selbst noch keinen Schaden verursacht.",
   "Falsch: Gerade bei Unsicherheit sind explizit festgehaltene Annahmen wichtig, weil sie überprüft werden können und zeigen, welche Entscheidungen bei Änderung der Annahme neu zu bewerten sind.",
   "Falsch: Ein detaillierter Vorab-Entwurf beruht auf demselben unvollständigen Wissen und muss bei Klärung der Anforderungen oft verworfen werden. Unsicherheit wird besser iterativ abgebaut.",
   "Richtig: Wer nicht entscheidet, trifft de facto auch eine Entscheidung. Teams legen sich dann implizit fest, oder Folgearbeiten verzögern sich. Aufschieben ist ein Abwägungsergebnis, kein risikofreier Zustand.",
   "Falsch: Gerade riskante Annahmen sollten früh, etwa per Prototyp oder Durchstich, geprüft werden. Nach dem Gesamtentwurf sind Korrekturen teuer.",
   "Richtig: Erweiterungspunkte dort, wo Änderungen wahrscheinlich sind, begrenzen Änderungskosten. Flexibilität auf Vorrat erzeugt dagegen Komplexität für Anforderungen, die vielleicht nie kommen."
  ],
  "explanation": "Bei unvollständigen Anforderungen gilt: schwer Umkehrbares spät, aber nicht zu spät entscheiden, Annahmen explizit festhalten, Risiken früh prüfen und Flexibilität gezielt einsetzen. Fallen: Vorab-Detaillierung, Annahmen verschweigen, Aufschieben als risikofrei ansehen."
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
  "q": "Ein Baustein nutzt das API eines externen Kartendienstes an vielen Stellen direkt. Welche Aussagen treffen zu?",
  "options": [
   "Ausfälle des Dienstes können sich auf den Baustein auswirken, auch wenn das API unverändert bleibt.",
   "Die afferente Kopplung des Bausteins steigt durch die Nutzung des Dienstes.",
   "Ein SLA des Anbieters schützt vor den Auswirkungen von API-Änderungen.",
   "Verteilte direkte Aufrufe erhöhen den Aufwand eines Anbieterwechsels, weil jede Aufrufstelle betroffen ist.",
   "Die Abhängigkeit ist efferent und erhöht die Instabilität des Bausteins.",
   "Da der Dienst remote aufgerufen wird, besteht die Kopplung nur zur Laufzeit."
  ],
  "correct": [
   0,
   3,
   4
  ],
  "optExpl": [
   "Richtig: Verfügbarkeit und Antwortzeit des Dienstes wirken direkt auf den Baustein zurück, sofern sie nicht durch Timeouts oder Fallbacks abgefedert werden.",
   "Falsch: Die Abhängigkeit geht vom Baustein zum Dienst und ist damit ausgehend (efferent). Afferent zählt, wie viele andere Bausteine von diesem Baustein abhängen.",
   "Falsch: Ein SLA deckt höchstens Verfügbarkeit und Reaktionszeiten ab, nicht API-Änderungen, Versionswechsel oder Abkündigungen. Die strukturelle Kopplung bleibt.",
   "Richtig: Ist das fremde API im Code verstreut, muss bei einem Wechsel jede Aufrufstelle angepasst werden. Eine Kapselung an einer Stelle würde den Aufwand bündeln.",
   "Richtig: Ausgehende Abhängigkeiten zu einem fremdkontrollierten, volatilen Element erhöhen die Instabilität im Sinne der Stabilitätsmetrik: Der Baustein muss auf Änderungen des Dienstes reagieren.",
   "Falsch: Auch zur Entwicklungszeit hängt der Code an Datentypen, Bibliotheken und Aufrufkonventionen des Anbieters. Die Kopplung zeigt sich schon beim Kompilieren und Testen."
  ],
  "explanation": "Direkt und verstreut eingebundene Fremddienste koppeln den Baustein efferent an ein fremdkontrolliertes, volatiles Element: Ausfälle, API-Änderungen und Anbieterwechsel schlagen durch. Fallen: SLA als Lösung, afferent mit efferent verwechseln, Kopplung nur zur Laufzeit sehen."
 },
 {
  "id": "c3q78",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "single",
  "q": "Entwicklung bevorzugt Microservices, Betrieb einen Monolithen. Wie sollte man mit diesem Zielkonflikt am ehesten umgehen?",
  "options": [
   "Einen Teil der Funktionen als Services und den Rest als Monolith bauen, damit beide Seiten zufrieden sind.",
   "Die Gruppe entscheiden lassen, die das System langfristig betreibt, da sie die Folgen der Entscheidung trägt.",
   "Entscheidung aus den priorisierten Qualitätszielen und Randbedingungen ableiten und samt Konsequenzen dokumentieren.",
   "Per Abstimmung der betroffenen Gruppen entscheiden, da alle Stakeholder gleichberechtigt sind.",
   "Mit Microservices starten, weil sich Betriebsprobleme später beheben lassen, während ein Monolith schwer zu zerlegen ist."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Ein Hybrid kann sinnvoll sein, aber nur als Ergebnis einer Abwägung. Als reiner Kompromiss vereint er die Betriebs- und Konsistenzkosten beider Stile.",
   "Falsch: Auch Betrieb ist nur ein Stakeholder. Die Entscheidung muss sich an Qualitätszielen und Randbedingungen orientieren, nicht an der Rolle.",
   "Richtig: Erst die Qualitätsziele (z. B. unabhängiges Deployment, Betriebsaufwand) machen die Optionen vergleichbar. Dokumentation schafft Nachvollziehbarkeit.",
   "Falsch: Stakeholder-Interessen haben unterschiedliches Gewicht für die Qualitätsziele. Ein Votum ersetzt die fachliche Abwägung nicht.",
   "Falsch: Das beantwortet den Zielkonflikt nicht, sondern ordnet ihn einer Seite zu. Betriebskosten verteilter Systeme fallen sofort an und sind nicht beliebig nachbesserbar."
  ],
  "explanation": "Stilfragen wie Monolith versus Microservices sind Abwägungen, keine Mehrheits- oder Reihenfolgeentscheidungen. Man leitet sie aus priorisierten Qualitätszielen und Randbedingungen ab und dokumentiert Entscheidung samt Konsequenzen. Typische Falle: Standpunkte einer Gruppe oder ein Mischkompromiss ohne Zielbezug."
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
  "q": "Sie beschreiben den Baustein „Tarifrechner“. Gehört die Angabe in die Blackbox- oder in die Whitebox-Beschreibung?",
  "categories": [
   "Blackbox",
   "Whitebox"
  ],
  "rows": [
   {
    "text": "Die zugesicherte Antwortzeit von höchstens zwei Sekunden je Anfrage.",
    "cat": 0
   },
   {
    "text": "Die Reihenfolge der Aufrufe zwischen den inneren Bausteinen bei einer Tarifberechnung.",
    "cat": 1
   },
   {
    "text": "Das Verhalten der angebotenen Operation bei einem Timeout des benötigten Zahlungsdienstes.",
    "cat": 0
   },
   {
    "text": "Welcher Unterbaustein die angebotene Operation „berechne Tarif“ realisiert.",
    "cat": 1
   },
   {
    "text": "Der Grund, warum Tariflogik und Rabattberechnung in getrennte Unterbausteine gelegt wurden.",
    "cat": 1
   },
   {
    "text": "Die Eingabe- und Ausgabeformate der angebotenen Operationen.",
    "cat": 0
   }
  ],
  "rowExpl": [
   "Blackbox: Zugesicherte Eigenschaften sind Teil des Vertrags nach außen. Wie sie intern erreicht werden, wäre Whitebox.",
   "Whitebox: Das Zusammenspiel der inneren Bausteine ist Innensicht und für Nutzer des Bausteins nicht nötig.",
   "Blackbox: Das Fehlerverhalten an der Schnittstelle ist Teil des Vertrags nach außen, auch wenn es mit einem inneren Vorgang zusammenhängt.",
   "Whitebox: Die Abbildung der äußeren Schnittstelle auf einen inneren Baustein ist Innensicht, obwohl es um eine äußere Schnittstelle geht.",
   "Whitebox: Begründungen der Zerlegung erklären die Innensicht. Nutzer des Bausteins benötigen sie nicht.",
   "Blackbox: Die Schnittstellenspezifikation ist die Außensicht des Bausteins."
  ],
  "explanation": "Blackbox: alles, worauf sich Nutzer verlassen (Verantwortung, Schnittstellen samt Formaten und Fehlerverhalten, Zusicherungen). Whitebox: wie das intern geleistet wird (Aufbau, Zusammenspiel, Abbildung der Schnittstellen, Begründung). Falle: Fehlerverhalten und Schnittstellenabbildung sind leicht zu verwechseln."
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
   "Die angebotenen Schnittstellen.",
   "Wichtige Schnittstellen zwischen den Unterbausteinen.",
   "Die benötigten Schnittstellen zu anderen Bausteinen.",
   "Die Wahl der Algorithmen und Datenstrukturen im Inneren.",
   "Die Verantwortlichkeit des Bausteins.",
   "Die Aufteilung des Bausteins in Unterbausteine samt Begründung."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Sie sind der Vertrag nach außen, auf den sich Nutzer des Bausteins verlassen.",
   "Falsch: Schnittstellen zwischen inneren Bausteinen beschreiben die Innensicht und gehören in die Whitebox.",
   "Richtig: Auch benötigte Schnittstellen sind Teil der Außensicht, denn sie zeigen, wovon der Baustein abhängt. Das Innere bleibt trotzdem verborgen.",
   "Falsch: Das ist ein Implementierungsdetail der Innensicht. Die Blackbox sagt, was der Baustein leistet, nicht wie.",
   "Richtig: Sie beschreibt kurz, wofür der Baustein zuständig ist, ohne seinen Aufbau zu erklären.",
   "Falsch: Zerlegung und Begründung gehören zur Whitebox, also zum Innenleben."
  ],
  "explanation": "Blackbox: Verantwortung, angebotene und benötigte Schnittstellen (und Zusicherungen). Whitebox: Unterbausteine, ihr Zusammenspiel, Schnittstellen dazwischen und Begründung. Falle: benötigte Schnittstellen gehören zur Außensicht."
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
   "Die Zuordnung der Unterbausteine zu Servern.",
   "Wichtige Schnittstellen zwischen den Unterbausteinen.",
   "Die Zuständigkeit der Teams, die die Unterbausteine umsetzen.",
   "Eine Begründung für die gewählte Zerlegung."
  ],
  "correct": [
   0,
   3,
   5
  ],
  "optExpl": [
   "Richtig: Das ist der Kern der Innensicht: aus welchen Bausteinen der Baustein besteht und wie sie zusammenspielen.",
   "Falsch: Das ist Implementierungsdetail. Die Whitebox endet auf Bausteinebene; feinere Details gehören in die nächste Verfeinerung oder den Code.",
   "Falsch: Verteilungsentscheidungen gehören in die Verteilungssicht, nicht in die Beschreibung der inneren Bausteinstruktur.",
   "Richtig: Die Schnittstellen der inneren Bausteine zeigen, wie sie zusammenarbeiten, und sind Teil der Innensicht.",
   "Falsch: Organisatorische Zuordnungen gehören nicht in die Strukturbeschreibung des Bausteins.",
   "Richtig: Gründe für Zerlegung und Alternativen machen die Innensicht nachvollziehbar und überprüfbar."
  ],
  "explanation": "Whitebox: Unterbausteine, Beziehungen, wichtige Schnittstellen dazwischen und Begründung der Zerlegung. Nicht dazu: Klassen/Methoden, Verteilung auf Server, organisatorische Zuordnungen."
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
   "Es besagt, dass die Organisationsstruktur durch die Systemarchitektur bestimmt wird.",
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
   "Falsch: Die Wirkrichtung ist vertauscht. Nach Conway spiegelt die Systemstruktur die Kommunikationsstruktur der Organisation, nicht umgekehrt. Die bewusste Gegenrichtung ist das Inverse Conway Maneuver.",
   "Richtig: Wo Teams kaum miteinander kommunizieren, entstehen bevorzugt Schnittstellen und Systemgrenzen zwischen ihren Teilen. Das ist der Kern der Beobachtung: Systemstruktur folgt Kommunikationsstruktur.",
   "Richtig: Conway steht im Curriculum bei den organisatorischen Randbedingungen, also bei der Struktur von Teams und Auftraggebenden. Es ist keine technische Randbedingung, beeinflusst aber den Systemschnitt."
  ],
  "explanation": "Conways Gesetz ist eine organisatorische Randbedingung: Kommunikationsgrenzen zwischen Teams werden tendenziell zu Systemgrenzen. Fallen: Es gilt unabhängig vom Architekturstil, ist eine Beobachtung statt einer Pflicht zum Teamschnitt, und die Wirkrichtung geht von der Organisation zum System."
 },
 {
  "id": "c3q79",
  "chapter": 3,
  "lz": "LZ 03-06",
  "r": "R3",
  "extra": true,
  "type": "multi",
  "q": "Welche Maßnahmen begrenzen die Folgen häufiger Änderungen und schwankender Verfügbarkeit eines externen API?",
  "options": [
   "Das Fachmodell an die Datenstrukturen des Anbieters anlehnen, um Übersetzungsaufwand zu sparen.",
   "Das API an einer Stelle hinter einer eigenen Schnittstelle kapseln, die in Begriffen des eigenen Fachmodells formuliert ist.",
   "Jede nutzende Komponente erhält einen eigenen, auf ihren Bedarf zugeschnittenen Client für das API.",
   "Aufrufe mit Timeout und Circuit Breaker absichern.",
   "Fehlgeschlagene Aufrufe sofort und wiederholt erneut senden, um Ausfälle zu überbrücken.",
   "Immer die jeweils neueste API-Version des Anbieters verwenden, um Kompatibilitätsprobleme zu vermeiden."
  ],
  "correct": [
   1,
   3
  ],
  "optExpl": [
   "Falsch: Das zieht Strukturen und Änderungen des Anbieters ins eigene Modell. Ein Anti-Corruption-Layer übersetzt dagegen bewusst in das eigene Modell.",
   "Richtig: Ein Adapter oder Anti-Corruption-Layer bündelt die Abhängigkeit an einer Stelle. Ändert der Anbieter sein API, muss nur diese Abstraktion angepasst werden.",
   "Falsch: Mehrere bedarfsgerechte Clients verteilen die Abhängigkeit wieder über das System. Änderungen des Anbieters müssen dann an vielen Stellen nachgezogen werden.",
   "Richtig: Timeouts begrenzen Wartezeiten, und ein Circuit Breaker stoppt Aufrufe an einen ausgefallenen Dienst. Beides verhindert, dass sich Ausfälle in das eigene System fortpflanzen.",
   "Falsch: Sofortige, ungebremste Wiederholungen können den bereits gestörten Dienst zusätzlich überlasten und die eigenen Ressourcen binden. Retries brauchen Begrenzung und Wartezeit.",
   "Falsch: Automatisches Verwenden der neuesten Version lässt Änderungen des Anbieters ungeplant durchschlagen. Versionen werden bewusst festgelegt und kontrolliert migriert."
  ],
  "explanation": "Volatile externe Dienste kapselt man zentral hinter einer eigenen Abstraktion und sichert schwankende Verfügbarkeit mit Resilienzmustern wie Timeout und Circuit Breaker. Fallen: Fremdmodell übernehmen, Abhängigkeit verteilen, ungebremste Retries, automatische Versionswechsel."
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
   "Knoten sind physische Hardware, VMs und Container zählen zu den Artefakten.",
   "Ein Knoten gehört zu genau einem Artefakt, ein Artefakt kann mehrere Knoten umfassen."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Richtig: Knoten sind Ausführungsumgebungen wie Server, VMs oder Container-Laufzeiten. Artefakte sind die ausgelieferten Einheiten, etwa JAR-Dateien, Container-Images oder Konfigurationsdateien, die auf Knoten installiert werden.",
   "Falsch: Bausteine werden auf Artefakte abgebildet, sind aber nicht dasselbe: Ein Artefakt kann mehrere Bausteine enthalten. Ein Knoten ist Infrastruktur, keine Softwarekomponente.",
   "Falsch: Knoten können physisch oder virtuell sein; VMs und Container-Laufzeitumgebungen führen Software aus und sind daher Knoten, keine Artefakte.",
   "Falsch: Die Zuordnung ist umgekehrt gedacht: Ein Knoten kann mehrere Artefakte ausführen, und ein Artefakt kann auf mehreren Knoten installiert sein, etwa bei redundanten Instanzen."
  ],
  "explanation": "Knoten sind physische oder virtuelle Ausführungsumgebungen (Server, VM, Container), Artefakte die darauf verteilten Einheiten (JAR, Image, Konfiguration). Fallen: Artefakt mit Baustein gleichsetzen, VMs und Container nicht als Knoten zählen oder die Zuordnung zwischen Knoten und Artefakten falsch herum denken."
 },
 {
  "id": "k36",
  "chapter": 3,
  "lz": "LZ 03-08",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Welcher Aspekt spricht eher für einen (modularen) Monolithen, welcher eher für Microservices?",
  "categories": [
   "Eher Monolith",
   "Eher Microservices"
  ],
  "rows": [
   {
    "text": "Das Domänenwissen ist gering, und die Bausteingrenzen werden sich voraussichtlich mehrfach verschieben.",
    "cat": 0
   },
   {
    "text": "Änderungen über mehrere Fachbereiche hinweg müssen in einer atomaren Transaktion konsistent sein.",
    "cat": 0
   },
   {
    "text": "Ein Teilsystem profitiert von einer Sprache und Datenhaltung, die für den Rest nicht passen.",
    "cat": 1
   },
   {
    "text": "Ein Teilsystem hat ein stark abweichendes Lastprofil gegenüber dem Rest.",
    "cat": 1
   },
   {
    "text": "Fachbereiche wollen mit eigenem Release-Rhythmus ausliefern, ohne sich abzustimmen.",
    "cat": 1
   },
   {
    "text": "Das Team hat wenig Erfahrung mit verteilten Systemen und Betriebsautomatisierung.",
    "cat": 0
   }
  ],
  "rowExpl": [
   "Fehlgeschnittene Services sind teurer zu korrigieren als Modulgrenzen in einem Monolithen.",
   "Eine gemeinsame Datenhaltung erlaubt ACID-Transaktionen; über Servicegrenzen hinweg ist nur eventuelle Konsistenz realistisch.",
   "Technologieneutrale Schnittstellen erlauben eine Technologiewahl je Service.",
   "Separat deploybare Services können gezielt skaliert werden, statt das ganze System zu vervielfachen.",
   "Unabhängiges Deployment ist ein Kernnutzen von Microservices.",
   "Microservices verlagern Komplexität in Betrieb und Verteilung; ohne Erfahrung überwiegen die Risiken."
  ],
  "explanation": "Microservices lohnen sich bei Bedarf an unabhängigem Deployment, Skalierung oder Technologiefreiheit und bei stabilen fachlichen Grenzen. Unklare Grenzen, geringe Erfahrung mit verteilten Systemen und atomare Konsistenz sprechen eher für einen modularen Monolithen."
 },
 {
  "id": "c3q80",
  "chapter": 3,
  "lz": "LZ 03-05",
  "r": "R2",
  "type": "multi",
  "q": "Welche Maßnahmen reduzieren das Risiko einer frühen Entscheidung zur Anbindung eines unbekannten Fremdsystems?",
  "options": [
   "Annahmen über das Fremdsystem ausdrücklich festhalten und gezielt per Durchstich überprüfen.",
   "Die Schnittstellenspezifikation des Anbieters vollständig durcharbeiten und darauf den Entwurf aufbauen.",
   "Das Fremdsystem von Beginn an in allen Bausteinen direkt nutzen, um schnell Erfahrungen zu sammeln.",
   "Mit Stakeholdern und Anbietervertretern früh Rückmeldung zu ersten Entwurfsideen einholen.",
   "Einen pauschalen Zeitpuffer einplanen, damit sinkt das Risiko der Entscheidung selbst.",
   "Die Festlegung einer schwer umkehrbaren Anbindungsart erst nach Prüfung der Annahmen treffen."
  ],
  "correct": [
   0,
   3,
   5
  ],
  "optExpl": [
   "Richtig: Ausdrücklich benannte Annahmen können gezielt geprüft werden, etwa durch einen Durchstich durch die Anbindung. So werden Vermutungen früh durch Fakten ersetzt.",
   "Falsch: Eine Spezifikation beschreibt, wie das Fremdsystem sein soll, nicht zwingend, wie es sich real verhält. Sie ersetzt keine praktische Erprobung von Performance, Fehlerverhalten und Eigenheiten.",
   "Falsch: Eine breite direkte Nutzung bindet das System früh an Annahmen, die noch nicht geprüft sind. Erfahrung sollte im begrenzten Rahmen gesammelt werden, bevor die Abhängigkeit im System verteilt wird.",
   "Richtig: Rückmeldung von Stakeholdern und Anbieter deckt Missverständnisse und Fehlannahmen auf, solange der Entwurf noch änderbar ist. Das Curriculum fordert, Feedback systematisch zu organisieren.",
   "Falsch: Ein Puffer mildert Terminrisiken, ändert aber nichts an der Wahrscheinlichkeit oder den Folgen einer Fehlentscheidung bei der Anbindung. Er ersetzt keine Prüfung der Annahmen.",
   "Richtig: Schwer umkehrbare Entscheidungen werden so spät wie verantwortbar getroffen, nachdem die entscheidenden Annahmen geprüft wurden. So sinkt das Risiko, sich falsch festzulegen."
  ],
  "explanation": "Das Risiko einer Entscheidung unter Unsicherheit sinkt, wenn Annahmen explizit gemacht und früh geprüft werden, Feedback systematisch eingeholt wird und Unumkehrbares erst nach der Prüfung festgelegt wird. Fallen: Spezifikation als Ersatz für Erprobung, breite Frühnutzung, Zeitpuffer als Risikoreduktion der Entscheidung."
 },
 {
  "id": "c3q81",
  "chapter": 3,
  "lz": "LZ 03-01",
  "r": "R1",
  "type": "multi",
  "q": "Die Änderbarkeit hat hohe Priorität (neue Zahlungsanbieter sollen schnell anbindbar sein), die Antwortzeit darf aber nicht spürbar leiden. Welche Aussagen treffen zu?",
  "options": [
   "Die Anbieterlogik direkt an den Verwendungsstellen einzubauen spart Indirektion und verbessert daher sowohl Laufzeit als auch Änderbarkeit.",
   "Ein Adapter je Anbieter hinter einer gemeinsamen Schnittstelle verbessert die Änderbarkeit, kann aber durch zusätzliche Indirektion Laufzeit kosten.",
   "Ob die Indirektion die Antwortzeitanforderung gefährdet, lässt sich anhand eines Szenarios oder Prototyps schon im Entwurf überprüfen.",
   "Eine eigene Kopie des Buchungsablaufs pro Anbieter entkoppelt die Anbieter voneinander und verbessert dadurch die Änderbarkeit.",
   "Die Auswahl und Konfiguration des Anbieters aus dem Fachcode herauszuhalten ermöglicht neue Anbieter ohne Änderung der Fachlogik, verlagert aber Fehlermöglichkeiten in die Konfiguration.",
   "Weil die Antwortzeit ein hartes Kriterium ist, wird die Änderbarkeit zunächst zurückgestellt und bei Bedarf nachgerüstet."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Falsch: Die Laufzeit profitiert, die Änderbarkeit aber nicht: Anbieterdetails verteilen sich über das System, und jeder neue Anbieter erfordert Änderungen an vielen Stellen.",
   "Richtig: Ein neuer Anbieter erfordert nur einen neuen Adapter. Der Preis ist zusätzliche Indirektion, die sich auf die Antwortzeit auswirken kann.",
   "Richtig: Gerade bei Zielkonflikten wird die gefährdete Qualität früh gezielt geprüft, statt auf Erkenntnisse aus dem Produktivbetrieb zu warten.",
   "Falsch: Die Anbieter sind zwar entkoppelt, aber jede Änderung am Buchungsablauf muss in allen Kopien nachgezogen werden. Das verschlechtert die Änderbarkeit.",
   "Richtig: Konfiguration statt Verzweigungen im Code hält erprobten Fachcode stabil. Die Kehrseite sind zusätzliche Fehlerquellen und Testaufwand bei der Konfiguration.",
   "Falsch: Änderbarkeit ist hier das priorisierte Qualitätsziel. Eine nachträgliche Umstellung der Struktur ist teuer; die Antwortzeit sollte stattdessen gezielt abgesichert werden."
  ],
  "explanation": "Zielkonflikt: Indirektion und Konfiguration verbessern die Änderbarkeit und kosten Laufzeit bzw. Testbarkeit. Die gefährdete Qualität wird gezielt (Szenario, Prototyp) geprüft. Fallen: Duplikation als „Entkopplung“ verkaufen und die priorisierte Qualität zurückstellen."
 },
 {
  "id": "k37",
  "chapter": 3,
  "lz": "LZ 03-01",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Verbessert die jeweilige Entscheidung vor allem die Änderbarkeit oder die Testbarkeit?",
  "categories": [
   "Verbessert vor allem die Änderbarkeit",
   "Verbessert vor allem die Testbarkeit"
  ],
  "rows": [
   {
    "text": "Geschäftsregeln aus dem Code in eine konfigurierbare Regeltabelle auslagern.",
    "cat": 0
   },
   {
    "text": "Die Systemzeit über eine austauschbare Uhr-Schnittstelle beziehen statt direkt aus dem Betriebssystem.",
    "cat": 1
   },
   {
    "text": "Entscheidungen, die sich wahrscheinlich ändern, hinter einer stabilen Schnittstelle verbergen.",
    "cat": 0
   },
   {
    "text": "Zwischenergebnisse eines Bausteins über eine Beobachtungsschnittstelle zugänglich machen, damit Tests sie prüfen können.",
    "cat": 1
   },
   {
    "text": "Schichten so schneiden, dass ein Austausch der Persistenztechnologie nur die Datenzugriffsschicht betrifft.",
    "cat": 0
   }
  ],
  "rowExpl": [
   "Regeln lassen sich ändern, ohne Code anzufassen. Das verbessert die Änderbarkeit; Tests werden dadurch nicht einfacher, sondern müssen mehr Regelvarianten abdecken.",
   "Im Test lässt sich eine feste Zeit einspeisen, zeitabhängiges Verhalten wird reproduzierbar prüfbar. Das verbessert die Testbarkeit; die Änderbarkeit profitiert nur nebenbei.",
   "Änderungen bleiben auf einen Baustein begrenzt (Information Hiding). Das verbessert die Änderbarkeit, auch wenn Tests nebenbei davon profitieren können.",
   "Tests können Zustände prüfen, die sonst verborgen blieben. Das verbessert die Testbarkeit (Beobachtbarkeit) und trägt nichts zur Änderbarkeit bei.",
   "Ein Technologiewechsel bleibt lokal. Das verbessert die Änderbarkeit; die Testbarkeit hängt davon ab, ob die Schicht zusätzlich austauschbar ist, das sagt die Maßnahme aber nicht."
  ],
  "explanation": "Änderbarkeit und Testbarkeit gehören beide zur Wartbarkeit und überschneiden sich, haben aber unterschiedliche Hebel: Änderungen lokal halten (Information Hiding, Konfiguration) gegenüber Prüfbarkeit herstellen (Kontrolle über Eingaben, Sicht auf Ergebnisse)."
 },
 {
  "id": "c3q82",
  "chapter": 3,
  "lz": "LZ 03-01",
  "r": "R1",
  "type": "multi",
  "q": "Ein Online-Banking-Portal führt für jede Anmeldung eine Zwei-Faktor-Authentifizierung ein. Welche Aussagen zur Wirkung auf die Qualitäten treffen zu?",
  "options": [
   "Die Benutzbarkeit leidet nur bei der erstmaligen Einrichtung; im laufenden Betrieb entsteht kein Mehraufwand.",
   "Die Sicherheit verbessert sich, weil gestohlene Passwörter allein nicht mehr genügen; die Benutzbarkeit kann dafür leiden.",
   "Die Wirkung auf andere Qualitäten wird erst betrachtet, wenn sich Nutzer:innen beschweren, da Sicherheit das priorisierte Ziel ist.",
   "Die Verfügbarkeit des Portals kann betroffen sein, weil die Anmeldung nun vom Dienst für den zweiten Faktor (z. B. SMS oder App) abhängt.",
   "Eine zusätzliche Prüfung nur bei auffälligen Anmeldungen ist eine Alternative mit anderem Kompromiss zwischen Sicherheit und Benutzbarkeit."
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Falsch: Der zusätzliche Schritt fällt bei jeder Anmeldung an und belastet die Benutzbarkeit dauerhaft, nicht nur bei der Einrichtung.",
   "Richtig: Der klassische Zielkonflikt zwischen Sicherheit und Benutzbarkeit: Die Maßnahme verbessert die eine und verschlechtert potenziell die andere Qualität.",
   "Falsch: Auswirkungen auf andere Qualitäten gehören in die Entscheidung. Eine Priorisierung rechtfertigt keine spätere Bewertung, sondern bewusstes Abwägen.",
   "Richtig: Eine zusätzliche Abhängigkeit kann zusätzliche Ausfallgründe schaffen. Auch Qualitäten, die nicht im Fokus stehen, können sich ändern.",
   "Richtig: Alternativen mit unterschiedlichen Abwägungen gehören zur Entscheidung. Die gewählte Variante samt Gründen wird mit den Stakeholdern abgestimmt und festgehalten."
  ],
  "explanation": "Jede Entscheidung wirkt auf mehrere Qualitäten: Hier Sicherheit (+), Benutzbarkeit (−) und indirekt Verfügbarkeit (zusätzliche Abhängigkeit). Alternativen, Abwägung und Gründe werden mit Stakeholdern besprochen und festgehalten."
 },
 {
  "id": "c3q83",
  "chapter": 3,
  "lz": "LZ 03-01",
  "r": "R1",
  "type": "multi",
  "q": "Ein System wird über ein generisches, zur Laufzeit konfigurierbares Regelwerk flexibel gemacht. Welche Aussagen zur Abwägung treffen zu?",
  "options": [
   "Flexibilität zur Laufzeit und Änderbarkeit des Quellcodes sind dieselbe Qualität; was eine verbessert, verbessert auch die andere.",
   "Der Testaufwand steigt, weil die Zahl möglicher Regelkonfigurationen und ihrer Kombinationen wächst.",
   "Der Umfang der Flexibilität sollte sich an konkreten Änderungsszenarien orientieren, sonst entsteht Komplexität für nie genutzte Flexibilität.",
   "Fehlkonfiguration ist ein reines Betriebsthema und gehört nicht in die Architekturabwägung.",
   "Das Verhalten ist schwerer nachvollziehbar, weil es nicht mehr allein aus dem Quellcode, sondern auch aus Konfigurationsdaten folgt."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Falsch: Laufzeitflexibilität (Konfigurierbarkeit) und Modifizierbarkeit des Systems sind verschiedene Qualitäten. Ein generisches Regelwerk verbessert die erste und kann die zweite verschlechtern.",
   "Richtig: Konfigurierbares Verhalten vergrößert den Raum der möglichen Zustände. Vollständiges Testen wird aufwendiger, Fehlkonfiguration ein reales Risiko.",
   "Richtig: Spekulative Flexibilität kostet Nachvollziehbarkeit und Aufwand ohne Nutzen. Szenarien machen den Bedarf prüfbar.",
   "Falsch: Die Konfigurierbarkeit ist eine Architekturentscheidung und schafft das Risiko der Fehlkonfiguration. Es gehört zu den Risiken, die benannt und kommuniziert werden.",
   "Richtig: Die Logik verteilt sich auf Code und Regeldaten. Das verschlechtert die Analysierbarkeit und damit die Wartbarkeit."
  ],
  "explanation": "Mehr Laufzeitflexibilität bedeutet oft weniger Nachvollziehbarkeit und höheren Testaufwand. Fallen: Flexibilität zur Laufzeit mit Änderbarkeit gleichsetzen und Risiken wie Fehlkonfiguration als „Betriebsthema“ aus der Abwägung auszuklammern."
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
   "Die Antwortzeit lässt sich durch stärkere Hardware sicherstellen; der Entwurf muss darauf nicht eingehen.",
   "Die Technologievorgaben des Rechenzentrums und die Teamgröße als Randbedingungen einbeziehen.",
   "Die funktionalen Anforderungen genügen; Last und Antwortzeit lassen sich nach der Implementierung optimieren.",
   "Einschätzen, ob und wie sicher die Ziele erreichbar sind, und Unsicheres früh prüfen (z. B. per Lasttest-Prototyp).",
   "Die Technologievorgaben als Empfehlung behandeln, wenn eine andere Lösung die Antwortzeit besser erfüllt."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Architekturaktivitäten sollen davon geleitet werden, spezifische Qualitäten zu erreichen. Last und Antwortzeit sind hier die messbaren Ziele.",
   "Falsch: Hardware allein löst Strukturprobleme nicht (etwa ungeeignete Suche oder Datenzugriffe) und ist im Konzernrechenzentrum nicht frei wählbar. Antwortzeit ist ein Treiber des Entwurfs.",
   "Richtig: Randbedingungen begrenzen den Lösungsraum. Ein Entwurf, der Betriebsvorgaben oder Teamkapazität ignoriert, ist nicht umsetzbar.",
   "Falsch: Leistungsanforderungen prägen Struktur und Technologiewahl und lassen sich nachträglich nur begrenzt erreichen.",
   "Richtig: Ein Vorschlag ist geeignet, wenn er begründet erwarten lässt, die Anforderungen zu erfüllen. Frühe Prüfung macht aus Annahmen Fakten.",
   "Falsch: Vorgaben sind Randbedingungen. Ein Abweichungswunsch ist eine Entscheidung, die man begründet und mit den Verantwortlichen klärt, statt sie eigenmächtig als Empfehlung zu behandeln."
  ],
  "explanation": "Ein geeigneter Entwurf folgt den Qualitätsanforderungen, respektiert Randbedingungen und prüft Unsicheres früh. Fallen: Hardware als Allheilmittel, Beschränkung auf Funktionales, späte Optimierung und das eigenmächtige Abweichen von Vorgaben."
 },
 {
  "id": "c3q85",
  "chapter": 3,
  "lz": "LZ 03-01",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zum qualitätsgetriebenen Architekturentwurf treffen zu?",
  "options": [
   "Der Einsatz eines Architekturmusters stellt die Qualitäten sicher, für die das Muster bekannt ist.",
   "Eine Entscheidung kann eine Qualität verbessern und dabei eine andere beeinträchtigen; beides sollte eingeschätzt werden.",
   "Eine Entscheidung ist gut begründet, wenn sie das wichtigste Qualitätsziel am stärksten verbessert; ihre Wirkung auf andere Qualitäten ist nachrangig.",
   "Architektonische Aktivitäten wie Zerlegen oder Technologiewahl werden danach ausgerichtet, bestimmte Qualitäten zu erreichen oder zu verbessern.",
   "Die Qualitätsanforderungen werden sinnvollerweise erst festgelegt, wenn die Architektur steht, um sie dann am Ergebnis zu messen."
  ],
  "correct": [
   1,
   3
  ],
  "optExpl": [
   "Falsch: Ein Muster unterstützt Qualitäten, garantiert sie aber nicht. Umsetzung, Kontext und Nebenwirkungen entscheiden über das Ergebnis.",
   "Richtig: Entscheidungen haben Preis und Nutzen. Wer nur die Verbesserung betrachtet, übersieht Nebenwirkungen auf andere Qualitäten.",
   "Falsch: Auch die Wirkung auf weniger wichtige Qualitäten muss bewertet werden, denn Mindestanforderungen an sie dürfen nicht unbemerkt verletzt werden.",
   "Richtig: Architekturarbeit ist kein Selbstzweck, sondern wird durch die geforderten Qualitäten geleitet.",
   "Falsch: Die Qualitätsanforderungen steuern den Entwurf und sind Grundlage seiner Bewertung. Sie nachträglich aus der Lösung abzuleiten kehrt die Logik um."
  ],
  "explanation": "Qualitätsgetriebener Entwurf: Qualitäten leiten die Entscheidungen, jede Entscheidung wird auf Verbesserung und Beeinträchtigung geprüft. Fallen: Muster als Qualitätsgarantie und das alleinige Optimieren des Top-Ziels."
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
   "Nur die Kosten; die Auswirkungen auf andere Qualitäten sind für das Management nicht relevant.",
   "Welche Qualität verbessert wird (Verfügbarkeit) und welche Kosten dafür entstehen.",
   "Die Verfügbarkeitszahl der gewählten Variante; Alternativen sind nach der Entscheidung nicht mehr relevant.",
   "Welche anderen Qualitäten oder Anforderungen durch die Entscheidung beeinträchtigt werden können.",
   "Dass die Variante dem Stand der Technik entspricht; weitere Begründung ist nicht nötig.",
   "Welche Risiken bestehen, falls Annahmen (z. B. zur erwarteten Last) nicht zutreffen.",
   "Dass sich die Mehrkosten durch weniger Ausfälle bald wieder einsparen lassen."
  ],
  "correct": [
   0,
   2,
   4,
   6
  ],
  "optExpl": [
   "Richtig: Nachvollziehbare Entscheidungen nennen Alternativen und Gründe. So können Stakeholder die Abwägung selbst beurteilen.",
   "Falsch: Das Management trifft eine Abwägung und braucht auch die Nebenwirkungen. Wer nur Kosten nennt, blendet aus, was die Mehrkosten kaufen und was sie beeinträchtigen können.",
   "Richtig: Der Nutzen der Entscheidung muss dem Preis gegenübergestellt werden. Ohne diesen Bezug lässt sich der Mehrpreis nicht bewerten.",
   "Falsch: Ohne Alternativen lässt sich nicht beurteilen, ob der Preis angemessen ist. Gerade bei Rückfragen zur Entscheidung gehören Alternativen und Gründe dazu.",
   "Richtig: Redundanz kann etwa Betriebsaufwand und Komplexität erhöhen. Auch diese Nebenwirkungen gehören zur ehrlichen Abwägung.",
   "Falsch: „Stand der Technik“ ersetzt keine Begründung. Entscheidungen werden über Anforderungen, Qualitäten und Abwägungen begründet.",
   "Richtig: Entscheidungen beruhen auf Annahmen. Wer ihre Unsicherheit und die Folgen benennt, kommuniziert Risiken, wie es das Curriculum verlangt.",
   "Falsch: Eine solche Zusage ist ohne Belege unseriös. Der Nutzen hängt von Annahmen ab (z. B. Ausfallkosten), die man benennen, nicht als Versprechen formulieren sollte."
  ],
  "explanation": "Gegenüber Stakeholdern kommuniziert man Alternativen, Nutzen, Preis, Nebenwirkungen und Risiken der Entscheidung. Fallen: Kosten ohne Nutzen, fehlende Alternativen, „Stand der Technik“ als Begründung und Einsparversprechen ohne Beleg."
 },
 {
  "id": "c3q87",
  "chapter": 3,
  "lz": "LZ 03-02",
  "r": "R1",
  "type": "multi",
  "q": "Die Auftragsverwaltung darf die Routenplanung ausschließlich über eine definierte Schnittstelle nutzen. Welche Aussagen zu den Konsequenzen für den Quellcode treffen zu?",
  "options": [
   "Die Vorgabe wird in der Bausteinsicht dokumentiert; die Code-Struktur bleibt davon unberührt.",
   "Die Bausteingrenzen spiegeln sich in der Code-Struktur wider, z. B. in Modulen oder Paketen je Baustein.",
   "Jeder der Bausteine muss als eigenständig deploybarer Dienst umgesetzt werden.",
   "Interne Klassen der Routenplanung sollten außerhalb ihres Bausteins nicht zugreifbar sein, soweit die Sprache dies erlaubt.",
   "Verstöße gegen die Abhängigkeitsregel lassen sich automatisiert prüfen, z. B. durch Abhängigkeitsanalyse oder Architekturtests.",
   "Die Routenplanung darf deshalb die Auftragsverwaltung in keiner Form aufrufen."
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Falsch: Eine Architekturvorgabe wirkt nur, wenn sie im Code umgesetzt ist. Die Bausteingrenzen sollen sich in der Struktur des Quellcodes widerspiegeln.",
   "Richtig: Nur so sind Bausteingrenzen und Abhängigkeitsregeln im Code nachvollziehbar und durchsetzbar.",
   "Falsch: Bausteingrenzen lassen sich auch innerhalb eines Deployments durch Module oder Pakete umsetzen. Verteilung ist eine eigene Entscheidung.",
   "Richtig: Eingeschränkte Sichtbarkeit verhindert, dass die Schnittstelle am Code vorbei umgangen wird.",
   "Richtig: Abhängigkeitsregeln sind im Code überprüfbar und können in den Build integriert werden.",
   "Falsch: Geregelt ist nur die Richtung Auftragsverwaltung → Routenplanung. Rückmeldungen sind z. B. über Callbacks oder Ereignisse über eine Schnittstelle möglich."
  ],
  "explanation": "Architekturentscheidungen haben Konsequenzen für den Quellcode: Struktur (Module/Pakete), Sichtbarkeit, prüfbare Abhängigkeitsregeln. Fallen: nur dokumentieren, Bausteine mit Deployment-Einheiten gleichsetzen und eine Richtungsregel als Aufrufverbot in beide Richtungen lesen."
 },
 {
  "id": "c3q88",
  "chapter": 3,
  "lz": "LZ 03-02",
  "r": "R1",
  "type": "multi",
  "q": "Fachliche und technische Aspekte werden beim Entwurf getrennt. Welche Aussagen dazu treffen zu?",
  "options": [
   "Die fachliche Logik lässt sich ohne technische Infrastruktur (Datenbank, Messaging) testen.",
   "Die fachliche Architektur lässt sich vollständig festlegen, bevor technische Randbedingungen berücksichtigt werden.",
   "Die Trennung verursacht zusätzlichen Aufwand, etwa für das Abbilden zwischen Fachobjekten und technischen Datenstrukturen.",
   "Technische Entscheidungen können unabhängig von den Qualitätsanforderungen getroffen werden, da die Fachlogik davon entkoppelt ist.",
   "Fachliche und technische Teams können unabhängig arbeiten und müssen dafür keine Schnittstellen abstimmen.",
   "Fachlogik und Technik ändern sich aus unterschiedlichen Gründen und unterschiedlich oft."
  ],
  "correct": [
   0,
   2,
   5
  ],
  "optExpl": [
   "Richtig: Bei sauberer Trennung braucht ein Test der Fachlogik keine technischen Komponenten.",
   "Falsch: Technische Randbedingungen können den Lösungsraum einschränken. Beide Perspektiven hängen zusammen und werden abgestimmt.",
   "Richtig: Die Trennung ist nicht kostenlos: Zusätzliche Schnittstellen und Mapping-Code sind der Preis für Testbarkeit und Austauschbarkeit.",
   "Falsch: Technische Entscheidungen richten sich gerade nach Qualitätsanforderungen und Randbedingungen. Die Trennung schützt nur die Fachlogik vor ihren Details.",
   "Falsch: Die Trennung setzt klare Schnittstellen voraus; ohne Abstimmung passen die Teile nicht zusammen.",
   "Richtig: Das ist der Kern der Begründung: Getrennte Teile lassen sich unabhängig ändern, z. B. ein Datenbankprodukt tauschen, ohne die Fachlogik anzufassen."
  ],
  "explanation": "Begründung der Trennung: unterschiedliche Änderungsgründe, Testbarkeit der Fachlogik, Austauschbarkeit der Technik. Preis: zusätzliche Schnittstellen und Mapping. Fallen: die Trennung als Entkopplung von Qualitätsanforderungen oder von jeder Abstimmung missverstehen."
 },
 {
  "id": "c3q89",
  "chapter": 3,
  "lz": "LZ 03-02",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zur schrittweisen Verfeinerung vom Systemkontext über die Bausteinebenen treffen zu?",
  "options": [
   "Alle Bausteine werden auf dieselbe Tiefe verfeinert, damit die Dokumentation einheitlich bleibt.",
   "Riskante oder komplexe Bausteine werden früher und tiefer verfeinert als einfache.",
   "Der Systemkontext ist die Whitebox des Systems, die erste Bausteinebene seine Blackbox.",
   "Öffnet man einen Baustein als Whitebox, werden seine Unterbausteine nicht mehr als Blackbox beschrieben.",
   "Jeder Baustein wird zunächst als Blackbox beschrieben und bei Bedarf auf der nächsten Ebene als Whitebox geöffnet.",
   "Die Verfeinerung endet, sobald die Bausteine so klar spezifiziert sind, dass Teams sie umsetzen können."
  ],
  "correct": [
   1,
   4,
   5
  ],
  "optExpl": [
   "Falsch: Die Tiefe ist nicht einheitlich: Riskante oder komplexe Bausteine werden früher und tiefer verfeinert. Einheitliche Tiefe verschwendet Aufwand bei einfachen Teilen.",
   "Richtig: Der Aufwand konzentriert sich dort, wo Unsicherheit und Risiko am größten sind.",
   "Falsch: Vertauscht. Im Kontext ist das System eine Blackbox; die erste Bausteinebene ist seine Whitebox.",
   "Falsch: Die Unterbausteine sind wieder Blackboxes und werden bei Bedarf auf der nächsten Ebene als Whitebox geöffnet.",
   "Richtig: Dieses Wechselspiel von Blackbox und Whitebox bildet die schrittweise Verfeinerung.",
   "Richtig: Abbruchkriterium ist die Umsetzbarkeit, nicht das Erreichen der Klassenebene."
  ],
  "explanation": "Verfeinert wird top-down und risikoorientiert: Kontext (System = Blackbox) → erste Ebene (Whitebox des Systems) → feinere Ebenen. Fallen: gleichmäßige Tiefe, Vertauschen von Blackbox/Whitebox auf den Ebenen, Verfeinern bis zur Klassenebene."
 },
 {
  "id": "c3q90",
  "chapter": 3,
  "lz": "LZ 03-02",
  "r": "R1",
  "type": "multi",
  "q": "Für ein System mit hohen Verfügbarkeitsanforderungen werden ein kaum erprobtes Framework und eine einzelne zentrale Datenbank gewählt. Welche Aussagen zu den Risiken treffen zu?",
  "options": [
   "Ein Single Point of Failure entsteht nur bei Hardware, nicht bei Softwarekomponenten wie einer Datenbank.",
   "Die zentrale Datenbank ist ein möglicher Single Point of Failure für die Verfügbarkeit.",
   "Fehlende Erfahrung mit dem Framework ist ein Projektrisiko, das die Erreichung der Qualitätsziele nicht berührt.",
   "Eine zentrale Datenbank erleichtert Konsistenz und ist deshalb unter Verfügbarkeitsaspekten unkritisch.",
   "Die Risiken werden bereits im Entwurf bewertet, bei wenig erprobter Technologie z. B. durch einen frühen Prototyp."
  ],
  "correct": [
   1,
   4
  ],
  "optExpl": [
   "Falsch: Jede zentrale Einzelkomponente, auch eine Datenbank oder ein Dienst, kann als Single Point of Failure die Verfügbarkeit begrenzen.",
   "Richtig: Fällt sie aus, ist das System unabhängig von der Zahl der Anwendungsinstanzen nicht nutzbar.",
   "Falsch: Unerwartetes Verhalten und Fehler im Betrieb können auch Qualitätsziele wie Verfügbarkeit gefährden. Es ist daher auch ein Architekturrisiko.",
   "Falsch: Konsistenzvorteile ändern nichts an der Ausfallabhängigkeit. Hier ist ein bewusster Zielkonflikt zu bewerten.",
   "Richtig: Risiken von Entscheidungen werden nicht erst im Betrieb entdeckt, sondern früh eingeschätzt und überprüft."
  ],
  "explanation": "Risiken werden im Entwurf bewertet. Typische Quellen: zentrale Einzelkomponenten (Single Point of Failure) und kaum erprobte Technologie. Fallen: SPOF nur als Hardwarethema sehen und Technologierisiken als reines Projektrisiko abtun."
 },
 {
  "id": "k38",
  "chapter": 3,
  "lz": "LZ 03-02",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Ein Team zerlegt ein Bestellsystem. Ist der jeweilige Baustein vorrangig fachlich oder technisch motiviert?",
  "categories": [
   "Fachlicher Bestandteil",
   "Technischer Bestandteil"
  ],
  "rows": [
   {
    "text": "Mahnwesen mit Eskalationsstufen bei überfälligen Rechnungen.",
    "cat": 0
   },
   {
    "text": "Wiederholungs- und Dead-Letter-Behandlung für fehlgeschlagene Nachrichten.",
    "cat": 1
   },
   {
    "text": "Rechnungsstellung mit Steuerberechnung je Zielland.",
    "cat": 0
   },
   {
    "text": "Cache für häufig gelesene Produktdaten mit zeitlicher Gültigkeit.",
    "cat": 1
   },
   {
    "text": "Bestandsführung mit Reservierung für Aktionsware.",
    "cat": 0
   }
  ],
  "rowExpl": [
   "Das Mahnwesen folgt Regeln der Fachdomäne und wird von Fachexperten beschrieben. Das ist ein fachlicher Baustein, auch wenn es technisch umgesetzt werden muss.",
   "Das löst ein Problem der Technik (unzuverlässige Zustellung) und kommt in der Fachsprache nicht vor. Das ist ein technischer Baustein.",
   "Steuerregeln und Rechnungsinhalte sind Fachwissen. Das ist ein fachlicher Baustein, das Ausgabeformat (z. B. PDF) wäre davon getrennt zu betrachten.",
   "Ein Cache dient der Leistung, nicht einer Fachaufgabe. Das ist ein technischer Baustein, auch wenn er Fachdaten enthält.",
   "Reservierungsregeln für Aktionsware ergeben sich aus dem Geschäft. Das ist ein fachlicher Baustein."
  ],
  "explanation": "Fachliche Bausteine entstehen aus der Domäne und sind in der Fachsprache beschreibbar; technische Bausteine lösen Probleme der Umsetzung. Dass ein Baustein Fachdaten enthält oder technisch realisiert wird, macht ihn noch nicht zum jeweils anderen."
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
   "In der Kontextsicht als Schnittstellen zwischen den internen Bausteinen des Systems.",
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
   "Falsch: Die Kontextsicht zeigt das System als Blackbox mit seinen Schnittstellen zur Umgebung. Interne Schnittstellen zwischen Bausteinen erscheinen in der Bausteinsicht.",
   "Richtig: Kanäle beschreiben, wie Knoten kommunizieren, z. B. über welches Protokoll. Das ergänzt die fachliche Schnittstelle um technische Aspekte.",
   "Falsch: Die Sichten zeigen Schnittstellen im Kontext der Architektur. Ausführliche Beschreibungen können zusätzlich separat stehen."
  ],
  "explanation": "Schnittstellen erscheinen in der Kontextsicht (extern), der Bausteinsicht (angeboten/benötigt) und der Verteilungssicht (Kanäle, Protokolle). Fallen: Schnittstellen als reines Laufzeitthema, interne Schnittstellen in der Kontextsicht oder nur in Separatdokumenten."
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
   "Das Konzept nur in der Beschreibung des Bausteins festhalten, der auf die Datenbank zugreift.",
   "Beschreiben, wie Bausteine das Konzept nutzen sollen (Regeln, Beispiele), damit es einheitlich angewendet wird.",
   "Persistenz als eigenen Baustein modellieren und damit auf eine Konzeptbeschreibung verzichten."
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
   "Falsch: Persistenz betrifft mehrere Bausteine. Das Konzept gehört zentral beschrieben, damit alle es einheitlich anwenden können.",
   "Richtig: Ein Querschnittskonzept entfaltet seinen Wert durch einheitliche Anwendung. Regeln und Beispiele machen sie leichter.",
   "Falsch: Ein Persistenzbaustein ersetzt nicht die Regeln, Gründe und Anwendungshinweise, die das Konzept für alle nutzenden Bausteine festlegt."
  ],
  "explanation": "Querschnittskonzepte werden zentral dokumentiert (Lösungsansatz, Regeln, Begründung, Anwendung) und aus den Bausteinen referenziert. Fallen: Wiederholung in jedem Baustein, Ablage nur beim zugreifenden Baustein oder ein Persistenzbaustein statt eines Konzepts."
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
   "Technisch für das Entwicklungsteam aufbereiten und die Darstellung für den Fachbereich weglassen, weil dieser das Konzept nicht umsetzt.",
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
   "Falsch: Auch Fachbereich und Product-Owner sind von einem UI-Konzept betroffen und sollten verstehen, was es für die Bedienung bedeutet.",
   "Richtig: Querschnittskonzepte wirken auf viele Bausteine. Änderungen müssen deshalb dort ankommen, wo das Konzept angewendet wird.",
   "Falsch: Bilder zeigen ein Ergebnis, aber nicht, welche Regeln dahinterstehen und warum. Neue Dialoge lassen sich damit nicht einheitlich gestalten."
  ],
  "explanation": "Ein Querschnittskonzept wird zielgruppengerecht dokumentiert und kommuniziert: Regeln und Beispiele für Entwicklung, verständliche Darstellung für Fachseite, Information bei Änderungen. Fallen: verstreute Kommentare, Darstellung nur für die Entwicklung oder Bilder ohne Regeln."
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
   "Die rechtliche Prüfung der Lizenzbedingungen der Standardsoftware verbindlich durchführen.",
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
   "Falsch: Verbindliche Rechtsprüfung ist Sache von Rechtsabteilung bzw. Fachleuten. Architekt:innen können auf Lizenz- und Abhängigkeitsrisiken hinweisen, ersetzen die juristische Bewertung aber nicht.",
   "Richtig: Architekt:innen sollen die Notwendigkeit von Iterationen erkennen und Möglichkeiten für Rückmeldung aufzeigen. Ein Prototyp macht Annahmen überprüfbar."
  ],
  "explanation": "Architekt:innen klären Anforderungen, zeigen Konsequenzen auf und argumentieren sie, begleiten die Umsetzung und ermöglichen Rückmeldung. Fallen: Alleinentscheidung und die Übernahme von Aufgaben anderer Rollen (hier die verbindliche Rechtsprüfung)."
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
   "Ich vertraue der Machbarkeitseinschätzung des Teams und verzichte auf eine eigene Bewertung der Qualitätsziele.",
   "Ich lege Alternativen vor (z. B. Umfang reduzieren oder schrittweise umsetzen) und benenne deren Auswirkungen.",
   "Ich lehne die Änderung ab, weil Termine nicht Sache der Architektur sind.",
   "Ich schlage vor, die kritische Annahme früh durch einen Prototyp oder eine Messung zu prüfen.",
   "Ich entscheide selbst, welches der beiden Qualitätsziele zurückgestellt wird, und informiere die Projektleitung danach."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Konsequenzen von Entscheidungen aufzuzeigen und gegenüber Stakeholdern zu vertreten, ist Teil der Verantwortung.",
   "Falsch: Die Bewertung der Konsequenzen für die Qualitätsziele gehört zur Verantwortung der Architekt:innen. Ohne sie fehlt der Projektleitung die Entscheidungsgrundlage.",
   "Richtig: Alternativen mit Auswirkungen helfen der Projektleitung, eine fundierte Entscheidung zu treffen. Die Entscheidung über Termine bleibt dort.",
   "Falsch: Architekt:innen koordinieren ihre Verantwortung mit der Projektleitung. Pauschales Ablehnen verweigert diese Koordination.",
   "Richtig: Rückmeldung früh einzuholen reduziert Unsicherheit. Dann kann die Projektleitung auf Fakten statt auf Vermutungen bauen.",
   "Falsch: Qualitätsziele sind mit den Stakeholdern abgestimmte Anforderungen. Eine Priorisierung oder Änderung ist eine gemeinsame, offene Entscheidung und kein Alleingang."
  ],
  "explanation": "Architekt:innen zeigen Konsequenzen auf, bieten Alternativen und frühe Rückmeldung an und koordinieren sich mit der Projektleitung. Fallen: Verzicht auf eigene Bewertung, pauschale Ablehnung und eigenmächtige Änderung von Qualitätszielen."
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
    "text": "Kapazitäten der Teams planen und Projektrisiken wie Terminverzug steuern.",
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
   "Kapazitätsplanung und die Steuerung von Projektrisiken wie Terminverzug liegen in der Gesamtverantwortung der Projektleitung. Architekt:innen liefern Einschätzungen zu, tragen diese Verantwortung aber nicht.",
   "Die Konsistenz von Quellcode und Architektur zu prüfen, gehört zu den Aufgaben der Architekt:innen. Die Projektleitung verantwortet dies nicht, sie koordiniert sich nur mit ihnen."
  ],
  "explanation": "Strukturentscheidungen, Querschnittsthemen und die Konsistenz von Code und Architektur gehören zu den Aufgaben der Architekt:innen. Kapazitätsplanung und die Steuerung von Projektrisiken liegen bei der Projektleitung; beide koordinieren sich."
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
   "Deployment-Fragen dem Entwicklungsteam überlassen und den Betrieb erst über das fertige Release informieren.",
   "Die Verteilungssicht gemeinsam abstimmen.",
   "Den Betrieb über die Zerlegung des Systems in Bausteine entscheiden lassen.",
   "Konsequenzen von Architekturentscheidungen für den Betrieb aufzeigen.",
   "Die Verteilungssicht allein festlegen und dem Betrieb das Ergebnis mitteilen."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Der IT-Betrieb ist Stakeholder mit eigenen Anliegen. Frühe Abstimmung vermeidet teure Nacharbeit.",
   "Falsch: Der IT-Betrieb ist Stakeholder mit eigenen Anliegen und muss früh eingebunden werden. Eine späte Information führt zu teurer Nacharbeit.",
   "Richtig: Die Verteilungssicht zeigt Knoten und Kanäle der Betriebsumgebung. Sie ist eine ideale Gesprächsgrundlage mit dem Betrieb.",
   "Falsch: Strukturentscheidungen gehören zur Verantwortung der Architekt:innen. Der Betrieb liefert Anforderungen und Randbedingungen, entscheidet aber nicht über die Bausteinstruktur.",
   "Richtig: Der Betrieb muss das System laufen lassen. Er sollte früh wissen, was auf ihn zukommt.",
   "Falsch: Die Verteilungssicht bildet die Betriebsumgebung ab und sollte mit dem Betrieb gemeinsam abgestimmt werden, damit dessen Anforderungen und Randbedingungen einfließen."
  ],
  "explanation": "Mit dem IT-Betrieb stimmen Architekt:innen Anforderungen, Verteilungssicht und Konsequenzen früh ab, entscheiden aber selbst über die Bausteinstruktur. Fallen: späte Information des Betriebs, Entscheidung der Bausteinstruktur durch den Betrieb, Verteilungssicht ohne Abstimmung."
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
   "Software-Architekt:innen entscheiden allein über die Hardwareauswahl, weil die Software die Anforderungen vorgibt.",
   "Architekt:innen sollten aufzeigen, welche Auswirkungen Hardwareentscheidungen auf die Software haben.",
   "Die Abstimmung mit der Hardwareentwicklung ist sinnvollerweise erst bei der Integration von Software und Hardware nötig.",
   "Die Hardwareentwicklung legt die Software-Bausteinstruktur fest."
  ],
  "correct": [
   0,
   2
  ],
  "optExpl": [
   "Richtig: Bei eingebetteten Systemen begrenzt die Hardware den Lösungsraum. Frühe Abstimmung verhindert böse Überraschungen.",
   "Falsch: Die Hardwareentwicklung verantwortet die Hardware. Architekt:innen stimmen sich mit ihr ab und zeigen Auswirkungen auf, entscheiden aber nicht allein über die Hardware.",
   "Richtig: Konsequenzen von Entscheidungen aufzuzeigen und zu argumentieren ist Teil der Rolle, auch gegenüber der Hardwareentwicklung.",
   "Falsch: Hardware-Randbedingungen begrenzen den Lösungsraum der Architektur und müssen früh abgestimmt werden. Bei der Integration sind Entscheidungen längst gefallen.",
   "Falsch: Die Struktur der Software gehört in die Verantwortung der Architekt:innen. Hardware liefert Randbedingungen, keine Bausteinstruktur."
  ],
  "explanation": "Bei eingebetteten Systemen stimmen Architekt:innen Hardware-Randbedingungen früh ab und zeigen Auswirkungen von Hardwareentscheidungen auf die Software auf. Fallen: Entscheidung allein über die Hardware, späte Abstimmung erst bei der Integration, Hardware bestimmt Softwarestruktur."
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
   "Ich passe die Vorgabe des Architekturboards selbst an, damit das Feature möglich wird.",
   "Soll abgewichen werden, begründe ich die Abweichung und stimme sie mit dem Architekturboard ab.",
   "Ich setze das Feature um und informiere das Architekturboard erst nach der Auslieferung.",
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
   "Falsch: Die Vorgabe gehört dem Architekturboard. Abweichungen oder Änderungen werden begründet und mit ihm abgestimmt, nicht eigenmächtig vorgenommen.",
   "Richtig: Das Architekturboard ist ein Gegenüber der Rolle. Eine bewusste, begründete Abweichung ist eine Entscheidung, keine stille Ausnahme.",
   "Falsch: Eine Abweichung muss vorher begründet und abgestimmt werden. Nachträgliche Information macht sie zu einer vollendeten Tatsache und untergräbt die Plattformstrategie.",
   "Richtig: Ein Anliegen lässt sich oft auf mehrere Arten erfüllen. Alternativen verbinden Fachziel und Vorgabe.",
   "Falsch: Pauschales Ablehnen entzieht sich der Abwägung. Gefragt ist, Anliegen zu verstehen und Optionen mit Folgen aufzuzeigen.",
   "Falsch: Die Abwägung betrifft Produkt und Plattform. Das Entwicklungsteam sollte sie nicht allein tragen; Architekt:innen vermitteln."
  ],
  "explanation": "Zwischen Produktmanagement und Architekturboard zeigen Architekt:innen Konsequenzen und Alternativen auf und stimmen Abweichungen vorher ab. Fallen: eigenmächtige Änderung der Vorgabe, nachträgliche Information, pauschale Ablehnung, Delegation der Abwägung."
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
   "Die Aussage als Randbedingung dokumentieren, da sie aus dem Kreis der Stakeholder stammt.",
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
   "Falsch: Eine Randbedingung ist von außen vorgegeben. Eine Aussage aus dem Workshop, die niemand belegt hat, ist eine Annahme, auch wenn niemand widerspricht.",
   "Richtig: So lässt sich die Tragweite der Annahme beurteilen und entscheiden, wie viel Absicherung nötig ist.",
   "Falsch: Eine implizite Annahme bleibt für andere unsichtbar. Beschwerden treten dann erst auf, wenn Anpassungen teuer sind.",
   "Richtig: Implizite Annahmen bewirken Missverständnisse zwischen Beteiligten. Transparenz sorgt für einen gemeinsamen Stand."
  ],
  "explanation": "Annahmen werden explizit dargestellt, überprüft und auf ihre Auswirkungen hin bewertet. Fallen: Aussagen von Stakeholdern sind nicht automatisch Randbedingungen, und implizite Berücksichtigung im Entwurf macht die Annahme unsichtbar."
 },
 {
  "id": "c2q34",
  "chapter": 2,
  "lz": "LZ 02-05",
  "r": "R1",
  "type": "multi",
  "q": "Zwei Teams entwickeln getrennt voneinander Bausteine, die über eine Schnittstelle zusammenarbeiten sollen. Beide gehen davon aus, dass Zeitangaben einheitlich übertragen werden, aber niemand hat das Format (z. B. UTC oder Ortszeit) festgehalten. Welche Folgen sind typisch für solche impliziten Annahmen?",
  "options": [
   "Die Teams können unterschiedliche Annahmen treffen, ohne es zu merken.",
   "Weil beide Teams dasselbe annehmen, gilt die Annahme als abgesichert.",
   "Fehler zeigen sich oft erst bei der Integration oder im Betrieb, wenn die Korrektur teuer ist.",
   "Die Annahme ist eine Randbedingung, da sie für beide Teams gleichermaßen gilt.",
   "Die Annahme sollte als Teil der Schnittstellenbeschreibung explizit festgehalten werden.",
   "Solche Abweichungen fallen meist schon beim Entwurf der einzelnen Bausteine auf."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Was nicht niedergeschrieben ist, kann von jedem anders verstanden werden. Das ist die Ursache vieler Schnittstellenfehler.",
   "Falsch: Dass zwei Teams dasselbe unterstellen, bestätigt die Annahme nicht. Ohne Abstimmung bleibt sie ein ungesicherter Sachverhalt, der von beiden nur zufällig gleich oder gerade unterschiedlich verstanden wird.",
   "Richtig: Diskrepanzen bleiben lange unentdeckt, weil jedes Team für sich konsistent ist.",
   "Falsch: Eine Randbedingung ist von außen vorgegeben. Eine Annahme wird nur unterstellt, auch wenn mehrere Beteiligte sie teilen; geteilt heißt nicht vorgegeben.",
   "Richtig: Eine explizite Aussage in der Schnittstellenbeschreibung macht die Vereinbarung prüfbar und für alle Beteiligten sichtbar.",
   "Falsch: Jedes Team ist für sich konsistent, der Fehler liegt an der Schnittstelle. Er zeigt sich meist erst bei der Integration oder im Betrieb."
  ],
  "explanation": "Implizite Annahmen führen zu unbemerkt abweichenden Vorstellungen und späten, teuren Fehlern; explizit festgehalten (z. B. in der Schnittstellenbeschreibung) werden sie prüfbar. Fallen: Geteilte Annahmen gelten nicht als gesichert oder vorgegeben, und Abweichungen fallen im Einzelbaustein nicht auf."
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
   "Automatisierte Tests weisen nach, dass die Qualitätsanforderungen an die Architektur erfüllt sind."
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
   "Falsch: Automatisierte Tests prüfen das Verhalten für konkrete Eingaben und zeigen Fehler auf. Ein Nachweis, dass Qualitätsanforderungen erfüllt sind, ist damit nicht möglich; dazu braucht es Analyse und Bewertung."
  ],
  "explanation": "Testen zeigt Fehler, nicht Fehlerfreiheit; Fehler häufen sich in bestimmten Komponenten; Unit- und Akzeptanztests haben unterschiedliche Aufgaben. Fallen: Fehlerfreiheit durch Menge, Akzeptanztests als Ersatz, Tests als Nachweis der Qualitätsanforderungen."
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
  "q": "Welche Aussagen zu den Problemen von globalem Zustand treffen zu?",
  "options": [
   "Die Probleme treten erst bei nebenläufigen Programmen auf.",
   "Abhängigkeiten sind versteckt, weil sie in keiner Signatur sichtbar werden.",
   "Globaler Zustand erhöht die Kopplung, auch wenn die Bausteine sich nie gegenseitig aufrufen.",
   "Eine sorgfältige Dokumentation der globalen Variablen beseitigt die Nachteile.",
   "Global gelesene Konstanten haben dieselben Probleme wie veränderlicher globaler Zustand.",
   "Tests können sich über den Zustand gegenseitig beeinflussen und sind dann nicht mehr isoliert."
  ],
  "correct": [
   1,
   2,
   5
  ],
  "optExpl": [
   "Falsch: Schon in sequenziellen Programmen sind Wirkungen schwer vorhersagbar, weil jede Stelle den Zustand ändern kann. Nebenläufigkeit verschärft das Problem nur.",
   "Richtig: Eine Funktion liest oder ändert den Zustand, ohne dass das in Parametern oder Rückgabewerten erscheint. Das erschwert Verständnis und Test.",
   "Richtig: Die Bausteine sind über den gemeinsamen Zustand verbunden: Eine Änderung durch einen wirkt auf alle anderen. Das ist Kopplung ohne sichtbaren Aufruf.",
   "Falsch: Dokumentation macht die Abhängigkeiten sichtbar, entfernt sie aber nicht. Die Wechselwirkungen und die Abhängigkeit der Tests untereinander bleiben bestehen.",
   "Falsch: Unveränderliche Werte können sich nicht durch andere Stellen ändern. Das Kernproblem, unkontrollierte Wirkungen durch Änderungen, entfällt.",
   "Richtig: Das Ergebnis eines Tests hängt davon ab, was frühere Tests im Zustand hinterlassen haben, etwa bei wechselnder Reihenfolge."
  ],
  "explanation": "Globaler Zustand verbirgt Abhängigkeiten, koppelt Bausteine ohne sichtbare Aufrufe und macht Tests reihenfolgeabhängig. Fallen: Problem nur bei Nebenläufigkeit sehen, Dokumentation als Heilmittel und unveränderliche Werte mit veränderlichem Zustand gleichsetzen."
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
  "q": "Welche Aussagen zu Fehler- und Ausnahmebehandlung bei Aufrufen entfernter Dienste treffen zu?",
  "options": [
   "Nutzermeldungen sollten die technische Fehlermeldung enthalten, damit der Support schneller helfen kann.",
   "Wiederholungen fehlgeschlagener entfernter Aufrufe erfordern eine idempotente Operation oder die Abwehr doppelter Ausführung.",
   "Ausnahmen für fachliche Normalfälle, etwa eine Suche ohne Treffer, sind ein bewährtes Mittel zur Ablaufsteuerung.",
   "Ein einheitliches Konzept klassifiziert die Fehlerarten und legt je Art Vorgehen und Zuständigkeit fest.",
   "Fehler sollten möglichst dort behandelt werden, wo sie entstehen, damit Aufrufer nicht damit konfrontiert werden.",
   "Fehler sollten dort behandelt werden, wo sinnvoll auf sie reagiert werden kann, andernfalls an den Aufrufer weitergegeben."
  ],
  "correct": [
   1,
   3,
   5
  ],
  "optExpl": [
   "Falsch: Technische Details gehören ins Log, mit einer Referenz (z. B. Fehler-ID) in der Nutzermeldung. Sie können sonst Sicherheitsrisiken offenlegen.",
   "Richtig: Bei einem Timeout ist unklar, ob der Aufruf ausgeführt wurde. Ohne Idempotenz droht doppelte Wirkung, etwa eine doppelte Zahlung.",
   "Falsch: Ausnahmen sind für Ausnahmesituationen gedacht; als Ablaufsteuerung machen sie den Kontrollfluss schwer nachvollziehbar und sind teuer.",
   "Richtig: So reagieren alle Bausteine konsistent, und Fehler lassen sich systemweit protokollieren und auswerten.",
   "Falsch: Oft kann nur der Aufrufer sinnvoll reagieren (Wiederholen, Alternativweg, Meldung). Behandlung am Entstehungsort verdeckt Fehler.",
   "Richtig: Das verhindert sowohl Verschlucken als auch unnötige Propagation. Beim Weiterreichen werden Ausnahmen oft auf passende Abstraktionsebene übersetzt."
  ],
  "explanation": "Gute Fehlerbehandlung folgt einem einheitlichen Konzept (Fehlerarten, Zuständigkeiten), behandelt Fehler an der Stelle mit sinnvoller Reaktionsmöglichkeit und beachtet bei Wiederholungen die Idempotenz. Typische Fallen: Behandlung stets am Entstehungsort, Ausnahmen als Ablaufsteuerung und technische Details in Nutzermeldungen."
 },
 {
  "id": "c3q93",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R2",
  "prereq": true,
  "type": "multi",
  "q": "Welche Aussagen zu Paketen bzw. Namensräumen, Sichtbarkeit und Gültigkeitsbereichen (Scope) im Entwurf treffen zu?",
  "options": [
   "Namensräume dienen primär der Laufzeitisolierung von Komponenten.",
   "Eine Paketstruktur garantiert keine geringe Kopplung; auch zwischen Paketen sind Zyklen möglich.",
   "Nicht öffentlich sichtbare Typen eines Pakets lassen sich ändern, ohne Nutzer außerhalb des Pakets zu beeinflussen.",
   "Je mehr Typen eines Pakets öffentlich sind, desto stabiler ist seine Schnittstelle.",
   "Ein Paketschnitt nach technischen Schichten stellt hohe fachliche Kohäsion sicher.",
   "Ein enger gewählter Gültigkeitsbereich begrenzt, wo eine Variable unbeabsichtigt verwendet oder verändert werden kann."
  ],
  "correct": [
   1,
   2,
   5
  ],
  "optExpl": [
   "Falsch: Namensräume ordnen Namen und vermeiden Kollisionen. Sie isolieren zur Laufzeit nichts; dafür sind Prozesse, Container oder Klassenlader zuständig.",
   "Richtig: Pakete gruppieren nur. Ob Abhängigkeiten zwischen ihnen sauber gerichtet sind, hängt vom Entwurf ab und muss gesondert geprüft werden.",
   "Richtig: Was außerhalb nicht sichtbar ist, kann dort nicht verwendet werden. Diese Typen gehören nicht zur Schnittstelle des Pakets und dürfen sich frei ändern.",
   "Falsch: Alles Öffentliche ist Schnittstelle und muss stabil gehalten werden. Mehr öffentliche Typen bedeuten mehr Bindung und weniger Änderungsfreiheit.",
   "Falsch: Ein Schichtenschnitt verteilt eine fachliche Funktion über mehrere Pakete. Fachliche Kohäsion erfordert eher einen fachlichen Schnitt.",
   "Richtig: Je kleiner der Scope, desto weniger Stellen können auf die Variable zugreifen. Das reduziert unerwünschte Abhängigkeiten."
  ],
  "explanation": "Pakete und Sichtbarkeit begrenzen die Angriffsfläche für Abhängigkeiten, garantieren aber keine gute Architektur. Fallen: Namensräume als Laufzeitisolation, öffentlich gleich stabil, Schichtenpakete gleich Kohäsion."
 },
 {
  "id": "k46",
  "chapter": 3,
  "lz": "LZ 03-07",
  "r": "R2",
  "prereq": true,
  "type": "k",
  "points": 2,
  "q": "Welcher Parameterübergabe lässt sich die beschriebene Eigenschaft einer Schnittstelle am ehesten zuordnen?",
  "categories": [
   "Call-by-Value",
   "Call-by-Reference"
  ],
  "rows": [
   {
    "text": "Bei großen Objekten entsteht Kopieraufwand beim Aufruf.",
    "cat": 0
   },
   {
    "text": "Der Aufrufer findet nach Rückkehr ein verändertes Objekt vor, obwohl es nicht als Rückgabewert geliefert wurde.",
    "cat": 1
   },
   {
    "text": "Änderungen des Parameters bleiben lokal, was die Schnittstelle leichter nachvollziehbar macht.",
    "cat": 0
   },
   {
    "text": "Zwei Aufrufer, die dasselbe Objekt übergeben, können sich über den Parameter gegenseitig beeinflussen.",
    "cat": 1
   },
   {
    "text": "Über Parameter lassen sich mehrere Ergebnisse an den Aufrufer zurückgeben.",
    "cat": 1
   }
  ],
  "rowExpl": [
   "Beim Übergeben des Werts wird eine Kopie erzeugt; bei großen Datenmengen kostet das Zeit und Speicher. Bei einer Referenz wird nur ein Verweis übergeben.",
   "Das ist ein Seiteneffekt: Die Funktion arbeitet über die Referenz am Original des Aufrufers. Bei einer Kopie bliebe das Original unverändert.",
   "Die Funktion arbeitet auf einer Kopie, das Original bleibt unberührt. Das macht Schnittstellen berechenbarer; bei Referenzen müssen Seiteneffekte beachtet und dokumentiert werden.",
   "Beide halten einen Verweis auf dasselbe Objekt, Änderungen sind für alle sichtbar. Das ist ein verstecktes Risiko der Referenzübergabe; bei Kopien gäbe es diese gemeinsame Zustandsänderung nicht.",
   "Nur wenn die Funktion das Original über eine Referenz ändern darf (Ausgabeparameter), kann sie so Ergebnisse zurückliefern. Bei einer Kopie wären die Änderungen für den Aufrufer unsichtbar."
  ],
  "explanation": "Call-by-Value: Kopie, Änderungen bleiben lokal, Kopieraufwand bei großen Daten. Call-by-Reference: Verweis auf das Original, Seiteneffekte möglich, auch auf andere Nutzer desselben Objekts. Für Schnittstellen heißt das: Seiteneffekte explizit machen oder vermeiden."
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
   "Eine zu hohe Testabdeckung des Codes.",
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
   "Falsch: Eine hohe Testabdeckung verursacht keine Strukturabweichung. Sie sagt aber auch nichts über die Einhaltung der Architektur aus, weil Tests Verhalten prüfen und nicht die Struktur.",
   "Richtig: Ohne Prüfung bleiben Abweichungen unbemerkt und wachsen. Regelmäßige Konformitätsprüfungen machen sie früh sichtbar.",
   "Falsch: Statische Typisierung hilft eher, Strukturregeln zu prüfen. Sie ist keine typische Ursache für Erosion.",
   "Richtig: Wer Entscheidungen und Gründe nicht kennt, verletzt sie unbeabsichtigt, etwa bei Teamwechseln oder fehlender Dokumentation.",
   "Falsch: Reviews decken Abweichungen auf, statt sie zu verursachen. Der Aufwand kann stören, ist aber nicht die Ursache der Abweichung."
  ],
  "explanation": "Abweichungen entstehen meist durch Zeitdruck, fehlende Konformitätsprüfung und unbekannte Entscheidungen. Fallen: Testabdeckung, Programmiersprache und Reviews sind keine typischen Ursachen."
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
   "Detaillierte Sequenzdiagramme sämtlicher Laufzeitszenarien.",
   "Die Verteilungssicht mit allen Servern, Netzen und Konfigurationsparametern."
  ],
  "correct": [
   0,
   2
  ],
  "optExpl": [
   "Richtig: Das Management braucht den Gesamtzusammenhang, keine Details. Kontext und Grobstruktur geben ihn auf einer Seite.",
   "Falsch: Diese Detailtiefe richtet sich an Entwickler:innen. Für das Management verdeckt sie das Wesentliche.",
   "Richtig: Das Management entscheidet über Ressourcen und Prioritäten. Es braucht die Abwägungen hinter den Entscheidungen.",
   "Falsch: Laufzeitszenarien im Detail sind für Entwickler:innen relevant. Das Management braucht keine Ablaufdetails, sondern Überblick und Konsequenzen.",
   "Falsch: Die Verteilungssicht ist vor allem für den Betrieb relevant. Für das Management ist dieser Detailgrad nicht nötig."
  ],
  "explanation": "Dem Management vermittelt man Kontext, Grobstruktur, Qualitätsziele und die Konsequenzen wichtiger Entscheidungen. Fallen: Entwicklerdetails wie Klassen oder Laufzeitszenarien und Betriebsdetails der Verteilung."
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
   "Möglichst gleich große Bausteine, damit der Aufwand je Baustein vergleichbar bleibt.",
   "Wenige und klare Abhängigkeiten zwischen den Bausteinen.",
   "Möglichst viele kleine Bausteine, damit jeder genau eine Aufgabe hat.",
   "Gemeinsame Änderungsgründe: Was sich aus demselben Grund ändert, gehört zusammen.",
   "Die vorhandene Datenbankstruktur: eine Tabelle, ein Baustein.",
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
   "Falsch: Gleiche Größe ist ein Planungswunsch, kein Qualitätskriterium des Schnitts. Sie kann fachlich Zusammengehöriges zerreißen und dadurch Abhängigkeiten erhöhen.",
   "Richtig: Ein guter Schnitt hält Kopplung gering und Schnittstellen schmal. Wenige, klare Abhängigkeiten machen Bausteine verständlich und getrennt änderbar.",
   "Falsch: Sehr feine Granularität erzeugt viele Schnittstellen und Abhängigkeiten. Ein guter Schnitt richtet sich nach Zusammengehörigkeit, nicht nach möglichst kleinen Teilen.",
   "Richtig: Das ist die Idee hinter Single Responsibility und Information Hiding: Was sich aus demselben Grund ändert, gehört zusammen, damit Änderungen auf einen Baustein begrenzt bleiben.",
   "Falsch: Das Datenmodell ist ein technischer Aspekt. Bausteine nach Tabellen zu schneiden trennt oft fachlich Zusammengehöriges und koppelt Bausteine über gemeinsame Daten.",
   "Richtig: Lässt sich der Zweck eines Bausteins in einem Satz beschreiben, deutet das auf eine klar umrissene Verantwortung hin. Ein diffuser Zweck weist dagegen auf einen unsauberen Schnitt hin."
  ],
  "explanation": "Gute Bausteinschnitte folgen fachlicher Zusammengehörigkeit, geringer Kopplung, gemeinsamen Änderungsgründen und einem klaren Zweck. Fallen: Größe oder Anzahl der Bausteine als Ziel, Schnitt nach dem Datenbankschema."
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
   "Eine chronologische Historie aller Architekturänderungen seit Projektbeginn.",
   "Querschnittskonzepte wie Fehlerbehandlung und Persistenz.",
   "Die Konfigurationsparameter aller Umgebungen im Detail."
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
   "Falsch: Eine Änderungshistorie ist als Nachschlagewerk nützlich, vermittelt Einsteigern aber keinen strukturierten Überblick über das heutige System.",
   "Richtig: Diese Regeln gelten in vielen Bausteinen. Wer sie kennt, schreibt von Anfang an passenden Code.",
   "Falsch: Das sind Betriebsdetails, die schnell veralten. Für das Verständnis der Architektur in den ersten Wochen sind sie nachrangig."
  ],
  "explanation": "Neueinsteiger profitieren von Kontext, Bausteinübersicht, begründeten Entscheidungen und Querschnittskonzepten. Fallen: Detailbeschreibungen, Änderungshistorien und Umgebungsdetails liefern keinen strukturierten Überblick."
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
   "Das Szenario nur für die Lesart formulieren, die das Entwicklungsteam für die wichtigste hält.",
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
   "Falsch: Die Gewichtung der Lesarten gehört zu den Stakeholdern, nicht zum Entwicklungsteam. Sonst entsteht ein Szenario, das am eigentlichen Anliegen vorbeigeht.",
   "Richtig: Das Curriculum verlangt, dass eine Anforderung ihre Analysemethode benennt. Erst dann ist klar, wie die Erfüllung belegt wird.",
   "Falsch: Eine Technologie ist eine Lösung, keine Anforderung. Sie macht Robustheit weder überprüfbar noch ausreichend."
  ],
  "explanation": "Vage Qualitäten werden über Szenarien mit Kontext, Stimulus, Reaktion und Messung konkretisiert, priorisiert und mit einer Analysemethode versehen. Fallen: leicht Messbares statt Passendes, Priorisierung durch das Team statt durch die Stakeholder, Technologie als Anforderung."
 },
 {
  "id": "c3q95",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zur konzeptionellen Integrität treffen zu?",
  "options": [
   "Sie verlangt, dass alle Teams dieselbe Technologie einsetzen.",
   "Einheitlichkeit kann Flexibilität kosten, weil auch Fälle einheitlich gelöst werden, für die eine andere Lösung besser wäre.",
   "Sie stellt sich bei guter Kommunikation der Teams von selbst ein, ohne dass Vorgaben nötig sind.",
   "Einheitliche Lösungen senken den Einarbeitungsaufwand und machen das Verhalten vorhersagbarer.",
   "Sie gilt innerhalb eines Bausteins; zwischen Bausteinen ist Vielfalt erwünscht.",
   "Ein Querschnittskonzept ist ein Mittel, um Einheitlichkeit herzustellen."
  ],
  "correct": [
   1,
   3,
   5
  ],
  "optExpl": [
   "Falsch: Einheitlich ist die Lösung gleichartiger Probleme, nicht die Technologie. Auch mit unterschiedlichen Technologien lässt sich ein einheitliches Konzept umsetzen.",
   "Richtig: Die Vorgabe eines Konzepts schränkt lokale Optimierung ein. Konsistenz wird gegen die jeweils beste Einzellösung abgewogen.",
   "Falsch: Ohne vereinbarte Konzepte entscheiden Teams unabhängig und kommen zu unterschiedlichen Lösungen. Kommunikation hilft, ersetzt aber keine explizite Vereinbarung.",
   "Richtig: Wer ein Muster einmal verstanden hat, erkennt es im ganzen System wieder. Das senkt auch den Aufwand der Fehleranalyse.",
   "Falsch: Konzeptionelle Integrität betrifft das System als Ganzes. Gerade zwischen Bausteinen führen uneinheitliche Lösungen zu Verwirrung.",
   "Richtig: Das Konzept legt fest, wie ein Problem überall im System gelöst wird, etwa Fehlerbehandlung oder Anbindung externer Dienste."
  ],
  "explanation": "Konzeptionelle Integrität heißt: Gleichartiges wird gleichartig gelöst, meist über Querschnittskonzepte; sie erleichtert Einarbeitung und Vorhersagbarkeit, kostet aber lokale Optimierungsfreiheit. Fallen: gleiche Technologie fordern, Einheitlichkeit entstehe von selbst, nur innerhalb von Bausteinen."
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
  "q": "Welche Aussagen zu Energieeffizienz als Querschnittsthema einer mobilen App treffen zu?",
  "options": [
   "Entscheidungen zu Kommunikation, GUI und Nebenläufigkeit sind erst nach Messungen am fertigen Produkt sinnvoll.",
   "Das Bündeln von Netzwerkzugriffen spart Energie, kann aber die Aktualität der Anzeige verschlechtern.",
   "Energieeffizienz hängt allein von der Hardware ab; durch Optimierung im verbrauchsstärksten Baustein lässt sich nichts weiter erreichen.",
   "Ein Regelwerk, etwa zum Bündeln von Netzwerkzugriffen, lässt sich in weiteren Apps wiederverwenden.",
   "Energieeffizienz und Antwortzeit lassen sich gleichzeitig maximieren, da beide durch weniger Arbeit besser werden.",
   "Kommunikation, GUI und Nebenläufigkeit beeinflussen sich gegenseitig und sollten gemeinsam betrachtet werden."
  ],
  "correct": [
   1,
   3,
   5
  ],
  "optExpl": [
   "Falsch: Messung ist wichtig, aber die grundlegenden Entscheidungen (z. B. Pull oder Push) sind früh strukturbildend und später teuer zu ändern.",
   "Richtig: Seltenere Funkaktivität spart Akku, verzögert aber Daten für die Oberfläche. Das ist eine typische Wechselwirkung zwischen Konzepten.",
   "Falsch: Software bestimmt über Netzwerkzugriffe, Bildschirmaktualisierungen und Hintergrundaktivität wesentlich mit. Das Thema betrifft mehrere Bausteine.",
   "Richtig: Konzepte sind unabhängig von der konkreten Fachlichkeit und deshalb übertragbar.",
   "Falsch: Vorabladen und häufige Aktualisierung verbessern die Antwortzeit, kosten aber Energie. Es besteht ein Zielkonflikt.",
   "Richtig: Z. B. bestimmt die Aktualisierungsrate der GUI, wie oft Daten geholt werden und wie lange Threads laufen."
  ],
  "explanation": "Energieeffizienz hängt mit Kommunikation, GUI und Nebenläufigkeit zusammen. Maßnahmen verschieben oft Lasten und stehen im Zielkonflikt mit Aktualität und Antwortzeit. Ein Regelwerk dafür ist wiederverwendbar. Nicht stimmt, dass Hardware oder ein einzelner Baustein das Thema abschließend löst."
 },
 {
  "id": "c3q97",
  "chapter": 3,
  "lz": "LZ 03-07",
  "r": "R1",
  "type": "multi",
  "q": "Welche Aussagen zum Entwurf einer Schnittstelle treffen zu, hinter der die Implementierung später ausgetauscht werden soll?",
  "options": [
   "Eine schmale Schnittstelle erleichtert den Austausch, weil weniger Verhalten erhalten werden muss.",
   "Das Offenlegen interner Datenstrukturen erhöht die Austauschbarkeit, weil Nutzer selbst entscheiden, wie sie darauf zugreifen.",
   "Zusicherungen wie Fehlerverhalten und Antwortzeit gehören zum Vertrag, auch wenn sie nicht in der Signatur stehen.",
   "Die Signatur genügt als Vertrag, solange die Typen eng gefasst sind.",
   "Die Schnittstelle sollte vom Bedarf der Nutzer her entworfen werden und nicht aus der aktuellen Implementierung abgeleitet.",
   "Je enger die Schnittstelle an die aktuelle Implementierung angelehnt ist, desto leichter fällt der spätere Austausch."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Richtig: Jede Operation und jedes beobachtbare Verhalten ist ein Versprechen, das die neue Implementierung halten muss. Eine schmale Schnittstelle begrenzt diese Bindung, kostet aber ggf. Komfort für Nutzer.",
   "Falsch: Offengelegte Datenstrukturen binden Nutzer an die konkrete Implementierung. Wird sie ausgetauscht, müssen alle Nutzer angepasst werden.",
   "Richtig: Nutzer verlassen sich auf Fehlerverhalten, Laufzeit und Reihenfolge. Fehlen diese Zusicherungen im Vertrag, verletzt eine neue Implementierung unbemerkt Erwartungen.",
   "Falsch: Enge Typen beschränken nur die Syntax. Semantik, Fehlerfälle und Qualitäten bleiben offen und müssen zusätzlich beschrieben werden.",
   "Richtig: Wer die Schnittstelle aus der Implementierung ableitet, überträgt deren Eigenheiten in den Vertrag. Aus Nutzersicht entworfen bleibt sie unabhängig von der konkreten Umsetzung.",
   "Falsch: Das Gegenteil trifft zu: Je mehr Implementierungsdetails in der Schnittstelle stecken, desto mehr müsste die neue Implementierung nachbilden, und desto stärker sind Nutzer daran gebunden."
  ],
  "explanation": "Austauschbarkeit entsteht durch eine aus Nutzersicht geschnittene, schmale Schnittstelle mit explizitem Vertrag samt Zusicherungen. Fallen: Offenlegen von Interna als vermeintliche Flexibilität, Signatur als alleiniger Vertrag und Anlehnung an die aktuelle Implementierung."
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
   "Technische Schulden allein dem Entwicklungsteam zur Bewertung überlassen."
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
   "Falsch: Technische Schulden wirken auf Kosten, Änderbarkeit und Termine späterer Releases. Das betrifft auch das Produktmanagement und muss mit den Stakeholdern abgewogen werden."
  ],
  "explanation": "Anliegen werden identifiziert, Zielkonflikte und ihre Konsequenzen offen gemacht und kurz- gegen langfristige Ziele abgewogen. Fallen: Entscheidung nach Hierarchie, Betriebsanliegen zurückstellen und technische Schulden nur intern bewerten."
 },
 {
  "id": "c3q98",
  "chapter": 3,
  "lz": "LZ 03-03",
  "r": "R1",
  "type": "multi",
  "q": "Für Teile einer Plattform stehen Komponenten fest (erprobter Authentifizierungsdienst, Altsystem-Kern), andere Teile sind fachlich offen. Welche Aussagen zum Entwurfsvorgehen treffen zu?",
  "options": [
   "Bei Bottom-up spielen Anforderungen keine Rolle, weil die vorhandenen Komponenten die Struktur vorgeben.",
   "Die feststehenden Komponenten wirken als Randbedingungen auf die Struktur und müssen früh in den Entwurf einfließen.",
   "Ein früher Prototyp, der die entworfenen Schnittstellen mit einer vorhandenen Komponente zusammenbringt, liefert schnelles Feedback.",
   "Das sichtenbasierte Vorgehen schließt Top-down und Bottom-up aus, da es keine Richtung kennt.",
   "Bei Mischformen entstehen zwangsläufig zwei getrennte Architekturen, die das Team parallel pflegen muss.",
   "Vorhandene Komponenten können die Kopplung erhöhen, wenn ihre Schnittstellen die eigene Struktur prägen; ein Adapter kann das mildern."
  ],
  "correct": [
   1,
   2,
   5
  ],
  "optExpl": [
   "Falsch: Auch Bottom-up muss die Anforderungen erfüllen. Vorhandene Komponenten werden daran gemessen, ob sie dazu beitragen.",
   "Richtig: Sie schränken den Lösungsraum ein; wer sie spät berücksichtigt, riskiert späte, teure Anpassungen.",
   "Richtig: Er prüft früh, ob Top-down-Entwurf und Vorhandenes zusammenpassen, und verringert so das Integrationsrisiko.",
   "Falsch: Sichten lassen sich mit beiden Richtungen kombinieren, z. B. zur Überprüfung der Struktur aus verschiedenen Blickwinkeln.",
   "Falsch: Top-down und Bottom-up sind Wege zu derselben Architektur. Sie werden iterativ abgestimmt, nicht getrennt geführt.",
   "Richtig: Bottom-up neigt zu enger Kopplung. Eine eigene Schnittstelle oder ein Adapter schützt die Struktur vor Details der Komponente."
  ],
  "explanation": "Bei teils feststehenden Komponenten werden Top-down und Bottom-up kombiniert: Vorhandenes als Randbedingung früh berücksichtigen, per Prototyp Feedback holen, Kopplung an fremde Schnittstellen begrenzen. Fallen: Bottom-up ohne Anforderungen, Sichten als Gegensatz zu den Richtungen."
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
  "q": "Der Einsatz einer im Team unbekannten Datenbanktechnologie ist unsicher, der Release-Termin steht fest. Welche Aussagen zum Umgang mit der Entscheidung treffen zu?",
  "options": [
   "Ein zeitlich begrenzter Proof of Concept mit realistischen Datenmengen kann Annahmen vor der verbindlichen Entscheidung prüfen.",
   "Die Entscheidung bis kurz vor dem Release zu verschieben, hält alle Optionen offen und ist deshalb risikoärmer.",
   "Bei festem Termin ist ein Rückfallplan sinnvoll, der festlegt, bis wann und nach welchen Kriterien auf eine bekannte Technologie zurückgegriffen wird.",
   "Die Erfahrungen des Marktführers mit der Technologie ersetzen die Prüfung gegen die eigenen Anforderungen.",
   "Ein Proof of Concept ist nur aussagekräftig, wenn er den vollständigen Funktionsumfang des Systemteils umfasst.",
   "Nach einer Schätzung der Datenmenge kann die Technologieentscheidung als endgültig gelten.",
   "Eine Abstraktionsschicht um die Datenhaltung senkt die Kosten einer späteren Korrektur, verursacht aber Zusatzaufwand und kann Besonderheiten der Technologie verdecken."
  ],
  "correct": [
   0,
   2,
   6
  ],
  "optExpl": [
   "Richtig: Ein begrenzter Proof of Concept ersetzt Annahmen über Eignung und Datenmenge durch Messwerte, solange der Termin noch Spielraum lässt.",
   "Falsch: Wer verschiebt, hält Optionen nur scheinbar offen. Die Zeit für Korrekturen schrumpft, und es entstehen implizite Festlegungen. Das Verschieben liefert selbst keine neuen Erkenntnisse.",
   "Richtig: Bei festem Termin begrenzt ein Rückfallplan den Schaden einer Fehlentscheidung. Entscheidend ist, dass Frist und Kriterien vorher feststehen, sonst wird er zu spät genutzt.",
   "Falsch: Die Eignung hängt von den eigenen Anforderungen, Datenmengen und Randbedingungen ab. Dass die Technologie bei einem anderen Unternehmen funktioniert, belegt dies nicht.",
   "Falsch: Ein Proof of Concept soll nur die kritischen Fragen klären, etwa Datenmenge und Zugriffsmuster. Mit vollem Funktionsumfang wäre er zu teuer und zu spät.",
   "Falsch: Eine Schätzung bleibt Annahme. Eine endgültige Festlegung verhindert, aus den Ergebnissen weiterer Iterationen zu lernen und die Entscheidung zu korrigieren.",
   "Richtig: Kapselung begrenzt, was von der Entscheidung abhängt, und senkt damit Korrekturkosten. Sie kostet jedoch Aufwand und kann Eigenschaften der Technologie, etwa spezielle Abfragefunktionen, verdecken."
  ],
  "explanation": "Unsicherheit wird durch gezielte frühe Prüfung (Proof of Concept), einen Rückfallplan mit vorab festgelegten Kriterien und begrenzte Abhängigkeiten reduziert; jede Maßnahme hat Kosten. Fallen: Aufschieben als Risikominderung, Vollumfang-Prototyp, Marktführer als Beleg, endgültige Festschreibung."
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
    "text": "Das Team will früh lauffähige Teile integrieren und testen, obwohl das Gesamtbild noch unscharf ist.",
    "cat": 1
   },
   {
    "text": "Die Schnittstellen zwischen den großen Teilen sollen vor der Detailarbeit abgestimmt werden, damit Teams parallel arbeiten können.",
    "cat": 0
   },
   {
    "text": "Mehrere bestehende Dienste verschiedener Abteilungen sollen zu einem neuen Gesamtprodukt verbunden werden.",
    "cat": 1
   },
   {
    "text": "Der Nutzen für die Kund:innen soll im Blick bleiben, und die Bausteine sollen daraus abgeleitet werden.",
    "cat": 0
   },
   {
    "text": "Ein Drittanbieter-Zahlungsdienst und seine Schnittstellen stehen fest und prägen die Struktur großer Teile.",
    "cat": 1
   },
   {
    "text": "Das Gesamtproblem ist überblickbar, und Stakeholder wollen früh sehen, welche Leistungen das System erbringt.",
    "cat": 0
   }
  ],
  "rowExpl": [
   "Eher Bottom-up: Schnelle Test- und Feedback-Ergebnisse sind ein Vorteil, wenn man aus konkreten Teilen aufbaut. Top-down liefert erst spät integrierbare Ergebnisse.",
   "Eher Top-down: Schnittstellenorientierung und das Vorab-Festlegen der Grobstruktur sind typisch für das Vorgehen vom Ganzen zu den Teilen.",
   "Eher Bottom-up: Aus Vorhandenem entsteht die größere Struktur. Das Risiko ist fehlende Orientierung und enge Kopplung.",
   "Eher Top-down: Es ist fachlich nah an Stakeholdern und behält den Kundennutzen im Blick, wenn man vom Ganzen ausgeht.",
   "Eher Bottom-up: Gesetzte Teile bestimmen den Lösungsraum, und die Struktur wird um sie herum aufgebaut.",
   "Eher Top-down: Bei überblickbarem Gesamtproblem (z. B. Neuentwicklung) lohnt es sich, groß zu beginnen und schrittweise zu verfeinern."
  ],
  "explanation": "Top-down: Gesamtbild überblickbar, Schnittstellen und Kundennutzen vorab. Bottom-up: Vorhandenes und Gesetztes prägt die Struktur, schnelles Feedback durch lauffähige Teile. In der Praxis werden beide kombiniert."
 },
 {
  "id": "n2",
  "chapter": 3,
  "lz": "LZ 03-03",
  "r": "R1",
  "type": "multi",
  "q": "Ein Team beginnt einen Neuentwurf top-down, stößt aber auf ein gesetztes Framework, das große Teile der Struktur vorgibt. Welche Aussagen zum Vorgehen treffen zu?",
  "options": [
   "Das Team kann zusätzlich Sichten (z. B. Baustein-, Laufzeit- und Verteilungssicht) erarbeiten, um die Struktur aus mehreren Blickwinkeln abzusichern.",
   "Das gesetzte Framework zeigt, dass der Top-down-Ansatz falsch war; das Team sollte komplett neu bottom-up beginnen.",
   "„Das Riskanteste zuerst klären“ ist eine Heuristik, die einen guten Startpunkt liefert, aber keine Bewertung ersetzt.",
   "Eine Heuristik wie „Teile und herrsche“ liefert bei richtiger Anwendung eine tragfähige Zerlegung, sodass eine anschließende Bewertung entfallen kann.",
   "Bei Konflikten zwischen Framework und fachlicher Zielstruktur wird das Framework angepasst, weil Technik der Fachlichkeit folgen muss.",
   "Die Richtung darf wechseln: Top-down und Bottom-up werden in der Praxis kombiniert und iterativ eingesetzt."
  ],
  "correct": [
   0,
   2,
   5
  ],
  "optExpl": [
   "Richtig: Sichtenbasiertes Vorgehen lässt sich mit Top-down und Bottom-up kombinieren und deckt unterschiedliche Fragestellungen ab.",
   "Falsch: Der bisherige Entwurf bleibt gültig. Das Framework ist eine Randbedingung, die über Bottom-up-Anteile einbezogen wird.",
   "Richtig: Heuristiken geben Orientierung für den Einstieg; ob der Entwurf trägt, zeigt erst seine Bewertung.",
   "Falsch: Heuristiken sind Erfahrungsregeln, keine Garantien. Das Ergebnis muss weiter gegen Anforderungen und Qualitäten bewertet werden.",
   "Falsch: Das ist eine Abwägung im Einzelfall. Ein gesetztes Framework kann auch die fachliche Struktur beeinflussen; Kosten und Risiken sind abzuwägen.",
   "Richtig: Je nach Wissensstand und Randbedingungen wechselt man zwischen den Richtungen."
  ],
  "explanation": "Top-down und Bottom-up werden kombiniert und iterativ eingesetzt; Heuristiken (Riskantestes zuerst, Teile und herrsche) geben Startpunkte, ersetzen aber keine Bewertung; Sichten ergänzen. Fallen: Neustart statt Anpassung, Heuristiken als verbindlich."
 },
 {
  "id": "n3",
  "chapter": 3,
  "lz": "LZ 03-03",
  "r": "R1",
  "type": "single",
  "q": "Der Entwurf hängt stark von einer Technologie ab, die dem Team unbekannt ist. Welches Vorgehen ist am ehesten angemessen?",
  "options": [
   "Die Technologie hinter einer Abstraktionsschicht verbergen und ihre Bewertung auf später verschieben.",
   "Den Entwurf auf Basis der bekannten Bausteine abschließen und die Technologie erst bei der Implementierung bewerten.",
   "Die Unsicherheit früh klären, etwa mit einem Prototyp oder Spike, bevor weitere Entscheidungen darauf aufbauen.",
   "Auf eine verbreitete, bewährte Technologie wechseln, ohne vorher zu prüfen, ob sie die Anforderungen erfüllt."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Falsch: Die Abstraktionsschicht begrenzt zwar die Änderungskosten, beseitigt aber nicht das Risiko, dass die Technologie den Entwurf nicht trägt. Die Unsicherheit bleibt ungeklärt und wirkt weiter.",
   "Falsch: Je später sich eine Technologie als ungeeignet erweist, desto mehr darauf aufbauende Entscheidungen müssen zurückgenommen werden. Das größte Risiko gehört an den Anfang, nicht ans Ende.",
   "Richtig: Das entspricht der Heuristik, das Riskanteste zuerst zu klären: Ein kleiner Test zeigt rechtzeitig, ob die Technologie den Entwurf trägt, und senkt das Risiko teurer Korrekturen.",
   "Falsch: Wiederverwendung von Bewährtem ist eine Heuristik, kein Freibrief: Ohne Prüfung gegen die Anforderungen wird ein Risiko nur gegen ein anderes getauscht."
  ],
  "explanation": "Bei einer unbekannten, entwurfsprägenden Technologie gilt: Das Riskanteste zuerst klären, etwa per Prototyp. Fallen: Abstraktion als Ersatz für Klärung, spätes Prüfen und Bewährtes ohne Abgleich mit den Anforderungen."
 },
 {
  "id": "n4",
  "chapter": 3,
  "lz": "LZ 03-04",
  "r": "R2",
  "type": "multi",
  "q": "Welche Aussagen zum Robustheitsprinzip „streng senden, tolerant annehmen“ (Postel’s Law) treffen zu?",
  "options": [
   "Eigene ausgehende Nachrichten halten den Schnittstellenvertrag ein, auch wenn Empfänger Abweichungen tolerieren würden.",
   "Unbekannte Zusatzfelder in empfangenen Nachrichten werden ignoriert; das erleichtert die Weiterentwicklung von Schnittstellen.",
   "Tolerantes Annehmen kann Vertragsverstöße von Sendern verdecken, sodass diese dauerhaft bestehen bleiben.",
   "Tolerantes Annehmen heißt, auch fehlende Pflichtangaben durch Standardwerte zu ersetzen, damit der Empfänger robust bleibt.",
   "Das Prinzip setzt voraus, dass Sender und Empfänger stets dieselbe Schnittstellenversion verwenden.",
   "Wer tolerant annimmt, muss den Schnittstellenvertrag nicht mehr dokumentieren."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Richtig: „Streng senden“ bedeutet, selbst nur vertragskonforme Nachrichten zu erzeugen. Nur so können sich Partner auf das eigene Verhalten verlassen.",
   "Richtig: Das ist die Toleranz beim Annehmen. Sender können neue Felder ergänzen, ohne bestehende Empfänger zu brechen, was die unabhängige Evolution von Schnittstellen erleichtert.",
   "Richtig: Das ist ein bekannter Nachteil. Weil Abweichungen ohne Fehler durchgehen, merken Sender nicht, dass sie den Vertrag verletzen, und die Abweichung verfestigt sich.",
   "Falsch: Toleranz betrifft Unwesentliches wie unbekannte Zusatzfelder. Fehlende Pflichtangaben müssen erkannt und abgelehnt werden; stilles Auffüllen mit Standardwerten erzeugt falsche Daten.",
   "Falsch: Das Prinzip soll gerade ermöglichen, dass Sender und Empfänger in unterschiedlichen Versionen vorliegen, solange Änderungen abwärtskompatibel erweiternd sind.",
   "Falsch: Der Vertrag ist die Grundlage für striktes Senden und für die Frage, was als wesentlich gilt und was toleriert werden darf. Er muss weiterhin dokumentiert sein."
  ],
  "explanation": "Postel’s Law: streng in dem, was man sendet, tolerant in dem, was man annimmt. Toleranz gilt nur für Unwesentliches und hat Preise (verdeckte Vertragsverstöße). Fallen: Pflichtangaben stillschweigend ergänzen, gleiche Versionen voraussetzen oder den Vertrag für entbehrlich halten."
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
    "text": "Alle Dienste verwenden für Zeitangaben dasselbe Format.",
    "cat": 1
   },
   {
    "text": "Die Fachlogik arbeitet mit einem eigenen Modell „Sendung“, ohne zu wissen, welcher Logistikanbieter dahintersteht.",
    "cat": 0
   },
   {
    "text": "Alle REST-Schnittstellen des Systems folgen denselben Namens- und Fehlerkonventionen.",
    "cat": 1
   },
   {
    "text": "Clients rufen „Dokument speichern“ auf, ohne die Persistenztechnologie zu kennen.",
    "cat": 0
   },
   {
    "text": "In allen Bausteinen wird Konfiguration über denselben Mechanismus geladen.",
    "cat": 1
   },
   {
    "text": "Das Berichtsmodul erzeugt Ausgaben über einen Exporter, hinter dem PDF- und Excel-Erzeugung austauschbar sind.",
    "cat": 0
   }
  ],
  "rowExpl": [
   "Dasselbe Zeitformat in allen Diensten bedeutet, Gleichartiges gleichartig zu lösen. Das ist Einheitlichkeit; es wird nichts hinter einer Schicht verborgen.",
   "Die Fachlogik kennt nur ein eigenes Modell und nicht die Details des Anbieters. Das ist Abstraktion: Unwesentliches wird ausgeblendet, damit sich die Nutzer auf das Wesentliche konzentrieren.",
   "Gleiche Namens- und Fehlerkonventionen über alle Schnittstellen sind Einheitlichkeit. Eine Abstraktion würde dagegen Implementierungsdetails verbergen.",
   "Der Client nutzt eine Operation auf fachlicher Ebene und kennt die Technologie dahinter nicht. Das ist Abstraktion, keine Vereinheitlichung.",
   "Ein gemeinsamer Konfigurationsmechanismus löst die gleichartige Aufgabe überall gleich. Das ist Einheitlichkeit, auch wenn er dem Nutzer technische Details abnehmen mag.",
   "Hinter dem Exporter sind konkrete Formate austauschbar. Das Berichtsmodul hängt von einer Abstraktion statt von konkreten Implementierungen ab."
  ],
  "explanation": "Abstraktion blendet Unwesentliches aus und trennt Nutzung von konkreter Umsetzung. Einheitlichkeit löst Gleichartiges überall gleichartig. Falle: Einheitliche Mechanismen können auch Details verbergen, entscheidend ist, ob Austauschbarkeit hinter einer Schnittstelle oder Gleichartigkeit der Lösung im Vordergrund steht."
 },
 {
  "id": "n6",
  "chapter": 3,
  "lz": "LZ 03-10",
  "r": "R1",
  "type": "k",
  "points": 2,
  "q": "Beschreibt die Aussage ein Querschnittsthema oder ein Querschnittskonzept?",
  "categories": [
   "Querschnittsthema",
   "Querschnittskonzept"
  ],
  "rows": [
   {
    "text": "Zugriffe auf personenbezogene Daten müssen in allen Bausteinen nachvollziehbar sein.",
    "cat": 0
   },
   {
    "text": "Alle Aufrufe nach außen laufen über Circuit Breaker mit begrenzten Wiederholungen und Backoff.",
    "cat": 1
   },
   {
    "text": "Texte, Datums- und Zahlenformate müssen für mehrere Länder anpassbar sein.",
    "cat": 0
   },
   {
    "text": "Ein zentraler Audit-Log-Dienst mit einheitlichem Ereignisformat wird von allen Bausteinen genutzt.",
    "cat": 1
   },
   {
    "text": "Die Anwendung soll im Betrieb ohne Neustart umkonfigurierbar sein, und das in mehreren Bausteinen.",
    "cat": 0
   }
  ],
  "rowExpl": [
   "Das ist eine Anforderung, die viele Bausteine betrifft, ohne zu sagen, wie sie erfüllt wird. Das ist ein Querschnittsthema; ein einheitlicher Audit-Mechanismus wäre das zugehörige Konzept.",
   "Das ist eine konkrete, übergreifende Lösung für den Umgang mit ausfallenden Nachbarsystemen. Das ist ein Querschnittskonzept; das Thema dahinter wäre „Fehlertoleranz“.",
   "Die Aussage benennt, was in vielen Bausteinen geregelt werden muss, aber keine Umsetzung. Das ist ein Querschnittsthema (Internationalisierung); die Lösung wäre ein Konzept, etwa zentrale Ressourcendateien.",
   "Ein gemeinsam genutzter Dienst mit festem Format legt fest, wie Nachvollziehbarkeit umgesetzt wird. Das ist ein Querschnittskonzept und kein Thema.",
   "Das ist eine übergreifende Anforderung ohne festgelegte Lösung. Das ist ein Querschnittsthema (Konfigurierbarkeit); erst etwa ein zentraler Konfigurationsdienst wäre ein Konzept."
  ],
  "explanation": "Ein Querschnittsthema beschreibt, was in vielen Bausteinen geregelt werden muss (Anforderung oder Fragestellung). Ein Querschnittskonzept legt fest, wie es einheitlich gelöst wird. Entscheidend ist, ob die Aussage eine Lösung festlegt."
 },
 {
  "id": "n7",
  "chapter": 3,
  "lz": "LZ 03-10",
  "r": "R1",
  "type": "multi",
  "q": "Bausteine kommunizieren asynchron über Nachrichten. Welche Wechselwirkungen mit anderen Querschnittsthemen sind zu bedenken?",
  "options": [
   "Persistenz: Durch die asynchrone Verarbeitung lassen sich Änderungen über mehrere Bausteine hinweg wieder in einer ACID-Transaktion bündeln.",
   "Oberfläche: Rückmeldungen kommen verzögert, daher braucht es verständliche Statusanzeigen statt endlosen Wartens.",
   "Die Wechselwirkungen betreffen nur verteilte Systeme; bei Nachrichten innerhalb eines Prozesses entfallen sie.",
   "Fehlerbehandlung: Nachrichten können verloren gehen oder doppelt ankommen, daher braucht es Wiederholungen und idempotente Empfänger.",
   "Reihenfolge: Der Nachrichtenbroker garantiert die Zustellung in Sendereihenfolge, sodass Empfänger keine Reihenfolge behandeln müssen.",
   "Persistenz: Der Zustand muss zwischen den Nachrichten gültig bleiben, etwa durch Transaktionen oder Wiederaufnahme."
  ],
  "correct": [
   1,
   3,
   5
  ],
  "optExpl": [
   "Falsch: Asynchronität hebt die gemeinsame Transaktion eher auf. Konsistenz entsteht über Wiederholung, Kompensation oder eventuelle Konsistenz.",
   "Richtig: Der Nutzer erhält das Ergebnis nicht im selben Aufruf; die Oberfläche muss Zwischenzustände sichtbar machen.",
   "Falsch: Auch im Prozess gibt es Reihenfolge, Zustand, verzögerte Rückmeldung und Fehler in Handlern. Verteilung verschärft die Themen nur.",
   "Richtig: Zustellgarantien sind meist höchstens at-least-once; Duplikate müssen Empfänger verkraften.",
   "Falsch: Reihenfolgegarantien gelten höchstens eingeschränkt, etwa je Partition; bei Wiederholungen oder parallelen Empfängern kann sie verletzt werden.",
   "Richtig: Eine halb verarbeitete Nachrichtenkette darf keine inkonsistenten Daten hinterlassen; Ablauf muss wieder aufnehmbar sein."
  ],
  "explanation": "Asynchrone Kommunikation entkoppelt zeitlich, schafft aber neue Anforderungen: Verlust und Duplikate verlangen Wiederholung und Idempotenz, Zustand muss zwischen Nachrichten konsistent bleiben und die Oberfläche muss verzögerte Rückmeldungen darstellen. Reihenfolge ist nicht allgemein garantiert, ACID-Transaktionen über Bausteine hinweg entfallen."
 },
 {
  "id": "n8",
  "chapter": 4,
  "lz": "LZ 04-02",
  "r": "R1",
  "type": "multi",
  "q": "Dieselbe Architektur soll dem Management und der Entwicklung vermittelt werden. Welche Aussagen zur Dokumentation und Kommunikation für diese Zielgruppen treffen zu?",
  "options": [
   "Das Management braucht vor allem Schnittstellenspezifikationen, damit es die Umsetzung steuern kann.",
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
   "Falsch: Schnittstellenspezifikationen sind Entwicklerdetails. Das Management braucht Überblick, Risiken und Kosten, um zu entscheiden, nicht um die Umsetzung im Detail zu steuern.",
   "Falsch: Ein Dokument für alle ignoriert unterschiedliche Anliegen. Zielgruppengerecht heißt, Inhalt und Detailgrad je Zielgruppe anzupassen, statt alle mit demselben Gesamtwerk zu bedienen.",
   "Richtig: Das sind die Inhalte, mit denen Entwickler:innen arbeiten. Bausteine, Schnittstellen und Konzepte liefern ihnen die Vorgaben für die Umsetzung.",
   "Richtig: Das ist die Kernaussage zur zielgruppengerechten Kommunikation: Inhalt, Form und Detailgrad richten sich an den Anliegen der jeweiligen Stakeholder aus.",
   "Richtig: Das Management braucht Überblick, Risiken und Kosten, um Entscheidungen zu treffen. Technische Detailtiefe ist für diese Zielgruppe nicht nötig."
  ],
  "explanation": "Architektur wird entsprechend den Anliegen der Stakeholder dokumentiert: Management braucht Überblick, Risiken und Kosten, Entwicklung Bausteine, Schnittstellen und Konzepte. Fallen: ein Dokument für alle und Entwicklerdetails wie Schnittstellenspezifikationen für das Management."
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
    "text": "Für das Management werden die Abschnitte der Entwicklerdokumentation unverändert übernommen.",
    "cat": 1
   }
  ],
  "rowExpl": [
   "Mündliche Kommunikation soll auf der Dokumentation aufbauen, damit beides im Einklang bleibt. Die Aussage ist deshalb richtig.",
   "Auch wenn alle dabei waren: Ergebnisse aus Meetings müssen in die Dokumentation zurückfließen, sonst gehen sie verloren und Mündliches und Schriftliches laufen auseinander. Die Aussage ist falsch.",
   "Ein Template gibt Struktur und hilft zugleich zu prüfen, ob nichts fehlt. Die Aussage ist deshalb richtig.",
   "Mehrere Autor:innen schreiben oft unterschiedlich. Konsolidierte Beiträge machen die Dokumentation einheitlich lesbar, deshalb ist die Aussage richtig.",
   "Das Management braucht andere Inhalte und einen anderen Detailgrad, etwa Überblick, Risiken und Kosten. Unveränderte Entwicklerabschnitte kommunizieren das nicht. Die Aussage ist falsch."
  ],
  "explanation": "Mündliche und schriftliche Kommunikation werden in Einklang gehalten: Präsentationen nutzen die Dokumentation, Ergebnisse aus Meetings fließen zurück. Templates geben Struktur und prüfen die Vollständigkeit, Beiträge werden konsolidiert. Falsch: Rückfluss weglassen und Entwicklerdoku unverändert ans Management geben."
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
   "Die Kontextsicht legt die interne Zerlegung fest, aus der die Bausteinsicht abgeleitet wird.",
   "Die Whitebox eines Bausteins darf keine neuen externen Schnittstellen einführen.",
   "Die Laufzeitsicht darf Bausteine anders benennen als die Bausteinsicht, wenn das Szenario dadurch einfacher wird."
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
   "Falsch: Die Kontextsicht zeigt das System als Blackbox mit seinen Nachbarn und enthält keine interne Zerlegung. Diese entsteht erst in der Bausteinsicht.",
   "Richtig: Die Whitebox muss zur Blackbox konsistent bleiben. Neue externe Schnittstellen in der Verfeinerung würden den Vertrag nach außen verändern und die Sichten widersprüchlich machen.",
   "Falsch: Alle Sichten beschreiben dasselbe System und müssen dieselben Bausteine mit denselben Namen verwenden. Abweichende Benennungen machen die Sichten nicht mehr verknüpfbar."
  ],
  "explanation": "Sichten beschreiben dasselbe System konsistent: Die Whitebox hält sich an die Blackbox, die Verteilungssicht ordnet Bausteine Artefakten und Artefakte Knoten zu. Fallen: abweichende Bausteine oder Namen je Sicht, Sichten als Ersatz füreinander und eine Kontextsicht, die Zerlegung festlegt."
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
   "Alternativen sammeln, aber nach den Präferenzen des Teams statt an den Qualitätszielen bewerten.",
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
   "Falsch: Alternativen sind an den Qualitätszielen und Rahmenbedingungen zu bewerten, damit die Entscheidung nachvollziehbar und begründet ist.",
   "Richtig: Bewertet wird anhand der priorisierten Qualitätsziele. Mehrere Alternativen zu sammeln macht die Abwägung erst möglich und zeigt, welche Lösung die Ziele am besten trägt.",
   "Richtig: So bleibt die Entscheidung nachvollziehbar und wird von den Beteiligten getragen. Festgehaltene Gründe helfen später, die Entscheidung zu verstehen und gegebenenfalls zu überprüfen."
  ],
  "explanation": "Entscheidungen trifft man systematisch: Problem und Einflussfaktoren klären, Alternativen sammeln, an den Qualitätszielen bewerten, entscheiden, festhalten und kommunizieren. Fallen: Technologie zuerst, Begründung später und Bewertung nach Teampräferenzen statt Qualitätszielen."
 },
 {
  "id": "n14",
  "chapter": 4,
  "lz": "LZ 04-08",
  "r": "R1",
  "type": "multi",
  "q": "Ein Team entscheidet sich für eine Microservice-Architektur. Welche Folgeentscheidungen ziehen sich daraus typischerweise nach?",
  "options": [
   "Die Programmiersprache ist damit für alle Services verbindlich festgelegt.",
   "Wie die Services miteinander kommunizieren.",
   "Wo und wie die Daten der einzelnen Services gehalten werden.",
   "Die Services werden auf einem gemeinsamen Knoten betrieben, damit die Kommunikation entfällt.",
   "Wie Betrieb, Deployment und Monitoring der vielen Services organisiert werden.",
   "Folgeentscheidungen müssen nicht festgehalten werden, weil sie sich aus der ersten Entscheidung ergeben."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Falsch: Die Entscheidung für Microservices legt keine einheitliche Programmiersprache fest. Die Sprachwahl ist eine eigene Folgeentscheidung.",
   "Richtig: Kommunikation muss neu entschieden werden, weil die Services nicht mehr im selben Prozess laufen. Protokolle und Muster der Interaktion sind eine typische Folgeentscheidung.",
   "Richtig: Jeder Service verwaltet typischerweise seine eigenen Daten. Daraus folgt die Entscheidung, wo und wie diese gehalten werden und wie sie zwischen Services konsistent bleiben.",
   "Falsch: Services kommunizieren weiterhin, und wie sie verteilt und betrieben werden, ist eine Folgeentscheidung.",
   "Richtig: Die Betriebskomplexität steigt mit der Zahl der Services und verlangt eigene Entscheidungen zu Organisation von Betrieb, Deployment und Monitoring.",
   "Falsch: Auch Folgeentscheidungen und ihre Abhängigkeiten sollten nachvollziehbar sein. Dass sie sich aus der ersten Entscheidung ergeben, ist kein Grund, sie nicht festzuhalten."
  ],
  "explanation": "Eine Microservice-Entscheidung erzwingt Folgeentscheidungen zu Kommunikation, Datenhaltung, Betrieb, Deployment und Monitoring. Abhängigkeiten zwischen Entscheidungen erkennt und dokumentiert man. Fallen: Folgen verneinen, eine feste Programmiersprache unterstellen oder den gemeinsamen Knoten als Ersatz für Kommunikation sehen."
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
   "Qualitätsmerkmale wie Sicherheit und Performanz lassen sich unabhängig voneinander maximieren.",
   "Qualitätsmodelle wie ISO 25010 gliedern Qualität in Qualitätsmerkmale.",
   "Die Veränderung einer Qualität kann andere beeinflussen, daher sind Abwägungen nötig.",
   "Qualität entsteht erst in der Implementierung; die Architektur hat darauf wenig Einfluss.",
   "Manche Kategorisierungen, etwa die des IREB, trennen Funktionalität und Qualität.",
   "In ISO 25010 gehört die Funktionalität nicht zum Qualitätsmodell."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Falsch: Qualitäten beeinflussen sich gegenseitig, etwa Sicherheit und Benutzbarkeit oder Leistungseffizienz und Speicherbedarf. Deshalb sind Abwägungen nötig.",
   "Richtig: Die Hauptkategorien eines Qualitätsmodells wie ISO 25010 heißen Qualitätsmerkmale. Sie gliedern den vagen Begriff Qualität in benennbare Eigenschaften.",
   "Richtig: Die Veränderung einer Qualität kann andere beeinflussen, daher sind Abwägungen nötig. Beispiele sind Sicherheit gegen Benutzbarkeit oder Leistungseffizienz gegen Speicherbedarf.",
   "Falsch: Architekturentscheidungen prägen die Qualitäten eines Systems wesentlich, etwa über Struktur und Querschnittskonzepte. Die Implementierung kann sie nur begrenzt nachträglich verändern.",
   "Richtig: Es gibt zwei Lesarten von Qualität, und die Trennung von Funktionalität und Qualität ist eine verbreitete, etwa in der Kategorisierung des IREB.",
   "Falsch: ISO 25010 führt Funktionale Eignung als eigenes Qualitätsmerkmal. Die Trennung von Funktionalität und Qualität gibt es nur in anderen Kategorisierungen wie der des IREB."
  ],
  "explanation": "Qualitätsmerkmale gliedern Qualität; manche Kategorisierungen trennen Funktionalität und Qualität, ISO 25010 rechnet sie dagegen mit ein. Qualitäten stehen in Wechselwirkung, und Architekt:innen beeinflussen sie. Fallen: unabhängige Maximierung, Qualität erst in der Implementierung."
 },
 {
  "id": "n18",
  "chapter": 5,
  "lz": "LZ 05-02",
  "r": "R1",
  "type": "multi",
  "q": "Ein Team wertet Antwortzeiten aus: Der Mittelwert liegt bei 0,8 s, einzelne Nutzer:innen warten aber regelmäßig mehr als 5 s. Welche Aussagen treffen zu?",
  "options": [
   "Die Messung zeigt, ob die Architektur die Ursache der langen Wartezeiten ist.",
   "Ein Szenario sollte ein Perzentil nennen, z. B. „95 % der Anfragen unter 1 s“.",
   "Der Mittelwert kann Ausreißer verdecken und so ein falsches Bild vermitteln.",
   "Das 95. Perzentil allein zeigt zuverlässig, ob die Architektur die Qualitätsanforderung insgesamt erfüllt.",
   "Neben dem Mittelwert sollten Perzentile betrachtet werden.",
   "Perzentile gehören in die Auswertung von Lasttests, nicht in die Formulierung von Szenarien."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Falsch: Die Messung zeigt, dass es langsame Anfragen gibt, nicht warum. Die Ursache, etwa Architektur, Datenbank oder Infrastruktur, klären erst weitere Analysen wie Profiling oder eine qualitative Bewertung.",
   "Richtig: Ein Szenario mit Perzentil wie „95 % der Anfragen unter 1 s“ macht die Anforderung überprüfbar und berücksichtigt auch langsame Fälle, die der Mittelwert nicht erfasst.",
   "Richtig: Wenige sehr langsame Anfragen fallen im Mittelwert kaum auf. Er kann Ausreißer verdecken und so ein falsches Bild vermitteln, wie hier bei 0,8 s Mittel und regelmäßigen Wartezeiten über 5 s.",
   "Falsch: Ein Perzentil beschreibt nur einen Ausschnitt der Verteilung, etwa die langsamsten 5 % bleiben unberücksichtigt. Ob die Anforderung insgesamt erfüllt ist, zeigt erst das Zusammenspiel mehrerer Messgrößen und Szenarien.",
   "Richtig: Perzentile zeigen, wie viele Anfragen eine Grenze überschreiten, und ergänzen den Mittelwert um die Verteilung. So werden die langsamen Fälle sichtbar.",
   "Falsch: Gerade Szenarien nennen häufig ein Perzentil, etwa „95 % der Anfragen unter 1 s“, weil sich so die Anforderung überprüfbar machen lässt und langsame Fälle nicht im Mittelwert untergehen."
  ],
  "explanation": "Neben dem Mittelwert betrachtet man Perzentile, weil der Mittelwert Ausreißer verbirgt; Szenarien nennen daher oft ein Perzentil. Fallen: Messung als Ursachenklärung, ein einzelnes Perzentil als Gesamtbeleg und Perzentile nur für Lasttests."
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
   "Fehlende Kommentare an öffentlichen Methoden.",
   "Eine Vermischung fachlicher und technischer Aspekte in einem Baustein.",
   "Abhängigkeiten, die der geplanten Schichtung entsprechen und in der Bausteinsicht dokumentiert sind.",
   "Zyklen oder ungewollte Abhängigkeiten zwischen Bausteinen.",
   "Ein Adapter-Baustein, der als einziger ein Fremdsystem anspricht.",
   "Ein hoher Fan-out, also viele ausgehende Abhängigkeiten eines Bausteins."
  ],
  "correct": [
   1,
   3,
   5
  ],
  "optExpl": [
   "Falsch: Fehlende Kommentare betreffen die Implementierung, nicht die Einhaltung von Struktur und Abhängigkeitsregeln der Architektur. Eine Konformitätsprüfung sucht nach Abweichungen vom Entwurf.",
   "Richtig: Eine Vermischung fachlicher und technischer Aspekte in einem Baustein deutet auf verletzte Trennungen hin und weicht vom beabsichtigten Entwurf ab.",
   "Falsch: Dokumentierte, regelkonforme Abhängigkeiten sind das Soll. Eine Konformitätsprüfung sucht Abweichungen von der Planung, nicht Übereinstimmungen.",
   "Richtig: Zyklen oder ungewollte Abhängigkeiten widersprechen typischen Abhängigkeitsregeln des Entwurfs. Sie sind klassische Befunde einer Konformitätsprüfung.",
   "Falsch: Genau das ist beabsichtigt: Die Anbindung ist an einer Stelle gekapselt. Das ist ein gewollter Zustand und kein Befund einer Konformitätsprüfung.",
   "Richtig: Ein hoher Fan-out, also viele ausgehende Abhängigkeiten eines Bausteins, bedeutet hohe Kopplung. Diese weist auf Probleme hin, weil der Baustein von vielen anderen abhängt und schwer änderbar wird."
  ],
  "explanation": "Typische Problemindikatoren sind Zyklen oder ungewollte Abhängigkeiten, vermischte fachliche und technische Aspekte und hohe Kopplung (Fan-out). Fallen: fehlende Kommentare, dokumentierte regelkonforme Abhängigkeiten oder ein gekapselter Adapter zeigen kein Problem an."
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
    "text": "Das Vorgehensmodell des Projekts (z. B. Scrum oder Wasserfall) festlegen.",
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
   "Welches Vorgehensmodell ein Projekt nutzt, entscheidet die Projekt- bzw. Organisationsebene. Architektur muss mit dem Modell zurechtkommen, legt es aber nicht fest, daher außerhalb ihrer Reichweite.",
   "Gute Strukturierung hält Komplexität beherrschbar und fördert das Verständnis aller Beteiligten. Das ist eine zentrale Leistung von Architektur und liegt in ihrer Reichweite.",
   "Welche Features und Qualitätsanforderungen gewünscht sind, legen die Stakeholder fest. Architektur setzt sie um und entscheidet sie nicht selbst, daher außerhalb ihrer Reichweite.",
   "Architektur gibt Richtlinien vor, an denen sich die Entwicklung orientiert, und lenkt sie so. Das ist ein Mittel, das ihr zur Verfügung steht, deshalb kann sie es leisten."
  ],
  "explanation": "Architektur schafft die strukturellen Voraussetzungen für Funktion und Qualität, hält Komplexität beherrschbar, fördert Verständnis und gibt Richtlinien vor. Das Vorgehensmodell und die Festlegung der Features liegen außerhalb ihrer Reichweite."
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
    "text": "Der Entwurf geht von einer Verfügbarkeit des Partnerdienstes von 99,9 % aus.",
    "cat": 0
   },
   {
    "text": "Das Unternehmen schreibt PostgreSQL als Datenbank vor.",
    "cat": 1
   },
   {
    "text": "Der Entwurf setzt voraus, dass die Nutzer:innen schnelle Verbindungen haben.",
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
   "Die Verfügbarkeit des Partnerdienstes wird im Entwurf unterstellt, ohne dass sie von außen vorgegeben oder belegt wäre. Ein unterstellter, nicht gesicherter Sachverhalt ist eine Annahme und sollte geprüft werden.",
   "Dass das Unternehmen PostgreSQL vorschreibt, ist eine Vorgabe von außen. Sie ist gegeben und schränkt den Lösungsraum ein, daher eine Randbedingung und keine Annahme.",
   "Schnelle Verbindungen der Nutzer:innen werden vom Entwurf vorausgesetzt, nicht aber von außen vorgegeben oder belegt. Das ist ein unterstellter, nicht gesicherter Sachverhalt und damit eine Annahme.",
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
    "text": "Physisches Datenbankschema mit Indizes und Partitionierung.",
    "cat": 1
   },
   {
    "text": "Welche Geschäftsobjekte (z. B. Police, Tarif) es gibt und wie sie zusammenhängen.",
    "cat": 0
   },
   {
    "text": "Welche Abläufe von der Antragstellung bis zur Policierung das System unterstützen soll.",
    "cat": 0
   },
   {
    "text": "Die Wahl einer Schichtenarchitektur im Hinblick auf Änderbarkeit.",
    "cat": 1
   },
   {
    "text": "Mit welchen fachlichen Akteuren und Nachbarsystemen das System Leistungen austauscht.",
    "cat": 0
   },
   {
    "text": "Die Festlegung der Betriebsumgebung (Container, Cluster).",
    "cat": 1
   }
  ],
  "rowExpl": [
   "Technisch: Indizes und Partitionierung sind Realisierungsentscheidungen. Das fachliche Datenmodell wäre dagegen fachlich.",
   "Fachlich: Das ist das Fachmodell der Domäne, unabhängig von der technischen Realisierung.",
   "Fachlich: Es geht um den Nutzen aus Sicht der Domäne (was soll das System leisten).",
   "Technisch: Ein Architekturmuster ist eine Entscheidung zur technischen Realisierung und richtet sich nach Qualitätsanforderungen.",
   "Fachlich: Der Fachkontext beschreibt die Beziehungen zur Domäne, nicht die Technik der Anbindung.",
   "Technisch: Deployment und Betrieb gehören zur technischen Realisierung."
  ],
  "explanation": "Fachliche Architektur: was das System aus Sicht der Domäne leistet (Fachkontext, Fachmodell, fachliche Datenmodelle). Technische Architektur: wie es realisiert wird (Muster, Datenbank, Deployment). Falle: fachliches vs. physisches Datenmodell."
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
    "text": "Eine Iteration ist erst abgeschlossen, wenn der Entwurf vollständig und fehlerfrei vorliegt.",
    "cat": 1
   },
   {
    "text": "Iterationen senken das Risiko, weil Annahmen früh überprüft werden.",
    "cat": 0
   },
   {
    "text": "Prototypen und Reviews sind systematische Wege, Annahmen früh zu überprüfen und Feedback zu holen.",
    "cat": 0
   },
   {
    "text": "Feedback ist von mehreren Seiten sinnvoll, etwa von Stakeholdern, Entwicklungsteam und Betrieb.",
    "cat": 0
   },
   {
    "text": "Wer iterativ entwirft, kann die Klärung der wichtigsten Qualitätsanforderungen auf spätere Iterationen verschieben.",
    "cat": 1
   }
  ],
  "rowExpl": [
   "Das ist falsch. Eine Iteration liefert bewusst einen Zwischenstand, der überprüft und in der nächsten Runde verfeinert wird; Vollständigkeit ist nicht ihr Maß.",
   "Das ist richtig. Früh gewonnene Fakten ersetzen Vermutungen, bevor teure Entscheidungen verfestigt sind.",
   "Das ist richtig. Beide machen Annahmen prüfbar, bevor sie sich im ganzen System auswirken.",
   "Das ist richtig. Jede Gruppe sieht andere Probleme der Architektur; Feedback von nur einer Seite lässt Risiken unentdeckt.",
   "Das ist falsch. Iteratives Vorgehen ersetzt keine Anforderungsklärung; die wichtigsten Qualitätsanforderungen treiben die ersten Entwurfsentscheidungen und sollten früh feststehen."
  ],
  "explanation": "Iterationen und Feedback liefern früh Fakten und senken Risiken. Sie ersetzen weder die frühe Klärung der wichtigsten Anforderungen noch verlangen sie einen vollständigen Entwurf je Runde."
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
    "text": "Eine korrekte Dokumentation beschreibt jeden Baustein bis zur untersten Ebene.",
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
   "Korrektheit heißt, dass die Dokumentation mit dem System übereinstimmt, nicht dass sie jede Ebene abdeckt. Die Aussage ist falsch.",
   "Form, Inhalt und Detailgrad richten sich nach der Zielgruppe, weil unterschiedliche Leser:innen Unterschiedliches brauchen. Die Aussage ist deshalb richtig.",
   "Angemessen bedeutet, nur so viel zu dokumentieren wie nötig. Das passt zum Qualitätsmerkmal Angemessenheit, deshalb ist die Aussage richtig.",
   "Der Autor kennt das System zu gut, um die Verständlichkeit für andere zu beurteilen. Das kann die Zielgruppe am besten, deshalb ist die Aussage falsch."
  ],
  "explanation": "Gute Dokumentation ist verständlich (beurteilt von der Zielgruppe), korrekt, effizient, angemessen und wartbar. Korrektheit heißt Übereinstimmung mit dem System, nicht Detailtiefe; Form, Inhalt und Detailgrad richten sich an der Zielgruppe aus."
 }
];
