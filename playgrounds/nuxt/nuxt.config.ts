import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  modules: [
    '@velocity1/vueuse-nuxt',
  ],
  alias: {
    '@velocity1/vueuse-core': resolve(__dirname, '../../packages/core/index.ts'),
    '@velocity1/vueuse-shared': resolve(__dirname, '../../packages/shared/index.ts'),
    '@velocity1/vueuse-math': resolve(__dirname, '../../packages/math/index.ts'),
    '@velocity1/vueuse-integrations': resolve(__dirname, '../../packages/integrations/index.ts'),
  },
  vueuse: {
    ssrHandlers: true,
  },
})
