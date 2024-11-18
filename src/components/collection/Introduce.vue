<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {Category} from "../../models/Category.ts";

export default defineComponent({
  name: 'CategoryComponent',
  props: {
    category: {
      type: Object as PropType<Category>,
      required: true,
    },
  },
});
</script>

<template>

  <template>
    <div class="flex w-full justify-center mt-4 px-5 md:px-10">
      <div class="flex max-w-[1300px] w-full flex-col md:flex-row justify-between">
        <div class="w-full md:w-5/12 flex flex-col justify-center mb-4 md:mb-0">
          <p class="text-sm text-main mt-2.5 font-light italic">
            Trusted, Effective Solutions
          </p>
          <h3 class="text-main text-[48px] font-bold mb-5 font-heading_bold">{{ category?.name }}</h3>
          <p class="my-4 text-main font-light text-sm">
            {{ category?.description }}
          </p>
        </div>
        <div class="w-full md:w-5/12">
          <img :src="category?.image" class="object-cover w-full h-full rounded-lg" alt=""/>
        </div>
      </div>
    </div>
  </template>

</template>

<style scoped>

</style>