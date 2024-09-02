import React from 'react';
import './Slider2.css';
import Pizza2 from '../assets/pizza.png'
import Sharwama from '../assets/sharwama.png'
import Grilledchicken from '../assets/grilledchicken.png';
import Chips2 from '../assets/chips.png'
import Potato1 from '../assets/potato1.png'
import Smallburger from '../assets/smallburger.png'
import Chickenrice from '../assets/chickenrice.png'
import Pasta from '../assets/pasta-3.png'



function Slider2() {


  return (
    <div className="carousel-container" style={{ background: '#edf2f4' }}>
     <div className=" fw-bold mb-3 pt-5" style={{ textAlign: 'center' }}>
            <p className='text-success pt-5'>CRISPY, EVERY BITE TASTE</p>
                <h3>POPULAR FOOD ITEMS</h3>
                 </div>

                 <div id="carouselExample" className="carousel slide">
                 <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="row p-5 justify-content-center align-items-center">
        <div className="col-md-4 col-sm-5" style={{border: 'none', boxShadow: 'none'}}>
          <div className="card mb-3" style={{ width: '20rem',padding: '8px'}}>
          <div className="card-icon "><i className="bi bi-heart"></i></div>
            <img src={Sharwama} className="card-img-top d-block mx-auto" alt="Image 1" style={{height: 'auto',width: '100%', maxWidth: '400px' }}/>
            <div className="card-body ">
               
                <div className='d-flex justify-content-center text-center'>
                <button className='btn btn-dark add-to-cart-btn'>Add to Cart</button>
                </div>
            
            </div>
          </div>
          <p className='mt-3'>Pepperoni Pizza'</p>
            <div className="star pb-3">
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star" style={{ color: '#EA9E3A' }}></i>


            </div>
            <p>$30.52 &nbsp;
              <span className='text-decoration-line-through'>$38.52</span></p>
        </div>

        <div className="col-md-4 col-sm-5"style={{border: 'none', boxShadow: 'none'}}>
          <div className="card mb-3" style={{ width: '20rem', padding: '8px'}}>
          <div className="card-icon "><i className="bi bi-heart"></i></div>
            <img src={Grilledchicken} className="card-img-top d-block mx-auto " alt="Image 2" style={{height: 'auto',width: '100%', maxWidth: '400px' }}/>
            <div className="card-body ">
            <div className='d-flex justify-content-center text-center'>
                <button className='btn btn-dark add-to-cart-btn'>Add to Cart</button>
                </div>
            </div>
          </div>
          <p className='mt-3'>Pepperoni Pizza'</p>
            <div className="star pb-3">
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star" style={{ color: '#EA9E3A' }}></i>


            </div>
            <p>$30.52 &nbsp;
              <span className='text-decoration-line-through'>$38.52</span></p>
        </div>
        <div className="col-md-4 col-sm-5"style={{border: 'none', boxShadow: 'none'}}>
          <div className="card mb-3"style={{ width: '20rem', padding: '8px'}}>
          <div className="card-icon "><i className="bi bi-heart"></i></div>
            <img src={Chips2} className="card-img-top d-block mx-auto" alt="Image 3" style={{height: 'auto',width: '100%', maxWidth: '400px' }}/>
            <div className="card-body ">
            <div className='d-flex justify-content-center text-center'>
                <button className='btn btn-dark add-to-cart-btn'>Add to Cart</button>
                </div>
            </div>
          </div>
          <p className='mt-3'>Pepperoni Pizza'</p>
            <div className="star pb-3">
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star" style={{ color: '#EA9E3A' }}></i>


            </div>
            <p>$30.52 &nbsp;
              <span className='text-decoration-line-through'>$38.52</span></p>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="row p-5 justify-content-center">
        <div className="col-md-4 col-sm-5"style={{border: 'none', boxShadow: 'none'}}>
          <div className="card mb-3"style={{ width: '20rem', padding: '8px'}}>
          <div className="card-icon "><i className="bi bi-heart"></i></div>
            <img src={Pizza2} className="card-img-top d-block mx-auto" alt="Image 4" style={{height: 'auto',width: '100%', maxWidth: '400px' }}/>
            <div className="card-body ">
            <div className='d-flex justify-content-center text-center'>
                <button className='btn btn-dark add-to-cart-btn'>Add to Cart</button>
                </div>
            </div>
          </div>
          <p className='mt-3'>Pepperoni Pizza'</p>
            <div className="star pb-3">
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star" style={{ color: '#EA9E3A' }}></i>


            </div>
            <p>$30.52 &nbsp;
              <span className='text-decoration-line-through'>$38.52</span></p>
        </div>
        <div className="col-md-4 col-sm-5"style={{border: 'none', boxShadow: 'none'}}>
          <div className="card mb-3"style={{ width: '20rem', padding: '8px'}}>
          <div className="card-icon "><i className="bi bi-heart"></i></div>
            <img src={Grilledchicken} className="card-img-top d-block mx-auto" alt="Image 5" style={{height: 'auto',width: '100%', maxWidth: '400px' }}/>
            <div className="card-body ">
            <div className='d-flex justify-content-center text-center'>
                <button className='btn btn-dark add-to-cart-btn'>Add to Cart</button>
                </div>
            </div>
          </div>
          <p className='mt-3'>Pepperoni Pizza'</p>
            <div className="star pb-3">
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star" style={{ color: '#EA9E3A' }}></i>


            </div>
            <p>$30.52 &nbsp;
              <span className='text-decoration-line-through'>$38.52</span></p>
        </div>
        <div className="col-md-4 col-sm-5"style={{border: 'none', boxShadow: 'none'}}>
          <div className="card mb-3"style={{ width: '20rem', padding: '8px'}}>
          <div className="card-icon "><i className="bi bi-heart"></i></div>
            <img src={Sharwama} className="card-img-top d-block mx-auto" alt="Image 6" style={{height: 'auto',width: '100%', maxWidth: '400px' }}/>
            <div className="card-body ">
            <div className='d-flex justify-content-center text-center'>
                <button className='btn btn-dark add-to-cart-btn'>Add to Cart</button>
                </div>
            </div>
          </div>
          <p className='mt-3'>Pepperoni Pizza'</p>
            <div className="star pb-3">
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star" style={{ color: '#EA9E3A' }}></i>


            </div>
            <p>$30.52 &nbsp;
              <span className='text-decoration-line-through'>$38.52</span></p>
        </div>
      </div>
    </div>
    {/* <!-- Add more carousel-items as needed --> */}
  </div>
  {/* second section */}

  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="row p-5 justify-content-center align-items-center">
        <div className="col-md-4 col-sm-5" style={{border: 'none', boxShadow: 'none'}}>
          <div className="card mb-3" style={{ width: '20rem'}}>
          <div className="card-icon "><i className="bi bi-heart"></i></div>
            <img src={Pasta} className="card-img-top d-block mx-auto" alt="Image 1" style={{height: 'auto',width: '100%', maxWidth: '400px' }}/>
            <div className="card-body ">
               
                <div className='d-flex justify-content-center text-center'>
                <button className='btn btn-dark add-to-cart-btn'>Add to Cart</button>
                </div>
            
            </div>
          </div>
          <p className='mt-3'>Pepperoni Pizza'</p>
            <div className="star pb-3">
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star" style={{ color: '#EA9E3A' }}></i>


            </div>
            <p>$30.52 &nbsp;
              <span className='text-decoration-line-through'>$38.52</span></p>
        </div>

        <div className="col-md-4 col-sm-5"style={{border: 'none', boxShadow: 'none'}}>
          <div className="card mb-3" style={{ width: '20rem', padding: '8px'}}>
          <div className="card-icon "><i className="bi bi-heart"></i></div>
            <img src={Smallburger} className="card-img-top d-block mx-auto" alt="Image 2" style={{height: 'auto',width: '100%', maxWidth: '400px' }}/>
            <div className="card-body ">
            <div className='d-flex justify-content-center text-center'>
                <button className='btn btn-dark add-to-cart-btn'>Add to Cart</button>
                </div>
            </div>
          </div>
          <p className='mt-3'>Pepperoni Pizza'</p>
            <div className="star pb-3">
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star" style={{ color: '#EA9E3A' }}></i>


            </div>
            <p>$30.52 &nbsp;
              <span className='text-decoration-line-through'>$38.52</span></p>
        </div>
        <div className="col-md-4 col-sm-5"style={{border: 'none', boxShadow: 'none'}}>
          <div className="card mb-3"style={{ width: '20rem', padding: '8px'}}>
          <div className="card-icon "><i className="bi bi-heart"></i></div>
            <img src={Chickenrice} className="card-img-top d-block mx-auto" alt="Image 3" style={{height: 'auto',width: '100%', maxWidth: '400px' }}/>
            <div className="card-body ">
            <div className='d-flex justify-content-center text-center'>
                <button className='btn btn-dark add-to-cart-btn'>Add to Cart</button>
                </div>
            </div>
          </div>
          <p className='mt-3'>Pepperoni Pizza'</p>
            <div className="star pb-3">
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star" style={{ color: '#EA9E3A' }}></i>


            </div>
            <p>$30.52 &nbsp;
              <span className='text-decoration-line-through'>$38.52</span></p>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="row p-5 justify-content-center">
        <div className="col-md-4 col-sm-5"style={{border: 'none', boxShadow: 'none'}}>
          <div className="card mb-3"style={{ width: '20rem', padding: '8px'}}>
          <div className="card-icon "><i className="bi bi-heart"></i></div>
            <img src={Pasta} className="card-img-top d-block mx-auto" alt="Image 4" style={{height: 'auto',width: '100%', maxWidth: '400px' }}/>
            <div className="card-body ">
            <div className='d-flex justify-content-center text-center'>
                <button className='btn btn-dark add-to-cart-btn'>Add to Cart</button>
                </div>
            </div>
          </div>
          <p className='mt-3'>Pepperoni Pizza'</p>
            <div className="star pb-3">
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star" style={{ color: '#EA9E3A' }}></i>


            </div>
            <p>$30.52 &nbsp;
              <span className='text-decoration-line-through'>$38.52</span></p>
        </div>
        <div className="col-md-4 col-sm-5"style={{border: 'none', boxShadow: 'none'}}>
          <div className="card mb-3"style={{ width: '20rem', padding: '8px'}}>
          <div className="card-icon "><i className="bi bi-heart"></i></div>
            <img src={Sharwama} className="card-img-top d-block mx-auto" alt="Image 5" style={{height: 'auto',width: '100%', maxWidth: '400px' }}/>
            <div className="card-body ">
            <div className='d-flex justify-content-center text-center'>
                <button className='btn btn-dark add-to-cart-btn'>Add to Cart</button>
                </div>
            </div>
          </div>
          <p className='mt-3'>Pepperoni Pizza'</p>
            <div className="star pb-3">
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star" style={{ color: '#EA9E3A' }}></i>


            </div>
            <p>$30.52 &nbsp;
              <span className='text-decoration-line-through'>$38.52</span></p>
        </div>
        <div className="col-md-4 col-sm-5"style={{border: 'none', boxShadow: 'none'}}>
          <div className="card mb-3"style={{ width: '20rem', padding: '8px'}}>
          <div className="card-icon "><i className="bi bi-heart"></i></div>
            <img src={Pasta} className="card-img-top d-block mx-auto" alt="Image 6" style={{height: 'auto',width: '100%', maxWidth: '400px' }}/>
            <div className="card-body ">
            <div className='d-flex justify-content-center text-center'>
                <button className='btn btn-dark add-to-cart-btn'>Add to Cart</button>
                </div>
            </div>
          </div>
          <p className='mt-3'>Pepperoni Pizza'</p>
            <div className="star pb-3">
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
              <i className="bi bi-star" style={{ color: '#EA9E3A' }}></i>


            </div>
            <p>$30.52 &nbsp;
              <span className='text-decoration-line-through'>$38.52</span></p>
        </div>
      </div>
    </div>
    {/* <!-- Add more carousel-items as needed --> */}
  </div>
  <button className="carousel-control-prev d-none" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next d-none" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
}

export default Slider2;
