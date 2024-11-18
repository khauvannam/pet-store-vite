<script lang="ts">
import {defineComponent, onMounted, ref, watch} from 'vue';
import {useRoute} from "vue-router";
import {getProductsByCategory} from "../services/productService.ts";
import {getAllCategories} from "../services/categoryService.ts";
import Categories from "../components/collection/Categories.vue";
import ProductList from "../components/collection/Products.vue";
import {Category} from "../models/Category.ts";
import {Product} from "../models/Product.ts";

export default defineComponent({
  name: "CollectionView",
  components: {ProductList, Categories},

  setup() {
    const route = useRoute();
    const products = ref<Product[]>([]);
    const categories = ref<Category[]>([]);
    const loading = ref(true);

    const fetchProductByCategory = async (name: string) => {
      try {
        products.value = await getProductsByCategory(name);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const fetchAllCategories = async () => {
      try {
        categories.value = await getAllCategories(10); // Fetch top 10 categories
        console.log(categories.value);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        loading.value = false; // Stop loading after fetching categories
      }
    };

    watch(
        () => route.params.name,
        (newCategoryName: string | undefined | string[]) => {
          if (typeof newCategoryName === 'string' && newCategoryName) {
            fetchProductByCategory(newCategoryName);
          }
        },
        {immediate: true}
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
