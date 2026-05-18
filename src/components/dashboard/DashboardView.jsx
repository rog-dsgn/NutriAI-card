import ProfileCard from "./ProfileCard";
import LeadStats from "./LeadStats";
import LinkStats from "./LinkStats";
import LastLead from "./LastLead";

const DashboardView = ({ stats, leads = [] }) => {
  return (
    <section className="h-dvh pt-4 overflow-y-auto">
      <header className="grid grid-cols-1 p-8 mb-4 gap-4">
        <ProfileCard />
      </header>

      <div className="flex flex-col gap-2">
        <LeadStats stats={stats} />
        <LastLead leads={leads} />
        <LinkStats />
      </div>
    </section>
  );
};

export default DashboardView;
