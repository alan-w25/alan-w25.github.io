import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  site: 'https://alan-w25.github.io',
  integrations: [
    mdx(),
    tailwind({ applyBaseStyles: false }),
  ],
  output: 'static',
  adapter: vercel(),
});
