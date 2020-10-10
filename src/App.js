import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import WhyContainer from "./components/WhyContainer";
import ImageSection from "./components/ImageSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <WhyContainer />
      <ImageSection />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
