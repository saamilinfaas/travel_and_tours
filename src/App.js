import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Packages from './Components/Main/Packages';
import Shop from './Components/Main/Shop';
import About from './Components/Main/About';
import Pages from './Components/Main/Pages';
import News from './Components/Main/News';
import Contact from './Components/Main/Contact';
import axios from 'axios';


function App() {
  
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/main' element={<Main/>}/>
        <Route  path='/packages' element={<Packages/>}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/about' element={<About/>}/>                
        <Route path='/pages' element={<Pages/>}/>                
        <Route path='/news' element={<News/>}/>                
        <Route path='/contact' element={<Contact/>}/>                
      </Routes>    
    <Footer/>
    </BrowserRouter>
    
    </>
  );
}

export default App;
