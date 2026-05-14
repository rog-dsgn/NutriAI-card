import React, { useCallback, useEffect, useState } from "react";
import { getAnalytics } from "../../utils/analytics";

// views & components renderizados
import DashboardView from "../../components/dashboard/DashboardView";
import LeadsView from "../../components/leads/LeadsView";
import InsightsView from "../../components/insights/InsightsView";
import Navbar from "../../components/dashboard/Navbar";

const AdminView = () => {
  // ações para navbar ** elementos na navbar
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleTab = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  // ações para Dashboard ** elementos na dashboard
  const [stats, setStats] = useState({
    visitantes: 0,
    conversas: 0,
    cliquesWhatsapp: 0,
  });

  useEffect(() => {
    getAnalytics().then((data) => {
      setStats({
        visitantes: data.visits ?? 0,
        conversas: data.chats ?? 0,
        cliquesWhatsapp: data.leads ?? 0,
      });
    });
  }, []);

  return (
    <main className="relative w-screen md:w-xl h-full bg-linear-to-t from-gray-200 to-white text-[#212121]">
      {/* renderiza as views */}
      {activeTab === "dashboard" && <DashboardView stats={stats} />}
      {activeTab === "leads" && <LeadsView />}
      {activeTab === "insights" && <InsightsView />}

      {/* navbar ** esse elemento sobrepoe qqr um outro na tela */}
      <Navbar tab={handleTab} />
    </main>
  );
};

export default AdminView;
