import { useEffect } from "react";
import getUserId from "../utils/UserId";

const url = import.meta.env.VITE_N8N_VISITS;

const useVisit = () => {
  useEffect(() => {
    const userId = getUserId();

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: userId }),
    }).catch((error) => console.error("Erro:", error));
  }, []);
};

export default useVisit;
