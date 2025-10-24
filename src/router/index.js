// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import UserPost from '@/views/UserPost.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/users/:username/posts/:postId', component: UserPost },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
