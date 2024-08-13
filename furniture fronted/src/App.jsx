import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Cart from './Pages/Cart'
import Contact from './Pages/Contact'
import Service from './Pages/Service'
import Shop from './Pages/Shop'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Service />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
