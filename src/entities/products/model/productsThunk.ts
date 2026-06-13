import {createAsyncThunk} from "@reduxjs/toolkit";
import type {Product} from "./types";
import {products} from "@/shared/constants/products.ts";


export interface GetProductsParams {
    categoryId?: number;
    search?: string;
    name?: string;
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

            if (params.categoryId != null) {
                result = result[params.categoryId] ?? [];

                if (params.name) {
                    const search = params.name.toLowerCase();

                    result = result.filter(p =>
                            p.name.toLowerCase().includes(search)
                        );
                }

                if (params.minPrice !== undefined) {
                    result = result.filter(
                        p => p.price >= params.minPrice
                    );
                }
            } else if (params.search) {
                const search = params.search.toLowerCase();

                result = result.flat().filter(p =>
                    p.name.toLowerCase().includes(search) ||
                    p.description.toLowerCase().includes(search) ||
                    p.type.toLowerCase().includes(search)
                );
            }

            return result;
        } catch (e) {
            return thunkApi.rejectWithValue("Failed to load products");
        }
    }
);