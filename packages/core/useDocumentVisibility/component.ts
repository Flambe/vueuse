import type { ConfigurableDocument, UseDocumentVisibilityReturn } from '@velocity1/vueuse-core'
import type { Reactive, SlotsType } from 'vue'
import { useDocumentVisibility } from '@velocity1/vueuse-core'
import { defineComponent, reactive } from 'vue'

export interface UseDocumentVisibilityProps extends ConfigurableDocument {}
interface UseDocumentVisibilitySlots {
  default: (data: Reactive<{
    visibility: UseDocumentVisibilityReturn
  }>) => any
}

export const UseDocumentVisibility = /* #__PURE__ */ defineComponent<
  UseDocumentVisibilityProps,
  Record<string, never>,
  string,
  SlotsType<UseDocumentVisibilitySlots>
>(
  (props, { slots }) => {
    const data = reactive({
      visibility: useDocumentVisibility(props),
    })

    return () => {
      if (slots.default)
        return slots.default(data)
    }
  },
  {
    name: 'UseDocumentVisibility',
    props: ['document'],
  },
)
