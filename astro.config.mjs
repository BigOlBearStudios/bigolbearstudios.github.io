// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Org/user Pages site, served from the domain root (no `base` needed).
  // If you move to a custom domain later, change `site` and add public/CNAME.
  site: 'https://bigolbearstudios.github.io',
  server: { host: true, port: 4321 },
});
