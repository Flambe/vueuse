import type { ResizeObserverCallback, UseResizeObserverOptions } from '@velocity1/vueuse-core'
import type { ObjectDirective } from 'vue'
import { useResizeObserver } from '@velocity1/vueuse-core'

type BindingValueFunction = ResizeObserverCallback

type BindingValueArray = [BindingValueFunction, UseResizeObserverOptions]

export const vResizeObserver: ObjectDirective<
  HTMLElement,
  BindingValueFunction | BindingValueArray
> = {
  mounted(el, binding) {
    if (typeof binding.value === 'function')
      useResizeObserver(el, binding.value)
    else
      useResizeObserver(el, ...binding.value)
  },
}
