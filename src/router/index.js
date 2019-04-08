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
      redirect: '/dashboard'
    },
    {
      path: '/',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      meta: { title: '自述文件' },
      children: [
        {
          path: '/table',
          component: resolve => require(['../components/pages/Basetable.vue'], resolve)
        }
      ]
    },
    {
      path: '/sidebar',
      component: resolve => require(['../components/common/Sidebar.vue'], resolve)
    }
  ]
})
