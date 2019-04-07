import Vue from 'vue'
import Router from 'vue-router'
import Binding1 from '@/components/binding/Binding1'
import Binding2 from '@/components/binding/Binding2'
import Monster from '@/components/Monster'
import CalculatorContainer from '@/components/compByComp/CalculatorContainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Binding1',
      component: Binding1
    },
    {
      path: '/binding1',
      name: 'Binding1',
      component: Binding1
    },
    {
      path: '/binding2',
      name: 'Binding2',
      component: Binding2
    },
    {
      path: '/monster',
      name: 'Monster',
      component: Monster
    },
    {
      path: '/calculator',
      name: 'CalculatorContainer',
      component: CalculatorContainer
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
