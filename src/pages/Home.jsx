// hooks
import React from "react";
import { useState } from "react";

//pages & Ui
import Header from "../components/layout/Header";
import AIChatPanel from "../components/layout/ChatPanel";
import Button from "../components/ui/Button";
import ButtonLink from "../components/ui/ButtonLink";

const Home = () => {
  const [chat, setChat] = useState(false);

  const handleClick = () => {
    if (!chat) {
      setChat(true);
    } else {
      setChat(false);
    }
  };

  return (
    <section className="relative w-screen md:w-xl flex flex-col items-center bg-white h-screen">
      {/* Header (pfp, banner, infos..) */}
      <Header />
      <div className="w-full px-4 md:px-16">
        {/* Chat Trigger */}
        <Button click={handleClick} />
        {/* ------------ */}

        {/* hr */}
        <div className="flex flex-row justify-center items-center gap-4 my-4 text-[0.7rem] text-[#9f9f9f]">
          <div className="h-0.5 border-b border-[#e0e0e0] flex flex-1" />
          ou acesse
          <div className="h-0.5 border-b border-[#e0e0e0] flex flex-1" />
        </div>
        {/* ------------ */}

        {/* Links */}
        <ButtonLink
          link={"google.com"}
          icon={"📅"}
          title={"Agendar Consulta"}
          desc={"Presencial ou online"}
        />
        <ButtonLink
          link={"google.com"}
          icon={"📸"}
          title={"Instagram"}
          desc={"@dra.marinasouza"}
        />
        <ButtonLink
          link={"google.com"}
          icon={"▶️"}
          title={"Canal do Youtube"}
          desc={"Receitas & Dicas Semanais"}
        />
        <ButtonLink
          link={"google.com"}
          icon={"📖"}
          title={"E-book Gratuito"}
          desc={"Guia de Alimentação Inteligente"}
        />
      </div>
      <footer className="my-4 text-xs text-slate-500">@rog-dsgn 2026.</footer>

      {/* Chat UI */}
      {chat && <AIChatPanel click={handleClick} />}
    </section>
  );
};

export default Home;
