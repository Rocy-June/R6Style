import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/example/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ExampleIndex',
      component: Index
    }
  ]
})
