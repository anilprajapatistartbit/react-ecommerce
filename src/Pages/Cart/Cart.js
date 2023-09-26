import React, { useEffect, useState } from "react";
import { useNavigate} from 'react-router-dom';
import Checkout from "../../Componenets/BillingAddress";
import empty from "../../assets/images/empty.png";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
function Cart({ cart }) {
  
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);
  let [CART, setCART] = useState([]);
  
  useEffect(() => {
   // const storedCart = JSON.parse(localStorage.getItem(cart)) || [];
    setCART(cart);
  }, [cart]);

  useEffect(() => {
   const payload=localStorage.setItem("cart",JSON.stringify(CART)) ;
  }, [CART]);
  
   
  const navigate = useNavigate();
  const removeFromCart = (cartIndex) => {
    const updatedCart = CART.filter((_, index) => index !== cartIndex);
    setCART(updatedCart);
  };

  
  
  
  const makePayment = async () => {
   // try {
      // Send cart data to the ASP.NET backend for payment processing
     // const response = await axios.post("https://localhost:7015/api/Payment/Payment", { items: CART ,sum:0});
    
      // The response contains the PaymentIntent client secret
     // const clientSecret = response.data.clientSecret;

    //  const paymentSessionUrl = response.data;
      // Redirect the user to the Stripe payment page
      const storedCart = JSON.parse(localStorage.getItem("cart"));
      if (storedCart && storedCart.length > 0) {   
        navigate("/BillingAddress");
      } else { 
        alert("Your cart is empty.");
      }
    //  window.location.href = paymentSessionUrl;
      
   // } catch (error) {
   //   console.error("Error processing payment:", error);
  //  }
  };
  

  return (
    <div class="container" style={{ maxWidth: "1300px", marginTop: "5%" ,marginBottom:'10%',background:'#f9f9f9'}}>
      <div class="row" style={{padding:'20px'}}>
      <div className="col-lg-9">
  <table className="table table-hover">
    <thead>
      <tr>
        <th scope="col">Product</th>
        <th scope="col">Name</th>
        <th scope="col">Quantity</th>
        <th scope="col">Price</th>
        <th scope="col"></th>
      </tr>
    </thead>
    {CART?.length === 0 ? (
      
        
        <img src={empty} height="auto" style={{float:'right'}}/>
      
    
    ) : (
      CART.map((cartItem, cartIndex) => (
        <tbody key={cartIndex}>
          <tr>
            <td>
              <img //src={cartItem.url[0]}
              src={`https://localhost:7015/images/${
                cartItem?.images[0]?.url
      }`}
              width={40} alt="Product" />
            </td>
            <td>{cartItem.product.name}</td>
            <td>
              <button
                onClick={() => {
                  const _cart = CART.map((item, index) => {
                    return cartIndex === index
                      ? {
                          ...item,
                          quantity: item.product.quantity > 1 ? item.product.quantity - 1 : 1,
                        }
                      : item;
                  });
                  setCART(_cart);
                }}
              >
                -
              </button>
              {cartItem.quantity}
              <button
                onClick={() => {
                  const _cart = CART.map((item, index) => {
                    return cartIndex === index
                      ? { ...item, quantity :item.quantity + 1 }
                      : item;
                  });
                  setCART(_cart);
                }}
              >
                +
              </button>
            </td>
            <td>
              ${(cartItem.product.price * cartItem.product.quantity).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </td>
            <td>
              <i
                className="fas fa-trash-alt remove"
                onClick={() => removeFromCart(cartIndex)}
              ></i>
            </td>
          </tr>
        </tbody>
      ))
    )}
  </table>
</div>

        <div class="col-lg-3">
          <div class="card" style={{padding:'20px'}}>
            <h6>Cart Total</h6>
            <hr></hr>
            <table>
              <tr>
                <td>Sub Total :</td>
                <td>
                  $
                  {CART.map((item) => item.product.price * item.product.quantity).reduce(
                    (total, value) => total + value,
                    0
                  ).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>
                
              </tr> <hr></hr>
              <tr>
                <td>Shippng :</td>
                <td></td>
              </tr><br/>
              <tr>
                <td>
                  <div>
                    <input
                      type="radio"
                      name="shippng"
                      className="custom-control-input"
                      defaultChecked
                    />
                    <label
                      className="custom-control-label"
                      
                    >
                      Free Shipping
                    </label>
                  </div>
                </td>
                <td>$0.00</td>
              </tr>
              
              <tr class="summary-total"><td>Total :</td><td> $
                  {CART.map((item) => item.product.price * item.quantity).reduce(
                    (total, value) => total + value,
                    0
                  ).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td></tr>
            </table>
             <button className="btn btn-outline-primary"  onClick={makePayment}>PROCEED TO CHECKOUT</button> 
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
