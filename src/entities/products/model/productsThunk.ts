import {createAsyncThunk} from "@reduxjs/toolkit";
import type {Product} from "./types";

// mock data
import {products} from "./mockProducts";

export interface GetProductsParams {
    categoryId?: number;
    search?: string;
    minPrice?: number;
}

export const getProducts = createAsyncThunk<
    Product[],
    GetProductsParams,
    { rejectValue: string }
>(
    "products/getProducts",
    async (params, thunkApi) => {
        try {
            await new Promise(res => setTimeout(res, 400));

            let result = products;

            // category filter
            if (params.categoryId) {
                result = result.filter(
                    p => p.category.id === params.categoryId
                );
            }

            // search filter
            if (params.search) {
                const search = params.search.toLowerCase();

                result = result.filter(p =>
                    p.title.toLowerCase().includes(search)
                );
            }

            // min price filter
            if (params.minPrice !== undefined) {
                result = result.filter(
                    p => p.price >= params.minPrice!
                );
            }

            return result;
        } catch (e) {
            return thunkApi.rejectWithValue("Failed to load products");
        }
    }
);