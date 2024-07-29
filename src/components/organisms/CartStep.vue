<template>
  <div
    class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
  >
    <DataView :value="cart" layout="list">
      <template #list="slotProps">
        <div class="flex flex-col w-full pt-6 pb-6">
          <CartProductCard
            v-for="(item, index) in slotProps.items"
            :key="index"
            :item="item"
            layout="list"
          />
        </div>
      </template>
      <template #empty>
        <div class="p-4" data-test-id="emptyCart">
          There are no items in cart yet,
          <RouterLink to="/">click here to check our products!</RouterLink>
        </div>
      </template>
      <template v-if="cartTotalValue" #footer>
        <div class="flex w-full justify-end">
          Total:
          <span class="ml-2 font-bold">{{ cartTotalValue }}$</span>
        </div>
      </template>
    </DataView>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'
import CartProductCard from '@/components/molecules/CartProductCard.vue'

const { cart, cartTotalValue } = storeToRefs(useCartStore())
</script>
