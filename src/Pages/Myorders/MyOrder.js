import React, { useState, useEffect } from 'react';
import { useNavigate,Link  } from 'react-router-dom';
import 'jquery/dist/jquery.min.js';
//import '.../App.css';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import axios from 'axios';

 
function MyOrder() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const userLoginId =   localStorage.getItem("email")
  useEffect(() => {
    // Get all users details in bootstrap table
    axios.get(`https://localhost:7015/api/Orders/Getall?userId=${userLoginId}`)
      .then(res => {
        // Storing users detail in state array object
        setData(res.data);
      });
    
    // Initialize datatable
    setTimeout(function () {
      $('#example').DataTable();
    }, 1000);
  }, []);

  const handleViewOrder = (orderId) => {
    // Navigate to the OrderDetails page with the orderId as a URL parameter
    navigate(`/OrderDetails/${orderId}`);
  };
  return (<>
  <div>
          {/* mian-content */}
          <div className="main-banner inner" id="home">
            
          </div>
         {/*//main-content*/}
          {/**/}
          <ol className="breadcrumb">
           <li className="breadcrumb-item">
              <a href="index.html">My Orders</a>
           </li>
           
          </ol>
           {/**/}
         </div>
      <section className="cart_area" >
        <div className="container">
          <div className="cart_inner">
            <div className="table-responsive">
              <table className="table" style={{background:'#f9f9f9'}}>
              <>  <thead>
                    <tr>
                    <th scope="col">OrderId</th>
                      {/* <th scope="col">UserId</th> */}
                      <th scope="col">OrderDate</th>
                      <th scope="col">TransactionID</th>
                      <th scope="col">Total</th>
                      <th scope="col">Currency</th>
                      <th scope="col">View</th>
                    </tr>
                  </thead>
                    <tbody>
                    {data.map((result) => {
             
             return (
                      <tr>
                         <td>
                        <div className="d-flex">
                            {result.id}
                          </div>
                        </td>
                        {/* <td>
                        <div className="d-flex">
                            {result.userId}
                          </div>
                        </td> */}
                        <td>
                          <div className="media-body">
                         {result.orderDate}
                          </div>
                        </td> 
                        <td>
                          <div className="media-body">
                         {result.transactionID}
                          </div>
                        </td>  
                        <td>
                          <div className="media-body">
                          {result.total}
                          </div>
                        </td>  
                        <td>
                          <div className="media-body">
                         {result.currency}
                          </div>
                        </td>  
                        <td>
                          <div className="media-body">
                          <button onClick={() => handleViewOrder(result.id)}>View</button>
                          </div>
                        </td>        
                      </tr>
                       )
                      })}                   
                    </tbody>                                 
                </>
              </table>
              </div>
              </div>
              </div>
        </section>
 
    {/* <div className="MainDiv"style={{marginTop:"40px",marginBottom:"40px"}}>
      
      <div className="container">
      
        <table id="example" className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>UserId</th>
              <th>OrderDate</th>
              <th>TransactionID</th>
              <th>Total</th>
              <th>Currency</th>
              
            </tr>
          </thead>
          <tbody>
            {data.map((result) => {
             
              return (
                <tr key={result.id}>
                    <td>{result.userId}</td>
                    <td>{result.orderDate}</td>
                    <td>{result.transactionID}</td>
                    <td>{result.total}</td>
                   <td>{result.currency}</td>       
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div> */}
    </> );
}

export default MyOrder;