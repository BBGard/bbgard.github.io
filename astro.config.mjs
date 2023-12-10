import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://bbgard.github.io',
  integrations: []
});

// OLD
// import { defineConfig } from 'astro/config';
// import react from "@astrojs/react";
// import tailwind from "@astrojs/tailwind";

// export default defineConfig({
//   site: 'https://bbgard.github.io',
//   integrations: [react(), tailwind()]
// });
