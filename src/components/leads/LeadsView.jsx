import { User } from "@boxicons/react";
import React from "react";

const LeadsView = () => {
  return (
    <section className="relative h-dvh pb-22 content-end overflow-hidden">
      <header className="absolute top-0 z-10 w-full shrink-0 bg-white border-b border-stone-100 shadow-sm">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-stone-800 text-md leading-none">
              Leads
            </p>
            <p className="text-[11px] text-emerald-600 mt-0.5 font-medium">
              3 leads no total
            </p>
          </div>
        </div>
      </header>

      <div className="h-full flex flex-col-reverse flex-1 px-6">
        <ul>
          <li className="bg-white/30 shadow backdrop-blur-2xl px-3 py-2 rounded-2xl">
            🟢 #a3f9k hoje, 19h32 "Interessada em emagrecimento, perguntou sobre
            plano mensal..." ›
          </li>
        </ul>
      </div>
    </section>
  );
};

export default LeadsView;
