import Button from "./Button";

function LoanCard({
  image,
  title,
  description,
  showButton = false,
  height = "h-[220px]",
}) {
  return (
    <div
      className={`group w-full max-w-[300px] bg-[#EEFFD6] border border-[#dbe9bf] rounded-md p-6 ${height} hover:shadow-md transition duration-300`}
    >
      {/* icon */}
      <div className="flex items-center justify-center">
        <img src={image} alt={title} className="w-[110px] object-contain" />
      </div>

      {/* title */}
      <h2 className="text-[20px] font-bold text-center text-[#122b63] mt-5">
        {title}
      </h2>

      {/* description */}
      {description && (
        <p className="text-gray-600 text-sm text-center leading-7 mt-4">
          {description}
        </p>
      )}

      {/* Button */}
      {showButton && (
        <div className="flex justify-start mt-6">
          <Button />
        </div>
      )}
    </div>
  );
}

export default LoanCard;
