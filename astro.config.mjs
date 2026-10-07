// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// The Squarespace site served game pages at root-level slugs. Keep those URLs
// working (old links, Discord pins, search results) now that pages live under
// /projects/. Static output renders these as meta-refresh pages.
const redirects = {
  '/vesuvius': '/projects/vesuvius',
  '/sunfall': '/projects/sunfall',
  '/immunoblast': '/projects/immunoblast',
  '/merchant-squabble': '/projects/merchant-squabble',
  '/project-greyclaw': '/projects/project-greyclaw',
};

// https://astro.build/config
export default defineConfig({
  site: 'https://www.hopkinsgamedevsociety.com',

  redirects,

  integrations: [
    sitemap({
      // Redirect stubs and the 404 page are noindex — don't advertise them.
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/$/, '');
        return !(path in redirects) && path !== '/404';
      },
    }),
  ],

  // Self-hosted at build time (downloaded from Google Fonts, served from our own
  // domain) so no render-blocking third-party stylesheet sits in front of the page.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-body',
      weights: [400, 500, 600, 700, 800],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Ubuntu Mono',
      cssVariable: '--font-heading',
      weights: [400, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['monospace'],
    },
  ],
});
