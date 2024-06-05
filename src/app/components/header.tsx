import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-yellow-400 py-4 px-4 fixed h-20 top-0 left-0 right-0 z-10">
      <nav className="flex items-center justify-between">
        <div>
          <Link href="/">
            <img src="/easybetsLogo.png" alt="Easybet Logo" className="h-12" />
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/aviator"
              className="text-black hover:text-black hover:bg-blue-200 hover:rounded px-2 py-2 transition-all duration-300"
            >
              AVIATOR
            </Link>
          </li>
          <li>
            <Link
              href="/vegas-games"
              className="text-black hover:text-black hover:bg-blue-200 hover:rounded px-2 py-2 transition-all duration-300"
            >
              VEGAS GAMES
            </Link>
          </li>
          <li>
            <Link
              href="/vegas-tables"
              className="text-black hover:text-black hover:bg-blue-200 hover:rounded px-2 py-2 transition-all duration-300"
            >
              VEGAS TABLES
            </Link>
          </li>
          <li>
            <Link
              href="/sport"
              className="text-black hover:text-black hover:bg-blue-200 hover:rounded px-2 py-2 transition-all duration-300"
            >
              SPORT
            </Link>
          </li>
          <li>
            <Link
              href="/live-sport"
              className="text-black hover:text-black hover:bg-blue-200 hover:rounded px-2 py-2 transition-all duration-300"
            >
              LIVE SPORT
            </Link>
          </li>
          <li>
            <Link
              href="/lucky-numbers"
              className="text-black hover:text-black hover:bg-blue-200 hover:rounded px-2 py-2 transition-all duration-300"
            >
              LUCKY NUMBERS
            </Link>
          </li>
          <li>
            <Link
              href="/spin-win"
              className="text-black hover:text-black hover:bg-blue-200 hover:rounded px-2 py-2 transition-all duration-300"
            >
              SPIN & WIN
            </Link>
          </li>
          <li>
            <Link
              href="/winners-wheel"
              className="text-black hover:text-black hover:bg-blue-200 hover:rounded px-2 py-2 transition-all duration-300"
            >
              WINNERS WHEEL
            </Link>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <div className="bg-black px-2 py-2 rounded-full">
            <span className="text-yellow-500 font-bold">DU</span>
          </div>
          <div className="text-black">Demo User</div>
          <div className="text-black">0827760381</div>
          <div className="text-black">R100000.00</div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
