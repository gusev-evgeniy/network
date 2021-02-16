import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserType } from '../../Types/Types'

type PropsType = {
  userData: UserType
  defaultImage: string
  isAuth: boolean
  disableButtons: number[]
  followUser: (userId: number) => void
  unfollowUser: (userId: number) => void
}

const UserCard: React.FC<PropsType> = ({
  userData,
  followUser,
  unfollowUser,
  defaultImage,
  isAuth,
  disableButtons,
}) => {
  const toggleButton = () => {
    if (!isAuth || disableButtons.includes(userData.id)) return 'btn disabled'
    else return 'btn'
  }

  return (
    <div className='col s12'>
      <div className='card horizontal userCard'>
        <div className='card-image listPhotos'>
          <NavLink to={`/profile/${userData.id}`}>
            {<img src={userData.photos.small || defaultImage} alt='ava' />}
          </NavLink>
        </div>
        <div className='card-stacked'>
          <div className='card-content'>
            <NavLink to={`/profile/${userData.id}`}>
              <h5 className='card-title flow-text'>{userData.name}</h5>
            </NavLink>
            <span className='flow-text'>{userData.status || '...'}</span>
          </div>
          <div className='card-action'>
            {userData.followed ? (
              <div
                className={toggleButton()}
                onClick={() => unfollowUser(userData.id)}
              >
                Unfollow
              </div>
            ) : (
              <div
                className={toggleButton()}
                onClick={() => followUser(userData.id)}
              >
                Follow
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserCard
