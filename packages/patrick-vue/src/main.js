import { createApp } from 'vue'
import Patrick from '@/core'
import router from './router'
import store from './store'
import App from './App.vue'

createApp(App)
  .use(Patrick)
  .use(store)
  .use(router)
  .mount('#app')
