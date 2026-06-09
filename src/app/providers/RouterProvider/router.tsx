import { createBrowserRouter } from 'react-router-dom';
import {SingleLayout} from "@/app/layouts/SingleLayout";
import {MainLayout} from "@/app/layouts/MainLayout";
import {CartPage} from "@/pages/CartPage";
import {CategoryPage} from "@/pages/CategoryPage";
import {NotFoundPage} from "@/pages/NotFoundPage";
import {CategoryLayout} from "../../layouts/CategoryLayout.tsx";
import {ProductDetailsPage} from "../../../pages/ProductDetailsPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <CategoryPage /> },
        ],
    },
    {
        element: <CategoryLayout />,
        children: [
            { path: "categories/:categoryId", element: <CategoryPage /> },
        ],
    },
    {
        element: <SingleLayout />,
        children: [
            { path: "cart", element: <CartPage /> },
            { path: "products/:productId", element: <ProductDetailsPage /> },
        ],
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);
