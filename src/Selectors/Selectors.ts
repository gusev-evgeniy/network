import { AppStateType } from '../Components/Reducers'

export const getMyData = (state: AppStateType) => {
  return state.myData
}
export const getProfileData = (state: AppStateType) => {
  return state.profile
}
export const getInitialInfo = (state: AppStateType) => {
  return state.initialize.isInitial
}
export const getAuthInfo = (state: AppStateType) => {
  return state.myData.isAuth
}
export const getUsers = (state: AppStateType) => {
  return state.users.items
}
export const getTotalCount = (state: AppStateType) => {
  return state.users.totalCount
}
export const getUsersOnPage = (state: AppStateType) => {
  return state.users.usersOnPage
}
export const getDefaultImage = (state: AppStateType) => {
  return state.initialize.defaultImage
}
export const getProfilePhotos = (state: AppStateType) => {
  return state.profile.photos
}
export const getDisableButtons = (state: AppStateType) => {
  return state.users.disableButtons
}
export const getPosts = (state: AppStateType) => {
  return state.posts
}
export const getCurrentPage = (state: AppStateType) => {
  return state.users.currentPage
}
export const getFilter = (state: AppStateType) => {
  return state.users.filter
}
