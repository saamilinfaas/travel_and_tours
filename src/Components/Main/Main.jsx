import React, { useEffect } from 'react';
import './main.css';
import img from '../../Assets/pexels-adem-albayrak-383796555-19197428.jpg';
import img2 from '../../Assets/pexels-amanda-hemstreet-44398081-27731157.jpg';
import img3 from '../../Assets/pexels-francesco-ungaro-26700466.jpg';
import img4 from '../../Assets/pexels-francesco-ungaro-27047511.jpg';
import img5 from '../../Assets/pexels-janonovoa-16756544.jpg';
import img6 from '../../Assets/pexels-kammeran-gonzalez-keola-3137381-26570912.jpg';
import img7 from '../../Assets/pexels-mathias-dargnat-1141076318-26690031.jpg';
import img8 from '../../Assets//pexels-nico-marin-703142244-26045508.jpg';
import img9 from '../../Assets/pexels-adem-albayrak-383796555-19197428.jpg';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import Aos from 'aos' ;
import 'aos/dist/aos.css';


const Data = [
  {
    id:1,
    imgSrc:img ,
    destTitle:"Bora Bora",
    location:"New Zealand",
    grade:"CULTURE RELAX",
    fees:"$700",
    description:"The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for it's luxurious stays and adventurous activities."
  },
  {
    id:2,
    imgSrc:img2,
    destTitle:"Machu Picchu",
    location:"Peru",
    grade:"CULTURE RELAX",
    fees:"$600",
    description:"Huayna Picchu is a mountain in peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular amoung tourists as the sunrise from the sun Gate is simply spectacular."
  },
  {
    id:3,
    imgSrc:img3,
    destTitle:"Great Barrier Reef",
    location:"Australia",
    grade:"CULTURE RELAX",
    fees:"$700",
    description:"One of the most remarkable Australian natural gifts is the great Barrier Reef. The hallmark of this place is 'lavish' and 'beauty'. Always interesting to be in this place."
  },
  {
    id:4,
    imgSrc:img4,
    destTitle:"Coppadocia",
    location:"Turkey",
    grade:"CULTURE RELAX",
    fees:"$800",
    description:"According to the wrord tourism ranking, 45 Million people visit turkey each year, and from that about 2 Million come to visit Cappadocia. This place is known for it;s luxurious stays and adventurous activities."
  },
  {
    id:5,
    imgSrc:img5,
    destTitle:"Guanajuato",
    location:"Maxico",
    grade:"CULTURE RELAX",
    fees:"$1100",
    description:"A City in central Maxico, Guanajuato is known for it;s history of silver mining and colonial architecture. The houses in the city are very attractively painted with the most bright colors available. Always welcome."
  },
  {
    id:6,
    imgSrc:img6,
    destTitle:"Cinque Terre",
    location:"Italy",
    grade:"CULTURE RELAX",
    fees:"$840",
    description:"The vibrant hues of the houses are it's benchmark and explain the beauty of this place. Also, if you are a foodie and love seafood, you will be exhilarated with the choice you are about to get here. Happy exploring great food!."
  },
  {
    id:7,
    imgSrc:img7,
    destTitle:"Angkor Wat",
    location:"Cambodia",
    grade:"CULTURE RELAX",
    fees:"$790",
    description:"Angkor Wat represents the entire range of Khmer art from the 9th to the 15th century. This temple is considered the heart and soul of Cambodia. This place is known for it's luxurious stays and adventurous activities."
  },
  {
    id:8,
    imgSrc:img8,
    destTitle:"Taj Mahal",
    location:"India",
    grade:"CULTURE RELAX",
    fees:"$900",
    description:"An immense mausoleum of white marble, build-in Agra by Mughal emperor Shah Jahan in memory of his wife Mumtaz, the monument is breathtakingly beautiful. This place is known for it's luxurious stays and adventurous activities."
  },
  {
    id:9,
    imgSrc:img9,
    destTitle:"Bali Island",
    location:"Indonasia",
    grade:"CULTURE RELAX",
    fees:"$500",
    description:"Bali is an Indonasian island and one of the best holiday destinations in the Indonasian archipelago. Bali is known for it's volcanic mountains, history, art & culture, food, temples and beatiful sandy beaches."
  }
]

const Main = () => {

  //Lets create a react hook to add a scroll animation

  useEffect(()=>{
    Aos.init({duration:2000})
  },[]);

  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
       { Data.map(({id,imgSrc,destTitle,location,grade,fees,description}) => {
          return (
            <div data-aos="fade-up" className="singleDestination" key={id}>
              <div className="imageDiv">
                <img src={imgSrc} alt={destTitle} loading='lazy-loading'/>
              </div>
              
              <div className="cardInfo">
                <h4 className="destTitle">
                  {destTitle}
                </h4>
                <span className="continent flex">
                <HiOutlineLocationMarker className='icon'/>
                <span className="name">{location}</span>
                </span>
                <div className="fees flex">
                  <div className="grade">
                    <span>{grade}<small>+1</small></span>
                  </div>
                  <div className="price">
                    <h5>{fees}</h5>
                  </div>
                </div>
                <div className="desc">
                    <p>{description}</p>
                </div>

                <button className="btn flex">
                  DETAILS <HiOutlineClipboardCheck className='icon'/>
                </button>
                  

              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Main