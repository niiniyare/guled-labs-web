import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: set this to the real domain before launch (used for canonical URLs and the sitemap).
export default defineConfig({
  site: 'https://guledlabs.com',
  integrations: [sitemap()],
  trailingSlash: 'never',
  build: { format: 'directory' },
});
