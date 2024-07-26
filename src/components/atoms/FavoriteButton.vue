<template>
  <Button
    class="text-red"
    :icon="`pi pi-heart${model ? '-fill' : ''}`"
    @click="toggle"
    outlined
  />
</template>

<script setup>
import { ref } from "vue";

const model = ref(false);

const toggle = () => (model.value = !model.value);
</script>

<style scoped>
:deep(.p-button-icon) {
  color: rgb(214, 98, 117);
}
</style>
