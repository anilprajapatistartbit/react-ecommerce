import React from 'react';
import { useEffect,useState } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { Navigate, useNavigate } from "react-router-dom";
function Success() {
  const [stripeSessionId, setStripeSessionId] = useState(null);

  const handle = (session) => {
    setStripeSessionId(session.id);
    console.log("sessionid",stripeSessionId)
  };
    const navigate = useNavigate();
    const fetchDataAndSendToAPI = async () => {
      try {
        const cart = JSON.parse(localStorage.getItem("cart"));
        //send data
        let fitereddate= [];
        cart?.forEach(element => {
        const img = element.images.filter((el)=>el.productId==element.product.pid)
        fitereddate.push({...element.product,images:img})
        });

        var BillingId = localStorage.getItem("cid");

        var user = localStorage.getItem("email")
        //console.log(JSON.parse(cart));
        // for (let index = 0; index < cart.length; index++) {
        // cart[index].url = "";
        
          
        // }
        var session_id = window.location.search.split("=")[1]
        console.log(user);
        const response = await axios.post(`https://localhost:7015/api/Payment/success/${session_id}`,{ items: fitereddate,userId:user,BillingId:BillingId});
        console.log(response);
        
      } catch (error) {
        console.error("Error processing payment:", error);
      }
    };
    useEffect(() => {
     
      if (window.location.pathname.toLowerCase()=="/success") {
        fetchDataAndSendToAPI();
      }
     
    }, []); 




    const pdetail = () => {
        navigate("/Home");
      
      };      
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
              <a href="index.html">ThankYou</a>
           </li>
            
          </ol>
           {/**/}
         </div>
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <div>
            <div className="mb-4 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-success" width={75} height={75} fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
            </div>
            <div className="text-center">
              <h1>Thank You !</h1>
              <p> We received your purchase request;
                  we'll be in touch shortly!</p>
              <button
                   
                    onClick={pdetail}
                    className="btn btn-warning  btn"
                  >Continue to Shoppping</button>
            </div>
          </div>
        </div>
       
      </div>
    );
  }
  
  export default Success;