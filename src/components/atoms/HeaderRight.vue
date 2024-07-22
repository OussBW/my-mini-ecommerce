<template>
  <ul class="flex list-none m-0 p-0 gap-2 items-center">
    <li>
      <ButtonCart />
    </li>
    <li>
      <LocaleSwitcher />
    </li>
    <li>
      <button
        type="button"
        class="inline-flex w-12 h-12 p-0 items-center justify-center surface-0 dark:surface-800 border border-surface-200 dark:border-surface-600 rounded"
        @click="onThemeToggler"
      >
        <i :class="`dark:text-white pi ${iconClass}`" />
      </button>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
import ButtonCart from "./ButtonCart.vue";
import LocaleSwitcher from "./LocaleSwitcher.vue";

const iconClass = ref("pi-moon");
const onThemeToggler = () => {
  const root = document.getElementsByTagName("html")[0];
  root.classList.toggle("p-dark");
  iconClass.value = iconClass.value === "pi-moon" ? "pi-sun" : "pi-moon";
};
</script>
