import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://manufacturer.worldbatteryhub.com',
  integrations: [sitemap()],
  trailingSlash: 'always',
});
