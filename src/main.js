import './assets/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index' //Importar el router

createApp(App)
    .use(router) // Indicar que se usará el documento de rutas o enrutador
    .mount('#app')
