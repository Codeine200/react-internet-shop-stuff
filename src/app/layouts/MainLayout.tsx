import {Header} from "@/widgets/header";
import {Sidebar} from "@/widgets/sidebar";
import {Outlet} from "react-router-dom";
import { useEffect } from 'react';
import { getCategories } from '@/entities/categories/model';
import {useDispatch} from "react-redux";
import {Products} from "@/widgets/products/ui/Products.tsx";
import {products} from "@/shared/constants/products.ts";

export const MainLayout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    return (
        <>
            <Header/>
            <div className="container content">
                <Sidebar/>
                <section className="right block">
                    <div className="main">
                        <Outlet/>
                    </div>
                </section>
            </div>

            <Products lists={products}/>
        </>
    );
};
