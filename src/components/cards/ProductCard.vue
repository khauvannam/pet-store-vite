<template>
  <div class="flex flex-col justify-between items-center rounded-lg mt-12 pb-4 shadow-sm-light">
    <router-link :to="`/product/${productsInList.id}`" class="w-full">
      <div class="flex justify-center bg-white rounded-lg relative shadow-product overflow-hidden">
        <img
            class="h-[350px] object-cover w-full rounded-lg hover:scale-125 transition-all duration-200 ease-in"
            :src="productsInList.image"
            :alt="productsInList.name"
            @error="handleImageError"
        />
        <!-- Optional: Add "Best Seller" if SoldQuantity > 100 -->
        <span
            v-if="productsInList.stock > 100"
            class="text-main bg-[#FADC6F] absolute h-6 rounded-full flex items-center px-2.5 text-sm font-medium left-2.5 top-2.5"
        >
          Best Seller
        </span>
      </div>
    </router-link>

    <div class="w-full flex flex-col">
      <div class="flex items-center w-full">
        <p class="my-4 text-xl font-semibold w-full font-heading_bold truncate">{{ productsInList.name }}</p>
      </div>
      <p class="pb-4 font-light italic w-full truncate">{{ productsInList.description.slice(0, 30) }}...</p>

      <div class="flex lg:items-center my-5 w-full lg:flex-row flex-col items-start">
        <div class="text-2xl font-bold text-main">
          ${{ productsInList.price }}
        </div>
        <div class="text-gray-500 line-through mx-3">
          ${{ productsInList.price.toFixed(2) }}
        </div>
      </div>

      <div class="w-full max-w-[300px]">
        <CustomButton :value="'Add To Cart'"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import CustomButton from "../CustomButton.vue";
import {Product} from "../../models/Product.ts";

export default defineComponent({
  name: 'ProductCard',
  components: {
    CustomButton,
  },
  props: {
    productsInList: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  methods: {
    handleImageError() {
      this.productsInList.image = '/path/to/default-image.jpg'; // Replace with your default image URL
    },

  },
});
</script>

<style scoped>
/* Scoped styles for ProductCard */
</style>
