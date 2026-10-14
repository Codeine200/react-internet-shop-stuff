import { configureStore } from '@reduxjs/toolkit';
import { categoriesReducer } from '@/entities/categories/model';
import {productsReducer} from "@/entities/products/model/productsSlice";
import {authReducer} from "@/features/auth/sign-in/model/authSlice";
import { loginFormReducer } from '@/features/auth/sign-in/model/loginFormSlice';
import { favoritesReducer } from '@/features/favorites/model/favoritesSlice';

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        products: productsReducer,
        auth: authReducer,
        loginForm: loginFormReducer,
        favorites: favoritesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;