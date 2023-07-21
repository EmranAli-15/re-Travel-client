import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Prime from "../layout/Prime";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Dashboard from "../layout/dashboard/Dashboard";
import Statistics from "../pages/dashboard/agency/Statistics";
import PublishTicket from "../pages/dashboard/agency/PublishTicket";
import Uses from "../layout/dashboard/Uses";
import AgencyRegister from "../pages/agencyRegister/AgencyRegister";
import BuyTicket from "../pages/dashboard/users/BuyTicket";
import History from "../pages/dashboard/users/History";

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

                        // for users
                        {
                                path: "/dashboard/buyTicket",
                                element: <BuyTicket></BuyTicket>
                        },
                        {
                                path: "/dashboard/history",
                                element: <History></History>
                        },

                        // for agency
                        {
                                path: "/dashboard/statistics",
                                element: <Statistics></Statistics>
                        },
                        {
                                path: "/dashboard/publishTicket",
                                element: <PublishTicket></PublishTicket>
                        },

                        // create agency
                        {
                                path: "/dashboard/createAgency",
                                element: <AgencyRegister></AgencyRegister>
                        }
                ]
        }
]);

export default router