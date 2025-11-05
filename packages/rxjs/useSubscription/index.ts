import type { Unsubscribable } from 'rxjs'
import { tryOnScopeDispose } from '@velocity1/vueuse-shared'

export function useSubscription(
  subscription: Unsubscribable,
) {
  tryOnScopeDispose(() => {
    subscription.unsubscribe()
  })
}
