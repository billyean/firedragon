import Vue from 'vue'
import Router from 'vue-router'
import Binding from '@/components/Binding'
import Component2 from '@/components/Component2'
import Monster from '@/components/Monster'
// import {Vue1, Vue2} from '@/components/MultipleVue'

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
    },
    {
      path: '/monster',
      name: 'Monster',
      component: Monster
    }
    //     , {
    //   path: '/vue1',
    //   name: 'Vue1',
    //   component: Vue1
    // },
    // {
    //   path: '/vue2',
    //   name: 'Vue2',
    //   component: Vue2
    // }
  ]
})
