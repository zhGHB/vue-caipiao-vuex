import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home/Home.vue';
import Mine from '@/components/Mine/Mine.vue';
import Charge from '@/components/Charge/Charge.vue';
import Dynamic from '@/components/Dynamic/Dynamic.vue';
import Login from "@/components/Login/Login.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
    	path:'/Mine',
    	name:'Mine',
    	component:Mine,
      meta: {
          requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
       },
    },
    {
    	path:'/Dynamic',
    	name:'Dynamic',
    	component:Dynamic,
    },
    {
    	path:'/Charge',
    	name:'Charge',
    	component:Charge,
    },
    {
      path:'/login',
      name:'Login',
      component:Login,
    }
  ]
})
