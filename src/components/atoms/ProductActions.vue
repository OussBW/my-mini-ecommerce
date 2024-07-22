<template>
  <Toast />
  <div v-if="isList" class="flex flex-col md:items-end gap-8">
    <span class="text-xl font-semibold">${{ product.price }}</span>
    <div class="flex flex-row-reverse md:flex-row gap-2">
      <Button icon="pi pi-heart" outlined />
      <Button
        :icon="!loading ? 'pi pi-shopping-cart' : 'pi pi-spin pi-spinner'"
        :disabled="loading"
        :label="$t('product.addToCart')"
        class="flex-auto md:flex-initial whitespace-nowrap"
        @click="addProductToCart"
      />
    </div>
  </div>

  <div v-else class="flex flex-col gap-6 mt-6">
    <span class="text-2xl font-semibold">${{ product.price }}</span>
    <div class="flex gap-2">
      <Button
        :icon="!loading ? 'pi pi-shopping-cart' : 'pi pi-spin pi-spinner'"
        :label="$t('product.addToCart')"
        :disabled="loading"
        class="flex-auto whitespace-nowrap"
        @click="addProductToCart"
      />
      <Button icon="pi pi-heart" outlined />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useProductActions } from "../../composables/productActions";

const props = defineProps({
  product: { type: Object, required: true },
  isList: { type: Boolean, default: false },
});

const loading = ref(false);
const { addProductToCart } = useProductActions(loading, props.product);
</script>
