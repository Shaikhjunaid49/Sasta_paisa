import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="bg-[#f7f7f7] min-h-screen py-16 px-4 md:px-10">
      {/* Top Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-16">
        {/* Address */}
        <div className="bg-[#edf7d7] rounded-md p-8 flex items-center gap-5 shadow-sm">
          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#9ac52e] text-xl">
            <FaMapMarkerAlt />
          </div>

          <div>
            <p className="text-gray-500 text-sm mb-1">Address</p>

            <h3 className="font-bold text-[#0d2b5c] leading-7">
              Kamala Arcade, Office No 307, 3rd Floor,
              Jangali Maharaj Rd, Shivajinagar,
              Pune, Maharashtra 411004
            </h3>
          </div>
        </div>

        {/* Phone */}
        <div className="bg-[#edf7d7] rounded-md p-8 flex items-center gap-5 shadow-sm">
          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#9ac52e] text-xl">
            <FaPhoneAlt />
          </div>

          <div>
            <p className="text-gray-500 text-sm mb-1">Call Us Now</p>

            <h3 className="font-bold text-[#0d2b5c] text-xl">
              +91 72228 88255
            </h3>
          </div>
        </div>

        {/* Email */}
        <div className="bg-[#edf7d7] rounded-md p-8 flex items-center gap-5 shadow-sm">
          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#9ac52e] text-xl">
            <FaEnvelope />
          </div>

          <div>
            <p className="text-gray-500 text-sm mb-1">Mail Us Now</p>

            <h3 className="font-bold text-[#0d2b5c] text-lg">
              manoj.a@sastapaisa.com
            </h3>
          </div>
        </div>
      </div>

      {/* Contact Form + Map */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left */}
        <div className="bg-[#edf7d7] p-8 rounded-md">
          <button className="border border-[#9ac52e] text-[#0d2b5c] px-5 py-1 rounded-full text-sm mb-5">
            Contact Us
          </button>

          <h2 className="text-5xl font-bold text-[#1B2C51] leading-tight mb-8">
            Have Any Query? Please Contact Us!
          </h2>

          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-[#9ac52e] rounded px-4 py-3 outline-none bg-white"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="border border-[#9ac52e] rounded px-4 py-3 outline-none bg-white"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Mobile Number"
                className="border border-[#9ac52e] rounded px-4 py-3 outline-none bg-white"
              />

              <input
                type="text"
                placeholder="Subject"
                className="border border-[#9ac52e] rounded px-4 py-3 outline-none bg-white"
              />
            </div>

            <textarea
              rows="5"
              placeholder="Message"
              className="w-full border border-[#9ac52e] rounded px-4 py-3 outline-none bg-white"
            ></textarea>

            <button className="w-full bg-[#9ac52e] hover:bg-[#88b225] text-white font-semibold py-4 rounded transition">
              Send Message
            </button>
          </form>
        </div>

        {/* Map */}
        <div className="w-full h-full">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18..."
            className="w-full h-[620px] rounded-md border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;