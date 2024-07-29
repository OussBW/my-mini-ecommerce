import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { isCartItem, type Cart, type CartItem } from '../domain/cart'
import type { Product } from '../domain/product'

export const useCartStore = defineStore('cart', () => {
// ======== State ==========
  // cart items
  const cart = ref<Cart>([])
  // total value of cart's items
  const cartTotalValue = computed(() =>
    cart.value.reduce((acc, { product, quantity }) => acc + quantity * product.price, 0).toFixed(2)
  )

  // number of items in the cart
  const cartTotalItemsCount = computed(() =>
    cart.value.reduce((acc, { quantity }) => acc + quantity, 0)
  )

// ============== Actions ==========
  const getCartItemById = (productId: string): CartItem | undefined =>
    cart.value.find(({ product }) => product.id === productId)

  const addToCart = (product: Product) => {
    const cartItem = cart.value.find(({ product }) => product.id === product.id)

    if (cartItem) {
      cartItem.quantity += 1
      return
    }
    cart.value.push({
      product,
      quantity: 1
    })
  }

  const removeFromCart = (productId: string) => {
    const cartItemIndex = cart.value.findIndex((item) => item.product.id === productId)
    const cartItem: CartItem | {} = cart.value.find((item) => item.product.id === productId) ?? {}
    if (!isCartItem(cartItem)) {
      return
    }
    if (cartItem?.quantity > 1) {
      cartItem.quantity -= 1
    } else {
      cart.value.splice(cartItemIndex, 1)
    }
  }

  return {
    cart,
    cartTotalItemsCount,
    cartTotalValue,
    getCartItemById,
    addToCart,
    removeFromCart
  }
})
