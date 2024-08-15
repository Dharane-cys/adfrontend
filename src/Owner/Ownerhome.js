import React from 'react';
import Sidebar from './Sidebar';
import './Ownerhome.css'; // Make sure to create this CSS file if needed

const App = () => {
    return (
        <body style={{backgroundColor:'black'}}>        
        <div className="app-container">
            <Sidebar />
            <div className="contents" style={{fontfamily: 'cursive'}}>
                <h1>Welcome to the Restaurant Owner's Dashboard</h1>
                <p>Here you can manage your restaurant's menu, orders, reservations and more.</p>
               
            </div>
        </div>
        </body>
    );
};

export default App;
