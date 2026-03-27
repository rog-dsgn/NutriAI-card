import React from "react";

const CONFIG = {
  // Dados do profissional
  name: "Dra. Marina Souza",
  title: "Nutricionista Clínica & Esportiva",
  crn: "CRN-3 · 45.892",
  bio: "Especialista em emagrecimento saudável e performance. +8 anos ajudando pessoas a transformarem sua relação com a comida sem dietas impossíveis.",
  whatsapp: "5511999999999", // Número com DDI e DDD, sem espaços
  whatsappMsg:
    "Olá, Dra. Marina! Acabei de simular minha dieta com a IA e quero saber mais sobre a consulta 🥗",

  // Links da página
  links: [
    {
      icon: "📅",
      label: "Agendar Consulta",
      sub: "Presencial ou online",
      url: "#",
    },
    { icon: "📸", label: "Instagram", sub: "@dra.marinasouza", url: "#" },
    {
      icon: "▶️",
      label: "Canal no YouTube",
      sub: "Receitas & Dicas Semanais",
      url: "#",
    },
    {
      icon: "📖",
      label: "E-book Gratuito",
      sub: "Guia de Alimentação Inteligente",
      url: "#",
    },
  ],

  // Agente de IA
  agentName: "Nutri IA",
  agentGreeting: `Olá! 👋 Sou a assistente virtual da ${""}, especializada em nutrição.\n\nVou simular como seria o seu plano alimentar personalizado em menos de 2 minutos.\n\nPara começar: **qual é o seu principal objetivo?**`,
};

// Replace placeholder
CONFIG.agentGreeting = CONFIG.agentGreeting.replace('""', `"${CONFIG.name}"`);

const WHATSAPP_URL = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.whatsappMsg)}`;

// ============================================================
// PROMPT
// ============================================================
const SYSTEM_PROMPT = `Você é uma assistente de nutrição altamente especializada e empática, trabalhando para ${CONFIG.name} (${CONFIG.title}).

Sua ÚNICA missão é qualificar o lead e, ao final, motivá-lo a falar com a nutricionista no WhatsApp.

## FLUXO DE CONVERSA (siga este roteiro)

**ETAPA 1 — Objetivo**
Pergunte o objetivo principal. Ofereça opções claras:
- Perder peso com saúde
- Ganhar massa muscular
- Melhorar energia e disposição
- Controlar diabetes/colesterol/pressão
- Melhorar minha relação com a comida

**ETAPA 2 — Contexto de Saúde**
Após o objetivo, pergunte APENAS UMA dessas questões:
- Se quer perder peso: "Há quanto tempo tenta emagrecer? Já fez alguma dieta antes?"
- Se quer ganhar massa: "Você já treina ou está começando agora?"
- Se energia/disposição: "Como está seu sono e nível de cansaço no dia a dia?"
- Se controle de doenças: "Já tem acompanhamento médico? Faz uso de medicamentos?"
- Se relação com comida: "Você se considera uma pessoa que come por ansiedade ou emoção?"

**ETAPA 3 — Estilo de Vida (rápido)**
Pergunte apenas: "Para finalizar sua simulação — você pratica alguma atividade física atualmente?"

**ETAPA 4 — SIMULAÇÃO PERSONALIZADA**
Com base nas respostas, gere uma simulação ESPECÍFICA e convincente. Inclua:
- Resumo do perfil do usuário em 1 linha
- Estrutura sugerida de refeições (café, almoço, jantar + lanches)
- 2-3 alimentos-chave para o objetivo dele
- 1 hábito prioritário para começar HOJE
- Uma previsão realista e motivadora ("Em 4 semanas, você pode...")

Seja específico e use dados reais de nutrição. Isso cria desejo pelo plano completo.

**ETAPA 5 — CONVERSÃO (OBRIGATÓRIO)**
Após a simulação, diga EXATAMENTE isso (adapte levemente ao contexto):

"Essa simulação mostra o potencial do que é possível — mas um plano profissional vai 10x mais fundo: exames, metabolismo, histórico, rotina e suporte contínuo.

${CONFIG.name} tem agenda aberta esta semana. Quer garantir sua vaga? 👇"

Então encerre com: **[CTA_WHATSAPP]**

## REGRAS IMPORTANTES
- Mantenha respostas curtas e conversacionais (máximo 150 palavras por mensagem)
- Use negrito (**texto**) para destacar pontos-chave
- Seja calorosa, mas profissional — como uma amiga especialista
- Nunca diga que não pode ajudar
- NUNCA faça mais de 1 pergunta por vez
- Após 3-4 trocas, acelere para a simulação — não deixe a conversa esfriar
- Use emojis com moderação (máximo 2 por mensagem)
- A resposta final DEVE conter [CTA_WHATSAPP] para o sistema exibir o botão`;

// ============================================================
// CHAT COMPONENT
// ============================================================

const ChatBot = ({ click }) => {
  {
    /* Overlay */
  }
  return (
    <div className="absolute bottom-0 h-screen w-full md:w-xl z-100 backdrop-blur-lg bg-[#fafafa]/50 flex flex-col items-end justify-center">
      {/* close panel */}
      <div onClick={click} className="flex flex-1 h-full w-full" />
      {/* Chat Panel */}
      <div className="w-full h-[85vh] max-h-[680] bg-white rounded-tl-3xl rounded-tr-3xl flex flex-col overflow-hidden ">
        {/* Chat Header */}
        <div className="w-full flex justify-between items-center px-4 py-4 bg-linear-to-tl from-emerald-600 to-green-500 shrink-0">
          {/* Chat Header Content */}
          <div className="flex flex-row justify-center items-center gap-4 text-white">
            <div className="bg-white/30 w-12 aspect-square flex justify-center items-center rounded-full">
              🥗
            </div>
            <div>
              <div className="font-semibold text-lg">Assist. IA</div>
              <div className="text-sm mt-1 text-white/70">
                Assistente da Marina
              </div>
            </div>
          </div>
          <div>
            <div
              onClick={click}
              className="cursor-pointer hover:text-white transition-all duration-300 text-white/60 w-8 aspect-square flex justify-center items-center rounded-full"
            >
              <span>✕</span>
            </div>
          </div>
        </div>
        {/* End Header */}
        {/* Messages */}
        <div className="flex flex-1 overflow-y-auto px-4 py-5 flex-col bg-[#f8fdf8]">
          {/* Chat Content */}
          {/* bot chat */}
          <div className="w-[82%] px-3 py-4 bg-[#e0e0e0] rounded-2xl text-[#1b3a1e] shadow-2xs">
            bot test
          </div>
          {/* user chat */}
          <div className="w-[78%] px-3 py-4 bg-linear-to-bl text-white from-[#2e7d32] to-[#4caf50] rounded-2xl">
            user test
          </div>
        </div>
        <div className="flex gap-4 px-3 py-4 border-t border-[#e0e0e0] bg-white shrink-0">
          <input
            type="text"
            placeholder="Digite sua resposta..."
            className="flex flex-1 px-3 py-4 border border-[#e0e0e0] rounded-xl text-[#1b3a1e] outline-none bg-[#f8fdf8]"
          />
          <button className="w-15 aspect-square rounded-2xl bg-linear-to-tr text-white from-[#2e7d32] to-[#4caf50] cursor-pointer flex justify-center items-center">
            ➤
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
