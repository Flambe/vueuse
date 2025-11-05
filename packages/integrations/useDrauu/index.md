---
category: '@Integrations'
---

# useDrauu

Reactive instance for [drauu](https://github.com/antfu/drauu).

## Install

```bash
npm i drauu@^0
```

## Usage

```vue
<script setup lang="ts">
import { toRefs } from '@velocity1/vueuse-core'
import { useDrauu } from '@velocity1/vueuse-integrations/useDrauu'
import { useTemplateRef } from 'vue'

const target = useTemplateRef<SVGSVGElement>('target')
const { undo, redo, canUndo, canRedo, brush } = useDrauu(target)
const { color, size } = toRefs(brush)
</script>

<template>
  <svg ref="target" />
</template>
```
