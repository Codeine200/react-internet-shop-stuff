import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {getProducts} from "./productsThunk";
import type {Product} from "./types";

interface ProductsState {
    items: Product[];
    loading: boolean;
    error: string | null;

    categoryId?: number;
    name?: string;
    search: string;
    minPrice?: number;
}

const initialState: ProductsState = {
    items: [],
    loading: false,
    error: null,

    categoryId: undefined,
    name: "",
    search: "",
    minPrice: undefined,
};

export const productsSlice = createSlice({
    name: "products",

    initialState,

    reducers: {
        setCategory(state, action: PayloadAction<number | undefined>) {
            state.categoryId = action.payload;
        },

        setSearch(state, action: PayloadAction<string>) {
            state.search = action.payload;
            state.categoryId = undefined;
        },

        setName(state, action: PayloadAction<string>) {
            state.name = action.payload;
        },

        setMinPrice(state, action: PayloadAction<number | undefined>) {
            state.minPrice = action.payload;
        },

        resetFilters(state) {
            state.categoryId = undefined;
            state.search = "";
            state.name = "";
            state.minPrice = undefined;
        },
    },

    extraReducers: builder => {
        builder
            .addCase(getProducts.pending, state => {
                state.loading = true;
                state.error = null;
            })

            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })

            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    action.payload ?? "Failed to load products";
            });
    },
});

export const {
    setCategory,
    setSearch,
    setName,
    setMinPrice,
    resetFilters,
} = productsSlice.actions;

export const productsReducer = productsSlice.reducer;