import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './components/App.vue'
import List from './components/List.vue'
import Details from './components/Details.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: List },
    { path: '/link1', name: "link1", component: Details},
    { path: '/link2', name: "link2", component: Details,},
    { path: '/link3', name: "link3", component: Details,}, 
    { path: '/*', redirect: (to) => { return "/" }},    
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
