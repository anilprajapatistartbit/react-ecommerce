import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";

function OrderDetails() {
  const navigate = useNavigate();
  const { orderId } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    // Get all users details in bootstrap table
    axios
      .get(`https://localhost:7015/api/Orders/getorderdetails/${orderId}`)
      .then((response) => {
        console.log(response);
        var newarray = [];
        // response.data.map((item) => {
        //   var newitem = { ...item };
        //   newitem.url = JSON.parse(item.url);
        //   newarray.push(newitem);
        // });
        setData(response?.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <div>
        {/* mian-content */}
        <div className="main-banner inner" id="home"></div>
        {/*//main-content*/}
        {/**/}
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/MyOrder">MY ORDERS</Link>
          </li>
          <li className="breadcrumb-item active">ORDERS DETAILS</li>
        </ol>
        {/**/}
      </div>
      <div>
        <section className="login_box_area section_gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="row login_form_inner" style={{marginBottom:"150px"}}>
                <h1 className="logo-2 mb-lg-4 mb-3">
                <Link to="/Home" style={{float:"left",marginLeft:"60px"}}>
                  <span className="fa fa-bold" aria-hidden="true" />
                  ootie
                </Link>
              </h1>
          { data?.order &&  <>
                  <div className="col-md-5" style={{textAlign:"left",marginLeft:"60px",fontSize:"20px"}}>
                 
                    <p>OrderDate :-  {data?.order?.orderDate}</p>
                    <p>TransactionID:- {data?.order?.transactionID}</p>
                    <p>Total:- {data?.order?.total}</p>
                    <p>Currency:- {data?.order?.currency}</p>
                    <p>billingId:- {data?.order?.billingId}</p>
                  </div>
                  <div className="col-md-4" style={{textAlign:"left",marginLeft:"150px",fontSize:"20px"}}>
                    <p>FullName :- {data?.order?.billingAddress.fullname}</p>
                    <p>Email :- {data?.order?.billingAddress.email}</p>
                    <p>Address :- {data?.order?.billingAddress.address}</p>
                    <p>City :- {data?.order?.billingAddress.city}</p>
                    <p>State :- {data?.order?.billingAddress.state}</p>
                    <p>Zipcode :- {data?.order?.billingAddress.zip}</p>
                    </div>
                    </>}

                {data?.orderItems?.map((item,key)=>(
                <div>
                  <table  style={{background:'#f9f9f9',marginLeft:"80px",width:"80%"}} className="table table-hover" >
                  <thead>
                    <tr>
                     <th scope="col">Name</th>
                      <th scope="col">Category</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Seller</th>
                    </tr>
                  </thead>
                    <tbody>
                      <tr>
                        <td>
                        {item.product.name}
                        </td>
                        <td>
                        {item.product.category}
                        </td>
                        <td>
                        {item.price}
                        </td>
                        <td>
                        {item.quantity}
                        </td>
                        <td>
                        {item.product.seller}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                   <button className="payment-address" style={{marginTop:"30px",width:"90px"}}><Link to="/MyOrder" style={{color:"white"}}>Back</Link></button>
                   <button className="payment-address" style={{marginTop:"30px",marginLeft:"10px",width:"90px"}} onClick={handlePrint}>Print</button>
                  </div>
                  ))}

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default OrderDetails;
