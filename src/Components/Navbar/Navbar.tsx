import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import { getMyData } from '../../Selectors/Selectors'
import { useDispatch, useSelector } from 'react-redux'
import { leaveAccount } from '../Auth/MyDataReducer'

export const Navbar: React.FC = () => {
  const myData = useSelector(getMyData)
  const dispatch = useDispatch()

  const exitOnClick = () => {
    dispatch(leaveAccount())
    return <Redirect to='/users' />
  }

  const returnAuthLinks = () => {
    if (myData.id) {
      return (
        <>
          <li>
            <Link to='/profile'>{myData.login}</Link>
          </li>
          <li>
            <Link to='/users' onClick={exitOnClick}>
              Sign Out
            </Link>
          </li>
        </>
      )
    }

    return (
      <li>
        <Link to='/auth'>Login</Link>
      </li>
    )
  }

  return (
    <nav className='teal lighten-1'>
      <div className='nav-wrapper container'>
        <ul className='right'>
          <li>
            <Link to='/users'>Users</Link>
          </li>
          {returnAuthLinks()}
        </ul>
      </div>
    </nav>
  )
}
