import React from "react"

export const workstationArr = [
  {
    key: 0,
    date: "19 Feb 2023",
    title: "16” MacBook Pro, M1 Max, 64GB RAM (2021)",
    body: "I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations."
  },
  {
    key: 1,
    date: "18 Feb 2023",
    title: "Apple Pro Display XDR (Standard Glass)",
    body: "The only display on the market if you want something HiDPI and bigger than 27”. When you’re working at planetary scale, every pixel you can get counts."
  },
  {
    key: 2,
    date: "17 Feb 2023",
    title: "IBM Model M SSK Industrial Keyboard",
    body: "They don’t make keyboards the way they used to. I buy these any time I see them go up for sale and keep them in storage in case I need parts or need to retire my main."
  },
  {
    key: 3,
    date: "16 Feb 2023",
    title: "Apple Magic Trackpad",
    body: "Something about all the gestures makes me feel like a wizard with special powers. I really like feeling like a wizard with special powers."
  },
  {
    key: 3,
    date: "16 Feb 2023",
    title: "Herman Miller Aeron Chair",
    body: "If I’m going to slouch in the worst ergonomic position imaginable all day, I might as well do it in an expensive chair."
  },
]

export const devToolsArr = [
  {
    key: 0,
    date: "19 Feb 2023",
    title: "Sublime Text 4",
    body: "I don’t care if it’s missing all of the fancy IDE features everyone else relies on, Sublime Text is still the best text editor ever made."
  },
  {
    key: 1,
    date: "18 Feb 2023",
    title: "iTerm2",
    body: "I’m honestly not even sure what features I get with this that aren’t just part of the macOS Terminal but it’s what I use."
  },
  {
    key: 2,
    date: "17 Feb 2023",
    title: "TablePlus",
    body: "Great software for working with databases. Has saved me from building about a thousand admin interfaces for my various projects over the years."
  },
  {
    key: 3,
    date: "16 Feb 2023",
    title: "Figma",
    body: "We started using Figma as just a design tool but now it’s become our virtual whiteboard for the entire company. Never would have expected the collaboration features to be the real hook."
  },
]

export default function UsesCard() {
  return (
    <div className="dark:text-zinc-400 text-zinc-700 ml-4">
      <div className="my-16 ">
        <h2 className="m-4 font-semibold dark:text-zinc-100">Workstation</h2>
        {workstationArr.map(i => (
          <div className="p-4" key={i.key}>
            <h3 className="font-semibold text-zinc-900 py-2 dark:text-zinc-100">{i.title}</h3>
            <p className=" text-sm">{i.body}.</p>
          </div>
        ))}
      </div>
      <div className="my-16">
        <h2 className="m-4 font-semibold text-zinc-900 dark:text-zinc-100">Dev Tools</h2>
        {devToolsArr.map(i => (
          <div className="p-4" key={i.key}>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 py-2">{i.title}</h3>
            <p className=" text-sm">{i.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}