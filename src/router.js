import Vue from 'vue'
import Router from 'vue-router'
import Welcome from './views/Welcome.vue'
import Faq from './views/Faq.vue'
import Contact from './views/Contact.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import PasswordReset from './views/PasswordReset.vue'
import OrderSuccess from './views/OrderSuccess.vue'
import Cart from './views/Cart.vue'
import Category from './views/Category.vue'
import Product from './views/Product.vue'
import Wishlist from './views/Wishlist.vue'
import Review from './views/Review.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/faq',
      name: 'faq',
      component: Faq
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/password-reset',
      name: 'password-reset',
      component: PasswordReset
    },
    {
      path: '/order-success',
      name: 'order-success',
      component: OrderSuccess
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: Wishlist
    },
    {
      path: '/review',
      name: 'review',
      component: Review
    },
    
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },

    {
      path: "/404",
      name: "Error",
      component: () => import("./views/Error.vue")
    },
    { path: '*', redirect: '/404'},
  ]
})
