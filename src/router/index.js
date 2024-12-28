import { createRouter, createWebHistory } from 'vue-router'
import Fishing from '../components/Fishing.vue'
import Market from '../components/Market.vue'
import Inventory from '../components/Inventory.vue'
import Home from '../components/Home.vue'  // Import Home component

const routes = [
  { path: '/', component: Home },       // Home route
  { path: '/fishing', component: Fishing },
  { path: '/market', component: Market },
  { path: '/inventory', component: Inventory },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
