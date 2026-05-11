import { formatDate } from "../../utils/dateNow";

export const ChatCard = ({ lead }) => {
  const styleTag = {
    quente: "bg-red-100 text-red-600 border border-red-200",
    morno: "bg-yellow-100 text-yellow-600 border border-yellow-200",
    frio: "bg-blue-100 text-blue-600 border border-blue-200",
  };

  return (
    <div className="w-full bg-white border border-[#e0e0e0] rounded-2xl flex flex-col shadow-2xs py-4 px-3 gap-2">
      <span
        className={`text-xs w-fit px-2 border rounded-full 
          ${styleTag[lead.nivel_intencao]}
          `}
      >
        {lead.nivel_intencao}
      </span>
      <p className="text-sm font-medium text-[#212121]">{lead.resumo}</p>
      <div className="flex flex-row justify-between items-end">
        <div className="flex flex-col">
          <span className="text-xs text-gray-500">usuário:</span>
          <p className="font-semibold text-slate-800 font-mono">{lead.id}</p>
        </div>

        <span className="text-sm font-medium text-gray-500">
          {formatDate(lead.data)}
        </span>
      </div>
    </div>
  );
};

const TAG = {
  quente: {
    label: "Quente",
    wrapper: "bg-orange-50 text-orange-600",
    dot: "bg-orange-400",
  },
  morno: {
    label: "Morno",
    wrapper: "bg-yellow-50 text-yellow-600",
    dot: "bg-yellow-400",
  },
  frio: {
    label: "Frio",
    wrapper: "bg-blue-50 text-blue-500",
    dot: "bg-blue-400",
  },
};

export const LeadCard = ({ lead }) => {
  const t = TAG[lead.nivel_intencao] ?? TAG.frio;

  return (
    <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col gap-3">
      {/* tag */}
      <div className="flex items-center gap-2">
        <span
          className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full capitalize ${t.wrapper}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${t.dot}`} />
          {t.label}
        </span>
      </div>

      {/* resumo */}
      <p className="text-sm text-gray-700 leading-relaxed">{lead.resumo}</p>

      {/* footer */}
      <div className="flex items-center justify-between pt-1 border-t border-gray-50">
        <div>
          <span className="block text-[10px] text-gray-500 uppercase tracking-wide mb-0.5">
            usuário
          </span>
          <span className="text-sm font-bold text-gray-800 font-mono">
            {lead.userID}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">{formatDate(lead.data)}</span>
        </div>
      </div>
    </div>
  );
};
