import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Callback from '../views/Callback.vue'
import Top from '../views/Top.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/callback',
    name: 'Callback',
    component: Callback
  },
  {
    path: '/top',
    name: 'Top',
    component: Top
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
