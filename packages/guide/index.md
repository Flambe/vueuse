# Get Started

<CourseLink href="https://vueschool.io/courses/vueuse-for-everyone?friend=vueuse">Learn VueUse with video</CourseLink>

VueUse is a collection of utility functions based on [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html). We assume you are already familiar with the basic ideas of [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html) before you continue.

## Installation

> From v12.0, VueUse no longer supports Vue 2. Please use v11.x for Vue 2 support.

```bash
npm i @velocity1/vueuse-core
```

[Add ons](/add-ons.html) | [Nuxt Module](/guide/index.html#nuxt)

###### Demos

- [Vite + Vue 3](https://github.com/vueuse/vueuse-vite-starter)
- [Nuxt 3 + Vue 3](https://github.com/antfu/vitesse-nuxt3)
- [Webpack + Vue 3](https://github.com/vueuse/vueuse-vue3-example)

### CDN

```vue
<script src="https://unpkg.com/@velocity1/vueuse-shared"></script>

<script src="https://unpkg.com/@velocity1/vueuse-core"></script>
```

It will be exposed to global as `window.VueUse`

### Nuxt

From v7.2.0, we shipped a Nuxt module to enable auto importing for Nuxt 3 and Nuxt Bridge.

Install the vueuse module into your application using [@nuxt/cli](https://nuxt.com/docs/api/commands/module):

```bash
npx nuxt@latest module add vueuse
```

Or use npm:

```bash
npm i -D @velocity1/vueuse-nuxt @velocity1/vueuse-core
```

Nuxt 3

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@velocity1/vueuse-nuxt',
  ],
})
```

And then use VueUse function anywhere in your Nuxt app. For example:

```vue twoslash
<script setup lang="ts">
// ---cut-start---
// Actually auto-imported, but here we need to tell TwoSlash about it
import { useMouse } from '@velocity1/vueuse-core'
// ---cut-end---
const { x, y } = useMouse()
</script>

<template>
  <div>pos: {{ x }}, {{ y }}</div>
</template>
```

## Usage Example

Simply importing the functions you need from `@velocity1/vueuse-core`

```vue twoslash
<script setup>
import { useLocalStorage, useMouse, usePreferredDark } from '@velocity1/vueuse-core'

// tracks mouse position
const { x, y } = useMouse()

// is user prefers dark theme
const isDark = usePreferredDark()

// persist state in localStorage
const store = useLocalStorage(
  'my-storage',
  {
    name: 'Apple',
    color: 'red',
  },
)
</script>
```

Refer to [functions list](/functions) for more details.
