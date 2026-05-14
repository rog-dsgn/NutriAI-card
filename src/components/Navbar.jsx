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
    <nav className="fixed z-50 bottom-4 mx-auto w-screen md:w-xl place-items-center transition-all duration-500 cursor-pointer">
      <ul className="flex flex-row gap-4 w-fit rounded-full bg-white/30 border border-white/20 shadow-md backdrop-blur-3xl p-0.5">
        {select.map((n) =>
          n.active ? (
            <li
              key={n.name}
              title={n.name}
              className={`${n.active ? "typewriter" : "hidden"} flex flex-row gap-1 justify-center items-center overflow-hidden rounded-full px-6 py-3 bg-linear-to-tr from-emerald-500 to-emerald-600 text-white transition-all duration-200`}
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
              title={n.name}
              className="transition-all scale-75 duration-150 px-6 py-3 text-[#212121]/70 hover:bg-white/10 rounded-full"
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
