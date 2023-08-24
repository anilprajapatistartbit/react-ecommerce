import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
    const navigate=useNavigate()
     const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  console.log({ email, password })
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleApi = () => {
    console.log({ email, password })
    axios.post('https://reqres.in/api/login', {
      email: email,
      password: password
    }).then(result => {
      console.log(result.data)    
      localStorage.setItem('token',result.data.token)
      navigate('/About')
    })
      .catch(error => {
        alert('service error')
        console.log(error)
      })
  }
// function Login() {
//   const navigate=useNavigate()
//    const [username, setUsername] = useState('')
// const [password, setPassword] = useState('')
// console.log({ username, password })
// const handleEmail = (e) => {
//   setUsername(e.target.value)
// }

// const handlePassword = (e) => {
//   setPassword(e.target.value)
// }

// const handleApi = () => {
//   console.log({ username, password })
//   axios.post('http://localhost:5015/api/Home', {
//     username: username,
//     password: password
//   }).then(result => {
//     console.log(result.data)    
//     localStorage.setItem('token',result.data.token)
//     navigate('/About')
//   })
//     .catch(error => {
//       alert('service error')
//       console.log(error)
//     })
// }
  return (<>
    {/* <div className="App">
      Email : <input value={email} onChange={handleEmail} type="text" /> <br />
      Password : <input value={password} onChange={handlePassword} type="text" /> <br />
      <button onClick={handleApi} >Login</button>
    </div> */}


    <section className="vh-100" style={{marginTop:'5%'}}>
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                  <button type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-facebook-f" />
                  </button>
                  <button type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-twitter" />
                  </button>
                  <button type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-linkedin-in" />
                  </button>
                </div>
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>
                {/* Email input */}
                <div className="form-outline mb-4">
                 
                  <label className="form-label" htmlFor="form3Example3">Email address</label>
                  <input type="text" id="form3Example3" input value={email} onChange={handleEmail} className="form-control form-control-lg" placeholder="Enter a valid email address" />
                </div>
                {/* Password input */}
                <div className="form-outline mb-3">
                 
                  <label className="form-label" htmlFor="form3Example4">Password</label>
                  <input type="password" input value={password} onChange={handlePassword} id="form3Example4" className="form-control form-control-lg" placeholder="Enter password" />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  {/* Checkbox */}
                  <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3" />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">Forgot password?</a>
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button type="button"  onClick={handleApi}  className="btn btn-primary btn-lg" style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>Login</button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!" className="link-danger">Register</a></p>
                </div>
              </form>
            </div>
          </div>
        </div>
       
      </section>
</>
  );
}
export default Login;