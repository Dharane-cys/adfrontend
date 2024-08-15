import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Owner</h2>
            <nav >
                <ul>
                    <li><a href ="/orders">Orders</a></li>
                    <li><a href="/menumanage">Menu Management</a></li>
                    <li><a href="/menumanage">Staff Management</a></li>
                    <li><a href="/bookings">Reservations</a></li>
                    
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
