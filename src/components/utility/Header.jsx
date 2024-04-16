"use client";
import Link from "next/link";
import { useState } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";

export const menuLinks = [
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Articles",
    link: "/articles",
  },
  {
    title: "Projects",
    link: "/projects",
  },
  {
    title: "Speaking",
    link: "/speaking",
  },
  {
    title: "Uses",
    link: "/uses",
  },
];

export default function Header() {
  const handleToggle = () => {
    if (!localStorage.theme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  };

  const [navbar, setNavbar] = useState(false);

  return (
    
    <nav className=" dark:bg-zinc-900 text-slate-800 body-width z-10 w-full">
      <div className="justify-center lg:px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 ">
        <div className="flex items-center justify-between py-2 md:py-2 md:block">
          <div className="md:hidden">
            <button
              className="p-2 dark:text-white text-black rounded-md border-2 ml-52 focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <h1>Menu</h1>
              )}
            </button>
            <button
              className=" hover:bg-slate-100 border-2 rounded-full lg:text-xl h-10 px-4 mx-4 dark:hover:bg-zinc-800 dark:text-teal-400 dark:ring-white dark:hover:ring-white dark:border-zinc-600"
              onClick={() => handleToggle()}
            >
              <div className="hidden dark:flex">
                <BsMoonStars />
              </div>
              <div className="dark:hidden flex">
                <BsSun />
              </div>
            </button>
          </div>
        </div>
        <div
          className={`lg:border md:border shadow-sm lg:my-4 p-2 lg:mx-4 lg:rounded-full md:rounded-full md:flex flex-row justify-evenly items-center text-slate-800 lg:dark:bg-zinc-800  dark:border-zinc-600 ${
            navbar ? "block" : "hidden"
          }`}
        >
          <ul className="items-center justify-center space-y-4 md:flex md:space-x-6 md:space-y-0 mb-lg-0">
            {menuLinks.map((item) => (
              <li className="cursor-pointer font-header dark:text-white text-black dark:hover:text-teal-400 md:text-xl">
                <a href={item.link}>
                  <h1>{item.title}</h1>
                </a>
              </li>
            ))}
          </ul>          
        </div>
        <button
          className=" hidden lg:block hover:bg-slate-100 border shadow-sm rounded-full lg:text-xl h-10 lg:px-4 lg:mx-2 px-2 dark:hover:bg-zinc-800 dark:text-teal-400 dark:ring-white dark:hover:ring-white dark:border-zinc-600 "
          onClick={() => handleToggle()} >
          <div className="hidden dark:flex">
            <BsMoonStars />
          </div>
          <div className="dark:hidden flex">
            <BsSun />
          </div>
        </button>
      </div>
    </nav>
  );
}
