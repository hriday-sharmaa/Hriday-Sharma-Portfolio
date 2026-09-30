/**
 * CENTRALIZED PORTFOLIO CONFIGURATION
 * -----------------------------------
 * Connects with src/config/profile.js and src/config.js.
 */

import { profile } from './profile.js';
import { links } from '../config.js';

export { profile };

export const siteConfig = {
  name: profile.name || links.name || "Hriday Sharma",
  displayHeading: "HRIDAY",
  monogram: "HS.dev",
  role: profile.role || "1st Year B.Tech Computer Science & Engineering",
  degree: profile.role || "1st Year B.Tech Computer Science & Engineering",
  university: profile.college || "JECRC University, Jaipur",
  email: profile.email || links.email || "hridaysharma3264@gmail.com",
  location: profile.location || "Jaipur, Rajasthan, India",
  coordinates: profile.coordinates || "26.9124° N, 75.7873° E",
  timezone: "Asia/Kolkata",
  availabilityStatus: profile.status || "🟢 Open for hackathons & collaborative projects",
  resumeUrl: profile.resumeUrl || links.resume || "#",
  socials: {
    github: profile.socials?.github || links.github || "https://github.com/your-username",
    linkedin: profile.socials?.linkedin || links.linkedin || "https://linkedin.com/in/your-username",
    twitter: profile.socials?.twitter || "https://twitter.com/your-username",
    leetcode: profile.socials?.leetcode || "https://leetcode.com/your-username"
  },
  stats: {
    year: "1st Year",
    batch: "2024 - 2028",
    primaryLanguages: "C/C++, Python, JavaScript",
    learningFocus: "Data Structures, Web Architecture & Generative AI",
    commitsThisYear: "350+"
  },
  meta: {
    title: "Hriday Sharma (HS.dev) // 1st Year B.Tech CSE @ JECRC University",
    description: "Production-ready portfolio of Hriday Sharma, 1st Year B.Tech CSE undergraduate at JECRC University, Jaipur. Exploring algorithms, web architecture, and AI-powered systems.",
    keywords: "Hriday Sharma, HS.dev, JECRC University, Jaipur, B.Tech CSE, Software Engineer, Web Developer, Portfolio, Internships"
  }
};
