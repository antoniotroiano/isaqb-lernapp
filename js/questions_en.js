/* Englische Übersetzungen des Fragenkatalogs. QUESTIONS_EN[id]. Fallback DE via mergeEN. */
const QUESTIONS_EN = {
 "c1q1": {
  "q": "Which statements about the term software architecture are correct in the sense of CPSA-F?",
  "options": [
   "It comprises the structure(s) of a system consisting of building blocks together with their relationships and externally visible properties.",
   "It includes the fundamental design decisions whose later change would typically be expensive.",
   "It is the set of all structures that can be derived completely and unambiguously from the existing source code.",
   "It concerns exclusively static structures; runtime behavior belongs to the detailed design.",
   "A system has exactly one architecture, which is always also available in documented form."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Correct: building blocks, relationships and externally visible properties form the core of every architecture definition.",
   "Correct: it is precisely the key, consequential (expensive-to-change) decisions that make up architecture.",
   "Wrong: architecture contains, among other things, design decisions and their rationale, which cannot be fully reconstructed from the code.",
   "Wrong: the dynamic interplay at runtime is very much part of the architecture (runtime view).",
   "Wrong: a system typically has several structures/views, which can also exist implicitly and undocumented."
  ],
  "explanation": "Architecture = building blocks + relationships + properties + key decisions. It cannot be derived completely from the code (the rationale is missing there), includes runtime behavior, and also exists as several, partly undocumented structures."
 },
 "c1q2": {
  "q": "Which statements about a component (building block) are correct?",
  "options": [
   "It encapsulates its realization and is used via its interface(s) (black box principle).",
   "It can itself be composed of several finer building blocks.",
   "On the target platform it always corresponds to exactly one deployable artifact (e.g. a file or library).",
   "The term component always denotes a runtime unit, in contrast to the purely design-level term building block.",
   "Two components with an identical interface signature are always readily interchangeable, regardless of their guaranteed properties."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Correct: encapsulation and use via the interface are the core characteristic.",
   "Correct: building blocks are hierarchical, a component can contain finer building blocks (white box).",
   "Wrong: equating it with exactly one deployment artifact conflates the building block and deployment views.",
   "Wrong: the building block/component distinction is not a runtime/design-time distinction.",
   "Wrong: the same signature is not sufficient; the contract including guaranteed properties (semantics, qualities) must match."
  ],
  "explanation": "A component encapsulates its realization behind interfaces and can itself consist of finer building blocks. It is not per se a single deployment artifact, not a pure runtime unit, and interchangeability requires the same contract (not just the same signature)."
 },
 "c1q3": {
  "q": "In an architecture documentation, a subsystem is described in one place as a black box and in another as a white box. What is most likely correct?",
  "options": [
   "The black box names interfaces, responsibility and guaranteed properties; the white box additionally shows the contained building blocks and their interplay.",
   "Black box and white box differ in that the black box represents the runtime view and the white box the building block view.",
   "The white box is the actually binding description; the black box is only a simplified preliminary stage without independent value.",
   "The black box hides the interface of the building block, while the white box exposes it."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: black box = external view (interface/responsibility/properties), white box = additionally the internal structure.",
   "Wrong: it is about the visibility of the internals, not about the assignment to runtime vs. building block view.",
   "Wrong: the black box has independent value – users need exactly this external view.",
   "Wrong: the black box exposes the interface and hides only the internals."
  ],
  "explanation": "Black box = external view (interface, responsibility, guaranteed properties), white box = additionally the contained building blocks. Both are useful; it is not a runtime/building block view question, and the interface is precisely not hidden."
 },
 "c1q4": {
  "q": "Which statements about architecture views are correct?",
  "options": [
   "The building block view shows the static decomposition of the system into building blocks and their relationships.",
   "The runtime view describes the dynamic interplay of the building blocks in concrete scenarios.",
   "The deployment view maps building blocks or artifacts onto hardware and execution nodes.",
   "Once the system is implemented, the runtime view replaces the building block view.",
   "Every view must contain all building blocks of the system at identical level of detail."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: building block view = static decomposition with relationships.",
   "Correct: runtime view = dynamic interplay in scenarios.",
   "Correct: deployment view = mapping onto hardware/execution nodes.",
   "Incorrect: views complement each other and coexist – none replaces another.",
   "Incorrect: views deliberately show different aspects and levels of detail; they only need to be consistent."
  ],
  "explanation": "Architecture is described through several complementary views (context, building block, runtime, deployment). They illuminate different aspects of the same system and do not replace one another."
 },
 "c1q5": {
  "q": "Which tasks belong to the core of the role of software architects?",
  "options": [
   "Clarifying and sharpening quality requirements together with stakeholders.",
   "Making, justifying and documenting key design decisions.",
   "Accompanying the implementation and checking whether code and architecture fit together.",
   "Independently determining the functional prioritization of the product backlog.",
   "Prescribing detailed implementation specifications down to the method level in a binding manner in order to ensure consistency."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: clarifying (especially quality) requirements is a core task.",
   "Correct: making, justifying and documenting key decisions clearly belongs to it.",
   "Correct: accompanying the implementation and checking consistency is a core task.",
   "Wrong: backlog prioritization is the responsibility of the product role (e.g. Product Owner); architects only advise.",
   "Wrong: specifications down to the method level are over-regulation; the detailed design remains with the team."
  ],
  "explanation": "Architects clarify requirements, make/justify decisions and accompany the implementation. They are responsible for neither the functional backlog prioritization nor do they prescribe every method."
 },
 "c1q6": {
  "q": "Which statements about internal and external software quality are correct?",
  "options": [
   "External quality shows itself in the operation of the finished system (e.g. performance, reliability) and is perceptible to users.",
   "Low internal quality (e.g. poor maintainability) often also worsens the externally perceptible quality in the long term.",
   "Internal quality can be measured completely via black box tests of the delivered system.",
   "Maintainability is an external quality, because it indirectly affects the user via downtime.",
   "Internal and external quality are independent of each other; one can optimize the one without influencing the other."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Correct: external quality is perceptible from the outside (e.g. performance, reliability).",
   "Correct: internal deficiencies also affect the outside over time (e.g. more errors, slower changes).",
   "Wrong: internal quality shows itself in the structure (e.g. maintainability) and is not fully measurable via black box tests.",
   "Wrong: maintainability is an internal quality; the indirect effect on users does not make it external.",
   "Wrong: both influence each other – poor structure eventually shows through to the external view."
  ],
  "explanation": "External quality is perceptible from the outside, internal quality concerns the structure. Both are coupled: poor internal quality also worsens the external quality in the long term. Internal quality is not fully measurable via black box tests, and maintainability is internal."
 },
 "c1q7": {
  "q": "A team makes central architecture decisions early, although not all requirements are yet established. Which statement is most likely correct?",
  "options": [
   "Because knowledge and requirements are initially incomplete, decisions are deliberately made under uncertainty and refined iteratively.",
   "This is uncritical, because architecture decisions can later be revised without significant effort.",
   "One should wait with all key decisions until the requirements are available completely and finally.",
   "Early decisions under uncertainty can be avoided by creating a sufficiently detailed overall design in advance."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: knowledge is initially incomplete, therefore decisions are made early but revisably and refined.",
   "Wrong: key architecture decisions are precisely often expensive to change.",
   "Wrong: waiting for complete requirements (BDUF) is unrealistic and risky.",
   "Wrong: a detailed up-front design does not eliminate the initial uncertainty."
  ],
  "explanation": "At the beginning knowledge is incomplete; important decisions are made early and refined iteratively. They are usually not cheap to change, waiting for final requirements is unsuitable, and an up-front design does not eliminate uncertainty."
 },
 "c1q8": {
  "q": "Which statements about the relationship between architecture and requirements are correct?",
  "options": [
   "Above all quality requirements (e.g. performance, security) drive key architecture decisions.",
   "Architecture and requirements influence each other mutually and are sharpened iteratively.",
   "Functional requirements largely determine the architecture on their own; quality requirements are secondary.",
   "Constraints such as prescribed technologies are irrelevant for the architecture, as long as the requirements are met.",
   "Only once the requirements are complete and accepted may the architecture work begin."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Correct: quality requirements are the strongest architecture drivers.",
   "Correct: both sharpen each other mutually and iteratively.",
   "Wrong: it is precisely quality requirements that strongly shape the architecture, not only functional ones.",
   "Wrong: constraints noticeably limit the solution space and are very much relevant.",
   "Wrong: architecture work begins iteratively, not only after finally accepted requirements."
  ],
  "explanation": "Above all quality requirements drive the architecture, and both sharpen each other mutually. Functional requirements alone are not sufficient, constraints are relevant, and the work does not wait for final requirements."
 },
 "c1q9": {
  "q": "Which of the following activities belongs least to the core of the architecture role?",
  "options": [
   "Working out the detailed interaction and interface design (UX) of the user interfaces.",
   "Defining cross-cutting concepts (e.g. persistence, security, error handling).",
   "Documenting and communicating architecture decisions and their rationale.",
   "Checking compliance with the architecture in the implementation and advising the team."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: detailed UX/interaction design is the task of UX/UI design; architecture at most roughly defines the GUI as a cross-cutting concept but does not design it in detail.",
   "Wrong (is a core task): defining cross-cutting concepts clearly belongs to the architecture role.",
   "Wrong (is a core task): documenting and communicating decisions is central.",
   "Wrong (is a core task): checking the implementation and advising belongs to it."
  ],
  "explanation": "The detailed interface and interaction design is the responsibility of UX/UI design, not the architecture role – which at most roughly defines the GUI as a cross-cutting concept. Cross-cutting concepts, documentation/communication and accompanying the implementation, by contrast, belong to it."
 },
 "k5": {
  "q": "Assess each statement: correct or wrong?",
  "categories": [
   "Correct",
   "Wrong"
  ],
  "rows": [
   "Loose coupling and high cohesion are goals to be pursued simultaneously that complement each other.",
   "An interface describes the contract of a building block, not its internal realization.",
   "The term component denotes exclusively a runtime unit, never a design building block.",
   "Architecture decisions are finally fixed with their first version and are no longer refined.",
   "Quality requirements are generally secondary to functional requirements for the architecture."
  ],
  "explanation": "Loose coupling/high cohesion are complementary goals, and an interface describes the contract (not the internals). A component is not a pure runtime unit, decisions are refined iteratively, and quality requirements are precisely the strongest architecture drivers."
 },
 "c1q10": {
  "q": "What is at its core the goal of software architecture?",
  "options": [
   "Keeping complexity manageable and supporting the achievement of the required quality goals under the constraints.",
   "Anticipating as many future requirements as possible today, so that no more changes are needed later.",
   "Above all determining which technologies and frameworks are used in the project.",
   "Primarily ensuring the functional completeness of the system; quality attributes are secondary."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: manageable complexity and achieving the quality goals are the core.",
   "Wrong: anticipating all future requirements contradicts YAGNI and is not a goal.",
   "Wrong: technology selection is a possible consequence of architecture decisions, not its core goal – architecture is not the same as tool selection.",
   "Wrong: functional completeness alone falls short – it is precisely the quality goals that are in focus."
  ],
  "explanation": "The goal is manageable complexity and achieving the quality goals under constraints. \"Everything in stock\" (against YAGNI), the mere selection of technologies or purely functional completeness are not viable core goals."
 },
 "c1q11": {
  "q": "Which statements about stakeholders of an architecture are correct?",
  "options": [
   "Stakeholders are all persons and groups with a legitimate interest in the system or its development.",
   "Operations, maintenance, the client and possibly authorities also belong to them, not only end users.",
   "Stakeholders are only those who actively work with the software (the end users).",
   "Stakeholders with conflicting interests cannot exist; otherwise the project would not be feasible.",
   "The identification of the stakeholders is completed once at project start and thereafter unchangeable."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Correct: what is decisive is the legitimate interest in the system.",
   "Correct: operations, maintenance, the client and external parties also count among them.",
   "Wrong: end users are only one of many stakeholder groups.",
   "Wrong: conflicting interests are the normal case and must be balanced.",
   "Wrong: stakeholder identification is an ongoing process, not completed once."
  ],
  "explanation": "Stakeholders are all with legitimate concerns (users, operations, maintenance, client, authorities …). They are not limited to end users, often have conflicting interests, and their identification is ongoing."
 },
 "c1q12": {
  "q": "Which properties characterize a well-cut building block?",
  "options": [
   "High cohesion – tasks that belong together are bundled.",
   "Loose coupling – dependencies run via few, clearly defined interfaces.",
   "It accesses the internal data structures of neighboring building blocks directly when needed, in order to save detours via interfaces.",
   "The more fine-grained the cut (ideally one building block per class or method), the better the architecture.",
   "It depends on as many other building blocks as possible, in order to reuse their functionality broadly."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Correct: high cohesion (tasks that belong together bundled) is desirable.",
   "Correct: loose coupling via clear interfaces likewise.",
   "Wrong: direct access to internals breaks encapsulation and increases coupling.",
   "Wrong: granularity alone is not a quality measure; over-fragmentation increases coupling.",
   "Wrong: many dependencies mean high coupling – reuse does not justify that."
  ],
  "explanation": "Well-cut = high cohesion and loose coupling via clear interfaces. Direct access to internals, maximum fine-grainedness and many dependencies are anti-patterns (encapsulation break or high coupling)."
 },
 "c1q13": {
  "q": "Which statements about the interface of a building block are correct?",
  "options": [
   "It defines the externally visible contract: offered and/or required operations together with guarantees.",
   "A building block can offer several interfaces, for instance depending on the user group (role interfaces).",
   "A complete interface description also includes the concrete internal data structure with which the building block works.",
   "If the internal implementation changes, the interface must inevitably change as well.",
   "An interface comprises only the signatures; functional pre- and postconditions (contract) are not a component of it."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Correct: the interface is the externally visible contract.",
   "Correct: a building block can offer several (role/user-specific) interfaces.",
   "Wrong: the internal data structure is an internal matter, not a component of the contract.",
   "Wrong: the interface is precisely meant to remain stable when the implementation changes.",
   "Wrong: the contract also includes semantics as well as pre- and postconditions, not only signatures."
  ],
  "explanation": "The interface is the contract (offered/required operations together with guarantees); a building block can offer several of them. It does not prescribe internals, remains stable under internal changes, and comprises more than pure signatures."
 },
 "c1q14": {
  "q": "Which statements about the responsibility of a building block are correct?",
  "options": [
   "It describes the clearly outlined task for which the building block is responsible (the WHAT).",
   "Ideally it is cohesive and clearly delimited from other building blocks.",
   "It results completely from the sum of the publicly offered interface operations.",
   "It determines with which technology or library the building block is realized (the HOW).",
   "Overlapping responsibilities of two building blocks increase the fault tolerance."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Correct: responsibility = the clearly outlined task (the WHAT).",
   "Correct: it should be cohesive and clearly delimited.",
   "Wrong: the interface operations are the HOW of use, not the responsibility itself.",
   "Wrong: the technology choice is the HOW, not the responsibility.",
   "Wrong: overlapping responsibilities create redundancy and maintenance problems, not fault tolerance."
  ],
  "explanation": "Responsibility = the clearly outlined, cohesive task (the WHAT). It is not the sum of the interface operations, not the technical realization (HOW), and overlaps are harmful, not useful."
 },
 "c1q15": {
  "q": "In a project the code deviates over time from the documented architecture. Which statements are correct?",
  "options": [
   "Intended qualities (e.g. maintainability) arise only if the code follows the structure.",
   "Architecture erosion threatens – target and actual state drift apart.",
   "Reviews or tool-supported dependency checks can uncover such deviations.",
   "As long as the documentation is kept up to date, code deviations are uncritical.",
   "Deviations are uncritical, since an architecture is only a non-binding recommendation."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: the qualities only materialize if the code follows the structure.",
   "Correct: the drifting apart of target and actual state is precisely architecture erosion.",
   "Correct: reviews and dependency analyses uncover such deviations.",
   "Wrong: up-to-date documentation does not help if the code does not follow the structure.",
   "Wrong: architecture is binding; deviations undermine goal achievement."
  ],
  "explanation": "Qualities arise only if the code follows the architecture; otherwise architecture erosion threatens, which can be uncovered by reviews/tooling. Neither up-to-date documentation nor the view of architecture as a mere recommendation makes deviations uncritical."
 },
 "c1q16": {
  "q": "How does software architecture relate to the various abstraction levels of a system?",
  "options": [
   "It describes structures on several nested levels (system, subsystems, building blocks); principles such as cohesion and coupling apply recursively in doing so.",
   "Only the topmost system level is architecture-relevant; every finer decomposition counts exclusively as detailed design.",
   "The levels are strictly separated: decisions on one level have no effects on deeper levels.",
   "The number of abstraction levels is fixed at three by the curriculum."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: structures are considered on several nested levels, the same principles apply recursively.",
   "Wrong: the boundary between architecture and detailed design is fluid, not limited to the topmost level.",
   "Wrong: decisions of higher levels frame and influence the deeper ones.",
   "Wrong: there is no fixed prescribed number of levels."
  ],
  "explanation": "Architecture considers structures hierarchically on several levels, with cohesion/coupling applying recursively. The boundary to the detailed design is fluid, levels influence each other, and the number of levels is not fixed."
 },
 "c1q17": {
  "q": "Which statements about the benefit of software architecture are correct?",
  "options": [
   "It makes complexity manageable and supports collaborative work in the team.",
   "It creates a common basis for communication among the stakeholders.",
   "It supports the targeted achievement of quality goals by making key decisions conscious.",
   "It ensures that every future requirement remains implementable without structural change.",
   "It makes detailed design and coding largely superfluous, since the key decisions are already fixed."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: mastering complexity and enabling division of labor are core benefits.",
   "Correct: it creates a common basis for communication.",
   "Correct: through conscious key decisions, quality goals are addressed in a targeted manner.",
   "Wrong: no architecture absorbs every future change without structural work – that would be over-flexibility and contradicts YAGNI.",
   "Wrong: architecture provides guard rails but replaces neither detailed design nor implementation."
  ],
  "explanation": "Architecture masters complexity, enables division of labor and communication, and supports the achievement of quality goals. But it can neither absorb every future change without structural work nor replace detailed design and implementation."
 },
 "c1q18": {
  "q": "What characterizes an iterative (evolutionary) approach to architecture work?",
  "options": [
   "Key decisions are made early, but reviewed and refined across iterations based on new insights.",
   "The architecture is fully defined at the beginning (Big Design Up Front) and thereafter no longer touched.",
   "The architecture arises purely emergently from the code, without conscious overarching decisions.",
   "An iterative approach means deferring key decisions as long as possible, until maximum certainty exists."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: important decisions early, then refinement across the iterations.",
   "Wrong: a complete, unchangeable up-front design (BDUF) is precisely not what is meant.",
   "Wrong: purely emergent without conscious decisions leads to unplanned structure.",
   "Wrong: key decisions are made early, not deferred until maximum certainty."
  ],
  "explanation": "Iterative means: key decisions early, then review and refinement. Neither complete up-front design (BDUF) nor purely emergent growth nor deferring all decisions corresponds to it."
 },
 "c1q19": {
  "q": "How do architecture and detailed design differ?",
  "options": [
   "Architecture makes the overarching, far-reaching structural decisions; the detailed design concretizes within these specifications.",
   "The boundary is defined formally and project-independently: below a certain building block size the detailed design necessarily begins.",
   "The difference lies solely in the point in time: architecture arises in an early phase, the detailed design necessarily only afterward.",
   "Detailed design is qualitatively less demanding and irrelevant to the system's goal achievement."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: architecture = far-reaching structural decisions, detailed design refines within these.",
   "Wrong: the boundary is fluid and context-dependent, not formally tied to a size.",
   "Wrong: both interlock, it is not purely a question of sequence.",
   "Wrong: the detailed design is demanding and definitely relevant to goal achievement."
  ],
  "explanation": "Architecture makes large, consequential structural decisions; the detailed design concretizes within them. The boundary is fluid/context-dependent, not purely separated in time, and the detailed design is by no means irrelevant."
 },
 "c1q20": {
  "q": "What role do communication skills play for software architects?",
  "options": [
   "They are central for mediating between stakeholders and justifying decisions in an audience-appropriate manner.",
   "Communication matters above all when presenting the finished architecture; during design, the technical work is what primarily counts.",
   "Oral agreement is preferable to written rationale because it is faster and clears up misunderstandings directly.",
   "Communication is directed mainly at the development team; functional stakeholders are reached via product management."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: mediating early and continuously and justifying in an audience-appropriate manner are core competencies.",
   "Wrong: communication is decisive precisely during design (clarifying concerns, gathering feedback), not only at the presentation.",
   "Wrong: oral agreement is ephemeral; load-bearing decisions need traceable, durable written rationale.",
   "Wrong: architects communicate directly with all relevant stakeholders, not only indirectly via product management."
  ],
  "explanation": "Communication is central early and continuously, for mediating between all stakeholders and justifying decisions. It does not happen only at the presentation, does not replace written rationale, and is not limited to the team."
 },
 "c1q21": {
  "q": "What is the purpose of an early walking skeleton or proof of concept in architecture work?",
  "options": [
   "To review central technical risks and the feasibility of key decisions early.",
   "To deliver an already production-ready first version of the most important features to the users.",
   "To estimate the total effort of the project in a binding and final manner.",
   "To demonstrate the functional completeness of the system end-to-end."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: a walking skeleton reviews risky assumptions and feasibility early.",
   "Wrong: that rather describes a productive increment/MVP; a walking skeleton is deliberately not production-ready.",
   "Wrong: it does not provide a binding final effort estimate.",
   "Wrong: it does not implement the complete functionality."
  ],
  "explanation": "A walking skeleton reviews risky assumptions and the feasibility of key decisions early. It is deliberately not production-ready (unlike an MVP/increment), not functionally complete, and provides no binding effort estimate."
 },
 "c1q22": {
  "q": "What characterizes a \"good\" software architecture?",
  "options": [
   "It meets the required quality goals under the given constraints.",
   "It is as simple and understandable as possible – but not simpler than the task allows.",
   "It uses the most current technologies possible, in order to appear future-proof.",
   "It is maximally flexible and prepared for every conceivable future requirement.",
   "It is objectively and project-independently good as soon as it follows a recognized pattern (e.g. layers)."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Correct: meeting the required quality goals under the constraints is the measure.",
   "Correct: appropriate simplicity is a quality characteristic.",
   "Wrong: technology variety for its own sake is not a quality criterion.",
   "Wrong: over-flexibility in stock contradicts YAGNI.",
   "Wrong: good architecture is context-dependent; a pattern alone does not make it good."
  ],
  "explanation": "Good = quality goals met under constraints and appropriately simple. State-of-the-art technology, over-flexibility in stock (against YAGNI) or the mere following of a pattern are not quality criteria – quality is context-dependent."
 },
 "c1q23": {
  "q": "How does one best delimit the terms \"building block\" and \"component\"?",
  "options": [
   "\"Building block\" is the conceptual umbrella term; a component is a concrete building block with clearly defined, contractually described interfaces.",
   "A building block is always a design-time unit, a component always a runtime unit.",
   "The terms are completely synonymous and merely different translations of the same concept.",
   "A component is by definition larger than a building block and combines several building blocks."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: building block = umbrella term, component = concrete building block with defined interfaces.",
   "Wrong: it is not a runtime/design-time distinction.",
   "Wrong: they are not exactly synonymous – component is more specific.",
   "Wrong: it is not a question of size."
  ],
  "explanation": "\"Building block\" is the general, conceptual umbrella term; a component is its more concrete manifestation with defined interfaces. It is neither a runtime/design-time nor a size question and not merely synonymous."
 },
 "c1q24": {
  "q": "Why does the CPSA-Foundation curriculum deliberately refrain from a single, binding definition of \"software architecture\"?",
  "options": [
   "Because numerous established definitions exist and one uses their common core aspects (building blocks, relationships, decisions).",
   "Because a binding definition would narrow the solution space and hinder innovation.",
   "Because definitions must turn out differently depending on the programming language.",
   "Because the definition is left to the respective certification level."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: many recognized definitions exist; their common intersection is used.",
   "Wrong: a definition would not narrow the solution space in a relevant way – that is not the reason.",
   "Wrong: the architecture concept is not programming-language-dependent.",
   "Wrong: the definition is not left to the certification level."
  ],
  "explanation": "There are many recognized definitions; the curriculum uses their common core aspects (building blocks, relationships, key decisions). Neither innovation protection, language dependence nor level binding is the reason."
 },
 "c1q25": {
  "q": "At which level does the CPSA-Foundation material primarily aim?",
  "options": [
   "At the architecture of a single software system.",
   "At the enterprise-wide enterprise architecture, which integrates all systems and business processes.",
   "At the architecture of individual classes and methods in the detailed design.",
   "At the selection and configuration of concrete cloud and network infrastructure."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Foundation aims at the architecture of a single system.",
   "Wrong: enterprise architecture (across all systems) lies above this level.",
   "Wrong: classes/methods belong to the detailed design, not to the focus of Foundation.",
   "Wrong: concrete infrastructure selection is not the primary focus."
  ],
  "explanation": "Foundation deals with the architecture of a single system. Enterprise architecture, detailed design (classes/methods) and concrete infrastructure lie above or below this focus."
 },
 "c1q26": {
  "q": "Which statements about the concept of structure in software architecture are correct?",
  "options": [
   "Every system has at least one structure – if need be, an unplanned, grown one.",
   "Both static structures and behavior at runtime belong to the architecture.",
   "A system typically has several structures, which are illuminated by different views.",
   "Only the explicitly documented structures actually exist in the system.",
   "A structure consists solely of building blocks; their relationships are irrelevant to the concept of structure."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: every system has at least one (possibly unplanned) structure.",
   "Correct: architecture includes static structure and runtime behavior.",
   "Correct: there are typically several structures, represented via different views.",
   "Wrong: undocumented, implicit structures are also really present.",
   "Wrong: relationships are a mandatory part of every structure."
  ],
  "explanation": "Every system has at least one (possibly unintended) structure; architecture includes runtime behavior, and systems have several structures/views. Undocumented structures also exist, and relationships mandatorily belong to them."
 },
 "c1q27": {
  "q": "What role do data and data models play for software architecture?",
  "options": [
   "The data model is a key architecture decision – usually long-lived and expensive to change afterward.",
   "The data model is a pure implementation detail of the persistence layer without influence on the building block cut.",
   "The data model is sensibly defined only after the architecture is completely established.",
   "The data model is arbitrarily interchangeable, because modern ORMs decouple it completely from the architecture."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: the data model is key, long-lived and expensive to change.",
   "Wrong: it strongly shapes the architecture and the building block cut, is not a mere detail.",
   "Wrong: data model and architecture arise mutually, not strictly one after another.",
   "Wrong: ORMs encapsulate access, but do not decouple the formative data model from the architecture."
  ],
  "explanation": "The data model is a key, long-lived decision (comparable to the \"statics\" of a building). It is not a mere persistence detail, not a downstream decision, and is not really decoupled from the architecture by ORMs."
 },
 "c1q28": {
  "q": "On which abstraction levels are data models typically described?",
  "options": [
   "Conceptual (functional), logical (technology-neutral structured) and physical (concrete realization).",
   "Conceptual, logical and normalized – where \"physical\" is only another word for \"logical\".",
   "Only logical and physical; a conceptual level does not exist for the data model.",
   "On the context, building block and deployment level – analogous to the architecture views."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: the three usual levels are conceptual, logical and physical.",
   "Wrong: normalization is a technique on the logical level, not a substitute for \"physical\".",
   "Wrong: the conceptual (functional) level very much exists.",
   "Wrong: context/building block/deployment are architecture views, not data model levels."
  ],
  "explanation": "Data models are described conceptually (functional), logically (technology-neutral) and physically (concrete realization). Normalization is a logical technique, the conceptual level exists, and architecture views are something different."
 },
 "c1q29": {
  "q": "Which statements about the connection between data model and architecture are correct?",
  "options": [
   "Data ownership (who owns which data and may change it) influences the functional cut of the building blocks.",
   "A data model directly shared by many building blocks can strongly increase the coupling.",
   "The building block cut and the data model can be chosen freely and independently of each other.",
   "With microservices, data ownership is unimportant, as long as all services use the same central database.",
   "A normalized central schema generally decouples the building blocks better than separate data storage."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Correct: data ownership shapes the functional building block cut.",
   "Correct: a shared, directly used data model couples the building blocks strongly.",
   "Wrong: data model and cut are connected and cannot be chosen freely and independently.",
   "Wrong: precisely with microservices data ownership is central (own data storage per service); a shared DB is an anti-pattern.",
   "Wrong: a shared central schema tends to couple more strongly; separate data storage decouples better."
  ],
  "explanation": "Data ownership shapes the building block cut, and a shared, directly used data model couples strongly. Cut and data model are connected; with microservices, own data storage per service is decisive, a central schema does not decouple better."
 },
 "c2q1": {
  "q": "In a project, the following statements are made about distinguishing functional requirements, quality requirements, and constraints. Which of them are correct?",
  "options": [
   "A constraint restricts the solution space but is itself neither a function nor a quality of the system.",
   "Quality requirements and constraints can refer to the same property: “respond quickly” is a quality requirement, “run on existing 5-year-old hardware” is a constraint.",
   "Whether a specification is a functional requirement or a quality requirement depends solely on how important it is to the client.",
   "A constraint is a particularly binding functional requirement and is therefore prioritized higher.",
   "Functional requirements describe WHAT the system does; quality requirements describe HOW WELL it does it."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Correct: Constraints delimit the solution space and are themselves neither a function nor a quality.",
   "Correct: The same property can appear as a quality requirement (required behavior) and as a constraint (unchangeable specification) – the distinction lies in the ability to influence it, not in the topic.",
   "Incorrect (near-miss): The classification follows the type (WHAT vs. HOW WELL), not the importance; even unimportant specifications retain their category.",
   "Incorrect: A constraint is not a functional requirement but a predetermined limit; priority is a different concept.",
   "Correct: It is precisely this WHAT/HOW-WELL distinction that separates functional from quality requirements."
  ],
  "explanation": "Constraints delimit the solution space and are neither a function nor a quality; the same property can appear as a quality requirement and (as an unchangeable specification) as a constraint. The classification follows the type (WHAT vs. HOW WELL), not the importance, and a constraint is not an “important” functional requirement."
 },
 "c2q2": {
  "q": "A team initially regards quality requirements as “secondary” and wants to address them only after the functional implementation. Which statements are correct?",
  "options": [
   "Quality requirements are decisive architecture drivers; if they are considered late, structural changes are often expensive or barely possible anymore.",
   "Whether a quality requirement can be met depends substantially on whether the architecture enables it – not just on whether it is tested at the end.",
   "Functional requirements and quality requirements are equally important; which one shapes the architecture more strongly depends on the specific system.",
   "As long as all functional requirements are met, the quality characteristics arise on their own.",
   "Quality requirements essentially concern the user interface and can therefore be adequately addressed late."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Quality requirements drive structural decisions; retrofitting them late is expensive.",
   "Correct: Whether they can be met depends on the structure – testing alone does not produce quality.",
   "Correct (subtle): Both types of requirement are important; the stronger architectural influence in practice often, but not necessarily, comes from the quality requirements – this is system-dependent.",
   "Incorrect (trap): Quality characteristics do not arise automatically from fulfilled functionality but must be deliberately designed.",
   "Incorrect: Quality requirements concern the entire architecture, not predominantly the interface."
  ],
  "explanation": "Quality requirements shape the architecture decisively and must be considered early, because retrofitting them late is expensive; whether they can be met depends on the structure. They do not arise on their own from functionality and do not concern only the interface. The statement that both types of requirement are important and that the stronger influence is system-dependent is correct and more nuanced than a blanket “quality beats function.”"
 },
 "c2q3": {
  "q": "Which of the following specifications are constraints?",
  "options": [
   "For legal reasons, personal data must be stored in a data center within the EU.",
   "The relational database already licensed in the company must be used.",
   "The search must answer 95 % of queries in under one second.",
   "Reports must be exportable as PDF.",
   "The project budget is capped at a fixed amount."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Correct: A legally/regulatorily prescribed storage-location specification is a constraint.",
   "Correct: A prescribed, already existing technology is a technical constraint.",
   "Incorrect (near-miss): A required response time is a quality requirement (performance), not a constraint.",
   "Incorrect: PDF export describes a function – a functional requirement.",
   "Correct: A fixed budget is an organizational constraint."
  ],
  "explanation": "Regulatory storage-location specifications, prescribed technologies, and a fixed budget are constraints (legal, technical, organizational). A required response time is a quality requirement, and PDF export is a functional requirement."
 },
 "c2q4": {
  "q": "A stakeholder demands: “The system should be fast.” How is this requirement best made verifiable?",
  "options": [
   "Through a quality scenario with a trigger, an environment/context, and a measurable response measure (e.g. “95 % of searches under 1 s at full load”).",
   "By setting a blanket response measure of “under 1 second” without naming a trigger and operating state.",
   "By formulating the requirement as a constraint “use a performant programming language.”",
   "By agreeing that the team assesses “fast” at its own discretion."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: A complete quality scenario (trigger, context, measurable response measure) makes the requirement unambiguously verifiable.",
   "Incorrect (near-miss): A mere number without a trigger and load context is only seemingly precise – “under 1 s” is not unambiguously verifiable without defined conditions.",
   "Incorrect: A technology constraint does not make the quality requirement more precise and fixes a solution.",
   "Incorrect: A subjective judgment remains vague and is precisely not measurable."
  ],
  "explanation": "The requirement only becomes verifiable through a complete quality scenario with a trigger, environment, and measurable response measure. A bare number without context is only seemingly precise, a technology constraint confuses requirement and solution, and a subjective judgment is not measurable."
 },
 "c2q5": {
  "q": "Which statements about the role of architects in clarifying requirements are correct?",
  "options": [
   "Architects actively question requirements, uncover gaps and contradictions, and help sharpen them.",
   "They make implicit expectations and quality requirements explicit, which are often missing from the requirements document.",
   "Responsibility for the business prioritization of requirements ultimately lies with the client or the business stakeholders.",
   "They adopt the submitted requirements unchanged, since their clarification is exclusively a matter for business analysis.",
   "Since complete requirements are available at project start, later clarification is not necessary."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Actively questioning and sharpening is part of the architecture role.",
   "Correct: Especially implicit quality requirements must be worked out by architecture.",
   "Correct (subtle): Architects advise and provide the basis, but the business prioritization is ultimately the responsibility of the business stakeholders/the client.",
   "Incorrect (trap): Architecture does not adopt requirements passively; clarification is a shared responsibility.",
   "Incorrect: Requirements are rarely complete at the start and are clarified continuously."
  ],
  "explanation": "Architects actively participate in clarifying requirements and make implicit, often quality-related knowledge explicit; the business prioritization, however, is the responsibility of the business stakeholders. Requirements are not adopted passively and are rarely available in complete form."
 },
 "c2q6": {
  "q": "A team discusses which of the listed properties is a top-level characteristic of the product quality model of ISO/IEC 25010:2023. What is correct?",
  "options": [
   "Maintainability is a top-level characteristic.",
   "Scalability is an independent top-level characteristic.",
   "Performance Efficiency is a sub-aspect of reliability.",
   "Portability is still an independent top-level characteristic in the 2023 version."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Maintainability is one of the top-level characteristics of ISO 25010.",
   "Incorrect (near-miss): Scalability is not an independent top-level characteristic but an aspect (among others of the performance/flexibility consideration).",
   "Incorrect: Performance Efficiency is itself a top-level characteristic, not a sub-aspect of reliability.",
   "Incorrect: in 2023 portability was subsumed into the broader top-level characteristic „Flexibility“ and no longer exists independently under that name."
  ],
  "explanation": "Maintainability is a top-level characteristic of ISO 25010. Scalability is not an independent top-level characteristic; Performance Efficiency is itself a top-level characteristic and not a sub-aspect of reliability; Compatibility continues to exist."
 },
 "c2q7": {
  "q": "Which of the following statements describe functional requirements?",
  "options": [
   "The user can export invoices as PDF.",
   "The system sends a confirmation email after every order.",
   "Search responses appear in under 200 ms.",
   "The system is available 99.9 % of the time around the clock.",
   "A clerk can cancel an order."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Correct: PDF export describes WHAT the system does – a function.",
   "Correct: Sending an email is a described function.",
   "Incorrect (near-miss): A response time describes HOW WELL – a quality requirement (performance).",
   "Incorrect: Availability is a quality requirement, not a function.",
   "Correct: Cancellation is a function provided by the system."
  ],
  "explanation": "PDF export, email sending, and cancellation describe WHAT the system does – functional requirements. Response time and availability describe HOW WELL – quality requirements."
 },
 "k1": {
  "q": "Assign each statement: functional requirement or quality requirement?",
  "categories": [
   "Functional requirement",
   "Quality requirement"
  ],
  "rows": [
   "After a server failure, the system resumes operation within 30 seconds.",
   "The user can filter their order history by date.",
   "Unauthorized access attempts are logged and the user is locked out after five failed attempts.",
   "A new language version of the interface can be added without a code change."
  ],
  "explanation": "Resuming operation within a time bound (reliability/recoverability) and code-change-free extensibility (maintainability/flexibility) are quality requirements – they describe HOW WELL. Filtering the history and the specific locking after five failed attempts are described functions (WHAT); note: that locking happens at all is a function, whereas “how secure” the system is overall would be the quality requirement."
 },
 "k2": {
  "q": "Assign each specification: constraint or quality requirement?",
  "categories": [
   "Constraint",
   "Quality requirement"
  ],
  "rows": [
   "Due to a corporate directive, only the provided cloud provider may be used.",
   "A new payment method can be integrated by one developer in under two person-days.",
   "The solution must comply with the WCAG 2.1 AA accessibility guideline.",
   "The system remains available even if one of three nodes fails."
  ],
  "explanation": "The mandatory cloud specification (organizational/technical) and the prescribed compliance with a specific guideline (WCAG 2.1 AA as a regulatory/normative requirement) limit the solution space – constraints. Easy extensibility (maintainability) and fault tolerance (availability) describe HOW WELL – quality requirements. Note: “being accessible” as a goal would be a quality requirement; the obligation to comply with a specific standard is the constraint."
 },
 "c2q8": {
  "q": "Which of the following belong to the top-level characteristics of the product quality model of ISO/IEC 25010:2023?",
  "options": [
   "Reliability",
   "Security",
   "Test coverage (code coverage)",
   "Compatibility",
   "Adherence to the project budget"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Correct: Reliability is a top-level characteristic of ISO 25010.",
   "Correct: Security is a top-level characteristic of ISO 25010.",
   "Incorrect (trap): Test coverage is measurable but not a product quality characteristic of ISO 25010.",
   "Correct: Compatibility is a top-level characteristic of ISO 25010.",
   "Incorrect: Budget adherence is a project/economic aspect, not a product quality characteristic."
  ],
  "explanation": "Reliability, Security, and Compatibility are top-level characteristics of ISO 25010:2023. Test coverage is measurable but not a product quality characteristic; budget adherence is an economic project aspect."
 },
 "c2q9": {
  "q": "Why should quality requirements be clarified as early as possible? Which justifications are correct?",
  "options": [
   "Because they shape the fundamental structural decisions, which can later only be changed with great effort.",
   "Because they often remain implicit and otherwise become painfully visible only late – for example in operation.",
   "Because early clarification helps to weigh up trade-offs between quality characteristics in good time.",
   "Because they may no longer be changed after the first release.",
   "Because they otherwise automatically turn into functional requirements."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Quality requirements drive structural decisions; late changes are expensive.",
   "Correct: Implicit quality requirements otherwise become visible only late.",
   "Correct: Early clarification allows timely weighing of trade-offs.",
   "Incorrect (trap): Quality requirements are not frozen after the release.",
   "Incorrect: They do not turn into functional requirements – the category does not change."
  ],
  "explanation": "Early clarification is worthwhile because quality requirements drive the structure, often remain implicit, and trade-offs must be weighed in good time. They are not frozen after the release and do not turn into functional requirements."
 },
 "c2q10": {
  "q": "A stakeholder demands: “The system must also be operable by visually impaired users.” What is most likely correct?",
  "options": [
   "It is a quality requirement (an aspect of usability/accessibility) that can shape the architecture.",
   "It is a functional requirement, because a specific operating function (“read-aloud function”) is described.",
   "It is a constraint, since it represents an unchangeable external specification.",
   "It is a non-goal that limits the scope."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Accessibility is an aspect of usability – a quality requirement.",
   "Incorrect (near-miss): No specific function is named, but a quality; a “read-aloud function” would be a possible solution, not the requirement.",
   "Incorrect: Only when a specific standard (e.g. a WCAG level) is mandatorily prescribed does a constraint arise from it; the mere operability demand is not one.",
   "Incorrect: It excludes nothing, so it is not a non-goal."
  ],
  "explanation": "Operability for visually impaired users is an aspect of usability – a quality requirement. It does not name a specific function; only a mandatorily prescribed standard would yield a constraint. It is not a non-goal."
 },
 "c2q11": {
  "q": "Which statements about prioritizing requirements are correct?",
  "options": [
   "Because time and budget are limited, it must be weighed up what is implemented first and what possibly not at all.",
   "Requirements can contradict one another; prioritization forces conscious trade-offs.",
   "Besides the implementation effort, business value and risk should also feed into the prioritization.",
   "Low-priority requirements may thereafter be ignored without replacement and without renewed review.",
   "A prioritization once set remains unchanged throughout the entire project."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Limited resources force selection and ordering.",
   "Correct: Contradictory requirements require conscious trade-offs.",
   "Correct: Value and risk, alongside effort, are among the criteria.",
   "Incorrect (trap): Low priority does not automatically mean permanently dropped.",
   "Incorrect: Priorities change over the course and must be reviewed continuously."
  ],
  "explanation": "Prioritization is done because resources are limited and requirements compete; the criteria are effort, value, and risk. Low-priority items are not automatically dropped for good, and priorities must be updated over the course of the project."
 },
 "c2q12": {
  "q": "What typically applies to the relationship between different quality requirements?",
  "options": [
   "They are frequently in a trade-off relationship and must be deliberately weighed against one another.",
   "They generally reinforce one another, so that improving one usually also improves others.",
   "They are fundamentally independent of one another and do not influence each other.",
   "Only a single quality requirement is relevant at any given time."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Quality characteristics often compete (e.g. security vs. usability) and must be weighed up.",
   "Incorrect (near-miss): Some qualities do harmonize, but “generally mutual reinforcement” is wrong – conflicts are typical.",
   "Incorrect: They are not independent but frequently influence one another.",
   "Incorrect: Usually several quality requirements are relevant at the same time."
  ],
  "explanation": "Quality characteristics are frequently in a trade-off relationship and must be weighed up. They do not generally reinforce one another, are not independent, and are rarely relevant in isolation."
 },
 "c2q13": {
  "q": "Which statements about an assumption in the architecture context are correct?",
  "options": [
   "It is a matter taken as given but not assured.",
   "It should be explicitly documented and tracked as a risk in case it does not hold.",
   "If a documented assumption is demonstrably confirmed, it can become a confirmed constraint or fact.",
   "It is from the outset a binding specification that restricts the solution space.",
   "Once made, it may no longer be questioned in the further course of the project."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: An assumption is presumed but not assured.",
   "Correct: It should be documented and tracked as a risk.",
   "Correct (subtle): If an assumption is confirmed, it loses its uncertain character and can be treated as a fact/constraint.",
   "Incorrect (near-miss): A specification that is binding and restrictive from the outset is a constraint, not an assumption.",
   "Incorrect: Assumptions must be reviewed continuously and revised if necessary."
  ],
  "explanation": "An assumption is unconfirmed, must be documented, tracked as a risk, and reviewed continuously; if it is confirmed, it can become a fact/constraint. A specification that is binding and restrictive from the outset, by contrast, is a constraint."
 },
 "c2q14": {
  "q": "Which of the following are quality requirements (non-functional)?",
  "options": [
   "The application processes 1000 requests per second with a response time under 200 ms.",
   "Sensitive data is stored encrypted according to the state of the art.",
   "A typical change can be made by new developers in under a day.",
   "The system must reuse the customer's existing Oracle database.",
   "Users can cancel an invoice and receive a confirmation."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: a measurable performance requirement (how well).",
   "Correct: security – a quality requirement.",
   "Correct: maintainability/modifiability – a quality requirement.",
   "Incorrect: this is a <em>constraint</em> (a given), not a quality requirement.",
   "Incorrect: this describes a <em>functional</em> requirement (WHAT the system does)."
  ],
  "explanation": "Quality requirements describe HOW WELL a system does something (performance, security, maintainability …). A functional requirement describes WHAT it does; a constraint is a limiting given – neither is a quality requirement."
 },
 "c2q15": {
  "q": "Which of the following are organizational constraints (as distinct from technical or regulatory ones)?",
  "options": [
   "The project must be completed by year-end with the existing, fixed team.",
   "Development follows the process model prescribed within the company.",
   "Data storage must be done in a relational database.",
   "Communication between the services must run over HTTPS.",
   "The response time must be under 300 ms."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Correct: Deadline and team composition are organizational constraints.",
   "Correct: A prescribed process model is an organizational constraint.",
   "Incorrect (near-miss): A database specification is a technical constraint.",
   "Incorrect: A protocol specification (HTTPS) is a technical constraint.",
   "Incorrect: The response time is a quality requirement, not a constraint."
  ],
  "explanation": "Deadline/team and a prescribed process model are organizational constraints. Database and protocol specifications are technical constraints; the response time is a quality requirement."
 },
 "c2q16": {
  "q": "What do quality requirements typically derive from?",
  "options": [
   "From the client's business goals.",
   "From the needs and concerns of the various stakeholders.",
   "From legal and regulatory requirements that the system must meet.",
   "From the number of available developers.",
   "From the chosen process model (e.g. Scrum or waterfall)."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Business goals are a central source of quality requirements.",
   "Correct: Stakeholder concerns provide quality requirements.",
   "Correct: Legal/regulatory requirements can justify quality requirements (e.g. security, data protection).",
   "Incorrect (trap): Team size is an (organizational) constraint, not a source of quality requirements.",
   "Incorrect: The process model determines the process, not the quality requirements."
  ],
  "explanation": "Quality requirements arise from business goals, stakeholder concerns, and legal/regulatory requirements. Team size (a constraint) and the process model are not a source of quality requirements."
 },
 "c2q17": {
  "q": "A requirements document contains the sentence: “PostgreSQL is to be used for data storage.” What is most likely correct?",
  "options": [
   "Strictly speaking, this is a solution/technology specification and acts as a constraint – a pure requirement would describe only the WHAT/HOW WELL.",
   "This is a functional requirement, because it defines the behavior of data storage.",
   "This is a quality requirement, because databases determine performance.",
   "Requirement and solution are the same thing here anyway, just at different levels of detail."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: A specific technology decision pre-empts the solution space and acts as a constraint; a requirement names the WHAT/HOW WELL, not the specific HOW.",
   "Incorrect (near-miss): No business behavior is described, but a technology is prescribed.",
   "Incorrect: Not the choice of database itself, but any performance goals would be the quality requirement.",
   "Incorrect: Requirement (WHAT/HOW WELL) and solution (HOW) differ fundamentally, not just in level of detail."
  ],
  "explanation": "A specific technology specification does not describe WHAT/HOW WELL but fixes a solution and therefore acts as a constraint. It is neither a functional nor a quality requirement, and requirement and solution differ fundamentally."
 },
 "c2q18": {
  "q": "Which statements about recording non-goals (deliberately excluded points) are correct?",
  "options": [
   "They clarify the scope and prevent false expectations.",
   "They facilitate later decisions, because it is documented what is deliberately not pursued.",
   "A non-goal can change over the course of the project and later become a goal after all.",
   "They replace the functional requirements and make their elicitation superfluous.",
   "They decouple the architecture from the goals of the system."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Non-goals delimit the scope and manage expectations.",
   "Correct: Documented exclusions facilitate later decisions and discussions.",
   "Correct (subtle): Non-goals are not set in stone and can change over the course.",
   "Incorrect (trap): Non-goals do not replace functional requirements.",
   "Incorrect: They do not decouple the architecture from the goals."
  ],
  "explanation": "Non-goals clarify the scope, manage expectations, facilitate later decisions, and can change over the course. They do not replace functional requirements and do not decouple the architecture from the goals."
 },
 "c2q19": {
  "q": "A quality scenario is meant to make a quality requirement verifiable. Which components belong to such a scenario?",
  "options": [
   "A concrete trigger/stimulus (e.g. “1000 simultaneous requests arrive”).",
   "The environment/operating state in which the scenario applies (e.g. “under full load”).",
   "A measurable response measure (e.g. “95 % in under 1 s”).",
   "The estimated development costs of the implementation.",
   "The specification of the programming language to be used."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: The trigger is a core component of the scenario.",
   "Correct: Environment/operating state belong to it, since behavior is context-dependent.",
   "Correct: A measurable response measure allows unambiguous verification.",
   "Incorrect (trap): Costs do not belong to the scenario and say nothing about verifiability.",
   "Incorrect: The language choice is a solution decision/constraint, not a scenario component."
  ],
  "explanation": "A quality scenario consists, among other things, of a trigger, an environment/context, and a measurable response measure. Development costs and the choice of programming language do not belong to it."
 },
 "c2q20": {
  "q": "Two important stakeholders hold incompatible goals (maximum security vs. maximum ease of use). Which approaches are appropriate?",
  "options": [
   "Make the conflicting concerns transparent and deliberately weigh them against one another.",
   "Bring about and document a justified prioritization or a viable compromise.",
   "Escalate the decision to the responsible authority (e.g. client/product ownership) if no balance can be achieved.",
   "Implement every stated wish unchanged and in full.",
   "Leave the decision to the hierarchically or rhetorically strongest stakeholder."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Transparency and deliberate weighing are the first step.",
   "Correct: Prioritization/compromise together with documentation of the decision is appropriate.",
   "Correct: In the case of an unresolvable conflict, escalation to the responsible authority makes sense.",
   "Incorrect (trap): Incompatible goals cannot all be fully met.",
   "Incorrect: Letting the “loudest” stakeholder decide is unbalanced and irrelevant to the matter."
  ],
  "explanation": "Competing concerns require transparency, deliberate weighing, a justified prioritization/a compromise, and, if necessary, escalation to the responsible authority. Fully meeting all wishes is impossible, and following the strongest stakeholder is unbalanced."
 },
 "c2q21": {
  "q": "A colleague claims several things about the 2023 revision of ISO/IEC 25010. Which statement is correct?",
  "options": [
   "“Safety” was added as an independent top-level characteristic.",
   "The number of top-level characteristics was reduced to three.",
   "“Portability” was removed without replacement and has no successor in the model.",
   "„Usability“ was kept unchanged under that name."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Safety was added as an independent top-level characteristic in 2023.",
   "Incorrect (trap): The number of top-level characteristics was not reduced to three (there are nine).",
   "Incorrect (near-miss): Portability was not removed without replacement but transferred into “Flexibility.”",
   "Incorrect: in 2023 „Usability“ was renamed to „Interaction Capability“ and expanded."
  ],
  "explanation": "In 2023, Safety, among others, was added as an independent top-level characteristic; the model still has several (nine) top-level characteristics. Portability was not removed but transferred into “Flexibility,” and Reliability/Maintainability continue to exist."
 },
 "c2q22": {
  "q": "How does one sensibly proceed when identifying stakeholders?",
  "options": [
   "Scan the environment layer by layer – from the system through the business system to the wider environment (onion model).",
   "Ask already-known stakeholders about further affected parties (snowball principle).",
   "Also consider non-paying, indirectly affected, and critically minded people.",
   "Create the stakeholder list only once at project start and freeze it thereafter.",
   "Include only those stakeholders who actively participate in the development process."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Scanning layer by layer (onion model) finds stakeholders systematically.",
   "Correct: The snowball principle uncovers further affected parties via acquaintances.",
   "Correct: Indirectly affected parties and critics are also relevant stakeholders.",
   "Incorrect (trap): The list must be updated, not frozen.",
   "Incorrect (near-miss): Being affected, not active participation, determines the stakeholder property; non-participants also count."
  ],
  "explanation": "One scans the environment layer by layer (onion model), extends via the snowball principle, and also considers indirectly affected parties and critics. The list must be kept up to date, and what matters is being affected, not active participation."
 },
 "c2q23": {
  "q": "An architecture team is split into separate departments along the organizational structure and finds that the system reflects the same boundaries. Which statement describes Conway's Law correctly?",
  "options": [
   "The structure of a system tends to mirror the communication structures of the developing organization.",
   "Systems inevitably erode over time if the documentation is not maintained.",
   "System performance grows linearly with the number of servers deployed.",
   "The number of interfaces should correspond to the number of developers involved."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Conway's Law states precisely this mirroring of communication paths in the system structure.",
   "Incorrect (near-miss): That describes architecture erosion, not Conway's Law.",
   "Incorrect: Linear scaling with servers is not Conway's statement.",
   "Incorrect: The number of interfaces equaling the number of developers is made up."
  ],
  "explanation": "Conway's Law: system structures mirror the communication paths of the developing organization. The other options concern erosion, scaling, or are made up."
 },
 "c2q24": {
  "q": "Which statements about implicit (unspoken) requirements are correct?",
  "options": [
   "They frequently concern quality requirements and should be actively made explicit.",
   "They are often based on taken-for-granted expectations that the client does not even mention.",
   "If they are overlooked, this often shows only late and causes high correction costs.",
   "They are mostly functional in nature and, as a rule, already fully documented.",
   "They can be ignored because they are unimportant for the architecture."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Implicit expectations are frequently quality-related and must be worked out.",
   "Correct: They often remain unmentioned because they are considered self-evident.",
   "Correct: Overlooked implicit requirements become visible late and expensively.",
   "Incorrect (trap): They are often qualitative and precisely not fully documented.",
   "Incorrect: They shape the architecture strongly and must not be ignored."
  ],
  "explanation": "Implicit requirements are often quality-related, remain unmentioned as supposedly self-evident, and, if disregarded, become visible late and expensively; they must be actively made explicit. They are not predominantly documented and are by no means unimportant."
 },
 "c2q25": {
  "q": "Two stakeholders are in dispute. How does a substantive conflict most likely differ from a conflict of interests?",
  "options": [
   "A substantive conflict revolves around facts or solution approaches, a conflict of interests around incompatible goals of the parties.",
   "A substantive conflict concerns exclusively technical questions, a conflict of interests exclusively interpersonal ones.",
   "A substantive conflict can never be resolved by more information, a conflict of interests always can.",
   "Both are essentially identical and differ only in their naming."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Substantive conflict = dispute over facts/solution approach; conflict of interests = incompatible goals.",
   "Incorrect (near-miss): Substantive conflicts are not purely technical and conflicts of interests not purely interpersonal.",
   "Incorrect: Rather, a substantive conflict can be resolved through facts/transparency, a conflict of interests precisely not by that alone.",
   "Incorrect: The two types of conflict are not identical."
  ],
  "explanation": "A substantive conflict concerns facts/solution approaches (often resolvable through transparency), a conflict of interests concerns incompatible goals (requiring balance/compromise, facts alone rarely suffice). The technical/interpersonal assignment is wrong, and the types of conflict are not identical."
 },
 "c2q26": {
  "q": "Which statements correctly characterize a constraint?",
  "options": [
   "It is a predetermined limit that the team can barely or not at all influence.",
   "It can be technical, organizational, or legal in nature.",
   "It should be documented just like other requirements, since it influences the design.",
   "It is always a purely functional specification.",
   "It is freely negotiable and easily changeable by the architecture team at any time."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Constraints are predetermined limits that can barely be influenced.",
   "Correct: They can be technical, organizational, or legal.",
   "Correct: Constraints should also be documented, since they shape the design.",
   "Incorrect (near-miss): They are not purely functional but of the most varied nature.",
   "Incorrect (trap): Constraints are precisely not freely negotiable or easily changeable."
  ],
  "explanation": "Constraints are predetermined limits that can barely be influenced (technical, organizational, legal) and should be documented because they shape the design. They are not purely functional and not freely negotiable."
 },
 "c2q27": {
  "q": "A product owner wants to classify requirements using the Kano model. What describes the Kano model correctly?",
  "options": [
   "It distinguishes basic, performance, and excitement attributes according to their effect on satisfaction.",
   "It prioritizes requirements exclusively by their implementation costs.",
   "It maps every requirement to exactly one ISO 25010 quality characteristic.",
   "It sorts requirements strictly by business value, like the MoSCoW method."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Kano classifies by effect on satisfaction (basic, performance, excitement attributes).",
   "Incorrect: Kano does not prioritize primarily by costs.",
   "Incorrect (near-miss): Kano is not a quality model and maps nothing to ISO 25010 characteristics.",
   "Incorrect (near-miss): Value prioritization by must/should/could is MoSCoW, not Kano."
  ],
  "explanation": "Kano classifies by effect on satisfaction: basic (must-have, only noticed negatively), performance (the more, the better), and excitement attributes (unexpectedly pleasing). It is not about costs, involves no ISO mapping, and is not MoSCoW."
 },
 "c3q1": {
  "q": "Which statements about coupling and cohesion are correct?",
  "options": [
   "Loose coupling and high cohesion are complementary goals: the former concerns the relationships between building blocks, the latter the internal cohesion of a building block.",
   "A building block with high cohesion bundles elements that serve the same responsibility.",
   "If two building blocks are connected via a narrow, stable interface instead of shared mutable data structures, their coupling tends to decrease.",
   "Cohesion measures the number and strength of the dependencies between different building blocks.",
   "The higher the cohesion of a building block, the higher its coupling to neighboring building blocks."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Coupling and cohesion are distinct, complementary dimensions - between building blocks and within a building block, respectively.",
   "Correct: High cohesion means that the constituents of a building block serve a common task.",
   "Correct: Exchange via a defined, stable interface lowers coupling compared to shared mutable state.",
   "Near-Miss: Dependencies between building blocks describe coupling, not cohesion.",
   "Wrong: Cohesion and coupling are independent dimensions; high cohesion does not entail high coupling."
  ],
  "explanation": "Coupling (relationships between building blocks) and cohesion (internal cohesion) are different, complementary dimensions. The goal is loose coupling with high cohesion. The number/strength of dependencies between building blocks is precisely coupling, and high cohesion does not force high coupling."
 },
 "c3q2": {
  "q": "Which statement most accurately describes information hiding in the sense of Parnas?",
  "options": [
   "Design decisions that are likely to change are hidden behind a stable interface, so that changes remain local.",
   "Each building block has exactly one business responsibility and therefore only one reason to change.",
   "Internal data structures may be used by other building blocks as long as they are documented.",
   "Sensitive fields are stored encrypted in order to prevent unauthorized data access."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Parnas hides precisely those design decisions that are likely to change behind a stable interface.",
   "Near-Miss: That describes the Single Responsibility Principle, not information hiding.",
   "Wrong: Exposed internal structures contradict the hiding of implementation details, even if they are documented.",
   "Wrong: Information hiding means encapsulation of design decisions, not encryption of data."
  ],
  "explanation": "Information hiding conceals the design decisions that are likely to change behind a stable interface, so that changes remain local. It is neither the SRP nor data encryption, and exposing documented internals contradicts the principle."
 },
 "c3q3": {
  "q": "Which statement about the ‚S‘ in the SOLID principles is correct?",
  "options": [
   "Single Responsibility Principle: A building block should have only a single reason to change.",
   "Single Responsibility Principle: A class may have only a single public method.",
   "The ‚S‘ stands for Separation of Concerns, the overarching principle behind SOLID.",
   "The ‚S‘ stands for Substitutability: subtypes must be able to replace their base types."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: The SRP states exactly one reason to change per building block.",
   "Near-Miss: One responsibility does not mean only a single method; that is a misinterpretation of the SRP.",
   "Wrong: Separation of Concerns is related, but it is not part of SOLID and not the ‚S‘.",
   "Near-Miss: Substitutability is the ‚L‘ (Liskov), not the ‚S‘."
  ],
  "explanation": "The ‚S‘ is the Single Responsibility Principle - one reason to change per building block. It does not require only one method. Separation of Concerns is a different principle (not part of SOLID), and substitutability is the ‚L‘."
 },
 "c3q4": {
  "q": "Which statements about layered architecture (Layers) are correct?",
  "options": [
   "Higher layers use the services of lower layers; the dependencies run in one direction.",
   "Calls from a lower layer to a higher one (a backward dependency) count as a layering violation.",
   "Additional layers add indirection and can come at the expense of runtime performance.",
   "In the strict (closed) variant, a layer may skip a lower layer if that improves performance.",
   "Since layers separate technical concerns, the business logic generally belongs in the bottom layer."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: dependencies run top-down.",
   "Correct: backward dependencies violate the layering.",
   "Correct: the added indirection can cost performance – a deliberate trade-off.",
   "Incorrect: skipping layers is exactly the <em>relaxed/open</em> variant; the strict variant forbids it.",
   "Incorrect: business logic typically does not belong in the bottom (data-access) layer."
  ],
  "explanation": "Layers order dependencies in one direction (higher uses lower); backward calls are violations. Strict layering forbids skipping (relaxed allows it). More layers = more indirection, possibly at the cost of performance."
 },
 "c3q5": {
  "q": "Which statements about Ports & Adapters (hexagonal architecture) are correct?",
  "options": [
   "The core business logic is decoupled from technology and infrastructure.",
   "Outer concerns (UI, DB, external APIs) are connected via interchangeable adapters.",
   "The dependencies are directed such that the business logic does not need to know the concrete adapters (dependency inversion at the ports).",
   "A port is the concrete, technology-specific implementation, such as JDBC database access.",
   "The business logic calls the database via its concrete driver API in order to save translation layers."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Isolating the domain logic from technology is the core of the pattern.",
   "Correct: Outer parts are connected via interchangeable adapters.",
   "Correct: The dependencies point inward to the business logic; ports are abstractions that the core defines.",
   "Near-Miss: The port is the abstraction; the technology-specific implementation is the adapter.",
   "Wrong: A direct driver dependency of the business logic contradicts the decoupling."
  ],
  "explanation": "Ports & Adapters isolates the domain logic from technology, connects outer parts via interchangeable adapters, and directs the dependencies inward (ports as abstractions of the core). The port is the abstraction, not the concrete implementation; a direct driver access by the business logic contradicts the pattern."
 },
 "c3q6": {
  "q": "Which statements typically apply to microservices?",
  "options": [
   "They are independently deployable and cut along business boundaries.",
   "They increase operational complexity (distribution, monitoring, failure scenarios).",
   "Each service manages its own data and encapsulates it behind its interface.",
   "The business cut into services directly corresponds to the cut into technical layers (one UI, logic, and data service each).",
   "Since each service is small, the overall effort for testing and operation decreases compared to a monolith."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Independent deployability and a business-oriented cut are key characteristics.",
   "Correct: Distribution and operation increase operational complexity.",
   "Correct: Own data sovereignty per service (no shared database) is typical.",
   "Near-Miss: Microservices are cut along business boundaries (vertically); a cut along technical layers is precisely an anti-pattern.",
   "Wrong: Distributed tests and the operation of many services tend to increase the overall effort."
  ],
  "explanation": "Microservices are independently deployable, cut along business boundaries, hold their own data, and increase operational complexity. A cut along technical layers contradicts the business cut, and distributed operation does not lower the overall effort."
 },
 "c3q7": {
  "q": "Which of these belong to the fundamental design principles?",
  "options": [
   "Separation of Concerns.",
   "Abstraction.",
   "Encapsulation, i.e. information hiding.",
   "'Big Design Up Front' – specifying the entire design completely before implementation starts.",
   "'Premature Generalization' – keeping building blocks as generic as possible in advance, even without concrete need."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Separation of Concerns is a fundamental design principle.",
   "Correct: Abstraction is one of the fundamental design principles.",
   "Correct: Encapsulation/information hiding is a fundamental design principle.",
   "Wrong: 'Big Design Up Front' is a process anti-pattern, not a design principle – it contradicts iterative work and deferring decisions.",
   "Wrong: generalizing in advance without need (premature generalization) increases complexity – abstraction means purposeful, not maximal, generalization."
  ],
  "explanation": "Separation of Concerns, abstraction, and encapsulation are fundamental design principles. 'Big Design Up Front' and premature over-generalization sound related but are anti-patterns – not principles."
 },
 "c3q8": {
  "q": "Which of the following are typical cross-cutting concerns?",
  "options": [
   "Logging and traceability.",
   "Authentication and authorization.",
   "Transaction and error handling.",
   "The calculation of discount tiers in the order process.",
   "The concrete arrangement of the fields in a single dialog."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Logging concerns nearly all building blocks across the board.",
   "Correct: Security acts across many building blocks.",
   "Correct: Transaction and error handling are classic cross-cutting concerns.",
   "Wrong: The discount calculation is a specific business function, not a cross-cutting concern.",
   "Wrong: The field arrangement of a single dialog is local, not a system-wide cross-cutting concern."
  ],
  "explanation": "Logging, security, as well as transaction and error handling concern many building blocks across the board. The discount calculation is a local business function, and the field arrangement of a dialog is a local UI matter - neither is a cross-cutting concern."
 },
 "c3q9": {
  "q": "A team starts with the overall system view, decomposes it into subsystems, and refines these step by step into building blocks. Which statement is correct?",
  "options": [
   "This is a top-down approach; bottom-up would conversely assemble existing detailed building blocks into larger units.",
   "This is a bottom-up approach, because the structure is created first and only then the details.",
   "Bottom-up is more suitable when the overall problem is still unclear and must first be roughly structured.",
   "Both approaches, when applied carefully, necessarily lead to the same architecture."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: From the whole to the detail is top-down; bottom-up assembles existing detailed building blocks.",
   "Near-Miss: Correct characteristic (structure first, then detail), but wrong label - this is top-down, not bottom-up.",
   "Wrong: For a still unclear overall problem, top-down is more appropriate; bottom-up needs already viable building blocks.",
   "Wrong: Both approaches can lead to different structures and are often combined."
  ],
  "explanation": "The described approach (whole → detail) is top-down; bottom-up conversely assembles existing detailed building blocks. A still unclear overall problem argues rather for top-down, and both approaches do not necessarily deliver the same architecture."
 },
 "c3q10": {
  "q": "Which statements about the benefit of abstraction and modularization in design are correct?",
  "options": [
   "They make complexity manageable and allow building blocks to be developed and changed independently.",
   "They make it possible to swap an implementation behind an abstraction without affecting the users.",
   "They make explicit interfaces between building blocks superfluous.",
   "Additional abstraction layers usually also improve runtime performance.",
   "Fine-grained modularization always lowers the overall complexity, regardless of the number of interfaces."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Correct: Managing complexity and working independently are central advantages.",
   "Correct: Abstractions allow the swapping of implementations behind stable interfaces.",
   "Wrong: Interfaces are precisely the means of modularization and remain necessary.",
   "Wrong: Additional abstraction can create overhead; a performance advantage is not the rule.",
   "Near-Miss: Too fine a division increases the integration complexity via many interfaces - it does not decrease in every case."
  ],
  "explanation": "Abstraction and modularization manage complexity and allow independent work as well as the swapping of implementations. They do not make interfaces superfluous, do not generally improve performance, and with too fine a granularity do not necessarily lower the overall complexity."
 },
 "c3q11": {
  "q": "For which scenario is the ‚Pipes and Filters‘ pattern best suited?",
  "options": [
   "A multi-stage data processing in which each step passes its result to the next and the filters are independent of one another.",
   "A processing in which all steps continuously read and write a shared, mutable state.",
   "A processing with complex, stateful feedback, in which one step deliberately influences earlier steps.",
   "An interactive workflow in which the user continuously branches the flow freely between the steps."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: An independent, multi-stage chain with output → input is the core of Pipes and Filters.",
   "Near-Miss: A shared mutable state contradicts the independence of the filters.",
   "Wrong: Stateful feedback does not fit the directed, largely stateless chain.",
   "Wrong: For freely branching, interactive flows the pattern is not intended."
  ],
  "explanation": "Pipes and Filters fits a directed, multi-stage processing chain with mutually independent filters (output → input). Shared mutable state, complex feedback, or freely branching interaction contradict the pattern."
 },
 "c3q12": {
  "q": "Which statement about the difference between synchronous and asynchronous communication is correct?",
  "options": [
   "In synchronous communication the caller is blocked until the response arrives; asynchronous decouples the sending from the processing in time.",
   "Asynchronous communication couples sender and receiver more tightly in time, since both must be available simultaneously.",
   "Asynchronous communication is more reliable, because messages cannot be lost in the process.",
   "Whether a call is synchronous or asynchronous depends solely on whether it takes place locally or over the network."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Blocking until the response is synchronous; temporal decoupling is asynchronous.",
   "Near-Miss: Simultaneous availability is precisely a characteristic of synchronous communication.",
   "Wrong: Reliability depends on the infrastructure; asynchronous by itself guarantees no message delivery.",
   "Wrong: Synchronous/asynchronous describes the waiting behavior, not the location (local vs. network)."
  ],
  "explanation": "Synchronous means: the caller waits in a blocking manner; asynchronous decouples sending and processing in time. Simultaneous availability is a synchronous characteristic, reliability is not an automatic property of asynchronous communication, and the location (local/network) does not determine sync/async."
 },
 "c3q13": {
  "q": "Which statements about technical debt are correct?",
  "options": [
   "They are deferred compromises or deficiencies in code or architecture.",
   "If left untreated, they complicate and increase the cost of future changes.",
   "They can arise both deliberately (a known shortcut under deadline pressure) and inadvertently (lack of knowledge).",
   "Technical debt is synonymous with the license and operating costs of the software used.",
   "As long as no new features are planned, technical debt causes no costs."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Technical debt consists of deferred compromises or deficiencies.",
   "Correct: If left untreated, it increases the effort of future changes.",
   "Correct: It arises both deliberately and inadvertently (cf. the technical debt quadrant).",
   "Near-Miss: License and operating costs are ongoing costs, not technical debt.",
   "Wrong: Even without new features it increases maintenance, defect, and comprehension costs."
  ],
  "explanation": "Technical debt consists of deferred deficiencies that increase the cost of later changes and arise both deliberately and inadvertently. It is not license/operating costs and causes costs even without new features."
 },
 "c3q14": {
  "q": "What does the Dependency Inversion Principle (DIP) require?",
  "options": [
   "High-level and low-level modules depend on common abstractions; abstractions do not depend on details, but details on abstractions.",
   "Objects should have their dependencies handed to them from outside instead of creating them themselves.",
   "High-level modules should depend directly on the concrete low-level modules in order to avoid detours.",
   "The call direction between modules must always correspond to the compile-time dependency."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Both levels depend on abstractions; details depend on abstractions, not the other way around.",
   "Near-Miss: That describes Dependency Injection (a technique), not the DIP (a principle).",
   "Wrong: A direct dependency on concrete low-level modules is exactly what the DIP avoids.",
   "Wrong: The DIP precisely inverts the source/compile-time dependency relative to the call direction."
  ],
  "explanation": "The DIP requires that both levels depend on abstractions and that details depend on abstractions, not the other way around. Dependency Injection is an implementation technique, not the principle itself; a direct dependency on low-level modules contradicts the DIP."
 },
 "k3": {
  "q": "Assign each term: architectural pattern or design principle?",
  "categories": [
   "Architectural pattern",
   "Design principle"
  ],
  "rows": [
   "Pipes and Filters",
   "Dependency Inversion Principle",
   "Microservices",
   "Separation of Concerns"
  ],
  "explanation": "Pipes and Filters and Microservices are architectural patterns/styles (structure of the overall system). Dependency Inversion and Separation of Concerns are design principles (guidelines for good design)."
 },
 "c3q15": {
  "q": "Which statements about ‚Separation of Concerns‘ are correct?",
  "options": [
   "Different concerns are handled in separate building blocks, each responsible for its own concern.",
   "It promotes loose coupling and high cohesion and thereby facilitates changes and tests.",
   "SoC means bundling as many concerns as possible into a single building block for performance reasons.",
   "SoC and the Single Responsibility Principle are identical and freely interchangeable.",
   "SoC can be achieved solely through physical division into separate files."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Correct: Each concern is handled in its own responsible building block.",
   "Correct: SoC favors loose coupling and high cohesion and thus changeability and testability.",
   "Wrong: Bundling concerns contradicts the separation of concerns.",
   "Near-Miss: SoC is a broad concept; the SRP is the class-related SOLID variant - related, but not identical.",
   "Wrong: SoC acts on many levels, not only via physical file separation."
  ],
  "explanation": "SoC separates concerns into their own responsible building blocks and favors loose coupling/high cohesion. Bundling concerns contradicts the principle; SoC is broader than the SRP and not limited to physical file separation."
 },
 "c3q16": {
  "q": "Which statement most accurately describes the DRY principle?",
  "options": [
   "Every piece of knowledge or every decision has a single, unambiguous, authoritative representation in the system.",
   "Two syntactically identical code sections must always be merged, even if they have different business reasons.",
   "Critical logic is redundantly implemented in several places to be on the safe side.",
   "The principle concerns only duplicate comments and documentation, not duplicate logic."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: DRY aims at a single, authoritative representation of each piece of knowledge.",
   "Near-Miss: Code that is coincidentally identical for different business reasons (coincidental duplication) should precisely not be forcibly merged.",
   "Wrong: Deliberate redundancy as ‚safety‘ contradicts DRY.",
   "Wrong: DRY concerns duplicated knowledge/logic, not only comments."
  ],
  "explanation": "DRY requires a single, unambiguous representation of each piece of knowledge. It does not force the merging of coincidentally identical code with different business reasons, does not require logic that is redundant for safety's sake, and does not concern only comments."
 },
 "c3q17": {
  "q": "What does the YAGNI principle state?",
  "options": [
   "Do not build functionality on speculation that is not (yet) currently needed.",
   "Provide as many extension points as possible in advance, in order to keep later changes cheap.",
   "Implement every requirement as maximally generic and configurable from the start.",
   "Already existing but unused functions must not be removed for stability reasons."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Only build what is currently needed, nothing on speculation.",
   "Near-Miss: Extension points on speculation are speculative generalization - exactly what YAGNI avoids.",
   "Wrong: Precautionary maximal genericity contradicts YAGNI.",
   "Wrong: Removing unused functions is a different topic than YAGNI."
  ],
  "explanation": "YAGNI means: only build what is currently needed. Precautionary extension points or maximal genericity are speculative generalization and contradict the principle; removing unused functions is a different topic."
 },
 "c3q18": {
  "q": "Which statements about architectural patterns are correct?",
  "options": [
   "They are proven, reusable solution templates for recurring structural problems.",
   "They create a common language and must fit the concrete problem.",
   "They are ready-made, reusable code libraries that one includes unchanged.",
   "The use of an established pattern guarantees the best solution regardless of the context.",
   "They prescribe the concrete technology and framework choice in a binding manner."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Correct: Patterns are proven, reusable templates.",
   "Correct: They create a common language but must fit the problem.",
   "Near-Miss: Patterns are solution templates/concepts, not code libraries or frameworks to be included.",
   "Wrong: No pattern guarantees the best solution independent of context.",
   "Wrong: Patterns are technology-independent and do not prescribe a framework choice."
  ],
  "explanation": "Architectural patterns are proven, reusable templates and a common language, but they must fit the problem. They are not code libraries, do not guarantee the best solution independent of context, and do not prescribe a technology."
 },
 "c3q19": {
  "q": "What does the Model-View-Controller (MVC) pattern separate?",
  "options": [
   "Data model, presentation (view), and control/interaction (controller).",
   "It corresponds exactly to the three technical layers presentation, application, and data storage.",
   "The view accesses the model exclusively via the controller and never knows the model directly.",
   "It deliberately merges model and view into a common component."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: MVC separates the responsibilities data, presentation, and control.",
   "Near-Miss: Technical layers are a different view; MVC is not a 1:1 correspondence to the three-layer architecture.",
   "Wrong: In the classic MVC variant the view may observe the model directly; that is not a definitional prerequisite.",
   "Wrong: MVC precisely separates model and view instead of merging them."
  ],
  "explanation": "MVC separates model, view, and controller. This is not the same as the three technical layers, does not require exclusive view access via the controller, and does not merge model and view."
 },
 "c3q20": {
  "q": "Which measures promote loose coupling?",
  "options": [
   "Communication via clearly defined interfaces or abstractions.",
   "Event-based (asynchronous) communication between building blocks.",
   "Injecting dependencies from outside (dependency injection) instead of letting building blocks instantiate them themselves.",
   "Direct access to internal fields of other building blocks for shorter paths.",
   "Shared global, mutable variables for data exchange.",
   "Inheritance from concrete classes of other building blocks in order to directly adopt their behavior."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Defined interfaces/abstractions lower coupling.",
   "Correct: Event-based, asynchronous communication decouples sender and receiver.",
   "Correct: Dependency injection dissolves the fixed binding to concrete creation.",
   "Wrong: Direct access to internals increases coupling.",
   "Wrong: Global mutable variables increase coupling.",
   "Wrong: Inheritance from concrete foreign classes couples tightly to their internals."
  ],
  "explanation": "Defined interfaces, event-based communication, and dependency injection lower coupling. Direct access to internals, global mutable variables, and inheritance from concrete foreign classes increase it."
 },
 "c3q21": {
  "q": "In a system, building blocks A and B reference each other mutually (cyclic dependency). Which statement is correct?",
  "options": [
   "The cycle complicates isolated testing and independent changing; A and B can hardly be understood or reused separately.",
   "In a strict layered architecture such a cycle is permissible as long as both building blocks lie in the same layer.",
   "The cycle concerns only compile/build time and has no effect on maintainability.",
   "The mutual references improve performance, because detours via third building blocks are eliminated."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: The cycle binds A and B tightly together and complicates testing, changing, and reuse.",
   "Near-Miss: Cycles are undesirable even within a layer and are not a permissible characteristic of layering.",
   "Wrong: Cycles do indeed affect comprehension and maintainability.",
   "Wrong: Cycles bring no performance advantage but increase coupling."
  ],
  "explanation": "Cycles couple A and B tightly to each other and complicate comprehension, isolated testing, changing, and reuse. They are undesirable even within a layer, affect maintainability, and bring no performance advantage."
 },
 "c3q22": {
  "q": "Which statements about refactoring are correct?",
  "options": [
   "It improves the internal structure of the code.",
   "The externally observable behavior remains unchanged in the process.",
   "Automated tests are an important safeguard for detecting unintended behavior changes early.",
   "During refactoring, new business functions are deliberately added.",
   "Refactoring fixes reported defects and thereby corrects the business behavior."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Refactoring improves the internal structure.",
   "Correct: The observable behavior stays the same.",
   "Correct: Tests safeguard the unchanged behavior during the restructuring.",
   "Near-Miss: Adding new functions is feature work, not refactoring.",
   "Wrong: Defect fixing changes the behavior and is therefore not refactoring."
  ],
  "explanation": "Refactoring improves the internal structure while keeping the same external behavior and is safeguarded by automated tests. Adding new functions is feature work, and fixing defects changes the behavior - neither is refactoring."
 },
 "c3q23": {
  "q": "Why does one preferably program against interfaces instead of against concrete implementations?",
  "options": [
   "Concrete implementations can thereby be swapped more easily.",
   "The coupling to implementation details decreases.",
   "Isolated testing is facilitated, because dependencies can be replaced by test doubles.",
   "Calls via an interface are fundamentally faster at runtime.",
   "You no longer need to manage dependencies deliberately (e.g. dependency injection becomes unnecessary)."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Interfaces make implementations interchangeable.",
   "Correct: The coupling to concrete details decreases.",
   "Correct: Test doubles can be easily used behind interfaces.",
   "Wrong: There is no blanket runtime performance advantage.",
   "Incorrect: binding to a concrete implementation must still be done deliberately (e.g. via dependency injection) – interfaces don't remove that need."
  ],
  "explanation": "Programming against interfaces makes implementations interchangeable, lowers the coupling to details, and facilitates isolated testing. There is no blanket performance advantage, and concrete implementations remain necessary."
 },
 "k6": {
  "q": "Assign: increases coupling or reduces coupling?",
  "categories": [
   "Increases coupling",
   "Reduces coupling"
  ],
  "rows": [
   "Building blocks exchange data via shared, mutable global variables",
   "Communication exclusively via a narrow, stable interface",
   "A building block inherits from a concrete class of another building block",
   "Event-based communication via a publish/subscribe channel"
  ],
  "explanation": "Shared global mutable variables and inheritance from concrete foreign classes bind building blocks tightly to foreign internals and increase coupling. A narrow, stable interface and event-based publish/subscribe communication decouple and reduce it."
 },
 "k8": {
  "q": "Does the respective principle belong to SOLID?",
  "categories": [
   "Part of SOLID",
   "Not part of SOLID"
  ],
  "rows": [
   "Interface Segregation Principle",
   "Liskov Substitution Principle",
   "Separation of Concerns",
   "Law of Demeter"
  ],
  "explanation": "SOLID = SRP, OCP, LSP, ISP, DIP - these include Interface Segregation and Liskov Substitution. Separation of Concerns and the Law of Demeter are important but independent principles outside of SOLID."
 },
 "c3q24": {
  "q": "Which statements about the Open/Closed Principle (OCP) are correct?",
  "options": [
   "Building blocks should be open for extension but closed for modification.",
   "New behavior is preferably added via abstractions/polymorphism instead of modifying proven code.",
   "OCP requires that every class has exactly one single responsibility.",
   "The way preferred by the OCP to add new behavior is the direct modification of the proven code.",
   "OCP is achieved by making all classes sealed (final) and thus no longer extensible."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Correct: Open for extension, closed for modification is the core of the OCP.",
   "Correct: Add new behavior via abstractions without modifying proven code.",
   "Near-Miss: Exactly one responsibility per class is the SRP, not the OCP.",
   "Wrong: Directly modifying proven code contradicts the OCP.",
   "Wrong: Sealing everything precisely prevents openness for extension."
  ],
  "explanation": "The OCP wants building blocks open for extension and closed for modification - new behavior is added via abstractions. ‚One responsibility per class‘ is the SRP; direct modification or blanket sealing contradict the principle."
 },
 "c3q25": {
  "q": "What does the Interface Segregation Principle (ISP) recommend?",
  "options": [
   "Narrow, role-specific interfaces, so that clients do not depend on methods they do not use at all.",
   "Clients should depend only on abstractions instead of on concrete classes.",
   "Bundle as many operations as possible into one central interface, in order to ensure consistency.",
   "Cut interfaces along technical layers instead of along the needs of the clients."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: ISP requires narrow, role-specific interfaces without unnecessary dependencies.",
   "Near-Miss: The dependency on abstractions instead of concrete classes is the DIP, not the ISP.",
   "Wrong: A large catch-all interface is the opposite of ISP.",
   "Wrong: ISP cuts along client roles, not along technical layers."
  ],
  "explanation": "ISP: no dependency on unused methods - i.e. narrow, role-specific interfaces. The dependency on abstractions is the DIP; a large catch-all interface or a cut along layers contradict the ISP."
 },
 "c3q26": {
  "q": "What does the Liskov Substitution Principle (LSP) require?",
  "options": [
   "Objects of a subtype must be usable in place of their base type without breaking the correctness of the program.",
   "A subtype may strengthen the preconditions of its methods and weaken the postconditions.",
   "LSP is already fulfilled as soon as the subtype syntactically inherits from the base class and the signatures match.",
   "LSP requires that inheritance generally be replaced by composition."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: A subtype must be able to replace the base type everywhere in a behaviorally conformant way.",
   "Near-Miss: Exactly the opposite - preconditions may not be strengthened, postconditions may not be weakened.",
   "Wrong: LSP is a behavioral matter; signature compatibility alone is not sufficient.",
   "Wrong: LSP concerns the substitutability of subtypes, not the choice between inheritance and composition."
  ],
  "explanation": "LSP requires that a subtype be able to replace the base type in a behaviorally conformant way. Preconditions may not be strengthened and postconditions may not be weakened; syntactic inheritance alone is not sufficient, and it has nothing to do with replacing inheritance by composition."
 },
 "c3q27": {
  "q": "What characterizes an event-driven (publish/subscribe) pattern?",
  "options": [
   "Senders publish events without knowing the receivers; any number of receivers can react to them - loosely coupled.",
   "Sender and receiver are tightly coupled, since the sender calls each registered receiver directly and synchronously.",
   "The receiver must synchronously acknowledge every event notification before the sender may continue.",
   "Receivers actively poll the sender at fixed intervals (polling)."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Sender and receiver are decoupled via events, and multiple receivers are possible.",
   "Wrong: A direct, synchronous call contradicts the decoupling.",
   "Near-Miss: A synchronous acknowledgment would couple sender and receiver again - untypical for publish/subscribe.",
   "Wrong: Polling does not describe the event-driven publish/subscribe pattern."
  ],
  "explanation": "With publish/subscribe, sender and receiver are decoupled via events, and multiple receivers are possible. A direct/synchronous call, a forced synchronous acknowledgment, or polling contradict the pattern."
 },
 "c3q28": {
  "q": "What describes the client-server pattern?",
  "options": [
   "Requesting clients use services of a providing server via a defined interface.",
   "All nodes are equal-ranked and offer each other the same services.",
   "The server initiates connections to the clients on its own and triggers the interaction.",
   "Client and server must be executed in the same process on the same machine."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: The client requests services from the server via a defined interface.",
   "Near-Miss: Equal-ranked nodes describe peer-to-peer, not client-server.",
   "Wrong: The server behaves reactively; the interaction originates from the client.",
   "Wrong: Client and server typically run in separate processes, often on different machines."
  ],
  "explanation": "In the client-server pattern the client requests services from the server via a defined interface. Equal-ranked nodes are peer-to-peer; the server is reactive, not initiating; and separate processes/machines are the normal case."
 },
 "c3q29": {
  "q": "Which statements about the heuristic ‚Composition over inheritance‘ are correct?",
  "options": [
   "Behavior can often be better achieved by composing objects than by deep inheritance.",
   "Composition avoids the tight binding and fragility of deep inheritance hierarchies.",
   "Composition and inheritance are interchangeable techniques whose choice has no effect on coupling.",
   "With composition, the enclosing object automatically inherits all methods of its constituents.",
   "Composition is fundamentally faster at runtime than inheritance."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Correct: Composing is often more flexible than deep inheritance.",
   "Correct: Composition avoids the fragility of deep hierarchies.",
   "Wrong: The choice does indeed influence coupling - inheritance couples more tightly to the base class.",
   "Near-Miss: With composition nothing is inherited automatically; calls must be explicitly delegated.",
   "Wrong: It is about flexibility and coupling, not about a blanket runtime advantage."
  ],
  "explanation": "Composition is usually more flexible and less fragile than deep inheritance - a heuristic, not a prohibition. The choice influences coupling, with composition nothing is inherited automatically (explicit delegation), and there is no blanket runtime advantage."
 },
 "c3q30": {
  "q": "Which statements about stateless services are correct?",
  "options": [
   "Requests can be distributed to any equivalent instances.",
   "This facilitates horizontal scaling and load distribution.",
   "State that is needed beyond a single request is deliberately externalized (e.g. database, cache, token).",
   "The session state is firmly bound to the instance that handled the first request (sticky sessions as an essential characteristic).",
   "Stateless services can neither process nor persist data."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Without bound state, any equivalent instance can handle any request.",
   "Correct: This facilitates horizontal scaling and load distribution.",
   "Correct: Cross-request state is externalized - typical for stateless.",
   "Near-Miss: Fixed instance binding (sticky session) is precisely stateful behavior.",
   "Wrong: Stateless services do indeed process data and can persist external state."
  ],
  "explanation": "Without bound session state, any instance can handle any request, which facilitates scaling and load distribution; cross-request state is externalized. Sticky sessions are stateful, and stateless does not mean that no data is processed."
 },
 "c3q31": {
  "q": "Which properties promote the maintainability/changeability of a system?",
  "options": [
   "Modularization into manageable building blocks.",
   "Clearly defined, stable interfaces.",
   "Low coupling between the building blocks.",
   "As many configuration options as possible, to keep the system flexibly adjustable at all times.",
   "Extensive inline comments at every point in the code that explain the behavior."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Manageable building blocks promote maintainability.",
   "Correct: Stable interfaces facilitate changes.",
   "Correct: Low coupling allows independent changes.",
   "Wrong: many configuration options enlarge the state space and complicate testing and maintenance instead of promoting them.",
   "Near-Miss: comments help local understanding but do not address structural maintainability (coupling, cohesion, interfaces)."
  ],
  "explanation": "Modularity, stable interfaces, and low coupling promote maintainability. Many configuration options increase complexity, and extensive comments do not address the structure - neither is a structural lever for changeability."
 },
 "c3q32": {
  "q": "What is the purpose of resilience patterns such as timeout, retry, or circuit breaker?",
  "options": [
   "For robustly handling errors and failures, especially in distributed systems.",
   "A circuit breaker speeds up error-free calls by caching their results (caching).",
   "Retry guarantees that a remote call that initially failed will ultimately succeed.",
   "A timeout completely replaces the actual error handling."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: These patterns help to handle errors and failures robustly.",
   "Near-Miss: Result caching is caching; a circuit breaker only stops calls to a failed service.",
   "Wrong: Retry increases the chance of success but does not guarantee success.",
   "Wrong: A timeout limits waiting times but does not replace error handling."
  ],
  "explanation": "Timeout, retry, and circuit breaker help to handle errors and failures. A circuit breaker is not a cache, retry does not guarantee success, and a timeout does not replace error handling but complements it."
 },
 "k9": {
  "q": "Synchronous or asynchronous communication?",
  "categories": [
   "Synchronous",
   "Asynchronous"
  ],
  "rows": [
   "The caller blocks until the result is available.",
   "The sender places a message in a queue and continues immediately.",
   "A call whose response is awaited within the same request/response.",
   "An event is published; receivers process it at a later point in time."
  ],
  "explanation": "Synchronous means: the caller waits in a blocking manner for the response (including in the awaited request/response). Asynchronous decouples sender and receiver in time - via queues or events processed later."
 },
 "c3q33": {
  "q": "What is the purpose of the Facade pattern?",
  "options": [
   "It provides a simplified, unified access to a more complex subsystem.",
   "It translates between two mutually incompatible interfaces so that they can work together.",
   "It encapsulates the access to an object and controls it as a stand-in (e.g. lazy loading, access protection).",
   "It fully exposes the internal structure of the subsystem so that clients can access it directly."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: A facade provides simplified, unified access to a more complex subsystem.",
   "Near-Miss: Translating incompatible interfaces is the task of the Adapter.",
   "Near-Miss: Stand-in access control describes the Proxy, not the facade.",
   "Wrong: A facade hides the internal structure instead of exposing it."
  ],
  "explanation": "A facade simplifies the access to a subsystem and hides its complexity. Translating incompatible interfaces is the Adapter, stand-in access control is the Proxy; exposing the internals contradicts the pattern."
 },
 "c3q34": {
  "q": "Which statements about a module (building block) in the sense of modularization are correct?",
  "options": [
   "It bundles related functionality behind a defined interface (high cohesion).",
   "Its internal structure may be changed without breaking users, as long as the interface remains stable.",
   "A module is always identical to exactly one runtime process.",
   "The module boundary necessarily follows the physical directory structure of the project.",
   "A module is fundamentally the same as a single class or function."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Correct: A module encapsulates related tasks behind a clear interface.",
   "Correct: This is precisely what enables information hiding – internals are interchangeable as long as the contract holds.",
   "A building block (design) and a runtime process (operation) are different views; a module can be deployed differently.",
   "The directory structure is one possible mapping, but not a mandatory criterion for the module boundary.",
   "This confuses granularity levels: a module is usually coarser than a single class/function."
  ],
  "explanation": "A module bundles functionality behind an interface (high cohesion) and allows its internals to be replaced while the contract stays stable. It is not inherently a process, not defined by the folder structure, and not to be equated with a single class/function."
 },
 "c3q35": {
  "q": "Which statements about the trade-off between monolith and microservices are correct?",
  "options": [
   "A monolith is usually easier to test end-to-end and to operate as a whole.",
   "Microservices can be deployed and scaled independently, but they increase operational complexity.",
   "A modular monolith can have clear internal building-block boundaries but is still deployed as a single unit.",
   "Microservices avoid distributed sources of error because communication stays within the same process.",
   "Switching to microservices automatically reduces the coupling between the functional areas."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: As a single unit, the monolith is easier to integrate and test.",
   "Correct: Independent deployment/scaling comes at the price of higher operational complexity.",
   "Correct: Modularity is a question of internal structure, not of deployment granularity.",
   "Wrong: Microservices move communication onto the network and thereby create new (partial) sources of error.",
   "Wrong: A poor functional partitioning remains tightly coupled even when distributed – technology alone does not decouple."
  ],
  "explanation": "Monolith = simpler operation/testing; microservices = independent scaling/deployment at higher operational complexity; a modular monolith is possible. Distribution does not eliminate sources of error (it creates new ones) and does not automatically decouple – coupling is determined by the functional partitioning."
 },
 "c3q36": {
  "q": "Which statements about the use of proven architecture and design patterns are correct?",
  "options": [
   "They bundle proven solution knowledge and thereby reduce design risks.",
   "They create a common vocabulary that facilitates communication within the team.",
   "A pattern must always be evaluated in the context of its trade-offs; a wrongly chosen pattern can do harm.",
   "Using a pattern replaces the analysis of the concrete quality requirements.",
   "The more patterns are used simultaneously, the higher the quality of the system."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Patterns condense proven knowledge and reduce the risk of reinventing the wheel.",
   "Correct: Well-known pattern names form a common language.",
   "Correct: Every pattern has context conditions and consequences; applied wrongly it does harm.",
   "Wrong: Patterns complement requirements analysis but do not replace it.",
   "Wrong: The sheer number of patterns (over-engineering) does not automatically improve a system."
  ],
  "explanation": "Patterns reduce risk, create a common vocabulary, and are to be chosen based on their trade-offs. They do not replace requirements analysis, and their sheer number improves nothing."
 },
 "c3q37": {
  "q": "Which statements about a domain-oriented partitioning (e.g., bounded contexts in DDD) are correct?",
  "options": [
   "Building blocks are cut along domain/functional boundaries, not primarily by technical layers.",
   "A bounded context delimits a model with its own internally consistent language (ubiquitous language).",
   "Domain boundaries can run across technical layers.",
   "A purely technical layered partitioning (UI/logic/DB) is the recommended way to implement a domain-oriented partitioning.",
   "With a domain-oriented partitioning, all contexts necessarily share a single, global domain model."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: The domain-oriented partitioning follows domains/bounded contexts, not purely technical layers.",
   "Correct: The bounded context delimits the validity of a model and its language.",
   "Correct: A context usually spans several layers – the boundary runs along the domain, not horizontally.",
   "Wrong: A technical layered partitioning is precisely not a domain-oriented partitioning.",
   "Wrong: This contradicts the core of bounded contexts – models may differ per context."
  ],
  "explanation": "A domain-oriented partitioning is guided by domains/bounded contexts with their own ubiquitous language and can run across technical layers. A technical layered partitioning is not a domain-oriented partitioning, and a single global model contradicts the idea of bounded contexts."
 },
 "c3q38": {
  "q": "Which statements about encapsulation are correct?",
  "options": [
   "Data and the functions operating on it are combined into a single unit.",
   "The internal state is only accessible through a defined interface; internals stay hidden.",
   "Encapsulation allows the internal representation to be changed without breaking users of the interface.",
   "Encapsulation primarily means placing related classes in the same package.",
   "Encapsulation is equivalent to hiding the source code from unauthorized reading (obfuscation)."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Encapsulation bundles data with its behavior.",
   "Correct: The internal state stays hidden behind the interface (information hiding).",
   "Correct: This is exactly the benefit – the implementation is interchangeable.",
   "Packaging is only a structural grouping and does not by itself establish encapsulation.",
   "Encapsulation is a design concept, not the encryption/obfuscation of source code."
  ],
  "explanation": "Encapsulation bundles data and behavior, hides the internal state behind an interface, and makes the implementation interchangeable. Packaging and obfuscation are each different concepts."
 },
 "c3q39": {
  "q": "An existing payment service provider offers an interface that does not match the one expected by your system. Which pattern applies here?",
  "options": [
   "Adapter – it translates between the expected and the existing interface without changing either.",
   "Facade – it provides simplified access to a complex subsystem.",
   "Proxy – it places a stand-in with the same interface in front of the actual object.",
   "Publish/subscribe – it fully decouples sender and receiver via events."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: The adapter bridges exactly the incompatibility of two interfaces.",
   "The facade simplifies access but does not change an incompatible interface signature.",
   "The proxy has the same interface as the target object – it precisely does not solve a compatibility problem.",
   "Pub/sub decouples via events but does not address adapting a fixed signature."
  ],
  "explanation": "For incompatible interfaces the adapter is the fitting pattern. Facade (simplification), proxy (same interface, stand-in) and publish/subscribe (event decoupling) solve other problems – here they are plausible but wrong candidates."
 },
 "c3q40": {
  "q": "Which of these are among the goals of modularization?",
  "options": [
   "Independent development of individual parts by different people/teams.",
   "Reusability of clearly cut building blocks.",
   "Locally limiting the impact of changes.",
   "Keeping the total number of building blocks as low as possible to preserve overview.",
   "Designing building blocks as generic as possible to achieve maximum reuse."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Clearly separated modules can be developed in parallel.",
   "Correct: Well-cut building blocks are reusable.",
   "Correct: Changes stay locally limited and do not have an effect everywhere.",
   "Wrong: minimizing the number of building blocks is not a goal of modularization – overly coarse building blocks lower cohesion and hinder decomposition.",
   "Near-Miss: reuse is a goal, but 'as generic as possible' taken to the extreme lowers cohesion and increases complexity – not a core goal."
  ],
  "explanation": "Modularization aims at independent development, reuse, and locally limited changes. Neither merely minimizing the number of building blocks nor maximal over-generalization are goals – both can lower cohesion."
 },
 "c3q41": {
  "q": "Which statements about the trade-off with heavy reuse are correct?",
  "options": [
   "Broadly reusable building blocks often become more general and thereby more complex.",
   "Many users of a building block increase the (afferent) coupling to it and make changes harder.",
   "A reusable building block needs stable, well-versioned interfaces.",
   "Reuse always reduces total cost, since development effort is incurred only once.",
   "DRY demands making every conceivable functionality immediately as generically reusable as possible."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Generalization increases the complexity of reusable building blocks.",
   "Correct: Many dependent users make changes risky.",
   "Correct: Without stable/versioned interfaces, reuse breaks easily.",
   "The effort for generalization, maintenance, and coordination can exceed the savings.",
   "DRY aims at avoiding duplication, not at premature over-generalization."
  ],
  "explanation": "Reuse makes building blocks more general/complex, increases coupling through many users, and requires stable, versioned interfaces. It is not automatically cheaper, and DRY does not justify premature over-generalization."
 },
 "k12": {
  "q": "Does the characteristic promote maintainability or harm it?",
  "categories": [
   "Promotes maintainability",
   "Harms maintainability"
  ],
  "rows": [
   "Clearly defined, stable interfaces between building blocks",
   "Cyclic dependencies between multiple building blocks",
   "High cohesion within the building blocks",
   "Widely spread, duplicated code (violation of DRY)"
  ],
  "explanation": "Clear interfaces and high cohesion promote maintainability. Cyclic dependencies and duplication make changes harder and violate loose coupling and DRY respectively."
 },
 "c3q42": {
  "q": "What is advisable in design regarding domain and technical architecture?",
  "options": [
   "First understand the domain-oriented partitioning (problem space) and align the technical solution with it.",
   "First fully define the technical infrastructure; the domain-oriented partitioning follows from it.",
   "The domain and technical views are always identical and need not be considered separately.",
   "The domain-oriented partitioning is secondary, as long as the non-functional requirements (e.g., performance) are met."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: First understand the problem space, then align the technology with it.",
   "Defining technology first leads to poorly cut systems designed past the domain.",
   "Both views are related but must be considered separately – they are not identical.",
   "The domain-oriented partitioning largely determines the structure; performance does not justify an arbitrary partitioning."
  ],
  "explanation": "First understand the domain-oriented partitioning/problem space, then align the technology with it. Technology-first, equating both views, or subordinating the domain to performance lead to poorly cut systems."
 },
 "c3q43": {
  "q": "What does the \"Miller number\" (7±2) indicate when structuring an architecture?",
  "options": [
   "The number of elements that can be grasped at once is limited – the decomposition per level should stay manageable.",
   "Miller prescribes that a system may consist of at most seven modules.",
   "7±2 is an empirically proven upper limit for the optimal team size in design.",
   "7±2 specifies the ideal number of interface operations per building block."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Only a few \"chunks\" can be grasped at once – therefore decompose manageably per level.",
   "It is not a hard upper limit for the number of modules, but a cognitive rule of thumb.",
   "Miller refers to information units that can be grasped simultaneously, not to team sizes.",
   "The number makes no statement about the number of interface operations."
  ],
  "explanation": "Miller describes the limited number of chunks that can be grasped simultaneously (~7±2) – an argument for a manageable decomposition per level. It is not a fixed upper limit for modules, not a team size, and not a rule for interface operations."
 },
 "c3q44": {
  "q": "Which statement about the approach to architecture design is correct?",
  "options": [
   "An architecture cannot be derived purely linearly from the requirements; the design proceeds iteratively and exploratively.",
   "There is a universal standard procedure that yields the optimal architecture in every project.",
   "Once the requirements document is fixed, the architecture follows unambiguously and automatically.",
   "Once made, design decisions should no longer be revised after the project starts, in order to ensure stability."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Architecture emerges iteratively, not as a linear derivation.",
   "There is no \"silver bullet\" that fits optimally in every context.",
   "No unambiguous architecture follows automatically from requirements.",
   "Decisions are consciously revised when new knowledge arises – freezing is precisely not good design."
  ],
  "explanation": "Architecture emerges iteratively and exploratively, not as a linear derivation. There is no standard procedure, no automatic derivation, and decisions should remain revisable when new knowledge arises."
 },
 "c3q45": {
  "q": "How is the goal of \"loose coupling\" correctly understood?",
  "options": [
   "Coupling should be as low as possible, but as strong as functionally necessary – without coupling there would be no collaboration.",
   "Coupling should be reduced to zero; building blocks should ideally not depend on each other at all.",
   "Loose coupling and high cohesion denote the same goal, just named differently.",
   "Loose coupling means routing dependencies preferably through concrete classes rather than through interfaces."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: As little coupling as possible, as much as functionally necessary.",
   "Zero coupling prevents any collaboration; an appropriate degree is needed.",
   "Coupling (relationships between building blocks) and cohesion (internal togetherness within a building block) are different.",
   "The other way around: coupling via interfaces/abstractions is looser than via concrete classes."
  ],
  "explanation": "Loose coupling is not an end in itself: building blocks must collaborate, so an appropriate degree is needed. Zero coupling prevents functionality, coupling is not the same as cohesion, and abstractions couple more loosely than concrete classes."
 },
 "c3q46": {
  "q": "Which kind of relationship tends to produce the strongest coupling between building blocks?",
  "options": [
   "Implementation inheritance (the subclass depends on internal details of the base class).",
   "Communication via a narrow, clearly defined interface.",
   "Loose, event-based (asynchronous) notification.",
   "Delegation to an object referenced via an interface."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Implementation inheritance binds the subclass strongly to the internals of the base.",
   "A narrow, clearly defined interface couples only loosely.",
   "Asynchronous, event-based notification couples especially loosely.",
   "Delegation via an interface keeps the coupling low."
  ],
  "explanation": "Implementation inheritance couples very strongly to the internals of the base class. Interfaces, events, and delegation via interfaces couple far more loosely – hence \"composition over inheritance\"."
 },
 "c3q47": {
  "q": "Does dynamic (resolved only at runtime) coupling automatically mean \"loose\" coupling?",
  "options": [
   "No – the dependency is often merely shifted or hidden, not really reduced.",
   "Yes – as soon as something is resolved at runtime, the coupling is always minimal.",
   "Yes – dynamic coupling removes every dependency completely.",
   "No – dynamic coupling is fundamentally stronger than any static coupling."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: The dependency is frequently only relocated or hidden, not reduced.",
   "Runtime resolution does not make the coupling automatically minimal.",
   "Dynamic coupling does not remove a dependency completely.",
   "Dynamic coupling is not generally stronger than static coupling."
  ],
  "explanation": "Dynamic resolution (e.g., via configuration/reflection) often only relocates or hides dependencies; it is not loose per se. Conversely, it is also not generally stronger than static coupling."
 },
 "c3q48": {
  "q": "Which statements about incoming and outgoing dependencies (afferent/efferent) are correct?",
  "options": [
   "Many incoming (afferent) dependencies make a building block \"stable\" – changes to it are risky.",
   "Many outgoing (efferent) dependencies tend to make a building block \"instable\" or prone to change.",
   "\"Stable\" in the sense of this metric means hard to change, not bug-free or finished.",
   "Incoming dependencies have no influence on a building block's risk of change.",
   "\"Afferent\" and \"efferent\" denote the same direction and are interchangeable."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Many users building on it make a building block stable and risky to change.",
   "Correct: Many outgoing dependencies tend to make a building block instable.",
   "Correct: \"Stable\" here is a structural metric (resistance to change), not a statement about quality/completion.",
   "Wrong: Incoming dependencies in particular increase the risk of change.",
   "Wrong: Afferent (incoming) and efferent (outgoing) are opposite directions."
  ],
  "explanation": "Many incoming dependencies = \"stable\" (changes risky), many outgoing = \"instable\". \"Stable\" means hard to change, not bug-free. Incoming dependencies do very much affect changeability, and afferent/efferent are opposite directions."
 },
 "c3q49": {
  "q": "Which statements about cross-cutting concepts are correct?",
  "options": [
   "They act across many building blocks and cannot be cleanly encapsulated in a single building block.",
   "They should be solved uniformly/consistently system-wide in order to avoid uncontrolled growth.",
   "Examples include persistence, security, logging, and error handling.",
   "A cross-cutting concept is always a purely organizational governance requirement without technical substance.",
   "A cross-cutting concept can always be entirely enclosed within exactly one functional component."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Cross-cutting concepts affect many building blocks and cannot be encapsulated locally.",
   "Correct: Uniform solutions prevent inconsistent isolated solutions.",
   "Correct: These are typical cross-cutting concepts.",
   "Wrong: Cross-cutting concepts are technical in nature, not mere governance.",
   "Wrong: It is precisely their not being encapsulable in one component that makes them cross-cutting concepts."
  ],
  "explanation": "Cross-cutting concepts (persistence, security, logging, error handling …) act system-wide, cannot be encapsulated locally, and should be solved uniformly. They are technical in nature and cannot be enclosed within a single component."
 },
 "c3q50": {
  "q": "How do ACID and BASE differ as consistency approaches in persistence?",
  "options": [
   "ACID emphasizes strict consistency (classically relational); BASE favors availability and eventual consistency (often NoSQL).",
   "ACID belongs to NoSQL databases, BASE to relational databases.",
   "Both guarantee immediate, strong consistency across distributed nodes at all times.",
   "BASE stands for stricter transaction guarantees than ACID."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: ACID emphasizes strict consistency, BASE availability and eventual consistency.",
   "The assignment is swapped: ACID is relational, BASE rather NoSQL.",
   "BASE precisely does not guarantee immediate strong consistency at all times.",
   "BASE deliberately relaxes the guarantees, so it is not stricter."
  ],
  "explanation": "ACID = strict transactional consistency (typically relational), BASE = availability + eventual consistency (typically NoSQL/distributed). The assignment is not swapped, and BASE deliberately relaxes the guarantees."
 },
 "c3q51": {
  "q": "What does the CAP theorem state for distributed data storage?",
  "options": [
   "In the case of a network partition one must trade off between consistency and availability – not all three goals are fully achievable at the same time.",
   "Consistency, availability, and partition tolerance can be fully guaranteed simultaneously at all times.",
   "Distributed systems must fundamentally forgo availability.",
   "CAP describes three consecutive phases of a database deployment."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: In the case of a partition one must trade off consistency against availability.",
   "All three properties cannot be fully guaranteed simultaneously.",
   "CAP does not enforce a general renouncement of availability.",
   "CAP is not a phase model of a deployment."
  ],
  "explanation": "CAP: In the case of a partition a compromise between consistency and availability is necessary – one cannot fully guarantee all three properties simultaneously. It is not a phase model and does not enforce a general renouncement of availability."
 },
 "c3q52": {
  "q": "In layered architectures, what is called a \"layer bridge\" (skipping a layer)?",
  "options": [
   "The deliberate bypassing of an intermediate layer – permitted in the relaxed approach, but it creates additional dependencies and should be documented.",
   "A layer that automatically synchronizes all other layers.",
   "The strict rule that a layer may never be skipped.",
   "A general permission for lower layers to call upper ones."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: An intermediate layer is deliberately skipped – permitted, but to be documented.",
   "A layer bridge does not automatically synchronize any layers.",
   "It is not a prohibition, but precisely the permitted skipping.",
   "Calls from bottom to top remain taboo and create cycles – that is not what the layer bridge means."
  ],
  "explanation": "A layer bridge skips a layer (permitted in the relaxed model) but creates additional dependencies – therefore document it deliberately. In the strict model, skipping is not allowed; calls from bottom to top remain taboo (cycle)."
 },
 "c3q53": {
  "q": "Which rules apply ideally to a strict layered architecture?",
  "options": [
   "Calls only go from top to bottom; the reverse path creates an undesirable cycle.",
   "Building blocks of a layer are ideally at a similar level of abstraction.",
   "In the strict variant, a layer may only use the layer immediately below it (no skipping).",
   "Every layer may access every other layer arbitrarily.",
   "Two mutually dependent building blocks deliberately belong in different layers."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Calls only go downward – otherwise a cycle arises.",
   "Correct: A layer bundles building blocks of a similar level of abstraction.",
   "Correct: The strict variant forbids skipping layers.",
   "Arbitrary access to any layer contradicts the pattern.",
   "Mutually dependent building blocks rather belong in the same layer, otherwise a cycle arises across layer boundaries."
  ],
  "explanation": "Strict layering: only calls downward (otherwise a cycle), a uniform level of abstraction per layer, and no skipping of layers. Arbitrary access contradicts the pattern; mutually dependent building blocks belong in the same layer."
 },
 "c3q54": {
  "q": "Which disadvantage is typical of deeply nested layered architectures?",
  "options": [
   "Passing calls through many layers can cost performance, and changes often run through several layers.",
   "Upper layers must know the implementation details of the lower layers in order to call them.",
   "Strict layering fundamentally prevents the parallel operation of multiple instances.",
   "Additional layers inevitably reduce the number of required interfaces."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Passing calls through costs performance, and changes run through many layers.",
   "Wrong: Upper layers use the interfaces of lower layers, precisely not their internals.",
   "Wrong: Layering says nothing about horizontal scaling/instance operation.",
   "Wrong: More layers rather mean more interfaces, not fewer."
  ],
  "explanation": "Many layers cost performance when passing through, and changes (e.g., to a data field) affect all layers. Internals stay hidden, scaling is independent, and additional layers do not reduce interfaces."
 },
 "c3q55": {
  "q": "What distinguishes active from passive filters in a pipes-and-filters architecture?",
  "options": [
   "Active filters pull or push data themselves; passive filters are supplied with data or read out from the outside.",
   "Active filters modify data, passive filters let it pass through unchanged.",
   "Active filters know each other, passive filters are isolated.",
   "Active filters run only sequentially, passive ones only in parallel."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Active filters drive the data flow themselves, passive ones are supplied.",
   "The difference concerns control of the data flow, not the modification of the data.",
   "Filters generally do not know each other, regardless of active or passive.",
   "Active/passive says nothing about sequential or parallel execution."
  ],
  "explanation": "The difference lies in the control of the data flow: active filters drive the transport themselves, passive ones wait to be supplied/read out. Both process data and do not know each other."
 },
 "c3q56": {
  "q": "Which statements about pipes and filters are correct?",
  "options": [
   "Filters do not know each other and are decoupled via pipes – making them easily interchangeable and reusable.",
   "Error handling is demanding, since a filter does not know the prior history of the data.",
   "The filter stages can work in parallel/concurrently, since they are only connected via data streams.",
   "Filters coordinate via a shared global state.",
   "The pattern is particularly suitable for highly interactive user dialogs."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Filters decoupled via pipes are easily interchangeable and reusable.",
   "Correct: Without knowledge of the data history, error handling is difficult.",
   "Correct: Decoupling via data streams allows parallel processing of the stages.",
   "Wrong: Filters do not share a common global state.",
   "Wrong: For highly interactive dialogs the fixed processing chain is unsuitable."
  ],
  "explanation": "Filters are decoupled via pipes (interchangeable, parallelizable), but error handling is difficult because a filter does not know the history. There is no shared state, and for interactive dialogs the fixed chain is unsuitable."
 },
 "c3q57": {
  "q": "By which criterion should microservices be cut primarily?",
  "options": [
   "By domain-oriented aspects (e.g., bounded context) – too fine a partitioning leads to \"nano-services\" with high overhead.",
   "By purely technical layers – one separate UI, logic, and database service each.",
   "As small as possible, since more services generally mean better scalability.",
   "Along the existing team/organizational structure, independent of domain boundaries."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Cut by domain along the bounded context; too fine creates expensive nano-services.",
   "A purely technical partitioning into UI, logic, and DB couples functionally related changes across services.",
   "Ever smaller is not better – communication and operational overhead rise sharply.",
   "Team structure alone is not a domain criterion; a partitioning aligned solely with it can violate domain boundaries."
  ],
  "explanation": "The partitioning is done by domain (e.g., bounded context). A purely technical, an extremely fine, or a partitioning aligned solely with the org structure creates poorly delimited or nano-services with disproportionate overhead."
 },
 "c3q58": {
  "q": "Which challenges do microservices typically bring with them?",
  "options": [
   "Higher operational and deployment effort due to many independent units.",
   "Dependence on the network with additional latency and new (partial) sources of error.",
   "Data consistency across service boundaries (distributed transactions) becomes more difficult.",
   "Necessarily a shared database and synchronized releases of all services.",
   "The elimination of any need for monitoring and central logging."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Many independent units increase the operational and deployment effort.",
   "Correct: Network dependence brings latency and new sources of error (partial failures).",
   "Correct: Consistency across service boundaries (e.g., sagas instead of transactions) becomes demanding.",
   "Wrong: A shared DB and coupled releases are precisely not the goal – they contradict the approach.",
   "Wrong: Distributed systems need more monitoring/logging, not less."
  ],
  "explanation": "Distribution brings operational/deployment overhead, network dependence (latency, partial failures), and harder distributed consistency. A shared DB/coupled releases contradict the approach, and the need for monitoring/logging rises."
 },
 "c3q59": {
  "q": "Which statement about the interplay of microservices is correct?",
  "options": [
   "Services should be loosely coupled and communicate via technology-neutral interfaces.",
   "Services should communicate as synchronously as possible in order to guarantee strong consistency at all times.",
   "Each service should be allowed to access the internal database of the others directly, in order to save latency.",
   "All services must use the same programming language and the same framework."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Low coupling and communication via technology-neutral interfaces.",
   "Heavy synchronous exchange couples strongly in time and undermines the independence of the services.",
   "Direct access to foreign databases violates encapsulation and couples the services tightly.",
   "Free technology choice per service is precisely a strength of the approach."
  ],
  "explanation": "The goal is low coupling and communication via technology-neutral interfaces (only where functionally necessary). Heavy synchronous exchange, direct access to foreign databases, or an enforced uniform technology contradict the approach."
 },
 "k14": {
  "q": "Assign each property to the matching pattern.",
  "categories": [
   "Layered architecture",
   "Pipes & filters"
  ],
  "rows": [
   "Vertical arrangement; upper levels use services of the ones below.",
   "Independent processing steps, chained via data streams.",
   "Calls go only from top to bottom, otherwise a cycle arises.",
   "The steps do not know each other and are freely interchangeable.",
   "Well suited for stepwise data-stream or batch processing.",
   "Changes to deep levels can propagate upward."
  ],
  "explanation": "Layers: vertical hierarchy, calls downward, changes propagate through. Pipes & filters: decoupled, interchangeable processing steps via data streams, ideal for stream/batch processing."
 },
 "k15": {
  "q": "Is each of these a cross-cutting concept or not?",
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
  ],
  "explanation": "Logging, security, persistence, and error handling act system-wide across many building blocks (cross-cutting concepts). Discount calculation and product detail display are concrete functional features."
 },
 "c3q60": {
  "q": "Which statements about short feedback loops (prototypes, early integration, tests) in architecture design are correct?",
  "options": [
   "They verify assumptions and risks early and enable adjustments when new knowledge arises.",
   "They are especially valuable for uncertain/risky decisions (risk-driven).",
   "A prototype can deliberately serve as a \"throwaway\" artifact, just to verify an assumption.",
   "They completely replace the architecture documentation.",
   "After the first decision, the architecture should be frozen and no longer changed."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Feedback verifies assumptions/risks early and enables course corrections.",
   "Correct: Uncertain decisions in particular benefit from early feedback.",
   "Correct: A prototype may be discarded after gaining insight.",
   "Wrong: Feedback loops do not replace documentation.",
   "Wrong: Feedback serves precisely for adjustment, not for freezing."
  ],
  "explanation": "Feedback loops verify assumptions and risks early (also via throwaway prototype) and are especially valuable for uncertain decisions. They do not replace documentation and serve for adjustment, not for freezing."
 },
 "c3q61": {
  "q": "What characterizes an \"evolutionary architecture\" with fitness functions?",
  "options": [
   "Automated criteria (fitness functions) continuously check whether important quality characteristics are preserved during changes.",
   "Fitness functions are exclusively performance benchmarks and say nothing about other qualities.",
   "Evolutionary architecture defines the structure once and excludes later changes.",
   "Fitness functions replace any form of manual architecture evaluation or review."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Fitness functions check continuously (often automatically) whether quality characteristics are preserved.",
   "Fitness functions can check many quality characteristics (e.g., dependency rules), not only performance.",
   "Evolutionary architecture precisely supports guided further development, not freezing.",
   "They complement human evaluation/reviews but do not completely replace them."
  ],
  "explanation": "Evolutionary architecture supports guided, incremental further development; fitness functions continuously check (often automatically) important quality characteristics. They are not limited to performance, freeze nothing, and do not completely replace reviews."
 },
 "c3q62": {
  "q": "Which statements about the relationship between feedback and risk in design are correct?",
  "options": [
   "The later feedback arrives, the more expensive corrections tend to become.",
   "Risky or uncertain decisions should be validated early with feedback (risk-driven).",
   "The order of decisions should be guided by risk, not by mere blueprint progress.",
   "Risks should only be addressed once they actually occur in operation (purely reactive).",
   "Prototypes or walking skeletons for early risk mitigation only pay off in very large projects."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: late feedback = more expensive corrections.",
   "Correct: validate the uncertain early (risk-driven).",
   "Correct: order decisions by risk.",
   "Incorrect: purely reactive waiting contradicts the risk-driven approach and makes corrections more expensive.",
   "Incorrect: early risk mitigation (e.g. a walking skeleton/prototype) pays off regardless of project size."
  ],
  "explanation": "Seek feedback early and risk-driven: validate uncertain/risky decisions first and order decisions by risk. Late or purely reactive approaches make corrections more expensive."
 },
 "c3q63": {
  "q": "What is the central principle when designing an interface?",
  "options": [
   "It establishes a stable \"contract\" (the WHAT) and hides the internal implementation (the HOW).",
   "It should expose as many internals as possible, so that users can access them flexibly.",
   "A good interface maps the provider's internal data structure as 1:1 as possible.",
   "The contract covers only the signatures; pre-/post-conditions and error behavior are not part of it."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: It is a stable contract (the WHAT) and hides the HOW.",
   "Exposing internals contradicts information hiding and couples users to details.",
   "A 1:1 mapping of the internals makes the interface fragile and couples it to the implementation.",
   "The contract also includes semantics, pre-/post-conditions, and error behavior, not only signatures."
  ],
  "explanation": "A good interface is a stable contract (incl. semantics, pre-/post-conditions, error behavior) and hides the internals (information hiding). Exposing internals, mapping 1:1, or reducing the contract to signatures contradicts the purpose."
 },
 "c3q64": {
  "q": "Which trade-off exists in the granularity of interfaces?",
  "options": [
   "Fine-grained interfaces are flexible but produce many (expensive, when remote) calls; coarse-grained ones bundle but are less flexible.",
   "Fine-grained interfaces are superior in every respect.",
   "Granularity has no influence on performance or coupling.",
   "Coarse-grained interfaces always produce more network load in remote calls."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Fine-grained is flexible but call-intensive; coarse-grained bundles but is less flexible.",
   "Fine-grained interfaces are not superior in every respect (chattiness when remote).",
   "Granularity does very much affect performance and coupling.",
   "Coarse-grained rather reduces remote calls instead of increasing them."
  ],
  "explanation": "Fine-grained = flexible but many (expensive, when remote) calls; coarse-grained = less \"chattiness\" but less flexible. Granularity does very much affect performance/coupling; coarse-grained rather reduces remote calls."
 },
 "c3q65": {
  "q": "Which statements about designing robust, long-lived interfaces are correct?",
  "options": [
   "Changes should be backward-compatible where possible; otherwise versioning is needed.",
   "Being strict when sending and tolerant when receiving increases robustness (robustness principle).",
   "New optional fields are usually backward-compatible; removing/renaming existing fields is usually not.",
   "Public interfaces may be changed at any time without regard for consumers.",
   "The more operations and parameters an interface offers, the more stable it is."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Backward compatibility or versioning protects consumers.",
   "Correct: \"Be strict in sending, tolerant in receiving\" (after Postel) increases robustness.",
   "Correct: Additive changes are usually compatible, removing/renaming ones break consumers.",
   "Wrong: Breaking public interfaces without regard is risky.",
   "Wrong: A large interface surface increases the likelihood of change and makes stability harder."
  ],
  "explanation": "Backward compatibility/versioning and the robustness principle protect consumers; additive changes are usually compatible, removing/renaming ones are not. Simply breaking public interfaces or bloating the surface is risky."
 },
 "c3q66": {
  "q": "How does an architecture deliberately meet a quality requirement such as \"high availability\"?",
  "options": [
   "Through deliberate design decisions or tactics (e.g., redundancy, failover) that contribute to the quality goal.",
   "Solely by the fact that the requirement is documented in the requirements document.",
   "Exclusively through the choice of a more performant programming language or hardware.",
   "Availability arises automatically as soon as the system is cleanly modularized."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Deliberate tactics such as redundancy and failover meet the quality goal.",
   "A merely noted requirement does not fulfill itself.",
   "The choice of language/hardware addresses performance rather than necessarily availability.",
   "Modularization helps maintainability but does not guarantee availability (e.g., against failures)."
  ],
  "explanation": "Quality goals are achieved through deliberate design decisions/tactics (e.g., redundancy and failover for availability). Merely noting them, a choice of language/hardware alone, or good modularization do not meet availability automatically."
 },
 "c4q1": {
  "q": "Which statements about the central purposes of architecture documentation are correct?",
  "options": [
   "It creates communication and shared understanding among stakeholders.",
   "It keeps important architecture decisions, including their rationale, comprehensible even later on.",
   "It supports onboarding, maintenance, and well-founded further decisions.",
   "Its most important goal is completeness: the more is documented, the better it fulfills its purpose.",
   "It provides the binding proof that the required quality requirements are actually met."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Communication and shared understanding are a core purpose of the documentation.",
   "Comprehensibility of decisions (context, alternatives, consequences) is a central purpose.",
   "Onboarding, maintenance, and a basis for decisions are among the core purposes.",
   "The goal is not completeness but appropriate, audience-oriented documentation - too much scope harms maintainability and currency.",
   "Proof of fulfillment is provided through tests, measurements, and reviews; the documentation describes the solution and goals but does not itself prove their fulfillment."
  ],
  "explanation": "The purposes are communication, comprehensibility of decisions, and a basis for onboarding/maintenance. Maximum completeness is not an end in itself, and the documentation is not a proof of fulfillment for quality requirements (that is provided by tests/measurements)."
 },
 "c4q2": {
  "q": "How can arc42 be most accurately classified?",
  "options": [
   "As a proven template or structuring scheme with twelve sections for the documentation of software architectures.",
   "As a standard that standardizes the binding concerns, stakeholders, and viewpoints of an architecture description.",
   "As a method that systematically derives the appropriate architecture decisions from the quality goals.",
   "As a curated collection of proven architecture and design patterns for distributed systems."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: arc42 is a structuring template with twelve sections, filled in as needed.",
   "The standardization of concerns, stakeholders, and viewpoints is provided by ISO/IEC/IEEE 42010, not arc42.",
   "A methodical derivation of decisions from quality goals is a design approach (e.g., ADD), not a documentation template.",
   "A collection of patterns (e.g., POSA/GoF) is something different from a documentation structure."
  ],
  "explanation": "arc42 is a structuring documentation template (12 sections). The conceptual standardization (concerns/viewpoints) is provided by 42010; deriving decisions is the task of design methods; pattern collections are again something different."
 },
 "c4q3": {
  "q": "Which statements about the context delimitation (context view) are correct?",
  "options": [
   "It shows the system as a whole (black box) with its external neighbors (users, external systems).",
   "It depicts the business and/or technical interfaces of the system to its environment.",
   "It deliberately treats the system as a black box and does not show its internal building block structure.",
   "It determines which of the external neighboring systems are to be replaced by the system's own building blocks in the future.",
   "It prioritizes the external interfaces according to their quality requirements."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "The context view shows the system as a black box with its external neighbors.",
   "It depicts the interfaces to the environment in a business and/or technical way.",
   "Correct and subtle: the context view specifically does not show the internals but delimits toward the outside.",
   "The context view makes no statement about the future replacement of external systems; that would be a scope/migration decision.",
   "A prioritization according to quality requirements belongs to the quality requirements, not to the context delimitation."
  ],
  "explanation": "The context view delimits the system as a black box from its environment (external neighbors + interfaces) and shows no internals. It does not prioritize by quality and does not decide on the replacement of external systems."
 },
 "c4q4": {
  "q": "Which statements about the building block view are correct?",
  "options": [
   "It shows the static decomposition of the system into building blocks (black box/white box).",
   "It refines building blocks hierarchically as a white box of the respective contained building blocks.",
   "It describes for each building block its responsibility and its interfaces.",
   "It determines the temporal order of the calls between the building blocks.",
   "Every refinement level must necessarily use the same notation and the same level of detail."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "The building block view shows the static decomposition into building blocks.",
   "It refines building blocks hierarchically (white box of the parts).",
   "Correct and subtle: the black-box description includes the responsibility and interfaces of the building block.",
   "The temporal order of calls is shown by the runtime view, not the building block view.",
   "Level of detail and notation may differ per level and target audience; there is no such obligation."
  ],
  "explanation": "The building block view shows static structure, refines hierarchically, and describes responsibilities/interfaces. Temporal sequences belong in the runtime view; a uniform level of detail across all levels is not mandated."
 },
 "c4q5": {
  "q": "What describes the runtime view most accurately?",
  "options": [
   "The dynamic interplay of building blocks in selected concrete scenarios.",
   "The static decomposition of the system into its building blocks and their interfaces.",
   "All theoretically possible execution paths of the system, completely and without gaps.",
   "The final assignment of the building blocks to physical execution nodes."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: the runtime view shows dynamic processes based on selected, meaningful scenarios.",
   "Static decomposition and interfaces are shown by the building block view.",
   "Completeness is not the goal: one deliberately selects a few relevant scenarios - not all paths.",
   "The assignment to nodes is the deployment view."
  ],
  "explanation": "The runtime view shows dynamic behavior based on selected scenarios - not completely all paths. Static structure = building block view; assignment to nodes = deployment view."
 },
 "c4q6": {
  "q": "What does the deployment view show?",
  "options": [
   "The mapping of the software artifacts onto infrastructure/nodes and their communication channels.",
   "The logical decomposition of the system into its business building blocks.",
   "Exclusively the production environment; test and development environments are left out.",
   "The network topology must always be detailed down to the physical cabling."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: it maps artifacts onto nodes/environments and shows their communication channels.",
   "The logical business decomposition is the building block view.",
   "The deployment view can well depict several environments (test, staging, production).",
   "The level of detail is oriented to the need; there is no obligation to reach the cabling level."
  ],
  "explanation": "The deployment view shows the assignment of the software onto nodes/environments and the communication paths. It is not limited to production and does not prescribe a particular physical level of detail; the business decomposition is the building block view."
 },
 "c4q7": {
  "q": "What does the standard ISO/IEC/IEEE 42010 govern?",
  "options": [
   "Concepts and terms of architecture description (stakeholders, concerns, viewpoints/views).",
   "A catalog of quality characteristics such as maintainability, performance, and security.",
   "A concrete documentation template with twelve fixed, predefined sections.",
   "Binding specifications of which views a system must document at a minimum."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: 42010 defines the conceptual framework (stakeholders, concerns, viewpoints/views).",
   "A catalog of quality characteristics is ISO/IEC 25010, not 42010.",
   "The 12-section template is arc42.",
   "42010 provides a framework but does not prescribe concrete mandatory views per system."
  ],
  "explanation": "42010 provides the conceptual framework for architecture descriptions (stakeholders, concerns, viewpoints/views). Quality characteristics come from 25010; the 12-section template is arc42; 42010 does not prescribe fixed mandatory views. (R3.)"
 },
 "c4q8": {
  "q": "A colleague wants to depict the time-ordered exchange of messages between several objects in a use case. Which UML diagram is typical for this?",
  "options": [
   "The sequence diagram.",
   "The class diagram for the static associations of the classes involved.",
   "The state diagram for the states that a single object passes through.",
   "The activity diagram for the parallel branching of activities in the business process."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: sequence diagrams show the time-ordered exchange of messages between objects/building blocks.",
   "The class diagram shows static relationships, not the temporal flow.",
   "The state diagram shows the states of a single object, not the interplay of several.",
   "The activity diagram shows control/data flow and concurrency but does not emphasize the message order between named objects."
  ],
  "explanation": "For the time-ordered exchange of messages between several objects, the sequence diagram is typical. Class (static), state (one object), and activity diagram (control flow) answer other questions."
 },
 "c4q9": {
  "q": "A team wants to record in a comprehensible way why it decided on a message broker instead of synchronous REST calls. What purpose does an Architecture Decision Record (ADR) serve for this?",
  "options": [
   "To record the decision made, along with context, considered alternatives, and consequences.",
   "To keep all architecture decisions of the project bundled in a single large document.",
   "To document the finally chosen solutions only in retrospect after the project ends.",
   "To manage the still-open decisions to be made in the future, including their deadlines."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: an ADR records, per decision, context, alternatives, and consequences.",
   "ADRs are typically kept per decision (one per topic), not as a single collective document.",
   "ADRs are created when the decision is made, not only in retrospect after the project ends.",
   "Open, future tasks are managed by a backlog; the ADR documents decisions already made."
  ],
  "explanation": "An ADR documents a decision made, with context, alternatives, and consequences - usually one per decision, close in time to the decision. It is not a collective document, not a retrospective only at the project's end, and not a backlog of open tasks."
 },
 "c4q10": {
  "q": "An architect documents the same system for management, operations, and development. Which statements about audience-oriented documentation are correct?",
  "options": [
   "Content, level of detail, and notation are oriented to the information needs of the respective target audience.",
   "Different target audiences often need different views or abstraction levels of the same system.",
   "For management, an overview is often sufficient, while development needs detailed building block descriptions.",
   "Each target audience receives its own, content-wise independent model of the system.",
   "Audience-oriented means providing the maximum level of detail to all readers just to be safe."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: content, level of detail, and notation are oriented to the needs of the respective readers.",
   "Correct: different target audiences need different views/abstraction levels.",
   "Correct and subtle: management overview vs. detailed building block view for developers is a typical example.",
   "It remains the same system/architecture model - depicted in different views, not as independent models.",
   "Maximum level of detail for everyone is precisely not audience-oriented."
  ],
  "explanation": "Audience-oriented means: orient content, level of detail, and notation to the readers' needs, providing different views of the same system if appropriate. No independent models per group arise, and a maximum document for everyone is precisely the opposite."
 },
 "k4": {
  "q": "Assign each view/notation: static (structure) or dynamic (behavior)?",
  "categories": [
   "Static (structure)",
   "Dynamic (behavior)"
  ],
  "rows": [
   "Component diagram",
   "Deployment view",
   "State diagram",
   "Sequence diagram"
  ],
  "explanation": "Component diagram and deployment view describe static structure (building blocks/interfaces or assignment onto nodes) - the deployment view is often mistakenly classified as dynamic. State and sequence diagrams show dynamic behavior (state transitions or temporal flows)."
 },
 "c4q11": {
  "q": "What distinguishes the business context from the technical context in the context delimitation?",
  "options": [
   "The business context shows communication partners and exchanged data in business terms; the technical context shows the concrete channels and protocols.",
   "The business context belongs in the requirements documentation, the technical context in the architecture documentation.",
   "The technical context already shows the internal technical building block structure of the system.",
   "The two differ only in the notation used, not in the content depicted."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: business = partners and data in business terms; technical = concrete channels/protocols - both at the system boundary.",
   "Both are part of the context view of the architecture documentation; the separation does not run along requirements vs. architecture documentation.",
   "The technical context also remains at the system boundary (black box) and shows no internals.",
   "The difference lies in the depicted content (business vs. technical), not merely in the notation."
  ],
  "explanation": "Both representations concern the system boundary: business (which partners/data) vs. technical (which channels/protocols). They show no internals, differ in content (not only notationally), and are both part of the context view."
 },
 "c4q12": {
  "q": "What does a UML component diagram primarily depict?",
  "options": [
   "Components/building blocks and their offered or required interfaces.",
   "Physical computing nodes and the artifacts executed on them.",
   "The complete signature of every operation, including parameter types and visibilities.",
   "The order in which the components are instantiated and called at runtime."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: component diagrams show building blocks and their offered/required interfaces.",
   "Nodes and the artifacts executed on them are shown by the deployment diagram.",
   "Detailed operation signatures per class are shown by the class diagram; components show interfaces, not every signature.",
   "The temporal order of instantiation/calls is shown by the sequence/runtime diagram."
  ],
  "explanation": "Component diagrams show building blocks with offered/required interfaces (static structure). Nodes+artifacts = deployment diagram; full signatures = class diagram; temporal order = sequence diagram."
 },
 "c4q13": {
  "q": "Why are architectures described with multiple views? Which statements are correct?",
  "options": [
   "Different views address different questions and stakeholders.",
   "No single view can depict all relevant aspects simultaneously.",
   "The same building blocks can appear in multiple views, each with a different focus.",
   "Each view is a self-contained model and is kept consistent independently of the others.",
   "More views fundamentally mean better architecture documentation."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Different views address different questions and audiences.",
   "No single view shows all aspects - hence multiple ones.",
   "Correct and subtle: building blocks often appear multiple times, each with a different focus (e.g., static vs. runtime).",
   "Near-miss: views are specifically not independent - they must remain consistent with one another and describe the same system.",
   "It is not the number that is decisive; too many views can be harmful. What counts is appropriateness."
  ],
  "explanation": "Multiple views address different questions/audiences because no single one shows everything, and the same building blocks appear multiple times. However, views are not independent (obligation of consistency), and more views are not per se better."
 },
 "c4q14": {
  "q": "Which properties make architecture documentation particularly useful?",
  "options": [
   "It is current and is maintained along with relevant changes.",
   "It is tailored to the respective target audience.",
   "It is as concise as possible and as detailed as necessary.",
   "It is as extensive as possible; currency is thereby secondary.",
   "It is generated from the code as completely as possible, because generated documentation is automatically useful."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Current, maintained documentation remains reliable and useful.",
   "Documentation tailored to the target audience meets the information need.",
   "Appropriately concise documentation is easily readable and maintainable.",
   "Maximum scope at the expense of currency is precisely harmful.",
   "Near-miss: code generation can keep structural documentation current but does not replace decisions/rationale and does not make documentation automatically useful."
  ],
  "explanation": "Useful documentation is current, audience-oriented, and appropriately concise. Maximum scope at the expense of currency is harmful, and generated documentation is not per se useful (rationale/decisions cannot be generated)."
 },
 "c4q15": {
  "q": "What advantage does a standardized notation (e.g., UML) offer over arbitrary „boxes and arrows“?",
  "options": [
   "The diagram elements have an agreed meaning that is unambiguously comprehensible to others.",
   "Diagrams can be checked by tools and partly turned into code, whereby design errors are ruled out.",
   "An explanatory legend is no longer necessary, since the notation is fully self-explanatory.",
   "Standard notation enforces a uniform level of detail across all diagrams."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: standard notation gives the elements an agreed, clear meaning.",
   "Near-miss: tool support/code generation exists, but it does not rule out business design errors.",
   "Even with standard notation, explanations/legends remain sensible depending on the reader.",
   "A uniform level of detail is not enforced by the notation."
  ],
  "explanation": "Standard notations give elements an agreed meaning and thereby better comprehensibility. They do not rule out design errors, do not replace every explanation, and do not enforce a uniform level of detail."
 },
 "c4q16": {
  "q": "You want to show how an ordering process runs at runtime between several building blocks. Which view fits best?",
  "options": [
   "The runtime view (e.g., as a sequence or activity diagram).",
   "The building block view, since it shows all building blocks involved and their interfaces.",
   "The deployment view, since the process passes through several nodes.",
   "The context view, since an order is a business use case."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: the temporal flow between building blocks is shown by the runtime view.",
   "The building block view shows the building blocks involved statically, but not the temporal flow.",
   "The deployment view shows the assignment onto nodes, not the temporal flow.",
   "The context view shows the system boundary, not the internal flows."
  ],
  "explanation": "A temporal flow between building blocks belongs in the runtime view (e.g., sequence diagram). Building block, deployment, and context views answer other questions, even if they name involved building blocks/nodes."
 },
 "c4q17": {
  "q": "Which contents typically belong in an architecture documentation according to arc42?",
  "options": [
   "The context delimitation of the system.",
   "The quality requirements or quality scenarios.",
   "The architecture decisions with their rationale.",
   "The complete, line-by-line explanation of the entire source code.",
   "The detailed project and milestone plan, including resource allocation."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "The context delimitation is a fixed arc42 section.",
   "Quality requirements/scenarios explicitly belong in it.",
   "Correct and subtle: architecture decisions with rationale are a dedicated arc42 section.",
   "A line-by-line code explanation does not belong in the architecture documentation.",
   "Near-miss: project/milestone planning is project management, not part of the architecture documentation."
  ],
  "explanation": "Context delimitation, quality requirements, and architecture decisions (with rationale) belong in arc42. A line-by-line code explanation and the project planning do not."
 },
 "k7": {
  "q": "Assign each question to the appropriate view.",
  "categories": [
   "Building block view",
   "Deployment view"
  ],
  "rows": [
   "Into which modules/components is the system decomposed?",
   "What responsibility and what interfaces does a subsystem have?",
   "On which node does which component run in which environment?",
   "Over which network protocols do the machines communicate?"
  ],
  "explanation": "Decomposition into building blocks as well as responsibilities/interfaces of a subsystem = building block view. Assignment of components to nodes/environments and the communication paths/protocols = deployment view."
 },
 "c4q18": {
  "q": "Which statements about the UML class diagram are correct?",
  "options": [
   "It shows types/classes and their relationships (e.g., association, inheritance).",
   "It belongs to the static structure view.",
   "It primarily depicts the temporal flow of messages between objects.",
   "It maps the deployment of artifacts onto execution nodes.",
   "It primarily depicts the state transitions of an object over its lifetime."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Class diagrams show types and their relationships.",
   "They belong to the static structure view.",
   "Temporal message flow is shown by the sequence diagram.",
   "The deployment of artifacts onto nodes is shown by the deployment diagram.",
   "State transitions over the lifetime are shown by the state diagram."
  ],
  "explanation": "Class diagrams show static structure (types + relationships). Temporal message flow = sequence diagram; deployment onto nodes = deployment diagram."
 },
 "c4q19": {
  "q": "In a project, it must be decided which decisions are recorded as an Architecture Decision Record (ADR). Which statements are true?",
  "options": [
   "A hard-to-reverse fundamental technology decision should be recorded as an ADR, including the alternatives considered and rejected.",
   "The choice of an architecture or integration pattern with far-reaching consequences is worthy of an ADR.",
   "Ideally every detailed decision in the code should get its own ADR to ensure complete traceability.",
   "Purely local refactorings without any impact on structure or quality attributes belong in an ADR.",
   "An ADR is the place for the complete, always up-to-date description of the current (as-is) architecture."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Correct: Hard-to-reverse, consequential fundamental decisions are the core of an ADR, and it is precisely the rejected alternatives that make the decision traceable.",
   "Correct: Patterns with far-reaching consequences are typical ADR candidates.",
   "Fallacy: ADRs deliberately capture only the decision-relevant, far-reaching points; documenting every detailed decision creates effort and becomes outdated quickly.",
   "Local refactorings without consequences are not architecturally relevant decisions and do not belong in an ADR.",
   "Confusion: The ongoing description of the as-is architecture is the task of the architecture documentation; an ADR captures a single point-in-time decision."
  ],
  "explanation": "ADRs capture far-reaching, consequential, and hard-to-reverse decisions together with their context and rejected alternatives. They are neither a log of every detailed decision nor a continuous overall description of the architecture."
 },
 "c4q20": {
  "q": "What does a UML deployment diagram show?",
  "options": [
   "Nodes (hardware or execution environments), the artifacts executed on them, and the communication paths between the nodes.",
   "The logical decomposition of the system into components and their provided or required interfaces.",
   "The temporal exchange of messages between objects for a specific sequence.",
   "The states of an object and the transitions between them and their triggers."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Nodes, the artifacts placed on them, and their connections are the content of a deployment diagram.",
   "Near-Miss: The logical decomposition into components and interfaces is shown by the component diagram, not the deployment onto hardware.",
   "The temporal message exchange is shown by the sequence diagram.",
   "States and their transitions are shown by the state diagram."
  ],
  "explanation": "Deployment diagrams assign artifacts to physical or logical nodes and show their communication paths (deployment view). Component decomposition, temporal sequences, or object states are other diagram types."
 },
 "c4q21": {
  "q": "An architecture documentation is increasingly becoming outdated relative to the actual code. Which measures are most likely to help keep it up to date permanently?",
  "options": [
   "Keep the documentation lean and maintain it versioned close to the code (e.g., in the repository).",
   "Firmly anchor updating the documentation on relevant changes in the Definition of Done.",
   "Generate overviews and diagrams from the code where sensible, instead of maintaining them manually.",
   "Create a very extensive documentation once, to make later changes unnecessary.",
   "Store the documentation in a separate archive detached from the project, so it remains untouched."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Lean, versioned, and code-near documentation can be maintained together with the code.",
   "Correct: If updating is part of the change routine, the documentation does not drift away.",
   "Correct: Generated artifacts reduce manual maintenance effort and stay in sync with the code; however, they do not replace the explanatory text.",
   "Fallacy: Even a one-time large document becomes outdated as soon as the system changes.",
   "A separate archive decouples the documentation from the flow of changes and precisely encourages it becoming outdated."
  ],
  "explanation": "Documentation stays up to date if it is lean, versioned, and part of the change routine, and derived from the code where possible. A one-time large document or a decoupled archive does not prevent it from becoming outdated."
 },
 "c4q22": {
  "q": "Which statements about a glossary or a shared vocabulary in the documentation are true?",
  "options": [
   "It creates a shared, unambiguous understanding of the domain terms and reduces misunderstandings.",
   "It supports a consistent, uniform use of terms between the business domain and development.",
   "It is primarily a complete list of all class and variable names of the source code.",
   "It primarily serves to translate the user interface into multiple languages.",
   "It replaces a standalone description of the quality requirements."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Correct: Unambiguous domain terms are the core purpose of a glossary.",
   "Correct: A consistently used, shared language connects the business domain and its implementation.",
   "Confusion: A glossary explains domain terms; it is not a directory of technical identifiers.",
   "UI translation is the task of localization, not of the glossary.",
   "Near-Miss: Quality requirements are described separately; a glossary does not replace them."
  ],
  "explanation": "A glossary ensures a shared, unambiguous domain language across roles. It is neither a list of technical identifiers nor a translation tool, and it does not replace quality requirements."
 },
 "c4q23": {
  "q": "What makes an architecture overview particularly valuable for new team members?",
  "options": [
   "The big picture: system context, goals, and the most important constraints.",
   "The most important building blocks and their responsibilities.",
   "Central architecture decisions and their rationale.",
   "A complete, in-depth description of all interfaces and data models.",
   "A complete reference of all public methods with their signatures."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Context, goals, and constraints convey the big picture.",
   "Correct: Main building blocks and their tasks provide quick orientation.",
   "Correct: The reasons behind the core decisions explain the why.",
   "Near-Miss: Complete interface and data model details are useful, but too deep for an overview and overload it.",
   "A complete method reference is detailed knowledge and does not belong in an overview."
  ],
  "explanation": "A good overview conveys context/goals, the main building blocks, and the core decisions with their rationale. Complete interface, data model, or method details are too fine-grained for an overview."
 },
 "c4q24": {
  "q": "Which statements about the consistency of different architecture views are correct?",
  "options": [
   "All views describe the same system; the same building block must not be depicted contradictorily in different views.",
   "Views may show different aspects and levels of detail but must be consistent with one another.",
   "Consistency means every view contains exactly the same elements at identical level of detail.",
   "If two views contradict each other, it is enough to remove the less important view.",
   "A single, all-encompassing view is generally preferable in order to avoid consistency problems."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Correct: same system – no contradictory depiction of the same building block.",
   "Correct: different aspects/levels of detail are fine as long as they are consistent.",
   "Incorrect: views deliberately show different things; identical elements/detail are not required.",
   "Incorrect: a contradiction is resolved by clarifying its cause – not by discarding a view.",
   "Incorrect: a single view overwhelms the audiences; several coordinated views are precisely the point."
  ],
  "explanation": "Different views show different aspects of the same system at different depths – but must be mutually consistent. Contradictions are resolved by clarification, not by omission; a single all-in-one view is not the goal."
 },
 "k11": {
  "q": "Does the content belong in an architecture documentation?",
  "categories": [
   "Sensible documentation content",
   "Does not belong in it"
  ],
  "rows": [
   "Context delimitation of the system",
   "Central architecture decisions including their rationale",
   "Cross-cutting concept for error handling",
   "The complete source code line by line",
   "The team's personal vacation and absence planning"
  ],
  "explanation": "Context delimitation, justified architecture decisions, and cross-cutting concepts belong in the architecture documentation. The complete source code (the goal of documentation is explanation, not duplication) and personal organizational data such as vacation planning do not belong in it."
 },
 "c4q25": {
  "q": "What does a whitebox description of a building block in the building block view show?",
  "options": [
   "The internal decomposition of the building block into its contained (sub-)building blocks including their interplay.",
   "Exclusively the externally provided interfaces and responsibilities of the building block.",
   "The temporal sequence of calls between the internal building blocks at runtime.",
   "The assignment of the internal building blocks to concrete execution nodes (servers)."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: A whitebox opens the building block and shows its internal parts and their relationships.",
   "Near-Miss: Showing only the external interface is precisely the blackbox view.",
   "Near-Miss: The temporal sequence of internal calls belongs in the runtime view, not in the static whitebox.",
   "The assignment to execution nodes belongs in the deployment view."
  ],
  "explanation": "A whitebox opens the building block and statically shows its internal building blocks and their relationships. Only the interface would be the blackbox; temporal sequences or the hardware assignment are the runtime or deployment view respectively."
 },
 "c4q26": {
  "q": "What should an interface description typically specify?",
  "options": [
   "The provided operations with their parameters, data formats, and their meaning.",
   "The behavior in error and exception cases.",
   "The communication protocol or the type of interaction (e.g., synchronous or asynchronous).",
   "The internal implementation with which the operations are realized.",
   "The concrete server hardware and network topology of the provider."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Operations, parameters, and data formats with their semantics are the core of the interface contract.",
   "Correct: The behavior in error or exception cases must be specified.",
   "Correct: Protocol and type of interaction (synchronous/asynchronous) are part of the contract between the partners.",
   "The internal implementation is deliberately hidden for an interface (blackbox).",
   "Server hardware and network topology are part of the deployment view, not the interface description."
  ],
  "explanation": "An interface contract specifies operations/data formats, the error behavior, and the communication protocol. The internal implementation is precisely hidden, and the hardware belongs to deployment."
 },
 "c4q27": {
  "q": "Which statements justify why one should not document \"everything\"?",
  "options": [
   "Overly extensive documentation causes maintenance effort and becomes outdated quickly.",
   "What is sensible is the decision-relevant; unnecessary redundancy with the code should be avoided.",
   "Additional documentation immediately worsens the quality of the architecture itself.",
   "The architecture can in any case be completely and unambiguously derived from the source code alone.",
   "Documentation is generally only useful for external stakeholders, never for one's own team."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Correct: Excessive documentation ties up effort and lags behind the system.",
   "Correct: One documents the decision-relevant in a targeted manner and avoids duplication with the code.",
   "Fallacy: Documentation describes the architecture; it does not worsen it.",
   "Fallacy: The code shows the how, not the reasons, goals, and rejected alternatives.",
   "Documentation is useful precisely also for one's own team, not only for externals."
  ],
  "explanation": "One documents the decision-relevant in a targeted manner, because too much documentation creates effort and becomes outdated. Documentation does not worsen the architecture, the code alone does not explain reasons and goals, and documentation is also useful for the team."
 },
 "c4q28": {
  "q": "Which statements about the UML activity diagram are true?",
  "options": [
   "It represents flows with actions and branches.",
   "It can depict concurrent (parallel) flows.",
   "It primarily shows the static structure of classes and their relationships.",
   "It assigns software building blocks to execution nodes (hardware).",
   "It primarily depicts the states of an object and their transitions."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Correct: Actions and branches are core elements of the activity diagram.",
   "Correct: Parallel flows can be represented via fork/join.",
   "The static structure of classes is shown by the class diagram.",
   "The assignment to execution nodes is shown by the deployment diagram.",
   "States and their transitions are shown by the state diagram."
  ],
  "explanation": "Activity diagrams show flows including concurrency (dynamic behavior). Static class structure = class diagram; hardware assignment = deployment diagram; object states = state diagram."
 },
 "c4q29": {
  "q": "Which sections does the arc42 template explicitly provide?",
  "options": [
   "Quality requirements (e.g., quality tree and quality scenarios).",
   "Cross-cutting concepts.",
   "Constraints.",
   "A mandatory section with the complete source code of the system.",
   "A binding test case catalog for each individual method."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: arc42 contains a dedicated section for quality requirements.",
   "Correct: Cross-cutting concepts are a dedicated arc42 section.",
   "Correct: Constraints are an early arc42 section.",
   "arc42 does not provide a source code section; documentation should explain, not duplicate the code.",
   "arc42 does not know a binding test case catalog per method."
  ],
  "explanation": "arc42 structures, among others, into context, constraints, solution strategy, building block view, runtime/deployment view, cross-cutting concepts, architecture decisions, and quality requirements. Source code or a test case catalog are not arc42 sections."
 },
 "c4q30": {
  "q": "Which statements about UML as a notation are true?",
  "options": [
   "UML offers standardized diagram types with agreed-upon meaning.",
   "For architecture, component, deployment, and sequence diagrams, among others, are useful.",
   "UML prescribes a specific architecture or technology.",
   "A UML model can always be translated completely and automatically into executable code.",
   "UML is bound to a specific programming language and presupposes it."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Correct: UML is a standardized notation with defined semantics of the diagram types.",
   "Correct: These diagram types are particularly helpful for architecture work.",
   "UML is a notation and does not prescribe any architecture or technology.",
   "Complete automatic code generation from UML is not guaranteed.",
   "UML is independent of a concrete programming language."
  ],
  "explanation": "UML is a standardized, language-independent notation with many diagram types; for architecture, component, deployment, and sequence diagrams, among others, are useful. It neither prescribes architecture/technology nor guarantees complete code generation."
 },
 "c4q31": {
  "q": "An operations team wants to know on which servers which parts run and how they communicate. Which view helps the most?",
  "options": [
   "The deployment view.",
   "The building block view, since it shows all components and their responsibilities.",
   "The runtime view, since operations mainly observes flows.",
   "The class diagram, since it shows the static structure."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Questions about servers, nodes, and communication paths are answered by the deployment view.",
   "Near-Miss: The building block view shows the logical components, but not their assignment to servers.",
   "Near-Miss: The runtime view shows temporal flows, not the hardware assignment.",
   "The class diagram shows the static fine structure, not the deployment onto servers."
  ],
  "explanation": "Operations questions about servers/nodes and communication paths are answered by the deployment view. Building block view, runtime view, and class diagram address other aspects."
 },
 "k13": {
  "q": "Runtime view or deployment view?",
  "categories": [
   "Runtime view",
   "Deployment view"
  ],
  "rows": [
   "Temporal interaction of the building blocks during a use case",
   "On which server/node which component runs",
   "Order of the exchanged messages",
   "Network connections between data centers"
  ],
  "explanation": "Interactions/flows at runtime = runtime view. Assignment to hardware/nodes and their communication paths = deployment view."
 },
 "c4q32": {
  "q": "Which statements about good architecture documentation are true?",
  "options": [
   "Comprehensibility can ultimately only be judged from the perspective of the respective target group.",
   "Appropriateness means: as much as necessary, as little as possible.",
   "More documentation is generally better than less.",
   "Correctness is dispensable, as long as the documentation is extensive enough.",
   "The quality of good documentation is measured above all by the number of diagrams it contains."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Correct: Whether something is comprehensible is decided by the target group, not the author.",
   "Correct: Appropriateness means the right measure, not maximum extent.",
   "Fallacy: More documentation means more maintenance and faster obsolescence, not automatically more value.",
   "Correctness is indispensable; extent cannot replace it.",
   "The mere quantity of diagrams is not a measure of quality."
  ],
  "explanation": "Comprehensibility depends on the target group, appropriateness means the right measure. \"More = good\" is a fallacy, correctness is indispensable, and the number of diagrams does not measure quality."
 },
 "c4q33": {
  "q": "In what way does decision documentation according to arc42 tend to differ from a single Architecture Decision Record (ADR)?",
  "options": [
   "arc42 places decisions in a dedicated section within the overall context; an ADR is a standalone format focused per decision with its own status.",
   "An ADR necessarily replaces the arc42 decision section and must not exist alongside it.",
   "In contrast to arc42, ADRs generally capture no context and no alternatives.",
   "arc42 does not provide for recording architecture decisions at all."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: arc42 embeds decisions into the overall documentation, while an ADR documents a single decision standalone with a status.",
   "Fallacy: ADRs and the arc42 section can be combined; one does not necessarily replace the other.",
   "False: ADRs in particular capture context and considered alternatives.",
   "False: arc42 has a dedicated section for architecture decisions."
  ],
  "explanation": "Rule of thumb: arc42 embeds decisions into the overall documentation, an ADR focuses on a single decision with its own status. Both capture context and alternatives and are combinable."
 },
 "c4q34": {
  "q": "Which information typically belongs in an Architecture Decision Record (ADR)?",
  "options": [
   "The context or the problem that triggers the decision.",
   "The decision made including its status (e.g., proposed, accepted, superseded).",
   "The consequences of the decision and the considered alternatives.",
   "A detailed implementation and testing guide for each affected component.",
   "The complete requirements specification and cost calculation of the overall system."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: The context makes it traceable why a decision was made at all.",
   "Correct: Decision and status are core components of an ADR.",
   "Correct: Consequences and alternatives are part of the traceable decision.",
   "A detailed implementation/testing guide is not ADR content.",
   "Requirements specification and cost calculation are separate documents, not ADR content."
  ],
  "explanation": "An ADR concisely captures context, decision, status, consequences, and considered alternatives. It is not an implementation, requirements, or cost document."
 },
 "c4q35": {
  "q": "What applies to the documentation of interfaces?",
  "options": [
   "External interfaces form a \"contract\" with third parties and are usually specified earlier and in more detail.",
   "Internal interfaces must generally be documented in more detail than external ones.",
   "An interface description should also disclose the internal implementation, in order to avoid misunderstandings.",
   "For interfaces, the signature is sufficient; data formats and error behavior are dispensable."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: External interfaces are binding for third parties and are therefore specified early and carefully.",
   "Fallacy: Internal interfaces are not per se more detailed; the level of detail depends on need.",
   "Near-Miss: The internal implementation in particular remains deliberately hidden (blackbox).",
   "Data formats and error behavior are mandatory parts of the interface description."
  ],
  "explanation": "External interfaces are a contract with third parties and are specified early/in detail (data formats, protocols, error and versioning behavior). The internal implementation is deliberately left out (blackbox)."
 },
 "c4q36": {
  "q": "Which statements about the central documentation of cross-cutting concepts (e.g., security, error handling, logging) are true?",
  "options": [
   "It promotes a system-wide uniform, low-redundancy implementation across many building blocks.",
   "Cross-cutting concepts typically affect multiple building blocks and impact quality attributes.",
   "A cross-cutting concept by definition affects only a single building block and is described exclusively there.",
   "Cross-cutting concepts are relevant exclusively for external auditors and audits.",
   "They replace the building block view, since they already describe the system completely."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Correct: A central description prevents each team from solving the topic anew and differently.",
   "Correct: Cross-cutting concepts run through multiple building blocks and influence quality attributes.",
   "Fallacy: Precisely because they affect many building blocks, they are described centrally.",
   "False: They are relevant above all for the development team, not only for auditors.",
   "False: They complement the building block view, but do not replace it."
  ],
  "explanation": "A central description ensures the uniform, low-redundancy implementation of cross-cutting topics that affect many building blocks and impact quality attributes. They are not limited to one building block, not intended only for auditors, and do not replace any other view."
 },
 "c5q1": {
  "q": "Which elements belong to a fully formulated quality scenario?",
  "options": [
   "A trigger (stimulus) - such as an event, a request, or a change that the system is meant to respond to.",
   "The source of the trigger and the environment or context in which the scenario applies (e.g. normal operation, load peak).",
   "The expected response together with a measurable response measure (e.g. response time under 200 ms).",
   "The priority of the scenario as well as the estimated implementation effort as mandatory elements of every scenario.",
   "A concrete technical implementation (the HOW) by which the required response is ensured."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "The trigger (stimulus) is an integral element and describes what is being responded to.",
   "Source and environment/context define the conditions under which the scenario applies.",
   "The expected response plus a measurable response measure are what make the scenario verifiable in the first place.",
   "A priority is indeed often assigned to scenarios (e.g. in the utility tree), but an effort value is not an element of the scenario - the combination as mandatory elements is wrong.",
   "A scenario describes required behavior (the WHAT), not the technical solution (the HOW)."
  ],
  "explanation": "A quality scenario names the trigger, source/environment, and the expected response with a measurable response measure. Effort estimates are not part of it, and the technical implementation (HOW) is precisely not part of the scenario."
 },
 "c5q2": {
  "q": "How can ATAM (Architecture Tradeoff Analysis Method) be most accurately characterized?",
  "options": [
   "A scenario-based, predominantly qualitative method that analyzes architecture decisions against quality scenarios and thereby makes trade-offs visible.",
   "A method that quantifies the economic benefit of architecture decisions in monetary units and weighs it against their costs.",
   "A metric suite that automatically computes coupling and complexity from the source code.",
   "A maturity model that classifies the architecture and development process into defined levels."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: ATAM is scenario-based, predominantly qualitative, and in particular highlights trade-offs.",
   "This describes CBAM (Cost Benefit Analysis Method), not ATAM - an obvious but incorrect confusion.",
   "ATAM is not an automatic metric tool; it thrives on the facilitated analysis with stakeholders.",
   "A maturity model (e.g. CMMI) evaluates processes, not architecture decisions."
  ],
  "explanation": "ATAM evaluates architecture in a scenario-based and qualitative manner and makes trade-offs explicit. The economic quantification is CBAM; metric suites and maturity models are something entirely different."
 },
 "c5q3": {
  "q": "Which statements about the relationship between qualitative and quantitative architecture evaluation are correct?",
  "options": [
   "Qualitative methods (e.g. ATAM, reviews) are especially useful early on, when no runnable code or detailed model yet exists.",
   "Quantitative methods presuppose an analyzable artifact (code, model) and deliver measurable key figures.",
   "Qualitative results are fundamentally more objective than quantitative ones, because experts are involved.",
   "A quantitative metric value is already a finished evaluation even without interpretation in context.",
   "Qualitative and quantitative methods complement each other and are frequently used in combination."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Correct: Scenario- and expert-based methods work even without a finished artifact, and thus early on.",
   "Correct: Metrics need something measurable and deliver countable key figures.",
   "Wrong: Expert involvement brings subjectivity with it - qualitative is not categorically more objective.",
   "Wrong: A numeric value evaluates nothing as long as thresholds and meaning are not interpreted in context.",
   "Correct: Both approaches complement each other and are often used together."
  ],
  "explanation": "Qualitative methods can be applied early and without an artifact, quantitative ones need something measurable; both complement each other. Qualitative is not automatically more objective, and metrics are not an evaluation without interpretation."
 },
 "c5q4": {
  "q": "Which of the following are quantitative (metric-based) quantities?",
  "options": [
   "The efferent or afferent coupling degree of a module (Ce/Ca).",
   "The cyclomatic complexity of a component.",
   "The instability I = Ce / (Ca + Ce) according to R. C. Martin.",
   "The classification of a trade-off as critical within an ATAM workshop.",
   "The prioritization of quality scenarios as high/medium/low in the utility tree."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Coupling degrees are counted, measurable key figures - quantitative.",
   "Cyclomatic complexity counts control-flow paths - quantitative.",
   "Instability is a computed metric value between 0 and 1 - quantitative.",
   "The classification in an ATAM workshop arises in a facilitated, expert-based analysis - qualitative.",
   "A coarse high/medium/low prioritization is a qualitative assessment, not a metric."
  ],
  "explanation": "Coupling degrees, cyclomatic complexity, and instability according to Martin are computed metrics. ATAM classifications and the coarse scenario prioritization are qualitative judgments."
 },
 "c5q5": {
  "q": "What is the purpose of a utility tree in a scenario-based evaluation?",
  "options": [
   "It arranges quality attributes hierarchically down to prioritized, concrete quality scenarios and thereby focuses the evaluation.",
   "It arranges identified risks by probability of occurrence and severity of damage in a matrix.",
   "It represents the decomposition of the system into building blocks and their responsibilities.",
   "It documents the architecture decisions taken together with their rationale and rejected alternatives."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: The utility tree structures quality attributes down to prioritized scenarios and directs the focus.",
   "This describes a risk matrix, not the utility tree.",
   "The decomposition into building blocks and responsibilities is provided by the building block view.",
   "Justified decisions together with alternatives are recorded by an Architecture Decision Record (ADR)."
  ],
  "explanation": "A utility tree structures quality attributes hierarchically down to prioritized scenarios and focuses the evaluation. Risk matrix, building block view, and ADR are each other artifacts."
 },
 "c5q6": {
  "q": "Which statements accurately describe the goals of an architecture evaluation?",
  "options": [
   "Recognizing risks and weaknesses regarding the quality goals early, while corrections are still cheap.",
   "Making trade-offs between competing quality attributes explicit, in order to decide consciously.",
   "Checking whether the architecture is likely to be able to support the required quality goals.",
   "Proving that the later implementation will be free of defects.",
   "Demonstrating that without a formal evaluation no viable architecture can fundamentally come about."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Early recognition of risks lowers the correction costs - a core goal.",
   "Correct: Evaluation makes trade-offs visible and enables conscious decisions.",
   "Correct: A central goal is assessing whether the architecture supports the quality goals.",
   "Wrong: Evaluation reduces risk but guarantees no defect-free implementation.",
   "Wrong: Evaluation is valuable, but viable architectures also come about without a formal evaluation method - the statement overstates it."
  ],
  "explanation": "Evaluation uncovers risks and trade-offs early and checks the viability against the quality goals. It guarantees no freedom from defects and is not a mandatory precondition for the existence of a viable architecture."
 },
 "c5q7": {
  "q": "What does high coupling of a module tend to express?",
  "options": [
   "Many incoming and outgoing dependencies - tends to be harder to change and test in isolation and more susceptible to the propagation of changes.",
   "A high functional cohesiveness of the elements within the module.",
   "A high instability that is always an architecture defect and must be eliminated.",
   "A low reusability that is directly reflected in the cyclomatic complexity."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Many dependencies make isolated changes and tests harder and let changes propagate more easily.",
   "This describes high cohesion (cohesiveness), not coupling - a classic confusion.",
   "Coupling is indeed related to instability, but high coupling is not automatically a defect (e.g. deliberately unstable, changeable peripheral modules).",
   "Coupling says nothing directly about cyclomatic complexity - these are different metrics."
  ],
  "explanation": "High coupling means many dependencies and makes isolated changeability/testability harder. Internal cohesiveness is cohesion; high coupling is not per se a defect and not the same as cyclomatic complexity."
 },
 "c5q8": {
  "q": "What does cyclomatic complexity measure?",
  "options": [
   "The number of linearly independent paths through the control flow, essentially determined by the branches.",
   "The number of dependencies of a module to other modules.",
   "The nesting depth of the inheritance hierarchy of a class.",
   "The code size, measured in lines (LOC)."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: It counts the linearly independent control-flow paths and increases with the branches.",
   "Module dependencies are captured by coupling, not this metric.",
   "The inheritance depth (Depth of Inheritance Tree) is a different metric.",
   "LOC measures the size, not the number of paths."
  ],
  "explanation": "Cyclomatic complexity counts independent control-flow paths. Coupling, inheritance depth, and LOC are each other, easily confused metrics."
 },
 "c5q9": {
  "q": "Which statements about the benefit of quality scenarios in evaluation are correct?",
  "options": [
   "They make abstract quality goals concrete, measurable, and thereby verifiable.",
   "They serve as a benchmark against which architecture decisions are evaluated.",
   "They help prioritize quality goals, since not all scenarios are equally important.",
   "They guarantee that the stated quality goals are actually achieved in the finished system.",
   "They replace the elicitation of the functional requirements."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Scenarios make abstract goals concrete and verifiable.",
   "Correct: They provide the evaluation benchmark for architecture decisions.",
   "Correct: Through the prioritization of scenarios, goals can be weighted.",
   "Wrong: Scenarios make goals verifiable but do not guarantee their achievement.",
   "Wrong: Scenarios concern quality requirements and do not replace the functional requirements."
  ],
  "explanation": "Scenarios make quality goals concrete and prioritized and provide an evaluation benchmark. They do not guarantee goal achievement and do not replace functional requirements."
 },
 "c5q10": {
  "q": "What characterizes an architecture review (or walkthrough) as an evaluation method?",
  "options": [
   "A qualitative, expert-supported examination of the architecture on the basis of quality goals and scenarios.",
   "A facilitated method whose result consists primarily of automatically measured code metrics.",
   "A dynamic test that checks the running system against defined load profiles.",
   "A method that can only be sensibly carried out after completion of the code."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: A review is a qualitative, expert-supported examination against goals and scenarios.",
   "Reviews can draw on metrics, but their core is human judgment - not primarily measurement.",
   "A load test is a dynamic measurement, not a review.",
   "Reviews are valuable precisely early on, at the model/design level, and are not only possible after code completion."
  ],
  "explanation": "Reviews/walkthroughs are qualitative, expert-supported methods against goals and scenarios - applicable early. Metric measurement and load tests are something different."
 },
 "c5q11": {
  "q": "Which of the following methods are qualitative evaluation methods?",
  "options": [
   "Scenario-based analysis (e.g. ATAM).",
   "Architecture review or inspection by experts.",
   "Automatic counting of lines of code (LOC).",
   "Measurement of the coupling degree between modules.",
   "Calculation of the cyclomatic complexity per component.",
   "Determination of test coverage as a percentage value."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Scenario-based analysis such as ATAM is qualitative (facilitated, expert-based).",
   "An expert review/inspection is a qualitative method.",
   "LOC counting delivers a key figure and is quantitative.",
   "Coupling measurement is metric-based and thus quantitative.",
   "Cyclomatic complexity is a metric and thus quantitative.",
   "A percentage test coverage is a key figure and thus quantitative."
  ],
  "explanation": "Scenario analyses and expert reviews are qualitative. LOC, coupling, cyclomatic complexity, and test coverage are quantitative (metric-based) quantities."
 },
 "c5q12": {
  "q": "When should an architecture be evaluated?",
  "options": [
   "Early and repeatedly, accompanying important architecture decisions.",
   "As late as possible, when a lot of code exists, so that the evaluation is based on facts instead of assumptions.",
   "Only once, bundled for acceptance by the client.",
   "Exclusively reactively, as soon as problems arise in operation."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Early and repeatedly, while corrections are still cheap.",
   "Sounds plausible, but is wrong: waiting too long makes necessary corrections needlessly expensive.",
   "A single time for acceptance is too late for corrections.",
   "Purely reactively upon operational problems is clearly too late."
  ],
  "explanation": "Evaluation is most valuable early and repeatedly. Waiting for a lot of code sounds fact-based but makes corrections expensive; once for acceptance or purely reactively is too late."
 },
 "c5q13": {
  "q": "Which statements accurately describe the limits of metric-based (quantitative) evaluation?",
  "options": [
   "Metric values must be interpreted in context; a threshold value alone is not yet an evaluation.",
   "Some quality attributes (e.g. maintainability or security) can only be partially represented by metrics.",
   "A high value of a metric is always an unambiguous deficiency, independent of the context.",
   "Metrics completely replace the technical judgment by experts.",
   "Since metrics are subjective, they are fundamentally unsuitable for evaluation."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Correct: Only context and interpretation turn a number into an evaluation.",
   "Correct: Many quality attributes can only be partially captured by metrics.",
   "Wrong: Whether a high value is problematic depends on the context.",
   "Wrong: Metrics provide indications but do not replace technical judgment.",
   "Wrong: Metrics are precisely objective/reproducible; their limit is the necessary interpretation, not subjectivity."
  ],
  "explanation": "Metrics need context-dependent interpretation and cover some qualities only partially. They are not automatically bad at a high value, do not replace experts, and are precisely not subjective."
 },
 "c5q14": {
  "q": "What is a typical result of an architecture evaluation?",
  "options": [
   "Identified risks, weaknesses, and trade-offs together with prioritized improvement proposals.",
   "A formal proof that the system is free of defects.",
   "A binding release of the architecture that fundamentally rules out further rework.",
   "A complete, newly elaborated target architecture that replaces the previous one."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Risks, weaknesses, trade-offs, and prioritized recommendations are typical results.",
   "An evaluation does not prove freedom from defects.",
   "It delivers no unconditional release that rules out rework.",
   "It identifies problems and recommends measures, but does not elaborate a completely new target architecture as a result."
  ],
  "explanation": "An evaluation delivers risks, trade-offs, and prioritized recommendations. It is not a proof of freedom from defects, not an unconditional release, and does not produce a complete new architecture as a result."
 },
 "k10": {
  "q": "Assign each method or key figure correctly: qualitative or quantitative method?",
  "categories": [
   "Qualitative",
   "Quantitative"
  ],
  "rows": [
   "Scenario-based analysis with stakeholders (ATAM)",
   "Instability I = Ce / (Ca + Ce) according to R. C. Martin",
   "Expert inspection with minutes and independent moderator",
   "Percentage test coverage",
   "Facilitated walkthrough through the architecture design",
   "Cyclomatic complexity per method"
  ],
  "explanation": "ATAM, inspection, and walkthrough are qualitative (expert-/scenario-based). Instability, test coverage, and cyclomatic complexity are quantitative (computed key figures)."
 },
 "c5q15": {
  "q": "Why are clearly formulated, prioritized quality goals a precondition for a meaningful architecture evaluation?",
  "options": [
   "Without prioritized quality goals there is no benchmark against which architecture decisions could be evaluated at all.",
   "Because the scope of an evaluation can only be derived from the functional requirements.",
   "Because without documented quality goals no valid architecture can fundamentally exist.",
   "Because quality goals determine which concrete technologies must be used in the system."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Evaluation measures against the quality goals - without them there is no benchmark.",
   "Wrong: The focus of the evaluation arises from the quality goals, not primarily from the functional requirements.",
   "Wrong: Architecture can also exist without documented goals - it just cannot be meaningfully evaluated.",
   "Wrong: Quality goals describe requirements (WHAT), not the concrete technology choice (HOW)."
  ],
  "explanation": "Evaluation measures against prioritized quality goals; if they are missing, there is no benchmark. They do not depend on the scope of functional requirements, are not an existence condition for architecture, and do not determine technologies."
 },
 "c5q16": {
  "q": "What is the purpose of tools for static code or architecture analysis?",
  "options": [
   "For (partially) automated checking of code and structure without execution - such as metrics as well as naming and dependency rules.",
   "For measuring the runtime behavior (response times, memory consumption) under real load.",
   "For eliciting qualitative expert assessments in facilitated workshops.",
   "For automatically fixing all rule violations found in the code."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Static analysis checks code/structure without execution against metrics and rules.",
   "That is dynamic analysis (measurement at runtime) - obvious, but wrong.",
   "Expert workshops are qualitative and not static analysis.",
   "Static analysis finds violations but does not fix them automatically."
  ],
  "explanation": "Static analysis checks code/structure without execution (metrics, rules, dependencies). Runtime measurement is dynamic, workshops are qualitative, and fixing does not happen automatically."
 },
 "c5q17": {
  "q": "What is a trade-off point in architecture evaluation (e.g. in ATAM)?",
  "options": [
   "A decision or property that affects several quality attributes in opposing ways.",
   "A decision that is decisive for exactly one single quality attribute.",
   "A point at which all relevant quality goals are simultaneously optimally fulfilled.",
   "An identified risk that has no relation whatsoever to quality attributes."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: A trade-off point affects several quality attributes in opposing ways.",
   "If a decision affects only exactly one, it is a sensitivity point - not the same thing.",
   "A simultaneous optimum of all quality goals is precisely what trade-offs prevent.",
   "A trade-off point relates by definition to quality attributes."
  ],
  "explanation": "A trade-off point affects several quality attributes in opposing ways. If a decision affects only one, it is a sensitivity point."
 },
 "c5q18": {
  "q": "What should an architecture evaluation with severely limited time concentrate on?",
  "options": [
   "On the highest-prioritized quality goals and the scenarios with the greatest risk.",
   "On a check of all building blocks that is as complete as possible, so as to miss nothing.",
   "On the building blocks with the highest change rate according to version control.",
   "On the technically newest components, because the team knowledge there is lowest."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: With scarce time, prioritized quality goals and the greatest risks count.",
   "Completeness is precisely not achievable with scarce time - focusing beats completeness.",
   "Change rate is an indication, but not a primary selection criterion over goal and risk.",
   "The novelty degree of a component is not a risk-oriented selection criterion."
  ],
  "explanation": "With limited time you focus on prioritized quality goals and the greatest risks. Completeness, mere change rate, or novelty degree are secondary or unsuitable criteria."
 },
 "c5q19": {
  "q": "Which statements about architecture evaluation are correct?",
  "options": [
   "It uncovers risks and weaknesses early.",
   "It needs clear, prioritized quality goals as a benchmark.",
   "It can be done qualitatively or quantitatively - or combined.",
   "It is only sensible once, at the very end of the project.",
   "It may only be carried out by independent external reviewers."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Early uncovering of risks is a core benefit.",
   "Correct: Without prioritized quality goals the evaluation benchmark is missing.",
   "Correct: Qualitative and quantitative methods are possible and combinable.",
   "Wrong: It is sensible early and repeatedly, not only at the project end.",
   "Wrong: Internal reviews are also permissible; external reviewers are not mandatory."
  ],
  "explanation": "Evaluation uncovers risks early, needs prioritized quality goals, and can be done qualitatively as well as quantitatively. It is not limited to the project end and not reserved for external parties."
 },
 "c5q20": {
  "q": "What is a sensitivity point in an architecture evaluation (e.g. in ATAM)?",
  "options": [
   "A decision or property that is especially decisive for exactly one quality attribute.",
   "A decision that affects several quality attributes in opposing ways.",
   "A point at which all quality goals are automatically fulfilled.",
   "A risk that touches no quality attribute whatsoever."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: A sensitivity point is decisive for exactly one quality attribute.",
   "Opposing effect on several attributes characterizes a trade-off point.",
   "There is no automatic optimum of all quality goals.",
   "A sensitivity point concerns precisely one quality attribute."
  ],
  "explanation": "A sensitivity point is decisive for a single quality attribute. Opposing effect on several attributes makes it a trade-off point."
 },
 "c5q21": {
  "q": "Which types of result does a scenario-based evaluation such as ATAM typically deliver?",
  "options": [
   "Identified risks and explicitly named non-risks.",
   "Sensitivity and trade-off points.",
   "A prioritized utility tree of the relevant scenarios.",
   "A binding schedule and effort plan for the implementation.",
   "The refactored source code of the critical components."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "ATAM names risks and explicitly also non-risks.",
   "Sensitivity and trade-off points are typical ATAM results.",
   "The prioritized utility tree arises in the course and is a central interim/final result.",
   "A binding schedule/effort plan is not delivered by the evaluation.",
   "Source code is not a result of an architecture evaluation."
  ],
  "explanation": "ATAM delivers risks, non-risks, sensitivity and trade-off points, as well as a prioritized utility tree. Schedules or source code do not belong to it."
 },
 "c5q22": {
  "q": "A team wants to evaluate an architecture already before implementation and involve stakeholders in doing so. How is ATAM to be classified in this context?",
  "options": [
   "As a scenario-based, predominantly qualitative method that is facilitated with stakeholders and thus also applicable early in the lifecycle.",
   "As a purely quantitative method that derives metrics exclusively from the existing code.",
   "As a fully automated tool that manages without participants.",
   "As a method that is only applicable after completion and commissioning of the system."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: ATAM is scenario-based, qualitative, and facilitated - thereby precisely suitable early, without finished code.",
   "ATAM does not work exclusively with code metrics.",
   "ATAM needs participants and is not fully automatic.",
   "ATAM is precisely sensible early and not limited to finished systems."
  ],
  "explanation": "ATAM is scenario-based, qualitative, and facilitated and thus ideal for an early evaluation with stakeholders. It is neither purely metric-based nor fully automatic nor limited to finished systems."
 },
 "c5q23": {
  "q": "Which form of review has the highest degree of formalization?",
  "options": [
   "The inspection - with preparation, defined roles, minutes, and an independent moderator.",
   "The walkthrough, in which the author guides the participants through the design.",
   "The informal review without fixed roles and without minutes.",
   "Pair programming, in which two developers work on the code together."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: The inspection is the most formal (preparation, roles, minutes, independent moderator).",
   "The walkthrough is looser and author-guided - less formal than the inspection.",
   "An informal review has hardly any roles and no fixed formalization.",
   "Pair programming is a development practice, not a formalized review format."
  ],
  "explanation": "The degree of formalization increases: informal -> walkthrough -> inspection. The inspection is the most formal; pair programming is not a review format at all."
 },
 "c5q24": {
  "q": "What does risk management from an architecture perspective focus on above all?",
  "options": [
   "On product risks - most commonly they are mitigated by lowering their probability of occurrence.",
   "On project risks such as schedule and budget planning, which the architect is solely responsible for.",
   "Exclusively on completely avoiding every identified risk.",
   "On consciously accepting risks and only reacting upon occurrence."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Product risks are in focus; the most common mitigation lowers the probability of occurrence.",
   "Schedule and budget risks lie primarily with project management, not with the architect alone.",
   "Complete avoidance of every risk is rarely possible and rarely economical.",
   "Mere acceptance and reactive action is a strategy for residual risks, but not the focus of active architecture work."
  ],
  "explanation": "Architecturally, product risks are in focus; usually one lowers the probability of occurrence. Project risks lie with project management, complete avoidance is rarely possible, and mere acceptance is only sensible for residual risks."
 },
 "c5q25": {
  "q": "In a long-running system, the actually implemented structure increasingly diverges from the documented target architecture. Which statements are correct?",
  "options": [
   "This is called architecture erosion; without countermeasures the „disorder“ increases over time.",
   "The planned qualities can only be reliably expected if the implementation follows the intended structure.",
   "Regular conformity checks (e.g. dependency analysis) help to make such deviations visible early.",
   "As long as the documentation is kept up to date, the deviation is uncritical.",
   "Since the target architecture is anyway only a non-binding recommendation, there is no need for action."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: The gradual drifting apart of actual and target is architecture erosion.",
   "Correct: Only if the code follows the structure do the structural qualities reliably hold.",
   "Correct: Conformity/dependency checks uncover deviations early.",
   "Wrong: Up-to-date documentation changes nothing about the fact that the actual structure deviates from the target structure.",
   "Wrong: The target architecture is a binding benchmark, not merely a recommendation - erosion must be actively counteracted."
  ],
  "explanation": "The gradual deviation of actual and target is architecture erosion; structural qualities only hold if the code follows the structure, and conformity checks make deviations visible early. Up-to-date documentation or dismissing the target architecture as a recommendation do not cure the erosion."
 },
 "c5q26": {
  "q": "What does a conformity or consistency analysis of the architecture check?",
  "options": [
   "Whether the actually implemented (actual) architecture matches the intended (target) architecture.",
   "Whether the architecture documentation is written free of contradictions and completely.",
   "Whether the elicited requirements completely cover the quality goals.",
   "Whether the libraries used are at the current version level."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: It compares the implemented actual with the planned target architecture.",
   "Checking the inner quality of the documentation is a documentation review, not a target/actual comparison.",
   "The coverage of the quality goals by requirements is the subject of requirements engineering.",
   "The version level of libraries is a matter of dependency management, not conformity analysis."
  ],
  "explanation": "A conformity analysis compares actual and target architecture and thus uncovers erosion. Documentation quality, requirements coverage, and library versions are each other checks."
 },
 "c5q27": {
  "q": "With what can compliance with planned dependency or layer rules be checked most reliably?",
  "options": [
   "With static analysis or tools that check actual dependencies against defined rules.",
   "Through spot-check surveying of individual developers for their assessment.",
   "Through counting the lines of code per file and layer.",
   "Solely through measuring the response times of the system in operation."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Static analysis systematically checks the real dependencies against target rules.",
   "Individual opinions do not check structural rules reliably and completely.",
   "LOC says nothing about permitted or forbidden dependencies.",
   "Runtime response times say nothing about the structural conformity of the dependencies."
  ],
  "explanation": "Forbidden dependencies (e.g. between layers) are found reliably with static dependency analysis. Surveys, LOC counting, or runtime measurement do not check structural conformity."
 },
 "c6q1": {
  "q": "A colleague argues that Chapter 6 (\"Examples of software architectures\") is dispensable because it contains \"nothing new\". How can the purpose of the chapter be accurately characterized?",
  "options": [
   "It applies the content of the previous chapters to concrete cases and makes relationships comprehensible, without introducing new examinable material.",
   "It summarizes the central definitions of the previous chapters in an exam-relevant way and thus replaces reviewing them separately.",
   "It derives generalizable rules from the examples that are to be learned as a supplement to the previous learning goals.",
   "It primarily serves to present preferred reference architectures and technology stacks for typical domains."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: The examples illustrate what has already been learned using concrete cases; they are R3 and not new examinable material.",
   "Tempting but wrong: The chapter does not provide an exam-relevant summary and does not replace the subject chapters.",
   "Wrong: No additional rules to be learned are derived from the examples – the gain in insight lies in understanding, not in memorizing.",
   "Wrong: It is about illustrating approaches and relationships, not about prescribing preferred stacks."
  ],
  "explanation": "Chapter 6 applies what has been learned using examples and makes relationships comprehensible (R3). It is not new examinable material, not an exam-relevant summary, derives no additional rules, and prescribes no technologies."
 },
 "c6q2": {
  "q": "A continuous architecture example is meant to show the \"common thread\" from the requirements to the solution. Which aspects should one above all be able to recognize in it? (Multiple choice)",
  "options": [
   "How quality requirements and constraints influence the central design decisions.",
   "How a decision shapes the structure and becomes visible in various views.",
   "Which alternatives were considered and for what reasons they were rejected.",
   "The complete, production-ready implementation including all configuration files.",
   "A ranking of the frameworks used according to their market prevalence."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Relating quality requirements and constraints to the decisions is the core of the common thread.",
   "Correct: An architecture only becomes comprehensible when decisions are reflected in structure and views.",
   "Correct: Rejected alternatives and their rationale are also part of the instructive core of an example.",
   "Wrong: A complete, production-ready implementation is not the learning purpose – examples illustrate relationships.",
   "Wrong: The market prevalence of the frameworks is irrelevant to the common thread."
  ],
  "explanation": "The common thread shows how requirements and constraints lead to decisions, how these shape structure and views, and which alternatives were rejected for which reasons. A complete implementation or framework rankings are not the purpose. (R3.)"
 },
 "c6q3": {
  "q": "How should the role of Chapter 6 (examples) be correctly classified in relation to the CPSA-F exam?",
  "options": [
   "It is predominantly R3: part of the curriculum for illustration, but not a direct subject of the exam.",
   "It is R2: not examined directly, but one must know the examples as reference solutions.",
   "It is R1: the continuous examples form a focal point of the exam questions.",
   "It lies outside the curriculum and is purely optional supplementary material."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Chapter 6 is predominantly R3 – a curricular component for illustration, but not directly exam-relevant.",
   "Wrong: The examples are not R2 and do not have to be mastered as reference solutions.",
   "Wrong: Chapter 6 is not R1 and does not form an exam focal point.",
   "Wrong: The chapter is part of the curriculum – it is R3, not outside it."
  ],
  "explanation": "Chapter 6 is predominantly R3: part of the curriculum for illustration, but not direct examinable material. It is neither R2 nor R1 and does not lie outside the curriculum."
 },
 "c6q4": {
  "q": "Two examples solve a similar requirement with different architectural approaches. What is the actual learning benefit of this?",
  "options": [
   "That design decisions are context-dependent and the same requirement can be sensibly solved differently depending on the constraints.",
   "That one of the two examples represents the objectively superior solution that one should prefer in future.",
   "That a universally valid model solution can be derived from the comparison, to be memorized for the exam.",
   "That the choice of approach is ultimately a matter of taste and hardly depends on requirements."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: The comparison shows that decisions depend on the context and the constraints – there is no single right solution.",
   "Wrong: Without context there is no objectively superior solution; both can be appropriate in their environment.",
   "Wrong: There is no universally valid model solution to be memorized.",
   "Wrong: The choice is precisely not arbitrary, but justified by requirements and constraints."
  ],
  "explanation": "Comparing different approaches for the same requirement shows the context-dependence of decisions. Neither is one solution superior regardless of context, nor is there a blueprint to be memorized, nor is the choice arbitrary. (R3.)"
 },
 "c6q5": {
  "q": "What benefit does studying several different architecture examples bring? (Multiple choice)",
  "options": [
   "One expands one's own repertoire of solution patterns and practices transferring them to new problems.",
   "One sharpens one's eye for which constraints justify which decisions.",
   "One obtains a ready-made copy template for one's own projects that makes one's own decisions dispensable.",
   "One recognizes recurring patterns and at the same time learns to assess their limits and context-dependence.",
   "One arrives at a single, generally superior reference architecture for future systems."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Correct: Several examples expand the solution repertoire and train transferring them to one's own problems.",
   "Correct: The comparison sharpens the understanding of how constraints justify decisions.",
   "Wrong: Examples do not provide a copy template and do not spare one's own decisions.",
   "Correct: One recognizes recurring patterns as well as their limits and context-dependence.",
   "Wrong: There is no generally superior reference architecture for all future systems."
  ],
  "explanation": "Several examples expand the repertoire, train transfer, sharpen the eye for the justifying effect of constraints, and show patterns together with their limits. They are not a copy template and do not provide a universally superior reference architecture. (R3.)"
 },
 "c6q6": {
  "q": "In an architecture example, a decision is explicitly documented together with its disadvantages. Why is looking at such trade-offs in particular instructive?",
  "options": [
   "Because architecture decisions weigh competing quality goals against each other, and the conscious, justified compromise forms the core of the decision.",
   "Because the documented disadvantages prove that a better, disadvantage-free solution was overlooked at this point.",
   "Because a good design should be reworked until no disadvantages remain.",
   "Because disclosing disadvantages serves above all to later defend against criticism and less the design itself."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Architecture weighs competing quality goals; the justified compromise is the actual core of the decision.",
   "Wrong: Documented disadvantages are no proof of an overlooked, disadvantage-free solution – such a solution generally does not exist.",
   "Wrong: A design cannot be optimized to be free of disadvantages; compromises remain unavoidable.",
   "Wrong: Disclosure serves the comprehensibility of the trade-off, not primarily defense against criticism."
  ],
  "explanation": "Trade-offs are instructive because architecture weighs competing quality goals and the justified compromise forms the core of every decision. Disadvantages do not prove an overlooked ideal solution, cannot be optimized away, and are not documented merely as a defense. (R3.)"
 }
};
