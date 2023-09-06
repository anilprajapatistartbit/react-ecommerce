import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams ,useNavigate } from 'react-router-dom';
const EditProduct = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    url: '',
    name: '',
    category: '',
    seller: '',
    price: '',
  });

  const { pid } = useParams();
  useEffect(() => {
    // Fetch the product details from the API when the component mounts
    axios
      .get(`https://localhost:7120/api/Registration/edit/${pid}`)
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
      .put(`https://localhost:7120/api/Registration/update/${pid}`,product)
      .then((response) => {
        console.log('Product updated:', response.data);
        alert("Product updated successfully")
        navigate("/Admin")
        // Redirect or display a success message
      })
      .catch((error) => {
        console.error('Error updating product:', error);
        // Handle the error, display an error message, or redirect to an error page
      });
  };

  return (
    <div className="MainDiv">
      <div className="container">
        <h3>Edit Product</h3>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label>Url:</label>
            <input
              type="text"
              name="url"
              value={product.url}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
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
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
