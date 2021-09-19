import { createWebHistory, createRouter } from 'vue-router'
import Lifecycle from '@/views/LifeCycleHooks'

const routes = [
  {
    path: '/',
    component: Lifecycle
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router