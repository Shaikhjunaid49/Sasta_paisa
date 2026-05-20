// Nav.jsx
import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loanOpen, setLoanOpen] = useState(false);
  const [franchiseOpen, setFranchiseOpen] = useState(false);

  return (
    <>
      {/* TOP BAR */}
      <div className="hidden lg:flex justify-between items-center bg-[#d8efb5] px-10 py-2 text-sm">
        <p>⏰ Mon - Fri : 09.00 AM - 09.00 PM</p>

        <div className="flex items-center gap-5">
          <p>📞 +91 72228 88255</p>

          <div className="flex items-center gap-4">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
            >
              <FaFacebookF size={14} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-blue-700 hover:text-white transition"
            >
              <FaLinkedinIn size={14} />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-pink-600 hover:text-white transition"
            >
              <FaInstagram size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="w-full border-b shadow-sm bg-white">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-5 lg:px-10 py-4">
          {/* LOGO */}
          <img src={logo} alt="logo" className="h-8 lg:h-12" />

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8 font-medium">
            <a href="/">HOME</a>

            {/* LOANS DROPDOWN */}
            <div
              className="re
            lative group"
            >
              <button className="flex items-center gap-1">LOANS ▼</button>

              <div className="absolute hidden group-hover:block top-8 left-0 bg-white shadow-lg rounded-md w-60 py-3 z-50">
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

            <a href="/">ABOUT US</a>
            <a href="/">EMI CALCULATOR</a>
            <a href="/">FRANCHISE</a>
            <a href="/">BLOG</a>
            <a href="/">CONTACT US</a>
          </div>

          {/* APPLY BUTTON */}
          <button className="hidden lg:block bg-[#9ac43c] text-white px-8 py-4 font-semibold hover:bg-[#86ae2f]">
            Apply →
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="lg:hidden bg-[#f5f5f5] px-6 py-5 space-y-5 text-lg font-medium">
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

            <a href="/" className="block">
              ABOUT US
            </a>

            <a href="/" className="block">
              EMI CALCULATOR
            </a>

            <a href="/" className="block">
              FRANCHISE
            </a>

            <a href="/" className="block">
              BLOG
            </a>

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
