<template>
  <div class="flex flex-col sm:flex-row sm:items-center p-6 gap-4" :class="[firstItemClass]">
    <div class="md:w-24 relative">
      <img
        class="block xl:block mx-auto rounded w-full h-[100px]"
        :src="item.image"
        :alt="item.title"
      />
      <Tag
        value="INSTOCK"
        :severity="getSeverity()"
        class="absolute dark:!bg-surface-900"
        style="left: 4px; top: 4px"
      ></Tag>
    </div>
    <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
      <div class="flex flex-row md:flex-col justify-between items-start gap-2">
        <div>
          <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{
            item.category
          }}</span>
          <div class="text-lg font-medium mt-2">{{ item.title }}</div>
        </div>
        <ProductRating :rating="getRating(item)" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductRating from '../atoms/ProductRating.vue'

defineProps({
  item: {
    type: Object,
    required: true
  }
})

const getRating = (item: any) => item.rating.rate.toString()
const getSeverity = () => {
  return 'success'
}

const firstItemClass =
  '[&:not(:first-of-type)]:border-t [&:not(:first-of-type)]:border-surface-200 [&:not(:first-of-type)]:dark:border-surface-700'
</script>
