// hooks
import { useCallback, useEffect, useState } from "react";

// utils
import { trackVisit } from "../utils/analytics";

//pages & Ui
import Header from "../components/layout/Header";
import AIChatPanel from "../components/layout/ChatPanel";
import Button from "../components/ui/Button";
import ButtonLink from "../components/ui/ButtonLink";
import getUserId from "../utils/UserId";

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

const Home = () => {
  const [chat, setChat] = useState(false);

  const handleClick = useCallback(() => {
    setChat((prev) => !prev);
  }, []);

  useEffect(() => {
    const userId = getUserId();
    trackVisit(userId);
  }, []);

  return (
    <main className="relative mx-auto w-screen max-w-xl shadow-md flex flex-col items-center bg-white min-h-screen">
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
          {SOCIAL_LINKS.map((item) => (
            <ButtonLink key={item.title} {...item} />
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
