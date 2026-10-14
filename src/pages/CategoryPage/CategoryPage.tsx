import {Promotion} from "@/widgets/promotion/";
import {useEffect, useState} from "react";
import {Loader} from "@/shared/ui/loader";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import type { RootState } from '@/app/providers/StoreProvider/config/store';
import {NotFound} from "@/shared/ui/not-found";
import { promotions } from "@/shared/constants/promotions";
import type { CategoryId } from "@/widgets/promotion/model/types";

export const CategoryPage = () => {
    const [isLoadingPromotion, setIsLoadingPromotion] = useState(true);
    const { categoryId } = useParams<{ categoryId: string }>();
    const { defaultCategoryId, loading } = useSelector(
        (state: RootState) => state.categories
    );

    const id = categoryId ? Number(categoryId) : NaN;
    const index = Number.isInteger(id) ? id : defaultCategoryId;

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoadingPromotion(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    if (
        index === null ||
        !Number.isInteger(index) ||
        !(index in promotions)
    ) {
        return <NotFound title="Category not found" />;
    }

    if (isLoadingPromotion || loading) {
        return <Loader />;
    }

    const categoryKey = index as CategoryId;  
    return (
        <div>
            <Promotion {...promotions[categoryKey]} />
        </div>
    );
};

