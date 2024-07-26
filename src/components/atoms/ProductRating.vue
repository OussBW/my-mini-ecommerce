<template>
  <div class="bg-surface-100 p-1" style="border-radius: 30px">
    <button
      class="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2 toggle-btn"
      @click="pop.toggle"
    >
      <span class="text-surface-900 font-medium text-sm">{{ rating }}</span>
      <i class="pi pi-star-fill text-yellow-500"></i>
    </button>
  </div>
  <Popover ref="pop">
    <Rating v-model="userRating" />
  </Popover>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  rating: {
    type: String,
    required: true,
  },
});

const userRating = ref(0);
const pop = ref();
</script>

<style scoped>
.toggle-btn {
  border-radius: 30px;
  box-shadow:
    0px 1px 2px 0px rgba(0, 0, 0, 0.04),
    0px 1px 2px 0px rgba(0, 0, 0, 0.06);
}
/* overriding PrimeVue star component style to make stars orange rather than black */
:deep(.p-rating-on-icon) {
  color: orange !important;
}
</style>
