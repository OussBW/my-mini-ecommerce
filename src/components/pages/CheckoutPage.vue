<template>
  <div class="card flex justify-center">
    <Stepper value="1" class="basis-full">
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
          <component :is="step.component" class="w-full" />
          <div
            class="flex pt-6 justify-between"
            :class="{ '!justify-end': index === 0 }"
          >
            <Button
              v-if="index > 0"
              label="Previous"
              :disabled="!cartTotalItemsCount"
              icon="pi pi-arrow-left"
              iconPos="left"
              @click="activateCallback(getStepIndex(index - 1))"
            />
            <Button
              label="Next"
              :disabled="!cartTotalItemsCount"
              icon="pi pi-arrow-right"
              iconPos="right"
              @click="activateCallback(getStepIndex(index + 1))"
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

const getStepIndex = (index) => (index + 1).toString();
</script>
