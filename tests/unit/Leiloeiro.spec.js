import Leiloeiro from '../../src/views/Leiloeiro'
import { mount } from '@vue/test-utils'
import { getLeilao, getLances } from '@/http'
import flushPromises from 'flush-promises'

jest.mock('@/http')
const leilao = {
  produto: 'Livro da Casa do codigo',
  lanceInicial: 50,
  descricao: 'Livro bem bacana'
}

const lances = [
  {
    id: 1,
    valor: 1001,
    data: '2020-06-01',
    leilao_id: 1
  },
  {
    id: 2,
    valor: 200,
    data: '2020-06-01',
    leilao_id: 1
  },
  {
    id: 3,
    valor: 252,
    data: '2020-06-01',
    leilao_id: 1
  }
]

describe('Leiloeiro inicia um leilão que não possui lances', () => {
  test('Avisa quando não existem lances', async () => {
    getLeilao.mockResolvedValueOnce(leilao)
    getLances.mockResolvedValue([])

    const wrapper = mount(Leiloeiro, {
      propsData: {
        id: 1
      }
    })

    await flushPromises()

    const alerta = wrapper.find('.alert-dark')

    expect(alerta.exists()).toBe(true)
  })
})

describe('Um leiloeiro comunica os valores de menor e maior lance', () => {
  test('Mostra o maior lance do leilão', async () => {
    getLeilao.mockResolvedValueOnce(leilao)
    getLances.mockResolvedValue(lances)

    const wrapper = mount(Leiloeiro, {
      propsData: {
        id: 1
      }
    })

    await flushPromises()
    const maiorLance = wrapper.find('.maior-lance')
    expect(maiorLance.element.textContent).toContain('Maior lance: R$ 1001')
  })
  test('Mostra o menor lance do leilão', async () => {
    getLeilao.mockResolvedValueOnce(leilao)
    getLances.mockResolvedValue(lances)

    const wrapper = mount(Leiloeiro, {
      propsData: {
        id: 1
      }
    })

    await flushPromises()
    const menorLance = wrapper.find('.menor-lance')
    expect(menorLance.element.textContent).toContain('Menor lance: R$ 200')
  })
})

describe('Um leiloeiro exibe os lances existentes', () => {
  test('Não mostra o aviso de "sem lances"', async () => {
    getLeilao.mockResolvedValueOnce(leilao)
    getLances.mockResolvedValue(lances)

    const wrapper = mount(Leiloeiro, {
      propsData: {
        id: 1
      }
    })

    await flushPromises()
    const alerta = wrapper.find('.alert-dark')
    expect(alerta.exists()).toBe(false)
  })
  test('Possui uma lista de lances', async () => {
    getLeilao.mockResolvedValueOnce(leilao)
    getLances.mockResolvedValue(lances)

    const wrapper = mount(Leiloeiro, {
      propsData: {
        id: 1
      }
    })

    await flushPromises()
    const lista = wrapper.find('.list-inline')
    expect(lista.exists()).toBe(true)
  })
})