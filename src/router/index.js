import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/header',
      component: resolve => require(['../components/common/Header.vue'], resolve)
    },
    {
      path: '/',
      component: resolve => require(['../components/common/Home.vue'], resolve)
    },
    {
      path: '/sidebar',
      component: resolve => require(['../components/common/Sidebar.vue'], resolve)
    }
  ]
})
