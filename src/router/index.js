import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Index from '@/components/index'
import Test from '@/components/test'
import Test_1 from '@/components/test-child'
import Test_2 from '@/components/test-child2'
import Info from '@/components/info'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/index',
      component: Index,
      children: [
        {
          path: '/test',
          component: Test,
          children: [
            {
              path: '/testChild',
              component: Test_1,
            },
            {
              path: '/testChild2',
              component: Test_2,
            },
          ]
        },
        {
          path: '/hello',
          component: HelloWorld
        },
      ]
    },
    {
      path: '/info',
      component: Info
    },
  ]
})
