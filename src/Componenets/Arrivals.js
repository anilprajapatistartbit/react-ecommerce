import React from "react";
import "../App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import s1 from "../images/s1.jpg";
import s2 from "../images/s2.jpg";
import s3 from "../images/s3.jpg";
import banner1 from "../images/banner1.jpg";
import banner2 from "../images/banner2.jpg";
import banner3 from "../images/banner3.jpg";
import l1 from "../images/1.png";
import l2 from "../images/2.png";
import l3 from "../images/3.png";
import l4 from "../images/4.png";
import l5 from "../images/5.png";
import l6 from "../images/6.png";
import l7 from "../images/7.png";
import Menu from "./Menu";
import { useState } from "react";
export default function Arrivals() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      margin: "0px",
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      margin: 0,

      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const [items, setitems] = useState(Menu);
  const filterItem = (categItem) => {
    const updateItems = Menu.filter((curElm) => {
      return curElm.category == categItem;
    });
    setitems(updateItems);
  };
  const [pic, setpic] = useState(Menu);
  return (
    <>
      <div
        className="container"
        style={{ maxWidth: "1300px", marginTop: "5%" }}
      >
        <h3
          className="mt-5 text-center main-heading"
          style={{ padding: "17px" }}
        >
          New Arrivals
        </h3>

        <div style={{ paddingBottom: "65px" }}>
          <Carousel responsive={responsive}>
            <div className="text">
              <img src={s1} height="300" />
              <div className="overlay1">
                <p className="para">Heading</p>
                <p>Lorem </p>
              </div>
            </div>
            <div className="text">
              <img src={s2} height="300" />
              <div className="overlay1">
                <p className="para">Heading</p>
                <p>Lorem </p>
              </div>
            </div>
            <div className="text">
              <img src={s3} height="300" />
              <div className="overlay1">
                <p className="para">Heading</p>
                <p>Lorem </p>
              </div>
            </div>
            <div className="text">
              <img src={s1} height="300" />
              <div className="overlay1">
                <p className="para">Heading</p>
                <p>Lorem </p>
              </div>
            </div>
            <div className="text">
              <img src={s3} height="300" />
              <div className="overlay1">
                <p className="para">Heading</p>
                <p>Lorem </p>
              </div>
            </div>
            <div>
              <img src={s1} height="300" />
              <div className="overlay1">
                <p className="para">Heading</p>
                <p>Lorem </p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
      <div
        class="container"
        style={{ marginTop: "5%", marginBottom: "5%", maxWidth: "1300px" }}
      >
        <div class="row">
          <div className="col-sm banner">
            <img src={banner1} className="image" />
            <div className="overlay">
              <div className="text">
                <p>Women's</p>
                <h5>125 Products</h5>
              </div>
            </div>
          </div>
          <div className="col-sm banner">
            <img src={banner2} className="image" />
            <div className="overlay">
              <div className="text">
                <p>Men's</p>
                <h5>97 Products</h5>
              </div>
            </div>
          </div>
          <div className="col-sm banner">
            <img src={banner3} className="image" />
            <div className="overlay">
              <div className="text">
                <p>Kid's</p>
                <h5>48 Products</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="menu-tabs container" style={{ maxWidth: "1300px" }}>
        <h3
          className="mt-5 text-center main-heading "
          style={{ paddingTop: "30px" }}
        >
          SHOP BY CATEGORIES
        </h3>
        <div
          className="menu-teb d-flex justify-content-center"
          style={{ padding: "12px" }}
        >
          <button
            className="fbtn"
            onClick={() => filterItem("Men")}
            style={{
              margin: "3px",
              background: "gray",
              color: "white",
              border: "None",
            }}
          >
            MEN's
          </button>
          <button
            className="fbtn"
            onClick={() => filterItem("Women")}
            style={{
              margin: "3px",
              background: "gray",
              color: "white",
              border: "None",
            }}
          >
            WOMEN's
          </button>
          <button
            className="fbtn"
            onClick={() => filterItem("Kids")}
            style={{
              margin: "3px",
              background: "gray",
              color: "white",
              border: "None",
            }}
          >
            KID's
          </button>
          {/* <button className="btn btn-warning" onClick={() => setitems(Menu)}style={{margin:'3px'}}>All</button> */}
        </div>

        <div
          className="menu-items container "
          style={{ paddingBottom: "50px" }}
        >
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row">
                {items.map((elem) => {
                  const { url ,name} = elem;
                  return (
                    <div className="item1 col-12 col-md-6 col-lg-6 col-xl-3 my-3">
                      <div class="card">
                        
                        <img src={url} className="image" />
                        
                        <div class="card-body">
                          <h6 class="title product-title">
                            {name} 
                          </h6>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{ maxWidth: "1300px", marginTop: "-5%" }}
      >
        <h3
          className="mt-5 text-center main-heading"
          style={{ padding: "40px" }}
        >
          SHOP BY BRANDS
        </h3>

        <div style={{ paddingBottom: "65px" }}>
          <Carousel responsive={responsive}>
            
            <div>
              <img src={l1} height="auto" />
            </div>
            <div>
              <img src={l2} height="auto" />
            </div>
            <div>
              <img src={l3} height="auto" />
            </div>
            <div>
              <img src={l4} height="auto" />
            </div>
            <div>
              <img src={l5} height="auto" />
            </div>
            <div>
              <img src={l6} height="auto" />
            </div>
            <div>
              <img src={l7} height="auto" />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}
