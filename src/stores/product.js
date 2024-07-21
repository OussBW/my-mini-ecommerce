import { ref } from 'vue'
import { ProductService } from "@/service/ProductService";
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([{}]);

  const loadProducts = () => 
    ProductService.getProducts().then(
      ({ data }) => {
        products.value = data
      }
    );
  return { products, loadProducts }
})
