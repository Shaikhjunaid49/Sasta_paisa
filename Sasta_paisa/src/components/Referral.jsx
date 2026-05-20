import React from "react";
import { Phone, MessageCircle } from "lucide-react";

const Referral = () => {
  return (
    <div className="bg-[#f3f3f3] min-h-screen py-8 px-4 md:px-10">
      {/* Main Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-center text-[#0b2b63] mb-16">
        SastaPaisa Referral Connector Program
      </h1>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto bg-[#eaf6c6] grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-md shadow-sm">
        {/* Left Section */}
        <div className="p-6 md:p-14 flex flex-col justify-center">
          <h2 className="text-[#0b2b63] text-2xl font-semibold mb-3">
            Be Your Own Boss
          </h2>

          <p className="text-[#0b2b63] text-xl font-medium mb-10">
            Full Time | Part Time | Earn Big Time
          </p>

          {/* Form */}
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="First Name"
                className="border border-lime-500 rounded-xl px-5 py-4 outline-none bg-white text-lg"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="border border-lime-500 rounded-xl px-5 py-4 outline-none bg-white text-lg"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="email"
                placeholder="Email"
                className="border border-lime-500 rounded-xl px-5 py-4 outline-none bg-white text-lg"
              />

              <input
                type="text"
                placeholder="Mobile Number"
                className="border border-lime-500 rounded-xl px-5 py-4 outline-none bg-white text-lg"
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

            {/* Button */}
            <button className="w-full bg-[#9abd31] hover:bg-[#88ab25] transition-all duration-300 text-white font-semibold text-2xl py-4 rounded-xl">
              Submit
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="relative flex flex-col items-center justify-center bg-[#eef7d7] p-8">
          {/* Text */}
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-10 text-center">
            Refer & Earn
          </h1>

          {/* Illustration */}
          <div className="relative w-full flex items-center justify-center">
            {/* Left Hand */}
            <div className="absolute left-0 bottom-0 w-40 h-56 bg-[#efb081] rounded-t-full rotate-[25deg]"></div>

            {/* Right Hand */}
            <div className="absolute right-0 bottom-0 w-40 h-56 bg-[#efb081] rounded-t-full -rotate-[25deg]"></div>

            {/* Money */}
            <div className="w-44 h-24 bg-[#c58ac4] rotate-45 rounded-xl flex items-center justify-center shadow-lg z-10">
              <div className="w-16 h-16 rounded-full bg-[#a04ca1] flex items-center justify-center text-white text-3xl font-bold">
                ₹
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="fixed left-5 bottom-5 flex flex-col gap-3">
        <button className="bg-[#59d66b] p-4 rounded-lg shadow-lg">
          <Phone className="text-white w-8 h-8" />
        </button>

        <button className="bg-white p-4 rounded-lg shadow-lg">
          <MessageCircle className="text-[#27d366] w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default Referral;
