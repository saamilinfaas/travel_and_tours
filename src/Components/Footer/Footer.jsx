import React, { useEffect } from 'react';
import './footer.css';
import video2 from '../../Assets/35427-407130886_small.mp4';
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronsRight } from "react-icons/fi";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])

  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type='video/mp4'></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Email Address'/>
            <button data-aos="fade-up" className='btn flex' type='submit'>
              SEND <FiSend className='icon'/>
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <MdOutlineTravelExplore className='icon'/> Travel
              </a>
            </div>
            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reprehenderit dignissimos iure, cum iste architecto incidunt officiis quae a quam saepe neque minima ut omnis ullam repellat minus quidem obcaecati.
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
            <AiOutlineTwitter className='icon'/>
            <AiOutlineYoutube className='icon'/>
            <AiOutlineInstagram className='icon'/>
            <FaTripadvisor className='icon'/>
            </div>
          </div>

            {/* Group one */}
          <div className="footerLinks grid">
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>
              <li className="footerList flex">
              <FiChevronsRight className='icon'/>
              Services
              </li>
              <li className="footerList flex">
              <FiChevronsRight className='icon'/>
              Insurance
              </li>
              <li className="footerList flex">
              <FiChevronsRight className='icon'/>
              Agency
              </li>
              <li className="footerList flex">
              <FiChevronsRight className='icon'/>
              Tourism
              </li>
              <li className="footerList flex">
              <FiChevronsRight className='icon'/>
              Payment
              </li>
            </div>

            {/* Group Two */}
          
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
                Partners
              </span>
              <li className="footerList flex">
              <FiChevronsRight className='icon'/>
              Booking
              </li>
              <li className="footerList flex">
              <FiChevronsRight className='icon'/>
              Rentcars
              </li>
              <li className="footerList flex">
              <FiChevronsRight className='icon'/>
              HostelWorld
              </li>
              <li className="footerList flex">
              <FiChevronsRight className='icon'/>
              Trivago
              </li>
              <li className="footerList flex">
              <FiChevronsRight className='icon'/>
              TripAdvisor
              </li>
            </div>
          
          {/* Group Three */}
          
            <div data-aos="fade-up" data-aos-duration="5000"  className="linkGroup">
              <span className="groupTitle">
                Last Minut
              </span>
              <li className="footerList flex">
              <FiChevronsRight className='icon'/>
              London
              </li>
              <li className="footerList flex">
              <FiChevronsRight className='icon'/>
              California
              </li>
              <li className="footerList flex">
              <FiChevronsRight className='icon'/>
              Indonasia
              </li>
              <li className="footerList flex">
              <FiChevronsRight className='icon'/>
              Europe
              </li>
              <li className="footerList flex">
              <FiChevronsRight className='icon'/>
              Oceania
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED - SAAMIL INFAAS</small>
          </div>
          
          </div>
        
      </div>
    </section>
  )
}

export default Footer