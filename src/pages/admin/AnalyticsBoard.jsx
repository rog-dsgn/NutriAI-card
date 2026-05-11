import { useState, useEffect } from "react";
import { getAnalytics } from "../../utils/analytics";
import { LeadCard } from "../../components/dashboard/LeadsCard";
import { TrendingUp } from "@boxicons/react";

// ── StatCard ──────────────────────────────────────────────────────────────────
const StatCard = ({ value, label, sub }) => (
  <div className="relative bg-white rounded-2xl border border-gray-300 shadow-sm overflow-hidden place-content-center">
    <span className="block text-3xl font-bold text-gray-900 leading-none">
      {value}
    </span>
    <span className="block text-xs text-gray-400 font-medium mt-1">
      {label}
    </span>
    {sub && (
      <span className="flex items-center gap-0.5 text-xs font-semibold text-emerald-600 mt-1">
        <TrendingUp />
        {sub}
      </span>
    )}
    {!sub && value === 0 && (
      <span className="block text-xs text-gray-300 mt-1">Nenhuma ainda</span>
    )}
  </div>
);

// ── Empty state ───────────────────────────────────────────────────────────────
const EmptyLeads = () => (
  <div className="bg-white rounded-2xl p-10 border border-dashed border-gray-200 flex flex-col items-center gap-3">
    <span className="text-3xl">🌱</span>
    <p className="text-sm text-gray-300 text-center">
      Nenhum lead ainda. Quando o agente qualificar alguém, aparecerá aqui.
    </p>
  </div>
);

// ── Dashboard ─────────────────────────────────────────────────────────────────
export default function Dashboard() {
  // analytics vars
  const [stats, setStats] = useState({
    visitsToday: 0,
    visitsTotal: 0,
    chats: 0,
    leads: 0,
  });
  const [leads, setLeads] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getAnalytics().then((data) => {
      setStats({
        visitsToday: data.pageviews ?? 0,
        visitsTotal: data.chats ?? 0,
        chats: data.leads ?? 0,
        leads: data.visits ?? 0,
      });
      const list = data.story || [];
      setLeads(list);
      setLoaded(true);
    });
  }, []);

  const convRate =
    stats.visitsToday > 0
      ? `${Math.round((stats.leads / stats.visitsToday) * 100)}% conversão hoje`
      : null;

  return (
    <section
      className={`bg-gray-50 w-screen max-w-xl min-h-screen flex justify-center transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
    >
      <div className="w-full max-w-xl px-4 pb-12">
        {/* header */}
        <header className="flex items-center gap-3 py-7">
          <div className="w-11 h-11 rounded-full border-2 border-emerald-500 bg-emerald-50 flex items-center justify-center text-lg shrink-0 overflow-hidden">
            <img
              src="/z.png"
              alt="avatar"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.textContent = "🌿";
              }}
            />
          </div>
          <div>
            <p className="text-[11px] text-gray-400 font-medium tracking-wide">
              AI Content Studio
            </p>
            <h2 className="text-base font-bold text-gray-900">
              Olá, Dra. Marina 👋
            </h2>
          </div>
        </header>

        <div className="h-px bg-gray-200 mb-6" />

        {/* atividade */}
        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-3">
          Atividade
        </p>
        <div className="grid grid-cols-2 gap-2.5">
          <StatCard
            value={stats.visitsToday}
            label="Visitantes Hoje"
            accentClass="bg-emerald-200"
          />
          <StatCard
            value={stats.visitsTotal}
            label="Total de Visitantes"
            accentClass="bg-gray-200"
          />
          <StatCard
            value={stats.chats}
            label="Conversas Iniciadas"
            accentClass="bg-blue-200"
          />
          <StatCard
            value={stats.leads}
            label="Leads Gerados"
            accentClass="bg-orange-200"
            sub={convRate}
          />
        </div>

        {/* leads */}
        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mt-8 mb-3">
          Últimos Leads
        </p>
        <div className="flex flex-col gap-2.5">
          {leads.length === 0 ? (
            <EmptyLeads />
          ) : (
            leads
              .slice()
              .reverse()
              .map((l) => <LeadCard key={l.id} lead={l} />)
          )}
        </div>
      </div>
    </section>
  );
}
