import Image from "next/image"
import Link from "next/link"
import { BsLink45Deg } from "react-icons/bs"


export default function ProjecCard(props) {
  const { title, body, link } = props

  return (
    <>
      <div className="max-w-sm rounded-xl overflow-hidden shadow-lg mx-auto my-4 dark:text-zinc-400 hover:text-emerald-500 dark:hover:bg-zinc-800">
        <div className="px-6 py-4">
          <h2 className="text-zinc-900 hover:text-zinc-900 dark:text-zinc-100 font-semibold py-4">{title}</h2>
          <p className="text-zinc-900 hover:text-zinc-900 dark:text-zinc-400">{body}</p>
          <Link href="/" className=" flex flex-row items-center py-4 dark:text-zinc-100 dark:hover:text-emerald-500 " >
            <div className="mr-2">
              <BsLink45Deg />
            </div>
            {link}
          </Link>
        </div>
      </div>
    </>
  )
}