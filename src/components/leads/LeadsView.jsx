import { User } from "@boxicons/react";
import React from "react";
import LeadBubble from "./LeadBubble";

const LeadsView = ({ leads }) => {
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
        <ul className="block space-y-2">
          {leads.map((item, index) => (
            <div key={index}>
              <LeadBubble leads={item} />
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LeadsView;
