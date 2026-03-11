import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [mdx(), sitemap(), react(), tailwind()],
  site: 'https://travis-campbell.com',
  trailingSlash: 'always',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
