import React , { useState } from 'react'
import {BrowserRouter} from 'react-router-dom'
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data'
import Feature from './components/Feature';
import Footer from './components/Footer';


function App() {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggle = () => {
    setIsOpen(!isOpen)
    console.log(isOpen);
}
  return (
    <BrowserRouter>
    <GlobalStyle/>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle}/>
      <Hero/>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle}/>
      <Products heading='Choose your favorite' data={productData}/>
      <Feature/>
      <Products heading='Sweet Treats for You' data={productDataTwo}/>
      <Footer/>
    </BrowserRouter>     
  );
}

export default App;
