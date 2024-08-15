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
    dots: true, 
    infinite: true,
    speed: 500, 
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
          infinite: true, 
          dots: true 
        }
      },
      {
        breakpoint: 600, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1, 
          initialSlide: 1 
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1 
        }
      }
    ]
  };

  return (
    <div>
      <Navbar/> 
      <div className="testimonial-section"> 
        <h2>Our Clients Say!!!</h2> 
        <Slider {...settings}> 
          {testimonials.map((testimonial, index) => ( 
            <div className="testimonial" key={index}> 
              <p>"{testimonial.text}"</p> 
              <div className="client-info"> 
                <img src={testimonial.image} alt={testimonial.name} /> 
                <div>
                  <h4>{testimonial.name}</h4> 
                  <p>{testimonial.profession}</p> 
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial; 
