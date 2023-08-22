import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Product({ product, addtocart, singlepro }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(product);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    const filtered = product.filter(productItem =>
      productItem.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, product]);

  const pdetail = (productItem) => {
    navigate('/SingleProduct');
    singlepro(productItem);
  };

  return (
    <>
      <div className="container" style={{ marginTop: "2%" }}>
        <div style={{marginLeft:"10px"}}>
        <label>Search:</label> <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginBottom: '1rem',width:'29%' }}
        />
        </div>
      
        <div className="flex">
          {filteredProducts.map((productItem) => {
            return (
              <div className="card" style={{ margin: "12px" }} key={productItem.id}>
                <div className="card-image">
                  <img src={productItem.url} width="100%" height="400" alt={productItem.name} />
                </div>
                <div className="card-body">
                  <p className="title product-title">
                    {productItem.name} | {productItem.category}
                  </p>
                  <div className="content">
                    {productItem.seller}
                    <br />
                  </div>
                  <button
                    onClick={() => addtocart(productItem)}
                    className="btn btn-primary"
                  >
                    Add To Cart
                  </button>
                  <button style={{ float: 'right', width: '30%' }}
                    onClick={() => pdetail(productItem)}
                    className="btn btn-primary"
                  >
                    View
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Product;