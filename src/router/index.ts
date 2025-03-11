import { createRouter, createWebHashHistory } from 'vue-router'
import SubjectView from '../views/SubjectView.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/subject/:id', component: SubjectView },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
