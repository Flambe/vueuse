<script setup lang="ts">
import { usePageLeave } from '@velocity1/vueuse-core'

const isLeft = usePageLeave()
</script>

<template>
  <pre lang="json">{{ { isLeft } }}</pre>
</template>
