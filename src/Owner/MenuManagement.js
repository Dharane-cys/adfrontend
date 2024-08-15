import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import starter from '../Assests/starter.jpg';
import mainCourse from '../Assests/main.webp';
import sides from '../Assests/side.jpg';
import dessert from '../Assests/desserts.jpg';
import beverages from '../Assests/beverages.gif';

function AdminPage() {
  const navigate = useNavigate();

  const buttonStyle = {
    width: '170px',
    height: '170px',
    border: 'none',
    borderRadius: '10px',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center',
    justifyContent: 'flex-start',
    overflow: 'hidden',
  };

  const imageStyle = {
    width: '100%',
    height: '120px',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  };

  const textStyle = {
    marginTop: '5px',
    fontSize: '14px',
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#f6f9fd',
  };

  return (
    <div style={{backgroundColor:'black',height:'100vh'}}>
      <Sidebar />
      <div >
        <h1 style={{marginLeft:'700px',fontFamily:'cursive',fontSize:'50px',fontWeight:'bold',color:'white',paddingTop:'100px'}}>Add a menu</h1>
        <nav>
          <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', gap: '80px',marginLeft:'300px',marginTop:'130px' }}>
            <li>
              <button
                onClick={() => navigate('/starter')}
                style={buttonStyle}
                onMouseEnter={(e) => e.currentTarget.firstChild.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.firstChild.style.transform = 'scale(1)'}
              >
                <img src={starter} alt="Starter" style={imageStyle} />
                <span style={textStyle}>Starter</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate('/maincourse')}
                style={buttonStyle}
                onMouseEnter={(e) => e.currentTarget.firstChild.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.firstChild.style.transform = 'scale(1)'}
              >
                <img src={mainCourse} alt="Main Course" style={imageStyle} />
                <span style={textStyle}>Main Course</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate('/sides')}
                style={buttonStyle}
                onMouseEnter={(e) => e.currentTarget.firstChild.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.firstChild.style.transform = 'scale(1)'}
              >
                <img src={sides} alt="Sides" style={imageStyle} />
                <span style={textStyle}>Sides</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate('/dessert')}
                style={buttonStyle}
                onMouseEnter={(e) => e.currentTarget.firstChild.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.firstChild.style.transform = 'scale(1)'}
              >
                <img src={dessert} alt="Dessert" style={imageStyle} />
                <span style={textStyle}>Dessert</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate('/beverages')}
                style={buttonStyle}
                onMouseEnter={(e) => e.currentTarget.firstChild.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.firstChild.style.transform = 'scale(1)'}
              >
                <img src={beverages} alt="Beverages" style={imageStyle} />
                <span style={textStyle}>Beverages</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default AdminPage;
