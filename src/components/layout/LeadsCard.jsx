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
      <p className="text-sm font-medium text-[#212121]">{lead.objetivo}</p>
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

export const LeadCard = ({ lead }) => (
  <div className="border rounded-lg p-4 mb-3">
    <div className="flex justify-between items-center mb-2">
      <span className="text-xs text-gray-400">{lead.data}</span>
      <span
        className={`text-xs px-2 py-1 rounded-full ${
          lead.nivel_intencao === "quente"
            ? "bg-red-100 text-red-600"
            : "bg-yellow-100 text-yellow-600"
        }`}
      >
        {lead.nivel_intencao}
      </span>
    </div>
    <p className="text-sm text-gray-700 mb-2">{lead.resumo}</p>
    <div className="flex gap-2 text-xs text-gray-500">
      <span>🎯 {lead.objetivo}</span>
      <span>📍 {lead.preferencia_atendimento}</span>
    </div>
  </div>
);
