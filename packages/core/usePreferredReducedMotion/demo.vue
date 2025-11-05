<script setup lang="ts">
import { usePreferredReducedMotion } from '@velocity1/vueuse-core'

const motion = usePreferredReducedMotion()
</script>

<template>
  <note class="mb-2">
    Preferred Motion:
  </note>
  <code>{{ motion }}</code>
</template>
