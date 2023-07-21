import React from 'react';
import { NavLink } from 'react-router-dom';

const User = () => {
        return (
                <>
                        <li className='mb-1'><NavLink to="/dashboard/buyTicket" className={({ isActive }) => (isActive ? 'dashboard-active' : '')}>Buy ticket</NavLink></li>
                        <li><NavLink to="/dashboard/history" className={({ isActive }) => (isActive ? 'dashboard-active' : '')}>History</NavLink></li>
                </>
        );
};

export default User;