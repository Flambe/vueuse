---
category: '@Math'
alias: or
related: logicAnd, logicNot
---

# logicOr

`OR` conditions for refs.

## Usage

```ts
import { whenever } from '@velocity1/vueuse-core'
import { logicOr } from '@velocity1/vueuse-math'

const a = ref(true)
const b = ref(false)

whenever(logicOr(a, b), () => {
  console.log('either a or b is truthy!')
})
```
