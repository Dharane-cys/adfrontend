import { Link } from 'react-router-dom';
import * as React from 'react';
import { useState} from 'react';
import '../Owner/Ownerlogin.css';
import logo from '../Assests/logo.png';
import { useNavigate } from 'react-router-dom';
import { Message } from '@mui/icons-material';


function Login(){
  const nav=useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
   
 
    if (!email || !password) {
      setError('Please enter both email and password.');
    }
    else if(email==="727722eucy047@skcet.ac.in" && password==="siva-1301")
    {

     nav('/Ownerhome')
    }
     else {
      Message("User does not exist");
    }
  };

      return (
        <>
        <body id="Log">
        <div className="wrapper">
        <img id ="img" src={logo}></img>
        <form action='' onSubmit={handleSubmit}>
        <h1>SIGN IN</h1>
        <div class='input-box'>
        <input
        type="text"
        placeholder="Email"
        className="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        />
        <i class='bx bxs-user'></i>
        </div>
        <div class='input-box'>
        <input
        type="password"
        placeholder="Password"
        className="email"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required

        />
        <i class='bx bxs-lock-alt'></i>
        {error && <div className="error">{error}</div>}
        </div>
       
        <button style={{backgroundColor:'brown',borderRadius:'25px',color:'white'}}
        type='submit'
        class='btn'
        > Login</button>
          
              <div class='register-link'>
              <Link to="/Ownersign" id="link">
              <p>Dont't have an account? Signup</p>
              </Link>
              </div>
              </form>
              
              </div>
              </body>
              </>
  );
}
export default Login;