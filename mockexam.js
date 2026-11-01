const MOCKEXAM = {
 "documentVersion": "2026.2",
 "date": "2026-03-27",
 "curriculum": "2025.1-rev2",
 "source": "iSAQB® e. V. — CPSA-F® Beispielprüfung",
 "url": "https://public.isaqb.org/foundation-exam-questions/mock-de.pdf",
 "durationMin": 75,
 "passPct": 60,
 "maxPoints": 52,
 "questions": [
  {
   "id": "Q-20-04-01",
   "chapter": 1,
   "lz": "LZ 01-01",
   "type": "single",
   "points": 1,
   "q": "Wie viele Definitionen des Begriffes \"Softwarearchitektur\" gibt es?",
   "q_en": "How many definitions of “software architecture” exist?",
   "options": [
    "Genau eine für alle Arten von Systemen.",
    "Eine für jede Art von Softwaresystem (z. B. \"eingebettet\",\"Echtzeit\", \"Entscheidungsunterstützung\", \"Web\", \"Batch\", …).",
    "Ein Dutzend oder mehr unterschiedliche Definitionen."
   ],
   "options_en": [
    "Exactly one for all kinds of systems.",
    "One for every kind of software system (e.g. “embedded”, “real-time”, “decision support”, “web”, “batch”, …).",
    "A dozen ore more different definitions."
   ],
   "correct": [
    2
   ],
   "explanation": "Die Vielfalt der Definitionen von Softwarearchitektur resultiert unter anderem aus unterschiedlichen Perspektiven, Zielgruppen und Entwicklungsmethoden.",
   "explanation_en": "The variety of definitions of software architecture results, among other things, from different perspectives, target groups and development methods."
  },
  {
   "id": "Q-20-04-02",
   "chapter": 1,
   "lz": "LZ 01-01",
   "type": "multi",
   "points": 1,
   "q": "Welche der folgenden Aspekte werden durch den Begriff „Softwarearchitektur“ abgedeckt?",
   "q_en": "Which of the following aspects are covered by the term “software architecture”?",
   "options": [
    "Komponenten",
    "Querschnittskonzepte",
    "(interne und externe) Schnittstellen",
    "Programmierkonventionen (\"coding conventions\")",
    "Hardware-Sizing"
   ],
   "options_en": [
    "Components",
    "Cross-cutting concepts",
    "(internal and external) Interfaces",
    "Coding conventions",
    "Hardware sizing"
   ],
   "correct": [
    0,
    1,
    2
   ],
   "explanation": "Programmierkonventionen und Hardware-Sizing sind in der Regel keine Hauptbestandteile der Softwarearchitektur, da die Architektur sich auf die logische Struktur des Systems konzentriert, während diese Aspekte eher auf der Implementierungsebene und den Ressourcenanforderungen liegen.",
   "explanation_en": "Coding conventions and hardware sizing are usually not major components of software architecture, since architecture focuses on the logical structure of the system, while these aspects are more at the implementation level and resource requirements."
  },
  {
   "id": "Q-17-13-01",
   "chapter": 3,
   "lz": "LZ 03-10",
   "type": "multi",
   "points": 2,
   "q": "Welche VIER der folgenden Aussagen zu (Querschnitts-) Konzepten sind am zutreffendsten?",
   "q_en": "Which FOUR of the following statements about (crosscutting) concepts are most appropriate?",
   "options": [
    "Durch die einheitliche Verwendung von Konzepten wird die Kopplung zwischen Bausteinen verringert.",
    "Durch die Definition von geeigneten Konzepten wird die Mustertreue der Architektur sichergestellt.",
    "Eine einheitliche Ausnahmebehandlung (Exception Handling) kann man gut erreichen, indem die Architekt:innen mit den Entwickler:innen vor der Implementierung ein geeignetes Konzept vereinbaren.",
    "Für jedes Qualitätsziel sollte es ein explizit dokumentiertes Konzept geben.",
    "Konzepte sind ein Mittel zur Erhöhung der Konsistenz.",
    "Ein Konzept kann Einschränkungen für die Umsetzung vieler Bausteine definieren.",
    "Ein Konzept kann durch einen einzigen Baustein umgesetzt werden."
   ],
   "options_en": [
    "Uniform usage of concepts reduces coupling between building blocks.",
    "The definition of appropriate concepts ensures the pattern compliance of the architecture.",
    "Uniform exception handling can be achieved when architects agree with developers upon a suitable concept prior to implementation.",
    "For each quality goal there should be an explicitly documented concept.",
    "Concepts are a means to increase consistency.",
    "A concept can define constraints for the implementation of many building blocks.",
    "A concept might be implemented by a single building block."
   ],
   "correct": [
    2,
    4,
    5,
    6
   ],
   "explanation": "A) Die einheitliche Verwendung von Konzepten verringert nicht unbedingt die Kopplung. Sie kann die Kopplung sogar erhöhen, wenn mehrere Bausteine das gleiche Konzept verwenden. (B) Konzepte fördern in der Regel die Konsistenz, können aber nicht die Einhaltung von Architekturmustern garantieren. \"Mustertreue\" ist ein frei erfundener Begriff, der wie etwas Wünschenswertes klingt, aber im iSAQB-Lehrplan nicht einmal erwähnt wird. (C) Die Abstimmung zu wichtigen Konzepten wie z. B. für die Fehlerbehandlung vor der Implementierung sorgt für Einheitlichkeit und Wartbarkeit und sollte generell als gute Praxis angesehen werden. (D) Auch wenn es Konzepte für ausgewählte Qualitätsziele geben kann, ist nicht für jedes Qualitätsziel ein eigenes Konzept erforderlich. Diese können auf verschiedene Weise berücksichtigt werden. (E) Der Hauptzweck der Verwendung von Querschnittskonzepten in der Softwarearchitektur besteht darin, die Konsistenz zwischen den verschiedenen Teilen des Systems sicherzustellen. Wenn Konzepte wie Logging, Fehlerbehandlung oder Datenzugriffsmuster einheitlich angewandt werden, tragen sie dazu bei, dass im gesamten System ein einheitlicher Lösungsansatz verwendet wird. (F) Ein übergreifendes Konzept legt oft bestimmte Beschränkungen fest, die mehrere Bausteine betreffen. Ein Sicherheitskonzept kann zum Beispiel festlegen, dass alle Datenzugriffsmethoden Authentifizierungsprüfungen beinhalten müssen, und damit die Art und Weise, wie diese Methoden im gesamten System implementiert werden, einschränken. (G) Während viele übergreifende Konzepte mehrere Bausteine betreffen, können einige Konzepte vollständig in einem einzigen Baustein gekapselt sein. So könnte z. B. eine bestimmte Utility-Klasse, die für die Verschlüsselung zuständig ist, die Umsetzung eines Sicherheitskonzepts innerhalb eines einzigen Bausteins darstellen.",
   "explanation_en": "(A) Uniform usage of concepts does not necessarily reduce coupling. It might even increase coupling if multiple building blocks rely on the same concept. (B) Concepts usually promote consistency but can not guarantee compliance with architectural patterns. Also note, that \"pattern compliance\" is a totally made up thing that sounds like something desireable. It is not even mentioned in the iSAQB curriculum. (C) Agreeing on concepts like exception handling before implementation ensures uniformity and maintainability and should generally be considered a good practice. (D) While there might be concepts to address selected quality goals, not every quality goal requires a dedicated concept. They can be addressed in various ways. (E) The primary purposes of using crosscutting concepts in software architecture is to ensure consistency across different parts of the system. For example, concepts like logging, error handling, or data access patterns, when uniformly applied, help maintain a consistent approach throughout the system. (F) A crosscutting concept often imposes certain constraints that affect multiple building blocks. For instance, a security concept might define that all data access methods must include authentication checks, thus constraining the way those methods are implemented across the system. (G) While many crosscutting concepts affect multiple building blocks, some concepts might be fully encapsulated within a single building block. For example, a specific utility class that handles encryption could represent the implementation of a security concept within a single building block."
  },
  {
   "id": "Q-17-13-02",
   "chapter": 4,
   "lz": "LZ 04-02",
   "type": "k",
   "points": 1,
   "q": "Bei Ihrem Projekt arbeiten drei Architekt:innen und sieben Entwickler:innen an der Dokumentation der Softwarearchitektur. Welche Methoden eignen sich zur Gewährleistung einer konsistenten und zweckmäßigen Dokumentation und welche nicht?",
   "q_en": "In your project, three architects and seven developers are working on the documentation of the software architecture. Which methods are appropriate in order to achieve a consistent and adequate documentation, and which are not?",
   "categories": [
    "Geeignet",
    "Nicht geeignet"
   ],
   "categories_en": [
    "appropriate",
    "not appropriate"
   ],
   "rows": [
    {
     "text": "Die/der leitende Architekt:in koordiniert die Erstellung der Dokumentation.",
     "text_en": "The lead architect coordinates the creation of the documentation.",
     "cat": 0
    },
    {
     "text": "Für die Dokumentation werden identische Vorlagen verwendet.",
     "text_en": "Identical templates are used for the documentation.",
     "cat": 0
    },
    {
     "text": "Alle Teile der Dokumentation werden automatisch aus dem Quellcode extrahiert.",
     "text_en": "All parts of the documentation are automatically extracted from the source code.",
     "cat": 1
    }
   ],
   "explanation": "Um eine konsistente und zweckmäßige Dokumentation sicherzustellen, eignet sich die Koordination durch die leitende Architekt:in sowie die Verwendung identischer Vorlagen. Die automatische Extraktion aller Teile der Dokumentation aus dem Quellcode ist weniger empfehlenswert, da dies möglicherweise nicht alle relevanten Informationen oder Kontexte berücksichtigt und die Qualität der Dokumentation beeinträchtigen kann. Aspekte wie Begründungen oder Alternativen sind nicht im Code enthalten, sondern müssen in die Dokumentation aufgenommen werden, daher können nicht alle Teile der Dokumentation aus dem Quellcode extrahiert werden.",
   "explanation_en": "To ensure consistent and useful documentation, coordination by the lead architect and the use of identical templates are recommended. Automatic extraction of all parts of the documentation from the source code is less recommended, as this may not include all relevant information or contexts and may affect the quality of the documentation. Things like reasoning or alternatives won’t be contained in code, but need to be included in documentation, therefore not all parts of documentation can be extracted from source code."
  },
  {
   "id": "Q-17-13-03",
   "chapter": 4,
   "lz": "LZ 04-05",
   "type": "multi",
   "points": 2,
   "q": "Welche der folgenden Techniken sind am besten zur Darstellung von Abläufen oder Laufzeitverhalten geeignet?",
   "q_en": "Which of the following techniques are best suited to illustrate the workflow or behavior of the system at runtime?",
   "options": [
    "Flussdiagramme",
    "Aktivitätsdiagramme",
    "Darstellung von Screenflows (Abfolge von Benutzerinteraktionen)",
    "Sequenzdiagramm",
    "Lineares Venn-Diagramm",
    "Nummerierte Liste aufeinanderfolgender Schritte",
    "Tabellarische Schnittstellenbeschreibung",
    "Klassendiagramme"
   ],
   "options_en": [
    "Flowcharts",
    "Activity Diagrams",
    "Depiction of screen flows (sequence of user interactions)",
    "Sequence diagram",
    "Linear Venn diagram",
    "Numbered list of sequential steps",
    "Tabular description of interfaces",
    "Class diagrams"
   ],
   "correct": [
    0,
    1,
    3,
    5
   ],
   "explanation": "Flussdiagramme, Aktivitätsdiagramme, Sequenzdiagramme und nummerierte Listen von aufeinanderfolgenden Schritten eignen sich am besten zur Veranschaulichung von Prozessabläufen oder des Systemverhaltens zur Laufzeit, da sie den Kontrollfluss, die Abläufe und die Interaktionen zwischen den Komponenten im Zeitverlauf klar darstellen. Im Gegensatz dazu sind Optionen wie Screenflows, Venn-Diagramme, tabellarische Beschreibungen von Schnittstellen und Klassendiagramme für diesen Zweck weniger oder nicht geeignet, da sie auf Benutzerinteraktionen, logische Beziehungen, statische Strukturen oder Schnittstellendetails fokussieren und nicht auf dynamisches Verhalten.",
   "explanation_en": "Flowcharts, activity diagrams, sequence diagrams, and numbered lists of sequential steps are best suited to illustrate system workflow or behavior at runtime because they clearly depict the flow of control, operations, and interactions between components over time. In contrast, options like screen flows, Venn diagrams, tabular descriptions of interfaces, and class diagrams are not appropriate for this purpose as they focus on user interactions, logical relationships, static structure, or interface details rather than dynamic behavior."
  },
  {
   "id": "Q-17-13-04",
   "chapter": 5,
   "lz": "LZ 05-02",
   "type": "multi",
   "points": 1,
   "q": "Welche der folgenden Grundsätze gelten für das Testen?",
   "q_en": "Which of the following principles apply to testing?",
   "options": [
    "Im Allgemeinen ist es nicht möglich, sämtliche Fehler eines Systems zu finden.",
    "Bei Komponenten mit vielen bekannten vorherigen Fehlern sind die Chancen für zusätzliche Fehler hoch.",
    "Durch ausreichendes Testen kann aufgezeigt werden, dass ein Programm fehlerfrei ist.",
    "Durch Testen kann nur die Existenz von Fehlern aufgezeigt werden, nicht jedoch ihre Abwesenheit.",
    "Die funktionale Programmierung erlaubt keine automatisierten Tests."
   ],
   "options_en": [
    "In general, it is not possible to discover all errors in the system.",
    "In components with many known previous errors, the chances for additional errors are high.",
    "Sufficient testing can show that a program is free of errors.",
    "Testing shows the existence of errors rather than the absence of errors.",
    "Functional programming does not allow automated testing."
   ],
   "correct": [
    0,
    1,
    3
   ],
   "explanation": "Grundsätzlich wird es als unmöglich angesehen, alle Fehler in einem nicht-trivialen System zu finden. Komponenten, die in der Vergangenheit viele Fehler beinhaltet haben, weisen wahrscheinlich zusätzliche Fehler auf. Das liegt oft daran, dass diese besonders komplex oder schlecht verständlich sind oder dass Architekturprobleme existieren, die zu häufigen Änderungen durch verschiedene Personen führen (z. B. unzureichende SoC oder ungeeignete Abstraktionen). Beim Testen geht es in erster Linie darum, das Vorhandensein von Fehlern aufzudecken und nicht darum, deren Abwesenheit zu beweisen. Entgegen mancher Fehlannahmen kann ausreichendes Testen nicht garantieren, dass ein Programm fehlerfrei ist. Funktionale Programmierung unterstützt tatsächlich automatisierte Tests.",
   "explanation_en": "Testing principles acknowledge that it’s generally impossible to find all errors in a system. Components with a history of many errors are likely to have additional faults. This is often because these areas may be particularly complex or poorly understood or can be caused by architectural issues leading to frequent changes by different people (e.g. insufficient SoC or inappropriate abstractions). Testing primarily reveals the presence of errors rather than proving their absence. Contrary to some misconceptions, sufficient testing cannot guarantee a program is error-free, and functional programming indeed supports automated testing."
  },
  {
   "id": "Q-17-13-05",
   "chapter": 3,
   "lz": "LZ 03-04",
   "type": "k",
   "points": 2,
   "q": "Welche der folgenden Aussagen zum Entwurfsprinzip \"Information Hiding\" sind richtig und welche falsch?",
   "q_en": "Which of the following statements regarding the information hiding principle are true and which are false?",
   "categories": [
    "Richtig",
    "Falsch"
   ],
   "categories_en": [
    "true",
    "false"
   ],
   "rows": [
    {
     "text": "Durch die Befolgung des Prinzips \"Information Hiding\" wird die Flexibilität für Änderungen erhöht.",
     "text_en": "Adhering to the information hiding principle increases flexibility for modifications.",
     "cat": 0
    },
    {
     "text": "Beim Information Hiding werden absichtlich Informationen vor Aufrufern oder Konsumenten des Bausteins verborgen.",
     "text_en": "Information hiding involves deliberately hiding information from callers or consumers of the building block.",
     "cat": 0
    },
    {
     "text": "Information Hiding erschwert das Bottom-Up Vorgehen.",
     "text_en": "Information hiding makes it harder to work bottom-up.",
     "cat": 1
    },
    {
     "text": "Information Hiding ist abgeleitet vom Ansatz der inkrementellen Verfeinerung entlang des Kontrollflusses.",
     "text_en": "Information hiding is a derivative of the approach of incremental refinement along the control flow.",
     "cat": 1
    }
   ],
   "explanation": "Information Hiding erhöht die Flexibilität bei Änderungen, indem es interne Details kapselt und so Änderungen innerhalb einer Komponente ermöglicht, ohne den Rest des Systems zu beeinträchtigen. Dabei wird der Zugriff auf interne Details für Aufrufer bewusst eingeschränkt, was die Modularität fördert und Abhängigkeiten reduziert. Entgegen der Behauptung, dass Information Hiding die Bottom-up-Entwicklung erschwert, kann es solche Ansätze ggfs. sogar unterstützen, indem es Entwicklern ermöglicht, isoliert an einzelnen Komponenten zu arbeiten. Die letzte Option ist falsch und irreführend. Sie hat nichts mit inkrementeller Verfeinerung zu tun und scheint eine erfundene oder irrelevante Idee zu sein.",
   "explanation_en": "Information hiding increases flexibility for modifications by encapsulating internal details, allowing changes within a component without affecting the rest of the system. It involves deliberately restricting access to internal details from callers, promoting modularity and reducing dependencies. Contrary to the claim that information hiding makes bottom-up development harder, it actually might supports such approaches by enabling developers to work on individual components in isolation. The last option is incorrect and misleading, as it is not related to incremental refinement and appears to be a fabricated or irrelevant idea."
  },
  {
   "id": "Q-20-04-03",
   "chapter": 1,
   "lz": "LZ 01-02",
   "type": "multi",
   "points": 1,
   "q": "Was sind die wichtigsten Ziele von Softwarearchitektur?",
   "q_en": "What are the most important goals of software architecture?",
   "options": [
    "Verbesserung der Genauigkeit von Mustern in Struktur und Implementierung.",
    "Erreichung der Qualitätsanforderungen auf nachvollziehbare Weise.",
    "Ermöglichung von kosteneffizienten Integrations- und Abnahmetests des Systems.",
    "Ermöglichung eines grundlegenden Verständnisses der Strukturen und Konzepte für das Entwicklungsteam und andere Beteiligte."
   ],
   "options_en": [
    "Improve accuracy of patterns in structure and implementation.",
    "Achieve quality requirements in a comprehensible way.",
    "Enable cost-effective integration and acceptance tests of the system.",
    "Enable a basic understanding of structures and concepts for the development team and other stakeholders."
   ],
   "correct": [
    1,
    3
   ],
   "explanation": "Die zwei Hauptziele der Softwarearchitektur sind die nachvollziehbare Erfüllung von Qualitätsanforderungen und die Schaffung eines gemeinsamen Verständnisses der Systemstruktur für alle Beteiligten. Die anderen Optionen sind zwar auch wichtig, stellen aber keine Hauptziele der Architektur dar. Die Verbesserung von Mustern ist ein Mittel zum Zweck, nicht ein Hauptziel, und effiziente Tests sind eher eine Folge guter Architektur als ein primäres Ziel.",
   "explanation_en": "The two main goals of software architecture are achieving quality requirements in a traceable way and creating a shared understanding of system structure for all stakeholders. While the other options are important, they don't represent primary architectural goals. Improving patterns is a means to an end, not a main goal, and efficient testing is more a consequence of good architecture rather than a primary objective."
  },
  {
   "id": "Q-20-04-12",
   "chapter": 3,
   "lz": "LZ 03-01",
   "type": "k",
   "points": 1,
   "q": "Stellen Sie sich vor, Sie sind Softwarearchitekt:in für eine große und verteilte Geschäftsanwendung im Banken- oder Versicherungsbereich. Welche der folgenden Aussagen sind für diese Situation richtig und welche falsch?",
   "q_en": "Put yourself in the position of a software architect for a large, distributed business application in the banking or insurance domain. Which of the following statements is true and which is false?",
   "categories": [
    "Richtig",
    "Falsch"
   ],
   "categories_en": [
    "true",
    "false"
   ],
   "rows": [
    {
     "text": "Die Architektur sollte so aufgebaut sein, dass häufig vorkommende Änderungen an den entsprechenden Geschäftsprozessen ohne umfangreiche Umstrukturierungen der Softwarearchitektur möglich sind.",
     "text_en": "The architect collaborates with the stakeholders to determine where the requirements and constraints will change often (e.g., business processes, technologies), and designs the architecture such that changes can occur without requiring extensive restructuring of the software architecture.",
     "cat": 0
    },
    {
     "text": "Erforderliche Produktqualitäten sollten Ihre architektonischen Entscheidungen leiten.",
     "text_en": "Required product qualities should drive your architectural decisions.",
     "cat": 0
    },
    {
     "text": "Die Softwarearchitektur kann völlig unabhängig von Hardware und Infrastruktur entworfen werden.",
     "text_en": "The software architecture can be designed completely independent of the hardware and infrastructure.",
     "cat": 1
    }
   ],
   "explanation": "In großen verteilten Geschäftsanwendungen ist es essentiell, die Architektur so zu gestalten, dass sie flexibel auf häufige Änderungen reagieren kann. Die Qualitätsanforderungen des Produkts sind dabei wichtige Treiber für architektonische Entscheidungen. Die Architektur kann jedoch nicht völlig unabhängig von der Hardware und Infrastruktur entworfen werden, da diese wichtige Randbedingungen darstellen, die berücksichtigt werden müssen.",
   "explanation_en": "In large distributed business applications, it is essential to design the architecture so that it can flexibly accommodate frequent changes. The product's quality requirements are important drivers for architectural decisions. However, the architecture cannot be designed completely independently of hardware and infrastructure, as these represent important constraints that must be taken into account."
  },
  {
   "id": "Q-20-04-04",
   "chapter": 2,
   "lz": "LZ 02-02",
   "type": "multi",
   "points": 1,
   "q": "Was sind Ihre wichtigsten Verantwortlichkeiten als Softwarearchitekt:in in Bezug auf Anforderungen?",
   "q_en": "What are your most important responsibilities as a software architect with respect to requirements?",
   "options": [
    "Unterstützung der Fachexpert:innen dabei, Qualitätsanforderungen konkret und explizit zu formulieren.",
    "Hilfe bei der Identifizierung von neuen Geschäftsmöglichkeiten anhand Ihres technischen Know-hows.",
    "Ablehnung von Anforderungen, die technische Risiken enthalten.",
    "Umformulierung aller Geschäftsanforderungen, so dass sie für Ihr Entwicklungsteam verständlich sind.",
    "Überprüfung der Anforderungen auf technische Machbarkeit."
   ],
   "options_en": [
    "Support the business people to specify explicit and concrete quality requirements.",
    "Help to identify new business opportunities based on your technology know-how.",
    "Reject business requirements that contain technical risks.",
    "Capture all business requirements in a terminology that can be understood by your development team.",
    "Check requirements for technological feasibility."
   ],
   "correct": [
    0,
    1,
    4
   ],
   "explanation": "Die Hauptaufgaben von Softwarearchitekt:innen in Bezug auf Anforderungen sind: 1) Die Unterstützung bei der konkreten Formulierung von Qualitätsanforderungen, da diese oft zu vage definiert sind, 2) Die Nutzung des technischen Wissens, um neue Geschäftsmöglichkeiten zu identifizieren, und 3) Die Prüfung der technischen Machbarkeit. Es ist dabei nicht die Aufgabe, Anforderungen nur aufgrund technischer Risiken abzulehnen - diese Risiken sollten stattdessen kommuniziert und diskutiert werden. Auch die vollständige Umformulierung aller Geschäftsanforderungen ist nicht zielführend, da dies zu Informationsverlust oder Missverständnissen führen könnte.",
   "explanation_en": "The main responsibilities of software architects regarding requirements are: 1) Supporting the concrete formulation of quality requirements, as these are often defined too vaguely, 2) Using technical knowledge to identify new business opportunities, and 3) Checking technical feasibility. It is not their task to reject requirements just because they contain technical risks - instead, these risks should be communicated and discussed. Also, completely reformulating all business requirements is not purposeful as this could lead to loss of information or misunderstandings."
  },
  {
   "id": "Q-20-04-07",
   "chapter": 4,
   "lz": "LZ 04-01",
   "type": "multi",
   "points": 1,
   "q": "Sie sind als Architekt:in dafür zuständig, ein Altsystem entsprechend den laufenden Betriebsanforderungen am Laufen zu halten. Was sind Ihre wichtigsten Aufgaben?",
   "q_en": "You are responsible as an architect for keeping a legacy system up and running according to the ongoing requirements of your business. What are the most important action items on your agenda?",
   "options": [
    "Verhandlung des Wartungsbudgets für Ihr Team",
    "Sicherstellung einer aktuellen Dokumentation des ausgelieferten Systems",
    "Analyse der Auswirkungen von neuen Anforderungen auf das aktuelle System",
    "Ermunterung der Teammitglieder, neue Programmiersprachen zu lernen",
    "Ihren Vorgesetzten technologische Updates zusätzlich zu den Geschäftsanforderungen vorschlagen"
   ],
   "options_en": [
    "Negotiating the maintenance budget for your team",
    "Assuring up-to-date documentation of the deployed system",
    "Analyzing the impact of new requirements on the current system",
    "Encouraging the team members to learn new programming languages",
    "Suggesting technology updates in addition to the business requirements to your management"
   ],
   "correct": [
    1,
    2,
    4
   ],
   "explanation": "Bei der Wartung eines Altsystems sind die wichtigsten Aufgaben einer Architekt:in: 1) Die Dokumentation aktuell zu halten, um das Systemverständnis zu sichern, 2) Die Auswirkungen neuer Anforderungen sorgfältig zu analysieren, um unerwartete Seiteneffekte zu vermeiden, und 3) Proaktiv technologische Aktualisierungen vorzuschlagen, um technische Schulden zu reduzieren und das System zukunftsfähig zu halten. Die Ermutigung zum Lernen neuer Fähigkeiten ist zwar wichtig für die langfristige Entwicklung des Teams, hat aber weniger direkte Priorität für die unmittelbare Wartung des Systems. Budgetverhandlungen sind typischerweise Aufgabe des Projektmanagements.",
   "explanation_en": "When maintaining a legacy system, the most important tasks of an architect are: 1) Keeping documentation up-to-date to ensure system understanding, 2) Carefully analyzing the impact of new requirements to avoid unexpected side effects, and 3) Proactively suggesting technological updates to reduce technical debt and keep the system future-proof. While encouraging learning new skills is important for the team's long-term development, it has less immediate priority for system maintenance. Budget negotiations are typically the responsibility of project management."
  },
  {
   "id": "Q-21-05-01",
   "chapter": 4,
   "lz": "LZ 04-08",
   "type": "k",
   "points": 2,
   "q": "Welche der folgenden Aussagen zu Architekturentscheidungen sind wahr, welche falsch?",
   "q_en": "Which of the following statements regarding architecture decisions are true, which are false?",
   "categories": [
    "Wahr",
    "Falsch"
   ],
   "categories_en": [
    "true",
    "false"
   ],
   "rows": [
    {
     "text": "Architekturentscheidungen müssen nie aufgeschrieben werden, da diese bereits dem Entwicklungsteam bekannt sind.",
     "text_en": "Architecture decisions never need to be written down because they are already known to the development team.",
     "cat": 1
    },
    {
     "text": "Architecture Decision Records helfen dabei, Entscheidungen in ihrem Kontext nachzuvollziehen.",
     "text_en": "An architecture decision record helps to make the decision's context understood.",
     "cat": 0
    },
    {
     "text": "Nachdem man sich für ein zentrales Framework (z.B. Persistenzframework) entschieden hat, darf diese Entscheidung nicht mehr geändert werden.",
     "text_en": "Once a decision has been made on a central or fundamental framework (e.g. persistence framework), that decision must not be changed.",
     "cat": 1
    },
    {
     "text": "Qualitätsanforderungen helfen maßgeblich bei Architekturentscheidungen.",
     "text_en": "Quality requirements help significantly with architecture decisions.",
     "cat": 0
    }
   ],
   "explanation": "Architekturentscheidungen sollten dokumentiert werden, da das Team sich ändern kann und die Gründe für Entscheidungen über die Zeit vergessen werden können. ADRs (Architecture Decision Records) sind ein bewährtes Mittel, um den Kontext und die Begründung von Entscheidungen festzuhalten. Entscheidungen, auch zu grundlegenden Frameworks, können sich im Laufe der Zeit ändern, wenn sich die Anforderungen oder der Kontext ändern. Qualitätsanforderungen sind ein wichtiger Treiber für Architekturentscheidungen, da sie oft bestimmen, welche architektonischen Lösungen am besten geeignet sind.",
   "explanation_en": "Architecture decisions should be documented as team members may change and the reasons for decisions can be forgotten over time. ADRs (Architecture Decision Records) are a proven way to capture the context and rationale of decisions. Decisions, even about fundamental frameworks, can change over time as requirements or context evolve. Quality requirements are a key driver for architecture decisions as they often determine which architectural solutions are most appropriate."
  },
  {
   "id": "Q-20-04-09",
   "chapter": 3,
   "lz": "LZ 03-05",
   "type": "k",
   "points": 2,
   "q": "Geben Sie für jede der folgenden Aussagen an, ob sie richtig oder falsch ist.",
   "q_en": "Decide for each of the following statements whether it is true or false.",
   "categories": [
    "Richtig",
    "Falsch"
   ],
   "categories_en": [
    "true",
    "false"
   ],
   "rows": [
    {
     "text": "Jede Iteration eines agilen Entwicklungsvorgehens kann Auswirkungen auf architektonische Grundsatzentscheidungen haben.",
     "text_en": "Each iteration of an agile development approach could have an impact on the fundamental architecture decisions.",
     "cat": 0
    },
    {
     "text": "Der Gesamtaufwand für Architekturarbeit ist bei iterativen Projekten wesentlich höher als bei Wasserfall-Projekten.",
     "text_en": "The total effort spent on architectural work is much higher in iterative projects compared to waterfall projects.",
     "cat": 1
    },
    {
     "text": "Agile Projekte benötigen keine Architekturdokumente, da das Entwicklungsteam in täglichen Standup-Meetings Entscheidungen kommuniziert.",
     "text_en": "Agile projects do not need architecture documents since the development team uses daily standup-meetings to communicate decisions.",
     "cat": 1
    },
    {
     "text": "Wenn Ihr System aus einer Reihe von Microservices besteht, ist kein zentrales Architekturdokument erforderlich, da jeder Service seine Technologien auswählen kann.",
     "text_en": "If your systems consist of a set of microservices there is no need for a central architecture document since each service is free to choose its technologies.",
     "cat": 1
    }
   ],
   "explanation": "Die erste Aussage ist richtig, da iterative Entwicklung explizit darauf ausgelegt ist, Entscheidungen basierend auf Feedback und neuen Erkenntnissen anzupassen. Die anderen Aussagen sind falsch: Der Architekturaufwand hängt nicht vom Vorgehensmodell ab, agile Projekte benötigen sehr wohl Architekturdokumentation (wenn auch möglicherweise in anderer Form), und auch Microservice-Architekturen brauchen eine übergreifende Dokumentation der Gesamtarchitektur.",
   "explanation_en": "The first statement is true since iterative development is explicitly designed to adapt decisions based on feedback and new insights. The other statements are false: Architecture effort does not depend on the process model, agile projects do need architecture documentation (though possibly in a different form), and microservice architectures also need overarching documentation of the overall architecture."
  },
  {
   "id": "Q-20-04-10",
   "chapter": 2,
   "lz": "LZ 02-01",
   "type": "k",
   "points": 2,
   "q": "Geben Sie an, welche der folgenden Aussagen zu Projektzielen und Architekturzielen richtig und welche falsch sind.",
   "q_en": "Which of the following statements regarding project goals and architectural goals is true and which is false.",
   "categories": [
    "Richtig",
    "Falsch"
   ],
   "categories_en": [
    "true",
    "false"
   ],
   "rows": [
    {
     "text": "Projektziele können funktionale Anforderungen sowie Qualitätsanforderungen umfassen.",
     "text_en": "Project Goals can include functional requirements as well as quality requirements.",
     "cat": 0
    },
    {
     "text": "Architekturziele leiten sich von den Qualitätsanforderungen für das System oder Produkt ab.",
     "text_en": "Architectural goals are derived from the quality requirements for the system or product.",
     "cat": 0
    },
    {
     "text": "Stakeholder aus dem Business sollten sich auf Geschäftsziele konzentrieren und sich nicht mit Architekturzielen auseinandersetzen.",
     "text_en": "Business stakeholders should concentrate on business goals and not interfere with architectural goals.",
     "cat": 1
    },
    {
     "text": "Zur Vermeidung von Konflikten sollten Geschäfts- und Architekturziele einander nicht überlappen.",
     "text_en": "To avoid conflicts, business goals and architectural goals should be non-overlapping sets.",
     "cat": 1
    }
   ],
   "explanation": "Die erste Aussage ist richtig, da Projektziele natürlich sowohl funktionale als auch qualitative Aspekte umfassen können. Die zweite Aussage ist korrekt, weil Architekturziele typischerweise aus den Qualitätsanforderungen des Systems abgeleitet werden. Die dritte Aussage ist falsch, da Business-Stakeholder durchaus Ziele wie Performance, Flexibilität oder Sicherheit haben können, die als \"Architekturziele\" betrachtet werden. Die letzte Aussage ist ebenfalls falsch, da sich Geschäfts- und Architekturziele häufig überlappen können und sollten - wichtig ist nicht die strikte Trennung, sondern das gemeinsame Verständnis und die Abstimmung der Ziele.",
   "explanation_en": "The first statement is correct because project goals can naturally include both functional and quality aspects. The second statement is accurate as architectural goals are typically derived from the system's quality requirements. The third statement is false because business stakeholders might very well have goals like performance, flexibility or security, which are considered \"architecture goals\". The last statement is also false, as business and architecture goals can and should often overlap - what's important is not strict separation but mutual understanding and alignment of goals."
  },
  {
   "id": "Q-20-04-11",
   "chapter": 2,
   "lz": "LZ 02-05",
   "type": "multi",
   "points": 1,
   "q": "Was bedeutet die Regel „explizit, nicht implizit\" für die Architekturarbeit? Wählen Sie die passendsten Antworten aus.",
   "q_en": "What does the rule \"explicit, not implicit\" mean for architecture work? Choose the best-fitting answers.",
   "options": [
    "Architekt:innen sollten rekursive Strukturen vermeiden und durch explizite Schleifen ersetzen.",
    "Architekt:innen sollten die Annahmen, die zu Entscheidungen führen, explizit machen.",
    "Architekt:innen sollten explizit auf Erläuterungen (d.h. Kommentare) in natürlicher Sprache für jeden Baustein bestehen.",
    "Architekt:innen sollten explizit auf schriftlichen oder zumindest mündlichen Begründungen für Aufwandschätzungen der Entwicklung von ihrem Team bestehen.",
    "Architekt:innen sollten die Voraussetzungen für ihre Entscheidungen explizit darlegen."
   ],
   "options_en": [
    "Architects should avoid recursive structures and replace them by explicit loops.",
    "Architects should make the assumptions leading to decisions explicit.",
    "Architects should explicitly insist on natural language explanations (i.e. comments) for each building block.",
    "Architects should explicitly insist on written or at least verbal justifications for development effort estimates from their team.",
    "Architects should make prerequisites for their decisions explicit."
   ],
   "correct": [
    1,
    4
   ],
   "explanation": "Die Regel \"explizit, nicht implizit\" bezieht sich darauf, dass wichtige architektonische Überlegungen und Entscheidungen klar ausformuliert werden sollten. Dies umfasst sowohl die Annahmen, die zu Entscheidungen führen (Option B), als auch die Voraussetzungen für diese Entscheidungen (Option E). Die anderen Optionen beschreiben entweder technische Implementierungsdetails (A) oder übermäßig spezifische Dokumentationsanforderungen (C, D), die nicht den Kern des Prinzips treffen.",
   "explanation_en": "The rule \"explicit, not implicit\" refers to the need to clearly articulate important architectural considerations and decisions. This includes both the assumptions leading to decisions (option B) and the prerequisites for these decisions (option E). The other options either describe technical implementation details (A) or overly specific documentation requirements (C, D) that do not capture the essence of the principle."
  },
  {
   "id": "Q-20-04-32",
   "chapter": 3,
   "lz": "LZ 03-03",
   "type": "multi",
   "points": 1,
   "q": "Es gibt zahlreiche Ansätze, die zu einer Softwarearchitektur führen. Welche der folgenden Ansätze kommen in der Praxis am häufigsten vor?",
   "q_en": "There are many approaches that lead to a software architecture. Which of the following are the most often found in practice?",
   "options": [
    "User-Interface Driven Design",
    "Domain-driven Design",
    "Sichtenbasierte Architekturentwicklung",
    "Bottom-up Design",
    "Mehrheitsentscheid"
   ],
   "options_en": [
    "User interface driven design",
    "Domain driven design",
    "View based architecture development",
    "Bottom-up design",
    "Majority voting"
   ],
   "correct": [
    1,
    2,
    3
   ],
   "explanation": "Domain-driven Design, sichtenbasierte Architekturentwicklung und Bottom-up Design sind etablierte und häufig verwendete Ansätze in der Praxis. User-Interface Driven Design ist kein üblicher Architekturansatz, da die Benutzeroberfläche nur einen Aspekt des Systems darstellt und nicht als primärer Treiber für Architekturentscheidungen dienen sollte. Mehrheitsentscheid ist keine Methode zur Architekturentwicklung, sondern bestenfalls ein Entscheidungsfindungsprozess.",
   "explanation_en": "Domain-driven design, view-based architecture development and bottom-up design are established and frequently used approaches in practice. User interface driven design is not a common architectural approach since the user interface represents only one aspect of the system and should not serve as the primary driver for architectural decisions. Majority voting is not a method for architecture development, but at best a decision-making process."
  },
  {
   "id": "Q-20-04-38",
   "chapter": 4,
   "lz": "LZ 04-05",
   "type": "multi",
   "points": 1,
   "q": "Diverse Architekturentwicklungsmethoden schlagen einen sichtenbasierten Ansatz vor. Welche der folgenden Sichten werden am häufigsten verwendet?",
   "q_en": "Several architecture development methods suggest a view-based approach. Which of the following views are most often used?",
   "options": [
    "Physische Datenbanksicht",
    "Kontextsicht",
    "Bausteinsicht oder Komponentensicht",
    "Testbasierte Sicht",
    "Konfigurationssicht",
    "Laufzeitsicht"
   ],
   "options_en": [
    "Physical database view",
    "Context view",
    "Building Block/Component view",
    "Test-driven view",
    "Configuration view",
    "Runtime view"
   ],
   "correct": [
    1,
    2,
    5
   ],
   "explanation": "Die drei wichtigsten und am häufigsten verwendeten Architektursichten sind: 1. Die Kontextsicht, die das System in seiner Umgebung zeigt 2. Die Baustein-/Komponentensicht, die die internen Strukturen des Systems zeigt 3. Die Laufzeitsicht, die das dynamische Verhalten des Systems zeigt Die anderen genannten Sichten (Datenbank-, Test- und Konfigurationssicht) können zwar in bestimmten Projekten nützlich sein, gehören aber nicht zu den grundlegenden Architektursichten, die in den meisten Methoden verwendet werden.",
   "explanation_en": "The three most important and commonly used architectural views are: 1. The context view, showing the system in its environment 2. The building block/component view, showing the internal structures of the system 3. The runtime view, showing the dynamic behavior of the system While the other views mentioned (database, test, and configuration views) might be useful in certain projects, they are not among the fundamental architectural views used in most methods."
  },
  {
   "id": "Q-20-04-22",
   "chapter": 3,
   "lz": "LZ 03-02",
   "type": "multi",
   "points": 1,
   "q": "Sie dokumentieren einen Baustein einer Softwarearchitektur. Welche Informationen sollten in seiner Black-Box-Beschreibung enthalten sein?",
   "q_en": "When documenting a building block of your software architecture, what information should the black-box description contain?",
   "options": [
    "Öffentliche Schnittstellen.",
    "Verantwortlichkeiten des Bausteins.",
    "Interne Struktur des Bausteins.",
    "Spezifikation von Implementierungsdetails."
   ],
   "options_en": [
    "Public interfaces.",
    "Responsibility of the building block.",
    "Internal structure of the building block.",
    "Specification of the implementation details."
   ],
   "correct": [
    0,
    1
   ],
   "explanation": "Eine Black-Box-Beschreibung konzentriert sich ausschließlich auf die nach außen sichtbaren Aspekte eines Bausteins - also seine Schnittstellen und seine Verantwortlichkeiten. Die interne Struktur und Implementierungsdetails sind definitionsgemäß nicht Teil einer Black-Box-Beschreibung, da diese bewusst von den internen Details abstrahiert. Diese Details würden stattdessen in einer White-Box-Beschreibung behandelt werden.",
   "explanation_en": "A black-box description focuses exclusively on the externally visible aspects of a building block - its interfaces and responsibilities. By definition, internal structure and implementation details are not part of a black-box description, as it deliberately abstracts from internal details. These details would instead be covered in a white-box description."
  },
  {
   "id": "Q-20-04-17",
   "chapter": 2,
   "lz": "LZ 02-02",
   "type": "multi",
   "points": 1,
   "q": "Welche Voraussetzungen müssen vor der Entwicklung einer Softwarearchitektur erfüllt sein? Wählen Sie die passendsten Antworten aus.",
   "q_en": "Which prerequisites have to be fulfilled before developing a software architecture? Pick the most appropriate answers.",
   "options": [
    "Die Anforderungsspezifikation für das System ist vollständig, detailliert und konsistent.",
    "Die wichtigsten Qualitätsanforderungen an das System sind bekannt.",
    "Die organisatorischen Randbedingungen sind bekannt.",
    "Die Programmiersprache wurde ausgewählt.",
    "Die Hardware für das Entwicklungsteam ist verfügbar."
   ],
   "options_en": [
    "The requirements specification for the system is complete, detailed and consistent.",
    "The most important qualities for the system are known.",
    "Organizational constraints are known.",
    "The programming language has been selected.",
    "Hardware for the development team is available."
   ],
   "correct": [
    1,
    2
   ],
   "explanation": "Die wichtigsten Voraussetzungen für die Entwicklung einer Softwarearchitektur sind die Kenntnis der wesentlichen Qualitätsanforderungen und der organisatorischen Randbedingungen. Eine vollständige, detaillierte Anforderungsspezifikation ist in den meisten Fällen unrealistisch und auch nicht notwendig - oft reicht ein Überblick und die Kenntnis bestimmter Details (z.B. der Qualitätsanforderungen). Die Auswahl der Programmiersprache und die Verfügbarkeit der Hardware für das Entwicklungsteam sind eher technische Implementierungsdetails, die für die grundlegenden architektonischen Entscheidungen ggfs. noch nicht relevant sind. Diese Entscheidungen können und sollten oft erst nach den grundlegenden Architekturentscheidungen getroffen werden.",
   "explanation_en": "The most important prerequisites for developing a software architecture are knowledge of the essential quality requirements and organizational constraints. A complete, detailed requirements specification is unrealistic in most cases and not necessary - often an overview and knowledge of certain details (e.g. quality requirements) is sufficient. The choice of programming language and availability of hardware for the development team are rather technical implementation details that sometimes may be not yet relevant for fundamental architectural decisions. These decisions can and often should only be made after the fundamental architectural decisions."
  },
  {
   "id": "Q-20-04-18",
   "chapter": 2,
   "lz": "LZ 02-02",
   "type": "multi",
   "points": 1,
   "q": "Welche Faktoren können den Entwurf einer Softwarearchitektur beeinflussen? Wählen Sie die passendsten Antworten aus.",
   "q_en": "Which factors can influence the design of a software architecture? Pick the most appropriate answers.",
   "options": [
    "Politische.",
    "Organisatorische.",
    "Technische.",
    "Virtuelle."
   ],
   "options_en": [
    "Political.",
    "Organizational.",
    "Technical.",
    "Virtual."
   ],
   "correct": [
    0,
    1,
    2
   ],
   "explanation": "Politische, organisatorische und technische Faktoren haben direkten Einfluss auf den Entwurf einer Softwarearchitektur. Sie bilden wichtige Randbedingungen und können die Architekturentscheidungen maßgeblich beeinflussen. \"Virtuelle\" Faktoren hingegen sind ein erfundener Begriff ohne konkrete Bedeutung im Kontext von Softwarearchitektur.",
   "explanation_en": "Political, organizational and technical factors have a direct influence on software architecture design. They form important constraints and can significantly influence architectural decisions. \"Virtual\" factors, on the other hand, are a made-up term without concrete meaning in the context of software architecture."
  },
  {
   "id": "Q-20-04-19",
   "chapter": 3,
   "lz": "LZ 03-08",
   "type": "single",
   "points": 1,
   "q": "Welche der folgenden Eigenschaften lässt sich am ehesten durch eine Schichtenarchitektur verbessern?",
   "q_en": "Which of the following qualities can most likely be improved by using a layered architecture?",
   "options": [
    "Laufzeiteffizienz (Performance).",
    "Flexibilität bei der Modifizierung oder Änderung des Systems.",
    "Flexibilität bei der Laufzeit (Konfigurierbarkeit).",
    "Nichtabstreitbarkeit."
   ],
   "options_en": [
    "Runtime efficiency (performance).",
    "Flexibility in modifying or changing the system.",
    "Flexibility at runtime (configurability).",
    "Non-repudiability."
   ],
   "correct": [
    1
   ],
   "explanation": "Eine Schichtenarchitektur verbessert primär die Modifizierbarkeit und Wartbarkeit eines Systems, da Änderungen in einer Schicht die anderen Schichten nicht beeinflussen müssen, solange die Schnittstellen stabil bleiben. Die Schichtenarchitektur kann sich sogar negativ auf die Performance auswirken, da Aufrufe durch mehrere Schichten geleitet werden müssen. Konfigurierbarkeit zur Laufzeit und Nichtabstreitbarkeit sind keine primären Ziele der Schichtenarchitektur.",
   "explanation_en": "A layered architecture primarily improves the modifiability and maintainability of a system, as changes in one layer don't need to affect other layers as long as interfaces remain stable. The layered architecture might actually have a negative impact on performance since calls need to be routed through multiple layers. Runtime configurability and non-repudiability are not primary goals of the layered architecture."
  },
  {
   "id": "Q-20-04-33",
   "chapter": 3,
   "lz": "LZ 03-08",
   "type": "multi",
   "points": 1,
   "q": "Für welche Entwurfsprobleme bietet das Pipes & Filter Pattern Lösungsansätze?",
   "q_en": "Which type of problems provide a good fit for the Pipes & Filter Pattern?",
   "options": [
    "Verwaltung von globalem Anwendungszustand",
    "Strukturierung von IT-Systemen die Datenströme verarbeiten",
    "Entkopplung von Verarbeitungsschritten",
    "Entkopplung von zeitlichen Abhängigkeiten"
   ],
   "options_en": [
    "Management of global application state",
    "IT systems which process data streams",
    "Decoupling multiple steps of an execution",
    "Temporal decoupling of an application"
   ],
   "correct": [
    1,
    2
   ],
   "explanation": "Das Pipes & Filter Pattern eignet sich besonders für die Verarbeitung von Datenströmen und die Entkopplung von Verarbeitungsschritten. Die Filter arbeiten unabhängig voneinander und kommunizieren nur über die Pipes, was eine klare Trennung der Verarbeitungsschritte ermöglicht. Das Pattern ist jedoch nicht für die Verwaltung von globalem Zustand ausgelegt, da die Filter zustandslos sein sollten. Auch die zeitliche Entkopplung ist kein primäres Ziel des Patterns, da die Verarbeitung typischerweise sequentiell erfolgt.",
   "explanation_en": "The Pipes & Filter Pattern is particularly well-suited for processing data streams and decoupling processing steps. The filters work independently and communicate only through pipes, enabling a clear separation of processing steps. However, the pattern is not designed for managing global state, as filters should be stateless. Temporal decoupling is also not a primary goal of the pattern, as processing typically occurs sequentially."
  },
  {
   "id": "Q-20-04-20",
   "chapter": 3,
   "lz": "LZ 03-04",
   "type": "single",
   "points": 1,
   "q": "Welche Ziele versuchen Sie mit dem Dependency-Inversion-Prinzip zu erreichen?",
   "q_en": "Which goals are you trying to achieve with the dependency inversion principle?",
   "options": [
    "Große Bausteine sollen nicht von kleinen Bausteinen abhängen.",
    "Komponenten sollen in der Lage sein, abhängige Komponenten leichter zu erstellen.",
    "Bausteine sollen nur über Abstraktionen voneinander abhängen."
   ],
   "options_en": [
    "Big building blocks shall not depend on small building blocks.",
    "Components shall be able to create dependent components more easily.",
    "Building blocks shall only depend on each other via abstractions."
   ],
   "correct": [
    2
   ],
   "explanation": "Das Dependency-Inversion-Prinzip zielt darauf ab, dass Bausteine nur über Abstraktionen (wie Schnittstellen oder abstrakte Klassen) voneinander abhängen sollten, nicht über konkrete Implementierungen. Die Größe der Bausteine spielt dabei keine Rolle - es geht nicht um die Richtung der Abhängigkeiten von groß nach klein. Die einfachere Erstellung von Komponenten ist ebenfalls kein Hauptziel des Prinzips, auch wenn dies manchmal ein positiver Nebeneffekt sein kann.",
   "explanation_en": "The Dependency Inversion Principle aims to ensure that building blocks only depend on each other through abstractions (such as interfaces or abstract classes), not through concrete implementations. The size of the building blocks is irrelevant - it's not about the direction of dependencies from large to small. Easier creation of components is also not a main goal of the principle, even though this might sometimes be a positive side effect."
  },
  {
   "id": "Q-20-04-21",
   "chapter": 3,
   "lz": "LZ 03-06",
   "type": "k",
   "points": 2,
   "q": "Was sind die Eigenschaften von enger (hoher) bzw. loser (niedriger) Kopplung?",
   "q_en": "What are characteristics of tight (high) or loose (low) coupling?",
   "categories": [
    "enge Kopplung",
    "lose Kopplung"
   ],
   "categories_en": [
    "tight coupling",
    "loose coupling"
   ],
   "rows": [
    {
     "text": "Bausteine können abhängige Bausteine direkt, d.h. ohne Umwege über Schnittstellen oder Abstraktionen, aufrufen.",
     "text_en": "Building blocks directly call dependent building blocks, i.e., without using indirect calls via interfaces or abstractions.",
     "cat": 0
    },
    {
     "text": "Bausteine verwenden gemeinsame komplexe Datenstrukturen.",
     "text_en": "Building blocks use shared complex data structures.",
     "cat": 0
    },
    {
     "text": "Bausteine verwenden eine gemeinsame Tabelle (für Schreib- und Leseoperationen) innerhalb einer relationalen Datenbank.",
     "text_en": "Building blocks use a shared table (for read- and write operations) within a relational database.",
     "cat": 0
    },
    {
     "text": "Beim Baustein-Design haben Sie das Dependency-Inversion-Prinzip konsequent umgesetzt.",
     "text_en": "When designing building blocks, you have consistently applied the dependency inversion principle.",
     "cat": 1
    }
   ],
   "explanation": "Enge Kopplung entsteht durch direkte Abhängigkeiten zwischen Bausteinen, gemeinsam genutzte komplexe Datenstrukturen und gemeinsam genutzte Ressourcen wie Datenbanktabellen. Diese Art der Kopplung macht das System schwerer zu ändern und zu warten. Lose Kopplung wird durch die Anwendung von Prinzipien wie dem Dependency-Inversion-Prinzip erreicht, bei dem Abhängigkeiten über Abstraktionen erfolgen. Dies ermöglicht eine bessere Wartbarkeit und Flexibilität des Systems.",
   "explanation_en": "Tight coupling occurs through direct dependencies between building blocks, shared complex data structures, and shared resources like database tables. This type of coupling makes the system harder to change and maintain. Loose coupling is achieved through the application of principles like the Dependency Inversion Principle, where dependencies are managed through abstractions. This enables better maintainability and flexibility of the system."
  },
  {
   "id": "Q-20-04-14",
   "chapter": 3,
   "lz": "LZ 03-04",
   "type": "multi",
   "points": 1,
   "q": "Welche Aussagen zum „Don't repeat yourself\"-Prinzip (DRY) treffen am ehesten zu? Anders gesagt: Was könnte passieren, wenn Teile des Quellcodes oder der Konfiguration im System mehrfach vorhanden sind?",
   "q_en": "Which statements about the principle \"Don't repeat yourself\" (DRY) fit best? In other words: What could happen, if parts of the source code or configuration do exist in multiple copies in the system?",
   "options": [
    "DRY verringert die Sicherheit.",
    "Die strenge Einhaltung von DRY könnte zu höherer Kopplung führen.",
    "Die Komponenten des Systems mit redundantem Code können unabhängig voneinander verbessert werden.",
    "Die Einhaltung von DRY führt zu einer Verringerung der Angriffsvektoren in der IT-Sicherheit.",
    "Die Anwendung der Schichtenmuster ermöglicht eine konsistente Anwendung des DRY-Prinzips."
   ],
   "options_en": [
    "DRY reduces security.",
    "Strict adherence to DRY could lead to higher coupling.",
    "The components of the system that contain redundant code can be improved independently of each other.",
    "Adherence to DRY leads to additional attack vectors in IT security.",
    "Applying the Layer patterns allows a consistent application of the DRY principle."
   ],
   "correct": [
    1,
    2
   ],
   "explanation": "Während das DRY-Prinzip generell eine gute Praxis ist, kann eine zu strenge Anwendung zu unerwünschten Abhängigkeiten zwischen Komponenten führen (erhöhte Kopplung). Redundanter Code ermöglicht zwar unabhängige Änderungen, erschwert aber die Wartung. Die anderen Optionen stellen keine korrekten Zusammenhänge zwischen DRY und Sicherheit bzw. Architekturmustern her.",
   "explanation_en": "While the DRY principle is generally good practice, strict adherence can lead to unwanted dependencies between components (increased coupling). Redundant code allows for independent changes but makes maintenance more difficult. The other options do not establish correct relationships between DRY and security or architectural patterns."
  },
  {
   "id": "Q-20-04-15",
   "chapter": 4,
   "lz": "LZ 04-02",
   "type": "k",
   "points": 2,
   "q": "Sie können Aspekte Ihrer Softwarearchitektur mündlich und/oder schriftlich kommunizieren. In welchem Zusammenhang stehen diese Möglichkeiten zueinander? Geben Sie für jede der folgenden Aussagen an, ob sie richtig oder falsch ist.",
   "q_en": "You can communicate aspects of your software architecture verbally and/or in writing. How do these variants correlate? Decide for each of the following statements whether it is true or false.",
   "categories": [
    "Richtig",
    "Falsch"
   ],
   "categories_en": [
    "true",
    "false"
   ],
   "rows": [
    {
     "text": "Mündliche Kommunikation sollte schriftliche Dokumentation ergänzen.",
     "text_en": "Verbal communication should supplement written documentation.",
     "cat": 0
    },
    {
     "text": "Feedback zu Architekturentscheidungen sollte zur Sicherstellung der Nachverfolgbarkeit grundsätzlich schriftlich erfolgen.",
     "text_en": "Feedback to architecture decisions should always be done in writing to ensure traceability.",
     "cat": 1
    },
    {
     "text": "Schriftliche Dokumentation sollte immer mündlicher Kommunikation vorausgehen.",
     "text_en": "Written documentation should always precede verbal communication.",
     "cat": 1
    },
    {
     "text": "Architekt:innen sollten sich eine Variante (mündlich oder schriftlich) aussuchen und während der gesamten Entwicklung dabei bleiben.",
     "text_en": "Architects should pick one variant (verbal or written) and stick to this choice during the whole development.",
     "cat": 1
    }
   ],
   "explanation": "Mündliche und schriftliche Kommunikation sollten sich ergänzen, nicht gegenseitig ausschließen. Es gibt keine feste Regel, dass eine Form der anderen vorausgehen muss. Feedback kann und sollte sowohl mündlich als auch schriftlich erfolgen - eine Beschränkung auf ausschließlich schriftliches Feedback würde die Kommunikation unnötig einschränken. Die Form der Kommunikation sollte flexibel an die jeweilige Situation angepasst werden können.",
   "explanation_en": "Verbal and written communication should complement each other, not exclude each other. There is no fixed rule that one form must precede the other. Feedback can and should be given both verbally and in writing - restricting feedback to written form only would unnecessarily constrain communication. The form of communication should be flexible and adaptable to each situation."
  },
  {
   "id": "Q-20-04-37",
   "chapter": 4,
   "lz": "LZ 04-05",
   "type": "k",
   "points": 2,
   "q": "Welche der folgenden Aussagen zu Notationen für Architektursichten sind richtig und welche falsch?",
   "q_en": "Which of the following statements about notations for architectural views is true and which is false?",
   "categories": [
    "Richtig",
    "Falsch"
   ],
   "categories_en": [
    "true",
    "false"
   ],
   "rows": [
    {
     "text": "Business Process Model & Notation (BPMN) sollte nur von Business-Analysten und nicht zur Architekturdokumentation verwendet werden.",
     "text_en": "Business Process Model & Notation (BPMN) should only be used by Business Analysts and not for architecture documentation.",
     "cat": 1
    },
    {
     "text": "UML-Verteilungsdiagramme sind die einzige Möglichkeit zur Dokumentation des Mappings der Softwarekomponenten in Bezug auf die Infrastruktur.",
     "text_en": "UML deployment models are the only way to document the mapping of software components to infrastructure.",
     "cat": 1
    },
    {
     "text": "UML-Paketdiagramme können zum Festhalten der Bausteinsicht der Softwarearchitektur verwendet werden.",
     "text_en": "UML Package Diagrams can be used to capture the building-block view of software architectures.",
     "cat": 0
    },
    {
     "text": "Solange die Notation (z. B. mithilfe einer Legende) erläutert wird, kann eine beliebige Notation ausreichen, um Bausteinstrukturen und Zusammenarbeit zu beschreiben.",
     "text_en": "As long as the notation is explained (e.g. by a legend), any notation can be sufficient to describe building block structures and collaboration.",
     "cat": 0
    }
   ],
   "explanation": "BPMN kann durchaus für die Architekturdokumentation verwendet werden, insbesondere für Laufzeitsichten. UML-Verteilungsdiagramme sind eine von mehreren Möglichkeiten, das Mapping von Software auf Infrastruktur zu dokumentieren. UML-Paketdiagramme sind tatsächlich eine gängige Möglichkeit, Bausteinsichten darzustellen. Eine beliebige Notation kann ausreichend sein, solange sie angemessen dokumentiert und erklärt wird.",
   "explanation_en": "BPMN can indeed be used for architecture documentation, especially for runtime views. UML deployment diagrams are one of several ways to document the mapping of software to infrastructure. UML package diagrams are indeed a common way to represent building block views. Any notation can be sufficient as long as it is properly documented and explained."
  },
  {
   "id": "Q-20-04-13",
   "chapter": 4,
   "lz": "LZ 04-05",
   "type": "multi",
   "points": 1,
   "q": "Welche Architektursichten haben die beste praktische Anwendung für die Entwicklung von Softwarearchitekturen?",
   "q_en": "Which architectural views have the most practical application for developing software architectures?",
   "options": [
    "Pattern-Sicht.",
    "Beobachtersicht (Observer-View).",
    "Bausteinsicht (Komponentensicht).",
    "Verteilungssicht."
   ],
   "options_en": [
    "Pattern View.",
    "Observer View.",
    "Building-Block View (Component View).",
    "Deployment View."
   ],
   "correct": [
    2,
    3
   ],
   "explanation": "Die Baustein- und Verteilungssicht sind fundamentale Sichten in der Softwarearchitektur. Die Bausteinsicht zeigt die strukturelle Dekomposition des Systems, während die Verteilungssicht die technische Infrastruktur und das Mapping der Software auf diese Infrastruktur darstellt. Pattern-Sicht und Beobachtersicht sind keine standardisierten oder weithin verwendeten Architektursichten.",
   "explanation_en": "The building-block and deployment views are fundamental views in software architecture. The building-block view shows the structural decomposition of the system, while the deployment view represents the technical infrastructure and mapping of software onto this infrastructure. Pattern view and observer view are not standardized or widely used architectural views."
  },
  {
   "id": "Q-20-04-23",
   "chapter": 4,
   "lz": "LZ 04-05",
   "type": "multi",
   "points": 1,
   "q": "In der Kontextsicht können Sie einen geschäftlichen Kontext („business context\") und einen technischen Kontext verwenden. Wählen Sie die am besten passenden Antworten für den technischen Kontext aus.",
   "q_en": "The context view might contain a business context and a technical context, or both. Pick the most appropriate answers that apply to the technical context.",
   "options": [
    "Der technische Kontext enthält die physischen Übertragungskanäle zwischen Ihrem System und der Umgebung.",
    "Der technische Kontext enthält die gesamte Infrastruktur, über die die Komponenten Ihres Systems verteilt werden.",
    "Der technische Kontext sollte die Hardware-Preisliste oder die Preisgestaltung von Cloud-Diensten, die als Infrastruktur für Ihre Architektur verwendet werden, enthalten.",
    "Der technische Kontext enthält Informationen zur gewählten Programmiersprache sowie allen zur Implementierung Ihrer Softwarearchitektur verwendeten Frameworks.",
    "Der technische Kontext enthält gegebenenfalls andere Elemente als der Geschäftskontext (\"business context\")."
   ],
   "options_en": [
    "The technical context contains the physical channels between your system and its environment.",
    "The technical context contains all the infrastructure on which the components of your system are deployed.",
    "The technical context should include hardware pricing or pricing of cloud services used as infrastructure for your architecture.",
    "The technical context contains information about the chosen programming language as well as all frameworks used to implement your software architecture.",
    "The technical context might contain different elements than the business context."
   ],
   "correct": [
    0,
    4
   ],
   "explanation": "Der technische Kontext konzentriert sich auf die technischen Aspekte der Systemintegration, insbesondere die physischen Verbindungen und Schnittstellen zu anderen Systemen. Er unterscheidet sich vom Geschäftskontext und kann andere Elemente enthalten. Infrastrukturdetails, Preisgestaltung und Implementierungsdetails gehören nicht zum technischen Kontext, da diese eher Bestandteil der Verteilungssicht oder der Implementierungsdokumentation sind.",
   "explanation_en": "The technical context focuses on the technical aspects of system integration, particularly the physical connections and interfaces to other systems. It differs from the business context and may contain different elements. Infrastructure details, pricing information, and implementation details do not belong to the technical context as these are rather part of the deployment view or implementation documentation."
  },
  {
   "id": "Q-20-04-24",
   "chapter": 4,
   "lz": "LZ 04-07",
   "type": "multi",
   "points": 1,
   "q": "Die Dokumentation der Softwarearchitektur sollte Beschreibungen der Querschnittskonzepte enthalten. Wählen Sie die besten Gründe, warum die Dokumentation von Querschnittskonzepten sinnvoll ist.",
   "q_en": "Software architecture documentation could contain descriptions of cross-cutting concerns. Pick the best reasons why documentation of cross-cutting concerns is useful.",
   "options": [
    "Querschnittskonzepte sollten sich auf die Fachdomäne konzentrieren und frei von technischen Informationen sein.",
    "Aspekte oder Konzepte, die in mehreren Teilen Ihrer Softwarearchitektur verwendet werden, sollten auf nicht redundante Weise beschrieben werden.",
    "Querschnittskonzepte können in weiteren Produkten innerhalb der gleichen Organisation erneut verwendet werden.",
    "Querschnittskonzepte sollten von Spezialist:innen implementiert werden. Daher ist eine separate Dokumentation hilfreich."
   ],
   "options_en": [
    "Cross-cutting concepts should focus on the domain and be free of technical information.",
    "Aspects or concepts that are used in multiple parts of your software architecture should be described in a non-redundant way.",
    "Cross-cutting concepts can be reused in more products within the same organization.",
    "Cross-cutting concepts should be implemented by specialists. Therefore, separate documentation is useful."
   ],
   "correct": [
    1,
    2
   ]
  },
  {
   "id": "Q-20-04-25",
   "chapter": 3,
   "lz": "LZ 03-07",
   "type": "k",
   "points": 2,
   "q": "Was sind Richtlinien für ein gutes Schnittstellen-Design? Kreuzen Sie an, welche der folgenden Aussagen richtig und welche falsch sind.",
   "q_en": "What are guidelines for good interface design? Check which of the following statements are true and which are false.",
   "categories": [
    "richtig",
    "falsch"
   ],
   "categories_en": [
    "true",
    "false"
   ],
   "rows": [
    {
     "text": "Die Verwendung der Schnittstellen sollte einfach zu erlernen sein.",
     "text_en": "Use of interfaces should be easy to learn.",
     "cat": 0
    },
    {
     "text": "Es soll möglich sein, angemessen verständlichen Client-Code für diese Schnittstelle zu schreiben.",
     "text_en": "It should be possible to write client code for the interface, that is reasonably easy to understand.",
     "cat": 0
    },
    {
     "text": "Eine Schnittstelle soll Zugriff auf eine umfassende Menge von Implementierungsdetails ermöglichen.",
     "text_en": "An interface should provide access to a comprehensive set of implementation details.",
     "cat": 1
    },
    {
     "text": "Schnittstellenspezifikationen sollten funktionale und nichtfunktionale Aspekte enthalten.",
     "text_en": "Interface specifications should contain functional and non-functional aspects.",
     "cat": 0
    },
    {
     "text": "Lokale und entfernte (\"remote\") Aufrufe einer Schnittstelle sollen sich in allen Belangen identisch verhalten.",
     "text_en": "Local and remote calls to an interface should behave identically in all aspects.",
     "cat": 1
    }
   ],
   "explanation": "Die Schnittstellen sollten leicht erlernbar sein und die Erstellung von verständlichem Client-Code ermöglichen. Sie sollten funktionale und nicht-funktionale Aspekte spezifizieren. Jedoch sollten sie nicht unnötig Implementierungsdetails offenlegen. Die Annahme, dass lokale und entfernte Aufrufe sich identisch verhalten können, ist technisch nicht realisierbar - besonders in Bezug auf Latenz und Antwortzeiten. Eine detailliertere Erklärung findet sich in den bekannten \"Fallacies of Distributed Computing\".",
   "explanation_en": "Interfaces should be easy to learn and allow for creation of understandable client code. They should specify both functional and non-functional aspects. However, they should not unnecessarily expose implementation details. The assumption that local and remote calls can behave identically is technically not feasible - especially regarding latency and response times. A more detailed explanation can be found in the (rather famous) \"Fallacies of Distributed Computing\"."
  },
  {
   "id": "Q-20-04-26",
   "chapter": 4,
   "lz": "LZ 04-08",
   "type": "k",
   "points": 2,
   "q": "Eine Definition lautet: „Softwarearchitektur ist die Summe aller während der Entwicklung gefällten Entscheidungen\". Kreuzen Sie an, welche der folgenden Aussagen zu Architektur- /Designentscheidungen richtig und welche falsch sind.",
   "q_en": "One definition says: \"Software architecture is the sum of all the decisions you have taken during development.\" Check which of the following statements about architectural/design decisions are true and which are false.",
   "categories": [
    "Richtig",
    "Falsch"
   ],
   "categories_en": [
    "true",
    "false"
   ],
   "rows": [
    {
     "text": "Architektonische Entscheidungen können sich in der Struktur der Bausteine oder Komponenten niederschlagen.",
     "text_en": "Architectural decisions can impact the structure of the building block or components.",
     "cat": 0
    },
    {
     "text": "Softwarearchitekt:innen sollten alle Entwurfsentscheidungen schriftlich begründen.",
     "text_en": "Software architects shall justify all design decisions in writing.",
     "cat": 1
    },
    {
     "text": "Architektonische Entscheidungen können untereinander Wechselwirkungen haben.",
     "text_en": "Architectural decisions can have interdependencies between each other.",
     "cat": 0
    },
    {
     "text": "Kompromisse zwischen zueinander in Konflikt stehenden Qualitätsanforderungen sollten explizite Entscheidungen sein.",
     "text_en": "Tradeoffs between conflicting quality requirements should be explicit decisions.",
     "cat": 0
    }
   ],
   "explanation": "Nicht alle Entscheidungen müssen schriftlich begründet werden - die Anforderung an schriftliche Dokumentation hängt von der Situation, dem Team, dem System und anderen Faktoren ab.",
   "explanation_en": "Not all decisions need to be justified in writing - as the requirement for written documentation depends on the situation, the team, the system and other factors."
  },
  {
   "id": "Q-20-04-31",
   "chapter": 4,
   "lz": "LZ 04-02",
   "type": "k",
   "points": 2,
   "q": "Welche der folgenden Aussagen sind typische Gründe zur Einführung einer Architekturdokumentation und welche nicht?",
   "q_en": "Which of the following statements are typical reasons for introducing an architecture documentation and which are not typical reasons?",
   "categories": [
    "typisch",
    "nicht typisch"
   ],
   "categories_en": [
    "typical",
    "not typical"
   ],
   "rows": [
    {
     "text": "Unterstützung des Onboardings neuer Entwickler:innen.",
     "text_en": "To support onboarding of new developers.",
     "cat": 0
    },
    {
     "text": "Unterstützung der Testautomatisierung des Systems.",
     "text_en": "To support the automated testing approach of the system.",
     "cat": 1
    },
    {
     "text": "Unterstützung der Arbeit von verteilten Teams.",
     "text_en": "To support the work of distributed teams.",
     "cat": 0
    },
    {
     "text": "Unterstützung von späteren Verbesserungen des Systems.",
     "text_en": "To assist in future enhancements of the product.",
     "cat": 0
    },
    {
     "text": "Einhaltung regulatorischer Vorgaben.",
     "text_en": "To conform to regulatory or legal constraints.",
     "cat": 0
    },
    {
     "text": "Sicherstellung der gleichmäßigen Auslastung des Teams.",
     "text_en": "To ensure that developers have enough work to do.",
     "cat": 1
    }
   ],
   "explanation": "Die typischen Gründe für eine Architekturdokumentation sind direkt mit den Hauptzielen der Softwarearchitektur verbunden: Die Unterstützung des Entwicklungsteams (durch Onboarding und Zusammenarbeit), die Ermöglichung der Weiterentwicklung des Systems und die Erfüllung regulatorischer Anforderungen. Dagegen sind Testautomatisierung und Teamauslastung keine primären Gründe für die Erstellung einer Architekturdokumentation.",
   "explanation_en": "The typical reasons for architecture documentation are directly connected to the main goals of software architecture: Supporting the development team (through onboarding and collaboration), enabling system evolution, and fulfilling regulatory requirements. In contrast, test automation and team workload are not primary reasons for creating architecture documentation."
  },
  {
   "id": "Q-20-04-30",
   "chapter": 2,
   "lz": "LZ 02-03",
   "type": "k",
   "points": 2,
   "q": "Welche der folgenden Eigenschaftspaare stehen üblicherweise miteinander in Konflikt und welche nicht?",
   "q_en": "Which of the following pairs of qualities are usually in conflict to each other, and which are not?",
   "categories": [
    "Konflikt",
    "Kein Konflikt"
   ],
   "categories_en": [
    "conflict",
    "no conflict"
   ],
   "rows": [
    {
     "text": "Verständlichkeit – Lesbarkeit",
     "text_en": "Understandability – Readability",
     "cat": 1
    },
    {
     "text": "Benutzerfreundlichkeit – Sicherheit",
     "text_en": "Usability – Security",
     "cat": 0
    },
    {
     "text": "Laufzeitkonfigurierbarkeit – Robustheit",
     "text_en": "Runtime configurability – Robustness",
     "cat": 0
    },
    {
     "text": "Sicherheit – Funktionale Korrektheit",
     "text_en": "Security – Functional correctness",
     "cat": 1
    }
   ],
   "explanation": "Verständlichkeit und Lesbarkeit unterstützen sich gegenseitig. Benutzerfreundlichkeit und Sicherheit können in Konflikt stehen, da Sicherheitsmaßnahmen die Benutzerfreundlichkeit einschränken können. Laufzeitkonfigurierbarkeit und Robustheit stehen oft im Konflikt, da mehr Konfigurationsmöglichkeiten die Robustheit beeinträchtigen können. Sicherheit und funktionale Korrektheit stehen nicht grundsätzlich im Konflikt - ein System kann sowohl sicher als auch funktional korrekt sein.",
   "explanation_en": "Understandability and readability support each other. Usability and security can conflict as security measures may limit usability. Runtime configurability and robustness often conflict as more configuration options can impact robustness. Security and functional correctness are not inherently in conflict - a system can be both secure and functionally correct."
  },
  {
   "id": "Q-20-04-27",
   "chapter": 2,
   "lz": "LZ 02-04",
   "type": "single",
   "points": 1,
   "q": "ISO 25010 enthält allgemeine Qualitätseigenschaften für Softwaresysteme. Wie können Qualitätsanforderungen zu diesen Eigenschaften konkretisiert werden?",
   "q_en": "ISO 25010 provides generic quality characteristics for software systems. How can quality requirements concerning these characteristics be made more concrete?",
   "options": [
    "Durch Entwickeln von UI-Prototypen.",
    "Durch Definieren expliziter Schnittstellen.",
    "Durch Erstellen, Verfassen oder Diskutieren von Qualitätsszenarien.",
    "Durch Erstellen automatisierter Tests."
   ],
   "options_en": [
    "By developing UI prototypes.",
    "By defining explicit interfaces.",
    "By discussing or writing quality scenarios.",
    "By creating automated tests."
   ],
   "correct": [
    2
   ],
   "explanation": "Qualitätsszenarien sind etablierte Methoden zur Konkretisierung von Qualitätsanforderungen. Sie helfen dabei, abstrakte Qualitätseigenschaften in überprüfbare Anforderungen zu überführen. UI-Prototypen, Schnittstellen und automatisierte Tests sind dagegen eher Implementierungs- oder Validierungstechniken und weniger geeignet zur initialen Konkretisierung von Qualitätsanforderungen.",
   "explanation_en": "Quality scenarios are established methods for making quality requirements more concrete. They help transform abstract quality characteristics into verifiable requirements. UI prototypes, interfaces, and automated tests are implementation or validation techniques and are less suitable for initial concretization of quality requirements."
  },
  {
   "id": "Q-20-04-28",
   "chapter": 5,
   "lz": "LZ 05-02",
   "type": "multi",
   "points": 2,
   "q": "Welche der folgenden Punkte sind am besten geeignet, die qualitative Bewertung einer Softwarearchitektur bzgl. der Erfüllung von Qualitätsanforderungen zu unterstützen?",
   "q_en": "Which of the following points are best suited to support the qualitative evaluation of a software architecture with regard to the fulfillment of quality requirements?",
   "options": [
    "Quantitative Abhängigkeitsanalyse.",
    "Architekturmodelle.",
    "Qualitätsszenarien.",
    "Teamgröße.",
    "Logdateien.",
    "Organigramm."
   ],
   "options_en": [
    "Quantitative dependency analysis.",
    "Architecture models.",
    "Quality scenarios.",
    "Team size.",
    "Log files.",
    "Organizational structure."
   ],
   "correct": [
    0,
    1,
    2,
    4
   ],
   "explanation": "Die Analyse von Qualitätsanforderungen kann am besten durch technische und architektonische Artefakte unterstützt werden. Quantitative Metriken, Architekturmodelle, konkrete Qualitätsszenarien und Laufzeitinformationen aus Logs liefern objektive Daten für die Analyse. Organisatorische Aspekte wie Teamgröße oder Organigramme sind dagegen weniger relevant für die technische Qualitätsanalyse.",
   "explanation_en": "The analysis of quality requirements is best supported by technical and architectural artifacts. Quantitative metrics, architecture models, concrete quality scenarios and runtime information from logs provide objective data for analysis. Organizational aspects like team size or organizational structure are less relevant for technical quality analysis."
  },
  {
   "id": "Q-20-04-29",
   "chapter": 5,
   "lz": "LZ 05-02",
   "type": "multi",
   "points": 1,
   "q": "Sie versuchen, Ihre Architektur qualitativ zu analysieren. Was sind die zutreffendsten Anzeichen für architektonische Problembereiche?",
   "q_en": "You try to analyze your architecture quantitatively. Which are the most appropriate indicators for architectural problem areas?",
   "options": [
    "Hohe Kopplung der Komponenten.",
    "Namen öffentlicher Methoden geben nicht deren Zweck wieder.",
    "Fehlende Kommentare.",
    "Häufung von Fehlern in bestimmten Bausteinen des Systems.",
    "Anzahl der Testfälle pro Komponente."
   ],
   "options_en": [
    "High coupling of components.",
    "Names of public methods do not reflect their purpose.",
    "Missing comments.",
    "Clusters of errors in certain building blocks of the system.",
    "Number of test cases per component."
   ],
   "correct": [
    0,
    3
   ],
   "explanation": "Hohe Kopplung zwischen Komponenten und die Häufung von Fehlern in bestimmten Systembausteinen sind klare Indikatoren für architektonische Probleme. Die anderen Optionen wie Methodennamen, fehlende Kommentare oder die Anzahl der Testfälle sind eher Implementierungs- oder Qualitätssicherungsaspekte und weniger architektonische Probleme.",
   "explanation_en": "High coupling between components and clusters of errors in certain system building blocks are clear indicators of architectural problems. The other options like method names, missing comments, or number of test cases are more related to implementation or quality assurance aspects rather than architectural problems."
  },
  {
   "id": "Q-20-04-36",
   "chapter": 5,
   "lz": "LZ 05-02",
   "type": "multi",
   "points": 1,
   "q": "Sie versuchen, ihre Architektur quantitativ zu untersuchen. Welche der folgenden Größen können Sie für Ihre Softwarearchitektur zuverlässig messen? Wählen Sie die am besten passenden Antworten aus.",
   "q_en": "You try to quantitatively analyze your architecture. Which three of the following properties can you measure reliably in your software architecture? Pick the best fitting answers.",
   "options": [
    "Größe der Bausteine (z. B. Lines-of-Code).",
    "Änderungsrate des Quellcodes der Komponenten.",
    "Kohäsion der Architekturkomponenten.",
    "Sicherheitsstufe einer Komponente.",
    "Anzahl der Personen, die zu einer bestimmten Komponente beigetragen haben."
   ],
   "options_en": [
    "Size of building blocks (e.g. LOC).",
    "Change rate of the source code of components.",
    "Cohesion of the architectural components.",
    "Security level of a component.",
    "Number of the developers that contributed to a specific component."
   ],
   "correct": [
    0,
    1,
    4
   ],
   "explanation": "• Die Größe kann einfach und zuverlässig durch statische Analyse des Quellcodes gemessen werden (Lines-of-Code ist eine zuverlässige Größenmetrik) • Änderungsrate und Anzahl-der-Entwickler-pro-Komponente können zuverlässig gemessen werden, wenn man die Versionskontrollhistorie berücksichtigt, was mit Systemen wie git, subversion oder ähnlichen in der Entwicklung weit verbreiteten Tools problemlos möglich ist.",
   "explanation_en": "• Size can easily and reliably be measured when statically analyzing source code (lines-of-code metric is a reliable size metric) • change-rate and number-of-developers-per-component can reliably be measured when taking the version control history into account, which is perfectly feasibly with systems like git, subversion or similar tools that are widely used in development."
  }
 ]
};
