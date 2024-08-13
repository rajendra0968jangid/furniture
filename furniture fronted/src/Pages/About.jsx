import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Footer from '../Components/Footer';

function About() {
  return (
    <>
    {/* navbar */}
    <Navbar one={{highlight:"about"}}/>
      <Hero two={{title:"About us"}}/>
      <h1>about</h1>
      {/* footer */}
      <Footer/>
    </>
  );
}

export default About;
