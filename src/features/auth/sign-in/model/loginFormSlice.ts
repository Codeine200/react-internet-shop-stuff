import {createSlice} from "@reduxjs/toolkit";

const loginFormSlice = createSlice({
    name: 'ui',
    initialState: {
        isLoginOpen: false,
    },
    reducers: {
        openLogin: (state) => {
            state.isLoginOpen = true;
        },
        closeLogin: (state) => {
            state.isLoginOpen = false;
        },
    },
});

export const loginFormReducer = loginFormSlice.reducer;