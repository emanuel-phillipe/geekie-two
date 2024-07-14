import { actionTypes, stages } from "./InfoProvider"

type actionType = typeof actionTypes[number]

interface InitialState {
  userBasicInfo: object
  currentPage: {
    name: string
    index: number
  }
}

interface ReducerAction {
  type: actionType
  payload: string
}

type ContextProviderProps = {
  children?: ReactNode
}

interface defaultValue {
  state: InitialState;
  dispatch: React.Dispatch<ReducerAction>;
}