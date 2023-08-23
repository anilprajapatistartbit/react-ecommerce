import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Componenets/Home';
import About from './Componenets/About';
import Product  from './Componenets/Product';
import Contact from './Componenets/Contact';
import SingleProduct  from './Componenets/SingleProduct'
import Cart from './Componenets/Cart'
import React,{useEffect, useState} from 'react';
import Login from './Componenets/Login';
import Carousel from './Componenets/Carousel';
import s1 from './images/s1.jpg';
import s2 from './images/s2.jpg';
import s3 from './images/s3.jpg';
import s4 from './images/s4.jpg';
import s5 from './images/s5.jpg';
import s6 from './images/s6.jpg';
import  Footer  from './Componenets/Footer';
import Checkout from './Componenets/Checkout';
import axios from 'axios';


function App() {
  console.log("test")
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5015/api/Home")
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
    <BrowserRouter>
      <Home count={cart.length}  product={product}/>
      
    <Routes>
    
      <Route path="/About" element={<About product={product}/>}/>
       <Route path="/Product" element={<Product product={product}addtocart={addtocart} singlepro={singlepro}/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/SingleProduct" element={<SingleProduct product={product}addtocart={addtocart} pro={pro}/>}/>
      <Route path="/Cart" element={<Cart cart={cart}/>}/> 
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Checkout" element={<Checkout/>}/>
      
    
       
    </Routes>
  <Footer/>
    </BrowserRouter>
  );
}

export default App;
