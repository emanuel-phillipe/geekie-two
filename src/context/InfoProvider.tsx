import { createContext, Reducer, useReducer } from "react";
import { ContextProviderProps, defaultValue, InitialState, ReducerAction } from "./context";

export const stages = ["Página Inicial", "Atividades", "Avaliações", "Sala de Aula", "Configurações", "Perfil"];
export const actionTypes = ["CHANGE_PAGE"] as const;

const initialState:InitialState = {
  userBasicInfo: {},
  currentPage: {name: "Página Inicial", index: 0},
}

const infoReducer: Reducer<InitialState, ReducerAction> = (state, action) => {
  
  switch(action.type) {
    case "CHANGE_PAGE":

      return {
        ...state,
        currentPage: {name: action.payload, index: stages.indexOf(action.payload)}
      }
  }
}

export const InfoContext = createContext<defaultValue>({state: initialState, dispatch: () => {}});

export const InfoProvider = ({children}:ContextProviderProps) => {
  const [state, dispatch] = useReducer(infoReducer, initialState)

  return <InfoContext.Provider value={{state, dispatch}}>{children}</InfoContext.Provider>
}  