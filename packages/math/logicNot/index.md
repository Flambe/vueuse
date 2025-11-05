---
category: '@Math'
alias: not
---

# logicNot

`NOT` condition for ref.

## Usage

```ts
import { whenever } from '@velocity1/vueuse-core'
import { logicNot } from '@velocity1/vueuse-math'

const a = ref(true)

whenever(logicNot(a), () => {
  console.log('a is now falsy!')
})
```
