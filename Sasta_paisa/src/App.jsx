import Nav from "./components/Nav";
import HeroSection from "./sections/HeroSection";
import FloatingText from "./components/FloatingText";
import LoanServices from "./sections/LoanServices";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
function App() {
  return (
    <>
      <Nav />
      <HeroSection />
      <FloatingText />
      <LoanServices />
      <ContactUs/>
      <Footer />
    </>
  );
}

export default App;
