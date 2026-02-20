import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.travis-campbell.com',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
