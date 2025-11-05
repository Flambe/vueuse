<script setup lang="ts">
import { useTitle } from '@velocity1/vueuse-core'

const title = useTitle(null)
</script>

<template>
  <note>Title</note>
  <input v-model="title" type="text">
</template>
