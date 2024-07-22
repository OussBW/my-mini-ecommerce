import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
  const cart = ref([]);
  const cartTotalValue = computed(() =>
    cart.value.reduce(
      (acc, {product, quantity}) =>
        acc + quantity * product.price, 0
    ).toFixed(2)
  );

  const cartTotalItemsCount = computed(() =>
    cart.value.reduce(
      (acc, {quantity}) =>
        acc + quantity, 0
    )
  );

  const getCartItemById = (productId) => {
    return cart.value.find((item) => item.product.id === productId) ?? {};
  }

  const addToCart = (product) => {
    const cartItem = cart.value.find((item) => item.product.id === product.id);
    if (cartItem) {
      cartItem.quantity += 1;
      return;
    }
    cart.value.push({
      product,
      quantity: 1,
    });
  };

  const removeFromCart = (productId) => {
    const cartItemIndex = cart.value.findIndex(
      (item) => item.product.id === productId
    );
    const cartItem = cart.value.find((item) => item.product.id === productId);
    if (cartItem.quantity > 1) {
      cartItem.quantity -= 1;
    } else {
      cart.value.splice(cartItemIndex, 1);
    }
  };

  return { cart, cartTotalItemsCount, cartTotalValue, getCartItemById, addToCart, removeFromCart };
});
