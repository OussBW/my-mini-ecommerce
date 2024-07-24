<template>
  <div class="card flex justify-center">
    <Stepper value="1" class="basis-[50rem]">
      <StepList>
        <Step
          v-for="(step, index) in stepList"
          :key="'stepTitle-' + index"
          :value="getStepIndex(index)"
          :disabled="!cartTotalItemsCount"
        >
          {{ step.title }}
        </Step>
      </StepList>
      <StepPanels>
        <StepPanel
          v-for="(step, index) in stepList"
          :key="'stepBody-' + index"
          v-slot="{ activateCallback }"
          :value="getStepIndex(index)"
        >
          <component :is="step.component" />
          <div class="flex pt-6 justify-end">
            <Button
              label="Next"
              :disabled="!cartTotalItemsCount"
              icon="pi pi-arrow-right"
              iconPos="right"
              @click="activateCallback(getStepIndex(index))"
            />
          </div>
        </StepPanel>
      </StepPanels>
    </Stepper>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCartStore } from "../../stores/cart";
import { defineAsyncComponent } from "vue";

const CartStep = defineAsyncComponent(
  () => import("../organisms/CartStep.vue")
);
const { cartTotalItemsCount } = storeToRefs(useCartStore());

const stepList = [
  {
    title: "Cart overview",
    component: CartStep,
  },
  {
    title: "Delivery options",
    component: "div",
  },
  {
    title: "Payment",
    component: "div",
  },
];

const getStepIndex = (index) => (index + 1).toString()
</script>
