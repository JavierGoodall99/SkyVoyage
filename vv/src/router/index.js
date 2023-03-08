import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: import('../views/AboutView.vue')
  },
  {
    path: '/flights',
    name: 'flights',
    component: import('../views/FlightsView.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    component: import('../views/RegistrationView.vue')
  },
  {
    path: '/programs',
    name: 'programs',
    component: import('../views/ProgramsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
