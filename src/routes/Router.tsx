import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Prime from "../layout/Prime";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";

const router = createBrowserRouter([
        {
                path: "/",
                element: <Prime></Prime>,
                children: [
                        {
                                path: "/",
                                element: <Home></Home>
                        },
                        {
                                path: "/register",
                                element: <Register></Register>
                        },
                        {
                                path: "/login",
                                element: <Login></Login>
                        }
                ]
        },
]);

export default router