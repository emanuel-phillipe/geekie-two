"use client"
import { useContext } from "react";
import FooterComponent from "./components/FooterComponent"
import { InfoContext } from "@/context/InfoProvider";
import InitialPage from "./components/InitialPage";

export default function Home() {

  let {state, dispatch} = useContext(InfoContext)
  const pages = [<InitialPage />]

  return (
    <main className="">
      {pages[state.currentPage.index]}
      <FooterComponent />
    </main>
  );
}
 