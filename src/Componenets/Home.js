
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link ,useNavigate} from "react-router-dom";
import "../assets/css/style.css"
import "../assets/css/font-awesome.css"
import img1 from "../assets/images/img1.jpg"
import img2 from "../assets/images/img2.jpg"
import img3 from "../assets/images/img3.jpg"
function Home({singlepro}) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the API
    axios.get("https://localhost:7015/api/Product/GetLastFive")
      .then((response) => {
        // Handle the successful response
        setProducts(response.data);
        setFilteredProducts(response.data); // Initialize filteredProducts with all products
        setLoading(false); // Set loading to false when data is received
      })
      .catch((error) => {
        // Handle errors
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false even in case of errors
      });
  }, []);

  const pdetail = (productItem) => {
    navigate("/SingleProduct");
    singlepro(productItem);
  };
 
  const filterItem = (category) => {
    const updateItems = products.filter((curElm) => {
      return curElm.product.category === category;
    });
    setFilteredProducts(updateItems);
  };

return (
<div>
       
          {/*/banner*/}
          <div className="main-banner" id="home">
          <div className="banner-info">
            <p>Trending of the week</p>
            <h3 className="mb-4">Casual Shoes for Men</h3>
            <div className="ban-buttons">
            <Link to="/Product" className="btn">Shop Now</Link>
            <Link to="/About" className="btn active">Read More</Link>
             
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
            {loading ? (
        <p>Loading...</p>
      ) : (
      

            <div className="row">
   <div className="menu-teb d-flex justify-content-center" style={{marginBottom:"30px" }}>
        <button
          className="payment-address"
          onClick={() => filterItem("Men")}
          style={{
            margin:"5px",
           width:"100px"
          }}
        >
          Men's
        </button>
        <button
          className="payment-address"
          onClick={() => filterItem("Women")}
         style={{margin:"5px"}}
        >
          Women's
        </button>
        <button
          className="payment-address"
          onClick={() => filterItem("Kids")}
          style={{margin:"5px", width:"100px"}}
        >
          Kid's
        </button>
      </div>
            {filteredProducts.map((productItem) => {
              return(
              <div className="col-md-4 product-men" style={{marginBottom: "30px"}}>
                <div className="product-shoe-info shoe text-center">
                  <div className="men-thumb-item">
                  <img src={`https://localhost:7015/images/${
                        productItem?.images[0]?.url
                       }`} className="img-fluid" alt="" style={{height:'318px'}}/>
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product">
                  
                      {/*<Link to="/SingleProduct">{productItem.product.name}  </Link>*/}
                      {/* <p onClick={()=>{
                        navigate("/SingleProduct", { state: { productItem } })
                      }}>{productItem.product.name} </p> */}
                      <h5 onClick={() => pdetail(productItem)}>{productItem.product.name} </h5>
                    
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
            }
            )}
            </div>
      )}
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
                  <div className="shop-now"><Link to="/Product" className="btn">Shop Now</Link></div>
                </div>
              </div>
              <div className="col-md-6 latest-right">
                <div className="row latest-grids">
                  <div className="latest-grid1 product-men col-12">
                    <div className="product-shoe-info shoe text-center">
                      <div className="men-thumb-item">
                        <img src={img2} className="img-fluid" alt="" />
                        <div className="shop-now"><Link to="/Product" className="btn">Shop Now</Link></div>
                      </div>
                    </div>
                  </div>
                  <div className="latest-grid2 product-men col-12 mt-lg-4">
                    <div className="product-shoe-info shoe text-center">
                      <div className="men-thumb-item">
                        <img src={img3} className="img-fluid" alt="" />
                        <div className="shop-now"><Link to="/Product" className="btn">Shop Now</Link></div>
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
