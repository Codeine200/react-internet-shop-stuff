import { useAppSelector } from '@/app/providers/StoreProvider/config/hooks';
import { getIsAuthenticated } from './selectors';

export const useIsAuthenticated = () =>
    useAppSelector(getIsAuthenticated);
