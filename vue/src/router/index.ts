import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/pages/Home.vue'
import Button8thPage from '@/components/pages/Button8thPage.vue'
import SecondButtonPage from "@/components/pages/SecondButtonPage.vue";
import ThirteenthButtonPage from "../components/ui/buttons/ThirteenthButton.vue";
import FirstButtonPage from "@/components/pages/FirstButtonPage.vue";
import TenthButtonPage from "@/components/pages/TenthButtonPage.vue"
import ButtonSixthPage from "@/components/pages/ButtonSixthPage.vue"
import FourthButtonPage from "@/components/pages/FourthButtons.vue";
import TwelfthButtonPage from '../components/pages/TwelfthButtonPage.vue'
import { RouteNames } from './routes'
import ThirdButtonPage from '../components/pages/ThirdButtonPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: RouteNames.HOME,
    component: HomePage
  },
  {
    path: '/second_button',
    name: RouteNames.SECOND_BUTTON,
    component: SecondButtonPage
  },
  {
    path: '/button_8',
    name: RouteNames.BUTTON_8,
    component: Button8thPage
  },
  {
    path: '/thirteenth_button',
    name: RouteNames.THIRTEENTH_BUTTON,
    component: ThirteenthButtonPage
  },
  {
    path: '/button_1',
    name: RouteNames.BUTTON_1,
    component: FirstButtonPage
  },
  {
    path: '/tenth_button',
    name: RouteNames.TENTH_BUTTON,
    component: TenthButtonPage
  },
  {
    path: '/fourth_button',
    name: RouteNames.FOURTH_BUTTON,
    component: FourthButtonPage
  },
  {
    path: '/button_sixth',
    name: RouteNames.BUTTON_SIXTH,
    component: ButtonSixthPage
  },
  {
    path: '/twelfth_button',
    name: RouteNames.TWELFTH_BUTTON,
    component: TwelfthButtonPage
  },
  {
    path: '/third_button',
    name: RouteNames.THIRD_BUTTON,
    component: ThirdButtonPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
