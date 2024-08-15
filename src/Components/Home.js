import React from 'react';
import '../Components/Home.css'; 
import { useNavigate } from 'react-router-dom'; 

function Home() {
    // Create a navigate function using the useNavigate hook
    const nav = useNavigate();

    // Function to handle login button click, navigating to the owner sign-in page
    const handleLogin = () => {
        nav("/Ownersign");
    };

    // Function to handle signup button click, navigating to the customer signup page
    const handleSignup = () => {
        nav("/Signup");
    };

    return (
        <div className='home-contain'>
        <div className="home-container"> 
            <h1>FORK & FORTUNE</h1> 
            <br></br>
            <h2>Experience the Fantasy at F&F</h2> 
            <br></br>
            <button className="btnhome" onClick={handleLogin}>Owner</button>
            <button className="btnhome" style={{ marginLeft: "20px" }} onClick={handleSignup}>Customer</button>
        </div>
        </div>
    );
}

export default Home; // Export the Home component for use in other parts of the application
