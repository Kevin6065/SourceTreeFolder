import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import AlertBox from './components/AlertBox.vue'

const app = createApp(App)
app.component('AlertBox', AlertBox)
app.mount('#app')
