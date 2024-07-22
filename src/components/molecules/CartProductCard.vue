<template>
  <div
    class="flex flex-col sm:flex-row sm:items-center p-6 gap-4"
    :class="[firstItemClass]"
  >
    <div class="md:w-30 relative">
      <img
        class="block xl:block mx-auto rounded w-full h-[100px]"
        :src="product.image"
        :alt="product.title"
      />
      <Tag
        value="INSTOCK"
        :severity="getSeverity(product)"
        class="absolute dark:!bg-surface-900"
        style="left: 4px; top: 4px"
      ></Tag>
    </div>
    <div
      class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6"
    >
      <div class="flex flex-row md:flex-col justify-between items-start gap-2">
        <div>
          <span
            class="font-medium text-surface-500 dark:text-surface-400 text-sm"
            >{{ product.category }}</span
          >
          <div class="text-lg font-medium mt-2">{{ product.name }}</div>
        </div>
        <ProductRating :rating="getRating(product)" />
      </div>
      <CartProductActions :product :quantity />
    </div>
  </div>
</template>

<script setup>
import CartProductActions from "../atoms/CartProductActions.vue";
import ProductRating from "../atoms/ProductRating.vue";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const { product, quantity } = props.item

const getRating = (item) => item.rating.rate.toString();
const getSeverity = (product) => {
  return "success";
  // switch (product.inventoryStatus) {
  //   case "INSTOCK":
  //     return "success";

  //   case "LOWSTOCK":
  //     return "warn";

  //   case "OUTOFSTOCK":
  //     return "danger";

  //   default:
  //     return null;
  // }
};

const firstItemClass =
  "[&:not(:first-of-type)]:border-t [&:not(:first-of-type)]:border-surface-200 [&:not(:first-of-type)]:dark:border-surface-700";
</script>
