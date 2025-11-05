<script setup lang="ts">
import { useMounted } from '@velocity1/vueuse-core'

const isMounted = useMounted()
</script>

<template>
  <div>{{ isMounted ? 'mounted' : 'unmounted' }}</div>
</template>
