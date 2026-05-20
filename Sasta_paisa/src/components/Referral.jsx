import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import referImage from "../assets/Refer.webp";

const Referral = () => {
  return (
    <div className="bg-[#f3f3f3] min-h-screen py-8 px-4 md:px-10">
      {/* Main Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-center text-[#0b2b63] mb-16">
        SastaPaisa Referral Connector Program
      </h1>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-md shadow-sm">
        {/* Left Section */}
        <div className="p-6 md:p-14 flex flex-col justify-center bg-[linear-gradient(rgb(255,255,255)_45%,rgb(213,255,150)_100%)]">
          <h2 className="text-[#0b2b63] text-2xl font-semibold mb-3">
            Be Your Own Boss
          </h2>

          <p className="text-[#0b2b63] text-xl font-medium mb-10">
            Full Time | Part Time | Earn Big Time
          </p>

          {/* Form */}
          <form className="space-y-5">
            {/* Name Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="First Name"
                className="border border-lime-500 rounded-xl px-5 py-4 outline-none bg-transparent text-lg"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="border border-lime-500 rounded-xl px-5 py-4 outline-none bg-transparent text-lg"
              />
            </div>

            {/* Email & Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="email"
                placeholder="Email"
                className="border border-lime-500 rounded-xl px-5 py-4 outline-none bg-transparent text-lg"
              />

              <input
                type="text"
                placeholder="Mobile Number"
                className="border border-lime-500 rounded-xl px-5 py-4 outline-none bg-transparent text-lg"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-3 text-lg text-[#1c1c1c]">
              <input type="checkbox" className="w-5 h-5" />

              <p>
                I agree to the{" "}
                <span className="text-blue-600 cursor-pointer">
                  Terms & Conditions
                </span>{" "}
                and{" "}
                <span className="text-blue-600 cursor-pointer">
                  Privacy Policy
                </span>
              </p>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-[#9abd31] hover:bg-[#88ab25] transition-all duration-300 text-white font-semibold text-2xl py-4 rounded-xl">
              Submit
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="relative flex flex-col items-center justify-center p-8 bg-[linear-gradient(rgb(255,255,255)_45%,rgb(213,255,150)_100%)]">
          {/* Image */}
          <div className="w-full flex items-center justify-center">
            <img
              src={referImage}
              alt="Refer & Earn"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="fixed left-5 bottom-5 flex flex-col gap-3 z-50">
        {/* Call Button */}
        <button className="bg-[#59d66b] p-4 rounded-lg shadow-lg hover:scale-105 transition">
          <Phone className="text-white w-8 h-8" />
        </button>

        {/* WhatsApp Button */}
        <button className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition">
          <MessageCircle className="text-[#27d366] w-8 h-8" />
        </button>
      </div>
      {/* INFO SECTIONS */}
      <div className="max-w-[1600px] mx-auto px-3 pb-12 pt-0">
        {/* WHO CAN BE A REFERRAL CONNECTOR */}
        <section className="bg-[#f5f5f5] py-16 px-6 md:px-20">
          <h2 className="text-[#0b2b63] text-3xl md:text-[55px] font-bold leading-tight mb-10">
            Who can be a Referral Connector?
          </h2>

          <ul className="list-disc pl-8 space-y-6 text-[#424242] text-lg md:text-[20px] leading-[42px] font-[Open_Sans]">
            <li>
              Any person who can refer prospective customers looking for any
              type of loan
            </li>

            <li>
              A person with or without any prior experience in loan or financial
              services.
            </li>

            <li>
              People who are in the business of financial consultancy, real
              estate broking, CAs, and real estate developers can be preferred
              as Connectors.
            </li>
          </ul>
        </section>

        {/* ROLE OF REFERRAL CONNECTOR */}
        <section className="bg-[#e4f3c8] py-16 px-6 md:px-20">
          <h2 className="text-[#0b2b63] text-3xl md:text-[55px] font-bold leading-tight mb-10">
            Role of a Referral Connector
          </h2>

          <p className="text-[#424242] text-lg md:text-[20px] leading-[42px] font-[Open_Sans] max-w-[1500px]">
            The role of a Connector is to refer prospective customers interested
            in Personal Loans, Business Loans, Home Loans, loans against
            Property or Mortgage Loans, New Car loans, and Used Car loans to
            SastaPaisa team. Connector need not get involved in the execution of
            a home loan proposal post referral to SastaPaisa team.
          </p>
        </section>

        {/* BENEFITS SECTION */}
        <section className="bg-[#f5f5f5] py-16 px-6 md:px-20">
          <h2 className="text-[#0b2b63] text-3xl md:text-[48px] font-bold mb-10 leading-tight">
            Benefits of the Referral Connector Program
          </h2>

          <ul className="list-disc pl-10 space-y-6 text-[#424242] text-lg md:text-[22px] leading-[42px] font-normal">
            <li>Create your independent business identity</li>

            <li>Flexible working hours</li>

            <li>Earn attractive extra income</li>

            <li>
              Associate with one of the fastest-growing loan finance company.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Referral;
