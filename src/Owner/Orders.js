import React from 'react';
import './Orders.css'; 
import Sidebar from './Sidebar';

const ordersData = [
    {
        id: '001',
        customer: 'John Doe',
        items: ['Burger', 'Fries', 'Soda'],
        total: '$18.99',
        status: 'Completed',
    },
    {
        id: '002',
        customer: 'Jane Smith',
        items: ['Pasta', 'Garlic Bread'],
        total: '$15.49',
        status: 'Pending',
    },
    {
        id: '003',
        customer: 'Emily Johnson',
        items: ['Pizza', 'Salad'],
        total: '$22.99',
        status: 'In Progress',
    },
    // Add more orders as needed
];

const Orders = () => {
    return (
      <div>
      <Sidebar/>
        <div className="orders">
            <h2>Orders</h2>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Items</th>
                        <th>Total</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {ordersData.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.customer}</td>
                            <td>{order.items.join(', ')}</td>
                            <td>{order.total}</td>
                            <td>{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default Orders;
