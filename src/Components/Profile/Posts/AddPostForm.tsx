import React from 'react'
import { useForm } from 'react-hook-form'

type PropsType = {
  addNewPost: (post: string) => void
}

const AddPostForm: React.FC<PropsType> = ({ addNewPost }) => {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = handleSubmit(({ newPost }) => {
    addNewPost(newPost)
    reset()
  })

  return (
    <form onSubmit={onSubmit}>
      <input name='newPost' ref={register} placeholder='Add new post' />
    </form>
  )
}

export default AddPostForm
