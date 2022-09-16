import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import 'vant/es/toast/style'

router.beforeEach((to, from , next) => {
    document.title = 'xxx商城'
    const userLogin = window.localStorage.getItem('user') ? true : false
    if (to.meta.login) {
        if (userLogin) {
            next()
        } else {
            next({ name: 'login', query: {
                status: 1
            } })
        }
    }
    next()
})

createApp(App).use(router).mount('#app')
