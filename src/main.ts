import './assets/main.css'

import Tres from '@tresjs/core'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

export const app = createApp(App)

app.use(Tres)
app.use(createPinia())
app.use(router)
app.mount('#app')
