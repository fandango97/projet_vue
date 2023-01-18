import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AppelView from '../views/AppelView.vue'
import ContactView from '../views/ContactView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/appel',
    name: 'appel',
    component: AppelView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
