import { computed, ref } from "vue";
import { ProductService } from "@/service/ProductService";
import { defineStore } from "pinia";

export const useProductStore = defineStore("product", () => {
  const products = ref([{}]);
  const productFilters = ref({});

  const filteredProducts = computed(() => {
    const { categories, prices } = productFilters.value;
    let filteredItems = products.value;
    if (categories?.length) {
      filteredItems = filteredItems.filter(({ category }) =>
        categories.map(({ name }) => name).includes(category)
      );
    }

    if (prices?.length) {
      filteredItems = filteredItems.filter(
        ({ price }) => price >= prices[0] && price <= prices[1]
      );
    }
    return filteredItems;
  });

  const productCategories = computed(() =>
    Array.from(new Set(products.value.map(({ category }) => category))).map(
      (category) => ({ name: category, value: category })
    )
  );

  const priceRanges = computed(() => {
    const prices = products.value.map(({ price }) => price ?? 0);
    return [Math.floor(Math.min(...prices)), Math.ceil(Math.max(...prices))];
  });

  const loadProducts = () =>
    ProductService.getProductsData().then(({ data }) => {
      products.value = data;
    });

  const loadProductById = async (id) => await ProductService.getProductById(id);

  return {
    products,
    productCategories,
    priceRanges,
    filteredProducts,
    productFilters,
    loadProducts,
    loadProductById,
  };
});
