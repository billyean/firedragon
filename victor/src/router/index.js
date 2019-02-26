import Vue from 'vue'
import Router from 'vue-router'
import Binding from '@/components/Binding'
import Component2 from '@/components/Component2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Binding',
      component: Binding
    },
    {
      path: '/binding',
      name: 'Binding',
      component: Binding
    },
    {
      path: '/component2',
      name: 'Component2',
      component: Component2
    }
  ]
})
