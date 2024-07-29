<template>
  <InputGroup class="w-full">
    <InputGroupAddon>
      <i class="pi pi-search"></i>
    </InputGroupAddon>
    <AutoComplete
      v-model="selectedProduct"
      optionLabel="title"
      :suggestions="filteredProducts"
      @complete="search"
      @item-select="onSelectItem"
      :placeholder="$t('toolbar.search')"
    >
      <template #option="slotProps">
        <SearchProductCard :item="slotProps.option" />
      </template>
    </AutoComplete>
  </InputGroup>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useProductStore } from '@/stores/product'
import SearchProductCard from '../molecules/SearchProductCard.vue'

const router = useRouter()
const { products } = storeToRefs(useProductStore())
const selectedProduct = ref()
const filteredProducts = ref()

const search = ({ query }: any) => {
  // setTimeout is used to debounce typing
  setTimeout(() => {
    filteredProducts.value = query.length
      ? [...products.value]
      : products.value.filter(({ title }: any) => {
          return title.toLowerCase().includes(query.toLowerCase())
        })
  }, 250)
}

const onSelectItem = ({ value }: any) => {
  router.push({ name: 'productDetails', params: { product: value.id } })
}
</script>
