import { MyDataTypes } from '../../Types/Types'
import { requestInitialize } from '../AppSettingsReducer'
import { AppStateType, InferActionsTypes } from '../Reducers'
import { authAPI } from './AuthDAL'
import { ThunkAction } from 'redux-thunk'

const SET_MY_DATA = 'myDataReducer/SET_MY_DATA'
const DELETE = 'myDataReducer/DELETE_MY_DATA'
const SET_CAPTCHA = 'myDataReducer/SET_CAPTCHA'
const SET_ERROR = 'myDataReducer/SET_ERROR'

const initialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captcha: '',
  error: '',
}

export type InitialState = typeof initialState

export const myDataReducer = (
  state = initialState,
  action: ActionsType
): InitialState => {
  switch (action.type) {
    case SET_MY_DATA:
      return { ...state, ...action.payload, isAuth: true }
    case DELETE:
      return initialState
    case SET_CAPTCHA:
      return { ...state, captcha: action.payload }
    case SET_ERROR:
      return { ...state, error: action.payload }
    default:
      return state
  }
}

type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
  setMyData: (data: MyDataTypes) =>
    ({ type: SET_MY_DATA, payload: data } as const),
  setError: (error: string) => ({ type: SET_ERROR, payload: error } as const),
  deleteMyData: () => ({ type: DELETE } as const),
  setCaptch: (captcha: string) =>
    ({ type: SET_CAPTCHA, payload: captcha } as const),
}

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>

export const requestMyData = (): ThunkType => async (dispatch) => {
  let response = await authAPI.getMyData()
  dispatch(requestInitialize())

  if (response.resultCode === 0) {
    dispatch(actions.setMyData(response.data))
  }
}

export const leaveAccount = (): ThunkType => async (dispatch) => {
  let response = await authAPI.delete()

  if (response.resultCode === 0) dispatch(actions.deleteMyData())
}

export const signIn = (
  email: string,
  password: string,
  rememberMe = false,
  captcha: string | null = null
): ThunkType => async (dispatch) => {
  let response = await authAPI.signIn(email, password, rememberMe, captcha)

  if (response.resultCode === 0) dispatch(requestMyData())
  if (response.resultCode === 10) dispatch(requestCaptcha())
  else dispatch(actions.setError(response.messages))
}

export const requestCaptcha = (): ThunkType => async (dispatch) => {
  let response = await authAPI.getCaptcha()

  dispatch(actions.setCaptch(response.url))
}
