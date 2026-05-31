import { createBrowserRouter } from 'react-router-dom';
import {SingleLayout} from "@/app/layouts/SingleLayout";
import {MainLayout} from "@/app/layouts/MainLayout";
import {CartPage} from "@/pages/CartPage";
import {CategoryPage} from "@/pages/CategoryPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <CategoryPage /> },
        ],
    },
    {
        element: <SingleLayout />,
        children: [
            { path: 'cart', element: <CartPage /> },
        ],
    },
]);
