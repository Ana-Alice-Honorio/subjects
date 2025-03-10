import { defineStore } from 'pinia'

interface Module {
  id: string
  name: string
  content: string
}

interface Subject {
  name: string
  modules: Module[]
}

interface State {
  subjects: Record<string, Subject>
}

export const useSubjectStore = defineStore('subjectStore', {
  state: (): State => ({
    subjects: {
      math: {
        name: 'Matemática',
        modules: [
          { id: 'algebra', name: 'Álgebra', content: 'Conceitos de equações e expressões.' },
          {
            id: 'raiz-quadrada',
            name: 'Raiz Quadrada',
            content: 'Explicação sobre raízes quadradas.',
          },
        ],
      },
    },
  }),

  getters: {
    getSubject: (state) => (id: string) => state.subjects[id],
  },
})
