// hooks
import React from "react";
import { useState } from "react";

//pages & Ui
import AIChatPanel from "../components/layout/ChatPanel";
import Header from "../components/layout/Header";
import Button from "../components/ui/Button";

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
    <div className="relative w-screen md:w-xl flex flex-col items-center bg-white h-screen">
      <Header />
      <div className="w-full px-4 md:px-16">
        <Button click={handleClick} />
      </div>
      {chat && <AIChatPanel click={handleClick} />}
    </div>
  );
};

export default Home;
