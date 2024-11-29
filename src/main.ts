import { createApp } from 'vue'
import App from './App.vue'
import '../style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

createApp(App).use(AOS.init()).mount('#app')
