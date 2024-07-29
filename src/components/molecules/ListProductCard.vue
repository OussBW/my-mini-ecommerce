<template>
  <div
    class="flex flex-col sm:flex-row sm:items-center p-6 gap-4"
    :class="[firstItemClass]"
  >
    <RouterLink :to="{ name: 'productDetails', params: { product: item.id } }">
      <div
        class="md:w-40 relative"
        :class="{ 'h-full m-8 !w-80': showDescription }"
      >
        <Image
          class="block xl:block mx-auto rounded w-full h-[200px]"
          :class="{ 'h-full m-8': showDescription }"
          :src="item.image"
          :alt="item.title"
          :preview="showDescription"
        />
        <Tag
          :value="$t('product.instock')"
          :severity="getSeverity()"
          class="absolute dark:!bg-surface-900"
          style="left: 4px; top: 4px"
        />
      </div>
    </RouterLink>
    <div
      class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6"
    >
      <div
        class="flex flex-row md:flex-col justify-between items-start gap-2 flex-wrap"
      >
        <div>
          <span
            v-capitalize
            class="font-medium text-surface-500 dark:text-surface-400 text-sm"
            >{{ item.category }}</span
          >
          <RouterLink
            :to="{ name: 'productDetails', params: { product: item.id } }"
          >
            <div class="text-lg font-medium mt-2">{{ item.title }}</div>
          </RouterLink>
        </div>
        <ProductRating :rating="getRating(item)" />
        <Panel v-if="showDescription" header="Description">
          <p v-text="item.description" class="m-0 w-full" />
        </Panel>
      </div>
      <ProductActions :product="item" is-list />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductActions from "../atoms/ProductActions.vue";
import ProductRating from "../atoms/ProductRating.vue";

defineProps({
  item: {
    type: Object,
    required: true,
  },
  showDescription: {
    type: Boolean,
    default: false,
  },
});
const firstItemClass =
  "[&:not(:first-of-type)]:border-t [&:not(:first-of-type)]:border-surface-200 [&:not(:first-of-type)]:dark:border-surface-700";

const getRating = (item: any) => item.rating.rate.toString();
const getSeverity = () => {
  return "success";
};

// a sample of custom directive, only for POC purpose =)
const vCapitalize = {
  mounted: (el: HTMLElement) => (el.style.textTransform = "capitalize"),
};
</script>
