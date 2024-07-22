<template>
  <Toolbar class="mb-4">
    <template #start>
      <RouterLink
        to="/"
        type="button"
        class="inline-flex w-44 h-30 p-0 items-center justify-center surface-0 dark:surface-800 border border-surface-200 dark:border-surface-600 rounded"
      >
        <img
          class="object-cover h-full w-full"
          src="@/assets/img/logo.png"
          alt="logo"
        />
      </RouterLink>
    </template>

    <template #center>
        <SearchBar />
    </template>

    <template #end>
      <HeaderRight />
    </template>
  </Toolbar>
</template>

<script setup>
import HeaderRight from '../atoms/HeaderRight.vue';
import SearchBar from './SearchBar.vue';
</script>
