import React, { useState } from "react";
import LeadBubble from "./LeadBubble";

const FILTERS = [
  { label: "Todos", value: "all" },
  { label: "Qualificados", value: "qualified" },
  { label: "Não qualificados", value: "unqualified" },
];

const LeadsView = ({ leads = [] }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filtered = leads.filter((lead) => {
    const isQualified =
      lead.nivel_intencao === "quente" || lead.nivel_intencao === "morno";
    if (activeFilter === "qualified") return isQualified;
    if (activeFilter === "unqualified") return !isQualified;
    return true;
  });

  // sempre inicia com o último item selecionado
  const activeIndex = selectedIndex !== null ? selectedIndex : 0;

  const qualifiedCount = leads.filter(
    (l) => l.nivel_intencao === "quente" || l.nivel_intencao === "morno",
  ).length;
  const unqualifiedCount = leads.length - qualifiedCount;

  const getCount = (value) => {
    if (value === "all") return leads.length;
    if (value === "qualified") return qualifiedCount;
    return unqualifiedCount;
  };

  const handleFilterChange = (value) => {
    setActiveFilter(value);
    setSelectedIndex(null); // reseta seleção ao mudar filtro
  };

  const handleSelect = (index) => {
    // se clicar no já selecionado, mantém selecionado
    setSelectedIndex(index === activeIndex ? index : index);
  };

  return (
    <section className="h-dvh pt-4 overflow-y-auto">
      <header className="grid grid-cols-1 px-8 pt-8 pb-4 gap-4">
        <div>
          <h2 className="text-xs opacity-70">Leads</h2>
          <span className="montserrat opacity-90">
            {leads.length} {leads.length === 1 ? "lead" : "leads"} no total
          </span>
        </div>

        {/* pills de filtro */}
        <ul className="flex gap-2 flex-wrap">
          {FILTERS.map(({ label, value }) => (
            <li
              key={value}
              onClick={() => handleFilterChange(value)}
              className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full cursor-pointer transition-all
                ${
                  activeFilter === value
                    ? "bg-emerald-500 text-white"
                    : "bg-white/50 text-gray-500 border border-gray-200"
                }`}
            >
              {label}
              <span
                className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full
                  ${
                    activeFilter === value
                      ? "bg-white/20 text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
              >
                {getCount(value)}
              </span>
            </li>
          ))}
        </ul>
      </header>

      <div className="px-6 pb-24">
        {filtered.length === 0 ? (
          <p className="text-sm text-gray-400 text-center py-12">
            Nenhum lead encontrado
          </p>
        ) : (
          <div>
            {filtered.map((item, index) => (
              <LeadBubble
                key={item.userID || index}
                leads={item}
                isLast={index === filtered.length - 1}
                isSelected={index === activeIndex}
                onClick={() => handleSelect(index)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default LeadsView;
