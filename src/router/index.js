import Vue from 'vue'
import Router from 'vue-router'
import MeeseeksList from '@/components/MeeseeksList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MeeseeksList',
      component: MeeseeksList
    }
  ]
})
