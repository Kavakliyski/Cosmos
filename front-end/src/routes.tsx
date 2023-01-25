import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/shop",
        element: <Shop />,
    },
    
]);