import { UserType } from '../../Types/Types'
import { instance, ServerResponseType } from '../api'

export type UsersServerResponse = {
  items: Array<UserType>
  totalCount: number
}

export const UsersAPI = {
  getUsers: async (
    page: number,
    usersOnPage: number,
    term: string,
    friend: any
  ) => {
    return await instance
      .get<UsersServerResponse>(
        `/users/?page=${page}&count=${usersOnPage}&term=${term}` +
          (friend == null ? '' : `&friend=${friend}`)
      )
      .then((res) => res.data)
  },
  followUser: async (userId: number) => {
    return await instance
      .post<ServerResponseType>(`/follow/${userId}`)
      .then((res) => res.data)
  },
  unfollowUser: async (userId: number) => {
    return await instance
      .delete<ServerResponseType>(`/follow/${userId}`)
      .then((res) => res.data)
  },
}
