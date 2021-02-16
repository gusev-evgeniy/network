import React from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  term: string
  friend: any
}

type PropsType = {
  requestUsers: (
    page: number,
    term: string,
    usersOnPage: number,
    friend: string
  ) => void
}

export const UserFillter: React.FC<PropsType> = ({ requestUsers }) => {
  const { handleSubmit, register } = useForm<FormData>()
  const onSubmit = handleSubmit((data) => {
    const { term, friend } = data

    requestUsers(1, term, 30, friend)
  })

  return (
    <form onSubmit={onSubmit}>
      <div className='input-field userFillter'>
        <input type='text' name='term' ref={register()} placeholder='search' />
        <select name='friend' className='col s12 m4' ref={register}>
          <option value='null'>All</option>
          <option value='true'>Followed </option>
          <option value='false'>Not Followed </option>
        </select>
      </div>
      <button className='btn'>Submit</button>
    </form>
  )
}
