"use client";
import Link from "next/link"
import { useState } from "react";


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
  const [darkmode, setDarkMode] = useState(false)
  const toggleDarkMode = () => { setDarkMode(!darkmode) }

  return (

    <nav className="container mx-auto flex justify-between items-center">    

      <span className="mt-5 text-black-600 font-mono">
        <div className=" p-2 pl-4 pr-4  bg-gray-700 rounded-full">
          <ul class="flex space-x-4"><li><a href="/">
          <span class="hover:text-gray-400">Home</span>
           </a></li><li><a href="/about">
             <span class="hover:text-gray-400">About</span>
             </a></li><li><a href="/services">
               <span class="hover:text-gray-400">Services</span>
               </a></li><li><a href="/products">
                 <span class="hover:text-gray-400">Products</span>
                 </a></li><li><a href="/contact">
                   <span class="hover:text-gray-400">Contact</span>
                   </a></li></ul>
        </div>
      </span>

     

    </nav>
    // </div>

  )
}