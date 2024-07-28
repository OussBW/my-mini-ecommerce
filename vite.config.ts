import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// auto-import for primevue
import Components from "unplugin-vue-components/vite";
import {PrimeVueResolver} from '@primevue/auto-import-resolver';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/my-mini-ecommerce",
  plugins: [
    vue(),
    Components({
      resolvers: [PrimeVueResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
