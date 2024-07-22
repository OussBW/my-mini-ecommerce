<template>
  <div class="card">
    <DataView
      :value="filteredProducts"
      :layout="layout"
      paginator
      :rows="rows.value"
      :sortOrder="sortOrder"
      :sortField="sortField"
    >
      <template #header>
        <div class="flex justify-between">
          <div class="flex justify-between">
            <Select
              v-model="rows"
              :options="rowsOptions"
              optionLabel="label"
              :placeholder="$t('productList.itemsPerPage')"
            />
            <Select
              v-model="sortKey"
              :options="sortOptions"
              optionLabel="label"
              :placeholder="$t('productList.sort')"
              class="ml-2"
              @change="onSortChange($event)"
            />
            <OverlayBadge v-if="hasFilters" severity="danger">
              <Button
                class="ml-2"
                :label="$t('productList.filter')"
                icon="pi pi-filter"
                outlined
                @click="showFilters = !showFilters"
              />
            </OverlayBadge>

            <Button
              v-else
              class="ml-2"
              :label="$t('productList.filter')"
              icon="pi pi-filter"
              outlined
              @click="showFilters = !showFilters"
            />
          </div>
          <SelectButton v-model="layout" :options="options" :allowEmpty="false">
            <template #option="{ option }">
              <i :class="[option === 'list' ? 'pi pi-bars' : 'pi pi-table']" />
            </template>
          </SelectButton>
        </div>
      </template>
      <template #list="slotProps">
        <div class="flex flex-col">
          <template v-if="loading">
            <ProductCardSkeleton v-for="index in 12" :key="index" :layout />
          </template>
          <template v-else>
            <ListProductCard
              v-for="(item, index) in slotProps.items"
              :key="index"
              :item
            />
          </template>
        </div>
      </template>

      <template #grid="slotProps">
        <div class="grid grid-cols-12 gap-4">
          <template v-if="loading">
            <ProductCardSkeleton v-for="index in 12" :key="index" :layout />
          </template>
          <template v-else>
            <GridProductCard
              v-for="(item, index) in slotProps.items"
              :key="index"
              :loading
              :item
            />
          </template>
        </div>
      </template>
    </DataView>
    <ProductFiltersPanel v-model="showFilters" />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { storeToRefs } from "pinia";
import { useProductStore } from "../../stores/product";
import ListProductCard from "../molecules/ListProductCard.vue";
import GridProductCard from "../molecules/GridProductCard.vue";
import ProductCardSkeleton from "../molecules/ProductCardSkeleton.vue";
import ProductFiltersPanel from "./ProductFiltersPanel.vue";

const { filteredProducts, productFilters } = storeToRefs(useProductStore());
const hasFilters = computed(() => {
  return (
    productFilters.value?.categories?.length ||
    productFilters.value?.prices?.length
  );
});
const { loadProducts } = useProductStore();
const loading = ref(true);
const layout = ref("grid");
const options = ref(["list", "grid"]);
const rows = ref({ value: 5 });
const showFilters = ref(false);
//sorting
const sortOptions = ref([
  { label: "Price High to Low", value: "!price" },
  { label: "Price Low to High", value: "price" },
  { label: "Rating High to Low", value: "!rating.rate" },
  { label: "Rating Low to High", value: "rating.rate" },
  { label: "Category", value: "category" },
]);
const sortKey = ref();
const sortOrder = ref();
const sortField = ref();
const rowsOptions = ref([
  { label: "3", value: 3 },
  { label: "6", value: 6 },
  { label: "12", value: 12 },
]);

const onSortChange = (event) => {
  const value = event.value.value;
  const sortValue = event.value;

  if (value.indexOf("!") === 0) {
    sortOrder.value = -1;
    sortField.value = value.substring(1, value.length);
    sortKey.value = sortValue;
  } else {
    sortOrder.value = 1;
    sortField.value = value;
    sortKey.value = sortValue;
  }
};

onMounted(() => {
  loadProducts().then(() => {
    loading.value = false;
  });
});
</script>
