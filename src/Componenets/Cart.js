import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Checkout from "./Checkout";
function Cart({ cart }) {
  let [CART, setCART] = useState([]);
  useEffect(() => {
    setCART(cart);
  }, [cart]);

  const navigate = useNavigate();
  const checkout = () => {
    navigate('/Checkout');
   
  };
  return (
    <div class="container" style={{ maxWidth: "1300px", marginTop: "5%" ,marginBottom:'10%',background:'#f9f9f9'}}>
      <div class="row" style={{padding:'20px'}}>
        <div class="col-lg-9">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            {CART?.map((cartItem, cartIndex) => {
              return (
                <>
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <img src={cartItem.url} width={40}></img>
                      </td>
                      <td>{cartItem.name}</td>
                      <td>
                        <button
                          onClick={() => {
                            const _cart = CART.map((item, index) => {
                              return cartIndex === index
                                ? {
                                    ...item,
                                    quantity:
                                      item.quantity > 0 ? item.quantity - 1 : 0,
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
                                ? { ...item, quantity: item.quantity + 1 }
                                : item;
                            });
                            setCART(_cart);
                          }}
                        >
                          
                          +
                        </button>
                      </td>
                      <td>${(cartItem.price * cartItem.quantity).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                    </tr>
                  </tbody>
                </>
              );
            })}
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
                  {CART.map((item) => item.price * item.quantity).reduce(
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
              {/* <tr>
                <td>
                  <div>
                    <input
                      type="radio"
                      name="shippng"
                      className="custom-control-input"
                     value='standard'
                    />
              
                    <label
                      className="custom-control-label"
                     
                    >
                      Standard
                    </label>
                  </div>
                </td>
                <td>$10.00</td>
              </tr>

              <tr>
                <td>
                  <div>
                    <input
                      type="radio"
                      name="shippng"
                      className="custom-control-input"
                     
                    />
                    <label
                      className="custom-control-label"
                     
                    >
                      Express
                    </label>
                  </div>
                </td>
                <td>$20.00</td>
              </tr>*/}<hr></hr> 
              <tr class="summary-total"><td>Total :</td><td> $
                  {CART.map((item) => item.price * item.quantity).reduce(
                    (total, value) => total + value,
                    0
                  ).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td></tr>
            </table>
            <button className="btn btn-outline-primary"  onClick={() => checkout(checkout)}>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
