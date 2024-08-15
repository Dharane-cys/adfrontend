import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Welcome from './Components/Welcome';
import About from './Components/About';
import Menu from './Components/Menu';
import Reservation from './Components/Reservation';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Ownerlogin from './Owner/Ownerlogin';
import Ownersign from './Owner/Ownersign';
import Ownerhome from './Owner/Ownerhome';
import MenuManage from './Owner/MenuManagement';
import Bookings from './Owner/Bookings';
import CategoryForm from './Owner/CategoryForm';
import Cart from './Components/Cart';
import { CartProvider } from './Components/CartContext';
import withAuth from './Session/withAuth';
import Orders from './Owner/Orders';
// Wrap components that require authentication
const ProtectedWelcome = withAuth(Welcome);
const ProtectedAbout = withAuth(About);
const ProtectedMenu = withAuth(Menu);
const ProtectedReservation = withAuth(Reservation);
const ProtectedTestimonials = withAuth(Testimonials);
const ProtectedContact = withAuth(Contact);
const ProtectedCart = withAuth(Cart);

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<ProtectedWelcome />} />
            <Route path="/about" element={<ProtectedAbout />} />
            <Route path="/menu" element={<ProtectedMenu />} />
            <Route path="/reservations" element={<ProtectedReservation />} />
            <Route path="/testimonials" element={<ProtectedTestimonials />} />
            <Route path="/contact" element={<ProtectedContact />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/ownerlogin" element={<Ownerlogin />} />
            <Route path="/ownersign" element={<Ownersign />} />
            <Route path="/ownerhome" element={<Ownerhome />} />
            <Route path="/menumanage" element={<MenuManage />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="orders" element={<Orders/>}/>
            <Route path="/starter" element={<CategoryForm category="Starter" />} />
            <Route path="/maincourse" element={<CategoryForm category="MainCourse" />} />
            <Route path="/sides" element={<CategoryForm category="Sides" />} />
            <Route path="/dessert" element={<CategoryForm category="Dessert" />} />
            <Route path="/beverages" element={<CategoryForm category="Beverages" />} />
            <Route path="/cart" element={<ProtectedCart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
