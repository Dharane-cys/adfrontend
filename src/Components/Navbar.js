import React from 'react'; 
import { Link } from 'react-router-dom'; 
import './Navbar.css'; 
import logo from '../Assests/logo.png'; 


const Navbar = () => {
    return (
        <nav className="navbar"> {/* Main container for the navbar */}
            <div className="navbar-logo"> {/* Container for logo and restaurant name */}
                <img src={logo} alt="Fork & Fortune Logo" className="logo" /> {/* Logo image */}
                <span className="restaurant-name">Fork & Fortune</span> {/* Restaurant name text */}
            </div>
            <ul className="navbar-links"> {/* Unordered list for navigation links */}
                <li><Link to="/home">Home</Link></li> {/* Navigation link to Home */}
                <li><Link to="/about">About Us</Link></li> {/* Navigation link to About Us */}
                <li><Link to="/Menu">Menu</Link></li> {/* Navigation link to Menu */}
                <li><Link to="/reservations">Reservations</Link></li> {/* Navigation link to Reservations */}
                <li><Link to="/testimonials">Testimonials</Link></li> {/* Navigation link to Testimonials */}
                <li><Link to="/contact">Contact Us</Link></li> {/* Navigation link to Contact Us */}
            </ul>
        </nav>
    );
}

export default Navbar; // Export Navbar component for use in other parts of the application
