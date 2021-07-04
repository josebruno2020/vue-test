import NovoLeilao from '../../src/views/NovoLeilao'
import { mount } from '@vue/test-utils'
import { createLeilao } from '@/http'

jest.mock('@/http')

const $router = {
  push: jest.fn()
}

describe('Um novo Leilao deve ser criados', () => {
  test('Dado o formulario preenchido, um novo leilão deve ser criados', async () => {
    createLeilao.mockResolvedValueOnce()
    const wrapper = mount(NovoLeilao, {
      mocks: {
        $router
      }
    })
    wrapper.find('.produto').setValue('Produto de Teste')
    wrapper.find('.descricao').setValue('Descricao de Teste')
    wrapper.find('.valor').setValue(50)

    wrapper.find('form').trigger('submit')

    expect(createLeilao).toHaveBeenCalled()

  })
})