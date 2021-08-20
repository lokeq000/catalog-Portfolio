import Vue from 'vue'
import VueRouter from 'vue-router'
import mCatalog from '../components/m-catalog'
import mCart from '../components/m-cart'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'catalog',
    component: mCatalog
  },
  {
    path:'/cart',
    name:'cart',
    component: mCart,
    props:true,
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
