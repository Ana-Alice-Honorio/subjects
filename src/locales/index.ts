import { createI18n } from 'vue-i18n'

const messages = {
  pt: {
    menu: {
      title: 'Estude+',
      navbar: {
        math: 'Matemática',
        port: 'Português',
        history: 'História',
        geo: 'Geografia',
      },
    },

    accordion: {
      class: 'Aulas',
      exercises: 'Exercícios',
      materials: 'Materiais',
    },
  },
}

const i18n = createI18n({
  legacy: false,
  locale: 'pt',
  fallbackLocale: 'en',
  messages,
})

export default i18n
