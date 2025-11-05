---
category: Sensors
---

# useElementByPoint

Reactive element by point.

## Usage

```ts
import { useElementByPoint, useMouse } from '@velocity1/vueuse-core'

const { x, y } = useMouse({ type: 'client' })
const { element } = useElementByPoint({ x, y })
```
