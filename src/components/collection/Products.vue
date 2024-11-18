<template>
  <div class="w-full flex justify-center">
    <div class="w-full max-w-[1440px]">
      <div class="grid grid-cols-2 gap-x-[30px] gap-y-[60px] ipadpro:grid-cols-4 ipadpro:gap-y-[80px]">
        <ProductCard
            v-for="(product, index) in products.slice(0, 2)"
            :key="index"
            :productsInList="product"
        />
      </div>

      <!-- Second Grid with the remaining products -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
        <ProductCard
            v-for="(product, index) in products.slice(2)"
            :key="index"
            :productsInList="product"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {Product} from "../../models/Product.ts";
import ProductCard from "../cards/ProductCard.vue"; // Assuming ProductCard is in the same directory

export default defineComponent({
  name: 'ProductList',
  components: {
    ProductCard,
  },
  props: {
    products: {
      type: Array as PropType<Product[]>,
      required: true,
    },
  },
});
</script>

<style scoped>
/* Add any custom styles if necessary */
</style>
