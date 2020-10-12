import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import WhyContainer from "../components/WhyContainer";
import ImageSection from "../components/ImageSection";
import Footer from "../components/Footer";

function Main() {
    return (
    <div>
        <Navbar />
        <Hero />
        <WhyContainer />
        <ImageSection />
        <Featured />
        <Footer />
    </div>
    )
}

export default Main
