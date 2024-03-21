import React, { useState } from 'react'
import Rectangle1 from '../assets/Rectangle1.png'
import Burgerbig from '../assets/burgerbig.png'
import './Cheeseburger.css';
import Beefruti from '../assets/beef-ruti.png'




function Cheeseburger() {
    const [amount, setAmount]= useState(1);

    return (
        <>
            <div className="bg-cover" style={{ background: `url(${Rectangle1})` }}>
                <div className="text-light text-center p-5">
                    <h3 className='pt-5'>CHEESE BURGER</h3>
                    <p className='pb-5'>Home <i className="fa fa-arrow-right ms-3 me-3"></i>Cheese Burger</p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={Burgerbig} alt="" className=' pt-3' />
                    </div>

                    <div className="col-md-6 p-3">
                        <h4 className='pt-5 fw-bold '>CHEESE BURGER</h4>
                        <div className="star pb-3">
                            <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
                            <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
                            <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
                            <i className="bi bi-star-fill me-2" style={{ color: '#EA9E3A' }}></i>
                            <i className="bi bi-star" style={{ color: '#EA9E3A' }}></i>


                        </div>
                        <div className='number-container'>
                            <p>$30.52 &nbsp;
                                <span className='formatted-number'>$38.52</span></p>
                            <p> <i class="bi bi-check2" style={{ color: '#0C5BAC', fontSize: '20px' }}></i> Instock</p>
                            <p> <i class="bi bi-check2" style={{ color: '#0C5BAC', fontSize: '20px' }}></i> Free delivery available</p>
                            <p>This Brown Retro round Sunglasses is a form of protective eyewear designed
                                primarily to prevent bright light and high-energy visible light from damaging
                                and discomforting the eyes. It is a well-fitting pair of Sunglasses with a trendy
                                look and made of high-grade plastic & acrylic materials. It is a great fashion
                                accessory and can be used by both sexes, male or female. You will find this
                                piece very attractive and worth it. </p>
                        </div>
                        <div className="" style={{ display: 'inline-flex' }}>
                            <p className='fw-bold mt-2'>Quantity:</p>

                        <div className='flex flex-row items-center ms-3'>
                            <button className='py-2 px-3' onClick={()=> setAmount((prev) => prev - 1)} style={{ background: '#E0DDDD', border: '0', borderRadius: '50%' }}>-</button>
                            <span className='py-4 px-6 rounded-lg me-3 ms-3' >{amount}</span>
                            <button className='py-2 px-3' onClick={()=> setAmount((prev) => prev + 1)} style={{ background: '#E0DDDD', border: '0', borderRadius: '50%' }}>+</button>

                        </div>
                        </div>
                        <div>
                        <a href="" className="btn btn-success mt-3 px-20"  style={{ paddingLeft: '80px', paddingRight:'80px' }}>Add To Cart</a>

                        </div>



                    </div>
                </div>
            </div>

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
        </>
    )
}

export default Cheeseburger