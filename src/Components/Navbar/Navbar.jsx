import React, { useState } from 'react'
import './navbar.css';
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from 'react-icons/tb';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [active,setActive] = useState("navBar");
  //Function to toggle navbar
  const showNav = ()=>{
    setActive('navBar activeNavbar');
  }
  //Function to remove navbar
  const removeNavbar = ()=>{
    setActive('navBar');
  }  

  return (
    <section className='navbarSection'>
      <header className='header flex'>

        <div className="logoDiv">
          {/* <a href="#" className="logo flex"><h1><MdOutlineTravelExplore className='icon'/>Travel.</h1></a> */}
           <Link to='/' className="logo flex"><h1><MdOutlineTravelExplore className='icon'/>Travel.</h1></Link> 
        </div>

        <div className={active}>

          <ul className="navLists flex">

            <li className="navItem">
              <Link to='/' className="navLink">Home</Link>
            </li>

            <li className="navItem">
              <Link to='/packages' className="navLink">Packages</Link>
            </li>

            <li className="navItem">
              <Link to='/shop' className='navLink'>Shop</Link>
            </li>

            <li className="navItem">
              <Link to='/about' className='navLink'>About</Link>
            </li>

            <li className="navItem">
              <Link to='/pages' className='navLink'>Pages</Link>
            </li>

            <li className="navItem">              
              <Link to='/news' className='navLink'>News</Link>
            </li>

            <li className="navItem">              
              <Link to='/contact' className='navLink'>Contact</Link>
            </li>

            <button className="btn">
              <a href="#">Book Now</a>
            </button>

          </ul>

          <div className="closeNavbar" onClick={removeNavbar}>
          <AiFillCloseCircle className='icon'/>
          </div>


        </div>
          <div className="toggleNavbar" onClick={showNav}>
            <TbGridDots className='icon'/>
          </div>

      </header>
    </section>
  )
}

export default Navbar