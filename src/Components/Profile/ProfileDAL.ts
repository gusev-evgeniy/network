import { PhotosType, ProfileType } from '../../Types/Types'
import { instance, ServerResponseType } from '../api'

export const ProfileAPI = {
  getStatus: async (userId: string) => {
    return await instance
      .get<string>(`/profile/status/${userId}`)
      .then((res) => res.data)
  },
  getData: async (userId: string) => {
    return await instance
      .get<ProfileType>(`/profile/${userId}`)
      .then((res) => res.data)
  },
  sendStatus: async (status: string) => {
    return await instance
      .put<ServerResponseType>(`/profile/status`, { status })
      .then((res) => res.data)
  },
  sendData: async (profileData: ProfileType) => {
    return await instance
      .put<ServerResponseType>(`/profile`, { ...profileData })
      .then((res) => res.data)
  },
  loadPhoto: async (photo: string) => {
    const formData = new FormData()
    formData.append('image', photo)

    return await instance
      .put<ServerResponseType<PhotosType>>('/profile/photo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => res.data)
  },
}
