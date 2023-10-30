import React, { useEffect, useState } from "react";
import { useNavigate ,Link} from "react-router-dom";
import Checkout from "../BillingAddress/BillingAddress";
import empty from "../../assets/images/empty.png";
import cart1 from "../../assets/images/cart.jpg";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import "../../App.css";
function Cart({ cart }) {
  const [CART, setCART] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    // Initialize the local state CART with the cart prop
    setCART(cart);
  }, [cart]);

  useEffect(() => {
    // Save the CART state to localStorage whenever it changes
    localStorage.setItem("cart", JSON.stringify(CART));
  }, [CART]);

  const removeFromCart = (cartIndex) => {
    const updatedCart = [...CART];
    updatedCart.splice(cartIndex, 1);
    setCART(updatedCart);

    // Remove the item from local storage as well
    const updatedLocalStorageCart =
      JSON.parse(localStorage.getItem("cart")) || [];
    updatedLocalStorageCart.splice(cartIndex, 1);
    localStorage.setItem("cart", JSON.stringify(updatedLocalStorageCart));
  };

  const increaseQuantity = (cartIndex) => {
    const updatedCart = [...CART];
    updatedCart[cartIndex].product.quantity++;
    setCART(updatedCart);
  };

  const decreaseQuantity = (cartIndex) => {
    const updatedCart = [...CART];
    if (updatedCart[cartIndex].product.quantity > 1) {
      updatedCart[cartIndex].product.quantity--;
      setCART(updatedCart);
    }
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
  const pdetail = () => {
    navigate("/Product");
  
  };
  //   return (<>

  //       <div>
  //         {/* mian-content */}
  //         <div className="main-banner inner" id="home">

  //         </div>
  //         {/*//main-content*/}
  //         {/**/}
  //         <ol className="breadcrumb">
  //           <li className="breadcrumb-item">
  //             <a href="index.html">Home</a>
  //           </li>
  //           <li className="breadcrumb-item active">CART </li>
  //         </ol>
  //         {/**/}
  //       </div>

  //     <div class="container" style={{ maxWidth: "1300px", marginTop: "5%" ,marginBottom:'10%',background:'#f9f9f9'}}>
  //       <div class="row" style={{padding:'20px'}}>
  //       <div className="col-lg-9">
  //   <table className="table table-hover">
  //     <thead>
  //       <tr>
  //         <th scope="col">Product</th>
  //         <th scope="col">Name</th>
  //         <th scope="col">Quantity</th>
  //         <th scope="col">Price</th>
  //         <th scope="col"></th>
  //       </tr>
  //     </thead>
  //     {CART?.length === 0 ? (

  //       <img src={empty} height="auto" style={{float:'right'}}/>

  //     ) : (
  //       CART.map((cartItem, cartIndex) => (
  //         <tbody key={cartIndex}>
  //           <tr>
  //             <td>
  //               <img //src={cartItem.url[0]}
  //               src={`https://localhost:7015/images/${
  //                 cartItem?.images[0]?.url
  //       }`}
  //               width={40} alt="Product" />
  //             </td>

  //             <td>{cartItem.product.name}</td>
  //             <td>

  //               <button onClick={() => decreaseQuantity(cartIndex)}>-</button>
  //               {cartItem.product.quantity}
  //               <button onClick={() => increaseQuantity(cartIndex)}>+</button>

  //               {/* <button
  //                 onClick={() => {
  //                   const _cart = CART.map((item, index) => {
  //                     return cartIndex === index
  //                       ? {
  //                           ...item,
  //                           quantity: item.quantity > 1 ? item.quantity - 1 : 1,
  //                         }
  //                       : item;
  //                   });
  //                   setCART(_cart);
  //                 }}
  //               >
  //                 -
  //               </button>
  //               {cartItem.product.quantity}
  //               <button
  //                 onClick={() => {
  //                   const _cart = CART.map((item, index) => {
  //                     return cartIndex === index
  //                       ? { ...item, quantity :item.quantity + 1 }
  //                       : item;
  //                   });
  //                   setCART(_cart);
  //                 }}
  //               >
  //                 +
  //               </button> */}
  //             </td>
  //             <td>
  //               ${(cartItem.product.price * cartItem.product.quantity).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
  //             </td>

  //             <td>
  //               <i
  //                 className="fas fa-trash-alt remove"
  //                 onClick={() => removeFromCart(cartIndex)}
  //               ></i>
  //             </td>
  //           </tr>
  //         </tbody>
  //       ))
  //     )}
  //   </table>
  // </div>

  //         <div class="col-lg-3">
  //           <div class="card" style={{padding:'20px'}}>
  //             <h6>Cart Total</h6>
  //             <hr></hr>
  //             <table>
  //               <tr>
  //                 <td>Sub Total :</td>
  //                 <td>
  //                   $
  //                   {CART.map((item) => item.product.price * item.product.quantity).reduce(
  //                     (total, value) => total + value,
  //                     0
  //                   ).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
  //                 </td>

  //               </tr> <hr></hr>
  //               <tr>
  //                 <td>Shippng :</td>
  //                 <td></td>
  //               </tr><br/>
  //               <tr>
  //                 <td>
  //                   <div>
  //                     <input
  //                       type="radio"
  //                       name="shippng"
  //                       className="custom-control-input"
  //                       defaultChecked
  //                     />
  //                     <label
  //                       className="custom-control-label"

  //                     >
  //                       Free Shipping
  //                     </label>
  //                   </div>
  //                 </td>
  //                 <td>$0.00</td>
  //               </tr>

  //               <tr class="summary-total"><td>Total :</td><td> $
  //                   {CART.map((item) => item.product.price * item.product.quantity).reduce(
  //                     (total, value) => total + value,
  //                     0
  //                   ).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td></tr>
  //             </table>
  //              <button className="btn btn-outline-primary"  onClick={makePayment}>PROCEED TO CHECKOUT</button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     </>
  //   );

  return (
    <>
      {" "}
      <div>
        {/* mian-content */}
        <div className="main-banner inner" id="home"></div>
        {/*//main-content*/}
        {/**/}
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/Home" >HOME</Link>
          </li>
          <li className="breadcrumb-item active">CART </li>
        </ol>
        {/**/}
      </div>
      <section className="cart_area" >
        <div className="container">
          <div className="cart_inner">
            <div className="table-responsive">
              <table className="table">
              <>  <thead style={{background:"#414b52",color:"white"}}>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total</th>
                      <th scope="col">Remove</th>
                    </tr>
                  </thead>
                {CART?.length === 0 ? (
                  <img src={empty} height="auto" style={{ float:"right"}} />
                ) : (
                  CART.map((cartItem, cartIndex) => (
                  
                    <tbody>
                      <tr>
                        <td>
                          <div className="media">
                            <div className="d-flex">
                              <img //src={cartItem.url[0]}
                                src={`https://localhost:7015/images/${cartItem?.images[0]?.url}`}
                                width={100}
                                alt="Product"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="media-body">
                            <p>{cartItem.product.name}</p>
                          </div>
                        </td>
                        <td>
                          ${cartItem.product.price}
                        </td>
                        <td>
                          <button onClick={() => decreaseQuantity(cartIndex)}>
                            -
                          </button>
                          <span> {cartItem.product.quantity} </span>
                          <button onClick={() => increaseQuantity(cartIndex)}>
                            +
                          </button>
                        </td>
                        <td>
                          $
                          {(
                            cartItem.product.price * cartItem.product.quantity
                          ).toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
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
                </>
              </table>

              <table className="table">
                        <tbody>
                        <tr>
                       
                        <td style={{border:"none"}}> 
                           <div style={{ float: 'right' }}>
                          
                                 <h6> SubTotal  : </h6>
                          </div>
                        </td>
                        <td style={{width:'245px',border:"none"}}>                                                                   
                         <h6 style={{marginleft:'90px'}}> ${CART.map((item) => item.product.price * item.product.quantity).reduce(
                     (total, value) => total + value,
                   0
                   ).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h6>                         
                        </td>
                        </tr>
                        <tr>                      
                        <td>
                          <h6 style={{ float: 'right' }}>Shipping :</h6>
                        </td>
                        <td>
                           <div style={{marginleft:"90PX"}}>                            
                          <input
                            type="radio"
                            name="shipping"
                            defaultChecked
                          /> Free Shipping                           
                          </div>
                        </td>
                        </tr>
                        <tr>
                        <td >
                          <div style={{ float: 'right' }}>
                           
                            <button className="gray_btn" onClick={pdetail}>Continue Shopping</button>                       
                          </div>
                        </td>
                        <td>                         
                            <button className="gray_btn" onClick={makePayment}>Proceed to checkout</button>                         
                        </td>
                    </tr>
                        </tbody>
                        </table>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Cart;
