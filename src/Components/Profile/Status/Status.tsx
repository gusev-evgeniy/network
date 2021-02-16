import React, { useEffect, useState } from 'react'
import StatusEditor from './StatusEditor'
import { ProfileType, StatusType } from '../../../Types/Types'

type PropsType = {
  profileData: ProfileType & StatusType
  owner: boolean
  sendStatus: (status: string, userId: number) => void
}

const Status: React.FC<PropsType> = ({ profileData, owner, sendStatus }) => {
  const [editMode, setEditMode] = useState(false)
  const [userStatus, setUserStatus] = useState(profileData.status)

  useEffect(() => {
    setUserStatus(profileData.status)
  }, [profileData.status])

  if (!owner)
    return (
      <p className='status'>{userStatus || `This user doesn't have status`}</p>
    )
  if (!editMode)
    return (
      <p className='status' onClick={() => setEditMode(true)}>
        {userStatus || `Change status`}
      </p>
    )
  else
    return (
      <form onBlur={() => setEditMode(false)}>
        <StatusEditor
          sendStatus={sendStatus}
          userId={profileData.userId}
          setUserStatus={setUserStatus}
          value={userStatus}
        />
      </form>
    )
}

export default Status
