import { categories } from '@/shared/constants/categories';

export type PromotionProps = {
    id: number;
    productName: string;
    title1?: string;
    title2?: string;
    image?: {
        src: string;
        config?: {
            width?: string;
            height?: string;
            top?: string;
            right?: string;
            bottom?: string;
            left?: string;
        };
    };
};

type CategoryId = typeof categories[number]['id'];

export type PromotionsByCategory = Record<CategoryId, PromotionProps>;

