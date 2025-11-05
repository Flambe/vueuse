import type { UseIntersectionObserverOptions } from '@velocity1/vueuse-core'
import type { ObjectDirective } from 'vue'
import { useIntersectionObserver } from '@velocity1/vueuse-core'

type BindingValueFunction = IntersectionObserverCallback

type BindingValueArray = [BindingValueFunction, UseIntersectionObserverOptions]

export const vIntersectionObserver: ObjectDirective<
  HTMLElement,
BindingValueFunction | BindingValueArray
> = {
  mounted(el, binding) {
    if (typeof binding.value === 'function')
      useIntersectionObserver(el, binding.value)
    else
      useIntersectionObserver(el, ...binding.value)
  },
}
