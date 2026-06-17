import {Header} from "@/widgets/header";
import {Sidebar} from "@/widgets/sidebar";
import {Outlet} from "react-router-dom";
import { useEffect } from 'react';
import { getCategories } from '@/entities/categories/model';
import {useDispatch} from "react-redux";
import {LoginForm} from "@/features/auth/sign-in/ui/LoginForm";

export const SingleLayout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    return (
        <section className="body">
            <div className="overlay"></div>
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
        </section>
    )
        ;
};
