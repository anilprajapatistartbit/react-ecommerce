
import React from 'react'
import one from '../assets/images/one.jpg';
import two from '../assets/images/two.jpg';
import three from '../assets/images/three.jpg';
import Arrivals from "./Arrivals";
export default function Carousel() {
  return (
    <>
    <div class="container" style={{maxWidth:'1300px'}}>
    <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={three}className="d-block w-100" alt="..."width="100%" height="490"/>
          </div>
          <div className="carousel-item">
            <img src={two} className="d-block w-100" alt="..." width="100%" height="490"/>
          </div>
          <div className="carousel-item">
            <img src={one} className="d-block w-100" alt="..." width="100%" height="490"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>  
    </div>
      <Arrivals/>
      </>
  )
}

