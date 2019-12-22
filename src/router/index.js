import Vue from 'vue'
import Router from 'vue-router'
import timeline from '@/Pages/Timeline'
import home from '@/Pages/Home'
import find from '@/Pages/Find'
import label from '@/Pages/Label'
import collect from '@/Pages/Collect'
import column from '@/Pages/Column'
import f404 from '@/Pages/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [{
        path: 'find',
        name: 'find',
        component: find
      },
      {
        path: 'timeline',
        name: 'timeline',
        component: timeline
      },
      {
        path: 'label',
        name: 'label',
        component: label
      },
      {
        path: 'collect',
        name: 'collect',
        component: collect
      },
      {
        path: 'column',
        name: 'column',
        component: column
      }
      ]
    },
    {
      path: '/404',
      name: '404',
      component: f404
    }
  ]
})
