import type { RootState } from '@/app/providers/StoreProvider/config/store';

export const selectIsLoginOpen = (state: RootState): boolean =>
    state.loginForm.isLoginOpen;