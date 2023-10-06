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
                <div className="row login_form_inner">
                <h3 className="logo-2 mb-lg-4 mb-3">
                <Link to="/Home">
                  <span className="fa fa-bold" aria-hidden="true" />
                  ootie
                </Link>
              </h3>
          { data?.order &&  <>
                  <div className="col-md-6">
                 
                    <p>OrderDate:-  {data?.order?.orderDate}</p>
                    <p>TransactionID:- {data?.order?.transactionID}</p>
                    <p>Total:- {data?.order?.total}</p>
                    <p>Currency:- {data?.order?.currency}</p>
                    <p>billingId:- {data?.order?.billingId}</p>
                  </div>
                  <div className="col-md-6">
                    <p>{data?.order?.billingAddress.fullname}</p>
                    <p>{data?.order?.billingAddress.email}</p>
                    <p>{data?.order?.billingAddress.address}</p>
                    <p>{data?.order?.billingAddress.city}</p>
                    <p>{data?.order?.billingAddress.state}</p>
                    <p>{data?.order?.billingAddress.zip}</p>
                    </div>
                    </>}

                {/* {data?.orderItems?.map((item,key)=>(
                <div>
                  <table  style={{background:'#f9f9f9'}}>
                    <tbody>
                      <tr>
                        <td>
                        {item.name}
                        </td>
                        <td>
                        {item.category}
                        </td>
                        <td>
                        {item.seller}
                        </td>
                        <td>
                        {item.price}
                        </td>
                        <td>
                        {item.quantity}
                        </td>
                        <td>
                        {item.disciption}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                   
                  </div>
                  ))} */}

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
