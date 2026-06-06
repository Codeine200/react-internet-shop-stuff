import {Header} from "@/widgets/header";
import {Sidebar} from "@/widgets/sidebar";
import {Outlet} from "react-router-dom";
import { useEffect } from 'react';
import { getCategories } from '@/entities/categories/model';
import {useDispatch} from "react-redux";
import {Footer} from "@/widgets/footer/Footer.tsx";
import {trendingItems} from "@/shared/constants/trendingItems.ts";
import {Catalog} from "@/widgets/catalog/ui/Catalogt.tsx";

export const CategoryLayout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    return (
        <section className="body">
            <Header/>
            <div className="container content">
                <Sidebar/>
                <section className="right block">
                    <div className="main">
                        <Outlet/>
                    </div>
                </section>
            </div>

            <Catalog perPage={5} />
            <Footer />
        </section>
    );
};
