---
category: Utilities
---

# set

Shorthand for `ref.value = x`

## Usage

```ts
import { set } from '@velocity1/vueuse-core'

const a = ref(0)

set(a, 1)

console.log(a.value) // 1
```
