export type Product = {
    id: number;
    name: string;
    type: string;
    price: number;
    purchasedCount: number;
    imgSrc: string;
    description?: string;
    discount?: number;
};