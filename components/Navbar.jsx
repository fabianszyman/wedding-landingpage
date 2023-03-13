import React, { useState } from "react";
import { MenuIcon, XIcon, HeartIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className=" w-screen md:grid md:place-items-center h-[80px] text-darkgreen fixed top-0 z-50 scroll-smooth shadow-md font-Quicksand_Regular bg-weddingYellow">
      <div
        id="nav_container"
        className=" relative px-6 flex items-center w-full max-w-7xl h-full  overflow-auto"
      >
        <div id="logo_nav_items" className="float-left flex">
          {/*<h1 className="text-2xl font-bold mr-4 sm:text-xl">Anne & Fabian</h1>*/}
          <a href="#home" className="flex">
            <HeartIcon className="w-8" />
            <h1 className="text-2xl font-bold mr-4 sm:text-xl">A & F</h1>
          </a>

          <ul className="hidden md:right-2 md:absolute text-xl gap-12 md:w-full md:max-w-md px-4 md:flex">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#wann_und_wo_section" className="hover:underline">
                Wann & Wo
              </a>
            </li>
            <li>
              <a href="#antwort_section" className="hover:underline">
                Meine Antwort
              </a>
            </li>
          </ul>
        </div>

        <div className="md:hidden absolute right-6" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-8" /> : <XIcon className="w-8" />}
        </div>
      </div>
      <ul
        className={
          !nav ? "hidden" : "absolute w-full px-8 bg-weddingYellow shadow-md"
        }
      >
        <a href="#home">
          <li className="w-full py-6 text-xl" onClick={handleClick}>
            Home
          </li>
        </a>
        <a href="#wann_und_wo_section">
          <li className="w-full py-6 text-xl" onClick={handleClick}>
            Wann & Wo
          </li>
        </a>

        <a href="#antwort_section">
          <li className="w-full py-6 text-xl" onClick={handleClick}>
            Meine Antwort
          </li>
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
