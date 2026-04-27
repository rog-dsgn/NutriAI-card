// hooks
import React, { useCallback, useEffect } from "react";
import useVisit from "../hook/useVisit";
import { useState } from "react";

//pages & Ui
import Header from "../components/layout/Header";
import AIChatPanel from "../components/layout/ChatPanel";
import Button from "../components/ui/Button";
import ButtonLink from "../components/ui/ButtonLink";

const SOCIAL_LINKS = [
  {
    link: "...",
    icon: "📅",
    title: "Agendar Consulta",
    desc: "Presencial ou Online",
  },
  {
    link: "...",
    icon: "📸",
    title: "Instagram",
    desc: "@dra.marinasouza",
  },
  {
    link: "...",
    icon: "▶️",
    title: "Canal do Youtube",
    desc: "Receitas & Dicas Semanais",
  },
  {
    link: "...",
    icon: "📖",
    title: "E-book Gratuito",
    desc: "Guia de Alimentação Inteligente",
  },
];

const VIEW_HOOK = {
  n8nWebHook: "https://nutriai2.app.n8n.cloud/webhook/views",
};

const Home = () => {
  const [chat, setChat] = useState(false);
  const [viewCount, setViewCount] = useState();

  const handleClick = useCallback(() => {
    setChat((prev) => !prev);
  }, []);

  useEffect(() => {
    fetch(VIEW_HOOK.n8nWebHook)
      .then((res) => res.json())
      .then((data) => setViewCount(data));
  }, []);

  useVisit();
  viewCount;

  return (
    <main className="relative mx-auto w-screen max-w-xl flex flex-col items-center bg-white min-h-screen">
      {/* Header (pfp, banner, infos..) */}
      <Header />

      <div className="w-full px-4 md:px-16">
        <Button click={handleClick} aria-expanded={chat} />
        {/* ------------ */}

        {/* hr */}
        <div className="flex flex-row justify-center items-center gap-4 my-4 text-[0.7rem] tracking-wider text-[#9f9f9f]">
          <span className="h-px bg-gray-200 flex flex-1" />
          ou acesse
          <span className="h-px bg-gray-200 flex flex-1" />
        </div>
        {/* ------------ */}

        {/* Links */}
        <nav className="w-full">
          {SOCIAL_LINKS.map((item, index) => (
            <ButtonLink key={index} {...item} />
          ))}
        </nav>
      </div>

      <footer className="mt-auto py-4 text-xs text-slate-400">
        Roger Farias. {new Date().getFullYear()}.
      </footer>

      {/* Chat UI */}
      {chat && <AIChatPanel click={handleClick} />}
    </main>
  );
};

export default Home;
