import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar'
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch orders from the mock API
  const fetchOrders = async () => {
    // Mocking an API call with a delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            customer: 'John Doe',
            date: '2024-08-13',
            total: 120.99,
            status: 'Pending',
          },
          {
            id: 2,
            customer: 'Jane Smith',
            date: '2024-08-12',
            total: 89.49,
            status: 'Shipped',
          },
          {
            id: 3,
            customer: 'Mike Johnson',
            date: '2024-08-11',
            total: 56.00,
            status: 'Delivered',
          },
        ]);
      }, 1000);
    });
  };

  // Load orders when the component mounts
  useEffect(() => {
    const loadOrders = async () => {
      try {
        const data = await fetchOrders();
        setOrders(data);
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      } finally {
        setLoading(false);
      }
    };

    loadOrders();
  }, []);

  // Handle order status change
  const handleStatusChange = (id, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div style={{backgroundColor:'black',height:'100vh'}}>
    <Sidebar/>
    <div style={styles.ordersContainer}>
      <h1>Admin Orders Page</h1>
      {loading ? (
        <p>Loading orders...</p>
      ) : (
        <table border="4" style={styles.ordersTable} >
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Total ($)</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.date}</td>
                <td>{order.total.toFixed(2)}</td>
                <td>{order.status}</td>
                <td>
                  <select
                    value={order.status}
                    onChange={(e) => handleStatusChange(order.id, e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </div>
  );
};

// Basic inline styles
const styles = {
  ordersContainer: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '200px',
    color:'white',
    textAlign:'center',
  },
  ordersTable: {
    width: '140%',
    borderCollapse: 'collapse',
    marginTop: '50px',
    
  },
  tableCell: {
    border: '4px solid #fff',
    padding: '70px',
    textAlign: 'center',
  },
  tableHeader: {
    backgroundColor: '#f2f2f2',
  },
  tableRowEven: {
    backgroundColor: '#f9f9f9',
  },
  tableRowHover: {
    backgroundColor: '#ddd',
  },
  selectInput: {
    padding: '40px',
    fontSize: '14px',
  },
};

export default Orders;
