/**
 * CENTRAL SOCIAL & PROFILE CONFIGURATION
 * --------------------------------------
 * Stores all links and profile data. Connects with src/config/site.js.
 */

import { siteConfig } from './config/site.js';

export { siteConfig };

export const links = {
  name: siteConfig.name,
  email: siteConfig.email,
  github: siteConfig.socials.github,
  linkedin: siteConfig.socials.linkedin,
  resume: siteConfig.resumeUrl,
};

export const profileDetails = {
  headingDisplay: siteConfig.heroDisplay || "HRIDAY",
  role: siteConfig.role,
  college: siteConfig.college,
  location: siteConfig.location,
  coordinates: siteConfig.coordinates,
  status: siteConfig.status
};
