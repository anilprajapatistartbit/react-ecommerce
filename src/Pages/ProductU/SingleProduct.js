import React, { useState, useEffect } from "react";
import { useNavigate ,Link, useLocation} from "react-router-dom";
import "../../assets/css/SingleProduct.css";

function SingleProduct({  addtocart, pro }) {
 // const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

 // const productItem = location.state?.productItem;
  const [mainImage, setMainImage] = useState(0);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
 
  const addToCart = (proitem) => {
    if (!isAddedToCart) {
      addtocart(proitem);
      setIsAddedToCart(true);
    } else {
      alert('This product is already in your cart.');
    }
  };
  return (
    <>
         <div>
          {/* mian-content */}
          <div className="main-banner inner" id="home">
            
          </div>
         {/*//main-content*/}
          {/**/}
          <ol className="breadcrumb">
           <li className="breadcrumb-item">
           <Link to="/Home" >HOME</Link>
           </li>
            <li className="breadcrumb-item active">PRODUCT DETAILS</li>
          </ol>
           {/**/}
         </div>
          {pro.map((proitem, index) => {
            return (
              <>
<section className="ab-info-main py-md-5 py-4">
            <div class="container py-md-3">
              <div className="row">
                <div className="col-md-6">
                  {/* <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src={three}
                          className="d-block w-100"
                          alt="..."
                          width="100%"
                          height="490"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={two}
                          className="d-block w-100"
                          alt="..."
                          width="100%"
                          height="490"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={one}
                          className="d-block w-100"
                          alt="..."
                          width="100%"
                          height="490"
                        />
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExample"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      />
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExample"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      />
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div> */}
             
                    <div>
                    <div className="preview-pic tab-content">
                      <div className="tab-pane active" id="pic-1">
                        <center>
                        <img className="desc1-left"
                          //src={proitem.url[mainImage]}
                          src={`https://localhost:7015/images/${
                        proitem?.images[mainImage]?.url
                      }`}
                          key={index}
                          style={{ height: "430px", width: "80%" }}
                        ></img></center>
                      </div>
                    </div>
                    </div>
                    <div className="row thumbnail-images" style={{marginLeft:'44px',marginRight:"56px",marginTop:"10px"}}>
                    
                      {proitem?.images?.length> 0 &&
                     
                        proitem.images.map((item, index) => (
                      
                          <div className="col-md-3" >
                            <img
                              src={`https://localhost:7015/images/${item.url}`}
                              style={{ height: "95px", width: "100px",border: '1px solid #ddd' }}
                              onClick={() => setMainImage(index)}
                            />
                          </div>
                         
                        ))}
                   </div>



                </div>
                <div className="col-lg-6 offset-lg-0">
                  <h3> {proitem.product.name}</h3>
                  <br />
                  <h5>
                    Rs.<span>${proitem.product.price}</span> 
                  </h5>
                  <div className="available mt-3">
                    <ul>
                      <h5>
                        <span>Category</span> :{proitem.product.category}
                      </h5>
                      <br />
                      <h5 href="#">
                        <span>Availibility</span> : In Stock
                      </h5>
                    </ul>
                    <span>
                      <a href="#">login to save in wishlist </a>
                    </span>
                    <p>
                    {proitem.product.disciption}
                    </p>
                  </div>
                  <div className="action">
                  <button
            className="product-new-top"
            onClick={() => addToCart(proitem)}
            type="button"
            style={{ height: "42px", width: "145px" }}
          >
            {isAddedToCart ? "Added to Cart" : "Add to Cart"}
          </button>
                  </div>
                  <br />
                  <div className="share-desc">
                    <div className="share">
                      <h4>Share Product :</h4>
                      <ul className="w3layouts_social_list list-unstyled">
                        <li>
                          <a href="#" className="w3pvt_facebook">
                            <span className="fa fa-facebook-f" />
                          </a>
                        </li>
                        <li className="mx-2">
                          <a href="#" className="w3pvt_twitter">
                            <span className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="w3pvt_dribble">
                            <span className="fa fa-dribbble" />
                          </a>
                        </li>
                        <li className="mx-2">
                          <a href="#" className="w3pvt_google">
                            <span className="fa fa-google-plus" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="clearfix" />
                  </div>
                </div>
              </div>

              <div>
                <div className="row sub-para-w3layouts mt-5">
                  <h3 className="shop-sing">Lorem ipsum dolor sit amet</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elPellentesque vehicula augue eget nisl ullamcorper,
                    molestie blandit ipsum auctor. Mauris volutpat augue
                    dolor.Consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut lab ore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco. labore et
                    dolore magna aliqua.
                  </p>
                  <p className="mt-3 italic-blue">
                    Consectetur adipisicing elPellentesque vehicula augue eget
                    nisl ullamcorper, molestie blandit ipsum auctor. Mauris
                    volutpat augue dolor.Consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut lab ore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                    labore et dolore magna aliqua.
                  </p>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elPellentesque vehicula augue eget nisl ullamcorper,
                    molestie blandit ipsum auctor. Mauris volutpat augue
                    dolor.Consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut lab ore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco. labore et
                    dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          </section>
       
              </>
            );
          })}
       
  </>
);
  // return (
  //   <>
  //      <div>
  //       {/* mian-content */}
  //       <div className="main-banner inner" id="home">
          
  //       </div>
  //       {/*//main-content*/}
  //       {/**/}
  //       <ol className="breadcrumb">
  //         <li className="breadcrumb-item">
  //           <a href="index.html">Home</a>
  //         </li>
  //         <li className="breadcrumb-item active">Single Page</li>
  //       </ol>
  //       {/**/}
  //     </div>
      
  //         <section className="ab-info-main py-md-5 py-4">
  //           <div class="container py-md-3">
  //             <div className="row">
  //               <div className="desc1-left col-md-6">
  //                 <div id="carouselExample" className="carousel slide">
  //                   <div className="carousel-inner">
  //                     <div className="carousel-item active">
  //                       <img
  //                         src={three}
  //                         className="d-block w-100"
  //                         alt="..."
  //                         width="100%"
  //                         height="490"
  //                       />
  //                     </div>
  //                     <div className="carousel-item">
  //                       <img
  //                         src={two}
  //                         className="d-block w-100"
  //                         alt="..."
  //                         width="100%"
  //                         height="490"
  //                       />
  //                     </div>
  //                     <div className="carousel-item">
  //                       <img
  //                         src={one}
  //                         className="d-block w-100"
  //                         alt="..."
  //                         width="100%"
  //                         height="490"
  //                       />
  //                     </div>
  //                   </div>
  //                   <button
  //                     className="carousel-control-prev"
  //                     type="button"
  //                     data-bs-target="#carouselExample"
  //                     data-bs-slide="prev"
  //                   >
  //                     <span
  //                       className="carousel-control-prev-icon"
  //                       aria-hidden="true"
  //                     />
  //                     <span className="visually-hidden">Previous</span>
  //                   </button>
  //                   <button
  //                     className="carousel-control-next"
  //                     type="button"
  //                     data-bs-target="#carouselExample"
  //                     data-bs-slide="next"
  //                   >
  //                     <span
  //                       className="carousel-control-next-icon"
  //                       aria-hidden="true"
  //                     />
  //                     <span className="visually-hidden">Next</span>
  //                   </button>
  //                 </div>
  //               </div>
  //               <div className="col-lg-5 offset-lg-1">
  //                 <h3>fgf</h3>
  //                 <br />
  //                 <h5>
  //                   Rs. 499 <span>599</span> <a href="#">click for offer</a>
  //                 </h5>
  //                 <div className="available mt-3">
  //                   <ul>
  //                     <h5>
  //                       <span>Category</span> : Household
  //                     </h5>
  //                     <br />
  //                     <h5 href="#">
  //                       <span>Availibility</span> : In Stock
  //                     </h5>
  //                   </ul>
  //                   <span>
  //                     <a href="#">login to save in wishlist </a>
  //                   </span>
  //                   <p>
  //                     Lorem Ipsum has been the industry's standard since the
  //                     1500s. Praesent ullamcorper dui turpis..{" "}
  //                   </p>
  //                 </div>
  //                 <div className="action">
  //                   <button
  //                     className="product-new-top "
  //                     // onClick={() => addtocart(proitem)}
  //                     type="button"
  //                     style={{ height: "42px", width: "145px" }}
  //                   >
  //                     add to cart
  //                   </button>
  //                 </div>
  //                 <br />
  //                 <div className="share-desc">
  //                   <div className="share">
  //                     <h4>Share Product :</h4>
  //                     <ul className="w3layouts_social_list list-unstyled">
  //                       <li>
  //                         <a href="#" className="w3pvt_facebook">
  //                           <span className="fa fa-facebook-f" />
  //                         </a>
  //                       </li>
  //                       <li className="mx-2">
  //                         <a href="#" className="w3pvt_twitter">
  //                           <span className="fa fa-twitter" />
  //                         </a>
  //                       </li>
  //                       <li>
  //                         <a href="#" className="w3pvt_dribble">
  //                           <span className="fa fa-dribbble" />
  //                         </a>
  //                       </li>
  //                       <li className="ml-2">
  //                         <a href="#" className="w3pvt_google">
  //                           <span className="fa fa-google-plus" />
  //                         </a>
  //                       </li>
  //                     </ul>
  //                   </div>
  //                   <div className="clearfix" />
  //                 </div>
  //               </div>
  //             </div>

  //             <div>
  //               <div className="row sub-para-w3layouts mt-5">
  //                 <h3 className="shop-sing">Lorem ipsum dolor sit amet</h3>
  //                 <p>
  //                   Lorem ipsum dolor sit amet, consectetur adipisicing
  //                   elPellentesque vehicula augue eget nisl ullamcorper,
  //                   molestie blandit ipsum auctor. Mauris volutpat augue
  //                   dolor.Consectetur adipisicing elit, sed do eiusmod tempor
  //                   incididunt ut lab ore et dolore magna aliqua. Ut enim ad
  //                   minim veniam, quis nostrud exercitation ullamco. labore et
  //                   dolore magna aliqua.
  //                 </p>
  //                 <p className="mt-3 italic-blue">
  //                   Consectetur adipisicing elPellentesque vehicula augue eget
  //                   nisl ullamcorper, molestie blandit ipsum auctor. Mauris
  //                   volutpat augue dolor.Consectetur adipisicing elit, sed do
  //                   eiusmod tempor incididunt ut lab ore et dolore magna aliqua.
  //                   Ut enim ad minim veniam, quis nostrud exercitation ullamco.
  //                   labore et dolore magna aliqua.
  //                 </p>
  //                 <p className="mt-3">
  //                   Lorem ipsum dolor sit amet, consectetur adipisicing
  //                   elPellentesque vehicula augue eget nisl ullamcorper,
  //                   molestie blandit ipsum auctor. Mauris volutpat augue
  //                   dolor.Consectetur adipisicing elit, sed do eiusmod tempor
  //                   incididunt ut lab ore et dolore magna aliqua. Ut enim ad
  //                   minim veniam, quis nostrud exercitation ullamco. labore et
  //                   dolore magna aliqua.
  //                 </p>
  //               </div>
  //             </div>
  //           </div>
  //         </section>
       
      
  //   </>
  // );
}

export default SingleProduct;
