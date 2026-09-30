import { Project, SkillCategory, CourseworkEducation, Milestone, AchievementItem } from "../types/portfolio";

export const personalInfo = {
  name: "Hriday Sharma",
  displayName: "HRIDAY SHARMA",
  monogram: "HS // 01",
  headline: "1st Year B.Tech Computer Science & Engineering (CSE) Student",
  subHeadline: "Aspiring Software Engineer & AI Enthusiast",
  institution: "JECRC University",
  college: "JECRC University, Jaipur, Rajasthan, India",
  degree: "Bachelor of Technology (B.Tech)",
  branch: "Computer Science & Engineering",
  currentYear: "1st Year Undergrad",
  batch: "2024 - 2028",
  email: "hridaysharma3264@gmail.com",
  location: "Jaipur, Rajasthan, India",
  coordinates: "26.7753° N, 75.8763° E",
  timezone: "Asia/Kolkata",
  statusBadge: "🟢 1st-Year CSE @ JECRC | Open to Collaborations & Hackathons",
  statusShort: "Available for Hackathons & Summer Internships",
  bio: "1st Year B.Tech Computer Science & Engineering undergraduate at JECRC University, Jaipur. Merging algorithmic rigor in C++ with modern web architecture in Next.js and generative AI explorations. Committed to writing clean code, solving real campus problems, and competing in hackathons.",
  stats: {
    commits: "350+",
    problemsSolved: "140+",
    currentSgpaTarget: "9.0+",
    streakDays: "45 Days",
  },
  socials: {
    github: {
      url: "https://github.com/hriday-sharmaa",
      handle: "@hriday-sharmaa",
      label: "GitHub",
    },
    linkedin: {
      url: "https://linkedin.com/in/hriday-sharma",
      handle: "in/hriday-sharma",
      label: "LinkedIn",
    },
    leetcode: {
      url: "https://leetcode.com/u/hridaysharma",
      handle: "u/hridaysharma",
      label: "LeetCode",
    },
    twitter: {
      url: "https://twitter.com/hridaysharma",
      handle: "@hridaysharma",
      label: "Twitter / X",
    },
  },
};

