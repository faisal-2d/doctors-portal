import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';
import Appointment from './Components/Appointment/Appointment';
import Review from './Components/Home/Review';
import Contact from './Components/Contact';
import About from './Components/About';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
