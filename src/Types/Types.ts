export type MyDataTypes = {
  id: number | null
  email: string | null
  login: string | null
}
export type ProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  aboutMe: string
}
export type StatusType = {
  status: string
}
export type PhotosType = {
  large: string | null
  small: string | null
}
export type UserType = {
  id: number
  name: string
  status: string
  followed: boolean
  photos: PhotosType
}
export type PostType = {
  id: number | null
  text: string | null
}
