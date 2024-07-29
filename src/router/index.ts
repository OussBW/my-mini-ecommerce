import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/pages/HomePage.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/components/pages/CheckoutPage.vue')
    },
    {
      path: '/products/:product',
      name: 'productDetails',
      component: () => import('@/components/pages/ProductDetailsPage.vue')
    }
  ]
})

export default router
