import {Promotion} from "@/widgets/promotion/ui/Promotion";
import {useEffect, useState} from "react";
import {promotions} from "@/widgets/promotion/model/promotions";
import {Loader} from "../../shared/ui/loader";

export const CategoryPage = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div>
            <Promotion {...promotions[1]} />
        </div>
    );
};
