import { PostType } from '../../../Types/Types'
import { InferActionsTypes } from '../../Reducers'

const ADD_NEW_POST = 'postsReducer/ADD_NEW_POST'

export const PostsReducer = (
  state: PostType[] = [],
  action: ActionsType
): PostType[] => {
  switch (action.type) {
    case ADD_NEW_POST:
      return [...state, { id: state.length + 1, text: action.payload }]
    default:
      return state
  }
}

type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
  addNewPost: (text: string) => ({ type: ADD_NEW_POST, payload: text }),
}
