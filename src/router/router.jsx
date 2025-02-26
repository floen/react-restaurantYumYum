import { createBrowserRouter } from "react-router-dom";

import Menu from "../pages/Menu";
import Cart from "../pages/cart";
import Receipt from "../pages/receipt";
import Eta from "../pages/Eta";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Menu></Menu>
    },
    {
        path: "/cart",
        element: <Cart></Cart>
    },
    {
        path: "/receipt",
        element: <Receipt></Receipt>
    },
    {
        path: "/eta",
        element: <Eta></Eta>
    },
]);

export default router;