import React from 'react';
import './Footer.css'; // Import CSS file for styling the Footer component

function Footer() {
  return (
    <div>
      <div className="Footer">
        <main>
          <section className="contact">
            {/* Company Information Section */}
            <div className="contact-item">
              <h2 style={{ textAlign: 'left' }}>Company</h2> {/* Section heading */}
              <ul>
                {/* List of company-related links */}
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Reservation</li>
                <li>Privacy Policy</li>
                <li>Terms & Condition</li>
              </ul>
            </div>
            
            {/* Opening Hours Section */}
            <div className="contact-item">
              <h2>Opening</h2> {/* Section heading */}
              <p>Monday : 9.00AM - 9.00PM</p> {/* Opening hours */}
              <p>Tuesday : 9.00AM - 9.00PM</p>
              <p>Wednesday : 9.00AM - 9.00PM</p>
              <p>Thursday : 9.00AM - 9.00PM</p>
              <p>Friday : 9.00AM - 9.00PM</p>
              <p>Saturday : 9.00AM - 9.00PM</p>
              <p>Sunday : 10.00AM - 8.00PM</p>
            </div>

            {/* Newsletter Subscription Section */}
            <div className="contact-item">
              <h2>Newsletter</h2> {/* Section heading */}
              <p>Receive the latest news from our restaurant.</p> {/* Subscription prompt */}
              <input type="email" placeholder="Your email" /> {/* Email input field */}
              <button>SIGNUP</button> {/* Signup button */}
            </div>
          </section>
        </main>

        {/* Footer Text Section */}
        <footer>
          <p>&copy; Fork & Fortune, All Rights Reserved.</p> {/* Footer text */}
        </footer>
      </div>
    </div>
  );
}

export default Footer;
