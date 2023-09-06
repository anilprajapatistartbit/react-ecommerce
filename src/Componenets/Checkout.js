import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import '../assets/css/Checkout.css'
function Checkout() {
 
  const [formData, setFormData] = useState({
    cid:0,
    fullname: "",
    email: "",
    address: "",
    city:"",
    state:"",
    zip: "",
    card: "",
    cardnumber: "",
    expmonth:"",
    expyear:"",
    cvv:"",
  });

  const [errors,seterrors]=useState({})
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
   const handleSubmit =(e)=>{
    let isValid = true;
    e.preventDefault();
    const validationerror ={}
    if (!formData.fullname.trim()) {
      validationerror.fullname = 'Username is required';
      isValid = false;
    }
    if (!formData.email.trim()) {
      validationerror.email = 'Email is required';
      isValid = false;
  
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationerror.email = 'Invalid email format';
      isValid = false;
     
    }
    if (!formData.address.trim()) {
      validationerror.address = 'address is required';
      isValid = false;
    
    }
    if (!formData.city.trim()) {
      validationerror.city = 'city is required';
      isValid = false;
    
    }  
    if (!formData.state.trim()) {
      validationerror.state = 'state is required';
      isValid = false;
    
    } 
    if (!formData.zip.trim()) {
      validationerror.zip = 'zip is required';
      isValid = false;
    
    } 
    if (!formData.card.trim()) {
      validationerror.card = 'card is required';
      isValid = false;
    
    } 
    if (!formData.cardnumber.trim()) {
      validationerror.cardnumber = 'card number is required';
      isValid = false;
    
    } 
    if (!formData.expmonth.trim()) {
      validationerror.expmonth = 'exp month is required';
      isValid = false;
    
    } 
    if (!formData.expyear.trim()) {
      validationerror.expyear = 'exp year is required';
      isValid = false;
    
    } 
    if (!formData.cvv.trim()) {
      validationerror.cvv = 'cvv is required';
      isValid = false;
    
    } 
    
   
    if (isValid) {
      try {
        console.log(formData);
        const response =axios.post(
          "https://localhost:7120/api/Registration/checkout",
          formData
         
        );
        alert("checkout sucessfully");
        console.log(response.data); // You can handle the response as needed
      } catch (error) {
        console.error("Error registering:", error);
      }
    } else {
      seterrors(validationerror);
    }
   }
  return (
    <>
      <div class="row">
        <div class="col-75">
          <div class="container" style={{background:'#f2f2f2',padding:'30px 30px 30px 30px',border:'1px solid lightgrey',marginBottom:'5%'}}>
          <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-50">
            <h3>Billing Address</h3>
            <label htmlFor="fname"><i className="fa fa-user" /> Full Name</label>
            <input type="text" id="fullname" name="fullname" placeholder="John M. Doe"  className={`cform form-control ${errors.fullname && 'is-invalid'}`}  value={formData.fullname}
                          onChange={handleChange}/> {errors.fullname && (
                            <div className="invalid-feedback">{errors.fullname}</div>
                          )}
            <label htmlFor="email"><i className="fa fa-envelope" /> Email</label>
            <input type="text" id="email" name="email" placeholder="john@example.com" className={`cform form-control ${errors.email && 'is-invalid'}`}  value={formData.email}
                          onChange={handleChange}/>{errors.email && (
                            <div className="invalid-feedback">{errors.email}</div>
                          )}
            <label htmlFor="adr"><i className="fa fa-address-card-o" /> Address</label>
            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" className={`cform form-control ${errors.address && 'is-invalid'}`}  value={formData.address}
                          onChange={handleChange}/>{errors.address && (
                            <div className="invalid-feedback">{errors.address}</div>
                          )}
            <label htmlFor="city"><i className="fa fa-institution" /> City</label>
            <input type="text" id="city" name="city" placeholder="New York" className={`cform form-control ${errors.city && 'is-invalid'}`}  value={formData.city}
                          onChange={handleChange}/>{errors.city && (
                            <div className="invalid-feedback">{errors.city}</div>
                          )}
            <div className="row">
              <div className="col-50">
                <label htmlFor="state">State</label>
                <input type="text" id="state" name="state" placeholder="NY" className={`cform form-control ${errors.state && 'is-invalid'}`}  value={formData.state}
                          onChange={handleChange}/>{errors.state && (
                            <div className="invalid-feedback">{errors.state}</div>
                          )}
              </div>
              <div className="col-50">
                <label htmlFor="zip">Zip</label>
                <input type="text" id="zip" name="zip" placeholder={10001} className={`cform form-control ${errors.zip && 'is-invalid'}`}  value={formData.zip}
                          onChange={handleChange}/>{errors.zip && (
                            <div className="invalid-feedback">{errors.zip}</div>
                          )}
              </div>
            </div>
          </div>
          <div className="col-50">
            <h3>Payment</h3>
            <label htmlFor="fname">Accepted Cards</label>
            <div className="icon-container">
              <i className="fa fa-cc-visa" style={{color: 'navy',marginRight:"5px"}} />
              <i className="fa fa-cc-amex" style={{color: 'blue',marginRight:"5px"}} />
              <i className="fa fa-cc-mastercard" style={{color: 'red',marginRight:"5px"}} />
              <i className="fa fa-cc-discover" style={{color: 'orange,marginRight:"5px"'}} />
            </div>
            <label htmlFor="cname">Name on Card</label>
            <input type="text" id="card" name="card" placeholder="John More Doe" className={`cform form-control ${errors.card && 'is-invalid'}`}  value={formData.card}
                          onChange={handleChange}/>{errors.card && (
                            <div className="invalid-feedback">{errors.card}</div>
                          )}
            <label htmlFor="ccnum">Credit card number</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" className={`cform form-control ${errors.cardnumber && 'is-invalid'}`}  value={formData.cardnumber}
                          onChange={handleChange}/>{errors.cardnumber && (
                            <div className="invalid-feedback">{errors.cardnumber}</div>
                          )}
            <label htmlFor="expmonth">Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="September"className={`cform form-control ${errors.expmonth && 'is-invalid'}`}  value={formData.expmonth}
                          onChange={handleChange}/>{errors.expmonth && (
                            <div className="invalid-feedback">{errors.expmonth}</div>
                          )}
            <div className="row">
              <div className="col-50">
                <label htmlFor="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder={2018} className={`cform form-control ${errors.expyear && 'is-invalid'}`}  value={formData.expyear}
                          onChange={handleChange}/>{errors.expyear && (
                            <div className="invalid-feedback">{errors.expyear}</div>
                          )}
              </div>
              <div className="col-50">
                <label htmlFor="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder={352} className={`cform form-control ${errors.cvv && 'is-invalid'}`}  value={formData.cvv}
                          onChange={handleChange}/>{errors.cvv && (
                            <div className="invalid-feedback">{errors.cvv}</div>
                          )}
              </div>
            </div>
          </div>
        </div>
        <label>
          <input type="checkbox" defaultChecked="checked" name="sameadr" /> Shipping address same as billing
        </label>
        <input type="submit" value='Continue to Checkout'defaultValue="Continue to checkout" className="btn btn-outline-primary" style={{width:'100%'}} />
      </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Checkout;
