<template>
    <MultiSelect
      v-model="selectedOptions"
      display="chip"
      :options
      optionLabel="name"
      filter
      :placeholder
      :maxSelectedLabels="4"
      class="w-full md:w-80"
    />
</template>

<script setup lang="ts">
defineProps({
  options: {
    type: Array,
    required: true,
  },
  placeholder: {
    type: String,
    default: "Select values",
  },
});

const selectedOptions = defineModel();
</script>
