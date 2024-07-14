import { InfoContext } from "@/context/InfoProvider"
import { useContext } from "react"
import RecentActivity from "./initialPage/RecentActivity"

export default function InitialPage() {

  let {state, dispatch} = useContext(InfoContext)

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold">Olá, Emanuel Phillipe!</h1>
        <p className="text-zinc-500">Hoje é dia 14 de julho de 2024</p>
      </div>

      <div className="grid grid-cols-2 mt-10">
        <div>
          <div className="border-[0.7px] border-zinc-300 w-max p-3 rounded-lg">

            <div>
              <p className="text-2xl font-semibold">03 atividades</p>
              <p className="text-zinc-500 text-[0.9rem] mt-[-2px]">abertas para hoje</p>
            </div>

            <div className="mt-5 flex flex-col gap-2">
              <RecentActivity activityName="Raízes & Potências" subjectAbreviation="MA"/>
              <RecentActivity activityName="Pronomes" subjectAbreviation="LP"/>
              <RecentActivity activityName="Talk Show" subjectAbreviation="CLI"/>
            </div>

          </div>
        </div>
        <div>
          ifjsifji
        </div>
      </div>
    </div>
  )
}