---
category: Reactivity
---

# reactifyObject

Apply `reactify` to an object

## Usage

```ts
import { reactifyObject } from '@velocity1/vueuse-core'

const reactifiedConsole = reactifyObject(console)

const a = ref('42')

reactifiedConsole.log(a) // no longer need `.value`
```
