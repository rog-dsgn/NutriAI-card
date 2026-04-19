import { useState, useRef, useEffect } from "react";
import getUserId from "../../utils/UserId";

// ============================================================
// CONFIG — Personalização
// ============================================================
const CONFIG = {
  name: "Dra. Marina Souza",
  agentName: "Nutri IA",
  whatsapp: "5566996817776",
  whatsappMsg: "Olá @RgF (Não apague essa mensagem)",
  // URL DO SEU WEBHOOK N8N
  n8nWebhookUrl: "https://nutriai2.app.n8n.cloud/webhook/smart-chat",
};

const WHATSAPP_URL = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.whatsappMsg)}`;

export default function AIChatPanel({ click }) {
  // messages: role = "user" | "assistant", content = textMessage, showCTA = boolean
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: `Olá! 👋 Sou a assistente virtual da ${CONFIG.name}.\n\nVou simular como seria o seu plano alimentar personalizado em menos de 2 minutos.\n\nPara começar: **qual é o seu principal objetivo?**`,
      showCTA: false,
    },
  ]);

  // armazena texto do usuario
  const [input, setInput] = useState("");
  // carrega mensagem, desativando temporariamente alguns recursos
  const [loading, setLoading] = useState(false);

  // trabalha com o scroll automático para a última mensagem
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Formatação simples de negrito e quebra de linha
  const formatText = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>')
      .replace(/\n/g, "<br/>");
  };

  // trabalha com o envio da mensagem
  const send = async () => {
    // retorna se o input estiver vazio ou se já estiver carregando uma resposta
    if (!input.trim() || loading) return;

    // adiciona user role e a mensagem ao array
    const userMsg = { role: "user", content: input.trim() };
    const userId = getUserId();

    // adiciona as mensagens ultimas mensagens a um array
    const newMessages = [...messages, userMsg];
    // * porém, ele entrega uma lista enorme de objetos (arrumar)

    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      // envia a mensagem do usuário para o n8n e aguarda a resposta
      const response = await fetch(CONFIG.n8nWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: userId,
          user_input: userMsg.content,
        }),
      });

      const data = await response.json();

      // O n8n deve retornar algo como { output: "texto aqui" } ou { text: "texto aqui" }
      const raw =
        data.text || "Desculpe, tive um problema ao processar sua resposta.";

      const showCTA = data.showCTA === true;

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: raw, showCTA },
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
        {/* Header */}
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
            onClick={click}
            className="w-8 h-8 rounded-full bg-black/10 text-white flex items-center justify-center hover:bg-black/20 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Chat Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
            >
              <div
                className={`max-w-[85%] p-3 text-sm leading-relaxed shadow-sm ${
                  msg.role === "user"
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
          ))}

          {loading && (
            <div className="bg-white border border-emerald-100 p-3 rounded-2xl rounded-tl-none w-16 shadow-sm">
              <div className="flex gap-1 justify-center">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-emerald-50 shrink-0">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Digite sua resposta..."
              className="flex-1 px-4 py-3 bg-slate-50 border border-emerald-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-slate-700"
            />
            <button
              onClick={send}
              disabled={loading}
              className="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center shadow-md hover:bg-emerald-700 disabled:opacity-50 transition-colors"
            >
              ➤
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
