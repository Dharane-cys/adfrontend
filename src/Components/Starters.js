import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Starters.css';
import { useCart } from './CartContext'; // Import the custom hook

const Starters = () => {
    const [starterItems, setStarterItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cart, setCart] = useState({});
    const { addToCart } = useCart(); 

    useEffect(() => {
        const fetchStarterItems = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/Starter'); 
                setStarterItems(response.data);
            } catch (error) {
                console.error('Failed to fetch starter items:', error);
                setError('Failed to fetch data. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchStarterItems();
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
            addToCart(itemName, quantity, price, image ); 
             
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
        <div className="starters">
            <h2>Starters</h2>
            <div className="starters-list">
                {starterItems.map((item, index) => (
                    <div key={index} className="starters-item">
                        <div className="starters-details" style={containerStyle}>
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

export default Starters;
