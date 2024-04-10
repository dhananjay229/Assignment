import Link from "next/link"
import { MdWorkOutline } from "react-icons/md"
import WorkList from "./workList"

export const workListItem = [
  {
    company: "Planetaria",
    position: "CEO",
    years: "2019-present",
    id: "job-0"
  },
  {
    company: "Airbnb",
    position: "Product Designer",
    years: "2014-19",
    id: "job-1"
  },
  {
    company: "Facebook",
    position: "iOS Software Engineer",
    years: "2011-14",
    id: "job-2"
  },
  {
    company: "Starbucks",
    position: "Shift Supervisor",
    years: "2008-2011",
    id: "job-3"
  },
]

export default function Work() {
  return (
    <div className="dark:text-zinc-400 dark:border-zinc-700 flex flex-col border shadow-sm  my-8 mx-8 p-4 rounded-lg" data-testid="work-history-div">
      <div className="flex flex-row items-center py-2">
        <div className="text-black">
          <MdWorkOutline />
        </div>
        <h2 className="ml-2 font-semibold dark:text-zinc-100">Work</h2>
      </div>
      <div>
        {workListItem.map(i => (
          <div key={i.id}>
            <WorkList company={i.company} position={i.position} years={i.years}/>
          </div>
        ))}
      </div>
      <Link className="rounded bg-slate-50 hover:bg-slate-100 text-center p-2 m-4 text-sm dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-200" href="/about" data-testid="cv-link">
        Download CV
      </Link>
    </div>
  )
}