export const featuredProjects: Project[] = [
  {
    id: "algoverse",
    num: "01",
    title: "Algoverse: Interactive DSA Engine",
    subtitle: "Real-time Algorithm & Graph Visualizer",
    category: "Algorithms & Logic",
    badge: "Featured / 60 FPS",
    accent: "#00f0ff",
    summary:
      "A high-performance visualizer for sorting algorithms (QuickSort, MergeSort, HeapSort) and graph pathfinding (Dijkstra, A*) with step-by-step state playback and procedural audio frequencies.",
    fullDescription:
      "Algoverse was built to bridge the gap between theoretical algorithm analysis and visual intuition. Features dynamic obstacle drawing on a weighted grid mesh, customizable speed throttle, live theoretical vs. practical time/space complexity HUD, and procedural audio pitch feedback matching array element values.",
    tags: ["C++ / TS", "HTML5 Canvas", "Sorting & Graphs", "Web Audio API", "Big-O Analysis"],
    metrics: [
      { label: "Render Rate", val: "60 FPS" },
      { label: "Algorithms", val: "8+ Implemented" },
      { label: "Frame Latency", val: "< 16ms" },
      { label: "Memory Overhead", val: "Zero Jitter" },
    ],
    github: "https://github.com/hriday-sharmaa/algoverse",
    demo: "https://algoverse.demo",
    highlights: [
      "Smooth 60 FPS HTML5 Canvas animation loop with zero external charting overhead",
      "Interactive barrier drawing with weighted graph physics (Dijkstra & A* Search)",
      "Real-time Big-O time and space complexity comparison HUD during sorting",
      "Synthesized audio frequency feedback matching array element magnitudes",
    ],
    techStackDetailed: ["TypeScript", "Next.js", "HTML5 Canvas", "Web Audio API", "Tailwind CSS"],
    architectureOverview:
      "State-driven queue architecture decoupling execution ticks from the browser's requestAnimationFrame cycle to guarantee butter-smooth 60fps renders even under heavy array mutations.",
  },
  {
    id: "campuspulse",
    num: "02",
    title: "CampusPulse: Student Utility Hub",
    subtitle: "University Productivity & Timetable Suite",
    category: "Web Applications",
    badge: "Campus Favorite",
    accent: "#6366f1",
    summary:
      "A tailor-made productivity suite for JECRC University students featuring an automated 75% attendance margin simulator, SGPA target calculators, and offline notes storage.",
    fullDescription:
      "Designed to solve daily academic logistics for fellow engineering peers: monitoring stringent 75% attendance criteria with smart margin predictors ('How many classes can I safely bunk or need to attend?'), semester SGPA target curves, and timetable alerts with zero cloud dependency.",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "LocalStorage PWA", "Responsive UI"],
    metrics: [
      { label: "Attendance Criteria", val: "75% Alert" },
      { label: "Offline First", val: "100%" },
      { label: "Load Speed", val: "< 0.3s" },
      { label: "Peer Users", val: "150+ Students" },
    ],
    github: "https://github.com/hriday-sharmaa/campuspulse",
    demo: "https://campuspulse.demo",
    highlights: [
      "Smart 75% attendance criteria margin calculator ('Bunk vs Attend' safe zone simulator)",
      "Interactive SGPA target curve calculator for mid-terms and end-term exams",
      "Offline-first client caching via LocalStorage with instant retrieval",
      "Minimalist, distraction-free modern dark interface for late-night study sessions",
    ],
    techStackDetailed: ["React", "TypeScript", "Tailwind CSS", "Service Workers", "Web Storage API"],
    architectureOverview:
      "Client-side reactive reactive store using local state persistence, ensuring complete privacy with zero external telemetry and instantaneous offline boot.",
  },
  {
    id: "neurochat",
    num: "03",
    title: "NeuroChat: AI Conversational Studio",
    subtitle: "AI-Powered Web Application & Chatbot",
    category: "Generative AI & Web",
    badge: "AI Application",
    accent: "#10b981",
    summary:
      "A sleek, responsive AI conversational workspace featuring streaming token simulation, custom prompt personas, markdown code syntax rendering, and chat history caching.",
    fullDescription:
      "Built to experiment with modern AI APIs, prompt engineering, and conversational UI patterns. Includes dynamic system prompts (Code Reviewer, DSA Tutor, Academic Writing Assistant), instant copyable code snippets, and a fluid glassmorphic chat interface.",
    tags: ["Next.js 14", "Tailwind CSS", "Generative AI", "Markdown Syntax", "Web Streams API"],
    metrics: [
      { label: "Prompt Personas", val: "4 Specialized" },
      { label: "UI Response", val: "Instant" },
      { label: "Theme", val: "Glass Dark" },
      { label: "Token Streaming", val: "Real-time" },
    ],
    github: "https://github.com/hriday-sharmaa/neurochat",
    demo: "https://neurochat.demo",
    highlights: [
      "Multi-persona AI studio (DSA Tutor, Code Architect, Academic Assistant)",
      "Fluid streaming response animation with token-by-token rendering",
      "Embedded syntax-highlighted code blocks with one-click clipboard copy",
      "Persistent conversation threads saved locally in browser memory",
    ],
    techStackDetailed: ["Next.js 14 App Router", "TypeScript", "Tailwind CSS", "Lucide Icons", "Framer Motion"],
    architectureOverview:
      "Chunked readable stream parser piping response buffers directly into an incremental virtualized DOM container with markdown formatting.",
  },
  {
    id: "devsync",
    num: "04",
    title: "DevSync: Sandboxed Code Playground",
    subtitle: "In-Browser Client-Side Frontend Editor",
    category: "Developer Tools",
    badge: "Open Source",
    accent: "#f59e0b",
    summary:
      "A blazing fast, client-side HTML, CSS, and JavaScript playground with live isolated iframe sandboxing, an in-app developer console, and JSON export.",
    fullDescription:
      "DevSync provides an instant scratchpad for web experiments without requiring any backend. Features sandboxed execution isolation, real-time error interception, customizable split layouts, and instant snippet export to Markdown and JSON.",
    tags: ["TypeScript", "Iframe Sandboxing", "DevTools", "CSS Flex/Grid", "DOM API"],
    metrics: [
      { label: "Startup Time", val: "0.2s" },
      { label: "Execution", val: "Sandboxed" },
      { label: "Dependencies", val: "Zero" },
      { label: "Hot Reload", val: "Live" },
    ],
    github: "https://github.com/hriday-sharmaa/devsync",
    demo: "https://devsync.demo",
    highlights: [
      "Sandboxed iframe architecture preventing script leakage or page lockups",
      "In-browser terminal console capturing log, warn, error and info outputs",
      "Responsive split-pane workspace with keyboard shortcuts",
      "Export and import code packages with zero backend required",
    ],
    techStackDetailed: ["TypeScript", "HTML5 Sandboxing", "PostMessage API", "Monaco Engine Concepts", "Tailwind CSS"],
    architectureOverview:
      "Two-way postMessage communication bridge between parent host and child sandbox with custom console interceptors.",
  },
];

