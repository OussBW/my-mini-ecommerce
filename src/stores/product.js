import { ref } from 'vue'
import { ProductService } from "@/service/ProductService";
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([{}]);

  const loadProducts = () => 
    ProductService.getProductsData().then(
      ({ data }) => {
        products.value = data
      }
    );

  const loadProductById = async (id) => await ProductService.getProductById(id)

  return { products, loadProducts, loadProductById }
})
