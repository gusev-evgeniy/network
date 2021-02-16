import React from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  status: string
}

type PropsType = {
  userId: number
  value: string
  setUserStatus: (status: string) => void
  sendStatus: (status: string, userId: number) => void
}

const StatusEditor: React.FC<PropsType> = ({
  sendStatus,
  userId,
  setUserStatus,
  value,
}) => {
  const { handleSubmit, register } = useForm<FormData>()
  const onSubmit = handleSubmit((data) => {
    setUserStatus(data.status)
    sendStatus(data.status, userId)
  })

  return (
    <input
      type='text'
      name='status'
      ref={register}
      onBlur={onSubmit}
      autoFocus={true}
      placeholder='Change Status'
      defaultValue={value}
    />
  )
}
export default StatusEditor
