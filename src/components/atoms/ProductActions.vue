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
import { useCartStore } from "../../stores/cart";
import { useToast } from "primevue/usetoast";

const props = defineProps({
  product: { type: Object, required: true },
  isList: { type: Boolean, default: false },
});

const { addToCart } = useCartStore();
const toast = useToast();
const loading = ref(false);

const addProductToCart = () => {
  loading.value = true;

  // I used a setTimeout to simulate an API call
  setTimeout(() => {
    addToCart(props.product);
    loading.value = false;
    toast.add({
      severity: "success",
      summary: "Done!",
      detail: "Product added to cart",
      life: 3000,
    });
  }, 2000);
};
</script>
