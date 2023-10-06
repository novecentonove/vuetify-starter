
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// see https://theme.oliverrr.net/config
const lightTheme1 = {
  dark: false,
  colors: {
    background: '#F5F5F5',
    surface: '#FFFFFF',
    primary: '#FF9700',
    secondary: '#E6E9FF',
    error: '#FF0000',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
};

const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: "lightTheme1",
      themes: {
        lightTheme1,
      },
    },
  })
  
app.use(createPinia())
app.use(router)
app.use(vuetify)
app.mount('#app')

