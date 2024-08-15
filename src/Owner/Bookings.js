import React, { useState, useEffect } from 'react';
import './Bookings.css';
import Sidebar from './Sidebar';
import axios from 'axios';

const Reservations = () => {
    const [reservations, setReservations] = useState([]);

    // Fetch reservations from the backend
    useEffect(() => {
        fetchReservations();
    }, []);

    const fetchReservations = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/reserve');
            setReservations(response.data);
        } catch (error) {
            console.error('Failed to fetch reservations', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/reserve/${id}`);
            const updatedReservations = reservations.filter(reservation => reservation.id !== id);
            setReservations(updatedReservations);
        } catch (error) {
            console.error('Failed to delete reservation', error);
        }
    };

    return (
        <div style={{backgroundColor:'black',height:'100vh',color:'white',width:'100vw'}}>
            <Sidebar/>
            <div className="reservations">
                <h2 style={{textAlign:'center'}}>Reservations</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Guests</th>
                            <th>Message</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservations.map(reservation => (
                            <tr key={reservation.id}>
                                <td>{reservation.name}</td>
                                <td>{reservation.email}</td>
                                <td>{reservation.date}</td>
                                <td>{reservation.time}</td>
                                <td>{reservation.noofpeople}</td>
                                <td>{reservation.message}</td>
                                <td>
                                    <button onClick={() => handleDelete(reservation.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Reservations;
