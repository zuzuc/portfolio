import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default Home;