export const skillsCategories: SkillCategory[] = [
  {
    id: "languages",
    name: "Programming Languages",
    icon: "Code2",
    description: "Core languages used for data structures, algorithmic problem solving, and software engineering.",
    skills: [
      { name: "C / C++", level: 90, badge: "Primary DSA", experience: "Pointers, Memory, STL, Algorithmic Optimization, OOPS", icon: "cpp" },
      { name: "Python", level: 85, badge: "Scripting & AI", experience: "Automation, Data Structures, AI API Integrations", icon: "python" },
      { name: "TypeScript / JavaScript", level: 88, badge: "Modern Web", experience: "Async/Await, Types, DOM APIs, Canvas, ES Modules", icon: "typescript" },
      { name: "HTML5 & CSS3", level: 92, badge: "Semantic UI", experience: "Responsive Layouts, Glassmorphism, CSS Grid, Animations", icon: "html5" },
    ],
  },
  {
    id: "web",
    name: "Web Engineering & Frameworks",
    icon: "Globe",
    description: "Modern frameworks and styling tools used to build performant, responsive web applications.",
    skills: [
      { name: "Next.js 14 (App Router)", level: 86, badge: "Framework", experience: "Server & Client Components, Route Handlers, Optimization", icon: "nextjs" },
      { name: "React 18", level: 88, badge: "Frontend", experience: "Custom Hooks, Context API, Component Composition, State Flow", icon: "react" },
      { name: "Tailwind CSS", level: 92, badge: "Styling", experience: "Utility Design, Custom Variables, Fluid Typography, Micro-animations", icon: "tailwind" },
      { name: "Framer Motion", level: 84, badge: "Animations", experience: "Layout Animations, Gestures, Staggered Reveals, Scroll Triggers", icon: "framer" },
      { name: "REST APIs & Fetch", level: 86, badge: "Networking", experience: "Async Data Fetching, JSON Parsing, Error Resilience, Streams", icon: "api" },
    ],
  },
  {
    id: "tools",
    name: "Developer Tools & Systems",
    icon: "Wrench",
    description: "Developer tooling, version control, and environments used daily in software workflows.",
    skills: [
      { name: "Git & GitHub", level: 89, badge: "VCS", experience: "Branching, Pull Requests, Conventional Commits, Workflows", icon: "git" },
      { name: "VS Code & Neovim", level: 92, badge: "Workstation", experience: "Debugging, Keybindings, Linting, Productivity Extensions", icon: "vscode" },
      { name: "Linux / Bash Shell", level: 80, badge: "CLI", experience: "Shell scripting, navigation, piping, process management", icon: "terminal" },
      { name: "Chrome DevTools", level: 88, badge: "Profiling", experience: "Performance profiling, network audit, DOM inspection, memory", icon: "devtools" },
    ],
  },
  {
    id: "foundations",
    name: "Foundations & Emerging Tech",
    icon: "Cpu",
    description: "Foundational computer science principles and cutting-edge artificial intelligence.",
    skills: [
      { name: "Data Structures & Algos", level: 88, badge: "Foundations", experience: "Arrays, Linked Lists, Trees, Stacks, Searching, Sorting", icon: "dsa" },
      { name: "Object-Oriented Design", level: 85, badge: "Paradigm", experience: "Encapsulation, Inheritance, Polymorphism, Abstraction in C++", icon: "oop" },
      { name: "Generative AI & LLMs", level: 82, badge: "Emerging", experience: "Prompt Engineering, API Integrations, Embedding workflows", icon: "ai" },
      { name: "Discrete Mathematics", level: 82, badge: "Theory", experience: "Logic, Set Theory, Combinatorics, Graph Theory Basics", icon: "math" },
    ],
  },
];

