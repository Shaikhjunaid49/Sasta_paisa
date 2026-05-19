import LoanCard from "../components/LoanCard";

import personalLoan from "../assets/icons/icon1.jpeg";
import businessLoan from "../assets/icons/icon2.jpeg";
import homeLoan from "../assets/icons/icon3.jpeg";
import mortgageLoan from "../assets/icons/icon4.jpeg";
import usedCar from "../assets/icons/icon5.jpeg";
import creditCard from "../assets/icons/icon6.jpeg";

export default function LoanServices() {
  return (
    <>
     <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        
        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#1e2b4f]">
            Your Trusted Source for all your loan needs.
          </h2>

          <p className="text-gray-500 mt-5 max-w-3xl mx-auto leading-8">
            With us, you can expect hassle-free loan processing and quick approvals.
            Say goodbye to endless paperwork and long waiting periods.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          
          <LoanCard
            image={personalLoan}
            title="Personal Loan"
            description="Personal Loan is provided by the bank/NBFC based on salary profile and company."
            showButton={true}
            height="h-[420px]"
          />

          <LoanCard
            image={businessLoan}
            title="Business Loan"
            description="Business Loan without collateral for expansion and enhancement."
            showButton={true}
            height="h-[420px]"
          />

          <LoanCard
            image={homeLoan}
            title="Home Loan"
            description="Home Loan for purchase or construction of residential property."
            showButton={true}
            height="h-[420px]"
          />

          <LoanCard
            image={mortgageLoan}
            title="Mortgage Loan"
            description="Mortgage loan against your existing property for business expansion."
            showButton={true}
            height="h-[420px]"
          />
          <LoanCard
            image={usedCar}
            title="Mortgage Loan"
            description="Mortgage loan against your existing property for business expansion."
            showButton={true}
            height="h-[420px]"
          />
          <LoanCard
            image={creditCard}
            title="Credit Card"
            description="Credit Card for your daily expenses and purchases."
            showButton={true}
            height="h-[420px]"
          />
          <LoanCard
            image={mortgageLoan}
            title="Mortgage Loan"
            description="Mortgage loan against your existing property for business expansion."
            showButton={true}
            height="h-[420px]"
          />
        </div>
      </div>
    </section>
    </>
  )
}
