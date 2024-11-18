<script lang="ts">

import {onMounted, ref} from 'vue';
import Slider from '../components/home/Slider.vue';
import Discover from '../components/home/Discover.vue';
import Science from '../components/home/Science.vue';
import Feature from '../components/home/Feature.vue';
import BestSeller from '../components/home/BestSeller.vue';
import Collection from '../components/home/Collection.vue';
import Location from '../components/home/Location.vue';
import {getAllProducts} from '../services/productService';
import {getAllCategories} from "../services/categoryService"; // Adjust the path as needed

export default {
  name: 'Home',
  components: {
    Slider,
    Discover,
    Science,
    Feature,
    BestSeller,
    Collection,
    Location,
  },
  setup() {
    const products = ref([]);
    const categories = ref([]);

    const fetchProducts = async () => {
      try {
        products.value = await getAllProducts();
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    const fetchCategories = async () => {
      try {
        categories.value = await getAllCategories();
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    onMounted(() => {
      fetchProducts();
      fetchCategories();
    });

    return {
      products,
      categories,
    };
  },
};
</script>

<template>
  <div>
    <Slider/>
    <Discover :categories="categories"/>
    <Science/>
    <BestSeller :products="products"/>
    <Feature/>
    <Collection :categories="categories"/>
    <Location/>
  </div>
</template>

<style scoped>
/* Add your styles here */
</style>
