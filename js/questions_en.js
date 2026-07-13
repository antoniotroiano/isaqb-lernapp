/* Englische Übersetzungen des Fragenkatalogs (Phase 2, generiert aus js/questions.js).
   Struktur: QUESTIONS_EN[id] = { q, options[], optExpl[], explanation, categories[], rows[] (nur Texte) }
   Fehlende Felder/IDs fallen automatisch auf Deutsch zurück (mergeEN + L*-Accessors).
   Neu generieren: tools/build_questions_en.py (bzw. Batch-Übersetzung -> merge). */
const QUESTIONS_EN = {
 "c1q1": {
  "q": "Which statements accurately describe software architecture?",
  "options": [
   "It encompasses the building blocks of a system and their relationships to one another.",
   "It encompasses the fundamental, often far-reaching design decisions.",
   "It is essentially the sum of the source code of all classes.",
   "Above all, it defines the concrete implementation of each individual method.",
   "It is synonymous with the documentation of the system in the form of diagrams."
  ],
  "optExpl": [
   "Building blocks and their relationships are the core of any definition of architecture.",
   "It is precisely the load-bearing, far-reaching decisions that make up architecture.",
   "The source code is the result of the implementation, not the architecture itself.",
   "Defining individual methods is detailed design, not architecture.",
   "Diagrams document the architecture but are not the architecture itself."
  ],
  "explanation": "Architecture = building blocks + relationships + load-bearing design decisions. It is not the code itself and does not define each method in detail (that is detailed design)."
 },
 "c1q2": {
  "q": "Which statements accurately characterize a component (building block)?",
  "options": [
   "It encapsulates functionality behind a clearly defined interface.",
   "It is replaceable via its interface, without users needing to know its internals.",
   "It is essentially a group of classes in the same package, even without a common interface.",
   "It is always identical to an operating-system process started at runtime.",
   "It is always assigned to exactly one single class that contains all of its logic."
  ],
  "optExpl": [
   "Encapsulation behind a clear interface is the core characteristic.",
   "It is precisely this replaceability (black-box use) that distinguishes it.",
   "Mere package membership without a common interface is not sufficient.",
   "An operating-system process is a runtime unit, not a component.",
   "A component can consist of multiple classes, not just one."
  ],
  "explanation": "A component encapsulates functionality behind a defined interface and is replaceable through it (black-box use). Mere package membership or equating it with a runtime process do not capture the characteristic."
 },
 "c1q3": {
  "q": "What distinguishes a black-box from a white-box description of a building block?",
  "options": [
   "Black-box shows only the interface and responsibility from the outside; white-box additionally shows the internal structure.",
   "White-box hides the internal building blocks, black-box reveals them.",
   "Black-box refers to the runtime view, white-box to the deployment view.",
   "The difference concerns only the level of detail in naming, not the visibility of the internals."
  ],
  "optExpl": [
   "Correct: black-box = external view, white-box = additionally the internal structure.",
   "Reversed - the white-box shows the internals, the black-box hides them.",
   "It is about the visibility of the internals, not about runtime/deployment view.",
   "What matters is the visibility of the internals, not the depth of naming."
  ],
  "explanation": "Black-box = external view (interface/responsibility), white-box = internal view (contained building blocks). The terms are not reversed and are not tied to the runtime/deployment view."
 },
 "c1q4": {
  "q": "Which of the following belong to the typical architecture views?",
  "options": [
   "Building block view (static decomposition into building blocks)",
   "Runtime view (interplay of the building blocks at runtime)",
   "Source-code file view (folder and file structure in the repository)",
   "Prioritization view (order in which features are implemented)",
   "Cost view (effort and budget distribution of the individual building blocks)"
  ],
  "optExpl": [
   "The building block view (static decomposition) is a core architecture view.",
   "The runtime view (dynamic interplay) is likewise a core view.",
   "The folder/file structure in the repository is not an architecture view.",
   "A \"prioritization view\" does not exist as an architecture view.",
   "A cost view is not among the established architecture views."
  ],
  "explanation": "Building block and runtime views are core architecture views (as are context and deployment views). File/repository structure or a 'prioritization view' are not architecture views."
 },
 "c1q5": {
  "q": "Which tasks typically belong to the role of software architects?",
  "options": [
   "Clarifying and influencing requirements, especially quality requirements.",
   "Making and justifying load-bearing architecture decisions.",
   "Supporting the implementation and giving feedback to the team.",
   "Being solely responsible for the final prioritization of the product backlog.",
   "Independently and single-handedly implementing the source code of all critical modules."
  ],
  "optExpl": [
   "Clarifying requirements (especially quality requirements) is a core task.",
   "Making and justifying load-bearing decisions clearly belongs here.",
   "Supporting the implementation and giving feedback does too.",
   "Backlog prioritization is the responsibility of the product role (e.g. PO), not the architect alone.",
   "Implementing all modules is a team task, not the architect's alone."
  ],
  "explanation": "Architects clarify requirements, make/justify decisions and support the implementation. Backlog prioritization lies with the product responsibility (e.g. Product Owner)."
 },
 "c1q6": {
  "q": "Which statements about internal and external quality are correct?",
  "options": [
   "External quality is perceivable from the outside (e.g. performance, reliability).",
   "Internal quality concerns the internal structure (e.g. maintainability, understandability).",
   "Internal quality is directly noticeable to end users, external quality only to developers.",
   "Internal quality is insignificant as long as the external quality is right.",
   "Internal and external quality are independent of each other and do not influence each other.",
   "Internal quality can be measured solely through black-box tests of the finished product."
  ],
  "optExpl": [
   "External quality is perceivable from the outside (e.g. performance).",
   "Internal quality concerns the internal structure (e.g. maintainability).",
   "Reversed: internal quality is noticed mainly by developers, not directly by end users.",
   "Internal quality is important - it determines, for example, maintainability.",
   "Poor internal quality also degrades external quality in the long run.",
   "Internal quality shows in the structure, not in black-box tests."
  ],
  "explanation": "External quality is visible from the outside, internal quality concerns the structure. The assignment is not reversed, and internal quality is by no means insignificant (it determines, for example, maintainability)."
 },
 "c1q7": {
  "q": "Why are architecture decisions often made iteratively and under uncertainty?",
  "options": [
   "Because at the start, knowledge and requirements are incomplete and become refined over the course.",
   "Because such decisions are, in any case, changeable at any time without notable effort.",
   "Because sufficient information is only available after complete implementation.",
   "Because uncertainty can be completely avoided through a sufficiently detailed up-front design."
  ],
  "optExpl": [
   "Correct: at the start, knowledge is incomplete, therefore refine iteratively.",
   "Architecture decisions are precisely often not cheaply changeable.",
   "Deciding only after implementation would be far too late.",
   "No up-front design completely eliminates the initial uncertainty."
  ],
  "explanation": "At the start of a project, knowledge is incomplete; decisions are refined step by step. They are often precisely NOT arbitrarily cheap to change, and an up-front design does not eliminate the uncertainty."
 },
 "c1q8": {
  "q": "Which statements about the relationship between architecture and requirements are correct?",
  "options": [
   "Quality requirements in particular drive central architecture decisions.",
   "Architecture and requirements influence each other mutually and are sharpened iteratively.",
   "Exclusively functional requirements determine the architecture.",
   "The architecture is defined independently and the requirements adapt to it afterwards.",
   "Requirements must be completely and finally settled before architecture work begins."
  ],
  "optExpl": [
   "Quality requirements are the strongest architecture drivers.",
   "Architecture and requirements sharpen each other mutually and iteratively.",
   "Not only functional ones - quality requirements in particular shape the architecture.",
   "Requirements do not align themselves retrospectively to a fixed architecture.",
   "Architecture work begins iteratively, not only after requirements are finally fixed."
  ],
  "explanation": "Quality requirements above all drive the architecture, and both sharpen each other mutually. Not only functional requirements count, and the order is not reversed."
 },
 "c1q9": {
  "q": "Which activity is NOT a central task of the architecture role?",
  "options": [
   "Being responsible for the commercial budget and contract negotiation with the customer.",
   "Defining overarching cross-cutting concepts (e.g. persistence, security).",
   "Documenting and communicating architecture decisions.",
   "Clarifying quality requirements together with stakeholders."
  ],
  "optExpl": [
   "Correct: budget/contract negotiation is not an architecture task.",
   "Defining cross-cutting concepts is very much an architecture task.",
   "Documenting and communicating decisions clearly belongs here.",
   "Clarifying quality requirements with stakeholders is a core task."
  ],
  "explanation": "Budget/contract negotiation is not an architecture task. Cross-cutting concepts, documentation/communication and requirements clarification, by contrast, clearly belong to the role."
 },
 "k5": {
  "q": "Assess each statement: true or false?",
  "explanation": "Loose coupling/high cohesion and the strong influence of quality requirements are central, correct principles. The architect does not write all the code, and decisions are adapted iteratively.",
  "categories": [
   "True",
   "False"
  ],
  "rows": [
   "Loose coupling and high cohesion are desirable.",
   "An architect must write all of the production code themselves.",
   "Quality requirements strongly influence the architecture.",
   "Architecture decisions, once made, may never be changed."
  ]
 },
 "c1q10": {
  "q": "What is the central goal of software architecture?",
  "options": [
   "Making complexity manageable and supporting the achievement of the quality goals.",
   "Completely ruling out the later need for refactorings.",
   "Providing a solution today for every conceivable future requirement.",
   "Minimizing development time independently of quality."
  ],
  "optExpl": [
   "Core: mastering complexity and achieving the quality goals.",
   "Refactorings can never be entirely ruled out - not a realistic goal.",
   "\"Everything in reserve\" contradicts YAGNI and is not a goal.",
   "Speed at the expense of quality is not an architecture goal."
  ],
  "explanation": "The goal is manageable complexity and the achievement of the quality goals. Avoiding refactorings entirely, building everything in reserve (against YAGNI) or sacrificing quality for speed are not viable goals."
 },
 "c1q11": {
  "q": "Which statements about the stakeholders of an architecture are correct?",
  "options": [
   "Stakeholders are all persons/groups with a legitimate interest in the system.",
   "Operations, the client and the maintenance team also count, not just end users.",
   "Only persons with a contractual payment obligation are stakeholders.",
   "Stakeholders are exclusively the members of the development team.",
   "External stakeholders such as authorities or legislators do not, as a rule, count."
  ],
  "optExpl": [
   "Stakeholders are all those with a legitimate interest in the system.",
   "Operations, the client and maintenance also count, not just end users.",
   "Payment obligation is not a criterion for being a stakeholder.",
   "The development team is only one of many stakeholder groups.",
   "External parties such as authorities can also have a legitimate interest."
  ],
  "explanation": "Stakeholders = all with legitimate concerns (users, operations, client, maintenance, development ...). Limited neither to those who pay nor to the development team."
 },
 "c1q12": {
  "q": "Which properties characterize a well-cut building block?",
  "options": [
   "High cohesion - it bundles related tasks together.",
   "Loose coupling via a clearly defined interface.",
   "It shares its internal state directly with neighboring building blocks in order to save detours.",
   "It bundles as many different responsibilities as possible in order to be reusable.",
   "It is as fine-grained as possible, so that each individual method forms its own building block."
  ],
  "optExpl": [
   "High cohesion (related tasks bundled together) is desirable.",
   "Loose coupling via a clearly defined interface likewise.",
   "Sharing internals directly breaks encapsulation and increases coupling.",
   "Many mixed responsibilities mean low cohesion - undesirable.",
   "Excessive splitting increases coupling; granularity alone is not a measure of quality."
  ],
  "explanation": "Well-cut = high cohesion and loose coupling via clear interfaces. Direct sharing of internals (breaks encapsulation) and many mixed responsibilities (low cohesion) are anti-patterns."
 },
 "c1q13": {
  "q": "Which statements about the interface of a building block are correct?",
  "options": [
   "It defines the externally visible contract (offered or required operations).",
   "It hides the internal realization, so that it remains replaceable.",
   "It bindingly prescribes the concrete internal data structure of the building block.",
   "It must inevitably change as well as soon as the internal implementation is adjusted.",
   "It always contains the complete implementation of the offered operations.",
   "A building block may offer at most one single interface to the outside."
  ],
  "optExpl": [
   "The interface is the externally visible contract.",
   "It hides the realization, which thereby remains replaceable.",
   "It does not prescribe an internal data structure (that would be internals).",
   "It should precisely remain stable when the implementation changes.",
   "The interface defines only the contract, not the implementation.",
   "A building block can offer several interfaces for different users."
  ],
  "explanation": "The interface is the contract and hides the internals (which thereby remain replaceable). It does not prescribe an internal data structure and should precisely remain stable during internal changes."
 },
 "c1q14": {
  "q": "What is meant by the responsibility of a building block?",
  "options": [
   "The clearly delineated task for which it is responsible (the WHAT).",
   "The concrete technical realization with which it fulfills its task (the HOW).",
   "The set of all building blocks on which it depends.",
   "The position it occupies in the layer hierarchy."
  ],
  "optExpl": [
   "Responsibility = the clearly delineated task (the WHAT).",
   "The concrete realization is the HOW, not the responsibility.",
   "The set of dependencies is something else.",
   "The layer position does not describe the responsibility."
  ],
  "explanation": "Responsibility = the clearly delineated task (the WHAT). The realization (the HOW), the dependencies or the layer position are something else."
 },
 "c1q15": {
  "q": "Why is an architecture only effective if it is adhered to in the implementation?",
  "options": [
   "Because the intended properties (e.g. maintainability) only arise if the code follows the structure.",
   "Because the architecture automatically generates the matching code as soon as it is documented.",
   "Because deviations in the code automatically update the diagrams as well.",
   "Because the program does not even compile without exact adherence."
  ],
  "optExpl": [
   "Correct: qualities only arise if the code follows the structure.",
   "Documentation does not produce code - architecture does not implement itself.",
   "Diagrams do not automatically update themselves upon code deviations.",
   "Deviations do not prevent compilation - the code runs anyway."
  ],
  "explanation": "Only if the code follows the architecture do its qualities materialize (otherwise architecture erosion). Code does not arise automatically, diagrams do not update themselves, and deviations do not prevent compilation."
 },
 "c1q16": {
  "q": "At which levels does software architecture describe structures?",
  "options": [
   "At multiple levels of abstraction - from the overall system through subsystems down to individual building blocks.",
   "Only at the topmost level of the overall system; everything more fine-grained is pure programming with no relation to architecture.",
   "Exclusively at the level of individual classes and methods.",
   "Only at the level of the infrastructure and servers used."
  ],
  "optExpl": [
   "Correct: structures at multiple levels (system -> subsystems -> building blocks).",
   "Finer levels also relate to architecture, not just the topmost one.",
   "Only classes/methods reaches too deep and too narrow.",
   "Infrastructure is only one level, not the only one."
  ],
  "explanation": "Architecture considers structures hierarchically at multiple levels. The other options each fall short (only top, only bottom or only infrastructure)."
 },
 "c1q17": {
  "q": "Which statements about the benefit of software architecture are correct?",
  "options": [
   "It helps make complexity manageable.",
   "It enables division of labor in team development.",
   "It creates a common basis for the communication of the stakeholders.",
   "It ensures the correctness of the implementation, so that tests can be omitted.",
   "It guarantees that the project stays within the planned budget and time frame."
  ],
  "optExpl": [
   "Making complexity manageable is a core benefit.",
   "Division of labor in development becomes possible only through structure.",
   "It creates a common basis for communication.",
   "It does not guarantee correctness - tests remain necessary.",
   "Budget and schedule adherence depend on many factors, not just the architecture."
  ],
  "explanation": "Architecture masters complexity, enables division of labor and communication. But it does not guarantee a correct implementation - tests remain necessary."
 },
 "c1q18": {
  "q": "How does a software architecture typically emerge in an iterative approach?",
  "options": [
   "Step by step: load-bearing decisions early, details refined over iterations.",
   "Completely and definitively before the start of implementation, without later adjustment.",
   "Purely by chance/emergent, entirely without deliberate overarching decisions.",
   "Only retrospectively, as mere documentation of the already finished code."
  ],
  "optExpl": [
   "Correct: load-bearing decisions early, details over iterations.",
   "A complete up-front design (BDUF) without adjustment is atypical.",
   "Purely by chance/emergent without deliberate decisions is not a goal.",
   "Architecture is more than retrospective documentation of the finished code."
  ],
  "explanation": "Iterative means: important decisions early, refinement over time - neither complete up-front design (BDUF) nor unplanned nor documented only at the end."
 },
 "c1q19": {
  "q": "How do architecture and detailed design differ?",
  "options": [
   "Architecture makes the overarching, far-reaching structural decisions; the detailed design concretizes within these specifications.",
   "The boundary is sharp and formally defined: from a fixed building block size onwards, detailed design necessarily begins.",
   "The detailed design comes first and is subsequently combined into the architecture.",
   "Both denote the same thing, only in different project phases."
  ],
  "optExpl": [
   "Correct: architecture = far-reaching structure, detailed design refines within it.",
   "The boundary is fluid and context-dependent, not formally at a size.",
   "The order is wrong - architecture frames the detailed design.",
   "Both are not the same, but different levels of abstraction."
  ],
  "explanation": "Architecture = large, far-reaching structural decisions; the detailed design refines within these. The boundary is fluid and context-dependent, not formally fixed at a size; the order is not reversed, and the two are not identical either."
 },
 "c1q20": {
  "q": "Why is communication a core competence of software architects?",
  "options": [
   "Because they must mediate between stakeholders and justify decisions in a comprehensible way.",
   "Because they should pass on the architecture exclusively orally rather than in writing.",
   "Because technical quality is secondary as long as the architecture is well presented.",
   "Because good communication makes architecture documentation completely superfluous."
  ],
  "optExpl": [
   "Correct: mediate between stakeholders and justify decisions.",
   "Not only orally - important things should also be documented.",
   "Technical quality remains central, not just the presentation.",
   "Communication does not replace documentation."
  ],
  "explanation": "Architecture thrives on shared understanding: mediating and justifying. Oral-only, presentation over substance or 'talking replaces documentation' are wrong."
 },
 "c1q21": {
  "q": "What is the purpose of an early end-to-end proof of concept (prototype/proof of concept) in architecture design?",
  "options": [
   "To verify central technical risks and feasibility early.",
   "To deliver a first, already production-ready version to the users.",
   "To fully implement the complete domain functionality end-to-end.",
   "To estimate the overall effort in a binding and conclusive manner."
  ],
  "optExpl": [
   "Correct: verify feasibility and central technical risks early.",
   "An end-to-end proof of concept is deliberately not production-ready.",
   "It does not implement the complete domain functionality.",
   "It does not deliver a binding final effort estimate."
  ],
  "explanation": "An end-to-end proof of concept verifies risky assumptions/feasibility early. It is deliberately not production-ready, not functionally complete and delivers no binding final effort estimate."
 },
 "c1q22": {
  "q": "What characterizes a 'good' software architecture?",
  "options": [
   "It fulfills the required quality goals under the given constraints.",
   "It is as simple and understandable as possible (but not simpler).",
   "It uses as many current technologies as possible, in order to appear future-proof.",
   "It is maximally flexible and prepared for every conceivable future requirement.",
   "It strictly follows a universally valid reference model, independent of the project context."
  ],
  "optExpl": [
   "Good = fulfills the required quality goals under the constraints.",
   "As simple as possible (but not simpler) is a hallmark of quality.",
   "Technology variety for its own sake is not a criterion of quality.",
   "Over-flexibility in reserve contradicts YAGNI.",
   "Good architecture is context-dependent, not determined by a rigid reference model."
  ],
  "explanation": "Good = quality goals fulfilled and appropriately simple. Technology variety for its own sake and over-flexibility in reserve (against YAGNI) are not criteria of quality."
 },
 "c1q23": {
  "q": "How is it best to distinguish the terms \"building block\" and \"component\"?",
  "options": [
   "\"Building block\" is the conceptual umbrella term; a component is a concrete building block with clearly defined interfaces.",
   "A building block is always a runtime unit, a component always a pure design-time unit.",
   "The terms are exactly synonymous and differ only linguistically.",
   "A building block is always larger than a component and contains several of them."
  ],
  "optExpl": [
   "Correct: building block = umbrella term, component = concrete building block with interfaces.",
   "It is not a runtime/design-time distinction.",
   "They are not exactly synonymous - component is more specific.",
   "It is not a question of size."
  ],
  "explanation": "\"Building block\" is the general, more conceptual term (problem space); a component is its more concrete manifestation with defined interfaces (solution space). It is not a pure runtime/design-time or size question and not merely synonymous."
 },
 "c1q24": {
  "q": "Why does the CPSA Foundation curriculum deliberately refrain from a single, binding definition of \"software architecture\"?",
  "options": [
   "Because numerous established definitions exist and one relies on their common core aspects (building blocks, relationships, decisions).",
   "Because software architecture is too young a field to be definable at all.",
   "Because a definition would unnecessarily oversimplify the exam material.",
   "Because experts fundamentally do not agree on the benefit of architecture."
  ],
  "optExpl": [
   "Correct: many established definitions -> one uses their common core aspects.",
   "Architecture is not too young a field - it is well researched.",
   "A definition would not \"unnecessarily oversimplify\" the material.",
   "There is broad agreement about the benefit."
  ],
  "explanation": "There are many recognized definitions; the curriculum uses their intersection (building blocks, relationships, load-bearing decisions). Neither a lack of maturity nor a lack of agreement about the benefit is the reason."
 },
 "c1q25": {
  "q": "At which level is the CPSA Foundation material primarily aimed?",
  "options": [
   "At the software architecture of a single system.",
   "At the company-wide enterprise architecture across all systems.",
   "At the physical network and data-center infrastructure.",
   "At the business-process and organizational architecture of the company."
  ],
  "optExpl": [
   "Correct: Foundation aims at the architecture of a single system.",
   "Enterprise architecture (all systems) lies above this level.",
   "Network/data-center infrastructure is a different, lower level.",
   "Business-process/organizational architecture is not the focus."
  ],
  "explanation": "Foundation deals with the architecture of a single system. Enterprise, infrastructure and business-process architecture lie above or below this level."
 },
 "c1q26": {
  "q": "Which statements about the notion of structure in software architecture are correct?",
  "options": [
   "A system always has at least one structure - if nothing else, an unplanned one.",
   "In addition to static structures, architecture also encompasses runtime behavior.",
   "A well-designed system has exactly one single relevant structure.",
   "Structures consist solely of building blocks; relationships play no role.",
   "Only explicitly documented structures actually exist in the system.",
   "Different views of a system must always show the same structure."
  ],
  "optExpl": [
   "Correct: every system has at least one (possibly unplanned) structure.",
   "Architecture also includes runtime behavior, not just static aspects.",
   "Systems typically have several structures/views, not just one.",
   "Relationships are a mandatory part of structures.",
   "Undocumented, implicit structures are also really present.",
   "Different views deliberately show different structures of the system."
  ],
  "explanation": "Every system has at least one (possibly unintended) structure, and architecture includes runtime behavior. Systems typically have several views/structures, and relationships are a mandatory part of them."
 },
 "c1q27": {
  "q": "What role do data and data models play in software architecture?",
  "options": [
   "The data model is a load-bearing architecture decision - often long-lived and hard to change afterwards.",
   "Data is a pure implementation detail with no influence on the architecture.",
   "The data model is best defined only after the architecture has been completed.",
   "Data models concern only the user interface."
  ],
  "optExpl": [
   "Correct: the data model is a load-bearing, long-lived decision.",
   "Data is not a mere detail - it strongly shapes the architecture.",
   "The data model is not defined only after the architecture.",
   "Data models concern far more than the user interface."
  ],
  "explanation": "The data model strongly shapes the architecture and is usually long-lived and expensive to change (comparable to the 'structural framework' of a building). It is not a mere detail, not a downstream decision, and not limited to the UI."
 },
 "c1q28": {
  "q": "At which levels of abstraction are data models typically described?",
  "options": [
   "Conceptual, logical, and physical.",
   "Exclusively physical (concrete tables and columns).",
   "Only as a UML class diagram, not otherwise.",
   "At the context, building block, and runtime level."
  ],
  "optExpl": [
   "Correct: conceptual, logical, and physical.",
   "Not only physical - the domain/logical level would then be missing.",
   "A UML class diagram is only one possible representation.",
   "Context/building block/runtime are architecture views, not data-model levels."
  ],
  "explanation": "Data models are described conceptually (domain-oriented), logically (structured, technology-neutral), and physically (concrete implementation). Context, building block, and runtime are architecture views, not data-model levels."
 },
 "c1q29": {
  "q": "Which statements about the relationship between data model and architecture are correct?",
  "options": [
   "Who owns and may change which data (data ownership) influences the functional partitioning of the building blocks.",
   "A shared data model used directly by all building blocks can greatly increase coupling.",
   "The data model can be chosen freely, independently of the partitioning of the building blocks.",
   "Data ownership is irrelevant for microservices.",
   "The data model should generally be designed only after the architecture has been completed."
  ],
  "optExpl": [
   "Correct: data ownership influences the functional partitioning of building blocks.",
   "A shared, directly used data model greatly increases coupling.",
   "Data model and partitioning are related - not freely chosen.",
   "For microservices in particular, data ownership is central (own DB per service).",
   "Data model and architecture emerge reciprocally, not strictly one after the other."
  ],
  "explanation": "Data ownership shapes the partitioning of building blocks, and a shared, directly used data model creates strong coupling (which is why microservices have their own data storage per service). Data model and partitioning are therefore related."
 },
 "c2q1": {
  "q": "Which statements assign the requirement terms correctly?",
  "options": [
   "A constraint restricts the solution space without itself being a function or a quality.",
   "A quality requirement describes HOW WELL something should be (e.g. the response time).",
   "A functional requirement specifies the response time that must be met.",
   "A constraint is merely a particularly important functional requirement.",
   "A quality requirement specifies which functions the system provides."
  ],
  "optExpl": [
   "Constraints delimit the solution space; they are themselves neither function nor quality.",
   "Quality requirements describe the HOW WELL, such as the required response time.",
   "Response time is a quality requirement, not a functional requirement.",
   "A constraint is not a particularly important functional requirement.",
   "Which functions are provided is described by a functional requirement, not by quality."
  ],
  "explanation": "Constraints delimit the solution space; quality requirements describe the HOW WELL. Response time is not a functional requirement, and a constraint is not an 'important' functional requirement."
 },
 "c2q2": {
  "q": "Which statements about the significance of quality requirements for the architecture are correct?",
  "options": [
   "They are decisive architecture drivers and strongly shape structural decisions.",
   "They should be clarified early, since later changes are expensive.",
   "They are considered only after functional completion.",
   "They concern almost exclusively the design of the user interface.",
   "Meeting them is solely the responsibility of the test team, not the architecture.",
   "They are less significant for the architecture than the functional requirements."
  ],
  "optExpl": [
   "Quality requirements are central architecture drivers and strongly shape structural decisions.",
   "Early clarification pays off, because later changes become expensive.",
   "Considering them only after the functionality would be too late.",
   "They concern the entire architecture, not just the interface.",
   "The architecture must enable quality characteristics - not just check them afterwards.",
   "Quality requirements are the decisive architecture drivers, not the functions."
  ],
  "explanation": "Quality requirements drive the architecture and should be clarified early. Considering them only at the end or reducing them to the interface would be wrong."
 },
 "c2q3": {
  "q": "Which of the following are constraints?",
  "options": [
   "A mandated programming language or target platform.",
   "A fixed, predetermined delivery date.",
   "A required maximum response time for the search.",
   "The ability to export reports as PDF.",
   "A required availability of 99.9 percent on annual average."
  ],
  "optExpl": [
   "Technology mandates such as language or platform are classic constraints.",
   "A fixed delivery date is an organizational constraint.",
   "A required response time is a quality requirement, not a constraint.",
   "PDF export describes a function, i.e. a functional requirement.",
   "A required availability is a quality requirement, not a constraint."
  ],
  "explanation": "Technology and schedule mandates are constraints. A required response time is a quality requirement, and PDF export is a functional requirement."
 },
 "c2q4": {
  "q": "How do you make a vague quality requirement such as 'The system should be fast' verifiable?",
  "options": [
   "By means of a quality scenario with a trigger, context, and a measurable response measure.",
   "By bindingly stipulating that 'fast' is judged subjectively by the team.",
   "By converting it into a constraint to choose a fast programming language.",
   "By deferring the refinement until initial performance measurements are available in operation."
  ],
  "optExpl": [
   "Correct: a quality scenario with a trigger, context, and a measurable response measure makes it verifiable.",
   "A subjective judgment remains vague and is precisely not measurable.",
   "A technology constraint does not make the requirement measurable.",
   "Late measurements in operation do not refine the requirement in advance."
  ],
  "explanation": "It becomes verifiable through a quality scenario with a measurable response measure (e.g. '95% of searches under 1 s'). Subjective judgments, a technology constraint, or late measurements do not make it measurable."
 },
 "c2q5": {
  "q": "Who is jointly responsible for clarifying and understanding the requirements?",
  "options": [
   "The architects too - they actively question and sharpen requirements.",
   "The stakeholders alone; the architecture adopts the requirements unchanged.",
   "Exclusively the business analysts, without involvement from the technical side.",
   "No one in particular, since complete requirements are already available at project start."
  ],
  "optExpl": [
   "Correct: architects actively question and sharpen requirements.",
   "The architecture does not adopt requirements unchanged, but actively helps clarify them.",
   "The technical side must be involved too, not just the analysts.",
   "Requirements are rarely available in full at project start."
  ],
  "explanation": "Architects are actively involved in clarification (not mere recipients). Requirements are rarely complete at the start, and the technical side belongs in the process."
 },
 "c2q6": {
  "q": "Which of the following is a main (top-level) characteristic of product quality according to ISO/IEC 25010?",
  "options": [
   "Maintainability",
   "Scalability",
   "Test coverage (code coverage)",
   "Cost-effectiveness (project costs)"
  ],
  "optExpl": [
   "Correct: maintainability is a main characteristic of ISO 25010.",
   "Scalability is only a sub-aspect, not a standalone main characteristic.",
   "Test coverage is not a product quality characteristic of ISO 25010.",
   "Project costs are not a product quality characteristic, but economic in nature."
  ],
  "explanation": "Maintainability is a main characteristic of ISO 25010. Scalability is only a sub-aspect (among others, of 'Flexibility'), not a standalone main characteristic; test coverage and project costs are not product quality characteristics at all."
 },
 "c2q7": {
  "q": "Which of the following is a functional requirement?",
  "options": [
   "The user can export invoices as PDF.",
   "Responses appear in under 200 ms.",
   "The system is available 99.9% around the clock.",
   "Java is the mandated language for the implementation."
  ],
  "optExpl": [
   "Correct: PDF export describes WHAT the system does - a function.",
   "A response time describes HOW WELL - a quality requirement.",
   "Availability is a quality requirement, not a function.",
   "A mandated language is a constraint."
  ],
  "explanation": "Functional requirements describe WHAT the system does (PDF export). Response time and availability are quality requirements; the Java mandate is a constraint."
 },
 "k1": {
  "q": "Assign each statement: functional requirement or quality requirement?",
  "explanation": "Functional requirements describe WHAT the system does (PDF export, user management). Response time and availability are quality requirements.",
  "categories": [
   "Functional requirement",
   "Quality requirement"
  ],
  "rows": [
   "The user can export invoices as PDF.",
   "The search returns results in under 1 second.",
   "The system is 99.9% available.",
   "An administrator can create new users."
  ]
 },
 "k2": {
  "q": "Assign each mandate: constraint or quality requirement?",
  "explanation": "Constraints (mandated technology, schedule) limit the solution space. Response time (performance) and ease of extensibility (maintainability) are quality requirements.",
  "categories": [
   "Constraint",
   "Quality requirement"
  ],
  "rows": [
   "The Java programming language must be used.",
   "The response time is under 200 ms.",
   "Fixed delivery date at the end of Q1.",
   "A new payment method can be integrated in under 2 person-days."
  ]
 },
 "c2q8": {
  "q": "Which belong to the product quality characteristics of ISO/IEC 25010?",
  "options": [
   "Reliability",
   "Security",
   "Test coverage (code coverage)",
   "Adherence to the project budget",
   "Scalability"
  ],
  "optExpl": [
   "Reliability is a product quality characteristic of ISO 25010.",
   "Security is a product quality characteristic of ISO 25010.",
   "Test coverage is measurable, but not an ISO 25010 quality characteristic.",
   "Budget adherence is not a product quality characteristic according to ISO 25010.",
   "Scalability is not a standalone product quality characteristic of ISO 25010."
  ],
  "explanation": "Reliability and security are ISO 25010 product quality characteristics. Test coverage and budget adherence are measurable, but not product quality characteristics according to ISO 25010 (the model was revised in 2023; portability, for example, was subsumed into 'Flexibility')."
 },
 "c2q9": {
  "q": "Why should quality requirements be clarified as early as possible?",
  "options": [
   "Because they decisively shape the architecture and subsequent structural changes are expensive.",
   "Because they may no longer be changed after the first release.",
   "Because otherwise they automatically become functional requirements.",
   "Because they concern exclusively the test phase and are needed there early."
  ],
  "optExpl": [
   "Correct: they shape the architecture, and late structural changes are expensive.",
   "Quality requirements are not frozen after the release.",
   "They do not automatically become functional requirements.",
   "They concern the entire architecture, not just the test phase."
  ],
  "explanation": "Clarified early because they drive the architecture and late changes are expensive. They are not 'frozen', do not become functional requirements, and do not concern only the tests."
 },
 "c2q10": {
  "q": "A stakeholder demands: 'The system must also be operable by visually impaired users.' What kind of requirement is this?",
  "options": [
   "A quality requirement (usability/accessibility).",
   "A functional requirement, since a concrete function is described.",
   "A constraint, since it mandates the technical implementation.",
   "A non-goal that limits the scope."
  ],
  "optExpl": [
   "Correct: accessibility is an aspect of usability - a quality requirement.",
   "No concrete function is described, but a quality.",
   "It does not mandate any technology, so it is not a constraint.",
   "It excludes nothing, so it is not a non-goal."
  ],
  "explanation": "Accessibility is an aspect of usability - i.e. a quality requirement. It does not describe a concrete function, mandate any technology, or constitute a non-goal."
 },
 "c2q11": {
  "q": "Which statements about the prioritization of requirements are correct?",
  "options": [
   "Time and budget are limited - not everything is equally important.",
   "Requirements can contradict one another and must be weighed against each other.",
   "Lower-priority requirements may afterwards be ignored without replacement.",
   "Prioritization is based solely on the technical implementation effort.",
   "A prioritization once set remains unchanged throughout the entire project."
  ],
  "optExpl": [
   "Limited resources force priorities - not everything is equally important.",
   "Contradictory requirements must be weighed against one another.",
   "Low-priority items are not automatically dropped without replacement.",
   "Besides effort, value and risk also count.",
   "Priorities change over the course of the project and must be reviewed continuously."
  ],
  "explanation": "Prioritization is done because resources are limited and requirements compete. Low-priority items are not automatically dropped, and effort is not the sole criterion (value and risk also count)."
 },
 "c2q12": {
  "q": "What typically holds for the relationship of different quality requirements to one another?",
  "options": [
   "They are often in conflict (trade-off) and must be weighed against one another.",
   "With good architecture they can all be maximally satisfied simultaneously.",
   "They are independent of one another and never influence each other.",
   "Only ever a single quality requirement is relevant at a time."
  ],
  "optExpl": [
   "Correct: quality characteristics often compete and must be weighed.",
   "They can rarely all be maximally satisfied at the same time.",
   "They are not independent, but influence one another.",
   "Usually several quality requirements are relevant at the same time."
  ],
  "explanation": "Quality characteristics frequently compete (trade-offs) and must be weighed. They can rarely be maximized simultaneously, are not independent, and are not individually exclusive."
 },
 "c2q13": {
  "q": "Which statements about an assumption in the architecture context are correct?",
  "options": [
   "It is a state of affairs taken as given but not assured.",
   "It should be recorded explicitly and treated as a risk in case it does not hold.",
   "It is a binding mandate that restricts the solution space.",
   "It is a measured metric about the existing system.",
   "It is a decision made that bindingly fixes the architecture design.",
   "Once made, it may no longer be questioned in the further course of the project."
  ],
  "optExpl": [
   "An assumption is presumed, but not assured.",
   "It should be documented and tracked as a risk.",
   "A binding, restricting mandate is a constraint.",
   "A measured metric is not an unconfirmed assumption.",
   "A binding decision is a decision, not an unconfirmed assumption.",
   "Assumptions must be reviewed continuously and revised if necessary."
  ],
  "explanation": "An assumption is unconfirmed and should be documented and tracked as a risk. A binding, restricting mandate, by contrast, is a constraint; a measured metric is something else."
 },
 "c2q14": {
  "q": "Which of the following are quality requirements (non-functional)?",
  "options": [
   "The application processes 1000 requests per second (performance).",
   "Sensitive data is stored encrypted (security).",
   "New developers get up to speed in under a day (maintainability).",
   "The user can cancel an invoice.",
   "The system sends a confirmation email after each order."
  ],
  "optExpl": [
   "Performance describes HOW WELL - a quality requirement.",
   "Encrypted storage concerns security - a quality requirement.",
   "Quick onboarding concerns maintainability - a quality requirement.",
   "Canceling an invoice describes a function - functional requirement.",
   "Sending an email describes a function - functional requirement."
  ],
  "explanation": "Performance, security, and maintainability are quality requirements. 'Cancel an invoice' describes a function - i.e. a functional requirement."
 },
 "c2q15": {
  "q": "Which is an example of an organizational (non-technical) constraint?",
  "options": [
   "The project must be completed by year-end with the existing team.",
   "Data storage must be in a relational database.",
   "Communication between the services runs over HTTPS.",
   "The response time must be below 300 ms."
  ],
  "optExpl": [
   "Correct: schedule and team composition are organizational constraints.",
   "A database mandate is a technical, not an organizational constraint.",
   "A protocol mandate such as HTTPS is a technical constraint.",
   "The response time is a quality requirement, not a constraint."
  ],
  "explanation": "Schedule and team composition are organizational constraints. Database/protocol mandates are technical constraints; the response time is a quality requirement."
 },
 "c2q16": {
  "q": "From what do quality requirements typically derive?",
  "options": [
   "From the business goals of the client.",
   "From the needs and concerns of the stakeholders.",
   "From the programming language already chosen.",
   "From the number of available developers.",
   "From the chosen process model (e.g. Scrum or waterfall)."
  ],
  "optExpl": [
   "The client's business goals are a central source.",
   "The needs and concerns of the stakeholders yield quality requirements.",
   "The technology choice is not a source of quality requirements.",
   "Team size does not generate quality requirements.",
   "The process model determines the process, not the quality requirements."
  ],
  "explanation": "Quality requirements arise from business goals and stakeholder concerns. The technology choice or team size is not a source of quality requirements."
 },
 "c2q17": {
  "q": "What distinguishes a requirement from a solution?",
  "options": [
   "A requirement describes WHAT or HOW WELL something should be - not the concrete implementation.",
   "A requirement already fixes the concrete technology for the implementation.",
   "A requirement is a design decision that has already been made.",
   "Requirement and solution differ only in level of detail."
  ],
  "optExpl": [
   "Correct: requirements state WHAT or HOW WELL, not the concrete how.",
   "A requirement does not mandate a concrete technology for the implementation.",
   "A requirement is not a design decision that has already been made.",
   "The difference is fundamental, not just level of detail."
  ],
  "explanation": "Requirements state what or how well - the solution (architecture) determines the how. A requirement does not mandate a technology, is not a design decision, and is more than just 'less detailed'."
 },
 "c2q18": {
  "q": "Why is it useful to also record non-goals (deliberately excluded points)?",
  "options": [
   "To clarify the scope and avoid false expectations.",
   "To thereby fully replace the functional requirements.",
   "To bindingly assign the team tasks for later releases.",
   "To make the architecture independent of the goals."
  ],
  "optExpl": [
   "Correct: non-goals clarify the scope and avoid false expectations.",
   "Non-goals do not replace functional requirements.",
   "They are not a binding task plan for later releases.",
   "They do not decouple the architecture from the goals."
  ],
  "explanation": "Non-goals delimit the scope and manage expectations. They do not replace requirements, are not release planning, and do not decouple the architecture from the goals."
 },
 "c2q19": {
  "q": "Which pieces of information help make a quality requirement verifiable?",
  "options": [
   "A concrete trigger/stimulus.",
   "The context or environment.",
   "A measurable response measure.",
   "A rough verbal assessment without a numerical value.",
   "The estimated development costs for the implementation."
  ],
  "optExpl": [
   "A concrete trigger is part of the verifiable quality scenario.",
   "The context or environment makes the requirement verifiable.",
   "A measurable response measure allows unambiguous verification.",
   "A rough verbal assessment without numbers is not verifiable.",
   "Estimated costs say nothing about the verifiability of the requirement."
  ],
  "explanation": "A quality requirement becomes verifiable through a trigger, context, and a measurable response measure. A rough verbal assessment without numbers is precisely not verifiable."
 },
 "c2q20": {
  "q": "What is needed when the interests of different stakeholders compete?",
  "options": [
   "A deliberate weighing and prioritizing of the conflicting concerns.",
   "Implementing every stated wish unchanged and in full.",
   "Leaving the decision solely to the technically loudest stakeholder.",
   "Setting conflicts aside until they resolve themselves in operation."
  ],
  "optExpl": [
   "Correct: conflicting concerns require deliberate weighing and prioritizing.",
   "Implementing all wishes unchanged and in full is impossible.",
   "Favoring a single stakeholder is unbalanced.",
   "Sitting it out does not resolve the conflicts by itself."
  ],
  "explanation": "Competing concerns require deliberate weighing and prioritizing. Implementing everything is impossible, favoring individuals is unbalanced, and sitting it out does not resolve conflicts."
 },
 "c2q21": {
  "q": "What changed in the product quality model of ISO/IEC 25010 with the 2023 revision?",
  "options": [
   "\"Safety\" was added as a standalone characteristic, and \"Usability\" is now called \"Interaction Capability\".",
   "The number of main characteristics was reduced to three.",
   "Quality characteristics were completely replaced by functional requirements.",
   "\"Reliability\" and \"Maintainability\" were removed without replacement."
  ],
  "optExpl": [
   "Correct: Safety was added, and Usability was renamed to \"Interaction Capability\".",
   "The number of main characteristics was not reduced to three.",
   "Quality characteristics were not replaced by functional requirements.",
   "Reliability and Maintainability still remain in place."
  ],
  "explanation": "In 2023, among other things Safety was added as a distinct characteristic and \"Usability\" was renamed to \"Interaction Capability\" (Portability was folded into \"Flexibility\"). Reliability and Maintainability still remain."
 },
 "c2q22": {
  "q": "How should you sensibly proceed when identifying stakeholders?",
  "options": [
   "Scan the environment layer by layer – from the system, through the business system, out to the wider surroundings.",
   "Ask already-known stakeholders about further affected parties (snowball principle).",
   "Consider only the paying clients.",
   "Include only stakeholders with a positive basic attitude toward the project.",
   "Create the stakeholder list once at project start and never adjust it afterward."
  ],
  "optExpl": [
   "Scanning the environment layer by layer (Alexander's \"onion\") finds stakeholders.",
   "The snowball principle uncovers further affected parties via known contacts.",
   "Non-paying affected parties can also be relevant stakeholders.",
   "Critically-minded affected parties are also relevant stakeholders.",
   "The stakeholder list must be continuously maintained, not created only once."
  ],
  "explanation": "You examine the environment layer by layer (Alexander's \"onion\") and expand via the snowball principle. Non-paying and critically-minded affected parties can also be relevant stakeholders."
 },
 "c2q23": {
  "q": "What does Conway's Law state in the context of software architecture?",
  "options": [
   "The structure of a system tends to mirror the communication structures of the developing organization.",
   "System performance grows linearly with the number of servers deployed.",
   "Every architecture inevitably erodes over time.",
   "The number of interfaces should equal the number of developers."
  ],
  "optExpl": [
   "Correct: System structures mirror the communication paths of the organization.",
   "A linear performance increase with servers is not Conway's statement.",
   "Architecture erosion is a different phenomenon, not Conway's Law.",
   "Number of interfaces equal to number of developers is fabricated."
  ],
  "explanation": "Conway's Law: system structures mirror the communication paths of the organization (and, conversely, influence them). The other statements concern scaling or erosion, or are fabricated."
 },
 "c2q24": {
  "q": "What does experience show about implicit (unspoken) requirements?",
  "options": [
   "They often concern quality requirements and should be actively made explicit.",
   "They are mostly functional in nature and are fully documented anyway.",
   "They can be ignored because they are unimportant to the architecture.",
   "The client always states them clearly of their own accord."
  ],
  "optExpl": [
   "Correct: Implicit expectations often concern quality and must be made explicit.",
   "They are often qualitative and precisely not fully documented.",
   "They strongly shape the architecture and must not be ignored.",
   "Unspoken expectations are rarely stated clearly of their own accord."
  ],
  "explanation": "Implicit expectations often concern quality requirements and strongly shape the architecture – you must actively work them out. Precisely because they are unspoken, they are easily overlooked."
 },
 "c2q25": {
  "q": "How does a factual conflict differ from a conflict of interest?",
  "options": [
   "A factual conflict is about facts or solution approaches; a conflict of interest is about the incompatible goals of the parties.",
   "A factual conflict concerns only people, a conflict of interest only technology.",
   "Both are identical and are merely named differently.",
   "A conflict of interest can always be resolved by facts alone."
  ],
  "optExpl": [
   "Correct: A factual conflict concerns facts/solution, a conflict of interest incompatible goals.",
   "The assignment \"people versus technology\" is wrong.",
   "The two types of conflict are not identical.",
   "Conflicts of interest can rarely be resolved by facts alone."
  ],
  "explanation": "Factual conflict = dispute over facts/solution (often resolvable through transparency); conflict of interest = incompatible goals (balancing/compromise needed, facts alone rarely suffice)."
 },
 "c2q26": {
  "q": "What characterizes a constraint compared to a normal requirement?",
  "options": [
   "It is a predetermined limit that the team can hardly or not at all influence.",
   "It is freely negotiable and easily changeable by the architecture team at any time.",
   "It is always a purely functional specification.",
   "Unlike requirements, it does not need to be documented."
  ],
  "optExpl": [
   "Correct: Constraints are predetermined limits that can hardly be influenced.",
   "They are precisely not freely negotiable or easily changeable.",
   "They are not purely functional, but also technical or organizational.",
   "Constraints should also be documented."
  ],
  "explanation": "Constraints are predetermined, hardly influenceable limits (technical, organizational, legal). They are precisely not freely negotiable, not inherently functional, and also need to be documented."
 },
 "c2q27": {
  "q": "What does the Kano model describe in dealing with requirements?",
  "options": [
   "It distinguishes basic, performance, and excitement characteristics by their effect on satisfaction.",
   "It prioritizes requirements solely by implementation cost.",
   "It maps requirements to the ISO 25010 characteristics.",
   "It measures the technical complexity of a requirement."
  ],
  "optExpl": [
   "Correct: Kano distinguishes basic, performance, and excitement characteristics by their effect on satisfaction.",
   "Kano does not prioritize solely by implementation cost.",
   "Kano does not map requirements to the ISO 25010 characteristics.",
   "Kano does not measure the technical complexity of a requirement."
  ],
  "explanation": "Kano classifies by effect on satisfaction: basic (must-have, only noticed negatively), performance (the more the better), and excitement characteristics (unexpectedly pleasing). It is not primarily about cost, ISO mapping, or complexity."
 },
 "c3q1": {
  "q": "Which statements about coupling and cohesion in design are correct?",
  "options": [
   "Loose coupling between building blocks is desirable.",
   "High cohesion within a building block is desirable.",
   "High coupling makes independent changes to individual building blocks easier.",
   "Low cohesion improves the reusability of a building block.",
   "Coupling and cohesion essentially denote the same quality characteristic.",
   "Cohesion measures the strength of the dependencies between different building blocks."
  ],
  "optExpl": [
   "Loose coupling reduces dependencies and eases isolated changes.",
   "High cohesion bundles what belongs together and improves comprehensibility.",
   "High coupling hinders isolated changes rather than easing them.",
   "Low cohesion worsens comprehensibility and reuse rather than improving them.",
   "Coupling and cohesion are different, complementary concepts, not the same thing.",
   "Dependencies between building blocks describe coupling, not cohesion."
  ],
  "explanation": "The goal is loose coupling and high cohesion. High coupling hinders isolated changes, and low cohesion worsens comprehensibility and reuse."
 },
 "c3q2": {
  "q": "What does the principle of 'Information Hiding' (the secrecy principle) state?",
  "options": [
   "Internal implementation details are hidden behind a stable interface.",
   "All attributes are made public so that other building blocks can access them directly.",
   "The interface is inevitably adjusted with every internal change.",
   "The source code is stored encrypted."
  ],
  "optExpl": [
   "Correct: Internals lie behind a stable interface; internal changes do not affect users.",
   "Public attributes contradict the hiding of implementation details.",
   "A stable interface is precisely meant not to change with every modification.",
   "Information Hiding means encapsulation, not encryption of the source code."
  ],
  "explanation": "Information Hiding conceals internals behind a stable interface, so that internal changes do not affect users. It is not about public attributes, co-changed interfaces, or encryption."
 },
 "c3q3": {
  "q": "What does the 'S' in the SOLID principles stand for?",
  "options": [
   "Single Responsibility Principle – a building block has exactly one responsibility (one reason to change).",
   "Separation of Concerns – concerns are separated.",
   "Stateless Principle – building blocks hold no state.",
   "Substitution Principle – subtypes replace their base types."
  ],
  "optExpl": [
   "Correct: The S stands for Single Responsibility – one reason to change per building block.",
   "Separation of Concerns is a separate principle, not part of SOLID.",
   "A \"Stateless Principle\" is not part of the SOLID principles.",
   "Substitutability is the L (Liskov), not the S."
  ],
  "explanation": "The S stands for Single Responsibility. Separation of Concerns is a different principle (not part of SOLID), and substitutability is the L (Liskov)."
 },
 "c3q4": {
  "q": "Which statements about layered architecture (Layers) are correct?",
  "options": [
   "Higher layers use the services of lower layers.",
   "The ordered direction of dependencies eases replacement and understanding.",
   "Within a layer, deliberately very different levels of abstraction are bundled.",
   "To optimize performance, lower layers should regularly call higher layers.",
   "The number of layers is fixed at exactly three."
  ],
  "optExpl": [
   "Upper layers access the defined services of the layers below.",
   "The ordered direction of dependencies creates structure and eases replacement and understanding.",
   "A layer bundles a similar, not a differing, level of abstraction as far as possible.",
   "Calls from bottom to top create undesirable cycles.",
   "The number of layers is not fixed; three is just a common example."
  ],
  "explanation": "Upper layers use defined services below; the ordered direction creates structure. A layer bundles a similar level of abstraction as far as possible, and calls from bottom to top create undesirable cycles."
 },
 "c3q5": {
  "q": "Which statements about Ports & Adapters (hexagonal architecture) are correct?",
  "options": [
   "The domain core logic is decoupled from technology and infrastructure.",
   "External concerns (UI, DB, APIs) are connected via interchangeable adapters.",
   "The domain logic depends directly on the concrete database technology.",
   "The goal is to bundle UI, logic, and persistence into one layer.",
   "The dependencies point from the domain logic outward toward technology and infrastructure."
  ],
  "optExpl": [
   "Ports & Adapters isolates the domain logic from technology and infrastructure.",
   "External concerns are connected via interchangeable adapters.",
   "A direct DB dependency of the domain logic contradicts the decoupling.",
   "Bundling all concerns contradicts the separation of core and technology.",
   "The dependencies point inward toward the domain logic, not from it outward."
  ],
  "explanation": "Ports & Adapters isolates the domain logic from technology and connects external elements via interchangeable adapters. A direct DB dependency or bundling all concerns contradicts this."
 },
 "c3q6": {
  "q": "Which statements typically apply to microservices?",
  "options": [
   "They are independently deployable and cut along domain boundaries.",
   "They increase operational complexity (distribution, monitoring).",
   "They must necessarily share a common database.",
   "They communicate exclusively via direct in-process calls.",
   "They must all be implemented in the same programming language."
  ],
  "optExpl": [
   "Microservices are independently deployable and cut along domain boundaries.",
   "Distribution and monitoring increase operational complexity.",
   "A shared database contradicts the independence of the services.",
   "Services communicate over the network, not only in-process.",
   "Microservices allow different languages; a uniform one is not necessary."
  ],
  "explanation": "Microservices are independently deployable, cut along domain boundaries, and increase operational complexity. A shared DB or purely in-process calls contradict the approach (communication over the network)."
 },
 "c3q7": {
  "q": "Which of these belong to the fundamental design principles?",
  "options": [
   "Separation of Concerns.",
   "Abstraction.",
   "Modularization and encapsulation.",
   "Early optimization at any cost.",
   "Combining as many responsibilities as possible in one class.",
   "Favoring copy-and-paste for quick reuse of code."
  ],
  "optExpl": [
   "Separation of Concerns is a fundamental design principle.",
   "Abstraction is one of the fundamental design principles.",
   "Modularization and encapsulation are fundamental design principles.",
   "\"Premature Optimization\" is a well-known anti-pattern, not a principle.",
   "Many responsibilities in one class contradict the Single Responsibility Principle (SRP).",
   "Copy-and-paste violates DRY and is an anti-pattern, not a principle."
  ],
  "explanation": "SoC, abstraction, and modularization are fundamental principles. 'Premature Optimization', by contrast, is a well-known anti-pattern."
 },
 "c3q8": {
  "q": "Which of the following are typical cross-cutting concepts (cross-cutting concerns)?",
  "options": [
   "Persistence.",
   "Security and authentication.",
   "Logging and error handling.",
   "The calculation of the domain-specific invoice amount.",
   "The layout of a single input form in the user interface."
  ],
  "optExpl": [
   "Persistence affects many building blocks across the board, so it is a cross-cutting concept.",
   "Security and authentication act across many building blocks.",
   "Logging and error handling affect the entire system across the board.",
   "The amount calculation is a specific domain function, not a cross-cutting concept.",
   "The layout of a single form is local, not a system-wide cross-cutting concept."
  ],
  "explanation": "Persistence, security, and logging/error handling affect many building blocks across the board. The amount calculation is a specific domain function, not a cross-cutting concept."
 },
 "c3q9": {
  "q": "How do top-down and bottom-up design differ?",
  "options": [
   "Top-down decomposes from the whole into detail; bottom-up assembles from existing detail building blocks.",
   "Top-down starts at the detail building blocks, bottom-up at the overall system.",
   "The two approaches are mutually exclusive and must never be combined.",
   "Top-down concerns only the database, bottom-up only the user interface."
  ],
  "optExpl": [
   "Correct: Top-down goes from the whole into detail, bottom-up the other way around.",
   "The terms are swapped here; top-down starts with the whole.",
   "In practice the two approaches are often combined.",
   "Neither is limited to the database or the user interface."
  ],
  "explanation": "Top-down = from the whole into detail, bottom-up = the other way around; both are often combined. The terms are not swapped here and are not limited to DB/UI."
 },
 "c3q10": {
  "q": "What is the benefit of abstraction and modularization in design?",
  "options": [
   "They make complexity manageable and enable independent development and change.",
   "They guarantee an increase in the runtime performance of every system.",
   "They make interfaces between building blocks superfluous.",
   "They deliberately increase coupling to speed up calls."
  ],
  "optExpl": [
   "Correct: They make complexity manageable and allow independent work and change.",
   "They do not guarantee better runtime performance of every system.",
   "Interfaces remain necessary and are not made superfluous.",
   "They reduce coupling rather than deliberately increasing it."
  ],
  "explanation": "Abstraction and modularization make complexity manageable and allow independent work. They do not guarantee performance, do not make interfaces superfluous, and do not increase coupling."
 },
 "c3q11": {
  "q": "For which scenario is the \"Pipes and Filters\" pattern best suited?",
  "options": [
   "A multi-stage data processing in which the output of one step is the input of the next.",
   "A highly interactive dialog in which the user constantly jumps back and forth between sub-steps.",
   "A system in which all steps jointly maintain a central, mutable state.",
   "A processing whose steps are rewired at runtime in a highly changing order."
  ],
  "optExpl": [
   "Correct: A fixed, multi-stage chain, output becomes the input of the next step.",
   "Pipes and Filters is not intended for highly interactive dialogs.",
   "A shared central, mutable state does not fit the filter concept.",
   "Constantly changing wiring contradicts the fixed processing chain."
  ],
  "explanation": "Pipes and Filters fits a fixed, multi-stage processing chain (output → input). It is not intended for highly interactive dialogs, a shared global state, or constantly changing wiring."
 },
 "c3q12": {
  "q": "What is a central difference between synchronous and asynchronous communication?",
  "options": [
   "In synchronous communication the caller waits for the response, in asynchronous communication it does not.",
   "Asynchronous communication is fundamentally always faster than synchronous.",
   "Synchronous communication works only locally, asynchronous only over the network.",
   "In asynchronous communication the caller blocks until the response arrives."
  ],
  "optExpl": [
   "Correct: In synchronous communication the caller waits, in asynchronous it is temporally decoupled.",
   "Asynchronous is not universally faster than synchronous.",
   "Both work locally as well as over the network.",
   "Blocking until the response arrives is precisely synchronous behavior."
  ],
  "explanation": "Synchronous = caller waits (blocks), asynchronous = temporally decoupled. Asynchronous is not universally faster, both work locally and over the network, and blocking is precisely synchronous."
 },
 "c3q13": {
  "q": "Which statements about technical debt are correct?",
  "options": [
   "It is deferred compromises or deficiencies in code or architecture.",
   "Left untreated, they make future changes harder and more expensive.",
   "It refers to the license and operating costs of the software in use.",
   "They disappear on their own over time, without any action by the team.",
   "Technical debt arises exclusively through deliberate, planned decisions by the team."
  ],
  "optExpl": [
   "Technical debt is deferred compromises or deficiencies in code and architecture.",
   "Left untreated, they make later changes more expensive and harder.",
   "It is not the license or operating costs of the software in use.",
   "They do not resolve themselves, but require active action.",
   "Technical debt also arises unintentionally, not only through planned decisions."
  ],
  "explanation": "Technical debt is deferred deficiencies that make later changes more expensive. It is not license/operating costs and does not resolve itself."
 },
 "c3q14": {
  "q": "What does the Dependency Inversion Principle require?",
  "options": [
   "High-level and low-level modules should depend on abstractions, not on concrete implementations.",
   "Low-level modules should depend directly on the high-level modules.",
   "Dependencies should be avoided entirely by not using any interfaces.",
   "Details should depend on other details to avoid detours."
  ],
  "optExpl": [
   "Correct: Both levels depend on abstractions, not on implementations.",
   "Not direct coupling, but dependence on abstractions is required.",
   "Interfaces are precisely used, not omitted.",
   "Details should not depend on details, but on abstractions."
  ],
  "explanation": "Dependency Inversion: both levels depend on abstractions, not details on details. It is not about direct high/low coupling or omitting interfaces."
 },
 "k3": {
  "q": "Assign each term: architecture pattern or design principle?",
  "explanation": "Layers and Ports & Adapters are architecture patterns (structure of the overall system). SRP and Information Hiding are design principles (guidelines for good design).",
  "categories": [
   "Architecture pattern",
   "Design principle"
  ],
  "rows": [
   "Layers",
   "Single Responsibility Principle",
   "Ports & Adapters (Hexagonal)",
   "Information Hiding"
  ]
 },
 "c3q15": {
  "q": "Which statements about \"Separation of Concerns\" are correct?",
  "options": [
   "Different concerns are handled in separate building blocks, each responsible for one.",
   "It promotes loose coupling and high cohesion and thus eases changes and testing.",
   "As many concerns as possible are bundled into one building block to save on calls.",
   "Concerns are separated by developer responsibility instead of by subject matter.",
   "Separation of Concerns can only be achieved through physical division into separate files."
  ],
  "optExpl": [
   "Each concern is handled in its own building block, each responsible for it.",
   "SoC promotes loose coupling and high cohesion, easing changes and testing.",
   "Bundling many concerns contradicts the separation of concerns.",
   "Separation is by subject matter, not by developer responsibility.",
   "SoC is a concept on many levels, not just physical file separation."
  ],
  "explanation": "SoC separates concerns into their own building blocks and favors loose coupling/high cohesion (better changeability and testability). Bundling many concerns or separating by person contradicts the principle."
 },
 "c3q16": {
  "q": "What does the DRY principle stand for?",
  "options": [
   "Knowledge or logic should not be duplicated, but maintained in a single place.",
   "Every functionality should, for safety reasons, be implemented redundantly in multiple places.",
   "Two coincidentally similar pieces of code must always be merged immediately.",
   "The principle concerns only duplicated comments, not duplicated logic."
  ],
  "optExpl": [
   "Correct: Knowledge or logic is maintained in a single place, not duplicated.",
   "Deliberate redundancy as \"safety\" contradicts DRY.",
   "Necessarily merging only coincidentally similar pieces misses the core.",
   "DRY concerns duplicated logic, not just duplicated comments."
  ],
  "explanation": "DRY keeps knowledge/logic in one place, so that changes are made centrally. Redundancy as 'safety', merging coincidentally similar pieces, or a limitation to comments miss the core."
 },
 "c3q17": {
  "q": "What does the YAGNI principle state?",
  "options": [
   "Do not build functionality in advance that is not (yet) currently needed.",
   "Build in as many extension points as possible up front to be future-proof.",
   "Implement every requirement as generically as possible from the outset.",
   "Once functions have been implemented, they may never be removed again."
  ],
  "optExpl": [
   "Correct: Build only what is currently needed, nothing in advance.",
   "Building in extension points in advance contradicts YAGNI.",
   "Implementing everything as generically as possible up front contradicts YAGNI.",
   "Removing functions is a different topic than YAGNI."
  ],
  "explanation": "YAGNI: build only what is currently needed. Extension points or genericity in advance contradict it; removing functions is a different topic."
 },
 "c3q18": {
  "q": "Which statements about architecture patterns are correct?",
  "options": [
   "They are proven, reusable solution templates for recurring structural problems.",
   "They create a common language and must fit the specific problem.",
   "They are concrete, single-use code snippets.",
   "Their use guarantees the best solution regardless of context.",
   "They prescribe the concrete choice of technology and framework as binding."
  ],
  "optExpl": [
   "Patterns are proven, reusable templates for recurring structural problems.",
   "They create a common language but must fit the specific problem.",
   "Patterns are not concrete, single-use code snippets.",
   "Patterns do not guarantee the best solution independently of context.",
   "Patterns are technology-independent and do not prescribe a concrete framework choice."
  ],
  "explanation": "Architecture patterns are proven, reusable templates and a common language – but they must fit. They are not one-off code and do not guarantee the best solution independently of context."
 },
 "c3q19": {
  "q": "What does the Model-View-Controller (MVC) pattern separate?",
  "options": [
   "Data model, presentation (View) and control/interaction (Controller).",
   "Presentation, application and database layer (three technical layers).",
   "It deliberately combines model and view into a single component.",
   "The three phases Compile, Verify and Commit."
  ],
  "optExpl": [
   "Correct: MVC separates the data model, View and Controller.",
   "Technical layers are not the same as model, view and controller.",
   "MVC separates model and view; it does not merge them.",
   "Compile, Verify and Commit have nothing to do with MVC."
  ],
  "explanation": "MVC separates model, view and controller. This is not the same as technical layers, does not merge model/view, and has nothing to do with Compile/Verify/Commit."
 },
 "c3q20": {
  "q": "Which measures promote loose coupling?",
  "options": [
   "Communication via clearly defined interfaces or abstractions.",
   "Event-based (asynchronous) communication between building blocks.",
   "Direct access to internal fields of other building blocks for shorter paths.",
   "Shared global, mutable variables for exchanging data.",
   "Inheritance from concrete classes of other building blocks in order to adopt their behavior directly.",
   "Introducing mutual (bidirectional) references between two building blocks."
  ],
  "optExpl": [
   "Clearly defined interfaces and abstractions reduce coupling.",
   "Event-based, asynchronous communication decouples sender and receiver.",
   "Direct access to the internals of other building blocks increases coupling.",
   "Global mutable variables increase coupling instead of reducing it.",
   "Inheritance from concrete foreign classes increases coupling to their internals.",
   "Mutual references create tight, cyclic coupling instead of reducing it."
  ],
  "explanation": "Interfaces/abstractions and event-based communication reduce coupling. Direct access to internals and global mutable variables increase it."
 },
 "c3q21": {
  "q": "Why should cyclic dependencies between building blocks be avoided?",
  "options": [
   "They hinder understanding, isolated testing as well as independent change and reuse.",
   "They are explicitly intended and desirable in layered architectures.",
   "They improve performance because building blocks call each other directly.",
   "They only affect compile time, not maintainability."
  ],
  "optExpl": [
   "Correct: Cycles hinder understanding, testing, change and reuse.",
   "In layered architectures cycles are undesirable, not intended.",
   "Cycles provide no performance advantage.",
   "Cycles do indeed affect maintainability, not just compile time."
  ],
  "explanation": "Cycles couple building blocks tightly to each other and hinder testing and changes. They are undesirable in layers, provide no performance advantage, and do indeed affect maintainability."
 },
 "c3q22": {
  "q": "Which statements about refactoring are correct?",
  "options": [
   "It improves the internal structure of the code.",
   "The externally observable behavior remains unchanged in the process.",
   "New domain functions are deliberately added in the process.",
   "The code is deleted entirely and rewritten from scratch.",
   "Reported bugs are deliberately fixed and the domain behavior is corrected in the process."
  ],
  "optExpl": [
   "Refactoring improves the internal structure of the code.",
   "The externally observable behavior remains unchanged in the process.",
   "Adding new domain functions is feature work, not refactoring.",
   "Rewriting everything from scratch is a rewrite, not refactoring.",
   "Fixing bugs changes the behavior and is therefore not refactoring."
  ],
  "explanation": "Refactoring improves the internal structure while keeping the external behavior the same. Adding new functions is feature work, rewriting everything is a rewrite - neither is refactoring."
 },
 "c3q23": {
  "q": "Why is it preferable to program against interfaces rather than against concrete implementations?",
  "options": [
   "Concrete implementations can thereby be exchanged more easily.",
   "The coupling to implementation details decreases.",
   "Calls via an interface are generally faster at runtime.",
   "This makes additional tests unnecessary.",
   "Concrete implementations become unnecessary and no longer need to be written."
  ],
  "optExpl": [
   "Interfaces make concrete implementations easier to exchange.",
   "The coupling to implementation details decreases.",
   "There is no blanket runtime performance advantage.",
   "Tests do not become unnecessary as a result.",
   "Concrete implementations remain necessary; the interface does not replace them."
  ],
  "explanation": "Interfaces decouple and make implementations exchangeable. There is no blanket performance advantage, and tests do not become unnecessary as a result."
 },
 "k6": {
  "q": "Assign: increases coupling or reduces coupling?",
  "explanation": "Direct access to internals and global mutable state increase coupling. Clear interfaces and Dependency Injection reduce it.",
  "categories": [
   "Increases coupling",
   "Reduces coupling"
  ],
  "rows": [
   "Direct access to internal details of another building block",
   "Communication only via a clearly defined interface",
   "Shared global, mutable variables",
   "Dependency Injection instead of fixed instantiation"
  ]
 },
 "k8": {
  "q": "Does the respective principle belong to SOLID?",
  "explanation": "SOLID = SRP, OCP, LSP, ISP, DIP. DRY is an important principle but does not belong to SOLID.",
  "categories": [
   "Part of SOLID",
   "Not part of SOLID"
  ],
  "rows": [
   "Single Responsibility Principle",
   "Open/Closed Principle",
   "Dependency Inversion Principle",
   "Don't Repeat Yourself (DRY)"
  ]
 },
 "c3q24": {
  "q": "Which statements about the Open/Closed Principle (OCP) are correct?",
  "options": [
   "Building blocks should be open for extension but closed for modification.",
   "New behavior is preferably added via abstractions/polymorphism instead of changing proven code.",
   "Already tested code should be changed as directly as possible for new behavior.",
   "All classes should be declared final and never be extended.",
   "OCP requires that each class has exactly one single responsibility."
  ],
  "optExpl": [
   "OCP: building blocks open for extension, closed for modification.",
   "Add new behavior via abstractions without changing proven code.",
   "Changing proven code directly contradicts the OCP.",
   "A blanket \"everything final\" contradicts openness for extension.",
   "Exactly one responsibility per class is the SRP, not the OCP."
  ],
  "explanation": "OCP: open for extension, closed for modification - add new behavior via abstractions without touching proven code. Direct modification or a blanket \"everything final\" contradict the principle."
 },
 "c3q25": {
  "q": "What does the Interface Segregation Principle (ISP) recommend?",
  "options": [
   "Narrow, role-specific interfaces so that clients only depend on what they actually use.",
   "Bundle as many methods as possible into one central interface to ensure consistency.",
   "Cut interfaces along technical layers instead of by client roles.",
   "Address concrete implementations directly to avoid detours via interfaces."
  ],
  "optExpl": [
   "Correct: Narrow, role-specific interfaces, no dependency on unused methods.",
   "One large catch-all interface is exactly the opposite of ISP.",
   "ISP cuts by client roles, not by technical layers.",
   "Addressing implementations directly contradicts the interface idea."
  ],
  "explanation": "ISP: no dependency on unused methods → narrow, role-specific interfaces. One large catch-all interface is exactly the opposite."
 },
 "c3q26": {
  "q": "What does the Liskov Substitution Principle (LSP) require?",
  "options": [
   "Objects of a subtype must be usable in place of their base type without breaking correctness.",
   "A subtype may strengthen the preconditions of its methods relative to the base type.",
   "Base types must derive from their subtypes, not the other way around.",
   "Inheritance should generally be replaced by copying code."
  ],
  "optExpl": [
   "Correct: A subtype must be able to replace the base type without breaking correctness.",
   "Strengthening preconditions breaks the LSP.",
   "The direction of derivation is not reversed; subtypes derive from the base type.",
   "LSP has nothing to do with copying code."
  ],
  "explanation": "LSP: a subtype must be able to replace the base type everywhere. Strengthening preconditions breaks LSP; the direction of derivation is not reversed; it has nothing to do with copying code."
 },
 "c3q27": {
  "q": "What characterizes an event-driven (publish/subscribe) pattern?",
  "options": [
   "Senders publish events without knowing the receivers; receivers react to them - loosely coupled.",
   "Every sender knows and calls its receivers directly and synchronously.",
   "There may always be exactly one receiver per event.",
   "Receivers actively poll the sender at fixed intervals (polling)."
  ],
  "optExpl": [
   "Correct: Sender and receiver are loosely coupled via events.",
   "Directly, synchronously calling the receivers contradicts the decoupling.",
   "Multiple receivers per event are also possible.",
   "Polling does not describe the event-driven publish/subscribe pattern."
  ],
  "explanation": "With publish/subscribe, sender and receiver are decoupled via events (multiple receivers also possible). Direct calls, a single-receiver requirement or polling do not describe it."
 },
 "c3q28": {
  "q": "What does the client-server pattern describe?",
  "options": [
   "Requesting clients use services of a providing server via a defined interface.",
   "All nodes are equal peers and offer each other the same services (peer-to-peer).",
   "The server initiates all requests to the clients on its own.",
   "Client and server must necessarily run on the same machine."
  ],
  "optExpl": [
   "Correct: Clients request services from the server via a defined interface.",
   "Equal peer nodes describe peer-to-peer, not client-server.",
   "The client initiates the requests, not the server.",
   "Client and server can run on separate machines."
  ],
  "explanation": "In the client-server pattern the client requests services from the server. Equal peer nodes are peer-to-peer; the server does not initiate the requests; separate machines are possible."
 },
 "c3q29": {
  "q": "Which statements about the heuristic \"composition over inheritance\" are correct?",
  "options": [
   "Behavior is often better achieved by composing objects than by deep inheritance.",
   "Composition avoids the tight binding and fragility of deep inheritance hierarchies.",
   "Inheritance is fundamentally forbidden and must always be avoided.",
   "Deep inheritance hierarchies are generally more flexible than composition.",
   "Composition fundamentally makes runtime behavior faster than inheritance.",
   "With composition the enclosing object automatically inherits all methods of its components."
  ],
  "optExpl": [
   "Composing objects is often more flexible than deep inheritance.",
   "Composition avoids tight binding and fragility of deep inheritance hierarchies.",
   "It is a heuristic, not a fundamental ban on inheritance.",
   "Deep inheritance hierarchies are not generally more flexible than composition.",
   "It is about flexibility, not a blanket runtime advantage.",
   "Composition inherits nothing automatically; calls must be delegated explicitly."
  ],
  "explanation": "Composition is usually more flexible and less fragile than deep inheritance - a heuristic, not a ban. Inheritance is not generally forbidden, and deep hierarchies are not more flexible."
 },
 "c3q30": {
  "q": "Which statements about stateless services are correct?",
  "options": [
   "Requests can be distributed to any equivalent instances.",
   "This facilitates horizontal scaling and load distribution.",
   "Stateless services fundamentally cannot process any data.",
   "The session state is bound firmly to a particular instance.",
   "Stateless services may not use an external database or a cache."
  ],
  "optExpl": [
   "Without bound state, any equivalent instance can handle any request.",
   "This facilitates horizontal scaling and load distribution.",
   "Stateless services do indeed process data.",
   "Fixed instance binding would be precisely stateful, not stateless.",
   "Offloading external state to a DB or cache is precisely typical of stateless."
  ],
  "explanation": "Without bound session state, any instance can handle any request → easy scaling. They do indeed process data, and fixed instance binding would be precisely stateful."
 },
 "c3q31": {
  "q": "Which properties promote the maintainability/modifiability of a system?",
  "options": [
   "Modularization into manageable building blocks.",
   "Clearly defined, stable interfaces.",
   "Low coupling between the building blocks.",
   "As many shared global variables as possible for quick data exchange.",
   "Extensive duplication of code in many different places."
  ],
  "optExpl": [
   "Modularization into manageable building blocks promotes maintainability.",
   "Clearly defined, stable interfaces make changes easier.",
   "Low coupling makes independent changes easier.",
   "Shared global variables increase coupling and make changes harder.",
   "Code duplication makes changes harder because you have to adapt in many places."
  ],
  "explanation": "Modularity, stable interfaces and low coupling promote maintainability. Shared global variables, by contrast, increase coupling and make changes harder."
 },
 "c3q32": {
  "q": "What purpose do resilience patterns such as timeout, retry or circuit breaker serve?",
  "options": [
   "For robustly handling errors and failures, especially in distributed systems.",
   "For noticeably speeding up error-free calls in normal operation.",
   "To guarantee that remote calls never fail.",
   "To replace the need to handle errors at all."
  ],
  "optExpl": [
   "Correct: They help to handle errors and failures robustly.",
   "They do not speed up error-free calls in normal operation.",
   "They do not guarantee that remote calls are error-free.",
   "They do not replace error handling but complement it."
  ],
  "explanation": "Timeout/retry/circuit breaker help to handle errors and failures. They do not speed up the normal case, do not guarantee error-freeness, and do not replace error handling."
 },
 "k9": {
  "q": "Synchronous or asynchronous communication?",
  "explanation": "Synchronous = the caller waits, blocking, for the response. Asynchronous = sender and receiver are decoupled in time (queue/events).",
  "categories": [
   "Synchronous",
   "Asynchronous"
  ],
  "rows": [
   "The caller waits, blocking, for the response.",
   "A message is placed in a queue, the sender continues immediately.",
   "Direct, blocking method/function call.",
   "An event is published, receivers react later."
  ]
 },
 "c3q33": {
  "q": "What is the purpose of the facade pattern?",
  "options": [
   "It offers a simplified, unified access to a more complex subsystem.",
   "It translates between two mutually incompatible interfaces.",
   "It creates a new object of a product family for every call.",
   "It exposes the internal structure of the subsystem to all users."
  ],
  "optExpl": [
   "Correct: A facade offers simplified, unified access to a more complex subsystem.",
   "Translating incompatible interfaces is the task of the adapter.",
   "Objects of a product family are created by the factory, not the facade.",
   "A facade hides the internal structure instead of exposing it."
  ],
  "explanation": "A facade simplifies access to a subsystem and hides its complexity. Translating incompatible interfaces is the adapter; creating objects is the factory."
 },
 "c3q34": {
  "q": "What is a module (building block) in the sense of modularization?",
  "options": [
   "A self-contained unit with a clearly delimited task and a defined interface.",
   "An arbitrary grouping of files in the same directory, without a common task.",
   "A single function that performs exactly one computation.",
   "A running process on a server."
  ],
  "optExpl": [
   "Correct: A module bundles related tasks behind a clear interface.",
   "A mere directory without a common task is not a real module.",
   "A single function is too small for an entire module.",
   "A runtime process is an operational concept, not a building block of modularization."
  ],
  "explanation": "A module bundles related functionality (high cohesion) behind an interface. A directory, a single function or a runtime process are something different."
 },
 "c3q35": {
  "q": "Which statements about the trade-off between monolith and microservices are correct?",
  "options": [
   "A monolith is usually easier to operate and to test end-to-end.",
   "Microservices are independently deployable and scalable, but operationally more complex.",
   "Microservices are the better choice in every respect and in every project.",
   "A monolith fundamentally cannot be organized into modules.",
   "A monolith fundamentally cannot be scaled horizontally."
  ],
  "optExpl": [
   "Correct, a monolith runs and tests more easily as a whole.",
   "Correct, independent deployment and scaling comes at the cost of higher operational complexity.",
   "Microservices are not universally better - it remains a trade-off.",
   "A monolith can very well be organized modularly, too.",
   "A monolith can also be scaled as a whole across multiple instances."
  ],
  "explanation": "Monolith = simpler operation/testing; microservices = independent scaling/deployment at higher operational complexity. Microservices are not universally better, and monoliths can very well be modular."
 },
 "c3q36": {
  "q": "Why does one use proven architecture/design patterns instead of reinventing every solution?",
  "options": [
   "Because they are proven, reduce risk and, through well-known terms, ease communication.",
   "Because a pattern once chosen always fits regardless of the problem.",
   "Because using patterns makes one's own design decisions unnecessary.",
   "Because as many patterns as possible used at once automatically improve a system."
  ],
  "optExpl": [
   "Correct: Proven patterns reduce risk and create a shared language.",
   "No pattern fits always - it has to fit the problem.",
   "Patterns do not replace one's own design decisions.",
   "The sheer number of patterns does not improve a system automatically."
  ],
  "explanation": "Patterns bundle proven knowledge and create a shared language - but they have to fit the problem. They do not replace decisions, and their sheer number improves nothing."
 },
 "c3q37": {
  "q": "What does a domain-oriented cut (e.g. in Domain-Driven Design) recommend?",
  "options": [
   "Cut building blocks along domain boundaries/domains, not just by technical layers.",
   "Cut building blocks strictly by technical layers (UI/logic/DB) instead of by domain.",
   "Bundle the entire domain into a single central module.",
   "Align the cut with the repository's folder structure."
  ],
  "optExpl": [
   "Correct: Cut building blocks along domains or bounded contexts.",
   "Purely technical layers are precisely not a domain cut.",
   "A single central domain module does not reflect domain boundaries.",
   "The folder structure is not a criterion for a domain cut."
  ],
  "explanation": "A domain cut is oriented toward domains or bounded contexts, not purely toward technical layers. A central domain module or the folder structure is not a domain cut."
 },
 "c3q38": {
  "q": "Which statements about encapsulation are correct?",
  "options": [
   "Data and the associated operations are bundled into a single unit.",
   "The internal state is accessible only via a defined interface (hidden).",
   "It mainly means grouping related classes in the same package.",
   "It denotes encrypting the source code against unauthorized reading.",
   "It means making all attributes of a class publicly accessible.",
   "It denotes merging several objects into a single process."
  ],
  "optExpl": [
   "Correct, encapsulation bundles data with its associated operations.",
   "Correct, the internal state remains hidden behind an interface.",
   "Placing classes in a package is merely packaging.",
   "Encapsulation does not mean encrypting source code.",
   "Public attributes break encapsulation instead of establishing it.",
   "Placing objects into a process is deployment, not encapsulation."
  ],
  "explanation": "Encapsulation bundles data and behavior and hides the internal state behind an interface. Packaging and encryption are each different concepts."
 },
 "c3q39": {
  "q": "What is the purpose of the adapter pattern?",
  "options": [
   "It connects two mutually incompatible interfaces so that they can work together.",
   "It offers simplified access to a complex subsystem.",
   "It fully decouples sender and receiver via events.",
   "It ensures that there is only a single instance of a class."
  ],
  "optExpl": [
   "Correct: An adapter translates between the expected and the existing interface.",
   "Simplified access to a subsystem describes the facade.",
   "Event-based decoupling is publish/subscribe, not the adapter.",
   "Ensuring exactly one instance is the singleton pattern."
  ],
  "explanation": "An adapter translates between an expected and an existing interface. Simplified access = facade; event decoupling = publish/subscribe; single instance = singleton."
 },
 "c3q40": {
  "q": "Which of these belong to the goals of modularization?",
  "options": [
   "Independent development of individual parts.",
   "Reusability of building blocks.",
   "Limited impact of changes (local modifiability).",
   "The tightest possible intertwining of the building blocks with one another.",
   "The complete elimination of all interfaces between the building blocks."
  ],
  "optExpl": [
   "Correct, modules can be developed independently of one another.",
   "Correct, clearly cut building blocks are reusable.",
   "Correct, changes stay locally limited and do not affect everything.",
   "Tight intertwining means high coupling - the opposite of the goal.",
   "Modules need interfaces to collaborate; it does not work entirely without them."
  ],
  "explanation": "Modularization enables independent development, reuse and locally limited changes. Tight intertwining (high coupling) is precisely the opposite of the goal."
 },
 "c3q41": {
  "q": "Which statements about the trade-off of strong reuse are correct?",
  "options": [
   "Reusable building blocks often become more general and therefore more complex.",
   "Many users of a building block can increase the coupling to it.",
   "Reuse has exclusively advantages and no costs whatsoever.",
   "Reuse should generally be avoided in the sense of DRY.",
   "Changes to a widely used building block always remain without consequences for its users."
  ],
  "optExpl": [
   "Correct, broadly usable building blocks become more general and therefore more complex.",
   "Correct, many users of a building block increase the coupling to it.",
   "Reuse is not free; it also has drawbacks.",
   "DRY argues for reuse, not against it.",
   "Changes to widely used building blocks affect many users, not without consequences."
  ],
  "explanation": "Reuse can make building blocks more general/complex and increase the coupling to them - so weigh it up. It is not free, but also not to be avoided (DRY even argues for it)."
 },
 "k12": {
  "q": "Does the characteristic promote maintainability or harm it?",
  "explanation": "Clear interfaces and high cohesion promote maintainability. High coupling and duplication make changes more difficult.",
  "categories": [
   "Promotes maintainability",
   "Harms maintainability"
  ],
  "rows": [
   "Clearly defined, stable interfaces",
   "High coupling between many building blocks",
   "High cohesion within the building blocks",
   "Much duplicated code (violation of DRY)"
  ]
 },
 "c3q42": {
  "q": "What is recommended during design regarding the functional and technical architecture?",
  "options": [
   "First understand the functional decomposition (problem space) and build the technical solution on top of it.",
   "First fully define the technical infrastructure; the functionality follows from it.",
   "Functional and technical architecture are identical and need not be considered separately.",
   "The functional decomposition is secondary, as long as the technology is performant."
  ],
  "optExpl": [
   "Correct: First understand the problem space, then align the technology with it.",
   "Defining the technology first leads to poorly decomposed systems.",
   "Functional and technical architecture must be considered separately.",
   "The functional decomposition is central, not subordinate to performance."
  ],
  "explanation": "First understand the problem space/functional decomposition, then align the technology with it (\"technology follows the functionality\"). Technology-first or ignoring the functionality leads to poorly decomposed systems."
 },
 "c3q43": {
  "q": "What does \"Miller's number\" (7±2) indicate when structuring an architecture?",
  "options": [
   "The number of elements that can be grasped simultaneously is limited – building blocks should remain manageable per level.",
   "A system should consist of exactly seven layers.",
   "Each component may contain at most nine lines of code.",
   "After seven iterations an architecture is necessarily finished."
  ],
  "optExpl": [
   "Correct: Only a few elements can be grasped at once – remain manageable per level.",
   "Miller does not prescribe a fixed number of exactly seven layers.",
   "The number does not limit the lines of code per component.",
   "Miller says nothing about a number of iterations."
  ],
  "explanation": "Miller describes the limited number of \"chunks\" (~7±2) that can be grasped simultaneously – an argument for manageable decomposition per level. It is not a fixed rule for layers, lines of code, or iterations."
 },
 "c3q44": {
  "q": "Which statement about the approach to architecture design is correct?",
  "options": [
   "An architecture cannot be derived purely linearly from the requirements; the design proceeds iteratively.",
   "There is a universal standard procedure that delivers the optimal architecture in every project.",
   "Once the requirements document is complete, the architecture follows unambiguously and automatically.",
   "Design decisions may no longer be revised after the project has started."
  ],
  "optExpl": [
   "Correct: Architecture emerges iteratively, not as a linear derivation from requirements.",
   "There is no standard procedure that fits optimally in every project.",
   "No architecture follows automatically from the requirements document.",
   "Decisions are indeed adjusted as new knowledge emerges."
  ],
  "explanation": "Architecture emerges iteratively and exploratively, not as a linear derivation. There is no \"silver bullet\", no automatic derivation, and decisions are adjusted as new knowledge emerges."
 },
 "c3q45": {
  "q": "How should the goal of \"loose coupling\" be correctly understood?",
  "options": [
   "Coupling should be as low as possible, but as strong as functionally necessary – with no coupling at all there would be no collaboration.",
   "Coupling should generally be reduced to zero, no matter the cost.",
   "The more coupling, the better a system can be maintained.",
   "Coupling and cohesion denote the same phenomenon."
  ],
  "optExpl": [
   "Correct: As little coupling as possible, as much as functionally necessary.",
   "Zero coupling prevents any collaboration between building blocks.",
   "More coupling makes maintenance harder, not easier.",
   "Coupling and cohesion are different concepts."
  ],
  "explanation": "Loose coupling is not an end in itself: building blocks must collaborate, so an appropriate degree is needed. Zero coupling prevents functionality; more coupling makes maintenance harder; coupling is not the same as cohesion."
 },
 "c3q46": {
  "q": "Which kind of relationship tends to create the strongest coupling between building blocks?",
  "options": [
   "Implementation inheritance (the subclass depends on internal details of the base).",
   "Communication via a narrow, clearly defined interface.",
   "Loose, event-based (asynchronous) notification.",
   "Delegation to an object referenced through an interface."
  ],
  "optExpl": [
   "Correct: Implementation inheritance binds strongly to the internals of the base class.",
   "A narrow, clearly defined interface couples only loosely.",
   "Asynchronous, event-based notification couples especially loosely.",
   "Delegation via an interface keeps coupling low."
  ],
  "explanation": "Implementation inheritance couples very strongly to the internals of the base class. Interfaces, events, and delegation via interfaces couple much more loosely – hence \"composition over inheritance\"."
 },
 "c3q47": {
  "q": "Does dynamic coupling (resolved only at runtime) automatically mean \"loose\" coupling?",
  "options": [
   "No – the dependency is often merely shifted or hidden, not actually reduced.",
   "Yes – as soon as something is resolved at runtime, the coupling is always minimal.",
   "Yes – dynamic coupling removes every dependency completely.",
   "No – dynamic coupling is always stronger than any static coupling."
  ],
  "optExpl": [
   "Correct: The dependency is often merely relocated or concealed, not reduced.",
   "Runtime resolution does not automatically make the coupling minimal.",
   "Dynamic coupling does not remove any dependency completely.",
   "Dynamic coupling is not generally stronger than static coupling."
  ],
  "explanation": "Dynamic resolution (e.g., via configuration/reflection) often merely relocates or conceals dependencies; it is not loose per se. Conversely, it is also not generally stronger than static coupling."
 },
 "c3q48": {
  "q": "Which statements about incoming and outgoing dependencies (afferent/efferent) are correct?",
  "options": [
   "Many incoming dependencies (afferent) make a building block \"stable\" – changes to it have broad effects.",
   "Many outgoing dependencies (efferent) tend to make a building block \"unstable\" or prone to change.",
   "Incoming dependencies have no influence whatsoever on changeability.",
   "A building block with no dependencies at all is fundamentally poorly designed.",
   "Many incoming dependencies (afferent) make a building block particularly easy to change.",
   "Afferent and efferent dependencies denote the same thing and are interchangeable."
  ],
  "optExpl": [
   "Correct, many incoming dependencies make a building block stable and risky to change.",
   "Correct, many outgoing dependencies tend to make a building block unstable.",
   "Incoming dependencies do indeed influence changeability.",
   "A building block with no dependencies at all is not inherently poor.",
   "Many incoming dependencies make safe changes harder, not easier.",
   "Afferent (incoming) and efferent (outgoing) denote opposite directions."
  ],
  "explanation": "Many incoming dependencies = \"stable\" (changes are risky because many rely on it); many outgoing = \"unstable\". Incoming dependencies do influence changeability, and independence is not inherently bad."
 },
 "c3q49": {
  "q": "What is characteristic of a cross-cutting concept?",
  "options": [
   "It affects many building blocks across the board and cannot be cleanly encapsulated in a single building block.",
   "It can be fully enclosed in exactly one functional component.",
   "It is always a purely organizational governance requirement.",
   "It affects only the user interface."
  ],
  "optExpl": [
   "Correct: It acts system-wide across many building blocks and cannot be locally encapsulated.",
   "Precisely not – it cannot be enclosed in one component.",
   "Cross-cutting concepts are technical in nature, not mere governance.",
   "They affect many building blocks, not just the user interface."
  ],
  "explanation": "Cross-cutting concepts (e.g., persistence, security, logging) act system-wide across many building blocks and precisely cannot be locally encapsulated. They are technical in nature, not mere governance, and not limited to the UI."
 },
 "c3q50": {
  "q": "How do ACID and BASE differ as consistency approaches in persistence?",
  "options": [
   "ACID emphasizes strict consistency (classically relational); BASE favors availability and eventual consistency (often NoSQL).",
   "ACID belongs to NoSQL databases, BASE to relational databases.",
   "Both guarantee immediate, strong consistency across distributed nodes at all times.",
   "BASE stands for stricter transaction guarantees than ACID."
  ],
  "optExpl": [
   "Correct: ACID emphasizes strict consistency, BASE availability and eventual consistency.",
   "The assignment is swapped: ACID is relational, BASE more NoSQL.",
   "BASE precisely does not guarantee immediate strong consistency at all times.",
   "BASE deliberately relaxes the guarantees, so it is not stricter."
  ],
  "explanation": "ACID = strict transactional consistency (typically relational), BASE = availability + eventual consistency (typically NoSQL/distributed). The assignment is not swapped, and BASE deliberately relaxes the guarantees."
 },
 "c3q51": {
  "q": "What does the CAP theorem state for distributed data storage?",
  "options": [
   "During a network partition one must trade off between consistency and availability – not all three goals are fully achievable simultaneously.",
   "Consistency, availability, and partition tolerance can be fully guaranteed simultaneously at all times.",
   "Distributed systems must fundamentally forgo availability.",
   "CAP describes three consecutive phases of a database deployment."
  ],
  "optExpl": [
   "Correct: During a partition one must trade off consistency against availability.",
   "All three properties cannot be fully guaranteed simultaneously.",
   "CAP does not force a general forgoing of availability.",
   "CAP is not a phase model of a deployment."
  ],
  "explanation": "CAP: During a partition a compromise between consistency and availability is necessary – all three properties cannot be fully guaranteed simultaneously. It is not a phase model and does not force a general forgoing of availability."
 },
 "c3q52": {
  "q": "What is referred to as a \"layer bridge\" (skipping a layer) in layered architectures?",
  "options": [
   "The deliberate bypassing of an intermediate layer – permitted in the relaxed approach, but it creates additional dependencies and should be documented.",
   "A layer that automatically synchronizes all other layers.",
   "The strict rule that a layer may never be skipped.",
   "A permission for lower layers to call upper ones."
  ],
  "optExpl": [
   "Correct: An intermediate layer is deliberately skipped – permitted, but to be documented.",
   "A layer bridge does not automatically synchronize any layers.",
   "It is not a prohibition, but precisely the permitted skipping.",
   "Calls from bottom to top remain taboo and create cycles."
  ],
  "explanation": "A layer bridge skips a layer (permitted in the \"relaxed\" model), but it creates additional dependencies – therefore deliberately document it. In the strict model, skipping is not allowed; calls from bottom to top remain taboo (cycle)."
 },
 "c3q53": {
  "q": "Which rules apply in the ideal case for a strict layered architecture?",
  "options": [
   "Calls occur only from top to bottom; the reverse path creates an undesirable cycle.",
   "Building blocks of a layer are ideally at a similar level of abstraction.",
   "Each layer may access any other layer at will.",
   "Two building blocks with a mutual dependency deliberately belong in different layers.",
   "In the strict variant, each layer may skip any number of layers below it."
  ],
  "optExpl": [
   "Correct, calls occur only downward – otherwise a cycle arises.",
   "Correct, building blocks of a layer are at a similar level of abstraction.",
   "Arbitrary access to any layer contradicts the pattern.",
   "Mutually dependent building blocks rather belong in the same layer.",
   "The strict variant forbids skipping layers."
  ],
  "explanation": "Strict layering: only calls downward (otherwise a cycle) and a uniform level of abstraction per layer. Arbitrary access contradicts the pattern; mutually dependent building blocks rather belong in the same layer."
 },
 "c3q54": {
  "q": "Which disadvantage is typical of deeply nested layered architectures?",
  "options": [
   "Passing calls through many layers can cost performance, and changes often propagate through several layers.",
   "Layers fundamentally prevent any form of reuse.",
   "Layering inevitably makes the system incomprehensible.",
   "Layers preclude the use of defined interfaces."
  ],
  "optExpl": [
   "Correct: Passing calls through costs performance, and changes propagate through many layers.",
   "Layering promotes reuse rather than preventing it.",
   "Layers tend to make a system more comprehensible, not incomprehensible.",
   "Layers by no means preclude defined interfaces."
  ],
  "explanation": "Many layers cost performance when passing calls through, and changes (e.g., to a data field) propagate across the layers. Layering promotes – not prevents – reuse, comprehensibility, and interfaces."
 },
 "c3q55": {
  "q": "What distinguishes active from passive filters in a pipes-and-filters architecture?",
  "options": [
   "Active filters fetch or push data themselves; passive filters are supplied with data or read out from the outside.",
   "Active filters modify data, passive filters pass them through unchanged.",
   "Active filters know each other, passive filters are isolated.",
   "Active filters run only sequentially, passive ones only in parallel."
  ],
  "optExpl": [
   "Correct: Active filters drive the data flow themselves, passive ones are supplied.",
   "The difference concerns control, not the modification of the data.",
   "Filters generally do not know each other, regardless of active or passive.",
   "Active or passive says nothing about sequential or parallel execution."
  ],
  "explanation": "The difference lies in the control of the data flow: active filters drive the transport themselves, passive ones wait to be supplied/read. Both process data and do not know each other."
 },
 "c3q56": {
  "q": "Which statements about pipes and filters are correct?",
  "options": [
   "Filters do not know each other and are decoupled via pipes – making them easy to exchange and reuse.",
   "Error handling is demanding, since a filter does not know the prior history of the data.",
   "Filters share a common global state to coordinate with each other.",
   "The pattern is especially suited to highly interactive user dialogs.",
   "The pattern fundamentally prevents parallel processing of the filter stages."
  ],
  "optExpl": [
   "Correct, filters decoupled via pipes are easy to exchange and reuse.",
   "Correct, without knowledge of the data history, error handling is difficult.",
   "Filters do not share a common global state.",
   "For highly interactive dialogs the fixed processing chain is unsuitable.",
   "Pipes and filters precisely enables parallel processing rather than preventing it."
  ],
  "explanation": "Filters are decoupled via pipes (exchangeable) – but error handling is difficult, because a filter does not know the history. There is no shared state, and for interactive dialogs the fixed processing chain is unsuitable."
 },
 "c3q57": {
  "q": "By which criterion should microservices primarily be cut?",
  "options": [
   "By functional aspects (e.g., bounded context) – too fine a cut leads to \"nano-services\" with high overhead.",
   "By purely technical layers (one UI, logic, and database service each).",
   "As small as at all possible – the more services, the better.",
   "By the random availability of individual developers."
  ],
  "optExpl": [
   "Correct: Cut functionally by bounded context; too fine creates costly nano-services.",
   "A purely technical cut into UI, logic, and DB is unsuitable.",
   "Ever smaller is not better – the overhead rises sharply.",
   "The availability of developers is not a sensible cutting criterion."
  ],
  "explanation": "The cut is made functionally (e.g., bounded context). A purely technical or extremely fine cut (\"smaller is better\") creates nano-services with disproportionate communication and operational effort."
 },
 "c3q58": {
  "q": "Which challenges do microservices typically bring with them?",
  "options": [
   "Higher operational and deployment effort due to many independent units.",
   "Dependence on the network with additional latency and new sources of error.",
   "A mandatory shared database and synchronized releases of all services.",
   "The impossibility of scaling individual services independently.",
   "The elimination of any need for monitoring and central logging.",
   "Distributed transactions and data consistency thereby become trivially solvable."
  ],
  "optExpl": [
   "Correct, many independent units increase operational and deployment effort.",
   "Correct, network dependence brings additional latency and new sources of error.",
   "A shared database and coupled releases are precisely not necessary.",
   "Independent scaling is possible and even a strength.",
   "Distributed systems need more monitoring and logging, not less.",
   "Distributed transactions and consistency become harder, not trivial."
  ],
  "explanation": "Distribution brings operational/deployment overhead and network dependence (latency, partial failures). Independent deployment and independent scaling, by contrast, are strengths – no shared DB or coupled releases."
 },
 "c3q59": {
  "q": "Which statement about the interplay of microservices is correct?",
  "options": [
   "Services should depend on each other as little as possible and communicate via technology-neutral interfaces.",
   "Services should communicate synchronously with each other as much as possible in order to always be consistent.",
   "Every service must be allowed to read the internal database of the others directly.",
   "A service must not make its own technology choice."
  ],
  "optExpl": [
   "Correct: Low coupling and communication via technology-neutral interfaces.",
   "Much synchronous exchange couples too strongly and contradicts the approach.",
   "Direct access to foreign databases violates encapsulation.",
   "Services may well choose their own technology."
  ],
  "explanation": "The goal is low coupling and communication via technology-neutral interfaces (only where functionally necessary). Much synchronous exchange, direct access to foreign databases, or forced uniform technology contradict the approach."
 },
 "k14": {
  "q": "Assign each characteristic to the matching pattern.",
  "explanation": "Layers: vertical hierarchy, calls downward, changes propagate through. Pipes & Filters: decoupled, exchangeable processing steps via data streams, ideal for stream/batch processing.",
  "categories": [
   "Layered architecture",
   "Pipes & Filters"
  ],
  "rows": [
   "Vertical arrangement; upper levels use services of the ones below.",
   "Independent processing steps, chained via data streams.",
   "Calls occur only from top to bottom, otherwise a cycle arises.",
   "The steps do not know each other and are freely exchangeable.",
   "Well suited for step-by-step data-stream or batch processing.",
   "Changes to deep levels can propagate upward."
  ]
 },
 "k15": {
  "q": "Is each one a cross-cutting concept or not?",
  "explanation": "Logging, security, persistence, and error handling act system-wide across many building blocks (cross-cutting concepts). Discount calculation and product detail display are concrete functional features.",
  "categories": [
   "Cross-cutting concept",
   "Not a cross-cutting concept"
  ],
  "rows": [
   "Logging throughout the entire system.",
   "Calculating a specific discount in the shopping cart.",
   "Authentication and authorization.",
   "Persistence or uniform data access.",
   "Displaying the detail page of a single product.",
   "Uniform error handling across building blocks."
  ]
 },
 "c3q60": {
  "q": "What purpose do short feedback loops (e.g., prototypes, early integration, tests) serve in architecture design?",
  "options": [
   "To verify assumptions and risks early and to adjust decisions as new knowledge emerges.",
   "To freeze the architecture unchanged after the first commitment.",
   "To fully replace architecture documentation.",
   "To reduce the number of stakeholders involved."
  ],
  "optExpl": [
   "Correct: They verify assumptions and risks early and enable adjustments.",
   "Feedback loops do not freeze the architecture.",
   "They do not replace architecture documentation.",
   "They do not serve to reduce the number of stakeholders."
  ],
  "explanation": "Feedback loops provide early insights into assumptions and risks, so that one can course-correct. They do not freeze anything, do not replace documentation, and do not reduce stakeholders."
 },
 "c3q61": {
  "q": "What characterizes an \"evolutionary architecture\" with fitness functions?",
  "options": [
   "Automated criteria continuously check whether important quality characteristics are preserved during changes.",
   "The architecture is defined once and never changed again afterward.",
   "Fitness functions measure exclusively the speed of the team.",
   "Evolutionary architecture deliberately forgoes any quality assurance."
  ],
  "optExpl": [
   "Correct: Fitness functions continuously and automatically check whether quality characteristics are preserved.",
   "Evolutionary architecture is developed further, not frozen once.",
   "Fitness functions measure quality characteristics, not the team speed.",
   "It does not forgo quality assurance, but automates it."
  ],
  "explanation": "Evolutionary architecture supports guided, incremental evolution; fitness functions continuously check (often automatically) important quality characteristics. It is neither about freezing, team speed, nor forgoing QA."
 },
 "c3q62": {
  "q": "Which statements about the relationship between feedback and risk in design are correct?",
  "options": [
   "The later feedback arrives, the more expensive corrections tend to become.",
   "Risky or uncertain decisions should be secured early with feedback (risk-driven).",
   "Feedback is only useful at the end of the project.",
   "Risks disappear on their own if they are ignored.",
   "All decisions are equally risky and must be worked through in a fixed order."
  ],
  "optExpl": [
   "Correct, the later the feedback, the more expensive corrections become.",
   "Correct, risky decisions should be secured early through feedback.",
   "Feedback only at the end of the project would come far too late.",
   "Ignored risks do not disappear on their own.",
   "Risk-driven prioritizes by risk, rather than treating all equally."
  ],
  "explanation": "Late feedback makes corrections more expensive, so risky decisions are secured early (risk-driven approach). Feedback only at the end or ignoring risks is the opposite."
 },
 "c3q63": {
  "q": "What is the central principle when designing an interface?",
  "options": [
   "It establishes a stable \"contract\" (the WHAT) and hides the internal implementation (the HOW).",
   "It should expose as many internal details as possible so that users are flexible.",
   "It must be designed individually differently for each caller.",
   "It should change along with every internal change."
  ],
  "optExpl": [
   "Correct: It is a stable contract (the WHAT) and hides the HOW.",
   "Exposing internal details contradicts information hiding.",
   "An interface need not be designed individually per caller.",
   "It should remain stable, not migrate along with every internal change."
  ],
  "explanation": "A good interface is a stable contract and hides the internals (information hiding). Exposing internals, varying per caller, or changing along with every internal change contradicts the purpose."
 },
 "c3q64": {
  "q": "What trade-off exists in the granularity of interfaces?",
  "options": [
   "Fine-grained interfaces are flexible but create many calls (expensive when remote); coarse-grained ones bundle, but are less flexible.",
   "Fine-grained interfaces are superior in every respect.",
   "Granularity has no influence on performance or coupling.",
   "Coarse-grained interfaces always create more network load in remote calls."
  ],
  "optExpl": [
   "Correct: Fine-grained is flexible but call-intensive; coarse-grained bundles, but is less flexible.",
   "Fine-grained interfaces are not superior in every respect.",
   "Granularity does influence performance and coupling.",
   "Coarse-grained tends to reduce remote calls, rather than increase them."
  ],
  "explanation": "Fine-grained = flexible, but many calls (expensive when remote); coarse-grained = less \"chattiness\", but less flexible. Granularity does affect performance/coupling; coarse-grained tends to reduce remote calls."
 },
 "c3q65": {
  "q": "Which statements about designing robust, long-lived interfaces are correct?",
  "options": [
   "Changes should be backward-compatible where possible; otherwise versioning is needed.",
   "Being strict when sending and tolerant when receiving increases robustness (robustness principle).",
   "Public interfaces may be changed at any time without regard for consumers.",
   "Versioning of interfaces is fundamentally unnecessary.",
   "The more operations and parameters an interface offers, the more stable it is."
  ],
  "optExpl": [
   "Correct, changes should be backward-compatible, otherwise versioning is needed.",
   "Correct, sending strictly and receiving tolerantly increases robustness.",
   "Breaking public interfaces without regard for consumers is risky.",
   "Versioning of interfaces is by no means unnecessary.",
   "A large interface surface hinders stability rather than increasing it."
  ],
  "explanation": "Backward compatibility or versioning protects consumers; „send strictly, receive tolerantly“ (robustness principle after Postel) increases robustness. Simply breaking public interfaces or discarding versioning is risky."
 },
 "c3q66": {
  "q": "How does an architecture deliberately fulfill a quality requirement such as „high availability“?",
  "options": [
   "Through deliberate design decisions or tactics (e.g. redundancy, failover) that contribute to the quality goal.",
   "Simply by having the requirement written down in the document.",
   "Solely through the choice of a faster programming language.",
   "By leaving the requirement to the test team."
  ],
  "optExpl": [
   "Correct: targeted tactics such as redundancy and failover fulfill the quality goal.",
   "A merely noted requirement does not fulfill itself.",
   "A faster programming language alone does not ensure high availability.",
   "Availability cannot be delegated to the test team."
  ],
  "explanation": "Quality goals are achieved through targeted design decisions/tactics (e.g. redundancy and failover for availability). Merely noting it, a language choice alone, or delegating to the test team does not fulfill them."
 },
 "c4q1": {
  "q": "Which are central purposes of architecture documentation?",
  "options": [
   "Communication and shared understanding among stakeholders.",
   "A basis for onboarding, maintenance and well-founded decisions.",
   "Traceability of important architecture decisions – even later on.",
   "It replaces the source code as the authoritative source of the actual system behavior.",
   "It makes ongoing coordination within the team unnecessary, since everything important is available in writing."
  ],
  "optExpl": [
   "Communication and shared understanding are a core purpose of documentation.",
   "Documentation supports onboarding, maintenance and well-founded decisions.",
   "Documentation keeps important decisions traceable even later on.",
   "The actual behavior lies in the code – documentation does not replace it.",
   "Documentation supports coordination but does not make it unnecessary."
  ],
  "explanation": "Documentation serves communication, onboarding/maintenance and traceability of decisions. However, it does not replace the code – the actual behavior lies in the code."
 },
 "c4q2": {
  "q": "What is arc42?",
  "options": [
   "A proven template or structuring scheme for documenting software architectures.",
   "A process model that prescribes the order of architecture decisions in a binding way.",
   "A concrete architecture pattern for distributed systems.",
   "A tool that automatically generates architecture diagrams from the code."
  ],
  "optExpl": [
   "Correct: arc42 is a structuring template with twelve sections.",
   "arc42 does not prescribe a binding order of decisions.",
   "arc42 is a documentation template, not an architecture pattern.",
   "arc42 does not automatically generate diagrams from the code."
  ],
  "explanation": "arc42 is a structuring template (12 sections) for architecture documentation – not a binding process model, not an architecture pattern and not a code generator."
 },
 "c4q3": {
  "q": "Which statements about context delimitation (context view) are correct?",
  "options": [
   "It shows the system as a whole with its external neighbors (users, external systems).",
   "It depicts the interfaces of the system to its environment.",
   "It shows the internal decomposition of the system into its building blocks.",
   "It depicts the temporal sequence of internal method calls.",
   "It describes cross-cutting concepts such as security, logging and error handling."
  ],
  "optExpl": [
   "The context view shows the system with its external neighbors.",
   "It depicts the interfaces of the system to the environment.",
   "The internal decomposition is the building block view, not the context view.",
   "Temporal sequences are shown by the runtime view, not the context view.",
   "Cross-cutting concepts form a separate part, not the context view."
  ],
  "explanation": "The context view delimits the system from its environment (external neighbors and interfaces). The internal decomposition is the building block view, temporal sequences the runtime view."
 },
 "c4q4": {
  "q": "Which statements about the building block view are correct?",
  "options": [
   "It shows the static decomposition of the system into building blocks.",
   "It can refine building blocks hierarchically (whitebox of the contained building blocks).",
   "It shows the dynamic interaction of the building blocks at runtime.",
   "It assigns the building blocks to the execution nodes (hardware).",
   "It describes the system with its external neighbors and interfaces."
  ],
  "optExpl": [
   "The building block view shows the static decomposition into building blocks.",
   "It refines building blocks hierarchically as a whitebox of the parts.",
   "Dynamic interaction at runtime is shown by the runtime view.",
   "The assignment to hardware is the deployment view.",
   "External neighbors and interfaces are shown by the context view."
  ],
  "explanation": "The building block view shows the static structure and refines building blocks hierarchically. Dynamic interaction = runtime view; assignment to hardware = deployment view."
 },
 "c4q5": {
  "q": "What does the runtime view describe?",
  "options": [
   "The dynamic interaction of building blocks at runtime (processes, scenarios).",
   "The static folder structure of the source code repository.",
   "The hierarchical decomposition of the system into building blocks.",
   "The assignment of software to servers and environments."
  ],
  "optExpl": [
   "Correct: the runtime view shows dynamic processes and scenarios.",
   "The folder structure of the repository is not the runtime view.",
   "The hierarchical decomposition into building blocks is the building block view.",
   "The assignment of software to servers is the deployment view."
  ],
  "explanation": "The runtime view shows dynamic behavior (e.g. scenarios, sequences). Static structure = building block view; assignment to servers = deployment view."
 },
 "c4q6": {
  "q": "What does the deployment view show?",
  "options": [
   "The mapping of the software onto infrastructure/nodes and their communication paths.",
   "The internal functional decomposition of the system into modules.",
   "The order of messages in a use case.",
   "The inheritance relationships between classes."
  ],
  "optExpl": [
   "Correct: it maps software onto nodes and communication paths.",
   "The functional decomposition into modules is the building block view.",
   "The message order in the use case is shown by the runtime view.",
   "Inheritance relationships between classes are shown by the class diagram."
  ],
  "explanation": "The deployment view shows onto which nodes/environments the software is distributed and how they communicate. The others describe building block, runtime or class aspects."
 },
 "c4q7": {
  "q": "What does the standard ISO/IEC/IEEE 42010 govern?",
  "options": [
   "Concepts for architecture description (stakeholders, concerns, views/viewpoints).",
   "The concrete structuring of an architecture documentation into 12 sections.",
   "A maturity model for evaluating development processes.",
   "The notation of the individual UML diagram types."
  ],
  "optExpl": [
   "Correct: 42010 defines stakeholders, concerns and views.",
   "The structuring into twelve sections is arc42, not 42010.",
   "42010 is not a maturity model for process evaluation.",
   "42010 does not govern the notation of the UML diagram types."
  ],
  "explanation": "ISO/IEC/IEEE 42010 describes the framework and terminology for architecture descriptions (stakeholders, concerns, views). The 12-section structuring is arc42; it does not govern maturity levels or UML notation. (R3.)"
 },
 "c4q8": {
  "q": "What is a UML sequence diagram typically used for?",
  "options": [
   "For temporal processes and the exchange of messages between objects/building blocks.",
   "For the static relationships between classes (association, inheritance).",
   "For the distribution of artifacts onto execution nodes.",
   "For the decomposition of the system into functional building blocks."
  ],
  "optExpl": [
   "Correct: sequence diagrams show the temporal exchange of messages between objects.",
   "Static class relationships are shown by the class diagram.",
   "The distribution onto execution nodes is shown by the deployment diagram.",
   "The decomposition into functional building blocks is shown by the building block view."
  ],
  "explanation": "Sequence diagrams show the temporal exchange of messages (runtime view). Static class relationships, distribution or building block decomposition are other diagrams or views."
 },
 "c4q9": {
  "q": "What is an Architecture Decision Record (ADR) used for?",
  "options": [
   "To record an architecture decision that has been made, including its context, considered alternatives and consequences.",
   "To track all open tasks and their processing status.",
   "To centrally log runtime errors that have occurred.",
   "To fully capture the client's requirements."
  ],
  "optExpl": [
   "Correct: an ADR records the decision, context, alternatives and consequences.",
   "Open tasks are tracked by a backlog, not an ADR.",
   "Runtime errors are logged by logging, not an ADR.",
   "Requirements capture is not a task of an ADR."
  ],
  "explanation": "An ADR documents a decision with context, alternatives and consequences. Task tracking, error logs or requirements capture are something else."
 },
 "c4q10": {
  "q": "What does 'audience-appropriate' documentation mean?",
  "options": [
   "Content, level of detail and notation are aligned to the information needs of the respective stakeholders.",
   "A single document with maximum level of detail is created for all readers.",
   "The documentation is deliberately written exclusively for developers.",
   "All views are repeated in full for every audience."
  ],
  "optExpl": [
   "Correct: content, level of detail and notation are aligned to the readers' needs.",
   "A maximum document for everyone is precisely not audience-appropriate.",
   "Documentation addresses many roles, not only developers.",
   "Repeating all views for every audience is unnecessary."
  ],
  "explanation": "Audience-appropriate means: aligning content, level of detail and notation to the needs of the respective readers – not a maximum document for everyone, not only for developers and no repetition of all views."
 },
 "k4": {
  "q": "Assign each view/notation: static (structure) or dynamic (behavior)?",
  "explanation": "The building block and class views show the static structure. The runtime view and sequence diagram show dynamic behavior (processes at runtime).",
  "categories": [
   "Static (structure)",
   "Dynamic (behavior)"
  ],
  "rows": [
   "Building block view",
   "Runtime view",
   "Class diagram",
   "Sequence diagram"
  ]
 },
 "c4q11": {
  "q": "What distinguishes the business and technical context in context delimitation?",
  "options": [
   "The business context shows neighbors/interfaces from a functional perspective, the technical context the concrete channels and protocols.",
   "The business context describes the internal business logic, the technical context the internal code.",
   "Both show the same thing; the difference lies only in the diagram type.",
   "The technical context lists the quality requirements."
  ],
  "optExpl": [
   "Correct: business means partners and data, technical means channels and protocols.",
   "Both concern the system boundary, not the internal details.",
   "They show different aspects, not just a different diagram type.",
   "Quality requirements are not part of the technical context."
  ],
  "explanation": "The context view can be depicted from a business perspective (which partners/data) and a technical perspective (via which channels/protocols) – both concern the system boundary, not the internals or the quality requirements."
 },
 "c4q12": {
  "q": "What does a UML component diagram primarily depict?",
  "options": [
   "Components/building blocks and their provided or required interfaces.",
   "The temporal sequence of method calls between objects.",
   "The assignment of components to physical servers.",
   "The individual attributes and methods of each class in detail."
  ],
  "optExpl": [
   "Correct: component diagrams show building blocks and their interfaces.",
   "The temporal sequence of calls is shown by the sequence diagram.",
   "The server assignment is shown by the deployment diagram.",
   "Attributes and methods in detail are shown by the class diagram."
  ],
  "explanation": "Component diagrams show building blocks and their interfaces (building block view). Temporal sequence = sequence diagram; server assignment = deployment diagram; attributes/methods = class diagram."
 },
 "c4q13": {
  "q": "Why are architectures described using multiple views?",
  "options": [
   "Because different views address different questions and stakeholders.",
   "Because no single view can show all relevant aspects.",
   "Because each view merely repeats the same information in a different color.",
   "Because a minimum number of diagrams is required by law.",
   "Because the number of views directly proves the maturity of the architecture."
  ],
  "optExpl": [
   "Different views address different questions and stakeholders.",
   "No single view can show all relevant aspects.",
   "The views do not repeat the same information in a different color.",
   "There is no legally required minimum number of diagrams.",
   "The number of views does not prove any maturity of the architecture."
  ],
  "explanation": "Multiple views address different questions and audiences, because no single one shows everything. They do not repeat the same information, and there is no legally required minimum number."
 },
 "c4q14": {
  "q": "Which properties make architecture documentation particularly useful?",
  "options": [
   "It is up to date and is maintained alongside relevant changes.",
   "It is tailored to the respective audience.",
   "It is as concise as possible and as detailed as necessary.",
   "It is as extensive as possible – being up to date is secondary.",
   "It is kept identical for all readers, so that no one has a different version.",
   "It uses as many technical terms as possible to ensure the highest precision."
  ],
  "optExpl": [
   "Up-to-date, maintained documentation stays reliable and useful.",
   "Documentation tailored to the audience meets the information need.",
   "Appropriately concise documentation is easy to read and maintain.",
   "Maximum extent at the expense of being up to date is precisely harmful.",
   "Uniform documentation for everyone contradicts tailoring to audiences.",
   "Too much technical jargon harms comprehensibility rather than helping."
  ],
  "explanation": "Useful documentation is up to date, audience-appropriate and appropriately concise. Maximum completeness at the expense of being up to date is precisely not the goal."
 },
 "c4q15": {
  "q": "What advantage does a standardized notation (e.g. UML) offer over arbitrary 'boxes and arrows'?",
  "options": [
   "A more unambiguous meaning of the diagram elements that others can follow.",
   "It automatically guarantees that the depicted architecture is correct.",
   "It makes explanatory legends and documentation completely unnecessary.",
   "It forbids any informal sketch in the design process."
  ],
  "optExpl": [
   "Correct: standard notation gives elements an agreed, clear meaning.",
   "A notation does not guarantee a correct architecture.",
   "Explanatory legends and documentation do not become unnecessary because of it.",
   "Informal sketches remain permitted in design."
  ],
  "explanation": "Standard notations give elements an agreed meaning (better comprehensibility). They do not guarantee correctness, do not replace every explanation and do not forbid informal sketches."
 },
 "c4q16": {
  "q": "You want to show how an ordering process runs between several building blocks at runtime. Which view fits best?",
  "options": [
   "The runtime view (e.g. as a sequence diagram).",
   "The building block view, since all involved building blocks are listed.",
   "The deployment view, since several building blocks are involved.",
   "The context view, since a business process is shown."
  ],
  "optExpl": [
   "Correct: temporal processes between building blocks are shown by the runtime view.",
   "The building block view lists building blocks but shows no process.",
   "The deployment view concerns servers, not the temporal process.",
   "The context view shows the system boundary, not internal processes."
  ],
  "explanation": "A temporal process between building blocks belongs in the runtime view (e.g. sequence diagram). Building block, deployment and context views answer other questions."
 },
 "c4q17": {
  "q": "Which contents typically belong in architecture documentation (e.g. according to arc42)?",
  "options": [
   "The context delimitation of the system.",
   "The quality requirements or quality scenarios.",
   "The complete, line-by-line explanation of the entire source code.",
   "The meeting minutes of every single daily standup.",
   "The current daily load and monitoring metrics from ongoing production operation."
  ],
  "optExpl": [
   "The context delimitation is a fixed component of arc42.",
   "Quality requirements explicitly belong in the architecture documentation.",
   "A line-by-line code explanation does not belong in the documentation.",
   "Standup minutes are not part of the architecture documentation.",
   "Ongoing operational metrics belong in monitoring, not in the architecture documentation."
  ],
  "explanation": "Context delimitation and quality requirements belong in the architecture documentation (arc42). A line-by-line code explanation or standup minutes do not belong there."
 },
 "k7": {
  "q": "Assign each question to the appropriate view.",
  "explanation": "Decomposition into building blocks and their internal structure = building block view. Assignment to hardware/nodes and communication paths = deployment view.",
  "categories": [
   "Building block view",
   "Deployment view"
  ],
  "rows": [
   "Into which modules/components is the system decomposed?",
   "Onto which servers/nodes is the software distributed?",
   "How is a subsystem structured internally?",
   "Over which network paths do the computers communicate?"
  ]
 },
 "c4q18": {
  "q": "Which statements about the UML class diagram are correct?",
  "options": [
   "It shows types/classes and their relationships (e.g. association, inheritance).",
   "It belongs to the static structure view.",
   "It primarily depicts the temporal sequence of messages between objects.",
   "It maps the distribution of artifacts onto execution nodes.",
   "It primarily depicts the state transitions of an object over its lifetime."
  ],
  "optExpl": [
   "Class diagrams show types and their relationships.",
   "They belong to the static structure view.",
   "Temporal message sequence is shown by the sequence diagram.",
   "The distribution of artifacts onto nodes is shown by the deployment diagram.",
   "State transitions over the lifetime are shown by the state diagram."
  ],
  "explanation": "Class diagrams show static structure (types + relationships). Temporal message sequence = sequence diagram; distribution onto nodes = deployment diagram."
 },
 "c4q19": {
  "q": "Which decisions typically belong in an Architecture Decision Record (ADR)?",
  "options": [
   "The choice of an architecture pattern with far-reaching consequences.",
   "A hard-to-reverse fundamental technological decision.",
   "The renaming of an internal method for better readability.",
   "The concrete code formatting (indentation, line length).",
   "Defining the order of import statements in a source file."
  ],
  "optExpl": [
   "The choice of a pattern with far-reaching consequences is worthy of an ADR.",
   "Hard-to-reverse fundamental decisions belong in the ADR.",
   "A trivial method renaming is not an ADR decision.",
   "Pure code formatting is too trivial for an ADR.",
   "The order of imports is too trivial for an ADR."
  ],
  "explanation": "ADRs record far-reaching, consequential and hard-to-reverse decisions. Trivial renamings or formatting matters do not belong there."
 },
 "c4q20": {
  "q": "What does a UML deployment diagram show?",
  "options": [
   "Nodes (hardware or execution environments) and the artifacts executed on them.",
   "The temporal sequence of method calls between objects.",
   "The static decomposition of the system into functional building blocks.",
   "The inheritance and association relationships of the classes."
  ],
  "optExpl": [
   "Correct: it shows nodes and the artifacts executed on them.",
   "The temporal sequence of calls is shown by the sequence diagram.",
   "The static decomposition into building blocks is shown by the building block view.",
   "Inheritance and association relationships are shown by the class diagram."
  ],
  "explanation": "Deployment diagrams show nodes and the artifacts placed on them (deployment view). Temporal processes, building block decomposition or class relationships are other diagrams."
 },
 "c4q21": {
  "q": "How is architecture documentation most likely kept up to date?",
  "options": [
   "Keep it concise, maintain it close to the code or versioned, and update it alongside relevant changes.",
   "Write it once very extensively, so that later changes become unnecessary.",
   "Store it separately from the project in a separate archive.",
   "Use exclusively automatically generated diagrams and explain nothing."
  ],
  "optExpl": [
   "Correct: lean, versioned and part of the change routine stays up to date.",
   "A one-time large document still becomes outdated quickly.",
   "A separate archive makes maintenance harder rather than securing it.",
   "Purely generated diagrams without explanation are not sufficient."
  ],
  "explanation": "Documentation stays up to date if it is lean, close to the process (versioned) and part of the change routine. A one-time large document, a separate archive or purely generated diagrams without explanation do not help."
 },
 "c4q22": {
  "q": "What is a glossary or a uniform terminology in the documentation used for?",
  "options": [
   "For a shared, unambiguous understanding of the technical terms – fewer misunderstandings.",
   "For a complete list of all class names in the source code.",
   "For translating the user interface into several languages.",
   "For a directory of all open bugs in the system."
  ],
  "optExpl": [
   "Correct: a glossary creates a shared, unambiguous terminology.",
   "A glossary is not a list of all class names in the code.",
   "Translating the interface is not the task of a glossary.",
   "A directory of open bugs is something other than a glossary."
  ],
  "explanation": "A glossary ensures a shared, unambiguous terminology. It is not a class list, not a UI translation and not a bug directory."
 },
 "c4q23": {
  "q": "What makes an architecture overview valuable for new team members?",
  "options": [
   "The big picture (context and goals).",
   "The most important building blocks and their responsibilities.",
   "Key architecture decisions and their reasons.",
   "A line-by-line explanation of every single method.",
   "The complete listing of all bugs and tickets ever resolved.",
   "The complete configuration values of all environments in detail."
  ],
  "optExpl": [
   "Context and goals give newcomers the big picture.",
   "The most important building blocks and their responsibilities provide orientation.",
   "Key decisions and their reasons explain the why.",
   "A line-by-line explanation of every method is too detailed.",
   "A complete bug history overloads the overview instead of orienting.",
   "Detailed configuration values are too fine-grained for an overview."
  ],
  "explanation": "A good overview conveys context/goals, the main building blocks, and the core decisions. A line-by-line method explanation is too detailed for an overview."
 },
 "c4q24": {
  "q": "Why should different architecture views be consistent with one another?",
  "options": [
   "Because they show the same system from different perspectives - contradictions would be misleading.",
   "Because every view must contain exactly the same elements at identical levels of detail.",
   "Because otherwise the diagrams won't compile.",
   "Because a single view would suffice anyway."
  ],
  "optExpl": [
   "Correct: All views show the same system; contradictions are misleading.",
   "Consistency does not mean identical content and level of detail.",
   "Diagrams are not compiled; that is not a reason.",
   "A single view alone precisely does not suffice."
  ],
  "explanation": "All views describe the same system; the same building blocks must appear without contradiction. Consistency does not mean identical content/detail, has nothing to do with compiling, and a single view alone does not suffice."
 },
 "k11": {
  "q": "Does the content belong in an architecture documentation?",
  "explanation": "Context, decisions, and quality scenarios belong in the architecture documentation. Personal organizational data such as vacation planning does not.",
  "categories": [
   "Sensible documentation content",
   "Does not belong in it"
  ],
  "rows": [
   "Context delimitation of the system",
   "Key architecture decisions (ADRs)",
   "Quality requirements and scenarios",
   "The complete source code line by line"
  ]
 },
 "c4q25": {
  "q": "What does a whitebox description of a building block in the building block view show?",
  "options": [
   "The internal decomposition of the building block into its contained (sub-)building blocks.",
   "Only the externally visible interface of the building block (blackbox).",
   "The temporal order of its calls at runtime.",
   "The server environment in which the building block is operated."
  ],
  "optExpl": [
   "Correct: A whitebox opens the building block and shows the internal parts.",
   "Showing only the visible interface would be the blackbox.",
   "The temporal order of calls belongs in the runtime view.",
   "The server environment belongs in the deployment view."
  ],
  "explanation": "A whitebox opens the building block and shows its internal building blocks. Only the interface would be the blackbox; flow and environment are the runtime and deployment views respectively."
 },
 "c4q26": {
  "q": "What should an interface description typically specify?",
  "options": [
   "The offered operations and their parameters or data formats.",
   "The behavior in error cases (error or exception cases).",
   "The internal implementation used to realize the operations.",
   "The concrete server hardware on which the provider is operated.",
   "The staffing responsibility and on-call duty of the operator team."
  ],
  "optExpl": [
   "Offered operations with parameters and data formats belong in the contract.",
   "The behavior in error or exception cases must be specified.",
   "The internal implementation is precisely deliberately hidden.",
   "The server hardware belongs to deployment, not to the interface.",
   "Staffing responsibilities belong to operations, not to the interface."
  ],
  "explanation": "An interface contract specifies operations/data formats and error behavior. The internal implementation is precisely hidden, and the hardware belongs to deployment."
 },
 "c4q27": {
  "q": "Why should you not document \"everything\"?",
  "options": [
   "Because too much documentation costs effort and quickly becomes outdated - what matters is the decision-relevant content.",
   "Because additional documentation worsens the quality of the architecture itself.",
   "Because an architecture can be fully derived from the source code anyway.",
   "Because documentation is only useful for external stakeholders, never for the team."
  ],
  "optExpl": [
   "Correct: You deliberately document what is decision-relevant, since too much becomes outdated.",
   "Additional documentation does not worsen the architecture itself.",
   "The code alone does not fully explain decisions and goals.",
   "Documentation also benefits your own team, not only externals."
  ],
  "explanation": "You deliberately document what is decision-relevant, because too much documentation causes effort and becomes outdated. Documentation does not worsen the architecture, the code alone does not fully explain decisions and quality goals, and documentation also benefits the team."
 },
 "c4q28": {
  "q": "Which statements about the UML activity diagram are correct?",
  "options": [
   "It represents flows with actions and branches.",
   "It can depict concurrent (parallel) flows.",
   "It primarily shows the static structure of classes and their relationships.",
   "It assigns software building blocks to execution nodes (hardware).",
   "It primarily depicts the states of an object and their transitions."
  ],
  "optExpl": [
   "Activity diagrams show flows with actions and branches.",
   "They can also depict concurrent, parallel flows.",
   "The static structure of classes is shown by the class diagram.",
   "The assignment to execution nodes is shown by the deployment diagram.",
   "States and their transitions are shown by the state diagram."
  ],
  "explanation": "Activity diagrams show flows including concurrency (dynamic behavior). Static class structure = class diagram; assignment to hardware = deployment diagram."
 },
 "c4q29": {
  "q": "Which section does the arc42 template explicitly provide for, among others?",
  "options": [
   "A section for quality requirements or quality scenarios.",
   "A mandatory section with the complete source code of the system.",
   "A mandatory section with the detailed project budget.",
   "A binding test case catalog for every single method."
  ],
  "optExpl": [
   "Correct: arc42 explicitly provides for a section for quality requirements.",
   "There is no mandatory source code section in arc42.",
   "A detailed project budget is not an arc42 section.",
   "arc42 does not provide for a binding test case catalog."
  ],
  "explanation": "arc42 provides, among others, for context, solution strategy, building block view, runtime/deployment view, cross-cutting concepts, and quality requirements - but no mandatory source code, budget, or test case section."
 },
 "c4q30": {
  "q": "Which statements about UML as a notation are correct?",
  "options": [
   "UML offers standardized diagram types with agreed meaning.",
   "For architecture, component, deployment, and sequence diagrams, among others, are useful.",
   "UML prescribes a particular architecture or technology.",
   "UML diagrams must always show all details of the system completely.",
   "UML is bound to a particular programming language and presupposes it.",
   "A UML model can always be translated fully automatically into executable code."
  ],
  "optExpl": [
   "UML offers standardized diagram types with agreed meaning.",
   "Component, deployment, and sequence diagrams are useful for architecture.",
   "UML does not prescribe a particular architecture or technology.",
   "UML diagrams do not have to show all details completely.",
   "UML is independent of a concrete programming language.",
   "Complete automatic code generation from UML is not guaranteed."
  ],
  "explanation": "UML is a standardized notation with many diagram types; for architecture, component, deployment, and sequence diagrams, among others, are useful. UML does not prescribe an architecture/technology and does not have to show everything."
 },
 "c4q31": {
  "q": "An operations team wants to know which parts run on which servers. Which view helps the most?",
  "options": [
   "The deployment view.",
   "The building block view, since it shows all components.",
   "The runtime view, since operations observes flows.",
   "The class diagram, since it shows the structure."
  ],
  "optExpl": [
   "Correct: Questions about servers and nodes are answered by the deployment view.",
   "The building block view shows components, but not their servers.",
   "The runtime view shows flows, not the server assignment.",
   "The class diagram shows structure, not the servers."
  ],
  "explanation": "Operations questions about servers/nodes and communication paths are answered by the deployment view. Building block view, runtime view, and class diagram address other aspects."
 },
 "k13": {
  "q": "Runtime view or deployment view?",
  "explanation": "Interactions/flows at runtime = runtime view. Assignment to hardware/nodes and their communication paths = deployment view.",
  "categories": [
   "Runtime view",
   "Deployment view"
  ],
  "rows": [
   "Temporal interaction of the building blocks in a use case",
   "On which server/node which component runs",
   "Order of the exchanged messages",
   "Network connections between data centers"
  ]
 },
 "c4q32": {
  "q": "Which statements about good architecture documentation are correct?",
  "options": [
   "Comprehensibility can ultimately only be judged from the perspective of the respective target group.",
   "Appropriateness means: as much as necessary, as little as possible.",
   "More documentation is fundamentally better than less.",
   "Correctness is dispensable as long as the documentation is extensive enough.",
   "The quality of good documentation is measured above all by the number of diagrams it contains."
  ],
  "optExpl": [
   "Comprehensibility can only be judged from the perspective of the target group.",
   "Appropriateness means: as much as necessary, as little as possible.",
   "More documentation is not fundamentally better than less.",
   "Correctness is indispensable; volume does not replace it.",
   "The amount of diagrams is no measure of good documentation."
  ],
  "explanation": "Comprehensibility is target-group-dependent (subjective), appropriateness means the right measure. \"Much = good\" is a fallacy, and correctness is indispensable."
 },
 "c4q33": {
  "q": "How does decision documentation according to arc42 tend to differ from an Architecture Decision Record (ADR)?",
  "options": [
   "arc42 foregrounds the path and alternatives; an ADR focuses on the outcome and status of the decision.",
   "An ADR may be used exclusively in arc42 projects.",
   "arc42 explicitly forbids recording decisions.",
   "Both must not contain the context of a decision."
  ],
  "optExpl": [
   "Correct: arc42 emphasizes the path and alternatives, an ADR the outcome and status.",
   "An ADR is independent and not limited to arc42.",
   "arc42 does not forbid recording decisions.",
   "Both do indeed record the context of a decision."
  ],
  "explanation": "Rough rule of thumb: arc42 decision documentation emphasizes path/alternatives, an ADR the outcome and status. Both record the context and can be combined independently of one another."
 },
 "c4q34": {
  "q": "Which information typically belongs in an Architecture Decision Record (ADR)?",
  "options": [
   "Context, the decision made, its status, and the consequences.",
   "A detailed implementation guide for every affected method.",
   "The complete requirements specification of the overall system.",
   "A binding effort and cost calculation of the project."
  ],
  "optExpl": [
   "Correct: An ADR names context, decision, status, and consequences.",
   "A detailed implementation guide does not belong in the ADR.",
   "The complete requirements specification is not ADR content.",
   "An effort and cost calculation does not belong in the ADR."
  ],
  "explanation": "An ADR concisely records title, context, decision, status, and consequences - it is not a complete implementation, requirements, or cost document."
 },
 "c4q35": {
  "q": "What applies to the documentation of interfaces?",
  "options": [
   "External interfaces are usually documented earlier and more thoroughly, because they form a \"contract\" with third parties.",
   "Internal interfaces must always be documented in more detail than external ones.",
   "Interfaces need no information on data formats or error behavior.",
   "An interface description should disclose the internal implementation."
  ],
  "optExpl": [
   "Correct: External interfaces are a contract with third parties, hence documented early and thoroughly.",
   "Internal interfaces are not fundamentally more detailed than external ones.",
   "Data formats and error behavior do indeed belong to it.",
   "The internal implementation remains deliberately hidden (blackbox)."
  ],
  "explanation": "External interfaces are a contract with third parties and are specified early/thoroughly (data formats, protocols, error and versioning behavior). The internal implementation is deliberately left out (blackbox)."
 },
 "c4q36": {
  "q": "Why are cross-cutting concepts (e.g. error handling, security) documented centrally?",
  "options": [
   "So that they are implemented uniformly system-wide and do not have to be reinvented/re-explained in every building block.",
   "Because they concern only a single building block and are described exclusively there.",
   "Because they are relevant exclusively for external auditors.",
   "Because they have no influence on quality attributes."
  ],
  "optExpl": [
   "Correct: Central documentation ensures a uniform, low-redundancy implementation.",
   "Cross-cutting concepts concern many building blocks, not just one.",
   "They are not relevant exclusively for external auditors.",
   "They do indeed influence quality attributes."
  ],
  "explanation": "A central description ensures the uniform, low-redundancy implementation of cross-cutting topics. They concern many building blocks (not one), are not only intended for auditors, and do indeed affect quality attributes."
 },
 "c5q1": {
  "q": "Of which components does a quality scenario typically consist?",
  "options": [
   "A trigger/stimulus (what triggers the scenario).",
   "The environment or context (under what conditions).",
   "A response with a measurable response measure (response/measure).",
   "An estimate of the implementation effort in person-days.",
   "A concrete technical solution that handles the trigger."
  ],
  "optExpl": [
   "The trigger (stimulus) is an integral component of a quality scenario.",
   "The environment or context describes the conditions of the scenario.",
   "The response with a measurable response measure makes the goal verifiable.",
   "An effort estimate in person-days does not belong to the quality scenario.",
   "A scenario describes required behavior, not the technical solution."
  ],
  "explanation": "A quality scenario names the trigger, environment/context, and a response with a measurable response measure. An effort estimate does not belong to it."
 },
 "c5q2": {
  "q": "What is ATAM?",
  "options": [
   "A scenario-based method for qualitative architecture evaluation.",
   "An automatic tool that computes metrics from the code.",
   "An architecture pattern for fault-tolerant systems.",
   "A maturity model for development processes."
  ],
  "optExpl": [
   "Correct: ATAM evaluates architecture in a scenario-based and qualitative way.",
   "ATAM is not an automatic tool for computing metrics from code.",
   "ATAM is an evaluation method, not an architecture pattern.",
   "ATAM is not a maturity model for development processes."
  ],
  "explanation": "ATAM (Architecture Tradeoff Analysis Method) evaluates architecture qualitatively based on scenarios. It is not a metric tool, not an architecture pattern, and not a maturity model."
 },
 "c5q3": {
  "q": "Which statements about qualitative vs. quantitative architecture evaluation are correct?",
  "options": [
   "Qualitative evaluation works scenario- or expert-based (e.g. ATAM, reviews).",
   "Quantitative evaluation relies on measurable key figures or metrics.",
   "Qualitative evaluation always delivers more objective results than quantitative.",
   "Quantitative metrics can always be evaluated unambiguously without interpretation.",
   "Qualitative and quantitative evaluation fundamentally exclude one another."
  ],
  "optExpl": [
   "Qualitative evaluation works scenario- and expert-based, for instance with ATAM.",
   "Quantitative evaluation is based on measurable key figures and metrics.",
   "Qualitative is not categorically more objective than quantitative.",
   "Metrics always require interpretation and are never unambiguous.",
   "Both approaches can be combined and complement one another."
  ],
  "explanation": "Qualitative = scenario-/expert-based, quantitative = metric-based. Qualitative is not categorically more objective, and metrics require interpretation in context."
 },
 "c5q4": {
  "q": "Which of the following are quantitative (metric-based) figures?",
  "options": [
   "The degree of coupling between modules.",
   "The cyclomatic complexity.",
   "An expert's assessment in the architecture review.",
   "The result of a scenario-based workshop (ATAM).",
   "The classification of a risk as high, medium, or low.",
   "The verbal description of identified architecture weaknesses."
  ],
  "optExpl": [
   "The degree of coupling is a measurable, quantitative metric.",
   "Cyclomatic complexity is a countable, quantitative key figure.",
   "An expert assessment is qualitative, not metric-based.",
   "An ATAM workshop is a qualitative procedure, not a metric.",
   "A rough high/medium/low classification is qualitative, not a metric.",
   "A verbal description is qualitative and not metric-based."
  ],
  "explanation": "Degree of coupling and cyclomatic complexity are quantitative metrics. Expert assessment and ATAM workshops are qualitative procedures."
 },
 "c5q5": {
  "q": "What is the purpose of a quality tree (utility tree)?",
  "options": [
   "To structure and prioritize quality goals and associated scenarios in order to focus the evaluation.",
   "To represent the inheritance hierarchy of the classes as a tree.",
   "To depict the call order of the building blocks at runtime.",
   "To visualize the folder structure of the project."
  ],
  "optExpl": [
   "Correct: It structures and prioritizes quality goals and associated scenarios.",
   "The utility tree does not show a class inheritance hierarchy.",
   "The quality tree does not depict the runtime call order.",
   "Folder structures have nothing to do with the quality tree."
  ],
  "explanation": "A quality tree organizes and prioritizes quality attributes and scenarios in order to focus the evaluation. It has nothing to do with class hierarchy, runtime flows, or folders."
 },
 "c5q6": {
  "q": "Why does one evaluate architectures at all?",
  "options": [
   "To recognize risks and weaknesses regarding the quality goals early.",
   "To make trade-offs between quality attributes visible.",
   "To guarantee that the later implementation is error-free.",
   "To exactly determine the number of developers needed.",
   "To retroactively justify architecture decisions already made."
  ],
  "optExpl": [
   "Early recognition of risks and weaknesses is a central evaluation goal.",
   "Evaluation makes trade-offs between quality attributes visible.",
   "Evaluation does not guarantee an error-free later implementation.",
   "Staffing planning is not a purpose of architecture evaluation.",
   "Evaluation should critically examine decisions, not justify them retroactively."
  ],
  "explanation": "Evaluation uncovers risks/weaknesses and trade-offs early. It does not guarantee an error-free implementation and does not serve staffing planning."
 },
 "c5q7": {
  "q": "What does high coupling of a module tend to express?",
  "options": [
   "Many incoming and outgoing dependencies - often an indication of harder isolated modifiability.",
   "That the module is particularly performant.",
   "That the module needs no interfaces.",
   "That the module is particularly well tested."
  ],
  "optExpl": [
   "Correct: Many dependencies make isolated modifiability harder.",
   "Coupling says nothing about the performance of the module.",
   "High coupling means many interfaces, not none.",
   "Coupling says nothing about the test quality of the module."
  ],
  "explanation": "High coupling means many dependencies and makes isolated changes and tests harder. It says nothing about performance, interface needs, or test quality. (R3.)"
 },
 "c5q8": {
  "q": "What does cyclomatic complexity measure?",
  "options": [
   "The number of linearly independent paths through the control flow (branches).",
   "The number of a module's dependencies on other modules.",
   "The nesting depth of the inheritance hierarchy.",
   "The code volume, measured in lines (LOC)."
  ],
  "optExpl": [
   "Correct: It counts linearly independent paths through the control flow.",
   "Module dependencies are measured by coupling, not this metric.",
   "Inheritance depth is an entirely different metric.",
   "Lines of code (LOC) measure volume, not the paths."
  ],
  "explanation": "Cyclomatic complexity counts independent control flow paths. Module dependencies (coupling), inheritance depth, and LOC are each different metrics."
 },
 "c5q9": {
  "q": "Which statements about the benefit of quality scenarios in evaluation are correct?",
  "options": [
   "They make abstract quality goals concrete and verifiable.",
   "They serve as a benchmark against which architecture decisions are evaluated.",
   "They replace the elicitation of the functional requirements.",
   "They guarantee that the stated quality goals are actually achieved.",
   "They are usefully applicable only for performance requirements."
  ],
  "optExpl": [
   "Scenarios make abstract quality goals concrete and verifiable.",
   "They provide the benchmark for evaluating architecture decisions.",
   "Scenarios do not replace the elicitation of functional requirements.",
   "Scenarios make goals verifiable but do not guarantee their achievement.",
   "Scenarios are suitable for all quality attributes, not just performance."
  ],
  "explanation": "Scenarios concretize quality goals and provide an evaluation benchmark. They do not replace functional requirements and guarantee nothing - they only make things verifiable."
 },
 "c5q10": {
  "q": "What is an architecture review (or walkthrough) as an evaluation method?",
  "options": [
   "A qualitative, expert-supported examination of the architecture based on goals and scenarios.",
   "An automatic measurement of metrics entirely without human involvement.",
   "A load test to determine the maximum response time.",
   "The merging of parallel development branches in the code."
  ],
  "optExpl": [
   "Correct: A qualitative examination by experts based on scenarios.",
   "Automatic metric measurement is quantitative, not a review.",
   "A load test measures response times, but is not a review.",
   "The merging of branches is version control, not a review."
  ],
  "explanation": "Reviews/walkthroughs are qualitative, expert-supported procedures against goals and scenarios. Automatic measurement is quantitative; load test and merge are something else."
 },
 "c5q11": {
  "q": "Which of the following are qualitative evaluation methods?",
  "options": [
   "Scenario-based analysis (e.g. ATAM).",
   "Architecture review by experts.",
   "Automatically counting the lines of code (LOC).",
   "Measuring the degree of coupling between modules.",
   "Calculating the cyclomatic complexity per component.",
   "Determining the test coverage as a percentage value."
  ],
  "optExpl": [
   "Scenario-based analysis such as ATAM is a qualitative method.",
   "An expert review is a qualitative evaluation method.",
   "LOC counting yields a metric and is therefore quantitative.",
   "Coupling measurement is metric-based and therefore quantitative.",
   "Cyclomatic complexity is a metric and therefore quantitative.",
   "A percentage test coverage is a metric and therefore quantitative."
  ],
  "explanation": "ATAM and expert reviews are qualitative. LOC counting and coupling measurement are quantitative (metric-based) methods."
 },
 "c5q12": {
  "q": "When should an architecture be evaluated?",
  "options": [
   "Early and repeatedly, accompanying important decisions.",
   "As late as possible, once a lot of code exists, so that the evaluation is based on facts rather than assumptions.",
   "Only once, bundled together for acceptance by the client.",
   "Exclusively reactively, as soon as problems occur in operation."
  ],
  "optExpl": [
   "Correct: early and repeatedly, accompanying important decisions.",
   "Waiting until late makes necessary corrections unnecessarily expensive.",
   "A single evaluation at acceptance is too late for corrections.",
   "Purely reactive at operational problems is clearly too late."
  ],
  "explanation": "Evaluation is most valuable early and repeatedly, while corrections are still cheap. Waiting for a lot of code sounds plausible but makes corrections expensive; a single evaluation at acceptance or purely reactive is too late."
 },
 "c5q13": {
  "q": "What limitation do metric-based (quantitative) evaluations have?",
  "options": [
   "Numbers alone do not yet provide an assessment – they need context and interpretation.",
   "Metrics are fundamentally worthless and should never be collected.",
   "A high metric value is always unambiguously bad.",
   "Metrics completely replace any professional judgment."
  ],
  "optExpl": [
   "Correct: numbers need context and interpretation in order to assess.",
   "Metrics are not worthless; they provide useful indications.",
   "A high metric value is not automatically unambiguously bad.",
   "Metrics do not replace professional judgment in context."
  ],
  "explanation": "Metrics provide indications but must be interpreted in context. They are not worthless, not automatically good or bad, and do not replace professional judgment."
 },
 "c5q14": {
  "q": "What is a typical result of an architecture evaluation?",
  "options": [
   "Identified risks, weaknesses and trade-offs as well as concrete improvement proposals.",
   "A binding proof that the system is free of defects.",
   "Final approval without any further conditions.",
   "A mere collection of new diagrams without statements."
  ],
  "optExpl": [
   "Correct: risks, weaknesses, trade-offs and concrete improvement proposals.",
   "An evaluation does not prove the system is defect-free.",
   "It does not deliver unconditional final approval.",
   "New diagrams without statements are not an evaluation result."
  ],
  "explanation": "An evaluation delivers risks, trade-offs and recommendations. It is not a proof of defect-freeness, not an unconditional approval, and not merely new diagrams."
 },
 "k10": {
  "q": "Qualitative or quantitative evaluation method?",
  "explanation": "Scenario analyses and reviews are qualitative (expert-/scenario-based). Coupling measures and LOC are quantitative (measurable metrics).",
  "categories": [
   "Qualitative",
   "Quantitative"
  ],
  "rows": [
   "Scenario-based analysis (ATAM)",
   "Measuring the coupling between modules",
   "Expert review / walkthrough",
   "Counting the lines of code (LOC)"
  ]
 },
 "c5q15": {
  "q": "Why are clearly formulated quality goals a prerequisite for a meaningful architecture evaluation?",
  "options": [
   "Because without goals there is no yardstick against which the architecture could be evaluated.",
   "Because quality goals make the evaluation superfluous.",
   "Because evaluation relies exclusively on the source code.",
   "Because goals should only be formulated after the evaluation."
  ],
  "optExpl": [
   "Correct: without goals there is no yardstick for the evaluation.",
   "Goals do not make evaluation superfluous; they make it possible in the first place.",
   "Evaluation does not rely exclusively on the source code.",
   "Quality goals belong before the evaluation, not after it."
  ],
  "explanation": "Evaluation measures against the quality goals – if they are missing, there is no yardstick. They do not make evaluation superfluous, do not rely only on code, and are not formulated only afterwards."
 },
 "c5q16": {
  "q": "What are static code/architecture analysis tools used for?",
  "options": [
   "For (semi-)automated checking of metrics and rules, e.g. dependencies or complexity.",
   "For running the system with real users under load.",
   "For gathering qualitative expert assessments in workshops.",
   "For automatically fixing all weaknesses found."
  ],
  "optExpl": [
   "Correct: it checks metrics and rules (semi-)automatically without execution.",
   "Static analysis does not run the system under load.",
   "Expert workshops are qualitative and not static analysis.",
   "Static analysis finds weaknesses but does not fix them."
  ],
  "explanation": "Static analysis checks code/structure without execution (metrics, rules, dependencies). It is not a load test, not a workshop, and does not fix weaknesses automatically."
 },
 "c5q17": {
  "q": "What is a trade-off point in architecture evaluation (e.g. in ATAM)?",
  "options": [
   "A decision that influences several quality attributes in opposing directions.",
   "A decision that influences exactly one single quality attribute.",
   "A point at which all quality goals are simultaneously optimally fulfilled.",
   "An identified risk with no relation whatsoever to quality attributes."
  ],
  "optExpl": [
   "Correct: it influences several quality attributes in opposing directions.",
   "If it affects only one, it is a sensitivity point.",
   "There is no simultaneous optimum of all quality goals.",
   "A trade-off point relates precisely to quality attributes."
  ],
  "explanation": "A trade-off point affects several quality attributes in opposing directions. If a decision affects only exactly one, it is a sensitivity point – not the same thing."
 },
 "c5q18": {
  "q": "What should an architecture evaluation with limited time focus on?",
  "options": [
   "On the most important quality goals and the biggest risks.",
   "On as many minor details as possible, in order to be complete.",
   "On the building blocks with the most lines of code, regardless of risk.",
   "On the most recently committed changes, regardless of the goals."
  ],
  "optExpl": [
   "Correct: on the most important quality goals and the biggest risks.",
   "Minor details are not worthwhile when time is scarce.",
   "Sheer code size says nothing about risk.",
   "The most recently committed changes are not a sensible selection criterion."
  ],
  "explanation": "With limited time, focus on the prioritized quality goals and the biggest risks – not minor matters, sheer code size, or the latest commits."
 },
 "c5q19": {
  "q": "Which statements about architecture evaluation are correct?",
  "options": [
   "It uncovers risks and weaknesses early.",
   "It needs clear quality goals as a yardstick.",
   "It can be carried out qualitatively or quantitatively.",
   "It is only meaningful once, at the very end of the project.",
   "It may be carried out exclusively by independent external assessors."
  ],
  "optExpl": [
   "Evaluation uncovers risks and weaknesses early.",
   "Without clear quality goals there is no yardstick for evaluation.",
   "Evaluation can be carried out qualitatively or quantitatively.",
   "It is meaningful early and repeatedly, not only at the end.",
   "Evaluation can also be done internally, not only by external parties."
  ],
  "explanation": "Evaluation uncovers risks, needs quality goals, and can be qualitative or quantitative. It is meaningful not only at the end of the project but early and repeatedly."
 },
 "c5q20": {
  "q": "What is a sensitivity point in an architecture evaluation (e.g. in ATAM)?",
  "options": [
   "A decision or property that is particularly decisive for exactly one quality attribute.",
   "A decision that influences several quality attributes in opposing directions.",
   "A point at which all quality goals are automatically fulfilled.",
   "A risk that touches no quality attribute whatsoever."
  ],
  "optExpl": [
   "Correct: it is decisive for exactly one quality attribute.",
   "An opposing effect on several attributes is a trade-off point.",
   "There is no automatic optimum of all quality goals.",
   "A sensitivity point concerns precisely one quality attribute."
  ],
  "explanation": "A sensitivity point is decisive for a single quality attribute. If a decision has an opposing effect on several attributes, it is a trade-off point."
 },
 "c5q21": {
  "q": "Which result types does a scenario-based evaluation such as ATAM deliver?",
  "options": [
   "Risks and explicitly named non-risks.",
   "Sensitivity and trade-off points.",
   "A binding schedule for the project.",
   "The finished source code of the critical components.",
   "A complete test case specification for later acceptance."
  ],
  "optExpl": [
   "ATAM names risks and explicitly also non-risks.",
   "Sensitivity and trade-off points are typical ATAM results.",
   "Architecture evaluation does not deliver a binding schedule.",
   "Finished source code is not a result of an evaluation.",
   "Test case specifications are not a result of a scenario-based evaluation."
  ],
  "explanation": "ATAM delivers, among other things, risks, non-risks as well as sensitivity and trade-off points. Project schedules or source code are not results of an architecture evaluation."
 },
 "c5q22": {
  "q": "How can ATAM be classified methodically?",
  "options": [
   "As a scenario-based, predominantly qualitative evaluation method.",
   "As a purely quantitative method that works exclusively with metrics.",
   "As an automated tool that manages without participants.",
   "As a method that is only applicable after completion of the system."
  ],
  "optExpl": [
   "Correct: ATAM is scenario-based and predominantly qualitative.",
   "ATAM does not work exclusively with metrics.",
   "ATAM needs participants and is not fully automatic.",
   "ATAM is meaningful precisely early in the lifecycle."
  ],
  "explanation": "ATAM is scenario-based and qualitative (facilitated analysis with stakeholders based on quality scenarios). It is not purely metric-based, not fully automatic, and meaningful precisely early in the lifecycle."
 },
 "c5q23": {
  "q": "Which form of review has the highest degree of formalization?",
  "options": [
   "The inspection – with preparation, minutes and an independent moderator.",
   "The walkthrough, in which the author casually leads through the design.",
   "The informal review without fixed roles and minutes.",
   "The automated metric measurement by an analysis tool."
  ],
  "optExpl": [
   "Correct: the inspection is the most formal, with minutes and a moderator.",
   "The walkthrough is looser and less formal than the inspection.",
   "An informal review has hardly any roles and formalization.",
   "Automatic metric measurement is not a review format at all."
  ],
  "explanation": "The degree of formalization increases: informal → walkthrough → inspection. The inspection is the most formal (preparation, minutes, independent moderator). Automated metric measurement is not a review format at all."
 },
 "c5q24": {
  "q": "What does risk management from an architecture perspective focus on above all?",
  "options": [
   "On product risks – most commonly they are mitigated by reducing their probability of occurrence.",
   "On project risks such as schedule and budget planning, which the architect is solely responsible for.",
   "Exclusively on completely avoiding every risk.",
   "On ignoring risks as long as the system is still running."
  ],
  "optExpl": [
   "Correct: product risks, mostly by reducing the probability of occurrence.",
   "Schedule and budget risks lie primarily with project management.",
   "Completely avoiding every risk is rarely possible.",
   "Ignoring risks is not risk management."
  ],
  "explanation": "Architecturally, product risks are in focus; the most common mitigation reduces the probability of occurrence (reducing the impact is often more expensive, complete avoidance rarely possible). Project risks lie primarily with project management."
 },
 "c5q25": {
  "q": "What does the term \"architecture erosion\" describe?",
  "options": [
   "The gradual divergence of the actually implemented architecture from the intended one – the \"disorder\" increases over time.",
   "The deliberate, documented evolution of the architecture according to plan.",
   "The one-time replacement of a technology in operation.",
   "The automatic improvement of the structure through longer runtime."
  ],
  "optExpl": [
   "Correct: the as-is architecture gradually drifts away from the target architecture.",
   "Planned, documented evolution according to plan is not erosion.",
   "A one-time technology change in operation is not erosion.",
   "The structure does not improve on its own over time."
  ],
  "explanation": "Erosion = the as-is architecture drifts unintentionally away from the target architecture; the structure deteriorates gradually. It is not a planned redesign and does not improve on its own – one must actively counteract it (evaluate early and continuously)."
 },
 "c5q26": {
  "q": "What does a conformity or consistency analysis of the architecture check?",
  "options": [
   "Whether the actually implemented architecture (as-is) matches the intended one (target).",
   "Whether the requirements were completely elicited.",
   "Whether the team adheres to the agreed working hours.",
   "Whether the users like the user interface."
  ],
  "optExpl": [
   "Correct: it compares the implemented as-is with the target architecture.",
   "It does not check the completeness of the requirements.",
   "The team's working hours are not the subject of this analysis.",
   "The users' UI taste is not part of it."
  ],
  "explanation": "A conformity analysis compares as-is and target architecture and thus uncovers erosion or deviations. Requirements elicitation, time tracking, or UI taste are something different."
 },
 "c5q27": {
  "q": "What is the most suitable way to check adherence to planned dependency or layer rules?",
  "options": [
   "With static analysis or tools that check dependencies against defined rules.",
   "Exclusively by asking individual developers based on gut feeling.",
   "By counting the lines of code per file.",
   "Solely by measuring the response times in operation."
  ],
  "optExpl": [
   "Correct: static analysis checks dependencies against defined rules.",
   "The gut feeling of individual developers does not reliably check structural rules.",
   "LOC counting says nothing about dependency rules.",
   "Pure runtime response times do not check the structural conformity of the architecture."
  ],
  "explanation": "Forbidden dependencies (e.g. between layers/modules) are reliably found with static analysis/dependency checking. Gut feeling, LOC counting, or runtime measurement do not check structural conformity."
 },
 "c6q1": {
  "q": "What is the purpose of the chapter 'Examples of Software Architectures' in the curriculum?",
  "options": [
   "To apply and illustrate what has been learned in a comprehensible way using concrete examples.",
   "To introduce new, binding architecture rules that dominate the exam.",
   "To replace the content of the preceding chapters.",
   "To prescribe a specific technology as a binding standard."
  ],
  "optExpl": [
   "Correct: examples apply what has been learned concretely and illustrate it comprehensibly.",
   "Examples do not introduce new rules and do not dominate the exam.",
   "Examples supplement the chapters for illustration but do not replace them.",
   "No example prescribes a specific technology as a binding standard."
  ],
  "explanation": "The examples illustrate the application of what has been learned. They do not introduce new rules, do not replace chapters, and do not prescribe a technology. (R3.)"
 },
 "c6q2": {
  "q": "What should one primarily be able to recognize in an end-to-end architecture example?",
  "options": [
   "How requirements lead to decisions, structures and views.",
   "Exclusively the technologies and frameworks used.",
   "Only the sheer size of the source code.",
   "The personal working style of the individual developers."
  ],
  "optExpl": [
   "Correct: it shows the common thread from requirement to structure and views.",
   "Technologies alone fall short; the common thread remains decisive.",
   "Sheer code size says nothing about requirements, decisions and structures.",
   "The individual working styles of the developers are not the learning purpose of an architecture example."
  ],
  "explanation": "A good example shows the common thread from requirements through decisions to structure and views – not just technologies, code size, or working styles. (R3.)"
 },
 "c6q3": {
  "q": "How should the exam relevance of Chapter 6 (Examples) be classified?",
  "options": [
   "Predominantly R3 – for illustration, but not direct exam material.",
   "R1 – the examples are the most important exam chapter.",
   "It is the only basis that is queried in the exam.",
   "It is not part of the curriculum at all."
  ],
  "optExpl": [
   "Correct: Chapter 6 is predominantly R3 and serves for illustration.",
   "The examples are not R1 and not the most important exam chapter.",
   "Chapter 6 is by no means the only basis queried in the exam.",
   "Chapter 6 very much belongs to the curriculum, only as R3."
  ],
  "explanation": "Chapter 6 is predominantly R3: part of the curriculum for illustration, but not direct exam material. It is neither R1 nor the only basis nor outside the curriculum."
 },
 "c6q4": {
  "q": "What can be learned particularly well from an end-to-end architecture example?",
  "options": [
   "How concepts, patterns and decisions interact in context.",
   "A model solution to be memorized for the exam.",
   "The exact project duration and budget.",
   "A universally valid blueprint that fits every system."
  ],
  "optExpl": [
   "Correct: it shows the interplay of concepts, patterns and decisions.",
   "An example is not a model solution to be memorized for the exam.",
   "Project duration and budget are not the learning purpose of an architecture example.",
   "There is no universally valid blueprint that fits every system."
  ],
  "explanation": "An end-to-end example shows the interplay of concepts, patterns and decisions. It is not a model solution to be memorized and not a blueprint that fits everyone. (R3.)"
 },
 "c6q5": {
  "q": "What is the benefit of studying several different architecture examples?",
  "options": [
   "One gets to know a range of solutions and patterns and can transfer them to one's own problems.",
   "One receives a ready-made solution that only needs to be copied.",
   "One no longer has to make any decisions of one's own afterwards.",
   "One learns above all the programming language used in each case."
  ],
  "optExpl": [
   "Correct: several examples expand the solution repertoire and train the transfer.",
   "Examples do not provide a ready-made copy template for one's own problems.",
   "Own decisions remain necessary despite many examples studied.",
   "The learning value lies in solutions and patterns, not in programming languages."
  ],
  "explanation": "Several examples expand the solution repertoire and train the transfer. They do not provide a copy template, do not spare one's own decisions, and do not serve language learning. (R3.)"
 },
 "c6q6": {
  "q": "Why are the trade-offs made deliberately also considered in architecture examples?",
  "options": [
   "Because there is rarely the one perfect solution – only well-founded compromises.",
   "Because trade-offs are a sign of a flawed architecture.",
   "Because one wants to highlight the worst option for learning purposes.",
   "Because compromises are fundamentally avoidable in practice."
  ],
  "optExpl": [
   "Correct: architecture consists of deliberate, well-founded compromises instead of a perfect solution.",
   "Trade-offs are not a flaw but a normal part of every architecture.",
   "The aim is not to highlight the worst option for learning purposes.",
   "Compromises cannot be fundamentally avoided in practice."
  ],
  "explanation": "Examples show that architecture consists of deliberate trade-offs – trade-offs are not a flaw and are not avoidable. Understanding the compromises is the learning value. (R3.)"
 }
};
