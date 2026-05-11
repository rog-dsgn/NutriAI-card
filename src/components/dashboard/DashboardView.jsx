import ProfileCard from "./ProfileCard";
import LeadStats from "./LeadStats";

const DashboardView = () => {
  return (
    <section className="relative w-full h-screen bg-gray-200 text-[#212121]">
      <header className="py-2">
        <ProfileCard />
      </header>

      <div className="px-6">
        <LeadStats />
      </div>
    </section>
  );
};

export default DashboardView;
