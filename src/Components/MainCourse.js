import React, { useState } from 'react'; // Import React and useState hook
import './MainCourse.css'; // Import CSS file for styling

// Array of main course items with their details
const mainCourseItems = [
    {
        name: 'Grilled Chicken',
        description: 'Juicy grilled chicken breast served with seasonal vegetables and mashed potatoes.',
        price: '$12.99',
    },
    {
        name: 'Spaghetti Bolognese',
        description: 'Classic spaghetti with a rich and savory meat sauce.',
        price: '$11.49',
    },
    {
        name: 'Vegetarian Burger',
        description: 'A hearty vegetable patty served on a fresh bun with lettuce, tomato, and avocado.',
        price: '$10.99',
    },
    {
        name: 'Salmon Fillet',
        description: 'Pan-seared salmon fillet with a lemon dill sauce, served with rice and asparagus.',
        price: '$14.49',
    },
    {
        name: "Beef Stroganoff",
        description: "Tender beef strips in a creamy mushroom sauce, served over egg noodles.",
        price: "$13.99"
    },
    {
        name: "Chicken Alfredo",
        description: "Grilled chicken breast in a creamy Alfredo sauce, served over fettuccine pasta.",
        price: "$12.49"
    },
    {
        name: "Lamb Chops",
        description: "Grilled lamb chops with rosemary and garlic, served with roasted potatoes and green beans.",
        price: "$16.99"
    },
    {
        name: "Stuffed Bell Peppers",
        description: "Bell peppers stuffed with quinoa, black beans, corn, and cheese, baked to perfection.",
        price: "$11.99"
    },
    {
        name: "BBQ Ribs",
        description: "Slow-cooked BBQ ribs, served with coleslaw and cornbread.",
        price: "$15.49"
    },
    {
       name: "Shrimp Scampi",
        description: "Sautéed shrimp in a garlic butter sauce, served over linguine with a side of garlic bread.",
        price: "$14.99"
    },
];

// MainCourse component
const MainCourse = () => {
    // State to manage items in the cart
    const [cart, setCart] = useState({});

    // Function to increase the quantity of an item in the cart
    const handleAdd = (itemName) => {
        setCart((prevCart) => ({
            ...prevCart,
            [itemName]: (prevCart[itemName] || 0) + 1,
        }));
    };

    // Function to decrease the quantity of an item in the cart
    const handleSubtract = (itemName) => {
        setCart((prevCart) => ({
            ...prevCart,
            [itemName]: Math.max((prevCart[itemName] || 0) - 1, 0),
        }));
    };

    // Function to show an alert with the quantity of the item added to the cart
    const handleAddToCart = (itemName) => {
        alert(`${cart[itemName] || 0} ${itemName} added to cart.`);
    };

    return (
        <div className="main-course">
            <h2>Main Course</h2>
            <div className="main-course-list">
                {mainCourseItems.map((item, index) => (
                    <div key={index} className="main-course-item">
                        <div className="main-course-details">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                        </div>
                        <p className="main-course-price"><b>{item.price}</b></p>
                        <div className="quantity-controls">
                            <button onClick={() => handleSubtract(item.name)}>-</button> {/* Decrease quantity */}
                            <span>{cart[item.name] || 0}</span> {/* Display current quantity */}
                            <button onClick={() => handleAdd(item.name)}>+</button> {/* Increase quantity */}
                        </div>
                        <button onClick={() => handleAddToCart(item.name)}>Add to Cart</button> {/* Add item to cart */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainCourse; // Export the MainCourse component
