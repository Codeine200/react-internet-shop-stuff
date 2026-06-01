export type Category = {
    id: number;
    name: string;
    slug: string;
};

export type CategoriesState = {
    lists: Category[];
    defaultCategoryId: number | null;
    loading: boolean;
    error: string | null;
};