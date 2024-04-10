import React from 'react'
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      {/* <div className=" text-white py-4 mx-10">
      <div className="container mx-auto flex justify-between items-center">
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/"><span className="hover:text-gray-400">Home</span></Link></li>
            <li><Link href="/about"><span className="hover:text-gray-400">About</span></Link></li>
            <li><Link href="/services"><span className="hover:text-gray-400">Services</span></Link></li>
            <li><Link href="/products"><span className="hover:text-gray-400">Products</span></Link></li>
            <li><Link href="/contact"><span className="hover:text-gray-400">Contact</span></Link></li>
          </ul>
        </nav>
      </div>
    </div> */}

      <footer class="mt-32 flex-none">
        <div class="sm:px-8">
          <div class="mx-auto w-full max-w-7xl lg:px-8">
            <div class="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
              <div class="relative px-4 sm:px-8 lg:px-12">
                <div class="mx-auto max-w-2xl lg:max-w-5xl">
                  <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    <div class="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                      <a class="transition hover:text-teal-500 dark:hover:text-teal-400" href="/about">About</a>
                      <a class="transition hover:text-teal-500 dark:hover:text-teal-400" href="/projects">Projects</a>
                      <a class="transition hover:text-teal-500 dark:hover:text-teal-400" href="/speaking">Speaking</a>
                      <a class="transition hover:text-teal-500 dark:hover:text-teal-400" href="/uses">Uses</a>
                    </div>
                    <p class="text-sm text-zinc-400 dark:text-zinc-500">©  Spencer Sharp. All rights reserved.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>


  )
}

export default Footer