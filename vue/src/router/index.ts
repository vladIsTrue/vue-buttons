import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/pages/Home.vue'
import PulsePage from '../components/pages/Pulse/PulsePage.vue'
import AddNews from '../components/pages/Pulse/components/AddNews.vue'
import NewsPulse from '../components/pages/Pulse/components/NewsPulse.vue'
import { RouteNames } from './routes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: RouteNames.HOME,
    component: HomePage
  },
  {
    path: '/pulse/articles',
    name: RouteNames.PULSE,
    component: PulsePage
  },
  {
    path: '/pulse/news/:id',
    name: RouteNames.NEWS_PULSE,
    component: NewsPulse
  },
  {
    path: '/pulse/add/',
    name: RouteNames.ADD_NEWS_PULSE,
    component: AddNews
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
