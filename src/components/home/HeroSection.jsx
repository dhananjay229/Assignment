import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { AiOutlineTwitter, 
  AiOutlineInstagram, 
  AiOutlineGithub, 
  AiOutlineLinkedin } from "react-icons/ai"

export default function HeroSection() {
  return (
    <div className=" lg:pl-[6rem] pl-8 my-12 max-w-[57rem] lg:w-2/3 text-zinc-700 dark:text-zinc-400">
      <h1 className="dark:text-zinc-100 text-6xl font-bold text-zinc-800">
      Software designer, founder, and amateur astronaut.
      </h1>
      <p className="py-8 max-w-[45rem]" data-testid="hero-blurb">
      I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.
      </p>
      <div className=" flex flex-row text-2xl " data-testid="social-links">
        <Link className="p-1 m-2 dark:hover:text-zinc-200 hover:text-zinc-600" href={"/"} >
        <BsTwitterX />
        </Link>
        <Link className="p-1 m-2 dark:hover:text-zinc-200 hover:text-zinc-600" href={"/"} >
          <AiOutlineInstagram />
        </Link>
        <Link className="p-1 m-2 dark:hover:text-zinc-200 hover:text-zinc-600" href={"/"} >
          <AiOutlineGithub />
        </Link>
        <Link className="p-1 m-2 dark:hover:text-zinc-200 hover:text-zinc-600" href={"/"} >
          <AiOutlineLinkedin />
        </Link>
      </div>
    </div>
  )
}