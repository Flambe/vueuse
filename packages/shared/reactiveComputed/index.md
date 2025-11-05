---
category: Reactivity
---

# reactiveComputed

Computed reactive object. Instead of returning a ref that `computed` does, `reactiveComputed` returns a reactive object.

## Usage

```ts
import { reactiveComputed } from '@velocity1/vueuse-core'

const state = reactiveComputed(() => {
  return {
    foo: 'bar',
    bar: 'baz',
  }
})

state.bar // 'baz'
```
