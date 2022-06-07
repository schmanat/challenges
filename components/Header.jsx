import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header className="border-cyan-600 border-t-4 w-full bg-white border-b-slate-200 border-b drop-shadow-sm">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto py-4 px-4">
        <Logo />
        <Link href="https://github.com/schmanat" passHref>
          <a>
            <FaGithub
              size={24}
              className="hover:cursor-pointer hover:text-cyan-600 transition-colors duration-300"
            />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
