import { useState } from "react";
import DataSel from "./DataSel";
import InsightsStats from "./InsightsStats";
import InsightsBars from "./InsightsBars";

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

      <div className="mx-auto">
        <div className="px-2">
          <p className="ml-4 my-2 text-xs font-mono text-[#212121]/40">
            RESUMO DE QUALIFIÇÃO
          </p>
          <InsightsStats />
        </div>
      </div>

      <div className="mx-auto mt-8">
        <div className="px-2">
          <p className="ml-4 my-2 text-xs font-mono text-[#212121]/40">
            LEADS POR DIA
          </p>
          <InsightsBars />
        </div>
      </div>
    </section>
  );
};

export default InsightsView;
