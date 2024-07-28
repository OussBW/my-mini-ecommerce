import { computed, ref } from 'vue'
import { ProductService } from '@/service/ProductService'
import { defineStore } from 'pinia'
import type { Product } from '@/domain/product'
import type { ProductFilter } from '@/domain/productFilter'

export const useProductStore = defineStore('product', () => {
  const products = ref([{}])
  const productFilters = ref<ProductFilter>({
    categories: [],
    prices: []
  })

  // product list with filters applied
  const filteredProducts = computed<Product[] | {}[]>(() => {
    const { categories, prices } = productFilters.value
    let filteredItems = products.value
    if (categories?.length) {
      filteredItems = filteredItems.filter(({ category }: any) =>
        categories.map(({ name }: any) => name).includes(category)
      )
    }

    if (prices?.length) {
      filteredItems = filteredItems.filter(
        ({ price }: any) => price >= prices[0] && price <= prices[1]
      )
    }
    return filteredItems
  })

  const productCategories = computed<{}[]>(() =>
    // use Set() type to remove duplicates
    Array.from(new Set(products.value.map(({ category }: any) => category))).map((category) => ({
      name: category,
      value: category
    }))
  )

  // minimum and maximum product prices
  const priceRanges = computed<number[]>(() => {
    const prices = products.value.map(({ price }: any) => price ?? 0)
    return [Math.floor(Math.min(...prices)), Math.ceil(Math.max(...prices))]
  })

  const loadProducts = () =>
    ProductService.getProductsData().then(({ data }) => {
      products.value = data
    })

  const loadProductById = async (id: string) => await ProductService.getProductById(id)

  return {
    products,
    productCategories,
    priceRanges,
    filteredProducts,
    productFilters,
    loadProducts,
    loadProductById
  }
})
