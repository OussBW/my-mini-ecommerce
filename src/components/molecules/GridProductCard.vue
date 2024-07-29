<template>
  <div class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-4 p-2">
    <div
      class="p-6 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded flex flex-col"
    >
      <RouterLink :to="{ name: 'productDetails', params: { product: item.id } }">
        <div class="bg-surface-50 flex justify-center rounded p-4">
          <div class="relative mx-auto">
            <img
              class="rounded w-full h-[200px] w-[300px]"
              :src="item.image"
              :alt="item.title"
              style="max-width: 300px"
            />
            <Tag
              :value="$t('product.instock')"
              :severity="getSeverity()"
              class="absolute dark:!bg-surface-900"
              style="left: 4px; top: 4px"
            />
          </div>
        </div>
      </RouterLink>
      <div class="pt-6">
        <div class="flex flex-row justify-between items-start gap-2">
          <div>
            <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{
              item.category
            }}</span>
            <RouterLink :to="{ name: 'productDetails', params: { product: item.id } }">
              <div
                class="text-lg font-medium mt-1 md:max-w-64 overflow-ellipsis md:text-nowrap overflow-hidden"
                :title="item.title"
              >
                {{ item.title }}
              </div>
            </RouterLink>
          </div>
          <ProductRating :rating="getRating(item)" />
        </div>
        <ProductActions :product="item" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductActions from '../atoms/ProductActions.vue'
import ProductRating from '../atoms/ProductRating.vue'

defineProps({
  item: {
    type: Object,
    required: true
  }
})

const getRating = ({ rating }: any) => rating.rate.toString()
const getSeverity = () => {
  return 'success'
}
</script>
