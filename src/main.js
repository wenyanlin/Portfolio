import './assets/main.css'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

AOS.init({
  duration: 800,
  easing: 'ease-in-out-sine',
  anchorPlacement: 'top-bottom',
})
