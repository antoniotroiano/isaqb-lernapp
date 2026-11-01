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
   "Correct: Architecture always exists, even if it was never deliberately planned or documented. Every system has building blocks and relationships; documentation merely describes that architecture, it does not create it.",
   "Wrong: Overgeneralisation: architecture covers the fundamental, system-wide decisions that are hard to change. Detail decisions such as variable names or local algorithms are not part of the architecture.",
   "Correct: This is the common core of the usual architecture definitions (R1). Building blocks alone, without their interfaces and relationships, do not describe an architecture; only their interplay does.",
   "Correct: Besides structures, the curriculum explicitly counts cross-cutting concerns such as persistence, logging or error handling, as well as overarching principles, as part of architecture. They affect many building blocks.",
   "Wrong: Confusion of terms: a style such as layers or microservices shapes the architecture but is only one part of it. Building blocks, cross-cutting concerns and fundamental decisions go far beyond the style."
  ],
  "explanation": "Architecture comprises building blocks with interfaces and relationships, cross-cutting concerns, principles and fundamental decisions, and every system has one. Traps: not every decision is architecture, and the architectural style is only one part of it."
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
   "Correct: Building blocks are hierarchical: the white-box view shows which finer-grained building blocks a component consists of. An ordering module may, for example, contain a shopping cart, price calculation and payment.",
   "Wrong: This overgeneralises loose coupling. Components may have required interfaces and use other building blocks; what matters is that dependencies are deliberate, clearly defined and kept low, not that they are absent.",
   "Wrong: This mixes up the building block view and the deployment view. A deployment artefact (e.g. a JAR or container image) can contain several building blocks, and one building block can be spread across several artefacts. The mapping is shown in the deployment view.",
   "Correct: This is the black-box principle, or information hiding: clients only know the interface contract. As a result, the implementation can change without the callers having to be adapted.",
   "Wrong: The signature only covers names, parameters and types. Interchangeability requires the same contract, including semantics, pre- and postconditions and quality guarantees such as response time or error behaviour.",
   "Correct: A building block may offer several interfaces, e.g. one for customer-facing clients and one for administration. This lets different groups of clients be served with suitable, lean contracts."
  ],
  "explanation": "A component is a building block: hierarchically decomposable, encapsulated behind interfaces and possibly offering several of them. Traps: loose coupling does not mean “no dependencies”, a signature is not a contract, and a building block is not a deployment artefact."
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
   "Wrong: Required interfaces are part of the external view too, because they show what the building block depends on. Anyone who wants to use or replace it must know these dependencies – so the black box describes provided AND required interfaces.",
   "Wrong: A white box describes its contained building blocks precisely as black boxes, i.e. with responsibility and interfaces. Only when you open one of them does its own white box follow on the next refinement level.",
   "Wrong: More detail does not mean more external contact: external interfaces that only appear in the white box make the two views inconsistent. The white box refines the external view, it does not extend it – if an interface is missing, fix the black box.",
   "Correct: The white box is the internal view of the same building block and must be consistent with its external view. It shows the contained building blocks, their interplay and which of them realise the external interfaces, e.g. which part serves the REST API."
  ],
  "explanation": "Black box = external view with responsibility plus provided AND required interfaces. White box = internal view, consistent with the black box; it describes its inner building blocks as black boxes again. Traps: moving required interfaces into the white box or inventing new external interfaces there."
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
   "Wrong: Views show different aspects of the same system and therefore must be consistent with each other. Different audiences justify different focus and detail, but not contradictions – those would be a documentation defect.",
   "Wrong: The “when” belongs to the runtime view. The building block view shows the static decomposition of the system into building blocks with their interfaces and dependencies, not their interaction over time in concrete flows.",
   "Correct: The deployment view shows which artefacts run on which infrastructure nodes (servers, containers, devices) and over which channels the nodes are connected. Example: the web archive runs on two application servers behind a load balancer.",
   "Correct: The runtime view describes dynamic behaviour: how do building blocks interact in a concrete scenario? Sequence or activity diagrams are typical, e.g. for the flow “place order” or system start-up.",
   "Wrong: This confuses the context view with level 1 of the building block view. The context view shows the system as a black box with its external neighbours (users, external systems) and interfaces; the first decomposition belongs to the building block view."
  ],
  "explanation": "Runtime view = dynamic interaction in scenarios, deployment view = artefacts on nodes. Traps: the context view is not a decomposition level, behaviour over time does not belong in the building block view, and views must be consistent."
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
   "Correct: The curriculum (LG 01-04) requires architects to identify, show and argue the consequences of architecture decisions towards stakeholders. Example: explaining why a message broker adds operational effort but improves decoupling.",
   "Correct: Accompanying the implementation includes checking and ensuring that source code and architecture stay consistent. Otherwise architecture erosion sets in: the code gradually drifts away from the decisions that were made.",
   "Correct: Clarifying and questioning requirements and constraints and aligning them with stakeholders is an explicit task in the curriculum. Unclear or contradictory requirements are thus detected early, before they shape expensive structural decisions.",
   "Wrong: Role confusion: schedule, budget and staffing are the responsibility of project management. Architects contribute the technical consequences, such as effort estimates or risks, but do not own the budget.",
   "Wrong: Business prioritisation of the backlog lies with the product owner or the business side. Architects advise on technical dependencies and risks, but they do not decide the order of features themselves.",
   "Correct: Structural decisions on system decomposition, dependencies and interfaces are a core task of architects. They define the building block structure and therefore how well the system meets quality requirements such as modifiability."
  ],
  "explanation": "Architects are responsible for the technical solution: questioning requirements, decomposing the system, keeping code and architecture consistent and arguing consequences. Trap: budget and staffing (project management) and backlog order (product owner) are not their tasks."
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
   "Correct: External quality shows in the running system: users experience performance, reliability or usability directly during operation. It can be observed from outside without knowing the code.",
   "Wrong: Maintainability concerns the inner structure of the system and is therefore an internal quality. Users notice it at most indirectly, for instance when new features take long; it is not visible during operation.",
   "Wrong: This reverses cause and effect. A system can work well today and still be internally tangled and hard to maintain. Good external quality is therefore no proof of a good structure.",
   "Wrong: Black-box tests only check observable behaviour at the interface. Internal quality such as coupling or understandability is assessed instead with code analysis, metrics or reviews.",
   "Correct: Poor structure leads over time to more defects, longer change cycles and side effects. Users eventually notice this as declining reliability or features that fail to arrive."
  ],
  "explanation": "External quality is perceivable in operation, internal quality concerns the structure; weak internal quality eventually shows externally. Trap: the reverse does not hold – good external quality does not prove a good structure, and maintainability is internal."
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
   "Wrong: Big Design Up Front rests on the same incomplete knowledge as the open style decision. A detailed design only moves the uncertainty into an extensive plan that has to be thrown away once the requirements are clarified.",
   "Wrong: An ADR makes the decision, its context and rationale traceable, but it does not make it cheaper to reverse. Changing the architectural style stays expensive no matter how well it is documented – documentation and reversibility are different things.",
   "Wrong: In practice requirements are never complete and stable; waiting for full sign-off blocks the project. Waiting only pushes risks further back instead of making them visible early through deliberate decisions.",
   "Correct: According to the curriculum, architecture work happens under uncertainty and is iterative. Deciding while explicitly recording the underlying assumptions lets you check them later and adjust the decision if needed, for example after a spike."
  ],
  "explanation": "Under uncertainty you decide deliberately, document the assumptions and review them iteratively. Traps: waiting for complete requirements only postpones risks, and an ADR provides traceability, not cheap reversibility."
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
   "Wrong: Role swap: stakeholders and requirements decide which features a system offers. Architecture ensures that the required functions and qualities can be achieved under the given constraints.",
   "Correct: Constraints such as mandated technologies, budget, deadlines or organisational structures are non-negotiable. They must shape the design from the start, otherwise costly rework follows.",
   "Correct: Architecture and requirements influence each other. Choosing cloud operation, for example, creates new requirements for operations, security and cost control that nobody had stated before.",
   "Correct: Functions can be implemented with many different structures. Only quality requirements such as performance, availability or modifiability really constrain the solution and thereby shape the overall structure.",
   "Wrong: The same functionality can be built as a monolith, in layers or as microservices. Functional requirements therefore do not uniquely determine the building block structure; qualities and constraints do so far more."
  ],
  "explanation": "Quality requirements and constraints shape the structure, and architecture decisions feed back into the requirements. Traps: architecture does not decide the feature set, and functions alone do not uniquely determine a structure."
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
   "Wrong: The curriculum explicitly names the GUI, alongside persistence, communication and security, as a cross-cutting concern on which architects decide. This means the concept (e.g. web vs. rich client, state handling), not the screen layout.",
   "Wrong: The curriculum requires architects to recognise independently, across all their tasks, when further iterations are needed and to obtain feedback. Architecture work is iterative; noticing when an assumption no longer holds is a core duty.",
   "Wrong: Analysing and evaluating architectures with regard to risks for the requirements is a task explicitly listed in the curriculum (cf. chapter 5). Without evaluation it would remain unclear whether the solution meets the quality goals.",
   "Correct: Detailed design of individual screens is the responsibility of UX/UI designers. Architecture only makes overarching decisions about the GUI as a cross-cutting concern, such as technology, interaction patterns or connection to the backend."
  ],
  "explanation": "The GUI concept as a cross-cutting concern belongs to architecture, whereas the layout of individual screens does not. Trap: “GUI” sounds like detailed UX work, but the curriculum explicitly lists it as a cross-cutting concern; recognising iterations and evaluating risks are listed tasks too."
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
  "explanation": "Building blocks with interfaces are not yet an architecture; relationships, cross-cutting concerns and decisions are missing (false). Building block is the umbrella term, component a specific form (true; the reverse is false). Every system has an architecture, even if unplanned (true). Interfaces describe provided and required operations (true). Rationale is not in the code, so the architecture cannot be fully read from it (false)."
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
   "Correct: Architecture does not only serve qualities: according to the curriculum it should also ensure that the functional requirements can be met. The chosen structure must be able to carry the required functions, otherwise even the best quality is useless.",
   "Wrong: Architecture defines the fundamental structures and concepts, not every detail. Detailed design inside the building blocks remains the developers' job – specifying everything would be neither possible nor sensible and would constrain the team unnecessarily.",
   "Correct: Architecture is also a means of communication: it ensures that all relevant stakeholders share the same picture of structures and concepts. Without this shared understanding, decisions and implementation drift apart.",
   "Correct: The curriculum names this explicitly as a goal: architecture specifies guidelines that matter for structure and qualities, e.g. on error handling, logging or operation. This does not mean style rules for every line of code.",
   "Wrong: This sounds like maintainability but is over-engineering: nobody can fully anticipate unknown future requirements, and every bit of flexibility costs complexity. The goal is appropriate changeability for expected changes, not freedom from change.",
   "Wrong: Quality requirements come from the stakeholders, e.g. business, operations or the client. Architecture should achieve them and in doing so question, clarify and expose conflicts – it does not define them."
  ],
  "explanation": "Goals according to the curriculum (R1) include: making functional requirements achievable, meeting quality requirements, shared understanding, reducing complexity, architecture-relevant guidelines for implementation and operation. Traps: defining requirements yourself, making everything flexible up front or specifying every detail."
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
   "Wrong: Too narrow: stakeholders are all people or groups with a legitimate interest in the system or its architecture – not just the client or management. Users, developers, operations or testers belong too.",
   "Correct: Architects carry responsibility but do not resolve conflicts on their own. They make trade-offs transparent, show options and consequences, and resolve them together with the stakeholders concerned.",
   "Wrong: Development is explicitly a stakeholder: it has to understand, implement and live with the architecture. Its feedback on feasibility and effort is especially important for architectural decisions.",
   "Wrong: The set of stakeholders is not static. New ones appear during the project (e.g. operations shortly before go-live, new partners), others drop out – so the stakeholder list must be maintained continuously.",
   "Correct: IT operations has to install, monitor and run the system and has corresponding requirements. The curriculum explicitly lists operations, data centres and production among the partners of the architecture role.",
   "Correct: In embedded and hardware-related systems, hardware strongly influences the software architecture, e.g. through memory, computing power or interfaces. The curriculum explicitly names hardware development and system architecture as stakeholders here."
  ],
  "explanation": "Stakeholders are everyone with a legitimate interest – including development, operations and, for embedded systems, hardware development. Traps: they are not only decision-makers, the set is not static, and conflicts are resolved jointly rather than alone."
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
   "Correct: Few, clearly defined dependencies via interfaces limit the impact of changes. If a building block changes internally, loosely coupled neighbours remain unaffected – a central design principle in the curriculum.",
   "Wrong: Mixing up terms: cohesion describes how well the inside of a building block belongs together. Tight interweaving between neighbouring building blocks is coupling – and that should be low.",
   "Wrong: Small building blocks are not automatically cohesive. Cutting too finely tears apart related logic and increases the number of dependencies, i.e. coupling. The right size follows from responsibility, not from a minimum.",
   "Wrong: Wide interfaces expose internals and violate information hiding. The more operations clients use, the more strongly they are coupled to the building block and the harder it becomes to change it.",
   "Correct: High cohesion means related responsibilities are bundled in one building block. Changes to one responsibility therefore stay local instead of spreading across many building blocks."
  ],
  "explanation": "A well-cut building block has high internal cohesion and loose external coupling through narrow interfaces. Traps: cohesion applies within, not between building blocks; 'as small as possible' does not mean cohesive, and many public operations increase coupling."
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
   "Wrong: Too narrow: a signature only says how to call something. An interface contract also includes guarantees such as pre- and postconditions, error behaviour or quality properties.",
   "Correct: The interface is the externally visible contract. It can contain provided operations as well as required ones, i.e. what the building block expects from its environment – each with its guarantees.",
   "Correct: That is exactly the purpose of encapsulation and information hiding: internals may change as long as the contract is kept. Clients of the building block thus remain unaffected by internal changes.",
   "Wrong: An interface can have any number of clients, for example a public API with many consumers. The number of clients is often precisely why it must remain particularly stable.",
   "Wrong: Internal data structures are an implementation detail. The interface is meant to hide them so that they can change without clients of the building block having to be adapted."
  ],
  "explanation": "An interface is a contract of provided or required operations plus guarantees; it hides internals and can stay stable despite implementation changes. Traps: a signature alone is not a complete contract, and an interface can have many clients."
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
   "Correct: Responsibility describes the WHAT: a clearly delimited, cohesive task that separates the building block from others. Example: 'The pricing block calculates final prices including discounts' – independent of technology or team.",
   "Wrong: Technology describes HOW it is realised, not the task the building block stands for. The same responsibility could be implemented in Java or Go without changing in substance.",
   "Wrong: The public operations realise the responsibility towards the outside but do not fully define it. A mere list of methods says nothing about the purpose that ties them together – a typical confusion of interface and task.",
   "Wrong: This confuses organisational ownership with the technical and business task. The people who develop or operate a building block can change without its responsibility within the system changing."
  ],
  "explanation": "A building block's responsibility is the WHAT: a delimited, cohesive task. Traps: neither the list of public operations nor the implementation technology nor the owning team defines it."
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
   "Wrong: Overgeneralisation: blindly updating the documentation legitimises unintended violations as well. Architecture goals are silently abandoned instead of consciously deciding whether the deviation is wanted.",
   "Correct: When the intended and the actual architecture drift apart, this is called architecture erosion. Planned qualities such as maintainability are gradually lost, often without anyone noticing for a long time.",
   "Correct: Manual code and architecture reviews as well as tool-supported dependency checks, e.g. rules for allowed layer access, reveal violations. They belong to architecture work during implementation.",
   "Wrong: Tests check behaviour, not structure. A system can pass every test and still contain forbidden dependencies that degrade maintainability and modifiability in the long run.",
   "Correct: Some deviations are mistakes, others are valid insights from implementation. Architects decide case by case whether the code is brought back in line or the architecture and its documentation are adapted."
  ],
  "explanation": "Deviations between code and documented architecture mean a risk of erosion; you uncover them with reviews and dependency checks and decide consciously case by case. Traps: green tests say nothing about structure, and blanket re-documentation abandons goals."
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
   "Wrong: Lower decomposition levels can also contain fundamental, hard-to-change decisions, such as a central data model inside a sub-block. That is why the building block view deliberately has several levels, refined as deeply as necessary.",
   "Correct: Design principles such as high cohesion and loose coupling apply recursively: they hold for splitting the overall system into subsystems just as for modules, packages or classes within a building block.",
   "Wrong: This confuses levels with views. Views are different perspectives on the same system; levels describe the depth of refinement within one view, e.g. level 1 and level 2 of the building block view.",
   "Wrong: Higher-level decisions set the framework for refinement, e.g. a chosen architectural style or technology constraints. The levels are therefore not isolated but influence each other – findings from below can also trigger changes above.",
   "Correct: On every level a building block can be shown from the outside as a black box (responsibility, interfaces) or in its internal decomposition as a white box. The white box of one level consists of black boxes of the next level."
  ],
  "explanation": "Architecture describes nested levels of abstraction; design principles and the black-box/white-box perspective apply on each of them, and decisions affect other levels. Traps: levels are not views, and architectural relevance does not stop at the top level."
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
   "Correct: Structures and concepts should be understandable to all relevant stakeholders – this is one of the goals in the curriculum. Only those who understand the system can support, implement or operate it.",
   "Correct: Systematically reducing complexity is one of the goals in the curriculum. It is achieved through decomposition, abstraction and clear responsibilities, so that parts of the system can be understood and changed independently.",
   "Wrong: The functional scope is determined by the stakeholders through the requirements. Architecture ensures that it can be implemented but does not define it – this confuses the requirements side with the solution side.",
   "Correct: Easily overlooked: architecture-relevant guidelines for implementation and operation are a goal of their own in the curriculum. Examples are rules on error handling, logging or deployment that safeguard the structure and the qualities.",
   "Wrong: Architecture can support planning and estimation, but it guarantees neither budget nor schedule adherence. That is the job of project management; the curriculum does not list it among the goals of architecture.",
   "Wrong: Only anticipated changes can be made easier deliberately, e.g. by encapsulating volatile parts. Making every possible change cheap is impossible and would lead to over-engineering."
  ],
  "explanation": "Goals according to the curriculum: support implementation, achieve functions and qualities, ensure understanding, reduce complexity, define guidelines for implementation and operation. Traps: no budget/schedule guarantee, no defining of features and no cheap changeability for everything."
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
   "Wrong: Postponing just pushes risks to later, where changes are more expensive. Iterative does not mean avoiding decisions, but making them early enough based on current knowledge and then reviewing them.",
   "Wrong: Purely emergent architecture forgoes deliberate, overarching decisions. Then alignment with quality goals and constraints is missing; cross-cutting topics like security or scalability do not arise from the code by chance.",
   "Correct: Fundamental decisions are made early because they shape further work, but are reviewed in every iteration based on feedback, measurements and new requirements, and refined or corrected if necessary.",
   "Wrong: Iterations refine and correct the architecture step by step. Redesigning in every iteration would devalue fundamental decisions already made, cause huge costs and provide no stable basis for implementation."
  ],
  "explanation": "Iterative means: decide early, then review and refine based on new insights. Traps: neither postponing until the end, nor purely emergent architecture, nor a complete redesign per iteration matches this approach."
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
   "Correct: Architecture comprises the system-wide, load-bearing decisions that are expensive to change later, such as decomposition or technology choice. Detailed design refines within these constraints, e.g. classes inside one building block.",
   "Wrong: Architecture and detailed design evolve iteratively and often in parallel. A fixed milestone as a phase boundary reflects waterfall thinking and contradicts the iterative approach the curriculum emphasises.",
   "Wrong: There is no fixed building block size at which detailed design starts. The boundary depends on the project and follows from the reach of a decision: whatever affects the whole system or is hard to change belongs to architecture.",
   "Wrong: Both cover structure and behaviour. Architecture also describes behaviour, for example in the runtime view. The difference lies in the reach of the decisions, not in structure versus behaviour."
  ],
  "explanation": "Architecture covers overarching decisions that are hard to change; detailed design refines within these constraints. Traps: the boundary is neither a fixed milestone nor a building block size, and both levels describe structure as well as behaviour."
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
   "Wrong: Too narrow: according to the curriculum, architects communicate with all relevant stakeholders themselves, including the business side. They cannot delegate this task to the product owner.",
   "Correct: Communication is not a one-way street. Active listening helps to understand stakeholders' real concerns and is explicitly listed in the curriculum as an architect's skill.",
   "Wrong: Communication is central throughout the design, not just at the end. Whoever only presents a finished result learns about objections too late and misses alignment with stakeholders.",
   "Wrong: Verbal alignment is valuable but does not replace a documented, traceable justification. Without a written record, reasons get lost and decisions are questioned later.",
   "Correct: Architects stand between business, development, operations and management. They must balance differing interests and bring about viable compromises.",
   "Correct: The same decision is explained differently to management than to developers: the content stays the same, while the presentation adapts to the audience's knowledge and interests."
  ],
  "explanation": "Good communication means mediating, listening actively and justifying decisions for each audience – continuously during design and towards all stakeholders. Traps: communication is not a final presentation, not limited to developers and no substitute for documentation."
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
   "Correct: A proof of concept specifically checks a risky assumption behind a key decision before much is built on it. Here, for example, a load test with the messaging product shows early whether it handles the required messages per second.",
   "Wrong: A PoC yields insights that can feed into estimates, but it does not bindingly fix the total effort. It only looks at a small, risky slice and is therefore no basis for project planning.",
   "Wrong: This confuses a PoC with an MVP or first increment. A PoC is deliberately not production-ready: it is built quickly to answer one question and is usually discarded afterwards.",
   "Wrong: A PoC targets one concrete technical risk, not functional completeness. Implementing all business functions end-to-end would be expensive and would not answer the actual load question any faster."
  ],
  "explanation": "A PoC checks risky assumptions behind key decisions early and specifically, here the load capacity of the messaging product. Traps: it is neither a production-ready MVP nor functionally complete nor a binding effort estimate."
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
   "Wrong: Quality attributes compete with each other, e.g. security versus usability or performance versus modifiability. Good architecture does not optimise everything at once but makes deliberate trade-offs by priority.",
   "Correct: Unnecessary complexity makes understanding, testing and maintenance harder. Oversimplification, on the other hand, misses the requirements. Simplicity is one of the central design principles in the curriculum.",
   "Correct: The quality of an architecture is relative: it is measured by whether the quality goals are met under the given constraints. There is no best architecture independent of context.",
   "Wrong: Building for speculative future requirements is over-engineering. It increases complexity and cost without certain benefit; flexibility makes sense only where change is likely.",
   "Wrong: Patterns are tools, not a guarantee of quality. Whether a pattern fits depends on the context; misapplied, even a proven pattern adds needless complexity or misses the goals."
  ],
  "explanation": "A good architecture meets the quality goals under the given constraints and is as simple as possible. Traps: neither many proven patterns, nor speculative generality, nor maximising all qualities at once makes an architecture good."
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
   "Wrong: It is not a matter of size. Even a single, fine-grained building block can be a component, as long as it is encapsulated and used via defined interfaces.",
   "Correct: In CPSA-F, building block is the general umbrella term for structural elements (modules, packages, classes, subsystems …). A component is a specific kind, typically with explicit interfaces – every component is a building block, but not vice versa.",
   "Wrong: The difference is not design time versus runtime. Both terms are primarily structural terms of the static view; runtime instances and their interaction are described in the runtime view.",
   "Wrong: This is exactly reversed – a classic exam trap. Building block is the umbrella term and component the more specific kind; reversing the hierarchy leads to the plausible-sounding but wrong option."
  ],
  "explanation": "Building block is the umbrella term, a component is a specific building block with encapsulation and interfaces. Traps: the distinction is neither about runtime versus design time nor about size, and the reversed hierarchy is a typical distractor."
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
   "Correct: The curriculum refers to numerous accepted definitions and extracts their common aspects: building blocks, relationships, interfaces, principles and decisions. This core is what matters for the exam, not a single definition.",
   "Wrong: This confuses the levels: the Advanced Level also relies on the same common core instead of a single binding definition. It deepens methods and topics but does not redefine the term.",
   "Wrong: An architectural style such as layers or microservices is a solution decision for a specific system. The concept of architecture itself is style-independent and applies equally to every system.",
   "Wrong: Definitions describe a term, not concrete solutions. The solution space is constrained by requirements, constraints and decisions, not by the choice of a definition."
  ],
  "explanation": "There are many accepted definitions of software architecture; the curriculum teaches their common core (building blocks, relationships, decisions). Traps: deferring to the Advanced Level, dependence on the architectural style or an alleged restriction of the solution space."
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
   "Wrong: Hardware, networks and data centres belong to infrastructure or technology architecture. The curriculum only delimits this domain; CPSA-F looks at infrastructure only insofar as it affects the software architecture (deployment view).",
   "Wrong: The structure of entire application landscapes is the subject of enterprise IT architecture. It is a separate domain that the curriculum only delimits and does not cover in detail.",
   "Wrong: Cross-system structure and use of data describes information or data architecture. This too is a neighbouring discipline that the curriculum mentions only for delimitation (R3 content, not examined in detail).",
   "Correct: The Foundation Level covers the architecture of individual software systems: their structures, building blocks, interfaces and cross-cutting concepts. Neighbouring architecture domains are mentioned only for delimitation."
  ],
  "explanation": "CPSA-F focuses on structures and concepts of individual software systems. Trap: enterprise, information and infrastructure architecture are neighbouring domains that the curriculum only delimits – they sound relevant but are not the focus."
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
   "Wrong: The package structure only shows a static excerpt. Runtime behaviour, deployment to infrastructure and the reasoning behind decisions are not contained in it, and packages often reflect the intended architecture only partially.",
   "Correct: Static and dynamic structures exist side by side, such as building block structure, runtime interactions and deployment. That is why architecture is described through several views, each showing one structure.",
   "Wrong: Static dependencies already belong to the building block view; structure always consists of elements and their relationships. Building blocks without relationships would just be a list. The runtime view additionally shows the dynamic interaction.",
   "Wrong: Too narrow: the runtime and deployment views also describe structures of the system. The building block view shows the static structure but is only one of several views.",
   "Correct: Dynamic structures – how building blocks interact at runtime, for example the flow of an order process – are part of the architecture as well. They are documented in the runtime view."
  ],
  "explanation": "A system has several structures: static ones (building blocks and dependencies) and dynamic ones (runtime interaction), described in different views. Traps: relationships already belong to the static structure, and structures are restricted neither to the building block view nor to the package structure."
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
   "Wrong: Data models shape the architecture, for example how building blocks are cut or distributed. They are therefore designed together with it, not afterwards, otherwise the structure will not fit the data.",
   "Wrong: Data has an impact far beyond the persistence layer: on building block decomposition, interfaces, security, scalability and performance. Reducing it to the database underestimates its influence.",
   "Correct: Data often outlives several generations of applications, and many systems depend on it. A poor data model is therefore expensive to correct later, for example through migrations.",
   "Wrong: An ORM at most decouples the storage representation from objects. The domain model and its influence on building block structure and interfaces remain."
  ],
  "explanation": "Data models shape the architecture and are long-lived; changing them is expensive, so they belong in architecture design. Traps: they affect more than persistence, and an ORM only separates the representation, not the data's influence on the architecture."
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
   "Wrong: Half-truth: business and logical fit, but a transfer format such as JSON or XML is a representation of the data. The data model should be decoupled from such formats; the third level is physical storage.",
   "Correct: This is the classic three-way split: conceptual (business terms and relationships), logical (technology-neutral structure such as tables and keys) and physical (concrete implementation in a database with indexes and data types).",
   "Wrong: Normalisation is a technique applied at the logical level to avoid redundancy. It is not a separate abstraction level; the third level next to conceptual and logical is the physical one.",
   "Wrong: This confuses architectural views with model levels. Context, building block and deployment views describe the system's structures, not the abstraction levels of a data model."
  ],
  "explanation": "Data models are typically described at conceptual, logical and physical level. Traps: normalisation is a technique at the logical level, a transfer format is only a representation, and context/building block/deployment are architectural views."
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
   "Correct: If many building blocks directly share the same data model, every change to it affects all users. The building blocks are tightly coupled via the data, even if their interfaces look cleanly separated.",
   "Wrong: Confusion with product types: a sum type is exactly one of its variants (OR), a product combines fields (AND). Sum types are precisely what helps rule out invalid combinations.",
   "Correct: A \"customer\" may be modelled differently in sales than in accounting. Separate models per building block decouple them, because each one represents only the aspects relevant to it.",
   "Wrong: The curriculum stresses decoupling the domain model from its representation in databases and exchange formats. A 1:1 mapping ties the domain model to technical details of persistence.",
   "Wrong: Separate schemas do not help if all services still read other services' data directly. The coupling remains; access should go only through the interface of the service owning the data.",
   "Correct: Who owns which data and may change it is an important decomposition criterion. Data ownership helps determine which building blocks belong together and where interfaces run."
  ],
  "explanation": "Data ownership and shared models determine decomposition and coupling; separate models per building block for the same business object are legitimate. Traps: separate schemas with mutual direct access, a 1:1 database schema, and confusing sum with product types."
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
   "Correct: The requirement restricts the solution space because the existing infrastructure must be used. It describes neither a function nor a quality of the product but a technical constraint that architects have to take into account.",
   "Wrong: A deadline is not a property of the product but an organisational constraint, like budget or staff. Quality requirements instead describe how well the system does something, such as performance or security.",
   "Correct: The statement describes a capability of the system, i.e. WHAT it should do functionally. It is therefore a functional requirement; quality aspects such as response time when cancelling would have to be stated separately.",
   "Wrong: Data protection rules such as the GDPR are regulatory or legal constraints. They limit, for example, the choice of cloud region and provider, but they are not a function the system provides to its users.",
   "Wrong: A numeric value makes a requirement measurable, not a constraint. Response time describes how well the system responds and is therefore a quality requirement (performance or performance efficiency).",
   "Correct: The statement describes how easily the system can be adapted – i.e. maintainability or modifiability – rather than a new function. Stating 5 person-days makes it measurable and verifiable."
  ],
  "explanation": "Functional describes WHAT the system does, quality HOW WELL it does it, and constraints restrict the solution space. Traps: numeric values do not turn a requirement into a constraint, and deadlines or data protection rules are not product requirements but organisational or regulatory constraints."
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
   "Correct: Distribution, decomposition and communication of building blocks determine which qualities are achievable at all. These decisions are made early – anyone who looks at qualities only afterwards finds them already shaped by the structure.",
   "Wrong: User feedback sharpens quality requirements but does not replace clarifying them early. Even in agile projects they shape the first structural decisions, e.g. whether a system is distributed.",
   "Correct: Drivers such as availability or security affect distribution, data storage and interfaces – i.e. fundamental decisions. If they are discovered late, precisely these expensive-to-change decisions have to be revised.",
   "Wrong: Local tuning helps with local bottlenecks, such as a slow query. Qualities like availability or scalability depend on the basic structure, however, and often require restructuring rather than fine-tuning.",
   "Wrong: A load test only determines whether a quality has been achieved. The architecture has to make it possible – a test does not make a badly structured system faster, it just reveals the problem shortly before go-live.",
   "Correct: Implicit expectations, e.g. regarding security or response times, apply even if unspoken. Anyone who discovers them late pays for the correction – so they should be actively elicited early."
  ],
  "explanation": "Qualities emerge from the architecture, not from late tuning or testing; quality drivers discovered late hit fundamental decisions. Traps: tests and feedback measure or sharpen quality but do not enable it; implicit expectations still apply."
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
   "Correct: A firmly capped budget is an organisational constraint. It limits which solutions are possible at all, e.g. whether expensive licences, additional infrastructure or external specialists are an option.",
   "Correct: The curriculum lists availability and skills of staff among organisational constraints. A team with only Java experience can implement a solution in an unfamiliar language only with risk and ramp-up effort.",
   "Wrong: This is a quality requirement (availability): it describes how good the system should be. It strongly shapes the architecture but does not prescribe a solution – so it is not a constraint, even though it sounds strict.",
   "Wrong: A measurable quality requirement (performance or response time). The concrete number makes it a good quality scenario; however, it does not restrict the solution path but defines a goal to achieve.",
   "Correct: A technical constraint: the existing, already licensed database is given, and the architecture must adapt to this infrastructure instead of freely choosing a database product.",
   "Correct: A regulatory or legal constraint (e.g. from GDPR). It restricts the solution space, for example in the choice of cloud provider, region or data centre."
  ],
  "explanation": "Constraints restrict the solution space: budget, team skills, existing technology and regulation. Trap: 24/7 availability or response times under 1 s are quality requirements – they describe a goal, not a prescribed solution path."
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
   "Wrong: A technology mandate describes a solution (the HOW), not the required behaviour. It guarantees no particular response time and therefore does not make 'fast' verifiable; it also restricts the solution space unnecessarily.",
   "Wrong: Classifying it in a taxonomy like ISO 25010 clarifies which quality is meant but does not make it measurable. A target value and the conditions under which it must hold are still missing.",
   "Correct: Context, stimulus, response and measure are the parts of a quality scenario according to the curriculum. Example: with 500 concurrent users (context) someone starts a search (stimulus), the system returns results (response) in under 1 s (measure).",
   "Correct: The curriculum requires that a quality requirement also specifies the analysis method, for instance measurement in a load test or a model calculation. Only then is it clear how fulfilment will be demonstrated.",
   "Wrong: A bare response measure is not yet a complete scenario. It remains open for which operation, under which load and in which environment 'under 1 s' must hold – so fulfilment cannot be checked unambiguously."
  ],
  "explanation": "'Fast' becomes verifiable through a complete quality scenario (context, stimulus, response, measure) plus a defined analysis method. Traps: a bare number without context, a technology mandate or mere classification in a quality model are not enough."
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
   "Correct: Quality expectations such as response times or availability often remain unspoken but strongly shape the architecture. Architects therefore put them on the table and have them confirmed.",
   "Wrong: This confuses contributing with being responsible. Business prioritization lies with the client or product owner; architects only provide the technical basis for that decision.",
   "Correct: Effort, risks and trade-offs of individual requirements are important decision inputs. Pointing out these technical consequences is a clear contribution of architecture to prioritization.",
   "Correct: Architects question requirements from a technical perspective, uncover gaps and contradictions and agree on necessary refinements with stakeholders, as described in the curriculum (LG 02-01).",
   "Wrong: Gaps are bridged with documented assumptions that the business side confirms. Only the responsible stakeholders may define requirements bindingly, not the architect alone.",
   "Wrong: Not every concern becomes a requirement, but it must still be considered – for instance to validate requirements or detect risks. Simply dropping it wastes important clues."
  ],
  "explanation": "Architects question requirements, uncover gaps and contradictions, make implicit quality expectations explicit and provide technical consequences as decision input. Trap: prioritizing and defining bindingly stays with the business side, and concerns without a requirement remain relevant."
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
   "Wrong: In ISO/IEC 25010 availability belongs to reliability, together with fault tolerance and recoverability. Security instead covers confidentiality, integrity and authenticity, among others – the mix-up comes from the CIA triad.",
   "Wrong: Tempting, because scaling often serves performance. In the 2023 edition, however, scalability belongs to flexibility; performance efficiency covers time behaviour, resource utilisation and capacity.",
   "Wrong: Modularity belongs to maintainability, together with reusability, analysability, modifiability and testability. Flexibility instead covers adaptability, scalability, installability and replaceability.",
   "Correct: In ISO/IEC 25010:2023 portability was renamed flexibility and extended by scalability. Scalability sits there alongside adaptability, installability and replaceability."
  ],
  "explanation": "In ISO/IEC 25010:2023 scalability belongs to flexibility, modularity to maintainability and availability to reliability. Trap: closeness in meaning, such as scaling and performance, does not decide the placement in the model."
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
   "Wrong: Describes fault tolerance, i.e. how reliably the system delivers its functions. That is a quality requirement (reliability/availability), even though it is phrased very concretely.",
   "Correct: A system reaction to a business event, here the order, is a service the system provides. It describes WHAT the system does and is therefore a functional requirement.",
   "Wrong: The search itself would be the function. The 200 ms response time describes HOW WELL it works, i.e. time behaviour as part of performance, and is therefore a quality requirement.",
   "Correct: Time-triggered processes without user action are also services of the system. A monthly sales report describes WHAT is delivered and is therefore a functional requirement.",
   "Correct: Describes a service customers can invoke directly, i.e. WHAT the system does. The PDF format refines the function but does not turn it into a quality requirement.",
   "Wrong: Sounds like a function but describes operability for certain user groups. That is a quality, classified in ISO 25010:2023 under interaction capability or accessibility."
  ],
  "explanation": "Functional requirements describe services of the system, including time-triggered ones such as reports. Traps: keyboard operability, response times and unnoticed server failures sound concrete but describe HOW WELL the system works and are thus quality requirements."
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
  "explanation": "Functional (WHAT): reminder e-mail, account lock after failed attempts and currency display – numbers in them do not make them quality requirements. Quality (HOW WELL): failover within 30 s (reliability), new language without code change (modifiability), order entry without training (learnability)."
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
  "explanation": "Constraints are external requirements: the trade-fair deadline, the contractually bound data-centre partner and the data protection rule on the EU. Quality requirements describe HOW WELL the system should perform: new payment method in under two person-days (modifiability), detecting unauthorised access within 5 minutes (security), node failure without interruption (availability). Trap: security here is required behaviour, not an imposed rule."
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
   "Correct: Surprising for many: ISO/IEC 25010 lists functional suitability as a main characteristic of product quality – unlike IREB, for example, which separates functional and quality requirements. Sub-characteristics include completeness and correctness.",
   "Wrong: Availability is a sub-characteristic of reliability, not a main characteristic in its own right. It is discussed so prominently that people often wrongly place it at the top level of the model.",
   "Wrong: Testability is very important for architects, but in the model it is a sub-characteristic of maintainability, together with modularity, analysability and modifiability. Importance is not the same as hierarchy level.",
   "Correct: Compatibility is a main characteristic: it covers interoperability, i.e. exchanging information with other systems, and co-existence, i.e. operating without interference alongside other products in the same environment.",
   "Correct: Reliability is a main characteristic with sub-characteristics such as availability, fault tolerance and recoverability. It describes whether the system performs as required under specified conditions over a period of time.",
   "Wrong: Reusability belongs to maintainability as a sub-characteristic. It sounds like an independent quality goal, but in the standard it is only one aspect of how easily the product can be evolved."
  ],
  "explanation": "Functional suitability, compatibility and reliability are main characteristics of ISO/IEC 25010:2023. Trap: testability, availability and reusability are prominent qualities, but in the model they are only sub-characteristics of maintainability or reliability."
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
   "Wrong: The order of features follows from business prioritisation by value, risk and effort, e.g. in the product backlog. Qualities mainly affect the structure of the system, not release planning.",
   "Correct: Taken-for-granted expectations such as data security or acceptable response times are rarely stated. If they remain unclarified, they only surface in operation – and correcting them is then particularly expensive.",
   "Correct: Qualities often conflict, e.g. security vs. usability or memory consumption vs. performance efficiency. Recognised early, these trade-offs can be weighed and decided consciously with the stakeholders.",
   "Correct: Distribution, layering and data storage depend on quality requirements. Because these structural decisions are expensive to change later, their drivers must be known early.",
   "Wrong: Clarifying early does not mean freezing: quality requirements are sharpened iteratively and can change due to new insights or business goals. Architecture must keep tracking such changes.",
   "Wrong: This confuses function and quality: functional requirements define WHAT the system does, qualities describe HOW WELL it delivers these functions."
  ],
  "explanation": "Clarify quality requirements early because they shape the expensive basic structure, are often implicit and trade-offs must be decided early. Traps: they remain changeable and determine neither the order of features nor the functional scope."
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
   "Wrong: A screen reader function would be one possible solution to meet the requirement. What is demanded, however, is a quality – how well the system can be used by a user group. This confuses requirement and solution.",
   "Wrong: A constraint would only arise if a standard or conformance level were mandatory, e.g. by law or contract. The requirement says nothing of this – it only describes the desired quality goal.",
   "Correct: The requirement describes HOW WELL the system can be used by a user group – i.e. a quality (interaction capability/accessibility in ISO 25010). It can shape the architecture, e.g. through separating presentation and logic.",
   "Wrong: Not every concern becomes a requirement – but here something is explicitly demanded that the system must fulfil. So it is a requirement, namely a quality requirement that should be made concrete."
  ],
  "explanation": "Usability for a user group is a quality requirement (interaction capability/accessibility). Traps: a screen reader function is already a solution, and a constraint only arises when a standard is made mandatory."
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
   "Wrong: Priorities are not frozen: new insights, feedback or changed risks call for adjustments. An order fixed until the release contradicts the iterative approach and ignores what the team learns.",
   "Correct: Effort alone says nothing about benefit. Only when business value and risk are included does a sensible order emerge, for example: high value at low effort first, risky items secured early.",
   "Wrong: Quality requirements are often the stronger architecture drivers. Ranking them generally behind functional requirements risks expensive structural changes when it later turns out that, say, performance or security cannot be met.",
   "Wrong: The opposite is true: architecturally risky requirements are tackled early, for example with a prototype or a walking skeleton. Risks discovered late are much more expensive to fix because much has already been built on wrong assumptions.",
   "Correct: Contradictions such as maximum security versus minimal usability barriers cannot both be fully satisfied. Prioritisation makes such conflicts consciously decidable instead of leaving them open and letting chance decide."
  ],
  "explanation": "Prioritisation weighs business value, risk and effort and resolves contradictions consciously. Traps: risky items come early, not late, quality requirements are not generally secondary, and priorities remain adjustable when new insights arise."
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
   "Correct: A single requirement can relate to several qualities at once. \"Login with 2FA in under 5 s\" touches security, usability and performance – exactly as the curriculum describes.",
   "Wrong: This contradicts the curriculum: requirements cannot always be neatly assigned to one characteristic. A strict one-to-one mapping ignores the interactions between qualities.",
   "Wrong: Technology can mitigate a conflict between goals but not resolve it. Weighing which quality takes priority remains a deliberate architectural decision that must be justified.",
   "Correct: Many configuration switches mean many, often untested combinations and thus more sources of failure. The curriculum gives this as an example of one quality weakening another.",
   "Wrong: Caching buys performance efficiency at the cost of more memory, extra complexity and possibly stale data. It is a classic trade-off, not a free improvement.",
   "Correct: Qualities are interrelated: more security can reduce usability, more flexibility can reduce performance. Deliberate trade-offs are therefore a core task of architecture."
  ],
  "explanation": "Qualities influence each other, and one requirement can concern several qualities; trade-offs are therefore necessary. Traps: even seemingly pure improvements like caching have costs, and technology does not replace a deliberate decision between goals."
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
   "Wrong: That describes a constraint, which bindingly limits the solution space. An assumption is precisely not prescribed but an uncertain fact that may turn out to be wrong.",
   "Wrong: An assumption can turn out to be wrong at any time, for instance during load peaks or an outage at the partner. The system running right now does not confirm it; it remains a risk until verified.",
   "Correct: Because the assumption is documented, you know which decision rests on it – such as omitting a queue or circuit breaker. If it fails, the affected decision can be reviewed specifically.",
   "Correct: That is exactly what characterises an assumption: a fact is presumed for the design but not confirmed. Nobody has confirmed the 99.9 % here, so it is neither a fact nor a requirement.",
   "Wrong: Quite the opposite: the curriculum requires assumptions to be made explicit. Hidden assumptions are the real risk, because later nobody knows what a decision was based on.",
   "Correct: Explicit assumptions can be questioned and verified, for example by asking the operator or checking the SLA. Implicit assumptions, by contrast, lead to misunderstandings between stakeholders."
  ],
  "explanation": "Assumptions are presumed, unconfirmed facts and must be documented explicitly so they can be checked and the dependent decisions found. Traps: an assumption is not a binding constraint, and hiding it increases the risk."
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
   "Correct: Describes the time behaviour of a function on a large data volume, i.e. performance. It does not say WHAT the report does but HOW WELL it works, so it is a quality requirement.",
   "Wrong: Sounds like security, but describes a service that administrators can invoke. That is a functional requirement, even though it serves a security goal.",
   "Wrong: A mandate about existing infrastructure restricts the solution space and is non-negotiable. It is a technical constraint, not a quality requirement.",
   "Correct: Describes how easily the system can be changed, i.e. modifiability as part of maintainability. The measurable time frame makes it a well-testable quality requirement.",
   "Correct: Confidentiality and integrity are sub-characteristics of security in ISO 25010. The statement describes a property of the system and is therefore a quality requirement."
  ],
  "explanation": "Quality requirements describe HOW WELL a system works: time behaviour, modifiability, confidentiality and integrity. Traps: a security-related function such as \"lock accounts\" remains functional, and a database mandate is a constraint."
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
   "Wrong: A requirement on communication protocols is a technological constraint. It determines which technology must be used and does not concern organisation, processes or staff.",
   "Correct: The curriculum explicitly lists partnerships and cooperations as an organisational constraint (R2). A framework contract determines, for instance, who develops which parts and thus influences interfaces and how building blocks are cut.",
   "Correct: Availability and qualifications of staff are organisational factors, even if the content concerns a technology. The team's experience can strongly constrain the choice of technology.",
   "Correct: Standards, guidelines and process models, e.g. approval and release processes, count as organisational constraints. A heavyweight release process can, for example, influence release frequency and how deployment units are cut.",
   "Wrong: Statutory requirements such as retention periods are regulatory or legal constraints, not organisational ones. They come from outside and apply regardless of how the company is organised.",
   "Wrong: It sounds like a corporate mandate and therefore organisational, but the curriculum classifies reference architectures as technological constraints. What matters is the content of the requirement, not who issues it."
  ],
  "explanation": "Organisational constraints include partnerships, approval processes and the availability and qualifications of the team. Traps: a reference architecture is technological even if the group prescribes it, and statutory periods are regulatory constraints."
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
   "Correct: Laws such as the GDPR act as constraints and often lead to concrete quality requirements, e.g. encryption, access control or deletion periods. Legal requirements are therefore a typical source.",
   "Wrong: Cause and effect are reversed here: the building block view is a result of design that is meant to meet the quality requirements. It cannot justify them but must be measured against them.",
   "Correct: Business goals such as “launch in new countries” lead, for example, to requirements for scalability, multilingual support or adaptability. They are a central source of quality requirements.",
   "Correct: Stakeholder concerns such as easy monitoring for operations or isolated testability for QA are a main source of quality requirements. That is why stakeholder analysis belongs early in the project.",
   "Wrong: Frameworks are solution components or at most constraints. Quality requirements should justify their selection, not follow from them – otherwise the solution is declared to be the requirement.",
   "Wrong: The process model determines how the project works, not how good the product must be. Scrum says nothing about the availability, security or performance of the system."
  ],
  "explanation": "Quality requirements come from business goals, stakeholder concerns and legal or regulatory requirements. Traps: frameworks and building block structure are solutions or results, not sources; the process model concerns the process, not the product."
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
   "Wrong: A database can influence qualities such as performance or reliability. But the requirement describes not HOW WELL but WITH WHAT – it fixes a product instead of stating a measurable quality goal.",
   "Wrong: Storing data may be a function, but choosing a specific product is not. It does not describe a functional capability of the system for users, but a prescribed technical means.",
   "Correct: The requirement fixes a solution and thus restricts the solution space. The curriculum counts prescribed software infrastructure such as databases, frameworks or operating systems as technical or technological constraints.",
   "Wrong: The requirement comes from the client and is not negotiable for the team. An architectural decision is made by the team itself, weighing alternatives – here there is nothing left to weigh."
  ],
  "explanation": "An externally prescribed technology is a technological constraint. Traps: touching qualities or persistence does not make it a quality or functional requirement – and because it is prescribed, it is not the team's own architectural decision either."
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
   "Wrong: Implementation effort is a planning figure for the project, not part of the quality requirement. A scenario describes how the system should behave, not what that costs.",
   "Correct: The response describes what the system does in reaction to the stimulus, such as displaying the result list. It is a fixed part of every quality scenario.",
   "Wrong: A scenario describes the requirement, not the solution. Whether caching or another tactic is used is decided later in design; otherwise the solution would be anticipated.",
   "Correct: The context describes the operating state or environment in which the scenario applies, such as full load or normal operation. The same behaviour may be required differently depending on context.",
   "Correct: Only the measure makes the scenario verifiable, e.g. \"95 % in under 1 s\". Without a measurable criterion the requirement would stay vague and could not be tested or evaluated.",
   "Correct: The stimulus is the trigger the system must react to, such as 1,000 simultaneous requests or a change request. It is one of the core parts of a scenario."
  ],
  "explanation": "A quality scenario consists of context, stimulus, response and measure. Traps: solution tactic and effort are not part of it – the scenario describes the requirement and its acceptance criterion, not its implementation or cost."
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
   "Wrong: This is exactly the exam trap: the issue is conflicting stakeholder goals, not just technology. Architects show consequences and options, but they do not resolve such goal conflicts on their own.",
   "Wrong: Sounds elegant but merely moves the conflict into configuration. It is bought with extra complexity and untested combinations, and in the end someone still has to prioritise.",
   "Correct: A documented, justified prioritisation or compromise remains traceable, for example in an ADR. That matters when circumstances change and the decision has to be re-evaluated.",
   "Correct: According to the curriculum, goal conflicts are resolved together with the relevant stakeholders, not single-handedly. Business and operations must back the trade-off so it is accepted later.",
   "Wrong: Conflicts between short- and long-term goals must be weighed case by case, not decided across the board. Always favouring short-term goals permanently harms maintainability and builds up technical debt.",
   "Correct: Only a visible conflict can be decided deliberately. If the conflicting concerns are hidden, the conflict breaks out later in an uncontrolled way, for example as an escalation in operations."
  ],
  "explanation": "Stakeholder conflicts are made transparent, resolved together with those involved and the justified decision is documented. Traps: architects do not decide alone on technical grounds, configurability does not resolve a goal conflict, and blanket rules do not replace weighing."
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
   "Correct: In the 2023 edition, safety (protection against harm to people and the environment) is a separate top-level characteristic alongside security. This is one of the most important changes.",
   "Wrong: Security remains a top-level characteristic of its own with sub-characteristics such as confidentiality, integrity and authenticity. Confusing it with reliability is tempting but wrong.",
   "Wrong: Tempting because e.g. IREB separates function and quality. ISO 25010, however, still lists functional suitability as a top-level characteristic, i.e. how completely and correctly functions are provided.",
   "Wrong: The characteristic was renamed and is now called interaction capability. The content is similar, but the old name usability no longer applies in the 2023 edition."
  ],
  "explanation": "With the 2023 revision, safety was added as a top-level characteristic, and usability is now called interaction capability. Traps: security and functional suitability continue to exist as separate top-level characteristics."
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
   "Wrong: Stakeholders and their concerns change during the project, e.g. through new partners, reorganisations or new regulations. Stakeholder analysis is therefore repeated regularly rather than completed once.",
   "Correct: Operations, support or quality assurance do not use the system functionally, but they have concerns such as monitoring, deployment or fault analysis that shape the architecture. If they are overlooked, important quality requirements are missing.",
   "Correct: Every stakeholder knows further parties (snowball principle). This uncovers roles that appear in no list, such as external service providers or departments that supply data.",
   "Wrong: Budget responsibility says nothing about who has architecturally relevant concerns. Operations, developers or authorities in particular often have no budget influence but raise decisive requirements.",
   "Wrong: The organisation chart is a good starting point but incomplete. External partners, customers, authorities or neighbouring systems do not appear in it, and roles in the chart do not always reflect actual concerns."
  ],
  "explanation": "Stakeholders are found by asking known parties and by including indirectly affected groups such as operations or support. Traps: an organisation chart, budget responsibility or a one-off survey do not give a complete picture – the analysis is ongoing."
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
   "Correct: This is Conway's law: the structure of a system tends to mirror the communication structures of the organisation that builds it. Building block boundaries along department boundaries are a typical symptom.",
   "Wrong: This describes Lehman's laws of software evolution: systems in use must adapt continuously or their usefulness declines. It has nothing to do with the relationship between organisation and system structure.",
   "Wrong: This is Brooks' law from “The Mythical Man-Month” about project staffing: new people need onboarding and increase communication overhead. Conway's law, by contrast, concerns system structure.",
   "Wrong: The direction of influence is reversed here: according to Conway, the organisation shapes the system, not the other way round. Deliberately reversing it – structuring teams to fit the desired architecture – is called the Inverse Conway Maneuver."
  ],
  "explanation": "Conway's law: the communication structure of the organisation shapes the system structure. Traps: the reversed direction (deliberately applied, that would be the Inverse Conway Maneuver) and confusion with Brooks' law and Lehman's laws."
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
   "Wrong: Implicit requirements apply even when unwritten: users still expect them and complain if they are missing. Writing them down makes them explicit and testable, but not valid in the first place.",
   "Wrong: Architects should actively ask about and make explicit assumptions and expectations instead of hoping for complete requirements. Clarification is a shared task, not solely the client's.",
   "Wrong: The opposite: qualities such as security, response time or usability in particular often remain unspoken because they are taken for granted. Functions, by contrast, are usually stated explicitly.",
   "Correct: What stakeholders consider self-evident they do not mention – it still applies. Example: nobody demands that a search should not take several minutes, but everyone expects it.",
   "Correct: The curriculum stresses: implicit assumptions are interpreted differently by different people. Without clarification, the team builds something other than what users expect – complaints after go-live are the result."
  ],
  "explanation": "Implicit requirements are based on things taken for granted, often concern qualities and easily lead to misunderstandings. Traps: they apply even unwritten, and making them explicit is also the architects' task, not just the client's."
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
   "Wrong: The type of conflict depends on its subject, not on who is involved. Two IT teams can also have incompatible goals, and business units can argue about facts.",
   "Correct: A substantive conflict is about facts or the best solution and can often be settled by information, measurement or a prototype. A conflict of interests stems from incompatible goals and requires trade-offs or a compromise.",
   "Wrong: This applies to substantive conflicts. Different goals – such as cost reduction versus maximum availability – remain even with more facts and must be negotiated.",
   "Wrong: The terms are exactly swapped. Incompatible goals characterise a conflict of interests, disputes about facts or solutions a substantive conflict."
  ],
  "explanation": "Substantive conflicts are about facts or solutions and can often be settled by information; conflicts of interests stem from incompatible goals and require trade-offs. Traps: more facts do not resolve a conflict of interests, and the parties involved do not determine the type of conflict."
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
   "Correct: Constraints such as approval processes, budget or team availability shape not only the solution but also the development and architecture process itself (an R2 aspect in the curriculum).",
   "Wrong: Unwritten constraints such as team skills, company culture or established operating platforms also act as constraints. Written form is not a prerequisite.",
   "Wrong: On the contrary: architectural decisions create follow-up requirements and constraints. Introducing messaging, for example, creates new requirements for operations, monitoring and error handling.",
   "Wrong: A confusion of terms: quality requirements describe desired properties of the product. Constraints, in contrast, restrict the solution space, e.g. mandated technologies or laws.",
   "Correct: The curriculum distinguishes technological, organizational and regulatory constraints and lists trends as a further influencing factor. Examples: target platform, team structure, GDPR.",
   "Correct: Constraints are not immutable. A new data protection rule can, for example, overturn the choice of cloud region; architects should be able to recognize and explain such consequences."
  ],
  "explanation": "Constraints are technological, organizational or regulatory, also affect the process, can change and can be created by decisions. Traps: they need not be written down and are not especially binding quality requirements."
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
   "Correct: Besides usage and messaging, the curriculum explicitly lists inheritance, creation, composition and temporal coupling as kinds of coupling. A subclass, for example, depends strongly on its base class.",
   "Wrong: Swapped: efferent means outgoing, i.e. this building block uses others. When other building blocks use this one, those are incoming, i.e. afferent dependencies.",
   "Wrong: According to the curriculum, dynamic coupling via events does not necessarily reduce coupling. The message format and business meaning of the events remain shared dependencies of sender and receiver.",
   "Wrong: That describes coupling, i.e. dependencies between building blocks. Cohesion, by contrast, concerns internal unity: how well the elements inside a building block belong together.",
   "Correct: What belongs together functionally or technically is kept together, and the building block serves a clearly defined purpose. That is exactly high cohesion; it eases understanding and targeted changes.",
   "Correct: Afferent means incoming: many other building blocks depend on this one. Every change to its interface therefore has wide effects and is correspondingly risky and requires coordination."
  ],
  "explanation": "Coupling describes relationships between building blocks, cohesion the internal unity of one building block; inheritance and creation are coupling too. Traps: swapping efferent and afferent, and assuming events eliminate functional coupling."
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
   "Correct: This is the core of Parnas's principle: design decisions that are likely to change are hidden as a building block's “secret” behind a stable interface. Decomposition therefore follows anticipated changes.",
   "Correct: A typical example: the storage format (e.g. CSV instead of XML, or a different table structure) is a hidden secret of the building block. Only the interface is visible from outside, so clients are unaffected when the format changes.",
   "Wrong: Documentation does not change the fact that clients couple themselves to exposed internals and must be adapted when these change. Information hiding is meant to prevent exactly this coupling; well-documented internals are still internals.",
   "Wrong: This describes encapsulation – the language mechanism used to implement information hiding, not the principle itself. You can bundle data and operations and still expose all internals via public getters.",
   "Correct: The goal of information hiding is local modifiability: anticipated changes affect only one building block, while its clients stay untouched. This reduces change effort and risk and promotes loose coupling."
  ],
  "explanation": "Information hiding conceals volatile design decisions behind stable interfaces so that changes stay local. Traps: confusing it with encapsulation, which is merely the means, and assuming that documented internals may be exposed."
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
   "Wrong: Cutting small, client-specific interfaces describes the Interface Segregation Principle – the “I” in SOLID. Clients should not depend on methods they do not use.",
   "Wrong: That subtypes must be able to replace their base types without breaking behaviour is the Liskov Substitution Principle – the “L” in SOLID. It has nothing to do with the “S”.",
   "Wrong: The name is right, the interpretation is not: the SRP is about the reason to change, not the number of methods. A class may have many methods as long as it serves only one responsibility.",
   "Correct: The SRP requires that a building block has only one responsibility and therefore only one reason to change. Example: invoice calculation and PDF output belong apart because they change for different reasons."
  ],
  "explanation": "“S” = Single Responsibility Principle: one reason to change per building block. Traps are the interpretation “one method per class” and the letters L (substitution) and I (segregation). Note: SOLID is R3 here."
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
   "Wrong: Skipping layers is precisely the characteristic of open (relaxed) layering. In the strict variant, a layer may only use the one directly below – performance reasons do not change this, otherwise it would no longer be strict layering.",
   "Correct: Open layering allows skipping layers, but dependencies still point only downwards. You gain performance and simplicity but lose some replaceability, because higher layers know more of the lower ones.",
   "Correct: The callback interface belongs to the lower layer; the higher layer implements it. So the code dependency still points downwards; only the call runs upwards at runtime – as in the Observer pattern.",
   "Wrong: Layers are a logical structure, tiers a physical distribution. Several layers can easily run in the same process – an additional layer therefore does not automatically mean additional network calls.",
   "Correct: Layering means dependencies point only from top to bottom. If a lower layer knows a higher one directly, a backward dependency arises, often even a cycle, which violates the layering.",
   "Correct: Each layer adds indirection through which calls and data are passed. This can cost runtime – a typical trade-off in favour of better modifiability and understandability."
  ],
  "explanation": "Layers: dependencies point only downwards; callbacks via an interface of the lower layer are allowed. Strict = only the layer directly below, open = skipping allowed. Traps: layers are logical, and not every layer is a separate tier."
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
   "Correct: The curriculum names hexagonal, onion and clean architecture as synonyms or closely related variants of ports and adapters. They share one idea: the domain core is at the centre, technology depends on it, not the other way round.",
   "Correct: Ports are technology-neutral interfaces that the domain core defines from its own perspective, for example an interface 'store orders'. The domain logic thus stays free of database or UI details.",
   "Wrong: If the domain core calls adapter classes directly, the domain logic depends on technology and the pattern is defeated. The dependency points from the adapter to the port (dependency inversion), not the other way round.",
   "Correct: Adapters are the concrete, technology-specific connections, such as a JDBC repository or a REST controller. They implement or use the ports and can be replaced without changing the domain core.",
   "Wrong: Ports and adapters structures the dependencies inside an application. It works just as well in a monolith as in a single microservice; a distributed deployment is not a prerequisite.",
   "Wrong: Confusing port and adapter: the concrete JDBC implementation is an adapter. The port is the abstract, technology-free interface defined by the domain core."
  ],
  "explanation": "In ports and adapters the domain core defines the ports, and replaceable adapters connect technology such as the database or UI; onion and clean architecture are related variants. Traps: swapping port and adapter, dependencies from core to technology, and assuming the pattern requires microservices."
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
   "Wrong: Individual services are smaller and easier to grasp, but the overall system becomes more demanding: integration tests across services, deployment pipelines and monitoring many processes add effort.",
   "Wrong: Distributed transactions are considerably harder than local ones. They are usually avoided in favour of eventual consistency, sagas or compensating actions instead of a shared database transaction.",
   "Correct: Independent deployment is a core characteristic of microservices: a service can be shipped without redeploying the others. This enables autonomous teams and short release cycles.",
   "Correct: Distribution brings network failures, latency, distributed monitoring and tracing as well as new failure scenarios. A monolith does not have this operational complexity to the same extent.",
   "Wrong: Microservices are cut by domain, e.g. along bounded contexts, not by technical layers. A layer-based cut creates tightly coupled services that all have to change together for every business change.",
   "Correct: Each service keeps its data behind its own interface. This prevents hidden coupling via a shared database and allows schema and technology to change independently."
  ],
  "explanation": "Microservices are cut by domain, independently deployable and own their data – at the price of higher operational complexity. Traps: overall test and operations effort does not decrease, consistency across services is hard, and a cut by layers is not a microservice cut."
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
   "Correct: Easily overlooked: 'expect errors' as a generalisation of the robustness principle (Postel's law) is explicitly listed in the curriculum. Systems should anticipate faulty input and failures and react robustly.",
   "Wrong: Sounds like a principle but is not one in the curriculum. Reuse at any cost, especially across domain boundaries, often increases coupling because many building blocks depend on the same shared code.",
   "Correct: The open/closed principle is part of modularisation and belongs to the R1 content. Building blocks should be open for extension but closed for modification, for example by extending via interfaces.",
   "Correct: Abstraction is a fundamental design principle: work out useful generalisations and hide details. Building blocks should depend on abstractions rather than concrete implementations.",
   "Wrong: 'Configuration over code' is not a design principle in the curriculum. Excessive configurability actually increases complexity and the number of untested combinations.",
   "Correct: Conceptual integrity is an explicitly named principle: similar problems are solved in similar ways across the whole system. This makes the architecture easier to understand and maintain."
  ],
  "explanation": "The curriculum names abstraction, modularisation including OCP, conceptual integrity and 'expect errors' among the design principles. Traps: maximum reuse and 'configuration over code' sound like best practice but are not among these principles."
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
   "Correct: Access control affects almost all building blocks and interfaces. Without a uniform security concept, each building block would implement authentication and authorisation differently, leaving gaps.",
   "Wrong: Several dialogs displaying the same value does not make it cross-cutting. Shipping cost calculation is domain logic and belongs in one domain building block that the dialogs use.",
   "Correct: Threading and locking concepts must be consistent system-wide. If each building block handles concurrency differently, deadlocks, race conditions and inconsistent data follow.",
   "Wrong: This affects only one building block and is domain logic of the order module. Only a system-wide validation concept, defining how and where all building blocks validate, would be cross-cutting.",
   "Correct: The curriculum explicitly lists energy efficiency as a cross-cutting concern. Energy consumption results from decisions in many building blocks, such as polling, caching or data transfer.",
   "Correct: Errors occur in all building blocks. A uniform error handling concept prevents each building block from reacting, logging or propagating errors to callers in its own way."
  ],
  "explanation": "Cross-cutting concerns affect many building blocks, e.g. error handling, security, concurrency, persistence and energy efficiency. Trap: domain logic such as shipping costs or order validation stays domain logic, even if its result is shown in several places."
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
   "Wrong: The library and legacy core are building blocks, not the deployment view; the latter shows infrastructure and the mapping of artefacts to nodes. Moreover, a view does not describe a design direction such as top-down or bottom-up.",
   "Correct: Bottom-up assembles existing or first-designed parts into larger units. This is particularly suitable when a lot of existing material such as libraries or legacy systems has to be used.",
   "Wrong: The first part is right, the addition is not: in practice top-down and bottom-up are combined and alternated iteratively. One direction does not exclude the other; the curriculum emphasises this interplay.",
   "Wrong: Top-down decomposes the whole step by step into parts. Assembling existing parts into larger structures is the opposite direction; the wording “refining given parts” twists this."
  ],
  "explanation": "Assembling existing parts into larger units is bottom-up, decomposing the whole step by step is top-down. Traps: you do not have to commit permanently to one direction – both are combined – and design directions are not architecture views."
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
   "Wrong: The opposite is true: modularisation creates explicit interfaces between building blocks. These clearly defined interfaces are precisely the benefit, because they make dependencies visible and controllable.",
   "Correct: The curriculum names this limit explicitly: too many or unnecessary abstractions make a system harder to understand. Every indirection must be resolved when reading without providing any benefit.",
   "Correct: Decomposition into building blocks with clear interfaces allows parts to be understood, developed and changed separately. A large system is thus split into manageable units – that is the core benefit.",
   "Wrong: Over-generalisation: a layer without concrete need costs effort, performance and understandability without making changes easier. Abstraction only pays off where variability is actually expected.",
   "Correct: Interfaces are abstractions: users depend only on the contract, not on the concrete implementation. This allows, for example, a database connector to be replaced without changing the callers."
  ],
  "explanation": "Abstraction and modularisation make complexity manageable and implementations replaceable behind interfaces. Traps: more abstraction or more layers are not automatically better, and modularisation creates interfaces rather than saving them."
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
   "Wrong: A shared knowledge store on which specialist modules solve a problem step by step describes the Blackboard pattern. Filters in Pipes and Filters precisely do not share state; they just pass data on.",
   "Correct: An ETL pipeline consists of independent processing steps that pass data on in sequence – a classic case for Pipes and Filters. Filters can be replaced, recombined or parallelised individually.",
   "Wrong: Interactive flows where users jump freely between steps fit poorly with a directed processing chain. Pipes and Filters assumes a fixed one-way data flow without jumping back.",
   "Wrong: Separate models for write and read access describe CQRS (Command Query Responsibility Segregation). That is a different pattern with a different goal, e.g. optimising reads and writes independently."
  ],
  "explanation": "Pipes and Filters suits directed, multi-step processing chains of independent filters, such as ETL pipelines. Traps: interactive, freely branching flows and confusion with Blackboard (shared store) or CQRS (separate read/write models)."
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
   "Wrong: Asynchrony only reduces temporal coupling. Message format and domain meaning remain shared dependencies: if the receiver expects different data, the interaction still fails.",
   "Wrong: Swapped: simultaneous availability is a characteristic of synchronous communication. Asynchronously the sender can send a message even if the receiver is not running, for example via a queue.",
   "Wrong: Local/remote and synchronous/asynchronous are independent characteristics. Remote calls are often synchronous (e.g. REST or RPC), and locally there are asynchronous mechanisms such as events or futures.",
   "Correct: Synchronously the caller blocks until the response arrives. Asynchronously, sending is decoupled in time from processing: the caller continues and may receive a result later, for example via a callback."
  ],
  "explanation": "Synchronous means the caller blocks waiting for the response; asynchronous decouples sending and processing in time. Traps: asynchrony does not remove the domain dependency, does not require simultaneous availability and is unrelated to local versus remote."
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
   "Wrong: If the abstraction belongs to the implementing technical module, the domain logic still depends on that module. The direction of dependency stays unchanged, so the intended inversion does not happen at all.",
   "Correct: The using domain logic defines the interface, for example 'CustomerStore', according to its own needs. The DB adapter implements it, so the dependency points from the technology towards the domain logic.",
   "Wrong: That is the definition of dependency injection, not the DIP. The DIP concerns the direction of dependency on abstractions; DI is just a technique that supplies instances from outside.",
   "Wrong: DI is a technique that can support the DIP but does not guarantee it. A framework can just as well inject concrete classes, and then the domain logic still depends directly on the database technology.",
   "Correct: The core of the DIP: high-level and low-level modules both depend on an abstraction, not one on the details of the other. Domain logic and DB adapter only know the 'CustomerStore' interface."
  ],
  "explanation": "With the DIP both sides depend on an abstraction owned by the using domain logic. Traps: equating it with dependency injection, which is only a supporting technique, and assuming a DI framework fulfils the principle automatically."
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
  "explanation": "Information hiding and the Dependency Inversion Principle are design principles, i.e. guidelines. Dependency injection, broker and CQRS are patterns, i.e. concrete solution templates. Trap: dependency injection sounds like DIP but is a pattern used, among other things, to implement the principle."
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
   "Correct: This is the definition of the principle in the curriculum: different concerns are handled in separate building blocks. They can then be understood, changed and tested independently.",
   "Correct: A typical application: domain and technical aspects change for different reasons. Kept apart, you can e.g. switch the database without touching business rules.",
   "Wrong: SoC is the more general principle at all levels. The single responsibility principle is a specific form that applies to individual classes or building blocks and their reasons to change.",
   "Wrong: SoC is not tied to layers. Concerns can also be separated by domain, e.g. by subdomain, or by module; layers are only one possible implementation.",
   "Correct: A direct consequence of the separation: if domain logic is free of database and UI code, it can be tested in isolation and quickly with unit tests."
  ],
  "explanation": "Separation of concerns handles different concerns in separate building blocks, e.g. domain and technical aspects, which among other things enables isolated testing. Traps: equating SoC with the more specific SRP or tying it necessarily to technical layers."
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
   "Wrong: Code that happens to be identical but changes for different domain reasons is not duplicated knowledge. Merging it couples independent parts unnecessarily – when one reason changes, the other user breaks.",
   "Wrong: This view is too narrow: DRY concerns knowledge, not just source code. Duplicated configuration values, database schemas or documentation also violate DRY because they can drift apart.",
   "Correct: This is how Hunt and Thomas phrase DRY: every piece of knowledge has a single, unambiguous, authoritative representation in the system – in code, configuration or documentation. When it changes, it only needs to be updated in one place (R3).",
   "Wrong: This describes KISS (“Keep it simple, stupid”). It is related in its aim of reducing complexity, but it is a separate principle concerned with simplicity rather than avoiding duplicated knowledge."
  ],
  "explanation": "DRY means: every piece of knowledge has exactly one authoritative representation, whether in code, configuration or documentation. Traps: reducing DRY to textually identical code (coincidental similarity is not duplicated knowledge), limiting it to source code, or confusing it with KISS."
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
   "Correct: YAGNI (“You Ain't Gonna Need It”) argues against building functionality in advance. Speculative extension points “just in case” cost effort and complexity although nobody needs them now and they are often never used.",
   "Wrong: Information hiding conceals design decisions that are likely to change behind interfaces. It says nothing about whether to build functionality in advance and therefore does not argue against the proposal.",
   "Wrong: The OCP is often cited precisely as justification for such extension points, because it calls for extension without modification. So it argues for rather than against them – though properly applied only for expected variability.",
   "Wrong: Conceptual integrity calls for solving similar things similarly, i.e. consistency in design. It says nothing about whether functionality should be built in advance and therefore does not fit the question."
  ],
  "explanation": "YAGNI argues against speculative generalisation and functionality built in advance. Trap: the OCP sounds fitting but is rather used as an argument FOR extension points; information hiding and conceptual integrity address other questions."
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
   "Wrong: The curriculum distinguishes architectural patterns (e.g. layers, Pipes and Filters) from design patterns (e.g. Adapter, Observer). Design patterns usually act at a finer granularity inside building blocks; architectural patterns shape the overall structure.",
   "Correct: No pattern is free: layers add indirection, microservices add distribution complexity. That is why you must consciously weigh benefits and drawbacks against the quality goals when using one.",
   "Correct: Patterns are a way to qualities such as modifiability or scalability – but only for given problems in a given context. Outside that context they can do more harm than good.",
   "Correct: This is how the curriculum defines architectural patterns: proven solution templates for recurring structural problems. They capture experience and create a shared vocabulary within the team.",
   "Wrong: Real systems often combine several patterns, e.g. microservices that are internally layered and communicate via events. Restricting yourself to a single pattern is not a rule of the curriculum.",
   "Wrong: Patterns are abstract templates and must be adapted to the concrete problem, constraints and quality goals. Transferring them unchecked risks unsuitable solutions."
  ],
  "explanation": "Architectural patterns are proven, context-dependent solution templates with benefits and drawbacks that must be weighed. Traps: only one pattern per system, transfer without adaptation, and equating them with (finer-grained) design patterns."
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
   "Wrong: Presentation, application and data layer describe a three-layer architecture. MVC, in contrast, separates concerns within the user interface, not the layers of an entire system.",
   "Wrong: Domain core, ports and adapters are the elements of the ports and adapters (hexagonal) pattern. That pattern shields domain logic from technology, whereas MVC organises interaction with the user interface.",
   "Wrong: Write and read models come from CQRS, the event store from event sourcing. These are separate patterns for data management and have nothing to do with the separation in MVC.",
   "Correct: MVC separates the data model (model), its presentation (view) and the control of user interaction (controller). This allows, for example, several presentations of the same model."
  ],
  "explanation": "Within the user interface, MVC separates model (data), view (presentation) and controller (interaction control). Traps: equating it with the three technical layers and confusing it with ports and adapters or CQRS/event sourcing."
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
   "Wrong: \"Chatty\" interfaces with many individual calls expose many details. Clients must know the call sequence and internals, so dependency increases rather than decreases.",
   "Correct: Clearly defined interfaces ensure that clients depend only on the contract, not on internals. Implementations can then be replaced without changing the clients.",
   "Correct: High cohesion and loose coupling go hand in hand: if related functionality lives in the same building block, it needs fewer external relationships, and changes stay local.",
   "Wrong: A central all-purpose library looks like DRY but creates a dependency for every building block. Changes to it spread everywhere and couple otherwise independent parts.",
   "Correct: Dependency injection externalizes dependencies: the building block only knows an abstraction, and the concrete implementation is determined at installation or run time and can thus be replaced.",
   "Wrong: A shared database schema is convenient but couples all parties to the same structures. Every schema change affects everyone – a particularly hidden and strong form of coupling."
  ],
  "explanation": "Loose coupling comes from clearly defined interfaces, externalized dependencies such as dependency injection and high cohesion. Traps: shared schemas, central all-purpose libraries and chatty interfaces seem practical but increase coupling."
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
   "Wrong: Organisation does not change technical coupling. Even if one team maintains both building blocks, they still cannot be tested, changed or reused separately.",
   "Correct: If A defines an interface that B implements, B depends on A rather than the other way round. Both dependencies then point in the same direction and the cycle is broken – an application of the DIP.",
   "Correct: If A and B are closely related functionally, merging them is a legitimate solution. The cycle often just shows that the split was wrong; a single building block increases cohesion.",
   "Wrong: The layering rule concerns calls between layers. A cycle within one layer is still problematic, because A and B still cannot be understood and changed independently of each other.",
   "Wrong: With events the direct technical reference disappears, but the functional dependency remains. A and B still depend on the structure and meaning of each other's messages.",
   "Correct: A and B can hardly be understood, tested or reused separately. Changes propagate in both directions, and testing A always requires B as well."
  ],
  "explanation": "Cyclic dependencies make isolated testing, changing and reuse harder. Solutions are inverting a dependency via an abstraction or merging; traps: team ownership, a shared layer or events do not remove the problem."
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
   "Correct: Clients depend only on the interface contract, no longer on implementation internals such as data structures or helper classes. Changes behind the interface therefore do not affect the callers.",
   "Wrong: The static dependency on the interface remains; it is merely looser because it no longer depends on implementation details. If the interface itself changes, callers still have to be adapted.",
   "Correct: As long as the contract is honoured, the implementation can be replaced without changing clients – e.g. swapping in-memory storage for a database connection. This is the basis for extensibility and the dependency inversion principle.",
   "Correct: Behind an interface, a test double such as a mock or stub can be used in tests. This makes isolated, fast testing possible without a real database or external services and thus improves testability.",
   "Wrong: For classes that will foreseeably have only one implementation, such as simple value objects, a separate interface often adds indirection without benefit. Abstraction should be used deliberately where variability or testing needs exist.",
   "Wrong: The signature alone is not enough: semantics – what a call does, pre- and postconditions, error behaviour – are part of the contract. Without them the caller does not know how to use the interface correctly."
  ],
  "explanation": "Programming against interfaces reduces coupling to details, makes implementations replaceable and eases testing with test doubles. Traps: the dependency on the interface remains, semantics must still be known, and not every class needs its own interface."
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
  "explanation": "Dependency injection, depending only on interfaces and an adapter around the third-party library reduce coupling. It is increased by inheriting from a concrete foreign class, sharing database tables and temporal dependency on a service that must be reachable at the same time – coupling types that are often overlooked."
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
  "explanation": "SOLID comprises SRP, OCP, LSP, ISP and DIP – so Dependency Inversion, Interface Segregation and Single Responsibility belong to it. The traps are relatives: dependency injection is a technique for implementing DIP, separation of concerns resembles SRP, and the Law of Demeter is a separate principle."
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
   "Wrong: This is exactly what the OCP aims to avoid: extending an if-chain modifies proven code, and every new payment method increases the risk of side effects. OCP-compliant would be a new implementation behind an abstraction.",
   "Correct: This is the core formulation of the principle after Meyer: building blocks should be open for extension but their existing, proven code closed for modification. New behaviour is added instead of rebuilding the old.",
   "Correct: A new payment method as another implementation of an interface such as “PaymentMethod” adds behaviour without changing proven code. This is the typical implementation of the OCP through abstraction and polymorphism.",
   "Wrong: Exactly one responsibility per class is what the Single Responsibility Principle requires, not the OCP. The two principles complement each other but describe different aspects.",
   "Wrong: Exaggeration: the OCP is not a ban on changes. Bug fixes and refactorings remain possible, of course; the point is to implement new requirements by extension wherever possible."
  ],
  "explanation": "OCP: open for extension, closed for modification – new behaviour such as another payment method is added through additional implementations behind an abstraction. Traps: misreading the OCP as an absolute ban on changes, confusing it with the SRP or extending if-chains."
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
   "Wrong: Bundling all operations centrally is exactly the starting state the ISP wants to resolve. A broad interface forces clients to depend on operations they never use – changes to them still affect them.",
   "Correct: The Interface Segregation Principle requires that clients not depend on operations they do not use. So you split the interface into narrow, role-specific interfaces, e.g. “customer search” or “address change”.",
   "Wrong: Depending on abstractions rather than concrete classes describes the Dependency Inversion Principle. The interface would remain as broad as before – the actual problem of the 40 operations would remain unsolved.",
   "Wrong: The ISP slices interfaces by the needs of the clients, not by technical layers. Splitting by layers would still burden clients with many unused operations."
  ],
  "explanation": "ISP: no client should depend on operations it does not use – hence narrow, role-specific interfaces. Traps: confusion with DIP (abstractions instead of classes) and slicing by technical layers instead of client needs."
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
   "Correct: Wherever the base type is expected, every subtype must work without breaking the expected behaviour. Classic counter-example: a square as a subtype of rectangle where setting the width unexpectedly changes the height.",
   "Wrong: Syntactic compatibility is not enough. Inheriting and matching signatures only make the code compile; LSP requires that the behaviour also meets the expectations of the base type (contracts, invariants).",
   "Wrong: The opposite holds: subtypes may only weaken preconditions and only strengthen postconditions. Strengthened preconditions break callers that rely on the base type's contract.",
   "Wrong: That is the heuristic 'composition over inheritance', not LSP – and even it does not demand a general replacement. LSP governs how subtypes must behave when inheritance is used."
  ],
  "explanation": "LSP requires that subtypes can be used with conforming behaviour wherever the base type is expected. Traps: matching signatures alone are not enough, preconditions must not be strengthened, and LSP is not the same as 'composition over inheritance'."
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
   "Wrong: This describes polling: receivers actively and repeatedly ask for news. With publish/subscribe, events are delivered to subscribers via an intermediary as soon as they occur.",
   "Correct: The sender publishes events without knowing the receivers; any number of subscribers can react. New receivers can be added without changing the sender – this decouples both sides.",
   "Wrong: A single fixed receiver is point-to-point communication, e.g. via a queue. Publish/subscribe is multipoint instead: one event can reach many subscribers.",
   "Wrong: Synchronous acknowledgement would make the sender depend on the receivers again and block it. This contradicts the temporal and logical decoupling that pub/sub is meant to provide."
  ],
  "explanation": "With publish/subscribe the sender publishes events to unknown subscribers of any number; this decouples sender and receivers. Traps: confusing it with point-to-point communication, polling or synchronous acknowledgement, which makes the sender dependent again."
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
   "Wrong: Equal nodes that offer and use the same services describe the peer-to-peer pattern. In client-server, by contrast, the roles are clearly split: one requests, the other provides.",
   "Wrong: Separate machines are common but not required. The pattern describes roles, not deployment; client and server can also run in the same process or on the same machine.",
   "Wrong: An intermediary between parties that do not know each other is the broker pattern. It builds on client-server but additionally introduces a mediating component.",
   "Correct: The client requests services, the server provides them via an interface and responds to requests. Example: a browser fetching pages from a web server."
  ],
  "explanation": "Client-server separates requesting clients from providing servers via an interface. Traps: confusing it with peer-to-peer or broker, and equating roles with separate machines; the topic is R3."
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
   "Correct: Changes to base classes ripple through to all subclasses (fragile base class). Composition couples more loosely because only the public interface of the part is used.",
   "Wrong: Nothing is inherited with composition: the enclosing object explicitly delegates to its parts and offers only the operations it deliberately exposes.",
   "Wrong: Overgeneralisation: the heuristic gives composition priority but does not forbid inheritance. For genuine specialisations, inheritance remains a legitimate means.",
   "Correct: The strategy pattern uses composition: an object holds an exchangeable strategy, e.g. different pricing calculations, that can be switched at run time. With inheritance the behaviour is fixed.",
   "Wrong: The other way round: with a genuine 'is-a' relationship, inheritance remains legitimate. Composition is recommended where there is rather a 'has-a' or 'uses' relationship."
  ],
  "explanation": "Composition is more flexible and loosely coupled than inheritance and allows swapping behaviour at run time, e.g. via strategy. Traps: reading the heuristic as a general ban on inheritance, or assuming methods are inherited with composition."
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
   "Correct: State needed beyond a single request is deliberately moved out – into a database, a distributed cache or a signed token on the client. The service instance itself holds no session state.",
   "Correct: Because no instance holds state, any equivalent instance can handle any request. A load balancer can therefore distribute requests freely without binding a user to a particular instance.",
   "Wrong: User sessions also work with stateless services if the session state is held externally (e.g. Redis) or in a token (e.g. JWT). Stateless refers to the instance, not to the application as a whole.",
   "Correct: New instances can easily be added or removed without having to transfer or synchronise state. This makes horizontal scaling, e.g. via autoscaling in Kubernetes, much easier.",
   "Wrong: Sticky sessions bind a user and their state to a specific instance. They are therefore the opposite of stateless services and become necessary precisely when state is held in the instance.",
   "Correct: Since the instance holds no state, no session state is lost when it fails; another instance takes over subsequent requests. This improves availability and fault tolerance."
  ],
  "explanation": "Stateless services hold no state in the instance but keep it externally; this eases horizontal scaling and resilience. Traps: user sessions are still possible, and sticky sessions are the opposite model, not an essential characteristic."
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
   "Wrong: A central control building block looks tidy but concentrates all dependencies in one place. Almost every change hits it, it becomes a bottleneck and a “god class” – the opposite of good changeability.",
   "Correct: High cohesion means that related tasks live in the same building block. Changes to one business aspect therefore tend to stay local and do not affect many building blocks at once.",
   "Correct: The fewer dependencies there are between building blocks, the fewer paths there are for changes to propagate. Low coupling is therefore a central design principle for changeability (LG 03-06).",
   "Correct: Users depend only on the stable contract of the interface, not on the internals. The implementation can then be changed or replaced without having to adapt callers.",
   "Wrong: Broad base classes save code but couple many building blocks tightly to the base class. Every change there affects all subclasses – inheritance is one of the strongest forms of coupling.",
   "Wrong: Fewer interfaces through a few large building blocks usually means lower cohesion, because unrelated things sit together. Changes then have larger effects within the building block."
  ],
  "explanation": "Changeability is promoted by high cohesion, low coupling and stable interfaces with replaceable implementations. Traps: central control blocks, broad inheritance hierarchies and few large building blocks save effort short-term but increase coupling or reduce cohesion."
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
   "Wrong: This confuses the circuit breaker with a cache. A circuit breaker caches nothing; after repeated failures it interrupts calls to a faulty service and fails fast until the service has recovered.",
   "Correct: All three serve robust handling of errors in remote calls: timeouts limit waiting times, retries absorb transient errors, and the circuit breaker prevents cascading failures and blocked resources.",
   "Wrong: Only idempotent operations can be safely repeated. Non-idempotent calls risk e.g. duplicate bookings if the first request actually arrived and only the response was lost.",
   "Wrong: Relieving the partner is at most a side effect of the circuit breaker, not the purpose of all three mechanisms. Retries even increase the load – which is why they are combined with backoff and limits."
  ],
  "explanation": "Timeout, retry and circuit breaker serve robust handling of errors and failures in remote calls. Traps: retry is only safe for idempotent operations, the circuit breaker is not a cache, and reducing load is not their shared purpose."
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
  "explanation": "What matters is whether the caller waits for the result. Synchronous are a REST call waiting for the response, an RPC whose result is awaited, and even an internally parallel service as long as the caller blocks. Asynchronous are publish/subscribe, callbacks and a job number with later status polling. Trap: technology or internal parallelism do not decide it."
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
   "Wrong: Interchangeable algorithms behind a common interface describe the strategy pattern. It encapsulates variants of a behaviour but does not simplify access to a subsystem.",
   "Correct: The facade bundles the use of a complex subsystem behind a simple interface. Example: an 'order()' method internally coordinates inventory, payment and shipping; clients do not need to know the individual parts.",
   "Wrong: A surrogate with the same interface that controls access is the proxy. It offers the same interface as the original, whereas the facade offers a new, simplified one.",
   "Wrong: Adding new operations to an object structure without changing its classes describes the visitor pattern. It has nothing to do with simplifying access to a subsystem."
  ],
  "explanation": "A facade offers simplified, uniform access to a complex subsystem. Traps: confusing it with the proxy (same interface, access control), with strategy (interchangeable algorithms) or with visitor (new operations)."
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
   "Correct: This is the core of information hiding and encapsulation: clients depend only on the interface. As long as it remains stable, the implementation may change freely.",
   "Wrong: The size of a module depends on its responsibility, not on the number of classes. A module may contain many classes; a rigid one-class rule misses the purpose of modularization.",
   "Wrong: Exposed data structures couple clients to internals and contradict the information hiding principle. Efficiency rarely justifies this; every internal change would then affect all clients.",
   "Correct: A module has a clearly defined purpose and bundles related functionality behind a defined interface. This ensures high internal cohesion and controlled external dependencies.",
   "Correct: Decomposition is hierarchical: a building block is refined as a white box into further building blocks. A module can therefore consist of submodules, as the building block view also shows.",
   "Wrong: Modules are structural elements of the source code, artefacts are units of delivery. Several modules can end up in one artefact and vice versa; the mapping is shown in the deployment view."
  ],
  "explanation": "A module bundles related functionality behind a stable interface, hides its internals and can be decomposed hierarchically into submodules. Traps: equating it with deployable artefacts, sizing by class count and exposing data structures."
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
   "Wrong: The opposite: consistency across service boundaries is harder because each service holds its own data. Instead of a local transaction you need sagas, for example, and must live with eventual consistency.",
   "Correct: A modular monolith can be cleanly structured internally into domain modules with clear boundaries. It is still built and shipped as one unit – a counterpart to microservices with many of the benefits of modularity.",
   "Correct: One deployment, one process and no distributed failure modes make testing and operation much simpler. Network failures, version compatibility between services and distributed tracing are not an issue.",
   "Correct: Independent releases and targeted scaling of individual services are the main benefit. It is paid for with more operational effort, monitoring across many services and the network as an extra source of failure.",
   "Wrong: Microservices move complexity into operations, communication and data management instead of eliminating it. The individual service becomes simpler, but the overall system tends to become more complex."
  ],
  "explanation": "Microservices bring independent deployments but more operational complexity and harder data consistency; a modular monolith offers clear boundaries with one deployment. Trap: microservices do not reduce overall complexity, they shift it."
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
   "Wrong: Proven does not mean universal: every pattern solves a problem in a specific context. If the context does not fit, it brings only its drawbacks and complexity.",
   "Correct: Patterns are ways to achieve certain qualities in a given context. Selection therefore depends on the system's prioritised quality goals and constraints.",
   "Correct: Easily overlooked: besides general pattern catalogues, the curriculum mentions domain-specific sources, e.g. for embedded systems or integration. They often provide better-suited alternatives.",
   "Wrong: Every pattern brings its own drawbacks and complexity. Combining many patterns is not an end in itself and tends to make a design harder to understand rather than more robust.",
   "Correct: A name such as \"pipes and filters\" or \"layers\" conveys a whole solution idea with its pros and cons. This eases communication and documentation in the team.",
   "Correct: Patterns have trade-offs: microservices improve independent deployment, for example, but worsen performance and operational effort. Chosen wrongly, the drawbacks prevail."
  ],
  "explanation": "Patterns are chosen to fit quality goals and context, including from domain-specific sources; they create a shared vocabulary but have trade-offs. Traps: reading \"proven\" or \"many patterns combined\" as a guarantee of quality."
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
   "Correct: A bounded context delimits a domain model within which a consistent, shared language applies (ubiquitous language). Terms have one unambiguous meaning there, shared by domain experts and developers.",
   "Wrong: Quite the opposite: each context may model terms differently. “Customer” has different attributes in sales than in accounting or shipping – the boundary is what makes these differences manageable.",
   "Wrong: This is possible but not mandatory. A modular monolith can also be cut along bounded contexts, and one context can consist of several services. A bounded context is a domain concept, not a deployment concept.",
   "Wrong: This confuses types of decomposition: layers are a technical cut (UI, logic, data), bounded contexts a domain cut. A context typically spans parts of several layers.",
   "Correct: The cut follows the domain, not the technology. A context such as “Ordering” can comprise its own UI, logic and data parts and thus runs across technical layers (vertical slice)."
  ],
  "explanation": "Bounded contexts delimit domain models with their own language and run across technical layers. Traps: forcing uniform terms everywhere, equating a bounded context with a microservice, or confusing domain contexts with technical layers (R3)."
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
   "Wrong: Closely related but not identical: information hiding is the principle of concealing volatile design decisions, not just data. Encapsulation is the technical mechanism that restricts access.",
   "Correct: Information hiding is the principle, encapsulation the means: visibility rules and interfaces prevent users from depending on hidden details. This is how the principle is implemented concretely.",
   "Wrong: Blanket getters and setters for all fields expose the internal structure after all. Formally everything is private, but in practice users depend on the representation – real encapsulation offers meaningful operations.",
   "Correct: With encapsulation the state is not directly accessible from outside, only via the interface. This lets the building block, for example, check invariants and prevent inconsistencies.",
   "Correct: As long as the interface remains the same, users do not notice a changed internal representation – for example switching from a list to a map. That is precisely the benefit of encapsulation."
  ],
  "explanation": "Encapsulation restricts access to the state to the interface and is the means of implementing information hiding; the representation therefore stays changeable. Traps: getters/setters for everything do not count as encapsulation, and the two terms are not identical."
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
   "Wrong: Strategy makes algorithms interchangeable behind a common interface, e.g. different calculation methods. The incompatibility between expected and offered interface would remain.",
   "Wrong: A proxy offers the same interface as the original and controls access to it, e.g. for caching, access protection or remote calls. It does not adapt an interface – which is exactly what is needed here.",
   "Wrong: A facade offers a simplified interface to a complex subsystem. But it does not specifically resolve incompatibility with an interface the client already expects – that is what the adapter is for.",
   "Correct: The adapter translates between the interface your system expects and the one the payment provider offers, without changing either. At the same time it encapsulates the external dependency in one place."
  ],
  "explanation": "Incompatible interfaces are resolved by the adapter, which translates between expected and existing interface. Traps: the facade simplifies a subsystem, the proxy keeps the interface unchanged, and Strategy swaps algorithms."
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
   "Correct: A building block with a clear purpose and a clean interface also fits into other contexts. Reusability is a goal of modularisation and follows from a good cut, not from generalising afterwards.",
   "Wrong: Modularisation tends to create more calls across interfaces, not fewer. Performance is a trade-off to be weighed, but not a goal of modularisation.",
   "Wrong: Over-generalisation increases complexity and builds for an imagined future (YAGNI). Reusability comes from a clear cut along responsibilities, not from maximum genericity.",
   "Correct: Clearly delimited modules with defined interfaces allow separate, parallel work by several teams. Only the interface contract needs to be agreed, not every internal detail.",
   "Correct: If each module hides its internals behind an interface (information hiding), a change usually has only local effects. This is a core goal of modularisation and improves maintainability."
  ],
  "explanation": "Modularisation aims at locally confined changes, parallel development and reusability through clear cuts. Traps: maximum genericity (YAGNI) and fewer calls sound like quality but are not goals – modularisation tends to create more interface calls."
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
   "Wrong: Reuse avoids duplication but does not reduce coupling. On the contrary: all 40 clients now depend on the same building block, and changes to it affect all of them.",
   "Correct: Many dependents cannot cope with frequent contract changes. A stable, versioned interface allows evolution without forcing all clients to adapt at the same time.",
   "Wrong: Widely used, stable building blocks should rather be abstract (the stable abstractions idea). They can then be extended without being changed; a concrete implementation would be hard to adapt.",
   "Wrong: Generalizing without concrete need violates YAGNI. One often guesses the wrong variation points and increases complexity without future users benefiting.",
   "Correct: To serve many clients, a building block needs configuration, variants and extension points. This generality costs complexity – a well-known price of extensive reuse.",
   "Correct: Every client is an incoming (afferent) dependency. With 40 clients the afferent coupling is high, which makes the library stable in the sense of hard to change."
  ],
  "explanation": "Extensive reuse increases afferent coupling and usually generality and complexity; it requires stable, versioned interfaces. Traps: \"fewer duplicates = less coupling\" confuses DRY with decoupling, and speculative generalization violates YAGNI."
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
  "explanation": "A frequently changing building block with many afferent dependencies spreads changes widely (harms). Exposing internals violates information hiding (harms), and mutual direct calls form a cycle (harms). A clear purpose per building block means high cohesion, and testable domain logic follows from separation of concerns (helps). Surprisingly, keeping coincidentally similar code separate helps maintainability, because DRY is about the same knowledge."
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
   "Correct: The domain-based split follows the problem space and usually outlives any technology. If the technology is aligned to it and kept separate, the domain logic stays testable and the technology replaceable.",
   "Wrong: Technology-first forces the domain into technical boundaries unrelated to the problem. Domain changes, for example to tariff calculation, then spread across many building blocks.",
   "Wrong: Domain components cut across layers: 'contract' needs UI, logic and persistence parts. Assigning each domain component to exactly one layer tears the domain apart or mixes the two structurings.",
   "Wrong: A grown database schema often reflects historical and technical decisions. Splitting by tables sounds domain-driven but yields data-driven rather than responsibility-oriented building blocks."
  ],
  "explanation": "Domain and technology are kept separate, the split follows the domain and technology serves it. Traps: technology-first, equating domain components with layers, and splitting by tables, which only sounds domain-driven."
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
   "Wrong: Miller makes no statement about interface operations. His observation concerns the limited capacity of short-term memory; interfaces are designed by functional purpose.",
   "Correct: People can grasp only about 7±2 chunks of information at once. Each decomposition level should therefore contain a manageable number of elements; if there are more, group them hierarchically.",
   "Wrong: Here the number is transferred to team sizes. Miller refers to chunks of information that can be grasped simultaneously, not to organisational questions such as design team size.",
   "Wrong: It is not an upper limit for the whole system but a rule of thumb per level of presentation. Organised hierarchically, a system can contain many modules and still be understandable."
  ],
  "explanation": "7±2 is a cognitive rule of thumb per level of presentation or decomposition and thus an argument for hierarchical decomposition. Trap: reading the number as a hard limit for modules in the whole system, team sizes or interface operations."
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
   "Wrong: Early feedback in particular, e.g. through prototypes, spikes or reviews, reveals wrong assumptions while corrections are still cheap. Waiting until the design is stable may cement errors that become expensive later.",
   "Correct: Design ideas raise new questions about the requirements, and clarified requirements change the design. Both proceed iteratively and intertwined – the curriculum explicitly stresses this interplay.",
   "Wrong: New insights without changed requirements, e.g. from prototypes, load tests or experience with a technology, can also overturn a decision. Decisions rest on assumptions, and those can prove wrong.",
   "Wrong: A reference model or reference architecture is a useful starting point. Whether it fits the specific requirements and constraints must still be checked and weighed by yourself."
  ],
  "explanation": "Architecture design is iterative: design and requirements influence each other, feedback comes early, and new insights are a legitimate reason for revisions. Traps: waiting for a stable design before seeking feedback and assuming a reference model replaces your own trade-offs."
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
   "Wrong: Without dependencies, building blocks could not cooperate and the system would deliver no overall function. The ideal is appropriate coupling, not none at all.",
   "Correct: Without dependencies there would be no cooperation. The goal is therefore coupling that is as loose as possible and as tight as functionally necessary – sufficient for the function and chosen deliberately.",
   "Wrong: Related but different: coupling concerns relationships between building blocks, cohesion the togetherness within a building block. High cohesion does favour loose coupling, but it is a separate criterion.",
   "Wrong: Distribution across several servers does not change the logical dependency. It even adds new kinds of coupling, e.g. via network, availability and data formats – a “distributed monolith” is tightly coupled.",
   "Correct: A building block with few dependencies is easy to test in isolation, because those few dependencies can be replaced by test doubles such as mocks or stubs."
  ],
  "explanation": "Loose coupling means functionally sufficient, not zero: as loose as possible, as tight as necessary. It makes changes and isolated testing easier. Traps: confusing it with cohesion or assuming physical distribution automatically decouples."
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
   "Wrong: With delegation behind an interface, the caller knows only the contract; the implementation remains replaceable. This is rather loose coupling and is often preferred over inheritance for exactly that reason (composition over inheritance).",
   "Wrong: With asynchronous events, the sender does not know the receiver and does not wait for it. Only the format and meaning of the events are shared – a very loose form of coupling.",
   "Correct: Implementation inheritance binds the subclass to internals of the base class, such as protected fields or the order of method calls. Changes to the base can silently break subclasses (fragile base class).",
   "Wrong: A narrow, stable interface requires little knowledge of the parties about each other. That is the ideal of loose coupling: changes behind the interface do not affect the caller."
  ],
  "explanation": "Implementation inheritance from a concrete base class couples most strongly because it binds to the base's internals. Trap: inheritance looks cleanly object-oriented but is tighter than delegation, events or calls via narrow interfaces."
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
   "Wrong: The broker decouples in time and technically, but not in terms of domain. Format and meaning of the message remain a shared dependency: a receiver processing orders still needs the expected order data.",
   "Wrong: If the sender changes the message format, the receiver still breaks. The broker only forwards messages and does not translate them; the format dependency still exists between sender and receiver.",
   "Correct: Whoever expects certain data or reactions still depends on the other side – regardless of whether the dependency is resolved at compile time or at runtime. Dynamic coupling changes the mechanism, not the domain relationship.",
   "Correct: The dependency only arises at runtime via messages, topics or configuration and does not show up in imports. Static analysis tools therefore easily miss it; it has to be documented explicitly.",
   "Wrong: Missing imports only remove the static view of the dependency. Being coupled dynamically instead of statically does not necessarily reduce coupling; it often just makes it less visible."
  ],
  "explanation": "Dynamic coupling via a broker moves dependencies to runtime and hides them from static analysis instead of necessarily reducing them. Traps: 'event-based = decoupled' is only true in time and technically; domain and format dependencies remain."
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
   "Wrong: Afferent and efferent are mixed up: A uses no other building block and thus has no outgoing (efferent) dependencies. It is many outgoing dependencies that make a block unstable, not many clients.",
   "Wrong: \"Stable\" is a statement about coupling here, not about quality. The metric says nothing about maturity or freedom from defects; a widely used block can still be full of bugs.",
   "Wrong: Widely used, stable building blocks should rather be abstract so they can be extended without being changed. A concrete implementation makes necessary adaptations harder with twelve clients.",
   "Correct: Twelve incoming (afferent) dependencies mean that every change to A may affect twelve clients. \"Stable\" here means hard to change, which is why changes to A are risky."
  ],
  "explanation": "Afferent means incoming: many clients make a building block stable in the sense of hard to change, which is why it should rather be abstract. Traps: mixing up afferent and efferent, or reading \"stable\" as \"mature and defect-free\"."
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
   "Correct: The curriculum explicitly names energy efficiency as a possible subject of a cross-cutting concept, alongside persistence, communication, GUI, error handling and concurrency. Precisely because it is easily overlooked, it is a popular exam item.",
   "Wrong: A concept pays off as soon as several or many building blocks should solve a topic uniformly. Waiting until really all are affected leads to sprawl with many different individual solutions.",
   "Wrong: Cross-cutting concepts should be defined early. Later, the building blocks already contain inconsistent individual solutions, and unifying them afterwards becomes expensive.",
   "Correct: The curriculum states that cross-cutting concepts can be reused across system boundaries. Example: a company-wide logging or security concept applies to several systems.",
   "Wrong: A single business task does not become a cross-cutting topic just because its result is shown in several places. Discount calculation belongs in a domain building block; cross-cutting is a technical topic such as error handling.",
   "Correct: Cross-cutting concepts are interrelated and influence each other. Example: security, error handling and logging – what may appear in an error message or log without revealing confidential data?"
  ],
  "explanation": "Cross-cutting concepts solve topics affecting many building blocks uniformly – including energy efficiency; they influence each other and can be reused across systems. Traps: defining them too late and classifying single business tasks as cross-cutting."
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
   "Wrong: The other way round: ACID offers the stricter guarantees of atomicity, consistency, isolation and durability. BASE deliberately relaxes them in favour of availability and scalability.",
   "Correct: BASE (basically available, soft state, eventually consistent) accepts temporarily differing reads between replicas in order to stay available. For a product catalogue this is usually acceptable.",
   "Wrong: Eventual consistency means delayed, not lost consistency: replicas converge later. Written data is not lost, it is just not visible everywhere for a short time.",
   "Wrong: Swapped: ACID is typical of relational databases, BASE is common for distributed NoSQL stores. Choosing BASE therefore points towards NoSQL rather than away from it."
  ],
  "explanation": "ACID stands for strict transactional consistency, BASE for availability with eventual consistency of replicas. Traps: interpreting \"eventually consistent\" as data loss, or swapping the typical mapping relational/ACID and NoSQL/BASE."
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
   "Correct: When a network partition occurs, a distributed system cannot keep all nodes consistent and answer every request at the same time. You have to choose: reject requests (consistency) or respond with possibly stale data (availability).",
   "Wrong: The popular formula “pick two out of three” is misleading. The trade-off is only forced when a partition occurs; without a partition, consistency and availability can be achieved together.",
   "Wrong: Redundancy does not remove the limit: during a partition, the separated parts cannot coordinate, no matter how many replicas exist. More nodes can even create more opportunities for partitions.",
   "Wrong: CAP stands for consistency, availability and partition tolerance. Cost and performance are not part of it; the trade-off between latency and consistency is described rather by the PACELC extension."
  ],
  "explanation": "The CAP theorem forces a choice between consistency and availability during a network partition. Traps: the simplified “always two out of three” – without a partition there is no such constraint –, the belief that redundancy solves the problem, and wrong meanings of the letters (R3)."
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
   "Wrong: Layer bridging skips an intermediate layer downwards, here the business layer. Callbacks from bottom to top are a different mechanism for enabling upward calls without a direct dependency.",
   "Wrong: Rather the opposite: the data access layer becomes harder to replace because it is now used by two layers. The business layer is bypassed; its replaceability gains nothing from that.",
   "Correct: Relaxed layering permits skipping layers downwards. The UI then depends on two layers, which increases dependencies and should be decided and documented deliberately, e.g. for read-only access.",
   "Wrong: The relaxed variant is still a layered architecture. Upward calls remain forbidden; skipping downwards is precisely what distinguishes relaxed from strict layering."
  ],
  "explanation": "Layer bridging = skipping an intermediate layer downwards; permitted in relaxed layering but with additional dependencies. Traps: confusing it with upward callbacks and assuming the architecture is then no longer layered."
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
   "Wrong: That a layer may use all lower layers describes relaxed (open) layering. In strict layering, skipping is explicitly forbidden in order to keep individual layers replaceable.",
   "Correct: Building blocks of one layer should be at a comparable level of abstraction, e.g. business logic in the domain layer and technical details below. This gives each layer a clear, understandable role.",
   "Correct: That is the core of the strict variant: each layer uses only the one directly below, without skipping layers. This allows a layer to be replaced without adapting higher layers.",
   "Wrong: A cycle does not disappear through redistribution: the mutual dependency remains and one building block would then have to call a higher layer – a forbidden upward call. Cycles are resolved e.g. via dependency inversion.",
   "Wrong: Layers are logical structures; whether they run in one or several processes is a question of distribution (tiers). Strict layering does not require physical separation.",
   "Correct: Upward dependencies would create cycles and dissolve the layering. Notifications upwards therefore use callbacks or events whose interface is defined by the lower layer."
  ],
  "explanation": "Strictly layered means: dependencies only downwards, only to the layer directly below, similar abstraction level within a layer. Traps: using all lower layers is the relaxed variant, layers are not tiers, and redistribution does not resolve cycles."
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
   "Wrong: Layers are logical, not physical. Assigning them to servers (tiers) is a separate deployment decision; seven layers can easily run in a single process.",
   "Wrong: Quite the opposite: upper layers only use the interface of the layer directly below. Hiding the internals is precisely the advantage of strict layering.",
   "Correct: With strict layering every layer has to forward calls, even when it adds nothing. With seven layers this costs noticeable runtime and produces a lot of uniform pass-through code.",
   "Wrong: Layers can be combined with domain-oriented cuts, for example separate layers per domain module or vertical slices. Deep layering therefore does not prevent a domain-oriented cut."
  ],
  "explanation": "Deep strict layering costs latency through pass-through and produces a lot of forwarding code, even when layers add nothing. Traps: equating layers with servers (tiers) and overlooking that upper layers precisely do not need to know internals."
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
   "Correct: Active filters drive data transport themselves: they pull data from the incoming pipe or push results onwards. Passive filters, in contrast, are fed or read from outside.",
   "Wrong: Concurrency is not tied to this distinction. Both active and passive filters can run sequentially or concurrently; active/passive only concerns what drives the data flow.",
   "Wrong: Both kinds of filters process or transform data – that is the purpose of every filter. The distinction is not about processing but about who drives the data flow.",
   "Wrong: Filters fundamentally do not know each other; they are only connected via pipes. This makes them replaceable and recombinable – regardless of whether they are active or passive."
  ],
  "explanation": "In pipes and filters, active or passive describes who drives the data flow: active filters pull or push data themselves, passive ones are served. Traps: confusing it with transformation, parallelism or knowledge of neighbouring filters – filters never know each other."
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
   "Correct: Because filters are only connected via data streams, each stage can work as soon as data arrives. While one record is being enriched, the next can already be cleaned – this enables concurrency.",
   "Correct: Filters do not know each other and are only connected via pipes with an agreed data format. One step, such as cleaning, can be replaced without changing the others.",
   "Wrong: Interactive processes with queries and branching fit poorly with a directed data stream. Pipes and filters suits batch and stream processing like this import, not dialogues.",
   "Wrong: Pipes and filters specifically works without shared state; that is both its strength and its limitation. Shared state would couple the filters and destroy their replaceability and concurrency.",
   "Correct: A filter does not know the history of the data. Reporting errors meaningfully, tracing faulty records or rolling back partial results is therefore laborious."
  ],
  "explanation": "Pipes and filters offers replaceable stages that work concurrently but has demanding error handling and no shared state. Traps: assuming it suits interactive processes and thinking shared state is an advantage."
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
   "Correct: Microservices are cut along domain lines. Bounded contexts from domain-driven design provide sound boundaries within which terms and models are unambiguous, e.g. ordering, shipping, payment.",
   "Wrong: Cutting too finely leads to \"nano-services\". Every business process then needs many services to cooperate over the network, greatly increasing latency, communication and operational effort.",
   "Wrong: A technical cut into UI, logic and DB services spreads every functional change across several services. This contradicts the domain-oriented cut and prevents independent releases.",
   "Correct: According to the curriculum, owning their data is part of microservices. A shared database would couple the services via the schema, so they could no longer be changed independently.",
   "Correct: Independent deployability is a core characteristic of microservices. Teams can change and ship their service without coordinating a joint release with everyone else.",
   "Wrong: Cutting by table yields data-driven services without functional responsibility. They have to talk to each other constantly for every process; coupling is high and cohesion low."
  ],
  "explanation": "Microservices are cut along domain lines, e.g. bounded contexts, are independently deployable and manage their own data. Traps: cutting by database tables, by technical layers or by single operations."
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
   "Correct: With separate data storage per service, there are no shared database transactions across service boundaries. Patterns such as eventual consistency, sagas or compensations are needed to still ensure business consistency.",
   "Correct: Instead of one deployment, many independent units have to be built, rolled out, monitored and operated. This requires automation, central logging, monitoring and tracing – i.e. considerably more operational maturity.",
   "Wrong: The domain complexity stays the same no matter how the system is cut. Microservices rather shift complexity into operations, communication and data consistency instead of reducing it.",
   "Wrong: Shared libraries remain possible but are a conscious coupling decision. For technical cross-cutting functions this is often sensible; shared domain logic, on the other hand, hinders independent deployments – but there is no ban.",
   "Correct: Calls over the network bring latency, timeouts and partial failures that do not occur with local method calls. Error handling such as retries, timeouts or circuit breakers therefore has to be planned for."
  ],
  "explanation": "Microservices bring typical challenges in data consistency, operations and network communication. Traps: they do not reduce domain complexity but shift complexity elsewhere, and shared libraries are not forbidden but a conscious coupling decision."
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
   "Wrong: Internal formats such as the persistence schema are each service's own business and should remain freely selectable. At most the interface contract is standardised – otherwise the services are coupled via their internals.",
   "Correct: Loosely coupled via technology-neutral interfaces such as HTTP/REST or messaging, the services remain independently deployable and free in their internal technology choice. This is a core characteristic of the microservice style.",
   "Wrong: Lots of synchronous communication creates temporal coupling and failure chains: if one service fails, its callers block. Microservices therefore often accept eventual consistency instead of enforcing strong consistency.",
   "Wrong: A shared database seemingly solves consistency problems but couples the services tightly via the schema. Every schema change affects all of them, and each service loses its own data ownership."
  ],
  "explanation": "Microservices exchange data loosely coupled via technology-neutral interfaces and keep their own data storage. Traps: a shared database and uniform internal formats seem practical but destroy independence; heavy synchronous communication creates failure chains."
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
  "explanation": "Pipes & filters: steps easy to parallelise, rather unsuitable for interactive dialogues, uniform error handling difficult. Layers: domain changes cut through several levels, passing calls through costs latency, the relaxed variant allows access to lower levels. Trap: latency sounds like pipelines but here stems from passing calls through."
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
  "explanation": "Cross-cutting concepts govern topics that affect many building blocks uniformly: concurrency, GUI design rules and energy efficiency are explicitly on the curriculum's list. CSV export, credit check and discount calculation are individual business functions. Trap: the discount calculation does not become a cross-cutting concept just because its result appears in several places."
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
   "Wrong: Especially for uncertain decisions like a new messaging technology, feedback belongs at the start. Errors discovered only after the overall design are expensive because many further decisions already build on them.",
   "Correct: A throwaway prototype may deliberately answer just one question – here: does the technology handle the load? – and is then discarded. This quickly yields reliable facts instead of relying on vendor claims.",
   "Wrong: A prototype answers a single question under simplified conditions. Evaluating the overall architecture against all quality goals, e.g. via scenarios or ATAM, is still necessary.",
   "Wrong: A throwaway prototype is optimised for quick insight, not for maintainability or robustness. Making it the skeleton of production code carries deliberate shortcuts into the product.",
   "Correct: Each iteration delivers facts instead of assumptions, e.g. measurements or user feedback. According to the curriculum, short iterations reduce risk and improve predictions about effort and feasibility."
  ],
  "explanation": "Short feedback loops check uncertain assumptions early, e.g. with a throwaway prototype, and increase predictability. Traps: gathering feedback only at the end, taking throwaway prototypes into production, or treating them as a substitute for architecture evaluation."
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
   "Wrong: Fitness functions complement reviews but do not replace them. Hard-to-measure qualities, trade-offs and new decisions still require human assessment, for example in a scenario-based review.",
   "Wrong: The other way round: fitness functions are derived from existing quality goals. Only once it is clear what matters (e.g. response time under 200 ms) can an automated check be built for it.",
   "Correct: Fitness functions continuously check, for example in the build pipeline, whether important quality characteristics are preserved – such as dependency rules or load tests. The architecture can thus evolve step by step without eroding unnoticed.",
   "Wrong: The defining feature is precisely automation and continuous execution. A manual checklist before the release would be a review aid and catches degradations only late."
  ],
  "explanation": "Evolutionary architecture evolves step by step and safeguards important qualities with automated fitness functions on every change (an R3 topic). Traps: fitness functions do not replace reviews, follow from quality goals rather than defining them and are not a manual checklist."
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
   "Wrong: Small projects also have uncertain decisions, such as a new library or an unfamiliar interface. A vertical slice is often possible with little effort and reduces risk early.",
   "Correct: Feedback is a risk management tool: the most uncertain things are checked first, for example with a prototype or vertical slice. If a decision proves wrong, changing course early is still cheap.",
   "Wrong: Unstable, uncertain designs in particular need early feedback. If one waits until the design is stable, wrong decisions are already built in and corrections become much more expensive.",
   "Wrong: Implementing well-understood parts first produces visible progress quickly but pushes the risks to the end. There, surprises are most expensive because a lot already builds on them.",
   "Correct: The curriculum calls for obtaining feedback systematically: planned reviews, demos, prototypes and measurements. Random feedback reveals risks only patchily and too late."
  ],
  "explanation": "Architectural decisions are ordered by risk: the most uncertain first, secured by early and systematically organized feedback. Traps: \"easy things first\" seems efficient but pushes expensive surprises to the end, and vertical slices pay off in small projects too."
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
   "Wrong: If the interface maps the internal data structures 1:1, users are coupled to the implementation. Every internal change then affects all callers, and the building block is no longer replaceable.",
   "Wrong: Besides the signatures, the contract includes semantics, pre- and postconditions and error behaviour. Example: what happens on a duplicate payment or insufficient funds?",
   "Correct: A good interface makes incorrect use hard, for instance through clear types such as 'amount with currency' instead of a bare number, and unambiguous semantics. The curriculum names this property explicitly.",
   "Correct: Users should be able to achieve everything they need for their task through the interface. This is measured against their actual needs, not against every conceivable case.",
   "Wrong: Completeness refers to the users' needs, not to stockpiling. Operations for hypothetical future users make the interface unnecessarily large and harder to learn and maintain (YAGNI).",
   "Correct: The curriculum names easy to learn, to use and to extend as desirable properties of interfaces. An understandable interface reduces onboarding effort and misuse."
  ],
  "explanation": "Desirable interfaces are easy to learn, use and extend, hard to misuse and functionally complete from the users' perspective. Traps: confusing 'complete' with stockpiled operations and reducing the contract to signatures."
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
   "Correct: Fine-grained operations can be combined flexibly but lead to many round trips with network latency for remote calls. Coarse-grained operations bundle data efficiently but are more rigid.",
   "Wrong: Many small operations often tie the caller to the provider's processes and sequences. It must know which calls are needed in which order; that is stronger rather than looser coupling.",
   "Wrong: For local calls within the same process, the overhead per call is low. Remotely, each call costs latency and serialisation, so granularity matters much more there.",
   "Wrong: Granularity depends on usage and communication path. Exposing internal data structures couples users to the implementation and violates information hiding."
  ],
  "explanation": "Fine-grained interfaces are flexible but expensive remotely because of many round trips; coarse-grained ones are efficient but more rigid. Traps: judging granularity regardless of the communication path, assuming fine-grained always means loose coupling, or exposing internals."
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
   "Correct: According to the curriculum, external interfaces have more and often unknown users who cannot be updated in a coordinated way. They therefore need more stability, formality and versioning than internal interfaces.",
   "Wrong: Clients expecting the old field name break when it is renamed. This is an incompatible change and requires a new version or a transition period during which both names are provided.",
   "Correct: This is Postel's robustness principle, which the curriculum mentions under “expect errors”: send strictly according to the specification yourself, but be tolerant of unexpected deviations such as additional fields when receiving.",
   "Wrong: The robustness principle allows tolerance towards harmless deviations such as unknown fields. But it does not replace validation: unchecked input endangers correctness and security.",
   "Wrong: Internal interfaces, e.g. between teams, also need versioning if their users cannot move along at the same time. What matters is whether users can be coordinated, not just the internal/external boundary.",
   "Correct: Existing clients can ignore a new optional field, especially if they receive tolerantly. Additive changes therefore usually do not break them and are the preferred way to evolve interfaces."
  ],
  "explanation": "External interfaces are evolved additively or with versioning, following the robustness principle “be strict when sending, tolerant when receiving”. Traps: confusing tolerance with missing validation, considering renamings compatible, and restricting versioning to external interfaces."
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
   "Wrong: Redundant app instances help little if they all depend on a single database: it remains a single point of failure. For high availability, shared components such as the database or network must be considered too.",
   "Correct: Every measure has a price: redundancy increases infrastructure costs, operational effort and complexity, e.g. for data synchronisation. These costs must be weighed consciously against the benefit of higher availability.",
   "Wrong: Tests uncover defects but do not make the system fault-tolerant. Availability is a structural property that results from design decisions such as redundancy; tests merely verify it.",
   "Wrong: A style alone does not deliver quality: without timeouts, circuit breakers or bulkheads, failures can even propagate through service calls. Fault isolation must be designed deliberately.",
   "Correct: Architecture decisions should contribute deliberately to the quality goal. Redundancy and failover are typical tactics for availability: if one instance fails, another takes over."
  ],
  "explanation": "Availability results from deliberately chosen tactics such as redundancy and failover, whose costs and trade-offs are weighed consciously. Traps: a style like microservices or tests alone do not deliver availability, and shared components like the database remain single points of failure."
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
   "Correct: New team members find their way faster with good architecture documentation. Maintenance and further development can also orient themselves on existing structures and concepts instead of reconstructing everything from the code.",
   "Wrong: Prescribing down to class level would be detailed design. Architecture documentation focuses on fundamental structures, interfaces and decisions and leaves the team room for implementation.",
   "Wrong: Rejected alternatives and rationales in particular cannot be reconstructed from the code. They make documentation valuable because they prevent the same options from being rediscussed or chosen carelessly later.",
   "Wrong: Documentation describes the intended solution approaches but does not prove that they work. Evidence that quality requirements are met comes from architecture evaluation, tests and measurements.",
   "Correct: Documentation is above all a means of communication: it gives all stakeholders a common basis and makes differing ideas and misunderstandings visible early.",
   "Correct: The code shows what was built, but not why. Documented decisions with rationale, e.g. as ADRs, prevent deliberate decisions from being unknowingly reversed later."
  ],
  "explanation": "Architecture documentation serves communication, traceability of decisions and onboarding. Traps: it is neither proof of quality nor detailed design down to class level, and rejected alternatives explicitly belong in it."
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
   "Wrong: A standard for terms such as stakeholder, concern and viewpoint is ISO/IEC/IEEE 42010. arc42 is not a standard but a freely available, pragmatic template for structuring architecture documentation.",
   "Wrong: Four zoom levels from context via container and component to code describe the C4 model. arc42 is a structure of sections, not a zoom-level model; the two can, however, be combined well.",
   "Correct: arc42 provides twelve sections, from introduction and goals via context, building block view and decisions to the glossary. Pragmatically, you only fill in the sections that are relevant to the system at hand.",
   "Wrong: A method for deriving decisions from quality goals would be a design method. arc42 says where to record decisions (section 9), not how to arrive at them."
  ],
  "explanation": "arc42 is a pragmatic template with twelve sections for structuring architecture documentation. Traps: confusing it with the ISO/IEC/IEEE 42010 standard, with the four zoom levels of C4 or with a design method."
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
   "Correct: The context view looks at the system from outside, surrounded by users and external systems. Internals stay hidden; the focus is on the interfaces to the environment.",
   "Correct: If needed, one distinguishes the business context (who exchanges which information?) and the technical context (via which channels and protocols?). Both variants are covered by the curriculum.",
   "Wrong: Execution nodes and the mapping of software to infrastructure belong to the deployment view. The context view shows neighbours and interfaces, not their infrastructure.",
   "Wrong: Too narrow: the business context – which information is exchanged with whom – is also part of it and is often the more important representation for business stakeholders.",
   "Wrong: Internal subsystems belong in the building block view. The context view stays at black-box level and does not show which internal block serves an external interface.",
   "Correct: The clear system boundary clarifies early which responsibility lies with the system and which with its neighbours, for instance whether payments are handled in-house or delegated to a provider."
  ],
  "explanation": "The context view shows the system as a black box with neighbours and interfaces, business and/or technical, and thus clarifies the system boundary. Traps: internal subsystems belong in the building block view, node mapping in the deployment view, and the business context must not be omitted."
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
   "Correct: A building block is first described as a black box with responsibility and interfaces and then opened as a white box. Its parts are again black boxes that can be refined further if needed – this creates the hierarchy of levels.",
   "Correct: The building block view describes which software building blocks the system consists of and how they are structurally related. It is static: behaviour and interaction at runtime are shown by the runtime view.",
   "Wrong: Mapping software building blocks or artefacts to execution nodes is the subject of the deployment view. The building block view deliberately abstracts from the infrastructure the blocks run on.",
   "Correct: Only responsibility and provided and required interfaces make the decomposition understandable. A mere box diagram without this information says little about how tasks are distributed.",
   "Wrong: Black box and white box distinguish the level of detail within the building block view, not two different views. The runtime view is a separate view that shows dynamic interactions between building blocks."
  ],
  "explanation": "The building block view shows the static decomposition, refined hierarchically from black box to white box, with responsibilities and interfaces. Traps: black/white box is a matter of detail, not a view boundary, and mapping to nodes belongs to the deployment view."
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
   "Wrong: That is detailed design inside one building block. The runtime view instead shows the interaction of several building blocks; internal algorithms are usually not architecturally relevant for it.",
   "Correct: Besides business processes, system start-up, error handling or operational procedures are often architecturally relevant. That is where dependencies show up that remain hidden in the static view.",
   "Wrong: Overgeneralisation: you deliberately select a few architecturally relevant scenarios. Documenting all use cases completely would be disproportionately costly and hard to maintain.",
   "Wrong: Which building blocks are packaged in which artefact and run on which node is described by the deployment view. The runtime view shows dynamic behaviour, not the mapping to infrastructure.",
   "Correct: Little known: the curriculum explicitly mentions state models for the runtime view. They show, for example, which states an order passes through and which events trigger transitions.",
   "Correct: The runtime view shows, using selected architecturally relevant scenarios, how building blocks cooperate at run time, e.g. as sequence or activity diagrams."
  ],
  "explanation": "The runtime view shows the interaction of building blocks in selected scenarios, including start-up, error cases and operation, as well as state models. Traps: aiming for completeness across all use cases, detailed algorithms, or mapping to artefacts (deployment view)."
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
   "Wrong: The order of interactions at runtime is shown in the runtime view, e.g. as a sequence or activity diagram. The deployment view is static and describes infrastructure, not flows.",
   "Correct: The deployment view shows the technical infrastructure with nodes (e.g. servers, containers) and channels and maps the software onto it via deployment artefacts. This makes visible what runs where.",
   "Wrong: The mapping of teams to building blocks is organisational information. It may appear elsewhere in the documentation, but it does not belong in the deployment view, which describes technical infrastructure.",
   "Wrong: External systems and the channels to them are shown in the technical context of the context view. The deployment view, by contrast, describes your own infrastructure and what runs on it."
  ],
  "explanation": "The deployment view shows nodes, channels and the mapping of deployment artefacts onto them. Traps: channels to neighbouring systems belong in the technical context, flows in the runtime view, and team assignments are organisational, not part of the deployment view."
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
   "Wrong: A quality model with characteristics such as maintainability, reliability or security is defined by ISO/IEC 25010. The two standards are easily confused because of their similar numbers.",
   "Correct: ISO/IEC/IEEE 42010 provides the conceptual framework for architecture descriptions: stakeholders have concerns, viewpoints define how views address them. A description “according to 42010” uses these terms consistently.",
   "Wrong: The template with twelve sections is arc42, a freely available template. ISO 42010 prescribes no concrete structure but only describes which elements an architecture description should contain.",
   "Wrong: 42010 does not prescribe fixed mandatory views. Instead, the standard requires views to be chosen to fit the stakeholders' concerns and to be justified via viewpoints."
  ],
  "explanation": "ISO/IEC/IEEE 42010 standardises the terms of architecture description (stakeholders, concerns, viewpoints, views) but no template and no mandatory views; the topic is R3. Traps: confusion with arc42 (template) or ISO 25010 (quality model)."
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
   "Wrong: The activity diagram shows actions, branches and concurrency, i.e. the control flow of a process. The temporal sequence of messages between named participants is not its focus.",
   "Wrong: The state diagram describes the states and transitions of a single object or building block, e.g. an order from “open” to “shipped”. It does not show the message exchange between several participants.",
   "Correct: Along the lifelines, the sequence diagram shows from top to bottom who sends which message to whom and when. This makes it the typical tool of the runtime view for flows like checkout.",
   "Wrong: The component diagram shows building blocks and their interfaces statically. Which components are connected is visible, but not the temporal order in which they exchange messages."
  ],
  "explanation": "A time-ordered message exchange between several participants is typically shown as a sequence diagram. Trap: the activity diagram is also dynamic but focuses on control flow; state and component diagrams do not fit."
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
   "Wrong: An ADR justifies a decision but does not describe in detail how to implement it. Concrete implementation steps belong in code, tickets or technical concepts.",
   "Correct: Context, decision and consequences are core elements according to Nygard. Here, for example: why was the broker chosen (load peaks, decoupling) and which consequences are accepted (operational effort, eventual consistency)?",
   "Correct: If the decision is revised later, a new ADR is created. The old one is not overwritten but marked as superseded – so the decision history remains traceable.",
   "Correct: The status, such as 'proposed', 'accepted' or 'superseded', is one of the fields of an ADR. It immediately shows readers whether the decision currently applies.",
   "Wrong: ADRs do not prohibit change. They make it traceable what was decided, when and why; if circumstances change, the decision is consciously replaced by a new ADR.",
   "Wrong: ADRs are deliberately short individual documents – one per decision. A collective document for all decisions would be hard to maintain and blur the history of individual decisions."
  ],
  "explanation": "An ADR is a short individual document per decision with status, context, decision and consequences; revisions are recorded as a new ADR and the old one is marked superseded. Traps: ADRs are neither a collective document nor an implementation guide, and they do not freeze decisions."
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
   "Wrong: Whether documentation is understandable can ultimately only be judged by its audience. A review board or the author know the topic too well and miss what readers lack.",
   "Correct: Different views serve different interests: operations mainly needs the deployment view, developers the building block and runtime views, management rather context and overview.",
   "Wrong: All representations describe the same system and must be consistent. Separately maintained models quickly drift apart; different views of one shared model are better.",
   "Wrong: A different notation alone is not enough. Management needs different content, such as overview, costs and risks, while developers need details on interfaces and structures.",
   "Correct: Form, content and level of detail are aligned with the information needs of the respective readers. This is the core of audience-appropriate documentation as required by the curriculum (LG 04-01)."
  ],
  "explanation": "Audience-appropriate means content, level of detail and form matching the need, with different but consistent views of the same system. Traps: understandability is judged by the audience, not a board; merely switching notation is not enough, and separate models drift apart."
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
  "explanation": "State and activity diagrams as well as a numbered step list of a runtime scenario describe behaviour. Package, composite structure and deployment diagrams show structure. Traps: the deployment diagram statically maps artefacts to nodes, and flows can also be shown without UML as a list."
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
   "Wrong: Which internal building block creates the file belongs in the building block view. The technical context stays at the system boundary and only shows channels and protocols to neighbouring systems.",
   "Wrong: The technical context shows the channels to neighbours, not the system's own infrastructure. Mapping the software to nodes, servers and networks is still described by the deployment view.",
   "Correct: The technical context shows the channels and protocols over which the exchange takes place. 'SFTP file transfer' describes exactly such a technical channel between shop and supplier.",
   "Correct: The business context shows which information is exchanged with which partner, independent of the transport. 'Order to supplier' is such a business information flow.",
   "Correct: Both business and technical context stay at the system boundary and show no internals. The shop appears in both as a single black box surrounded by its neighbouring systems and actors.",
   "Wrong: Both contexts are part of the context view in the architecture documentation, for example arc42 section 3. They are separated by level of consideration – business or technical – not by document."
  ],
  "explanation": "The business context shows who exchanges what, the technical context over which channel; both treat the system as a black box. Traps: expecting internal building blocks or the deployment view in the technical context and moving the business context into the requirements documentation."
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
   "Wrong: Nodes and the artefacts deployed on them are elements of the deployment diagram. They belong in the deployment view, not in the building block view with its component diagram.",
   "Wrong: States and transitions are described by the state machine diagram, a behaviour diagram. The component diagram instead shows static structure without temporal or state aspects.",
   "Correct: Components are shown with their provided (lollipop) and required (socket) interfaces and their connections. This makes dependencies between building blocks explicit.",
   "Correct: Like class and package diagrams, the component diagram is a structure diagram. It therefore fits the building block view, which describes the static decomposition of the system.",
   "Wrong: The time order of calls is shown by sequence or activity diagrams in the runtime view. A component diagram only shows who is connected to whom via which interface."
  ],
  "explanation": "The UML component diagram shows building blocks with provided and required interfaces, i.e. static structure, and therefore fits the building block view. Traps: call order, nodes with artefacts or states belong in sequence, deployment or state diagrams respectively."
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
   "Correct: Operations, development and business stakeholders ask different questions of the architecture: what runs where? How is the code structured? How does a business transaction flow? Each view answers specific concerns.",
   "Wrong: All views describe the same system and must be consistent with each other. A building block in the building block view must, for example, be recognisable in the runtime and deployment views; independently maintained models drift apart.",
   "Wrong: A monolith also has structure, runtime behaviour and infrastructure. The variety of stakeholder questions stays the same; a single diagram cannot answer all of them here either.",
   "Correct: Structure, dynamic flows and infrastructure cannot sensibly be combined in one picture without overloading it. Each view deliberately omits aspects in order to present others clearly.",
   "Correct: A building block appears, for example, in the building block view as a structural element, in the runtime view as a participant in a scenario and in the deployment view as part of an artefact. This connects the views."
  ],
  "explanation": "Several views are needed for every system because no single view covers all aspects and stakeholder concerns; the same building block appears in several views. Traps: maintaining views as independent models or treating monoliths as an exception."
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
   "Correct: A common notation such as UML is understandable across teams, organisations and modelling tools. Models can thus be exchanged more easily and read by newcomers.",
   "Wrong: UML diagrams also become outdated if they are not maintained or generated from code. The notation governs the meaning of the elements, not how up to date the content is.",
   "Wrong: Legends help with UML too, e.g. for colours, custom stereotypes or deliberately simplified representations. A standard notation reduces the need but does not make legends unnecessary in principle.",
   "Correct: With free-form “boxes and arrows”, readers have to guess what an arrow means – call, dependency or data flow? In UML the semantics of the elements are defined, which avoids misinterpretation.",
   "Wrong: How detailed a diagram is depends on the target audience and purpose. The notation does not dictate this – UML can be used for rough overviews as well as fine-grained detail diagrams."
  ],
  "explanation": "A standard notation such as UML gives diagram elements an agreed meaning and eases exchange between stakeholders and tools. Traps: it neither keeps diagrams up to date automatically nor defines the level of detail or makes legends redundant."
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
   "Wrong: The building block view names the building blocks involved, such as cart, payment and shipping, with their interfaces. But it is static and does not show how they interact in a flow.",
   "Wrong: The context view shows the system as a black box with its external neighbours. Internal building blocks like cart or payment do not appear at all – so it cannot solve the problem.",
   "Wrong: The deployment view shows on which nodes the software runs and how nodes are connected. It does not answer in which order building blocks collaborate in an order.",
   "Correct: The runtime view shows the interaction of building blocks in a concrete scenario, e.g. “place order” as a sequence diagram. Exactly this understanding is missing according to the review."
  ],
  "explanation": "The interaction of building blocks in a concrete flow is shown by the runtime view. Trap: the building block view names the participants but not their interaction; the context and deployment views answer entirely different questions."
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
   "Wrong: Project and release plans with milestones are project management. They change frequently and are not among the twelve arc42 sections, which describe the system's architecture.",
   "Correct: Section 9 of arc42 records important, consequential architecture decisions along with their reasoning, for example as a list of ADRs. This keeps it traceable why the system is built the way it is.",
   "Wrong: Wireframes and UI mock-ups for each dialogue are part of UX design or requirements. They have no dedicated section in arc42 architecture documentation.",
   "Correct: Section 3 delimits the system from users and neighbouring systems, both from a business and a technical perspective. Context and scope show what belongs to the system and which external interfaces it has.",
   "Correct: Section 11 makes known risks and technical debt visible. This helps to prioritise them consciously and make them transparent to stakeholders instead of hiding them.",
   "Wrong: A complete class or API reference would be code documentation and is better generated. It contradicts the principle of recording only architecturally relevant content in architecture documentation."
  ],
  "explanation": "arc42 includes context and scope (section 3), architecture decisions (9) and risks and technical debt (11), among others. Traps: project and release planning, UI mock-ups and complete class references are not part of architecture documentation."
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
  "explanation": "The building block view shows internal decomposition (billing), offered interfaces (customer management) and dependencies between modules (invoice). The deployment view shows instances in production, channels and protocols between servers – and, the trap, also the mapping of building blocks to artefacts such as container images."
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
   "Wrong: The class diagram is R2 in the curriculum and therefore examinable. Only the state and composite structure diagrams are R3; according to the curriculum R3 content is not examined.",
   "Correct: Class, package and component diagrams are UML structure diagrams. They show static structure, i.e. elements and their relationships independent of temporal flow.",
   "Correct: As a static diagram it typically fits the building block view, for example to show the structure of a building block at a fine level or a domain model.",
   "Wrong: A class diagram shows no temporal flow. For flows in the runtime view, sequence or activity diagrams are used, which depict the order of interactions.",
   "Wrong: The curriculum does not mandate a specific notation per view. For the building block view, component or package diagrams or informal box-and-line diagrams with a legend are also suitable.",
   "Correct: The class diagram contains types or classes and their relationships such as association, aggregation, inheritance or dependency, possibly with attributes and operations."
  ],
  "explanation": "The class diagram (R2) is a structure diagram showing classes and relationships and fits the building block view. Traps: it is neither R3 nor a mandatory notation for any view, and it is unsuitable for runtime flows – sequence and activity diagrams serve that purpose."
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
   "Correct: Dependencies between decisions should be identified and documented. A decision that triggers follow-up decisions should be recorded so it remains clear later why those follow-ups turned out as they did.",
   "Wrong: ADRs are written at the time of the decision, while context, alternatives and rationale are still fresh. Waiting until the decision has proven itself often means this information has already been forgotten.",
   "Wrong: An ADR covers exactly one decision and is not continuously rewritten afterwards, at most superseded by a new ADR. An overall description of the architecture is the job of the rest of the documentation, such as arc42.",
   "Correct: Precisely expensive decisions that are hard to change, such as choosing the database or platform, are needed later along with alternatives and rationale. They are classic ADR candidates.",
   "Wrong: Overgeneralisation: ADRs are meant for significant, architecture-relevant decisions. Recording every detailed code decision as an ADR dilutes their value, and the important decisions get lost in the mass.",
   "Correct: Far-reaching structural decisions such as choosing between synchronous communication and messaging are typical ADR candidates. They affect many building blocks and are costly to change later."
  ],
  "explanation": "ADR-worthy are significant, hard-to-reverse decisions and those with follow-up decisions, recorded at the time of deciding. Traps: documenting every detail, writing only after the decision has proven itself, or treating ADRs as a continuously maintained overall description."
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
   "Wrong: Components with provided and required interfaces are shown by the component diagram of the building block view. It describes static structure, not the technical infrastructure.",
   "Wrong: Time-ordered messages between objects are shown by the sequence diagram, typical of the runtime view. A deployment diagram contains no temporal sequence.",
   "Wrong: Packages and their dependencies are shown by the package diagram. It is a static grouping of model or code elements and does not describe machines, execution environments or network links.",
   "Correct: The deployment diagram shows nodes (hardware or execution environments), the artefacts deployed on them and the communication paths between nodes. It is the typical diagram of the deployment view."
  ],
  "explanation": "The UML deployment diagram shows nodes, artefacts deployed on them and communication paths, and belongs to the deployment view. Trap: component and package diagrams look similarly technical but show static structure; the sequence diagram shows behaviour."
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
   "Wrong: Bulk updates let the documentation become outdated between releases, and by then many details and rationales have been forgotten. It is better to update the documentation continuously along with the changes.",
   "Wrong: Whoever is far from the changes learns about them too late and often does not understand the background. The documentation then lags behind; upkeep belongs to those who make the changes.",
   "Correct: Overviews generated from the code, such as dependency graphs or diagrams-as-code, stay synchronised automatically. This is particularly suitable for details that change frequently and can be derived from the code.",
   "Correct: If documentation upkeep is anchored in the definition of done, the team updates it with relevant changes. As a result it does not become outdated unnoticed, and documentation becomes part of normal work rather than a special task.",
   "Correct: Lean documentation close to the code, versioned in the same repository (docs-as-code), is cheap to maintain. Changes remain traceable via version history and can be reviewed together with code changes.",
   "Wrong: More details considerably increase the maintenance effort, and the documentation therefore tends to become outdated faster. Architecture documentation should focus on essentials; details that the code already shows do not belong in it."
  ],
  "explanation": "Architecture documentation stays current if it is lean, versioned and close to the code, its upkeep is part of the definition of done, and overviews are generated where possible. Traps: more details, central upkeep by a distant role, or rare bulk updates make it go stale faster."
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
   "Correct: Homonyms such as “contract” – a customer contract for the business, an interface contract for developers – are exposed by unambiguous glossary definitions. Only then does it become apparent that both sides are talking past each other.",
   "Wrong: Terms must be agreed jointly by business and development. If development maintains it alone, the business perspective is missing and the glossary fails its purpose as a shared vocabulary.",
   "Wrong: A domain model shows the structures and relationships of business objects but does not replace the textual definition of terms. Both complement each other: the glossary explains what a term means.",
   "Correct: A shared vocabulary reduces misunderstandings between business and IT. It is used consistently in documentation, code and conversations, similar to the ubiquitous language in DDD.",
   "Wrong: Business terms in particular are often ambiguous and therefore belong in the glossary. Technical terms such as framework names are usually well documented elsewhere and rarely cause misunderstandings."
  ],
  "explanation": "A glossary creates a shared, consistent vocabulary between business and IT and exposes homonyms such as “contract”. Traps: it is mainly about business terms, it is maintained jointly and it is not replaced by a domain model."
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
   "Correct: The big picture puts everything else into context: what the system is for, whom it interacts with and what restricts the solution space. Without this frame, details remain hard to understand for newcomers.",
   "Correct: A coarse building block view shows which parts exist and what they are responsible for, without diving into details. This tells newcomers where to find functionality and where changes belong.",
   "Wrong: Build scripts are useful for local setup but belong in a developer guide or README. An architecture overview conveys structures and decisions, not tool details.",
   "Wrong: A chronological change history provides many details but no overview of the current architecture. Version control and changelogs exist for that; relevant decisions are documented specifically.",
   "Correct: Those who know the reasons behind key decisions will not accidentally reverse them. Rationales also explain why the system looks the way it does – e.g. as a short list of ADRs."
  ],
  "explanation": "An architecture overview conveys context, goals, constraints, main building blocks and key decisions with rationale. Trap: change history or build details are useful but belong in other documents and give no overview."
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
   "Correct: Views show different aspects and levels of abstraction, so their level of detail may vary. The runtime view may, for example, be coarser than the building block view – but both must still be free of contradictions.",
   "Wrong: A common modelling tool can make consistency easier but is not a prerequisite. Conventions, a glossary and reviews are often sufficient to keep views consistent.",
   "Wrong: The runtime view only shows selected, important scenarios, and the deployment view shows artefacts rather than building blocks. Not every building block has to appear in every view.",
   "Correct: All views describe the same system. Different names or responsibilities for the same building block confuse readers and point to errors or outdated documentation – as in the review case in the question.",
   "Wrong: No view has general precedence. A contradiction shows that at least one view is wrong or outdated; it is resolved on its merits and then corrected in all affected views."
  ],
  "explanation": "Views may differ in level of detail but must be free of contradictions – the same building block needs the same name and responsibility everywhere. Traps: consistency does not mean 'every building block in every view', 'building block view wins' or 'only with a tool'."
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
  "explanation": "Prioritized quality goals, known risks and technical debt as well as rejected alternatives help readers understand the architecture and its reasons. A description of every class, the sprint plan and a copied requirements specification bloat the documentation – reference rather than copy."
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
   "Wrong: The environment of the overall system with users and neighbouring systems is shown by the context view. The white box, in contrast, looks inside a single building block.",
   "Correct: The white box shows the internal structure: which building blocks billing consists of and how they connect with each other and with the external interfaces. Each contained block appears as a black box in turn.",
   "Wrong: Temporal flows and call sequences belong in the runtime view. The white box in the building block view is a static representation and shows no order.",
   "Wrong: Provided and required interfaces describe the external view, i.e. the building block's black box. The white box takes them as given and shows how they are realized internally."
  ],
  "explanation": "The white box opens a building block and statically shows its internal building blocks and their relationships. Traps: external interfaces belong to the black box, call sequences to the runtime view and the embedding in the system's environment to the context view."
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
   "Correct: Users need to know how the interface behaves on errors, invalid input or overload. Only then can they handle such cases reliably, for example by retrying or showing an error message.",
   "Wrong: This violates information hiding: internal storage is an implementation detail and should remain replaceable. Relevant side effects are described in business terms as behaviour, not via internal structures.",
   "Wrong: Interface and implementation are separated precisely so the implementation remains replaceable. Users need the protocol and data formats, not the programming language or frameworks behind the interface.",
   "Correct: External users cannot be changed in lockstep. The description must therefore make clear how versions are labelled and which changes remain backward compatible.",
   "Correct: Guaranteed qualities such as response time or availability are part of the contract users rely on. Without them, nobody can judge whether the interface is fit for their purpose.",
   "Correct: Operations, parameters, data formats and their semantics form the core of the contract. Only the semantics make clear what a call actually does, for example whether a booking takes effect immediately or later."
  ],
  "explanation": "An interface description defines the contract: operations with semantics, error behaviour, guaranteed qualities and – especially externally – versioning. Traps: internal data structures and implementation technology do not belong in it, even when justified by user needs."
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
   "Wrong: Structures can partly be reconstructed from code, but rationale, rejected alternatives and quality goals cannot. Architecture therefore cannot be fully derived from the code.",
   "Correct: Appropriateness means as much as necessary, as little as possible, measured by the needs of the audiences. Content nobody reads or needs only costs effort.",
   "Correct: What the code shows unambiguously, such as individual classes or methods, need not be maintained twice. Documentation adds overview, rationale and relationships.",
   "Wrong: Code contains neither rationale nor alternatives nor quality goals. Architecture documentation therefore remains necessary throughout the life cycle, even once code exists.",
   "Correct: The more content, the more must be updated with every change. If that is neglected, the documentation goes stale and becomes misleading; being up to date is a key requirement for good documentation."
  ],
  "explanation": "Arguments against \"document everything\" are maintenance effort, quick staleness, unnecessary redundancy with code and lack of value for audiences. Trap: this does not mean code replaces documentation, because rationale and alternatives are not in the code."
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
   "Wrong: The states of an object and the transitions between them are described by the state machine diagram. The activity diagram, by contrast, shows the flow of actions, i.e. control or data flow.",
   "Correct: Forks and joins can be used to depict parallel review steps. The activity diagram is therefore well suited to flows with concurrency.",
   "Correct: Actions, decision nodes and merges represent the control flow. This allows alternative paths such as “approval granted” or “rework required” to be shown clearly.",
   "Wrong: The mapping of building blocks or artefacts to execution nodes is shown by the deployment diagram in the deployment view. The activity diagram describes flows, not infrastructure.",
   "Correct: Like the sequence diagram, the activity diagram shows dynamic behaviour and therefore fits the runtime view. With partitions (swimlanes) it can additionally show which building block performs which action."
  ],
  "explanation": "The UML activity diagram shows flows with actions, branches and concurrency and is suitable for the runtime view. Traps: confusing it with the state machine diagram (object states) and the deployment diagram (mapping to nodes)."
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
   "Wrong: Sounds like quality assurance but is not a dedicated arc42 section. Test concepts may at most appear as a cross-cutting concept in section 8; test planning itself does not belong in the architecture documentation.",
   "Correct: Section 8 describes overarching concepts such as persistence, error handling, logging or security centrally in one place. This way they are implemented uniformly across many building blocks.",
   "Correct: Section 2 records technical, organisational and legal requirements that restrict the solution space, e.g. a prescribed programming language or operating platform.",
   "Correct: Section 4 briefly summarises the fundamental decisions and solution approaches, e.g. technology choices, decomposition approach or approaches to achieving the key quality goals.",
   "Wrong: Cost planning is the task of project or operations management and not an arc42 section. Costs may be a constraint, but they have no section of their own.",
   "Correct: Section 10 makes the quality requirements concrete, e.g. with a quality tree and measurable quality scenarios. The top quality goals also appear already in section 1."
  ],
  "explanation": "arc42 provides, among others, constraints (2), solution strategy (4), cross-cutting concepts (8) and quality requirements (10) as sections. Traps: test strategy and operating/licence costs sound plausible but are not arc42 sections."
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
   "Wrong: The curriculum does not prescribe a particular notation per view. It recommends choosing a notation that is understandable and consistent for the audience; UML is common but not mandatory.",
   "Wrong: UML is not limited to object orientation. Component, deployment and sequence diagrams can equally be used for services, containers or message flows.",
   "Correct: The curriculum mentions alternatives to UML such as C4 or ArchiMate (R3 content). There is no mandatory notation – what matters is understandability and a clear legend.",
   "Correct: As long as the meaning of the elements remains clear, UML may be used informally and sketchily. The degree of formality can be adapted to purpose and audience.",
   "Correct: Component diagrams show building blocks, deployment diagrams infrastructure and sequence diagrams flows. These diagram types are well suited to microservice architectures too.",
   "Wrong: Diagrams show structures and flows, but not rationales, trade-offs or rejected alternatives. Explanatory text, e.g. in ADRs, is still needed for those."
  ],
  "explanation": "UML offers useful diagram types, can be used sketchily and for microservices, and alternatives such as C4 are allowed. Traps: UML is neither mandated by the curriculum, nor limited to OO, nor a substitute for textual rationale."
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
   "Correct: The deployment view shows the technical infrastructure with nodes (e.g. servers) and channels, as well as which artefacts run on which nodes. This is exactly what the operations team wants to know.",
   "Wrong: The building block view deliberately shows the static software structure independent of the infrastructure. On which server a building block runs cannot be seen there.",
   "Wrong: The technical context shows channels and protocols to external neighbours but treats the system itself as a black box. Its internal servers and their connections are not visible there.",
   "Wrong: The runtime view shows the dynamic interaction of building blocks in scenarios. It does not describe where the software is installed or how servers are connected."
  ],
  "explanation": "Which parts run on which servers and how these are connected is shown by the deployment view with nodes, channels and artefacts. Traps: the technical context only shows channels to external neighbours; the building block and runtime views are independent of infrastructure."
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
  "explanation": "Runtime view: the order's state transitions, the interaction in case of failure and the start-up and initialisation sequence – all dynamic behaviour. Deployment view: which nodes form the test and production environments and which artefact is installed where. Trap: environments may look like processes but are infrastructure."
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
   "Wrong: Completeness down to the lowest level is not a quality criterion; it contradicts appropriateness. Too much detail is expensive to maintain, quickly becomes outdated and hides what matters.",
   "Correct: Appropriateness – as much as necessary, as little as possible – is one of the quality criteria of technical documentation named in the curriculum. The yardstick is the readers' need.",
   "Correct: Efficiency means readers quickly find what they are looking for, e.g. thanks to a fixed structure like arc42, and that creating and maintaining it takes reasonable effort.",
   "Correct: Maintainability ensures that documentation can be updated with reasonable effort when the system changes. Otherwise it becomes outdated and loses its value.",
   "Wrong: The criterion of correctness requires agreement with the actual system. Outdated documentation misleads readers – even good rationale no longer helps in that case.",
   "Correct: Not the author or a board, but the readers decide whether they understand what is meant. That is why feedback from the audience is gathered."
  ],
  "explanation": "Criteria for good architecture documentation are understandability (judged by the audience), correctness, efficiency, appropriateness and maintainability. Traps: completeness down to every detail is not a goal, and currency is not secondary – outdated documentation is not correct."
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
   "Wrong: ADRs are an independent format and can be used without arc42, for example as Markdown files in the repository. They can, however, be referenced nicely from the arc42 section on architecture decisions.",
   "Correct: arc42 places decisions in one section of the overall documentation. An ADR, by contrast, is a short standalone document per decision with status, context and consequences – the two can be combined.",
   "Wrong: Both mainly record decisions that have been made. An ADR can also have the status 'proposed', so it can capture open decisions too – the assignment here is reversed.",
   "Wrong: arc42 also provides for rationale and considered alternatives for decisions. ADRs are just a different, more formalised way of recording the same information."
  ],
  "explanation": "arc42 embeds decisions in the overall documentation, ADRs are standalone individual documents with a status; the two can be combined. Traps: both contain rationale and alternatives, and ADRs are not tied to arc42."
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
   "Correct: The core of every ADR is the actual decision taken, usually phrased actively (\"We will use …\"). Without it the record would only be a problem description.",
   "Correct: The consequences, positive and negative, make the decision traceable later. They show which trade-offs were consciously accepted and what changes as a result.",
   "Wrong: ADRs are not continuously rewritten. If the situation changes, a new ADR is written that supersedes the old one; this keeps the decision history traceable.",
   "Wrong: Effort estimates belong to project planning. An ADR records what was decided and why; effort may appear as context or consequence at most but is not one of Nygard's fields.",
   "Correct: The status shows whether a decision is proposed, accepted, rejected or superseded by a newer one. This shows which decisions currently apply without rewriting anything.",
   "Correct: The context describes the problem and the forces, such as requirements and constraints, that trigger the decision. It explains to later readers why a decision had to be made at all."
  ],
  "explanation": "A Nygard ADR contains title, status, context, decision and consequences. Traps: an effort estimate does not belong in it, and instead of updating an ADR with operational experience, you supersede it with a new one."
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
   "Wrong: The code only shows signatures, not guarantees, error behaviour or quality properties. Internal interfaces therefore also need an appropriate, albeit less formal, description.",
   "Wrong: It is the other way round: external interfaces have more and often unknown users who cannot simply ask. They therefore need more formality and detail than internal interfaces.",
   "Wrong: OpenAPI mainly describes syntax: endpoints, parameters, data types. Meaning, pre- and postconditions, error behaviour and quality guarantees have to be documented in addition.",
   "Correct: External interfaces are contracts with third parties and hard to change once published. They are therefore usually documented earlier, more formally and with versioning, so that partners can rely on them."
  ],
  "explanation": "External interfaces are contracts with third parties and are documented earlier, more formally and with versioning; internal ones need an appropriate, leaner description. Traps: code or OpenAPI only cover syntax, not semantics and error behaviour, and internal interfaces need not be described in more detail."
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
   "Correct: Sample code, walkthroughs or templates help carry the concept into the building blocks. Developers often adopt a good example faster than an abstract rule – this promotes uniform implementation.",
   "Wrong: Sounds close to the implementation but leads to redundancy: each building block gets its own description, which diverges over time. Cross-cutting concepts belong precisely in one central place.",
   "Wrong: A cross-cutting concept is meant to guide uniform implementation. If it is documented only after implementation, it comes too late – by then every team has built its own variant.",
   "Correct: Documented centrally, e.g. in arc42 section 8, the concept is implemented uniformly across many building blocks. Building blocks can refer to it instead of repeating it.",
   "Correct: Recording motivation, rules, rationale and an example lets readers not only know the rule but understand why and how to apply it – even in unforeseen cases.",
   "Wrong: Concepts complement the views but do not replace them. An architecturally relevant error scenario, such as the failure of an external system, may still belong in the runtime view."
  ],
  "explanation": "Cross-cutting concepts such as error handling are documented centrally (e.g. arc42 section 8) with motivation, rules, rationale and example, and are also communicated via sample code. Traps: describing them per building block, documenting them afterwards or considering the runtime view redundant."
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
   "Correct: The response describes what the system does in reaction to the stimulus, i.e. the required behaviour. Example: the system returns the search results or fails over to a standby node.",
   "Wrong: Scenarios are often prioritised, e.g. in the utility tree in ATAM. But the priority is additional information for evaluation, not part of the scenario itself.",
   "Wrong: The scenario describes the WHAT, not the HOW. The tactic or solution strategy only emerges in design and is then checked against the scenario.",
   "Correct: The stimulus is the event the system should react to, e.g. a request, a failure or a change request. Without a stimulus, the scenario lacks a trigger.",
   "Correct: The context defines the circumstances under which the scenario applies. The same request means something different at peak load than in normal operation – which is why the environment must be stated.",
   "Correct: Only a measure such as “in under 2 s at the 95th percentile” makes the scenario verifiable. Without a measure it would remain a vague statement of intent like “fast”."
  ],
  "explanation": "The curriculum names four parts of a quality scenario: context/environment, stimulus, response and measure. Traps: the solution strategy (the HOW) and the priority in the utility tree are not parts of the scenario."
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
   "Wrong: Checking whether code follows layering rules is a conformance analysis (LG 05-03). ATAM evaluates architecture decisions against quality goals, not the implementation against the design.",
   "Wrong: Measuring coupling and complexity with tool support is a quantitative metrics analysis. ATAM, in contrast, is a moderated workshop method and does not even need code.",
   "Correct: ATAM plays prioritised quality scenarios through against the architecture decisions, mostly qualitatively in a workshop. It makes trade-offs, sensitivity points and risks explicit – hence its name.",
   "Wrong: Rating alternatives by costs and benefits in monetary terms describes a cost-benefit analysis such as CBAM, which can build on ATAM. ATAM itself asks about the impact on quality goals."
  ],
  "explanation": "ATAM is a scenario-based, mostly qualitative evaluation method that makes trade-offs, sensitivity points and risks explicit (R3). Traps: cost-benefit evaluation (CBAM), metrics measurement and conformance checking of code are different techniques."
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
   "Correct: Both kinds of method complement each other: metrics reveal anomalies that are assessed qualitatively in reviews; scenario analyses can in turn trigger targeted measurements.",
   "Wrong: The scenarios do contain response measures, but in ATAM the evaluation is done through expert assessment of the architecture. Scenario-based evaluation therefore remains qualitative.",
   "Wrong: Not every quality is measurable, and every number needs interpretation. Even when code exists, qualitative methods remain necessary, for instance to evaluate decisions and trade-offs.",
   "Correct: Reviews and scenario analyses work with designs, models and expert knowledge. They can be used early, when no code exists yet and corrections are still cheap.",
   "Wrong: Load tests measure runtime behaviour such as response times and throughput and are therefore quantitative. The fact that measurements must be interpreted does not make the method qualitative."
  ],
  "explanation": "Qualitative methods such as reviews and ATAM work without code, quantitative ones such as metrics or load tests need an analyzable artefact; both complement each other. Traps: measures in scenarios do not make ATAM quantitative, and interpretation does not make load tests qualitative."
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
   "Correct: Incoming and outgoing dependencies of a module are counted – a classic coupling metric. From them you can calculate a module's instability, for instance; according to the curriculum this belongs to quantitative analysis.",
   "Correct: The curriculum explicitly names measuring runtime behaviour quantitatively as an analysis method. The 95th percentile response time is a measured number, not a judgement.",
   "Wrong: The curriculum lists interviews and surveys as qualitative evaluation. Even if answers are captured on a scale and averaged, it remains people's assessment, not a measurement of the system.",
   "Wrong: Whether a trade-off is critical is decided by the participants' discussion in the ATAM workshop. That is a qualitative result, even if it later appears labelled in a list.",
   "Wrong: Rating a scenario as high, medium or low is the stakeholders' judgement, not a measured value. It serves prioritisation and looks like a metric, but it is qualitative.",
   "Correct: Cyclomatic complexity is calculated from the control flow graph and is a source-code metric. It counts the independent paths and is therefore clearly quantitative."
  ],
  "explanation": "Coupling metrics, cyclomatic complexity and measured response times are quantitative. Traps: utility tree priorities, workshop ratings and user surveys are qualitative judgements, even if they look like metrics."
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
   "Correct: The utility tree refines abstract quality attributes step by step via sub-attributes down to concrete scenarios. These are prioritised by importance and difficulty and thus focus the evaluation.",
   "Wrong: Hierarchical decomposition into building blocks down to class level is shown by the building block view. The utility tree structures quality requirements, not the solution structure.",
   "Wrong: Decisions taken together with alternatives are recorded in architecture decision records. The utility tree instead contains the requirements against which decisions are checked in ATAM.",
   "Wrong: A risk matrix orders risks by probability and impact. In the utility tree, scenarios are prioritised by importance and difficulty; risks are only an outcome of the evaluation."
  ],
  "explanation": "The utility tree in ATAM refines quality attributes down to concrete, prioritised scenarios and thus steers the evaluation (R3). Trap: hierarchy and prioritisation also exist in the building block view, ADR collections and risk matrices, but for other content."
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
   "Wrong: An analysis provides well-founded assessments, risks and trade-offs, but no proof that the quality goals will be achieved. Whether they are actually met only becomes clear in the running system.",
   "Correct: The curriculum explicitly mentions checking to what extent architecturally relevant stakeholder concerns are addressed. Overlooked concerns, e.g. those of operations, are a common cause of later problems.",
   "Correct: According to the curriculum, conformance of the implementation with architecture decisions is also a reason for analysis. This reveals architecture erosion, such as forbidden dependencies between layers.",
   "Correct: Whether the design meets or will meet the functional and quality requirements is a core purpose of analysis. Methods such as ATAM check this using quality scenarios.",
   "Correct: The curriculum explicitly mentions finding risks and improvement opportunities before, during and after implementation. Analysis is therefore not limited to early phases but is also useful for existing systems.",
   "Wrong: Fixing effort and deadlines bindingly is a task of project planning. Analysis results such as identified risks can feed into planning, but they are not the purpose of architecture analysis."
  ],
  "explanation": "Reasons according to the curriculum: finding risks (before, during and after implementation), checking requirements fulfilment, conformance of the implementation to decisions, and addressing stakeholder concerns. Traps: an analysis is neither proof of goal achievement nor a planning tool for effort and deadlines."
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
   "Wrong: Strong functional unity within the module is high cohesion – a property inside the module that is actually desirable. High coupling, by contrast, describes the relationships to the outside.",
   "Wrong: The two often occur together but are different: coupling concerns relationships between modules, cohesion the togetherness within a module. They are measured separately and cannot be equated.",
   "Correct: Coupling measures the dependencies on other modules, e.g. via afferent and efferent relationships. Many of them make isolated change, testing and replacement harder because changes propagate easily.",
   "Wrong: The number of branches in the control flow is measured by cyclomatic complexity. It describes the internal complexity of a module and says nothing about its dependencies on other modules."
  ],
  "explanation": "High coupling means many dependencies on other modules, so changes propagate easily. Traps: cohesion (unity within the module) and cyclomatic complexity (branches in control flow) are separate metrics and not the same as coupling."
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
   "Correct: McCabe's cyclomatic complexity is calculated from the control flow graph and counts linearly independent paths. It grows essentially with every branch (if, loop, case) and indicates testing and comprehension effort.",
   "Wrong: The number of dependencies on other modules measures coupling, e.g. afferent or efferent coupling. It concerns relationships between modules, not the control flow within a method.",
   "Wrong: The nesting depth of the inheritance hierarchy is the depth of inheritance tree – a different object-oriented metric that refers to classes, not methods.",
   "Wrong: The number of statements is close to lines of code and measures size. A long method without any branches still has a cyclomatic complexity of only 1."
  ],
  "explanation": "Cyclomatic complexity counts linearly independent paths through the control flow and rises with branches. Traps: size (LOC/statements), coupling between modules and inheritance depth are different metrics."
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
   "Correct: Architecture decisions are played through against the scenarios. This shows whether and how well a decision supports the quality goals and where risks or trade-offs lie.",
   "Wrong: Scenarios can also be played through against designs and models, long before a system is running. That is the core of scenario-based, qualitative analysis.",
   "Wrong: Scenarios describe the required behaviour (the WHAT), not the technical solution (the HOW). Which solution achieves the goal is a separate design decision.",
   "Wrong: Maintainability can also be expressed as a change scenario, e.g. 'a new payment method is added within two person-days'. Scenarios are therefore explicitly suitable for such goals too.",
   "Correct: 'Performant' alone is not verifiable, but a scenario with context, stimulus, response and measure is. Scenarios make abstract quality goals concrete and verifiable."
  ],
  "explanation": "Quality scenarios make abstract goals verifiable and serve as the yardstick against which architecture decisions are evaluated. Traps: they do not describe a solution, do not need a running system and work as change scenarios for maintainability too."
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
   "Wrong: Metrics such as coupling or complexity can feed into a review, but the judgement results from expert assessment. A walkthrough therefore remains a qualitative method.",
   "Wrong: In a walkthrough the author guides others through the design and explains it. It is less formal than an inspection, which has fixed roles, checklists and an independent moderator.",
   "Wrong: Reviews work precisely with documentation and design models, which the curriculum names as information sources for evaluation. Code is not a prerequisite.",
   "Correct: Experts go through the design and models together and assess them against the quality goals. This is qualitative and possible before implementation, when corrections are still cheap."
  ],
  "explanation": "A walkthrough is a qualitative, expert-based review in which the author guides through the design; it is possible before implementation. Traps: metrics feeding into it do not make it quantitative, and it is less formal than a moderated inspection."
 },
 "c5q11": {
  "q": "You are planning the analysis of an online shop. Which of the following methods typically count as qualitative analysis methods?",
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
   "Correct: In scenario-based analysis such as ATAM, the architecture is walked through against concrete quality scenarios. The result is based on the participants' assessment, not on measurements – hence qualitative.",
   "Wrong: Cyclomatic complexity is calculated from the control flow of the source code. It is a metric and therefore belongs to the quantitative methods.",
   "Correct: In an architecture review, experts assess the design against the quality goals. The result is a reasoned judgement, not a measurement, and therefore counts as a qualitative method.",
   "Correct: Easily overlooked: the curriculum explicitly lists penetration tests alongside interviews and surveys as qualitative evaluation. They yield findings about vulnerabilities, not measured values.",
   "Wrong: According to the curriculum, measuring runtime behaviour such as response times under load is a quantitative method. The result is numbers, for example milliseconds at the 95th percentile.",
   "Wrong: Test coverage is a calculated percentage and therefore a quantitative measure. It also says little about test quality, but it is clearly measurable."
  ],
  "explanation": "Reviews, scenario analyses such as ATAM and – easily overlooked – penetration tests count as qualitative analysis – the curriculum explicitly lists penetration tests as such, and scenario analyses also count as qualitative in the official sample exam. Trap: test coverage, complexity metrics and load measurements are quantitative because they produce numbers."
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
   "Wrong: Later analyses can also check whether requirements are met, e.g. via measurements, load tests or acceptance tests. Restricting them to pure conformance checks is wrong.",
   "Wrong: Measurements are indeed only available later, but analysing only then finds design risks too late and at high cost. The curriculum names analysis before, during and after implementation, not mainly afterwards.",
   "Correct: Alongside implementation, comparing intended and actual architecture shows whether the code follows the planned architecture and decisions. This detects erosion before it becomes entrenched.",
   "Wrong: Analyses triggered by a concrete reason are useful, but not the only ones. Ongoing analyses are meant to find risks before they become problems; waiting for problems means analysing too late.",
   "Correct: Even a design can be checked against quality scenarios, e.g. in a scenario-based workshop. Risks found then are still cheap to fix because hardly any code is affected.",
   "Correct: Analysis is not limited to new development. Before an extension or migration, it clarifies whether the existing architecture can support the new requirements and where the risks lie."
  ],
  "explanation": "According to the curriculum, architecture analysis serves to find risks before, during and after implementation, i.e. early on the design, alongside implementation and for existing systems. Traps: \"mainly afterwards\", \"only when there is a reason\" and \"later only conformance\"."
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
   "Correct: When a metric becomes a target, people optimise for the number instead of the actual quality (Goodhart's law). Example: test coverage rises through tests without meaningful assertions, without quality improving.",
   "Wrong: This is precisely the tricky part: programming language, domain, tooling and system context strongly influence metric values. A direct comparison between systems is therefore easily misleading; trends within one system are more meaningful.",
   "Correct: A threshold alone is not an evaluation. Whether a value is problematic depends on the building block and its role – high complexity may be appropriate in a parser but a warning sign in a simple controller.",
   "Correct: Metrics capture qualities such as maintainability or security only partially. Qualitative methods such as reviews or scenario-based evaluation (e.g. ATAM) remain necessary to get a complete picture.",
   "Wrong: Source-code metrics such as coupling or cyclomatic complexity require existing code. Early in design, qualitative methods such as scenario-based evaluations or design reviews are more helpful."
  ],
  "explanation": "Metrics need context and interpretation, capture qualities only partially and lose their meaning when used as targets (Goodhart's law). Traps: comparisons across systems are tricky, and source-code metrics require existing code – in early design, qualitative methods help."
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
   "Wrong: An evaluation reveals risks; it proves nothing. It checks decisions against scenarios on paper; whether the quality goals are actually met only becomes definitive through measurement and operation.",
   "Correct: Evaluations name problematic decisions as risks and explicitly also sound decisions as non-risks. Both are valuable: you know where to act and what you can rely on.",
   "Wrong: The evaluation team assesses and makes recommendations. Responsibility for the design remains with the system's architects – delivering a finished target architecture is not the job of an evaluation.",
   "Wrong: Evaluations are mainly qualitative and measure the architecture against its own quality goals. A single overall grade would hide the concrete risks and would not be comparable between systems anyway.",
   "Correct: Sensitivity points show which decisions a quality depends on particularly strongly; trade-off points show where a decision balances several qualities against each other, e.g. encryption vs. performance.",
   "Correct: Prioritised recommendations on what to tackle first are derived from the risks found. This turns the evaluation into the basis for concrete improvements rather than a mere finding."
  ],
  "explanation": "Typical results of an architecture evaluation: risks and non-risks, sensitivity and trade-off points, and prioritised actions. Traps: no overall grade, no proof that goals are met and no new architecture designed by the evaluation team."
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
  "explanation": "Qualitative are penetration tests by experts, interviews about weak spots and scenario-based evaluations; the latter remain qualitative even if the scenarios contain measures such as \"under 2 s\". Quantitative are counted or measured metrics: change rates from version history, defect counts from the ticket system and coupling degrees per building block. Trap: numbers in a scenario do not make the method quantitative."
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
   "Correct: Architectural decisions can only be evaluated against goals. Without quality goals it remains unclear what “good” means – a review could then only collect opinions, but not soundly identify risks or deviations.",
   "Wrong: Goals do not need to be metrics to be evaluable. Qualitative methods such as scenario-based evaluation (e.g. ATAM) work with concrete scenarios and expert judgement instead of key figures.",
   "Wrong: Functional requirements are important but shape an architecture less strongly than quality goals. The yardstick of an architecture evaluation is mainly the quality goals and the scenarios derived from them.",
   "Wrong: Quality goals influence decisions but do not prescribe technologies – a technology would already be part of the solution. Moreover, this does not explain why their absence is a problem specifically for the review.",
   "Correct: Time for an evaluation is limited. Prioritisation focuses it on the most important and riskiest quality goals; without it everything is treated equally and essentials get lost in detail."
  ],
  "explanation": "Prioritised quality goals are the yardstick and focus of every architecture evaluation. Traps: they do not need to be metrics, functional requirements do not replace them as the yardstick, and they do not determine technologies."
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
   "Correct: Coupling and complexity metrics such as fan-in/fan-out or cyclomatic complexity can be calculated directly from the code without executing it. They point to problematic spots in the structure.",
   "Correct: Cyclic dependencies between building blocks are visible in the static structure and can be detected automatically. Such cycles make changes and testing harder and are a typical finding of static analysis.",
   "Wrong: Performance only shows at runtime under real load. Static analysis can give hints, such as inefficient loops, but cannot prove that performance goals are met.",
   "Wrong: Measuring response times under production load requires running the system – i.e. dynamic analysis, monitoring or load tests. Static tools only look at the code.",
   "Correct: Allowed and forbidden dependencies can be stored as rules and checked automatically, e.g. 'the UI must not access persistence directly'. Violations of the layering thus become visible early.",
   "Wrong: Tools only provide approximations for cohesion, for example based on shared attributes. Whether elements belong together in business terms requires domain understanding, which no tool can reliably assess."
  ],
  "explanation": "Static analysis examines code and structure without execution: coupling and complexity metrics, layering rules and cycles. Traps: runtime properties such as performance or response times can neither be measured nor proven this way, and no tool reliably assesses cohesion in business terms."
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
   "Wrong: In ATAM a risk is a potentially problematic decision, such as one still open or poorly justified. A deliberately weighed conflict between goals is not automatically a risk.",
   "Wrong: (H,H) is a prioritization in the utility tree: high importance, high difficulty. It rates a scenario but does not describe an architectural decision and its effect.",
   "Correct: A trade-off point is a decision that affects several quality characteristics in opposite ways. Here encryption increases security while performance decreases – a textbook case.",
   "Wrong: A sensitivity point is a decision that is decisive for a single quality characteristic. Here, however, two characteristics are affected in opposite ways, so it is more than a sensitivity point."
  ],
  "explanation": "A decision that affects several quality characteristics in opposite ways is called a trade-off point in ATAM – like encryption: more security, less performance. Traps: sensitivity point (one characteristic only), risk (problematic decision) and (H,H) scenario (prioritization) are different terms."
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
   "Correct: With limited time you assess where failure would hurt most: the highest-priority quality goals and the riskiest scenarios. That way half a day yields the most valuable insights.",
   "Wrong: The change rate can hint at hotspots, but says nothing about whether the most important quality goals are at risk. A frequently changed building block may be entirely uncritical.",
   "Wrong: A broad sample spreads the scarce time evenly, including over uncritical parts. Targeted prioritisation by quality goals and risks is far more effective when time is limited.",
   "Wrong: Defect clusters point to problems in the code, such as poor testability. But that does not tell you whether they affect the most important quality goals – assessment follows goals, not bug counts."
  ],
  "explanation": "With limited time you prioritise the assessment by the most important quality goals and biggest risks. Traps: change rate and defect clusters are useful hints, and a broad sample looks thorough, but neither replaces focusing on the goals."
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
   "Correct: Even designs can be checked against quality goals, e.g. using scenarios. That is exactly when corrections are still cheap; a running system is not required.",
   "Correct: Without a yardstick you cannot judge whether an architecture is good enough. The prioritised quality goals, often made concrete as scenarios, provide that yardstick.",
   "Wrong: The team knows the decisions, assumptions and weak spots best. External reviewers can sharpen the view, but excluding the team deprives the evaluation of important knowledge.",
   "Wrong: Any sufficiently understandable description can be evaluated, including sketches, code or interviews with the team. A specific notation such as UML is not a prerequisite.",
   "Correct: Quantitative data such as metrics, logs or load tests and qualitative expert assessments complement each other. According to the curriculum, both are part of analysis.",
   "Wrong: The evaluation is against the system's own prioritised quality goals. A grade comparable across systems is not the aim; the outcome is risks, trade-offs and recommendations."
  ],
  "explanation": "Architecture evaluation measures against prioritised quality goals, is possible on a design already and combines measurements with expert assessments. Traps: it needs no UML, does not produce a comparable overall grade, and the development team takes part."
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
   "Wrong: Many incoming dependencies (afferent coupling) are a structural metric for building blocks. It is not an ATAM term for the effect of an architecture decision on a quality attribute.",
   "Correct: In ATAM, a sensitivity point is a property or decision on which a single quality attribute depends significantly. Here the pool size determines response time, while other qualities are barely affected (R3).",
   "Wrong: A non-risk is a decision assessed as uncritical. The observed strong dependency is initially only an observation, not yet such a classification.",
   "Wrong: A trade-off point affects several quality attributes in opposite directions, e.g. encryption that improves security but worsens performance. Here essentially only one attribute is affected."
  ],
  "explanation": "If a single quality attribute depends significantly on a decision, ATAM calls this a sensitivity point. Traps: a trade-off point affects several attributes in opposite directions, a non-risk is an assessment, and afferent coupling is a metric, not an ATAM term."
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
   "Wrong: ATAM is mainly qualitative and produces no weighted grades. It reveals risks and trade-offs; the stakeholders themselves then decide on acceptance or further action.",
   "Correct: ATAM names risks, i.e. problematic architecture decisions, and explicitly also non-risks, i.e. decisions confirmed as sound. Both are documented in the final report.",
   "Correct: Sensitivity and trade-off points emerge when scenarios are played through against the decisions. They show where qualities react sensitively or are traded off against each other.",
   "Correct: ATAM groups related individual risks into risk themes. This makes systematic weaknesses visible, such as a lack of fault tolerance, which management can then address specifically.",
   "Correct: During ATAM a utility tree is created that refines quality goals into scenarios and prioritises them by importance and difficulty. It is both a working basis and a documented result.",
   "Wrong: Costs and benefits of alternatives are assessed by the Cost Benefit Analysis Method (CBAM), which can build on ATAM. ATAM itself evaluates the architecture against its quality goals, not by cost."
  ],
  "explanation": "ATAM (R3) delivers a utility tree, risks, non-risks, sensitivity and trade-off points and risk themes. Traps: it is qualitative, so it produces no grades for acceptance, and no cost-benefit ranking of alternatives – that would be CBAM."
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
   "Correct: ATAM is a facilitated, scenario-based evaluation method in which stakeholders collect and prioritise scenarios. Because scenarios are walked through against the design and decisions, no running system is needed – so ATAM can be used early.",
   "Wrong: ATAM makes trade-offs, sensitivity points and risks visible. A vote in which stakeholders choose the best alternative is not its outcome – the decision remains with those responsible.",
   "Wrong: ATAM is indeed qualitative, but it does not require a running system. Scenarios are walked through mentally against the design and architectural decisions – which is exactly why it suits the time before implementation.",
   "Wrong: ATAM explicitly involves stakeholders, e.g. in collecting and prioritising scenarios in the utility tree. A pure inspection by experts without stakeholders is a different review format."
  ],
  "explanation": "ATAM is a facilitated, scenario-based method with stakeholders and can be used before implementation (R3 content). Traps: it needs no running system, does not end with a vote on alternatives, and is not an inspection without stakeholders."
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
   "Wrong: Outdated technology is a different problem from erosion. Erosion concerns structure and dependencies in the code, such as forbidden access between building blocks – a framework update corrects none of that.",
   "Wrong: Erosion happens in the code, for example through time pressure, shortcuts or changing teams – even with excellent documentation. Regular conformance checks help against it, not more documentation.",
   "Correct: The quality properties were designed for the intended structure, for example replaceability through clear layers. If the code deviates, this planning no longer reliably holds and quality goals may be missed unnoticed.",
   "Correct: The gradual drift between intended and actual architecture is called architecture erosion. Without deliberate countermeasures such as refactoring, it increases over time.",
   "Wrong: This only removes the visible deviation, not the actual problem. Whether the actual structure still supports the quality goals remains unclear – the erosion is merely legitimised after the fact.",
   "Correct: Tool-supported dependency analyses show where the code contains forbidden dependencies, such as calls bypassing the layering. According to the curriculum, they are a means of conformance checking."
  ],
  "explanation": "The growing gap between intended and actual structure is architecture erosion; it endangers the planned qualities and is made visible by conformance checks such as dependency analysis. Traps: adapting the documentation, complete documentation or framework updates do not fix it."
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
   "Wrong: Consistent documentation is desirable, but that is what a documentation review checks. Conformance analysis compares the implementation with the design.",
   "Wrong: That is the purpose of a qualitative analysis, e.g. scenario-based like ATAM. Conformance, by contrast, asks whether code and intended architecture match.",
   "Wrong: That is a check of the requirements themselves and belongs to requirements clarification. It has nothing to do with whether implementation and architecture match.",
   "Correct: Conformance analysis compares the implemented and intended architecture including decisions taken, often tool-supported via dependency rules. It thus uncovers erosion after two years of development."
  ],
  "explanation": "A conformance analysis checks whether the implementation matches the architecture design and decisions, thereby uncovering erosion. Traps: whether the design supports the quality goals, whether requirements are complete or the documentation is consistent are different questions."
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
   "Wrong: Naming conventions make layers recognisable in the code and aid orientation. But they do not prove that no forbidden accesses exist – a wrong import does not stand out because of them.",
   "Wrong: Code reviews are a method named in the curriculum, but as random samples they do not reliably find every forbidden dependency. They are better suited to questions that tools cannot answer.",
   "Wrong: Monitoring only sees the paths actually executed in operation. Rarely used violations, e.g. in error handling, remain undetected, and violations only show up after deployment.",
   "Correct: Tools such as ArchUnit or jQAssistant automatically check all actual dependencies in the code against the defined layer rules. This is complete, repeatable and can be integrated into the build pipeline."
  ],
  "explanation": "Layer rules are checked most reliably with static dependency analysis against defined rules, ideally automated in the build. Traps: monitoring only sees executed paths, random reviews are incomplete, and naming conventions are no proof."
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
   "Wrong: Chapter 6 does not summarise the previous chapters but applies them to examples. Moreover, according to the curriculum it is precisely not exam-relevant – the exam covers the learning goals of chapters 1 to 5.",
   "Wrong: Chapter 6 introduces no new rules or learning goals beyond the previous chapters. The examples illustrate concepts already known instead of deriving additional rules from them.",
   "Correct: Chapter 6 uses at least one example to make tangible how requirements and constraints lead to decisions and structures. This helps place the abstract knowledge from chapters 1 to 5 in practice.",
   "Wrong: The examples illustrate relationships between requirements and solution. They are not recommendations for particular reference architectures or technologies and are not meant to be copied unchanged."
  ],
  "explanation": "Chapter 6 applies what has been learned to examples and makes the path requirement → decision → structure traceable (R3). Traps: it is neither an exam-relevant summary nor a source of new rules nor a catalogue of recommended reference architectures."
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
   "Correct: LG 06-02 targets the technical implementation: an example should make implementation, technical concepts, products used and solution strategies traceable – e.g. how logging or security are concretely implemented.",
   "Wrong: The solution in the example applies to its context with its quality goals and constraints. Under other conditions an entirely different solution may make sense – an example is not a universally valid reference architecture.",
   "Correct: That is the core of LG 06-01: understanding how quality goals and constraints lead to decisions and why the architecture looks the way it does. That is exactly the thread from requirements to solution.",
   "Correct: Rejected alternatives with their reasons make it understandable why exactly this solution was chosen. Without them it would remain unclear whether the decision was made deliberately or simply adopted.",
   "Wrong: Products in the example show a concrete implementation in a particular context. A market overview or technology recommendation is not the learning goal and would quickly become outdated."
  ],
  "explanation": "A continuous example shows how quality goals and constraints shape decisions, how these are implemented technically and which alternatives were rejected (LG 06-01/06-02, R3). Traps: it provides neither a universally valid reference nor a market overview."
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
   "Wrong: R1 content is examined, but chapter 6 is explicitly not part of it. The examples serve as illustration in the training, not as an exam focus.",
   "Wrong: The examples are not reference solutions to be memorised, and the chapter is R3, not R2. They merely show how concepts can be applied in practice.",
   "Correct: Both learning goals 06-01 and 06-02 are classified as R3, and the curriculum explicitly states that the chapter is not examined. It is worthwhile for understanding, not for exam preparation.",
   "Wrong: Chapter 6 is part of the curriculum with its own learning goals – it is just not exam-relevant. 'Not examined' does not mean 'outside the curriculum'."
  ],
  "explanation": "Chapter 6 (examples) is part of the curriculum, but its learning goals 06-01 and 06-02 are R3 and, according to the curriculum, not exam-relevant. Traps: 'not exam-relevant' does not mean 'outside the curriculum', and the examples are not reference solutions."
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
   "Wrong: Different solutions for similar requirements are normal and usually explained by different constraints, quality goals or team situations. They do not indicate a flaw.",
   "Wrong: Examples show approaches together with their limits but do not anticipate future decisions. There is no universally valid model solution, because every context is different.",
   "Correct: The same requirement can be solved sensibly in a different way under other constraints. The comparison shows that architecture is context-dependent and decisions must be justified.",
   "Wrong: Without a shared context there is no objectively superior solution. Each solution must be measured against its own constraints and quality goals, not an absolute standard."
  ],
  "explanation": "The learning value of examples is that architectural decisions depend on context and constraints. Traps: there is neither an objectively best nor a universally valid solution, and different solutions are no sign of a design flaw."
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
   "Wrong: Patterns have limits and conditions of use. Comparing several examples shows precisely that their suitability depends on context – there is no pattern that fits everywhere.",
   "Wrong: Even within the same domain, quality goals, load or constraints can differ greatly. Proven solutions therefore need to be adapted, not copied unchanged.",
   "Correct: Comparison sharpens your sense of why a decision made sense in its context. You learn which constraints and quality goals support a solution – transferable to your own systems.",
   "Correct: Having seen many solutions makes it easier to transfer approaches to new problems. Your repertoire grows and makes it easier to recognise and weigh alternatives.",
   "Wrong: The examples do contain concrete products, but they focus on the relationship between requirements and solution. An overview of technology stacks is not their purpose and would quickly become outdated anyway."
  ],
  "explanation": "Several architecture examples broaden the solution repertoire and sharpen the eye for the constraints that justify decisions. Traps: they provide neither copy templates, even in the same domain, nor context-free patterns or market overviews."
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
   "Correct: The reasoned compromise between competing quality goals is the core of an architecture decision. Documented drawbacks show what was consciously accepted and make the trade-off something one can learn from.",
   "Wrong: Almost every decision has drawbacks. Their existence does not prove that a better, drawback-free alternative was overlooked; usually no such alternative exists.",
   "Wrong: Documented drawbacks make the trade-off traceable and help with later decisions, e.g. when priorities change. Self-protection is not their primary purpose.",
   "Wrong: Trade-offs cannot be optimised away. Trying to remove every drawback usually just shifts it elsewhere or increases complexity."
  ],
  "explanation": "Openly documented drawbacks are instructive because architecture consciously weighs competing quality goals and the reasoned compromise is the core of the decision. Traps: drawbacks do not prove a better solution was missed, and they cannot be optimised away."
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
  "explanation": "Sensible: a shared template such as arc42, harmonising the teams' contributions, feeding meeting results back into the documentation. Not sensible: shortened developer docs for management (it needs different content), oral alignment instead of documentation (both complement each other) and separate formats per team (hinders finding content)."
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
  "explanation": "True: architecture creates understanding among stakeholders, makes the required functionality achievable and contributes to qualities such as energy efficiency. Not true: architecture remains iterative, even a careful design keeps evolving; the functional scope is defined by the stakeholders; and architecture work initially costs effort – its benefit is not primarily cheaper initial development."
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
  "explanation": "The existing Oracle database (technical), CAB approval and lack of cloud experience (organisational) are constraints. PDF export is a functional requirement; response time and 10,000 concurrent users are quality requirements. Trap: a “must” does not turn a load requirement into a constraint."
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
  "explanation": "Role management and multilingual support are offered functions, i.e. WHAT the system does – even though multilingual support sounds like a quality. Limited impact of switching the payment provider (modifiability), 99.9 % availability and running on Android and iOS (portability) describe HOW WELL the system performs."
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
  "explanation": "Relaxed layering also allows access to lower layers, and compiler phases are a classic pipes-and-filters example. Microservices are cut by domain, own their data instead of sharing a database and increase operational complexity. Trap: a monolith can also be cleanly modular internally."
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
  "explanation": "Cross-cutting topics are communication with formats and protocols, persistence of business objects and the interplay of security, error messages and logging – they affect many building blocks. A dialogue's layout, sorting by price and postcode validation are local tasks of single building blocks. Trap: being visible in many places does not make something cross-cutting."
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
  "explanation": "Sensible: deriving consequences for the code such as package structure and call rules, describing building blocks first as black boxes and opening them as needed, separating domain logic and technology, and identifying risks early. Not sensible: fixing technology before quality requirements are clear, since they drive the choice. Trap: refinement happens only where needed, not everywhere down to the lowest level as white boxes."
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
  "explanation": "A Nygard ADR contains context, status (proposed, accepted, superseded) and consequences, including negative ones. Not included: a continuously updated overall description (that is what the architecture documentation is for), implementation guides and later changes worked into the text – a changed decision gets a new ADR that supersedes the old one."
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
  "explanation": "Quantitative means measurements and metrics: response times under load, lines of code and cyclomatic complexity, and counted cyclic dependencies. Qualitative means assessments such as the expert discussion on risks. Trap: the user survey remains qualitative even though answers are recorded as numbers on a 1-to-5 scale – it measures opinions, not the system."
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
  "explanation": "Static dependency analysis against layering rules, architecture tests in the build and code reviews against ADR decisions reveal deviations. Load tests, higher unit test coverage and acceptance tests check behaviour and quality, not conformance – they can pass even though forbidden dependencies exist."
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
  "explanation": "Desirable interfaces are hard to misuse, functionally complete and easy to extend; external interfaces additionally need more stability, formality and versioning. Traps: exposing internals 1:1 looks flexible but couples clients to the implementation, and changing without a new version breaks partners."
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
   "Wrong: Cohesion concerns the internal unity of a module, coupling the dependencies between modules. Tight coupling between two modules rather indicates a poor split in which things that belong together were separated.",
   "Wrong: Tightly coupled modules require constant coordination between teams because changes to one affect the other. Parallel work therefore becomes harder, not easier (cf. Conway's law).",
   "Correct: Every dependency is a path along which changes propagate. If, for example, the customer structure changes, tight coupling means the invoicing module must be adapted too – this reduces modifiability.",
   "Correct: To test one module, many dependencies on the other must be replaced or started along with it. Isolated testing therefore becomes laborious, and tests become slower and more fragile.",
   "Wrong: Coupling is primarily a maintainability issue. A loss of performance does not necessarily follow; tightly coupled local calls can even be faster than loosely coupled calls over a network."
  ],
  "explanation": "Tight coupling propagates changes across module boundaries and hampers isolated testing and parallel team work. Traps: confusing coupling with cohesion or blanket assumptions about performance effects – coupling mainly affects maintainability."
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
   "Wrong: Direct access to internals increases coupling: less indirection here means more dependency on details. Users save detours but in return depend on everything that is exposed.",
   "Correct: Because many users depend on internals, a change no longer stays local. If, for example, a data structure is reworked, all building blocks that access it directly must be adapted.",
   "Correct: Users depend on details that would disappear if the implementation were replaced. Replacing it then requires changes in all users instead of only behind a stable interface.",
   "Wrong: Documentation does not prevent users from depending on the internals – at most it makes the dependency more conscious. If the internals change, users are still affected.",
   "Wrong: If anything, direct access tends to be faster because indirections are removed. The problem with missing information hiding is changeability, not runtime performance.",
   "Correct: Whatever is exposed gets used – even without a contract (cf. Hyrum's law). Users rely on details that were never guaranteed, and later changes to them break those users."
  ],
  "explanation": "Without information hiding coupling increases: users bind themselves to unguaranteed details, changes no longer stay local and implementations are hard to replace. Traps: documentation does not help against this, and performance is not the actual problem."
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
   "Wrong: Anyone who needs only date formatting also pulls in PDF export and discount logic together with their dependencies. Many functions in one building block therefore make reuse harder, not easier.",
   "Correct: Each concern has its own reasons to change: a new date format, a new PDF library, changed discount rules. Each of these changes hits the whole building block and everyone using it – a violation of the Single Responsibility Principle.",
   "Wrong: Having many things in one place looks tidy locally, but the number of incoming and outgoing dependencies rises. Many building blocks depend on the Utils block, and it in turn depends on many libraries.",
   "Wrong: Rather the opposite: each concern brings its own outgoing dependencies, e.g. a PDF library or the pricing model. An incoherent building block thus collects the dependencies of all its parts.",
   "Correct: Without a clear purpose, you have to work through many unrelated parts to understand the building block. Tests correspondingly need many different initial situations and test data."
  ],
  "explanation": "Low cohesion means several independent reasons to change, poorer understandability and testability, and more rather than fewer dependencies. Trap: “many functions in one place = reusable and loosely coupled” – the opposite is true."
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
   "Wrong: LSP concerns the behaviour-conforming substitutability of subtypes and has nothing to do with SQL in the UI. Mixing concerns such as presentation and persistence violates separation of concerns.",
   "Wrong: The consequences do not stay local: the database schema is now directly coupled to the user interface. Schema changes ripple into the UI, and UI changes can break data access.",
   "Wrong: A possible small performance gain from less indirection rarely outweighs the poorer modifiability and testability. Moreover, performance can usually also be achieved with clean separation.",
   "Correct: Because persistence and UI are mixed, a technology change, such as a different database system or SQL dialect, forces changes to the user interface. With a separate data access layer it would stay local.",
   "Correct: Business and persistence logic cannot be tested separately from the user interface. Tests have to go through the UI, which makes them slow, fragile and costly."
  ],
  "explanation": "Mixed concerns couple persistence and user interface: a database change also hits the UI, and the logic can hardly be tested without the UI. Traps: seeing the consequences as confined to one building block, using a performance gain as justification or wrongly naming LSP instead of separation of concerns."
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
   "Wrong: Quite the opposite: the copies do not depend on each other in code, so a static dependency analysis shows nothing. The coupling is logical and therefore hidden.",
   "Wrong: DRY refers to any duplicated knowledge, not just logic. Constants or configuration values maintained twice also drift apart when only one place is updated.",
   "Correct: If copies are changed independently, they eventually behave differently – for instance when a discount is calculated differently in two places. Such inconsistencies are hard to find.",
   "Correct: DRY is about knowledge, not textual sameness. Coincidentally identical code that means different things in the domain would only become coupled by merging it and could no longer evolve independently.",
   "Correct: The copies are connected through shared knowledge, even though no dependency is visible in code. If the rule changes, all copies must be changed together.",
   "Correct: The same decision lives in several places, so every change must be applied everywhere. Whoever misses one place creates contradictory behaviour in the system."
  ],
  "explanation": "Violating DRY forces multiple changes, risks inconsistency and creates an invisible logical coupling – for logic as well as constants. Traps: static analysis does not reveal this coupling, and DRY refers to knowledge, not to code that merely looks the same."
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
   "Wrong: Even single exceptions create additional dependencies and are often the start of creeping erosion. They should be decided deliberately and documented instead of being dismissed as uncritical.",
   "Wrong: Relaxed layering only allows skipping layers downwards. Upward calls violate the relaxed variant too – reinterpreting it merely obscures the deviation from the design.",
   "Correct: Unintended deviations of the implementation from the planned design are a typical sign of architecture erosion. The strict layering now only exists on paper.",
   "Correct: Layer skipping and upward calls make more layers depend on each other. A layer can then no longer be easily replaced or tested in isolation because more neighbours are affected.",
   "Wrong: A callback via an interface defined by the lower layer inverts the dependency and is allowed. At runtime the call flows upwards, but the source code dependency still points downwards."
  ],
  "explanation": "Unplanned layer skipping and upward calls are architecture erosion and reduce the replaceability of the layers. Traps: reinterpreting it as 'relaxed layering', although upward calls are forbidden there too, and banning callbacks across the board."
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
   "Wrong: The legally binding interpretation of regulations lies with legal or compliance. Architects clarify the requirements with them and implement them technically.",
   "Correct: Clarifying and refining quality requirements and agreeing them with stakeholders is a core task of the role (R1). In a core banking system, security, traceability and availability are particularly critical.",
   "Correct: Analysing and evaluating architectures with respect to risks is a task named in the curriculum. Especially in critical systems, risks to requirements must become visible early.",
   "Wrong: Conflicting goals are weighed together with stakeholders and the decision is documented. Even in banking there is no blanket priority of one quality, e.g. when availability is legally required.",
   "Correct: Regulation is a constraint that restricts the solution space. It must therefore shape the design from the start, otherwise costly rework or approval problems follow."
  ],
  "explanation": "Architects sharpen quality requirements with stakeholders, include regulatory constraints early and evaluate risks. Traps: they do not interpret regulations in a legally binding way, and they do not resolve goal conflicts by default in favour of one quality."
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
   "Wrong: This is not audience-appropriate: management needs overview, risks, costs and consequences of decisions. Detailed UML diagrams are aimed at developers and overwhelm other audiences.",
   "Correct: According to the curriculum, IT operations is explicitly a partner, especially for information systems. Together, deployment, monitoring, scaling and operability are aligned so that the system works in production.",
   "Correct: The curriculum lists quality assurance and testing as stakeholders. Quality goals must be verifiable; together you clarify how, for example, performance or security requirements will be tested.",
   "Wrong: Architects complement other roles but do not replace them. Business alignment with the business units remains with the product owner; architects support with technical assessment.",
   "Correct: Product management and requirements analysis provide the “what”. Architects clarify business goals, priorities and quality requirements with them in order to derive sound architecture decisions."
  ],
  "explanation": "Architects collaborate in an audience-appropriate way with the PO and requirements analysis, IT operations, and QA and testing. Traps: they do not replace other roles such as the PO, and they do not overwhelm management with detailed UML diagrams."
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
   "Correct: Whether building blocks can be tested in isolation depends directly on coupling, direction of dependencies and interfaces – i.e. on the architecture. A building block with a clear interface is easy to test with test doubles.",
   "Correct: Distribution, scaling concept and technology choice determine which infrastructure is needed and what operation costs. Ten separately operated services, for example, cost differently from a monolith.",
   "Wrong: The team's qualification is a constraint that affects the architecture – not the other way round. The architecture must fit the team, e.g. in technology choices.",
   "Correct: A structure in which changes stay local shortens the time to deliver new features. Tight coupling, by contrast, slows down every extension because many building blocks must be adapted and tested.",
   "Wrong: Which functions the system should offer is defined by the stakeholders through the requirements. The architecture must make them achievable but does not determine the functional scope.",
   "Correct: The curriculum mentions energy efficiency explicitly: distribution, type of communication and resource usage co-determine energy consumption. Many network calls or constant polling, for example, cost measurable energy."
  ],
  "explanation": "Architecture shapes qualities such as testability and energy efficiency, operating and infrastructure costs, and how quickly changes can be delivered. Traps: functional scope and team qualification are inputs (requirements or constraints), not results of the architecture."
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
   "Correct: Regulatory constraints such as data protection or retention obligations restrict the solution, e.g. regarding where data is stored or deletion and logging obligations. They are not negotiable.",
   "Correct: The curriculum explicitly names availability, qualification and commitment of staff as an organisational constraint (R1). An architecture the team cannot master is hardly feasible.",
   "Wrong: Existing structures affect new decisions whether or not they are documented. Undocumented decisions in particular are a risk but do not disappear as an influencing factor – the restriction “only if documented” is wrong.",
   "Wrong: arc42 is a template for documentation, not an influencing factor on the design. Which structures are needed follows from requirements and constraints – not from the chapters of a template.",
   "Correct: Technical requirements such as reference architectures, libraries or frameworks limit the solution space (R1). The architecture must fit into this given framework.",
   "Correct: According to the curriculum, partnerships and cooperations are organisational influencing factors (R2). Agreements with partners can dictate interfaces, products or data formats, for example."
  ],
  "explanation": "Influencing factors include organisational (staff, budget, partnerships), technical (infrastructure, reference architectures, frameworks) and regulatory ones. Traps: a documentation template like arc42 is not an influencing factor, and earlier decisions apply even if undocumented."
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
   "Correct: Ports and adapters is a widespread architecture pattern: domain logic sits at the centre, and technology such as UI or database is connected to ports via replaceable adapters. It therefore directly structures the system.",
   "Correct: DDD is a design approach that puts the business domain at the centre. With bounded contexts and ubiquitous language it provides criteria for domain-oriented cuts and thus influences the system structure.",
   "Wrong: arc42 is a template for architecture documentation with twelve sections. It structures the documentation, not the system, and says nothing about how building blocks should be organised.",
   "Wrong: C4 is a model for architecture diagrams with four zoom levels, not a structural pattern. Context, container, component and code are levels of detail of the representation, not layers of the system.",
   "Correct: Microservices are an architecture pattern: small, independently deployable services, each responsible for one business area. They determine the decomposition, communication and deployment of the system.",
   "Correct: Pipes and filters is a classic architecture pattern: processing steps (filters) are chained via data streams (pipes), for example in batch processing or compilers. Filters can be replaced and combined individually."
  ],
  "explanation": "Pipes and filters, microservices, ports and adapters and DDD are architecture patterns or design approaches that shape the system structure. Trap: C4 (diagram model) and arc42 (documentation template) are documentation aids – despite 'four levels' or 'twelve areas' they are not structural patterns."
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
   "Wrong: Sounds like bottom-up but is not: bottom-up deliberately assembles existing building blocks into structures. Merely reading the architecture from code afterwards is not a design approach.",
   "Correct: Domain-driven design is named in the curriculum as an (R3) approach: the structure follows the business domain, e.g. via bounded contexts and a ubiquitous language.",
   "Correct: View-based architecture development is an R1 approach: the architecture is developed step by step through the context, building block, runtime and deployment views.",
   "Correct: Top-down means decomposing from coarse to fine, e.g. from the overall system via subsystems to individual building blocks. The curriculum names it as an R1 approach.",
   "Correct: Bottom-up forms larger structures from existing details or components, for example when using existing libraries. This approach is also R1 in the curriculum.",
   "Wrong: Technology-driven design occurs in practice but is not an approach of the curriculum. Technology should follow the requirements, not dictate the structure."
  ],
  "explanation": "The curriculum names top-down, bottom-up and view-based approaches (R1) as well as domain-driven design, evolutionary architecture and global analysis, among others (R3). Traps: \"framework first\" and \"code first\" sound practical but are not design approaches of the curriculum."
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
   "Wrong: Independent scaling is a characteristic of microservices or distributed services. Layers are logical structuring units, not operational units, and are usually deployed and scaled together.",
   "Correct: User interface, business logic and data access live in separate layers, each with its own responsibility. This separation of concerns makes the system easier to understand and is a core benefit of the pattern.",
   "Wrong: Precisely not: a new business field, such as an extra attribute on an application, often runs through UI, logic and persistence. Business changes in layered architectures typically affect several layers.",
   "Wrong: Passing calls through several layers tends to cost latency and overhead. Short call paths are therefore not an advantage – on the contrary, this is a known drawback of the pattern.",
   "Correct: As long as the interface to the layer above stays the same, a layer can be replaced. Example: the data access layer is switched from a relational to a document database."
  ],
  "explanation": "Layers mainly bring separation of concerns and replaceability of individual layers. Traps: assuming advantages of other patterns such as independent scaling, expecting business changes to stay local, or assuming low latency, although passing calls through layers costs time."
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
   "Correct: Functional changes cut across technical layers. A new attribute often has to be added in UI, logic, persistence and database, spreading changes widely.",
   "Wrong: Replaceability is precisely an advantage of layering: as long as the interface stays stable, the persistence layer can be replaced without adapting higher layers.",
   "Wrong: Layers are a logical structure. Whether they are deployed together in one artefact or separately is a separate deployment decision, not a requirement of layering.",
   "Correct: With strict layering, only the layer directly below may be used. Intermediate layers without their own logic then merely forward calls, costing boilerplate, latency and maintenance effort.",
   "Wrong: Patterns can be combined: a single microservice can well be layered internally. Layers and microservices are therefore not mutually exclusive."
  ],
  "explanation": "Strict layering has limits: functional changes run through several layers, and intermediate layers often just forward calls. Traps: replaceability is an advantage, layers are logical rather than deployment units, and they can be combined with microservices."
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
   "Correct: Oral and written communication complement each other. Example: conduct walkthroughs based on the documentation and feed meeting results back into the documentation so that both remain consistent.",
   "Wrong: Shortening does not change the type of content – management needs different information, not less of the same. What is needed is overview, risks and costs rather than abridged interface details.",
   "Wrong: Both complement each other: written documentation does not make conversations superfluous, e.g. to explain decisions, gather feedback or resolve misunderstandings. The curriculum calls for a balanced approach.",
   "Correct: Audiences have different information needs: management needs, for example, overview, risks and costs, while development needs building blocks, interfaces and concepts. Documentation must suit its stakeholders.",
   "Correct: The curriculum explicitly mentions consolidating contributions from different groups of authors in style and content. Otherwise the documentation becomes inconsistent and hard for readers to navigate.",
   "Correct: A uniform structure such as arc42 helps people find content and also acts as a completeness checklist. Readers know where to find, for example, quality goals or decisions."
  ],
  "explanation": "Audiences need different content; templates make content easier to find, oral and written communication are balanced and contributions from different authors are harmonised. Traps: shortened developer documentation for management and the assumption that written documentation replaces conversations."
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
  "explanation": "Architects point out the consequences of their decisions, check consistency between code and architecture and recognize on their own when another iteration is needed. Traps: budget, schedule and staff lie with project management, the backlog with the product owner, and goal conflicts are decided with stakeholders."
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
  "explanation": "Correct: efficiency includes the effort to create and maintain, understandability is ultimately judged by the target audience, and form, content and level of detail depend on it. Wrong: correctness means agreement with the system, not length; maintainability means being able to keep the docs up to date, not rare changes; and no board can determine understandability on the audience's behalf."
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
  "explanation": "Architecture analysis makes sense before, during and after implementation (true), so not only once code runs (false). It measures against prioritised quality goals (true), checks conformance of the implementation to the decisions (true) and whether architecturally relevant stakeholder concerns are addressed (true). Trap: a fully documented architecture is not a prerequisite; sketches, code and interviews suffice."
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
  "explanation": "Correct: loose coupling means as few dependencies as possible, as many as necessary; information hiding conceals decisions likely to change; encapsulation is the means to achieve it. Wrong: cohesion means unity within a building block, principles are applied depending on requirements, and encapsulation and information hiding are not the same thing."
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
  "explanation": "True: scenarios serve as input for evaluations, requirements should state how they are verified, and a metric turned into a target loses its meaning (Goodhart). False: scenarios describe the WHAT, not the tactic; usability can also be made measurable; and a response measure alone is not yet a complete scenario – source, stimulus, environment and artefact are missing."
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
   "Wrong: The white box shows the inside of the building block, i.e. sub-building blocks and their interplay. It is needed by those who change or study the building block, not by those who merely want to use it.",
   "Correct: The black box describes what the building block offers externally: provided interfaces including guarantees, without revealing the implementation. This is exactly what a user needs to know which services can be called.",
   "Wrong: The context view shows the overall system with its external neighbours such as users and external systems, not individual internal components. It is the wrong level for the services of the payment component.",
   "Wrong: The runtime view shows in scenarios how services are used in concrete sequences. It only answers which services are offered at all in fragments, not completely."
  ],
  "explanation": "Which services a building block offers is described by its black box with provided interfaces and guarantees. Traps: the white box shows the inside for developers, the context view the overall system with external neighbours, and the runtime view usage in sequences."
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
   "Wrong: Complete requirements rarely exist, and waiting for them blocks the project. “As late as responsibly possible” does not mean “only once everything is fixed” – otherwise the structure grows uncontrolled.",
   "Correct: At the last responsible moment, hard-to-reverse decisions are made once more knowledge is available but before waiting itself causes harm. This reduces the risk of committing wrongly too early.",
   "Wrong: Flexibility in reserve creates complexity for requirements that may never come (YAGNI). Extension points should be placed specifically where changes are likely.",
   "Correct: When knowledge is missing, you have to make assumptions. Explicitly recorded assumptions can be checked deliberately, and affected decisions can be adjusted in time if an assumption turns out to be wrong.",
   "Correct: Prototypes provide early feedback exactly where a wrong assumption would be most expensive. This reduces uncertainty specifically where the risk is greatest.",
   "Correct: With uncertain requirements, the architecture grows with knowledge and is reviewed in every iteration. New insights thus flow continuously into the decisions."
  ],
  "explanation": "With incomplete requirements: work iteratively, record assumptions, test risky assumptions early with prototypes, and make hard-to-reverse decisions at the last responsible moment. Traps: making everything flexible as a precaution – or waiting for complete requirements."
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
   "Wrong: The team structure only favours a certain system decomposition. Interfaces, cross-cutting concerns and quality requirements still need to be designed deliberately; architecture work does not become unnecessary.",
   "Wrong: Existing systems are also evolved by the teams that maintain them. Over time their structure adapts to the communication structures – so the inverse Conway manoeuvre works there too, albeit more slowly.",
   "Correct: Because system structures follow the organisation's communication structures (Conway's law), this effect can be used deliberately: the inverse Conway manoeuvre. This, however, requires a real change to the organisation.",
   "Wrong: According to Conway, layer teams (UI, logic, database) favour layer boundaries in the system, not domain-oriented cuts. Domain-oriented services need cross-functional teams per business area."
  ],
  "explanation": "Structuring teams to match the target architecture uses Conway's law deliberately (inverse Conway manoeuvre) – which requires a real organisational change. Traps: it does not replace architecture work, it also affects existing systems, and layer teams produce layer boundaries instead of domain cuts."
 },
 "c2q30": {
  "q": "For a customer portal, high usability is a top quality goal. Which statements about assuring this goal are correct?",
  "options": [
   "Acceptance by the client is sufficient proof.",
   "Trying out interaction flows early with prototypes.",
   "The goal can shape architectural decisions, e.g. on response times.",
   "A uniform design system ensures usability.",
   "Have representative users interviewed or tested.",
   "Usability can be optimized late, independently of the architecture."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Wrong: The client is usually not the typical user of the portal. Their acceptance therefore does not replace testing with real user groups, who may have very different expectations and knowledge.",
   "Correct: Prototypes reveal weaknesses in interaction flows before expensive structural decisions are fixed. This allows early and inexpensive course correction.",
   "Correct: Usability also depends on response times, error handling or offline capability – in other words, on the architecture. Such a top quality goal therefore shapes architectural decisions.",
   "Wrong: A design system ensures consistency but is a solution guideline. It does not prove whether users can actually complete their tasks efficiently; that requires testing.",
   "Correct: Whether a system is usable shows with those who are actually meant to use it. Interviews, surveys and tests with representative users provide reliable results for this – the curriculum explicitly names interviews and surveys as an analysis method.",
   "Wrong: Surface details can be improved late, but sluggish responses or missing fault tolerance cannot be polished away afterwards. They are rooted in the architecture."
  ],
  "explanation": "Usability is secured through interviews and tests with representative users and early prototypes; as a top quality goal it also shapes architectural decisions such as response times. Traps: client acceptance or a design system are no proof, and late on only the surface can be polished."
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
   "Wrong: The dependency runs from the building block to the map service, so it is outgoing (efferent). Afferent coupling instead counts how many other building blocks depend on this one – the terms are swapped here.",
   "Correct: Without cushioning such as timeouts, fallbacks or a circuit breaker, an outage of the external service hits the own functionality directly. With many direct call sites, the system is vulnerable in many places.",
   "Correct: The building block depends on an externally controlled, volatile element. If the provider changes its API or retires a version, the own code has to follow – at every call site.",
   "Wrong: An SLA covers at most availability and response times, not API changes, version changes or deprecations. The structural coupling to the provider remains.",
   "Wrong: At development time too, the code depends on the provider's data types, libraries and calling conventions. The coupling shows up when compiling and testing, not only at runtime.",
   "Correct: If the external API is scattered across the code, switching providers means adapting every call site. An adapter or anti-corruption layer would concentrate this in one place."
  ],
  "explanation": "Directly and scattered integrated external services couple the system to a volatile, externally controlled element: outages, API changes and provider switches all hit it. Traps: treating an SLA as the solution, swapping afferent and efferent, or seeing the coupling only at runtime."
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
   "Wrong: Merging distributed services back together is usually more costly than later splitting a modular monolith along clear module boundaries. The conflict is postponed, not resolved.",
   "Wrong: The perspective of a single group does not decide. What counts are the requirements of all stakeholders, including operations, who must run the system in the long term.",
   "Wrong: Cost shares are a legitimate argument but do not replace weighing all quality goals. Modifiability and independent delivery can also matter to the business.",
   "Correct: The conflict is resolved via explicit, prioritised quality goals and their trade-offs. A modular monolith can be a sound compromise that can be split later."
  ],
  "explanation": "Goal conflicts between stakeholders are resolved via explicit quality goals and deliberate trade-offs, e.g. with a modular monolith as a compromise. Trap: presenting a single plausible argument such as cost or \"whoever builds it decides\" as justification for one side."
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
   "Correct: This is the core of every white-box description: the internal structure of the building block, made up of contained building blocks and their relationships. Third-party building blocks also appear there if they are part of the decomposition.",
   "Wrong: It sounds like “internals”, but it is a matter for procurement and legal. The white box describes the technical structure; licence or contract issues may at most appear as a constraint elsewhere in the documentation.",
   "Wrong: Which parts run on which servers belongs in the deployment view. The white box is part of the building block view and describes the static structure independently of the infrastructure.",
   "Correct: A brief overview of how the internal building blocks interact helps to understand the structure. Detailed flows, however, belong in the runtime view; hence the qualifier “as far as needed”.",
   "Correct: The white box also explains why the building block was decomposed this way and not otherwise, e.g. by domain criteria or likelihood of change. This makes the design traceable and protects against unintended erosion."
  ],
  "explanation": "The white box shows the internal structure: contained building blocks with their relationships, their interplay as far as needed, and the rationale for the decomposition. Traps: supplier contracts are legal, not architecture, and mapping to servers belongs in the deployment view."
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
   "Wrong: Developer machines do not reflect the load, data volumes and infrastructure of production. Avoiding interference sounds clean, but the measurements are then precisely not meaningful for the real problem.",
   "Correct: Measuring runtime behaviour quantitatively under realistic conditions is the appropriate method for performance. Only then does it become clear whether and where the required response times are missed.",
   "Correct: The curriculum explicitly names runtime logs and metrics as a source of information for analysis. They show behaviour under real load, e.g. slow requests or resource bottlenecks.",
   "Wrong: Interviews help narrow down the problem, e.g. which functions are affected. But they are qualitative: the technical cause of a performance problem is proven by measurement, not by asking.",
   "Wrong: More hardware can mask symptoms but does not replace root-cause analysis. If the problem lies, for example, in many sequential remote calls, faster hardware barely helps, and architectural problems are not ruled out.",
   "Correct: “Too slow” cannot be verified. Only a quality scenario with context, stimulus and measurable response measure, e.g. “95 % of searches under 1 s with 500 users”, defines what is to be achieved."
  ],
  "explanation": "Performance problems are investigated based on measurement: express the goal as a measurable quality scenario, measure under realistic load and evaluate runtime logs and metrics from operations. Traps: hardware upgrades, measuring on developer machines and user interviews do not replace measurement in a realistic environment."
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
  "explanation": "The black box includes responsibility, guaranteed qualities such as response time, and required interfaces. Sub-building blocks, their interaction for a request and the mapping of external interfaces to inner blocks are white box. Trap: which inner block realises an interface is already the inside view."
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
  "explanation": "Nodes are execution environments, physical or virtual: the container runtime, the cloud VM and the database server. Artefacts are delivered units installed on them: the SQL script, the configuration file and the container image. Trap: the image is not a node but an artefact."
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
   "Wrong: The internal decomposition into sub-building blocks and their relationships is exactly what only the white-box view shows. The black box deliberately hides these internals so users do not need to know them.",
   "Correct: Required interfaces, i.e. external dependencies, are also visible from outside and relevant for users. Anyone using the building block must know what they need to provide for it.",
   "Correct: Responsibility and guaranteed properties define what the building block is for and under what conditions it can be used, e.g. its task, response time or availability. They form the external contract.",
   "Wrong: The mapping to execution nodes belongs in the deployment view. The black box of the building block view describes the building block logically, independent of where it will run.",
   "Correct: What the building block provides externally is the core of the black-box description. Others use the building block via its provided interfaces without knowing its internals.",
   "Wrong: Internally used algorithms are white-box content or implementation details and remain hidden in the black box. This allows them to change without affecting the users of the building block."
  ],
  "explanation": "The black box describes provided and required interfaces, responsibility and guaranteed properties. Traps: the mapping to nodes belongs in the deployment view, sub-building blocks and algorithms in the white box."
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
   "Wrong: The deployment view answers operational questions such as 'what runs where?'. But it does not describe which services the building block offers with which guarantees – exactly what the developer needs to call it.",
   "Wrong: The white box shows the internal structure and is mainly needed by whoever changes the building block. Interfaces and guarantees are already part of the black-box description.",
   "Wrong: Internal flows are not needed just to use the building block. Exposing them would even couple clients to internals and contradict information hiding.",
   "Correct: The black box describes a building block's responsibility, interfaces and guarantees (e.g. quality characteristics). This is enough to use it correctly without knowing its internals."
  ],
  "explanation": "To merely use a building block, its black-box description with responsibility, interfaces and guarantees is sufficient. Traps: guarantees already belong to the black box; the white box and internal flows are only needed by whoever changes it, and the deployment view answers operational questions."
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
   "Wrong: The contained sub-building blocks and their relationships are the core of a white box. That is exactly why a building block is opened: to show its internal structure.",
   "Wrong: Internal interfaces show how the sub-building blocks work together. Important interfaces therefore belong in the white-box description, possibly with references to details.",
   "Correct: Which nodes or servers something runs on is shown by the deployment view. The white box in the building block view describes the static structure, independent of infrastructure.",
   "Wrong: The rationale for the decomposition belongs to it: the white box also explains why the building block was cut this way. This makes the structure traceable and verifiable later."
  ],
  "explanation": "A white box shows sub-building blocks, their relationships, important internal interfaces and the rationale for the decomposition. Trap: the assignment to servers or nodes belongs in the deployment view, not in the static building block view."
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
   "Wrong: Conway's law applies to any system structure, not just distributed systems. The modules of a monolith also often mirror the communication structure of the teams that build them.",
   "Wrong: Conway's law is an observation, not a rule. You can use it deliberately, for example via the inverse Conway manoeuvre, but you are not obliged to structure teams according to the architecture.",
   "Wrong: Small organisations also have communication structures that show up in the system – just less noticeably. Even two developers who barely talk tend to create an interface between their parts.",
   "Correct: Where teams communicate little, interfaces and system boundaries tend to emerge between their parts. That is the core of the observation: system structure follows communication structure.",
   "Correct: In the curriculum, Conway appears under organisational constraints, i.e. the structure of teams and clients. It is not a technical constraint, but it does influence how the system is split."
  ],
  "explanation": "Conway's law is an organisational constraint: communication boundaries between teams tend to become system boundaries. Traps: it applies regardless of organisation size and architectural style, and it is an observation, not an obligation to structure teams."
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
   "Correct: An adapter or anti-corruption layer bundles the dependency on the external API in one place. If the provider changes its interface, only this abstraction needs adapting.",
   "Wrong: Scattered adapters spread the dependency across the system again. A provider change must then be followed up in many places, defeating the encapsulation.",
   "Wrong: Without a fixed version, every provider change hits unplanned. Versions are pinned deliberately and migrated in a controlled way, e.g. after testing against the new version.",
   "Correct: Timeouts limit waiting times, retries bridge short disruptions, and a circuit breaker stops calls to a failed service. Together they prevent cascading failures.",
   "Wrong: Using the provider's data types in the domain model pulls its structures and changes into your own system. An anti-corruption layer translates them into your own model instead."
  ],
  "explanation": "Volatile external services are encapsulated centrally behind an own abstraction (adapter, anti-corruption layer), and fluctuating availability is handled with resilience patterns such as timeout, retry and circuit breaker. Traps: scattered adapters, unpinned versions and foreign types in the domain model."
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
   "Wrong: This sounds measurable but names neither task nor context nor user group. Satisfaction can also only be checked after go-live, so the requirement provides no guidance during design.",
   "Wrong: This is a solution mandate or constraint. You can check whether it is followed, but not whether the system is actually user-friendly and users can complete their tasks well.",
   "Wrong: A design rule is a solution idea, not a quality requirement. It says nothing about whether users complete their tasks efficiently – some tasks need more fields without becoming unusable.",
   "Correct: This is a quality scenario with context (new users), stimulus (placing an order), response (completed without help) and response measure (< 3 min for ≥ 90 %). This makes a vague goal like “user-friendly” verifiable."
  ],
  "explanation": "Vague goals like “user-friendly” become verifiable through quality scenarios with a concrete task, context, response and measure. Traps: design rules and design systems are solution mandates, and a satisfaction rate without task and context is not a complete scenario."
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
   "Correct: Only profiling or monitoring under realistic conditions shows whether the suspicion is correct. Otherwise you may optimise the wrong place – Knuth's warning against premature optimisation targets exactly this.",
   "Wrong: Coupling says something about changeability and dependencies, not about where runtime is lost. A tightly coupled module can be perfectly fast, a loosely coupled one may be the bottleneck.",
   "Wrong: Caching is a possible performance tactic but brings complexity and consistency issues such as invalidation. Without a proven bottleneck it is premature and may not help at all.",
   "Wrong: A review can provide hints of inefficient algorithms but does not prove that the module is actually the bottleneck. The real cause may lie elsewhere entirely, e.g. in the database or network."
  ],
  "explanation": "Measure first, then optimise: the bottleneck must be proven under realistic conditions through profiling or monitoring before optimising specifically. Traps: reviews, coupling metrics or precautionary caching do not replace measurement."
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
   "Wrong: An up-front detailed design of all variants (big design up front) cannot anticipate unknown changes. It creates over-engineering and tends to make unforeseen changes more expensive.",
   "Wrong: An architectural style does not guarantee modifiability. Poorly cut microservices even spread a business change across many services, increasing the effort.",
   "Correct: Modularity and loose coupling keep changes local: a changed requirement affects only a few building blocks behind stable interfaces. This makes late adjustments cheap.",
   "Wrong: Documentation helps to find affected places faster but does not reduce the actual change effort. That depends on the structure of the system, not on the extent of the documentation."
  ],
  "explanation": "Late changes remain cheap thanks to a deliberately changeable, modular and loosely coupled structure. Traps: complete documentation, up-front detailed design of all variants or a particular style like microservices do not achieve this on their own."
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
   "Correct: Nodes are execution environments such as servers, VMs or container runtimes. Artefacts are the delivered units, such as JAR files, container images or configuration files, that are installed on nodes.",
   "Wrong: Building blocks are mapped onto artefacts but are not the same: one artefact may contain several building blocks. A node is infrastructure, not a software component.",
   "Wrong: Nodes can be physical or virtual, for example VMs or container runtime environments. A VM executes software and is therefore a node, not an artefact.",
   "Wrong: The terms are swapped: the node executes, and the artefact is the deployable file that is delivered and installed on it."
  ],
  "explanation": "Nodes are physical or virtual execution environments (server, VM, container), artefacts are the units deployed onto them (JAR, image, configuration). Traps: equating artefacts with building blocks, not counting VMs as nodes or swapping the terms."
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
  "explanation": "Independent releases by several teams, technology diversity and separate scaling under load peaks favour microservices. Unclear, shifting domain boundaries, mandatory transactional consistency and a small team with little operational capacity rather favour a modular monolith."
 },
 "c1q40": {
  "q": "A team deliberately separates its data model from the representation in the database and the interface format. Which statements apply?",
  "options": [
   "The database schema fixes the business model.",
   "Schema changes do not force changes to the business logic.",
   "Database, file and protocol are merely representations.",
   "The business model is designed only after choosing the database.",
   "This removes any mapping between model and storage.",
   "The price is additional mapping effort between the layers."
  ],
  "correct": [
   1,
   2,
   5
  ],
  "optExpl": [
   "Wrong: That would be the reverse of decoupling. If the schema dictates the business model, technical changes hit the business side directly – exactly what the separation is meant to prevent. The business model is derived from the domain, not from the table structure.",
   "Correct: This is the core of decoupling. A changed database schema or a new JSON format affects only the mapping between model and representation; the business model and logic stay unchanged and need neither adaptation nor redesign.",
   "Correct: The curriculum explicitly names databases, files and transfer protocols as representations of the data model. They can change or exist side by side while the business meaning of the data stays the same.",
   "Wrong: The order is the other way round. The data model is designed first from the business domain, and the storage technology is chosen afterwards to fit. Starting with the database carries technical constraints unnoticed into the business model.",
   "Wrong: Decoupling does not remove the mapping, it makes it explicit. Between the business model and the storage or transfer format there is still mapping code that has to be maintained and tested.",
   "Correct: Decoupling is not an end in itself but a trade-off. It costs mapping code, additional types and some runtime, and pays off especially where representations change or several formats must be served."
  ],
  "explanation": "Decoupled data models keep the business model stable while database schemas, file formats and protocols can change; this requires an explicit mapping, which costs effort. Traps: treating the schema as the specification for the business model, choosing the database first, or believing decoupling saves the mapping – it only makes it visible and replaceable."
 },
 "c3q80": {
  "q": "A team must decide early on how to connect an unfamiliar third-party system. Which measures reduce the risk of this architecture decision?",
  "options": [
   "Try out the integration early in a prototype.",
   "Postpone the decision until all requirements are fixed.",
   "Check and adjust assumptions in short iterations.",
   "Work out the whole architecture first, then ask for feedback.",
   "Plan a blanket time buffer in the project plan.",
   "Involve stakeholders deliberately in demos and reviews."
  ],
  "correct": [
   0,
   2,
   5
  ],
  "optExpl": [
   "Correct: A prototype or vertical slice provides facts instead of assumptions. It shows early whether the third-party system’s interface, performance and error behaviour hold up – exactly how iterations reduce the risk of a decision under uncertainty.",
   "Wrong: A blanket postponement until “all requirements are fixed” is rarely possible and yields no new facts about the third-party system. Risk falls through trying things out and getting feedback, not through waiting.",
   "Correct: Iterative work checks assumptions early and increases predictability, because every iteration delivers facts. Wrong assumptions can thus be corrected cheaply before they become entrenched in the architecture.",
   "Wrong: This is the classic trap. Whoever works everything out first asks for feedback too late, when corrections are expensive. Especially for uncertain decisions, feedback belongs at the start – it is a risk-management tool.",
   "Wrong: A time buffer mitigates schedule risks in the project but changes nothing about the risk of the architecture decision itself. It does not replace checking the assumptions against the third-party system.",
   "Correct: Systematically obtained feedback – planned reviews, demos, prototypes with stakeholders – uncovers misunderstandings and wrong assumptions early. The curriculum says so explicitly: do not leave feedback to chance."
  ],
  "explanation": "The risk of an architecture decision under uncertainty falls through prototypes, short iterations and deliberately organised feedback, because assumptions are replaced by facts early. Traps: postponing decisions until everything is complete, working everything out first and asking afterwards, or treating a time buffer as the answer to a decision risk."
 }
};
