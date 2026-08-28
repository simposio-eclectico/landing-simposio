import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://simposio-eclectico.github.io/',
  vite: {
    ssr: {
      external: [],
    },
  },
});
