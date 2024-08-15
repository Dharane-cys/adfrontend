import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Navbar.css';
import logo from '../Assests/logo.png';
import cart from '../Assests/cart.png';
import Notify from './Notify';
import logout from '../Assests/woman.png';

const Navbar = () => {
    const [showLogoutDropdown, setShowLogoutDropdown] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch user data
        const fetchUserData = async () => {
            try {
                // Replace the URL with your API endpoint to fetch user data
                const response = await axios.get('hiitp://localhost:8080/api/users'); 
                setUserEmail(response.data.email);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    const handleLogout = () => {
        // Clear isAuthenticated from localStorage
        localStorage.removeItem('isAuthenticated');
        
        // Navigate to login page
        navigate('/login');
    };

    const toggleDropdown = () => {
        setShowLogoutDropdown(!showLogoutDropdown);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Fork & Fortune Logo" className="logo" />
                <span className="restaurant-name">Fork & Fortune</span>
            </div>
            <ul className="navbar-links">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/Menu">Menu</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/testimonials">Testimonials</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li>
                    <Link to="/cart">
                        <img
                            style={{ height: '45px', width: '50px', paddingRight: '0px', marginBottom: '15px' }}
                            src={cart}
                            alt="Cart"
                        />
                        <Notify />
                    </Link>
                </li>
                <li>
                    <div className="logout-container" onClick={toggleDropdown}>
                        <img
                            style={{ height: '45px', width: '70px', paddingRight: '20px', marginBottom: '0px' }}
                            src={logout}
                            alt="Logout"
                        />
                        {showLogoutDropdown && (
                            <div className="logout-dropdown">
                                <p className="user-email">{userEmail}</p>
                                <button onClick={handleLogout}>Logout</button>
                            </div>
                        )}
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
