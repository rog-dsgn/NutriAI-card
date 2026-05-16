import { useState, useEffect, useCallback } from "react";

// utilitário de data
import { getDateRange } from "../../utils/dateRange";

// import componentes que trabalham com filtros de datas
import DataSel from "./DataSel";

// import components renderizados
import LeadsByDay from "./LeadsByDay";
import PeakHours from "./PeakHours";
import LGraphicCard from "./LGraphicCard";
import InsightsStats from "./InsightsStats";
import FrequentTopics from "./FrequentTopics";

const BASE_URL = import.meta.env.VITE_N8N_HOOK;

const DATASTRING = {
  "7d": { value: "7 dias" },
  "30d": { value: "30 dias" },
  "3m": { value: "3 meses" },
};

const EMPTY_METRICS = {
  totalLeads: 0,
  taxaQualificacao: 0,
  qualificados: 0,
  naoQualificados: 0,
  leadsPorDia: [],
  horariosPico: { morning: 0, afternoon: 0, evening: 0 },
  temasFrecuentes: [],
  crescimentoSemana: 0,
};

const InsightsView = () => {
  const [filter, setFilter] = useState("7d");
  const [metrics, setMetrics] = useState(EMPTY_METRICS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMetrics = useCallback(async (selectedFilter) => {
    setLoading(true);
    setError(null);

    const { start, end } = getDateRange(selectedFilter);

    try {
      const res = await fetch(
        `${BASE_URL}/metrics/insights?start=${start}&end=${end}`,
      );

      if (!res.ok) throw new Error("Erro ao buscar métricas");

      const data = await res.json();
      setMetrics(data);
    } catch (err) {
      console.error("fetchMetrics:", err);
      setError("Não foi possível carregar os dados.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMetrics(filter);
  }, [filter, fetchMetrics]);

  const dataLabel = useCallback((value) => {
    setFilter(value);
  }, []);

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
          {/* passa filter (string) direto — DataSel compara por valor */}
          <DataSel data={filter} act={dataLabel} />
        </div>
      </header>

      {loading ? "Carregando" : null}
      <div className="mx-auto">
        <div className="px-2">
          {error && (
            <p className="text-xs text-red-400 text-center mb-4">{error}</p>
          )}

          <p className="ml-4 my-2 text-xs text-[#212121]/40">
            Resumo de qualificação
          </p>

          {/* total de leads */}
          <LGraphicCard
            title={"Total de leads"}
            total={metrics.totalLeads}
            weeklyGrowth={metrics.crescimentoSemana}
            chartData={metrics.leadsPorDia}
          />

          {/* taxa de qualificação */}
          <LGraphicCard
            title={"Taxa de qualificação"}
            total={`${metrics.taxaQualificacao}%`}
            weeklyGrowth={0}
            chartData={metrics.leadsPorDia}
          />

          <LeadsByDay dailyData={metrics.leadsPorDia} />

          <PeakHours data={metrics.horariosPico} />

          <FrequentTopics topics={metrics.temasFrecuentes} />
        </div>
      </div>
    </section>
  );
};

export default InsightsView;
