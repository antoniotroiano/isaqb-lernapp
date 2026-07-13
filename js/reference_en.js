/* Englische Übersetzung des Lernstoffs (Phase 3). Fallback auf Deutsch via mergeEN + LE(). */
const REFERENCE_EN = {
 "intro": "<p><strong>How to use:</strong> When a question in the trainer (Browse/Flashcards/Review) references a learning-goal number (e.g. „LG 03-08\"), look up the explanatory context here that the slides don't provide. Recommended order: first master all R1 topics confidently, then understand R2, and R3 only as far as needed to place R1/R2 in context.</p>",
 "sources": "<ul><li>Official curriculum (Version 2025.1-rev2-DE): https://public.isaqb.org/curriculum-foundation/</li><li>iSAQB glossary: https://leanpub.com/isaqbglossary</li><li>Your trainer (169 R1/R2 questions + 37 R3 questions, filterable): https://antoniotroiano.github.io/isaqb-lernapp/</li></ul>",
 "chapters": {
  "1": {
   "title": "Basic Concepts of Software Architecture",
   "intro": "<p><em>What it's about:</em> What software architecture actually is, what it's for, and what role architects play in a project. (120 min., no exercise time)</p>",
   "lzs": {
    "01-01": {
     "title": "Definitions of Software Architecture",
     "body": "<p>Most definitions have common elements: <strong>building blocks</strong> (umbrella term) or <strong>components</strong> (a more specific form) with <strong>interfaces</strong> and <strong>relationships</strong>, plus <strong>structures</strong>, <strong>cross-cutting concerns</strong> and <strong>principles</strong>. Important for the exam: architecture decisions affect the <em>entire</em> system and its <em>entire</em> life cycle – not just a portion of it.</p>"
    },
    "01-02": {
     "title": "Goals and Benefits of Software Architecture",
     "body": "<p>Software architecture should support several goals at once:</p><ul><li><strong>Enable delivery</strong> – support the design, implementation, maintenance and operation of the system.</li><li>Make the <strong>functional requirements</strong> achievable.</li><li><strong>Enable quality goals</strong> – e.g. reliability, maintainability, modifiability, security, energy efficiency.</li><li>Create a <strong>shared understanding</strong> among all stakeholders.</li><li>Systematically <strong>reduce complexity</strong>.</li><li>Provide <strong>guard rails</strong> for implementation and operation.</li></ul>"
    },
    "01-03": {
     "title": "Long-Term Effects of Architecture",
     "body": "<p>Architecture decisions made today shape tomorrow's adaptability and maintainability, and in the long term they also affect other quality attributes of the system. Changes to requirements, technology or the environment feed back onto existing decisions – architecture interacts with the business/operational processes it supports. This also includes knowing how to analyze such long-term effects in the first place.</p>"
    },
    "01-04": {
     "title": "Tasks and Responsibilities of Software Architects",
     "body": "<p>Core tasks of software architects:</p><ul><li><strong>Clarify requirements &amp; constraints</strong> and question them critically.</li><li><strong>Make structural decisions</strong> – system decomposition, building blocks, dependencies, interfaces.</li><li><strong>Decide cross-cutting concerns</strong> – e.g. persistence, communication, GUI.</li><li><strong>Document &amp; communicate</strong> – capture and convey the architecture for its target audience.</li><li><strong>Accompany implementation</strong> – ensure consistency between code and architecture.</li><li><strong>Analyse &amp; evaluate</strong> – above all, identify risks.</li><li><strong>Show consequences</strong> – justify decisions and explain their implications.</li><li><strong>Recognize the need to iterate</strong> – when the architecture must be refined.</li></ul>"
    },
    "01-05": {
     "title": "Distinction from Other Architecture Domains",
     "body": "<p>CPSA-F focuses on <em>individual software systems</em>. Not in focus, but known as terms: enterprise IT architecture, business/process architecture, information architecture, infrastructure/technology architecture, hardware/processor architecture, systems architecture.</p>"
    },
    "01-06": {
     "title": "Role in Relation to Other Stakeholders",
     "body": "<p>Software architects shape their contribution depending on context – in interplay with product management/product owner, project management, requirements analysis, development, QA/testing, IT operations, possibly hardware development (for embedded systems), and enterprise architecture/architecture board.</p>"
    },
    "01-07": {
     "title": "Importance of Data and Data Models",
     "body": "<p>Data models (regardless of their physical form) often have a major impact on architecture. Important: the difference between <strong>products</strong> and <strong>sums</strong> in data modeling; decoupling the data model from its representation (DB, files, protocols); the effects of data on storage, security, scalability, reliability, performance.</p>"
    }
   }
  },
  "2": {
   "title": "Requirements and Constraints",
   "intro": "<p><em>What it's about:</em> How stakeholder concerns, requirements and qualities relate to each other – and how to formulate them cleanly. (90 min. + 90 min. exercise)</p>",
   "lzs": {
    "02-01": {
     "title": "Understanding Stakeholder Concerns",
     "body": "<p><strong>(R1)</strong> Identify stakeholders and their concerns, recognize their impact on architecture/process; recognize conflicts between short- and long-term goals (e.g. business vs. maintainability goals) and resolve them via the right stakeholders.</p><p><strong>(R3)</strong> Typical assignment: product management → time to implementation, development → components/interfaces, requirements/PO → requirement fulfillment, project management → time/budget/risk, QA/testing → isolated testability, operations → infrastructure. Not every concern becomes a requirement, but it must still be taken into account; concerns also help uncover missing/contradictory requirements or validate requirements and constraints against the architecture, e.g. in stakeholder interviews.</p>"
    },
    "02-02": {
     "title": "Clarifying Requirements and Constraints",
     "body": "<p><em>What it's about:</em> Architecture is shaped by <strong>requirements</strong> (what the system should do) and <strong>constraints</strong> (givens that limit the solution space). You must know both and be able to assess their impact. The influencing factors can be organized into categories:</p><p><strong>(R1) Product-related:</strong></p><ul><li><strong>Functional requirements</strong> – what the system must do from a domain perspective.</li><li><strong>Quality requirements</strong> – how well (performance, security, maintainability …); for the architecture often more decisive than the functions themselves.</li></ul><p><strong>(R1) Technological:</strong> existing or planned hardware/software infrastructure, plus prescribed reference architectures, libraries, components and frameworks.</p><p><strong>(R1) Organizational:</strong> the structure of the development teams <em>and</em> the clients, resources (budget, time, staff), and the availability, qualification and commitment of the staff.</p><p><strong>(R2) Further technological constraints:</strong> restrictions on data structures and interfaces, prescribed programming languages.</p><p><strong>(R2) Further organizational constraints:</strong> <strong>Conway's Law</strong> (the system structure mirrors the organization's communication structure), partnerships, standards and process models.</p><p><strong>(R2) Regulatory:</strong> law, contracts and liability, data protection, compliance and burden-of-proof issues.</p><p><strong>(R3) Soft factors &amp; trends:</strong> corporate culture; market and technology trends (e.g. cloud, microservices, containers, GenAI/LLMs) and methodology trends (e.g. agility).</p><p><strong>(R2) Important:</strong> be able to explain, using examples, the <strong>consequences</strong> that changes to these influencing factors have for the architecture.</p>"
    },
    "02-03": {
     "title": "Understanding the Qualities of a Software System",
     "body": "<p>„Quality\" is ambiguous: excellence (quality management) vs. <em>specific properties</em> of a system – <strong>here the latter is meant</strong>. There are various taxonomies (some separate functionality and quality, e.g. IREB). Architects can actively influence qualities – trade-offs are normal: configurability ↔ reliability, memory footprint ↔ performance, security ↔ usability, runtime flexibility ↔ maintainability. A single requirement can affect multiple qualities at the same time.</p>"
    },
    "02-04": {
     "title": "Formulating Requirements for Qualities",
     "body": "<p><strong>(R1)</strong> Formulate quality scenarios with <strong>context, stimulus, response, measurement</strong> (e.g. for requirement clarification or as input for evaluations); a quality requirement should always come with an analysis method as well (→ see LG 05-02).</p><p><strong>(R2)</strong> Using a metric as a goal can invalidate it. <strong>(R3)</strong> Keyword: <strong>Goodhart's Law</strong>.</p>"
    },
    "02-05": {
     "title": "Explicit Statements Instead of Implicit Assumptions",
     "body": "<p>Assumptions and preconditions should be made explicit. Implicit assumptions are a common source of misunderstandings between stakeholders.</p>"
    }
   }
  },
  "3": {
   "title": "Design and Development of Software Architectures",
   "intro": "<p><em>Largest chapter (270 min. + 90 min. exercise) – this is the focal point of the training, so it's also worth the most study time.</em></p><p><em>What it's about:</em> How you actually make architecture decisions – from heuristics through design principles and patterns to cross-cutting concerns, deployment and distributed systems.</p>",
   "lzs": {
    "03-01": {
     "title": "Achieving Requirements Through Architecture",
     "body": "<p>Architectural activities should deliberately contribute to specific qualities. Be able to assess which quality a decision improves (or worsens) – and recognize and communicate trade-offs, along with their risks, between design alternatives.</p>"
    },
    "03-02": {
     "title": "Designing Software Architectures",
     "body": "<p>Core skill of the curriculum: design based on known functional/quality requirements (for non-safety-critical systems) including communication/documentation. This includes: structural decisions (decomposition, dependencies – see LG 03-06), recognizing and justifying mutual dependencies and trade-offs regarding architecture decisions, the terms <strong>blackbox</strong>/<strong>whitebox</strong>, stepwise refinement of building blocks, designing architecture views (building block, runtime, deployment view – see LG 04-05), explaining consequences for the source code, separating domain-related and technical components, identifying risks of decisions.</p>"
    },
    "03-03": {
     "title": "Approaches and Heuristics for Architecture Development",
     "body": "<p><strong>(R1) Approaches:</strong></p><ul><li><strong>Top-down</strong> – from coarse to fine: start with the large building blocks, then refine step by step.</li><li><strong>Bottom-up</strong> – assemble larger structures from existing details/building blocks.</li><li><strong>View-based</strong> – develop the architecture gradually via different views (e.g. building block, runtime, deployment view).</li></ul><p>In practice these approaches are combined iteratively.</p><p><strong>(R3)</strong> Domain-Driven Design, evolutionary architecture, global analysis, model-based design – know as terms.</p>"
    },
    "03-04": {
     "title": "Design Principles",
     "body": "<p>Outline the goals/application of design principles in general <strong>(R2)</strong>. In detail:</p><ul><li><strong>Abstraction (R2):</strong> purposeful generalization; building blocks depend on abstractions, not on concrete implementations; interfaces <em>are</em> abstractions.</li><li><strong>Modularization (R1 – the most important single item here):</strong> information hiding/encapsulation, separation of concerns, loose but functionally sufficient coupling (→ LG 03-06), high cohesion, open/closed principle, dependency inversion principle.</li><li><strong>Conceptual integrity:</strong> homogeneity/consistency <strong>(R2)</strong>; „Principle of Least Astonishment\" and Liskov Substitution Principle <strong>(R3)</strong>.</li><li><strong>Reduction of complexity (R3):</strong> KISS, YAGNI, CUPID, DRY.</li><li><strong>Expect errors:</strong> robustness principle/Postel's Law <strong>(R2)</strong>; robust/resilient systems in general <strong>(R3)</strong>.</li><li><strong>SOLID (R3):</strong> SRP, OCP, LSP, ISP, DIP – know the benefits <em>and</em> the limits, not just the advantages.</li></ul><p><em>Why this counts as a whole despite the R3 portions:</em> SOLID, DRY/KISS/YAGNI and modularization are closely related in content. Anyone who only memorizes the R1 item (modularization) without being able to place the related R3 terms will have a harder time with transfer questions in the exam.</p>"
    },
    "03-05": {
     "title": "Feedback Loops and Risk",
     "body": "<p><strong>(R1)</strong> Explain the influence of an iterative approach on architecture decisions (risk, predictability); work and decide iteratively; understand the need for feedback.</p><p><strong>(R2)</strong> Be able to systematically obtain feedback from other stakeholders.</p>"
    },
    "03-06": {
     "title": "Managing Dependencies Between Building Blocks",
     "body": "<p>Know the types of coupling (via usage/delegation, messages/events, composition, creation, inheritance, temporal, via data/data types/hardware); distinguish at least <strong>static/dynamic</strong> and <strong>efferent/afferent</strong>. Important: dynamic instead of static coupling does not necessarily reduce the underlying coupling. Recognize and assess coupling, and decide with justification whether a dependency is appropriate. Ways to reduce it: patterns, design principles, externalization of dependencies (e.g. <strong>Dependency Injection</strong>, R3 – see LG 03-08).</p>"
    },
    "03-07": {
     "title": "Designing and Specifying Interfaces",
     "body": "<p><strong>(R1)</strong> Desirable properties: easy to learn/use/extend, hard to misuse, functionally complete from the user's perspective; separation of interface and implementation (implementation exchangeable).</p><p><strong>(R2)</strong> Internal and external interfaces require different treatment.</p><p><strong>(R3)</strong> Characteristics: transport channel, internal/external, local/remote, synchronous/asynchronous, binary/textual, stateless/stateful, point-to-point/multipoint, function call/message exchange, batch/request-response/streaming. Implementation approaches: procedure-oriented (e.g. GraphQL, SOAP) vs. resource-oriented (REST).</p>"
    },
    "03-08": {
     "title": "Important Architecture Patterns",
     "body": "<p><strong>(R1 – explain + provide examples):</strong></p><ul><li><strong>Layers</strong> – organization into stacked layers; higher layers use lower ones (e.g. UI → business logic → data access). Improves replaceability but can cost latency.</li><li><strong>Pipes and Filters</strong> – processing in independent steps (filters) connected by data streams (pipes); good for data processing/pipelines.</li><li><strong>Microservices</strong> – domain-oriented, independently deployable services; high flexibility, but operational and distributed complexity.</li></ul><p><strong>(R3 – know, assess relevance):</strong> Blackboard, Broker, CQRS, Event Sourcing, Dependency Injection, integration/messaging patterns, Remote Procedure Call, MVC/MVVM/MVU/PAC, Plugin, <strong>Ports and Adapters</strong> (= Onion/Hexagonal/Clean Architecture), SOA. Important sources (R3): the POSA series, PoEAA (for information systems). As a general rule: patterns are one way of achieving specific qualities for given problems in given contexts; there are various pattern categories; and there are further, domain-specific pattern sources beyond this list.</p>"
    },
    "03-09": {
     "title": "Important Design Patterns",
     "body": "<p>Combinator; the interface patterns <strong>Adapter</strong>, <strong>Facade</strong>, <strong>Proxy</strong> (usable independently of language); Interpreter; Observer; Template Method and Strategy; Visitor. Sources: GoF, POSA.</p>"
    },
    "03-10": {
     "title": "Identifying and Implementing Cross-Cutting Concerns",
     "body": "<p>Explain the significance of cross-cutting concerns, identify them, design cross-cutting concepts – typically: persistence, communication, GUI, error handling, concurrency, energy efficiency. Recognize mutual dependencies; cross-cutting concepts are often reusable across systems (→ documentation see LG 04-07).</p>"
    },
    "03-11": {
     "title": "Basic Principles of Software Deployments",
     "body": "<p>Deployment = the process of making new/updated software available. Concepts: automation, repeatable builds, consistent (possibly immutable) environments, everything under version control, releases easily reversible.</p>"
    },
    "03-12": {
     "title": "Challenges of Distributed Systems",
     "body": "<p>Identify distribution in an architecture; analyze consistency criteria; explain the causality of events. Know: communication can fail, DB consistency is limited in distributed systems, the <strong>split-brain problem</strong> exists, and the exact temporal ordering of events is fundamentally undeterminable.</p>"
    }
   }
  },
  "4": {
   "title": "Describing and Communicating Software Architectures",
   "intro": "<p><em>What it is about:</em> Documenting and communicating architecture in a way that is useful to the respective stakeholders. (180 min + 60 min exercise)</p>",
   "lzs": {
    "04-01": {
     "title": "Requirements for Technical Documentation",
     "body": "<p>Criteria: understandability, correctness, efficiency, appropriateness, maintainability. Form/content/level of detail must be geared to the target audience – only the target audience itself can judge whether the documentation is really understandable.</p>"
    },
    "04-02": {
     "title": "Describing and Communicating Software Architectures",
     "body": "<p><strong>(R2)</strong> Documentation supports design, implementation and further development (maintenance/evolution).</p><p><strong>(R1)</strong> Document in an audience-appropriate way (management, development, QA, other architects, and possibly further stakeholders); consolidate contributions from different authors stylistically and in terms of content; balance verbal and written communication; know the benefits of template-based documentation; know that the appropriate documentation properties depend on the system, requirements, risks, approach and organization.</p><p><strong>(R3)</strong> Adapt to the situation: scope/level of detail, format, accessibility, formality, approval processes.</p>"
    },
    "04-03": {
     "title": "Notation and Modeling Means",
     "body": "<p><em>What it's about:</em> Every architecture view has suitable notations. UML is the common standard – you don't need to master every diagram type, but you should know and be able to read the most important ones.</p><p><strong>(R2) UML diagrams:</strong></p><ul><li><strong>Class diagram</strong> – types/classes with attributes, operations and relationships (inheritance, association); static structure.</li><li><strong>Package diagram</strong> – groups elements into packages and shows their dependencies; good for coarse structuring.</li><li><strong>Component diagram</strong> – building blocks with their provided and required interfaces; the core of the building block view.</li><li><strong>Deployment diagram</strong> – maps software (artifacts) onto hardware/execution nodes; deployment view.</li><li><strong>Sequence diagram</strong> – the timed exchange of messages between participants in a scenario; runtime view.</li><li><strong>Activity diagram</strong> – flow/workflow with actions, branches and parallelism.</li></ul><p><strong>(R3) Further UML:</strong> <strong>composite structure diagram</strong> (a building block's internal structure via parts/ports) and <strong>state diagram</strong> (an object's states and the transitions between them).</p><p><strong>(R3) Alternatives to UML:</strong></p><ul><li><strong>ArchiMate</strong> – a notation for enterprise architecture (business, application and technology layers).</li><li><strong>SysML</strong> – a UML extension for systems engineering (also hardware and requirements).</li><li><strong>C4</strong> (Simon Brown) – four zoom levels: Context, Container, Component, Code; very popular for pragmatic architecture diagrams.</li><li><strong>Entity-relationship diagram (ERD)</strong> – data model: entities and their relationships.</li><li><strong>Flowchart / BPMN</strong> – flows and business processes; for runtime/process views.</li></ul>"
    },
    "04-04": {
     "title": "(not a real learning goal – Easter egg in the original curriculum)",
     "body": "<p>A small side note, not a typo on my part: In the official curriculum, LG 04-04 bears the title „Learning goal not found\" – deliberately chosen as an allusion to HTTP 404, and it actually references RFC 9110. Not exam-relevant, simply skip it.</p>"
    },
    "04-05": {
     "title": "Architecture Views",
     "body": "<p>Apply four central views: <strong>context view</strong> (external interfaces, functional/technical), <strong>building block view</strong> (structure made up of software building blocks), <strong>runtime view</strong> (dynamic interaction, state models), <strong>deployment view</strong> (hardware/infrastructure + mapping of building blocks onto it). Additional views as needed, e.g. security, information, operations or UI view <strong>(R3)</strong>.</p>"
    },
    "04-06": {
     "title": "Documenting Interfaces",
     "body": "<p>Document internal as well as external interfaces – the <em>counterpart</em> to <em>designing</em> interfaces (LG 03-07). Goal: others can use the interface correctly without knowing its internal structure.</p><p>Typical contents of an interface description:</p><ul><li><strong>Syntax</strong> – operations/endpoints, parameters, data formats and types.</li><li><strong>Semantics</strong> – meaning, pre-/post-conditions, permitted call order.</li><li><strong>Protocol &amp; technology</strong> – e.g. synchronous/asynchronous, transport (REST/messaging …).</li><li><strong>Error behaviour</strong> – error codes, exceptions, timeouts.</li><li><strong>Versioning</strong> – how changes are kept compatible and communicated.</li></ul>"
    },
    "04-07": {
     "title": "Documenting and Communicating Cross-Cutting Concerns",
     "body": "<p>Adequately document typical cross-cutting concerns and their solution concepts: persistence, process control, UI, distribution/integration, logging (the counterpart to <em>designing</em> in LG 03-10).</p>"
    },
    "04-08": {
     "title": "Explaining and Documenting Architecture Decisions",
     "body": "<p><strong>(R1)</strong> Make decisions systematically, justify, communicate and document them; recognize and document dependencies between decisions.</p><p><strong>(R2)</strong> Know <strong>Architecture Decision Records (ADR)</strong> and be able to use them. An ADR captures, per decision, in compact form: <strong>context</strong> (problem/constraints), <strong>decision</strong> (what was chosen), <strong>status</strong> (e.g. proposed/accepted/superseded), <strong>consequences</strong> (pros and cons) and, if relevant, the <strong>alternatives</strong> considered.</p>"
    },
    "04-09": {
     "title": "Further Aids and Tools for Documentation",
     "body": "<p>Know frameworks: ISO/IEC/IEEE 42010, <strong>arc42</strong>, <strong>C4</strong>. In addition: checklist concepts for creating/reviewing architecture documentation, possible tools.</p>"
    }
   }
  },
  "5": {
   "title": "Analysis and Evaluation of Software Architectures",
   "intro": "<p><em>What it is about:</em> How to assess whether an architecture (still) delivers what it is supposed to. (60 min + 30 min exercise)</p>",
   "lzs": {
    "05-01": {
     "title": "Reasons for Architecture Analysis",
     "body": "<p>Typical occasions: identifying risks/improvement potential (before/during/after implementation); checking whether the design meets (or will meet) the requirements; assessing how well implementation and decisions fit together; checking whether stakeholder concerns have been taken into account.</p>"
    },
    "05-02": {
     "title": "Analyzing the Qualities of a Software System",
     "body": "<p><strong>(R1) Methods:</strong> evaluation of acceptance tests, quantitative runtime measurement, qualitative evaluation (interviews/surveys/penetration tests), scenario-based analysis, architecture metrics for coupling (e.g. degree of incoming/outgoing dependencies).</p><p><strong>(R3) Methods:</strong> cost-benefit analysis, <strong>ATAM</strong> (Architecture Trade-off Analysis Method).</p><p><strong>(R1) Sources of information:</strong> requirements/architecture documentation, architecture/design models, source code + source-code-related metrics (LOC, cyclomatic complexity), test cases/results, faults and fault clusters, operations/test documentation, runtime logs/metrics.</p><p><strong>(R3)</strong> Revision history (e.g. change rate per component).</p>"
    },
    "05-03": {
     "title": "Evaluating Conformance with Architecture Decisions",
     "body": "<p><em>What it's about:</em> Checking whether the actual implementation still matches the architecture decisions made and the intended design – a <strong>target/actual comparison</strong>. If the code drifts unnoticed, <strong>architecture erosion</strong> creeps in.</p><p><strong>Methods:</strong></p><ul><li><strong>Architecture/code reviews</strong> – manual inspection against the documented rules (e.g. permitted dependencies between layers or building blocks).</li><li><strong>Static analysis / tool-supported checking</strong> – automated checking of dependency and layering rules (e.g. \"the UI must not access the database directly\"); violations can be surfaced already in the build.</li><li><strong>Fitness functions</strong> – automated tests that continuously monitor an architecture rule (the idea behind evolutionary architecture).</li></ul><p>Goal: detect and fix deviations early, before the architecture erodes.</p>"
    }
   }
  },
  "6": {
   "title": "Examples of Software Architectures",
   "intro": "<p><strong>Not exam-relevant</strong> (explicitly noted as such in the curriculum) – only LG 06-01 and 06-02, both R3: having traced, on at least one example, the relationship between requirements/constraints and solution, respectively the technical implementation. Kept deliberately brief here – the time saved is better invested in Chapter 3.</p>",
   "lzs": {}
  }
 }
};
