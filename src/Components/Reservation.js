import React, { useState } from 'react';
import './Reservation.css'; 
import Navbar from './Navbar';
import { createreserve } from '../Services/Service'; 
import { useNavigate } from 'react-router-dom'; 
import Modal from './Modal'; 

const BookingForm = () => {
    // Initialize useNavigate hook for navigation
    const navi = useNavigate();

    // State hooks for managing form fields and form errors
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [noofpeople, setNoofpeople] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [modalShow, setModalShow] = useState(false); // State for modal visibility

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        
        // Validate that all fields are filled
        if (!name || !email || !date || !time || !noofpeople || !message) {
            setError('Please fill in all fields.');
        } else {
            setError(''); // Clear any previous error
            const user = { name, email, date, time, noofpeople, message }; // Create user object

            try {
                console.log("Reserved: ", { name, email, date, time, noofpeople, message });
                const response = await createreserve(user); // Make API call to backend
                console.log(response.data);
                setModalShow(true); // Show modal upon successful reservation
            } catch (error) {
                console.error(error);
                setError('An error occurred. Please try again.'); // Set error message if API call fails
            }
        }
    };

    // Function to handle closing the modal
    const handleCloseModal = () => {
        setModalShow(false); // Hide the modal
        navi("/menu"); // Navigate to the menu page
        
    };

    return (
        <div id="r">
            <Navbar /> {/* Render Navbar component */}
            <div id="res">
                <div className="booking-form-container">
                    <h2 style={{ textAlign: 'center', marginTop: '150px', fontFamily: 'Georgia', fontWeight: 'bold', fontSize: '40px' }}>
                        Book a Table
                    </h2>
                    <br />
                    <form onSubmit={handleSubmit}> {/* Handle form submission */}
                        {/* Form field for Name */}
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)} // Update state on input change
                            />
                        </div>

                        {/* Form field for Email */}
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required // Email field is required
                            />
                        </div>

                        {/* Form field for Date */}
                        <div className="form-group">
                            <label htmlFor="date">Date:</label>
                            <input
                              
                                id="date"
                                name="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required // Date field is required
                            />
                        </div>

                        {/* Form field for Time */}
                        <div className="form-group">
                            <label htmlFor="time">Time:</label>
                            <input
                                type="time"
                                id="time"
                                name="time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                required // Time field is required
                            />
                        </div>

                        {/* Form field for Number of Guests */}
                        <div className="form-group">
                            <label htmlFor="guests">Number of Guests:</label>
                            <input
                                type="number"
                                id="guests"
                                name="guests"
                                value={noofpeople}
                                onChange={(e) => setNoofpeople(e.target.value)}
                                required // Number of guests field is required
                            />
                        </div>

                        {/* Form field for Special Request */}
                        <div className="form-group">
                            <label htmlFor="specialRequest">Special Request:</label>
                            <textarea
                                id="specialRequest"
                                name="specialRequest"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required // Special request field is required
                            />
                        </div>

                        {/* Display error message if any */}
                        {error && <div className="error">{error}</div>}
                        {/* Submit button */}
                        <button id="bkres" type="submit">Book Now</button>
                    </form>

                    {/* Modal to show booking confirmation */}
                    <Modal show={modalShow} handleClose={handleCloseModal}>
                        <h2>Booking Confirmed!</h2>
                        <p>Name: {name}</p>
                        <p>Email: {email}</p>
                        <p>Date: {date}</p>
                        <p>Time: {time}</p>
                        <p>Number of Guests: {noofpeople}</p>
                        <p>Special Request: {message}</p>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;
