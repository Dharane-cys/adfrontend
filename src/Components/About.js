import React, { useState } from 'react';
import './About.css';
import Navbar from './Navbar';  // Import the Navbar component
import Component1 from './About1'; // Import the first slide component
import Component2 from './About2'; // Import the second slide component
import Component3 from './About3'; // Import the third slide component

// Array of components to be used in the slider
const components = [
    <Component1 />,
    <Component2 />,
    <Component3 />
];

const About = () => {
    // State to keep track of the currently visible component in the slider
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to show a specific slide based on the index
    const showSlide = (index) => {
        if (index >= 0 && index < components.length) {
            setCurrentIndex(index);
        }
    };

    // Function to go to the previous slide
    const prevSlide = () => {
        showSlide((currentIndex - 1 + components.length) % components.length);
    };

    // Function to go to the next slide
    const nextSlide = () => {
        showSlide((currentIndex + 1) % components.length);
    };

    return (
        <div>
            <Navbar /> {/* Render the Navbar component */}
            <div className="slider">
                {/* Render the currently visible slide */}
                {components.map((component, index) => (
                    <div key={index} className={`slides ${index === currentIndex ? 'active' : ''}`}>
                        {component}
                    </div>
                ))}
                <div className="arrows">
                    {/* Left arrow button to navigate to the previous slide */}
                    <span className="arrow left-arrow" onClick={prevSlide}>&#9664;</span>
                    {/* Right arrow button to navigate to the next slide */}
                    <span className="arrow right-arrow" onClick={nextSlide}>&#9654;</span>
                </div>
            </div>
        </div>
    );
};

export default About;
