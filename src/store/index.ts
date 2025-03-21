import { defineStore } from 'pinia'
import axios from 'axios'

export interface Content {
  id: string
  title: string
  description: string
}

export interface Module {
  id: string
  name: string
  contents: Content[]
  options: Option[]
}

interface Subject {
  name: string
  modules: Module[]
}

export interface Option {
  id: number
  name: string
  expanded: boolean
  titleOptions: string
  checkList: CheckListItem[]
}

interface CheckListItem {
  id: number
  name: string
  checked: boolean
}

interface State {
  subjects: Record<string, Subject>
}

export const useSubjectStore = defineStore('subjectStore', {
  state: (): State => ({
    subjects: {},
  }),

  actions: {
    async fetchSubjects() {
      try {
        const response = await axios.get('/api/subjects')
        this.subjects = response.data
      } catch (error) {
        console.error('Erro ao buscar matérias:', error)
      }
    },
  },

  getters: {
    getSubject: (state) => (id: string) => state.subjects[id] || null,
  },
})
