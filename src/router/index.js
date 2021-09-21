import { createWebHistory, createRouter } from 'vue-router'
import Lifecycle from '@/views/LifeCycleHooks'

const routes = [
  {
    name: Lifecycle,
    path: '/',
    component: Lifecycle
  },
  {
    path: '/ref',
    component:  () => import('@/views/FunctionRef')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router