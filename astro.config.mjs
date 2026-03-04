import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [mdx(), sitemap()],
  site: 'https://travis-campbell.com',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
