import React from "react";

const Card = ({ value, detail }) => {
  return (
    <div className="bg-white rounded-xl shadow-2xs border border-[#e0e0e0] md:py-8 px-4 py-4 space-y-2">
      <p className="text-[#212121] font-medium text-2xl">{value}</p>
      <p className="text-xs text-[#6f6f6f]">{detail}</p>
    </div>
  );
};

export default Card;
