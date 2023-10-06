import React from "react";
import "../assets/css/style.css";
import "../assets/css/font-awesome.css";
import { Link } from "react-router-dom";
import TextInput from "../common/TextInput";
import { useState, useEffect } from "react";
import axios from "axios";
function Footer() {
 
  const [formData, setFormData] = useState({
    Id: 0,
    Email: '',
  });
  const [errors, setErrors] = useState({});
  const [apiErrorMessage, setApiErrorMessage] = useState(''); // State for API error message

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.Email.trim()) {
      validationErrors.Email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.Email)) {
      validationErrors.Email = 'Invalid email format';
    }

    if (Object.keys(validationErrors).length === 0) {
      axios
        .post('https://localhost:7015/api/Newsletter/AddNewsletter', formData)
        .then((response) => {
          alert('Newsletter subscription successful');
          setFormData({ ...formData, Email: '' });
        })
        .catch((error) => {
          if (error.response && error.response.status === 400) {
            setApiErrorMessage(error.response.data);
            setTimeout(() => {
              setApiErrorMessage('');
            }, 3000);
          } else {
            console.error('Error subscribing to the newsletter:', error);
          }
        });
    } else {
      setErrors(validationErrors);
    }
  };
  return (
    <div>
      {" "}
      {/* footer */}
      <footer>
        <div className="container">
          <div className="row footer-top">
            <div className="col-lg-4 footer-grid_section_w3layouts">
              <h2 className="logo-2 mb-lg-4 mb-3">
                <Link to="/Home">
                  <span className="fa fa-bold" aria-hidden="true" />
                  ootie
                </Link>
              </h2>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <h4 className="sub-con-fo ad-info my-4">Catch on Social</h4>
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
                <li className="ml-2">
                  <a href="#" className="w3pvt_google">
                    <span className="fa fa-google-plus" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-8 footer-right">
              <div className="w3layouts-news-letter">
                <h3 className="footer-title text-uppercase text-wh mb-lg-4 mb-3">
                  Newsletter
                </h3>
                <p>
                  By subscribing to our mailing list you will always get latest
                  news and updates from us.
                </p>
                <form onSubmit={handleSubmit} className="w3layouts-newsletter">
                  <input
                    type="text"
                    name="Email"
                    error={errors.Email}
                    value={formData.Email}
                    placeholder="Enter your email..."
                    onChange={(e) =>
                    setFormData({ ...formData, Email: e.target.value })
                    }
                    style={{height:"50px",width:"545px"}}
                  />
                  <button className="btn1">
                    <span className="fa fa-paper-plane-o" aria-hidden="true" />
                  </button>
                  {errors.Email && (
          <p className="error-message text-danger" style={{ marginLeft: '5px' }}>
            {errors.Email}
          </p>
        )}
        {apiErrorMessage && (
          <p className="error-message text-danger" style={{ marginLeft: '5px' }}>
            {apiErrorMessage}
          </p>
        )}
                </form>
               
              </div>
              <div className="row mt-lg-4 bottom-w3layouts-sec-nav mx-0">
                <div className="col-md-4 footer-grid_section_w3layouts">
                  <h3 className="footer-title text-uppercase text-wh mb-lg-4 mb-3">
                    Information
                  </h3>
                  <ul className="list-unstyled w3layouts-icons">
                    <li>
                      <Link to="/Home">Home</Link>
                    </li>
                    <li className="mt-3">
                      <Link to="/About">About Us</Link>
                    </li>
                    <li className="mt-3">
                      <a href="#">Gallery</a>
                    </li>
                    <li className="mt-3">
                      <a href="#">Services</a>
                    </li>
                    <li className="mt-3">
                      <Link to="/Contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 footer-grid_section_w3layouts">
                  {/* social icons */}
                  <div className="agileinfo_social_icons">
                    <h3 className="footer-title text-uppercase text-wh mb-lg-4 mb-3">
                      Customer Service
                    </h3>
                    <ul className="list-unstyled w3layouts-icons">
                      <li>
                        <Link to="/About">About Us</Link>
                      </li>
                      <li className="mt-3">
                        <a href="#">Delivery &amp; Returns</a>
                      </li>
                      <li className="mt-3">
                        <a href="#">Waranty</a>
                      </li>
                      <li className="mt-3">
                        <a href="#">Terms &amp; Condition</a>
                      </li>
                      <li className="mt-3">
                        <a href="#">Privacy Plolicy</a>
                      </li>
                    </ul>
                  </div>
                  {/* social icons */}
                </div>
                <div className="col-md-4 footer-grid_section_w3layouts my-md-0 my-5">
                  <h3 className="footer-title text-uppercase text-wh mb-lg-4 mb-3">
                    Contact Info
                  </h3>
                  <div className="contact-info">
                    <div className="footer-address-inf">
                      <h4 className="ad-info mb-2">Phone</h4>
                      <p>+121 098 8907 9987</p>
                    </div>
                    <div className="footer-address-inf my-4">
                      <h4 className="ad-info mb-2">Email </h4>
                      <p>
                        <a href="mailto:info@example.com">info@example.com</a>
                      </p>
                    </div>
                    <div className="footer-address-inf">
                      <h4 className="ad-info mb-2">Location</h4>
                      <p>Honey Avenue, New York City</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cpy-right text-left row">
                <p className="col-md-10">
                  © 2019 Bootie. All rights reserved | Design by
                  <a href="http://w3layouts.com"> W3layouts.</a>
                </p>
                {/* move top icon */}
                <a href="#home" className="move-top text-right col-md-2">
                  <span className="fa fa-long-arrow-up" aria-hidden="true" />
                </a>
                {/* //move top icon */}
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* //footer */}
    </div>
  );
}

export default Footer;
