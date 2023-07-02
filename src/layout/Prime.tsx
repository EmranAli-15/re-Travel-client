import { Outlet } from 'react-router-dom'
import Navbar from '../pages/Shared/Navbar/Navbar';

const Prime = () => {
        return (
                <div>
                        <Navbar></Navbar>
                        <Outlet></Outlet>
                </div>
        );
};

export default Prime;