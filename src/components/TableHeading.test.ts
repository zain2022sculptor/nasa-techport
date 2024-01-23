import { mount } from '@vue/test-utils'
import TableHeading from './TableHeading.vue'
import { test, expect } from 'vitest'

test('renders a todo', () => {
  const wrapper = mount(TableHeading, {
    props: {
      heading: 'Hello world'
    }
  })

  const todo = wrapper.get('[data-test="heading"]')

  expect(todo.text()).toBe('Hello world')
})
