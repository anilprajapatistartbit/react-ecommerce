import React, { useState, useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";

import s1 from "../../assets/images/s1.jpg"
import s2 from "../../assets/images/s2.jpg"
import s4 from "../../assets/images/s4.jpg"

import "../../assets/css/style.css"
import "../../assets/css/font-awesome.css"
function Product({ product, addtocart, singlepro,Images }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(product);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    console.log("productsss",product)
    const filtered = product.filter((productItem) =>
      productItem.product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page when the search term changes
  }, [searchTerm, product]);

  const pdetail = (productItem) => {
    navigate("/SingleProduct");
    singlepro(productItem);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (pageNumber) => {
    if (
      pageNumber >= 1 &&
      pageNumber <= Math.ceil(filteredProducts.length / productsPerPage)
    ) {
      setCurrentPage(pageNumber);
    }
  };

  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(filteredProducts.length / productsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }
//   return (
//     <>
//       <div className="container" style={{ marginTop: "2%" }}>
//         <div style={{ marginLeft: "40px" }}>
//           <label>Search:</label>{" "}
//           <input
//             type="text"
//             placeholder="Search by name"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             style={{ marginBottom: "1rem", width: "26%" }}
//           />
//         </div>
//         <div
//           style={{ marginLeft: "auto", marginRight: "auto", width: "1000px" }}
//         >
//           <div className="row">
//             {currentProducts.map((productItem) => {
//               return (
//                 <div
//                   className="card col-md-4"
//                   style={{
//                     margin: "5px",
//                     padding: "0px",
//                     width: "32%",
//                     height: "450px",
//                   }}
//                   key={productItem.product.id}
//                 >
//                    <div className="card-image">
//                     {console.log(productItem)}
//                     <img
//                       src={`https://localhost:7015/images/${
//                         productItem?.images[0]?.url
//                       }`}
//                       //src={productItem.images}
//                       width="100%"
//                       height="300"
//                       alt={productItem.product
//                         .name}
//                     />
//                   </div>  
//                   <div className="card-body">
//                     <p className="title product-title">
//                       {productItem.product.name} | {productItem.product
// .category}
//                     </p>
//                     <div className="content">
//                       {productItem.seller}
//                       <br />
//                     </div>
//                     <button
//                       onClick={() => addtocart(productItem)}
//                       className="btn btn-primary"
//                     >
//                       Add To Cart
//                     </button>
//                     <button
//                       style={{ float: "right", width: "30%" }}
//                       onClick={() => pdetail(productItem)}
//                       className="btn btn-primary"
//                     >
//                       View
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         <div className="pagination">
//           <button
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//           >
//             Pre
//           </button>
//           {pageNumbers.map((pageNumber) => (
//             <span
//               key={pageNumber}
//               onClick={() => handlePageChange(pageNumber)}
//               className={currentPage === pageNumber ? "active" : ""}
//             >
//               {pageNumber}
//             </span>
//           ))}
//           <button
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={
//               currentPage ===
//               Math.ceil(filteredProducts.length / productsPerPage)
//             }
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </>
//   );


return (
  <div>
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
          <li className="breadcrumb-item active">PRODUCT'S</li>
        </ol>
        {/**/}
      </div>
    
    {/* banner */}
    <section className="ab-info-main py-md-5 py-4">
      <div className="container py-md-3">
        {/* top Products */}
        <div className="row">
          {/* product left */}
          <div className="side-bar col-lg-4">
            <div className="search-bar w3layouts-newsletter">
              <h3 className="sear-head">Search Here..</h3>
              <form action="#" method="post" className="d-flex">
                <input type="search" placeholder="Product name..." name="search" className="form-control"value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} required />
                <button className="btn1"><span className="fa fa-search" aria-hidden="true" /></button>
              </form>
            </div>
            {/*preference */}
            <div className="left-side my-4">
              <h3 className="sear-head">Occasion</h3>
              <ul className="w3layouts-box-list">
                <li>
                  <input type="checkbox" className="checked" />
                  <span className="span">Casuals</span>
                </li>
                <li>
                  <input type="checkbox" className="checked" />
                  <span className="span">Party</span>
                </li>
                <li>
                  <input type="checkbox" className="checked" />
                  <span className="span">Wedding</span>
                </li>
                <li>
                  <input type="checkbox" className="checked" />
                  <span className="span">Ethnic</span>
                </li>
              </ul>
            </div>
            {/* // preference */}
            {/* discounts */}
            <div className="left-side">
              <h3 className="sear-head">Discount</h3>
              <ul className="w3layouts-box-list">
                <li>
                  <input type="checkbox" className="checked" />
                  <span className="span">5% or More</span>
                </li>
                <li>
                  <input type="checkbox" className="checked" />
                  <span className="span">10% or More</span>
                </li>
                <li>
                  <input type="checkbox" className="checked" />
                  <span className="span">20% or More</span>
                </li>
                <li>
                  <input type="checkbox" className="checked" />
                  <span className="span">30% or More</span>
                </li>
                <li>
                  <input type="checkbox" className="checked" />
                  <span className="span">50% or More</span>
                </li>
                <li>
                  <input type="checkbox" className="checked" />
                  <span className="span">60% or More</span>
                </li>
              </ul>
            </div>
            {/* //discounts */}
            {/* reviews */}
            <div className="customer-rev left-side my-4">
              <h3 className="sear-head">Customer Review</h3>
              <ul className="w3layouts-box-list">
                <li>
                  <a href="#">
                    <span className="fa fa-star" aria-hidden="true" />
                    <span className="fa fa-star" aria-hidden="true" />
                    <span className="fa fa-star" aria-hidden="true" />
                    <span className="fa fa-star" aria-hidden="true" />
                    <span className="fa fa-star" aria-hidden="true" />
                    <span>5.0</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-star" aria-hidden="true" />
                    <span className="fa fa-star" aria-hidden="true" />
                    <span className="fa fa-star" aria-hidden="true" />
                    <span className="fa fa-star" aria-hidden="true" />
                    <span className="fa fa-star-o" aria-hidden="true" />
                    <span>4.0</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-star" aria-hidden="true" />
                    <span className="fa fa-star" aria-hidden="true" />
                    <span className="fa fa-star" aria-hidden="true" />
                    <span className="fa fa-star-half-o" aria-hidden="true" />
                    <span className="fa fa-star-o" aria-hidden="true" />
                    <span>3.5</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-star" aria-hidden="true" />
                    <span className="fa fa-star" aria-hidden="true" />
                    <span className="fa fa-star" aria-hidden="true" />
                    <span className="fa fa-star-o" aria-hidden="true" />
                    <span className="fa fa-star-o" aria-hidden="true" />
                    <span>3.0</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-star" aria-hidden="true" />
                    <span className="fa fa-star" aria-hidden="true" />
                    <span className="fa fa-star-half-o" aria-hidden="true" />
                    <span className="fa fa-star-o" aria-hidden="true" />
                    <span className="fa fa-star-o" aria-hidden="true" />
                    <span>2.5</span>
                  </a>
                </li>
              </ul>
            </div>
            {/* //reviews */}
            {/* deals */}
            <div className="deal-leftmk left-side">
              <h3 className="sear-head">Special Deals</h3>
              <div className="special-sec1 row mb-3">
                <div className="img-deals col-md-4">
                  <img src={s4} className="img-fluid" alt="" />
                </div>
                <div className="img-deal1 col-md-4">
                  <h3>Shuberry Heels</h3>
                  <a href="shop-single.html">$180.00</a>
                </div>
              </div>
              <div className="special-sec1 row">
                <div className="img-deals col-md-4">
                  <img src={s2} className="img-fluid" alt="" />
                </div>
                <div className="img-deal1 col-md-8">
                  <h3>Chikku Loafers</h3>
                  <a href="shop-single.html">$99.00</a>
                </div>
              </div>
              <div className="special-sec1 row my-3">
                <div className="img-deals col-md-4">
                  <img src={s1} className="img-fluid" alt="" />
                </div>
                <div className="img-deal1 col-md-8">
                  <h3>Bella Toes</h3>
                  <a href="shop-single.html">$165.00</a>
                </div>
              </div>
            </div>
            {/* //deals */}
          </div>
          {/* //product left */}
          {/* product right */}
          <div className="left-ads-display col-lg-8">
            <div className="row">
            {currentProducts.map((productItem) => {
              return (
              <div className="col-md-4 product-men" >
                <div className="product-shoe-info shoe text-center"style={{height: "435px",marginBottom:"30px"}}>
                  <div className="men-thumb-item">
                    <img src={`https://localhost:7015/images/${
                        productItem?.images[0]?.url
                       }`} className="img-fluid" alt="" />
                    {/* <button className="product-new-top"  onClick={() => addtocart(productItem)}
                       >
                      addtocard
                   </button> */}
                   <button className="product-new-top"  onClick={() => pdetail(productItem)}>
                      View
                   </button>
                  </div>
                  <div className="item-info-product">
                    <h4>
                      <a onClick={() => pdetail(productItem)}> {productItem.product.name} </a>
                    </h4>
                    <div className="product_price">
                      <div className="grid-price">
                        <span className="money">${productItem.product.price}</span>
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
               );
               })}
            </div>
      
            <div className="grid-img-right mt-4 text-right">
              <span className="money">Flat 50% Off</span>
              <a href="shop-single.html" className="btn">Shop Now</a>
            </div>
            <div className="pagination" style={{float:"right"}}>
           <button
            style={{background:'#414b52',color:"white"}}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
           {"<<"}
          </button>
          {pageNumbers.map((pageNumber) => (             <span
              key={pageNumber}
               onClick={() => handlePageChange(pageNumber)}
               className={currentPage === pageNumber ? "active" : ""}
            >
             {pageNumber}
             </span>
           ))}
         <button
         style={{background:'#414b52',color:"white"}}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={
              currentPage ===Math.ceil(filteredProducts.length / productsPerPage)
            }
          >
            {">>"}
           </button>
              </div> 
          </div>
        </div>
      </div>
    </section>
  </div>
);
 }

export default Product;
