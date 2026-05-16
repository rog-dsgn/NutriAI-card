const DataSel = ({ data, act }) => {
  const options = [
    { label: "7d", value: "7d" },
    { label: "30d", value: "30d" },
    { label: "3m", value: "3m" },
  ];

  return (
    <ul className="flex w-full gap-2 montserrat text-xs">
      {options.map(({ label, value }) => (
        <li
          key={value}
          onClick={() => act(value)}
          className={`${
            data === value
              ? "bg-linear-to-t from-emerald-500 to-emerald-400 text-white border-none"
              : "bg-transparent text-gray-400 border border-gray-200"
          } px-6 py-2 rounded-full cursor-pointer`}
        >
          {label}
        </li>
      ))}
    </ul>
  );
};

export default DataSel;
