import React from 'react'

import "bootstrap-icons/font/bootstrap-icons.css";

import Coverimage from '../assets/video-bg 1.png'
import Beefruti from '../assets/beef-ruti.png'
import Rectangle6 from '../assets/Rectangle6.png'
import Kfc1 from '../assets/kfc1.png'
import Rectangle9 from '../assets/Rectangle9.png'
import Ellipse5 from '../assets/Ellipse5.png'






import Firstslider from './Firstslider';
import Sliderpix from './Sliderpix';
import Products from './Products';


function Homepage() {

    return (
<>
<div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className="rounded"aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner" >
                    <div className="carousel-item active">
                        <img src={Coverimage} className="d-block w-100" alt="..."
                            style={{ objectFit: 'cover', maxHeight: '600px' }} />
                        <div className="carousel-caption ">
                            <h3 className='text-light'>Taste the Difference: <span className='text-warning'>Welcome to TASTE HEAVEN
                            </span></h3>
                            <p className='text-light'>Delight your senses with our flavorful dishes, warm atmosphere,
                                and impeccable service. Join us for a memorable dining adventure
                                today.</p>
                            <a href="" className="btn btn-outline-success" >Learn more</a> &nbsp; &nbsp;
                            <a href="" className="btn btn-success" >Learn more</a>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Coverimage} className="d-block w-100" alt="..."
                            style={{ objectFit: 'cover', maxHeight: '600px' }} />

                        <div className="carousel-caption  ">
                            <h3 className='text-light'>EVERY BITE <span className='text-warning'>TELLS A STORY
                            </span></h3>
                            <p className='text-light'>From mouthwatering dishes to cozy ambiance, experience the perfect
                                blend of flavors and hospitality. Join us for an unforgettable dining
                                journey.</p>

                            <a href="" className="btn btn-outline-success" >Learn more</a> &nbsp; &nbsp;
                            <a href="" className="btn btn-success" >Learn more</a>

                        </div>
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className='bar-icons'>
                        <i className="fa fa-angle-left"></i>

                    </span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className='bar-icons'>
                        <i className="fa fa-angle-right"></i>
                    </span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            <Firstslider />

            <Sliderpix />
            <div className='hero'>
                <div className="row p-5">
                    <div className="col-md-6" style={{ alignItems: 'center' }}>
                        <p className='text-light'>🔥🎉 BLACK FRIDAY SPECIAL! SAVE 20% TODAY ONLY! 🔥🎉</p>
                        <h3 className='text-light'>A Sizzling Deal <span className='text-warning'>You Can't</span> Miss!</h3>
                        <p className='text-light mt-3'>GRILLED CHIKEN $59,00</p>
                        <a href="" className="btn btn-success"><i class="bi bi-basket me-2" ></i>Order Now</a>
                    </div>

                    <div className="col-md-6">
                        <img src={Beefruti} className="" style={{ float: 'right' }} alt="Coverimage" />


                    </div>
                </div>
            </div>



            <div className="row mt-5">
                <div className="col-md-6" style={{ background: `url(${Rectangle6})`, height: '285px', textAlign: 'center' }}>
                    <img src={Kfc1} className="" style={{ display: 'inline-block', verticalAlign: 'middle', marginBottom: '50px', width: '400px', height: 'auto' }} alt="Coverimage" />

                </div>

                <div className="col-md-6" style={{ textAlign: 'center' }}>
                    <div className="container-text" style={{ display: 'inline-block', verticalAlign: 'middle', width: '400px', height: 'auto', marginTop: '60px' }}>
                        <p className='text-success fw-bold'>CRISPY, EVERY BITE TASTE</p>
                        <h3>TASTE HEAVEN CHIKEN HOTWING & FRENCH FRIES</h3>
                        <a href="" className="btn btn-success"><i className="bi bi-basket me-2" ></i>Order Now</a>
                    </div>



                </div>
            </div>
            <div className="hero2" style={{ background: `url(${Rectangle9})`, textAlign: 'center' }}>
                <div className="hero2-text" >
                    <div className="mt-5 fw-bold" >
                        <p className='text-success'>What our clients say about us</p>
                        <h3>TESTIMONIAL</h3>
                        <div className="container" >
                            <p className='mt-5'>“THANK YOU FOR DINNER LAST NIGHT. IT WAS AMAZING!! I HAVE SAY IT'S THE BEST MEAL I HAVE HAD IN
                                QUITE SOME TIME. WILL DEFINITELY BE SEEING MORE EATING REGULARLY.”</p>
                        </div>

                        <img src={Ellipse5} alt="" />
                        <p className=' mt-3'> <span className='text-warning'>Peter Bowman</span> <br /> Avatech CEO & Co Founder</p>
                    </div>


                </div>
            </div>



            <Products />


        </>
    )
}

export default Homepage