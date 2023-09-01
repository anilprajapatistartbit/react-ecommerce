import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AddProduct() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    pid: 0,
    url: [],
    name: "",
    category: "",
    seller: "",
    price: "",
  });
  const [errors, seterrors] = useState({});
  
  const handleUrlChange = (e) => {
    const url = e.target.value.split(',');
    setFormData({ ...formData, url });
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    let isValid = true;
    e.preventDefault();
    const validationerror = {};
    // if (!formData.url.trim()) {
    //   validationerror.url = "url is required";
    //   isValid = false;
    // }
    if (!formData.name.trim()) {
      validationerror.name = "name is required";
      isValid = false;
    }
    if (!formData.category.trim()) {
      validationerror.category = "category is required";
      isValid = false;
    }
    if (!formData.seller.trim()) {
      validationerror.seller = "seller is required";
      isValid = false;
    }
    if (!formData.price.trim()) {
      validationerror.price = "price is required";
      isValid = false;
    }
  
    if (isValid) {
      try {
        console.log(formData);
        const response = axios.post(
          "https://localhost:7120/api/Registration/product",
          formData
        );
        toast.success('Product added successfully!');
        navigate("/Admin");
        console.log(response.data); // You can handle the response as needed
       
      } catch (error) {
        console.error("Error registering:", error);
        toast.error('Error adding product. Please try again.');
      }
    } else {
      seterrors(validationerror);
     
    }

  };
  return (
    <>
      <div className="container">
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="url" className="form-label">
              Url
            </label>
            <input
              type="text"
              id="form3Example1c"
              className={`form-control ${errors.url && "is-invalid"}`}
              name="url"
              value={formData.url.join(',')}
             onChange={handleUrlChange}
            />
             {errors.url && (
              <div className="invalid-feedback">{errors.url}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="form3Example1c"
              className={`form-control ${errors.name && "is-invalid"}`}
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
             {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>
          <div className="mb-3 ">
            <label className="form-label" htmlFor="category">
              Category
            </label>
            <input
              type="text"
              id="form3Example1c"
              className={`form-control ${errors.category && "is-invalid"}`}
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
             {errors.category && (
              <div className="invalid-feedback">{errors.category}</div>
            )}
          </div>
          <div className="mb-3 ">
            <label className="form-label" htmlFor="seller">
              Seller
            </label>
            <input
              type="text"
              id="form3Example1c"
              className={`form-control ${errors.seller && "is-invalid"}`}
              name="seller"
              value={formData.seller}
              onChange={handleChange}
            />
             {errors.seller && (
              <div className="invalid-feedback">{errors.seller}</div>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="price">
              Price
            </label>
            <input
              type="text"
              id="form3Example1c"
              className={`form-control ${errors.price && "is-invalid"}`}
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
             {errors.price && (
              <div className="invalid-feedback">{errors.price}</div>
            )}
          </div>
          <button type="submit"
            className="btn btn-primary btn-lg">
            Add
          </button>
        </form>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
     
    </>
  );
}
export default AddProduct;
