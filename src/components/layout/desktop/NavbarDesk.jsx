import React from "react";

const NavbarDesk = () => {
  return (
    <header className="w-full max-md:hidden bg-pink-200">
      <nav>
        <ul className="flex flex-row gap-6">
          <li className="cursor-pointer">Dashboard</li>
          <li className="cursor-pointer">Analytics</li>
        </ul>
      </nav>
    </header>
  );
};

export default NavbarDesk;
