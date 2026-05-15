// icons
import { AlertCircle, Check } from "@boxicons/react";

const InsightsStats = () => {
  const cards = [
    {
      name: "Total de leads",
      value: 0,
    },
    {
      name: "Taxa de qualificação",
      value: 0,
    },
    {
      icon: <Check />,
      name: "Qualificados",
      value: 0,
    },
    {
      icon: <AlertCircle />,
      name: "Não qualificados",
      value: 0,
    },
  ];

  return (
    <>
      <div className="grid grid-cols-2 gap-2 mx-4">
        {cards.map((item) => (
          <div
            key={item.name}
            className="relative overflow-hidden bg-white shadow-xs px-6 py-3 rounded-2xl space-y-2 justify-center col-span-1 text-[#212121]"
          >
            <p className="text-3xl montserrat">{item.value}</p>
            <p className="text-xs opacity-50">{item.name}</p>
            {item.icon ? (
              <span className={`absolute top-4 right-4`}>{item.icon}</span>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default InsightsStats;
