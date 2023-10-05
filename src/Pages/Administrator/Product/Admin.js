
import React, { useState, useEffect } from 'react';
import { useNavigate,Link  } from 'react-router-dom';
import 'jquery/dist/jquery.min.js';
//import '.../App.css';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import Loader from "react-spinners/ClipLoader";

import axios from 'axios';

 
function Admin() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Get all users details in bootstrap table
    fetchData();
    // Initialize datatable
    setTimeout(function () {
      $('#example').DataTable();
    }, 1000);
  }, []);
  const fetchData = () => {
    setLoading(true); // Set loading to true when fetching data
    axios.get("https://localhost:7015/api/Product/Getall")
      .then(res => {
        setData(res.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false); // Set loading to false regardless of success or error
      });
  };
  const handleDelete = async (id) => {
    try {
      setLoading(true);
      const response = await axios.delete(`https://localhost:7015/api/Product/DeleteProduct/${id}`);
      console.log(response.data);
     
      alert("Delete successfully");
      fetchData();
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

  return (<>
    <div>
          {/* mian-content */}
          <div className="main-banner inner" id="home">
            
          </div>
         {/*//main-content*/}
          {/**/}
          <ol className="breadcrumb">
           <li className="breadcrumb-item">
              <a href="index.html">PRODUCT LIST</a>
           </li>
           
          </ol>
           {/**/}
         </div>
         {loading ? ( // Conditional rendering based on the loading state
        <div className="text-center">
          <Loader color="#007bff" loading={loading} size={50} /> {/* Render the loader */}
        </div>
      ) : (

    <div className="MainDiv" style={{marginTop:"40px",marginBottom:"40px"}}>
     

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
      )}
    </>  );
}

export default Admin;