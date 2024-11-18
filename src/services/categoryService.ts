import axios from 'axios';
import {AppConstants} from "../constant.ts";

// Replace with your actual API URL
const API_URL = `${AppConstants.API_URL}/api/categories`;

/**
 * Fetch all categories from the API.
 * @returns {Promise<Category[]>}
 */
export async function getAllCategories(limit: number = 4) {
    const result = await axios.get(`${API_URL}?limit=${limit}`);
    return result.data;
}