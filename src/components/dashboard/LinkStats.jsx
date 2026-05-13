import React from "react";
import { links } from "../../config/visitLinks";
import { FingerTouch } from "@boxicons/react";

const LinkStats = () => {
  return (
    <div>
      <p className="px-2 my-1 ml-4 text-xs raleway-bold text-[#212121]/70">
        Links
      </p>
      <div className="grid grid-cols-2 gap-0.5 mx-4">
        {links.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-200 rounded-3xl px-3 py-3"
          >
            <div className="flex flex-col gap-0.5 justify-around h-30 overflow-hidden">
              <div className="flex flex-col text-xs">
                <span className="text-4xl mb-1">{item.icon}</span>
                <span className="montserrat text-nowrap">{`${item.title}`}</span>
                {/* <span className="opacity-50">{item.desc}</span> */}
              </div>
              <div className="flex montserrat text-md gap-1 opacity-90">
                <FingerTouch color="#9f9f9f" size="sm" />
                <span>34 clicks</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkStats;
