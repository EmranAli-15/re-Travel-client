import { FaSlidersH, FaSignOutAlt, FaHome } from "react-icons/fa";
import Agency from "./Agency";
import User from "./User";
import { Link, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
        const admin = true;
        const auth = useAuth();
        const navigate = useNavigate();

        const handleSignOut = () => {
                auth?.logOut()
                        .then(() => { navigate('/') })
                        .catch(() => { })
        }

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
                                <div className="menu p-4 w-80 h-full bg-slate-200 flex flex-col justify-between">
                                        <div>
                                                {
                                                        admin ?
                                                                <Agency></Agency>
                                                                :
                                                                <User></User>
                                                }
                                        </div>
                                        <div>
                                                <div className="flex gap-x-6 ml-5">
                                                        <button onClick={handleSignOut}>
                                                                <FaSignOutAlt size={25}></FaSignOutAlt>
                                                        </button>
                                                        <button>
                                                                <Link to="/">
                                                                        <FaHome size={25}></FaHome>
                                                                </Link>
                                                        </button>
                                                </div>
                                                <br />
                                                <button className="btn btn-link">
                                                        <Link to="/dashboard/createAgency">Create Agency</Link>
                                                </button>
                                        </div>
                                </div>

                        </div>
                </div>
        );
};

export default Dashboard;