import { Heart, Menu, ShoppingCart } from "lucide-react";
import React, { useEffect, useState } from "react";

const MobileMenue = ({ active }) => {
  return (
    <nav
      className={`flex flex-col gap-4 w-full overflow-hidden ${ active ? "h-fit" : "h-0"
      } absolute top-full left-0 ` }
    >
      <div className="flex flex-col items-center gap-8">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
};

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <nav className="px-8 md:px-10 lg:px-16 flex items-center justify-between h-16 border-b border-gray-200 relative">
      <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">PUR TRESOR</h1>
      <MobileMenue active={active} />
      <div className="items-center gap-8 hidden md:flex">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <div className="flex items-center gap-4 ">
        <Heart />
        <ShoppingCart />
        <img src="./user.webp" alt="profile" className="w-6 h-6 rounded-full" />
        <Menu
          className="flex md:hidden cursor-pointer"
          onClick={() => setActive(!active)}
        />
      </div>
    </nav>
  );
};

export default Header;