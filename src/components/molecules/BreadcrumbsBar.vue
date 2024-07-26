<template>
  <div v-if="route.name !== 'home'" class="card flex justify-start !py-0 !pl-2">
    <Breadcrumb :home="home" :model="currentItem">
      <template #item="{ item, props }">
        <router-link
          v-if="item.route"
          v-slot="{ href, navigate }"
          :to="item.route"
          custom
        >
          <a :href="href" v-bind="props.action" @click="navigate">
            <span :class="[item.icon, 'text-color']" />
            <span class="text-primary font-semibold">{{ item.label }}</span>
          </a>
        </router-link>
        <a v-else :href="item.url" :target="item.target" v-bind="props.action">
          <span class="text-surface-700 dark:text-surface-0 font-semibold">
            {{ item.label }}
          </span>
        </a>
      </template>
    </Breadcrumb>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const home = ref({
  icon: "pi pi-home",
  route: "/",
});

const items = {
  productDetails: [{ label: "Product details", icon: "pi pi-shopping-bag" }],
  cart: [{ label: "Checkout", icon: "pi pi-shopping-cart" }],
};

// const currentItem = computed(() => items["productDetails"]);
const currentItem = ref([]);
watchEffect(() => {
  currentItem.value = items[route.name];
});
</script>
