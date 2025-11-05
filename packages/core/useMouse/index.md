---
category: Sensors
---

# useMouse

Reactive mouse position

## Basic Usage

```ts twoslash
import { useMouse } from '@velocity1/vueuse-core'

const { x, y, sourceType } = useMouse()
```

Touch is enabled by default. To only detect mouse changes, set `touch` to `false`.
The `dragover` event is used to track mouse position while dragging.

```ts twoslash
import { useMouse } from '@velocity1/vueuse-core'
// ---cut---
const { x, y } = useMouse({ touch: false })
```

## Custom Extractor

It's also possible to provide a custom extractor function to get the position from the event.

```ts twoslash
import type { UseMouseEventExtractor } from '@velocity1/vueuse-core'
import { useMouse, useParentElement } from '@velocity1/vueuse-core'

const parentEl = useParentElement()

const extractor: UseMouseEventExtractor = event => (
  event instanceof MouseEvent
    ? [event.offsetX, event.offsetY]
    : null
)

const { x, y, sourceType } = useMouse({ target: parentEl, type: extractor })
```

## Component Usage

```vue
<template>
  <UseMouse v-slot="{ x, y }">
    x: {{ x }}
    y: {{ y }}
  </UseMouse>
</template>
```
