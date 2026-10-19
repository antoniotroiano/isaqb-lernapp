/* Englische Übersetzungen des Fragenkatalogs. QUESTIONS_EN[id]. Fallback DE via mergeEN. */
const QUESTIONS_EN = {
 "c1q1": {
  "q": "Which statements about the term software architecture are correct in the sense of CPSA-F?",
  "options": [
   "It is the set of all structures that can be derived completely and unambiguously from the existing source code.",
   "It comprises all design decisions of a system, regardless of how easily they can be changed later.",
   "It comprises the structure(s) of a system consisting of building blocks together with their relationships and externally visible properties.",
   "It includes the fundamental design decisions whose later change would typically be expensive.",
   "It only comes into being through its documentation; a system without documented architecture does not have one yet."
  ],
  "correct": [
   2,
   3
  ],
  "optExpl": [
   "Wrong: The code only shows the result of many decisions, not their rationale, rejected alternatives or assumptions. Runtime and deployment aspects are often not visible in the source code at all, so architecture can never be fully reconstructed from it.",
   "Wrong: Architecture does not comprise every minor decision, only the key, far-reaching ones. Easily changeable details such as variable names or local algorithms belong to detailed design or implementation.",
   "Correct: Building blocks, their relationships and their externally visible properties form the core of the common architecture definition (e.g. according to ISO/IEC/IEEE 42010). Architecture thus describes the structure on which all further decisions build.",
   "Correct: Architecture consists precisely of the fundamental decisions whose later change would cause a lot of effort, such as the choice of architectural style or distribution. Because they have such far-reaching consequences, they deserve particular care and justification.",
   "Wrong: Every system has an architecture, even if it was never written down. Documentation describes an existing architecture and makes it communicable, but it does not create it."
  ],
  "explanation": "Architecture = building blocks + relationships + properties + key (expensive-to-change) decisions. It cannot be fully derived from the code, does not include every minor decision and exists even without documentation."
 },
 "c1q2": {
  "q": "Which statements about a component (building block) are correct?",
  "options": [
   "It can itself be composed of several finer building blocks.",
   "Two components with an identical interface signature are always readily interchangeable, regardless of their guaranteed properties.",
   "On the target platform it always corresponds to exactly one deployable artifact (e.g. a file or library).",
   "The term component always denotes a runtime unit, in contrast to the purely design-level term building block.",
   "It encapsulates its realization and is used via its interface(s) (black box principle)."
  ],
  "correct": [
   0,
   4
  ],
  "optExpl": [
   "Correct: Building blocks are hierarchical – in its white box view a component can consist of finer building blocks. This stepwise refinement is the basis of the building block view with its levels.",
   "Wrong: The signature only defines names and types, not the semantics or guaranteed properties such as response time or error behavior. Components are only interchangeable if the entire contract matches.",
   "Wrong: This mixes up the building block view and the deployment view. A building block can be distributed across several artifacts, and one artifact can contain several building blocks.",
   "Wrong: Building block and component do not differ by runtime versus design time. A component is a kind of building block; both are primarily structural terms of the static decomposition.",
   "Correct: Encapsulation is the core characteristic of a component – it hides its realization and is used only via its interfaces. This allows changing the inside without having to adapt its users."
  ],
  "explanation": "A component encapsulates its realization behind interfaces and can itself consist of finer building blocks. It is not per se a single deployment artifact, not a pure runtime unit, and interchangeability requires the same contract (not just the same signature)."
 },
 "c1q3": {
  "q": "In an architecture documentation, a subsystem is described in one place as a black box and in another as a white box. What is most likely correct?",
  "options": [
   "The black box names interfaces, responsibility and guaranteed properties; the white box additionally shows the contained building blocks and their interplay.",
   "The white box replaces the black box: once the internal structure is described, the separate outside view is redundant.",
   "Black box and white box differ in that the black box represents the runtime view and the white box the building block view.",
   "The black box describes the provided interfaces; the required interfaces, by contrast, belong only in the white box."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: The black box is the outside view with interfaces, responsibility and guaranteed properties. The white box opens the building block and additionally shows which internal building blocks it consists of and how they interact.",
   "Wrong: The black box has a value of its own – anyone who merely uses a building block needs exactly this outside view and no internals. White box and black box complement each other; one does not make the other redundant.",
   "Wrong: Black box and white box differ in how much of the internals is visible, not in their assignment to views. Both forms of representation occur within the building block view.",
   "Wrong: Required interfaces are also part of the outside view, because they show what the building block depends on. Anyone who wants to use it must know these dependencies – so they belong in the black box."
  ],
  "explanation": "Black box = outside view with provided and required interfaces, responsibility and guarantees; white box = additionally the contained building blocks. Both are useful and do not replace each other."
 },
 "c1q4": {
  "q": "Which statements about architecture views are correct?",
  "options": [
   "The deployment view maps building blocks or artifacts onto hardware and execution nodes.",
   "Views are created as independently of each other as possible; contradictions between them are unavoidable because of the different perspectives.",
   "The context view is a refinement of the deployment view and shows the communication channels between the nodes.",
   "The building block view shows the static decomposition of the system into building blocks and their relationships.",
   "The runtime view describes the dynamic interplay of the building blocks in concrete scenarios."
  ],
  "correct": [
   0,
   3,
   4
  ],
  "optExpl": [
   "Correct: The deployment view shows on which hardware and execution nodes the building blocks or artifacts run. It answers questions about infrastructure, operations and physical distribution.",
   "Wrong: Views do illuminate different aspects, but they describe the same system. Therefore they must be consistent and free of contradictions – contradictions indicate errors in the documentation or the design.",
   "Wrong: The context view shows the system as a black box with its external neighbors and outward interfaces. It is a separate scoping view, not a refinement of the deployment view.",
   "Correct: The building block view shows the static decomposition of the system into building blocks and their relationships, usually hierarchically across several levels. It is the central structural view of an architecture.",
   "Correct: The runtime view describes how building blocks cooperate dynamically in concrete scenarios, e.g. as a sequence diagram. This makes flows visible that the static structure alone does not show."
  ],
  "explanation": "Context, building block, runtime and deployment views illuminate different aspects of the same system. The context view delimits the system from the outside; all views must be consistent."
 },
 "c1q5": {
  "q": "Which tasks belong to the core of the role of software architects?",
  "options": [
   "Take over project planning, effort estimation and schedule responsibility for the implementation.",
   "Make, justify and document key design decisions.",
   "Accompany the implementation and check whether code and architecture match.",
   "Clarify and sharpen quality requirements together with stakeholders.",
   "Set the functional prioritization of the product backlog on their own responsibility."
  ],
  "correct": [
   1,
   2,
   3
  ],
  "optExpl": [
   "Wrong: Architects provide valuable input on effort and technical risks, but they do not carry planning and schedule responsibility. That lies with project management.",
   "Correct: Making, justifying and documenting key design decisions is the core of the architecture role. Only justified and recorded decisions remain traceable and verifiable later.",
   "Correct: Architecture does not end with the design – architects accompany the implementation and check whether code and architecture match. This prevents the actual structure from gradually drifting away from the planned one.",
   "Correct: Quality requirements are the most important architecture drivers, but they are often vague at first. Clarifying them with stakeholders and making them measurable is therefore a core task.",
   "Wrong: The functional prioritization of the backlog is the responsibility of the product owner or the business department. Architects advise on it, for instance regarding technical dependencies or risks, but do not decide on their own."
  ],
  "explanation": "Core of the role: clarify quality requirements, make and justify key decisions, accompany the implementation. Functional prioritization (PO) and schedule/planning responsibility (project management) belong to other roles."
 },
 "c1q6": {
  "q": "Which statements about internal and external software quality are correct?",
  "options": [
   "Maintainability is an external quality, because it indirectly affects the user via downtime.",
   "Internal quality can be measured completely via black box tests of the delivered system.",
   "Internal and external quality are independent of each other; one can optimize the one without influencing the other.",
   "External quality shows itself in the operation of the finished system (e.g. performance, reliability) and is perceptible to users.",
   "Low internal quality (e.g. poor maintainability) often also worsens the externally perceptible quality in the long term."
  ],
  "correct": [
   3,
   4
  ],
  "optExpl": [
   "Wrong: Maintainability concerns the internal structure of the system and is therefore an internal quality. The fact that it can indirectly affect users does not make it an external quality – that applies to almost every internal property.",
   "Wrong: Black box tests only check the externally observable behavior. Internal quality such as maintainability or understandability shows in the structure and requires e.g. code analyses or reviews.",
   "Wrong: Internal and external quality are connected. A poor internal structure leads over time to more defects and slower changes, which users then notice from the outside as well.",
   "Correct: External quality is the quality perceptible in operation, such as performance, reliability or usability. It can be observed and measured on the running system.",
   "Correct: Deficiencies in internal quality also have external effects in the long term, for example through more frequent defects or delayed features. That is why investing in internal quality pays off, even if users do not see it directly."
  ],
  "explanation": "External quality is perceptible from the outside, internal quality concerns the structure. Both are coupled: poor internal quality also worsens the external quality in the long term. Internal quality is not fully measurable via black box tests, and maintainability is internal."
 },
 "c1q7": {
  "q": "A team makes central architecture decisions early, although not all requirements are yet established. Which statement is most likely correct?",
  "options": [
   "Early decisions under uncertainty can be avoided by first creating a sufficiently detailed overall design.",
   "You should wait with all key decisions until the requirements are complete and final.",
   "Because knowledge and requirements are incomplete at the beginning, decisions are deliberately made under uncertainty and refined iteratively.",
   "This is unproblematic as long as the decisions are documented in an ADR, since they can then be revised traceably at any time."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: Even a very detailed upfront design (big design up front) is based on incomplete knowledge. It merely shifts the uncertainty into a plan that will very likely have to be corrected later.",
   "Wrong: Requirements are practically never complete and final. Waiting for that state delays the project and only postpones risks instead of addressing them early.",
   "Correct: Architecture work inevitably takes place under uncertainty, because knowledge and requirements are incomplete at the start. Decisions are therefore made deliberately, their assumptions recorded, and they are reviewed and refined iteratively.",
   "Wrong: An ADR makes a decision traceable, but not cheaper to reverse. Key decisions remain expensive to change – documentation does not replace a deliberate way of dealing with uncertainty."
  ],
  "explanation": "Architecture decisions are typically made under uncertainty and refined iteratively. Documentation (ADR) makes them traceable but not cheap to reverse; waiting or big design up front do not remove the uncertainty."
 },
 "c1q8": {
  "q": "Which statements about the relationship between architecture and requirements are correct?",
  "options": [
   "Above all, quality requirements (e.g. performance, security) drive key architecture decisions.",
   "Architecture decisions can in turn give rise to new requirements or constraints.",
   "Architecture and requirements influence each other and are sharpened iteratively.",
   "Quality requirements mainly affect the detailed design; the overall structure results from the functional requirements.",
   "Constraints such as prescribed technologies are not requirements and are therefore only considered after the architecture design."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Functional requirements can be met with many structures; only quality requirements such as performance or security really constrain the solutions. That is why they drive the key architecture decisions.",
   "Correct: Decisions often create follow-up requirements. Anyone who decides on cloud operation, for example, suddenly has to consider new operational, security and cost requirements.",
   "Correct: Requirements influence the architecture, and insights from the design feed back into the requirements, for example when a goal turns out to be too expensive. Both are therefore sharpened iteratively together.",
   "Wrong: It is the other way round – quality requirements in particular shape the overall structure, for example when availability enforces a distributed, redundant architecture. Functional requirements alone hardly determine the structure.",
   "Wrong: Constraints such as prescribed technologies restrict the solution space and must therefore be considered from the start. Considering them only after the design risks an architecture that cannot be implemented that way."
  ],
  "explanation": "Quality requirements drive key decisions and shape the overall structure. Architecture and requirements influence each other – decisions can create new requirements. Constraints belong in the design from the start."
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
   "Correct: The detailed interaction and interface design is the responsibility of UX/UI design, not of the architecture role. Architecture at most defines the user interface roughly as a cross-cutting concept, e.g. technology and structure, but does not design it in detail – so this activity belongs least to the core.",
   "Wrong: This activity is a core architecture task. Cross-cutting concepts such as persistence, security or error handling affect many building blocks at once and ensure consistency across the whole system.",
   "Wrong: This activity is a core architecture task. Documenting and communicating decisions together with their rationale creates a shared understanding and makes them traceable later.",
   "Wrong: This activity is a core architecture task. Accompanying the implementation, checking compliance and advising the team prevents code and architecture from drifting apart."
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
   "Loose coupling and high cohesion are complementary goals to be pursued at the same time.",
   "Good architecture decisions can be recognized by the fact that they need no further refinement later.",
   "Components are runtime units, whereas building blocks are design units.",
   "An interface describes a building block’s contract, not its internal realization.",
   "High cohesion is achieved by bundling as many tasks as possible in one building block."
  ],
  "explanation": "True: loose coupling + high cohesion complement each other; the interface is the contract, not the realization. False: cohesion means functional relatedness, not as many tasks as possible; building block/component is not a runtime/design distinction; good decisions are also refined iteratively."
 },
 "c1q10": {
  "q": "Which two statements describe core goals of software architecture?",
  "options": [
   "Keep complexity manageable and support achieving the required quality goals under the constraints.",
   "Ensure uniform implementation in the code through detailed programming guidelines.",
   "Take as many conceivable future requirements into account in advance as possible, so that the architecture remains stable in the long run.",
   "It creates a shared understanding of the system among the stakeholders.",
   "Above all, determine which technologies and frameworks are used in the project."
  ],
  "correct": [
   0,
   3
  ],
  "optExpl": [
   "Correct: Architecture is meant to keep a system's complexity manageable through structuring and to enable achieving the quality goals under the given constraints. These are central goals of the discipline.",
   "Wrong: Programming guidelines can support the implementation, but they are a measure, not a goal of architecture. They also concern the implementation level rather than the key structure.",
   "Wrong: Anticipating as many conceivable future requirements as possible leads to over-engineering (YAGNI) and unnecessary complexity. The goal is adequate changeability for likely changes, not anticipating every eventuality.",
   "Correct: Architecture creates a shared understanding of the system among the stakeholders and serves as a basis for communication. Without this understanding, decisions and implementation would easily drift apart.",
   "Wrong: Technology and framework decisions are means of achieving the architecture goals, not the goal itself. An architecture is much more than a list of technologies."
  ],
  "explanation": "Core goals: manage complexity, enable quality goals under constraints, create shared understanding. Technology choice and guidelines are means; speculative anticipation is over-engineering."
 },
 "c1q11": {
  "q": "Which statements about stakeholders of an architecture are correct?",
  "options": [
   "Stakeholders are all persons and groups with a legitimate interest in the system or its development.",
   "Stakeholders are the persons with decision-making authority over the project, such as client and management.",
   "The set of stakeholders is usually stable after the requirements phase; hardly any new ones join afterwards.",
   "Operations, maintenance, clients and possibly authorities belong to them too, not only end users.",
   "The architect resolves conflicting stakeholder interests herself by deciding according to technical feasibility."
  ],
  "correct": [
   0,
   3
  ],
  "optExpl": [
   "Correct: Stakeholders are all persons and groups with a legitimate interest in the system or its development. This broad definition ensures that no relevant requirements and constraints are overlooked.",
   "Wrong: This definition is too narrow. Operations, development, users or authorities are stakeholders too, even though they have no decision-making authority over the project.",
   "Wrong: The set of stakeholders changes during the project, for example through a new operator or new regulation. The stakeholder list is therefore maintained continuously and not frozen after the requirements phase.",
   "Correct: Besides end users, operations, maintenance, clients and possibly authorities also have legitimate interests in the system. These groups in particular often contribute important quality requirements and constraints.",
   "Wrong: Architecture makes conflicting stakeholder goals transparent and resolves them together with those affected. Deciding solely by technical feasibility would ignore legitimate business or economic interests."
  ],
  "explanation": "Stakeholders = everyone with a legitimate interest, not only decision-makers or end users. Conflicts are made transparent and clarified jointly; the stakeholder list is maintained throughout the project."
 },
 "c1q12": {
  "q": "Which properties characterize a well-cut building block?",
  "options": [
   "It is cut as fine-grained as possible, since small building blocks automatically have high cohesion.",
   "Loose coupling – dependencies run via few, clearly defined interfaces.",
   "It provides its internal data via public getters and setters for all fields so that neighboring building blocks can access it flexibly.",
   "High cohesion – related tasks are bundled.",
   "It comprises all tasks handled by a particular team, regardless of their functional relatedness."
  ],
  "correct": [
   1,
   3
  ],
  "optExpl": [
   "Wrong: Small size does not create cohesion. Cuts that are too fine tear functionally related things apart, so the many small building blocks have to communicate heavily with each other – coupling increases.",
   "Correct: Loose coupling means that dependencies run via few, clearly defined interfaces. Changes to one building block then hardly affect others.",
   "Wrong: Public getters and setters for all fields expose the internals and break encapsulation. Neighboring building blocks then depend on the internal data structure, which increases coupling.",
   "Correct: High cohesion means that functionally related tasks are bundled in one building block. Such a building block has a clear responsibility, and changes usually stay local.",
   "Wrong: What matters for a good cut is functional relatedness, not team assignment. A pure team-based cut can bundle unrelated tasks and thus lower cohesion."
  ],
  "explanation": "Well-cut building blocks have high cohesion and loose coupling via clear interfaces. Exposed internals, arbitrarily fine cuts or a cut only by teams without functional relatedness worsen both."
 },
 "c1q13": {
  "q": "Which statements about the interface of a building block are correct?",
  "options": [
   "A building block can offer several interfaces, for instance depending on the user group (role interfaces).",
   "It defines the externally visible contract: offered and/or required operations together with guarantees.",
   "If the internal implementation changes, the interface must inevitably change as well.",
   "A complete interface description also includes the concrete internal data structure with which the building block works.",
   "An interface comprises only the signatures; functional pre- and postconditions (contract) are not a component of it."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Correct: A building block can offer several interfaces, for example separated by user groups or roles. This way each user sees only the part it really needs (cf. interface segregation).",
   "Correct: The interface is the externally visible contract of a building block. It defines offered and/or required operations together with guarantees that users can rely on.",
   "Wrong: That is exactly what an interface is meant to prevent – it stays stable while the implementation behind it may change. This is the core of encapsulation and information hiding.",
   "Wrong: The internal data structure is an internal of the building block and not part of the contract. If it were part of the interface, users would be coupled to the implementation.",
   "Wrong: Signatures alone are not enough, because they say nothing about the meaning of the operations. The contract also includes semantics as well as pre- and postconditions."
  ],
  "explanation": "The interface is the contract (offered/required operations together with guarantees); a building block can offer several of them. It does not prescribe internals, remains stable under internal changes, and comprises more than pure signatures."
 },
 "c1q14": {
  "q": "Which statements about the responsibility of a building block are correct?",
  "options": [
   "It results completely from the sum of the publicly offered interface operations.",
   "It determines with which technology or library the building block is realized (the HOW).",
   "It describes the clearly outlined task for which the building block is responsible (the WHAT).",
   "Overlapping responsibilities of two building blocks increase the fault tolerance.",
   "Ideally it is cohesive and clearly delimited from other building blocks."
  ],
  "correct": [
   2,
   4
  ],
  "optExpl": [
   "Wrong: The interface operations describe HOW the building block is used, not what it is responsible for. The responsibility is the overarching task from which the operations are derived in the first place.",
   "Wrong: The choice of technology or library is the HOW of the realization and thus an implementation decision. The responsibility, by contrast, describes the WHAT, i.e. the task of the building block.",
   "Correct: The responsibility describes the clearly outlined task for which the building block is responsible – the WHAT. A precisely formulated responsibility makes it easier to assign functionality unambiguously.",
   "Wrong: Overlapping responsibilities lead to duplicated logic and unclear ownership, which makes maintenance and consistency harder. Fault tolerance is achieved through deliberate redundancy in deployment, not through functional overlap.",
   "Correct: A good responsibility is cohesive, i.e. it bundles what belongs together, and is clearly delimited from other building blocks. This keeps changes local and ownership unambiguous."
  ],
  "explanation": "Responsibility = the clearly outlined, cohesive task (the WHAT). It is not the sum of the interface operations, not the technical realization (HOW), and overlaps are harmful, not useful."
 },
 "c1q15": {
  "q": "In a project the code deviates over time from the documented architecture. Which statements are correct?",
  "options": [
   "Intended qualities (e.g. maintainability) only emerge if the code follows the structure.",
   "As long as all automated tests are green, the deviation is uncritical, since the functionality is preserved.",
   "Reviews or tool-supported dependency checks can uncover such deviations.",
   "You always adapt the documentation to the code, since the code represents the actual architecture.",
   "Architecture erosion threatens – target and actual drift apart."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Correct: Qualities such as maintainability are built into the planned structure, but only take effect if the code actually follows it. If the code bypasses the layering, for example, the expected benefits are lost.",
   "Wrong: Green tests secure functionality but say little about qualities such as maintainability or changeability. It is precisely these that suffer from erosion, even if the system still works correctly from a functional point of view.",
   "Correct: Code reviews and tool-supported dependency analyses make deviations between target and actual structure visible. Automated checks, e.g. in the build pipeline, detect forbidden dependencies early.",
   "Wrong: Always adapting the documentation to the code would retroactively legitimize every erosion. You decide per deviation: unintended deviations are reverted, deliberate changes are reflected in the documentation.",
   "Correct: When target and actual architecture gradually drift apart, this is called architecture erosion. It often goes unnoticed for a long time and makes the system progressively harder to change."
  ],
  "explanation": "If the code deviates from the architecture, erosion threatens and the planned qualities are lost – even with green tests. Deviations are uncovered with reviews/dependency checks; per case you decide whether to bring the code back or deliberately update the documentation."
 },
 "c1q16": {
  "q": "How does software architecture relate to the various abstraction levels of a system?",
  "options": [
   "The levels are strictly separated: decisions on one level have no effect on lower levels.",
   "Only the top system level is architecturally relevant; any finer decomposition belongs exclusively to detailed design.",
   "On every level a building block can again be viewed as a black box or white box.",
   "It describes structures on several nested levels (system, subsystems, building blocks); principles such as cohesion and coupling apply recursively.",
   "The abstraction levels correspond to the architecture views: context, building blocks, runtime and deployment."
  ],
  "correct": [
   2,
   3
  ],
  "optExpl": [
   "Wrong: The levels are connected – decisions on higher levels set specifications and constraints for lower levels. Anyone who chooses an architectural style, for example, thereby also determines how building blocks below are cut.",
   "Wrong: Lower decomposition levels can also contain key decisions that are expensive to change, such as central interfaces of a subsystem. Whether something is architecture depends on its impact, not only on the level.",
   "Correct: The black box/white box principle applies on every level. A building block opened as a white box on one level contains building blocks that can themselves be viewed as black boxes and refined later.",
   "Correct: Architecture describes structures across several nested levels, from the system through subsystems down to building blocks. Principles such as high cohesion and loose coupling apply recursively on every level.",
   "Wrong: This confuses abstraction levels with views. Views show different aspects of the system, whereas abstraction levels describe the depth of refinement, such as the levels within the building block view."
  ],
  "explanation": "Architecture describes nested levels; principles apply recursively, and every building block can be viewed as a black or white box. Levels are not the same as views and are not strictly separated."
 },
 "c1q17": {
  "q": "Which statements about the benefit of software architecture are correct?",
  "options": [
   "It reduces the effort of every future change, regardless of whether it was anticipated when structuring the system.",
   "It makes complexity manageable and supports division of labor in the team.",
   "It creates a common basis for communication between the stakeholders.",
   "It supports the targeted achievement of quality goals by making key decisions explicit.",
   "Its benefit shows mainly up to the first delivery; in the maintenance phase it fades into the background."
  ],
  "correct": [
   1,
   2,
   3
  ],
  "optExpl": [
   "Wrong: An architecture mainly facilitates the changes it was deliberately designed for. Unanticipated changes can still hit key structures and become correspondingly expensive.",
   "Correct: A clear structure divides the system into manageable parts and thus makes complexity manageable. At the same time it allows different teams to work in parallel on different building blocks.",
   "Correct: Architecture provides a common language and a shared picture of the system. This facilitates communication between business, development, operations and other stakeholders.",
   "Correct: By making and justifying key decisions deliberately, architecture addresses quality goals in a targeted way instead of leaving them to chance. It also makes traceable which decision supports which goal.",
   "Wrong: The benefit of an architecture shows precisely over the lifetime of the system, i.e. during maintenance, extension and operation. This phase is usually much longer than development up to the first delivery."
  ],
  "explanation": "Architecture makes complexity manageable, creates a basis for communication and makes quality goals achievable. Its benefit grows over the lifetime; but it does not make every unanticipated change cheap."
 },
 "c1q18": {
  "q": "What characterizes an iterative (evolutionary) approach to architecture work?",
  "options": [
   "The architecture is fully defined at the beginning (Big Design Up Front) and thereafter no longer touched.",
   "The architecture arises purely emergently from the code, without conscious overarching decisions.",
   "Key decisions are made early, but reviewed and refined across iterations based on new insights.",
   "An iterative approach means deferring key decisions as long as possible, until maximum certainty exists."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: This describes big design up front, i.e. precisely the opposite of an iterative approach. An architecture that is fixed once and never adapted cannot absorb new insights.",
   "Wrong: Purely emergent architecture without conscious overarching decisions leads to an unplanned, often inconsistent structure. Iterative does not mean planless – key decisions are still made deliberately.",
   "Correct: In an iterative approach, key decisions are made early so that the team has a foundation. They are then reviewed in each iteration based on new insights and refined if necessary.",
   "Wrong: Maximum certainty is never reached, and without key decisions the team lacks a foundation for implementation. Iterative means deciding early and then reviewing, not deferring decisions indefinitely."
  ],
  "explanation": "Iterative means: key decisions early, then review and refinement. Neither complete up-front design (BDUF) nor purely emergent growth nor deferring all decisions corresponds to it."
 },
 "c1q19": {
  "q": "How do architecture and detailed design differ?",
  "options": [
   "Detailed design is qualitatively less demanding and irrelevant to the system's goal achievement.",
   "Architecture makes the overarching, far-reaching structural decisions; the detailed design concretizes within these specifications.",
   "The difference lies solely in the point in time: architecture arises in an early phase, the detailed design necessarily only afterward.",
   "The boundary is defined formally and project-independently: below a certain building block size the detailed design necessarily begins."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: Detailed design is also demanding and contributes significantly to whether the system achieves its goals. A good architecture is of little use if the building blocks within it are poorly designed.",
   "Correct: Architecture makes the overarching, far-reaching structural decisions that are expensive to change. Detailed design concretizes within these specifications, for example the internal design of individual building blocks.",
   "Wrong: Architecture and detailed design are not separated purely in time but are interlinked. Insights from detailed design can influence architecture decisions, and architecture work continues throughout the project.",
   "Wrong: The boundary between architecture and detailed design is fluid and depends on the context. What matters is the impact of a decision, not a formal building block size."
  ],
  "explanation": "Architecture makes large, consequential structural decisions; the detailed design concretizes within them. The boundary is fluid/context-dependent, not purely separated in time, and the detailed design is by no means irrelevant."
 },
 "c1q20": {
  "q": "What role do communication skills play for software architects?",
  "options": [
   "Communication matters above all when presenting the finished architecture; during design, the technical work is what primarily counts.",
   "Communication is directed mainly at the development team; functional stakeholders are reached via product management.",
   "They are central for mediating between stakeholders and justifying decisions in an audience-appropriate manner.",
   "Oral agreement is preferable to written rationale because it is faster and clears up misunderstandings directly.",
   "They matter throughout the whole design – not only when presenting the finished architecture."
  ],
  "correct": [
   2,
   4
  ],
  "optExpl": [
   "Wrong: Communication is crucial precisely during design, to clarify stakeholder concerns and obtain feedback early. Anyone who only presents the finished architecture discovers misunderstandings too late.",
   "Wrong: Architects communicate directly with all relevant stakeholders, including business, operations or management. If this were mediated only via product management, important quality requirements could easily get lost.",
   "Correct: Architects mediate between stakeholders with differing interests and justify decisions in an audience-appropriate way. Management needs different arguments than a development team.",
   "Wrong: Oral agreement is helpful but fleeting and not traceable later. Key decisions need a durable written rationale, for example in an ADR.",
   "Correct: Communication accompanies the entire design – from clarifying requirements through resolving conflicting goals to accompanying the implementation. It is not just a step at the end."
  ],
  "explanation": "Communication is central early and continuously, for mediating between all stakeholders and justifying decisions. It does not happen only at the presentation, does not replace written rationale, and is not limited to the team."
 },
 "c1q21": {
  "q": "What is the purpose of an early walking skeleton or proof of concept in architecture work?",
  "options": [
   "To estimate the total effort of the project in a binding and final manner.",
   "To deliver an already production-ready first version of the most important features to the users.",
   "To demonstrate the functional completeness of the system end-to-end.",
   "To review central technical risks and the feasibility of key decisions early."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: A walking skeleton can improve estimates because it reduces technical uncertainties. However, it does not provide a binding, final effort estimate for the entire project.",
   "Wrong: This rather describes a productive increment or MVP. A walking skeleton is deliberately not production-ready; it serves to learn quickly about technical risks.",
   "Wrong: A walking skeleton only implements a narrow path through the architecture, not the complete functionality. It is meant to show technical feasibility, not functional completeness.",
   "Correct: A walking skeleton or proof of concept checks early whether risky assumptions and key decisions work in practice. This reveals problems while a course correction is still cheap."
  ],
  "explanation": "A walking skeleton reviews risky assumptions and the feasibility of key decisions early. It is deliberately not production-ready (unlike an MVP/increment), not functionally complete, and provides no binding effort estimate."
 },
 "c1q22": {
  "q": "What characterizes a \"good\" software architecture?",
  "options": [
   "It is designed so that all relevant quality characteristics are met as well as possible at the same time.",
   "It meets the required quality goals under the given constraints.",
   "It is already prepared for as many foreseeable future requirements as possible.",
   "It is as simple and understandable as possible – but not simpler than the task allows.",
   "It follows an established architecture pattern, since proven patterns ensure the quality of an architecture."
  ],
  "correct": [
   1,
   3
  ],
  "optExpl": [
   "Wrong: Quality characteristics often compete with each other, such as security and usability or performance and changeability. A good architecture deliberately weighs these trade-offs instead of maximizing all of them at the same time.",
   "Correct: Whether an architecture is good is measured against its goals and constraints. It is good if it meets the required quality goals within the given framework of budget, technology and organization.",
   "Wrong: Preparing for many possible future requirements easily leads to over-engineering (YAGNI). This increases complexity and cost without it being clear whether the requirements will ever materialize.",
   "Correct: Simplicity and understandability are important quality characteristics because they make maintenance and communication easier. However, the architecture should not be simplified so much that it no longer solves the task adequately.",
   "Wrong: Patterns are proven solution ideas, but they only help if they fit the problem and context. A pattern used inappropriately even worsens the architecture instead of ensuring its quality."
  ],
  "explanation": "A good architecture meets the quality goals under the constraints and is as simple as possible. Patterns do not guarantee quality, stockpiling is over-engineering, and quality characteristics must be traded off against each other."
 },
 "c1q23": {
  "q": "How does one best delimit the terms \"building block\" and \"component\"?",
  "options": [
   "A component is by definition larger than a building block and combines several building blocks.",
   "A building block is always a design-time unit, a component always a runtime unit.",
   "The terms are completely synonymous and merely different translations of the same concept.",
   "“Building block” is the umbrella term; a component is a special building block with contractually defined interfaces."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: The distinction is not a question of size. A building block can be arbitrarily large or small, and a component is a special kind of building block, not necessarily a larger unit.",
   "Wrong: Building block and component do not differ by design time versus runtime. Both are primarily terms of the static structure; runtime aspects are described by the runtime view.",
   "Wrong: The terms are not exactly synonymous. \"Building block\" is more general, while \"component\" denotes a more specific form with defined interfaces.",
   "Correct: \"Building block\" is the umbrella term for all structural elements of an architecture, such as modules, packages or classes. A component is a special building block that encapsulates its realization and is used via contractually defined interfaces."
  ],
  "explanation": "\"Building block\" is the general, conceptual umbrella term; a component is its more concrete manifestation with defined interfaces. It is neither a runtime/design-time nor a size question and not merely synonymous."
 },
 "c1q24": {
  "q": "Why does the CPSA-Foundation curriculum deliberately refrain from a single, binding definition of \"software architecture\"?",
  "options": [
   "Because definitions must turn out differently depending on the programming language.",
   "Because numerous established definitions exist and one uses their common core aspects (building blocks, relationships, decisions).",
   "Because the definition is left to the respective certification level.",
   "Because a binding definition would narrow the solution space and hinder innovation."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: The concept of architecture is independent of the programming language. Building blocks, relationships and key decisions exist in every system, regardless of the language it is implemented in.",
   "Correct: Numerous recognized definitions exist, for example from ISO/IEC/IEEE 42010 or the literature. The curriculum uses their common core aspects such as building blocks, relationships and key decisions instead of prescribing a single definition.",
   "Wrong: The definition does not depend on the certification level. Foundation and Advanced Level build on the same basic understanding of architecture.",
   "Wrong: This sounds plausible but is not the reason. The curriculum refrains from a single definition because many established ones already exist whose common core is sufficient."
  ],
  "explanation": "There are many recognized definitions; the curriculum uses their common core aspects (building blocks, relationships, key decisions). Neither innovation protection, language dependence nor level binding is the reason."
 },
 "c1q25": {
  "q": "At which level does the CPSA-Foundation material primarily aim?",
  "options": [
   "At the architecture of individual classes and methods in the detailed design.",
   "At the selection and configuration of concrete cloud and network infrastructure.",
   "At the architecture of a single software system.",
   "At the enterprise-wide enterprise architecture, which integrates all systems and business processes."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: Classes and methods belong to detailed design and lie below the Foundation focus. They are only touched on, for example with design principles, but are not the target level.",
   "Wrong: The concrete selection and configuration of cloud and network infrastructure is a task for operations and infrastructure planning. Foundation covers distribution only at the level of the deployment view, not in detail.",
   "Correct: CPSA-Foundation aims at the architecture of a single software system. It considers building blocks, interfaces, views and key decisions for one system.",
   "Wrong: Enterprise architecture considers the entire system landscape including business processes and thus lies above the Foundation level. It is not a focus of the CPSA-F curriculum."
  ],
  "explanation": "Foundation deals with the architecture of a single system. Enterprise architecture, detailed design (classes/methods) and concrete infrastructure lie above or below this focus."
 },
 "c1q26": {
  "q": "Which statements about the concept of structure in software architecture are correct?",
  "options": [
   "A structure consists of the building blocks; their relationships are only described in the runtime view.",
   "Structures only arise through deliberate architecture design; without it a system has no structure in the architectural sense.",
   "Architecture includes both static structures and runtime behavior.",
   "A system typically has several structures, which are illuminated by different views.",
   "Every system has at least one structure – if need be an unplanned, grown one."
  ],
  "correct": [
   2,
   3,
   4
  ],
  "optExpl": [
   "Wrong: A structure always consists of building blocks AND their relationships, also in the static building block view. Without relationships it would only be a list of parts, not a structure.",
   "Wrong: Every system has a structure, whether it was deliberately designed or not. Without deliberate design it simply arises in an uncontrolled way and is then often hard to understand and change.",
   "Correct: Architecture includes both the static decomposition into building blocks and their behavior and interplay at runtime. Both are described in separate views, such as the building block view and the runtime view.",
   "Correct: A system typically has several structures, such as the code structure, the runtime structure and the deployment structure. Each view illuminates one of them; none alone shows the whole system.",
   "Correct: Even a system that has grown without deliberate design has a structure. It has simply arisen unplanned – often with high coupling and unclear responsibilities."
  ],
  "explanation": "Every system has structures – planned or grown – static and dynamic, illuminated via several views. Relationships between building blocks always belong to the structure."
 },
 "c1q27": {
  "q": "What role do data and data models play for software architecture?",
  "options": [
   "The data model is sensibly defined only after the architecture is completely established.",
   "The data model is arbitrarily interchangeable, because modern ORMs decouple it completely from the architecture.",
   "The data model is a key architecture decision – usually long-lived and expensive to change afterward.",
   "The data model is a pure implementation detail of the persistence layer without influence on the building block cut."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: Data model and architecture influence each other and do not arise strictly one after the other. The data model shapes the building block cut, for example, and must therefore be considered early.",
   "Wrong: ORMs encapsulate technical database access, but they do not decouple the functional data model from the architecture. Structures, relationships and data ownership remain key, no matter which tool handles access.",
   "Correct: The data model is a key decision that usually lives much longer than the code above it. Later changes often require data migrations and adaptations in many building blocks and are correspondingly expensive.",
   "Wrong: The data model is not a mere detail of the persistence layer. It strongly shapes the building block cut, for example through the question of which building block owns which data and may change it."
  ],
  "explanation": "The data model is a key, long-lived decision (comparable to the \"statics\" of a building). It is not a mere persistence detail, not a downstream decision, and is not really decoupled from the architecture by ORMs."
 },
 "c1q28": {
  "q": "On which abstraction levels are data models typically described?",
  "options": [
   "Only logical and physical; a conceptual level does not exist for the data model.",
   "Conceptual (functional), logical (technology-neutral structured) and physical (concrete realization).",
   "On the context, building block and deployment level – analogous to the architecture views.",
   "Conceptual, logical and normalized – where \"physical\" is only another word for \"logical\"."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: The conceptual level does exist and is in fact the starting point. It describes the business terms and relationships before any decision on technical structures is made.",
   "Correct: Data models are described conceptually (business terms and relationships), logically (technology-neutral structure, e.g. entities and attributes) and physically (concrete realization in a database). Each level concretizes the previous one.",
   "Wrong: Context, building block and deployment view are architecture views on the whole system. They are not abstraction levels of a data model.",
   "Wrong: Normalization is a technique on the logical level to avoid redundancy. \"Physical\" is not a synonym for \"logical\" but describes the concrete technical realization, such as tables, indexes and storage formats."
  ],
  "explanation": "Data models are described conceptually (functional), logically (technology-neutral) and physically (concrete realization). Normalization is a logical technique, the conceptual level exists, and architecture views are something different."
 },
 "c1q29": {
  "q": "Which statements about the connection between data model and architecture are correct?",
  "options": [
   "A data model used directly by many building blocks can greatly increase coupling.",
   "With microservices it is enough for each service to have its own schema in the same database, even if all services read all schemas.",
   "Data ownership (who owns which data and may change it) influences the functional cut of the building blocks.",
   "Different building blocks can have their own task-specific models for the same business object (e.g. customer).",
   "A common central data model reduces coupling, since all building blocks use the same data types and no translation is needed."
  ],
  "correct": [
   0,
   2,
   3
  ],
  "optExpl": [
   "Correct: If many building blocks use the same data model directly, every change to it affects all users. The data model thus becomes a hidden, very strong coupling.",
   "Wrong: Separate schemas only help if they are respected. If services directly read other services' schemas, they bypass the interfaces and are tightly coupled via the data structure.",
   "Correct: The question of who owns which data and may change it significantly shapes the building block boundaries. A building block with clear data ownership can encapsulate its data and expose it only via interfaces.",
   "Correct: Different building blocks may model the same business object differently, tailored to their task – for instance in the sense of bounded contexts. This keeps the models lean and reduces coupling.",
   "Wrong: A common central model does save translations, but it couples every building block to every model change. Coupling therefore increases instead of decreasing."
  ],
  "explanation": "Data ownership shapes the building block cut; directly shared data models or schema access increase coupling, even if they seem convenient. Separate task-specific models per building block are legitimate and decouple."
 },
 "c2q1": {
  "q": "In a project, the following statements are made about distinguishing functional requirements, quality requirements, and constraints. Which of them are correct?",
  "options": [
   "A constraint restricts the solution space, but is itself neither a function nor a quality of the system.",
   "Functional requirements describe WHAT the system does; quality requirements HOW WELL it does it.",
   "A requirement with a concrete numeric value (e.g. “under 2 s”) is a constraint because it is not negotiable.",
   "A constraint is a particularly binding functional requirement and is therefore prioritized higher.",
   "Quality requirements and constraints can relate to the same property: “respond quickly” is a quality requirement, “run on existing 5-year-old hardware” is a constraint."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Correct: A constraint is a given that limits the possible solutions – a prescribed platform or a fixed budget, for example. It describes neither what the system does nor how well it does it, only the frame within which decisions may be made.",
   "Correct: This is the basic distinction: functional requirements name the system's capabilities (e.g. \"cancel an order\"), quality requirements their degree of goodness (e.g. \"in under 2 s\"). Together they describe what is to be built.",
   "Wrong: A numeric value makes a requirement measurable and therefore verifiable, but it does not change its kind. \"Under 2 s\" describes how well the system responds and remains a quality requirement – being binding alone does not make something a constraint.",
   "Wrong: This mixes up two categories. Constraints are not functions but restrictions of the solution space; they are not \"prioritized higher\", they simply have to be complied with.",
   "Correct: The same property – performance here – can appear as a goal and as a restriction. \"Respond quickly\" is a quality goal, whereas the obligation to use existing old hardware limits the possible solutions and is therefore a constraint."
  ],
  "explanation": "Functional = WHAT, quality = HOW WELL, constraint = restriction of the solution space. A concrete numeric value makes a quality requirement measurable, not a constraint."
 },
 "c2q2": {
  "q": "A team initially regards quality requirements as “secondary” and wants to address them only after the functional implementation. Which statements are correct?",
  "options": [
   "The approach is acceptable if the quality requirements are added in a later release through targeted optimization of individual building blocks.",
   "Quality requirements are key architecture drivers; if they are considered late, structural changes are often expensive or hardly possible.",
   "With an agile approach this is uncritical, since quality requirements only emerge through user feedback anyway.",
   "Quality requirements that are not stated explicitly must still be met later – e.g. self-evident expectations regarding security.",
   "Whether a quality requirement can be met depends largely on whether the architecture enables it – not only on whether testing happens at the end."
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Wrong: Many qualities such as scalability or availability depend on the basic structure – on distribution, decomposition and communication of the building blocks. This cannot be retrofitted by locally optimizing individual building blocks and often requires expensive restructuring.",
   "Correct: Quality requirements are the strongest architecture drivers because they determine the fundamental structural decisions. If they are discovered late, the structure already exists and has to be reworked at great effort.",
   "Wrong: In agile development, too, the essential quality requirements must be clarified early because they shape the architecture. User feedback sharpens and complements them, but does not replace early clarification.",
   "Correct: Implicit quality expectations apply even if nobody writes them down – no client accepts an insecure system just because security was not requested. That is why architects should make them explicit early.",
   "Correct: Testing only determines whether a quality has been achieved; the architecture has to enable it. A system whose structure does not allow load distribution will not become scalable through any number of load tests."
  ],
  "explanation": "Quality requirements are the strongest architecture drivers and must be clarified early – also in agile settings. Many cannot be retrofitted later by local optimization, and implicit expectations apply even when unstated."
 },
 "c2q3": {
  "q": "Which of the following specifications are constraints?",
  "options": [
   "The search must answer 95 % of queries in under one second.",
   "Reports must be exportable as PDF.",
   "The project budget is capped at a fixed amount.",
   "For legal reasons, personal data must be stored in a data center within the EU.",
   "The relational database already licensed in the company must be used."
  ],
  "correct": [
   2,
   3,
   4
  ],
  "optExpl": [
   "Wrong: A required response time describes how well the system should respond – that is a quality requirement (performance). It does not restrict the means of the solution but sets a goal the solution has to achieve.",
   "Wrong: PDF export describes a capability of the system, i.e. WHAT it does. It is therefore a functional requirement, not a restriction of the solution space.",
   "Correct: A capped budget is an organizational constraint. It says nothing about functions or qualities, but limits which solutions can be financed at all.",
   "Correct: Legally mandated storage within the EU is a legal or regulatory constraint. It rules out certain cloud regions, for example, and thus bindingly narrows the solution space.",
   "Correct: A prescribed, already existing technology is a technical constraint. The architecture has to work with this database, even if another solution might fit better from a purely technical point of view."
  ],
  "explanation": "Regulatory storage-location specifications, prescribed technologies, and a fixed budget are constraints (legal, technical, organizational). A required response time is a quality requirement, and PDF export is a functional requirement."
 },
 "c2q4": {
  "q": "A stakeholder demands: „The system should be fast.“ How can this requirement be made verifiable?",
  "options": [
   "By stating a concrete metric with a target value (e.g. response time under 2 s at the 95th percentile).",
   "Through a quality scenario with stimulus, environment/context and a measurable response measure (e.g. “95% of searches under 1 s at full load”).",
   "By specifying that the system must be faster than the previous legacy system.",
   "By formulating the requirement as a constraint, e.g. “an in-memory database is to be used”.",
   "By setting a blanket response measure of “under 1 second” without naming stimulus and operating state."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Correct: Only a metric with a target value turns the vague \"fast\" into something verifiable. The 95th percentile also states that not every outlier counts, but the typical behaviour of the vast majority of requests.",
   "Correct: A quality scenario combines stimulus, environment and a measurable response measure, making it clear when and under which conditions the value applies. This makes \"fast\" testable and allows the architecture to be evaluated against it.",
   "Wrong: \"Faster than the legacy system\" is a relative comparison without a concrete target value and without measurement conditions. A one-millisecond improvement would formally satisfy it – whether that is enough for the stakeholder stays open.",
   "Wrong: A technology requirement describes a solution, not the requirement. An in-memory database does not guarantee a particular response time; it only shifts the question instead of making it verifiable.",
   "Wrong: A number alone is not enough if it stays open what it applies to and under which conditions. Whether \"under 1 second\" refers to a simple query at idle or a report under full load makes a big difference."
  ],
  "explanation": "“Fast” becomes verifiable through measurable target values, ideally embedded in a quality scenario (stimulus, context, response measure). Technology requirements or relative comparisons without a target value make nothing testable."
 },
 "c2q5": {
  "q": "Which statements about the role of architects in clarifying requirements are correct?",
  "options": [
   "Architects actively question requirements, uncover gaps and contradictions and help sharpen them.",
   "They make implicit expectations and quality requirements explicit, which are often missing in the requirements document.",
   "They formulate missing requirements themselves and record them as binding if the business side does not deliver in time.",
   "Responsibility for the functional prioritization of requirements ultimately lies with the client or the business stakeholders.",
   "When clarifying, they limit themselves to quality requirements, since functional requirements hardly influence the architecture."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Correct: Requirements are rarely complete and free of contradictions. From a technical perspective, architects spot gaps and conflicts and help sharpen them together with the stakeholders.",
   "Correct: Quality requirements in particular often remain unspoken because stakeholders take them for granted. Architects make them explicit because they significantly shape the architecture.",
   "Wrong: Architects must not fill gaps on their own with binding requirements. Instead they make documented assumptions and have them confirmed by the business side, which is responsible for the requirements.",
   "Correct: Which business requirements matter more is decided by the client and the business stakeholders. Architects provide the basis for that decision, such as effort, risks and trade-offs.",
   "Wrong: Functional requirements also influence the architecture, for example the domain-driven decomposition into building blocks. Architects therefore help clarify both kinds of requirements, even though qualities are often the stronger drivers."
  ],
  "explanation": "Architects question and sharpen requirements and make implicit qualities explicit; prioritization and binding decisions stay with the business side. Gaps are bridged with documented assumptions, not self-set requirements."
 },
 "c2q6": {
  "q": "A team discusses which of the listed properties is a top-level characteristic of the product quality model of ISO/IEC 25010:2023. What is correct?",
  "options": [
   "Maintainability is a top-level characteristic.",
   "Performance Efficiency is a sub-aspect of reliability.",
   "Scalability is an independent top-level characteristic.",
   "Portability is still an independent top-level characteristic in the 2023 version."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Maintainability is one of the top-level characteristics of ISO/IEC 25010:2023 – alongside performance efficiency, compatibility, reliability, security, flexibility and safety, among others. Sub-characteristics such as modularity or testability belong to it.",
   "Wrong: Performance Efficiency is itself a top-level characteristic, not part of reliability. Reliability describes whether the system works correctly and is available, whereas performance efficiency covers time behaviour and resource utilization.",
   "Wrong: Scalability is very important in practice, but in ISO/IEC 25010:2023 it is not an independent top-level characteristic. It is a sub-characteristic of flexibility there – how important a quality is says nothing about its place in the model.",
   "Wrong: In the 2023 version, portability was merged into the broader top-level characteristic flexibility, which includes adaptability, scalability and installability, among others. It no longer exists as a top-level characteristic under its old name."
  ],
  "explanation": "Maintainability is a top-level characteristic of ISO/IEC 25010:2023. Performance Efficiency is also a top-level characteristic in its own right, not a sub-aspect of reliability. Scalability is only a sub-characteristic, and portability was absorbed into the new top-level characteristic flexibility in 2023."
 },
 "c2q7": {
  "q": "Which of the following statements describe functional requirements?",
  "options": [
   "A clerk can cancel an order.",
   "The system is available 99.9 % of the time around the clock.",
   "The user can export invoices as PDF.",
   "Search responses appear in under 200 ms.",
   "The system sends a confirmation email after every order."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Correct: Cancelling an order is a capability the system provides. It describes WHAT the system does and is therefore a functional requirement.",
   "Wrong: 99.9 % availability describes how reliably the system provides its functions, not which functions it provides. That is a quality requirement (reliability/availability).",
   "Correct: PDF export is a concrete function users can invoke. It describes WHAT the system does – a functional requirement.",
   "Wrong: The response time describes HOW WELL the search works, not that it exists. That is a quality requirement (performance); the search itself would be the related function.",
   "Correct: Sending a confirmation email is the system's reaction to a business event. It therefore describes a function and is a functional requirement."
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
   "Unauthorized access attempts are logged and the user is locked out after five failed attempts.",
   "A new language version of the interface can be added without a code change.",
   "After a server failure, the system resumes operation within 30 seconds.",
   "The user can filter their order history by date."
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
   "The solution must comply with the WCAG 2.1 AA accessibility guideline.",
   "Due to a corporate directive, only the provided cloud provider may be used.",
   "The system remains available even if one of three nodes fails.",
   "A new payment method can be integrated by one developer in under two person-days."
  ],
  "explanation": "The mandatory cloud specification (organizational/technical) and the prescribed compliance with a specific guideline (WCAG 2.1 AA as a regulatory/normative requirement) limit the solution space – constraints. Easy extensibility (maintainability) and fault tolerance (availability) describe HOW WELL – quality requirements. Note: “being accessible” as a goal would be a quality requirement; the obligation to comply with a specific standard is the constraint."
 },
 "c2q8": {
  "q": "Which of the following belong to the top-level characteristics of the product quality model of ISO/IEC 25010:2023?",
  "options": [
   "Security",
   "Testability",
   "Scalability",
   "Compatibility",
   "Reliability"
  ],
  "correct": [
   0,
   3,
   4
  ],
  "optExpl": [
   "Correct: Security is a top-level characteristic of ISO/IEC 25010:2023. Sub-characteristics such as confidentiality, integrity and authenticity belong to it.",
   "Wrong: Testability is an important quality, but in the model it is a sub-characteristic of maintainability. Treating it as a top-level characteristic confuses the levels of the quality model.",
   "Wrong: In the 2023 version, scalability is a sub-characteristic of flexibility, not a top-level characteristic of its own. Precisely because it is so prominent in architecture discussions, it is easily misclassified here.",
   "Correct: Compatibility is a top-level characteristic. It describes how well a system can exchange information with other systems and operate alongside them.",
   "Correct: Reliability is a top-level characteristic. Sub-characteristics such as availability, fault tolerance and recoverability belong to it."
  ],
  "explanation": "Top-level characteristics of ISO/IEC 25010:2023 include reliability, security, compatibility, maintainability, flexibility and safety. Trap: scalability and testability are important qualities but only sub-characteristics."
 },
 "c2q9": {
  "q": "Why should quality requirements be clarified as early as possible? Which justifications are correct?",
  "options": [
   "Because they shape the fundamental structural decisions, which can only be changed later with great effort.",
   "Because quality requirements clarified early no longer need to be adjusted in the further course of the project.",
   "Because the order of the features to be implemented can be derived directly from them.",
   "Because early clarification helps to weigh goal conflicts between quality characteristics in time.",
   "Because they often remain implicit and otherwise only become painfully visible late – e.g. in operation."
  ],
  "correct": [
   0,
   3,
   4
  ],
  "optExpl": [
   "Correct: Quality requirements determine fundamental decisions such as distribution, layering or data storage. These decisions can only be changed later with great effort, so their drivers must be known early.",
   "Wrong: Even quality requirements clarified early are refined iteratively during the project and may change. Clarifying early does not mean freezing them, but having a solid basis in time.",
   "Wrong: The order of features results from business prioritization by value, risk and effort. Quality requirements mainly influence the structure, not the implementation plan directly.",
   "Correct: Qualities such as security and usability or performance and maintainability are often in conflict. Recognized early, they can be weighed consciously instead of surprising the team later.",
   "Correct: Many quality expectations are not stated because they are taken for granted. If they are not made explicit early, they often only show up in operation – where correcting them is especially expensive."
  ],
  "explanation": "Clarify quality requirements early because they shape the basic structure, are often implicit and goal conflicts must be weighed early. They nevertheless remain changeable and do not determine the feature order."
 },
 "c2q10": {
  "q": "A stakeholder demands: “The system must also be operable by visually impaired users.” What is most likely correct?",
  "options": [
   "It is a quality requirement (an aspect of usability/accessibility) that can shape the architecture.",
   "It is a non-goal that limits the scope.",
   "It is a functional requirement, because a specific operating function (“read-aloud function”) is described.",
   "It is a constraint, since it represents an unchangeable external specification."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: The requirement describes HOW WELL the system can be operated by a particular user group – an aspect of usability or accessibility. As a quality requirement it can shape the architecture, for example the separation of presentation and logic.",
   "Wrong: A non-goal explicitly excludes something from the scope. This requirement excludes nothing; it adds demands on the system.",
   "Wrong: The requirement does not name a specific function but a quality. A read-aloud function would only be one possible solution for achieving operability – requirement and solution must not be confused.",
   "Wrong: A constraint only arises when, for example, a specific standard or WCAG level is mandatorily prescribed. The mere demand for operability describes a quality, not a restriction of the solution space."
  ],
  "explanation": "Operability for visually impaired users is an aspect of usability – a quality requirement. It does not name a specific function; only a mandatorily prescribed standard would yield a constraint. It is not a non-goal."
 },
 "c2q11": {
  "q": "Which statements about prioritizing requirements are correct?",
  "options": [
   "Requirements can contradict each other; prioritization forces conscious trade-offs.",
   "Architecturally risky requirements should be implemented as late as possible so that more knowledge is available by then.",
   "Because time and budget are limited, you must weigh what is implemented first and what possibly not at all.",
   "Besides implementation effort, business value and risk should also flow into prioritization.",
   "The architects set the prioritization of the quality requirements, since they know their technical impact best."
  ],
  "correct": [
   0,
   2,
   3
  ],
  "optExpl": [
   "Correct: Requirements can contradict each other, for example maximum security versus minimal usage barriers. Prioritization forces such conflicts to be decided consciously instead of leaving them open.",
   "Wrong: Architecturally risky requirements are tackled early rather than late, e.g. with a prototype or a vertical slice. This shows in time whether the architecture holds – risks discovered late are much more expensive.",
   "Correct: Time and budget are always limited, so not everything can be implemented immediately or at all. Prioritization decides what comes first and what may be dropped.",
   "Correct: Effort alone is a poor measure because it says nothing about benefit. Only together with business value and risk does a sensible order emerge.",
   "Wrong: Architects point out technical impacts and trade-offs, but the stakeholders set the priority. They decide which quality matters more to them in case of conflict."
  ],
  "explanation": "Prioritization weighs value, risk and effort and resolves contradictions consciously. Risky things are tackled early; stakeholders set the priority, architects provide the basis for the decision."
 },
 "c2q12": {
  "q": "What typically applies to the relationship between different quality requirements?",
  "options": [
   "They are often in conflict (trade-off) and must be consciously weighed against each other.",
   "A single requirement can moreover affect several qualities at once.",
   "They usually reinforce each other, so that improving one usually also improves others.",
   "Some qualities also support each other, e.g. maintainability and testability.",
   "Goal conflicts between qualities can usually be fully resolved by a suitable choice of technology."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Correct: Qualities often compete, for example performance versus maintainability or security versus usability. Such conflicts must be weighed consciously and recorded as a decision.",
   "Correct: A single requirement can touch several qualities at once. Encrypted data transfer, for example, concerns security but also affects performance.",
   "Wrong: Mutual reinforcement does occur, but it is not the rule. More often one quality is improved at the expense of another – which is why trade-off analysis is at the core of architecture work.",
   "Correct: There are also supporting relationships: a well-modularized, maintainable system is usually easier to test as well. Such synergies should be known and used deliberately.",
   "Wrong: Technologies usually only shift trade-offs instead of resolving them. A cache, for example, improves performance but brings issues of data freshness and complexity."
  ],
  "explanation": "Qualities are often in conflict but can also support each other; one requirement can affect several qualities. Mutual reinforcement is not the rule, and technology does not resolve trade-offs."
 },
 "c2q13": {
  "q": "Which statements about an assumption in the architecture context are correct?",
  "options": [
   "It should be documented explicitly and tracked as a risk in case it does not hold.",
   "Assumptions should be avoided in the architecture documentation, since they weaken the bindingness of decisions.",
   "It is a fact assumed as given, but not verified.",
   "It is a restriction set by the client that bindingly limits the solution space.",
   "If a documented assumption demonstrably holds, it can become a confirmed constraint or fact."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Correct: An assumption may turn out to be wrong, which calls the decisions built on it into question. That is why it is documented explicitly and tracked like a risk until it is confirmed or refuted.",
   "Wrong: Decisions almost always rest partly on assumptions – this cannot be avoided. Unstated assumptions are the bigger risk; documenting them is what makes decisions traceable and verifiable.",
   "Correct: An assumption is a fact taken for granted without being verified – e.g. \"the number of users will at most double within three years\". It is used because otherwise no decision could be made.",
   "Wrong: That describes a constraint, i.e. a binding given. An assumption is precisely not given and not verified, but a presumed basis.",
   "Correct: Once an assumption is confirmed, it loses its uncertain nature. It then becomes a verified fact or, if it restricts the solution space, a confirmed constraint."
  ],
  "explanation": "An assumption is a presumed, unverified fact – unlike a given constraint. It is documented explicitly and tracked as a risk; once confirmed, it becomes a fact."
 },
 "c2q14": {
  "q": "Which of the following are quality requirements (non-functional)?",
  "options": [
   "The application processes 1000 requests per second with a response time under 200 ms.",
   "A typical change can be made by new developers in under a day.",
   "Sensitive data is stored encrypted according to the state of the art.",
   "Users can cancel an invoice and receive a confirmation.",
   "The system must reuse the customer's existing Oracle database."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Throughput and response time describe HOW WELL the system processes requests. The measurable target values make it a verifiable quality requirement (performance).",
   "Correct: How quickly a typical change can be made describes maintainability or modifiability. Phrasing it with a target value even makes this quality measurable.",
   "Correct: Encrypted storage describes how well the system protects data – a quality requirement (security). It does not describe a new function for users but a property of data storage.",
   "Wrong: Cancelling an invoice and receiving a confirmation describes WHAT the system does. That is a functional requirement, not a quality requirement.",
   "Wrong: The obligation to reuse an existing database restricts the solution space. That is a technical constraint and does not describe a quality of the system."
  ],
  "explanation": "Quality requirements describe HOW WELL a system does something (performance, security, maintainability …). A functional requirement describes WHAT it does; a constraint is a limiting given – neither is a quality requirement."
 },
 "c2q15": {
  "q": "Which of the following are organizational constraints (as distinct from technical or regulatory ones)?",
  "options": [
   "The response time must be under 300 ms.",
   "Development follows the process model prescribed within the company.",
   "Communication between the services must run over HTTPS.",
   "Data storage must be done in a relational database.",
   "The project must be completed by year-end with the existing, fixed team."
  ],
  "correct": [
   1,
   4
  ],
  "optExpl": [
   "Wrong: A required response time describes how well the system responds and is a quality requirement. It is not a constraint at all, and therefore not an organizational one either.",
   "Correct: A process model prescribed within the company governs how the project works. That is an organizational constraint because it comes from the organization rather than from technology or law.",
   "Wrong: A protocol requirement such as HTTPS prescribes a technical means. That is a technical constraint, not an organizational one.",
   "Wrong: Prescribing a relational database concerns the technology used. It is therefore a technical constraint – classifying it as organizational confuses the categories.",
   "Correct: Deadline and fixed team composition are typical organizational constraints. They limit what can be implemented in which time with which skills."
  ],
  "explanation": "Deadline/team and a prescribed process model are organizational constraints. Database and protocol specifications are technical constraints; the response time is a quality requirement."
 },
 "c2q16": {
  "q": "What do quality requirements typically derive from?",
  "options": [
   "From the technologies and frameworks already chosen.",
   "From the chosen process model (e.g. Scrum or waterfall).",
   "From legal and regulatory requirements the system must meet.",
   "From the client's business goals.",
   "From the needs and concerns of the various stakeholders."
  ],
  "correct": [
   2,
   3,
   4
  ],
  "optExpl": [
   "Wrong: Technologies and frameworks are part of the solution and should follow from the requirements, not the other way round. Deriving quality requirements from the chosen technology reverses cause and effect.",
   "Wrong: The process model determines how the team works, not which qualities the system must have. Scrum or waterfall – the required availability stays the same.",
   "Correct: Laws and regulation often create concrete quality requirements, for example regarding data protection, traceability or security. The system must meet them regardless of the preferences of those involved.",
   "Correct: Business goals are a main source of quality requirements. If a company wants to launch new products quickly, for example, a high demand for modifiability follows.",
   "Correct: Different stakeholders have different concerns – users want usability, operations wants observability, development wants maintainability. Quality requirements are derived from these concerns."
  ],
  "explanation": "Quality requirements come from business goals, stakeholder concerns and regulation. They are not derived from chosen technologies (solution) or the process model."
 },
 "c2q17": {
  "q": "A requirements document contains the sentence: “PostgreSQL is to be used for data storage.” What is most likely correct?",
  "options": [
   "This is a functional requirement, because it defines the behavior of data storage.",
   "This is a quality requirement, because databases determine performance.",
   "Strictly speaking, this is a solution/technology specification and acts as a constraint – a pure requirement would describe only the WHAT/HOW WELL.",
   "Requirement and solution are the same thing here anyway, just at different levels of detail."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: The sentence does not describe any business behaviour, i.e. nothing the system does for its users. It prescribes a technology – which concerns the HOW of the solution, not the WHAT.",
   "Wrong: A database can influence performance, but choosing a product is not a quality goal in itself. A quality requirement would be, for example, a required response time, which is then achieved with PostgreSQL or otherwise.",
   "Correct: Committing to a specific product anticipates the design and restricts the solution space – it therefore acts as a technical constraint. A pure requirement would only describe WHAT the system should do and HOW WELL.",
   "Wrong: Requirement and solution differ fundamentally, not just in level of detail. The requirement describes the problem (WHAT/HOW WELL), the solution the way to solve it (HOW) – a requirement can usually be met in several ways."
  ],
  "explanation": "A specific technology specification does not describe WHAT/HOW WELL but fixes a solution and therefore acts as a constraint. It is neither a functional nor a quality requirement, and requirement and solution differ fundamentally."
 },
 "c2q18": {
  "q": "Which statements about recording non-goals (deliberately excluded points) are correct?",
  "options": [
   "Non-goals should only be recorded internally within the team so as not to unsettle stakeholders.",
   "They clarify the scope and prevent false expectations.",
   "They facilitate later decisions, because it is documented what is deliberately not pursued.",
   "A non-goal can change during the project and later become a goal after all.",
   "Non-goals are a form of constraint, since they bindingly restrict the solution space."
  ],
  "correct": [
   1,
   2,
   3
  ],
  "optExpl": [
   "Wrong: Non-goals are meant precisely to clarify expectations towards the stakeholders. If they stay hidden within the team, exactly the false expectations arise that one wanted to avoid – they belong in the shared documentation.",
   "Correct: An explicitly stated non-goal shows what the system will deliberately not do. This sharpens the scope and prevents stakeholders from silently expecting something else.",
   "Correct: If it is documented what is deliberately not pursued, this question does not have to be discussed again and again. Later decisions can then be made faster and traceably.",
   "Correct: Non-goals are also decisions for the time being. If business goals or circumstances change, a former non-goal may later become a goal after all – it then has to be re-evaluated deliberately.",
   "Wrong: Non-goals delimit the scope, i.e. WHAT is built. Constraints, in contrast, restrict the solution, i.e. HOW it may be built – these are different categories."
  ],
  "explanation": "Non-goals clarify the scope, prevent false expectations and facilitate decisions; they can change. They are not constraints and belong transparently with the stakeholders."
 },
 "c2q19": {
  "q": "A quality scenario is meant to make a quality requirement verifiable. Which components belong to such a scenario?",
  "options": [
   "The intended architecture tactic with which the response is achieved (e.g. “through caching”).",
   "A measurable response measure (e.g. “95% in under 1 s”).",
   "The environment/operating state in which the scenario applies (e.g. “under full load”).",
   "The building block responsible for implementing the response.",
   "A concrete stimulus (e.g. “1000 simultaneous requests arrive”)."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Wrong: A quality scenario describes the required behaviour (WHAT), not the solution (HOW). Tactics such as caching are design decisions that are evaluated against the scenario – if they were already part of it, no independent check would be possible.",
   "Correct: Only a measurable response measure makes the scenario verifiable. Without \"95% in under 1 s\" it would stay open when the required response is good enough.",
   "Correct: The environment defines under which conditions the scenario applies. The same request can mean very different demands on the architecture in normal operation and under full load.",
   "Wrong: Which building block implements the response is decided in design and does not belong to the requirement. The scenario looks at the system from the outside and leaves open how it is solved internally.",
   "Correct: The stimulus is the event the system has to respond to. Without it, it would be unclear which situation the scenario describes at all."
  ],
  "explanation": "A quality scenario consists of stimulus, context/environment, response and measurable response measure. Solution elements such as tactics or responsible building blocks do not belong in it."
 },
 "c2q20": {
  "q": "Two important stakeholders hold incompatible goals (maximum security vs. maximum ease of use). Which approaches are appropriate?",
  "options": [
   "Design the architecture to be configurable so that each goal can be achieved to the maximum, in order to avoid the conflict.",
   "Bring about a justified prioritization or a viable compromise and document it.",
   "Make the conflicting concerns transparent and consciously weigh them against each other.",
   "Escalate the decision to the responsible authority (e.g. client/product ownership) if no balance can be reached.",
   "Make the decision yourself as architect, since it is ultimately a technical question."
  ],
  "correct": [
   1,
   2,
   3
  ],
  "optExpl": [
   "Wrong: Configurability only shifts the goal conflict to the operation or configuration phase and increases complexity at the same time. A real conflict between security and ease of use remains and has to be weighed.",
   "Correct: The aim is a justified prioritization or a viable compromise that the parties involved support. Documenting it makes it traceable later why the decision was made this way.",
   "Correct: A conflict can only be resolved if it is out in the open. Architects make the conflicting concerns and their consequences visible so that they can be weighed consciously.",
   "Correct: If no balance between the stakeholders can be reached, the responsible authority must decide, e.g. the client or product ownership. Architects prepare this decision with options and their impacts.",
   "Wrong: A goal conflict between stakeholders is not a purely technical question but a matter of priorities and interests. Architects provide the basis for the decision; those responsible make the decision itself."
  ],
  "explanation": "Goal conflicts between stakeholders: make transparent, weigh, prioritize with justification or document a compromise, escalate if necessary. They can neither be designed away through configurability nor decided purely technically."
 },
 "c2q21": {
  "q": "A colleague claims several things about the 2023 revision of ISO/IEC 25010. Which statement is correct?",
  "options": [
   "„Usability“ was kept unchanged under that name.",
   "“Portability” was removed without replacement and has no successor in the model.",
   "“Safety” was added as an independent top-level characteristic.",
   "The number of top-level characteristics was reduced to three."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: In 2023, \"usability\" was renamed \"interaction capability\" and broadened in content. The top-level characteristic therefore no longer exists under its old name.",
   "Wrong: Portability was not removed without replacement, but merged into the broader top-level characteristic \"flexibility\". Its content lives on there, extended by scalability, among other things.",
   "Correct: With the 2023 revision, safety was added as an independent top-level characteristic. It describes that the system poses no danger to people, the environment or property – not to be confused with security.",
   "Wrong: The model was not reduced to three top-level characteristics; the 2023 version has nine. The revision renamed, merged and added characteristics, but did not shrink the model drastically."
  ],
  "explanation": "In 2023, Safety, among others, was added as an independent top-level characteristic; the model still has several (nine) top-level characteristics. Portability was not removed but transferred into “Flexibility,” and Reliability/Maintainability continue to exist."
 },
 "c2q22": {
  "q": "How does one sensibly proceed when identifying stakeholders?",
  "options": [
   "Derive the stakeholders from the client's organization chart, since all relevant roles are shown there.",
   "Ask already known stakeholders about further affected parties (snowball principle).",
   "Scan the environment layer by layer – from the system via the business system to the wider environment (onion model).",
   "Concentrate on the stakeholders with the greatest influence, since the others hardly shape the architecture.",
   "Also consider non-paying, indirectly affected and critically minded persons."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Wrong: An organization chart only shows the client's internal roles. External stakeholders such as authorities, partners, end customers or a service provider's operations team are missing there and would be overlooked.",
   "Correct: Stakeholders already known often know other affected parties one is not aware of. Asking them specifically (snowball principle) makes the list grow step by step and become more complete.",
   "Correct: The onion model scans the environment layer by layer – from the system via the surrounding business system to the wider environment. This is a systematic approach and fewer stakeholders are overlooked.",
   "Wrong: Stakeholders with little influence, such as operations or support, can also have important quality requirements. Ignoring them often means discovering their requirements late and at high cost.",
   "Correct: A stakeholder is any person or group affected by or influencing the system – not just whoever pays. Indirectly affected people and critics in particular contribute requirements and risks that would otherwise be missing."
  ],
  "explanation": "Stakeholders are found systematically (onion model), by asking around (snowball) and by including indirectly affected people and critics. Relying only on the influential or the organization chart misses important stakeholders."
 },
 "c2q23": {
  "q": "An architecture team is split into separate departments along the organizational structure and finds that the system reflects the same boundaries. Which statement describes Conway's Law correctly?",
  "options": [
   "Adding staff to a late software project tends to delay it further.",
   "A system in use must change continually, otherwise it becomes less and less useful over time.",
   "The structure of a system tends to mirror the communication structures of the developing organization.",
   "Be strict in what you send and tolerant in what you accept."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: That is Brooks' Law: adding staff to a late project usually delays it further because onboarding and coordination take time. It has nothing to do with the relationship between organization and system structure.",
   "Wrong: That corresponds to Lehman's laws of software evolution, which state that systems in use must change continually. Conway's Law, in contrast, makes a statement about organization and system structure.",
   "Correct: That is Conway's Law: teams build interfaces where they have to communicate with each other, so the system structure mirrors the organization's communication structure. This is exactly what the team in the scenario observes.",
   "Wrong: That is the robustness principle (Postel's Law) for interfaces. It concerns how inputs and outputs are handled, not the relationship between organizational and system structure."
  ],
  "explanation": "Conway's law: system structure mirrors the organization's communication structure. Do not confuse with Brooks’ law (staff in late projects), Postel’s law (robustness of interfaces) and Lehman's laws (software evolution)."
 },
 "c2q24": {
  "q": "Which statements about implicit (unspoken) requirements are correct?",
  "options": [
   "They are often based on self-evident expectations that the client does not even mention.",
   "The client alone is responsible for them, since he should have stated them.",
   "They often concern quality requirements and should be made explicit actively.",
   "They only apply once they have been included in writing in the requirements document.",
   "If they are overlooked, this often only shows late and causes high correction costs."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Correct: Implicit requirements are based on expectations so self-evident to the client that they are not even mentioned. Example: nobody explicitly demands that passwords must not be stored in plain text.",
   "Wrong: Architects share responsibility for actively uncovering such expectations. Pointing to the client does not help if the system has to meet the expectation in the end anyway.",
   "Correct: Quality requirements such as security, availability or usability in particular tend to remain unspoken. As they strongly shape the architecture, architects should ask for them specifically and make them explicit.",
   "Wrong: The expectation exists even without written documentation, and the system is judged by it. That is exactly why implicit requirements are made explicit early instead of waiting for them to be added to the document.",
   "Correct: Overlooked implicit requirements often only show up late, e.g. during acceptance or in operation. By then the structure is already in place and correcting it is especially expensive."
  ],
  "explanation": "Implicit requirements are often quality requirements, are based on self-evident things and become expensive late. Architects actively uncover them; they apply even if nobody has written them down."
 },
 "c2q25": {
  "q": "Two stakeholders are in dispute. How does a substantive conflict most likely differ from a conflict of interests?",
  "options": [
   "A conflict of interest can usually be resolved through additional facts, a factual conflict only through a compromise.",
   "A factual conflict is about facts or solution paths, a conflict of interest about incompatible goals of those involved.",
   "A factual conflict is about incompatible goals of those involved, a conflict of interest about different solution paths.",
   "A factual conflict arises between business departments, a conflict of interest between business and IT."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: The ways of resolution are swapped here. Factual conflicts can often be settled with additional facts, conflicts of interest cannot – they need weighing or a compromise.",
   "Correct: In a factual conflict, people argue about facts or the right solution path, which can often be settled with information or prototypes. In a conflict of interest, those involved pursue incompatible goals, and facts alone do not resolve it.",
   "Wrong: This option swaps the two terms. Incompatible goals characterize a conflict of interest, different solution paths a factual conflict.",
   "Wrong: The type of conflict depends on what the dispute is about, not on who is involved. There can be factual conflicts between business and IT just as there can be conflicts of interest between two business departments."
  ],
  "explanation": "Factual conflict: dispute about facts or solution paths, often solvable through information. Conflict of interest: incompatible goals, needs weighing/compromise. The type depends on the subject, not on those involved."
 },
 "c2q26": {
  "q": "Which statements correctly characterize a constraint?",
  "options": [
   "It is always specified in writing by the client; unwritten requirements are not constraints.",
   "It can be technical, organizational or legal in nature.",
   "It should be documented just like other requirements, since it influences the design.",
   "It is a given limit that the team can hardly or not at all influence.",
   "A constraint, once identified, applies unchanged for the entire lifetime of the system."
  ],
  "correct": [
   1,
   2,
   3
  ],
  "optExpl": [
   "Wrong: Unwritten givens also act as constraints, such as existing infrastructure, company standards or the team's know-how. What matters is that they restrict the solution space, not whether they are in writing.",
   "Correct: Constraints come in several kinds: technical (e.g. a prescribed platform), organizational (e.g. budget, deadline, team) and legal (e.g. data protection). All of them restrict the solution space.",
   "Correct: Constraints influence the design just as strongly as requirements and explain many decisions. That is why they belong in the architecture documentation, so that decisions remain traceable.",
   "Correct: A constraint is a given limit that the team can hardly or not at all change. It has to work with it instead of choosing it freely like a design decision.",
   "Wrong: Constraints can change, for example through new laws, budget changes or technologies reaching end of life. They and the decisions based on them then have to be re-evaluated."
  ],
  "explanation": "Constraints are hardly influenceable requirements of a technical, organizational or legal kind and belong in the documentation. They need not exist in writing and can change over time."
 },
 "c2q27": {
  "q": "A product owner wants to classify requirements using the Kano model. What describes the Kano model correctly?",
  "options": [
   "It distinguishes basic, performance and excitement features by their effect on satisfaction.",
   "It rates requirements by probability of occurrence and impact in order to implement the riskiest first.",
   "It assigns each requirement to exactly one ISO 25010 quality characteristic.",
   "It sorts requirements into Must, Should, Could and Won’t, like the MoSCoW method."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: The Kano model distinguishes features by their effect on satisfaction: basic features are taken for granted, performance features increase satisfaction proportionally, excitement features surprise positively. Missing basic features cause strong dissatisfaction.",
   "Wrong: Probability of occurrence and impact are the dimensions of a risk assessment. The Kano model, in contrast, asks how a feature affects customer satisfaction.",
   "Wrong: The Kano model has nothing to do with the ISO 25010 quality model. It classifies features by customer satisfaction, not by a product's quality characteristics.",
   "Wrong: Must/Should/Could/Won't is the MoSCoW method, a different prioritization technique. Kano does not distinguish by urgency but by a feature's effect on satisfaction."
  ],
  "explanation": "Kano model: basic, performance and excitement features by effect on satisfaction. Distinguish: MoSCoW (Must/Should/Could/Won’t), risk assessment, ISO 25010."
 },
 "c3q1": {
  "q": "Which statements about coupling and cohesion are correct?",
  "options": [
   "Cohesion measures the number and strength of the dependencies between different building blocks.",
   "Loose coupling and high cohesion are complementary goals: the former concerns the relationships between building blocks, the latter the internal cohesion of a building block.",
   "The higher the cohesion of a building block, the higher its coupling to neighboring building blocks.",
   "If two building blocks are connected via a narrow, stable interface instead of shared mutable data structures, their coupling tends to decrease.",
   "A building block with high cohesion bundles elements that serve the same responsibility."
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Wrong: The number and strength of the dependencies between building blocks describes coupling, not cohesion. Cohesion instead measures how strongly the elements inside a single building block belong together.",
   "Correct: Coupling and cohesion look at two different levels – the relationships between building blocks and the internal cohesion of one building block. Both goals are pursued at the same time because they complement each other.",
   "Wrong: Cohesion and coupling are independent dimensions with no such automatic link. On the contrary: if you bundle what belongs together in one building block, you usually need fewer relationships to the outside.",
   "Correct: Shared mutable data structures couple building blocks to internals and to every change of those structures. A narrow, stable interface exposes only a small contract, so both sides can change more independently.",
   "Correct: High cohesion means that the parts of a building block serve one common responsibility. An \"invoicing\" building block, for example, then contains only invoicing logic and no user management."
  ],
  "explanation": "Coupling (relationships between building blocks) and cohesion (internal cohesion) are different, complementary dimensions. The goal is loose coupling with high cohesion. The number/strength of dependencies between building blocks is precisely coupling, and high cohesion does not force high coupling."
 },
 "c3q2": {
  "q": "Which statements about information hiding (Parnas) are correct?",
  "options": [
   "Internal data structures may be used by other building blocks as long as they are documented.",
   "Each building block has exactly one business responsibility and therefore only one reason to change.",
   "Design decisions that are likely to change are hidden behind a stable interface, so that changes remain local.",
   "The goal is that likely changes stay confined to a single building block (local changeability).",
   "Sensitive fields are stored encrypted in order to prevent unauthorized data access."
  ],
  "correct": [
   2,
   3
  ],
  "optExpl": [
   "Wrong: Documentation does not change the fact that other building blocks become dependent on the internal structures. Every change to these internals would then affect all users – exactly what information hiding is meant to prevent.",
   "Wrong: This describes the single responsibility principle (one reason to change per building block), not information hiding. Parnas is about hiding design decisions that are likely to change behind interfaces.",
   "Correct: Parnas proposes cutting building blocks along the design decisions that are likely to change and hiding them behind a stable interface. If, for example, the storage format changes, the change stays inside the responsible building block.",
   "Correct: The purpose of information hiding is local changeability – a likely change should affect only one building block. Users know only the interface and therefore do not need to be adapted.",
   "Wrong: Information hiding is a design principle for encapsulating design decisions, not a security mechanism. Encryption protects data against unauthorized access and belongs to the topic of security."
  ],
  "explanation": "Information hiding conceals the design decisions that are likely to change behind a stable interface, so that changes remain local. It is neither the SRP nor data encryption, and exposing documented internals contradicts the principle."
 },
 "c3q3": {
  "q": "Which statement about the ‚S‘ in the SOLID principles is correct?",
  "options": [
   "The ‚S‘ stands for Separation of Concerns, the overarching principle behind SOLID.",
   "Single Responsibility Principle: A class may have only a single public method.",
   "The ‚S‘ stands for Substitutability: subtypes must be able to replace their base types.",
   "Single Responsibility Principle: A building block should have only a single reason to change."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: Separation of concerns is a related, more general design principle, but it is not part of SOLID. The \"S\" stands for the single responsibility principle.",
   "Wrong: This is a common misreading of the SRP. \"One responsibility\" means one reason to change – a class can still have many methods for it.",
   "Wrong: Substitutability of subtypes is the Liskov substitution principle and therefore the \"L\" in SOLID. The \"S\" stands for the single responsibility principle.",
   "Correct: The single responsibility principle requires that a building block has only one reason to change. If a class mixes calculation and formatting, for example, it changes for two reasons and should be split."
  ],
  "explanation": "The ‚S‘ is the Single Responsibility Principle - one reason to change per building block. It does not require only one method. Separation of Concerns is a different principle (not part of SOLID), and substitutability is the ‚L‘."
 },
 "c3q4": {
  "q": "Which statements about layered architecture (Layers) are correct?",
  "options": [
   "A lower layer may notify higher layers via a callback interface it defines itself, without violating the layering.",
   "Dependencies from a lower to a higher layer count as a layering violation.",
   "In the strict (closed) variant a layer may skip a lower layer if that improves performance.",
   "Additional layers bring indirection and can come at the expense of runtime performance.",
   "Higher layers use services of lower layers; dependencies run in one direction."
  ],
  "correct": [
   0,
   1,
   3,
   4
  ],
  "optExpl": [
   "Correct: The callback interface belongs to the lower layer and the higher layer implements it. The code dependency therefore still points downwards; only the call runs upwards at runtime – as in the observer pattern.",
   "Correct: Layering means that dependencies point only from top to bottom. If a lower layer knows a higher one, a backward dependency arises that ties the layers together and violates the layering.",
   "Wrong: Skipping layers is precisely the characteristic of open (relaxed) layering. In the strict variant a layer may only use the layer directly below it – not even for performance reasons.",
   "Correct: Every layer adds an indirection through which calls and data have to be passed. This can cost runtime – a typical trade-off of layered architecture against its better changeability.",
   "Correct: This is the basic principle of layered architecture: higher layers use services of lower layers, and dependencies run in only one direction. Lower layers can thus be understood and replaced independently of the higher ones."
  ],
  "explanation": "Layers: dependencies only downward, backward dependencies are violations, indirection costs runtime. Strict layering forbids skipping. Callbacks via an interface of the lower layer are allowed because the dependency direction is preserved."
 },
 "c3q5": {
  "q": "Which statements about Ports & Adapters (hexagonal architecture) are correct?",
  "options": [
   "Dependencies are directed so that the business logic need not know the concrete adapters (dependency inversion at the ports).",
   "The core business logic is decoupled from technology and infrastructure.",
   "External concerns (UI, DB, external APIs) are connected via replaceable adapters.",
   "Ports and adapters requires the application to be operated as a set of independent microservices.",
   "A port is the concrete, technology-specific implementation, such as the JDBC database access."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: The business logic defines the ports as interfaces, and the adapters depend on these ports. Thanks to this dependency inversion, the core knows no concrete technology, such as a specific database driver.",
   "Correct: The goal of the pattern is to decouple the core business logic from UI, database and infrastructure. The business logic can then be tested without technology, and technology can be replaced without touching the business logic.",
   "Correct: External concerns are connected to the ports via adapters. Because adapters only have to fulfil the port contract, a relational database can, for example, be replaced by an in-memory variant for tests.",
   "Wrong: Ports and adapters structures an application internally and is independent of the deployment style. The pattern works in a monolith just as well as inside a single microservice.",
   "Wrong: Port and adapter are swapped here. The port is the technology-neutral interface of the core; the JDBC access would be a concrete adapter that implements this port."
  ],
  "explanation": "Ports and adapters decouples business logic from technology: ports are technology-neutral interfaces of the core, adapters the concrete connections. The pattern is independent of the deployment style."
 },
 "c3q6": {
  "q": "Which statements typically apply to microservices?",
  "options": [
   "Since each service is small, the overall effort for testing and operation decreases compared to a monolith.",
   "The business cut into services directly corresponds to the cut into technical layers (one UI, logic, and data service each).",
   "They increase operational complexity (distribution, monitoring, failure scenarios).",
   "They are independently deployable and cut along business boundaries.",
   "Each service manages its own data and encapsulates it behind its interface."
  ],
  "correct": [
   2,
   3,
   4
  ],
  "optExpl": [
   "Wrong: The individual service is small, but the overall system becomes distributed. Integration tests across service boundaries, monitoring, deployment pipelines and network error handling tend to increase the overall effort for testing and operation.",
   "Wrong: Microservices are cut along business boundaries (vertically); each service contains its own UI, logic and data handling for one business area. A cut into UI, logic and data services would be a distributed layered monolith and is considered an anti-pattern.",
   "Correct: Distribution brings network failures, latencies, distributed monitoring and tracing as well as many deployments. This operational complexity is the main price for the independence of the services.",
   "Correct: The core characteristics of microservices are the business-oriented cut and independent deployability. A team can thus change and release its service without deploying other services along with it.",
   "Correct: Each service owns its data and exposes it only via its interface. A shared database would couple the services again via the schema and destroy their independent changeability."
  ],
  "explanation": "Microservices are independently deployable, cut along business boundaries, hold their own data, and increase operational complexity. A cut along technical layers contradicts the business cut, and distributed operation does not lower the overall effort."
 },
 "c3q7": {
  "q": "Which of these belong to the fundamental design principles?",
  "options": [
   "Conceptual integrity – similar problems are solved in a similar way throughout the system.",
   "Separation of concerns.",
   "Full configurability – as many decisions as possible are moved into configuration files.",
   "Abstraction.",
   "Maximum reuse – commonalities are always moved into shared building blocks, even across business boundaries."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Correct: Conceptual integrity means that similar problems are solved in a similar way throughout the system. If, for example, error handling is implemented the same way everywhere, the system becomes easier to understand and maintain.",
   "Correct: Separation of concerns places different concerns in separate building blocks. It is a fundamental principle because it fosters loose coupling and high cohesion and keeps changes local.",
   "Wrong: Excessive configurability only moves complexity into configuration files, where it is hard to test and to keep track of. It is not a design principle but must be justified case by case by real variability requirements.",
   "Correct: Abstraction hides unimportant details and highlights what is essential. It is a fundamental principle because it makes complexity manageable and forms the basis for interfaces and modularization.",
   "Wrong: Reuse at any price couples building blocks that have nothing to do with each other in business terms – every change to the shared building block then affects all of them. DRY refers to the same knowledge, not to accidental similarity across business boundaries."
  ],
  "explanation": "Fundamental design principles include abstraction, modularization (information hiding, SoC, loose coupling, high cohesion) and conceptual integrity. Maximum configurability and reuse at any price sound like principles but increase complexity and coupling."
 },
 "c3q8": {
  "q": "Which of the following are typical cross-cutting concerns?",
  "options": [
   "The calculation of shipping costs, even if several dialogs display the result.",
   "The validation of order data in the order module.",
   "Authentication and authorization.",
   "Concurrency (e.g. a uniform locking and threading concept).",
   "Logging and traceability."
  ],
  "correct": [
   2,
   3,
   4
  ],
  "optExpl": [
   "Wrong: Calculating shipping costs is a business task with a clear owner. The fact that several dialogs display the result does not make it a cross-cutting concern – it belongs in a responsible building block that the dialogs use.",
   "Wrong: The business validation of an order concerns only the order module and is well placed there locally. Cross-cutting concerns, in contrast, are characterized by affecting many building blocks alike.",
   "Correct: Authentication and authorization affect practically every access to the system. Without a uniform security concept each building block would solve it differently, which creates gaps and inconsistencies.",
   "Correct: Concurrency affects many building blocks that access shared resources. A uniform system-wide locking and threading concept prevents different solutions from leading to deadlocks or inconsistencies.",
   "Correct: Logging affects nearly every building block and needs uniform rules for format, levels and content. Only then can processes be traced across building block boundaries."
  ],
  "explanation": "Cross-cutting concerns such as logging, security or concurrency affect many building blocks and need a uniform concept. Business logic stays local – even if its result is displayed in several places."
 },
 "c3q9": {
  "q": "A team starts with the overall system view, decomposes it into subsystems, and refines these step by step into building blocks. Which statement is correct?",
  "options": [
   "This is a bottom-up approach, because the structure arises first and the details only afterwards.",
   "In practice you choose exactly one of the two directions and stick to it consistently to avoid contradictions.",
   "Bottom-up is better suited when the overall problem is still unclear and must first be roughly structured.",
   "This is a top-down approach; bottom-up would, conversely, combine existing detailed building blocks into larger units."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: The terms are swapped here. Starting from the overall system and decomposing it step by step is top-down; bottom-up would start with existing detailed building blocks.",
   "Wrong: In practice both directions are combined iteratively, depending on the state of knowledge. You might, for example, structure roughly top-down and integrate existing libraries or legacy systems bottom-up.",
   "Wrong: Roughly structuring an unclear overall problem is precisely the strength of top-down. Bottom-up fits better when building blocks already exist from which larger units are assembled.",
   "Correct: Starting from the whole and refining it into subsystems and then building blocks is top-down. Bottom-up works the other way round and combines existing detailed building blocks into larger units."
  ],
  "explanation": "Top-down decomposes from the whole to the details, bottom-up assembles from existing parts. In practice both are combined iteratively."
 },
 "c3q10": {
  "q": "Which statements about the benefit of abstraction and modularization in design are correct?",
  "options": [
   "They reduce the number of interfaces needed, since each building block does more itself internally.",
   "Every additional abstraction layer increases changeability, regardless of whether a second implementation ever appears behind it.",
   "They make complexity manageable and allow building blocks to be developed and changed independently.",
   "They make it possible to replace an implementation behind an abstraction without affecting the users.",
   "Too many or poorly chosen abstractions can make a system harder to understand."
  ],
  "correct": [
   2,
   3,
   4
  ],
  "optExpl": [
   "Wrong: Modularization leads precisely to explicit interfaces through which the modules work together. Its benefit is not fewer interfaces but that they are clearly defined and hide internals.",
   "Wrong: Abstractions without foreseeable benefit cost understandability and effort without improving changeability. Following YAGNI, an abstraction is introduced only when replacement, tests or variability actually justify it.",
   "Correct: If a system is decomposed into modules with clear interfaces, you only have to understand one part at a time. Teams can thus develop and change building blocks independently of one another.",
   "Correct: Users depend only on the abstraction, not on the concrete implementation. That implementation can therefore be replaced – for example a different payment provider behind the same interface – without adapting the users.",
   "Correct: Abstraction also has costs, because every additional level has to be understood. Too many or poorly cut abstractions obscure what the system actually does."
  ],
  "explanation": "Abstraction and modularization make complexity manageable and implementations replaceable – via explicit interfaces. Too many or unnecessary abstractions harm understandability and effort, though."
 },
 "c3q11": {
  "q": "For which scenario is the ‚Pipes and Filters‘ pattern best suited?",
  "options": [
   "A multi-stage data processing in which each step passes its result to the next and the filters are independent of one another.",
   "An interactive workflow in which the user continuously branches the flow freely between the steps.",
   "A processing with complex, stateful feedback, in which one step deliberately influences earlier steps.",
   "A processing in which all steps continuously read and write a shared, mutable state."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Pipes and filters is intended for a directed chain of independent processing steps in which the output of one filter is the input of the next. A typical example is an import pipeline consisting of reading, validating, transforming and storing.",
   "Wrong: The pattern describes a fixed, directed processing chain. For interactive flows in which the user branches freely between steps, dialog- or workflow-oriented approaches are more suitable.",
   "Wrong: Stateful feedback in which one step influences earlier steps does not fit the directed, largely stateless chain. It would make the filters dependent on one another and destroy their replaceability.",
   "Wrong: A shared state read and written by all steps contradicts the independence of the filters. That would correspond more to a blackboard or shared-repository approach than to pipes and filters."
  ],
  "explanation": "Pipes and Filters fits a directed, multi-stage processing chain with mutually independent filters (output → input). Shared mutable state, complex feedback, or freely branching interaction contradict the pattern."
 },
 "c3q12": {
  "q": "Which statement about the difference between synchronous and asynchronous communication is correct?",
  "options": [
   "Asynchronous communication couples sender and receiver more tightly in time, since both must be available simultaneously.",
   "In synchronous communication the caller is blocked until the response arrives; asynchronous decouples the sending from the processing in time.",
   "Asynchronous communication is more reliable, because messages cannot be lost in the process.",
   "Whether a call is synchronous or asynchronous depends solely on whether it takes place locally or over the network."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: The characteristics are swapped here. The need for sender and receiver to be available simultaneously characterizes synchronous communication; asynchronous communication is precisely what decouples them in time.",
   "Correct: In synchronous communication the caller waits, blocked, for the response, e.g. with a REST call. In asynchronous communication it sends a message to a queue, for example, and continues working while the receiver processes it later.",
   "Wrong: Asynchronous communication on its own does not guarantee that messages are delivered. Whether messages can be lost depends on the infrastructure, such as persistent queues and delivery guarantees.",
   "Wrong: Synchronous and asynchronous describe the waiting behavior of the caller, not the location of the call. A network call can be synchronous, and a local call can run asynchronously via an event queue."
  ],
  "explanation": "Synchronous means: the caller waits in a blocking manner; asynchronous decouples sending and processing in time. Simultaneous availability is a synchronous characteristic, reliability is not an automatic property of asynchronous communication, and the location (local/network) does not determine sync/async."
 },
 "c3q13": {
  "q": "Which statements about technical debt are correct?",
  "options": [
   "Left untreated, they make future changes harder and more expensive.",
   "They arise mainly from a lack of skills in the team and can therefore largely be avoided through training.",
   "They can arise both deliberately (known shortcut under time pressure) and unintentionally (lack of knowledge).",
   "They are postponed compromises or shortcomings in code or architecture.",
   "They should be fully paid off before new features are implemented."
  ],
  "correct": [
   0,
   2,
   3
  ],
  "optExpl": [
   "Correct: As with financial debt, \"interest\" accrues: every change to the affected code takes longer and is more error-prone. The longer the debt remains, the more expensive future changes become.",
   "Wrong: Lack of knowledge is only one of several causes. Technical debt also arises from deliberate shortcuts under time pressure or because requirements change and a once-good solution no longer fits – training does not prevent that.",
   "Correct: Technical debt can be taken on deliberately, for instance as a known shortcut to meet a deadline, or arise unintentionally from a lack of knowledge. Deliberate debt should be documented and its repayment planned.",
   "Correct: Technical debt consists of postponed compromises or shortcomings in code or architecture. It works for now but makes further development harder until it is paid off.",
   "Wrong: Technical debt is managed deliberately and prioritized by benefit and risk. Paying it off completely before every new feature is neither necessary nor realistic and would block the delivery of value."
  ],
  "explanation": "Technical debt is postponed compromises, arises deliberately or unintentionally and makes future changes more expensive. It is managed and prioritized rather than fully paid off before every feature."
 },
 "c3q14": {
  "q": "Which statements about the dependency inversion principle (DIP) are correct?",
  "options": [
   "This makes concrete implementations easy to replace (e.g. via dependency injection).",
   "The DIP is fulfilled as soon as a dependency injection framework is used.",
   "High-level and low-level modules depend on common abstractions; abstractions do not depend on details, but details depend on abstractions.",
   "Objects should receive their dependencies from outside instead of creating them themselves.",
   "The abstraction belongs to the low-level module, since that module implements it."
  ],
  "correct": [
   0,
   2
  ],
  "optExpl": [
   "Correct: Because the high-level module depends only on an abstraction, the concrete implementation behind it can be replaced. Dependency injection is a typical technique for this, for example to use a fake implementation in tests.",
   "Wrong: A DI framework merely wires objects together. If the high-level module still depends directly on concrete classes, the DIP is violated – what matters is the direction of the dependencies, not the tool.",
   "Correct: This is the core statement of the DIP. Instead of the business logic depending directly on the database class, both depend on a common abstraction, and the detail class conforms to that abstraction.",
   "Wrong: This describes dependency injection, a technique for passing dependencies in from outside. DI supports the DIP but is not the principle itself – the DIP concerns the direction of dependencies between abstractions and details.",
   "Wrong: It is the other way round: the abstraction is defined by, or belongs to, the using high-level side. The low-level module merely implements it – only then does the dependency point from the detail to the abstraction and is actually inverted."
  ],
  "explanation": "DIP: both levels depend on abstractions that belong to the using high-level side; details depend on abstractions. Dependency injection is a technique supporting this – a DI framework alone does not fulfill the principle."
 },
 "k3": {
  "q": "Assign each term: architectural pattern or design principle?",
  "categories": [
   "Architectural pattern",
   "Design principle"
  ],
  "rows": [
   "Microservices",
   "Pipes and Filters",
   "Dependency Inversion Principle",
   "Separation of Concerns"
  ],
  "explanation": "Pipes and Filters and Microservices are architectural patterns/styles (structure of the overall system). Dependency Inversion and Separation of Concerns are design principles (guidelines for good design)."
 },
 "c3q15": {
  "q": "Which statements about ‚Separation of Concerns‘ are correct?",
  "options": [
   "SoC is just another name for the single responsibility principle.",
   "Separating business and technical concerns (e.g. business rules and persistence) is a typical application.",
   "It fosters loose coupling and high cohesion and thus eases changes and tests.",
   "Different concerns are handled in separate, respectively responsible building blocks.",
   "SoC means that each concern must be implemented in its own technical layer."
  ],
  "correct": [
   1,
   2,
   3
  ],
  "optExpl": [
   "Wrong: SoC is the more general principle and applies at all levels, from the system down to the class. The SRP is a more specific form at class or building block level that argues in terms of reasons to change.",
   "Correct: Business rules and persistence change for different reasons and at a different pace. If they are separated, the database can, for example, be replaced without touching the business logic.",
   "Correct: If each building block handles only one concern, it is internally coherent (high cohesion) and needs little knowledge about others (loose coupling). Changes thus stay local, and building blocks can be tested in isolation.",
   "Correct: This is the core of SoC: each concern is handled in a building block responsible for it. You then know where a change has to be made, and independent topics are not mixed.",
   "Wrong: Technical layers are only one possible way to implement SoC. Concerns can just as well be separated via modules, classes, components or services, including along business rather than technical lines."
  ],
  "explanation": "SoC separates different concerns into responsible building blocks, e.g. business from technical. It is more general than SRP and not tied to layers."
 },
 "c3q16": {
  "q": "Which statement most accurately describes the DRY principle?",
  "options": [
   "Two syntactically identical code sections must always be merged, even if they exist for different business reasons.",
   "DRY requires eliminating every duplication, even if two independent building blocks thereby become coupled via a shared helper building block.",
   "Every piece of knowledge or every decision has a single, unambiguous, authoritative representation in the system.",
   "DRY only refers to code; duplicate information in configuration or documentation is not affected."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: Syntactically identical code that exists for different business reasons is not duplicated knowledge but accidental similarity. Merging it couples things that are independent in business terms and will later have to change separately.",
   "Wrong: DRY must be weighed against other principles such as loose coupling. If every duplication is removed via a shared helper building block, dependencies arise that can do more harm than the duplication itself.",
   "Correct: DRY aims for every piece of knowledge to have exactly one authoritative representation. If, for example, a tax rule is defined in only one place, it only needs to be adapted there when it changes.",
   "Wrong: DRY concerns every representation of knowledge, not only code. Information maintained twice in configuration, database schemas or documentation drifts apart just as well and leads to contradictions."
  ],
  "explanation": "DRY: every piece of knowledge has exactly one authoritative representation – in code, configuration or documentation. It is about the same knowledge, not accidentally identical code, and must be weighed against loose coupling."
 },
 "c3q17": {
  "q": "What does the YAGNI principle state?",
  "options": [
   "Already existing but unused functions must not be removed for stability reasons.",
   "Implement every requirement as maximally generic and configurable from the start.",
   "Provide as many extension points as possible in advance, in order to keep later changes cheap.",
   "Do not build functionality on speculation that is not (yet) currently needed."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: Whether unused functions may be removed is a different question from YAGNI. YAGNI concerns building new functionality on speculation – unused code tends to be removed rather than kept, to keep maintenance simple.",
   "Wrong: Precautionary maximum genericity is exactly what YAGNI warns against. It costs development time and understandability for variability that is often never needed.",
   "Wrong: Extension points built in advance are speculative generalization. They increase complexity immediately while their benefit is uncertain – YAGNI recommends introducing them only when a concrete requirement calls for them.",
   "Correct: YAGNI (\"You Ain't Gonna Need It\") means building only what is actually needed now. This keeps the system simple; if more is needed later, it is added specifically at that point."
  ],
  "explanation": "YAGNI means: only build what is currently needed. Precautionary extension points or maximal genericity are speculative generalization and contradict the principle; removing unused functions is a different topic."
 },
 "c3q18": {
  "q": "Which statements about architectural patterns are correct?",
  "options": [
   "They are proven, reusable solution templates for recurring structural problems.",
   "They create a common language and must fit the concrete problem.",
   "Besides advantages they also have disadvantages that must be weighed consciously when using them.",
   "They describe the solution so concretely that it can be transferred to any system without adaptation.",
   "A system should ideally use only a single architecture pattern in order to preserve conceptual integrity."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Architectural patterns describe proven solutions to structural problems that occur again and again. These solutions need not be reinvented; you can draw on collected experience.",
   "Correct: A pattern name such as \"layers\" or \"pipes and filters\" conveys an entire structure in one word and thus eases communication. A pattern only helps, however, if it fits the concrete problem and context.",
   "Correct: Every pattern comes with trade-offs – layers cost indirection, for example, and microservices increase operational complexity. These disadvantages must be consciously weighed against the advantages.",
   "Wrong: Patterns are abstract solution templates, not ready-made building instructions. They must be adapted to the specific context, requirements and constraints.",
   "Wrong: Systems often combine several patterns, for example microservices that are internally layered and communicate via publish/subscribe. Conceptual integrity means consistency of solutions, not restriction to a single pattern."
  ],
  "explanation": "Architecture patterns are proven, abstract solution templates with a common vocabulary, advantages and disadvantages. They must fit the context and be adapted; systems often combine several patterns."
 },
 "c3q19": {
  "q": "What does the Model-View-Controller (MVC) pattern separate?",
  "options": [
   "It corresponds exactly to the three technical layers presentation, application, and data storage.",
   "It deliberately merges model and view into a common component.",
   "The view accesses the model exclusively via the controller and never knows the model directly.",
   "Data model, presentation (view), and control/interaction (controller)."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: MVC and the three-tier architecture are different views. MVC mainly structures the interaction with the user interface and typically sits inside the presentation layer rather than corresponding to it one-to-one.",
   "Wrong: MVC deliberately separates model and view so that data and presentation can change independently. The same model can thus, for example, be displayed in several views.",
   "Wrong: In the classic form of MVC the view may know and observe the model directly in order to update itself on changes. Access exclusively via the controller is one possible variant, but not a defining requirement.",
   "Correct: MVC separates the responsibilities of data and business state (model), presentation (view) and control or handling of user input (controller). Presentation and interaction can thus change without touching the model."
  ],
  "explanation": "MVC separates model, view, and controller. This is not the same as the three technical layers, does not require exclusive view access via the controller, and does not merge model and view."
 },
 "c3q20": {
  "q": "Which measures promote loose coupling?",
  "options": [
   "Sharing a database schema so that building blocks can exchange data directly with each other.",
   "Fine-grained, “chatty” interfaces via which building blocks exchange many small individual calls.",
   "Communication via clearly defined interfaces or abstractions.",
   "Injecting dependencies from outside (dependency injection) instead of letting building blocks instantiate them themselves.",
   "A central utility library on which all building blocks depend, to avoid duplication.",
   "Event-based (asynchronous) communication between building blocks."
  ],
  "correct": [
   2,
   3,
   5
  ],
  "optExpl": [
   "Wrong: A shared database schema couples all participating building blocks to its structure. Every schema change can then break all users, and the building blocks can no longer be changed independently.",
   "Wrong: Chatty interfaces expose many internals and flow details that the caller has to know and use in the right order. Coarse-grained, business-oriented operations couple more loosely and are also more efficient over the network.",
   "Correct: Clearly defined interfaces or abstractions are the basis of loose coupling. Building blocks know only the contract and not the implementation, so the implementation can change independently.",
   "Correct: If a building block does not create its dependencies itself but receives them, it knows only their abstraction. The concrete implementation can thus be replaced, for example by a test double in tests.",
   "Wrong: A utility library on which all building blocks depend becomes a central coupling hub. Every change to it affects all building blocks – avoiding duplication is paid for here with high coupling.",
   "Correct: With event-based communication the sender does not know the receivers and does not have to wait for them. This decouples the building blocks both in time and in their knowledge of each other."
  ],
  "explanation": "Loose coupling is fostered by clear interfaces, event-based communication and dependency injection. Shared schemas, central all-purpose libraries and chatty interfaces increase coupling, even if they seem convenient or DRY."
 },
 "c3q21": {
  "q": "In a system, building blocks A and B reference each other (cyclic dependency). Which statements are correct?",
  "options": [
   "The cycle is unproblematic as long as A and B are maintained by the same team.",
   "The cycle makes isolated testing and independent changes difficult; A and B can hardly be understood or reused separately.",
   "If A and B belong closely together functionally, merging them into one building block can also be a sensible solution.",
   "In a strict layered architecture such a cycle is permitted, as long as both building blocks are in the same layer.",
   "The cycle should be broken up – for example through a common abstraction or by inverting one dependency."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Wrong: A cycle is a structural problem that exists regardless of who maintains the building blocks. Even within the same team, A and B cannot be tested, changed or reused in isolation.",
   "Correct: Through the cycle, A and B effectively merge into one unit: anyone who changes or tests A always needs B as well, and vice versa. They can hardly be understood separately or reused in another context.",
   "Correct: A cycle can indicate that the cut is wrong and that A and B actually form one responsibility. Merging them into one building block is then a legitimate solution.",
   "Wrong: Layering only governs the relationships between layers, not those within a layer. Cycles make testing, changing and reusing difficult there as well and are therefore problematic.",
   "Correct: A cycle can be broken by introducing a common abstraction or by inverting one of the dependencies, for example via dependency inversion or a callback. Afterwards the dependency points in only one direction."
  ],
  "explanation": "Cyclic dependencies make testing, changing and reuse harder – also within a layer and in the same team. Solutions: common abstraction, dependency inversion or, if functionally related, merging."
 },
 "c3q22": {
  "q": "Which statements about refactoring are correct?",
  "options": [
   "Refactoring is best planned as a separate project phase after all features are completed.",
   "The externally observable behavior remains unchanged.",
   "It improves the internal structure of the code.",
   "Automated tests are an important safeguard to detect unintended behavior changes early.",
   "Even renaming a publicly used API operation has no consequences for its callers, as long as the function stays the same."
  ],
  "correct": [
   1,
   2,
   3
  ],
  "optExpl": [
   "Wrong: Refactoring is done continuously in small steps as part of normal development. If it is postponed to a separate phase, technical debt keeps growing, and that phase is often dropped under time pressure.",
   "Correct: By definition, refactoring changes only the internal structure, not the externally observable behavior. If the behavior changes, it is a functional change and no longer refactoring.",
   "Correct: The goal of refactoring is a better internal structure, such as clearer names, smaller methods or less duplication. This reduces technical debt and makes future changes easier.",
   "Correct: Because the behavior must stay the same, you need a way to check it. Automated tests immediately show after each small step whether something has been broken by accident.",
   "Wrong: Renaming a publicly used operation breaks all callers, even if the function stays the same. Public interfaces require versioning or transitional solutions such as a deprecated alias operation."
  ],
  "explanation": "Refactoring improves the internal structure without changing behavior, safeguarded by tests, and happens continuously. Changing public interfaces affects their users and is not an inconsequential internal refactoring."
 },
 "c3q23": {
  "q": "Why does one preferably program against interfaces instead of against concrete implementations?",
  "options": [
   "Concrete implementations can thereby be replaced more easily.",
   "Coupling to implementation details decreases.",
   "Isolated testing is made easier, because dependencies can be replaced by test doubles.",
   "It is worthwhile for every class, even if foreseeably only a single implementation exists.",
   "The caller no longer needs to know the semantics of the operation, only its signature."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: The caller knows only the interface, not the concrete class behind it. The implementation can therefore be replaced, for example by a different storage service, without adapting the caller.",
   "Correct: Programming against an interface means depending only on the contract and not on internal details of the implementation. Changes behind the interface therefore do not affect the users.",
   "Correct: If a building block depends only on an interface, a test double (mock, stub) can be used in tests instead of the real dependency. The building block can then be checked without a database or external services.",
   "Wrong: An interface without foreseeable benefit is unnecessary abstraction and contradicts YAGNI. It is worthwhile where replaceability, testability or a building block boundary justify it.",
   "Wrong: An interface is more than its signature; its semantics with pre- and postconditions is part of the contract. The caller has to know what an operation does, just not how it does it."
  ],
  "explanation": "Programming against interfaces makes implementations replaceable, lowers coupling and eases testing. The semantics remain part of the contract, and not every class needs its own interface."
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
   "Event-based communication via a publish/subscribe channel",
   "A building block inherits from a concrete class of another building block"
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
   "Separation of Concerns",
   "Interface Segregation Principle",
   "Liskov Substitution Principle",
   "Law of Demeter"
  ],
  "explanation": "SOLID = SRP, OCP, LSP, ISP, DIP - these include Interface Segregation and Liskov Substitution. Separation of Concerns and the Law of Demeter are important but independent principles outside of SOLID."
 },
 "c3q24": {
  "q": "Which statements about the Open/Closed Principle (OCP) are correct?",
  "options": [
   "OCP requires that every class has exactly one single responsibility.",
   "New behavior is preferably added via abstractions/polymorphism instead of changing proven code.",
   "OCP only protects against anticipated kinds of change; for unanticipated ones, proven code must also be adapted.",
   "OCP means that existing code may no longer be changed after the first release, not even for bug fixes.",
   "Building blocks should be open for extension but closed for modification."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Wrong: A single responsibility per class is what the single responsibility principle requires, not the OCP. The OCP concerns how building blocks can be extended without changing existing code.",
   "Correct: New behavior is added via abstractions and polymorphism, for example through a new implementation of an existing interface. The proven code stays unchanged and does not have to be adapted again at some risk.",
   "Correct: Extension points can only be provided for changes that were anticipated. If an unexpected kind of change comes along, proven code must be adapted as well – a known limit of the OCP.",
   "Wrong: The OCP is a design goal for extensions, not a ban on changes. Bug fixes and refactorings of existing code obviously remain possible.",
   "Correct: This is the core statement of the OCP: building blocks should be extensible without having to change their existing code. An example is payment processing to which a new payment method is added as an additional implementation."
  ],
  "explanation": "OCP: open for extension, closed for modification – new behavior via abstractions. It is not a prohibition on change and only works for anticipated variations; do not confuse with SRP."
 },
 "c3q25": {
  "q": "What does the Interface Segregation Principle (ISP) recommend?",
  "options": [
   "Clients should depend only on abstractions instead of on concrete classes.",
   "Narrow, role-specific interfaces, so that clients do not depend on methods they do not use at all.",
   "Cut interfaces along technical layers instead of along the needs of the clients.",
   "Bundle as many operations as possible into one central interface, in order to ensure consistency."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: Depending on abstractions instead of concrete classes is the dependency inversion principle. The ISP instead asks how broad an interface is and whether a client depends on methods it does not use.",
   "Correct: The ISP recommends narrow interfaces tailored to the role of the client. A client that only needs to read then does not depend on write methods, for example, and is not affected when they change.",
   "Wrong: The ISP cuts interfaces along the roles and needs of the clients, not along technical layers. A cut along layers would still tie clients to methods they do not need.",
   "Wrong: A large catch-all interface is the opposite of the ISP. Every client then depends on all operations and can be affected by changes to methods it does not use at all."
  ],
  "explanation": "ISP: no dependency on unused methods - i.e. narrow, role-specific interfaces. The dependency on abstractions is the DIP; a large catch-all interface or a cut along layers contradict the ISP."
 },
 "c3q26": {
  "q": "What does the Liskov Substitution Principle (LSP) require?",
  "options": [
   "LSP is already fulfilled as soon as the subtype syntactically inherits from the base class and the signatures match.",
   "Objects of a subtype must be usable in place of their base type without breaking the correctness of the program.",
   "LSP requires that inheritance generally be replaced by composition.",
   "A subtype may strengthen the preconditions of its methods and weaken the postconditions."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: Matching signatures only ensure syntactic compatibility. The LSP is a matter of behavior: the subtype must also behave as users of the base type expect – the classic counterexample is a square that inherits from rectangle.",
   "Correct: The LSP requires that a subtype can replace its base type everywhere with conforming behavior. Code that works correctly with the base type must therefore also work correctly with every subtype.",
   "Wrong: The LSP governs the conditions under which a subtype may replace its base type. The design question \"inheritance or composition\" is a different topic – LSP violations may hint at composition, but the principle does not require it.",
   "Wrong: It is exactly the other way round: a subtype must not strengthen preconditions or weaken postconditions. Otherwise callers that rely on the contract of the base type would fail with the subtype."
  ],
  "explanation": "LSP requires that a subtype be able to replace the base type in a behaviorally conformant way. Preconditions may not be strengthened and postconditions may not be weakened; syntactic inheritance alone is not sufficient, and it has nothing to do with replacing inheritance by composition."
 },
 "c3q27": {
  "q": "What characterizes an event-driven (publish/subscribe) pattern?",
  "options": [
   "Sender and receiver are tightly coupled, since the sender calls each registered receiver directly and synchronously.",
   "Senders publish events without knowing the receivers; any number of receivers can react to them - loosely coupled.",
   "The receiver must synchronously acknowledge every event notification before the sender may continue.",
   "Receivers actively poll the sender at fixed intervals (polling)."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: If the sender calls each receiver directly and synchronously, it has to know all receivers and wait for them. That is tight coupling and contradicts the decoupling that publish/subscribe is meant to achieve.",
   "Correct: With publish/subscribe the sender publishes events without knowing who receives them. Any number of receivers can subscribe, and new ones can be added without changing the sender.",
   "Wrong: A mandatory synchronous acknowledgement would tie the sender to the receivers again and block it until they respond. This is untypical of publish/subscribe, which precisely decouples sender and receiver in time.",
   "Wrong: With polling, receivers actively and regularly ask whether there is anything new. Event-driven patterns work the other way round: events are published and delivered to the receivers as soon as they occur."
  ],
  "explanation": "With publish/subscribe, sender and receiver are decoupled via events, and multiple receivers are possible. A direct/synchronous call, a forced synchronous acknowledgment, or polling contradict the pattern."
 },
 "c3q28": {
  "q": "What describes the client-server pattern?",
  "options": [
   "Client and server must be executed in the same process on the same machine.",
   "The server initiates connections to the clients on its own and triggers the interaction.",
   "Requesting clients use services of a providing server via a defined interface.",
   "All nodes are equal-ranked and offer each other the same services."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: Client and server typically run in separate processes and often on different machines that communicate over a network. This separation is one of the reasons for the pattern – for example to provide a central service to many clients.",
   "Wrong: In the client-server pattern the server behaves reactively: it waits for requests and answers them. The interaction is initiated by the client – a server that opens connections on its own reverses the roles.",
   "Correct: The core of the pattern is the division of roles: clients request services, the server provides them via a defined interface. A web browser fetching pages from a web server is the classic example.",
   "Wrong: Equal-ranked nodes offering each other the same services describe the peer-to-peer pattern. Client-server, by contrast, depends on the asymmetric roles of the requesting client and the providing server."
  ],
  "explanation": "In the client-server pattern the client requests services from the server via a defined interface. Equal-ranked nodes are peer-to-peer; the server is reactive, not initiating; and separate processes/machines are the normal case."
 },
 "c3q29": {
  "q": "Which statements about the heuristic ‚Composition over inheritance‘ are correct?",
  "options": [
   "Composition is to be preferred especially when there is a genuine “is-a” relationship between the types.",
   "Composition avoids the tight binding and fragility of deep inheritance hierarchies.",
   "With composition, the enclosing object automatically inherits all methods of its parts.",
   "Behavior can often be achieved better by composing objects than through deep inheritance.",
   "Composition allows behavior to be exchanged at runtime (e.g. via the strategy pattern)."
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Wrong: The cases are swapped here. A genuine \"is-a\" relationship is exactly the case in which inheritance can be appropriate; composition fits \"has-a\" or \"uses-a\" relationships.",
   "Correct: Deep inheritance hierarchies tightly couple subclasses to the internals of their base classes – a change at the top can unexpectedly break things below (fragile base class). Composition binds only to the interface of the part and avoids this fragility.",
   "Wrong: With composition nothing is inherited automatically – that would be inheritance. The enclosing object explicitly delegates to its parts and decides itself which functionality it offers to the outside.",
   "Correct: Small, specialised objects can be combined flexibly instead of casting every behaviour variant into its own subclass. This avoids the \"class explosion\" that deep inheritance produces when many combinations are needed.",
   "Correct: Because the part is accessed only via an interface, it can be exchanged at runtime. With the strategy pattern, for example, a sorting or pricing algorithm is plugged in depending on the situation – with inheritance this behaviour is fixed at compile time."
  ],
  "explanation": "Composition over inheritance: composing is more flexible, more loosely coupled and exchangeable at runtime. Inheritance remains legitimate for genuine “is-a” relationships; with composition you delegate explicitly rather than inherit."
 },
 "c3q30": {
  "q": "Which statements about stateless services are correct?",
  "options": [
   "This facilitates horizontal scaling and load balancing.",
   "Requests can be distributed to any equivalent instance.",
   "State needed beyond a single request is deliberately moved outside (e.g. database, cache, token).",
   "Stateless services are unsuitable for applications with user sessions, since they cannot use any session state.",
   "The session state is firmly bound to the instance that handled the first request (sticky sessions as a defining characteristic)."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Since no instance holds its own state, more instances can simply be added as load grows. A load balancer does not need to consider which instance knows which data.",
   "Correct: Without instance state every instance is equivalent, so any request can be handled by any instance. If one instance fails, the others take over without losing data.",
   "Correct: Stateless does not mean there is no state, but that it is not kept in the service instance. It is deliberately moved to a database, a distributed cache or a token sent along by the client.",
   "Wrong: Session state can be moved outside, for example into a token (e.g. JWT) or a distributed cache. Sessions are therefore perfectly possible with stateless services – the state is just not kept in the instance.",
   "Wrong: Sticky sessions bind state to a specific instance and are thus the opposite of stateless. They hinder scaling and fault tolerance, because requests can no longer be distributed freely."
  ],
  "explanation": "Stateless services keep no state in the instance; needed state is externalized. This eases scaling and also works for sessions – sticky sessions are the counter-model."
 },
 "c3q31": {
  "q": "Which properties structurally promote the maintainability/changeability of a system?",
  "options": [
   "A central control building block that coordinates all flows and therefore directly knows all other building blocks.",
   "High cohesion per building block (related tasks are bundled).",
   "Common base classes from which as many building blocks as possible inherit, to save code.",
   "Low coupling between the building blocks.",
   "Clearly defined, stable interfaces behind which the implementation remains replaceable."
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Wrong: An all-knowing control building block becomes a coupling hub, because it directly knows all other building blocks. Every change anywhere in the system affects it – the opposite of locally contained changes.",
   "Correct: High cohesion bundles related tasks in one building block. A functional change then usually affects only that one building block instead of being scattered across many.",
   "Wrong: Broad implementation inheritance does save code, but couples many building blocks to the internals of the base class (fragile base class). A change to the base class can then break all subclasses at once – saved code is no measure of changeability.",
   "Correct: The fewer building blocks depend on each other, the less a change spreads. Together with high cohesion, low coupling is the central structural lever for maintainability.",
   "Correct: Stable interfaces separate the \"what\" from the \"how\": users rely only on the contract, not on the implementation. The implementation can then be replaced or reworked without users having to be adapted."
  ],
  "explanation": "Maintainability is fostered by high cohesion, stable interfaces and low coupling. A central all-knowing controller and broad implementation inheritance increase coupling, even if they save code."
 },
 "c3q32": {
  "q": "What is the purpose of resilience patterns such as timeout, retry, or circuit breaker?",
  "options": [
   "Retry is harmless for every operation, since a repeated call delivers the same result as the first.",
   "For robust handling of errors and failures, especially in distributed systems.",
   "Retry should be configured so that failed calls are repeated as often as possible, immediately and without pause.",
   "A circuit breaker speeds up error-free calls by caching their results."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: Retry is only harmless for idempotent operations, i.e. when a repetition has the same effect as a single call. With non-idempotent operations there is a risk of, for example, duplicate bookings or orders.",
   "Correct: Timeout, retry and circuit breaker are resilience patterns for robust handling of errors and failures. Especially in distributed systems, where the network or neighbouring services can fail at any time, they prevent an error from spreading in a cascade.",
   "Wrong: Immediate, unlimited repetitions can further overload an already struggling service and make the outage worse. Common practice is a limited number of attempts and a backoff, i.e. growing waiting times between attempts.",
   "Wrong: This confuses the circuit breaker with caching. After repeated errors a circuit breaker interrupts calls to a faulty service so that it can recover and the caller fails fast instead of blocking."
  ],
  "explanation": "Timeout, retry and circuit breaker increase the robustness of distributed systems. Retry needs idempotence and backoff; a circuit breaker protects against cascading failures and is not a cache."
 },
 "k9": {
  "q": "Synchronous or asynchronous communication?",
  "categories": [
   "Synchronous",
   "Asynchronous"
  ],
  "rows": [
   "An event is published; receivers process it at a later point in time.",
   "The sender places a message in a queue and continues immediately.",
   "A call whose response is awaited within the same request/response.",
   "The caller blocks until the result is available."
  ],
  "explanation": "Synchronous means: the caller waits in a blocking manner for the response (including in the awaited request/response). Asynchronous decouples sender and receiver in time - via queues or events processed later."
 },
 "c3q33": {
  "q": "What is the purpose of the Facade pattern?",
  "options": [
   "It encapsulates access to an object and controls it as a stand-in (e.g. lazy loading, access protection).",
   "It translates between two incompatible interfaces so that they can work together.",
   "It prevents clients from continuing to access individual classes of the subsystem directly when needed.",
   "It offers simplified, uniform access to a more complex subsystem."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: This describes the proxy, not the facade. A proxy stands in front of exactly one object with the same interface and controls access to it, e.g. for lazy loading or access protection.",
   "Wrong: This describes the adapter. It translates between two incompatible interfaces, whereas a facade puts a new, simplified interface in front of an entire subsystem.",
   "Wrong: A facade offers convenient access, but does not necessarily prevent direct access to the subsystem. Clients with special needs can still use the individual classes.",
   "Correct: A facade bundles the complexity of a subsystem behind a simple, uniform interface. Clients then no longer need to know many individual classes and how they interact, which reduces coupling to the subsystem."
  ],
  "explanation": "Facade = simplified access to a subsystem. Distinguish: adapter (translates interfaces), proxy (stand-in with the same interface). A facade does not necessarily exclude direct access."
 },
 "c3q34": {
  "q": "Which statements about a module (building block) in the sense of modularization are correct?",
  "options": [
   "It bundles related functionality behind a defined interface (high cohesion).",
   "Its internal structure may be changed without breaking users, as long as the interface remains stable.",
   "A module always corresponds to exactly one deployable artifact.",
   "Modules can themselves consist of further modules (hierarchical decomposition).",
   "Modules should be as small as possible; one class per module is the ideal case."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Correct: A module groups functionally or technically related things and makes them accessible only via a defined interface. This high cohesion ensures that the module has a clearly delimited responsibility.",
   "Correct: The interface is the contract with the users; everything behind it is an implementation detail. As long as the contract stays stable, the internal structure can be reworked without users noticing.",
   "Wrong: Module and artifact are different concepts: the module belongs to the building block view, the deployable artifact to the deployment view. Several modules can live in one artifact – such as the modules of a modular monolith.",
   "Correct: Modularization is hierarchical: a module can in turn consist of submodules that are refined further as needed. This is exactly how the level structure of the building block view with black-box and white-box representations arises.",
   "Wrong: The size of a module follows from its responsibility, not from a rule of thumb like \"one class per module\". Modules that are too small fragment related logic and thereby increase coupling between them."
  ],
  "explanation": "A module bundles related things behind a stable interface and can itself consist of modules. It is not a synonym for artifact, and its size follows its responsibility."
 },
 "c3q35": {
  "q": "Which statements about the trade-off between monolith and microservices are correct?",
  "options": [
   "Microservices can be deployed and scaled independently, but increase operational complexity.",
   "A modular monolith can have clear internal building block boundaries, but is still deployed as one unit.",
   "Microservices simplify data consistency, since each service only manages its own data.",
   "A modular monolith can hardly be split into services later, since its building blocks run in the same process.",
   "A monolith can usually be tested end-to-end and operated as a whole more easily."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Correct: Microservices can be deployed individually and scaled specifically where load occurs. The price is operational complexity: many deployments, network communication, distributed monitoring and troubleshooting across service boundaries.",
   "Correct: A modular monolith cleanly separates functional building blocks internally, but remains a single deployment unit. It thus combines clear structures with the simple operation of a monolith.",
   "Wrong: Separate data storage makes consistency across service boundaries harder, not easier. Business transactions that span several services require distributed coordination or lead to eventual consistency.",
   "Wrong: The opposite is true: clear module boundaries make a later split easier, because the cut lines already exist. The modular monolith is therefore considered a typical starting point on the way to microservices.",
   "Correct: A monolith runs as one process, so end-to-end tests, local execution and operation are considerably simpler. Network errors between building blocks, distributed transactions and many deployments do not occur."
  ],
  "explanation": "Monolith: easier to test and operate. Microservices: independently deployable, but operationally more complex and with harder consistency. A modular monolith has clear boundaries and is a good starting point for later splitting."
 },
 "c3q36": {
  "q": "Which statements about the use of proven architecture and design patterns are correct?",
  "options": [
   "They bundle proven solution knowledge and thus reduce design risks.",
   "Patterns can be selected independently of the quality goals, since they are generally proven.",
   "A pattern must always be assessed in the context of its trade-offs; a wrongly chosen pattern can do harm.",
   "The more patterns a design combines, the more robust and future-proof it becomes.",
   "They create a common vocabulary that eases communication in the team."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Correct: Patterns describe solutions that have proven themselves for recurring problems in many projects. Using them means not having to solve every problem anew and avoiding known pitfalls.",
   "Wrong: Patterns are not \"good\" across the board; they promote certain qualities and weaken others. A cache, for example, improves performance but complicates consistency – which is why selection is driven by the quality goals.",
   "Correct: Every pattern has advantages and disadvantages and fits only certain problems and contexts. A wrongly chosen pattern brings the drawbacks without the benefits being needed – such as microservices for a small team with a simple domain.",
   "Wrong: Unnecessary patterns increase complexity without solving a concrete problem. A pattern is used where it addresses an actual problem – not to combine as many as possible.",
   "Correct: A pattern name like \"adapter\" or \"pipes and filters\" conveys a whole solution idea including its trade-offs in one word. This makes discussions and documentation in the team shorter and more precise."
  ],
  "explanation": "Patterns bundle experience and create vocabulary, but have trade-offs. They are chosen to fit problem and quality goals – combining many patterns does not automatically make a design better."
 },
 "c3q37": {
  "q": "Which statements about a domain-oriented partitioning (e.g., bounded contexts in DDD) are correct?",
  "options": [
   "A term such as “customer” must have the same meaning and the same attributes in all bounded contexts.",
   "Business boundaries can run across technical layers.",
   "Building blocks are cut along business boundaries/domains, not primarily by technical layers.",
   "Every bounded context must be implemented as a separate microservice.",
   "A bounded context delimits a model with its own internally consistent language (ubiquitous language)."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Wrong: The very core of the bounded context concept is that a term may be modelled differently in each context. \"Customer\" can have different attributes in sales than in accounting – one uniform model for everyone would become unwieldy and tightly coupled.",
   "Correct: A business building block such as \"order\" typically contains its own parts of UI, logic and persistence. The business boundary therefore runs vertically through the technical layers instead of coinciding with them.",
   "Correct: With domain-oriented partitioning, building blocks follow domains and business capabilities, not technology like \"UI\", \"logic\", \"database\". Functional changes thus usually stay limited to one building block.",
   "Wrong: Bounded contexts are a domain concept, not a deployment rule. They can just as well be implemented as modules of a (modular) monolith; microservices are only one possible implementation.",
   "Correct: Within a bounded context all terms have an unambiguous, consistent meaning shared by domain experts and developers (ubiquitous language). The context marks the boundary within which this model applies."
  ],
  "explanation": "Domain-oriented cut: building blocks along domains, across technical layers; each bounded context has its own language and may model terms differently. Implementation as a microservice is possible but not mandatory."
 },
 "c3q38": {
  "q": "Which statements about encapsulation are correct?",
  "options": [
   "The internal state is only accessible via a defined interface; internals remain hidden.",
   "Data and the functions operating on them are combined into one unit.",
   "Encapsulation and information hiding are identical; both refer exclusively to hiding data.",
   "Encapsulation allows changing the internal representation without breaking users of the interface.",
   "Encapsulation is achieved as soon as all fields are private and made accessible via public getters and setters."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Correct: With encapsulation, users access an object or module only via the defined interface. The internal details remain hidden, so nobody can come to depend on them.",
   "Correct: Encapsulation combines data and the operations working on them into one unit. This keeps the logic that keeps the data consistent in one place instead of scattered across the system.",
   "Wrong: The terms are closely related, but not identical. Information hiding (Parnas) hides every design decision likely to change – including algorithms or formats, not only data; encapsulation is one means of achieving it.",
   "Correct: Because users only know the interface, the internal representation can be changed – for example from a list to a map. As long as the interface does not change, all users keep working.",
   "Wrong: Private fields with getters and setters for every field still expose the internal representation. Formally everything is private, but in fact users depend on the data structure – real encapsulation offers domain operations instead of field access."
  ],
  "explanation": "Encapsulation bundles data and operations and allows access only via an interface, so that the representation remains changeable. Blanket getters/setters undermine this; information hiding goes beyond data."
 },
 "c3q39": {
  "q": "An existing payment service provider offers an interface that does not match the one expected by your system. Which pattern applies here?",
  "options": [
   "Proxy – it places a stand-in with the same interface in front of the actual object.",
   "Facade – it provides simplified access to a complex subsystem.",
   "Adapter – it translates between the expected and the existing interface without changing either.",
   "Publish/subscribe – it fully decouples sender and receiver via events."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: A proxy has the same interface as the target object and only controls access to it. The problem here, however, is precisely a mismatching interface – a proxy does not solve that.",
   "Wrong: A facade simplifies access to a complex subsystem. It aims at simplification, not at adapting an existing interface to a fixed expected signature.",
   "Correct: The adapter bridges exactly the incompatibility of two interfaces: it offers the interface your system expects and translates the calls to that of the payment provider. Neither side has to be changed.",
   "Wrong: Publish/subscribe decouples sender and receiver via events. But it does not change the fact that the provider's interface does not match the expected one – the translation would still be needed."
  ],
  "explanation": "For incompatible interfaces the adapter is the fitting pattern. Facade (simplification), proxy (same interface, stand-in) and publish/subscribe (event decoupling) solve other problems – here they are plausible but wrong candidates."
 },
 "c3q40": {
  "q": "Which of these are among the goals of modularization?",
  "options": [
   "Reusability of clearly cut building blocks.",
   "Local limitation of the impact of changes.",
   "Independent development of individual parts by different people/teams.",
   "Designing building blocks as generically as possible to achieve maximum reuse.",
   "Better runtime performance through fewer calls between building blocks."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: A building block with a clear responsibility and a clean interface can also be used in another context. Reusability is thus a consequence of good modularization.",
   "Correct: When internals are hidden behind interfaces, a change usually stays limited to the affected module. This is one of the core goals of modularization.",
   "Correct: Clearly delimited modules with defined interfaces can be developed in parallel by different people or teams. They only need to agree on the interfaces, not on every detail.",
   "Wrong: Over-generalisation increases complexity and often produces functionality nobody needs. Reusability follows from a clear cut, not from maximum genericity – the latter is rather a risk.",
   "Wrong: Modularization tends to lead to more calls across interfaces, not fewer. Performance is therefore not a goal of modularization but, if relevant, a trade-off to be weighed deliberately."
  ],
  "explanation": "Goals of modularization: independent development, reusability and local changes. Performance is rather a trade-off, and maximum genericity is not a goal but a risk."
 },
 "c3q41": {
  "q": "Which statements about the trade-off with heavy reuse are correct?",
  "options": [
   "Reuse lowers coupling, since common functionality exists in only one place.",
   "Broadly reusable building blocks often become more general and thus more complex.",
   "A building block should be generalized for reuse as early as possible, even before concrete further users are known.",
   "Many users of a building block increase the (afferent) coupling to it and make changes harder.",
   "A reusable building block needs stable, well-versioned interfaces."
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Wrong: Reuse does avoid duplication, but it does not lower coupling. On the contrary: all users now depend on the same building block, and every change to it affects them all.",
   "Correct: For a building block to suit many users, it has to cover their different needs, e.g. through configuration, parameters or extension points. This generality costs complexity in development and use.",
   "Wrong: Premature generalisation without concrete need is over-engineering (YAGNI – \"You Ain't Gonna Need It\"). One often anticipates the wrong variation points; it is more sensible to generalise once concrete further users exist.",
   "Correct: Each user is an incoming (afferent) dependency on the building block. The more there are, the more places must be considered when changing it – the building block becomes hard to change.",
   "Correct: Because many users depend on a reused building block, its interface must not change constantly. Clean versioning allows evolution without forcing all users to adapt at the same time."
  ],
  "explanation": "Heavy reuse has costs: more generality and complexity, higher afferent coupling, need for stable interfaces. It avoids duplication but does not lower coupling; premature generalization violates YAGNI."
 },
 "k12": {
  "q": "Does the characteristic promote maintainability or harm it?",
  "categories": [
   "Promotes maintainability",
   "Harms maintainability"
  ],
  "rows": [
   "Widely spread, duplicated code (violation of DRY)",
   "Cyclic dependencies between multiple building blocks",
   "Clearly defined, stable interfaces between building blocks",
   "High cohesion within the building blocks"
  ],
  "explanation": "Clear interfaces and high cohesion promote maintainability. Cyclic dependencies and duplication make changes harder and violate loose coupling and DRY respectively."
 },
 "c3q42": {
  "q": "What is advisable in design regarding domain and technical architecture?",
  "options": [
   "First define the technical cut (frameworks, layers), since it sets the boundaries for the business cut.",
   "Keep the business and technical cut identical, so that each business component corresponds to exactly one technical layer.",
   "First understand the business cut (problem space) and align the technical solution with it.",
   "Align the business cut with the tables of the existing database schema, since the data is the most stable."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: Defining the technology first forces the business domain into technical boundaries. A functional change is then spread across many building blocks instead of staying local.",
   "Wrong: Business components typically run across the technical layers, because a component like \"order\" needs parts in UI, logic and persistence. Equating the two cuts tears the business logic apart across the layers.",
   "Correct: The business cut follows the problem space and usually stays stable longer than the technology. Aligning the technical solution with it keeps functional changes local, and technology serves the domain rather than the other way round.",
   "Wrong: An existing database schema often reflects historical or technical decisions, not business responsibilities. A cut along tables inherits this legacy and leads to data-driven instead of responsibility-oriented building blocks."
  ],
  "explanation": "First understand the business cut, then align the technology with it. Technology first, a cut by database tables or equating business component with layer lead to structures that are hard to change."
 },
 "c3q43": {
  "q": "What does the \"Miller number\" (7±2) indicate when structuring an architecture?",
  "options": [
   "7±2 specifies the ideal number of interface operations per building block.",
   "The number of elements that can be grasped at once is limited – the decomposition per level should stay manageable.",
   "7±2 is an empirically proven upper limit for the optimal team size in design.",
   "Miller prescribes that a system may consist of at most seven modules."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: Miller's number says nothing about the number of interface operations. It describes the limited capacity of short-term memory for units of information that can be grasped at once.",
   "Correct: People can only grasp about 7±2 units of information (\"chunks\") at the same time. For architecture this means: each decomposition level should contain only a manageable number of building blocks – if there are more, they are grouped hierarchically.",
   "Wrong: This transfers the number to a different area. Miller refers to units of information that can be grasped at once, not to team sizes.",
   "Wrong: 7±2 is not a hard upper limit on the number of modules in a system, but a cognitive rule of thumb per level of representation. A large system can have many modules if they are organised hierarchically."
  ],
  "explanation": "Miller describes the limited number of chunks that can be grasped simultaneously (~7±2) – an argument for a manageable decomposition per level. It is not a fixed upper limit for modules, not a team size, and not a rule for interface operations."
 },
 "c3q44": {
  "q": "Which statement about the approach to architecture design is correct?",
  "options": [
   "An architecture cannot be derived purely linearly from the requirements; design proceeds iteratively and exploratively.",
   "The design should be as complete as possible before first feedback (e.g. via prototypes) is obtained, so that the feedback rests on a stable basis.",
   "Design decisions should only be revised when requirements change – new insights alone are not sufficient reason.",
   "When using a proven reference model, you can largely dispense with your own trade-offs."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Requirements are often incomplete, contradictory or changing, and many consequences of a decision only become visible later. That is why design proceeds iteratively: design, evaluate, obtain feedback and go back if needed.",
   "Wrong: Early feedback, e.g. via prototypes, is precisely the purpose of an iterative approach. Whoever first creates a complete design discovers wrong assumptions late – when corrections are particularly expensive.",
   "Wrong: Not only changed requirements but also new insights, e.g. from prototypes, tests or operation, can justify a revision. Keeping a decision despite better knowledge increases risk.",
   "Wrong: Reference models are starting points, not finished solutions. They must be adapted to the concrete context and the quality goals – weighing the trade-offs remains the task of the architecture."
  ],
  "explanation": "Architecture design is iterative and exploratory: obtain feedback early, adapt reference models and revise decisions based on new insights too."
 },
 "c3q45": {
  "q": "How is the goal of \"loose coupling\" correctly understood?",
  "options": [
   "Lower coupling reduces the impact of changes and eases isolated testing.",
   "Coupling should be as low as possible but as strong as functionally necessary – without coupling there would be no collaboration.",
   "Loose coupling is achieved above all by distributing the building blocks across different servers.",
   "Loose coupling and high cohesion denote the same goal, just named differently.",
   "Ideal is a system in which, as far as possible, no building block depends on another."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Correct: The less a building block knows about others, the less often a change to them triggers changes in it. It can also be tested in isolation, because only a few dependencies have to be replaced by test doubles.",
   "Correct: Building blocks have to collaborate, and that requires dependencies. The goal is therefore not zero coupling, but as little coupling as possible while keeping as much as functionally necessary.",
   "Wrong: Distribution across servers does not change the business dependency between building blocks. It even adds new kinds of coupling, e.g. to the network, availability and data formats.",
   "Wrong: The two terms are related but different: coupling describes the relationships between building blocks, cohesion the togetherness within one building block. Both are pursued – loose coupling and high cohesion.",
   "Wrong: Without dependencies, building blocks could not collaborate and the system could not deliver its overall function. The goal is appropriate coupling, not none."
  ],
  "explanation": "Loose coupling means: as low as possible, as strong as functionally necessary. It is not the same as high cohesion and does not come from distribution across servers, but from a good cut and clear interfaces."
 },
 "c3q46": {
  "q": "Which kind of relationship tends to produce the strongest coupling between building blocks?",
  "options": [
   "Delegation to an object referenced via an interface.",
   "Communication via a narrow, clearly defined interface.",
   "Implementation inheritance (the subclass depends on internal details of the base class).",
   "Loose, event-based (asynchronous) notification."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: Delegation to an object that is only known via an interface keeps coupling low. The caller depends only on the contract, not on the concrete implementation, which remains replaceable.",
   "Wrong: A narrow, clearly defined interface couples only loosely, because the building blocks need to know little about each other. That is the ideal, not the strongest form of coupling.",
   "Correct: With implementation inheritance the subclass depends on internal details of the base class, such as protected fields or the order in which methods are called. If the base changes, the subclass can silently break (fragile base class) – hence \"composition over inheritance\".",
   "Wrong: Asynchronous, event-based notification couples particularly loosely, since the sender neither needs to know the receiver nor wait for it. Only the event format and its meaning remain shared."
  ],
  "explanation": "Implementation inheritance couples very strongly to the internals of the base class. Interfaces, events, and delegation via interfaces couple far more loosely – hence \"composition over inheritance\"."
 },
 "c3q47": {
  "q": "What applies to dynamic coupling (resolved only at runtime)?",
  "options": [
   "It is often harder to detect with static analysis tools than static coupling.",
   "It makes building blocks independent of each other, since they no longer know each other at compile time.",
   "If sender and receiver communicate via a message broker, they no longer depend on each other functionally.",
   "What matters is the underlying business dependency, not the time at which it is resolved.",
   "The dependency is often only shifted or hidden, not really reduced."
  ],
  "correct": [
   0,
   3,
   4
  ],
  "optExpl": [
   "Correct: Dynamic coupling only arises at runtime, e.g. via messages, configuration or reflection. That is why it often does not appear in static code dependency analyses and easily goes unnoticed.",
   "Wrong: The fact that building blocks do not know each other at compile time does not mean they are functionally independent. Whoever expects a particular response or data structure still depends on the other building block – just less visibly.",
   "Wrong: A message broker decouples in time and technically, but not functionally. The message format and the business expectations remain shared dependencies – if the sender changes the format, the receiver still breaks.",
   "Correct: What counts when assessing coupling is how strongly a building block relies functionally on another. Whether this dependency is resolved at compile time or at runtime does not change its strength.",
   "Correct: Dynamic coupling often merely shifts the dependency from code into configuration or messages instead of reducing it. Because it is hidden, it can even be riskier during changes than obvious static coupling."
  ],
  "explanation": "Dynamic coupling (e.g. via messages or reflection) does not necessarily reduce the underlying business dependency but often hides it – and is harder to detect statically. Even via a broker, format and semantics remain shared dependencies."
 },
 "c3q48": {
  "q": "Which statements about incoming and outgoing dependencies (afferent/efferent) are correct?",
  "options": [
   "Many incoming (afferent) dependencies make a building block “stable” – changes to it are risky.",
   "Many outgoing (efferent) dependencies tend to make a building block “unstable” or susceptible to change.",
   "“Stable” in the sense of this metric means hard to change, not error-free or finished.",
   "A building block with many outgoing dependencies is stable because it relies on many proven building blocks.",
   "A building block with many incoming dependencies should be as concrete as possible, since it is often used directly."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Many incoming (afferent) dependencies mean many users who would be affected by any change. The building block is therefore \"stable\" in the sense that it can only be changed with great effort.",
   "Correct: A building block with many outgoing (efferent) dependencies is affected by changes to many other building blocks. It is therefore considered \"unstable\", i.e. susceptible to change.",
   "Correct: \"Stable\" here only describes how hard a building block is to change because of its users. The metric says nothing about quality, freedom from errors or maturity.",
   "Wrong: This misreads \"stable\" as \"reliable\". Many outgoing dependencies make a building block unstable, because changes to any of those building blocks can hit it – no matter how proven they are.",
   "Wrong: Stable, heavily used building blocks should rather be abstract, e.g. interfaces. That way they can be extended by new implementations without having to change them – a concrete, heavily used building block, in contrast, is hard to evolve."
  ],
  "explanation": "Afferent (incoming) = many users → stable, i.e. hard to change; such building blocks should rather be abstract. Efferent (outgoing) = many own dependencies → unstable, i.e. susceptible to others' changes."
 },
 "c3q49": {
  "q": "Which statements about cross-cutting concepts are correct?",
  "options": [
   "Cross-cutting concepts are best defined only once the first building blocks are finished, in order to learn from practice.",
   "Examples include persistence, security, logging and error handling.",
   "They should be solved uniformly/consistently system-wide to avoid uncontrolled growth.",
   "They have an overarching effect on many building blocks and cannot be cleanly encapsulated in a single building block.",
   "A cross-cutting concept is only needed once a topic occurs in truly all building blocks."
  ],
  "correct": [
   1,
   2,
   3
  ],
  "optExpl": [
   "Wrong: Defining cross-cutting concepts late means the first building blocks will already contain their own, inconsistent solutions. Expensive harmonisation then looms – which is why they are defined early and refined iteratively.",
   "Correct: Persistence, security, logging and error handling are typical cross-cutting topics. They affect many building blocks at once instead of belonging to a single business building block.",
   "Correct: If every building block solves a cross-cutting topic differently, uncontrolled growth results: inconsistent log formats, different error handling, security gaps. A uniform concept ensures consistency and eases maintenance and operation.",
   "Correct: Cross-cutting topics run through many building blocks and cannot be cleanly encapsulated in a single one. That is why they are described in a separate concept (in arc42 section 8) rather than separately for each building block.",
   "Wrong: A concept already pays off when a topic affects many building blocks and should be solved uniformly. Waiting for \"truly all\" accepts inconsistent individual solutions."
  ],
  "explanation": "Cross-cutting concepts affect many building blocks and are defined early and uniformly (e.g. persistence, security, logging). If defined late, inconsistent individual solutions arise."
 },
 "c3q50": {
  "q": "How do ACID and BASE differ as consistency approaches in persistence?",
  "options": [
   "BASE means that data may be lost as long as the system remains available.",
   "ACID belongs to NoSQL databases, BASE to relational databases.",
   "BASE stands for stricter transaction guarantees than ACID.",
   "ACID emphasizes strict consistency (classically relational); BASE favors availability and eventual consistency (often NoSQL)."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: Eventual consistency means that replicas reach a consistent state with a delay, not that data may be lost. BASE relaxes the timing of consistency, not the durability of data.",
   "Wrong: This swaps the typical assignments. ACID is classic for relational databases, BASE for many distributed NoSQL systems.",
   "Wrong: It is the other way round: BASE relaxes the consistency guarantees compared to ACID. In return it gains availability and scalability in distributed systems.",
   "Correct: ACID (atomicity, consistency, isolation, durability) guarantees strict transactional consistency, as is common in relational databases. BASE (basically available, soft state, eventual consistency) favours availability and accepts temporary inconsistency, as is often the case with NoSQL systems."
  ],
  "explanation": "ACID: strict transactional consistency, classically relational. BASE: availability and eventual consistency, often NoSQL. Eventual consistency means delayed consistency, not data loss."
 },
 "c3q51": {
  "q": "What does the CAP theorem state for distributed data storage?",
  "options": [
   "In the event of a network partition, you must trade off consistency against availability – not all three goals can be fully achieved at the same time.",
   "You must decide generally and permanently for two of the three properties, even when no network partition is currently present.",
   "With sufficiently redundant hardware, all three properties can be achieved at the same time even during a partition.",
   "CAP describes the trade-off between cost, availability and performance of distributed systems."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: When a network partition occurs, separated nodes cannot coordinate. The system must then either reject requests to stay consistent, or answer and risk stale data – consistency and availability cannot both be fully achieved.",
   "Wrong: The trade-off is only forced by a partition. As long as the network works, consistency and availability can be achieved together – the shortened reading \"pick two of three\" is misleading.",
   "Wrong: CAP describes a fundamental limit of distributed systems that cannot be removed by hardware. Redundancy reduces the probability of partitions, but does not change the trade-off when one occurs.",
   "Wrong: The letters are expanded incorrectly. C stands for consistency, A for availability and P for partition tolerance – cost and performance are not the subject of the theorem."
  ],
  "explanation": "CAP: during a network partition you must choose between consistency and availability. Without a partition both are possible; hardware does not lift the limit."
 },
 "c3q52": {
  "q": "In layered architectures, what is called a \"layer bridge\" (skipping a layer)?",
  "options": [
   "A call from a lower to a higher layer via a callback interface.",
   "A building block that connects two layers by belonging to both at the same time.",
   "The strict rule that a layer may never be skipped.",
   "The deliberate bypassing of an intermediate layer – allowed in the relaxed approach, but it creates additional dependencies and should be documented."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: A call from bottom to top via a callback interface is a callback, e.g. following the observer pattern. It serves to avoid upward dependencies and does not skip a layer.",
   "Wrong: A building block should belong to exactly one layer, otherwise the layer boundaries blur. This has nothing to do with skipping a layer.",
   "Wrong: This describes strict layering, i.e. precisely the prohibition of bridging. Layer bridging is the exception to it.",
   "Correct: With layer bridging a layer bypasses an intermediate layer and directly accesses a lower one, e.g. for performance reasons. The relaxed layer model allows this, but it creates additional dependencies and should therefore be decided deliberately and documented."
  ],
  "explanation": "Layer bridging = deliberately skipping an intermediate layer; allowed in the relaxed layer model, but increases dependencies and should be documented. Do not confuse with callbacks upward."
 },
 "c3q53": {
  "q": "Which rules apply ideally to a strict layered architecture?",
  "options": [
   "In the strict variant a layer may only use the layer directly beneath it (no skipping).",
   "Calls only go from top to bottom; the reverse creates an unwanted cycle.",
   "Two mutually dependent building blocks are distributed across two layers to resolve the cycle.",
   "In the strict variant a layer may use all lower layers, as long as no upward dependencies arise.",
   "Building blocks of one layer are ideally at a similar level of abstraction."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Correct: In strict layering each layer only knows the layer directly beneath it. Changes to a layer thus stay limited to its direct neighbourhood, and each layer can be replaced more easily.",
   "Correct: Dependencies point only downwards. If a lower layer called a higher one, a cycle would arise and the layers could no longer be replaced or tested independently.",
   "Wrong: Distributing the blocks across two layers does not remove the cycle; it becomes a layering violation, because one dependency then points upwards. It is resolved via abstraction (e.g. an interface), dependency inversion or merging the building blocks.",
   "Wrong: This describes the relaxed variant, in which a layer may access all lower layers. In the strict variant only the layer directly beneath is allowed.",
   "Correct: Layers group building blocks with a similar level of abstraction, such as presentation, business logic or infrastructure. This makes the structure understandable and allows each layer to be considered on its own."
  ],
  "explanation": "Strict layering: dependencies only downward, only to the layer directly beneath, similar abstraction level per layer. Using all lower layers is the relaxed variant; cycles are not resolved by distributing across layers."
 },
 "c3q54": {
  "q": "Which disadvantage is typical of deeply nested layered architectures?",
  "options": [
   "Passing calls through many layers can cost performance, and changes often run through several layers.",
   "Each layer must be operated on its own server, which makes operations more expensive.",
   "Layered architectures cannot be combined with a business-oriented cut.",
   "Higher layers must know the implementation details of the lower layers in order to call them."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Each layer is an additional indirection through which calls are passed – this can cost performance. In addition, functional changes, such as a new data field, often run through several layers.",
   "Wrong: This confuses logical layers with physical tiers. Layers are a logical structure; whether and how they are distributed across servers is a separate decision of the deployment view.",
   "Wrong: Layers and a business-oriented cut do not exclude each other. Business components can be layered internally, or layers can be subdivided by domain.",
   "Wrong: Higher layers use the interfaces of the lower layers, not their implementation details. It is precisely this hiding that allows a layer to be replaced without changing the one above it."
  ],
  "explanation": "Deep layering costs indirection and often makes changes run through several layers. Layers are logical structures – not tied to servers and combinable with a business-oriented cut."
 },
 "c3q55": {
  "q": "What distinguishes active from passive filters in a pipes-and-filters architecture?",
  "options": [
   "Active filters run only sequentially, passive ones only in parallel.",
   "Active filters know each other, passive filters are isolated.",
   "Active filters modify data, passive filters let it pass through unchanged.",
   "Active filters pull or push data themselves; passive filters are supplied with data or read out from the outside."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: Whether a filter is active or passive says nothing about sequential or parallel execution. The distinction only concerns who triggers the data transport; concurrency is possible with both variants.",
   "Wrong: In pipes and filters, filters never know each other – whether active or passive. They are only connected via pipes, and exactly this isolation makes them replaceable.",
   "Wrong: This confuses data processing with control of the data flow. Both active and passive filters transform data; the difference lies in who drives the flow.",
   "Correct: An active filter drives the data flow itself by pulling data from the pipe or pushing it onwards. A passive filter waits until it is supplied with data or read out from the outside."
  ],
  "explanation": "The difference lies in the control of the data flow: active filters drive the transport themselves, passive ones wait to be supplied/read out. Both process data and do not know each other."
 },
 "c3q56": {
  "q": "Which statements about pipes and filters are correct?",
  "options": [
   "Filters do not know each other and are decoupled via pipes – thus easily replaceable and reusable.",
   "The filter stages can work in parallel/concurrently, since they are only connected via data streams.",
   "Error handling is demanding, since a filter does not know the history of the data.",
   "The pattern is particularly suitable for highly interactive user dialogs.",
   "The pattern is particularly suitable when steps frequently need access to intermediate results of other, non-adjacent steps."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: A filter only knows its input and output format, not its neighbours. Because the connection runs exclusively via pipes, a filter can be replaced or reused in another chain.",
   "Correct: Since the stages are only connected via data streams, each stage can work as soon as data is available. One filter can already process the next record while the following filter is still working on the previous one.",
   "Correct: A filter only sees its input stream and does not know what happened before. If an error occurs in the middle of the chain, it is hard to handle it sensibly or to undo what has already been processed.",
   "Wrong: Pipes and filters suits linear, batch-like or stream-like processing. Interactive dialogs with changing flows and follow-up questions can hardly be mapped onto a fixed filter chain.",
   "Wrong: Each filter only processes its input stream; accessing intermediate results of distant stages contradicts the pattern. If such cross-access is needed, a repository or blackboard approach fits better."
  ],
  "explanation": "Pipes and filters: independent filters connected via data streams – easily replaceable and concurrent, but with difficult error handling. Unsuitable when steps need other intermediate results or the flow is interactive."
 },
 "c3q57": {
  "q": "What should be considered when cutting microservices along business lines?",
  "options": [
   "Along the tables of the existing data model, i.e. one service per table.",
   "Each service should be independently deployable and have a clearly delimited business responsibility.",
   "By business criteria (e.g. bounded context) – too fine a cut leads to “nano-services” with high overhead.",
   "Along the existing team/organizational structure, regardless of business boundaries.",
   "So small that each service offers exactly one operation, to achieve maximum independence."
  ],
  "correct": [
   1,
   2
  ],
  "optExpl": [
   "Wrong: Cutting along tables follows the technical data structure, not the business domain. Business processes then need many services at once – the result is fragmented, tightly coupled services.",
   "Correct: A service should be changeable and deployable without coordinating with others. This only works if it has a clearly delimited business responsibility and does not constantly have to be changed together with others.",
   "Correct: Business boundaries such as bounded contexts ensure high cohesion within and loose coupling between services. If the cut is too fine, \"nano-services\" emerge whose communication and operations overhead exceeds their benefit.",
   "Wrong: According to Conway, team structure influences system structure, and this should be considered when cutting. But if business boundaries are ignored, services emerge that must be adapted together for every business change.",
   "Wrong: One service per operation does not maximise independence but the number of interfaces. Operations that belong together must then constantly communicate with each other – coupling and overhead increase."
  ],
  "explanation": "Microservices are cut by business area (e.g. by bounded contexts), independently deployable and with clear responsibility. Cuts by tables, by single operations or only by team structure lead to coupling and overhead."
 },
 "c3q58": {
  "q": "Which challenges do microservices typically bring with them?",
  "options": [
   "Data consistency across service boundaries (distributed transactions) becomes more difficult.",
   "Higher operations and deployment effort due to many independent units.",
   "Dependence on the network with additional latency and new (partial) failure sources.",
   "Shared libraries are excluded, since services may not share any code at all.",
   "The business complexity of the domain decreases, since it is distributed across many services."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: Each service manages its own data, so there is no simple local transaction across several services. Consistency must therefore be achieved e.g. via sagas or eventual consistency, which is considerably more complex.",
   "Correct: Many independently deployable units each need a build pipeline, monitoring, logging and operations. Without a high degree of automation, operational effort grows with the number of services.",
   "Correct: Calls that were local in the monolith now run over the network. This brings latency and partial failures that must be handled with timeouts, retries or circuit breakers.",
   "Wrong: Shared libraries are not forbidden, e.g. for technical cross-cutting concerns. However, they increase coupling because version changes affect several services – so they are used deliberately and sparingly.",
   "Wrong: The business complexity of the domain remains the same no matter how it is distributed. On top of that comes the complexity of distribution itself – communication, consistency and operations."
  ],
  "explanation": "Microservices bring operations effort, network risks and harder consistency. Business complexity does not disappear through distribution; shared libraries are possible, but a deliberate coupling decision."
 },
 "c3q59": {
  "q": "Which statement about the interplay of microservices is correct?",
  "options": [
   "Services should communicate synchronously as much as possible in order to guarantee strong consistency at all times.",
   "Services should be loosely coupled and communicate via technology-neutral interfaces.",
   "Services should exchange data via a shared database, since this makes consistency possible without distributed transactions.",
   "All services should use the same data format for their internal persistence to ease integration."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: Extensive synchronous communication couples services in time: if one fails or is slow, its callers are affected too. Strong consistency across services is thus bought with lower availability and independence.",
   "Correct: Loose coupling allows services to be changed, deployed and scaled independently. Technology-neutral interfaces such as HTTP/REST or messaging ensure that each service can choose its own technology.",
   "Wrong: A shared database does avoid distributed transactions, but it couples the services via the shared schema. A schema change then affects all services, so independent changeability is lost.",
   "Wrong: How a service stores data internally is an implementation detail and remains its own decision. Only the formats at the interfaces are agreed upon; a uniform internal format would couple the services unnecessarily."
  ],
  "explanation": "Microservices communicate loosely coupled via technology-neutral interfaces. A shared database solves consistency problems but destroys independence; internal formats remain the service's own business."
 },
 "k14": {
  "q": "Assign each property to the matching pattern.",
  "categories": [
   "Layered architecture",
   "Pipes & filters"
  ],
  "rows": [
   "Well suited for stepwise data-stream or batch processing.",
   "The steps do not know each other and are freely interchangeable.",
   "Vertical arrangement; upper levels use services of the ones below.",
   "Changes to deep levels can propagate upward.",
   "Independent processing steps, chained via data streams.",
   "Calls go only from top to bottom, otherwise a cycle arises."
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
   "Displaying the detail page of a single product.",
   "Calculating a specific discount in the shopping cart.",
   "Authentication and authorization.",
   "Persistence or uniform data access.",
   "Uniform error handling across building blocks.",
   "Logging throughout the entire system."
  ],
  "explanation": "Logging, security, persistence, and error handling act system-wide across many building blocks (cross-cutting concepts). Discount calculation and product detail display are concrete functional features."
 },
 "c3q60": {
  "q": "Which statements about short feedback loops (prototypes, early integration, tests) in architecture design are correct?",
  "options": [
   "A prototype can deliberately serve as a “throwaway” artifact, only to test an assumption.",
   "They are particularly valuable for uncertain/risky decisions (risk-driven).",
   "They check assumptions and risks early and enable adjustments when new knowledge emerges.",
   "Throwaway prototypes are worthwhile especially when they later serve as the skeleton for the production code.",
   "Feedback loops replace an architecture evaluation, since prototypes uncover the relevant risks anyway."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: A throwaway prototype answers a specific open question, e.g. whether a technology can handle the required load. Its value lies in the insight, not in the code – afterwards it is deliberately discarded.",
   "Correct: Feedback loops cost effort, so they are used where a wrong decision would be most expensive. Risky or uncertain decisions are thus secured early, before much is built on them.",
   "Correct: Early feedback shows whether assumptions about technology, load or requirements hold. As long as little has been built on them, the design can be adapted cheaply when new knowledge emerges.",
   "Wrong: A throwaway prototype is optimised for quick insight and deliberately contains shortcuts. If it becomes the skeleton of the production code, those weaknesses are carried over – in that case an evolutionary prototype would have been the right choice from the start.",
   "Wrong: Prototypes test individual, specifically selected assumptions. An architecture evaluation systematically examines the architecture against all important quality goals – the two complement each other, neither replaces the other."
  ],
  "explanation": "Short feedback loops test assumptions early and risk-driven; throwaway prototypes clarify a specific question and are then discarded. They complement an architecture evaluation but do not replace it."
 },
 "c3q61": {
  "q": "What characterizes an \"evolutionary architecture\" with fitness functions?",
  "options": [
   "Evolutionary architecture dispenses with predefined quality goals; the structure results from the fitness functions.",
   "Automated criteria (fitness functions) continuously check whether important quality characteristics are preserved when changes are made.",
   "Fitness functions replace every form of manual architecture evaluation or review.",
   "Fitness functions are manual checklists that the architecture team works through before each release."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: Fitness functions are derived from the quality goals – they make these goals verifiable automatically. Without predefined goals there would be nothing for a fitness function to check against.",
   "Correct: Fitness functions are automated checks, such as architecture tests for forbidden dependencies or load tests in the pipeline. They run with every change and immediately show when an important quality characteristic is lost.",
   "Wrong: Fitness functions only check measurable, automatable criteria. Qualitative aspects such as the appropriateness of decisions or new risks still require reviews and evaluations by people.",
   "Wrong: A manual checklist before a release is precisely not a fitness function. Their defining feature is automation, e.g. in the build or CI pipeline, so the check runs continuously and without extra effort."
  ],
  "explanation": "Evolutionary architecture secures important qualities with automated fitness functions derived from the quality goals. They complement manual reviews but do not replace them."
 },
 "c3q62": {
  "q": "Which statements about the relationship between feedback and risk in design are correct?",
  "options": [
   "The order of decisions should be guided by risk, not by mere construction-plan progress.",
   "Prototypes or spikes for early risk mitigation are only worthwhile in very large projects.",
   "It is most efficient to first implement the simple, well-understood parts in order to achieve visible progress quickly.",
   "The later feedback comes, the more expensive corrections tend to become.",
   "Risky or uncertain decisions should be secured early with feedback (risk-driven)."
  ],
  "correct": [
   0,
   3,
   4
  ],
  "optExpl": [
   "Correct: Clarifying the riskiest questions first reveals early whether the design holds. Mere construction-plan progress, in contrast, may build a lot of work on an assumption that later turns out to be wrong.",
   "Wrong: Whether a spike is worthwhile depends on the risk, not on the project size. If an uncertain assumption carries the architecture, a small spike is the cheapest safeguard even in small projects.",
   "Wrong: This does create visible progress quickly, but it pushes the risks to the end. The real problems then surface exactly where corrections are most expensive.",
   "Correct: The more that has already been built on a decision, the more has to be changed when correcting it. That is why late corrections tend to be more expensive than early ones.",
   "Correct: A risk-driven approach secures uncertain decisions early, e.g. through prototypes, spikes or measurements. This keeps corrections cheap if an assumption turns out to be wrong."
  ],
  "explanation": "Obtain feedback early and risk-driven: secure risky things first, because late corrections are expensive. Building simple things first pushes risks back; spikes are worthwhile in smaller projects too."
 },
 "c3q63": {
  "q": "Which statements about designing a good interface are correct?",
  "options": [
   "It should offer as many operations as possible so that it suffices for all conceivable future users.",
   "The contract only comprises the signatures; pre-/postconditions and error behavior do not belong to it.",
   "It defines a stable “contract” (the WHAT) and hides the internal implementation (the HOW).",
   "A good interface mirrors the provider's internal data structure as 1:1 as possible.",
   "A good interface is easy to use correctly and hard to misuse."
  ],
  "correct": [
   2,
   4
  ],
  "optExpl": [
   "Wrong: An interface bloated in anticipation is harder to understand, use and change, because every operation has to be maintained. It should be functionally complete for its actual users, but not speculative.",
   "Wrong: Signatures alone only define the syntax. The contract also includes the semantics – pre-/postconditions, error behavior and possibly quality properties – otherwise users do not know what they can rely on.",
   "Correct: The interface describes WHAT a building block provides and hides HOW it does it (information hiding). As long as the contract stays stable, the implementation can change without affecting users.",
   "Wrong: If the interface mirrors the internal data structures 1:1, users depend directly on the implementation. Every internal change then becomes an interface change – the opposite of information hiding.",
   "Correct: A good interface guides users towards correct use, e.g. through clear names, sensible defaults and types that rule out wrong calls in the first place. This leads to fewer errors on the user side."
  ],
  "explanation": "A good interface is a stable contract including semantics and error behavior, hides the implementation and is easy to use correctly, hard to use wrongly. No stockpiling of operations and no 1:1 mapping of internals."
 },
 "c3q64": {
  "q": "Which trade-off exists in the granularity of interfaces?",
  "options": [
   "For local calls, coarse-grained interfaces are just as advantageous as for remote calls, since the overhead per call is the same.",
   "Fine-grained interfaces are flexible but create many calls (expensive when remote); coarse-grained ones bundle but are less flexible.",
   "The right granularity results solely from the provider's internal data structure.",
   "Fine-grained interfaces couple callers more loosely, since each operation does only little."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: The overhead per call is by no means the same: remote calls cost orders of magnitude more than local ones because of the network and serialisation. That is why coarse granularity pays off especially for remote interfaces.",
   "Correct: Fine-grained operations can be combined flexibly but require many calls – over the network this becomes expensive. Coarse-grained operations bundle work into few calls, but fit different use cases less flexibly.",
   "Wrong: The internal data structure is an implementation detail and should precisely not determine the interface. The right granularity depends on the users' use cases and on the communication path.",
   "Wrong: Many fine-grained calls often force the caller to know the provider's flow and order of operations. As a result, coupling tends to increase rather than decrease."
  ],
  "explanation": "Fine interfaces are flexible but create many calls – expensive with remote communication – and often couple to flows. Coarse ones bundle and are less flexible. The choice follows usage and communication path."
 },
 "c3q65": {
  "q": "Which statements about designing robust, long-lived interfaces are correct?",
  "options": [
   "Changes should be backward compatible where possible; otherwise versioning is needed.",
   "Being strict when sending and tolerant when receiving increases robustness (robustness principle).",
   "The robustness principle means accepting incoming data without validation as long as it can be processed.",
   "New optional fields are usually backward compatible; removing/renaming existing fields usually is not.",
   "Versioning only makes sense for external interfaces, not for internal interfaces used across teams."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Correct: Backward-compatible changes allow existing users to continue working unchanged. If a break is unavoidable, versioning makes it possible to offer the old and new versions in parallel for a while.",
   "Correct: The robustness principle (after Postel) says: send only correct, specification-compliant data yourself, but cope with e.g. unknown additional fields when receiving. This keeps communication from breaking at every small deviation.",
   "Wrong: Being tolerant when receiving means coping with unknown or optional parts, not skipping validation. Accepting input unchecked would be a security and correctness risk.",
   "Correct: Old users can simply ignore a new optional field, so additive changes are usually compatible. If a field is removed or renamed, users that expect it no longer find it and break.",
   "Wrong: What matters is not whether an interface is external or internal, but whether several independent users depend on it. Internal interfaces used across teams often need versioning or transition rules too."
  ],
  "explanation": "Robust interfaces are backward compatible or versioned, change additively and follow the robustness principle. Receiving tolerantly does not mean accepting unchecked; versioning can be necessary internally too."
 },
 "c3q66": {
  "q": "Which statements apply when an architecture is to deliberately meet a quality requirement such as „high availability“?",
  "options": [
   "Such tactics bring trade-offs (e.g. redundancy increases cost and complexity) that must be weighed consciously.",
   "Through deliberate design decisions or tactics (e.g. redundancy, failover) that contribute to the quality goal.",
   "Through redundant instances of the application building blocks; shared components such as the database or network play no role in this.",
   "Mainly through extensive tests before go-live that uncover possible failures.",
   "Through a microservice architecture, since it limits failures to individual services by itself."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Correct: Every tactic has its price: redundancy, for instance, increases cost, operational effort and complexity, e.g. through data synchronisation. These trade-offs must be weighed consciously against other quality goals.",
   "Correct: Quality requirements are achieved through deliberate design decisions or tactics that contribute to the goal. For availability these include redundancy, failover or monitoring with automatic restart.",
   "Wrong: Shared components such as the database or network are often single points of failure. Redundant application instances help little if they all depend on the same single database.",
   "Wrong: Tests can uncover weaknesses, but they do not create availability themselves. The ability to cope with failures must be enabled by the architecture through suitable structures.",
   "Wrong: An architectural style does not limit failures by itself. Without resilience measures such as timeouts or circuit breakers, failures can even cascade across service calls."
  ],
  "explanation": "High availability is achieved through targeted tactics such as redundancy and failover – including the shared components – while weighing their costs. Tests or an architecture style alone do not provide availability."
 },
 "c4q1": {
  "q": "Which statements about the central purposes of architecture documentation are correct?",
  "options": [
   "It makes important architecture decisions including their rationale traceable later on.",
   "It should mainly depict the current state; rationales and rejected alternatives distract from this and do not belong in it.",
   "It creates communication and shared understanding among the stakeholders.",
   "It supports onboarding, maintenance and well-founded further decisions.",
   "It provides binding proof that the required quality requirements are actually met."
  ],
  "correct": [
   0,
   2,
   3
  ],
  "optExpl": [
   "Correct: Code shows WHAT was built, but not WHY. Documented decisions with their rationale prevent someone from unknowingly reverting a deliberate decision later or repeating the same discussion.",
   "Wrong: The current state can, if necessary, be reconstructed from the code – rationales and rejected alternatives cannot. They are exactly what makes architecture documentation valuable, because they preserve knowledge that would otherwise be lost with the people.",
   "Correct: Documentation is first and foremost a means of communication. It gives all stakeholders a common basis and a shared vocabulary, so misunderstandings surface early.",
   "Correct: New team members get up to speed faster, and during maintenance and evolution changes can be checked against existing structures and decisions. This makes further decisions well-founded rather than gut-driven.",
   "Wrong: Documentation describes the architecture and the intended solution approaches, but it does not prove their effect. Whether quality requirements are met is only shown by architecture evaluation, tests and measurements."
  ],
  "explanation": "Architecture documentation serves communication, traceability (incl. rationales and rejected alternatives), onboarding and maintenance. It is not proof that qualities are met."
 },
 "c4q2": {
  "q": "How can arc42 be most accurately classified?",
  "options": [
   "As a standard that standardizes the binding concerns, stakeholders, and viewpoints of an architecture description.",
   "As a proven template or structuring scheme with twelve sections for the documentation of software architectures.",
   "As a method that systematically derives the appropriate architecture decisions from the quality goals.",
   "As a curated collection of proven architecture and design patterns for distributed systems."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: That describes ISO/IEC/IEEE 42010, which standardizes the conceptual framework (stakeholders, concerns, viewpoints). arc42 is not a standard but a pragmatic template that you fill in as needed.",
   "Correct: arc42 is a freely available, proven structuring scheme with twelve sections – from introduction and goals through context and building block view to risks and glossary. You only fill in the sections that are relevant for the particular system.",
   "Wrong: Systematically deriving decisions from quality goals is a design method (e.g. Attribute-Driven Design). arc42 says WHERE to record decisions, but not HOW to arrive at them.",
   "Wrong: A pattern collection (e.g. POSA or GoF) provides solution building blocks for design. arc42 contains no patterns; it only prescribes the structure of the documentation."
  ],
  "explanation": "arc42 is a structuring documentation template (12 sections). The conceptual standardization (concerns/viewpoints) is provided by 42010; deriving decisions is the task of design methods; pattern collections are again something different."
 },
 "c4q3": {
  "q": "Which statements about the context delimitation (context view) are correct?",
  "options": [
   "It contains only technical interfaces; business communication relationships are described by the requirements documentation.",
   "It deliberately treats the system as a black box and does not show its internal building block structure.",
   "It presents the business and/or technical interfaces of the system to its environment.",
   "Besides the external neighbors it also shows the most important internal subsystems, so that the interfaces can be assigned.",
   "It shows the system as a whole (black box) with its external neighbors (users, external systems)."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Wrong: Context delimitation comprises a business and a technical context. Which partners exchange which data in business terms is a central part of the architecture documentation and is not outsourced to the requirements documentation.",
   "Correct: The context view deliberately looks at the system from the outside. By hiding the internals, it directs attention to the system boundary and to the system's responsibility towards its environment.",
   "Correct: It describes what flows across the system boundary – in business terms (which information with whom) and/or technically (via which channels and protocols). This clarifies early what the system is responsible for and what it is not.",
   "Wrong: Internal subsystems belong in the building block view (level 1 and below), not in the context view. Mapping external interfaces to internal building blocks happens there; the context view stays at black-box level.",
   "Correct: The context view shows the system as a single black box surrounded by its neighbors such as users and external systems. It is thus the highest level of abstraction in the architecture documentation."
  ],
  "explanation": "The context view shows the system as a black box with its external neighbors and interfaces – business and technical. Internal subsystems belong in the building block view."
 },
 "c4q4": {
  "q": "Which statements about the building block view are correct?",
  "options": [
   "It shows the static decomposition of the system into building blocks (black/white box).",
   "It describes for each building block its responsibility and its interfaces.",
   "It shows on which nodes the individual building blocks are operated.",
   "It refines building blocks hierarchically as the white box of the contained building blocks.",
   "It defines the temporal order of calls between the building blocks."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Correct: The building block view describes the static structure – which building blocks the system consists of. Each building block is first shown as a black box and, where needed, as a white box with its internals.",
   "Correct: Each building block comes with what it is responsible for and which interfaces it offers or requires. Only this makes the decomposition understandable and allows building blocks to be developed independently.",
   "Wrong: Mapping software to computing nodes is the subject of the deployment view. The building block view is deliberately independent of infrastructure, so the same structure can be deployed in different ways.",
   "Correct: The building block view is hierarchical: the white box of a building block shows the contained building blocks, which in turn can be described as black boxes and refined further. This lets every reader enter at the level that suits them.",
   "Wrong: Temporal flows and call orders belong in the runtime view. The building block view only shows which building blocks exist and how they are structurally connected, not when they interact."
  ],
  "explanation": "The building block view shows the static, hierarchically refined decomposition with responsibilities and interfaces. Sequences belong in the runtime view, the node mapping in the deployment view."
 },
 "c4q5": {
  "q": "Which statements describe the runtime view correctly?",
  "options": [
   "The flow within a single building block (e.g. its algorithm), not the interplay of several building blocks.",
   "The mapping of the building blocks to physical execution nodes.",
   "The static decomposition of the system into its building blocks and their interfaces.",
   "The dynamic interplay of building blocks in selected concrete scenarios.",
   "Besides business flows, also startup, error or operational scenarios if they are architecturally relevant."
  ],
  "correct": [
   3,
   4
  ],
  "optExpl": [
   "Wrong: The runtime view shows precisely the interplay of several building blocks. Internal algorithms of a single building block are detailed design and belong, if anywhere, in its white-box description.",
   "Wrong: Mapping building blocks or artifacts to physical nodes is the deployment view. The runtime view describes behaviour, not infrastructure.",
   "Wrong: The static decomposition with interfaces is the building block view. The runtime view uses these building blocks but shows their dynamic behaviour over time.",
   "Correct: The runtime view uses selected, architecturally relevant scenarios to show how building blocks cooperate at runtime. You deliberately pick a few important flows instead of documenting every conceivable one.",
   "Correct: Besides business flows, startup, error handling or operational procedures can also be architecturally relevant. Such scenarios often show how quality goals like availability or robustness are achieved."
  ],
  "explanation": "The runtime view shows the interplay of building blocks in selected scenarios – business ones, but also startup, error cases or operations. Static decomposition, internal algorithms and node mapping belong elsewhere."
 },
 "c4q6": {
  "q": "What does the deployment view show?",
  "options": [
   "The mapping of the software artifacts onto infrastructure/nodes and their communication channels.",
   "The assignment of building blocks to the teams that develop and operate them.",
   "The order in which the components are started up when the system boots.",
   "The logical decomposition of the system into its business building blocks."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: The deployment view shows which software artifacts run on which nodes (servers, containers, devices) and via which channels they communicate. It is often shown for several environments such as test and production.",
   "Wrong: Assigning building blocks to teams is an organizational question, not technical infrastructure. It can be architecturally relevant (think Conway), but it is not the subject of the deployment view.",
   "Wrong: The startup order is dynamic behaviour and is described as a runtime scenario. The deployment view is static and only shows where something runs, not in which order it starts.",
   "Wrong: The logical decomposition into business building blocks is the building block view. The deployment view then maps the resulting artifacts onto the infrastructure."
  ],
  "explanation": "The deployment view maps artifacts onto nodes and shows the communication channels – possibly for several environments. Building block decomposition, team assignment or startup sequence do not belong to it."
 },
 "c4q7": {
  "q": "What does the standard ISO/IEC/IEEE 42010 govern?",
  "options": [
   "A concrete documentation template with twelve fixed, predefined sections.",
   "Binding specifications of which views a system must document at a minimum.",
   "A catalog of quality characteristics such as maintainability, performance, and security.",
   "Concepts and terms of architecture description (stakeholders, concerns, viewpoints/views)."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: The template with twelve sections is arc42. ISO/IEC/IEEE 42010 does not prescribe a concrete structure; it defines terms and requirements for architecture descriptions.",
   "Wrong: 42010 does not prescribe fixed mandatory views. Instead, it requires that views are chosen to fit the stakeholders' concerns and that viewpoints define what they look like.",
   "Wrong: A catalog of quality characteristics such as maintainability or security is ISO/IEC 25010. The two standards are easily confused, but they cover entirely different topics.",
   "Correct: 42010 provides the conceptual framework: stakeholders have concerns, and viewpoints define how views address these concerns. This makes architecture descriptions uniformly understandable and comparable."
  ],
  "explanation": "42010 provides the conceptual framework for architecture descriptions (stakeholders, concerns, viewpoints/views). Quality characteristics come from 25010; the 12-section template is arc42; 42010 does not prescribe fixed mandatory views. (R3.)"
 },
 "c4q8": {
  "q": "A colleague wants to depict the time-ordered exchange of messages between several objects in a use case. Which UML diagram is typical for this?",
  "options": [
   "The activity diagram for the parallel branching of activities in the business process.",
   "The sequence diagram.",
   "The state diagram for the states that a single object passes through.",
   "The class diagram for the static associations of the classes involved."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: The activity diagram shows control and data flow including branching and concurrency. However, it does not focus on the time-ordered messages between named objects.",
   "Correct: The sequence diagram places the participants side by side and shows along their lifelines, from top to bottom, who sends which message to whom and when. That is exactly the time-ordered exchange of messages.",
   "Wrong: The state diagram describes the states and transitions of a single object. It does not show the interplay of several objects or the order of their messages.",
   "Wrong: The class diagram is a static structure diagram. It shows classes and their relationships, but no temporal flow at all."
  ],
  "explanation": "For the time-ordered exchange of messages between several objects, the sequence diagram is typical. Class (static), state (one object), and activity diagram (control flow) answer other questions."
 },
 "c4q9": {
  "q": "A team wants to record in a comprehensible way why it decided on a message broker instead of synchronous REST calls. What purpose does an Architecture Decision Record (ADR) serve for this?",
  "options": [
   "Keep all architecture decisions of the project bundled in one single large document.",
   "Manage the open decisions still to be taken together with their deadlines.",
   "Record a later revision as a new ADR that supersedes the old one, instead of overwriting the old one.",
   "Record the decision in such a way that it may no longer be changed in the further course of the project.",
   "Record the decision taken together with context, considered alternatives and consequences."
  ],
  "correct": [
   2,
   4
  ],
  "optExpl": [
   "Wrong: ADRs are deliberately short individual documents – one per decision. A large collective document would be hard to maintain and would lose the advantage of being able to reference and supersede individual decisions.",
   "Wrong: An ADR documents a decision taken (or about to be taken) together with its rationale. Managing open items with deadlines is the job of a backlog or project plan, not of a decision record.",
   "Correct: If a decision is revised, you create a new ADR and mark the old one as \"superseded\". This keeps it traceable what applied before and why it was changed.",
   "Wrong: An ADR does not freeze decisions; architecture may evolve with new insights. The ADR only makes it traceable what was decided when and for what reasons.",
   "Correct: Context, considered alternatives and consequences are the core parts of an ADR. In the example it would record why the message broker was chosen, why REST was rejected and which consequences (e.g. eventual consistency) are accepted."
  ],
  "explanation": "An ADR records per decision context, alternatives and consequences. Revisions are documented as a new ADR superseding the old one – thus the history is preserved. ADRs are neither a collective document, nor a schedule planner, nor a prohibition on change."
 },
 "c4q10": {
  "q": "An architect documents the same system for management, operations, and development. Which statements about audience-oriented documentation are correct?",
  "options": [
   "Audience-appropriate means above all changing the notation (e.g. UML for development, prose for management); the content stays the same.",
   "Content, level of detail and notation are geared to the information needs of the respective audience.",
   "For management an overview is often enough, while development needs detailed building block descriptions.",
   "Each audience receives its own, content-wise independent model of the system.",
   "Different audiences often need different views or abstraction levels of the same system."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Wrong: A different notation alone is not enough. Management needs different content and a different level of detail than development – for example costs, risks and an overview instead of interface details.",
   "Correct: The starting point of audience-oriented documentation is the readers' information needs. These determine which content, how much detail and which form of representation make sense.",
   "Correct: Management wants an overview, goals and risks, while development needs precise building block descriptions with interfaces. The same depth for everyone would overwhelm some and under-serve others.",
   "Wrong: All representations describe the same system and must be consistent with each other. Independent models would drift apart and lead to contradictory statements.",
   "Correct: Operations, for instance, cares mainly about the deployment view, development about building blocks and runtime behaviour. Different views and abstraction levels of the same system serve these needs specifically."
  ],
  "explanation": "Audience-appropriate documentation adapts content, level of detail and notation to the information needs – with different but consistent views of the same system. Merely changing the notation is not enough."
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
   "Sequence diagram",
   "State diagram"
  ],
  "explanation": "Component diagram and deployment view describe static structure (building blocks/interfaces or assignment onto nodes) - the deployment view is often mistakenly classified as dynamic. State and sequence diagrams show dynamic behavior (state transitions or temporal flows)."
 },
 "c4q11": {
  "q": "Which statements about the business and technical context in context delimitation are correct?",
  "options": [
   "The business context shows communication partners and exchanged data in business terms; the technical context shows the concrete channels and protocols.",
   "Both belong to the context view, which delimits the system as a whole from its environment.",
   "The business context belongs in the requirements documentation, the technical context in the architecture documentation.",
   "The two differ only in the notation used, not in the content depicted.",
   "The technical context already shows the internal technical building block structure of the system."
  ],
  "correct": [
   0,
   1
  ],
  "optExpl": [
   "Correct: The business context answers with whom the system exchanges which information, the technical context via which channels and protocols this happens. Example: business \"order to supplier\", technical \"REST over HTTPS\".",
   "Correct: Business and technical context are two variants of the same context view. Both delimit the system as a whole from its environment and only look at the system boundary.",
   "Wrong: Both are part of the context view in the architecture documentation (section 3 in arc42). The separation is by level of consideration – business vs. technical – not by document type.",
   "Wrong: The difference lies in the content, not in the representation. The business context shows partners and exchanged information, the technical context shows channels, protocols and possibly hardware.",
   "Wrong: The technical context also stays at the system boundary and treats the system as a black box. The internal structure belongs in the building block view, the technical execution environment in the deployment view."
  ],
  "explanation": "Both representations concern the system boundary: business (which partners/data) vs. technical (which channels/protocols). They show no internals, differ in content (not only notationally), and are both part of the context view."
 },
 "c4q12": {
  "q": "Which statements about a UML component diagram are correct?",
  "options": [
   "Components/building blocks and their offered or required interfaces.",
   "The order in which the components are instantiated and called at runtime.",
   "It shows the static structure, not the temporal runtime behaviour.",
   "Physical computing nodes and the artifacts executed on them.",
   "The complete signature of every operation, including parameter types and visibilities."
  ],
  "correct": [
   0,
   2
  ],
  "optExpl": [
   "Correct: Component diagrams show building blocks along with their offered and required interfaces (lollipop and socket notation). This makes them well suited for the building block view.",
   "Wrong: The temporal order of instantiation and calls is dynamic behaviour. For this you use sequence or other interaction diagrams in the runtime view.",
   "Correct: The component diagram is a structure diagram and shows which parts exist and how they are connected via interfaces. It does not show how they behave over time.",
   "Wrong: Physical nodes and the artifacts executed on them are shown by the deployment diagram. Component diagrams stay at the logical level of software building blocks.",
   "Wrong: Complete operation signatures with parameter types and visibilities are the domain of the class diagram. Component diagrams abstract from this and show interfaces as a whole."
  ],
  "explanation": "Component diagrams show building blocks with offered/required interfaces (static structure). Nodes+artifacts = deployment diagram; full signatures = class diagram; temporal order = sequence diagram."
 },
 "c4q13": {
  "q": "Why are architectures described with multiple views? Which statements are correct?",
  "options": [
   "No single view can represent all relevant aspects at the same time.",
   "The same building blocks can appear in several views, each with a different focus.",
   "Several views are needed mainly for distributed systems; a monolith can be described completely in one view.",
   "Each view is an independent model and is kept consistent independently of the others.",
   "Different views address different questions and stakeholders."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Correct: Structure, runtime behaviour and deployment cannot sensibly be combined in one diagram without making it unreadable. Each view deliberately hides some aspects to present others clearly.",
   "Correct: A building block appears, for example, in the building block view with its interfaces, in the runtime view in a flow and in the deployment view as an artifact on a node. The views look at the same element from different angles.",
   "Wrong: A monolith also has an internal structure, runtime behaviour and a deployment onto infrastructure. These aspects answer different questions, so one view is not enough here either.",
   "Wrong: Views are not independent models but different perspectives on the same system. They must therefore be consistent with each other – a building block must not mean something different in each view.",
   "Correct: Developers ask about structure and interfaces, operations about nodes and channels, business stakeholders about flows. Each view addresses the concerns of particular stakeholders."
  ],
  "explanation": "Several views are needed because no view covers all aspects and stakeholder questions – this applies to every system, including a monolith. Views must be consistent with each other."
 },
 "c4q15": {
  "q": "Which advantages does a standardized notation (e.g. UML) offer over arbitrary „boxes and arrows“?",
  "options": [
   "The diagram elements have an agreed meaning that others can clearly follow.",
   "Standard notation enforces a uniform level of detail across all diagrams.",
   "It facilitates unambiguous communication between different stakeholders and tools.",
   "Diagrams in standard notation automatically remain consistent with the code.",
   "A legend is superfluous for UML diagrams, since the meaning of all elements is standardized."
  ],
  "correct": [
   0,
   2
  ],
  "optExpl": [
   "Correct: UML defines what an element or arrow type means – for example dependency, inheritance or composition. With freely drawn boxes and arrows, by contrast, the reader has to guess the meaning.",
   "Wrong: The notation defines the meaning of the elements, not the level of detail. How detailed a diagram is depends on purpose and audience – UML allows coarse overviews as well as fine details.",
   "Correct: A common notation creates a shared language between stakeholders and enables exchange between tools. This reduces misunderstandings when reading other people's diagrams.",
   "Wrong: UML diagrams also become outdated as soon as the code changes and nobody updates them. Consistency with the code comes only from maintenance or generation, not from the notation.",
   "Wrong: The standard does not explain custom stereotypes, colours or abbreviations, and not every reader knows UML in detail. A legend therefore remains useful for UML diagrams too."
  ],
  "explanation": "Standard notation gives elements an agreed meaning and facilitates communication and tool use. It does not keep diagrams up to date automatically, does not replace every legend and does not fix a level of detail."
 },
 "c4q16": {
  "q": "You want to show how an ordering process runs at runtime between several building blocks. Which view fits best?",
  "options": [
   "The deployment view, since the process passes through several nodes.",
   "The building block view, since it shows all building blocks involved and their interfaces.",
   "The runtime view (e.g., as a sequence or activity diagram).",
   "The context view, since an order is a business use case."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: The deployment view shows on which nodes the artifacts run, not in which order building blocks cooperate in a process. The fact that the flow touches several nodes does not make it a subject of the deployment view.",
   "Wrong: The building block view shows the building blocks and interfaces involved statically. Who calls whom and when is dynamic behaviour and belongs in the runtime view.",
   "Correct: The runtime view describes the interplay of building blocks in concrete scenarios such as an ordering process. Typical representations are sequence or activity diagrams.",
   "Wrong: The context view shows the system as a black box with its neighbors. Internal flows between building blocks are deliberately hidden there, even though an order is a business use case."
  ],
  "explanation": "A temporal flow between building blocks belongs in the runtime view (e.g., sequence diagram). Building block, deployment, and context views answer other questions, even if they name involved building blocks/nodes."
 },
 "c4q17": {
  "q": "Which contents typically belong in an architecture documentation according to arc42?",
  "options": [
   "The context delimitation of the system.",
   "Wireframes or designs for every dialog of the user interface.",
   "The architecture decisions with their rationale.",
   "The project and release plan with milestones and resources.",
   "Risks and technical debt."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Correct: The context delimitation is a dedicated arc42 section (section 3). It shows the system with its business and technical interfaces to the environment.",
   "Wrong: Wireframes and dialog designs belong to UX or UI design. arc42 documents the architecture – structures, decisions and concepts – not the design of individual screens.",
   "Correct: Architecture decisions with their rationale have their own section in arc42 (section 9). This is where ADRs fit in, for example.",
   "Wrong: Project and release planning with milestones and resources is the task of project management. arc42 does contain constraints, but no project plan.",
   "Correct: Risks and technical debt are a dedicated arc42 section (section 11). Making them visible is an important task of architecture documentation."
  ],
  "explanation": "arc42 includes context delimitation, quality requirements, architecture decisions as well as risks and technical debt. UI wireframes and project plans do not belong to it."
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
   "Over which network protocols do the machines communicate?",
   "On which node does which component run in which environment?"
  ],
  "explanation": "Decomposition into building blocks as well as responsibilities/interfaces of a subsystem = building block view. Assignment of components to nodes/environments and the communication paths/protocols = deployment view."
 },
 "c4q18": {
  "q": "Which statements about the UML class diagram are correct?",
  "options": [
   "It maps the deployment of artifacts onto execution nodes.",
   "It belongs to the static structure view.",
   "It primarily depicts the state transitions of an object over its lifetime.",
   "It primarily depicts the temporal flow of messages between objects.",
   "It shows types/classes and their relationships (e.g., association, inheritance)."
  ],
  "correct": [
   1,
   4
  ],
  "optExpl": [
   "Wrong: The deployment of artifacts onto execution nodes is shown by the deployment diagram. The class diagram stays at the level of types and their relationships.",
   "Correct: The class diagram is a structure diagram and describes what exists, not what happens when. It therefore belongs to the static view of the system.",
   "Wrong: State transitions of an object over its lifetime are shown by the state diagram. The class diagram has no states or transitions.",
   "Wrong: The temporal flow of messages between objects is shown by the sequence diagram. The class diagram only describes the static relationships over which such messages are possible.",
   "Correct: Class diagrams show classes or types with attributes and operations as well as their relationships such as association, aggregation or inheritance. They are suitable, for example, for domain models or detailed design."
  ],
  "explanation": "Class diagrams show static structure (types + relationships). Temporal message flow = sequence diagram; deployment onto nodes = deployment diagram."
 },
 "c4q19": {
  "q": "In a project, it must be decided which decisions are recorded as an Architecture Decision Record (ADR). Which statements are true?",
  "options": [
   "A decision should only be recorded as an ADR once it has proven itself in practice.",
   "The choice of an architecture or integration pattern with far-reaching consequences is worthy of an ADR.",
   "Every detail decision in the code should if possible get its own ADR to ensure complete traceability.",
   "An ADR is the place for the complete, always up-to-date description of the actual architecture.",
   "A hard-to-reverse fundamental technology decision should be recorded as an ADR together with the alternatives considered and rejected."
  ],
  "correct": [
   1,
   4
  ],
  "optExpl": [
   "Wrong: An ADR is written at the time of the decision and records the context and reasons of that moment. If you wait until it has proven itself, exactly this information is often already lost.",
   "Correct: The choice of an architecture or integration pattern shapes large parts of the system and is expensive to change. Such decisions with far-reaching consequences are typical ADR candidates.",
   "Wrong: ADRs are meant for architecturally relevant decisions. Documenting every trifle creates high effort and buries the truly important decisions in the mass.",
   "Wrong: An ADR describes a single decision at a particular point in time and is not continuously rewritten afterwards. The overall architecture is described by the views (e.g. building block, runtime and deployment view).",
   "Correct: Hard-to-reverse fundamental decisions, e.g. for a database technology, have long-term consequences. If the rejected alternatives are documented as well, the discussion does not have to be repeated later."
  ],
  "explanation": "ADRs are for key, hard-to-reverse decisions and are written at decision time with context and alternatives. They are neither for every trifle nor an overall description of the architecture."
 },
 "c4q20": {
  "q": "What does a UML deployment diagram show?",
  "options": [
   "The logical decomposition of the system into components and their provided or required interfaces.",
   "The states of an object and the transitions between them and their triggers.",
   "Nodes (hardware or execution environments), the artifacts executed on them, and the communication paths between the nodes.",
   "The temporal exchange of messages between objects for a specific sequence."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: The logical decomposition into components with provided and required interfaces is shown by the component diagram. The deployment diagram goes one step further and shows where this software physically runs.",
   "Wrong: The states of an object and the transitions between them are shown by the state diagram. The deployment diagram contains no behaviour, only the infrastructure structure.",
   "Correct: The deployment diagram shows nodes such as servers, containers or runtime environments, the artifacts placed on them and the communication paths between the nodes. It is the typical notation for the deployment view.",
   "Wrong: The temporal exchange of messages for a specific sequence is shown by the sequence diagram. The deployment diagram is static and does not describe flows."
  ],
  "explanation": "Deployment diagrams assign artifacts to physical or logical nodes and show their communication paths (deployment view). Component decomposition, temporal sequences, or object states are other diagram types."
 },
 "c4q21": {
  "q": "An architecture documentation is increasingly becoming outdated relative to the actual code. Which measures are most likely to help keep it up to date permanently?",
  "options": [
   "Firmly anchor updating the documentation for relevant changes in the definition of done.",
   "Keep the documentation lean and maintain it versioned close to the code (e.g. in the repository).",
   "Document as many details as possible (e.g. all classes) so that deviations are noticed more quickly.",
   "Generate overviews and diagrams from the code where sensible, instead of updating them manually.",
   "Assign maintenance to a central documentation owner so that development is relieved."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Correct: If updating the documentation is part of the definition of done, a relevant change only counts as finished once the documentation has been updated as well. This turns maintenance into routine rather than tedious rework.",
   "Correct: Lean documentation has little that can go out of date, and if it is versioned in the repository it is changed and reviewed together with the code. Both lower the barrier to keeping it current.",
   "Wrong: More details mean more places that become outdated with every change, and thus more maintenance effort. The documentation tends to become outdated faster rather than staying current.",
   "Correct: What is generated from the code, such as dependency overviews or API documentation, automatically matches the code. Manual maintenance is then only needed for rationales and concepts.",
   "Wrong: If maintenance is separated from the people making the changes, the documentation owner often learns about them too late. The documentation then typically lags behind permanently."
  ],
  "explanation": "Documentation stays current if it is lean, versioned, close to the code, part of the DoD and generated where possible. Maintenance separated from the changes or lots of details make it outdated faster."
 },
 "c4q22": {
  "q": "Which statements about a glossary or a shared vocabulary in the documentation are true?",
  "options": [
   "It should mainly explain technical terms (e.g. framework names), since the business terms are known to everyone anyway.",
   "It supports a consistent use of terms between business and development.",
   "It is best maintained by development alone, since development uses the terms in the code.",
   "It also helps to make visible identically named terms with different meanings in different business areas.",
   "It creates a shared, unambiguous understanding of the business terms and reduces misunderstandings."
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Wrong: Business terms in particular are often ambiguous or understood differently by different people. A glossary should above all clarify these terms, with technical terms at most as a supplement.",
   "Correct: A glossary ensures that business and development use the same terms with the same meaning – in conversations, documents and ideally in the code too. This reflects the idea of a shared language (ubiquitous language).",
   "Wrong: If only development maintains the glossary, it merely reflects their understanding. The meaning of business terms must be clarified together with the business side.",
   "Correct: The same term can mean different things in different business areas – for example \"customer\" in sales and in accounting. A glossary makes such homonyms visible before they lead to errors.",
   "Correct: Clearly defined business terms prevent people from talking at cross purposes. Misunderstandings are avoided early instead of surfacing only in the finished system."
  ],
  "explanation": "A glossary clarifies precisely the often ambiguous business terms, ensures consistent language between business and development and uncovers homonyms. It is maintained jointly."
 },
 "c4q23": {
  "q": "What makes an architecture overview particularly valuable for new team members?",
  "options": [
   "A chronological list of all previous changes to the system.",
   "The big picture: system context, goals and the most important constraints.",
   "The most important building blocks and their responsibilities.",
   "A detailed description of the build and deployment scripts so that newcomers can get things running first.",
   "Central architecture decisions and their rationale."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Wrong: A change history provides many details from the past, but no picture of the current structure and its reasons. New team members first need orientation, not a chronicle.",
   "Correct: System context, goals and constraints explain what the system is for and within which framework it was designed. Without this big picture, details can hardly be put into context.",
   "Correct: The most important building blocks with their responsibilities show the coarse structure of the system. This tells newcomers where to find which functionality.",
   "Wrong: A build and deployment guide helps set up the working environment, but it is not an architecture overview. It explains neither the structure nor the decisions of the system.",
   "Correct: Central decisions with their rationale explain why the system is built the way it is. This prevents newcomers from unknowingly undermining deliberate decisions."
  ],
  "explanation": "A good architecture overview conveys the big picture: context, goals, constraints, most important building blocks and central decisions including rationale. Change histories or build details do not belong in the overview."
 },
 "c4q24": {
  "q": "Which statements about the consistency of different architecture views are correct?",
  "options": [
   "All views describe the same system; the same building block must not be represented contradictorily in different views.",
   "Consistency can only be ensured if all views are generated from a common modeling tool.",
   "In case of a contradiction, the building block view always prevails, since it defines the structure.",
   "Consistency means that every building block of the building block view must also appear in the runtime and deployment views.",
   "Views may show different aspects and levels of detail, but must be consistent with each other."
  ],
  "correct": [
   0,
   4
  ],
  "optExpl": [
   "Correct: Views are different perspectives on one and the same system. If a building block appears in several views, it must fit together there – having the same name and the same responsibility, for example.",
   "Wrong: A common modeling tool can make consistency easier, but it is not the only option. Reviews, clear naming conventions and cross-references also ensure views without contradictions.",
   "Wrong: No view automatically prevails. A contradiction shows that at least one view is wrong or outdated – and that may well be the building block view, so it has to be resolved.",
   "Wrong: The runtime view shows only selected scenarios and the deployment view only artifacts on nodes. Not every building block must appear everywhere – consistency means freedom from contradiction, not completeness.",
   "Correct: Each view may choose its own focus and level of detail as long as the statements fit together. Different abstraction is desired, contradictions are not."
  ],
  "explanation": "Views show the same system with different focus and level of detail and must be consistent. Not every building block has to appear in every view; contradictions are clarified rather than giving one view blanket precedence."
 },
 "k11": {
  "q": "Does the content belong in an architecture documentation?",
  "categories": [
   "Sensible documentation content",
   "Does not belong in it"
  ],
  "rows": [
   "A description of every single class with all methods",
   "Cross-cutting concept for error handling",
   "The sprint plan with the tasks of the next iteration",
   "Central architecture decisions including rationale",
   "Context delimitation of the system"
  ],
  "explanation": "Architecture documentation contains context, decisions with rationale and cross-cutting concepts. Class and method details are detailed design/code, sprint plans are project planning."
 },
 "c4q25": {
  "q": "What does a whitebox description of a building block in the building block view show?",
  "options": [
   "The assignment of the internal building blocks to concrete execution nodes (servers).",
   "The internal decomposition of the building block into its contained (sub-)building blocks including their interplay.",
   "The temporal sequence of calls between the internal building blocks at runtime.",
   "Exclusively the externally provided interfaces and responsibilities of the building block."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: Which internal building blocks run on which servers is described by the deployment view. The white box stays within the logical structure of the building block view.",
   "Correct: The white box opens the building block and shows which sub-building blocks it consists of and how they are related. These sub-building blocks are then in turn described as black boxes and refined further if needed.",
   "Wrong: The temporal sequence of calls is dynamic behaviour and belongs in the runtime view. The white box shows the internal building blocks and their relationships statically.",
   "Wrong: Showing only the externally provided interfaces and responsibilities is exactly the black-box description. The white box goes further and shows the internals."
  ],
  "explanation": "A whitebox opens the building block and statically shows its internal building blocks and their relationships. Only the interface would be the blackbox; temporal sequences or the hardware assignment are the runtime or deployment view respectively."
 },
 "c4q26": {
  "q": "What should an interface description typically specify?",
  "options": [
   "Quality promises such as response time or availability, insofar as they are relevant for users.",
   "The communication protocol or type of interaction (e.g. synchronous or asynchronous).",
   "The list of building blocks currently using the interface, as a binding part of the specification.",
   "The behavior in error and exception cases.",
   "The offered operations with their parameters, data formats and their meaning."
  ],
  "correct": [
   0,
   1,
   3,
   4
  ],
  "optExpl": [
   "Correct: Promised qualities such as response time or availability are part of the contract that users rely on. Without them, a user cannot judge whether the interface is suitable for their purpose.",
   "Correct: Whether an interface works synchronously or asynchronously and via which protocol it is reachable largely determines how users have to integrate it. This information therefore belongs in the description.",
   "Wrong: An interface specification describes the contract independently of who is currently using it. Current users can be recorded separately, e.g. for an impact analysis, but they are not part of the specification.",
   "Correct: Users need to know how the interface behaves in case of errors, invalid input or overload. Only then can they handle such cases reliably.",
   "Correct: Operations, parameters, data formats and their meaning (semantics) form the core of the interface contract. Only the semantics make clear what a call actually does."
  ],
  "explanation": "An interface description defines the contract: operations, data formats, semantics, error behavior, protocol and guaranteed qualities. The current users are not part of the contract."
 },
 "c4q27": {
  "q": "Which statements justify why one should not document \"everything\"?",
  "options": [
   "Overly extensive documentation causes maintenance effort and quickly becomes outdated.",
   "What is relevant for decisions makes sense; unnecessary redundancy with the code should be avoided.",
   "Documentation is needed mainly in the initial phase; as soon as code exists, the code takes over its role.",
   "The architecture can anyway be derived completely and unambiguously from the source code alone.",
   "What no audience actually needs creates no benefit but causes effort."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Correct: Every piece of documented information has to be updated when things change. The larger the scope, the higher the maintenance effort and the greater the risk that parts become outdated and trust in the documentation is lost.",
   "Correct: You should mainly document what matters for decisions and understanding and is not already in the code. Redundancy with the code doubles the maintenance effort without adding value.",
   "Wrong: Documentation is needed throughout the entire life cycle, for example for onboarding, maintenance and evolution. The code cannot replace it, because it does not contain rationales and relationships.",
   "Wrong: The structure can partly be read from the code, but not rationales, rejected alternatives or quality goals. Precisely this information must be captured in the documentation.",
   "Correct: Appropriate documentation is guided by the actual needs of the audiences. What nobody reads or needs only costs maintenance effort."
  ],
  "explanation": "Do not document everything, because size creates maintenance effort and becomes outdated; limit yourself to what is relevant for decisions for real audiences. Documentation nevertheless remains necessary throughout the life cycle, since the code does not contain the rationale."
 },
 "c4q28": {
  "q": "Which statements about the UML activity diagram are true?",
  "options": [
   "It primarily depicts the states of an object and their transitions.",
   "It can depict concurrent (parallel) flows.",
   "It primarily shows the static structure of classes and their relationships.",
   "It represents flows with actions and branches.",
   "It assigns software building blocks to execution nodes (hardware)."
  ],
  "correct": [
   1,
   3
  ],
  "optExpl": [
   "Wrong: The states of an object and their transitions are shown by the state diagram. The activity diagram, by contrast, describes a flow of actions, not the life cycle of a single object.",
   "Correct: With forks and joins, parallel flows can be depicted. This is a particular strength of the activity diagram compared to simple flow descriptions.",
   "Wrong: The static structure of classes and their relationships is shown by the class diagram. The activity diagram is a behaviour diagram and describes dynamics.",
   "Correct: Actions, decisions or branches and control flow are the core elements of the activity diagram. It can depict business processes as well as technical flows.",
   "Wrong: Mapping software to execution nodes is shown by the deployment diagram. The activity diagram does have partitions (swimlanes), but it does not describe infrastructure."
  ],
  "explanation": "Activity diagrams show flows including concurrency (dynamic behavior). Static class structure = class diagram; hardware assignment = deployment diagram; object states = state diagram."
 },
 "c4q29": {
  "q": "Which sections does the arc42 template explicitly provide?",
  "options": [
   "Cross-cutting concepts.",
   "A section on cost planning for operations and licenses.",
   "A section on project organization with roles and responsibilities of the team.",
   "Constraints.",
   "Quality requirements (e.g. quality tree and quality scenarios)."
  ],
  "correct": [
   0,
   3,
   4
  ],
  "optExpl": [
   "Correct: Cross-cutting concepts are a dedicated arc42 section (section 8). It describes topics such as security, error handling or logging that affect many building blocks.",
   "Wrong: Cost planning for operations and licenses is not an arc42 section. Costs can appear as a constraint or a decision criterion, but planning belongs in project or budget management.",
   "Wrong: Project organization with roles and responsibilities is project management and not one of the twelve arc42 sections. Organizational requirements may at most appear as constraints.",
   "Correct: Constraints are a dedicated arc42 section (section 2). They record technical, organizational and legal requirements that restrict the solution space.",
   "Correct: Quality requirements have their own section in arc42 (section 10), typically with a quality tree and quality scenarios. They make the quality goals from the introduction concrete."
  ],
  "explanation": "arc42 provides sections for constraints, cross-cutting concepts and quality requirements, among others. Project organization and cost planning are not among the twelve sections."
 },
 "c4q30": {
  "q": "Which statements about UML as a notation are true?",
  "options": [
   "UML is only suitable for object-oriented systems; it is unsuitable for microservices or infrastructure.",
   "A sufficiently detailed UML model can completely replace the textual architecture documentation.",
   "For architecture, component, deployment and sequence diagrams, among others, are useful.",
   "UML can also be used sketchily and informally, as long as the meaning remains clear.",
   "UML offers standardized diagram types with agreed meaning."
  ],
  "correct": [
   2,
   3,
   4
  ],
  "optExpl": [
   "Wrong: UML does originate from object orientation, but component, deployment and sequence diagrams are also well suited for services and infrastructure. Microservices can, for example, be shown as components with interfaces and as artifacts on nodes.",
   "Wrong: Diagrams show structures and flows, but rationales, goals and context can hardly be captured in them. A UML model therefore always needs complementary text.",
   "Correct: Component diagrams fit the building block view, deployment diagrams the deployment view and sequence diagrams the runtime view. UML thus covers the central architecture views.",
   "Correct: UML does not have to be used in a formally complete way. As a sketch it is legitimate and useful, as long as the elements used remain understandable for the readers.",
   "Correct: UML defines a set of diagram types with an agreed meaning of the elements. This makes diagrams uniformly readable across people and tools."
  ],
  "explanation": "UML offers standardized diagram types, of which component, deployment and sequence diagrams are particularly useful for architecture – also for services and as sketches. Diagrams do not replace the textual rationale, though."
 },
 "c4q31": {
  "q": "An operations team wants to know on which servers which parts run and how they communicate. Which view helps the most?",
  "options": [
   "The runtime view, since operations mainly observes flows.",
   "The building block view, since it shows all components and their responsibilities.",
   "The class diagram, since it shows the static structure.",
   "The deployment view."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: The runtime view shows how building blocks cooperate in scenarios, but not on which servers they run. The operations team's question is about infrastructure, not flows.",
   "Wrong: The building block view shows the logical components and their responsibilities, but is deliberately independent of infrastructure. It does not answer where the components run.",
   "Wrong: The class diagram shows the static fine-grained structure of the code. It has nothing to do with servers and communication paths.",
   "Correct: The deployment view shows which artifacts run on which nodes and via which channels they communicate. It is therefore the typical view for operations."
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
   "Network connections between data centers",
   "On which server/node which component runs",
   "Temporal interaction of the building blocks during a use case",
   "Order of the exchanged messages"
  ],
  "explanation": "Interactions/flows at runtime = runtime view. Assignment to hardware/nodes and their communication paths = deployment view."
 },
 "c4q32": {
  "q": "Which statements about good architecture documentation are true?",
  "options": [
   "Being up to date is secondary, as long as the rationales of the decisions are included.",
   "Appropriateness means: as much as necessary, as little as possible.",
   "Understandability can ultimately only be judged from the perspective of the respective audience.",
   "A uniform structure (e.g. a template) makes it easier to find information again.",
   "Good documentation is above all complete: every building block is described down to the lowest level."
  ],
  "correct": [
   1,
   2,
   3
  ],
  "optExpl": [
   "Wrong: Outdated documentation is misleading, even if it contains good rationales. Correctness and currency are central quality characteristics of good documentation – otherwise it loses the readers' trust.",
   "Correct: Appropriate means documenting exactly as much as the audiences need – no more. This keeps maintenance effort and the risk of becoming outdated low.",
   "Correct: Whether a text is understandable depends on the readers' prior knowledge. What is clear to developers may be incomprehensible to management, so understandability must be judged from the audience's perspective.",
   "Correct: A uniform structure such as arc42 ensures that information is always in the same place. Readers quickly find their way around, even in documentation they do not know.",
   "Wrong: Completeness down to the lowest level is expensive, becomes outdated quickly and overwhelms readers. Good documentation is appropriate, not maximally complete."
  ],
  "explanation": "Good documentation is understandable for its audience, appropriate, correct, up to date and uniformly structured. Completeness down to the last detail is not a quality goal; outdated documentation does harm even with good rationales."
 },
 "c4q33": {
  "q": "In what way does decision documentation according to arc42 tend to differ from a single Architecture Decision Record (ADR)?",
  "options": [
   "arc42 mainly documents open decisions, whereas ADRs only document decisions already taken.",
   "arc42 embeds decisions in the overall documentation; an ADR is a standalone document per decision with a status.",
   "arc42 only records the chosen solution; alternatives and rationales are captured exclusively in ADRs.",
   "ADRs are a fixed part of arc42 and may only be used within the decision section."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: Both primarily document decisions already taken, together with their rationale. The difference lies not in the status of the decisions but in the form of documentation.",
   "Correct: arc42 collects decisions in one section within the overall documentation. An ADR, by contrast, is a standalone, focused document per decision with a status such as \"accepted\" or \"superseded\" – both approaches can be combined.",
   "Wrong: arc42 also explicitly provides for recording decisions with rationale and, where relevant, alternatives. Rationales are not unique to ADRs.",
   "Wrong: ADRs are a standalone format that can also be used without arc42. In an arc42 documentation they can be linked from the decision section, but they are not a fixed part of the template."
  ],
  "explanation": "arc42 places decisions in a section of the overall documentation; ADRs are standalone, focused individual documents with a status. Both record decisions taken with rationale and can be combined."
 },
 "c4q34": {
  "q": "Which information typically belongs in an Architecture Decision Record (ADR)?",
  "options": [
   "The decision taken including its status (e.g. proposed, accepted, superseded).",
   "The concrete implementation in the code, e.g. as code snippets for each affected class.",
   "The context or problem that triggers the decision.",
   "The consequences of the decision and the alternatives considered.",
   "A continuously updated description of how the decision proves itself in operation."
  ],
  "correct": [
   0,
   2,
   3
  ],
  "optExpl": [
   "Correct: The decision taken is the core of the ADR, and the status (e.g. proposed, accepted, superseded) shows whether it still applies. This makes it clear later on which decisions are currently authoritative.",
   "Wrong: An ADR documents the decision and its reasons, not its implementation. Code snippets would quickly become outdated and distract from the essentials.",
   "Correct: The context describes the problem and the conditions that make a decision necessary. Without it, a decision can hardly be understood or evaluated later.",
   "Correct: Consequences show which advantages and disadvantages are accepted, and the alternatives considered show what was deliberately rejected. Both make the decision traceable.",
   "Wrong: An ADR is written at the time of the decision and is not continuously updated afterwards. If new insights emerge in operation, this may lead to a new ADR that supersedes the old one."
  ],
  "explanation": "An ADR contains context, decision with status, consequences and alternatives. Implementation details or a continuous operational assessment do not belong in it."
 },
 "c4q35": {
  "q": "What applies to the documentation of interfaces?",
  "options": [
   "Internal interfaces between building blocks of the same team need not be documented, since the code describes them completely.",
   "A machine-readable specification (e.g. OpenAPI) makes describing semantics and error behavior superfluous.",
   "Internal interfaces must always be documented in more detail than external ones.",
   "External interfaces are contracts with third parties and are therefore usually documented earlier, more formally and with versioning."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: The code only shows the signature, not responsibility, guarantees or error behaviour. Internal interfaces therefore also need an appropriate, if often leaner, description.",
   "Wrong: Machine-readable specifications such as OpenAPI mainly describe the syntax – endpoints, parameters, data types. What a call means in business terms and how the interface behaves in case of errors must be recorded in addition.",
   "Wrong: Typically it is the other way round: external interfaces need more formality because third parties depend on them and changes are hard to coordinate. Internal interfaces can be adapted together more easily.",
   "Correct: External interfaces are contracts with third parties that cannot simply be changed along with your own code. That is why they are documented early, formally and with versioning, so that users can rely on them."
  ],
  "explanation": "External interfaces are contracts with third parties and are documented early, formally and with versioning. Internal interfaces also need an appropriate description; machine-readable specs do not replace semantics."
 },
 "c4q36": {
  "q": "Which statements about the central documentation of cross-cutting concepts (e.g., security, error handling, logging) are true?",
  "options": [
   "It fosters a system-wide uniform, low-redundancy implementation across many building blocks.",
   "They make a runtime view superfluous, since they define the behavior system-wide.",
   "Cross-cutting concepts are best described separately in each affected building block, so that they are close to the implementation.",
   "Cross-cutting concepts typically affect several building blocks and have an impact on quality characteristics.",
   "Cross-cutting concepts only concern technical topics; business concepts such as an overarching domain model do not count."
  ],
  "correct": [
   0,
   3
  ],
  "optExpl": [
   "Correct: If a concept such as error handling is described centrally once, all building blocks implement it in the same way. This avoids redundancy and inconsistent individual solutions.",
   "Wrong: Cross-cutting concepts define rules that affect many building blocks, but they do not show concrete flows. They complement the views and therefore do not replace the runtime view.",
   "Wrong: If a cross-cutting concept is described separately in each building block, redundancy and creeping deviations arise. This is exactly what the central description (section 8 in arc42) is meant to prevent.",
   "Correct: By definition, cross-cutting concepts affect several building blocks and often have a strong impact on quality characteristics – a security concept on security, or a logging concept on maintainability, for example.",
   "Wrong: Business topics can be cross-cutting too, such as an overarching domain model or business validation rules. Cross-cutting means \"affects many building blocks\", not \"technical\"."
  ],
  "explanation": "Cross-cutting concepts affect many building blocks and are described centrally to ensure uniform, low-redundancy implementation. They can be technical or business-related and complement the views rather than replacing them."
 },
 "c5q1": {
  "q": "Which elements belong to a fully formulated quality scenario?",
  "options": [
   "A concrete technical implementation (the HOW) by which the required response is ensured.",
   "The priority of the scenario as well as the estimated implementation effort as mandatory elements of every scenario.",
   "A trigger (stimulus) - such as an event, a request, or a change that the system is meant to respond to.",
   "The source of the trigger and the environment or context in which the scenario applies (e.g. normal operation, load peak).",
   "The expected response together with a measurable response measure (e.g. response time under 200 ms)."
  ],
  "correct": [
   2,
   3,
   4
  ],
  "optExpl": [
   "Wrong: A quality scenario describes WHAT the system must achieve under given conditions, not HOW it is achieved technically. The solution is created later in design and then checked against the scenario – if it were part of the scenario, it could no longer be evaluated independently.",
   "Wrong: Scenarios are often prioritised (e.g. in the utility tree), but priority is additional information for evaluation, not a structural part. An implementation effort does not belong in a scenario at all, because the scenario describes the requirement, not the solution.",
   "Correct: The stimulus is the event the system has to respond to – a request, a failure or a change request, for example. Without a stimulus it would be unclear which situation the scenario describes.",
   "Correct: Source and environment define who triggers the stimulus and under which conditions the scenario applies. The same request can mean very different requirements in normal operation and under peak load.",
   "Correct: Only the expected response combined with a measurable response measure makes the scenario verifiable. Without a measure it stays open when the goal is met – \"fast\" cannot be tested, \"below 200 ms\" can."
  ],
  "explanation": "A quality scenario names the trigger, source/environment, and the expected response with a measurable response measure. Effort estimates are not part of it, and the technical implementation (HOW) is precisely not part of the scenario."
 },
 "c5q2": {
  "q": "How can ATAM (Architecture Tradeoff Analysis Method) be most accurately characterized?",
  "options": [
   "A metric suite that automatically computes coupling and complexity from the source code.",
   "A scenario-based, predominantly qualitative method that analyzes architecture decisions against quality scenarios and thereby makes trade-offs visible.",
   "A method that quantifies the economic benefit of architecture decisions in monetary units and weighs it against their costs.",
   "A maturity model that classifies the architecture and development process into defined levels."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: ATAM is not a tool that computes metrics from code. It is a facilitated workshop method in which architects and stakeholders jointly analyse decisions against scenarios – code is not even required.",
   "Correct: ATAM walks prioritised quality scenarios through the architecture decisions and judges the results by expert assessment, i.e. mainly qualitatively. Its particular value is making trade-offs, sensitivity points and risks explicit.",
   "Wrong: Valuing decisions in monetary units describes CBAM (Cost Benefit Analysis Method), which can build on ATAM. ATAM itself asks how decisions affect the quality goals, not what they are worth economically.",
   "Wrong: Maturity models such as CMMI rate an organisation's processes. ATAM does not assess processes but concrete architecture decisions of a system."
  ],
  "explanation": "ATAM evaluates architecture in a scenario-based and qualitative manner and makes trade-offs explicit. The economic quantification is CBAM; metric suites and maturity models are something entirely different."
 },
 "c5q3": {
  "q": "Which statements about the relationship between qualitative and quantitative architecture evaluation are correct?",
  "options": [
   "Qualitative methods are particularly useful early, when no executable code exists yet.",
   "Qualitative and quantitative methods complement each other and are often used in combination.",
   "As soon as code exists, quantitative methods replace qualitative ones, since measured values are more objective than expert assessments.",
   "Quantitative methods require an analyzable artifact, such as code, an executable model or a running system.",
   "Scenario-based evaluations such as ATAM count as quantitative methods because their scenarios contain measurable response measures."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Correct: Reviews and scenario analyses work with designs, models and expert knowledge; they need no executable artefact. That is why they are the method of choice in early phases, when corrections are still cheap.",
   "Correct: The two kinds of methods answer different questions and therefore complement each other. Typically, metrics point out anomalies that are then put into context qualitatively in a review.",
   "Wrong: Measurements are objective, but not every quality is measurable and every number needs interpretation. Even with code, qualitative methods remain necessary, e.g. to judge trade-offs or future change scenarios.",
   "Correct: You can only measure what exists as an analysable artefact – code for static analysis, a running system for load tests. This prerequisite is why quantitative methods usually become applicable later.",
   "Wrong: ATAM scenarios do contain measurable response measures, but the evaluation itself is done by expert judgement in a workshop. A scenario stating numbers does not make the evaluation method quantitative."
  ],
  "explanation": "Qualitative methods (reviews, ATAM) work without code; quantitative ones need an analyzable artifact. Both complement each other. Trap: ATAM scenarios contain measures, but that does not make ATAM a quantitative method."
 },
 "c5q4": {
  "q": "Which of the following are quantitative (metric-based) quantities?",
  "options": [
   "The efferent or afferent coupling degree of a module (Ce/Ca).",
   "The prioritization of quality scenarios as high/medium/low in the utility tree.",
   "The cyclomatic complexity of a component.",
   "The instability I = Ce / (Ca + Ce) according to R. C. Martin.",
   "The classification of a trade-off as critical within an ATAM workshop."
  ],
  "correct": [
   0,
   2,
   3
  ],
  "optExpl": [
   "Correct: Efferent and afferent coupling are determined by counting outgoing and incoming dependencies. They are objectively computed figures and therefore quantitative.",
   "Wrong: Rating something as high, medium or low is the participants' judgement, not a measured value. Such coarse scales are typical of qualitative methods like the utility tree.",
   "Correct: Cyclomatic complexity is computed from the control-flow graph, essentially from the number of branches. It is therefore a classic code metric.",
   "Correct: R. C. Martin's instability is calculated from the coupling values and ranges from 0 (stable) to 1 (unstable). As a formula value it is clearly quantitative.",
   "Wrong: Whether a trade-off counts as critical is decided by the participants in the ATAM workshop through discussion and expert judgement. The result is a judgement, not a measurement – hence qualitative."
  ],
  "explanation": "Coupling degrees, cyclomatic complexity, and instability according to Martin are computed metrics. ATAM classifications and the coarse scenario prioritization are qualitative judgments."
 },
 "c5q5": {
  "q": "What is the purpose of a utility tree in a scenario-based evaluation?",
  "options": [
   "It documents the architecture decisions taken together with their rationale and rejected alternatives.",
   "It represents the decomposition of the system into building blocks and their responsibilities.",
   "It arranges identified risks by probability of occurrence and severity of damage in a matrix.",
   "It arranges quality attributes hierarchically down to prioritized, concrete quality scenarios and thereby focuses the evaluation."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: Decisions taken, with rationale and rejected alternatives, are documented in Architecture Decision Records (ADRs). The utility tree contains no decisions, but the quality requirements against which decisions are checked.",
   "Wrong: The decomposition into building blocks and their responsibilities is shown by the building block view. The utility tree does not describe the structure of the solution but the required qualities.",
   "Wrong: Arranging items by probability and impact is a risk matrix from risk management. Scenarios in the utility tree are prioritised by importance and difficulty, but the tree organises quality attributes, not risks.",
   "Correct: The utility tree refines abstract quality attributes step by step down to concrete, prioritised scenarios. This tells the evaluation team which scenarios to analyse first within its limited time."
  ],
  "explanation": "A utility tree structures quality attributes hierarchically down to prioritized scenarios and focuses the evaluation. Risk matrix, building block view, and ADR are each other artifacts."
 },
 "c5q6": {
  "q": "Which statements accurately describe the goals of an architecture evaluation?",
  "options": [
   "Make trade-offs between competing quality characteristics explicit in order to decide consciously.",
   "Bindingly fix effort and deadlines for the further implementation based on the evaluated architecture.",
   "Check whether the architecture is likely to support the required quality goals.",
   "Prove for every quality goal that it is achieved before implementation begins.",
   "Identify risks and weaknesses regarding the quality goals early, while corrections are still cheap."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Correct: Quality attributes often compete – more security may cost performance, for example. Evaluation makes such conflicts visible so that they are decided deliberately rather than by accident.",
   "Wrong: Setting effort and deadlines is the job of project planning. Evaluation results may feed into planning, but the goal of an architecture evaluation is to judge the architecture against the quality goals.",
   "Correct: At the core of every evaluation is the question whether the chosen structures and decisions are likely to achieve the required quality goals. The result is a well-founded assessment, not a guarantee.",
   "Wrong: An evaluation provides assessments and risks, not proof. Before implementation, goal achievement cannot be proven in principle, only made plausible.",
   "Correct: The earlier a risk is found, the cheaper the correction, because less has been built on top of it. Detecting weaknesses early is therefore a main purpose of evaluation."
  ],
  "explanation": "Architecture evaluation aims to find risks early, make trade-offs visible and estimate whether the quality goals are achievable. It is not proof of goal achievement and not a planning instrument for effort and deadlines."
 },
 "c5q7": {
  "q": "What does high coupling of a module tend to express?",
  "options": [
   "Many incoming and outgoing dependencies – tends to be harder to change and test in isolation and more prone to propagating changes.",
   "Low cohesion – high coupling and low cohesion describe the same property from two angles.",
   "Low reusability, which is directly reflected in the cyclomatic complexity.",
   "A high functional relatedness of the elements within the module."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Coupling measures how strongly a module depends on others or others depend on it. Many dependencies mean that changes propagate easily and the module is hard to test or replace in isolation.",
   "Wrong: High coupling and low cohesion often occur together, but they describe different things. Coupling concerns the relationships between modules, cohesion the togetherness of the elements within one module.",
   "Wrong: Cyclomatic complexity measures branching in a component's control flow, not its dependencies on other modules. There is no direct link between the two figures.",
   "Wrong: Strong functional relatedness within a module is the definition of high cohesion. It is actually desirable and ideally goes hand in hand with low coupling."
  ],
  "explanation": "High coupling = many dependencies on other modules; this makes isolated change and testing harder. Cohesion (relatedness within a module) often correlates with it but is a separate property."
 },
 "c5q8": {
  "q": "What does cyclomatic complexity measure?",
  "options": [
   "The code size, measured in lines (LOC).",
   "The number of dependencies of a module to other modules.",
   "The number of linearly independent paths through the control flow, essentially determined by the branches.",
   "The nesting depth of the inheritance hierarchy of a class."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: Lines of code only measure size. Long, linear code has many lines but low cyclomatic complexity, because it contains hardly any branches.",
   "Wrong: Dependencies between modules are captured by coupling (Ca/Ce). Cyclomatic complexity instead looks at the control flow within a piece of code.",
   "Correct: Cyclomatic complexity (McCabe) counts the linearly independent paths through the control-flow graph; every branch increases it. It therefore also indicates how many test cases are needed for path coverage.",
   "Wrong: Depth of the inheritance hierarchy is a separate object-oriented metric (Depth of Inheritance Tree). It describes class structures, not paths through the control flow."
  ],
  "explanation": "Cyclomatic complexity counts independent control-flow paths. Coupling, inheritance depth, and LOC are each other, easily confused metrics."
 },
 "c5q9": {
  "q": "Which statements about the benefit of quality scenarios in evaluation are correct?",
  "options": [
   "They describe which technical solution is to be used to implement a quality requirement.",
   "They are suited mainly for runtime qualities such as performance; maintainability can hardly be described with them.",
   "They serve as the yardstick against which architecture decisions are evaluated.",
   "They help prioritize quality goals, since not all scenarios are equally important.",
   "They make abstract quality goals concrete, measurable and thus verifiable."
  ],
  "correct": [
   2,
   3,
   4
  ],
  "optExpl": [
   "Wrong: Scenarios express the required behaviour (WHAT), not the solution (HOW). Precisely because they are solution-neutral, different architecture decisions can be measured against them.",
   "Wrong: Scenarios also work for development-time qualities. Maintainability is described through change scenarios, e.g. \"a new payment method can be integrated within two person-days\".",
   "Correct: A scenario states concretely what the system must achieve; architecture decisions are checked for whether they enable this behaviour. Scenarios are thus the yardstick of the evaluation.",
   "Correct: Because not all scenarios are equally important or risky, they are prioritised, e.g. in the utility tree. This focuses the evaluation on what really matters to stakeholders.",
   "Correct: Abstract goals such as \"high availability\" cannot be checked. Only a scenario with stimulus, environment and a measurable response measure turns them into a verifiable statement."
  ],
  "explanation": "Quality scenarios make goals verifiable, serve as the evaluation yardstick and can be prioritized. They describe the required behavior, not the solution – and as change scenarios they also work for maintainability."
 },
 "c5q10": {
  "q": "What characterizes an architecture review (or walkthrough) as an evaluation method?",
  "options": [
   "A qualitative method: experts jointly go through the design and assess it against the quality goals – even before implementation.",
   "A method that requires an implementation, because design models alone are not concrete enough for a review.",
   "A formal method with fixed roles, an independent moderator and minutes – in this a walkthrough does not differ from an inspection.",
   "A quantitative method, since metrics such as degree of coupling and complexity are collected in the review and checked against thresholds."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: In a review, experts judge the design based on their experience and the quality goals – a qualitative evaluation. Since no code is required, designs can be checked before implementation, when changes are still cheap.",
   "Wrong: Reviews work particularly well on designs, models and sketches. Not needing an implementation is a key advantage over quantitative methods.",
   "Wrong: This equates two review forms. Fixed roles, an independent moderator and minutes characterise an inspection; in a walkthrough the author leads through the design and the procedure is much less formal.",
   "Wrong: Metrics can be an input to a review, but the method itself remains expert judgement. What matters is how the evaluation is done – by judgement, not by measurement."
  ],
  "explanation": "An architecture review is a qualitative, expert-based examination – possible even without code. Metrics can feed in but do not make it quantitative. A walkthrough (author leads) is less formal than an inspection."
 },
 "c5q11": {
  "q": "Which of the following methods are qualitative evaluation methods?",
  "options": [
   "Determination of test coverage as a percentage value.",
   "Automatic counting of lines of code (LOC).",
   "Calculation of the cyclomatic complexity per component.",
   "Measurement of the coupling degree between modules.",
   "Architecture review or inspection by experts.",
   "Scenario-based analysis (e.g. ATAM)."
  ],
  "correct": [
   4,
   5
  ],
  "optExpl": [
   "Wrong: Test coverage is measured as a percentage of the code executed by tests. A measured figure is by definition quantitative.",
   "Wrong: Counting lines of code is an automatic measurement and therefore a quantitative method. It delivers a number, but no judgement about the architecture.",
   "Wrong: Cyclomatic complexity is computed from the control flow. As a calculated metric it belongs to the quantitative methods.",
   "Wrong: The degree of coupling is obtained by counting dependencies between modules. That is also a metric-based, i.e. quantitative, evaluation.",
   "Correct: In reviews and inspections, experts judge the design based on their knowledge and the quality goals. The result comes from judgement, not measurement – which makes it a qualitative method.",
   "Correct: In ATAM, scenarios are walked through against the architecture in a facilitated session and the consequences are judged by experts. Even though scenarios contain measures, the analysis itself is qualitative."
  ],
  "explanation": "Scenario analyses and expert reviews are qualitative. LOC, coupling, cyclomatic complexity, and test coverage are quantitative (metric-based) quantities."
 },
 "c5q12": {
  "q": "When should an architecture be evaluated?",
  "options": [
   "Early and repeatedly, accompanying important architecture decisions.",
   "Accompanying implementation steps, to check the actual against the target architecture and identified risks.",
   "Also for existing systems, e.g. before a major extension or migration.",
   "Once per release as a fixed milestone, since ongoing changes between releases devalue the results.",
   "Only once the architecture is fully worked out, since evaluating partial designs leads to unreliable statements."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "optExpl": [
   "Correct: You evaluate early because corrections are still cheap, and repeatedly because architecture and requirements evolve. Important decisions are natural occasions for an evaluation.",
   "Correct: After implementation steps, comparing target and actual architecture shows whether the implementation follows the plan. Deviations and incipient erosion are thus detected before they become entrenched.",
   "Correct: Evaluation is not limited to new development. Before a major extension or migration it clarifies whether the existing architecture can carry the new requirements and where the risks lie.",
   "Wrong: A fixed release cadence has nothing to do with the need for evaluation. Evaluations are triggered by occasions – important decisions or quality problems – and ongoing change is precisely a reason to evaluate repeatedly.",
   "Wrong: Waiting for the complete architecture means finding problems only when corrections are expensive. Partial designs can also be checked meaningfully against the quality goals."
  ],
  "explanation": "Evaluate early, repeatedly, alongside important decisions, after implementation steps (target vs. actual) and also for existing systems before major changes. Waiting for a complete architecture or a rigid release cadence are not sensible criteria."
 },
 "c5q13": {
  "q": "Which statements accurately describe the limits of metric-based (quantitative) evaluation?",
  "options": [
   "Metric values must be interpreted in context; a threshold alone is not yet an evaluation.",
   "Metrics such as cyclomatic complexity are directly comparable between systems, independent of programming language and system context.",
   "Metrics are especially suited for early design phases, because they can be derived from the requirements without existing code.",
   "Some quality characteristics (e.g. maintainability or security) can only partly be represented by metrics.",
   "If metrics are made the goal, participants easily optimize for the number instead of the actual quality."
  ],
  "correct": [
   0,
   3,
   4
  ],
  "optExpl": [
   "Correct: A metric value says little on its own – high complexity may be appropriate in a parser and a warning sign in a data class. Only interpretation in context turns the number into an evaluation.",
   "Wrong: Programming language, domain, coding style and tooling strongly influence metric values. Comparing values of different systems directly therefore easily leads to wrong conclusions.",
   "Wrong: Metrics need an analysable artefact such as code or an executable model. They cannot be derived from requirements alone; in early phases qualitative methods are more helpful.",
   "Correct: Maintainability or security depend on many factors that no single figure captures completely. Metrics provide indications that must be complemented by qualitative evaluation.",
   "Correct: Once a metric becomes a target, people optimise for the number instead of the actual quality (Goodhart's Law). An example is high test coverage achieved with tests that check nothing meaningful."
  ],
  "explanation": "Limits of metrics: they need context and interpretation, represent qualities only partly, require an artifact and lose their value when they become the goal themselves (Goodhart’s law). Cross-system comparisons are tricky."
 },
 "c5q14": {
  "q": "Which results are typical of an architecture evaluation?",
  "options": [
   "Uncovered sensitivity and trade-off points where individual quality characteristics are particularly affected.",
   "Also non-risks, i.e. decisions that were confirmed as uncritical.",
   "A metric that sums up the overall quality of the architecture in a single value.",
   "Identified risks, weaknesses and trade-offs together with prioritized improvement proposals.",
   "A revised target architecture that the evaluation team works out to replace the existing one."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Correct: Sensitivity points show where a decision strongly affects one quality attribute, trade-off points where it affects several in opposite directions. These spots deserve special attention in future changes.",
   "Correct: An evaluation also confirms which decisions are uncritical. Such non-risks are valuable because they give confidence and direct effort to the real problem areas.",
   "Wrong: Architecture quality cannot be expressed meaningfully in a single number, because quality goals differ and partly conflict. An evaluation therefore delivers differentiated findings per quality goal.",
   "Correct: The core result is the risks, weaknesses and trade-offs found. Prioritised recommendations turn them into actionable information for architects and management.",
   "Wrong: The evaluation team analyses and recommends, but it does not redesign. Responsibility for the architecture and its revision stays with the system's architects."
  ],
  "explanation": "Typical results: risks, non-risks, sensitivity and trade-off points and prioritized recommendations. No overall score and no architecture newly worked out by the evaluation team."
 },
 "k10": {
  "q": "Assign each method or key figure correctly: qualitative or quantitative method?",
  "categories": [
   "Qualitative",
   "Quantitative"
  ],
  "rows": [
   "Scenario-based analysis with stakeholders (ATAM)",
   "Facilitated walkthrough through the architecture design",
   "Expert inspection with minutes and independent moderator",
   "Instability I = Ce / (Ca + Ce) according to R. C. Martin",
   "Cyclomatic complexity per method",
   "Percentage test coverage"
  ],
  "explanation": "ATAM, inspection, and walkthrough are qualitative (expert-/scenario-based). Instability, test coverage, and cyclomatic complexity are quantitative (computed key figures)."
 },
 "c5q15": {
  "q": "Why are clearly formulated, prioritized quality goals a precondition for a meaningful architecture evaluation?",
  "options": [
   "Because the scope of an evaluation can only be derived from the functional requirements.",
   "Without prioritized quality goals the yardstick is missing against which architecture decisions could be evaluated at all.",
   "Prioritization focuses the evaluation on the most important and riskiest points.",
   "Because quality goals determine which concrete technologies must be used in the system.",
   "Because an evaluation can only check quality goals that already exist as quantitative metrics."
  ],
  "correct": [
   1,
   2
  ],
  "optExpl": [
   "Wrong: Functional requirements state what the system should do, not how well. The yardstick and scope of an architecture evaluation derive mainly from the quality goals, because they shape the architecture most.",
   "Correct: Evaluating means measuring something against a yardstick. Without clear quality goals you could not say whether a decision is good or bad – only that it is different.",
   "Correct: An evaluation has limited time and cannot check everything. Prioritisation directs the effort to the most important goals and the riskiest decisions.",
   "Wrong: Quality goals describe required properties such as availability or modifiability. Which technologies fulfil them is a later design decision and not part of the goal.",
   "Wrong: Quality goals do not have to exist as metrics. They are made concrete through scenarios and can be evaluated qualitatively, e.g. with ATAM or a review."
  ],
  "explanation": "Prioritized quality goals are the yardstick and focus of every evaluation. They need not exist as metrics – scenarios and qualitative evaluation suffice – and they do not determine technologies."
 },
 "c5q16": {
  "q": "What is the purpose of tools for static code or architecture analysis?",
  "options": [
   "For proving that the architecture meets the required quality goals such as performance or availability.",
   "For (partly) automated checking of code and structure without execution – e.g. metrics as well as naming and dependency rules.",
   "They can automatically check dependency and layering rules for violations.",
   "For measuring runtime behavior (response times, memory consumption) under real load.",
   "For gathering qualitative expert assessments in moderated workshops."
  ],
  "correct": [
   1,
   2
  ],
  "optExpl": [
   "Wrong: Static analysis looks at code and structure without executing the program. Runtime qualities such as performance or availability only show in operation and cannot be proven this way.",
   "Correct: Static analysis tools examine source code and structure without starting the system. They compute metrics and check rules, e.g. on naming or dependencies, in a repeatable, partly automated way.",
   "Correct: A main benefit is conformance checking: the tool compares the actual dependencies with the architecture rules, e.g. \"the UI must not access the database directly\". Violations thus become visible automatically, for example in the build.",
   "Wrong: Response times and memory consumption under load are measured dynamically, i.e. on the running system with load tests, profiling or monitoring. Static analysis precisely does not execute the code.",
   "Wrong: Facilitated workshops with expert judgements are qualitative methods such as reviews or ATAM. Analysis tools instead produce automatically determined findings."
  ],
  "explanation": "Static analysis checks code and structure without execution (metrics, naming, dependency and layering rules). It cannot prove runtime qualities such as performance or availability – that needs dynamic measurement."
 },
 "c5q17": {
  "q": "What is a trade-off point in architecture evaluation (e.g. in ATAM)?",
  "options": [
   "A decision that is decisive for exactly one single quality characteristic.",
   "A risk that arises from an architecture decision not yet taken.",
   "A scenario in the utility tree that has both high importance and high implementation risk.",
   "A decision or property that affects several quality characteristics in opposite directions."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: A decision that is decisive for exactly one quality attribute is a sensitivity point. A trade-off point exists only when the same decision affects several attributes in opposite directions.",
   "Wrong: Open or unresolved decisions can be a risk. A trade-off point, however, is a concrete decision where a gain in one attribute is bought with a loss in another.",
   "Wrong: High importance and high difficulty (H,H) describe a scenario's priority in the utility tree. That tells you what to analyse first, not how a decision balances qualities against each other.",
   "Correct: A trade-off point improves one quality attribute at the expense of another, e.g. encryption increases security but reduces performance. It is therefore always a sensitivity point for several attributes at once."
  ],
  "explanation": "Trade-off point = decision that affects several quality characteristics in opposite directions. Distinguish: sensitivity point (exactly one characteristic), risk (e.g. open decision), (H,H) scenario (prioritization in the utility tree)."
 },
 "c5q18": {
  "q": "What should an architecture evaluation with severely limited time concentrate on?",
  "options": [
   "On the building blocks with the highest change rate according to version control.",
   "On the technically newest components, because the team knowledge there is lowest.",
   "On a check of all building blocks that is as complete as possible, so as to miss nothing.",
   "On the highest-prioritized quality goals and the scenarios with the greatest risk."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: A high change rate may indicate problems but says nothing about whether important quality goals are at stake there. With limited time it is at most a supplementary hint, not a primary selection criterion.",
   "Wrong: How new a technology is says nothing about its relevance for the quality goals. Missing team knowledge can be a risk, but selection must be guided by priority and risk to the goals.",
   "Wrong: With limited time a complete review is simply not feasible and would end up superficial. An evaluation is more valuable when it examines a few important points thoroughly rather than everything briefly.",
   "Correct: An evaluation should above all find the risks that threaten the most important goals. That is why it focuses on high-priority quality goals and high-risk scenarios – exactly what prioritisation in the utility tree provides."
  ],
  "explanation": "With limited time you focus on prioritized quality goals and the greatest risks. Completeness, mere change rate, or novelty degree are secondary or unsuitable criteria."
 },
 "c5q19": {
  "q": "Which statements about architecture evaluation are correct?",
  "options": [
   "It uncovers risks and weaknesses early.",
   "It needs clear, prioritized quality goals as a yardstick.",
   "Its result is mainly an overall score with which architectures of different systems can be compared.",
   "It requires the architecture to be documented in a formal notation (e.g. UML).",
   "It can be qualitative or quantitative – or combined."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Correct: The main benefit of an evaluation is finding risks and weaknesses while it is still cheap to counteract. Wrong decisions built in later are much more expensive to fix.",
   "Correct: Whether an architecture is good can only be judged relative to its goals. Prioritised quality goals are therefore the yardstick without which no evaluation is possible.",
   "Wrong: An evaluation delivers differentiated findings such as risks and trade-offs relative to the system's own goals. Since different systems have different goals, a comparable overall score would be neither meaningful nor the purpose of the method.",
   "Wrong: A formal notation is helpful but not a prerequisite. Evaluations can also be based on sketches, conversations with the team or the existing code.",
   "Correct: Qualitative methods such as reviews and ATAM and quantitative ones such as metrics and measurements complement each other. Which to use depends on the question and the available artefacts."
  ],
  "explanation": "Architecture evaluation uncovers risks early, needs prioritized quality goals and can be qualitative, quantitative or combined. It needs no formal notation and does not deliver an overall score."
 },
 "c5q20": {
  "q": "What is a sensitivity point in an architecture evaluation (e.g. in ATAM)?",
  "options": [
   "A decision that affects several quality characteristics in opposite directions.",
   "A building block with particularly many incoming dependencies whose change affects many other building blocks.",
   "A decision or property that is particularly decisive for exactly one quality characteristic.",
   "A point where stakeholders state different priorities for the same quality characteristic."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: A decision that affects several quality attributes in opposite directions is a trade-off point. A sensitivity point only considers the strong effect on a single attribute.",
   "Wrong: Many incoming dependencies describe high afferent coupling – a code metric. A sensitivity point, by contrast, is an ATAM term for a decision with a strong effect on one quality attribute.",
   "Correct: A sensitivity point is a decision or property on which one quality attribute strongly depends, e.g. the thread-pool size for response time. Changing it noticeably changes that quality.",
   "Wrong: Different priorities of different stakeholders are a conflict in prioritisation. A sensitivity point refers to an architecture decision, not to differences of opinion."
  ],
  "explanation": "Sensitivity point = decision on which one quality characteristic significantly depends. Do not confuse with trade-off point (several characteristics in opposite directions), stakeholder conflicts or high afferent coupling."
 },
 "c5q21": {
  "q": "Which types of result does a scenario-based evaluation such as ATAM typically deliver?",
  "options": [
   "Identified risks and explicitly named non-risks.",
   "Sensitivity and trade-off points.",
   "A quantitative overall assessment that compares the system with reference architectures.",
   "A prioritized quality tree (utility tree) of the relevant scenarios.",
   "Risk themes that bundle several related individual risks."
  ],
  "correct": [
   0,
   1,
   3,
   4
  ],
  "optExpl": [
   "Correct: ATAM names risks, i.e. problematic decisions, and explicitly also non-risks, i.e. decisions confirmed as sound. Together they show where action is needed and where it is not.",
   "Correct: Sensitivity and trade-off points arise when scenarios are walked through against the decisions. They show where qualities react particularly sensitively or are balanced against each other.",
   "Wrong: ATAM is mainly qualitative and measures the system against its own quality goals. A quantitative overall score or a comparison with reference architectures is not part of the method.",
   "Correct: During ATAM a utility tree is created and prioritised, organising the relevant scenarios. It is both the working basis and a documented result of the evaluation.",
   "Correct: ATAM groups related individual risks into risk themes. This reveals systematic weaknesses and allows management to address them specifically."
  ],
  "explanation": "ATAM delivers the utility tree, risks, non-risks, sensitivity and trade-off points as well as bundled risk themes. It is mainly qualitative – no quantitative overall score."
 },
 "c5q22": {
  "q": "A team wants to evaluate an architecture already before implementation and involve stakeholders in doing so. How is ATAM to be classified in this context?",
  "options": [
   "As a moderated workshop method in which the stakeholders select the best architecture alternative by vote.",
   "As a qualitative method that nevertheless requires a largely finished implementation, because the scenarios are played through against the running system.",
   "As a method for cost-benefit evaluation of architecture alternatives that works primarily with monetary values.",
   "As a scenario-based, mainly qualitative method, moderated with stakeholders and therefore usable early in the life cycle."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: ATAM analyses which risks and trade-offs an architecture entails; it is not a voting procedure. Stakeholders contribute scenarios and priorities, but choosing between alternatives is not the core of the method.",
   "Wrong: The scenarios are walked through against the architecture decisions and the design, not against a running system. That is exactly why ATAM can be used before implementation.",
   "Wrong: Cost-benefit evaluation in monetary terms describes CBAM, which can build on ATAM results. ATAM itself assesses how decisions affect quality goals.",
   "Correct: ATAM uses prioritised scenarios and the judgement of stakeholders and architects in facilitated workshops. Since no code is required, it fits exactly the situation of evaluating early while involving stakeholders."
  ],
  "explanation": "ATAM is scenario-based, mainly qualitative, moderated with stakeholders and usable before implementation. Distinguish: CBAM (cost-benefit), no playing through against a running system, no vote on alternatives."
 },
 "c5q23": {
  "q": "Which form of review has the highest degree of formalization?",
  "options": [
   "The informal review without fixed roles and without minutes.",
   "The walkthrough, in which the author guides the participants through the design.",
   "The inspection - with preparation, defined roles, minutes, and an independent moderator.",
   "Pair programming, in which two developers work on the code together."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: The informal review is the least formal form, precisely because it has no fixed roles and no minutes. It is quick and cheap but offers the least rigour.",
   "Wrong: In a walkthrough the author guides the participants through the design. It is thus more structured than an informal review but less formal than an inspection, because moderation and defined roles are missing.",
   "Correct: The inspection is the most formal review form: participants prepare, have defined roles, an independent moderator leads and findings are recorded. This rigour makes it costly but especially thorough.",
   "Wrong: Pair programming is a development practice in which two people write code together. It does involve a kind of continuous review, but it is not a formalised review format."
  ],
  "explanation": "The degree of formalization increases: informal -> walkthrough -> inspection. The inspection is the most formal; pair programming is not a review format at all."
 },
 "c5q24": {
  "q": "What does risk management from an architecture perspective focus on above all?",
  "options": [
   "On project risks such as schedule and budget planning, for which the architect is solely responsible.",
   "On consciously accepting risks and only reacting when they occur.",
   "On product risks – most often they are mitigated by lowering their probability of occurrence.",
   "On product risks – most often they are mitigated by limiting the extent of damage when they occur."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: Schedule and budget risks are project risks and lie primarily with project management. Architects contribute, but their focus is on risks affecting the product itself.",
   "Wrong: Consciously accepting risks is a legitimate option for individual, minor risks. As a general stance it would contradict the purpose of risk management, which is to reduce risks proactively.",
   "Correct: From an architecture perspective, product risks are in the foreground, e.g. that the system cannot cope with load or failures. They are most often addressed by lowering their probability, e.g. through prototypes, redundancy or early tests.",
   "Wrong: The focus on product risks is right, but limiting the damage is not the most common measure. Usually one first tries to make the risk less likely; damage limitation is a complementary strategy."
  ],
  "explanation": "From an architecture perspective, product risks are central; most often their probability of occurrence is lowered. Limiting damage and acceptance are further, less frequently chosen strategies."
 },
 "c5q25": {
  "q": "In a long-running system, the actually implemented structure increasingly diverges from the documented target architecture. Which statements are correct?",
  "options": [
   "Erosion occurs mainly in poorly documented systems; complete documentation largely prevents it.",
   "This is called architecture erosion; without countermeasures the “disorder” increases over time.",
   "Erosion is caused primarily by outdated technologies and can therefore be fixed by regular framework updates.",
   "Regular conformance checks (e.g. dependency analysis) help to make such deviations visible early.",
   "The planned qualities can only be reliably expected if the implementation follows the intended structure."
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Wrong: Documentation only describes the target, it does not enforce it. Even well-documented systems erode when shortcuts are taken in daily work and the implementation is not regularly checked against the architecture.",
   "Correct: The growing divergence between intended and implemented structure is called architecture erosion. Without active countermeasures it keeps increasing through many small deviations.",
   "Wrong: Erosion concerns structure, e.g. forbidden dependencies or blurred responsibilities. Outdated technologies are a different problem; framework updates do not change the fact that building blocks depend on each other wrongly.",
   "Correct: Conformance checks, e.g. automated dependency analysis in the build, continuously compare actual and target structure. Deviations become visible early, while they are still easy to fix.",
   "Correct: An architecture's qualities emerge from its structure. If the implementation deviates from it, the assumptions on which e.g. modifiability or testability rest no longer hold."
  ],
  "explanation": "Architecture erosion = the actual structure drifts away from the target; this endangers the planned qualities. Regular conformance checks counter it. Neither good documentation nor framework updates prevent erosion."
 },
 "c5q26": {
  "q": "What does a conformity or consistency analysis of the architecture check?",
  "options": [
   "Whether the architecture documentation is written free of contradictions and completely.",
   "Whether the libraries used are at the current version level.",
   "Whether the implemented actual architecture matches the intended target architecture.",
   "Whether the elicited requirements completely cover the quality goals."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: Whether the documentation is consistent and complete is clarified by a documentation review. Conformance analysis instead compares the documentation or target with what was actually implemented.",
   "Wrong: Up-to-date library versions are a matter of dependency or release management. This has nothing to do with whether planned and implemented structure match.",
   "Correct: Conformance analysis checks whether the implemented (actual) architecture matches the intended (target) architecture, e.g. whether only permitted dependencies exist. This is how architecture erosion is detected.",
   "Wrong: Whether requirements fully cover the quality goals is a question for requirements engineering. Conformance analysis comes later and compares design and implementation."
  ],
  "explanation": "A conformity analysis compares actual and target architecture and thus uncovers erosion. Documentation quality, requirements coverage, and library versions are each other checks."
 },
 "c5q27": {
  "q": "With what can compliance with planned dependency or layer rules be checked most reliably?",
  "options": [
   "With static analysis or tools that check actual dependencies against defined rules.",
   "With runtime monitoring that logs the modules actually invoked in operation.",
   "With a manual code review that spot-checks individual classes.",
   "With binding naming conventions that all teams are supposed to follow."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Static analysis tools extract all actual dependencies from the code and check them against the defined rules. This happens completely, repeatably and automatically, e.g. in every build – which makes it the most reliable option.",
   "Wrong: Runtime monitoring only sees the paths actually executed in operation. A forbidden dependency in rarely used code remains undetected, even though it exists in the code.",
   "Wrong: A manual review can find violations, but it only checks samples and depends on the reviewers' attention. For complete and repeatable control it is much less reliable than a tool.",
   "Wrong: Naming conventions express an intention but check nothing. Whether everyone follows them and the dependencies actually comply with the rules remains open without verification."
  ],
  "explanation": "Forbidden dependencies (e.g. between layers) are found most reliably with static dependency analysis – automated and complete. Manual reviews (sampling), runtime monitoring (only executed paths) or mere naming conventions (no proof) are less reliable."
 },
 "c6q1": {
  "q": "A colleague argues that Chapter 6 (\"Examples of software architectures\") is dispensable because it contains \"nothing new\". How can the purpose of the chapter be accurately characterized?",
  "options": [
   "It primarily serves to present preferred reference architectures and technology stacks for typical domains.",
   "It summarizes the central definitions of the previous chapters in an exam-relevant way and thus replaces reviewing them separately.",
   "It applies the content of the previous chapters to concrete cases and makes relationships comprehensible, without introducing new examinable material.",
   "It derives generalizable rules from the examples that are to be learned as a supplement to the previous learning goals."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: The curriculum is deliberately technology-neutral and prescribes neither reference architectures nor technology stacks. The examples show how decisions arise from their specific context – a stack is just one result under certain constraints, not a recommendation.",
   "Wrong: Chapter 6 is not a summary of definitions and does not replace the subject chapters. The examinable material is the R1/R2 learning goals of chapters 1–5; the examples presuppose this knowledge instead of condensing it.",
   "Correct: The examples apply requirements clarification, design, documentation and evaluation to concrete systems, making visible how the topics interact. As an R3 chapter it introduces no new examinable material but deepens the understanding of what has already been learned.",
   "Wrong: The examples do not produce additional learning goals or rules to memorize. They are context-bound; the gain lies in understanding the reasoning behind decisions, not in new generalized prescriptions."
  ],
  "explanation": "Chapter 6 applies what has been learned using examples and makes relationships comprehensible (R3). It is not new examinable material, not an exam-relevant summary, derives no additional rules, and prescribes no technologies."
 },
 "c6q2": {
  "q": "A continuous architecture example is meant to show the \"common thread\" from the requirements to the solution. Which aspects should one above all be able to recognize in it? (Multiple choice)",
  "options": [
   "Which implementation details (e.g. classes and methods) concretely realize the decisions.",
   "How quality requirements and constraints influence the central design decisions.",
   "Which solution can be transferred to other systems as a universally valid reference.",
   "Which alternatives were considered and for what reasons they were rejected.",
   "How a decision shapes the structure and becomes visible in different views."
  ],
  "correct": [
   1,
   3,
   4
  ],
  "optExpl": [
   "Wrong: Classes and methods lie below the architecture level and do not show why a structure was chosen. The common thread links requirements to architecture decisions; implementation details contribute little to it.",
   "Correct: Quality requirements and constraints are the real drivers of the architecture. A good example makes it traceable how, say, an availability requirement or a platform constraint forces a central decision.",
   "Wrong: Architecture solutions are context-dependent and cannot be transferred to arbitrary systems as a universally valid reference. An example shows a suitable solution for its own constraints, not a template for other contexts.",
   "Correct: Only the considered and rejected alternatives with their reasons make a decision traceable. This is exactly what architecture decision records (ADRs) capture: without alternatives it would remain unclear why this particular solution was chosen.",
   "Correct: An important decision shapes the structure and becomes visible in several views – e.g. as a building block in the building block view, as an interaction in the runtime view and as a node in the deployment view. This reveals the link between decision and documentation."
  ],
  "explanation": "A continuous example shows how requirements and constraints shape decisions, how these appear in the views and which alternatives were rejected and why. Implementation details or a universally valid reference solution are not the goal."
 },
 "c6q3": {
  "q": "How should the role of Chapter 6 (examples) be correctly classified in relation to the CPSA-F exam?",
  "options": [
   "It is R1: the continuous examples form a focal point of the exam questions.",
   "It is R2: not examined directly, but one must know the examples as reference solutions.",
   "It is predominantly R3: part of the curriculum for illustration, but not a direct subject of the exam.",
   "It lies outside the curriculum and is purely optional supplementary material."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: R1 content consists of the core topics that are very likely to be examined. Chapter 6 is not one of them and does not form a focal point of the exam questions.",
   "Wrong: R2 means \"may be examined\", and the examples are not classified at that level. Nor must they be mastered as reference solutions, because they serve as illustration, not as a template.",
   "Correct: R3 marks content that belongs to the curriculum and supports understanding but is not directly examined. That is exactly the role of chapter 6: it illustrates the examinable content of chapters 1–5.",
   "Wrong: Chapter 6 is an official part of the curriculum and is covered in trainings. The fact that it is not directly examined (R3) does not make it external supplementary material."
  ],
  "explanation": "Chapter 6 is predominantly R3: part of the curriculum for illustration, but not direct examinable material. It is neither R2 nor R1 and does not lie outside the curriculum."
 },
 "c6q4": {
  "q": "Two examples solve a similar requirement with different architectural approaches. What is the actual learning benefit of this?",
  "options": [
   "That comparing the two solutions allows the objectively superior one to be determined.",
   "That a universally valid model solution can be derived from it, anticipating future decisions.",
   "That the differences are mainly due to the different experience of the teams involved.",
   "That design decisions are context-dependent and the same requirement can be solved sensibly in different ways depending on the constraints."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: Without reference to context, quality goals and constraints there is no objectively superior solution. Each approach can be appropriate in its own setting; the comparison shows trade-offs, not a winner.",
   "Wrong: Precisely because the solutions differ, no universally valid model solution can be derived. Future decisions must again be justified from their specific context.",
   "Wrong: Team experience is a possible constraint, but it is not the central learning benefit. What matters is that different requirements, quality goals and constraints lead to different, equally sensible solutions.",
   "Correct: Architecture decisions are context-dependent – the same functional requirement can be solved more or less well depending on quality goals, budget, organization or technical constraints. The comparison trains you to always measure solutions against their constraints."
  ],
  "explanation": "The comparison shows that architecture decisions are context-dependent: the same requirement can be solved sensibly in a different way under different constraints."
 },
 "c6q5": {
  "q": "What benefit does studying several different architecture examples bring? (Multiple choice)",
  "options": [
   "You learn which technologies have become standard on the market.",
   "You can adopt proven solutions unchanged, as long as the domain is the same.",
   "You broaden your repertoire of solution patterns and practice transferring them to new problems.",
   "You sharpen your eye for which constraints justify which decisions.",
   "You recognize recurring patterns and at the same time learn to assess their limits and context dependency."
  ],
  "correct": [
   2,
   3,
   4
  ],
  "optExpl": [
   "Wrong: Architecture examples are not a market overview of technologies; the curriculum is deliberately technology-neutral. What you learn are trade-offs and justifications, not which products have prevailed.",
   "Wrong: Even within the same domain, quality goals, constraints and organization often differ considerably. Proven solutions are therefore a source of ideas but must be checked and adapted for your own context.",
   "Correct: Each example shows solution approaches and patterns in use and thus broadens your own repertoire. At the same time you practice transferring these approaches to new problems instead of merely knowing them.",
   "Correct: Examples make visible which constraints justify which decisions – for instance why a strict data protection requirement forces a particular distribution. This perspective helps you justify your own decisions soundly.",
   "Correct: Across several examples you recognize recurring patterns, but also see when they do not fit. Patterns are context-dependent; their benefits and limits only become apparent in concrete use."
  ],
  "explanation": "Several examples broaden the solution repertoire, sharpen the eye for justifying constraints and show patterns including their limits. They provide neither copy templates – not even within one domain – nor a technology overview."
 },
 "c6q6": {
  "q": "In an architecture example, a decision is explicitly documented together with its disadvantages. Why is looking at such trade-offs in particular instructive?",
  "options": [
   "Because the documented disadvantages prove that a better, disadvantage-free solution was overlooked at this point.",
   "Because architecture decisions weigh competing quality goals against each other, and the conscious, justified compromise forms the core of the decision.",
   "Because disclosing disadvantages serves above all to later defend against criticism and less the design itself.",
   "Because a good design should be reworked until no disadvantages remain."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: Documented disadvantages are no sign of an overlooked ideal, because disadvantage-free solutions generally do not exist. Any decision that strengthens one quality goal usually costs something elsewhere – performance versus maintainability, for example.",
   "Correct: Quality goals often compete with each other, such as security and usability or flexibility and performance. The conscious, justified compromise is the core of an architecture decision – knowing the disadvantages explains why the decision was made anyway.",
   "Wrong: Disadvantages are disclosed so that the trade-off is comprehensible and risks are accepted consciously, not primarily to defend against criticism. They are part of the design knowledge and help to review or revise the decision later.",
   "Wrong: A design cannot be reworked until no disadvantages remain, because competing quality goals always force compromises. The aim is an appropriate solution with consciously accepted disadvantages, not a perfect one."
  ],
  "explanation": "Trade-offs are instructive because architecture weighs competing quality goals and the justified compromise forms the core of every decision. Disadvantages do not prove an overlooked ideal solution, cannot be optimized away, and are not documented merely as a defense. (R3.)"
 },
 "k16": {
  "q": "You are the architect of a complex system developed by three teams, each with their own architects. Classify the statements on structure and documentation governance.",
  "categories": [
   "Sensible",
   "Not sensible"
  ],
  "rows": [
   "You agree on a common documentation template (e.g. arc42) for all teams.",
   "Interfaces between the teams are only defined once all teams have implemented their building blocks.",
   "Each team chooses its own documentation format, as long as it is internally consistent.",
   "You define the overarching structure and the interfaces between the teams centrally, but leave the internal structure of the building blocks to the teams.",
   "You also define the internal structure of each team's building block in detail so that everything is uniform.",
   "You document the overarching architecture decisions centrally; team-specific details are documented by the teams themselves."
  ],
  "explanation": "Sensible: overarching structure and interfaces central, internals with the teams, common template, overarching decisions documented centrally. Not sensible: prescribing all teams' internals centrally (bottleneck, no autonomy), clarifying interfaces only afterwards, or separate formats per team without a common structure."
 },
 "k17": {
  "q": "A stakeholder asks what deliberate architecture work brings to the project. Classify the statements about the goals and benefits of software architecture.",
  "categories": [
   "Applies",
   "Does not apply"
  ],
  "rows": [
   "It creates a shared understanding among the stakeholders.",
   "It lowers the cost of initial development in every case.",
   "It supports achieving quality goals such as maintainability and security.",
   "It determines which features the system should have.",
   "It ensures that all quality goals are met to the maximum at the same time without compromise.",
   "It helps keep the complexity of the system manageable."
  ],
  "explanation": "Architecture makes complexity manageable, supports quality goals and creates shared understanding. It does not necessarily lower initial development costs (architecture work costs effort), does not determine the functional scope and requires compromises between quality goals."
 },
 "k18": {
  "q": "A new system is to be built. Classify each item: (functional/quality) requirement or (limiting) constraint?",
  "categories": [
   "Requirement",
   "Constraint"
  ],
  "rows": [
   "Users should be able to export reports as PDF.",
   "The system must be able to process credit-card payments.",
   "Development must mandatorily be done in Java.",
   "Responses should on average take less than two seconds.",
   "The project budget is limited to 200 person-days.",
   "It must reuse the existing Oracle database."
  ],
  "explanation": "Requirements describe what the system should do – functional (credit card, PDF) or quality (response time). Constraints limit the solution space (prescribed DB, language, budget) – LG 02-02."
 },
 "k19": {
  "q": "Classify each requirement: does it describe WHAT the system should do (functional) or HOW WELL (quality)?",
  "categories": [
   "Functional requirement",
   "Quality requirement"
  ],
  "rows": [
   "A new payment method can be integrated in less than five person-days.",
   "Users log in with email and password.",
   "An invoice is generated as a PDF from an order.",
   "The interface can be operated without training in under ten minutes.",
   "The system supports German and English.",
   "The system is available 99.9 % of the time."
  ],
  "explanation": "Functional requirements say WHAT the system does (login, invoice, languages); quality requirements say HOW WELL (availability, changeability, usability) – LG 02-03."
 },
 "k21": {
  "q": "Classify the statements about the exam-relevant architecture patterns (layers, pipes & filters, microservices).",
  "categories": [
   "True",
   "False"
  ],
  "rows": [
   "In strict layering a higher layer may skip any lower layers.",
   "Microservices reduce operational complexity compared with a monolith.",
   "Microservices are cut by business area and independently deployable.",
   "A layered architecture fosters replaceability but can cost additional latency.",
   "Pipes & filters are well suited for step-by-step data processing.",
   "Pipes & filters are well suited when the filters share a common mutable state."
  ],
  "explanation": "True: layers foster replaceability (but cost latency), pipes & filters fit step-by-step data processing, microservices are cut by business area and independently deployable. False: microservices increase operational complexity, filters share no state, and strict layering forbids skipping."
 },
 "k22": {
  "q": "Classify whether it is typically a cross-cutting concern (affects many building blocks) or a local, business-specific task.",
  "categories": [
   "Cross-cutting concern",
   "Not cross-cutting"
  ],
  "rows": [
   "Error handling.",
   "The layout of a single dialog window.",
   "Authentication and authorization (security).",
   "The concrete calculation of the invoice total in the order module.",
   "Persistence / data access.",
   "Logging."
  ],
  "explanation": "Cross-cutting concerns affect many/all building blocks and need a uniform concept (logging, error handling, security, persistence) – LG 03-10. A single business calculation or a single dialog layout are local."
 },
 "k23": {
  "q": "You begin designing a new architecture. Classify the approaches.",
  "categories": [
   "Sensible",
   "Not sensible"
  ],
  "rows": [
   "Deliberately separate business and technical concerns.",
   "Obtain feedback from operations only once the deployment view is fully documented.",
   "Secure the architecture early with a prototype against the biggest risks.",
   "Refine building blocks step by step from black box to white box.",
   "Fix the technology definitively before the quality requirements are clarified.",
   "First work out the design completely and only then validate it with prototypes."
  ],
  "explanation": "Sensible: prototype early and risk-driven, separate business and technical concerns, refine black box → white box. Not sensible: design completely first and validate afterwards, fix technology before quality requirements, or obtain feedback only after documentation is complete."
 },
 "k24": {
  "q": "Which contents belong in an Architecture Decision Record (ADR)?",
  "categories": [
   "Belongs in an ADR",
   "Does not belong"
  ],
  "rows": [
   "The consequences (pros and cons) of the decision.",
   "The context or the underlying problem.",
   "The alternatives considered.",
   "A continuously updated description of the current system state.",
   "A detailed implementation guide for the developers.",
   "The decision taken."
  ],
  "explanation": "An ADR contains context, decision, alternatives and consequences. Implementation guides and a continuously maintained system description do not belong in it – an ADR records a decision at its point in time."
 },
 "k25": {
  "q": "Classify the analysis methods: do they mainly yield measured values (quantitative) or assessments (qualitative)?",
  "categories": [
   "Quantitative method",
   "Qualitative method"
  ],
  "rows": [
   "User survey on usability.",
   "Counting incoming and outgoing dependencies (coupling metric).",
   "Expert interview about the architecture.",
   "Measuring response times under load.",
   "Measuring LOC and cyclomatic complexity.",
   "Scenario-based evaluation in a workshop."
  ],
  "explanation": "Quantitative methods yield measured values (runtime, coupling/code metrics); qualitative methods yield assessments (interviews, scenario-based evaluation, surveys) – LG 05-02. The two complement each other."
 },
 "k26": {
  "q": "You want to check whether the implementation still matches the architecture guidelines (target/actual comparison). Classify the approaches.",
  "categories": [
   "Reveals deviation",
   "Unsuitable for this"
  ],
  "rows": [
   "Architecture review against the documented guidelines.",
   "Running load tests against the overall system.",
   "Static analysis of the dependency and layering rules in the build.",
   "Automated target/actual comparison of the allowed layer accesses.",
   "Raising unit-test coverage to over 80%.",
   "Fitness functions that continuously monitor an architecture rule."
  ],
  "explanation": "Structural target/actual deviations are uncovered by static dependency analysis, reviews against the guidelines and fitness functions. High test coverage and load tests check function or runtime behavior – forbidden dependencies remain undetected."
 },
 "k27": {
  "q": "Classify the properties of a designed interface.",
  "categories": [
   "Desirable",
   "Not desirable"
  ],
  "rows": [
   "Separates interface and implementation so the realization stays replaceable.",
   "Functionally complete from the user's perspective.",
   "Hard to misuse – incorrect use is difficult.",
   "Easy to learn and use.",
   "Exposes internal implementation details.",
   "Breaks on almost every internal change to the implementation."
  ],
  "explanation": "Good interfaces are easy to use, hard to misuse, functionally complete and separate interface from implementation (replaceable) – LG 03-07. Exposing internal details or breaking on every change is undesirable (too tight coupling)."
 },
 "c3q67": {
  "q": "What typically happens when there is high, tight coupling between building blocks?",
  "options": [
   "The reusability of individual building blocks decreases.",
   "Changes to one building block propagate to many others.",
   "The cohesion of the building blocks involved increases, since they work closely together.",
   "The building blocks can be developed in parallel by different teams more easily, since they are closely coordinated.",
   "Building blocks are hard to test in isolation."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Correct: A tightly coupled building block cannot be extracted on its own, because it brings its partners along. Anyone who wants to reuse it has to take all its dependencies with it.",
   "Correct: If many building blocks depend tightly on another one, a change there forces adaptations in all dependents. This ripple effect makes changes expensive and risky.",
   "Wrong: This confuses coupling with cohesion. Cohesion describes how well things belong together within a building block, coupling describes dependencies between building blocks – tight coupling does not increase cohesion and often goes hand in hand with low cohesion.",
   "Wrong: Tight coupling forces constant coordination, because one team's changes affect the other teams' building blocks. Loose coupling is precisely the prerequisite for teams to work independently and in parallel.",
   "Correct: To test a tightly coupled building block, its partners must run as well or be replaced with considerable effort. Isolated unit tests therefore become difficult."
  ],
  "explanation": "Tight coupling lets changes spread and makes isolated testing, reuse and parallel development harder. It is not a sign of high cohesion."
 },
 "c3q68": {
  "q": "A building block exposes its internal implementation details (no information hiding). What are the consequences?",
  "options": [
   "The building block becomes more flexible to use, and the maintenance effort for interfaces drops permanently.",
   "As long as the internals are well documented, changes to them remain without consequences for the users.",
   "The implementation becomes harder to replace.",
   "Coupling to the building block increases.",
   "Users bind themselves to internals – changes to them break the users."
  ],
  "correct": [
   2,
   3,
   4
  ],
  "optExpl": [
   "Wrong: In the short term, direct access to internals seems flexible. In the long term, however, every internal change becomes an interface change because users depend on it – maintenance effort rises instead of falling.",
   "Wrong: Documentation makes the dependency on internals visible but does not remove it. If a documented internal detail changes, all users relying on it still have to be adapted.",
   "Correct: If users access internal details, a new implementation has to reproduce exactly those details. Information hiding is precisely the prerequisite for replacing the implementation behind a stable interface.",
   "Correct: Users no longer depend only on the interface but also on internal structures. This means more and stronger dependencies – coupling increases.",
   "Correct: Users of internals rely on details that the building block should actually be free to change. Every such change then breaks the users, even though the actual contract has not changed."
  ],
  "explanation": "Without information hiding, users depend on internals: coupling rises, replaceability drops, every internal change becomes an interface change. Documentation does not change this."
 },
 "c3q69": {
  "q": "What happens when a building block has low cohesion (it bundles unrelated things)?",
  "options": [
   "As a whole it is poorly reusable.",
   "It is particularly reusable, since it offers many different functions.",
   "It must be changed for several independent reasons.",
   "It is harder to understand and test.",
   "It tends to have fewer dependencies on other building blocks, since it does many tasks itself."
  ],
  "correct": [
   0,
   2,
   3
  ],
  "optExpl": [
   "Correct: Anyone who only needs part of the functionality has to take over the entire catch-all building block including its dependencies. This makes it poorly reusable as a whole.",
   "Wrong: Many functions sound like broad applicability, but unrelated things are precisely what hinders reuse. Building blocks with a clearly defined, coherent task are the ones that are easy to reuse.",
   "Correct: If a building block bundles unrelated tasks, every change to one of them affects it. It therefore has several independent reasons to change, and changes to one part endanger the others.",
   "Correct: Without a common purpose, the building block lacks a clear idea that makes it understandable. Tests have to cover many independent aspects and their interactions, which makes them laborious.",
   "Wrong: A catch-all building block is typically used by many others and uses many things itself. Low cohesion therefore tends to attract more dependencies – coupling increases rather than decreases."
  ],
  "explanation": "Low cohesion makes building blocks hard to understand and test; they change for several reasons and are poorly reusable. They tend to attract more dependencies, not fewer."
 },
 "c3q70": {
  "q": "In a system, separation of concerns is disregarded – e.g. database access sits directly in the UI code. What follows?",
  "options": [
   "Only the UI building block is affected; the rest of the system remains untouched.",
   "Replacing the technology (e.g. the database) becomes harder.",
   "The parts are hard to test individually and to reuse.",
   "A change to one concern forces changes to others.",
   "Performance increases since calls across layer boundaries are eliminated – this usually outweighs the disadvantages."
  ],
  "correct": [
   1,
   2,
   3
  ],
  "optExpl": [
   "Wrong: The consequences extend beyond the UI building block. Other building blocks needing the same data cannot use the logic and duplicate it, and schema changes suddenly force UI changes.",
   "Correct: If database access is scattered across the UI code, there is no single place where the technology could be replaced. A database change then also affects the user interface.",
   "Correct: Mixed concerns cannot be extracted separately. To test the UI you need a database, and the data access logic is tied to the user interface and cannot be reused elsewhere.",
   "Correct: When concerns are mixed, they change together. A change to the data model entails changes to the user interface and vice versa – exactly what separation of concerns is meant to prevent.",
   "Wrong: Saving a call across a layer boundary usually brings only a small performance gain. The disadvantages for maintainability, testability and replaceability usually weigh much more heavily."
  ],
  "explanation": "Mixed concerns couple changes and make tests, reuse and technology changes harder – with consequences beyond the UI building block. A small performance gain rarely justifies this."
 },
 "c3q71": {
  "q": "What happens when the DRY principle is violated (the same decision/logic is duplicated in several places)?",
  "options": [
   "A hidden (logical) coupling arises: the copies must be changed together, although no building block depends on the other.",
   "A change must be made consistently in several places.",
   "The problem only concerns duplicated logic, not duplicated constants or configuration values.",
   "Maintenance effort and error-proneness increase.",
   "There is a risk that copies drift apart (inconsistency)."
  ],
  "correct": [
   0,
   1,
   3,
   4
  ],
  "optExpl": [
   "Correct: The copies are linked via the shared knowledge, even though no dependency is visible in the code. If the rule changes, all copies must be changed too – a hidden, logical coupling.",
   "Correct: The same decision lives in several places, so every change must be applied consistently everywhere. Overlooking one place leads to contradictory behavior.",
   "Wrong: DRY refers to any duplicated knowledge, not just logic. Constants or configuration values maintained in two places also drift apart when only one place is adjusted.",
   "Correct: Every change has to be implemented and tested several times, which increases maintenance effort. At the same time, the more copies there are, the higher the chance that an error creeps in somewhere.",
   "Correct: If copies are changed independently of each other, they eventually behave differently. The system becomes inconsistent, e.g. when a discount is calculated differently in two places."
  ],
  "explanation": "Violated DRY forces multiple changes, risks inconsistency, increases maintenance effort and creates an invisible logical coupling. This applies to logic as much as to constants and configuration."
 },
 "c3q72": {
  "q": "In a supposedly strict layered architecture, layers are skipped and there are backward calls (lower calls upper). What follows?",
  "options": [
   "Uncontrolled, hard-to-trace dependencies arise.",
   "As long as the deviations occur only occasionally for performance reasons, they are uncritical.",
   "Replaceability and isolated testability of the layers suffer.",
   "The architecture is thereby effectively a relaxed layering, which is equivalent to the strict one.",
   "The architecture gradually erodes compared with the planned design."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Correct: Layering rules are meant to direct dependencies in one clear direction. Skipped layers and backward calls create criss-crossing dependencies that are hard to trace.",
   "Wrong: Precisely these occasional, undocumented exceptions gradually add up to erosion. If a deviation is really necessary, it must be decided deliberately and documented, e.g. in an ADR.",
   "Correct: A layer can only be replaced or tested in isolation if it uses solely the interface of the layer below. Cross-access and backward calls bind layers to further layers.",
   "Wrong: Relaxed layering does allow skipping layers downwards, but not calls from bottom to top. Backward calls remain violations there too and create cyclic dependencies.",
   "Correct: Every unplanned dependency moves the actual structure a little further away from the planned design. This gradual architecture erosion is often only noticed when changes become unexpectedly expensive."
  ],
  "explanation": "Skipped layers and backward calls in strict layering create uncontrolled dependencies and erosion. Even occasional exceptions must be decided deliberately; backward calls are violations even in relaxed layering."
 },
 "c1q30": {
  "q": "You are the software architect for a core banking system. What must you pay particular attention to in this role?",
  "options": [
   "Clarify and sharpen the quality requirements (e.g. security, traceability, availability).",
   "Consider regulatory constraints and compliance early.",
   "Interpret the regulatory requirements legally in detail and bindingly for the project.",
   "Recognize risks early and document key decisions with justification.",
   "Decide conflicts between security and usability on your own in favor of security, since security always takes precedence in banking."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Correct: In a critical domain such as core banking, quality requirements such as security, traceability and availability significantly shape the architecture. Clarifying them early and making them measurable is therefore central.",
   "Correct: Regulatory requirements are an essential constraint in banking, for instance regarding data protection, retention or auditability. If they are discovered late, they can call key decisions into question after the fact.",
   "Wrong: The legal interpretation of regulatory requirements is the task of the legal or compliance department. Architects take their results into account as constraints but do not interpret them bindingly themselves.",
   "Correct: Recognizing risks early and documenting key decisions with justification is a core task of the role. In regulated environments in particular, this traceability is often also important for audits.",
   "Wrong: Even in banking, security does not automatically always take precedence. Conflicts between quality characteristics are weighed and prioritized with the stakeholders, not decided across the board by architects alone."
  ],
  "explanation": "In a core banking system too: clarify quality requirements, include regulation early, recognize risks, justify decisions. Goal conflicts are weighed with the stakeholders; legal interpretation lies with legal/compliance."
 },
 "c1q33": {
  "q": "How do software architects work together with other stakeholders?",
  "options": [
   "They clarify the business goals and concerns with PO/requirements.",
   "They provide development with sound, understandable guidelines.",
   "They present the architecture to management mainly via detailed UML diagrams, since these are the most precise.",
   "They take over communication with the business departments so that product ownership can concentrate on backlog maintenance.",
   "They coordinate with operations on deployment and operability."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Correct: Architects clarify the business goals and concerns together with the product owner and requirements engineering. Only then can the resulting quality requirements and constraints be derived correctly.",
   "Correct: Development needs sound and understandable guidelines, for example on structure, interfaces and cross-cutting concepts. If these are unclear, the architecture is easily undermined during implementation.",
   "Wrong: Communication must be audience-appropriate. For management, overview, risks, costs and impact matter more than detailed UML diagrams, which rather address development.",
   "Wrong: Architects work together with the PO and business departments but do not take over their communication role. Functional coordination remains the task of product ownership.",
   "Correct: Coordinating with operations on deployment, monitoring and operability is part of the role. Many quality requirements such as availability can only be met together with operations."
  ],
  "explanation": "Architects work with development, operations and PO/requirements. They do not replace other roles and communicate in an audience-appropriate way – overview and risks for management rather than detailed UML."
 },
 "c1q34": {
  "q": "Which properties of a system can the software architecture significantly influence?",
  "options": [
   "The operating and infrastructure costs.",
   "The functional requirements themselves (what the system should be able to do).",
   "Security and reliability.",
   "Performance and scalability.",
   "Maintainability and changeability."
  ],
  "correct": [
   0,
   2,
   3,
   4
  ],
  "optExpl": [
   "Correct: Decisions on distribution, scaling concept and technology significantly determine operating and infrastructure costs. A highly distributed architecture, for example, causes very different costs than a single server.",
   "Wrong: The functional requirements come from the stakeholders and describe what the system is supposed to do. The architecture must make them achievable but does not define them itself.",
   "Correct: Security and reliability are classic architecture topics. They depend, for example, on protective measures at interfaces, redundancy and error-handling concepts.",
   "Correct: Performance and scalability are strongly shaped by architecture decisions, such as distribution, caching or the type of communication. Later on they can often only be improved with great effort.",
   "Correct: Maintainability and changeability depend directly on the structure, in particular on coupling, cohesion and clear interfaces. A well-cut architecture keeps changes local."
  ],
  "explanation": "Architecture influences quality properties such as maintainability, performance, security and reliability – and thus also operating costs. It does not determine the functional requirements themselves."
 },
 "c2q28": {
  "q": "Which factors influence the software architecture (influencing factors and constraints)?",
  "options": [
   "Regulatory requirements (law, data protection, compliance).",
   "The concrete implementation of the algorithms within the building blocks.",
   "Technological requirements (existing infrastructure, frameworks, languages).",
   "Functional requirements and quality requirements.",
   "Organizational factors such as team structure, qualification and budget (incl. Conway's law)."
  ],
  "correct": [
   0,
   2,
   3,
   4
  ],
  "optExpl": [
   "Correct: Laws, data protection and compliance rules restrict the possible solutions, for example regarding where data is stored or logging obligations. They are therefore important influencing factors and constraints.",
   "Wrong: The concrete implementation of algorithms follows from the architecture and detailed design, so it is a result, not an input. Influencing factors act on the architecture from the outside before it is created.",
   "Correct: Existing infrastructure, prescribed frameworks or programming languages are technical constraints. The architecture has to fit into this frame.",
   "Correct: Functional requirements shape the domain decomposition, quality requirements the fundamental structural decisions. Together they are the central influencing factors of the architecture.",
   "Correct: Team structure, qualification and budget determine which architecture can realistically be implemented. According to Conway's law, the team structure is even mirrored directly in the system structure."
  ],
  "explanation": "Influencing factors: requirements (functional, quality), technological, organizational and regulatory constraints. The concrete implementation follows from the architecture and does not influence it as an input."
 },
 "c3q73": {
  "q": "Which of the following are architecture or design approaches that are common in practice?",
  "options": [
   "Ports and adapters (hexagonal).",
   "Layered architecture.",
   "Domain-driven design (DDD).",
   "ISO/IEC 25010 as an architecture pattern for structuring quality building blocks.",
   "Microservices."
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "optExpl": [
   "Correct: Ports and adapters (hexagonal architecture) is a common architecture pattern. The business logic sits at the centre and communicates via ports; technology such as the UI or database is connected via replaceable adapters.",
   "Correct: Layered architecture is one of the most common architecture patterns. It structures the system into layers with a clear dependency direction, e.g. presentation, business logic and persistence.",
   "Correct: Domain-driven design is a common design approach that puts the business domain at the centre. With concepts such as bounded context and ubiquitous language, it provides criteria for business-oriented cuts.",
   "Wrong: ISO/IEC 25010 is a quality model that structures quality characteristics such as reliability or maintainability. It helps describe quality requirements, but it is neither an architecture pattern nor a design approach.",
   "Correct: Microservices are a common architectural style in which the system consists of small, independently deployable services. Each service is responsible for a business area and communicates over the network."
  ],
  "explanation": "Layers, microservices, DDD and ports and adapters are common architecture or design approaches. ISO/IEC 25010, by contrast, is a quality model – do not confuse them."
 },
 "c3q74": {
  "q": "Which approaches or heuristics are common in architecture design?",
  "options": [
   "Bottom-up (forming larger structures from details).",
   "View-based elaboration via different views.",
   "Iterative/evolutionary approach with feedback.",
   "Deriving the design strictly from a reference process model that bindingly defines steps and results for every project.",
   "Top-down (from coarse to fine)."
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "optExpl": [
   "Correct: Bottom-up starts from known details, such as existing components or technologies, and combines them into larger structures. This is especially useful when existing parts have to be integrated.",
   "Correct: In a view-based approach, the system is examined successively from different views, e.g. context, building block, runtime and deployment view. Each view highlights different aspects and reveals gaps in the others.",
   "Correct: An iterative, evolutionary approach develops the architecture step by step and uses feedback from prototypes, tests or operations. This allows assumptions to be checked and the design to be adapted when new knowledge emerges.",
   "Wrong: There is no universal recipe that bindingly defines steps and results for every project. Approaches are combined and adapted depending on the context, e.g. top-down with bottom-up.",
   "Correct: Top-down decomposes the system step by step from coarse to fine, starting from the context down to individual building blocks. This keeps the overall structure in view from the beginning."
  ],
  "explanation": "Top-down, bottom-up, iterative and view-based approaches are common – usually combined. A rigid process model binding for every project does not exist."
 },
 "c3q75": {
  "q": "Which advantages does a layered architecture offer?",
  "options": [
   "Business changes can typically be confined to a single layer.",
   "Clear separation of concerns across the layers.",
   "Good understandability and testability through an ordered structure.",
   "Individual layers can be replaced without changing everything.",
   "Each layer can flexibly access all other layers when needed."
  ],
  "correct": [
   1,
   2,
   3
  ],
  "optExpl": [
   "Wrong: Layers separate technical concerns, not business ones. A business change such as a new field therefore often runs through all layers – from the user interface via the business logic to persistence. This is a well-known weakness of the pattern.",
   "Correct: Each layer takes on a clearly defined concern, such as presentation, business logic or data access. This separation makes it easier to focus on one aspect during development.",
   "Correct: The fixed order of layers and the clear dependency direction make the structure easy to understand. Because each layer only uses the one below, it can be tested well with a substitute for that layer.",
   "Correct: As long as a layer's interface remains stable, its implementation can be replaced, e.g. with a different persistence technology. The layers above are not affected.",
   "Wrong: The restricted access direction is precisely the core of the pattern. If every layer could access all others at will, separation, replaceability and understandability would be lost."
  ],
  "explanation": "Layers bring separation of concerns, replaceability and understandability. Their access rules are precisely the core; business changes, by contrast, often run through all layers."
 },
 "c3q76": {
  "q": "Which disadvantages or limits does a strict layered architecture have?",
  "options": [
   "A lot of uniform pass-through code (boilerplate) can arise.",
   "Changes often run through several layers.",
   "It cannot be combined with other patterns such as microservices.",
   "Passing calls through many layers can cost latency.",
   "It prevents individual layers from being replaced."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Correct: In strict layering, each layer may only use the one directly below. If the top layer needs something from the very bottom, the intermediate layers must pass the call through – uniform pass-through code emerges.",
   "Correct: Because layers are cut along technical concerns, a business change often affects every layer. A new field, for example, must be added in the user interface, business logic and persistence.",
   "Wrong: Layers combine well with other patterns. It is typical, for example, for each microservice to be layered internally.",
   "Correct: Every transition between layers costs some time, e.g. through calls or data conversions. With many layers, this can add up noticeably.",
   "Wrong: This presents an advantage as a disadvantage. The replaceability of individual layers behind stable interfaces is precisely a strength of the pattern."
  ],
  "explanation": "Strict layering costs latency, makes changes run through several layers and creates boilerplate. It can be combined with other patterns and fosters replaceability."
 },
 "c4q38": {
  "q": "What applies to audience-appropriate documenting and communicating of architecture?",
  "options": [
   "Written documentation should largely replace oral coordination, since it is more binding.",
   "Management and development need differently prepared content.",
   "Template-based documentation (e.g. arc42) provides benefits.",
   "For management, the same documentation as for development is enough, just shortened.",
   "Oral and written communication need to be balanced."
  ],
  "correct": [
   1,
   2,
   4
  ],
  "optExpl": [
   "Wrong: Oral coordination clarifies questions quickly, builds understanding and uncovers misunderstandings directly. Written documentation complements it but cannot replace it.",
   "Correct: Management is interested in goals, risks and costs, for example, development in building blocks, interfaces and concepts. Content must therefore be prepared differently for each audience.",
   "Correct: A template such as arc42 provides a proven structure, so nothing important is forgotten and information can be found quickly. It also lowers the effort of getting started with documentation.",
   "Wrong: Management needs different content, not just less of it. A shortened developer documentation still contains technical details but hardly any statements on risks, costs or goal achievement.",
   "Correct: Oral communication is fast and interactive, written communication is lasting and can be looked up. Good architecture communication uses both forms where they play to their strengths."
  ],
  "explanation": "Audience-appropriate means: different content per audience, useful templates and a balance of oral and written communication. Shortened developer documentation is not enough for management."
 },
 "k29": {
  "q": "Statements on the role and responsibility of software architects – correct or wrong?",
  "categories": [
   "Correct",
   "Wrong"
  ],
  "rows": [
   "In goal conflicts they decide on their own which quality goal takes precedence.",
   "They clarify the quality requirements with the stakeholders.",
   "They make and justify key structural decisions.",
   "They determine the functional order of the features.",
   "They are responsible for project budget and deadlines.",
   "They accompany the implementation and advise the team."
  ],
  "explanation": "True: clarify quality requirements, make and justify key decisions, accompany the implementation. False: budget/deadlines (project management) and functional order (PO) belong to other roles; the priority of quality goals is set by the stakeholders – architects make the trade-offs transparent."
 },
 "k30": {
  "q": "Statements on architecture documentation – correct or wrong?",
  "categories": [
   "Correct",
   "Wrong"
  ],
  "rows": [
   "It should be correct and up to date.",
   "It is geared to the audience.",
   "An ADR records decisions including their rationale.",
   "It should describe every building block as completely as possible down to class level.",
   "If a decision changes, the corresponding ADR is overwritten.",
   "UML diagrams need no legend, since their notation is standardized."
  ],
  "explanation": "True: audience-appropriate, correct and current, ADRs with rationale. False: completeness down to class level is not appropriate; changed decisions get a new ADR that supersedes the old one; UML diagrams also need a legend for custom stereotypes, colors or abbreviations."
 },
 "k31": {
  "q": "Statements on analysis and evaluation of architecture – correct or wrong?",
  "categories": [
   "Correct",
   "Wrong"
  ],
  "rows": [
   "Without prioritized quality goals the evaluation yardstick is missing.",
   "An evaluation requires a fully documented architecture.",
   "Typical results are identified risks and trade-offs.",
   "Confirmed non-risks are also a result of the evaluation.",
   "ATAM’s main result is a recommendation on which technologies to use.",
   "You should evaluate early and repeatedly."
  ],
  "explanation": "True: evaluate early and repeatedly, non-risks as a result, quality goals as yardstick, risks and trade-offs as results. False: an evaluation needs no complete documentation, and ATAM delivers risks and trade-offs, not a technology recommendation."
 },
 "k32": {
  "q": "Statements on design principles – correct or wrong?",
  "categories": [
   "Correct",
   "Wrong"
  ],
  "rows": [
   "DRY requires always merging code that merely looks the same by accident.",
   "Loose coupling means that building blocks have no dependencies at all.",
   "Open/closed: open for extension, closed for modification.",
   "Information hiding hides what is likely to change behind an interface.",
   "Information hiding means making the source code inaccessible to other teams.",
   "High cohesion per building block is desirable."
  ],
  "explanation": "True: high cohesion, information hiding hides what may change, OCP. False: loose coupling means appropriate, not zero dependencies; DRY concerns the same knowledge, not accidentally identical code; information hiding hides design decisions behind interfaces, not source code from teams."
 },
 "k33": {
  "q": "Statements on quality requirements – correct or wrong?",
  "categories": [
   "Correct",
   "Wrong"
  ],
  "rows": [
   "A quality scenario describes which tactic is used to achieve the quality.",
   "“95% of searches in under 1 s” is already a complete quality scenario.",
   "A quality scenario has context, stimulus, response and measurement.",
   "One requirement can affect several qualities at once.",
   "Scalability is a top-level characteristic of ISO/IEC 25010.",
   "Qualities are often in conflict with each other."
  ],
  "explanation": "True: scenario = context, stimulus, response, measurement; requirements can affect several qualities; goal conflicts are common. False: scenarios describe the WHAT, not the tactic; scalability is only a sub-characteristic; a response measure without stimulus and context is not yet a complete scenario."
 },
 "c1q35": {
  "q": "A user of the “Payment Processing” component asks: “Which services does this component offer?” From which view is this answered – and how?",
  "options": [
   "From the black-box view: via the externally offered interfaces / services together with their guaranteed properties – without revealing the internal realization.",
   "From the white-box view: the offered services can only be named once the contained sub-building-blocks and their algorithms are known.",
   "From the context view, since it shows the interfaces of each building block to its neighboring building blocks.",
   "From the runtime view: which services a component offers only becomes apparent in the interplay of concrete scenarios."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Which services a component offers is precisely its outside view, i.e. the black box. It describes the offered interfaces together with guaranteed properties without revealing the internal realization.",
   "Wrong: To know the offered services, you precisely do not need to know the internals – that is the core of the black box principle. The white box answers the question of HOW the services are realized.",
   "Wrong: The context view shows the overall system as a black box with its external neighbors. The interfaces of individual internal building blocks are found in their black box description within the building block view.",
   "Wrong: Scenarios in the runtime view show how services are used in interplay. Which services a component offers in the first place is stated in its black box description."
  ],
  "explanation": "Which services a component offers is described by its black box: provided interfaces with guarantees, without internals. The runtime view (use in scenarios) and the context view (overall system towards the outside) answer other questions."
 },
 "c1q36": {
  "q": "At the start of the project the requirements are not yet fully fixed. What do you sensibly keep in mind during architecture design?",
  "options": [
   "Far-reaching, expensive-to-reverse decisions are made as late as responsibly possible (last responsible moment).",
   "You initially forgo key decisions and let the structure emerge from the code until the requirements are fixed.",
   "You keep the architecture changeable and avoid unnecessary upfront commitments (YAGNI).",
   "Assumptions made are documented explicitly and reviewed later.",
   "You work iteratively and incrementally and let the architecture grow with the increasing knowledge."
  ],
  "correct": [
   0,
   2,
   3,
   4
  ],
  "optExpl": [
   "Correct: Far-reaching, hard-to-reverse decisions are made as late as responsibly possible (last responsible moment). By then more knowledge is available, without the waiting itself already causing damage.",
   "Wrong: Forgoing key decisions altogether leads to an uncontrolled, grown structure. \"As late as responsibly possible\" does not mean \"not at all\" – the team still needs a sound foundation.",
   "Correct: An architecture kept changeable without unnecessary upfront commitments (YAGNI) reduces the risk that early assumptions turn out to be wrong. Changes then stay local and affordable.",
   "Correct: When knowledge is missing, you have to make assumptions. If they are documented explicitly, they can be reviewed later in a targeted way and affected decisions adapted in time.",
   "Correct: With uncertain requirements, an iterative and incremental approach is appropriate. The architecture grows with the knowledge and is reviewed and refined in each iteration."
  ],
  "explanation": "With incomplete requirements you design iteratively, defer expensive decisions to the last responsible moment, document assumptions and keep the architecture changeable. Forgoing key decisions entirely leads to an uncontrolled, grown structure."
 },
 "c2q29": {
  "q": "An organization deliberately shapes its teams so that the desired target architecture emerges, thereby applying Conway's law on purpose. Which statement is most accurate?",
  "options": [
   "Since the system structure mirrors the communication structure, a suitable team layout can favor the desired architectural split (“Inverse Conway Maneuver”) – but this requires actually changing the organization.",
   "This largely makes deliberate architecture work unnecessary, since the target structure results from the team layout.",
   "The new team layout only affects newly created systems; existing systems keep their structure regardless of the organization.",
   "For this, teams are best cut along technical layers (UI, logic, database), since this produces the desired layered architecture."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: Because the system structure mirrors the communication structure, Conway's law can be reversed and teams set up to match the desired split (Inverse Conway Maneuver). This only works, however, if the organization is actually restructured and not just on paper.",
   "Wrong: The team layout favours a structure but does not replace the deliberate design of interfaces, responsibilities and decisions. Architecture work is still needed; the organization merely supports it.",
   "Wrong: Existing systems are also developed further under the new communication structure and adapt to it over time. Conway's law works continuously, not only when building something new.",
   "Wrong: Teams cut by technical layers produce layer boundaries, i.e. a structure one usually wants to avoid. For domain-oriented target architectures, teams are cut by domain so that each team owns a domain building block."
  ],
  "explanation": "Inverse Conway Maneuver: shape teams so the desired system split is favored – with real organizational change. It also affects existing systems, does not replace architecture work, and domain-oriented target splits usually require domain-oriented teams."
 },
 "c2q30": {
  "q": "For a system “high usability” is an important quality goal. Which statements on assuring this goal are correct?",
  "options": [
   "Usability is a quality characteristic (among others in ISO/IEC 25010) and should be made tangible via concrete, verifiable quality scenarios.",
   "It is checked most reliably through acceptance by the client, since the client knows the requirements best.",
   "It is checked above all through usability tests with real or representative users, prototypes and heuristic evaluations.",
   "Since usability mainly concerns the user interface, it can be optimized late in the project independently of the rest of the architecture.",
   "The quality goal influences architecture decisions (e.g. response times, error messages, interaction flows) and is not purely cosmetic."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Correct: Usability is a quality characteristic – called interaction capability in ISO/IEC 25010:2023. It only becomes tangible through concrete scenarios with user group, task and measurable result.",
   "Wrong: The client is often not the end user and can judge everyday operability only to a limited extent. Usability is therefore checked with real or representative users.",
   "Correct: Whether a system is user-friendly shows in how users behave. Usability tests, prototypes and heuristic evaluations are therefore the typical means of assuring the goal.",
   "Wrong: Usability does not only concern the user interface; it also depends on response times, error handling and flows – and thus on the architecture. It can therefore hardly be retrofitted late in the project.",
   "Correct: A usability goal feeds back into architecture decisions, for example on response times, error messages or the design of interaction flows. It is therefore not a cosmetic topic but a real architecture driver."
  ],
  "explanation": "Usability is a quality requirement that is made measurable via scenarios and assured with user tests, prototypes and heuristic evaluation. It depends on the architecture and is checked with real users, not just at acceptance by the client."
 },
 "c3q77": {
  "q": "A building block directly integrates an external third-party component (e.g. a third party's cloud service). What consequences does this typically have?",
  "options": [
   "Encapsulation behind your own interface / an adapter reduces the coupling and makes the external system more replaceable.",
   "The integration is uncritical if the third party contractually guarantees high availability.",
   "The coupling to the external system increases; changes there can force adaptations in your own system.",
   "A dependency on an externally controlled, potentially volatile element arises – version changes, API changes or availability feed back into your system.",
   "The coupling only arises at runtime; at development time your own system remains independent of it."
  ],
  "correct": [
   0,
   2,
   3
  ],
  "optExpl": [
   "Correct: Your own adapter translates between your own model and the external API, so that only the adapter knows the external system. If the external API changes or you switch providers, only the adapter has to be adapted.",
   "Wrong: An SLA at most guarantees availability. It does not protect against API changes, version changes or the business dependency on the provider, all of which feed back into your own system.",
   "Correct: If the building block calls the external API directly, its code depends on that API's structure and behavior. Any change on the provider's side can therefore force adaptations in your own system.",
   "Correct: The external system is controlled by someone else who decides when and how it changes. Version changes, API changes or outages feed directly back into your own system without you being able to control them.",
   "Wrong: Your own code uses the external API directly, so the coupling already exists in the source code. If the API changes, your own code must be adapted – that is coupling at development time, not only at runtime."
  ],
  "explanation": "Directly integrated third-party components couple the system to a volatile, externally controlled element – at runtime and at development time. An SLA only covers availability; encapsulation behind an adapter reduces coupling."
 },
 "c3q78": {
  "q": "The developers want to build the system as microservices, while operations prefer a monolith for operational reasons. How do you best handle this goal conflict architecturally?",
  "options": [
   "You start with microservices and merge them into a monolith later if operational problems arise, since that is less risky.",
   "You make the underlying quality goals and trade-offs explicit (independent deployability/scaling vs. operational simplicity) and decide based on the requirements – a modular monolith can be a viable compromise.",
   "You follow operations, since operating costs usually make up the largest share of costs over the lifetime.",
   "You follow the developers, since those who build the system can best judge its structure."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: Merging distributed services back into a monolith is usually more costly than splitting a modular monolith later along clear module boundaries. So this path is not less risky – rather the opposite.",
   "Correct: The positions are driven by different quality goals, e.g. independent deployability and scaling versus operational simplicity. Making these trade-offs explicit allows a requirements-based decision – a modular monolith can partly serve both sides.",
   "Wrong: Operating costs are an important criterion, but not the only one. Without weighing them against the other quality goals, such as changeability or scalability, the decision is not justified.",
   "Wrong: The developers' view is important, but it is only one of several stakeholder perspectives. What counts are the quality goals of all relevant stakeholders, not the preference of a single group."
  ],
  "explanation": "Goal conflicts between stakeholders are resolved via quality goals and trade-offs, not via one group's perspective. A modular monolith is often a good compromise and can be split later more easily than services can be merged."
 },
 "c4q39": {
  "q": "Which information typically belongs in the white-box description of a building block?",
  "options": [
   "The contained (sub-)building-blocks and their relationships.",
   "Internally used algorithms and data structures, insofar as they explain the internal structure.",
   "The mapping of the inner building blocks to concrete servers (execution nodes).",
   "The interplay of the inner building blocks, as far as needed for understanding.",
   "The legal contracts and licenses of the suppliers of the third-party building blocks used."
  ],
  "correct": [
   0,
   1,
   3
  ],
  "optExpl": [
   "Correct: The internal decomposition into sub-building-blocks and their relationships is the core of every white box. It shows how the building block is built internally.",
   "Correct: Important internally used algorithms or data structures can explain the internal structure and then belong in the white box. What matters is that they contribute to understanding the building block.",
   "Wrong: Which inner building blocks run on which servers is the subject of the deployment view. The white box stays within the logical structure of the building block view.",
   "Correct: As far as needed for understanding, the white box also describes how the inner building blocks interact. Detailed flows can additionally be shown in the runtime view.",
   "Wrong: Contracts and licenses of suppliers are a procurement and legal matter. They say nothing about the internal structure of a building block and therefore do not belong in the white box."
  ],
  "explanation": "The white box shows the internal structure: contained building blocks, their interplay and the internally used algorithms/data structures. Legal supplier contracts (procurement/law) and the mapping to nodes (deployment view) explicitly do not belong here."
 },
 "c5q28": {
  "q": "A stakeholder reports: “The system is too slow.” How do you investigate such a performance/efficiency problem in a methodically sound way?",
  "options": [
   "You make the goal tangible with concrete, measurable quality scenarios (e.g. response time for operation X under load Y).",
   "You first increase the hardware resources; if the problem persists, the cause lies in the architecture.",
   "You measure quantitatively – e.g. with load tests, monitoring, profiling and benchmarks.",
   "You measure on developer machines, because interference from operations is excluded there and the values are therefore more meaningful.",
   "Based on the measurements you identify the bottlenecks (hotspots) and then optimize in a targeted way."
  ],
  "correct": [
   0,
   2,
   4
  ],
  "optExpl": [
   "Correct: \"Too slow\" is subjective and not verifiable. Only a scenario with a concrete operation, load situation and measurable target value defines when the problem is solved.",
   "Wrong: More hardware can mask symptoms without clarifying the cause. If the problem persists, that does not automatically imply an architecture flaw either – the cause has to be measured, not guessed.",
   "Correct: Performance is a runtime quality and can only be judged reliably on the running system. Load tests, monitoring, profiling and benchmarks provide the measurements on which the analysis is based.",
   "Wrong: Developer machines have different hardware, data volumes and load patterns than production. Measurements are meaningful under realistic conditions, because performance problems often arise precisely from those conditions.",
   "Correct: Measurements show where time is actually lost. Only once the bottlenecks are known is targeted optimisation worthwhile – anything else would be premature optimisation in the wrong place."
  ],
  "explanation": "Performance problems are investigated measurement-based: state the goal as a scenario, measure under realistic conditions, identify bottlenecks, optimize in a targeted way. Upgrading hardware does not replace root-cause analysis."
 },
 "k34": {
  "q": "Classify each item: does it belong in the black-box description (outside view) or the white-box description (inside view) of a building block?",
  "categories": [
   "Black box (outside view)",
   "White box (inside view)"
  ],
  "rows": [
   "The interplay of the inner building blocks.",
   "The guaranteed properties (e.g. responsibility, response time).",
   "The required (needed) interfaces towards the outside.",
   "The internally used algorithms and data structures.",
   "The contained sub-building-blocks and their relationships.",
   "The offered (provided) interfaces and services."
  ],
  "explanation": "The black-box view describes the outside view (provided and required interfaces, guaranteed properties) without internals. The white-box view adds the internal structure: contained building blocks, their relationships, their interplay and internally used algorithms/data structures (LG 01-01)."
 },
 "k35": {
  "q": "Deployment view: classify each element – is it an execution/hardware node or an artifact distributed onto it?",
  "categories": [
   "Node",
   "Artifact (deployment artifact)"
  ],
  "rows": [
   "A configuration file shipped along with it.",
   "A physical or virtual machine (VM).",
   "An executable container image or a .jar file of the application.",
   "A database server as an execution environment.",
   "An application server (runtime environment).",
   "A deployable web application (e.g. WAR file)."
  ],
  "explanation": "The deployment view maps artifacts onto nodes: nodes are execution environments or hardware (server, VM, DB server), artifacts are the files installed/executed on them (container image, JAR/WAR, configuration) (LG 04-05)."
 },
 "c1q37": {
  "q": "Which information takes priority in a good black-box description of a building block (i.e. must be included)?",
  "options": [
   "The offered (provided) interfaces and services.",
   "The required (needed) interfaces or dependencies towards the outside.",
   "The mapping of the building block to the execution nodes on which it is operated.",
   "The internally used algorithms and data structures of the building block.",
   "The responsibility/task of the building block and its guaranteed properties (e.g. quality promises)."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Correct: The offered interfaces and services are the core of the outside view. They tell users what the building block does and how to address it.",
   "Correct: The required interfaces also belong to the outside view, because they show the building block's dependencies towards the outside. Anyone who wants to use it must know what it presupposes.",
   "Wrong: The mapping to execution nodes belongs in the deployment view. The black box describes what a building block does, not where it is operated.",
   "Wrong: Internal algorithms and data structures are white box information and are deliberately hidden in the black box. Precisely this allows changing them without adapting users.",
   "Correct: Responsibility and guaranteed properties, such as quality promises like response times, make the building block reliably usable. They are therefore mandatory in the black box."
  ],
  "explanation": "The black box prioritizes the outside-view information: provided and required interfaces, responsibility and guaranteed properties. Internals are white box; the node mapping belongs in the deployment view."
 },
 "c1q38": {
  "q": "A developer only wants to use (call) an existing building block, not change it. Which description does she primarily need for that?",
  "options": [
   "The white-box description, since besides the interfaces it also contains their guarantees (pre-/postconditions), which are missing from the black box.",
   "The runtime view, since it shows in which order the building block internally calls its sub-building-blocks.",
   "The deployment view, since it shows on which node and via which protocol the building block can be reached.",
   "The black-box description: interfaces, responsibility and guaranteed properties are enough to use it."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: Guarantees such as pre- and postconditions are part of the contract and belong precisely in the black box. The white box only adds the internal structure, which a mere user does not need.",
   "Wrong: The internal call sequence between sub-building-blocks is an internal detail. It is irrelevant for mere use and belongs to the white box or internal runtime perspective.",
   "Wrong: Node and protocol can be relevant for operation and connection, but they do not describe what the building block does and how to use it correctly. That is the job of the black box.",
   "Correct: For mere use, the black box with interfaces, responsibility and guaranteed properties is sufficient. That is exactly the point of encapsulation: users need no knowledge of the internals."
  ],
  "explanation": "To merely use a building block the black box suffices: interfaces, responsibility and guarantees. Internal sequences (white box/runtime) are only needed by whoever changes the block; the deployment view answers operational questions."
 },
 "c4q40": {
  "q": "Which item belongs least in the white-box description of a building block?",
  "options": [
   "Internally used algorithms and data structures that explain the structure.",
   "The contained sub-building-blocks and their relationships.",
   "The legal delivery and licensing terms of the purchased third-party libraries.",
   "The interplay of the inner building blocks needed for understanding."
  ],
  "correct": [
   2
  ],
  "optExpl": [
   "Wrong: Internally used algorithms and data structures that explain the structure do belong in the white box. The question, however, asks for the item that belongs there least.",
   "Wrong: The contained sub-building-blocks and their relationships are the core of every white box. They definitely belong there and are therefore not the answer sought.",
   "Correct: Delivery and licensing terms of third-party libraries are a procurement and legal matter. They do not describe the internal structure of the building block and therefore belong least in the white box.",
   "Wrong: The interplay of the inner building blocks needed for understanding is an integral part of the white box. It belongs there and is not the answer sought."
  ],
  "explanation": "The white box shows the internal structure (contained building blocks, interplay, internal algorithms/data structures). Legal delivery and licensing terms of suppliers are procurement/law and do not belong here."
 },
 "c2q31": {
  "q": "Which statements about Conway's law and its consequences are correct?",
  "options": [
   "You can deliberately use the law as an organizational constraint and shape teams to match the desired split.",
   "The structure of a system tends to mirror the communication structures of the developing organization.",
   "It states that teams should adapt their communication structure to the existing system structure.",
   "It applies mainly to large organizations; in small teams the communication structure plays no role for the system split.",
   "Separate teams that communicate little tend to create corresponding boundaries and interfaces in the system."
  ],
  "correct": [
   0,
   1,
   4
  ],
  "optExpl": [
   "Correct: Knowing Conway's law, you can use it deliberately and shape teams to match the desired system split. That is the idea of the Inverse Conway Maneuver; the organization then acts as a consciously designed constraint.",
   "Correct: That is the core statement of Conway's law. Teams build interfaces where their communication runs, so the system structure mirrors the organizational structure.",
   "Wrong: Conway describes the opposite direction: the organization shapes the system, not the other way round. Moreover, the law is an observation, not a recommendation for action.",
   "Wrong: The effect also occurs in small organizations, for example between two teams or between a team and an external service provider. Wherever communication hits boundaries, system boundaries arise as well.",
   "Correct: Teams that rarely talk to each other coordinate their work via clearly defined interfaces. These team boundaries typically show up as building-block and system boundaries."
  ],
  "explanation": "Conway's law: the system structure mirrors the organization's communication structure; team boundaries become system boundaries. It is an observation (organization → system) that can be used deliberately – regardless of organization size."
 },
 "c3q79": {
  "q": "A system depends on a volatile external third-party component (frequent API changes, fluctuating availability). Which measures keep the impact manageable?",
  "options": [
   "Encapsulate the external system behind your own stable abstraction (adapter/facade, possibly an anti-corruption layer).",
   "Deliberately not fixing the API version of the external system in your own code, so as to benefit from improvements automatically.",
   "Each building block that uses the external system encapsulates it with its own small adapter.",
   "Cushion availability problems with patterns like timeout, retry and circuit breaker.",
   "Program against the external system only in this one place instead of spreading its API throughout the whole system."
  ],
  "correct": [
   0,
   3,
   4
  ],
  "optExpl": [
   "Correct: Your own stable abstraction decouples the system from the volatile external API. An anti-corruption layer additionally translates the foreign model into your own, so that its terms and changes do not leak into the system.",
   "Wrong: An unfixed version lets unannounced, possibly incompatible changes break through unchecked. Versions are therefore pinned and updated deliberately after testing.",
   "Wrong: Many scattered adapters duplicate the translation logic, so an API change hits all places again. Only a central abstraction used by all consumers is effective.",
   "Correct: Resilience patterns cushion fluctuating availability: timeouts prevent endless waiting, retries bridge short disruptions, and a circuit breaker stops calls during a sustained outage. This keeps problems of the external system from spreading unchecked.",
   "Correct: If the dependency is bundled in one place, an API change only affects that place. The rest of the system only knows your own abstraction and remains unchanged."
  ],
  "explanation": "Volatile external dependencies are bundled behind a central, stable abstraction, failures are cushioned with resilience patterns and versions are pinned deliberately. Scattered adapters or unpinned versions spread the risk throughout the system."
 },
 "c2q32": {
  "q": "A stakeholder demands: “The system should be user-friendly.” How do you make this quality requirement verifiable?",
  "options": [
   "Via a concrete quality scenario, e.g.: “A new user completes the order without outside help in under 3 minutes with a success rate of ≥ 90%.”",
   "By making compliance with a recognized style guide (e.g. a design system) mandatory.",
   "By specifying that each dialog may have at most three input fields.",
   "Through a satisfaction survey among users after go-live."
  ],
  "correct": [
   0
  ],
  "optExpl": [
   "Correct: The scenario names user group, task, condition and a measurable result of time and success rate. A usability test can then clearly check whether the goal has been reached.",
   "Wrong: A style guide is a design specification and acts more like a constraint on the solution. It does not measure whether users actually get along well with the system.",
   "Wrong: The rule is verifiable, but it is a design specification, not a measure of usability. Dialogs with three fields can still be confusing – what must be measured is whether users can complete their tasks well.",
   "Wrong: A survey after go-live only comes after implementation and, without a target value defined in advance, has no yardstick. A verifiable requirement must state before design what counts as fulfilled."
  ],
  "explanation": "Vague goals like “user-friendly” are made measurable with quality scenarios (user, task, context, measurable result). Style guides or design rules are solution requirements; after-the-fact surveys without a target value are not a verifiable requirement."
 },
 "c5q29": {
  "q": "A team suspects the cause of a slow application in a particular module. Which approach is methodically best justified?",
  "options": [
   "Check the suspected module for inefficient algorithms in a code review and optimize them, since runtime measurements are inaccurate anyway due to load and environment fluctuations.",
   "First prove the bottleneck by measuring under realistic conditions (e.g. profiling, monitoring), and only then optimize in a targeted way.",
   "Use static analysis to find the module with the highest cyclomatic complexity and optimize it first.",
   "First put a cache in front of the suspected module, since caching is the most effective standard measure for performance problems."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: Fluctuating measurements are a reason to measure repeatedly and under realistic conditions, not to skip measuring. A code review may find inefficient spots, but it does not prove that the bottleneck is exactly there.",
   "Correct: Assumptions about the cause of performance problems are often wrong in practice. So you first prove the bottleneck through profiling or monitoring under realistic conditions and then optimise specifically where it has an effect.",
   "Wrong: Cyclomatic complexity measures branching in the code, not its run time. A complex module can be fast and a simple one slow, e.g. because of an expensive database query.",
   "Wrong: Caching can be effective, but it presupposes knowing the cause and that caching can fix it. Without measuring, you may treat the wrong module and additionally introduce consistency problems."
  ],
  "explanation": "Performance is optimized measurement-based: prove the bottleneck under realistic conditions, then optimize in a targeted way. Code reviews, complexity metrics or blanket caching do not replace measurement."
 },
 "c1q39": {
  "q": "In a project with initially unclear requirements, a central requirement changes late. The team can implement the change with manageable effort. What is this most likely due to?",
  "options": [
   "To a detailed design worked out in advance that already took all conceivable variants of the requirement into account.",
   "To an architecture deliberately kept changeable (modularity, loose coupling) that makes late adaptations cheap.",
   "To particularly complete architecture documentation, through which the affected places could be found quickly.",
   "To the use of microservices, since these always confine changes to a single service."
  ],
  "correct": [
   1
  ],
  "optExpl": [
   "Wrong: With unclear requirements, not all variants can be taken into account in advance. The attempt leads to over-engineering and often still misses the actual change.",
   "Correct: Modularity and loose coupling ensure that changes are confined to few building blocks. An architecture deliberately kept changeable thus makes even late adaptations affordable.",
   "Wrong: Good documentation helps to find affected places quickly, but it does not make the change itself cheaper. What determines the change effort is the structure, not its description.",
   "Wrong: Microservices do not inherently confine changes to one service. If the functional cut does not fit, a change spreads across several services and becomes even more expensive."
  ],
  "explanation": "Late changes stay cheap if the architecture was deliberately kept changeable (modularity, loose coupling). Documentation, up-front detailed design or a particular architecture style alone do not guarantee this."
 },
 "c4q41": {
  "q": "In the deployment view, what distinguishes a node from an artifact?",
  "options": [
   "A node is a deployable file; an artifact is the machine on which it runs.",
   "An artifact is a building block of the building block view; the node is the component that executes it at runtime.",
   "Nodes are always physical hardware; virtual machines and container runtimes count as artifacts.",
   "A node is an execution environment or hardware (e.g. server, VM); an artifact is a unit installed/executed on it (e.g. container image, JAR/WAR, configuration file)."
  ],
  "correct": [
   3
  ],
  "optExpl": [
   "Wrong: Here the terms are swapped exactly. The node is the execution environment or machine, the artifact is the deployable unit running on it.",
   "Wrong: Artifacts are physical units such as files or images that can contain one or more building blocks, but they are not themselves building blocks of the building block view. Nodes are execution environments, not software components.",
   "Wrong: Virtual machines and container runtimes are also nodes, because they are execution environments. A node does not have to be physical hardware.",
   "Correct: A node is an environment in which something is executed – physical or virtual, such as a server, VM or container runtime. An artifact is the concrete unit deployed onto it, e.g. a container image, a JAR/WAR or a configuration file."
  ],
  "explanation": "Nodes are execution environments – physical or virtual (server, VM, container runtime). Artifacts are the units deployed on them (image, JAR/WAR, configuration), which can contain building blocks."
 },
 "k36": {
  "q": "Classify: does the aspect argue rather for a (modular) monolith or rather for microservices?",
  "categories": [
   "Rather monolith",
   "Rather microservices"
  ],
  "rows": [
   "Different parts should deliberately be allowed to use different technologies.",
   "Many autonomous teams should develop largely independently of one another.",
   "The system can be tested and operated end-to-end easily as a whole.",
   "Strict, immediate transactional consistency across the entire data set is mandatory.",
   "Individual parts should be deployed and scaled independently of one another.",
   "Small team, a manageable business context, low operational complexity desired."
  ],
  "explanation": "A monolith is favored by easy overall testing/operation, small teams/contexts and strong consistency needs. Microservices are favored by independent deployment/scaling, many autonomous teams and heterogeneous technology choice – at the price of higher operational complexity (LG 03-08)."
 }
};
