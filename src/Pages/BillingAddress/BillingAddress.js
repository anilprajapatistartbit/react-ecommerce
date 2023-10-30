import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate,Link } from "react-router-dom";
import TextInput from "../../common/TextInput";
import "../../assets/css/Checkout.css";
import { loadStripe } from "@stripe/stripe-js";
function BillingAddress() {
  const [loading, setLoading] = useState(true);
  const id = localStorage.getItem("id");
  const [formData, setFormData] = useState({
    cid: 0,
    fullname: "",
    email: "",
  });
  const handleRadioChange = (Address, country, state, city, zip) => {
    console.log(Address, country, state, city, zip);
    setFormData({ ...formData, Address, country, state, city, zip }); 
    // Update selected address when radio button is checked
    
  };

  useEffect(() => {
    // Update localStorage whenever the 'cid' value changes
    localStorage.setItem("cid", formData.cid.toString());
  }, [formData.cid]);

  const [data, setData] = useState([]);
  useEffect(() => {
    // Get all users details in bootstrap table
    axios.get(`https://localhost:7015/api/Address/Getall?id=${id}`).then((res) => {
      // Storing users detail in state array object
      setData(res.data);
      setLoading(false);
    });
  }, []);

  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    let isValid = true;
    e.preventDefault();
    const validationerror = {};

    if (!formData.fullname.trim()) {
      validationerror.fullname = "fullname is required";
      isValid = false;
    }
    if (!formData.email.trim()) {
      validationerror.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationerror.email = "Invalid email format";
      isValid = false;
    }
    if (!formData.Address) {
     alert("Please select an address before submitting.");
     isValid = false;
    }
    if (isValid) {
      try {
        console.log(formData);
        const response = await axios.post(
          "https://localhost:7015/api/BillingAddress/AddBilling",
          { ...formData }
        );
           toast.success('Added Biliingdetails successfully!');
        const newCid = response.data;
        setFormData((prevData) => ({
          ...prevData,
          cid: newCid,
        }));
        localStorage.setItem("cid", newCid.toString());
        console.log("responessss", response.data); // You can handle the response as needed
       // alert("billing sucessfully");

        //stripe payment api ----------------------------------------------
        const cart = JSON.parse(localStorage.getItem("cart"));
        //send data
        let fitereddate= [];
        cart?.forEach(element => {
        const img = element.images.filter((el)=>el.productId==element.product.pid)
        fitereddate.push({...element.product,images:img})
        });
        console.log("carttttttt", cart);
        const paymentResponse = await axios.post(
          "https://localhost:7015/api/Payment/Payment",
          { items: fitereddate, sum: 0 }
        );
        // Handle the payment response
        const clientSecret = paymentResponse.data.clientSecret;
        console.log("Payment response:", paymentResponse);
        const paymentSessionUrl = paymentResponse.data;

        // Redirect the user to the payment page
       // alert("Redirecting to payment page...");
        window.location.href = paymentSessionUrl;
      } catch (error) {
        console.error("Error registering:", error);
      }
    } else {
      setFormErrors(validationerror);
    }
  };
  const address = async () => {
    navigate("/Address");
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
            <li className="breadcrumb-item active">BILLING DETAILS</li>
          </ol>
           {/**/}
         </div>
      <div class="row" style={{marginTop:"40px",marginBottom:"40px"}}>
        <div class="col-50">
          <div
            class="container"
            style={{
           
              padding: "30px 30px 30px 30px",
       
              marginBottom: "5%",
            }}
          >
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-50">
                  <h4>Billing Details</h4>
                  <TextInput
                    label={"Full Name"}
                    name="fullname"
                    placeholder="John M. Doe"
                    value={formData.fullname}
                    onChange={handleChange}
                    iconClass="fa fa-user"
                    error={formErrors.fullname}
                   
                  /><br/>
                  <TextInput
                    label={"Email"}
                    name={"email"}
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    iconClass="fa fa-envelope"
                    error={formErrors.email}
                    style={{marginBottom:"30px"}}
                  /><br/><br/>
                </div>
              </div>

              <input
                type="submit"
                value="Proceed To Payment"
                defaultValue="Proceed To Payment"
                className="payment-address"
                
              />
            </form>
          </div>
        </div>
        <div class="col-50">
        {loading ? (
        <p>Loading...</p>
      ) : (
              <div class="row">
              {data
          .map((result) => {
            console.log("userid",result.userId)
            console.log(id)
            return (
              <div className="col-5 card" style={{marginTop: "40px",marginRight: "40px",marginBottom:"40px"}}>
                <h5 className="card-header bg-transparent">Address </h5>
                <div className="card-body">
                  <input
                    type="radio"
                    name="selectedAddress"
                    value={result.cid}
                    onClick={() =>
                      handleRadioChange(              
                        result?.streetAddress ?? "",
                        result?.country ?? "",
                        result?.state ?? "",
                        result?.city ?? "",
                        result?.zipcode ?? ""
                      )
                    }
                  />
                  <h6 className="card-title">
                   
                    StreetAddress :- {result.streetAddress}{" "}
                  </h6>
                  <h6 className="card-title"> Country :- {result.country}</h6>
                  <h6 className="card-title"> State :- {result.state}</h6>
                  <h6 className="card-title"> City :- {result.city}</h6>
                  <h6 className="card-title"> Zipcode :- {result.zipcode}</h6>
                </div>
              </div>
                );
              })}
              </div>
      )}
          <button className="add-more-address" onClick={address}>
            Add More Address
          </button>
        </div>
      </div>
    </>
  );
}
export default BillingAddress;
