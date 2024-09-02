import React from 'react';

import Icon1 from '../assets/icon1.png';
import Icon2 from '../assets/icon2.png';
import Icon3 from '../assets/icon3.png';
import Icon4 from '../assets/icon4.png';
import Icon5 from '../assets/icon5.png';

function Sliderpix () {
    
    return (
      <>
      <div className="container pt-5" style={{ paddingLeft: '40px', paddingRight: '40px'}}>
      <p className='text-success fw-bold '>HAPPY SPONSORS WITH US</p>
      <div className="d-flex flex-wrap pb-5 justify-content-between">
        <div className="slide">
        <img src={Icon1} alt="" />
        </div>
        <div className="slide">
        <img src={Icon2} alt="" />
        </div>
        <div className="slide">
        <img src={Icon3} alt="" />
        </div>
        <div className="slide">
        <img src={Icon4} alt="" />
        </div>
        <div className="slide">
        <img src={Icon5} alt="" />
        </div>
        <div className="slide">
        <img src={Icon1} alt="" />
        </div>
       
        
      </div>
      </div>
  </>
    )
  }
  
  export default Sliderpix