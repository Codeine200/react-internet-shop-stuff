import { categories } from '@/shared/constants/categories';

export type PromotionProps = {
    id: number;
    productName: string;
    title1?: string;
    title2?: string;
    image?: string;
};

type CategoryId = typeof categories[number]['id'];

export type PromotionsByCategory = Record<CategoryId, PromotionProps>;

