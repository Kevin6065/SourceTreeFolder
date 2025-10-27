// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import UserPost from '@/views/UserPost.vue'
import Users from '@/views/Users.vue'
import UsersList from '@/views/UsersList.vue'
import UserspPofile from '@/views/UserspPofile.vue'
import UsersData from '@/views/UsersData.vue'

const routes = [
  { path: '/', component: () => import('@/views/Home.vue') },
  { path: '/about', component: () => import('@/views/About.vue') },
  { path: '/users/:username/posts/:postId', component: UserPost },
  {
    path: '/users',
    name: 'User',
    component: Users,
    children: [
      { path: ':id', name: 'UsersX', component: UsersData, props: true }, // ✅ 啟用 props
      { path: 'list', component: UsersList },
      { path: 'profile', name: 'profile', component: UserspPofile },
    ],
  },
  {
    path: '/user/:username',
    name: 'UserDetail',
    component: () => import('@/views/UserDetail.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
