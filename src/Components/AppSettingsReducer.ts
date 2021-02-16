import { ThunkAction } from 'redux-thunk'
import { AppStateType, InferActionsTypes } from './Reducers'
import icon from '../images/icon.png'

const COMPLETE = 'initializeReducer/COMPLETE'

type InitialType = {
  isInitial: boolean
  defaultImage: string
}
const initialState: InitialType = {
  isInitial: false,
  defaultImage: icon,
}

export const MainSettingsReducer = (
  state = initialState,
  action: ActionsType
): InitialType => {
  switch (action.type) {
    case COMPLETE:
      return { ...state, isInitial: true }
    default:
      return state
  }
}

type ActionsType = InferActionsTypes<typeof actions>

const actions = {
  completeInitialize: () => ({ type: COMPLETE } as const),
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const requestInitialize = (): ThunkType => async (dispatch) => {
  dispatch(actions.completeInitialize())
}
