import { MyDataTypes } from '../../Types/Types'
import { ServerResponseType } from '../api'
import { instance } from '../api'

type SignInResponseType = {
  userId: number
}

type CaptchaResponseType = {
  url: string
}

export const authAPI = {
  getMyData: async () => {
    return await instance
      .get<ServerResponseType<MyDataTypes>>('/auth/me')
      .then((res) => res.data)
  },
  delete: async () => {
    return await instance
      .delete<ServerResponseType>('/auth/login')
      .then((res) => res.data)
  },
  signIn: async (
    email: string,
    password: string,
    rememberMe = false,
    captcha: string | null = null
  ) => {
    return await instance
      .post<ServerResponseType<SignInResponseType>>('/auth/login', {
        email,
        password,
        rememberMe,
        captcha,
      })
      .then((res) => res.data)
  },
  getCaptcha: async () => {
    return await instance
      .get<CaptchaResponseType>('/security/get-captcha-url')
      .then((res) => res.data)
  },
}
