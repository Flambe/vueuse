---
category: Watch
alias: debouncedWatch
---

# watchDebounced

Debounced watch

## Usage

Similar to `watch`, but offering extra options `debounce` and `maxWait` which will be applied to the callback function.

```ts
import { watchDebounced } from '@velocity1/vueuse-core'

watchDebounced(
  source,
  () => { console.log('changed!') },
  { debounce: 500, maxWait: 1000 },
)
```

It's essentially a shorthand for the following code:

```ts
import { debounceFilter, watchWithFilter } from '@velocity1/vueuse-core'

watchWithFilter(
  source,
  () => { console.log('changed!') },
  {
    eventFilter: debounceFilter(500, { maxWait: 1000 }),
  },
)
```
