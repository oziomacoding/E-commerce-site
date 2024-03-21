import React from 'react'
import Logo from '../assets/logo.png'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import cart from '../assets/cart.png'

function Header() {
    return (
        <>
            <div className="hstack gap-3 " style={{ minHeight: '2px', borderBottom: '1px solid #333' }}>
                <div className="p-2">
                    <p className='mt-3' ><span className='text-success fw-bold'style={{ paddingLeft: '80px' }}>100%</span> secure delivery </p>
                </div>
                <div className="vr "></div>
                <div className="p-2 "> <span className="" >
                    <a href="" className='text-decoration-none text-dark' />
                    <i className=" fa fa-solid fa-magnifying-glass" ></i> &nbsp;
                </span>Search</div>
               

                <div className="p-2 ms-auto"><div className="">
                    <a href="tel:09137029216" className='text-decoration-none text-dark'>



                        <span className="ms-3">
                            <i className="fa fa-phone"></i>
                        </span>
                        08167000077
                    </a>

                    <a href="https://wa.me/+2349137029216" className='text-decoration-none text-dark'>
                        <span className="ms-3">
                            <img src={facebook} alt="" />
                        </span>
                        Taste_heaven
                    </a>

                    <a href="https://wa.me/+2349137029216" className='text-decoration-none text-dark'>
                        <span className="ms-4">
                            <img src={instagram} alt="" />
                        </span>
                        Taste_heaven
                    </a>
                </div></div>



            </div>
            


            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <a className="navbar-brand" href="/"><img src={Logo} alt="Logo"
                        srcSet="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mx-auto fw-bold">
                            <a className="nav-link text-success" aria-current="page" href="/">Home</a>
                            <a className="nav-link" href="/shop">Shop</a>
                            <a className="nav-link" href="/about">About</a>
                            <a className="nav-link" href="/contact">Contact</a>
                            <a className="nav-link" href="/cart"> <img src={cart} alt="" />
                                Cart</a>

                        </div>
                        <div className="navbar">

                            <a href="" className="btn btn-outline-success text-success">Register </a> &nbsp; &nbsp;

                            <a href="" className="btn btn-success">Login </a>

                            {/* <button className='btn btn-outline-success'>Login</button> &nbsp; &nbsp;
                            <button className='btn btn-success '>Login</button> */}
                        </div>



                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header