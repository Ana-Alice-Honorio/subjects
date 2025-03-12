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
        contents: [
          {
            id: '1',
            title: 'Conceitos de Equações e Expressões',
            description: 'Explicação detalhada sobre equações e expressões.',
          },
          {
            id: '2',
            title: 'História da Álgebra',
            description: 'A origem e evolução da álgebra ao longo do tempo.',
          },
          {
            id: '3',
            title: 'Fórmulas da Álgebra',
            description: 'Explicação das principais fórmulas da álgebra.',
          },
        ],
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
        contents: [
          {
            id: '1',
            title: 'Explicação sobre raízes quadradas.',
            description: 'Explicação detalhada sobre raiz quadrada.',
          },
          {
            id: '2',
            title: 'Quando surgiu as raízes quadradas.',
            description:
              'O símbolo da raiz quadrada foi impresso pela primeira vez em 1525, no livro Die Coss, do matemático alemão Christoff Rudolff. ',
          },
        ],
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
              { id: 203, name: 'Exercício 3' },
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
        contents: [
          {
            id: '1',
            title: 'Regras gramaticais e sintaxe.',
            description:
              'Podemos considerar a Gramática como sendo o conjunto das regras que determinam as diferentes possibilidades de associação das palavras de uma língua para a formação de enunciados concretos. A Sintaxe própria de cada língua impede que sejam realizadas combinações aleatórias entre as palavras',
          },
          {
            id: '2',
            title: 'Tipo Normativa',
            description:
              'A gramática normativa é a que mais se associa com a linguagem culta e formal. No Enem, por exemplo, é necessário que os participantes escrevam suas redações “em norma-padrão da Língua Portuguesa”, ou seja, que seus textos estejam alinhados com as regras gramaticais. ',
          },
          {
            id: '3',
            title: 'Tipo Descritiva',
            description:
              'A gramática descritiva, por sua vez, tem um foco maior nas características das linguagens. Nesse caso, a preocupação maior não está centrada nas regras de certo ou errado, mas são observadas as particularidades de cada língua, com suas variações, coloquialidades e usos cotidianos',
          },
          {
            id: '4',
            title: 'Tipo Comparativa',
            description:
              'A gramática comparativa tem busca a origem de uma linguagem e observa todas as outras línguas que partem do mesmo tronco linguístico. Nesse ponto, são relacionadas as regras e composições que se diferem ou se assemelham — é literalmente uma comparação entre o desenvolvimento de diferentes linguagens.',
          },
        ],
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
        contents: [
          {
            id: '1',
            title: 'Estudos de obras literárias.',
            description:
              'Estudos de obras literárias envolvem a análise e interpretação de textos literários, considerando o contexto da obra, o estilo do autor e a relação com o leitor. ',
          },
          {
            id: '2',
            title: 'Literatura de cordel',
            description:
              'A literatura de cordel é um gênero literário popular que se caracteriza por versos rimados e histórias folclóricas. É também conhecida como folheto, literatura popular em verso ou simplesmente cordel.',
          },
        ],
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
        contents: [
          {
            id: '1',
            title: 'Estudo sobre a Idade Média.',
            description:
              'A Idade Média foi um período da história que durou cerca de mil anos, do século V ao século XV. Começou com a queda do Império Romano do Ocidente e terminou com a tomada de Constantinopla pelos turcos-otomanos.',
          },
          {
            id: '2',
            title: 'Quanto tempo durou a idade média',
            description:
              'A Idade Média durou cerca de 1000 anos, de 476 a 1453. Este período da história europeia pode ser dividido em Alta e Baixa Idade Média',
          },
          {
            id: '3',
            title: 'Curiosidades sobre a Idade Média.',
            description:
              'A sociedade medieval era estamental, ou seja, não havia possibilidade de ascensão social. Os servos trabalhavam na terra para sustentar a si próprios, sua família e o seu senhor. A cultura da Alta Idade Média estava concentrada nos mosteiros. Os monges copistas tinham a missão de copiar os textos antigos para que não se perdessem com o tempo',
          },
        ],
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
        contents: [
          {
            id: '1',
            title: 'Impacto e consequências.',
            description:
              'A Revolução Francesa teve um grande impacto na França e no mundo, marcando a política, a sociedade e a economia. ',
          },
          {
            id: '2',
            title: 'Consequências políticas ',
            description:
              'Consequências políticas Fim do absolutismo francês, Separação entre os poderes do Estado, Popularização da república, Imposição das liberdades individuais, Universalização dos direitos sociais e das liberdades individuais.',
          },
          {
            id: '3',
            title: 'Consequências sociais',
            description:
              'Consequências sociais Fim dos privilégios da aristocracia, Libertação dos camponeses do clero e da nobreza, Ampliação dos direitos e privilégios da burguesia, Fortalecimento do capitalismo',
          },
          {
            id: '4',
            title: 'Consequências econômicas',
            description:
              'Consequências econômicas Início da consolidação do capitalismo, Ampliação dos comércios burgueses, Fim dos impedimentos aos negócios burgueses.',
          },
        ],
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
        contents: [
          {
            id: '1',
            title: 'Estudo do clima e tempo.',
            description: 'Estuda os fenômenos atmosféricos, como a temperatura, o vento e a chuva',
          },
          {
            id: '',
            title: 'Metereologia',
            description:
              'Meteorologia é a ciência que estuda a atmosfera e os fenômenos que nela ocorrem. A palavra meteorologia vem do grego meteoron, que significa "qualquer fenômeno no céu',
          },
        ],
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
        contents: [
          {
            id: '1',
            title: 'Análises territoriais e políticas.',
            description:
              'Análises territoriais e políticas são estudos que relacionam o território com as políticas públicas e de desenvolvimento.',
          },
          {
            id: '2',
            title: 'O que são análises de políticas públicas?.',
            description:
              'A análise de políticas públicas é um processo fundamental para empresas que desejam se relacionar com o poder público. Compreender e influenciar políticas públicas pode proporcionar vantagens estratégicas e competitivas. No entanto, muitos profissionais encontram desafios ao iniciar esse tipo de análise.',
          },
        ],
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
