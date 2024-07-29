<template>
    <RouterLink
      to="cart"
      type="button"
      class="inline-flex w-12 h-12 p-0 items-center justify-center surface-0 dark:surface-800 border border-surface-200 dark:border-surface-600 rounded"
    >
      <OverlayBadge v-if="cartTotalItemsCount" :value="cartTotalItemsCount" severity="danger" size="small">
        <i class="h-full w-full dark:text-white pi pi-shopping-cart" />
      </OverlayBadge>
      <i v-else class="dark:text-white pi pi-shopping-cart" />
    </RouterLink>
  </template>
  
  <script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useCartStore } from "../../stores/cart";
  
  const { cartTotalItemsCount } = storeToRefs(useCartStore());
  </script>
  