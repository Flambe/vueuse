<script setup lang="ts">
import { useNow } from '@velocity1/vueuse-core'

const now = useNow()
</script>

<template>
  <div>Now: {{ now }}</div>
</template>
