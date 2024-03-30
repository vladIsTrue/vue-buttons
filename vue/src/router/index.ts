import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/pages/Home.vue'
import PulsePage from '../components/pages/Pulse/PulsePage.vue'
import { RouteNames } from './routes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: RouteNames.HOME,
    component: HomePage
  },
  {
    path: '/pulse',
    name: RouteNames.PULSE,
    component: PulsePage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
