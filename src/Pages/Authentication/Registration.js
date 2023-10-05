import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import login from "../../assets/images/login.jpg";
import "../../assets/css/bootstrap.css"
import "../../App.css";
import TextInput from "../../common/TextInput"
import PwdInput from "../../common/PwdInput"
//import { Navigate, useNavigate } from "react-router-dom";
function Registrion() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: 0,
    usename: "",
    password: "",
    email: "",
    IsActive: 1,
    confirmPassword: "",
  });

  const [errors, seterrors] = useState({});
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
    const validationerror = {};
    if (!formData.usename.trim()) {
      validationerror.usename = "Username is required";
      isValid = false;
    }
    if (!formData.email.trim()) {
      validationerror.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationerror.email = "Invalid email format";
      isValid = false;
    }
    if (!formData.password.trim()) {
      validationerror.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      validationerror.password = "Password must be at least 6 characters";
      isValid = false;
    }
    if (formData.confirmPassword !== formData.password) {
      validationerror.confirmPassword = "Passwords do not match";
      isValid = false;
    }
    if (isValid) {
      try {
        console.log(formData);
        const response = axios.post(
          "https://localhost:7015/api/Registration/registration",
          formData
        );
        alert("submit sucessfully");
        navigate("/login");
        console.log(response.data); // You can handle the response as needed
      } catch (error) {
        console.error("Error registering:", error);
      }
    } else {
      seterrors(validationerror);
    }
  };

  // return (
  //   <div className="container-fluid h-100">
  //     <div className="row d-flex justify-content-center align-items-center h-100">
  //       <div className="col-lg-12 col-xl-11">
  //         <div className="card text-black" style={{ borderRadius: "25px" }}>
  //           <div className="card-body p-md-5">
  //             <div className="row justify-content-center">
  //               <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
  //                 <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
  //                   Sign up
  //                 </p>
  //                 <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
  //                   <div className="d-flex flex-row align-items-center mb-4">
  //                     <i className="fas fa-user fa-lg me-3 fa-fw" />
  //                     <div className="form-outline flex-fill mb-0">
  //                       <TextInput
  //                        label={ "Your Name"}
  //                         id="form3Example1c"
  //                         name="usename"
  //                         value={formData.usename}
  //                         onChange={handleChange}
  //                         error={errors.usename}
  //                       />
                     
  //                     </div>
  //                   </div>
  //                   <div className="d-flex flex-row align-items-center mb-4">
  //                     <i className="fas fa-envelope fa-lg me-3 fa-fw" />
  //                     <div className="form-outline flex-fill mb-0">
  //                       <TextInput
  //                         label={ "Your Email"}
  //                         id="form3Example3c"       
  //                         name="email"
  //                         value={formData.email}
  //                         onChange={handleChange}
  //                         error={errors.email}
  //                       />
  //                     </div>
  //                   </div>
  //                   <div className="d-flex flex-row align-items-center mb-4">
  //                     <i className="fas fa-lock fa-lg me-3 fa-fw" />
  //                     <div className="form-outline flex-fill mb-0">
  //                       <PwdInput
  //                        label={ "Password"}
  //                         type="password"
  //                         id="form3Example4c"
  //                         name="password"
  //                         value={formData.password}
  //                         onChange={handleChange}
  //                         error={errors.password}
  //                       />                      
  //                     </div>
  //                   </div>
  //                   <div className="d-flex flex-row align-items-center mb-4">
  //                     <i className="fas fa-key fa-lg me-3 fa-fw" />
  //                     <div className="form-outline flex-fill mb-0">
  //                       <PwdInput
  //                       label={"Repeat your password"}
  //                         type="password"
  //                         id="form3Example4cd"
  //                         name="confirmPassword"
  //                         onChange={handleChange}
  //                         error={errors.confirmPassword}
  //                       />
                       
  //                     </div>
  //                   </div>
  //                   <div className="form-check d-flex justify-content-center mb-5">
  //                     <input
  //                       className="form-check-input me-2"
  //                       type="checkbox"
  //                       defaultValue
  //                       id="form2Example3c"
  //                     />
  //                     <label
  //                       className="form-check-label"
  //                       htmlFor="form2Example3"
  //                     >
  //                       I agree all statements in{" "}
  //                       <a href="#!">Terms of service</a>
  //                     </label>
  //                   </div>
  //                   <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
  //                     <button type="submit" className="btn btn-primary btn-lg">
  //                       Register
  //                     </button>
  //                   </div>
  //                 </form>
  //               </div>
  //               <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
  //                 <img
  //                   src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
  //                   className="img-fluid"
  //                   alt="Sample image"
  //                 />
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

return(<>
  <div>
        {/* mian-content */}
         <div className="main-banner inner" id="home">
          
         </div>
         {/*//main-content*/}
        {/**/}
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="index.html">SIGN UP</a>
           </li>
          
         </ol>
         {/**/}
  </div>
    <section className="login_box_area section_gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="login_box_img">
              <img className="img-fluid" src={login}  style={{height:"664px"}} />
              <div className="hover">
                <h4>New to our website?</h4>
                <p>There are advances being made in science and technology everyday, and a good example of this is the</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="register_form_inner">
              <h3>Sign Up</h3>
              <form className="row login_form"   onSubmit={handleSubmit}>
            
                <div className="col-md-12 form-group" style={{marginBottom: "0px"}}>
                  {/* <input type="text" className="form-control form-controlis-invalid" 
                    id="form3Example3" name="name" placeholder="Username" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Username'" /> */}
                  <TextInput
                           id="form3Example1c"
                         name="usename"
                          value={formData.usename}
                          onChange={handleChange}
                          error={errors.usename}
                          placeholder="Username" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Username'"
                        
                        />
                </div>
                <div className="col-md-12 form-group"style={{marginBottom: "0px"}}>
                         <TextInput
                         
                         id="form3Example3c"       
                           name="email"
                      value={formData.email}
                         onChange={handleChange}
                           error={errors.email}
                           placeholder="Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email'"
                        />
                       </div>
                <div className="col-md-12 form-group"style={{marginBottom:"0px"}}>
                  {/* <input type="password" className="form-control" 
                     id="form3Example4" name="name" placeholder="Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'" /> */}
                  <PwdInput
                       
                          type="password"
                          id="form3Example4c"
                          name="password"
                           value={formData.password}
                          onChange={handleChange}
                           error={errors.password}
                           placeholder="Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'"
                         />     
                </div>
                <div className="col-md-12 form-group"style={{marginBottom:"0px"}}>
                         <PwdInput
                          type="password"
                           id="form3Example4cd"
                           name="confirmPassword"
                           onChange={handleChange}
                           error={errors.confirmPassword}
                           placeholder="Repeat your password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Repeat your password'"
                        />
         </div>
                <div className="col-md-12 form-group"style={{marginBottom: "0px"}}>
                  <div className="creat_account">
                    <input type="checkbox" id="form2Example3" name="selector" />
                    <label htmlFor="f-option2">I agree all statement</label>
                  </div>
                </div>
                <div className="col-md-12 form-group">
                  <button type="submit"  value="submit" className="primary-btn">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
</>)


}
export default Registrion;
