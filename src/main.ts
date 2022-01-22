import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

router.beforeEach((to, from , next) => {
    document.title = 'xxx商城'
    next()
})

createApp(App).use(router).mount('#app')
