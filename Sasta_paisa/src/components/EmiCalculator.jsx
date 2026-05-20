import { useState } from "react";

export default function EmiCalculator() {
  const [loanAmount, setLoanAmount] = useState(2000000);
  const [tenure, setTenure] = useState(16);
  const [interestRate, setInterestRate] = useState(8);

  // EMI Formula
  const monthlyRate = interestRate / 12 / 100;
  const months = tenure * 12;

  const emi =
    (loanAmount *
      monthlyRate *
      Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  const totalPayment = emi * months;
  const totalInterest = totalPayment - loanAmount;

  return (
    <section className="bg-[#f5f5f5] py-14 px-4">
      
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-center text-[#0A2A66] mb-12">
        EMI Calculator
      </h1>

      {/* Main Card */}
      <div className="max-w-6xl mx-auto bg-[#E6F0CF] rounded-2xl p-6 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Left Side */}
        <div className="space-y-10">

          {/* Loan Amount */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl md:text-2xl font-semibold text-[#0A2A66]">
                Loan Amount
              </h2>

              <div className="bg-white px-4 py-3 rounded-xl text-[#0A2A66] font-bold text-lg md:text-2xl shadow-sm">
                ₹{loanAmount.toLocaleString()}
              </div>
            </div>

            <input
              type="range"
              min="100000"
              max="5000000"
              step="100000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full h-2 accent-lime-600 cursor-pointer"
            />
          </div>

          {/* Tenure */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl md:text-2xl font-semibold text-[#0A2A66]">
                Tenure
              </h2>

              <div className="bg-white px-4 py-3 rounded-xl text-[#0A2A66] font-bold text-lg md:text-2xl shadow-sm">
                {tenure} years
              </div>
            </div>

            <input
              type="range"
              min="1"
              max="30"
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full h-2 accent-lime-600 cursor-pointer"
            />
          </div>

          {/* Interest Rate */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl md:text-2xl font-semibold text-[#0A2A66]">
                Interest Rate
              </h2>

              <div className="bg-white px-4 py-3 rounded-xl text-[#0A2A66] font-bold text-lg md:text-2xl shadow-sm">
                {interestRate}%
              </div>
            </div>

            <input
              type="range"
              min="1"
              max="20"
              step="0.1"
              value={interestRate}
              onChange={(e) =>
                setInterestRate(Number(e.target.value))
              }
              className="w-full h-2 accent-lime-600 cursor-pointer"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center lg:pl-10">

          {/* EMI */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0A2A66]">
              Equated monthly installment
            </h3>

            <p className="text-4xl md:text-6xl font-bold text-lime-600 mt-4">
              ₹{Math.round(emi).toLocaleString()}/mo
            </p>
          </div>

          {/* Interest */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0A2A66]">
              Total Interest Payable
            </h3>

            <p className="text-4xl md:text-5xl font-bold text-lime-600 mt-4">
              ₹{Math.round(totalInterest).toLocaleString()}
            </p>
          </div>

          {/* Total Payment */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#0A2A66]">
              Total of Payments
            </h3>

            <p className="text-lg md:text-xl text-[#0A2A66] mt-1">
              (Principle + Interest)
            </p>

            <p className="text-4xl md:text-5xl font-bold text-lime-600 mt-4">
              ₹{Math.round(totalPayment).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}