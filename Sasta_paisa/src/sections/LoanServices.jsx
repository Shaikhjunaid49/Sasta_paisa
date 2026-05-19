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
              With us, you can expect hassle-free loan processing and quick
              approvals. Say goodbye to endless paperwork and long waiting
              periods.
            </p>
          </div>

          {/* CARDS */}
          {/* FIRST ROW */}
          <div className="flex justify-center gap-8 mb-8 flex-wrap xl:flex-nowrap">
            <LoanCard
              image={personalLoan}
              title="Personal Loan"
              description="Personal Loan is provided by the bank / NBFC. Rate of Interest on Personal Loan depending on the salary, profile and the company in which you are working."
              showButton={true}
              height="h-[420px]"
            />

            <LoanCard
              image={businessLoan}
              title="Business Loan"
              description="As the name suggest, Banks/NBFCs offer Business Loan without any collateral for the purpose of expansion / enhancement of your existing business. enhancement."
              showButton={true}
              height="h-[420px]"
            />

            <LoanCard
              image={homeLoan}
              title="Home Loan"
              description="As the name suggest, Banks/NBFCs offer Business Loan without any collateral for the purpose of expansion / enhancement of your existing business. enhancement."
              showButton={true}
              height="h-[420px]"
            />

            <LoanCard
              image={mortgageLoan}
              title="Mortgage Loan"
              description="As the name suggest, Banks/NBFCs offer Business Loan without any collateral for the purpose of expansion / enhancement of your existing business."
              showButton={true}
              height="h-[420px]"
            />
          </div>

          {/* SECOND ROW */}
          <div className="flex justify-center gap-8 flex-wrap">
            <LoanCard
              image={usedCar}
              title="Used Car Loan"
              description="Doctor loan or Physician Loan is the loan for doctors who are looking for funds to expand their Clinics, hospitals, to purchase new equipment sot to manage their cash flows."
              showButton={true}
              height="h-[420px]"
            />

            <LoanCard
              image={creditCard}
              title="Credit Card"
              description="Doctor loan or Physician Loan is the loan for doctors who are looking for funds to expand their Clinics, hospitals, to purchase new equipment sot to manage their cash flows."
              showButton={true}
              height="h-[420px]"
            />

            <LoanCard
              image={mortgageLoan}
              title="Doctor Loan"
              description="Used Car Loan can be availed for two purpose - 1. For Purchasing Second Hand Car & 2. In case of any personal need, loan against your existing car."
              showButton={true}
              height="h-[420px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
