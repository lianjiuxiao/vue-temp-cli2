import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import MyInfo from '@/views/my/Index'
import BankInfo from '@/views/my/BankInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/my',
      component: MyInfo,
      children: [
        {
          path: 'bankinfo',
          component: BankInfo,
        },
      ]
    },
  ]
})
