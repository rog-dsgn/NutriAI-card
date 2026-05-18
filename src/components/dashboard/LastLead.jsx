import { formatDate } from "../../utils/dateNow";

const TAG = {
  quente: {
    label: "Qualificado",
    dot: "bg-emerald-400",
    text: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  morno: {
    label: "Qualificado",
    dot: "bg-emerald-400",
    text: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  frio: {
    label: "Não qualificado",
    dot: "bg-red-400",
    text: "text-red-500",
    bg: "bg-red-50",
  },
};

const LastLead = ({ leads = [] }) => {
  const lead = leads[0]; // mais recente

  return (
    <>
      <p className="ml-4 my-2 text-xs text-[#212121]/40">Último lead</p>
      <div className="mx-4 mb-4">
        {!lead ? (
          <div className="bg-white shadow-xs rounded-2xl px-6 py-4">
            <p className="text-sm text-gray-400 text-center">
              Nenhum lead recebido ainda
            </p>
          </div>
        ) : (
          <div className="bg-white shadow-xs rounded-2xl px-4 py-3 flex flex-col gap-2">
            {/* tag + data */}
            <div className="flex items-center justify-between">
              <span
                className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full
                  ${TAG[lead.nivel_intencao]?.bg ?? "bg-gray-100"}
                  ${TAG[lead.nivel_intencao]?.text ?? "text-gray-500"}`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${TAG[lead.nivel_intencao]?.dot ?? "bg-gray-400"}`}
                />
                {TAG[lead.nivel_intencao]?.label ?? "Indefinido"}
              </span>
              <span className="text-xs text-gray-400">
                {formatDate(lead.data)}
              </span>
            </div>

            {/* resumo */}
            <p className="text-sm text-gray-700 leading-relaxed line-clamp-2">
              {lead.resumo}
            </p>

            {/* footer */}
            <div className="flex items-center justify-between pt-1 border-t border-gray-50">
              <div>
                <span className="block text-[10px] text-gray-400 uppercase tracking-wide">
                  usuário
                </span>
                <span className="text-sm font-bold text-gray-800 font-mono">
                  {lead.userID}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LastLead;
