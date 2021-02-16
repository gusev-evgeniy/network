import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  getMyData,
  getDefaultImage,
  getProfilePhotos,
} from '../../Selectors/Selectors'
import { requestProfileData, loadPhoto } from './ProfileReducer'
import ProfileData from './ProfileData'
import { Posts } from './Posts/Posts'

type PropsType = {
  match: any
}

const Profile: React.FC<PropsType> = ({ match }) => {
  const myData = useSelector(getMyData)
  const defaultImage = useSelector(getDefaultImage)
  const photos = useSelector(getProfilePhotos)

  const dispatch = useDispatch()

  const [owner, setOwner] = useState(false)
  const photoPath = photos.large || defaultImage

  useEffect(() => {
    const userId = match.params.userId || myData.id

    if (userId) dispatch(requestProfileData(userId))
    if (userId === myData.id) setOwner(true)
  }, [dispatch, myData.id, match.params.userId])

  const addPhoto = (e: any) => {
    if (e.target) dispatch(loadPhoto(e.target.files[0]))
  }

  const addPhotoButton = () => {
    return (
      <div className='file-field input-field photoButton'>
        <div className='btn-floating halfway-fab waves-effect waves-light red'>
          <i className='material-icons'>add_a_photo</i>
          <input type='file' onChange={addPhoto} />
        </div>
      </div>
    )
  }

  return (
    <div className='profile'>
      <div className='col s12 m5'>
        <div className='card horizontal profileData'>
          <div className='card-image'>
            <img alt='ava' src={photoPath} />
            <form>{owner && addPhotoButton()}</form>
          </div>
          <ProfileData owner={owner} />
        </div>
      </div>
      <Posts owner={owner} />
    </div>
  )
}

export default withRouter(Profile)
