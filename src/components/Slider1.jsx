import React from 'react';
import './Slider1.css';
import Pizza from '../assets/pizza.png';
import Smallburger from '../assets/smallburger.png';
import Chips from '../assets/chips.png';
import Grilledchicken from '../assets/grilledchicken.png';

const items = [
  { src: Pizza, text: 'Pepperoni Pizza' },
  { src: Chips, text: 'Potato Chips' },
  { src: Smallburger, text: 'Cheese Burger' },
  { src: Grilledchicken, text: 'Grilled Chicken' },
  { src: Pizza, text: 'Pepperoni Pizza' }, // Repeat or add more items as needed
  { src: Grilledchicken, text: 'Grilled Chicken' },
];

function Slider1() {
  const groupedItems = [];

  // Group items into sets of three
  for (let i = 0; i < items.length; i += 3) {
    groupedItems.push(items.slice(i, i + 3));
  }

  return (
    <div className="carousel-container" style={{ background: '#edf2f4' }}>
      <p className="text-success fw-bold pt-5" style={{ marginLeft: '40px' }}>
        CRISPY, EVERY BITE TASTE
      </p>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', marginLeft: '40px' }}>
        <h3>POPULAR FOOD ITEMS</h3>
      </div>

      <div id="multiItemCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {groupedItems.map((group, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <div className="row p-5 justify-content-center align-items-center remove-p">
                {group.map((item, idx) => (
                  <div className="col-md-4 col-sm-5" style={{ border: 'none', boxShadow: 'none' }} key={idx}>
                    <div className="card mb-3" style={{ width: '20rem' }}>
                      <img src={item.src} className="card-img-top d-block mx-auto" alt={item.text} style={{ height: 'auto', width: '100%', maxWidth: '400px' }} />
                      <div className="card-body">
                        <div className="d-flex justify-content-center">
                          <div className="bg-yellow" style={{ margin: 'auto' }}></div>
                        </div>
                        <div className="d-flex justify-content-center text-center">
                          <p className="card-text fw-bold pt-3">{item.text}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#multiItemCarousel" data-bs-slide="prev">
          <span className="fa-solid fa-arrow-left fa-2x prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#multiItemCarousel" data-bs-slide="next">
          <span className="fa-solid fa-arrow-right fa-2x next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slider1;
