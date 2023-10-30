import { useEffect, useState } from "react";
import axios from "axios";
import login from "../../assets/images/login.jpg";
import "../../assets/css/bootstrap.css"
import "../../App.css";
import { Navigate, useNavigate,Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextInput from "../../common/TextInput";
import PwdInput from  "../../common/PwdInput";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  console.log({ email, password });
  const handleEmail = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);

    // Email format validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!enteredEmail) {
      setEmailError("Email is required");
    } 
  else if (!emailRegex.test(enteredEmail)) {
      setEmailError("Enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePassword = (e) => {
    const enteredPassword = e.target.value;
    setPassword(enteredPassword);

    // Password validation
    if (!enteredPassword) {
      setPasswordError("Password is required");
    } 
    else if (enteredPassword.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    } else {
      setPasswordError("");
    }
  };

  const hendleSubmit = () => {
    console.log({ email, password });
    axios
      .post("https://localhost:7015/api/Registration/login", {
        email: email,
        password: password,
      })
      .then((result) => {
        console.log("RESULTTTTT",result.data);
        if (result.data.isActive === 1) {
         
          localStorage.setItem("email", email);
          localStorage.setItem("id", result.data.id);
          localStorage.setItem("token", true);
         
          navigate("/home");
          toast.success("Login successfully!");
        } else {
        
          setError("Invalid email or password");
          setTimeout(() => {
            setError("");
          }, 2000);
      
        }
      })
      .catch((error) => {
      
        setError("Invalid email or password");
        setTimeout(() => {
          setError("");
        },2000);
        console.log(error);
      });
  };
 
  
  // return (
  //   <>
  //   <div>
  //       {/* mian-content */}
  //       <div className="main-banner inner" id="home">
          
  //       </div>
  //       {/*//main-content*/}
  //       {/**/}
  //       <ol className="breadcrumb">
  //         <li className="breadcrumb-item">
  //           <a href="index.html">USER LOGIN</a>
  //         </li>
          
  //       </ol>
  //       {/**/}
  //     </div>
  //     <section style={{ marginTop: "5%" }}>
  //       <div className="container">
  //         <div className="row d-flex justify-content-center align-items-center h-100">
  //           <div className="col-md-9 col-lg-6 col-xl-5">
  //             <img
  //               src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
  //               className="img-fluid"
  //               alt="Sample image"
  //             />
  //           </div>
  //           <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
  //             <form>
  //               {error && <div className="alert alert-danger">{error}</div>}
  //               {/* Email input */}
  //               <div className="form-outline mb-4">
  //                 <label className="form-label" htmlFor="form3Example3">
  //                   Email address
  //                 </label>
  //                 <input
  //                   type="text"
  //                   id="form3Example3"
  //                   input
  //                   value={email}
  //                   onChange={handleEmail}
  //                   className={`form-control form-control-lg ${
  //                     emailError ? "is-invalid" : ""
  //                   }`}
  //                   placeholder="Enter a valid email address"
  //                 />
  //                 {emailError && (
  //                   <div className="invalid-feedback">{emailError}</div>
  //                 )}
  //               </div>
  //               {/* Password input */}
  //               <div className="form-outline mb-3">
  //                 <label className="form-label" htmlFor="form3Example4">
  //                   Password
  //                 </label>
  //                 <input
  //                   type="password"
  //                   id="form3Example4"
  //                   value={password}
  //                   onChange={handlePassword}
  //                   className={`form-control form-control-lg ${
  //                     passwordError ? "is-invalid" : ""
  //                   }`}
  //                   placeholder="Enter password"
  //                 />
  //                 {passwordError && (
  //                   <div className="invalid-feedback">{passwordError}</div>
  //                 )}
  //               </div>
  //               <div className="d-flex justify-content-between align-items-center">
  //                 {/* Checkbox */}
  //                 <div className="form-check mb-0">
  //                   <input
  //                     className="form-check-input me-2"
  //                     type="checkbox"
  //                     defaultValue
  //                     id="form2Example3"
  //                   />
  //                   <label className="form-check-label" htmlFor="form2Example3">
  //                     Remember me
  //                   </label>
  //                 </div>
  //                 <a href="#!" className="text-body">
  //                   Forgot password?
  //                 </a>
  //               </div>
  //               <div className="text-center text-lg-start mt-4 pt-2">
  //                 <button
  //                   type="button"
  //                   onClick={handleApi}
  //                   className="btn btn-primary btn-lg"
  //                   style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
  //                 >
  //                   Login
  //                 </button>
  //                 <p className="small fw-bold mt-2 pt-1 mb-0">
  //                   Don't have an account?{" "}
  //                   <a href="#!" className="link-danger">
  //                     Register
  //                   </a>
  //                 </p>
  //               </div>
  //             </form>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //     <ToastContainer position="top-right" autoClose={5000} />
  //   </>
  // );
  return (
<>
     <div>
        {/* mian-content */}
         <div className="main-banner inner" id="home">
          
         </div>
         {/*//main-content*/}
        {/**/}
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="index.html">USER LOGIN</a>
           </li>
          
         </ol>
         {/**/}
       </div>
    <section className="login_box_area section_gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="login_box_img">
              <img className="img-fluid" src={login} alt="" />
              <div className="hover">
                <h4>New to our website?</h4>
                <p>There are advances being made in science and technology everyday, and a good example of this is the</p>
             <Link  to="/Registrion"className="create-btn">Create an Account</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="login_form_inner">
              <h3>Log in to enter</h3>
              <form className="row login_form" >
              
              {error && (<div className="alert text-danger">{error}</div>)}
                <div className="col-md-12 form-group">
                <input
                    type="text"
                    id="form3Example3"
                     input
                   value={email}
                     onChange={handleEmail}
                    className={`form-control  ${
                     emailError ? "is-invalid" : ""
                    }`}
                     placeholder="Email"
                   />
                   {emailError && (
                   <div className="invalid-feedback">{emailError}</div>
                  )}
                </div>
                <div className="col-md-12 form-group">
                <input
                    type="password"
                   id="form3Example4"
                   value={password}
                    onChange={handlePassword}
                    className={`form-control ${
                       passwordError ? "is-invalid" : ""
                     }`}
                   placeholder="Enter password"
                  />
                  {passwordError && (
                     <div className="invalid-feedback">{passwordError}</div>
                  )}
                </div>
                <div className="col-md-12 form-group">
                  <div className="creat_account">
                    <input type="checkbox" id="form2Example3" name="selector" />
                    <label htmlFor="f-option2">Keep me logged in</label>
                  </div>
                </div>
                <div className="col-md-12 form-group">
                  <button type="button" onClick={hendleSubmit} value="submit" className="primary-btn">Log In</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
   
    </>
  );

}


export default Login;
