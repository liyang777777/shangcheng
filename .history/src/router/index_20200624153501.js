import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    
    component: () => import('../views/About')
  },
  {
    path: '/details',
    name: 'Details',
    
    component: () => import('../views/details/Details')
  },
  {
    path: '/login',
    name: 'Login',
    
    component: () => import('../views/login/Login')
  },
  {
    path: '/classification',
    name: 'Classification',
    
    component: () => import('../views/classification/Classification')
  },
  {
    path: '/personal Center',
    name: 'Personal Center',
    
    component: () => import('../views/personal Center/Personal Center')
  },
  {
    path: '/shopping Cart',
    name: 'Shopping Cart',
    
    component: () => import('../views/shopping Cart/Shopping Cart')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
