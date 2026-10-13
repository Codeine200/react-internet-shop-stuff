import {Header} from "@/widgets/header";
import {Sidebar} from "@/widgets/sidebar";
import {Outlet} from "react-router-dom";
import { useEffect } from 'react';
import { getCategories } from '@/entities/categories/model';
import { useAppDispatch } from "@/app/providers/StoreProvider/config/hooks";
import {LoginForm} from "@/features/auth/sign-in/ui/LoginForm";
import {Footer} from "@/widgets/footer";

export const SingleLayout = () => {
    const dispatch = useAppDispatch();

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
            <Footer/>
        </section>
    )
};
