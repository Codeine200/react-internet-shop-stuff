import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { categories } from '@/shared/constants/categories';
import {CategoriesState, Category} from './types';

export const getCategories = createAsyncThunk<
    Category[],
    void,
    { rejectValue: string }
>(
    'categories/getCategories',
    async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return categories;
    }
);

const initialState: CategoriesState = {
    lists: [],
    defaultCategoryId: null,
    loading: false,
    error: null,
};

const categoriesSlice =  createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.pending, (state: CategoriesState) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCategories.fulfilled, (state: CategoriesState, action) => {
                state.loading = false;
                state.lists = action.payload;
                state.defaultCategoryId = action.payload[0]?.id ?? null;
            })
            .addCase(getCategories.rejected, (state: CategoriesState, action) => {
                state.loading = false;
                state.error = action.payload  ?? 'Something went wrong';
            });
    },
});

export default categoriesSlice.reducer;