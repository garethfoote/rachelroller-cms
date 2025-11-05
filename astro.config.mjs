// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import decapCmsOauth from 'astro-decap-cms-oauth';
import netlify from '@astrojs/netlify';
import remarkBreaks from 'remark-breaks';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [decapCmsOauth()],
  adapter: netlify(),
    markdown: {
    remarkPlugins: [remarkBreaks], // converts single \n to <br>
  },
});

