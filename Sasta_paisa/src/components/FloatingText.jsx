function FloatingText() {
  const items = [
    "Low Interest Rates",
    "Minimum Documentation",
    "Safe & Secure",
    "Doorstep Service",
    "Fast Processing",
    "Fast Loan Disbursal",
    "No Foreclosure Charges",
    "Flexible EMI",
  ];

  return (
    <section className="w-full bg-[#96b937] overflow-hidden py-4">
      
      {/* Marquee Feature */}
      <div className="flex whitespace-nowrap animate-marquee">
        
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center mx-8 text-white font-medium text-lg"
          >
            <span>{item}</span>

            <div className="w-2 h-2 bg-white rounded-full ml-8"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FloatingText;