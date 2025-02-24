import { createBrowserRouter } from "react-router-dom";

import Menu from "../pages/Menu";
import Cart from "../pages/cart";
import Receipt from "../pages/receipt";
import DirectionPage from "../pages/DirectionPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Menu></Menu>
    },
    {
        path: '/cart',
        element: <Cart></Cart>
    },
    {
        path: '/receipt',
        element: <Receipt></Receipt>
    },
    {
        path: '/directionpage',
        element: <DirectionPage></DirectionPage>
    },
]);

export default router;