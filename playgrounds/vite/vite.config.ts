import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig(({ command }) => ({
  plugins: [
    Vue(),
  ],
  resolve: command === 'build'
    ? {}
    : {
        alias: {
          '@velocity1/vueuse-core': resolve(__dirname, '../../packages/core/index.ts'),
          '@velocity1/vueuse-shared': resolve(__dirname, '../../packages/shared/index.ts'),
        },
      },
  build: {
    minify: false,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('@velocity1/vueuse-'))
            return 'vueuse'
          else
            return 'vendor'
        },
      },
    },
  },
}))
