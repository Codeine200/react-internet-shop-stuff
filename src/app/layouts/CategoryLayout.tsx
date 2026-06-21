import {Header} from "@/widgets/header";
import {Sidebar} from "@/widgets/sidebar";
import {Outlet} from "react-router-dom";
import { useEffect } from 'react';
import { getCategories } from '@/entities/categories/model';
import {useDispatch} from "react-redux";
import {Footer} from "@/widgets/footer";
import {Catalog} from "@/widgets/catalog";
import {LoginForm} from "@/features/auth/sign-in/ui/LoginForm";

export const CategoryLayout = () => {
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

            <Catalog perPage={5}/>
            <Footer/>
        </section>
    );
};
