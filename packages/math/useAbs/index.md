---
category: '@Math'
---

# useAbs

Reactive `Math.abs`.

## Usage

```ts
import { useAbs } from '@velocity1/vueuse-math'

const value = ref(-23)
const absValue = useAbs(value) // Ref<23>
```
