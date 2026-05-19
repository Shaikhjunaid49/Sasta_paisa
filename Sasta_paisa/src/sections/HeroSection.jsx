import personalLoan from "../assets/icons/icon1.jpeg";
import businessLoan from "../assets/icons/icon1.jpeg";
import homeLoan from "../assets/icons/icon1.jpeg";
import mortgageLoan from "../assets/icons/icon1.jpeg";
import usedCar from "../assets/icons/icon1.jpeg";
import creditCard from "../assets/icons/icon1.jpeg";
import LoanCard from "../components/LoanCard";

import heroMan from "../assets/Hero_man.jpeg";

function HeroSection() {
  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <LoanCard image={personalLoan} title="Personal Loan" />

            <LoanCard image={businessLoan} title="Business Loan" />

            <LoanCard image={homeLoan} title="Home Loan" />

            <LoanCard image={mortgageLoan} title="Mortgage Loan" />

            <LoanCard image={usedCar} title="Used Car Loan" />

            <LoanCard image={creditCard} title="Credit Card" />
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center">
            <img src={heroMan} alt="Hero" className="w-full max-w-[500px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
