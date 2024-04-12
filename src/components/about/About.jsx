import React from 'react'
import Image from "next/image"

const About = () => {
  return (

    <main className="flex-auto">
      <div className="sm:px-8 mt-16 sm:mt-32">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:order-first lg:row-span-2 lg:mb-10">
                  <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                    I’m Spencer Sharp. I live in New York City, where I design the future.</h1>
                  <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                    <p>I’ve loved making things for as long as I can remember, and wrote my first program
                      when I was 6 years old, just two weeks after my mom brought home the brand new Macintosh
                      LC 550 that I taught myself to type on.</p>
                    <p>The only thing I loved more than computers as a kid was space. When I was 8, I climbed
                      the 40-foot oak tree at the back of our yard while wearing my older sister’s motorcycle helmet,
                      counted down from three, and jumped — hoping the tree was tall enough that with just a bit of
                      momentum I’d be able to get to orbit.</p><p>I spent the next few summers indoors working on
                        a rocket design, while I recovered from the multiple surgeries it took to fix my badly broken
                        legs. It took nine iterations, but when I was 15 I sent my dad’s Blackberry into orbit and was
                        able to transmit a photo back down to our family computer from space.</p>
                    <p>Today, I’m the founder of Planetaria, where we’re working on civilian space suits and
                      manned shuttle kits you can assemble at home so that the next generation of kids really
                      can make it to orbit — from the comfort of their own backyards.</p></div>
                </div>
                <div className="lg:pl-20">
                  <ul role="list">
                    <li class="flex">
                      <a class="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500" href="#">
                        
                        <span class="ml-4">Follow on X</span>
                      </a>
                    </li>
                    <li class="mt-4 flex">
                      <a class="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500" href="#">
                        <span class="ml-4">Follow on Instagram</span>
                      </a>
                    </li>
                    <li class="mt-4 flex"><a class="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500" href="#">

                      <span class="ml-4">Follow on GitHub</span>
                    </a>
                    </li>
                    <li class="mt-4 flex">
                      <a class="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500" href="#">
                        <span class="ml-4">Follow on LinkedIn</span>
                      </a>
                    </li>
                    <li class="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex">
                      <a class="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500" href="mailto:spencer@planetaria.tech">
                        <span class="ml-4 my-4">spencer@planetaria.tech</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>


  )
}

export default About