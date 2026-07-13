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
   "desc": "Building blocks, interfaces, relationships – the common ground of all architecture definitions."
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
   "desc": "How architects relate to PM, development, QA, and operations."
  },
  "01-07": {
   "name": "Data and Data Models",
   "desc": "Data models influence architecture – independent of their physical form."
  },
  "02-01": {
   "name": "Stakeholder Concerns",
   "desc": "Who wants what – and how that influences the architecture."
  },
  "02-02": {
   "name": "Clarify Requirements & Constraints",
   "desc": "Product, technology, organization, regulation – everything affects the architecture."
  },
  "02-03": {
   "name": "Understanding Qualities",
   "desc": "Quality = a system property, not goodness. Trade-off conflicts are normal."
  },
  "02-04": {
   "name": "Formulate Quality Requirements",
   "desc": "Formulate scenarios with context, stimulus, response, and measurement."
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
   "desc": "Modularization, abstraction, SOLID, KISS/DRY/YAGNI – the foundation of good design."
  },
  "03-05": {
   "name": "Feedback Loops & Risk",
   "desc": "An iterative approach reduces risk with uncertain decisions."
  },
  "03-06": {
   "name": "Managing Dependencies",
   "desc": "Know the types of coupling, assess them, and reduce them deliberately."
  },
  "03-07": {
   "name": "Designing Interfaces",
   "desc": "Easy to use, hard to misuse, clearly separated from the implementation."
  },
  "03-08": {
   "name": "Architecture Patterns",
   "desc": "Layers, pipes & filters, microservices – plus knowing many others."
  },
  "03-09": {
   "name": "Design Patterns",
   "desc": "Adapter, Facade, Observer, Strategy – classic GoF patterns."
  },
  "03-10": {
   "name": "Cross-cutting Concerns",
   "desc": "Persistence, communication, error handling – concerns that come into play everywhere."
  },
  "03-11": {
   "name": "Deployment Principles",
   "desc": "Automation, repeatable builds, easy rollback of releases."
  },
  "03-12": {
   "name": "Distributed Systems",
   "desc": "Communication can fail, exact ordering is not guaranteed."
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
   "desc": "UML diagrams plus alternatives such as C4, ArchiMate, SysML."
  },
  "04-04": {
   "name": "(not a real learning goal)",
   "desc": "Easter egg in the original curriculum – a nod to HTTP 404."
  },
  "04-05": {
   "name": "Architecture Views",
   "desc": "Apply context, building block, runtime, and deployment views."
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
   "desc": "Justify and document systematically – ideally as an ADR."
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
   "desc": "Acceptance tests, metrics, scenario-based analysis – plus ATAM as R3."
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
  "03-01_05-01": "Why you do architecture at all is the yardstick against which analysis is later performed."
 }
};
