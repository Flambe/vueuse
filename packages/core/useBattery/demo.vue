<script setup lang="ts">
import { reactify, useBattery } from '@velocity1/vueuse-core'
import { reactive } from 'vue'
import YAML from 'yaml'

const stringify = reactify(
  (input: any) => YAML.stringify(input, (k, v) => {
    if (typeof v === 'function') {
      return undefined
    }
    return v
  }, {
    singleQuote: true,
    flowCollectionPadding: false,
  }),
)

const battery = reactive(useBattery())
const text = stringify(battery)
</script>

<template>
  <pre lang="yaml">{{ text }}</pre>
</template>
