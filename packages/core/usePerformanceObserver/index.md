---
category: Browser
---

# usePerformanceObserver

Observe performance metrics.

## Usage

```ts
import { usePerformanceObserver } from '@velocity1/vueuse-core'

const entrys = ref<PerformanceEntry[]>([])
usePerformanceObserver({
  entryTypes: ['paint'],
}, (list) => {
  entrys.value = list.getEntries()
})
```
