import React from 'react';
import './Footer.css'; // Import CSS file for styling the Footer component

function Footer() {
  return (
    <div>
      <div className="Footer">
        <main>
          <section className="contact">
            <div className="contact-item">
              <h2>Company</h2>
              <ul>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Reservation</li>
                <li>Menu List</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            
            {/* Opening Hours Section */}
            <div className="contact-item">
              <h2>Opening</h2>
              <p>Monday: 9.00AM - 9.00PM</p>
              <p>Tuesday: 9.00AM - 9.00PM</p>
              <p>Wednesday: 9.00AM - 9.00PM</p>
              <p>Thursday: 9.00AM - 9.00PM</p>
              <p>Friday: 9.00AM - 9.00PM</p>
              <p>Saturday: 9.00AM - 9.00PM</p>
              <p>Sunday: 10.00AM - 8.00PM</p>
            </div>

            {/* Google Map Section */}
            <div className="map-container">
              <h2>Find Us Here</h2>
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.877940958084!2d76.95592531462234!3d11.00128479222281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859c0342e6eb3%3A0x65e3c7a9b0f3b0d9!2sSri%20Krishna%20College%20of%20Technology!5e0!3m2!1sen!2sin!4v1605944077299!5m2!1sen!2sin"
                width="500"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
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
