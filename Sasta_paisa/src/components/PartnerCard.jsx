function PartnerCard({ image, name }) {
  return (
    <div className="bg-white border border-[#d9d9d9] rounded-lg shadow-md h-[125px] flex items-center justify-center hover:shadow-lg transition duration-300">

      <img
        src={image}
        alt={name}
        className="m-4 w-[138px] h-auto object-contain"
      />

    </div>
  );
}

export default PartnerCard;