import type {Product} from "@/entities/products/model/type.ts";

export type CatalogProps = {
    list: Product[];
    perPage?: number;
    title: string;
}