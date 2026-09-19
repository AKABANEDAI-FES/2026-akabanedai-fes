import { describe, expect, it } from 'vite-plus/test'

import { cn } from './cn'

describe('cn', () => {
  it('joins strings with a space', () => {
    expect(cn('a', 'b', 'c')).toBe('a b c')
  })

  it('skips falsy values', () => {
    expect(cn('a', false, null, undefined, '', 'b')).toBe('a b')
  })

  it('accepts conditional values', () => {
    const isActive = true
    expect(cn('card', isActive && 'active')).toBe('card active')
    expect(cn('card', !isActive && 'active')).toBe('card')
  })

  it('returns an empty string with no arguments', () => {
    expect(cn()).toBe('')
  })

  it('returns an empty string when all values are falsy', () => {
    expect(cn(undefined, false)).toBe('')
  })
})
