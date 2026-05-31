export type Category = {
    id: number;
    name: string;
    slug: string;
};

export type CategoriesState = {
    lists: Category[];
    loading: boolean;
    error: string | null;
};