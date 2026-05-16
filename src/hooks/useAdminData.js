import { useState, useEffect, useCallback } from "react";
import { getAnalytics } from "../utils/analytics";
import { getDateRange } from "../utils/dateRange";

const BASE_URL = import.meta.env.VITE_N8N_HOOK;

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

const useAdminData = (activeTab) => {
  // dashboard
  const [stats, setStats] = useState({
    visitantes: 0,
    conversas: 0,
    cliquesWhatsapp: 0,
  });
  const [leads, setLeads] = useState([]);

  // insights
  const [filter, setFilter] = useState("7d");
  const [metrics, setMetrics] = useState(EMPTY_METRICS);
  const [insightsLoading, setInsightsLoading] = useState(false);
  const [insightsError, setInsightsError] = useState(null);

  // fetch dashboard + leads — roda uma vez ao montar
  useEffect(() => {
    getAnalytics().then((data) => {
      setStats({
        visitantes: data.visits ?? 0,
        conversas: data.chats ?? 0,
        cliquesWhatsapp: data.leads ?? 0,
      });
      setLeads(data.story || []);
    });
  }, []);

  // fetch insights — só quando a aba estiver ativa
  const fetchMetrics = useCallback(async (selectedFilter) => {
    setInsightsLoading(true);
    setInsightsError(null);

    const { start, end } = getDateRange(selectedFilter);

    try {
      const res = await fetch(`${BASE_URL}/insights?start=${start}&end=${end}`);
      if (!res.ok) throw new Error("Erro ao buscar métricas");

      const text = await res.text();
      if (!text || !text.trim()) throw new Error("Resposta vazia");

      const data = JSON.parse(text);
      setMetrics(data);
    } catch (err) {
      console.error("fetchMetrics:", err);
      setInsightsError("Não foi possível carregar os dados.");
    } finally {
      setInsightsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (activeTab !== "insights") return;
    fetchMetrics(filter);
  }, [activeTab, filter, fetchMetrics]);

  return {
    stats,
    leads,
    filter,
    setFilter,
    metrics,
    insightsLoading,
    insightsError,
  };
};

export default useAdminData;
