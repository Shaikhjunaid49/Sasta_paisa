import { useState } from "react";
import logo from "../assets/logo.png";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaRegClock,
} from "react-icons/fa";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loanOpen, setLoanOpen] = useState(false);

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="hidden lg:flex justify-between items-center bg-[#d8efb5] px-14 py-1 text-[16px]">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-3 text-[#424242]">
          <FaRegClock className="text-[#9ac43c] text-[18px]" />
          <p>Mon - Fri : 09.00 AM - 09.00 PM</p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-5">
          {/* PHONE */}
          <div className="flex items-center gap-3 text-[#424242]">
            <FaPhoneAlt className="text-[#9ac43c] text-[15px]" />
            <p>+91 72228 88255</p>
          </div>

          {/* FACEBOOK */}
          <a
            href="/"
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#9ac43c] hover:bg-[#9ac43c] hover:text-white transition duration-300"
          >
            <FaFacebookF size={13} />
          </a>

          {/* LINKEDIN */}
          <a
            href="/"
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#9ac43c] hover:bg-[#9ac43c] hover:text-white transition duration-300"
          >
            <FaLinkedinIn size={13} />
          </a>

          {/* INSTAGRAM */}
          <a
            href="/"
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#9ac43c] hover:bg-[#9ac43c] hover:text-white transition duration-300"
          >
            <FaInstagram size={13} />
          </a>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="w-full bg-white border-b border-gray-200">
        <div className="flex items-center h-[95px] px-6">
          {/* ================= LOGO ================= */}
          <div className="hidden lg:flex items-center justify-start w-[320px]">
            <img
              src={logo}
              alt="Logo"
              className="w-[240px] object-contain"
            />
          </div>

          {/* ================= MENU ================= */}
          <div className="hidden lg:flex flex-1 justify-center items-center gap-10 text-[16px] font-semibold text-black">
            {/* HOME */}
            <a href="/" className="hover:text-[#9ac43c] transition">
              HOME
            </a>

            {/* LOANS */}
            <div className="relative group">
              <button className="flex items-center gap-2 hover:text-[#9ac43c] transition">
                LOANS
                <span className="text-[11px] mt-[2px]">▼</span>
              </button>

              {/* DROPDOWN */}
              <div className="absolute hidden group-hover:block top-10 left-0 bg-white shadow-xl rounded-md w-60 py-3 z-50">
                {[
                  "Personal Loan",
                  "Business Loan",
                  "Home Loan",
                  "Mortgage Loan",
                  "Credit Card",
                ].map((item) => (
                  <p
                    key={item}
                    className="px-5 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>

            {/* ABOUT */}
            <div className="relative group">
              <button className="flex items-center gap-2 hover:text-[#9ac43c] transition">
                ABOUT US
                <span className="text-[11px] mt-[2px]">▼</span>
              </button>
            </div>

            {/* EMI */}
            <a
              href="/"
              className="text-center leading-6 hover:text-[#9ac43c] transition"
            >
              EMI <br />
              CALCULATOR
            </a>

            {/* FRANCHISE */}
            <div className="relative group">
              <button className="flex items-center gap-2 hover:text-[#9ac43c] transition">
                FRANCHISE
                <span className="text-[11px] mt-[2px]">▼</span>
              </button>
            </div>

            {/* BLOG */}
            <a href="/" className="hover:text-[#9ac43c] transition">
              BLOG
            </a>

            {/* CONTACT */}
            <a
              href="/"
              className="text-center leading-6 hover:text-[#9ac43c] transition"
            >
              CONTACT <br />
              US
            </a>
          </div>

          {/* ================= APPLY BUTTON ================= */}
          <div className="hidden lg:flex h-full justify-end w-[260px]">
            <button className="flex items-center justify-center gap-4 bg-[#9ac43c] text-white w-[220px] h-full text-[22px] font-medium hover:bg-[#86ae2f] transition">
              Apply
              <span className="text-[30px]">→</span>
            </button>
          </div>

          {/* ================= MOBILE HEADER ================= */}
          <div className="flex lg:hidden items-center justify-between w-full">
            {/* MOBILE LOGO */}
            <img
              src={logo}
              alt="Logo"
              className="w-[180px] object-contain"
            />

            {/* MOBILE MENU BUTTON */}
            <button
              className="text-3xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {menuOpen && (
          <div className="lg:hidden bg-[#f5f5f5] px-6 py-5 space-y-5 text-lg font-medium">
            {/* HOME */}
            <a href="/" className="block">
              HOME
            </a>

            {/* MOBILE LOAN DROPDOWN */}
            <div>
              <button
                onClick={() => setLoanOpen(!loanOpen)}
                className="flex items-center gap-2"
              >
                LOANS ▼
              </button>

              {loanOpen && (
                <div className="bg-white rounded-md shadow-md mt-3 p-4 space-y-3">
                  <p>Personal Loan</p>
                  <p>Business Loan</p>
                  <p>Home Loan</p>
                  <p>Mortgage Loan</p>
                  <p>Credit Card</p>
                </div>
              )}
            </div>

            {/* ABOUT */}
            <a href="/" className="block">
              ABOUT US
            </a>

            {/* EMI */}
            <a href="/" className="block">
              EMI CALCULATOR
            </a>

            {/* FRANCHISE */}
            <a href="/" className="block">
              FRANCHISE
            </a>

            {/* BLOG */}
            <a href="/" className="block">
              BLOG
            </a>

            {/* CONTACT */}
            <a href="/" className="block">
              CONTACT US
            </a>
          </div>
        )}
      </nav>
    </>
  );
}

export default Nav;