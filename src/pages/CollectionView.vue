<script lang="ts">
import {defineComponent, onMounted, ref, watch} from 'vue';
import {useRoute} from "vue-router";
import {Product} from "../models/Product.ts";
import {getProductsByCategory} from "../services/productService.ts";
import {Category} from "../models/Category.ts";
import {getAllCategories} from "../services/categoryService.ts";
import Categories from "../components/collection/Categories.vue";
import ProductList from "../components/collection/Products.vue";

export default defineComponent({
  name: "CollectionView",
  components: {ProductList, Categories},

  setup() {
    const route = useRoute(); // Access route parameters
    const products = ref([]); // Initialize products as an empty array
    const categories = ref([]); // Initialize categories as an empty array
    const loading = ref(true); // A loading state to manage async calls

    const fetchProductByCategory = async (name) => {
      try {
        products.value = await getProductsByCategory(name);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    const fetchAllCategories = async () => {
      try {
        categories.value = await getAllCategories(10);
        console.log(categories.value);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        loading.value = false; // Stop loading when data is fetched
      }
    };

    // Watch the route's name parameter for changes
    watch(
        () => route.params.name,
        (newCategoryName) => {
          if (newCategoryName) {
            fetchProductByCategory(newCategoryName);
          }
        },
        {immediate: true} // Run immediately on initialization
    );

    onMounted(() => {
      fetchAllCategories();
    });

    return {products, categories, loading};
  },
});
</script>

<template>
  <!-- Show a loading message or a spinner until categories are fetched -->
  <div v-if="loading">Loading categories...</div>

  <!-- Pass the categories only after they are loaded -->
  <Categories v-if="!loading" :categories="categories"/>

  <!-- Pass the products to ProductList -->
  <ProductList :products="products"/>
</template>
