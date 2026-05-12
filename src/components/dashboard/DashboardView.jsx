import ProfileCard from "./ProfileCard";
import LeadStats from "./LeadStats";

const DashboardView = () => {
  return (
    <section className="relative raleway w-full h-screen bg-linear-to-t from-gray-200 to-white text-[#212121]">
      <header className="pt-8 pb-4">
        <ProfileCard />
      </header>

      <div className="px-4">
        <LeadStats />
      </div>
    </section>
  );
};

export default DashboardView;
