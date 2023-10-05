import React from 'react'
import { Link } from "react-router-dom";
const Contact = () => {
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
          <li className="breadcrumb-item active">CONTACT US </li>
        </ol>
        {/**/}
      </div>
    <section className="ab-info-main py-5">
      <div className="container py-3">
        <h3 className="tittle text-center"><span className="sub-tittle">Find Us</span> Contact Us</h3>
        <div className="row contact-main-info mt-5">
          <div className="col-md-6 contact-right-content">
            <form action="#" method="post">
              <input type="text" name="Name" placeholder="Name" required />
              <input type="email" className="email" name="Email" placeholder="Email" required />
              <input type="text" name="Phone no" placeholder="Phone" required />
              <textarea name="Message" placeholder="Message" required defaultValue={""} />
              <div className="read mt-3">
                <input type="submit" defaultValue="Submit" />
              </div>
            </form>
          </div>
          <div className="col-md-6 contact-left-content">
            <div className="address-con">
              <h4 className="mb-2"><span className="fa fa-phone-square" aria-hidden="true" /> Phone</h4>
              <p>+121 098 8907 9987</p>
              <p>+121 098 8907 9987</p>
            </div>
            <div className="address-con my-4">
              <h4 className="mb-2"><span className="fa fa-envelope-o" aria-hidden="true" /> Email </h4>
              <p><a href="mailto:info@example.com">info@example.com</a></p>
              <p><a href="mailto:info@example.com">info@example.com</a></p>
            </div>
            <div className="address-con mb-4">
              <h4 className="mb-2"><span className="fa fa-fax" aria-hidden="true" /> Fax</h4>
              <p>(800) 123-80088</p>
            </div>
            <div className="address-con">
              <h4 className="mb-2"><span className="fa fa-map-marker" aria-hidden="true" /> Location </h4>
              <p>Honey Avenue, New York City</p>
            </div>
          </div>
        </div>
        <div className="map-fo mt-lg-5 mt-4">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27404345275!2d-118.69191921441556!3d34.02016130939095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos+Angeles%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1522474296007" allowFullScreen />
        </div>
      </div>
    </section></div>
  )
}

export default Contact