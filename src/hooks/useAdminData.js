import { useState, useEffect } from "react";
import { fetchMetrics, getAnalytics } from "../utils/analytics";

const EMPTY_METRICS = {
  totalLeads: 0,
  taxaQualificacao: 0,
  qualificados: 0,
  naoQualificados: 0,
  leadsPorDia: [],
  leadsPorDiaLabels: [],
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
  useEffect(() => {
    if (activeTab !== "insights") return;

    const load = async () => {
      setInsightsLoading(true);
      try {
        const item = await fetchMetrics(filter);
        setMetrics(item);
        setInsightsError(null);
      } catch (err) {
        console.error("Error fetching metrics:", err);
        setInsightsError("Erro ao carregar insights");
      } finally {
        setInsightsLoading(false);
      }
    };

    load();
  }, [activeTab, filter]);

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
