import React, { useState } from 'react'; 
import './Sides.css';


const sideItems = [
    {
        name: 'French Fries',
        description: 'Golden and crispy potato fries served with ketchup.',
        price: '$3.99',
    },
    {
        name: 'Onion Rings',
        description: 'Crispy fried onion rings served with a tangy dipping sauce.',
        price: '$4.99',
    },
    {
        name: 'Garlic Bread',
        description: 'Toasted bread with garlic butter and herbs.',
        price: '$2.99',
    },
    {
        name: 'Side Salad',
        description: 'Fresh mixed greens with tomatoes, cucumbers, and a light vinaigrette.',
        price: '$3.99',
    },
    {
        name: "Mashed Potatoes",
        description: "Creamy mashed potatoes with a hint of butter and garlic.",
        price: "$3.49"
    },
    {
        name: "Coleslaw",
        description: "Crispy cabbage and carrot slaw in a tangy dressing.",
        price: "$2.99"
    },
    {
        name: "Steamed Vegetables",
        description: "A mix of seasonal steamed vegetables, lightly seasoned.",
        price: "$3.99"
    },
    {
        name: "Mac and Cheese",
        description: "Creamy macaroni and cheese topped with a breadcrumb crust.",
        price: "$4.49"
    },
    {
        name: "Baked Beans",
        description: "Slow-cooked beans in a rich, smoky sauce.",
        price: "$2.99"
    },
    {
        name: "Corn on the Cob",
        description: "Sweet corn on the cob, grilled and buttered.",
        price: "$2.49"
    },
];


const Sides = () => {
    // State to manage cart items
    const [cart, setCart] = useState({});

    // Function to handle adding items to the cart
    const handleAdd = (itemName) => {
        setCart((prevCart) => ({
            ...prevCart,
            [itemName]: (prevCart[itemName] || 0) + 1, // Increment item quantity
        }));
    };

    // Function to handle subtracting items from the cart
    const handleSubtract = (itemName) => {
        setCart((prevCart) => ({
            ...prevCart,
            [itemName]: Math.max((prevCart[itemName] || 0) - 1, 0), // Decrement item quantity, not below zero
        }));
    };

    // Function to handle adding items to the cart 
    const handleAddToCart = (itemName) => {
        alert(`${cart[itemName] || 0} ${itemName} added to cart.`); // Alert user about cart update
    };

    return (
        <div className="sides">
            <h2>Sides</h2> {/* Header for the Sides section */}
            <div className="sides-list">
                {/* Map through the sideItems array to render each side item */}
                {sideItems.map((item, index) => (
                    <div key={index} className="sides-item">
                        <div className="sides-details">
                            <h3>{item.name}</h3> {/* Item name */}
                            <p>{item.description}</p> {/* Item description */}
                        </div>
                        <p className="sides-price"><b>{item.price}</b></p> {/* Item price */}
                        <div className="quantity-controls">
                            {/* Button to decrease item quantity */}
                            <button onClick={() => handleSubtract(item.name)}>-</button>
                            {/* Display current item quantity */}
                            <span>{cart[item.name] || 0}</span>
                            {/* Button to increase item quantity */}
                            <button onClick={() => handleAdd(item.name)}>+</button>
                        </div>
                        {/* Button to add item to cart */}
                        <button onClick={() => handleAddToCart(item.name)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sides;
