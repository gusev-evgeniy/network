import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  withCredentials: true,
  headers: {
    'API-KEY': '31685092-a073-4e46-aa92-2ebd0b3db0bd',
  },
})

enum ResultCode {
  success = 0,
  error = 1,
  captcha = 10,
}

export type ServerResponseType<T = {}> = {
  resultCode: ResultCode
  messages: string
  data: T
}
