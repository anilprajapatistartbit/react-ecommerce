import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams ,useNavigate ,Link} from 'react-router-dom';
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
  // const handleImageChange = (e) => {
  //   const files = e.target.files;
  //   setProduct({ ...product, images: files });
  // };

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

  const [validationErrors, setValidationErrors] = useState({}); // State for validation errors

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isConfirmed = window.confirm("Are you sure you want to update this product?");
    const errors = {}; // Initialize an empty errors object
    if (!product.name) {
      errors.name = "Name is required";
    }
    if (!product.category) {
      errors.category = "Category is required";
    }
    if (!product.seller) {
      errors.seller = "Seller is required";
    }
    if (!product.price) {
      errors.price = "Price is required";
    }
    if (!product.quantity) {
      errors.quantity = "Quantity is required";
    }
    if (!product.disciption) {
      errors.disciption = "Description is required";
    }
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
    } else {
  if (isConfirmed) {
    axios
      .put(`https://localhost:7015/api/Product/UpdateProduct/${pid}`,product)
      .then((response) => {
        console.log('Product updated:', response.data);
        toast.success('Product updated successfully!');
        navigate("/Admin");
        // Redirect or display a success message
      })
      .catch((error) => {
        console.error('Error updating product:', error);
        // Handle the error, display an error message, or redirect to an error page
      });
    }else{
      navigate("/Admin");
    }
  }
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
             
              <Link to="/Admin" >PRODUCT LIST</Link>
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
             {validationErrors.name && (
            <div className="text-danger">{validationErrors.name}</div>
          )}
          </div>
          <div className="form-group">
          <label className="form-label" htmlFor="category">
          Category
        </label>
        <select
          id="form3Example1c"
          className="form-select"
          name="category"
          value={product.category}
          onChange={handleInputChange}
        >
          <option value="">--Select--</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
          {/* Add more options as needed */}
        </select>
        {validationErrors.category && (
            <div className="text-danger">{validationErrors.category}</div>
          )}
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
             {validationErrors.seller && (
            <div className="text-danger">{validationErrors.seller}</div>
          )}
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
             {validationErrors.price && (
            <div className="text-danger">{validationErrors.price}</div>
          )}
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
             {validationErrors.quantity && (
            <div className="text-danger">{validationErrors.quantity}</div>
          )}
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
             {validationErrors.disciption && (
            <div className="text-danger">{validationErrors.disciption}</div>
          )}
          </div>
          {/* <div className="form-group">
            <label>Images:</label>
          <input
           className="form-control"
              type="file"
              value={product.images}
              name="images"
              multiple // Allow multiple file selection
            onChange={handleImageChange} // Update the function name
            /></div> */}
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
