import type { User } from '@/entities/users/model/types';

export type AuthState = {
    user: User | null;
    isLoading: boolean;
    error: string | null;
};
