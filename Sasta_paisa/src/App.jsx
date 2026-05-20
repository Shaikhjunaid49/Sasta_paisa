import Nav from "./components/Nav";
import HeroSection from "./sections/HeroSection";
import FloatingText from "./components/FloatingText";
import LoanServices from "./sections/LoanServices";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";

import WhyChooseUs from "./components/WhyChooseUs";
import Referral from "./components/Referral";
import Feedback from "./components/Feedback";
import Partners from "./sections/Partners";

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
      <WhyChooseUs />
      <Referral />
      <Feedback />
      <Partners />
      <Footer />
    </>
  );
}

export default App;
