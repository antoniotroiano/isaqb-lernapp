/* Englische Übersetzungen des Fragenkatalogs. QUESTIONS_EN[id]. Fallback DE via mergeEN. */
const QUESTIONS_EN = {
 "c1q1": {
  "q": "Which statements about the term software architecture are correct in the sense of CPSA-F?",
  "options": [
   "Every system has one, even without deliberate design.",
   "It only comes into existence through its documentation.",
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
   "Wrong: Architecture exists independently of its description. Documentation merely makes the existing architecture visible and communicable; it does not create it.",
   "Correct: This is the common core of the usual architecture definitions (R1). Building blocks alone, without their interfaces and relationships, do not describe an architecture; only their interplay does.",
   "Correct: Besides structures, the curriculum explicitly counts cross-cutting concerns such as persistence, logging or error handling, as well as overarching principles, as part of architecture. They affect many building blocks.",
   "Wrong: Confusion of terms: a style such as layers or microservices shapes the architecture but is only one part of it. Building blocks, cross-cutting concerns and fundamental decisions go far beyond the style."
  ],
  "explanation": "Architecture comprises building blocks with interfaces and relationships, cross-cutting concerns, principles and fundamental decisions, and every system has one. Traps: it does not come into existence through documentation, and the architectural style is only one part of it."
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
  "q": "What holds for the relationship between the black-box and the white-box description of a building block?",
  "options": [
   "The white box replaces the black-box description as soon as it exists, since it contains all the information of the outside view.",
   "The black box describes the provided interfaces; the required interfaces belong only in the white box.",
   "The white box shows how inner building blocks together fulfil the responsibility and interfaces of the black box; it must not contradict it.",
   "Black box and white box distinguish views: the black box belongs to the building block view, the white box to the runtime view.",
   "In the white box the contained building blocks are merely named; their responsibility and interfaces only arise with their own white box."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: The white box complements the black box. Responsibility, interfaces and assurances for users of the block remain described in the black box.",
   "Wrong: The required interfaces also belong to the outside view. The black box hides the inside, not the dependencies towards the outside.",
   "Correct: The white box refines the black box with the inside view. Both describe the same building block and must be consistent.",
   "Wrong: Black box and white box distinguish the level of detail (outside vs. inside view), not the view. Both occur e.g. in the building block view.",
   "Wrong: Every contained building block has its black-box description (responsibility, interfaces). Only when needed is it itself opened as a white box."
  ],
  "explanation": "Black box = outside view (WHAT), white box = inside view (HOW), consistent and complementary. Traps: confusing black/white box with building block view/runtime view, assigning required interfaces to the white box, treating the white box as a replacement."
 },
 "c1q4": {
  "q": "Which statements about architecture views are correct?",
  "options": [
   "The runtime view describes on which nodes the building blocks are operated.",
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
   "Wrong: Mapping building blocks or artefacts to nodes is the job of the deployment view. The runtime view describes how building blocks interact in scenarios.",
   "Wrong: The “when” belongs to the runtime view. The building block view shows the static decomposition of the system into building blocks with their interfaces and dependencies, not their interaction over time in concrete flows.",
   "Correct: The deployment view shows which artefacts run on which infrastructure nodes (servers, containers, devices) and over which channels the nodes are connected. Example: the web archive runs on two application servers behind a load balancer.",
   "Correct: The runtime view describes dynamic behaviour: how do building blocks interact in a concrete scenario? Sequence or activity diagrams are typical, e.g. for the flow “place order” or system start-up.",
   "Wrong: This confuses the context view with level 1 of the building block view. The context view shows the system as a black box with its external neighbours (users, external systems) and interfaces; the first decomposition belongs to the building block view."
  ],
  "explanation": "Runtime view = dynamic interaction in scenarios, deployment view = artefacts on nodes. Traps: the context view is not a decomposition level, behaviour over time does not belong in the building block view, and mapping to nodes does not belong in the runtime view."
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
  "q": "Important requirements are still open, but the architectural style has to be chosen. Which approach is most appropriate?",
  "options": [
   "Choose a style that covers as many conceivable future requirements as possible.",
   "Record the decision in an ADR so that it can be changed later without additional effort.",
   "Choose the style, document the underlying assumptions and review the decision when new insights arise.",
   "Build a prototype of the style and later extend it into the production system.",
   "Postpone the decision until the client has signed off the open requirements."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: A style that covers everything conceivable is usually complex and expensive and still does not match the requirements that actually occur. Flexibility should be provided specifically where changes are likely.",
   "Wrong: An ADR makes decision, context and rationale traceable but does not lower the cost of a later change. Documentation and reversibility are two different properties.",
   "Correct: Architecture work takes place under uncertainty and is iterative. With explicitly documented assumptions you can later check specifically whether the decision still holds, e.g. after a vertical slice.",
   "Wrong: Prototypes are designed for quick insight, not for robustness and maintainability. Reusing one as the basis of the production system carries deliberate shortcuts into the product.",
   "Wrong: A complete sign-off is rarely achieved in practice and blocks the project until then. Waiting merely pushes risks back instead of making them manageable early through deliberate decisions."
  ],
  "explanation": "Under uncertainty you decide deliberately, document assumptions and review them iteratively. Traps: wanting to cover everything, confusing documentation with reversibility, reusing prototypes or waiting for completeness."
 },
 "c1q8": {
  "q": "Which statements about the relationship between architecture and requirements are correct?",
  "options": [
   "The architecture determines which features the system offers.",
   "Constraints restrict the solution space from the start.",
   "Architecture decisions can create new requirements.",
   "The architecture has to ensure that the functional requirements can be met.",
   "Quality requirements substantially shape the overall structure.",
   "Non-functional requirements only become relevant to the architecture after implementation.",
   "Functional requirements uniquely determine the building block structure."
  ],
  "correct": [
   1,
   2,
   3,
   4
  ],
  "optExpl": [
   "Wrong: Role swap: stakeholders and requirements decide which features a system offers. Architecture ensures that the required functions and qualities can be achieved under the given constraints.",
   "Correct: Constraints such as mandated technologies, budget, deadlines or organisational structures are non-negotiable. They must shape the design from the start, otherwise costly rework follows.",
   "Correct: Architecture and requirements influence each other. Choosing cloud operation, for example, creates new requirements for operations, security and cost control that nobody had stated before.",
   "Correct: The curriculum names as a goal of architecture to achieve functional requirements or to ensure that they can be met.",
   "Correct: Functions can be implemented with many different structures. Only quality requirements such as performance, availability or modifiability really constrain the solution and thereby shape the overall structure.",
   "Wrong: Quality requirements shape the overall structure from the start. If considered late, they can often only be achieved afterwards at high cost.",
   "Wrong: The same functionality can be built as a monolith, in layers or as microservices. Functional requirements therefore do not uniquely determine the building block structure; qualities and constraints do so far more."
  ],
  "explanation": "Quality requirements and constraints shape the structure, and architecture decisions feed back into the requirements. Traps: architecture does not decide the feature set, qualities are not relevant only after implementation, and functions alone do not uniquely determine a structure."
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
   "Besides provided operations, an interface can also describe required operations.",
   "The architecture of a system can be read completely from its source code."
  ],
  "rowExpl": [
   "Building blocks with interfaces show only part of the structure. Only relationships, cross-cutting concerns, principles and decisions with their consequences turn this into an architecture, so the statement is false.",
   "Building block is the umbrella term for delimited parts of a system, and a component is one kind of building block. The statement holds only in this direction and is true; the reverse would be false.",
   "Every system has building blocks and relationships and therefore an architecture, even if it was never consciously designed. Documentation only describes it, it does not create it. The statement is therefore true.",
   "An interface is the contract visible from outside: it describes provided and, where needed, also required operations. Limiting it to provided operations would be too narrow, so the statement is true.",
   "The code shows what was built, but not why. Rationales, trade-offs and rejected alternatives are not in it, so the architecture cannot be read completely from the source code."
  ],
  "explanation": "Building blocks with interfaces are not yet an architecture; relationships, cross-cutting concerns and decisions are missing (false). Every component is a building block but not vice versa (true). Every system has an architecture, even an unplanned one (true). Interfaces describe provided and required operations (true). Rationales are not in the code, so the architecture cannot be read completely from it (false)."
 },
 "c1q11": {
  "q": "At the start of a project for a new customer portal the team collects all persons and groups that have an interest in the system and considers how they influence the architecture. Which statements about stakeholders of a software architecture are correct?",
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
  "q": "Which statements about the cut of building blocks are correct?",
  "options": [
   "The more finely building blocks are cut, the lower the overall coupling of the system.",
   "With high cohesion, changes to a business aspect tend to stay confined to one building block.",
   "A building block with high cohesion can still be strongly coupled to other building blocks.",
   "A wide public interface reduces coupling because clients need fewer detours via other building blocks.",
   "High cohesion denotes the degree of dependencies between neighbouring building blocks.",
   "A cut by business responsibility tends to lead to high cohesion and low coupling."
  ],
  "correct": [
   1,
   2,
   5
  ],
  "optExpl": [
   "Wrong: Very fine-grained building blocks tear apart what belongs together and create more relationships between building blocks. Coupling then tends to rise rather than fall.",
   "Correct: What belongs together functionally lies in the same building block. A change to this aspect then affects few building blocks.",
   "Correct: Cohesion (inside) and coupling (outside) are independent criteria. A building block that is consistent in itself can have many dependencies on others.",
   "Wrong: A wide interface exposes internals and makes clients depend on more details. This increases coupling and violates information hiding.",
   "Wrong: That describes coupling. Cohesion denotes the internal unity within a building block, not the relationships to neighbours.",
   "Correct: A business-oriented cut bundles what belongs together (cohesion) and thereby needs fewer relationships between building blocks. It is a tendency, not a guarantee."
  ],
  "explanation": "Well-cut building blocks have high cohesion inside and loose coupling outside, oriented towards business responsibility. Both criteria are independent. Traps: confusing cohesion and coupling, regarding fine granularity as decoupling, interpreting wide interfaces as decoupling."
 },
 "c1q13": {
  "q": "Two teams develop building blocks separately that are later supposed to work together. Before starting they clarify what makes up the interface of a building block and what it should define. Which statements about the interface of a building block are correct?",
  "options": [
   "It comprises the signatures but not guarantees.",
   "It can comprise provided and required operations.",
   "It can remain stable when the implementation changes.",
   "It corresponds to the class that implements the building block.",
   "It is the basis for teams being able to develop their building blocks separately.",
   "It is always used by exactly one building block.",
   "It describes the internal data structure of the building block."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Wrong: Too narrow: a signature only says how to call something. An interface contract also includes guarantees such as pre- and postconditions, error behaviour or quality properties.",
   "Correct: The interface is the externally visible contract. It can contain provided operations as well as required ones, i.e. what the building block expects from its environment – each with its guarantees.",
   "Correct: That is exactly the purpose of encapsulation and information hiding: internals may change as long as the contract is kept. Clients of the building block thus remain unaffected by internal changes.",
   "Wrong: An interface is a contract, not a class. The same interface can be implemented by different classes or building blocks.",
   "Correct: Once the contract between building blocks is in place, teams can work independently of each other and integrate later.",
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
   "Prove the quality of the system through tests.",
   "Make future changes, including unforeseen ones, cheap."
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
   "Wrong: Proving quality through tests belongs to testing and quality assurance. The goal of architecture is to meet the quality requirements in a traceable way.",
   "Wrong: Only anticipated changes can be made easier deliberately, e.g. by encapsulating volatile parts. Making every possible change cheap is impossible and would lead to over-engineering."
  ],
  "explanation": "Goals according to the curriculum: support implementation, achieve functions and qualities, ensure understanding, reduce complexity, set guidelines for implementation and operation. Traps: no defining of features, proving quality belongs to testing, no cheap changeability for everything."
 },
 "c1q18": {
  "q": "Which statements about an iterative approach in architecture design are correct?",
  "options": [
   "Fundamental decisions are made early and reviewed in later iterations based on new insights.",
   "Iterations shorten the feedback loop and thereby improve predictability.",
   "An iteration is complete only once the architecture documentation has been fully signed off.",
   "An iterative approach presupposes stable requirements so that feedback can be evaluated meaningfully.",
   "Even with an iterative approach, earlier decisions can be revised, which causes effort.",
   "An iterative approach dispenses with an early architecture phase because the architecture results from the code."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Correct: Fundamental decisions shape further work and are therefore made early. In every iteration they are reviewed based on feedback and new knowledge and corrected if necessary.",
   "Correct: Short cycles uncover wrong assumptions early. According to the curriculum, an iterative approach has a positive effect on risk and predictability.",
   "Wrong: Documentation grows iteratively and is not demanded as a sign-off criterion of each iteration. What matters is that results can be used as feedback.",
   "Wrong: An iterative approach is precisely the answer to uncertain and changing requirements. Feedback helps to clarify requirements and design step by step.",
   "Correct: Revision is part of the concept, but it is not free. The more fundamental and the earlier implemented a decision is, the more expensive its correction.",
   "Wrong: Even iteratively, deliberate cross-cutting decisions about quality goals and constraints are needed early. A purely emergent architecture does not cover these reliably."
  ],
  "explanation": "Iterative means: decide deliberately early, check with feedback, revise if needed (at a cost) and thus improve risk and predictability. Traps: seeing stable requirements as a precondition, understanding documentation sign-off as the end of an iteration, or letting architecture merely emerge."
 },
 "c1q19": {
  "q": "Which statements about the distinction between software architecture and detailed design are correct?",
  "options": [
   "Architecture is created before, detailed design after a fixed milestone.",
   "Architecture covers the overarching decisions that are hard to change.",
   "Detailed design begins below a fixed building block size.",
   "Detailed design elaborates within the framework set by the architecture.",
   "Architecture describes the structure, detailed design the behaviour.",
   "Whether a decision counts as architecture is shown by its reach and cost of change, not by timing."
  ],
  "correct": [
   1,
   3,
   5
  ],
  "optExpl": [
   "Wrong: Architecture and detailed design evolve iteratively and often in parallel. A fixed milestone as a phase boundary reflects waterfall thinking and contradicts the iterative approach the curriculum emphasises.",
   "Correct: Architecture comprises the system-wide, load-bearing decisions that are expensive to change later, such as decomposition or technology choice. Detailed design refines within these constraints, e.g. classes inside one building block.",
   "Wrong: There is no fixed building block size at which detailed design starts. The boundary depends on the project and follows from the reach of a decision: whatever affects the whole system or is hard to change belongs to architecture.",
   "Correct: Detailed design fills the frame set by the architecture, e.g. classes within a building block. It does not change the fundamental decisions.",
   "Wrong: Both cover structure and behaviour. Architecture also describes behaviour, for example in the runtime view. The difference lies in the reach of the decisions, not in structure versus behaviour.",
   "Correct: What has system-wide effect or can later be changed only at great expense belongs to architecture – regardless of when it is decided."
  ],
  "explanation": "Architecture covers overarching decisions that are hard to change; detailed design refines within these constraints. Traps: the boundary is neither a fixed milestone nor a building block size, and both levels describe structure as well as behaviour."
 },
 "c1q20": {
  "q": "Which aspects of good communication does the curriculum expect from software architects?",
  "options": [
   "Concentrating on communication with the development team because the architecture is implemented there.",
   "Listening actively to understand concerns.",
   "Presenting complex matters with uniform technical terminology, regardless of the audience.",
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
   "Wrong: According to the curriculum, architects communicate themselves with all relevant stakeholders, including the business side and management. Development is only one counterpart among several.",
   "Correct: Communication is not a one-way street. Active listening helps to understand stakeholders' real concerns and is explicitly listed in the curriculum as an architect's skill.",
   "Wrong: Good communication adapts content and presentation to the audience's knowledge and interests. Uniform technical language overwhelms, for example, management or the business side.",
   "Wrong: Verbal alignment is valuable but does not replace a documented, traceable justification. Without a written record, reasons get lost and decisions are questioned later.",
   "Correct: Architects stand between business, development, operations and management. They must balance differing interests and bring about viable compromises.",
   "Correct: The same decision is explained differently to management than to developers: the content stays the same, while the presentation adapts to the audience's knowledge and interests."
  ],
  "explanation": "Good communication means mediating, listening actively and justifying decisions for each audience – continuously during design and towards all stakeholders. Traps: communication is not limited to development, not independent of the audience and no substitute for documentation."
 },
 "c1q22": {
  "q": "What most likely characterises a 'good' software architecture?",
  "options": [
   "It maximises security, performance and usability at the same time.",
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
 "c1q24": {
  "q": "Which statements explain why the curriculum does not fix a single binding definition of software architecture?",
  "options": [
   "The definition depends on the chosen architectural style.",
   "There are many recognised definitions of software architecture.",
   "A single definition would fit information systems but not other systems.",
   "What is taught is the common core of the definitions (building blocks, interfaces, relationships, cross-cutting concerns).",
   "A fixed definition would restrict the solution space."
  ],
  "correct": [
   1,
   3
  ],
  "optExpl": [
   "Wrong: An architectural style such as layers or microservices is a solution decision for a specific system. The concept of architecture itself is style-independent and applies equally to every system.",
   "Correct: The curriculum refers to numerous accepted definitions and extracts their common aspects: building blocks, relationships, interfaces, principles and decisions. This core is what matters for the exam, not a single definition.",
   "Wrong: The common definitions apply to software systems in general. An information system is only one kind of system; the notion of architecture is independent of it.",
   "Correct: The curriculum works out the common aspects of the usual definitions. This keeps participants independent of which definition they encounter later.",
   "Wrong: Definitions describe a term, not concrete solutions. The solution space is constrained by requirements, constraints and decisions, not by the choice of a definition."
  ],
  "explanation": "There are many recognised definitions of software architecture; the curriculum teaches their common core (building blocks, relationships, decisions). Traps: a restriction to information systems, dependence on the architectural style or an alleged narrowing of the solution space."
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
  "q": "Which statements about the importance of data models for the architecture are correct?",
  "options": [
   "They are sensibly defined after the architecture.",
   "They are often long-lived and expensive to change later.",
   "Their influence is limited to the persistence layer.",
   "The data model should be considered independently of its representation (database, file, transmission protocol).",
   "An ORM decouples them from the architecture.",
   "Data affects decisions on storage, security, scalability and performance."
  ],
  "correct": [
   1,
   3,
   5
  ],
  "optExpl": [
   "Wrong: Data models shape the architecture, for example how building blocks are cut or distributed. They are therefore designed together with it, not afterwards, otherwise the structure will not fit the data.",
   "Correct: Data often outlives several generations of applications, and many systems depend on it. A poor data model is therefore expensive to correct later, for example through migrations.",
   "Wrong: Data has an impact far beyond the persistence layer: on building block decomposition, interfaces, security, scalability and performance. Reducing it to the database underestimates its influence.",
   "Correct: The curriculum stresses decoupling the data model from its representation. This allows thinking the model through without early commitment to a storage format.",
   "Wrong: An ORM at most decouples the storage representation from objects. The domain model and its influence on building block structure and interfaces remain.",
   "Correct: Which data exists, how much and how sensitive it is shapes many architecture decisions. The curriculum names this explicitly."
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
   "The system processes up to 10,000 orders per hour.",
   "Customers can cancel orders until shipment.",
   "The already licensed database must be used.",
   "Personal data must be stored within the EU.",
   "The system generates a monthly revenue report."
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
   "Wrong: This is a quality requirement (performance respectively load behaviour). The concrete number looks like a mandate but describes a goal, not a prescribed solution path.",
   "Wrong: This is a functional requirement: it describes what the system should do and does not restrict the solution space from outside.",
   "Correct: A technical constraint: the existing, already licensed database is given, and the architecture must adapt to this infrastructure instead of freely choosing a database product.",
   "Correct: A regulatory or legal constraint (e.g. from GDPR). It restricts the solution space, for example in the choice of cloud provider, region or data centre.",
   "Wrong: This too is a functional requirement – a desired service, not a restriction of the solution options."
  ],
  "explanation": "Constraints restrict the solution space: budget, team know-how, existing technology and regulation. Traps: load figures such as 10,000 orders per hour are quality requirements, cancelling orders and reports are functional requirements – they describe goals and services, not a prescribed solution path."
 },
 "c2q4": {
  "q": "A stakeholder demands: “The system should be fast.” What most effectively makes this requirement verifiable?",
  "options": [
   "The requirement to use an in-memory database.",
   "Mapping it to the ISO 25010 characteristic performance efficiency.",
   "A scenario consisting of context, stimulus, response and measure.",
   "Specifying the analysis method used to check fulfilment.",
   "Marking the requirement as “very fast” with high priority."
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
   "Wrong: A priority says how important the requirement is, not how its fulfilment can be checked. “Very fast” remains undefined without a target value, context and analysis method."
  ],
  "explanation": "'Fast' becomes verifiable through a complete quality scenario (context, stimulus, response, measure) plus a defined analysis method. Traps: a priority, a technology mandate or mere classification in a quality model are not enough."
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
   "A new language version of the UI can be added without changing code.",
   "New staff enter an order without training in under 3 minutes.",
   "The system displays prices in either euros or US dollars."
  ],
  "rowExpl": [
   "Takeover within 30 seconds describes how well the system copes with failures (reliability). It is not an offered function, so it is a quality requirement.",
   "The reminder email is behavior the system offers, i.e. the WHAT. The time figure (24 hours) does not turn it into a quality requirement.",
   "Adding new languages without code changes describes how easily the system can be changed (modifiability). That is a property, not a function of its own, so a quality requirement.",
   "Entering an order without training in under 3 minutes is about how well the system can be learned (learnability). It concerns HOW WELL, not a function.",
   "Displaying prices in euros or US dollars is an offered function, i.e. the WHAT. Mentioning numbers or currencies does not make it a quality requirement."
  ],
  "explanation": "Functional (WHAT): reminder email and currency display – numbers in them do not make them a quality. Quality (HOW WELL): takeover within 30 s (reliability), new language without code change (modifiability), placing an order without training (learnability)."
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
   "Unauthorized access to customer data is detected within 5 minutes."
  ],
  "rowExpl": [
   "The trade fair date is an external mandate that limits the room for maneuver. It says nothing about how good the system should be, so it is a constraint.",
   "Operating at the contractually bound partner is dictated by a contract and restricts the solution options. A constraint, not a required property.",
   "Integrating a new payment method in under two person-days describes how well the system can be changed (modifiability). That is required behavior, not an external mandate.",
   "The data protection rule to keep personal data within the EU comes from outside and is not negotiable. It is a constraint, not a quality requirement.",
   "Detecting unauthorized access within 5 minutes describes how well the system delivers security. Here security is required behavior, not a mandate, so it is a quality requirement."
  ],
  "explanation": "Constraints are external mandates: the trade fair date, the contractually bound data centre partner and the data protection rule on the EU. Quality requirements describe HOW WELL the system should perform: a payment method in under two person-days (modifiability) and detection of unauthorised access within 5 minutes (security). Trap: security here is required behaviour, not a mandate."
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
   "The development team alone determines the order based on technical effort.",
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
   "Wrong: The order is set with the responsible stakeholders (e.g. product owner) based on business value, risk and effort. The team provides effort estimates and technical consequences but does not decide alone.",
   "Correct: Effort alone says nothing about benefit. Only when business value and risk are included does a sensible order emerge, for example: high value at low effort first, risky items secured early.",
   "Wrong: Quality requirements are often the stronger architecture drivers. Ranking them generally behind functional requirements risks expensive structural changes when it later turns out that, say, performance or security cannot be met.",
   "Wrong: The opposite is true: architecturally risky requirements are tackled early, for example with a prototype or a walking skeleton. Risks discovered late are much more expensive to fix because much has already been built on wrong assumptions.",
   "Correct: Contradictions such as maximum security versus minimal usability barriers cannot both be fully satisfied. Prioritisation makes such conflicts consciously decidable instead of leaving them open and letting chance decide."
  ],
  "explanation": "Prioritisation weighs business value, risk and effort and resolves contradictions consciously. Traps: risky items come early, not late, quality requirements are not generally secondary, and the team does not set the order alone based on effort."
 },
 "c2q12": {
  "q": "When planning an online shop the client wants the highest security, the best performance and the greatest flexibility at the same time. The team discusses how such qualities relate to each other. According to the curriculum, what applies to the relationship between different qualities of a system?",
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
   "It becomes a constraint as soon as the team records it in the design.",
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
   "Wrong: Recording an assumption makes it explicit and verifiable but not a given. A constraint is imposed from outside; the 99.9 % remain an unconfirmed fact.",
   "Correct: Explicit assumptions can be questioned and verified, for example by asking the operator or checking the SLA. Implicit assumptions, by contrast, lead to misunderstandings between stakeholders."
  ],
  "explanation": "Assumptions are presumed, unconfirmed facts and must be documented explicitly so they can be checked and the dependent decisions found. Traps: an assumption is not a binding constraint, not even through documentation, and a running system does not confirm it."
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
   "Quality attribute (e.g. performance efficiency according to ISO 25010).",
   "Response (e.g. result list is displayed).",
   "Solution tactic (e.g. caching).",
   "Context (e.g. under full load).",
   "Measure (e.g. 95 % in under 1 s).",
   "Stimulus (e.g. 1,000 simultaneous requests).",
   "Priority (e.g. high)."
  ],
  "correct": [
   1,
   3,
   4,
   5
  ],
  "optExpl": [
   "Wrong: The quality attribute classifies the requirement in a quality model but is not part of the scenario. The scenario makes the attribute concrete only via context, stimulus, response and measure.",
   "Correct: The response describes what the system does in reaction to the stimulus, such as displaying the result list. It is a fixed part of every quality scenario.",
   "Wrong: A scenario describes the requirement, not the solution. Whether caching or another tactic is used is decided later in design; otherwise the solution would be anticipated.",
   "Correct: The context describes the operating state or environment in which the scenario applies, such as full load or normal operation. The same behaviour may be required differently depending on context.",
   "Correct: Only the measure makes the scenario verifiable, e.g. \"95 % in under 1 s\". Without a measurable criterion the requirement would stay vague and could not be tested or evaluated.",
   "Correct: The stimulus is the trigger the system must react to, such as 1,000 simultaneous requests or a change request. It is one of the core parts of a scenario.",
   "Wrong: Priority says how important the requirement is, not how it is checked. It is often recorded in addition but is not one of the parts of the scenario."
  ],
  "explanation": "A quality scenario consists of context, stimulus, response and measure. Traps: solution tactic, quality attribute and priority are not part of it – the scenario describes the requirement and its test criterion, not its implementation, classification or importance."
 },
 "c2q20": {
  "q": "The business wants fast features, operations wants maximum stability – the two goals are incompatible. How do architects proceed appropriately?",
  "options": [
   "Deciding the conflict themselves based on technical feasibility.",
   "Making both goals maximally achievable via configuration.",
   "Documenting a justified prioritization or compromise.",
   "Involving the relevant stakeholders in the resolution.",
   "In a conflict prefer the short-term project goals because they are measurable.",
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
   "Leave the stakeholder analysis to management, which fixes the list bindingly.",
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
   "Wrong: Stakeholders and their concerns change during the project, and architects have to identify them actively and continuously. Management often does not know operations, support or external partners completely.",
   "Correct: Operations, support or quality assurance do not use the system functionally, but they have concerns such as monitoring, deployment or fault analysis that shape the architecture. If they are overlooked, important quality requirements are missing.",
   "Correct: Every stakeholder knows further parties (snowball principle). This uncovers roles that appear in no list, such as external service providers or departments that supply data.",
   "Wrong: Budget responsibility says nothing about who has architecturally relevant concerns. Operations, developers or authorities in particular often have no budget influence but raise decisive requirements.",
   "Wrong: The organisation chart is a good starting point but incomplete. External partners, customers, authorities or neighbouring systems do not appear in it, and roles in the chart do not always reflect actual concerns."
  ],
  "explanation": "Stakeholders are found by asking known parties and by including indirectly affected groups such as operations or support. Traps: an organisation chart, budget responsibility or a list from management do not give a complete picture – the analysis is ongoing."
 },
 "c2q23": {
  "q": "A team notices that the building block boundaries of its system match the department boundaries exactly. Which statement correctly describes Conway's law?",
  "options": [
   "System structures mirror the communication structures of the organization.",
   "Systems in use must change or they lose their usefulness.",
   "Adding staff delays a late project further.",
   "A working complex system evolves from a working simple system."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: This is Conway's law: the structure of a system tends to mirror the communication structures of the organisation that builds it. Building block boundaries along department boundaries are a typical symptom.",
   "Wrong: This describes Lehman's laws of software evolution: systems in use must adapt continuously or their usefulness declines. It has nothing to do with the relationship between organisation and system structure.",
   "Wrong: This is Brooks' law from “The Mythical Man-Month” about project staffing: new people need onboarding and increase communication overhead. Conway's law, by contrast, concerns system structure.",
   "Wrong: This is Gall's law about how complex systems come about. Conway's law, by contrast, concerns the relationship between the communication structure of the organization and the system structure."
  ],
  "explanation": "Conway's law: the communication structure of the organisation shapes the system structure. Traps: confusion with Brooks' law, Lehman's laws or Gall's law. Deliberately steering in the opposite direction is called the Inverse Conway Maneuver."
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
   "They must be stated in writing by the client in order to apply.",
   "As requirements set by the client, they are not negotiable in the design.",
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
   "Wrong: Clarifying and questioning requirements and constraints is part of architecture work. Constraints are not always immovable; they can be negotiable or change.",
   "Wrong: A confusion of terms: quality requirements describe desired properties of the product. Constraints, in contrast, restrict the solution space, e.g. mandated technologies or laws.",
   "Correct: The curriculum distinguishes technological, organizational and regulatory constraints and lists trends as a further influencing factor. Examples: target platform, team structure, GDPR.",
   "Correct: Constraints are not immutable. A new data protection rule can, for example, overturn the choice of cloud region; architects should be able to recognize and explain such consequences."
  ],
  "explanation": "Constraints are technological, organisational or regulatory, also affect the process, and can change. Traps: they need not be in writing, are not particularly binding quality requirements, and are not generally non-negotiable."
 },
 "c3q1": {
  "q": "Which statements about coupling and cohesion are correct?",
  "options": [
   "Efferent coupling counts the building blocks that depend on this building block.",
   "Inheritance and creation of objects are kinds of coupling.",
   "Communication via events eliminates the dependency on the message format between sender and receiver.",
   "High cohesion presupposes that a building block has no dependencies on other building blocks.",
   "Many afferent dependencies make changes to a building block’s interface laborious.",
   "High cohesion and loose coupling can conflict, e.g. when splitting related logic creates new dependencies."
  ],
  "correct": [
   1,
   4,
   5
  ],
  "optExpl": [
   "Wrong: Swapped. Efferent means outgoing: this building block depends on others. The building blocks that depend on it form the afferent (incoming) coupling.",
   "Correct: Besides usage and messaging, the curriculum names inheritance, creation, composition and temporal coupling. A subclass depends strongly on its base class.",
   "Wrong: Events decouple in time and technically, but sender and receiver still share the format and meaning of the message. This dependency remains.",
   "Wrong: Cohesion describes the internal unity of a building block, not its external relationships. A highly cohesive building block can still use services of others.",
   "Correct: Afferent means incoming: many clients depend on the building block. An interface change affects all of them and requires coordination.",
   "Correct: Both goals do not always pull in the same direction. Distributing related logic across several building blocks may reduce size but creates additional dependencies and reduces cohesion."
  ],
  "explanation": "Coupling describes relationships between building blocks (including inheritance, creation), cohesion the internal unity. Both goals can conflict. Traps: swapping afferent and efferent, seeing events as eliminating the functional dependency, equating cohesion with freedom from dependencies."
 },
 "c3q2": {
  "q": "Which statements about information hiding according to Parnas are correct?",
  "options": [
   "What is hidden is whatever is irrelevant to the users of a building block, regardless of whether it can change.",
   "Design decisions that are likely to change are hidden.",
   "Information hiding is a feature of object-oriented languages and not applicable in other paradigms.",
   "The interface must not reveal details of the hidden decision, otherwise it is not stable when that decision changes.",
   "Developers of other building blocks must not rely on hidden details even if these were technically accessible."
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Wrong: According to Parnas the criterion is the likelihood of change of a design decision, not its relevance to users. Irrelevant but stable details need not be hidden.",
   "Correct: Decisions prone to change, such as the storage format, sit behind a stable interface. Changes thereby stay local to the building block.",
   "Wrong: It is a design principle independent of the language. Parnas formulated it for modules, long before object orientation became widespread.",
   "Correct: If, for example, a return type reveals the storage format, the secret is hidden only seemingly and the interface breaks with the change.",
   "Correct: Only the contract of the interface is guaranteed. Whoever relies on unguaranteed internals depends on details that may change without notice."
  ],
  "explanation": "Information hiding conceals decisions likely to change behind a stable interface that itself reveals nothing about them. Traps: relevance instead of likelihood of change as the criterion, tying it to object orientation, and interfaces that leak internals."
 },
 "c3q4": {
  "q": "Which statements about the layered architecture (layers) are correct?",
  "options": [
   "Layers typically correspond to separate tiers, so every additional layer brings network communication with it.",
   "A layer groups building blocks of similar abstraction level and can be replaced as long as its interface is preserved.",
   "In the strict variant a layer may skip a lower layer if that layer only passes calls through.",
   "A lower layer may notify higher ones via a callback interface defined by itself without violating the layering.",
   "Additional layers bring indirection and can come at the expense of runtime performance.",
   "The layering also rules out cyclic dependencies between building blocks of the same layer."
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Wrong: Layers are a logical structuring, tiers a physical distribution. Several layers often run in the same process.",
   "Correct: The abstraction level determines the cut; the dependency points downward to the interface of the lower layer, which eases replacement.",
   "Wrong: Skipping characterizes the relaxed (open) variant. In the strict variant a layer uses only the one directly below it, even if that one merely passes through.",
   "Correct: The callback interface belongs to the lower layer, the higher one implements it. The dependency in the code still points downward, only the call goes upward at runtime (e.g. observer).",
   "Correct: Each layer is a stage through which calls and data are passed, which can cost runtime. A typical trade-off in favor of better modifiability.",
   "Wrong: Layering regulates the direction between layers, not dependencies within a layer. Cycles can arise there and must be avoided separately."
  ],
  "explanation": "Layers: dependencies point only downward; callbacks via interfaces of the lower layer are allowed. Strict = only the directly underlying layer, relaxed = skipping allowed. Traps: layers are logical, not each one is a tier; cycles within a layer remain possible."
 },
 "c3q5": {
  "q": "Which statements about ports and adapters (hexagonal architecture) are correct?",
  "options": [
   "Dependencies point from the adapters to the domain core; the core knows only the ports it defines itself.",
   "A port describes the technical connection (e.g. JDBC); the adapter contains the domain logic.",
   "One distinguishes ports for incoming calls (using the core) and for outgoing calls (using external systems).",
   "As in classic layers, the domain logic depends on data storage, just with additional indirection.",
   "The domain core can be tested with test doubles instead of real adapters.",
   "Outgoing calls of the core go directly to the adapter classes; ports serve only for incoming calls."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Correct: The core defines what it needs and offers (ports); adapters implement them. The dependency therefore points inward (dependency inversion).",
   "Wrong: Swapped: the port is the core’s interface formulated in business terms, the adapter handles the technical connection.",
   "Correct: Incoming ports (e.g. use cases) are offered by the core, outgoing ones (e.g. repository) are defined by the core and implemented by adapters.",
   "Wrong: This is exactly what is reversed: the core defines a port, data storage implements it as an adapter. The dependency points toward the core, not toward data storage.",
   "Correct: Because the core knows only ports, adapters for UI and database can be replaced by test substitutes. This is a major advantage.",
   "Wrong: Outgoing calls also go through ports (e.g. a repository interface); otherwise the core would be bound to concrete technology."
  ],
  "explanation": "Ports and adapters puts the domain core at the center: it defines ports, adapters implement them for UI, database or external systems, dependencies point inward. Traps: swapping the roles of port and adapter, dependency from the core to data storage."
 },
 "c3q6": {
  "q": "Which statements about microservices are typically correct?",
  "options": [
   "The cut typically follows functional boundaries; cutting by technical layers means every change affects several services.",
   "Cross-service queries and consistency are easier than in a monolith because each service owns its data.",
   "Overall testing effort decreases because each service can be tested in isolation.",
   "Teams can evolve services independently as long as the interface contracts remain compatible.",
   "Interface changes are uncritical because each service can be deployed independently.",
   "Operations and monitoring become more costly because many individually deployable units must be managed."
  ],
  "correct": [
   0,
   3,
   5
  ],
  "optExpl": [
   "Correct: Functional cuts keep changes local and enable independent teams. Technical cuts create tight dependencies between services.",
   "Wrong: Own data ownership makes cross-service queries and atomic consistency harder; it is accepted in exchange for independence.",
   "Wrong: Individual services are easier to test, but integration and end-to-end tests across service boundaries and network become more costly. Net effort typically does not drop.",
   "Correct: The independence holds only within the agreed contract. This is the prerequisite for scaling development across teams.",
   "Wrong: Independent deployment presupposes compatible interfaces. Incompatible changes force consumers to adapt at the same time.",
   "Correct: More deployment units require automation, distributed logging and tracing. This is the usual price of independence."
  ],
  "explanation": "Microservices trade independence for distributed complexity. The cut is functional so that changes stay local; operations, consistency and cross-service testing become more costly. Typical trap: assuming independent deployment removes the need to coordinate interfaces."
 },
 "c3q7": {
  "q": "Which assignments of design principle and core statement are correct?",
  "options": [
   "Postel’s law: accept input at trust boundaries without checking so that partners stay flexible.",
   "Expect errors: be strict in what you send and tolerant in what you accept.",
   "KISS: do not build functionality in advance.",
   "Conceptual integrity: solve similar problems in the system in a similar way.",
   "Abstraction: building blocks depend on abstractions instead of implementations."
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Wrong: Being tolerant in what you accept does not mean accepting invalid input unchecked. Input at trust boundaries must be validated; tolerance applies e.g. to unknown additional fields.",
   "Correct: This is the statement of the robustness principle (Postel's law), to which \"expect errors\" is traced back. Inputs at trust boundaries must still be validated.",
   "Wrong: That is YAGNI. KISS demands keeping solutions as simple as possible.",
   "Correct: Uniformity and consistency are its core. This lowers onboarding effort and makes behavior predictable.",
   "Correct: Interfaces are abstractions. Whoever depends on them is decoupled from concrete implementations."
  ],
  "explanation": "Typical mapping traps: swapping KISS and YAGNI, equating tolerance with accepting input unchecked. Correctly mapped are Postel's law (expect errors), conceptual integrity (uniformity) and abstraction (depending on abstractions)."
 },
 "c3q8": {
  "q": "Which of the following topics are typical cross-cutting topics?",
  "options": [
   "Calculation of shipping costs displayed by several dialogs",
   "Logging",
   "The customer entity read by many building blocks",
   "Configurability",
   "Internationalization",
   "Validation of order data in the order module"
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Wrong: A business function in one building block used by others. It is not an aspect that many building blocks must themselves regulate.",
   "Correct: All building blocks write logs; format, levels and content should be uniform.",
   "Wrong: A frequently used business data model is a shared domain building block, but not a cross-cutting topic.",
   "Correct: How values are loaded, overridden and validated affects many building blocks and needs uniform rules.",
   "Correct: Languages, formats and character sets affect all building blocks that output texts or values.",
   "Wrong: A business rule with local scope. Only a system-wide validation strategy would be cross-cutting."
  ],
  "explanation": "Cross-cutting topics affect many building blocks equally and are usually technical or qualitative in nature (internationalization, logging, configurability). Business calculations, validations and entities belong in functionally cut building blocks, even if several use them."
 },
 "c3q9": {
  "q": "Which statements about top-down and bottom-up approaches in design are correct?",
  "options": [
   "Bottom-up assembles larger structures from existing parts and is suitable when much existing material has to be reused.",
   "Bottom-up is closer to the stakeholders in domain terms, while top-down is more developer-friendly.",
   "Top-down carries the risk of late integration and can overlook existing ready-made solutions.",
   "Top-down delivers executable parts early and quick test and feedback results.",
   "Whoever starts bottom-up cannot later proceed top-down.",
   "Bottom-up carries the risk of lacking orientation and tight coupling."
  ],
  "correct": [
   0,
   2,
   5
  ],
  "optExpl": [
   "Correct: Libraries, legacy systems or fixed technologies then shape the structure; bottom-up takes these details into account early.",
   "Wrong: Swapped. Top-down is close to the stakeholders in domain terms and interface-oriented, bottom-up is developer-friendly.",
   "Correct: These are typical disadvantages because the details only enter the design late.",
   "Wrong: That is an advantage of bottom-up. Top-down delivers integrable results only late.",
   "Wrong: The approaches are combined and applied iteratively; the direction can change depending on the state of knowledge.",
   "Correct: Without the big picture the “what for?” is missing, and existing parts shape the structure and increase coupling."
  ],
  "explanation": "Top-down = from the whole to the parts (stakeholder-near, late integration); bottom-up = assembling from existing parts (developer-near, quick feedback, risk of lacking orientation and tight coupling). Trap: swapping the advantages."
 },
 "c3q10": {
  "q": "Which statements about abstraction and modularization in design are correct?",
  "options": [
   "Every additional abstraction level improves comprehensibility because it hides further details.",
   "Modularization can increase the number of interfaces and thus the coordination effort.",
   "Modularization reduces the complexity of the overall system without creating new dependencies.",
   "Abstraction makes it possible to judge a building block without knowing its internals.",
   "Abstraction makes building blocks reusable, so every building block should be designed as generically as possible.",
   "An abstraction lowers the cost of change only where it separates changeable decisions from their users."
  ],
  "correct": [
   1,
   3,
   5
  ],
  "optExpl": [
   "Wrong: Abstraction only helps if it really hides what is inessential. Additional levels without benefit force indirections and make the system harder to follow.",
   "Correct: Every module needs a defined interface that has to be agreed upon and maintained. The gain in manageability is paid for with additional coordination effort.",
   "Wrong: Cutting into modules creates dependencies across module boundaries that were internal before. Part of the complexity shifts to the interfaces.",
   "Correct: An abstraction describes what a building block provides, not how. This makes it possible to understand the interplay without overseeing every detail.",
   "Wrong: Excessive generalization creates complexity for cases that never occur. The value of an abstraction depends on whether it covers variability that is actually needed.",
   "Correct: At stable places an additional abstraction brings no gain in modifiability, only effort. Its value results from the expected direction of change."
  ],
  "explanation": "Abstraction and modularization make complexity manageable but have costs: more interfaces, indirection and coordination. Traps: abstraction as an end in itself, generalization in advance, and the assumption that modularization creates no new dependencies."
 },
 "c3q11": {
  "q": "For which tasks is the Pipes and Filters pattern well suited?",
  "options": [
   "Many domain components access a shared data store in changing order and extend it step by step.",
   "A compiler breaks source text down in consecutive stages: lexer, parser, optimizer, code generator.",
   "A central component accepts requests and distributes them to suitable domain components.",
   "Processing steps in which late stages retroactively trigger earlier stages again.",
   "Incoming measurement values are normalized, validated and enriched in independent stages."
  ],
  "correct": [
   1,
   4
  ],
  "optExpl": [
   "Wrong: This describes the blackboard pattern with a shared knowledge store. Pipes and Filters has no shared state; data flows only between neighboring stages.",
   "Correct: A fixed sequence of transformation steps, each processing the output of the previous one, is the standard case.",
   "Wrong: This is a mediator or broker structure. In Pipes and Filters there is no central control; the stages are chained via pipes.",
   "Wrong: Feedback contradicts the idea of independent filters chained in one direction and complicates error handling and concurrency.",
   "Correct: A data stream, independent transformation stages and a uniform pipe format fit the pattern exactly."
  ],
  "explanation": "Pipes and Filters fits when a data stream is processed in independent, linearly chained transformation steps. Distinctions: blackboard (shared data store), broker/mediator (central distribution), feedback (not a pure flow)."
 },
 "c3q12": {
  "q": "Which statement about asynchronous communication between building blocks is correct?",
  "options": [
   "It makes sender and receiver functionally independent because the sender does not wait for the result.",
   "It requires sender and receiver to both be available at the time of the message.",
   "It reduces temporal coupling but leaves the dependency on the message format in place.",
   "It only arises through distribution; within one process, calls are synchronous.",
   "It simplifies error handling because errors of the receiver reach the sender as an exception."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: The sender does not wait, but the format and business meaning of the message remain shared dependencies. If the receiver expects different data, the interaction still fails.",
   "Wrong: Swapped: simultaneous availability is required by synchronous communication. Asynchronously the sender can send even if the receiver is not running, for example via a queue.",
   "Correct: Asynchrony decouples sending and processing in time. The business and formal dependency (message format, meaning) remains.",
   "Wrong: Asynchronous mechanisms such as events, futures or callbacks also exist within one process. Local/remote and synchronous/asynchronous are independent characteristics.",
   "Wrong: That is a characteristic of synchronous calls. Asynchronously the sender does not learn directly of receiver errors; this rather makes error handling harder (error channels, retries, dead-letter queue)."
  ],
  "explanation": "Asynchronous communication decouples sender and receiver in time, not functionally. Traps: it does not depend on distribution, does not require simultaneous availability and does not make error handling simpler."
 },
 "c3q14": {
  "q": "Which statements about the dependency inversion principle (DIP) are correct?",
  "options": [
   "The abstraction belongs to the using, higher-level building block and not to the implementing one.",
   "The DIP is fulfilled as soon as dependencies are passed in via the constructor.",
   "The DIP can create additional interfaces and indirection that pay off mainly for changeable dependencies.",
   "The DIP reduces dependency at runtime because calls are no longer made directly.",
   "The abstraction belongs to the called, lower-level building block so that callers find it.",
   "Dependency injection is a technique that can support the DIP but does not guarantee it."
  ],
  "correct": [
   0,
   2,
   5
  ],
  "optExpl": [
   "Correct: The using building block defines the interface according to its own needs; the adapter implements it. Only then does the dependency point from the technology towards the domain logic.",
   "Wrong: That describes dependency injection, a technique. Even injected concrete classes leave the domain logic directly dependent on the technology; the DIP concerns the direction of dependency on abstractions.",
   "Correct: Every abstraction costs effort and comprehensibility. It pays off where the dependency is likely to change or should be isolated.",
   "Wrong: At runtime the domain logic still calls the adapter. What is inverted is the direction of the source code dependency, not the call path.",
   "Wrong: The domain logic would then remain dependent on the technology module, so the direction would not be inverted. The abstraction lies on the side of the user.",
   "Correct: DI supplies instances from outside. Whether the domain logic thereby depends on an abstraction or on a concrete class is decided by the design."
  ],
  "explanation": "With the DIP, domain logic and technology both depend on an abstraction owned by the user. Traps: equating the DIP with dependency injection, relating the inversion to runtime, and introducing abstractions without need."
 },
 "k3": {
  "q": "Is it an architectural pattern or a design principle?",
  "categories": [
   "Architectural pattern",
   "Design principle"
  ],
  "rows": [
   "Dependency inversion principle",
   "Separation of concerns",
   "Layered architecture",
   "Information hiding",
   "Pipes and filters",
   "Microservices"
  ],
  "rowExpl": [
   "A guideline on dependency direction (abstractions rather than details); patterns such as ports and adapters apply it.",
   "A general guideline for separating concerns, without prescribed building block types.",
   "A concrete structure of levels with directed dependencies.",
   "A principle of hiding internal decisions behind an interface; independent of a concrete structure.",
   "A pattern of processing steps connected via data streams.",
   "An architectural style with independently deployable, functionally cut services."
  ],
  "explanation": "Patterns prescribe a concrete structure with building block types and relationships; principles are guidelines applicable in many structures. A principle can motivate a pattern (e.g. separation of concerns motivates layering) but is not a structure itself."
 },
 "c3q15": {
  "q": "Which statements about separation of concerns (SoC) are correct?",
  "options": [
   "Concerns can be cut technically, for example persistence, or by domain, for example along subdomains.",
   "SoC demands that every class has exactly one task and does not apply to larger building blocks.",
   "Separating concerns requires a layered architecture.",
   "If related aspects are separated, coupling can rise and cohesion can fall.",
   "Crosscutting concerns such as logging can be fully encapsulated in one building block so that no other building block is affected.",
   "Separated concerns can be changed and tested independently as long as the interfaces between them remain stable."
  ],
  "correct": [
   0,
   3,
   5
  ],
  "optExpl": [
   "Correct: The term concern is not limited to technical layers. Domain-oriented cuts also separate concerns and are often more stable against change.",
   "Wrong: That describes the single responsibility principle at class level. SoC is more general and applies at any granularity, from module to overall system.",
   "Wrong: Layers are only one of several structures for separating concerns. Components, subdomains or pipes & filters also separate concerns.",
   "Correct: A wrong cut distributes things that belong together across several building blocks, which then have to coordinate a lot. Separation is therefore no guarantee for loose coupling.",
   "Wrong: Crosscutting concerns by definition act in many building blocks. A central building block can bundle the implementation, but the call sites remain in the users.",
   "Correct: The benefit of separation depends on stable interfaces. If these change, changes cross the boundary despite the separation."
  ],
  "explanation": "SoC separates different concerns into their own building blocks, technically or by domain, at any granularity. Traps: equating SoC with SRP, tying it to layers, regarding crosscutting concerns as fully encapsulable, and overlooking the coupling costs of bad cuts."
 },
 "c3q16": {
  "q": "Which statement about the DRY principle (Don't Repeat Yourself) is correct?",
  "options": [
   "DRY applies to source code, not to documentation and configuration.",
   "Merging duplicated logic reduces coupling between the building blocks that previously contained copies.",
   "DRY concerns knowledge and decisions, not merely code that looks alike.",
   "DRY demands that similar code be merged syntactically even if it serves different purposes."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: DRY refers to knowledge and decisions, wherever they are recorded. Duplicate configuration values or documentation can also drift apart.",
   "Wrong: Shared logic creates a dependency of all users on the shared building block. DRY trades distributed copies for explicit coupling, so it can increase it.",
   "Correct: What matters is whether the same decision is recorded more than once. Similar code with a different domain background does not violate DRY.",
   "Wrong: Merging code without a shared domain meaning couples independent reasons for change. This is a misunderstanding of DRY."
  ],
  "explanation": "DRY means: every decision has one authoritative representation, in code, configuration and documentation. Traps: merging by appearance instead of meaning, and assuming that merging lowers coupling."
 },
 "c3q17": {
  "q": "A team provisionally builds several extension points for merely assumed requirements. Which principle argues most against this?",
  "options": [
   "Open/closed principle",
   "Information hiding",
   "Conceptual integrity",
   "YAGNI"
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: The OCP rather supports extension points than contradicts them. It says nothing about whether an assumed extension justifies the effort.",
   "Wrong: Information hiding conceals decisions that are likely to change. It does not justify building in advance, but it does not argue against speculative extension points either.",
   "Wrong: It demands solving similar things in a similar way. It does not answer whether functionality is needed.",
   "Correct: You Ain't Gonna Need It: functionality that is not needed increases complexity and maintenance effort without providing benefit. Assumed requirements do not justify advance work."
  ],
  "explanation": "YAGNI argues against functionality and flexibility in advance. Trap: OCP and information hiding sound like extensibility but do not justify speculative extension points."
 },
 "c3q18": {
  "q": "Which statements about architectural patterns are correct?",
  "options": [
   "Improving one quality through a pattern often comes at the expense of another.",
   "Within one system, different patterns can apply to different parts.",
   "A pattern is a ready-made implementation that can be taken over into other systems.",
   "Architectural patterns typically concern the structure of the overall system, design patterns rather that of individual building blocks.",
   "If a pattern is adapted to the context, it no longer counts as an application of that pattern.",
   "A pattern guarantees the quality goals it is known for."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Correct: Patterns are compromises: layers improve modifiability at the expense of runtime, pipes and filters improve replaceability at the expense of error handling.",
   "Correct: A system combines patterns, for example layers internally and publish/subscribe between subsystems. What matters is that they do not contradict each other.",
   "Wrong: A pattern is an abstract solution template, not an implementation. It has to be shaped for each context.",
   "Correct: Distinguishing by scope is common: architectural patterns structure the system, design patterns act within building blocks.",
   "Wrong: Patterns are regularly adapted (e.g. relaxed instead of strict layers). What matters is that the basic idea and its consequences are preserved.",
   "Wrong: A pattern raises the likelihood of achieving qualities but does not guarantee them; context and realization decide."
  ],
  "explanation": "Patterns are solution templates with advantages and disadvantages, combinable and adaptable, but no guarantee and no ready-made implementation. Trap: describing the structure is not the same as proving a quality."
 },
 "c3q19": {
  "q": "Which statement about the Model-View-Controller (MVC) pattern is correct?",
  "options": [
   "The view processes user input and changes the model directly; the controller only manages the presentation.",
   "MVC separates presentation, application and data layers into three layers that depend only downward.",
   "The controller contains the domain logic, the model only the data.",
   "The model does not know the view; the view obtains its data from the model and presents it.",
   "MVC is a distribution pattern that divides building blocks between client and server."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: Swapped: the controller accepts input and controls model and view; the view presents.",
   "Wrong: MVC separates interaction concerns (data, presentation, control), not technical layers; view and controller are also closely linked.",
   "Wrong: The model contains data and domain logic; the controller mediates between input, model and view.",
   "Correct: The model is independent of presentation, so several views can be put on the same model without changing it.",
   "Wrong: MVC structures the responsibilities of interaction. Where the parts run (client, server) is independent of it."
  ],
  "explanation": "MVC separates model (data and domain logic), view (presentation) and controller (control of the interaction). The model does not know the view. Traps: confusion with layers, swapping the roles of view and controller."
 },
 "c3q21": {
  "q": "Which statements about cyclic dependencies between building blocks are correct?",
  "options": [
   "Building blocks in a cycle can hardly be tested or reused independently of each other.",
   "Cycles within a layer are uncritical as long as the rules between the layers are observed.",
   "A cycle between two building blocks can be resolved by inverting one dependency via an abstraction.",
   "If direct calls are replaced by events, there is no cyclic dependency any more.",
   "Cyclic dependencies are problematic only for calls at runtime, not for dependencies between data types.",
   "A cycle can indicate an unfortunate cut; merging can then be the more sensible solution."
  ],
  "correct": [
   0,
   2,
   5
  ],
  "optExpl": [
   "Correct: To test A you need B and vice versa. Changes propagate in both directions, and reusing a single building block drags the other along.",
   "Wrong: The layering rule concerns dependencies between layers. Within a layer, building blocks in a cycle remain dependent on each other and can only be changed together.",
   "Correct: If A defines an interface that B implements, B depends on A rather than the other way round, and both dependencies point in the same direction (dependency inversion).",
   "Wrong: Events only remove the direct, static reference. Functionally, A and B remain dependent on the meaning and structure of each other’s messages, just less visibly.",
   "Wrong: Dependencies between data types or modules at development time also form cycles and hamper understanding, change and test. What matters is the dependency structure.",
   "Correct: If A and B belong together functionally, the cycle points to a wrong cut. Merging then increases cohesion instead of decoupling artificially via abstractions."
  ],
  "explanation": "Cycles hamper isolated testing, changing and reuse, regardless of layer or kind of dependency. Solutions: invert a dependency via an abstraction or merge the building blocks. Traps: events do not remove the functional dependency, belonging to a layer does not relativize the cycle."
 },
 "c3q23": {
  "q": "Which statements about programming against interfaces instead of concrete implementations are correct?",
  "options": [
   "An interface between caller and implementation eliminates the caller’s dependency on the semantics of the operations.",
   "Callers are decoupled from implementation details, but not from the interface contract.",
   "Implementations behind the same interface are interchangeable as soon as the signatures are compatible.",
   "Test doubles can be used instead of real dependencies.",
   "New implementations can be added without changing callers, provided they adhere to the interface contract.",
   "If the implementation is bound only at runtime, the caller no longer has a development-time dependency.",
   "Additional interfaces increase the number of types and introduce indirection, even if a second implementation never arises."
  ],
  "correct": [
   1,
   3,
   4,
   6
  ],
  "optExpl": [
   "Wrong: Semantics (effect, pre- and postconditions, error behaviour) are part of the contract. The caller still has to know them and depends on them.",
   "Correct: The caller depends only on the contract, not on data structures or helper classes of the implementation. If the contract itself changes, callers have to be adapted.",
   "Wrong: Compatible signatures are not enough. An implementation must also adhere to the agreed semantics; otherwise it is not substitutable despite matching types (Liskov).",
   "Correct: Behind the interface, a mock or stub can be used in tests. This enables isolated tests without a real database or external services.",
   "Correct: Whoever fulfils the contract can be added without callers changing. This corresponds to the open/closed principle.",
   "Wrong: The dependency on the interface itself still exists at development time; only the assignment to the concrete implementation happens later.",
   "Correct: Interfaces are not free: more types, more indirection and harder traceability. Without actual variation needs this is effort without benefit."
  ],
  "explanation": "Programming against interfaces decouples from implementation details, enables replacement, extension and test doubles, but has costs (indirection, more types). Traps: the dependency on the interface remains statically, and signature compatibility without matching semantics does not suffice for replacement."
 },
 "k6": {
  "q": "Which dependency direction does the statement describe from the point of view of the building block under consideration: efferent or afferent?",
  "categories": [
   "Efferent",
   "Afferent"
  ],
  "rows": [
   "The building block imports types from inventory, shipping and accounting.",
   "Twelve other building blocks call the interface of this building block.",
   "The building block can only be tested when several neighboring building blocks are available.",
   "A change to the interface forces adaptations in many other building blocks.",
   "A defect in the building block affects many other building blocks."
  ],
  "rowExpl": [
   "The building block uses others; the dependencies go out from it: efferent (exit). It would be afferent if other building blocks used it.",
   "Many building blocks depend on this one; the dependencies arrive at it: afferent (arrival). Efferent would be the opposite direction, i.e. what the building block uses itself.",
   "The test effort arises because the building block needs many others – these are outgoing, efferent dependencies. Many afferent dependencies, by contrast, make changes harder, not the isolated test.",
   "The adaptations arise at the users of the building block, so these are incoming, afferent dependencies. Many afferent dependencies make changes risky.",
   "Whoever depends on the building block is affected by its failure. These are incoming, afferent dependencies; defects spread against the direction of the dependency."
  ],
  "explanation": "Efferent = outgoing (the building block uses others), afferent = incoming (others use the building block). Many efferent dependencies make understanding, reuse and isolated testing harder; many afferent ones make changes risky. Trap: the terms are easily swapped – the direction always refers to the building block under consideration."
 },
 "k8": {
  "q": "Which of the following design principles are among the five SOLID principles?",
  "categories": [
   "Part of SOLID",
   "Not part of SOLID"
  ],
  "rows": [
   "Open/closed principle",
   "Information hiding",
   "Separation of concerns",
   "Liskov substitution principle",
   "Dependency inversion principle",
   "Law of Demeter"
  ],
  "rowExpl": [
   "The open/closed principle is the “O” in SOLID: building blocks should be open for extension but closed for modification. It belongs to SOLID.",
   "Information hiding is a general design principle (Parnas) and related to encapsulation, but it is none of the five letters of SOLID.",
   "Separation of concerns resembles the single responsibility principle but is a separate, more general principle and not part of SOLID.",
   "The Liskov substitution principle is the “L” in SOLID: subtypes must be usable wherever the base type is expected.",
   "The dependency inversion principle is the “D” in SOLID: abstractions should not depend on details, but details on abstractions.",
   "The Law of Demeter (talk only to direct collaborators) is a well-known coupling rule but does not belong to SOLID."
  ],
  "explanation": "SOLID consists of SRP, OCP, LSP, ISP and DIP. Typical trap: related, equally well-known principles (separation of concerns, information hiding, Law of Demeter) are wrongly counted as SOLID because they pursue goals similar to SRP or DIP."
 },
 "c3q24": {
  "q": "Which statements about the open/closed principle (OCP) are correct?",
  "options": [
   "The OCP can be implemented via polymorphism by adding new variants as further implementations of an interface.",
   "The OCP demands that delivered code is no longer changed.",
   "The OCP can only be achieved via inheritance; composition with interfaces does not fall under it.",
   "A building block is closed only against those changes that were anticipated during design.",
   "The OCP is a special case of the Liskov substitution principle."
  ],
  "correct": [
   0,
   3
  ],
  "optExpl": [
   "Correct: The using building block stays unchanged, new variants only add. Strategy is a typical pattern for this.",
   "Wrong: The principle refers to extensions, not to a ban on changes. Bugs and new requirements outside the intended variability still require changes.",
   "Wrong: Composition with delegation to exchangeable implementations also satisfies the OCP, often more flexibly than inheritance.",
   "Correct: There is no complete closure. The abstraction must hit the expected direction of change; an abstraction for extensions that never occur is effort without benefit.",
   "Wrong: The LSP concerns behavioral conformance of subtypes. It supports the OCP but is an independent principle and not its origin."
  ],
  "explanation": "OCP: extension by adding instead of modifying, related to expected axes of change. Traps: the OCP as a ban on changes, tying it to inheritance, mixing it up with the LSP, and building abstractions without need for change."
 },
 "c3q25": {
  "q": "Which statement about the interface segregation principle (ISP) is correct?",
  "options": [
   "Interfaces are cut according to the cohesion of the implementing class, not according to the needs of the clients.",
   "Clients should not depend on operations they do not use; interfaces are therefore cut according to client roles.",
   "Every operation should be placed in its own interface.",
   "Clients should depend on abstractions instead of concrete classes.",
   "The ISP leads to fewer but more comprehensive interfaces."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: The ISP argues from the clients' side. A cut from the implementation's view can keep burdening clients with operations they do not need.",
   "Correct: Narrow, role-specific interfaces prevent changes to unused operations from affecting clients. A class can implement several of them.",
   "Wrong: That would be an exaggerated interpretation. The aim is role-specific groups of related operations, not one-operation interfaces.",
   "Wrong: That is the dependency inversion principle. The ISP governs how large and how tailored the abstraction is.",
   "Wrong: It typically leads to more and narrower interfaces. The number of interfaces rises, the dependency of each client falls."
  ],
  "explanation": "ISP: clients depend only on what they use; interfaces are cut role-specifically. Traps: cutting from the implementation's view, confusion with the DIP, and exaggeration down to one-operation interfaces."
 },
 "c3q26": {
  "q": "Which statement about the Liskov substitution principle (LSP) is correct?",
  "options": [
   "A subtype may weaken the postconditions of the base type as long as the signatures are compatible.",
   "A subtype may weaken preconditions and strengthen postconditions.",
   "The LSP is fulfilled if the compiler accepts the subtype relation.",
   "The LSP concerns class inheritance; implementations of interfaces are excluded.",
   "A subtype must adopt all operations of the base type unchanged and may only add."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: Postconditions may only be strengthened. If the subtype weakens them, a caller can no longer rely on the guarantees of the base type.",
   "Correct: A subtype may accept more and guarantee more than the base type. Every caller that expects the base type is then still served correctly.",
   "Wrong: Compilers check signatures, not behavior. A subtype can be type-correct and still break the expected behavior.",
   "Wrong: Every subtype relation is affected, including interface implementations. A caller may rely on the contract of the interface.",
   "Wrong: Overriding is allowed as long as the contractually guaranteed behavior is preserved. The LSP demands behavioral conformance, not immutability."
  ],
  "explanation": "LSP: a subtype must be able to take the place of the base type in a behavior-conforming way; do not strengthen preconditions, do not weaken postconditions. Traps: swapping the direction, equating type correctness with behavioral conformance, and restricting the principle to class inheritance."
 },
 "c3q27": {
  "q": "Which statement about publish/subscribe is correct?",
  "options": [
   "An event is processed by exactly one of the registered subscribers.",
   "There is no dependency between publisher and subscriber.",
   "Publishers do not know their subscribers; the event type and format remain shared.",
   "The publisher waits for the processing confirmation of the subscribers before continuing."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: This describes a queue with competing consumers (point-to-point). With publish/subscribe, all interested subscribers receive the event.",
   "Wrong: The business dependency remains: both must agree on event types, format and meaning. Only the direct knowledge disappears.",
   "Correct: The publisher publishes without addressing receivers; coupling exists via the event as a contract.",
   "Wrong: That would be synchronous communication. Publish/subscribe is typically asynchronous; the publisher continues after publishing."
  ],
  "explanation": "Publish/subscribe decouples sender and receiver with regard to knowledge and time, not with regard to the event format. Traps: equating it with point-to-point queues, complete disappearance of dependency and synchronous confirmation."
 },
 "c3q28": {
  "q": "Which statement about the client-server pattern is correct?",
  "options": [
   "A building block cannot be server and client at the same time; the roles are mutually exclusive.",
   "The initiative typically comes from the client; the server does not need to know its clients in advance.",
   "Client and server must run on separate machines.",
   "The domain logic must reside in the server because clients only take over the presentation."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: Roles relate to an interaction. A building block can be a server for its users and at the same time a client of another service, e.g. a web service with a database.",
   "Correct: Clients call services via the server’s interface; the server reacts and needs no knowledge of its clients.",
   "Wrong: Client and server are logical roles; they can run in the same process or on the same machine. Distribution is an option, not a prerequisite.",
   "Wrong: The pattern does not determine how logic is distributed. Clients can also contain domain logic (rich client); that is a trade-off."
  ],
  "explanation": "Client-server describes the roles in an interaction: clients use services of a server via its interface. Traps: roles as a fixed assignment or distribution on machines, and domain logic only on the server."
 },
 "c3q29": {
  "q": "Which statements about the heuristic \"composition over inheritance\" are correct?",
  "options": [
   "Composition couples to the public interface of the parts, inheritance additionally to their internals.",
   "Composition requires less delegation code than inheritance.",
   "Inheritance remains sensible if the subtype can replace the base type in a behavior-conforming way.",
   "The heuristic excludes inheritance and demands replacing subtype relations by interfaces.",
   "Composition with delegation prevents polymorphism because there is no base type relation.",
   "With composition, behavior can usually be exchanged at runtime, whereas with inheritance it is mostly fixed at compile time."
  ],
  "correct": [
   0,
   2,
   5
  ],
  "optExpl": [
   "Correct: A subclass sees protected details of the superclass and can depend on them (whitebox reuse). With composition only the contract of the interface is visible.",
   "Wrong: Composition requires passing calls on to the parts explicitly, whereas inheritance takes over methods automatically. More delegation code is a typical drawback.",
   "Correct: The heuristic is a precedence rule, not a ban. Where a real subtype relation in the sense of the LSP exists, inheritance is a legitimate choice.",
   "Wrong: Inheritance is not excluded but only ranked lower. Interfaces are also subtype relations and can be combined with composition.",
   "Wrong: Polymorphism arises via shared interfaces. A composed part can be exchanged behind an interface, even without an inheritance relation.",
   "Correct: A referenced part can be replaced, for example via Strategy. The superclass of an instance, however, is fixed with the class definition."
  ],
  "explanation": "Composition over inheritance means: prefer reuse through composition because it couples more weakly and allows runtime exchange; the price is more delegation code. Traps: regarding inheritance as forbidden and tying polymorphism to inheritance."
 },
 "c3q30": {
  "q": "Which statements about a stateless service are correct?",
  "options": [
   "With sticky sessions a service remains stateless as long as requests of a session land on the same instance.",
   "Requests can be distributed to any instance, which eases load balancing and horizontal scaling.",
   "Each request carries the information required for processing itself or refers to it.",
   "Statelessness reduces the message volume because requests become smaller.",
   "Statelessness means the service does not store any data permanently.",
   "The required state resides outside the service and can become a bottleneck or failure risk there."
  ],
  "correct": [
   1,
   2,
   5
  ],
  "optExpl": [
   "Wrong: Sticky sessions tie state to an instance; the service is then stateful, with the known drawbacks for failure and scaling.",
   "Correct: Because no instance holds session knowledge, any instance can handle any request; instances can be added or replaced.",
   "Correct: Information travels with the request (token, IDs) or is fetched from external storage; the instance does not have to know anything about earlier requests.",
   "Wrong: Usually the effort per request grows because context (token, parameters) is sent along every time.",
   "Wrong: The service can persist data (e.g. a database); stateless refers to session state between requests, not to storage.",
   "Correct: The state moves to a database, cache or client. There it must be available and scalable; the responsibility is shifted, not eliminated."
  ],
  "explanation": "Stateless services move state outward and ease load balancing and scaling; the external store then bears the load. Traps: sticky sessions, equating it with missing persistence, and smaller messages."
 },
 "c3q32": {
  "q": "Which statement about timeout, retry and circuit breaker for calls to remote services is correct?",
  "options": [
   "A circuit breaker automatically repeats failed calls until the service responds.",
   "A timeout makes repetitions harmless even for non-idempotent operations.",
   "An open circuit breaker forwards calls in order to test the state of the partner.",
   "Repetitions without limit and waiting time can put additional load on an already overloaded partner.",
   "Retry ensures that a failed call is executed at most once."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: That describes retry. A circuit breaker interrupts calls to an obviously disturbed service so that it can recover and callers are not blocked.",
   "Wrong: A timeout only limits the waiting time. Whether the operation was executed at the partner after all remains unknown; repeating non-idempotent operations can trigger them twice.",
   "Wrong: In the open state calls are rejected immediately (fail fast). Trial calls only occur in the half-open state after a waiting period.",
   "Correct: Unthrottled retries create additional load and can aggravate a failure. They are therefore combined with an upper limit, waiting time (backoff) and often a circuit breaker.",
   "Wrong: Retry rather leads to multiple execution (at least once). At most once would mean not repeating after a failure."
  ],
  "explanation": "Timeout, retry and circuit breaker deal with failures of remote calls but have side effects: retries need idempotency and limits, the circuit breaker rejects calls in the open state. Traps: swapping retry and circuit breaker, and confusing timeout with protection by idempotency."
 },
 "k9": {
  "q": "Does the statement describe rather synchronous or asynchronous communication between building blocks?",
  "categories": [
   "Synchronous",
   "Asynchronous"
  ],
  "rows": [
   "The caller immediately receives a future object and evaluates the result later.",
   "Sender and receiver must both be running at the time of communication.",
   "The receiver may be offline when sending; the message is delivered later.",
   "If the receiver fails, the call fails immediately at the sender.",
   "A client puts a message into a queue and continues its work."
  ],
  "rowExpl": [
   "The caller does not block; the result is only available later. From the caller’s point of view this is asynchronous, regardless of how the technology below works.",
   "The caller waits for the direct response and therefore needs a reachable receiver. Simultaneous availability is the hallmark of synchronous communication (temporal coupling).",
   "An intermediate store (queue, broker) decouples sending and processing in time, hence asynchronous. With a synchronous call the receiver would have to be reachable.",
   "The sender learns of the failure immediately because it waits for the response. This is a typical characteristic of synchronous calls; asynchronously the sender does not notice the failure at first.",
   "The client does not wait for processing; putting the message into the queue is decoupled from it in time. This is asynchronous."
  ],
  "explanation": "What matters is whether the caller waits for the result and whether both sides must be available at the same time. Synchronous = waiting and temporal coupling; asynchronous = decoupling in time, result later. Trap: the technology used does not decide, the waiting from the caller’s point of view does."
 },
 "c3q33": {
  "q": "Which statement about the facade design pattern is correct?",
  "options": [
   "It replaces the interfaces of the subsystem so that clients can no longer use it directly.",
   "It has the same interface as its subsystem object and controls access to it.",
   "It gives clients simplified access but does not necessarily rule out direct access to the subsystem.",
   "It makes algorithms of a subsystem exchangeable at runtime.",
   "It adapts an existing interface to an interface expected by the client."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: The facade adds a convenient access path to the subsystem; direct access is not technically prevented.",
   "Wrong: This describes the proxy. The facade has a different, usually simpler interface than the classes behind it.",
   "Correct: The facade reduces complexity and client dependencies on the subsystem. Whether direct access is allowed is an additional rule.",
   "Wrong: This describes strategy. The facade bundles calls but does not exchange behavioral variants.",
   "Wrong: This describes the adapter. The facade defines a new, simpler interface without fulfilling a given target contract."
  ],
  "explanation": "The facade offers simplified, uniform access to a subsystem. It does not adapt its interface to a target contract (adapter), does not control access (proxy) and does not exchange algorithms (strategy). Direct access to the subsystem remains possible."
 },
 "c3q34": {
  "q": "Which statements about modules in the sense of modularization are correct?",
  "options": [
   "In object-oriented systems a module corresponds to exactly one class.",
   "A module encapsulates design decisions behind its interface.",
   "A module should be cut so that it is used by as many other modules as possible.",
   "Modules can consist hierarchically of submodules.",
   "A module is always an independently deployable unit."
  ],
  "correct": [
   1,
   3
  ],
  "optExpl": [
   "Wrong: A module is a unit with a defined interface and can comprise many classes. Equating it with the class narrows the term.",
   "Correct: The module is the unit where information hiding applies: users know the interface, the decisions behind it may change.",
   "Wrong: What matters for the cut are belonging together and reasons for change, not the number of users. A heavily used module becomes a change risk for many.",
   "Correct: Modularization can be applied recursively: a module can internally be structured into modules which in turn have interfaces.",
   "Wrong: Modularization concerns the logical structure. Several modules can be delivered in one artifact, and a module can also span several artifacts."
  ],
  "explanation": "A module bundles things that belong together behind an interface, encapsulates decisions and can itself consist of modules. Traps: module equals class, module equals deployment unit, and cutting by usage frequency instead of belonging together."
 },
 "c3q35": {
  "q": "Which statements about the trade-off between a modular monolith and microservices are correct?",
  "options": [
   "A modular monolith with clear module boundaries can ease a later split into services.",
   "The complexity of individual services decreases, so the overall complexity of the system decreases as well.",
   "Transactions across service boundaries are more costly than local transactions in the monolith.",
   "Microservices can only be changed independently if they share a common database.",
   "Microservices enable independent deployment and scaling but shift complexity into operations and communication.",
   "Adhering to module boundaries speaks for microservices because it cannot be enforced technically in the monolith."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Correct: Clear module boundaries and interfaces in the monolith are good preparation if parts have to be extracted later.",
   "Wrong: Complexity shifts into distribution, network, operations and consistency. Overall complexity typically increases.",
   "Correct: Locally an ACID transaction suffices; across services you need patterns such as sagas or accept eventual consistency, which affects the business domain.",
   "Wrong: A shared database couples the services via data and prevents precisely independent changes.",
   "Correct: Independence and targeted scaling are offset by higher effort for operations, monitoring, versioning and fault tolerance.",
   "Wrong: Module boundaries can also be enforced in the monolith, e.g. by module systems, package rules and automated architecture checks. A network boundary is not necessary."
  ],
  "explanation": "Microservices trade independence for distribution complexity and consistency problems; a modular monolith is often a sufficient compromise. Traps: overall complexity does not decrease, a shared database contradicts independence, module boundaries are enforceable without a network."
 },
 "c3q36": {
  "q": "Which statements about the selection and combination of architectural patterns are correct?",
  "options": [
   "A proven pattern lowers the risk so far that its effects no longer need to be assessed.",
   "Patterns often address opposing qualities; the selection is guided by the prioritized quality goals.",
   "Patterns can be combined as long as their rules do not contradict each other.",
   "If a pattern improved maintainability in comparable systems, this also holds for one’s own system.",
   "The same pattern can improve a quality in one context and degrade it in another.",
   "Patterns should be chosen before the quality goals are fixed in order to keep room for maneuver."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Wrong: Even proven patterns have drawbacks whose weight depends on the context. Assessment against one’s own requirements remains necessary.",
   "Correct: Because patterns are compromises, the most important quality goals decide which drawbacks are acceptable.",
   "Correct: Combinations are common, e.g. layers within a service and publish/subscribe between services. Contradictory rules (e.g. calls upward in strict layers) exclude each other.",
   "Wrong: The context (size, load, team, environment) may differ; experience from other systems is an indication, not proof.",
   "Correct: A pattern works only in a suitable context; an unsuitable pattern, e.g. layers for strictly runtime-critical processing, degrades qualities.",
   "Wrong: Quality goals are the basis of decision for the choice of pattern. Without them one cannot judge which pattern fits."
  ],
  "explanation": "Pattern selection is a trade-off against prioritized quality goals in the concrete context. Combining is common but not arbitrary. Traps: being proven does not replace assessment, experience is not transferable, choosing patterns before goals."
 },
 "c3q37": {
  "q": "Which statements about bounded contexts in domain-driven design are correct?",
  "options": [
   "The term “customer” must be modelled identically in all bounded contexts so that the overall system remains consistent.",
   "Domain boundaries can cut across technical layers; a bounded context often comprises parts of several layers.",
   "Within a bounded context the shared domain language has an unambiguous meaning; the same term can mean something else elsewhere.",
   "Bounded contexts correspond to the technical layers of the application (e.g. presentation, application logic, data storage).",
   "Every bounded context must be implemented as an independently deployable microservice.",
   "At the boundaries between bounded contexts a translation between the respective models is often required."
  ],
  "correct": [
   1,
   2,
   5
  ],
  "optExpl": [
   "Wrong: Quite the opposite: the same term may be modelled differently in different contexts; each context has its own model.",
   "Correct: The cut follows the domain, not the technical layering. This results in vertical slices.",
   "Correct: A bounded context delimits a model with its domain language in which the terms are unambiguous.",
   "Wrong: Layers are a technical division, bounded contexts a domain one. The two partitionings are orthogonal.",
   "Wrong: The delimitation is a domain structuring decision. Implementation as modules of one application is equally possible.",
   "Correct: Because terms may be modelled differently, data and meanings must be mapped at context boundaries."
  ],
  "explanation": "Bounded context = domain-delimited model with its own domain language. It cuts across layers, need not be a microservice, and translation happens at its boundaries. Traps: enterprise-wide uniform terms, equating it with layers."
 },
 "c3q38": {
  "q": "Which statements about encapsulation are correct?",
  "options": [
   "Encapsulation bundles data and operations and controls access to the state via an interface.",
   "As soon as all attributes are non-public, the state remains consistent by itself.",
   "If getters and setters mirror the internal structure 1:1 to the outside, information hiding is largely missed despite private attributes.",
   "Encapsulation forbids building blocks from communicating via messages or events.",
   "Encapsulation can be applied at different granularities, not only to classes."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Correct: That is the core idea: the state is changed only via defined operations, which can enforce consistency rules.",
   "Wrong: Hidden attributes only prevent direct access. Consistency arises only when the operations check and enforce invariants.",
   "Correct: The structure is then part of the interface and can no longer be changed without consequences for users. Encapsulation without a hidden decision achieves little.",
   "Wrong: Encapsulation governs access to the state, not the form of communication. Messages and events are interfaces and compatible with encapsulation.",
   "Correct: Modules, components or services also encapsulate their state behind an interface. The principle is not tied to the class level."
  ],
  "explanation": "Encapsulation is the means of bundling state and operations and making them accessible only via the interface; it is ineffective if the interface mirrors the internals 1:1. Traps: equating private attributes with consistency, confusing encapsulation with a ban on communication, and restricting it to classes."
 },
 "c3q39": {
  "q": "How do adapter and facade differ most?",
  "options": [
   "The adapter controls access to the adapted object, the facade does not.",
   "The adapter extends an object dynamically with responsibilities, the facade does not.",
   "The adapter fulfills a given target interface, the facade defines a new, simplified interface.",
   "The adapter bundles several subsystem classes into a simple interface, the facade adapts interfaces."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: Access control is the task of the proxy. The adapter only adapts the interface.",
   "Wrong: This describes the decorator. The adapter changes the interface, not the functionality.",
   "Correct: With the adapter the client determines the expected interface, with the facade the provider defines a convenient interface.",
   "Wrong: The roles are swapped: bundling and simplifying is the facade task, adapting that of the adapter."
  ],
  "explanation": "The adapter fulfills a target interface expected by the client on the basis of an existing, different interface. The facade instead defines a new, simplified interface for a subsystem. Both are structurally wrappers; the difference is intent. Access control (proxy) and dynamic extension (decorator) are other patterns."
 },
 "c3q40": {
  "q": "Which statements about goals and consequences of modularizing a grown system are correct?",
  "options": [
   "The goal of modularization is that no dependencies between building blocks remain.",
   "With a good cut, changes remain limited to a few building blocks.",
   "Modularization serves primarily to distribute building blocks across several processes or machines.",
   "Modularization can cause runtime costs, for example through additional calls via interfaces.",
   "Teams can work largely independently once the interfaces between modules are agreed."
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Wrong: Building blocks have to work together, so dependencies remain necessary. The goal is to limit them to defined interfaces and keep them minimal.",
   "Correct: Related decisions sit in one module so that changes act locally. With a bad cut, changes ripple through many modules.",
   "Wrong: Modularization is a logical structuring. Distribution is a separate decision that neither requires modules nor replaces them.",
   "Correct: Indirection via interfaces and calls across module boundaries can cost performance. This is a trade-off against modifiability.",
   "Correct: Clearly defined interfaces allow parallel development. The coordination shifts to the interfaces."
  ],
  "explanation": "Modularization limits changes, enables parallel work and exchangeability, but costs interface effort and possibly runtime. Traps: freedom from dependencies as a goal, and confusing modularization with distribution."
 },
 "c3q41": {
  "q": "A building block, e.g. a logging library, is used by a very large number of other building blocks. Which statements are correct?",
  "options": [
   "In terms of the stability metric, the building block is unstable because it is used by many building blocks.",
   "Replacing duplicated code with a shared building block can increase coupling in the system.",
   "Generalizing for many clients tends to increase the building block’s complexity.",
   "The building block’s efferent coupling is high because many building blocks use it.",
   "A widely used building block should be implemented as concretely as possible so that it is easier to change.",
   "Changes to the building block’s interface are laborious because they affect all clients."
  ],
  "correct": [
   1,
   2,
   5
  ],
  "optExpl": [
   "Wrong: Many clients (high afferent coupling) make a building block stable in the sense of hard to change. It is many outgoing dependencies that make it unstable.",
   "Correct: Fewer duplicates do not mean less coupling. All clients now depend on the same building block, and changes to it affect them jointly.",
   "Correct: To serve different clients, a building block needs configuration, variants and extension points. This generality costs complexity.",
   "Wrong: Swapped. That many building blocks use it is incoming (afferent) coupling. Efferent counts the dependencies the building block itself has to the outside.",
   "Wrong: Widely used, stable building blocks in particular should rather be abstract so that they can be extended without being changed. A concrete implementation makes adaptation harder with many clients.",
   "Correct: Every change to interface or contract requires adaptation or coordination for all clients. Therefore the interface should be stable and versioned."
  ],
  "explanation": "Extensive reuse increases afferent coupling, demands stable interfaces and usually leads to more general, more complex building blocks. Fewer duplicates do not equal less coupling. Traps: swapping efferent and afferent, confusing stable with unproblematic, concrete instead of abstract."
 },
 "k12": {
  "q": "Analyzing an evolved system, you notice these characteristics. Do they promote maintainability or harm it?",
  "categories": [
   "Promotes maintainability",
   "Harms maintainability"
  ],
  "rows": [
   "A widely used building block whose interface is versioned and rarely changed.",
   "An abstraction layer that has only one caller and is never replaced.",
   "A central building block that almost all others depend on and that changes frequently.",
   "An interface formulated in business terms rather than in internal data structures.",
   "Technical helper functions without recognizable relation are bundled in a “Util” building block.",
   "Dependencies run only downwards along a layering."
  ],
  "rowExpl": [
   "Even a heavily depended-upon building block is manageable if its interface is stable and versioned. Changes reach clients in a controlled and rare manner, which promotes maintainability.",
   "A layer without variation need adds types and indirection without easing changes. It hampers understanding and traceability and harms maintainability.",
   "Every change to a central, heavily used building block affects almost all clients. Frequent changes at exactly this point make the system change-prone, which harms.",
   "Business terms in the interface hide internal structures (information hiding). Internal changes thus do not propagate outwards, which promotes maintainability.",
   "A catch-all building block without internal relation has low cohesion. Changes affect an unpredictable number of clients, and the building block grows uncontrolled, which harms.",
   "A dependency direction without cycles allows building blocks to be understood, changed and tested individually. This promotes maintainability."
  ],
  "explanation": "Stable, versioned interfaces, business-oriented interfaces and acyclic, directed dependencies promote maintainability. A frequently changed central building block, catch-all building blocks with low cohesion and abstraction without variation need harm it. Trap: many clients alone are not a problem; the rate of change is decisive."
 },
 "c3q42": {
  "q": "Which statement about the relationship between domain and technical structuring of a system is most accurate?",
  "options": [
   "Every domain building block belongs in exactly one technical layer; the domain partitioning follows the layering.",
   "A purely technical split (UI, logic, data) minimises coupling for domain changes because domain logic is bundled per layer.",
   "Domain building blocks often cut across technical layers, so a domain building block may contain parts of several layers.",
   "With a domain cut, technical structuring such as layers falls away because the domain fully dictates the structure.",
   "Building blocks should be based on the existing database schema because it already reflects the domain."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: Domain building blocks typically reach through several layers. Layering is a technical division and does not reflect the domain.",
   "Wrong: A domain change then usually touches all layers. A domain cut bundles changes that belong together in one building block.",
   "Correct: The two divisions are orthogonal. Typical are domain cuts within which technical layers or structures recur as needed.",
   "Wrong: Technical requirements and qualities still demand technical structural decisions. Domain and technical aspects complement each other.",
   "Wrong: The database schema is a technical artefact and often reflects domain relationships only partially."
  ],
  "explanation": "Domain cut and technical layering are orthogonal: domain building blocks often run through several layers, yet technical structures remain necessary. Traps: equating domain blocks with layers and cutting by database schema."
 },
 "c3q43": {
  "q": "What is Miller’s number (7±2) most likely cited as an argument for when decomposing a system?",
  "options": [
   "A system should contain at most 7±2 building blocks.",
   "An interface should offer at most 7±2 operations.",
   "Per decomposition or presentation level only a comprehensible number of elements should occur; it is an argument for hierarchical decomposition.",
   "A design team should comprise at most 7±2 people.",
   "A building block with more than nine sub-building blocks is demonstrably badly designed."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: The number does not limit the overall system. Through hierarchical decomposition a system can contain many more building blocks overall.",
   "Wrong: The number concerns comprehensibility per level of consideration, not an upper limit for interface operations.",
   "Correct: Short-term memory grasps only a few elements at once; hence one structures hierarchically. It is a rule of thumb, not a hard limit.",
   "Wrong: The number comes from cognitive psychology and concerns elements in short-term memory, not team size.",
   "Wrong: It is a rule of thumb that is itself not considered universal. More sub-building blocks can be justified."
  ],
  "explanation": "Miller’s number (7±2) is a rule of thumb for comprehensibility per level and an argument for hierarchical decomposition. It is not a hard limit for modules, operations or team size."
 },
 "c3q44": {
  "q": "Which statements about the interplay between design and requirements are correct?",
  "options": [
   "Design decisions can raise questions about the requirements and change them.",
   "Feedback on a design is reliable only once all quality requirements have been quantified.",
   "Even an incomplete design is suitable for feedback if the open points are identified.",
   "A reference architecture reduces the need to clarify requirements because it already contains proven decisions.",
   "New technical insights can lead to decisions being revised even if the requirements have not changed.",
   "Changes to the requirements after the start of design show that the requirements analysis was inadequate."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Correct: Design and requirements clarification influence each other. Design ideas uncover gaps or conflicts in the requirements, and clarified requirements change the design.",
   "Wrong: Qualitative or preliminary quality requirements also allow meaningful feedback, e.g. on scenarios or risks. Waiting for quantification delays feedback exactly where it helps most.",
   "Correct: If it is clear what is still open, feedback can be obtained specifically on an unfinished design. This reduces the risk of building on wrong assumptions.",
   "Wrong: A reference architecture does not replace clarifying requirements. Whether it fits quality goals and constraints can only be judged with the requirements.",
   "Correct: Decisions rest on assumptions. If prototypes, measurements or experience show that they do not hold, a revision is justified even without changed requirements.",
   "Wrong: In practice, requirements change even after good analysis, e.g. due to market changes or new knowledge. A design must anticipate this and be able to absorb changes."
  ],
  "explanation": "Architecture design is iterative: design and requirements influence each other, feedback is useful even on unfinished work, and new insights are a legitimate reason for revision. Traps: quantification as a precondition for feedback, a reference architecture as a substitute for clarification, requirement changes as analysis failures."
 },
 "c3q45": {
  "q": "Which statements about the goal “loose coupling” are correct?",
  "options": [
   "Loose coupling and high cohesion are two names for the same design goal.",
   "Loose coupling can cause costs, e.g. through additional indirection and flows that are harder to trace.",
   "Loose coupling is achieved by operating building blocks on separate servers.",
   "Loose coupling means that building blocks need to know as little as possible about each other, not that they have no relationship.",
   "Loose coupling makes it easier to test building blocks in isolation.",
   "Every additional decoupling improves modifiability without impairing other quality attributes."
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Wrong: Coupling concerns relationships between building blocks, cohesion the unity within a building block. They often favour each other but are separate criteria.",
   "Correct: Decoupling via interfaces, mediators or events costs effort, creates indirection and makes flows harder to trace. The benefit has to justify the cost.",
   "Wrong: Physical distribution does not change the functional dependency and introduces additional coupling, e.g. via network, availability and data formats.",
   "Correct: Without relationships there would be no cooperation. Loose coupling limits what building blocks have to know and assume about each other.",
   "Correct: Few, well-defined dependencies can be replaced by test doubles in tests, so that a building block can be checked in isolation.",
   "Wrong: Additional decoupling usually comes at the expense of simplicity, traceability or performance. It is a trade-off, not an end in itself."
  ],
  "explanation": "Loose coupling means little mutual knowledge, not no relationship. It eases change and isolated testing but costs indirection and traceability. Traps: confusion with cohesion, physical distribution as decoupling, decoupling without counter-effects."
 },
 "c3q46": {
  "q": "Does the respective relationship lead to rather tight or rather loose coupling?",
  "categories": [
   "Rather tight coupling",
   "Rather loose coupling"
  ],
  "rows": [
   "Two building blocks exchange data via a shared database table.",
   "A building block receives the dependency it needs as an interface from outside.",
   "A building block itself instantiates a concrete class of another building block.",
   "Two services exchange data via a versioned message format without sharing classes.",
   "A building block works only if another one has been initialized beforehand.",
   "A building block uses from another one only one operation of a narrow, self-defined interface."
  ],
  "rowExpl": [
   "A shared table makes the schema a shared interface. Every schema change affects both building blocks, and internals are not hidden. That is tight coupling.",
   "The building block knows only the interface, not the concrete implementation (dependency injection). Coupling stays limited to the contract and is rather loose.",
   "Creating a concrete class binds to its type and constructor. This is the coupling kind “creation” and rather tight, even if it occurs in only one place.",
   "The versioned message format is the only shared contract; classes and internals are not shared. That is rather loose, though not free of dependency.",
   "Assuming an initialization order is temporal coupling. It is often not visible in the code and binds to the temporal behaviour of the other building block.",
   "A narrow, self-defined interface limits what the building block must know about the other and is easy to replace. That is rather loose coupling."
  ],
  "explanation": "Tight coupling arises from shared internals (common schema), creation of concrete classes and temporal assumptions. Loose coupling arises when building blocks share only a narrow, explicit contract. Trap: a single instantiation or temporal assumption seems harmless but is a real dependency."
 },
 "c3q47": {
  "q": "Direct method calls are replaced by messages via a broker. Which statements about coupling are correct?",
  "options": [
   "Sender and receiver no longer need to be available at the same time but remain coupled via the message format.",
   "The broker takes responsibility for changes to the message format so that receivers remain unaffected.",
   "Since the sender no longer knows the receivers, it can change messages semantically without coordination.",
   "The dependency becomes harder to see in static dependency analyses of the code.",
   "Coupling changes from static to dynamic and thereby decreases.",
   "The broker as an additional component introduces a new runtime dependency."
  ],
  "correct": [
   0,
   3,
   5
  ],
  "optExpl": [
   "Correct: The broker decouples in time (asynchronous delivery). However, format and meaning of the message remain a shared dependency of sender and receiver.",
   "Wrong: A broker forwards messages but generally does not translate them. If the sender changes the format, the receiver breaks anyway.",
   "Wrong: Even without direct knowledge, receivers depend on the meaning of the message. Semantic changes must therefore be coordinated or backward-compatible.",
   "Correct: The relationship arises only at runtime via topics, configuration or message formats and is absent from imports and call graphs. It must therefore be documented explicitly.",
   "Wrong: Dynamic coupling is not automatically lower. It is often merely less visible; the functional dependency remains.",
   "Correct: The broker is an additional building block whose availability and configuration are now presupposed for communication. This is an additional runtime dependency."
  ],
  "explanation": "A broker decouples in time and technically but moves dependencies to runtime and hides them from static analysis; functional and format dependencies remain, and a dependency on the broker is added. Trap: equating “dynamic” with “loose”."
 },
 "c3q48": {
  "q": "Building block A has twelve incoming and no outgoing dependencies. Which statement most likely applies?",
  "options": [
   "A is unstable because its interface has to change frequently due to the many clients.",
   "A has high efferent coupling because it is used by many.",
   "In terms of the stability metric, A is stable: changes to its interface are laborious because they affect twelve clients.",
   "A is stable, meaning mature and sufficiently tested.",
   "A should be implemented as concretely as possible so that changes remain confined to A."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: Instability results from many outgoing dependencies. A has none, and twelve clients who rather resist frequent changes.",
   "Wrong: Swapped. Incoming dependencies form afferent coupling. A has no outgoing (efferent) dependencies.",
   "Correct: Many incoming and no outgoing dependencies mean maximum stability in the sense of hard to change. Every interface change affects all clients.",
   "Wrong: “Stable” here is a statement about the coupling structure, not about quality or maturity. A widely used building block can still be defective.",
   "Wrong: Stable building blocks in particular should rather be abstract so that they remain extensible without being changed. Implemented concretely, they make necessary changes harder with twelve clients."
  ],
  "explanation": "Afferent means incoming: many clients make a building block stable in the sense of hard to change, which is why it should rather be abstract. Traps: swapping afferent and efferent, reading “stable” as mature, choosing a concrete instead of an abstract design."
 },
 "c3q49": {
  "q": "Which statements about cross-cutting concepts are correct?",
  "options": [
   "Cross-cutting concepts do not stand alone; decisions in one affect others.",
   "Cross-cutting concepts should be defined only once the first building blocks are implemented so that they reflect real requirements.",
   "Cross-cutting concepts inevitably reduce coupling between the affected building blocks.",
   "A business result displayed in several places is a cross-cutting concept.",
   "A developed concept can be reused in other systems.",
   "Energy efficiency can be the subject of a cross-cutting concept."
  ],
  "correct": [
   0,
   4,
   5
  ],
  "optExpl": [
   "Correct: Example: choosing asynchronous communication affects error handling, persistence and GUI.",
   "Wrong: Late definition leads to inconsistent solutions and costly rework. Concepts are agreed early and refined iteratively.",
   "Wrong: They promote consistency, but can create new shared dependencies and even increase coupling.",
   "Wrong: Multiple use of a result does not make an overarching rule; a cross-cutting concept regulates how many building blocks implement an aspect.",
   "Correct: Concepts are independent of the concrete business context and can be transferred between systems.",
   "Correct: It affects communication, GUI and concurrency alike and needs overarching rules."
  ],
  "explanation": "Cross-cutting concepts regulate recurring aspects uniformly, depend on each other and are reusable across projects. They should be defined early, do not automatically reduce coupling, and a business result shown in several places is not yet a cross-cutting concept."
 },
 "c3q50": {
  "q": "What does choosing a BASE-oriented data store instead of an ACID system most likely mean?",
  "options": [
   "BASE gives up durability so that acknowledged writes may be lost.",
   "BASE is the consistency model of relational databases, ACID that of NoSQL systems.",
   "The application must tolerate temporarily inconsistent reads, in return the store remains available even when nodes fail.",
   "BASE offers stricter isolation than ACID, especially for distributed transactions."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: It is not durability that is relaxed but consistency between replicas. Persistent storage remains a goal.",
   "Wrong: Terms swapped: ACID characterizes classic relational systems, BASE many distributed NoSQL stores.",
   "Correct: Replicas converge only after some time (eventual consistency). Availability takes precedence over immediate consistency.",
   "Wrong: BASE relaxes consistency and isolation guarantees in favor of availability and scalability."
  ],
  "explanation": "BASE (basically available, soft state, eventually consistent) puts availability above immediate consistency. The application must tolerate temporarily inconsistent reads. BASE is neither stricter than ACID nor tied to NoSQL, and it does not fundamentally give up durability."
 },
 "c3q51": {
  "q": "What does the CAP theorem state for a distributed system?",
  "options": [
   "When a network partition occurs, the system must choose between consistency and availability.",
   "CAP describes the trade-off between latency and consistency also in normal operation without a partition.",
   "With sufficient replication and redundancy all three properties can be guaranteed simultaneously.",
   "Consistency, availability and partition tolerance always permit only two properties, regardless of whether a partition occurs.",
   "A distributed system can drop partition tolerance and then retains consistency and availability simultaneously."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Either requests are rejected (consistency) or answered with possibly stale data (availability). Without a partition the conflict does not arise.",
   "Wrong: This describes an extension (PACELC). CAP concerns behavior during a partition.",
   "Wrong: Redundancy reduces failures but does not remove the trade-off during a partition.",
   "Wrong: The conflict exists only during a partition; in normal operation consistency and availability are achievable.",
   "Wrong: Partitions inevitably occur in networks; partition tolerance is therefore not an optional property."
  ],
  "explanation": "Network partitions cannot be ruled out in distributed systems. When one occurs, one must choose between consistency and availability; without a partition both are possible. Typical traps: CA as a real option, redundancy as a solution and confusion with the latency/consistency trade-off (PACELC)."
 },
 "c3q52": {
  "q": "Which statement about skipping a layer (layer bridging) is correct?",
  "options": [
   "It is permitted only in strict layers because there each layer knows its neighbors.",
   "It violates the layering because it creates dependencies upward.",
   "It improves the replaceability of the data access layer because the UI works with it directly.",
   "Permitted in the relaxed variant; the higher layer then depends on several lower ones, which makes replacing the middle layer harder."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: Swapped: skipping characterizes the relaxed variant; the strict variant prohibits it.",
   "Wrong: The dependency still points downward. A violation would be dependencies from bottom to top.",
   "Wrong: The more layers the UI knows directly, the more tightly it is bound to the data access layer; replacement becomes harder rather than easier.",
   "Correct: Skipping saves passing-through and effort but creates additional dependencies. The skipped layer can no longer be changed independently."
  ],
  "explanation": "Layer bridging is allowed in relaxed layering and trades simplicity and performance for additional dependencies and lower replaceability. Trap: it is still layering as long as dependencies point only downward."
 },
 "c3q53": {
  "q": "Which statements apply to a strict layered architecture?",
  "options": [
   "The layers are cut by business domain, e.g. ordering, inventory, shipping.",
   "A layer uses only the layer immediately below it.",
   "Dependencies in both directions are permitted between layers as long as they go via interfaces.",
   "A layer may skip layers if this creates no cycles.",
   "A layer can be replaced without affecting layers other than the one directly above.",
   "Compliance with the rules can be checked with dependency analysis tools."
  ],
  "correct": [
   1,
   4,
   5
  ],
  "optExpl": [
   "Wrong: That is a business (vertical) cut. Layers are cut by technical abstraction level (horizontal).",
   "Correct: This is the core rule of the strict variant: each layer knows only the interface of the layer immediately below.",
   "Wrong: Dependencies in the code point only downward. Calls upward are possible only via a callback interface defined by the lower layer.",
   "Wrong: Skipping is the characteristic of the relaxed variant and has nothing to do with cycles; in the strict variant it is excluded.",
   "Correct: Because only the layer directly above depends on it, changes remain limited if the interface is preserved.",
   "Correct: The rules are formal (direction, adjacency) and therefore checkable with tools, e.g. as architecture tests."
  ],
  "explanation": "Strict layering: technical, abstraction-oriented layers, use of the directly underlying layer only, dependencies only downward. Traps: business instead of technical cut, skipping (relaxed variant) and dependency in both directions."
 },
 "c3q54": {
  "q": "Which disadvantage is most typical of an architecture with many strictly stacked layers?",
  "options": [
   "Cyclic dependencies between the layers are unavoidable.",
   "The layers can no longer be tested independently.",
   "The replaceability of individual layers decreases with every additional layer.",
   "Simple requests are passed through all layers, which creates effort for forwarding and mapping."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: Strict layering permits dependencies only downward; cycles between layers are thereby excluded, not unavoidable.",
   "Wrong: Because each layer knows only the interface of the one below, they can be tested in isolation with test substitutes.",
   "Wrong: More layers do not fundamentally change the replaceability of the individual layer; the interface is decisive. The typical price is effort, not rigidity.",
   "Correct: Each strict layer passes calls on and possibly converts data structures; this costs latency and creates boilerplate code."
  ],
  "explanation": "Many strict layers increase indirection: passing through and converting cost runtime and code. What is gained is modifiability and comprehensibility. Traps: cycles, testability and replaceability do not typically suffer from the number of layers."
 },
 "c3q55": {
  "q": "What is the difference between active and passive filters in pipes and filters?",
  "options": [
   "Active filters know their neighboring filters and call them directly; passive ones communicate only via pipes.",
   "Active filters control the data flow themselves (fetch via pull or push); passive ones are called by the pipe or a neighbor.",
   "Active filters are triggered by the data stream (push), passive ones fetch their data themselves (pull).",
   "Active filters transform data, passive ones only pass it on unchanged."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: Active filters also communicate via pipes and do not know their neighbors; that is precisely the purpose of pipes.",
   "Correct: The active filter runs with its own control flow and drives the data flow. A passive filter is called when data is pushed or requested.",
   "Wrong: Pull and push are not a matter of passivity: an active filter can fetch itself (pull) or push itself. The assignment is half right but swapped.",
   "Wrong: Both kinds of filter transform data. The difference lies in the control flow, not in the task."
  ],
  "explanation": "Active filters have their own control flow and drive the data flow (pull or push); passive ones are called. All filters transform and know their neighbors only via pipes. Trap: do not equate pull/push with active/passive."
 },
 "c3q56": {
  "q": "Which statements about pipes and filters are correct?",
  "options": [
   "The stages can work concurrently; the slowest stage determines the throughput.",
   "A filter must know the implementation of the previous filter to interpret its output.",
   "Additional stages do not increase the latency of a single processing run as long as they work concurrently.",
   "Error handling is demanding because errors in one stage affect later stages and partial results may already have been passed on.",
   "The pattern is particularly suitable when late stages have to retroactively adjust early stages.",
   "Filters can be exchanged and recombined if they rely on the same data format at the pipes."
  ],
  "correct": [
   0,
   3,
   5
  ],
  "optExpl": [
   "Correct: Stages can process different records at the same time. As on an assembly line, the slowest stage limits the throughput.",
   "Wrong: Filters are coupled via the pipe format and do not know their neighbors; the predecessor’s implementation is hidden.",
   "Wrong: Every record passes through all stages one after another; additional stages lengthen its turnaround time even if throughput stays high.",
   "Correct: Rollback, retry and consistency across several stages are difficult because each stage knows only its part.",
   "Wrong: Feedback contradicts the one-way chaining and complicates concurrency and error handling; the pattern fits poorly for it.",
   "Correct: A uniform data format at the pipes makes filters exchangeable, reusable and recombinable."
  ],
  "explanation": "Pipes and filters: concurrent, exchangeable and combinable thanks to a uniform pipe format; in return demanding error handling and higher latency per record. Traps: confusing throughput and latency, knowledge of neighbors, feedback."
 },
 "c3q59": {
  "q": "Which statements about data exchange between microservices are correct?",
  "options": [
   "A shared database schema couples the services even if they otherwise communicate only through interfaces.",
   "Technology-neutral interfaces require all services to use the same internal persistence format.",
   "Synchronous calls between services are not permitted in this style because they remove the independence of the services.",
   "Each service owns its data; other services access it only through its interface.",
   "Asynchronous events decouple services in time but shift effort into consistency assurance and error handling.",
   "A shared library of domain objects reduces coupling because the types are defined uniformly."
  ],
  "correct": [
   0,
   3,
   4
  ],
  "optExpl": [
   "Correct: A schema change affects all users and accesses bypassing the contract become possible. Independence is lost.",
   "Wrong: The interface contract is standardized, not the internal format. Shared internals would couple the services.",
   "Wrong: Synchronous calls are allowed and common; they do create temporal coupling (availability of the callee) and are therefore a trade-off, not a prohibition.",
   "Correct: Only then can the schema and persistence technology of a service change without affecting others. This is a core principle of the style.",
   "Correct: The caller need not wait for a response; in return only eventual consistency is possible and duplicates or loss must be handled.",
   "Wrong: The library couples the services through types and release cycles; changes force coordinated releases. Uniformity is no decoupling gain here."
  ],
  "explanation": "Microservices are meant to remain independently changeable and deployable. Any shared internals (schema, domain library) couple the services even if they communicate through interfaces on the outside. Asynchronous events decouple in time but shift complexity into consistency and error handling."
 },
 "k14": {
  "q": "Which of the two mandatory patterns does the statement fit best?",
  "categories": [
   "Layered architecture",
   "Pipes & filters"
  ],
  "rows": [
   "Changing the persistence technology ideally remains confined to a single level.",
   "Simple requests often traverse levels that merely forward.",
   "An additional processing step can be inserted without changing the other steps as long as the data format fits.",
   "Dependencies run one way and follow the abstraction level of the building blocks.",
   "Changing the data format between two steps affects both adjacent filters.",
   "An error in a middle step is hard to report back to the originator of the chain."
  ],
  "rowExpl": [
   "Encapsulating technical concerns per level is the goal of layering. Pipes and filters have no levels with technology responsibility.",
   "Pass-through is a known disadvantage of strict layering. Filters in a pipeline each perform a processing task.",
   "Filters know neither predecessor nor successor, only the pipe data format. In layers a new step changes interfaces.",
   "Higher levels use lower ones, never the reverse. In pipes and filters the order follows the data flow.",
   "The pipe format is the only interface between filters. In layers interfaces are service-oriented, not stream-oriented.",
   "Filters run decoupled and there is no direct return channel. In layers errors return along the call path."
  ],
  "explanation": "Layers order by abstraction level with one-way dependency; typical weaknesses are pass-through and changes cutting across layers. Pipes and filters structure by processing steps; typical weaknesses are the data format between steps and error feedback."
 },
 "k15": {
  "q": "Is it a cross-cutting concept or not?",
  "categories": [
   "Cross-cutting concept",
   "Not a cross-cutting concept"
  ],
  "rows": [
   "The IBAN check in the payment building block.",
   "An algorithm for discount calculation called by several dialogs.",
   "Rules for how all building blocks load and override configuration values.",
   "Definition of how building blocks set transaction boundaries and persist data.",
   "The data model of a customer read by several building blocks.",
   "Rules on multilingual texts and formats in all dialogs."
  ],
  "rowExpl": [
   "Business validation with local scope, belonging to exactly one building block.",
   "A business function with a clear home in one building block; it is merely used, not implemented by many building blocks themselves.",
   "Affects many building blocks equally and needs uniform rules.",
   "Persistence is a classic cross-cutting topic with interactions with error handling and concurrency.",
   "A shared business model, but no rule on how an aspect is to be implemented in all building blocks.",
   "Internationalization affects every building block with output and must be solved uniformly."
  ],
  "explanation": "A cross-cutting concept regulates how many building blocks implement an aspect uniformly. Business functions, data and rules with a clear home are not, even if several building blocks use or display them."
 },
 "c3q60": {
  "q": "It is unclear whether a technology meets the load requirements. Which statements about prototypes as a feedback instrument are correct?",
  "options": [
   "A throwaway prototype should be extended step by step into production code after a successful test to avoid duplicate work.",
   "The prototype demonstrates the feasibility of a decision but does not replace an evaluation of the overall architecture.",
   "The effort for a prototype is justified if the decision is hard to reverse and uncertainty is high.",
   "Load prototypes are meaningful only if they are built with full production functionality.",
   "If the prototype passes the load test, it is guaranteed that the technology meets the quality goals in the overall system.",
   "A prototype yields reliable statements only for the question investigated under the chosen conditions."
  ],
  "correct": [
   1,
   2,
   5
  ],
  "optExpl": [
   "Wrong: A throwaway prototype is optimized for quick insight, not for maintainability and robustness. Extending it into production code carries deliberate shortcuts into the product.",
   "Correct: The prototype shows that a decision fundamentally holds. Whether the overall architecture meets all quality goals remains unaffected and is evaluated separately, e.g. with scenarios.",
   "Correct: Prototypes cost time. They pay off where an error would be expensive and knowledge is lacking, i.e. for hard-to-reverse, uncertain decisions.",
   "Wrong: A load prototype is meant to isolate just the critical question. With full functionality it would no longer be quick feedback but already part of the implementation.",
   "Wrong: The prototype checks a single question under simplified conditions. Interplay with other building blocks, the operating environment and other quality goals may still reveal problems.",
   "Correct: The significance is tied to the question and conditions of the prototype. What was not investigated, e.g. realistic data volumes or network conditions, remains unproven."
  ],
  "explanation": "Prototypes deliver facts early on a targeted question, especially for hard-to-reverse, uncertain decisions. Their statement is limited and does not replace an overall evaluation. Traps: turning a throwaway prototype into the product, demanding completeness or deriving guarantees."
 },
 "c3q61": {
  "q": "Which statement about evolutionary architecture is most accurate?",
  "options": [
   "Fitness functions make manual architecture reviews and stakeholder feedback unnecessary.",
   "The quality goals only emerge from the fitness functions the team formulates.",
   "The architecture is fully defined at the start and then protected against change by fitness functions.",
   "The architecture evolves step by step; automated checks (fitness functions) safeguard important qualities during changes."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: Fitness functions only check what can be measured automatically. Reviews and feedback remain necessary for aspects that cannot be automated.",
   "Wrong: The order is reversed: fitness functions are derived from the quality goals and check their compliance.",
   "Wrong: Evolutionary architecture grows step by step; fitness functions safeguard qualities during further development, not a frozen initial design.",
   "Correct: Incremental development is combined with automated, repeatable checks that make deviations from quality goals visible early."
  ],
  "explanation": "Evolutionary architecture = incremental development + automated checks (fitness functions) for important qualities. Traps: fitness functions as a replacement for reviews or as the source of quality goals, confusing the approach with big design up front."
 },
 "c3q62": {
  "q": "Which statements about feedback and risk in the order of architecture decisions are correct?",
  "options": [
   "The risk of a decision is determined solely by the probability that it turns out to be wrong.",
   "Decisions with high risk and low reversibility should be secured early through feedback.",
   "Stakeholder feedback concerns requirements, not decisions about the solution structure.",
   "A decision with far-reaching consequences for many other decisions should be made before local detail decisions.",
   "A vertical slice can provide feedback on several decisions at once.",
   "If you start with the lowest-risk decisions, overall risk decreases because progress becomes visible early."
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Wrong: Risk results from probability and extent of damage. An unlikely but very expensive wrong decision can be riskier than a likely one that is cheap to correct.",
   "Correct: High potential damage and hard correctability justify early feedback, e.g. via a prototype. If the decision is confirmed or revised early, changing course stays cheap.",
   "Wrong: Stakeholders can also evaluate solution approaches, e.g. effects on operation, cost or usability. Feedback on decisions is precisely a goal of reviews and demos.",
   "Correct: The more follow-up decisions depend on a decision, the more expensive it is to change later. Such decisions should be settled early; local details can be adapted later.",
   "Correct: A vertical slice through all layers checks the interplay of several decisions, e.g. on technology, interfaces and deployment, at once.",
   "Wrong: Starting with the easy things creates progress but pushes the uncertain decisions back. There, surprises are most expensive because a lot already builds on them."
  ],
  "explanation": "Decisions are ordered by risk (probability and damage), consequence and reversibility; early, targeted feedback, e.g. via vertical slices, secures the risky ones. Traps: seeing risk only as probability, limiting stakeholder feedback to requirements, easy things first."
 },
 "c3q63": {
  "q": "Which statements about interface design are correct?",
  "options": [
   "The interface should mirror the internal data storage because changes to the implementation are then easier to follow.",
   "The interface should be functionally complete from the point of view of its users without exposing internals of the building block.",
   "An interface is sufficiently described when operations, parameters and return types are specified.",
   "Incorrect use should already be made difficult by naming, types and preconditions.",
   "Anyone aiming at extensibility includes operations in advance for conceivable future use cases.",
   "Easy extensibility means that functions can be added without having to adapt existing users."
  ],
  "correct": [
   1,
   3,
   5
  ],
  "optExpl": [
   "Wrong: This couples users to the implementation; every change of the data storage propagates to the interface. An interface should be cut from the users’ point of view.",
   "Correct: Users should be able to accomplish their task with the interface without knowing internals. Completeness refers to the user’s view, not to the internal structure.",
   "Wrong: Signatures describe only the syntax. Semantics, error behavior, preconditions and assured qualities are part of the contract as well.",
   "Correct: Hard to misuse means making misuse difficult by design, for example through meaningful names, narrow types and checked preconditions.",
   "Wrong: Operations in advance enlarge the interface, make it harder to learn and have to be maintained later. Extensibility means being able to add later, not offering everything up front.",
   "Correct: Extensible in the sense of an interface means backward-compatible additions, so that existing users keep working unchanged."
  ],
  "explanation": "Good interfaces are easy to learn, hard to misuse, functionally complete from the user’s view and extensible in a backward-compatible way. Traps: mirroring the internal structure, describing only the signatures and operations in stock."
 },
 "c3q64": {
  "q": "Which statement about the granularity of interfaces is correct?",
  "options": [
   "Fine-grained interfaces reduce coupling because each operation presupposes little knowledge of the implementation.",
   "Fine-grained interfaces are mainly suited to remote calls, coarse-grained ones to local calls.",
   "Coarse-grained interfaces save round trips in remote calls but can burden users with data they do not need.",
   "The appropriate granularity does not depend on the use cases as long as the interface is functionally complete.",
   "For local calls, granularity is just as critical from a performance point of view as for remote ones."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: Many small operations increase the number of dependencies and often force call sequences (temporal coupling). Coupling does not decrease as a result.",
   "Wrong: Swapped: remote calls are expensive and favor coarse granularity; locally, fine-grained calls are usually unproblematic.",
   "Correct: A coarser call bundles several steps and saves network latency. The price is larger messages and less flexibility for users who need only a part.",
   "Wrong: Completeness does not determine granularity. How many calls a use case needs and how expensive they are decides whether fine or coarse makes sense.",
   "Wrong: Local calls cost nanoseconds to microseconds; remote ones involve network latency, serialization and possible failures. Local and remote calls do not behave identically."
  ],
  "explanation": "Granularity is a trade-off: fine = flexible but many (for remote calls expensive) calls; coarse = fewer round trips but larger messages and less flexibility. Trap: local and remote calls are not equivalent."
 },
 "c3q65": {
  "q": "Which statements about the evolution of a public interface with an unknown number of users are correct?",
  "options": [
   "Incompatible changes can be made plannable through an announced transition period with the old version available in parallel.",
   "The robustness principle demands being tolerant also when sending, so that receivers can process as much as possible.",
   "Without versioning, changes are acceptable if they are published in the change log.",
   "External interfaces need more stability than internal ones because users cannot be adapted in a coordinated way.",
   "An interface counts as stable if its signatures stay the same, even if the behavior changes.",
   "Being tolerant when receiving eases evolution but can hide errors and soften contracts."
  ],
  "correct": [
   0,
   3,
   5
  ],
  "optExpl": [
   "Correct: A deprecation phase with a parallel version makes incompatibilities plannable because users can migrate at their own pace.",
   "Wrong: Swapped: the principle is to be strict when sending and tolerant when receiving. Tolerant sending would burden receivers with ambiguous data.",
   "Wrong: A change log does not force unknown users to read it. Without versioning, incompatible changes break their systems unpredictably.",
   "Correct: With external users there is no way to coordinate and roll out adaptations simultaneously. That is why stability, formal description and versioning matter more there than internally.",
   "Wrong: Behavior and assurances are part of the contract. If the behavior changes, the interface is not stable for its users, even if the compiler notices nothing.",
   "Correct: Tolerant receivers survive new fields or values. The price: errors and deviations go unnoticed and the interface becomes de facto less precise."
  ],
  "explanation": "External interfaces demand higher stability, formal description and versioning; transition periods make breaking changes plannable. Tolerant receiving helps but has side effects. Traps: stability is more than identical signatures, and one sends strictly and receives tolerantly."
 },
 "c3q66": {
  "q": "Which statements about architectural measures for high availability are correct?",
  "options": [
   "Several instances of the application are sufficient as soon as the upstream load balancer is itself redundant.",
   "Redundancy improves availability but increases operating cost and complexity, for example through data synchronisation.",
   "Regular database backups remove the database’s role as a single point of failure.",
   "Automatic failover only works if failures are detected reliably and the taking-over instance has access to the required state or data.",
   "Splitting into several distributed services improves availability because the failure probability of the overall system decreases."
  ],
  "correct": [
   1,
   3
  ],
  "optExpl": [
   "Wrong: A shared database then still remains a single point of failure. For the availability of the whole system, all shared components must be considered.",
   "Correct: Every tactic has a price. The benefit of higher availability must be weighed against infrastructure cost, operating effort and architectural complexity.",
   "Wrong: Backups allow recovery after a failure but do not keep the system available during it. That requires redundancy and failover.",
   "Correct: Failover is not an isolated measure: without failure detection and available data or session state, the second instance helps little.",
   "Wrong: If a function depends on several services in series, overall availability tends to drop. Failure isolation must be designed deliberately (e.g. timeouts, circuit breakers)."
  ],
  "explanation": "Availability results from deliberate tactics (redundancy, failover) that come at a cost. Typical traps: making only the application tier redundant (the database stays a single point of failure), confusing backup with redundancy, and attributing failure resilience to an architectural style across the board."
 },
 "c4q1": {
  "q": "You are asked to explain to a new client what architecture documentation is for. Which purposes apply most?",
  "options": [
   "Making onboarding of new team members easier.",
   "Prescribing the implementation down to class level.",
   "Recording the current state, leaving out rejected alternatives.",
   "The documentation replaces tests and measurements as evidence that quality requirements are met.",
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
   "Wrong: Documentation describes the intended solution approaches and can support evidence, e.g. towards regulators. But it replaces neither tests nor measurements nor an architecture evaluation, which show that quality requirements are actually met.",
   "Correct: Documentation is above all a means of communication: it gives all stakeholders a common basis and makes differing ideas and misunderstandings visible early.",
   "Correct: The code shows what was built, but not why. Documented decisions with rationale, e.g. as ADRs, prevent deliberate decisions from being unknowingly reversed later."
  ],
  "explanation": "Architecture documentation serves communication, traceability of decisions and onboarding. Traps: it does not replace tests or measurements as evidence of quality and is not detailed design down to class level; rejected alternatives explicitly belong in it."
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
  "q": "A new team member is to get acquainted with an existing system and asks for an overview of its structure. The team points to the building block view, which is sometimes also called the component view. Which statements about the building block view (also component view) are correct?",
  "options": [
   "It is refined hierarchically from black box to white box.",
   "It shows the static decomposition of the system into building blocks.",
   "It shows the order in which building blocks interact at runtime.",
   "It maps the building blocks to their execution nodes.",
   "In addition to the structure it can show the relationships and dependencies between the building blocks.",
   "It describes each building block's responsibility and interfaces.",
   "Black box belongs to the building block view, white box to the runtime view."
  ],
  "correct": [
   0,
   1,
   4,
   5
  ],
  "optExpl": [
   "Correct: A building block is first described as a black box with responsibility and interfaces and then opened as a white box. Its parts are again black boxes that can be refined further if needed – this creates the hierarchy of levels.",
   "Correct: The building block view describes which software building blocks the system consists of and how they are structurally related. It is static: behaviour and interaction at runtime are shown by the runtime view.",
   "Wrong: Flows are shown by the runtime view. The building block view is static and describes structure and relationships.",
   "Wrong: Mapping software building blocks or artefacts to execution nodes is the subject of the deployment view. The building block view deliberately abstracts from the infrastructure the blocks run on.",
   "Correct: Static structure includes not only the building blocks but also their relationships, such as dependencies and interface usage.",
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
   "A broad selection of the system's use cases.",
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
  "q": "Which statements about the deployment view are correct?",
  "options": [
   "It shows the order in which building blocks interact at runtime.",
   "It shows which artifacts run on which nodes.",
   "It shows the nodes and channels of the runtime environment.",
   "It shows which teams are responsible for which building blocks.",
   "It shows on which node a building block runs and thereby supports conversations with IT operations.",
   "It shows which external systems are connected via which channels."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Wrong: The order of interactions at runtime is shown in the runtime view, e.g. as a sequence or activity diagram. The deployment view is static and describes infrastructure, not flows.",
   "Correct: The deployment view shows the technical infrastructure with nodes (e.g. servers, containers) and channels and maps the software onto it via deployment artefacts. This makes visible what runs where.",
   "Correct: Nodes (e.g. servers, containers) and the channels between them depict the technical infrastructure on which the system runs.",
   "Wrong: The mapping of teams to building blocks is organisational information. It may appear elsewhere in the documentation, but it does not belong in the deployment view, which describes technical infrastructure.",
   "Correct: The deployment view is the common basis for operations and infrastructure questions. According to the curriculum IT operations is a relevant counterpart of architects (primarily for information systems).",
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
   "A minimum set of mandatory views for systems of this kind."
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
  "q": "You want to show the checkout flow in the runtime view, in which shopping cart, warehouse and payment exchange messages. Which UML diagrams are suitable?",
  "options": [
   "State diagram.",
   "Sequence diagram.",
   "Class diagram.",
   "Activity diagram.",
   "Component diagram.",
   "Deployment diagram."
  ],
  "correct": [
   1,
   3
  ],
  "optExpl": [
   "Wrong: The state diagram describes the states and transitions of a single object or building block, e.g. an order from “open” to “shipped”. It does not show the message exchange between several participants.",
   "Correct: Along the lifelines, the sequence diagram shows from top to bottom who sends which message to whom and when. This makes it the typical tool of the runtime view for flows like checkout.",
   "Wrong: The class diagram shows types and their relationships, i.e. static structure. A temporal sequence of messages cannot be read from it.",
   "Correct: The activity diagram shows actions, branches and concurrency, i.e. the control flow of a process. Like the sequence diagram it is suitable for flows in the runtime view.",
   "Wrong: The component diagram shows building blocks and their interfaces statically. Which components are connected is visible, but not the temporal order in which they exchange messages.",
   "Wrong: The deployment diagram shows which artifacts run on which nodes. It does not show a sequence of interactions."
  ],
  "explanation": "A chronologically ordered exchange of messages is typically shown as a sequence diagram; the activity diagram is suited to flows with branches and concurrency. Traps: state, component, class and deployment diagrams show no flows between participants."
 },
 "c4q9": {
  "q": "A team wants to record why it chose a message broker instead of synchronous REST calls. What applies to an ADR for this?",
  "options": [
   "It serves the team as an implementation guide.",
   "It records context, decision and consequences.",
   "A later revision is recorded as a new ADR.",
   "It carries a status such as \"accepted\" or \"superseded\".",
   "It freezes the decision for the rest of the project.",
   "It bundles the project's decisions in one document."
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
   "Change the notation, the content stays the same.",
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
   "Sequence diagram",
   "Component diagram",
   "Package diagram",
   "Activity diagram",
   "Deployment diagram"
  ],
  "rowExpl": [
   "A sequence diagram shows the order in which messages are exchanged between participants. It describes a flow and thus behavior (runtime view), not a fixed structure.",
   "It shows components, their interfaces and dependencies. That is static structure (building block view) and describes no temporal flow.",
   "Packages group elements and show their dependencies. That is a static organization (building block view), not behavior.",
   "It describes flows with steps, branches and parallelism. It therefore shows behavior (runtime view) and not structure.",
   "It assigns artifacts to nodes and shows communication paths (deployment view). That is a static assignment without a flow, so it counts as structure even though it is about the runtime environment."
  ],
  "explanation": "Sequence and activity diagrams describe behaviour. Package, component and deployment diagrams show structure. Trap: the deployment diagram statically assigns artifacts to nodes and describes no flow."
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
   "The views are maintained as independent models.",
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
  "q": "A review found that nobody understands how shopping cart, payment and shipping cooperate when an order is placed. Which measures help?",
  "options": [
   "Refine the building block view into even smaller building blocks.",
   "Add a runtime view for the “order” scenario.",
   "Add a context view.",
   "Show the flow as a sequence diagram or a numbered list.",
   "Add a deployment view.",
   "Name the participating building blocks with the names from the building block view so that both views fit together."
  ],
  "correct": [
   1,
   3,
   5
  ],
  "optExpl": [
   "Wrong: Finer building blocks show more structure but not how they cooperate in a flow. The building block view remains static.",
   "Correct: The runtime view shows the interaction of building blocks in a concrete scenario, e.g. “place order” as a sequence diagram. Exactly this understanding is missing according to the review.",
   "Wrong: The context view shows the system as a black box with its external neighbours. Internal building blocks like cart or payment do not appear at all – so it cannot solve the problem.",
   "Correct: For runtime views the curriculum names sequence diagrams but also flowcharts, numbered lists or BPMN. What matters is that the order of interactions is recognisable.",
   "Wrong: The deployment view shows on which nodes the software runs and how nodes are connected. It does not answer in which order building blocks collaborate in an order.",
   "Correct: Consistent names make the views connectable: whoever understands the interplay finds the building blocks again in the structure."
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
  "rowExpl": [
   "The number of running instances in production concerns the infrastructure, not the internal structure. The deployment view shows this, so not the building block view.",
   "Channels and protocols between servers belong to the infrastructure and the technology of the connection. The deployment view shows this; the building block view describes building blocks and their relationships.",
   "Decomposing a subsystem into its internal parts is the core task of the building block view. The deployment view says nothing about what a building block consists of internally.",
   "Interfaces offered by a module belong to the description of building blocks. The building block view shows this, not the deployment view.",
   "Dependencies between modules are relationships between building blocks and are therefore in the building block view. The deployment view shows infrastructure, not module dependencies.",
   "This is the trap: the mapping of building blocks to artifacts such as container images belongs to the deployment view, even though building blocks are mentioned. The building block view does not show deployment units."
  ],
  "explanation": "The building block view shows internal decomposition (billing), offered interfaces (customer management) and dependencies between modules (invoice). The deployment view shows instances in production, channels and protocols between servers – and, the trap, also the mapping of building blocks to artefacts such as container images."
 },
 "c4q18": {
  "q": "Which statements about the UML class diagram in architecture documentation are correct?",
  "options": [
   "It shows the distribution of building blocks onto nodes and channels.",
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
   "Wrong: That describes the deployment diagram with nodes, artifacts and channels. The class diagram shows types and their relationships, not the mapping to infrastructure.",
   "Correct: Class, package and component diagrams are UML structure diagrams. They show static structure, i.e. elements and their relationships independent of temporal flow.",
   "Correct: As a static diagram it typically fits the building block view, for example to show the structure of a building block at a fine level or a domain model.",
   "Wrong: A class diagram shows no temporal flow. For flows in the runtime view, sequence or activity diagrams are used, which depict the order of interactions.",
   "Wrong: The curriculum does not mandate a specific notation per view. For the building block view, component or package diagrams or informal box-and-line diagrams with a legend are also suitable.",
   "Correct: The class diagram contains types or classes and their relationships such as association, aggregation, inheritance or dependency, possibly with attributes and operations."
  ],
  "explanation": "The class diagram (R2) is a structure diagram showing classes and relationships and fits the building block view. Traps: it is neither a deployment diagram nor a mandatory notation for any view, and it is unsuitable for runtime flows – sequence and activity diagrams serve that purpose."
 },
 "c4q19": {
  "q": "A team defines which decisions it records as Architecture Decision Records (ADRs). Which statements are correct?",
  "options": [
   "A decision that triggers follow-up decisions.",
   "Only once the decision has proven itself in practice.",
   "As a continuously maintained overall description of the architecture.",
   "A fundamental technology decision that is hard to reverse.",
   "Detail decisions in the code.",
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
   "Update the documentation in bulk at major releases.",
   "Leaving upkeep to a central documentation role that is not involved in the changes.",
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
   "Wrong: Whoever is not involved in the changes learns about them too late and often does not understand the background. The documentation then lags behind. Coordination by the lead architect makes sense, but the content upkeep belongs to those who make the changes.",
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
   "Building blocks must appear in the building block, runtime and deployment views.",
   "The same building block must not be contradictory across views.",
   "In case of contradiction the building block view prevails."
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
   "A complete copy of the requirements specification",
   "Known risks and technical debt",
   "A description of every single class with all its methods",
   "Rejected alternatives to a central decision",
   "The prioritized quality goals of the system"
  ],
  "rowExpl": [
   "A copied requirements specification bloats the documentation and has to be maintained twice. It is better to refer to the requirements than to copy them, so it does not belong in it.",
   "Known risks and technical debt help readers assess the architecture and its weaknesses. This is sensible content and not ballast.",
   "A description of every class with all its methods is too detailed and bloats the documentation. Architecture documentation describes what is essential, so this does not belong in it.",
   "Rejected alternatives make it understandable why a central decision was made the way it was. They explain the reasons behind the architecture and therefore belong in the documentation.",
   "Prioritized quality goals explain what the architecture is aligned to and why decisions turned out as they did. This is sensible content for readers and belongs in the documentation."
  ],
  "explanation": "Prioritised quality goals, known risks and technical debt, and rejected alternatives help readers to understand the architecture and its reasons. A description of every class and a copied requirements specification bloat the documentation – better to refer than to copy."
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
   "The architecture can be derived from the code.",
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
   "The curriculum prescribes UML for the views.",
   "UML is restricted to object-oriented systems.",
   "Any notation may suffice if it is explained, e.g. by a legend.",
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
   "Correct: The curriculum prescribes no mandatory notation. Any notation may suffice as long as its meaning is explained, e.g. by a legend; what matters is comprehensibility.",
   "Correct: As long as the meaning of the elements remains clear, UML may be used informally and sketchily. The degree of formality can be adapted to purpose and audience.",
   "Correct: Component diagrams show building blocks, deployment diagrams infrastructure and sequence diagrams flows. These diagram types are well suited to microservice architectures too.",
   "Wrong: Diagrams show structures and flows, but not rationales, trade-offs or rejected alternatives. Explanatory text, e.g. in ADRs, is still needed for those."
  ],
  "explanation": "UML offers useful diagram types, can be used in sketches and for microservices, and any explained notation is permitted. Traps: UML is neither prescribed by the curriculum nor limited to OO nor a substitute for textual rationale."
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
  "rowExpl": [
   "Which nodes make up the test and production environments is infrastructure, not a flow. It belongs in the deployment view, not in the runtime view.",
   "The state transitions of an order describe dynamic behavior over time. That belongs in the runtime view; the deployment view shows no flows.",
   "Which artifact is installed on which node is a static assignment to the infrastructure. That is deployment view and not a flow of the runtime view.",
   "How the building blocks interact in case of an error is dynamic behavior and therefore runtime view. The deployment view shows nothing about it.",
   "The sequence when starting up and initializing is a flow over time and thus belongs in the runtime view. It has nothing to do with the infrastructure of the deployment view."
  ],
  "explanation": "Runtime view: the order's state transitions, the interaction in case of failure and the start-up and initialisation sequence – all dynamic behaviour. Deployment view: which nodes form the test and production environments and which artefact is installed where. Trap: environments may look like processes but are infrastructure."
 },
 "c4q32": {
  "q": "Your team is drawing up criteria for good architecture documentation. Which criteria are correct in the sense of the curriculum?",
  "options": [
   "Elaborated down to the lowest building block level.",
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
   "ADRs describe decisions for subsystems, arc42 only system-wide decisions.",
   "arc42 embeds them in the overall documentation, ADRs are individual documents.",
   "arc42 records open decisions, ADRs only those already made.",
   "ADRs record alternatives and rationales, arc42 does not."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: arc42 (section 9) can take decisions of any scope. The difference lies in form: embedded in the overall documentation versus a single document.",
   "Correct: arc42 places decisions in one section of the overall documentation. An ADR, by contrast, is a short standalone document per decision with status, context and consequences – the two can be combined.",
   "Wrong: Both mainly record decisions that have been made. An ADR can also have the status 'proposed', so it can capture open decisions too – the assignment here is reversed.",
   "Wrong: arc42 also provides for rationale and considered alternatives for decisions. ADRs are just a different, more formalised way of recording the same information."
  ],
  "explanation": "arc42 embeds decisions in the overall documentation, ADRs are standalone individual documents with a status; the two can be combined. Traps: both can hold rationale and alternatives, ADRs are not tied to arc42, and arc42 is not limited to system-wide decisions."
 },
 "c4q34": {
  "q": "What does an architecture decision record (ADR) according to Michael Nygard contain?",
  "options": [
   "A title (short name of the decision).",
   "The decision itself.",
   "Consequences.",
   "Continuously updated experience from operations.",
   "An effort estimate for the implementation.",
   "Status (e.g. accepted, superseded).",
   "Context.",
   "An assignment of responsibilities for the implementation (RACI)."
  ],
  "correct": [
   0,
   1,
   2,
   5,
   6
  ],
  "optExpl": [
   "Correct: Nygard's template starts with a short title that names the decision. It makes ADRs findable in a list.",
   "Correct: The core of every ADR is the actual decision taken, usually phrased actively (\"We will use …\"). Without it the record would only be a problem description.",
   "Correct: The consequences, positive and negative, make the decision traceable later. They show which trade-offs were consciously accepted and what changes as a result.",
   "Wrong: ADRs are not continuously rewritten. If the situation changes, a new ADR is written that supersedes the old one; this keeps the decision history traceable.",
   "Wrong: Effort estimates belong to project planning. An ADR records what was decided and why; effort may appear as context or consequence at most but is not one of Nygard's fields.",
   "Correct: The status shows whether a decision is proposed, accepted, rejected or superseded by a newer one. This shows which decisions currently apply without rewriting anything.",
   "Correct: The context describes the problem and the forces, such as requirements and constraints, that trigger the decision. It explains to later readers why a decision had to be made at all.",
   "Wrong: According to Nygard, ADRs consist of title, status, context, decision and consequences. A responsibility matrix is not part of it."
  ],
  "explanation": "A Nygard ADR contains title, status, context, decision and consequences. Traps: an effort estimate and a responsibility matrix are not part of it, and instead of updating an ADR with operational experience, it is superseded by a new one."
 },
 "c4q35": {
  "q": "Your team offers a REST API to partner companies and also has internal interfaces between building blocks. What most likely applies to their documentation?",
  "options": [
   "Internal and external interfaces are documented equally formally and with versioning.",
   "External interfaces are documented from the code only after implementation.",
   "An OpenAPI specification covers syntax and semantics.",
   "External ones are usually documented earlier, more formally and versioned."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: The effort depends on the user group and the cost of change. For internal interfaces, coordination within the team and a leaner description are usually sufficient; formality and versioning pay off mainly for external ones.",
   "Wrong: Partners build on the interface before the implementation exists and cannot look into the code. External interfaces are therefore usually defined earlier as a contract, not derived from the code afterwards.",
   "Wrong: OpenAPI mainly describes syntax: endpoints, parameters, data types. Meaning, pre- and postconditions, error behaviour and quality guarantees have to be documented in addition.",
   "Correct: External interfaces are contracts with third parties and hard to change once published. They are therefore usually documented earlier, more formally and with versioning, so that partners can rely on them."
  ],
  "explanation": "External interfaces are contracts with third parties and are documented earlier, more formally and with versioning; internal ones need an appropriate, leaner description. Traps: equal formality for all interfaces, documenting afterwards from the code, and assuming OpenAPI also covers semantics."
 },
 "c4q36": {
  "q": "A team is to document and communicate its concept for error handling and logging. Which statements are correct?",
  "options": [
   "Communicate it via sample implementations as well.",
   "Describe separately in the affected building blocks.",
   "Document it only once implementation is complete.",
   "Describe it centrally in one place, e.g. arc42 section 8.",
   "Record the motivation, rules, rationale and an example.",
   "Describe it as part of the deployment view, since errors and logs occur on the nodes."
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
   "Wrong: The deployment view shows nodes and infrastructure. A concept for error handling and logging applies across building blocks and belongs to the cross-cutting concepts."
  ],
  "explanation": "Cross-cutting concepts such as error handling are documented centrally (e.g. arc42 section 8) with motivation, rules, rationale and example, and are also communicated via sample code. Traps: describing it separately per building block, documenting only afterwards, or assigning the concept to the deployment view."
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
   "A scenario-based analysis is quantitative because scenarios contain response measures.",
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
   "Wrong: The scenarios do contain measures, but the evaluation is done through expert assessment of the architecture. Scenario-based evaluation therefore remains qualitative.",
   "Wrong: Not every quality is measurable, and every number needs interpretation. Even when code exists, qualitative methods remain necessary, for instance to evaluate decisions and trade-offs.",
   "Correct: Reviews and scenario analyses work with designs, models and expert knowledge. They can be used early, when no code exists yet and corrections are still cheap.",
   "Wrong: Load tests measure runtime behaviour such as response times and throughput and are therefore quantitative. The fact that measurements must be interpreted does not make the method qualitative."
  ],
  "explanation": "Qualitative methods such as reviews and scenario analyses work without code, quantitative ones such as metrics or load tests need an analysable artifact; the two complement each other. Traps: measures in a scenario do not make the analysis quantitative, and interpretation does not make load tests qualitative."
 },
 "c5q4": {
  "q": "You are compiling key figures for an architecture review. Which of the following are quantitative (metric-based) values?",
  "options": [
   "Afferent and efferent coupling of a module.",
   "Response time under load at the 95th percentile.",
   "Result of a user survey on usability.",
   "Rating of a trade-off as critical in the evaluation workshop.",
   "Priority “high” of a scenario in the scenario list.",
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
   "Wrong: Whether a trade-off is critical is decided by the participants' discussion in the evaluation workshop. That is a qualitative result, even if it later appears in a list with a label.",
   "Wrong: Rating a scenario as high, medium or low is the stakeholders' judgement, not a measured value. It serves prioritisation and looks like a metric, but it is qualitative.",
   "Correct: Cyclomatic complexity is calculated from the control flow graph and is a source-code metric. It counts the independent paths and is therefore clearly quantitative."
  ],
  "explanation": "Coupling degrees, cyclomatic complexity and measured response times are quantitative figures. Traps: priorities in the scenario list, workshop ratings and user surveys are qualitative judgements, even if they look like metrics."
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
   "Correct: Whether the design meets or will meet the functional and quality requirements is a core purpose of analysis. Scenario-based methods check this using quality scenarios.",
   "Correct: The curriculum explicitly mentions finding risks and improvement opportunities before, during and after implementation. Analysis is therefore not limited to early phases but is also useful for existing systems.",
   "Wrong: Fixing effort and deadlines bindingly is a task of project planning. Analysis results such as identified risks can feed into planning, but they are not the purpose of architecture analysis."
  ],
  "explanation": "Reasons according to the curriculum: finding risks (before, during and after implementation), checking requirements fulfilment, conformance of the implementation to decisions, and addressing stakeholder concerns. Traps: an analysis is neither proof of goal achievement nor a planning tool for effort and deadlines."
 },
 "c5q7": {
  "q": "A metrics report shows very high coupling for a module. What does this finding most likely express?",
  "options": [
   "Strong functional unity within the module.",
   "Frequent defects in the module, which can be read directly from the coupling value.",
   "Many dependencies; changes propagate easily.",
   "Many branches in the control flow of the module."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: Strong functional unity within the module is high cohesion – a property inside the module that is actually desirable. High coupling, by contrast, describes the relationships to the outside.",
   "Wrong: Coupling shows dependencies on other modules, not the number of defects. High coupling raises the risk that changes and defects propagate; the clustering of defects is separate information, e.g. from the ticket system.",
   "Correct: Coupling measures the dependencies on other modules, e.g. via afferent and efferent relationships. Many of them make isolated change, testing and replacement harder because changes propagate easily.",
   "Wrong: The number of branches in the control flow is measured by cyclomatic complexity. It describes the internal complexity of a module and says nothing about its dependencies on other modules."
  ],
  "explanation": "High coupling means many dependencies on other modules, so changes propagate easily. Traps: cohesion (unity within the module) and cyclomatic complexity (branches in control flow) are separate metrics, and the number of defects cannot be read from coupling."
 },
 "c5q8": {
  "q": "An analysis tool reports a cyclomatic complexity of 14 for a method. Which statements about it are correct?",
  "options": [
   "It counts the dependencies on other modules.",
   "It measures the number of linearly independent paths through the control flow.",
   "It measures the depth of the inheritance hierarchy.",
   "A high value indicates code that is hard to understand and expensive to test.",
   "It corresponds to the number of statements in the method.",
   "It is a source-code metric that the curriculum names as an information source for quality analysis."
  ],
  "correct": [
   1,
   3,
   5
  ],
  "optExpl": [
   "Wrong: The number of dependencies on other modules measures coupling, e.g. afferent or efferent coupling. It concerns relationships between modules, not the control flow within a method.",
   "Correct: McCabe's cyclomatic complexity is calculated from the control flow graph and counts linearly independent paths. It grows essentially with every branch (if, loop, case) and indicates testing and comprehension effort.",
   "Wrong: The nesting depth of the inheritance hierarchy is the depth of inheritance tree – a different object-oriented metric that refers to classes, not methods.",
   "Correct: Every additional independent path increases the number of required test cases and the effort of overseeing the flow.",
   "Wrong: The number of statements is close to lines of code and measures size. A long method without any branches still has a cyclomatic complexity of only 1.",
   "Correct: According to the curriculum (R1), source-code metrics such as lines of code or cyclomatic complexity are information sources."
  ],
  "explanation": "Cyclomatic complexity counts linearly independent paths through the control flow and rises with branches. Traps: size (LOC/statements), coupling between modules and inheritance depth are different metrics."
 },
 "c5q9": {
  "q": "A team formulates its quality goals as scenarios before evaluating the design. What benefit do the scenarios have here?",
  "options": [
   "They serve as the yardstick for architecture decisions.",
   "They can be checked against a running system, not against a design.",
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
   "Static and tool-supported: an analysis tool automatically checks the model for rule violations.",
   "Qualitative; possible on the design even without implementation."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: Metrics such as coupling or complexity can feed into a review, but the judgement results from expert assessment. A walkthrough therefore remains a qualitative method.",
   "Wrong: In a walkthrough the author guides others through the design and explains it. It is less formal than an inspection, which has fixed roles, checklists and an independent moderator.",
   "Wrong: A walkthrough is a manual method in which people go through the design together. Tool-supported static analyses, by contrast, automatically check code or models against rules.",
   "Correct: Experts go through the design and models together and assess them against the quality goals. This is qualitative and possible before implementation, when corrections are still cheap."
  ],
  "explanation": "A walkthrough is a qualitative, expert-based review in which the author guides through the design; it is possible before implementation. Traps: metrics feeding into it do not make it quantitative, it is less formal than a moderated inspection, and it is not an automatic tool check."
 },
 "c5q11": {
  "q": "You are planning the analysis of an online shop. Which of the following methods typically count as qualitative analysis methods?",
  "options": [
   "Scenario-based analysis (walking the architecture through quality scenarios).",
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
   "Correct: In scenario-based analysis the architecture is walked through concrete quality scenarios. The result rests on the participants' judgement, not on measurements – hence qualitative.",
   "Wrong: Cyclomatic complexity is calculated from the control flow of the source code. It is a metric and therefore belongs to the quantitative methods.",
   "Correct: In an architecture review, experts assess the design against the quality goals. The result is a reasoned judgement, not a measurement, and therefore counts as a qualitative method.",
   "Correct: Easily overlooked: the curriculum explicitly lists penetration tests alongside interviews and surveys as qualitative evaluation. They yield findings about vulnerabilities, not measured values.",
   "Wrong: According to the curriculum, measuring runtime behaviour such as response times under load is a quantitative method. The result is numbers, for example milliseconds at the 95th percentile.",
   "Wrong: Test coverage is a calculated percentage and therefore a quantitative measure. It also says little about test quality, but it is clearly measurable."
  ],
  "explanation": "Reviews, scenario analyses and – easily overlooked – penetration tests count as qualitative analysis – the curriculum explicitly classifies penetration tests this way, and scenario analyses also count as qualitative in the official sample exam. Trap: test coverage, complexity metrics and load measurements are quantitative because they yield numbers."
 },
 "c5q12": {
  "q": "A company has been operating a system for several years and wants to use architecture analysis in future not as a one-off event but deliberately at suitable points in the life cycle. At which points in time does an architecture analysis make sense?",
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
   "Metrics show where a problem lies and at the same time explain its cause."
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
   "Correct: Metrics capture qualities such as maintainability or security only partially. Qualitative methods such as reviews or scenario-based evaluation remain necessary to get a complete picture.",
   "Wrong: Metrics give hints to conspicuous places, e.g. high coupling or complexity. Why the value is what it is and whether it is a problem is only clarified by interpretation and further analysis."
  ],
  "explanation": "Metrics need context and interpretation, capture qualities only partially and lose their meaning when used as targets (Goodhart's law). Traps: comparisons across systems are tricky, and metrics show anomalies but do not explain their cause."
 },
 "c5q14": {
  "q": "Which results does an architecture evaluation typically deliver?",
  "options": [
   "Proof that the quality goals are met.",
   "Identified risks for meeting the requirements.",
   "A target architecture created by the evaluation team.",
   "An overall grade for the architecture.",
   "Trade-offs between qualities that have been made visible.",
   "Prioritized proposals for action."
  ],
  "correct": [
   1,
   4,
   5
  ],
  "optExpl": [
   "Wrong: An evaluation reveals risks; it proves nothing. It checks decisions against scenarios on paper; whether the quality goals are actually met only becomes definitive through measurement and operation.",
   "Correct: An evaluation names decisions that endanger meeting requirements as risks. This makes visible where action is needed.",
   "Wrong: The evaluation team assesses and makes recommendations. Responsibility for the design remains with the system's architects – delivering a finished target architecture is not the job of an evaluation.",
   "Wrong: Evaluations are mainly qualitative and measure the architecture against its own quality goals. A single overall grade would hide the concrete risks and would not be comparable between systems anyway.",
   "Correct: Decisions often improve one quality at the expense of another. An evaluation makes such trade-offs visible and thereby discussable.",
   "Correct: Prioritised recommendations on what to tackle first are derived from the risks found. This turns the evaluation into the basis for concrete improvements rather than a mere finding."
  ],
  "explanation": "Typical results of an architecture evaluation: risks for meeting the requirements, trade-offs between qualities that have been made visible and prioritised measures. Traps: no overall grade, no proof that goals are met and no new architecture designed by the evaluation team."
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
  "rowExpl": [
   "Penetration tests rely on the judgement of experts who attempt attacks. The result is an assessment of weaknesses, not a continuously measured figure, so the approach counts as qualitative.",
   "Interviews and surveys collect assessments and experience from stakeholders. The result is an evaluation and not a counted or measured number, so qualitative.",
   "The change frequency per component can be counted from the revision history. That is a measured figure and therefore quantitative.",
   "Defect reports per component are counted in the ticket system. That is a measurable figure and therefore quantitative; it shows problem hot spots.",
   "In scenario-based analysis, a workshop judges whether the architecture satisfies the scenario. Measures such as “under 2 s” change nothing: it is assessed, not measured. Only a load test would be quantitative.",
   "Fan-in and fan-out count the incoming and outgoing dependencies per building block. That is a computed figure (coupling metric) and therefore quantitative."
  ],
  "explanation": "Qualitative are penetration tests by experts, interviews about weak spots and scenario-based evaluations; the latter remain qualitative even if the scenarios contain measures such as \"under 2 s\". Quantitative are counted or measured metrics: change rates from version history, defect counts from the ticket system and coupling degrees per building block. Trap: numbers in a scenario do not make the method quantitative."
 },
 "c5q15": {
  "q": "Before a planned architecture review it turns out that there are no prioritised quality goals. Why is this a problem?",
  "options": [
   "The yardstick for the evaluation is missing.",
   "Goals that exist as a metric can be evaluated; qualitative goals cannot.",
   "The scope of evaluation follows from the functional requirements.",
   "Without quality goals, no conformance check of the code can take place.",
   "Without priorities there is no focus on what matters most."
  ],
  "correct": [
   0,
   4
  ],
  "optExpl": [
   "Correct: Architectural decisions can only be evaluated against goals. Without quality goals it remains unclear what “good” means – a review could then only collect opinions, but not soundly identify risks or deviations.",
   "Wrong: Goals do not need to be metrics to be evaluable. Qualitative methods such as scenario-based evaluation work with concrete scenarios and expert judgement instead of key figures.",
   "Wrong: Functional requirements are important but shape an architecture less strongly than quality goals. The yardstick of an architecture evaluation is mainly the quality goals and the scenarios derived from them.",
   "Wrong: A conformance check compares the code with the design and architecture decisions, not with the quality goals. It is possible even without prioritised goals; the problem of missing goals lies in the missing yardstick for evaluation.",
   "Correct: Time for an evaluation is limited. Prioritisation focuses it on the most important and riskiest quality goals; without it everything is treated equally and essentials get lost in detail."
  ],
  "explanation": "Prioritised quality goals are the yardstick and focus of every architecture evaluation. Traps: they do not need to be metrics, functional requirements do not replace them as the yardstick, and the conformance check of the code does not depend on them."
 },
 "c5q16": {
  "q": "What are tools for static code and architecture analysis suitable for?",
  "options": [
   "Determining coupling and complexity metrics.",
   "Uncovering cyclic dependencies between building blocks.",
   "Proving that performance goals are met.",
   "Measuring response times under production load.",
   "Finding violations of layering rules.",
   "Detect undesired dependencies on particular libraries or frameworks.",
   "Reliably assessing cohesion in business terms."
  ],
  "correct": [
   0,
   1,
   4,
   5
  ],
  "optExpl": [
   "Correct: Coupling and complexity metrics such as fan-in/fan-out or cyclomatic complexity can be calculated directly from the code without executing it. They point to problematic spots in the structure.",
   "Correct: Cyclic dependencies between building blocks are visible in the static structure and can be detected automatically. Such cycles make changes and testing harder and are a typical finding of static analysis.",
   "Wrong: Performance only shows at runtime under real load. Static analysis can give hints, such as inefficient loops, but cannot prove that performance goals are met.",
   "Wrong: Measuring response times under production load requires running the system – i.e. dynamic analysis, monitoring or load tests. Static tools only look at the code.",
   "Correct: Allowed and forbidden dependencies can be stored as rules and checked automatically, e.g. 'the UI must not access persistence directly'. Violations of the layering thus become visible early.",
   "Correct: Dependencies can be derived statically from the code and checked against rules, e.g. “domain logic must not use a UI library”.",
   "Wrong: Tools only provide approximations for cohesion, for example based on shared attributes. Whether elements belong together in business terms requires domain understanding, which no tool can reliably assess."
  ],
  "explanation": "Static analysis examines code and structure without execution: coupling and complexity metrics, layering rules and cycles. Traps: runtime properties such as performance or response times can neither be measured nor proven this way, and no tool reliably assesses cohesion in business terms."
 },
 "c5q18": {
  "q": "Only half a day is available for an architecture evaluation; the system's quality goals are known and prioritised. Which focus areas make the most sense?",
  "options": [
   "On the highest-priority quality goals and the riskiest scenarios for them.",
   "On building blocks with a conspicuous change rate or defect clusters, as far as they affect the prioritised quality goals.",
   "On an even sample across all building blocks.",
   "On the building blocks with the most known defects, regardless of the quality goals.",
   "On reviewing all documentation for completeness.",
   "On the quality attributes that can be measured fastest with existing tools."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Correct: With limited time you assess where failure would hurt most: the highest-priority quality goals and the riskiest scenarios for them. That way half a day yields the most valuable insights.",
   "Correct: According to the curriculum, defect clusters are an information source for quality analysis, and the change rate also hints at hotspots. They direct the scarce time, provided they affect the prioritised quality goals; they complement the focus on the goals but do not replace it.",
   "Wrong: An even sample spreads the scarce time over uncritical parts as well. Targeted prioritisation by quality goals and risks is far more effective when time is limited.",
   "Wrong: Defect clusters point to problems in the code, such as poor testability. Pursued regardless of the quality goals, you may evaluate unimportant things – assessment follows goals, not defect counts.",
   "Wrong: A completeness review of the documentation says little about whether the most important quality goals are met, and costs a lot of effort for little insight when time is short.",
   "Wrong: What is easy to measure is not necessarily what matters most. Selecting by measurability instead of goals and risks may examine the wrong qualities."
  ],
  "explanation": "With limited time you prioritise the evaluation by the most important quality goals and biggest risks; hotspots such as defect clusters or high change rates help, as far as they affect those goals. Traps: even samples, defect counts without reference to goals, completeness reviews and selection by mere measurability."
 },
 "c5q19": {
  "q": "Which statements about evaluating a software architecture are correct?",
  "options": [
   "It is possible even without a running system.",
   "It can draw on test results, metrics and defect clusters as information sources.",
   "It becomes more meaningful if the development team is not involved because it would otherwise be biased.",
   "It is meaningful after implementation is complete, because measured values exist only then.",
   "It needs prioritized quality goals as a yardstick.",
   "Its subject is the source code; documentation and design models are not part of it.",
   "It can combine measurements and expert assessments.",
   "Results of different systems can easily be compared if the process is uniform."
  ],
  "correct": [
   0,
   1,
   4,
   6
  ],
  "optExpl": [
   "Correct: Even designs can be checked against quality goals, e.g. using scenarios. That is exactly when corrections are still cheap; a running system is not required.",
   "Correct: Among others, the curriculum names test cases and their results, source-code metrics, defects and their distribution (defect clusters) as information sources for quality analysis (R1).",
   "Wrong: The team knows the decisions, assumptions and weak spots best. External reviewers can sharpen the view, but excluding the team deprives the evaluation of important knowledge.",
   "Wrong: Measurements are one possible source but not the only one. Scenario-based evaluations and reviews work on the design already, when corrections are still cheap.",
   "Correct: Without a yardstick you cannot judge whether an architecture is good enough. The prioritised quality goals, often made concrete as scenarios, provide that yardstick.",
   "Wrong: As information sources the curriculum also names requirements and architecture documentation as well as design and architecture models, not just source code. What is evaluated is the architecture, not the code alone.",
   "Correct: Quantitative data such as metrics, logs or load tests and qualitative expert assessments complement each other. According to the curriculum, both are part of analysis.",
   "Wrong: The evaluation is against the system's own prioritised quality goals. A grade comparable across systems is not the aim; the outcome is risks, trade-offs and recommendations."
  ],
  "explanation": "Architecture evaluation measures against prioritised quality goals, is possible on the design already, combines measurements with expert judgement and uses available information sources such as tests, metrics and defect clusters. Traps: it does not need a finished implementation first, delivers no comparable overall grade, and the development team belongs in it."
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
 "c5q25": {
  "q": "In a long-running system, the implemented structure increasingly deviates from the documented target architecture. Which statements are correct?",
  "options": [
   "An evaluation of complexity metrics can reliably prove erosion.",
   "The planned qualities can no longer be reliably expected.",
   "The deviation is unproblematic as long as the tests pass.",
   "This is called architecture erosion.",
   "Adapting the documentation to the actual state removes the deviation and thus the problem.",
   "Dependency analyses make the deviations visible.",
   "Conformity with the architecture decisions should be checked regularly, e.g. through reviews or tools."
  ],
  "correct": [
   1,
   3,
   5,
   6
  ],
  "optExpl": [
   "Wrong: Complexity metrics show the internal structure of individual building blocks, not deviation from the target architecture. Erosion is made visible through conformity checks, e.g. dependency analyses or reviews.",
   "Correct: The quality properties were designed for the intended structure, for example replaceability through clear layers. If the code deviates, this planning no longer reliably holds and quality goals may be missed unnoticed.",
   "Wrong: Tests check behaviour, not adherence to the structure. An eroded architecture can pass all tests and still undermine qualities such as modifiability or replaceability.",
   "Correct: The gradual drift between intended and actual architecture is called architecture erosion. Without deliberate countermeasures such as refactoring, it increases over time.",
   "Wrong: This only removes the visible deviation, not the actual problem. Whether the actual structure still supports the quality goals remains unclear – the erosion is merely legitimised after the fact.",
   "Correct: Tool-supported dependency analyses show where the code contains forbidden dependencies, such as calls bypassing the layering. According to the curriculum, they are a means of conformance checking.",
   "Correct: Assessing conformity with architecture decisions is a learning goal of its own. Regular checks, manual in a review or tool-supported, make erosion visible early."
  ],
  "explanation": "The increasing deviation between target and actual structure is architecture erosion; it endangers the planned qualities and becomes visible through conformity checks such as dependency analysis. Traps: adapting the documentation does not remedy it, complexity metrics do not prove it, and passing tests say nothing about the structure."
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
   "Wrong: That is the purpose of a qualitative analysis, e.g. scenario-based. Conformance, by contrast, asks whether code and intended architecture match.",
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
   "Each team chooses its own format, as long as it is internally consistent."
  ],
  "rowExpl": [
   "Management needs different content than developers. Merely shortening the developer documentation does not fit the audience, so the approach is not sensible.",
   "A shared template such as arc42 gives all teams the same structure. This makes things easier to find and keeps the documentation of the whole system uniform, so it is sensible.",
   "Contributions from several teams are harmonized in style and content so that the overall documentation feels uniform. This is sensible because otherwise breaks appear.",
   "Verbal alignment and documentation complement each other; one does not replace the other. Without overarching documentation there is no written basis to refer to, so this is not sensible.",
   "A format of its own per team makes finding things harder, even if each is consistent in itself. For a shared system this is therefore not sensible."
  ],
  "explanation": "Sensible: a shared template such as arc42 and harmonising the teams' contributions. Not sensible: shortened developer documentation for management (it needs different content), oral coordination instead of documentation (the two complement each other) and a format of its own per team (makes finding things harder)."
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
   "It contributes to achieving qualities such as energy efficiency.",
   "Its main benefit lies in lower costs of initial development."
  ],
  "rowExpl": [
   "Architecture remains iterative; even a careful design is developed and reviewed further. It therefore does not make later iterations unnecessary.",
   "One benefit of architecture is shared understanding: structures and concepts become comprehensible to relevant stakeholders. The statement therefore applies.",
   "The stakeholders determine the scope of functions, not the architecture. It provides the structure in which features are implemented and does not decide them.",
   "Architecture contributes to achieving qualities such as energy efficiency, because structural decisions strongly influence them. The statement therefore applies.",
   "Architecture work initially costs effort; its benefit does not lie primarily in cheaper initial development. The statement therefore does not apply."
  ],
  "explanation": "Applies: architecture creates understanding among stakeholders and contributes to qualities such as energy efficiency. Does not apply: architecture remains iterative, even a careful design is developed further; the stakeholders determine the scope of functions; and architecture work initially costs effort – its benefit does not lie primarily in cheaper initial development."
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
   "Responses take less than two seconds at the 95th percentile."
  ],
  "rowExpl": [
   "The existing Oracle database is a technical mandate that restricts the solution space. It describes no desired function or quality, so it is a constraint.",
   "Approval by the change advisory board is an organizational mandate for every production release. It is imposed on the project and is not something the system does, so it is a constraint.",
   "Missing cloud experience in the team is an organizational circumstance that limits solutions. It is given and not a desired property, so it is a constraint.",
   "PDF export is a function users can use, i.e. a functional requirement. It is not an external mandate, so it counts as a requirement.",
   "The response time at the 95th percentile describes how well the system performs and is a quality requirement. The concrete number does not turn it into a constraint."
  ],
  "explanation": "The existing Oracle database (technical), CAB approval and missing cloud experience (organisational) are constraints. PDF export is a functional requirement, the response time at the 95th percentile a quality requirement. Trap: a concrete number does not turn a quality requirement into a constraint."
 },
 "k19": {
  "q": "Assign each requirement of a booking system: functional requirement or quality requirement?",
  "categories": [
   "Functional requirement",
   "Quality requirement"
  ],
  "rows": [
   "Switching the payment provider affects at most one module.",
   "Administrators can create roles and assign permissions to them.",
   "The system is available 99.9% of the time on a monthly average.",
   "The app runs on Android and iOS without modification.",
   "Customers can cancel a booking and receive a confirmation."
  ],
  "rowExpl": [
   "That switching a provider affects at most one module describes how well the system can be changed (modifiability). It is about HOW WELL, not about a function.",
   "Creating roles and assigning permissions is an offered function, i.e. the WHAT. It describes no quality such as availability or modifiability and is therefore functional.",
   "Availability of 99.9% on a monthly average describes how well the system runs and is not a function. It is therefore a quality requirement.",
   "Running on Android and iOS without modification describes portability and thus HOW WELL. It is not a function of its own for users.",
   "Cancelling a booking and receiving a confirmation is an offered function, i.e. the WHAT. A quality requirement would instead describe how well the system does so."
  ],
  "explanation": "Role management and cancellation are offered functions, i.e. WHAT the system does. Limited impact of switching the payment provider (modifiability), 99.9 % availability and running on Android and iOS (portability) describe HOW WELL the system performs."
 },
 "k21": {
  "q": "True or false? Statements on the mandatory patterns layers, pipes & filters and microservices.",
  "categories": [
   "True",
   "False"
  ],
  "rows": [
   "Compared with a monolith, microservices typically increase operations and monitoring effort.",
   "In pipes and filters each filter calls its successor directly.",
   "Because microservices are independently deployable, interface contracts may be changed without coordination.",
   "Strict layering also allows calls to higher layers, relaxed layering only to deeper ones.",
   "In relaxed layering, layers may also use deeper layers that are not directly adjacent, but not higher ones.",
   "A modular monolith can have clear internal building block boundaries and still run as a single deployment artifact."
  ],
  "rowExpl": [
   "Many deployment units require automation, tracing and distributed logging.",
   "Filters do not know their neighbors; the connection runs through pipes or the data stream.",
   "Independent deployment requires compatible contracts; incompatible changes force coordinated adaptation of consumers.",
   "Upward calls are not intended in either variant. The difference lies in skipping deeper layers.",
   "Exactly this distinguishes the relaxed from the strict variant.",
   "Modularity concerns internal structure, deployment concerns delivery. Both can be chosen independently."
  ],
  "explanation": "Typical traps: relaxed layering only allows skipping downward, filters do not know their neighbors, and independent deployment does not make contract coordination unnecessary."
 },
 "k22": {
  "q": "An architecture team collects topics for chapter 8 of the arc42 documentation. Is it a cross-cutting topic (affects many building blocks)?",
  "categories": [
   "Cross-cutting concern",
   "Not cross-cutting"
  ],
  "rows": [
   "How permissions are checked when several building blocks offer protected data.",
   "How the discount rules for new customers are calculated.",
   "How configuration values are provided per environment.",
   "Which fields the customer form contains for address entry.",
   "How errors are recorded, logged and reported uniformly."
  ],
  "rowExpl": [
   "Permission checking arises in every building block with protected data. That is a cross-cutting topic.",
   "This is a domain rule implemented in one building block. It does not affect many blocks and is therefore not a cross-cutting topic.",
   "Almost every building block reads configuration values. That is a cross-cutting topic.",
   "This concerns a single user interface and no overarching problem. That is not a cross-cutting topic.",
   "Errors occur in all building blocks and should be handled uniformly. That is a cross-cutting topic."
  ],
  "explanation": "A cross-cutting topic affects many building blocks at once and needs an overarching rule. Domain rules or details of a single user interface, in contrast, live in one building block."
 },
 "k23": {
  "q": "Assess the approach to architecture design. How sensible is it?",
  "categories": [
   "Sensible",
   "Not sensible"
  ],
  "rows": [
   "Refine building blocks with new, barely proven technology earlier and deeper than simple blocks.",
   "Align the building block decomposition with the existing team structure and consider quality requirements only secondarily.",
   "End the refinement of a building block as soon as teams can implement it from its black-box description.",
   "First work out the white box down to the lowest level for all building blocks before assessing risks.",
   "Derive package structure and call rules for the source code from the chosen layering.",
   "Fix the database and framework choice before the prioritised quality goals are clarified."
  ],
  "rowExpl": [
   "Sensible: The depth of refinement follows risk and complexity. Uncertain parts should be understood early. Uniform depth would not be sensible.",
   "Not sensible: The decomposition is justified by quality requirements and the domain. Team structures are a factor, but no substitute for the justification.",
   "Sensible: The stopping criterion is implementability. Further refinement creates effort without benefit.",
   "Not sensible: This causes effort at uncritical places and postpones risk assessment. Risks are assessed early and refinement is steered deliberately.",
   "Sensible: Architectural decisions have consequences for the code, which should be derived and made verifiable.",
   "Not sensible: Technology decisions should serve the quality goals. Fixing them beforehand risks decisions without justification."
  ],
  "explanation": "Sensible: risk-oriented refinement, stopping at implementability and deriving code consequences. Not sensible: uniformly deep elaboration, decomposition by team structure instead of requirements and technology choice before the quality goals."
 },
 "k24": {
  "q": "Your team introduces architecture decision records (ADR) following Nygard. Does the content belong in an ADR?",
  "categories": [
   "Belongs in an ADR",
   "Does not belong"
  ],
  "rows": [
   "The status, e.g. proposed, accepted or superseded.",
   "A continuously updated overall description of the architecture.",
   "Later changes to the decision, worked directly into the original text.",
   "The context that made the decision necessary."
  ],
  "rowExpl": [
   "The status (e.g. proposed, accepted or superseded) is part of an ADR after Nygard. It shows whether a decision is in force.",
   "A continuously updated overall description is the job of the architecture documentation. An ADR, by contrast, records a single decision, so this does not belong in it.",
   "A changed decision gets a new ADR that supersedes the old one. Working it into the original text afterwards would distort the history, so it does not belong in it.",
   "The context explains why the decision became necessary in the first place. It is a fixed part of an ADR after Nygard and makes the decision comprehensible."
  ],
  "explanation": "An ADR after Nygard contains the context and the status (proposed, accepted, superseded). Not included: a continuously maintained overall description (that is what the architecture documentation is for) and changes worked in afterwards – a changed decision gets a new ADR that supersedes the old one."
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
  "rowExpl": [
   "The survey captures users' opinions on usability. Even though answers are recorded as numbers from 1 to 5, it does not measure the system, so it is qualitative rather than quantitative.",
   "Lines of code and cyclomatic complexity are metrics measured directly on the code. They are measurements rather than assessments, so the method is quantitative.",
   "Response times under load are concrete measurements of the system. They are measured, not estimated, so the method is quantitative.",
   "The expert discussion yields assessments of risks rather than measurements. It relies on experience and judgment, so the method is qualitative.",
   "Cyclic dependencies can be counted by a tool and yield a figure. That is a measurement, not an assessment, so the method is quantitative."
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
  "rowExpl": [
   "Static analysis compares the actual dependencies in the code with the layering rules. This makes violations of the architecture decisions visible, so it reveals deviations.",
   "Load tests check behaviour and performance of the overall system, not its structure. They can pass even though forbidden dependencies exist, so they are unsuitable for this.",
   "Higher unit test coverage shows how much code is tested, not whether it follows the architecture decisions. Tests can pass despite forbidden dependencies, so it is unsuitable for this.",
   "Acceptance tests check whether the business requirements are met, not conformance to the architecture. They often stay green despite structural violations, so they are unsuitable for this.",
   "A code review can specifically check whether the decisions recorded in ADRs were implemented. Deviations are noticed this way, so the approach reveals them.",
   "An architecture test in the build automatically checks rules such as permitted package access and reports violations. It continuously compares implementation and decisions, so it reveals deviations."
  ],
  "explanation": "Static dependency analysis against layering rules, architecture tests in the build and code reviews against ADR decisions reveal deviations. Load tests, higher unit test coverage and acceptance tests check behaviour and quality, not conformance – they can pass even though forbidden dependencies exist."
 },
 "k27": {
  "q": "Is the change to a published interface usually backward compatible for existing users?",
  "categories": [
   "Backward compatible",
   "Not backward compatible"
  ],
  "rows": [
   "Add a new optional field to a response.",
   "Narrow the value range of an input parameter.",
   "Widen the value range of an input parameter.",
   "Rename an existing response field while keeping its meaning.",
   "Make a new parameter without a default value mandatory.",
   "Offer an additional operation."
  ],
  "rowExpl": [
   "Existing users ignore the unknown field (tolerant receiving) and keep working unchanged. Only removing or reinterpreting existing fields would be incompatible.",
   "Previously valid calls may now be rejected. Whoever sends inputs from the former range is turned away; narrowing is therefore incompatible.",
   "All previously valid inputs remain valid; only further ones are added. Existing users notice nothing, hence compatible.",
   "Users read the field under its old name; the meaning stays the same, but the name is part of the contract’s syntax. Renaming breaks existing users.",
   "Existing calls do not contain the new parameter and therefore fail. With a default value the change would be compatible, without it not.",
   "Existing users do not call the new operation and remain unaffected. Extending an interface with something new is typically compatible."
  ],
  "explanation": "Compatible are changes that leave previously valid calls and read data unchanged (adding, widening). Incompatible are narrowing, renaming, removing and new mandatory inputs. Trap: unchanged meaning is not enough – names and input ranges are part of the contract as well."
 },
 "c3q67": {
  "q": "There is very tight coupling between the invoicing and customer modules. Which statements are correct?",
  "options": [
   "Tight coupling between modules means that cohesion within the modules is low.",
   "A change in one of the modules can entail adaptations in the other.",
   "Two teams can still develop the modules in parallel without coordination as long as the interface is documented.",
   "Tight coupling can be justified if both modules belong together functionally and are mostly changed together.",
   "Tight coupling leads to worse runtime performance."
  ],
  "correct": [
   1,
   3
  ],
  "optExpl": [
   "Wrong: Coupling and cohesion are independent criteria. Two modules that are consistent in themselves can still be tightly coupled.",
   "Correct: Every dependency is a path along which changes propagate. If, for example, the customer structure changes, the invoicing module may be affected too.",
   "Wrong: Documentation does not remove the dependency. If one module changes, the other is affected, so coordination between the teams remains necessary.",
   "Correct: If the modules belong together functionally and are mostly changed together, tight coupling is less problematic. A shared building block may even be the better cut.",
   "Wrong: Coupling is primarily a maintainability issue. Tightly coupled local calls can even be faster than loosely coupled calls over a network."
  ],
  "explanation": "Tight coupling propagates changes across module boundaries and requires coordination; it is not wrong per se if the modules belong together functionally. Traps: equating coupling with cohesion, seeing documentation as decoupling, confusing coupling with performance."
 },
 "c3q68": {
  "q": "Which consequences are to be expected if a building block exposes its implementation details?",
  "options": [
   "Coupling remains unchanged as long as users only read the details and do not modify them.",
   "Users can rely on details that were never guaranteed.",
   "The building block becomes easier to replace because users know its internals.",
   "Tests against internals become easier but break with every internal change.",
   "The interface of the building block becomes broader and thus harder to keep stable."
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Wrong: Even read access creates a dependency on details. If the structure changes, the reading users break just the same.",
   "Correct: Users use what is visible, even without a guarantee. Later internal changes then break seemingly uninvolved users.",
   "Wrong: Precisely because users depend on the internals, a replacement has to reproduce these details. The exchange becomes harder.",
   "Correct: Direct access to internals eases checking but ties the tests to the implementation. They become fragile under refactorings.",
   "Correct: Whatever is exposed effectively becomes part of the interface. The more belongs to it, the less the building block can be changed without consequences for users."
  ],
  "explanation": "Without information hiding, every implementation detail effectively becomes interface: users bind to it, changes and replacement become more expensive, tests become more fragile. Traps: regarding read access as harmless, and openness as an aid for replacement."
 },
 "c3q69": {
  "q": "A building block \"Utils\" bundles date formatting, PDF export and discount logic. Which statements about it are correct?",
  "options": [
   "It has several independent reasons for change.",
   "Cohesion measures the dependencies between building blocks, so coupling is the actual problem here.",
   "Users also couple to functions they do not need.",
   "Its broad usability compensates for the low cohesion.",
   "Low cohesion means that the building block has many dependencies on other building blocks.",
   "Splitting increases the cohesion of the parts but can increase the number of building blocks and interfaces."
  ],
  "correct": [
   0,
   2,
   5
  ],
  "optExpl": [
   "Correct: Domain discount rules, document format and date presentation change for different reasons. A building block that changes for several reasons has low cohesion.",
   "Wrong: Cohesion measures the unity within a building block; dependencies between building blocks concern coupling. Here cohesion is low.",
   "Correct: Whoever only needs date formatting depends on the whole building block and is affected by changes to PDF export and discount logic.",
   "Wrong: Broad usage rather increases the damage: every change affects many users. Cohesion cannot be compensated by reuse.",
   "Wrong: That confuses cohesion with coupling. A building block can have low cohesion and still few dependencies.",
   "Correct: Smaller, focused building blocks are more cohesive. Against this stand more building blocks and interfaces that have to be maintained."
  ],
  "explanation": "Low cohesion means: a building block bundles things that do not belong together and changes for several reasons; its users couple to unneeded things. Traps: swapping cohesion and coupling, and regarding reusability as compensation."
 },
 "c3q70": {
  "q": "SQL queries are placed directly in the UI code. Which statements about this are correct?",
  "options": [
   "The violation concerns the cohesion of the UI building block, not its coupling.",
   "A change of the database schema forces changes in the UI building block.",
   "The logic is hardly testable without a database.",
   "The problem only occurs when several UIs use the same queries.",
   "A separate persistence building block can cause runtime costs, which has to be weighed against modifiability."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Wrong: The UI building block bundles things that do not belong together (low cohesion) and additionally depends directly on database schema and technology (tight coupling). Both are affected.",
   "Correct: Without separation of concerns the UI depends on the schema. Changes to persistence act directly on the UI code.",
   "Correct: Whoever wants to check UI logic then needs the database as well. Separate building blocks would allow tests with test doubles.",
   "Wrong: The coupling to the database already exists with a single UI. Several UIs only aggravate it through additional duplication.",
   "Correct: Additional indirection can cost performance. This is a real trade-off, which is usually no reason to put SQL into the UI."
  ],
  "explanation": "Missing separation of concerns couples the UI to the database and hinders testing; a separation costs some runtime and effort, which has to be weighed. Traps: seeing only cohesion or only coupling, and suspecting the problem only with multiple use."
 },
 "c3q71": {
  "q": "Which statements about the consequences of duplicated decisions or logic (violation of DRY) are correct?",
  "options": [
   "Logical coupling arises: the copies have to be changed together although no building block depends on the other.",
   "The problem concerns duplicated logic, but not duplicated constants or configuration values.",
   "Similar code that represents different domain knowledge may remain separate if both are to change independently.",
   "Static dependency analyses reliably reveal the coupling between the copies.",
   "The risk of inconsistent changes grows with the number of copies."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Correct: The dependency lies in the shared decision, not in a call. It is not visible in the code as a dependency and is easily overlooked.",
   "Wrong: DRY applies to every form of knowledge. A limit value recorded several times can drift apart just like copied logic.",
   "Correct: Accidental similarity is no duplication of knowledge. Whoever merges it couples independent reasons for change.",
   "Wrong: There is no static dependency between the copies. Precisely for that reason the logical coupling stays invisible in such analyses.",
   "Correct: Every change has to be carried over to all places. The more copies exist, the more likely one is forgotten."
  ],
  "explanation": "Duplicated decisions create hidden logical coupling and a risk of inconsistency. Traps: considering only logic, trusting static analyses, and merging similar things blindly."
 },
 "c3q72": {
  "q": "In an architecture planned as strictly layered, there are layer skips and upward calls. What applies?",
  "options": [
   "Notifications to upper layers can be realized via callbacks or events without violating the layering.",
   "The implementation deviates from the planned design (erosion); a conformance check can reveal this.",
   "Upward calls create cyclic dependencies between layers and reduce their replaceability.",
   "Layer skips increase coupling but do not affect the replaceability of individual layers.",
   "This is effectively relaxed layering, in which upward calls are allowed as well."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: The lower layer only knows an abstract interface it defines itself, not the concrete upper layer. The dependency direction stays downward.",
   "Correct: Deviations between intended and actual structure are the core of architecture erosion. Static analysis or build rules make them visible.",
   "Correct: If a lower layer knows the upper one, it can no longer be understood, tested or replaced independently.",
   "Wrong: Skipping a layer creates dependencies on the details of deeper layers. These can then no longer be replaced without also adapting the skipping layers.",
   "Wrong: Relaxed layering only allows skipping lower layers, not upward calls. These remain a violation in every variant."
  ],
  "explanation": "Strict layering only allows access to the layer directly below. Layer skipping belongs to relaxed layering; upward calls are not intended in any variant. The deviation from the design is erosion and detectable by conformance checks. Notifying upper layers remains compliant through callbacks or events."
 },
 "c1q30": {
  "q": "You are the software architect for a core banking system. What must you pay particular attention to in this role?",
  "options": [
   "Interpreting regulatory requirements in a legally binding way.",
   "Sharpening security, traceability and availability with stakeholders.",
   "Evaluating risks to achieving the requirements.",
   "In conflicts of goals give priority to security.",
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
   "Determine with IT operations which business functions the system offers.",
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
   "Wrong: The business functions are clarified by the product owner and requirements analysis with the business side. IT operations contributes requirements on deployment and operability, not the functional scope.",
   "Correct: Product management and requirements analysis provide the “what”. Architects clarify business goals, priorities and quality requirements with them in order to derive sound architecture decisions."
  ],
  "explanation": "Architects collaborate in an audience-appropriate way with the PO and requirements analysis, IT operations, and QA and testing. Traps: they do not overwhelm management with detailed UML diagrams, and the functional scope is clarified with the PO and requirements analysis, not with IT operations."
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
  "q": "Which of the following terms denote architectural patterns or design approaches?",
  "options": [
   "Pipes and filters",
   "Domain-driven design (DDD)",
   "ATAM",
   "Ports and adapters (hexagonal architecture)",
   "C4",
   "arc42"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Correct: A pattern that decomposes processing into independent steps connected by data streams.",
   "Correct: A design approach that aligns structure with business contexts and a shared model.",
   "Wrong: A method for evaluating architectures using quality scenarios; not a design pattern.",
   "Correct: A pattern that separates the domain core from technical adapters via ports.",
   "Wrong: A model for visualizing architecture at four levels of detail; neither a structural pattern nor a layering of the system.",
   "Wrong: A template for documenting architectures; it does not prescribe a system structure."
  ],
  "explanation": "Patterns and approaches (pipes and filters, ports and adapters, DDD) describe how a system is structured. arc42, C4 and ATAM instead support documentation, visualization and evaluation, but do not prescribe a system structure."
 },
 "c3q74": {
  "q": "Which of the following approaches to architecture development does the CPSA-F curriculum name?",
  "options": [
   "Feature-driven architecture: the structure is derived from individual features.",
   "Global analysis: systematically analyse influencing factors and derive solution strategies.",
   "View-based architecture development.",
   "Code first: derive the structure from the emerging source code.",
   "Technology-driven design: fix the framework first, then derive the structure.",
   "Evolutionary architecture."
  ],
  "correct": [
   1,
   2,
   5
  ],
  "optExpl": [
   "Wrong: No such approach is named in the curriculum. The domain-oriented approach named there is domain-driven design.",
   "Correct: Global analysis is among the further approaches named in the curriculum.",
   "Correct: The architecture is developed through several views, e.g. following Kruchten’s 4+1 model.",
   "Wrong: The curriculum names no code-first approach. The structure is designed, not derived from code afterwards.",
   "Wrong: This is not named as an approach. Technologies are constraints or decisions, but not a design approach of their own.",
   "Correct: The architecture grows step by step, with automated checks safeguarding qualities."
  ],
  "explanation": "The curriculum names, among others, top-down, bottom-up, view-based, domain-driven design, evolutionary architecture, global analysis and model-based design. “Code first”, “technology-driven” or “feature-driven architecture” are not curriculum approaches."
 },
 "c3q75": {
  "q": "Which advantages can be justified for a layered architecture?",
  "options": [
   "The directed downward dependency (without cycles) makes the system easier to understand.",
   "Functional changes usually remain confined to a single layer.",
   "Each layer can be scaled independently of the others.",
   "A layer can be replaced as long as its interface to the layer above is preserved.",
   "Response time improves because each layer preprocesses intermediate results for the layer above.",
   "Presentation, business logic and data access can be developed and tested separately."
  ],
  "correct": [
   0,
   3,
   5
  ],
  "optExpl": [
   "Correct: Acyclic dependencies make it possible to understand and test layers bottom-up.",
   "Wrong: Layers cut by technical concerns. A new business attribute typically touches UI, logic and persistence.",
   "Wrong: Layers are initially logical structures. Independent scaling requires separate deployment units, as offered e.g. by microservices.",
   "Correct: The upper layer knows only the interface of the lower one, not its realization. This makes replacement possible.",
   "Wrong: Layering is not a performance measure; passing calls through several layers tends to cost runtime.",
   "Correct: Separation of concerns is the main motivation of layering; defined interfaces allow layers to be tested in isolation."
  ],
  "explanation": "Layers separate concerns by abstraction level and impose a directed dependency. This supports comprehensibility and replaceability. Statements on functional change locality and independent scaling cannot be justified: functional changes often cut through all layers, and layers are initially logical, not deployable units."
 },
 "c3q76": {
  "q": "What disadvantages or limits does strict layering have?",
  "options": [
   "Strict layering inevitably leads to cyclic dependencies between adjacent layers.",
   "Intermediate layers often merely forward calls, causing overhead without functionality of their own.",
   "Because each layer is bound to its neighbor, no layer can be replaced.",
   "The layers must be operated as separate processes or deployments.",
   "A new business attribute typically has to be passed through all layers."
  ],
  "correct": [
   1,
   4
  ],
  "optExpl": [
   "Wrong: Strict layering allows only downward dependencies and is therefore acyclic. Cycles arise only through violations (upward calls).",
   "Correct: In the strict variant a layer may use only the one directly below; simple accesses therefore traverse every layer.",
   "Wrong: Precisely the binding through defined interfaces makes replacement possible. This is an advantage of layering, not a disadvantage.",
   "Wrong: Layers are logical structures and can run within a single process. Distribution is a separate decision.",
   "Correct: Layers cut by technical concerns, not by business function. Functional changes are therefore not local."
  ],
  "explanation": "Disadvantages of strict layering: functional changes pass through all layers, and intermediate layers often merely pass calls on. Layers remain replaceable, are not necessarily separately deployed, and layering can be combined with other styles, without cyclic dependencies."
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
   "They set the business requirements bindingly without questioning them.",
   "They point out the consequences of their decisions to stakeholders.",
   "They check whether source code and architecture are consistent.",
   "They prioritize the business backlog.",
   "They recognize on their own when another iteration is needed.",
   "In goal conflicts, they alone decide which quality goal takes precedence."
  ],
  "rowExpl": [
   "Questioning requirements and constraints is one of the architects' tasks according to the curriculum. The business requirements are owned by the business side (e.g. the product owner), so the statement is wrong.",
   "Architects point out the consequences of their decisions to stakeholders so that these can take part in deciding in an informed way. That is part of their tasks, so the statement is correct.",
   "Part of the responsibility is that code and architecture match; otherwise the architecture drifts away from what is built. The statement is therefore correct.",
   "The business backlog is prioritized by the product owner. Architects contribute architecture-relevant aspects but do not set the business priorities. The statement is wrong.",
   "Architecture is iterative, and architects recognize on their own when another iteration is needed. They do not wait for instructions, so the statement is correct.",
   "Conflicts between quality goals are decided together with the stakeholders, not by architects alone. The statement is therefore wrong."
  ],
  "explanation": "Architects point out the consequences of their decisions, check consistency between code and architecture and recognize on their own when another iteration is needed. Traps: requirements are questioned rather than set bindingly, the backlog is prioritized by the product owner, and goal conflicts are decided with stakeholders."
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
   "A review board bindingly determines understandability for all audiences."
  ],
  "rowExpl": [
   "Efficiency concerns not only readability but also the effort of creating and maintaining the documentation. The statement is therefore correct.",
   "Understandability depends on who reads. Ultimately only the target group can judge whether the documentation is understandable, so the statement is correct.",
   "Correctness means conformity with the system, not elaborateness. More detailed documentation can be just as wrong, so the statement is wrong.",
   "Maintainability means being able to keep the documentation up to date at reasonable effort, not that it is changed rarely. The statement is therefore wrong.",
   "No committee can bindingly determine understandability on behalf of all audiences. Only each target group itself can, so the statement is wrong."
  ],
  "explanation": "True: efficiency includes the effort of creating and maintaining the documentation, and comprehensibility is ultimately judged by the target group. False: correctness means conformity with the system, not elaborateness; maintainability means being able to keep the documentation up to date, not rare changes; and no committee can determine comprehensibility on behalf of others."
 },
 "k31": {
  "q": "Statements about the reasons for an architecture analysis – correct or wrong?",
  "categories": [
   "Correct",
   "Wrong"
  ],
  "rows": [
   "Before implementation, an analysis can already prove that the quality goals will be achieved.",
   "It can determine whether the implementation matches the architecture decisions.",
   "The yardstick is the prioritized quality goals or requirements.",
   "It only makes sense once a running implementation exists.",
   "An analysis is useful before, during and after implementation.",
   "It checks whether architecture-relevant stakeholder concerns are addressed."
  ],
  "rowExpl": [
   "Wrong: Before implementation, an analysis can only uncover risks in the design and estimate whether the requirements will probably be met. Proof of goal achievement is only possible on the implemented system. The statement is therefore wrong.",
   "One purpose of the analysis is to check whether the implementation matches the architecture decisions made. The statement is therefore correct.",
   "An analysis always evaluates against a yardstick, and that is the prioritised quality goals or requirements. The statement is therefore correct.",
   "An analysis already makes sense before implementation, for example on designs, and not only once code runs. The statement is therefore wrong.",
   "An architecture analysis is worthwhile in all phases: before, during and after implementation. The statement is therefore correct.",
   "The analysis also checks whether architecturally relevant stakeholder concerns are addressed. The statement is therefore correct."
  ],
  "explanation": "Architecture analysis makes sense before, during and after implementation (true), so not only once code runs (false). It measures against prioritised quality goals (true), checks conformance of the implementation to the decisions (true) and whether architecturally relevant stakeholder concerns are addressed (true). Trap: before implementation it shows risks and the likelihood of fulfilment, but no proof of goal achievement."
 },
 "k32": {
  "q": "Statements about design principles of modularization – correct or wrong?",
  "categories": [
   "Correct",
   "Wrong"
  ],
  "rows": [
   "High cohesion can reduce the number of dependencies between building blocks because related tasks are not distributed across building block boundaries.",
   "Loose coupling is achieved by avoiding dependencies between building blocks completely.",
   "Abstraction and information hiding are the same principle under different names.",
   "How strictly a principle is applied depends on requirements and quality goals.",
   "A module cut by technical layers ensures high domain cohesion.",
   "Coupling between two building blocks can exist even without direct calls, for example via shared data formats."
  ],
  "rowExpl": [
   "What belongs together communicates internally instead of across building block boundaries. High cohesion therefore usually helps to reduce dependencies between building blocks; the statement is correct.",
   "Building blocks have to work together, so dependencies are necessary. Loose coupling means limiting them to what is necessary; the statement is wrong.",
   "Abstraction forms appropriate generalizations, information hiding conceals decisions likely to change. They complement each other but are not identical; the statement is wrong.",
   "Principles are aids for weighing, not a checklist. They are weighted in the context of the requirements; the statement is correct.",
   "A layer cut distributes domain-related things that belong together across several modules. Domain cohesion requires a domain-oriented cut; the statement is wrong.",
   "Shared assumptions about data formats or structures bind building blocks to each other even without a call. Coupling goes beyond call relations; the statement is correct."
  ],
  "explanation": "Correct: high cohesion tends to reduce dependencies between building blocks, principles are weighted depending on requirements, and coupling exists even without calls. Wrong: loose coupling does not mean free of dependencies, abstraction and information hiding are different principles, and a layer cut does not ensure domain cohesion."
 },
 "k33": {
  "q": "Statements about formulating quality requirements – correct or wrong?",
  "categories": [
   "Correct",
   "Wrong"
  ],
  "rows": [
   "A quality requirement should specify how its fulfilment will be checked.",
   "A quality scenario names the tactic used to achieve the quality.",
   "No measurable scenarios can be formed for vague goals such as user-friendliness.",
   "A metric turned into a target can lose its meaningfulness as a result.",
   "“95% of searches in under 1 s” is already a complete scenario."
  ],
  "rowExpl": [
   "A quality requirement should specify how its fulfilment is checked; otherwise it remains open whether it has been achieved. The statement is therefore correct.",
   "A quality scenario describes the WHAT, i.e. the required quality, not the tactic used to achieve it. The tactic belongs to the solution, so the statement is wrong.",
   "Even vague goals such as user-friendliness can be turned into measurable scenarios. The claim that this is impossible is therefore wrong.",
   "When a metric becomes a target, it tends to be optimized for its own sake and says less about the actual quality (Goodhart). The statement is correct.",
   "A response measure alone is not yet a complete scenario; context, stimulus and response are missing. The statement is therefore wrong."
  ],
  "explanation": "True: requirements should specify their verification method, and a metric turned into a target loses its meaningfulness (Goodhart). False: scenarios describe the WHAT, not the tactic; even usability can be formulated measurably; and a response measure alone is not yet a complete scenario – context, stimulus and response are missing."
 },
 "c1q36": {
  "q": "The requirements are incomplete. Which statements about handling architecture decisions are correct?",
  "options": [
   "Hard-to-reverse decisions should be made as late as responsibly possible.",
   "Unconfirmed assumptions do not belong in the architecture documentation, as it should contain only established facts.",
   "The greater the uncertainty, the more detailed the design should be worked out in advance.",
   "Postponing a decision is itself a decision that carries risks, such as delays or unintended commitments.",
   "Particularly risky assumptions are best checked only once the overall design is in place.",
   "Flexibility where changes are expected is sensible; blanket flexibility increases complexity without benefit."
  ],
  "correct": [
   0,
   3,
   5
  ],
  "optExpl": [
   "Correct: The later a hard-to-reverse decision is made, the more knowledge is available. “Responsibly” means that waiting itself does not yet cause harm.",
   "Wrong: Especially under uncertainty, explicitly recorded assumptions are important because they can be checked and show which decisions need re-evaluation if an assumption changes.",
   "Wrong: A detailed up-front design rests on the same incomplete knowledge and often has to be discarded once requirements are clarified. Uncertainty is better reduced iteratively.",
   "Correct: Whoever does not decide de facto also makes a decision. Teams then commit implicitly, or follow-up work is delayed. Postponing is the result of a trade-off, not a risk-free state.",
   "Wrong: Risky assumptions in particular should be checked early, e.g. with a prototype or vertical slice. After the overall design, corrections are expensive.",
   "Correct: Extension points where changes are likely limit the cost of change. Flexibility in reserve, by contrast, creates complexity for requirements that may never come."
  ],
  "explanation": "With incomplete requirements: decide hard-to-reverse things late but not too late, record assumptions explicitly, check risks early and apply flexibility selectively. Traps: up-front detailing, concealing assumptions, regarding postponing as risk-free."
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
  "q": "A building block calls the API of an external map service directly in many places. Which statements are correct?",
  "options": [
   "Outages of the service can affect the building block even if the API remains unchanged.",
   "The building block’s afferent coupling increases through the use of the service.",
   "A provider SLA protects against the effects of API changes.",
   "Scattered direct calls increase the effort of switching providers because every call site is affected.",
   "The dependency is efferent and increases the building block’s instability.",
   "Since the service is called remotely, the coupling exists only at runtime."
  ],
  "correct": [
   0,
   3,
   4
  ],
  "optExpl": [
   "Correct: The service’s availability and response time directly affect the building block unless cushioned by timeouts or fallbacks.",
   "Wrong: The dependency runs from the building block to the service and is thus outgoing (efferent). Afferent counts how many other building blocks depend on this one.",
   "Wrong: An SLA covers at most availability and response times, not API changes, version changes or deprecations. The structural coupling remains.",
   "Correct: If the external API is scattered across the code, every call site has to be adapted on a switch. Encapsulation in one place would concentrate the effort.",
   "Correct: Outgoing dependencies on an externally controlled, volatile element increase instability in the sense of the stability metric: the building block has to react to changes in the service.",
   "Wrong: At development time too, the code depends on the provider’s data types, libraries and calling conventions. The coupling shows up when compiling and testing."
  ],
  "explanation": "Directly and scatteredly integrated external services couple the building block efferently to an externally controlled, volatile element: outages, API changes and provider switches hit it. Traps: SLA as the solution, confusing afferent with efferent, seeing coupling only at runtime."
 },
 "c3q78": {
  "q": "Development prefers microservices, operations prefers a monolith. How should this trade-off best be handled?",
  "options": [
   "Build part of the functions as services and the rest as a monolith so both sides are satisfied.",
   "Let the group decide that will operate the system long-term because it bears the consequences.",
   "Derive the decision from prioritized quality goals and constraints and document it with its consequences.",
   "Decide by vote among the affected groups because all stakeholders are equal.",
   "Start with microservices because operational problems can be fixed later, whereas a monolith is hard to split."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: A hybrid can make sense, but only as the result of weighing. As a mere compromise it combines the operational and consistency costs of both styles.",
   "Wrong: Operations is only one stakeholder. The decision must be guided by quality goals and constraints, not by role.",
   "Correct: Only quality goals (e.g. independent deployment, operating effort) make the options comparable. Documentation creates traceability.",
   "Wrong: Stakeholder interests carry different weight regarding the quality goals. A vote does not replace the technical trade-off.",
   "Wrong: This does not resolve the trade-off but assigns it to one side. Operational costs of distributed systems arise immediately and cannot be arbitrarily fixed later."
  ],
  "explanation": "Style questions such as monolith versus microservices are trade-offs, not majority or sequence decisions. They are derived from prioritized quality goals and constraints, and the decision is documented with its consequences. Typical trap: the position of one group or a hybrid compromise without reference to goals."
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
  "q": "You describe the building block “tariff calculator”. Does each item belong in the black-box or the white-box description?",
  "categories": [
   "Black box",
   "White box"
  ],
  "rows": [
   "The guaranteed response time of at most two seconds per request.",
   "The order of calls between the inner building blocks during a tariff calculation.",
   "The behaviour of the provided operation when the required payment service times out.",
   "Which sub-building block realises the provided operation “calculate tariff”.",
   "The reason why tariff logic and discount calculation were placed in separate sub-building blocks.",
   "The input and output formats of the provided operations."
  ],
  "rowExpl": [
   "Black box: Guaranteed properties are part of the contract towards the outside. How they are achieved internally would be white box.",
   "White box: The interplay of the inner blocks is inside view and not needed by users of the building block.",
   "Black box: Error behaviour at the interface is part of the contract towards the outside, even though it relates to an internal process.",
   "White box: Mapping an external interface to an inner block is inside view, although it concerns an external interface.",
   "White box: Rationales for the decomposition explain the inside view. Users of the building block do not need them.",
   "Black box: The interface specification is the outside view of the building block."
  ],
  "explanation": "Black box: everything users rely on (responsibility, interfaces including formats and error behaviour, assurances). White box: how this is achieved internally (structure, interplay, interface mapping, rationale). Trap: error behaviour and interface mapping are easy to confuse."
 },
 "k35": {
  "q": "You model the deployment view of an ordering system. Is each element a node or an artifact deployed on it?",
  "categories": [
   "Node",
   "Artifact (deployment artifact)"
  ],
  "rows": [
   "A configuration file shipped along with it.",
   "The container image of the ordering service.",
   "A container runtime environment on a host.",
   "The database server on which the schema is set up."
  ],
  "rowExpl": [
   "A configuration file shipped along with it is a delivered unit that is installed on a node. It is therefore an artifact and not an execution environment itself.",
   "The container image is the delivered unit that is installed on a runtime environment. This is the trap: it looks like a place of execution, but it is an artifact and not a node.",
   "A container runtime environment on a host is an execution environment on which artifacts run. It is therefore a node and not a delivered unit.",
   "The database server is the execution environment on which the schema is set up. It is therefore a node; the schema would be the delivered unit."
  ],
  "explanation": "Nodes are execution environments: the container runtime and the database server. Artifacts are delivered units installed on them: the configuration file and the container image. Trap: the image is not a node but an artifact."
 },
 "c1q37": {
  "q": "Which details primarily belong in the black-box description of a building block?",
  "options": [
   "The provided interfaces.",
   "Important interfaces between the sub-building blocks.",
   "The required interfaces to other building blocks.",
   "The choice of algorithms and data structures inside.",
   "The responsibility of the building block.",
   "The division of the block into sub-building blocks including the rationale."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Correct: They are the contract towards the outside on which users of the block rely.",
   "Wrong: Interfaces between inner building blocks describe the inside view and belong in the white box.",
   "Correct: Required interfaces are also part of the outside view, since they show what the block depends on. The inside nevertheless stays hidden.",
   "Wrong: That is an implementation detail of the inside view. The black box says what the block provides, not how.",
   "Correct: It states briefly what the block is responsible for, without explaining its structure.",
   "Wrong: Decomposition and rationale belong to the white box, i.e. the inner workings."
  ],
  "explanation": "Black box: responsibility, provided and required interfaces (and assurances). White box: sub-building blocks, their interplay, interfaces between them and rationale. Trap: required interfaces belong to the outside view."
 },
 "c4q40": {
  "q": "Which details belong in the white-box description of a building block?",
  "options": [
   "The contained sub-building blocks and their relationships.",
   "The class structure of the sub-building blocks down to the method level.",
   "The allocation of the sub-building blocks to servers.",
   "Important interfaces between the sub-building blocks.",
   "The responsibility of the teams implementing the sub-building blocks.",
   "A rationale for the chosen decomposition."
  ],
  "correct": [
   0,
   3,
   5
  ],
  "optExpl": [
   "Correct: That is the core of the inside view: which blocks the building block consists of and how they interact.",
   "Wrong: That is implementation detail. The white box ends at building block level; finer details belong to the next refinement or the code.",
   "Wrong: Distribution decisions belong in the deployment view, not in the description of the inner building block structure.",
   "Correct: The interfaces of the inner blocks show how they cooperate and are part of the inside view.",
   "Wrong: Organisational assignments do not belong in the structural description of the building block.",
   "Correct: Reasons for the decomposition and alternatives make the inside view comprehensible and verifiable."
  ],
  "explanation": "White box: sub-building blocks, relationships, important interfaces between them and rationale for the decomposition. Not included: classes/methods, allocation to servers, organisational assignments."
 },
 "c2q31": {
  "q": "A corporation is discussing Conway's law. Which statements about it are correct?",
  "options": [
   "It only applies to distributed systems such as microservices.",
   "It obliges organizations to structure teams according to the architecture.",
   "It states that the organizational structure is determined by the system architecture.",
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
   "Wrong: The direction is reversed. According to Conway, the system structure mirrors the communication structure of the organization, not the other way round. The deliberate reverse direction is the Inverse Conway Maneuver.",
   "Correct: Where teams communicate little, interfaces and system boundaries tend to emerge between their parts. That is the core of the observation: system structure follows communication structure.",
   "Correct: In the curriculum, Conway appears under organisational constraints, i.e. the structure of teams and clients. It is not a technical constraint, but it does influence how the system is split."
  ],
  "explanation": "Conway's law is an organisational constraint: communication boundaries between teams tend to become system boundaries. Traps: it applies regardless of architectural style, it is an observation rather than an obligation to structure teams, and the direction of effect runs from organisation to system."
 },
 "c3q79": {
  "q": "Which measures limit the consequences of frequent changes and fluctuating availability of an external API?",
  "options": [
   "Model the domain model on the provider’s data structures to save translation effort.",
   "Encapsulate the API in one place behind an own interface formulated in terms of the own domain model.",
   "Each using component gets its own client for the API, tailored to its needs.",
   "Secure calls with timeout and circuit breaker.",
   "Immediately and repeatedly resend failed calls to bridge outages.",
   "Always use the provider’s latest API version to avoid compatibility problems."
  ],
  "correct": [
   1,
   3
  ],
  "optExpl": [
   "Wrong: This pulls the provider’s structures and changes into the own model. An anti-corruption layer, by contrast, translates deliberately into the own model.",
   "Correct: An adapter or anti-corruption layer bundles the dependency in one place. If the provider changes its API, only this abstraction needs adapting.",
   "Wrong: Several tailored clients spread the dependency across the system again. Provider changes then have to be followed up in many places.",
   "Correct: Timeouts limit waiting times, and a circuit breaker stops calls to a failed service. Both prevent outages from propagating into the own system.",
   "Wrong: Immediate, unthrottled repetitions can additionally overload the already disturbed service and tie up own resources. Retries need limits and waiting time.",
   "Wrong: Automatically using the latest version lets provider changes hit unplanned. Versions are fixed deliberately and migrated in a controlled way."
  ],
  "explanation": "Volatile external services are encapsulated centrally behind an own abstraction, and fluctuating availability is handled with resilience patterns such as timeout and circuit breaker. Traps: adopting the foreign model, spreading the dependency, unthrottled retries, automatic version switches."
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
  "q": "A team suspects the cause of a slow application in a particular module. Which approaches are methodologically sound?",
  "options": [
   "Optimise the module with the highest coupling first.",
   "Prove the bottleneck by measurement (e.g. profiling, load test) before optimising.",
   "Place a cache in front of the module as a precaution.",
   "Measure again after the optimisation to prove its effect.",
   "Treat the suspicion as proven by a code review of the algorithms and rebuild immediately.",
   "Measure under realistic conditions (context and stimulus according to the scenario)."
  ],
  "correct": [
   1,
   3,
   5
  ],
  "optExpl": [
   "Wrong: Coupling says something about changeability and dependencies, not about where runtime is lost. A tightly coupled module can be perfectly fast, a loosely coupled one may be the bottleneck.",
   "Correct: Only profiling or monitoring under realistic conditions shows whether the suspicion is correct. Otherwise you may optimise the wrong place – Knuth's warning against premature optimisation targets exactly this.",
   "Wrong: Caching is a possible performance tactic but brings complexity and consistency issues such as invalidation. Without a proven bottleneck it is premature and may not help at all.",
   "Correct: Without a re-measurement it remains open whether the change really improved the response time or merely added complexity.",
   "Wrong: A review can provide hints of inefficient algorithms but does not prove that the module is actually the bottleneck. The real cause may lie elsewhere entirely, e.g. in the database or network.",
   "Correct: Measurements under unrealistic conditions lead to wrong conclusions. A scenario defines under which load and with which stimulus measurements are taken."
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
   "Nodes are physical hardware; VMs and containers count as artefacts.",
   "A node belongs to exactly one artefact, while an artefact can comprise several nodes."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Nodes are execution environments such as servers, VMs or container runtimes. Artefacts are the delivered units, such as JAR files, container images or configuration files, that are installed on nodes.",
   "Wrong: Building blocks are mapped onto artefacts but are not the same: one artefact may contain several building blocks. A node is infrastructure, not a software component.",
   "Wrong: Nodes can be physical or virtual; VMs and container runtimes execute software and are therefore nodes, not artefacts.",
   "Wrong: The relationship is the other way round: a node can run several artefacts, and an artefact can be installed on several nodes, e.g. for redundant instances."
  ],
  "explanation": "Nodes are physical or virtual execution environments (server, VM, container), artefacts are the units deployed onto them (JAR, image, configuration). Traps: equating artefacts with building blocks, not counting VMs and containers as nodes, or reversing the relationship between nodes and artefacts."
 },
 "k36": {
  "q": "Which aspect speaks more for a (modular) monolith, and which more for microservices?",
  "categories": [
   "Rather monolith",
   "Rather microservices"
  ],
  "rows": [
   "Domain knowledge is limited and building block boundaries will likely shift several times.",
   "Changes across several business areas must be consistent within an atomic transaction.",
   "One subsystem benefits from a language and data store that do not suit the rest.",
   "One subsystem has a strongly different load profile compared with the rest.",
   "Business units want to deliver on their own release rhythm without coordinating.",
   "The team has little experience with distributed systems and operations automation."
  ],
  "rowExpl": [
   "Mis-cut services are more expensive to correct than module boundaries in a monolith.",
   "A shared data store allows ACID transactions; across service boundaries only eventual consistency is realistic.",
   "Technology-neutral interfaces allow technology choice per service.",
   "Separately deployable services can be scaled selectively instead of replicating the whole system.",
   "Independent deployment is a core benefit of microservices.",
   "Microservices shift complexity into operations and distribution; without experience the risks outweigh the benefits."
  ],
  "explanation": "Microservices pay off with a need for independent deployment, scaling or technology freedom and stable functional boundaries. Unclear boundaries, little experience with distributed systems and atomic consistency favor a modular monolith."
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
  "q": "Which measures reduce the risk of an early decision on how to connect an unfamiliar third-party system?",
  "options": [
   "Record assumptions about the third-party system explicitly and check them specifically with a vertical slice.",
   "Work through the provider’s interface specification completely and base the design on it.",
   "Use the third-party system directly in all building blocks from the start to gain experience quickly.",
   "Obtain early feedback on first design ideas from stakeholders and provider representatives.",
   "Plan a blanket time buffer; this reduces the risk of the decision itself.",
   "Make the commitment to a hard-to-reverse integration approach only after the assumptions have been checked."
  ],
  "correct": [
   0,
   3,
   5
  ],
  "optExpl": [
   "Correct: Explicitly stated assumptions can be checked specifically, e.g. with a vertical slice through the integration. Assumptions are thus replaced by facts early.",
   "Wrong: A specification describes how the third-party system is supposed to be, not necessarily how it actually behaves. It does not replace practical testing of performance, error behaviour and quirks.",
   "Wrong: Broad direct usage binds the system early to assumptions that have not yet been checked. Experience should be gathered within a limited scope before the dependency is spread across the system.",
   "Correct: Feedback from stakeholders and the provider uncovers misunderstandings and wrong assumptions while the design can still be changed. The curriculum demands organizing feedback systematically.",
   "Wrong: A buffer mitigates schedule risks but changes nothing about the probability or consequences of a wrong decision on the integration. It does not replace checking the assumptions.",
   "Correct: Hard-to-reverse decisions are made as late as responsibly possible, after the crucial assumptions have been checked. This reduces the risk of committing wrongly."
  ],
  "explanation": "The risk of a decision under uncertainty falls when assumptions are made explicit and checked early, feedback is obtained systematically and irreversible commitments follow only after the check. Traps: specification as a substitute for testing, broad early use, a time buffer as risk reduction of the decision."
 },
 "c3q81": {
  "q": "Modifiability has high priority (new payment providers must be connectable quickly), but response time must not noticeably suffer. Which statements are correct?",
  "options": [
   "Building the provider logic in directly at the points of use saves indirection and therefore improves both runtime and modifiability.",
   "One adapter per provider behind a common interface improves modifiability but can cost runtime through additional indirection.",
   "Whether the indirection endangers the response-time requirement can be checked with a scenario or prototype already during design.",
   "A separate copy of the booking flow per provider decouples the providers from each other and thereby improves modifiability.",
   "Keeping provider selection and configuration out of the domain code allows new providers without changing the domain logic but shifts error possibilities into the configuration.",
   "Because response time is a hard criterion, modifiability is postponed and retrofitted if needed."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Wrong: Runtime benefits, modifiability does not: provider details spread across the system, and every new provider requires changes in many places.",
   "Correct: A new provider only needs a new adapter. The price is additional indirection that can affect response time.",
   "Correct: Especially with trade-offs, the endangered quality is checked specifically and early instead of waiting for insights from production.",
   "Wrong: The providers are decoupled, but every change to the booking flow must be carried over to all copies. This worsens modifiability.",
   "Correct: Configuration instead of branching in code keeps proven domain code stable. The downside is additional error sources and testing effort for the configuration.",
   "Wrong: Modifiability is the prioritised quality goal here. Restructuring later is expensive; response time should instead be safeguarded specifically."
  ],
  "explanation": "Trade-off: indirection and configuration improve modifiability and cost runtime or testability. The endangered quality is checked specifically (scenario, prototype). Traps: selling duplication as “decoupling” and postponing the prioritised quality."
 },
 "k37": {
  "q": "Does the respective decision mainly improve modifiability or testability?",
  "categories": [
   "Mainly improves modifiability",
   "Mainly improves testability"
  ],
  "rows": [
   "Move business rules out of the code into a configurable rule table.",
   "Obtain the system time via a replaceable clock interface instead of directly from the operating system.",
   "Hide decisions that are likely to change behind a stable interface.",
   "Expose intermediate results of a building block via an observation interface so tests can check them.",
   "Cut layers so that replacing the persistence technology only affects the data access layer."
  ],
  "rowExpl": [
   "Rules can be changed without touching code. That improves modifiability; tests do not become easier, they must cover more rule variants.",
   "A fixed time can be injected in tests, so time-dependent behaviour can be checked reproducibly. That improves testability; modifiability only benefits incidentally.",
   "Changes stay confined to one building block (information hiding). That improves modifiability, even if tests may benefit incidentally.",
   "Tests can check states that would otherwise stay hidden. That improves testability (observability) and does nothing for modifiability.",
   "A technology change stays local. That improves modifiability; testability would depend on whether the layer is also replaceable, which the measure does not state."
  ],
  "explanation": "Modifiability and testability both belong to maintainability and overlap, but use different levers: keeping changes local (information hiding, configuration) versus making checks possible (control over inputs, visibility of results)."
 },
 "c3q82": {
  "q": "An online banking portal introduces two-factor authentication for every login. Which statements about the effect on qualities are correct?",
  "options": [
   "Usability suffers only during the initial setup; during ongoing operation there is no additional effort.",
   "Security improves because stolen passwords alone are no longer sufficient; usability may suffer in return.",
   "The effect on other qualities is considered only when users complain, since security is the prioritised goal.",
   "The availability of the portal may be affected because login now depends on the service for the second factor (e.g. SMS or app).",
   "An additional check only for suspicious logins is an alternative with a different compromise between security and usability."
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Wrong: The additional step occurs at every login and burdens usability permanently, not only during setup.",
   "Correct: The classic trade-off between security and usability: the measure improves one quality and potentially worsens the other.",
   "Wrong: Effects on other qualities are part of the decision. Prioritisation does not justify evaluating later; it calls for deliberate trade-offs.",
   "Correct: An additional dependency can create additional reasons for failure. Even qualities that are not in focus can change.",
   "Correct: Alternatives with different trade-offs belong to the decision. The chosen variant and its reasons are agreed with the stakeholders and recorded."
  ],
  "explanation": "Every decision affects several qualities: here security (+), usability (−) and indirectly availability (additional dependency). Alternatives, trade-offs and reasons are discussed with stakeholders and recorded."
 },
 "c3q83": {
  "q": "A system is made flexible through a generic rule set that is configurable at runtime. Which statements about the trade-off are correct?",
  "options": [
   "Flexibility at runtime and modifiability of the source code are the same quality; whatever improves one also improves the other.",
   "Testing effort increases because the number of possible rule configurations and their combinations grows.",
   "The extent of flexibility should be guided by concrete change scenarios; otherwise complexity arises for flexibility that is never used.",
   "Misconfiguration is purely an operations topic and does not belong in the architectural trade-off.",
   "Behaviour is harder to understand because it no longer follows from the source code alone but also from configuration data."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Wrong: Runtime flexibility (configurability) and modifiability of the system are different qualities. A generic rule set improves the first and can worsen the second.",
   "Correct: Configurable behaviour enlarges the space of possible states. Complete testing becomes more costly, and misconfiguration becomes a real risk.",
   "Correct: Speculative flexibility costs understandability and effort without benefit. Scenarios make the need verifiable.",
   "Wrong: Configurability is an architectural decision and creates the risk of misconfiguration. It belongs among the risks that are named and communicated.",
   "Correct: The logic is spread across code and rule data. This worsens analysability and thus maintainability."
  ],
  "explanation": "More runtime flexibility often means less understandability and higher testing effort. Traps: equating runtime flexibility with modifiability and excluding risks such as misconfiguration as an “operations topic” from the trade-off."
 },
 "c3q84": {
  "q": "For an internal order system the following applies: 200 concurrent users, response time under 2 seconds for order search, operation in the corporate data centre with fixed technology mandates, a team of six developers. What should an architecture proposal consider so that it is suitable for meeting the requirements?",
  "options": [
   "Use the quality requirements (e.g. load and response time) as drivers for design decisions.",
   "Response time can be ensured with stronger hardware; the design does not need to address it.",
   "Include the data centre's technology mandates and the team size as constraints.",
   "The functional requirements suffice; load and response time can be optimised after implementation.",
   "Assess whether and how reliably the goals can be met, and check uncertain points early (e.g. with a load-test prototype).",
   "Treat the technology mandates as a recommendation if another solution meets the response time better."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Correct: Architectural activities should be guided by achieving specific qualities. Load and response time are the measurable goals here.",
   "Wrong: Hardware alone does not solve structural problems (e.g. unsuitable search or data access) and is not freely selectable in the corporate data centre. Response time is a driver of the design.",
   "Correct: Constraints limit the solution space. A design that ignores operating mandates or team capacity cannot be implemented.",
   "Wrong: Performance requirements shape structure and technology choice and can only be met to a limited extent afterwards.",
   "Correct: A proposal is suitable if it can credibly be expected to meet the requirements. Early checks turn assumptions into facts.",
   "Wrong: Mandates are constraints. A wish to deviate is a decision that must be justified and clarified with those responsible, not unilaterally treated as a recommendation."
  ],
  "explanation": "A suitable design follows the quality requirements, respects constraints and checks uncertain points early. Traps: hardware as a cure-all, restriction to functionality, late optimisation and unilaterally deviating from mandates."
 },
 "c3q85": {
  "q": "Which statements about quality-driven architecture design are correct?",
  "options": [
   "Using an architectural pattern ensures the qualities for which the pattern is known.",
   "A decision can improve one quality and impair another; both should be assessed.",
   "A decision is well founded if it improves the most important quality goal the most; its effect on other qualities is secondary.",
   "Architectural activities such as decomposition or technology selection are guided by the aim of achieving or improving specific qualities.",
   "It makes sense to define the quality requirements only once the architecture is in place, in order to measure them against the result."
  ],
  "correct": [
   1,
   3
  ],
  "optExpl": [
   "Wrong: A pattern supports qualities but does not guarantee them. Implementation, context and side effects determine the outcome.",
   "Correct: Decisions have price and benefit. Looking only at the improvement overlooks side effects on other qualities.",
   "Wrong: The effect on less important qualities must be evaluated too, since minimum requirements for them must not be violated unnoticed.",
   "Correct: Architecture work is not an end in itself but is guided by the required qualities.",
   "Wrong: Quality requirements drive the design and are the basis of its evaluation. Deriving them afterwards from the solution reverses the logic."
  ],
  "explanation": "Quality-driven design: qualities guide the decisions; every decision is checked for improvement and impairment. Traps: patterns as quality guarantee and optimising only the top goal."
 },
 "c3q86": {
  "q": "Management asks why the planned highly available variant of the system is considerably more expensive than the simple one. Which content belongs in your answer as architect?",
  "options": [
   "Which alternatives were considered and why the chosen variant was selected.",
   "Only the costs; the effects on other qualities are not relevant for management.",
   "Which quality is improved (availability) and what costs arise for it.",
   "The availability figure of the chosen variant; alternatives are no longer relevant after the decision.",
   "Which other qualities or requirements may be impaired by the decision.",
   "That the variant reflects the state of the art; no further justification is needed.",
   "Which risks exist if assumptions (e.g. on the expected load) turn out to be wrong.",
   "That the extra cost will soon pay for itself through fewer outages."
  ],
  "correct": [
   0,
   2,
   4,
   6
  ],
  "optExpl": [
   "Correct: Traceable decisions name alternatives and reasons. This lets stakeholders judge the trade-off themselves.",
   "Wrong: Management makes a trade-off and also needs the side effects. Naming only costs hides what the extra cost buys and what it may impair.",
   "Correct: The benefit of the decision must be set against its price. Without this link the extra cost cannot be assessed.",
   "Wrong: Without alternatives one cannot judge whether the price is appropriate. When a decision is questioned, alternatives and reasons belong in the answer.",
   "Correct: Redundancy can, for example, increase operating effort and complexity. These side effects belong to an honest trade-off as well.",
   "Wrong: “State of the art” is no substitute for a justification. Decisions are justified through requirements, qualities and trade-offs.",
   "Correct: Decisions rest on assumptions. Whoever names their uncertainty and consequences communicates risks as the curriculum requires.",
   "Wrong: Such a promise is not credible without evidence. The benefit depends on assumptions (e.g. outage costs) that should be named, not phrased as a promise."
  ],
  "explanation": "Towards stakeholders one communicates alternatives, benefit, price, side effects and risks of the decision. Traps: costs without benefit, missing alternatives, “state of the art” as justification and unsupported savings promises."
 },
 "c3q87": {
  "q": "The order management may use route planning only via a defined interface. Which statements about the consequences for the source code are correct?",
  "options": [
   "The rule is documented in the building block view; the code structure remains unaffected.",
   "Building block boundaries are reflected in the code structure, e.g. in modules or packages per building block.",
   "Each of the building blocks must be implemented as an independently deployable service.",
   "Internal classes of route planning should not be accessible outside their building block, as far as the language allows.",
   "Violations of the dependency rule can be checked automatically, e.g. through dependency analysis or architecture tests.",
   "The route planning therefore must not call the order management in any form."
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Wrong: An architectural rule only takes effect if it is implemented in the code. Building block boundaries should be reflected in the structure of the source code.",
   "Correct: Only then are building block boundaries and dependency rules traceable and enforceable in the code.",
   "Wrong: Building block boundaries can also be implemented within one deployment through modules or packages. Distribution is a separate decision.",
   "Correct: Restricted visibility prevents the interface from being bypassed in the code.",
   "Correct: Dependency rules are verifiable in the code and can be integrated into the build.",
   "Wrong: Only the direction order management → route planning is regulated. Feedback is possible e.g. via callbacks or events through an interface."
  ],
  "explanation": "Architectural decisions have consequences for the source code: structure (modules/packages), visibility, verifiable dependency rules. Traps: only documenting, equating building blocks with deployment units, and reading a directional rule as a call ban in both directions."
 },
 "c3q88": {
  "q": "Domain and technical aspects are separated during design. Which statements about this are correct?",
  "options": [
   "The domain logic can be tested without technical infrastructure (database, messaging).",
   "The domain architecture can be fully defined before technical constraints are considered.",
   "The separation causes additional effort, for example for mapping between domain objects and technical data structures.",
   "Technical decisions can be made independently of the quality requirements, since the domain logic is decoupled from them.",
   "Domain and technical teams can work independently and do not need to agree on interfaces for this.",
   "Domain logic and technology change for different reasons and at different frequencies."
  ],
  "correct": [
   0,
   2,
   5
  ],
  "optExpl": [
   "Correct: With clean separation, testing the domain logic needs no technical components.",
   "Wrong: Technical constraints can restrict the solution space. Both perspectives are connected and are aligned.",
   "Correct: The separation is not free: additional interfaces and mapping code are the price for testability and replaceability.",
   "Wrong: Technical decisions are guided precisely by quality requirements and constraints. The separation only shields the domain logic from their details.",
   "Wrong: The separation presupposes clear interfaces; without agreement the parts do not fit together.",
   "Correct: This is the core of the rationale: separated parts can be changed independently, e.g. swapping a database product without touching the domain logic."
  ],
  "explanation": "Rationale for the separation: different reasons for change, testability of the domain logic, replaceability of technology. Price: additional interfaces and mapping. Traps: misreading the separation as decoupling from quality requirements or from any coordination."
 },
 "c3q89": {
  "q": "Which statements about stepwise refinement from the system context through the building block levels are correct?",
  "options": [
   "All building blocks are refined to the same depth so that the documentation remains uniform.",
   "Risky or complex building blocks are refined earlier and deeper than simple ones.",
   "The system context is the white box of the system, the first building block level its black box.",
   "When a building block is opened as a white box, its sub-building blocks are no longer described as black boxes.",
   "Each building block is first described as a black box and, when needed, opened as a white box on the next level.",
   "Refinement ends as soon as the building blocks are specified clearly enough for teams to implement them."
  ],
  "correct": [
   1,
   4,
   5
  ],
  "optExpl": [
   "Wrong: Depth is not uniform: risky or complex building blocks are refined earlier and deeper. Uniform depth wastes effort on simple parts.",
   "Correct: Effort is concentrated where uncertainty and risk are greatest.",
   "Wrong: Swapped. In the context the system is a black box; the first building block level is its white box.",
   "Wrong: The sub-building blocks are black boxes again and are opened as white boxes on the next level when needed.",
   "Correct: This alternation of black box and white box forms the stepwise refinement.",
   "Correct: The stopping criterion is implementability, not reaching the class level."
  ],
  "explanation": "Refinement is top-down and risk-oriented: context (system = black box) → first level (white box of the system) → finer levels. Traps: uniform depth, swapping black box/white box on the levels, refining down to the class level."
 },
 "c3q90": {
  "q": "For a system with high availability requirements, a barely proven framework and a single central database are chosen. Which statements about the risks are correct?",
  "options": [
   "A single point of failure arises only with hardware, not with software components such as a database.",
   "The central database is a possible single point of failure for availability.",
   "Lack of experience with the framework is a project risk that does not affect achieving the quality goals.",
   "A central database eases consistency and is therefore uncritical from an availability perspective.",
   "The risks are assessed already during design, for barely proven technology e.g. with an early prototype."
  ],
  "correct": [
   1,
   4
  ],
  "optExpl": [
   "Wrong: Any central single component, including a database or a service, can limit availability as a single point of failure.",
   "Correct: If it fails, the system is unusable regardless of the number of application instances.",
   "Wrong: Unexpected behaviour and errors in operation can also endanger quality goals such as availability. It is therefore also an architectural risk.",
   "Wrong: Consistency advantages do not change the failure dependency. A conscious trade-off has to be assessed here.",
   "Correct: Risks of decisions are not discovered only in operation but assessed and checked early."
  ],
  "explanation": "Risks are assessed during design. Typical sources: central single components (single point of failure) and barely proven technology. Traps: seeing SPOF only as a hardware topic and dismissing technology risks as purely project risks."
 },
 "k38": {
  "q": "A team decomposes an order system. Is the respective building block primarily domain-driven or technology-driven?",
  "categories": [
   "Domain building block",
   "Technical building block"
  ],
  "rows": [
   "Dunning process with escalation levels for overdue invoices.",
   "Retry and dead-letter handling for failed messages.",
   "Invoicing with tax calculation per destination country.",
   "Cache for frequently read product data with time-to-live.",
   "Stock management with reservation for promotional goods."
  ],
  "rowExpl": [
   "The dunning process follows domain rules and is described by domain experts. That is a domain building block, even though it has to be implemented technically.",
   "This solves a technical problem (unreliable delivery) and does not occur in domain language. That is a technical building block.",
   "Tax rules and invoice content are domain knowledge. That is a domain building block; the output format (e.g. PDF) would be considered separately.",
   "A cache serves performance, not a domain task. That is a technical building block, even though it holds domain data.",
   "Reservation rules for promotional goods stem from the business. That is a domain building block."
  ],
  "explanation": "Domain building blocks arise from the domain and can be described in domain language; technical building blocks solve implementation problems. That a block holds domain data or is realised technically does not make it the other kind."
 },
 "c4q42": {
  "q": "The interface of a building block is used by three other teams and is to be extended with additional fields. Which documentation measures help to avoid surprising the consuming teams?",
  "options": [
   "Version changes to the interface description and keep the change history traceable.",
   "Change the source code and update the description when there is an opportunity.",
   "State in the description whether the extension is compatible (e.g. optional fields).",
   "Delete the description of the previous version so that nobody uses outdated information.",
   "Inform the affected teams early about the planned change.",
   "Add internal implementation details so that the change is easier to explain."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Correct: Consuming teams must be able to see which version they use and what has changed.",
   "Wrong: A description that lags behind the implementation loses its value as a contract. Consuming teams rely on it.",
   "Correct: Compatibility statements decide whether users have to adapt. They therefore belong in the interface description.",
   "Wrong: As long as teams use the old version they need its description. It is better to label versions and announce deprecations.",
   "Correct: Early information gives teams time to adapt and is part of communicating interface changes.",
   "Wrong: Internals tie users to details that are allowed to change. An interface description specifies external behaviour, not the implementation."
  ],
  "explanation": "Interface changes are versioned, assessed for compatibility and communicated early; the description stays up to date and describes external behaviour. Traps: lagging documentation, deleting old versions, internals as explanation."
 },
 "c4q43": {
  "q": "Building block A uses an interface offered by building block B. Which statements about documenting these interfaces are correct?",
  "options": [
   "The black-box description of a building block names its provided and its required interfaces.",
   "Required interfaces belong only in the white-box description.",
   "The link between A's required interface and B's provided interface should be recognisable, e.g. in the building block view.",
   "It is sufficient to name B's implementation class; the interface follows from its code.",
   "If A's expectation of the meaning of an operation differs from B's description, this should be clarified early.",
   "Provided interfaces must be documented; required ones can be derived from them."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Correct: Both directions belong to the external view of a building block. Only together do they show what the building block provides and what it depends on.",
   "Wrong: Dependencies on other building blocks are relevant for users and architecture and belong in the external view.",
   "Correct: This makes the direction of dependency visible. It helps to assess the effects of changes to the interface.",
   "Wrong: Then it remains unclear what is guaranteed and what happens to be implemented that way. Interface and implementation must be separated.",
   "Correct: The interface description is the common basis for both sides. Otherwise differences in semantics lead to failures only at integration.",
   "Wrong: What a building block itself requires from others cannot be derived from its provided interfaces."
  ],
  "explanation": "The external view of a building block comprises provided and required interfaces; their connection and the agreed meaning should be visible and agreed upon. Traps: hiding required interfaces in the white box, implementation class as interface."
 },
 "c4q44": {
  "q": "In which views of the architecture documentation do interfaces typically appear?",
  "options": [
   "In the context view as interfaces to neighbouring systems and users.",
   "In the runtime view because interfaces exist at runtime.",
   "In the building block view as provided and required interfaces of the building blocks.",
   "In the context view as interfaces between the internal building blocks of the system.",
   "In the deployment view as channels and protocols between nodes.",
   "Interfaces are described outside the views in separate documents."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Correct: The context view shows the system's external interfaces. It is the usual entry point for interface documentation.",
   "Wrong: Interfaces are structural elements and appear in the building block view. The runtime view shows how they are used in flows.",
   "Correct: This is where it becomes visible which building blocks are connected via which interfaces.",
   "Wrong: The context view shows the system as a black box with its interfaces to the environment. Internal interfaces between building blocks appear in the building block view.",
   "Correct: Channels describe how nodes communicate, e.g. via which protocol. This complements the functional interface with technical aspects.",
   "Wrong: The views show interfaces in the context of the architecture. Detailed descriptions can additionally stand separately."
  ],
  "explanation": "Interfaces appear in the context view (external), the building block view (provided/required) and the deployment view (channels, protocols). Traps: interfaces as a pure runtime topic, internal interfaces in the context view, or only in separate documents."
 },
 "k39": {
  "q": "Which statement about documentation applies particularly to external and internal interfaces respectively?",
  "categories": [
   "Rather external interface",
   "Rather internal interface"
  ],
  "rows": [
   "Versioning and rules for announcing changes must be recorded because not all users are known.",
   "The team knows the users and can agree on changes at short notice; a concise description in the repository is often sufficient.",
   "Error behaviour and quality commitments (e.g. response time) are described as a contract for outsiders.",
   "The description relies more on building block relationships and the direction of dependencies.",
   "Examples and getting-started aids support users without project knowledge."
  ],
  "rowExpl": [
   "With external interfaces not all users are known, so versioning and rules for announcing changes must be recorded. Internally, such changes can be agreed at short notice.",
   "Internally, the team knows the users and agrees on changes directly. A concise description in the repository is therefore often enough; the formal contract effort of external interfaces is not needed.",
   "People outside the project need error behavior and quality commitments as a reliable contract. This matters particularly for external interfaces, whereas internally people coordinate directly.",
   "Internal interfaces are described more through building block relationships and the direction of dependencies. For external users the contract comes first, not the structure behind it.",
   "External users have no project knowledge and depend on examples and getting-started aids. Internally, knowledge can be passed on directly within the team, so this applies more to external interfaces."
  ],
  "explanation": "Externally used interfaces need the more formal description as a contract with versioning, quality commitments and getting-started aids. For internal interfaces users are known and coordination is simpler. The curriculum demands documentation for both and different treatment."
 },
 "c4q45": {
  "q": "A team documents the persistence concept of a system with ten building blocks. So far persistence is scattered across the descriptions of individual building blocks. Which measures are suitable?",
  "options": [
   "Describe the concept once centrally (goals, solution approach, rules) and refer to it from the building block descriptions.",
   "Describe persistence again in detail in the descriptions of the individual building blocks so that each remains readable on its own.",
   "Record the reasons for the chosen approach compared with alternatives.",
   "Record the concept only in the description of the building block that accesses the database.",
   "Describe how building blocks should use the concept (rules, examples) so that it is applied uniformly.",
   "Model persistence as its own building block and thereby skip describing a concept."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Correct: A cross-cutting concept affects many building blocks and is therefore described once. References avoid repetition and contradictions.",
   "Wrong: Repetitions drift apart and increase maintenance effort. A central concept with references is better.",
   "Correct: Rationales make the concept traceable and prevent the same discussion from being held again later.",
   "Wrong: Persistence affects several building blocks. The concept belongs in one central place so that all of them can apply it consistently.",
   "Correct: A cross-cutting concept unfolds its value through uniform application. Rules and examples make it easier.",
   "Wrong: A persistence building block does not replace the rules, rationale and usage guidance that the concept defines for all using building blocks."
  ],
  "explanation": "Cross-cutting concepts are documented centrally (solution approach, rules, rationale, application) and referenced from the building blocks. Traps: repetition in every building block, recording it only at the accessing block, or a persistence block instead of a concept."
 },
 "k40": {
  "q": "Does the information belong centrally in the documented cross-cutting concept or in the description of the respective building block?",
  "categories": [
   "Centrally in the cross-cutting concept",
   "In the respective building block description"
  ],
  "rows": [
   "Rules on how errors are classified and logged across the whole system.",
   "Which kinds of errors an individual building block can actually raise.",
   "Rationale for why a uniform log format was chosen.",
   "Which tables a specific building block persists for itself.",
   "Rules on transaction boundaries for all domain building blocks."
  ],
  "rowExpl": [
   "Rules that apply to the whole system belong centrally in the cross-cutting concept. They are not a matter of a single building block, so not in its description.",
   "Which kinds of errors an individual building block can raise concerns only that block. It is described in its description, which refers to the concept where needed.",
   "The rationale for a uniform log format applies across the system and belongs to the concept. Repeated in every building block description, it would have to be maintained several times.",
   "The tables that a specific building block persists for itself concern only that block. They therefore belong in its description and not in the cross-cutting concept.",
   "Rules on transaction boundaries for all domain building blocks are overarching. They belong centrally in the cross-cutting concept instead of being stated in each block separately."
  ],
  "explanation": "Overarching rules, rationales and mandates belong in the central cross-cutting concept. What affects only one building block is described there and refers to the concept where needed."
 },
 "c4q46": {
  "q": "The team has developed a UI concept (uniform operation, uniform error messages). How should it document and communicate this cross-cutting concept?",
  "options": [
   "As a short description with rules and examples for the developers who implement the concept.",
   "Distribute it across code comments in the dialog classes.",
   "Present in an understandable way for the business department and product owner what the concept means for operation.",
   "Prepare it technically for the development team and omit the presentation for the business department, because it does not implement the concept.",
   "Inform the affected teams when the concept changes.",
   "Store screenshots without explanatory rules."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Correct: Developers are the main audience for the implementation rules. Examples make the application tangible.",
   "Wrong: Scattered comments provide no overview and are not found by those who work outside the code.",
   "Correct: Stakeholders outside development are also affected by the concept. Audience-appropriate communication creates understanding and acceptance.",
   "Wrong: The business department and the product owner are also affected by a UI concept and should understand what it means for usage.",
   "Correct: Cross-cutting concepts affect many building blocks. Changes must therefore reach those places where the concept is applied.",
   "Wrong: Images show a result but not which rules lie behind it and why. New dialogs cannot be designed uniformly with them."
  ],
  "explanation": "A cross-cutting concept is documented and communicated for its audiences: rules and examples for development, an understandable presentation for the business side, information on changes. Traps: scattered comments, a presentation for development only, or images without rules."
 },
 "c4q47": {
  "q": "Which of the following topics are typical cross-cutting concerns for which a solution concept should be documented?",
  "options": [
   "Persistence.",
   "The value-added-tax calculation formula in invoicing.",
   "Uniform operation and design of the user interface.",
   "The order of fields in a single order form.",
   "Distribution and integration, e.g. how building blocks communicate when distributed across nodes.",
   "The naming convention for test methods of a single module.",
   "Logging.",
   "The list of mandatory fields of a single customer form."
  ],
  "correct": [
   0,
   2,
   4,
   6
  ],
  "optExpl": [
   "Correct: Data storage affects many building blocks and is named as an example in the curriculum.",
   "Wrong: That is domain logic of one building block, not an overarching topic.",
   "Correct: A UI concept ensures uniform solutions across many dialogs. It is named as an example in the curriculum.",
   "Wrong: That is a detail of a single dialog and does not affect many building blocks.",
   "Correct: How building blocks cooperate across nodes shapes many parts of the system. The curriculum names it explicitly.",
   "Wrong: That concerns a single module and is a coding convention, not a solution concept for a cross-cutting topic.",
   "Correct: All building blocks log. A uniform concept defines format, levels and responsibilities.",
   "Wrong: That is domain logic of one dialog. A cross-cutting concept, by contrast, regulates how validation is handled in general."
  ],
  "explanation": "Typical cross-cutting concerns are persistence, UI, distribution/integration and logging; their solution concept is documented once. Domain details and coding conventions of individual modules are not cross-cutting concerns."
 },
 "c1q41": {
  "q": "The project is discussing whether to buy standard software or to develop a new reporting module in-house. As software architect you are to prepare the decision. Which activities belong to your responsibility here?",
  "options": [
   "Clarify requirements and constraints with the stakeholders who influence the decision.",
   "Show the consequences of both variants (quality, dependencies, risks) and argue them towards stakeholders.",
   "Make the decision independently of project management and the business department and announce the result.",
   "Accompany the implementation and check that source code and architecture stay consistent.",
   "Carry out the legal review of the standard software's licence terms in a binding way.",
   "Point out opportunities for feedback, e.g. a prototype with stakeholders before the decision."
  ],
  "correct": [
   0,
   1,
   3,
   5
  ],
  "optExpl": [
   "Correct: Clarifying and questioning requirements and constraints is a core task. Without it the decision lacks a basis.",
   "Correct: Recognising, showing and defending the consequences of architecture decisions is explicitly part of the responsibility.",
   "Wrong: Architects coordinate their responsibility with project management and agree refinements with stakeholders. Going it alone contradicts this.",
   "Correct: Accompanying the implementation and checking consistency between code and architecture are among the tasks, even after the decision.",
   "Wrong: A binding legal review is a matter for the legal department or specialists. Architects can point out licence and dependency risks but do not replace the legal assessment.",
   "Correct: Architects should recognise the need for iterations and point out opportunities for feedback. A prototype makes assumptions verifiable."
  ],
  "explanation": "Architects clarify requirements, show and argue consequences, accompany the implementation and enable feedback. Traps: solo decisions and taking over tasks of other roles (here the binding legal review)."
 },
 "c1q42": {
  "q": "Project management wants to commit that a planned change will be implemented by the end of the quarter. From an architectural point of view the change endangers two quality goals. How do you behave as architect?",
  "options": [
   "I show the consequences for the two quality goals and argue them towards project management.",
   "I trust the team's feasibility estimate and refrain from assessing the quality goals myself.",
   "I present alternatives (e.g. reduce scope or implement in steps) and name their effects.",
   "I reject the change because schedules are not a matter for architecture.",
   "I propose checking the critical assumption early by a prototype or a measurement.",
   "I decide myself which of the two quality goals is put on hold and inform project management afterwards."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Correct: Showing the consequences of decisions and defending them towards stakeholders is part of the responsibility.",
   "Wrong: Assessing the consequences for the quality goals is part of the architect's responsibility. Without it project management lacks a basis for decision.",
   "Correct: Alternatives with effects help project management to make an informed decision. The decision on schedules remains with them.",
   "Wrong: Architects coordinate their responsibility with project management. Blanket rejection refuses this coordination.",
   "Correct: Obtaining feedback early reduces uncertainty. Project management can then build on facts rather than on conjecture.",
   "Wrong: Quality goals are requirements agreed with stakeholders. Prioritising or changing them is a joint, open decision and not a solo action."
  ],
  "explanation": "Architects show consequences, offer alternatives and early feedback and coordinate with project management. Traps: refraining from an own assessment, blanket rejection and unilateral change of quality goals."
 },
 "c1q43": {
  "q": "Which situations are, for software architects, a reason to review a decision already taken and, where necessary, revise it?",
  "options": [
   "A new requirement affects an important quality goal.",
   "The documentation looks formally tidy.",
   "Developers report that the chosen interface design hinders implementation.",
   "The decision was made several months ago.",
   "A prototype shows that an underlying assumption does not hold.",
   "A team member would like modern technology without any link to the requirements."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Correct: Decisions were made for particular requirements. If these change, the decision may lose its basis.",
   "Wrong: Formal tidiness says nothing about whether the decision still fits.",
   "Correct: Feedback from implementation is valuable and, where needed, flows into the architecture.",
   "Wrong: Age alone is no reason. The trigger is changed requirements, new insights or feedback.",
   "Correct: Fact-based feedback replaces conjecture. If an assumption does not hold, the decision based on it must be reviewed.",
   "Wrong: A wish without a link to requirements does not justify a revision. Decisions are justified through requirements and qualities."
  ],
  "explanation": "Reasons for a review are changed requirements, feedback from implementation and new facts, e.g. from prototypes. Traps: formally tidy documentation, age of the decision and technology wishes without a link to requirements."
 },
 "k41": {
  "q": "Does the activity belong primarily to the responsibility of the software architects or to the overall responsibility of project management?",
  "categories": [
   "Software architect",
   "Project management"
  ],
  "rows": [
   "Define the system decomposition and building block structure.",
   "Decide on cross-cutting concerns such as persistence and communication.",
   "Plan team capacities and manage project risks such as schedule delays.",
   "Check the consistency of source code and architecture."
  ],
  "rowExpl": [
   "Decomposing the system and defining the building block structure are structural decisions and thus a core task of architects. Project management steers the project, not the structure.",
   "Cross-cutting concerns such as persistence and communication affect many building blocks at once and are architecture decisions. Project management does not make them.",
   "Capacity planning and managing project risks such as schedule delays lie in the overall responsibility of project management. Architects contribute assessments but do not carry this responsibility.",
   "Checking the consistency of source code and architecture is among the architects' tasks. Project management does not own this; it only coordinates with the architects."
  ],
  "explanation": "Structural decisions, cross-cutting concerns and the consistency of code and architecture are architects' tasks. Capacity planning and managing project risks lie with project management; both coordinate."
 },
 "k42": {
  "q": "For whom is the architects' contribution primarily intended: project management or quality assurance/testing?",
  "categories": [
   "Project management",
   "Quality assurance / testing"
  ],
  "rows": [
   "Provide effort and risk estimates of architecture-relevant decisions for schedule and budget.",
   "Provide quality scenarios as a basis for test cases and acceptance criteria.",
   "Show dependencies between teams and building blocks that influence the project plan.",
   "Take the testability of building blocks and interfaces into account in the design and agree on it with those responsible for testing.",
   "Agree how architecture decisions are communicated and approved during the project."
  ],
  "rowExpl": [
   "Effort and risks of architecture-relevant decisions are what project management needs for schedule and budget. They are not the core of the contribution to quality assurance or testing.",
   "Quality scenarios make quality goals verifiable and thus form the basis for test cases and acceptance criteria. Quality assurance and testing use them, not primarily project management.",
   "Dependencies between teams and building blocks influence the project plan that project management steers. Architects therefore provide this to project management and not to testing.",
   "Architects take the testability of building blocks and interfaces into account in the design and agree on it with those responsible for testing. The contribution is aimed at quality assurance and testing.",
   "How architecture decisions are communicated and approved is a coordination matter in the project flow with project management. It is not the focus for quality assurance and testing."
  ],
  "explanation": "To project management architects deliver effort, risks, dependencies and coordination paths. To quality assurance and testing they deliver quality scenarios and take testability into account in the design."
 },
 "c1q44": {
  "q": "For a new information system, operational requirements are to be considered early. How do you, as architect, cooperate with IT operations?",
  "options": [
   "Ask early for operational requirements such as monitoring, deployment and resource demand and consider them in the design.",
   "Leave deployment questions to the development team and inform operations only about the finished release.",
   "Agree the deployment view together.",
   "Let operations decide on the decomposition of the system into building blocks.",
   "Show operations the consequences of architecture decisions.",
   "Define the deployment view on your own and communicate the result to operations."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Correct: IT operations is a stakeholder with concerns of its own. Early coordination avoids expensive rework.",
   "Wrong: IT operations is a stakeholder with concerns of its own and has to be involved early. Late information leads to expensive rework.",
   "Correct: The deployment view shows nodes and channels of the operating environment. It is an ideal basis for discussion with operations.",
   "Wrong: Structural decisions belong to the architects' responsibility. Operations supplies requirements and constraints but does not decide on the building block structure.",
   "Correct: Operations has to run the system. It should know early what to expect.",
   "Wrong: The deployment view reflects the operating environment and should be agreed together with operations so that its requirements and constraints are taken into account."
  ],
  "explanation": "With IT operations architects coordinate requirements, deployment view and consequences early but decide on the building block structure themselves. Traps: informing operations late, operations deciding on the building block structure, a deployment view without coordination."
 },
 "c1q45": {
  "q": "A manufacturer of control units plans a new microcontroller. Which statements about the cooperation of the software architects with hardware development are correct?",
  "options": [
   "Hardware constraints such as memory and computing power should be agreed early.",
   "Software architects alone decide on the hardware selection because the software sets the requirements.",
   "Architects should show which effects hardware decisions have on the software.",
   "Coordination with hardware development is sensibly needed only when integrating software and hardware.",
   "Hardware development determines the software building block structure."
  ],
  "correct": [
   0,
   2
  ],
  "optExpl": [
   "Correct: In embedded systems the hardware limits the solution space. Early coordination prevents nasty surprises.",
   "Wrong: Hardware development is responsible for the hardware. Architects coordinate with it and show effects, but do not decide on the hardware alone.",
   "Correct: Showing and arguing the consequences of decisions is part of the role, also towards hardware development.",
   "Wrong: Hardware constraints limit the architecture's solution space and must be agreed early. At integration time the decisions have long been made.",
   "Wrong: The structure of the software belongs to the architects' responsibility. Hardware provides constraints, not a building block structure."
  ],
  "explanation": "For embedded systems architects agree hardware constraints early and show the effects of hardware decisions on the software. Traps: deciding on the hardware alone, coordinating only at integration, hardware determining the software structure."
 },
 "c1q46": {
  "q": "Product management demands a feature that contradicts an architecture board guideline on the uniform technology platform. How do you behave as architect?",
  "options": [
   "I show the consequences of the options (feature with deviation, feature within the platform, forgo).",
   "I adapt the architecture board's guideline myself so that the feature becomes possible.",
   "If a deviation is intended, I justify it and agree it with the architecture board.",
   "I implement the feature and inform the architecture board only after delivery.",
   "I look for alternatives that meet product management's concern within the platform.",
   "I reject the feature because the architecture board is superior.",
   "I leave the decision to the development team."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Correct: Recognising and conveying consequences is part of the role and helps both sides to decide on an informed basis.",
   "Wrong: The guideline belongs to the architecture board. Deviations or changes are justified and agreed with it, not made unilaterally.",
   "Correct: The architecture board is a counterpart of the role. A deliberate, justified deviation is a decision, not a silent exception.",
   "Wrong: A deviation must be justified and agreed beforehand. Informing afterwards creates a fait accompli and undermines the platform strategy.",
   "Correct: A concern can often be met in several ways. Alternatives reconcile the business goal and the guideline.",
   "Wrong: Blanket rejection evades the trade-off. What is called for is understanding concerns and showing options with their consequences.",
   "Wrong: The trade-off concerns product and platform. The development team should not bear it alone; architects mediate."
  ],
  "explanation": "Between product management and architecture board architects show consequences and alternatives and agree deviations beforehand. Traps: unilaterally changing the guideline, informing afterwards, blanket rejection, delegating the trade-off."
 },
 "c2q33": {
  "q": "In a workshop on the architecture of an appointment booking system for medical practices someone says: “Of course all practices have fast internet.” Nobody objects. How do you, as architect, deal with it?",
  "options": [
   "Note the statement as an assumption, verify it with the stakeholders and document the result.",
   "Document the statement as a constraint because it comes from the stakeholders.",
   "Check which design decisions depend on the assumption and assess the risk should it not hold.",
   "Take the assumption into account implicitly in the design (e.g. provide no offline function) and adjust later if complaints arise.",
   "Tell the team openly that the assumption is unverified so that everyone has the same level of knowledge."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Correct: Assumptions made explicit can be checked. This turns a conjecture into a sound basis.",
   "Wrong: A constraint is given from outside. A statement from the workshop that nobody has substantiated is an assumption, even if nobody objects.",
   "Correct: This makes it possible to judge the significance of the assumption and decide how much safeguarding is necessary.",
   "Wrong: An implicit assumption remains invisible to others. Complaints then arise only when adjustments are expensive.",
   "Correct: Implicit assumptions cause misunderstandings between those involved. Transparency creates a common understanding."
  ],
  "explanation": "Assumptions are made explicit, verified and assessed for their implications. Traps: statements from stakeholders are not automatically constraints, and considering them implicitly in the design makes the assumption invisible."
 },
 "c2q34": {
  "q": "Two teams develop building blocks separately that are supposed to cooperate through an interface. Both assume that timestamps are transmitted uniformly, but nobody has recorded the format (e.g. UTC or local time). Which consequences are typical of such implicit assumptions?",
  "options": [
   "The teams can make different assumptions without noticing.",
   "Because both teams assume the same thing, the assumption counts as secured.",
   "Errors often show up only during integration or in operation, when the correction is expensive.",
   "The assumption is a constraint because it applies to both teams equally.",
   "The assumption should be recorded explicitly as part of the interface description.",
   "Such discrepancies are usually noticed already when designing the individual building blocks."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Correct: What is not written down can be understood differently by everyone. This is the cause of many interface errors.",
   "Wrong: Two teams presuming the same thing does not confirm the assumption. Without coordination it remains an unsecured fact that both merely happen to understand alike or, just as well, differently.",
   "Correct: Discrepancies remain undiscovered for a long time because each team is consistent on its own.",
   "Wrong: A constraint is given from outside. An assumption is only presumed, even if several parties share it; shared does not mean given.",
   "Correct: An explicit statement in the interface description makes the agreement verifiable and visible to everyone involved.",
   "Wrong: Each team is consistent on its own; the error lies at the interface. It usually shows up only during integration or in operation."
  ],
  "explanation": "Implicit assumptions lead to unnoticed diverging ideas and late, expensive errors; recorded explicitly (e.g. in the interface description) they become verifiable. Traps: shared assumptions are neither secured nor given, and discrepancies do not show within a single building block."
 },
 "k43": {
  "q": "Is it an explicit statement or an implicit assumption?",
  "categories": [
   "Explicit statement",
   "Implicit assumption"
  ],
  "rows": [
   "The requirements document states: “At most 500 users are active concurrently (assumption, confirmed with the business department).”",
   "The developers assume that all users work in the same time zone; nobody has written this down.",
   "The design presupposes that the partner service retries failed calls itself; so far nobody has mentioned this.",
   "The architecture documentation states: “Assumption: the legacy system keeps running until 2027; check with operations still open.”",
   "“It goes without saying that customer data has to be encrypted” – that is how the team thinks, without there being a requirement."
  ],
  "rowExpl": [
   "The assumption is stated in the requirements document and confirmed with the business department. It is recorded and verifiable, so it is explicit, not implicit.",
   "The shared time zone is an assumption the team makes silently and records nowhere. It is therefore implicit and can lead to misunderstandings.",
   "That the partner service retries calls itself is presupposed by the design but never mentioned. An unspoken precondition is implicit, not explicit.",
   "Even a still open assumption is explicit as long as it is in the architecture documentation and can be checked. What matters is that it is recorded, not that it is certain.",
   "“It goes without saying” stands for knowledge everyone presupposes without a requirement or anyone writing it down. That is implicit and invites misunderstandings."
  ],
  "explanation": "Explicit is what is documented and verifiable, even if it is carried as an open assumption. Implicit is what everyone ‘just knows’ but nobody has recorded; this causes misunderstandings between those involved."
 },
 "c5q30": {
  "q": "A team discusses how much testing effort is appropriate for a new component. Which statements about principles of software testing are correct?",
  "options": [
   "Tests can show the existence of defects but not their absence.",
   "Enough tests show that a program is free of defects.",
   "In components with many defects already found, further defects are likely.",
   "Acceptance tests replace unit tests because they test the whole system.",
   "Unit tests check individual building blocks in isolation, acceptance tests the behaviour from the business point of view.",
   "Automated tests prove that the quality requirements for the architecture are met."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Correct: A passed test only shows that no defect occurred for these inputs. Freedom from defects cannot be proven by testing.",
   "Wrong: Even very many tests cover only part of all possible inputs and flows. Freedom from defects cannot be demonstrated this way.",
   "Correct: Defects often cluster in certain parts, for example due to complexity or poor structure. Additional testing effort pays off there.",
   "Wrong: The two complement each other. Unit tests find defects early and locally; acceptance tests check whether the system meets the business requirements.",
   "Correct: The curriculum names this distinction among the prerequisites: unit and acceptance tests as typical kinds of tests.",
   "Wrong: Automated tests check behaviour for concrete inputs and reveal defects. They cannot prove that quality requirements are met; this requires analysis and evaluation."
  ],
  "explanation": "Testing shows defects, not freedom from defects; defects cluster in certain components; unit and acceptance tests have different tasks. Traps: freedom from defects through quantity, acceptance tests as a replacement, tests as proof of quality requirements."
 },
 "k44": {
  "q": "Which UML diagram shows the respective element: the class diagram or the sequence diagram?",
  "categories": [
   "Class diagram",
   "Sequence diagram"
  ],
  "rows": [
   "Inheritance relationship between two classes.",
   "Call of an operation between two objects in chronological order.",
   "Attributes and operations of a type.",
   "Lifeline of an object.",
   "Association with multiplicity."
  ],
  "rowExpl": [
   "Inheritance is a relationship between types and thus static structure. The class diagram shows it; a sequence diagram shows no type relationships.",
   "A call between objects in chronological order is an interaction. The sequence diagram shows it, whereas the class diagram shows no temporal order.",
   "Attributes and operations of a type are static structure. They appear in the class diagram; the sequence diagram shows only messages between participants.",
   "The lifeline belongs to the interactions of a sequence diagram and shows an object over time. It does not exist in the class diagram.",
   "Associations with multiplicity describe how types relate to each other. That is static structure and belongs in the class diagram, not in the sequence diagram."
  ],
  "explanation": "The class diagram shows static structure: types, their attributes and operations, and relationships such as inheritance and association. The sequence diagram shows interactions between participants in chronological order, with lifelines and messages."
 },
 "c3q91": {
  "q": "Which statements about the problems of global state are correct?",
  "options": [
   "The problems only occur in concurrent programs.",
   "Dependencies are hidden because they do not become visible in any signature.",
   "Global state increases coupling even if the building blocks never call each other.",
   "Careful documentation of the global variables eliminates the drawbacks.",
   "Constants that are read globally have the same problems as mutable global state.",
   "Tests can influence each other via the state and are then no longer isolated."
  ],
  "correct": [
   1,
   2,
   5
  ],
  "optExpl": [
   "Wrong: Even in sequential programs effects are hard to predict because every place can change the state. Concurrency merely aggravates the problem.",
   "Correct: A function reads or changes the state without this appearing in parameters or return values. This hampers understanding and testing.",
   "Correct: The building blocks are linked through the shared state: a change by one acts on all others. This is coupling without a visible call.",
   "Wrong: Documentation makes the dependencies visible but does not remove them. The interactions and the dependence of tests on each other remain.",
   "Wrong: Immutable values cannot be changed by other places. The core problem, uncontrolled effects through changes, is absent.",
   "Correct: The result of a test depends on what earlier tests left in the state, for example when the order changes."
  ],
  "explanation": "Global state hides dependencies, couples building blocks without visible calls and makes tests order-dependent. Traps: seeing the problem only with concurrency, documentation as a remedy, and equating immutable values with mutable state."
 },
 "k45": {
  "q": "Does the statement describe rather static or rather dynamic typing?",
  "categories": [
   "Static typing",
   "Dynamic typing"
  ],
  "rows": [
   "Type errors are reported already at compile time.",
   "The type of a value is checked only at runtime.",
   "A call with a wrong argument type is noticed only when that place is executed.",
   "Tools can find type violations across the whole code base without execution."
  ],
  "rowExpl": [
   "With static typing the compiler checks types before execution, so type errors show up already at compile time. With dynamic typing that would happen only at runtime.",
   "If the type of a value is checked only at runtime, that is dynamic typing. With static typing the check would happen before execution.",
   "That a wrong argument type is noticed only when that place is executed is typical of dynamic typing. With static typing the error would be reported earlier.",
   "Because static typing allows types to be checked without execution, tools can find type violations across the whole code base. With dynamic typing, execution would be needed."
  ],
  "explanation": "With static typing the compiler checks types before execution, errors show early and with tool support. With dynamic typing types are checked only at runtime, so errors show only when the place is executed."
 },
 "c3q92": {
  "q": "Which statements about error and exception handling for remote service calls are correct?",
  "options": [
   "User messages should include the technical error message so that support can help faster.",
   "Retrying failed remote calls requires an idempotent operation or protection against duplicate execution.",
   "Exceptions for normal business cases, e.g. a search without results, are a proven means of flow control.",
   "A uniform concept classifies the error kinds and defines handling and responsibility for each kind.",
   "Errors should preferably be handled where they occur so that callers are not confronted with them.",
   "Errors should be handled where a meaningful reaction is possible, otherwise passed on to the caller."
  ],
  "correct": [
   1,
   3,
   5
  ],
  "optExpl": [
   "Wrong: Technical details belong in the log, with a reference (e.g. error ID) in the user message. Otherwise they can expose security risks.",
   "Correct: After a timeout it is unclear whether the call was executed. Without idempotency a duplicate effect looms, such as a double payment.",
   "Wrong: Exceptions are meant for exceptional situations; as flow control they obscure control flow and are costly.",
   "Correct: All building blocks then react consistently, and errors can be logged and evaluated system-wide.",
   "Wrong: Often only the caller can react meaningfully (retry, alternative path, message). Handling at the origin hides errors.",
   "Correct: This avoids both swallowing and needless propagation. When passing on, exceptions are often translated to a suitable abstraction level."
  ],
  "explanation": "Good error handling follows a uniform concept (error kinds, responsibilities), handles errors where a meaningful reaction is possible and respects idempotency when retrying. Typical traps: always handling at the origin, exceptions as flow control and technical details in user messages."
 },
 "c3q93": {
  "q": "Which statements about packages or namespaces, visibility and scope in design are correct?",
  "options": [
   "Namespaces primarily serve the runtime isolation of components.",
   "A package structure does not guarantee low coupling; cycles between packages are also possible.",
   "Types of a package that are not publicly visible can be changed without affecting users outside the package.",
   "The more types of a package are public, the more stable its interface is.",
   "A package cut by technical layers ensures high domain cohesion.",
   "A narrower scope limits where a variable can be used or changed unintentionally."
  ],
  "correct": [
   1,
   2,
   5
  ],
  "optExpl": [
   "Wrong: Namespaces organize names and avoid collisions. They isolate nothing at runtime; processes, containers or class loaders are responsible for that.",
   "Correct: Packages only group. Whether dependencies between them are cleanly directed depends on the design and has to be checked separately.",
   "Correct: What is not visible outside cannot be used there. These types are not part of the package's interface and may change freely.",
   "Wrong: Everything public is interface and has to be kept stable. More public types mean more binding and less freedom to change.",
   "Wrong: A layer cut distributes a domain function across several packages. Domain cohesion rather requires a domain-oriented cut.",
   "Correct: The smaller the scope, the fewer places can access the variable. This reduces unwanted dependencies."
  ],
  "explanation": "Packages and visibility limit the surface for dependencies but do not guarantee a good architecture. Traps: namespaces as runtime isolation, public equals stable, layer packages equal cohesion."
 },
 "k46": {
  "q": "Which parameter passing does the described property of an interface fit best?",
  "categories": [
   "Call-by-value",
   "Call-by-reference"
  ],
  "rows": [
   "For large objects, the call incurs copying effort.",
   "After returning, the caller finds a modified object although it was not delivered as a return value.",
   "Changes to the parameter stay local, which makes the interface easier to follow.",
   "Two callers passing the same object can influence each other through the parameter.",
   "Several results can be returned to the caller via parameters."
  ],
  "rowExpl": [
   "Passing the value creates a copy; for large data this costs time and memory. With a reference only a pointer is passed.",
   "This is a side effect: the function works on the caller’s original through the reference. With a copy the original would remain unchanged.",
   "The function works on a copy and the original is untouched. This makes interfaces more predictable; with references, side effects have to be considered and documented.",
   "Both hold a reference to the same object and changes are visible to all. This is a hidden risk of passing by reference; with copies this shared state change would not exist.",
   "Only if the function may change the original through a reference (output parameter) can it return results this way. With a copy the changes would be invisible to the caller."
  ],
  "explanation": "Call-by-value: copy, changes stay local, copying effort for large data. Call-by-reference: reference to the original, side effects possible, also on other users of the same object. For interfaces this means: make side effects explicit or avoid them."
 },
 "c1q47": {
  "q": "For a customer management system the system is to find a customer frequently by customer number. In addition, a function is to output all customers in the order of their creation. Which data structures are suitable?",
  "options": [
   "A map or dictionary (hash table) with the customer number as key.",
   "A stack because the most recently created customer is needed first.",
   "A list that keeps the customers in order of creation.",
   "A set without keys because it prevents duplicates.",
   "A fixed-size array that is created anew in full for every new customer."
  ],
  "correct": [
   0,
   2
  ],
  "optExpl": [
   "Correct: Access via a key is exactly what it is intended for and is normally very fast. Using the customer number as key covers the frequent lookup of a customer without searching the whole collection.",
   "Wrong: Wrongly deriving access from order: a stack only delivers elements in the reverse order of creation and allows no access via a customer number. It satisfies neither the lookup nor the output in creation order.",
   "Correct: A list preserves insertion order and can easily be traversed in that order. This directly satisfies the second requirement of outputting all customers in the order of their creation.",
   "Wrong: Preventing duplicates is not what is asked for here. A simple set without keys is neither searchable by customer number nor does it keep the creation order; both access patterns remain unfulfilled.",
   "Wrong: A fixed-size array that is created anew in full for every customer copies all data each time. It is inefficient and does not solve the search problem by customer number because no key-based access results."
  ],
  "explanation": "Access via a key calls for a map, the order of creation for a list; suitable data structures follow from the access patterns. Traps: stack, set without keys and constant re-creation."
 },
 "c5q31": {
  "q": "Which factors most often cause the implemented architecture to deviate from the planned one in practice? Select the best-fitting answers.",
  "options": [
   "Time pressure and shortcuts during implementation.",
   "Excessively high test coverage of the code.",
   "Conformity of code and architecture is not checked regularly.",
   "The use of a statically typed programming language.",
   "Developers do not know the architecture decisions and their reasons.",
   "Too frequent architecture reviews."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Correct: Under pressure the fastest rather than the intended solution is chosen. This creates forbidden dependencies that accumulate.",
   "Wrong: High test coverage does not cause structural deviation. It also says nothing about adherence to the architecture, because tests check behaviour and not structure.",
   "Correct: Without checks deviations go unnoticed and grow. Regular conformity checks make them visible early.",
   "Wrong: Static typing rather helps to check structural rules. It is not a typical cause of erosion.",
   "Correct: Whoever does not know decisions and reasons violates them unintentionally, for example with team changes or missing documentation.",
   "Wrong: Reviews uncover deviations rather than cause them. The effort can be a nuisance but is not the cause of the deviation."
  ],
  "explanation": "Deviations mostly arise from time pressure, missing conformity checks and unknown decisions. Traps: test coverage, programming language and reviews are not typical causes."
 },
 "c1q48": {
  "q": "A new project starts. Which tasks should architects prioritise most in the initial phase? Select the most suitable answers.",
  "options": [
   "Clarify the most important quality goals with the stakeholders.",
   "Design all building blocks down to class level.",
   "Record the existing constraints.",
   "Fix the technology stack before the requirements are known.",
   "Safeguard risky decisions early with a prototype.",
   "Write the test cases for the whole system."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Correct: Quality goals steer the design. Without them the yardstick for decisions is missing.",
   "Wrong: That would be detailed design too early. Initially the fundamental structure counts, details follow iteratively.",
   "Correct: Constraints limit the solution space from the start. Whoever discovers them late has to revoke decisions.",
   "Wrong: Technology should follow from requirements and constraints. An early commitment without this basis creates risk.",
   "Correct: Checking uncertain points early is iterative working: feedback replaces assumptions while corrections are still cheap.",
   "Wrong: This is an important task but not the architects', and in the initial phase it does not take priority over clarifying goals and risks."
  ],
  "explanation": "At the beginning architects clarify quality goals and constraints and safeguard risky decisions early. Traps: detailed design too early, technology before requirements, test cases as an architecture task."
 },
 "c2q35": {
  "q": "Which kinds of constraints can influence architecture decisions? Select the correct answers.",
  "options": [
   "Organisational constraints such as budget, time and team size.",
   "Technical constraints such as existing infrastructure and mandated technologies.",
   "Decisions that the team itself makes freely in the design.",
   "Regulatory constraints such as data protection and legal requirements.",
   "Wishes that a stakeholder merely expresses as an idea without them being mandated."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Correct: The curriculum explicitly names the availability of resources and staff qualification as organisational constraints.",
   "Correct: Existing hardware and software, frameworks and reference architectures are typical technical constraints.",
   "Wrong: Decisions taken by the team itself are results of the design, not constraints set from outside.",
   "Correct: Laws and data protection rules restrict the solution space, for example regarding the storage location of personal data. (The learning material counts standards and guidelines as organisational constraints instead.)",
   "Wrong: A mere wish is not a mandate. It can become a requirement but is not yet a constraint."
  ],
  "explanation": "Organisational, technical and regulatory constraints can influence decisions; they come from outside and restrict the solution space. Traps: the team's own design decisions and mere wishes."
 },
 "c4q48": {
  "q": "You are to present the architecture of a system consisting of existing and newly built components to management. Which contents are best suited?",
  "options": [
   "An overview of the context and coarse structure of the system.",
   "Class diagrams of all building blocks.",
   "Quality goals as well as consequences and costs of important decisions.",
   "Detailed sequence diagrams of all runtime scenarios.",
   "The deployment view with all servers, networks and configuration parameters."
  ],
  "correct": [
   0,
   2
  ],
  "optExpl": [
   "Correct: Management needs the overall context, not details. Context and coarse structure provide it on one page.",
   "Wrong: This level of detail addresses developers. For management it obscures the essentials.",
   "Correct: Management decides on resources and priorities. It needs the trade-offs behind the decisions.",
   "Wrong: Runtime scenarios in detail matter to developers. Management needs no process details, but an overview and the consequences.",
   "Wrong: The deployment view is mainly relevant for operations. This level of detail is not necessary for management."
  ],
  "explanation": "To management one conveys context, coarse structure, quality goals and the consequences of important decisions. Traps: developer details such as classes or runtime scenarios and operational deployment details."
 },
 "c3q94": {
  "q": "By which criteria should a team most likely decompose a system into building blocks? Select the best-fitting answers.",
  "options": [
   "Business cohesion (high cohesion).",
   "Building blocks of roughly equal size so that the effort per block stays comparable.",
   "Few and clear dependencies between the building blocks.",
   "As many small building blocks as possible so that each has exactly one task.",
   "Common reasons for change: what changes for the same reason belongs together.",
   "The existing database structure: one table, one building block.",
   "The purpose of a building block can be described in one sentence."
  ],
  "correct": [
   0,
   2,
   4,
   6
  ],
  "optExpl": [
   "Correct: What belongs together in business terms should lie in the same building block (high cohesion). This keeps changes local and makes responsibilities traceable.",
   "Wrong: Equal size is a planning wish, not a quality criterion of the cut. It can tear apart what belongs together in business terms and thereby increase dependencies.",
   "Correct: A good cut keeps coupling low and interfaces narrow. Few, clear dependencies make building blocks understandable and independently changeable.",
   "Wrong: Very fine granularity creates many interfaces and dependencies. A good cut follows what belongs together, not the smallest possible parts.",
   "Correct: This is the idea behind single responsibility and information hiding: what changes for the same reason belongs together so that changes remain limited to one building block.",
   "Wrong: The data model is a technical aspect. Cutting building blocks by tables often separates what belongs together in business terms and couples blocks via shared data.",
   "Correct: If the purpose of a building block can be described in one sentence, this points to a clearly delimited responsibility. A vague purpose, by contrast, indicates a poor cut."
  ],
  "explanation": "Good building block cuts follow business cohesion, low coupling, common reasons for change and a clear purpose. Traps: size or number of blocks as a goal, cutting by database schema."
 },
 "c4q49": {
  "q": "Which contents of the architecture documentation help new team members most in their first weeks? Select the most suitable answers.",
  "options": [
   "Context and building block overview of the system.",
   "A description of all classes and methods.",
   "Important decisions with rationale.",
   "A chronological history of all architecture changes since the start of the project.",
   "Cross-cutting concepts such as error handling and persistence.",
   "The configuration parameters of all environments in detail."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Correct: Both quickly convey where the system stands and what it consists of. This is the usual entry point.",
   "Wrong: This is too detailed and becomes outdated quickly. Newcomers do not find the essentials in it.",
   "Correct: The why cannot be read from the code. Newcomers thus avoid unknowingly reversing decisions already taken.",
   "Wrong: A change history is useful for reference, but gives newcomers no structured overview of the current system.",
   "Correct: These rules apply in many building blocks. Whoever knows them writes fitting code from the start.",
   "Wrong: These are operational details that become outdated quickly. They are secondary for understanding the architecture in the first weeks."
  ],
  "explanation": "Newcomers benefit from context, building block overview, justified decisions and cross-cutting concepts. Traps: detailed descriptions, change histories and environment details give no structured overview."
 },
 "c2q36": {
  "q": "A stakeholder demands that a new booking portal be “robust”. In the workshop it turns out that those involved understand different things by it: failure resilience, fault tolerance for wrong inputs and fast recovery. How do you proceed to turn this into a verifiable quality requirement?",
  "options": [
   "Formulate a scenario with context, stimulus, response and measure for each reading.",
   "Translate “robust” into a response time goal because that is easiest to measure.",
   "Clarify with the stakeholders which reading has priority.",
   "Formulate the scenario only for the reading the development team considers most important.",
   "Define an analysis method for each scenario, e.g. a fault injection test.",
   "Mandate a technology such as container orchestration that ensures robustness."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Correct: This turns a vague term into a verifiable criterion. Each reading gets its own measurable scenario.",
   "Wrong: Easy to measure does not mean fitting. Response time is a different quality than robustness and would miss the actual concern.",
   "Correct: Not every reading is equally important. Prioritisation belongs to the stakeholders and steers the design.",
   "Wrong: Weighting the readings belongs to the stakeholders, not the development team. Otherwise the scenario misses the actual concern.",
   "Correct: The curriculum requires that a requirement names its analysis method. Only then is it clear how fulfilment is demonstrated.",
   "Wrong: A technology is a solution, not a requirement. It makes robustness neither verifiable nor sufficient."
  ],
  "explanation": "Vague qualities are made concrete through scenarios with context, stimulus, response and measure, prioritised and given an analysis method. Traps: easily measurable instead of fitting, prioritisation by the team instead of the stakeholders, technology as a requirement."
 },
 "c3q95": {
  "q": "Which statements about conceptual integrity are correct?",
  "options": [
   "It demands that all teams use the same technology.",
   "Uniformity can cost flexibility because cases are also solved uniformly for which another solution would be better.",
   "It arises by itself with good communication among teams, without any need for prescriptions.",
   "Uniform solutions lower the onboarding effort and make behavior more predictable.",
   "It applies within a building block; between building blocks variety is desirable.",
   "A crosscutting concept is a means of establishing uniformity."
  ],
  "correct": [
   1,
   3,
   5
  ],
  "optExpl": [
   "Wrong: What is uniform is the solution of similar problems, not the technology. A uniform concept can also be implemented with different technologies.",
   "Correct: Prescribing a concept restricts local optimization. Consistency is weighed against the best individual solution in each case.",
   "Wrong: Without agreed concepts teams decide independently and arrive at different solutions. Communication helps but does not replace an explicit agreement.",
   "Correct: Whoever has understood a pattern once recognizes it throughout the system. This also lowers the effort of failure analysis.",
   "Wrong: Conceptual integrity concerns the system as a whole. Precisely between building blocks, inconsistent solutions lead to confusion.",
   "Correct: The concept defines how a problem is solved everywhere in the system, for example error handling or connection of external services."
  ],
  "explanation": "Conceptual integrity means: similar things are solved in a similar way, mostly via crosscutting concepts; it eases onboarding and predictability but costs local freedom to optimize. Traps: demanding the same technology, assuming uniformity arises by itself, applying it only within building blocks."
 },
 "c4q50": {
  "q": "Three teams jointly document the architecture of a system. Management wants a concise overview, development needs details on interfaces, operations wants to understand the deployment. In addition, the style and level of detail of the contributions differ markedly. Which measures are suitable?",
  "options": [
   "Base the contributions on a common template.",
   "Create a single overall description for all target groups at the same level of detail.",
   "Choose contents and level of detail per target group, e.g. via suitable views.",
   "Each team documents in its own format, reconciliation follows later.",
   "Consolidate the teams' contributions in style and content.",
   "Oral coordination replaces written documentation.",
   "Feed results of coordination meetings back into the documentation."
  ],
  "correct": [
   0,
   2,
   4,
   6
  ],
  "optExpl": [
   "Correct: A template prescribes structure and level of detail and makes contributions comparable. The curriculum names the benefit of template-based documentation.",
   "Wrong: Target groups need different contents and levels of detail. A uniform description overburdens some and does not suffice for others.",
   "Correct: Management, development and operations have different concerns. Views serve each of them appropriately.",
   "Wrong: Later reconciliation is laborious and leads to breaks. Uniform rules must come at the start.",
   "Correct: The curriculum names the consolidation and harmonisation of contributions from several author groups as a task.",
   "Wrong: The two complement each other. Without written documentation decisions and reasons are lost.",
   "Correct: Oral and written communication should be in line with each other. What was discussed belongs in the documentation."
  ],
  "explanation": "Several teams and target groups call for a common template, audience-appropriate views, consolidation of contributions and feeding oral agreements back. Traps: uniform description, own formats, orality instead of documentation."
 },
 "c3q96": {
  "q": "Which statements about energy efficiency as a cross-cutting topic of a mobile app are correct?",
  "options": [
   "Decisions on communication, GUI and concurrency make sense only after measurements on the finished product.",
   "Bundling network accesses saves energy but can reduce the freshness of the display.",
   "Energy efficiency depends on hardware alone; optimizing the most power-hungry building block achieves nothing further.",
   "A set of rules, e.g. on bundling network accesses, can be reused in other apps.",
   "Energy efficiency and response time can be maximized simultaneously because both improve with less work.",
   "Communication, GUI and concurrency influence each other and should be considered together."
  ],
  "correct": [
   1,
   3,
   5
  ],
  "optExpl": [
   "Wrong: Measurement is important, but fundamental decisions (e.g. pull or push) shape structure early and are costly to change later.",
   "Correct: Less frequent radio activity saves battery but delays data for the UI. This is a typical interaction between concepts.",
   "Wrong: Software substantially influences network access, screen updates and background activity. The topic affects several building blocks.",
   "Correct: Concepts are independent of the concrete business domain and therefore transferable.",
   "Wrong: Prefetching and frequent updates improve response time but cost energy. There is a trade-off.",
   "Correct: E.g. the GUI refresh rate determines how often data is fetched and how long threads run."
  ],
  "explanation": "Energy efficiency relates to communication, GUI and concurrency. Measures often shift load and conflict with timeliness and response time. A set of rules for it is reusable. It is not true that hardware or a single building block solves the topic conclusively."
 },
 "c3q97": {
  "q": "Which statements about the design of an interface behind which the implementation is to be replaced later are correct?",
  "options": [
   "A narrow interface eases replacement because less behavior has to be preserved.",
   "Exposing internal data structures increases replaceability because users decide for themselves how to access them.",
   "Assurances such as error behavior and response time belong to the contract even if they are not in the signature.",
   "The signature suffices as a contract as long as the types are narrowly defined.",
   "The interface should be designed from the needs of the users and not derived from the current implementation.",
   "The more closely the interface follows the current implementation, the easier the later replacement."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Correct: Every operation and every observable behavior is a promise the new implementation has to keep. A narrow interface limits this commitment but may cost users some convenience.",
   "Wrong: Exposed data structures bind users to the concrete implementation. If it is replaced, all users have to be adapted.",
   "Correct: Users rely on error behavior, runtime and ordering. If these assurances are missing from the contract, a new implementation violates expectations unnoticed.",
   "Wrong: Narrow types restrict only the syntax. Semantics, error cases and qualities remain open and have to be described additionally.",
   "Correct: Deriving the interface from the implementation carries its peculiarities into the contract. Designed from the user’s view, it remains independent of the concrete realization.",
   "Wrong: The opposite is true: the more implementation details are in the interface, the more the new implementation would have to reproduce, and the more tightly users are bound to it."
  ],
  "explanation": "Replaceability results from a narrow interface cut from the user’s view with an explicit contract including assurances. Traps: exposing internals as supposed flexibility, the signature as the sole contract and following the current implementation."
 },
 "c5q32": {
  "q": "A system has been developed further by changing teams for years. The architecture was recorded in decisions (ADRs) that, according to spot checks, are no longer consistently followed in the code. Management asks how conformity between code and decisions can be checked. Which approaches are suitable?",
  "options": [
   "Tool-supported dependency analysis against agreed rules, e.g. layers.",
   "Use unit test coverage as a measure of conformity.",
   "Code reviews with regard to adherence to the architecture decisions.",
   "Adapt the documentation to the code and declare the result conformant.",
   "Architecture tests in the build that report forbidden dependencies.",
   "Run load tests to check adherence to the structure."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Correct: The code is compared with the rules and violations are reported. This is a means of conformity checking.",
   "Wrong: Tests check behaviour, not structure. High coverage says nothing about whether architecture decisions are followed.",
   "Correct: People recognise violations that tools do not cover and spread knowledge of decisions in the team.",
   "Wrong: This only removes the visible deviation. Whether the code still supports the quality goals remains unclear.",
   "Correct: Automatic checks in the build make violations visible immediately, before they accumulate.",
   "Wrong: Load tests check runtime behaviour. They do not show whether dependencies correspond to the decisions."
  ],
  "explanation": "Conformity is checked with dependency analyses, reviews and architecture tests in the build. Traps: test coverage, adapting the documentation and load tests do not replace the structure check."
 },
 "c2q37": {
  "q": "Product management wants to deliver a new feature in two months, IT operations demands additional monitoring and resilience measures, and the development team is worried about growing technical debt. Which statements about dealing with these concerns are correct?",
  "options": [
   "Identify the stakeholders, their concerns and their effects on the architecture.",
   "Follow the concern of the stakeholder with the highest position.",
   "Make conflicts of goals and consequences visible, distinguish short- and long-term goals and agree with the stakeholders.",
   "Put the operations concerns on hold because they do not contribute to functionality.",
   "Leave the assessment of technical debt to the development team alone."
  ],
  "correct": [
   0,
   2
  ],
  "optExpl": [
   "Correct: This is the first step: who wants what, and how does it influence architecture and design process?",
   "Wrong: Position does not replace a trade-off. Conflicts are to be resolved on the basis of requirements and consequences.",
   "Correct: Deadline, operational safety and technical debt aim at different time horizons. Open weighing creates sound decisions.",
   "Wrong: Operational requirements concern qualities such as reliability and observability and influence the design.",
   "Wrong: Technical debt affects costs, modifiability and deadlines of later releases. This also concerns product management and has to be weighed together with the stakeholders."
  ],
  "explanation": "Concerns are identified, conflicts of goals and their consequences are made open, and short- versus long-term goals are weighed. Traps: decisions by hierarchy, putting operations concerns on hold and assessing technical debt only internally."
 },
 "c3q98": {
  "q": "For parts of a platform, components are fixed (proven authentication service, legacy core); other parts are still open in domain terms. Which statements about the design approach are correct?",
  "options": [
   "With bottom-up, requirements play no role because the existing components dictate the structure.",
   "The fixed components act as constraints on the structure and must flow into the design early.",
   "An early prototype that brings the designed interfaces together with an existing component provides quick feedback.",
   "A view-based approach excludes top-down and bottom-up because it knows no direction.",
   "With mixed approaches, two separate architectures inevitably arise that the team has to maintain in parallel.",
   "Existing components can increase coupling if their interfaces shape the own structure; an adapter can mitigate this."
  ],
  "correct": [
   1,
   2,
   5
  ],
  "optExpl": [
   "Wrong: Bottom-up must also meet the requirements. Existing components are judged by whether they contribute to this.",
   "Correct: They restrict the solution space; considering them late risks late, expensive adjustments.",
   "Correct: It checks early whether the top-down design and the existing parts fit together, thereby reducing integration risk.",
   "Wrong: Views can be combined with both directions, e.g. to check the structure from different perspectives.",
   "Wrong: Top-down and bottom-up are routes to the same architecture. They are aligned iteratively, not run separately.",
   "Correct: Bottom-up tends towards tight coupling. An own interface or adapter protects the structure from the component’s details."
  ],
  "explanation": "With partly fixed components, top-down and bottom-up are combined: consider existing parts early as constraints, get feedback via prototype, limit coupling to foreign interfaces. Traps: bottom-up without requirements, views as opposed to the directions."
 },
 "c4q51": {
  "q": "After a long discussion the team decided on a message broker. Half a year later it turns out that the latency is too high for one use case, and the team switches to direct calls for that case. How should this be recorded with ADRs?",
  "options": [
   "The original ADR is retained and gets the status “superseded”.",
   "The original ADR is overwritten so that only the current state remains.",
   "A new ADR records the context (latency problem), decision and consequences.",
   "The switch is made only in the code, the ADR remains unchanged.",
   "The new ADR refers to the superseded one so that the connection remains recognisable."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Correct: This keeps the decision history traceable. The status shows at a glance that the decision no longer applies.",
   "Wrong: Then context and reasons of the first decision are lost. A change should be recorded as a new ADR.",
   "Correct: An ADR after Nygard contains context, decision and consequences. The new knowledge about latency is the context of the new decision.",
   "Wrong: Then the documentation contradicts the system, and newcomers follow an outdated decision.",
   "Correct: Decisions depend on each other. The reference makes the dependency between the old and the new decision visible."
  ],
  "explanation": "A changed decision is recorded as a new ADR that refers to the old one, and the old one gets the status “superseded”. Traps: overwriting and a mere code change."
 },
 "c3q99": {
  "q": "Using a database technology unfamiliar to the team is uncertain; the release date is fixed. Which statements about handling the decision are correct?",
  "options": [
   "A time-boxed proof of concept with realistic data volumes can check assumptions before the binding decision.",
   "Postponing the decision until shortly before release keeps all options open and is therefore less risky.",
   "With a fixed deadline, a fallback plan is sensible that defines by when and by which criteria to fall back on a known technology.",
   "The market leader’s experience with the technology replaces checking against one’s own requirements.",
   "A proof of concept is meaningful only if it covers the full functional scope of the system part.",
   "After estimating the data volume, the technology decision can be considered final.",
   "An abstraction layer around data storage lowers the cost of a later correction, but causes additional effort and may hide peculiarities of the technology."
  ],
  "correct": [
   0,
   2,
   6
  ],
  "optExpl": [
   "Correct: A limited proof of concept replaces assumptions about suitability and data volume with measured values while the deadline still leaves leeway.",
   "Wrong: Whoever postpones only seems to keep options open. Time for corrections shrinks and implicit commitments arise. Postponing itself delivers no new insights.",
   "Correct: With a fixed deadline, a fallback plan limits the damage of a wrong decision. What matters is that deadline and criteria are defined beforehand, otherwise it is invoked too late.",
   "Wrong: Suitability depends on one’s own requirements, data volumes and constraints. That the technology works at another company does not prove this.",
   "Wrong: A proof of concept should clarify only the critical questions, such as data volume and access patterns. With full functional scope it would be too expensive and too late.",
   "Wrong: An estimate remains an assumption. A final commitment prevents learning from the results of further iterations and correcting the decision.",
   "Correct: Encapsulation limits what depends on the decision and thereby lowers correction costs. However, it costs effort and may hide properties of the technology, e.g. special query features."
  ],
  "explanation": "Uncertainty is reduced through targeted early checks (proof of concept), a fallback plan with criteria set in advance and limited dependencies; every measure has costs. Traps: postponing as risk reduction, full-scope prototype, market leader as evidence, final commitment."
 },
 "n1": {
  "q": "A team chooses the design approach. Does the situation point more towards top-down or more towards bottom-up?",
  "categories": [
   "Rather top-down",
   "Rather bottom-up"
  ],
  "rows": [
   "The team wants to integrate and test executable parts early although the overall picture is still blurred.",
   "The interfaces between the large parts are to be agreed before detail work so that teams can work in parallel.",
   "Several existing services of different departments are to be combined into a new overall product.",
   "The benefit for customers is to stay in view, and the building blocks are to be derived from it.",
   "A third-party payment service and its interfaces are fixed and shape the structure of large parts.",
   "The overall problem is manageable, and stakeholders want to see early which services the system provides."
  ],
  "rowExpl": [
   "Rather bottom-up: Quick test and feedback results are an advantage when building from concrete parts. Top-down delivers integrable results only late.",
   "Rather top-down: Interface orientation and fixing the coarse structure up front are typical for proceeding from the whole to the parts.",
   "Rather bottom-up: The larger structure arises from existing material. The risk is lacking orientation and tight coupling.",
   "Rather top-down: It is close to stakeholders in domain terms and keeps the customer benefit in view when starting from the whole.",
   "Rather bottom-up: Fixed parts determine the solution space, and the structure is built around them.",
   "Rather top-down: With a manageable overall problem (e.g. new development) it pays to start big and refine step by step."
  ],
  "explanation": "Top-down: overall picture manageable, interfaces and customer benefit up front. Bottom-up: existing and fixed parts shape the structure, quick feedback through executable parts. In practice both are combined."
 },
 "n2": {
  "q": "A team starts a new design top-down but encounters a fixed framework that dictates large parts of the structure. Which statements about the approach are correct?",
  "options": [
   "The team can additionally develop views (e.g. building block, runtime and deployment view) to safeguard the structure from several perspectives.",
   "The fixed framework shows that the top-down approach was wrong; the team should start over completely bottom-up.",
   "“Clarify the riskiest first” is a heuristic that provides a good starting point but does not replace evaluation.",
   "A heuristic such as “divide and conquer” yields a sound decomposition when applied correctly, so that a subsequent evaluation can be omitted.",
   "In conflicts between framework and domain target structure, the framework is adapted because technology must follow the domain.",
   "The direction may change: top-down and bottom-up are combined and applied iteratively in practice."
  ],
  "correct": [
   0,
   2,
   5
  ],
  "optExpl": [
   "Correct: A view-based approach can be combined with top-down and bottom-up and covers different questions.",
   "Wrong: The design so far remains valid. The framework is a constraint that is incorporated through bottom-up parts.",
   "Correct: Heuristics give orientation for getting started; whether the design holds is only shown by its evaluation.",
   "Wrong: Heuristics are rules of thumb, not guarantees. The result must still be evaluated against requirements and qualities.",
   "Wrong: This is a case-by-case trade-off. A fixed framework can also influence the domain structure; cost and risks must be weighed.",
   "Correct: Depending on the state of knowledge and constraints one switches between the directions."
  ],
  "explanation": "Top-down and bottom-up are combined and applied iteratively; heuristics (riskiest first, divide and conquer) give starting points but do not replace evaluation; views complement. Traps: restarting instead of adjusting, heuristics as binding."
 },
 "n3": {
  "q": "The design depends heavily on a technology the team does not know. Which approach is most appropriate?",
  "options": [
   "Hide the technology behind an abstraction layer and postpone its evaluation.",
   "Finish the design based on the known building blocks and evaluate the technology only during implementation.",
   "Clarify the uncertainty early, for example with a prototype or spike, before further decisions build on it.",
   "Switch to a widespread, proven technology without first checking whether it meets the requirements."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: The abstraction layer limits the cost of change, but it does not remove the risk that the technology cannot support the design. The uncertainty stays unresolved and keeps acting.",
   "Wrong: The later a technology proves unsuitable, the more decisions built upon it have to be reverted. The biggest risk belongs at the beginning, not at the end.",
   "Correct: This matches the heuristic of clarifying the riskiest part first: a small experiment shows in time whether the technology supports the design and lowers the risk of costly corrections.",
   "Wrong: Reusing proven solutions is a heuristic, not a free pass: without checking against the requirements, one risk is merely traded for another."
  ],
  "explanation": "For an unknown technology that shapes the design: clarify the riskiest part first, for example via a prototype. Traps: abstraction as a substitute for clarification, checking late, and proven solutions without comparing them to the requirements."
 },
 "n4": {
  "q": "Which statements about the robustness principle “be strict in what you send, tolerant in what you accept” (Postel’s Law) are correct?",
  "options": [
   "Own outgoing messages adhere to the interface contract even if receivers would tolerate deviations.",
   "Unknown additional fields in received messages are ignored; this eases the evolution of interfaces.",
   "Being tolerant when accepting can mask contract violations by senders so that they persist.",
   "Being tolerant when accepting means replacing missing mandatory data with default values so that the receiver stays robust.",
   "The principle presupposes that sender and receiver always use the same interface version.",
   "Whoever accepts tolerantly no longer needs to document the interface contract."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: “Strict sending” means producing only contract-conforming messages yourself. Only then can partners rely on your behaviour.",
   "Correct: This is the tolerance when accepting. Senders can add new fields without breaking existing receivers, which eases independent evolution of interfaces.",
   "Correct: This is a well-known drawback. Because deviations pass without errors, senders do not notice that they violate the contract, and the deviation becomes entrenched.",
   "Wrong: Tolerance concerns the inessential, such as unknown additional fields. Missing mandatory data must be detected and rejected; silently filling in defaults produces wrong data.",
   "Wrong: The principle is meant to allow sender and receiver to exist in different versions as long as changes are backward-compatible extensions.",
   "Wrong: The contract is the basis for strict sending and for deciding what is essential and what may be tolerated. It must still be documented."
  ],
  "explanation": "Postel’s Law: strict in what you send, tolerant in what you accept. Tolerance applies only to the inessential and has a price (masked contract violations). Traps: silently completing mandatory data, presupposing identical versions, or considering the contract dispensable."
 },
 "n5": {
  "q": "Which design principle does each example describe best?",
  "categories": [
   "Abstraction",
   "Uniformity"
  ],
  "rows": [
   "All services use the same format for date and time values.",
   "The business logic works with its own “shipment” model without knowing which logistics provider is behind it.",
   "All REST interfaces of the system follow the same naming and error conventions.",
   "Clients call “save document” without knowing the persistence technology.",
   "In all building blocks, configuration is loaded via the same mechanism.",
   "The reporting module produces output via an exporter behind which PDF and Excel generation are interchangeable."
  ],
  "rowExpl": [
   "The same time format in all services means solving similar things in a similar way. That is uniformity; nothing is hidden behind a layer.",
   "The business logic knows only its own model and not the provider’s details. That is abstraction: the inessential is faded out so that users can focus on the essential.",
   "Equal naming and error conventions across all interfaces are uniformity. An abstraction, by contrast, would hide implementation details.",
   "The client uses an operation at the business level and does not know the technology behind it. That is abstraction, not standardization.",
   "A common configuration mechanism solves the similar task the same way everywhere. That is uniformity, even if it may relieve the user of technical details.",
   "Behind the exporter, concrete formats are interchangeable. The reporting module depends on an abstraction rather than on concrete implementations."
  ],
  "explanation": "Abstraction fades out the inessential and separates usage from concrete realization. Uniformity solves similar things in a similar way everywhere. Trap: uniform mechanisms can hide details as well; what matters is whether interchangeability behind an interface or sameness of the solution is the point."
 },
 "n6": {
  "q": "Does the statement describe a cross-cutting topic or a cross-cutting concept?",
  "categories": [
   "Cross-cutting topic",
   "Cross-cutting concept"
  ],
  "rows": [
   "Accesses to personal data must be traceable in all building blocks.",
   "All outbound calls go through circuit breakers with limited retries and backoff.",
   "Texts, date and number formats must be adaptable for several countries.",
   "A central audit log service with a uniform event format is used by all building blocks.",
   "The application must be reconfigurable in operation without a restart, across several building blocks."
  ],
  "rowExpl": [
   "This is a requirement that affects many building blocks without saying how it is met. That is a cross-cutting topic; a uniform audit mechanism would be the matching concept.",
   "This is a concrete, overarching solution for dealing with failing neighbouring systems. That is a cross-cutting concept; the topic behind it would be fault tolerance.",
   "The statement names what must be handled in many building blocks, but no implementation. That is a cross-cutting topic (internationalisation); the solution would be a concept such as central resource files.",
   "A shared service with a fixed format defines how traceability is implemented. That is a cross-cutting concept, not a topic.",
   "This is an overarching requirement without a defined solution. That is a cross-cutting topic (configurability); only something like a central configuration service would be a concept."
  ],
  "explanation": "A cross-cutting topic describes what must be handled in many building blocks (requirement or question). A cross-cutting concept defines how it is solved uniformly. What matters is whether the statement fixes a solution."
 },
 "n7": {
  "q": "Building blocks communicate asynchronously via messages. Which interactions with other cross-cutting topics must be considered?",
  "options": [
   "Persistence: asynchronous processing allows changes across several building blocks to be bundled in one ACID transaction again.",
   "UI: feedback arrives delayed, so understandable status displays are needed instead of endless waiting.",
   "The interactions concern only distributed systems; for messages within a process they do not arise.",
   "Error handling: messages can be lost or arrive twice, so retries and idempotent receivers are needed.",
   "Ordering: the message broker guarantees delivery in sending order so receivers need not handle ordering.",
   "Persistence: state must remain valid between messages, e.g. through transactions or resumption."
  ],
  "correct": [
   1,
   3,
   5
  ],
  "optExpl": [
   "Wrong: Asynchrony rather dissolves the shared transaction. Consistency arises through retry, compensation or eventual consistency.",
   "Correct: The user does not get the result within the same call; the UI must make intermediate states visible.",
   "Wrong: Even within a process there are ordering, state, delayed feedback and handler errors. Distribution only aggravates the issues.",
   "Correct: Delivery guarantees are usually at most at-least-once; receivers must tolerate duplicates.",
   "Wrong: Ordering guarantees apply at most in limited form, e.g. per partition; retries or parallel receivers can violate them.",
   "Correct: A half-processed message chain must not leave inconsistent data; the flow must be resumable."
  ],
  "explanation": "Asynchronous communication decouples in time but creates new requirements: loss and duplicates require retries and idempotency, state must remain consistent between messages and the UI must present delayed feedback. Ordering is not generally guaranteed, and ACID transactions across building blocks are no longer available."
 },
 "n8": {
  "q": "The same architecture is to be communicated to management and to development. Which statements about documentation and communication for these target groups are correct?",
  "options": [
   "Management mainly needs interface specifications so that it can steer the implementation.",
   "Both target groups receive the same complete document so that nothing gets lost.",
   "Development needs building blocks, interfaces and concepts.",
   "Content, form and level of detail follow the concerns of the respective stakeholders.",
   "An overview with risks and costs is sufficient for management."
  ],
  "correct": [
   2,
   3,
   4
  ],
  "optExpl": [
   "Wrong: Interface specifications are developer details. Management needs an overview, risks and costs in order to decide, not to steer the implementation in detail.",
   "Wrong: One document for everyone ignores differing concerns. Target-group oriented means adapting content and level of detail per target group instead of serving all with the same complete work.",
   "Correct: These are the contents developers work with. Building blocks, interfaces and concepts give them the guidance for implementation.",
   "Correct: This is the core statement on target-group oriented communication: content, form and level of detail follow the concerns of the respective stakeholders.",
   "Correct: Management needs an overview, risks and costs to make decisions. Technical depth is not necessary for this target group."
  ],
  "explanation": "Architecture is documented according to stakeholder concerns: management needs overview, risks and costs; development needs building blocks, interfaces and concepts. Traps: one document for all and developer details such as interface specifications for management."
 },
 "n9": {
  "q": "Statements about oral and written communication of architecture – true or false?",
  "categories": [
   "True",
   "False"
  ],
  "rows": [
   "Presentations and walkthroughs should be based on the documentation.",
   "What is discussed in meetings need not flow back into the documentation if everyone was present.",
   "A template also acts as a checklist for completeness.",
   "Contributions of several authors should be consolidated in style and content.",
   "For management, the sections of the developer documentation are adopted unchanged."
  ],
  "rowExpl": [
   "Oral communication should build on the documentation so that both stay in line. The statement is therefore true.",
   "Even if everyone was present, results from meetings must flow back into the documentation; otherwise they get lost and oral and written knowledge drift apart. The statement is false.",
   "A template provides structure and at the same time helps check that nothing is missing. The statement is therefore true.",
   "Several authors often write differently. Consolidated contributions make the documentation uniformly readable, so the statement is true.",
   "Management needs different content and a different level of detail, such as overview, risks and costs. Unchanged developer sections do not communicate that. The statement is false."
  ],
  "explanation": "Oral and written communication are kept in line: presentations use the documentation, results from meetings flow back. Templates provide structure and check completeness; contributions are consolidated. False: omitting the feedback and handing developer documentation unchanged to management."
 },
 "n10": {
  "q": "Does the statement belong to the blackbox or the whitebox description of a building block in the building block view?",
  "categories": [
   "Blackbox",
   "Whitebox"
  ],
  "rows": [
   "Responsibility of the building block as well as provided and required interfaces.",
   "The sub-blocks and their relationships to each other.",
   "Assurances at the interface, e.g. on response time or error behaviour.",
   "The interplay of the sub-blocks in fulfilling the responsibility.",
   "What users of the building block can expect without knowing its inside."
  ],
  "rowExpl": [
   "Responsibility and provided and required interfaces describe the building block from the outside. That is the blackbox; the whitebox shows the inside.",
   "Sub-blocks and their relationships to each other show the inside of the building block. That is the whitebox; the blackbox shows only what is visible from outside.",
   "Assurances at the interface, such as response time or error behavior, matter from the user's perspective. They belong to the blackbox, not to the internal structure of the whitebox.",
   "How the sub-blocks interact to fulfill the responsibility is an internal view. It belongs in the whitebox; the blackbox only says what the building block achieves.",
   "What users can expect without knowing the inside is described by the blackbox. The whitebox, by contrast, reveals the inside."
  ],
  "explanation": "The blackbox describes responsibility, interfaces and assurances from the user’s perspective. The whitebox shows sub-blocks, relationships and interplay; it must be consistent with the blackbox and introduces no new external interfaces."
 },
 "n11": {
  "q": "A team describes the building block view, deployment view and context view of its system. Which statements about the consistency of the views are correct?",
  "options": [
   "All views describe the same system and must be consistent with each other.",
   "In the deployment view, building blocks are mapped to artifacts and artifacts to nodes.",
   "The deployment view replaces the building block view because it shows the real system.",
   "The context view defines the internal decomposition from which the building block view is derived.",
   "The whitebox of a building block must not introduce new external interfaces.",
   "The runtime view may name building blocks differently from the building block view if this makes the scenario simpler."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Correct: Views are different perspectives on the same system. They must therefore not contradict each other but be consistent with each other.",
   "Correct: This is the mapping of software onto hardware or execution environments: building blocks are mapped to artifacts and artifacts to nodes. This keeps the deployment view linked to the building block view.",
   "Wrong: Confusing replacement with complement: the two views show different things, namely the structure of building blocks versus the mapping to infrastructure. The deployment view does not replace the building block view.",
   "Wrong: The context view shows the system as a blackbox with its neighbours and contains no internal decomposition. That is first created in the building block view.",
   "Correct: The whitebox must remain consistent with the blackbox. New external interfaces in the refinement would change the contract towards the outside and make the views contradictory.",
   "Wrong: All views describe the same system and must use the same building blocks with the same names. Deviating names make the views impossible to link."
  ],
  "explanation": "Views describe the same system consistently: the whitebox adheres to the blackbox, the deployment view maps building blocks to artifacts and artifacts to nodes. Traps: deviating building blocks or names per view, views as substitutes for each other, and a context view that defines the decomposition."
 },
 "n12": {
  "q": "Does the statement belong to the business context or the technical context of an order system?",
  "categories": [
   "Business context",
   "Technical context"
  ],
  "rows": [
   "The order goes from the shop to the warehouse system.",
   "The order is transmitted via message queue in JSON format.",
   "The payment provider delivers a payment confirmation.",
   "The payment service is connected via REST over HTTPS.",
   "Customers enter their delivery address."
  ],
  "rowExpl": [
   "The order going from the shop to the warehouse system describes which business content flows between whom. That is business context; the technology of the transmission stays open.",
   "Message queue and JSON format say over which channel and in which format data is transmitted. That is technical context and not a business statement.",
   "The payment confirmation is business content that the provider exchanges with the system. How it is transmitted would be technical context.",
   "REST over HTTPS names the protocol and technology of the connection. That belongs in the technical context, not the business context.",
   "Customers entering their delivery address describes a business exchange between users and the system. It names neither channel nor protocol, so it is business context."
  ],
  "explanation": "The business context shows who exchanges which business content with the system. The technical context shows over which channels, protocols and formats this happens."
 },
 "n13": {
  "q": "A team is to prepare a fundamental decision on communication between services. Which approach makes sense?",
  "options": [
   "Clarify the problem and influencing factors before comparing solutions.",
   "Choose the best-known technology immediately and supply the reasoning later.",
   "Collect alternatives, but evaluate them by the team's preferences rather than against the quality goals.",
   "Collect several alternatives and evaluate them against the quality goals.",
   "Record and communicate the decision and its reasons."
  ],
  "correct": [
   0,
   3,
   4
  ],
  "optExpl": [
   "Correct: Without a clear problem, alternatives cannot be evaluated meaningfully. Only once the problem and influencing factors are clarified is a sound comparison possible.",
   "Wrong: Choosing the technology first reverses the order. The reasoning is part of the decision, not an afterthought; otherwise it becomes a post-hoc justification.",
   "Wrong: Alternatives must be evaluated against quality goals and constraints so that the decision is traceable and justified.",
   "Correct: The evaluation is based on the prioritised quality goals. Collecting several alternatives is what makes the trade-off possible and shows which solution best supports the goals.",
   "Correct: This keeps the decision traceable and supported by those involved. Recorded reasons help to understand and, if necessary, review the decision later."
  ],
  "explanation": "Decisions are made systematically: clarify the problem and influencing factors, collect alternatives, evaluate against quality goals, decide, record and communicate. Traps: technology first, rationale later, and evaluation by team preferences instead of quality goals."
 },
 "n14": {
  "q": "A team decides on a microservice architecture. Which follow-up decisions typically result?",
  "options": [
   "The programming language is thereby fixed for all services.",
   "How the services communicate with each other.",
   "Where and how the data of the individual services is kept.",
   "The services run on a shared node so that communication becomes unnecessary.",
   "How operation, deployment and monitoring of the many services are organised.",
   "Follow-up decisions need not be recorded because they follow from the first decision."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Wrong: Choosing microservices does not fix a uniform programming language. The choice of language is a follow-up decision of its own.",
   "Correct: Communication has to be decided anew because the services no longer run in the same process. Protocols and interaction patterns are a typical follow-up decision.",
   "Correct: Each service typically manages its own data. This leads to the decision of where and how it is kept and how it stays consistent across services.",
   "Wrong: Services still communicate, and how they are distributed and operated is a follow-up decision.",
   "Correct: Operational complexity grows with the number of services and requires decisions of its own on how operation, deployment and monitoring are organised.",
   "Wrong: Follow-up decisions and their dependencies should also be traceable. That they follow from the first decision is no reason not to record them."
  ],
  "explanation": "A microservices decision forces follow-up decisions on communication, data storage, operation, deployment and monitoring. Dependencies between decisions are recognised and documented. Traps: denying consequences, assuming a fixed programming language, or treating a shared node as a replacement for communication."
 },
 "n15": {
  "q": "Statements about Architecture Decision Records (ADR) – true or false?",
  "categories": [
   "True",
   "False"
  ],
  "rows": [
   "When a decision changes, the existing ADR is overwritten.",
   "An ADR can have the status “proposed”.",
   "One ADR per decision, often versioned close to the code, is common.",
   "An ADR is written for every detail decision in the code.",
   "A superseded decision remains traceable as an ADR with status “superseded”."
  ],
  "rowExpl": [
   "A changed decision gets a new ADR that supersedes the old one. Overwriting the old one would destroy traceability, so the statement is false.",
   "The status of an ADR can be, for example, “proposed”, “accepted” or “superseded”. An ADR may therefore still be open, so the statement is true.",
   "One ADR per decision is common, and it is often versioned close to the code. This keeps decision and implementation traceable together, so the statement is true.",
   "ADR-worthy are decisions with considerable impact, hard to reverse or with follow-up decisions. Not every detail decision in the code needs an ADR, so the statement is false.",
   "A superseded decision is not deleted but remains traceable as an ADR with status “superseded”. The statement is therefore true."
  ],
  "explanation": "One ADR per decision with status, context, decision and consequences; a new ADR supersedes an old one instead of overwriting it. ADR-worthy are decisions with considerable impact, hard to reverse or with follow-up decisions, not every minor matter."
 },
 "n16": {
  "q": "Is the data type a product (AND) or a sum (OR)?",
  "categories": [
   "Product (AND)",
   "Sum (OR)"
  ],
  "rows": [
   "A customer consists of name, address and customer number.",
   "A payment method is exactly one of credit card, direct debit or voucher.",
   "An address consists of street, house number, postal code and city.",
   "A delivery status is either “shipped”, “delivered” or “returned”.",
   "A user account has login, password hash and role."
  ],
  "rowExpl": [
   "A customer contains name, address and customer number at the same time. All components are present together (AND), so it is a product, not a sum.",
   "A payment method is exactly one of several variants, never several at once. That is an OR and thus a sum, not a product.",
   "An address consists of street, house number, postal code and city, all together (AND). That is a product, where the numbers of possible values multiply.",
   "A delivery status has exactly one of three values at any time. That is an OR and thus a sum, whose numbers of possible values add up.",
   "A user account has login, password hash and role at the same time (AND). All components belong together, so it is a product and not a sum."
  ],
  "explanation": "A product combines all components (AND); the number of possible values multiplies. A sum contains exactly one of several variants (OR); the number of possible values adds up."
 },
 "n17": {
  "q": "A team discusses what “quality” means for software and how it relates to functionality. Which statements are correct?",
  "options": [
   "Quality characteristics such as security and performance can be maximised independently of each other.",
   "Quality models such as ISO 25010 organise quality into quality characteristics.",
   "Changing one quality can affect others, so trade-offs are necessary.",
   "Quality only emerges during implementation; the architecture has little influence on it.",
   "Some categorisations, e.g. that of IREB, separate functionality and quality.",
   "In ISO 25010, functionality is not part of the quality model."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Wrong: Qualities influence each other, e.g. security and usability or performance efficiency and memory demand. That is why trade-offs are necessary.",
   "Correct: The main categories of a quality model such as ISO 25010 are called quality characteristics. They break the vague term quality down into nameable properties.",
   "Correct: Changing one quality can affect others, so trade-offs are necessary. Examples are security versus usability or performance efficiency versus memory demand.",
   "Wrong: Architecture decisions shape the qualities of a system substantially, e.g. through structure and cross-cutting concepts. Implementation can change them only to a limited extent afterwards.",
   "Correct: There are two readings of quality, and separating functionality and quality is a widespread one, e.g. in the IREB categorisation.",
   "Wrong: ISO 25010 lists functional suitability as a quality characteristic of its own. Separating functionality and quality exists only in other categorisations such as that of IREB."
  ],
  "explanation": "Quality characteristics organise quality; some categorisations separate functionality and quality, whereas ISO 25010 includes it. Qualities interact, and architects influence them. Traps: independent maximisation, quality only emerging in implementation."
 },
 "n18": {
  "q": "A team evaluates response times: the mean is 0.8 s, but individual users regularly wait more than 5 s. Which statements are correct?",
  "options": [
   "The measurement shows whether the architecture is the cause of the long waiting times.",
   "A scenario should name a percentile, e.g. “95% of requests under 1 s”.",
   "The mean can mask outliers and thus give a wrong picture.",
   "The 95th percentile alone reliably shows whether the architecture meets the quality requirement overall.",
   "Besides the mean, percentiles should be considered.",
   "Percentiles belong in the evaluation of load tests, not in the formulation of scenarios."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Wrong: The measurement shows that slow requests exist, not why. The cause, e.g. architecture, database or infrastructure, is only clarified by further analyses such as profiling or a qualitative evaluation.",
   "Correct: A scenario with a percentile such as “95% of requests under 1 s” makes the requirement verifiable and also accounts for slow cases that the mean does not capture.",
   "Correct: A few very slow requests barely show in the mean. It can mask outliers and thus give a wrong picture, as here with a 0.8 s mean and regular waits above 5 s.",
   "Wrong: A percentile describes only a part of the distribution, e.g. the slowest 5% remain unaccounted for. Whether the requirement is met overall is only shown by several measures and scenarios together.",
   "Correct: Percentiles show how many requests exceed a limit and add the distribution to the mean. This makes the slow cases visible.",
   "Wrong: Scenarios in particular often name a percentile, e.g. “95% of requests under 1 s”, because this makes the requirement verifiable and slow cases do not vanish in the mean."
  ],
  "explanation": "Besides the mean one considers percentiles because the mean hides outliers; scenarios therefore often name a percentile. Traps: measurement as cause analysis, a single percentile as overall proof, and percentiles only for load tests."
 },
 "n19": {
  "q": "Does the statement describe fan-in (incoming) or fan-out (outgoing)?",
  "categories": [
   "Fan-in (incoming)",
   "Fan-out (outgoing)"
  ],
  "rows": [
   "How many other building blocks use this building block?",
   "How many other building blocks does this building block need?",
   "High value: changes to the building block are risky because many are affected.",
   "High value: the building block needs a lot of knowledge about other building blocks.",
   "This corresponds to afferent coupling."
  ],
  "rowExpl": [
   "This counts the building blocks that use this one, that is, incoming dependencies. That is fan-in, not fan-out, which counts the blocks it needs itself.",
   "This counts the building blocks this one needs itself, that is, outgoing dependencies. That is fan-out, not fan-in, which counts the users of the block.",
   "A high fan-in means many building blocks depend on the one in question. Changes affect all of them and are risky. Fan-out, by contrast, concerns its own dependencies.",
   "A high fan-out means the building block needs many others and therefore must know a lot about them. This concerns its own outgoing dependencies, not its users as with fan-in.",
   "Afferent coupling counts incoming dependencies, i.e. the users of the building block. That is fan-in; efferent coupling would correspond to fan-out."
  ],
  "explanation": "Fan-in (afferent) counts how many building blocks use a building block; changes to it are risky. Fan-out (efferent) counts how many building blocks it needs itself; a high value means a lot of required knowledge about others."
 },
 "n20": {
  "q": "Does the statement describe a walkthrough or an inspection?",
  "categories": [
   "Walkthrough",
   "Inspection"
  ],
  "rows": [
   "The author moderates the joint walk-through in one session.",
   "Individual preparation, minutes and independent moderation.",
   "Good for early feasibility questions and knowledge transfer.",
   "Highest degree of formalisation, for particularly critical situations.",
   "The author listens and explains; an independent moderator leads."
  ],
  "rowExpl": [
   "In a walkthrough the author guides the participants through the material in a joint session and moderates it personally. In an inspection, an independent moderator leads instead.",
   "Individual preparation, minutes and independent moderation are hallmarks of the formal approach. That is the inspection, not the looser walkthrough.",
   "The walkthrough is less formal and suits early feasibility questions and knowledge transfer. The strictly formal inspection is not needed for that.",
   "The inspection is the most formalised form and is therefore intended for particularly critical situations. A walkthrough is too informal for that.",
   "In an inspection the author listens and explains while an independent moderator leads the session. In a walkthrough, by contrast, the author moderates personally."
  ],
  "explanation": "A walkthrough is a joint walk-through in one session, moderated by the author; suited for early feasibility and knowledge transfer. An inspection is the most formal, with individual preparation, minutes and an independent moderator."
 },
 "n21": {
  "q": "Which findings of a conformance check count as problem indicators?",
  "options": [
   "Missing comments on public methods.",
   "A mix of business and technical aspects in one building block.",
   "Dependencies that match the planned layering and are documented in the building block view.",
   "Cycles or unwanted dependencies between building blocks.",
   "An adapter building block that is the only one talking to an external system.",
   "A high fan-out, i.e. many outgoing dependencies of a building block."
  ],
  "correct": [
   1,
   3,
   5
  ],
  "optExpl": [
   "Wrong: Missing comments concern the implementation, not adherence to the structure and dependency rules of the architecture. A conformance check looks for deviations from the design.",
   "Correct: A mix of business and technical aspects in one building block points to violated separations and deviates from the intended design.",
   "Wrong: Documented dependencies that follow the rules are the target state. A conformance check looks for deviations from the plan, not for matches.",
   "Correct: Cycles or unwanted dependencies contradict the design’s dependency rules. They are classic findings of a conformance check.",
   "Wrong: This is intended: the integration is encapsulated in one place. It is a desired state and not a finding of a conformance check.",
   "Correct: A high fan-out, i.e. many outgoing dependencies of a building block, means high coupling. This points to problems because the block depends on many others and becomes hard to change."
  ],
  "explanation": "Typical problem indicators are cycles or unwanted dependencies, mixed domain and technical concerns, and high coupling (fan-out). Traps: missing comments, documented rule-conforming dependencies or an encapsulated adapter do not indicate a problem."
 },
 "n22": {
  "q": "Can software architecture achieve this, or is it beyond its reach?",
  "categories": [
   "Architecture can achieve this",
   "Beyond its reach"
  ],
  "rows": [
   "Create the structural prerequisites for the required qualities.",
   "Determine the project's process model (e.g. Scrum or waterfall).",
   "Keep complexity manageable and promote understanding.",
   "Decide by itself which features and quality requirements are wanted.",
   "Guide development through guidelines."
  ],
  "rowExpl": [
   "Architecture creates the structural prerequisites for function and quality, for example through decomposition and cross-cutting concepts. That is core to it, so it can achieve this.",
   "Which process model a project uses is decided at project or organisational level. Architecture has to cope with the model but does not determine it, so it is beyond its reach.",
   "Good structuring keeps complexity manageable and promotes understanding among everyone involved. That is a central achievement of architecture and within its reach.",
   "Which features and quality requirements are wanted is determined by the stakeholders. Architecture implements them and does not decide them itself, so it is beyond its reach.",
   "Architecture provides guidelines that development follows and thus steers it. That is a means available to it, so it can achieve this."
  ],
  "explanation": "Architecture creates the structural prerequisites for function and quality, keeps complexity manageable, promotes understanding and provides guidelines. The process model and the definition of features are beyond its reach."
 },
 "n23": {
  "q": "Is the statement an assumption (presumed, not secured) or a constraint (given)?",
  "categories": [
   "Assumption",
   "Constraint"
  ],
  "rows": [
   "The design assumes an availability of the partner service of 99.9%.",
   "The company prescribes PostgreSQL as the database.",
   "The design presupposes that users have fast connections.",
   "Personal data must be stored in the EU by law.",
   "The team estimates that the load volume stays below 1000 requests per minute in the first year."
  ],
  "rowExpl": [
   "The availability of the partner service is presumed in the design without being imposed from outside or substantiated. A presumed, unsecured fact is an assumption and should be verified.",
   "That the company prescribes PostgreSQL is an external mandate. It is given and restricts the solution space, so it is a constraint and not an assumption.",
   "Fast user connections are presupposed by the design but neither imposed from outside nor substantiated. That is a presumed, unsecured fact and therefore an assumption.",
   "The legal obligation to store personal data in the EU is given and not negotiable. It restricts the solution space and is a constraint.",
   "The team's estimate of the load volume is not secured but an assessment. It is presumed rather than given, so it is an assumption that should be recorded explicitly and verified."
  ],
  "explanation": "An assumption is a presumed but not secured fact and should be recorded explicitly and verified. A constraint is given and restricts the solution space."
 },
 "n24": {
  "q": "Does the item belong to the domain architecture or to the technical architecture?",
  "categories": [
   "Domain architecture",
   "Technical architecture"
  ],
  "rows": [
   "Physical database schema with indexes and partitioning.",
   "Which business objects (e.g. policy, tariff) exist and how they relate.",
   "Which processes from application to policy issuance the system is to support.",
   "Choosing a layered architecture with regard to modifiability.",
   "Which business actors and neighbouring systems the system exchanges services with.",
   "Defining the runtime environment (containers, cluster)."
  ],
  "rowExpl": [
   "Technical: Indexes and partitioning are realisation decisions. The domain data model, in contrast, would be domain.",
   "Domain: This is the domain model of the field, independent of the technical realisation.",
   "Domain: It concerns the benefit from the domain’s perspective (what the system should achieve).",
   "Technical: An architectural pattern is a decision on technical realisation and follows quality requirements.",
   "Domain: The domain context describes relations to the domain, not the technology of the connection.",
   "Technical: Deployment and operation belong to the technical realisation."
  ],
  "explanation": "Domain architecture: what the system provides from the domain’s perspective (domain context, domain model, domain data models). Technical architecture: how it is realised (patterns, database, deployment). Trap: domain vs. physical data model."
 },
 "n25": {
  "q": "Statements about iterations and feedback in architecture design – true or false?",
  "categories": [
   "True",
   "False"
  ],
  "rows": [
   "An iteration is only complete when the design is complete and free of errors.",
   "Iterations reduce risk because assumptions are checked early.",
   "Prototypes and reviews are systematic ways to check assumptions early and obtain feedback.",
   "Feedback is valuable from several sides, e.g. stakeholders, development team and operations.",
   "If you design iteratively, you can postpone clarifying the most important quality requirements to later iterations."
  ],
  "rowExpl": [
   "That is false. An iteration deliberately delivers an interim result that is reviewed and refined in the next round; completeness is not its yardstick.",
   "That is true. Facts gained early replace guesses before expensive decisions are cast in stone.",
   "That is true. Both make assumptions checkable before they affect the whole system.",
   "That is true. Each group sees different problems of the architecture; feedback from only one side leaves risks undiscovered.",
   "That is false. An iterative approach does not replace requirements clarification; the most important quality requirements drive the first design decisions and should be known early."
  ],
  "explanation": "Iterations and feedback deliver facts early and reduce risk. They neither replace early clarification of the key requirements nor require a complete design per round."
 },
 "n26": {
  "q": "Statements about the quality of architecture documentation – true or false?",
  "categories": [
   "True",
   "False"
  ],
  "rows": [
   "Whether the documentation is understandable is judged by the target group.",
   "A correct documentation describes every building block down to the lowest level.",
   "Form, content and level of detail follow the target group.",
   "Appropriate means: as much as necessary, as little as possible.",
   "The author is best placed to judge comprehensibility."
  ],
  "rowExpl": [
   "Understandability depends on who reads. The target group therefore judges whether the documentation is understandable, so the statement is true.",
   "Correctness means the documentation matches the system, not that it covers every level. The statement is false.",
   "Form, content and level of detail follow the target group because different readers need different things. The statement is therefore true.",
   "Appropriate means documenting only as much as necessary. This fits the quality criterion of appropriateness, so the statement is true.",
   "The author knows the system too well to judge comprehensibility for others. The target group is best placed to do that, so the statement is false."
  ],
  "explanation": "Good documentation is understandable (judged by the target group), correct, efficient, appropriate and maintainable. Correctness means agreement with the system, not depth of detail; form, content and level of detail follow the target group."
 }
};
