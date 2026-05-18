import { chatConfig } from "../../config/chatConfig";

const ProfileCard = () => {
  const { name } = chatConfig;

  return (
    <article className="flex flex-row gap-3 w-full">
      <div className="flex flex-col flex-1">
        <span className="text-xs opacity-70">Bem vinda,</span>
        <span className="montserrat opacity-90">{name}</span>
      </div>
      <figure>
        <img
          src="/avatar.png"
          alt={`foto de ${name}`}
          className="w-10 aspect-square rounded-full"
        />
      </figure>
    </article>
  );
};

export default ProfileCard;
