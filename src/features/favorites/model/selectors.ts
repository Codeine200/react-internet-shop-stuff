
import type { RootState } from '@/app/providers/StoreProvider/config/store';

type UserId = number;
type ProductId = number;

export const selectFavoriteProductIds = (
    state: RootState,
    userId: UserId,
): ProductId[] => state.favorites.byUserId[userId] ?? [];

