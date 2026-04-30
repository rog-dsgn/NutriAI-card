// hooks
import { useEffect } from "react";

// utils & configs
import getUserId from "../utils/UserId";
import { trackVisit } from "../utils/analytics";
import { links } from "../config/visitLinks";

// pages
import AIChatPanel from "./ChatView";

// layout & Ui
import Header from "../components/layout/Header";
import ChatTrigger from "../components/ui/ChatTrigger";
import ButtonLink from "../components/ui/ButtonLink";

const SOCIAL_LINKS = links;

const Home = () => {
  useEffect(() => {
    const userId = getUserId();
    trackVisit(userId);
  }, []);

  return (
    <main className="relative mx-auto w-screen max-w-xl shadow-md flex flex-col items-center bg-white min-h-screen">
      <Header /> {/* Header (pfp, banner, infos..) */}
      <div className="w-full px-4 md:px-16">
        <ChatTrigger />
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
        Powered by NutriAI Card · 2026
      </footer>
    </main>
  );
};

export default Home;
