---
category: Component
---

# tryOnBeforeUnmount

Safe `onBeforeUnmount`. Call `onBeforeUnmount()` if it's inside a component lifecycle, if not, do nothing

## Usage

```ts
import { tryOnBeforeUnmount } from '@velocity1/vueuse-core'

tryOnBeforeUnmount(() => {

})
```
