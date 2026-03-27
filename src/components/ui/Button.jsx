import React from "react";
import { ArrowRightStroke } from "@boxicons/react";

const Button = ({ click }) => {
  return (
    <button
      onClick={click}
      className="relative flex flex-row rounded-xl py-3 px-3 gap-2 items-center shadow-md bg-linear-to-br from-emerald-600 to-green-500 text-white w-full text-left cursor-pointer hover:bg-linear-to-bl active:bg-linear-to-r hover:scale-105 active:scale-95 transition-all duration-300"
    >
      {/* btn badge */}
      <div className="absolute rounded-full -top-3 right-4 z-1 bg-[#ff7043] text-[0.7rem] px-3 py-1">
        <span>✨ NOVO</span>
      </div>

      {/* content */}
      <figure>
        <img
          src="../../assets/salad.png"
          alt="diet-btn"
          className="w-10 md:w-12 aspect-square"
        />
      </figure>
      <div className="flex flex-col flex-1 px-4">
        <span>Simule sua dieta com IA</span>
        <span className="text-[0.7rem] mt-1 text-white/70">
          Descubra seu plano ideal · Grátis
        </span>
      </div>
      <div>
        <ArrowRightStroke />
      </div>
    </button>
  );
};

export default Button;
