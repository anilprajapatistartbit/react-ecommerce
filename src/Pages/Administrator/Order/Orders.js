import React, { useState, useEffect } from 'react';
import { useNavigate,Link  } from 'react-router-dom';
import 'jquery/dist/jquery.min.js';
//import '.../App.css';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 


import axios from 'axios';

 
function Orders() {
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
  return (
    <div className="MainDiv">
      <div className="jumbotron text-center">
        <h3>Order List</h3>
      </div>

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
    </div>
  );
}

export default Orders;