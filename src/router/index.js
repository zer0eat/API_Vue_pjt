import Vue from 'vue'
import VueRouter from 'vue-router'
import RandomView from '@/views/RandomView'
import MovieView from '@/views/MovieView'
import WatchView from '@/views/WatchListView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/random',
    name: 'random',
    component: RandomView
  },
  {
    path: '/movies',
    name: 'movies',
    component: MovieView
  },
  {
    path: '/watch-list',
    name: 'watch-list',
    component: WatchView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
