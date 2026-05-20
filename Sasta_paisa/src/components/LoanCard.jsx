function LoanCard({
  image,
  title,
  description,
  showButton = false,
  height = "h-[220px]",
}) {
  return (
    <div
      className={`w-full max-w-[300px] bg-[#EEFFD6] border border-[#dbe9bf] rounded-md p-6 ${height} hover:shadow-md transition duration-300`}
    >
      
      {/* ICON */}
      <div className="flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-[110px] object-contain"
        />
      </div>

      {/* TITLE */}
      <h2 className="text-[20px] font-bold text-center text-[#122b63] mt-5">
        {title}
      </h2>

      {/* DESCRIPTION */}
      {description && (
        <p className="text-gray-600 text-sm text-center leading-7 mt-4">
          {description}
        </p>
      )}

      {/* BUTTON */}
      {showButton && (
        <div className="flex justify-center">
          <button className="w-10 h-10 rounded-full bg-white mt-6 flex items-center justify-center text-[#95b92f] text-2xl shadow-sm hover:scale-105 transition">
            +
          </button>
        </div>
      )}
    </div>
  );
}

export default LoanCard;