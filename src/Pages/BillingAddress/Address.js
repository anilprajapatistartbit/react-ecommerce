import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate ,Link} from "react-router-dom";
import TextInput from "../../common/TextInput";
import "../../assets/css/Checkout.css";
import { loadStripe } from "@stripe/stripe-js";
function Address() {
  const [formData, setFormData] = useState({
    Id: 0,
    Country: "",
    City: "",
    State: "",
    StreetAddress: "",  
    zipcode: "", 
    UserId:0,
  });
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    let isValid = true;
    e.preventDefault();
    const validationerror = {};
    if (!formData.StreetAddress.trim()) {
      validationerror.StreetAddress = "address is required";
      isValid = false;
    }
    if (!formData.City.trim()) {
      validationerror.City = "city is required";
      isValid = false;
    }
    if (!formData.State.trim()) {
      validationerror.State = "state is required";
      isValid = false;
    }
    if (!formData.zipcode.trim()) {
      validationerror.zipcode = "zip is required";
      isValid = false;
    }
    if (!formData.Country.trim()) {
      validationerror.Country = "country is required";
      isValid = false;
    }

    if (isValid) {
      try {
        var user = localStorage.getItem("email")
       // var user = JSON.parse(user1)s
        console.log(formData);
        const response = axios.post(
          "https://localhost:7015/api/Address/AddAddress",
          {...formData,UserId:user}
        );
        toast.success('Add new address successfully!');
        navigate("/BillingAddress")
  
        console.log(response.data); // You can handle the response as needed
      } catch (error) {
        console.error("Error registering:", error);
      }
    } else {
      setFormErrors(validationerror);
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
              <Link to="/BillingAddress">BILLING DETAILS</Link>
           </li>
           <li className="breadcrumb-item active">ADDRESS</li>
          </ol>
           {/**/}
         </div>
      <div class="row">
        <div class="col-50">
          <div
            class="container"
            style={{
             
              padding: "30px 30px 30px 30px",
             
              marginBottom: "40px",
              //float: "left",
            }}
          >
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-50">
                  <h4>Add New Address</h4>
                  <TextInput
                    label={"Address"}
                    name={"StreetAddress"}
                    placeholder="542 W. 15th Street"
                    value={formData.StreetAddress}
                    onChange={handleChange}
                    iconClass="fa fa-address-card-o"
                    error={formErrors.StreetAddress}
                  />

                  <TextInput
                    label={"City"}
                    name={"City"}
                    placeholder="New York"
                    value={formData.City}
                    onChange={handleChange}
                    iconClass="fa fa-institution"
                    error={formErrors.City}
                  />

                  <div className="row">
                    <div className="col-50">
                      <TextInput
                        label={"State"}
                        name="State"
                        placeholder="NY"
                        value={formData.State}
                        onChange={handleChange}
                        error={formErrors.State}
                      />
                    </div>
                    <div className="col-50">
                      <TextInput
                        label={"Zip"}
                        name="zipcode"
                        placeholder={10001}
                        value={formData.zipcode}
                        onChange={handleChange}
                        error={formErrors.zipcode}
                      />
                    </div>
                    <div className="col-50">
                      <TextInput
                        label={"Country"}
                        name="Country"
                        placeholder="Country"
                        value={formData.Country}
                        onChange={handleChange}
                        error={formErrors.Country}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button
                
                value="Back"
                className="payment-address"
                style={{ width: "135px",float:"right" }}
                
              ><Link  to="/BillingAddress" style={{color:"white",textDecoration:"hide"}}>Back</Link></button>
              <input
                type="submit"
                value="Add"
              
                className="payment-address"
                style={{ width: "135px",float:"right" ,marginRight:"10px"}}
                
              />
                
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Address;
