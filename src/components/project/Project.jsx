import React from "react"
import ProjectCard from '@/components/project/ProjectCard'
// import { BsLink45Deg } from "react-icons/bs"

export const projectsArr = [
  {
    id: 0,
    title: "Planetaria",
    body: "Creating technology to empower civilians to explore space on their own terms",
    link: "planetaria.tech"
  },
  {
    id: 1,
    title: "Animaginary",
    body: "High perfomance web animation library, hand-written in optimized WASM. ",
    link: "github.com"
  },
  {
    id: 2,
    title: "HelioStream",
    body: "Real-time video streaming library, optimized for interstellar transmission.",
    link: "github.com"
  },
  {
    id: 3,
    title: "cosmOS",
    body: "The operating system that powers our Planetaria space shuttles.",
    link: "github.com"
  },
  {
    id: 4,
    title: "OpenShuttle",
    body: "The schematics for the first rockey I designed that successfully made it to orbit.",
    link: "github.com"
  },
]


export default function Project() {
  return (
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsArr.map(i => (
            <ProjectCard {...i} />
          ))}
        </div>
      </div>
  )
}