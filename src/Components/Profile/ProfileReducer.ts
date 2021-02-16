import { ProfileType, PhotosType } from '../../Types/Types'
import { AppStateType, InferActionsTypes } from '../Reducers'
import { ThunkAction } from 'redux-thunk'
import { ProfileAPI } from './ProfileDAL'

const SET_DATA = 'ProfileReducer/SET_PROFILE_DATA'
const SET_STATUS = 'ProfileReducer/SET_PROFILE_PROFILE'
const UPDATE_PHOTO = 'ProfileReducer/UPDATE_PHOTO'

const initialState = {
  userId: 0,
  lookingForAJob: false,
  lookingForAJobDescription: '',
  fullName: '',
  aboutMe: '',
  status: '',
  photos: { large: null, small: null } as PhotosType,
}

type initialStateType = typeof initialState

export const ProfileReducer = (
  state = initialState,
  action: ActionsType
): initialStateType => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, ...action.payload }
    case SET_STATUS:
      return { ...state, status: action.payload }
    case UPDATE_PHOTO:
      return { ...state, photos: action.payload }
    default:
      return state
  }
}

type ActionsType = InferActionsTypes<typeof actions>

const actions = {
  setProfileData: (data: ProfileType) =>
    ({ type: SET_DATA, payload: data } as const),
  setProfileStatus: (data: string) =>
    ({ type: SET_STATUS, payload: data } as const),
  updatePhoto: (photo: PhotosType) =>
    ({ type: UPDATE_PHOTO, payload: photo } as const),
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const requestProfileStatus = (userId: string): ThunkType => async (dispatch) => {
  let response = await ProfileAPI.getStatus(userId)

  dispatch(actions.setProfileStatus(response))
}

export const requestProfileData = (userId: string): ThunkType => async (dispatch) => {
  let response = await ProfileAPI.getData(userId)

  dispatch(actions.setProfileData(response))
  dispatch(requestProfileStatus(userId))
}

export const sendStatus = (status: string, userId: number): ThunkType => async (dispatch) => {
  let response = await ProfileAPI.sendStatus(status)

  if (response.resultCode === 0) dispatch(requestProfileData(String(userId)))
}

export const sendProfileData = (profileData: ProfileType): ThunkType => async (dispatch) => {
  let response = await ProfileAPI.sendData(profileData)

  if (response.resultCode === 0) dispatch(requestProfileData(profileData.userId.toString()))
}

export const loadPhoto = (photo: string): ThunkType => async (dispatch) => {
  let response = await ProfileAPI.loadPhoto(photo)

  if (response.resultCode === 0) dispatch(actions.updatePhoto(response.data))
}
