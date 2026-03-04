import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  site: 'https://travis-campbell.com',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
