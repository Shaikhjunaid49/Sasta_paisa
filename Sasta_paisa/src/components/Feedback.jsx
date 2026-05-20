import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const feedback = [
  {
    id: 1,
    name: "hitesh ahire",
    text: "sastapaisa india pvt ltd is the india's no 1 corporate dsa. getting the highest pay-outs and very positively energetic support by backend team.",
  },

  {
    id: 2,
    name: "aarav sharma",
    text: "very smooth loan process and quick response from the team. the staff is highly professional and supportive throughout the process.",
  },

  {
    id: 3,
    name: "priya verma",
    text: "amazing experience with sastapaisa. minimal documentation and very fast approval process. highly recommended.",
  },

  {
    id: 4,
    name: "shreyas y",
    text: "our experience with sastapaisa has always been par excellence. their team is highly professional and the response time is very fast.",
  },
];

function Feedback() {
  const [current, setCurrent] = useState(0);

  // next slide
  const nextSlide = () => {
    setCurrent((prev) => (prev === feedback.length - 1 ? 0 : prev + 1));
  };

  // previous slide
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? feedback.length - 1 : prev - 1));
  };

  // previous index
  const prevIndex = current === 0 ? feedback.length - 1 : current - 1;

  // next index
  const nextIndex = current === feedback.length - 1 ? 0 : current + 1;

  return (
    <section className="w-full bg-[#f5f5f5] py-16 overflow-hidden">
      {/* heading */}
      <h2 className="text-center text-[58px] font-bold text-[#13295b] mb-14">
        What Say Our Customers!
      </h2>

      {/* controls */}
      <div className="flex items-center justify-center gap-16 mb-16">
        {/* left button */}
        <button
          onClick={prevSlide}
          className="text-[#96b937] hover:scale-110 transition"
        >
          <ArrowLeft size={52} strokeWidth={1.5} />
        </button>

        {/* quote icon */}
        <div className="w-36 h-36 rounded-full bg-[#96b937] flex items-center justify-center">
          <Quote size={70} className="text-white" strokeWidth={2.5} />
        </div>

        {/* right button */}
        <button
          onClick={nextSlide}
          className="text-[#96b937] hover:scale-110 transition"
        >
          <ArrowRight size={52} strokeWidth={1.5} />
        </button>
      </div>

      {/* carousel */}
      <div className="relative container mx-auto h-[260px] flex items-center justify-center overflow-hidden">
        {/* previous feedback */}
        <div className="absolute left-[-120px] w-[558px] opacity-20 scale-[0.92]">
          <div className="text-center">
            <div className="bg-[#eff5ff] rounded text-center px-6 py-5">
              {" "}
              <p className="text-[16px] text-gray-600 leading-[2.2]">
                {feedback[prevIndex].text}
              </p>
              <h3 className="text-[20px] font-bold text-[#13295b] mt-6">
                {feedback[prevIndex].name}
              </h3>
            </div>
          </div>
        </div>

        {/* active feedback */}
        <div className="relative z-10 w-[558px]">
          <div className="text-center">
            <div className="bg-[#96b937] rounded text-center px-6 py-5 shadow-md">
              <p className="text-white text-[18px] leading-[2.2]">
                {feedback[current].text}
              </p>

              <h3 className="text-white text-[28px] font-bold mt-6">
                {feedback[current].name}
              </h3>
            </div>
          </div>
        </div>

        {/* next feedback */}
        <div className="absolute right-[-120px] w-[558px] opacity-20 scale-[0.92]">
          <div className="text-center">
            <div className="bg-[#eff5ff] rounded text-center p-6">
              <p className="text-[16px] text-gray-600 leading-[2.2]">
                {feedback[nextIndex].text}
              </p>

              <h3 className="text-[20px] font-bold text-[#13295b] mt-6">
                {feedback[nextIndex].name}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feedback;
