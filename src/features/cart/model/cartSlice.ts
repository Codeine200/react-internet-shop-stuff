import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type UserId = number;
type ProductId = number;

export interface CartItem {
    productId: ProductId;
    quantity: number;
}

interface CartState {
    byUserId: Record<UserId, CartItem[]>;
}

interface CartPayload {
    userId: UserId;
    productId: ProductId;
}

interface ChangeQuantityPayload extends CartPayload {
    quantity: number;
}

const initialState: CartState = {
    byUserId: {},
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<CartPayload>) {
            const { userId, productId } = action.payload;

            const cart = (state.byUserId[userId] ??= []);
            const item = cart.find(
                (item) => item.productId === productId,
            );

            if (item) {
                item.quantity += 1;
            } else {
                cart.push({ productId, quantity: 1 });
            }
        },

        removeFromCart(state, action: PayloadAction<CartPayload>) {
            const { userId, productId } = action.payload;
            const cart = state.byUserId[userId];

            if (cart) {
                state.byUserId[userId] = cart.filter(
                    (item) => item.productId !== productId,
                );
            }
        },

        changeQuantity(
            state,
            action: PayloadAction<ChangeQuantityPayload>,
        ) {
            const { userId, productId, quantity } = action.payload;
            const item = state.byUserId[userId]?.find(
                (item) => item.productId === productId,
            );

            if (item && quantity > 0) {
                item.quantity = quantity;
            }
        },

        clearCart(state, action: PayloadAction<UserId>) {
            state.byUserId[action.payload] = [];
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    changeQuantity,
    clearCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
