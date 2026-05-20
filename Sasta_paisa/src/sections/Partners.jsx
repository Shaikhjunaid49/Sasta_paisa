import PartnerCard from "../components/PartnerCard";

// logos
import sbi from "/src/assets/BankPartners/SBI.jpeg";
import kotak from "/src/assets/BankPartners/kotak.jpeg";
import induslandB from "/src/assets/BankPartners/InduslandB.jpeg";
import idfc from "/src/assets/BankPartners/IDFC.jpeg";
import icici from "/src/assets/BankPartners/ICIC.jpeg";
import housingB from "/src/assets/BankPartners/HousingB.jpeg";
import hdfcH from "/src/assets/BankPartners/HDFCH.jpeg";
import hdfcB from "/src/assets/BankPartners/HDFCB.jpeg";
import citiB from "/src/assets/BankPartners/CitiB.jpeg";
import bankofB from "/src/assets/BankPartners/BanlofB.jpeg";
import bajajF from "/src/assets/BankPartners/BajajF.jpeg";

const partners = [
  {
    id: 1,
    image: sbi,
    name: "sbi",
  },

  {
    id: 2,
    image: bajajF,
    name: "bajaj finserv",
  },

  {
    id: 3,
    image: housingB,
    name: "bajaj housing",
  },

  {
    id: 4,
    image: bankofB,
    name: "bank of baroda",
  },

  {
    id: 5,
    image: hdfcB,
    name: "hdfc bank",
  },

  {
    id: 6,
    image: hdfcH,
    name: "hdfc home loan",
  },

  {
    id: 7,
    image: icici,
    name: "icici bank",
  },

  {
    id: 8,
    image: idfc,
    name: "idfc first bank",
  },

  {
    id: 9,
    image: induslandB,
    name: "indusland bank",
  },

  {
    id: 10,
    image: kotak,
    name: "kotak bank",
  },

  {
    id: 11,
    image: citiB,
    name: "citibank",
  },
  {
    id: 12,
    image: citiB,
    name: "citibank",
  },
];

function Partners() {
  return (
    <section className="container-xxl py-12 bg-[#f5f5f5]">

      {/* heading */}
      <h2 className="text-center text-[58px] font-bold text-[#13295b] mb-14">
        Our Partners
      </h2>

      {/* cards */}
      <div className="max-w-[1270px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 px-3">

        {partners.map((partner) => (
          <PartnerCard
            key={partner.id}
            image={partner.image}
            name={partner.name}
          />
        ))}

      </div>
    </section>
  );
}

export default Partners;