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
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useProductStore } from "../../stores/product";
import { useRouter } from "vue-router";
import SearchProductCard from "../molecules/SearchProductCard.vue";

const router = useRouter();
const { products } = storeToRefs(useProductStore());
const selectedProduct = ref();
const filteredProducts = ref();

const search = (event) => {
  // setTimeout is used to debounce typing
  setTimeout(() => {
    filteredProducts.value = event.query.length
      ? [...products.value]
      : products.value.filter((product) => {
          return product.title
            .toLowerCase()
            .includes(event.query.toLowerCase());
        });
  }, 250);
};

const onSelectItem = ({ value }) => {
  router.push({ name: "productDetails", params: { product: value.id } });
};
</script>
