import React from "react";
import Nav from "./components/Nav";
import HeroSection from "./sections/HeroSection";
import FloatingText from "./components/FloatingText";
import LoanServices from "./sections/LoanServices";

function App() {
  return (
    <>
      <Nav />
      <HeroSection />
      <FloatingText />
      <LoanServices />
    </>
  );
}

export default App;
