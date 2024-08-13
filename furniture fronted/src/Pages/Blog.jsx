import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
function Blog() {
  return (
    <>
      {/* navbar */}
      <Navbar one={{ highlight: "blog" }} />
      <Hero two={{ title: "Blog" }} />
      <h1>blog</h1>
      {/* footer */}
      <Footer />
    </>
  );
}

export default Blog;
