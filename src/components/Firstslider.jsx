import React from 'react'

import './Firstslider.css'; // Import your CSS file for styling

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import Pizza from '../assets/pizza.png'; 
import Smallburger from '../assets/smallburger.png'; 
import Chips from '../assets/chips.png'; 
import Grilledchicken from '../assets/grilledchicken.png'; 
import Aright from '../assets/Aright.png'; 
import Aleft from '../assets/Aleft.png'; 


function Firstslider() {

    const cardsData = [
        { image: Pizza, content: 'Pepperoni', content2: 'Pizza' },
        { image: Smallburger, content: 'Pepperoni', content2: 'Pizza'},
        { image: Chips, content: 'Pepperoni', content2: 'Pizza'},
        { image: Grilledchicken, content: 'Pepperoni', content2: 'Pizza' },

     ];

     const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024, // breakpoint for desktop
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768, // breakpoint for tablet/mobile
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    

    
         
  return (
    <> 

    


<div className="carousel-container" style={{ padding: '0 30px', background: '#edf2f4' }}>
        <p className='text-success fw-bold pt-5' style={{ marginLeft: '40px' }}>CRISPY, EVERY BITE TASTE</p>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', marginLeft: '40px' }}>
      <div style={{ flex: 1 }}>
      <h3>POPULAR FOOD ITEMS</h3>
      </div>
      <div style={{ flex: 'none', marginLeft: 'auto'}}>
        <img src={Aleft}  alt="Your Image" style={{ marginRight: '20px', float: 'right' }} />
      </div>
      <div style={{ flex: 'none', marginLeft: 'auto' }}>
        <img src={Aright}  alt="Your Image" style={{ float: 'right' }} />
      </div>
    </div>


<div className="mt-5" style={{ marginLeft: '5px', }}>
      {/* <section className="row"> */}
      <Slider {...settings}>
        {cardsData.map((card, index) => (
          <div key={index} className="col-md-6 " >
             <div className="slider-item mt-3" >
             <div className="card1" style={{  marginLeft: '1rem' }}>
              <img src={card.image} className="card-img-top" alt="..." />
              <div className="card-body" style={{textAlign: 'center'}}>
              <div className='bg-yellow ' style={{margin: 'auto'}}></div>
                <p className="card-text fw-bold pt-3">{card.content} <br /> {card.content2}</p>
              </div>
            </div>
            
             </div>
          </div>
        ))}
        </Slider>
      {/* </section> */}
    </div>
    </div>

    </>
  )
}

export default Firstslider