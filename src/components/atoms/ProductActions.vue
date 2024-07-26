<template>
  <Toast />
  <div
    class="flex flex-col"
    :class="{ 'md:items-end gap-8': isList, 'gap-6 mt-6': !isList }"
  >
    <span class="text-xl font-semibold" :class="{ 'text-2xl': !isList }">
      ${{ product.price }}
    </span>
    <div class="flex gap-2" :class="{ 'flex-row-reverse md:flex-row': isList }">
      <FavoriteButton v-if="isList" />
      <Button
        :icon="!loading ? 'pi pi-shopping-cart' : 'pi pi-spin pi-spinner'"
        :disabled="loading"
        :label="$t('product.addToCart')"
        class="flex-auto whitespace-nowrap"
        :class="{ 'md:flex-initial': isList }"
        @click="addProductToCart"
      />
      <FavoriteButton v-if="!isList" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useProductActions } from "../../composables/productActions";
import FavoriteButton from "./FavoriteButton.vue";

const props = defineProps({
  product: { type: Object, required: true },
  isList: { type: Boolean, default: false },
});

const loading = ref(false);
const { addProductToCart } = useProductActions(loading, props.product);
</script>
