// components
import ProfileCard from "./ProfileCard";
import LeadStats from "./LeadStats";
import LinkStats from "./LinkStats";

const DashboardView = ({ stats }) => {
  return (
    <section className="raleway w-full h-full overflow-auto pb-20 bg-linear-to-t from-gray-200 to-white text-[#212121]">
      <header className="pt-3 pb-6">
        <ProfileCard />
      </header>

      <div className="flex flex-col gap-2">
        <LeadStats stats={stats} />
        <LinkStats />
      </div>
    </section>
  );
};

export default DashboardView;
