/* Englische Übersetzungen des Fragenkatalogs. QUESTIONS_EN[id]. Fallback DE via mergeEN. */
const QUESTIONS_EN = {
 "c1q1": {
  "q": "Which statements about the term software architecture are correct in the sense of CPSA-F?",
  "options": [
   "Every system has one, even without deliberate design.",
   "It comprises all design decisions of a system.",
   "It comprises building blocks with their interfaces and relationships.",
   "Cross-cutting concerns and principles are part of it.",
   "It is synonymous with the chosen architectural style."
  ],
  "correct": [
   0,
   2,
   3
  ],
  "optExpl": [
   "Correct: Architecture always exists – even if it was never planned or documented. Documentation merely describes it.",
   "Wrong: Overgeneralisation: what is meant are the fundamental, system-wide decisions, not every easily changeable detail decision.",
   "Correct: This is the common core of architecture definitions: building blocks alone, without their relationships, do not yet describe an architecture.",
   "Correct: The curriculum explicitly counts structures, cross-cutting concerns (e.g. persistence, error handling) and principles as part of the core.",
   "Wrong: Confusion of terms: a style (e.g. layers) shapes the architecture but does not cover building blocks, cross-cutting concerns and decisions as a whole."
  ],
  "explanation": "Core: building blocks with interfaces and relationships, structures, cross-cutting concerns, principles and fundamental decisions. Trap: not every decision counts, and an architectural style is only one part of it."
 },
 "c1q2": {
  "q": "Which statements about a component are correct in the sense of CPSA-F?",
  "options": [
   "It can itself consist of finer-grained building blocks.",
   "It must not have dependencies on other building blocks.",
   "It corresponds to exactly one deployment artefact.",
   "It is used via interfaces; its internals remain hidden.",
   "With an identical interface signature it is interchangeable.",
   "It can offer several interfaces."
  ],
  "correct": [
   0,
   3,
   5
  ],
  "optExpl": [
   "Correct: Building blocks are hierarchical; in the white-box view a component can be composed of finer building blocks.",
   "Wrong: Overgeneralisation of loose coupling: components may have required interfaces – dependencies should be clearly defined, not excluded.",
   "Wrong: Mixes up building block and deployment view: one artefact can contain several building blocks and vice versa.",
   "Correct: The black-box principle: clients only know the contract; the realisation can change without adapting them.",
   "Wrong: The signature only covers names and types; interchangeability requires the same contract including semantics and guarantees.",
   "Correct: A building block may have several interfaces, e.g. for different groups of clients."
  ],
  "explanation": "A component is a building block: hierarchical, encapsulated, possibly with several interfaces. Traps: loose coupling does not mean 'no dependencies', signature ≠ contract, building block ≠ artefact."
 },
 "c1q3": {
  "q": "In an architecture documentation, a subsystem is described in one place as a black box and in another as a white box. What is most likely correct?",
  "options": [
   "The black box describes the provided interfaces; the required interfaces, by contrast, belong only in the white box.",
   "The white box shows the contained building blocks; their black-box descriptions, however, belong on the next refinement level, not in this white box.",
   "The white box may introduce additional external interfaces that do not appear in the black box, because it is more detailed.",
   "The white box must match the black box: it shows the internal building blocks, their interplay and how the black box's interfaces are served internally."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: Required interfaces are also part of the outside view, because they show what the building block depends on. Anyone who wants to use it must know these dependencies – so they belong in the black box.",
   "Wrong: A white box describes its contained building blocks precisely as black boxes (responsibility, interfaces). Only when you open one of them does its own white box follow on the next level.",
   "Wrong: More detail does not mean more external contact: external interfaces that only appear in the white box make the two views inconsistent. The white box refines, it does not extend the outside view.",
   "Correct: The white box is the inside view of the same building block and must be consistent with its outside view. It shows the contained building blocks, their interplay and which of them realize the external interfaces."
  ],
  "explanation": "Black box = outside view with provided AND required interfaces and responsibility. White box = inside view, consistent with the black box; it describes its internal building blocks as black boxes themselves."
 },
 "c1q4": {
  "q": "Which statements about architecture views are correct?",
  "options": [
   "Views may contradict each other because they serve different audiences.",
   "The building block view shows which building blocks communicate when.",
   "The deployment view maps artefacts to infrastructure nodes.",
   "The runtime view shows how building blocks interact in scenarios.",
   "The context view shows the top-level decomposition of the system."
  ],
  "correct": [
   2,
   3
  ],
  "optExpl": [
   "Wrong: Views show different aspects of the same system and must therefore be consistent; contradictions are errors.",
   "Wrong: The 'when' belongs to the runtime view. The building block view shows the static decomposition and dependencies.",
   "Correct: It shows on which nodes the artefacts run and via which channels these are connected.",
   "Correct: It describes dynamic behaviour, e.g. as a sequence diagram for a concrete flow.",
   "Wrong: Confused with level 1 of the building block view: the context view shows the system as a black box with its external neighbours."
  ],
  "explanation": "Runtime view = dynamic interaction, deployment view = artefacts on nodes. Trap: the context view is not a decomposition level, and temporal behaviour does not belong in the building block view."
 },
 "c1q5": {
  "q": "Which tasks does the curriculum assign to software architects?",
  "options": [
   "Arguing the consequences of decisions towards stakeholders.",
   "Ensuring consistency between source code and architecture.",
   "Questioning requirements and constraints.",
   "Being responsible for the project budget and staffing.",
   "Deciding the order of features in the backlog.",
   "Defining the system decomposition, dependencies and interfaces."
  ],
  "correct": [
   0,
   1,
   2,
   5
  ],
  "optExpl": [
   "Correct: The curriculum requires recognising, showing and defending the consequences towards stakeholders.",
   "Correct: Accompanying the implementation includes checking and ensuring that code and architecture match.",
   "Correct: Clarifying and questioning requirements and constraints, including alignment with stakeholders, is an explicit task.",
   "Wrong: Schedule, budget and staff are the responsibility of project management; architects provide the technical consequences.",
   "Wrong: Business prioritisation lies with the product owner; architects advise e.g. on technical dependencies.",
   "Correct: Structural decisions on the building block structure, dependencies and interfaces are a core task."
  ],
  "explanation": "Architects are responsible for the solution: clarify requirements, structure, ensure consistency, defend consequences. Trap: budget/staffing (project management) and backlog order (PO) are not part of it."
 },
 "c1q6": {
  "q": "Which statements about internal and external software quality are correct?",
  "options": [
   "External quality is perceivable by users during operation.",
   "Maintainability belongs to external quality.",
   "High external quality proves a good internal structure.",
   "Internal quality can be measured with black-box tests.",
   "Weak internal quality can lower external quality in the long run."
  ],
  "correct": [
   0,
   4
  ],
  "optExpl": [
   "Correct: Performance, reliability or usability show up in the running system.",
   "Wrong: Maintainability concerns the internal structure and is internal – even if it indirectly affects users.",
   "Wrong: Cause and effect reversed: a system can work well today and still be hardly maintainable.",
   "Wrong: Black-box tests only check observable behaviour; internal quality requires e.g. code analysis or reviews.",
   "Correct: Poor structure leads over time to more defects and slower changes, which users then notice."
  ],
  "explanation": "External = perceivable in operation, internal = structure; weak internal quality eventually shows externally. Trap: the converse does not hold – good external quality does not prove good structure."
 },
 "c1q7": {
  "q": "A team has to choose the architectural style although important requirements are still open. What is most appropriate?",
  "options": [
   "First create a detailed design of all building blocks.",
   "Write an ADR so that the decision remains cheap to reverse.",
   "Decide as soon as all requirements have been signed off.",
   "Decide, record the assumptions and review them later."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: Big design up front is based on the same incomplete knowledge and merely moves the uncertainty into a plan.",
   "Wrong: An ADR makes the decision traceable but not cheaper to reverse – changing the style remains expensive.",
   "Wrong: Requirements are practically never complete; waiting only postpones risks.",
   "Correct: Architecture work happens under uncertainty; explicit assumptions make later review and iteration possible."
  ],
  "explanation": "Decide deliberately under uncertainty, document assumptions and review iteratively. Trap: an ADR creates traceability, not cheap reversibility."
 },
 "c1q8": {
  "q": "Which statements about the relationship between architecture and requirements are correct?",
  "options": [
   "The architecture determines which features the system offers.",
   "Constraints restrict the solution space from the start.",
   "Architecture decisions can create new requirements.",
   "Quality requirements primarily shape the overall structure.",
   "Functional requirements uniquely determine the building block structure."
  ],
  "correct": [
   1,
   2,
   3
  ],
  "optExpl": [
   "Wrong: Stakeholders determine the features; architecture makes the required functions and qualities achievable.",
   "Correct: Constraints such as technologies or budget must feed into the design from the beginning.",
   "Correct: Choosing cloud operation, for example, brings new operational, security and cost requirements.",
   "Correct: Functions can be implemented with many structures; quality requirements are what really constrain the solution.",
   "Wrong: The same functionality allows many structures; it does not determine the structure uniquely."
  ],
  "explanation": "Quality requirements and constraints shape the structure, and decisions feed back into requirements. Trap: architecture does not determine the functional scope."
 },
 "c1q9": {
  "q": "According to the curriculum, which activity belongs least to the tasks of software architects?",
  "options": [
   "Deciding on the GUI concept as a cross-cutting concern.",
   "Recognising independently when another iteration is needed.",
   "Analysing and evaluating the architecture with regard to risks.",
   "Designing the layout of individual screens."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: The curriculum explicitly names GUI, alongside persistence and communication, as a cross-cutting concern architects decide on.",
   "Wrong: For all tasks the curriculum requires recognising the need for iterations and enabling feedback.",
   "Wrong: Analysing and evaluating, especially regarding risks to the requirements, is a listed task.",
   "Correct: Detailed UI design is the responsibility of UX/UI design; architecture only decides the GUI as a cross-cutting concern."
  ],
  "explanation": "The GUI concept as a cross-cutting concern belongs to architecture, the layout of individual screens does not. Trap: 'GUI' sounds like UX but is explicitly a cross-cutting concern."
 },
 "k5": {
  "q": "A colleague summarizes core terms of software architecture. Assess each statement: correct or wrong?",
  "categories": [
   "Correct",
   "Wrong"
  ],
  "rows": [
   "A list of the building blocks with their interfaces already describes the architecture.",
   "Every component is a building block, but not every building block is a component.",
   "Even a system whose architecture was never consciously designed has an architecture.",
   "Component is the umbrella term, building block a specific kind of it.",
   "Besides provided operations, an interface can also describe required operations.",
   "The architecture of a system can be read completely from its source code."
  ],
  "explanation": "Building block is the umbrella term, component a specific kind – the reversal is the trap. Without the relationships between building blocks no architecture is described yet, and decisions with their rationale are not in the code."
 },
 "c1q10": {
  "q": "Which three statements describe goals of software architecture according to the CPSA-F curriculum?",
  "options": [
   "Ensuring that the functional requirements can be achieved as well.",
   "Specifying the building blocks in such detail that the implementation no longer has to make any design decisions of its own.",
   "Ensuring a shared understanding of the structures and concepts among all relevant stakeholders.",
   "Specifying architecture-relevant guidelines for implementation and operation.",
   "Designing the system so flexibly that future requirements can be implemented without structural changes.",
   "Defining the quality requirements the system must meet."
  ],
  "correct": [
   0,
   2,
   3
  ],
  "optExpl": [
   "Correct: Architecture does not only serve the qualities: according to the curriculum it should also ensure that the functional requirements can be met. The structure must be able to carry the functions.",
   "Wrong: Architecture defines the load-bearing structures, not every detail. Detailed design within the building blocks remains the developers' job – prescribing everything would be neither possible nor sensible.",
   "Correct: Architecture is also a means of communication: it ensures that all relevant stakeholders share the same picture of the system. Otherwise decisions and implementation drift apart.",
   "Correct: The curriculum names this explicitly as a goal: architecture sets guidelines that matter for structure and qualities, e.g. for error handling or operations. It does not mean style rules for every line of code.",
   "Wrong: This sounds like maintainability but is over-engineering: nobody can fully anticipate unknown future requirements. The goal is appropriate changeability, not freedom from change.",
   "Wrong: Quality requirements come from the stakeholders. Architecture is meant to achieve them, questioning and clarifying them along the way – it does not define them."
  ],
  "explanation": "Goals according to the curriculum include: ensuring functional requirements can be met, achieving the quality requirements, shared understanding, reducing complexity, architecture-relevant guidelines for implementation and operation. Defining requirements, making everything flexible up front or prescribing every detail are not among them."
 },
 "c1q11": {
  "q": "Which statements about stakeholders of a software architecture are correct?",
  "options": [
   "Stakeholders are the people with decision-making authority.",
   "Conflicts of interest between them are resolved together with them.",
   "The development team does not count, since it implements.",
   "Their circle is fixed after the requirements phase.",
   "IT operations can also be a stakeholder.",
   "For embedded systems, hardware development is one of them."
  ],
  "correct": [
   1,
   4,
   5
  ],
  "optExpl": [
   "Wrong: Too narrow: stakeholders are everyone with a legitimate interest in the system, not only sponsors or management.",
   "Correct: Responsibility does not mean deciding alone: conflicts are made transparent and resolved with the stakeholders.",
   "Wrong: Development is explicitly a stakeholder – it must be able to understand and implement the architecture.",
   "Wrong: New stakeholders often appear during the project; the list is maintained.",
   "Correct: The curriculum explicitly counts operations, data centres and production among the partners of the architecture role.",
   "Correct: Especially for hardware-related systems the curriculum names hardware development and system architecture as stakeholders."
  ],
  "explanation": "Stakeholders are all with a legitimate interest – including operations, development and possibly hardware development. Trap: not only decision-makers, and the circle is not static."
 },
 "c1q12": {
  "q": "Which properties most likely characterise a well-cut building block?",
  "options": [
   "Loose coupling to other building blocks.",
   "High cohesion between neighbouring building blocks.",
   "As fine a granularity as possible.",
   "As many public operations as possible for flexibility.",
   "High cohesion within the building block."
  ],
  "correct": [
   0,
   4
  ],
  "optExpl": [
   "Correct: Few, clearly defined dependencies via interfaces limit the impact of changes.",
   "Wrong: Mixed-up terms: cohesion refers to the inside of a building block; tight interweaving between blocks is coupling.",
   "Wrong: Small building blocks are not automatically cohesive; cutting too finely often increases coupling.",
   "Wrong: Wide interfaces expose internals and increase the coupling of clients to the building block.",
   "Correct: Related tasks are grouped together, so changes stay local."
  ],
  "explanation": "Well cut = high cohesion inside, loose coupling outside. Trap: cohesion applies within a building block, not between blocks, and 'small' does not mean 'cohesive'."
 },
 "c1q13": {
  "q": "Which statements about the interface of a building block are correct?",
  "options": [
   "It comprises the signatures but not guarantees.",
   "It can comprise provided and required operations.",
   "It can remain stable when the implementation changes.",
   "It is always used by exactly one building block.",
   "It describes the internal data structure of the building block."
  ],
  "correct": [
   1,
   2
  ],
  "optExpl": [
   "Wrong: Too narrow: the contract also includes guarantees such as pre- and postconditions or error behaviour.",
   "Correct: The interface is the externally visible contract – provided and possibly required operations including guarantees.",
   "Correct: That is exactly the purpose of encapsulation: internals change, the contract stays.",
   "Wrong: An interface can have any number of clients; that is often why it needs to be stable.",
   "Wrong: Internal data structures are an implementation detail; the interface is meant to hide them."
  ],
  "explanation": "The interface is a contract of provided/required operations and guarantees, hiding the internals. Trap: a signature alone is not yet a complete contract."
 },
 "c1q14": {
  "q": "Which statement most accurately describes the responsibility of a building block?",
  "options": [
   "The delimited task it is in charge of.",
   "The technology used to implement it.",
   "The sum of its public operations.",
   "The team that develops and operates it."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Responsibility is the WHAT: a clearly defined, cohesive task, delimited from other building blocks.",
   "Wrong: That is the HOW of the realisation, not the WHAT the building block stands for.",
   "Wrong: The operations realise the responsibility externally but do not fully define it.",
   "Wrong: Confused with organisational ownership: what is meant is the building block's functional/technical task."
  ],
  "explanation": "Responsibility = the WHAT, a delimited, cohesive task. Trap: neither the list of operations nor technology nor team ownership."
 },
 "c1q15": {
  "q": "In a project the code drifts away from the documented architecture over time. Which statements are correct?",
  "options": [
   "The code is authoritative; the documentation is updated accordingly.",
   "Architecture erosion is looming.",
   "Reviews and dependency checks can reveal deviations.",
   "Green tests show that the deviation is uncritical.",
   "Decide per deviation: bring the code back or adapt the architecture."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Wrong: Overgeneralisation: blanket updating legitimises unwanted violations too and silently abandons goals.",
   "Correct: Intended and actual architecture drift apart; the planned qualities are gradually lost.",
   "Correct: Manual reviews and tool-based dependency checks make violations visible.",
   "Wrong: Tests check functionality, not structure; maintainability can suffer despite green tests.",
   "Correct: Some deviations are mistakes, others are valid insights – this must be decided deliberately."
  ],
  "explanation": "Deviations mean a risk of erosion; you uncover them and decide deliberately case by case. Trap: green tests say nothing about the structure."
 },
 "c1q16": {
  "q": "How does software architecture relate to the abstraction levels of a system?",
  "options": [
   "Only the top decomposition level is architecturally relevant.",
   "Cohesion and coupling apply on every decomposition level.",
   "The levels correspond to the context, building block, runtime and deployment views.",
   "Decisions on one level do not affect lower levels.",
   "Every building block can be viewed as a black box or white box."
  ],
  "correct": [
   1,
   4
  ],
  "optExpl": [
   "Wrong: Lower levels can also contain fundamental decisions; the building block view deliberately has several levels.",
   "Correct: Design principles apply recursively – from the whole system down to fine-grained building blocks.",
   "Wrong: Confusing levels and views: views are perspectives, levels are the depth of refinement within a view.",
   "Wrong: Higher-level decisions frame the refinement; levels are not isolated from each other.",
   "Correct: On every level a building block can be shown from outside (black box) or in its internal decomposition (white box)."
  ],
  "explanation": "Architecture describes nested levels; principles and black-/white-box views apply on each of them. Trap: levels are not views."
 },
 "c1q17": {
  "q": "Which of the following does the curriculum name as goals of software architecture?",
  "options": [
   "Ensuring understanding among the relevant stakeholders.",
   "Systematically reducing complexity.",
   "Defining the functional scope of the system.",
   "Defining guidelines for implementation and operation.",
   "Ensuring adherence to budget and schedule.",
   "Making future changes of any kind cheap."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Correct: Structures and concepts should be understandable to all relevant stakeholders.",
   "Correct: Through decomposition, abstraction and clear responsibilities – one of the six goals.",
   "Wrong: Stakeholders define the functional scope; architecture ensures it can be implemented.",
   "Correct: Easily overlooked: architecture-relevant guidelines for implementation and operation are a goal of their own.",
   "Wrong: Architecture can support planning but guarantees neither budget nor schedule adherence.",
   "Wrong: Only anticipated changes can be deliberately eased; architecture does not make every change cheap."
  ],
  "explanation": "Goals: support implementation, achieve functions and qualities, understanding, reduce complexity, guidelines. Trap: no budget/schedule guarantee and no definition of features."
 },
 "c1q18": {
  "q": "What most likely characterises an iterative approach to architecture work?",
  "options": [
   "Postpone fundamental decisions until the last iteration.",
   "Let the architecture emerge purely from the code.",
   "Decide early and refine based on new insights.",
   "Redesign the architecture in every iteration."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: Postponing only shifts risks; iterative does not mean avoiding decisions.",
   "Wrong: Without deliberate overarching decisions there is no alignment with quality goals.",
   "Correct: Fundamental decisions are made early and reviewed and adapted over iterations.",
   "Wrong: Iterations refine and correct; a redesign every iteration would devalue fundamental decisions."
  ],
  "explanation": "Iterative = decide early, then review and refine. Trap: neither postponing, nor purely emergent architecture, nor constant redesign."
 },
 "c1q19": {
  "q": "How do software architecture and detailed design differ most?",
  "options": [
   "Architecture covers the overarching decisions that are hard to change.",
   "Architecture is created before, detailed design after a fixed milestone.",
   "Detailed design begins below a fixed building block size.",
   "Architecture describes the structure, detailed design the behaviour."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Architecture makes the system-wide load-bearing decisions; detailed design concretizes within these constraints.",
   "Wrong: Both evolve iteratively and in parallel. A fixed phase transition contradicts the iterative approach.",
   "Wrong: The boundary depends on the project and results from the scope of a decision, not from a size.",
   "Wrong: Both cover structure and behaviour – architecture also has a runtime view, for example. The difference lies in the scope of the decisions."
  ],
  "explanation": "Architecture = overarching decisions that are hard to change; detailed design = concretization within those constraints. The boundary is fixed neither by time nor by size, and both cover structure and behaviour."
 },
 "c1q20": {
  "q": "Which aspects of good communication does the curriculum expect from software architects?",
  "options": [
   "Primarily addressing development; the PO reaches the business units.",
   "Listening actively to understand concerns.",
   "Above all, presenting the finished result convincingly.",
   "Aligning verbally instead of justifying decisions in writing.",
   "Mediating between stakeholders.",
   "Justifying decisions in a way suited to the audience."
  ],
  "correct": [
   1,
   4,
   5
  ],
  "optExpl": [
   "Wrong: Too narrow: architects themselves communicate with all relevant stakeholders, including the business side.",
   "Correct: Communication is not a one-way street; according to the curriculum, listening is explicitly part of it.",
   "Wrong: Communication is central throughout the entire design, not only at the end.",
   "Wrong: Verbal alignment complements but does not replace documented, traceable justification.",
   "Correct: Architects stand between business, development, operations and management and must balance interests.",
   "Correct: The same decision is explained differently to management than to development – same content, adapted presentation."
  ],
  "explanation": "Mediate, listen, justify for the audience – continuously during design. Trap: communication is not a final presentation and no substitute for documentation."
 },
 "c1q21": {
  "q": "A team is unsure whether the chosen messaging product can handle the required load. What is an early proof of concept most likely for here?",
  "options": [
   "Checking the technical risk and feasibility early.",
   "Fixing the total effort of the project bindingly.",
   "Delivering a first production-ready version.",
   "Implementing all business functions end-to-end once."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: A PoC specifically tests a risky assumption of a fundamental decision before much is built on it.",
   "Wrong: A PoC provides insights for estimates but no binding determination of effort.",
   "Wrong: Confused with an MVP/increment: a PoC is deliberately not production-ready.",
   "Wrong: A PoC targets a specific risk, not functional completeness."
  ],
  "explanation": "A PoC tests risky assumptions of fundamental decisions early. Trap: it is neither an MVP, nor functionally complete, nor a binding estimate."
 },
 "c1q22": {
  "q": "What most likely characterises a 'good' software architecture?",
  "options": [
   "It optimises all quality attributes simultaneously.",
   "It is as simple as possible, but not simpler.",
   "It meets the quality goals under the given constraints.",
   "It is prepared for as many future requirements as possible.",
   "Its quality results from the proven patterns it uses."
  ],
  "correct": [
   1,
   2
  ],
  "optExpl": [
   "Wrong: Quality attributes compete (e.g. security ↔ usability); good architecture deliberately trades off.",
   "Correct: Unnecessary complexity hampers understanding and maintenance; oversimplification misses the requirements.",
   "Correct: Quality is relative to goals and constraints – there is no context-free best architecture.",
   "Wrong: Building in reserve without concrete need is over-engineering and increases complexity.",
   "Wrong: Patterns are tools; whether they fit depends on the context – they do not guarantee quality."
  ],
  "explanation": "Good = goals achieved under constraints and as simple as possible. Trap: patterns, building in reserve or 'maximise everything' do not make an architecture good."
 },
 "c1q23": {
  "q": "How are the terms 'building block' and 'component' most accurately distinguished?",
  "options": [
   "A component always groups several building blocks.",
   "Building block is the umbrella term, component a specific kind of it.",
   "A building block is a design-time unit, a component a runtime unit.",
   "Component is the umbrella term, building block a specific kind of it."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: Not a question of size: even a single fine-grained building block can be a component.",
   "Correct: Every component is a building block, but not every building block is a component.",
   "Wrong: The difference is not design time vs. runtime; both are primarily structural terms.",
   "Wrong: Exactly reversed – a classic exam trap."
  ],
  "explanation": "Building block = umbrella term, component = specific building block. Trap: it is about neither runtime vs. design nor size."
 },
 "c1q24": {
  "q": "Why does the CPSA-F curriculum not prescribe a single binding definition of software architecture?",
  "options": [
   "There are many definitions; their common core is taught.",
   "A binding definition only follows at Advanced Level.",
   "The definition depends on the chosen architectural style.",
   "A fixed definition would restrict the solution space."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: The curriculum refers to numerous definitions and works out their common aspects.",
   "Wrong: Confusion of levels: the Advanced Level also builds on the same core instead of a single definition.",
   "Wrong: A style is a solution decision; the concept of architecture itself is independent of style.",
   "Wrong: Definitions describe the term, not solutions; the solution space is restricted by requirements and constraints."
  ],
  "explanation": "Many accepted definitions – the curriculum uses their common core. Trap: solution space and architectural style have nothing to do with the term."
 },
 "c1q25": {
  "q": "According to the curriculum, what is the primary focus of CPSA-F?",
  "options": [
   "Technical infrastructure such as hardware and networks.",
   "The structure of entire application landscapes.",
   "Cross-system structure and use of data.",
   "Structures and concepts of individual software systems."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: That is infrastructure or technology architecture, also not in focus.",
   "Wrong: That is enterprise IT architecture – a separate domain outside the focus.",
   "Wrong: This describes information architecture, which the curriculum only delimits.",
   "Correct: The Foundation Level deals with the architecture of individual software systems."
  ],
  "explanation": "Focus: individual software systems. Trap: enterprise, information and infrastructure architecture are neighbouring domains that are only delimited."
 },
 "c1q26": {
  "q": "Which statements about the concept of structure in software architecture are correct?",
  "options": [
   "The structure follows unambiguously from the package structure of the code.",
   "A system usually has several structures.",
   "Relationships between building blocks are only shown by the runtime view.",
   "Structures are described in the building block view, not in other views.",
   "Interaction at runtime is also a structure."
  ],
  "correct": [
   1,
   4
  ],
  "optExpl": [
   "Wrong: The package structure is only one part; runtime and deployment aspects and rationale are not contained in it.",
   "Correct: Static and dynamic structures coexist and are described via different views.",
   "Wrong: Static dependencies already belong to the building block view; building blocks without relationships are not a structure.",
   "Wrong: Too narrow: the runtime and deployment views also describe structures of the system.",
   "Correct: Dynamic structures – how building blocks interact at runtime – belong to the architecture as well."
  ],
  "explanation": "Systems have several structures, static and dynamic. Trap: relationships already belong to the static structure, and structures are not limited to one view or the package structure."
 },
 "c1q27": {
  "q": "Which statement about the role of data models in architecture is most accurate?",
  "options": [
   "They are sensibly defined after the architecture.",
   "Their influence is limited to the persistence layer.",
   "They are often long-lived and expensive to change later.",
   "An ORM fully decouples them from the architecture."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: Data models shape the architecture and are therefore designed with it, not afterwards.",
   "Wrong: Data affects the building block cut, security, scalability and performance.",
   "Correct: Data often outlives several generations of applications; an unfavourable cut is expensive to correct.",
   "Wrong: An ORM at most decouples the storage representation, not the domain model from the structure."
  ],
  "explanation": "Data models shape the architecture and are long-lived. Trap: an ORM only separates the representation, not the influence of data on the architecture."
 },
 "c1q28": {
  "q": "On which abstraction levels are data models typically described?",
  "options": [
   "Business, logical and as a transfer format.",
   "Conceptual, logical and physical.",
   "Conceptual, logical and normalised.",
   "Context, building block and deployment level."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: Half-truth: transfer formats such as JSON are a representation from which the data model should be decoupled.",
   "Correct: Business model, technology-neutral structure and concrete implementation in a store – the classic three-way split.",
   "Wrong: Normalisation is a technique at the logical level, not an abstraction level of its own.",
   "Wrong: Confused with the architecture views, which describe system structures, not data models."
  ],
  "explanation": "Conceptual – logical – physical. Trap: normalisation is a technique and a transfer format just a representation, not a model level."
 },
 "c1q29": {
  "q": "Which statements about the connection between data model and architecture are correct?",
  "options": [
   "A data model shared directly by many building blocks increases coupling.",
   "A sum type allows any combination of its variants.",
   "Building blocks may have their own models for the same business object.",
   "The database schema should match the domain model 1:1.",
   "One schema per service is enough, even with mutual read access.",
   "Data ownership influences the functional cut of the building blocks."
  ],
  "correct": [
   0,
   2,
   5
  ],
  "optExpl": [
   "Correct: Every change to the shared model affects all users – the building blocks are tightly connected via the data.",
   "Wrong: Confused with product: a sum is exactly one of the variants (OR); this way invalid combinations can be ruled out.",
   "Correct: A 'customer' can be modelled differently in sales than in accounting; this decouples the building blocks.",
   "Wrong: The curriculum stresses decoupling the model from its representation in databases and formats.",
   "Wrong: Separate schemas do not help if all services still access foreign data directly – the coupling remains.",
   "Correct: Who owns and may change which data is an essential criterion for decomposition."
  ],
  "explanation": "Data ownership and shared models determine cut and coupling; own models per building block are legitimate. Traps: separate schemas without separate access, 1:1 schema, sum ≠ product."
 },
 "c2q1": {
  "q": "In a workshop, statements are collected and classified right away. Which classifications are correct?",
  "options": [
   "“Operation on the existing Kubernetes platform” – constraint.",
   "“Go-live by 30 June” – quality requirement.",
   "“Customers can cancel orders” – functional requirement.",
   "“Personal data stays in the EU” – functional requirement.",
   "“Response in under 2 s” – constraint.",
   "“New payment method can be added in 5 person-days” – quality requirement."
  ],
  "correct": [
   0,
   2,
   5
  ],
  "optExpl": [
   "Correct: The requirement restricts the solution space (existing infrastructure) but describes neither a function nor a quality.",
   "Wrong: A deadline is not a property of the product but an organizational constraint (time, budget, staff).",
   "Correct: Describes a capability of the system, i.e. WHAT it does.",
   "Wrong: Data protection rules are regulatory constraints. They limit e.g. the choice of cloud region and provider but are not a system function.",
   "Wrong: A numeric value makes a requirement measurable, not a constraint. The response time describes how well the system responds – a quality requirement.",
   "Correct: The statement describes how well the system can be changed (maintainability/flexibility), not a new function."
  ],
  "explanation": "Functional = WHAT, quality = HOW WELL, constraint = restriction of the solution space. Trap: numbers do not turn anything into a constraint, and deadlines or data protection are not product requirements."
 },
 "c2q2": {
  "q": "A team wants to look at quality requirements only after the functional implementation. Which statements about this are most accurate?",
  "options": [
   "Qualities are shaped significantly by the architecture.",
   "In agile projects, quality requirements only emerge through user feedback.",
   "Some of the later changes will then affect fundamental decisions.",
   "Missing qualities can be retrofitted by tuning individual building blocks.",
   "A load test before go-live ensures the required performance.",
   "Quality expectations that were never stated must still be met later."
  ],
  "correct": [
   0,
   2,
   5
  ],
  "optExpl": [
   "Correct: Distribution, decomposition and communication of building blocks determine which qualities are achievable – and these are fixed early.",
   "Wrong: Feedback sharpens quality requirements but does not replace clarifying them early – in agile projects, too, they shape the first structural decisions.",
   "Correct: Drivers such as availability or security affect distribution, data storage and interfaces – decisions that are expensive to change.",
   "Wrong: Local tuning helps with local bottlenecks. Qualities such as availability or scalability, however, depend on the basic structure and often require restructuring.",
   "Wrong: A test only determines whether a quality has been achieved. The architecture must enable it – a test does not make a poorly structured system faster.",
   "Correct: Implicit expectations, e.g. regarding security, apply even when unspoken. Discovering them late makes correcting them expensive."
  ],
  "explanation": "Qualities emerge from the architecture, not from late tuning or testing. Trap: tests and feedback detect or sharpen quality but do not enable it."
 },
 "c2q3": {
  "q": "Which of the following requirements are constraints?",
  "options": [
   "The project budget is firmly capped.",
   "The team only has experience with Java.",
   "The system must be available around the clock.",
   "Search responds in under 1 s in 95 % of cases.",
   "The already licensed database must be used.",
   "Personal data must be stored within the EU."
  ],
  "correct": [
   0,
   1,
   4,
   5
  ],
  "optExpl": [
   "Correct: Budget is an organizational constraint: it limits which solutions are possible at all.",
   "Correct: According to the curriculum, availability and qualification of staff are also organizational constraints.",
   "Wrong: This is a quality requirement (availability): it describes how good the system should be and does not restrict the solution path.",
   "Wrong: A measurable quality requirement (performance) – not a requirement on the solution path.",
   "Correct: A technical constraint: the architecture must adapt to the existing infrastructure.",
   "Correct: A regulatory constraint that restricts the solution space – e.g. in choosing the data centre."
  ],
  "explanation": "Constraints restrict the solution space: budget, regulation, existing technology, team know-how. Availability or response times are quality requirements – even if they sound strict."
 },
 "c2q4": {
  "q": "A stakeholder demands: “The system should be fast.” What most effectively makes this requirement verifiable?",
  "options": [
   "The requirement to use an in-memory database.",
   "Mapping it to the ISO 25010 characteristic performance efficiency.",
   "A scenario consisting of context, stimulus, response and measure.",
   "Specifying the analysis method used to check fulfilment.",
   "The target value “under 1 s” without specifying context and stimulus."
  ],
  "correct": [
   2,
   3
  ],
  "optExpl": [
   "Wrong: A technology requirement describes a solution (HOW), not the required behaviour. It also does not guarantee any specific response time.",
   "Wrong: Classifying it in a taxonomy clarifies which quality is meant but does not make it measurable – a target value is still missing.",
   "Correct: These are the four parts of a quality scenario according to the curriculum. Only then is it clear which value is to apply under which conditions.",
   "Correct: The curriculum requires a quality requirement to specify an analysis method – e.g. measurement in a load test or a model calculation.",
   "Wrong: A bare response measure is not yet a complete scenario: it remains open for which operation and under which load the value applies."
  ],
  "explanation": "“Fast” becomes verifiable through a complete quality scenario plus a defined analysis method. Trap: a bare number, a technology requirement or a classification in the quality model is not enough."
 },
 "c2q5": {
  "q": "An architect is new to the project and is to help clarify the requirements. Which tasks are part of this?",
  "options": [
   "Making implicit quality expectations explicit.",
   "Being responsible for the business prioritization of requirements.",
   "Pointing out technical consequences for prioritization.",
   "Uncovering gaps and contradictions in requirements.",
   "Defining missing requirements bindingly on her own.",
   "Not pursuing concerns that do not become requirements."
  ],
  "correct": [
   0,
   2,
   3
  ],
  "optExpl": [
   "Correct: Quality expectations often remain unspoken, yet they shape the architecture. That is why they must be put on the table.",
   "Wrong: This confuses contributing with being responsible: business prioritization lies with the client or product owner.",
   "Correct: Effort, risks and trade-offs are the basis for decisions that architects provide.",
   "Correct: Architects question requirements from a technical perspective and agree refinements with the stakeholders.",
   "Wrong: Gaps are bridged with documented assumptions that the business side confirms. Only the responsible stakeholders may define them bindingly.",
   "Wrong: Not every concern becomes a requirement, but it must still be considered – e.g. for validating requirements."
  ],
  "explanation": "Architects question, uncover gaps, make the implicit explicit and provide the technical basis for decisions. Trap: prioritizing and binding definition remain with the business side."
 },
 "c2q6": {
  "q": "A team maps well-known qualities to the product quality model of ISO/IEC 25010:2023. Which mapping is correct?",
  "options": [
   "Availability is a sub-characteristic of security.",
   "Scalability is a sub-characteristic of performance efficiency.",
   "Modularity is a sub-characteristic of flexibility.",
   "Scalability is a sub-characteristic of flexibility."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: Availability belongs to reliability. Security includes confidentiality, integrity and authenticity, among others.",
   "Wrong: Plausible, as scaling often serves performance. In the model, however, it belongs to flexibility.",
   "Wrong: Modularity belongs to maintainability, together with testability and analysability, among others.",
   "Correct: In the 2023 edition, scalability belongs to flexibility, alongside adaptability and installability, among others."
  ],
  "explanation": "In ISO/IEC 25010:2023, scalability belongs to flexibility, modularity to maintainability, availability to reliability. Trap: obvious topical proximity does not decide the placement in the model."
 },
 "c2q7": {
  "q": "From a requirements specification for an ordering system: which of the following statements are functional requirements?",
  "options": [
   "The failure of a server goes unnoticed by users.",
   "A confirmation is sent by e-mail after every order.",
   "Search returns results in under 200 ms.",
   "A sales report per branch is created every month.",
   "Customers can download invoices as PDF.",
   "The user interface can be operated entirely by keyboard."
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Wrong: Describes fault tolerance, i.e. how reliably the system delivers its functions – a quality requirement.",
   "Correct: A reaction of the system to a business event – hence a function.",
   "Wrong: The search itself would be the function. The response time describes HOW WELL it works – a quality requirement.",
   "Correct: Time-triggered processes are capabilities of the system, too, and thus functional requirements.",
   "Correct: Describes a capability users can invoke – WHAT the system does.",
   "Wrong: Sounds like a function but describes operability for certain user groups – a quality (interaction capability/accessibility)."
  ],
  "explanation": "Functional requirements describe capabilities of the system, including time-triggered ones. Trap: keyboard operability and unnoticed failures sound concrete but describe HOW WELL – qualities."
 },
 "k1": {
  "q": "A shop's requirements specification contains the following sentences. Assign each: functional requirement or quality requirement?",
  "categories": [
   "Functional requirement",
   "Quality requirement"
  ],
  "rows": [
   "If a server fails, another one takes over within 30 seconds.",
   "24 hours before the due date, the system sends a reminder email.",
   "After five failed attempts, the user account is locked for 15 minutes.",
   "A new language version of the UI can be added without changing code.",
   "New staff enter an order without training in under 3 minutes.",
   "The system displays prices in either euros or US dollars."
  ],
  "explanation": "Numbers alone do not make a quality requirement: locking after five attempts and a reminder after 24 hours describe WHAT the system does. Failover, extensibility and learnability describe HOW WELL it does something."
 },
 "k2": {
  "q": "These specifications exist for a new customer portal. Assign each: constraint or quality requirement?",
  "categories": [
   "Constraint",
   "Quality requirement"
  ],
  "rows": [
   "The first release must be live for the trade fair in March.",
   "Operations take place in the data center of a contractually bound partner.",
   "A new payment method can be integrated by one developer in under two person-days.",
   "According to data protection rules, personal data must not leave the EU.",
   "Unauthorized access to customer data is detected within 5 minutes.",
   "If one of three nodes fails, users notice no interruption."
  ],
  "explanation": "Legal requirements, deadlines and partnerships restrict the solution space – constraints. The trap: security topics are quality requirements as long as they describe required system behavior (HOW WELL) rather than an external mandate."
 },
 "c2q8": {
  "q": "Which of the following are top-level characteristics (not sub-characteristics) of the product quality model of ISO/IEC 25010:2023?",
  "options": [
   "Functional suitability.",
   "Availability.",
   "Testability.",
   "Compatibility.",
   "Reliability.",
   "Reusability."
  ],
  "correct": [
   0,
   3,
   4
  ],
  "optExpl": [
   "Correct: Surprising to many: ISO 25010 lists functionality itself as a quality characteristic – unlike e.g. IREB, which separates function and quality.",
   "Wrong: A sub-characteristic of reliability, not a top-level characteristic of its own.",
   "Wrong: Important for architects, but in the model a sub-characteristic of maintainability.",
   "Correct: A top-level characteristic: exchange with other systems and coexistence alongside them.",
   "Correct: A top-level characteristic with sub-characteristics such as availability, fault tolerance and recoverability.",
   "Wrong: Belongs to maintainability as a sub-characteristic."
  ],
  "explanation": "Compatibility, reliability and functional suitability are top-level characteristics. Trap: testability, availability and reusability are prominent qualities but only sub-characteristics."
 },
 "c2q9": {
  "q": "A project manager asks why quality requirements should already be clarified in the first iteration. Which justifications are correct?",
  "options": [
   "They determine the order in which features are implemented.",
   "They are often implicit and otherwise only become visible in operation.",
   "Trade-offs between qualities can be weighed consciously early on.",
   "They shape structural decisions that are expensive to change later.",
   "Once clarified early, they remain stable for the rest of the project.",
   "They determine which functions the system must offer."
  ],
  "correct": [
   1,
   2,
   3
  ],
  "optExpl": [
   "Wrong: The feature order follows from business prioritization by value, risk and effort. Qualities mainly affect the structure.",
   "Correct: Self-evident expectations are rarely voiced. Discovered late, correcting them is particularly expensive.",
   "Correct: E.g. security ↔ usability or memory usage ↔ performance efficiency: recognized early, they can be decided deliberately.",
   "Correct: Distribution, layering or data storage depend on qualities. Their drivers must therefore be known early.",
   "Wrong: Clarifying early does not mean freezing: quality requirements are sharpened iteratively and can change.",
   "Wrong: This confuses function and quality: qualities describe HOW WELL functions are delivered, not which ones."
  ],
  "explanation": "Clarify early because qualities shape the expensive basic structure, are often implicit and trade-offs must be decided early. Trap: they remain changeable and determine neither the feature order nor the functional scope."
 },
 "c2q10": {
  "q": "A stakeholder demands: “The system must also be operable by visually impaired users.” How is this most likely to be classified?",
  "options": [
   "As a functional requirement “screen reader function”.",
   "As a regulatory constraint according to WCAG.",
   "As a quality requirement (interaction capability/accessibility).",
   "As a stakeholder concern that is not a requirement."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: A read-aloud function would be one possible solution. What is demanded is a quality – requirement and solution are confused here.",
   "Wrong: A constraint would only arise if a standard or level were made mandatory. The demand says nothing about that.",
   "Correct: The demand describes HOW WELL the system can be operated by a user group. As a quality it can shape the architecture, e.g. separating presentation and logic.",
   "Wrong: Not every concern becomes a requirement – but here something is explicitly demanded that the system must fulfil."
  ],
  "explanation": "Operability for a user group is a quality requirement. Trap: a read-aloud function is a solution, and a constraint only arises from a mandatory standard."
 },
 "c2q11": {
  "q": "A team has to prioritize requirements for the next releases. Which statements about prioritization are correct?",
  "options": [
   "Once defined, the order applies until the release.",
   "Besides effort, business value and risk are taken into account.",
   "Quality requirements rank behind functional ones.",
   "Implementing architecturally risky requirements as late as possible.",
   "Contradictory requirements force conscious trade-offs."
  ],
  "correct": [
   1,
   4
  ],
  "optExpl": [
   "Wrong: Priorities are adjusted when new insights arise. A frozen order ignores feedback and changing risks.",
   "Correct: Effort alone says nothing about the benefit. Only with value and risk does a sensible order emerge.",
   "Wrong: Qualities are often the stronger architecture drivers. Ranking them lower across the board leads to expensive structural changes.",
   "Wrong: The other way round: risky items are tackled early, e.g. with a prototype or walking skeleton. Risks discovered late are more expensive.",
   "Correct: E.g. maximum security vs. minimal usage barriers: prioritization makes such conflicts decidable instead of leaving them open."
  ],
  "explanation": "Prioritization weighs value, risk and effort and resolves contradictions consciously. Trap: risky items come early, qualities are not generally lower-ranked, and priorities remain adjustable."
 },
 "c2q12": {
  "q": "According to the curriculum, what applies to the relationship between different qualities of a system?",
  "options": [
   "A single requirement can relate to several qualities.",
   "Every requirement belongs to exactly one quality characteristic.",
   "Conflicting goals can usually be resolved by the right technology.",
   "More configurability can reduce reliability.",
   "Caching improves performance without consequences for other qualities.",
   "Changing one quality can affect other qualities."
  ],
  "correct": [
   0,
   3,
   5
  ],
  "optExpl": [
   "Correct: “Login with 2FA in under 5 s” concerns security, usability and performance at the same time.",
   "Wrong: Contradicts the curriculum: a requirement can relate to several qualities at the same time.",
   "Wrong: Technology can mitigate a conflict but not make it disappear. The trade-off remains a conscious decision.",
   "Correct: Many switches mean many untested combinations – an example from the curriculum.",
   "Wrong: Caching buys performance efficiency with higher memory usage and possibly stale data – a classic trade-off.",
   "Correct: Qualities are interrelated, which is why trade-offs are needed – e.g. security ↔ usability."
  ],
  "explanation": "Qualities affect each other, and one requirement can concern several of them. Trap: even seemingly pure improvements such as caching have costs, and technology does not replace trade-offs."
 },
 "c2q13": {
  "q": "The design states: “The partner service is 99.9 % available.” Nobody has confirmed this. Which statements about this assumption are correct?",
  "options": [
   "It is a requirement that bindingly limits the solution space.",
   "As long as the system runs, it needs no further attention.",
   "If it turns out to be wrong, it shows which decision needs reviewing.",
   "It is a presumed but unconfirmed fact.",
   "It is avoided in the documentation as it makes decisions open to attack.",
   "It should be recorded explicitly and checked."
  ],
  "correct": [
   2,
   3,
   5
  ],
  "optExpl": [
   "Wrong: That describes a constraint. An assumption is precisely not bindingly prescribed but uncertain.",
   "Wrong: An assumption can turn out to be wrong at any time, e.g. under peak load. It remains a risk until it is confirmed.",
   "Correct: Because the assumption is documented, it is known which decision relied on it – e.g. doing without a queue.",
   "Correct: That is exactly what characterizes an assumption – it is presumed but not confirmed.",
   "Wrong: The other way round: the curriculum demands that assumptions be stated explicitly. Concealed assumptions are the real risk.",
   "Correct: Explicit assumptions can be questioned and verified e.g. with the operator; implicit ones lead to misunderstandings."
  ],
  "explanation": "Assumptions are uncertain facts and must be documented explicitly so they can be checked and affected decisions found. Trap: an assumption is not a constraint."
 },
 "c2q14": {
  "q": "Which of the following statements from a requirements catalogue are quality requirements?",
  "options": [
   "A report over 10 million records is ready in 30 s.",
   "Administrators can lock user accounts.",
   "The existing Oracle database is to be reused.",
   "New developers implement a typical change within one day.",
   "Unauthorized persons can neither read nor modify customer data."
  ],
  "correct": [
   0,
   3,
   4
  ],
  "optExpl": [
   "Correct: Describes the time behaviour of a function – performance, i.e. HOW WELL.",
   "Wrong: Sounds like security but describes a capability of the system – a functional requirement.",
   "Wrong: A requirement concerning existing infrastructure is a technological constraint, not a quality.",
   "Correct: Describes the modifiability of the system – a maintainability requirement.",
   "Correct: Confidentiality and integrity are sub-characteristics of security – a quality."
  ],
  "explanation": "Quality requirements describe HOW WELL: time behaviour, modifiability, confidentiality. Trap: a security-related function such as “lock accounts” remains functional, a database requirement is a constraint."
 },
 "c2q15": {
  "q": "Which of the following influencing factors does the curriculum count as organizational constraints?",
  "options": [
   "The services communicate exclusively via HTTPS.",
   "A framework contract with a fixed development partner.",
   "So far, the team only has experience with Java.",
   "A mandatory approval process for releases.",
   "Statutory retention periods for invoices.",
   "A reference architecture prescribed by the group."
  ],
  "correct": [
   1,
   2,
   3
  ],
  "optExpl": [
   "Wrong: A protocol requirement is a technological constraint.",
   "Correct: The curriculum explicitly names partnerships and cooperations as an organizational constraint (R2).",
   "Correct: Availability and qualification of staff are organizational, even though a technology is involved.",
   "Correct: Standards, guidelines and process models, e.g. approval and release processes, are organizational.",
   "Wrong: Legal requirements are regulatory constraints, not organizational ones.",
   "Wrong: Sounds like a corporate mandate, but the curriculum counts reference architectures as technological constraints."
  ],
  "explanation": "Organizational factors include partnerships, approval processes and the availability and qualification of the team. Trap: a reference architecture is technological, even if prescribed by the group."
 },
 "c2q16": {
  "q": "A team gathers quality requirements for a new portal. What do they typically derive from?",
  "options": [
   "From legal requirements, e.g. on data protection.",
   "From the building block view of the target system.",
   "From the client's business goals.",
   "From the stakeholders' concerns, e.g. those of operations.",
   "From the frameworks already chosen.",
   "From the chosen process model, e.g. Scrum."
  ],
  "correct": [
   0,
   2,
   3
  ],
  "optExpl": [
   "Correct: Data protection rules act as constraints and often entail security requirements.",
   "Wrong: Cause and effect reversed: the building block structure is a result that is meant to fulfil the quality requirements.",
   "Correct: Business goals such as “market launch in new countries” lead e.g. to requirements for scalability or adaptability.",
   "Correct: Stakeholder concerns such as easy monitoring or isolated testability are a main source of quality requirements.",
   "Wrong: Frameworks are solutions or constraints. Quality requirements should justify them, not follow from them.",
   "Wrong: The process model determines how work is done, not how good the product must be."
  ],
  "explanation": "Quality requirements come from business goals, stakeholder concerns and legal requirements. Trap: frameworks and building block structure are results or solutions, not sources."
 },
 "c2q17": {
  "q": "A customer's requirements document contains the sentence: “PostgreSQL is to be used for data storage.” How is this most likely to be classified?",
  "options": [
   "As a quality requirement for data storage.",
   "As a functional requirement for persistence.",
   "As a technological constraint.",
   "As an architectural decision of the team."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: A database can influence qualities, but the requirement describes not a HOW WELL but a WITH WHAT.",
   "Wrong: Storing may be a function, but the choice of product is not – it describes no capability of the system.",
   "Correct: The requirement prescribes a solution and restricts the solution space – software infrastructure is a technological constraint.",
   "Wrong: The requirement comes from the customer and is not negotiable for the team. An architectural decision is made by the team itself."
  ],
  "explanation": "An externally prescribed technology is a technological constraint. Trap: the fact that it touches qualities or persistence makes it neither a quality nor a functional requirement."
 },
 "c2q18": {
  "q": "A team records deliberately excluded points as non-goals in the project charter. Which statements about this are correct?",
  "options": [
   "A non-goal may still become a goal later on.",
   "They are a form of constraint for the design.",
   "They belong only in the team-internal documentation.",
   "They replace prioritizing the remaining requirements.",
   "They delimit the scope and prevent false expectations."
  ],
  "correct": [
   0,
   4
  ],
  "optExpl": [
   "Correct: Non-goals are temporary decisions. If priorities change, a new decision is made – ideally documented again.",
   "Wrong: A non-goal limits the scope, not the solution space. Constraints restrict HOW the problem may be solved.",
   "Wrong: They matter especially to stakeholders. Hidden non-goals create exactly the false expectations they are supposed to prevent.",
   "Wrong: Non-goals only state what is left out. The order of the remaining requirements still has to be defined.",
   "Correct: What is explicitly not delivered need not be guessed – this creates clarity for all stakeholders."
  ],
  "explanation": "Non-goals clarify the scope for all stakeholders and can change. Trap: they are not a constraint and do not replace prioritization."
 },
 "c2q19": {
  "q": "Which parts make up a quality scenario according to CPSA-F?",
  "options": [
   "Implementation effort (e.g. 5 person-days).",
   "Response (e.g. result list is displayed).",
   "Solution tactic (e.g. caching).",
   "Context (e.g. under full load).",
   "Measure (e.g. 95 % in under 1 s).",
   "Stimulus (e.g. 1,000 simultaneous requests)."
  ],
  "correct": [
   1,
   3,
   4,
   5
  ],
  "optExpl": [
   "Wrong: Effort is a planning figure, not part of the quality requirement.",
   "Correct: What the system does in response to the stimulus.",
   "Wrong: A scenario describes the requirement, not the solution. How it is achieved is decided later by the design.",
   "Correct: The operating state or environment in which the scenario applies.",
   "Correct: Only the measure makes the scenario verifiable.",
   "Correct: The trigger the system has to react to."
  ],
  "explanation": "Quality scenario = context · stimulus · response · measure. Solution tactic and effort are not part of it – the scenario describes the requirement, not its implementation."
 },
 "c2q20": {
  "q": "The business wants fast features, operations wants maximum stability – the two goals are incompatible. How do architects proceed appropriately?",
  "options": [
   "Deciding the conflict themselves based on technical feasibility.",
   "Making both goals maximally achievable via configuration.",
   "Documenting a justified prioritization or compromise.",
   "Involving the relevant stakeholders in the resolution.",
   "Always giving priority to short-term project goals.",
   "Making the conflicting concerns transparent."
  ],
  "correct": [
   2,
   3,
   5
  ],
  "optExpl": [
   "Wrong: Exactly the exam trap: it is about stakeholder goals, not only technology. Architects provide consequences but do not decide alone.",
   "Wrong: Sounds elegant but merely postpones the conflict and pays for it with complexity and untested combinations.",
   "Correct: When documented, it remains traceable why a decision was made – important when circumstances change.",
   "Correct: According to the curriculum, such conflicts are resolved together with the relevant stakeholders, not single-handedly.",
   "Wrong: Conflicts between short- and long-term goals must be weighed, not decided across the board – otherwise maintainability, for example, suffers permanently.",
   "Correct: Only a visible conflict can be decided consciously. Hidden conflicts erupt later in an uncontrolled way."
  ],
  "explanation": "Stakeholder conflicts are made visible, resolved with those involved and the decision documented. Trap: architects do not decide alone on technical grounds, and configurability does not resolve a conflict of goals."
 },
 "c2q21": {
  "q": "A colleague summarizes the 2023 revision of ISO/IEC 25010. Which of his statements is correct?",
  "options": [
   "Safety was added as a top-level characteristic.",
   "Security was integrated into reliability.",
   "Functional suitability was removed from the model.",
   "Usability remained a top-level characteristic under that name."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: In the 2023 edition, safety is a top-level characteristic of its own, alongside security.",
   "Wrong: Security is still a top-level characteristic of its own, with confidentiality and integrity, among others.",
   "Wrong: Plausible, as e.g. IREB separates function and quality – but ISO 25010 still lists functional suitability as a top-level characteristic.",
   "Wrong: The characteristic is now called interaction capability."
  ],
  "explanation": "In 2023, safety was added as a top-level characteristic and usability is now called interaction capability. Trap: security and functional suitability remain top-level characteristics."
 },
 "c2q22": {
  "q": "At the start of a project, the stakeholders are to be identified. Which approaches are sensible?",
  "options": [
   "Identifying the stakeholders conclusively once at project start.",
   "Also including indirectly affected parties such as operations or support.",
   "Asking known stakeholders about further affected parties.",
   "Restricting oneself to stakeholders with budget responsibility.",
   "Adopting the roles from the client's organization chart."
  ],
  "correct": [
   1,
   2
  ],
  "optExpl": [
   "Wrong: Stakeholders and their concerns change over time. The analysis is therefore repeated, not completed once.",
   "Correct: Operations, support or QA do not use the system for business purposes but have concerns that shape the architecture.",
   "Correct: Every stakeholder knows further parties (snowball principle) – this way one also finds roles that are not on any list.",
   "Wrong: Influence on the budget says nothing about architecture-relevant concerns – e.g. those of operations.",
   "Wrong: A good starting point but incomplete: external parties, partners or authorities are not shown there."
  ],
  "explanation": "Stakeholders are found by asking around and by also considering indirectly affected parties. Trap: the organization chart, budget responsibility or a one-off survey do not give a complete picture."
 },
 "c2q23": {
  "q": "A team notices that the building block boundaries of its system match the department boundaries exactly. Which statement correctly describes Conway's law?",
  "options": [
   "System structures mirror the communication structures of the organization.",
   "Systems in use must change or they lose their usefulness.",
   "Adding staff delays a late project further.",
   "Teams adapt their communication to the system structure."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: That is Conway's law: the structure of a system tends to mirror the communication structures of the organization that develops it.",
   "Wrong: This describes Lehman's laws of software evolution.",
   "Wrong: That is Brooks' law about project staffing, not Conway's law.",
   "Wrong: The direction of effect is reversed: according to Conway, the organization shapes the system, not the other way round."
  ],
  "explanation": "Conway's law: the organization shapes the system structure. Trap: the reversed direction of effect as well as Brooks' law and Lehman's laws are something else."
 },
 "c2q24": {
  "q": "After go-live, users complain about things nobody ever asked for. Which statements about such implicit requirements are correct?",
  "options": [
   "They only apply once they have been written down.",
   "Clarifying them is solely the client's responsibility.",
   "They mainly concern functional requirements.",
   "They are often based on expectations considered self-evident.",
   "They easily lead to misunderstandings between stakeholders."
  ],
  "correct": [
   3,
   4
  ],
  "optExpl": [
   "Wrong: Users expect them nonetheless. Writing them down makes them verifiable, but it does not make them valid in the first place.",
   "Wrong: Architects are supposed to make assumptions and expectations explicit actively instead of hoping for complete specifications.",
   "Wrong: The other way round: qualities such as security or response time in particular often remain unspoken.",
   "Correct: What stakeholders consider self-evident, they do not mention – it still applies.",
   "Correct: The curriculum stresses that implicit assumptions are interpreted differently by everyone."
  ],
  "explanation": "Implicit requirements are based on things taken for granted, often concern qualities and cause misunderstandings. Trap: they apply even unwritten, and clarifying them is also the architects' task."
 },
 "c2q25": {
  "q": "Two stakeholders are in dispute. How does a substantive conflict most likely differ from a conflict of interests?",
  "options": [
   "Substantive conflicts arise in IT, conflicts of interests in the business.",
   "Substantive: facts or solutions – conflict of interests: incompatible goals.",
   "Conflicts of interests are mostly resolved by additional facts.",
   "Substantive: incompatible goals – conflict of interests: solutions."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: The type of conflict depends on the subject, not on who is involved.",
   "Correct: A substantive conflict can often be settled with information, a conflict of interests requires weighing or a compromise.",
   "Wrong: That applies to substantive conflicts. Different goals remain even with more facts.",
   "Wrong: The terms are exactly swapped."
  ],
  "explanation": "Substantive conflicts revolve around facts or solutions, conflicts of interests around incompatible goals. Trap: more facts do not resolve a conflict of interests, and those involved do not determine the type of conflict."
 },
 "c2q26": {
  "q": "Which statements correctly characterize constraints in the sense of the curriculum?",
  "options": [
   "They also affect the architecture work itself, not only the design.",
   "They only apply if the client specifies them in writing.",
   "Architectural decisions cannot create new constraints.",
   "They are particularly binding quality requirements.",
   "They can be technological, organizational or regulatory.",
   "If a constraint changes, existing decisions may no longer hold."
  ],
  "correct": [
   0,
   4,
   5
  ],
  "optExpl": [
   "Correct: Constraints such as approval processes or team availability also shape the development process (R2).",
   "Wrong: Unwritten factors such as team qualification or corporate culture act as constraints, too.",
   "Wrong: They can: decisions create follow-up requirements, e.g. messaging creates new requirements for operations and monitoring.",
   "Wrong: Quality requirements are product-related requirements, whereas constraints restrict the solution space.",
   "Correct: The curriculum distinguishes exactly these types, complemented by trends as a further influencing factor.",
   "Correct: E.g. a new data protection rule that changes the choice of cloud region – architects should be able to explain such consequences."
  ],
  "explanation": "Constraints are technological, organizational or regulatory, also affect the process and can change. Trap: they need not be written down and are not quality requirements."
 },
 "c2q27": {
  "q": "A product owner wants to classify requirements using the Kano model. What correctly describes the Kano model?",
  "options": [
   "Basic, performance and delight features by effect on satisfaction.",
   "Business value and effort in a four-quadrant matrix.",
   "Probability and impact of requirement risks.",
   "Must, should, could and won't by urgency."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Kano distinguishes features by how their presence or absence affects customer satisfaction.",
   "Wrong: A value-effort matrix is a separate prioritization tool; Kano looks at the effect on satisfaction.",
   "Wrong: This describes a risk assessment, not a satisfaction model.",
   "Wrong: That is MoSCoW, a prioritization technique – not Kano."
  ],
  "explanation": "Kano classifies features by their effect on satisfaction into basic, performance and delight features. Trap: MoSCoW, risk assessment and value-effort matrices are different tools."
 },
 "c3q1": {
  "q": "Which statements about coupling and cohesion of building blocks are correct?",
  "options": [
   "Inheritance and creation are also kinds of coupling.",
   "Efferent coupling: other building blocks use this building block.",
   "Events instead of direct calls eliminate the functional coupling.",
   "Cohesion measures how strongly a building block depends on others.",
   "High cohesion: a building block serves a clearly defined purpose.",
   "Many afferent dependencies make changes to the building block risky."
  ],
  "correct": [
   0,
   4,
   5
  ],
  "optExpl": [
   "Correct: Besides usage and messages, the curriculum explicitly lists inheritance, creation, composition and temporal coupling.",
   "Wrong: Swapped: efferent is outgoing (this building block uses others); incoming dependencies are afferent.",
   "Wrong: According to the curriculum, dynamic coupling does not necessarily reduce coupling: message format and meaning remain shared dependencies.",
   "Wrong: That describes coupling. Cohesion concerns the internal togetherness of a building block's elements.",
   "Correct: What belongs together functionally is kept together – that is exactly what high cohesion means.",
   "Correct: Afferent means incoming: many others depend on this building block, so every change to it has a wide impact."
  ],
  "explanation": "Coupling concerns relationships between building blocks, cohesion the internal togetherness. Traps: efferent/afferent swapped and the assumption that events eliminate functional coupling."
 },
 "c3q2": {
  "q": "Which statements correctly describe the principle of information hiding according to Parnas?",
  "options": [
   "Hiding volatile design decisions behind an interface.",
   "Changing the storage format without having to adapt the users.",
   "Exposing internals is acceptable as long as they are documented.",
   "Bundling data and the operations on it into one unit.",
   "Goal: anticipated changes stay local to one building block."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Correct: Core of the principle: whatever is likely to change is hidden behind a stable interface.",
   "Correct: A typical example: the format is a hidden secret of the building block; only the interface is visible from outside.",
   "Wrong: Documentation does not change the fact that users become coupled to the internals. That is exactly what the principle aims to prevent.",
   "Wrong: That is encapsulation – the means used to implement information hiding, not the principle itself.",
   "Correct: Information hiding aims at local modifiability; users of the building block remain unaffected."
  ],
  "explanation": "Information hiding hides volatile decisions so that changes stay local. The trap is confusing it with encapsulation, which is only the means to it."
 },
 "c3q3": {
  "q": "What does the 'S' in the SOLID principles stand for?",
  "options": [
   "Segregation: cutting small, client-specific interfaces.",
   "Substitution: subtypes must be able to replace their base types.",
   "Single responsibility: only one public method per class.",
   "Single responsibility: only one reason to change."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: That describes the interface segregation principle – the 'I' in SOLID.",
   "Wrong: That is the Liskov substitution principle – the 'L' in SOLID.",
   "Wrong: Right name, wrong interpretation: it is about the reason to change, not about the number of methods.",
   "Correct: The SRP requires a building block to have only one responsibility and therefore only one reason to change."
  ],
  "explanation": "'S' = single responsibility principle: one reason to change per building block. Traps are the 'one method' interpretation and the letters L (substitution) and I (segregation)."
 },
 "c3q4": {
  "q": "Which statements about the layered architecture (layers) are correct?",
  "options": [
   "In the strict (closed) variant, a layer may skip a lower layer if this improves performance.",
   "In the open (relaxed) variant, a layer may also use layers further down directly.",
   "A lower layer may notify higher layers via a callback interface it defines itself without violating the layering.",
   "Each layer typically corresponds to its own tier, so every additional layer brings additional network communication.",
   "Dependencies from a lower to a higher layer are considered a layering violation.",
   "Additional layers add indirection and can come at the expense of runtime performance."
  ],
  "correct": [
   1,
   2,
   4,
   5
  ],
  "optExpl": [
   "Wrong: Skipping is precisely the characteristic of open (relaxed) layering. In the strict variant a layer may only use the layer directly below it – not even for performance reasons.",
   "Correct: Open layering allows skipping layers, but dependencies still only point downwards. You gain performance and simplicity but lose some replaceability.",
   "Correct: The callback interface belongs to the lower layer and the higher layer implements it. The code dependency therefore still points downwards; only the call runs upwards at runtime – as with the observer pattern.",
   "Wrong: Layers are a logical structure, tiers a physical distribution. Several layers can run in the same process without any problem – a new layer does not automatically mean network calls.",
   "Correct: Layering means that dependencies only point from top to bottom. If a lower layer knows a higher one, a backward dependency arises that violates the layering.",
   "Correct: Each layer adds an indirection through which calls and data are passed. This can cost runtime – a typical trade-off against better changeability."
  ],
  "explanation": "Layers: dependencies only downwards; callbacks via an interface of the lower layer are allowed. Strict = only the layer directly below, open = skipping allowed. Layers are logical – not every layer is its own tier."
 },
 "c3q5": {
  "q": "A team structures its application according to ports and adapters. Which statements apply to this pattern?",
  "options": [
   "Onion and clean architecture are regarded as related variants.",
   "The domain core defines the ports.",
   "The domain core calls the adapter classes directly.",
   "Adapters connect the database or UI to the ports.",
   "Requires operation as microservices.",
   "A port is the concrete JDBC implementation."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Correct: The curriculum names onion, hexagonal and clean architecture as synonyms or variants of ports and adapters.",
   "Correct: Ports are technology-neutral interfaces that the domain core specifies from its own perspective.",
   "Wrong: Then the domain logic would depend on technology. The dependency points from the adapter to the port, not the other way round.",
   "Correct: Adapters are the concrete, technology-specific connections and can be replaced.",
   "Wrong: The pattern structures internal dependencies and works just as well in a monolith.",
   "Wrong: Confusion: the concrete implementation is the adapter; the port is the abstract interface."
  ],
  "explanation": "Ports belong to the domain core, adapters are the replaceable technology. Traps: port and adapter swapped and the assumption that the pattern requires microservices."
 },
 "c3q6": {
  "q": "Which statements typically apply to microservices?",
  "options": [
   "The overall effort for testing and operation decreases.",
   "Transactions across services are as simple as in a monolith.",
   "Each service can be deployed independently.",
   "Operational complexity increases.",
   "One service per layer: UI, logic, data.",
   "Each service manages its own data."
  ],
  "correct": [
   2,
   3,
   5
  ],
  "optExpl": [
   "Wrong: Individual services are smaller, but the overall system becomes more expensive to test and operate.",
   "Wrong: Distributed transactions are considerably harder; usually you work with eventual consistency or sagas.",
   "Correct: Independent deployment is a core characteristic – services can be released separately.",
   "Correct: Distribution brings monitoring, network failures and failure scenarios that a monolith does not have in this form.",
   "Wrong: Microservices are cut along business lines, not technical layers. A layer-based cut creates tightly coupled services.",
   "Correct: Own data storage behind the interface prevents coupling via a shared database."
  ],
  "explanation": "Microservices: cut along business lines, independently deployable, own data – at the price of higher operational complexity and harder consistency across service boundaries."
 },
 "c3q7": {
  "q": "Which of the following count as fundamental design principles according to the CPSA-F curriculum?",
  "options": [
   "Expect errors (robustness principle).",
   "Maximum reuse.",
   "Open/closed principle.",
   "Abstraction.",
   "Configuration over code.",
   "Conceptual integrity."
  ],
  "correct": [
   0,
   2,
   3,
   5
  ],
  "optExpl": [
   "Correct: Easily overlooked: 'expect errors' as a generalisation of Postel's law is in the curriculum.",
   "Wrong: Sounds like a principle but is not one: reuse across functional boundaries often increases coupling.",
   "Correct: The OCP belongs to the R1 content as part of modularisation.",
   "Correct: Developing appropriate generalisations; building blocks depend on abstractions.",
   "Wrong: Not a design principle of the curriculum; excessive configurability increases complexity.",
   "Correct: Similar problems are solved in similar ways – an explicitly named principle."
  ],
  "explanation": "The curriculum names, among others, abstraction, modularisation (incl. OCP), conceptual integrity and 'expect errors'. Maximum reuse and configurability sound good but are not among these principles."
 },
 "c3q8": {
  "q": "Which of the following are typical cross-cutting concerns?",
  "options": [
   "Authentication and authorization.",
   "Shipping costs displayed by several dialogs.",
   "Concurrency.",
   "Validating order data in the order module.",
   "Energy efficiency.",
   "Error handling."
  ],
  "correct": [
   0,
   2,
   4,
   5
  ],
  "optExpl": [
   "Correct: Access protection affects almost all building blocks and interfaces.",
   "Wrong: Being displayed in several places does not make it cross-cutting: the calculation belongs to one building block.",
   "Correct: Threading and locking concepts must be uniform system-wide, otherwise deadlocks and inconsistencies loom.",
   "Wrong: This concerns only one building block and is therefore business logic. Only a system-wide validation concept would be cross-cutting.",
   "Correct: The curriculum explicitly names energy efficiency as a cross-cutting concern.",
   "Correct: Errors arise in all building blocks; a uniform concept prevents each from reacting differently."
  ],
  "explanation": "Cross-cutting concerns affect many building blocks: e.g. error handling, security, concurrency, persistence, energy efficiency. Business logic stays business logic – even if its result is displayed in several places."
 },
 "c3q9": {
  "q": "You are to combine an existing payment library and a legacy system core into larger structures. Which statement is most accurate?",
  "options": [
   "View-based: the existing parts form the deployment view.",
   "Bottom-up: assembling existing parts into larger units.",
   "Bottom-up; afterwards top-down work is no longer allowed.",
   "Top-down: refining given parts step by step."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: The library and legacy system are building blocks, not a deployment view; moreover this does not describe the design direction.",
   "Correct: Bottom-up fits when a lot of existing material must be used.",
   "Wrong: The addition is wrong: in practice both directions are combined and switched iteratively.",
   "Wrong: Top-down decomposes the whole into parts; assembling existing parts is the opposite direction."
  ],
  "explanation": "Assembling from existing parts is bottom-up, decomposing the whole is top-down. The trap: you need not commit to one direction – both are combined."
 },
 "c3q10": {
  "q": "Which statements about the benefit of abstraction and modularisation in design are correct?",
  "options": [
   "The number of interfaces decreases because building blocks do more themselves.",
   "Unnecessary abstractions can reduce understandability.",
   "They make complexity manageable.",
   "Every additional layer increases modifiability.",
   "Implementations can be swapped behind interfaces."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Wrong: The opposite: modularisation creates explicit interfaces between building blocks.",
   "Correct: The curriculum explicitly names this limit: too many abstractions make a system harder to understand.",
   "Correct: Decomposition into building blocks with clear interfaces allows parts to be understood and changed separately.",
   "Wrong: Overgeneralisation: a layer without need costs effort and understandability without easing changes.",
   "Correct: Interfaces are abstractions; users do not depend on the concrete implementation."
  ],
  "explanation": "Abstraction and modularisation make complexity manageable and implementations replaceable. Trap: more abstraction is not automatically better."
 },
 "c3q11": {
  "q": "For which scenario is the pipes and filters pattern most suitable?",
  "options": [
   "Specialist modules solve a problem via a shared knowledge store.",
   "ETL pipeline: import, cleanse, enrich, export.",
   "Wizard in which users jump freely between steps.",
   "Separate models for write and read access."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: That describes the blackboard pattern; filters specifically share no common state.",
   "Correct: Independent processing steps that pass data on – a classic case for pipes and filters.",
   "Wrong: Interactive, freely branching flows fit poorly with a directed processing chain.",
   "Wrong: That is CQRS – a different pattern that separates writing and reading."
  ],
  "explanation": "Pipes and filters fits directed, multi-stage processing chains with independent filters. Traps are interactive flows and confusion with blackboard or CQRS."
 },
 "c3q12": {
  "q": "Which statement about the difference between synchronous and asynchronous communication is correct?",
  "options": [
   "Asynchronously, the functional dependency on the receiver disappears.",
   "Asynchronously, sender and receiver must be available at the same time.",
   "Local calls are synchronous, remote ones asynchronous.",
   "With synchronous calls the caller waits for the response; asynchronously it does not."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: Only temporal coupling decreases; message format and meaning remain shared dependencies.",
   "Wrong: Swapped: simultaneous availability is a characteristic of synchronous communication.",
   "Wrong: Local/remote and synchronous/asynchronous are independent characteristics; remote calls are often synchronous too (e.g. RPC).",
   "Correct: Asynchronous communication decouples sending from processing in time; synchronously the caller blocks until the response."
  ],
  "explanation": "Synchronous means waiting blocked, asynchronous decouples in time. Traps: asynchrony does not remove the functional dependency and does not depend on local/remote."
 },
 "c3q13": {
  "q": "A team discusses how to deal with technical debt. Which statements are correct?",
  "options": [
   "They affect the code, not the architecture.",
   "They arise almost exclusively from a lack of team competence.",
   "Left untreated, they make future changes more expensive.",
   "They should be made visible and prioritised.",
   "They should be fully paid off before every new feature.",
   "They can arise deliberately or inadvertently."
  ],
  "correct": [
   2,
   3,
   5
  ],
  "optExpl": [
   "Wrong: Architecture decisions can also be deferred compromises – often the most expensive debt.",
   "Wrong: Too narrow: deliberate compromises and changed requirements also create technical debt.",
   "Correct: Like interest: every further change to burdened code or architecture becomes more costly.",
   "Correct: Only known debt can be weighed against other goals and reduced in a targeted way.",
   "Wrong: Overgeneralisation: debt is prioritised and reduced selectively, not wholesale before every extension.",
   "Correct: Deliberately, e.g. as a shortcut under time pressure; inadvertently through lack of knowledge."
  ],
  "explanation": "Technical debt consists of deferred compromises in code and architecture, arising deliberately or inadvertently. It is made visible and prioritised rather than paid off wholesale before every feature."
 },
 "c3q14": {
  "q": "The domain logic is to store customer data without depending on the database technology. Which statements about the DIP are correct?",
  "options": [
   "The abstraction belongs to the module that implements it.",
   "The abstraction belongs to the using domain logic.",
   "Passing dependencies in from outside instead of creating them.",
   "A DI framework fulfils the principle automatically.",
   "Domain logic and DB adapter depend on an abstraction."
  ],
  "correct": [
   1,
   4
  ],
  "optExpl": [
   "Wrong: Then the domain logic would still depend on the technology module – no inversion would take place.",
   "Correct: The domain logic defines the interface; thus the dependency points from technology to domain logic.",
   "Wrong: That defines dependency injection, not the DIP. The DIP concerns the direction of the dependency.",
   "Wrong: DI is a technique that can support the DIP. A framework can just as well inject concrete classes.",
   "Correct: Both sides depend on the interface (e.g. 'customer repository'), not the domain logic on the detail."
  ],
  "explanation": "DIP: both sides depend on an abstraction owned by the using side. The trap is equating it with dependency injection, which is merely a supporting technique."
 },
 "k3": {
  "q": "The following terms come up in an architecture review. Assign each: architectural pattern or design principle?",
  "categories": [
   "Architectural pattern",
   "Design principle"
  ],
  "rows": [
   "Information hiding",
   "Dependency injection",
   "Broker",
   "Dependency inversion principle",
   "CQRS"
  ],
  "explanation": "The trap is similar names: dependency inversion is a principle, dependency injection a pattern used, among other things, to implement it. Broker and CQRS are patterns (concrete solution templates); information hiding is a guideline."
 },
 "c3q15": {
  "q": "Which statements about separation of concerns are correct?",
  "options": [
   "Handling different concerns in separate building blocks.",
   "Business rules and persistence reside in separate building blocks.",
   "SoC is another name for the SRP.",
   "Every concern needs its own technical layer.",
   "Domain logic can be tested without technology."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Correct: That is the definition of the principle in the curriculum.",
   "Correct: A typical application: domain and technical aspects change for different reasons.",
   "Wrong: SoC is more general; the SRP is a specific form at class level.",
   "Wrong: SoC is not tied to layers; concerns can also be separated by domain or by module.",
   "Correct: A consequence of the separation: domain logic can be tested without database or UI."
  ],
  "explanation": "SoC handles different concerns in separate building blocks, e.g. domain and technical aspects. Traps: equating SoC with the SRP or tying it to technical layers."
 },
 "c3q16": {
  "q": "Which statement most accurately describes the DRY principle?",
  "options": [
   "Syntactically identical code is always merged.",
   "Applies to source code, not to configuration or docs.",
   "Every piece of knowledge has exactly one authoritative representation.",
   "Keeping solutions as simple as possible."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: Coincidentally identical code with different functional reasons is not duplicated knowledge; merging it creates needless coupling.",
   "Wrong: Too narrow: duplicated configuration values or documentation also violate DRY.",
   "Correct: DRY targets knowledge and decisions – in code, configuration or documentation.",
   "Wrong: That describes KISS – related in its motive of reducing complexity, but a different principle."
  ],
  "explanation": "DRY: every piece of knowledge represented authoritatively exactly once. Trap: reducing DRY to textually identical code or to source code only."
 },
 "c3q17": {
  "q": "A developer proposes building in several extension points now, 'just in case'. Which principle argues most directly against this?",
  "options": [
   "YAGNI: do not build functionality in advance.",
   "Information hiding: hiding volatile decisions.",
   "OCP: open for extension, closed for modification.",
   "Conceptual integrity: solving similar things similarly."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Speculative extension points are functionality built in advance that nobody needs right now.",
   "Wrong: Information hiding concerns hiding foreseeable changes, not refraining from speculative functionality.",
   "Wrong: The OCP is often cited as a justification for such extension points – it does not argue against them.",
   "Wrong: Uniformity says nothing about whether functionality should be built in advance."
  ],
  "explanation": "YAGNI is directed against speculative generalisation in advance. Trap: OCP sounds relevant but tends to be used as an argument for extension points."
 },
 "c3q18": {
  "q": "Which statements about architectural patterns are correct?",
  "options": [
   "Architectural and design patterns are synonyms.",
   "Every pattern has drawbacks as well as benefits.",
   "They help to achieve certain qualities in a context.",
   "Proven solution templates for recurring structural problems.",
   "A system should use only one architectural pattern.",
   "They can be transferred to any system without adaptation."
  ],
  "correct": [
   1,
   2,
   3
  ],
  "optExpl": [
   "Wrong: The curriculum distinguishes pattern categories; design patterns such as adapter usually act at a finer granularity.",
   "Correct: That is why their use must be weighed deliberately.",
   "Correct: Patterns are a way to achieve qualities – but only for given problems in a given context.",
   "Correct: This is how the curriculum defines architectural patterns.",
   "Wrong: Real systems often combine several patterns, e.g. microservices that are internally layered.",
   "Wrong: Patterns are abstract templates and must be adapted to the concrete problem."
  ],
  "explanation": "Architectural patterns are proven, context-dependent solution templates with pros and cons. Traps: one pattern per system, transfer without adaptation, equating them with design patterns."
 },
 "c3q19": {
  "q": "Which elements does the model-view-controller (MVC) pattern separate?",
  "options": [
   "Presentation, application and data layer.",
   "Domain core, ports and technical adapters.",
   "Write model, read model and event store.",
   "Data model, presentation and control of interaction."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: That is a three-layer architecture. MVC separates user interface concerns, not system layers.",
   "Wrong: These are the elements of ports and adapters.",
   "Wrong: That mixes CQRS and event sourcing – different patterns.",
   "Correct: MVC separates data (model), presentation (view) and interaction control (controller)."
  ],
  "explanation": "MVC separates model, view and controller within the user interface. The main trap is equating it with the three technical layers."
 },
 "c3q20": {
  "q": "Which measures promote loose coupling between building blocks?",
  "options": [
   "Fine-grained interfaces with many individual calls.",
   "Communication via clearly defined interfaces.",
   "Grouping functionally related elements in the same building block.",
   "Central utility library on which all building blocks depend.",
   "Passing dependencies via dependency injection.",
   "Shared database schema for direct data exchange."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Wrong: 'Chatty' interfaces expose many details and increase dependency.",
   "Correct: Users depend only on the contract, not on internals.",
   "Correct: High cohesion reduces the need for external relationships.",
   "Wrong: Looks DRY, but creates a dependency through which changes spread everywhere.",
   "Correct: Externalisation: the concrete dependency is determined only at installation or run time.",
   "Wrong: Convenient, but it couples everyone to the same structures; every schema change affects all."
  ],
  "explanation": "Loose coupling results from clear interfaces, externalised dependencies and high cohesion. Shared schemas, central general-purpose libraries and chatty interfaces increase it."
 },
 "c3q21": {
  "q": "Building blocks A and B reference each other (cyclic dependency). Which statements are correct?",
  "options": [
   "Unproblematic as long as one team maintains both.",
   "Breaking it by inverting one dependency via an abstraction.",
   "If closely related functionally: merge into one building block.",
   "Permissible in strict layering if both are in the same layer.",
   "Events instead of calls remove the cycle together with the functional dependency.",
   "Isolated testing and changing become harder."
  ],
  "correct": [
   1,
   2,
   5
  ],
  "optExpl": [
   "Wrong: The organisation does not change the technical coupling; the drawbacks remain.",
   "Correct: If A defines an interface that B implements, both dependencies point in the same direction.",
   "Correct: If A and B belong together functionally, merging is a legitimate solution – it increases cohesion.",
   "Wrong: The layering rule concerns calls between layers; a cycle within a layer remains problematic nonetheless.",
   "Wrong: The technical reference disappears, but the functional dependency via messages and their meaning remains.",
   "Correct: A and B can hardly be understood, tested or reused separately; changes propagate in both directions."
  ],
  "explanation": "Cycles hinder testing, changing and reuse. Solutions are dependency inversion or merging; team ownership, layer position or events do not remove the problem."
 },
 "c3q22": {
  "q": "A team plans to refactor a grown building block. Which statements about refactoring are correct?",
  "options": [
   "Renaming a public API operation has no consequences for callers.",
   "Refactoring primarily serves to fix bugs.",
   "Automated tests safeguard against unintended changes.",
   "The internal structure is improved.",
   "Best planned as a separate phase after all features.",
   "The observable behaviour remains unchanged."
  ],
  "correct": [
   2,
   3,
   5
  ],
  "optExpl": [
   "Wrong: External callers must be adapted; that is an interface change, not an inconsequential internal refactoring.",
   "Wrong: Fixing bugs changes behaviour. Refactoring improves structure, though it can make bugs easier to find.",
   "Correct: Tests reveal early when behaviour changes unintentionally.",
   "Correct: The aim is better understandability and modifiability of the code.",
   "Wrong: Refactoring happens continuously in small steps; a final phase lets debt grow for a long time.",
   "Correct: That is exactly what distinguishes refactoring from functional changes."
  ],
  "explanation": "Refactoring improves internal structure while keeping behaviour, safeguarded by tests and done continuously. Traps: regarding bug fixing or changes to public interfaces as refactoring."
 },
 "c3q23": {
  "q": "Why do you program against interfaces rather than concrete implementations?",
  "options": [
   "Coupling to implementation details decreases.",
   "Static coupling disappears completely.",
   "Implementations become replaceable.",
   "Dependencies can be replaced in tests.",
   "It is worthwhile for every class.",
   "Callers only need to know the signature."
  ],
  "correct": [
   0,
   2,
   3
  ],
  "optExpl": [
   "Correct: Users only depend on the contract, not on the implementation's internals.",
   "Wrong: The dependency on the interface remains. It is merely looser because it no longer depends on implementation details.",
   "Correct: As long as the contract holds, the implementation can be replaced without changing users.",
   "Correct: Behind an interface a test double can be used in tests; this makes isolated testing easier.",
   "Wrong: For classes with only one foreseeable implementation, an interface often only adds indirection without benefit.",
   "Wrong: The semantics remain part of the contract. Without them the caller does not know what a call does."
  ],
  "explanation": "Programming against interfaces reduces coupling to details, makes implementations replaceable and eases testing. The dependency on the interface remains, the semantics must still be known, and not every class needs an interface."
 },
 "k6": {
  "q": "You review design variants for an ordering system. Does each measure increase or reduce coupling between building blocks?",
  "categories": [
   "Increases coupling",
   "Reduces coupling"
  ],
  "rows": [
   "The concrete implementation is only passed in at runtime via dependency injection.",
   "The caller depends only on an interface, not on its implementation.",
   "A building block inherits from a concrete class of another building block.",
   "Two building blocks read and write the same tables of a shared database.",
   "An adapter encapsulates the third-party library instead of using it directly everywhere.",
   "A building block only works as long as the called service is reachable at the same time."
  ],
  "explanation": "Shared database tables, inheritance from foreign classes and temporal dependency are kinds of coupling that are often overlooked. Externalized dependencies (DI), interfaces and adapters reduce coupling."
 },
 "k8": {
  "q": "A team wants to align its coding guidelines with SOLID. Does each principle belong to SOLID?",
  "categories": [
   "Part of SOLID",
   "Not part of SOLID"
  ],
  "rows": [
   "Dependency injection",
   "Dependency inversion principle",
   "Interface segregation principle",
   "Separation of concerns",
   "Single responsibility principle",
   "Law of Demeter"
  ],
  "explanation": "SOLID = SRP, OCP, LSP, ISP, DIP. The traps are relatives: separation of concerns resembles SRP, dependency injection sounds like DIP – neither belongs to SOLID, nor does the Law of Demeter."
 },
 "c3q24": {
  "q": "A shop is to support further payment methods in future. Which statements about the open/closed principle (OCP) are correct?",
  "options": [
   "Adding another case to an existing if-chain.",
   "Open for extension, closed for modification.",
   "New payment method as another implementation of an interface.",
   "Each class has exactly one responsibility.",
   "After the first release, code may no longer be changed."
  ],
  "correct": [
   1,
   2
  ],
  "optExpl": [
   "Wrong: This is precisely what the OCP avoids: proven code is modified instead of extended.",
   "Correct: The core statement of the principle.",
   "Correct: This way behaviour is added without changing proven code.",
   "Wrong: That is the single responsibility principle, not the OCP.",
   "Wrong: Exaggeration: OCP is not a ban on changes; bug fixes remain possible, of course."
  ],
  "explanation": "OCP: new behaviour via additional implementations behind abstractions. Traps: misunderstanding OCP as a ban on changes or confusing it with the SRP."
 },
 "c3q25": {
  "q": "A 'customer service' interface has 40 operations; most clients use only three. What does the interface segregation principle recommend?",
  "options": [
   "Bundling all operations centrally to ensure consistency.",
   "Narrow, role-specific interfaces for the clients.",
   "Making clients depend on abstractions rather than classes.",
   "Splitting the interface by technical layers."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: That is the starting situation the ISP aims to resolve.",
   "Correct: Clients should not depend on operations they do not use.",
   "Wrong: That describes the DIP; the interface would remain as broad as before.",
   "Wrong: The ISP cuts along the needs of the clients, not along layers."
  ],
  "explanation": "ISP: no client should depend on operations it does not use – hence narrow, role-specific interfaces. Trap: confusion with the DIP."
 },
 "c3q26": {
  "q": "What does the Liskov substitution principle (LSP) require?",
  "options": [
   "Subtypes can be used in place of the base type with conforming behaviour.",
   "Fulfilled as soon as the subtype inherits and the signatures match.",
   "Subtypes may strengthen preconditions.",
   "Replacing inheritance with composition in principle."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Wherever the base type is expected, the subtype must work without breaking the behaviour.",
   "Wrong: Syntactic compatibility is not enough; the behaviour must meet the expectations of the base type.",
   "Wrong: The opposite: strengthened preconditions break callers that rely on the base type.",
   "Wrong: That is the heuristic 'composition over inheritance' – and even that does not demand general replacement."
  ],
  "explanation": "LSP requires behaviour-conforming substitutability of the base type by subtypes. Trap: matching signatures alone are not enough."
 },
 "c3q27": {
  "q": "What most accurately characterises a publish/subscribe pattern?",
  "options": [
   "Receivers regularly ask the sender for news.",
   "Senders publish events without knowing the receivers.",
   "Every event has exactly one fixed receiver.",
   "Receivers acknowledge synchronously before the sender continues."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: That is polling. With pub/sub, events are delivered to the subscribers.",
   "Correct: Any number of subscribers can react; the sender does not know them.",
   "Wrong: That describes point-to-point communication; pub/sub is multipoint.",
   "Wrong: Such feedback makes the sender dependent on the receiver again and contradicts the pattern."
  ],
  "explanation": "With pub/sub the sender publishes events to unknown subscribers, any number of them. Traps: point-to-point, polling or synchronous acknowledgement."
 },
 "c3q28": {
  "q": "Which statement most accurately describes the client-server pattern?",
  "options": [
   "All nodes are equal and offer the same services.",
   "Client and server must run on separate machines.",
   "An intermediary connects clients and servers that do not know each other.",
   "Clients use services of a server via an interface."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: That describes peer-to-peer, not client-server.",
   "Wrong: Separate machines are common but not required; the pattern describes roles, not distribution.",
   "Wrong: That is the broker pattern, which additionally introduces an intermediary.",
   "Correct: The client requests, the server provides services and responds to requests."
  ],
  "explanation": "Client-server separates requesting clients from providing servers. Traps: confusion with peer-to-peer or broker and equating roles with machines."
 },
 "c3q29": {
  "q": "Which statements about the heuristic 'composition over inheritance' are correct?",
  "options": [
   "Avoids the fragility of deep inheritance hierarchies.",
   "The enclosing object inherits all methods of its parts.",
   "Inheritance must therefore be avoided in principle.",
   "Behaviour can be swapped at run time, e.g. via strategy.",
   "Preferable especially when there is a genuine 'is-a' relationship."
  ],
  "correct": [
   0,
   3
  ],
  "optExpl": [
   "Correct: Changes to base classes affect all subclasses; composition couples more loosely.",
   "Wrong: With composition, behaviour is explicitly delegated, not inherited.",
   "Wrong: Overgeneralisation: it is a heuristic of preference, not a ban.",
   "Correct: The strategy pattern uses composition to make algorithms interchangeable.",
   "Wrong: The opposite: with a genuine 'is-a' relationship, inheritance remains legitimate."
  ],
  "explanation": "Composition is more flexible, more loosely coupled and swappable at run time. Trap: reading the heuristic as a general ban on inheritance."
 },
 "c3q30": {
  "q": "A web service is to be operated stateless. Which statements are correct?",
  "options": [
   "Required state is held externally, e.g. in DB, cache or token.",
   "Requests can be distributed to any instance.",
   "Unsuitable for applications with user sessions.",
   "Makes horizontal scaling easier.",
   "Sticky sessions are an essential characteristic.",
   "If an instance fails, no session state is lost."
  ],
  "correct": [
   0,
   1,
   3,
   5
  ],
  "optExpl": [
   "Correct: State beyond a single request is deliberately moved outside.",
   "Correct: Any equivalent instance can handle any request.",
   "Wrong: Sessions work if the session state is held externally or in the token.",
   "Correct: New instances can be added without having to transfer state.",
   "Wrong: Sticky sessions bind state to an instance – the opposite model to stateless services.",
   "Correct: Since the instance holds no state, another instance takes over subsequent requests."
  ],
  "explanation": "Stateless services hold no state in the instance; this eases scaling and resilience. Trap: sessions are still possible; sticky sessions are the opposite model."
 },
 "c3q31": {
  "q": "A system is to remain easy to change in the long term. Which structural properties promote this?",
  "options": [
   "A central control building block that knows all others directly.",
   "High cohesion per building block.",
   "Low coupling between the building blocks.",
   "Stable interfaces with replaceable implementation.",
   "Broad base classes from which many building blocks inherit.",
   "Few large building blocks to save on interfaces."
  ],
  "correct": [
   1,
   2,
   3
  ],
  "optExpl": [
   "Wrong: Seems clear, but it concentrates all dependencies in one place – almost every change affects it.",
   "Correct: Related tasks are kept together, so changes tend to stay local.",
   "Correct: The fewer the dependencies, the fewer the paths through which changes propagate.",
   "Correct: Users depend only on the contract; the inside can be changed.",
   "Wrong: Saves code, but tightly couples many building blocks to the base class.",
   "Wrong: Fewer interfaces here usually means lower cohesion and larger impact of changes."
  ],
  "explanation": "Modifiability is promoted by high cohesion, low coupling and stable interfaces. Central control building blocks, broad inheritance and few large building blocks save effort in the short term but increase coupling."
 },
 "c3q32": {
  "q": "A service calls a remote partner service that is occasionally overloaded. What is the purpose of timeout, retry and circuit breaker here?",
  "options": [
   "The circuit breaker speeds up calls by caching.",
   "Robust handling of errors and failures of remote calls.",
   "Retry is harmless for any operation without further ado.",
   "They ensure that the partner service receives less load."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: Confusion with a cache: the circuit breaker interrupts calls to a faulty service.",
   "Correct: They limit waiting times, absorb transient errors and prevent cascading failures.",
   "Wrong: Only idempotent operations can be safely repeated; otherwise e.g. duplicate bookings may occur.",
   "Wrong: A side effect of the circuit breaker, but not the purpose of all three; retry even increases the load."
  ],
  "explanation": "Timeout, retry and circuit breaker serve robust handling of errors in remote calls. Traps: retry without idempotency and circuit breaker as a cache."
 },
 "k9": {
  "q": "You document the communication between building blocks. Is the described interaction synchronous or asynchronous?",
  "categories": [
   "Synchronous",
   "Asynchronous"
  ],
  "rows": [
   "An event is published; subscribers process it as soon as they are ready.",
   "The caller registers a callback and continues working immediately.",
   "A REST call in which the client waits for the HTTP response.",
   "The called service works in parallel internally; the caller blocks until the response.",
   "The client immediately receives a job number and queries the status later.",
   "A remote procedure call (RPC) whose result the caller waits for."
  ],
  "explanation": "What matters is whether the caller waits for the result – not the technology (REST, RPC) and not whether the service works in parallel internally. Job number with later polling, callback and publish/subscribe are asynchronous."
 },
 "c3q33": {
  "q": "What is the purpose of the facade design pattern?",
  "options": [
   "Interchangeable algorithms behind a common interface.",
   "Simplified, uniform access to a subsystem.",
   "A surrogate with the same interface that controls access.",
   "New operations on an object structure without changing its classes."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: That describes the strategy pattern.",
   "Correct: The facade bundles the use of a complex subsystem behind a simple interface.",
   "Wrong: That is the proxy – it offers the same, not a simplified interface.",
   "Wrong: That describes the visitor pattern."
  ],
  "explanation": "Facade = simplified access to a subsystem. Trap: confusion with the proxy, which offers the same interface."
 },
 "c3q34": {
  "q": "Which statements about a module in the sense of modularisation are correct?",
  "options": [
   "Internals can be changed as long as the interface remains stable.",
   "Ideally exactly one class per module.",
   "Exposes data structures so that users can access them efficiently.",
   "Bundles related functionality behind a defined interface.",
   "Can itself consist of further modules.",
   "Always corresponds to exactly one deployable artefact."
  ],
  "correct": [
   0,
   3,
   4
  ],
  "optExpl": [
   "Correct: This is the core of information hiding and encapsulation.",
   "Wrong: The size depends on the responsibility, not on the number of classes.",
   "Wrong: This couples users to internals and contradicts information hiding.",
   "Correct: A module has a clearly defined purpose and an interface to the outside.",
   "Correct: Decomposition is hierarchical: a building block is refined as a white box into further building blocks.",
   "Wrong: Modules are structural elements; several modules may end up in one artefact and vice versa."
  ],
  "explanation": "A module bundles related functionality behind a stable interface and can be decomposed hierarchically. Traps: equating it with artefacts and sizing it by number of classes."
 },
 "c3q35": {
  "q": "A team weighs a modular monolith against microservices. Which statements are correct?",
  "options": [
   "Microservices simplify data consistency.",
   "Modular monolith: clear internal boundaries, one deployment.",
   "A monolith is usually easier to test and operate.",
   "Microservices: independently deployable, but operationally more complex.",
   "Microservices reduce the overall complexity of the system."
  ],
  "correct": [
   1,
   2,
   3
  ],
  "optExpl": [
   "Wrong: The opposite: consistency across service boundaries is harder because each service holds its own data.",
   "Correct: It can be cleanly structured internally and is still delivered as one unit.",
   "Correct: One deployment, one process, no distributed failure cases – this simplifies testing and operations.",
   "Correct: Independent releases and scaling come at the price of more operational effort and the network as a source of failure.",
   "Wrong: They shift complexity into operations and communication rather than eliminating it."
  ],
  "explanation": "Microservices bring independent releases but more operational complexity and harder consistency. Trap: they do not reduce complexity but shift it."
 },
 "c3q36": {
  "q": "A team wants to select architectural patterns for a new system. Which statements are correct?",
  "options": [
   "A proven pattern fits regardless of context.",
   "The selection depends on quality goals and context.",
   "Domain-specific pattern sources can provide alternatives.",
   "The more patterns combined, the more robust the design.",
   "Patterns create a shared vocabulary in the team.",
   "An unsuitable pattern can worsen qualities."
  ],
  "correct": [
   1,
   2,
   4,
   5
  ],
  "optExpl": [
   "Wrong: Proven does not mean universal: without a suitable context, a pattern can do harm.",
   "Correct: Patterns are ways to achieve certain qualities in a given context.",
   "Correct: Easily overlooked: besides general catalogues, the curriculum also mentions domain-specific pattern sources.",
   "Wrong: Every pattern brings drawbacks and complexity; combining them is not an end in itself.",
   "Correct: A name such as 'pipes and filters' conveys an entire solution idea.",
   "Correct: Patterns have trade-offs; if chosen wrongly, the drawbacks prevail."
  ],
  "explanation": "Patterns are chosen to suit quality goals and context; they create vocabulary but have trade-offs. Trap: reading 'proven' or 'many patterns' as a guarantee of quality."
 },
 "c3q37": {
  "q": "A team partitions its system by bounded contexts (DDD). Which statements are correct?",
  "options": [
   "A bounded context delimits a model with its own domain language.",
   "'Customer' must be modelled identically in all contexts.",
   "Each bounded context is implemented as a separate microservice.",
   "Bounded contexts correspond to the layers of the application.",
   "Domain boundaries can run across technical layers."
  ],
  "correct": [
   0,
   4
  ],
  "optExpl": [
   "Correct: Within the context a consistent, shared language applies (ubiquitous language).",
   "Wrong: Precisely not: each context may model terms differently – that is the point of the boundary.",
   "Wrong: Possible but not mandatory; a modular monolith can also be partitioned by contexts.",
   "Wrong: Confusion: layers are a technical partitioning, bounded contexts a domain partitioning.",
   "Correct: The partitioning follows the domain; a context can comprise its own UI, logic and data parts."
  ],
  "explanation": "Bounded contexts delimit domain models with their own language, across technical layers. Traps: enforcing uniform terms everywhere and equating context with microservice."
 },
 "c3q38": {
  "q": "Which statements about encapsulation are correct?",
  "options": [
   "Encapsulation and information hiding are the same principle.",
   "Encapsulation is a means of implementing information hiding.",
   "Achieved as soon as all fields are private and have getters/setters.",
   "Access to the state only via the interface.",
   "The internal representation remains changeable."
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Wrong: Closely related but not identical: information hiding hides volatile design decisions, not just data.",
   "Correct: Information hiding is the principle, encapsulation the means to it.",
   "Wrong: Blanket getters and setters expose the internal structure again after all.",
   "Correct: Internals cannot be reached directly from outside.",
   "Correct: As long as the interface stays the same, users do not notice a changed representation."
  ],
  "explanation": "Encapsulation restricts access to the interface and is the means for information hiding. Traps: getters/setters for everything and equating the two terms."
 },
 "c3q39": {
  "q": "A payment service provider offers an interface that does not match the one your system expects. Which pattern applies?",
  "options": [
   "Strategy.",
   "Proxy.",
   "Facade.",
   "Adapter."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: Strategy makes algorithms interchangeable; the interface incompatibility would remain.",
   "Wrong: A proxy offers the same interface as the original – it does not adapt it.",
   "Wrong: A facade simplifies a complex subsystem but does not resolve an incompatibility with an expected interface.",
   "Correct: It translates between the expected and the existing interface without changing either of them."
  ],
  "explanation": "Incompatible interfaces are resolved by the adapter. Traps: facade simplifies, proxy keeps the interface, strategy swaps algorithms."
 },
 "c3q40": {
  "q": "A team decomposes a grown monolith into modules. Which goals does modularization pursue here?",
  "options": [
   "Clearly cut parts can be reused.",
   "Fewer calls between building blocks.",
   "Designing building blocks to be as generic as possible.",
   "Parts can be developed in parallel.",
   "Changes remain confined to a few building blocks."
  ],
  "correct": [
   0,
   3,
   4
  ],
  "optExpl": [
   "Correct: A building block with a clear purpose and a clean interface also fits other contexts – reusability follows from a good cut.",
   "Wrong: Modularization tends to create more calls across interfaces. Performance is a trade-off to weigh, not a goal of modularization.",
   "Wrong: Over-generalization increases complexity and builds for stock (YAGNI). Reusability comes from a clear cut, not from maximum genericity.",
   "Correct: Clearly delimited modules with defined interfaces allow separate work; only the contract has to be agreed.",
   "Correct: If each module hides its internals behind an interface, a change usually has only local effect – a core goal of modularization."
  ],
  "explanation": "Modularization aims at local changes, parallel development and reusability. Trap: maximum genericity and fewer calls sound like quality but are not goals."
 },
 "c3q41": {
  "q": "A logging library is used by 40 building blocks. What most likely applies to this heavy reuse?",
  "options": [
   "Coupling in the system decreases because of fewer duplicates.",
   "Its interface should be stable and versioned.",
   "It should be implemented as concretely as possible.",
   "Generalizing in advance for future users.",
   "It often becomes more general and thus more complex.",
   "The afferent coupling to the library is high."
  ],
  "correct": [
   1,
   4,
   5
  ],
  "optExpl": [
   "Wrong: Reuse avoids duplication but does not reduce coupling – all users now depend on the same building block.",
   "Correct: Many dependants cannot tolerate frequent contract changes; versioning allows evolution without forcing all of them to adapt.",
   "Wrong: Heavily used, stable building blocks should rather be abstract so that they can be extended without being changed.",
   "Wrong: Generalizing without concrete need violates YAGNI; one often guesses the wrong variation points.",
   "Correct: To serve many users, a building block needs configuration and extension points. This generality costs complexity.",
   "Correct: Each user is an incoming dependency. Many users make the library hard to change."
  ],
  "explanation": "Heavy reuse increases afferent coupling and generality and requires stable interfaces. Trap: \"fewer duplicates = less coupling\" confuses DRY with decoupling."
 },
 "k12": {
  "q": "Analyzing an evolved system, you notice these characteristics. Do they promote maintainability or harm it?",
  "categories": [
   "Promotes maintainability",
   "Harms maintainability"
  ],
  "rows": [
   "A building block that almost all others depend on and that changes frequently.",
   "An interface that maps internal data structures 1:1 to the outside.",
   "Each building block has a clearly defined business purpose.",
   "Code fragments that only look alike by chance are deliberately kept separate.",
   "Two building blocks that call each other directly.",
   "Business logic that can be tested without database and user interface."
  ],
  "explanation": "Many afferent dependencies on an unstable building block, cycles and exposed internals spread changes. Surprising: keeping coincidentally similar code separate is no DRY violation, since DRY concerns the same knowledge."
 },
 "c3q42": {
  "q": "For a new insurance system, both domain and technical structuring are pending. Which approach is most advisable?",
  "options": [
   "Cut along the domain, align the technology to it.",
   "First choose frameworks and layers, then fit the domain into them.",
   "Assign each domain component to exactly one layer.",
   "Cut the building blocks according to the existing database schema."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: The domain cut follows the problem space and usually lasts longer. Separated from technology, business logic stays testable and technology replaceable.",
   "Wrong: Technology-first forces the domain into technical boundaries; domain changes then spread over many building blocks.",
   "Wrong: Domain components cut across layers – \"contract\" needs UI, logic and persistence parts. Equating them tears the domain apart.",
   "Wrong: A grown schema often reflects historical and technical decisions. Cutting by tables yields data-driven rather than responsibility-oriented building blocks."
  ],
  "explanation": "Domain and technology are separated, and technology serves the domain. Trap: cutting by tables sounds domain-oriented but is technically and historically shaped."
 },
 "c3q43": {
  "q": "When decomposing, an architect refers to the \"Miller number\" (7±2). What can most reasonably be derived from it?",
  "options": [
   "A building block should offer about 7±2 operations.",
   "Only a manageable number of elements per decomposition level.",
   "A design team should comprise at most 7±2 people.",
   "A system should contain at most 7±2 modules."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: Miller says nothing about interface operations but about the limited capacity of short-term memory.",
   "Correct: People grasp only about 7±2 chunks at once. If there are more, one groups them hierarchically.",
   "Wrong: Here the number is transferred to team sizes. Miller refers to chunks that can be grasped simultaneously.",
   "Wrong: It is not an upper limit for the whole system but a rule of thumb per level of representation; hierarchically structured, many modules are possible."
  ],
  "explanation": "7±2 is a cognitive rule of thumb per level, an argument for hierarchical decomposition. Trap: reading the number as a hard limit for modules, teams or operations."
 },
 "c3q44": {
  "q": "Which statement about the approach to architecture design is most accurate?",
  "options": [
   "Feedback only makes sense once the design is stable.",
   "Design and requirements clarification influence each other.",
   "Decisions are only revised when requirements change.",
   "A reference model largely replaces your own trade-offs."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: Early feedback in particular, e.g. via prototypes, uncovers wrong assumptions while corrections are still cheap.",
   "Correct: Design ideas raise new questions about the requirements, and clarified requirements change the design. Both proceed iteratively.",
   "Wrong: New insights too – e.g. from prototypes or measurements – can overturn a decision without any change in requirements.",
   "Wrong: A reference model is a starting point. Whether it fits the requirements and constraints still has to be weighed up yourself."
  ],
  "explanation": "Architecture design is iterative: design and requirements influence each other, feedback comes early, and new insights are a legitimate reason for revisions. A reference model does not replace your own trade-offs."
 },
 "c3q45": {
  "q": "In a review someone says: \"We need loose coupling.\" Which statements characterize this goal correctly?",
  "options": [
   "The ideal is a system without dependencies.",
   "As loose as possible, as tight as functionally necessary.",
   "It is another name for high cohesion.",
   "It results from distribution across several servers.",
   "It makes testing building blocks in isolation easier."
  ],
  "correct": [
   1,
   4
  ],
  "optExpl": [
   "Wrong: Without dependencies the system provides no overall function. The ideal is appropriate coupling, not none.",
   "Correct: Without dependencies there would be no collaboration. The goal is appropriate, functionally sufficient coupling.",
   "Wrong: Related but different: coupling concerns relationships between building blocks, cohesion the togetherness within one.",
   "Wrong: Distribution does not change the domain dependency and adds new kinds of coupling (network, availability, formats).",
   "Correct: Few dependencies are easily replaced by test doubles; the building block can be checked in isolation."
  ],
  "explanation": "Loose coupling means functionally sufficient, not zero; it eases changes and tests. Trap: confusing it with cohesion or with physical distribution."
 },
 "c3q46": {
  "q": "Which relationship between two classes tends to lead to the strongest coupling?",
  "options": [
   "Delegation to an object behind an interface.",
   "Notification via asynchronous events.",
   "Inheriting from a concrete base class.",
   "A call via a narrow, stable interface."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: The caller only knows the contract; the implementation remains replaceable – rather loose coupling.",
   "Wrong: The sender does not know the receiver and does not wait. Only the format and meaning of the events remain shared.",
   "Correct: Implementation inheritance binds to the base's internals (protected fields, call order); changes there break subclasses (fragile base class).",
   "Wrong: A narrow interface requires little mutual knowledge – the ideal of loose coupling."
  ],
  "explanation": "Implementation inheritance couples most strongly because it binds to base-class internals. Trap: inheritance looks \"cleanly object-oriented\" but is tighter than delegation or events."
 },
 "c3q47": {
  "q": "A team replaces direct method calls with messages via a broker. What applies to this dynamic coupling?",
  "options": [
   "Sender and receiver are now functionally independent.",
   "Format changes now affect only the broker.",
   "The domain dependency remains.",
   "It is harder to see in static code analysis.",
   "Coupling decreases because no import is needed any more."
  ],
  "correct": [
   2,
   3
  ],
  "optExpl": [
   "Wrong: The broker decouples in time and technically, not in domain terms: message format and meaning remain a shared dependency.",
   "Wrong: If the sender changes the format, the receiver breaks anyway – the broker merely forwards.",
   "Correct: Whoever expects certain data or reactions still depends on the other – regardless of when the dependency is resolved.",
   "Correct: The dependency arises only at runtime via messages or configuration and does not show up in imports.",
   "Wrong: Missing imports only remove the static view of the dependency. Dynamic instead of static does not necessarily reduce coupling."
  ],
  "explanation": "Dynamic coupling shifts or hides dependencies instead of necessarily reducing them. Trap: \"event-based = decoupled\" is only technically true."
 },
 "c3q48": {
  "q": "Building block A is used by twelve others and uses none itself. What most likely applies to A?",
  "options": [
   "A is unstable because it depends on many.",
   "A is considered mature and largely free of defects.",
   "A should be implemented as concretely as possible.",
   "A is stable: changes to A are risky."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: Swapped: A uses no other building block, so it has no efferent dependencies. Outgoing dependencies make a block unstable.",
   "Wrong: \"Stable\" is a coupling statement here, not a quality statement. The metric says nothing about maturity or freedom from defects.",
   "Wrong: Heavily used, stable building blocks should rather be abstract so they can be extended without being changed.",
   "Correct: Many incoming (afferent) dependencies mean every change hits twelve users. \"Stable\" here means hard to change."
  ],
  "explanation": "Afferent = incoming = many users → stable in the sense of hard to change. Trap: swapping afferent and efferent or reading \"stable\" as \"defect-free\"."
 },
 "c3q49": {
  "q": "Which statements about cross-cutting concepts are correct according to the curriculum?",
  "options": [
   "Energy efficiency can be the subject of a cross-cutting concept.",
   "They are only needed when all building blocks are affected.",
   "One defines them after the building blocks are finished.",
   "They can be reused across systems.",
   "A discount shown on many pages is one.",
   "Cross-cutting concepts influence each other."
  ],
  "correct": [
   0,
   3,
   5
  ],
  "optExpl": [
   "Correct: The curriculum explicitly names energy efficiency alongside persistence, communication, GUI, error handling and concurrency.",
   "Wrong: A concept pays off as soon as many building blocks should solve a topic uniformly. Waiting for \"all\" yields uncontrolled growth.",
   "Wrong: By then inconsistent individual solutions already exist, and unifying them becomes expensive.",
   "Correct: The curriculum states that cross-cutting concepts can be reusable across system boundaries, e.g. a logging concept.",
   "Wrong: A single business task does not become a cross-cutting concern just because its result is displayed in several places.",
   "Correct: Security, error handling and logging are interrelated, e.g.: what may appear in an error message or in the log?"
  ],
  "explanation": "Cross-cutting concepts solve topics affecting many building blocks uniformly, including energy efficiency; they interact and are reusable. Trap: classifying individual business tasks as cross-cutting."
 },
 "c3q50": {
  "q": "A team chooses a BASE-oriented data store instead of an ACID system for the product catalog. What does this most likely mean?",
  "options": [
   "Stricter transaction guarantees than with ACID.",
   "Availability before immediate consistency of all replicas.",
   "Data loss is tolerated in favor of availability.",
   "Switching from NoSQL to a relational database."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: The other way round: ACID offers the stricter guarantees (atomicity, isolation …); BASE deliberately relaxes them.",
   "Correct: BASE (basically available, soft state, eventually consistent) accepts temporarily diverging reads in order to stay available.",
   "Wrong: Eventual consistency means delayed consistency: replicas converge later, data is not lost because of it.",
   "Wrong: Swapped: ACID is typical of relational systems, BASE often of NoSQL stores."
  ],
  "explanation": "ACID = strict transactional consistency, BASE = availability with eventual consistency. Trap: reading \"eventual\" as data loss or swapping the relational/NoSQL assignment."
 },
 "c3q51": {
  "q": "A distributed booking system should keep working during network partitions. What most likely follows from the CAP theorem?",
  "options": [
   "During a partition: choose consistency or availability.",
   "Permanently fix exactly two of the three properties.",
   "Enough redundancy secures all three properties at once.",
   "Trade off cost, availability and performance."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: When a partition occurs, one cannot keep all nodes consistent and every request answerable at the same time – one must trade off.",
   "Wrong: The trade-off is forced only during a partition. Without a partition, consistency and availability can be achieved together.",
   "Wrong: Redundancy does not lift the limit: during the partition, the separated parts cannot coordinate.",
   "Wrong: CAP stands for consistency, availability, partition tolerance. Cost and performance are not part of it."
  ],
  "explanation": "CAP forces a choice between consistency and availability during a network partition. Trap: \"always two out of three\" – without a partition there is no such constraint."
 },
 "c3q52": {
  "q": "In a relaxed layered architecture, the UI calls the data access layer directly (layer bridging). What is most accurate?",
  "options": [
   "This is an upward call via a callback.",
   "The call makes the business layer more replaceable.",
   "Permitted, but it creates additional dependencies.",
   "The architecture is thus no longer layered."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: Bridging skips a layer downward. Callbacks from bottom to top are something else.",
   "Wrong: Rather the opposite: the data access layer becomes harder to replace because two layers now use it.",
   "Correct: Relaxed layering permits skipping; the UI then depends on two layers, which should be decided consciously and documented.",
   "Wrong: The relaxed variant is still a layered architecture; upward calls remain forbidden."
  ],
  "explanation": "Layer bridging = skipping an intermediate layer downward; permitted in the relaxed variant but with more dependencies. Trap: confusing it with upward callbacks."
 },
 "c3q53": {
  "q": "A team wants a strictly layered architecture. Which rules belong to it ideally?",
  "options": [
   "A layer may use all lower layers.",
   "Similar level of abstraction within a layer.",
   "A layer uses only the one directly below.",
   "Resolve cycles by distributing the building blocks across layers.",
   "Each layer runs in its own process.",
   "No calls from bottom to top."
  ],
  "correct": [
   1,
   2,
   5
  ],
  "optExpl": [
   "Wrong: This describes relaxed layering, not strict layering.",
   "Correct: Building blocks of one layer should be at a comparable level so the layer has a clear role.",
   "Correct: That is the core of the strict variant: no skipping of layers.",
   "Wrong: The mutual dependency remains; distributing the blocks creates a forbidden upward call.",
   "Wrong: Layers are logical structures; physical separation describes tiers.",
   "Correct: Upward dependencies would create cycles and dissolve the layering."
  ],
  "explanation": "Strictly layered: only downward, only to the adjacent layer, similar level of abstraction. Trap: using all lower layers is the relaxed variant; layers are not tiers."
 },
 "c3q54": {
  "q": "A system has seven strictly stacked layers. Which disadvantage is most typical of this?",
  "options": [
   "Each layer needs its own server.",
   "Upper layers must know the internals of lower layers.",
   "Passing calls through costs latency and creates boilerplate.",
   "A domain-oriented cut is no longer possible."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: Layers are logical, not physical – assigning them to servers is a deployment decision.",
   "Wrong: Precisely not: upper layers use only the interface of the layer below.",
   "Correct: Each layer forwards calls even when it adds nothing; that costs runtime and creates uniform code.",
   "Wrong: Layers can be combined with domain components, e.g. layers per business module."
  ],
  "explanation": "Deep strict layering costs latency through pass-through and creates forwarding code. Trap: equating layers with servers (tiers)."
 },
 "c3q55": {
  "q": "In pipes-and-filters processing, active and passive filters are distinguished. What is the difference?",
  "options": [
   "Active filters pull or push data themselves.",
   "Active filters run sequentially, passive ones in parallel.",
   "Active filters transform, passive ones pass data through.",
   "Active filters know their neighboring filters."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Active filters drive the transport (pull/push); passive ones are fed or read from outside.",
   "Wrong: Concurrency does not depend on this distinction; both kinds can be operated concurrently or sequentially.",
   "Wrong: Both kinds process data; the distinction concerns what drives the data flow.",
   "Wrong: Filters generally do not know each other; they are connected only via pipes."
  ],
  "explanation": "Active/passive describes who drives the data flow. Trap: confusing it with transformation, parallelism or knowledge of neighbors."
 },
 "c3q56": {
  "q": "Pipes and filters is being considered for a nightly import (read, clean, enrich, store). What is correct?",
  "options": [
   "The stages can work concurrently.",
   "Individual filters can be replaced.",
   "Also well suited to dialogue-oriented processes.",
   "Shared state simplifies coordination between filters.",
   "Error handling is demanding."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Correct: Since the filters are connected only via data streams, each stage can work as soon as data is available.",
   "Correct: Filters do not know each other and are connected only via pipes; one step can be replaced without changing the others.",
   "Wrong: Interactive processes with queries back to the user fit poorly with a directed data stream.",
   "Wrong: Pipes and filters precisely has no shared state; that is one of the pattern's limits.",
   "Correct: A filter does not know the history of the data; reporting errors or rolling back partial results is laborious."
  ],
  "explanation": "Pipes and filters: replaceable, concurrent stages, but difficult error handling and no shared state. Trap: assuming suitability for interactive processes."
 },
 "c3q57": {
  "q": "An online retailer cuts its system into microservices. What should it pay attention to when cutting?",
  "options": [
   "Domain boundaries, e.g. bounded contexts.",
   "Each service offers exactly one operation.",
   "Cut by technical layers (UI, logic, DB service).",
   "Each service manages its own data.",
   "Each service is independently deployable.",
   "One service per database table."
  ],
  "correct": [
   0,
   3,
   4
  ],
  "optExpl": [
   "Correct: Microservices are cut along the domain; bounded contexts provide viable boundaries for this.",
   "Wrong: Too fine a cut leads to \"nano-services\" with high communication and operational overhead.",
   "Wrong: A technical cut spreads every business change across several services and contradicts the domain cut.",
   "Correct: Own data storage belongs to microservices according to the curriculum; shared databases couple the services.",
   "Correct: Independent deployability is a core characteristic of microservices and enables independent releases.",
   "Wrong: Cutting by tables yields data-driven services that constantly need to talk to each other for business processes."
  ],
  "explanation": "Microservices: cut along the domain, independently deployable, with their own data storage. Trap: cutting by tables, technical layers or single operations."
 },
 "c3q58": {
  "q": "A team migrates from a monolith to microservices. Which challenges are typically to be expected?",
  "options": [
   "Consistency across service boundaries becomes harder.",
   "Higher operational and deployment effort.",
   "The domain complexity decreases.",
   "Shared libraries are no longer allowed.",
   "The network becomes a source of failure."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Correct: With each service owning its data, shared transactions are missing; one needs e.g. eventual consistency or sagas.",
   "Correct: Many independent units have to be monitored, rolled out and operated.",
   "Wrong: The domain remains equally complex; microservices shift complexity into operations and communication.",
   "Wrong: Shared libraries are possible but a conscious coupling decision – not a prohibition.",
   "Correct: Calls over the network bring latency and partial failures that do not occur locally."
  ],
  "explanation": "Microservices bring consistency, operational and network challenges. Trap: they do not reduce domain complexity but shift it."
 },
 "c3q59": {
  "q": "Two microservices of a shop need to exchange order data. Which design most closely matches the pattern?",
  "options": [
   "Same internal persistence format in all services.",
   "Loosely coupled via technology-neutral interfaces.",
   "Communicate synchronously as much as possible for strong consistency.",
   "Exchange via a shared database."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: Internal formats are the service's own business; at most the interface contract is standardized.",
   "Correct: This keeps the services independently deployable and internally free in their choice of technology.",
   "Wrong: Much synchronous communication creates temporal coupling and failure chains; microservices often accept eventual consistency.",
   "Wrong: Solves consistency problems but couples the services via the schema and destroys data ownership."
  ],
  "explanation": "Microservices communicate loosely coupled via technology-neutral interfaces. Trap: the shared database looks practical but removes independence."
 },
 "k14": {
  "q": "You compare two mandatory patterns of the curriculum. Which pattern does each property most likely belong to?",
  "categories": [
   "Layered architecture",
   "Pipes & filters"
  ],
  "rows": [
   "Individual processing steps can be parallelized well.",
   "Business changes often ripple through several levels.",
   "Rather unsuitable for interactive, dialog-oriented processes.",
   "In the relaxed variant, lower levels further down may also be used directly.",
   "Passing calls through several levels costs latency.",
   "Uniform error handling across all steps is difficult."
  ],
  "explanation": "Parallelizability, difficult error handling and unsuitability for dialogs are typical of pipes & filters. Relaxed layering, business changes rippling through and latency from pass-through belong to layers."
 },
 "k15": {
  "q": "A team collects candidates for overarching concepts. Is each a cross-cutting concept or not?",
  "categories": [
   "Cross-cutting concept",
   "Not a cross-cutting concept"
  ],
  "rows": [
   "Exporting a monthly report as a CSV file.",
   "Checking a customer's creditworthiness before ordering.",
   "Uniform handling of concurrency and simultaneous access.",
   "Common design rules for all dialogs of the user interface.",
   "The discount calculation whose result is displayed in several places.",
   "Uniform rules for energy efficiency, e.g. saving the battery of mobile clients."
  ],
  "explanation": "Energy efficiency, concurrency and GUI are explicitly on the curriculum's list. The trap: a single business function does not become a cross-cutting concept just because its result appears in several places."
 },
 "c3q60": {
  "q": "It is unclear whether a new messaging technology can handle the load requirements. Which statements about short feedback loops apply here?",
  "options": [
   "Obtain feedback only once the overall design is complete.",
   "A throwaway prototype can check the assumption specifically.",
   "The prototype replaces a later architecture evaluation.",
   "The prototype should become the skeleton of the production code.",
   "Iterations increase predictability."
  ],
  "correct": [
   1,
   4
  ],
  "optExpl": [
   "Wrong: Especially for uncertain decisions, feedback belongs at the start; errors discovered late are expensive.",
   "Correct: A prototype may deliberately answer just one question and then be discarded.",
   "Wrong: A prototype answers a single question; evaluating the overall architecture against quality goals remains necessary.",
   "Wrong: A throwaway prototype is optimized for insight, not quality; adopting it drags shortcuts into the product.",
   "Correct: Each iteration delivers facts instead of assumptions; according to the curriculum, iterations reduce risk and improve forecasts."
  ],
  "explanation": "Feedback loops check uncertain assumptions early and increase predictability. Trap: taking throwaway prototypes into production or treating them as a substitute for evaluation."
 },
 "c3q61": {
  "q": "A team works according to the \"evolutionary architecture\" approach. What characterizes it most?",
  "options": [
   "Fitness functions make architecture reviews superfluous.",
   "Quality goals emerge only from the fitness functions.",
   "Automated checks safeguard qualities during changes.",
   "A checklist that the team works through before every release."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: They complement reviews; hard-to-measure qualities and trade-offs still need human evaluation.",
   "Wrong: The other way round: fitness functions are derived from existing quality goals.",
   "Correct: Fitness functions check continuously, e.g. in the build pipeline, whether important quality characteristics are preserved.",
   "Wrong: Automation is precisely the characteristic; a manual checklist would be a review aid."
  ],
  "explanation": "Evolutionary architecture grows incrementally and safeguards qualities with automated fitness functions. Trap: they replace neither quality goals nor reviews."
 },
 "c3q62": {
  "q": "A project is planning the order of its architecture decisions. Which statements about feedback and risk are correct?",
  "options": [
   "Vertical slices only pay off in large projects.",
   "Secure risky decisions early through feedback.",
   "Obtain feedback only once the design is stable.",
   "Implement the well-understood parts first.",
   "Organize feedback systematically, not by chance."
  ],
  "correct": [
   1,
   4
  ],
  "optExpl": [
   "Wrong: Small projects also have uncertain decisions; a vertical slice is often possible with little effort.",
   "Correct: Feedback is a risk management tool; the most uncertain things are checked first.",
   "Wrong: Precisely unstable, uncertain designs need early feedback; afterwards changing course is more expensive.",
   "Wrong: This creates visible progress quickly but pushes the risks to the end, where corrections are more expensive.",
   "Correct: Planned reviews, demos, prototypes and measurements – the curriculum calls for obtaining feedback systematically."
  ],
  "explanation": "Order by risk, feedback early and systematic. Trap: \"easy things first\" looks efficient but pushes expensive surprises to the end."
 },
 "c3q63": {
  "q": "A team designs the interface of a payment building block. Which properties does the curriculum name as desirable?",
  "options": [
   "Maps the internal data structures 1:1.",
   "The contract comprises only the signatures.",
   "Hard to misuse.",
   "Functionally complete from the users' perspective.",
   "As many operations as possible for future users.",
   "Easy to learn and to extend."
  ],
  "correct": [
   2,
   3,
   5
  ],
  "optExpl": [
   "Wrong: That couples users to the implementation, which is then no longer replaceable.",
   "Wrong: The contract also includes semantics, pre/postconditions and error behavior.",
   "Correct: A good interface makes incorrect use difficult, e.g. through clear types and unambiguous semantics.",
   "Correct: Users should be able to achieve everything they need – measured by their needs, not by every conceivable case.",
   "Wrong: Completeness refers to the users' needs. Operations kept in stock enlarge the interface unnecessarily (YAGNI).",
   "Correct: The curriculum names easy to learn, to use and to extend as desirable properties."
  ],
  "explanation": "Desirable: easy to learn, use, extend, hard to misuse, complete for the users. Trap: confusing \"complete\" with \"operations in stock\"."
 },
 "c3q64": {
  "q": "A frontend loads customer data via a remote API. Which trade-off of interface granularity is most accurate?",
  "options": [
   "Fine-grained is flexible but causes many expensive calls.",
   "Fine-grained interfaces always couple more loosely.",
   "Granularity matters equally locally and remotely.",
   "Granularity follows the internal data structures."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Fine-grained operations can be combined flexibly but lead to many round trips remotely; coarse ones bundle but are more rigid.",
   "Wrong: Many small operations often bind the caller to the provider's sequences and order of steps.",
   "Wrong: For local calls the overhead per call is small; remotely every call costs latency.",
   "Wrong: It depends on usage and communication path; mirroring internals couples users to the implementation."
  ],
  "explanation": "Fine interfaces: flexible but expensive remotely; coarse ones: efficient but more rigid. Trap: assessing granularity independently of the communication path."
 },
 "c3q65": {
  "q": "A public REST interface is used by an unknown number of partners. Which statements about evolving it are correct?",
  "options": [
   "External interfaces need more stability than internal ones.",
   "Renaming a field is backward compatible.",
   "Be strict when sending, tolerant when receiving.",
   "Receiving tolerantly means accepting input unchecked.",
   "Versioning is only needed for external interfaces.",
   "A new optional field is usually backward compatible."
  ],
  "correct": [
   0,
   2,
   5
  ],
  "optExpl": [
   "Correct: According to the curriculum, external interfaces have more, often unknown users and need more stability, formality and versioning.",
   "Wrong: Users expecting the old name break; this needs a new version or a transition period.",
   "Correct: That is how Postel's robustness principle is phrased, which the curriculum lists under \"expect errors\".",
   "Wrong: The robustness principle allows tolerance of deviations but does not replace validation.",
   "Wrong: Internally too, e.g. across teams, versioning may be needed when users cannot follow at the same time.",
   "Correct: Existing users can ignore the field; additive changes usually do not break them."
  ],
  "explanation": "External interfaces are changed additively or versioned, following the robustness principle. Trap: confusing tolerance with missing validation."
 },
 "c3q66": {
  "q": "An order system is to be highly available. Which statements about the architectural approach are correct?",
  "options": [
   "Redundant app instances; the database does not matter here.",
   "Consciously weigh the cost of redundancy.",
   "Above all, extensive tests before go-live.",
   "Microservices limit failures by themselves.",
   "Choose targeted tactics such as redundancy and failover."
  ],
  "correct": [
   1,
   4
  ],
  "optExpl": [
   "Wrong: A single shared database remains a single point of failure; shared components must be considered too.",
   "Correct: Every measure has a price: redundancy increases cost and complexity and must be weighed against the benefit.",
   "Wrong: Tests uncover defects but do not make the system fail-safe; availability is a structural property.",
   "Wrong: Without timeouts, circuit breakers or similar, failures can even propagate through service calls.",
   "Correct: Architecture decisions should deliberately serve the quality goal; redundancy and failover are typical means."
  ],
  "explanation": "Availability results from targeted tactics whose trade-offs are weighed. Trap: a style or tests alone do not deliver availability, and shared components remain risks."
 },
 "c4q1": {
  "q": "You are asked to explain to a new client what architecture documentation is for. Which purposes apply most?",
  "options": [
   "Making onboarding of new team members easier.",
   "Prescribing the implementation down to class level.",
   "Recording the current state, leaving out rejected alternatives.",
   "Proving that the quality requirements are met.",
   "Creating a shared understanding among stakeholders.",
   "Keeping decisions and their rationale traceable."
  ],
  "correct": [
   0,
   4,
   5
  ],
  "optExpl": [
   "Correct: New members get up to speed faster, and maintenance and evolution can build on existing structures.",
   "Wrong: That would be detailed design. Architecture documentation focuses on load-bearing structures and decisions, not on every class.",
   "Wrong: Rejected alternatives and rationale in particular cannot be reconstructed from the code – they are what makes documentation valuable.",
   "Wrong: Documentation describes intended solution approaches but does not prove their effect. That is done by evaluation, tests and measurements.",
   "Correct: Documentation is primarily a means of communication: it gives everyone a common basis and surfaces misunderstandings early.",
   "Correct: Code shows what was built but not why. Documented rationale prevents deliberate decisions from being unknowingly reversed later."
  ],
  "explanation": "Architecture documentation serves communication, traceability of decisions and onboarding. Trap: it is neither proof of quality nor class-level design, and alternatives belong in it."
 },
 "c4q2": {
  "q": "A colleague asks what arc42 actually is. Which classification fits best?",
  "options": [
   "A standard for terms such as stakeholder, concern and viewpoint.",
   "A model with four zoom levels from context to code.",
   "A pragmatic template for structuring architecture documentation.",
   "A method for deriving decisions from quality goals."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: That is ISO/IEC/IEEE 42010. arc42 is not a standard but a pragmatic template.",
   "Wrong: That describes C4 (Context, Container, Component, Code). arc42 is an outline, not a zoom-level model.",
   "Correct: arc42 provides twelve sections, from introduction and goals to glossary; you fill in those relevant to the system.",
   "Wrong: That would be a design method. arc42 says where to record decisions, not how to arrive at them."
  ],
  "explanation": "arc42 is a documentation template with twelve sections. Trap: confusing it with the 42010 standard, with design methods or with the zoom levels of C4."
 },
 "c4q3": {
  "q": "You are creating the context delimitation for a booking system. Which statements about it are correct?",
  "options": [
   "It shows the system as a black box with its neighbours.",
   "It can distinguish business and technical context.",
   "It maps the neighbouring systems to their execution nodes.",
   "It is limited to technical channels and protocols.",
   "It shows the subsystems that serve the external interfaces.",
   "It makes visible what the system is not responsible for."
  ],
  "correct": [
   0,
   1,
   5
  ],
  "optExpl": [
   "Correct: The context view looks at the system from outside, surrounded by users and external systems; internals stay hidden.",
   "Correct: Where needed, a distinction is made: business (who exchanges what?) and technical (via which channels and protocols?).",
   "Wrong: Nodes and the mapping of software to infrastructure are the subject of the deployment view, not the context view.",
   "Wrong: Too narrow: the business context – which information is exchanged with whom – is part of it as well.",
   "Wrong: Internal subsystems belong to the building block view. The context view stays at black-box level.",
   "Correct: The clear system boundary clarifies early which responsibility lies with the system and which with its neighbours."
  ],
  "explanation": "The context view shows the system as a black box with neighbours and interfaces, business and/or technical. Trap: adding internal subsystems or node mapping."
 },
 "c4q4": {
  "q": "Which statements about the building block view (also component view) are correct?",
  "options": [
   "It is refined hierarchically from black box to white box.",
   "It shows the static decomposition of the system into building blocks.",
   "It maps the building blocks to their execution nodes.",
   "It describes each building block's responsibility and interfaces.",
   "Black box belongs to the building block view, white box to the runtime view."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Correct: A building block is first described as a black box, then opened as a white box; its parts are black boxes again.",
   "Correct: The building block view describes which software building blocks the system is made of and how they are structurally connected.",
   "Wrong: Mapping software to nodes is the subject of the deployment view.",
   "Correct: Only with responsibility and provided or required interfaces does the decomposition become understandable.",
   "Wrong: Black box/white box distinguishes the level of detail within the building block view, not two different views."
  ],
  "explanation": "The building block view shows the static, hierarchically refined decomposition with responsibilities and interfaces. Trap: black box/white box is a matter of detail, not a boundary between views."
 },
 "c4q5": {
  "q": "A team is planning the content of its runtime view. Which content belongs there?",
  "options": [
   "Internal algorithms of individual building blocks in detail.",
   "Start-up, error or operational scenarios.",
   "All use cases, as completely as possible.",
   "The mapping of building blocks to deployment artefacts.",
   "State models.",
   "Interaction of building blocks in selected scenarios."
  ],
  "correct": [
   1,
   4,
   5
  ],
  "optExpl": [
   "Wrong: That is the detailed design of a building block. The runtime view shows the interaction of several building blocks.",
   "Correct: Besides business flows, system start-up, error handling or operations are often architecturally relevant too.",
   "Wrong: Overgeneralisation: you deliberately pick a few architecturally relevant scenarios instead of documenting everything.",
   "Wrong: Which code goes into which artefact belongs to the deployment view.",
   "Correct: Little known: the curriculum explicitly mentions state models for the runtime view.",
   "Correct: The runtime view shows, using architecturally relevant scenarios, how building blocks collaborate at runtime."
  ],
  "explanation": "The runtime view shows interaction in selected scenarios, including start-up, errors, operations and state models. Trap: aiming for completeness or artefact mapping."
 },
 "c4q6": {
  "q": "What does the deployment view describe?",
  "options": [
   "In which order building blocks interact at runtime.",
   "Which artifacts run on which nodes.",
   "Which teams are responsible for which building blocks.",
   "Which external systems are connected via which channels."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: That is shown by the runtime view, e.g. as a sequence diagram.",
   "Correct: The deployment view maps software via deployment artifacts onto nodes and shows the channels between the nodes.",
   "Wrong: The assignment to teams is organizational and does not belong in the deployment view.",
   "Wrong: That is the technical context in the context view. The deployment view shows your own infrastructure and what runs on it."
  ],
  "explanation": "Deployment view = nodes, channels and the mapping of deployment artifacts onto them. External channels to neighbouring systems are shown by the technical context, sequences by the runtime view."
 },
 "c4q7": {
  "q": "A tender requires an architecture description \"according to ISO/IEC/IEEE 42010\". What does this standard govern most accurately?",
  "options": [
   "A quality model with characteristics such as maintainability.",
   "Terms such as stakeholder, concern, viewpoint and view.",
   "A template with twelve sections for structuring.",
   "A minimum set of mandatory views for every system."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: That is ISO/IEC 25010. The two standards are easily confused.",
   "Correct: 42010 provides the conceptual framework: stakeholders have concerns, viewpoints define how views address them.",
   "Wrong: The template with twelve sections is arc42. 42010 does not prescribe a concrete outline.",
   "Wrong: 42010 does not prescribe fixed views but requires views to be chosen to fit the stakeholders' concerns."
  ],
  "explanation": "42010 standardises the terms of architecture description, not a template or mandatory views (R3). Trap: confusing it with arc42 or ISO 25010."
 },
 "c4q8": {
  "q": "You want to show the order in which cart, inventory and payment exchange messages during checkout. Which UML diagram is most typical for this?",
  "options": [
   "Activity diagram.",
   "State diagram.",
   "Sequence diagram.",
   "Component diagram."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: It shows actions, branches and concurrency, i.e. control flow – the message order between named participants is not its focus.",
   "Wrong: It describes the states and transitions of a single object, not the exchange between several.",
   "Correct: Along the lifelines it shows top to bottom who sends which message to whom and when.",
   "Wrong: It shows the building blocks and their interfaces statically, but no temporal order."
  ],
  "explanation": "Time-ordered message exchange between several participants = sequence diagram. Trap: the activity diagram is dynamic too but focuses on control flow."
 },
 "c4q9": {
  "q": "A team wants to record why it chose a message broker instead of synchronous REST calls. What applies to an ADR for this?",
  "options": [
   "It serves the team as an implementation guide.",
   "It records context, decision and consequences.",
   "A later revision is recorded as a new ADR.",
   "It carries a status such as \"accepted\" or \"superseded\".",
   "It freezes the decision for the rest of the project.",
   "It bundles all project decisions in one document."
  ],
  "correct": [
   1,
   2,
   3
  ],
  "optExpl": [
   "Wrong: An ADR justifies a decision; it does not describe in detail how to implement it.",
   "Correct: These are core elements according to Nygard; here, why the broker was chosen and which consequences are accepted.",
   "Correct: The old ADR is not overwritten but marked as superseded – this preserves the history.",
   "Correct: The status is one of the fields of an ADR and shows whether the decision is in force.",
   "Wrong: ADRs do not forbid change; they make traceable what was decided, when and why.",
   "Wrong: ADRs are deliberately short individual documents – one per decision."
  ],
  "explanation": "An ADR is a short individual document with status, context, decision and consequences; revisions supersede it with a new one. Trap: collective document, build guide or change ban."
 },
 "c4q10": {
  "q": "An architect documents the same system for management, operations and development. Which statements are correct?",
  "options": [
   "Having a review board check comprehensibility.",
   "Using different views for the audiences.",
   "Maintaining a separate system model for each audience.",
   "Changing only the notation while the content stays the same.",
   "Adapting content, level of detail and form to each audience."
  ],
  "correct": [
   1,
   4
  ],
  "optExpl": [
   "Wrong: Whether documentation is understandable can ultimately only be judged by its audience – not by the author or a board.",
   "Correct: Operations, for example, mainly needs the deployment view, development the building block and runtime views.",
   "Wrong: All representations describe the same system and must be consistent; independent models drift apart.",
   "Wrong: A different notation alone is not enough – management needs different content, e.g. overview and risks.",
   "Correct: Form, content and level of detail are aligned with the information needs of the respective readers."
  ],
  "explanation": "Audience-oriented means content, detail and form fit the need, with consistent views of the same system. Trap: comprehensibility is judged by the audience, not a board."
 },
 "k4": {
  "q": "You choose diagrams for the architecture documentation. Does each means describe static structure or dynamic behavior?",
  "categories": [
   "Static (structure)",
   "Dynamic (behavior)"
  ],
  "rows": [
   "State diagram",
   "Numbered list of steps of a runtime scenario",
   "Composite structure diagram",
   "Package diagram",
   "Activity diagram",
   "Deployment diagram"
  ],
  "explanation": "Deployment diagrams are often thought of as dynamic, but they show the mapping of artifacts to nodes – i.e. structure. Processes can also be shown dynamically without UML, e.g. as a numbered list."
 },
 "c4q11": {
  "q": "An online shop sends orders to a supplier as SFTP files. Which statements about depicting this in the business and technical context are correct?",
  "options": [
   "The technical context shows which building block creates the file.",
   "The technical context replaces the deployment view.",
   "\"SFTP file transfer\" belongs in the technical context.",
   "\"Order to supplier\" belongs in the business context.",
   "Both representations treat the shop as a black box.",
   "The business context belongs in the requirements documentation."
  ],
  "correct": [
   2,
   3,
   4
  ],
  "optExpl": [
   "Wrong: Which internal building block is involved belongs in the building block view; the technical context stays outside.",
   "Wrong: It shows channels to neighbours, not the system's own infrastructure and the mapping of software to nodes.",
   "Correct: The technical context shows the channels and protocols used for the exchange.",
   "Correct: The business context shows which information is exchanged with which partner.",
   "Correct: Both business and technical context stay at the system boundary and show no internals.",
   "Wrong: Both contexts are part of the context view in the architecture documentation; they are separated by perspective, not by document."
  ],
  "explanation": "Business = who exchanges what, technical = via which channel; both treat the system as a black box. Trap: expecting internal building blocks or the deployment view in the technical context."
 },
 "c4q12": {
  "q": "An architect wants to depict the building block view with a UML component diagram. Which statements about this diagram are correct?",
  "options": [
   "It shows nodes and the artefacts running on them.",
   "It shows states and transitions of a component.",
   "It shows provided and required interfaces.",
   "It shows static structure, typical of the building block view.",
   "It shows the call order between components."
  ],
  "correct": [
   2,
   3
  ],
  "optExpl": [
   "Wrong: Nodes and artefacts are elements of the deployment diagram.",
   "Wrong: States and transitions are described by the state diagram.",
   "Correct: Components are shown with their provided and required interfaces and their connections.",
   "Correct: Like class and package diagrams it is a structure diagram and thus fits the building block view.",
   "Wrong: Temporal orders are shown by sequence or activity diagrams in the runtime view."
  ],
  "explanation": "The component diagram shows building blocks with provided and required interfaces – static structure. Trap: flows, nodes or states belong in other diagram types."
 },
 "c4q13": {
  "q": "A product owner asks why the architecture is not described in a single diagram. Which justifications are correct?",
  "options": [
   "Views address different stakeholder concerns.",
   "Each view is maintained as an independent model.",
   "For a monolith, a single view is usually sufficient.",
   "No single view shows all relevant aspects.",
   "The same building block can appear in several views."
  ],
  "correct": [
   0,
   3,
   4
  ],
  "optExpl": [
   "Correct: Operations, development and business ask different questions; each view answers certain ones.",
   "Wrong: All views describe the same system and must be consistent with each other.",
   "Wrong: A monolith also has structure, runtime behaviour and infrastructure – the variety of questions stays the same.",
   "Correct: Structure, behaviour and infrastructure cannot be sensibly combined in one picture.",
   "Correct: A building block appears, for example, as structure in the building block view and as an actor of a scenario in the runtime view."
  ],
  "explanation": "Several views are needed because no single view covers all aspects and concerns – for any system. Trap: treating views as independent models or monoliths as an exception."
 },
 "c4q15": {
  "q": "A team has been drawing free-form \"boxes and arrows\" and is considering switching to UML. Which advantages does a standardised notation most likely bring?",
  "options": [
   "Exchange between stakeholders and tools becomes easier.",
   "It keeps diagrams consistent with the code.",
   "It makes the legend in the diagram unnecessary.",
   "Diagram elements have an agreed meaning.",
   "It defines a uniform level of detail."
  ],
  "correct": [
   0,
   3
  ],
  "optExpl": [
   "Correct: A common notation is understood across teams and modelling tools.",
   "Wrong: UML diagrams also become outdated unless they are maintained or generated.",
   "Wrong: Legends still help with UML, e.g. for colours, stereotypes or simplified representation.",
   "Correct: Readers do not have to guess what an arrow or box means – the semantics are defined.",
   "Wrong: How detailed a diagram is depends on the audience; the notation does not dictate it."
  ],
  "explanation": "Standard notation gives elements an agreed meaning and eases communication and tool use. Trap: it ensures neither currency nor a uniform level of detail."
 },
 "c4q16": {
  "q": "A review found that nobody understands how cart, payment and shipping work together when an order is placed. Which view should be added first?",
  "options": [
   "Building block view.",
   "Context view.",
   "Deployment view.",
   "Runtime view."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: It names the building blocks involved and their interfaces but does not show the dynamic interaction.",
   "Wrong: It shows the system as a black box with its neighbours; internal building blocks such as cart or payment do not appear there.",
   "Wrong: It shows where software runs and how nodes are connected – not the order in which building blocks collaborate.",
   "Correct: It shows the interaction of building blocks in a concrete scenario, e.g. as a sequence diagram."
  ],
  "explanation": "The interaction of building blocks in a flow is shown by the runtime view. Trap: the building block view names the participants but not their interplay."
 },
 "c4q17": {
  "q": "You are setting up arc42 documentation for a new project. Which content does arc42 typically include?",
  "options": [
   "Project and release plan with milestones.",
   "Architecture decisions.",
   "UI mock-ups for every dialogue.",
   "Context and scope.",
   "Risks and technical debt.",
   "Complete API reference of all classes."
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Wrong: Project planning is project management and is not one of the arc42 sections.",
   "Correct: Section 9 records important decisions and their rationale.",
   "Wrong: Wireframes belong to UX design or requirements, not to architecture documentation according to arc42.",
   "Correct: Section 3 delimits the system from users and neighbouring systems.",
   "Correct: Section 11 makes known risks and technical debt visible.",
   "Wrong: A class reference would be code documentation and contradicts the principle of recording only what is architecturally relevant."
  ],
  "explanation": "arc42 includes context and scope, architecture decisions, and risks and technical debt, among others. Trap: project plans, UI mock-ups or class references are not part of it."
 },
 "k7": {
  "q": "A new team member asks questions about the system. In which view will they most likely find the answer?",
  "categories": [
   "Building block view",
   "Deployment view"
  ],
  "rows": [
   "How many instances of the ordering service run in production?",
   "Over which channels and protocols are the servers connected?",
   "Which parts make up the billing subsystem internally?",
   "Which interfaces does the customer management module offer?",
   "Which other modules does the invoice module depend on?",
   "Which building blocks are contained in which container image?"
  ],
  "explanation": "The trap: mapping building blocks to deployment artifacts (container image) also belongs to the deployment view, not the building block view. Internal decomposition, interfaces and dependencies between modules are shown in the building block view."
 },
 "c4q18": {
  "q": "Which statements about the UML class diagram in architecture documentation are correct?",
  "options": [
   "According to the curriculum it is only R3 and not examined.",
   "Like the package diagram, it is a structure diagram.",
   "It can be used in the building block view.",
   "It is suitable for flows in the runtime view.",
   "It is the mandatory notation for the building block view.",
   "It shows classes and relationships such as association."
  ],
  "correct": [
   1,
   2,
   5
  ],
  "optExpl": [
   "Wrong: The class diagram is R2. Only state and composite structure diagrams are R3.",
   "Correct: Class, package and component diagrams show static structure.",
   "Correct: As a static diagram it is typically suited to the building block view.",
   "Wrong: It shows no temporal flow; sequence or activity diagrams are used for that.",
   "Wrong: The curriculum does not prescribe a specific notation per view.",
   "Correct: Types and their relationships such as association or inheritance are its content."
  ],
  "explanation": "The class diagram (R2) shows static structure and fits the building block view. Trap: it is neither R3 nor mandatory notation, and it is unsuitable for flows."
 },
 "c4q19": {
  "q": "A team defines which decisions it records as Architecture Decision Records (ADRs). Which statements are correct?",
  "options": [
   "A decision that triggers follow-up decisions.",
   "Only once the decision has proven itself in practice.",
   "As a continuously maintained overall description of the architecture.",
   "A fundamental technology decision that is hard to reverse.",
   "Every detailed decision in the code.",
   "The choice of an integration pattern with far-reaching impact."
  ],
  "correct": [
   0,
   3,
   5
  ],
  "optExpl": [
   "Correct: Dependencies between decisions should be recognised and documented; the trigger should be recorded.",
   "Wrong: ADRs are written at decision time while context and alternatives are still present.",
   "Wrong: An ADR concerns exactly one decision and is not an overall description of the current architecture.",
   "Correct: Expensive, hard-to-change decisions in particular are needed later with alternatives and rationale.",
   "Wrong: Overgeneralisation: ADRs are for load-bearing decisions; too many dilute their value.",
   "Correct: Far-reaching structural decisions are typical ADR candidates."
  ],
  "explanation": "ADR-worthy are load-bearing, hard-to-reverse decisions and those with follow-up decisions – recorded at decision time. Trap: every detail or an overall description."
 },
 "c4q20": {
  "q": "What does a UML deployment diagram most accurately depict?",
  "options": [
   "Components and their provided interfaces.",
   "Time-ordered messages between objects.",
   "Packages and their dependencies on each other.",
   "Nodes, artefacts and communication paths."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: That is the component diagram of the building block view.",
   "Wrong: That is the sequence diagram of the runtime view.",
   "Wrong: That is shown by the package diagram – a static structure, not infrastructure.",
   "Correct: It shows execution environments, the artefacts deployed on them and the connections between nodes."
  ],
  "explanation": "The deployment diagram shows nodes, artefacts and communication paths (deployment view). Trap: component and package diagrams look similarly technical but show structure."
 },
 "c4q21": {
  "q": "Your project's architecture documentation increasingly deviates from the code. Which measures are most likely to keep it current?",
  "options": [
   "Updating the documentation only in bulk at major releases.",
   "Delegating upkeep to a central documentation role.",
   "Generating overviews from the code where sensible.",
   "Anchoring documentation upkeep in the definition of done.",
   "Keeping it lean and versioned in the repository.",
   "Recording as many details as possible to spot deviations."
  ],
  "correct": [
   2,
   3,
   4
  ],
  "optExpl": [
   "Wrong: Bulk updates let the documentation become outdated between releases and lose details.",
   "Wrong: Someone far from the changes learns about them too late; the documentation lags behind.",
   "Correct: Generated diagrams stay in sync automatically, e.g. via diagrams-as-code.",
   "Correct: If documentation is updated along with relevant changes, it does not silently become outdated.",
   "Correct: Close to the code and small in scope, upkeep is cheap and changes remain traceable.",
   "Wrong: More detail increases upkeep effort – the documentation tends to become outdated even faster."
  ],
  "explanation": "Documentation stays current if it is lean, versioned, close to the code, part of the DoD and generated where possible. Trap: more detail, central upkeep or bulk updates."
 },
 "c4q22": {
  "q": "Business and development understand different things by \"contract\". Which statements about a glossary in the documentation are correct?",
  "options": [
   "It makes identical terms with different meanings visible.",
   "It is best maintained by development alone.",
   "It becomes unnecessary once a domain model exists.",
   "It ensures consistent terms between business and IT.",
   "It focuses on technical terms such as frameworks."
  ],
  "correct": [
   0,
   3
  ],
  "optExpl": [
   "Correct: Homonyms like \"contract\" in particular are exposed by unambiguous definitions.",
   "Wrong: Terms must be agreed jointly by business and development, otherwise the business perspective is missing.",
   "Wrong: A domain model shows structures but does not replace the textual definition of terms.",
   "Correct: A common vocabulary reduces misunderstandings and is used consistently in documentation and discussions.",
   "Wrong: Business terms are often the ambiguous ones – they belong in it in particular."
  ],
  "explanation": "A glossary creates a shared, consistent vocabulary and exposes homonyms. Trap: it is mainly about business terms, and it is maintained jointly."
 },
 "c4q23": {
  "q": "Three new developers join the project next week. What should an architecture overview for them most likely contain?",
  "options": [
   "System context, goals and key constraints.",
   "Main building blocks and their responsibilities.",
   "A detailed description of the build scripts.",
   "A chronological list of all changes so far.",
   "Key decisions and their rationale."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Correct: The big picture frames everything else: what the system is for and what constrains it.",
   "Correct: A coarse building block view shows where things are without diving into details.",
   "Wrong: Useful for local setup but belongs in a developer guide, not in the architecture overview.",
   "Wrong: A change history provides details but no overview of the architecture.",
   "Correct: Those who know the reasons do not accidentally reverse load-bearing decisions."
  ],
  "explanation": "An architecture overview conveys context, goals, constraints, main building blocks and key decisions. Trap: change history or build details are useful but not an overview."
 },
 "c4q24": {
  "q": "A review notices that a building block is named differently in the building block and runtime views. Which statements about view consistency are correct?",
  "options": [
   "Different levels of detail per view are permissible.",
   "Consistency requires a common modelling tool.",
   "Every building block must appear in every view.",
   "The same building block must not be contradictory across views.",
   "In case of contradiction, the building block view always prevails."
  ],
  "correct": [
   0,
   3
  ],
  "optExpl": [
   "Correct: Views show different aspects and levels of abstraction; they must still be free of contradictions.",
   "Wrong: A tool can help but is not a prerequisite; reviews and conventions often suffice.",
   "Wrong: The runtime view shows only selected scenarios; not every building block appears there.",
   "Correct: All views describe the same system; deviating names or responsibilities confuse readers.",
   "Wrong: No view takes precedence by default; contradictions are resolved on their merits."
  ],
  "explanation": "Views may differ in detail but must be free of contradictions. Trap: consistency does not mean \"every building block everywhere\" or \"the building block view wins\"."
 },
 "k11": {
  "q": "You revise an architecture documentation for appropriateness. Does the content belong in it?",
  "categories": [
   "Sensible documentation content",
   "Does not belong in it"
  ],
  "rows": [
   "The sprint plan with the tasks of the next iteration",
   "A complete copy of the requirements specification",
   "Known risks and technical debt",
   "A description of every single class with all its methods",
   "Rejected alternatives to a central decision",
   "The prioritized quality goals of the system"
  ],
  "explanation": "Quality goals, risks and even rejected alternatives help readers understand the architecture. Class details, project planning and copied requirements bloat the documentation – reference rather than copy."
 },
 "c4q25": {
  "q": "You open the building block \"Billing\" in the building block view as a white box. What does this description most likely show?",
  "options": [
   "The embedding of billing in the system context.",
   "The contained building blocks and their relationships.",
   "The call order of the internal building blocks.",
   "Billing's provided and required interfaces."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: The environment of the overall system is shown by the context view; the white box looks inward.",
   "Correct: The white box shows the internal structure: which building blocks make up billing and how they are connected.",
   "Wrong: Temporal flows belong in the runtime view, not in the static white box.",
   "Wrong: That is the external view, i.e. the black-box description of the building block."
  ],
  "explanation": "The white box opens a building block and statically shows its internal building blocks and relationships. Trap: interfaces are black box, flows are runtime view."
 },
 "c4q26": {
  "q": "What should the description of an externally used interface typically specify?",
  "options": [
   "The behaviour in error and exceptional cases.",
   "The internal data structure in which the provider stores the data passed in, so that users can estimate side effects.",
   "The programming language and frameworks of the implementation, so that users can choose compatible libraries.",
   "Versioning and rules for backward compatibility.",
   "Guaranteed qualities such as response time or availability, insofar as they are relevant to users.",
   "The operations offered, with parameters, data formats and their meaning."
  ],
  "correct": [
   0,
   3,
   4,
   5
  ],
  "optExpl": [
   "Correct: Users must know how the interface behaves in case of errors, invalid input or overload. Only then can they handle such cases reliably.",
   "Wrong: This violates information hiding: internal storage is an implementation detail and should remain replaceable. Relevant side effects are described in business terms as behaviour, not via internal structures.",
   "Wrong: Interface and implementation are separated precisely so that the implementation remains replaceable. Users need the protocol and data formats, not the technology behind the interface.",
   "Correct: External users cannot be changed in lockstep. The description must therefore state how versions are identified and which changes remain compatible.",
   "Correct: Guaranteed qualities are part of the contract users rely on. Without them, nobody can judge whether the interface is fit for their purpose.",
   "Correct: Operations, parameters, data formats and their semantics form the core of the contract. Only the semantics make clear what a call actually does."
  ],
  "explanation": "An interface description defines the contract: operations and semantics, error behaviour, guaranteed qualities and – especially externally – versioning. Internal data structures and the implementation technology do not belong in it (separation of interface and implementation)."
 },
 "c4q27": {
  "q": "A project manager demands documenting \"simply everything\". Which arguments speak most strongly against this?",
  "options": [
   "The architecture can be derived completely from the code.",
   "What no audience needs adds no value.",
   "Unnecessary redundancy with the code should be avoided.",
   "Once code exists, it takes over the role of documentation.",
   "Extensive documentation creates upkeep effort and goes stale quickly."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Wrong: Structures can partly be reconstructed, but rationale and rejected alternatives cannot.",
   "Correct: Appropriateness means as much as necessary, as little as possible – measured by the readers' needs.",
   "Correct: What the code shows unambiguously need not be maintained twice; documentation adds rationale and overview.",
   "Wrong: Code contains no rationale or alternatives; documentation remains necessary throughout the life cycle.",
   "Correct: The more content, the more must be updated with every change – otherwise it becomes wrong."
  ],
  "explanation": "Against \"documenting everything\" speak upkeep effort, redundancy with the code and lack of value. Trap: this does not mean code replaces documentation."
 },
 "c4q28": {
  "q": "You want to depict an approval process with parallel checks in the runtime view. Which statements about the UML activity diagram are correct?",
  "options": [
   "It primarily shows the states of an object.",
   "It can depict concurrent flows.",
   "It shows actions, branches and merges.",
   "It maps building blocks to their execution nodes.",
   "It is suitable for the runtime view."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Wrong: States and transitions of an object are described by the state diagram.",
   "Correct: Fork and join nodes allow parallel checks to be modelled.",
   "Correct: Actions, decisions and their merging represent the control flow.",
   "Wrong: Mapping to nodes is shown by the deployment diagram.",
   "Correct: Like the sequence diagram it shows flows and therefore fits the runtime view."
  ],
  "explanation": "The activity diagram shows flows with branching and concurrency and fits the runtime view. Trap: confusing it with the state diagram."
 },
 "c4q29": {
  "q": "Which of the following sections does the arc42 template explicitly provide?",
  "options": [
   "Test strategy and test planning.",
   "Cross-cutting concepts.",
   "Constraints.",
   "Solution strategy.",
   "Operating and licence costs.",
   "Quality requirements."
  ],
  "correct": [
   1,
   2,
   3,
   5
  ],
  "optExpl": [
   "Wrong: Sounds like quality assurance but is not a separate arc42 section; test concepts may at most appear as a cross-cutting concept.",
   "Correct: Section 8 centrally describes overarching concepts such as persistence or error handling.",
   "Correct: Section 2 records requirements that restrict the solution space.",
   "Correct: Section 4 briefly summarises the fundamental decisions and solution approaches.",
   "Wrong: Cost planning is project or operations management and not an arc42 section.",
   "Correct: Section 10 contains, for example, the quality tree and quality scenarios."
  ],
  "explanation": "arc42 provides constraints, solution strategy, cross-cutting concepts and quality requirements, among others. Trap: test strategy and costs sound plausible but are not sections."
 },
 "c4q30": {
  "q": "A team discusses whether to use UML for its microservice architecture. Which statements about UML as a notation are correct?",
  "options": [
   "The curriculum mandates UML for every view.",
   "UML is only suitable for object-oriented systems.",
   "Alternatives such as C4 or ArchiMate are also possible.",
   "UML can also be used in a sketchy way.",
   "Component, deployment and sequence diagrams are useful.",
   "A detailed UML model replaces textual documentation."
  ],
  "correct": [
   2,
   3,
   4
  ],
  "optExpl": [
   "Wrong: The curriculum does not prescribe a specific notation per view.",
   "Wrong: Component and deployment diagrams are not tied to object orientation.",
   "Correct: The curriculum names alternatives to UML (R3); there is no mandatory notation.",
   "Correct: As long as the meaning stays clear, UML may be used informally; formality is adjustable.",
   "Correct: These diagram types depict building blocks, infrastructure and flows – for services too.",
   "Wrong: Diagrams show structure and flows but no rationale or trade-offs."
  ],
  "explanation": "UML offers useful diagram types, sketchy and for services too; alternatives are allowed. Trap: UML is neither mandatory nor a substitute for textual rationale."
 },
 "c4q31": {
  "q": "The operations team wants to know which parts of the system run on which servers and how these are connected. Which view helps most?",
  "options": [
   "Deployment view.",
   "Building block view.",
   "Technical context.",
   "Runtime view."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: It shows nodes, channels and which artefacts run on which nodes.",
   "Wrong: It deliberately shows the software structure independently of the infrastructure.",
   "Wrong: It shows channels to external neighbours but treats the system as a black box – its own servers are not visible.",
   "Wrong: It shows interaction in scenarios but not where the software is installed."
  ],
  "explanation": "Servers, connections and the mapping of software onto them are shown by the deployment view. Trap: the technical context shows channels, but only to external neighbours."
 },
 "k13": {
  "q": "You distribute content across the chapters of an arc42 documentation. Runtime view or deployment view?",
  "categories": [
   "Runtime view",
   "Deployment view"
  ],
  "rows": [
   "Which nodes the test environment and which the production environment comprises",
   "The state transitions of an order from “new” to “shipped”",
   "Which artifact is installed on which node",
   "How the building blocks interact in case of an error",
   "The sequence when starting up and initializing the system"
  ],
  "explanation": "Startup and error sequences as well as state models belong in the runtime view. Environments and where artifacts are installed belong in the deployment view."
 },
 "c4q32": {
  "q": "Your team is drawing up criteria for good architecture documentation. Which criteria are correct in the sense of the curriculum?",
  "options": [
   "Complete down to the lowest building block level.",
   "Appropriate: as much as necessary, as little as possible.",
   "Efficient: readers find what they are looking for quickly.",
   "Maintainable: can be kept up to date with the system.",
   "Currency is secondary if the rationale is right.",
   "Understandable: ultimately judged by the audience."
  ],
  "correct": [
   1,
   2,
   3,
   5
  ],
  "optExpl": [
   "Wrong: Completeness down to every detail is not a criterion; it contradicts appropriateness.",
   "Correct: Appropriateness is one of the named quality criteria of technical documentation.",
   "Correct: Efficiency covers quick retrieval and reasonable effort for creation and upkeep.",
   "Correct: Maintainability ensures that the documentation can be updated when changes occur.",
   "Wrong: The correctness criterion requires agreement with the system; outdated documentation does harm despite good rationale.",
   "Correct: Not the author or a board but the readers decide whether they understand what is meant."
  ],
  "explanation": "The criteria are understandability, correctness, efficiency, appropriateness and maintainability. Trap: completeness down to every detail is not a goal."
 },
 "c4q33": {
  "q": "A team uses arc42 and is considering introducing ADRs as well. How do the two most likely differ regarding decisions?",
  "options": [
   "ADRs may only be used within arc42.",
   "arc42 embeds them in the overall documentation, ADRs are individual documents.",
   "arc42 records open decisions, ADRs only those already made.",
   "Only ADRs record alternatives and rationale."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: ADRs can be used independently of arc42; they can, however, be referenced well in the decisions section.",
   "Correct: arc42 places decisions in one section; an ADR is a standalone document per decision with a status.",
   "Wrong: Both mainly record decisions that have been made; an ADR can also have the status \"proposed\".",
   "Wrong: arc42 also provides for rationale and alternatives; ADRs are just a different form."
  ],
  "explanation": "arc42 embeds decisions in the overall documentation, ADRs are standalone individual documents with status; both can be combined. Trap: rationale exists in both."
 },
 "c4q34": {
  "q": "What does an architecture decision record (ADR) according to Michael Nygard contain?",
  "options": [
   "The decision itself.",
   "Consequences.",
   "Continuously updated experience from operations.",
   "An effort estimate for the implementation.",
   "Status (e.g. accepted, superseded).",
   "Context."
  ],
  "correct": [
   0,
   1,
   4,
   5
  ],
  "optExpl": [
   "Correct: The core of the ADR: the concrete decision made.",
   "Correct: The consequences – positive and negative – make the decision traceable later.",
   "Wrong: ADRs are not continuously rewritten. If something changes, a new ADR is created that supersedes the old one.",
   "Wrong: Effort is project planning. An ADR records what was decided and why.",
   "Correct: The status shows whether a decision is proposed, valid or replaced by a newer one.",
   "Correct: The context describes the forces and the problem that trigger the decision."
  ],
  "explanation": "Nygard ADR: title, status, context, decision, consequences. Effort does not belong in it, and instead of updating an ADR you supersede it with a new one."
 },
 "c4q35": {
  "q": "Your team offers a REST API to partner companies and also has internal interfaces between building blocks. What most likely applies to their documentation?",
  "options": [
   "Internal interfaces are sufficiently described by the code.",
   "Internal interfaces are described in more detail.",
   "An OpenAPI specification covers syntax and semantics.",
   "External ones are usually documented earlier, more formally and versioned."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: The code shows only the signature, not guarantees and error behaviour; internal ones need an appropriate description too.",
   "Wrong: The other way round: external interfaces have more, often unknown users and need more formality.",
   "Wrong: OpenAPI mainly describes syntax; meaning and error behaviour must be recorded additionally.",
   "Correct: External interfaces are contracts with third parties, hard to change, and therefore need stability and versioning."
  ],
  "explanation": "External interfaces are contracts with third parties and are documented earlier, more formally and versioned; internal ones need an appropriate description. Trap: OpenAPI provides only the syntax."
 },
 "c4q36": {
  "q": "A team is to document and communicate its concept for error handling and logging. Which statements are correct?",
  "options": [
   "Communicate it via sample implementations as well.",
   "Describe it separately in each affected building block.",
   "Document it only once implementation is complete.",
   "Describe it centrally in one place, e.g. arc42 section 8.",
   "Record the motivation, rules, rationale and an example.",
   "This makes the runtime view for error cases unnecessary."
  ],
  "correct": [
   0,
   3,
   4
  ],
  "optExpl": [
   "Correct: Sample code, walkthroughs or templates help carry the concept into the building blocks.",
   "Wrong: Sounds close to implementation but leads to redundancy and diverging variants.",
   "Wrong: A cross-cutting concept should guide uniform implementation – afterwards it comes too late.",
   "Correct: Documented centrally, the concept is implemented uniformly across many building blocks.",
   "Correct: Readers then understand not only the rule but also why and how to apply it.",
   "Wrong: Concepts complement the views; an architecturally relevant error scenario can still belong in the runtime view."
  ],
  "explanation": "Cross-cutting concepts are documented centrally with motivation, rules, rationale and example and conveyed e.g. via sample code. Trap: describing them separately per building block."
 },
 "c5q1": {
  "q": "Your team formulates quality requirements as scenarios. Which elements belong to a quality scenario according to the CPSA-F curriculum?",
  "options": [
   "Response of the system.",
   "The priority in the utility tree.",
   "The chosen tactic or solution strategy.",
   "Stimulus, i.e. the triggering event.",
   "Context or environment (e.g. normal operation).",
   "Measure or response measure."
  ],
  "correct": [
   0,
   3,
   4,
   5
  ],
  "optExpl": [
   "Correct: The response describes what the system does in reaction to the stimulus – the required behaviour.",
   "Wrong: Scenarios are often prioritised, e.g. in the utility tree, but the priority is additional information for the evaluation, not part of the scenario itself.",
   "Wrong: The scenario describes the WHAT, not the HOW. The solution emerges in design and is then checked against the scenario.",
   "Correct: The stimulus is the event the system must respond to, e.g. a request, a failure or a change request.",
   "Correct: The context defines the circumstances under which the scenario applies – the same request means something different at peak load than in normal operation.",
   "Correct: Only a measure such as “in under 2 s at the 95th percentile” makes the scenario verifiable."
  ],
  "explanation": "The curriculum names four elements: context, stimulus, response, measure. Trap: solution strategy (HOW) and priority are not parts of the scenario."
 },
 "c5q2": {
  "q": "A client asks what ATAM (Architecture Tradeoff Analysis Method) does. Which characterisation is most accurate?",
  "options": [
   "Checks whether the code follows the layering rules of the design.",
   "Measures coupling and complexity in the code with tool support.",
   "Scenario-based, mainly qualitative, makes trade-offs visible.",
   "Rates alternatives by costs and benefits in monetary terms."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: This is a conformance analysis (LG 05-03). ATAM evaluates decisions against quality goals, not the implementation against the design.",
   "Wrong: These are quantitative metric analyses. ATAM is a facilitated workshop method and does not even need code.",
   "Correct: ATAM plays prioritised quality scenarios against the architecture decisions and makes trade-offs, sensitivity points and risks explicit.",
   "Wrong: This describes a cost-benefit analysis such as CBAM, which can build on ATAM. ATAM itself asks about the effect on the quality goals."
  ],
  "explanation": "ATAM is scenario-based and mainly qualitative and makes trade-offs explicit. Trap: cost-benefit evaluation (CBAM), metric measurement and conformance checking are different methods."
 },
 "c5q3": {
  "q": "A project is close to the end of design; there is no code yet. Which statements about qualitative and quantitative evaluation are correct?",
  "options": [
   "Both kinds of method complement each other and are combined.",
   "ATAM is quantitative because scenarios contain response measures.",
   "As soon as code exists, metrics replace expert reviews.",
   "Qualitative methods can be used even without running code.",
   "Load tests are qualitative because their results are interpreted."
  ],
  "correct": [
   0,
   3
  ],
  "optExpl": [
   "Correct: Metrics deliver anomalies that are interpreted qualitatively in a review; scenarios in turn can trigger measurements.",
   "Wrong: The scenarios contain measures, but the evaluation is done by expert judgement. Scenario-based evaluation remains qualitative.",
   "Wrong: Not every quality is measurable, and every number needs interpretation. Qualitative methods remain necessary even with code.",
   "Correct: Reviews and scenario analyses work with designs, models and expert knowledge – especially early on, when corrections are still cheap.",
   "Wrong: Load tests measure runtime behaviour and are therefore quantitative. The fact that measurements must be interpreted does not make the method qualitative."
  ],
  "explanation": "Qualitative methods work without code, quantitative ones need an analysable artefact; both complement each other. Trap: measures in a scenario do not make ATAM quantitative, and interpretation does not make load tests qualitative."
 },
 "c5q4": {
  "q": "You are compiling key figures for an architecture review. Which of the following are quantitative (metric-based) values?",
  "options": [
   "Afferent and efferent coupling of a module.",
   "Response time under load at the 95th percentile.",
   "Result of a user survey on usability.",
   "Rating a trade-off as critical in an ATAM workshop.",
   "Priority “high” of a scenario in the utility tree.",
   "Cyclomatic complexity of a component."
  ],
  "correct": [
   0,
   1,
   5
  ],
  "optExpl": [
   "Correct: Incoming and outgoing dependencies are counted – a classic coupling metric.",
   "Correct: Measuring runtime behaviour quantitatively is explicitly named in the curriculum as an analysis method.",
   "Wrong: The curriculum lists interviews and surveys as qualitative evaluation, even if answers are recorded on a scale.",
   "Wrong: Whether a trade-off is critical is decided by discussion in the workshop – a qualitative result.",
   "Wrong: The rating high/medium/low is a judgement of the participants, not a measured value.",
   "Correct: It is calculated from the control-flow graph and is a source-code metric."
  ],
  "explanation": "Coupling values, cyclomatic complexity and measured response times are quantitative. Trap: priorities, workshop ratings and surveys are qualitative judgements, even if they look like figures."
 },
 "c5q5": {
  "q": "In an ATAM workshop the team builds a utility tree. What is it most likely used for?",
  "options": [
   "Refining quality attributes down to prioritised scenarios.",
   "Decomposing building blocks hierarchically down to class level.",
   "Recording decisions taken together with alternatives.",
   "Ordering risks by probability and impact."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: The tree refines abstract quality attributes step by step down to concrete, prioritised scenarios and thus focuses the evaluation.",
   "Wrong: The hierarchical decomposition into building blocks is shown by the building block view. The utility tree structures qualities, not the solution structure.",
   "Wrong: That is what architecture decision records do. The utility tree contains the requirements against which decisions are checked.",
   "Wrong: That is a risk matrix. In the utility tree, scenarios are prioritised by importance and difficulty; risks are not classified."
  ],
  "explanation": "The utility tree structures quality attributes down to prioritised scenarios. Trap: hierarchy and prioritisation also exist in the building block view and the risk matrix – but for other things."
 },
 "c5q6": {
  "q": "Project management asks what an architecture analysis is good for. Which reasons for an analysis does the CPSA-F curriculum name?",
  "options": [
   "Proving goal achievement before implementation starts.",
   "Checking whether stakeholder concerns are addressed.",
   "Checking whether the implementation matches the decisions.",
   "Determining whether the design will meet the requirements.",
   "Finding risks in the design – even after implementation.",
   "Fixing effort and deadlines for implementation bindingly."
  ],
  "correct": [
   1,
   2,
   3,
   4
  ],
  "optExpl": [
   "Wrong: An analysis delivers well-founded assessments and risks, but no proof that quality goals will be met.",
   "Correct: The curriculum explicitly names the extent to which architecturally relevant stakeholder concerns are addressed.",
   "Correct: According to the curriculum, the match between implementation and architecture decisions is also a reason for analysis.",
   "Correct: Whether the design meets or will meet the requirements is a core purpose of the analysis.",
   "Correct: The curriculum explicitly names risks and improvements before, during and after implementation, not only in early phases.",
   "Wrong: That is the job of project planning. Results may feed into it but are not the purpose of the analysis."
  ],
  "explanation": "Reasons according to the curriculum: finding risks (before, during, after implementation), meeting requirements, fit of the implementation, stakeholder concerns. Trap: an analysis is neither a proof nor a planning instrument."
 },
 "c5q7": {
  "q": "A metrics report shows very high coupling for a module. What does this finding most likely express?",
  "options": [
   "Strong functional unity within the module.",
   "Low cohesion – both are the same property.",
   "Many dependencies; changes propagate easily.",
   "Many branches in the control flow of the module."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: That is high cohesion – a property inside the module that is actually desirable.",
   "Wrong: Both often occur together but are different: coupling concerns relationships between modules, cohesion the internal unity of a module.",
   "Correct: Coupling measures the dependencies on other modules. Many of them make isolated changing, testing and replacing harder.",
   "Wrong: Branches are measured by cyclomatic complexity. It says nothing about dependencies on other modules."
  ],
  "explanation": "High coupling means many dependencies on other modules. Trap: cohesion (unity within the module) and cyclomatic complexity (branches) are separate measures."
 },
 "c5q8": {
  "q": "An analysis tool reports a cyclomatic complexity of 14 for a method. What does this measure?",
  "options": [
   "Number of linearly independent paths through the control flow.",
   "Number of dependencies on other modules.",
   "Depth of the inheritance hierarchy.",
   "Number of statements in the method."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Cyclomatic complexity is calculated from the control-flow graph and grows essentially with the branches.",
   "Wrong: That is coupling (afferent/efferent). It concerns relationships between modules, not control flow.",
   "Wrong: That is the inheritance depth of a class – a different object-oriented metric.",
   "Wrong: That is close to lines of code. A long method without branches still has low cyclomatic complexity."
  ],
  "explanation": "Cyclomatic complexity counts independent control-flow paths. Trap: size (LOC), coupling and inheritance depth are different metrics."
 },
 "c5q9": {
  "q": "A team formulates its quality goals as scenarios before evaluating the design. What benefit do the scenarios have here?",
  "options": [
   "They serve as the yardstick for architecture decisions.",
   "They can only be checked against a running system.",
   "They define which solution achieves a goal.",
   "They are hardly suitable for goals like maintainability.",
   "They make abstract quality goals verifiable."
  ],
  "correct": [
   0,
   4
  ],
  "optExpl": [
   "Correct: Decisions are played through against the scenarios – this shows whether and how well they support the goals.",
   "Wrong: Scenarios can be played through against designs and models too – that is the core of scenario-based analysis.",
   "Wrong: Scenarios describe the required behaviour (WHAT), not the technical solution (HOW).",
   "Wrong: Maintainability can also be expressed as a change scenario, e.g. “new payment type within two person-days”.",
   "Correct: “Performant” cannot be checked; a scenario with context, stimulus, response and measure can."
  ],
  "explanation": "Scenarios make goals verifiable and serve as a yardstick for decisions. Trap: they do not describe a solution, do not need a running system and also work for maintainability as change scenarios."
 },
 "c5q10": {
  "q": "A team has colleagues check its design in a walkthrough before the first sprint. What most likely characterises this form of evaluation?",
  "options": [
   "Quantitative, because coupling and complexity are collected.",
   "Formal like an inspection, with an independent moderator.",
   "Requires code, because models are too abstract.",
   "Qualitative; possible on the design even without implementation."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: Metrics can feed into a review, but the judgement comes from expert assessment. The review remains qualitative.",
   "Wrong: In a walkthrough the author leads through the design; it is less formal than an inspection with fixed roles and a moderator.",
   "Wrong: Reviews work precisely with documentation and design models, which the curriculum names as sources of information.",
   "Correct: Experts go through the design and models together and assess them against the quality goals – no code is needed."
  ],
  "explanation": "A walkthrough is a qualitative, expert-based review that is possible even before implementation. Trap: metrics feeding into it do not make it quantitative, and it is less formal than an inspection."
 },
 "c5q11": {
  "q": "You are planning the analysis of an online shop. Which of the following methods count as qualitative analysis methods according to the curriculum?",
  "options": [
   "Scenario-based analysis, e.g. ATAM.",
   "Cyclomatic complexity per component.",
   "Architecture review by experts.",
   "Penetration test of the order interface.",
   "Measuring response times under realistic load.",
   "Determining test coverage as a percentage."
  ],
  "correct": [
   0,
   2,
   3
  ],
  "optExpl": [
   "Correct: The architecture is played through against scenarios and assessed by expert judgement.",
   "Wrong: A source-code metric – quantitative.",
   "Correct: Experts assess the design against the quality goals – a judgement, not a measurement.",
   "Correct: The curriculum explicitly names penetration tests alongside interviews and surveys as qualitative evaluation.",
   "Wrong: Measuring runtime behaviour is a quantitative method according to the curriculum.",
   "Wrong: Test coverage is a calculated value and therefore a quantitative measure."
  ],
  "explanation": "Reviews, scenario analyses and – easily overlooked – penetration tests count as qualitative analysis according to the curriculum. Test coverage, complexity metrics and load measurements are quantitative."
 },
 "c5q12": {
  "q": "At which points in time is an architecture analysis useful?",
  "options": [
   "Mainly before implementation, since later analyses can only check conformance and no longer whether requirements are met.",
   "Above all after the implementation is complete, because only then are reliable measurements available.",
   "During implementation, to check whether the implementation matches the design and the architecture decisions.",
   "Only when there is a concrete reason such as quality problems; without a reason, an analysis ties up capacity that is missing for design.",
   "Already before implementation, to find risks in the design while corrections are still cheap.",
   "For existing systems, e.g. before a major extension or migration."
  ],
  "correct": [
   2,
   4,
   5
  ],
  "optExpl": [
   "Wrong: Later analyses can also check whether requirements are met – e.g. via measurements, load tests or acceptance tests. Restricting them to conformance is wrong.",
   "Wrong: Measurements are indeed only available later – but analysing only then finds design risks too late. The curriculum names analysis before, during and after implementation, not mainly afterwards.",
   "Correct: Alongside implementation, a target/actual comparison shows whether the code follows the planned architecture. This detects erosion before it becomes entrenched.",
   "Wrong: Analyses triggered by a concrete reason make sense, but not only those: ongoing analyses are meant to find risks before they become problems. Waiting for problems means analysing too late.",
   "Correct: Even a design can be checked against quality scenarios. Risks found then are still cheap to fix.",
   "Correct: Analysis is not limited to new development. Before an extension or migration it clarifies whether the existing architecture can carry the new requirements."
  ],
  "explanation": "According to the curriculum, analysis serves to find risks before, during and after implementation – i.e. early, alongside development and for existing systems. Traps: “mainly afterwards”, “only when there is a reason”, “later only conformance”."
 },
 "c5q13": {
  "q": "A manager wants to steer teams solely by code metrics from now on. Which limits of metric-based evaluation should you point out?",
  "options": [
   "Metrics set as targets lose their meaningfulness.",
   "Values are comparable between systems regardless of language.",
   "Metric values need context and interpretation.",
   "Some qualities can only partly be measured.",
   "Source-code metrics are available before implementation."
  ],
  "correct": [
   0,
   2,
   3
  ],
  "optExpl": [
   "Correct: When a metric becomes a target, people optimise for the number instead of the quality (Goodhart’s law).",
   "Wrong: This is exactly what is tricky: language, domain and system context influence the values, so direct comparison is easily misleading.",
   "Correct: A threshold alone is not an evaluation – whether a value is problematic depends on the building block and its role.",
   "Correct: Metrics capture maintainability or security only partially; qualitative methods remain necessary.",
   "Wrong: Source-code metrics require code. Early in design, qualitative methods are more helpful."
  ],
  "explanation": "Metrics need context, capture qualities only partly and lose meaning when used as targets. Trap: cross-system comparisons are tricky, and code metrics require code."
 },
 "c5q14": {
  "q": "Which results does an architecture evaluation typically deliver?",
  "options": [
   "Proof that all quality goals are met.",
   "Risks and non-risks.",
   "A target architecture created by the evaluation team.",
   "An overall grade for the architecture.",
   "Sensitivity and trade-off points.",
   "Prioritized proposals for action."
  ],
  "correct": [
   1,
   4,
   5
  ],
  "optExpl": [
   "Wrong: An evaluation reveals risks; it does not prove anything. Whether goals are achieved is only finally shown in operation.",
   "Correct: Evaluations name problematic decisions (risks) and explicitly also sound ones (non-risks).",
   "Wrong: The evaluation team evaluates and recommends. The system's architects remain responsible for the design.",
   "Wrong: Evaluations are predominantly qualitative and measure against the system's own goals. A single grade would hide the risks.",
   "Correct: They show which decisions qualities depend on particularly sensitively or where they are weighed against each other.",
   "Correct: Prioritized recommendations on what to tackle first are derived from the risks."
  ],
  "explanation": "Typical results: risks, non-risks, sensitivity and trade-off points, prioritized actions. No overall grade, no proof of fulfilment and no new architecture designed by the evaluation team."
 },
 "k10": {
  "q": "You plan an analysis of the architecture. Is each approach rather qualitative or quantitative?",
  "categories": [
   "Qualitative",
   "Quantitative"
  ],
  "rows": [
   "Penetration test by external security experts",
   "Interviews with developers about known weaknesses",
   "Change rate per component from the revision history",
   "Number of reported defects per component from the ticket system",
   "Scenario evaluation with scenarios that contain measures such as “under 2 s”",
   "Degree of incoming and outgoing dependencies per building block"
  ],
  "explanation": "Scenario-based evaluation remains qualitative even if the scenarios contain measures; penetration tests also count as qualitative. Defect counts, change rates and degrees of coupling are counted metrics."
 },
 "c5q15": {
  "q": "Before a planned architecture review it turns out that there are no prioritised quality goals. Why is this a problem?",
  "options": [
   "The yardstick for the evaluation is missing.",
   "Only goals available as metrics can be evaluated.",
   "The scope of evaluation follows from the functional requirements.",
   "Only quality goals determine the technologies.",
   "Without priorities there is no focus on what matters most."
  ],
  "correct": [
   0,
   4
  ],
  "optExpl": [
   "Correct: Decisions can only be evaluated against goals; without quality goals it remains unclear what “good” means.",
   "Wrong: Scenarios and qualitative methods suffice; goals need not be formulated as metrics.",
   "Wrong: Functions matter, but the yardstick of an architecture evaluation is primarily the quality goals.",
   "Wrong: Quality goals influence decisions but do not prescribe technologies – that would already be the solution.",
   "Correct: Time for an evaluation is limited; prioritisation directs it to the most important and riskiest points."
  ],
  "explanation": "Prioritised quality goals are the yardstick and focus of every evaluation. Trap: they need not exist as metrics and do not determine technologies."
 },
 "c5q16": {
  "q": "What are tools for static code and architecture analysis suitable for?",
  "options": [
   "Determining coupling and complexity metrics.",
   "Uncovering cyclic dependencies between building blocks.",
   "Proving that performance goals are met.",
   "Measuring response times under production load.",
   "Finding violations of layering rules.",
   "Reliably assessing cohesion in business terms."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Correct: Such metrics can be calculated directly from the code without executing it.",
   "Correct: Cycles are visible in the static structure and can be detected automatically.",
   "Wrong: Performance only shows at runtime. Static analysis can give hints but cannot prove anything.",
   "Wrong: This requires executing the system, i.e. dynamic analysis or load tests.",
   "Correct: Allowed and forbidden dependencies can be stored as rules and checked automatically.",
   "Wrong: Tools deliver approximations. Whether elements belong together in business terms cannot be reliably judged by a tool."
  ],
  "explanation": "Static analysis checks code and structure without execution: metrics, layering rules, cycles. Runtime properties such as performance can neither be measured nor proven this way, and no tool reliably judges business cohesion."
 },
 "c5q17": {
  "q": "In the ATAM workshop it turns out: encrypting every message increases security but lengthens response time. What does ATAM call such a decision?",
  "options": [
   "Risk.",
   "Scenario of high importance and difficulty.",
   "Trade-off point.",
   "Sensitivity point."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: A risk is a potentially problematic decision, e.g. one still open. A consciously weighed conflict of goals is not automatically a risk.",
   "Wrong: That is a prioritisation in the utility tree (H,H) and describes a scenario, not a decision.",
   "Correct: The decision affects several quality attributes in opposite directions – security rises, performance falls.",
   "Wrong: A sensitivity point is decisive for one quality attribute. Here, however, two attributes are affected in opposite directions."
  ],
  "explanation": "A decision that affects several quality attributes in opposite directions is a trade-off point. Trap: sensitivity point (one attribute), risk and (H,H) scenario are other ATAM terms."
 },
 "c5q18": {
  "q": "Only half a day is available for an architecture evaluation. What do you most likely focus on?",
  "options": [
   "On the most important quality goals and riskiest scenarios.",
   "On the building blocks with the highest change rate.",
   "On a sample across all building blocks.",
   "On the building blocks with the most known defects."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: With little time you evaluate where missing the target would hurt most: the highest-priority goals and the riskiest scenarios.",
   "Wrong: The change rate can be a hint but says nothing about whether the most important quality goals are at risk.",
   "Wrong: A broad sample spreads the scarce time evenly – including over non-critical parts. Prioritizing is more effective.",
   "Wrong: Defect clusters point to problems in the code. Whether they affect the most important quality goals is not implied."
  ],
  "explanation": "With little time you prioritize by quality goals and risk. Change rate and defect clusters are useful hints, but no substitute for focusing on the most important goals."
 },
 "c5q19": {
  "q": "Which statements about evaluating a software architecture are correct?",
  "options": [
   "It is possible even without a running system.",
   "It needs prioritized quality goals as a yardstick.",
   "It is done without the development team in order to stay independent.",
   "It requires documentation in UML.",
   "It can combine measurements and expert assessments.",
   "It delivers an overall grade that makes systems comparable."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Correct: Even designs can be checked against quality goals, e.g. scenario-based – that is exactly when corrections are still cheap.",
   "Correct: Without a yardstick you cannot judge whether an architecture is good enough – the prioritized quality goals provide it.",
   "Wrong: The team knows decisions, assumptions and weak points best. External reviewers can help, but excluding the team is harmful.",
   "Wrong: Any sufficiently understandable description can be evaluated, including sketches or discussions. A specific notation is not required.",
   "Correct: Quantitative data such as metrics or logs and qualitative assessments complement each other – both are part of analysis according to the curriculum.",
   "Wrong: Evaluation is against the system's own quality goals. A grade comparable across systems is not the aim."
  ],
  "explanation": "Architecture evaluation measures against prioritized quality goals, is possible on the design already and combines measurements with assessments. It needs no UML, delivers no comparable overall grade – and the team is part of it."
 },
 "c5q20": {
  "q": "In the ATAM workshop it turns out: response time depends heavily on the size of the connection pool, other qualities hardly at all. What does ATAM call this?",
  "options": [
   "Building block with high afferent coupling.",
   "Sensitivity point.",
   "Non-risk.",
   "Trade-off point."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: Many incoming dependencies are a coupling metric, not an ATAM term for the effect on a quality attribute.",
   "Correct: A property on which a single quality attribute depends heavily is a sensitivity point.",
   "Wrong: A non-risk is a decision judged to be uncritical. The strong dependency itself is not yet such a rating.",
   "Wrong: A trade-off point affects several attributes in opposite directions. Here essentially only one is affected."
  ],
  "explanation": "If a quality attribute depends heavily on a decision, that is a sensitivity point. Trap: a trade-off point affects several attributes in opposite directions; a non-risk is a rating."
 },
 "c5q21": {
  "q": "Which types of results does a scenario-based evaluation such as ATAM typically deliver?",
  "options": [
   "A weighted overall grade per quality characteristic from which acceptance of the architecture can be derived.",
   "Identified risks and explicitly named non-risks.",
   "Sensitivity and trade-off points.",
   "Risk themes that bundle several related individual risks.",
   "A prioritized quality tree (utility tree) of the relevant scenarios.",
   "A ranking of the architecture alternatives by their cost-benefit ratio."
  ],
  "correct": [
   1,
   2,
   3,
   4
  ],
  "optExpl": [
   "Wrong: ATAM is predominantly qualitative and does not produce grades. It reveals risks and trade-offs; the stakeholders decide how to proceed.",
   "Correct: ATAM names risks, i.e. problematic decisions, and explicitly also non-risks, i.e. decisions confirmed as sound.",
   "Correct: They arise when scenarios are played through against the decisions and show where qualities react sensitively or are weighed against each other.",
   "Correct: ATAM groups related individual risks into risk themes. This reveals systematic weaknesses that management can address specifically.",
   "Correct: During ATAM a utility tree is created and prioritized. It is both a working basis and a documented result.",
   "Wrong: Costs and benefits of alternatives are evaluated by cost-benefit analysis (CBAM), which can build on ATAM. ATAM itself evaluates the architecture against its quality goals, not by cost."
  ],
  "explanation": "ATAM delivers a utility tree, risks, non-risks, sensitivity and trade-off points as well as risk themes. It is qualitative: no grades, no cost-benefit ranking (that is CBAM)."
 },
 "c5q22": {
  "q": "A team wants to evaluate its architecture together with stakeholders even before implementation. How is ATAM most accurately classified for this?",
  "options": [
   "Facilitated with stakeholders, also before implementation.",
   "Workshop in which stakeholders vote for the best alternative.",
   "Qualitative, but requires a running system.",
   "Review format like an inspection, without stakeholders."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: ATAM works with scenarios and expert judgement in a facilitated workshop – no running system is needed.",
   "Wrong: ATAM makes trade-offs and risks visible; a vote on alternatives is not its result.",
   "Wrong: Qualitative yes, but the scenarios are played through against the design and decisions, not against a running system.",
   "Wrong: ATAM explicitly involves stakeholders, e.g. when prioritising scenarios."
  ],
  "explanation": "ATAM is a facilitated, scenario-based method with stakeholders and usable early. Trap: it does not need a running system and does not end with a vote."
 },
 "c5q23": {
  "q": "The design of a safety-critical component is to be checked with preparation, fixed roles, minutes and an independent moderator. Which form of review is this?",
  "options": [
   "Informal review.",
   "Inspection.",
   "Walkthrough with minutes.",
   "Pair review at the desk."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: The informal review has no fixed roles or minutes – the opposite of the described procedure.",
   "Correct: The inspection is the most formal review form: defined roles, preparation, minutes and a moderator independent of the author.",
   "Wrong: A walkthrough can also be minuted, but it is led by the author and is less formal than an inspection.",
   "Wrong: Two people look at a design together – useful, but without a moderator and defined roles."
  ],
  "explanation": "The degree of formality rises from informal via walkthrough to inspection. Trap: minutes alone do not turn a walkthrough into an inspection – roles and an independent moderator are decisive."
 },
 "c5q24": {
  "q": "An architect is to support risk management in the project. What does he most likely focus on from an architecture perspective?",
  "options": [
   "Project risks such as deadlines, for which he is solely responsible.",
   "Product risks; mostly by lowering the probability of occurrence.",
   "Accepting risks and reacting only when they occur.",
   "Product risks; mostly by limiting the extent of damage."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: Schedule and budget risks lie mainly with project management; the architect is not solely responsible for them.",
   "Correct: From an architecture perspective, risks of the product are in the foreground; they are most often mitigated by making them less likely to occur.",
   "Wrong: Acceptance is a possible strategy for individual risks, but not the focus of risk management.",
   "Wrong: The focus on product risks is right. Limiting damage, however, is a further strategy chosen less often than lowering the probability."
  ],
  "explanation": "From an architecture perspective, product risks are central, mostly mitigated by lower probability of occurrence. Trap: the option with damage limitation names the right focus but the less common strategy."
 },
 "c5q25": {
  "q": "In a long-running system, the implemented structure increasingly deviates from the documented target architecture. Which statements are correct?",
  "options": [
   "Regular framework updates fix the cause.",
   "Complete documentation largely prevents erosion.",
   "The planned qualities can no longer be reliably expected.",
   "This is called architecture erosion.",
   "Adapting the documentation to the actual state solves the problem.",
   "Dependency analyses make the deviations visible."
  ],
  "correct": [
   2,
   3,
   5
  ],
  "optExpl": [
   "Wrong: Outdated technology is a different problem. Erosion concerns structure and dependencies, which an update does not correct.",
   "Wrong: Erosion happens in the code, e.g. through time pressure or shortcuts – even with very good documentation.",
   "Correct: The quality properties were designed for the target structure. If the code deviates, this planning no longer reliably holds.",
   "Correct: The gradual drift between target and actual is called erosion; without countermeasures it increases.",
   "Wrong: This only removes the visible deviation. Whether the actual structure still supports the quality goals remains unresolved.",
   "Correct: Tool-supported analyses show where the code contains forbidden dependencies – according to the curriculum a means of conformance checking."
  ],
  "explanation": "Target/actual deviation = architecture erosion. It endangers the planned qualities and becomes visible through conformance checking (e.g. dependency analysis). Neither adapting the documentation, good documentation nor updates fix it."
 },
 "c5q26": {
  "q": "After two years of development, a conformance analysis of the architecture is commissioned. What does it most likely check?",
  "options": [
   "Whether the architecture documentation is free of contradictions.",
   "Whether the design will satisfy the quality scenarios.",
   "Whether the requirements cover the quality goals.",
   "Whether the implementation matches the architecture design."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: Consistent documentation is desirable, but the conformance analysis compares implementation and design.",
   "Wrong: That is the purpose of a quality analysis, e.g. scenario-based. Conformance asks about the match between code and design.",
   "Wrong: That is a check of the requirements, not of the match between implementation and architecture.",
   "Correct: The conformance analysis compares the implemented and intended architecture including the decisions taken and thus reveals erosion."
  ],
  "explanation": "Conformance = does the implementation match the design and decisions? Trap: whether the design supports the quality goals is a different analysis question."
 },
 "c5q27": {
  "q": "A layered model forbids access from the data layer to the presentation layer. With what can you check compliance most reliably?",
  "options": [
   "Binding naming conventions for packages.",
   "Random manual code review.",
   "Runtime monitoring of the modules called.",
   "Static dependency analysis against defined rules."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: Conventions make layers recognisable but do not prove that no forbidden access exists.",
   "Wrong: Reviews are a named method, but as a sample they do not reliably find every forbidden dependency.",
   "Wrong: Monitoring only sees the paths actually executed in operation; rarely used violations remain undetected.",
   "Correct: Tools check all actual dependencies in the code automatically against the layering rules – completely and repeatably."
  ],
  "explanation": "Layering rules are checked most reliably with static dependency analysis. Trap: monitoring only sees executed paths, samples are incomplete, conventions are no proof."
 },
 "c6q1": {
  "q": "A colleague considers Chapter 6 (“Examples of software architectures”) dispensable because it contains “nothing new”. How can its purpose best be characterised?",
  "options": [
   "Exam-relevant summary of Chapters 1 to 5.",
   "Additional rules to be derived from examples.",
   "Retracing the path from requirements to solution using examples.",
   "Recommended reference architectures for typical domains."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: Chapter 6 does not summarise but applies – and according to the curriculum it is precisely not exam-relevant.",
   "Wrong: Chapter 6 introduces no new rules or learning goals beyond the previous chapters.",
   "Correct: Chapter 6 makes tangible, using at least one example, how requirements and constraints lead to decisions and structures.",
   "Wrong: The examples illustrate relationships; they are no recommendation of particular architectures or technologies."
  ],
  "explanation": "Chapter 6 applies what has been learned to examples and makes the path requirement → decision → structure traceable. Trap: it is neither a summary nor a reference catalogue and is not exam-relevant."
 },
 "c6q2": {
  "q": "A continuous architecture example is meant to show the “common thread” from requirements to implementation. What should one above all be able to recognise in it?",
  "options": [
   "How cross-cutting concepts are implemented technically.",
   "A universally valid reference solution for other systems.",
   "How quality goals and constraints shape decisions.",
   "Which alternatives were considered and why they were rejected.",
   "Which technologies have become established on the market."
  ],
  "correct": [
   0,
   2,
   3
  ],
  "optExpl": [
   "Correct: LG 06-02 targets the technical implementation: implementation, technical concepts, products and solution strategies.",
   "Wrong: The solution applies to the context of the example; under other constraints a different one may make sense.",
   "Correct: This is the core of LG 06-01: understanding why the architecture looks the way it does.",
   "Correct: Rejected alternatives with their reasons make it understandable why exactly this solution was chosen.",
   "Wrong: Products in the example show a concrete implementation, but no market overview or technology recommendation."
  ],
  "explanation": "A continuous example shows how requirements shape decisions, how these are implemented technically and which alternatives were rejected. Trap: it provides no universally valid reference and no market overview."
 },
 "c6q3": {
  "q": "How is the role of Chapter 6 (examples) in relation to the CPSA-F exam most accurately classified?",
  "options": [
   "R1; the examples are a focus of the exam.",
   "R2; the examples must be known as reference solutions.",
   "R3; not exam-relevant according to the curriculum.",
   "Not part of the curriculum, only supplementary material."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: R1 content is examined, but Chapter 6 explicitly does not belong to it.",
   "Wrong: The examples are no reference solutions, and the chapter is R3, not R2.",
   "Correct: Both learning goals 06-01 and 06-02 are R3; the curriculum explicitly notes that the chapter is not examined.",
   "Wrong: Chapter 6 is part of the curriculum with its own learning goals – it is just not exam-relevant."
  ],
  "explanation": "Chapter 6 belongs to the curriculum but is R3 and not exam-relevant. Trap: “not exam-relevant” does not mean “outside the curriculum”."
 },
 "c6q4": {
  "q": "Two examples solve a similar requirement with different architectural approaches. What is most likely the actual learning benefit?",
  "options": [
   "Different solutions indicate a design flaw.",
   "A universally valid model solution can be derived from it.",
   "Decisions depend on context and constraints.",
   "The comparison shows the objectively superior solution."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: Different solutions for similar requirements are normal and usually justified by different constraints.",
   "Wrong: Examples show patterns including their limits but do not anticipate future decisions.",
   "Correct: The same requirement can be solved sensibly in a different way under different constraints – architecture is context-dependent.",
   "Wrong: Without a shared context there is no objectively superior solution; each must be measured against its constraints."
  ],
  "explanation": "The comparison shows that architecture decisions are context-dependent. Trap: there is neither an objectively best nor a universally valid solution."
 },
 "c6q5": {
  "q": "A colleague studies several different architecture examples as preparation. What benefit does this most likely bring her?",
  "options": [
   "Finding patterns that fit regardless of context.",
   "Adopting proven solutions unchanged within the same domain.",
   "Recognising which constraints justify decisions.",
   "Extending one's own repertoire of solution approaches.",
   "Gaining an overview of common technology stacks."
  ],
  "correct": [
   2,
   3
  ],
  "optExpl": [
   "Wrong: Patterns have limits; several examples in particular show that their suitability depends on context.",
   "Wrong: Even in the same domain, quality goals and constraints can differ; solutions must be adapted, not copied.",
   "Correct: The comparison sharpens awareness of why a decision made sense in its context.",
   "Correct: Someone who has seen many solutions can transfer approaches to new problems more easily.",
   "Wrong: The examples contain products but target the relationship between requirements and solution, not a market overview."
  ],
  "explanation": "Several examples extend the solution repertoire and sharpen awareness of justifying constraints. Trap: they provide no copy templates – not even in the same domain – and no context-free patterns."
 },
 "c6q6": {
  "q": "In an architecture example, a decision is explicitly documented together with its disadvantages. Why is this particularly instructive?",
  "options": [
   "Architecture consciously weighs competing quality goals.",
   "Disadvantages show that a better solution was overlooked.",
   "Disclosed disadvantages serve mainly as self-protection.",
   "A good design is revised until no disadvantages remain."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: The justified compromise between competing goals is the core of an architecture decision – disadvantages are part of it.",
   "Wrong: Almost every decision has disadvantages; their presence does not prove an overlooked, disadvantage-free alternative.",
   "Wrong: Documented disadvantages make the trade-off traceable and help later decisions; they do not primarily serve self-protection.",
   "Wrong: Trade-offs cannot be optimised away; anyone trying to eliminate every disadvantage usually just shifts it elsewhere."
  ],
  "explanation": "Trade-offs are instructive because architecture weighs competing quality goals and the justified compromise is the core of the decision. Trap: disadvantages are no proof of error and cannot be optimised away."
 },
 "k16": {
  "q": "You are responsible for the architecture of a system built by three teams with their own architects. How sensible is each approach to documentation?",
  "categories": [
   "Sensible",
   "Not sensible"
  ],
  "rows": [
   "For management, the developer documentation is simply shortened.",
   "Agree on a common template (e.g. arc42) for all teams.",
   "Harmonize the teams' contributions in style and content.",
   "Regular verbal alignment replaces the overarching documentation.",
   "Feed results from alignment meetings back into the documentation.",
   "Each team chooses its own format, as long as it is internally consistent."
  ],
  "explanation": "Harmonizing different author groups and aligning verbal with written communication is explicitly a task. The trap: verbal communication only complements the documentation, and management needs different content rather than a short version."
 },
 "k17": {
  "q": "A stakeholder asks what deliberate architecture work brings to the project. Does each statement about goals and benefits apply?",
  "categories": [
   "Applies",
   "Does not apply"
  ],
  "rows": [
   "A careful design makes later iterations of the architecture unnecessary.",
   "It creates understanding of structures and concepts among relevant stakeholders.",
   "It determines which features the system should offer.",
   "It helps make the required functionality implementable in the first place.",
   "It contributes to achieving qualities such as energy efficiency.",
   "Its main benefit lies in lower costs of initial development."
  ],
  "explanation": "Architecture makes functionality implementable, shapes qualities (including energy efficiency) and creates understanding. The trap: stakeholders define the functional scope, architecture work initially costs effort, and it remains iterative."
 },
 "k18": {
  "q": "The following specifications exist for a new system. Assign each: requirement (functional or quality) or constraint?",
  "categories": [
   "Requirement",
   "Constraint"
  ],
  "rows": [
   "The existing Oracle database must continue to be used.",
   "Every production release requires approval by the change advisory board.",
   "The development team has no experience with cloud technologies so far.",
   "Users can export reports as PDF.",
   "Responses take less than two seconds at the 95th percentile.",
   "The system must be able to serve 10,000 concurrent users."
  ],
  "explanation": "Staff qualification and approval processes are organizational constraints, even if they do not sound like mandates. A “must” does not turn a load requirement into a constraint – it remains a quality requirement."
 },
 "k19": {
  "q": "Assign each requirement of a booking system: does it describe WHAT the system does or HOW WELL?",
  "categories": [
   "Functional requirement",
   "Quality requirement"
  ],
  "rows": [
   "Switching the payment provider affects at most one module.",
   "Administrators can create roles and assign permissions to them.",
   "The system is available 99.9% of the time on a monthly average.",
   "The app runs on Android and iOS without modification.",
   "The user interface is available in German and English."
  ],
  "explanation": "Multilingual support and permission management sound like quality but are offered functions (WHAT). Availability, modifiability and portability describe HOW WELL the system performs."
 },
 "k21": {
  "q": "Statements about the mandatory patterns layers, pipes & filters and microservices – correct or wrong?",
  "categories": [
   "Correct",
   "Wrong"
  ],
  "rows": [
   "In relaxed layering, a layer may also use layers not directly below it.",
   "The phases of a compiler are a typical example of pipes & filters.",
   "Microservices usually share a common database.",
   "Microservices are primarily cut along technical layers.",
   "Compared to a monolith, microservices usually increase operational complexity and costs.",
   "A modular monolith cannot be clearly structured into building blocks internally."
  ],
  "explanation": "Microservices are cut by business domain and have their own data storage; their price is higher operational complexity. The trap with the monolith: it, too, can be cleanly modular internally."
 },
 "k22": {
  "q": "An architecture team collects topics for chapter 8 of the arc42 documentation. Is each a cross-cutting concern (affecting many building blocks)?",
  "categories": [
   "Cross-cutting concern",
   "Not cross-cutting"
  ],
  "rows": [
   "The layout of the address entry dialog.",
   "Sorting the product list by price.",
   "How building blocks communicate with each other, e.g. formats and protocols.",
   "The plausibility check of the postal code in the address form.",
   "What may appear in error messages and logs without violating security rules.",
   "How business objects are stored and loaded again."
  ],
  "explanation": "Communication, persistence and the interplay of security, error handling and logging affect many building blocks. Individual dialogs, field checks or sort orders are local tasks."
 },
 "k23": {
  "q": "You start designing a new architecture. How sensible is each approach?",
  "categories": [
   "Sensible",
   "Not sensible"
  ],
  "rows": [
   "Derive consequences for the source code, e.g. package structure and call rules.",
   "Describe a building block first as a black box and open it as a white box when needed.",
   "Fix the technology before the quality requirements are clarified.",
   "Place business logic and technology in separate building blocks.",
   "Immediately elaborate all building blocks as white boxes down to the lowest level.",
   "Identify risks of architecture decisions early."
  ],
  "explanation": "Separating business and technical concerns, refining step by step and naming code consequences and risks early are part of design. The trap: refinement happens only where needed, not across the board down to the lowest level."
 },
 "k24": {
  "q": "Your team introduces architecture decision records (ADR) following Nygard. Does the content belong in an ADR?",
  "categories": [
   "Belongs in an ADR",
   "Does not belong"
  ],
  "rows": [
   "The consequences of the decision, including the negative ones.",
   "The status, e.g. proposed, accepted or superseded.",
   "A continuously updated overall description of the architecture.",
   "A step-by-step implementation guide.",
   "Later changes to the decision, worked directly into the original text.",
   "The context that made the decision necessary."
  ],
  "explanation": "Nygard ADRs contain title, status, context, decision and consequences. The trap: a changed decision gets a new ADR that supersedes the old one – nothing is overwritten."
 },
 "k25": {
  "q": "You want to analyze qualities of a system. Does the method mainly deliver measurements (quantitative) or assessments (qualitative)?",
  "categories": [
   "Quantitative method",
   "Qualitative method"
  ],
  "rows": [
   "User survey on usability with a rating scale from 1 to 5.",
   "Determining lines of code and cyclomatic complexity.",
   "Measuring response times under realistic load.",
   "Expert discussion to assess technical risks.",
   "Counting cyclic dependencies with an analysis tool."
  ],
  "explanation": "Runtime measurement and code or dependency metrics deliver measurements. The trap: a survey stays qualitative even if answers are recorded as numbers on a scale."
 },
 "k26": {
  "q": "You need to check whether the implementation still matches the architecture decisions. Does the approach reveal deviations?",
  "categories": [
   "Reveals deviation",
   "Unsuitable for this"
  ],
  "rows": [
   "Static analysis that checks actual dependencies against layering rules.",
   "Running load tests against the overall system.",
   "Raising unit test coverage to over 80%.",
   "Successfully completing the business department's acceptance tests.",
   "Code review focusing on adherence to the decisions recorded in ADRs.",
   "An architecture test in the build that reports forbidden package access."
  ],
  "explanation": "Conformance is checked with reviews and tool-supported dependency analysis – also against decisions taken, not just the structure. Load, unit and acceptance tests can pass even though forbidden dependencies exist."
 },
 "k27": {
  "q": "You design the interface of a payment building block that external partners also use. Is each property desirable?",
  "categories": [
   "Desirable",
   "Not desirable"
  ],
  "rows": [
   "Hard to use incorrectly.",
   "Maps the internal data structure 1:1 so that users can access it flexibly.",
   "Functionally complete from the perspective of the using building blocks.",
   "More stable, more formal and versioned compared to a purely internal interface.",
   "Is changed without a new version as soon as the implementation requires it.",
   "Easy to extend without having to adapt existing users."
  ],
  "explanation": "Easy to extend, hard to misuse and functionally complete are target properties; external interfaces additionally need more stability and versioning. The trap: internals mapped 1:1 seem flexible but couple users to the implementation."
 },
 "c3q67": {
  "q": "An analysis shows very tight coupling between the invoicing and customer modules. Which consequences are typical?",
  "options": [
   "The cohesion of both modules increases.",
   "Parallel development by two teams becomes easier.",
   "Changes to one module force changes to the other.",
   "The modules are hard to test in isolation.",
   "Performance necessarily deteriorates."
  ],
  "correct": [
   2,
   3
  ],
  "optExpl": [
   "Wrong: Cohesion concerns togetherness within a module; tight coupling between modules rather indicates a poor cut.",
   "Wrong: Tightly coupled modules require constant coordination; parallel work becomes harder.",
   "Correct: Every dependency is a path along which changes propagate.",
   "Correct: Many dependencies have to be replaced or started along for a test.",
   "Wrong: Coupling is primarily a maintainability issue; a performance loss does not necessarily follow from it."
  ],
  "explanation": "Tight coupling spreads changes and hampers isolated testing and parallel work. Trap: confusing coupling with cohesion or assuming blanket performance consequences."
 },
 "c3q68": {
  "q": "A building block exposes its implementation details (no information hiding). Which consequences are most likely?",
  "options": [
   "Coupling decreases because users need fewer detours.",
   "Changes require adjustments in more building blocks.",
   "The implementation becomes harder to replace.",
   "Well-documented internals make changes inconsequential.",
   "Runtime performance drops due to the direct access.",
   "Users bind themselves to details that were never guaranteed."
  ],
  "correct": [
   1,
   2,
   5
  ],
  "optExpl": [
   "Wrong: Direct access to internals increases coupling. Less indirection here means more dependency.",
   "Correct: Because many users depend on internals, a change no longer stays local.",
   "Correct: Users depend on details that would disappear in a replacement.",
   "Wrong: Documentation does not prevent users from depending on the internals. If they change, users are still affected.",
   "Wrong: If anything, direct access tends to be faster. The problem is changeability, not performance.",
   "Correct: Whatever is exposed gets used – even without a contract. Later changes to it break these users."
  ],
  "explanation": "Without information hiding coupling increases: users depend on unguaranteed details, changes no longer stay local, implementations are hard to replace. Documentation does not help against this, and performance is not the issue."
 },
 "c3q69": {
  "q": "A building block \"Utils\" contains date formatting, PDF export and discount logic. What follows from this low cohesion?",
  "options": [
   "It is particularly reusable.",
   "It changes for several independent reasons.",
   "Its coupling to other building blocks decreases.",
   "It tends to have fewer dependencies.",
   "It is harder to understand and to test."
  ],
  "correct": [
   1,
   4
  ],
  "optExpl": [
   "Wrong: Whoever needs only date formatting also pulls in PDF export and discount logic – reuse becomes harder.",
   "Correct: Each concern has its own reasons for change; every change affects the whole building block.",
   "Wrong: Since much lies in one place this looks local, but the number of incoming and outgoing dependencies rises.",
   "Wrong: Rather the opposite: each concern brings its own outgoing dependencies, e.g. a PDF library.",
   "Correct: Without a clear purpose one has to grasp many unrelated parts; tests need correspondingly many starting situations."
  ],
  "explanation": "Low cohesion: several reasons for change, poor reusability, more rather than fewer dependencies. Trap: \"many functions = highly reusable\"."
 },
 "c3q70": {
  "q": "In a legacy system, SQL queries sit directly in the UI code. Which consequences does this disregard of separation of concerns have?",
  "options": [
   "It primarily violates the Liskov principle.",
   "The consequences remain confined to the UI building block.",
   "The performance gain usually justifies it.",
   "A database change also affects the user interface.",
   "The logic can hardly be tested without the UI."
  ],
  "correct": [
   3,
   4
  ],
  "optExpl": [
   "Wrong: LSP concerns substitutability of subtypes; mixed concerns violate separation of concerns.",
   "Wrong: The database schema is now coupled to the UI; schema changes radiate into it and vice versa.",
   "Wrong: A possible small gain rarely outweighs the poorer modifiability and testability.",
   "Correct: Because persistence and UI are mixed, a technology change entails changes in the user interface.",
   "Correct: Business and persistence logic cannot be checked separately from the user interface."
  ],
  "explanation": "Mixed concerns couple technology and UI and hamper tests and technology changes. Trap: seeing the consequences as limited to one building block or naming the wrong principle."
 },
 "c3q71": {
  "q": "Which statements about the DRY principle and its violation (the same decision/logic is duplicated several times) are correct?",
  "options": [
   "The building blocks with the copies are thereby more tightly coupled statically, which a dependency analysis reliably shows.",
   "The problem only concerns duplicated logic, not duplicated constants or configuration values.",
   "There is a risk that copies drift apart (inconsistency).",
   "Code that looks the same may remain duplicated if the copies represent different business knowledge and should change independently.",
   "A hidden (logical) coupling arises: the copies have to be changed together although no building block depends on the other.",
   "A change has to be applied consistently in several places."
  ],
  "correct": [
   2,
   3,
   4,
   5
  ],
  "optExpl": [
   "Wrong: Quite the opposite: the copies do not depend on each other in the code, so a static dependency analysis sees nothing. The coupling is logical and therefore hidden.",
   "Wrong: DRY refers to any duplicated knowledge. Constants or configuration values maintained twice also drift apart if only one place is adjusted.",
   "Correct: If copies are changed independently, they eventually behave differently – e.g. when a discount is calculated differently in two places.",
   "Correct: DRY is about knowledge, not textual sameness. Code that happens to be identical but means different things would only become coupled by merging it.",
   "Correct: The copies are connected by the shared knowledge even though no dependency is visible in the code. If the rule changes, all of them have to be changed.",
   "Correct: The same decision sits in several places, so every change has to be applied everywhere. Missing one place creates contradictory behaviour."
  ],
  "explanation": "Violating DRY forces multiple changes, risks inconsistency and creates an invisible logical coupling – for logic as well as constants. DRY means knowledge, not identical-looking code."
 },
 "c3q72": {
  "q": "In a layered architecture planned as strict, a review finds skipped layers and upward calls. What is correct?",
  "options": [
   "Isolated deviations are fundamentally uncritical.",
   "This is now simply a relaxed layering.",
   "The implementation deviates from the design (erosion).",
   "The layers are harder to replace.",
   "Upward calls via callbacks are always forbidden."
  ],
  "correct": [
   2,
   3
  ],
  "optExpl": [
   "Wrong: Even single exceptions create dependencies and should be decided consciously and documented.",
   "Wrong: Relaxed only permits downward skips; upward calls violate the relaxed variant too.",
   "Correct: Unintended deviations from the planned design are a typical sign of creeping architecture erosion.",
   "Correct: Through additional dependencies, more layers depend on each other; replacement and isolated tests suffer.",
   "Wrong: A callback via an interface defined by the lower layer inverts the dependency and is permissible."
  ],
  "explanation": "Unplanned skips and upward calls are erosion and worsen replaceability. Trap: reinterpreting this as \"relaxed layering\" – upward calls are not allowed there either."
 },
 "c1q30": {
  "q": "You are the software architect for a core banking system. What must you pay particular attention to in this role?",
  "options": [
   "Interpreting regulatory requirements in a legally binding way.",
   "Sharpening security, traceability and availability with stakeholders.",
   "Evaluating risks to achieving the requirements.",
   "In case of conflicting goals, always give security priority.",
   "Including regulatory constraints from the start."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Wrong: Legal interpretation lies with legal/compliance; architects implement the requirements technically.",
   "Correct: Clarifying and refining quality requirements with stakeholders is a core task – especially critical here.",
   "Correct: Analysing and evaluating with regard to risks is a task named in the curriculum.",
   "Wrong: Conflicting goals are weighed with the stakeholders; even in banking there is no blanket priority.",
   "Correct: Regulation restricts the solution space and must therefore be considered early."
  ],
  "explanation": "Sharpen quality requirements, include regulation early, evaluate risks. Trap: no legal interpretation and no sole decision on conflicting goals."
 },
 "c1q33": {
  "q": "How do software architects most likely work together with other stakeholders?",
  "options": [
   "Explaining the architecture to management via detailed UML diagrams.",
   "Aligning deployment and operability with IT operations.",
   "Aligning the testability of quality goals with QA and test.",
   "Taking over alignment with business units instead of the PO.",
   "Clarifying business goals with the PO and requirements analysis."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Wrong: Not suited to the audience: management rather needs an overview, risks and consequences.",
   "Correct: Operations is explicitly a partner, especially for information systems.",
   "Correct: The curriculum names quality assurance and test as stakeholders; quality goals must be verifiable.",
   "Wrong: Architects complement other roles but do not replace them; business communication stays with the PO.",
   "Correct: Product management and requirements analysis provide the 'what'; architects clarify goals and quality requirements with them."
  ],
  "explanation": "Collaboration with PO/requirements analysis, operations and QA – suited to each audience. Trap: architects do not replace roles and do not overload management with details."
 },
 "c1q34": {
  "q": "Which properties of a system are significantly influenced by the software architecture?",
  "options": [
   "Testability of individual building blocks.",
   "Operating and infrastructure costs.",
   "Qualification of the development team.",
   "How quickly new features can be delivered.",
   "The functional scope.",
   "Energy efficiency."
  ],
  "correct": [
   0,
   1,
   3,
   5
  ],
  "optExpl": [
   "Correct: Whether building blocks can be tested in isolation depends directly on coupling and interfaces – i.e. on the architecture.",
   "Correct: Distribution, scaling concept and technology choice determine which infrastructure is needed and what operations cost.",
   "Wrong: Qualification is a constraint that acts on the architecture – not the other way round. The architecture must suit the team.",
   "Correct: A structure in which changes stay local shortens the time to delivery. Tight coupling, by contrast, slows down every extension.",
   "Wrong: Which functions the system should offer is defined by the stakeholders. The architecture must make them achievable but does not determine them.",
   "Correct: The curriculum explicitly names energy efficiency: distribution, type of communication and resource usage co-determine consumption."
  ],
  "explanation": "Architecture shapes qualities such as testability and energy efficiency, operating costs and how quickly changes can be delivered. Functional scope and team qualification are inputs, not results of the architecture."
 },
 "c2q28": {
  "q": "Which of the following are influencing factors or constraints that affect the architecture?",
  "options": [
   "Legal requirements such as data protection or retention obligations.",
   "Availability, qualification and commitment of the staff.",
   "Architecture decisions of earlier releases of the same system – but only if they are documented.",
   "The structure of the architecture documentation according to arc42, as it determines which structures are designed.",
   "Prescribed reference architectures, libraries or frameworks.",
   "Partnerships and cooperations of the company."
  ],
  "correct": [
   0,
   1,
   4,
   5
  ],
  "optExpl": [
   "Correct: Regulatory constraints restrict the solution, e.g. regarding where data is stored or obligations to delete and log.",
   "Correct: The curriculum explicitly names this as an organizational constraint (R1). An architecture the team cannot handle is hardly feasible.",
   "Wrong: Existing structures affect new decisions whether they are documented or not. Undocumented decisions in particular are a risk, but they do not disappear as an influencing factor.",
   "Wrong: arc42 is a template for documentation, not a factor influencing the design. Which structures are needed follows from requirements and constraints – not from the chapters of a template.",
   "Correct: Technical requirements such as reference architectures or frameworks limit the solution space (R1). The architecture must fit into this framework.",
   "Correct: According to the curriculum, this is also one of the organizational influencing factors (R2): agreements with partners can prescribe interfaces, products or data formats, for example."
  ],
  "explanation": "Influencing factors include organizational ones (staff, budget, partnerships, Conway), technical ones (infrastructure, reference architectures, frameworks) and regulatory ones. A documentation template is not an influencing factor, and existing decisions have an effect even when undocumented."
 },
 "c3q73": {
  "q": "Which of the following are architecture patterns or design approaches?",
  "options": [
   "Ports and adapters (hexagonal).",
   "Domain-driven design (DDD).",
   "arc42 – an architecture style that divides the building blocks of a system into twelve areas.",
   "C4 – an architecture pattern with the four layers context, container, component and code.",
   "Microservices.",
   "Pipes and filters."
  ],
  "correct": [
   0,
   1,
   4,
   5
  ],
  "optExpl": [
   "Correct: A widespread architecture pattern: the business logic is at the centre, technology such as UI or database is connected to ports via replaceable adapters.",
   "Correct: DDD is a design approach that puts the business domain at the centre. With bounded contexts it provides criteria for business-oriented decomposition.",
   "Wrong: arc42 is a template for architecture documentation with twelve sections. It structures the documentation, not the system – it says nothing about the structure of the building blocks.",
   "Wrong: C4 is a model for architecture diagrams with four zoom levels, not a structural pattern. Context, container, component and code are levels of detail of the depiction, not layers of the system.",
   "Correct: Microservices are an R1 architecture pattern: small, independently deployable services, each responsible for one business area.",
   "Correct: Pipes and filters is an R1 architecture pattern: processing steps (filters) are chained via data streams (pipes)."
  ],
  "explanation": "Pipes and filters, microservices, ports and adapters and DDD are architecture patterns or design approaches. C4 (diagram model) and arc42 (documentation template) are documentation aids – despite “four levels” and “twelve sections” they are not structural patterns."
 },
 "c3q74": {
  "q": "Which of the following approaches to architecture development does the CPSA-F curriculum name?",
  "options": [
   "Code first: deriving the structure solely from the source code.",
   "Domain-driven design.",
   "View-based architecture development.",
   "Top-down design.",
   "Bottom-up design.",
   "Technology-driven design (framework first)."
  ],
  "correct": [
   1,
   2,
   3,
   4
  ],
  "optExpl": [
   "Wrong: Sounds like bottom-up but is not: bottom-up deliberately assembles existing building blocks into structures instead of merely reading the architecture off the code afterwards.",
   "Correct: DDD is named in the curriculum as an (R3) approach: the structure follows the business domain.",
   "Correct: An R1 approach: the architecture is developed through the context, building block, runtime and deployment views.",
   "Correct: From coarse to fine – an R1 approach according to the curriculum.",
   "Correct: Forming larger structures from existing details or components – also R1.",
   "Wrong: Happens in practice but is not a design approach of the curriculum: technology should follow the requirements, not dictate the structure."
  ],
  "explanation": "The curriculum names top-down, bottom-up and view-based development (R1) as well as DDD, evolutionary architecture and global analysis, among others (R3). “Framework first” and “code first” are not design approaches."
 },
 "c3q75": {
  "q": "A layered architecture is proposed for an administrative application. Which advantages can most reasonably be argued for it?",
  "options": [
   "Layers scale independently of each other.",
   "Separation of concerns across the layers.",
   "Business changes remain within one layer.",
   "Low latency through short call paths.",
   "Individual layers can be replaced."
  ],
  "correct": [
   1,
   4
  ],
  "optExpl": [
   "Wrong: Independent scaling is a characteristic of microservices; layers are logical, not operational units.",
   "Correct: User interface, business logic and data access lie in separate layers – a core advantage of the pattern.",
   "Wrong: Precisely not: a new business field often runs through UI, logic and persistence.",
   "Wrong: Passing through layers rather costs latency; that is a disadvantage of the pattern.",
   "Correct: As long as the interface stays the same, e.g. the data access layer can be replaced."
  ],
  "explanation": "Layers bring separation of concerns and replaceability. Trap: attributing advantages of other patterns (independent scaling) or local business changes."
 },
 "c3q76": {
  "q": "A team is considering keeping the strict layering of its system. Which disadvantages or limits should it know?",
  "options": [
   "A new business attribute often affects all layers.",
   "Layers cannot be replaced.",
   "Each layer must run as a separate deployment.",
   "Intermediate layers often merely forward calls.",
   "It cannot be combined with microservices."
  ],
  "correct": [
   0,
   3
  ],
  "optExpl": [
   "Correct: Business changes run across the technical layers and pass through UI, logic and persistence.",
   "Wrong: Replaceability is precisely an advantage of layering, as long as the interfaces remain stable.",
   "Wrong: Layers are logical; whether they are deployed together or separately is a deployment decision.",
   "Correct: Without their own logic, uniform forwarding code arises that costs latency and maintenance effort.",
   "Wrong: A microservice can be layered internally; patterns can be combined."
  ],
  "explanation": "Strict layering: business changes run through several layers, pass-through creates boilerplate. Trap: seeing replaceability or combinability as a disadvantage."
 },
 "c4q38": {
  "q": "Which statements about describing and communicating software architecture are correct according to the curriculum?",
  "options": [
   "Balancing oral and written communication.",
   "A shortened developer documentation suffices for management.",
   "Written documentation largely replaces oral coordination.",
   "Management and development need different content.",
   "Harmonising contributions from different authors.",
   "Templates make content easier to find."
  ],
  "correct": [
   0,
   3,
   4,
   5
  ],
  "optExpl": [
   "Correct: E.g. walkthroughs based on the documentation, and feeding meeting results back into it.",
   "Wrong: Shortening does not change the content – management needs different information, not less of the same.",
   "Wrong: The two complement each other; written documentation does not make conversations unnecessary.",
   "Correct: Management needs, for example, overview, risks and costs; development needs building blocks and interfaces.",
   "Correct: The curriculum explicitly names consolidating contributions from different author groups in style and content.",
   "Correct: A uniform structure helps searching and also acts as a completeness checklist."
  ],
  "explanation": "Audiences need different content; templates help, communication forms are balanced and author contributions harmonised. Trap: shortened developer documentation for management."
 },
 "k29": {
  "q": "Statements about the tasks and responsibilities of software architects – correct or wrong?",
  "categories": [
   "Correct",
   "Wrong"
  ],
  "rows": [
   "They are responsible for the project's budget, schedule and staffing.",
   "They point out the consequences of their decisions to stakeholders.",
   "They check whether source code and architecture are consistent.",
   "They prioritize the business backlog.",
   "They recognize on their own when another iteration is needed.",
   "In goal conflicts, they alone decide which quality goal takes precedence."
  ],
  "explanation": "Architects accompany implementation, drive iterations and argue consequences. The trap: budget and schedule belong to project management, the backlog to the product owner, and goal conflicts are resolved with the stakeholders."
 },
 "k30": {
  "q": "Statements about quality criteria of technical documentation – correct or wrong?",
  "categories": [
   "Correct",
   "Wrong"
  ],
  "rows": [
   "Efficiency also concerns the effort of creating and maintaining the documentation.",
   "Whether documentation is understandable can ultimately only be judged by its audience.",
   "The more detailed the documentation, the better it meets the correctness criterion.",
   "Maintainability of documentation means it needs to be changed as rarely as possible.",
   "Form, content and level of detail are geared to the audience.",
   "A review board bindingly determines understandability for all audiences."
  ],
  "explanation": "The audience judges understandability; efficiency includes maintenance effort. The trap: correctness means matching the system, not volume, and maintainability means being able to keep the documentation up to date with the system."
 },
 "k31": {
  "q": "Statements about the reasons for an architecture analysis – correct or wrong?",
  "categories": [
   "Correct",
   "Wrong"
  ],
  "rows": [
   "Without a fully documented architecture, no analysis is possible.",
   "It can determine whether the implementation matches the architecture decisions.",
   "The yardstick is the prioritized quality goals or requirements.",
   "It only makes sense once a running implementation exists.",
   "An analysis is useful before, during and after implementation.",
   "It checks whether architecture-relevant stakeholder concerns are addressed."
  ],
  "explanation": "Analysis serves risk prevention, checking requirements and conformance, and checking stakeholder concerns – in all phases. The trap: it needs neither running code nor complete documentation."
 },
 "k32": {
  "q": "Statements about design principles of modularization – correct or wrong?",
  "categories": [
   "Correct",
   "Wrong"
  ],
  "rows": [
   "Loose coupling means: as few dependencies as possible, as many as necessary.",
   "Information hiding conceals decisions that are likely to change.",
   "High cohesion means that building blocks have many dependencies on each other.",
   "Design principles are applied independently of the specific requirements.",
   "Encapsulation is a means of implementing information hiding.",
   "Information hiding and encapsulation are two names for the same principle."
  ],
  "explanation": "Encapsulation is the means, information hiding the goal – equating them is the trap. Cohesion describes how well things belong together within a building block, and principles are applied deliberately depending on the requirements."
 },
 "k33": {
  "q": "Statements about formulating quality requirements – correct or wrong?",
  "categories": [
   "Correct",
   "Wrong"
  ],
  "rows": [
   "Quality scenarios also serve as input for architecture evaluations.",
   "A quality requirement should specify how its fulfilment will be checked.",
   "A quality scenario names the tactic used to achieve the quality.",
   "No measurable scenarios can be formed for vague goals such as user-friendliness.",
   "A metric turned into a target can lose its meaningfulness as a result.",
   "“95% of searches in under 1 s” is already a complete scenario."
  ],
  "explanation": "Quality requirements should come with their analysis method; scenarios describe the WHAT with context, stimulus, response and measurement. The trap: a response measure alone is not a scenario, and user-friendliness can also be phrased measurably."
 },
 "c1q35": {
  "q": "A user of the 'Payment Processing' component asks: 'Which services does it offer?' What answers this question?",
  "options": [
   "White-box view: contained sub-building blocks and their interaction.",
   "Black-box view: provided interfaces including guarantees.",
   "Context view: interfaces of the component to its neighbours.",
   "Runtime view: use of the component in concrete scenarios."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: The white box shows the inside; it is needed by whoever changes the building block, not whoever uses it.",
   "Correct: The black box describes what the building block offers externally without revealing the realisation.",
   "Wrong: The context view shows the whole system with its external neighbours, not individual internal components.",
   "Wrong: Scenarios show how services are used in flows, not which are offered."
  ],
  "explanation": "The black box describes the offered services. Trap: the context view concerns the whole system, the runtime view the use in flows."
 },
 "c1q36": {
  "q": "The requirements are not yet fully known at the start of the project. What is most sensible in the architecture design?",
  "options": [
   "Postponing load-bearing decisions until the requirements are complete.",
   "Making hard-to-reverse decisions as late as responsibly possible.",
   "Providing extension points everywhere as a precaution.",
   "Recording assumptions explicitly and checking them later.",
   "Testing the riskiest assumptions early with prototypes.",
   "Working iteratively and evolving the architecture with growing knowledge."
  ],
  "correct": [
   1,
   3,
   4,
   5
  ],
  "optExpl": [
   "Wrong: Complete requirements rarely exist. “As late as responsible” does not mean “only once everything is fixed” – otherwise the structure grows uncontrolled.",
   "Correct: Last responsible moment: by then more knowledge is available, without the waiting itself already causing harm.",
   "Wrong: Flexibility in advance creates complexity for requirements that may never come (YAGNI).",
   "Correct: When knowledge is missing, you have to assume. Recorded assumptions can be checked and affected decisions adjusted in time.",
   "Correct: Prototypes provide early feedback exactly where a wrong assumption would be most expensive.",
   "Correct: With uncertain requirements the architecture grows with knowledge and is reviewed in every iteration."
  ],
  "explanation": "With incomplete requirements: work iteratively, record assumptions, test risky assumptions early, postpone hard-to-reverse decisions to the last responsible moment. Traps: making everything flexible as a precaution – or waiting for complete requirements."
 },
 "c2q29": {
  "q": "An organization deliberately shapes its teams so that the desired target architecture emerges. Which statement is most accurate?",
  "options": [
   "Deliberate architecture work becomes largely unnecessary.",
   "This only affects new systems, not existing ones.",
   "A suitable team structure can favour the desired system decomposition.",
   "For business-oriented services, teams are organized by layers."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: The team structure only favours a decomposition. Interfaces, cross-cutting concerns and qualities still have to be designed.",
   "Wrong: Existing systems, too, are evolved by the teams maintaining them – their structure adapts over time.",
   "Correct: Since system structures follow communication structures, Conway's law can be used deliberately – this requires a real change to the organization.",
   "Wrong: According to Conway, layer teams (UI, logic, database) favour layer boundaries in the system, not business-oriented decomposition."
  ],
  "explanation": "Shaping teams to fit the target architecture uses Conway's law deliberately – with a real organizational change. Trap: this does not replace architecture work, and layer teams produce layer boundaries."
 },
 "c2q30": {
  "q": "For a customer portal, high usability is a top quality goal. Which statements about assuring this goal are correct?",
  "options": [
   "Acceptance by the client is sufficient proof.",
   "Trying out interaction flows early with prototypes.",
   "The goal can shape architectural decisions, e.g. on response times.",
   "A uniform design system ensures usability.",
   "Conducting usability tests with representative users.",
   "Usability can be optimized late, independently of the architecture."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Wrong: The client is usually not the typical user. Their acceptance does not replace testing with real user groups.",
   "Correct: Prototypes reveal weaknesses before expensive structural decisions are fixed.",
   "Correct: Usability also depends on response times, error handling or offline capability – i.e. on the architecture.",
   "Wrong: A design system provides consistency but is a solution requirement – it does not prove that users can complete their tasks.",
   "Correct: Whether a system is usable becomes apparent with those who are actually meant to operate it.",
   "Wrong: Surface details yes, but sluggish responses or missing fault tolerance cannot be polished away late."
  ],
  "explanation": "Usability is assured with real users and early prototypes; it also depends on the architecture. Trap: client acceptance or a design system are no proof."
 },
 "c3q77": {
  "q": "A building block calls the API of an external map service directly in many places. Which consequences are typical?",
  "options": [
   "The building block's afferent coupling increases.",
   "Outages of the service have a direct effect.",
   "API changes by the provider force own changes.",
   "A provider SLA makes the integration uncritical.",
   "The coupling exists only at runtime.",
   "Switching provider becomes laborious."
  ],
  "correct": [
   1,
   2,
   5
  ],
  "optExpl": [
   "Wrong: The dependency goes from the building block to the service – it is outgoing (efferent), not incoming.",
   "Correct: Without cushioning (timeout, fallback), an outage of the foreign service hits one's own function.",
   "Correct: The building block depends on an externally controlled element; changes there affect one's own code.",
   "Wrong: An SLA covers at most availability, not API changes, version changes or deprecations.",
   "Wrong: At development time too, the code depends on the provider's data types and calling conventions.",
   "Correct: If the foreign API is scattered throughout the code, every call site has to be adjusted."
  ],
  "explanation": "Directly and widely integrated third-party services couple the system to a volatile, externally controlled element. Trap: seeing an SLA as the solution or swapping afferent/efferent."
 },
 "c3q78": {
  "q": "Development wants microservices, operations a monolith. How is this goal conflict most appropriately handled?",
  "options": [
   "Start with microservices, merge them later if necessary.",
   "Follow development, since it builds the system.",
   "Follow operations, as it bears most of the costs.",
   "Make quality goals explicit, then decide."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: Merging distributed services is usually more laborious than splitting a modular monolith later.",
   "Wrong: One group's perspective does not decide; the requirements of all stakeholders are decisive.",
   "Wrong: Cost shares are an argument but do not replace weighing all quality goals.",
   "Correct: The conflict is resolved via requirements and trade-offs; a modular monolith can be a viable compromise."
  ],
  "explanation": "Stakeholder conflicts are resolved via explicit quality goals and trade-offs, not group affiliation. Trap: presenting a plausible single argument (cost, know-how) as the decision."
 },
 "c4q39": {
  "q": "You are describing the white box of the building block \"Payment processing\", which also uses third-party building blocks. Which information typically belongs in it?",
  "options": [
   "The contained building blocks and their relationships.",
   "The legal contracts of the suppliers of the third-party building blocks.",
   "The mapping of the internal building blocks to servers.",
   "The interplay of the internal building blocks, as far as needed.",
   "A rationale for the chosen decomposition."
  ],
  "correct": [
   0,
   3,
   4
  ],
  "optExpl": [
   "Correct: This is the core of every white box: the internal structure of the building block.",
   "Wrong: Sounds like \"internals\" but is a matter for procurement and legal; the white box describes the technical structure.",
   "Wrong: Which parts run where belongs in the deployment view, not in the white box.",
   "Correct: A brief overview of the interplay helps to understand the internal structure.",
   "Correct: The white box also explains why the building block was decomposed this way – this makes the design traceable."
  ],
  "explanation": "The white box shows the internal structure: contained building blocks, their interplay and the rationale for the decomposition. Traps: supplier contracts (legal, not architecture) and server assignment (deployment view)."
 },
 "c5q28": {
  "q": "A stakeholder reports: “The system is too slow.” Which steps are sensible for a methodically sound investigation?",
  "options": [
   "Measuring on developer machines to avoid interference.",
   "Measuring response times under realistic load.",
   "Evaluating runtime logs and metrics from operations.",
   "Clarifying the cause of slowness via user interviews.",
   "Upgrading hardware first to rule out the architecture.",
   "Formulating the goal as a measurable quality scenario."
  ],
  "correct": [
   1,
   2,
   5
  ],
  "optExpl": [
   "Wrong: Developer machines do not reflect the load, data and infrastructure of operations – the values are precisely not meaningful.",
   "Correct: Measuring runtime behaviour quantitatively under realistic conditions is the appropriate method for performance.",
   "Correct: The curriculum explicitly names runtime logs and metrics as a source of information for analysis.",
   "Wrong: Interviews help to narrow down the problem but are qualitative. The cause of a performance problem is established by measurement.",
   "Wrong: More hardware can mask symptoms but does not replace root-cause analysis and does not rule out architecture problems.",
   "Correct: “Too slow” cannot be checked; only a scenario with context, stimulus and response measure defines what is to be achieved."
  ],
  "explanation": "Performance problems are investigated based on measurement: frame the goal as a scenario, measure under realistic load, evaluate operational data. Trap: hardware upgrades, measuring on developer machines and interviews do not replace measurement in a realistic environment."
 },
 "k34": {
  "q": "You describe the building block “tariff calculator”. Does each item belong in the black-box description (outside view) or the white-box description (inside view)?",
  "categories": [
   "Black box (outside view)",
   "White box (inside view)"
  ],
  "rows": [
   "Guaranteed qualities such as the maximum response time.",
   "The responsibility of the building block in one sentence.",
   "The contained sub-building blocks and their relationships.",
   "The interplay of the inner building blocks during a request.",
   "How the external interfaces are mapped to inner building blocks.",
   "The required interfaces to other building blocks."
  ],
  "explanation": "The outside view includes required as well as provided interfaces, plus responsibility and guarantees. The trap: which inner building block realizes an external interface is already the inside view."
 },
 "k35": {
  "q": "You model the deployment view of an ordering system. Is each element a node or an artifact deployed on it?",
  "categories": [
   "Node",
   "Artifact (deployment artifact)"
  ],
  "rows": [
   "An SQL script that creates the database schema.",
   "A configuration file shipped along with it.",
   "The container image of the ordering service.",
   "A container runtime environment on a host.",
   "A virtual machine in the cloud.",
   "The database server on which the schema is set up."
  ],
  "explanation": "Nodes are execution environments or hardware – also virtual or as a container runtime. The trap: the container image is not a node but a delivered artifact, as are configuration and schema files."
 },
 "c1q37": {
  "q": "Which information primarily belongs in the black-box description of a building block?",
  "options": [
   "The contained sub-building blocks and their relationships.",
   "The required external interfaces.",
   "Responsibility and guaranteed properties.",
   "The mapping to execution nodes.",
   "The provided interfaces.",
   "The internally used algorithms."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Wrong: The internal decomposition is exactly what only the white box shows.",
   "Correct: Dependencies on the outside are also externally visible and relevant to users.",
   "Correct: Task and quality guarantees define what the building block is used for and under which conditions.",
   "Wrong: That belongs in the deployment view, not in the black box of the building block view.",
   "Correct: What the building block provides externally is the core of the black box.",
   "Wrong: Internals are white-box content and remain hidden in the black box."
  ],
  "explanation": "Black box = provided and required interfaces, responsibility, guarantees. Trap: node mapping is the deployment view, sub-building blocks and algorithms are white box."
 },
 "c1q38": {
  "q": "A developer only wants to call an existing building block, not change it. Which description does she primarily need?",
  "options": [
   "The deployment view with nodes and protocols.",
   "The white-box description of the building block.",
   "Runtime scenarios of its internal flows.",
   "The black-box description of the building block."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: It answers operational questions but does not describe which services the building block offers with which guarantees.",
   "Wrong: Whoever changes the building block needs the internal structure; guarantees are already in the black box.",
   "Wrong: Internal flows are not needed for mere use and would expose internals.",
   "Correct: Interfaces, responsibility and guarantees are sufficient to use a building block correctly."
  ],
  "explanation": "For use, the black box is sufficient. Trap: guarantees already belong to the black box; white box and internal flows are only needed by whoever changes it."
 },
 "c4q40": {
  "q": "Which information belongs least in the white-box description of a building block?",
  "options": [
   "The contained sub-building blocks and their relationships.",
   "Important interfaces between the sub-building blocks.",
   "The assignment of the sub-building blocks to servers.",
   "A rationale for the chosen decomposition."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: This is the core of a white box.",
   "Wrong: The internal interfaces show how the sub-building blocks work together – they belong in the white box.",
   "Correct: Which nodes something runs on is shown by the deployment view. The white box in the building block view describes the static structure.",
   "Wrong: Belongs in it: the white box also explains why the building block was decomposed this way."
  ],
  "explanation": "A white box shows sub-building blocks, their relationships and interfaces, and the rationale for the decomposition. The assignment to servers belongs in the deployment view."
 },
 "c2q31": {
  "q": "A corporation is discussing Conway's law. Which statements about it are correct?",
  "options": [
   "It only applies to distributed systems such as microservices.",
   "It obliges organizations to structure teams according to the architecture.",
   "In small teams, it plays no role in system decomposition.",
   "Teams that communicate little tend to produce system boundaries.",
   "The curriculum assigns it to the organizational constraints."
  ],
  "correct": [
   3,
   4
  ],
  "optExpl": [
   "Wrong: The observation applies to any system structure, including the modules of a monolith.",
   "Wrong: Conway's law is an observation, not a rule. It can be used deliberately, but it need not be.",
   "Wrong: Small organizations also have communication structures that are reflected in the system – just less visibly.",
   "Correct: Where teams hardly talk to each other, interfaces between their parts of the system tend to emerge.",
   "Correct: In the curriculum, Conway appears under the organizational structure of teams and clients – not under technology."
  ],
  "explanation": "Conway's law is an organizational constraint: team boundaries tend to become system boundaries. Trap: it applies regardless of size and architectural style and is not an obligation."
 },
 "c3q79": {
  "q": "A system uses an external shipping API with frequent changes and fluctuating availability. What keeps the consequences manageable?",
  "options": [
   "Encapsulating the API behind an own abstraction.",
   "Each using building block gets its own adapter.",
   "Deliberately not fixing the API version.",
   "Using timeout, retry and circuit breaker.",
   "Using the provider's data types in the domain model."
  ],
  "correct": [
   0,
   3
  ],
  "optExpl": [
   "Correct: An adapter or anti-corruption layer bundles the dependency; changes stay in one place.",
   "Wrong: Scattered adapters distribute the dependency again; a change has to be followed up in many places.",
   "Wrong: That way every provider change hits unplanned; versions are pinned deliberately and migrated in a controlled way.",
   "Correct: These patterns cushion fluctuating availability and prevent failure chains.",
   "Wrong: That pulls foreign structures into one's own model; an anti-corruption layer translates them instead."
  ],
  "explanation": "Volatile third-party services are encapsulated centrally behind an own abstraction, with outages cushioned by resilience patterns. Trap: scattered adapters or foreign types in the domain model."
 },
 "c2q32": {
  "q": "A stakeholder demands: “The system should be user-friendly.” Which wording makes this most verifiable?",
  "options": [
   "“At least 80 % of users are satisfied after go-live.”",
   "“The user interface follows the company's design system.”",
   "“Each dialogue contains at most three input fields.”",
   "“New users complete an order without help in < 3 min (≥ 90 %).”"
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: Sounds measurable but names neither task nor context and can only be checked after go-live.",
   "Wrong: This is a solution requirement. Compliance can be checked, but not whether the system is user-friendly.",
   "Wrong: A design rule is a solution idea. It says nothing about whether users complete their tasks well.",
   "Correct: A quality scenario with context (new users), stimulus, response and measure – this makes a vague goal verifiable."
  ],
  "explanation": "Vague goals such as “user-friendly” become verifiable through quality scenarios with a concrete task, context and measure. Trap: design rules are solutions, a satisfaction rate without context is not a complete scenario."
 },
 "c5q29": {
  "q": "A team suspects that the cause of a slow application lies in a particular module. Which approach is methodically best justified?",
  "options": [
   "Proving the bottleneck by measurement first, then optimising specifically.",
   "Optimising the module with the highest coupling first.",
   "Putting a cache in front of the module as a precaution.",
   "Reviewing the module for inefficient algorithms."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Only profiling or monitoring under realistic conditions shows whether the suspicion is right – otherwise one may optimise the wrong place.",
   "Wrong: Coupling says something about changeability, not about where runtime is lost.",
   "Wrong: Caching is a possible tactic but brings complexity and consistency issues and is premature without a proven bottleneck.",
   "Wrong: A review can provide hints but does not prove that the module actually is the bottleneck."
  ],
  "explanation": "Measure first, then optimise: the bottleneck must be proven under realistic conditions. Trap: reviews, coupling metrics or blanket caching do not replace measurement."
 },
 "c1q39": {
  "q": "In a project with initially unclear requirements, a central requirement changes late, and the team implements it with little effort. What is this most likely due to?",
  "options": [
   "An up-front detailed design of all conceivable variants.",
   "The use of microservices as the architectural style.",
   "A deliberately changeable, modular structure.",
   "A particularly complete architecture documentation."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: Big design up front cannot anticipate unknown changes and creates over-engineering.",
   "Wrong: A style does not guarantee changeability; badly cut services even spread changes across many services.",
   "Correct: Modularity and loose coupling keep changes local – this makes late adjustments cheap.",
   "Wrong: Documentation helps find affected places but does not reduce the change effort itself."
  ],
  "explanation": "Late changes remain cheap thanks to deliberately changeable, loosely coupled structures. Trap: documentation, up-front design or a style alone do not achieve this."
 },
 "c4q41": {
  "q": "Nodes and deployment artefacts appear in the deployment view. What distinguishes them most accurately?",
  "options": [
   "A node executes (e.g. VM), an artefact is deployed (e.g. JAR).",
   "An artefact is a building block, the node the executing component.",
   "Nodes are only physical hardware; VMs count as artefacts.",
   "A node is a deployable file, an artefact is the computer."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Nodes are execution environments, artefacts the delivered units such as JAR, image or configuration file.",
   "Wrong: Building blocks are mapped to artefacts but are not the same; a node is infrastructure, not a component.",
   "Wrong: Nodes can also be virtual, e.g. VMs or container runtimes.",
   "Wrong: Swapped: the node executes, the artefact is delivered and installed on it."
  ],
  "explanation": "Nodes are physical or virtual execution environments, artefacts the units deployed on them. Trap: equating artefact with building block or not counting VMs as nodes."
 },
 "k36": {
  "q": "A start-up is planning its first product. Does each aspect speak rather for a (modular) monolith or rather for microservices?",
  "categories": [
   "Rather monolith",
   "Rather microservices"
  ],
  "rows": [
   "Several teams should release their parts independently of each other.",
   "The business boundaries are still unclear and shift frequently.",
   "One area should deliberately be allowed to use a different technology.",
   "Immediate transactional consistency across the entire data set is mandatory.",
   "A small team should manage with low operational complexity.",
   "One area must be scaled independently of the rest during load peaks."
  ],
  "explanation": "Independent scaling and releasing as well as technology diversity speak for microservices. Unclear business boundaries, strict consistency and low operational complexity rather speak for a modular monolith."
 }
};
