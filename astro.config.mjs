// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.hopkinsgamedevsociety.com',

  // The Squarespace site served game pages at root-level slugs. Keep those URLs
  // working (old links, Discord pins, search results) now that pages live under
  // /projects/. Static output renders these as meta-refresh pages.
  redirects: {
    '/vesuvius': '/projects/vesuvius',
    '/sunfall': '/projects/sunfall',
    '/immunoblast': '/projects/immunoblast',
    '/merchant-squabble': '/projects/merchant-squabble',
    '/project-greyclaw': '/projects/project-greyclaw',
  },
});
