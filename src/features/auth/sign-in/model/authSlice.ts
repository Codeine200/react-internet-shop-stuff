import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from './types';
import { loginThunk } from './loginThunk';

const initialState: AuthState = {
    user: null,
    isLoading: false,
    error: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.user = null;
            state.error = null;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(loginThunk.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
            })
            .addCase(loginThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload ?? 'Login failed';
            });
    },
});

export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;