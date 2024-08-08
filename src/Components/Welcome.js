import React from "react"; 
import Navbar from "./Navbar"; 
import '../Components/Welcome.css'; 
import { Link } from "react-router-dom"; 

function Home() {
    return (
        <div>
            <Navbar /> {/* Render Navbar component */}
            <div id="wel">
                <h1 id="typing-effect"> 
                    Enjoy Our <br /> {/* Line break */}
                    Delicious Meal
                </h1>
                <p id="para"> 
                    Pull up a chair and stay<br /> {/* Line break */}
                    &ensp; a while! Book your <br /> {/* Line break with spacing */}
                    &ensp;&ensp; table now!
                </p>
                <br /> {/* Line break */}
                <Link to="/reservations"> {/* Navigation link to reservations page */}
                    <button id="book"> {/* Button to book a table */}
                        Book Table
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Home; // Export Home component
