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
    name: "",
    category: "",
    seller: "",
    price: "",
    quantity:1,
    disciption:"",
    images:[]
  });
  const [errors, seterrors] = useState({});
  
  const handleImageChange = (e) => {
    const files = e.target.files;
    setFormData({ ...formData, images: files });
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
    const formDataToSend = new FormData();

    // Append all form data fields
    formDataToSend.append('pid', formData.pid);
    formDataToSend.append('name', formData.name);
    formDataToSend.append('category', formData.category);
    formDataToSend.append('seller', formData.seller);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('quantity', formData.quantity);
    formDataToSend.append('disciption', formData.disciption);
  
    // Append each selected image
    for (let i = 0; i < formData.images.length; i++) {
      formDataToSend.append('images', formData.images[i]);
    }

    const validationerror = {};
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
    // if (!formData.quantity.trim()) {
    //   validationerror.quantity = "quantity is required";
    //   isValid = false;
    // }
    if (!formData.disciption.trim()) {
      validationerror.disciption = "disciption is required";
      isValid = false;
    }
    //  if (!formData.images.trim()) {
    //   validationerror.images = "images is required";
    //    isValid = false;
    //  }
  
    if (isValid) {
      try {
        console.log(formData);
        const response = axios.post(
          "https://localhost:7015/api/Product",
          formDataToSend
        );
        alert('Product added successfully!');
        navigate("/Admin");
        toast.success('Product added successfully!');
      
        console.log(response.data); // You can handle the response as needed
       
      } catch (error) {
        console.error("Error registering:", error);
        toast.error('Error adding product. Please try again.');
      }
    } else {
      seterrors(validationerror);
     
    }

  };
  const pdetail = () => {
    navigate("/Admin");
  
  };
  return (
    <>
       <div>
       <div className="main-banner inner" id="home">
            
          </div>
         {/*//main-content*/}
          {/**/}
          <ol className="breadcrumb">
           <li className="breadcrumb-item">
              <a href="index.html">PRODUCT LIST</a>
           </li>
            <li className="breadcrumb-item active">ADD PRODUCT</li>
          </ol>
           {/**/}
         </div>
      <div className="container" style={{marginTop:"40px",marginBottom:"100px"}}>
        
        <form onSubmit={handleSubmit}>
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
          <div className="mb-3">
        <label className="form-label" htmlFor="category">
          Category
        </label>
        <select
          id="form3Example1c"
          className={`form-select ${errors.category && "is-invalid"}`}
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">--Select--</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
          {/* Add more options as needed */}
        </select>
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
          <div className="mb-3">
            <label className="form-label" htmlFor="price">
              Quantity
            </label>
            <input
              type="number"
              id="form3Example1c"
              className={`form-control ${errors.quantity && "is-invalid"}`}
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
            />
             {errors.quantity && (
              <div className="invalid-feedback">{errors.quantity}</div>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="price">
              Discription
            </label>
            <input
              type="text"
              id="form3Example1c"
              className={`form-control ${errors.disciption && "is-invalid"}`}
              name="disciption"
              value={formData.disciption}
              onChange={handleChange}
            />
             {errors.disciption && (
              <div className="invalid-feedback">{errors.disciption}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="url" className="form-label">
              Image
            </label>
            <input
              type="file"
              id="form3Example1c"
             className={`form-control ${errors.images && "is-invalid"}`}
              name="images"
              multiple // Allow multiple file selection
            onChange={handleImageChange} // Update the function name
            />
  {errors.images && (
    <div className="invalid-feedback">{errors.images}</div>
  )}
          </div>
          <button                
                   onClick={() => pdetail(pdetail)}
                    className="payment-address"
                    style={{ width: "135px",float:"right" }}
                  >Back</button>
          <button type="submit"
            className="payment-address" style={{ width: "135px",float:"right" ,marginRight:"10px"}}>
            Add
          </button>
        
        </form>
       
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
export default AddProduct;
