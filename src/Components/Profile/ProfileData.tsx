import React, { useState } from 'react'
import Status from './Status/Status'
import ProfileDataEditor from './ProfileDataEditor'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileData } from '../../Selectors/Selectors'
import { sendProfileData, sendStatus } from './ProfileReducer'
import { ProfileType } from '../../Types/Types'

type PropsType = {
  owner: boolean
}

const ProfileData: React.FC<PropsType> = React.memo(({ owner }) => {
  const profileData = useSelector(getProfileData)
  const dispatch = useDispatch()

  const [editMode, setEditMode] = useState(false)

  const editDataButton = () => {
    return (
      <div className='card-action'>
        <a href='#' className='modal-trigger' onClick={() => setEditMode(true)}>
          Edit Data
        </a>
      </div>
    )
  }

  const handleSendProfileData = (data: ProfileType) => {
    dispatch(sendProfileData(data))
  }

  const showProfileData = () => {
    if (editMode) {
      return (
        <ProfileDataEditor
          sendProfileData={handleSendProfileData}
          userId={profileData.userId}
          setEditMode={setEditMode}
        />
      )
    } else {
      return (
        <div className='card-content'>
          <div>About Me: {profileData.aboutMe || '...'}</div>
          <div>My skills: {profileData.lookingForAJobDescription || '...'}</div>
          {profileData.lookingForAJob && <div>Looking for a job</div>}
        </div>
      )
    }
  }

  const handleSendStatus = (status: string, userId: number) => {
    dispatch(sendStatus(status, userId))
  }

  return (
    <div className='card-stacked'>
      <div className='card-content'>
        <h5 className='card-title'>{profileData.fullName}</h5>
        <Status
          profileData={profileData}
          sendStatus={handleSendStatus}
          owner={owner}
        />
      </div>
      {showProfileData()}
      {owner && editDataButton()}
    </div>
  )
})

export default ProfileData
