<template>
  <Toast />
  <div class="flex flex-col md:items-end gap-8">
    <span class="text-xl font-semibold">${{ product.price }}</span>
    <div class="flex flex-row-reverse md:flex-row gap-2">
      <Button icon="pi pi-heart" outlined></Button>
      <InputGroup>
        <InputGroupAddon>
          <Button
            :icon="productCount > 1 ? 'pi pi-minus' : 'pi pi-trash'"
            class="flex-auto md:flex-initial whitespace-nowrap"
            @click="removeProductFromCart"
          />
        </InputGroupAddon>
        <InputNumber v-model="productCount" />
        <InputGroupAddon
          ><Button
            :icon="'pi pi-plus'"
            class="flex-auto md:flex-initial whitespace-nowrap"
            @click="addProductToCart"
          />
        </InputGroupAddon>
      </InputGroup>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "../../stores/cart";
import InputNumber from "primevue/inputnumber";
const props = defineProps({
  product: { type: Object, required: true },
  quantity: { type: Number, required: true },
});

const emit = defineEmits(['increment', 'decrement'])
const productCount = ref(props.quantity)

const {addToCart, removeFromCart} = useCartStore()

const addProductToCart = () => {
  addToCart(props.product)
  productCount.value +=1
}
const removeProductFromCart = () => {
  removeFromCart(props.product.id)
  productCount.value -=1
}

</script>
