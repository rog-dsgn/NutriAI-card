const ProfileCard = () => {
  return (
    <article className="flex flex-row gap-3 w-fit px-6 py-3">
      <figure>
        <img
          src="/avatar.png"
          alt="profile-pic"
          className="w-10 aspect-square rounded-full"
        />
      </figure>
      <div className="flex flex-col">
        <span className="text-lg font-medium">Marina Souza</span>
        <span className="text-xs text-black/30">AI content Studio</span>
      </div>
    </article>
  );
};

export default ProfileCard;
