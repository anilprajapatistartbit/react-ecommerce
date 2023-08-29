import React , { Component } from 'react';
import 'jquery/dist/jquery.min.js';
import '../App.css';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 


import axios from 'axios';
 
class Admin extends Component {
 
  // State array variable to save and show data
  constructor(props) {
    super(props)
      this.state = {
        data: [],
        
      }}
  componentDidMount() {
       //Get all users details in bootstrap table
       axios.get("http://localhost:5015/api/Home").then(res => 
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
  render(){
    //Datatable HTML
  return (
    <div className="MainDiv">
      <div class="jumbotron text-center">
          <h3>Product List</h3>
      </div>
       
      <div className="container">
           
          <table id="example" class="table table-hover table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Seller</th>
              <th>productItem</th>
            </tr>
          </thead>
          <tbody>
          {this.state.data.map((result) => {
            return (
              
                 <tr>
                  <td>{result.id}</td>
                  <td>{result.name}</td>
                  <td>{result.category}</td>
                  <td>{result.seller}</td>
                  <td>{result.price}</td>
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