import { useState } from "react";
import DataSel from "./DataSel";
import InsightsStats from "./InsightsStats";
import InsightsBars from "./InsightsBars";
import LGraphicCard from "./LGraphicCard";
import LeadsByDay from "./LeadsByDay";
import PeakHours from "./PeakHours";
import FrequentTopics from "./FrequentTopics";

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
          <p className="ml-4 my-2 text-xs text-[#212121]/40">
            Resumo de qualificação
          </p>
          {/* total de leads */}
          <LGraphicCard
            title={"Total de leads"}
            total={12}
            weeklyGrowth={3}
            chartData={[1, 3, 1, 4, 2, 5, 2]}
          />

          {/* taxa de qualificação */}
          <LGraphicCard
            title={"Taxa de qualificação"}
            total={"67%"}
            weeklyGrowth={3}
            chartData={[1, 3, 1, 4, 2, 5, 2]}
          />

          <LeadsByDay dailyData={[1, 3, 1, 4, 2, 5, 2]} />

          <PeakHours data={{ morning: 8, afternoon: 12, evening: 5 }} />

          <FrequentTopics
            topics={[
              { label: "Emagrecimento", count: 8 },
              { label: "Consulta online", count: 5 },
              { label: "Plano mensal", count: 4 },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default InsightsView;
