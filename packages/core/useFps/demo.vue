<script setup lang="ts">
import { useFps } from '@velocity1/vueuse-core'

const fps = useFps()
</script>

<template>
  FPS: {{ fps }}
</template>
