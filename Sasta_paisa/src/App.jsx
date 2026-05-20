import Nav from "./components/Nav";
import HeroSection from "./sections/HeroSection";
import FloatingText from "./components/FloatingText";
import LoanServices from "./sections/LoanServices";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import EmiCalculator from "./components/EmiCalculator";

function App() {
  return (
    <>
      <Nav />
      <HeroSection />
      <FloatingText />
      <LoanServices />
      <ContactUs/>
      <EmiCalculator/>
      <Footer />
    </>
  );
}

export default App;
