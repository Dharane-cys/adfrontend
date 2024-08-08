import React from 'react';
import {  useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

function AdminPage() {
  const navigate = useNavigate();

  return (
    <div>
    <Sidebar/>
    <div style={{ padding: '20px', marginLeft:'500px'}}>
      <h1>Admin Page</h1>
      <nav>
        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', gap: '10px' }}>
          <li><button onClick={() => navigate('/starter')}>Starter</button></li>
          <li><button onClick={() => navigate('/maincourse')}>Main Course</button></li>
          <li><button onClick={() => navigate('/sides')}>Sides</button></li>
          <li><button onClick={() => navigate('/dessert')}>Dessert</button></li>
          <li><button onClick={() => navigate('/beverages')}>Beverages</button></li>
        </ul>
      </nav>
    </div>
    </div>
  );
}

export default AdminPage;
