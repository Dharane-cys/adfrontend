import * as React from 'react';
import { useState } from 'react'; 
import { createuser } from '../Services/Service'; 
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import '../Components/Signup.css'; 

const Signup = () => {

  const nav = useNavigate(); // Initialize navigate function for navigation

  // State variables for form input and error message
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Check if all required fields are filled
    if (!name || !email || !password) {
      setError('Please fill in all fields.'); 
    } else {
      setError(''); 
      const user = { name, email, password };
      try {
        console.log("Signed in : ", { name, email, password });
        const response = await createuser(user); 
        console.log(response.data); 
        nav("/login"); 
      } catch (error) {
        console.error(error); 
        setError('An error occurred. Please try again.'); 
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <h2 id="signh2" style={{ fontSize: "32px", marginLeft: "100px" }}>Sign Up</h2>
        {/* Form for user signup */}
        <form onSubmit={handleSubmit} className="signup-form">
          {/* Username input field */}
          <div className="form-groups">
            <label htmlFor="username">
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          {/* Email input field */}
          <div className="form-groups">
            <label htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {/* Password input field */}
          <div className="form-groups">
            <label htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {/* Display error message if present */}
          {error && <div className="error">{error}</div>}
          {/* Submit button for the form */}
          <button type="submit" className="bttn">Sign Up</button>
        </form>
        {/* Link to login page if the user already has an account */}
        <div className="login-option">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
