import React from 'react'
import './Products.css'; // Import your CSS file for styling
import Pizza2 from '../assets/pizza.png'
import Sharwama from '../assets/sharwama.png'
import Friedchicken2 from '../assets/fried-chicken.png'
import Chips2 from '../assets/chips.png'
import Potato1 from '../assets/potato1.png'
import Smallburger from '../assets/smallburger.png'
import Chickenrice from '../assets/chickenrice.png'
import Pasta from '../assets/pasta-3.png'











function Products() {
  return (
    <>
      <div className="container1 mt-5" >
      <div className=" fw-bold mb-3" style={{ textAlign: 'center' }}>
                        <p className='text-success pt-5'>CRISPY, EVERY BITE TASTE</p>
                        <h3>POPULAR FOOD ITEMS</h3>
                        </div>
        <ul className="cards " style={{ marginLeft: '40px' }}>
          <div>
            <li className="card">
              <div>
                <div className="card-title "><i className="bi bi-heart"></i></div>
                <div className="card-content">

                  <img src={Pizza2} alt="" />

                </div>
              </div>

            </li>
            <p className='mt-3'>Pepperoni Pizza'</p>
            <div className="star pb-3">
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star" style={{ color: '#EA9E3A' }}></i>


            </div>
            <p>$30.52 &nbsp;
              <span className='formatted-number'>$38.52</span></p>

          </div>
          <div>
            <li className="card" >
              <div>
              <div className="card-title " ><i className="bi bi-heart "></i></div>             
                <div className="card-content ">
                  <img src={Sharwama} alt="" />

                </div>

              </div>
              <div className="card-link-wrapper " style={{ paddingBottom: '100px'}}>
                <a href="" className="card-link" style={{ placeContent: 'center', marginLeft: '60px' }}>Add to cart</a>
              </div>
            </li>
            <p className='mt-3'>Beef Shawarma</p>
            <div className="star pb-3">
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star" style={{ color: '#EA9E3A' }}></i>


            </div>
            <p>$30.52 &nbsp;
              <span className='formatted-number'>$38.52</span></p>

          </div>
          <div>
            <li className="card " >
              <div>
                
              <h3 className="card-title" ><i className="bi bi-heart"></i> </h3>    
                      
                <div className="card-content">
                  <img src={Friedchicken2} alt="" />


                </div>
              </div>

            </li>
            <p className='mt-3'>Fried Chicken</p>
            <div className="star pb-3">
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star" style={{ color: '#EA9E3A' }}></i>


            </div>
            <p>$30.52 &nbsp;
              <span className='formatted-number'>$38.52</span></p>

          </div>
          <div>
            <li className="card" >
              <div>
              <h3 className="card-title"><i className="bi bi-heart"></i> </h3>              
                <div className="card-content">
                  <img src={Chips2} alt="" />


                </div>
              </div>

            </li>
            <p className='mt-3'>French Fries</p>
            <div className="star pb-3">
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star" style={{ color: '#EA9E3A' }}></i>


            </div>
            <p>$30.52 &nbsp;
              <span className='formatted-number'>$38.52</span></p>

          </div>
          <div>
            <li className="card" >
              <div>
              <h3 className="card-title"><i className="bi bi-heart"></i> </h3>              
                <div className="card-content">
                  <img src={Potato1} alt="" />


                </div>
              </div>

            </li>
            <p className='mt-3'>French Fries</p>
            <div className="star pb-3">
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star" style={{ color: '#EA9E3A' }}></i>


            </div>
            <p>$30.52 &nbsp;
              <span className='formatted-number'>$38.52</span></p>

          </div>
        </ul>
      </div>


      <div className="container1" style={{ height: '100%' }}>

        <ul className="cards" style={{ marginLeft: '40px' }}>
          <div>
            <li className="card" >
              <div>
              <h3 className="card-title"><i className="bi bi-heart"></i> </h3>              
                <div className="card-content">
                  <img src={Smallburger} alt="" />


                </div>
              </div>
              <div className="card-link-wrapper " style={{ paddingBottom: '100px'}}>
                <a href="/Cheeseburger" className="card-link" style={{ placeContent: 'center', marginLeft: '60px' }}>Add to cart</a>
              </div>

            </li>
            <p className='mt-3'>Cheese Burger</p>
            <div className="star pb-3">
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star" style={{ color: '#EA9E3A' }}></i>


            </div>
            <p>$30.52 &nbsp;
              <span className='formatted-number'>$38.52</span></p>

          </div>
          <div>
            <li className="card" >
              <div>
              <h3 className="card-title"><i className="bi bi-heart"></i> </h3>              
                <div className="card-content">
                  <img src={Chickenrice} alt="" />


                </div>
              </div>

            </li>
            <p className='mt-3'>Beef Shawarma</p>
            <div className="star pb-3">
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star" style={{ color: '#EA9E3A' }}></i>


            </div>
            <p>$30.52 &nbsp;
              <span className='formatted-number'>$38.52</span></p>

          </div>
          <div>
            <li className="card" >
              <div>
              <h3 className="card-title"><i className="bi bi-heart"></i> </h3>              
                <div className="card-content">
                  <img src={Pasta} alt="" />


                </div>
              </div>

            </li>
            <p className='mt-3'>Pasta</p>
            <div className="star pb-3">
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star" style={{ color: '#EA9E3A' }}></i>


            </div>
            <p>$30.52 &nbsp;
              <span className='formatted-number'>$38.52</span></p>

          </div>
          <div>
            <li className="card" >
              <div>
              <h3 className="card-title"><i className="bi bi-heart"></i> </h3>              
                <div className="card-content">
                  <img src={Chips2} alt="" />


                </div>
              </div>

            </li>
            <p className='mt-3'>French Fries</p>
            <div className="star pb-3">
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star" style={{ color: '#EA9E3A' }}></i>


            </div>
            <p>$30.52 &nbsp;
              <span className='formatted-number'>$38.52</span></p>

          </div>
          <div>
            <li className="card" >
              <div>
              <h3 className="card-title"><i className="bi bi-heart"></i> </h3>              
                <div className="card-content">
                  <img src={Potato1} alt="" />


                </div>
              </div>

            </li>
            <p className='mt-3'>French Fries</p>
            <div className="star pb-3">
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star" style={{ color: '#EA9E3A' }}></i>


            </div>
            <p>$30.52 &nbsp;
              <span className='formatted-number'>$38.52</span></p>

          </div>
        </ul>
        <div style={{ textAlign: 'center' }}>
        <a href="" className="btn btn-dark mt-3 px-20" >View more <i className="bi bi-arrow-right-circle"></i></a>
        </div>

      </div>

      
      
    </>
  )
}

export default Products