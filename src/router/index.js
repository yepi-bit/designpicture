import { createRouter, createWebHashHistory } from 'vue-router'
import Cut from '../views/Cut.vue'

const routes = [
  {
    path: '/',
    name: 'Cut',
    component: Cut
  },
  {
    path: '/video',
    name: 'Video',
    component: () => import(/* webpackChunkName: "about" */ '../views/Video.vue')
  },
  {
    path: '/text',
    name: 'text',
    component: () => import(/* webpackChunkName: "about" */ '../views/Text.vue')
  },
  {
    path: '/face',
    name: 'face',
    component: () => import(/* webpackChunkName: "about" */ '../views/Face.vue')
  },
  {
    path: '/faceCheck',
    name: 'faceCheck',
    component: () => import(/* webpackChunkName: "about" */ '../views/FaceCheck.vue')
  },
  {
    path: '/waveSurfer',
    name: 'waveSurfer',
    component: () => import(/* webpackChunkName: "about" */ '../views/WaveSurfer.vue')
  },
  {
    path: '/banner',
    name: 'banner',
    component: () => import(/* webpackChunkName: "about" */ '../views/Banner.vue')
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import(/* webpackChunkName: "about" */ '../views/Demo.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
