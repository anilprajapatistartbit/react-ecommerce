import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import axios from "axios";

function Orders() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
 
  useEffect(() => {
    axios.get("https://localhost:7015/api/Orders/Getallorder").then((res) => {
      setData(res.data);
     setfilterdata(res.data);
    });
  }, []);
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
  const column = [
    {
      name: "UserId",
      selector: (row) => row.userId,
      sortable: true,
    },
    {
      name: "OrderDate",
      selector: (row) => row.orderDate,
      sortable: true,
    },
    {
      name: "TransactionID",
      selector: (row) => row.transactionID,
      sortable: true,
    },
    {
      name: "Currency",
      selector: (row) => row.currency,
      sortable: true,
    },
    {
      name: "Total",
      selector: (row) => row.total,
      sortable: true,
    },
  ];
  const handlefilter = (event) => {
    const newdata = filterdata.filter((row) =>
      row.transactionID.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setData(newdata);
  };
  return (
    <>
      <div>
        <div className="main-banner inner" id="home"></div>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/Orders" >ORDER LIST</Link>
          </li>
        </ol>
      </div>
      <div className="MainDiv" style={{ padding: "60px 10%" }}>
      <div className="container">
            <div>
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
        {/* <div className="container">
          <table id="example" className="table table-hover table-bordered">
            <thead>
              <tr>
                <th>UserId</th>
                <th>OrderDate</th>
                <th>TransactionID</th>
                <th>Total</th>
                <th>Currency</th>
              </tr>
            </thead>
            <tbody>
              {data.map((result) => {
                return (
                  <tr key={result.id}>
                    <td>{result.userId}</td>
                    <td>{result.orderDate}</td>
                    <td>{result.transactionID}</td>
                    <td>{result.total}</td>
                    <td>{result.currency}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div> */}
      </div>
    </>
  );
}

export default Orders;
