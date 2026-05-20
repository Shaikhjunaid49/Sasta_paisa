function LoanCard({
  image,
  title,
  description,
  showButton = false,
  height = "h-[220px]",
}) {
  return (
    <div
      className={`w-full max-w-[300px] bg-[#EEFFD6] border border-[#e7f0c7] rounded-lg p-6 ${height} hover:shadow-lg transition duration-300`}
    >
      {/* ICON */}
      <div className="w-20 h-20 rounded-full bg-lime-400 flex items-center justify-center mx-auto">
        <img src={image} alt={title} className="w-10 h-10 object-contain" />
      </div>

      {/* TITLE */}
      <h2 className="text-2xl font-semibold text-center text-[#1e2b4f] mt-5">
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
        <button className="w-10 h-10 rounded-full bg-white mt-6 flex items-center justify-center text-lime-500 text-2xl shadow-md hover:scale-110 transition">
          +
        </button>
      )}
    </div>
  );
}
 
export default LoanCard;
