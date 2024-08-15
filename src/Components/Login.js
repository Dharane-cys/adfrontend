import { Link } from 'react-router-dom'; 
import * as React from 'react'; 
import { useState } from 'react'; // Import useState hook for managing state
import '../Components/Login.css'; 
import logo from '../Assests/logo.png';
import { useNavigate } from 'react-router-dom'; 
import { listusers } from '../Services/Service'; 

function Login() {
  const nav = useNavigate(); 

  // State hooks for managing email, password, and error message
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  

  // Function to check if the user exists with the given email and password
  const checkUser = async (email, password) => {
    const response = await listusers(); 
    return response.data.some(
      (user) => user.email === email && user.password === password
    ); 
  };

  // Example in the Login component
const handleSubmit = async (e) => {
  e.preventDefault();
  const user = { email, password };
  const userExist = await checkUser(user.email, user.password);

  if (!email || !password) {
    setError('Please enter both email and password.');
  } else if (userExist) {
    localStorage.setItem('isAuthenticated', 'true');                            
   // localStorage.clear();
    nav('/home',{replace:true});
    setError('');
  } else {
    setError("User does not exist");
  }
};


  return (
    <>
      <body id="Log">
        <div className="wrapper">
          <img id="img" src={logo} alt="Logo" /> 
          <form onSubmit={handleSubmit}>
            <h1>SIGN IN</h1>
            <div className='input-box'>
              <input
                type="text"
                placeholder="Email"
                className="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <i className='bx bxs-user'></i> 
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
              <i className='bx bxs-lock-alt'></i> 
              {error && <div className="error">{error}</div>} 
            </div>
              <button style={{backgroundColor:'brown',borderRadius:'25px',color:'white'}}
                type='submit'
                className='btn'
              >
                Login
              </button>
            
            <div className='register-link'>
              <Link to="/Signup" id="link">
                <p>Don't have an account? Signup</p> 
              </Link>
            </div>
          </form>
        </div>
      </body>
    </>
  );
}

export default Login;
