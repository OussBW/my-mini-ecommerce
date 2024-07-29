<template>
  <div class="card flex justify-start">
    <Drawer class="!w-full md:!w-80 lg:!w-[30rem]" v-model:visible="visible" header="Filters">
      <Panel class="mb-4" header="Category" toggleable>
        <MultiSelectFilter
          :options="productCategories"
          placeholder="Select categories"
          v-model="filters.categories"
        />
      </Panel>
      <Panel header="Price" toggleable>
        <RangeFilter
          v-model="filters.prices"
          :min="priceRanges[0]"
          :max="priceRanges[1]"
          :key="refreshKey"
        />
      </Panel>
      <template #footer>
        <div class="w-full flex justify-end">
          <Button
            class="mr-2 w-30"
            outlined
            icon="pi pi-refresh"
            label="Reset Filters"
            @click="resetFilters"
          />
          <Button class="mr-2" outlined @click="visible = false"> Cancel </Button>
          <Button label="Save" @click="saveFilters" />
        </div>
      </template>
    </Drawer>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useProductStore } from '@/stores/product'
import MultiSelectFilter from '../atoms/MultiSelectFilter.vue'
import RangeFilter from '../atoms/RangeFilter.vue'
import type { ProductFilter } from '@/domain/productFilter'

const { productCategories, priceRanges, productFilters } = storeToRefs(useProductStore())

const filters = reactive<ProductFilter>({
  categories: [],
  prices: []
})
const visible = defineModel<boolean>()
const refreshKey = ref(0)

const saveFilters = () => {
  console.log(filters.prices.length)
  if (filters.categories.length || filters.prices.length) {
    productFilters.value = { ...filters }
  }

  visible.value = false
}

const resetFilters = () => {
  filters.categories = []
  filters.prices = [] //[priceRanges.value[0], priceRanges.value[1]]
  productFilters.value = {
    categories: [],
    prices: []
  }
  refreshKey.value++
}
</script>
