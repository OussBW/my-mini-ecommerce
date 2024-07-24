import { useCartStore } from "../stores/cart";
import { useToast } from "primevue/usetoast";
import { useI18n } from "vue-i18n";

export const useProductActions = (loading, product) => {
  const toast = useToast();
  const { t } = useI18n();
  const { addToCart } = useCartStore();

  const addProductToCart = () => {
    loading.value = true;
    // I used a setTimeout to simulate an API call
    setTimeout(() => {
      addToCart(product);
      loading.value = false;
      toast.add({
        severity: "success",
        summary: t("toast.done"),
        detail: t("toast.added"),
        life: 3000,
      });
    }, 2000);
  };

  return { addProductToCart };
};
