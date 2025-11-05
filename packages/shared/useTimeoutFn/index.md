---
category: Animation
---

# useTimeoutFn

Wrapper for `setTimeout` with controls.

## Usage

```ts
import { useTimeoutFn } from '@velocity1/vueuse-core'

const { isPending, start, stop } = useTimeoutFn(() => {
  /* ... */
}, 3000)
```
