import {createRouter, createWebHistory} from "vue-router";
import HomeView from "./pages/HomeView.vue";
import ProductDetailView from "./pages/ProductDetailView.vue";
import CollectionView from "./pages/CollectionView.vue";

const routes = [
    { path: '/', component: HomeView },
    { path: '/product/:id', component: ProductDetailView },
    { path: '/collections/:name', component: CollectionView },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})