<template>
  <div class="card">
    <ProductCardSkeleton v-if="loading" layout="list" />
    <ListProductCard v-else :item="product" show-description />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { ProductService } from "../../service/ProductService";
import ListProductCard from "../molecules/ListProductCard.vue";

const route = useRoute();
const productId = computed(() => route.params.product);
const product = ref({});
const loading = ref(true);

onMounted(() =>
  ProductService.getProductById(productId.value.toString()).then(({ data }) => {
    product.value = data;
    loading.value = false;
  })
);
</script>
