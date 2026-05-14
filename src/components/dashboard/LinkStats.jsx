import React from "react";
import { links } from "../../config/visitLinks";
import { CursorClick } from "@boxicons/react";

const LinkStats = () => {
  return (
    <>
      <p className="px-2 my-1 mt-4 ml-4 text-xs montserrat text-[#212121]/70">
        Clicks nos Links
      </p>
      <div className="grid grid-cols-2 gap-1 mx-4">
        {links.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-200 rounded-3xl p-3 shadow-2xs"
          >
            <div className="flex flex-col gap-0.5 justify-around items-center  h-30 overflow-hidden">
              <div className="flex flex-col gap-1 text-xs text-center">
                <span className="text-4xl mb-1">{item.icon}</span>
                <span className="text-xs text-nowrap">{`${item.title}`}</span>
                {/* <span className="opacity-50">{item.desc}</span> */}
              </div>
              <div className="flex montserrat bg-emerald-500 text-white rounded-full px-3 py-1 text-xs gap-0.5">
                <CursorClick color="#e0e0e0" size="xs" />
                <span>34</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LinkStats;
