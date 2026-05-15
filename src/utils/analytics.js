const BASE_URL = import.meta.env.VITE_N8N_HOOK;

// verifica se o usuario ja acessou sistema alguma vez; escreve o id do usuario se já;
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

export const getAnalytics = async () => {
  const res = await fetch(`${BASE_URL}/analytics`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return res.json(); // retorna { visits, chats, leads }
};
