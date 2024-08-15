import React, { useState, useEffect } from 'react';
import './Reservation.css'; 
import Navbar from './Navbar';
import { createreserve } from '../Services/Service'; 
import { useNavigate } from 'react-router-dom'; 
import Modal from './Modal'; 

const BookingForm = () => {
    const navi = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('12');
    const [minute, setMinute] = useState('00');
    const [period, setPeriod] = useState('AM');
    const [noofpeople, setNoofpeople] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [modalShow, setModalShow] = useState(false);

    // Get today's date in YYYY-MM-DD format
    const todayDate = new Date().toISOString().split('T')[0];

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!name || !email || !date || !hour || !minute || !period || !noofpeople || !message) {
            setError('Please fill in all fields.');
        } else {
            setError('');
            const time = `${hour}:${minute} ${period}`;
            const user = { name, email, date, time, noofpeople, message };

            try {
                console.log("Reserved: ", { name, email, date, time, noofpeople, message });
                const response = await createreserve(user);
                console.log(response.data);
                setModalShow(true);
            } catch (error) {
                console.error(error);
                setError('An error occurred. Please try again.');
            }
        }
    };

    const handleCloseModal = () => {
        setModalShow(false);
        navi("/menu");
    };

    return (
        <div>
            <Navbar /> 
            <div id="res">
                <div className="booking-form-container">
                    <h2 style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Georgia', fontWeight: 'bold', fontSize: '40px' }}>
                        <br /> Book a Table
                    </h2>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                        <label htmlFor="guests">Number of Guests:</label>
                        <input
                            type="number"
                            id="guests"
                            name="guests"
                            value={noofpeople}
                            onChange={(e) => setNoofpeople(e.target.value)}
                            required
                        />
                    </div>

                        <div className="form-group">
                            <label htmlFor="date">Date:</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                min={todayDate} // Set minimum date to today
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="time">Time:</label>
                            <div className="time-picker">
                                <select style={{height:'35px'}} value={hour} onChange={(e) => setHour(e.target.value)}>
                                    {Array.from({ length: 12 }, (_, i) => (
                                        <option key={i + 1} value={i + 1}>
                                            {i + 1}
                                        </option>
                                    ))}
                                </select>
                                &ensp;:&ensp;
                                <select style={{height:'35px'}}value={minute} onChange={(e) => setMinute(e.target.value)}>
                                    {Array.from({ length: 60 }, (_, i) => (
                                        <option key={i < 10 ? `0${i}` :  i} value={i < 10 ? `0${i}` :  i}>
                                            {i < 10 ? `0${i}` : i}
                                        </option>
                                    ))}
                                </select>&ensp;&ensp;
                                <select style={{height:'35px'}} value={period} onChange={(e) => setPeriod(e.target.value)}>
                                    <option style={{}}value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="specialRequest">Special Request:</label>
                            <textarea className='restxt'
                                id="specialRequest"
                                name="specialRequest"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </div>

                        {error && <div className="error">{error}</div>}
                        <button id="bkres" type="submit">Book Now</button>
                    </form>

                    <Modal show={modalShow} handleClose={handleCloseModal}>
                        <h2 style={{color:'black'}}>Booking Confirmed!</h2>
                        <p>Name: {name}</p>
                        <p>Email: {email}</p>
                        <p>Date: {date}</p>
                        <p>Time: {`${hour}:${minute} ${period}`}</p>
                        <p>Number of Guests: {noofpeople}</p>
                        <p>Special Request: {message}</p>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;
