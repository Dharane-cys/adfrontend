import React, { useState } from 'react';
import './Beverages.css'; // Import CSS file for styling the Beverages component

// Array containing beverage items with their details
const beverageItems = [
    { name: 'Coke', description: 'Classic cola soft drink served chilled.', price: '$1.99' },
    { name: 'Iced Tea', description: 'Refreshing brewed tea served over ice with a slice of lemon.', price: '$2.49' },
    { name: 'Lemonade', description: 'Sweet and tangy lemonade made with fresh lemons.', price: '$2.99' },
    { name: 'Coffee', description: 'Hot brewed coffee with a rich and robust flavor.', price: '$1.99' },
    { name: "Orange Juice", description: "Freshly squeezed orange juice.", price: "$3.49" },
    { name: "Sparkling Water", description: "Chilled sparkling water with a hint of lime.", price: "$2.49" },
    { name: "Milkshake", description: "Creamy milkshake available in chocolate, vanilla, or strawberry.", price: "$3.99" },
    { name: "Hot Chocolate", description: "Rich and creamy hot chocolate topped with whipped cream.", price: "$2.99" },
    { name: "Herbal Tea", description: "A soothing blend of herbal tea flavors.", price: "$2.49" },
    { name: "Smoothie", description: "A healthy smoothie made with fresh fruits and yogurt.", price: "$4.49" },
];

const Beverages = () => {
    // State to keep track of the quantity of each item in the cart
    const [cart, setCart] = useState({});

    // Function to handle adding an item to the cart
    const handleAdd = (itemName) => {
        setCart((prevCart) => ({
            ...prevCart,
            [itemName]: (prevCart[itemName] || 0) + 1, // Increment quantity by 1
        }));
    };

    // Function to handle subtracting an item from the cart
    const handleSubtract = (itemName) => {
        setCart((prevCart) => ({
            ...prevCart,
            [itemName]: Math.max((prevCart[itemName] || 0) - 1, 0), // Decrement quantity by 1 but not below 0
        }));
    };

    // Function to handle adding the current quantity of an item to the cart and show alert
    const handleAddToCart = (itemName) => {
        alert(`${cart[itemName] || 0} ${itemName} added to cart.`); // Show alert with current quantity
    };

    return (
        <div className="beverages">
            <h2>Beverages</h2>
            <div className="beverages-list">
                {/* Map through the beverageItems array to display each item */}
                {beverageItems.map((item, index) => (
                    <div key={index} className="beverages-item">
                        <div className="beverages-details">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                        </div>
                        <p className="beverages-price"><b>{item.price}</b></p>
                        <div className="quantity-controls">
                            {/* Button to decrease quantity */}
                            <button onClick={() => handleSubtract(item.name)}>-</button>
                            {/* Display current quantity */}
                            <span>{cart[item.name] || 0}</span>
                            {/* Button to increase quantity */}
                            <button onClick={() => handleAdd(item.name)}>+</button>
                        </div>
                        {/* Button to add the item to the cart with current quantity */}
                        <button onClick={() => handleAddToCart(item.name)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Beverages;
