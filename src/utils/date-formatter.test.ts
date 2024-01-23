import { expect, test } from 'vitest'
import { formatDate } from './date-formatter'

test('formate the date', () => {
  expect(formatDate(new Date('2024-01-23'))).toBe('2024-01-23')
})
