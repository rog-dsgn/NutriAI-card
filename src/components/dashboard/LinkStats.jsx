import React from "react";
import { links } from "../../config/visitLinks";

const LinkStats = () => {
  return (
    <>
      <p className="px-2 my-1 text-xs raleway-bold text-[#212121]/70">Links</p>
      {links.map((item, index) => (
        <div
          key={index}
          className="bg-gray-50 border border-gray-200 rounded-3xl px-4 py-4"
        >
          <div className="flex flex-row gap-0.5">
            <span>{item.icon}</span>
            <div className="flex flex-col">
              <span>{item.title}</span>
              <span className="text-xs opacity-50">{item.desc}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default LinkStats;
