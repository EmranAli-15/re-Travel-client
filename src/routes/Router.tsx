import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Prime from "../layout/Prime";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Dashboard from "../layout/dashboard/Dashboard";
import Statistics from "../pages/dashboard/agency/Statistics";
import PublishTicket from "../pages/dashboard/agency/PublishTicket";
import Uses from "../layout/dashboard/Uses";

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
        {
                path: "/dashboard",
                element: <Dashboard></Dashboard>,
                children: [
                        {
                                path: "/dashboard",
                                element: <Uses></Uses>
                        },

                        // for agency
                        {
                                path: "/dashboard/Statistics",
                                element: <Statistics></Statistics>
                        },
                        {
                                path: "/dashboard/publishTicket",
                                element: <PublishTicket></PublishTicket>
                        },
                ]
        }
]);

export default router