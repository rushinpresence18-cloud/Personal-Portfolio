import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import SkillsView from '@/views/SkillsView.vue'
import ContactView from '@/views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Rushin Presence | Front-End Developer' },
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: { title: 'About | Rushin Presence' },
  },
  {
    path: '/skills',
    name: 'skills',
    component: SkillsView,
    meta: { title: 'Skills & Services | Rushin Presence' },
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: { title: 'Contact | Rushin Presence' },
  },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

/**
 * Update the document title on every route change.
 */
router.afterEach((to) => {
  const defaultTitle = 'Rushin Presence | Front-End Developer'
  document.title = to.meta?.title || defaultTitle
})

export default router