import { createRouter, createWebHistory } from 'vue-router'
import ContactView from '../views/ContactView.vue'
import JournalView from '../views/JournalView.vue'
import ClavierView from '../views/ClavierView.vue'

const routes = [
  {
    path: '/',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/journal',
    name: 'journal',
    
    component: JournalView
  },
  {
    path: '/clavier',
    name: 'clavier',
    
    component: ClavierView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
