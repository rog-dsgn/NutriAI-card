import { useState } from "react";
import DataSel from "./DataSel";
import InsightsStats from "./InsightsStats";

const InsightsView = () => {
  const [dataSel, setDataSel] = useState("7d");

  const DATASTRING = {
    "7d": {
      id: 0,
      value: "7 dias",
    },
    "30d": {
      id: 1,
      value: "30 dias",
    },
    "3m": {
      id: 2,
      value: "3 meses",
    },
  };

  const dataLabel = (data) => {
    setDataSel(data);
  };

  return (
    <section className="h-dvh pt-4 overflow-y-auto">
      <header className="grid grid-cols-1 p-8 gap-4">
        <div>
          <h2 className="text-xs opacity-70">Insights</h2>
          <span className="montserrat opacity-90">
            Últimos {DATASTRING[dataSel].value}
          </span>
        </div>
        <div>
          <DataSel data={DATASTRING[dataSel].id} act={dataLabel} />
        </div>
      </header>

      <div className="py-1 px-1 bg-gray-50 mx-2 shadow rounded-xl">
        <p className="px-2 my-1 ml-4 text-xs montserrat text-[#212121]/70">
          Resumo de Qualificação
        </p>
        <InsightsStats />
      </div>
    </section>
  );
};

export default InsightsView;
