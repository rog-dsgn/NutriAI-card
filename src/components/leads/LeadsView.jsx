import { User } from "@boxicons/react";
import React from "react";
import LeadBubble from "./LeadBubble";

const LeadsView = ({ leads }) => {
  return (
    <section className="h-dvh pt-4 overflow-y-auto">
      <header className="grid grid-cols-1 p-8 gap-4">
        <div>
          <h2 className="text-xs opacity-70">Leads</h2>
          <span className="montserrat opacity-90">3 leads no total</span>
        </div>
      </header>

      <div className="h-full flex flex-col flex-1 px-6">
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
