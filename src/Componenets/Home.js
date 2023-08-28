import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Carousel from "./Carousel";
import logo3 from "../images/logo3.jpg";
function Home(props) {
  const location = useLocation();
  const [token, setToken] = useState(false); // You can replace this with your actual token retrieval logic

  useEffect(() => {
    localStorage.getItem("token") ? setToken(true) : setToken(false);
    console.log(location);
  }, [location.pathname]);
  const handleLogin = () => {
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(false);
    console.log(token);
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ height: "40px" }}
      >
        <div className="container" style={{ maxWidth: "1300px" }}>
          <ul className="navbar-nav justify-end">
            <li className="nav-item ">
              <Link className="nav-link " href="#">
                Contact /
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link " href="#">
                Location
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <nav
        className="navbar navbar-expand-lg navbar-light "
        style={{ background: "white" }}
      >
        <div className="container" style={{ maxWidth: "1300px" }}>
          <a className="navbar-brand" href="#">
            <img src={logo3} width="75" height="65px" />
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/About"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Product"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  ProductList
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav flex-d">
              <li className="nav-item ">
                <Link to="/Cart" className="nav-link " href="#">
                  <i
                    class="fa fa-cart-shopping"
                    style={{ fontSize: "23px" }}
                  ></i>
                  <sup class="super">{props.count}</sup>
                </Link>
              </li>
              

              {token && (
                <li className="nav-item">
                  <Link to="/Login" className="nav-link" onClick={handleLogout}>
                    Logout
                  </Link>
                </li>
              )}
              {!token && (<>
                <li className="nav-item">
                <Link to="/Registrion" className="nav-link" aria-current="page">
                  Signup
                </Link>
              </li>
                <li className="nav-item">
                  <Link to="/Login" className="nav-link" onClick={handleLogin}>
                    Login
                  </Link>
                </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <hr></hr>
    </>
  );
}

export default Home;
