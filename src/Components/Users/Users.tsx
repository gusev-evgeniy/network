import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { requestUsers, followUser, unfollowUser } from './UsersReducer'
import {
  getAuthInfo,
  getCurrentPage,
  getDefaultImage,
  getDisableButtons,
  getUsers,
  getUsersOnPage,
} from '../../Selectors/Selectors'
import { UserType } from '../../Types/Types'
import Paginator from './Paginator'
import UserCard from './UserCard'
import { UserFillter } from './UserFillter'

export const Users: React.FC = () => {
  const usersList = useSelector(getUsers)
  const defaultImage = useSelector(getDefaultImage)
  const isAuth = useSelector(getAuthInfo)
  const disableButtons = useSelector(getDisableButtons)
  const currentPage = useSelector(getCurrentPage)
  const usersOnPage = useSelector(getUsersOnPage)

  const dispatch = useDispatch()

  const submitFollowUser = (userId: number) => {
    dispatch(followUser(userId))
  }
  const submitUnfollowUser = (userId: number) => {
    dispatch(unfollowUser(userId))
  }

  const handleRequestUsers = (
    page = 1,
    term: string,
    usersOnPage: any,
    friend: string
  ) => {
    dispatch(requestUsers(page, usersOnPage, term, friend))
  }

  useEffect(() => {
    handleRequestUsers(1, '', usersOnPage, 'null')
  }, [])

  const showUsers = () => {
    return usersList.map((user: UserType) => {
      return (
        <UserCard
          key={user.id}
          isAuth={isAuth}
          disableButtons={disableButtons}
          userData={user}
          followUser={submitFollowUser}
          defaultImage={defaultImage}
          unfollowUser={submitUnfollowUser}
        />
      )
    })
  }

  return (
    <div className='row usersList'>
      <UserFillter requestUsers={handleRequestUsers} />
      {usersList.length === 0 ? (
        <div>The list is empty</div>
      ) : (
        <>
          <Paginator currentPage={currentPage} usersOnPage={usersOnPage} />
          <ul>{showUsers()}</ul>
        </>
      )}
    </div>
  )
}
