import DataSel from "./DataSel";
import LeadsByDay from "./LeadsByDay";
import PeakHours from "./PeakHours";
import LGraphicCard from "./LGraphicCard";
import FrequentTopics from "./FrequentTopics";

const DATASTRING = {
  "7d": { value: "7 dias" },
  "30d": { value: "30 dias" },
  "3m": { value: "3 meses" },
};

const InsightsView = ({ metrics, filter, onFilterChange, loading, error }) => {
  return (
    <section className="h-dvh pt-4 overflow-y-auto">
      <header className="grid grid-cols-1 p-8 gap-4">
        <div>
          <h2 className="text-xs opacity-70">Insights</h2>
          <span className="montserrat opacity-90">
            Últimos {DATASTRING[filter].value}
          </span>
        </div>
        <div>
          <DataSel data={filter} act={onFilterChange} />
        </div>
      </header>

      {loading ? (
        <p className="text-xs text-center text-gray-400 mt-8">Carregando...</p>
      ) : (
        <div className="mx-auto">
          <div className="px-2">
            {error && (
              <p className="text-xs text-red-400 text-center mb-4">{error}</p>
            )}

            <p className="ml-4 my-2 text-xs text-[#212121]/40">
              Resumo de qualificação
            </p>

            <LGraphicCard
              title={"Total de leads"}
              total={metrics.totalLeads}
              weeklyGrowth={metrics.crescimentoSemana}
              chartData={metrics.leadsPorDia}
              labels={metrics.leadsPorDiaLabels}
            />

            <LGraphicCard
              title={"Taxa de qualificação"}
              total={`${metrics.taxaQualificacao}%`}
              weeklyGrowth={0}
              chartData={metrics.leadsPorDia}
              labels={metrics.leadsPorDiaLabels}
            />

            <LeadsByDay
              dailyData={metrics.leadsPorDia}
              labels={metrics.leadsPorDiaLabels ?? []}
              filter={filter}
            />

            <PeakHours data={metrics.horariosPico} />

            <FrequentTopics topics={metrics.temasFrecuentes} />
          </div>
        </div>
      )}
    </section>
  );
};

export default InsightsView;
