import React from "react";
import Navbar from "./Navbar"; // Import Navbar component for consistent navigation
import "./Contact.css"; // Import CSS file for styling the Contact component
import Footer from "./Footer"; // Import Footer component for page footer

function Contact() {
    return (
        <div>
            <Navbar /> {/* Render the Navbar component at the top of the page */}

            <div className="contact-container">
                <h2>Contact Us</h2> {/* Main heading for the contact page */}
                <p>Do you have any questions? Feel free to reach out to us for any inquiries or assistance you may need.</p>
                <br />
                <div className="contact-details">
                    {/* Container for different contact methods */}
                    <div className="contact-items">
                        <i className="fas fa-envelope"></i> {/* Font Awesome envelope icon for email */}
                        <h3>Write Us</h3> {/* Subheading for email contact */}
                        <p>info@forkandfortune.com</p> {/* Primary contact email */}
                        <p>reservation@forkandfortune.com</p> {/* Reservation email */}
                    </div>
                    <div className="contact-items">
                        <i className="fas fa-phone-alt"></i> {/* Font Awesome phone icon for phone numbers */}
                        <h3>Call Us</h3> {/* Subheading for phone contact */}
                        <p>+91 97586 24356</p> {/* Primary contact number */}
                        <p>+91 67498 23547</p> {/* Secondary contact number */}
                    </div>
                    <div className="contact-items">
                        <i className="fas fa-map-marker-alt"></i> {/* Font Awesome map marker icon for address */}
                        <h3>Visit Us</h3> {/* Subheading for physical address */}
                        <p>Kuniyamuthur, Coimbatore</p> {/* Address line 1 */}
                        <p>Tamil Nadu - 641 005</p> {/* Address line 2 with postal code */}
                    </div>
                </div>
            </div>
            <Footer /> {/* Render the Footer component at the bottom of the page */}
        </div>
    );
}

export default Contact;
