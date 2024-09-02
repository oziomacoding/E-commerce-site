import React from 'react'
import Logo from '../assets/logo.png'
import Appstore1 from '../assets/app-store1.png'
import Googleplay1 from '../assets/google-play1.png'

function Footer() {
  return (
    <>
      <div className="container pt-5">
        <div className="row" style={{ textAlign: 'center' }}>
          <div className="col-md-3">
            <a className="navbar-brand" href="/"><img src={Logo} alt="Logo"
              srcSet="" /></a>
            <p>We believe it has the power to do
              amazing things.</p>
            <p>Interested in working with us?</p>
            <p className='fw-bold'>info@example.com</p>
          </div>

          <div className="col-md-3">
            <p className='fw-bold mt-3 mb-3'>Quick Links</p>
            <p>Services</p>
            <p>About Us</p>
            <p>Latest Food</p>
            <p>My Account</p>
          </div>

          <div className="col-md-3">
            <p className='fw-bold mt-3 mb-3'>Address</p>
            <p>570 8th Ave, New York, NY 10018
              United States</p>
            <p className='fw-bold'> Hours:</p>
            <p>9.30am - 6.30pm</p>
            <p>Monday To Friday</p>
          </div>

          <div className="col-md-3">
            <p className='fw-bold mt-3 mb-3'>Install App</p>
            <p>FROM APP STORE OR GOOGLE PLAY</p>
            <img src={Appstore1} className="me-3" alt="" />
            <img src={Googleplay1} className="" alt="" />


          </div>
        </div>
      </div>
      <p style={{ textAlign: 'center', paddingTop: '3px' }}>© Copyright 2024 Taste Heaven. All Rights Reserved.</p>

    </>
  )
}

export default Footer