import { useState, useRef, useEffect } from "react";
import getUserId from "../../utils/UserId";

const CONFIG = {
  name: "Dra. Marina Souza",
  agentName: "Nutri IA",
  whatsapp: "5566996204981",
  whatsappMsg: "Olá @RgF (Não apague essa mensagem)",
  n8nWebhookUrl: "https://nutriai2.app.n8n.cloud/webhook/smart-chat",
};

const userId = getUserId();
const WHATSAPP_URL = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(`Olá @${userId} (Não apague essa mensagem)`)}`;

const INITIAL_MESSAGE = {
  role: "assistant",
  content: `Olá! 👋 Sou a assistente virtual da ${CONFIG.name}.\n\nVou simular como seria o seu plano alimentar personalizado em menos de 2 minutos.\n\nPara começar: **qual é o seu principal objetivo?**`,
  showCTA: false,
};

// ─── Sub-componentes ────────────────────────────────────────

function ChatHeader({ onClose }) {
  return (
    <div className="bg-linear-to-r from-emerald-600 to-green-500 p-4 flex items-center justify-between shrink-0">
      <div className="flex items-center gap-3 text-white">
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl">
          🥗
        </div>
        <div>
          <div className="font-semibold text-sm">{CONFIG.agentName}</div>
          <div className="text-[10px] text-emerald-100 uppercase tracking-wider">
            Assistente Digital
          </div>
        </div>
      </div>
      <button
        onClick={onClose}
        className="w-8 h-8 rounded-full bg-black/10 text-white flex items-center justify-center hover:bg-black/20 transition-colors"
      >
        ✕
      </button>
    </div>
  );
}

function MessageBubble({ msg }) {
  const isUser = msg.role === "user";

  const formatText = (text) =>
    text
      .replace(/```[\s\S]*?```/g, "<em>[conteúdo técnico removido]</em>") // remove blocos de código
      .replace(/`([^`]+)`/g, "<code>$1</code>") // inline code opcional
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>')
      .replace(/\n/g, "<br/>");

  return (
    <div className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}>
      <div
        className={`max-w-[85%] p-3 text-sm leading-relaxed shadow-sm ${
          isUser
            ? "bg-emerald-600 text-white rounded-2xl rounded-tr-none"
            : "bg-white text-slate-800 rounded-2xl rounded-tl-none border border-emerald-100"
        }`}
        dangerouslySetInnerHTML={{ __html: formatText(msg.content) }}
      />
      {msg.showCTA && (
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-3 flex items-center gap-2 px-5 py-3 bg-[#25d366] text-white rounded-xl font-bold text-sm shadow-lg hover:scale-105 transition-transform active:scale-95"
        >
          <span className="text-lg">💬</span>
          Falar com a Dra. agora
        </a>
      )}
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="bg-white border border-emerald-100 p-3 rounded-2xl rounded-tl-none w-16 shadow-sm">
      <div className="flex gap-1 justify-center">
        {[0, 0.2, 0.4].map((delay) => (
          <div
            key={delay}
            style={{ animationDelay: `${delay}s` }}
            className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce"
          />
        ))}
      </div>
    </div>
  );
}

function ChatInput({ value, onChange, onSend, disabled }) {
  return (
    <div className="p-4 bg-white border-t border-emerald-50 shrink-0">
      <div className="flex gap-2">
        <input
          type="text"
          value={value}
          onChange={onChange}
          onKeyDown={(e) => e.key === "Enter" && onSend()}
          placeholder="Digite sua resposta..."
          className="flex-1 px-4 py-3 bg-slate-50 border border-emerald-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-slate-700"
        />
        <button
          onClick={onSend}
          disabled={disabled}
          className="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center shadow-md hover:bg-emerald-700 disabled:opacity-50 transition-colors"
        >
          ➤
        </button>
      </div>
    </div>
  );
}

// ─── Componente principal ───────────────────────────────────

export default function AIChatPanel({ click }) {
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = async () => {
    if (!input.trim() || loading) return;

    const userMsg = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(CONFIG.n8nWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: getUserId(),
          user_input: userMsg.content,
        }),
      });

      const data = await response.json();
      const content =
        data.cleanOutput ||
        data.text ||
        "Desculpe, tive um problema ao processar sua resposta.";

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content, showCTA: data.showCTA === true },
      ]);
    } catch (error) {
      console.error("Erro ao conectar com n8n:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Ops! Tive um probleminha técnico. Poderia tentar novamente? 🙏",
          showCTA: false,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-100 bg-emerald-950/50 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="w-full max-w-md h-[85vh] sm:h-150 bg-white rounded-t-3xl sm:rounded-3xl flex flex-col overflow-hidden shadow-2xl">
        <ChatHeader onClose={click} />

        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
          {messages.map((msg, i) => (
            <MessageBubble key={i} msg={msg} />
          ))}
          {loading && <TypingIndicator />}
          <div ref={bottomRef} />
        </div>

        <ChatInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onSend={send}
          disabled={loading}
        />
      </div>
    </div>
  );
}
