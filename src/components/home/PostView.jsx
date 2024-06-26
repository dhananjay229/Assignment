import Link from "next/link"

export default function PostView(props) {
  const { post } = props
  return (
    <div className="p-8 my-2 rounded-lg text-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800 hover:bg-zinc-100" >
      <p className="border-l-2 dark:border-l-zinc-400 pl-2 my-2 text-sm">{post.date}</p>
      <h3 className="font-semibold py-1 my-2 dark:text-zinc-100 text-black">{post.title}</h3>
      <p className="text-sm font-light  my-2">{`${post.body.slice(0, 250)}...`}</p>
      <Link className="text-sm dark:text-emerald-300 text-emerald-500 hover:text-emerald-400 my-2" href="/">Read article</Link>
    </div>
  )
}