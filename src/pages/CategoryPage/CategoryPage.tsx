import {Promotion} from "@/widgets/promotion/ui/Promotion";
import {useEffect, useState} from "react";
import {promotions} from "@/widgets/promotion/model/promotions";
import {Loader} from "../../shared/ui/loader";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import type {RootState} from "@/app/store";

export const CategoryPage = () => {
    const [isLoadingPromotion, setIsLoadingPromotion] = useState(true);
    const { categoryId } = useParams<{ categoryId: number }>();
    const { defaultCategoryId, loading, error } = useSelector(
        (state: RootState) => state.categories
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoadingPromotion(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    if (isLoadingPromotion || loading) {
        return <Loader />;
    }

    return (
        <div>
            <Promotion {...promotions[categoryId ?? defaultCategoryId]} />
        </div>
    );
};
