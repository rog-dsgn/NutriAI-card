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
  quente: { label: "Quente", bg: "#FFF0ED", color: "#D94F2B", dot: "#F4714E" },
  morno: { label: "Morno", bg: "#FFF8E6", color: "#B07A10", dot: "#F0B429" },
  frio: { label: "Frio", bg: "#EEF3FF", color: "#3B5FCC", dot: "#6B8EF5" },
};

// ── WhatsApp helper ───────────────────────────────────────────────────────────
// const openWhatsApp = (phone, summary) => {
//   const msg = encodeURIComponent(
//     `Olá! Vi seu interesse no meu cartão. Vi que você ${summary.toLowerCase().slice(0, 80)}... Posso te ajudar? 😊`,
//   );
//   window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
// };

// ── StatCard ──────────────────────────────────────────────────────────────────
const StatCard = ({ value, label, accent, sub }) => (
  <div
    style={{
      background: "#fff",
      borderRadius: 16,
      padding: "20px 22px",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
      border: "1px solid #f0f0ee",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: 60,
        height: 60,
        background: accent ? `${accent}18` : "#f7f7f5",
        borderRadius: "0 16px 0 60px",
      }}
    />
    <span
      style={{
        fontSize: 28,
        fontWeight: 700,
        color: "#1a1a1a",
        lineHeight: 1,
        fontFamily: "'DM Serif Display', serif",
      }}
    >
      {value}
    </span>
    <span
      style={{ fontSize: 12, color: "#9a9a94", fontWeight: 500, marginTop: 2 }}
    >
      {label}
    </span>
    {sub && (
      <span
        style={{
          fontSize: 11,
          color: accent ?? "#9a9a94",
          fontWeight: 600,
          marginTop: 1,
        }}
      >
        {sub}
      </span>
    )}
  </div>
);

// ── LeadCard ──────────────────────────────────────────────────────────────────
const LeadCard = ({ lead }) => {
  const t = TAG[lead.tag] ?? TAG.frio;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: 16,
        padding: "18px 20px",
        border: "1px solid #f0f0ee",
        boxShadow: hovered
          ? "0 4px 16px rgba(0,0,0,0.08)"
          : "0 1px 4px rgba(0,0,0,0.04)",
        transition: "box-shadow 0.2s ease",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      {/* tag */}
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <span
          style={{
            background: t.bg,
            color: t.color,
            fontSize: 11,
            fontWeight: 700,
            padding: "3px 10px",
            borderRadius: 99,
            display: "flex",
            alignItems: "center",
            gap: 5,
            letterSpacing: 0.2,
            textTransform: "capitalize",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: t.dot,
              display: "inline-block",
            }}
          />
          {t.label}
        </span>
      </div>

      {/* summary */}
      <p
        style={{ fontSize: 13.5, color: "#3a3a38", lineHeight: 1.6, margin: 0 }}
      >
        {lead.summary}
      </p>

      {/* footer */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 2,
        }}
      >
        <div>
          <span
            style={{
              fontSize: 10,
              color: "#b0b0a8",
              display: "block",
              marginBottom: 1,
            }}
          >
            usuário
          </span>
          <span
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#1a1a1a",
              fontFamily: "monospace",
            }}
          >
            {lead.id}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 11, color: "#c0c0b8" }}>{lead.date}</span>
          {/* <button
            onClick={() => openWhatsApp(lead.phone, lead.summary)}
            style={{
              background: "#25D366",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "6px 12px",
              fontSize: 11,
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 4,
              letterSpacing: 0.2,
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.135.561 4.14 1.535 5.877L0 24l6.318-1.506A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.65-.49-5.18-1.346l-.37-.217-3.743.892.934-3.638-.243-.385A9.937 9.937 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Contatar
          </button> */}
        </div>
      </div>
    </div>
  );
};

// ── Empty state ───────────────────────────────────────────────────────────────
const EmptyLeads = () => (
  <div
    style={{
      background: "#fff",
      borderRadius: 16,
      padding: "36px 24px",
      border: "1px dashed #e0e0da",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 10,
    }}
  >
    <div style={{ fontSize: 32 }}>🌱</div>
    <p
      style={{ fontSize: 13, color: "#b0b0a8", textAlign: "center", margin: 0 }}
    >
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
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; background: #f5f5f0; }
        .dashboard-root {
          font-family: 'DM Sans', sans-serif;
          background: #f5f5f0;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          padding: 0 0 48px;
        }
        .inner {
          width: 100%;
          max-width: 480px;
          padding: 0 16px;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .inner.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .section-title {
          font-size: 13px;
          font-weight: 600;
          color: #9a9a94;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          margin: 28px 0 12px;
        }
        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .leads-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
      `}</style>

      <div className="dashboard-root">
        <div className={`inner ${loaded ? "visible" : ""}`}>
          {/* header */}
          <header
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "28px 4px 8px",
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid #1D9E75",
                flexShrink: 0,
                background: "#e8f5f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
              }}
            >
              🌿
            </div>
            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: 11,
                  color: "#9a9a94",
                  fontWeight: 500,
                  letterSpacing: 0.3,
                }}
              >
                NutriAI Card
              </p>
              <h2
                style={{
                  margin: 0,
                  fontSize: 17,
                  fontWeight: 700,
                  color: "#1a1a1a",
                }}
              >
                Olá, Dra. Marina 👋
              </h2>
            </div>
          </header>

          {/* divider */}
          <div style={{ height: 1, background: "#e8e8e4", margin: "12px 0" }} />

          {/* atividade */}
          <p className="section-title">Atividade</p>
          <div className="grid-2">
            <StatCard
              value={stats.visitsToday}
              label="Visitantes Hoje"
              accent="#1D9E75"
            />
            <StatCard value={stats.visitsTotal} label="Total de Visitantes" />
            <StatCard
              value={stats.chats}
              label="Conversas Iniciadas"
              accent="#6B8EF5"
              sub={stats.chats === 0 ? "Nenhuma hoje ainda" : undefined}
            />
            <StatCard
              value={stats.leads}
              label="Leads Gerados"
              accent="#F4714E"
              sub={convRate}
            />
          </div>

          {/* leads */}
          <p className="section-title">Últimos Leads</p>
          <div className="leads-list">
            {leads.length === 0 ? (
              <EmptyLeads />
            ) : (
              leads.map((l) => <LeadCard key={l.id} lead={l} />)
            )}
          </div>
        </div>
      </div>
    </>
  );
}
