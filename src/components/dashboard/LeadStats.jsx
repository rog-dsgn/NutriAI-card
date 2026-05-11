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
    <div>
      <span className="text-xs text-black/30">Resumo</span>
      <div className="grid grid-cols-2 gap-4">
        <div>Total de Visualizações</div>
        <div>% de Leads Quentes</div>
      </div>
    </div>
  );
};

export default LeadStats;
