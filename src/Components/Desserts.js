import React, { useState } from 'react';
import './Desserts.css'; // Import CSS file for styling the Desserts component

// Array of dessert items with details
const dessertItems = [
    {
        name: 'Chocolate Cake',
        description: 'Rich and moist chocolate cake with a creamy frosting.',
        price: '$4.99',
    },
    {
        name: 'Cheesecake',
        description: 'Smooth and creamy cheesecake with a graham cracker crust.',
        price: '$5.49',
    },
    {
        name: 'Apple Pie',
        description: 'Warm apple pie with a buttery crust and a scoop of vanilla ice cream.',
        price: '$4.49',
    },
    {
        name: 'Brownies',
        description: 'Fudgy brownies with chunks of chocolate throughout.',
        price: '$3.99',
    },
    {
        name: "Tiramisu",
        description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cheese.",
        price: "$5.99"
    },
    {
        name: "Ice Cream Sundae",
        description: "Vanilla ice cream topped with chocolate sauce, whipped cream, and a cherry.",
        price: "$4.49"
    },
    {
        name: "Panna Cotta",
        description: "Silky smooth Italian dessert made with cream and topped with a berry coulis.",
        price: "$4.99"
    },
    {
        name: "Lemon Tart",
        description: "Tangy lemon tart with a crisp pastry crust and a dollop of whipped cream.",
        price: "$4.79"
    },
    {
        name: "Creme Brulee",
        description: "Creamy custard dessert with a caramelized sugar crust.",
        price: "$5.49"
    },
    {
        name: "Fruit Salad",
        description: "A refreshing mix of seasonal fruits served chilled.",
        price: "$3.99"
    },
];

const Desserts = () => {
    // State to keep track of the cart items and their quantities
    const [cart, setCart] = useState({});

    // Function to increase the quantity of a dessert item in the cart
    const handleAdd = (itemName) => {
        setCart((prevCart) => ({
            ...prevCart,
            [itemName]: (prevCart[itemName] || 0) + 1,
        }));
    };

    // Function to decrease the quantity of a dessert item in the cart
    const handleSubtract = (itemName) => {
        setCart((prevCart) => ({
            ...prevCart,
            [itemName]: Math.max((prevCart[itemName] || 0) - 1, 0),
        }));
    };

    // Function to handle the "Add to Cart" action and display an alert
    const handleAddToCart = (itemName) => {
        alert(`${cart[itemName] || 0} ${itemName} added to cart.`);
    };

    return (
        <div className="desserts">
            <h2>Desserts</h2> {/* Main heading for the desserts page */}
            <div className="desserts-list">
                {dessertItems.map((item, index) => (
                    <div key={index} className="desserts-item">
                        <div className="desserts-details">
                            <h3>{item.name}</h3> {/* Dessert name */}
                            <p>{item.description}</p> {/* Dessert description */}
                        </div>
                        <p className="desserts-price">{item.price}</p> {/* Dessert price */}
                        <div className="quantity-controls">
                            <button onClick={() => handleSubtract(item.name)}>-</button> {/* Button to decrease quantity */}
                            <span>{cart[item.name] || 0}</span> {/* Display current quantity */}
                            <button onClick={() => handleAdd(item.name)}>+</button> {/* Button to increase quantity */}
                        </div>
                        <button onClick={() => handleAddToCart(item.name)}>Add to Cart</button> {/* Button to add item to cart */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Desserts;
