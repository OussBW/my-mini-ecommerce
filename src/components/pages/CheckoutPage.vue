<template>
  <div class="card flex justify-center">
    <Stepper value="1" class="basis-[50rem]">
      <StepList>
        <Step value="1">Cart overview</Step>
        <Step value="2">Delivery options</Step>
        <Step value="3">Payment</Step>
      </StepList>
      <StepPanels>
        <StepPanel v-slot="{ activateCallback }" value="1">
          <div class="w-full h-full">
            <div
              class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
            >
              <DataView :value="cart" layout="list">
                <template #list="slotProps">
                  <div class="flex flex-col w-full p-4">
                    <template v-if="loading">
                      <ProductCardSkeleton
                        v-for="index in 12"
                        :key="index"
                        :layout
                      />
                    </template>
                    <template v-else>
                      <CartProductCard
                        v-for="(item, index) in slotProps.items"
                        :key="index"
                        :item="item"
                        layout="list"
                        :loading
                      />
                    </template>
                  </div>
                </template>
                <template #empty>
                  <div class="p-4">
                  There are no items in cart yet,
                  <RouterLink to="/"
                    >click here to check our products!</RouterLink
                  >
                </div>
                </template>
                <template v-if="cartTotalValue" #footer>
                  <div class="flex w-full justify-end">
                    Total:
                    <span class="ml-2 font-bold">{{ cartTotalValue }}$</span>
                  </div>
                </template>
              </DataView>
            </div>
          </div>
          <div class="flex pt-6 justify-end">
            <Button
              label="Next"
              :disabled="!cartTotalItemsCount"
              icon="pi pi-arrow-right"
              iconPos="right"
              @click="activateCallback('2')"
            />
          </div>
        </StepPanel>
        <StepPanel v-slot="{ activateCallback }" value="2">
          <div class="flex flex-col h-48">
            <div
              class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
            >
              Content II
            </div>
          </div>
          <div class="flex pt-6 justify-between">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              @click="activateCallback('1')"
            />
            <Button
              label="Next"
              :disabled="cartTotalValue === 0"
              icon="pi pi-arrow-right"
              iconPos="right"
              @click="activateCallback('3')"
            />
          </div>
        </StepPanel>
        <StepPanel v-slot="{ activateCallback }" value="3">
          <div class="flex flex-col h-48">
            <div
              class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
            >
              Content III
            </div>
          </div>
          <div class="pt-6">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              @click="activateCallback('2')"
            />
          </div>
        </StepPanel>
      </StepPanels>
    </Stepper>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "../../stores/cart";
import { storeToRefs } from "pinia";
import CartProductCard from "../molecules/CartProductCard.vue";

const loading = ref(false);
const { cart, cartTotalValue, cartTotalItemsCount } = storeToRefs(useCartStore());
</script>

<style lang="scss" scoped></style>
