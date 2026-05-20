import {
  ShieldCheck,
  FileText,
  Clock3,
  BadgeIndianRupee,
} from "lucide-react";

import whyChooseImage from "/src/assets/why-choose.jpeg";

const features = [
  {
    icon: <BadgeIndianRupee size={22} strokeWidth={2.2} />,
    title: "Quick Disbursement",
  },
  {
    icon: <FileText size={22} strokeWidth={2.2} />,
    title: "Minimum Documentation",
  },
  {
    icon: <ShieldCheck size={22} strokeWidth={2.2} />,
    title: "Safe & Secure",
  },
  {
    icon: <Clock3 size={22} strokeWidth={2.2} />,
    title: "Doorstep Service",
  },
];

function WhyChooseUs() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[518px]">

        {/* LEFT SIDE */}
        <div className="bg-[#95b92f] py-12 px-16 text-white h-full flex flex-col justify-center">

          {/* HEADING */}
          <h2 className="text-[64px] font-bold leading-tight mb-8">
            Why Choose Us
          </h2>

          {/* DESCRIPTION */}
          <p className="text-[18px] leading-[2] text-white/95 max-w-[640px] mb-14">
            SastaPaisa guarantees each client the best loan options for
            their specific needs. Our team works closely with each client
            to find an ideal financial plan for your specific needs.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-2 gap-y-10 gap-x-8">

            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-5"
              >

                {/* ICON */}
                <div className="w-[68px] h-[68px] rounded-full bg-[#dceab9] flex items-center justify-center text-[#95b92f] shrink-0">
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-[20px] font-bold leading-snug">
                  {item.title}
                </h3>

              </div>
            ))}

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-[#f3f3f3] h-full flex items-center justify-center">

          <img
            src={whyChooseImage}
            alt="Sasta Paisa Image"
            className="w-full h-full max-w-[518px] max-h-[518px] object-contain"
          />

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;