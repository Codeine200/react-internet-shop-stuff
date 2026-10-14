
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type ProductId = number;
type UserId = number;

interface FavoritesState {
    byUserId: Record<UserId, ProductId[]>;
}

const initialState: FavoritesState = {
    byUserId: {},
};

interface FavoritePayload {
    userId: UserId;
    productId: ProductId;
}

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite(state, action: PayloadAction<FavoritePayload>) {
            const { userId, productId } = action.payload;

            const favorites = state.byUserId[userId] ??= [];

            if (!favorites.includes(productId)) {
                favorites.push(productId);
            }
        },

        removeFavorite(state, action: PayloadAction<FavoritePayload>) {
            const { userId, productId } = action.payload;
            const favorites = state.byUserId[userId];

            if (favorites) {
                state.byUserId[userId] = favorites.filter(
                    id => id !== productId,
                );
            }
        },
    },
});

export const { addFavorite, removeFavorite } =
    favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
