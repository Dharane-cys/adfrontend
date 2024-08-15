import React from "react"; 
import Navbar from "./Navbar"; 
import '../Components/Welcome.css'; 
import { Link } from "react-router-dom"; 

function Home() {
    return (
        <div>
            <Navbar /> 
            <div id="welc">
                <h1 id="typing-effect"> 
                    Enjoy Our <br /> 
                    Delicious Meal
                </h1>
                <p id="para"> 
                    Pull up a chair and stay<br />
                    &ensp; a while! Book your <br /> 
                    &ensp;&ensp; table now!
                </p>
                <br /> 
                <Link to="/reservations"> 
                    <button id="book"> 
                        Book Table
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Home; // Export Home component
