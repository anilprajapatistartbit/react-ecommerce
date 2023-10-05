import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams ,useNavigate } from 'react-router-dom';
const EditProduct = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    category: '',
    seller: '',
    price: '',
    quantity:0,
    disciption:"",
   // images:[]
  });

  const { pid } = useParams();
  useEffect(() => {
    // Fetch the product details from the API when the component mounts
    axios
      .get(`https://localhost:7015/api/Product/EditProduct/${pid}`)
      .then((response) => {
        const data = response.data;
        console.log("data :-",data)
        setProduct({ ...data });
      })
      .catch((error) => {
        console.error('Error fetching product:', error);
        // Handle the error, display an error message, or redirect to an error page
      });
  }, [pid]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   

    // Make a PUT request to update the product details using Axios and the pid
    axios
      .put(`https://localhost:7015/api/Product/UpdateProduct/${pid}`,product)
      .then((response) => {
        console.log('Product updated:', response.data);
        alert("Product updated successfully")
        navigate("/Admin");
        // Redirect or display a success message
      })
      .catch((error) => {
        console.error('Error updating product:', error);
        // Handle the error, display an error message, or redirect to an error page
      });
  };
  const pdetail = () => {
    navigate("/Admin");
  
  };
  return (<>
      <div>
       <div className="main-banner inner" id="home">
            
          </div>
         {/*//main-content*/}
          {/**/}
          <ol className="breadcrumb">
           <li className="breadcrumb-item">
              <a href="index.html">PRODUCT LIST</a>
           </li>
            <li className="breadcrumb-item active">UPDATE PRODUCT</li>
          </ol>
           {/**/}
         </div>


    <div className="MainDiv" style={{marginTop:"40px",marginBottom:"100px"}}>
      <div className="container">
       
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Category:</label>
            <input
              type="text"
              name="category"
              value={product.category}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Seller:</label>
            <input
              type="text"
              name="seller"
              value={product.seller}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Price:</label>
            <input
              type="text"
              name="price"
              value={product.price}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Quantity:</label>
            <input
              type="number"
              name="quantity"
              value={product.quantity}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Discription:</label>
            <input
              type="text"
              name="disciption"
              value={product.disciption}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <button                
                   onClick={() => pdetail(pdetail)}
                    className="payment-address"
                    style={{ width: "135px",float:"right" }}
                  >Back</button>
          <button type="submit"  className="payment-address" style={{ width: "135px",float:"right" ,marginRight:"10px"}}>
            Update
          </button>
        </form>
      </div>
    </div>
  </>
  );
};

export default EditProduct;
