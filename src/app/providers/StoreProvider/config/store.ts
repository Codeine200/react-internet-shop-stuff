import { configureStore } from '@reduxjs/toolkit';
import { categoriesReducer } from '@/entities/categories/model';
import {productsReducer} from "@/entities/products/model/productsSlice";
import {authReducer} from "@/features/auth/sign-in/model/authSlice";
import {loginFormReducer} from "@/features/auth/sign-in/model/loginFormSlice.ts";

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        products: productsReducer,
        auth: authReducer,
        loginForm: loginFormReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;