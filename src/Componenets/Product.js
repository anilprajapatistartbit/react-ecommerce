import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Product({ product, addtocart, singlepro }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(product);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    const filtered = product.filter((productItem) =>
      productItem.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page when the search term changes
  }, [searchTerm, product]);

  const pdetail = (productItem) => {
    navigate("/SingleProduct");
    singlepro(productItem);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (pageNumber) => {
    if (
      pageNumber >= 1 &&
      pageNumber <= Math.ceil(filteredProducts.length / productsPerPage)
    ) {
      setCurrentPage(pageNumber);
    }
  };

  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(filteredProducts.length / productsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }
  return (
    <>
      <div className="container" style={{ marginTop: "2%" }}>
       
        <div style={{ marginLeft: "40px" }}>
          <label>Search:</label>{" "}
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ marginBottom: "1rem", width: "26%" }}
          />
        </div>
        <div style={{marginLeft:'auto',marginRight:'auto',width:'1000px'}}>
        <div className="row">
        
          {currentProducts.map((productItem) => {
            return (
              <div
                className="card col-md-4"
                style={{ margin: "5px",padding:'0px',width:'32%',height:'450px'}}
                key={productItem.id}
              >
                <div className="card-image">
                  <img
                    src={productItem.url[0]}
                    width="100%"
                    height="300"
                    alt={productItem.name}
                  />
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
                  <button
                    style={{ float: "right", width: "30%" }}
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

        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Pre
          </button>
          {pageNumbers.map((pageNumber) => (
            <span
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={currentPage === pageNumber ? "active" : ""}
            >
              {pageNumber}
            </span>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={
              currentPage ===
              Math.ceil(filteredProducts.length / productsPerPage)
            }
          >
            Next
          </button>
        </div>
      </div>
     
    </>
  );
}

export default Product;
