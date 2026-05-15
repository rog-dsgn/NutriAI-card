const DataSel = ({ data, act }) => {
  return (
    <ul className="flex w-full gap-2 montserrat text-xs">
      <li
        onClick={() => act("7d")}
        className={`${data === 0 ? "bg-linear-to-t from-emerald-500 to-emerald-400 text-white border-none" : "bg-transparent text-gray-400 border border-gray-200"} px-6 py-2 rounded-full`}
      >
        7d
      </li>
      <li
        onClick={() => act("30d")}
        className={`${data === 1 ? "bg-linear-to-t from-emerald-500 to-emerald-400 text-white border-none" : "bg-transparent text-gray-400 border border-gray-200"} px-6 py-2 rounded-full`}
      >
        30d
      </li>
      <li
        onClick={() => act("3m")}
        className={`${data === 2 ? "bg-linear-to-t from-emerald-500 to-emerald-400 text-white border-none" : "bg-transparent text-gray-400 border border-gray-200"} px-6 py-2 rounded-full`}
      >
        3m
      </li>
    </ul>
  );
};

export default DataSel;
