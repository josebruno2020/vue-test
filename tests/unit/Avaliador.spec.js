import Avaliador from '../../src/views/Avaliador'
import { mount, RouterLinkStub } from '@vue/test-utils'
import { getLeiloes, getLances } from '@/http'
import flushPromises from 'flush-promises'
jest.mock('@/http')
const leiloes = [
  {
    produto: 'Um livro',
    lanceInicial: 1040,
    descricao: 'Um livro antigo'
  },
  {
    produto: 'Segundo produto de teste',
    lanceInicial: 2050,
    descricao: 'Descricao 2 de teste'
  }
]

describe('Um avaliador que se conecta com a API', () => {
  test('Mostrar todos os leilões retornados pela API', async () => {
    getLeiloes.mockResolvedValueOnce(leiloes)
    const wrapper = mount(Avaliador, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    await flushPromises()

    const totalLeiloes = wrapper.findAll('.leilao').length
    expect(totalLeiloes).toBe(leiloes.length)
  })
  test('Não há leilões retornados pela API', async () => {
    getLeiloes.mockResolvedValueOnce([])
    const wrapper = mount(Avaliador, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    await flushPromises()

    const totalLeiloes = wrapper.findAll('.leilao').length
    expect(totalLeiloes).toBe(0)
  })
})
