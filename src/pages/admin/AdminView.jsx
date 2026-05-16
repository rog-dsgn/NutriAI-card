import React, { useCallback, useState } from "react";
import useAdminData from "../../hooks/useAdminData";

// views & components renderizados
import DashboardView from "../../components/dashboard/DashboardView";
import LeadsView from "../../components/leads/LeadsView";
import InsightsView from "../../components/insights/InsightsView";
import Navbar from "../../components/Navbar";

const AdminView = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleTab = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  const {
    stats,
    leads,
    filter,
    setFilter,
    metrics,
    insightsLoading,
    insightsError,
  } = useAdminData(activeTab);

  return (
    <main className="relative w-screen md:w-xl h-screen bg-linear-to-t from-gray-200 to-white text-[#212121]">
      {activeTab === "dashboard" && <DashboardView stats={stats} />}
      {activeTab === "leads" && <LeadsView leads={leads} />}
      {activeTab === "insights" && (
        <InsightsView
          metrics={metrics}
          filter={filter}
          onFilterChange={setFilter}
          loading={insightsLoading}
          error={insightsError}
        />
      )}

      <Navbar tab={handleTab} />
    </main>
  );
};

export default AdminView;
