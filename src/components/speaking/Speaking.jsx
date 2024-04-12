import React from 'react'
import Heading from './Heading'
import SpeakingCard from './SpeakingCard'
export const conferencesArr = [
  {
    key: 0,
    date: "SysConf 2021",
    title: "In space, no one can watch you stream — until now",
    body: "A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth."
  },
  {
    key: 1,
    date: "Business of Startups 2020",
    title: "Lessons learned from our first product recall",
    body: "They say that if you’re not embarassed by your first version, you’re doing it wrong. Well when you’re selling DIY space shuttle kits it turns out it’s a bit more complicated."
  },
]

export const podcastsArr = [
  {
    key: 0,
    date: "Encoding Design, July 2022",
    title: "Using design as a competitive advantage",
    body: "How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria."
  },
  {
    key: 1,
    date: "The Escape Velocity Show, March 2022",
    title: "Bootstrapping an aerospace company to $17M ARR",
    body: "The story of how we built one of the most promising space startups in the world without taking any capital from investors."
  },
  {
    key: 2,
    date: "How They Work Radio, September 2021",
    title: "Programming your company operating system",
    body: "On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation."
  },

]

export default function Speaking() {
  return (
    <div className='w-full'>
      <div className="my-16">
        <h2 className="font-semibold mx-4 dark:text-white">Conferences</h2>
        {conferencesArr.map(i => (
          <div key={i.key}>
            <SpeakingCard {...i} />
          </div>
        ))}
      </div>
      <div className="my-16">
        <h2 className="font-semibold mx-4 dark:text-white">Podcasts</h2>
        {podcastsArr.map(i => (
          <div key={i.key}>
            <SpeakingCard {...i} />
          </div>
        ))}
      </div>
    </div>
  )
}

// export default Speaking