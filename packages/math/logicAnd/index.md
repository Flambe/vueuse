---
category: '@Math'
alias: and
related: logicNot, logicOr
---

# logicAnd

`AND` condition for refs.

## Usage

```ts
import { whenever } from '@velocity1/vueuse-core'
import { logicAnd } from '@velocity1/vueuse-math'

const a = ref(true)
const b = ref(false)

whenever(logicAnd(a, b), () => {
  console.log('both a and b are now truthy!')
})
```
