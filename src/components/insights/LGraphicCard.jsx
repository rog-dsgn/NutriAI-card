import "../../utils/chartConfig";
import { Line } from "react-chartjs-2";

const LGraphicCard = ({
  title,
  total = 0,
  weeklyGrowth = 0,
  chartData = [],
  labels = [],
}) => {
  const data = {
    labels,
    datasets: [
      {
        data: chartData,
        borderColor: "#1D9E75",
        backgroundColor: "rgba(29,158,117,0.08)",
        borderWidth: 2,
        pointBackgroundColor: "#1D9E75",
        pointRadius: 3,
        pointHoverRadius: 5,
        fill: true,
        tension: 0.4,
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
        ticks: {
          font: { size: 11 },
          color: "#888",
        },
      },
      y: {
        display: false,
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-transparent mb-4 px-4">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-xs text-emerald-500 mb-1">{title}</p>
          <p className="text-3xl font-medium text-[#212121]">{total}</p>
        </div>
        {weeklyGrowth > 0 && (
          <span className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full">
            +{weeklyGrowth} essa semana
          </span>
        )}
      </div>
      <div style={{ height: "80px" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LGraphicCard;
