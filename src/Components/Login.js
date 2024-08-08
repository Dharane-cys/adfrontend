import { Link } from 'react-router-dom'; 
import * as React from 'react'; 
import { useState } from 'react'; // Import useState hook for managing state
import '../Components/Login.css'; 
import logo from '../Assests/logo.png';
import { useNavigate } from 'react-router-dom'; 
import { listusers } from '../Services/Service'; 

function Login() {
  const nav = useNavigate(); // Create a navigate function using the useNavigate hook

  // State hooks for managing email, password, and error message
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Function to check if the user exists with the given email and password
  const checkUser = async (email, password) => {
    const response = await listusers(); // Fetch list of users
    return response.data.some(
      (user) => user.email === email && user.password === password
    ); // Check if any user matches the provided email and password
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const user = { email, password }; // Create user object with email and password
    const userExist = await checkUser(user.email, user.password); // Check if user exists

    if (!email || !password) {
      setError('Please enter both email and password.'); // Set error if email or password is missing
    } else if (userExist) {
      alert("Login Successful"); // Show success message
      setError(''); // Clear any existing error messages
      nav("/Welcome"); // Navigate to the Welcome page
    } else {
      alert("User does not exist"); // Show error if user does not exist
    }
  };

  return (
    <>
      <body id="Log">
        <div className="wrapper">
          <img id="img" src={logo} alt="Logo" /> {/* Display logo image */}
          <form onSubmit={handleSubmit}>
            <h1>SIGN IN</h1> {/* Form heading */}
            <div className='input-box'>
              <input
                type="text"
                placeholder="Email"
                className="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <i className='bx bxs-user'></i> {/* User icon */}
            </div>
            <div className='input-box'>
              <input
                type="password"
                placeholder="Password"
                className="email"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i className='bx bxs-lock-alt'></i> {/* Lock icon */}
              {error && <div className="error">{error}</div>} {/* Display error message if exists */}
            </div>
            <Link to="/home">
              <button
                type='submit'
                className='btn'
              >
                Login
              </button>
            </Link>
            <div className='register-link'>
              <Link to="/Signup" id="link">
                <p>Don't have an account? Signup</p> {/* Link to Signup page */}
              </Link>
            </div>
          </form>
        </div>
      </body>
    </>
  );
}

export default Login; // Export the Login component for use in other parts of the application
