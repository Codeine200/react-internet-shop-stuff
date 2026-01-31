import { createBrowserRouter } from 'react-router-dom';
import {SingleLayout} from "@/app/layouts/SingleLayout.tsx";
import {CartPage} from "@/pages/CartPage/CartPage.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <SingleLayout />,
        children: [
            { path: 'cart', element: <CartPage /> },
        ],
    },
]);
