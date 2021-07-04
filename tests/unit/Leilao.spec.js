import Leilao from '../../src/components/Leilao'
import { mount } from '@vue/test-utils'

const leilao = {
  produto: 'Um livro',
  lanceInicial: 49,
  descricao: 'Um maravilhoso livro sobre Vue'
}

describe('Um leilao exibe os dados do produto', () => {
  test('Exibe os dados do Leilao no Card', () => {
    const wrapper = mount(Leilao, {
      propsData: {
        leilao
      }
    })

    const header = wrapper.find('.card-header').element.textContent
    const title = wrapper.find('.card-title').element.textContent
    const text = wrapper.find('.card-text').element.textContent
    expect(header).toContain(`Estamos leiloando um(a): ${leilao.produto}`)
    expect(title).toContain(`Lance inicial: R$ ${leilao.lanceInicial}`)
    expect(text).toContain(`${leilao.descricao}`)
  })
})