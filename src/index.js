import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/nav.js';
import About from './Components/about.js';
import Contact from './Components/contact.js';
import Shop from './Components/shop';
import Home from './Components/home.js';


ReactDOM.render(
  <Router>
    <NavBar />
    <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/shop' element={<Shop/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
  </Router> ,
  document.getElementById('root')
);