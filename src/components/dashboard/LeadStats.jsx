import React from "react";

const Stats = [
  {
    name: "Visitantes",
    subtitle: "Pessoas que acessaram seu site",
    value: 0,
  },
  {
    name: "Conversas",
    subtitle: "Iniciaram uma conversa com a IA",
    value: 0,
  },
  {
    name: "Cliques no WhatsApp",
    subtitle: "Foram direcionadas para seu contato",
    value: 0,
  },
];

const LeadStats = () => {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-3xl px-4 py-4">
      <p className="my-2 text-xs raleway-bold text-[#212121]/70">
        Atividade de Conteúdo
      </p>
      <div className="grid grid-cols-2 gap-2">
        {Stats.map((item, index) => (
          <div
            key={item.name}
            className={`bg-white shadow-xs px-4 py-4 rounded-2xl space-y-2 ${index === 2 ? "col-span-2 py-4 bg-linear-to-tr from-emerald-600 to-emerald-500 text-white" : "col-span-1 text-[#212121]"}`}
          >
            <p className="text-3xl raleway-bold">{item.value}</p>
            <p className="text-xs opacity-50">{item.name}</p>
            {/* <span className="text-xs text-gray-800/50">{item.subtitle}</span> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadStats;
