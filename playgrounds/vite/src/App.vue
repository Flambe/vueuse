<script setup lang="ts">
import { useMouse } from '@velocity1/vueuse-core'

const { x, y } = useMouse()
</script>

<template>
  <div>{{ x }}, {{ y }}</div>
</template>
