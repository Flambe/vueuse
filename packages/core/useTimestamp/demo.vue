<script setup lang="ts">
import { useTimestamp } from '@velocity1/vueuse-core'

const timestamp = useTimestamp()
</script>

<template>
  <div>Timestamp: {{ timestamp }}</div>
</template>
