import { User } from "@boxicons/react";
import React from "react";

const LeadsView = () => {
  return (
    <section className="relative h-dvh pb-22 content-end overflow-hidden">
      <header className="absolute top-0 z-10 w-full shrink-0 text-center bg-white border-b border-stone-100 shadow-sm">
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
            {/* tag */}
            <div className="flex items-center gap-2">
              <span
                className={`inline-flex montserrat items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full capitalize bg-green-50 text-green-600`}
              >
                <span className={`w-1.5 h-1.5 rounded-full bg-green-400`} />
                Qualificado
              </span>
            </div>
            {/* resumo */}
            <p className="text-sm text-gray-700 leading-relaxed">
              Interessada em emagrecimento, perguntou sobre plano mensal...
            </p>
            {/* footer */}
            <div className="flex items-end justify-between pt-1">
              <div>
                <span className="block text-[10px] text-gray-500 uppercase tracking-wide">
                  usuário
                </span>
                <span className="text-sm font-bold text-gray-800 font-mono">
                  #a3f9k
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">hoje, 17h32</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default LeadsView;
