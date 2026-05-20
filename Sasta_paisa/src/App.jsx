import React from "react";
import Nav from "./components/Nav";
import Card from "./components/LoanCard";
import HeroSection from "./sections/HeroSection";
import FloatingText from "./components/FloatingText";
import LoanServices from "./sections/LoanServices";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Referral from "./components/Referral";

function App() {
  return (
    <>
      <Nav />
      <HeroSection />
      <FloatingText />
      <LoanServices />
      <ContactUs />
      <Referral />
      <Footer />
    </>
  );
}

export default App;
