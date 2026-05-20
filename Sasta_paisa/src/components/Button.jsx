function CircleButton() {
  return (
    <button
      className="
        flex items-center
        w-10 group-hover:w-40
        h-10
        overflow-hidden
        rounded-full
        bg-white
        transition-all
        duration-500
        ease-in-out
        shadow-sm
        pl-3
      "
    >
      {/* icon */}
      <span className="text-[#95b92f] text-2xl font-semibold">
        +
      </span>

      <span
        className="
          ml-3
          whitespace-nowrap
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-300
          text-[#122b63]
          font-medium
          text-sm
        "
      >
        Read More
      </span>
    </button>
  );
}

export default CircleButton;