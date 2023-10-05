import React, { useContext } from "react";
import { Link} from "react-router-dom";
import "../assets/css/style.css"
import "../assets/css/font-awesome.css"
import s1 from "../assets/images/s1.jpg"
import s2 from "../assets/images/s2.jpg"
import s3 from "../assets/images/s3.jpg"
import s4 from "../assets/images/s4.jpg"
import s5 from "../assets/images/s5.jpg"
import s6 from "../assets/images/s6.jpg"
import s7 from "../assets/images/s7.jpg"
import s8 from "../assets/images/s8.jpg"
import s9 from "../assets/images/s9.jpg"
import img1 from "../assets/images/img1.jpg"
import img2 from "../assets/images/img2.jpg"
import img3 from "../assets/images/img3.jpg"
import {data} from "../App";


function Home() {
  const product=useContext(data);
  //  return (
  //   <>
  //     <nav
  //       className="navbar navbar-expand-lg navbar-dark bg-dark"
  //       style={{ height: "40px" }}
  //     >
  //       <div className="container" style={{ maxWidth: "1300px" }}>
  //         <ul className="navbar-nav justify-end">
  //           <li className="nav-item ">
  //             <Link className="nav-link "  href="tel:+0123456789">
  //               <i class="fa fa-phone" style={{ fontSize: "18px" }}></i> +0123
  //               456 789
  //             </Link>
  //           </li>
  //           <li className="nav-item ">
  //             <Link className="nav-link "  href="mailto:Shoesstore@g.com">
  //               <i class="fa fa-envelope" style={{ fontSize: "18px" }}></i>{" "}
  //               Shoesstore@gmail.com
  //             </Link>
  //           </li>
  //         </ul>
  //       </div>
  //     </nav>

  //     <nav
  //       className="navbar navbar-expand-lg navbar-light "
  //       style={{ background: "white" }}
  //     >
  //       <div className="container" style={{ maxWidth: "1300px" }}>
  //         <a className="navbar-brand" href="#">
  //           <img src={logo3} width="75" height="65px" />
  //         </a>

  //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  //             <li className="nav-item">
  //               <Link
  //                 to="/About"
  //                 className="nav-link active"
  //                 aria-current="page"
  //                 href="#"
  //               >
  //                 Home
  //               </Link>
  //             </li>
  //             <li className="nav-item">
  //               <Link
  //                 to="/Product"
  //                 className="nav-link active"
  //                 aria-current="page"
  //                 href="#"
  //               >
  //                 ProductList
  //               </Link>
  //             </li>
  //             {isEmailAdmin && token &&(
  //             <li className="nav-item dropdown">
  //               <a
  //                 className="nav-link dropdown-toggle"
  //                 href="#"
  //                 id="navbarDropdown"
  //                 role="button"
  //                 data-bs-toggle="dropdown"
  //                 aria-expanded="false"
  //               >
  //                 Admin
  //               </a>
  //               <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
  //                 <li>
  //                   <Link to="/Admin" className="dropdown-item">
  //                     Product List
  //                   </Link>
  //                 </li>
  //                 <li>
  //                   <Link to="/Orders" className="dropdown-item">
  //                     Order List
  //                   </Link>
  //                 </li>
  //                 {/* Add more dropdown items here if needed */}
  //               </ul>
  //             </li>
  //             )}
  //           </ul>
  //           <ul className="navbar-nav flex-d">
  //             <li className="nav-item ">
  //               <Link to="/Cart" className="nav-link " href="#">
  //                 <i
  //                   class="fa fa-cart-shopping"
  //                   style={{ fontSize: "23px" }}
  //                 ></i>
  //                 <sup class="super">{props.count}</sup>
  //               </Link>
  //             </li>

  //             {token && (
  //               <li className="nav-item">
  //                 <Link to="/Login" className="nav-link" onClick={handleLogout}>
  //                   Logout
  //                 </Link>
  //               </li>
  //             )}
  //             {!token && (
  //               <>
  //                 <li className="nav-item">
  //                   <Link
  //                     to="/Registrion"
  //                     className="nav-link"
  //                     aria-current="page"
  //                   >
  //                     Signup
  //                   </Link>
  //                 </li>
  //                 <li className="nav-item">
  //                   <Link
  //                     to="/Login"
  //                     className="nav-link"
  //                     onClick={handleLogin}
  //                   >
  //                     Login
  //                   </Link>
  //                 </li>
  //               </>
  //             )}
  //           </ul>
  //         </div>
  //       </div>
  //     </nav>
  //     <hr></hr>
  //   </>
  // );


return (
<div>
       
          {/*/banner*/}
          <div className="main-banner" id="home">
          <div className="banner-info">
            <p>Trending of the week</p>
            <h3 className="mb-4">Casual Shoes for Men</h3>
            <div className="ban-buttons">
              <a href="shop-single.html" className="btn">Shop Now</a>
              <a href="single.html" className="btn active">Read More</a>
            </div>
          </div>
          {/*// banner-inner */}
        </div>
        {/*//main-content*/}
        {/*/ab */}
        <section className="about py-md-5 py-5">
          <div className="container-fluid">
            <div className="feature-grids row px-3">
              <div className="col-lg-3 gd-bottom">
                <div className="bottom-gd row">
                  <div className="icon-gd col-md-3 text-center"><span className="fa fa-truck" aria-hidden="true" /></div>
                  <div className="icon-gd-info col-md-9">
                    <h3 className="mb-2">FREE SHIPPING</h3>
                    <p>On all order over $2000</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 gd-bottom">
                <div className="bottom-gd row bottom-gd2-active">
                  <div className="icon-gd col-md-3 text-center"><span className="fa fa-bullhorn" aria-hidden="true" /></div>
                  <div className="icon-gd-info col-md-9">
                    <h3 className="mb-2">FREE RETURN</h3>
                    <p>On 1st exchange in 30 days</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 gd-bottom">
                <div className="bottom-gd row">
                  <div className="icon-gd col-md-3 text-center"> <span className="fa fa-gift" aria-hidden="true" /></div>
                  <div className="icon-gd-info col-md-9">
                    <h3 className="mb-2">MEMBER DISCOUNT</h3>
                    <p>Register &amp; save up to $29%</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 gd-bottom">
                <div className="bottom-gd row">
                  <div className="icon-gd col-md-3 text-center"> <span className="fa fa-usd" aria-hidden="true" /></div>
                  <div className="icon-gd-info col-md-9">
                    <h3 className="mb-2">PREMIUM SUPPORT</h3>
                    <p>Support 24 hours per day</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //ab */}
        {/*/ab */}
        <section className="about py-5">
          <div className="container pb-lg-3">
            <h3 className="tittle text-center">New Arrivals</h3>
            <div className="row">
            {product.map((productItem) => {
              return(
              <div className="col-md-4 product-men" style={{marginBottom: "30px"}}>
                <div className="product-shoe-info shoe text-center">
                  <div className="men-thumb-item">
                  <img src={`https://localhost:7015/images/${
                        productItem?.images[0]?.url
                       }`} className="img-fluid" alt="" />
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product">
                    <h4>
                      <Link to="/SingleProduct">{productItem.product.name}  </Link>
                    </h4>
                    <div className="product_price">
                      <div className="grid-price">
                        <span className="money">${productItem.product.price} </span>
                      </div>
                    </div>
                    <ul className="stars">
                      <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                      <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                      <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true" /></a></li>
                      <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true" /></a></li>
                      <li><a href="#"><span className="fa fa-star-o" aria-hidden="true" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              )
            })};
              {/* <div className="col-md-4 product-men">
                <div className="product-shoe-info shoe text-center">
                  <div className="men-thumb-item">
                    <img src={s2}  className="img-fluid" alt="" />
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product">
                    <h4>
                      <a href="shop-single.html">Chikku Loafers </a>
                    </h4>
                    <div className="product_price">
                      <div className="grid-price">
                        <span className="money">$475.00</span>
                      </div>
                    </div>
                    <ul className="stars">
                      <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                      <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                      <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                      <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true" /></a></li>
                      <li><a href="#"><span className="fa fa-star-o" aria-hidden="true" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4 product-men">
                <div className="product-shoe-info shoe text-center">
                  <div className="men-thumb-item">
                    <img src={s3}  className="img-fluid" alt="" />
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product">
                    <h4>
                      <a href="shop-single.html">(SRV) Sneakers </a>
                    </h4>
                    <div className="product_price">
                      <div className="grid-price">
                        <span className="money">$575.00</span>
                      </div>
                    </div>
                    <ul className="stars">
                      <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                      <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                      <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                      <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true" /></a></li>
                      <li><a href="#"><span className="fa fa-star-o" aria-hidden="true" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4 product-men my-lg-4">
                <div className="product-shoe-info shoe text-center">
                  <div className="men-thumb-item">
                    <img src={s4}  className="img-fluid" alt="" />
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product">
                    <h4>
                      <a href="shop-single.html">Shuberry Heels</a>
                    </h4>
                    <div className="product_price">
                      <div className="grid-price">
                        <span className="money">$575.00</span>
                      </div>
                    </div>
                    <ul className="stars">
                      <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                      <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                      <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                      <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true" /></a></li>
                      <li><a href="#"><span className="fa fa-star-o" aria-hidden="true" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4 product-men my-lg-4">
                <div className="product-shoe-info shoe text-center">
                  <div className="men-thumb-item">
                    <img src={s5}  className="img-fluid" alt="" />
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product">
                    <h4>
                      <a href="shop-single.html">Red Bellies </a>
                    </h4>
                    <div className="product_price">
                      <div className="grid-price">
                        <span className="money">$575.00</span>
                      </div>
                    </div>
                    <ul className="stars">
                      <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                      <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                      <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                      <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true" /></a></li>
                      <li><a href="#"><span className="fa fa-star-o" aria-hidden="true" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4 product-men my-lg-4">
                <div className="product-shoe-info shoe text-center">
                  <div className="men-thumb-item">
                    <img src={s6}  className="img-fluid" alt="" />
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product">
                    <h4>
                      <a href="shop-single.html">Catwalk Flats </a>
                    </h4>
                    <div className="product_price">
                      <div className="grid-price">
                        <span className="money">$575.00</span>
                      </div>
                    </div>
                    <ul className="stars">
                      <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                      <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                      <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                      <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true" /></a></li>
                      <li><a href="#"><span className="fa fa-star-o" aria-hidden="true" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4 product-men">
                <div className="product-shoe-info shoe text-center">
                  <div className="men-thumb-item">
                    <img src={s7}  className="img-fluid" alt="" />
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product">
                    <h4>
                      <a href="shop-single.html">Running Shoes </a>
                    </h4>
                    <div className="product_price">
                      <div className="grid-price">
                        <span className="money">$675.00</span>
                      </div>
                    </div>
                    <ul className="stars">
                      <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                      <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                      <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true" /></a></li>
                      <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true" /></a></li>
                      <li><a href="#"><span className="fa fa-star-o" aria-hidden="true" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4 product-men">
                <div className="product-shoe-info shoe text-center">
                  <div className="men-thumb-item">
                    <img src={s8}  className="img-fluid" alt="" />
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product">
                    <h4>
                      <a href="shop-single.html">Sukun Casuals </a>
                    </h4>
                    <div className="product_price">
                      <div className="grid-price ">
                        <span className="money ">$775.00</span>
                      </div>
                    </div>
                    <ul className="stars">
                      <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                      <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                      <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                      <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true" /></a></li>
                      <li><a href="#"><span className="fa fa-star-o" aria-hidden="true" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4 product-men">
                <div className="product-shoe-info shoe text-center">
                  <div className="men-thumb-item">
                    <img src={s9}  className="img-fluid" alt="" />
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product">
                    <h4>
                      <a href="shop-single.html">Bank Sneakers</a>
                    </h4>
                    <div className="product_price">
                      <div className="grid-price">
                        <span className="money">$875.00</span>
                      </div>
                    </div>
                    <ul className="stars">
                      <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                      <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                      <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                      <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true" /></a></li>
                      <li><a href="#"><span className="fa fa-star-o" aria-hidden="true" /></a></li>
                    </ul>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        {/* //ab */}
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
        <section className="about py-5">
          <div className="container pb-lg-3">
            <h3 className="tittle text-center">Popular Products</h3>
            <div className="row">
              <div className="col-md-6 latest-left">
                <div className="product-shoe-info shoe text-center">
                  <img src={img1} className="img-fluid" alt="" />
                  <div className="shop-now"><a href="shop.html" className="btn">Shop Now</a></div>
                </div>
              </div>
              <div className="col-md-6 latest-right">
                <div className="row latest-grids">
                  <div className="latest-grid1 product-men col-12">
                    <div className="product-shoe-info shoe text-center">
                      <div className="men-thumb-item">
                        <img src={img2} className="img-fluid" alt="" />
                        <div className="shop-now"><a href="shop.html" className="btn">Shop Now</a></div>
                      </div>
                    </div>
                  </div>
                  <div className="latest-grid2 product-men col-12 mt-lg-4">
                    <div className="product-shoe-info shoe text-center">
                      <div className="men-thumb-item">
                        <img src={img3} className="img-fluid" alt="" />
                        <div className="shop-now"><a href="shop.html" className="btn">Shop Now</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
);
}


export default Home;
