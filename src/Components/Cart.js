import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from './CartContext';
import './Cart.css'; 
import Nav from './Navbar';

const CartPage = () => {
    const { cart, removeFromCart } = useCart();
    const [paymentMethod, setPaymentMethod] = useState('');
    const [paymentDetails, setPaymentDetails] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('');

    const saveCartToBackend = async () => {
        try {
            // Prepare the cart details to send to the backend
            const cartDetails = {
                items: Object.entries(cart).map(([itemName, { quantity, price }]) => ({
                    name: itemName,
                    quantity,
                    price,
                })),
                subtotal,
                taxes,
                total,
            };

            // Send the cart details to the backend
            await axios.post('http://localhost:8080/api/order', cartDetails);
            console.log('Cart has been saved successfully.');
        } catch (error) {
            console.error('Failed to save cart:', error);
        }
    };

    useEffect(() => {
        if (Object.keys(cart).length > 0) {
            saveCartToBackend();
        }
    }, [cart]);

    const handlePaymentSubmit = async (e) => {
        e.preventDefault();
        
        // Simulate a payment process
        try {
            // Perform payment logic here

            // On success
            setPaymentStatus('Payment successful!');
        } catch (error) {
            // On failure
            setPaymentStatus('Payment failed. Please try again.');
        }
    };

    // Calculate subtotal and taxes
    const subtotal = Object.values(cart).reduce((acc, { quantity, price }) => acc + quantity * price, 0);
    const taxRate = 0.1; // Example tax rate of 10%
    const taxes = subtotal * taxRate;
    const total = subtotal + taxes;

    const cartItems = Object.entries(cart).map(([itemName, { quantity, price, image, description }]) => (
        <div key={itemName} className="cart-item">
            <img src={image} alt={itemName} className="item-image" />
            <div className="item-info">
                <p className="item-name">{itemName}</p>
                <p className="item-description">{description}</p>
                <p className="item-quantity">Quantity: {quantity}</p>
                <p className="item-price">₹{price}</p>
            </div>
            <div className="item-total">
                ₹{quantity * price}
            </div>
            <button 
                className="remove-button"
                onClick={() => removeFromCart(itemName)}
            >
                x
            </button>
        </div>
    ));

    return (
        <div style={{backgroundColor:'black',height:'150vh'}}>
            <Nav />
            <div className="cart-page" style={{marginTop:'100px',marginBottom:'30px'}}> 
                <h2>My Cart</h2>
                <div className="cart-items">
                    {cartItems.length > 0 ? cartItems : <p>Your cart is empty.</p>}
                </div>
                
                {/* Order Summary Section */}
                <div className="order-summary">
                    <h3 style={{color:'black',fontWeight:'bold',marginRight:'420px',paddingTop:'30px',fontFamily:'Georgia',fontSize:'35px',marginBottom:'50px'}}>Order Summary</h3>
                    <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
                    <p>Taxes: ₹{taxes.toFixed(2)}</p>
                    <h4 style={{color:'black',fontWeight:'bold'}}>Total Price: ₹{total.toFixed(2)}</h4>
                </div>

                <div className="payment-section">
                    <h2 style={{paddingTop:'40px'}}>Payment</h2>
                    <form onSubmit={handlePaymentSubmit}>
                        <div className="form-group">
                            <label style={{fontWeight:'bold'}} htmlFor="paymentMethod">Payment Method:</label>
                            <select style={{height:'40px'}}
                                id="paymentMethod"
                                value={paymentMethod}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                required
                            >
                                <option style={{color:'grey'}}value="" disabled>Select payment method</option>
                                <option value="UPI">UPI</option>
                                <option value="card">Credit Card</option>
                                <option value="paypal">PayPal</option>
                                <option value="bankTransfer">Bank Transfer</option>
                                <option value="cash">Cash</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label style={{fontWeight:'bold'}} htmlFor="paymentDetails">Payment Details:</label>
                            <input
                                type="text"
                                id="paymentDetails"
                                value={paymentDetails}
                                onChange={(e) => setPaymentDetails(e.target.value)}
                                required
                                placeholder="Enter payment details"
                            />
                        </div>

                        <button type="submit" style={{marginLeft:'100px', backgroundColor:'green', color:'white',marginBottom:'30px'}}>Pay Now</button>
                    </form>

                    {paymentStatus && (
                        <div className="payment-status" style={{ marginLeft: '100px', color: paymentStatus.includes('failed') ? 'red' : 'green' }}>
                            {paymentStatus}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CartPage;
