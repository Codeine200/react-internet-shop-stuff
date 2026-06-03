export type Product = {
    id: number;
    name: string;
    type: string;
    price: number;
    discount?: number;
    purchasedCount: number;
    imgSrc: string;
};