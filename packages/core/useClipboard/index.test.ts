import { useClipboard } from '@velocity1/vueuse-core'
import { describe, expect, it } from 'vitest'

describe('useClipboard', () => {
  it('should be defined', () => {
    expect(useClipboard).toBeDefined()
  })
})