export const educationData: CourseworkEducation[] = [
  {
    institution: "JECRC University",
    location: "Jaipur, Rajasthan, India",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    period: "2024 - 2028 (Expected)",
    status: "Currently in 1st Year (Semester 1 & 2)",
    badge: "Current Degree",
    description:
      "Deeply immersed in computer science fundamentals, algorithmic problem solving in C++, computational mathematics, and modern web application development.",
    courses: [
      "Data Structures & Algorithms (C++)",
      "Object-Oriented Programming (C++)",
      "Discrete Mathematical Structures",
      "Computer Organization & Architecture",
      "Principles of Programming Languages",
      "Web Technologies & Internet Systems",
      "Engineering Calculus & Linear Algebra",
    ],
    highlights: [
      "Active participant in campus hackathons and algorithmic coding challenges",
      "Architected CampusPulse utility hub to assist peer students with 75% attendance calculations",
      "Engaged in university technical developer circles and open-source groups",
    ],
  },
  {
    institution: "Senior Secondary Education (Class XII)",
    location: "India",
    degree: "Senior Secondary School Certificate",
    field: "Science Stream (Physics, Chemistry, Mathematics & CS)",
    period: "Graduated 2024",
    status: "Completed with Distinction",
    badge: "Academic Foundation",
    description:
      "Built rigorous foundations in higher secondary mathematics, analytical problem solving, physics, and introductory programming logic.",
    courses: [
      "Higher Mathematics (Calculus, Probability, Vectors)",
      "Physics & Mechanics",
      "Chemistry",
      "Computer Science (Python & Fundamentals)",
    ],
    highlights: [
      "Secured top academic standing with special focus in Mathematics and Computing",
      "Solidified early commitment to Computer Science & Engineering",
    ],
  },
];

export const timelineMilestones: Milestone[] = [
  {
    year: "2024 - Present",
    title: "Commenced B.Tech CSE @ JECRC University, Jaipur",
    description:
      "Embarked on 4-year undergraduate journey. Focused on mastering C++ STL, data structures, and building Next.js web applications.",
    tag: "University",
  },
  {
    year: "2024",
    title: "Engineered Algoverse & CampusPulse",
    description:
      "Shipped 60 FPS interactive algorithm visualizer and university attendance margin calculator for fellow engineering peers.",
    tag: "Projects",
  },
  {
    year: "2024",
    title: "Higher Secondary Completion with Science & Math",
    description:
      "Graduated secondary education with distinction, transition to full-time engineering and competitive programming.",
    tag: "Academic",
  },
];

export const achievementsData: AchievementItem[] = [
  {
    category: "Hackathons & Competitions",
    icon: "Trophy",
    badge: "Active Competitor",
    title: "Campus Hackathons & Coding Contests",
    subtitle: "JECRC University & Regional Meets",
    description:
      "Active participant in 24-hour campus hackathons and algorithmic speed-coding contests, building pragmatic software solutions under pressure.",
    highlights: [
      "Collaborated on CampusPulse prototype during university innovation challenges",
      "Regular participant in departmental algorithmic problem-solving contests",
      "Eager to represent JECRC at national-level hackathons (SIH, hackathons across India)",
    ],
  },
  {
    category: "Problem Solving & Cadence",
    icon: "Flame",
    badge: "Disciplined Practice",
    title: "LeetCode & GitHub Cadence",
    subtitle: "Daily Algorithmic Rigor",
    description:
      "Maintains a consistent daily problem-solving routine focusing on arrays, strings, two-pointers, recursion, and C++ STL patterns.",
    highlights: [
      "350+ code commits across personal and university projects",
      "Active problem solving on LeetCode with focus on data structures",
      "Maintaining clean documentation and modular code patterns across all repositories",
    ],
  },
  {
    category: "Continuous Learning",
    icon: "Award",
    badge: "Verified Skill Building",
    title: "Computer Science & Modern Web Exploration",
    subtitle: "Self-Paced & University Labs",
    description:
      "Supplementing classroom lectures with comprehensive self-driven curriculum in systems, web development, and artificial intelligence.",
    highlights: [
      "In-depth exploration of Harvard CS50 & MIT OpenCourseWare foundational concepts",
      "Hands-on building with Next.js 14 App Router, Server Components, and Tailwind CSS",
      "Practical experimentation with Generative AI APIs and prompt engineering patterns",
    ],
  },
];

export const marqueeTech = [
  "C++ 20",
  "Data Structures & STL",
  "TypeScript",
  "Next.js 14",
  "React 18",
  "Tailwind CSS",
  "Framer Motion",
  "HTML5 Canvas",
  "Python 3",
  "Git & GitHub",
  "Linux / Bash",
  "Web Audio API",
  "Generative AI",
  "Discrete Mathematics",
  "Object-Oriented Design",
  "REST APIs",
];
