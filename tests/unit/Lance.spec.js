import Lance from '@/components/Lance'
import { mount } from '@vue/test-utils'

test('não aceita valor negativo', () => {
  const wrapper = mount(Lance)
  const input = wrapper.find('input')
  input.setValue(-199)
  wrapper.trigger('submit')
  const lancesEmitidos = wrapper.emitted('novo-lance')
  expect(lancesEmitidos).toBeUndefined()
})

test('emite o evento quando o valor é positivo', () => {
  const wrapper = mount(Lance)
  const input = wrapper.find('input')
  input.setValue(100)
  wrapper.trigger('submit')
  const lancesEmitidos = wrapper.emitted('novo-lance')
  expect(lancesEmitidos).toHaveLength(1)
})

test('emite o valor esperado de um lance valido', () => {
  const wrapper = mount(Lance)
  const input = wrapper.find('input')
  input.setValue(100)
  wrapper.trigger('submit')
  const lancesEmitidos = wrapper.emitted('novo-lance')
  const lance = parseInt(lancesEmitidos[0][0])
  expect(lance).toBe(100)
})
