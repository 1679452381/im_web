import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Api from "./util/net"; // 主要是这里，引入配置好的Api

import './assets/main.css'

const app = createApp(App)

app.config.globalProperties.$axios= Api; //方法挂载到全局

app.use(router)
app.mount('#app')
