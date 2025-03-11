import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axios)

const subjects = {
  math: {
    name: 'Matemática',
    modules: [
      {
        id: 'algebra',
        name: 'Álgebra',
        content: 'Conceitos de equações e expressões.',
        options: [
          {
            id: 1,
            name: 'Aulas',
            expanded: false,
            titleOptions: 'Teoria e questões comentadas',
            checkList: [
              { id: 101, name: 'Aula 1' },
              { id: 102, name: 'Aula 2' },
            ],
          },
          {
            id: 2,
            name: 'Exercícios',
            expanded: false,
            titleOptions: 'Fixação de conteúdo',
            checkList: [
              { id: 201, name: 'Exercício 1' },
              { id: 202, name: 'Exercício 2' },
            ],
          },
          {
            id: 3,
            name: 'Materiais',
            expanded: false,
            titleOptions: 'Apostilas',
            checkList: [{ id: 301, name: 'Material PDF' }],
          },
        ],
      },
      {
        id: 'raiz-quadrada',
        name: 'Raiz Quadrada',
        content: 'Explicação sobre raízes quadradas.',
        options: [
          {
            id: 1,
            name: 'Aulas',
            expanded: false,
            titleOptions: 'Teoria e questões comentadas',
            checkList: [
              { id: 101, name: 'Aula 1' },
              { id: 102, name: 'Aula 2' },
            ],
          },
          {
            id: 2,
            name: 'Exercícios',
            expanded: false,
            titleOptions: 'Fixação de conteúdo',
            checkList: [
              { id: 201, name: 'Exercício 1' },
              { id: 202, name: 'Exercício 2' },
            ],
          },
          {
            id: 3,
            name: 'Materiais',
            expanded: false,
            titleOptions: 'Apostilas',
            checkList: [{ id: 301, name: 'Material PDF' }],
          },
        ],
      },
    ],
  },
  portuguese: {
    name: 'Português',
    modules: [
      {
        id: 'gramatica',
        name: 'Gramática',
        content: 'Regras gramaticais e sintaxe.',
        options: [
          {
            id: 1,
            name: 'Aulas',
            expanded: false,
            titleOptions: 'Teoria e questões comentadas',
            checkList: [
              { id: 101, name: 'Aula 1' },
              { id: 102, name: 'Aula 2' },
            ],
          },
          {
            id: 2,
            name: 'Exercícios',
            expanded: false,
            titleOptions: 'Fixação de conteúdo',
            checkList: [
              { id: 201, name: 'Exercício 1' },
              { id: 202, name: 'Exercício 2' },
            ],
          },
          {
            id: 3,
            name: 'Materiais',
            expanded: false,
            titleOptions: 'Apostilas',
            checkList: [{ id: 301, name: 'Material PDF' }],
          },
        ],
      },
      {
        id: 'literatura',
        name: 'Literatura',
        content: 'Estudos de obras literárias.',
        options: [
          {
            id: 1,
            name: 'Aulas',
            expanded: false,
            titleOptions: 'Teoria e questões comentadas',
            checkList: [
              { id: 101, name: 'Aula 1' },
              { id: 102, name: 'Aula 2' },
            ],
          },
          {
            id: 2,
            name: 'Exercícios',
            expanded: false,
            titleOptions: 'Fixação de conteúdo',
            checkList: [
              { id: 201, name: 'Exercício 1' },
              { id: 202, name: 'Exercício 2' },
            ],
          },
          {
            id: 3,
            name: 'Materiais',
            expanded: false,
            titleOptions: 'Apostilas',
            checkList: [{ id: 301, name: 'Material PDF' }],
          },
        ],
      },
    ],
  },
  history: {
    name: 'História',
    modules: [
      {
        id: 'idade-media',
        name: 'Idade Média',
        content: 'Estudo sobre a Idade Média.',
        options: [
          {
            id: 1,
            name: 'Aulas',
            expanded: false,
            titleOptions: 'Teoria e questões comentadas',
            checkList: [
              { id: 101, name: 'Aula 1' },
              { id: 102, name: 'Aula 2' },
            ],
          },
          {
            id: 2,
            name: 'Exercícios',
            expanded: false,
            titleOptions: 'Fixação de conteúdo',
            checkList: [
              { id: 201, name: 'Exercício 1' },
              { id: 202, name: 'Exercício 2' },
            ],
          },
          {
            id: 3,
            name: 'Materiais',
            expanded: false,
            titleOptions: 'Apostilas',
            checkList: [{ id: 301, name: 'Material PDF' }],
          },
        ],
      },
      {
        id: 'revolucao-francesa',
        name: 'Revolução Francesa',
        content: 'Impacto e consequências.',
        options: [
          {
            id: 1,
            name: 'Aulas',
            expanded: false,
            titleOptions: 'Teoria e questões comentadas',
            checkList: [
              { id: 101, name: 'Aula 1', checked: false },
              { id: 102, name: 'Aula 2', checked: false },
            ],
          },
          {
            id: 2,
            name: 'Exercícios',
            expanded: false,
            titleOptions: 'Fixação de conteúdo',
            checkList: [
              { id: 201, name: 'Exercício 1', checked: false },
              { id: 202, name: 'Exercício 2', checked: false },
            ],
          },
          {
            id: 3,
            name: 'Materiais',
            expanded: false,
            titleOptions: 'Apostilas',
            checkList: [{ id: 301, name: 'Material PDF', checked: false }],
          },
        ],
      },
    ],
  },
  geography: {
    name: 'Geografia',
    modules: [
      {
        id: 'climatologia',
        name: 'Climatologia',
        content: 'Estudo do clima e tempo.',
        options: [
          {
            id: 1,
            name: 'Aulas',
            expanded: false,
            titleOptions: 'Teoria e questões comentadas',
            checkList: [
              { id: 101, name: 'Aula 1' },
              { id: 102, name: 'Aula 2' },
            ],
          },
          {
            id: 2,
            name: 'Exercícios',
            expanded: false,
            titleOptions: 'Fixação de conteúdo',
            checkList: [
              { id: 201, name: 'Exercício 1' },
              { id: 202, name: 'Exercício 2' },
            ],
          },
          {
            id: 3,
            name: 'Materiais',
            expanded: false,
            titleOptions: 'Apostilas',
            checkList: [{ id: 301, name: 'Material PDF' }],
          },
        ],
      },
      {
        id: 'geopolitica',
        name: 'Geopolítica',
        content: 'Análises territoriais e políticas.',
        options: [
          {
            id: 1,
            name: 'Aulas',
            expanded: false,
            titleOptions: 'Teoria e questões comentadas',
            checkList: [
              { id: 101, name: 'Aula 1' },
              { id: 102, name: 'Aula 2' },
            ],
          },
          {
            id: 2,
            name: 'Exercícios',
            expanded: false,
            titleOptions: 'Fixação de conteúdo',
            checkList: [
              { id: 201, name: 'Exercício 1' },
              { id: 202, name: 'Exercício 2' },
            ],
          },
          {
            id: 3,
            name: 'Materiais',
            expanded: false,
            titleOptions: 'Apostilas',
            checkList: [{ id: 301, name: 'Material PDF' }],
          },
        ],
      },
    ],
  },
}

mock.onGet('/api/subjects').reply(200, subjects)

export default mock
