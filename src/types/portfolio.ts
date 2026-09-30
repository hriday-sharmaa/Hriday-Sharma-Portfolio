export interface Metric {
  label: string;
  val: string;
}

export interface Project {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  category: "Algorithms & Logic" | "Web Applications" | "Generative AI & Web" | "Developer Tools";
  badge: string;
  accent: string;
  summary: string;
  fullDescription: string;
  tags: string[];
  metrics: Metric[];
  github: string;
  demo: string;
  highlights: string[];
  techStackDetailed?: string[];
  architectureOverview?: string;
}

export interface SkillItem {
  name: string;
  level: number;
  badge: string;
  experience: string;
  icon: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export interface CourseworkEducation {
  institution: string;
  location: string;
  degree: string;
  field: string;
  period: string;
  status: string;
  badge: string;
  description: string;
  courses: string[];
  highlights: string[];
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
  tag: string;
}

export interface AchievementItem {
  category: string;
  icon: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

export interface SocialLink {
  url: string;
  label: string;
  handle: string;
  placeholder?: boolean;
}
