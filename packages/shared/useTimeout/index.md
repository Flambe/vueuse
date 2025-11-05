---
category: Animation
---

# useTimeout

Update value after a given time with controls.

## Usage

```ts
import { useTimeout } from '@velocity1/vueuse-core'

const ready = useTimeout(1000)
```

```ts
import { useTimeout } from '@velocity1/vueuse-core'
// ---cut---
const { ready, start, stop } = useTimeout(1000, { controls: true })
```

```ts
import { promiseTimeout } from '@velocity1/vueuse-core'

console.log(ready.value) // false

await promiseTimeout(1200)

console.log(ready.value) // true
```
