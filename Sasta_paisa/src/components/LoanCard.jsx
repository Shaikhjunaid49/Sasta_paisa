function LoanCard({ image, title }) {
  return (
    <div className="bg-[#f7faea] border border-[#edf3d1] rounded-xl p-8 flex flex-col items-center justify-center gap-5 hover:shadow-lg transition duration-300 cursor-pointer">
      
      {/* ICON */}
      <div className="w-24 h-24 bg-lime-400 rounded-full flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-12 h-12 object-contain"
        />
      </div>

      {/* TITLE */}
      <h2 className="text-xl font-semibold text-gray-800 text-center">
        {title}
      </h2>
    </div>
  );
}

export default LoanCard;