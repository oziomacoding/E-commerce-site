import React from 'react'
// import './Slider.css'; // Import your CSS file for styling

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import Pizza from '../assets/pizza.png'; 
import Smallburger from '../assets/smallburger.png'; 
import Chips from '../assets/chips.png'; 
import Grilledchicken from '../assets/grilledchicken.png'; 
import Aright from '../assets/Aright.png'; 
import Aleft from '../assets/Aleft.png'; 


function Slider() {
  
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
     {/* <div className="carousel-container pt-5" style={{ padding: '0 30px' }}>
        <p className='text-success fw-bold'>CRISPY, EVERY BITE TASTE</p>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
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
      
      <div className="slider-cover " style={{ marginLeft: '40px' }}>
        <div className="slidee">
        <img src={Pizza} alt="" />
        <div className='bg-yellow'></div>
          <p className='fw-bold'>Pepperoni <br />Pizza</p>
      

        </div>
        <div className="slidee">
        <img src={Chips} alt="" />
        <div className='bg-yellow'></div>
          <p className='fw-bold'>Potato <br /> Chips </p>

        </div>
        <div className="slidee">
        <img src={Smallburger} alt="" />
        <div className='bg-yellow'></div>
          <p className='fw-bold'>Cheese <br /> Burger</p>

        </div>
        <div className="slidee">
        <img src={Grilledchicken} alt="" />
        <div className='bg-yellow'></div>
          <p className='fw-bold'> Grilled <br />Chicken</p>
        </div>
        
      </div>



      </div> */}

        <div className="carousel-container pt-5" style={{ padding: '0 30px' }}>
        <p className='text-success fw-bold'>CRISPY, EVERY BITE TASTE</p>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
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
        
        
         
        
      <Slider {...settings} style={{ textAlign: 'center', boxSizing: 'border-box'}}>
        
        <div className='card col-md-4' >
          <img src={Pizza} alt="" className= " w-50 " />
          <div className="card-body">
          <div className='bg-yellow'></div>
          <p className='fw-bold'>Pepperoni <br />Pizza</p>
        </div>
        </div>
        <div className='card col-md-4' >
          <img src={Smallburger} alt="" className= "d-block w-50 "/>
          <div className="card-body">
          <div className='bg-yellow'></div>
          <p className='fw-bold'>Potato <br /> Chips </p>
        </div>
        </div>
        <div className='card col-md-4'>
          <img src={Chips} alt="" className= "d-block w-50"/>
          <div className="card-body">
          <div className='bg-yellow'></div>
          <p className='fw-bold'>Cheese <br /> Burger</p>
        </div>
        </div>
        <div className='card col-md-4'>
          <img src={Grilledchicken} alt="" className= "d-block w-50 img-fluid pt-1"/>
          <div className="card-body">
          <div className='bg-yellow'></div>
          <p className='fw-bold'> Grilled <br />Chicken</p>
        </div>
        </div>
        
      </Slider>

      
    </div> 

    
      
 
  

    
    </>
  )
}

export default Slider