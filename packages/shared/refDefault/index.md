---
category: Reactivity
---

# refDefault

Apply default value to a ref.

## Usage

```ts
import { refDefault, useStorage } from '@velocity1/vueuse-core'

const raw = useStorage('key')
const state = refDefault(raw, 'default')

raw.value = 'hello'
console.log(state.value) // hello

raw.value = undefined
console.log(state.value) // default
```
