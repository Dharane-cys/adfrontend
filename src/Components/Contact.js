import React from "react";
import Navbar from "./Navbar"; 
import "./Contact.css"; 
import Footer from "./Footer"; 
function Contact() {
    return (
        <div>
            <Navbar /> {/* Render the Navbar component at the top of the page */}

            <div className="contact-container" style={{backgroundColor:'black'}}>
                <h2>Contact Us</h2> 
                <p>Do you have any questions? Feel free to reach out to us for any inquiries or assistance you may need.</p>
                <br />
                <div className="contact-details">
                    
                    <div className="contact-items">
                        <i className="fas fa-envelope"></i> 
                        <h3>Write Us</h3> 
                        <p>info@forkandfortune.com</p>
                        <p>reservation@forkandfortune.com</p>
                    </div>
                    <div className="contact-items">
                        <i className="fas fa-phone"></i> 
                        <h3>Call Us</h3> 
                        <p>+91 97895 95689</p>
                        <p>+91 97586 24356</p> 
                    </div>
                    <div className="contact-items">
                        <i className="fas fa-map-marker-alt"></i> 
                        <h3>Visit Us</h3> 
                        <p>Kuniyamuthur, Coimbatore</p> 
                        <p>Tamil Nadu - 641 008</p>
                    </div>
                </div>
            </div>
            <Footer /> 
        </div>
    );
}

export default Contact;
