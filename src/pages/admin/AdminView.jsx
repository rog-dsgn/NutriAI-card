import React, { useCallback, useState } from "react";

import DashboardView from "../../components/dashboard/DashboardView";
import LeadsView from "../../components/leads/LeadsView";
import InsightsView from "../../components/insights/InsightsView";
import Navbar from "../../components/dashboard/Navbar";

// componente pai que mantem todo os dados aqui antes de importar para as views
const AdminView = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleTab = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  return (
    <main className="relative w-full h-screen text-[#212121]">
      {/* renderiza as views */}
      {activeTab === "dashboard" && <DashboardView />}
      {activeTab === "leads" && <LeadsView />}
      {activeTab === "insights" && <InsightsView />}

      {/* navbar ** esse elemento sobrepoe qqr um outro na tela */}
      <Navbar tab={handleTab} />
    </main>
  );
};

export default AdminView;
