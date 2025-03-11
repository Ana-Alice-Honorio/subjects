import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axios)

const subjects = {
  math: {
    name: 'Matemática',
    modules: [
      { id: 'algebra', name: 'Álgebra', content: 'Conceitos de equações e expressões.' },
      { id: 'raiz-quadrada', name: 'Raiz Quadrada', content: 'Explicação sobre raízes quadradas.' },
    ],
  },
  portuguese: {
    name: 'Português',
    modules: [
      { id: 'gramatica', name: 'Gramática', content: 'Regras gramaticais e sintaxe.' },
      { id: 'literatura', name: 'Literatura', content: 'Estudos de obras literárias.' },
    ],
  },
  history: {
    name: 'História',
    modules: [
      { id: 'idade-media', name: 'Idade Média', content: 'Estudo sobre a Idade Média.' },
      { id: 'revolucao-francesa', name: 'Revolução Francesa', content: 'Impacto e consequências.' },
    ],
  },
  geography: {
    name: 'Geografia',
    modules: [
      { id: 'climatologia', name: 'Climatologia', content: 'Estudo do clima e tempo.' },
      { id: 'geopolitica', name: 'Geopolítica', content: 'Análises territoriais e políticas.' },
    ],
  },
}

mock.onGet('/api/subjects').reply(200, subjects)

export default mock
