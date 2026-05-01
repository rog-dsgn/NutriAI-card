import { getLocalDate } from "./dateNow";

const BASE_URL = import.meta.env.VITE_N8N_HOOK;

// verifica se o usuario ja acessou sistema alguma vez; escreve o id do usuario se já;
export const trackVisit = (userId) => {
  fetch(`${BASE_URL}/visits`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user_id: userId,
      date: getLocalDate(),
    }),
  }).catch(console.error);
};

export const getAnalytics = () => {
  return fetch(`${BASE_URL}/analytics`).then((res) => res.json());
};
