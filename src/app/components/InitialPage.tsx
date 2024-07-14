import { InfoContext } from "@/context/InfoProvider"
import { useContext } from "react"

export default function InitialPage() {

  let {state, dispatch} = useContext(InfoContext)

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold">Olá, Emanuel Phillipe!</h1>
        <p className="text-zinc-500">Hoje é dia 14 de julho de 2024</p>
      </div>
    </div>
  )
}