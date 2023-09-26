
import React, { useState, useEffect } from 'react';
import { useNavigate,Link  } from 'react-router-dom';
import 'jquery/dist/jquery.min.js';
//import '.../App.css';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 


import axios from 'axios';

 
function Admin() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    // Get all users details in bootstrap table
    axios.get("https://localhost:7015/api/Product/Getall")
      .then(res => {
        // Storing users detail in state array object
        setData(res.data);
      });
    
    // Initialize datatable
    setTimeout(function () {
      $('#example').DataTable();
    }, 1000);
  }, []);

  const handleDelete = async (id) => {
    try {
      console.log(id);
      const response = await axios.delete(`https://localhost:7015/api/Product/DeleteProduct/${id}`);
      console.log(response.data);
      alert("Delete successfully");
     
      // You can perform other actions after successful deletion here.
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

  const NavigateButton = () => {
    return (
      <>
        <button
          style={{ marginBottom: '15px' }}
          onClick={() => navigate('/AddProduct')}
          className="btn btn-primary"
        >
          Add Product
        </button>
      </>
    );
  };

  return (
    <div className="MainDiv">
      <div className="jumbotron text-center">
        <h3>Product List</h3>
      </div>

      <div className="container">
        <NavigateButton />
        <table id="example" className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Seller</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((result) => {
        
              return (
                <tr key={result.product.pid}>
                 
                  <td>{result.product.name}</td>
                  <td>{result.product.category}</td>
                  <td>{result.product.seller}</td>
                  <td>{result.product.price}</td>
                  <td>
                    <button type='button' className="btn btn-danger" onClick={() => handleDelete(result.product.pid)}>Delete</button>
                    
                    <Link
                      to={`/EditProduct/${result.product.pid}`} // Use a dynamic URL parameter for the product ID
                      className="btn btn-success"
                      style={{marginLeft:'20px',width:'70px'}}
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;