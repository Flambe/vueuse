---
category: Utilities
---

# usePrevious

Holds the previous value of a ref.

## Usage

```ts
import { usePrevious } from '@velocity1/vueuse-core'
import { shallowRef } from 'vue'

const counter = shallowRef('Hello')
const previous = usePrevious(counter)

console.log(previous.value) // undefined

counter.value = 'World'

console.log(previous.value) // Hello
```
