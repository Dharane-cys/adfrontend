import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Beverages.css'; // Create this CSS file for styling
import { useCart } from './CartContext'; // Import the custom hook

const Beverages = () => {
    const [beverageItems, setBeverageItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cart, setCart] = useState({});
    const { addToCart } = useCart(); // Use the addToCart function from the context

    useEffect(() => {
        const fetchBeverageItems = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/Beverages'); // Ensure your API endpoint is correct
                setBeverageItems(response.data);
            } catch (error) {
                console.error('Failed to fetch beverage items:', error);
                setError('Failed to fetch data. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchBeverageItems();
    }, []);

    const handleAdd = (itemName) => {
        setCart(prevCart => ({
            ...prevCart,
            [itemName]: (prevCart[itemName] || 0) + 1
        }));
    };

    const handleSubtract = (itemName) => {
        setCart(prevCart => ({
            ...prevCart,
            [itemName]: Math.max((prevCart[itemName] || 0) - 1, 0)
        }));
    };

    const handleAddToCart = (itemName, price, image) => {
        const quantity = cart[itemName] || 0;
        if (quantity > 0) {
            addToCart(itemName, quantity, price, image); // Add item to the cart context with image
            
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const imageStyle = {
        width: '30%',
        height: 'auto',
        borderRadius: '10px', 
    };
    const descriptionStyle = {
        marginLeft: '20px', 
        fontSize: '16px', 
    };
    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#fff', 
        maxWidth: '800px', 
    };

    return (
        <div className="beverages">
            <h2>Beverages</h2>
            <div className="beverages-list">
                {beverageItems.map((item, index) => (
                    <div key={index} className="beverages-item">
                        <div className="beverages-details" style={containerStyle}>
                            <img style={imageStyle} src={item.image} alt={item.dishName} />
                            <div style={descriptionStyle}>
                                <h3>{item.dishName}</h3>
                                <p style={{color:'black'}}>{item.description}</p>
                                <p style={{color:'black',fontWeight:'bold'}}>₹{item.dishPrice}</p>
                            </div>
                        </div>
                        <div className="quantity-controls">
                        <button style={{backgroundColor:'black',color:'white',padding:'7px'}}onClick={() => handleSubtract(item.dishName)}>-</button>
                        <span style={{color:'black',fontWeight:'bold'}}>{cart[item.dishName] || 0}</span>
                        <button style={{backgroundColor:'black',color:'white',padding:'7px'}}onClick={() => handleAdd(item.dishName)}>+</button>
                        </div>
                        <button
                            style={{marginRight:'100px', width:'20%',backgroundColor:'black',color:'white',padding:'15px'}}
                            onClick={() => handleAddToCart(item.dishName, item.dishPrice, item.image)}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Beverages;
