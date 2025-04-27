import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue' // Registro de componente de manera local

// Esto permite que el componente pueda ser invocado desde cualquier lugar sin importarlo
import MyComponente from './components/MyComponente.vue'

createApp(App)
    .component('MyComponente', MyComponente) // Registro de componente de manera global
    .mount('#app')
