import { configureStore } from '@reduxjs/toolkit';
import { categoriesReducer } from '@/entities/categories/model';
import {productsReducer} from "@/entities/products/model/productsSlice.ts";

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        products: productsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;