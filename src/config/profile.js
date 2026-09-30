/**
 * DEDICATED PROFILE CONFIGURATION BRIDGE
 * Connects with src/config/site.js.
 */

import { siteConfig } from './site.js';

export const profile = {
  name: siteConfig.name,
  role: siteConfig.degree || siteConfig.role,
  college: siteConfig.college,
  email: siteConfig.email,
  location: siteConfig.location,
  coordinates: siteConfig.coordinates,
  socials: siteConfig.socials,
  resumeUrl: siteConfig.resumeUrl,
  status: siteConfig.status
};
