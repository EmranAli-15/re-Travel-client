import React from 'react';
import { NavLink } from 'react-router-dom';

const Agency = () => {
        return (
                <>
                        <li className='mb-1'><NavLink to="/dashboard/statistics" className={({ isActive }) => (isActive ? 'dashboard-active' : '')}>Statistics</NavLink></li>
                        <li><NavLink to="/dashboard/publishTicket" className={({ isActive }) => (isActive ? 'dashboard-active' : '')}>Publish ticket</NavLink></li>
                </>
        );
};

export default Agency;