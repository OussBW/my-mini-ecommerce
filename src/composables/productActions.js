import { useCartStore } from "../stores/cart";
import { useToast } from "primevue/usetoast";

export const useProductActions = (loading, product) => {
  const { addToCart } = useCartStore();
  const toast = useToast();
  const addProductToCart = () => {
    loading.value = true;
    // I used a setTimeout to simulate an API call
    setTimeout(() => {
      addToCart(product);
      loading.value = false;
      toast.add({
        severity: "success",
        summary: "Done!",
        detail: "Product added to cart",
        life: 3000,
      });
    }, 2000);
  };

  return { addProductToCart }
};
