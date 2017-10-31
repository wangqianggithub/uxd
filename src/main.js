import Vue from 'vue'
import App from './App.vue'
import BgFlash from './components/bgAimate/index'
import VueRouter from 'vue-router'
import RouterConfig from './router.config'
import Bike from './components/bike/index'

Vue.use(BgFlash);
Vue.use(Bike);
Vue.use(VueRouter);
const router = new VueRouter({
    routes:RouterConfig
});

new Vue({
    el: '#app',
    router:router,
    render: h => h(App)
})
