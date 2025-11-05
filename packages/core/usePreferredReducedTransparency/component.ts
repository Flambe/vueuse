import { usePreferredReducedTransparency } from '@velocity1/vueuse-core'
import { defineComponent, reactive } from 'vue'

export const UsePreferredReducedTransparency = /* #__PURE__ */ defineComponent({
  name: 'UsePreferredReducedTransparency',
  setup(props, { slots }) {
    const data = reactive({
      transparency: usePreferredReducedTransparency(),
    })

    return () => {
      if (slots.default)
        return slots.default(data)
    }
  },
})
