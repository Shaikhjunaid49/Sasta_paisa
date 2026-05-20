import React from "react";
import Nav from "./components/Nav";
import Card from "./components/LoanCard";
import HeroSection from "./sections/HeroSection";
import RefrelConnector from "./components/RefrelConnnector";

function App() {
  return (
    <>
      <Nav />
      <HeroSection />
      <FloatingText />
      <RefrelConnector />
    </>
  );
}

export default App;
