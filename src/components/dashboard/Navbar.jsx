import { Dashboard, ChartSpline, Message } from "@boxicons/react";
import { useState } from "react";

const Navbar = ({ tab }) => {
  const [select, setSelect] = useState([
    { icon: <Dashboard />, name: "Dashboard", tab: "dashboard", active: true },
    { icon: <Message />, name: "Leads", tab: "leads", active: false },
    { icon: <ChartSpline />, name: "Insights", tab: "insights", active: false },
  ]);

  const handleClick = (name) => {
    setSelect((prev) =>
      prev.map((item) => ({
        ...item,
        active: item.name === name,
      })),
    );
  };

  return (
    <nav className="absolute bottom-4 w-screen place-items-center z-10 transition-all duration-500 cursor-pointer">
      <ul className="flex flex-row gap-4 w-fit rounded-full bg-white/30 border border-white/20 shadow-xl backdrop-blur-2xl p-0.5">
        {select.map((n) =>
          n.active ? (
            <li
              key={n.name}
              className="flex flex-row gap-2 rounded-full px-6 py-3 text-center bg-linear-to-tl from-[#121212] to-[#212121] text-white transition-all duration-300"
            >
              {n.icon}
              {n.name}
            </li>
          ) : (
            <li
              onClick={() => {
                handleClick(n.name);
                tab(n.tab);
              }}
              key={n.name}
              className="transition-all duration-300 px-6 py-3 text-[#212121] hover:bg-white/10 rounded-full"
            >
              {n.icon}
            </li>
          ),
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
