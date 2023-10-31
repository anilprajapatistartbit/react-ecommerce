import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "react-spinners/ClipLoader";
import axios from "axios";
import DataTable from "react-data-table-component";
import Sidebar from "../../../common/Sidebar";
function Admin() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);

    const fetchData = () => {
      setLoading(true); // Set loading to true when fetching data
      axios
        .get("https://localhost:7015/api/Product/Getall")
        .then((res) => {
          setData(res.data);
          setfilterdata(res.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        })
        .finally(() => {
          setLoading(false); // Set loading to false regardless of success or error
        });
    };
 

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (isConfirmed) {
      try {
        setLoading(true);
        const response = await axios.delete(
          `https://localhost:7015/api/Product/DeleteProduct/${id}`
        );
        console.log(response.data);

        toast.success("Product Deleted successfully!");
        fetchData();
      } catch (error) {
        console.error("Error deleting:", error);
      }
    } else {
      setLoading(true);
      navigate("/Admin");
      fetchData();
    }
  };
  const [filterdata, setfilterdata] = useState([]);
  const customStyles = {
    headRow: {
      style: {
        backgroundColor: "#414b52",
        color: "white",
      },
    },
    headCells:{
      style:{
        fontSize:"13px",
        textTransform:"uppercase",
      },
    },
  };
  const ActionCell = ({ row  }) => {
    return (
      <div>
        <Link
          className="text-danger"
          style={{ fontSize: "20px" }}
          onClick={() => handleDelete(row.product.pid)}
        >
          <i class="fa fa-trash" aria-hidden="true"></i>
        </Link>
        <Link
          to={`/EditProduct/${row.product.pid}`} 
          className=" text-primary"
          style={{ marginLeft: "20px", fontSize: "18px" }}
        >
          <i class="far fa-edit"></i>
        </Link>
      </div>
    );
  };
  const column = [
    {
      name: "Name",
      selector: (row) => row.product.name,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.product.category,
      sortable: true,
    },
    {
      name: "Seller",
      selector: (row) => row.product.seller,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.product.price,
      sortable: true,
    },
    {
      name: "Action",
      cell: row => <ActionCell row={row} />
    },
  ];
  const handlefilter = (event) => {
    const newdata = filterdata.filter((row) =>
      row.product.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setData(newdata);
  };
  return (
    <>
      <div>
        {/* mian-content */}
        <div className="main-banner inner" id="home"></div>
        {/*//main-content*/}
        {/**/}
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
          
            <Link to="/Admin" >PRODUCT LIST</Link>
          </li>
        </ol>
        {/**/}
      </div>
      
      {/* {loading ? ( // Conditional rendering based on the loading state
        <div className="text-center">
          <Loader color="#007bff" loading={loading} size={50} />{" "}
         
        </div>
      ) : (
        <div
          className="MainDiv"
          style={{ marginTop: "40px", marginBottom: "40px" }}
        >
          <div className="container">
            <NavigateButton />
            <table id="example" className="table table-hover table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Seller</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((result) => {
                  return (
                    <tr key={result.product.pid}>
                      <td>{result.product.name}</td>
                      <td>{result.product.category}</td>
                      <td>{result.product.seller}</td>
                      <td>{result.product.price}</td>
                      <td>
                        <Link
                          className="text-danger"
                          style={{ fontSize: "20px" }}
                          onClick={() => handleDelete(result.product.pid)}
                        >
                          <i class="fa fa-trash" aria-hidden="true"></i>
                        </Link>

                        <Link
                          to={`/EditProduct/${result.product.pid}`} // Use a dynamic URL parameter for the product ID
                          className=" text-success"
                          style={{ marginLeft: "20px", fontSize: "20px" }}
                        >
                          <i class="far fa-edit"></i>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )} */}
       <div class="row">  

<Sidebar/>

<div class="col-md-9 col-lg-10">
      <div className="MainDiv" style={{ padding: "40px 4%" }}>
        {loading ? (
          <div className="text-center">
            <Loader color="#007bff" loading={loading} size={50} />
          </div>
        ) : (
          <div className="container">
            <div>
              <button
                style={{ float: "left" }}
                onClick={() => navigate("/AddProduct")}
                className="payment-address"
              >
                Add Product
              </button>
              <input
                type="text"
                placeholder="Search..."
                onChange={handlefilter}
                style={{
                  padding: "6px 10px",
                  float: "right",
                  marginBottom: "10px",
                }}
              ></input>
            </div>
            <DataTable
              columns={column}
              data={data}
              customStyles={customStyles}
              pagination
              selectableRows
            ></DataTable>
          </div>
        )}
      </div>
      </div>
      </div>
    </>
  );
}

export default Admin;
