import React from 'react';
import { Navigate, useNavigate } from "react-router-dom";
function Cancel() {
  const navigate = useNavigate();
  const pdetail = () => {
    navigate("/Home");
  
  };   
    return (
          <div>
         <div>
          {/* mian-content */}
          <div className="main-banner inner" id="home">
            
          </div>
         {/*//main-content*/}
          {/**/}
          <ol className="breadcrumb">
           <li className="breadcrumb-item">
              <a href="index.html">Cancel</a>
           </li>
            
          </ol>
           {/**/}
         </div>
         <div className="vh-100 d-flex justify-content-center align-items-center">          
            <div className="text-center">
              <h1>Your Payment is Cancel !</h1>
              <p> Your bill payment was Cancelled 
                  !</p>
              <button
                    onClick={pdetail}
                    className="btn btn-warning  btn"
                  >Go to HomePage</button>
            </div>         
        </div>
        </div>
      );
    }
export default Cancel;