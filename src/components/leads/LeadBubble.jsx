import React from "react";
import { formatDate } from "../../utils/dateNow";

const LeadBubble = ({ leads, isLast, isSelected, onClick }) => {
  const isQualified =
    leads.nivel_intencao === "quente" || leads.nivel_intencao === "morno";

  return (
    <div className="relative flex gap-4 pl-6" onClick={onClick}>
      {/* linha vertical */}
      {!isLast && (
        <span className="absolute left-1.75 top-5 w-px -bottom-3 bg-gray-200" />
      )}

      {/* bolinha de status */}
      <span
        className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border shrink-0 transition-all duration-300
          ${
            isSelected
              ? "bg-emerald-500 border-emerald-500"
              : "bg-white ring-2 border-none ring-emerald-100 -scale-60"
          }`}
      />

      {/* card */}
      <div
        className={`flex-1 shadow px-3 py-2 rounded-2xl mb-3 cursor-pointer transition-all duration-300
          ${
            isSelected
              ? "bg-linear-to-br from-emerald-500 to-emerald-600 text-white"
              : "bg-white/30 backdrop-blur-2xl"
          }`}
      >
        {/* tag */}
        <div className="flex items-center gap-2">
          <span
            className={`inline-flex montserrat items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full capitalize
              ${
                isSelected
                  ? "text-white/80"
                  : isQualified
                    ? "text-green-600"
                    : "text-red-500"
              }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full
                ${
                  isSelected
                    ? "bg-white/60"
                    : isQualified
                      ? "bg-green-400"
                      : "bg-red-400"
                }`}
            />
            {isQualified ? "Qualificado" : "Não Qualificado"}
          </span>
        </div>

        {/* resumo */}
        <p
          className={`text-sm leading-relaxed transition-all duration-300
            ${isSelected ? "text-white" : "text-gray-700 line-clamp-2"}`}
        >
          {leads.resumo}
        </p>

        {/* footer */}
        <div className="flex items-end justify-between pt-1">
          <div>
            <span
              className={`block text-[10px] uppercase tracking-wide
                ${isSelected ? "text-white/60" : "text-gray-500"}`}
            >
              usuário
            </span>
            <span
              className={`text-sm font-bold font-mono
                ${isSelected ? "text-white" : "text-gray-800"}`}
            >
              {leads.userID}
            </span>
          </div>
          <span
            className={`text-xs ${isSelected ? "text-white/70" : "text-gray-500"}`}
          >
            {formatDate(leads.data)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LeadBubble;
