const BASE_URL = import.meta.env.VITE_N8N_VISITS;

// verifica se o usuario ja acessou sistema alguma vez; escreve o id do usuario se já;
export const trackVisit = (userId) => {
  fetch(`${BASE_URL}/visits`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user_id: userId,
      date: new Date().toISOString().split("T")[0],
    }),
  }).catch(console.error);
};

export const getVisits = () => {
  return fetch(`${BASE_URL}/visits`).then((res) => res.json());
};
