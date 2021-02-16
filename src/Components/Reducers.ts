import { combineReducers } from 'redux'
import { myDataReducer } from './Auth/MyDataReducer'
import { ProfileReducer } from './Profile/ProfileReducer'
import { MainSettingsReducer } from './AppSettingsReducer'
import { UsersReducer } from './Users/UsersReducer'
import { PostsReducer } from './Profile/Posts/PostsReducer'

export const reducers = combineReducers({
  myData: myDataReducer,
  profile: ProfileReducer,
  initialize: MainSettingsReducer,
  users: UsersReducer,
  posts: PostsReducer,
})

type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>

// I don't understand this part. It's just works
type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsTypes<
  T extends { [key: string]: (...args: any[]) => any }
> = ReturnType<PropertiesTypes<T>>
