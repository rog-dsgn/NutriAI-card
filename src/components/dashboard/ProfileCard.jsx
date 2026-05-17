const ProfileCard = () => {
  return (
    <article className="flex flex-row gap-3 w-full">
      <div className="flex flex-col flex-1">
        <span className="text-xs opacity-70">Dashboard</span>
        <span className="montserrat opacity-90">Studio Content AI</span>
      </div>
      <figure>
        <img
          src="/avatar.png"
          alt="profile-pic"
          className="w-10 aspect-square rounded-full"
        />
      </figure>
    </article>
  );
};

export default ProfileCard;
