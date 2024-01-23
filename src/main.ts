import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import { VueQueryPlugin } from '@tanstack/vue-query'
import ToastService from 'primevue/toastservice'

import 'primevue/resources/themes/bootstrap4-dark-purple/theme.css'

const app = createApp(App)

app.use(router)
app.use(PrimeVue)
app.use(VueQueryPlugin)
app.use(ToastService)

app.mount('#app')
