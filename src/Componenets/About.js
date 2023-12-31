import React from 'react'

import about from "../assets/images/about.jpg";

import { Link } from 'react-router-dom';
const About = () => {
  return (
    <>
   <div>
   <div>
          {/* mian-content */}
          <div className="main-banner inner" id="home">
            
          </div>
         {/*//main-content*/}
          {/**/}
          <ol className="breadcrumb">
           <li className="breadcrumb-item">
              <Link to="/home">HOME</Link>
           </li>
            <li className="breadcrumb-item active">ABOUT</li>
          </ol>
           {/**/}
         </div>
        <section className="hand-crafted py-5">
          <div className="container">
            <div className="inner-sec py-md-5 px-lg-5">
              <h3 className="tittle text-center"><span className="sub-tittle">About.</span> Welcome To Our Website</h3>
              <p className="mb-4 text-center px-lg-4"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullamcorper dui turpis.Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullamcorper dui turpis.</p>
            </div>
          </div>
        </section>
        {/* //ab */}
        {/*/ab */}
        <section className="about py-md-5 py-5">
          <div className="container py-md-3">
            <h3 className="tittle text-center">What We Offer</h3>
            <div className="feature-grids row">
              <div className="col-md-4 gd-bottom mt-lg-4">
                <div className="bottom-gd p-lg-5 p-4">
                  <span className="fa fa-truck" aria-hidden="true" />
                  <h3 className="my-3">
                    FREE SHIPPING</h3>
                  <p>Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullamcorper dui turpis.</p>
                </div>
              </div>
              <div className="col-md-4 gd-bottom mt-lg-4">
                <div className="bottom-gd2-active p-lg-5 p-4">
                  <span className="fa fa-bullhorn" aria-hidden="true" />
                  <h3 className="my-3">FREE RETURN</h3>
                  <p>Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullamcorper dui turpis.</p>
                </div>
              </div>
              <div className="col-md-4 gd-bottom mt-lg-4">
                <div className="bottom-gd p-lg-5 p-4">
                  <span className="fa fa-gift" aria-hidden="true" />
                  <h3 className="my-3">MEMBER DISCOUNT</h3>
                  <p>Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullamcorper dui turpis.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //ab */}
        {/* /hand-crafted */}
        <section className="hand-crafted py-5">
          <div className="container py-md-3">
            <div className="row banner-grids">
              <div className="col-md-6 banner-image">
                <div className="effect-w3">
                  <img src={about} alt="" className="img-fluid image1" />
                </div>
              </div>
              <div className="col-md-6 last-img pl-lg-5 p-3">
                <h3 className="tittle mb-lg-5 mb-3"><span className="sub-tittle">THE SEASON BEGINGS </span>PROMOTION SALE OFF 50%</h3>
                <p className="mb-4"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullamcorper dui turpis.</p>
                <ul className="tic-info list-unstyled">
                  <li>
                    <span className="fa fa-check mr-2" /> Integer sit amet mattis quam
                  </li>
                  <li>
                    <span className="fa fa-check mr-2" /> Praesent ullamcorper dui turpis
                  </li>
                  <li>
                    <span className="fa fa-check mr-2" /> Integer sit amet mattis quam
                  </li>
                  <li>
                    <span className="fa fa-check mr-2" /> Integer sit amet mattis quam
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* //hand-crafted */}
        {/* stats */}
        <section className="stats py-5" id="stats">
          <div className="container py-md-3">
            <div className="row stat-grids">
              <div className="col-lg-6 ser-lt">
                <div className="d-flex services-box">
                  <div className="icon">
                    <span className="fa fa-line-chart" />
                  </div>
                  {/* .Icon ends here */}
                  <div className="service-content">
                    <h4>Inagittis Lacg</h4>
                    <p className="serp">
                      Quisque sagittis lacus eu lorem sodalesd vulputate velitdipisc inagittis lacg enean adipiscing.
                    </p>
                  </div>
                  {/* .Service-content ends here */}
                </div>
                {/* .Services-box ends here */}
                <div className="d-flex services-box ser-midd">
                  <div className="icon">
                    <span className="fa fa-bell-o" />
                  </div>
                  {/* .Icon ends here */}
                  <div className="service-content">
                    <h4>Velitdipisc Inagittis</h4>
                    <p className="serp">
                      Quisque sagittis lacus eu lorem sodalesd vulputate velitdipisc inagittis lacg enean adipiscing.
                    </p>
                  </div>
                  {/* .Service-content ends here */}
                </div>
                {/* .Services-box ends here */}
                {/* .Services-box ends here */}
                <div className="d-flex services-box bx-4">
                  <div className="icon">
                    <span className="fa fa-line-chart" />
                  </div>
                  {/* .Icon ends here */}
                  <div className="service-content">
                    <h4>Sagittis Lacus</h4>
                    <p className="serp">
                      Quisque sagittis lacus eu lorem sodalesd vulputate velitdipisc inagittis lacg enean adipiscing.
                    </p>
                  </div>
                  {/* .Service-content ends here */}
                </div>
                {/* .Services-box ends here */}
              </div>
              <div className="col-lg-6 ser-lt ser-right">
                <div className="d-flex services-box">
                  <div className="icon">
                    <span className="fa fa-line-chart" />
                  </div>
                  {/* .Icon ends here */}
                  <div className="service-content">
                    <h4>Inagittis Lacg</h4>
                    <p className="serp">
                      Quisque sagittis lacus eu lorem sodalesd vulputate velitdipisc inagittis lacg enean adipiscing.
                    </p>
                  </div>
                  {/* .Service-content ends here */}
                </div>
                {/* .Services-box ends here */}
                <div className="d-flex services-box ser-midd">
                  <div className="icon">
                    <span className="fa fa-bell-o" />
                  </div>
                  {/* .Icon ends here */}
                  <div className="service-content">
                    <h4>Velitdipisc Inagittis</h4>
                    <p className="serp">
                      Quisque sagittis lacus eu lorem sodalesd vulputate velitdipisc inagittis lacg enean adipiscing.
                    </p>
                  </div>
                  {/* .Service-content ends here */}
                </div>
                {/* .Services-box ends here */}
                {/* .Services-box ends here */}
                <div className="d-flex services-box bx-4">
                  <div className="icon">
                    <span className="fa fa-line-chart" />
                  </div>
                  {/* .Icon ends here */}
                  <div className="service-content">
                    <h4>Sagittis Lacus</h4>
                    <p className="serp">
                      Quisque sagittis lacus eu lorem sodalesd vulputate velitdipisc inagittis lacg enean adipiscing.
                    </p>
                  </div>
                  {/* .Service-content ends here */}
                </div>
                {/* .Services-box ends here */}
              </div>
            </div>
          </div>
        </section>
        {/* //stats */}
        {/*/testimonials*/}
        <section className="testimonials py-5">
          <div className="container">
            <div className="test-info text-center">
              <h3 className="my-md-2 my-3">Jenifer Burns</h3>
              <ul className="list-unstyled w3layouts-icons clients">
                <li>
                  <a href="#">
                    <span className="fa fa-star" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-star" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-star" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-star-half-o" />
                  </a>
                </li>
              </ul>
              <p><span className="fa fa-quote-left" /> Lorem Ipsum has been the industry's standard since the 1500s. Praesent ullamcorper dui turpis.Nulla pellentesque mi non laoreet eleifend. Integer porttitor mollisar lorem, at molestie arcu pulvinar ut. <span className="fa fa-quote-right" /></p>
            </div>
          </div>
        </section>
        {/*//testimonials*/}
        {/*/ab */}
       
        {/* //ab */}
        {/* brands */}
        <section className="brands py-5" id="brands">
          <div className="container py-lg-0">
            <div className="row text-center brand-items">
              <div className="col-sm-2 col-3">
                <a href="#"><span className="fa fa-connectdevelop" aria-hidden="true" /></a>
              </div>
              <div className="col-sm-2 col-3">
                <a href="#"><span className="fa fa-empire" aria-hidden="true" /></a>
              </div>
              <div className="col-sm-2 col-3">
                <a href="#"><span className="fa fa-ioxhost" aria-hidden="true" /></a>
              </div>
              <div className="col-sm-2 col-3">
                <a href="#"><span className="fa fa-first-order" aria-hidden="true" /></a>
              </div>
              <div className="col-sm-2 col-3 mt-sm-0 mt-4">
                <a href="#"><span className="fa fa-joomla" aria-hidden="true" /></a>
              </div>
              <div className="col-sm-2 col-3 mt-sm-0 mt-4">
                <a href="#"><span className="fa fa-dropbox" aria-hidden="true" /></a>
              </div>
            </div>
          </div>
        </section>
        {/* brands */}
      </div>
    </>
  )
}

export default About