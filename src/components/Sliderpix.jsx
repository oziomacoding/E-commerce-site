import React from 'react';

import Icon1 from '../assets/icon1.png';
import Icon2 from '../assets/icon2.png';
import Icon3 from '../assets/icon3.png';
import Icon4 from '../assets/icon4.png';
import Icon5 from '../assets/icon5.png';
import './Sliderpix.css'; // Import your CSS file for styling


function Sliderpix () {
    // const images = [Icon1, Icon2, Icon3, Icon4, Icon5];
    // const [currentIndex, setCurrentIndex] = useState(0);

   
  
    return (
      <>
      <p className='text-success fw-bold 'style={{ marginLeft: '40px' }}>HAPPY SPONSORS WITH US</p>
      <div className="slider-wrapper pb-5 " style={{ marginLeft: '40px' }}>
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
  {/* //       <div className="slider-wrapper pt-5" style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
  //         {images.map((image, index) => ( */}
  {/* //           <img key={index} src={image} alt={`slide-${index}`} className="slide me-5 ms-5" />
  //         ))}
  //       </div>
       */}
     
  {/* //   );
  // };
  
  // const App = () => { */}
  {/* //   return (
  //     <div> */}
       
  {/* //       <Sliderpix />
  //     </div> */}
  </>
    )
  }
  
  export default Sliderpix