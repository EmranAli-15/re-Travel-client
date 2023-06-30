import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Prime from "../layout/Prime";

const router = createBrowserRouter([
        {
                path: "/",
                element: <Prime></Prime>,
                children: [
                        {
                                path: "/",
                                element: <Home></Home>
                        }
                ]
        },
]);

export default router