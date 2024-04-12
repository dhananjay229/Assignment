"use client";
import Link from "next/link"
import { useState } from "react";
import { BsMoonStars, BsSun } from 'react-icons/bs'


export const menuLinks = [
  {
    title: "About",
    link: "/about"
  },
  {
    title: "Articles",
    link: "/articles"
  },
  {
    title: "Projects",
    link: "/projects"
  },
  {
    title: "Speaking",
    link: "/speaking"
  },
  {
    title: "Uses",
    link: "/uses"
  }
]

export default function Header() {

  const handleToggle = () => {
    if (!localStorage.theme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.removeItem("theme")
    }

  }

  return (
    <div className=" body-width dark:bg-zinc-900 w-full flex flex-col  items-center lg:mx-[50px]">
      <div className="mt-2 flex flex-row items-center justify-center self-start md:self-center">
        <div className="border shadow-sm my-4 lg:mx-4 rounded-full md:flex flex-row justify-evenly items-center text-slate-800 dark:bg-zinc-800  dark:border-zinc-600">
          {menuLinks.map((i) => (
            <Link
              className=" px-2 z-40 py-2 lg:text-lg lg:font-medium text-zinc-800 dark:text-white dark:hover:text-teal-400 bg-gradient dark:border-0 "
              href={i.link}
              key={i.title}
            >
              {i.title}
            </Link>
          ))}
        </div>
        <div className=" flex flex-row ml-2">
          <button
            className=" hover:bg-slate-100 border shadow-sm rounded-full lg:text-xl h-10 lg:px-4 lg:mx-2 px-2 dark:hover:bg-zinc-800 dark:text-white dark:ring-white dark:hover:ring-white dark:border-zinc-600"
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
    </div>


  )
}
