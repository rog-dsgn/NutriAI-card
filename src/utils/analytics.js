import { getLocalDate } from "./dateNow";

const BASE_URL = import.meta.env.VITE_N8N_HOOK;

// verifica se o usuario ja acessou sistema alguma vez; escreve o id do usuario se já;
export const trackVisit = async (userId) => {
  try {
    await fetch(`${BASE_URL}/visits`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: userId, date: getLocalDate() }),
    });
  } catch (err) {
    console.error("trackVisit error:", err);
  }
};

export const getAnalytics = async () => {
  try {
    const res = await fetch(`${BASE_URL}/analytics`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    return await res.json();
  } catch (err) {
    console.error("getAnalytics error:", err);
  }
};
