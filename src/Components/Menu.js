import React, { useState } from 'react'; // Import React and useState hook
import './Menu.css'; 
import starter from '../Assests/starter.jpg'; 
import main from '../Assests/main.webp';
import side from '../Assests/side.jpg';
import beverages from '../Assests/beverages.gif';
import desserts from '../Assests/desserts.jpg';
import Starters from './Starters'; 
import MainCourse from './MainCourse'; 
import Sides from './Sides'; 
import Beverages from './Beverages'; 
import Desserts from './Desserts'; 
import Navbar from './Navbar'; 

// Array containing the menu items
const menuItems = [
    {
        title: 'Starters',
        url: '/starters', // URL for starters section
        image: starter, // Image for starters
    },
    {
        title: 'Main Course',
        url: '/MainCourse', // URL for main course section
        image: main, // Image for main course
    },
    {
        title: 'Sides',
        url: '/sides', // URL for sides section
        image: side, // Image for sides
    },
    {
        title: 'Beverages',
        url: '/beverages', // URL for beverages section
        image: beverages, // Image for beverages
    },
    {
        title: 'Desserts',
        url: '/desserts', // URL for desserts section
        image: desserts, // Image for desserts
    },
];

const DropdownMenu = () => {
    // State to control the visibility of the dropdown menu
    const [dropdown, setDropdown] = useState(false);
    // State to keep track of the selected menu item
    const [selectedMenu, setSelectedMenu] = useState(null);

    // Show dropdown menu on mouse enter
    const handleMouseEnter = () => {
        setDropdown(true);
    };

    // Hide dropdown menu on mouse leave
    const handleMouseLeave = () => {
        setDropdown(false);
    };

    // Set the selected menu item and hide the dropdown menu
    const handleMenuClick = (menuTitle) => {
        setSelectedMenu(menuTitle);
        setDropdown(false);
    };

    return (
        <div>
            <Navbar /> {/* Render Navbar component */}
            <div className="dropdown-menu-container">
                <div className="navbar">
                    <ul className="menu-items">
                        <li
                            className="menu-item"
                            onMouseEnter={handleMouseEnter} // Show dropdown on hover
                            onMouseLeave={handleMouseLeave} // Hide dropdown on hover out
                        >
                            <a href="#!" className="menu-link">
                                Our Menu <i className="fas fa-caret-down"></i>
                            </a>
                            {dropdown && ( // Conditional rendering of dropdown menu
                                <div className="dropdown">
                                    {menuItems.map((item, index) => (
                                        <a
                                            key={index}
                                            href="#!"
                                            className="dropdown-item"
                                            onClick={() => handleMenuClick(item.title)} // Handle menu item click
                                        >
                                            <img src={item.image} alt={item.title} className="dropdown-image" />
                                            <span>{item.title}</span>
                                        </a>
                                    ))}
                                </div>
                            )}
                        </li>
                    </ul>
                </div>
                <div id="menu">
                    <p className="blink">Find your Cravings!!!</p>
                </div>
                <div className="menu-content">
                    {/* Render the selected menu component based on state */}
                    {selectedMenu === 'Starters' && <Starters />}
                    {selectedMenu === 'Main Course' && <MainCourse />}
                    {selectedMenu === 'Sides' && <Sides />}
                    {selectedMenu === 'Beverages' && <Beverages />}
                    {selectedMenu === 'Desserts' && <Desserts />}
                </div>
            </div>
        </div>
    );
};

export default DropdownMenu; // Export the DropdownMenu component
