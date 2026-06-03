import type {Product} from "@/entities/products/model/type.ts";

export type ProductsProps = {
    list: Product[];
    perPage?: number;
    title: string;
}