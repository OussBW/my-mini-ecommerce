<template>
  <Button
    outlined
    class="inline-flex w-12 h-12 p-0 items-center justify-center surface-0 dark:surface-800 border border-surface-200 dark:border-surface-600 rounded"
    @click="toggle"
    aria-haspopup="true"
    aria-controls="overlay_menu"
  >
    <i class="dark:text-white pi pi-globe" />
  </Button>

  <Menu ref="menu" id="overlay_menu" :model="items" :popup="true">
    <template #item="{ item, props }">
      <a v-ripple class="flex items-center" v-bind="props.action" @click="switchLocale(item.value)">
        <img
          :alt="item.flag"
          src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
          :class="`mr-2 flag flag-${item.flag}`"
          style="width: 18px"
        />
        <span>{{ item.label }}</span>
        <i
          v-if="item.value === locale"
          class="pi pi-check ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"
        />
      </a>
    </template>
  </Menu>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const menu = ref()
const items = ref([
  {
    label: 'Language:',
    items: [
      {
        label: 'FR',
        flag: 'fr',
        value: 'fr'
      },
      {
        label: 'EN',
        flag: 'gb',
        value: 'en'
      }
    ]
  }
])

const switchLocale = (value: string) => (locale.value = value)
const toggle = (event: Event) => {
  menu.value.toggle(event)
}
</script>
