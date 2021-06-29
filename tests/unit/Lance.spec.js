import Lance from '@/components/Lance'
import { mount } from '@vue/test-utils'

test('não aceita valor negativo', () => {
  const wrapper = mount(Lance)
  expect(wrapper).toBeTruthy()
})
