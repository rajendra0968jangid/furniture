import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
function Contact() {
  return (
    <>
      {/* navbar */}
      <Navbar one={{ highlight: "contact" }} />
      <Hero two={{ title: "Contact" }} />
      <h1>cart</h1>
      {/* footer */}
      <Footer />
    </>
  );
}

export default Contact;
