import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Starters.css';

const Starters = () => {
    const [starterItems, setStarterItems] = useState([]); // State for storing starter items
    const [loading, setLoading] = useState(true); // State for loading status
    const [error, setError] = useState(null); // State for error handling
    const [cart, setCart] = useState({}); // State for items in the cart

    useEffect(() => {
        // Function to fetch starter items from the backend
        const fetchStarterItems = async () => {
            try {
                const response = await axios.get('https://api.example.com/starters'); // Replace with your API endpoint
                setStarterItems(response.data); // Set the fetched data to starterItems state
            } catch (error) {
                setError('Failed to fetch data. Please try again later.');
            } finally {
                setLoading(false); // Set loading to false once fetching is done
            }
        };

        fetchStarterItems();
    }, []);

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

    // Function to alert the quantity of the item added to the cart
    const handleAddToCart = (itemName) => {
        alert(`${cart[itemName] || 0} ${itemName} added to cart.`);
    };

    if (loading) {
        return <div>Loading...</div>; // Display a loading indicator
    }

    if (error) {
        return <div>{error}</div>; // Display an error message
    }

    return (
        <div className="starters">
            <h2>Starters</h2>
            <div className="starters-list">
                {/* Map over the starterItems array and create a list of items */}
                {starterItems.map((item, index) => (
                    <div key={index} className="starters-item">
                        <div className="starters-details">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>{item.price}</p>
                        </div>
                        <p className="starters-price">{item.price}</p>
                        <div className="quantity-controls">
                            {/* Buttons to adjust the quantity of the item */}
                            <button onClick={() => handleSubtract(item.name)}>-</button>
                            <span>{cart[item.name] || 0}</span>
                            <button onClick={() => handleAdd(item.name)}>+</button>
                        </div>
                        {/* Button to add the item to the cart */}
                        <button onClick={() => handleAddToCart(item.name)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Starters;
