import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TextInput from "../common/TextInput";
import "../assets/css/Checkout.css";
import { loadStripe } from "@stripe/stripe-js";
function BillingAddress() {

  const [formData, setFormData] = useState({
    cid: 0,
    fullname: "",
    email: "",
  });
  const handleRadioChange = (Address, country, state, city, zip) => {
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
    axios.get("https://localhost:7015/api/Address/Getall").then((res) => {
      // Storing users detail in state array object
      setData(res.data);
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
    // if (selectedAddress === null) {
    //   alert("Please select an address before submitting.");
    //   return;
    // }
    if (isValid) {
      try {
        console.log(formData);
        const response = await axios.post(
          "https://localhost:7015/api/BillingAddress/AddBilling",
          { ...formData }
        );

        const newCid = response.data;
        setFormData((prevData) => ({
          ...prevData,
          cid: newCid,
        }));
        localStorage.setItem("cid", newCid.toString());
        console.log("responessss", response.data); // You can handle the response as needed
        alert("billing sucessfully");

        //stripe payment api ----------------------------------------------
        const cart = JSON.parse(localStorage.getItem("cart"));

        console.log("carttttttt", cart);
        const paymentResponse = await axios.post(
          "https://localhost:7015/api/Payment/Payment",
          { items: cart, sum: 0 }
        );
        // Handle the payment response
        const clientSecret = response.data.clientSecret;
        console.log("Payment response:", paymentResponse);
        const paymentSessionUrl = paymentResponse.data;

        // Redirect the user to the payment page
        alert("Redirecting to payment page...");
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
      <div class="row">
        <div class="col-50">
          <div
            class="container"
            style={{
              background: "#f2f2f2",
              padding: "30px 30px 30px 30px",
              border: "1px solid lightgrey",
              marginBottom: "5%",
            }}
          >
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-50">
                  <h3>Billing Address</h3>
                  <TextInput
                    label={"Full Name"}
                    name="fullname"
                    placeholder="John M. Doe"
                    value={formData.fullname}
                    onChange={handleChange}
                    iconClass="fa fa-user"
                    error={formErrors.fullname}
                  />
                  <TextInput
                    label={"Email"}
                    name={"email"}
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    iconClass="fa fa-envelope"
                    error={formErrors.email}
                  />
                </div>
              </div>

              <input
                type="submit"
                value="submit"
                defaultValue="Continue to checkout"
                className="btn btn-outline-primary"
                style={{ width: "100%" }}
              />
            </form>
          </div>
        </div>
        <div class="col-50">
          {data.map((result) => {
            return (
              <div className="card">
                <h4 className="card-header">address </h4>
                <div className="card-body">
                  <input
                    type="radio"
                    name="selectedAddress"
                    className="custom-control-input"
                    value={result.cid}
                    onChange={() =>
                      handleRadioChange(
                        result?.streetAddress ?? "",
                        result?.country ?? "",
                        result?.state ?? "",
                        result?.city ?? "",
                        result?.zipcode ?? ""
                      )
                    }
                  />
                  <h5 className="card-title">
                    {" "}
                    StreetAddress :- {result.streetAddress}{" "}
                  </h5>
                  <h5 className="card-title"> Country :- {result.country}</h5>
                  <h5 className="card-title"> State :- {result.state}</h5>
                  <h5 className="card-title"> City :- {result.city}</h5>
                  <h5 className="card-title"> Zipcode :- {result.zipcode}</h5>
                </div>
              </div>
            );
          })}
          <button className="btn btn-outline-primary" onClick={address}>
            Add More Address
          </button>
        </div>
      </div>
    </>
  );
}
export default BillingAddress;
