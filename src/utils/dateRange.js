// Retorna data local no formato YYYY-MM-DD sem deslocamento de fuso
export const getLocalISO = (date) => {
  const offset = date.getTimezoneOffset() * 60000;
  return new Date(date - offset).toISOString().split("T")[0];
};

// Retorna { start, end } baseado no filtro selecionado
export const getDateRange = (filter) => {
  const end = new Date();
  const start = new Date();

  if (filter === "7d") start.setDate(end.getDate() - 7);
  if (filter === "30d") start.setDate(end.getDate() - 30);
  if (filter === "3m") start.setMonth(end.getMonth() - 3);

  return {
    start: getLocalISO(start),
    end: getLocalISO(end),
  };
};
