import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../Componenets/SingleProduct.css";
function SingleProduct({ product, addtocart, pro }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);
  const [mainImage, setMainImage] = useState(0);
  return (
    <div>
      {/* <div class="page-head">
        <div class="container">
          <div class="row">
            <div class="page-head-content">
              <h1 class="page-title">BANNERS</h1>
            </div>
          </div>
        </div>
      </div> */}
      <div className="card-cd">
        <div className="container">
          {pro.map((proitem, index) => {
            return (
              <>
                <div className="wrapper row">
                  <div className="preview col-md-5">
                    <div className="preview-pic tab-content">
                      <div className="tab-pane active" id="pic-1">
                        <img
                          src={proitem.url[mainImage]}
                          key={index}
                          style={{ height: "425px", width: "85%" }}
                        ></img>
                      </div>
                    </div>
                    <div className="row thumbnail-images">
                      {proitem.url.length > 0 &&
                        proitem.url.map((item, index) => (
                          <div className="col-md-3">
                            <img
                              src={item}
                              style={{ height: "85px", width: "85px" }}
                              onClick={() => setMainImage(index)}
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className="details col-md-7">
                    <h3 className="product-title">
                      {proitem.name} | {proitem.category}
                    </h3>
                    <div className="rating">
                      <div className="stars">
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                      </div>
                      <span className="review-no">41 reviews</span>
                    </div>
                    <p className="product-description">
                      Suspendisse quos? Tempus cras iure temporibus? Eu
                      laudantium cubilia sem sem! Repudiandae et! Massa senectus
                      enim minim sociosqu delectus posuere.
                    </p>
                    <h4 className="price">
                      current price: <span>${proitem.price}</span>
                    </h4>
                    <p className="vote">
                      <strong>91%</strong> of buyers enjoyed this product!{" "}
                      <strong>(87 votes)</strong>
                    </p>
                    {/* <h5 className="sizes">sizes:
              <span className="size" data-toggle="tooltip" title="small">s</span>
              <span className="size" data-toggle="tooltip" title="medium">m</span>
              <span className="size" data-toggle="tooltip" title="large">l</span>
              <span className="size" data-toggle="tooltip" title="xtra large">xl</span>
            </h5> */}
                    <h5 className="sizes">
                      Brand:
                      <span
                        className="size"
                        data-toggle="tooltip"
                        title="small"
                      >
                        {proitem.seller}
                      </span>
                    </h5>

                    <div className="action">
                      <button
                        className="add-to-cart btn btn-default"
                        onClick={() => addtocart(proitem)}
                        type="button"
                      >
                        add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
