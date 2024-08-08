import React from 'react'; 
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import './Testimonial.css'; 
import Navbar from './Navbar'; 
import c1 from '../Assests/client1.jpg';
import c2 from '../Assests/client2.jpg';
import c3 from '../Assests/client3.jpg';
import c4 from '../Assests/client4.jpg';
import c5 from '../Assests/client5.jpg';
import c6 from '../Assests/client6.jpg';

// Array of testimonial objects
const testimonials = [
  {
    text: "The ambiance and food at Fork and Fortune are simply unmatched. It’s my go-to place for any celebration!",
    name: "John Doe",
    profession: "Software Engineer",
    image: c1, 
  },
  {
    text: "Every dish is a masterpiece. Fork and Fortune never disappoints.",
    name: "Jane Smith",
    profession: "Graphic Designer",
    image: c2,
  },
  {
    text: "The service is excellent, and the food is to die for. Highly recommend this restaurant.",
    name: "Emily Johnson",
    profession: "Teacher",
    image: c3, 
  },
  {
    text: "I love the variety of dishes available. Always a delightful experience at Fork and Fortune.",
    name: "Michael Brown",
    profession: "Photographer",
    image: c4, 
  },
  {
    text: "A perfect blend of flavors and ambiance. Fork and Fortune is a must-visit!",
    name: "Sarah Williams",
    profession: "Doctor",
    image:c5,
  },
  {
    text: "The desserts here are simply out of this world. A great place to unwind and enjoy a meal.",
    name: "David Miller",
    profession: "Lawyer",
    image: c6,
  },
];


const Testimonial = () => {
  
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of slides 
    slidesToScroll: 1, // Number of slides 
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1000, // Speed of autoplay 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1, // Scroll 1 slide at a time
          infinite: true, // Infinite looping
          dots: true // Show dots for navigation
        }
      },
      {
        breakpoint: 600, 
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1, // Scroll 1 slide at a time
          initialSlide: 1 // Start with the second slide
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1 // Scroll 1 slide at a time
        }
      }
    ]
  };

  return (
    <div>
      <Navbar/> {/* Render Navbar component */}
      <div className="testimonial-section"> {/* Container for testimonials */}
        <h2>Our Clients Say!!!</h2> {/* Heading */}
        <Slider {...settings}> {/* Slider component with settings */}
          {testimonials.map((testimonial, index) => ( // Map over testimonials array
            <div className="testimonial" key={index}> {/* Render each testimonial */}
              <p>"{testimonial.text}"</p> {/* Testimonial text */}
              <div className="client-info"> {/* Container for client info */}
                <img src={testimonial.image} alt={testimonial.name} /> {/* Client image */}
                <div>
                  <h4>{testimonial.name}</h4> {/* Client name */}
                  <p>{testimonial.profession}</p> {/* Client profession */}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial; // Export the Testimonial component
