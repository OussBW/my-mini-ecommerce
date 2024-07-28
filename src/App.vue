<script setup lang="ts">
import HeaderToolbar from "@/components/organisms/HeaderToolbar.vue";
import BreadcrumbsBar from "@/components/molecules/BreadcrumbsBar.vue";
</script>

<template>
  <header>
    <HeaderToolbar />
  </header>
  <main>
    <BreadcrumbsBar />
    <RouterView />
  </main>
</template>
