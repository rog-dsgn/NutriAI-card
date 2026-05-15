import React from "react";
import { formatDate } from "../../utils/dateNow";

const LeadBubble = ({ leads }) => {
  return (
    <li className="bg-white/30 shadow backdrop-blur-2xl px-3 py-2 rounded-2xl">
      {/* tag */}
      <div className="flex items-center gap-2">
        <span
          className={`inline-flex montserrat items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full capitalize text-green-600`}
        >
          <span className={`w-1.5 h-1.5 rounded-full bg-green-400`} />
          {leads.nivel_intencao === "quente" || leads.nivel_intencao === "morno"
            ? "Qualificado"
            : "Não Qualificado"}
        </span>
      </div>
      {/* resumo */}
      <p className="text-sm text-gray-700 leading-relaxed line-clamp-2">
        {leads.resumo}
      </p>
      {/* footer */}
      <div className="flex items-end justify-between pt-1">
        <div>
          <span className="block text-[10px] text-gray-500 uppercase tracking-wide">
            usuário
          </span>
          <span className="text-sm font-bold text-gray-800 font-mono">
            {leads.userID}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">
            {formatDate(leads.data)}
          </span>
        </div>
      </div>
    </li>
  );
};

export default LeadBubble;
