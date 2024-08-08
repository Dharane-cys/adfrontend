import React from 'react';
import '../Components/Home.css'; // Import CSS file for styling the Home component
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from react-router-dom for navigation

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
        <div className="home-container"> {/* Main container for the Home page */}
            <h1>FORK & FORTUNE</h1> {/* Main heading for the Home page */}
            <br></br>
            <h2>Experience the Fantasy at F&F</h2> {/* Subheading for the Home page */}
            <br></br>
            {/* Button for owner login, triggers handleLogin function on click */}
            <button className="btnhome" onClick={handleLogin}>Owner</button>
            {/* Button for customer signup, triggers handleSignup function on click */}
            <button className="btnhome" style={{ marginLeft: "20px" }} onClick={handleSignup}>Customer</button>
        </div>
    );
}

export default Home; // Export the Home component for use in other parts of the application
