import {Header} from "@/widgets/header";
import {Sidebar} from "@/widgets/sidebar";
import {Outlet} from "react-router-dom";
import { useEffect } from 'react';
import { getCategories } from '@/entities/categories/model';
import {useDispatch} from "react-redux";
import {Products} from "@/widgets/products/ui/Products";
import {Footer} from "@/widgets/footer/Footer";
import {trendingItems} from "@/shared/constants/trendingItems";
import {LoginForm} from "@/features/auth/sign-in/ui/LoginForm";

export const MainLayout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    return (
        <section className="body">

            <LoginForm/>
            <Header/>
            <div className="container content">
                <Sidebar/>
                <section className="right block">
                    <div className="main">
                        <Outlet/>
                    </div>
                </section>
            </div>

            <Products list={trendingItems} perPage={5} title="Trending Products"/>
            <Footer/>
        </section>
    );
};
