// icons
import { Community, MessageCircleDots2 } from "@boxicons/react";
import Wpp from "/whatsapp.png";

const LeadStats = ({ stats }) => {
  const cards = [
    {
      icon: <Community />,
      name: "Visitantes",
      subtitle: "Pessoas que acessaram seu site",
      value: stats.visitantes,
    },
    {
      icon: <MessageCircleDots2 />,
      name: "Conversas",
      subtitle: "Iniciaram uma conversa com a IA",
      value: stats.conversas,
    },
    {
      icon: { Wpp },
      name: "Cliques no WhatsApp",
      subtitle: "Foram direcionadas para seu contato",
      value: stats.cliquesWhatsapp,
    },
  ];

  return (
    <>
      <p className="px-2 my-1 ml-4 text-xs montserrat text-[#212121]/70">
        Atividade de Conteúdo
      </p>
      <div className="grid grid-cols-2 gap-2 mx-4">
        {cards.map((item, index) => (
          <div
            key={item.name}
            className={`relative overflow-hidden bg-white shadow-xs px-4 py-4 rounded-2xl space-y-2 ${index === 2 ? "col-span-2 py-4 bg-linear-to-tr from-emerald-600 to-emerald-500 text-white" : "col-span-1 text-[#212121]"}`}
          >
            <p className="text-3xl montserrat">{item.value}</p>
            <p className="text-xs opacity-50">{item.name}</p>
            {index === 2 ? (
              <img
                src={Wpp}
                alt="icon"
                className="absolute -right-8 -top-8 scale-90 invert opacity-30"
              />
            ) : (
              <span
                className={`absolute top-4 right-4 ${index === 0 ? "text-emerald-300" : "text-red-300"}`}
              >
                {item.icon}
              </span>
            )}
            {/* <span className="text-xs text-gray-800/50">{item.subtitle}</span> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default LeadStats;
