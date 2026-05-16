import { getDateRange } from "./dateRange";

const BASE_URL = import.meta.env.VITE_N8N_HOOK;

// registra eventos do usuário (visita, chat, clique)
export const trackEvent = async (userId, eventType) => {
  try {
    await fetch(`${BASE_URL}/analytics`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: userId, event_type: eventType }),
    });
  } catch (err) {
    console.error("trackEvent error:", err);
  }
};

// busca dados do dashboard
export const getAnalytics = async () => {
  const res = await fetch(`${BASE_URL}/analytics`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return res.json();
};

// busca métricas de insights com filtro de período
export const fetchMetrics = async (filter) => {
  const { start, end } = getDateRange(filter);

  try {
    const res = await fetch(
      `${BASE_URL}/insights?start=${start}&end=${end}&filter=${filter}`,
    );
    if (!res.ok) throw new Error("Erro ao buscar métricas");

    const text = await res.text();
    if (!text || !text.trim()) throw new Error("Resposta vazia");

    return JSON.parse(text);
  } catch (err) {
    console.error("fetchMetrics error:", err);
    throw err;
  }
};
