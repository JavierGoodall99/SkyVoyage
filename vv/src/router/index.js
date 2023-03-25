import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProgramDetails from '../components/ProgramDetails.vue';
import FlightDetails from '../components/FlightDetails.vue';


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
    path: '/contact',
    name: 'contact',
    component: import('../views/ContactView.vue')
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
    path: '/login',
    name: 'login',
    component: import('../views/LoginView.vue')
  },
  {
    path: '/account',
    name: 'account',
    component: import('../views/AccountView.vue')
  },
  {
    path: '/programs',
    name: 'programs',
    component: import('../views/ProgramsView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: import('../views/AdminView.vue')
  },
  {
    path: '/program/:id',
    name: 'program',
    component: ProgramDetails
  },
  {
    path: '/flight/:id',
    name: 'flight',
    component: FlightDetails
  },
  {
    path: '/cart',
    name: 'cart',
    component: import('../views/CartView.vue')
  }
];




const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
