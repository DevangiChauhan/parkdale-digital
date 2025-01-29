import shopify from "vite-plugin-shopify";
import globs from "rollup-plugin-globlin";
import cleanup from '@by-association-only/vite-plugin-shopify-clean';
import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    drop: ["console", "debugger"], 
  },
  build: {
    emptyOutDir: false, 
    outDir: 'dist', 
    sourcemap: false, 
    rollupOptions: {
      output: {
        assetFileNames: '[name]-[hash][extname]', 
      },
    },
  },
  css: {
    devSourcemap: true, 
  },
  plugins: [
    cleanup(), 
    shopify({ versionNumbers: true }), 
    globs.default({
      globs: ["frontend/web/product-card/sections/*.liquid"], 
      dest: "sections", 
      clean: false, 
    }),
    globs.default({
      globs: ["frontend/web/product-card/snippets/*.liquid"], 
      dest: "snippets", 
      clean: false, 
    }),
  ],
});
