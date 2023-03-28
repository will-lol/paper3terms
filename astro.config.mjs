import { defineConfig } from 'astro/config';
import remarkBehead from 'remark-behead';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import solidJs from "@astrojs/solid-js";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), tailwind()],
  markdown: {
    remarkPlugins: [[remarkBehead, {depth: 2}], remarkMath],
    rehypePlugins: [rehypeKatex]
  }
});