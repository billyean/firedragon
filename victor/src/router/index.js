import Vue from 'vue'
import Router from 'vue-router'
import Binding1 from '@/components/Binding1'
import Binding2 from '@/components/Binding2'
import Monster from '@/components/Monster'
// import {Vue1, Vue2} from '@/components/MultipleVue'

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
