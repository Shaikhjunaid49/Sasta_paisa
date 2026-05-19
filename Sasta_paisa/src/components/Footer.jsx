import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronRight,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6 px-5 sm:px-8 md:px-16">
      {/* Top Footer */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 border-b border-gray-700 pb-10">
        
        {/* Address Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-5">
            Address
          </h2>

          <div className="space-y-4 text-gray-300 text-sm md:text-base">
            
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-lg shrink-0" />
              <p className="leading-6">
                Kamala Arcade, Office No 307, 3rd Floor,
                Jangali Maharaj Rd, Shivajinagar,
                Pune, Maharashtra 411004
              </p>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="shrink-0" />
              <p>+91 72228 88255</p>
            </div>

            <div className="flex items-center gap-3 break-all">
              <FaEnvelope className="shrink-0" />
              <p>manoj.a@sastapaisa.com</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[FaFacebookF, FaYoutube, FaLinkedinIn].map(
              (Icon, index) => (
                <div
                  key={index}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition duration-300 cursor-pointer"
                >
                  <Icon />
                </div>
              )
            )}
          </div>
        </div>

        {/* Loans Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-5">
            Loans
          </h2>

          <ul className="space-y-3 text-gray-300 text-sm md:text-base">
            {[
              "Personal Loan",
              "Business Loan",
              "Home Loan",
              "Mortgage Loan",
              "Used Car Loan",
              "Doctor Loan",
              "Credit Card",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2 hover:text-white transition cursor-pointer"
              >
                <FaChevronRight className="text-xs" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-5">
            Quick Links
          </h2>

          <ul className="space-y-3 text-gray-300 text-sm md:text-base">
            {[
              "About Us",
              "Contact Us",
              "EMI Calculator",
              "Blog",
              "Privacy Policy",
              "Terms & Conditions",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2 hover:text-white transition cursor-pointer"
              >
                <FaChevronRight className="text-xs" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center pt-6 text-gray-400 text-xs sm:text-sm">
        <p>© 2026 Sasta Paisa, All Rights Reserved.</p>

        <p className="mt-2">
          Designed & Developed by{" "}
          <span className="text-white underline cursor-pointer">
            BrandsBees
          </span>
        </p>
      </div>
    </footer>
  );
}