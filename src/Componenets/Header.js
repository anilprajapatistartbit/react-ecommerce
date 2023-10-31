import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo3 from "../assets/images/logo3.jpg";
import "../assets/css/style.css"
import "../assets/css/font-awesome.css"
function Header(props) {
  const location = useLocation();
  const [token, setToken] = useState(false); // You can replace this with your actual token retrieval logic
  useEffect(() => {
    localStorage.getItem("token") ? setToken(true) : setToken(false);
    //console.log(location);
    console.log(token);
  }, [location.pathname]);
  const handleLogin = () => {};
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(false);
    console.log(token);
  };
  const isEmailAdmin = localStorage.getItem('email') === 'admin@gmail.com';
return (
<div>
          <header className="header">
            <div className="container-fluid px-lg-5">
              {/* nav */}
              <nav className="py-4">
                <div id="logo">
                  <h1><Link to="/Home"><span className="fa fa-bold" aria-hidden="true" />ootie</Link></h1>
                </div>
                <label htmlFor="drop" className="toggle">Menu</label>
                <input type="checkbox" id="drop" />
                <ul className="menu mt-2">
                  <li className="active"><Link
                  to="/Home"
                  aria-current="page"
                  href="#"
                >
                 Home
                </Link></li>
                <li><Link
                  to="/About"
                  aria-current="page"
                  href="#"
                >
                 About
                </Link></li>
                  <li> <Link
                  to="/Product"
                 aria-current="page"
                  href="#"
                >
                  Products
               </Link></li>
               <li><Link to="/Contact">Contact</Link></li>
               {!isEmailAdmin && token &&( <li>
                   
                    <label htmlFor="drop-2" className="toggle">MyOrders<span className="fa fa-angle-down" aria-hidden="true" /> </label>
                    <a href="#">My Orders <span className="fa fa-angle-down" aria-hidden="true" /></a>
                    <input type="checkbox" id="drop-2" />
                    <ul>
                      <li><Link to="/MyOrder">MyOrders</Link></li>   
                    </ul>
                  </li> 
                   )} 
                 
                  {isEmailAdmin && token &&(
                  // <li>
                  //   {/* First Tier Drop Down */}
                  //   <label htmlFor="drop-2" className="toggle">Admin <span className="fa fa-angle-down" aria-hidden="true" /> </label>
                  //   <a href="#">Admin <span className="fa fa-angle-down" aria-hidden="true" /></a>
                  //   <input type="checkbox" id="drop-2" />
                  //   <ul>
                  //     <li> <Link to="/Admin" >
                  //     Product List
                  // </Link></li>
                  //     <li><Link to="/Orders" >
                  //     Order List
                  // </Link></li>
                      
                  //   </ul>
                  // </li>
                  <li><Link
                  to="/Dashboard"
                  aria-current="page"
                  href="#"
                >
                 Admin
                </Link></li>
                  )}
                  {token && (
              <li>
                  <Link to="/Login"onClick={handleLogout}>
                    Logout
                  </Link>
               </li>
               )}
               {!token && (
                   <>
                    <li >
                     <Link
                         to="/Registrion"
              
                        aria-current="page"
                       >
                         Signup
                     </Link>
                    </li>
                     <li>
                       <Link
                        to="/Login"
                      
                        onClick={handleLogin}
                      >
                        Login
                      </Link>
                    </li>
                  </>
                )}
                  <li><Link to="/Cart" className="nav-link " href="#">
                  <i
                    class="fa fa-cart-shopping"
                    style={{ fontSize: "22px",marginTop:'-7px' }}
                  ></i>
                  <sup class="super">{props.count}</sup>
               </Link></li>
                </ul>
              </nav>
              {/* //nav */}
            </div>
          </header>
      </div>
);
}


export default Header;
