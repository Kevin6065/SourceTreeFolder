import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import AlertBox from './components/AlertBox.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import formatPlugin from './components/plugins/formatPlugin'
import router from './router'

const app = createApp(App)
app.component('AlertBox', AlertBox)
app.use(formatPlugin)
app.use(router)
app.mount('#app')
app.use(ElementPlus)
