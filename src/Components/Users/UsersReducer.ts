import { ThunkAction } from 'redux-thunk'
import { instance } from '../api'
import { AppStateType, InferActionsTypes } from '../Reducers'
import { UserType } from '../../Types/Types'
import { UsersAPI } from './UsersAPI'

const LOAD = 'usersReducer/LOAD_USERS'
const UNFOLLOW = 'usersReducer/UNFOLLOW'
const FOLLOW = 'usersReducer/FOLLOW'
const DISABLE = 'usersReducer/DISABLE'
const ENABLE = 'usersReducer/ENABLE'
const UPDATE_PAGE = 'usersReducer/UPDATE_PAGE'
const SET_FILTER = 'usersReducer/SET_TERM'
const SET_TOTAL_COUNT = 'usersReducer/SET_TOTAL_COUNT'

const initialState = {
  items: [] as Array<UserType>,
  totalCount: 0,
  usersOnPage: 30,
  disableButtons: [] as Array<number>,
  currentPage: 1,
  filter: {
    term: '',
    friend: null as boolean | null,
  },
}

export type InitialStateType = typeof initialState

export const UsersReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case LOAD:
      return { ...state, items: action.payload }
    case SET_TOTAL_COUNT:
      return { ...state, totalCount: action.payload }
    case FOLLOW:
      return {
        ...state,
        items: state.items.map((user) =>
          user.id !== action.payload ? user : { ...user, followed: true }
        ),
      }
    case UNFOLLOW:
      return {
        ...state,
        items: state.items.map((user) =>
          user.id !== action.payload ? user : { ...user, followed: false }
        ),
      }
    case DISABLE:
      return {
        ...state,
        disableButtons: [...state.disableButtons, action.payload],
      }
    case UPDATE_PAGE:
      return { ...state, currentPage: action.payload }
    case SET_FILTER:
      return { ...state, filter: action.payload }
    case ENABLE:
      return {
        ...state,
        disableButtons: state.disableButtons.filter(
          (button) => button !== action.payload
        ),
      }
    default:
      return state
  }
}

type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
  loadUsers: (users: Array<UserType>) =>
    ({ type: LOAD, payload: users } as const),
  setTotalCount: (pages: number) =>
    ({ type: SET_TOTAL_COUNT, payload: pages } as const),
  updateFollowUser: (userId: number) =>
    ({ type: FOLLOW, payload: userId } as const),
  updateUnfollowUser: (userId: number) =>
    ({ type: UNFOLLOW, payload: userId } as const),
  disableFollowButton: (userId: number) =>
    ({ type: DISABLE, payload: userId } as const),
  enableFollowButton: (userId: number) =>
    ({ type: ENABLE, payload: userId } as const),
  updateCurrentPage: (page: number) =>
    ({ type: UPDATE_PAGE, payload: page } as const),
  setFilter: (term: string, friend: boolean | null) =>
    ({ type: SET_FILTER, payload: { term, friend } } as const),
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const requestUsers = (
  page = 1,
  usersOnPage = initialState.usersOnPage,
  term = '',
  friend: any = null
): ThunkType => async (dispatch) => {
  let response = await UsersAPI.getUsers(page, usersOnPage, term, friend)

  dispatch(actions.setFilter(term, friend))
  dispatch(actions.updateCurrentPage(page))
  dispatch(actions.loadUsers(response.items))
  dispatch(actions.setTotalCount(response.totalCount))
}

const sendFollowRequest = (
  request: any,
  userId: number,
  action: (id: number) => void
) => async (dispatch: any) => {
  dispatch(actions.disableFollowButton(userId))

  let response = await request(userId)
  dispatch(actions.enableFollowButton(userId))

  if (response.resultCode === 0) dispatch(action(userId))
}

export const followUser = (userId: number): ThunkType =>
  sendFollowRequest(UsersAPI.followUser, userId, actions.updateFollowUser)

export const unfollowUser = (userId: number): ThunkType =>
  sendFollowRequest(UsersAPI.unfollowUser, userId, actions.updateUnfollowUser)
