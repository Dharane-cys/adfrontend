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
        image: starter, // Image for starters
    },
    {
        title: 'Main Course',
        image: main, // Image for main course
    },
    {
        title: 'Sides',
        image: side, // Image for sides
    },
    {
        title: 'Beverages',
        image: beverages, // Image for beverages
    },
    {
        title: 'Desserts',
        image: desserts, // Image for desserts
    },
];

const TabMenu = () => {
    // State to keep track of the selected menu item
    const [selectedMenu, setSelectedMenu] = useState('Starters');

    // Set the selected menu item
    const handleMenuClick = (menuTitle) => {
        setSelectedMenu(menuTitle);
    };

    return (
        <div>
            <Navbar /> {/* Render Navbar component */}
            <div className="tab-menu-container">
                <div className="tab-buttons">
                    {menuItems.map((item, index) => (
                        <button
                            key={index}
                            className={`tab-button ${selectedMenu === item.title ? 'active' : ''}`} // Active class for the selected tab
                            onClick={() => handleMenuClick(item.title)} // Handle menu item click
                        >
                            {item.title}
                        </button>
                    ))}
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

export default TabMenu; // Export the TabMenu component
