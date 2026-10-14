import type { RootState } from '@/app/providers/StoreProvider/config/store';

export const getIsAuthenticated = (state: RootState): boolean =>
    state.auth.user !== null;