<template>
  <div class="w-full px-4 md:px-10 py-10 bg-[#f0f5ff] text-main flex justify-center">
    <div class="w-full max-w-[1440px]">
      <div class="flex justify-between capitalize px-4">
        <h1 class="text-xl md:text-2xl font-extrabold font-heading">Best Sellers</h1>
        <h3>
          <router-link to="/collections/all" class="underline">Shop all</router-link>
        </h3>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
        <template v-if="products && products.length > 0">
          <router-link
              v-for="product in products"
              :key="product.id"
              class="flex flex-col justify-between bg-[#f0f5ff] items-center rounded-lg p-4"
              :to="`product/${product.id}`">
            <div class="relative w-full flex justify-center bg-white rounded-lg">
              <img
                  class="h-[168px] object-cover w-full rounded-lg"
                  :src="product.image"
                  :alt="product.name"
              />
              <span
                  class="text-main bg-[#FADC6F] absolute h-6 rounded-full flex items-center px-2.5 text-sm font-medium left-2.5 top-2.5"
              >
                Best Seller
              </span>
            </div>
            <p class="text-center my-4 text-xl font-bold w-full">{{ product.name }}</p>
            <p class="mb-5">{{ limitDescription(product.description) }}</p>
            <div class="w-full">
              <custom-button :value="'Learn More'"/>
            </div>
          </router-link>
        </template>
        <template v-else>
          <div
              v-for="i in 4"
              :key="i"
              role="status"
              class="max-w-sm p-4 rounded animate-pulse md:p-6 min-w-[300px]"
          >
            <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded">
              <svg
                  class="w-10 h-10 text-gray-200"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
              >
                <path
                    d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"
                />
                <path
                    d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"
                />
              </svg>
            </div>
            <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
            <div class="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full"></div>
            <span class="sr-only">Loading...</span>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import {PropType} from "vue";
import {Product} from "../../models/Product.ts";
import CustomButton from "../CustomButton.vue";

export default {
  name: "BestSeller",
  components: {
    CustomButton,
  },
  props: {
    products: {
      type: Array as PropType<Product[]>,
      required: true,
    },
  },
  methods: {
    limitDescription(description: string) {
      return description.length > 50
          ? description.substring(0, 50) + "..."
          : description;
    },
  },
};
</script>

<style scoped>
/* Add any additional component-specific styling here */
</style>
