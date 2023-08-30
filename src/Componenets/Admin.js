import React , { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import 'jquery/dist/jquery.min.js';
import '../App.css';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 


import axios from 'axios';
import Product from './Product';
 
class Admin extends Component {
  
  handleButtonClick = () => {
    // Use the history object to navigate to another route
    useNavigate("/AddProduct");
  };
  // State array variable to save and show data
  constructor(props) {
    super(props)
      this.state = {
        data: [],
        
      }}
  componentDidMount() {
       //Get all users details in bootstrap table
       axios.get("https://localhost:7120/api/Registration/getall").then(res => 
        {
          //Storing users detail in state array object
          this.setState({data: res.data});
         
        }); 
    //initialize datatable
    $(document).ready(function () {
        setTimeout(function(){
        $('#example').DataTable();
         } ,1000);
    });
 }
 handleDelete = (id) => {
  try {
   
    const response = axios.delete(`https://localhost:7120/api/Registration/delete/${id}`);
    console.log(response.data);
    alert("Delete sucessfully");
   // navigate("/Admin");
   
  } catch (error) {
    console.error("Error registering:", error);
  }

};

  render(){
   
   
   
  return (
    <div className="MainDiv">
      <div class="jumbotron text-center">
          <h3>Product List</h3>
      </div>
       
      <div className="container">
      <button style={{marginBottom:'15px'}} onClick={this.handleButtonClick}
                    className="btn btn-primary">Add Product</button>
          <table id="example" class="table table-hover table-bordered">
          <thead>
            <tr>
             
              <th>Name</th>
              <th>Category</th>
              <th>Seller</th>
              <th>productItem</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {this.state.data.map((result) => {
            return (
              
                 <tr key={result.pid}>
                 
                  <td>{result.name}</td>
                  <td>{result.category}</td>
                  <td>{result.seller}</td>
                  <td>{result.price}</td>
                  <td><button type='button'className="btn btn-danger"onClick={()=>this.handleDelete(result.pid)}>Delete</button></td>
                </tr>
              
            )
          })}
                        
          </tbody>
        </table>
           
        </div>
      </div>
  );
 }
}
export default Admin;