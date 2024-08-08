import React, { useState } from 'react';
import './Bookings.css';
import Sidebar from './Sidebar';

const initialReservations = [
    { id: 1, name: 'John Doe', email:'john@gmail.com ' ,date: '2024-08-10', time: '19:00', guests: 4 ,message:'Special'},
    { id: 2, name: 'Jane Smith', email:'jane@gmail.com ' ,date: '2024-08-12', time: '20:00', guests: 2 ,message:'Special'},
    { id: 3, name: 'Alice Johnson',  email:'alice@gmail.com ' ,date: '2024-08-14', time: '18:30', guests: 6 ,message:'Special'},
];

const Reservations = () => {
    const [reservations, setReservations] = useState(initialReservations);

    const handleDelete = (id) => {
        const updatedReservations = reservations.filter(reservation => reservation.id !== id);
        setReservations(updatedReservations);
    };

    return (
      <div>
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
                            <td>{reservation.guests}</td>
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
