import * as React from 'react';
import { useState} from 'react';
import { createuser } from '../Services/Service';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../Owner/Ownersign.css';

const Signup = () => {

  const nav = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError('Please fill in all fields.');
    } else {
      setError('');
      const user = { name, email, password };
      try {
        console.log("Signed in : ",{name,email,password});
        const response = await createuser(user); // Make API call to backend
        console.log(response.data);
        nav("/Welcome"); 
      } catch (error) {
        console.error(error);
        setError('An error occurred. Please try again.');
      }
    }
  };

    return (
      <div className="signup-container">
      <div className="signup-content">
        <h2 id="signh2" style={{fontSize:"32px",marginLeft:"100px"}}> Sign Up</h2>
        <form onSubmit={handleSubmit} className="signup-form">
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
          {error && <div className="error">{error}</div>}
          <button type="submit" className="bttn">Sign Up</button>
        </form>
        <div className="login-option">
          Already have an account? <Link to="/Ownerlogin">Login</Link>
        </div>
      </div>
    </div>
  );
};
export default Signup;