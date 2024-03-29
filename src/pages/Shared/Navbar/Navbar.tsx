import { Link, NavLink } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import useAuth from '../../../hooks/useAuth';

const Navbar = () => {
        const auth = useAuth();

        const navList = (
                <>
                        <li> <NavLink to="/">Journey</NavLink> </li>
                        {
                                auth?.user && <li> <NavLink to="/dashboard">My Profile</NavLink> </li>
                        }
                </>
        )

        const handleLogOut = () => {
                auth?.logOut()
                        .then(() => { })
                        .catch(() => { })
        }

        return (
                <div className="navbar bg-base-100">
                        <div className="navbar-start">
                                <div className="dropdown">
                                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                        </label>
                                        <ul tabIndex={0} className="gap-6 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                                {
                                                        navList
                                                }
                                        </ul>
                                </div>
                                <Link to="/">
                                        <img className='w-full h-16' src={logo} alt="" />
                                </Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                                <ul className="gap-6 menu-horizontal px-1">
                                        {
                                                navList
                                        }
                                </ul>
                        </div>
                        <div className="navbar-end">
                                {
                                        auth?.user ?
                                                <div>
                                                        <button onClick={handleLogOut}>log Out</button>
                                                </div> :
                                                <div>
                                                        <button>
                                                                <Link to="/login">log In</Link>
                                                        </button>
                                                </div>
                                }
                        </div>
                </div>
        );
};

export default Navbar;