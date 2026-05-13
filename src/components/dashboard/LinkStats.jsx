import React from "react";
import { links } from "../../config/visitLinks";
import { FingerTouch } from "@boxicons/react";

const LinkStats = () => {
  return (
    <div>
      <p className="px-2 my-1 text-xs raleway-bold text-[#212121]/70">Links</p>
      <div className="flex flex-row gap-0.5 overflow-x-auto">
        {links.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-200 rounded-3xl px-4 py-4"
          >
            <div className="flex flex-col gap-0.5 px-2 w-40 h-25 overflow-hidden">
              <div className="flex flex-col flex-1 text-xs">
                <span className="raleway-bold text-nowrap">{`${item.icon} ${item.title}`}</span>
                <span className="opacity-50">{item.desc}</span>
              </div>
              <div className="flex montserrat text-4xl">
                <span>34</span>
                <FingerTouch color="#9f9f9f" size="xs" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkStats;
