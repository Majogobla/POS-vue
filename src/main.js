import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Firebase
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './config/firebase'

// Formkit
import { plugin, defaultConfig } from '@formkit/vue'
import config from '../formkit.config'
 
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Firebase
app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()],
})

// Formkit
app.use(plugin, defaultConfig(config))

app.use(createPinia())
app.use(router)

app.mount('#app')
