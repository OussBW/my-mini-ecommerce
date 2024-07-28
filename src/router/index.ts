import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/pages/HomePage.vue";
import CheckoutPage from "@/components/pages/CheckoutPage.vue";
import ProductDetailsPage from "../components/pages/ProductDetailsPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/cart",
      name: "cart",
      component: CheckoutPage,
    },
    {
      path: "/products/:product",
      name: "productDetails",
      component: ProductDetailsPage,
    },
  ],
});

export default router;
