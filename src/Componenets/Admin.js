import React , { Component } from 'react';
import { useNavigate,Link  } from 'react-router-dom';
import 'jquery/dist/jquery.min.js';
import '../App.css';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 


import axios from 'axios';

 
class Admin extends Component {
  
  handleButtonClick = () => {
    const NavigateButton = () => {
      const navigate = useNavigate();
      return (<>
        <button
          style={{ marginBottom: '15px' }}
          onClick={() => navigate('/AddProduct')}
          className="btn btn-primary"
        >Add Product</button>
       </>
        
      );
    };

    // Render the NavigateButton component
    return <NavigateButton />;
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
 handleDelete = async (pid) => {
  try {
    console.log(pid)
    const response = await axios.delete(`https://localhost:7120/api/Registration/delete/${pid}`);
    console.log(response.data);
    alert("Delete successfully");
    // You can perform other actions after successful deletion here.
  } catch (error) {
    console.error("Error deleting:", error);
  }
};



  render(){
   
  return (
    <div className="MainDiv">
      <div class="jumbotron text-center">
          <h3>Product List</h3>
      </div>
       
      <div className="container">
      {this.handleButtonClick()}
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
              console.log("Deleting pid:", result.pid);
            return (
              
                 <tr key={result.pid}>
                 
                  <td>{result.name}</td>
                  <td>{result.category}</td>
                  <td>{result.seller}</td>
                  <td>{result.price}</td>
                  <td><button type='button'className="btn btn-danger"onClick={()=>this.handleDelete(result.pid)}>Delete</button>
                  <Link
                        to={`/EditProduct/${result.pid}`} // Use a dynamic URL parameter for the product ID
                        className="btn btn-primary"
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
}
export default Admin;