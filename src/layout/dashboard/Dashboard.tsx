import { FaSlidersH } from "react-icons/fa";
import Agency from "./Agency";
import User from "./User";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
        const admin = true;
        return (
                <div className="drawer lg:drawer-open">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                                {/* Page content here */}
                                <div className="flex justify-end p-2">
                                        <label htmlFor="my-drawer-2" className="lg:hidden">
                                                <FaSlidersH size={30}></FaSlidersH>
                                        </label>
                                </div>
                                <Outlet></Outlet>

                        </div>
                        <div className="drawer-side">
                                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                                <ul className="menu p-4 w-80 h-full bg-slate-200 text-base-content">
                                        {/* Sidebar content here */}
                                        {
                                                admin ?
                                                        <Agency></Agency>
                                                        :
                                                        <User></User>
                                        }
                                </ul>

                        </div>
                </div>
        );
};

export default Dashboard;