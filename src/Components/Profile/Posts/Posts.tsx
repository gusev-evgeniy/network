import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../../Selectors/Selectors'
import AddPostForm from './AddPostForm'
import { actions } from './PostsReducer'

type PropsType = {
  owner: boolean
}

export const Posts: React.FC<PropsType> = React.memo(({ owner }) => {
  const postsList = useSelector(getPosts)
  const dispatch = useDispatch()

  if (!owner) {
    return (
      <ul className='collection'>
        <li className='collection-item'> this user doesn't have post</li>
      </ul>
    )
  }

  const handleAddNewPost = (post: string) => {
    dispatch(actions.addNewPost(post))
  }

  return (
    <div className='submitPost'>
      <AddPostForm addNewPost={handleAddNewPost} />
      <ul className='collection'>
        {postsList.length === 0 ? (
          <li className='collection-item'> this user doesn't have post</li>
        ) : (
          postsList.map((post) => (
            <li key={post.id} className='collection-item'>
              {post.text}
            </li>
          ))
        )}
      </ul>
    </div>
  )
})
