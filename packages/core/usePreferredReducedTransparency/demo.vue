<script setup lang="ts">
import { usePreferredReducedTransparency } from '@velocity1/vueuse-core'

const transparency = usePreferredReducedTransparency()
</script>

<template>
  <note class="mb-2">
    Preferred Transparency:
  </note>
  <code>{{ transparency }}</code>
</template>
