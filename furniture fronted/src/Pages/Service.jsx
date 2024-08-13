import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Footer from '../Components/Footer';
function Service() {
  return (
    <>
    {/* navbar */}
    <Navbar one={{highlight:"service"}}/>
      <Hero two={{title:"Services"}}/>
      <h1>service</h1>
      {/* footer */}
      <Footer/>
    </>
  );
}

export default Service;
