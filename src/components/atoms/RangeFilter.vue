<template>
  <div class="w-full flex justify-between mb-4 p-2">
    <InputNumber input-class="w-16" v-model="model[0]" disabled />
    <InputNumber input-class="w-16" v-model="model[1]" disabled />
  </div>
  <Slider v-model="model" :min :max range class="w-full" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const props = defineProps({
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  }
})

const model = defineModel()

onMounted(() => {
  if (!model.value?.length) {
    model.value = [props.min, props.max]
  }
})
</script>
