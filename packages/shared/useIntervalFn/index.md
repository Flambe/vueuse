---
category: Animation
---

# useIntervalFn

Wrapper for `setInterval` with controls

## Usage

```ts
import { useIntervalFn } from '@velocity1/vueuse-core'

const { pause, resume, isActive } = useIntervalFn(() => {
  /* your function */
}, 1000)
```
