import { User } from '@/entities/user/model/types';

export type AuthState = {
    user: User | null;
    isLoading: boolean;
    error: string | null;
};