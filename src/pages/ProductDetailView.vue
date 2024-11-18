<template>
  <div class="w-full">
    <div class="flex justify-center">
      <div class="w-full max-w-[1440px] flex mt-6">
        <div class="w-6/12">
          <img class="rounded-lg shadow-xl" :src="product?.image" alt=""/>
        </div>
        <div class="w-6/12">
          <Detail :product="product"/>
        </div>
      </div>
    </div>
    <div class="pt-4">
      <Overview :productName="product?.name"/>
    </div>
    <div class="pt-4">
      <Discussion/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue';
import {useRoute} from 'vue-router';
import {getProductById} from "../services/productService.ts";
import Discussion from "../components/productDetail/Discussion.vue";
import Detail from "../components/productDetail/Detail.vue";
import Overview from "../components/productDetail/Overview.vue";
import {Product} from "../models/Product.ts"; // Assuming this is a custom service to fetch product data

export default defineComponent({
  name: 'ProductDetailComponent',
  components: {
    Detail,
    Discussion,
    Overview,
  },
  setup() {
    const route = useRoute(); // To access route parameters
    const product = ref<Product | null>(null); // Store the product data

    // Fetch the product when the component is mounted
    onMounted(() => {
      const productId = route.params.id as string; // Get product ID from route params
      if (productId) {
        const id = Number(productId); // Convert to a number
        if (!isNaN(id)) {
          fetchProductById(id); // Fetch the product by ID
        } else {
          console.error('Invalid product ID');
        }
      }
    });

    // Function to fetch the product by ID
    const fetchProductById = async (id: number) => {
      try {
        // Fetch product from service
        product.value = await getProductById(id); // Set the product data
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    return {product};
  },
});
</script>

<style scoped>
/* Add your styles here */
</style>
