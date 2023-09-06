
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Componenets/Home';
import About from './Componenets/About';
import Product  from './Pages/ProductU/Product';
import SingleProduct  from './Pages/ProductU/SingleProduct'
import Contact from './Componenets/Contact';

import Cart from './Pages/Cart/Cart'
import React,{createContext, useEffect, useState} from 'react';
import Login from './Pages/Authentication/Login';
import  Footer  from './Componenets/Footer';
import Checkout from './Componenets/Checkout';
import Registrion from './Pages/Authentication/Registration';
import Admin from './Pages/Administrator/Product/Admin';
import axios from 'axios';
import AddProduct from './Pages/Administrator/Product/AddProduct';
import EditProduct from './Pages/Administrator/Product/EditProduct';
import Orders from './Pages/Administrator/Order/Orders';
const data=createContext();
function App() {
  console.log("test")
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get("https://localhost:7120/api/Registration/getall")
      .then((response) => {
        console.log(response);
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  
let [cart,setcart]=useState([])
console.log(cart)

let addtocart=(data)=>{
//console.log(setcart)
setcart([...cart,{...data,quantity :1}])
}
let [pro,setpro]=useState([])
let singlepro=(data)=>{
  setpro([{...data}])
  }
  return (
    <data.Provider value={product}>
    <BrowserRouter>
      <Home count={cart.length}  product={product}/>
      
    <Routes>
   
    <Route path="/About" element={<About/>}/>
   
     
       <Route path="/Product" element={<Product product={product}addtocart={addtocart} singlepro={singlepro}/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/SingleProduct" element={<SingleProduct product={product}addtocart={addtocart} pro={pro}/>}/>
      <Route path="/Cart" element={<Cart cart={cart}/>}/> 
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Checkout" element={<Checkout/>}/>
      <Route path="/Registrion" element={<Registrion/>}/>
      <Route path="/Admin" element={<Admin/>}/>
      <Route path="/AddProduct" element={<AddProduct/>}/>
      <Route path="/EditProduct/:pid" element={<EditProduct/>}/>
      <Route path="/Orders" element={<Orders/>}/>
      
    
       
    </Routes>
  <Footer/>
    </BrowserRouter>
    </data.Provider>
  );
}

export default App;
export {data}