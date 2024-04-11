import Link from "next/link"

const footerLinks = [
  {
    title: "About",
    id: "about-link",
    link: "/about"
  },
  {
    title: "Projects",
    id: "projects-link",
    link: "/projects"
  },
  {
    title: "Speaking",
    id: "speaking-link",
    link: "/speaking"
  },
  {
    title: "Uses",
    id: "uses-link",
    link: "/uses"
  }
    
]

export default function Footer() {
  return (
    <div className="w-screen body-width text-lg flex lg:flex-row flex-col justify-evenly items-center h-32  border-t bg-white dark:bg-zinc-900 dark:border-zinc-700" >
      <div className=" flex flex-wrap justify-center gap-x-6 gap-y-1">
        {footerLinks.map(i => (
          <Link className="dark:hover:text-emerald-500 p-1 dark:text-zinc-300" href={i.link} key={i.id} data-testid={i.id}>
            {i.title}
          </Link>
        ))}
      </div>
      <p className="font-light text-zinc-400 dark:text-zinc-500 ">
      © 2024 Spencer Sharp. All rights reserved.
      </p>
    </div>
   
  )
}