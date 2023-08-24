import '../Componenets/Checkout.css';
function Checkout() {
  return (
    <>
      <div class="row">
        <div class="col-75">
          <div class="container" style={{background:'#f2f2f2',padding:'30px 30px 30px 30px',border:'1px solid lightgrey',marginBottom:'5%'}}>
          <form>
        <div className="row">
          <div className="col-50">
            <h3>Billing Address</h3>
            <label htmlFor="fname"><i className="fa fa-user" /> Full Name</label>
            <input type="text" id="fname" name="firstname" placeholder="John M. Doe" className='cform'/>
            <label htmlFor="email"><i className="fa fa-envelope" /> Email</label>
            <input type="text" id="email" name="email" placeholder="john@example.com" className='cform'/>
            <label htmlFor="adr"><i className="fa fa-address-card-o" /> Address</label>
            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" className='cform'/>
            <label htmlFor="city"><i className="fa fa-institution" /> City</label>
            <input type="text" id="city" name="city" placeholder="New York" className='cform'/>
            <div className="row">
              <div className="col-50">
                <label htmlFor="state">State</label>
                <input type="text" id="state" name="state" placeholder="NY" className='cform'/>
              </div>
              <div className="col-50">
                <label htmlFor="zip">Zip</label>
                <input type="text" id="zip" name="zip" placeholder={10001} className='cform'/>
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
            <input type="text" id="cname" name="cardname" placeholder="John More Doe" className='cform'/>
            <label htmlFor="ccnum">Credit card number</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" className='cform'/>
            <label htmlFor="expmonth">Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="September" className='cform'/>
            <div className="row">
              <div className="col-50">
                <label htmlFor="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder={2018} className='cform'/>
              </div>
              <div className="col-50">
                <label htmlFor="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder={352} className='cform'/>
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
