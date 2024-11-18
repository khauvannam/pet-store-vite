<template>
  <div class="w-full pt-10 px-5 md:px-10 flex justify-center">
    <div class="w-full max-w-[1300px] flex gap-5 flex-wrap">
      <router-link
          v-for="category in categories"
          :key="category.id"
          :to="`/collections/${category.name}`"
          class="bg-blue-200 py-2 px-4 rounded-full border hover:border-[#00205c] text-main whitespace-nowrap min-w-[80px] text-center"
          active-class="active-category"
      >
        {{ category.name }}
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {Category} from "../../models/Category.ts";

export default defineComponent({
  name: 'Categories',
  props: {
    categories: {
      type: Object as PropType<Category[]>,
      required: true,
    },
  },
});
</script>

<style scoped>
/* Scoped styles for CategoryList */
</style>
