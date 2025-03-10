import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Importação do MDI Icons
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
})

//vue i18n
import i18n from './locales'

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.use(createPinia())
app.use(i18n)
app.mount('#app')
