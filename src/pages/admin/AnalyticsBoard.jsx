import { useState, useEffect } from "react";

// ── mock data (substitua pelos seus hooks reais) ──────────────────────────────
const MOCK_STATS = { visitsToday: 12, visitsTotal: 33, chats: 4, leads: 3 };
const MOCK_LEADS = [
  {
    id: "XVHB0",
    tag: "quente",
    summary:
      "Quer emagrecer e começar agora, mas é sedentário, fuma muito e sente falta de disposição e apetite. Alimenta bem, mas falta energia. Nunca teve acompanhamento e prefere atendimento online.",
    date: "22 de abr às 21:21",
    phone: "5511999999991",
  },
  {
    id: "005TK",
    tag: "morno",
    summary:
      "Busca mais disposição, enfrenta procrastinação e falta de tempo, nunca teve acompanhamento nutricional, prefere online.",
    date: "24 de abr às 17:58",
    phone: "5511999999992",
  },
  {
    id: "B3LK2",
    tag: "frio",
    summary:
      "Quer emagrecer, tem dificuldade com vontade de doces, nunca teve acompanhamento, prefere online.",
    date: "24 de abr às 18:01",
    phone: "5511999999993",
  },
];

// ── tag config ────────────────────────────────────────────────────────────────
const TAG = {
  quente: {
    label: "Quente",
    wrapper: "bg-orange-50 text-orange-600",
    dot: "bg-orange-400",
  },
  morno: {
    label: "Morno",
    wrapper: "bg-yellow-50 text-yellow-600",
    dot: "bg-yellow-400",
  },
  frio: {
    label: "Frio",
    wrapper: "bg-blue-50 text-blue-500",
    dot: "bg-blue-400",
  },
};

// ── WhatsApp helper ───────────────────────────────────────────────────────────
const openWhatsApp = (phone, summary) => {
  const msg = encodeURIComponent(
    `Olá! Vi seu interesse no meu cartão. Percebi que você ${summary.toLowerCase().slice(0, 80)}... Posso te ajudar? 😊`,
  );
  window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
};

// ── StatCard ──────────────────────────────────────────────────────────────────
const StatCard = ({ value, label, sub, accentClass = "bg-gray-100" }) => (
  <div className="relative bg-white rounded-2xl p-5 border border-gray-100 shadow-sm overflow-hidden">
    <div
      className={`absolute top-0 right-0 w-14 h-14 ${accentClass} rounded-bl-full opacity-40`}
    />
    <span className="block text-3xl font-bold text-gray-900 leading-none">
      {value}
    </span>
    <span className="block text-xs text-gray-400 font-medium mt-1">
      {label}
    </span>
    {sub && (
      <span className="block text-xs font-semibold text-emerald-600 mt-1">
        {sub}
      </span>
    )}
    {!sub && value === 0 && (
      <span className="block text-xs text-gray-300 mt-1">Nenhuma ainda</span>
    )}
  </div>
);

// ── LeadCard ──────────────────────────────────────────────────────────────────
const LeadCard = ({ lead }) => {
  const t = TAG[lead.tag] ?? TAG.frio;

  return (
    <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col gap-3">
      {/* tag */}
      <div className="flex items-center gap-2">
        <span
          className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full capitalize ${t.wrapper}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${t.dot}`} />
          {t.label}
        </span>
      </div>

      {/* resumo */}
      <p className="text-sm text-gray-600 leading-relaxed">{lead.summary}</p>

      {/* footer */}
      <div className="flex items-center justify-between pt-1 border-t border-gray-50">
        <div>
          <span className="block text-[10px] text-gray-300 uppercase tracking-wide mb-0.5">
            usuário
          </span>
          <span className="text-sm font-bold text-gray-800 font-mono">
            {lead.id}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-300">{lead.date}</span>
          <button
            onClick={() => openWhatsApp(lead.phone, lead.summary)}
            className="flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors duration-150"
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.135.561 4.14 1.535 5.877L0 24l6.318-1.506A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.65-.49-5.18-1.346l-.37-.217-3.743.892.934-3.638-.243-.385A9.937 9.937 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Contatar
          </button>
        </div>
      </div>
    </div>
  );
};

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
  const [stats, setStats] = useState({
    visitsToday: 0,
    visitsTotal: 0,
    chats: 0,
    leads: 0,
  });
  const [leads, setLeads] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // substitua por getVisits() e getLeads() reais
    setTimeout(() => {
      setStats(MOCK_STATS);
      setLeads(MOCK_LEADS);
      setLoaded(true);
    }, 600);
  }, []);

  const convRate =
    stats.visitsToday > 0
      ? `${Math.round((stats.leads / stats.visitsToday) * 100)}% conversão hoje`
      : null;

  return (
    <section
      className={`bg-gray-50 min-h-screen flex justify-center transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
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
              NutriAI Card
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
            leads.map((l) => <LeadCard key={l.id} lead={l} />)
          )}
        </div>
      </div>
    </section>
  );
}
