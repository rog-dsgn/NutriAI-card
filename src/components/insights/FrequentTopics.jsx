const FrequentTopics = ({ topics = [] }) => {
  const sorted = [...topics].sort((a, b) => b.count - a.count);
  //   const max = sorted[0]?.count || 1;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-4">
      <p className="text-xs text-gray-400 uppercase tracking-wide mb-4">
        Temas frequentes
      </p>
      {sorted.length === 0 ? (
        <p className="text-sm text-gray-400 text-center py-4">
          Nenhum tema registrado ainda
        </p>
      ) : (
        <div className="flex flex-col gap-2">
          {sorted.map((topic, index) => {
            const isTop = index === 0;
            return (
              <div
                key={topic.label}
                className="flex justify-between items-center px-3 py-2 rounded-xl"
                style={{
                  backgroundColor: isTop
                    ? "rgba(29,158,117,0.08)"
                    : "rgba(0,0,0,0.03)",
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-gray-700">{topic.label}</span>
                </div>
                <span
                  className="text-xs font-medium px-2 py-0.5 rounded-full"
                  style={{
                    backgroundColor: isTop
                      ? "rgba(29,158,117,0.15)"
                      : "rgba(0,0,0,0.06)",
                    color: isTop ? "#0F6E56" : "#888",
                  }}
                >
                  {topic.count}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FrequentTopics;
