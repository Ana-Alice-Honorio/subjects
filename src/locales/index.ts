import { createI18n } from 'vue-i18n'

const messages = {
  pt: {
    menu: {
      title: 'Estude+',
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
