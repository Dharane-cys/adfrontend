import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
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
import Orders from './Owner/Orders';
import MenuManage from './Owner/MenuManagement';
import Bookings from './Owner/Bookings';
import Reports from './Owner/Reports';
import CategoryForm from './Owner/CategoryForm';

function App() {
  return (
    <Router>
      <div >
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Login" element={<Login/> }/>
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/home" element={<Welcome/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/reservations" element={<Reservation/>}/>
          <Route path="/testimonials" element={<Testimonials/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/navbar" element={<Navbar/>}/>
          <Route path="/ownerlogin" element={<Ownerlogin/>}/>
          <Route path="/ownersign" element={<Ownersign/>}/>
          <Route path="/ownerhome" element={<Ownerhome/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/menumanage" element={<MenuManage/>}/>
          <Route path="/bookings" element={<Bookings/>}/>
          <Route path="/reports" element={<Reports/>}/>
          <Route path="/starter" element={<CategoryForm category="Starter" />} />
        <Route path="/maincourse" element={<CategoryForm category="MainCourse" />} />
        <Route path="/sides" element={<CategoryForm category="Sides" />} />
        <Route path="/dessert" element={<CategoryForm category="Dessert" />} />
        <Route path="/beverages" element={<CategoryForm category="Beverages" />} />
         </Routes>
      </div>
    </Router>
  );
}

export default App;