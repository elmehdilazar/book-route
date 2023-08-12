import { createRouter, createWebHashHistory } from 'vue-router'
import AddBook from '../views/AddBook.vue'
import home from '../views/Home.vue'
import UpdateBook from '../views/UpdateBook.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/addbook',
    name: 'AddBook',
    component: AddBook
  },
  {
    path: '/updatebook/:id',
    name: 'UpdateBook',
    component: UpdateBook
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound
  },
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
