"use client"

import { InfoContext } from "@/context/InfoProvider"
import { useContext, useEffect, useState } from "react"

function FooterButton({lore, icon}:Props) {

  let {state, dispatch} = useContext(InfoContext)

  const [mouseEntered, setMouseEntered] = useState(false)
  const [optionSelected, setOptionSelected] = useState(state.currentPage.name === lore)

  useEffect(() => {
    setOptionSelected(state.currentPage.name === lore)
  })

  return (
    <button onClick={() => {dispatch({type: "CHANGE_PAGE", payload: lore})}} className={`relative items-center duration-300 flex ${optionSelected ? 'text-zinc-800' : 'text-zinc-500'} transition-transform hover:text-zinc-800 font-medium gap-2 ${optionSelected ? 'bg-zinc-100' : ''} hover:bg-zinc-100 rounded-md p-2`} onMouseEnter={() => setMouseEntered(true)} onMouseLeave={() => setMouseEntered(false)}>
      {icon}
      {
        !optionSelected ?<span className={`transition-all duration-300 ${mouseEntered ? 'opacity-100 max-w-96' : 'opacity-0 max-w-0 overflow-hidden'}`}>{lore}</span> : lore
      }
    </button>
  )
}

export default FooterButton