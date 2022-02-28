import { createRouter, createWebHistory } from "vue-router";
import FoodList from "../views/FoodList.vue";
import About from '../views/About.vue'
import Login from '@/views/Authentication/Login.vue'
import Register from '@/views/Authentication/Register.vue'
import NetWorkError from '@/views/ErrorHandling/NetworkError.vue'
import NotFound from '@/views/ErrorHandling/NotFound.vue'
import NProgress from 'nprogress'

const routes = [
  {
    path: "/",
    name: "FoodList",
    component: FoodList,
    props: (route) => ({ page: parseInt(route.query.page) || 1 })
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetWorkError
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})
router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})
export default router

