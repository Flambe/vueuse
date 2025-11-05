<script setup lang="ts">
import { useWindowSize } from '@velocity1/vueuse-core'

const { width, height } = useWindowSize()
</script>

<template>
  <p>{{ width }} x {{ height }}</p>
</template>
