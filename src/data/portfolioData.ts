export interface Metric {
  label: string;
  val: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  status: "Completed" | "In Progress" | "Future Concept";
  description: string;
  tech: string[];
  category: "Web Applications" | "Algorithms & Logic" | "Developer Tools" | "Future Projects";
  github: string;
  demo?: string;
  metrics: Metric[];
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  category: string;
  level: "Proficient" | "Intermediate" | "Exploring" | "Core";
  iconName: string;
  tag?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export const personalInfo = {
  name: "Hriday Sharma",
  displayName: "HRIDAY SHARMA",
  headline: "Hi, I'm Hriday Sharma",
  subtitle: "Aspiring Software Engineer | B.Tech CSE @ JECRC University (Class of 2030)",
  shortBio:
    "First-year Computer Science & Engineering student at JECRC University passionate about crafting elegant software, exploring algorithms, and building intuitive digital products.",
  degree: "Bachelor of Technology (B.Tech)",
  branch: "Computer Science & Engineering (CSE)",
  currentYear: "1st Year Undergrad",
  institution: "JECRC University",
  college: "JECRC University",
  location: "Jaipur, Rajasthan, India",
  expectedGraduation: "2030",
  email: "hridaysharma3264@gmail.com",
  statusBadge: "1st Year B.Tech CSE Undergrad",
  availabilityBadge: "Open to Collaborations & Internships",
  socials: {
    github: {
      label: "GitHub",
      url: "#",
      handle: "hridaysharma",
      placeholder: true,
    },
    linkedin: {
      label: "LinkedIn",
      url: "#",
      handle: "Hriday Sharma",
      placeholder: true,
    },
    email: {
      label: "Email",
      url: "mailto:hridaysharma3264@gmail.com",
      address: "hridaysharma3264@gmail.com",
    },
  },
};

export const aboutMeData = {
  title: "About Me",
  tagline: "Driven by curiosity, powered by code.",
  bioParagraphs: [
    "My journey into technology began with an innate fascination for how software shapes the modern world. As a 1st-year Computer Science & Engineering student at JECRC University (Class of 2030), I am transforming that curiosity into foundational engineering expertise.",
    "I am currently diving deep into programming fundamentals, algorithmic problem solving, and modern web development ecosystems. I believe in writing clean, well-structured code and continuously experimenting with new developer tools and paradigms.",
    "Beyond academic coursework, I am passionate about building real-world projects, participating in developer communities, and collaborating on open-source solutions. My objective is to grow into a versatile software engineer who crafts impactful, high-performance digital products.",
  ],
  pillars: [
    {
      title: "Foundational Rigor",
      description:
        "Mastering core computing principles including Data Structures, Algorithms, Object-Oriented Design, and computational logic.",
      icon: "Code2",
    },
    {
      title: "Modern Tech Enthusiast",
      description:
        "Actively exploring Next.js, TypeScript, Tailwind CSS, and cloud-native workflows to build fast, delightful web experiences.",
      icon: "Sparkles",
    },
    {
      title: "Continuous Growth",
      description:
        "Every single day is an opportunity to learn, write cleaner code, solve algorithmic puzzles, and expand engineering horizons.",
      icon: "Rocket",
    },
  ],
  stats: [
    { label: "Academic Year", value: "1st Year", detail: "B.Tech CSE" },
    { label: "Graduation Target", value: "2030", detail: "JECRC University" },
    { label: "Core Mindset", value: "Build & Learn", detail: "Daily Coding Habit" },
    { label: "Availability", value: "Open", detail: "Projects & Collabs" },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    name: "Programming Languages",
    icon: "Code",
    description: "Foundational & modern languages for algorithmic problem-solving and software development.",
    skills: [
      { name: "C", category: "Languages", level: "Proficient", iconName: "Terminal", tag: "System Logic" },
      { name: "C++", category: "Languages", level: "Intermediate", iconName: "Cpu", tag: "DSA & OOP" },
      { name: "Python", category: "Languages", level: "Intermediate", iconName: "Binary", tag: "Scripting & DSA" },
      { name: "JavaScript", category: "Languages", level: "Intermediate", iconName: "FileCode", tag: "ES6+ Standard" },
      { name: "TypeScript", category: "Languages", level: "Exploring", iconName: "ShieldCheck", tag: "Type-Safe Dev" },
      { name: "HTML5 / CSS3", category: "Languages", level: "Proficient", iconName: "Layout", tag: "Modern Semantic" },
      { name: "SQL", category: "Languages", level: "Exploring", iconName: "Database", tag: "Data Queries" },
    ],
  },
  {
    id: "web",
    name: "Web & Frameworks",
    icon: "Globe",
    description: "Modern web ecosystem tools for crafting aesthetic, responsive, and performant user interfaces.",
    skills: [
      { name: "React.js", category: "Web", level: "Intermediate", iconName: "Atom", tag: "Component UI" },
      { name: "Next.js 14", category: "Web", level: "Exploring", iconName: "Layers", tag: "App Router & SSR" },
      { name: "Tailwind CSS", category: "Web", level: "Proficient", iconName: "Palette", tag: "Utility-First" },
      { name: "Node.js", category: "Web", level: "Exploring", iconName: "Server", tag: "Backend Runtime" },
      { name: "REST APIs", category: "Web", level: "Intermediate", iconName: "Workflow", tag: "Data Integration" },
      { name: "Framer Motion", category: "Web", level: "Intermediate", iconName: "Flame", tag: "Micro-Animations" },
    ],
  },
  {
    id: "tools",
    name: "Tools & Ecosystem",
    icon: "Wrench",
    description: "Developer tooling, version control, and environments used for efficient workflow.",
    skills: [
      { name: "Git", category: "Tools", level: "Proficient", iconName: "GitBranch", tag: "Version Control" },
      { name: "GitHub", category: "Tools", level: "Proficient", iconName: "Github", tag: "Collab & Repos" },
      { name: "VS Code", category: "Tools", level: "Proficient", iconName: "Laptop", tag: "Primary Editor" },
      { name: "Linux / CLI", category: "Tools", level: "Intermediate", iconName: "TerminalSquare", tag: "Bash Commands" },
      { name: "Postman", category: "Tools", level: "Exploring", iconName: "Send", tag: "API Debugging" },
      { name: "Vercel", category: "Tools", level: "Intermediate", iconName: "Cloud", tag: "Web Deployment" },
    ],
  },
  {
    id: "fundamentals",
    name: "CS Fundamentals",
    icon: "BookOpen",
    description: "Core computer science subjects being mastered during undergraduate studies.",
    skills: [
      { name: "Data Structures", category: "Fundamentals", level: "Intermediate", iconName: "Boxes", tag: "Arrays, Lists, Trees" },
      { name: "Algorithms", category: "Fundamentals", level: "Intermediate", iconName: "Network", tag: "Sorting, Searching" },
      { name: "Object-Oriented Programming", category: "Fundamentals", level: "Intermediate", iconName: "Shapes", tag: "Inheritance, Poly" },
      { name: "Discrete Mathematics", category: "Fundamentals", level: "Intermediate", iconName: "Calculator", tag: "Logic & Sets" },
      { name: "Computer Architecture", category: "Fundamentals", level: "Exploring", iconName: "HardDrive", tag: "Hardware & CPU" },
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: "personal-portfolio",
    title: "Ultra-Modern Developer Portfolio",
    subtitle: "Aesthetic Glassmorphism Portfolio Website",
    badge: "Featured • Live",
    status: "Completed",
    category: "Web Applications",
    description:
      "A premium, highly aesthetic personal portfolio engineered with Next.js 14, Tailwind CSS, TypeScript, and Framer Motion. Features a sleek obsidian dark theme, fluid glassmorphism cards, interactive clipboard integration, and sound synthesis.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "React"],
    github: "#",
    demo: "#",
    metrics: [
      { label: "Theme", val: "Obsidian Glass" },
      { label: "Responsiveness", val: "100% Fluid" },
    ],
    featured: true,
  },
  {
    id: "dsa-vault",
    title: "DSA & Problem Solving Hub",
    subtitle: "Algorithmic Implementations & Patterns",
    badge: "Active • Repo",
    status: "In Progress",
    category: "Algorithms & Logic",
    description:
      "A structured repository of Data Structures and Algorithms solutions in C++ and Python. Includes optimal implementations for arrays, linked lists, trees, recursion, sorting routines, and competitive programming challenges.",
    tech: ["C++", "Python", "Algorithms", "Data Structures", "Git"],
    github: "#",
    demo: "#",
    metrics: [
      { label: "Focus", val: "LeetCode & DSA" },
      { label: "Primary Lang", val: "C++ / Python" },
    ],
    featured: true,
  },
  {
    id: "devpulse-dashboard",
    title: "DevPulse — Developer Productivity Suite",
    subtitle: "Full-Stack Streak & Resource Tracker",
    badge: "Future Project",
    status: "Future Concept",
    category: "Developer Tools",
    description:
      "An upcoming full-stack web dashboard designed for developers to aggregate GitHub commits, LeetCode progress, technical documentation bookmarks, and daily coding habits in a single distraction-free UI.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Prisma"],
    github: "#",
    demo: "#",
    metrics: [
      { label: "Phase", val: "Architecture Planning" },
      { label: "Target", val: "Future Build" },
    ],
    featured: false,
  },
  {
    id: "campus-connect",
    title: "UniSphere — Campus Tech Portal",
    subtitle: "Peer Resource Sharing & Hackathon Matcher",
    badge: "Future Project",
    status: "Future Concept",
    category: "Web Applications",
    description:
      "A planned collaborative web platform for JECRC University students to share verified lecture notes, find teammates for regional hackathons, and showcase open-source student initiatives.",
    tech: ["React.js", "Node.js", "REST APIs", "Tailwind CSS", "MongoDB"],
    github: "#",
    demo: "#",
    metrics: [
      { label: "Community", val: "JECRC CSE" },
      { label: "Scope", val: "Student Collab" },
    ],
    featured: false,
  },
];

export const educationData = {
  institution: "JECRC University",
  location: "Jaipur, Rajasthan, India",
  degree: "Bachelor of Technology (B.Tech)",
  branch: "Computer Science & Engineering (CSE)",
  timeline: "2026 – 2030 (Expected)",
  currentYear: "1st Year Undergraduate",
  expectedGraduation: "2030",
  badge: "Class of 2030",
  courses: [
    "Programming Fundamentals in C / C++",
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Discrete Mathematics & Logic",
    "Digital Electronics & Computer Architecture",
    "Web Technologies & Database Systems",
  ],
  highlights: [
    "Active member of campus technical & coding community",
    "Engaged in hands-on programming projects and foundational computing labs",
    "Consistently exploring modern web frameworks and competitive programming",
  ],
};
