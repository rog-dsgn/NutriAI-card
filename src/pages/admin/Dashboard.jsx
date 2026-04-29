// hooks & libs
// import { auth } from "../../lib/firebase";
// import { signOut } from "firebase/auth";
import { getVisits, getLeads } from "../../utils/analytics";
import { useEffect, useState } from "react";

// icons
import { Menu, Search, Sparkles } from "@boxicons/react";

// layouts & uis
import Card from "../../components/ui/Card";
import { ChatCard, LeadCard } from "../../components/layout/LeadsCard";

// component
const Dashboard = () => {
  // analytics vars
  const [visitsToday, setVisitsToday] = useState(0);
  const [visitsTotal, setVisitsTotal] = useState(0);
  const [chatToday, setChatToday] = useState(0);
  const [leadsToday, setLeadsToday] = useState(0);

  // chama uma lista de chats
  const [historyChat, setHistoryChat] = useState([]);

  // chama o logout do firebase
  // const logout = () => signOut(auth);

  useEffect(() => {
    getVisits().then((data) => {
      setVisitsToday(data.pageviews ?? 0);
      setChatToday(data.chats ?? 0);
      setLeadsToday(data.leads ?? 0);
      setVisitsTotal(data.visits ?? 0);
    });
    getLeads().then((data) => {
      const list = Array.isArray(data) ? data : [];
      setHistoryChat(list);
    });
  }, []);

  return (
    <section className="bg-gray-100 h-full max-w-xl w-screen shadow-md px-4">
      {/* header */}
      <header className="flex flex-row py-8 px-6 gap-6 justify-center items-center">
        <div className="overflow-hidden w-10 aspect-square">
          <img
            src="/avatar.png"
            alt="icon"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col flex-1">
          <p className="text-xs text-[#9f9f9f]">AI Content Studio</p>
          <h2 className="font-bold text-[#212121]">Olá, Dra. Marina</h2>
        </div>
      </header>

      <h3 className="px-3 py-2 text-lg font-medium">Atividade</h3>
      <div className="grid grid-cols-2 gap-3 px-3">
        <Card value={visitsToday} detail={"Visitantes Hoje"} />
        <Card value={visitsTotal} detail={"Total de Visitantes"} />
        <Card value={chatToday} detail={"Conversas Iniciadas"} />
        <Card value={leadsToday} detail={"Leads Gerados"} />
      </div>
      <h4 className="px-3 pt-6 pb-2 text-lg font-medium">Últimos Leads</h4>
      <div className="flex flex-col gap-3 px-3 py-2">
        {historyChat.map((lead, index) => (
          <ChatCard key={index} lead={lead} />
        ))}
      </div>
    </section>
  );
};

export default Dashboard;
