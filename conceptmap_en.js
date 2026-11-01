/* Englische Übersetzung der Concept Map (Phase 3). Fallback auf Deutsch via mergeEN + LE(). */
const CMAP_EN = {
 "chapters": {
  "1": {
   "title": "Basic Concepts of Software Architecture",
   "sub": "Fundamentals & Role"
  },
  "2": {
   "title": "Requirements and Constraints",
   "sub": "Stakeholders & Qualities"
  },
  "3": {
   "title": "Design and Development of Software Architectures",
   "sub": "Largest chapter — Principles, Patterns, Coupling"
  },
  "4": {
   "title": "Description and Communication",
   "sub": "Documentation & Views"
  },
  "5": {
   "title": "Analysis and Evaluation",
   "sub": "Checking Quality"
  },
  "6": {
   "title": "Examples of Software Architectures",
   "sub": "Not exam-relevant"
  }
 },
 "lz": {
  "01-01": {
   "name": "Definitions of Software Architecture",
   "desc": "Common ground of the definitions: building blocks/components with interfaces and relationships, structures, cross-cutting concerns, principles and architecture decisions."
  },
  "01-02": {
   "name": "Goals and Benefits",
   "desc": "Why architecture: safeguard qualities, reduce complexity, create shared understanding."
  },
  "01-03": {
   "name": "Long-term Effects",
   "desc": "How today's decisions shape tomorrow's maintainability and quality."
  },
  "01-04": {
   "name": "Tasks and Responsibilities",
   "desc": "Clarify, decide, document, guide, evaluate – the job in one sentence."
  },
  "01-05": {
   "name": "Distinction from Other Domains",
   "desc": "CPSA-F focuses on software – not enterprise, process, or infrastructure architecture."
  },
  "01-06": {
   "name": "Role with Stakeholders",
   "desc": "Shaping your own role towards product management/PO, project management, requirements analysis, development, QA/test, operations and enterprise architecture."
  },
  "01-07": {
   "name": "Data and Data Models",
   "desc": "Identify and design architecture-relevant data models, product vs. sum types, decouple the data model from its representation."
  },
  "02-01": {
   "name": "Stakeholder Concerns",
   "desc": "Who wants what – and how that influences the architecture."
  },
  "02-02": {
   "name": "Clarify Requirements & Constraints",
   "desc": "Product, technical, organizational (incl. Conway), regulatory influences and trends – and how changing them can overturn decisions."
  },
  "02-03": {
   "name": "Understanding Qualities",
   "desc": "Quality = a system property, not goodness. Trade-off conflicts are normal."
  },
  "02-04": {
   "name": "Formulate Quality Requirements",
   "desc": "Scenarios with context, stimulus, response, measure; a requirement should name its analysis method; a metric used as a target can be invalidated."
  },
  "02-05": {
   "name": "Explicit Instead of Implicit",
   "desc": "Make assumptions explicit to avoid misunderstandings."
  },
  "03-01": {
   "name": "Achieving Requirements through Architecture",
   "desc": "Design targets concrete qualities – with recognizable trade-offs."
  },
  "03-02": {
   "name": "Designing Software Architectures",
   "desc": "The core skill: decompose, design views, explain the consequences for the code."
  },
  "03-03": {
   "name": "Approaches & Heuristics",
   "desc": "Top-down, bottom-up, view-based – plus DDD & co. as concepts."
  },
  "03-04": {
   "name": "Design Principles",
   "desc": "Modularization (R1: information hiding, SoC, cohesion, loose coupling, OCP, DIP), abstraction and conceptual integrity (R2), “expect errors”/Postel (R2) – SOLID, KISS/DRY/YAGNI only R3."
  },
  "03-05": {
   "name": "Feedback Loops & Risk",
   "desc": "An iterative approach reduces risk with uncertain decisions."
  },
  "03-06": {
   "name": "Managing Dependencies",
   "desc": "Know coupling types (static/dynamic, afferent/efferent), assess and deliberately reduce them – dynamic coupling does not automatically mean less coupling."
  },
  "03-07": {
   "name": "Designing Interfaces",
   "desc": "Easy to use, hard to misuse, clearly separated from the implementation."
  },
  "03-08": {
   "name": "Architecture Patterns",
   "desc": "Explain and apply layers, pipes & filters, microservices (R1) – others such as ports & adapters, CQRS, broker, MVC only R3."
  },
  "03-09": {
   "name": "Design Patterns",
   "desc": "Adapter, Facade, Observer, Strategy – classic GoF patterns."
  },
  "03-10": {
   "name": "Cross-cutting Concerns",
   "desc": "Identify cross-cutting concerns such as persistence, communication, GUI, error handling, concurrency and design uniform cross-cutting concepts for them."
  },
  "03-11": {
   "name": "Deployment Principles",
   "desc": "Automation, repeatable builds, easy rollback of releases."
  },
  "03-12": {
   "name": "Distributed Systems",
   "desc": "Communication can fail, consistency is limited, split-brain looms, the exact order of events cannot be determined."
  },
  "04-01": {
   "name": "Requirements for Documentation",
   "desc": "Understandable, correct, efficient – and tailored to the audience."
  },
  "04-02": {
   "name": "Describe & Communicate",
   "desc": "Consolidate and balance documentation for different stakeholders."
  },
  "04-03": {
   "name": "Notation Means",
   "desc": "UML: class, package, component, deployment, sequence, activity diagrams (R2); state diagrams and alternatives such as C4, ArchiMate, SysML, ERD, BPMN (R3)."
  },
  "04-04": {
   "name": "Learning goal not found",
   "desc": "Deliberately titled this way (presumably a nod to HTTP 404): “handle unexpected situations skilfully” – not exam-relevant."
  },
  "04-05": {
   "name": "Architecture Views",
   "desc": "Apply the context (business/technical), building block, runtime and deployment views – incl. nodes, channels and deployment artifacts."
  },
  "04-06": {
   "name": "Documenting Interfaces",
   "desc": "Document internal as well as external interfaces cleanly."
  },
  "04-07": {
   "name": "Documenting Cross-cutting Concerns",
   "desc": "Communicate persistence, UI, logging & co. adequately."
  },
  "04-08": {
   "name": "Documenting Architecture Decisions",
   "desc": "Make, justify, communicate and document decisions systematically, recognize dependencies between them – know and use ADRs (R2)."
  },
  "04-09": {
   "name": "Further Tools",
   "desc": "Know ISO 42010, arc42, C4 as documentation frameworks."
  },
  "05-01": {
   "name": "Reasons for Architecture Analysis",
   "desc": "Identify risks, check requirement fulfillment, align with the implementation."
  },
  "05-02": {
   "name": "Analyzing Qualities",
   "desc": "Quantitative (measurements, metrics such as coupling, LOC, complexity) and qualitative (interviews, scenario-based analysis) – ATAM and cost-benefit analysis only R3."
  },
  "05-03": {
   "name": "Assessing Conformance",
   "desc": "Does the implementation match the design? Reviews & tool analysis."
  },
  "06-01": {
   "name": "Requirements ↔ Solution",
   "desc": "Traced through at least one example – not exam-relevant."
  },
  "06-02": {
   "name": "Technical Implementation",
   "desc": "Traced through at least one example – not exam-relevant."
  }
 },
 "reasons": {
  "01-01_03-02": "Same basic vocabulary: here the definition (building blocks, interfaces), there its practical application in design.",
  "01-02_02-03": "The goals and benefits of architecture are closely tied to the concept of \"quality\", which is deepened here.",
  "02-01_04-02": "Stakeholder concerns from here determine how you document for the target audience there.",
  "02-03_05-02": "Understanding qualities is a prerequisite for being able to analyze them later.",
  "02-04_05-02": "According to the curriculum, a quality requirement should directly provide an analysis method.",
  "03-02_03-06": "Structural decisions during design always mean managing dependencies as well.",
  "03-02_04-05": "Architecture views are designed here and explained in detail there.",
  "03-04_03-06": "Modularization (a design principle) and coupling management are two sides of the same coin.",
  "03-06_03-08": "Dependency Injection is the concrete pattern-based realization of a dependency-reduction technique.",
  "03-07_04-06": "Interfaces are designed here, documented there – design and documentation belong together.",
  "03-10_04-07": "Cross-cutting concerns are designed here, documented there.",
  "03-02_04-08": "Architecture decisions are made during design and are documented there systematically (e.g. as an ADR).",
  "03-01_05-01": "Why you do architecture at all is the yardstick against which analysis is later performed.",
  "01-04_01-06": "What architects do (tasks) and whom they do it with (role towards other stakeholders) belong together.",
  "01-04_02-02": "“Clarify requirements and constraints” is the first task – it is spelled out in detail here.",
  "01-06_02-01": "The stakeholders you shape your role towards are the same ones whose concerns you gather there.",
  "01-03_04-08": "Because decisions have long-term effects, they must be justified and documented traceably.",
  "01-07_03-10": "Data models shape the cross-cutting concern of persistence – yet the model stays independent of the storage form.",
  "02-01_02-02": "Stakeholder concerns often (not always) turn into requirements and constraints.",
  "02-02_02-05": "Unclear requirements and constraints lead to assumptions – these must be made explicit.",
  "02-02_03-01": "Requirements and constraints are the input the design must satisfy or respect.",
  "02-03_02-04": "First understand what qualities are and how they interact – then formulate them as scenarios.",
  "02-03_03-01": "Architecture work should deliberately achieve specific qualities – with conscious trade-offs.",
  "03-02_03-03": "The approach (top-down, bottom-up, view-based) is the path along which you design the architecture.",
  "03-03_03-05": "An iterative approach with feedback complements the design heuristics and lowers risk.",
  "03-05_05-01": "Seeking feedback on decisions also means analysing the architecture early to find risks.",
  "03-04_03-07": "Information hiding and abstraction show up concretely in the separation of interface and implementation.",
  "03-08_03-09": "Architecture patterns structure the system at large, design patterns solve problems at small scale.",
  "03-07_03-09": "Adapter, facade and proxy are interface patterns – they shape how building blocks see each other.",
  "03-08_03-12": "Microservices are distributed systems – with all the challenges of network, consistency and ordering.",
  "03-11_04-05": "What deployment ships (artifacts onto nodes) is described by the deployment view.",
  "04-01_04-02": "The requirements for good documentation (understandable, correct, appropriate …) apply to every description and communication.",
  "04-03_04-05": "Notations such as UML are the tool for depicting the views.",
  "04-02_04-09": "Template-based documentation (e.g. arc42) is a means of describing architecture consistently.",
  "03-06_05-02": "Coupling is measured in analysis via metrics such as incoming/outgoing dependencies.",
  "03-06_05-03": "Tool-supported dependency analysis reveals where the code violates the planned structure.",
  "04-08_05-03": "Conformance is measured against the (documented) architecture decisions."
 }
};
