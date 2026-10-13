import {createAsyncThunk} from "@reduxjs/toolkit";
import type {Product} from "./type";
import {products} from "@/shared/constants/products";
import type {RootState} from "@/app/providers/StoreProvider/config/store";

export const getProducts = createAsyncThunk<
    Product[],
    void,
    { rejectValue: string }
>(
    "products/getProducts",
    async (_, thunkApi) => {
        try {
            const state = thunkApi.getState() as RootState;

            const {
                categoryId,
                search,
                name,
                minPrice,
            } = state.products;

            let result: Product[];
            
            if (categoryId != null) {
                result = products[categoryId] ?? [];
            } else {
                result = products.flat();
            }

            if (search) {
                const filter = search.toLowerCase();

                result = result.filter(p =>
                    p.name.toLowerCase().includes(filter) ||
                    p.description?.toLowerCase().includes(filter) ||
                    p.type.toLowerCase().includes(filter)
                );
            }

            if (name) {
                const filter = name.toLowerCase();

                result = result.filter(p =>
                    p.name.toLowerCase().includes(filter)
                );
            }

            if (minPrice !== undefined) {
                result = result.filter(
                    p => p.price >= minPrice
                );
            }

            return result;
        } catch {
            return thunkApi.rejectWithValue(
                "Failed to load products"
            );
        }
    }
);
