---
category: Reactivity
---

# refManualReset

Create a ref with manual reset functionality.

## Usage

```ts
import { refManualReset } from '@velocity1/vueuse-core'

const message = refManualReset('default message')

message.value = 'message has set'

message.reset()

console.log(message.value) // 'default message'
```
