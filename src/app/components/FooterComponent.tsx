"use client"
import { Exam, Gear, House, Notebook, UsersFour } from "@phosphor-icons/react/dist/ssr";
import FooterButton from "./FooterButton";
import { useContext } from "react";
import { InfoContext } from "@/context/InfoProvider";

const footerButtons = [
  {lore: "Página Inicial", icon: <House size={24}/>},
  {lore: "Atividades", icon: <Notebook size={24}/>},
  {lore: "Avaliações", icon: <Exam size={24}/>},
  {lore: "Sala de Aula", icon: <UsersFour size={24}/>},
  {lore: "Configurações", icon: <Gear size={24}/>},
]

function FooterComponent() {

  let {state, dispatch} = useContext(InfoContext)

  return (
    <footer className="fixed left-0 bottom-5 w-full gap-3 flex justify-center">
        <div className="bg-zinc-50 border-[0.7px] w-max p-2 h-14 rounded-lg flex gap-2">
          {
            footerButtons.map((option, index) => {
              return (<FooterButton lore={option.lore} icon={option.icon} key={index}/>)
            })
          }
        </div>
        <div className="bg-zinc-50 border-[0.7px] w-max p-2 h-14 rounded-lg flex items-center gap-3">
          <div className="bg-zinc-500 w-10 h-full rounded-md">
            
          </div>
          <div className="flex flex-col pr-1">
            <span className="mt-0 font-semibold">Emanuel Phillipe Ribeiro</span>
            <span className="text-[0.8rem] mt-[-0.2rem] text-zinc-600">Colégio Santa Maria (CE)</span>
          </div>
        </div>
      </footer>
  )
}
 
export default FooterComponent