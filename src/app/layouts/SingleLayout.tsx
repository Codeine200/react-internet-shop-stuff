import type { JSX } from 'react';
import {Header} from "@/widgets/header";
import {Sidebar} from "@/widgets/sidebar";
import {Outlet} from "react-router-dom";

export const SingleLayout = (): JSX.Element => {
  return (
    <>
        <Header />
        <div className="container content">
            <Sidebar />
            <section className="right block">
                <div className="main">
                    <Outlet />
                </div>
            </section>
        </div>

    </>
  );
};
