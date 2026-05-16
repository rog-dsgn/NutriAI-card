const PERIODS = [
  { label: "Manhã", key: "morning" },
  { label: "Tarde", key: "afternoon" },
  { label: "Noite", key: "evening" },
];

const PeakHours = ({ data = { morning: 0, afternoon: 0, evening: 0 } }) => {
  const total = Object.values(data).reduce((a, b) => a + b, 0);
  const hasPeak = total > 0;

  const getPercent = (value) =>
    !hasPeak ? 0 : Math.round((value / total) * 100);

  const peak = hasPeak
    ? PERIODS.reduce((prev, curr) =>
        data[curr.key] > data[prev.key] ? curr : prev,
      )
    : null;

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <p className="my-2 text-xs text-[#212121]/40">Horários de pico</p>
        {peak && (
          <span className="text-xs text-gray-400">
            pico: {peak.label.toLowerCase()}
          </span>
        )}
      </div>

      {!hasPeak ? (
        <p className="text-sm text-gray-400 text-center py-4">
          Nenhum dado disponível ainda
        </p>
      ) : (
        <div className="flex flex-col gap-3">
          {PERIODS.map(({ label, key }) => {
            const percent = getPercent(data[key]);
            const isPeak = peak?.key === key;
            return (
              <div key={key}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">{label}</span>
                  <span className="text-sm text-gray-400">{percent}%</span>
                </div>
                <div
                  className="w-full bg-gray-100 rounded-full"
                  style={{ height: "6px" }}
                >
                  <div
                    className="rounded-full"
                    style={{
                      width: `${percent}%`,
                      height: "6px",
                      backgroundColor: isPeak
                        ? "#1D9E75"
                        : "rgba(29,158,117,0.3)",
                      transition: "width 0.6s ease",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PeakHours;
