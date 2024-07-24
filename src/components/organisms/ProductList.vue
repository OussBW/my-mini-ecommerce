<template>
  <div class="card !p-4">
    <DataView
      :value="filteredProducts"
      :layout="layout"
      paginator
      :rows="rows.value"
      :sortOrder
      :sortField
    >
      <template #header>
        <div
          class="flex justify-between w-full flex-wrap md:flex-nowrap items-start"
        >
          <div class="flex justify-between flex-wrap md:justify-start w-full mb-2">
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
          </div>
          <div class="flex justify-between w-full md:justify-end">
            <!-- display a small badge if any filters are activated -->
            <OverlayBadge v-if="hasFilters" severity="danger">
              <Button
                class="mr-2"
                :label="$t('productList.filter')"
                icon="pi pi-filter"
                outlined
                @click="showFilters = !showFilters"
              />
            </OverlayBadge>

            <Button
              v-else
              class="mr-2"
              :label="$t('productList.filter')"
              icon="pi pi-filter"
              outlined
              @click="showFilters = !showFilters"
            />
            <SelectButton
              v-model="layout"
              :options="options"
              :allowEmpty="false"
            >
              <template #option="{ option }">
                <i
                  :class="[option === 'list' ? 'pi pi-bars' : 'pi pi-table']"
                />
              </template>
            </SelectButton>
          </div>
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
import { ref, onMounted, computed, defineAsyncComponent } from "vue";
import { storeToRefs } from "pinia";
import { useProductStore } from "../../stores/product";
import { useSort } from "../../composables/sort";

// lazy loading some components for better perf
const GridProductCard = defineAsyncComponent(
  () => import("../molecules/GridProductCard.vue")
);
const ProductCardSkeleton = defineAsyncComponent(
  () => import("../molecules/ProductCardSkeleton.vue")
);
const ProductFiltersPanel = defineAsyncComponent(
  () => import("./ProductFiltersPanel.vue")
);
const ListProductCard = defineAsyncComponent(
  () => import("../molecules/ListProductCard.vue")
);

const { sortOptions, sortKey, sortOrder, sortField, onSortChange } = useSort();
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
const rowsOptions = ref([
  { label: "3", value: 3 },
  { label: "6", value: 6 },
  { label: "12", value: 12 },
]);

onMounted(() => {
  loadProducts().then(() => {
    loading.value = false;
  });
});
</script>
