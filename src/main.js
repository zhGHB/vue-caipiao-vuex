
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import api from "@/utils/api.js";

import store from './vuex';


import iView from 'iview'; // 导入组件库  
import 'iview/dist/styles/iview.css'; // 导入样式 



Vue.use(VueAwesomeSwiper);
Vue.use(iView); 


Vue.config.productionTip = false
require('swiper/dist/css/swiper.css');
Vue.prototype.api = api;

router.beforeEach((to, from, next) => {//路由拦截功能
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (store.state.userInfo||sessionStorage.getItem('userInfo')) {  //判断用户信息是否存在
            next();
        }
        else {
            next({
                path: '/login',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }else {
        next();
    };
    if(to.path === '/login'){
       if(store.state.userInfo||sessionStorage.getItem('userInfo')){
         next({
             path:'/',
         })
       }
    }
});




new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

