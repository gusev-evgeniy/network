import React from 'react'
import { useForm } from 'react-hook-form'
import { ProfileType } from '../../Types/Types'

type FormData = {
  fullName: string
  lookingForAJobDescription: string
  lookingForAJob: boolean
  aboutMe: string
}

type PropsType = {
  userId: number
  sendProfileData: (profileData: ProfileType) => void
  setEditMode: (isEditor: boolean) => void
}

const ProfileDataEditor: React.FC<PropsType> = ({ sendProfileData, userId, setEditMode, }) => {
  const { handleSubmit, register } = useForm<FormData>()

  const onSubmit = handleSubmit((data) => {
    const { fullName, aboutMe, lookingForAJobDescription, lookingForAJob } = data
    setEditMode(false)
    sendProfileData({ ...data, userId })
  })

  return (
    <form onSubmit={onSubmit} className='dataEditor'>
      <div>
        <input
          type='text'
          name='fullName'
          ref={register}
          autoFocus={true}
          placeholder='Full Name'
        />
      </div>
      <div>
        <input
          type='text'
          name='aboutMe'
          ref={register}
          placeholder='About Me'
        />
      </div>
      <div>
        <input
          type='text'
          name='lookingForAJobDescription'
          ref={register}
          placeholder='My skills'
        />
      </div>
      <div>
        <label htmlFor='lookingForAJob'>
          <input
            id='lookingForAJob'
            className='filled-in'
            type='checkbox'
            name='lookingForAJob'
            ref={register}
          />
          <span>Looking for a job</span>
        </label>
      </div>
      <input className='btn' type='submit' />
    </form>
  )
}
export default ProfileDataEditor
