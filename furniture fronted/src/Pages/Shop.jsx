import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
function Shop() {
  return (
    <>
      {/* navbar */}
      <Navbar one={{highlight:"shop"}}/>
      <Hero two={{title:"Shop"}}/>
      <h1>shop</h1>
      {/* footer */}
      <Footer/>
    </>
  );
}

export default Shop;
