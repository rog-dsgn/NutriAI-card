import { Bar } from "react-chartjs-2";

const LeadsByDay = ({ dailyData = [], labels = [] }) => {
  if (!dailyData.length) {
    return (
      <div className="p-4">
        <p className="my-2 text-xs text-[#212121]/40">Leads por dia</p>
        <p className="text-sm text-gray-400 text-center py-4">
          Nenhum dado disponível ainda
        </p>
      </div>
    );
  }

  const peak = Math.max(...dailyData);
  const peakIndex = dailyData.indexOf(peak);

  const data = {
    labels,
    datasets: [
      {
        data: dailyData,
        backgroundColor: dailyData.map((_, i) =>
          i === peakIndex ? "#1D9E75" : "rgba(29,158,117,0.2)",
        ),
        borderRadius: 4,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => ` ${ctx.parsed.y} leads`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { font: { size: 11 }, color: "#888" },
      },
      y: {
        display: false,
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <p className="my-2 text-xs text-[#212121]/40">Leads por dia</p>
        {peakIndex >= 0 && (
          <span className="text-xs text-gray-400">
            pico: {labels[peakIndex]}
          </span>
        )}
      </div>
      <div style={{ height: "100px" }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default LeadsByDay;
