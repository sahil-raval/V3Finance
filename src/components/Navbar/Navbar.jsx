import React, { useState, useEffect } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import Logo from "../../assets/logo.png"

import ResponsiveMenu from "./ResponsiveMenu";
import { Link, useLocation } from "react-router-dom";

export const Navlinks = [
  { id: 1, name: "Services", link: "/services" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Referral", link: "/referral" },
  { id: 4, name: "Inquiry", link: "/inquiry" },
  { id: 5, name: "Settlements", link: "/settlements" },
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation(); // React Router hook to get the current route

  // Close the menu when the route changes
  useEffect(() => {
    setShowMenu(false);
  }, [location]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="fixed top-0 left-0 z-30 w-full shadow-md dark:bg-black dark:text-white bg-white duration-300">
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/">
              <img className="h-12" src={Logo} alt="Logo" />
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className="text-lg font-medium font-philosopher hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                  >
                    {name}
                  </a>
                </li>
              ))}
              <li className="relative group py-4">
                <button className="text-lg font-medium font-philosopher py-2 px-6 bg-secondary-200 text-white shadow-md transition-all duration-300 transform hover:bg-teal-500 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-teal-300">
                  Contact
                </button>

                <div className="absolute hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg rounded-md p-6 space-y-2 w-48 mt-2">
                  <p className="text-md text-primary hover:text-black dark:text-white">(03) 9988 1088</p>
                  <Link to="/inquiry" className="text-md text-primary hover:text-black dark:text-teal-500">
                    Request a Callback
                  </Link>
                </div>
              </li>
              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-2xl cursor-pointer"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-2xl cursor-pointer"
                />
              )}
            </ul>
          </nav>
          <div className="flex items-center gap-4 md:hidden">
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl cursor-pointer"
              />
            )}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <div>
        <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
    </div>
  );
};

export default Navbar;
