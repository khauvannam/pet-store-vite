import axios from 'axios';
import {AppConstants} from "../constant.ts";

// Replace with your actual API URL
const apiUrl = `${AppConstants.API_URL}/api/products`;

/**
 * Fetch all products from the API.
 * @returns Promise<Product[]>
 */
export async function getAllProducts() {
    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
}

export async function getProductById(id: number) {
    try {
        const response = await axios.get(`${apiUrl}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching product with ID ${id}:`, error);
        throw error;
    }
}

export async function getProductsByCategory(categoryName: string)  {
    try {
        const response = await axios.get(`${apiUrl}/collection/${categoryName}`);
        console.log(categoryName);
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.error(`Error fetching collection: ${error}`);
        throw error;
    }
}
