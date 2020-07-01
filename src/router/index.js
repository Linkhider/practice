 import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'empty'},
    component: () => import('../views/Home.vue')
  },
    {
      path: '/profile',
      name: 'Profile',
      meta: {layout: 'main'},
      component: () => import('../views/MyProfile.vue')
    },
    {
      path: '/chats',
      name: 'Chats',
      meta: {layout: 'empty'},
      component: () => import('../views/Chats.vue')
    }
]

const router = new VueRouter({
  routes
})

export default router
