<template>
  <Toolbar class="mb-4 flex flex-wrap justify-between items-center card !p-4" unstyled>
    <template #start>
      <RouterLink
        to="/"
        type="button"
        class="inline-flex w-full md:w-44 h-30 p-0 items-center justify-center surface-0 dark:surface-800 border border-surface-200 dark:border-surface-600 rounded"
      >
        <img
          class="object-cover h-full w-full"
          src="@/assets/img/logo.png"
          alt="logo"
        />
      </RouterLink>
    </template>

    <template #center>
      <div class="w-full flex-auto">
        <SearchBar />
      </div>
    </template>

    <template #end>
      <HeaderRight />
    </template>
  </Toolbar>
</template>

<script setup>
import HeaderRight from "../atoms/HeaderRight.vue";
import SearchBar from "./SearchBar.vue";
</script>
<style lang="css" scoped>
:deep([data-pc-section="center"]) {
  flex: 1 1 auto;
  margin: 1rem;
}
</style>
