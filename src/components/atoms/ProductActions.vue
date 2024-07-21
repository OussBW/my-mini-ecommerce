<template>
  <div v-if="isList" class="flex flex-col md:items-end gap-8">
    <span class="text-xl font-semibold">${{ product.price }}</span>
    <div class="flex flex-row-reverse md:flex-row gap-2">
      <Button icon="pi pi-heart" outlined></Button>
      <Button
        icon="pi pi-shopping-cart"
        label="Buy Now"
        :disabled="product?.inventoryStatus === 'OUTOFSTOCK'"
        class="flex-auto md:flex-initial whitespace-nowrap"
      ></Button>
    </div>
  </div>

  <div v-else class="flex flex-col gap-6 mt-6">
    <span class="text-2xl font-semibold">${{ product.price }}</span>
    <div class="flex gap-2">
      <Button
        icon="pi pi-shopping-cart"
        label="Buy Now"
        :disabled="product?.inventoryStatus === 'OUTOFSTOCK'"
        class="flex-auto whitespace-nowrap"
      ></Button>
      <Button icon="pi pi-heart" outlined></Button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: { type: Object, required: true },
  isList: { type: Boolean, default: false },
});
</script>
