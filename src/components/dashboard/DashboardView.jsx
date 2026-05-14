// components
import ProfileCard from "./ProfileCard";
import LeadStats from "./LeadStats";
import LinkStats from "./LinkStats";
import { CaretDown } from "@boxicons/react";

const DashboardView = ({ stats }) => {
  return (
    <section className="raleway w-full h-full overflow-y-auto pb-20 text-[#212121]">
      <header className="pt-3 pb-6">
        <ProfileCard />
      </header>

      <span className="flex gap-2 mx-4 text-xs opacity-50 items-center justify-end">
        Última atualização: Agora
      </span>

      <div className="flex flex-col gap-2">
        <LeadStats stats={stats} />
        <LinkStats />
      </div>
    </section>
  );
};

export default DashboardView;
